import React, {useState,useEffect,useRef, } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Clock({active}) {
  // const activeCopy = Object.assign({}, active);
  const [date, updateCurDate] = useState(active.date);
  const [time, updateCurTime] = useState(active.time);
  const [actualDate, updateDate] = useState(new Date(`${time} ${date}`));
  let interval = useRef(null);

  useEffect(() => {
    let newDate = new Date(`${active.time} ${active.date}`)
    updateDate(newDate);
    updateCurDate(active.date);
    updateCurTime(active.time);
    manageInterval(false);
    manageInterval(true, newDate);
  }, [active])

  function manageInterval(isOn, actual) {
    if (!isOn) {
      clearInterval(interval.current);
    } else {
      interval.current = setInterval(() => updateDate(new Date(actual.setMinutes(actual.getMinutes()+10) )), 5000)
    }
  }
  return (
    <>
      <FormatDate date={actualDate} />
      <LazyLoadImage placeholderSrc={`TIMER.png`} effect="blur" alt=""  style={{width:'6.4vw', position:'relative'}} src={`TIMER.png`} />
    </>
  )
}

const FormatDate = (props) => {
  const [date, updateDate] = useState(props.date);
  useEffect(() => {
    updateDate(props.date);
  }, [props])
  let actual = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  return (
    <span style={{color:'white', position:'absolute',zIndex:'9999',display:'block'}}>
      { actual }
    </span>
  )
}

