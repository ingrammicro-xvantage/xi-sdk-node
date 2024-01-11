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
 * The QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes model module.
 * @module model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes
 * @version 6.0
 */
class QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes {
    /**
     * Constructs a new <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes</code>.
     * @alias module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes
     */
    constructor() { 
        
        QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes} obj Optional instance to populate.
     * @return {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes} The populated <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes();

            if (data.hasOwnProperty('estimateId')) {
                obj['estimateId'] = ApiClient.convertToType(data['estimateId'], 'String');
            }
            if (data.hasOwnProperty('dealId')) {
                obj['dealId'] = ApiClient.convertToType(data['dealId'], 'String');
            }
            if (data.hasOwnProperty('vendorName')) {
                obj['vendorName'] = ApiClient.convertToType(data['vendorName'], 'String');
            }
            if (data.hasOwnProperty('vendorSettingMessage')) {
                obj['vendorSettingMessage'] = ApiClient.convertToType(data['vendorSettingMessage'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['estimateId'] && !(typeof data['estimateId'] === 'string' || data['estimateId'] instanceof String)) {
            throw new Error("Expected the field `estimateId` to be a primitive type in the JSON string but got " + data['estimateId']);
        }
        // ensure the json data is a string
        if (data['dealId'] && !(typeof data['dealId'] === 'string' || data['dealId'] instanceof String)) {
            throw new Error("Expected the field `dealId` to be a primitive type in the JSON string but got " + data['dealId']);
        }
        // ensure the json data is a string
        if (data['vendorName'] && !(typeof data['vendorName'] === 'string' || data['vendorName'] instanceof String)) {
            throw new Error("Expected the field `vendorName` to be a primitive type in the JSON string but got " + data['vendorName']);
        }
        // ensure the json data is a string
        if (data['vendorSettingMessage'] && !(typeof data['vendorSettingMessage'] === 'string' || data['vendorSettingMessage'] instanceof String)) {
            throw new Error("Expected the field `vendorSettingMessage` to be a primitive type in the JSON string but got " + data['vendorSettingMessage']);
        }

        return true;
    }


}



/**
 * @member {String} estimateId
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes.prototype['estimateId'] = undefined;

/**
 * @member {String} dealId
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes.prototype['dealId'] = undefined;

/**
 * @member {String} vendorName
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes.prototype['vendorName'] = undefined;

/**
 * @member {String} vendorSettingMessage
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes.prototype['vendorSettingMessage'] = undefined;






export default QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes;

