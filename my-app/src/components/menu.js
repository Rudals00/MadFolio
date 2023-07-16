import '../App.css';
import {Link} from 'react-router-dom';
function Menu(){

return(<div classsName='menu-item'>
<div className="button-container">
<Link to="/" className="custom-button">Main</Link>
<Link to="/createCV" className="custom-button">Create</Link>
<Link to="/Search" className="custom-button">Search</Link>
<Link to="/Hire" className="custom-button">Hire</Link>
</div></div>)

}

export default Menu;