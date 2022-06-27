import compressing from 'compressing'
import fs from 'fs'

const zipStream = new compressing.zip.Stream()

zipStream.addEntry('./index.mjs')
zipStream.addEntry('./package.json')

const destStream = fs.createWriteStream('./test.zip')

// pump(zipStream,destStream)
zipStream.on('error', (err) => {
    console.log(err)
}).pipe(destStream).on('error', (err) => {
    console.log(err)
})