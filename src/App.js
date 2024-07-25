import React from 'react';
import DataFetching from './DataFetching';
import Cond from './Cond';
import {BrowserRouter,Route,Router, Routes} from 'react-router-dom';

function App(props) {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Cond/>}/>
                    <Route path="/data" element={<DataFetching/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;