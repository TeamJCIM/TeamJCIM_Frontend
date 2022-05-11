import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotId from './pages/ForgotId';
import ForgotPw from './pages/ForgotPw';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Predict from './pages/Predict';
import Profile from './pages/Profile';
import ChangePassword from './pages/Profile/ChangePassword';
import ChangeProfile from './pages/Profile/ChangeProfile';
import TodayUsage from './pages/TodayUsage';
import MonthUsage from './pages/MonthUsage';
import YearUsage from './pages/YearUsage';
import Safety from './pages/Safety';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgotid" component={ForgotId} />
            <Route path="/forgotpw" component={ForgotPw} />
            <Route path="/changepassword" component={ChangePassword} />
            <Route path="/signup" component={SignUp} />
            <Route path="/changeprofile" component={ChangeProfile} />
            <Route path="/profile" component={Profile} />
            <Route path="/predict" component={Predict} />
            <Route path="/todayusage" component={TodayUsage} />
            <Route path="/monthusage" component={MonthUsage} />
            <Route path="/yearusage" component={YearUsage} />
            <Route path="/safety" component={Safety} />
            <Route path="/" component={Safety} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
