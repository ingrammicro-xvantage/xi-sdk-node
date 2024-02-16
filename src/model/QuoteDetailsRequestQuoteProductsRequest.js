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
import QuoteDetailsRequestQuoteProductsRequestRequestpreamble from './QuoteDetailsRequestQuoteProductsRequestRequestpreamble';
import QuoteDetailsRequestQuoteProductsRequestRetrieveQuoteProductsRequest from './QuoteDetailsRequestQuoteProductsRequestRetrieveQuoteProductsRequest';

/**
 * The QuoteDetailsRequestQuoteProductsRequest model module.
 * @module model/QuoteDetailsRequestQuoteProductsRequest
 * @version 1.0.0
 */
class QuoteDetailsRequestQuoteProductsRequest {
    /**
     * Constructs a new <code>QuoteDetailsRequestQuoteProductsRequest</code>.
     * @alias module:model/QuoteDetailsRequestQuoteProductsRequest
     */
    constructor() { 
        
        QuoteDetailsRequestQuoteProductsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteDetailsRequestQuoteProductsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetailsRequestQuoteProductsRequest} obj Optional instance to populate.
     * @return {module:model/QuoteDetailsRequestQuoteProductsRequest} The populated <code>QuoteDetailsRequestQuoteProductsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteDetailsRequestQuoteProductsRequest();

            if (data.hasOwnProperty('requestpreamble')) {
                obj['requestpreamble'] = QuoteDetailsRequestQuoteProductsRequestRequestpreamble.constructFromObject(data['requestpreamble']);
            }
            if (data.hasOwnProperty('retrieveQuoteProductsRequest')) {
                obj['retrieveQuoteProductsRequest'] = QuoteDetailsRequestQuoteProductsRequestRetrieveQuoteProductsRequest.constructFromObject(data['retrieveQuoteProductsRequest']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetailsRequestQuoteProductsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetailsRequestQuoteProductsRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `requestpreamble`
        if (data['requestpreamble']) { // data not null
          QuoteDetailsRequestQuoteProductsRequestRequestpreamble.validateJSON(data['requestpreamble']);
        }
        // validate the optional field `retrieveQuoteProductsRequest`
        if (data['retrieveQuoteProductsRequest']) { // data not null
          QuoteDetailsRequestQuoteProductsRequestRetrieveQuoteProductsRequest.validateJSON(data['retrieveQuoteProductsRequest']);
        }

        return true;
    }


}



/**
 * @member {module:model/QuoteDetailsRequestQuoteProductsRequestRequestpreamble} requestpreamble
 */
QuoteDetailsRequestQuoteProductsRequest.prototype['requestpreamble'] = undefined;

/**
 * @member {module:model/QuoteDetailsRequestQuoteProductsRequestRetrieveQuoteProductsRequest} retrieveQuoteProductsRequest
 */
QuoteDetailsRequestQuoteProductsRequest.prototype['retrieveQuoteProductsRequest'] = undefined;






export default QuoteDetailsRequestQuoteProductsRequest;

