import React, { Component } from 'react'
import TopNav from './components/TopNav/TopNav';
import MainNav from './components/MainNav/MainNav';
import BottomNav from './components/BottomNav/BottomNav';

export default class Main extends Component {
    render() {
        return (
            <>
                <TopNav />
                <MainNav />
                <BottomNav />
            </>
        )
    }
}
