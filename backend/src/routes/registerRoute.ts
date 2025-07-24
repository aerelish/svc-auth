import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../db/prismaClient';
import getErrorMessage from '../utils/getErrorMessage';

const router = express.Router();

router.post('/', async (req, res) => {

  const { 
    username, 
    password
  } = req.body;
 
  const saltRounds = 8;  // salt = cost factor, determines how many times to run the hashing algorithm
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      }
    });

    const privateKey = process.env.JWT_SECRET;
    if (!privateKey) {
      console.error('Missing private key for JWT signing');
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const token = jwt.sign({ id:user.id }, privateKey, { expiresIn: '12h' });
    res.json({token})

  } catch (error: unknown) {
    console.error(getErrorMessage(error));
    res.status(500).json({ message: 'Internal server error' });  
  };

});

export default router;