/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of APIs and webhooks to craft a seamless journey for your customers.
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
import ValidateQuoteResponseLinesInnerVmfAdditionalAttributesLinesInner from './ValidateQuoteResponseLinesInnerVmfAdditionalAttributesLinesInner';

/**
 * The ValidateQuoteResponseLinesInner model module.
 * @module model/ValidateQuoteResponseLinesInner
 * @version 1.0.0
 */
class ValidateQuoteResponseLinesInner {
    /**
     * Constructs a new <code>ValidateQuoteResponseLinesInner</code>.
     * @alias module:model/ValidateQuoteResponseLinesInner
     */
    constructor() { 
        
        ValidateQuoteResponseLinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValidateQuoteResponseLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidateQuoteResponseLinesInner} obj Optional instance to populate.
     * @return {module:model/ValidateQuoteResponseLinesInner} The populated <code>ValidateQuoteResponseLinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidateQuoteResponseLinesInner();

            if (data.hasOwnProperty('customerLineNumber')) {
                obj['customerLineNumber'] = ApiClient.convertToType(data['customerLineNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('vmfAdditionalAttributesLines')) {
                obj['vmfAdditionalAttributesLines'] = ApiClient.convertToType(data['vmfAdditionalAttributesLines'], [ValidateQuoteResponseLinesInnerVmfAdditionalAttributesLinesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ValidateQuoteResponseLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidateQuoteResponseLinesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customerLineNumber'] && !(typeof data['customerLineNumber'] === 'string' || data['customerLineNumber'] instanceof String)) {
            throw new Error("Expected the field `customerLineNumber` to be a primitive type in the JSON string but got " + data['customerLineNumber']);
        }
        // ensure the json data is a string
        if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
        }
        if (data['vmfAdditionalAttributesLines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vmfAdditionalAttributesLines'])) {
                throw new Error("Expected the field `vmfAdditionalAttributesLines` to be an array in the JSON data but got " + data['vmfAdditionalAttributesLines']);
            }
            // validate the optional field `vmfAdditionalAttributesLines` (array)
            for (const item of data['vmfAdditionalAttributesLines']) {
                ValidateQuoteResponseLinesInnerVmfAdditionalAttributesLinesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The reseller's line item number for reference in their system.
 * @member {String} customerLineNumber
 */
ValidateQuoteResponseLinesInner.prototype['customerLineNumber'] = undefined;

/**
 * Unique Ingram Micro part number.
 * @member {String} ingramPartNumber
 */
ValidateQuoteResponseLinesInner.prototype['ingramPartNumber'] = undefined;

/**
 * The quantity of the line item.
 * @member {Number} quantity
 */
ValidateQuoteResponseLinesInner.prototype['quantity'] = undefined;

/**
 * The object containing the list of fields required at a line level by the vendor.
 * @member {Array.<module:model/ValidateQuoteResponseLinesInnerVmfAdditionalAttributesLinesInner>} vmfAdditionalAttributesLines
 */
ValidateQuoteResponseLinesInner.prototype['vmfAdditionalAttributesLines'] = undefined;






export default ValidateQuoteResponseLinesInner;

