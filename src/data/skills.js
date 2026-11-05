// ========================================================
// ファイアーエムブレム 万紫千紅 - 兵種定義 ＆ 習得スキルマスターデータ
// （Game8 攻略準拠：全63キャラ個人スキル・血印・全51兵種マスタースキル完備）
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
  { id: 'forest_knight', name: 'フォレストナイト', tier: 'advanced', icon: '🏹' },
  { id: 'heavy_armor', name: 'ヘヴィアーマー', tier: 'advanced', icon: '🛡️' },
  { id: 'bardinger', name: 'バーディンガー', tier: 'advanced', icon: '🏇' },
  { id: 'vates', name: 'ウァテス', tier: 'advanced', icon: '📖' },
  { id: 'bishop', name: 'ビショップ', tier: 'advanced', icon: '⛪' },
  { id: 'war_elephant', name: '戦象兵', tier: 'advanced', icon: '🐘' },
  { id: 'caladrius', name: 'カラドリオス', tier: 'advanced', icon: '🪽' },
  { id: 'dragoon', name: 'ドラグーン', tier: 'advanced', icon: '🐉' },
  { id: 'troubadour', name: 'トルバドール', tier: 'advanced', icon: '🦄' },
  { id: 'dancer', name: '踊り子', tier: 'advanced', icon: '💃' },
  { id: 'guardian', name: 'ガーディアン', tier: 'advanced', icon: '🛡️' },
  { id: 'ranger', name: 'レンジャー', tier: 'advanced', icon: '🧭' },
  { id: 'cataphract', name: 'カタフラクト', tier: 'advanced', icon: '🏰' },

  // --- ◆最上級職 (master: 10) ---
  { id: 'battle_master', name: 'バトルマスター', tier: 'master', icon: '⚔️' },
  { id: 'master_arch', name: 'マスターアーチ', tier: 'master', icon: '🏹' },
  { id: 'shadow_seeker', name: 'シャドーシーカー', tier: 'master', icon: '👤' },
  { id: 'holy_lancer', name: 'ホーリーランサー', tier: 'master', icon: '🔱' },
  { id: 'fortress', name: 'フォートレス', tier: 'master', icon: '🏰' },
  { id: 'orichaldia', name: 'オリハルディア', tier: 'master', icon: '🛡️' },
  { id: 'holy_pegasus', name: '聖天翼兵', tier: 'master', icon: '🪽' },
  { id: 'dragon_master', name: 'ドラゴンマスター', tier: 'master', icon: '🐉' },
  { id: 'druid', name: 'ドルイド', tier: 'master', icon: '🌘' },
  { id: 'wiseman', name: 'ワイズマン', tier: 'master', icon: '📜' },

  // --- ◆神将職 (special: 8) ---
  { id: 'the_blade', name: 'ザ・ブレイド', tier: 'special', icon: '⚔️' },
  { id: 'the_apsaras', name: 'ジ・アプサラス', tier: 'special', icon: '💃' },
  { id: 'the_eternal', name: 'ジ・エターナル', tier: 'special', icon: '🪓' },
  { id: 'the_godhand', name: 'ザ・ゴッドハンド', tier: 'special', icon: '👊' },
  { id: 'the_calamity', name: 'ザ・カラミティ', tier: 'special', icon: '🗝️' },
  { id: 'the_trident', name: 'ザ・トライデント', tier: 'special', icon: '🔱' },
  { id: 'the_cavalier', name: 'ザ・キャバリアー', tier: 'special', icon: '🐎' },
  { id: 'the_avatar', name: 'ジ・アヴァタール', tier: 'special', icon: '🔮' }
];

