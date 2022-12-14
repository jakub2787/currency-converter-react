import { useEffect, useState  } from "react";

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, []);
  
    return date;
 
};