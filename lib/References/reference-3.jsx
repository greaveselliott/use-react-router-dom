"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_1 = require("react-router");
var react_1 = require("react");
exports.useLocation = function () {
    var context = react_1.useContext(react_router_1.__RouterContext);
    return context.location;
};
function useMatch() {
    var context = react_1.useContext(react_router_1.__RouterContext);
    return context.match;
}
exports.useMatch = useMatch;
function useParams() {
    var context = react_1.useContext(react_router_1.__RouterContext);
    return context.match.params;
}
exports.useParams = useParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJlbmNlLTMuanN4Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUmVmZXJlbmNlcy9yZWZlcmVuY2UtMy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBb0U7QUFDcEUsK0JBQW1DO0FBS3RCLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLElBQU0sT0FBTyxHQUFHLGtCQUFVLENBQUMsOEJBQWUsQ0FBQyxDQUFDO0lBQzVDLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUMxQixDQUFDLENBQUM7QUFFRixTQUFnQixRQUFRO0lBQ3RCLElBQU0sT0FBTyxHQUFHLGtCQUFVLENBQUMsOEJBQWUsQ0FBMkIsQ0FBQztJQUN0RSxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7QUFDdkIsQ0FBQztBQUhELDRCQUdDO0FBRUQsU0FBZ0IsU0FBUztJQUN2QixJQUFNLE9BQU8sR0FBRyxrQkFBVSxDQUFDLDhCQUFlLENBQTJCLENBQUM7SUFDdEUsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUM5QixDQUFDO0FBSEQsOEJBR0MifQ==