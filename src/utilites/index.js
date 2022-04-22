import { object, string, matches, email } from 'yup';

export const SIGN_UP_SHEMA = object({
  firstName: string(),
  lastName: string(),
  email: string().email(), 
  password: string()
});