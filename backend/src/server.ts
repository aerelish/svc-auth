import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import loginRoute from './routes/loginRoute';
import registerRoute from './routes/registerRoute';
import validateRoute from './routes/validateRoute';

const server = express();

const PORT = process.env.PORT || 3000;

/**@middleware */
// for dev
server.use(cors());

// for production or with authentication
// server.use(cors({
//   origin: ['http://example.com', 'http://localhost:3000'],
//   optionsSuccessStatus: 200,
//   credentials: true // if you're using cookies or HTTP auth
// }))

server.use(morgan('common'));
server.use(express.json());

/**@routes */
server.use('/login', loginRoute);
server.use('/register', registerRoute);
server.use('/validate', validateRoute);

/**@start_server */
server.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`)
});
