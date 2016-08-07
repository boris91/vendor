import {
	FETCH_YEARS_REQUEST,
	FETCH_YEARS_RESPONSE,
	FETCH_PHOTOS_REQUEST,
	FETCH_PHOTOS_RESPONSE
} from 'modules/page/const';

export default (initialPage) => {
	return (page = initialPage, { type, payload }) => {

		switch (type) {
			case FETCH_YEARS_REQUEST:
				return {
					...page,
					year: null
				};
			case FETCH_YEARS_RESPONSE:
				const newPage = {
					...page,
					year: +payload[0],
					photos: {}
				};
				payload.forEach(year => newPage.photos[year] = null);
				return newPage;
			case FETCH_PHOTOS_REQUEST:
				return {
					...page,
					year: payload,
					photos: {
						...page.photos,
						[payload]: null
					}
				};
			case FETCH_PHOTOS_RESPONSE:
				return {
					...page,
					photos: {
						...page.photos,
						[page.year]: payload
					}
				};
		}

		return page;

	};
};