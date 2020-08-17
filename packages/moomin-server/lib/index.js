"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.React = exports.createElement = exports.useKnownComponent = exports.Frag = exports.Image = exports.View = exports.Text = void 0;
exports.Text = 'text';
exports.View = 'view';
exports.Image = 'image';
exports.Frag = 'frag';
function useKnownComponent(key) {
    return key;
}
exports.useKnownComponent = useKnownComponent;
function createElement(type, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var withKids = props ? __assign(__assign({}, props), { children: children }) : { children: children };
    if (typeof type === 'string') {
        return { type: type, props: withKids };
    }
    if (typeof type === 'function') {
        var withKey = withKids.key
            ? withKids
            : __assign(__assign({}, withKids), { key: Math.random().toString() });
        return type(withKey);
    }
    if (!type) {
        return { type: exports.Frag, props: withKids };
    }
    throw new Error("unsupported component type: " + type);
}
exports.createElement = createElement;
exports.React = {
    createElement: createElement,
};
