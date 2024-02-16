/**
 * XI SDK Resellers
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
import QuoteDetailsRequestQuoteProductsRequest from './QuoteDetailsRequestQuoteProductsRequest';

/**
 * The QuoteDetailsRequest model module.
 * @module model/QuoteDetailsRequest
 * @version 1.0.0
 */
class QuoteDetailsRequest {
    /**
     * Constructs a new <code>QuoteDetailsRequest</code>.
     * Request schema for get quote details endpoint
     * @alias module:model/QuoteDetailsRequest
     */
    constructor() { 
        
        QuoteDetailsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetailsRequest} obj Optional instance to populate.
     * @return {module:model/QuoteDetailsRequest} The populated <code>QuoteDetailsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteDetailsRequest();

            if (data.hasOwnProperty('quoteProductsRequest')) {
                obj['quoteProductsRequest'] = QuoteDetailsRequestQuoteProductsRequest.constructFromObject(data['quoteProductsRequest']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetailsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetailsRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `quoteProductsRequest`
        if (data['quoteProductsRequest']) { // data not null
          QuoteDetailsRequestQuoteProductsRequest.validateJSON(data['quoteProductsRequest']);
        }

        return true;
    }


}



/**
 * @member {module:model/QuoteDetailsRequestQuoteProductsRequest} quoteProductsRequest
 */
QuoteDetailsRequest.prototype['quoteProductsRequest'] = undefined;






export default QuoteDetailsRequest;

