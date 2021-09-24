import React,{useState} from 'react';

import DatePicker,{registerLocale} from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import subDays from "date-fns/subDays";
import "react-datepicker/dist/react-datepicker.css";
import pt from 'date-fns/locale/pt';
registerLocale('pt', pt)

export default function Picker(){
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 16))
  const data={
    dia:startDate.toLocaleDateString(),hora:(startDate.toLocaleTimeString()).slice(0,5)
  }
  console.log(data)
  return (
    <DatePicker
    showTimeSelect

    excludeTimes={[
      setHours(setMinutes(new Date(2021,11,11,8,30), 0), 8),
      setHours(setMinutes(new Date(), 0), 23),
      setHours(setMinutes(new Date(), 30), 18),
      setHours(setMinutes(new Date(), 30), 19),
      setHours(setMinutes(new Date(), 30), 17),
    ]}
    excludeDates={[
      new Date(2021, 9, 20, 8, 30)
    ]}
    dateFormat="Pp"
    timeFormat="p"
    showTimeSelect
      locale='pt'
      renderCustomHeader={({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div>
          <button
            aria-label="Previous Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--previous"
            }
            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
            onClick={decreaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
              }
            >
              {"<"}
            </span>
          </button>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("pt-BR", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <button
            aria-label="Next Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--next"
            }
            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
            onClick={increaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
              }
            >
              {">"}
            </span>
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      monthsShown={2}
    />
  );

}