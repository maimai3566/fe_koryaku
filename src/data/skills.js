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

// 2. 代表的な兵種リスト
export const CLASS_LIST = [
  // --- 初級職 (beginner) ---
  { id: 'commoner', name: '平民・貴族', tier: 'beginner', icon: '🌱' },
  { id: 'myrmidon', name: '剣士', tier: 'beginner', icon: '🗡️' },
  { id: 'soldier', name: '兵士', tier: 'beginner', icon: '🔱' },
  { id: 'fighter', name: '戦士', tier: 'beginner', icon: '🪓' },
  { id: 'monk', name: '修道士', tier: 'beginner', icon: '📖' },

  // --- 中級職 (intermediate) ---
  { id: 'mercenary', name: '傭兵', tier: 'intermediate', icon: '⚔️' },
  { id: 'thief', name: '盗賊', tier: 'intermediate', icon: '🗝️' },
  { id: 'cavalier', name: 'ソシアルナイト', tier: 'intermediate', icon: '🐎' },
  { id: 'archer', name: 'アーチャー', tier: 'intermediate', icon: '🏹' },
  { id: 'mage', name: 'メイジ', tier: 'intermediate', icon: '🔮' },
  { id: 'priest', name: 'プリースト', tier: 'intermediate', icon: '✨' },
  { id: 'pegasus', name: 'ペガサスナイト', tier: 'intermediate', icon: '🪽' },

  // --- 上級職 (advanced) ---
  { id: 'swordmaster', name: 'ソードマスター', tier: 'advanced', icon: '⚡' },
  { id: 'hero', name: '勇者', tier: 'advanced', icon: '🎖️' },
  { id: 'paladin', name: 'パラディン', tier: 'advanced', icon: '🛡️' },
  { id: 'warrior', name: 'ウォーリアー', tier: 'advanced', icon: '🪓' },
  { id: 'sniper', name: 'スナイパー', tier: 'advanced', icon: '🎯' },
  { id: 'warlock', name: 'ウォーロック', tier: 'advanced', icon: '🔥' },
  { id: 'bishop', name: 'ビショップ', tier: 'advanced', icon: '🕊️' },
  { id: 'wyvern_rider', name: 'ドラゴンナイト', tier: 'advanced', icon: '🐉' },

  // --- 最上級職 (master) ---
  { id: 'mortal_savant', name: 'エピタフ', tier: 'master', icon: '⚡' },
  { id: 'bow_knight', name: 'ボウナイト', tier: 'master', icon: '🏇' },
  { id: 'dark_knight', name: 'ダークナイト', tier: 'master', icon: '🌑' },
  { id: 'holy_knight', name: 'ホーリーナイト', tier: 'master', icon: '🌟' },
  { id: 'wyvern_lord', name: 'ドラゴンマスター', tier: 'master', icon: '🐲' },
  { id: 'falcon_knight', name: 'ファルコンナイト', tier: 'master', icon: '🦅' },

  // --- 神将職 (special / 固有職) ---
  { id: 'sword_highlord', name: '万紫の覇王', tier: 'special', icon: '👑' },
  { id: 'iron_general', name: '金剛の将軍', tier: 'special', icon: '🛡️' },
  { id: 'sacred_ruler', name: '聖女の守護者', tier: 'special', icon: '🕊️' },
  { id: 'tempest_empress', name: '嵐の女帝', tier: 'special', icon: '🌹' }
];

