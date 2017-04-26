/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = window.ReactRouter;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PubHeader = function (_Component) {
	_inherits(PubHeader, _Component);

	function PubHeader() {
		_classCallCheck(this, PubHeader);

		return _possibleConstructorReturn(this, (PubHeader.__proto__ || Object.getPrototypeOf(PubHeader)).apply(this, arguments));
	}

	_createClass(PubHeader, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "title_tao", value: "1", onclick: "click_href(this)" },
				_react2.default.createElement(
					"div",
					{ className: "title_header" },
					_react2.default.createElement(
						"div",
						{ className: "title_left" },
						_react2.default.createElement(
							"div",
							{ className: "sign_img" },
							_react2.default.createElement(
								"div",
								{ className: "img_tao" },
								_react2.default.createElement("img", { src: "/img/taoSmall.jpg" })
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "sign_text" },
							this.props.title
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "right_btn" },
						_react2.default.createElement(
							"a",
							null,
							_react2.default.createElement(
								"div",
								null,
								"\u66F4\u591A"
							),
							_react2.default.createElement(
								"div",
								{ className: "yo-ico" },
								"\uDB80\uDF43"
							)
						)
					)
				)
			);
		}
	}]);

	return PubHeader;
}(_react.Component);

exports.default = PubHeader;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "PubHeader.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var titleName = "";

var Index = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		_classCallCheck(this, Index);

		return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
	}

	_createClass(Index, [{
		key: "titleBindHtml",
		value: function titleBindHtml(list) {
			switch (list) {
				case "/content":
					titleName = "定制生活---首页";break;
				case "/sort":
					titleName = "定制生活---分类页";break;
				case "/book_valume":
					titleName = "定制生活---预约页";break;
				case "/brand":
					titleName = "定制生活---面料页";break;
				case "/login":
					titleName = "定制生活---登录页";break;
			}
			return titleName;
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "index_container" },
				_react2.default.createElement(_Header2.default, { title: this.titleBindHtml(this.props.location.pathname), isShowBack: false }),
				this.props.children,
				_react2.default.createElement(_Footer2.default, null)
			);
		}
	}]);

	return Index;
}(_react.Component);

exports.default = Index;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookValume = function (_Component) {
	_inherits(BookValume, _Component);

	function BookValume() {
		_classCallCheck(this, BookValume);

		return _possibleConstructorReturn(this, (BookValume.__proto__ || Object.getPrototypeOf(BookValume)).apply(this, arguments));
	}

	_createClass(BookValume, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "book_contain" },
				"\u9884\u7EA6\u9875\u9762"
			);
		}
	}]);

	return BookValume;
}(_react.Component);

exports.default = BookValume;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "BookValume.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BrandList = __webpack_require__(13);

var _BrandList2 = _interopRequireDefault(_BrandList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Brand = function (_Component) {
	_inherits(Brand, _Component);

	function Brand() {
		_classCallCheck(this, Brand);

		return _possibleConstructorReturn(this, (Brand.__proto__ || Object.getPrototypeOf(Brand)).apply(this, arguments));
	}

	_createClass(Brand, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "m-brand" },
				_react2.default.createElement(
					"div",
					{ className: "brandFabric" },
					_react2.default.createElement("img", { src: "http://www.fanjiangdz.com/weixin/newpublic/images/wxmater01.jpg" })
				),
				_react2.default.createElement(_BrandList2.default, null)
			);
		}
	}]);

	return Brand;
}(_react.Component);

exports.default = Brand;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Brand.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Banner = __webpack_require__(16);

var _Banner2 = _interopRequireDefault(_Banner);

var _store_line = __webpack_require__(20);

var _store_line2 = _interopRequireDefault(_store_line);

var _TwoBox = __webpack_require__(17);

var _TwoBox2 = _interopRequireDefault(_TwoBox);

var _storeTwo = __webpack_require__(19);

var _storeTwo2 = _interopRequireDefault(_storeTwo);

var _TwoColumn = __webpack_require__(18);

var _TwoColumn2 = _interopRequireDefault(_TwoColumn);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_Component) {
	_inherits(Content, _Component);

	function Content() {
		_classCallCheck(this, Content);

		return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
	}

	_createClass(Content, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "index_content" },
				_react2.default.createElement(_Banner2.default, null),
				_react2.default.createElement(_store_line2.default, null),
				_react2.default.createElement(_TwoBox2.default, null),
				_react2.default.createElement(_storeTwo2.default, { uri: "tao_img_src", title: "\u63A8\u8350\xB7\u5957\u897F" }),
				_react2.default.createElement(_storeTwo2.default, { uri: "dayi_img_src", title: "\u63A8\u8350\xB7\u5927\u8863" }),
				_react2.default.createElement(_TwoColumn2.default, { title: "\u63A8\u8350\xB7\u886C\u8863", typeId: "1" }),
				_react2.default.createElement(_TwoColumn2.default, { title: "\u63A8\u8350\xB7\u88E4\u88C5", typeId: "3" }),
				_react2.default.createElement(_TwoColumn2.default, { title: "\u63A8\u8350\xB7\u9A6C\u7532", typeId: "5" }),
				_react2.default.createElement(_TwoColumn2.default, { title: "\u63A8\u8350\xB7\u7F8A\u7ED2\u886B", typeId: "9" }),
				_react2.default.createElement(_TwoColumn2.default, { title: "\u63A8\u8350\xB7\u7BB1\u5305", typeId: "7" }),
				_react2.default.createElement(_TwoColumn2.default, { title: "\u63A8\u8350\xB7\u4E2A\u6237", typeId: "8" }),
				_react2.default.createElement(_TwoColumn2.default, { title: "\u63A8\u8350\xB7\u5BB6\u7EBA", typeId: "11" })
			);
		}
	}]);

	return Content;
}(_react.Component);

