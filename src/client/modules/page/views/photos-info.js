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
		const { year, photos } = this.props;
		return <div>
			<p>{
				Object.keys(photos).map(year => (
					<button key={year} data-year={year} onClick={this.onYearClick.bind(this)}>{year}</button>
				))
			}</p>
			<h3>Year {year}</h3>
			<p>You have {photos[year].length} photos.</p>
		</div>;
	}
};