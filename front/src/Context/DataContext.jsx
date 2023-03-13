import { createContext, useState, useEffect } from "react";
import axios from "axios";



export const dataContext = createContext();

const DataProvider = ({ children }) => {

    const [data, setData] = useState([])

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("carrito")) || [])

    // get Item    
    JSON.parse(localStorage.getItem("carrito"))




    useEffect(() => {
        axios('http://localhost:5000/api/products').then((response) => setData(response.data))

    }, [])


    // console.log(data)

    return (
        <dataContext.Provider value={{ data, cart, setCart, }}>
            {children}
        </dataContext.Provider>


    )

}

export default DataProvider;