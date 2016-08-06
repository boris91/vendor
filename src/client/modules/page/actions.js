import { SET_YEAR } from 'modules/page/const';

export default {
	setYear(year) {
		return {
			type: SET_YEAR,
			payload: year
		};
	}
};