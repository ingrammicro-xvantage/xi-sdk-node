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
import PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInnerBackOrderInfoInner from './PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInnerBackOrderInfoInner';

/**
 * The PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner model module.
 * @module model/PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner
 * @version 6.0
 */
class PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner</code>.
     * @alias module:model/PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner
     */
    constructor() { 
        
        PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner} The populated <code>PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner();

            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('warehouseId')) {
                obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'String');
            }
            if (data.hasOwnProperty('quantityAvailable')) {
                obj['quantityAvailable'] = ApiClient.convertToType(data['quantityAvailable'], 'Number');
            }
            if (data.hasOwnProperty('quantityBackordered')) {
                obj['quantityBackordered'] = ApiClient.convertToType(data['quantityBackordered'], 'Number');
            }
            if (data.hasOwnProperty('quantityBackorderedEta')) {
                obj['quantityBackorderedEta'] = ApiClient.convertToType(data['quantityBackorderedEta'], 'String');
            }
            if (data.hasOwnProperty('backOrderInfo')) {
                obj['backOrderInfo'] = ApiClient.convertToType(data['backOrderInfo'], [PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInnerBackOrderInfoInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // ensure the json data is a string
        if (data['warehouseId'] && !(typeof data['warehouseId'] === 'string' || data['warehouseId'] instanceof String)) {
            throw new Error("Expected the field `warehouseId` to be a primitive type in the JSON string but got " + data['warehouseId']);
        }
        // ensure the json data is a string
        if (data['quantityBackorderedEta'] && !(typeof data['quantityBackorderedEta'] === 'string' || data['quantityBackorderedEta'] instanceof String)) {
            throw new Error("Expected the field `quantityBackorderedEta` to be a primitive type in the JSON string but got " + data['quantityBackorderedEta']);
        }
        if (data['backOrderInfo']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['backOrderInfo'])) {
                throw new Error("Expected the field `backOrderInfo` to be an array in the JSON data but got " + data['backOrderInfo']);
            }
            // validate the optional field `backOrderInfo` (array)
            for (const item of data['backOrderInfo']) {
                PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInnerBackOrderInfoInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Indicates where (location) the product is available.
 * @member {String} location
 */
PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner.prototype['location'] = undefined;

/**
 * Indicates where (Ingram Warehouse Id) the product is available.
 * @member {String} warehouseId
 */
PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner.prototype['warehouseId'] = undefined;

/**
 * The quantity of the product available in a given warehouse.
 * @member {Number} quantityAvailable
 */
PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner.prototype['quantityAvailable'] = undefined;

/**
 * The quantity of a product backordered in a given warehouse.
 * @member {Number} quantityBackordered
 */
PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner.prototype['quantityBackordered'] = undefined;

/**
 * The estimated time of arrival of a product that has been backordered in a given warehouse.
 * @member {String} quantityBackorderedEta
 */
PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner.prototype['quantityBackorderedEta'] = undefined;

/**
 * *Currently, this feature is not available in these countries (Mexico, Turkey, New Zealand, Colombia, Chile, Brazil, Peru, Western Sahara).
 * @member {Array.<module:model/PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInnerBackOrderInfoInner>} backOrderInfo
 */
PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner.prototype['backOrderInfo'] = undefined;






export default PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner;

