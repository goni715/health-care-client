import { useState,  useEffect} from 'react';

type TDebouncedProps = {
    searchQuery: string;
    delay: number;
  };


const useDebounced = ({ searchQuery, delay }: TDebouncedProps) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(searchQuery);
  
    useEffect(() => {
      let timeoutId;
      clearTimeout(timeoutId); //clear timeout after onChange
      timeoutId = setTimeout(() => {
        if(searchQuery.length > 1){
           setDebouncedValue(searchQuery);
        }else{
           setDebouncedValue(""); 
        }
      }, delay);    
    }, [searchQuery, delay]);
  
    return debouncedValue;
};


export default useDebounced;