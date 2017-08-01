import * as React from 'react';
import { func } from 'prop-types';
import { mount } from 'enzyme';

import ItineraryProvider from '../../src/components/ItineraryProvider';

describe('Itinerary Provider', () => {
	describe('Context', () => {
		it('should provide update itinerary and listen itinerary', () => {
			const node = mount(
				<ItineraryProvider>
					<video />
				</ItineraryProvider>
			);

			const instance = node.instance();
			const getContext = instance['getChildContext'];
		
			expect(getContext()).toEqual({
				updateItinerary: expect.any(Function),
				listenItinerary: expect.any(Function),
			});
		});

		describe('Update Itinerary', () => {
			it('should handle no listeners', () => {
				const node = mount(
					<ItineraryProvider>
						<video />
					</ItineraryProvider>
				);

				const instance = node.instance();
				const getContext = instance['getChildContext'];
				const { updateItinerary } = getContext();

				expect(updateItinerary('test', 1)).toBe(null);
			});

			it('should handle 1 or more listeners', () => {
				const node = mount(
					<ItineraryProvider>
						<video />
					</ItineraryProvider>
				);

				const instance = node.instance();
				const getContext = instance['getChildContext'];
				const { updateItinerary, listenItinerary } = getContext();

				const fn = jest.fn();
				listenItinerary('test', fn);

				updateItinerary('test', 1);
				expect(fn).toHaveBeenCalled();
				expect(fn).toHaveBeenCalledWith(1);
			});
		});

		describe('Update Itinerary', () => {
			it('should handle no listener', () => {
				const node = mount(
					<ItineraryProvider>
						<video />
					</ItineraryProvider>
				);

				const instance = node.instance();
				const getContext = instance['getChildContext'];
				const { listenItinerary } = getContext();
				const fn = jest.fn();
				listenItinerary('test', fn);
				expect(node.instance()['listeners']).toEqual({ test: [fn] });
			});

			it('should handle 1 or more listeners', () => {
				const node = mount(
					<ItineraryProvider>
						<video />
					</ItineraryProvider>
				);

				const instance = node.instance();
				const getContext = instance['getChildContext'];
				const { listenItinerary } = getContext();
				const fn = jest.fn();
				listenItinerary('test', fn);
				listenItinerary('test', fn);
				expect(node.instance()['listeners']).toEqual({ test: [fn, fn] });
			});
		});
	});

	it('should render children', () => {
		const node = mount(
			<ItineraryProvider>
				<video/>
			</ItineraryProvider>
		);

		expect(node.find('video').length).toBe(1);
	});
});
