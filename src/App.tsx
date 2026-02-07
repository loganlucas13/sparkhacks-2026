import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './components/background';
import Intro from './components/pages/intro';
import Game from './components/pages/game';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Background />}>
                        <Route path="/" element={<Intro />} />
                        <Route path="/events" element={<Game />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
