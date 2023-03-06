import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginPage from '../components/login/loginPage';
import RegisterPage from '../components/register/registerPage';
import DashboardPage from '../components/dashboard/dashboardPage';
import Listing from '../components/dashboard/listing';
import ErrorBoundary from '../error/ErrorBoundary';
import Sidebar from '../components/sidebar/sidebar';



 


class App extends Component {
  render() {
    return (
    
        <BrowserRouter>


               
<ErrorBoundary>  <Routes> <Route path='/' exact element={<Listing />} />  </Routes></ErrorBoundary>
          
              <Routes> <Route path='/register' element={<RegisterPage />} /></Routes>
              <Routes> <Route path='/login' element={<LoginPage />} /></Routes>
              <Routes> <Route path='/sidebar/listing' element={<Listing />} /></Routes>
              

          <Routes> <Route
            path='/sidebar'
            element={
              <PrivateRoute>
                <Sidebar/>
              </PrivateRoute>
            }
          />
          </Routes>

          

        </BrowserRouter>
        
      
    );
  }
}

export default App;