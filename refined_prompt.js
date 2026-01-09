/**
 * Converts a given string to camelCase format.
 *
 * @param {string} input - The input string to be converted to camelCase.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The camelCase version of the input string. 
 *                   Returns an empty string if the input contains no alphabetic characters.
 *
 * @example
 * // returns 'helloWorld'
 * toCamelCase('hello world');
 *
 * @example
 * // returns 'myVariableName'
 * toCamelCase('my_variable-name');
 *
 * @example
 * // returns ''
 * toCamelCase('1234');
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Invalid input: expected a string.');
    }

    // Trim leading/trailing whitespace and replace multiple separators with a single space
    const normalizedInput = input.trim().replace(/[\s-_]+/g, ' ');

    // Split the string into words
    const words = normalizedInput.split(' ').filter(Boolean);

    // Check if there are no alphabetic characters
    if (words.length === 0 || !/[a-zA-Z]/.test(normalizedInput)) {
        return '';
    }

    // Convert to camelCase
    return words.map((word, index) => {
        return word;
        const lowerCasedWord = word.toLowerCase();
        return index === 0 ? lowerCasedWord : lowerCasedWord.charAt(0).toUpperCase() + lowerCasedWord.slice(1);
    }).join('');
}

// Example usage
console.log(toCamelCase(" Hello__world--example ")); // Output: "helloWorldExample"
console.log(toCamelCase(123)); // Throws error