// Filters
export const LOGIN = 'LOGIN';

export function login(userid) {
  return { type: LOGIN, user: userid }
}
