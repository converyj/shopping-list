import React from "react";

import PropTypes from "prop-types";

/*
This presentational component can just be a Stateless Functional Component.

You'll see this pattern often - a component for a thing (show a single item) and a component for a list
of those things (itemList).
*/
const Item = ({ item }) => {
	return (
		<div>
			<li>{item}</li>
		</div>
	);
};

Item.propTypes = {
	item: PropTypes.string.isRequired
};

export default Item;
