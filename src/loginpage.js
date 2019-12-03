import React, { Component } from 'react';

class loginpage extends Component {
    render() {
        return (
            <div class="row justify-content-md-center">
                <div class="col text-center">
                    <form class="form-signin">
              
                        <img class="mb-4" src={logo} alt="" width="100" height="100"/>
                        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
                        <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
              // candidate form //
        )
    
    }
}

export default loginpage;