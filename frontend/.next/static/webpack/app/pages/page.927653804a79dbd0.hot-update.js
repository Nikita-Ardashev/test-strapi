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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_TOKEN: () => (/* binding */ API_TOKEN),\n/* harmony export */   API_URL: () => (/* binding */ API_URL),\n/* harmony export */   apiGetAny: () => (/* binding */ apiGetAny),\n/* harmony export */   apiGetArticle: () => (/* binding */ apiGetArticle),\n/* harmony export */   apiGetArticles: () => (/* binding */ apiGetArticles),\n/* harmony export */   apiGetUser: () => (/* binding */ apiGetUser),\n/* harmony export */   apiGetUsers: () => (/* binding */ apiGetUsers)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/prisma */ \"(app-pages-browser)/./app/lib/prisma.ts\");\n\n\nconst API_URL = 'http://localhost:1337';\nconst API_TOKEN = 'e93fbc03a7981b399bf77a763904402da9809a886601be8cfb25dbc875c9527b6e942a800c45e68c76a184095ad05e6d4a3f5428e44cd17192fd06c40022c0416375fb427316ced7f53b719903c54e95b58c230ab19ed40835efd9c90c67e03d4cac30c7e02d81fbbf0100091d027a5a1d95390a0ee4f3885e8ed14b695cbe9d';\n// '61a44568c1310936e3a0a9e9adfe3e2df78e660e20e3f136e527e554f1308505d4955aaa15bb713e594e79f1edf0c548686ad19e9bbc49132c5aa6472a535bf7e3059a006d5a047693cff513323af27af9b3ef7ce5ca8f368b68baa4277c1abf0941ac3ce2a2894ffba0d7b44e730e31c32f1b68231267c595bfd6999845795f';\nconst apiGetAny = async (nameTable)=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(API_URL, \"/api/\").concat(nameTable, \"?populate=*\"), {\n        headers: {\n            Authorization: 'bearer ' + API_TOKEN\n        }\n    });\n    const data = await res.data;\n    return data;\n};\nconst apiGetArticles = async ()=>{\n    const articles = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.articles.findMany({});\n    console.log(articles);\n    return articles !== null && articles !== void 0 ? articles : [];\n};\nconst apiGetArticle = async (slug)=>{\n    const article = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.articles.findFirst({\n        where: {\n            slug\n        }\n    });\n    const images = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.files.findMany();\n    console.log(images);\n    return article;\n};\nconst apiGetUser = async function() {\n    let id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.up_users.findFirst({\n        where: {\n            id\n        }\n    });\n    return user;\n};\nconst apiGetUsers = async ()=>{\n    const users = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.up_users.findMany();\n    return users;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBSWE7QUFDaEMsTUFBTUUsVUFBVSx3QkFBd0I7QUFDeEMsTUFBTUMsWUFDWixtUUFBbVE7QUFDcFEsc1FBQXNRO0FBQy9QLE1BQU1DLFlBQVksT0FBT0M7SUFDL0IsTUFBTUMsTUFBTSxNQUFNTiw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDLEdBQWtCRixPQUFmSCxTQUFRLFNBQWlCLE9BQVZHLFdBQVUsZ0JBQWM7UUFDckVHLFNBQVM7WUFBRUMsZUFBZSxZQUFZTjtRQUFVO0lBQ2pEO0lBQ0EsTUFBTU8sT0FBTyxNQUFNSixJQUFJSSxJQUFJO0lBQzNCLE9BQU9BO0FBQ1IsRUFBRTtBQUVLLE1BQU1DLGlCQUFpQjtJQUM3QixNQUFNQyxXQUFXLE1BQU1YLCtDQUFNQSxDQUFDVyxRQUFRLENBQUNDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pEQyxRQUFRQyxHQUFHLENBQUNIO0lBQ1osT0FBT0EscUJBQUFBLHNCQUFBQSxXQUFZLEVBQUU7QUFDdEIsRUFBRTtBQUVLLE1BQU1JLGdCQUFnQixPQUFPQztJQUNuQyxNQUFNQyxVQUFVLE1BQU1qQiwrQ0FBTUEsQ0FBQ1csUUFBUSxDQUFDTyxTQUFTLENBQUM7UUFDL0NDLE9BQU87WUFBRUg7UUFBSztJQUNmO0lBQ0EsTUFBTUksU0FBUyxNQUFNcEIsK0NBQU1BLENBQUNxQixLQUFLLENBQUNULFFBQVE7SUFDMUNDLFFBQVFDLEdBQUcsQ0FBQ007SUFDWixPQUFPSDtBQUNSLEVBQUU7QUFFSyxNQUFNSyxhQUFhO1FBQU9DLHNFQUFhO0lBQzdDLE1BQU1DLE9BQU8sTUFBTXhCLCtDQUFNQSxDQUFDeUIsUUFBUSxDQUFDUCxTQUFTLENBQUM7UUFDNUNDLE9BQU87WUFBRUk7UUFBRztJQUNiO0lBQ0EsT0FBT0M7QUFDUixFQUFFO0FBRUssTUFBTUUsY0FBYztJQUMxQixNQUFNQyxRQUFRLE1BQU0zQiwrQ0FBTUEsQ0FBQ3lCLFFBQVEsQ0FBQ2IsUUFBUTtJQUM1QyxPQUFPZTtBQUNSLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWW9kaXpcXHByb2plY3RzXFx0ZXN0LXN0cmFwaVxcZnJvbnRlbmRcXGFwcFxcdXRpbHNcXGFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vdHlwZXMvY29tbW9uL1BheWxvYWQnO1xyXG5pbXBvcnQgeyBBcnRpY2xlX1BsYWluIH0gZnJvbSAnLi4vdHlwZXMvYXBpL2FydGljbGUnO1xyXG5pbXBvcnQgeyBVc2VyX1BsYWluIH0gZnJvbSAnLi4vdHlwZXMvY29tbW9uL1VzZXInO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi9saWIvcHJpc21hJztcclxuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDoxMzM3JztcclxuZXhwb3J0IGNvbnN0IEFQSV9UT0tFTiA9XHJcblx0J2U5M2ZiYzAzYTc5ODFiMzk5YmY3N2E3NjM5MDQ0MDJkYTk4MDlhODg2NjAxYmU4Y2ZiMjVkYmM4NzVjOTUyN2I2ZTk0MmE4MDBjNDVlNjhjNzZhMTg0MDk1YWQwNWU2ZDRhM2Y1NDI4ZTQ0Y2QxNzE5MmZkMDZjNDAwMjJjMDQxNjM3NWZiNDI3MzE2Y2VkN2Y1M2I3MTk5MDNjNTRlOTViNThjMjMwYWIxOWVkNDA4MzVlZmQ5YzkwYzY3ZTAzZDRjYWMzMGM3ZTAyZDgxZmJiZjAxMDAwOTFkMDI3YTVhMWQ5NTM5MGEwZWU0ZjM4ODVlOGVkMTRiNjk1Y2JlOWQnO1xyXG4vLyAnNjFhNDQ1NjhjMTMxMDkzNmUzYTBhOWU5YWRmZTNlMmRmNzhlNjYwZTIwZTNmMTM2ZTUyN2U1NTRmMTMwODUwNWQ0OTU1YWFhMTViYjcxM2U1OTRlNzlmMWVkZjBjNTQ4Njg2YWQxOWU5YmJjNDkxMzJjNWFhNjQ3MmE1MzViZjdlMzA1OWEwMDZkNWEwNDc2OTNjZmY1MTMzMjNhZjI3YWY5YjNlZjdjZTVjYThmMzY4YjY4YmFhNDI3N2MxYWJmMDk0MWFjM2NlMmEyODk0ZmZiYTBkN2I0NGU3MzBlMzFjMzJmMWI2ODIzMTI2N2M1OTViZmQ2OTk5ODQ1Nzk1Zic7XHJcbmV4cG9ydCBjb25zdCBhcGlHZXRBbnkgPSBhc3luYyAobmFtZVRhYmxlOiBzdHJpbmcpID0+IHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX1VSTH0vYXBpLyR7bmFtZVRhYmxlfT9wb3B1bGF0ZT0qYCwge1xyXG5cdFx0aGVhZGVyczogeyBBdXRob3JpemF0aW9uOiAnYmVhcmVyICcgKyBBUElfVE9LRU4gfSxcclxuXHR9KTtcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmRhdGE7XHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBpR2V0QXJ0aWNsZXMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBwcmlzbWEuYXJ0aWNsZXMuZmluZE1hbnkoe30pO1xyXG5cdGNvbnNvbGUubG9nKGFydGljbGVzKTtcclxuXHRyZXR1cm4gYXJ0aWNsZXMgPz8gW107XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBpR2V0QXJ0aWNsZSA9IGFzeW5jIChzbHVnOiBzdHJpbmcpID0+IHtcclxuXHRjb25zdCBhcnRpY2xlID0gYXdhaXQgcHJpc21hLmFydGljbGVzLmZpbmRGaXJzdCh7XHJcblx0XHR3aGVyZTogeyBzbHVnIH0sXHJcblx0fSk7XHJcblx0Y29uc3QgaW1hZ2VzID0gYXdhaXQgcHJpc21hLmZpbGVzLmZpbmRNYW55KCk7XHJcblx0Y29uc29sZS5sb2coaW1hZ2VzKTtcclxuXHRyZXR1cm4gYXJ0aWNsZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlHZXRVc2VyID0gYXN5bmMgKGlkOiBudW1iZXIgPSAxKSA9PiB7XHJcblx0Y29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51cF91c2Vycy5maW5kRmlyc3Qoe1xyXG5cdFx0d2hlcmU6IHsgaWQgfSxcclxuXHR9KTtcclxuXHRyZXR1cm4gdXNlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlHZXRVc2VycyA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51cF91c2Vycy5maW5kTWFueSgpO1xyXG5cdHJldHVybiB1c2VycztcclxufTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwicHJpc21hIiwiQVBJX1VSTCIsIkFQSV9UT0tFTiIsImFwaUdldEFueSIsIm5hbWVUYWJsZSIsInJlcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsImFwaUdldEFydGljbGVzIiwiYXJ0aWNsZXMiLCJmaW5kTWFueSIsImNvbnNvbGUiLCJsb2ciLCJhcGlHZXRBcnRpY2xlIiwic2x1ZyIsImFydGljbGUiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImltYWdlcyIsImZpbGVzIiwiYXBpR2V0VXNlciIsImlkIiwidXNlciIsInVwX3VzZXJzIiwiYXBpR2V0VXNlcnMiLCJ1c2VycyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/api.ts\n"));

/***/ })

});