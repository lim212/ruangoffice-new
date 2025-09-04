#!/usr/bin/env node

// Simple check script for peraturan data
// This file is used as a predev script to ensure peraturan data is available

import fs from 'fs';
import path from 'path';

const peraturanFile = path.join(process.cwd(), 'public', 'peraturan.seed.json');

try {
  if (fs.existsSync(peraturanFile)) {
    const data = fs.readFileSync(peraturanFile, 'utf8');
    const peraturan = JSON.parse(data);
    console.log(`✅ Peraturan data loaded: ${peraturan.length} items found`);
  } else {
    console.log('⚠️  Peraturan data file not found, but continuing...');
  }
} catch (error) {
  console.log('⚠️  Error checking peraturan data, but continuing...');
}

console.log('🚀 Starting development server...');
