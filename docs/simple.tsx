import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ItineraryProvider, ItineraryItem, ItineraryHost } from '../src';

const App = () => (
  <ItineraryProvider>
    <div>
      <ItineraryHost
        id="test"
        render={updateItinerary => (
          <video
            width="712"
            height="400"
            src="http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_720p_h264.mov"
            controls
            onTimeUpdate={e => updateItinerary(e.currentTarget.currentTime)}
          >
            <p>not supported</p>
          </video>
        )}
      />
      <ItineraryItem
        id="test"
        start={5}
        end={10}
        onActivated={() => console.log('ACTIVE!')}
        onDeactivated={() => console.log('INACTIVE!')}
        render={active => (
          <div>
            <h1 style={{ color: active ? 'red' : 'dodgerblue' }}>itinerary item</h1>
            <p>This header will be red between 5 and 10 seconds of the video.</p>
          </div>
        )}
      />
    </div>
  </ItineraryProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
