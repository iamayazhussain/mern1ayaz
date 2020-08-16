import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navi from './components/layout/Navi'
import Home from './components/pages/Home'
import Info from './components/pages/Info'
import Syllabus from './components/pages/Syllabus'
import Blog from './components/pages/Blog'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alerts from './components/layout/Alerts'
import PrivateRoute from './components/routing/PrivateRoute'
import CarouselState from './context/carousel/carouselState'
import SyllabState from './context/syllab/syllabState'
import InfoState from './context/info/infoState'
import BlogState from './context/blog/blogState'

import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import './App.css'

const App = () => {
  return (
    <AuthState>
      <CarouselState>
        <InfoState>
          <SyllabState>
            <BlogState>
              <AlertState>
                <Router>
                  <Fragment>
                    <Navi />
                    <div className="container mt-20">
                      <Alerts />
                      <Switch>
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute exact path="/infos" component={Info} />
                        <PrivateRoute
                          exact
                          path="/syllabus"
                          component={Syllabus}
                        />
                        <PrivateRoute exact path="/blog" component={Blog} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                      </Switch>
                    </div>
                  </Fragment>
                </Router>
              </AlertState>
            </BlogState>
          </SyllabState>
        </InfoState>
      </CarouselState>
    </AuthState>
  )
}

export default App
