import prisma from '../db';
import { hashPassword, createJWT, comparePassword } from '../modules/auth'
import { validateUserInput } from '../utils/validation';

export const createNewUser = async (req, res) => {
    const { username, email, password } = req.body;
    const validation = validateUserInput(username, email, password);
    console.log(validation);
   if (!validation.isValid) {
       return res.status(400).json({ errors: validation.errors });
    }

    try {
        const hashedPassword = await hashPassword(password);
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });
        const token = await createJWT(newUser);
        res.status(201).json({ token }, username, email);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) return res.status(400).json({ message: 'Username and password are required.' });
    if(username.length<3 || password.length<8) return res.status(400).json({ message: 'Username must be at least 3 characters long and password must be at least 8 characters long.' });
    const user = await prisma.user.findUnique({
        where: {
            username
        }
    });
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password.' });
    }
    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
        return res.status(400).json({ message: 'Invalid username or password.' });
    }
    const token = await createJWT(user);
    res.status(200).json({ token });
}