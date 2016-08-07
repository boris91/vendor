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
			fetch(`/page/photos?year=${year}`).then(res => res.json().then(fetchedPhotos => {
				dispatch({
					type: FETCH_PHOTOS_RESPONSE,
					isFetching: false,
					payload: fetchedPhotos
				});
			}));
		};
	}
};