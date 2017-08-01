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
var ItineraryHost = (function (_super) {
    __extends(ItineraryHost, _super);
    function ItineraryHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItineraryHost.prototype.render = function () {
        var _a = this.props, id = _a.id, render = _a.render;
        var updateItinerary = this.context.updateItinerary;
        return render(function (currentTime) { return updateItinerary(id, currentTime); });
    };
    ItineraryHost.contextTypes = {
        updateItinerary: prop_types_1.func.isRequired
    };
    return ItineraryHost;
}(react_1.Component));
exports.default = ItineraryHost;
//# sourceMappingURL=ItineraryHost.js.map