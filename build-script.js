const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './server/public/runtime.js',
        './server/public/polyfills.js',
        './server/public/scripts.js',
        './server/public/main.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, './server/public/user-poll.js')
    console.info('Elements created successfully!')

})()