import React, { Component } from 'react'
import TopNav from './components/TopNav/TopNav';
import MainNav from './components/MainNav/MainNav';
import { CUSTOMERS, currentCustomer, isShowModal, doneCustomers } from './customer';
import ErrorHandler from './components/ErrorHandler';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCustomer,
            activeCustomer: this.search(currentCustomer, CUSTOMERS), //pull from storyline variable currentCustomer* with initial 0
            totalCount: CUSTOMERS.length,
            isShowModal,
            doneCustomers
        }
    }
    incrementActive = () => {
        const { currentCustomer, totalCount } = this.state;
        if ((currentCustomer+1) > totalCount) {
            this.setState({isShowModal: true});
            console.log('show modal here');
        } else {
            let done = this.state.doneCustomers;
            done.push(this.state.currentCustomer);
            this.setState({ 
                currentCustomer: currentCustomer+1,
                activeCustomer: this.search(this.state.currentCustomer+1, CUSTOMERS),
                doneCustomers: done
            });
        }
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
                <TopNav next={ this.incrementActive } done={this.state.doneCustomers} total={this.state.totalCount} active={this.state.activeCustomer} />
                <MainNav next={ this.incrementActive } active={this.state.activeCustomer} />
                </ErrorHandler>
            </>
        )
    }
}
