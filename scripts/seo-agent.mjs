import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Estilos ANSI para la terminal
const COLORS = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

const PROJECT_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP_DIR = path.join(PROJECT_ROOT, 'src/app');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'src/components');

const report = {
  passed: [],
  failed: [],
  warnings: []
};

/**
 * Escanea recursivamente un directorio buscando archivos con ciertas extensiones.
 */
function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log(`${COLORS.bold}${COLORS.cyan}🚀 Iniciando Auditoría SEO local...${COLORS.reset}\n`);

// 1. Verificar Infraestructura Crítica
const infraFiles = [
  { name: 'sitemap.ts', path: path.join(APP_DIR, 'sitemap.ts') },
  { name: 'robots.ts', path: path.join(APP_DIR, 'robots.ts') }
];

infraFiles.forEach(file => {
  if (fs.existsSync(file.path)) {
    report.passed.push(`Infraestructura: ${file.name} encontrado.`);
  } else {
    report.failed.push(`Infraestructura: ${file.name} NO encontrado.`);
  }
});

// 2. Verificar Metadata en layout.tsx
const layoutPath = path.join(APP_DIR, 'layout.tsx');
if (fs.existsSync(layoutPath)) {
  const content = fs.readFileSync(layoutPath, 'utf-8');
  if (/export\s+const\s+metadata/.test(content)) {
    report.passed.push('Metadatos: Exportación de metadata encontrada en layout.tsx.');
  } else {
    report.failed.push('Metadatos: No se encontró "export const metadata" en layout.tsx.');
  }
} else {
  report.failed.push('Metadatos: src/app/layout.tsx no existe.');
}

// 3. Escaneo de archivos .tsx (Imágenes y Alt tags)
const tsxFiles = [];
walk(APP_DIR, (f) => f.endsWith('.tsx') && tsxFiles.push(f));
walk(COMPONENTS_DIR, (f) => f.endsWith('.tsx') && tsxFiles.push(f));

tsxFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const relativePath = path.relative(PROJECT_ROOT, file);

  // Advertir por uso de <img> nativo
  if (/<img\b[^>]*>/.test(content)) {
    report.warnings.push(`Optimización: Uso de <img> nativo detectado en ${relativePath}. Se recomienda usar <Image /> de next/image.`);
  }

  // Verificar <Image /> sin alt
  // Buscamos componentes <Image que no tengan el atributo alt
  const imageRegex = /<Image\b([^>]*)\/?>/g;
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const props = match[1];
    if (!/alt\s*=\s*/.test(props)) {
      report.failed.push(`Accesibilidad: <Image /> sin atributo "alt" detectado en ${relativePath}.`);
    }
  }
});

// Imprimir Reporte Estructurado
console.log(`${COLORS.bold}--- REPORTE DE AUDITORÍA SEO ---${COLORS.reset}`);

if (report.passed.length > 0) {
  report.passed.forEach(msg => console.log(`${COLORS.green}✅ APROBADO: ${msg}${COLORS.reset}`));
}

if (report.warnings.length > 0) {
  report.warnings.forEach(msg => console.log(`${COLORS.yellow}⚠️ ADVERTENCIA: ${msg}${COLORS.reset}`));
}

if (report.failed.length > 0) {
  report.failed.forEach(msg => console.log(`${COLORS.red}❌ FALLO: ${msg}${COLORS.reset}`));
}

console.log(`\n${COLORS.cyan}Resumen:${COLORS.reset}`);
console.log(`- ${COLORS.green}${report.passed.length} Aprobados${COLORS.reset}`);
console.log(`- ${COLORS.yellow}${report.warnings.length} Advertencias${COLORS.reset}`);
console.log(`- ${COLORS.red}${report.failed.length} Fallos${COLORS.reset}`);

if (report.failed.length > 0) {
  console.log(`\n${COLORS.red}${COLORS.bold}Estado: AUDITORÍA FALLIDA. Por favor, corrige los errores antes de desplegar.${COLORS.reset}`);
  process.exit(1);
} else {
  console.log(`\n${COLORS.green}${COLORS.bold}Estado: PROYECTO LISTO PARA DESPLIEGUE. ¡Buen trabajo!${COLORS.reset}`);
  process.exit(0);
}
