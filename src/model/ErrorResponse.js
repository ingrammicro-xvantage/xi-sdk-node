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
import ErrorResponseErrorsInner from './ErrorResponseErrorsInner';

/**
 * The ErrorResponse model module.
 * @module model/ErrorResponse
 * @version 1.0.0
 */
class ErrorResponse {
    /**
     * Constructs a new <code>ErrorResponse</code>.
     * @alias module:model/ErrorResponse
     */
    constructor() { 
        
        ErrorResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorResponse} obj Optional instance to populate.
     * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponse();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorResponseErrorsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorResponse</code>.
     */
    static validateJSON(data) {
        if (data['errors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['errors'])) {
                throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
            }
            // validate the optional field `errors` (array)
            for (const item of data['errors']) {
                ErrorResponseErrorsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ErrorResponseErrorsInner>} errors
 */
ErrorResponse.prototype['errors'] = undefined;






export default ErrorResponse;

