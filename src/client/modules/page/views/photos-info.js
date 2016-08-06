import React, { Component, PropTypes } from 'react';

export default class PhotosInfo extends Component {
	static propTypes = {
		year: PropTypes.number.isRequired,
		photos: PropTypes.object.isRequired,
		actions: PropTypes.object.isRequired
	}

	onYearClick(event) {
		const year = +event.target.dataset.year;
		this.props.actions.setYear(year);
	}

	render() {
		const { year: currYear, photos } = this.props;
		return <div className='page photos-info'>
			<div className='years-list'>{
				Object.keys(photos).map(year => (
					<div className={'year' + (currYear === +year ? ' selected' : '')}
						key={year}
						data-year={year}
						onClick={this.onYearClick.bind(this)}>
						{year}
					</div>
				))
			}</div>
			<h3 className='current-year'>Year {currYear}</h3>
			<p className='gallery'>You have {photos[currYear].length} photos.</p>
		</div>;
	}
};