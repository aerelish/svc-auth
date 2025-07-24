import express from 'express';
import prisma from '../db/prismaClient';
import getErrorMessage from '../utils/getErrorMessage';

const router = express.Router();

/**@note - protect this route */

router.get('/', async (req, res) => {

  try {

    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        isActive: true,
        isVerified: true,
        createdAt: true,
        updatedAt: true
      }
    });

    res.json(users);
  
  } catch (error: unknown) {
    console.error(getErrorMessage(error));
    res.status(500).json({ message: 'Internal server error' });  
  };

});

export default router;