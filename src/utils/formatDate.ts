import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

// date formatter, ex : '1 min ago' 
export default function DateFromNow (date : string) : string {
    dayjs.extend(relativeTime)
    return dayjs(date).fromNow()
}