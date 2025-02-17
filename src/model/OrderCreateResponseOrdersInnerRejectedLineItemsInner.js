/**
 * XI Sdk Resellers
 * For Resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OrderCreateResponseOrdersInnerRejectedLineItemsInner model module.
 * @module model/OrderCreateResponseOrdersInnerRejectedLineItemsInner
 * @version 1.0.0
 */
class OrderCreateResponseOrdersInnerRejectedLineItemsInner {
    /**
     * Constructs a new <code>OrderCreateResponseOrdersInnerRejectedLineItemsInner</code>.
     * @alias module:model/OrderCreateResponseOrdersInnerRejectedLineItemsInner
     */
    constructor() { 
        
        OrderCreateResponseOrdersInnerRejectedLineItemsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateResponseOrdersInnerRejectedLineItemsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseOrdersInnerRejectedLineItemsInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseOrdersInnerRejectedLineItemsInner} The populated <code>OrderCreateResponseOrdersInnerRejectedLineItemsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateResponseOrdersInnerRejectedLineItemsInner();

            if (data.hasOwnProperty('customerLinenumber')) {
                obj['customerLinenumber'] = ApiClient.convertToType(data['customerLinenumber'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('quantityOrdered')) {
                obj['quantityOrdered'] = ApiClient.convertToType(data['quantityOrdered'], 'Number');
            }
            if (data.hasOwnProperty('rejectCode')) {
                obj['rejectCode'] = ApiClient.convertToType(data['rejectCode'], 'String');
            }
            if (data.hasOwnProperty('rejectReason')) {
                obj['rejectReason'] = ApiClient.convertToType(data['rejectReason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseOrdersInnerRejectedLineItemsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseOrdersInnerRejectedLineItemsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customerLinenumber'] && !(typeof data['customerLinenumber'] === 'string' || data['customerLinenumber'] instanceof String)) {
            throw new Error("Expected the field `customerLinenumber` to be a primitive type in the JSON string but got " + data['customerLinenumber']);
        }
        // ensure the json data is a string
        if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
        }
        // ensure the json data is a string
        if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
        }
        // ensure the json data is a string
        if (data['rejectCode'] && !(typeof data['rejectCode'] === 'string' || data['rejectCode'] instanceof String)) {
            throw new Error("Expected the field `rejectCode` to be a primitive type in the JSON string but got " + data['rejectCode']);
        }
        // ensure the json data is a string
        if (data['rejectReason'] && !(typeof data['rejectReason'] === 'string' || data['rejectReason'] instanceof String)) {
            throw new Error("Expected the field `rejectReason` to be a primitive type in the JSON string but got " + data['rejectReason']);
        }

        return true;
    }


}



/**
 * The reseller's line item number of the rejected item for their reference. Number
 * @member {String} customerLinenumber
 */
OrderCreateResponseOrdersInnerRejectedLineItemsInner.prototype['customerLinenumber'] = undefined;

/**
 * The Ingram Micro part number for the rejected line item.
 * @member {String} ingramPartNumber
 */
OrderCreateResponseOrdersInnerRejectedLineItemsInner.prototype['ingramPartNumber'] = undefined;

/**
 * The vendor part number for the rejected line item.
 * @member {String} vendorPartNumber
 */
OrderCreateResponseOrdersInnerRejectedLineItemsInner.prototype['vendorPartNumber'] = undefined;

/**
 * The quantity ordered of the rejected line item.
 * @member {Number} quantityOrdered
 */
OrderCreateResponseOrdersInnerRejectedLineItemsInner.prototype['quantityOrdered'] = undefined;

/**
 * The rejection code for the rejected line item. Ex: 'EN' 
 * @member {String} rejectCode
 */
OrderCreateResponseOrdersInnerRejectedLineItemsInner.prototype['rejectCode'] = undefined;

/**
 * The rejection reason for the rejected line item. Ex: 'SKU-NOTFOUND    DF41281' 
 * @member {String} rejectReason
 */
OrderCreateResponseOrdersInnerRejectedLineItemsInner.prototype['rejectReason'] = undefined;






export default OrderCreateResponseOrdersInnerRejectedLineItemsInner;

