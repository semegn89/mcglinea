// Script to generate and save product catalog JSON
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { generateProductCatalog } from '../lib/generate-products';

const products = generateProductCatalog(5000);

// Save to public/data directory
const outputPath = join(process.cwd(), 'public', 'data', 'products.json');
const outputDir = join(process.cwd(), 'public', 'data');

// Create directory if it doesn't exist
try {
  mkdirSync(outputDir, { recursive: true });
} catch (error) {
  // Directory might already exist
}

writeFileSync(outputPath, JSON.stringify(products, null, 2), 'utf-8');

console.log(`✅ Generated ${products.length} products`);
console.log(`✅ Saved to ${outputPath}`);
console.log(`\n📊 Statistics:`);
console.log(`   - Brands: ${new Set(products.map(p => p.brand)).size}`);
console.log(`   - Categories: ${new Set(products.map(p => p.category)).size}`);
console.log(`   - In Stock: ${products.filter(p => p.inStock).length}`);
console.log(`   - Original Parts: ${products.filter(p => p.isOriginal).length}`);

