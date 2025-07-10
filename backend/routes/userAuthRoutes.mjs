import express from 'express';
import { validateRegistration } from '../middleware/validateUser.mjs';
import { registerUser } from '../controllers/userAuthController.mjs';

// Router object to be used for routing functionality
const router = express.Router();

router.get('/', (req, res) => {
    console.log('User hit the server.');
});

// Route for handling user registration
// 1. The middleware validateRegistration will run checks for valid user form inputs
// 2. Pass onto register controller if validation passed
router.post('/register', validateRegistration, registerUser);
// Route for handling user login
// 1.
// 2. 
// router.post('/login', login);

export default router;