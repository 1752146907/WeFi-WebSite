import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './App';
import About from './view/about';
import Book from './view/book';
import BookWitePaper from './view/book/whitePaper';
import * as serviceWorker from './serviceWorker';
import {Router as HashRouter , Route, Switch, Redirect } from "react-router-dom";
import {createHashHistory} from 'history';
// import {createBrowserHistory} from 'history';
const history = createHashHistory();


ReactDOM.render(
    <HashRouter history={history}>
        {/*<Router>*/}
            <Switch>
                <Route exact path="/" render={()=>(<Redirect to='/index'/>)}/>
                <Route path="/index" component={Index}/>
                <Route path="/about" component={About}/>
                <Route path="/book/index" component={Book}/>
                <Route path="/book/witePaper" component={BookWitePaper}/>
            </Switch>
        {/*</Router>*/}
    </HashRouter>, document.getElementById('root'));

document.getElementById("loading").remove();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
