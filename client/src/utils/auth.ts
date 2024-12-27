import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // return the decoded token
    const legToken: JwtPayload = jwtDecode(this.getToken());
    return legToken;
  }

  loggedIn() {
    // return a value that indicates if the user is logged in
    try {
      const token = this.getToken();
      if (token) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  
  isTokenExpired(token: string) {
    // return a value that indicates if the token is expired
    try {
      const expirationTime: { exp: number } = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);//chatgpt credit
      return expirationTime.exp < currentTime;
    } catch (error) {
      console.error('Invalid token:', error);
      return true;
    }
  }

  getToken(): string {
    // return the token
    const token = localStorage.getItem('id_token') || '';
    return token;
  }

  login(idToken: string) {
    // set the token to localStorage
    localStorage.setItem('id_token', idToken);
    // redirect to the home page
    window.location.assign('/');
  }

  logout() {
    // remove the token from localStorage
    localStorage.removeItem('id_token');
    // redirect to the login page
    window.location.assign('/');
  }
}

export default new AuthService();
