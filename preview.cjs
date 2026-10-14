// 로컬 미리보기: node preview.cjs
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.jpg': 'image/jpeg', '.png': 'image/png' };
http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  const relative = path.relative(root, file);
  const allowed = ['index.html', 'site.css', 'app.js', 'project-data.js'].includes(relative) || (relative.startsWith('assets' + path.sep) && ['.png', '.jpg', '.webp'].includes(path.extname(file)));
  if (!file.startsWith(root + path.sep) || !allowed) { res.writeHead(404); return res.end('Not found'); }
  fs.readFile(file, (error, data) => {
    if (error) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] }); res.end(data);
  });
}).listen(8123, '127.0.0.1', () => console.log('http://127.0.0.1:8123'));
