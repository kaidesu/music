(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'album',
  data: function data() {
    return {
      album: {}
    };
  },
  computed: {
    songs: function songs() {
      return this.album.songs || [];
    },
    artist: function artist() {
      return this.album.artist || {};
    },
    songCount: function songCount() {
      var count = this.songs.length;

      if (count === 1) {
        return '1 song';
      }

      if (count > 1) {
        return count + ' songs';
      }
    },
    albumLength: function albumLength() {
      var length = 0;

      if (this.songs) {
        this.songs.forEach(function (song) {
          length += parseFloat(song.length);
        });
      }

      return length;
    }
  },
  methods: {
    playtime: function playtime(length) {
      var seconds = Math.floor(length);
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
  return _c(
    "div",
    [
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
          _c(
            "h2",
            { staticClass: "text-sm" },
            [
              _vm._v("By "),
              _c(
                "router-link",
                {
                  staticClass: "hover:underline text-white focus:outline-none",
                  attrs: { tag: "button", to: "/artists/" + _vm.artist.id }
                },
                [_vm._v(_vm._s(_vm.artist.name))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "h3",
            { staticClass: "text-sm mb-2" },
            [
              _vm.album.year ? [_vm._v(_vm._s(_vm.album.year))] : _vm._e(),
              _vm._v(" "),
              _vm.songCount
                ? [
                    _c("span", { staticClass: "mx-1" }, [_vm._v("•")]),
                    _vm._v(" " + _vm._s(_vm.songCount))
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.albumLength
                ? [
                    _c("span", { staticClass: "mx-1" }, [_vm._v("•")]),
                    _vm._v(" " + _vm._s(_vm.playtime(_vm.albumLength)))
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.album.genre
                ? [
                    _c("span", { staticClass: "mx-1" }, [_vm._v("•")]),
                    _vm._v(" " + _vm._s(_vm.album.genre))
                  ]
                : _vm._e()
            ],
            2
          ),
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
      _c("app-playlist", { attrs: { songs: _vm.songs, "separate-discs": "" } })
    ],
    1
  )
}
var staticRenderFns = []
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