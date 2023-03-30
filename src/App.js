import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'

import HomePage from './routes/HomePage/HomePage';
import GamePage from './routes/GamePage/GamePage';

import './App.css';
import MenuHeader from './componets/MenuHeader/MenuHeader';
import Footer from './componets/footer/footer';


import cn from 'classnames'

const App = () => {
  const match = useRouteMatch('/');

  return (
    <Switch>
      <Route path="/404" render={() => (
        <h1>404</h1>
      )} />

      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn('wrapp', { ['isHomePage']: match.isExact })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/contact" exact component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" render={() => (
                <>
                  <h1>About</h1>
                </>
              )} />

              <Route render={() => {
                <Redirect to="/404" />
              }} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>

    </Switch>
  )

}

export default App;