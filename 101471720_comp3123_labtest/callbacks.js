// Create a promise that resolves after 500ms with a success message
const resolvedPromise = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve({ message: 'Delayed success!' }), 500);
    });

// Create a promise that rejects after 500ms with an error message
const rejectedPromise = () =>
    new Promise((_, reject) => {
        setTimeout(() => reject({ error: 'Delayed exception!' }), 500);
    });

// Async function to handle both promises using Promise.allSettled
async function handlePromises() {
    const promises = [resolvedPromise(), rejectedPromise()]; // Both promises

    // Wait for all promises to settle (either resolve or reject)
    const results = await Promise.allSettled(promises);

    // Log the results based on the outcome (fulfilled or rejected)
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Promise ${index + 1} fulfilled:`, result.value);
        } else {
            console.log(`Promise ${index + 1} rejected:`, result.reason);
        }
    });
}

// Call the async function to handle both promises simultaneously
handlePromises();
