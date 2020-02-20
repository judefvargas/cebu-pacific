import React, {useState,useEffect,useMemo} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Clock2({active}) {
    const activeCopy = Object.assign({}, active);
    const date = activeCopy.date;
    const time = activeCopy.time;
    const clockDate = new Date(`${time} ${date}`);
    const [actualDate, updateDate] = useState(() => clockDate);
    let ticking = setInterval(() => updateDate(new Date(actualDate.setMinutes(actualDate.getMinutes()+10) )), 5000); //tick every 5 seconds, add 10 minutes to date
    // const sss = useMemo(() => (setInterval(() => updateDate(new Date(actualDate.setMinutes(actualDate.getMinutes()+10) )), 10000)), [actualDate]);
    useEffect(() => {
        // clearInterval(ticking);
    }, [active, ])
    console.log(actualDate)
    return (
        <>
            <FormatDate date={actualDate} />
            <LazyLoadImage placeholderSrc={`TIMER.png`} effect="blur" alt=""  style={{width:'6.4vw', position:'relative'}} src={`TIMER.png`} />
        </>
    )
}

const FormatDate = (props) => {
    let { date } = props;
    let actual = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    return (
        <span style={{color:'white', position:'absolute',zIndex:'9999',display:'block'}}>
            { actual }
        </span>
    )
}
