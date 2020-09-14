import '../styles/SearchBar.css';
import React from 'react'

class SearchBar extends React.Component {
	state = {
		term: ''
	};

	onInputChange = (event) => {
		this.setState({ term: event.target.value })
	}

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onFormSubmit(this.state.term)
	}

	render() {
		return (
			<div className="ui segment search-bar">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<input type="text" placeholder="Search videos" value={this.state.term} onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;