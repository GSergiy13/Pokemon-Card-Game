import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import { useState } from 'react';
import HomePage from './routes/HomePage/HomePage';
import GamePage from './routes/GamePage/GamePage';

import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/game" component={GamePage} />
        <Route path="/about" render={() => (
          <>
            <h1>Abotu</h1>
          </>
        )} />
        <Route render={() => (
          <>
            <h1>404</h1>
          </>
        )
        } />
      </Switch>
    </BrowserRouter>
  )

  // const [page, setPage] = useState('app');

  // const handlerChangesPage = (page) => {
  //   setPage(page);
  // }

  // const hendlerChangeHomePage = (page) => [
  //   setPage(page)
  // ]

  // switch (page) {
  //   case 'app':
  //     return <HomePage handlerChangePage={handlerChangesPage} />
  //   case 'game':
  //     return <GamePage hendlerChange={hendlerChangeHomePage} />
  //   default:
  //     return <HomePage />
  // }
}

export default App;