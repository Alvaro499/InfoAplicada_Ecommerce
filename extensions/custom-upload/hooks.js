const { uploadToBucket } = require('./storage');

module.exports = {
  async afterSaveMedia({ mediaFilePath, mediaFileName }) {
    try {
      const destination = `uploads/${mediaFileName}`;
      const publicUrl = await uploadToBucket(mediaFilePath, destination);
      console.log(`📦 Archivo accesible en: ${publicUrl}`);
    } catch (error) {
      console.error('❌ Error al subir al bucket:', error);
    }
  }
};
