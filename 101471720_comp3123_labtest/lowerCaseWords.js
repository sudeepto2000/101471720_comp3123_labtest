// Function to filter out non-strings and convert strings to lowercase
const processArray = (mixedArray) => {
    return mixedArray.reduce((acc, item) => {
        if (typeof item === 'string') {
            acc.push(item.toLowerCase());
        }
        return acc;
    }, []);  // Initial accumulator is an empty array
};

// Async function wrapper to simulate async processing (though not required here)
const lowerCaseWords = async (mixedArray) => {
    const result = processArray(mixedArray); // Use helper function to process the array
    return Promise.resolve(result);  // Return a resolved promise with the result
};

// Test array with mixed types
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

// Self-invoking async function to handle the result
(async () => {
    try {
        const result = await lowerCaseWords(mixedArray); // Await the result of lowerCaseWords
        console.log(result); // Output the processed array: ['pizza', 'wings']
    } catch (error) {
        console.error('An error occurred:', error); // Handle any errors
    }
})();
