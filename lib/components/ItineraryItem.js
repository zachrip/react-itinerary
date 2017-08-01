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
var ItineraryItem = (function (_super) {
    __extends(ItineraryItem, _super);
    function ItineraryItem(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            active: false
        };
        context.listenItinerary(_this.props.id, function (currentTime) {
            var _a = _this.props, start = _a.start, end = _a.end;
            if (currentTime >= start && currentTime <= end && !_this.state.active) {
                _this.setState({
                    active: true
                });
                if (_this.props.onActivated) {
                    _this.props.onActivated();
                }
            }
            if (_this.state.active && (currentTime < start || currentTime > end)) {
                _this.setState({
                    active: false
                });
                if (_this.props.onDeactivated) {
                    _this.props.onDeactivated();
                }
            }
        });
        return _this;
    }
    ItineraryItem.prototype.render = function () {
        if (this.props.render) {
            return this.props.render(this.state.active);
        }
        return react_1.Children.only(this.props.children);
    };
    ItineraryItem.contextTypes = {
        listenItinerary: prop_types_1.func.isRequired
    };
    return ItineraryItem;
}(react_1.Component));
exports.default = ItineraryItem;
//# sourceMappingURL=ItineraryItem.js.map