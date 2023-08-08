import repository from "repository";

export const getUsers = async () => {
  return await repository.get('users');
}