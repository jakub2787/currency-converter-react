import { useEffect, useState } from "react";
const API_URL = "https://api.exchangerate.host/latest?base=PLN";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(response => {
                setRatesData({
                    date: response.date,
                    rates: response.rates,
                    status: "success",
                })
            })
            .catch(error => {
                console.error(error);
                setRatesData({
                    status: "error",
                });
            })

    }, []);

    return ratesData
};


