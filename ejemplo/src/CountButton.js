import React from 'react'

class CountButton extends React.Component {

	constructor(props) {
		
		super(props);
		this.state = {
			contador: 0
		};
	}

	render() {

		return (
			<button onClick={() => alert("oli")}>Habla {this.props.texto}</button>
		);	
	}
}

export default CountButton;
