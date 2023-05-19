
import React,{useState,
    useEffect,
    useContext,
  
    createContext
    } from 'react'





    const AuthContext=createContext(); 
    

const AuthProvider=({children})=>{ //copy ma cha we kmow provider and consumer tyo authprovider is a provider which provide 
    //the data to be shared  so const[auth,setauth ma bhako data is we want to share globally you know]
    const [auth,setAuth]=useState({
        user:null,
        token:''
    });
    //default axios
//   axios.defaults.headers.common["Authorization"] = auth?.token;

// axios.defaults.headers.common['Authorization']=auth?.token


     useEffect=(()=>{
    const data=localStorage.getItem("auth");
    if(data){
        const parsedata=JSON.parse(data);
    
    
        setAuth({
            ...auth,
            user:parsedata.user,
            token:parsedata.token
        });
    }
    })
    return(//its consumer and we want to share sabai ma globally so share garney data lai we need to put in consumer to share gloablly
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
            </AuthContext.Provider>
    )
}
const useAuth =()=>useContext(AuthContext)//and we know consumer ma bhako data lai share garnu lai we have usecontext hooks ani tesma wrap garchau
export {useAuth,AuthProvider};
