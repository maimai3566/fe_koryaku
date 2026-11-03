// ========================================================
// ファイアーエムブレム 万紫千紅 - アプリケーションロジック
// ========================================================

// 状態管理
let characters = [];
let routeJoinedStatus = {};
let currentRoute = "all";
let currentViewMode = "char"; // "char" | "fame" | "support"
let sortState = {
  key: null,
  order: null
};

const STORAGE_KEY_CHARS = "fe_chars_data_v7";
const STORAGE_KEY_ROUTE_JOINED = "fe_route_joined_status_v7";

// 初期化
function init() {
  // 1. マスターデータ安全確認
  const masterList = (typeof DEFAULT_CHARACTERS !== "undefined" && Array.isArray(DEFAULT_CHARACTERS)) 
    ? DEFAULT_CHARACTERS 
    : [];

  // 2. キャラクターデータのロード（空データガード付き）
  const savedChars = localStorage.getItem(STORAGE_KEY_CHARS);
  if (savedChars) {
    try {
      const parsed = JSON.parse(savedChars);
      if (Array.isArray(parsed) && parsed.length > 0) {
        characters = parsed;
      } else {
        characters = [...masterList];
      }
    } catch (e) {
      characters = [...masterList];
    }
  } else {
    characters = [...masterList];
  }

  // 万一それでも空ならマスターを強制適用
  if (characters.length === 0 && masterList.length > 0) {
    characters = [...masterList];
    localStorage.setItem(STORAGE_KEY_CHARS, JSON.stringify(characters));
  }

  // 3. 加入チェック状態の復元（過去キーからの自動引き継ぎ）
  let savedJoined = localStorage.getItem(STORAGE_KEY_ROUTE_JOINED);
  if (!savedJoined) {
    savedJoined = localStorage.getItem("fe_route_joined_status_v6") 
               || localStorage.getItem("fe_route_joined_status_v5") 
               || localStorage.getItem("fe_route_joined_status_v4");
    if (savedJoined) {
      localStorage.setItem(STORAGE_KEY_ROUTE_JOINED, savedJoined);
    }
  }

  if (savedJoined) {
    try {
      routeJoinedStatus = JSON.parse(savedJoined);
    } catch (e) {
      routeJoinedStatus = {};
    }
  }

  renderApp();
}

// 初期データに強制リセット
function resetToLatestData() {
  if (confirm("最新のキャラクターリスト（全58名）に初期化しますか？\n※加入チェック状態は保持されます。")) {
    characters = [...DEFAULT_CHARACTERS];
    localStorage.setItem(STORAGE_KEY_CHARS, JSON.stringify(characters));
    renderApp();
  }
}

// 表示モード（キャラ別 / 名声別 / 支援別）の切り替え
function setViewMode(mode) {
  currentViewMode = mode;
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-mode") === mode);
  });

  // 全モードでルート切り替えタブを表示可能にする（スマホでの横スクロール負担軽減！）
  const routeTabsEl = document.getElementById("routeTabs");
  if (routeTabsEl) {
    routeTabsEl.style.display = "flex";
  }

  renderApp();
}

// ルート別の加入トグル（セルやチップのタップ）
function toggleRouteJoined(charId, routeKey, event) {
  if (event) event.stopPropagation();
  const key = `${charId}_${routeKey}`;
  routeJoinedStatus[key] = !routeJoinedStatus[key];
  localStorage.setItem(STORAGE_KEY_ROUTE_JOINED, JSON.stringify(routeJoinedStatus));
  renderApp();
}

// メイン描画ディスパッチャー
function renderApp() {
  if (currentViewMode === "char") {
    renderCharDetailTable();
  } else if (currentViewMode === "fame") {
    renderFameMatrixTable();
  } else if (currentViewMode === "support") {
    renderSupportMatrixTable();
  }
}

