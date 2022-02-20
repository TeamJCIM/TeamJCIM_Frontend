import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Pages
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Predict from './pages/Predict';
import Profile from './pages/Profile';
import ResetPassword from './pages/ResetPassword';
import TodayUsage from './pages/TodayUsage';
import MonthUsage from './pages/MonthUsage';
import YearUsage from './pages/YearUsage';
import Safety from './pages/Safety';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/ResetPassword" component={ResetPassword} />
            <Route path="/profile" component={Profile} />
            <Route path="/predict" component={Predict} />
            <Route path="/todayusage" component={TodayUsage} />
            <Route path="/monthusage" component={MonthUsage} />
            <Route path="/yearusage" component={YearUsage} />
            <Route path="/safety" component={Safety} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
