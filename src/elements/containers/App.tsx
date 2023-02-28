import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from '../components/app-header/AppHeader';
import AppFooter from '../components/app-footer/AppFooter';
import Movies from './Movies';
import Favorites from './Favorites';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <AppHeader />
                <main>
                    <Routes>
                        <Route path='/movie-list' element={<Movies />} />
                        <Route path='/favorites' element={<Favorites />} />
                    </Routes>
                </main>
                <AppFooter />
            </div>
        </Router>
    );
}

export default App;
