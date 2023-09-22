import {Container} from 'react-bootstrap';
import './App.css';

import Meunlist from './component/Meunlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './pages/ProductAll';
import { useEffect, useState } from 'react';
import ProductDetail from './pages/ProductDetail'

function App() {
    const [authenticate , setAuthenticate] = useState(false)
    useEffect(()=> {
        console.log(authenticate);
    },[authenticate])
    return (
        <Container>
            <Meunlist authenticate={authenticate} setAuthenticate={setAuthenticate}/>
            <Routes>
                <Route path="/" element={<ProductAll />} />
                <Route path = "/products/:id" element={<ProductDetail />} />
            </Routes>
        </Container>
    );
}

export default App;
