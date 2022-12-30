
import { StyledClock } from "./styled";
import { useCurrentDate, } from "./useCurrentDate";

const Clock = () => {
    const date = useCurrentDate();

    const formatedDate =
        date.toLocaleString("pl", {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });

    return (
        <StyledClock>
            Dzisiaj jest {formatedDate}
        </StyledClock>
    )
}
export default Clock;