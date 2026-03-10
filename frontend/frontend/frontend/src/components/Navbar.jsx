import {Link} from "react-router-dom"

function Navbar(){

return(

<nav className="navbar navbar-dark bg-dark navbar-expand">

<div className="container">

<Link className="navbar-brand" to="/">TrainerApp</Link>

<div className="navbar-nav">

<Link className="nav-link" to="/">List Trainers</Link>

<Link className="nav-link" to="/add">Add Trainer</Link>

</div>

</div>

</nav>

)

}

export default Navbar