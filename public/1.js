(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RecentlyAdded.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/RecentlyAdded.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'recently-added',
  data: function data() {
    return {
      songs: []
    };
  },
  methods: {
    playtime: function playtime(song) {
      var seconds = Math.floor(song.length);
      var minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
      return minutes + ':' + seconds.toString().padStart(2, 0);
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/songs/recently-added')]).then(axios.spread(function (recentlyAdded) {
      next(function (vm) {
        vm.songs = recentlyAdded.data.data;
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RecentlyAdded.vue?vue&type=template&id=011f6229&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/RecentlyAdded.vue?vue&type=template&id=011f6229& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "h1",
      { staticClass: "font-bold text-5xl text-white leading-none mb-20" },
      [_vm._v("Recently Added")]
    ),
    _vm._v(" "),
    _c("table", { staticClass: "w-full mb-10" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        { staticClass: "text-sm tracking-wide" },
        _vm._l(_vm.songs, function(song) {
          return _c(
            "tr",
            {
              key: song.id,
              staticClass: "border-b border-gray-800 hover:bg-gray-700"
            },
            [
              _c("td", { staticClass: "p-2 w-10" }, [
                _vm._v(_vm._s(song.track))
              ]),
              _vm._v(" "),
              _vm._m(1, true),
              _vm._v(" "),
              _c("td", { staticClass: "p-2" }, [_vm._v(_vm._s(song.title))]),
              _vm._v(" "),
              _c("td", { staticClass: "p-2" }, [
                _vm._v(_vm._s(song.artist.name))
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "p-2" }, [
                _vm._v(_vm._s(song.album.name))
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "p-2 w-16" }, [
                _vm._v(_vm._s(_vm.playtime(song)))
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "p-2 w-16" })
            ]
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "text-xs uppercase text-left" }, [
      _c("tr", { staticClass: "border-b border-gray-800 text-gray-600" }, [
        _c("th", { staticClass: "p-2 w-10" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticClass: "p-2 w-10" }),
        _vm._v(" "),
        _c("th", { staticClass: "p-2" }, [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", { staticClass: "p-2" }, [_vm._v("Artist")]),
        _vm._v(" "),
        _c("th", { staticClass: "p-2" }, [_vm._v("Album")]),
        _vm._v(" "),
        _c("th", { staticClass: "p-2 w-10" }, [
          _c("i", { staticClass: "far fa-clock" })
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "p-2 w-10" }, [
          _c("i", { staticClass: "fas fa-music" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "p-2 w-10" }, [
      _c("a", { attrs: { href: "#" } }, [
        _c("i", {
          staticClass: "fas fa-play-circle hover:text-axiom-500 text-gray-600"
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/RecentlyAdded.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/RecentlyAdded.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecentlyAdded_vue_vue_type_template_id_011f6229___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecentlyAdded.vue?vue&type=template&id=011f6229& */ "./resources/js/views/RecentlyAdded.vue?vue&type=template&id=011f6229&");
/* harmony import */ var _RecentlyAdded_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecentlyAdded.vue?vue&type=script&lang=js& */ "./resources/js/views/RecentlyAdded.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecentlyAdded_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecentlyAdded_vue_vue_type_template_id_011f6229___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecentlyAdded_vue_vue_type_template_id_011f6229___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/RecentlyAdded.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/RecentlyAdded.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/RecentlyAdded.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyAdded_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RecentlyAdded.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RecentlyAdded.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyAdded_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/RecentlyAdded.vue?vue&type=template&id=011f6229&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/RecentlyAdded.vue?vue&type=template&id=011f6229& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyAdded_vue_vue_type_template_id_011f6229___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RecentlyAdded.vue?vue&type=template&id=011f6229& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RecentlyAdded.vue?vue&type=template&id=011f6229&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyAdded_vue_vue_type_template_id_011f6229___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentlyAdded_vue_vue_type_template_id_011f6229___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);