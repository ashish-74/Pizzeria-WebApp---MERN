import { Component } from "react";
import {Link} from 'react-router-dom';
import pizza from './PizzeriaLogo.png';

class NavBar extends Component{

    onLogin=()=>{
        alert('You have been successfully logged out.')
    }
    
    render(){
        return(
            <div style={{width:'100%',backgroundColor:'black',color:'orange'}}>
                <b>Pizzeria  | </b> &nbsp;&nbsp;&nbsp;
                <Link to="/"><b>Login</b></Link>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to='/intro'><img style={{width:'80px',height:'50px'}} src={pizza} alt='pizzeria'></img></Link>&nbsp;&nbsp;&nbsp;
                <Link to="/order"><b>Order Pizza</b> </Link>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to="/build"><b>Build Ur Pizza</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 
                <button type='button' class="glyphicon glyphicon-shopping-cart" style={{width:'150px',height:'40px',textAlign:'right', color:'white',backgroundColor:'orange',borderRadius:'5px'}}><Link to="/cart"><b>&nbsp;Shopping Cart</b></Link></button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       
                <Link to="/"><button type='submit' style={{backgroundColor:'red',color:'white',width:'60px',height:'30px'}} onClick={this.onLogin}>LogOut</button></Link>
            </div>
        )
    }
}

export default NavBar;

