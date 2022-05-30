Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var tags = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "SPAN", "IMG"];
function assignFallbackAttributes(el) {
    var styles = "";
    el.textContent = el.textContent || "_";
    var css = window.getComputedStyle(el);
    for (var i = 0; i < css.length; i++) {
        styles += "background-color:rgba(0, 0, 0, 0.11);animation: skeleton 1s linear infinite alternate both;".concat(css[i], ":").concat(css.getPropertyValue("" + css[i]), ";");
    }
    return styles;
}
function useFallback(_a) {
    var isLoading = _a.isLoading, fallbackOnStaticContent = _a.fallbackOnStaticContent;
    var ref = React.useRef();
    var withFallback = function (tree) {
        var Fallback = React__default["default"].forwardRef(function (_, ref) {
            return React__default["default"].cloneElement(tree, { ref: ref });
        });
        if (isLoading) {
            return (jsxRuntime.jsx(Fallback, { ref: function (el) {
                    var _a;
                    ref.current = el;
                    (_a = ref.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll("*").forEach(function (el) {
                        var _a;
                        if (tags.includes(el.tagName) || ((_a = el.firstChild) === null || _a === void 0 ? void 0 : _a.nodeValue)) {
                            var skeleton = document.createElement("div");
                            if (fallbackOnStaticContent || !el.textContent) {
                                skeleton.style.cssText = assignFallbackAttributes(el);
                                el.replaceWith(skeleton);
                            }
                        }
                    });
                } }));
        }
        else {
            return tree;
        }
    };
    return { withFallback: withFallback };
}

function Fallback(_a) {
    var isLoading = _a.isLoading, children = _a.children, fallbackOnStaticContent = _a.fallbackOnStaticContent;
    var withFallback = useFallback({ isLoading: isLoading, fallbackOnStaticContent: fallbackOnStaticContent }).withFallback;
    return withFallback(jsxRuntime.jsx("div", { children: children }));
}

exports["default"] = Fallback;
//# sourceMappingURL=index.tsx.map
