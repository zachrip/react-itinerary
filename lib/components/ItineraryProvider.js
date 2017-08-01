"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var ItineraryProvider = (function (_super) {
    __extends(ItineraryProvider, _super);
    function ItineraryProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listeners = {};
        _this.getChildContext = function () {
            return {
                updateItinerary: function (id, currentTime) {
                    var listeners = _this.listeners[id];
                    if (!listeners) {
                        return null;
                    }
                    listeners.forEach(function (listener) { return listener(currentTime); });
                },
                listenItinerary: function (id, handler) {
                    var listener = _this.listeners[id];
                    if (!listener) {
                        listener = _this.listeners[id] = [];
                    }
                    _this.listeners[id].push(handler);
                }
            };
        };
        return _this;
    }
    ItineraryProvider.prototype.render = function () {
        return react_1.Children.only(this.props.children);
    };
    ItineraryProvider.childContextTypes = {
        listenItinerary: prop_types_1.func.isRequired,
        updateItinerary: prop_types_1.func.isRequired
    };
    return ItineraryProvider;
}(react_1.Component));
exports.default = ItineraryProvider;
//# sourceMappingURL=ItineraryProvider.js.map