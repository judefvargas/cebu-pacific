import React, { Component } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class Clock extends Component {
    constructor(props) {
        super(props)
        const date = Object.assign({}, props.active.date);
        const time = Object.assign({}, props.active.time);
        const clockDate = new Date(`${time} ${date}`);
        this.state = {
            date: new Date(clockDate)
        }
        let curDate = Object.assign({}, this.state.date);

        // setInterval(
        //     () => curDate = new Date(curDate.setMinutes(curDate.getMinutes()+10) ),
        //     // () => this.setState({date: new Date(curDate.setMinutes(curDate.getMinutes()+10) ) }),
        //     5000
        // ); //tick every 5 seconds, add 10 minutes to date
        console.log(curDate)
    }
    componentDidUpdate(prevProps) {
        // if (this.props.active !== prevProps.active) {
        //     console.log('here');
        //     this.setState({date: new Date(this.state.date.setMinutes(this.state.date.getMinutes()+10) ) });
        // }
    }
    render() {
        return (
            <>
                <FormatDate date={this.state.date} />
                <LazyLoadImage placeholderSrc={`TIMER.png`} effect="blur" alt=""  style={{width:'6.4vw', position:'relative'}} src={`TIMER.png`} />
            </>
        )
    }
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