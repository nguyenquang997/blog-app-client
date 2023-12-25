import { createContext, useEffect, useState } from "react";

import { getPosts } from '../api'

export const HomeContext = createContext()

// eslint-disable-next-line react/prop-types
function HomeProvider({ children }) {
    const [dataApi, setDataApi] = useState([{}, {}, {}, {}]);

    useEffect(() => {
        getPosts().then(posts => {
            setDataApi(posts)
        })
    }, [])

    return (
        <HomeContext.Provider value={{ dataApi, setDataApi }}>
            {children}
        </HomeContext.Provider>
    );
}

export default HomeProvider;