// ========================================================
// 1. キャラクター別 詳細マトリクス描画
// ========================================================
function renderCharDetailTable() {
  const table = document.getElementById("charTable");
  const thead = document.getElementById("charTableHead");
  const tbody = document.getElementById("charTableBody");

  const isSingle = (currentRoute !== "all");

  if (isSingle) {
    // 【単一ルート表示モード】
    // 5列（キャラ・支援・名声・条件・期限）のみをピュアに生成し、colspanやhiddenセルによる間延びを完全排除！
    table.classList.add("single-route-view");
    const routeTitles = { kai: "カイ篇", dietrich: "ディートリヒ篇", theodora: "セオドラ篇", leda: "レダ篇" };

    thead.innerHTML = `
      <tr>
        <th class="col-char sortable" style="width: 120px;" onclick="handleSort('name')" title="名前順でソート">
          キャラクター <span class="sort-icon" id="sort-icon-name">⇅</span>
        </th>
        <th class="th-sub val-support sortable" style="width: 65px;" onclick="handleSort('${currentRoute}.support')" title="支援順でソート">
          支援 <span class="sort-icon" id="sort-icon-${currentRoute}-support">⇅</span>
        </th>
        <th class="th-sub val-fame sortable" style="width: 65px;" onclick="handleSort('${currentRoute}.fame')" title="名声順でソート">
          名声 <span class="sort-icon" id="sort-icon-${currentRoute}-fame">⇅</span>
        </th>
        <th class="th-sub th-cond-head" style="width: 290px;">加入条件（${routeTitles[currentRoute]}）</th>
        <th class="th-sub val-limit sortable" style="width: 80px;" onclick="handleSort('${currentRoute}.limit')" title="期限順でソート">
          期限 <span class="sort-icon" id="sort-icon-${currentRoute}-limit">⇅</span>
        </th>
      </tr>
    `;
  } else {
    // 【全主人公 比較モード】（17列テーブル）
    table.classList.remove("single-route-view");
    thead.innerHTML = `
      <tr>
        <th rowspan="2" class="col-char sortable" onclick="handleSort('name')" title="名前順で並べ替え">
          キャラクター <span class="sort-icon" id="sort-icon-name">⇅</span>
        </th>
        <th colspan="4" class="th-hero th-kai">カイ</th>
        <th colspan="4" class="th-hero th-dietrich">ディートリヒ</th>
        <th colspan="4" class="th-hero th-theodora">セオドラ</th>
        <th colspan="4" class="th-hero th-leda">レダ</th>
      </tr>
      <tr>
        <th class="th-sub sortable" style="width: 55px;" onclick="handleSort('kai.support')" title="支援順でソート">
          支援 <span class="sort-icon" id="sort-icon-kai-support">⇅</span>
        </th>
        <th class="th-sub sortable" style="width: 55px;" onclick="handleSort('kai.fame')" title="名声順でソート">
          名声 <span class="sort-icon" id="sort-icon-kai-fame">⇅</span>
        </th>
        <th class="th-sub">加入条件</th>
        <th class="th-sub sortable" style="width: 70px;" onclick="handleSort('kai.limit')" title="期限順でソート">
          期限 <span class="sort-icon" id="sort-icon-kai-limit">⇅</span>
        </th>

        <th class="th-sub sortable" style="width: 55px;" onclick="handleSort('dietrich.support')" title="支援順でソート">
          支援 <span class="sort-icon" id="sort-icon-dietrich-support">⇅</span>
        </th>
        <th class="th-sub sortable" style="width: 55px;" onclick="handleSort('dietrich.fame')" title="名声順でソート">
          名声 <span class="sort-icon" id="sort-icon-dietrich-fame">⇅</span>
        </th>
        <th class="th-sub">加入条件</th>
        <th class="th-sub sortable" style="width: 70px;" onclick="handleSort('dietrich.limit')" title="期限順でソート">
          期限 <span class="sort-icon" id="sort-icon-dietrich-limit">⇅</span>
        </th>

        <th class="th-sub sortable" style="width: 55px;" onclick="handleSort('theodora.support')" title="支援順でソート">
          支援 <span class="sort-icon" id="sort-icon-theodora-support">⇅</span>
        </th>
        <th class="th-sub sortable" style="width: 55px;" onclick="handleSort('theodora.fame')" title="名声順でソート">
          名声 <span class="sort-icon" id="sort-icon-theodora-fame">⇅</span>
        </th>
        <th class="th-sub">加入条件</th>
        <th class="th-sub sortable" style="width: 70px;" onclick="handleSort('theodora.limit')" title="期限順でソート">
          期限 <span class="sort-icon" id="sort-icon-theodora-limit">⇅</span>
        </th>

        <th class="th-sub sortable" style="width: 55px;" onclick="handleSort('leda.support')" title="支援順でソート">
          支援 <span class="sort-icon" id="sort-icon-leda-support">⇅</span>
        </th>
        <th class="th-sub sortable" style="width: 55px;" onclick="handleSort('leda.fame')" title="名声順でソート">
          名声 <span class="sort-icon" id="sort-icon-leda-fame">⇅</span>
        </th>
        <th class="th-sub">加入条件</th>
        <th class="th-sub sortable" style="width: 70px;" onclick="handleSort('leda.limit')" title="期限順でソート">
          期限 <span class="sort-icon" id="sort-icon-leda-limit">⇅</span>
        </th>
      </tr>
    `;
  }

  tbody.innerHTML = "";
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const unjoinedOnly = document.getElementById("unjoinedOnly").checked;

  let listToRender = [...characters];
  if (sortState.key && sortState.order) {
    listToRender.sort((a, b) => {
      const valA = parseSortValue(a, sortState.key);
      const valB = parseSortValue(b, sortState.key);
      let cmp = 0;
      if (typeof valA === "number" && typeof valB === "number") {
        cmp = valA - valB;
      } else {
        cmp = String(valA).localeCompare(String(valB), "ja");
      }
      return sortState.order === "asc" ? cmp : -cmp;
    });
  }

  let displayedCount = 0;

  listToRender.forEach((char) => {
    // フィルター判定
    if (unjoinedOnly) {
      if (currentRoute === "all") {
        const allJoined = ["kai", "dietrich", "theodora", "leda"].every(r => !!routeJoinedStatus[`${char.id}_${r}`]);
        if (allJoined) return;
      } else {
        if (routeJoinedStatus[`${char.id}_${currentRoute}`]) return;
      }
    }

    if (query) {
      const searchTarget = [
        char.name,
        char.kai?.cond,
        char.dietrich?.cond,
        char.theodora?.cond,
        char.leda?.cond
      ].join(" ").toLowerCase();
      if (!searchTarget.includes(query)) return;
    }

    displayedCount++;

    const tr = document.createElement("tr");
    const charTd = `
      <td class="col-char" onclick="openEditModal('${char.id}')" title="クリックして条件を編集">
        ${char.name}
      </td>
    `;

    const makeSingleCellGroup = (routeKey, routeTitle) => {
      const isJoined = !!routeJoinedStatus[`${char.id}_${routeKey}`];
      const d = char[routeKey] || { support: "-", fame: "-", cond: "-", limit: "-" };

      let supportHtml = d.support;
      if (d.support === "初期") supportHtml = `<span class="badge badge-init">初期</span>`;
      else if (d.support !== "-") supportHtml = `<span class="badge">💖 ${d.support}</span>`;
      else supportHtml = `<span class="badge-none">-</span>`;

      let fameHtml = d.fame;
      if (d.fame && d.fame !== "-") fameHtml = `<span class="badge">👑 ${d.fame}</span>`;
      else fameHtml = `<span class="badge-none">-</span>`;

      let condPrefix = isJoined ? `<span class="joined-tag">✔ 加入済</span>` : "";
      let condHtml = `<div class="val-cond">${condPrefix}${d.cond || "-"}</div>`;
      
      let limitHtml = d.limit || "-";
      if (limitHtml.includes("3部")) {
        limitHtml = `<span class="badge badge-story3">${limitHtml}</span>`;
      } else {
        limitHtml = `<div class="val-limit">${limitHtml}</div>`;
      }

      const joinedClass = isJoined ? "cell-joined" : "";
      const clickAttr = `onclick="toggleRouteJoined('${char.id}', '${routeKey}', event)" title="タップで${routeTitle}の加入状態を切替"`;

      return `
        <td class="col-hero-${routeKey} route-cell val-support ${joinedClass}" ${clickAttr}>${supportHtml}</td>
        <td class="col-hero-${routeKey} route-cell val-fame ${joinedClass}" ${clickAttr}>${fameHtml}</td>
        <td class="col-hero-${routeKey} route-cell col-cond-cell ${joinedClass}" ${clickAttr}>${condHtml}</td>
        <td class="col-hero-${routeKey} route-cell val-limit ${joinedClass}" ${clickAttr}>${limitHtml}</td>
      `;
    };

    if (isSingle) {
      // 単一ルート時は該当ルートの4セルだけを出力
      tr.innerHTML = charTd + makeSingleCellGroup(currentRoute, currentRoute);
    } else {
      // 全主人公表示時
      tr.innerHTML = charTd 
        + makeSingleCellGroup("kai", "カイ篇") 
        + makeSingleCellGroup("dietrich", "ディートリヒ篇") 
        + makeSingleCellGroup("theodora", "セオドラ篇") 
        + makeSingleCellGroup("leda", "レダ篇");
    }

    tbody.appendChild(tr);
  });

  if (displayedCount === 0) {
    const colSpanNum = isSingle ? 5 : 17;
    tbody.innerHTML = `
      <tr>
        <td colspan="${colSpanNum}" style="text-align: center; padding: 32px 16px; color: var(--text-sub);">
          <div style="font-size: 1.1rem; margin-bottom: 8px;">キャラクターが見つかりません</div>
          <div style="font-size: 0.85rem; margin-bottom: 16px;">検索条件に一致するデータがないか、ブラウザのキャッシュが古い可能性があります。</div>
          <button class="btn btn-primary" onclick="resetToLatestData()" style="padding: 8px 16px;">🔄 全58名の最新データを読み込む</button>
        </td>
      </tr>
    `;
  }

  updateHitCount(displayedCount);
  updateSortIcons();
}