// 3. 全51兵種マスタースキル・兵種スキル詳細辞書（Game8攻略準拠）
export const CLASS_SKILLS_DATA = {
  "fighter": {
    "name": "闘士",
    "tier": "beginner",
    "icon": "🥊",
    "classSkills": "",
    "masterSkill": "攻撃の基本 力+1",
    "skillsText": "マスター\n\n 攻撃の基本  力+1"
  },
  "jaeger": {
    "name": "猟兵",
    "tier": "beginner",
    "icon": "🏹",
    "classSkills": "",
    "masterSkill": "狩猟の基本 技・速さ+1",
    "skillsText": "マスター\n\n 狩猟の基本  技・速さ+1"
  },
  "soldier": {
    "name": "兵士",
    "tier": "beginner",
    "icon": "🔱",
    "classSkills": "",
    "masterSkill": "防衛の基本 守備+1",
    "skillsText": "マスター\n\n 防衛の基本  守備+1"
  },
  "flying_camel": {
    "name": "飛駝兵",
    "tier": "beginner",
    "icon": "🐪",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる",
    "masterSkill": "攻勢の基本 力・魔力+1",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n\n\n\n\nマスター\n\n 攻勢の基本  力・魔力+1"
  },
  "curse_master": {
    "name": "呪い師",
    "tier": "beginner",
    "icon": "🕯️",
    "classSkills": "",
    "masterSkill": "魔道の基本 魔力・魔防+1",
    "skillsText": "マスター\n\n 魔道の基本  魔力・魔防+1"
  },
  "myrmidon": {
    "name": "剣士",
    "tier": "intermediate",
    "icon": "🗡️",
    "classSkills": "戦技装備+1 装備可能な戦技の数+1 剣必殺+3 剣を装備中、必殺+3",
    "masterSkill": "技の冴え 必殺の一撃発生時、与えるダメージ+6",
    "skillsText": "兵種\n\n 戦技装備+1  装備可能な戦技の数+1  \n 剣必殺+3  剣を装備中、必殺+3  \n\n\n\n\nマスター\n\n 技の冴え  必殺の一撃発生時、与えるダメージ+6"
  },
  "brigand": {
    "name": "ブリガンド",
    "tier": "intermediate",
    "icon": "🪓",
    "classSkills": "戦技装備+1 装備可能な戦技の数+1 斧命中+3 斧を装備中、命中+3",
    "masterSkill": "立て直し 攻撃を回避された戦闘中、自分の回避+20",
    "skillsText": "兵種\n\n 戦技装備+1  装備可能な戦技の数+1  \n 斧命中+3  斧を装備中、命中+3  \n\n\n\n\nマスター\n\n 立て直し  攻撃を回避された戦闘中、自分の回避+20"
  },
  "cestus": {
    "name": "セスタス",
    "tier": "intermediate",
    "icon": "👊",
    "classSkills": "戦技装備+1 装備可能な戦技の数+1 格闘回避+3 籠手を装備中、回避+3",
    "masterSkill": "ヒット＆アウェイ 戦技を使う戦闘時、回避+10",
    "skillsText": "兵種\n\n 戦技装備+1  装備可能な戦技の数+1  \n 格闘回避+3  籠手を装備中、回避+3  \n\n\n\n\nマスター\n\n ヒット＆アウェイ  戦技を使う戦闘時、回避+10"
  },
  "archer": {
    "name": "アーチャー",
    "tier": "intermediate",
    "icon": "🎯",
    "classSkills": "戦技装備+1 装備可能な戦技の数+1 弓命中+5 弓を装備中、命中+5",
    "masterSkill": "好調 敵を倒した時、命中+3（+30が最大）（マップ終了まで）",
    "skillsText": "兵種\n\n 戦技装備+1  装備可能な戦技の数+1  \n 弓命中+5  弓を装備中、命中+5  \n\n\n\n\nマスター\n\n 好調  敵を倒した時、命中+3（+30が最大）（マップ終了まで）"
  },
  "rogue": {
    "name": "ローグ",
    "tier": "intermediate",
    "icon": "🗝️",
    "classSkills": "戦技装備+1 装備可能な戦技の数+1 鍵開け 鍵がなくても、宝箱を開けることができる 探索術 部隊にいる時、探索の結果が少しPERFECTになりやすくなる",
    "masterSkill": "影晦まし 敵を倒した時、回避+10（1回戦闘すると元に戻る）",
    "skillsText": "兵種\n\n 戦技装備+1  装備可能な戦技の数+1  \n 鍵開け  鍵がなくても、宝箱を開けることができる  \n 探索術  部隊にいる時、探索の結果が少しPERFECTになりやすくなる  \n\n\n\n\nマスター\n\n 影晦まし  敵を倒した時、回避+10（1回戦闘すると元に戻る）"
  },
  "armored_infantry": {
    "name": "重装歩兵",
    "tier": "intermediate",
    "icon": "🛡️",
    "classSkills": "戦技装備+1 装備可能な戦技の数+1 後攻守備+3 後攻での戦闘時、耐物+3",
    "masterSkill": "大反撃 後攻での戦闘時、攻撃力+3",
    "skillsText": "兵種\n\n 戦技装備+1  装備可能な戦技の数+1  \n 後攻守備+3  後攻での戦闘時、耐物+3  \n\n\n\n\nマスター\n\n 大反撃  後攻での戦闘時、攻撃力+3"
  },
  "light_cavalry": {
    "name": "軽騎兵",
    "tier": "intermediate",
    "icon": "🐎",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる",
    "masterSkill": "体力の強化 HP+3",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n\n\n\n\nマスター\n\n 体力の強化  HP+3"
  },
  "charioteer": {
    "name": "戦車兵",
    "tier": "intermediate",
    "icon": "🏎️",
    "classSkills": "戦車の装甲 【騎兵】防御力+5。自分は回避できない 戦車兵の戦術 「乗る」「降りる」を使用できる。【騎兵】「突進」を使用できる 戦車兵の道 自分のレベルが上がるほど成長率も高くなる",
    "masterSkill": "突撃体勢 「突進」を使った時、耐物+10（次の自分のフェイズまで）",
    "skillsText": "兵種\n\n 戦車の装甲  【騎兵】防御力+5。自分は回避できない  \n 戦車兵の戦術  「乗る」「降りる」を使用できる。【騎兵】「突進」を使用できる  \n 戦車兵の道  自分のレベルが上がるほど成長率も高くなる  \n\n\n\n\nマスター\n\n 突撃体勢  「突進」を使った時、耐物+10（次の自分のフェイズまで）"
  },
  "armored_camel": {
    "name": "騎甲駝兵",
    "tier": "intermediate",
    "icon": "🐪",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる",
    "masterSkill": "脅威の察知 戦闘時、敵の攻撃が自分に有効・特効なら、回避+20",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n\n\n\n\nマスター\n\n 脅威の察知  戦闘時、敵の攻撃が自分に有効・特効なら、回避+20"
  },
  "pegasus_rider": {
    "name": "天翼兵",
    "tier": "intermediate",
    "icon": "🪽",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる",
    "masterSkill": "天馬の護翼 魔防+3",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n\n\n\n\nマスター\n\n 天馬の護翼  魔防+3"
  },
  "shaman": {
    "name": "シャーマン",
    "tier": "intermediate",
    "icon": "🔮",
    "classSkills": "黒魔術の探求 黒魔法の回数が2倍になる 魔法命中+3 魔法を装備中、命中+3",
    "masterSkill": "技の呪縛 隣接する敵の技-3",
    "skillsText": "兵種\n\n 黒魔術の探求  黒魔法の回数が2倍になる  \n 魔法命中+3  魔法を装備中、命中+3  \n\n\n\n\nマスター\n\n 技の呪縛  隣接する敵の技-3"
  },
  "priest": {
    "name": "プリースト",
    "tier": "intermediate",
    "icon": "✨",
    "classSkills": "白魔術の探求 白魔法の回数が2倍になる 魔法回復+5 魔法で味方を回復する時、回復量+5",
    "masterSkill": "信仰心 幸運+3",
    "skillsText": "兵種\n\n 白魔術の探求  白魔法の回数が2倍になる  \n 魔法回復+5  魔法で味方を回復する時、回復量+5  \n\n\n\n\nマスター\n\n 信仰心  幸運+3"
  },
  "sido": {
    "name": "シドー",
    "tier": "advanced",
    "icon": "⚡",
    "classSkills": "戦技装備+2 装備可能な戦技の数+2 剣必殺+5 剣を装備中、必殺+5",
    "masterSkill": "残心 必殺の一撃で敵を倒した時、自分のHPを小回復する",
    "skillsText": "兵種\n\n 戦技装備+2  装備可能な戦技の数+2  \n 剣必殺+5  剣を装備中、必殺+5  \n\n\n\n\nマスター\n\n 残心  必殺の一撃で敵を倒した時、自分のHPを小回復する"
  },
  "warrior": {
    "name": "ウォーリアー",
    "tier": "advanced",
    "icon": "🪓",
    "classSkills": "戦技装備+2 装備可能な戦技の数+2 斧命中+5 斧を装備中、命中+5 格闘命中+5 籠手を装備中、命中+5",
    "masterSkill": "熟練の技 戦技での攻撃時、命中+10",
    "skillsText": "兵種\n\n 戦技装備+2  装備可能な戦技の数+2  \n 斧命中+5  斧を装備中、命中+5  \n 格闘命中+5  籠手を装備中、命中+5  \n\n\n\n\nマスター\n\n 熟練の技  戦技での攻撃時、命中+10"
  },
  "sniper": {
    "name": "スナイパー",
    "tier": "advanced",
    "icon": "🎯",
    "classSkills": "戦技装備+2 装備可能な戦技の数+2 弓命中+10 弓を装備中、命中+10",
    "masterSkill": "射撃の達人 弓を装備中、命中+15",
    "skillsText": "兵種\n\n 戦技装備+2  装備可能な戦技の数+2  \n 弓命中+10  弓を装備中、命中+10  \n\n\n\n\nマスター\n\n 射撃の達人  弓を装備中、命中+15"
  },
  "forest_knight": {
    "name": "フォレストナイト",
    "tier": "advanced",
    "icon": "🌲",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる 戦技装備+1 装備可能な戦技の数+1 弓命中+5 弓を装備中、命中+5",
    "masterSkill": "狩人の目 弓を装備中、追撃時、攻撃力+3",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n 戦技装備+1  装備可能な戦技の数+1  \n 弓命中+5  弓を装備中、命中+5  \n\n\n\n\nマスター\n\n 狩人の目  弓を装備中、追撃時、攻撃力+3"
  },
  "heavy_armor": {
    "name": "ヘヴィアーマー",
    "tier": "advanced",
    "icon": "🏰",
    "classSkills": "戦技装備+2 装備可能な戦技の数+2 後攻守備+5 後攻での戦闘時、耐物+5",
    "masterSkill": "集中反撃 後攻での戦闘時、命中+10",
    "skillsText": "兵種\n\n 戦技装備+2  装備可能な戦技の数+2  \n 後攻守備+5  後攻での戦闘時、耐物+5  \n\n\n\n\nマスター\n\n 集中反撃  後攻での戦闘時、命中+10"
  },
  "bardinger": {
    "name": "バーディンガー",
    "tier": "advanced",
    "icon": "🛡️",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる 戦技装備+2 装備可能な戦技の数+2",
    "masterSkill": "聖盾 魔法攻撃された時、20%で発動。受けるダメージを半減する",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n 戦技装備+2  装備可能な戦技の数+2  \n\n\n\n\nマスター\n\n 聖盾  魔法攻撃された時、20%で発動。受けるダメージを半減する"
  },
  "vates": {
    "name": "ウァテス",
    "tier": "advanced",
    "icon": "📜",
    "classSkills": "黒魔術の探求 黒魔法の回数が2倍になる 魔法命中+5 魔法を装備中、命中+5",
    "masterSkill": "速さの呪縛 隣接する敵の速さ-3",
    "skillsText": "兵種\n\n 黒魔術の探求  黒魔法の回数が2倍になる  \n 魔法命中+5  魔法を装備中、命中+5  \n\n\n\n\nマスター\n\n 速さの呪縛  隣接する敵の速さ-3"
  },
  "bishop": {
    "name": "ビショップ",
    "tier": "advanced",
    "icon": "🕊️",
    "classSkills": "白魔術の探求 白魔法の回数が2倍になる 魔法回復+10 魔法で味方を回復する時、回復量+10",
    "masterSkill": "結界 隣接する味方の魔防+3",
    "skillsText": "兵種\n\n 白魔術の探求  白魔法の回数が2倍になる  \n 魔法回復+10  魔法で味方を回復する時、回復量+10  \n\n\n\n\nマスター\n\n 結界  隣接する味方の魔防+3"
  },
  "war_elephant": {
    "name": "戦象兵",
    "tier": "advanced",
    "icon": "🐘",
    "classSkills": "戦象の装脚 【騎兵」攻撃で受けるダメージを半減する。自分は回避できない 戦象兵の戦術 「乗る」「降りる」を使用できる。【騎兵】「重突進」を使用できる 戦象兵の道 自分のレベルが上がるほど成長率も高くなる",
    "masterSkill": "戦象の旗手 【騎兵】自分が「戦象兵」なら、命中+10",
    "skillsText": "兵種\n\n 戦象の装脚  【騎兵」攻撃で受けるダメージを半減する。自分は回避できない  \n 戦象兵の戦術  「乗る」「降りる」を使用できる。【騎兵】「重突進」を使用できる  \n 戦象兵の道  自分のレベルが上がるほど成長率も高くなる  \n\n\n\n\nマスター\n\n 戦象の旗手  【騎兵】自分が「戦象兵」なら、命中+10"
  },
  "caladrius": {
    "name": "カラドリオス",
    "tier": "advanced",
    "icon": "🐦",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる 黒魔術の探求 黒魔法の回数が2倍になる 戦技装備+1 装備可能な戦技の数+1",
    "masterSkill": "駆け抜け 敵を倒した時、移動力+1（+3が最大）（次のターンの終了まで）",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n 黒魔術の探求  黒魔法の回数が2倍になる  \n 戦技装備+1  装備可能な戦技の数+1  \n\n\n\n\nマスター\n\n 駆け抜け  敵を倒した時、移動力+1（+3が最大）（次のターンの終了まで）"
  },
  "dragoon": {
    "name": "ドラグーン",
    "tier": "advanced",
    "icon": "🐉",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる 戦技装備+1 装備可能な戦技の数+1",
    "masterSkill": "籠城崩し 戦闘時、敵が有利な地形にいるなら、命中+20",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n 戦技装備+1  装備可能な戦技の数+1  \n\n\n\n\nマスター\n\n 籠城崩し  戦闘時、敵が有利な地形にいるなら、命中+20"
  },
  "troubadour": {
    "name": "トルバドール",
    "tier": "advanced",
    "icon": "🐴",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる 魔法回復+5 魔法で味方を回復する時、回復量+5 魔法命中+3 魔法を装備中、命中+3",
    "masterSkill": "勇気の呪歌 範囲にいる味方の技・速さ+2（次の自分のフェイズまで）（威力+0 命中+0 必殺+0 範囲1〜2）",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n 魔法回復+5  魔法で味方を回復する時、回復量+5  \n 魔法命中+3  魔法を装備中、命中+3  \n\n\n\n\nマスター\n\n 勇気の呪歌  範囲にいる味方の技・速さ+2（次の自分のフェイズまで）（威力+0 命中+0 必殺+0 範囲1〜2）"
  },
  "dancer": {
    "name": "踊り子",
    "tier": "advanced",
    "icon": "💃",
    "classSkills": "戦技装備+2 装備可能な戦技の数+2 踊る 戦技「踊る」を使用できる",
    "masterSkill": "特別な踊り 味方に「踊る」を使った時、その味方の技・速さ+3（そのフェイズ中のみ）",
    "skillsText": "兵種\n\n 戦技装備+2  装備可能な戦技の数+2  \n 踊る  戦技「踊る」を使用できる  \n\n\n\n\nマスター\n\n 特別な踊り  味方に「踊る」を使った時、その味方の技・速さ+3（そのフェイズ中のみ）"
  },
  "guardian": {
    "name": "ガーディアン",
    "tier": "advanced",
    "icon": "🛡️",
    "classSkills": "戦技装備+2 装備可能な戦技の数+2 魔法回復+10 魔法で味方を回復する時、回復量+10",
    "masterSkill": "引き締め 敵を倒した時、耐物+3（次の自分のフェイズまで）",
    "skillsText": "兵種\n\n 戦技装備+2  装備可能な戦技の数+2  \n 魔法回復+10  魔法で味方を回復する時、回復量+10  \n\n\n\n\nマスター\n\n 引き締め  敵を倒した時、耐物+3（次の自分のフェイズまで）"
  },
  "ranger": {
    "name": "レンジャー",
    "tier": "advanced",
    "icon": "🧭",
    "classSkills": "戦技装備+2 装備可能な戦技の数+2 鍵開け 鍵がなくても、宝箱を開けることができる 上級探索術 部隊にいる時、探索の結果がPERFECTになりやすくなる",
    "masterSkill": "反撃射撃 弓を装備中、戦闘時、50%で発動。隣接する敵に反撃できる",
    "skillsText": "兵種\n\n 戦技装備+2  装備可能な戦技の数+2  \n 鍵開け  鍵がなくても、宝箱を開けることができる  \n 上級探索術  部隊にいる時、探索の結果がPERFECTになりやすくなる  \n\n\n\n\nマスター\n\n 反撃射撃  弓を装備中、戦闘時、50%で発動。隣接する敵に反撃できる"
  },
  "cataphract": {
    "name": "カタフラクト",
    "tier": "advanced",
    "icon": "🐎",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる 戦技装備+1 装備可能な戦技の数+1 後攻守備+3 後攻での戦闘時、耐物+3",
    "masterSkill": "大盾 物理攻撃された時、20%で発動。受けるダメージを半減する",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n 戦技装備+1  装備可能な戦技の数+1  \n 後攻守備+3  後攻での戦闘時、耐物+3  \n\n\n\n\nマスター\n\n 大盾  物理攻撃された時、20%で発動。受けるダメージを半減する"
  },
  "battle_master": {
    "name": "バトルマスター",
    "tier": "master",
    "icon": "⚔️",
    "classSkills": "戦技装備+3 装備可能な戦技の数+3 斧命中+7 斧を装備中、命中+7 格闘命中+7 籠手を装備中、命中+7",
    "masterSkill": "戦鬼の一撃 与えるダメージが1.5倍になる（威力+0 命中+0 必殺+0 射程1）",
    "skillsText": "兵種\n\n 戦技装備+3  装備可能な戦技の数+3  \n 斧命中+7  斧を装備中、命中+7  \n 格闘命中+7  籠手を装備中、命中+7  \n\n\n\n\nマスター\n\n 戦鬼の一撃  与えるダメージが1.5倍になる（威力+0 命中+0 必殺+0 射程1）"
  },
  "master_arch": {
    "name": "マスターアーチ",
    "tier": "master",
    "icon": "🏹",
    "classSkills": "戦技装備+3 装備可能な戦技の数+3 弓命中+15 弓を装備中、命中+15",
    "masterSkill": "スカイハンター 敵が飛行なら、命中+50（威力+7 命中+0 必殺+0 射程2）",
    "skillsText": "兵種\n\n 戦技装備+3  装備可能な戦技の数+3  \n 弓命中+15  弓を装備中、命中+15  \n\n\n\n\nマスター\n\n スカイハンター  敵が飛行なら、命中+50（威力+7 命中+0 必殺+0 射程2）"
  },
  "shadow_seeker": {
    "name": "シャドーシーカー",
    "tier": "master",
    "icon": "👤",
    "classSkills": "戦技装備+3 装備可能な戦技の数+3 鍵開け 鍵がなくても、宝箱を開けることができる 最上級探索術 部隊にいる時、探索の結果がかなりPERFECTになりやすくなる",
    "masterSkill": "落影の刃 敵が有利な地形にいるなら、その地形の影響を無視する（威力+10 命中+0 必殺+0 射程1）",
    "skillsText": "兵種\n\n 戦技装備+3  装備可能な戦技の数+3  \n 鍵開け  鍵がなくても、宝箱を開けることができる  \n 最上級探索術  部隊にいる時、探索の結果がかなりPERFECTになりやすくなる  \n\n\n\n\nマスター\n\n 落影の刃  敵が有利な地形にいるなら、その地形の影響を無視する（威力+10 命中+0 必殺+0 射程1）"
  },
  "holy_lancer": {
    "name": "ホーリーランサー",
    "tier": "master",
    "icon": "🔱",
    "classSkills": "戦技装備+3 装備可能な戦技の数+3 魔法回復+10 魔法で味方を回復する時、回復量+10 白魔術の探求 白魔法の回数が2倍になる",
    "masterSkill": "不退の構え 戦闘時、自分のHPが最大なら、防御力+5",
    "skillsText": "兵種\n\n 戦技装備+3  装備可能な戦技の数+3  \n 魔法回復+10  魔法で味方を回復する時、回復量+10  \n 白魔術の探求  白魔法の回数が2倍になる  \n\n\n\n\nマスター\n\n 不退の構え  戦闘時、自分のHPが最大なら、防御力+5"
  },
  "fortress": {
    "name": "フォートレス",
    "tier": "master",
    "icon": "🏯",
    "classSkills": "戦技装備+3 装備可能な戦技の数+3 後攻守備+7 後攻での戦闘時、耐物+7",
    "masterSkill": "遮断 攻撃された時、受けるダメージを5減らす",
    "skillsText": "兵種\n\n 戦技装備+3  装備可能な戦技の数+3  \n 後攻守備+7  後攻での戦闘時、耐物+7  \n\n\n\n\nマスター\n\n 遮断  攻撃された時、受けるダメージを5減らす"
  },
  "orihaldia": {
    "name": "オリハルディア",
    "tier": "master",
    "icon": "💎",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる 戦技装備+3 装備可能な戦技の数+3",
    "masterSkill": "騎士烈槍 その戦闘中、追撃されなくなる（威力+0 命中+0 必殺+0 射程1）",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n 戦技装備+3  装備可能な戦技の数+3  \n\n\n\n\nマスター\n\n 騎士烈槍  その戦闘中、追撃されなくなる（威力+0 命中+0 必殺+0 射程1）"
  },
  "holy_pegasus": {
    "name": "聖天翼兵",
    "tier": "master",
    "icon": "🪽",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる 戦技装備+1 装備可能な戦技の数+1 飛行回避+7 【飛行】回避+7",
    "masterSkill": "迅雷風烈 先攻での戦闘時、自分の攻速が敵よりを10以上大きければ、敵の反撃より先に追撃できる",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n 戦技装備+1  装備可能な戦技の数+1  \n 飛行回避+7  【飛行】回避+7  \n\n\n\n\nマスター\n\n 迅雷風烈  先攻での戦闘時、自分の攻速が敵よりを10以上大きければ、敵の反撃より先に追撃できる"
  },
  "dragon_master": {
    "name": "ドラゴンマスター",
    "tier": "master",
    "icon": "🐲",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる 戦技装備+2 装備可能な戦技の数+2",
    "masterSkill": "襲撃 自分が歩行不可の地形にいる時、攻撃力+4",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n 戦技装備+2  装備可能な戦技の数+2  \n\n\n\n\nマスター\n\n 襲撃  自分が歩行不可の地形にいる時、攻撃力+4"
  },
  "druid": {
    "name": "ドルイド",
    "tier": "master",
    "icon": "🌑",
    "classSkills": "黒魔術の探求 黒魔法の回数が2倍になる 魔法命中+7 魔法を装備中、命中+7",
    "masterSkill": "魔防の呪縛 隣接する敵の魔防-3",
    "skillsText": "兵種\n\n 黒魔術の探求  黒魔法の回数が2倍になる  \n 魔法命中+7  魔法を装備中、命中+7  \n\n\n\n\nマスター\n\n 魔防の呪縛  隣接する敵の魔防-3"
  },
  "wiseman": {
    "name": "ワイズマン",
    "tier": "master",
    "icon": "🧙",
    "classSkills": "白魔術の探求 白魔法の回数が2倍になる 魔法回復+15 魔法で味方を回復する時、回復量+15",
    "masterSkill": "魔力掌握 戦闘時、敵が魔法なら、10%で発動。反撃されなくなる",
    "skillsText": "兵種\n\n 白魔術の探求  白魔法の回数が2倍になる  \n 魔法回復+15  魔法で味方を回復する時、回復量+15  \n\n\n\n\nマスター\n\n 魔力掌握  戦闘時、敵が魔法なら、10%で発動。反撃されなくなる"
  },
  "the_blade": {
    "name": "ザ・ブレイド",
    "tier": "special",
    "icon": "⚔️",
    "classSkills": "戦技装備+3 装備可能な戦技の数+3 剣必殺+10 剣を装備中、必殺+10",
    "masterSkill": "戦神 速さ+10",
    "skillsText": "兵種\n\n 戦技装備+3  装備可能な戦技の数+3  \n 剣必殺+10  剣を装備中、必殺+10  \n\n\n\n\nマスター\n\n 戦神  速さ+10"
  },
  "the_apsaras": {
    "name": "ジ・アプサラス",
    "tier": "special",
    "icon": "🪽",
    "classSkills": "戦技装備+3 装備可能な戦技の数+3 踊る 戦技「踊る」を使用できる",
    "masterSkill": "神舞 魅力+10",
    "skillsText": "兵種\n\n 戦技装備+3  装備可能な戦技の数+3  \n 踊る  戦技「踊る」を使用できる  \n\n\n\n\nマスター\n\n 神舞  魅力+10"
  },
  "the_eternal": {
    "name": "ジ・エターナル",
    "tier": "special",
    "icon": "🌟",
    "classSkills": "戦技装備+3 装備可能な戦技の数+3 斧命中+10 斧を装備中、命中+10 格闘命中+10 籠手を装備中、命中+10",
    "masterSkill": "武神 力+10",
    "skillsText": "兵種\n\n 戦技装備+3  装備可能な戦技の数+3  \n 斧命中+10  斧を装備中、命中+10  \n 格闘命中+10  籠手を装備中、命中+10  \n\n\n\n\nマスター\n\n 武神  力+10"
  },
  "the_godhand": {
    "name": "ザ・ゴッドハンド",
    "tier": "special",
    "icon": "👊",
    "classSkills": "戦技装備+3 装備可能な戦技の数+3 白魔術の極限 白魔法の回数が3倍になる 格闘回避+10 籠手を装備中、回避+10",
    "masterSkill": "神装 魔防+10",
    "skillsText": "兵種\n\n 戦技装備+3  装備可能な戦技の数+3  \n 白魔術の極限  白魔法の回数が3倍になる  \n 格闘回避+10  籠手を装備中、回避+10  \n\n\n\n\nマスター\n\n 神装  魔防+10"
  },
  "the_calamity": {
    "name": "ザ・カラミティ",
    "tier": "special",
    "icon": "🔥",
    "classSkills": "戦技装備+3 装備可能な戦技の数+3 鍵開け 鍵がなくても、宝箱を開けることができる 超級探索術 部隊にいる時、探索の結果が極めてPERFECTになりやすくなる",
    "masterSkill": "神命 幸運+10",
    "skillsText": "兵種\n\n 戦技装備+3  装備可能な戦技の数+3  \n 鍵開け  鍵がなくても、宝箱を開けることができる  \n 超級探索術  部隊にいる時、探索の結果が極めてPERFECTになりやすくなる  \n\n\n\n\nマスター\n\n 神命  幸運+10"
  },
  "the_trident": {
    "name": "ザ・トライデント",
    "tier": "special",
    "icon": "🔱",
    "classSkills": "戦技装備+3 装備可能な戦技の数+3 魔法回復+10 魔法で味方を回復する時、回復量+10 白魔術の極限 白魔法の回数が3倍になる",
    "masterSkill": "神壁 守備+10",
    "skillsText": "兵種\n\n 戦技装備+3  装備可能な戦技の数+3  \n 魔法回復+10  魔法で味方を回復する時、回復量+10  \n 白魔術の極限  白魔法の回数が3倍になる  \n\n\n\n\nマスター\n\n 神壁  守備+10"
  },
  "the_cavalier": {
    "name": "ザ・キャバリアー",
    "tier": "special",
    "icon": "🐎",
    "classSkills": "乗り降り 「乗る」「降りる」を使用できる 戦技装備+3 装備可能な戦技の数+3 黄金騎走 騎兵有効・騎兵特効を受けなくなる",
    "masterSkill": "神技 技+10",
    "skillsText": "兵種\n\n 乗り降り  「乗る」「降りる」を使用できる  \n 戦技装備+3  装備可能な戦技の数+3  \n 黄金騎走  騎兵有効・騎兵特効を受けなくなる  \n\n\n\n\nマスター\n\n 神技  技+10"
  },
  "the_avatar": {
    "name": "ジ・アヴァタール",
    "tier": "special",
    "icon": "👑",
    "classSkills": "全魔術極限 黒魔法・白魔法の回数が3倍になる 魔法命中+10 魔法を装備中、命中+10 魔法回復+20 魔法で味方を回復する時、回復量+20",
    "masterSkill": "神法 魔力+10",
    "skillsText": "兵種\n\n 全魔術極限  黒魔法・白魔法の回数が3倍になる  \n 魔法命中+10  魔法を装備中、命中+10  \n 魔法回復+20  魔法で味方を回復する時、回復量+20  \n\n\n\n\nマスター\n\n 神法  魔力+10"
  }
};

