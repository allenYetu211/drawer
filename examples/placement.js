webpackJsonp([0],{

/***/ 1079:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1080);


/***/ }),

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src___ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_es_button_style__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_es_menu_style__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_antd_es_select_style__ = __webpack_require__(1081);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_antd_es_style__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_index_less__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_index_less__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__assets_index_less__);




/* eslint-disable no-console,react/no-multi-comp */










var SubMenu = __WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].SubMenu;
var MenuItemGroup = __WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].ItemGroup;
var Option = __WEBPACK_IMPORTED_MODULE_4_antd__["d" /* Select */].Option;

var Demo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

    function Demo() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));

        _this.state = {
            placement: 'right',
            childShow: true,
            width: '20vw',
            height: null
        };
        _this.onChange = function (value) {
            _this.setState({
                placement: value,
                width: value === 'right' || value === 'left' ? '20vw' : null,
                height: value === 'right' || value === 'left' ? null : '20vh',
                childShow: false
            }, function () {
                _this.setState({
                    childShow: true
                });
            });
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Demo, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("div", null, this.state.childShow && __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__src___["default"], { placement: this.state.placement, width: this.state.width, height: this.state.height }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */], { defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], mode: "inline" }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](SubMenu, { key: "sub1", title: __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("span", null, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["b" /* Icon */], { type: "mail" }), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("span", null, "Navigation One")) }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](MenuItemGroup, { key: "g1", title: "Item 1" }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].Item, { key: "1" }, "Option 1"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].Item, { key: "2" }, "Option 2")), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](MenuItemGroup, { key: "g2", title: "Item 2" }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].Item, { key: "3" }, "Option 3"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].Item, { key: "4" }, "Option 4"))), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](SubMenu, { key: "sub2", title: __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("span", null, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["b" /* Icon */], { type: "appstore" }), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("span", null, "Navigation Two")) }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].Item, { key: "5" }, "Option 5"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].Item, { key: "6" }, "Option 6"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](SubMenu, { key: "sub3", title: "Submenu" }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].Item, { key: "7" }, "Option 7"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].Item, { key: "8" }, "Option 8"))), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](SubMenu, { key: "sub4", title: __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("span", null, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["b" /* Icon */], { type: "setting" }), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("span", null, "Navigation Three")) }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].Item, { key: "9" }, "Option 9"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].Item, { key: "10" }, "Option 10"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].Item, { key: "11" }, "Option 11"), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["c" /* Menu */].Item, { key: "12" }, "Option 12")))), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("div", { style: {
                    width: '100%', height: 667, background: '#fff000',
                    color: '#fff', textAlign: 'center', lineHeight: '667px'
                } }, '\u9009\u62E9\u4F4D\u7F6E\uFF1A', __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd__["d" /* Select */], { style: { width: 120, marginLeft: 20 }, defaultValue: this.state.placement, onChange: this.onChange }, __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](Option, { value: "left" }, '\u5DE6\u8FB9 left'), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](Option, { value: "top" }, '\u4E0A\u9762 top'), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](Option, { value: "right" }, '\u53F3\u8FB9 right'), __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](Option, { value: "bottom" }, '\u4E0B\u9762 bottom'))));
        }
    }]);

    return Demo;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_6_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_5_react__["createElement"](Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 1081:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__(1082);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_style__ = __webpack_require__(1083);

 // style dependencies



/***/ }),

/***/ 1082:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__(1084);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);



/***/ }),

/***/ 1084:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_style__ = __webpack_require__(41);

 // style dependencies
// deps-lint-skip: layout



/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);



/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);



/***/ }),

/***/ 85:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[1079]);
//# sourceMappingURL=placement.js.map