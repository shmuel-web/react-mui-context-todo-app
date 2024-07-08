import {createContext, useState} from 'react';

const AppContext = createContext(undefined);

export const AppDataProvider = ({children}) => {
    const [start, setStart] = useState(false);

    return (
        <AppContext.Provider value={{start, setStart}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;