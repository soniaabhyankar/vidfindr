import '../styles/App.css';
import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
	state = {
		videos: [],
		selectedVideo: null
	};

	componentDidMount() {
		this.onTermSubmit('funny');
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get('/', {
			params: {
				q: term
			}
		});

		console.log(response.data);

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video })
	}

	render() {

		if (window.matchMedia('(max-width: 920px)').matches) {
			return (
				<div className="ui container">
					<h1>Vidfindr</h1>
					<SearchBar onFormSubmit={this.onTermSubmit} />
					<div className="ui grid">
						<div className="ui row">
							<div className="sixteen wide column">
								<VideoDetail video={this.state.selectedVideo} />
							</div>
						</div>
						<div className="ui row">
							<div className="sixteen wide column">
								<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
							</div>
						</div>
					</div>
					<footer>&copy; {new Date().getFullYear()} <a href="https://www.soniaabhyankar.com/" target="_blank" rel="noopener noreferrer">Sonia Abhyankar</a></footer>
				</div>
			);
		}
		return (
			<div className="ui container">
				<h1>Vidfindr</h1>
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid very relaxed">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
						</div>
					</div>
				</div>
				<footer>&copy; {new Date().getFullYear()} <a href="https://www.soniaabhyankar.com/" target="_blank" rel="noopener noreferrer">Sonia Abhyankar</a></footer>
			</div>
		)
	}
}

export default App;