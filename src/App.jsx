import './stars.scss';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router';

const App = () => {
    return (        
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;