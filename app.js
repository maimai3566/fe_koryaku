// ========================================================
// ファイアーエムブレム 万紫千紅 - アプリケーションロジック
// ========================================================

// 状態管理
let characters = [];
let routeJoinedStatus = {};
let currentRoute = "all";
let sortState = {
  key: null,
  order: null
};

// 抽出フィルター状態
let currentFameFilter = "all";
let currentSupportFilter = "all";

const STORAGE_KEY_CHARS = "fe_chars_data_v6";
const STORAGE_KEY_ROUTE_JOINED = "fe_route_joined_status_v6";

// 初期化
function init() {
  const savedChars = localStorage.getItem(STORAGE_KEY_CHARS);
  if (savedChars) {
    try {
      characters = JSON.parse(savedChars);
    } catch (e) {
      characters = [...DEFAULT_CHARACTERS];
    }
  } else {
    characters = [...DEFAULT_CHARACTERS];
  }

  // 以前のバージョンからの加入チェック状態を自動引継ぎ
  let savedJoined = localStorage.getItem(STORAGE_KEY_ROUTE_JOINED);
  if (!savedJoined) {
    savedJoined = localStorage.getItem("fe_route_joined_status_v5") 
               || localStorage.getItem("fe_route_joined_status_v4")
               || localStorage.getItem("fe_route_joined_status_v3");
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

  renderTable();
}

// 初期データにリセット
function resetToLatestData() {
  if (confirm("最新のキャラクターリスト（全57名）に初期化しますか？\n※加入チェック状態は保持されます。")) {
    characters = [...DEFAULT_CHARACTERS];
    localStorage.setItem(STORAGE_KEY_CHARS, JSON.stringify(characters));
    renderTable();
  }
}

// ルート別の加入トグル（セルタップ）
function toggleRouteJoined(charId, routeKey, event) {
  if (event) event.stopPropagation();
  const key = `${charId}_${routeKey}`;
  routeJoinedStatus[key] = !routeJoinedStatus[key];
  localStorage.setItem(STORAGE_KEY_ROUTE_JOINED, JSON.stringify(routeJoinedStatus));
  renderTable();
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

// ソート切り替えハンドラ
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
  updateSortIcons();
  renderTable();
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

// 名声・支援フィルター判定
function matchFameFilter(char, routeKey) {
  if (currentFameFilter === "all") return true;

  const checkRoute = (r) => {
    const fameVal = (char[r]?.fame || "").trim();
    const condVal = (char[r]?.cond || "");

    if (currentFameFilter === "none") {
      return fameVal === "-" || fameVal === "" || condVal.includes("初期") || condVal.includes("自動");
    }
    if (currentFameFilter === "3rd") {
      return condVal.includes("3部");
    }
    // Lv.2 〜 Lv.9
    const match = fameVal.match(/(\d+)/);
    return match ? match[1] === currentFameFilter : false;
  };

  if (routeKey === "all") {
    return ["kai", "dietrich", "theodora", "leda"].some(r => checkRoute(r));
  } else {
    return checkRoute(routeKey);
  }
}

function matchSupportFilter(char, routeKey) {
  if (currentSupportFilter === "all") return true;

  const checkRoute = (r) => {
    const suppVal = (char[r]?.support || "").trim();
    if (currentSupportFilter === "init") {
      return suppVal === "初期";
    }
    const match = suppVal.match(/(\d+)/);
    return match ? match[1] === currentSupportFilter : false;
  };

  if (routeKey === "all") {
    return ["kai", "dietrich", "theodora", "leda"].some(r => checkRoute(r));
  } else {
    return checkRoute(routeKey);
  }
}

// テーブル描画
function renderTable() {
  const tbody = document.getElementById("charTableBody");
  tbody.innerHTML = "";

  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const unjoinedOnly = document.getElementById("unjoinedOnly").checked;
  currentFameFilter = document.getElementById("fameFilter").value;
  currentSupportFilter = document.getElementById("supportFilter").value;

  // ソート処理
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
    // 1. 未加入のみフィルター
    if (unjoinedOnly) {
      if (currentRoute === "all") {
        const allJoined = ["kai", "dietrich", "theodora", "leda"].every(r => !!routeJoinedStatus[`${char.id}_${r}`]);
        if (allJoined) return;
      } else {
        if (routeJoinedStatus[`${char.id}_${currentRoute}`]) return;
      }
    }

    // 2. 名声Lv抽出フィルター
    if (!matchFameFilter(char, currentRoute)) return;

    // 3. 支援Lv抽出フィルター
    if (!matchSupportFilter(char, currentRoute)) return;

    // 4. キーワード検索
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

    // キャラクター名セル（クリックで編集モーダル）
    const charTd = `
      <td class="col-char" onclick="openEditModal('${char.id}')" title="クリックして条件を編集">
        ${char.name}
      </td>
    `;

    // 各主人公セル
    const makeCells = (routeKey, routeTitle) => {
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
        <td class="col-hero-${routeKey} route-cell ${joinedClass}" ${clickAttr}>${condHtml}</td>
        <td class="col-hero-${routeKey} route-cell ${joinedClass}" ${clickAttr}>${limitHtml}</td>
      `;
    };

    tr.innerHTML = charTd 
      + makeCells("kai", "カイ篇") 
      + makeCells("dietrich", "ディートリヒ篇") 
      + makeCells("theodora", "セオドラ篇") 
      + makeCells("leda", "レダ篇");

    tbody.appendChild(tr);
  });

  // 件数表示
  const countEl = document.getElementById("hitCount");
  if (countEl) {
    countEl.textContent = `${displayedCount} / ${characters.length} 件`;
  }

  applyRouteVisibility();
}

// ルート切り替え
function setRouteFilter(route) {
  currentRoute = route;
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-route") === route);
  });
  applyRouteVisibility();
  renderTable();
}

function applyRouteVisibility() {
  const routes = ["kai", "dietrich", "theodora", "leda"];
  routes.forEach(r => {
    const shouldShow = (currentRoute === "all" || currentRoute === r);
    document.querySelectorAll(`.col-hero-${r}`).forEach(el => {
      if (shouldShow) {
        el.classList.remove("hidden-col");
      } else {
        el.classList.add("hidden-col");
      }
    });
  });
}

function filterTable() {
  renderTable();
}

function toggleCompactMode() {
  const isCompact = document.getElementById("compactMode").checked;
  document.querySelectorAll("th, td").forEach(el => {
    if (isCompact) {
      el.style.padding = "4px 4px";
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
  renderTable();
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
        renderTable();
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

