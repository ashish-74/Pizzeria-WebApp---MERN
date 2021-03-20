import React,{ Component } from "react";
import {Link} from 'react-router-dom';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            uname : '',password:'',
            unameerr : '',passeerr : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUname = this.handleUname.bind(this);
        this.handlePass = this.handlePass.bind(this);        
    }
    handleUname(event){
        this.setState({
            uname : event.target.value,
            unameerr : ''
        })
    }
    handlePass(event){
        this.setState({
            password : event.target.value,
            passeerr : ''
        })
    }

    handleSubmit(event){
        var error = false;
        // var email= /^\w{5,10}$/;
        // var password1=/^\w{7,10}$/;

       if(this.state.uname === ''){
        error = true;
        this.setState({
            unameerr : '--Please enter Username'
        })
       }
       if(this.state.password === ''){
        error = true;
        this.setState({
            passerr : '--Please enter Password'
        })
       }
    // if(this.state.uname.match(email) || !this.state.password.match(password1)){
    //     error = true;
    //     this.setState({
    //          passerr : '--Please Enter valid password'
    //     })
    // }

    // if(!this.state.uname.match(email) || this.state.password.match(password1)){
    //     error = true;
    //     this.setState({
    //          unameerr : '--Please Enter valid username'
    //     })
    // }

       if(!error){
           alert(this.state.uname + " is logged in.");
           this.props.history.push('/intro');
       }
    }
    render(){
        return(
            <div align="center" style={{backgroundColor:'lightblue',width:"45%",marginLeft:"25%",height:'350px'}}>
                <h1 style={{color:'crimson'}}><i>Login to Pizzeria !</i></h1><br></br>
                <label>Username / Email-id</label><span style={{color:'red'}}>{this.state.unameerr}</span><br/>
                <input type="text" placeholder="Enter username / email-id" value={this.state.uname} onChange={this.handleUname} style={{width:"50%"}}/><br/><br/>
                <label>Pasword</label><span style={{color:'red'}}>{this.state.passerr}</span><br/>
                <input type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handlePass} style={{width:"50%"}}/><br/><br/>
                <input type="submit" value="Submit" onClick={this.handleSubmit} style={{backgroundColor:"green",color:"white",width:"20%"}}/>
                <br/><br/>
                New User ?&nbsp;<Link to='/register'><b>Sign Up</b></Link>
                <br/><br/>
                <Link to='/order'><button style={{backgroundColor:'blue',color:'white'}} type='submit'>Goto Menu</button></Link>
            </div>
        )
    }
}

export default Login;