// apps/your-app/tailwind.config.js
const componentsConfig = require('@repo/components/tailwind.config.js')

module.exports = {
  ...componentsConfig,  // Kế thừa config từ components
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // ⚠️ QUAN TRỌNG: Phải include path đến components package
    '../../packages/components/src/**/*.{js,ts,jsx,tsx}',
  ],
}