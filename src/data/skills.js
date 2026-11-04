// ========================================================
// ファイアーエムブレム 万紫千紅 - 兵種定義 ＆ 習得スキルマスターデータ
// ========================================================

// 1. 兵種ランク（Tier）の定義
export const CLASS_TIERS = {
  all: { key: 'all', label: 'すべて', icon: '🌐' },
  beginner: { key: 'beginner', label: '初級職', icon: '🔰' },
  intermediate: { key: 'intermediate', label: '中級職', icon: '⚔️' },
  advanced: { key: 'advanced', label: '上級職', icon: '🛡️' },
  master: { key: 'master', label: '最上級職', icon: '👑' },
  special: { key: 'special', label: '神将職', icon: '✨' }
};

// 2. 公式・実機 兵種リスト（全51兵種）
export const CLASS_LIST = [
  // --- ◆初級職 (beginner: 5) ---
  { id: 'fighter', name: '闘士', tier: 'beginner', icon: '🥊' },
  { id: 'jaeger', name: '猟兵', tier: 'beginner', icon: '🏹' },
  { id: 'soldier', name: '兵士', tier: 'beginner', icon: '🔱' },
  { id: 'flying_camel', name: '飛駝兵', tier: 'beginner', icon: '🐪' },
  { id: 'curse_master', name: '呪い師', tier: 'beginner', icon: '🕯️' },

  // --- ◆中級職 (intermediate: 12) ---
  { id: 'myrmidon', name: '剣士', tier: 'intermediate', icon: '🗡️' },
  { id: 'brigand', name: 'ブリガンド', tier: 'intermediate', icon: '🪓' },
  { id: 'cestus', name: 'セスタス', tier: 'intermediate', icon: '👊' },
  { id: 'archer', name: 'アーチャー', tier: 'intermediate', icon: '🎯' },
  { id: 'rogue', name: 'ローグ', tier: 'intermediate', icon: '🗝️' },
  { id: 'armored_infantry', name: '重装歩兵', tier: 'intermediate', icon: '🛡️' },
  { id: 'light_cavalry', name: '軽騎兵', tier: 'intermediate', icon: '🐎' },
  { id: 'charioteer', name: '戦車兵', tier: 'intermediate', icon: '🏎️' },
  { id: 'armored_camel', name: '騎甲駝兵', tier: 'intermediate', icon: '🐪' },
  { id: 'pegasus_rider', name: '天翼兵', tier: 'intermediate', icon: '🪽' },
  { id: 'shaman', name: 'シャーマン', tier: 'intermediate', icon: '🔮' },
  { id: 'priest', name: 'プリースト', tier: 'intermediate', icon: '✨' },

  // --- ◆上級職 (advanced: 16) ---
  { id: 'sido', name: 'シドー', tier: 'advanced', icon: '⚡' },
  { id: 'warrior', name: 'ウォーリアー', tier: 'advanced', icon: '🪓' },
  { id: 'sniper', name: 'スナイパー', tier: 'advanced', icon: '🎯' },
  { id: 'forest_knight', name: 'フォレストナイト', tier: 'advanced', icon: '🌲' },
  { id: 'heavy_armor', name: 'ヘヴィアーマー', tier: 'advanced', icon: '🏰' },
  { id: 'bardinger', name: 'バーディンガー', tier: 'advanced', icon: '🛡️' },
  { id: 'vates', name: 'ウァテス', tier: 'advanced', icon: '📜' },
  { id: 'bishop', name: 'ビショップ', tier: 'advanced', icon: '🕊️' },
  { id: 'war_elephant', name: '戦象兵', tier: 'advanced', icon: '🐘' },
  { id: 'caladrius', name: 'カラドリオス', tier: 'advanced', icon: '🐦' },
  { id: 'dragoon', name: 'ドラグーン', tier: 'advanced', icon: '🐉' },
  { id: 'troubadour', name: 'トルバドール', tier: 'advanced', icon: '🐴' },
  { id: 'dancer', name: '踊り子', tier: 'advanced', icon: '💃' },
  { id: 'guardian', name: 'ガーディアン', tier: 'advanced', icon: '🛡️' },
  { id: 'ranger', name: 'レンジャー', tier: 'advanced', icon: '🧭' },
  { id: 'cataphract', name: 'カタフラクト', tier: 'advanced', icon: '🐎' },

  // --- ◆最上級職 (master: 10) ---
  { id: 'battle_master', name: 'バトルマスター', tier: 'master', icon: '⚔️' },
  { id: 'master_arch', name: 'マスターアーチ', tier: 'master', icon: '🏹' },
  { id: 'shadow_seeker', name: 'シャドーシーカー', tier: 'master', icon: '👤' },
  { id: 'holy_lancer', name: 'ホーリーランサー', tier: 'master', icon: '🔱' },
  { id: 'fortress', name: 'フォートレス', tier: 'master', icon: '🏯' },
  { id: 'orihaldia', name: 'オリハルディア', tier: 'master', icon: '💎' },
  { id: 'holy_pegasus', name: '聖天翼兵', tier: 'master', icon: '🪽' },
  { id: 'dragon_master', name: 'ドラゴンマスター', tier: 'master', icon: '🐲' },
  { id: 'druid', name: 'ドルイド', tier: 'master', icon: '🌑' },
  { id: 'wiseman', name: 'ワイズマン', tier: 'master', icon: '🧙' },

  // --- ◆神将職 (special: 8) ---
  { id: 'the_blade', name: 'ザ・ブレイド', tier: 'special', icon: '⚔️' },
  { id: 'the_apsaras', name: 'ジ・アプサラス', tier: 'special', icon: '🪽' },
  { id: 'the_eternal', name: 'ジ・エターナル', tier: 'special', icon: '🌟' },
  { id: 'the_godhand', name: 'ザ・ゴッドハンド', tier: 'special', icon: '👊' },
  { id: 'the_calamity', name: 'ザ・カラミティ', tier: 'special', icon: '🔥' },
  { id: 'the_trident', name: 'ザ・トライデント', tier: 'special', icon: '🔱' },
  { id: 'the_cavalier', name: 'ザ・キャバリアー', tier: 'special', icon: '🐎' },
  { id: 'the_avatar', name: 'ジ・アヴァタール', tier: 'special', icon: '👑' }
];

