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
 * The InvoiceDetailsv61ResponseSummaryMiscChargesInner model module.
 * @module model/InvoiceDetailsv61ResponseSummaryMiscChargesInner
 * @version 6.0
 */
class InvoiceDetailsv61ResponseSummaryMiscChargesInner {
    /**
     * Constructs a new <code>InvoiceDetailsv61ResponseSummaryMiscChargesInner</code>.
     * @alias module:model/InvoiceDetailsv61ResponseSummaryMiscChargesInner
     */
    constructor() { 
        
        InvoiceDetailsv61ResponseSummaryMiscChargesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetailsv61ResponseSummaryMiscChargesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61ResponseSummaryMiscChargesInner} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61ResponseSummaryMiscChargesInner} The populated <code>InvoiceDetailsv61ResponseSummaryMiscChargesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailsv61ResponseSummaryMiscChargesInner();

            if (data.hasOwnProperty('chargeDescription')) {
                obj['chargeDescription'] = ApiClient.convertToType(data['chargeDescription'], 'String');
            }
            if (data.hasOwnProperty('miscChargeLineCount')) {
                obj['miscChargeLineCount'] = ApiClient.convertToType(data['miscChargeLineCount'], 'Number');
            }
            if (data.hasOwnProperty('miscChargeLineTotal')) {
                obj['miscChargeLineTotal'] = ApiClient.convertToType(data['miscChargeLineTotal'], 'Number');
            }
            if (data.hasOwnProperty('chargeLineReference')) {
                obj['chargeLineReference'] = ApiClient.convertToType(data['chargeLineReference'], 'String');
            }
            if (data.hasOwnProperty('isNonMisc')) {
                obj['isNonMisc'] = ApiClient.convertToType(data['isNonMisc'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61ResponseSummaryMiscChargesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61ResponseSummaryMiscChargesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['chargeDescription'] && !(typeof data['chargeDescription'] === 'string' || data['chargeDescription'] instanceof String)) {
            throw new Error("Expected the field `chargeDescription` to be a primitive type in the JSON string but got " + data['chargeDescription']);
        }
        // ensure the json data is a string
        if (data['chargeLineReference'] && !(typeof data['chargeLineReference'] === 'string' || data['chargeLineReference'] instanceof String)) {
            throw new Error("Expected the field `chargeLineReference` to be a primitive type in the JSON string but got " + data['chargeLineReference']);
        }
        // ensure the json data is a string
        if (data['isNonMisc'] && !(typeof data['isNonMisc'] === 'string' || data['isNonMisc'] instanceof String)) {
            throw new Error("Expected the field `isNonMisc` to be a primitive type in the JSON string but got " + data['isNonMisc']);
        }

        return true;
    }


}



/**
 * Description of the charge.
 * @member {String} chargeDescription
 */
InvoiceDetailsv61ResponseSummaryMiscChargesInner.prototype['chargeDescription'] = undefined;

/**
 * The number of lines for which miscellaneous charges are applicable.
 * @member {Number} miscChargeLineCount
 */
InvoiceDetailsv61ResponseSummaryMiscChargesInner.prototype['miscChargeLineCount'] = undefined;

/**
 * Miscellaneous charge amount.
 * @member {Number} miscChargeLineTotal
 */
InvoiceDetailsv61ResponseSummaryMiscChargesInner.prototype['miscChargeLineTotal'] = undefined;

/**
 * Reference of the chargeLine.
 * @member {String} chargeLineReference
 */
InvoiceDetailsv61ResponseSummaryMiscChargesInner.prototype['chargeLineReference'] = undefined;

/**
 * Is charge non miscellaneous.
 * @member {String} isNonMisc
 */
InvoiceDetailsv61ResponseSummaryMiscChargesInner.prototype['isNonMisc'] = undefined;






export default InvoiceDetailsv61ResponseSummaryMiscChargesInner;

