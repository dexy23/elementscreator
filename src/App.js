import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ElementsList from './components/ElementsList'
import ElementsCreator from './components/ElementsCreator'
import Comments from './components/Comments'

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route exact path={'/'} component={ElementsList} />
            <Route path='/newitem' component={ElementsCreator} />
            <Route path='/comments' component={Comments} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
