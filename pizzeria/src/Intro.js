import React,{ Component } from "react";
import incredients from './incredients.PNG';
import chefs from './chefs.PNG';
import time from './time.PNG';

class Intro extends Component{
    onOrder=()=>{
        this.props.history.push('/order');
    }

    render(){
        return(
            <div class='container'>
                <div align='center'>
                <h1 align='center'>Our Story</h1><br/>
                    <p>We believe in good. We launched Fresh Pan Pizza Bestb Exuse Awards on our Facebook fan page.
                         Fans were given situations where they had to come up with wacky and fun exuses.
                         The person with the best exuse won the Best Exuse Badge and won Pizeeria's vouchers.
                        Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza Ever.
                    </p>
                    <br/>
                    <p>Ever since we launched the Tastiest Pizza,ever,people have not been able to resist the softest,cheesiest,
                    crunchiest,butterest Domino's Fresh Pan Pizza.They have been leaving the stage in the middle of a performance
                    and even finding excuses to be disqualified in a football match.
                    </p>
                    <br/>
                    <p>We launched Fresh Pan Pizza Best Exuse Awards on our Facebook fan page.Fans were given situations where they had
                         to come up with wacky and fun exuses.The person with best exuse won the best Exuse Badge and won Domino's vouchers.
                         Their enthusiatic repsonse proved that Pizzeria's Fresh Pan pizza is the Tastiest Pan Pizza Ever!        
                    </p>
                    <br/>
                </div>
                <table>
                    <tr>
                        <td><img src={incredients} alt='incredients' style={{width:'400px',height:'300px'}}></img></td>
                        <td><b><h4>Incredients</h4></b>
                        We're ruthless about goodness.We have no qualms about tearing up a day-old lettuce leaf(straight from the farm).
                        or streaming a baby(carrot).Cut. Cut. Chop.Chop. Steam. Steam. Stir. Stir. While they're still young and fresh-
                        that's our moto. It makes the kitchen a better place.                        
                        </td>
                    </tr>
                    <tr>
                        <td><b><h4>Our Chefs</h4></b><br/>
                        They make sauses sing and salads dance.They create magic with skill,knowledge,passion and string spoons(among other things).
                        They make goodness so good, it doesn't know what to do with itself.We do though.We send it to you.
                        </td>
                    <td><img src={chefs} alt='chefs' style={{width:'400px',height:'300px'}}></img></td>
                    </tr>
                    <tr>
                        <td><img src={time} alt='time' style={{width:'400px',height:'300px'}}></img></td>
                        <td><b><h4>45 min Delivery</h4></b><br/></td>
                    </tr>
                </table>
                <br/>
                <div align='center'>
                    <button style={{backgroundColor:'green',color:'white'}} onClick={this.onOrder}><b>Goto Menu</b></button>
                </div>
                
            </div>
               
        )
    }
}

export default Intro;
