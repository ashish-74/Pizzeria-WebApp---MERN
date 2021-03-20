import "./App.css";
import NavBar from "./NavBar";

function Header(){
    return(
        <div style={{color:'orange'}}>
            <h2 style={{textAlign:'center'}}>Welcome to Pizzeria !!</h2>
            <NavBar/>
        </div>
    )
}

export default Header;