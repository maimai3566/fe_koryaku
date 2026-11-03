import './globals.css';

export const metadata = {
  title: 'FE 万紫千紅 - 主人公別 スカウト・加入条件まとめ',
  description: 'カイ / ディートリヒ / セオドラ / レダ の4主人公比較マトリクス',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚔️</text></svg>'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-[#0b0f17] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}

