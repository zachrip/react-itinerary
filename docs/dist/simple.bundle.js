webpackJsonp([0],{47:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(48))},48:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(49);e.ItineraryProvider=r.default;var o=n(50);e.ItineraryItem=o.default;var i=n(51);e.ItineraryHost=i.default},49:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),i=n(18),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.listeners={},e.getChildContext=function(){return{updateItinerary:function(t,n){var r=e.listeners[t];if(!r)return null;r.forEach(function(t){return t(n)})},listenItinerary:function(t,n){var r=e.listeners[t];r||(r=e.listeners[t]=[]),e.listeners[t].push(n)}}},e}return r(e,t),e.prototype.render=function(){return o.Children.only(this.props.children)},e.childContextTypes={listenItinerary:i.func.isRequired,updateItinerary:i.func.isRequired},e}(o.Component);e.default=u},50:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),i=n(18),u=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.state={active:!1},n.listenItinerary(r.props.id,function(t){var e=r.props,n=e.start,o=e.end;t>=n&&t<=o&&!r.state.active&&(r.setState({active:!0}),r.props.onActivated&&r.props.onActivated()),r.state.active&&(t<n||t>o)&&(r.setState({active:!1}),r.props.onDeactivated&&r.props.onDeactivated())}),r}return r(e,t),e.prototype.render=function(){return this.props.render?this.props.render(this.state.active):o.Children.only(this.props.children)},e.contextTypes={listenItinerary:i.func.isRequired},e}(o.Component);e.default=u},51:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),i=n(18),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this.props,e=t.id,n=t.render,r=this.context.updateItinerary;return n(function(t){return r(e,t)})},e.contextTypes={updateItinerary:i.func.isRequired},e}(o.Component);e.default=u},85:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),o=n(58),i=n(47),u=function(){return r.createElement(i.ItineraryProvider,null,r.createElement("div",null,r.createElement(i.ItineraryHost,{id:"test",render:function(t){return r.createElement("video",{width:"712",height:"400",src:"http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_720p_h264.mov",controls:!0,onTimeUpdate:function(e){return t(e.currentTarget.currentTime)}},r.createElement("p",null,"not supported"))}}),r.createElement(i.ItineraryItem,{id:"test",start:5,end:10,onActivated:function(){return console.log("ACTIVE!")},onDeactivated:function(){return console.log("INACTIVE!")},render:function(t){return r.createElement("div",null,r.createElement("h1",{style:{color:t?"red":"dodgerblue"}},"itinerary item"),r.createElement("p",null,"This header will be red between 5 and 10 seconds of the video."))}})))};o.render(r.createElement(u,null),document.getElementById("app"))}},[85]);