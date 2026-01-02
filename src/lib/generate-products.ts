// Generator for product catalog with realistic OEM numbers

const brands = ['Mercedes-Benz', 'BMW', 'Audi'] as const;
type Brand = typeof brands[number];

const categories = [
  'Engine Parts',
  'Brake System',
  'Suspension & Steering',
  'Transmission',
  'Electrical & Lighting',
  'Body Parts',
  'Interior Parts',
  'Filters',
  'Cooling System',
  'Exhaust System',
  'Turbo & Charging',
  'Fuel System',
  'Air Conditioning',
] as const;

export interface ProductData {
  id: string;
  sku: string;
  name: string;
  brand: Brand;
  category: string;
  oemNumber: string;
  price: number;
  inStock: boolean;
  stockQuantity?: number;
  deliveryDays: number;
  isOriginal: boolean;
  slug: string;
  description?: string;
  images: string[];
  oemNumbers?: string[];
}

// OEM number patterns for different brands
const oemPatterns = {
  'Mercedes-Benz': {
    prefixes: ['A', 'B', 'C', 'W', 'M', 'H', 'S'],
    format: (prefix: string) => {
      const num = Math.floor(Math.random() * 999999999).toString().padStart(9, '0');
      return `${prefix}${num}`;
    }
  },
  'BMW': {
    prefixes: ['11', '12', '13', '31', '51', '61', '71'],
    format: (prefix: string) => {
      const num = Math.floor(Math.random() * 999999999).toString().padStart(7, '0');
      return `${prefix}${num}`;
    }
  },
  'Audi': {
    prefixes: ['4F0', '4H0', '8K0', '8V0', '8W0', '4G0'],
    format: (prefix: string) => {
      const num = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
      return `${prefix}${num}`;
    }
  }
};

// Product name templates by category
const productTemplates: Record<string, string[]> = {
  'Engine Parts': [
    'Engine Oil Filter',
    'Air Filter',
    'Fuel Filter',
    'Oil Pan Gasket',
    'Valve Cover Gasket',
    'Timing Chain Tensioner',
    'Camshaft Position Sensor',
    'Crankshaft Position Sensor',
    'Ignition Coil',
    'Spark Plug',
    'Mass Air Flow Sensor',
    'Throttle Body',
    'Intake Manifold',
    'Exhaust Manifold',
    'Turbocharger',
  ],
  'Brake System': [
    'Brake Pad Set Front',
    'Brake Pad Set Rear',
    'Brake Disc Front',
    'Brake Disc Rear',
    'Brake Caliper',
    'Brake Master Cylinder',
    'Brake Booster',
    'Brake Hose',
    'Brake Fluid',
    'ABS Sensor',
  ],
  'Suspension & Steering': [
    'Shock Absorber Front',
    'Shock Absorber Rear',
    'Strut Mount',
    'Control Arm',
    'Tie Rod End',
    'Ball Joint',
    'Stabilizer Link',
    'Wheel Bearing',
    'Power Steering Pump',
    'Steering Rack',
  ],
  'Transmission': [
    'Transmission Filter',
    'Transmission Oil Pan Gasket',
    'Transmission Mount',
    'Clutch Kit',
    'Flywheel',
    'CV Joint',
    'Transmission Oil',
  ],
  'Electrical & Lighting': [
    'Headlight Assembly',
    'Taillight Assembly',
    'Fog Light',
    'LED Bulb',
    'Battery',
    'Alternator',
    'Starter Motor',
    'Window Regulator',
    'Power Window Motor',
  ],
  'Body Parts': [
    'Front Bumper',
    'Rear Bumper',
    'Front Fender',
    'Rear Fender',
    'Hood',
    'Trunk Lid',
    'Door Handle',
    'Side Mirror',
    'Windshield',
  ],
  'Interior Parts': [
    'Seat Cover',
    'Dashboard',
    'Center Console',
    'Door Panel',
    'Steering Wheel',
    'Gear Shift Knob',
    'Sun Visor',
  ],
  'Filters': [
    'Cabin Air Filter',
    'Oil Filter',
    'Fuel Filter',
    'Air Filter',
  ],
  'Cooling System': [
    'Radiator',
    'Water Pump',
    'Thermostat',
    'Cooling Fan',
    'Radiator Hose',
    'Coolant Reservoir',
  ],
  'Exhaust System': [
    'Catalytic Converter',
    'Oxygen Sensor',
    'Exhaust Pipe',
    'Muffler',
    'Exhaust Gasket',
  ],
  'Turbo & Charging': [
    'Turbocharger',
    'Intercooler',
    'Wastegate',
    'Turbo Oil Line',
  ],
  'Fuel System': [
    'Fuel Pump',
    'Fuel Injector',
    'Fuel Filter',
    'Fuel Tank',
    'Fuel Pressure Regulator',
  ],
  'Air Conditioning': [
    'AC Compressor',
    'AC Condenser',
    'AC Evaporator',
    'AC Expansion Valve',
    'AC Blower Motor',
  ],
};

