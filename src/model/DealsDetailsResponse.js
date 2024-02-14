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
import DealsDetailsResponseProductsInner from './DealsDetailsResponseProductsInner';
import RenewalsDetailsResponseEndUserInfoInner from './RenewalsDetailsResponseEndUserInfoInner';

/**
 * The DealsDetailsResponse model module.
 * @module model/DealsDetailsResponse
 * @version 1.0.0
 */
class DealsDetailsResponse {
    /**
     * Constructs a new <code>DealsDetailsResponse</code>.
     * @alias module:model/DealsDetailsResponse
     */
    constructor() { 
        
        DealsDetailsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealsDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealsDetailsResponse} obj Optional instance to populate.
     * @return {module:model/DealsDetailsResponse} The populated <code>DealsDetailsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealsDetailsResponse();

            if (data.hasOwnProperty('dealId')) {
                obj['dealId'] = ApiClient.convertToType(data['dealId'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('endUser')) {
                obj['endUser'] = ApiClient.convertToType(data['endUser'], 'String');
            }
            if (data.hasOwnProperty('extendedMsrp')) {
                obj['extendedMsrp'] = ApiClient.convertToType(data['extendedMsrp'], 'Number');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('dealReceivedOn')) {
                obj['dealReceivedOn'] = ApiClient.convertToType(data['dealReceivedOn'], 'Date');
            }
            if (data.hasOwnProperty('dealExpiryDate')) {
                obj['dealExpiryDate'] = ApiClient.convertToType(data['dealExpiryDate'], 'Date');
            }
            if (data.hasOwnProperty('priceProtectionEndDate')) {
                obj['priceProtectionEndDate'] = ApiClient.convertToType(data['priceProtectionEndDate'], 'Date');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('endUserInfo')) {
                obj['endUserInfo'] = RenewalsDetailsResponseEndUserInfoInner.constructFromObject(data['endUserInfo']);
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [DealsDetailsResponseProductsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DealsDetailsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DealsDetailsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dealId'] && !(typeof data['dealId'] === 'string' || data['dealId'] instanceof String)) {
            throw new Error("Expected the field `dealId` to be a primitive type in the JSON string but got " + data['dealId']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['endUser'] && !(typeof data['endUser'] === 'string' || data['endUser'] instanceof String)) {
            throw new Error("Expected the field `endUser` to be a primitive type in the JSON string but got " + data['endUser']);
        }
        // ensure the json data is a string
        if (data['vendor'] && !(typeof data['vendor'] === 'string' || data['vendor'] instanceof String)) {
            throw new Error("Expected the field `vendor` to be a primitive type in the JSON string but got " + data['vendor']);
        }
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }
        // validate the optional field `endUserInfo`
        if (data['endUserInfo']) { // data not null
          RenewalsDetailsResponseEndUserInfoInner.validateJSON(data['endUserInfo']);
        }
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                DealsDetailsResponseProductsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Deal/Special bid number.
 * @member {String} dealId
 */
DealsDetailsResponse.prototype['dealId'] = undefined;

/**
 * Most recent version number of the deal.
 * @member {String} version
 */
DealsDetailsResponse.prototype['version'] = undefined;

/**
 * The end user/customer's name.
 * @member {String} endUser
 */
DealsDetailsResponse.prototype['endUser'] = undefined;

/**
 * Extended MSRP - Manufacturer Suggested Retail Price X Quantity.
 * @member {Number} extendedMsrp
 */
DealsDetailsResponse.prototype['extendedMsrp'] = undefined;

/**
 * The vendor's name.
 * @member {String} vendor
 */
DealsDetailsResponse.prototype['vendor'] = undefined;

/**
 * The date on which the deal starts.
 * @member {Date} dealReceivedOn
 */
DealsDetailsResponse.prototype['dealReceivedOn'] = undefined;

/**
 * Expiration date of the deal/Special bid.
 * @member {Date} dealExpiryDate
 */
DealsDetailsResponse.prototype['dealExpiryDate'] = undefined;

/**
 * The date on which the price protection will end.
 * @member {Date} priceProtectionEndDate
 */
DealsDetailsResponse.prototype['priceProtectionEndDate'] = undefined;

/**
 * Country specific currency code.
 * @member {String} currencyCode
 */
DealsDetailsResponse.prototype['currencyCode'] = undefined;

/**
 * @member {module:model/RenewalsDetailsResponseEndUserInfoInner} endUserInfo
 */
DealsDetailsResponse.prototype['endUserInfo'] = undefined;

/**
 * @member {Array.<module:model/DealsDetailsResponseProductsInner>} products
 */
DealsDetailsResponse.prototype['products'] = undefined;






export default DealsDetailsResponse;

