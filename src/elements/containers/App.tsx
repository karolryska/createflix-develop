import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from '../components/app-header/AppHeader';
import AppFooter from '../components/app-footer/AppFooter';
import MoviesList from '../../scenes/movie-list/MoviesList';
import Favorites from '../../scenes/favorites/Favorites';
import Instructions from '../../scenes/instructions/Instructions';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <AppHeader />
                <main>
                    <Routes>
                        <Route path='/movie-list' element={<MoviesList />} />
                        <Route path='/favorites' element={<Favorites />} />
                        <Route path='/instructions' element={<Instructions />} />
                    </Routes>
                </main>
                <AppFooter />
            </div>
        </Router>
    );
}

export default App;
