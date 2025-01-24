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
 * The OrderModifyResponseLinesInnerShipmentDetails model module.
 * @module model/OrderModifyResponseLinesInnerShipmentDetails
 * @version 1.0.0
 */
class OrderModifyResponseLinesInnerShipmentDetails {
    /**
     * Constructs a new <code>OrderModifyResponseLinesInnerShipmentDetails</code>.
     * Shipping details for the order provided by the reseller.
     * @alias module:model/OrderModifyResponseLinesInnerShipmentDetails
     */
    constructor() { 
        
        OrderModifyResponseLinesInnerShipmentDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderModifyResponseLinesInnerShipmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModifyResponseLinesInnerShipmentDetails} obj Optional instance to populate.
     * @return {module:model/OrderModifyResponseLinesInnerShipmentDetails} The populated <code>OrderModifyResponseLinesInnerShipmentDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderModifyResponseLinesInnerShipmentDetails();

            if (data.hasOwnProperty('carrierCode')) {
                obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'String');
            }
            if (data.hasOwnProperty('carrierName')) {
                obj['carrierName'] = ApiClient.convertToType(data['carrierName'], 'String');
            }
            if (data.hasOwnProperty('freightAccountNumber')) {
                obj['freightAccountNumber'] = ApiClient.convertToType(data['freightAccountNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderModifyResponseLinesInnerShipmentDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModifyResponseLinesInnerShipmentDetails</code>.
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
        if (data['freightAccountNumber'] && !(typeof data['freightAccountNumber'] === 'string' || data['freightAccountNumber'] instanceof String)) {
            throw new Error("Expected the field `freightAccountNumber` to be a primitive type in the JSON string but got " + data['freightAccountNumber']);
        }

        return true;
    }


}



/**
 * The carrier code for the shipment containing the line item.
 * @member {String} carrierCode
 */
OrderModifyResponseLinesInnerShipmentDetails.prototype['carrierCode'] = undefined;

/**
 * The name of the carrier of the shipment containing the line item.
 * @member {String} carrierName
 */
OrderModifyResponseLinesInnerShipmentDetails.prototype['carrierName'] = undefined;

/**
 * The reseller's shipping account number with carrier. Used to bill the shipping carrier directly from the reseller's account with the carrier.
 * @member {String} freightAccountNumber
 */
OrderModifyResponseLinesInnerShipmentDetails.prototype['freightAccountNumber'] = undefined;






export default OrderModifyResponseLinesInnerShipmentDetails;

