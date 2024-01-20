import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
/**
 * user info
 * token
 */
const contextAPI = createContext({
    user:null,
    token:null,
    loading:false,
    setUser: () => {},
    setToken: () => {},
    setLoading: () => {},
});

export const StateContextProvider = ({children}) =>{
    let [user,_setUser] = useState({});
    let [loading,_setLoading] = useState(false);
    let [token,_setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    let [notify,setNotify] = useState('')

    const setToken = (tkn) =>{
        _setToken(tkn)
        if(tkn){
            localStorage.setItem('ACCESS_TOKEN',tkn)
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    const setUser = (value) =>{
        _setUser(value)
    }
    const setLoading = (value) =>{
        _setLoading(value)
    }

    return <contextAPI.Provider value={{user,setUser,token,setToken,loading,setLoading,notify,setNotify}}>
            {children}
        </contextAPI.Provider>

}

export const useStateContext = () => useContext(contextAPI);
