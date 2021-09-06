import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';
import './menuItem.json'

export const MenuContext = createContext();

export const MenuContextProvider = (props) => {
    const [data, setData] = useState();

    useEffect(() =>{
        axios
            .get(
                './menuItem.json'
            )
            .then((response) => setData(response.data))
            .catch((error) => console.log(error)) 
        }, [])

    return (
        <MenuContext.Provider value={{ data }}>
          {props.children}
        </MenuContext.Provider>
    )
}

export default MenuContext