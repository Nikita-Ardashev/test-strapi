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

/***/ "(app-pages-browser)/./app/utils/api.ts":
/*!**************************!*\
  !*** ./app/utils/api.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_TOKEN: () => (/* binding */ API_TOKEN),\n/* harmony export */   API_URL: () => (/* binding */ API_URL),\n/* harmony export */   apiGetAny: () => (/* binding */ apiGetAny),\n/* harmony export */   apiGetArticle: () => (/* binding */ apiGetArticle),\n/* harmony export */   apiGetArticles: () => (/* binding */ apiGetArticles),\n/* harmony export */   apiGetProfile: () => (/* binding */ apiGetProfile),\n/* harmony export */   apiGetUser: () => (/* binding */ apiGetUser),\n/* harmony export */   apiGetUsers: () => (/* binding */ apiGetUsers),\n/* harmony export */   apiLogin: () => (/* binding */ apiLogin)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/prisma */ \"(app-pages-browser)/./app/lib/prisma.ts\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ \"(app-pages-browser)/./node_modules/qs/lib/index.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\nconst API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337';\nconst API_TOKEN = 'b0f3282b165b15f5113d8a4d1d1950cb416530c0f2ae3f8cd24a740885fcbed6fa768c665b31073d55d24001ab230ad7fa484ca406329d42278ea00c3b9220f6645d818c9c5779c76732039c04ead5c8f041667bdc992e93dd21687da3b65acaa957c6cdce7bca02c805393b6444c4104202eeae94fe1b4f4d7138564e78283e';\n// '61a44568c1310936e3a0a9e9adfe3e2df78e660e20e3f136e527e554f1308505d4955aaa15bb713e594e79f1edf0c548686ad19e9bbc49132c5aa6472a535bf7e3059a006d5a047693cff513323af27af9b3ef7ce5ca8f368b68baa4277c1abf0941ac3ce2a2894ffba0d7b44e730e31c32f1b68231267c595bfd6999845795f';\nconst apiGetAny = async (nameTable)=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(API_URL, \"/api/\").concat(nameTable, \"?populate=*\"), {\n        headers: {\n            Authorization: 'bearer ' + API_TOKEN\n        }\n    });\n    const data = await res.data;\n    return data;\n};\nconst apiGetArticles = async ()=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(API_URL, \"/api/articles?populate=*\"), {\n        headers: {\n            Authorization: 'bearer ' + API_TOKEN\n        }\n    });\n    const data = await res.data;\n    var _data_data;\n    return (_data_data = data.data) !== null && _data_data !== void 0 ? _data_data : [];\n};\nconst apiGetArticle = async (slug)=>{\n    const query = qs__WEBPACK_IMPORTED_MODULE_2___default().stringify({\n        filters: {\n            slug: {\n                $eq: slug\n            }\n        }\n    });\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(API_URL, \"/api/articles?\").concat(query, \"&populate=*\"), {\n        headers: {\n            Authorization: 'bearer ' + API_TOKEN\n        }\n    });\n    const article = await res.data;\n    return article.data[0];\n};\nconst apiGetUser = async function() {\n    let id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.up_users.findFirst({\n        where: {\n            id\n        }\n    });\n    return user;\n};\nconst apiGetUsers = async ()=>{\n    const users = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.up_users.findMany();\n    return users;\n};\nconst apiGetProfile = async (jwt)=>{\n    if (jwt === null) return;\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(API_URL, \"/api/users/me\"), {\n        headers: {\n            Authorization: 'bearer ' + jwt\n        }\n    });\n    const profile = await res.data;\n    return profile;\n};\nconst apiLogin = async (identifier, password)=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(API_URL, \"/api/auth/local\"), {});\n    const profile = await res.data;\n    return profile;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFHYTtBQUNuQjtBQUViLE1BQU1HLFVBQVVDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxJQUFJLHdCQUF3QjtBQUN0RSxNQUFNQyxZQUNaLG1RQUFtUTtBQUNwUSxzUUFBc1E7QUFDL1AsTUFBTUMsWUFBWSxPQUFPQztJQUMvQixNQUFNQyxNQUFNLE1BQU1WLDZDQUFLQSxDQUFDVyxHQUFHLENBQUMsR0FBa0JGLE9BQWZOLFNBQVEsU0FBaUIsT0FBVk0sV0FBVSxnQkFBYztRQUNyRUcsU0FBUztZQUFFQyxlQUFlLFlBQVlOO1FBQVU7SUFDakQ7SUFDQSxNQUFNTyxPQUFPLE1BQU1KLElBQUlJLElBQUk7SUFDM0IsT0FBT0E7QUFDUixFQUFFO0FBRUssTUFBTUMsaUJBQWlCO0lBQzdCLE1BQU1MLE1BQU0sTUFBTVYsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQyxHQUFXLE9BQVJSLFNBQVEsNkJBQTJCO1FBQ2pFUyxTQUFTO1lBQUVDLGVBQWUsWUFBWU47UUFBVTtJQUNqRDtJQUNBLE1BQU1PLE9BQWlDLE1BQU1KLElBQUlJLElBQUk7UUFDOUNBO0lBQVAsT0FBT0EsQ0FBQUEsYUFBQUEsS0FBS0EsSUFBSSxjQUFUQSx3QkFBQUEsYUFBYSxFQUFFO0FBQ3ZCLEVBQUU7QUFFSyxNQUFNRSxnQkFBZ0IsT0FBT0M7SUFDbkMsTUFBTUMsUUFBUWhCLG1EQUFZLENBQUM7UUFDMUJrQixTQUFTO1lBQ1JILE1BQU07Z0JBQ0xJLEtBQUtKO1lBQ047UUFDRDtJQUNEO0lBQ0EsTUFBTVAsTUFBTSxNQUFNViw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDLEdBQTJCTyxPQUF4QmYsU0FBUSxrQkFBc0IsT0FBTmUsT0FBTSxnQkFBYztRQUMxRU4sU0FBUztZQUFFQyxlQUFlLFlBQVlOO1FBQVU7SUFDakQ7SUFDQSxNQUFNZSxVQUFVLE1BQU1aLElBQUlJLElBQUk7SUFDOUIsT0FBT1EsUUFBUVIsSUFBSSxDQUFDLEVBQUU7QUFDdkIsRUFBRTtBQUVLLE1BQU1TLGFBQWE7UUFBT0Msc0VBQWE7SUFDN0MsTUFBTUMsT0FBTyxNQUFNeEIsK0NBQU1BLENBQUN5QixRQUFRLENBQUNDLFNBQVMsQ0FBQztRQUM1Q0MsT0FBTztZQUFFSjtRQUFHO0lBQ2I7SUFDQSxPQUFPQztBQUNSLEVBQUU7QUFFSyxNQUFNSSxjQUFjO0lBQzFCLE1BQU1DLFFBQVEsTUFBTTdCLCtDQUFNQSxDQUFDeUIsUUFBUSxDQUFDSyxRQUFRO0lBQzVDLE9BQU9EO0FBQ1IsRUFBRTtBQUVLLE1BQU1FLGdCQUFnQixPQUFPQztJQUNuQyxJQUFJQSxRQUFRLE1BQU07SUFDbEIsTUFBTXZCLE1BQU0sTUFBTVYsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQyxHQUFXLE9BQVJSLFNBQVEsa0JBQWdCO1FBQ3REUyxTQUFTO1lBQUVDLGVBQWUsWUFBWW9CO1FBQUk7SUFDM0M7SUFDQSxNQUFNQyxVQUFVLE1BQU14QixJQUFJSSxJQUFJO0lBQzlCLE9BQU9vQjtBQUNSLEVBQUU7QUFFSyxNQUFNQyxXQUFXLE9BQU9DLFlBQW9CQztJQUNsRCxNQUFNM0IsTUFBTSxNQUFNViw2Q0FBS0EsQ0FBQ3NDLElBQUksQ0FBQyxHQUFXLE9BQVJuQyxTQUFRLG9CQUFrQixDQUFDO0lBQzNELE1BQU0rQixVQUFVLE1BQU14QixJQUFJSSxJQUFJO0lBQzlCLE9BQU9vQjtBQUNSLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWW9kaXpcXHByb2plY3RzXFx0ZXN0LXN0cmFwaVxcZnJvbnRlbmRcXGFwcFxcdXRpbHNcXGFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vdHlwZXMvY29tbW9uL1BheWxvYWQnO1xyXG5pbXBvcnQgeyBBcnRpY2xlX1BsYWluIH0gZnJvbSAnLi4vdHlwZXMvYXBpL2FydGljbGUnO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi9saWIvcHJpc21hJztcclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuaW1wb3J0IHsgVXNlcl9QbGFpbiB9IGZyb20gJy4uL3R5cGVzL2NvbW1vbi9Vc2VyJztcclxuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5TVFJBUElfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3JztcclxuZXhwb3J0IGNvbnN0IEFQSV9UT0tFTiA9XHJcblx0J2IwZjMyODJiMTY1YjE1ZjUxMTNkOGE0ZDFkMTk1MGNiNDE2NTMwYzBmMmFlM2Y4Y2QyNGE3NDA4ODVmY2JlZDZmYTc2OGM2NjViMzEwNzNkNTVkMjQwMDFhYjIzMGFkN2ZhNDg0Y2E0MDYzMjlkNDIyNzhlYTAwYzNiOTIyMGY2NjQ1ZDgxOGM5YzU3NzljNzY3MzIwMzljMDRlYWQ1YzhmMDQxNjY3YmRjOTkyZTkzZGQyMTY4N2RhM2I2NWFjYWE5NTdjNmNkY2U3YmNhMDJjODA1MzkzYjY0NDRjNDEwNDIwMmVlYWU5NGZlMWI0ZjRkNzEzODU2NGU3ODI4M2UnO1xyXG4vLyAnNjFhNDQ1NjhjMTMxMDkzNmUzYTBhOWU5YWRmZTNlMmRmNzhlNjYwZTIwZTNmMTM2ZTUyN2U1NTRmMTMwODUwNWQ0OTU1YWFhMTViYjcxM2U1OTRlNzlmMWVkZjBjNTQ4Njg2YWQxOWU5YmJjNDkxMzJjNWFhNjQ3MmE1MzViZjdlMzA1OWEwMDZkNWEwNDc2OTNjZmY1MTMzMjNhZjI3YWY5YjNlZjdjZTVjYThmMzY4YjY4YmFhNDI3N2MxYWJmMDk0MWFjM2NlMmEyODk0ZmZiYTBkN2I0NGU3MzBlMzFjMzJmMWI2ODIzMTI2N2M1OTViZmQ2OTk5ODQ1Nzk1Zic7XHJcbmV4cG9ydCBjb25zdCBhcGlHZXRBbnkgPSBhc3luYyAobmFtZVRhYmxlOiBzdHJpbmcpID0+IHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX1VSTH0vYXBpLyR7bmFtZVRhYmxlfT9wb3B1bGF0ZT0qYCwge1xyXG5cdFx0aGVhZGVyczogeyBBdXRob3JpemF0aW9uOiAnYmVhcmVyICcgKyBBUElfVE9LRU4gfSxcclxuXHR9KTtcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmRhdGE7XHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBpR2V0QXJ0aWNsZXMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L2FwaS9hcnRpY2xlcz9wb3B1bGF0ZT0qYCwge1xyXG5cdFx0aGVhZGVyczogeyBBdXRob3JpemF0aW9uOiAnYmVhcmVyICcgKyBBUElfVE9LRU4gfSxcclxuXHR9KTtcclxuXHRjb25zdCBkYXRhOiBQYXlsb2FkPEFydGljbGVfUGxhaW5bXT4gPSBhd2FpdCByZXMuZGF0YTtcclxuXHRyZXR1cm4gZGF0YS5kYXRhID8/IFtdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaUdldEFydGljbGUgPSBhc3luYyAoc2x1Zzogc3RyaW5nKSA9PiB7XHJcblx0Y29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xyXG5cdFx0ZmlsdGVyczoge1xyXG5cdFx0XHRzbHVnOiB7XHJcblx0XHRcdFx0JGVxOiBzbHVnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX1VSTH0vYXBpL2FydGljbGVzPyR7cXVlcnl9JnBvcHVsYXRlPSpgLCB7XHJcblx0XHRoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246ICdiZWFyZXIgJyArIEFQSV9UT0tFTiB9LFxyXG5cdH0pO1xyXG5cdGNvbnN0IGFydGljbGUgPSBhd2FpdCByZXMuZGF0YTtcclxuXHRyZXR1cm4gYXJ0aWNsZS5kYXRhWzBdIGFzIEFydGljbGVfUGxhaW47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBpR2V0VXNlciA9IGFzeW5jIChpZDogbnVtYmVyID0gMSkgPT4ge1xyXG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXBfdXNlcnMuZmluZEZpcnN0KHtcclxuXHRcdHdoZXJlOiB7IGlkIH0sXHJcblx0fSk7XHJcblx0cmV0dXJuIHVzZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBpR2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgdXNlcnMgPSBhd2FpdCBwcmlzbWEudXBfdXNlcnMuZmluZE1hbnkoKTtcclxuXHRyZXR1cm4gdXNlcnM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBpR2V0UHJvZmlsZSA9IGFzeW5jIChqd3Q6IHN0cmluZyB8IG51bGwpID0+IHtcclxuXHRpZiAoand0ID09PSBudWxsKSByZXR1cm47XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L2FwaS91c2Vycy9tZWAsIHtcclxuXHRcdGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogJ2JlYXJlciAnICsgand0IH0sXHJcblx0fSk7XHJcblx0Y29uc3QgcHJvZmlsZSA9IGF3YWl0IHJlcy5kYXRhO1xyXG5cdHJldHVybiBwcm9maWxlIGFzIFVzZXJfUGxhaW47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBpTG9naW4gPSBhc3luYyAoaWRlbnRpZmllcjogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUElfVVJMfS9hcGkvYXV0aC9sb2NhbGAsIHt9KTtcclxuXHRjb25zdCBwcm9maWxlID0gYXdhaXQgcmVzLmRhdGE7XHJcblx0cmV0dXJuIHByb2ZpbGUgYXMgVXNlcl9QbGFpbjtcclxufTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwicHJpc21hIiwicXMiLCJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIlNUUkFQSV9BUElfVVJMIiwiQVBJX1RPS0VOIiwiYXBpR2V0QW55IiwibmFtZVRhYmxlIiwicmVzIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiYXBpR2V0QXJ0aWNsZXMiLCJhcGlHZXRBcnRpY2xlIiwic2x1ZyIsInF1ZXJ5Iiwic3RyaW5naWZ5IiwiZmlsdGVycyIsIiRlcSIsImFydGljbGUiLCJhcGlHZXRVc2VyIiwiaWQiLCJ1c2VyIiwidXBfdXNlcnMiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImFwaUdldFVzZXJzIiwidXNlcnMiLCJmaW5kTWFueSIsImFwaUdldFByb2ZpbGUiLCJqd3QiLCJwcm9maWxlIiwiYXBpTG9naW4iLCJpZGVudGlmaWVyIiwicGFzc3dvcmQiLCJwb3N0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/api.ts\n"));

/***/ })

});