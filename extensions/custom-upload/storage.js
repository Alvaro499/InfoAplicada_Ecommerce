const { Storage } = require('@google-cloud/storage');
const fs = require('fs');
const path = require('path');

// Inicializa el cliente de GCS
const storage = new Storage();
const bucketName = process.env.STORAGE_BUCKET || 'evershop-media';
const bucket = storage.bucket(bucketName);

// 🔧 Asegurar carpeta temporal accesible (solo lectura fuera de /tmp)
const localDir = '/tmp/media';
if (!fs.existsSync(localDir)) {
  fs.mkdirSync(localDir, { recursive: true });
}

// ✅ Subida genérica a GCS (puedes llamarla desde hooks.js)
async function uploadToGCS(localFilePath, destinationPath) {
  try {
    await bucket.upload(localFilePath, {
      destination: destinationPath,
      gzip: true,
      resumable: false,
      metadata: {
        cacheControl: 'public, max-age=31536000',
      },
    });
    console.log(`✅ Archivo subido a ${bucketName}/${destinationPath}`);

    // Elimina archivo local para liberar espacio
    fs.unlinkSync(localFilePath);

    // Devuelve la URL pública
    return `https://storage.googleapis.com/${bucketName}/${destinationPath}`;
  } catch (error) {
    console.error('❌ Error al subir al bucket:', error);
    throw error;
  }
}

// Exporta la función para usarla en hooks.js
module.exports = { uploadToGCS };
