/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of APIs and webhooks to craft a seamless journey for your customers.
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
 * The FreightRequestLinesInner model module.
 * @module model/FreightRequestLinesInner
 * @version 1.0.0
 */
class FreightRequestLinesInner {
    /**
     * Constructs a new <code>FreightRequestLinesInner</code>.
     * @alias module:model/FreightRequestLinesInner
     */
    constructor() { 
        
        FreightRequestLinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FreightRequestLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreightRequestLinesInner} obj Optional instance to populate.
     * @return {module:model/FreightRequestLinesInner} The populated <code>FreightRequestLinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FreightRequestLinesInner();

            if (data.hasOwnProperty('customerLineNumber')) {
                obj['customerLineNumber'] = ApiClient.convertToType(data['customerLineNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
            }
            if (data.hasOwnProperty('warehouseId')) {
                obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'String');
            }
            if (data.hasOwnProperty('carrierCode')) {
                obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FreightRequestLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FreightRequestLinesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customerLineNumber'] && !(typeof data['customerLineNumber'] === 'string' || data['customerLineNumber'] instanceof String)) {
            throw new Error("Expected the field `customerLineNumber` to be a primitive type in the JSON string but got " + data['customerLineNumber']);
        }
        // ensure the json data is a string
        if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
        }
        // ensure the json data is a string
        if (data['quantity'] && !(typeof data['quantity'] === 'string' || data['quantity'] instanceof String)) {
            throw new Error("Expected the field `quantity` to be a primitive type in the JSON string but got " + data['quantity']);
        }
        // ensure the json data is a string
        if (data['warehouseId'] && !(typeof data['warehouseId'] === 'string' || data['warehouseId'] instanceof String)) {
            throw new Error("Expected the field `warehouseId` to be a primitive type in the JSON string but got " + data['warehouseId']);
        }
        // ensure the json data is a string
        if (data['carrierCode'] && !(typeof data['carrierCode'] === 'string' || data['carrierCode'] instanceof String)) {
            throw new Error("Expected the field `carrierCode` to be a primitive type in the JSON string but got " + data['carrierCode']);
        }

        return true;
    }


}



/**
 * The ID references the reseller's address in Ingram Micro's system for shipping. Provided to resellers during the onboarding process.
 * @member {String} customerLineNumber
 */
FreightRequestLinesInner.prototype['customerLineNumber'] = undefined;

/**
 * The unique IngramMicro part number.
 * @member {String} ingramPartNumber
 */
FreightRequestLinesInner.prototype['ingramPartNumber'] = undefined;

/**
 * The requested quantity of the line item.
 * @member {String} quantity
 */
FreightRequestLinesInner.prototype['quantity'] = undefined;

/**
 * The ID of the warehouse the line item will ship from.
 * @member {String} warehouseId
 */
FreightRequestLinesInner.prototype['warehouseId'] = undefined;

/**
 * The code for the shipping carrier for the line item.
 * @member {String} carrierCode
 */
FreightRequestLinesInner.prototype['carrierCode'] = undefined;






export default FreightRequestLinesInner;