// ========================================================
// 2. 名声別 早見マトリクス描画（縦: 名声Lv / 横: 主人公）
// ========================================================
function renderFameMatrixTable() {
  const table = document.getElementById("charTable");
  const thead = document.getElementById("charTableHead");
  const tbody = document.getElementById("charTableBody");

  const isSingle = (currentRoute !== "all");
  const allRoutes = [
    { key: "kai", name: "カイ" },
    { key: "dietrich", name: "ディートリヒ" },
    { key: "theodora", name: "セオドラ" },
    { key: "leda", name: "レダ" }
  ];
  const routes = isSingle 
    ? allRoutes.filter(r => r.key === currentRoute) 
    : allRoutes;

  table.classList.remove("single-route-view");
  if (isSingle) {
    table.classList.add("single-route-matrix");
    table.classList.remove("all-route-matrix");
    const r = routes[0];
    thead.innerHTML = `
      <tr>
        <th class="th-category" style="width: 100px;">名声レベル</th>
        <th class="th-hero th-${r.key}">${r.name}篇</th>
      </tr>
    `;
  } else {
    table.classList.add("all-route-matrix");
    table.classList.remove("single-route-matrix");
    thead.innerHTML = `
      <tr>
        <th class="th-category" style="width: 95px;">名声レベル</th>
        <th class="th-hero th-kai">カイ</th>
        <th class="th-hero th-dietrich">ディートリヒ</th>
        <th class="th-hero th-theodora">セオドラ</th>
        <th class="th-hero th-leda">レダ</th>
      </tr>
    `;
  }

  tbody.innerHTML = "";
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const unjoinedOnly = document.getElementById("unjoinedOnly").checked;

  const FAME_ROWS = [
    { label: "条件なし / 初期", key: "none" },
    { label: "名声 Lv.2", key: "2" },
    { label: "名声 Lv.3", key: "3" },
    { label: "名声 Lv.4", key: "4" },
    { label: "名声 Lv.5", key: "5" },
    { label: "名声 Lv.6", key: "6" },
    { label: "名声 Lv.7", key: "7" },
    { label: "名声 Lv.8", key: "8" },
    { label: "名声 Lv.9", key: "9" },
    { label: "第3部加入（救世編）", key: "3rd" }
  ];

  let totalCharsRendered = 0;

  FAME_ROWS.forEach(rowDef => {
    const tr = document.createElement("tr");
    let rowHtml = `<td class="th-category">${rowDef.label}</td>`;

    routes.forEach(r => {
      const matched = characters.filter(char => {
        const d = char[r.key] || {};
        const fame = (d.fame || "").trim();
        const cond = (d.cond || "");

        if (query) {
          const searchTarget = [char.name, cond].join(" ").toLowerCase();
          if (!searchTarget.includes(query)) return false;
        }

        if (unjoinedOnly && routeJoinedStatus[`${char.id}_${r.key}`]) {
          return false;
        }

        if (rowDef.key === "none") {
          return (fame === "-" || fame === "") && !cond.includes("3部") && (d.support === "初期" || cond.includes("自動") || cond.includes("初期"));
        }
        if (rowDef.key === "3rd") {
          return cond.includes("3部");
        }
        const m = fame.match(/(\d+)/);
        return m ? m[1] === rowDef.key : false;
      });

      let cellContent = "";
      if (matched.length === 0) {
        cellContent = `<span class="empty-cell-text">-</span>`;
      } else {
        totalCharsRendered += matched.length;
        cellContent = `<div class="char-chip-list">` + matched.map(char => {
          const isJoined = !!routeJoinedStatus[`${char.id}_${r.key}`];
          let supp = "";
          const suppVal = (char[r.key]?.support || "").trim();
          if (suppVal && suppVal !== "-") {
            supp = `(💖${suppVal})`;
          }
          return `
            <div class="char-chip ${isJoined ? 'joined' : ''}" 
                 onclick="toggleRouteJoined('${char.id}', '${r.key}', event)"
                 title="タップで${r.name}篇の加入状態を切替">
              <span class="char-chip-name">${char.name}</span>
              <span class="char-chip-sub">${supp}</span>
            </div>
          `;
        }).join("") + `</div>`;
      }

      rowHtml += `<td class="matrix-cell">${cellContent}</td>`;
    });

    tr.innerHTML = rowHtml;
    tbody.appendChild(tr);
  });

  updateHitCount(totalCharsRendered, "延べ");
}

