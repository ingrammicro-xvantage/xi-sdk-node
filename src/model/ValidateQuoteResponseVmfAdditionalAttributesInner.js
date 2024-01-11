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
 * The ValidateQuoteResponseVmfAdditionalAttributesInner model module.
 * @module model/ValidateQuoteResponseVmfAdditionalAttributesInner
 * @version 6.0
 */
class ValidateQuoteResponseVmfAdditionalAttributesInner {
    /**
     * Constructs a new <code>ValidateQuoteResponseVmfAdditionalAttributesInner</code>.
     * @alias module:model/ValidateQuoteResponseVmfAdditionalAttributesInner
     */
    constructor() { 
        
        ValidateQuoteResponseVmfAdditionalAttributesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValidateQuoteResponseVmfAdditionalAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidateQuoteResponseVmfAdditionalAttributesInner} obj Optional instance to populate.
     * @return {module:model/ValidateQuoteResponseVmfAdditionalAttributesInner} The populated <code>ValidateQuoteResponseVmfAdditionalAttributesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidateQuoteResponseVmfAdditionalAttributesInner();

            if (data.hasOwnProperty('attributeName')) {
                obj['attributeName'] = ApiClient.convertToType(data['attributeName'], 'String');
            }
            if (data.hasOwnProperty('attributeValue')) {
                obj['attributeValue'] = ApiClient.convertToType(data['attributeValue'], 'String');
            }
            if (data.hasOwnProperty('attributeDescription')) {
                obj['attributeDescription'] = ApiClient.convertToType(data['attributeDescription'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ValidateQuoteResponseVmfAdditionalAttributesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidateQuoteResponseVmfAdditionalAttributesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['attributeName'] && !(typeof data['attributeName'] === 'string' || data['attributeName'] instanceof String)) {
            throw new Error("Expected the field `attributeName` to be a primitive type in the JSON string but got " + data['attributeName']);
        }
        // ensure the json data is a string
        if (data['attributeValue'] && !(typeof data['attributeValue'] === 'string' || data['attributeValue'] instanceof String)) {
            throw new Error("Expected the field `attributeValue` to be a primitive type in the JSON string but got " + data['attributeValue']);
        }
        // ensure the json data is a string
        if (data['attributeDescription'] && !(typeof data['attributeDescription'] === 'string' || data['attributeDescription'] instanceof String)) {
            throw new Error("Expected the field `attributeDescription` to be a primitive type in the JSON string but got " + data['attributeDescription']);
        }

        return true;
    }


}



/**
 * The name of the header level field.
 * @member {String} attributeName
 */
ValidateQuoteResponseVmfAdditionalAttributesInner.prototype['attributeName'] = undefined;

/**
 * The value of the header level field.
 * @member {String} attributeValue
 */
ValidateQuoteResponseVmfAdditionalAttributesInner.prototype['attributeValue'] = undefined;

/**
 * The description of the header level field.
 * @member {String} attributeDescription
 */
ValidateQuoteResponseVmfAdditionalAttributesInner.prototype['attributeDescription'] = undefined;






export default ValidateQuoteResponseVmfAdditionalAttributesInner;

