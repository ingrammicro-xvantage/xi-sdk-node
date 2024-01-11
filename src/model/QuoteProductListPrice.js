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
 * The QuoteProductListPrice model module.
 * @module model/QuoteProductListPrice
 * @version 6.0
 */
class QuoteProductListPrice {
    /**
     * Constructs a new <code>QuoteProductListPrice</code>.
     * @alias module:model/QuoteProductListPrice
     */
    constructor() { 
        
        QuoteProductListPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteProductListPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteProductListPrice} obj Optional instance to populate.
     * @return {module:model/QuoteProductListPrice} The populated <code>QuoteProductListPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteProductListPrice();

            if (data.hasOwnProperty('quotePrice')) {
                obj['quotePrice'] = ApiClient.convertToType(data['quotePrice'], 'Number');
            }
            if (data.hasOwnProperty('msrp')) {
                obj['msrp'] = ApiClient.convertToType(data['msrp'], 'Number');
            }
            if (data.hasOwnProperty('extendedMsrp')) {
                obj['extendedMsrp'] = ApiClient.convertToType(data['extendedMsrp'], 'Number');
            }
            if (data.hasOwnProperty('extendedQuotePrice')) {
                obj['extendedQuotePrice'] = ApiClient.convertToType(data['extendedQuotePrice'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteProductListPrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteProductListPrice</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} quotePrice
 */
QuoteProductListPrice.prototype['quotePrice'] = undefined;

/**
 * @member {Number} msrp
 */
QuoteProductListPrice.prototype['msrp'] = undefined;

/**
 * @member {Number} extendedMsrp
 */
QuoteProductListPrice.prototype['extendedMsrp'] = undefined;

/**
 * @member {Number} extendedQuotePrice
 */
QuoteProductListPrice.prototype['extendedQuotePrice'] = undefined;






export default QuoteProductListPrice;

