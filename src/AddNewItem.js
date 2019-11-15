import React, { Component } from "react";
import PropTypes from "prop-types";

// Controlled Component for adding item to item list
class AddNewItem extends Component {
	state = {
		value: ""
	};

	inputIsEmpty = () => {
		return this.state.value === "";
	};

	handleChange = (event) => {
		this.setState({ value: event.target.value });
	};

	addItem = (e) => {
		e.preventDefault();
		this.props.onAddItem(this.state.value);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.addItem}>
					<input
						type='text'
						placeholder='Enter New Item'
						value={this.state.value}
						onChange={this.handleChange}
					/>
					<button disabled={this.inputIsEmpty()}>Add</button>
				</form>
			</div>
		);
	}
}

AddNewItem.propTypes = {
	onAddItem: PropTypes.func.isRequired
};

export default AddNewItem;
