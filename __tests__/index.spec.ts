import * as index from '../src';
import ItineraryProvider from '../src/components/ItineraryProvider';
import ItineraryHost from '../src/components/ItineraryHost';
import ItineraryItem from '../src/components/ItineraryItem';

describe('Index', () => {
	it('should export itinerary components', () => {
		expect(index).toEqual({
			ItineraryProvider,
			ItineraryHost,
			ItineraryItem,
		});
	});
});