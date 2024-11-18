const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/app.log');

const logger = (req, res, next) => {
    const log = \`\${new Date().toISOString()} - \${req.method} \${req.url} 
\`;
    fs.appendFile(logFilePath, log, err => {
        if (err) {
            console.error('Could not write log', err);
        }
    });
    next();
};

module.exports = logger;
