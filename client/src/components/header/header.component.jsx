import React from "react";
import { connect } from "react-redux";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart}) =>(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contacts'>CONTACTS</OptionLink>
            {
                currentUser ?
                (<OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>)
                :
                (<OptionLink to='/signin'>SIGN IN</OptionLink>)
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }

        
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch =>({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);


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