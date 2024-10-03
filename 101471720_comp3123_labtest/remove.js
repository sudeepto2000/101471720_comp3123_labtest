const fs = require('fs').promises; // Import 'fs' module with promises for async operations
const path = require('path');      // Import 'path' module for handling file paths

const logsDir = path.join(__dirname, 'Logs');  // Define path for the Logs directory

// Async function to remove files and the Logs directory
async function cleanLogsDirectory() {
    try {
        // Check if Logs directory exists
        await fs.access(logsDir);

        // Read all files in the Logs directory
        const files = await fs.readdir(logsDir);
        
        // Delete all files in parallel using Promise.all
        await Promise.all(files.map(async (file) => {
            const filePath = path.join(logsDir, file);
            console.log(`Deleting file: ${file}`); // Log the file being deleted
            await fs.unlink(filePath); // Delete each file
        }));

        // Remove the Logs directory using rm with recursive flag (modern approach)
        await fs.rm(logsDir, { recursive: true, force: true });
        console.log('Logs directory and all files deleted successfully.'); // Log success
    } catch (error) {
        // If the Logs directory doesn't exist, log the information
        if (error.code === 'ENOENT') {
            console.log('Logs directory does not exist.');
        } else {
            console.error('An error occurred:', error);
        }
    }
}

// Call the async function to delete the files and directory
cleanLogsDirectory();
