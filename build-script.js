const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './server/public/client/runtime.js',
        './server/public/client/polyfills.js',
        './server/public/client/scripts.js',
        './server/public/client/main.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, './server/public/client/user-poll.js')
    console.info('Elements created successfully!')

})()