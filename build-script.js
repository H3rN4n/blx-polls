const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/elementsApp/runtime.js',
        './dist/elementsApp/polyfills.js',
        './dist/elementsApp/scripts.js',
        './dist/elementsApp/main.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/user-poll.js')
    console.info('Elements created successfully!')

})()