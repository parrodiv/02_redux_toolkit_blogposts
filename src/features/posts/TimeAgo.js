import { parseISO, formatDistanceToNow } from 'date-fns'

const TimeAgo = ({timestamp}) => {
  let timeAgo = ''
  if (timestamp) {
    console.log({ timestamp })
    const date = parseISO(timestamp)
    console.log({ date })
    const timePeriod = formatDistanceToNow(date) // date needs to be date format "Mon Jan 23 2023 16:32:26 GMT+0100" not ISO date
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo
