exports.id = "components_MyLayout_js";
exports.ids = ["components_MyLayout_js"];
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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9maWxlLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS9pZ25vcmVkfEM6XFxVc2Vyc1xcRGVzaWdhblxcRGVza3RvcFxccHJvZmlsZVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbImxpbmtTdHlsZSIsIm1hcmdpblJpZ2h0IiwiSGVhZGVyIiwibGF5b3V0U3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUc7QUFDaEJDLGFBQVcsRUFBRTtBQURHLENBQWxCOztBQUlBLE1BQU1DLE1BQU0sR0FBRyxtQkFDWDtBQUFBLDBCQUNJLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQSwyQkFDRTtBQUFHLFdBQUssRUFBRUYsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQSwyQkFDRTtBQUFHLFdBQUssRUFBRUEsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQU9JLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQSwyQkFDRTtBQUFHLFdBQUssRUFBRUEsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixlQVVJLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQSwyQkFDRTtBQUFHLFdBQUssRUFBRUEsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjs7QUFpQkEsK0RBQWVFLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQSxNQUFNQyxXQUFXLEdBQUc7QUFDaEJDLFFBQU0sRUFBRSxFQURRO0FBRWhCQyxTQUFPLEVBQUUsRUFGTztBQUdoQkMsUUFBTSxFQUFFLGdCQUhRO0FBSW5CTCxhQUFXLEVBQUU7QUFKTSxDQUFwQjtBQU9BO0FBQ0E7QUFDQTs7QUFDQSxNQUFNTSxNQUFNLEdBQUlDLEtBQUQsaUJBQ1o7QUFBQSwwQkFDRiw4REFBQyxrREFBRDtBQUFBLDJCQUNHO0FBQ0MsU0FBRyxFQUFDLFlBREw7QUFFQyxVQUFJLEVBQUMsdUVBRk47QUFHQyxlQUFTLEVBQUMseUVBSFg7QUFJQyxpQkFBVyxFQUFDO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERSxlQVNBO0FBQUssU0FBSyxFQUFFTCxXQUFaO0FBQUEsNEJBQ0UsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHSyxLQUFLLENBQUNDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREg7O0FBaUJBLCtEQUFlRixNQUFmLEU7Ozs7Ozs7Ozs7QUN0Q0EsZSIsImZpbGUiOiJjb21wb25lbnRzX015TGF5b3V0X2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9SZW1lbWJlciB0aGF0IGNvbXBvbmVudCBuYW1lcyBzaG91bGQgYWx3YXlzIHN0YXJ0IHdpdGggYSBDYXBpdGFsIGxldHRlci5cclxuXHJcbi8qU2luY2UgTmV4dC5qcyBpcyB1c2VkIHRvIGNyZWF0ZSBzZXJ2ZXItcmVuZGVyZWQgcGFnZXMsIGFkZGluZyBhIGxpbmsgdXNpbmcgYSBub3JtYWwgPGE+IHRhZyB3b3VsZCBjYXVzZSBhIGxpbmsgdGhhdCB3b3VsZCBiZSBuYXZpZ2F0ZWQgdG8gdmlhIHRoZSBzZXJ2ZXIuIFxyXG5UaGlzIGlzIG9idmlvdXNseSBub3QgYWx3YXlzIG5lY2Vzc2FyeS4gXHJcblRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbiAodGhpcyB0YWtlcyBwbGFjZSBpbiB0aGUgYnJvd3Nlciwgd2l0aG91dCBtYWtpbmcgYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIpIHdlIHVzZSBOZXh0Lmpz4oCZIExpbmsgQVBJLiovXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuICBtYXJnaW5SaWdodDogMTVcclxufVxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PlByb2plY3RzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsIi8qIEluIG91ciBhcHAsIHdlJ2xsIHVzZSBhIGNvbW1vbiBzdHlsZSBhY3Jvc3MgdmFyaW91cyBwYWdlcy4gRm9yIHRoaXMgcHVycG9zZSwgd2UgY2FuIGNyZWF0ZSBhIGNvbW1vbiBMYXlvdXQgY29tcG9uZW50IGFuZCB1c2UgaXQgZm9yIGVhY2ggb2Ygb3VyIHBhZ2VzLiBIZXJlJ3MgYW4gZXhhbXBsZTogXHJcblxyXG5TaW5jZSBOZXh0LmpzIGlzIHVzZWQgdG8gY3JlYXRlIHNlcnZlci1yZW5kZXJlZCBwYWdlcywgYWRkaW5nIGEgbGluayB1c2luZyBhIG5vcm1hbCA8YT4gdGFnIHdvdWxkIGNhdXNlIGEgbGluayB0aGF0IHdvdWxkIGJlIG5hdmlnYXRlZCB0byB2aWEgdGhlIHNlcnZlci4gXHJcblRoaXMgaXMgb2J2aW91c2x5IG5vdCBhbHdheXMgbmVjZXNzYXJ5LiBcclxuVG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uICh0aGlzIHRha2VzIHBsYWNlIGluIHRoZSBicm93c2VyLCB3aXRob3V0IG1ha2luZyBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlcikgd2UgdXNlIE5leHQuanPigJkgTGluayBBUEkuKi9cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vKllvdSBjYW4gdXNlIHRoaXMgYnVpbHQtaW4gY29tcG9uZW50IHRvIGFwcGVuZCBlbGVtZW50cyB0byB0aGUgPGhlYWQ+IGVsZW1lbnQgb2YgdGhlIHBhZ2UuIE1vcmUgaW5mbyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzLyNwb3B1bGF0aW5nLWhlYWQgXHJcbk5vdGljZSB0aGF0IHdlIGFkZCB0aGUgbGluayBmb3IgdGhlIHN0eWxlc2hlZXQgZm9yIHVzaW5nIFJlYWN0LUJvb3RzdHJhcCBjb21wb25lbnRzIHRvIHRoZSA8SGVhZD4uICovXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuXHJcbmNvbnN0IGxheW91dFN0eWxlID0ge1xyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHBhZGRpbmc6IDIwLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLFxyXG5cdG1hcmdpblJpZ2h0OiAnMjBweCdcclxufVxyXG5cclxuLyogTm90aWNlIGluIHRoZSBleGFtcGxlIGJlbG93IHRoYXQgd2UgcGFzcyBjaGlsZHJlbiBhbmQgdGl0bGUgYXMgcHJvcHMgdG8gdGhlIExheW91dCBjb21wb25lbnRzLlxyXG5JZiB5b3UgcmVtb3ZlIHtjaGlsZHJlbn0sIHRoZSBMYXlvdXQgY2Fubm90IHJlbmRlciB0aGUgY29udGVudCB3ZSBwdXQgaW5zaWRlIHRoZSBMYXlvdXQgZWxlbWVudC4gXHJcbkhhdmUgYSBsb29rIGF0IC4vcGFnZXMvaW5kZXguanMgdG8gc2VlIHdoZXJlIHdlIHBhc3MgcHJvcHMgdGhyb3VnaCB0byB0aGlzIExheW91dCBDb21wb25lbnQuICovXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gICA8ZGl2PlxyXG5cdDxIZWFkPlxyXG5cdCAgIDxsaW5rXHJcbiAgXHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXHJcbiAgXHRcdFx0aHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgXHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxyXG4gIFx0XHRcdGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuXHRcdC8+XHJcblx0PC9IZWFkPlxyXG4gIFx0PGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxyXG4gICAgXHQ8SGVhZGVyIC8+XHJcbiAgICBcdHtwcm9wcy5jaGlsZHJlbn1cclxuICBcdDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9