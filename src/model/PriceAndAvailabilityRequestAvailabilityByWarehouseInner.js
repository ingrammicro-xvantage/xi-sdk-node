/**
 * XI Sdk Resellers
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

import ApiClient from '../ApiClient';

/**
 * The PriceAndAvailabilityRequestAvailabilityByWarehouseInner model module.
 * @module model/PriceAndAvailabilityRequestAvailabilityByWarehouseInner
 * @version 1.0.0
 */
class PriceAndAvailabilityRequestAvailabilityByWarehouseInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityRequestAvailabilityByWarehouseInner</code>.
     * @alias module:model/PriceAndAvailabilityRequestAvailabilityByWarehouseInner
     */
    constructor() { 
        
        PriceAndAvailabilityRequestAvailabilityByWarehouseInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityRequestAvailabilityByWarehouseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityRequestAvailabilityByWarehouseInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityRequestAvailabilityByWarehouseInner} The populated <code>PriceAndAvailabilityRequestAvailabilityByWarehouseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityRequestAvailabilityByWarehouseInner();

            if (data.hasOwnProperty('availabilityByWarehouseId')) {
                obj['availabilityByWarehouseId'] = ApiClient.convertToType(data['availabilityByWarehouseId'], 'String');
            }
            if (data.hasOwnProperty('availabilityForAllLocation')) {
                obj['availabilityForAllLocation'] = ApiClient.convertToType(data['availabilityForAllLocation'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityRequestAvailabilityByWarehouseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityRequestAvailabilityByWarehouseInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['availabilityByWarehouseId'] && !(typeof data['availabilityByWarehouseId'] === 'string' || data['availabilityByWarehouseId'] instanceof String)) {
            throw new Error("Expected the field `availabilityByWarehouseId` to be a primitive type in the JSON string but got " + data['availabilityByWarehouseId']);
        }

        return true;
    }


}



/**
 * Plant/warehouse Id of a particular location in order to get just the inventory of that location.
 * @member {String} availabilityByWarehouseId
 */
PriceAndAvailabilityRequestAvailabilityByWarehouseInner.prototype['availabilityByWarehouseId'] = undefined;

/**
 * Pass boolean value as input, if true the response will contain warehouse location details, if false the response will not hold warehouse location details. By default value is true.
 * @member {Boolean} availabilityForAllLocation
 */
PriceAndAvailabilityRequestAvailabilityByWarehouseInner.prototype['availabilityForAllLocation'] = undefined;






export default PriceAndAvailabilityRequestAvailabilityByWarehouseInner;

