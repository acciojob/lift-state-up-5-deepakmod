import React, { useState } from 'react';
import Child from './Child';

function Parent(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>
            { !isLoggedIn && <div>
                <h1>Parent Component</h1>
                <form>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='name'/>

                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password'/>

                    <button onClick={()=>{setIsLoggedIn(true)}}>Login</button>
                </form>
            </div>}
            <Child isLoggedIn={isLoggedIn}/>
        </div>
    )
}

export default Parent;