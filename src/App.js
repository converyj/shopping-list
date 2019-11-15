import React from "react";
import logo from "./logo.svg";
import "./App.css";

import AddNewItem from "./AddNewItem";
import DeleteLastItem from "./DeleteLastItem";
import ItemList from "./ItemList";

// handles events to do with state and shows the interface from Components
class App extends React.Component {
	state = {
		items: []
	};

	handleAddItem = (value) => {
		this.setState({
			items: [ ...this.state.items, value ]
		});
	};

	deleteLastItem = (event) => {
		this.setState({
			items: this.state.items.slice(0, -1)
		});
	};

	noItemsFound = () => {
		return this.state.items.length === 0;
	};

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<h1 className='App-title'>ReactND - Coding Practice</h1>
				</header>
				<h2>Shopping List</h2>
				<AddNewItem onAddItem={this.handleAddItem} />
				<DeleteLastItem
					deleteLastItem={this.deleteLastItem}
					noItemsFound={this.noItemsFound()}
				/>
				<ItemList items={this.state.items} />
			</div>
		);
	}
}

export default App;
