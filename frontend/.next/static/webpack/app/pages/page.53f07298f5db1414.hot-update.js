"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/page",{

/***/ "(app-pages-browser)/./app/pages/anyData.tsx":
/*!*******************************!*\
  !*** ./app/pages/anyData.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api */ \"(app-pages-browser)/./app/utils/api.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst AnyData = ()=>{\n    var _this = undefined;\n    _s();\n    const jsonRender = function(data) {\n        let nesting = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;\n        const codes = [];\n        const render = (obj)=>{\n            const keys = Object.keys(obj);\n            keys.forEach((key, i)=>{\n                if (typeof obj[key] === 'object' && obj[key] !== null && obj[key] !== undefined) {\n                    const isArray = Array.isArray(obj[key]);\n                    codes.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                        style: {\n                            paddingLeft: nesting * 32\n                        },\n                        children: \"\".concat(key, \": \").concat(isArray ? '[' : '{')\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\pages\\\\anyData.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, _this), ...jsonRender(obj[key], nesting + 1), /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                        style: {\n                            paddingLeft: nesting * 32\n                        },\n                        children: \"\".concat(isArray ? '],' : '},')\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\pages\\\\anyData.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    }, _this));\n                    return;\n                }\n                if (i === 0) codes.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                    style: {\n                        paddingLeft: nesting * 32\n                    },\n                    children: \"{\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\pages\\\\anyData.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this));\n                codes.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                    style: {\n                        paddingLeft: nesting * 32\n                    },\n                    children: '\"'.concat(key, '\": \"').concat(obj[key], '\",')\n                }, key + obj[key], false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\pages\\\\anyData.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 6\n                }, _this));\n                if (keys.length - 1 === i) codes.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                    style: {\n                        paddingLeft: nesting * 32\n                    },\n                    children: \"},\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\pages\\\\anyData.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, _this));\n            });\n        };\n        if (Array.isArray(data)) {\n            data.forEach(render);\n        } else {\n            render(data);\n        }\n        return codes;\n    };\n    const [anyData, setAnyData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nameData, setNameData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const onClickReqData = async ()=>{\n        if (nameData.trim().length === 0) {\n            alert('Введите название таблицы');\n        }\n        (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.apiGetAny)(nameData).then((r)=>{\n            setAnyData(r);\n            console.log(r);\n        }).catch((e)=>{\n            console.error(e);\n            alert('Такой таблицы не существует');\n            throw new Error(e);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home__any-data\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Введите название таблицы\",\n                        type: \"text\",\n                        value: nameData,\n                        onChange: (e)=>{\n                            setNameData(e.currentTarget.value.toLowerCase());\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\pages\\\\anyData.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: onClickReqData,\n                        children: \"OK\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\pages\\\\anyData.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\pages\\\\anyData.tsx\",\n                lineNumber: 72,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({\n                    \"AnyData.useMemo\": ()=>{\n                        if (anyData.length === 0) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Вывод данных из БД\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\pages\\\\anyData.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 14\n                            }, undefined);\n                        }\n                        return jsonRender(anyData).map({\n                            \"AnyData.useMemo\": (node, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                    children: node\n                                }, i, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\pages\\\\anyData.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 7\n                                }, undefined)\n                        }[\"AnyData.useMemo\"]);\n                    }\n                }[\"AnyData.useMemo\"], [\n                    anyData\n                ])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\pages\\\\anyData.tsx\",\n                lineNumber: 85,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\projects\\\\test-strapi\\\\frontend\\\\app\\\\pages\\\\anyData.tsx\",\n        lineNumber: 71,\n        columnNumber: 3\n    }, undefined);\n};\n_s(AnyData, \"XNTVxIbKe4L61gQE+lzj69BWABM=\");\n_c = AnyData;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnyData);\nvar _c;\n$RefreshReg$(_c, \"AnyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9hbnlEYXRhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lEO0FBQ1I7QUFNekMsTUFBTUksVUFBVTs7O0lBQ2YsTUFBTUMsYUFBYSxTQUFDQztZQUErQkMsMkVBQWtCO1FBQ3BFLE1BQU1DLFFBQThCLEVBQUU7UUFDdEMsTUFBTUMsU0FBUyxDQUFDQztZQUNmLE1BQU1DLE9BQU9DLE9BQU9ELElBQUksQ0FBQ0Q7WUFDekJDLEtBQUtFLE9BQU8sQ0FBQyxDQUFDQyxLQUFLQztnQkFDbEIsSUFDQyxPQUFPTCxHQUFHLENBQUNJLElBQUksS0FBSyxZQUNwQkosR0FBRyxDQUFDSSxJQUFJLEtBQUssUUFDYkosR0FBRyxDQUFDSSxJQUFJLEtBQUtFLFdBQ1o7b0JBQ0QsTUFBTUMsVUFBVUMsTUFBTUQsT0FBTyxDQUFDUCxHQUFHLENBQUNJLElBQUk7b0JBQ3RDTixNQUFNVyxJQUFJLGVBQ1QsOERBQUNDO3dCQUNBQyxPQUFPOzRCQUNOQyxhQUFhZixVQUFVO3dCQUN4QjtrQ0FDQyxHQUFXVSxPQUFSSCxLQUFJLE1BQXdCLE9BQXBCRyxVQUFVLE1BQU07Ozs7O2tDQUMxQlosV0FBV0ssR0FBRyxDQUFDSSxJQUFJLEVBQUVQLFVBQVUsa0JBQ2xDLDhEQUFDYTt3QkFDQUMsT0FBTzs0QkFBRUMsYUFBYWYsVUFBVTt3QkFBRztrQ0FDbEMsR0FBeUIsT0FBdEJVLFVBQVUsT0FBTzs7Ozs7O29CQUV2QjtnQkFDRDtnQkFDQSxJQUFJRixNQUFNLEdBQ1RQLE1BQU1XLElBQUksZUFBQyw4REFBQ0M7b0JBQUtDLE9BQU87d0JBQUVDLGFBQWFmLFVBQVU7b0JBQUc7OEJBQUs7Ozs7OztnQkFDMURDLE1BQU1XLElBQUksZUFDVCw4REFBQ0M7b0JBQ0FDLE9BQU87d0JBQUVDLGFBQWFmLFVBQVU7b0JBQUc7OEJBRWxDLElBQWNHLE9BQVZJLEtBQUksUUFBZSxPQUFUSixHQUFHLENBQUNJLElBQUksRUFBQzttQkFEbkJBLE1BQU1KLEdBQUcsQ0FBQ0ksSUFBSTs7Ozs7Z0JBR3JCLElBQUlILEtBQUtZLE1BQU0sR0FBRyxNQUFNUixHQUN2QlAsTUFBTVcsSUFBSSxlQUFDLDhEQUFDQztvQkFBS0MsT0FBTzt3QkFBRUMsYUFBYWYsVUFBVTtvQkFBRzs4QkFBSzs7Ozs7O1lBQzNEO1FBQ0Q7UUFDQSxJQUFJVyxNQUFNRCxPQUFPLENBQUNYLE9BQU87WUFDeEJBLEtBQUtPLE9BQU8sQ0FBQ0o7UUFDZCxPQUFPO1lBQ05BLE9BQU9IO1FBQ1I7UUFDQSxPQUFPRTtJQUNSO0lBQ0EsTUFBTSxDQUFDZ0IsU0FBU0MsV0FBVyxHQUFHdkIsK0NBQVFBLENBQWMsRUFBRTtJQUN0RCxNQUFNLENBQUN3QixVQUFVQyxZQUFZLEdBQUd6QiwrQ0FBUUEsQ0FBUztJQUNqRCxNQUFNMEIsaUJBQWlCO1FBQ3RCLElBQUlGLFNBQVNHLElBQUksR0FBR04sTUFBTSxLQUFLLEdBQUc7WUFDakNPLE1BQU07UUFDUDtRQUNBM0IscURBQVNBLENBQUN1QixVQUNSSyxJQUFJLENBQUMsQ0FBQ0M7WUFDTlAsV0FBV087WUFDWEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNiLEdBQ0NHLEtBQUssQ0FBQyxDQUFDQztZQUNQSCxRQUFRSSxLQUFLLENBQUNEO1lBQ2ROLE1BQU07WUFDTixNQUFNLElBQUlRLE1BQU1GO1FBQ2pCO0lBQ0Y7SUFDQSxxQkFDQyw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNEOztrQ0FDQSw4REFBQ0U7d0JBQ0FDLGFBQVk7d0JBQ1pDLE1BQUs7d0JBQ0xDLE9BQU9sQjt3QkFDUG1CLFVBQVUsQ0FBQ1Q7NEJBQ1ZULFlBQVlTLEVBQUVVLGFBQWEsQ0FBQ0YsS0FBSyxDQUFDRyxXQUFXO3dCQUM5Qzs7Ozs7O2tDQUVELDhEQUFDQzt3QkFBT0wsTUFBSzt3QkFBU00sU0FBU3JCO2tDQUFnQjs7Ozs7Ozs7Ozs7OzBCQUloRCw4REFBQ3NCOzBCQUNDakQsOENBQU9BO3VDQUFDO3dCQUNSLElBQUl1QixRQUFRRCxNQUFNLEtBQUssR0FBRzs0QkFDekIscUJBQU8sOERBQUM0QjswQ0FBRTs7Ozs7O3dCQUNYO3dCQUNBLE9BQU85QyxXQUFXbUIsU0FBUzRCLEdBQUc7K0NBQUMsQ0FBQ0MsTUFBTXRDLGtCQUNyQyw4REFBQ2YsdURBQWM7OENBQVVxRDttQ0FBSnRDOzs7Ozs7b0JBRXZCO3NDQUFHO29CQUFDUztpQkFBUTs7Ozs7Ozs7Ozs7O0FBSWhCO0dBeEZNcEI7S0FBQUE7QUEwRk4saUVBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxccHJvamVjdHNcXHRlc3Qtc3RyYXBpXFxmcm9udGVuZFxcYXBwXFxwYWdlc1xcYW55RGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXBpR2V0QW55IH0gZnJvbSAnLi4vdXRpbHMvYXBpJztcblxuaW50ZXJmYWNlIGFueU9iamVjdCB7XG5cdFtrZXk6IHN0cmluZ106IG5ldmVyO1xufVxuXG5jb25zdCBBbnlEYXRhID0gKCkgPT4ge1xuXHRjb25zdCBqc29uUmVuZGVyID0gKGRhdGE6IGFueU9iamVjdCB8IGFueU9iamVjdFtdLCBuZXN0aW5nOiBudW1iZXIgPSAwKSA9PiB7XG5cdFx0Y29uc3QgY29kZXM6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0gW107XG5cdFx0Y29uc3QgcmVuZGVyID0gKG9iajogYW55T2JqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblx0XHRcdGtleXMuZm9yRWFjaCgoa2V5LCBpKSA9PiB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnICYmXG5cdFx0XHRcdFx0b2JqW2tleV0gIT09IG51bGwgJiZcblx0XHRcdFx0XHRvYmpba2V5XSAhPT0gdW5kZWZpbmVkXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KG9ialtrZXldKTtcblx0XHRcdFx0XHRjb2Rlcy5wdXNoKFxuXHRcdFx0XHRcdFx0PGNvZGVcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nTGVmdDogbmVzdGluZyAqIDMyLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PntgJHtrZXl9OiAke2lzQXJyYXkgPyAnWycgOiAneyd9YH08L2NvZGU+LFxuXHRcdFx0XHRcdFx0Li4uanNvblJlbmRlcihvYmpba2V5XSwgbmVzdGluZyArIDEpLFxuXHRcdFx0XHRcdFx0PGNvZGVcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ0xlZnQ6IG5lc3RpbmcgKiAzMiB9fVxuXHRcdFx0XHRcdFx0PntgJHtpc0FycmF5ID8gJ10sJyA6ICd9LCd9YH08L2NvZGU+LFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpID09PSAwKVxuXHRcdFx0XHRcdGNvZGVzLnB1c2goPGNvZGUgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IG5lc3RpbmcgKiAzMiB9fT57YHtgfTwvY29kZT4pO1xuXHRcdFx0XHRjb2Rlcy5wdXNoKFxuXHRcdFx0XHRcdDxjb2RlXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nTGVmdDogbmVzdGluZyAqIDMyIH19XG5cdFx0XHRcdFx0XHRrZXk9e2tleSArIG9ialtrZXldfVxuXHRcdFx0XHRcdD57YFwiJHtrZXl9XCI6IFwiJHtvYmpba2V5XX1cIixgfTwvY29kZT4sXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChrZXlzLmxlbmd0aCAtIDEgPT09IGkpXG5cdFx0XHRcdFx0Y29kZXMucHVzaCg8Y29kZSBzdHlsZT17eyBwYWRkaW5nTGVmdDogbmVzdGluZyAqIDMyIH19PntgfSxgfTwvY29kZT4pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuXHRcdFx0ZGF0YS5mb3JFYWNoKHJlbmRlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbmRlcihkYXRhKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvZGVzO1xuXHR9O1xuXHRjb25zdCBbYW55RGF0YSwgc2V0QW55RGF0YV0gPSB1c2VTdGF0ZTxhbnlPYmplY3RbXT4oW10pO1xuXHRjb25zdCBbbmFtZURhdGEsIHNldE5hbWVEYXRhXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXHRjb25zdCBvbkNsaWNrUmVxRGF0YSA9IGFzeW5jICgpID0+IHtcblx0XHRpZiAobmFtZURhdGEudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0YWxlcnQoJ9CS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LUg0YLQsNCx0LvQuNGG0YsnKTtcblx0XHR9XG5cdFx0YXBpR2V0QW55KG5hbWVEYXRhKVxuXHRcdFx0LnRoZW4oKHIpID0+IHtcblx0XHRcdFx0c2V0QW55RGF0YShyKTtcblx0XHRcdFx0Y29uc29sZS5sb2cocik7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKChlKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRcdGFsZXJ0KCfQotCw0LrQvtC5INGC0LDQsdC70LjRhtGLINC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YInKTtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGUpO1xuXHRcdFx0fSk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJob21lX19hbnktZGF0YVwiPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INGC0LDQsdC70LjRhtGLXCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0dmFsdWU9e25hbWVEYXRhfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0TmFtZURhdGEoZS5jdXJyZW50VGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2tSZXFEYXRhfT5cblx0XHRcdFx0XHRPS1xuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdHt1c2VNZW1vKCgpID0+IHtcblx0XHRcdFx0XHRpZiAoYW55RGF0YS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybiA8cD7QktGL0LLQvtC0INC00LDQvdC90YvRhSDQuNC3INCR0JQ8L3A+O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4ganNvblJlbmRlcihhbnlEYXRhKS5tYXAoKG5vZGUsIGkpID0+IChcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9Pntub2RlfTwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0KSk7XG5cdFx0XHRcdH0sIFthbnlEYXRhXSl9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbnlEYXRhO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiYXBpR2V0QW55IiwiQW55RGF0YSIsImpzb25SZW5kZXIiLCJkYXRhIiwibmVzdGluZyIsImNvZGVzIiwicmVuZGVyIiwib2JqIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJpIiwidW5kZWZpbmVkIiwiaXNBcnJheSIsIkFycmF5IiwicHVzaCIsImNvZGUiLCJzdHlsZSIsInBhZGRpbmdMZWZ0IiwibGVuZ3RoIiwiYW55RGF0YSIsInNldEFueURhdGEiLCJuYW1lRGF0YSIsInNldE5hbWVEYXRhIiwib25DbGlja1JlcURhdGEiLCJ0cmltIiwiYWxlcnQiLCJ0aGVuIiwiciIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImUiLCJlcnJvciIsIkVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRvTG93ZXJDYXNlIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJwIiwibWFwIiwibm9kZSIsIkZyYWdtZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/anyData.tsx\n"));

/***/ })

});