// ========================================================
// 3. 支援別 早見マトリクス描画（縦: 支援Lv / 横: 主人公）
// ========================================================
function renderSupportMatrixTable() {
  const table = document.getElementById("charTable");
  const thead = document.getElementById("charTableHead");
  const tbody = document.getElementById("charTableBody");

  const isSingle = (currentRoute !== "all");
  const allRoutes = [
    { key: "kai", name: "カイ" },
    { key: "dietrich", name: "ディートリヒ" },
    { key: "theodora", name: "セオドラ" },
    { key: "leda", name: "レダ" }
  ];
  const routes = isSingle 
    ? allRoutes.filter(r => r.key === currentRoute) 
    : allRoutes;

  table.classList.remove("single-route-view");
  if (isSingle) {
    table.classList.add("single-route-matrix");
    table.classList.remove("all-route-matrix");
    const r = routes[0];
    thead.innerHTML = `
      <tr>
        <th class="th-category" style="width: 100px;">支援レベル</th>
        <th class="th-hero th-${r.key}">${r.name}篇</th>
      </tr>
    `;
  } else {
    table.classList.add("all-route-matrix");
    table.classList.remove("single-route-matrix");
    thead.innerHTML = `
      <tr>
        <th class="th-category" style="width: 95px;">支援レベル</th>
        <th class="th-hero th-kai">カイ</th>
        <th class="th-hero th-dietrich">ディートリヒ</th>
        <th class="th-hero th-theodora">セオドラ</th>
        <th class="th-hero th-leda">レダ</th>
      </tr>
    `;
  }

  tbody.innerHTML = "";
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const unjoinedOnly = document.getElementById("unjoinedOnly").checked;

  const SUPPORT_ROWS = [
    { label: "初期加入（支援不要）", key: "init" },
    { label: "支援 Lv.1", key: "1" },
    { label: "支援 Lv.2", key: "2" },
    { label: "支援 Lv.3", key: "3" },
    { label: "第3部加入（救世編）", key: "3rd" }
  ];

  let totalCharsRendered = 0;

  SUPPORT_ROWS.forEach(rowDef => {
    const tr = document.createElement("tr");
    let rowHtml = `<td class="th-category">${rowDef.label}</td>`;

    routes.forEach(r => {
      const matched = characters.filter(char => {
        const d = char[r.key] || {};
        const supp = (d.support || "").trim();
        const cond = (d.cond || "");

        if (query) {
          const searchTarget = [char.name, cond].join(" ").toLowerCase();
          if (!searchTarget.includes(query)) return false;
        }

        if (unjoinedOnly && routeJoinedStatus[`${char.id}_${r.key}`]) {
          return false;
        }

        if (rowDef.key === "init") {
          return supp === "初期";
        }
        if (rowDef.key === "3rd") {
          return cond.includes("3部");
        }
        const m = supp.match(/(\d+)/);
        return m ? m[1] === rowDef.key : false;
      });

      let cellContent = "";
      if (matched.length === 0) {
        cellContent = `<span class="empty-cell-text">-</span>`;
      } else {
        totalCharsRendered += matched.length;
        cellContent = `<div class="char-chip-list">` + matched.map(char => {
          const isJoined = !!routeJoinedStatus[`${char.id}_${r.key}`];
          let fame = "";
          const fameVal = (char[r.key]?.fame || "").trim();
          if (fameVal && fameVal !== "-") {
            fame = `(👑${fameVal})`;
          }
          return `
            <div class="char-chip ${isJoined ? 'joined' : ''}" 
                 onclick="toggleRouteJoined('${char.id}', '${r.key}', event)"
                 title="タップで${r.name}篇の加入状態を切替">
              <span class="char-chip-name">${char.name}</span>
              <span class="char-chip-sub">${fame}</span>
            </div>
          `;
        }).join("") + `</div>`;
      }

      rowHtml += `<td class="matrix-cell">${cellContent}</td>`;
    });

    tr.innerHTML = rowHtml;
    tbody.appendChild(tr);
  });

  updateHitCount(totalCharsRendered, "延べ");
}

