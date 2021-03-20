import './App.css';
import React,{ Component  } from "react";
import axios from 'axios';
class Order extends Component{
        constructor() {
            super();
            this.state={
                webData:[],
            }
            axios.get('http://localhost:4000/getOrderList')
            .then((response) => {
               this.setState({
                   webData:response.data
               })
               console.log(this.state.webData[0].name);
            })
            .catch((error) => {
                console.log('Error  ' + error)
            })
           
    }
    addcart(name){
        alert(name);
        for(let i=0;i<this.state.webData.length;i++)
        {
            if(this.state.webData[i].name===name)
            {
                axios.post("http://localhost:4000/addtocart",this.state.webData[i]);
            }
        }    
    } 
    
    onBuild=()=>{
        this.props.history.push('/build');
    }
 
    render() {     
 
        let showData = this.state.webData.map((a)=>
        <tr align='center'>
            <td><b>{a.name}</b></td>
            <td><b>{a.type}</b></td>
            <td><b>{a.price}</b></td>
            <td>{a.description}<br/><b>Ingredients:</b>{a.ingredients}<br/><b>Toppings:</b>{a.topping}</td>
            <td><img src={a.image} alt='images' style={{width:'150px',height:'150px'}}></img></td>
            <td><button style={{backgroundColor:'orange',color:'white'}} onClick={()=>this.addcart(a.name)}>Add to cart</button></td>            
        </tr>
        )
      
        return (
    
        <div>
                 <div align='center'>
                 <br></br>
                 <table class="table" border="2px" style={{width:'1000px',height:'800px'}}>
                 {showData}
                 </table> 
                 <br></br>                      
                 </div>
                 <div>
                 <div align='center'>
                     <button style={{backgroundColor:'green',color:'white'}} onClick={this.onBuild}><b>Goto Build Pizza</b></button>
                 </div>
                 </div>
        </div> 
 
        
    
        )
    }
}
export default Order;