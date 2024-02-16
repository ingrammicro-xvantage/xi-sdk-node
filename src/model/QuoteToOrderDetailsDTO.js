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
import QuoteToOrderDetailsDTOAdditionalAttributesInner from './QuoteToOrderDetailsDTOAdditionalAttributesInner';
import QuoteToOrderDetailsDTOEndUserInfoInner from './QuoteToOrderDetailsDTOEndUserInfoInner';
import QuoteToOrderDetailsDTOLinesInner from './QuoteToOrderDetailsDTOLinesInner';
import QuoteToOrderDetailsDTOShipToInfoInner from './QuoteToOrderDetailsDTOShipToInfoInner';
import QuoteToOrderDetailsDTOVmfadditionalAttributesInner from './QuoteToOrderDetailsDTOVmfadditionalAttributesInner';

/**
 * The QuoteToOrderDetailsDTO model module.
 * @module model/QuoteToOrderDetailsDTO
 * @version 1.0.0
 */
class QuoteToOrderDetailsDTO {
    /**
     * Constructs a new <code>QuoteToOrderDetailsDTO</code>.
     * @alias module:model/QuoteToOrderDetailsDTO
     */
    constructor() { 
        
        QuoteToOrderDetailsDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteToOrderDetailsDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteToOrderDetailsDTO} obj Optional instance to populate.
     * @return {module:model/QuoteToOrderDetailsDTO} The populated <code>QuoteToOrderDetailsDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteToOrderDetailsDTO();

            if (data.hasOwnProperty('quoteNumber')) {
                obj['quoteNumber'] = ApiClient.convertToType(data['quoteNumber'], 'String');
            }
            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = ApiClient.convertToType(data['customerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('enduserOrderNumber')) {
                obj['enduserOrderNumber'] = ApiClient.convertToType(data['enduserOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('billToAddressId')) {
                obj['billToAddressId'] = ApiClient.convertToType(data['billToAddressId'], 'String');
            }
            if (data.hasOwnProperty('endUserInfo')) {
                obj['endUserInfo'] = ApiClient.convertToType(data['endUserInfo'], [QuoteToOrderDetailsDTOEndUserInfoInner]);
            }
            if (data.hasOwnProperty('shipToInfo')) {
                obj['shipToInfo'] = ApiClient.convertToType(data['shipToInfo'], [QuoteToOrderDetailsDTOShipToInfoInner]);
            }
            if (data.hasOwnProperty('additionalAttributes')) {
                obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [QuoteToOrderDetailsDTOAdditionalAttributesInner]);
            }
            if (data.hasOwnProperty('vmfadditionalAttributes')) {
                obj['vmfadditionalAttributes'] = ApiClient.convertToType(data['vmfadditionalAttributes'], [QuoteToOrderDetailsDTOVmfadditionalAttributesInner]);
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [QuoteToOrderDetailsDTOLinesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteToOrderDetailsDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteToOrderDetailsDTO</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['quoteNumber'] && !(typeof data['quoteNumber'] === 'string' || data['quoteNumber'] instanceof String)) {
            throw new Error("Expected the field `quoteNumber` to be a primitive type in the JSON string but got " + data['quoteNumber']);
        }
        // ensure the json data is a string
        if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['enduserOrderNumber'] && !(typeof data['enduserOrderNumber'] === 'string' || data['enduserOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `enduserOrderNumber` to be a primitive type in the JSON string but got " + data['enduserOrderNumber']);
        }
        // ensure the json data is a string
        if (data['billToAddressId'] && !(typeof data['billToAddressId'] === 'string' || data['billToAddressId'] instanceof String)) {
            throw new Error("Expected the field `billToAddressId` to be a primitive type in the JSON string but got " + data['billToAddressId']);
        }
        if (data['endUserInfo']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['endUserInfo'])) {
                throw new Error("Expected the field `endUserInfo` to be an array in the JSON data but got " + data['endUserInfo']);
            }
            // validate the optional field `endUserInfo` (array)
            for (const item of data['endUserInfo']) {
                QuoteToOrderDetailsDTOEndUserInfoInner.validateJSON(item);
            };
        }
        if (data['shipToInfo']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['shipToInfo'])) {
                throw new Error("Expected the field `shipToInfo` to be an array in the JSON data but got " + data['shipToInfo']);
            }
            // validate the optional field `shipToInfo` (array)
            for (const item of data['shipToInfo']) {
                QuoteToOrderDetailsDTOShipToInfoInner.validateJSON(item);
            };
        }
        if (data['additionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalAttributes'])) {
                throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
            }
            // validate the optional field `additionalAttributes` (array)
            for (const item of data['additionalAttributes']) {
                QuoteToOrderDetailsDTOAdditionalAttributesInner.validateJSON(item);
            };
        }
        if (data['vmfadditionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vmfadditionalAttributes'])) {
                throw new Error("Expected the field `vmfadditionalAttributes` to be an array in the JSON data but got " + data['vmfadditionalAttributes']);
            }
            // validate the optional field `vmfadditionalAttributes` (array)
            for (const item of data['vmfadditionalAttributes']) {
                QuoteToOrderDetailsDTOVmfadditionalAttributesInner.validateJSON(item);
            };
        }
        if (data['lines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['lines'])) {
                throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
            }
            // validate the optional field `lines` (array)
            for (const item of data['lines']) {
                QuoteToOrderDetailsDTOLinesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * A unique identifier generated by Ingram Micro's CRM specific to each quote.
 * @member {String} quoteNumber
 */
QuoteToOrderDetailsDTO.prototype['quoteNumber'] = undefined;

/**
 * The reseller's order number for reference in their system.
 * @member {String} customerOrderNumber
 */
QuoteToOrderDetailsDTO.prototype['customerOrderNumber'] = undefined;

/**
 * The end customer's order number for reference in their system.
 * @member {String} enduserOrderNumber
 */
QuoteToOrderDetailsDTO.prototype['enduserOrderNumber'] = undefined;

/**
 * Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit.
 * @member {String} billToAddressId
 */
QuoteToOrderDetailsDTO.prototype['billToAddressId'] = undefined;

/**
 * The contact information for the end user/customer provided by the reseller. Used to determine pricing and discounts.
 * @member {Array.<module:model/QuoteToOrderDetailsDTOEndUserInfoInner>} endUserInfo
 */
QuoteToOrderDetailsDTO.prototype['endUserInfo'] = undefined;

/**
 * The shipping information provided by the reseller for order delivery.
 * @member {Array.<module:model/QuoteToOrderDetailsDTOShipToInfoInner>} shipToInfo
 */
QuoteToOrderDetailsDTO.prototype['shipToInfo'] = undefined;

/**
 * Additional order create attributes.
 * @member {Array.<module:model/QuoteToOrderDetailsDTOAdditionalAttributesInner>} additionalAttributes
 */
QuoteToOrderDetailsDTO.prototype['additionalAttributes'] = undefined;

/**
 * The object containing the list of fields required at a header level by the vendor.
 * @member {Array.<module:model/QuoteToOrderDetailsDTOVmfadditionalAttributesInner>} vmfadditionalAttributes
 */
QuoteToOrderDetailsDTO.prototype['vmfadditionalAttributes'] = undefined;

/**
 * The object containing the lines that require vendor mandatory fields.
 * @member {Array.<module:model/QuoteToOrderDetailsDTOLinesInner>} lines
 */
QuoteToOrderDetailsDTO.prototype['lines'] = undefined;






export default QuoteToOrderDetailsDTO;

