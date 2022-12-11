import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const formatedDate = date.toLocaleString("pl",  {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, []);

    return (
        <span className="clock">Dzisiaj jest {formatedDate}
        </span>
    )
}
export default Clock;