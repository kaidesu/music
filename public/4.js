(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Albums/Show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Albums/Show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'album-show',
  data: function data() {
    return {
      album: {}
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
    axios.all([axios.get('/api/albums/' + to.params.id)]).then(axios.spread(function (album) {
      next(function (vm) {
        vm.album = album.data.data;
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Albums/Show.vue?vue&type=template&id=0fd94a19&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Albums/Show.vue?vue&type=template&id=0fd94a19& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "flex items-end" }, [
      _c("img", {
        staticClass: "h-full rounded-lg mr-6",
        staticStyle: { width: "220px", "max-height": "220px" },
        attrs: { src: "/" + _vm.album.cover, alt: _vm.album.name }
      }),
      _vm._v(" "),
      _c("div", [
        _c(
          "h1",
          { staticClass: "font-bold text-5xl text-white leading-none mb-3" },
          [_vm._v(_vm._s(_vm.album.name))]
        ),
        _vm._v(" "),
        _c("h2", { staticClass: "text-sm" }, [
          _vm._v("By "),
          _c(
            "a",
            { staticClass: "hover:underline text-white", attrs: { href: "#" } },
            [_vm._v(_vm._s(_vm.album.artist.name))]
          )
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "px-10 py-2 mt-3 hover:bg-axiom-600 hover:shadow-lg leading-none bg-axiom-500 text-white text-xs tracking-widest uppercase font-bold rounded-full"
          },
          [_vm._v("Play")]
        )
      ])
    ]),
    _vm._v(" "),
    _c("table", { staticClass: "w-full mt-6 mb-10" }, [
      _vm._m(1),
      _vm._v(" "),
      _c(
        "tbody",
        { staticClass: "text-sm tracking-wide" },
        _vm._l(_vm.album.songs, function(song) {
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
              _vm._m(2, true),
              _vm._v(" "),
              _c("td", { staticClass: "p-2" }, [_vm._v(_vm._s(song.title))]),
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
    return _c("h3", { staticClass: "text-sm mb-2" }, [
      _vm._v("2008 "),
      _c("span", { staticClass: "mx-1" }, [_vm._v("•")]),
      _vm._v(" 10 songs "),
      _c("span", { staticClass: "mx-1" }, [_vm._v("•")]),
      _vm._v(" 55 min "),
      _c("span", { staticClass: "mx-1" }, [_vm._v("•")]),
      _vm._v(" J-Rock")
    ])
  },
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
        _c("th", { staticClass: "p-2 w-16" }, [
          _c("i", { staticClass: "far fa-clock" })
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "p-2 w-16" }, [
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

/***/ "./resources/js/views/Albums/Show.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Albums/Show.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_0fd94a19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=0fd94a19& */ "./resources/js/views/Albums/Show.vue?vue&type=template&id=0fd94a19&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/Albums/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_0fd94a19___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_0fd94a19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Albums/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Albums/Show.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Albums/Show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Albums/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Albums/Show.vue?vue&type=template&id=0fd94a19&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Albums/Show.vue?vue&type=template&id=0fd94a19& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_0fd94a19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=0fd94a19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Albums/Show.vue?vue&type=template&id=0fd94a19&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_0fd94a19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_0fd94a19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);