import { jwtDecode } from "jwt-decode";

const authKey = 'accessToken';



class SessionHelper {
    
  setToken(token: string) {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(authKey, token);
    }
  }

  getToken() {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem(authKey);
    }
  }

  getUserInfo() {
    const token = getToken();
    if (token) {
      const decodedData = jwtDecode(token);
      return decodedData;
    }
    if (typeof window !== "undefined" && window.localStorage) {
       window.localStorage.clear();
       window.location.href = "/";
    }
  }

  isLoggedIn() {
    const token = getToken();
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
    window.location.href = "/";
  }
}


export const {setToken, getToken, getUserInfo, isLoggedIn, logout} = new SessionHelper();