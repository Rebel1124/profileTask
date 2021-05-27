(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Desigan\\Desktop\\profile\\components\\Header.js";
//Remember that component names should always start with a Capital letter.

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/

const linkStyle = {
  marginRight: 15
};

const Header = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      style: linkStyle,
      children: "Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/about",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      style: linkStyle,
      children: "About"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/projects",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      style: linkStyle,
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/contact",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      style: linkStyle,
      children: "Contact"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");

var _jsxFileName = "C:\\Users\\Desigan\\Desktop\\profile\\components\\MyLayout.js";

/* In our app, we'll use a common style across various pages. For this purpose, we can create a common Layout component and use it for each of our pages. Here's an example: 

Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/

/*You can use this built-in component to append elements to the <head> element of the page. More info here: https://github.com/zeit/next.js/#populating-head 
Notice that we add the link for the stylesheet for using React-Bootstrap components to the <Head>. */



const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  marginRight: '20px'
};
/* Notice in the example below that we pass children and title as props to the Layout components.
If you remove {children}, the Layout cannot render the content we put inside the Layout element. 
Have a look at ./pages/index.js to see where we pass props through to this Layout Component. */

const Layout = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossorigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 2
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: layoutStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }, undefined), props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 4
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 23,
  columnNumber: 4
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Desigan\\Desktop\\profile\\pages\\index.js";
//Import the Link API to support client-side navigation



/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.*/

