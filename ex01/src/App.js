import React, { Component } from "react";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<button onClick={this.setMyStorage}>setMyStorage</button>
			</div>
		);
	}
	setMyStorsge() {
		document.cookie = "Year = 2021";

		localStorage.setItem("Paragon", "yes", "but Arena first");

		sessionStorage.setItem("fronted", "React");
	}
}

export default App;
