function toKebabCase(input) {
    // Step 1: Validate input
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Step 2: Trim whitespace and handle multiple separators
    input = input.trim().replace(/[_\s]+/g, '-');

    // Step 3: Convert camelCase and PascalCase to kebab-case
    input = input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    // Step 4: Handle edge cases
    if (!/[a-zA-Z]/.test(input)) {
        return '';
    }

    // Step 5: Remove any leading or trailing hyphens
    return input.replace(/^-+|-+$/g, '');
}

// Example usage
console.log(toKebabCase('Hello World')); // Output: hello-world
console.log(toKebabCase('thisIsCamelCase')); // Output: this-is-camel-case
console.log(toKebabCase('PascalCaseExample')); // Output: pascal-case-example
console.log(toKebabCase('   _multiple__spaces_and_underscores_   ')); // Output: multiple-spaces-and-underscores

// Error case
try {
    console.log(toKebabCase(123)); // Should throw an error
} catch (error) {
    console.error(error.message); // Output: Input must be a string
}