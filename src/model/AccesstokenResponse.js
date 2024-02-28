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
 * The AccesstokenResponse model module.
 * @module model/AccesstokenResponse
 * @version 1.0.0
 */
class AccesstokenResponse {
    /**
     * Constructs a new <code>AccesstokenResponse</code>.
     * @alias module:model/AccesstokenResponse
     */
    constructor() { 
        
        AccesstokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccesstokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccesstokenResponse} obj Optional instance to populate.
     * @return {module:model/AccesstokenResponse} The populated <code>AccesstokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccesstokenResponse();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('token_type')) {
                obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
            }
            if (data.hasOwnProperty('expires_in')) {
                obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccesstokenResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccesstokenResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_token'] && !(typeof data['access_token'] === 'string' || data['access_token'] instanceof String)) {
            throw new Error("Expected the field `access_token` to be a primitive type in the JSON string but got " + data['access_token']);
        }
        // ensure the json data is a string
        if (data['token_type'] && !(typeof data['token_type'] === 'string' || data['token_type'] instanceof String)) {
            throw new Error("Expected the field `token_type` to be a primitive type in the JSON string but got " + data['token_type']);
        }
        // ensure the json data is a string
        if (data['expires_in'] && !(typeof data['expires_in'] === 'string' || data['expires_in'] instanceof String)) {
            throw new Error("Expected the field `expires_in` to be a primitive type in the JSON string but got " + data['expires_in']);
        }

        return true;
    }


}



/**
 * @member {String} access_token
 */
AccesstokenResponse.prototype['access_token'] = undefined;

/**
 * @member {String} token_type
 */
AccesstokenResponse.prototype['token_type'] = undefined;

/**
 * @member {String} expires_in
 */
AccesstokenResponse.prototype['expires_in'] = undefined;






export default AccesstokenResponse;

