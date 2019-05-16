(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Artists/Show.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Artists/Show.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'artist',
  data: function data() {
    return {
      artist: {}
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/artists/' + to.params.id)]).then(axios.spread(function (artist) {
      next(function (vm) {
        vm.artist = artist.data.data;
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Artists/Show.vue?vue&type=template&id=f55b7442&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Artists/Show.vue?vue&type=template&id=f55b7442& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "h1",
        { staticClass: "font-bold text-5xl text-white leading-none mb-20" },
        [_vm._v(_vm._s(_vm.artist.name))]
      ),
      _vm._v(" "),
      _c(
        "h2",
        { staticClass: "font-bold text-lg text-white leading-none mb-20" },
        [_vm._v("Most Listened")]
      ),
      _vm._v(" "),
      _c(
        "h3",
        {
          staticClass:
            "font-bold text-lg text-white leading-none mb-6 border-b border-gray-800 py-3"
        },
        [_vm._v("Library")]
      ),
      _vm._v(" "),
      _vm._l(_vm.artist.albums, function(album) {
        return _c(
          "div",
          { key: album.id, staticClass: "mb-10" },
          [
            _c(
              "div",
              { staticClass: "flex items-end" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "h-auto rounded mb-2 hover:shadow-lg border-2 border-transparent hover:border-gray-500 focus:outline-none mr-6",
                    attrs: { tag: "button", to: "/albums/" + album.id }
                  },
                  [
                    _c("img", {
                      staticClass: "h-full rounded-lg",
                      staticStyle: {
                        width: "175px",
                        height: "175px",
                        "object-fit": "cover"
                      },
                      attrs: { src: "/" + album.cover, alt: album.name }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "span",
                      {
                        staticClass:
                          "text-xs uppercase block tracking-widest font-semibold mb-2"
                      },
                      [_vm._v(_vm._s(album.year))]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "font-bold text-3xl text-white leading-none mb-3 focus:outline-none hover:underline",
                        attrs: { tag: "button", to: "/albums/" + album.id }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(album.name) +
                            "\n                "
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("app-playlist", {
              attrs: { songs: album.songs, "separate-discs": "" }
            })
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Artists/Show.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Artists/Show.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_f55b7442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=f55b7442& */ "./resources/js/views/Artists/Show.vue?vue&type=template&id=f55b7442&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/Artists/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_f55b7442___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_f55b7442___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Artists/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Artists/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Artists/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Artists/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Artists/Show.vue?vue&type=template&id=f55b7442&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Artists/Show.vue?vue&type=template&id=f55b7442& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_f55b7442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=f55b7442& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Artists/Show.vue?vue&type=template&id=f55b7442&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_f55b7442___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_f55b7442___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);