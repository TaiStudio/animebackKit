const fs = require('fs')

const content = 'Some content!'

if(fs.existsSync('./test.txt')){
    fs.rmSync('./test.txt');
}
else{
    fs.writeFileSync('./test.txt', content, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    })
}