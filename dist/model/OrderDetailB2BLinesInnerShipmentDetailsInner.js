"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner = _interopRequireDefault(require("./OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner"));
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
 * The OrderDetailB2BLinesInnerShipmentDetailsInner model module.
 * @module model/OrderDetailB2BLinesInnerShipmentDetailsInner
 * @version 1.0.0
 */
var OrderDetailB2BLinesInnerShipmentDetailsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderDetailB2BLinesInnerShipmentDetailsInner</code>.
   * @alias module:model/OrderDetailB2BLinesInnerShipmentDetailsInner
   */
  function OrderDetailB2BLinesInnerShipmentDetailsInner() {
    _classCallCheck(this, OrderDetailB2BLinesInnerShipmentDetailsInner);
    OrderDetailB2BLinesInnerShipmentDetailsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderDetailB2BLinesInnerShipmentDetailsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerShipmentDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerShipmentDetailsInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerShipmentDetailsInner} The populated <code>OrderDetailB2BLinesInnerShipmentDetailsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderDetailB2BLinesInnerShipmentDetailsInner();
        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
        if (data.hasOwnProperty('deliveryNumber')) {
          obj['deliveryNumber'] = _ApiClient["default"].convertToType(data['deliveryNumber'], 'String');
        }
        if (data.hasOwnProperty('estimatedShipDate')) {
          obj['estimatedShipDate'] = _ApiClient["default"].convertToType(data['estimatedShipDate'], 'String');
        }
        if (data.hasOwnProperty('shipFromWarehouseId')) {
          obj['shipFromWarehouseId'] = _ApiClient["default"].convertToType(data['shipFromWarehouseId'], 'String');
        }
        if (data.hasOwnProperty('shipFromLocation')) {
          obj['shipFromLocation'] = _ApiClient["default"].convertToType(data['shipFromLocation'], 'String');
        }
        if (data.hasOwnProperty('invoiceNumber')) {
          obj['invoiceNumber'] = _ApiClient["default"].convertToType(data['invoiceNumber'], 'String');
        }
        if (data.hasOwnProperty('invoiceDate')) {
          obj['invoiceDate'] = _ApiClient["default"].convertToType(data['invoiceDate'], 'String');
        }
        if (data.hasOwnProperty('carrierDetails')) {
          obj['carrierDetails'] = _ApiClient["default"].convertToType(data['carrierDetails'], [_OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerShipmentDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerShipmentDetailsInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['deliveryNumber'] && !(typeof data['deliveryNumber'] === 'string' || data['deliveryNumber'] instanceof String)) {
        throw new Error("Expected the field `deliveryNumber` to be a primitive type in the JSON string but got " + data['deliveryNumber']);
      }
      // ensure the json data is a string
      if (data['estimatedShipDate'] && !(typeof data['estimatedShipDate'] === 'string' || data['estimatedShipDate'] instanceof String)) {
        throw new Error("Expected the field `estimatedShipDate` to be a primitive type in the JSON string but got " + data['estimatedShipDate']);
      }
      // ensure the json data is a string
      if (data['shipFromWarehouseId'] && !(typeof data['shipFromWarehouseId'] === 'string' || data['shipFromWarehouseId'] instanceof String)) {
        throw new Error("Expected the field `shipFromWarehouseId` to be a primitive type in the JSON string but got " + data['shipFromWarehouseId']);
      }
      // ensure the json data is a string
      if (data['shipFromLocation'] && !(typeof data['shipFromLocation'] === 'string' || data['shipFromLocation'] instanceof String)) {
        throw new Error("Expected the field `shipFromLocation` to be a primitive type in the JSON string but got " + data['shipFromLocation']);
      }
      // ensure the json data is a string
      if (data['invoiceNumber'] && !(typeof data['invoiceNumber'] === 'string' || data['invoiceNumber'] instanceof String)) {
        throw new Error("Expected the field `invoiceNumber` to be a primitive type in the JSON string but got " + data['invoiceNumber']);
      }
      // ensure the json data is a string
      if (data['invoiceDate'] && !(typeof data['invoiceDate'] === 'string' || data['invoiceDate'] instanceof String)) {
        throw new Error("Expected the field `invoiceDate` to be a primitive type in the JSON string but got " + data['invoiceDate']);
      }
      if (data['carrierDetails']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['carrierDetails'])) {
          throw new Error("Expected the field `carrierDetails` to be an array in the JSON data but got " + data['carrierDetails']);
        }
        // validate the optional field `carrierDetails` (array)
        var _iterator = _createForOfIteratorHelper(data['carrierDetails']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      return true;
    }
  }]);
  return OrderDetailB2BLinesInnerShipmentDetailsInner;
}();
/**
 * The quantity shipped of the line item.
 * @member {Number} quantity
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['quantity'] = undefined;

/**
 * The actual date of delivery of the line item.
 * @member {String} deliveryNumber
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['deliveryNumber'] = undefined;

/**
 * The date the line item is expected to be shipped.
 * @member {String} estimatedShipDate
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['estimatedShipDate'] = undefined;

/**
 * The ID of the warehouse the product will ship from.
 * @member {String} shipFromWarehouseId
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['shipFromWarehouseId'] = undefined;

/**
 * The city and state the line item ships from.
 * @member {String} shipFromLocation
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['shipFromLocation'] = undefined;

/**
 * The Ingram Micro invoice number for the line item.
 * @member {String} invoiceNumber
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['invoiceNumber'] = undefined;

/**
 * The date the IngramMicro invoice was created for the line item.
 * @member {String} invoiceDate
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['invoiceDate'] = undefined;

/**
 * The shipment carrier details for the line item.
 * @member {Array.<module:model/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner>} carrierDetails
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['carrierDetails'] = undefined;
var _default = exports["default"] = OrderDetailB2BLinesInnerShipmentDetailsInner;