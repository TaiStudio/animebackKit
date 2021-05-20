const fs = require('fs')

const content = 'Some content!'

fs.writeFileSync('./test.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
    //file written successfully
})