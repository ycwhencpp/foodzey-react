import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const[IsOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        const handelOnline = () => {
            setIsOnline(true);
        }
        const handelOffline = () => {
            setIsOnline(false);
        }
        window.addEventListener('online',handelOnline);
        window.addEventListener('offline',handelOffline);

        return  ()=>{
            window.removeEventListener('online',handelOnline);
            window.removeEventListener('offline',handelOffline());
        };
    },[]);

    return IsOnline;
}

export default useOnlineStatus;