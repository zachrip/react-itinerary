import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ItineraryProvider, ItineraryItem, ItineraryHost } from '../src';

// https://gist.github.com/andjosh/6764939
function easeInOutQuad(t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

// https://gist.github.com/andjosh/6764939
function scrollTo(element, to, duration) {
  const start = element.scrollTop;
  const change = to - start;
  let currentTime = 0;
  const increment = 20;

  const animateScroll = function() {        
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if(currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

class ScrollToMe extends React.Component<{ parentNode: HTMLDivElement; }> {
  private node: HTMLDivElement;
  private pos = 0;
  private startingOffset;

  componentDidMount() {
    scrollTo(this.props.parentNode, this.node.offsetTop, 300);
  }

  render() {
    return (
      <div ref={node => { this.node = node; }}/>
    );
  }
}

class ScrollContainer extends React.Component {
  private node;

  render() {
    return (
      <div
        className="storyline"
        ref={node => { this.node = node; }}
      >
        {
          items.map(item => (
            <ItineraryItem
              id="test"
              start={item.start}
              end={item.end}
              render={active => (
                <div className={`itinerary-item ${active ? 'active' : ''}`}>
                  {active && (<ScrollToMe parentNode={this.node} />)}
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              )}
            />
          ))
        }
      </div>
    );
  }
}

const items = [
  { start: 0, end: 15, name: 'Opening Scene', description: 'Some nice music and pretty stuff.' },
  { start: 15, end: 30, name: 'Bird Singing', description: 'A pretty bird singing that gets hit in the head.' },
  { start: 30, end: 76, name: 'Big Buck Bunny Comes Out', description: 'Big Buck Bunny comes out of his home and goes out to explore.' },
  { start: 76, end: 84, name: 'Big Buck Bunny Sees Butterfly', description: 'Big Buck Bunny sees a beautiful butterfly.' },
  { start: 84, end: 90, name: 'Butterfly is killed', description: 'Big Buck Bunny watches as the butterfly is killed by an apple.' },
  { start: 90, end: 120, name: 'Buck eats the apple', description: 'Big Buck Bunny eats the apple that was used to kill the butterfly' },
  { start: 120, end: 125, name: 'Evil squirrels watch Buck', description: 'The evil squirrels watch Buck follow the butterfly.' },
  { start: 125, end: 190, name: 'Evil squirrels attack Buck', description: 'The evil squirrels attack Buck with apples.' },
  { start: 190, end: 205, name: 'Evil squirrels kill the butterfly.', description: 'The evil squirrel leader kills the butterfly with a rock.' },
];

const App = () => (
  <ItineraryProvider>
    <div className="container">
      <ItineraryHost
        id="test"
        render={updateItinerary => (
          <video
            src="http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_720p_h264.mov"
            controls
            onTimeUpdate={e => updateItinerary(e.currentTarget.currentTime)}
          >
            <p>not supported</p>
          </video>
        )}
      />
      <ScrollContainer />
    </div>
  </ItineraryProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
