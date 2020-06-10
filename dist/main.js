/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_club_hoice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/clubСhoice */ \"./src/modules/clubСhoice.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popup */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n\n\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  Object(_modules_club_hoice__WEBPACK_IMPORTED_MODULE_2__[\"clubСhoice\"])();\n  Object(_modules_popup__WEBPACK_IMPORTED_MODULE_5__[\"popup\"])();\n  Object(_modules_scroll__WEBPACK_IMPORTED_MODULE_6__[\"scroll\"])();\n  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_3__[\"toggleMenu\"])();\n  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"mainSlider\"])();\n  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_1__[\"calc\"])();\n  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"gallerySlider\"])();\n  Object(_modules_form__WEBPACK_IMPORTED_MODULE_0__[\"formCallback\"])(document.getElementById('form1'));\n  Object(_modules_form__WEBPACK_IMPORTED_MODULE_0__[\"formCallback\"])(document.getElementById('form2'));\n  Object(_modules_form__WEBPACK_IMPORTED_MODULE_0__[\"formCallback\"])(document.getElementById('banner-form'));\n  Object(_modules_form__WEBPACK_IMPORTED_MODULE_0__[\"formCallback\"])(document.getElementById('card_order'));\n  Object(_modules_form__WEBPACK_IMPORTED_MODULE_0__[\"formFooter\"])(document.getElementById('footer_form'));\n});\nwindow.SliderCarousel = _modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"SliderCarousel\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/*! exports provided: calcPromoPrice, calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcPromoPrice\", function() { return calcPromoPrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calc\", function() { return calc; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ \"./src/modules/popup.js\");\n\n //Калькулятор\n// Прайс для кард\n\nvar clubPrice = {\n  mozaika: {\n    1: 1999,\n    6: 9900,\n    9: 13900,\n    12: 19900\n  },\n  schelkovo: {\n    1: 2999,\n    6: 14990,\n    9: 21990,\n    12: 24990,\n    '12d': 24990\n  }\n}; // подсчет цены \n\nvar calcPromoPrice = function calcPromoPrice(data) {\n  var club_name = data['club-name'],\n      card_type = data['card-type'],\n      price = clubPrice[club_name][card_type],\n      hasPromo = data['promo'] === 'ТЕЛО2019';\n\n  if (hasPromo) {\n    return Math.floor(price * 0.7);\n  } else {\n    return price;\n  }\n};\nvar calc = function calc() {\n  var form = document.querySelector('#card_order'),\n      totalMessage = form.querySelector('#price-total');\n\n  var render = function render() {\n    if (!totalMessage) {\n      return;\n    }\n\n    var data = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"formToJSON\"])(form);\n    totalMessage.textContent = calcPromoPrice(data);\n  };\n\n  form.addEventListener('input', render);\n  form.addEventListener('submit', function () {\n    setTimeout(function () {\n      form.reset();\n      render();\n    }, 1000);\n  });\n  render();\n};\n\n//# sourceURL=webpack:///./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/clubСhoice.js":
/*!***********************************!*\
  !*** ./src/modules/clubСhoice.js ***!
  \***********************************/