function updateHitCount(count, prefix = "") {
  const countEl = document.getElementById("hitCount");
  if (countEl) {
    if (prefix) {
      countEl.textContent = `${prefix} ${count} 名表示`;
    } else {
      countEl.textContent = `${count} / ${characters.length} 件`;
    }
  }
}

// ソート用値の抽出
function parseSortValue(char, key) {
  if (key === "name") return char.name || "";
  const [hero, field] = key.split(".");
  const d = (char[hero] && typeof char[hero] === "object") ? char[hero] : {};
  const val = (d[field] || "").trim();

  if (field === "support") {
    if (val === "初期") return 0;
    const match = val.match(/(\d+)/);
    if (match) return parseInt(match[1], 10);
    if (val.includes("不可") || val === "-") return 999;
    return 50;
  }

  if (field === "fame") {
    if (val === "-" || !val) {
      if (d.support === "初期" || d.cond?.includes("自動") || d.cond?.includes("初期")) return 0;
      if (d.cond?.includes("3部")) return 300;
      if (d.cond?.includes("不可")) return 999;
      return 0;
    }
    const match = val.match(/(\d+)/);
    if (match) return parseInt(match[1], 10);
    return 50;
  }

  if (field === "limit") {
    if (val === "自動") return 0;
    const match = val.match(/(\d+)章/);
    if (match) return parseInt(match[1], 10);
    if (val.includes("3部")) return 30;
    if (val.includes("不可")) return 999;
    return 50;
  }

  return val;
}