exports.default = Content;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Content.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
	_inherits(Login, _Component);

	function Login() {
		_classCallCheck(this, Login);

		return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	}

	_createClass(Login, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "login_container" },
				_react2.default.createElement(
					"div",
					{ className: "Login_img" },
					_react2.default.createElement("img", { src: "http://www.fanjiangdz.com/weixin/newpublic/images/logobgImg.png" })
				)
			);
		}
	}]);

	return Login;
}(_react.Component);

exports.default = Login;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Login.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _topLine = __webpack_require__(22);

var _topLine2 = _interopRequireDefault(_topLine);

var _Sort_List = __webpack_require__(21);

var _Sort_List2 = _interopRequireDefault(_Sort_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sort = function (_Component) {
	_inherits(Sort, _Component);

	function Sort(props) {
		_classCallCheck(this, Sort);

		var _this = _possibleConstructorReturn(this, (Sort.__proto__ || Object.getPrototypeOf(Sort)).call(this, props));

		_this.state = {
			liValue: {}
		};
		return _this;
	}

	_createClass(Sort, [{
		key: "getLiHtml",
		value: function getLiHtml(data) {
			this.setState({
				liValue: data
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "m-sort" },
				_react2.default.createElement(_topLine2.default, { onFatherLi: this.getLiHtml.bind(this) }),
				_react2.default.createElement(_Sort_List2.default, { TypeId: this.state.liValue.typeId })
			);
		}
	}]);

	return Sort;
}(_react.Component);

exports.default = Sort;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Sort.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoreDetail = function (_Component) {
	_inherits(StoreDetail, _Component);

	function StoreDetail() {
		_classCallCheck(this, StoreDetail);

		return _possibleConstructorReturn(this, (StoreDetail.__proto__ || Object.getPrototypeOf(StoreDetail)).apply(this, arguments));
	}

	_createClass(StoreDetail, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				"\u5546\u54C1\u8BE6\u60C5"
			);
		}
	}]);

	return StoreDetail;
}(_react.Component);

exports.default = StoreDetail;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "StoreDetail.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _Index = __webpack_require__(4);

var _Index2 = _interopRequireDefault(_Index);

var _Content = __webpack_require__(7);

var _Content2 = _interopRequireDefault(_Content);

var _Sort = __webpack_require__(9);

var _Sort2 = _interopRequireDefault(_Sort);

var _BookValume = __webpack_require__(5);

var _BookValume2 = _interopRequireDefault(_BookValume);

var _Brand = __webpack_require__(6);

var _Brand2 = _interopRequireDefault(_Brand);

var _Login = __webpack_require__(8);

var _Login2 = _interopRequireDefault(_Login);

var _StoreDetail = __webpack_require__(10);

