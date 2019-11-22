const mymodule = require('./mymodule.js') 
const folder = process.argv[2]
const ext = process.argv[3]

mymodule(folder, ext, function(err, files){
    if (err)
    return console.error('There was an error:',err)

    files.forEach(function(file){
        console.log(file)
    })
})