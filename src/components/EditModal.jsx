import React, { useState, useEffect } from 'react';
import { X, Save, Trash2 } from 'lucide-react';
import { HERO_CONFIGS } from '../data/characters';

export default function EditModal({
  isOpen,
  onClose,
  charData,
  onSave,
  onDelete
}) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    kai: { support: '-', fame: '-', cond: '-', limit: '-' },
    dietrich: { support: '-', fame: '-', cond: '-', limit: '-' },
    theodora: { support: '-', fame: '-', cond: '-', limit: '-' },
    leda: { support: '-', fame: '-', cond: '-', limit: '-' }
  });

  useEffect(() => {
    if (charData) {
      setFormData(JSON.parse(JSON.stringify(charData)));
    } else {
      setFormData({
        id: `char_${Date.now()}`,
        name: '',
        kai: { support: '-', fame: '-', cond: '-', limit: '-' },
        dietrich: { support: '-', fame: '-', cond: '-', limit: '-' },
        theodora: { support: '-', fame: '-', cond: '-', limit: '-' },
        leda: { support: '-', fame: '-', cond: '-', limit: '-' }
      });
    }
  }, [charData, isOpen]);

  if (!isOpen) return null;

  const isEditing = !!charData;

  const handleHeroChange = (heroKey, field, val) => {
    setFormData((prev) => ({
      ...prev,
      [heroKey]: {
        ...prev[heroKey],
        [field]: val
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('キャラクター名を入力してください');
      return;
    }
    onSave(formData);
    onClose();
  };

  const heroes = [HERO_CONFIGS.kai, HERO_CONFIGS.dietrich, HERO_CONFIGS.theodora, HERO_CONFIGS.leda];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* モーダルヘッダー */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-850">
          <h2 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
            <span>{isEditing ? '✏️ キャラクター情報の編集' : '＋ 新規キャラクター追加'}</span>
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* フォーム本体 */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 text-xs sm:text-sm">
          {/* 名前 */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              キャラクター名 <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="例: ティアラ"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-amber-500 transition"
              required
            />
          </div>

          {/* 各主人公の条件入力 */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">主人公別の加入条件</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {heroes.map((h) => (
                <div
                  key={h.key}
                  className={`p-3 rounded-xl border border-slate-800 ${h.tintBg} space-y-2`}
                >
                  <div className="flex items-center gap-1.5 font-bold text-xs" style={{ color: h.color }}>
                    <span>{h.icon}</span>
                    <span>{h.title}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="block text-[10px] text-slate-400 mb-0.5">支援Lv</span>
                      <input
                        type="text"
                        value={formData[h.key]?.support || ''}
                        onChange={(e) => handleHeroChange(h.key, 'support', e.target.value)}
                        placeholder="初期 / Lv.2 / -"
                        className="w-full px-2 py-1 text-xs bg-slate-950 border border-slate-700 rounded text-slate-200"
                      />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 mb-0.5">名声Lv</span>
                      <input
                        type="text"
                        value={formData[h.key]?.fame || ''}
                        onChange={(e) => handleHeroChange(h.key, 'fame', e.target.value)}
                        placeholder="Lv.4 / -"
                        className="w-full px-2 py-1 text-xs bg-slate-950 border border-slate-700 rounded text-slate-200"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="block text-[10px] text-slate-400 mb-0.5">加入条件</span>
                    <input
                      type="text"
                      value={formData[h.key]?.cond || ''}
                      onChange={(e) => handleHeroChange(h.key, 'cond', e.target.value)}
                      placeholder="例: 贈り物1回 + 外伝クリア"
                      className="w-full px-2 py-1 text-xs bg-slate-950 border border-slate-700 rounded text-slate-200"
                    />
                  </div>

                  <div>
                    <span className="block text-[10px] text-slate-400 mb-0.5">期限</span>
                    <input
                      type="text"
                      value={formData[h.key]?.limit || ''}
                      onChange={(e) => handleHeroChange(h.key, 'limit', e.target.value)}
                      placeholder="例: 1部12章 / 自動"
                      className="w-full px-2 py-1 text-xs bg-slate-950 border border-slate-700 rounded text-slate-200"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* フッターアクション */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            {isEditing ? (
              <button
                type="button"
                onClick={() => {
                  if (confirm(`「${formData.name}」を削除しますか？`)) {
                    onDelete(formData.id);
                    onClose();
                  }
                }}
                className="flex items-center gap-1 px-3 py-1.5 text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-950/30 rounded-lg transition"
              >
                <Trash2 className="w-3.5 h-3.5" /> 削除
              </button>
            ) : <div />}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition"
              >
                キャンセル
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white rounded-lg shadow-md transition"
              >
                <Save className="w-3.5 h-3.5" /> 保存する
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

