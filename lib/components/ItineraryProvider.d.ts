/// <reference types="react" />
import { Component } from 'react';
declare class ItineraryProvider extends Component {
    static childContextTypes: {
        listenItinerary: (object: any, key: string, componentName: string, ...rest: any[]) => Error;
        updateItinerary: (object: any, key: string, componentName: string, ...rest: any[]) => Error;
    };
    listeners: {};
    getChildContext: () => {
        updateItinerary: (id: any, currentTime: any) => any;
        listenItinerary: (id: any, handler: any) => void;
    };
    render(): React.ReactElement<any>;
}
export default ItineraryProvider;