// ソートハンドラ
function handleSort(key) {
  if (sortState.key === key) {
    if (sortState.order === "asc") {
      sortState.order = "desc";
    } else if (sortState.order === "desc") {
      sortState.key = null;
      sortState.order = null;
    }
  } else {
    sortState.key = key;
    sortState.order = "asc";
  }
  renderApp();
}

function updateSortIcons() {
  const sortKeys = [
    "name",
    "kai.support", "kai.fame", "kai.limit",
    "dietrich.support", "dietrich.fame", "dietrich.limit",
    "theodora.support", "theodora.fame", "theodora.limit",
    "leda.support", "leda.fame", "leda.limit"
  ];

  sortKeys.forEach(k => {
    const elementId = "sort-icon-" + k.replace(".", "-");
    const el = document.getElementById(elementId);
    if (!el) return;
    const parentTh = el.closest(".sortable");

    if (sortState.key === k) {
      if (parentTh) parentTh.classList.add("active-sort");
      el.textContent = sortState.order === "asc" ? "▲" : "▼";
    } else {
      if (parentTh) parentTh.classList.remove("active-sort");
      el.textContent = "⇅";
    }
  });
}

// ルート切り替え（キャラ別表用）
function setRouteFilter(route) {
  currentRoute = route;
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-route") === route);
  });
  renderApp();
}

