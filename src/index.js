const fs = require('fs')
let base = require('../themes/base')

function to_file() {
    fs.writeFile('themes/Charmed Dark-color-theme.json', JSON.stringify(base), err => {
        console.log(err)
    })
}

to_file()