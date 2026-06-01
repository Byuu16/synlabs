const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('blur(0px)')) {
                // Replacing blur(0px) with empty string to force Framer Motion to remove the inline style,
                // preventing Safari/Chrome compositing bugs that cause dark overlays/washed out blacks.
                content = content.replace(/filter:\s*"blur\(0px\)"/g, 'filter: ""');
                fs.writeFileSync(fullPath, content);
                console.log('Updated: ' + fullPath);
            }
        }
    }
}

replaceInDir('d:/Project Web/Portfolio/web-portfolio/app');
replaceInDir('d:/Project Web/Portfolio/web-portfolio/components');
console.log('Done');