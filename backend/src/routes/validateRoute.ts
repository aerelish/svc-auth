import express from 'express';
import jwt from 'jsonwebtoken';
import getErrorMessage from '../utils/getErrorMessage';

const router = express.Router();

router.get('/', async (req, res) => {

  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
     return res.status(401).json({ message: 'Authentication token is required' });
  };
  
  try {
    
    const privateKey = process.env.JWT_SECRET;
    if (!privateKey) {
      console.error('Missing private key for JWT signing');
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    jwt.verify(token, privateKey);
    res.status(200).json({ valid: true });

  } catch (error: unknown) {
    console.error(getErrorMessage(error));
    res.status(401).json({ 
      valid: false, 
      message: 'Invalid or expired token...' 
    });  
  };

});

export default router;