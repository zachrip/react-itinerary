import * as React from 'react';
import { mount } from 'enzyme';

import ItineraryItem from '../../src/components/ItineraryItem';

describe('Itinerary Item', () => {
	it('should render children', () => {
		const node = mount(
			<ItineraryItem id="test">
				<p>test</p>
			</ItineraryItem>
		, { context: { listenItinerary: jest.fn() } });

		expect(node.find('p').length).toBe(1);
	});

	it('should render children with render prop', () => {
		const render = jest.fn(() => (<p>test</p>));
		const node = mount(
			<ItineraryItem
				id="test"
				render={render}
			/>
		, { context: { listenItinerary: jest.fn() } });

		expect(node.find('p').length).toBe(1);
		expect(render).toHaveBeenCalled();
		expect(render).toHaveBeenLastCalledWith(false);
	});

	describe('Itinerary updates', () => {
		it('should set state to active if current time is between start and end', () => {
			const listenItinerary = jest.fn();
			const render = jest.fn(() => (<p>test</p>));
			const node = mount(
				<ItineraryItem
					id="test"
					start={4}
					end={6}
					render={render}
				/>
			, { context: { listenItinerary } });

			const handler = listenItinerary.mock.calls[0][1];
			handler(5);

			expect(node.state()).toEqual({ active: true });
		});

		it('should call on activated if current time is between start and end', () => {
			const listenItinerary = jest.fn();
			const render = jest.fn(() => (<p>test</p>));
			const onActivated = jest.fn();
			const node = mount(
				<ItineraryItem
					id="test"
					start={4}
					end={6}
					onActivated={onActivated}
					render={render}
				/>
			, { context: { listenItinerary } });

			const handler = listenItinerary.mock.calls[0][1];
			handler(5);

			expect(onActivated).toHaveBeenCalled();
		});

		it('should not set state to active if current time is not between start and end', () => {
			const listenItinerary = jest.fn();
			const render = jest.fn(() => (<p>test</p>));
			const node = mount(
				<ItineraryItem
					id="test"
					start={4}
					end={6}
					render={render}
				/>
			, { context: { listenItinerary } });

			const handler = listenItinerary.mock.calls[0][1];
			handler(7);

			expect(node.state()).toEqual({ active: false });
		});

		it('should set state to not active if current time is not between start and end and is active', () => {
			const listenItinerary = jest.fn();
			const render = jest.fn(() => (<p>test</p>));
			const node = mount(
				<ItineraryItem
					id="test"
					start={4}
					end={6}
					render={render}
				/>
			, { context: { listenItinerary } });

			node.setState({ active: true });

			const handler = listenItinerary.mock.calls[0][1];
			handler(7);

			expect(node.state()).toEqual({ active: false });
		});

		it('should call on deactivated if current time is not between start and end and is active', () => {
			const listenItinerary = jest.fn();
			const render = jest.fn(() => (<p>test</p>));
			const onDeactivated = jest.fn();
			const node = mount(
				<ItineraryItem
					id="test"
					start={4}
					end={6}
					onDeactivated={onDeactivated}
					render={render}
				/>
			, { context: { listenItinerary } });

			node.setState({ active: true });

			const handler = listenItinerary.mock.calls[0][1];
			handler(7);

			expect(onDeactivated).toHaveBeenCalled();
		});
	});	
});
