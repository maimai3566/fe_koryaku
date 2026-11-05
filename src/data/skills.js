// ========================================================
// ファイアーエムブレム 万紫千紅 - スキルマスターデータ
// （Game8 攻略準拠: https://game8.jp/fe-banshisenko/818786）
// ========================================================

// 1. スキル一覧テーブルのカラム定義（全15カラム）
export const SKILL_COLUMNS = [
  // --- 固有特性 (4) ---
  { id: 'personal', name: '個人スキル', icon: '🌟', category: 'trait', badgeColor: 'bg-amber-950/30 text-amber-300 border-amber-600/50' },
  { id: 'bloodSign', name: '血印', icon: '🩸', category: 'trait', badgeColor: 'bg-rose-950/30 text-rose-300 border-rose-600/50' },
  { id: 'roots', name: 'ルーツ', icon: '📜', category: 'trait', badgeColor: 'bg-sky-950/30 text-sky-300 border-sky-600/50' },
  { id: 'exclusive', name: 'キャラ専用', icon: '👑', category: 'trait', badgeColor: 'bg-purple-950/30 text-purple-300 border-purple-600/50' },

  // --- 武器技能 (5) ---
  { id: 'sword', name: '剣', icon: '🗡️', category: 'weapon', badgeColor: 'bg-emerald-950/30 text-emerald-300 border-emerald-600/50' },
  { id: 'lance', name: '槍', icon: '🔱', category: 'weapon', badgeColor: 'bg-cyan-950/30 text-cyan-300 border-cyan-600/50' },
  { id: 'axe', name: '斧', icon: '🪓', category: 'weapon', badgeColor: 'bg-orange-950/30 text-orange-300 border-orange-600/50' },
  { id: 'brawling', name: '籠手', icon: '👊', category: 'weapon', badgeColor: 'bg-amber-950/30 text-amber-300 border-amber-600/50' },
  { id: 'bow', name: '弓', icon: '🏹', category: 'weapon', badgeColor: 'bg-lime-950/30 text-lime-300 border-lime-600/50' },

  // --- 魔法技能 (2) ---
  { id: 'white_magic', name: '白魔法', icon: '✨', category: 'magic', badgeColor: 'bg-yellow-950/30 text-yellow-300 border-yellow-600/50' },
  { id: 'dark_magic', name: '黒魔法', icon: '🌘', category: 'magic', badgeColor: 'bg-violet-950/30 text-violet-300 border-violet-600/50' },

  // --- 兵科技能 (4) ---
  { id: 'infantry', name: '歩兵', icon: '🚶', category: 'movement', badgeColor: 'bg-teal-950/30 text-teal-300 border-teal-600/50' },
  { id: 'armor', name: '重装', icon: '🛡️', category: 'movement', badgeColor: 'bg-slate-900 text-slate-300 border-slate-600/50' },
  { id: 'cavalry', name: '騎兵', icon: '🐎', category: 'movement', badgeColor: 'bg-blue-950/30 text-blue-300 border-blue-600/50' },
  { id: 'flying', name: '飛行', icon: '🪽', category: 'movement', badgeColor: 'bg-indigo-950/30 text-indigo-300 border-indigo-600/50' }
];

// 2. カラム絞り込み用カテゴリフィルター
export const SKILL_CATEGORIES = {
  all: { key: 'all', label: 'すべて', icon: '🌐' },
  trait: { key: 'trait', label: '固有・専用', icon: '✨' },
  weapon: { key: 'weapon', label: '武器技能', icon: '⚔️' },
  magic: { key: 'magic', label: '魔法技能', icon: '🔮' },
  movement: { key: 'movement', label: '兵科技能', icon: '🛡️' }
};