// 4. 全63キャラクターの初期スキルデータ（Game8攻略準拠）
export const INITIAL_SKILL_DATA = {
  "kai": {
    "personal": {
      "name": "活発",
      "desc": "移動力+1"
    },
    "bloodSign": {
      "name": "魂魄の天冠",
      "desc": "攻撃時、25%で発動、攻撃力+3"
    },
    "roots": {
      "name": "赤い宝石",
      "desc": "魔力+3。カイに受け継がれた秘宝"
    },
    "classes": {}
  },
  "dietrich": {
    "personal": {
      "name": "殺意",
      "desc": "先行での戦闘時、必殺+5"
    },
    "bloodSign": {
      "name": "永遠の天冠",
      "desc": "攻撃時、10%で発動、自分のHPを中回復する"
    },
    "roots": {
      "name": "漆黒のグウェン",
      "desc": "技+5。名門の重厚なる太刀"
    },
    "classes": {}
  },
  "theodora": {
    "personal": {
      "name": "不退の覚悟",
      "desc": "攻撃された時、30%で発動。受けるダメージを半減する。"
    },
    "bloodSign": {
      "name": "魂魄の天冠",
      "desc": "攻撃時、25%で発動、攻撃力+3"
    },
    "roots": {
      "name": "テルス神殿の血統",
      "desc": "魔防+5。神聖なる加護"
    },
    "classes": {}
  },
  "leda": {
    "personal": {
      "name": "闇討ち",
      "desc": "先行での戦闘時、5%で発動、反撃されなくなる。"
    },
    "bloodSign": {
      "name": "大地の天冠",
      "desc": "攻撃時、3%で発動、攻撃力+7"
    },
    "roots": {
      "name": "地弦・黒曜",
      "desc": "魔防+5。ブラガンサに伝わる弦"
    },
    "classes": {}
  },
  "savior": {
    "personal": {
      "name": "救世の光",
      "desc": "周囲2マスにいる敵の「冥府の加護」を無効化する"
    },
    "bloodSign": {
      "name": "預言者の天冠",
      "desc": "攻撃時、5%で発動、命中+100"
    },
    "roots": {
      "name": "船長の心核",
      "desc": "技+10。大いなる意志の核"
    },
    "classes": {}
  },
  "tiara": {
    "personal": {
      "name": "軍師の才",
      "desc": "味方に使用可能な戦技の射程+1"
    },
    "bloodSign": null,
    "roots": {
      "name": "軍師の徽章",
      "desc": "指揮・戦技射程補正"
    },
    "classes": {}
  },
  "pieter": {
    "personal": {
      "name": "狙い射ち",
      "desc": "弓の戦技を使う時、射程+1"
    },
    "bloodSign": null,
    "roots": {
      "name": "狩人の心得",
      "desc": "技+3。野生の勘"
    },
    "classes": {}
  },
  "guzaran": {
    "personal": {
      "name": "気分屋",
      "desc": "戦闘時、命中・回避・必殺のどれかが+10"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "esmeralda": {
    "personal": {
      "name": "怪力",
      "desc": "自分が装備している武器、装備品の重さを80%に抑える"
    },
    "bloodSign": {
      "name": "勇気の天冠",
      "desc": "攻撃時、3%で発動、与えるダメージが1.5倍になる"
    },
    "roots": {
      "name": "怪力無双の証",
      "desc": "力+5。鋼の筋肉"
    },
    "classes": {}
  },
  "fabio": {
    "personal": {
      "name": "闇呼び",
      "desc": "隣接する敵の必避-5"
    },
    "bloodSign": null,
    "roots": {
      "name": "常闇の外套",
      "desc": "魔力+3。闇夜に溶け込む術"
    },
    "classes": {}
  },
  "michaela": {
    "personal": {
      "name": "歴戦の強者",
      "desc": "隣接する敵との戦闘時、命中+10"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "jasmine": {
    "personal": {
      "name": "熟練の反撃術",
      "desc": "後攻での戦闘時、命中+20"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "yokai": {
    "personal": {
      "name": "破戒僧",
      "desc": "敵を倒した時、（幸運÷2）%で発動、自分のHPを最大HP分回復する"
    },
    "bloodSign": {
      "name": "魂魄の天冠",
      "desc": "攻撃時、25%で発動、攻撃力+3"
    },
    "roots": null,
    "classes": {}
  },
  "sophia": {
    "personal": {
      "name": "治癒の心得",
      "desc": "魔法で味方を回復する時、回復量+10"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "lysander": {
    "personal": {
      "name": "疾走攻撃",
      "desc": "先攻での戦闘時、回避+15"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "bonaparte": {
    "personal": {
      "name": "入れ知恵",
      "desc": "隣接する味方の技+3"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "tobias": {
    "personal": {
      "name": "大技",
      "desc": "戦技での攻撃時、攻撃力+3"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "lilian": {
    "personal": {
      "name": "安全策",
      "desc": "戦闘時、敵が反撃できないなら、命中+10"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "alexandra": {
    "personal": {
      "name": "白銀の乙女",
      "desc": "隣接する味方1人につき、自分の命中・回避+5"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "loretta": {
    "personal": {
      "name": "心の余裕",
      "desc": "戦闘時、自分のHPが半分以上なら、回避+10"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "buccaneer": {
    "personal": {
      "name": "守護騎士の務め",
      "desc": "攻撃された時、受けるダメージを90%に抑える"
    },
    "bloodSign": null,
    "roots": {
      "name": "堅壁の盾",
      "desc": "守備+5。絶対防御の意志"
    },
    "classes": {}
  },
  "scirocco": {
    "personal": {
      "name": "女神の恩寵",
      "desc": "戦闘後、自分のHPを5回復する"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "olympia": {
    "personal": {
      "name": "負けず嫌い",
      "desc": "魔法を装備中、必殺+10"
    },
    "bloodSign": null,
    "roots": {
      "name": "魔道神童の閃き",
      "desc": "魔力+4。天賦の才"
    },
    "classes": {}
  },
  "muu": {
    "personal": {
      "name": "成長の兆し",
      "desc": "レベルアップした時、基本能力が成長しやすい"
    },
    "bloodSign": null,
    "roots": {
      "name": "原初の息吹",
      "desc": "全成長率+5%。神秘なる成長"
    },
    "classes": {}
  },
  "catania": {
    "personal": {
      "name": "疾風",
      "desc": "戦闘時、自分の攻速が敵より3以上大きければ、命中+20"
    },
    "bloodSign": null,
    "roots": {
      "name": "迅雷の足袋",
      "desc": "速さ+4。電光石火の身のこなし"
    },
    "classes": {}
  },
  "nuzzo": {
    "personal": {
      "name": "部族の秘技",
      "desc": "戦闘時、自分の攻撃が敵に有効・特効なら、攻撃力+3"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "kiroika": {
    "personal": {
      "name": "暴虐",
      "desc": "戦闘時、敵が状態異常なら、攻撃力+3、必殺+10"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "fiana": {
    "personal": {
      "name": "淑光",
      "desc": "魔法で味方を回復する時、幸運%で発動、魔法の回数が減らなくなる"
    },
    "bloodSign": {
      "name": "再生の天冠",
      "desc": "攻撃時、20%で発動、自分のHPを小回復する"
    },
    "roots": {
      "name": "再生の護符",
      "desc": "HP+5。自己再生の力"
    },
    "classes": {}
  },
  "simon": {
    "personal": {
      "name": "死にそびれ",
      "desc": "自分のHPが2以上で、HPが0になるようなダメージを受けた時、幸運%で発動、HPが1残る"
    },
    "bloodSign": null,
    "roots": {
      "name": "悪運のコイン",
      "desc": "幸運+7。幾度もの修羅場を越えた証"
    },
    "classes": {}
  },
  "dante": {
    "personal": {
      "name": "戦場の作劇",
      "desc": "周囲2マスにいる味方の戦闘時、その味方の（魅力÷2）%で発動、その味方の必避+10"
    },
    "bloodSign": null,
    "roots": {
      "name": "熱血の魂",
      "desc": "力+4。燃え盛る闘志"
    },
    "classes": {}
  },
  "gates": {
    "personal": {
      "name": "助太刀",
      "desc": "隣接する味方の守備+3"
    },
    "bloodSign": null,
    "roots": {
      "name": "大工の槌",
      "desc": "守備+4。堅牢な体躯"
    },
    "classes": {}
  },
  "kilik": {
    "personal": {
      "name": "冷静沈着",
      "desc": "後攻での戦闘時、攻速+3 回避+10"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "bertrand": {
    "personal": {
      "name": "鎧葬流",
      "desc": "戦闘時、5%で発動。攻速に関係なく追撃する。"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "tarimoon": {
    "personal": {
      "name": "冒険王の英運",
      "desc": "幸運+3"
    },
    "bloodSign": {
      "name": "魂魄の天冠",
      "desc": "攻撃時、25%で発動、攻撃力+3"
    },
    "roots": null,
    "classes": {}
  },
  "anatolia": {
    "personal": {
      "name": "流気巧",
      "desc": "回避+3"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "kouka": {
    "personal": {
      "name": "朱明",
      "desc": "魔法を装備中、命中+10"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "troia": {
    "personal": {
      "name": "雲手",
      "desc": "籠手を装備中、命中+10"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "ursula": {
    "personal": {
      "name": "商会の支配人",
      "desc": "自分を含め、周囲2マスにいる味方は道具袋を使用できる"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "orhel": {
    "personal": {
      "name": "堅牢堅固",
      "desc": "守備+5、重装になる。騎兵、飛行の兵種になれない。"
    },
    "bloodSign": {
      "name": "魂魄の天冠",
      "desc": "攻撃時、25%で発動、攻撃力+3"
    },
    "roots": null,
    "classes": {}
  },
  "diego": {
    "personal": {
      "name": "用心棒",
      "desc": "隣接する味方の戦闘時、5%で発動、その味方は追撃されなくなる"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "nine": {
    "personal": {
      "name": "精霊の声",
      "desc": "戦闘時、敵が魔法なら、命中・回避+10"
    },
    "bloodSign": {
      "name": "孤高の天冠",
      "desc": "攻撃時、10%で発動、命中+30"
    },
    "roots": null,
    "classes": {}
  },
  "saran": {
    "personal": {
      "name": "引き留め役",
      "desc": "「引き寄せ」を使用後、補助魔法を使用できる"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "nadja": {
    "personal": {
      "name": "先手必勝",
      "desc": "先攻での戦闘時、50%で発動、攻撃力+3"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "io": {
    "personal": {
      "name": "愛馬との連携",
      "desc": "【騎兵】先攻での戦闘時、防御力+3、必避+30"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "noudine": {
    "personal": {
      "name": "強行突破",
      "desc": "【騎兵】敵のいるマスを通過して移動できる（自分が大型ユニットなら無効）"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "benditz": {
    "personal": {
      "name": "車上の戦闘術",
      "desc": "【騎兵】自分が「戦車兵」なら、命中+20"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "nathan": {
    "personal": {
      "name": "猪突猛進",
      "desc": "先行での戦闘時、攻速+3 命中+10"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "noctura": {
    "personal": {
      "name": "集中",
      "desc": "戦闘後、回避+3（次の自分のフェイズまで）"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "pepe": {
    "personal": {
      "name": "狩人の待ち伏せ",
      "desc": "敵フェイズ中の戦闘時、敵がダメージを受けているなら、30%で発動、自分が先攻になる"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "seteth": {
    "personal": {
      "name": "臨戦態勢",
      "desc": "敵のフェイズ中、1度目の戦闘時、50%で発動、自分が先攻になる"
    },
    "bloodSign": {
      "name": "天秤の天冠",
      "desc": "攻撃時、3%で発動、反撃されなくなる"
    },
    "roots": null,
    "classes": {}
  },
  "jester": {
    "personal": {
      "name": "瞬転",
      "desc": "「入れ替え」を使用後、守備+3（次の自分のフェイズまで）"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "goliath": {
    "personal": {
      "name": "重量級の戦士",
      "desc": "騎兵、飛行の兵種になれない、体格+5"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "luludea": {
    "personal": {
      "name": "はやぶさ",
      "desc": "先攻での戦闘時、攻速+3"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "daito": {
    "personal": {
      "name": "一発勝負",
      "desc": "戦闘時、自分も敵も追撃できないなら、自分の攻撃力+5"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "harvin": {
    "personal": {
      "name": "順応",
      "desc": "戦闘後、命中+2（+30が最大）（マップ終了まで）"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "zacone": {
    "personal": {
      "name": "斧包丁",
      "desc": "斧を装備中、命中+10"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "marzide": {
    "personal": {
      "name": "暴れ斧",
      "desc": "斧を装備中、力+3"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "centrion": {
    "personal": {
      "name": "鋼玉の守護",
      "desc": "敵のフェイズ中、1度目の戦闘だけ攻撃で受けるダメージを半減する"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "inioni": {
    "personal": {
      "name": "強弓使い",
      "desc": "弓を装備中、力+3"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "anna": {
    "personal": {
      "name": "戦象の進撃",
      "desc": "【騎兵】自分が「戦象兵」なら、猛撃の回数+1"
    },
    "bloodSign": {
      "name": "無明の天冠",
      "desc": "攻撃時、3%で発動。攻撃力+5、命中+30"
    },
    "roots": {
      "name": "商人の天秤",
      "desc": "幸運+10。商売繁盛の極意"
    },
    "classes": {}
  },
  "aswan": {
    "personal": {
      "name": "弓姫",
      "desc": "弓を装備中、命中+20"
    },
    "bloodSign": {
      "name": "大地の天冠",
      "desc": "攻撃時、3%で発動、攻撃力+7"
    },
    "roots": null,
    "classes": {}
  },
  "tahounia": {
    "personal": {
      "name": "ピュトーンの流儀",
      "desc": "籠手の戦技を使う戦闘時、15%で発動。攻速に関係なく追撃する。"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  },
  "klapka": {
    "personal": {
      "name": "銀の精神",
      "desc": "戦闘後、守備％で発動。守備+1（+10が最大）（マップ終了まで）"
    },
    "bloodSign": null,
    "roots": null,
    "classes": {}
  }
};
