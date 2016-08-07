import {
	FETCH_PHOTOS_REQUEST,
	FETCH_PHOTOS_RESPONSE
} from 'modules/page/const';

export default {
	fetchPhotos(year) {
		return dispatch => {
			dispatch({
				type: FETCH_PHOTOS_REQUEST,
				isFetching: true,
				payload: year
			});
			setTimeout(() => {
				dispatch({
					type: FETCH_PHOTOS_RESPONSE,
					isFetching: false,
					payload: 'abcdefghijklmnopqrstuvwxyz'
							.substr(Math.floor(Math.random() * 12), Math.floor(Math.random() * 14) || 1)
							.split('')
				}), Math.random() * 2000
			});
		};
	}
};