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

/**
 * The AsyncOrderCreateResponse model module.
 * @module model/AsyncOrderCreateResponse
 * @version 1.0.0
 */
class AsyncOrderCreateResponse {
    /**
     * Constructs a new <code>AsyncOrderCreateResponse</code>.
     * @alias module:model/AsyncOrderCreateResponse
     */
    constructor() { 
        
        AsyncOrderCreateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AsyncOrderCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AsyncOrderCreateResponse} obj Optional instance to populate.
     * @return {module:model/AsyncOrderCreateResponse} The populated <code>AsyncOrderCreateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AsyncOrderCreateResponse();

            if (data.hasOwnProperty('quoteNumber')) {
                obj['quoteNumber'] = ApiClient.convertToType(data['quoteNumber'], 'String');
            }
            if (data.hasOwnProperty('confirmationNumber')) {
                obj['confirmationNumber'] = ApiClient.convertToType(data['confirmationNumber'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AsyncOrderCreateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AsyncOrderCreateResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['quoteNumber'] && !(typeof data['quoteNumber'] === 'string' || data['quoteNumber'] instanceof String)) {
            throw new Error("Expected the field `quoteNumber` to be a primitive type in the JSON string but got " + data['quoteNumber']);
        }
        // ensure the json data is a string
        if (data['confirmationNumber'] && !(typeof data['confirmationNumber'] === 'string' || data['confirmationNumber'] instanceof String)) {
            throw new Error("Expected the field `confirmationNumber` to be a primitive type in the JSON string but got " + data['confirmationNumber']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * Unique identifier generated by Ingram Micro's CRM specific to each quote.
 * @member {String} quoteNumber
 */
AsyncOrderCreateResponse.prototype['quoteNumber'] = undefined;

/**
 * A unique confirmation number for tracking purposes.
 * @member {String} confirmationNumber
 */
AsyncOrderCreateResponse.prototype['confirmationNumber'] = undefined;

/**
 * A confirmation message.
 * @member {String} message
 */
AsyncOrderCreateResponse.prototype['message'] = undefined;






export default AsyncOrderCreateResponse;