var _StoreDetail2 = _interopRequireDefault(_StoreDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(3);

_reactDom2.default.render(_react2.default.createElement(
	_reactRouter.Router,
	{ history: _reactRouter.hashHistory },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: "/", component: _Index2.default },
		_react2.default.createElement(_reactRouter.IndexRedirect, { to: "/content" }),
		_react2.default.createElement(_reactRouter.Route, { path: "content", component: _Content2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "sort", component: _Sort2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "book_valume", component: _BookValume2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "brand", component: _Brand2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "login", component: _Login2.default })
	),
	_react2.default.createElement(_reactRouter.Route, { path: "/storeDetail", component: _StoreDetail2.default })
), document.getElementById("root"));

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrandList = function (_Component) {
	_inherits(BrandList, _Component);

	function BrandList() {
		_classCallCheck(this, BrandList);

		return _possibleConstructorReturn(this, (BrandList.__proto__ || Object.getPrototypeOf(BrandList)).apply(this, arguments));
	}

	_createClass(BrandList, [{
		key: "render",
		value: function render() {

			return _react2.default.createElement(
				"div",
				{ className: "materInner" },
				_react2.default.createElement(
					"div",
					{ className: "materItem" },
					_react2.default.createElement("img", { src: "http://www.fanjiangdz.com//weixin/newpublic/images/wxmater02.jpg" }),
					_react2.default.createElement(
						"div",
						{ className: "description" },
						_react2.default.createElement(
							"h3",
							null,
							"MARZONI\uFF08\u9A6C\u4F50\u5C3C\uFF09"
						),
						_react2.default.createElement(
							"p",
							null,
							"Marzoni\u8BDE\u751F\u5728\u610F\u5927\u5229\u8457\u540D\u7F8A\u6BDB\u4EA7\u5730\u74E6\u8FBE\u5C3C\u5965\uFF0C\u6BCF\u5E74\u63A8\u51FA200\u591A\u79CD\u9762\u6599\uFF0C\u5C5E\u610F\u5927\u5229marzotto\u65F6\u5C1A\u738B\u56FD\u7684\u897F\u670D\u9762\u6599\u54C1\u724C\uFF0C\u4E2D\u6587\u540D\u5B57\u53EB\u9A6C\u4F50\u5C3C\uFF0C\u4E4B\u524D\u53EA\u662F\u4E2A\u751F\u4EA7\u9762\u6599\u7684\u5DE5\u5382\uFF0C\u73B0\u5728\u5DF2\u7ECF\u6536\u8D2D\u4E86\u610F\u5927\u5229ValentinoGanarani\uFF0C\u5FB7\u56FDHugoBoss\uFF0C\u4E07\u5B9D\u8DEF\u4F11\u95F2\u7537\u88C5\u3002\u4E0Egucci\u96C6\u56E2\uFF0CLVMH\u96C6\u56E2\u5E76\u79F0\u4E3A\u4E16\u754C\u4E09\u5927\u65F6\u5C1A\u96C6\u56E2\u3002\u9A6C\u4F50\u5C3C\u897F\u88C5\u9762\u6599\u662F\u4E16\u754C\u4E0A\u6700\u9876\u7EA7\u7684\u9762\u6599\u4E4B\u4E00\uFF0C\u7CBE\u9009\u9876\u7EA7\u9762\u6599\u539F\u6599\uFF0C\u540D\u8D35\u7684\u7EE2\u4E1D\uFF0C\u9A6C\u6D77\u6BDB\uFF0C\u7F8A\u9A7C\u6BDB\uFF0C\u5C71\u7F8A\u7ED2\u7B49\u7CBE\u5236\u800C\u6210\u3002"
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "materItem" },
					_react2.default.createElement("img", { src: "http://www.fanjiangdz.com///weixin/newpublic/images/wxmater03.jpg" }),
					_react2.default.createElement(
						"div",
						{ className: "description" },
						_react2.default.createElement(
							"h3",
							null,
							"CERRUTI 1881"
						),
						_react2.default.createElement(
							"p",
							null,
							"\u7531antonio cerruti \u521B\u7ACB\u7684cerruti\uFF0C\u4E8E\u4E00\u516B\u516B\u4E00\u5E74\u5728\u610F\u5927\u5229\u5317\u90E8\u6BD4\u8036\u62C9\u533A\u521B\u7ACB\u63A8\u51FA\u8D70\u9AD8\u96C5\u8DEF\u7EBF\u7684\u65F6\u88C5\uFF0C\u5F53\u4E2D\u4EE5\u7537\u58EB\u897F\u88C5\u6700\u4E3A\u4EBA\u4E50\u9053\u3002antonio cerruti\u89C6\u65F6\u88C5\u4E3A\u751F\u6D3B\u827A\u672F\u54C1\uFF0C\u81F4\u529B\u4E3A\u65F6\u88C5\u6CE8\u5165\u4F18\u96C5\u7684\u751F\u6D3B\u54C1\u5473\u3002\u81EA1881\u5E74\u59CB\uFF0C CERRUTI 1881\u4FBF\u4EE5\u5176\u7B80\u6D01\u8FDB\u53D6\u7684\u54F2\u5B66\u7406\u5FF5\u5F15\u9886\u610F\u5927\u5229\u65F6\u5C1A\u6F6E\u6D41\u3002\u5E76\u5728\u5176\u591A\u5E74\u7684\u4E0D\u65AD\u6210\u957F\u8FC7\u7A0B\u4E2D\uFF0C\u59CB\u7EC8\u5173\u6CE8\u6F6E\u6D41\u53D8\u9769\u3002\u79C9\u627F\u7EAF\u6B63\u610F\u5927\u5229\u8840\u7EDF\uFF0CCERRUTI 1881\u65F6\u523B\u5411\u4EBA\u4EEC\u5C55\u73B0\u7740\u5B83\u6C38\u6052\u7684\u4F18\u96C5\u53CA\u6C38\u65E0\u6B62\u5883\u7684\u65F6\u5C1A\u6001\u5EA6\u3002"
						),
						_react2.default.createElement("img", { src: "http://www.fanjiangdz.com///weixin/newpublic/images/wxmater04.jpg" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "materItem" },
					_react2.default.createElement("img", { src: "http://www.fanjiangdz.com//weixin/newpublic/images/wxmater06.jpg" }),
					_react2.default.createElement(
						"div",
						{ className: "description" },
						_react2.default.createElement(
							"h3",
							null,
							"CERRUTI 1881"
						),
						_react2.default.createElement(
							"p",
							null,
							"Scabal\uFF08\u4E16\u5BB6\u5B9D\uFF09\u4E8E1938\u5E74\u521B\u7ACB\u5728\u6BD4\u5229\u65F6\u5E03\u9C81\u585E\u5C14\uFF0C\u73B0\u5728\u5DE5\u5382\u8BBE\u5728\u82F1\u56FD\u3002Scabal\u88AB\u5F88\u591A\u9876\u7EA7\u88C1\u7F1D\u662F\u201C\u91D1\u94B1\u80FD\u4E70\u5230\u6700\u597D\u7684\u9762\u6599\u201D\uFF0C\u4E5F\u88AB\u79F0\u4E3A\u201C\u897F\u670D\u9762\u6599\u4E2D\u7684\u5962\u4F88\u54C1\u201D1974\u5E74\u5B83\u4EEC\u7814\u53D1\u51FA16.5\u5FAE\u7C73\u7F8A\u6BDB\u6280\u672F\uFF0C\u4F7F\u9762\u6599\u652F\u6570\u7B2C\u4E00\u652F\u8D85\u8D8A\u4E86100\u652F\u30021991\u5E74\uFF0C\u63A8\u51FA\u521B\u7EAA\u5F55\u7684super150\u9762\u6599\uFF0C\u968F\u540E\u662F150\u652F\uFF0C200\u652F\u76F4\u5230\u73B0\u5728\u53F7\u79F0\u5DC5\u5CF0\u201D\uFF08summit\uFF09\u7684Super250\u652F\u6BDB\u6599\uFF0C\u4EF7\u683C\u8D85\u8FC72000\u82F1\u508D\u6BCF\u7C73\u3002Scabal\u516C\u8BA4\u4E3A\u662F\u5168\u7403\u6700\u597D\u7684\u5E03\u6599\uFF0C\u539F\u56E0\u5728\u4E8E\u5176\u4FE1\u6761\u662F\u201C\u6211\u4EEC\u4ECE\u4E0D\u8003\u8651\u964D\u4F4E\u539F\u6599\u7684\u6210\u672C\u201DScabal\u4EC5\u4EC5\u91C7\u8D2D\u6700\u597D\u7684\u539F\u6599\uFF0C\u8D85\u7EC6\u7F8A\u6BDB\u7684\u8212\u9002\u3001\u7F8A\u7ED2\u7684\u67D4\u8F6F\u3001\u771F\u4E1D\u7684\u4F18\u96C5 \uFF0C\u7CBE\u7EBA\u7EC6\u7EC7\uFF0C\u52A0\u4E0A\u6700\u540E\u4E00\u9053\u72EC\u6709\u7684\u201Cpaper press\u201D\u540E\u6574\u7406\u6280\u672F\uFF0C\u59CB\u80FD\u786E\u4FDD\u4EFB\u4F55\u5E03\u6599\u5BF9\u5F97Scabal\u201C\u9762\u6599\u4E4B\u738B\u201D\u7684\u7F8E\u8A89\u3002\u559C\u6B22\u5728\u9762\u6599\u91CC\u52A0\u5165\u7816\u77F3\u3001\u5B9D\u77F3\u3001\u9EC4\u91D1\u3002"
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "materItem" },
					_react2.default.createElement("img", { src: "http://www.fanjiangdz.com//weixin/newpublic/images/wxmater07.png" }),
					_react2.default.createElement(
						"div",
						{ className: "description" },
						_react2.default.createElement(
							"h3",
							null,
							"CERRUTI 1881"
						),
						_react2.default.createElement(
							"p",
							null,
							"Scabal\uFF08\u4E16\u5BB6\u5B9D\uFF09\u4E8E1938\u5E74\u521B\u7ACB\u5728\u6BD4\u5229\u65F6\u5E03\u9C81\u585E\u5C14\uFF0C\u73B0\u5728\u5DE5\u5382\u8BBE\u5728\u82F1\u56FD\u3002Scabal\u88AB\u5F88\u591A\u9876\u7EA7\u88C1\u7F1D\u662F\u201C\u91D1\u94B1\u80FD\u4E70\u5230\u6700\u597D\u7684\u9762\u6599\u201D\uFF0C\u4E5F\u88AB\u79F0\u4E3A\u201C\u897F\u670D\u9762\u6599\u4E2D\u7684\u5962\u4F88\u54C1\u201D1974\u5E74\u5B83\u4EEC\u7814\u53D1\u51FA16.5\u5FAE\u7C73\u7F8A\u6BDB\u6280\u672F\uFF0C\u4F7F\u9762\u6599\u652F\u6570\u7B2C\u4E00\u652F\u8D85\u8D8A\u4E86100\u652F\u30021991\u5E74\uFF0C\u63A8\u51FA\u521B\u7EAA\u5F55\u7684super150\u9762\u6599\uFF0C\u968F\u540E\u662F150\u652F\uFF0C200\u652F\u76F4\u5230\u73B0\u5728\u53F7\u79F0\u5DC5\u5CF0\u201D\uFF08summit\uFF09\u7684Super250\u652F\u6BDB\u6599\uFF0C\u4EF7\u683C\u8D85\u8FC72000\u82F1\u508D\u6BCF\u7C73\u3002Scabal\u516C\u8BA4\u4E3A\u662F\u5168\u7403\u6700\u597D\u7684\u5E03\u6599\uFF0C\u539F\u56E0\u5728\u4E8E\u5176\u4FE1\u6761\u662F\u201C\u6211\u4EEC\u4ECE\u4E0D\u8003\u8651\u964D\u4F4E\u539F\u6599\u7684\u6210\u672C\u201DScabal\u4EC5\u4EC5\u91C7\u8D2D\u6700\u597D\u7684\u539F\u6599\uFF0C\u8D85\u7EC6\u7F8A\u6BDB\u7684\u8212\u9002\u3001\u7F8A\u7ED2\u7684\u67D4\u8F6F\u3001\u771F\u4E1D\u7684\u4F18\u96C5 \uFF0C\u7CBE\u7EBA\u7EC6\u7EC7\uFF0C\u52A0\u4E0A\u6700\u540E\u4E00\u9053\u72EC\u6709\u7684\u201Cpaper press\u201D\u540E\u6574\u7406\u6280\u672F\uFF0C\u59CB\u80FD\u786E\u4FDD\u4EFB\u4F55\u5E03\u6599\u5BF9\u5F97Scabal\u201C\u9762\u6599\u4E4B\u738B\u201D\u7684\u7F8E\u8A89\u3002\u559C\u6B22\u5728\u9762\u6599\u91CC\u52A0\u5165\u7816\u77F3\u3001\u5B9D\u77F3\u3001\u9EC4\u91D1\u3002"
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "QRCode" },
					_react2.default.createElement(
						"div",
						{ className: "QRPic" },
						_react2.default.createElement("img", { src: "http://www.fanjiangdz.com//weixin/newpublic/images/fjerweima.jpg" })
					),
					_react2.default.createElement(
						"div",
						{ className: "form" },
						_react2.default.createElement(
							"p",
							null,
							"\u957F\u6309\u8BC6\u522B\u56FE\u4E2D\u7684\u4E8C\u7EF4\u7801"
						),
						_react2.default.createElement(
							"p",
							null,
							"\u5173\u6CE8\"\u51E1\u5320\u5B9A\u5236\"\u5FAE\u4FE1\u516C\u4F17\u53F7"
						)
					)
				)
			);
		}
	}]);

	return BrandList;
}(_react.Component);

exports.default = BrandList;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "BrandList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
	_inherits(Footer, _Component);

	function Footer() {
		_classCallCheck(this, Footer);

		return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	}

	_createClass(Footer, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "footer" },
				_react2.default.createElement(
					"ul",
					null,
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/content", activeClassName: "active" },
							_react2.default.createElement(
								"i",
								{ className: "yo-ico" },
								"\uE604"
							),
							"\u9996\u9875"
						)
					),
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/sort", activeClassName: "active" },
							_react2.default.createElement(
								"i",
								{ className: "yo-ico" },
								"\uE66F"
							),
							"\u5206\u7C7B"
						)
					),
					_react2.default.createElement(
						"li",
						{ className: "yuyue_img" },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/book_valume", activeClassName: "active" },
							_react2.default.createElement(
								"i",
								{ className: "yo-ico make_img" },
								"\uE60B"
							),
							"\u9884\u7EA6\u91CF\u4F53"
						)
					),
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/brand", activeClassName: "active" },
							_react2.default.createElement(
								"i",
								{ className: "yo-ico" },
								"\uE60D"
							),
							"\u54C1\u724C"
						)
					),
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/login", activeClassName: "active" },
							_react2.default.createElement(
								"i",
								{ className: "yo-ico" },
								"\uE623"
							),
							"\u6211\u7684"
						)
					)
				)
			);
		}
	}]);

	return Footer;
}(_react.Component);

