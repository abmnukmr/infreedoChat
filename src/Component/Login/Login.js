import React from 'react';
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount = () => {


    }
    valiadteuser=(e)=>{
        e.preventDefault()
        this.props.history.push({
            pathname: '/home',
            state:{user:this.username.value}
   
         })
    }
    render() {

        return (
            <div className="loginDiv">
                <div className="loginBanner">
                    

                    <form onSubmit={this.valiadteuser.bind(this)}>
                            
                            
                        <input ref={username=>this.username=username} type="text" placeholder="username">

                        </input>

                        <input ref={password=>this.password=password} type="password" placeholder="password">

                        </input>
                        <button type="submit" style={{ width:'100%',outline: 'none',background: "transparent", border: 'none' }}>
                                <div className="btnDiv">
                                    <div className="btn">
                                        <div> Login</div>
                                    </div>
                                </div>
                            </button>
                        </form>
                    
                </div>
            </div>
        )
    }




}

export default Login