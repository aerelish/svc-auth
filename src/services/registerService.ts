import axios from 'axios';

type User = {
  username: string,
  password: string
}

export const register = async (user: User) => {

  const { 
    username,
    password
  } = user

  const response = await axios.post('/register', {
    username,
    password
  })

  return response;

}