"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.hyperscript = void 0;
function hyperscript(nodeName, attributes, children) {
    children = [].concat.apply([], children);
    return { nodeName: nodeName, attributes: attributes, children: children };
}
exports.hyperscript = hyperscript;
function render(vdom) {
    var dom = document.createElement(vdom.nodeName);
    for (var _i = 0, _a = (vdom.attributes || {}); _i < _a.length; _i++) {
        var key = _a[_i];
        dom.setAttribute(key, vdom.attributes[key]);
    }
    for (var _b = 0, _c = vdom.children; _b < _c.length; _b++) {
        var child = _c[_b];
        if (typeof child === 'string') {
            dom.appendChild(document.createTextNode(child));
        }
        else {
            dom.appendChild(render(child));
        }
    }
    return dom;
}
exports.render = render;
