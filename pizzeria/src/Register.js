import axios from "axios";
import React,{ Component } from "react";

class Register extends Component{
    constructor(){
        super();
        this.state = {
            fname : '',pass : '',phone : '',country : 'Select',
            fnameerr : '',passerr : '',phoneerr : '',countryerr : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFname = this.handleFname.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
    }
    handleFname(event){
        this.setState({
            fname : event.target.value,
            fnameerr : ''
        })
    }
    handlePass(event){
        this.setState({
            pass : event.target.value,
            passerr : ''
        })
    }
    handlePhone(event){
        this.setState({
            phone : event.target.value,
            phoneerr : ''
        })
    }
    handleCountry(event){
        this.setState({
            country : event.target.value,
            countryerr : ''
        })
    }
    handleSubmit(event){
        var error = false;
        var phoneno = /^\d{10}$/;
       if(this.state.fname === ''){
        error = true;
        this.setState({
            fnameerr : '--Please Enter First Name'
        })
       }
       if(this.state.pass === ''){
        error = true;
        this.setState({
            passerr : '--Please Enter Last Name'
        })
       }
       if(this.state.phone === '' || !this.state.phone.match(phoneno)){
        error = true;
        this.setState({
            phoneerr : '--Please Enter valid Phone'
        })
       }
       if(this.state.country === 'Select'){
        error = true;
        this.setState({
            countryerr : '--Please Select City'
        })
       }
       if(!error){
           alert("Registration Successful with credentials.");
           const body = {
            name:this.refs.fname.value,
            password:this.refs.pass.value,
        }
        const header = {"Content-type":"application/x-www-form-urlencoded"}
        axios.post("http://localhost:4000/register",body,{header})
        .then((res)=>console.log("Data has been inserted."))

        this.props.history.push('/');
       }
    }

    // sendData(event){
    //     const body = {
    //         name:this.refs.fname.value,
    //         password:this.refs.pass.value,
    //     }
    //     const header = {"Content-type":"application/x-www-form-urlencoded"}
    //     axios.post("http://localhost:4000/register",body,{header})
    //     .then((res)=>console.log("Data has been inserted."))
    // }

    render(){
        return(
            <div align="center" style={{backgroundColor:"lightgray",width:"60%",marginLeft:"20%"}}>
                <h1 style={{color:'green'}}>Customer Form</h1>
                <label>Customer Name</label><span style={{color:'red'}}>{this.state.fnameerr}</span><br/><br/>
                <input type="text" ref='fname' placeholder="Add Name" value={this.state.fname} onChange={this.handleFname} style={{width:"60%"}}/><br/><br/>
                <label>Password</label><span style={{color:'red'}}>{this.state.passerr}</span><br/><br/>
                <input type="text" ref='pass' placeholder="Enter the password" value={this.state.pass} onChange={this.handlePass} style={{width:"60%"}}/><br/><br/>
                <label>Customer Phone</label><span style={{color:'red'}}>{this.state.phoneerr}</span><br/><br/>
                <input type="text" placeholder="Add phone" value={this.state.phone} onChange={this.handlePhone} style={{width:"60%"}}/><br/><br/>
                <label>City</label><span style={{color:'red'}}>{this.state.countryerr}</span><br/><br/>
                <select value={this.state.country} onChange={this.handleCountry} style={{width:"60%"}}>
                    <option disabled selected>Select</option>
                    <option>Bengaluru</option>
                    <option>Mumbai</option>
                    <option>Pune</option>
                    <option>Delhi</option>
                </select><br/><br/>
                <input type="submit" value="Submit" onClick={this.handleSubmit} style={{backgroundColor:"green",color:"white",width:"60%"}}/>
                <br/><br/>
            </div>
        )
    }
}

export default Register;