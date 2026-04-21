import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * Image Optimizer Script
 * Targets images > 500KB in public/ and public/images/
 * Converts them to WebP and saves to public/images/optimized/
 */

const CONFIG = {
  sourceDirs: ['public', 'public/images'],
  outputDir: 'public/images/optimized',
  sizeThreshold: 500 * 1024, // 500KB
  extensions: ['.jpg', '.jpeg', '.png'],
  quality: 80,
};

async function optimizeImages() {
  console.log('🚀 Iniciando optimización de imágenes...');
  
  // Asegurar que el directorio de salida existe
  try {
    await fs.mkdir(CONFIG.outputDir, { recursive: true });
  } catch (err) {
    console.error(`❌ Error al crear el directorio de salida: ${err.message}`);
    process.exit(1);
  }

  const filesToProcess = [];

  for (const dir of CONFIG.sourceDirs) {
    try {
      const files = await fs.readdir(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);

        if (stats.isFile() && 
            CONFIG.extensions.includes(path.extname(file).toLowerCase()) &&
            stats.size > CONFIG.sizeThreshold) {
          filesToProcess.push({ 
            path: filePath, 
            name: file, 
            size: stats.size,
            relativeDir: dir
          });
        }
      }
    } catch (e) {
      // Ignorar si el directorio no existe (ej. public/ si ya estamos en public/images)
      if (e.code !== 'ENOENT') {
        console.warn(`⚠️ Advertencia al leer ${dir}: ${e.message}`);
      }
    }
  }

  if (filesToProcess.length === 0) {
    console.log('✅ No se encontraron imágenes que superen los 500KB.');
    return;
  }

  console.log(`📦 Encontradas ${filesToProcess.length} imágenes para optimizar.\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of filesToProcess) {
    const fileNameWithoutExt = path.parse(file.name).name;
    const outputFileName = `${fileNameWithoutExt}.webp`;
    const outputPath = path.join(CONFIG.outputDir, outputFileName);

    try {
      await sharp(file.path)
        .webp({ quality: CONFIG.quality })
        .toFile(outputPath);

      const newStats = await fs.stat(outputPath);
      const saved = file.size - newStats.size;
      const percentSaved = ((saved / file.size) * 100).toFixed(1);

      totalOriginalSize += file.size;
      totalOptimizedSize += newStats.size;

      console.log(`🔹 ${file.name}:`);
      console.log(`   - Original: ${(file.size / 1024).toFixed(2)} KB`);
      console.log(`   - Optimizado: ${(newStats.size / 1024).toFixed(2)} KB`);
      console.log(`   - Ahorro: ${(saved / 1024).toFixed(2)} KB (${percentSaved}%)`);
      console.log(`   - Ubicación: ${outputPath}\n`);
    } catch (err) {
      console.error(`❌ Error procesando ${file.name}: ${err.message}`);
    }
  }

  const totalSaved = totalOriginalSize - totalOptimizedSize;
  const totalPercentSaved = ((totalSaved / totalOriginalSize) * 100).toFixed(1);

  console.log('-------------------------------------------');
  console.log(`📊 REPORTE FINAL:`);
  console.log(`   - Total procesado: ${filesToProcess.length} imágenes`);
  console.log(`   - Peso original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   - Peso optimizado total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   - Ahorro total: ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${totalPercentSaved}%)`);
  console.log('-------------------------------------------');
  console.log('✅ Optimización completada con éxito.');
}

optimizeImages().catch(err => {
  console.error('💥 Error fatal en el script de optimización:', err);
  process.exit(1);
});
