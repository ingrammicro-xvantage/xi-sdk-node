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
import PriceAndAvailabilityRequestAdditionalAttributesInner from './PriceAndAvailabilityRequestAdditionalAttributesInner';
import PriceAndAvailabilityRequestAvailabilityByWarehouseInner from './PriceAndAvailabilityRequestAvailabilityByWarehouseInner';
import PriceAndAvailabilityRequestProductsInner from './PriceAndAvailabilityRequestProductsInner';

/**
 * The PriceAndAvailabilityRequest model module.
 * @module model/PriceAndAvailabilityRequest
 * @version 1.0.0
 */
class PriceAndAvailabilityRequest {
    /**
     * Constructs a new <code>PriceAndAvailabilityRequest</code>.
     * @alias module:model/PriceAndAvailabilityRequest
     */
    constructor() { 
        
        PriceAndAvailabilityRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityRequest} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityRequest} The populated <code>PriceAndAvailabilityRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityRequest();

            if (data.hasOwnProperty('showAvailableDiscounts')) {
                obj['showAvailableDiscounts'] = ApiClient.convertToType(data['showAvailableDiscounts'], 'Boolean');
            }
            if (data.hasOwnProperty('showReserveInventoryDetails')) {
                obj['showReserveInventoryDetails'] = ApiClient.convertToType(data['showReserveInventoryDetails'], 'Boolean');
            }
            if (data.hasOwnProperty('specialBidNumber')) {
                obj['specialBidNumber'] = ApiClient.convertToType(data['specialBidNumber'], 'String');
            }
            if (data.hasOwnProperty('availabilityByWarehouse')) {
                obj['availabilityByWarehouse'] = ApiClient.convertToType(data['availabilityByWarehouse'], [PriceAndAvailabilityRequestAvailabilityByWarehouseInner]);
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [PriceAndAvailabilityRequestProductsInner]);
            }
            if (data.hasOwnProperty('additionalAttributes')) {
                obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [PriceAndAvailabilityRequestAdditionalAttributesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['specialBidNumber'] && !(typeof data['specialBidNumber'] === 'string' || data['specialBidNumber'] instanceof String)) {
            throw new Error("Expected the field `specialBidNumber` to be a primitive type in the JSON string but got " + data['specialBidNumber']);
        }
        if (data['availabilityByWarehouse']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['availabilityByWarehouse'])) {
                throw new Error("Expected the field `availabilityByWarehouse` to be an array in the JSON data but got " + data['availabilityByWarehouse']);
            }
            // validate the optional field `availabilityByWarehouse` (array)
            for (const item of data['availabilityByWarehouse']) {
                PriceAndAvailabilityRequestAvailabilityByWarehouseInner.validateJSON(item);
            };
        }
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                PriceAndAvailabilityRequestProductsInner.validateJSON(item);
            };
        }
        if (data['additionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalAttributes'])) {
                throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
            }
            // validate the optional field `additionalAttributes` (array)
            for (const item of data['additionalAttributes']) {
                PriceAndAvailabilityRequestAdditionalAttributesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Boolean value that will display Discount details in the response when true.
 * @member {Boolean} showAvailableDiscounts
 */
PriceAndAvailabilityRequest.prototype['showAvailableDiscounts'] = undefined;

/**
 * Boolean value that will display reserve inventory details in the response when true.
 * @member {Boolean} showReserveInventoryDetails
 */
PriceAndAvailabilityRequest.prototype['showReserveInventoryDetails'] = undefined;

/**
 * Pre-approved special pricing/bid number provided to the reseller by the vendor for special pricing and discounts. Used to track the bid number where different line items have different bid numbers.
 * @member {String} specialBidNumber
 */
PriceAndAvailabilityRequest.prototype['specialBidNumber'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityRequestAvailabilityByWarehouseInner>} availabilityByWarehouse
 */
PriceAndAvailabilityRequest.prototype['availabilityByWarehouse'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityRequestProductsInner>} products
 */
PriceAndAvailabilityRequest.prototype['products'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityRequestAdditionalAttributesInner>} additionalAttributes
 */
PriceAndAvailabilityRequest.prototype['additionalAttributes'] = undefined;






export default PriceAndAvailabilityRequest;

