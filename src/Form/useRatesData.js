import { useEffect, useState } from "react";
const URL = ("https://api.exchangerate.host/latest?base=PLN");

export const useRatesData = () => {
    const [currencyOptions, setCurrencyOptions] = useState([]);
    useEffect(() => {
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(response => {
                setCurrencyOptions(response.rates)
            })
            .catch(error => console.error("Something bad happened!", error))
            
    }, []);
    
    return currencyOptions 
};


