import { SignUpDto } from "app/auth/types/sign-up-dto.type";
import { SignInDto } from "app/auth/types/sign-in-dto.type";
import repository from "repository";

export const signUp = async (user: SignUpDto) => {
  return await repository.post('auth/sign-up', user);
}

export const signIn = async (user: SignInDto) => {
  return await repository.post('auth/sign-in', user);
}

export const logout = async () => {
  return await repository.get('auth/logout');
}