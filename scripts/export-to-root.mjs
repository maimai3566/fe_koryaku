import fs from 'fs';
import path from 'path';

// out/index.html -> ./index.html
if (fs.existsSync('out/index.html')) {
  fs.copyFileSync('out/index.html', 'index.html');
}
if (fs.existsSync('out/404.html')) {
  fs.copyFileSync('out/404.html', '404.html');
}

// out/_next -> ./_next
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync('out/_next')) {
  copyDir('out/_next', '_next');
}

// Jekyll を無効化して _next フォルダを GitHub Pages に正常認識させる
fs.writeFileSync('.nojekyll', '');
console.log('Successfully exported build to root for GitHub Pages!');

