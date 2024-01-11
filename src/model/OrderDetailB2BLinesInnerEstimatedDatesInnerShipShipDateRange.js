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
 * The OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange model module.
 * @module model/OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange
 * @version 6.0
 */
class OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange</code>.
     * @alias module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange
     */
    constructor() { 
        
        OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange} The populated <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange();

            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['startDate'] && !(typeof data['startDate'] === 'string' || data['startDate'] instanceof String)) {
            throw new Error("Expected the field `startDate` to be a primitive type in the JSON string but got " + data['startDate']);
        }
        // ensure the json data is a string
        if (data['endDate'] && !(typeof data['endDate'] === 'string' || data['endDate'] instanceof String)) {
            throw new Error("Expected the field `endDate` to be a primitive type in the JSON string but got " + data['endDate']);
        }

        return true;
    }


}



/**
 * Start Date.
 * @member {String} startDate
 */
OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange.prototype['startDate'] = undefined;

/**
 * End Date.
 * @member {String} endDate
 */
OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange.prototype['endDate'] = undefined;






export default OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange;

