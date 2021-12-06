import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import './header.styles.scss';

const Header = ({ currentUser}) =>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contacts'>CONTACTS</Link>
            {
                currentUser ?
                <div className='option' onClick={ () => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
);

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);


/**
 * NOTES ON REDUX - CONNECT
 * Higher order component that lets us modify our component to get access to things related to redux
 * Higher order components are just functions that take components as arguments and then return a new souped up component
 * With connect we are passing 2 functions (mapStateToProps and mapDispatchToProps), the second being optional and that we'll give us back another higher component
 *  that we pass our header
 * 
 * First pass the function that allows us to access the state, with the state being our root-reducer.
 * so connect has firstly the object with the state and pass this to the header component
 */