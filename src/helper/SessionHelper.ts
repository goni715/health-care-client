import { jwtDecode } from "jwt-decode";
import deleteCookies from "@/services/actions/deleteCookies";
import { IAuthUser } from "@/types/globals/globalsType";


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
      const decodedData = jwtDecode(token) as IAuthUser;
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
    deleteCookies(["accessToken", "refreshToken"])
    localStorage.clear();
    window.location.href = "/";
  }
}


export const {setToken, getToken, getUserInfo, isLoggedIn, logout} = new SessionHelper();