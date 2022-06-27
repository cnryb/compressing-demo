import compressing from 'compressing'

await compressing.tgz.uncompress('/Users/renyuebing/Downloads/node-v16.15.1-darwin-arm64.tar.gz', './test')

await compressing.zip.uncompress('/Users/renyuebing/Downloads/node-v16.15.1-win-x64.zip', './test')

