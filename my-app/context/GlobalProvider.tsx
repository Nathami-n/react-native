import {createContext, useContext, useState, useEffect} from 'react';
import { getCurrentUser } from '../lib/appwrite';
import { type Models } from 'react-native-appwrite';

interface IContextInterface {
    isLoggedIn: boolean;
    user: Models.Document | null;
    isLoading: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setUser:  React.Dispatch<React.SetStateAction<Models.Document | null>>
}

const GlobalContext = createContext<IContextInterface>();


export const useGlobalContext = () => useContext(GlobalContext);

 export const GlobalProvider = ({children}: {
    children: React.ReactNode
}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<Models.Document | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
        .then((res) => {
            if(res) {
                setIsLoggedIn(true);
                setUser(res);
            } else {
                setIsLoggedIn(false);
                setUser(null);
            }
        })
        .catch((error)=> {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, []);

    return(

        <GlobalContext.Provider
        value={{
            isLoggedIn,
            setIsLoggedIn,
            user,
            setUser,
            isLoading
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}