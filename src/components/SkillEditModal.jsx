import React, { useState, useEffect } from 'react';
import { X, Save, Sparkles, Info } from 'lucide-react';
import { CLASS_LIST, CLASS_SKILLS_DATA } from '../data/skills';

export default function SkillEditModal({
  isOpen,
  onClose,
  char,
  initialSkillData,
  onSave
}) {
  const [formData, setFormData] = useState({
    personal: { name: '', desc: '' },
    bloodSign: { name: '', desc: '' },
    roots: { name: '', desc: '' },
    classes: {}
  });

  useEffect(() => {
    if (char && initialSkillData) {
      setFormData({
        personal: initialSkillData.personal || { name: '', desc: '' },
        bloodSign: initialSkillData.bloodSign || { name: '', desc: '' },
        roots: initialSkillData.roots || { name: '', desc: '' },
        classes: initialSkillData.classes || {}
      });
    } else {
      setFormData({
        personal: { name: '', desc: '' },
        bloodSign: { name: '', desc: '' },
        roots: { name: '', desc: '' },
        classes: {}
      });
    }
  }, [char, initialSkillData, isOpen]);

  if (!isOpen || !char) return null;

  const handleClassSkillChange = (classId, field, val) => {
    setFormData((prev) => ({
      ...prev,
      classes: {
        ...prev.classes,
        [classId]: {
          ...(prev.classes[classId] || { name: '', desc: '' }),
          [field]: val
        }
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(char.id, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* モーダルヘッダー */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-850">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
              <span>⚔️ {char.name} のスキル・特性編集</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">個人スキル、血印、ルーツ、および兵種ごとの習得スキルを設定</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* フォーム本体 */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* 固有特性 3項目 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* 個人スキル */}
            <div className="p-3 rounded-xl border border-amber-500/30 bg-amber-950/20 space-y-2">
              <div className="font-bold text-amber-300 text-xs flex items-center gap-1">
                <span>🌟</span> 個人スキル
              </div>
              <input
                type="text"
                value={formData.personal.name}
                onChange={(e) => setFormData({ ...formData, personal: { ...formData.personal, name: e.target.value } })}
                placeholder="スキル名 (例: 宿命の迅雷)"
                className="w-full px-2.5 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-amber-500"
              />
              <textarea
                value={formData.personal.desc}
                onChange={(e) => setFormData({ ...formData, personal: { ...formData.personal, desc: e.target.value } })}
                placeholder="効果説明"
                rows={2}
                className="w-full px-2.5 py-1 text-xs bg-slate-950 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* 血印 */}
            <div className="p-3 rounded-xl border border-rose-500/30 bg-rose-950/20 space-y-2">
              <div className="font-bold text-rose-300 text-xs flex items-center gap-1">
                <span>🩸</span> 血印
              </div>
              <input
                type="text"
                value={formData.bloodSign.name}
                onChange={(e) => setFormData({ ...formData, bloodSign: { ...formData.bloodSign, name: e.target.value } })}
                placeholder="血印名 (例: 天翔の血印)"
                className="w-full px-2.5 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-rose-500"
              />
              <textarea
                value={formData.bloodSign.desc}
                onChange={(e) => setFormData({ ...formData, bloodSign: { ...formData.bloodSign, desc: e.target.value } })}
                placeholder="効果説明"
                rows={2}
                className="w-full px-2.5 py-1 text-xs bg-slate-950 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-rose-500"
              />
            </div>

            {/* ルーツ */}
            <div className="p-3 rounded-xl border border-sky-500/30 bg-sky-950/20 space-y-2">
              <div className="font-bold text-sky-300 text-xs flex items-center gap-1">
                <span>📜</span> ルーツ
              </div>
              <input
                type="text"
                value={formData.roots.name}
                onChange={(e) => setFormData({ ...formData, roots: { ...formData.roots, name: e.target.value } })}
                placeholder="ルーツ名 (例: 風の放浪者)"
                className="w-full px-2.5 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-sky-500"
              />
              <textarea
                value={formData.roots.desc}
                onChange={(e) => setFormData({ ...formData, roots: { ...formData.roots, desc: e.target.value } })}
                placeholder="効果説明"
                rows={2}
                className="w-full px-2.5 py-1 text-xs bg-slate-950 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          {/* 兵種ごとの習得スキル */}
          <div className="space-y-3">
            <div className="font-bold text-slate-300 text-xs uppercase tracking-wider">
              兵種別の習得スキル
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {CLASS_LIST.map((cls) => {
                const s = formData.classes[cls.id] || { name: '', desc: '' };
                const defaultInfo = CLASS_SKILLS_DATA[cls.id] || {};

                return (
                  <div key={cls.id} className="p-2.5 rounded-lg border border-slate-800 bg-slate-950/50 space-y-1.5">
                    <div className="font-semibold text-slate-300 text-xs flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <span>{cls.icon}</span>
                        <span>{cls.name}</span>
                      </span>
                    </div>

                    {/* 標準スキル情報 */}
                    {defaultInfo.masterSkill && (
                      <div className="text-[10px] text-amber-400/90 bg-amber-950/20 px-1.5 py-0.5 rounded border border-amber-900/40">
                        <span className="font-bold">★マスター: </span>{defaultInfo.masterSkill}
                      </div>
                    )}

                    <input
                      type="text"
                      value={s.name}
                      onChange={(e) => handleClassSkillChange(cls.id, 'name', e.target.value)}
                      placeholder={defaultInfo.masterSkill ? `カスタムスキル名（空欄時はマスター表示）` : "習得スキル名"}
                      className="w-full px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200"
                    />
                    <input
                      type="text"
                      value={s.desc}
                      onChange={(e) => handleClassSkillChange(cls.id, 'desc', e.target.value)}
                      placeholder="効果説明（空欄時は標準効果表示）"
                      className="w-full px-2 py-1 text-[11px] bg-slate-900 border border-slate-800 rounded text-slate-400"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* フッターアクション */}
          <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold bg-slate-850 hover:bg-slate-800 text-slate-300 rounded-lg transition"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white rounded-lg shadow-md transition"
            >
              <Save className="w-3.5 h-3.5" /> 保存する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

