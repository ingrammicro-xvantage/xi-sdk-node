/**
 * XI SDK Resellers
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
 * The ErrorResponseErrorsInnerFieldsInner model module.
 * @module model/ErrorResponseErrorsInnerFieldsInner
 * @version 6.0
 */
class ErrorResponseErrorsInnerFieldsInner {
    /**
     * Constructs a new <code>ErrorResponseErrorsInnerFieldsInner</code>.
     * @alias module:model/ErrorResponseErrorsInnerFieldsInner
     */
    constructor() { 
        
        ErrorResponseErrorsInnerFieldsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorResponseErrorsInnerFieldsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorResponseErrorsInnerFieldsInner} obj Optional instance to populate.
     * @return {module:model/ErrorResponseErrorsInnerFieldsInner} The populated <code>ErrorResponseErrorsInnerFieldsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponseErrorsInnerFieldsInner();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorResponseErrorsInnerFieldsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorResponseErrorsInnerFieldsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['field'] && !(typeof data['field'] === 'string' || data['field'] instanceof String)) {
            throw new Error("Expected the field `field` to be a primitive type in the JSON string but got " + data['field']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * Contains the name of the field.
 * @member {String} field
 */
ErrorResponseErrorsInnerFieldsInner.prototype['field'] = undefined;

/**
 * Value sent in the input for the specific field.
 * @member {String} value
 */
ErrorResponseErrorsInnerFieldsInner.prototype['value'] = undefined;

/**
 * Gives the description of the field message.
 * @member {String} message
 */
ErrorResponseErrorsInnerFieldsInner.prototype['message'] = undefined;






export default ErrorResponseErrorsInnerFieldsInner;

