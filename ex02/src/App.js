import React, { Component } from "react";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='App'>
        <button onClick={ mySessionStorageData,myLocalStorageDAta}></button>
				<button onClick={this.setMyStorage}>setMyStorage</button>
			</div>
		);
	}
	setMyStorsge() {
	 let	myCookieData  = document.cookie = "Year = 2021";

	let	myLocalStorageData = localStorage.setItem("Paragon", "yes", "but Arena first");

		let mySessionStorageData = sessionStorage.setItem("fronted", "React");
	}
}

export default App;


