import React, { Fragment } from 'react';
import Home from '../src/component/Home/Home'
import Header from './component/Home/Header';
import Navs from './component/navs/Navs';
const App = () => {
    return (
        <Fragment>
            <Navs />
            <Home />
        </Fragment>
    );
}

export default App;
