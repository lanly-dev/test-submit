const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

// Define the ranking score data
const rankingScores = [
  { Rank: 1, Name: 'John Doe', Score: 95 },
  { Rank: 2, Name: 'Jane Smith', Score: 90 },
  { Rank: 3, Name: 'Bob Johnson', Score: 85 },
  // Add more rows as needed
]

// Convert the data to CSV format
const csvData = [
  'Rank,Name,Score',
  ...rankingScores.map(row => `${row.Rank},${row.Name},${row.Score}`)
].join('\n')

// Define the file path
const filePath = path.join(__dirname, 'ranking_scores.csv')

// Write the CSV data to a file
fs.writeFileSync(filePath, csvData)

const PAT = 'YOUR_PAT'

// Define the Git commands
const gitCommands = [
  'git add ranking_scores.csv',
  'git commit -m "Add ranking score table"',
  // Replace 'YOUR_PAT' with your actual Personal Access Token
  `git push https://${PAT}@github.com/lanly-dev/test-submit.git main`
]

// Execute the Git commands
gitCommands.forEach(cmd => {
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${cmd}`, error)
      return
    }
    console.log(`Command executed: ${cmd}`, stdout)
  })
})
