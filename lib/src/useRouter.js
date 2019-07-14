"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RouterContext_1 = __importDefault(require("./RouterContext"));
function useRouter() {
    if (react_1.useContext === undefined) {
        throw new Error("React >= 16.7 required");
    }
    return react_1.useContext(RouterContext_1.default);
}
exports.default = useRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlUm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZVJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtCQUFtQztBQUNuQyxrRUFBNEM7QUFFNUMsU0FBd0IsU0FBUztJQUMvQixJQUFJLGtCQUFVLEtBQUssU0FBUyxFQUFFO1FBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUMzQztJQUVELE9BQU8sa0JBQVUsQ0FBQyx1QkFBYSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQU5ELDRCQU1DIn0=