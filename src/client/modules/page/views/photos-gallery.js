import React, { Component, PropTypes } from 'react';

export default class PhotosGallery extends Component {
	static propTypes = {
		photos: PropTypes.array
	}

	render() {
		const { photos } = this.props;

		return <div className='gallery'>
			{
				photos ?
						photos.map((photo, i) => (
								<div className='photo' key={i} data-id={photo}>{photo}</div>//TODO: use image tag & src attr
						)) : <div className='loading-indicator'>Loading...</div>
			}
		</div>;
	}
};