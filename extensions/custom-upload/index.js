const path = require('path');
const fs = require('fs');

const mediaPath = '/tmp/media';

// Asegurar que exista la carpeta
if (!fs.existsSync(mediaPath)) {
  fs.mkdirSync(mediaPath, { recursive: true });
}

process.env.MEDIA_PATH = mediaPath;

console.log('✅ MEDIA_PATH redirigido a:', mediaPath);
