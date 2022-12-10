import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(setDate(new Date()), 1000)
        return () => {
            clearInterval(timerId)
        }
    }, [date]);

    return (
        <span className="clock">Dzisiaj jest {date.toLocaleString
            ("pl",
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                })}
        </span>
    )
}
export default Clock;