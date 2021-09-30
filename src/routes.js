import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Repositorie from './pages/Repositorie';

export function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/repositorio/:repositorio" component={Repositorie}/>
            </Switch>
        </BrowserRouter>
    )
}