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
 * The OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner model module.
 * @module model/OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner
 * @version 1.0.0
 */
class OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner {
    /**
     * Constructs a new <code>OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner</code>.
     * @alias module:model/OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner
     */
    constructor() { 
        
        OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner} The populated <code>OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner();

            if (data.hasOwnProperty('carrierCode')) {
                obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'String');
            }
            if (data.hasOwnProperty('carrierName')) {
                obj['carrierName'] = ApiClient.convertToType(data['carrierName'], 'String');
            }
            if (data.hasOwnProperty('shipFromWarehouseId')) {
                obj['shipFromWarehouseId'] = ApiClient.convertToType(data['shipFromWarehouseId'], 'String');
            }
            if (data.hasOwnProperty('shipFromLocation')) {
                obj['shipFromLocation'] = ApiClient.convertToType(data['shipFromLocation'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['carrierCode'] && !(typeof data['carrierCode'] === 'string' || data['carrierCode'] instanceof String)) {
            throw new Error("Expected the field `carrierCode` to be a primitive type in the JSON string but got " + data['carrierCode']);
        }
        // ensure the json data is a string
        if (data['carrierName'] && !(typeof data['carrierName'] === 'string' || data['carrierName'] instanceof String)) {
            throw new Error("Expected the field `carrierName` to be a primitive type in the JSON string but got " + data['carrierName']);
        }
        // ensure the json data is a string
        if (data['shipFromWarehouseId'] && !(typeof data['shipFromWarehouseId'] === 'string' || data['shipFromWarehouseId'] instanceof String)) {
            throw new Error("Expected the field `shipFromWarehouseId` to be a primitive type in the JSON string but got " + data['shipFromWarehouseId']);
        }
        // ensure the json data is a string
        if (data['shipFromLocation'] && !(typeof data['shipFromLocation'] === 'string' || data['shipFromLocation'] instanceof String)) {
            throw new Error("Expected the field `shipFromLocation` to be a primitive type in the JSON string but got " + data['shipFromLocation']);
        }

        return true;
    }


}



/**
 * The code for the shipping carrier for the line item.
 * @member {String} carrierCode
 */
OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner.prototype['carrierCode'] = undefined;

/**
 * The name of the shipping carrier for the line item.
 * @member {String} carrierName
 */
OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner.prototype['carrierName'] = undefined;

/**
 * The ID of the warehouse the line item will ship from.
 * @member {String} shipFromWarehouseId
 */
OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner.prototype['shipFromWarehouseId'] = undefined;

/**
 * Location from which order is shipped.
 * @member {String} shipFromLocation
 */
OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner.prototype['shipFromLocation'] = undefined;






export default OrderCreateV7ResponseResourceOrdersInnerLinesInnerShipmentDetailsInner;

