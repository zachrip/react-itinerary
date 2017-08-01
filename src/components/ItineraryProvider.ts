import { Component, Children } from 'react';
import { func } from 'prop-types';

class ItineraryProvider extends Component {
  static childContextTypes = {
    listenItinerary: func.isRequired,
    updateItinerary: func.isRequired
  };

  public listeners = {};

  getChildContext = () => {
    return {
      updateItinerary: (id, currentTime) => {
        let listeners = this.listeners[id];

        if (!listeners) {
          return null;
        }

        listeners.forEach(listener => listener(currentTime));
      },
      listenItinerary: (id, handler) => {
        let listener = this.listeners[id];

        if (!listener) {
          listener = this.listeners[id] = [];
        }

        this.listeners[id].push(handler);
      }
    };
  };

  render() {
    return Children.only(this.props.children);
  }
}

export default ItineraryProvider;