// 3. 全63キャラクターのスキルマスターデータ（Game8攻略準拠）
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
    "exclusive": [
      {
        "name": "冥炎の主",
        "desc": "自分が出撃中、全味方は冥炎の影響を受けず、冥炎にいる全味方が攻撃で受けるダメージを半減する"
      },
      {
        "name": "陽動+",
        "desc": "隣接する敵の命中-5"
      },
      {
        "name": "攻撃陣形",
        "desc": "隣接する味方の攻撃力+1"
      }
    ],
    "sword": [],
    "lance": [
      {
        "name": "槍術の深奥",
        "desc": "槍を装備中、命中・回避+10、攻撃力+3"
      }
    ],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "白兵の間合い",
        "desc": "【歩兵】隣接する敵の移動力-1"
      },
      {
        "name": "身躱し",
        "desc": "【歩兵】戦闘時、敵が弓・魔法なら、回避+5"
      }
    ],
    "armor": [
      {
        "name": "重装移動術+",
        "desc": "【重装】移動力+2"
      }
    ],
    "cavalry": [
      {
        "name": "対騎兵戦術",
        "desc": "周囲2マスにいる騎兵の敵の命中・回避-5"
      },
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      },
      {
        "name": "高速飛行術",
        "desc": "【飛行】先攻での戦闘時、攻速+2"
      }
    ]
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
    "exclusive": [
      {
        "name": "獣の衝動",
        "desc": "戦闘後、必殺+2（必殺の一撃が発生した戦闘後、元に戻る）"
      },
      {
        "name": "威嚇+",
        "desc": "隣接する敵の必殺-10"
      }
    ],
    "sword": [
      {
        "name": "剣術の深奥",
        "desc": "剣を装備中、命中・回避+10、攻撃力+3"
      }
    ],
    "lance": [
      {
        "name": "槍術の深奥",
        "desc": "槍を装備中、命中・回避+10、攻撃力+3"
      }
    ],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "歩行移動術+",
        "desc": "【歩兵】移動時、地形の移動コスト-2（1より小さくならない）"
      },
      {
        "name": "すり抜け",
        "desc": "【歩兵】敵のいるマスを通過して移動できる"
      },
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      },
      {
        "name": "白兵の間合い+",
        "desc": "【歩兵】隣接する敵の移動力-2"
      }
    ],
    "armor": [
      {
        "name": "重装戦闘術",
        "desc": "【重装】技+5"
      },
      {
        "name": "直前防御",
        "desc": "攻撃された時、25%で発動。防御力+3"
      }
    ],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      },
      {
        "name": "高速飛行術",
        "desc": "【飛行】先攻での戦闘時、攻速+2"
      }
    ]
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
    "exclusive": [
      {
        "name": "計略の達人",
        "desc": "計略の回数+1"
      },
      {
        "name": "直撃",
        "desc": "ブレイズアーツでの攻撃時、30%で発動。与えるダメージ+10"
      },
      {
        "name": "ぶっ壊し",
        "desc": "障害物を攻撃する時、与えるダメージが3倍になる"
      },
      {
        "name": "牽制+",
        "desc": "隣接する敵の回避-5"
      },
      {
        "name": "前線計略術",
        "desc": "攻撃系計略を使用後、攻撃力+5（次の自分のフェイズまで）"
      },
      {
        "name": "攻撃陣形+",
        "desc": "隣接する味方の攻撃力+2"
      }
    ],
    "sword": [],
    "lance": [
      {
        "name": "槍術の深奥",
        "desc": "槍を装備中、命中・回避+10、攻撃力+3"
      }
    ],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "致命避け+",
        "desc": "【歩兵】必避+20"
      },
      {
        "name": "歩行移動術",
        "desc": "【歩兵】移動時、地形の移動コスト-1（1より小さくならない）"
      },
      {
        "name": "白兵の間合い",
        "desc": "【歩兵】隣接する敵の移動力-1"
      }
    ],
    "armor": [
      {
        "name": "重装戦闘術",
        "desc": "【重装】技+5"
      },
      {
        "name": "ヘビーブレイク+",
        "desc": "【重装】攻撃時、（守備÷2）%で発動。与えるダメージが2倍になる"
      }
    ],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      },
      {
        "name": "高速飛行術",
        "desc": "【飛行】先攻での戦闘時、攻速+2"
      }
    ]
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
    "exclusive": [
      {
        "name": "即興",
        "desc": "ブレイズアーツを使用後、自分がオーバーブレイズ中なら、さらに攻撃できる"
      },
      {
        "name": "陽動",
        "desc": "隣接する敵の命中-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "歩行移動術+",
        "desc": "【歩兵】移動時、地形の移動コスト-2（1より小さくならない）"
      },
      {
        "name": "すり抜け",
        "desc": "【歩兵】敵のいるマスを通過して移動できる"
      },
      {
        "name": "身躱し+",
        "desc": "【歩兵】戦闘時、敵が弓・魔法なら、回避+10"
      },
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      }
    ],
    "armor": [],
    "cavalry": [
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      }
    ]
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
    "exclusive": [
      {
        "name": "烈日の加護",
        "desc": "冥魔の敵に攻撃された時、5%で発動。受けるダメージを0にする"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": []
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
    "exclusive": [
      {
        "name": "軍師の炯眼+",
        "desc": "先攻での戦闘後、その敵の回避-10（1回戦闘すると元に戻る）"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      }
    ]
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
    "exclusive": [
      {
        "name": "誤差修正+",
        "desc": "戦闘時、自分の命中率が75%以上なら、命中+20"
      },
      {
        "name": "対狙撃戦術",
        "desc": "周囲2マスにいる弓の敵の命中・回避-5"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "歩行移動術",
        "desc": "【歩兵】移動時、地形の移動コスト-1（1より小さくならない）"
      },
      {
        "name": "射撃安定+",
        "desc": "【歩兵】弓・魔法を装備中、命中+10"
      },
      {
        "name": "陣取り",
        "desc": "【歩兵】戦闘時、自分が有利な地形にいるなら、回避+10"
      }
    ],
    "armor": [
      {
        "name": "重装戦闘術",
        "desc": "【重装】技+5"
      },
      {
        "name": "直前防御",
        "desc": "攻撃された時、25%で発動。防御力+3"
      }
    ],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      }
    ]
  },
  "guzaran": {
    "personal": {
      "name": "気分屋",
      "desc": "戦闘時、命中・回避・必殺のどれかが+10"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "気分は上々+",
        "desc": "「気分屋」の効果の能力上昇が+20になる"
      },
      {
        "name": "陽動",
        "desc": "隣接する敵の命中-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "歩行移動術",
        "desc": "【歩兵】移動時、地形の移動コスト-1（1より小さくならない）"
      },
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      },
      {
        "name": "白兵の間合い+",
        "desc": "【歩兵】隣接する敵の移動力-2"
      }
    ],
    "armor": [
      {
        "name": "直前防御",
        "desc": "攻撃された時、25%で発動。防御力+3"
      }
    ],
    "cavalry": [
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      }
    ]
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
    "exclusive": [
      {
        "name": "体格",
        "desc": "体格+5"
      },
      {
        "name": "威嚇",
        "desc": "隣接する敵の必殺-5"
      }
    ],
    "sword": [],
    "lance": [
      {
        "name": "槍投げの達人+",
        "desc": "戦闘時、槍を投げて攻撃するなら、命中+20、攻撃力+4"
      },
      {
        "name": "槍術の深奥",
        "desc": "槍を装備中、命中・回避+10、攻撃力+3"
      }
    ],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "歩行移動術",
        "desc": "【歩兵】移動時、地形の移動コスト-1（1より小さくならない）"
      },
      {
        "name": "白兵の間合い+",
        "desc": "【歩兵】隣接する敵の移動力-2"
      },
      {
        "name": "致命避け",
        "desc": "【歩兵】必避+10"
      }
    ],
    "armor": [
      {
        "name": "ヘビーブレイク",
        "desc": "【重装】攻撃時、（守備÷2）%で発動。与えるダメージが1.5倍になる"
      },
      {
        "name": "防弓術",
        "desc": "【重装】戦闘時、敵が弓なら、防御力+5"
      }
    ],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      },
      {
        "name": "高速飛行術",
        "desc": "【飛行】先攻での戦闘時、攻速+2"
      }
    ]
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
    "exclusive": [
      {
        "name": "対魔法戦術",
        "desc": "周囲2マスにいる魔法の敵の命中・回避-5"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [
      {
        "name": "闇の秘術+",
        "desc": "「闇呼び」の効果の範囲が周囲3マスになる"
      }
    ],
    "infantry": [
      {
        "name": "射撃安定+",
        "desc": "【歩兵】弓・魔法を装備中、命中+10"
      },
      {
        "name": "狙撃回避",
        "desc": "【歩兵】3マス以上離れた敵との戦闘時、回避+10"
      }
    ],
    "armor": [],
    "cavalry": [
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": []
  },
  "michaela": {
    "personal": {
      "name": "歴戦の強者",
      "desc": "隣接する敵との戦闘時、命中+10"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "鉄血+",
        "desc": "隣接する敵との戦闘時、攻撃力+3。さらにその攻撃時、30%で発動。攻撃力+3"
      },
      {
        "name": "牽制+",
        "desc": "隣接する敵の回避-5"
      },
      {
        "name": "陽動",
        "desc": "隣接する敵の命中-3"
      },
      {
        "name": "必殺守備",
        "desc": "必殺の一撃を受けた時、30%で発動。受けるダメージを半減する"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [
      {
        "name": "斧術の深奥",
        "desc": "斧を装備中、命中・回避+10、攻撃力+3"
      }
    ],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "歩行移動術",
        "desc": "【歩兵】移動時、地形の移動コスト-1（1より小さくならない）"
      },
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      },
      {
        "name": "白兵の間合い+",
        "desc": "【歩兵】隣接する敵の移動力-2"
      }
    ],
    "armor": [
      {
        "name": "絶対防御",
        "desc": "【重装】攻撃された時、10%で発動。防御力+10"
      },
      {
        "name": "重装移動術",
        "desc": "【重装】移動力+1"
      }
    ],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      },
      {
        "name": "高速飛行術",
        "desc": "【飛行】先攻での戦闘時、攻速+2"
      }
    ]
  },
  "jasmine": {
    "personal": {
      "name": "熟練の反撃術",
      "desc": "後攻での戦闘時、命中+20"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "怒涛の反撃+",
        "desc": "後攻での戦闘時、攻撃力+3、必殺+10"
      },
      {
        "name": "追撃防御",
        "desc": "追撃された時、50%で発動。受けるダメージを半減する"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "陣取り",
        "desc": "【歩兵】戦闘時、自分が有利な地形にいるなら、回避+10"
      }
    ],
    "armor": [
      {
        "name": "重装戦闘術",
        "desc": "【重装】技+5"
      },
      {
        "name": "重装移動術",
        "desc": "【重装】移動力+1"
      }
    ],
    "cavalry": [],
    "flying": []
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
    "exclusive": [
      {
        "name": "活力結界+",
        "desc": "攻撃された時、（自分の残りHP）%で発動。防御力+5"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      },
      {
        "name": "白兵の間合い",
        "desc": "【歩兵】隣接する敵の移動力-1"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "sophia": {
    "personal": {
      "name": "治癒の心得",
      "desc": "魔法で味方を回復する時、回復量+10"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [
      {
        "name": "遠隔治癒+",
        "desc": "回復魔法の射程+2"
      },
      {
        "name": "白魔術の深奥",
        "desc": "白魔法を装備中、命中・回避+10、攻撃力+3"
      }
    ],
    "dark_magic": [],
    "infantry": [
      {
        "name": "咄嗟の回避+",
        "desc": "【歩兵】攻撃された時、5%で発動。回避+100"
      },
      {
        "name": "狙撃回避",
        "desc": "【歩兵】3マス以上離れた敵との戦闘時、回避+10"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "lysander": {
    "personal": {
      "name": "疾走攻撃",
      "desc": "先攻での戦闘時、回避+15"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "加速+",
        "desc": "敵を倒した時、速さ+2（+10が最大）（マップ終了まで）"
      },
      {
        "name": "前線計略術",
        "desc": "攻撃系計略を使用後、攻撃力+5（次の自分のフェイズまで）"
      },
      {
        "name": "陽動+",
        "desc": "隣接する敵の命中-5"
      }
    ],
    "sword": [],
    "lance": [
      {
        "name": "槍術の深奥",
        "desc": "槍を装備中、命中・回避+10、攻撃力+3"
      }
    ],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      }
    ],
    "armor": [
      {
        "name": "鎧飛び",
        "desc": "【重装】回避+10"
      },
      {
        "name": "直前防御",
        "desc": "攻撃された時、25%で発動。防御力+3"
      },
      {
        "name": "防槍術",
        "desc": "【重装】戦闘時、敵が槍なら、防御力+5"
      }
    ],
    "cavalry": [
      {
        "name": "騎兵移動術",
        "desc": "【騎兵】移動時、地形の移動コスト-1（1より小さくならない）"
      },
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "高速飛行術+",
        "desc": "【飛行】先攻での戦闘時、攻速+4"
      },
      {
        "name": "飛行戦闘術",
        "desc": "【飛行】先攻での戦闘時、命中+5"
      },
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      }
    ]
  },
  "bonaparte": {
    "personal": {
      "name": "入れ知恵",
      "desc": "隣接する味方の技+3"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "補足説明+",
        "desc": "隣接する味方の戦闘時、30%で発動。その味方の命中+20"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "狙撃回避",
        "desc": "【歩兵】3マス以上離れた敵との戦闘時、回避+10"
      },
      {
        "name": "射撃安定",
        "desc": "【歩兵】弓・魔法を装備中、命中+5"
      }
    ],
    "armor": [],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": []
  },
  "tobias": {
    "personal": {
      "name": "大技",
      "desc": "戦技での攻撃時、攻撃力+3"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "本気の一発+",
        "desc": "戦技での攻撃時、30%で発動。与えるダメージが1.5倍になる"
      },
      {
        "name": "体格",
        "desc": "体格+5"
      },
      {
        "name": "威嚇+",
        "desc": "隣接する敵の必殺-10"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [
      {
        "name": "斧術の深奥",
        "desc": "斧を装備中、命中・回避+10、攻撃力+3"
      }
    ],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "白兵の間合い+",
        "desc": "【歩兵】隣接する敵の移動力-2"
      },
      {
        "name": "致命避け",
        "desc": "【歩兵】必避+10"
      }
    ],
    "armor": [
      {
        "name": "絶対防御+",
        "desc": "【重装】攻撃された時、20%で発動。防御力+10"
      }
    ],
    "cavalry": [
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      }
    ]
  },
  "lilian": {
    "personal": {
      "name": "安全策",
      "desc": "戦闘時、敵が反撃できないなら、命中+10"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "なんかいい感じ+",
        "desc": "攻撃時、自分の命中率が100%なら、攻撃力+5"
      },
      {
        "name": "防御陣形",
        "desc": "隣接する味方の防御力+1"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "優位戦闘術",
        "desc": "【歩兵】戦闘時、自分が有利な地形にいるなら、攻撃力+5"
      },
      {
        "name": "歩行移動術",
        "desc": "【歩兵】移動時、地形の移動コスト-1（1より小さくならない）"
      },
      {
        "name": "射撃安定+",
        "desc": "【歩兵】弓・魔法を装備中、命中+10"
      },
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "alexandra": {
    "personal": {
      "name": "白銀の乙女",
      "desc": "隣接する味方1人につき、自分の命中・回避+5"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "飛翔+",
        "desc": "自分が歩行不可の地形にいる時、攻速+5"
      },
      {
        "name": "陽動",
        "desc": "隣接する敵の命中-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      },
      {
        "name": "高速飛行術",
        "desc": "【飛行】先攻での戦闘時、攻速+2"
      }
    ]
  },
  "loretta": {
    "personal": {
      "name": "心の余裕",
      "desc": "戦闘時、自分のHPが半分以上なら、回避+10"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "絶好調+",
        "desc": "戦闘時、自分のHPが最大なら、攻撃力+3、回避+10"
      },
      {
        "name": "陽動",
        "desc": "隣接する敵の命中-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      },
      {
        "name": "高速飛行術",
        "desc": "【飛行】先攻での戦闘時、攻速+2"
      }
    ]
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
    "exclusive": [
      {
        "name": "返礼の一撃+",
        "desc": "後攻での攻撃時、10%で発動。与えるダメージが1.3倍になる"
      },
      {
        "name": "防御陣形",
        "desc": "隣接する味方の防御力+1"
      },
      {
        "name": "牽制",
        "desc": "隣接する敵の回避-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [
      {
        "name": "斧術の深奥",
        "desc": "斧を装備中、命中・回避+10、攻撃力+3"
      }
    ],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "白兵の間合い",
        "desc": "【歩兵】隣接する敵の移動力-1"
      },
      {
        "name": "致命避け",
        "desc": "【歩兵】必避+10"
      }
    ],
    "armor": [
      {
        "name": "防弓術",
        "desc": "【重装】戦闘時、敵が弓なら、防御力+5"
      },
      {
        "name": "重装移動術",
        "desc": "【重装】移動力+1"
      }
    ],
    "cavalry": [
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": []
  },
  "scirocco": {
    "personal": {
      "name": "女神の恩寵",
      "desc": "戦闘後、自分のHPを5回復する"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "風任せ+",
        "desc": "戦闘時、「回避+1」「回避+5」「回避+20」「回避+30」のどれかが発動する"
      },
      {
        "name": "陽動+",
        "desc": "隣接する敵の命中-5"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [
      {
        "name": "白魔術の深奥",
        "desc": "白魔法を装備中、命中・回避+10、攻撃力+3"
      }
    ],
    "dark_magic": [],
    "infantry": [
      {
        "name": "狙撃回避",
        "desc": "【歩兵】3マス以上離れた敵との戦闘時、回避+10"
      },
      {
        "name": "身躱し+",
        "desc": "【歩兵】戦闘時、敵が弓・魔法なら、回避+10"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
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
    "exclusive": [
      {
        "name": "威嚇+",
        "desc": "隣接する敵の必殺-10"
      },
      {
        "name": "攻撃陣形",
        "desc": "隣接する味方の攻撃力+1"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [
      {
        "name": "情動のリザイア+",
        "desc": "リザイアを使う戦闘時、攻撃力+5、必殺+10"
      }
    ],
    "dark_magic": [],
    "infantry": [
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      },
      {
        "name": "射撃安定",
        "desc": "【歩兵】弓・魔法を装備中、命中+5"
      }
    ],
    "armor": [
      {
        "name": "重装戦闘術",
        "desc": "【重装】技+5"
      }
    ],
    "cavalry": [],
    "flying": []
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
    "exclusive": [
      {
        "name": "強戦士の血+",
        "desc": "装備する武器の種類によって基本能力が大きく上がる"
      },
      {
        "name": "陽動",
        "desc": "隣接する敵の命中-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [
      {
        "name": "格闘術の深奥",
        "desc": "籠手を装備中、命中・回避+10、攻撃力+3"
      }
    ],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "奇襲",
        "desc": "【歩兵】戦闘時、自分が有利な地形にいるなら、命中+15"
      },
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      },
      {
        "name": "身躱し",
        "desc": "【歩兵】戦闘時、敵が弓・魔法なら、回避+5"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
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
    "exclusive": [
      {
        "name": "風を味方に+",
        "desc": "戦闘時、自分の攻速が敵より5以上大きければ、攻撃力+3、8以上大きければ、回避+20"
      },
      {
        "name": "威嚇+",
        "desc": "隣接する敵の必殺-10"
      },
      {
        "name": "陽動+",
        "desc": "隣接する敵の命中-5"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [
      {
        "name": "直前防御",
        "desc": "攻撃された時、25%で発動。防御力+3"
      },
      {
        "name": "重装移動術",
        "desc": "【重装】移動力+1"
      }
    ],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "飛行戦闘術",
        "desc": "【飛行】先攻での戦闘時、命中+5"
      },
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      },
      {
        "name": "高速飛行術",
        "desc": "【飛行】先攻での戦闘時、攻速+2"
      }
    ]
  },
  "nuzzo": {
    "personal": {
      "name": "部族の秘技",
      "desc": "戦闘時、自分の攻撃が敵に有効・特効なら、攻撃力+3"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "秘奥+",
        "desc": "戦闘時、自分の攻撃が敵に有効・特効なら、命中+20"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "kiroika": {
    "personal": {
      "name": "暴虐",
      "desc": "戦闘時、敵が状態異常なら、攻撃力+3、必殺+10"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "威迫+",
        "desc": "戦闘時、20%で発動。敵の必避を半減させる"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "歩行移動術",
        "desc": "【歩兵】移動時、地形の移動コスト-1（1より小さくならない）"
      },
      {
        "name": "射撃安定+",
        "desc": "【歩兵】弓・魔法を装備中、命中+10"
      },
      {
        "name": "陣取り",
        "desc": "【歩兵】戦闘時、自分が有利な地形にいるなら、回避+10"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
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
    "exclusive": [
      {
        "name": "信仰の賜物+",
        "desc": "魔法で味方を回復する時、幸運%で発動。回復量+30"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": []
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
    "exclusive": [
      {
        "name": "悪運+",
        "desc": "敵を倒した時、幸運+2（+10が最大）（マップ終了まで）"
      },
      {
        "name": "威嚇",
        "desc": "隣接する敵の必殺-5"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "白兵の間合い+",
        "desc": "【歩兵】隣接する敵の移動力-2"
      },
      {
        "name": "致命避け",
        "desc": "【歩兵】必避+10"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
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
    "exclusive": [
      {
        "name": "追加演出+",
        "desc": "「戦場の作劇」発動時、その味方の命中・必殺+10"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "射撃安定",
        "desc": "【歩兵】弓・魔法を装備中、命中+5"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
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
    "exclusive": [
      {
        "name": "牙閃+",
        "desc": "攻撃時、20%で発動。攻撃力+7、命中+100"
      },
      {
        "name": "陽動",
        "desc": "隣接する敵の命中-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": []
  },
  "kilik": {
    "personal": {
      "name": "冷静沈着",
      "desc": "後攻での戦闘時、攻速+3 回避+10"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "牽制",
        "desc": "隣接する敵の回避-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": []
  },
  "bertrand": {
    "personal": {
      "name": "鎧葬流",
      "desc": "戦闘時、5%で発動。攻速に関係なく追撃する。"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "後の先",
        "desc": "敵フェイズ中の戦闘時、25%で発動。自分が先攻になる"
      },
      {
        "name": "先の先",
        "desc": "先攻での戦闘時、25%で発動。敵の反撃より先に追撃できる"
      },
      {
        "name": "陽動+",
        "desc": "隣接する敵の命中-5"
      },
      {
        "name": "攻撃陣形",
        "desc": "隣接する味方の攻撃力+1"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "白兵の間合い",
        "desc": "【歩兵】隣接する敵の移動力-1"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
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
    "exclusive": [
      {
        "name": "熟練の砲手",
        "desc": "兵器を使う戦闘時、命中+30"
      },
      {
        "name": "勝利の風",
        "desc": "自分と敵の攻撃時、幸運%で発動。自分の攻撃時なら、命中+15。敵の攻撃時なら、回避+15"
      },
      {
        "name": "攻撃陣形",
        "desc": "隣接する味方の攻撃力+1"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "anatolia": {
    "personal": {
      "name": "流気巧",
      "desc": "回避+3"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "連貫円滑+",
        "desc": "自分が攻撃を回避した時、自分のHPを10回復する"
      },
      {
        "name": "経絡拡張",
        "desc": "敵を倒した時、最大HP+2（+10が最大）（マップ終了まで）"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "身躱し+",
        "desc": "【歩兵】戦闘時、敵が弓・魔法なら、回避+10"
      },
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "kouka": {
    "personal": {
      "name": "朱明",
      "desc": "魔法を装備中、命中+10"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "troia": {
    "personal": {
      "name": "雲手",
      "desc": "籠手を装備中、命中+10"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "ursula": {
    "personal": {
      "name": "商会の支配人",
      "desc": "自分を含め、周囲2マスにいる味方は道具袋を使用できる"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "好機+",
        "desc": "攻撃時、（幸運÷2）%で発動。与えるダメージが1.5倍になる"
      },
      {
        "name": "陽動",
        "desc": "隣接する敵の命中-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "身躱し",
        "desc": "【歩兵】戦闘時、敵が弓・魔法なら、回避+5"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
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
    "exclusive": [
      {
        "name": "調魂+",
        "desc": "魔法で味方を回復する時、自分のHPを中回復する"
      },
      {
        "name": "動体予測",
        "desc": "先攻での戦闘時、魔法の命中+20"
      },
      {
        "name": "自己修復",
        "desc": "オーバーブレイズ中、自分のフェイズ開始時、自分のHPを大回復する"
      },
      {
        "name": "必殺守備",
        "desc": "必殺の一撃を受けた時、30%で発動。受けるダメージを半減する"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "白兵の間合い",
        "desc": "【歩兵】隣接する敵の移動力-1"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "diego": {
    "personal": {
      "name": "用心棒",
      "desc": "隣接する味方の戦闘時、5%で発動、その味方は追撃されなくなる"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "容赦無し+",
        "desc": "追撃時、命中・必殺+10"
      },
      {
        "name": "牽制",
        "desc": "隣接する敵の回避-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "身躱し",
        "desc": "【歩兵】戦闘時、敵が弓・魔法なら、回避+5"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
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
    "exclusive": [
      {
        "name": "精霊の導き+",
        "desc": "周囲2マスにいる味方に「精霊の声」を付与する"
      },
      {
        "name": "威嚇",
        "desc": "隣接する敵の必殺-5"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [
      {
        "name": "重装移動術",
        "desc": "【重装】移動力+1"
      }
    ],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      }
    ]
  },
  "saran": {
    "personal": {
      "name": "引き留め役",
      "desc": "「引き寄せ」を使用後、補助魔法を使用できる"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "注意喚起+",
        "desc": "隣接する味方の速さ+4"
      },
      {
        "name": "防御陣形",
        "desc": "隣接する味方の防御力+1"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "nadja": {
    "personal": {
      "name": "先手必勝",
      "desc": "先攻での戦闘時、50%で発動、攻撃力+3"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "俺は止まらねぇ+",
        "desc": "「先手必勝」発動後の攻撃時、50%で発動。攻撃力+5"
      },
      {
        "name": "陽動",
        "desc": "隣接する敵の命中-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "窮地の回避",
        "desc": "【歩兵】戦闘時、自分の残りHPが半分以下なら、回避+20"
      },
      {
        "name": "白兵の間合い",
        "desc": "【歩兵】隣接する敵の移動力-1"
      },
      {
        "name": "身躱し",
        "desc": "【歩兵】戦闘時、敵が弓・魔法なら、回避+5"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "io": {
    "personal": {
      "name": "愛馬との連携",
      "desc": "【騎兵】先攻での戦闘時、防御力+3、必避+30"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "攻撃陣形+",
        "desc": "隣接する味方の攻撃力+2"
      },
      {
        "name": "威嚇",
        "desc": "隣接する敵の必殺-5"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [
      {
        "name": "防槍術",
        "desc": "【重装】戦闘時、敵が槍なら、防御力+5"
      },
      {
        "name": "重装移動術",
        "desc": "【重装】移動力+1"
      }
    ],
    "cavalry": [
      {
        "name": "騎乗突撃+",
        "desc": "【騎兵】先攻での戦闘時、命中+10、攻撃力+3"
      },
      {
        "name": "騎兵移動術",
        "desc": "【騎兵】移動時、地形の移動コスト-1（1より小さくならない）"
      },
      {
        "name": "対騎兵戦術",
        "desc": "周囲2マスにいる騎兵の敵の命中・回避-5"
      },
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      },
      {
        "name": "高速飛行術",
        "desc": "【飛行】先攻での戦闘時、攻速+2"
      }
    ]
  },
  "noudine": {
    "personal": {
      "name": "強行突破",
      "desc": "【騎兵】敵のいるマスを通過して移動できる（自分が大型ユニットなら無効）"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "防御陣形",
        "desc": "隣接する味方の防御力+1"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [
      {
        "name": "直前防御",
        "desc": "攻撃された時、25%で発動。防御力+3"
      },
      {
        "name": "重装移動術",
        "desc": "【重装】移動力+1"
      }
    ],
    "cavalry": [
      {
        "name": "疾駆+",
        "desc": "【騎兵】移動時、地形の移動コスト-2（1より小さくならない）"
      },
      {
        "name": "対騎兵戦術",
        "desc": "周囲2マスにいる騎兵の敵の命中・回避-5"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      },
      {
        "name": "高速飛行術",
        "desc": "【飛行】先攻での戦闘時、攻速+2"
      }
    ]
  },
  "benditz": {
    "personal": {
      "name": "車上の戦闘術",
      "desc": "【騎兵】自分が「戦車兵」なら、命中+20"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "戦車乗り+",
        "desc": "自分が「戦車兵」なら、猛撃の回数+2"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": []
  },
  "nathan": {
    "personal": {
      "name": "猪突猛進",
      "desc": "先行での戦闘時、攻速+3 命中+10"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "攻撃陣形",
        "desc": "隣接する味方の攻撃力+1"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [
      {
        "name": "直前防御",
        "desc": "攻撃された時、25%で発動。防御力+3"
      },
      {
        "name": "防槍術",
        "desc": "【重装】戦闘時、敵が槍なら、防御力+5"
      }
    ],
    "cavalry": [
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": []
  },
  "noctura": {
    "personal": {
      "name": "集中",
      "desc": "戦闘後、回避+3（次の自分のフェイズまで）"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "ゾーン+",
        "desc": "「集中」発動時、20%で発動。回避+10（次の自分のフェイズまで）"
      },
      {
        "name": "陽動",
        "desc": "隣接する敵の命中-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "白兵の間合い",
        "desc": "【歩兵】隣接する敵の移動力-1"
      },
      {
        "name": "身躱し",
        "desc": "【歩兵】戦闘時、敵が弓・魔法なら、回避+5"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "pepe": {
    "personal": {
      "name": "狩人の待ち伏せ",
      "desc": "敵フェイズ中の戦闘時、敵がダメージを受けているなら、30%で発動、自分が先攻になる"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "王の威光+",
        "desc": "戦闘時、敵がダメージを受けているなら、攻撃力+4、必殺+10"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
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
    "exclusive": [
      {
        "name": "正義の執行+",
        "desc": "「天秤の天冠」の発動時、攻撃力+7"
      },
      {
        "name": "陽動",
        "desc": "隣接する敵の命中-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": [
      {
        "name": "風読み",
        "desc": "戦闘時、敵が弓なら、回避+10"
      },
      {
        "name": "高速飛行術",
        "desc": "【飛行】先攻での戦闘時、攻速+2"
      }
    ]
  },
  "jester": {
    "personal": {
      "name": "瞬転",
      "desc": "「入れ替え」を使用後、守備+3（次の自分のフェイズまで）"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "瞬刃+",
        "desc": "自分が攻撃を回避した戦闘中、攻撃力+5"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "陣取り",
        "desc": "【歩兵】戦闘時、自分が有利な地形にいるなら、回避+10"
      },
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      },
      {
        "name": "身躱し",
        "desc": "【歩兵】戦闘時、敵が弓・魔法なら、回避+5"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "goliath": {
    "personal": {
      "name": "重量級の戦士",
      "desc": "騎兵、飛行の兵種になれない、体格+5"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "抑えつけ+",
        "desc": "隣接する敵の移動力-5"
      },
      {
        "name": "必殺守備",
        "desc": "必殺の一撃を受けた時、30%で発動。受けるダメージを半減する"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [
      {
        "name": "絶対防御+",
        "desc": "【重装】攻撃された時、20%で発動。防御力+10"
      }
    ],
    "cavalry": [],
    "flying": []
  },
  "luludea": {
    "personal": {
      "name": "はやぶさ",
      "desc": "先攻での戦闘時、攻速+3"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "見切り+",
        "desc": "戦闘時、自分が追撃可能なら、回避+20"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "狙撃回避",
        "desc": "【歩兵】3マス以上離れた敵との戦闘時、回避+10"
      },
      {
        "name": "咄嗟の回避",
        "desc": "【歩兵】攻撃された時、3%で発動。回避+100"
      },
      {
        "name": "白兵の間合い",
        "desc": "【歩兵】隣接する敵の移動力-1"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "daito": {
    "personal": {
      "name": "一発勝負",
      "desc": "戦闘時、自分も敵も追撃できないなら、自分の攻撃力+5"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "全力+",
        "desc": "攻撃時、（力÷2）%で発動。与えるダメージが1.5倍になる"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [
      {
        "name": "ヘビーブレイク+",
        "desc": "【重装】攻撃時、（守備÷2）%で発動。与えるダメージが2倍になる"
      }
    ],
    "cavalry": [],
    "flying": []
  },
  "harvin": {
    "personal": {
      "name": "順応",
      "desc": "戦闘後、命中+2（+30が最大）（マップ終了まで）"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "足止め+",
        "desc": "先攻での戦闘後、敵の速さ-3（1回戦闘すると元に戻る）"
      },
      {
        "name": "陽動",
        "desc": "隣接する敵の命中-3"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "射撃安定",
        "desc": "【歩兵】弓・魔法を装備中、命中+5"
      }
    ],
    "armor": [],
    "cavalry": [
      {
        "name": "騎士の先陣",
        "desc": "【騎兵】先攻での戦闘時、防御力+2"
      },
      {
        "name": "騎士の感覚",
        "desc": "戦闘時、敵が槍なら、回避+10"
      }
    ],
    "flying": []
  },
  "zacone": {
    "personal": {
      "name": "斧包丁",
      "desc": "斧を装備中、命中+10"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "卑劣+",
        "desc": "戦闘時、敵の残りHPが半分以下なら、命中+20、攻撃力+3"
      },
      {
        "name": "威嚇",
        "desc": "隣接する敵の必殺-5"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "白兵の間合い",
        "desc": "【歩兵】隣接する敵の移動力-1"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "marzide": {
    "personal": {
      "name": "暴れ斧",
      "desc": "斧を装備中、力+3"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "恐れ知らず+",
        "desc": "先攻での戦闘時、攻撃力+6、回避-30"
      },
      {
        "name": "威嚇",
        "desc": "隣接する敵の必殺-5"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "白兵の間合い",
        "desc": "【歩兵】隣接する敵の移動力-1"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "centrion": {
    "personal": {
      "name": "鋼玉の守護",
      "desc": "敵のフェイズ中、1度目の戦闘だけ攻撃で受けるダメージを半減する"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "inioni": {
    "personal": {
      "name": "強弓使い",
      "desc": "弓を装備中、力+3"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "攻撃陣形",
        "desc": "隣接する味方の攻撃力+1"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [
      {
        "name": "ぶち抜き+",
        "desc": "弓の戦技での攻撃時、攻撃力+4、必殺+10"
      }
    ],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [
      {
        "name": "射撃安定",
        "desc": "【歩兵】弓・魔法を装備中、命中+5"
      }
    ],
    "armor": [],
    "cavalry": [],
    "flying": []
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
    "exclusive": [],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": []
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
    "exclusive": [],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "tahounia": {
    "personal": {
      "name": "ピュトーンの流儀",
      "desc": "籠手の戦技を使う戦闘時、15%で発動。攻速に関係なく追撃する。"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": []
  },
  "klapka": {
    "personal": {
      "name": "銀の精神",
      "desc": "戦闘後、守備％で発動。守備+1（+10が最大）（マップ終了まで）"
    },
    "bloodSign": null,
    "roots": null,
    "exclusive": [
      {
        "name": "必殺守備",
        "desc": "必殺の一撃を受けた時、30%で発動。受けるダメージを半減する"
      }
    ],
    "sword": [],
    "lance": [],
    "axe": [],
    "brawling": [],
    "bow": [],
    "white_magic": [],
    "dark_magic": [],
    "infantry": [],
    "armor": [],
    "cavalry": [],
    "flying": []
  }
};

// 4. 兵種ランク（Tier）の定義
export const CLASS_TIERS = {
  all: { key: 'all', label: 'すべて', icon: '🌐' },
  beginner: { key: 'beginner', label: '初級職', icon: '🔰' },
  intermediate: { key: 'intermediate', label: '中級職', icon: '⚔️' },
  advanced: { key: 'advanced', label: '上級職', icon: '🛡️' },
  master: { key: 'master', label: '最上級職', icon: '👑' },
  special: { key: 'special', label: '神将職', icon: '✨' }
};


// 5. 公式・実機 兵種リスト（全51兵種）
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


// 6. 全51兵種マスタースキル・兵種スキル詳細辞書（Game8攻略準拠）
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

