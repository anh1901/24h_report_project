import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AdminLayout, UserLayout } from "./containers";
import { Login, Register, Page404, Page500 } from "./views/Pages";
// Import Flag Icons Set
import "flag-icon-css/css/flag-icon.min.css";
// Import Font Awesome Icons Set
import "@coreui/icons/css/coreui-icons.min.css";
import "font-awesome/css/font-awesome.min.css";
// Import Simple Line Icons Set
import "simple-line-icons/css/simple-line-icons.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
// Import Main styles for this application
import "./scss/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UserLayout} name="24hReport" />
          <Route path="/home" component={UserLayout} name="Home" />
          <Route
            path="/postDetail/:id"
            name="Post Detail"
            component={UserLayout}
          />
          <Route path="/sendReport" component={UserLayout} name="Gửi báo cáo" />

          <Route path="/faq" component={UserLayout} name="FAQ" />
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            path="/register"
            name="Register Page"
            component={Register}
          />
          {/* User  */}
          <Route path="/viewReport" component={UserLayout} name="Xem báo cáo" />
          {/* Admin */}
          <Route
            exact
            path="/admin"
            name="Admin"
            render={(props) => <AdminLayout {...props} />}
          />
          <Route path="/dashboard" name="Dashboard" component={AdminLayout} />
          <Route path="/users" name="Users" component={AdminLayout} />
          <Route path="/reports/new" name="New Reports" component={AdminLayout} />
          <Route path="/reports/pending" name="Pending Reports" component={AdminLayout} />
          <Route path="/reports/approved" name="Approved Reports" component={AdminLayout} />
          <Route path="/reports/denied" name="Denied Reports" component={AdminLayout} />
          <Route path="/create-post" name="Create Post" component={AdminLayout} />
          <Route path="/my-posts" name="My Posts" component={AdminLayout} />
          <Route path="/published-posts" name="Published Posts" component={AdminLayout} />
          <Route path="/unpublished-posts" name="Unpublished Posts" component={AdminLayout} />
          <Route path="/my-tasks" name="My Tasks" component={AdminLayout} />
          <Route path="/tasks-management" name="Tasks management" component={AdminLayout} />

          {/*  */}
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="*" name="Page 404" component={Page404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