exports.default = Footer;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Footer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"header",
				{ className: "yo-header" },
				_react2.default.createElement(
					"h2",
					{ className: "title" },
					this.props.title
				),
				_react2.default.createElement(
					"a",
					{ className: "regret yo-ico " + (this.props.isShowBack ? '' : 'hide') },
					"\uF07D",
					_react2.default.createElement(
						"span",
						null,
						"\u8FD4\u56DE"
					)
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Header.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Banner = function (_Component) {
	_inherits(Banner, _Component);

	function Banner() {
		_classCallCheck(this, Banner);

		return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
	}

	_createClass(Banner, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "index_banner" },
				_react2.default.createElement("img", { src: "./img/lunbo1.jpg" })
			);
		}
	}]);

	return Banner;
}(_react.Component);

exports.default = Banner;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Banner.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TwoBox = function (_Component) {
	_inherits(TwoBox, _Component);

	function TwoBox() {
		_classCallCheck(this, TwoBox);

		return _possibleConstructorReturn(this, (TwoBox.__proto__ || Object.getPrototypeOf(TwoBox)).apply(this, arguments));
	}

	_createClass(TwoBox, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "content_div" },
				_react2.default.createElement(
					"div",
					{ className: "zhuce_Btn" },
					_react2.default.createElement("img", { src: "/img/zhuceImg.jpg", alt: "" })
				),
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement("img", { src: "/img/tuijian.jpg", alt: "" })
				)
			);
		}
	}]);

	return TwoBox;
}(_react.Component);

