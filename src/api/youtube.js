import axios from 'axios';

const KEY = 'AIzaSyCr6K4ZamDIcUIym3vdR2-1lnS2y5cTmN4';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/search',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 6,
		key: KEY
	}
});