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
import GetResellerV6ValidateQuote400ResponseFieldsInner from './GetResellerV6ValidateQuote400ResponseFieldsInner';

/**
 * The PostRenewalssearch400Response model module.
 * @module model/PostRenewalssearch400Response
 * @version 1.0.0
 */
class PostRenewalssearch400Response {
    /**
     * Constructs a new <code>PostRenewalssearch400Response</code>.
     * @alias module:model/PostRenewalssearch400Response
     */
    constructor() { 
        
        PostRenewalssearch400Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRenewalssearch400Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRenewalssearch400Response} obj Optional instance to populate.
     * @return {module:model/PostRenewalssearch400Response} The populated <code>PostRenewalssearch400Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRenewalssearch400Response();

            if (data.hasOwnProperty('traceid')) {
                obj['traceid'] = ApiClient.convertToType(data['traceid'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], [GetResellerV6ValidateQuote400ResponseFieldsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostRenewalssearch400Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostRenewalssearch400Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['traceid'] && !(typeof data['traceid'] === 'string' || data['traceid'] instanceof String)) {
            throw new Error("Expected the field `traceid` to be a primitive type in the JSON string but got " + data['traceid']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        if (data['fields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fields'])) {
                throw new Error("Expected the field `fields` to be an array in the JSON data but got " + data['fields']);
            }
            // validate the optional field `fields` (array)
            for (const item of data['fields']) {
                GetResellerV6ValidateQuote400ResponseFieldsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Unique Id to identify error.
 * @member {String} traceid
 */
PostRenewalssearch400Response.prototype['traceid'] = undefined;

/**
 * Describes the type of the error.
 * @member {String} type
 */
PostRenewalssearch400Response.prototype['type'] = undefined;

/**
 * @member {Array.<module:model/GetResellerV6ValidateQuote400ResponseFieldsInner>} fields
 */
PostRenewalssearch400Response.prototype['fields'] = undefined;






export default PostRenewalssearch400Response;

