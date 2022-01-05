import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession} from './redux/user/user.actions';
import { selectCurrentUser} from './redux/user/user.selector';
//import { selectCollectionsForPreview } from './redux/shop/shop.selector';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkUserSession())
  },[dispatch]);

    return (
    <div>
      <Header />
      <Switch>
        <Route exact path ='/' component={HomePage}/>
        <Route path ='/shop' component={ShopPage}/>
        <Route exact path ='/checkout' component={CheckoutPage} />
        <Route exact path ='/signin' render={() => currentUser ? (<Redirect to='/' />): (<SignInAndSignUpPage />)}/>
      </Switch>
    </div>
    );
}


export default App;

/**
 * App does not need currentUser anymore so we dont need any state to props.
 * mapDispatchToProps will receive the dispatch and 
 * the function to use as action
 * dispatch is a way for redux to know that whatever object you are passing me is going to be an action object and i'm
 * going to pass to every reducer
 */