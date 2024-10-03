const fs = require('fs'); // Import file system module
const path = require('path'); // Import path module

const logsDir = path.join(__dirname, 'Logs'); // Define path for the Logs directory

// Function to ensure the Logs directory exists, or create it
function ensureLogsDirectory() {
    fs.mkdir(logsDir, { recursive: true }, (err) => {
        if (err) {
            console.error('Error creating Logs directory:', err);
        } else {
            console.log('Logs directory is ready.');
        }
    });
}

// Function to create log files using forEach loop
function createLogFiles() {
    const fileNumbers = Array.from({ length: 10 }, (_, index) => index + 1); // Array [1, 2, ..., 10]
    
    fileNumbers.forEach((number) => {
        const filePath = path.join(logsDir, `log${number}.txt`); // Create file path for each log file
        
        fs.writeFile(filePath, `This is log file number ${number}`, (err) => {
            if (err) {
                console.error(`Error creating file log${number}.txt:`, err);
            } else {
                console.log(`Created file: log${number}.txt`);
            }
        });
    });
}

// Execute the functions
ensureLogsDirectory(); // Ensure Logs directory exists
createLogFiles(); // Create 10 log files using a forEach loop
