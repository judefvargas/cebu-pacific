import React, { Component } from 'react'
import TopNav from './components/TopNav/TopNav';
import MainNav from './components/MainNav/MainNav';
import { CUSTOMERS, currentCustomer } from './customer';
import ErrorHandler from './components/ErrorHandler';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCustomer: currentCustomer,
            activeCustomer: this.search(currentCustomer, CUSTOMERS), //pull from storyline variable currentCustomer* with initial 0
            totalCount: CUSTOMERS.length
        }
    }

    incrementActive = () => {
        this.setState({ 
            currentCustomer: this.state.currentCustomer+1,
            activeCustomer: this.search(currentCustomer, CUSTOMERS)
        });
    }

    search = (value, array) => {
        let searchVal = array.find((object) => {
            if (object.id === value) return true;
            return false;
        })
        return searchVal;
    }
    render() {
        return (
            <>
                <ErrorHandler>
                <TopNav next={ this.incrementActive } total={this.state.totalCount} active={this.state.activeCustomer} />
                <MainNav next={ this.incrementActive } active={this.state.activeCustomer} />
                </ErrorHandler>
            </>
        )
    }
}
