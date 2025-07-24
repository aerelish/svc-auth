/**@template_route */

import express from 'express';
import prisma from '../db/prismaClient';
import getErrorMessage from '../utils/getErrorMessage';

const router = express.Router();

router.get('/', async (req, res) => {

  try {

  } catch (error: unknown) {
    console.error(getErrorMessage(error));
    res.status(500).json({ message: 'Internal server error' });  
  };

});

export default router;