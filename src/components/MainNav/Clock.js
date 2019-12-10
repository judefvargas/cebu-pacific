import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            date: new Date(2019, 10, 14, 10, 40)
            // date: new Date(2019, 10, 14, 10, 40, 20),
        }
        setInterval(
            () => this.setState({date: new Date(this.state.date.setMinutes(this.state.date.getMinutes()+10) ) }),
            5000
        ); //tick every 5 seconds, add 10 minutes to date
    }
    
    render() {
        return (
            <>
                <FormatDate date={this.state.date} />
                <img src="TIMER.png" alt="" style={{width:'6.4vw', position:'relative'}} />
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