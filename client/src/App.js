import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alerts from './components/layout/Alerts'
import PrivateRoute from './components/routing/PrivateRoute'
import Navi from './components/layout/Navi'

import Home from './components/pages/Home'
import Info from './components/pages/Info'
import Syllabus from './components/pages/Syllabus'
import Blog from './components/pages/Blog'
import Sidebar from './components/pages/Sidebar'
import Publication from './components/pages/Publication'

import CarouselState from './context/carousel/carouselState'
import SyllabState from './context/syllab/syllabState'
import InfoState from './context/info/infoState'
import BlogState from './context/blog/blogState'
import SidebarState from './context/sidebar/sidebarState'
import PublicationState from './context/publication/publicationState'

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
              <SidebarState>
                <PublicationState>
                  <AlertState>
                    <Router>
                      <Fragment>
                        <Navi />
                        <div className="container mt-20">
                          <Alerts />
                          <Switch>
                            <PrivateRoute exact path="/" component={Home} />
                            <PrivateRoute
                              exact
                              path="/infos"
                              component={Info}
                            />
                            <PrivateRoute
                              exact
                              path="/syllabus"
                              component={Syllabus}
                            />

                            <PrivateRoute exact path="/blog" component={Blog} />
                            <PrivateRoute
                              exact
                              path="/sidebar"
                              component={Sidebar}
                            />
                            <PrivateRoute
                              exact
                              path="/publication"
                              component={Publication}
                            />

                            <Route
                              exact
                              path="/register"
                              component={Register}
                            />
                            <Route exact path="/login" component={Login} />
                          </Switch>
                        </div>
                      </Fragment>
                    </Router>
                  </AlertState>
                </PublicationState>
              </SidebarState>
            </BlogState>
          </SyllabState>
        </InfoState>
      </CarouselState>
    </AuthState>
  )
}

export default App