exports.default = TwoBox;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TwoBox.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PubHeader = __webpack_require__(2);

var _PubHeader2 = _interopRequireDefault(_PubHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TwoColumn = function (_Component) {
	_inherits(TwoColumn, _Component);

	function TwoColumn(props) {
		_classCallCheck(this, TwoColumn);

		var _this = _possibleConstructorReturn(this, (TwoColumn.__proto__ || Object.getPrototypeOf(TwoColumn)).call(this, props));

		_this.state = {
			storeDataList: []
		};
		return _this;
	}

	_createClass(TwoColumn, [{
		key: "getDataLine",
		value: function getDataLine(list) {
			return list.map(function (value, index) {
				return _react2.default.createElement(
					"div",
					{ className: "product_a" },
					_react2.default.createElement(
						"div",
						{ className: "top_product" },
						_react2.default.createElement("img", { src: "http://www.fanjiangdz.com/image/" + value.filepath })
					),
					_react2.default.createElement(
						"div",
						{ className: "news_product" },
						_react2.default.createElement(
							"h1",
							null,
							value.name,
							value.categoryPLName
						),
						_react2.default.createElement(
							"p",
							{ className: "sign_p" },
							value.manufacturer
						),
						_react2.default.createElement(
							"p",
							{ className: "sign_price" },
							value.price
						)
					)
				);
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "product_tao" },
				_react2.default.createElement(_PubHeader2.default, { title: this.props.title }),
				_react2.default.createElement(
					"div",
					{ className: "product_list" },
					this.getDataLine(this.state.storeDataList)
				)
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			fetch("/indexList/index").then(function (response) {
				return response.json();
			}).then(function (res) {
				var dataArr = [];
				var typeId = _this2.props.typeId;
				for (var i = 0; i < res.data.length; i++) {
					if (res.data[i].categoryPL == typeId) {
						if (dataArr.length >= 2) {
							break;
						} else {
							dataArr.push(res.data[i]);
						}
					}
				}
				_this2.setState({
					storeDataList: dataArr
				});
			}).catch(function (e) {
				alert(e);
			});
		}
	}]);

	return TwoColumn;
}(_react.Component);

exports.default = TwoColumn;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TwoColumn.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PubHeader = __webpack_require__(2);

var _PubHeader2 = _interopRequireDefault(_PubHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoreTwo = function (_Component) {
	_inherits(StoreTwo, _Component);

	function StoreTwo(props) {
		_classCallCheck(this, StoreTwo);

		var _this = _possibleConstructorReturn(this, (StoreTwo.__proto__ || Object.getPrototypeOf(StoreTwo)).call(this, props));

		_this.state = {
			storeList: []
		};
		return _this;
	}

	_createClass(StoreTwo, [{
		key: "getImg_srcList",
		value: function getImg_srcList(list) {
			return list.map(function (value, index) {
				return _react2.default.createElement(
					"li",
					null,
					_react2.default.createElement("img", { src: value, alt: "" })
				);
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "product_tao" },
				_react2.default.createElement(_PubHeader2.default, { title: this.props.title }),
				_react2.default.createElement(
					"ul",
					null,
					this.getImg_srcList(this.state.storeList)
				)
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			console.log(this.props.uri);
			fetch("http://localhost:3000/" + this.props.uri).then(function (response) {
				return response.json();
			}).then(function (res) {
				_this2.setState({
					storeList: res.src
				});
			});
		}
	}]);

	return StoreTwo;
}(_react.Component);

exports.default = StoreTwo;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "storeTwo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Store_line = function (_Component) {
	_inherits(Store_line, _Component);

	function Store_line() {
		_classCallCheck(this, Store_line);

		return _possibleConstructorReturn(this, (Store_line.__proto__ || Object.getPrototypeOf(Store_line)).apply(this, arguments));
	}

	_createClass(Store_line, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "line_img" },
				_react2.default.createElement(
					"ul",
					null,
					_react2.default.createElement(
						"li",
						{ id: "1" },
						_react2.default.createElement(
							"div",
							{ className: "tupian" },
							_react2.default.createElement(
								"div",
								null,
								_react2.default.createElement("img", { src: "/img/dan.png" })
							)
						),
						_react2.default.createElement(
							"span",
							null,
							"\u5957\u897F"
						)
					),
					_react2.default.createElement(
						"li",
						{ id: "2" },
						_react2.default.createElement(
							"div",
							{ className: "tupian" },
							_react2.default.createElement(
								"div",
								null,
								_react2.default.createElement("img", { src: "/img/taoxi.png" })
							)
						),
						_react2.default.createElement(
							"span",
							null,
							"\u5355\u897F"
						)
					),
					_react2.default.createElement(
						"li",
						{ id: "3" },
						_react2.default.createElement(
							"div",
							{ className: "tupian" },
							_react2.default.createElement(
								"div",
								null,
								_react2.default.createElement("img", { src: "/img/kuzhuang.png" })
							)
						),
						_react2.default.createElement(
							"span",
							null,
							"\u88E4\u88C5"
						)
					),
					_react2.default.createElement(
						"li",
						{ id: "4" },
						_react2.default.createElement(
							"div",
							{ className: "tupian" },
							_react2.default.createElement(
								"div",
								null,
								_react2.default.createElement("img", { src: "/img/dan.png" })
							)
						),
						_react2.default.createElement(
							"span",
							null,
							"\u5927\u8863"
						)
					),
					_react2.default.createElement(
						"li",
						{ id: "5" },
						_react2.default.createElement(
							"div",
							{ className: "tupian" },
							_react2.default.createElement(
								"div",
								null,
								_react2.default.createElement("img", { src: "/img/majia.png" })
							)
						),
						_react2.default.createElement(
							"span",
							null,
							"\u9A6C\u7532"
						)
					),
					_react2.default.createElement(
						"li",
						{ id: "6" },
						_react2.default.createElement(
							"div",
							{ className: "tupian" },
							_react2.default.createElement(
								"div",
								null,
								_react2.default.createElement("img", { src: "/img/chen.png" })
							)
						),
						_react2.default.createElement(
							"span",
							null,
							"\u886C\u886B"
						)
					),
					_react2.default.createElement(
						"li",
						{ id: "7" },
						_react2.default.createElement(
							"div",
							{ className: "tupian" },
							_react2.default.createElement(
								"div",
								null,
								_react2.default.createElement("img", { src: "/img/danrongshan.png" })
							)
						),
						_react2.default.createElement(
							"span",
							null,
							"\u7F8A\u7ED2\u886B"
						)
					),
					_react2.default.createElement(
						"li",
						{ id: "8" },
						_react2.default.createElement(
							"div",
							{ className: "tupian" },
							_react2.default.createElement(
								"div",
								null,
								_react2.default.createElement("img", { src: "/img/gehu.png" })
							)
						),
						_react2.default.createElement(
							"span",
							null,
							"\u4E2A\u6237"
						)
					),
					_react2.default.createElement(
						"li",
						{ id: "9" },
						_react2.default.createElement(
							"div",
							{ className: "tupian" },
							_react2.default.createElement(
								"div",
								null,
								_react2.default.createElement("img", { src: "/img/xiangbao.png" })
							)
						),
						_react2.default.createElement(
							"span",
							null,
							"\u7BB1\u5305"
						)
					),
					_react2.default.createElement(
						"li",
						{ id: "11" },
						_react2.default.createElement(
							"div",
							{ className: "tupian" },
							_react2.default.createElement(
								"div",
								null,
								_react2.default.createElement("img", { src: "/img/jiafang.png" })
							)
						),
						_react2.default.createElement(
							"span",
							null,
							"\u5BB6\u7EBA"
						)
					)
				)
			);
		}
	}]);

	return Store_line;
}(_react.Component);

