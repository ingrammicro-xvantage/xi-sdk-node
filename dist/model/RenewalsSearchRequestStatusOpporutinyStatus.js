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
 * The RenewalsSearchRequestStatusOpporutinyStatus model module.
 * @module model/RenewalsSearchRequestStatusOpporutinyStatus
 * @version 1.0.0
 */
var RenewalsSearchRequestStatusOpporutinyStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RenewalsSearchRequestStatusOpporutinyStatus</code>.
   * @alias module:model/RenewalsSearchRequestStatusOpporutinyStatus
   */
  function RenewalsSearchRequestStatusOpporutinyStatus() {
    _classCallCheck(this, RenewalsSearchRequestStatusOpporutinyStatus);
    RenewalsSearchRequestStatusOpporutinyStatus.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RenewalsSearchRequestStatusOpporutinyStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RenewalsSearchRequestStatusOpporutinyStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewalsSearchRequestStatusOpporutinyStatus} obj Optional instance to populate.
     * @return {module:model/RenewalsSearchRequestStatusOpporutinyStatus} The populated <code>RenewalsSearchRequestStatusOpporutinyStatus</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RenewalsSearchRequestStatusOpporutinyStatus();
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
        if (data.hasOwnProperty('subStatus')) {
          obj['subStatus'] = _ApiClient["default"].convertToType(data['subStatus'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RenewalsSearchRequestStatusOpporutinyStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RenewalsSearchRequestStatusOpporutinyStatus</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
        throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
      }
      // ensure the json data is a string
      if (data['subStatus'] && !(typeof data['subStatus'] === 'string' || data['subStatus'] instanceof String)) {
        throw new Error("Expected the field `subStatus` to be a primitive type in the JSON string but got " + data['subStatus']);
      }
      return true;
    }
  }]);
  return RenewalsSearchRequestStatusOpporutinyStatus;
}();
/**
 * The value of opportunity status, it can be either Open or Closed.
 * @member {String} value
 */
RenewalsSearchRequestStatusOpporutinyStatus.prototype['value'] = undefined;

/**
 * The sub-status of Opportunity status. Possible sub-status values for Open opportunity status are Ready to order, Quote pending, Notification sent, Future, and Quote requested. Possible sub-status values for Closed opportunity status are All, Ordered, Quote closed-contract sales desk, Expired, Transition to new/upsell, Lost to competitior, Consolidated, Transitioned to cloud, Renewal went direct, EOL, End user out of business, Void, Other, and Cancelled.
 * @member {String} subStatus
 */
RenewalsSearchRequestStatusOpporutinyStatus.prototype['subStatus'] = undefined;
var _default = exports["default"] = RenewalsSearchRequestStatusOpporutinyStatus;