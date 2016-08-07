import {
	FETCH_YEARS_REQUEST,
	FETCH_YEARS_RESPONSE,
	FETCH_PHOTOS_REQUEST,
	FETCH_PHOTOS_RESPONSE
} from 'modules/page/const';

export const fetchYears = () => {
	return dispatch => {
		dispatch(_fetchYearsRequest());
		fetch('/page/years')
			.then(res => res.json()
				.then(fetchedYears => {
					dispatch(_fetchYearsResponse(fetchedYears));
					fetchPhotos(+fetchedYears[0])(dispatch);
				}));
	};
};

export const fetchPhotos = year => {
	return dispatch => {
		dispatch(_fetchPhotosRequest(year));
		fetch(`/page/photos?year=${year}`)
			.then(res => res.json()
				.then(fetchedPhotos => dispatch(_fetchPhotosResponse(fetchedPhotos))));
	};
};

const _fetchYearsRequest = year => {
	return {
		type: FETCH_YEARS_REQUEST,
		payload: year
	};
};

const _fetchYearsResponse = fetchedYears => {
	return {
		type: FETCH_YEARS_RESPONSE,
		payload: fetchedYears
	};
};

const _fetchPhotosRequest = year => {
	return {
		type: FETCH_PHOTOS_REQUEST,
		payload: year
	};
};

const _fetchPhotosResponse = fetchedPhotos => {
	return {
		type: FETCH_PHOTOS_RESPONSE,
		payload: fetchedPhotos
	};
};