function filterTable() {
  renderApp();
}

function toggleCompactMode() {
  const isCompact = document.getElementById("compactMode").checked;
  document.querySelectorAll("th, td").forEach(el => {
    if (isCompact) {
      el.style.padding = "4px 3px";
      el.style.fontSize = "11px";
    } else {
      el.style.padding = "";
      el.style.fontSize = "";
    }
  });
}

// モーダル操作
function openAddModal() {
  document.getElementById("modalTitle").textContent = "＋ 新規キャラクター追加";
  document.getElementById("editCharId").value = "";
  document.getElementById("formName").value = "";
  document.getElementById("formKaiSupport").value = "";
  document.getElementById("formKaiFame").value = "";
  document.getElementById("formKaiCond").value = "";
  document.getElementById("formKaiLimit").value = "";
  document.getElementById("formDietrichSupport").value = "";
  document.getElementById("formDietrichFame").value = "";
  document.getElementById("formDietrichCond").value = "";
  document.getElementById("formDietrichLimit").value = "";
  document.getElementById("formTheodoraSupport").value = "";
  document.getElementById("formTheodoraFame").value = "";
  document.getElementById("formTheodoraCond").value = "";
  document.getElementById("formTheodoraLimit").value = "";
  document.getElementById("formLedaSupport").value = "";
  document.getElementById("formLedaFame").value = "";
  document.getElementById("formLedaCond").value = "";
  document.getElementById("formLedaLimit").value = "";
  document.getElementById("addModal").classList.add("active");
}