exports.default = Store_line;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "store_line.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sort_List = function (_Component) {
	_inherits(Sort_List, _Component);

	function Sort_List(props) {
		_classCallCheck(this, Sort_List);

		var _this = _possibleConstructorReturn(this, (Sort_List.__proto__ || Object.getPrototypeOf(Sort_List)).call(this, props));

		_this.state = {
			sortDataList: []
		};
		return _this;
	}

	_createClass(Sort_List, [{
		key: "eventClick",
		value: function eventClick() {
			console.log(11111);
		}
	}, {
		key: "getDataSort",
		value: function getDataSort(list) {
			console.log(this);
			return list.map(function (value, index) {
				return _react2.default.createElement(
					"li",
					{ onClick: "eventClick()" },
					_react2.default.createElement(
						"div",
						{ className: "product_img" },
						_react2.default.createElement("img", { src: "http://www.fanjiangdz.com/image/" + value.filepath })
					),
					_react2.default.createElement(
						"div",
						{ className: "product_intro" },
						_react2.default.createElement(
							"span",
							null,
							value.name
						),
						_react2.default.createElement(
							"span",
							null,
							value.categoryPLName
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "product_sign" },
						value.manufacturer
					),
					_react2.default.createElement(
						"div",
						{ className: "product_price" },
						value.price,
						".00"
					)
				);
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "products_type" },
				_react2.default.createElement(
					"ul",
					{ id: "product_box" },
					this.getDataSort(this.state.sortDataList)
				)
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			var urlLink = '';
			if (this.props.TypeId = "undefined") {
				urlLink = "/sortdata/products/category/ajaxselect?id=1&currPage=1";
			} else {
				urlLink = "/sortdata/products/category/ajaxselect?id=" + this.props.TypeId + "&currPage=1";
			}
			console.log(urlLink);
			fetch(urlLink).then(function (response) {
				return response.json();
			}).then(function (res) {
				_this2.setState({
					sortDataList: res.data
				});
			}).catch(function (e) {
				alert(e);
			});
		}
	}]);

	return Sort_List;
}(_react.Component);

