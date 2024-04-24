import { useContext, useEffect } from "react";
import userContext from "../utils/userContext";
const Footer = () => {
    const {user,setUser} = useContext(userContext); 
    useEffect(()=>{
        setUser({
            name: 'renegade',
            email: 'renegade@google.com'});
    },[]);

    return (<h1 className="text-bold text-center text-2xl pb-2">Made with {'<3'} by {user.name} </h1>);
}

export default Footer;