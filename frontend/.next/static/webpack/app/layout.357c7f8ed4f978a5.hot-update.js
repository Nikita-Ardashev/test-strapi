"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/components/header.tsx":
/*!***********************************!*\
  !*** ./app/components/header.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_header_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/header.sass */ \"(app-pages-browser)/./app/styles/module/header.sass\");\n/* harmony import */ var _app_utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/api */ \"(app-pages-browser)/./app/utils/api.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Header.useEffect\": ()=>{\n            (0,_app_utils_api__WEBPACK_IMPORTED_MODULE_3__.apiGetProfile)(localStorage.getItem('token')).then({\n                \"Header.useEffect\": (r)=>{\n                    setUser(r);\n                    console.log(r);\n                }\n            }[\"Header.useEffect\"]);\n        }\n    }[\"Header.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"TESTStrapi\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yodiz\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\components\\\\header.tsx\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        href: \"\".concat(_app_utils_api__WEBPACK_IMPORTED_MODULE_3__.API_URL, \"/admin\"),\n                        target: \"_blank\",\n                        children: [\n                            \"Админ панель\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                \"aria-hidden\": \"true\",\n                                height: \"7\",\n                                viewBox: \"0 0 6 6\",\n                                width: \"7\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    className: \"link-svg\",\n                                    d: \"M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z\",\n                                    fill: \"white\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Yodiz\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\components\\\\header.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Yodiz\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\components\\\\header.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Yodiz\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\components\\\\header.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: user === null || user === void 0 ? void 0 : user.username\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Yodiz\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\components\\\\header.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: user === null || user === void 0 ? void 0 : user.email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Yodiz\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\components\\\\header.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Yodiz\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\components\\\\header.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Yodiz\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\components\\\\header.tsx\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Yodiz\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\components\\\\header.tsx\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Header, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ3JCO0FBQzJCO0FBQzVCO0FBRTdCLE1BQU1NLFNBQVM7O0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQTtJQUNoQ0QsZ0RBQVNBOzRCQUFDO1lBQ1RHLDZEQUFhQSxDQUFDSyxhQUFhQyxPQUFPLENBQUMsVUFBVUMsSUFBSTtvQ0FBQyxDQUFDQztvQkFDbERKLFFBQVFJO29CQUNSQyxRQUFRQyxHQUFHLENBQUNGO2dCQUNiOztRQUNEOzJCQUFHLEVBQUU7SUFDTCxxQkFDQyw4REFBQ0c7UUFBT0MsV0FBVTs7MEJBQ2pCLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQzs7a0NBQ0EsOERBQUNiLGlEQUFJQTt3QkFBQ2MsTUFBTSxHQUFXLE9BQVJoQixtREFBT0EsRUFBQzt3QkFBU2lCLFFBQU87OzRCQUFTOzBDQUUvQyw4REFBQ0M7Z0NBQUlDLGVBQVk7Z0NBQU9DLFFBQU87Z0NBQUlDLFNBQVE7Z0NBQVVDLE9BQU07MENBQzFELDRFQUFDQztvQ0FDQVYsV0FBVTtvQ0FDVlcsR0FBRTtvQ0FDRkMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSVIsOERBQUNDOzswQ0FDQSw4REFBQ1o7MENBQUdWLGlCQUFBQSwyQkFBQUEsS0FBTXVCLFFBQVE7Ozs7OzswQ0FDbEIsOERBQUNiOzBDQUFHVixpQkFBQUEsMkJBQUFBLEtBQU13QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0E3Qk16QjtLQUFBQTtBQStCTixpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxZb2RpelxccHJvamVjdHNcXHRlc3Qtc3RyYXBpXFxmcm9udGVuZFxcYXBwXFxjb21wb25lbnRzXFxoZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnQC9zdHlsZXMvaGVhZGVyLnNhc3MnO1xyXG5pbXBvcnQgeyBBUElfVVJMLCBhcGlHZXRQcm9maWxlIH0gZnJvbSAnQC9hcHAvdXRpbHMvYXBpJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgVXNlcl9QbGFpbiB9IGZyb20gJy4uL3R5cGVzL2NvbW1vbi9Vc2VyJztcclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJfUGxhaW4+KCk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGFwaUdldFByb2ZpbGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpLnRoZW4oKHIpID0+IHtcclxuXHRcdFx0c2V0VXNlcihyKTtcclxuXHRcdFx0Y29uc29sZS5sb2cocik7XHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcblx0XHRcdDxwPlRFU1RTdHJhcGk8L3A+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PExpbmsgaHJlZj17YCR7QVBJX1VSTH0vYWRtaW5gfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHRcdNCQ0LTQvNC40L0g0L/QsNC90LXQu9GMXHJcblx0XHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGhlaWdodD1cIjdcIiB2aWV3Qm94PVwiMCAwIDYgNlwiIHdpZHRoPVwiN1wiPlxyXG5cdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImxpbmstc3ZnXCJcclxuXHRcdFx0XHRcdFx0XHRkPVwiTTEuMjUyMTUgNS41NDczMUwwLjYyMjc0MiA0LjkxNzlMMy43ODE2OSAxLjc1NTk3SDEuMzgzNEwxLjM4OTM2IDAuODkwOTE1SDUuMjc2MTVWNC43ODA2OUg0LjQwNTEzTDQuNDExMDkgMi4zODUzOEwxLjI1MjE1IDUuNTQ3MzFaXCJcclxuXHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIlxyXG5cdFx0XHRcdFx0XHQ+PC9wYXRoPlxyXG5cdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0PHA+e3VzZXI/LnVzZXJuYW1lfTwvcD5cclxuXHRcdFx0XHRcdDxwPnt1c2VyPy5lbWFpbH08L3A+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvaGVhZGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJX1VSTCIsImFwaUdldFByb2ZpbGUiLCJMaW5rIiwiSGVhZGVyIiwidXNlciIsInNldFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGhlbiIsInIiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwicCIsImRpdiIsImhyZWYiLCJ0YXJnZXQiLCJzdmciLCJhcmlhLWhpZGRlbiIsImhlaWdodCIsInZpZXdCb3giLCJ3aWR0aCIsInBhdGgiLCJkIiwiZmlsbCIsInNwYW4iLCJ1c2VybmFtZSIsImVtYWlsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/header.tsx\n"));

/***/ })

});