function openEditModal(charId) {
  const char = characters.find(c => c.id === charId);
  if (!char) return;
  document.getElementById("modalTitle").textContent = `✏️ ${char.name} の条件を編集`;
  document.getElementById("editCharId").value = char.id;
  document.getElementById("formName").value = char.name || "";
  
  document.getElementById("formKaiSupport").value = char.kai?.support || "";
  document.getElementById("formKaiFame").value = char.kai?.fame || "";
  document.getElementById("formKaiCond").value = char.kai?.cond || "";
  document.getElementById("formKaiLimit").value = char.kai?.limit || "";

  document.getElementById("formDietrichSupport").value = char.dietrich?.support || "";
  document.getElementById("formDietrichFame").value = char.dietrich?.fame || "";
  document.getElementById("formDietrichCond").value = char.dietrich?.cond || "";
  document.getElementById("formDietrichLimit").value = char.dietrich?.limit || "";

  document.getElementById("formTheodoraSupport").value = char.theodora?.support || "";
  document.getElementById("formTheodoraFame").value = char.theodora?.fame || "";
  document.getElementById("formTheodoraCond").value = char.theodora?.cond || "";
  document.getElementById("formTheodoraLimit").value = char.theodora?.limit || "";

  document.getElementById("formLedaSupport").value = char.leda?.support || "";
  document.getElementById("formLedaFame").value = char.leda?.fame || "";
  document.getElementById("formLedaCond").value = char.leda?.cond || "";
  document.getElementById("formLedaLimit").value = char.leda?.limit || "";

  document.getElementById("addModal").classList.add("active");
}

function closeAddModal() {
  document.getElementById("addModal").classList.remove("active");
}

function saveCharacter() {
  const name = document.getElementById("formName").value.trim();
  if (!name) {
    alert("キャラクター名を入力してください");
    return;
  }

  const editId = document.getElementById("editCharId").value;
  const charData = {
    kai: {
      support: document.getElementById("formKaiSupport").value.trim() || "-",
      fame: document.getElementById("formKaiFame").value.trim() || "-",
      cond: document.getElementById("formKaiCond").value.trim() || "-",
      limit: document.getElementById("formKaiLimit").value.trim() || "-"
    },
    dietrich: {
      support: document.getElementById("formDietrichSupport").value.trim() || "-",
      fame: document.getElementById("formDietrichFame").value.trim() || "-",
      cond: document.getElementById("formDietrichCond").value.trim() || "-",
      limit: document.getElementById("formDietrichLimit").value.trim() || "-"
    },
    theodora: {
      support: document.getElementById("formTheodoraSupport").value.trim() || "-",
      fame: document.getElementById("formTheodoraFame").value.trim() || "-",
      cond: document.getElementById("formTheodoraCond").value.trim() || "-",
      limit: document.getElementById("formTheodoraLimit").value.trim() || "-"
    },
    leda: {
      support: document.getElementById("formLedaSupport").value.trim() || "-",
      fame: document.getElementById("formLedaFame").value.trim() || "-",
      cond: document.getElementById("formLedaCond").value.trim() || "-",
      limit: document.getElementById("formLedaLimit").value.trim() || "-"
    }
  };

  if (editId) {
    const idx = characters.findIndex(c => c.id === editId);
    if (idx !== -1) {
      characters[idx] = { ...characters[idx], name: name, ...charData };
    }
  } else {
    const newChar = {
      id: "char_" + Date.now(),
      name: name,
      ...charData
    };
    characters.push(newChar);
  }

  localStorage.setItem(STORAGE_KEY_CHARS, JSON.stringify(characters));
  closeAddModal();
  renderApp();
}

// バックアップ・復元
function exportData() {
  const data = {
    characters: characters,
    routeJoinedStatus: routeJoinedStatus,
    exportedAt: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `fe_bansen_koryaku_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importData() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const imported = JSON.parse(evt.target.result);
        if (imported.characters) {
          characters = imported.characters;
          localStorage.setItem(STORAGE_KEY_CHARS, JSON.stringify(characters));
        }
        if (imported.routeJoinedStatus) {
          routeJoinedStatus = imported.routeJoinedStatus;
          localStorage.setItem(STORAGE_KEY_ROUTE_JOINED, JSON.stringify(routeJoinedStatus));
        }
        renderApp();
        alert("データを復元しました！");
      } catch (err) {
        alert("JSONの読み込みに失敗しました");
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// 実行開始
init();
