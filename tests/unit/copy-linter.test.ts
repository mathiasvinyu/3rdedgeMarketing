import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

// Constitution Principle I Banned Vocabulary
const BANNED_BUZZWORDS = [
  'we leverage',
  'frictionless digital ecosystems',
  'industrial-strength',
  'revenue engine',
  'revenue generator',
  'sub-second experiences',
  'psychology-backed design',
  'insights for growth',
  'our team of experts',
  'ux debt',
]

function getSourceFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      if (!['node_modules', '.next', '.git', 'tests'].includes(file)) {
        getSourceFiles(filePath, fileList)
      }
    } else if (/\.(tsx|ts|jsx|js|md)$/.test(file) && !file.includes('copy-linter')) {
      fileList.push(filePath)
    }
  }

  return fileList
}

describe('Constitution Principle I: Plain Clarity & Banned Buzzword Linter', () => {
  it('should not contain any prohibited agency jargon in public-facing source files', () => {
    const srcDir = path.resolve(__dirname, '../../src')
    const files = getSourceFiles(srcDir)
    const violations: Array<{ file: string; word: string; line: number }> = []

    for (const file of files) {
      const content = fs.readFileSync(file, 'utf-8')
      const lines = content.split('\n')

      lines.forEach((line, index) => {
        // Skip code comments that explicitly list the banned list for auditing
        if (line.includes('BANNED_BUZZWORDS') || line.includes('Banned Vocabulary')) return

        const lower = line.toLowerCase()
        for (const buzzword of BANNED_BUZZWORDS) {
          if (lower.includes(buzzword)) {
            violations.push({
              file: path.relative(process.cwd(), file),
              word: buzzword,
              line: index + 1,
            })
          }
        }
      })
    }

    if (violations.length > 0) {
      console.error('Constitutional violations found:', violations)
    }

    expect(violations).toEqual([])
  })
})
