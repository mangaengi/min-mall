import {Container} from 'react-bootstrap';
import './App.css';
import Meunlist from './component/Meunlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Heritage from './pages/Heritage';
import Changgyeong from './pages/Changgyeong';

function App() {
  return (
    <Container>
      <Meunlist />
      <Routes>
        <Route path="/" element={<Heritage />} />
        <Route path="/Changgyeong" element={<Changgyeong />} />
      </Routes>
    </Container>
  );
}

export default App;
