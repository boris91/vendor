import { SET_YEAR } from 'modules/page/const';

export default (initialPage) => {
	return (page = initialPage, { type, payload: value }) => {

		switch (type) {
			case SET_YEAR:
				if (page.year !== value) {
					return {
						...page,
						year: value
					};
				}
				break;
		}

		return page;

	};
};