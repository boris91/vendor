import React, { Component, PropTypes } from 'react';

export default class PhotosInfo extends Component {
	static propTypes = {
		year: PropTypes.number.isRequired,
		photos: PropTypes.array.isRequired
	}

	render() {
		const { year, photos } = this.props;
		return <div>
			You have {photos.length} photos for {year} :)
		</div>;
	}
};