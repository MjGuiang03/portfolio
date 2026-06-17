const fs = require('fs');
const path = require('path');

const directories = [
  './src/components/sections',
  './src/components/layout',
  './src/app'
];

function processFile(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replacements
  let updated = content
    .replace(/bg-black/g, 'bg-background')
    .replace(/text-white\/([0-9]+)/g, 'text-foreground/$1')
    .replace(/text-white/g, 'text-foreground')
    .replace(/bg-white\/\[([0-9.]+)\]/g, 'bg-foreground/[$1]')
    .replace(/bg-white\/([0-9]+)/g, 'bg-foreground/$1')
    .replace(/bg-white/g, 'bg-foreground')
    .replace(/text-black/g, 'text-background')
    .replace(/border-white\/([0-9]+)/g, 'border-foreground/$1')
    .replace(/border-white/g, 'border-foreground')
    .replace(/from-black/g, 'from-background')
    .replace(/from-white/g, 'from-foreground')
    .replace(/to-black/g, 'to-background')
    .replace(/to-white/g, 'to-foreground')
    .replace(/via-white/g, 'via-foreground');

  if (content !== updated) {
    fs.writeFileSync(filePath, updated);
    console.log('Updated:', filePath);
  }
}

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isFile()) {
        processFile(fullPath);
      }
    });
  }
});
