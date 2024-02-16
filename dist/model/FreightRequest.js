"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _FreightRequestLinesInner = _interopRequireDefault(require("./FreightRequestLinesInner"));
var _FreightRequestShipToAddressInner = _interopRequireDefault(require("./FreightRequestShipToAddressInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * XI SDK Resellers
 * For Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The FreightRequest model module.
 * @module model/FreightRequest
 * @version 1.0.0
 */
var FreightRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FreightRequest</code>.
   * @alias module:model/FreightRequest
   */
  function FreightRequest() {
    _classCallCheck(this, FreightRequest);
    FreightRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(FreightRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>FreightRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreightRequest} obj Optional instance to populate.
     * @return {module:model/FreightRequest} The populated <code>FreightRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FreightRequest();
        if (data.hasOwnProperty('billToAddressId')) {
          obj['billToAddressId'] = _ApiClient["default"].convertToType(data['billToAddressId'], 'String');
        }
        if (data.hasOwnProperty('shipToAddressId')) {
          obj['shipToAddressId'] = _ApiClient["default"].convertToType(data['shipToAddressId'], 'String');
        }
        if (data.hasOwnProperty('shipToAddress')) {
          obj['shipToAddress'] = _ApiClient["default"].convertToType(data['shipToAddress'], [_FreightRequestShipToAddressInner["default"]]);
        }
        if (data.hasOwnProperty('lines')) {
          obj['lines'] = _ApiClient["default"].convertToType(data['lines'], [_FreightRequestLinesInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FreightRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FreightRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['billToAddressId'] && !(typeof data['billToAddressId'] === 'string' || data['billToAddressId'] instanceof String)) {
        throw new Error("Expected the field `billToAddressId` to be a primitive type in the JSON string but got " + data['billToAddressId']);
      }
      // ensure the json data is a string
      if (data['shipToAddressId'] && !(typeof data['shipToAddressId'] === 'string' || data['shipToAddressId'] instanceof String)) {
        throw new Error("Expected the field `shipToAddressId` to be a primitive type in the JSON string but got " + data['shipToAddressId']);
      }
      if (data['shipToAddress']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['shipToAddress'])) {
          throw new Error("Expected the field `shipToAddress` to be an array in the JSON data but got " + data['shipToAddress']);
        }
        // validate the optional field `shipToAddress` (array)
        var _iterator = _createForOfIteratorHelper(data['shipToAddress']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _FreightRequestShipToAddressInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      if (data['lines']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['lines'])) {
          throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
        }
        // validate the optional field `lines` (array)
        var _iterator2 = _createForOfIteratorHelper(data['lines']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _FreightRequestLinesInner["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      return true;
    }
  }]);
  return FreightRequest;
}();
/**
 * Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit.
 * @member {String} billToAddressId
 */
FreightRequest.prototype['billToAddressId'] = undefined;

/**
 * The ID references the reseller's address in Ingram Micro's system for shipping. Provided to resellers during the onboarding process.
 * @member {String} shipToAddressId
 */
FreightRequest.prototype['shipToAddressId'] = undefined;

/**
 * The shipping information.
 * @member {Array.<module:model/FreightRequestShipToAddressInner>} shipToAddress
 */
FreightRequest.prototype['shipToAddress'] = undefined;

/**
 * @member {Array.<module:model/FreightRequestLinesInner>} lines
 */
FreightRequest.prototype['lines'] = undefined;
var _default = exports["default"] = FreightRequest;