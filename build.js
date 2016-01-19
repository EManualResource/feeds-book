'use strict'

const fs = require('fs')
const path = require('path')

let files = fs.readdirSync(__dirname)
let all = []

files.forEach(function (file, index) {
  if (file.indexOf('.') == 0) {
    return
  }
  if (fs.lstatSync(path.join(__dirname, file)).isDirectory()) {
    all.push(
      require(path.join(__dirname, file, 'info.json'))
    )
  }
})

fs.writeFileSync(path.join(__dirname, 'all.json'), JSON.stringify(all, null, 4), {encoding: 'utf-8'})
fs.writeFileSync(path.join(__dirname, 'all.min.json'), JSON.stringify(all, null, 0), {encoding: 'utf-8'})

console.log('build finish')
