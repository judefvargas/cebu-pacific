import React, { Component } from 'react'
import TopNav from './components/TopNav/TopNav';
import MainNav from './components/MainNav/MainNav';
import { player, CUSTOMERS, currentCustomer, doneCustomers } from './customer';
import ErrorHandler from './components/ErrorHandler';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCustomer,
            activeCustomer: this.search(currentCustomer, CUSTOMERS), //pull from storyline variable currentCustomer* with initial 0
            totalCount: CUSTOMERS.length,
            // isShowModal,
            doneCustomers
        }
    }
    incrementActive = () => {
        const { currentCustomer, totalCount } = this.state;
        if ((currentCustomer+1) > totalCount) {
            // this.setState({isShowModal: true});
        } else {
            let currentDone = this.state.doneCustomers;
            currentDone.push(currentCustomer);
            player.SetVar('CHAT_customers_done', currentDone.toString());
            player.SetVar('CHAT_curCustomer', currentCustomer+1);
            this.setState(state => ({ 
                currentCustomer: currentCustomer+1,
                activeCustomer: this.search(this.state.currentCustomer+1, CUSTOMERS),
                doneCustomers: [...state.doneCustomers, state.currentCustomer]
            }));
        }
    }

    updateActive = (id) => {
        this.setState({
            currentCustomer: id,
            activeCustomer: this.search(id, CUSTOMERS)
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
        let { doneCustomers, totalCount, activeCustomer } = this.state;
        return (
            <>
                <ErrorHandler>
                <TopNav next={ this.incrementActive } done={doneCustomers} total={totalCount} active={activeCustomer} updateActive={(id)=>{this.updateActive(id)}} />
                <MainNav next={ this.incrementActive } active={ activeCustomer } />
                </ErrorHandler>
            </>
        )
    }
}
