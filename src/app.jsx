import {BrowserRouter, Switch, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {CarPage} from "./pages/CarPage";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/car' component={CarPage}/>
            </Switch>
        </BrowserRouter>
    )
}