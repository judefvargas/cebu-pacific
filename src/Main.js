import React, { Component } from 'react'
import TopNav from './components/TopNav/TopNav';
import MainNav from './components/MainNav/MainNav';
import { CUSTOMERS, currentCustomer, isShowModal, } from './customer';
import ErrorHandler from './components/ErrorHandler';
import { searchNext, } from './components/storylineActions';

export default class Main extends Component {
    constructor(props) {
        super(props);
        let current = localStorage.getItem('CHAT_curCustomer') ?? currentCustomer;
        let actualDone = localStorage.getItem('CHAT_customers_done') ?? [];
        current = parseInt(current);
        if (actualDone.length!==0) {
          actualDone = JSON.parse(actualDone);
        } 
        this.state = {
          currentCustomer:current,
          activeCustomer: this.search(current, CUSTOMERS), //pull from storyline variable currentCustomer* with initial 0
          totalCount: CUSTOMERS.length,
          isShowModal,
          doneCustomers:actualDone
        }
    }
    incrementActive = () => {
        const { currentCustomer, totalCount, doneCustomers, } = this.state;
        let currentDone = [...doneCustomers, currentCustomer];

        if (currentDone.length === totalCount) {
            // localStorage.setItem('CHAT_customers_done', JSON.stringify(currentDone));
            this.setState({isShowModal: true});
            // player.SetVar('CARGO_showModal', true);
        } else {
            // player.SetVar('CHAT_customers_done', currentDone.toString());
            // player.SetVar('CHAT_curCustomer', currentCustomer+1);
            localStorage.setItem('CHAT_customers_done', JSON.stringify(currentDone));
            let next = searchNext(currentCustomer, doneCustomers);
            localStorage.setItem('CHAT_curCustomer', next);
            this.setState(state => ({ 
                currentCustomer: next,
                activeCustomer: this.search(next, CUSTOMERS),
                doneCustomers: currentDone
            }));
        }
    }

    

    updateActive = (id) => {
        // player.SetVar('CHAT_customers_done', currentDone.toString());
        // player.SetVar('CHAT_curCustomer', currentCustomer+1);
        localStorage.setItem('CHAT_curCustomer', id);
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
                <TopNav next={ this.incrementActive } 
                  done={doneCustomers} 
                  total={totalCount} 
                  active={activeCustomer} 
                  updateActive={(id)=>{this.updateActive(id)}} />
                <MainNav next={ this.incrementActive } active={ activeCustomer } done={doneCustomers}  />
                </ErrorHandler>
            </>
        )
    }
}

const isActualCustomer = (custArr, checkId) => {
  custArr.findIndex((object) => {
      
    console.log(parseInt(object.id) === checkId);
  })
}