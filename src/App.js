import { useState } from 'react';
import HomePage from './routes/HomePage/HomePage';
import GamePage from './routes/GamePage/GamePage';

import './App.css';

const App = () => {
  const [page, setPage] = useState('app');

  const handlerChangesPage = (page) => {
    setPage(page);
  }

  const hendlerChangeHomePage = (page) => [
    setPage(page)
  ]

  switch (page) {
    case 'app':
      return <HomePage handlerChangePage={handlerChangesPage} />
    case 'game':
      return <GamePage hendlerChange={hendlerChangeHomePage} />
    default:
      return <HomePage />
  }
}

export default App;