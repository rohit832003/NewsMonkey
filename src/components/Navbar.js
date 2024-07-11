import React  from 'react';
import{
  Link
} from 'react-router-dom';

const Navbar =()=>{
  
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" to="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/">Link</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contact us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" to="/">Email</a>
                <a className="dropdown-item" to="/">Phone Number</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" to="/">Directly email,call us</a>
              </div>
            </li>
            
<li className="nav-item"><Link className="nav-link" to="/bussiness">Bussiness</Link></li>


<li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
<li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
<li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
<li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
           
            
           
          </ul>
         
         
        </div>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </nav>
    )

}

export default Navbar
