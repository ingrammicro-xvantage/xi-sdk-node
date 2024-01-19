/**
 * XI SDK Resellers
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
 * The WarehouseListType model module.
 * @module model/WarehouseListType
 * @version 6.0
 */
class WarehouseListType {
    /**
     * Constructs a new <code>WarehouseListType</code>.
     * @alias module:model/WarehouseListType
     */
    constructor() { 
        
        WarehouseListType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WarehouseListType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WarehouseListType} obj Optional instance to populate.
     * @return {module:model/WarehouseListType} The populated <code>WarehouseListType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WarehouseListType();

            if (data.hasOwnProperty('warehouseid')) {
                obj['warehouseid'] = ApiClient.convertToType(data['warehouseid'], 'String');
            }
            if (data.hasOwnProperty('warehousedescription')) {
                obj['warehousedescription'] = ApiClient.convertToType(data['warehousedescription'], 'String');
            }
            if (data.hasOwnProperty('availablequantity')) {
                obj['availablequantity'] = ApiClient.convertToType(data['availablequantity'], 'Number');
            }
            if (data.hasOwnProperty('onorderquantity')) {
                obj['onorderquantity'] = ApiClient.convertToType(data['onorderquantity'], 'Number');
            }
            if (data.hasOwnProperty('onholdquantity')) {
                obj['onholdquantity'] = ApiClient.convertToType(data['onholdquantity'], 'Number');
            }
            if (data.hasOwnProperty('etadate')) {
                obj['etadate'] = ApiClient.convertToType(data['etadate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WarehouseListType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WarehouseListType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['warehouseid'] && !(typeof data['warehouseid'] === 'string' || data['warehouseid'] instanceof String)) {
            throw new Error("Expected the field `warehouseid` to be a primitive type in the JSON string but got " + data['warehouseid']);
        }
        // ensure the json data is a string
        if (data['warehousedescription'] && !(typeof data['warehousedescription'] === 'string' || data['warehousedescription'] instanceof String)) {
            throw new Error("Expected the field `warehousedescription` to be a primitive type in the JSON string but got " + data['warehousedescription']);
        }
        // ensure the json data is a string
        if (data['etadate'] && !(typeof data['etadate'] === 'string' || data['etadate'] instanceof String)) {
            throw new Error("Expected the field `etadate` to be a primitive type in the JSON string but got " + data['etadate']);
        }

        return true;
    }


}



/**
 * 
 * @member {String} warehouseid
 */
WarehouseListType.prototype['warehouseid'] = undefined;

/**
 * City of the Ingram Micro warehouse location
 * @member {String} warehousedescription
 */
WarehouseListType.prototype['warehousedescription'] = undefined;

/**
 * On hand available quantity
 * @member {Number} availablequantity
 */
WarehouseListType.prototype['availablequantity'] = undefined;

/**
 * On Order quantity
 * @member {Number} onorderquantity
 */
WarehouseListType.prototype['onorderquantity'] = undefined;

/**
 * On hold quantity
 * @member {Number} onholdquantity
 */
WarehouseListType.prototype['onholdquantity'] = undefined;

/**
 * @member {String} etadate
 */
WarehouseListType.prototype['etadate'] = undefined;






export default WarehouseListType;

