
import React from 'react'
import Header from './Components/header';
import Cards from './Components/Cards';
import CardsDetails from './Components/CardsDetails'
import {Route, Routes } from 'react-router-dom';

function App()
{
    return (<>

        <Header />
            <Routes>
            <Route path='/' element={<Cards />} />
            <Route path='/cart/:id' element={<CardsDetails />} />
            </Routes>
        
    </>)
}

export default App;