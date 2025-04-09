 // Script to copy markdown files to the public directory
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source and destination directories
const sourceDir = path.join(__dirname, 'src', 'data', 'projects');
const destDir = path.join(__dirname, 'public', 'data', 'projects');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`Created directory: ${destDir}`);
}

// Copy all markdown files
try {
  const files = fs.readdirSync(sourceDir);
  
  files.forEach(file => {
    if (file.endsWith('.md')) {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);
      
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied: ${file}`);
    }
  });
  
  console.log('All markdown files copied successfully!');
} catch (error) {
  console.error('Error copying markdown files:', error);
}
