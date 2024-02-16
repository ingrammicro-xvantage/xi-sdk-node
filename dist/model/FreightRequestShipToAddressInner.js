"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
 * The FreightRequestShipToAddressInner model module.
 * @module model/FreightRequestShipToAddressInner
 * @version 1.0.0
 */
var FreightRequestShipToAddressInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FreightRequestShipToAddressInner</code>.
   * @alias module:model/FreightRequestShipToAddressInner
   */
  function FreightRequestShipToAddressInner() {
    _classCallCheck(this, FreightRequestShipToAddressInner);
    FreightRequestShipToAddressInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(FreightRequestShipToAddressInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>FreightRequestShipToAddressInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreightRequestShipToAddressInner} obj Optional instance to populate.
     * @return {module:model/FreightRequestShipToAddressInner} The populated <code>FreightRequestShipToAddressInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FreightRequestShipToAddressInner();
        if (data.hasOwnProperty('companyName')) {
          obj['companyName'] = _ApiClient["default"].convertToType(data['companyName'], 'String');
        }
        if (data.hasOwnProperty('addressLine1')) {
          obj['addressLine1'] = _ApiClient["default"].convertToType(data['addressLine1'], 'String');
        }
        if (data.hasOwnProperty('addressLine2')) {
          obj['addressLine2'] = _ApiClient["default"].convertToType(data['addressLine2'], 'String');
        }
        if (data.hasOwnProperty('addressLine3')) {
          obj['addressLine3'] = _ApiClient["default"].convertToType(data['addressLine3'], 'String');
        }
        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }
        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
        if (data.hasOwnProperty('postalCode')) {
          obj['postalCode'] = _ApiClient["default"].convertToType(data['postalCode'], 'String');
        }
        if (data.hasOwnProperty('countryCode')) {
          obj['countryCode'] = _ApiClient["default"].convertToType(data['countryCode'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FreightRequestShipToAddressInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FreightRequestShipToAddressInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
        throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
      }
      // ensure the json data is a string
      if (data['addressLine1'] && !(typeof data['addressLine1'] === 'string' || data['addressLine1'] instanceof String)) {
        throw new Error("Expected the field `addressLine1` to be a primitive type in the JSON string but got " + data['addressLine1']);
      }
      // ensure the json data is a string
      if (data['addressLine2'] && !(typeof data['addressLine2'] === 'string' || data['addressLine2'] instanceof String)) {
        throw new Error("Expected the field `addressLine2` to be a primitive type in the JSON string but got " + data['addressLine2']);
      }
      // ensure the json data is a string
      if (data['addressLine3'] && !(typeof data['addressLine3'] === 'string' || data['addressLine3'] instanceof String)) {
        throw new Error("Expected the field `addressLine3` to be a primitive type in the JSON string but got " + data['addressLine3']);
      }
      // ensure the json data is a string
      if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
        throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
      }
      // ensure the json data is a string
      if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
        throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
      }
      // ensure the json data is a string
      if (data['postalCode'] && !(typeof data['postalCode'] === 'string' || data['postalCode'] instanceof String)) {
        throw new Error("Expected the field `postalCode` to be a primitive type in the JSON string but got " + data['postalCode']);
      }
      // ensure the json data is a string
      if (data['countryCode'] && !(typeof data['countryCode'] === 'string' || data['countryCode'] instanceof String)) {
        throw new Error("Expected the field `countryCode` to be a primitive type in the JSON string but got " + data['countryCode']);
      }
      return true;
    }
  }]);
  return FreightRequestShipToAddressInner;
}();
/**
 * The name of the company the order will be shipped to.
 * @member {String} companyName
 */
FreightRequestShipToAddressInner.prototype['companyName'] = undefined;

/**
 * Line 1 of the address the order will be shipped to.
 * @member {String} addressLine1
 */
FreightRequestShipToAddressInner.prototype['addressLine1'] = undefined;

/**
 * Line 2 of the address the order will be shipped to.
 * @member {String} addressLine2
 */
FreightRequestShipToAddressInner.prototype['addressLine2'] = undefined;

/**
 * Line 3 of the address the order will be shipped to.
 * @member {String} addressLine3
 */
FreightRequestShipToAddressInner.prototype['addressLine3'] = undefined;

/**
 * The city the order will be shipped to.
 * @member {String} city
 */
FreightRequestShipToAddressInner.prototype['city'] = undefined;

/**
 * The state the order will be shipped to.
 * @member {String} state
 */
FreightRequestShipToAddressInner.prototype['state'] = undefined;

/**
 * The zip or postal code the order will be shipped to.
 * @member {String} postalCode
 */
FreightRequestShipToAddressInner.prototype['postalCode'] = undefined;

/**
 * The two-character ISO country code the order will be shipped to.
 * @member {String} countryCode
 */
FreightRequestShipToAddressInner.prototype['countryCode'] = undefined;
var _default = exports["default"] = FreightRequestShipToAddressInner;