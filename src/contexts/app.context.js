import {createContext, useState} from 'react';

const AppContext = createContext(undefined);

export const AppDataProvider = ({children}) => {
    const [start, setStart] = useState(localStorage.getItem('start') === 'true' || false);

    return (
        <AppContext.Provider value={{
            start, 
            setStart: x => {
                setStart(x);
                localStorage.setItem('start', x);
            }
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;