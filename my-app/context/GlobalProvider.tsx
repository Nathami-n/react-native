import {createContext, useContext, useState, useEffect} from 'react';
import { getCurrentUser } from '../lib/appwrite';
import { type Models } from 'react-native-appwrite';

const GlobalContext = createContext({});


export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({children}: {
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
            }
        })
    }, []);

    return(

        <GlobalContext.Provider
        value={{

        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}