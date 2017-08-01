import { Component, Children } from 'react';
import { func } from 'prop-types';

class ItineraryItem extends Component<
  {
    id: string;
    onActivated?: Function;
    onDeactivated?: Function;
    end?: number;
    start?: number;
    render?: Function;
  },
  {
    active: boolean;
  }
> {
  static contextTypes = {
    listenItinerary: func.isRequired
  };

  public state = {
    active: false
  };

  constructor(props, context) {
    super(props, context);

    context.listenItinerary(this.props.id, currentTime => {
      const { start, end } = this.props;

      if (currentTime >= start && currentTime <= end && !this.state.active) {
        this.setState({
          active: true
        });
        if (this.props.onActivated) {
          this.props.onActivated();
        }
      }

      if (this.state.active && (currentTime < start || currentTime > end)) {
        this.setState({
          active: false
        });
        if (this.props.onDeactivated) {
          this.props.onDeactivated();
        }
      }
    });
  }

  render() {
    if (this.props.render) {
      return this.props.render(this.state.active);
    }

    return Children.only(this.props.children);
  }
}

export default ItineraryItem;
