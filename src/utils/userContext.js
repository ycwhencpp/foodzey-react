const { createContext } = require("react")

const userContext = createContext({
        user:{
            name:'Dummy',
            email:'dummy@gmail.com',
        },
        student:{
            name:'Student',
            email:'student@gmail.com',
        }
});

export default userContext;