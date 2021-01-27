import React, { Component } from 'react';
class home extends Component{
    goToWelcomePage = (event) => {
        this.props.history.push("/welcome");
    }
    render(){
        return(
            <div>
                <h1>Welcome to Home Page</h1>
                <button onClick={this.goToWelcomePage}>Go to Welcome Page</button>
                
            </div>
            
            

            

        )
    }
}
export default home;