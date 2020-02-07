import React, { Component } from 'react'
import TopNav from './components/TopNav/TopNav';
import MainNav from './components/MainNav/MainNav';
import { player, CUSTOMERS, currentCustomer, isShowModal, doneCustomers } from './customer';
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
        const { currentCustomer, totalCount, doneCustomers } = this.state;
        if ((currentCustomer+1) > totalCount) {
            this.setState({isShowModal: true});
        } else {
            let done = doneCustomers;
            player.SetVar('CARGO_customers_done', done);
            done.push(currentCustomer);
            player.SetVar('CARGO_curCustomer', currentCustomer+1);
            this.setState({ 
                currentCustomer: currentCustomer+1,
                activeCustomer: this.search(currentCustomer+1, CUSTOMERS),
                doneCustomers: done
            });
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
        return (
            <>
                <ErrorHandler>
                <TopNav next={ this.incrementActive } done={this.state.doneCustomers} total={this.state.totalCount} active={this.state.activeCustomer} updateActive={(id)=>{this.updateActive(id)}} />
                <MainNav next={ this.incrementActive } active={this.state.activeCustomer} />
                </ErrorHandler>
            </>
        )
    }
}
