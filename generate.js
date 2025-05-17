// generate.js
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'


const args = process.argv.slice(2)
if (args.length < 1) {
  console.error('❌ Укажи путь к JSON-файлу: node generate.js path/to/script.json')
  process.exit(1)
}

const inputPath = path.resolve(args[0])
const outputDir = path.resolve('output')
const tempJsonPath = path.resolve('src/mocks/config.json')
const builtJsPath = path.resolve('dist/interactive-guide.iife.js')

// 1. Проверяем наличие JSON
if (!fs.existsSync(inputPath)) {
  console.error('❌ JSON-файл не найден:', inputPath)
  process.exit(1)
}

// 2. Копируем JSON в src/
fs.copyFileSync(inputPath, tempJsonPath)
console.log('✅ JSON скопирован в src/input-script.json')

// 3. Запускаем сборку Vite
console.log('🏗 Запускаем сборку...')
try {
  execSync('npm run build', { stdio: 'inherit' })
} catch (e) {
  console.error('❌ Сборка завершилась с ошибкой.')
  process.exit(1)
}

// 4. Копируем результат в output/
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

const finalOutput = path.join(outputDir, 'interactive-guide.iife.js')
fs.copyFileSync(builtJsPath, finalOutput)

console.log('✅ Скрипт собран и сохранён в:', finalOutput)