exports.default = Sort_List;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Sort_List.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-api@0.4.7@react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopLine = function (_Component) {
	_inherits(TopLine, _Component);

	function TopLine() {
		_classCallCheck(this, TopLine);

		return _possibleConstructorReturn(this, (TopLine.__proto__ || Object.getPrototypeOf(TopLine)).apply(this, arguments));
	}

	_createClass(TopLine, [{
		key: "selectTypeId",
		value: function selectTypeId() {
			console.log(this);
			var liState = this.refs.content_tao.innerHTML;
			var typeId;
			switch (liState) {
				case "套西":
					typeId = 1;break;
				case "单西":
					typeId = 2;break;
				case "裤装":
					typeId = 3;break;
				case "大衣":
					typeId = 4;break;
				case "马甲":
					typeId = 5;break;
				case "衬衫":
					typeId = 6;break;
				case "箱包":
					typeId = 7;break;
				case "个户":
					typeId = 8;break;
				case "羊绒衫":
					typeId = 9;break;
				case "家纺":
					typeId = 11;break;
			}
			console.log(typeId);
			this.props.onFatherLi({ typeId: typeId });
		}
	}, {
		key: "render",
		value: function render() {
			console.log(this);
			return _react2.default.createElement(
				"div",
				{ className: "topLine line_scroll" },
				_react2.default.createElement(
					"ul",
					null,
					_react2.default.createElement(
						"li",
						{ onClick: this.selectTypeId.bind(this) },
						_react2.default.createElement(
							"span",
							null,
							_react2.default.createElement(
								"i",
								{ ref: "content_tao", className: "border_active" },
								"\u5957\u897F"
							)
						)
					),
					_react2.default.createElement(
						"li",
						{ onClick: this.selectTypeId.bind(this) },
						_react2.default.createElement(
							"span",
							null,
							_react2.default.createElement(
								"i",
								{ ref: "content_dan" },
								"\u5355\u897F"
							)
						)
					),
					_react2.default.createElement(
						"li",
						{ onClick: this.selectTypeId.bind(this) },
						_react2.default.createElement(
							"span",
							null,
							_react2.default.createElement(
								"i",
								{ ref: "content_ku" },
								"\u88E4\u88C5"
							)
						)
					),
					_react2.default.createElement(
						"li",
						{ onClick: this.selectTypeId.bind(this) },
						_react2.default.createElement(
							"span",
							null,
							_react2.default.createElement(
								"i",
								{ ref: "content_da" },
								"\u5927\u8863"
							)
						)
					),
					_react2.default.createElement(
						"li",
						{ onClick: this.selectTypeId.bind(this) },
						_react2.default.createElement(
							"span",
							null,
							_react2.default.createElement(
								"i",
								{ ref: "content_ma" },
								"\u9A6C\u7532"
							)
						)
					),
					_react2.default.createElement(
						"li",
						{ onClick: this.selectTypeId.bind(this) },
						_react2.default.createElement(
							"span",
							null,
							_react2.default.createElement(
								"i",
								{ ref: "content_chen" },
								"\u886C\u886B"
							)
						)
					),
					_react2.default.createElement(
						"li",
						{ onClick: this.selectTypeId.bind(this) },
						_react2.default.createElement(
							"span",
							null,
							_react2.default.createElement(
								"i",
								{ ref: "content_xiang" },
								"\u7BB1\u5305"
							)
						)
					),
					_react2.default.createElement(
						"li",
						{ onClick: this.selectTypeId.bind(this) },
						_react2.default.createElement(
							"span",
							null,
							_react2.default.createElement(
								"i",
								{ ref: "content_ge" },
								"\u4E2A\u6237"
							)
						)
					),
					_react2.default.createElement(
						"li",
						{ onClick: this.selectTypeId.bind(this) },
						_react2.default.createElement(
							"span",
							null,
							_react2.default.createElement(
								"i",
								{ ref: "content_yang" },
								"\u7F8A\u7ED2\u886B"
							)
						)
					),
					_react2.default.createElement(
						"li",
						{ onClick: this.selectTypeId.bind(this) },
						_react2.default.createElement(
							"span",
							null,
							_react2.default.createElement(
								"i",
								{ ref: "content_jia" },
								"\u5BB6\u7EBA"
							)
						)
					)
				)
			);
		}
	}]);

	return TopLine;
}(_react.Component);

exports.default = TopLine;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\Administrator\\Desktop\\xiangmu\\aijun_product\\node_modules\\._react-hot-loader@1.3.1@react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "topLine.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ })
/******/ ]);