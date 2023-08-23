'use client'

import { DateRange, Range, RangeKeyDict } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

interface CalendarProps {
  value: Range
  onChange: (value: RangeKeyDict) => void
  disabledDates?: Date[]
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  disabledDates,
}) => {
  return (
    <DateRange
      rangeColors={['#5F4624']}
      ranges={[value]}
      onChange={onChange}
      date={new Date()}
      direction='vertical'
      disabledDates={disabledDates}
      showDateDisplay={false}
      minDate={new Date()}
    />
  )
}

export default Calendar
