/// <reference types="react" />
import { Component } from 'react';
declare class ItineraryItem extends Component<{
    id: string;
    onActivated?: Function;
    onDeactivated?: Function;
    end?: number;
    start?: number;
    render?: Function;
}, {
    active: boolean;
}> {
    static contextTypes: {
        listenItinerary: (object: any, key: string, componentName: string, ...rest: any[]) => Error;
    };
    state: {
        active: boolean;
    };
    constructor(props: any, context: any);
    render(): any;
}
export default ItineraryItem;
