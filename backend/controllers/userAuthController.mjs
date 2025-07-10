import { createUser, findUserbyUsername } from "../models/userModel.mjs";
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
    // Destructure request body into variables
    const { 
        username,
        email, 
        password 
    } = req.body;
    
    try {
        // Password hashing stage
        const hashedPassword = await bcrypt.hash(password, 10);

        // Finally call the model where it would query the valid registration
        const newUser = await createUser(username, email, hashedPassword);
        
        // Return a message indicating successful creation of entry 
        return res.status(201).json({
            msg : 'Registered successfullly.' 
        });
    } catch (error) {
        console.log(`Registration Error: ${error}`);
        return res.status(500).json({ msg : 'Internal server error during registration.' });
    }
};

export const loginUser = async (req, res) => {
    // Destructure request body into variables
    const {
        username,
        password
    } = req.body;

    
};