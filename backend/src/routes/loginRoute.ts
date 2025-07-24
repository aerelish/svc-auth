import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../db/prismaClient';
import getErrorMessage from '../utils/getErrorMessage';

const router = express.Router();

router.post('/', async (req, res) => {

  const { username, password } = req.body;

  try {

    const user = await prisma.user.findUnique({
      where: { username }
    });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    };
    
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    };
    
    const privateKey = process.env.JWT_SECRET;
    if (!privateKey) {
      console.error('Missing private key for JWT signing');
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const token = jwt.sign({ id:user.id }, privateKey, { expiresIn: '12h' });
    res.json({ token });

  } catch (error: unknown) {
    console.error(getErrorMessage(error));
    res.status(500).json({ message: 'Internal server error' });  
  };

});

export default router;