// 3. キャラクター固有スキル＆兵種スキル初期サンプルデータ
// ※今後調査やプレイに応じて順次拡充可能
export const INITIAL_SKILL_DATA = {
  // --- 主人公4名 ---
  kai: {
    personal: { name: '宿命の迅雷', desc: 'HPが50%以下の敵に攻撃時、技・速さ+4' },
    bloodSign: { name: '天翔の血印', desc: '攻撃時、技%の確率で追撃ダメージ+30%' },
    roots: { name: '風の放浪者', desc: '平地・森での移動コスト-1、回避+10' },
    classes: {
      commoner: { name: '戦闘の基本', desc: '命中・回避+3' },
      myrmidon: { name: '速さ+2', desc: '速さパラメータ+2' },
      mercenary: { name: '待ち伏せ', desc: 'HP50%以下で攻撃された際、先制攻撃' },
      swordmaster: { name: '流星', desc: '技%の確率で威力0.3倍の5連撃' },
      mortal_savant: { name: '明鏡止水', desc: '剣と魔法装備時、与ダメージ+5' },
      sword_highlord: { name: '万紫千紅の極致', desc: '敵撃破時に再行動可能（1ターン1回）' }
    }
  },

  dietrich: {
    personal: { name: '鉄壁の誓い', desc: '周囲2マス以内の味方の守備・魔防+3' },
    bloodSign: { name: '剛殻の血印', desc: '被ダメージ時、守備%でダメージ半減' },
    roots: { name: '鉱山の猛者', desc: '重装・斧装備時の命中率+15' },
    classes: {
      commoner: { name: '戦闘の基本', desc: '命中・回避+3' },
      soldier: { name: '守備+2', desc: '守備パラメータ+2' },
      cavalier: { name: '再移動', desc: '行動後に残りの移動力分だけ移動可能' },
      paladin: { name: '聖騎士の誇り', desc: '騎乗時、地形ペナルティ軽減' },
      hero: { name: '太陽', desc: '技%の確率で与ダメージの半分HP回復' },
      iron_general: { name: '金剛不壊', desc: '追撃を受けず、物理被ダメージ-7' }
    }
  },

  theodora: {
    personal: { name: '白銀の威光', desc: '自身から攻撃時、敵の反撃を封じる（確率技%）' },
    bloodSign: { name: '天光の血印', desc: '回復魔法の効果量+50%、射程+1' },
    roots: { name: 'テルス神殿の血統', desc: 'ターン開始時に周囲の味方の状態異常解除' },
    classes: {
      commoner: { name: '戦闘の基本', desc: '命中・回避+3' },
      monk: { name: '魔力+2', desc: '魔力パラメータ+2' },
      mage: { name: '魔神の一撃', desc: '自分から攻撃した時、魔力+6' },
      priest: { name: '祈り', desc: '致死ダメージ時、幸運%でHP1で耐える' },
      bishop: { name: '白魔法の達人', desc: '白魔法装備時、回復量+10' },
      sacred_ruler: { name: '聖女の加護', desc: '致死ダメージを1マップに1度だけ完全無効化' }
    }
  },

  leda: {
    personal: { name: '千変万化', desc: '地形効果による回避・防御補正が2倍' },
    bloodSign: { name: '狂嵐の血印', desc: '必殺発動時、敵の守備・魔防を無視' },
    roots: { name: 'ブラガンサの風', desc: '飛行・騎馬ユニットへの特効ダメージ無効' },
    classes: {
      commoner: { name: '戦闘の基本', desc: '命中・回避+3' },
      myrmidon: { name: '速さ+2', desc: '速さパラメータ+2' },
      pegasus: { name: '飛燕の一撃', desc: '自分から攻撃時、攻速+6' },
      falcon_knight: { name: '回避+20', desc: '常に回避率+20' },
      dark_knight: { name: '黒魔法の達人', desc: '黒魔法装備時、攻撃力+5' },
      tempest_empress: { name: '疾風怒濤', desc: '攻撃時、常に先制攻撃＆追撃確定' }
    }
  },

  // --- 初期主要メンバー サンプル ---
  tiara: {
    personal: { name: '参謀の献身', desc: '主人公の隣接時、主人公の命中・会心+15' },
    bloodSign: { name: '蒼炎の血印', desc: '魔法攻撃時、一定確率で相手に火傷付与' },
    roots: { name: '王都の名門', desc: '経験値獲得量+15%' },
    classes: {
      commoner: { name: '戦闘の基本', desc: '命中・回避+3' },
      mage: { name: '魔神の一撃', desc: '自分から攻撃時、魔力+6' },
      warlock: { name: '黒魔法射程+1', desc: '黒魔法の射程が1マス伸びる' }
    }
  },

  pieter: {
    personal: { name: '百発百中', desc: '弓攻撃時、距離による命中率低下を無視' },
    bloodSign: { name: '鷹目の血印', desc: '射程3以上の弓攻撃時、必殺+20' },
    roots: { name: '猟師の眼力', desc: '隠密ユニットを常に視認可能' },
    classes: {
      commoner: { name: '戦闘の基本', desc: '命中・回避+3' },
      archer: { name: '命中+20', desc: '常に命中率+20' },
      sniper: { name: 'ハンターボレー', desc: '専用戦技：弓による確定2連撃' },
      bow_knight: { name: '弓射程+2', desc: '弓の最大射程が2マス伸びる' }
    }
  },

  esmeralda: {
    personal: { name: '孤高の騎士道', desc: '周囲1マスに味方がいない時、攻撃・防御+4' },
    bloodSign: { name: '真紅の血印', desc: '反撃時、必殺率が2倍になる' },
    roots: { name: '旧貴族の矜持', desc: '騎士系クラス時、ステータス上限+2' },
    classes: {
      commoner: { name: '戦闘の基本', desc: '命中・回避+3' },
      soldier: { name: '守備+2', desc: '守備パラメータ+2' },
      paladin: { name: '聖騎士の誇り', desc: '騎乗時、地形ペナルティ軽減' },
      swordmaster: { name: '流星', desc: '技%の確率で5連撃' }
    }
  }
};

