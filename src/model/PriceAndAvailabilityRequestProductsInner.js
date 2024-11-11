/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
import PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner from './PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner';

/**
 * The PriceAndAvailabilityRequestProductsInner model module.
 * @module model/PriceAndAvailabilityRequestProductsInner
 * @version 1.0.0
 */
class PriceAndAvailabilityRequestProductsInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityRequestProductsInner</code>.
     * @alias module:model/PriceAndAvailabilityRequestProductsInner
     */
    constructor() { 
        
        PriceAndAvailabilityRequestProductsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityRequestProductsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityRequestProductsInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityRequestProductsInner} The populated <code>PriceAndAvailabilityRequestProductsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityRequestProductsInner();

            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('customerPartNumber')) {
                obj['customerPartNumber'] = ApiClient.convertToType(data['customerPartNumber'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('quantityRequested')) {
                obj['quantityRequested'] = ApiClient.convertToType(data['quantityRequested'], 'String');
            }
            if (data.hasOwnProperty('planID')) {
                obj['planID'] = ApiClient.convertToType(data['planID'], 'String');
            }
            if (data.hasOwnProperty('additionalAttributes')) {
                obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityRequestProductsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityRequestProductsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
        }
        // ensure the json data is a string
        if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
        }
        // ensure the json data is a string
        if (data['customerPartNumber'] && !(typeof data['customerPartNumber'] === 'string' || data['customerPartNumber'] instanceof String)) {
            throw new Error("Expected the field `customerPartNumber` to be a primitive type in the JSON string but got " + data['customerPartNumber']);
        }
        // ensure the json data is a string
        if (data['upc'] && !(typeof data['upc'] === 'string' || data['upc'] instanceof String)) {
            throw new Error("Expected the field `upc` to be a primitive type in the JSON string but got " + data['upc']);
        }
        // ensure the json data is a string
        if (data['quantityRequested'] && !(typeof data['quantityRequested'] === 'string' || data['quantityRequested'] instanceof String)) {
            throw new Error("Expected the field `quantityRequested` to be a primitive type in the JSON string but got " + data['quantityRequested']);
        }
        // ensure the json data is a string
        if (data['planID'] && !(typeof data['planID'] === 'string' || data['planID'] instanceof String)) {
            throw new Error("Expected the field `planID` to be a primitive type in the JSON string but got " + data['planID']);
        }
        if (data['additionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalAttributes'])) {
                throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
            }
            // validate the optional field `additionalAttributes` (array)
            for (const item of data['additionalAttributes']) {
                PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Ingram Micro unique part number for the product.
 * @member {String} ingramPartNumber
 */
PriceAndAvailabilityRequestProductsInner.prototype['ingramPartNumber'] = undefined;

/**
 * Vendor’s part number for the product.
 * @member {String} vendorPartNumber
 */
PriceAndAvailabilityRequestProductsInner.prototype['vendorPartNumber'] = undefined;

/**
 * Reseller/end-user’s part number for the product.
 * @member {String} customerPartNumber
 */
PriceAndAvailabilityRequestProductsInner.prototype['customerPartNumber'] = undefined;

/**
 * The UPC code for the product. Consists of 12 numeric digits that are uniquely assigned to each trade item.
 * @member {String} upc
 */
PriceAndAvailabilityRequestProductsInner.prototype['upc'] = undefined;

/**
 * Number of quantity of the Product.
 * @member {String} quantityRequested
 */
PriceAndAvailabilityRequestProductsInner.prototype['quantityRequested'] = undefined;

/**
 * Id of the plan
 * @member {String} planID
 */
PriceAndAvailabilityRequestProductsInner.prototype['planID'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner>} additionalAttributes
 */
PriceAndAvailabilityRequestProductsInner.prototype['additionalAttributes'] = undefined;






export default PriceAndAvailabilityRequestProductsInner;

