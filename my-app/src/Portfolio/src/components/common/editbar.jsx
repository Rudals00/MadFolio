import React from "react";
import { Link } from "react-router-dom";

import "./styles/editbar.css";

const EditBar = (props) => {
	const { id,editable } = props;

	return (
        <React.Fragment>
		<div className='nav-links'>
        <Link to="/createCV" state={{modify:true}}className='nav-button'>Edit</Link>
        </div>
        </React.Fragment>
	);
};

export default EditBar;