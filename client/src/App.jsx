import './App.css';
import TabPanel from './modules/shared/TabPanel';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Footer from './modules/shared/Footer';
import MainPage from './modules/Main/MainPage';
import { useState } from 'react';
import Paths from './modules/shared/DefaultPaths'
import SignInPage from './modules/SignIn/SignInPage';
import SignUpPage from './modules/SignUp/SignUpPage';
import Header from './modules/shared/Header';
import ProfilePage from './modules/Profile/ProfilePage';
import AboutPage from './modules/About/AboutPage';

import RandomInteger from './modules/Functional/RandomInteger';
import RandomReal from './modules/Functional/RandomReal';
import RandomArray from './modules/Functional/RandomArray';
import SinRangePng from './modules/Functional/SinRangePng';
import CosRangePng from './modules/Functional/CosRangePng';
import TgRangePng from './modules/Functional/TgRangePng';
import CtgRangePng from './modules/Functional/CtgRangePng';
import QuadraticEquationPng from './modules/Functional/QuadraticEquationPng';
import CubicEquationPng from './modules/Functional/CubicEquationPng';
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";

const history = createBrowserHistory();

function App() {
  const location = window.location.pathname;

  const { isAuthenticated, verify, signOut, ready } = useAuth()

  const getIndex = () => {
    for (let index = 0; index < Paths.length; index++) {
      if (location === Paths[index]) {
        return index;
      }
    }
  }
  const [tab, setTab] = useState(getIndex());

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      verify,
      signOut
    }}>
      <Router history={history}>
        <Header setTab={(number) => setTab(number)} />
        {isAuthenticated
          ?
          <Switch>
            <Route path={Paths[1]}>
              <TabPanel tab={tab} setTab={(number) => setTab(number)} />
              <RandomInteger />
              <hr />
              <RandomReal />
              <hr />
              <RandomArray />
              <hr />
              <SinRangePng />
              <hr />
              <CosRangePng />
              <hr />
              <TgRangePng />
              <hr />
              <CtgRangePng />
              <hr />
              <QuadraticEquationPng />
              <hr />
              <CubicEquationPng />
              <hr />
            </Route>
            <Route path={Paths[2]}>
              <TabPanel tab={tab} setTab={(number) => setTab(number)} />
              <AboutPage />
            </Route>
            <Route key={5} path={Paths[5]}>
              <ProfilePage setTab={(number) => setTab(number)} />
            </Route>
            <Route path={Paths[0]}>
              <TabPanel tab={tab} setTab={(number) => setTab(number)} />
              <div
                margin-bottom="20px">
                <MainPage setTab={(number) => setTab(number)} />
              </div>
            </Route>
            <Redirect to='/' />
          </Switch>
          :
          <Switch>
            <Route key={3} path={Paths[3]}>
              <SignInPage setTab={(number) => setTab(number)} />
            </Route>
            <Route key={4} path={Paths[4]}>
              <SignUpPage setTab={(number) => setTab(number)} />
            </Route>
            <Redirect to='/signIn' />
          </Switch>
        }
        <Footer></Footer>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
