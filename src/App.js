import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header'
import Notice from './component/Notice'
import Global from './component/Global';
import Countries from './component/Countries';
import Footer from './component/Footer';

function App() {
  const country = ['kr', 'us', 'in', 'br', 'ru', 'fr', 'uk', 'tr'];
  return (
    <BrowserRouter>
      <div className="App">
      <div className='background'></div>
      <Header />
        <Notice />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL+'/'}>
            <Redirect to='kr' />
          </Route>
          {country.map(function(item){
            return (
              <Route key={item} path={process.env.PUBLIC_URL+'/'+item}>
                <Countries country={item} />
              </Route>
            )
          })}
          <Route path={process.env.PUBLIC_URL+'/global'}>
            <Global />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
