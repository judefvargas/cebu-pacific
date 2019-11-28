import React, { Component } from 'react'
import TopNav from './components/TopNav/TopNav';
import MainNav from './components/MainNav/MainNav';

export default class Main extends Component {
    render() {
        return (
            <>
                <TopNav />
                <MainNav />
            </>
        )
    }
}
