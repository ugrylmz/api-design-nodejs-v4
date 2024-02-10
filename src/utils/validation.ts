/**
 * Validates user input for registration.
 * @param username - The username to validate.
 * @param email - The email to validate.
 * @param password - The password to validate.
 * @returns An object containing validation results.
 */
export const validateUserInput = (username: string, email: string, password: string): { isValid: boolean, errors: { [key: string]: string } } => {
    const errors: { [key: string]: string } = {};

    // Validate username
    if (!username) {
        errors.username = 'Username is required.';
    } else if (username.length < 3 || username.length > 20) {
        errors.username = 'Username must be between 3 and 20 characters long.';
    }

    // Validate email
    if (!email) {
        errors.email = 'Email is required.';
    } else if (!isValidEmail(email)) {
        errors.email = 'Invalid email address.';
    }

    // Validate password
    if (!password) {
        errors.password = 'Password is required.';
    } else if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters long.';
    }

    // Return validation results
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

/**
 * Validates an email address.
 * @param email - The email address to validate.
 * @returns True if the email is valid, otherwise false.
 */
const isValidEmail = (email: string): boolean => {
    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
