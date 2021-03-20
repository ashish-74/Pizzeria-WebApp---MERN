import React,{ Component } from "react";
import axios from 'axios';

class Cart extends Component{

    constructor(){
        super();       
        
        this.state={
            cart:[],
            total:0,
        }       
    }
    
    onConfirm=()=>{
        alert("Thank You for ordering. Your order is placed and it will get delivered in 45 mins.");
        this.setState({cart:[]});      
        this.setState({total:0});
    }

    onMenu=()=>{
        this.props.history.push('/order');
    }

    componentDidMount(){
        axios.get('http://localhost:4000/getCartList').then((res)=> 
        this.setState({cart:res.data}))
        .catch((err)=>console.log(err))                
    }

    Calc(){
        for(let i=0;i<this.state.cart.length;i++){             
            var a=0;   
            a=Number(this.state.cart[i].price);
            this.state.total=this.state.total+a;            
        }
        console.log(this.state.total);    
        
    }

    render(){       

        let showData = this.state.cart.map((a)=>         
        <tr>
            <td align='center'><img src={a.image} alt="cartimage" style={{width:'100px',height:'100px'}}></img></td>
            <td align='center'><b>{a.name}{a.tname}</b></td>            
            <td align='center'><b>{a.price}</b></td>
            <td><b>Qty:</b> <input type='number' defaultValue='1' size='1'></input></td>            
        </tr>
        )

        for(let i=0;i<this.state.cart.length;i++){             
            var a=0;   
            a=Number(this.state.cart[i].price);
            this.state.total=this.state.total+a;            
        }        

        return(
            <div>
                <div align='center'>
                    <h4 style={{color:'red'}}><b>Cart Items</b></h4>
                <br></br>
                <table style={{width:'40%',height:'100%'}} border="2px">
                {showData}
                </table>
                <h4><b>Total Cost :</b>&nbsp;{this.state.total}</h4>
                <br></br>                       
                </div>
                <div align='center'>
                <button style={{backgroundColor:'yellow',color: 'black'}} onClick={this.onMenu}>Goto Menu</button>&nbsp;&nbsp;&nbsp;
                <button style={{backgroundColor:'green',color:'white'}} onClick={this.onConfirm}><b>Confirm Order</b></button>
                </div>                     
            </div>            
        )
    }
}

export default Cart;

