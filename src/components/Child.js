import React from 'react';
function Child({isLoggedIn}){
    return(
     isLoggedIn && <p>You are logged in!</p> 
    )
}
export default Child;