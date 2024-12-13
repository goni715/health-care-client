import { useEffect, useState } from 'react';
import { getToken, getUserInfo } from '@/helper/SessionHelper';

const useUserInfo = (): any | string => {
   const [userInfo, setUserInfo] = useState<any | string>('');

   useEffect(() => {
      const fetchUserInfo = () => {     
         const authToken = getToken()
         if (authToken) {
            const user = getUserInfo()
            setUserInfo(user);
         } else {
            setUserInfo('');
         }
      };

      fetchUserInfo();
   }, []);

   return userInfo;
};

export default useUserInfo;
