"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/Home/Author.jsx":
/*!****************************************!*\
  !*** ./src/components/Home/Author.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.4.7_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/.pnpm/next@13.4.7_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_info_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/info.json */ \"(app-client)/./src/data/info.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n//= Static Data\n\nfunction Author() {\n    _s();\n    const [stickyItemWidth, setStickyItemWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [stickyItemTop, setStickyItemTop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    function isSticky() {\n        const stickyItemEl = document.querySelector(\"#sticky_item\");\n        const stickyItemParentEl = document.querySelector(\"#sticky_item\").parentElement;\n        const scrollTop = window.scrollY;\n        if (scrollTop >= stickyItemTop) stickyItemEl.classList.add(\"is-sticky\");\n        else stickyItemEl.classList.remove(\"is-sticky\");\n        if (scrollTop >= stickyItemTop && stickyItemParentEl.getBoundingClientRect().top < -875) {\n            stickyItemEl.classList.add(\"is-positioned\");\n            stickyItemParentEl.style.position = \"relative\";\n        } else {\n            stickyItemEl.classList.remove(\"is-positioned\");\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const stickyItemEl = document.querySelector(\"#sticky_item\").getBoundingClientRect();\n        setStickyItemWidth(stickyItemEl.width);\n        setStickyItemTop(stickyItemEl.top);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!stickyItemTop) return;\n        window.addEventListener(\"scroll\", isSticky);\n        return ()=>window.removeEventListener(\"scroll\", isSticky);\n    // eslint-disable-next-line\n    }, [\n        stickyItemTop\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"author-profile pt-80 pb-80\",\n        id: \"sticky_item\",\n        style: {\n            width: stickyItemWidth\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cont\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"img\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: _data_info_json__WEBPACK_IMPORTED_MODULE_2__.picture,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"info text-center mt-30\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: _data_info_json__WEBPACK_IMPORTED_MODULE_2__.name\n                        }, void 0, false, {\n                            fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#0\",\n                                children: _data_info_json__WEBPACK_IMPORTED_MODULE_2__.username\n                            }, void 0, false, {\n                                fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"social text-center mt-20\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://twitter.com/TheHashton\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-brands fa-x-twitter\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#tiktok\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-brands fa-tiktok\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.linkedin.com/in/harry-ashton-b0b15b30/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fab fa-linkedin-in\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hashton/Sites/obsidian-waves-portfolio/src/components/Home/Author.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Author, \"1EUA6t9MlOBjFcGj9gQP1CvFzgI=\");\n_c = Author;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Author);\nvar _c;\n$RefreshReg$(_c, \"Author\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9BdXRob3IuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDbUQ7QUFDbkQsZUFBZTtBQUNxQjtBQUVwQyxTQUFTSTs7SUFDUCxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdKLCtDQUFRQSxDQUFDSztJQUN2RCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQ0s7SUFDbkQsU0FBU0c7UUFDUCxNQUFNQyxlQUFlQyxTQUFTQyxjQUFjO1FBQzVDLE1BQU1DLHFCQUNKRixTQUFTQyxjQUFjLGdCQUFnQkU7UUFDekMsTUFBTUMsWUFBWUMsT0FBT0M7UUFFekIsSUFBSUYsYUFBYVIsZUFBZUcsYUFBYVEsVUFBVUMsSUFBSTthQUN0RFQsYUFBYVEsVUFBVUUsT0FBTztRQUVuQyxJQUNFTCxhQUFhUixpQkFDYk0sbUJBQW1CUSx3QkFBd0JDLE1BQU0sQ0FBQyxLQUNsRDtZQUNBWixhQUFhUSxVQUFVQyxJQUFJO1lBQzNCTixtQkFBbUJVLE1BQU1DLFdBQVc7UUFDdEMsT0FBTztZQUNMZCxhQUFhUSxVQUFVRSxPQUFPO1FBQ2hDO0lBQ0Y7SUFDQXBCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsZUFBZUMsU0FDbEJDLGNBQWMsZ0JBQ2RTO1FBQ0hoQixtQkFBbUJLLGFBQWFlO1FBQ2hDakIsaUJBQWlCRSxhQUFhWTtJQUNoQyxHQUFHLEVBQUU7SUFFTHRCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDTyxlQUFlO1FBQ3BCUyxPQUFPVSxpQkFBaUIsVUFBVWpCO1FBQ2xDLE9BQU8sSUFBTU8sT0FBT1csb0JBQW9CLFVBQVVsQjtJQUNsRCwyQkFBMkI7SUFDN0IsR0FBRztRQUFDRjtLQUFjO0lBRWxCLHFCQUNFLDhEQUFDcUI7UUFDQ0MsV0FBVTtRQUNWQyxJQUFHO1FBQ0hQLE9BQU87WUFBRUUsT0FBT3JCO1FBQWdCO2tCQUVoQyw0RUFBQ3dCO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0U7d0JBQUlDLEtBQUs5QixvREFBWStCO3dCQUFFQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFFOUIsOERBQUNOO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ007c0NBQUlqQyxpREFBU2tDOzs7Ozs7c0NBQ2QsOERBQUNDO3NDQUNDLDRFQUFDQztnQ0FBRUMsTUFBSzswQ0FBTXJDLHFEQUFhc0M7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUcvQiw4REFBQ1o7b0JBQUlDLFdBQVU7O3NDQUliLDhEQUFDUzs0QkFBRUMsTUFBSztzQ0FDTiw0RUFBQ0U7Z0NBQUVaLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVmLDhEQUFDUzs0QkFBRUMsTUFBSztzQ0FDTiw0RUFBQ0U7Z0NBQUVaLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVmLDhEQUFDUzs0QkFBRUMsTUFBSztzQ0FDTiw0RUFBQ0U7Z0NBQUVaLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTekI7R0F6RVMxQjtLQUFBQTtBQTJFVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lL0F1dGhvci5qc3g/OGExYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLz0gU3RhdGljIERhdGFcclxuaW1wb3J0IGRhdGEgZnJvbSAnQC9kYXRhL2luZm8uanNvbic7XHJcblxyXG5mdW5jdGlvbiBBdXRob3IoKSB7XHJcbiAgY29uc3QgW3N0aWNreUl0ZW1XaWR0aCwgc2V0U3RpY2t5SXRlbVdpZHRoXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW3N0aWNreUl0ZW1Ub3AsIHNldFN0aWNreUl0ZW1Ub3BdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBmdW5jdGlvbiBpc1N0aWNreSgpIHtcclxuICAgIGNvbnN0IHN0aWNreUl0ZW1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGlja3lfaXRlbScpO1xyXG4gICAgY29uc3Qgc3RpY2t5SXRlbVBhcmVudEVsID1cclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0aWNreV9pdGVtJykucGFyZW50RWxlbWVudDtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgIGlmIChzY3JvbGxUb3AgPj0gc3RpY2t5SXRlbVRvcCkgc3RpY2t5SXRlbUVsLmNsYXNzTGlzdC5hZGQoJ2lzLXN0aWNreScpO1xyXG4gICAgZWxzZSBzdGlja3lJdGVtRWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3RpY2t5Jyk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBzY3JvbGxUb3AgPj0gc3RpY2t5SXRlbVRvcCAmJlxyXG4gICAgICBzdGlja3lJdGVtUGFyZW50RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgLTg3NVxyXG4gICAgKSB7XHJcbiAgICAgIHN0aWNreUl0ZW1FbC5jbGFzc0xpc3QuYWRkKCdpcy1wb3NpdGlvbmVkJyk7XHJcbiAgICAgIHN0aWNreUl0ZW1QYXJlbnRFbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGlja3lJdGVtRWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtcG9zaXRpb25lZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RpY2t5SXRlbUVsID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNzdGlja3lfaXRlbScpXHJcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHNldFN0aWNreUl0ZW1XaWR0aChzdGlja3lJdGVtRWwud2lkdGgpO1xyXG4gICAgc2V0U3RpY2t5SXRlbVRvcChzdGlja3lJdGVtRWwudG9wKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN0aWNreUl0ZW1Ub3ApIHJldHVybjtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpc1N0aWNreSk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGlzU3RpY2t5KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gIH0sIFtzdGlja3lJdGVtVG9wXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImF1dGhvci1wcm9maWxlIHB0LTgwIHBiLTgwXCJcclxuICAgICAgaWQ9XCJzdGlja3lfaXRlbVwiXHJcbiAgICAgIHN0eWxlPXt7IHdpZHRoOiBzdGlja3lJdGVtV2lkdGggfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnBpY3R1cmV9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHRleHQtY2VudGVyIG10LTMwXCI+XHJcbiAgICAgICAgICA8aDU+e2RhdGEubmFtZX08L2g1PlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPntkYXRhLnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCB0ZXh0LWNlbnRlciBtdC0yMFwiPlxyXG4gICAgICAgICAgey8qPGEgaHJlZj1cIiMwXCI+Ki99XHJcbiAgICAgICAgICB7LyogIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1iZWhhbmNlXCI+PC9pPiovfVxyXG4gICAgICAgICAgey8qPC9hPiovfVxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vVGhlSGFzaHRvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEteC10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiN0aWt0b2tcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtYnJhbmRzIGZhLXRpa3Rva1wiPjwvaT5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaGFycnktYXNodG9uLWIwYjE1YjMwL1wiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4taW5cIj48L2k+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICB7Lyo8YSBocmVmPVwiIzBcIj4qL31cclxuICAgICAgICAgIHsvKiAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWRyaWJiYmxlXCI+PC9pPiovfVxyXG4gICAgICAgICAgey8qPC9hPiovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhvcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkYXRhIiwiQXV0aG9yIiwic3RpY2t5SXRlbVdpZHRoIiwic2V0U3RpY2t5SXRlbVdpZHRoIiwidW5kZWZpbmVkIiwic3RpY2t5SXRlbVRvcCIsInNldFN0aWNreUl0ZW1Ub3AiLCJpc1N0aWNreSIsInN0aWNreUl0ZW1FbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0aWNreUl0ZW1QYXJlbnRFbCIsInBhcmVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic3R5bGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImltZyIsInNyYyIsInBpY3R1cmUiLCJhbHQiLCJoNSIsIm5hbWUiLCJwIiwiYSIsImhyZWYiLCJ1c2VybmFtZSIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Home/Author.jsx\n"));

/***/ })

});