/*! exports provided: clubСhoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clubСhoice\", function() { return clubСhoice; });\n//Выпадающее меню Выбор клуба\nvar clubСhoice = function clubСhoice() {\n  var dropMenu = document.querySelector('.clubs-list ul');\n  dropMenu.style.display = 'none';\n  dropMenu.parentNode.addEventListener('click', function () {\n    if (dropMenu.style.display === 'none') {\n      dropMenu.style.display = 'block';\n    } else {\n      dropMenu.style.display = 'none';\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/club%D0%A1hoice.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/*! exports provided: formCallback, formFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formCallback\", function() { return formCallback; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formFooter\", function() { return formFooter; });\n/* harmony import */ var _maskPhone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maskPhone */ \"./src/modules/maskPhone.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup */ \"./src/modules/popup.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nvar inputValidListener = function inputValidListener(elem) {\n  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"Введите коректный формат\";\n  var defaultStyle = elem.style;\n  elem.addEventListener('input', function () {\n    // обнуляем кастомную ошибку \n    elem.setCustomValidity(''); // проверяем на валидность\n\n    if (elem.checkValidity()) {\n      elem.style = defaultStyle;\n    } else {\n      elem.style.border = '1px solid red';\n      elem.setCustomValidity(message);\n    }\n  });\n};\n\nvar formCallback = function formCallback(form) {\n  var consent = form.querySelector('[name=\"consent\"]'),\n      nameForm = form.querySelector('input[name=\"name\"]'),\n      phoneForm = form.querySelector('input[type=\"tel\"]');\n  inputValidListener(nameForm, \"Имя может содержать только кирилические символы\");\n  nameForm.pattern = '^[а-яА-Я\\\\s]+$';\n  inputValidListener(phoneForm, \"Телефон может содержать только цифры и знак + \");\n  Object(_maskPhone__WEBPACK_IMPORTED_MODULE_0__[\"maskPhone\"])('#' + phoneForm.id);\n  phoneForm.pattern = '^\\\\+7 \\\\(\\\\d{3}\\\\) \\\\d{3}-\\\\d{2}-\\\\d{2}$'; //удаляем required и проверяем в ручную \n\n  consent.removeAttribute('required');\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n\n    if (!consent.checked) {\n      alert('Необходимо согласие на обработку данных');\n    } else {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"postData\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"formToJSON\"])(form)).then(function () {\n        Object(_popup__WEBPACK_IMPORTED_MODULE_2__[\"showPopup\"])('#thanks');\n        form.reset();\n      })[\"catch\"](function () {\n        return Object(_popup__WEBPACK_IMPORTED_MODULE_2__[\"showPopup\"])('#error');\n      });\n    }\n  });\n};\nvar formFooter = function formFooter(form) {\n  var clubs = form.querySelectorAll('[name=\"club-name\"]'),\n      phoneForm = form.querySelector('input[type=\"tel\"]');\n  inputValidListener(phoneForm, \"Телефон может содержать только цифры и знак + \");\n  Object(_maskPhone__WEBPACK_IMPORTED_MODULE_0__[\"maskPhone\"])('#' + phoneForm.id);\n  phoneForm.pattern = '^\\\\+7 \\\\(\\\\d{3}\\\\) \\\\d{3}-\\\\d{2}-\\\\d{2}$';\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n\n    if (!_toConsumableArray(clubs).some(function (i) {\n      return i.checked;\n    })) {\n      alert('Необходимо выбрать клуб');\n    } else {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"postData\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"formToJSON\"])(form)).then(function () {\n        Object(_popup__WEBPACK_IMPORTED_MODULE_2__[\"showPopup\"])('#thanks');\n        form.reset();\n      })[\"catch\"](function () {\n        return Object(_popup__WEBPACK_IMPORTED_MODULE_2__[\"showPopup\"])('#error');\n      });\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/maskPhone.js":
/*!**********************************!*\
  !*** ./src/modules/maskPhone.js ***!
  \**********************************/
