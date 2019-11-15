import React from "react";
import PropTypes from "prop-types";

/*
This presentational component can just be a Stateless Functional Component.
Showing the delete button
*/
const DeleteLastItem = (props) => {
	return (
		<div>
			<button
				onClick={props.deleteLastItem}
				disabled={props.noItemsFound}>
				Delete Last Item
			</button>
		</div>
	);
};

DeleteLastItem.propTypes = {
	DeleteLastItem: PropTypes.func.isRequired,
	noItemsFound: PropTypes.func.isRequired
};
export default DeleteLastItem;
