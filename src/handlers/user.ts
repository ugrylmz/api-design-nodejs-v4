import prisma from '../db';
import { hashPassword, createJWT, comparePassword } from '../modules/auth'
import { validateUserInput } from '../utils/validation';

export const createNewUser = async (req, res) => {
    const { username, email, password } = req.body;
    const validation = validateUserInput(username, email, password);

    if (!validation.isValid) {
        console.log('Validation Errors:', validation.errors);
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
        console.log('Error:', error, error.message);
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


export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
}


// export const deleteAllUsers = async (req, res) => {
//     await prisma.user.deleteMany();
//     res.status(200).json({ message: 'All users deleted.' });
// }