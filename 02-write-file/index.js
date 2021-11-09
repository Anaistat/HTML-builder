const readline = require('readline')
const fs = require('fs')

console.log('Hello,stranger')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function input (queryText = '') {
  rl.question(queryText, (answer) => {
    fs.appendFile('02-write-file/text.txt', answer, function(error){
      if(error) throw error
    })
    input()
  })
}
input('What do you want to write to a file? ')





rl.on('SIGINT', () => {
  console.log('\nAll done.')
  rl.close()
})
let textWrite = ''
process.stdin.on('keypress', (c, k) => {
  textWrite += k.sequence
  if (textWrite.includes('exit')) {
    console.log('\nAll done.')
    rl.close()
  }
});
