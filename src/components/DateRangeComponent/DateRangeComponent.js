import { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';

import format from 'date-fns/format';
import { addDays } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './DateRangeComponent.css';
const DateRangeComponent = props => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: 'selection',
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = e => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = e => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };
  return (
    <>
      <input
        value={`${format(range[0].startDate, 'dd/MM/yyyy')} to ${format(
          range[0].endDate,
          'dd/MM/yyyy'
        )}`}
        readOnly
        size='24'
        className={props.className}
        onClick={() => {
          setOpen(open => !open);
          props.onGetDate(
            `${format(range[0].startDate, 'dd/MM/yyyy')} to ${format(
              range[0].endDate,
              'dd/MM/yyyy'
            )}`
          );
        }}
      />

      <div ref={refOne} className='dateRange'>
        {open && (
          <DateRangePicker
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction='horizontal'
            className='calendarElement'
          />
        )}
      </div>
    </>
  );
};

export default DateRangeComponent;
