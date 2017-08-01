# react-itinerary
> Render react components based on time sequences such as video or audio files.
 
[![Build Status](https://travis-ci.org/zachrip/react-itinerary.svg?branch=master)](https://travis-ci.org/zachrip/react-itinerary)
[![Coverage Status](https://coveralls.io/repos/github/zachrip/react-itinerary/badge.svg)](https://coveralls.io/github/zachrip/react-itinerary)
### Why
Sometimes you want to render certain things based on the current time of a video or music file.
 
### Installation
```
npm install react-itinerary
```
 
### Example [more here](https://zachrip.github.io/react-itinerary/)
This example will change the itinerary item text color when the current video playhead is between 5 and 10 seconds
```javascript
import { ItineraryProvider, ItineraryHost, ItineraryItem } from 'react-itinerary';
const App = () => (
  <ItineraryProvider>
    <div>
      <ItineraryHost
        id="bigBuckBunny"
        render={updateItinerary => (
          <video
						controls
            src="http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_h264.mov"
            onTimeUpdate={e => updateItinerary('bigBuckBunny', e.currentTarget.currentTime)}
          />
        )}
      />
      <ItineraryItem
        id="bigBuckBunny"
        start={5}
        end={10}
        onActivated={() => console.log('active!')}
        onDeactivated={() => console.log('inactive!')}
        render={active => (
          <h1 style={{ color: active ? 'red' : 'dodgerblue' }}>itinerary item</h1>
        )}
      />
    </div>
  </ItineraryProvider>
);
```
 
### Docs
```javascript

```