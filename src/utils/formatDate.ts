import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

export default function DateFromNow (date : string) : string {
    dayjs.extend(relativeTime)
    return dayjs(date).fromNow()
}