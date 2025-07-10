import { findUserbyUsername } from "../models/userModel.mjs";

export const validateRegistration = async (req, res, next) => {
    // Destructure request body object into variables
    const { 
        username, 
        email, 
        password 
    } = req.body;

    // RegEx pattern for form validation
    const usernameRegex = /^[a-zA-Z0-9_-]{4,}$/; // Only allows 4+ single-text, alphanumeric, underscores, and hyphen
    // const nameRegex = /^[A-Za-z .'-]+$/; // Allows alphabetic characters, spaces, apostrophe and hyphen
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/; // Follows the email formatting, and disallow special characters
    // - passRegex format must be 6 characters long.
    
    if (!username || !email || !password) {
        return res.status(400).json({ msg : 'All input fields are required.' });
    }
    if (username.includes(' ')) {
        return res.status(400).json({ msg : 'Username must not contain spaces.' });
    }
    if (!usernameRegex.test(username)) {
        return res.status(400).json({ msg : 'Invalid username format.' });
    }
    if (!emailRegex.test(email)) {
        return res.status(400).json({ msg : 'Invalid email format.' });
    }
    if (password.length < 6) {
        return res.status(400).json({ msg : 'Password must be at least 6 characters long.' });
    }

    // Check if username already exists
    const existingUser = await findUserbyUsername(username);
    if (existingUser !== null) {
        return res.status(400).json({ msg : 'Username already taken' });
    }
    
    next();
};

export const validateLogin = async (req, res, next) => {
    // Destructure request body object into variables
    const {
        username,
    } = req.body;

    try {
        c
    } catch {

    }
};