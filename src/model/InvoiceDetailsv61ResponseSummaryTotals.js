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
 * The InvoiceDetailsv61ResponseSummaryTotals model module.
 * @module model/InvoiceDetailsv61ResponseSummaryTotals
 * @version 6.0
 */
class InvoiceDetailsv61ResponseSummaryTotals {
    /**
     * Constructs a new <code>InvoiceDetailsv61ResponseSummaryTotals</code>.
     * @alias module:model/InvoiceDetailsv61ResponseSummaryTotals
     */
    constructor() { 
        
        InvoiceDetailsv61ResponseSummaryTotals.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetailsv61ResponseSummaryTotals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61ResponseSummaryTotals} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61ResponseSummaryTotals} The populated <code>InvoiceDetailsv61ResponseSummaryTotals</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailsv61ResponseSummaryTotals();

            if (data.hasOwnProperty('netInvoiceAmount')) {
                obj['netInvoiceAmount'] = ApiClient.convertToType(data['netInvoiceAmount'], 'Number');
            }
            if (data.hasOwnProperty('discountAmount')) {
                obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'Number');
            }
            if (data.hasOwnProperty('discountType')) {
                obj['discountType'] = ApiClient.convertToType(data['discountType'], 'String');
            }
            if (data.hasOwnProperty('totalTaxAmount')) {
                obj['totalTaxAmount'] = ApiClient.convertToType(data['totalTaxAmount'], 'Number');
            }
            if (data.hasOwnProperty('invoicedAmountDue')) {
                obj['invoicedAmountDue'] = ApiClient.convertToType(data['invoicedAmountDue'], 'Number');
            }
            if (data.hasOwnProperty('freightAmount')) {
                obj['freightAmount'] = ApiClient.convertToType(data['freightAmount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61ResponseSummaryTotals</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61ResponseSummaryTotals</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['discountType'] && !(typeof data['discountType'] === 'string' || data['discountType'] instanceof String)) {
            throw new Error("Expected the field `discountType` to be a primitive type in the JSON string but got " + data['discountType']);
        }

        return true;
    }


}



/**
 * Net Invoice amount.
 * @member {Number} netInvoiceAmount
 */
InvoiceDetailsv61ResponseSummaryTotals.prototype['netInvoiceAmount'] = undefined;

/**
 * Discount amount.
 * @member {Number} discountAmount
 */
InvoiceDetailsv61ResponseSummaryTotals.prototype['discountAmount'] = undefined;

/**
 * Type of discount.
 * @member {String} discountType
 */
InvoiceDetailsv61ResponseSummaryTotals.prototype['discountType'] = undefined;

/**
 * Total Tax amount.
 * @member {Number} totalTaxAmount
 */
InvoiceDetailsv61ResponseSummaryTotals.prototype['totalTaxAmount'] = undefined;

/**
 * Total amount due for the invoice.
 * @member {Number} invoicedAmountDue
 */
InvoiceDetailsv61ResponseSummaryTotals.prototype['invoicedAmountDue'] = undefined;

/**
 * Freight amount
 * @member {Number} freightAmount
 */
InvoiceDetailsv61ResponseSummaryTotals.prototype['freightAmount'] = undefined;






export default InvoiceDetailsv61ResponseSummaryTotals;

