import { useEffect, useState } from "react";
import { StyledClock } from "./styled";

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
        <StyledClock >Dzisiaj jest {formatedDate}
        </StyledClock>
    )
}
export default Clock;