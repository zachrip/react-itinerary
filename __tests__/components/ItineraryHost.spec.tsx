import * as React from 'react';
import { mount } from 'enzyme';

import ItineraryHost from '../../src/components/ItineraryHost';

describe('Itinerary Host', () => {
	it('should render children', () => {
		const node = mount(
			<ItineraryHost
				id="test"
				render={() => (
					<video />
				)}
			/>
		, { context: { updateItinerary: jest.fn() } });

		expect(node.find('video').length).toBe(1);
	});

	it('should update itinerary when child calls update', () => {
		const updateItinerary = jest.fn();
		const node = mount(
			<ItineraryHost
				id="test"
				render={(update) => (
					<video
						onTimeUpdate={e => update(e.currentTarget.currentTime)}
					/>
				)}
			/>
		, { context: { updateItinerary } });
	
		const video = node.find('video').first();
		video.simulate('timeupdate', {
			currentTarget: {
				currentTime: 50,
			},
		});

		expect(updateItinerary).toHaveBeenCalled();
	});
});
