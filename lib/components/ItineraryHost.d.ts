/// <reference types="react" />
import { Component } from "react";
declare class ItineraryHost extends Component<{
    render: Function;
    id: string;
}> {
    static contextTypes: {
        updateItinerary: (object: any, key: string, componentName: string, ...rest: any[]) => Error;
    };
    render(): any;
}
export default ItineraryHost;
