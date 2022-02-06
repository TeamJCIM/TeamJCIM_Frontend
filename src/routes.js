import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Pages
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Cards from './pages/Cards';
import Charts from './pages/Charts';
import Predict from './pages/Predict';
import TodayUsage from './pages/TodayUsage';
import MonthUsage from './pages/MonthUsage';
import YearUsage from './pages/YearUsage'
// import Profile from './pages/Profile';
// import ResetPassword from './pages/ResetPassword';
// import Safety from './pages/Safety';
// import LookUp_Today from './pages/LookUp';
// import LookUp_Year from './pages/LookUp';
// import LookUp_Month from './pages/LookUp';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/cards" component={Cards} />
            <Route path="/charts" component={Charts} />
            <Route path="/predict" component={Predict} />
            <Route path="/todayusage" component={TodayUsage}/>
            <Route path="/monthusage" component={MonthUsage}/>
            <Route path="/yearusage" component={YearUsage}/>
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
