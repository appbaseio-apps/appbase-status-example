import React, { Component } from "react";
import ReactDOM from "react-dom";
// import ResultAll from "./ResultAll.js"
// import ResultEmbed from "./ResultEmbed.js"
import {ResultEmbed, ResultAll} from "@appbaseio/appbase-status";
//import 'temp-status/assets/style.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			url: "https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt",
			name: "",
			toggle: false
		};
	}


	render() {
		const changeUrl = (event) => {
			event.preventDefault();
			let newUrl = document.getElementById("inputurl").value;
			// debugger;
			if (newUrl === "") {
				newUrl = "https://appbase-apifrontend-funtests.s3.amazonaws.com/FunctionalTestResult_es2.txt";
			}
			this.setState({
				url: newUrl,
				name: this.state.name
			});
		};

		let resultall = () => {
			return (
				<div className="row">
					<div>
						<div className="block">
							<ResultAll url={this.state.url} />
						</div>
					</div>
				</div>
			);
		}

		let resultembed = () => {
			return (
				<div className="row">
					<div>
						<div className="block">
							<ResultEmbed url={this.state.url} key={this.state.url + this.state.name} />
						</div>
					</div>
				</div>
			);
		}

		const resultAllState = (event) => {
			event.preventDefault();
			this.setState({
				toggle : true
			});
		};

		const resultEmbedState = (event) => {
			event.preventDefault();
			this.setState({
				toggle : false
			});
		};

		return (
			<div className="margint01" >
				<div className="row">
					<div className="col s4">
					</div>
					<div className="col s2">
						<button className="waves-effect waves-light btn" onClick={resultAllState}>ResultAll</button>
					</div>
					<div className="col s6">
						<button className="waves-effect waves-light btn" onClick={resultEmbedState}>ResultEmbed</button>
					</div>
				</div>
				<br />
				<div className="row" >
					<div className="col s4 rightalign"><strong>url:</strong></div>
					<form className="formstyle">
						<input id="inputurl" type="url" className="col s8 textinput offset-s1" />
						<button type="submit" className="btn waves-effect waves-light" onClick={changeUrl}>
							<i className="fa fa-play" aria-hidden="true" />
						</button>
					</form>
				</div>
				<div>
					{this.state.toggle ? resultall() : resultembed()}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
