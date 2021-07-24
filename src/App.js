import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./containers/home";
import AboutUs from "./containers/about-us";
import NotFound from "./containers/not-found";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