function generateOEMNumber(brand: Brand): string {
  const pattern = oemPatterns[brand];
  const prefix = pattern.prefixes[Math.floor(Math.random() * pattern.prefixes.length)];
  return pattern.format(prefix);
}

function generateProduct(brand: Brand, category: string, index: number): ProductData {
  const templates = productTemplates[category] || ['Part'];
  const template = templates[Math.floor(Math.random() * templates.length)];
  
  // Add variation to names
  const variations = ['', 'OEM', 'Original', 'Genuine'];
  const variation = variations[Math.floor(Math.random() * variations.length)];
  const name = variation ? `${brand} ${template} ${variation}` : `${brand} ${template}`;
  
  const oemNumber = generateOEMNumber(brand);
  const sku = `MCG-${brand.slice(0, 3).toUpperCase()}-${oemNumber.slice(0, 6)}-${index.toString().padStart(4, '0')}`;
  
  // Realistic pricing based on category and brand
  const basePrices: Record<string, number> = {
    'Engine Parts': 45,
    'Brake System': 85,
    'Suspension & Steering': 120,
    'Transmission': 150,
    'Electrical & Lighting': 180,
    'Body Parts': 250,
    'Interior Parts': 95,
    'Filters': 25,
    'Cooling System': 110,
    'Exhaust System': 200,
    'Turbo & Charging': 450,
    'Fuel System': 140,
    'Air Conditioning': 220,
  };
  
  const basePrice = basePrices[category] || 100;
  const priceVariation = 0.7 + Math.random() * 0.6; // ±30% variation
  const price = Math.round((basePrice * priceVariation) * 100) / 100;
  
  const inStock = Math.random() > 0.2; // 80% in stock
  const stockQuantity = inStock ? Math.floor(Math.random() * 50) + 1 : undefined;
  const deliveryDays = inStock ? Math.floor(Math.random() * 5) + 1 : Math.floor(Math.random() * 14) + 7;
  const isOriginal = Math.random() > 0.3; // 70% original parts
  
  const slug = `${brand.toLowerCase().replace(/\s+/g, '-')}-${template.toLowerCase().replace(/\s+/g, '-')}-${oemNumber.toLowerCase()}`;
  
  return {
    id: `prod-${index}`,
    sku,
    name,
    brand,
    category,
    oemNumber,
    price,
    inStock,
    stockQuantity,
    deliveryDays,
    isOriginal,
    slug,
    description: `${name} for ${brand}. OEM Number: ${oemNumber}. ${isOriginal ? 'Original' : 'Quality replacement'} part.`,
    images: ['/assets/parts-closeup.jpg'],
    oemNumbers: [oemNumber],
  };
}

export function generateProductCatalog(count: number = 5000): ProductData[] {
  const products: ProductData[] = [];
  let index = 1;
  
  // Distribute products evenly across brands and categories
  const productsPerBrand = Math.floor(count / brands.length);
  
  for (const brand of brands) {
    const productsPerCategory = Math.floor(productsPerBrand / categories.length);
    
    for (const category of categories) {
      for (let i = 0; i < productsPerCategory; i++) {
        if (products.length < count) {
          products.push(generateProduct(brand, category, index));
          index++;
        }
      }
    }
  }
  
  // Fill remaining slots randomly
  while (products.length < count) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    products.push(generateProduct(brand, category, index));
    index++;
  }
  
  return products;
}

