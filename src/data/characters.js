// ========================================================
// ファイアーエムブレム 万紫千紅 - キャラクターマスターデータ（全63名）
// ========================================================
export const DEFAULT_CHARACTERS = [
  // --- 主人公・救世主 ---
  {
    id: "kai",
    name: "カイ",
    kai: { support: "主人公", fame: "-", cond: "カイ篇主人公（最初から使用可能）", limit: "最初から" },
    dietrich: { support: "-", fame: "-", cond: "第3部（救世編）で合流", limit: "3部" },
    theodora: { support: "-", fame: "-", cond: "第3部（救世編）で合流", limit: "3部" },
    leda: { support: "-", fame: "-", cond: "第3部（救世編）で合流", limit: "3部" }
  },
  {
    id: "dietrich",
    name: "ディートリヒ",
    kai: { support: "-", fame: "-", cond: "第3部（救世編）で合流", limit: "3部" },
    dietrich: { support: "主人公", fame: "-", cond: "ディートリヒ篇主人公（最初から使用可能）", limit: "最初から" },
    theodora: { support: "-", fame: "-", cond: "第3部（救世編）で合流", limit: "3部" },
    leda: { support: "-", fame: "-", cond: "第3部（救世編）で合流", limit: "3部" }
  },
  {
    id: "theodora",
    name: "セオドラ",
    kai: { support: "-", fame: "-", cond: "第3部（救世編）で合流", limit: "3部" },
    dietrich: { support: "-", fame: "-", cond: "第3部（救世編）で合流", limit: "3部" },
    theodora: { support: "主人公", fame: "-", cond: "セオドラ篇主人公（最初から使用可能）", limit: "最初から" },
    leda: { support: "-", fame: "-", cond: "第3部（救世編）で合流", limit: "3部" }
  },
  {
    id: "leda",
    name: "レダ",
    kai: { support: "-", fame: "-", cond: "第3部（救世編）で合流", limit: "3部" },
    dietrich: { support: "-", fame: "-", cond: "第3部（救世編）で合流", limit: "3部" },
    theodora: { support: "-", fame: "-", cond: "第3部（救世編）で合流", limit: "3部" },
    leda: { support: "主人公", fame: "-", cond: "レダ篇主人公（最初から使用可能）", limit: "最初から" }
  },
  {
    id: "savior",
    name: "救世主",
    kai: { support: "救世主", fame: "-", cond: "第3部（救世編）主人公として合流", limit: "3部" },
    dietrich: { support: "救世主", fame: "-", cond: "第3部（救世編）主人公として合流", limit: "3部" },
    theodora: { support: "救世主", fame: "-", cond: "第3部（救世編）主人公として合流", limit: "3部" },
    leda: { support: "救世主", fame: "-", cond: "第3部（救世編）主人公として合流", limit: "3部" }
  },

  // --- 1部〜2部 主要キャラクター ---
  {
    id: "tiara",
    name: "ティアラ",
    kai: { support: "初期", fame: "-", cond: "序幕で自動加入（主人公補佐）", limit: "自動" },
    dietrich: { support: "Lv.2", fame: "Lv.5", cond: "贈り物1回 + 外伝「義勇の灯火」", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.4", cond: "贈り物1回 + 闘技場勝利後会話", limit: "1部12章" },
    leda: { support: "Lv.3", fame: "Lv.6", cond: "酒場興行で好感度獲得 + 交渉", limit: "1部12章" }
  },
  {
    id: "pieter",
    name: "ピーテル",
    kai: { support: "初期", fame: "-", cond: "1部1章で自動加入（義兄弟）", limit: "自動" },
    dietrich: { support: "Lv.2", fame: "Lv.4", cond: "贈り物1回 + 交渉「鉄の弓×3」渡す", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.4", cond: "贈り物1回 + 射撃訓練クリア", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.5", cond: "4章自由行動以降、広場で会話スカウト", limit: "1部12章" }
  },
  {
    id: "guzaran",
    name: "グザラン",
    kai: { support: "Lv.1", fame: "Lv.2", cond: "序盤酒場会話で即スカウト可能", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.4", cond: "腕比べ勝負（撃破）でスカウト", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.5", cond: "贈り物1回 + 討伐クエストクリア", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.4", cond: "闘技場イベント後、会話スカウト", limit: "1部12章" }
  },
  {
    id: "esmeralda",
    name: "エスメラルダ",
    kai: { support: "Lv.2", fame: "Lv.7", cond: "依頼「エスメラルダの頼み」クリア", limit: "1部12章" },
    dietrich: { support: "初期", fame: "-", cond: "ディートリヒ直属騎士（初期加入）", limit: "自動" },
    theodora: { support: "Lv.3", fame: "Lv.8", cond: "防衛戦外伝クリア + 名声条件", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.7", cond: "ブラガンサ同胞団戦クリア後スカウト", limit: "1部12章" }
  },
  {
    id: "fabio",
    name: "ファビオ",
    kai: { support: "Lv.2", fame: "Lv.5", cond: "酒場で傭兵代支払い（2,000G）", limit: "1部12章" },
    dietrich: { support: "初期", fame: "-", cond: "ディートリヒ一家初期メンバー", limit: "自動" },
    theodora: { support: "Lv.2", fame: "Lv.6", cond: "贈り物1回 + 決闘勝利", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.5", cond: "武闘会予選後、スカウト可能", limit: "1部12章" }
  },
  {
    id: "michaela",
    name: "ミカエラ",
    kai: { support: "Lv.2", fame: "Lv.4", cond: "夜の裏路地イベントで会話", limit: "1部12章" },
    dietrich: { support: "初期", fame: "-", cond: "ディートリヒ一家初期メンバー", limit: "自動" },
    theodora: { support: "Lv.2", fame: "Lv.5", cond: "贈り物1回 + 宝箱回収依頼", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.4", cond: "闇市イベントで交渉成立", limit: "1部12章" }
  },
  {
    id: "jasmine",
    name: "ジャスミン",
    kai: { support: "Lv.2", fame: "Lv.6", cond: "「パルマの雨」雇用依頼クリア", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.5", cond: "傭兵代支払い（契約）後加入", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.5", cond: "模擬戦クリア後スカウト", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.5", cond: "酒場での交渉成立後加入", limit: "1部12章" }
  },
  {
    id: "yokai",
    name: "ヨーカイ",
    kai: { support: "Lv.2", fame: "Lv.3", cond: "質問正解「乾酪→満月の夜→芋」", limit: "1部3章〜" },
    dietrich: { support: "初期", fame: "-", cond: "一家の専属神官（初期加入）", limit: "自動" },
    theodora: { support: "Lv.2", fame: "Lv.4", cond: "神殿寄付 + 医薬品調達", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.4", cond: "神殿寄付1回 + スカウト会話", limit: "1部12章" }
  },
  {
    id: "sophia",
    name: "ソフィア",
    kai: { support: "Lv.1", fame: "Lv.2", cond: "神殿救済クエスト後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.3", cond: "巡礼の護衛任務クリア後加入", limit: "1部12章" },
    theodora: { support: "初期", fame: "-", cond: "メガエラ初期回復メンバー", limit: "自動" },
    leda: { support: "Lv.2", fame: "Lv.4", cond: "慈善活動支援後スカウト", limit: "1部12章" }
  },
  {
    id: "lysander",
    name: "ライサンダー",
    kai: { support: "Lv.3", fame: "Lv.7", cond: "騎士団演習クリア + 贈り物", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.6", cond: "模擬戦でライサンダー撃破", limit: "1部12章" },
    theodora: { support: "初期", fame: "-", cond: "メガエラ灯火 騎士団長（初期加入）", limit: "自動" },
    leda: { support: "Lv.3", fame: "Lv.8", cond: "テルス騎士団戦後、説得交渉", limit: "1部12章" }
  },
  {
    id: "bonaparte",
    name: "ボナパルテ",
    kai: { support: "Lv.2", fame: "Lv.6", cond: "重装甲素材「白銀塊×2」納品", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.6", cond: "防衛任務外伝クリア後スカウト", limit: "1部12章" },
    theodora: { support: "初期", fame: "-", cond: "メガエラ重装前衛（初期加入）", limit: "自動" },
    leda: { support: "Lv.3", fame: "Lv.7", cond: "名声Lv7以上で酒場交渉", limit: "1部12章" }
  },
  {
    id: "tobias",
    name: "トビヤス",
    kai: { support: "Lv.2", fame: "Lv.5", cond: "魔法書解読クエストクリア", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.5", cond: "魔導触媒納品 + スカウト", limit: "1部12章" },
    theodora: { support: "初期", fame: "-", cond: "メガエラ専属魔道士（初期加入）", limit: "自動" },
    leda: { support: "Lv.2", fame: "Lv.6", cond: "研究資金援助（1,500G）", limit: "1部12章" }
  },
  {
    id: "lilian",
    name: "リリアン",
    kai: { support: "Lv.2", fame: "Lv.4", cond: "孤児院支援イベントクリア", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.5", cond: "教会への奉納 + スカウト会話", limit: "1部12章" },
    theodora: { support: "初期", fame: "-", cond: "メガエラ初期メンバー", limit: "自動" },
    leda: { support: "Lv.2", fame: "Lv.5", cond: "傷病兵手当てクエスト後スカウト", limit: "1部12章" }
  },
  {
    id: "alexandra",
    name: "アレキサンドラ",
    kai: { support: "Lv.3", fame: "Lv.8", cond: "外伝「孤高の剣姫」クリア", limit: "1部12章" },
    dietrich: { support: "Lv.3", fame: "Lv.8", cond: "決闘イベントでHP半分削る", limit: "1部12章" },
    theodora: { support: "初期", fame: "-", cond: "セオドラ側近（初期加入）", limit: "自動" },
    leda: { support: "Lv.3", fame: "Lv.9", cond: "高難易度サブクエストクリア", limit: "1部12章" }
  },
  {
    id: "loretta",
    name: "ロレッタ",
    kai: { support: "Lv.3", fame: "Lv.7", cond: "飛行演習クリア + 贈り物", limit: "1部12章" },
    dietrich: { support: "Lv.3", fame: "Lv.8", cond: "テルス白銀騎士団関連クエスト後", limit: "1部12章" },
    theodora: { support: "初期", fame: "-", cond: "初期飛行メンバー（初期加入）", limit: "自動" },
    leda: { support: "Lv.2", fame: "Lv.5", cond: "4章武闘会後、馬房にて会話", limit: "1部12章" }
  },
  {
    id: "buccaneer",
    name: "バッカニア",
    kai: { support: "Lv.2", fame: "Lv.5", cond: "港湾の腕相撲勝負で勝利", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.6", cond: "密輸船迎撃クエストクリア", limit: "1部12章" },
    theodora: { support: "Lv.3", fame: "Lv.7", cond: "海賊討伐後、和解交渉", limit: "1部12章" },
    leda: { support: "初期", fame: "-", cond: "レダ直属の副官（初期加入）", limit: "自動" }
  },
  {
    id: "scirocco",
    name: "シロッコ",
    kai: { support: "Lv.3", fame: "Lv.9", cond: "依頼「シロッコの頼み」クリア", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.7", cond: "魔導書寄贈 + スカウト交渉", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.6", cond: "魔道学院の模擬戦クリア", limit: "1部12章" },
    leda: { support: "初期", fame: "-", cond: "薔薇の嵐 参謀（初期加入）", limit: "自動" }
  },
  {
    id: "olympia",
    name: "オリンピア",
    kai: { support: "Lv.2", fame: "Lv.6", cond: "闘技場3連勝後スカウト会話", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.5", cond: "一家との合同演習クリア", limit: "1部12章" },
    theodora: { support: "Lv.3", fame: "Lv.7", cond: "護身術指南クエスト後スカウト", limit: "1部12章" },
    leda: { support: "初期", fame: "-", cond: "レダ軍武闘指南役（初期加入）", limit: "自動" }
  },
  {
    id: "muu",
    name: "ムウ",
    kai: { support: "Lv.3", fame: "Lv.7", cond: "森の迷宮外伝で迷子救出", limit: "1部12章" },
    dietrich: { support: "Lv.3", fame: "Lv.8", cond: "珍しい肉・食料×5をプレゼント", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.7", cond: "自然保護の約束 + スカウト", limit: "1部12章" },
    leda: { support: "初期", fame: "-", cond: "レダと契約した従者（初期加入）", limit: "自動" }
  },
  {
    id: "catania",
    name: "カターニャ",
    kai: { support: "Lv.1", fame: "Lv.3", cond: "序盤の遭遇戦後、広場で会話", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.4", cond: "斥候任務依頼クリア", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.4", cond: "馬具納品 + スカウト交渉", limit: "1部12章" },
    leda: { support: "初期", fame: "-", cond: "薔薇の嵐 斥候（初期加入）", limit: "自動" }
  },
  {
    id: "nuzzo",
    name: "ヌッツォ",
    kai: { support: "Lv.2", fame: "Lv.6", cond: "贈り物1回 + 交渉「鉄の弓×3」", limit: "1部12章" },
    dietrich: { support: "Lv.1", fame: "Lv.3", cond: "ディートリヒ篇 3章クリア後加入", limit: "3章" },
    theodora: { support: "Lv.3", fame: "Lv.6", cond: "狩猟外伝クリア後スカウト", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.6", cond: "酒場での腕比べに勝利", limit: "1部12章" }
  },
  {
    id: "kiroika",
    name: "キロイカ",
    kai: { support: "Lv.2", fame: "Lv.4", cond: "狩場警護クエストクリア", limit: "1部12章" },
    dietrich: { support: "Lv.1", fame: "Lv.2", cond: "名声Lv2以上で酒場即スカウト", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.4", cond: "矢筒・弦の素材調達", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.3", cond: "射的大会で高得点獲得", limit: "1部12章" }
  },
  {
    id: "fiana",
    name: "フィアナ",
    kai: { support: "Lv.2", fame: "Lv.4", cond: "街道の野盗討伐後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.1", fame: "Lv.2", cond: "薬草収集依頼クリア後即加入", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.3", cond: "神殿対話イベントでスカウト", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.4", cond: "寄付金支払い（1,000G）", limit: "1部12章" }
  },
  {
    id: "simon",
    name: "シモン",
    kai: { support: "Lv.2", fame: "Lv.6", cond: "戦術問答（正解3問）で合格", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.5", cond: "戦術書の写本を贈呈", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.5", cond: "陣形演習で勝利", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.5", cond: "大剣闘祭の記録調査を支援", limit: "1部12章" }
  },
  {
    id: "dante",
    name: "ダンテ",
    kai: { support: "Lv.3", fame: "Lv.8", cond: "裏クエスト「影の始末」クリア", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.7", cond: "裏金4,000Gで契約", limit: "1部12章" },
    theodora: { support: "-", fame: "-", cond: "※セオドラ篇では雇用不可（信条対立）", limit: "不可" },
    leda: { support: "Lv.2", fame: "Lv.6", cond: "闇闘技場チャンピオン撃破", limit: "1部12章" }
  },
  {
    id: "gates",
    name: "ゲイツ",
    kai: { support: "-", fame: "-", cond: "※カイ篇では敵対のため加入不可", limit: "不可" },
    dietrich: { support: "Lv.2", fame: "Lv.5", cond: "ディートリヒ篇限定外伝で説得", limit: "1部9章限定" },
    theodora: { support: "-", fame: "-", cond: "※セオドラ篇では加入不可", limit: "不可" },
    leda: { support: "Lv.3", fame: "Lv.8", cond: "賞金首クエストクリアで説得", limit: "1部11章" }
  },
  {
    id: "kilik",
    name: "キリーク",
    kai: { support: "Lv.3", fame: "Lv.9", cond: "1部外伝「亡き妹の装身具」クリア後、2部加入", limit: "1部外伝必須" },
    dietrich: { support: "Lv.3", fame: "Lv.9", cond: "古代遺跡調査クエスト全達成後、2部加入", limit: "1部外伝必須" },
    theodora: { support: "Lv.3", fame: "Lv.9", cond: "神託の儀式完遂後、2部加入", limit: "1部外伝必須" },
    leda: { support: "Lv.3", fame: "Lv.9", cond: "因果律の手記全回収後、2部加入", limit: "1部外伝必須" }
  },

  // --- 第3部（救世編）主要キャラクター ---
  {
    id: "bertrand",
    name: "ベルトラン",
    kai: { support: "-", fame: "-", cond: "第3部（救世編）で加入（外伝：ブリギット王の親善試合）", limit: "3部" },
    dietrich: { support: "-", fame: "-", cond: "第3部（救世編）で加入", limit: "3部" },
    theodora: { support: "-", fame: "-", cond: "第3部（救世編）で加入", limit: "3部" },
    leda: { support: "-", fame: "-", cond: "第3部（救世編）で加入", limit: "3部" }
  },
  {
    id: "tarimoon",
    name: "タリムーン",
    kai: { support: "-", fame: "-", cond: "第3部（救世編）で加入（外伝：消えた馬車の秘密）", limit: "3部" },
    dietrich: { support: "-", fame: "-", cond: "第3部（救世編）で加入", limit: "3部" },
    theodora: { support: "-", fame: "-", cond: "第3部（救世編）で加入", limit: "3部" },
    leda: { support: "-", fame: "-", cond: "第3部（救世編）で加入", limit: "3部" }
  },
  {
    id: "anatolia",
    name: "アナトリア",
    kai: { support: "-", fame: "-", cond: "第3部（救世編）で加入（白鴉の花嫁団）", limit: "3部" },
    dietrich: { support: "-", fame: "-", cond: "第3部（救世編）で加入", limit: "3部" },
    theodora: { support: "-", fame: "-", cond: "第3部（救世編）で加入", limit: "3部" },
    leda: { support: "-", fame: "-", cond: "第3部（救世編）で加入", limit: "3部" }
  },
  {
    id: "kouka",
    name: "コウカ",
    kai: { support: "-", fame: "-", cond: "第3部（救世編）救世主軍初期メンバー", limit: "3部初期" },
    dietrich: { support: "-", fame: "-", cond: "第3部（救世編）救世主軍初期メンバー", limit: "3部初期" },
    theodora: { support: "-", fame: "-", cond: "第3部（救世編）救世主軍初期メンバー", limit: "3部初期" },
    leda: { support: "-", fame: "-", cond: "第3部（救世編）救世主軍初期メンバー", limit: "3部初期" }
  },
  {
    id: "troia",
    name: "トロイア",
    kai: { support: "-", fame: "-", cond: "第3部（救世編）救世主軍初期メンバー", limit: "3部初期" },
    dietrich: { support: "-", fame: "-", cond: "第3部（救世編）救世主軍初期メンバー", limit: "3部初期" },
    theodora: { support: "-", fame: "-", cond: "第3部（救世編）救世主軍初期メンバー", limit: "3部初期" },
    leda: { support: "-", fame: "-", cond: "第3部（救世編）救世主軍初期メンバー", limit: "3部初期" }
  },

  // --- 追加キャラクター26名 ---
  {
    id: "ursula",
    name: "ウーシュラ",
    kai: { support: "Lv.2", fame: "Lv.5", cond: "港湾イベントクリア後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.6", cond: "補給物資調達クエストクリア", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.5", cond: "贈り物1回 + スカウト会話", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.5", cond: "酒場での交渉成立", limit: "1部12章" }
  },
  {
    id: "orhel",
    name: "オルヘル",
    kai: { support: "Lv.2", fame: "Lv.4", cond: "鍛冶素材納品クエスト後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.1", fame: "Lv.3", cond: "武器庫防衛任務クリア後即加入", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.5", cond: "武具寄託 + スカウト会話", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.4", cond: "腕比べクリア後スカウト", limit: "1部12章" }
  },
  {
    id: "diego",
    name: "ディエゴ",
    kai: { support: "Lv.2", fame: "Lv.6", cond: "街道警護依頼達成後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.5", cond: "一家との契約金支払い", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.6", cond: "模擬戦勝利後スカウト", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.5", cond: "大剣闘祭の予選後に会話", limit: "1部12章" }
  },
  {
    id: "nine",
    name: "ニネ",
    kai: { support: "Lv.2", fame: "Lv.4", cond: "薬草調合クエストクリア後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.4", cond: "傷病兵救護任務クリア後加入", limit: "1部12章" },
    theodora: { support: "Lv.1", fame: "Lv.3", cond: "神殿巡礼イベントで会話", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.4", cond: "治療薬納品 + スカウト", limit: "1部12章" }
  },
  {
    id: "saran",
    name: "サラン",
    kai: { support: "Lv.2", fame: "Lv.5", cond: "砂漠の交易路奪還クエストクリア", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.6", cond: "物資輸送護衛後スカウト", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.5", cond: "贈り物1回 + 異文化交流イベント", limit: "1部12章" },
    leda: { support: "Lv.1", fame: "Lv.3", cond: "隊商支援イベントクリア後即加入", limit: "1部12章" }
  },
  {
    id: "nadja",
    name: "ナジャ",
    kai: { support: "Lv.2", fame: "Lv.5", cond: "夜間の踊り子イベント後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.6", cond: "酒場興行の支援金支払い", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.4", cond: "宮廷舞踊の依頼クリア後スカウト", limit: "1部12章" },
    leda: { support: "Lv.1", fame: "Lv.3", cond: "劇団救出外伝クリア後加入", limit: "1部12章" }
  },
  {
    id: "io",
    name: "イオ",
    kai: { support: "Lv.3", fame: "Lv.7", cond: "星見の塔外伝クリア後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.7", cond: "天球儀の欠片納品後加入", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.5", cond: "天文観測の護衛依頼クリア", limit: "1部12章" },
    leda: { support: "Lv.3", fame: "Lv.7", cond: "予言の解読イベントクリア", limit: "1部12章" }
  },
  {
    id: "noudine",
    name: "ヌディーヌ",
    kai: { support: "Lv.2", fame: "Lv.6", cond: "湖畔の水質調査クエストクリア", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.6", cond: "水上輸送路確保後スカウト", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.4", cond: "聖泉の守護任務クリア後加入", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.5", cond: "魚介素材納品 + スカウト", limit: "1部12章" }
  },
  {
    id: "benditz",
    name: "ベンディッツ",
    kai: { support: "Lv.3", fame: "Lv.8", cond: "老将の指南（模擬戦）勝利後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.6", cond: "雷雲騎士団残党クエストクリア", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.7", cond: "古参兵の説得イベントクリア", limit: "1部12章" },
    leda: { support: "Lv.3", fame: "Lv.8", cond: "闘技場特別試合で勝利", limit: "1部12章" }
  },
  {
    id: "nathan",
    name: "ネイサン",
    kai: { support: "Lv.2", fame: "Lv.4", cond: "村の防衛戦クリア後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.1", fame: "Lv.3", cond: "義勇兵の招集に応じ即加入", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.5", cond: "民兵訓練クリア後スカウト", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.4", cond: "食料配給支援後スカウト", limit: "1部12章" }
  },
  {
    id: "noctura",
    name: "ノクチュラ",
    kai: { support: "Lv.3", fame: "Lv.8", cond: "月夜の暗殺者外伝クリア後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.7", cond: "裏稼業の依頼達成後加入", limit: "1部12章" },
    theodora: { support: "-", fame: "-", cond: "※セオドラ篇では加入不可（敵対）", limit: "不可" },
    leda: { support: "Lv.2", fame: "Lv.6", cond: "闇夜の潜入任務クリア後スカウト", limit: "1部12章" }
  },
  {
    id: "pepe",
    name: "ペペ",
    kai: { support: "Lv.1", fame: "Lv.2", cond: "迷子救出クエストクリア後加入", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.4", cond: "珍しい木の実×3をプレゼント", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.4", cond: "動物のお世話イベント後スカウト", limit: "1部12章" },
    leda: { support: "Lv.1", fame: "Lv.3", cond: "街頭の芸当鑑賞後に会話", limit: "1部12章" }
  },
  {
    id: "seteth",
    name: "セテス",
    kai: { support: "Lv.3", fame: "Lv.8", cond: "聖遺物調査外伝クリア後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.3", fame: "Lv.8", cond: "教団の古文書回収後加入", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.6", cond: "神託演説後、教会にて会話スカウト", limit: "1部12章" },
    leda: { support: "Lv.3", fame: "Lv.9", cond: "歴史の真実クエストクリア", limit: "1部12章" }
  },
  {
    id: "jester",
    name: "ジェスター",
    kai: { support: "Lv.2", fame: "Lv.5", cond: "道化師の奇術ショークリア後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.6", cond: "潜入陽動作戦で共闘後加入", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.5", cond: "慰問公演の手伝い後スカウト", limit: "1部12章" },
    leda: { support: "Lv.1", fame: "Lv.3", cond: "酒場での宴会イベント後即加入", limit: "1部12章" }
  },
  {
    id: "goliath",
    name: "ゴライアス",
    kai: { support: "Lv.3", fame: "Lv.8", cond: "巨岩撤去外伝クリア後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.7", cond: "剛力勝負で勝利後加入", limit: "1部12章" },
    theodora: { support: "Lv.3", fame: "Lv.8", cond: "城門防衛戦クリア後スカウト", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.6", cond: "鉱山警備任務クリア後スカウト", limit: "1部12章" }
  },
  {
    id: "luludea",
    name: "ルルディアー",
    kai: { support: "Lv.2", fame: "Lv.5", cond: "精霊の森の護衛任務クリア", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.6", cond: "希少な花水納品後スカウト", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.4", cond: "神聖樹の祈祷イベント後加入", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.5", cond: "自然調和の誓約 + スカウト", limit: "1部12章" }
  },
  {
    id: "daito",
    name: "ダイトウ",
    kai: { support: "Lv.2", fame: "Lv.6", cond: "東方交易路の野盗討伐後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.6", cond: "名刀研磨素材「玉鋼」納品", limit: "1部12章" },
    theodora: { support: "Lv.3", fame: "Lv.7", cond: "武士道問答クリア後スカウト", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.5", cond: "東方剣術の指南後即加入", limit: "1部12章" }
  },
  {
    id: "harvin",
    name: "ハルヴィン",
    kai: { support: "Lv.2", fame: "Lv.5", cond: "収穫祭の警備クエストクリア", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.4", cond: "農具補修依頼クリア後加入", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.5", cond: "穀物輸送護衛後スカウト", limit: "1部12章" },
    leda: { support: "Lv.1", fame: "Lv.3", cond: "村の復興支援後即スカウト", limit: "1部12章" }
  },
  {
    id: "zacone",
    name: "ザーコネ",
    kai: { support: "Lv.2", fame: "Lv.6", cond: "賞金稼ぎ競い合いで勝利", limit: "1部12章" },
    dietrich: { support: "Lv.1", fame: "Lv.3", cond: "ディートリヒの旧知・酒場会話で加入", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.6", cond: "指名手配犯捕縛後スカウト", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.5", cond: "用心棒雇用金支払い", limit: "1部12章" }
  },
  {
    id: "marzide",
    name: "マージデ",
    kai: { support: "Lv.2", fame: "Lv.5", cond: "隊商警護の依頼クリア後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.5", cond: "香辛料密輸阻止後加入", limit: "1部12章" },
    theodora: { support: "Lv.2", fame: "Lv.4", cond: "異国交易許可後スカウト", limit: "1部12章" },
    leda: { support: "Lv.1", fame: "Lv.3", cond: "市場のトラブル仲裁後即加入", limit: "1部12章" }
  },
  {
    id: "centrion",
    name: "セントリオン",
    kai: { support: "Lv.3", fame: "Lv.8", cond: "古代ゴーレム迎撃外伝クリア", limit: "1部12章" },
    dietrich: { support: "Lv.3", fame: "Lv.8", cond: "遺跡心核納品後起動・加入", limit: "1部12章" },
    theodora: { support: "Lv.3", fame: "Lv.8", cond: "古代文明防衛機構の制圧", limit: "1部12章" },
    leda: { support: "Lv.3", fame: "Lv.8", cond: "機械人形の修復クエスト後加入", limit: "1部12章" }
  },
  {
    id: "inioni",
    name: "イニオニ",
    kai: { support: "Lv.2", fame: "Lv.4", cond: "詩集回収クエストクリア後スカウト", limit: "1部12章" },
    dietrich: { support: "Lv.2", fame: "Lv.5", cond: "酒場での詩歌披露後会話", limit: "1部12章" },
    theodora: { support: "Lv.1", fame: "Lv.3", cond: "宮廷詩人登用イベントで加入", limit: "1部12章" },
    leda: { support: "Lv.2", fame: "Lv.4", cond: "航海歌の伝承後スカウト", limit: "1部12章" }
  },
  {
    id: "anna",
    name: "アンナ",
    kai: { support: "Lv.3", fame: "Lv.7", cond: "外伝「秘密の商人アンナ」クリア", limit: "1部12章" },
    dietrich: { support: "Lv.3", fame: "Lv.7", cond: "大口購入（5,000G利用）後スカウト", limit: "1部12章" },
    theodora: { support: "Lv.3", fame: "Lv.7", cond: "商談会警護外伝クリア後加入", limit: "1部12章" },
    leda: { support: "Lv.3", fame: "Lv.7", cond: "闇市特売イベント後スカウト", limit: "1部12章" }
  },
  {
    id: "aswan",
    name: "アスワン",
    kai: { support: "-", fame: "-", cond: "第3部（救世編）アラゴ王国軍として合流", limit: "3部" },
    dietrich: { support: "-", fame: "-", cond: "第3部（救世編）アラゴ王国軍として合流", limit: "3部" },
    theodora: { support: "-", fame: "-", cond: "第3部（救世編）アラゴ王国軍として合流", limit: "3部" },
    leda: { support: "-", fame: "-", cond: "第3部（救世編）アラゴ王国軍として合流", limit: "3部" }
  },
  {
    id: "tahounia",
    name: "タホウニア",
    kai: { support: "-", fame: "-", cond: "第3部（救世編）アスワンの警護として加入", limit: "3部" },
    dietrich: { support: "-", fame: "-", cond: "第3部（救世編）アスワンの警護として加入", limit: "3部" },
    theodora: { support: "-", fame: "-", cond: "第3部（救世編）アスワンの警護として加入", limit: "3部" },
    leda: { support: "-", fame: "-", cond: "第3部（救世編）アスワンの警護として加入", limit: "3部" }
  },
  {
    id: "klapka",
    name: "クラブカ",
    kai: { support: "-", fame: "-", cond: "第3部（救世編）守護者（ガーディアン）として加入", limit: "3部" },
    dietrich: { support: "-", fame: "-", cond: "第3部（救世編）守護者として加入", limit: "3部" },
    theodora: { support: "-", fame: "-", cond: "第3部（救世編）守護者として加入", limit: "3部" },
    leda: { support: "-", fame: "-", cond: "第3部（救世編）守護者として加入", limit: "3部" }
  }
];

export const HERO_CONFIGS = {
  kai: {
    key: "kai",
    name: "カイ",
    title: "カイ篇",
    color: "#38bdf8", // Sky blue
    badgeBg: "bg-sky-500/15",
    badgeBorder: "border-sky-500/30",
    badgeText: "text-sky-400",
    headerBg: "bg-sky-950/40",
    headerBorder: "border-sky-500",
    tintBg: "bg-sky-950/20",
    gradient: "from-sky-950/40 to-transparent",
    icon: "⚔️"
  },
  dietrich: {
    key: "dietrich",
    name: "ディートリヒ",
    title: "ディートリヒ篇",
    color: "#f97316", // Amber/Orange
    badgeBg: "bg-orange-500/15",
    badgeBorder: "border-orange-500/30",
    badgeText: "text-orange-400",
    headerBg: "bg-orange-950/40",
    headerBorder: "border-orange-500",
    tintBg: "bg-orange-950/20",
    gradient: "from-orange-950/40 to-transparent",
    icon: "🛡️"
  },
  theodora: {
    key: "theodora",
    name: "セオドラ",
    title: "セオドラ篇",
    color: "#c084fc", // Purple/Violet
    badgeBg: "bg-purple-500/15",
    badgeBorder: "border-purple-500/30",
    badgeText: "text-purple-400",
    headerBg: "bg-purple-950/40",
    headerBorder: "border-purple-500",
    tintBg: "bg-purple-950/20",
    gradient: "from-purple-950/40 to-transparent",
    icon: "👑"
  },
  leda: {
    key: "leda",
    name: "レダ",
    title: "レダ篇",
    color: "#f43f5e", // Rose/Pink
    badgeBg: "bg-rose-500/15",
    badgeBorder: "border-rose-500/30",
    badgeText: "text-rose-400",
    headerBg: "bg-rose-950/40",
    headerBorder: "border-rose-500",
    tintBg: "bg-rose-950/20",
    gradient: "from-rose-950/40 to-transparent",
    icon: "🌸"
  }
};

