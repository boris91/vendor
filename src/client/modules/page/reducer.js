import {
	FETCH_PHOTOS_REQUEST,
	FETCH_PHOTOS_RESPONSE
} from 'modules/page/const';

export default (initialPage) => {
	return (page = initialPage, { type, payload }) => {

		switch (type) {
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