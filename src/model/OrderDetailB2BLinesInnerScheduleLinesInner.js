/**
 * Reseller API Documentation
 * For Resellers. <br> Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
 *
 * The version of the OpenAPI document: 6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OrderDetailB2BLinesInnerScheduleLinesInner model module.
 * @module model/OrderDetailB2BLinesInnerScheduleLinesInner
 * @version 6.0
 */
class OrderDetailB2BLinesInnerScheduleLinesInner {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInnerScheduleLinesInner</code>.
     * @alias module:model/OrderDetailB2BLinesInnerScheduleLinesInner
     */
    constructor() { 
        
        OrderDetailB2BLinesInnerScheduleLinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerScheduleLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerScheduleLinesInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerScheduleLinesInner} The populated <code>OrderDetailB2BLinesInnerScheduleLinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInnerScheduleLinesInner();

            if (data.hasOwnProperty('lineNumber')) {
                obj['lineNumber'] = ApiClient.convertToType(data['lineNumber'], 'String');
            }
            if (data.hasOwnProperty('scheduleLineDate')) {
                obj['scheduleLineDate'] = ApiClient.convertToType(data['scheduleLineDate'], 'String');
            }
            if (data.hasOwnProperty('requestedQuantity')) {
                obj['requestedQuantity'] = ApiClient.convertToType(data['requestedQuantity'], 'String');
            }
            if (data.hasOwnProperty('confirmedQuantity')) {
                obj['confirmedQuantity'] = ApiClient.convertToType(data['confirmedQuantity'], 'String');
            }
            if (data.hasOwnProperty('goodsIssueDate')) {
                obj['goodsIssueDate'] = ApiClient.convertToType(data['goodsIssueDate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerScheduleLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerScheduleLinesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['lineNumber'] && !(typeof data['lineNumber'] === 'string' || data['lineNumber'] instanceof String)) {
            throw new Error("Expected the field `lineNumber` to be a primitive type in the JSON string but got " + data['lineNumber']);
        }
        // ensure the json data is a string
        if (data['scheduleLineDate'] && !(typeof data['scheduleLineDate'] === 'string' || data['scheduleLineDate'] instanceof String)) {
            throw new Error("Expected the field `scheduleLineDate` to be a primitive type in the JSON string but got " + data['scheduleLineDate']);
        }
        // ensure the json data is a string
        if (data['requestedQuantity'] && !(typeof data['requestedQuantity'] === 'string' || data['requestedQuantity'] instanceof String)) {
            throw new Error("Expected the field `requestedQuantity` to be a primitive type in the JSON string but got " + data['requestedQuantity']);
        }
        // ensure the json data is a string
        if (data['confirmedQuantity'] && !(typeof data['confirmedQuantity'] === 'string' || data['confirmedQuantity'] instanceof String)) {
            throw new Error("Expected the field `confirmedQuantity` to be a primitive type in the JSON string but got " + data['confirmedQuantity']);
        }
        // ensure the json data is a string
        if (data['goodsIssueDate'] && !(typeof data['goodsIssueDate'] === 'string' || data['goodsIssueDate'] instanceof String)) {
            throw new Error("Expected the field `goodsIssueDate` to be a primitive type in the JSON string but got " + data['goodsIssueDate']);
        }

        return true;
    }


}



/**
 * Line number.
 * @member {String} lineNumber
 */
OrderDetailB2BLinesInnerScheduleLinesInner.prototype['lineNumber'] = undefined;

/**
 * schedule Line Date.
 * @member {String} scheduleLineDate
 */
OrderDetailB2BLinesInnerScheduleLinesInner.prototype['scheduleLineDate'] = undefined;

/**
 * Requested quantity.
 * @member {String} requestedQuantity
 */
OrderDetailB2BLinesInnerScheduleLinesInner.prototype['requestedQuantity'] = undefined;

/**
 * Confirmed quantity.
 * @member {String} confirmedQuantity
 */
OrderDetailB2BLinesInnerScheduleLinesInner.prototype['confirmedQuantity'] = undefined;

/**
 * Date when good issued.
 * @member {String} goodsIssueDate
 */
OrderDetailB2BLinesInnerScheduleLinesInner.prototype['goodsIssueDate'] = undefined;






export default OrderDetailB2BLinesInnerScheduleLinesInner;

