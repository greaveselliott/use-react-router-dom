"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var RouterContext_1 = __importDefault(require("./RouterContext"));
var RouterProvider = function (_a) {
    var children = _a.children, InjectedRouter = _a.InjectedRouter;
    return (<InjectedRouter>
    <react_router_dom_1.Route>
      {function (routeProps) { return (<RouterContext_1.default.Provider value={routeProps}>
          {children}
        </RouterContext_1.default.Provider>); }}
    </react_router_dom_1.Route>
  </InjectedRouter>);
};
exports.default = RouterProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVyUHJvdmlkZXIuanN4Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1JvdXRlclByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUEwQjtBQUMxQixxREFBb0U7QUFFcEUsa0VBQTRDO0FBTzVDLElBQU0sY0FBYyxHQUFHLFVBQUMsRUFBbUM7UUFBakMsc0JBQVEsRUFBRSxrQ0FBYztJQUFjLE9BQUEsQ0FDOUQsQ0FBQyxjQUFjLENBQ2I7SUFBQSxDQUFDLHdCQUFLLENBQ0o7TUFBQSxDQUFDLFVBQUMsVUFBcUIsSUFBSyxPQUFBLENBQzFCLENBQUMsdUJBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQ3hDO1VBQUEsQ0FBQyxRQUFRLENBQ1g7UUFBQSxFQUFFLHVCQUFhLENBQUMsUUFBUSxDQUFDLENBQzFCLEVBSjJCLENBSTNCLENBQ0g7SUFBQSxFQUFFLHdCQUFLLENBQ1Q7RUFBQSxFQUFFLGNBQWMsQ0FBQyxDQUNsQjtBQVYrRCxDQVUvRCxDQUFDO0FBRUYsa0JBQWUsY0FBYyxDQUFDIn0=