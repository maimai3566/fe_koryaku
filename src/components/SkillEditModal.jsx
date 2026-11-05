import React, { useState, useEffect } from 'react';
import { X, Save, Sparkles, Plus, Trash2 } from 'lucide-react';
import { SKILL_COLUMNS } from '../data/skills';

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
    exclusive: [],
    sword: [],
    lance: [],
    axe: [],
    brawling: [],
    bow: [],
    white_magic: [],
    dark_magic: [],
    infantry: [],
    armor: [],
    cavalry: [],
    flying: []
  });

  useEffect(() => {
    if (char && initialSkillData) {
      setFormData({
        personal: initialSkillData.personal || { name: '', desc: '' },
        bloodSign: initialSkillData.bloodSign || { name: '', desc: '' },
        roots: initialSkillData.roots || { name: '', desc: '' },
        exclusive: initialSkillData.exclusive ? [...initialSkillData.exclusive] : [],
        sword: initialSkillData.sword ? [...initialSkillData.sword] : [],
        lance: initialSkillData.lance ? [...initialSkillData.lance] : [],
        axe: initialSkillData.axe ? [...initialSkillData.axe] : [],
        brawling: initialSkillData.brawling ? [...initialSkillData.brawling] : [],
        bow: initialSkillData.bow ? [...initialSkillData.bow] : [],
        white_magic: initialSkillData.white_magic ? [...initialSkillData.white_magic] : [],
        dark_magic: initialSkillData.dark_magic ? [...initialSkillData.dark_magic] : [],
        infantry: initialSkillData.infantry ? [...initialSkillData.infantry] : [],
        armor: initialSkillData.armor ? [...initialSkillData.armor] : [],
        cavalry: initialSkillData.cavalry ? [...initialSkillData.cavalry] : [],
        flying: initialSkillData.flying ? [...initialSkillData.flying] : []
      });
    }
  }, [char, initialSkillData, isOpen]);

  if (!isOpen || !char) return null;

  // 単一特性（personal, bloodSign, roots）の更新
  const handleTraitChange = (field, subField, val) => {
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...(prev[field] || { name: '', desc: '' }),
        [subField]: val
      }
    }));
  };

  // リスト項目（exclusive, sword, lance...）のスキル追加
  const handleAddSkill = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field] || []), { name: '', desc: '' }]
    }));
  };

  // リスト項目（exclusive, sword, lance...）のスキル更新
  const handleSkillItemChange = (field, index, subField, val) => {
    setFormData((prev) => {
      const list = [...(prev[field] || [])];
      list[index] = {
        ...(list[index] || { name: '', desc: '' }),
        [subField]: val
      };
      return {
        ...prev,
        [field]: list
      };
    });
  };

  // リスト項目の削除
  const handleRemoveSkill = (field, index) => {
    setFormData((prev) => {
      const list = [...(prev[field] || [])];
      list.splice(index, 1);
      return {
        ...prev,
        [field]: list
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(char.id, formData);
    onClose();
  };

  const listColumns = SKILL_COLUMNS.filter((c) => !['personal', 'bloodSign', 'roots'].includes(c.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* モーダルヘッダー */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-850">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
              <span>⚔️ {char.name} のスキル・特性編集</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">個人スキル、血印、ルーツ、キャラ専用、技能スキルの編集・追加</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* フォーム内容 */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* 固有特性 3項目 */}
          <div className="space-y-4 bg-slate-950/40 p-3 sm:p-4 rounded-xl border border-slate-800">
            <div className="font-bold text-slate-300 text-xs uppercase tracking-wider flex items-center gap-2">
              <span>🌟 固有特性（個人・血印・ルーツ）</span>
            </div>

            {/* 個人スキル */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label className="text-xs font-bold text-amber-300">個人スキル</label>
              <input
                type="text"
                value={formData.personal?.name || ''}
                onChange={(e) => handleTraitChange('personal', 'name', e.target.value)}
                placeholder="スキル名"
                className="px-2.5 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-amber-500"
              />
              <input
                type="text"
                value={formData.personal?.desc || ''}
                onChange={(e) => handleTraitChange('personal', 'desc', e.target.value)}
                placeholder="効果説明"
                className="px-2.5 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* 血印 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label className="text-xs font-bold text-rose-300">血印</label>
              <input
                type="text"
                value={formData.bloodSign?.name || ''}
                onChange={(e) => handleTraitChange('bloodSign', 'name', e.target.value)}
                placeholder="血印名（空欄時はなし）"
                className="px-2.5 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-rose-500"
              />
              <input
                type="text"
                value={formData.bloodSign?.desc || ''}
                onChange={(e) => handleTraitChange('bloodSign', 'desc', e.target.value)}
                placeholder="血印効果"
                className="px-2.5 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-rose-500"
              />
            </div>

            {/* ルーツ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
              <label className="text-xs font-bold text-sky-300">ルーツ</label>
              <input
                type="text"
                value={formData.roots?.name || ''}
                onChange={(e) => handleTraitChange('roots', 'name', e.target.value)}
                placeholder="ルーツ名（空欄時はなし）"
                className="px-2.5 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-sky-500"
              />
              <input
                type="text"
                value={formData.roots?.desc || ''}
                onChange={(e) => handleTraitChange('roots', 'desc', e.target.value)}
                placeholder="ルーツ効果"
                className="px-2.5 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          {/* キャラ専用 ＆ 技能別スキル */}
          <div className="space-y-4">
            <div className="font-bold text-slate-300 text-xs uppercase tracking-wider">
              キャラ専用 ＆ 技能習得スキル
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {listColumns.map((col) => {
                const skillsList = formData[col.id] || [];

                return (
                  <div key={col.id} className="p-3 rounded-lg border border-slate-800 bg-slate-950/40 space-y-2">
                    <div className="font-semibold text-slate-200 text-xs flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span>{col.icon}</span>
                        <span>{col.name}</span>
                        <span className="text-[10px] text-slate-500">({skillsList.length}件)</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => handleAddSkill(col.id)}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition"
                      >
                        <Plus className="w-3 h-3" />
                        追加
                      </button>
                    </div>

                    {skillsList.length === 0 ? (
                      <div className="text-[11px] text-slate-600 italic py-1">習得スキルなし</div>
                    ) : (
                      <div className="space-y-1.5">
                        {skillsList.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) => handleSkillItemChange(col.id, idx, 'name', e.target.value)}
                              placeholder="スキル名"
                              className="w-1/3 px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200"
                            />
                            <input
                              type="text"
                              value={item.desc}
                              onChange={(e) => handleSkillItemChange(col.id, idx, 'desc', e.target.value)}
                              placeholder="効果説明"
                              className="flex-1 px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveSkill(col.id, idx)}
                              className="p-1 text-slate-500 hover:text-rose-400 transition"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
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
              <Save className="w-3.5 h-3.5" />
              <span>保存する</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
