import React from 'react';

const {    
        HomeButton,    
        // ProfileButton,
        // MatcherButton,
        // HistoryButton,
        // StatsButton,
        LoginButton,
        RegisterButton,
        // LogOutButton
      } = require('../components/buttons.js');

let Navbar = (props) => {
    
    return (
    // props.auth.isAuthenticated ?
        // <div>
        //     <MatcherButton /> 
        //     <ProfileButton />
        //     <HistoryButton /> 
        //     <StatsButton />
        //     {/* <LogOutButton onClick={this.handleLogoutClick}/>  */}
        // </div>
    // :
        <div>
            <HomeButton /> 
            <LoginButton />  
            <RegisterButton />
        </div>
    );
};

export default Navbar;
