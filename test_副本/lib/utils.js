const fs = require('fs');
const path = require('path');

function getAllFilePaths(dir) {
    let results = [];
    const files = fs.readdirSync(dir, { withFileTypes: true });
    files.forEach((file) => {
        const res = path.resolve(dir, file.name);
        results.push(res);
        if (file.isDirectory()) {
            results = results.concat(getAllFilePaths(res));
        }
    });
    return results.filter((paths)=>paths.endsWith('.ttml'))
}

module.exports = {
    getAllFilePaths
}
