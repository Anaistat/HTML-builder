const fs = require('fs')
const path = require('path')

const rs = new fs.ReadStream(path.resolve(__dirname, 'text.txt'))
rs.on('readable', () => {
  let text = rs.read()
  if (text) {
    console.log(text.toString())
  }
})
