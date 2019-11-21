import React, { Component } from 'react'
import './bottomnav.css';
import Button from 'react-bootstrap/Button';

export default class BottomNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 'Ano ang isasagot sa customer?'
        }
    }
    btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    render() {
        return (
            <div className="row grid-bottom-nav">
                <div className="col col-md-2 ">
                    
                </div>
                <div className="col col-md-10 decisionPane">
                    <div className="row text1">
                        <div className="col-md-8">
                        { this.state.question }
                        </div>
                        <div className="col-md-4 alignLeft">
                            <Button onClick={this.btnClick.bind(this, 'yes')} bsPrefix="btnnav btn" variant="success" size="lg">YES</Button>
                            <Button onClick={this.btnClick.bind(this, 'no')} bsPrefix="btnnav btn" variant="danger" size="lg">NO</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