/* harmony default export */ __webpack_exports__["default"] = (() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
    style: {
      borderRadius: "50%",
      padding: "15px",
      marginLeft: "450px"
    },
    class: "img-circle",
    alt: "Image",
    height: "200px",
    width: "150px",
    src: "/static/images/myPic.jpg/",
    thumbnail: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 6
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    style: {
      color: "midnightblue",
      textAlign: "center",
      marginRight: "250px"
    },
    children: "Professional Summary"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "I have been working in the financial services industry for about 11 years now. I began my career in 2007 as a market risk analyst at Nedbank Capital (Ned Cap) where I spent the better part of 6 years. I left Ned Cap in 2014 to take up a quantitative analyst position at Absa Capital. In 2015, I joined OMSFIN (Old Mutual Specialized Finance) in Cape Town as a risk analyst before joining Futuregrowth in 2016 to take up my current role as a Fixed Income Dealer."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 6
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "During my time time in the industry I have managed to obtain both my Chartered Financial Analyst (CFA) and Financial Risk Management (FRM) designations. In addition to this, I have also obtained my ACI Dealing Certificate and more recently I have completed my Masters Degree in Commerce (specializing in Finance and Risk Management) from the University of Cape Town."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 6
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "I have also developed job specific skills relating to the financial markets, in particular risk management, fixed income dealing and software development. I am also very proficient in Microsoft Excel and VBA as well as Python. On a more personal note, I enjoy going to the gym and am an ardent football and rugby fan. I enjoy action/comedies and my favorite genre of music is rock/pop."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 6
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 2
}, undefined));

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Image");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9maWxlLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2ZpbGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcHJvZmlsZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wcm9maWxlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vcHJvZmlsZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJvZmlsZS9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9JbWFnZVwiIiwid2VicGFjazovL3Byb2ZpbGUvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3Byb2ZpbGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wcm9maWxlL2lnbm9yZWR8QzpcXFVzZXJzXFxEZXNpZ2FuXFxEZXNrdG9wXFxwcm9maWxlXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiLCJsYXlvdXRTdHlsZSIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luTGVmdCIsImNvbG9yIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkQsZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLGVBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSixlQWlCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxFOzs7Ozs7Ozs7OztBQ1JBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vUmVtZW1iZXIgdGhhdCBjb21wb25lbnQgbmFtZXMgc2hvdWxkIGFsd2F5cyBzdGFydCB3aXRoIGEgQ2FwaXRhbCBsZXR0ZXIuXHJcblxyXG4vKlNpbmNlIE5leHQuanMgaXMgdXNlZCB0byBjcmVhdGUgc2VydmVyLXJlbmRlcmVkIHBhZ2VzLCBhZGRpbmcgYSBsaW5rIHVzaW5nIGEgbm9ybWFsIDxhPiB0YWcgd291bGQgY2F1c2UgYSBsaW5rIHRoYXQgd291bGQgYmUgbmF2aWdhdGVkIHRvIHZpYSB0aGUgc2VydmVyLiBcclxuVGhpcyBpcyBvYnZpb3VzbHkgbm90IGFsd2F5cyBuZWNlc3NhcnkuIFxyXG5UbyBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb24gKHRoaXMgdGFrZXMgcGxhY2UgaW4gdGhlIGJyb3dzZXIsIHdpdGhvdXQgbWFraW5nIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyKSB3ZSB1c2UgTmV4dC5qc+KAmSBMaW5rIEFQSS4qL1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgbWFyZ2luUmlnaHQ6IDE1XHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Qcm9qZWN0czwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Db250YWN0PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCIvKiBJbiBvdXIgYXBwLCB3ZSdsbCB1c2UgYSBjb21tb24gc3R5bGUgYWNyb3NzIHZhcmlvdXMgcGFnZXMuIEZvciB0aGlzIHB1cnBvc2UsIHdlIGNhbiBjcmVhdGUgYSBjb21tb24gTGF5b3V0IGNvbXBvbmVudCBhbmQgdXNlIGl0IGZvciBlYWNoIG9mIG91ciBwYWdlcy4gSGVyZSdzIGFuIGV4YW1wbGU6IFxyXG5cclxuU2luY2UgTmV4dC5qcyBpcyB1c2VkIHRvIGNyZWF0ZSBzZXJ2ZXItcmVuZGVyZWQgcGFnZXMsIGFkZGluZyBhIGxpbmsgdXNpbmcgYSBub3JtYWwgPGE+IHRhZyB3b3VsZCBjYXVzZSBhIGxpbmsgdGhhdCB3b3VsZCBiZSBuYXZpZ2F0ZWQgdG8gdmlhIHRoZSBzZXJ2ZXIuIFxyXG5UaGlzIGlzIG9idmlvdXNseSBub3QgYWx3YXlzIG5lY2Vzc2FyeS4gXHJcblRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbiAodGhpcyB0YWtlcyBwbGFjZSBpbiB0aGUgYnJvd3Nlciwgd2l0aG91dCBtYWtpbmcgYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIpIHdlIHVzZSBOZXh0Lmpz4oCZIExpbmsgQVBJLiovXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLypZb3UgY2FuIHVzZSB0aGlzIGJ1aWx0LWluIGNvbXBvbmVudCB0byBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIDxoZWFkPiBlbGVtZW50IG9mIHRoZSBwYWdlLiBNb3JlIGluZm8gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy8jcG9wdWxhdGluZy1oZWFkIFxyXG5Ob3RpY2UgdGhhdCB3ZSBhZGQgdGhlIGxpbmsgZm9yIHRoZSBzdHlsZXNoZWV0IGZvciB1c2luZyBSZWFjdC1Cb290c3RyYXAgY29tcG9uZW50cyB0byB0aGUgPEhlYWQ+LiAqL1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXHJcblxyXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBwYWRkaW5nOiAyMCxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyxcclxuXHRtYXJnaW5SaWdodDogJzIwcHgnXHJcbn1cclxuXHJcbi8qIE5vdGljZSBpbiB0aGUgZXhhbXBsZSBiZWxvdyB0aGF0IHdlIHBhc3MgY2hpbGRyZW4gYW5kIHRpdGxlIGFzIHByb3BzIHRvIHRoZSBMYXlvdXQgY29tcG9uZW50cy5cclxuSWYgeW91IHJlbW92ZSB7Y2hpbGRyZW59LCB0aGUgTGF5b3V0IGNhbm5vdCByZW5kZXIgdGhlIGNvbnRlbnQgd2UgcHV0IGluc2lkZSB0aGUgTGF5b3V0IGVsZW1lbnQuIFxyXG5IYXZlIGEgbG9vayBhdCAuL3BhZ2VzL2luZGV4LmpzIHRvIHNlZSB3aGVyZSB3ZSBwYXNzIHByb3BzIHRocm91Z2ggdG8gdGhpcyBMYXlvdXQgQ29tcG9uZW50LiAqL1xyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICAgPGRpdj5cclxuXHQ8SGVhZD5cclxuXHQgICA8bGlua1xyXG4gIFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gIFx0XHRcdGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gIFx0XHRcdGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcclxuICBcdFx0XHRjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcblx0XHQvPlxyXG5cdDwvSGVhZD5cclxuICBcdDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cclxuICAgIFx0PEhlYWRlciAvPlxyXG4gICAgXHR7cHJvcHMuY2hpbGRyZW59XHJcbiAgXHQ8L2Rpdj5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiLy9JbXBvcnQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbWFnZSdcclxuXHJcbi8qIE5vdGljZSBpbiB0aGUgZXhhbXBsZSBiZWxvdyBob3cgd2UgcmVuZGVyIHN0YXRpYyBpbWFnZXMgd2l0aCBOZXh0LmpzOlxyXG5DcmVhdGUgYSBmb2xkZXIgY2FsbGVkIHN0YXRpYyBpbiB5b3VyIHByb2plY3Qgcm9vdCBkaXJlY3RvcnkuIEZyb20geW91ciBjb2RlIHlvdSBjYW4gdGhlbiByZWZlcmVuY2UgdGhvc2UgZmlsZXMgd2l0aCAvc3RhdGljLyBVUkxzIChzZWU8aW1nIHNyYz17YC9zdGF0aWMvYXJ0LyR7cHJvcHMuZGF0YS5pbWFnZX0uanBnYH0gYWx0PVwiXCIvPikgXHJcbk5vdGU6IERvbid0IG5hbWUgdGhlIHN0YXRpYyBkaXJlY3RvcnkgYW55dGhpbmcgZWxzZS4gVGhlIG5hbWUgaXMgcmVxdWlyZWQgYW5kIGlzIHRoZSBvbmx5IGRpcmVjdG9yeSB0aGF0IE5leHQuanMgdXNlcyBmb3Igc2VydmluZyBzdGF0aWMgYXNzZXRzLiovXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuXHQ8TGF5b3V0PlxyXG5cdFx0PGJyIC8+XHJcblx0XHQ8SW1hZ2Ugc3R5bGU9e3tib3JkZXJSYWRpdXM6XCI1MCVcIiwgcGFkZGluZzpcIjE1cHhcIiwgbWFyZ2luTGVmdDpcIjQ1MHB4XCJ9fSBjbGFzcyA9IFwiaW1nLWNpcmNsZVwiIGFsdD1cIkltYWdlXCIgaGVpZ2h0PVwiMjAwcHhcIiB3aWR0aD1cIjE1MHB4XCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbXlQaWMuanBnL1wiIHRodW1ibmFpbCAvPlxyXG5cdCAgICA8YnIgLz5cclxuXHRcdDxoMSBzdHlsZT17e2NvbG9yOiBcIm1pZG5pZ2h0Ymx1ZVwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIiwgbWFyZ2luUmlnaHQ6XCIyNTBweFwifX0+UHJvZmVzc2lvbmFsIFN1bW1hcnk8L2gxPlxyXG5cclxuXHRcdDxiciAvPlxyXG4gICAgXHQ8cD5JIGhhdmUgYmVlbiB3b3JraW5nIGluIHRoZSBmaW5hbmNpYWwgc2VydmljZXMgaW5kdXN0cnkgZm9yIGFib3V0IDExIHllYXJzIG5vdy4gSSBiZWdhbiBteSBjYXJlZXIgaW4gMjAwNyBhcyBhIG1hcmtldCByaXNrIGFuYWx5c3RcclxuICAgICAgICBcdGF0IE5lZGJhbmsgQ2FwaXRhbCAoTmVkIENhcCkgd2hlcmUgSSBzcGVudCB0aGUgYmV0dGVyIHBhcnQgb2YgNiB5ZWFycy4gSSBsZWZ0IE5lZCBDYXAgaW4gMjAxNCB0byB0YWtlIHVwIGEgcXVhbnRpdGF0aXZlIGFuYWx5c3QgcG9zaXRpb25cclxuICAgICAgICBcdGF0IEFic2EgQ2FwaXRhbC4gSW4gMjAxNSwgSSBqb2luZWQgT01TRklOIChPbGQgTXV0dWFsIFNwZWNpYWxpemVkIEZpbmFuY2UpIGluIENhcGUgVG93biBhcyBhIHJpc2sgYW5hbHlzdCBiZWZvcmUgam9pbmluZyBGdXR1cmVncm93dGggaW5cclxuICAgICAgICBcdDIwMTYgdG8gdGFrZSB1cCBteSBjdXJyZW50IHJvbGUgYXMgYSBGaXhlZCBJbmNvbWUgRGVhbGVyLjwvcD5cclxuXHJcbiAgICBcdDxwPkR1cmluZyBteSB0aW1lIHRpbWUgaW4gdGhlIGluZHVzdHJ5IEkgaGF2ZSBtYW5hZ2VkIHRvIG9idGFpbiBib3RoIG15IENoYXJ0ZXJlZCBGaW5hbmNpYWwgQW5hbHlzdCAoQ0ZBKSBhbmQgXHJcbiAgICAgIFx0XHRGaW5hbmNpYWwgUmlzayBNYW5hZ2VtZW50IChGUk0pIGRlc2lnbmF0aW9ucy4gSW4gYWRkaXRpb24gdG8gdGhpcywgSSBoYXZlIGFsc28gb2J0YWluZWQgbXkgQUNJIERlYWxpbmcgXHJcbiAgICAgIFx0XHRDZXJ0aWZpY2F0ZSBhbmQgbW9yZSByZWNlbnRseSBJIGhhdmUgY29tcGxldGVkIG15IE1hc3RlcnMgRGVncmVlIGluIENvbW1lcmNlIChzcGVjaWFsaXppbmcgaW4gRmluYW5jZSBcclxuICAgICAgXHRcdGFuZCBSaXNrIE1hbmFnZW1lbnQpIGZyb20gdGhlIFVuaXZlcnNpdHkgb2YgQ2FwZSBUb3duLjwvcD5cclxuXHJcbiAgICBcdDxwPkkgaGF2ZSBhbHNvIGRldmVsb3BlZCBqb2Igc3BlY2lmaWMgc2tpbGxzIHJlbGF0aW5nIHRvIHRoZSBmaW5hbmNpYWwgbWFya2V0cywgaW4gcGFydGljdWxhciByaXNrIG1hbmFnZW1lbnQsIFxyXG4gICAgICBcdFx0Zml4ZWQgaW5jb21lIGRlYWxpbmcgYW5kIHNvZnR3YXJlIGRldmVsb3BtZW50LiBJIGFtIGFsc28gdmVyeSBwcm9maWNpZW50IGluIE1pY3Jvc29mdCBFeGNlbCBhbmQgVkJBIGFzIHdlbGwgYXMgXHJcbiAgICAgIFx0XHRQeXRob24uIE9uIGEgbW9yZSBwZXJzb25hbCBub3RlLCBJIGVuam95IGdvaW5nIHRvIHRoZSBneW0gYW5kIGFtIGFuIGFyZGVudCBmb290YmFsbCBhbmQgcnVnYnkgZmFuLiBcclxuICAgICAgXHRcdEkgZW5qb3kgYWN0aW9uL2NvbWVkaWVzIGFuZCBteSBmYXZvcml0ZSBnZW5yZSBvZiBtdXNpYyBpcyByb2NrL3BvcC48L3A+XHJcblxyXG4gIDwvTGF5b3V0PlxyXG4pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0ltYWdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9