// 3. キャラクター固有スキル＆兵種スキル初期サンプルデータ
export const INITIAL_SKILL_DATA = {
  // --- 主人公・救世主 ---
  kai: {
    personal: { name: '宿命の迅雷', desc: 'HPが50%以下の敵に攻撃時、技・速さ+4' },
    bloodSign: { name: '天翔の血印', desc: '攻撃時、技%の確率で追撃ダメージ+30%' },
    roots: { name: '風の放浪者', desc: '平地・森での移動コスト-1、回避+10' },
    classes: {
      fighter: { name: '力+2', desc: '力パラメータ+2' },
      myrmidon: { name: '速さ+2', desc: '速さパラメータ+2' },
      sido: { name: '待ち伏せ', desc: 'HP50%以下で攻撃された際、先制攻撃' },
      battle_master: { name: '流星', desc: '技%の確率で5連続攻撃' },
      the_blade: { name: '神将刃・迅雷', desc: '敵撃破時に再行動可能（1ターン1回）' }
    }
  },

  dietrich: {
    personal: { name: '鉄壁の誓い', desc: '周囲2マス以内の味方の守備・魔防+3' },
    bloodSign: { name: '剛殻の血印', desc: '被ダメージ時、守備%でダメージ半減' },
    roots: { name: '鉱山の猛者', desc: '重装・斧装備時の命中率+15' },
    classes: {
      soldier: { name: '守備+2', desc: '守備パラメータ+2' },
      armored_infantry: { name: '重装防御', desc: '物理被ダメージ-3' },
      heavy_armor: { name: '不動', desc: '位置移動・ノックバックを無効化' },
      fortress: { name: '大盾', desc: '技%で物理ダメージを半減' },
      the_godhand: { name: '金剛神拳', desc: '追撃を受けず、物理被ダメージ-7' }
    }
  },

  theodora: {
    personal: { name: '白銀の威光', desc: '自身から攻撃時、敵の反撃を封じる（確率技%）' },
    bloodSign: { name: '天光の血印', desc: '回復魔法の効果量+50%、射程+1' },
    roots: { name: 'テルス神殿の血統', desc: 'ターン開始時に周囲の味方の状態異常解除' },
    classes: {
      curse_master: { name: '魔力+2', desc: '魔力パラメータ+2' },
      priest: { name: '祈り', desc: '致死ダメージ時、幸運%でHP1で耐える' },
      bishop: { name: '白魔法の達人', desc: '白魔法装備時、回復量+10' },
      wiseman: { name: '明鏡止水', desc: '魔法攻撃の射程+1' },
      the_eternal: { name: '不滅の聖光', desc: '致死ダメージを1マップに1度だけ完全無効化' }
    }
  },

  leda: {
    personal: { name: '千変万化', desc: '地形効果による回避・防御補正が2倍' },
    bloodSign: { name: '狂嵐の血印', desc: '必殺発動時、敵の守備・魔防を無視' },
    roots: { name: 'ブラガンサの風', desc: '飛行・騎馬ユニットへの特効ダメージ無効' },
    classes: {
      jaeger: { name: '技+2', desc: '技パラメータ+2' },
      pegasus_rider: { name: '飛燕の一撃', desc: '自分から攻撃時、攻速+6' },
      caladrius: { name: '風の加護', desc: '弓・風魔法特効を無効化' },
      holy_pegasus: { name: '回避+20', desc: '常に回避率+20' },
      the_apsaras: { name: '天舞嵐舞', desc: '攻撃時、常に先制攻撃＆追撃確定' }
    }
  },

  savior: {
    personal: { name: '救世の奇跡', desc: '自軍全ユニットの攻撃・守備+2' },
    bloodSign: { name: '万紫千紅の血印', desc: '全ステータス+3、HP自動回復' },
    roots: { name: '時代の継承者', desc: '全武器・魔法を装備可能' },
    classes: {
      battle_master: { name: '全技能の達人', desc: '全武器装備時の命中+15' },
      the_avatar: { name: '創生の極致', desc: '自身と周囲の味方の行動後再移動可能' }
    }
  },

  // --- 主要メンバー サンプル ---
  tiara: {
    personal: { name: '参謀の献身', desc: '主人公の隣接時、主人公の命中・会心+15' },
    bloodSign: { name: '蒼炎の血印', desc: '魔法攻撃時、一定確率で相手に火傷付与' },
    roots: { name: '王都の名門', desc: '経験値獲得量+15%' },
    classes: {
      curse_master: { name: '魔力+2', desc: '魔力パラメータ+2' },
      shaman: { name: '魔神の一撃', desc: '自分から攻撃時、魔力+6' },
      vates: { name: '予見', desc: '敵の必殺率を0にする' }
    }
  },

  pieter: {
    personal: { name: '百発百中', desc: '弓攻撃時、距離による命中率低下を無視' },
    bloodSign: { name: '鷹目の血印', desc: '射程3以上の弓攻撃時、必殺+20' },
    roots: { name: '猟師の眼力', desc: '隠密ユニットを常に視認可能' },
    classes: {
      jaeger: { name: '技+2', desc: '技パラメータ+2' },
      archer: { name: '命中+20', desc: '常に命中率+20' },
      sniper: { name: 'ハンターボレー', desc: '専用戦技：弓による確定2連撃' },
      master_arch: { name: '弓射程+2', desc: '弓の最大射程が2マス伸びる' }
    }
  },

  esmeralda: {
    personal: { name: '孤高の騎士道', desc: '周囲1マスに味方がいない時、攻撃・防御+4' },
    bloodSign: { name: '真紅の血印', desc: '反撃時、必殺率が2倍になる' },
    roots: { name: '旧貴族の矜持', desc: '騎士系クラス時、ステータス上限+2' },
    classes: {
      soldier: { name: '守備+2', desc: '守備パラメータ+2' },
      light_cavalry: { name: '再移動', desc: '行動後、残り移動力分移動可能' },
      bardinger: { name: '聖騎士の誇り', desc: '騎乗時、地形ペナルティ軽減' },
      cataphract: { name: '重装突進', desc: '突撃時に敵の陣形を崩す' }
    }
  }
};
