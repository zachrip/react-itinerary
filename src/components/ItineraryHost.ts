import { Component, ReactNode } from 'react';
import { func } from 'prop-types';

class ItineraryHost extends Component<{ render: Function; id: string }> {
  static contextTypes = {
    updateItinerary: func.isRequired
  };

  render() {
    const { id, render } = this.props;
    const { updateItinerary } = this.context;

    return render(currentTime => updateItinerary(id, currentTime));
  }
}

export default ItineraryHost;
