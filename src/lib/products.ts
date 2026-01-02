// Product data loader and utilities
import type { Product } from '@/types';
import type { ProductData } from './generate-products';

// In production, this would load from API or database
// For now, we'll load from the generated JSON file

let cachedProducts: Product[] | null = null;

// Load products from JSON file
export async function getProducts(): Promise<Product[]> {
  if (cachedProducts) {
    return cachedProducts;
  }

  try {
    let data: ProductData[] = [];
    
    if (typeof window === 'undefined') {
      // Server-side: use fs
      const fs = await import('fs');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      data = JSON.parse(fileContents);
    } else {
      // Client-side: use fetch
      const response = await fetch('/data/products.json');
      if (response.ok) {
        data = await response.json();
      }
    }

    if (data.length > 0) {
      cachedProducts = data.map((p): Product => ({
        id: p.id,
        sku: p.sku,
        name: p.name,
        description: p.description,
        slug: p.slug,
        categoryId: p.category.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        category: {
          id: p.category.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          name: p.category,
          slug: p.category.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          order: 0,
        },
        brandId: p.brand.toLowerCase().replace(/\s+/g, '-'),
        brand: {
          id: p.brand.toLowerCase().replace(/\s+/g, '-'),
          name: p.brand,
          slug: p.brand.toLowerCase().replace(/\s+/g, '-'),
        },
        price: p.price,
        oemNumbers: p.oemNumbers || [p.oemNumber],
        images: p.images,
        specifications: {},
        inStock: p.inStock,
        stockQuantity: p.stockQuantity,
        deliveryDays: p.deliveryDays,
        isOriginal: p.isOriginal,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
      return cachedProducts;
    }
  } catch (error) {
    console.error('Failed to load products:', error);
  }

  // Return empty array if loading fails
  return [];
}

// Clear cache (useful for development)
export function clearProductCache() {
  cachedProducts = null;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find(p => p.slug === slug) || null;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const products = await getProducts();
  return products.filter(p => p.category?.slug === category || p.categoryId === category);
}

export async function getProductsByBrand(brand: string): Promise<Product[]> {
  const products = await getProducts();
  return products.filter(p => p.brand?.slug === brand || p.brandId === brand);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const products = await getProducts();
  const lowerQuery = query.toLowerCase();
  
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.sku.toLowerCase().includes(lowerQuery) ||
    p.oemNumbers?.some(oem => oem.toLowerCase().includes(lowerQuery)) ||
    false
  );
}

export async function getCategories() {
  const products = await getProducts();
  const categoryMap = new Map<string, { name: string; count: number }>();
  
  products.forEach(p => {
    if (p.category) {
      const category = typeof p.category === 'string' ? p.category : p.category.name;
      const current = categoryMap.get(category) || { name: category, count: 0 };
      current.count++;
      categoryMap.set(category, current);
    }
  });
  
  return Array.from(categoryMap.values()).map(({ name, count }) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    count,
  }));
}

export async function getBrands() {
  const products = await getProducts();
  const brandMap = new Map<string, { name: string; count: number }>();
  
  products.forEach(p => {
    if (p.brand) {
      const brand = typeof p.brand === 'string' ? p.brand : p.brand.name;
      const current = brandMap.get(brand) || { name: brand, count: 0 };
      current.count++;
      brandMap.set(brand, current);
    }
  });
  
  return Array.from(brandMap.values()).map(({ name, count }) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    count,
  }));
}

