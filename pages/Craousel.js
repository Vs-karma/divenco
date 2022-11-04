import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
	render() {
		return (
			<div>
			<h2>NextJs Carousel - GeeksforGeeks</h2>
			<Carousel style={{innerHeight:'200px'}}>
				<div>
					<img src="/favicon.ico" alt="image1"/>
					<p className="legend">Image 1</p>
				</div>
				<div>
					<img src="/favicon.ico" alt="image2" />
					<p className="legend">Image 2</p>

				</div>
				<div>
					<img src="/favicon.ico" alt="image3"/>
					<p className="legend">Image 3</p>

				</div>
				<div>
					<img src="/favicon.ico" alt="image4"/>
					<p className="legend">Image 4</p>

				</div>
				<div>
					<img src="/favicon.ico" alt="image5"/>
					<p className="legend">Image 5</p>

				</div>
			</Carousel>
			</div>
		);
	}
};
