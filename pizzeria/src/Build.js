// import React,{ Component } from "react";
// import axios from 'axios';

// class Build extends Component{    

//     constructor(){
//         super();
//         this.state={
//             build:[]
//         }
//     }

//     onCart=()=>{
//         this.props.history.push('/cart');
//     }

//     componentDidMount(){
//         axios.get('http://localhost:4000/getBuildList').then((res)=> 
//         this.setState({build:res.data}))
//         .catch((err)=>console.log(err))
//     }

//     addcart(name){
//         alert(name);
//         for(let i=0;i<this.state.build.length;i++)
//         {
//             if(this.state.build[i].name===name)
//             {
//                 axios.post("http://localhost:4000/addtocart",this.state.build[i]);
//             }
//         }    
//     } 
import './App.css';
import React,{ Component  } from "react";
import axios from 'axios';
class Build extends Component{
        constructor() {
            super();
            this.state={
                webData:[],
            }
            axios.get('http://localhost:4000/getBuildList')
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
            if(this.state.webData[i].tname===name)
            {
                axios.post("http://localhost:4000/addtocart",this.state.webData[i]);
            }
        }    
    } 
    
    onCart=()=>{
        this.props.history.push('/cart');
    }

    render(){

        let showData = this.state.webData.map((a)=>         
        <tr align='center'>
            <td><img src={a.image} alt="image1" style={{width:'150px',height:'150px'}}></img></td>
            <td>{a.tname}</td>            
            <td>{a.price}</td> 
            <td><button style={{backgroundColor:'orange',color:'white'}} onClick={()=>this.addcart(a.tname)}>Add to cart</button></td>
        </tr>
        )

        return(
            <div>
                <div align='center'>
                <h3>Pizzeria gives you options to build your own Pizza. Customize your pizza by choosing ingredients from the given below.</h3>
                <br></br>
                <table class="table" border="3px" style={{width:'500px',height:'500px'}}>
                {showData}
                </table>
                <br></br>                       
                </div>
                <div align='center'>
                    <button style={{backgroundColor:'red',color:'white'}} onClick={this.onCart}><b>Skip</b></button>
                </div>                     
            </div>
            
        )
    }
}

export default Build;

