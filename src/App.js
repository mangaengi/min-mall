import {Container} from 'react-bootstrap';
import './App.css';



import Meunlist from './component/Meunlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Heritage from './pages/Heritage';
import { useEffect, useState } from 'react';

function App() {
    const [authenticate , setAuthenticate] = useState(false)
    useEffect(()=> {
        console.log(authenticate);
    },[authenticate])
    return (
        <Container>
            <Meunlist authenticate={authenticate} setAuthenticate={setAuthenticate}/>
            <Routes>
                <Route path="/" element={<Heritage />} />

            </Routes>
        </Container>
    );
}

export default App;