/*! exports provided: maskPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maskPhone\", function() { return maskPhone; });\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction maskPhone(selector) {\n  var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';\n  var elems = document.querySelectorAll(selector);\n\n  function mask(event) {\n    var keyCode = event.keyCode;\n    var template = masked,\n        def = template.replace(/\\D/g, \"\"),\n        val = this.value.replace(/\\D/g, \"\");\n    console.log(template);\n    var i = 0,\n        newValue = template.replace(/[_\\d]/g, function (a) {\n      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n    });\n    i = newValue.indexOf(\"_\");\n\n    if (i != -1) {\n      newValue = newValue.slice(0, i);\n    }\n\n    var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n      return \"\\\\d{1,\" + a.length + \"}\";\n    }).replace(/[+()]/g, \"\\\\$&\");\n    reg = new RegExp(\"^\" + reg + \"$\");\n\n    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n      this.value = newValue;\n    }\n\n    if (event.type == \"blur\" && this.value.length < 5) {\n      this.value = \"\";\n    }\n  }\n\n  var _iterator = _createForOfIteratorHelper(elems),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      elem.addEventListener(\"input\", mask);\n      elem.addEventListener(\"focus\", mask);\n      elem.addEventListener(\"blur\", mask);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/maskPhone.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: toggleMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleMenu\", function() { return toggleMenu; });\n// Меню\nvar toggleMenu = function toggleMenu() {\n  var topMenu = document.querySelector('.top-menu'),\n      patchMenu = document.querySelector('.patch-menu'),\n      btnMenu = document.querySelector('.menu-button img'),\n      popupMenu = document.querySelector('.popup-menu'),\n      btnCloseMenu = document.querySelector('.close-menu-btn img'),\n      head = document.querySelector('.head');\n\n  var closeMenu = function closeMenu() {\n    popupMenu.style.display = 'none';\n  };\n\n  popupMenu.addEventListener('click', function (e) {\n    if (e.target == btnCloseMenu || e.target.tagName == 'A') {\n      closeMenu();\n    }\n  });\n  btnMenu.addEventListener('click', function () {\n    popupMenu.style.display = 'block';\n  });\n  window.addEventListener('scroll', function () {\n    var flag = pageYOffset > head.offsetHeight;\n\n    if (flag) {\n      var size = topMenu.offsetHeight;\n      topMenu.style.position = 'fixed';\n      patchMenu.style.height = size + 'px';\n    } else {\n      topMenu.style.position = 'static';\n      patchMenu.style.height = 0;\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/*! exports provided: showPopup, closePopup, popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showPopup\", function() { return showPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closePopup\", function() { return closePopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popup\", function() { return popup; });\n//Popup\nvar showPopup = function showPopup(elemId) {\n  var elem = document.querySelector(elemId);\n  elem.style.display = 'block';\n};\nvar closePopup = function closePopup() {\n  var popup = document.querySelectorAll('.popup');\n  popup.forEach(function (item) {\n    return item.style.display = 'none';\n  });\n};\nvar popup = function popup() {\n  var links = document.querySelectorAll('[data-popup]');\n  links.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      e.preventDefault();\n      var itemId = e.currentTarget.dataset.popup;\n      showPopup(itemId);\n    });\n  });\n  var btnClose = document.querySelectorAll('.close_icon'),\n      overlay = document.querySelectorAll('.overlay'),\n      btnOk = document.querySelectorAll('.close-btn');\n  btnClose.forEach(function (item) {\n    return item.addEventListener('click', closePopup);\n  });\n  overlay.forEach(function (item) {\n    return item.addEventListener('click', closePopup);\n  });\n  btnOk.forEach(function (item) {\n    return item.addEventListener('click', closePopup);\n  });\n  var btnGift = document.querySelector('.fixed-gift');\n\n  if (btnGift) {\n    btnGift.addEventListener('click', function () {\n      return btnGift.style.display = 'none';\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/*! exports provided: scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scroll\", function() { return scroll; });\n//scroll\nvar scroll = function scroll() {\n  var totop = document.getElementById('totop');\n  totop.style.display = 'none';\n  totop.addEventListener('click', function (e) {\n    e.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  });\n  window.addEventListener('scroll', function () {\n    var flag = pageYOffset < document.documentElement.clientHeight;\n    totop.style.display = flag ? 'none' : 'block';\n  }); //плавный скрол пунктов меню\n\n  var links = document.querySelectorAll('.scroll');\n  links.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      e.preventDefault();\n      var blockID = e.target.getAttribute('href').substr(1);\n      document.getElementById(blockID).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/*! exports provided: SliderCarousel, gallerySlider, mainSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SliderCarousel\", function() { return SliderCarousel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gallerySlider\", function() { return gallerySlider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainSlider\", function() { return mainSlider; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//slider-carousel\nvar SliderCarousel = /*#__PURE__*/function () {\n  function SliderCarousel(_ref) {\n    var main = _ref.main,\n        wrap = _ref.wrap,\n        next = _ref.next,\n        prev = _ref.prev,\n        _ref$infinity = _ref.infinity,\n        infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n        _ref$position = _ref.position,\n        position = _ref$position === void 0 ? 0 : _ref$position,\n        _ref$slidesToShow = _ref.slidesToShow,\n        slidesToShow = _ref$slidesToShow === void 0 ? 4 : _ref$slidesToShow,\n        _ref$responsive = _ref.responsive,\n        responsive = _ref$responsive === void 0 ? [] : _ref$responsive;\n\n    _classCallCheck(this, SliderCarousel);\n\n    if (!main || !wrap) {\n      console.warn('slider-carousel: Необходимо 2 свойства, main и wrap!');\n    }\n\n    this.main = document.querySelector(main);\n    this.wrap = this.main.querySelector(wrap);\n    this.slides = this.main.querySelector(wrap).children;\n    this.next = this.main.querySelector(next);\n    this.prev = this.main.querySelector(prev);\n    this.slidesToShow = slidesToShow;\n    this.options = {\n      position: position,\n      widthSlide: Math.floor(100 / this.slidesToShow),\n      infinity: infinity,\n      maxPosition: this.slides.length - this.slidesToShow\n    };\n    this.responsive = responsive;\n  }\n\n  _createClass(SliderCarousel, [{\n    key: \"init\",\n    value: function init() {\n      this.addMyClass();\n      this.addMyStyle();\n\n      if (this.prev && this.next) {\n        this.controlSlider();\n      }\n\n      if (this.responsive) {\n        this.responseInit();\n      }\n    }\n  }, {\n    key: \"addMyClass\",\n    value: function addMyClass() {\n      this.main.classList.add('my-slider');\n      this.wrap.classList.add('my-slider__wrap');\n\n      var _iterator = _createForOfIteratorHelper(this.slides),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var item = _step.value;\n          item.classList.add('my-slider__item');\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"addMyStyle\",\n    value: function addMyStyle() {\n      var style = document.getElementById('sliderCarousel-style');\n\n      if (!style) {\n        style = document.createElement('style');\n        style.id = 'sliderCarousel-style';\n      }\n\n      style.textContent = \"\\n        .my-slider {\\n          overFlow: hidden !important;\\n          padding-left: 0;\\n          padding-right: 0;s\\n        }\\n        .my-slider__wrap {\\n          display: flex !important;\\n          justify-content: space-between;\\n          align-items: flex-start !important;\\n          transition: transform 0.5s !important;\\n          will-change: transform !important;\\n          padding: 0;\\n        }\\n        .my-slider__item {\\n          flex: 0 0 \".concat(this.options.widthSlide, \"% !important;\\n          margin: 0 !important;\\n        }\\n      \");\n      document.head.appendChild(style);\n    }\n  }, {\n    key: \"controlSlider\",\n    value: function controlSlider() {\n      this.prev.addEventListener('click', this.prevSlider.bind(this));\n      this.next.addEventListener('click', this.nextSlider.bind(this));\n    }\n  }, {\n    key: \"prevSlider\",\n    value: function prevSlider() {\n      if (this.options.infinity || this.options.position > 0) {\n        --this.options.position;\n\n        if (this.options.position < 0) {\n          this.options.position = this.options.maxPosition;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"nextSlider\",\n    value: function nextSlider() {\n      if (this.options.infinity || this.options.position < this.options.maxPosition) {\n        ++this.options.position;\n\n        if (this.options.position > this.options.maxPosition) {\n          this.options.position = 0;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"responseInit\",\n    value: function responseInit() {\n      var _this = this;\n\n      var slidesToShowDefault = this.slidesToShow;\n      var allResponse = this.responsive.map(function (item) {\n        return item.breakpoint;\n      });\n      var maxResponse = Math.max.apply(Math, _toConsumableArray(allResponse));\n\n      var checkResponse = function checkResponse() {\n        var widthWindow = document.documentElement.clientWidth;\n\n        if (widthWindow < maxResponse) {\n          for (var i = 0; i < allResponse.length; i++) {\n            if (widthWindow < allResponse[i]) {\n              _this.slidesToShow = _this.responsive[i].slidesToShow;\n              _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n              _this.addMyStyle();\n            } // else {\n            //this.slidesToShow = slidesToShowDefault;\n            //this.options.widthSlide = Math.floor(100 / this.slidesToShow); \n            //this.addMyStyle();\n            // }\n\n          }\n        }\n      };\n\n      checkResponse();\n      window.addEventListener('resize', checkResponse);\n    }\n  }]);\n\n  return SliderCarousel;\n}(); //Фотогалерея\n\nvar gallerySlider = function gallerySlider() {\n  var slider = document.querySelector('.gallery-slider'),\n      slide = slider.querySelectorAll('.slide'),\n      wrapperGalery = document.querySelector('.wrapper__galery'),\n      parentDots = document.querySelector('.dots'),\n      dot = [];\n  wrapperGalery.style.width = '946px';\n  slide.forEach(function () {\n    var dotItem = document.createElement('li');\n    dotItem.classList.add('dot');\n    parentDots.append(dotItem);\n    dot.push(dotItem);\n  });\n\n  var clearDotActive = function clearDotActive() {\n    dot.forEach(function (item) {\n      item.classList.remove('dot-active');\n    });\n  };\n\n  var currentSlide = 0,\n      interval;\n\n  var showSlide = function showSlide(index) {\n    slide.forEach(function (item) {\n      item.style.display = 'none';\n    });\n    slide[index].style.display = 'flex';\n    clearDotActive();\n    dot[index].classList.add('dot-active');\n  };\n\n  var nextSlide = function nextSlide() {\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n  };\n\n  var prevSlide = function prevSlide() {\n    currentSlide--;\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    nextSlide();\n    showSlide(currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  startSlide();\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  wrapperGalery.addEventListener('click', function (e) {\n    e.preventDefault();\n    var target = e.target;\n\n    if (!target.matches('.my-slider__prev, .fa-chevron-left, .my-slider__next, .fa-chevron-right, .dot')) {\n      return;\n    }\n\n    if (target.matches('.fa-chevron-right, .my-slider__next')) {\n      nextSlide();\n      showSlide(currentSlide);\n    } else if (target.matches('.fa-chevron-left, .my-slider__prev')) {\n      prevSlide();\n      showSlide(currentSlide);\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n      showSlide(currentSlide);\n    }\n  });\n  wrapperGalery.addEventListener('mouseover', function (e) {\n    if (e.target.matches('.my-slider__prev, .fa-chevron-left, .my-slider__next, .fa-chevron-right') || e.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  wrapperGalery.addEventListener('mouseout', function (e) {\n    if (e.target.matches('.my-slider__prev, .fa-chevron-left, .my-slider__next, .fa-chevron-right') || e.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n}; //main slider\n\nvar mainSlider = function mainSlider() {\n  var slider = document.querySelector('.main-slider'),\n      slide = slider.querySelectorAll('.slide');\n  var currentSlide = 0;\n\n  var showSlide = function showSlide(index) {\n    slide.forEach(function (item) {\n      item.style.display = 'none';\n    });\n    slide[index].style.display = 'flex';\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    showSlide(currentSlide);\n  };\n\n  setInterval(autoPlaySlide, 4000);\n};\n\n//# sourceURL=webpack:///./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/*! exports provided: postData, formToJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postData\", function() { return postData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formToJSON\", function() { return formToJSON; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar postData = function postData(data) {\n  return fetch(\"./server.php\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(data)\n  }).then(function (res) {\n    return res.ok ? res : Promise.reject(res);\n  });\n}; // Превращаем форму в JSON\n\nvar formToJSON = function formToJSON(form) {\n  var groupByName = function groupByName(elements) {\n    var data = {};\n    elements.forEach(function (item) {\n      if (item.name in data) {\n        data[item.name].push(item);\n      } else {\n        data[item.name] = [item];\n      }\n    });\n    return data;\n  };\n\n  var group_fields = groupByName(_toConsumableArray(form.elements));\n  var data = Object.entries(group_fields).filter(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        name = _ref2[0],\n        group_item = _ref2[1];\n\n    return name != \"\";\n  }).map(function (_ref3) {\n    var _ref4 = _slicedToArray(_ref3, 2),\n        name = _ref4[0],\n        group_item = _ref4[1];\n\n    var type = group_item[0].type; //если радиобаттон - ищем в группе \n\n    if (type == 'radio') {\n      var checked = group_item.filter(function (i) {\n        return i.checked;\n      });\n\n      if (checked) {\n        return [name, checked[0].value];\n      }\n    } // иначе считаем что это простой input\n\n\n    return [name, group_item[0].value];\n  });\n  return Object.fromEntries(data);\n};\n\n//# sourceURL=webpack:///./src/modules/utils.js?");

/***/ })

/******/ });