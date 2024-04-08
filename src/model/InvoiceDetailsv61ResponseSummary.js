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
import InvoiceDetailsv61ResponseSummaryForeignFxTotals from './InvoiceDetailsv61ResponseSummaryForeignFxTotals';
import InvoiceDetailsv61ResponseSummaryLines from './InvoiceDetailsv61ResponseSummaryLines';
import InvoiceDetailsv61ResponseSummaryMiscChargesInner from './InvoiceDetailsv61ResponseSummaryMiscChargesInner';
import InvoiceDetailsv61ResponseSummaryTotals from './InvoiceDetailsv61ResponseSummaryTotals';

/**
 * The InvoiceDetailsv61ResponseSummary model module.
 * @module model/InvoiceDetailsv61ResponseSummary
 * @version 1.0.0
 */
class InvoiceDetailsv61ResponseSummary {
    /**
     * Constructs a new <code>InvoiceDetailsv61ResponseSummary</code>.
     * @alias module:model/InvoiceDetailsv61ResponseSummary
     */
    constructor() { 
        
        InvoiceDetailsv61ResponseSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetailsv61ResponseSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61ResponseSummary} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61ResponseSummary} The populated <code>InvoiceDetailsv61ResponseSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailsv61ResponseSummary();

            if (data.hasOwnProperty('lines')) {
                obj['lines'] = InvoiceDetailsv61ResponseSummaryLines.constructFromObject(data['lines']);
            }
            if (data.hasOwnProperty('miscCharges')) {
                obj['miscCharges'] = ApiClient.convertToType(data['miscCharges'], [InvoiceDetailsv61ResponseSummaryMiscChargesInner]);
            }
            if (data.hasOwnProperty('totals')) {
                obj['totals'] = InvoiceDetailsv61ResponseSummaryTotals.constructFromObject(data['totals']);
            }
            if (data.hasOwnProperty('foreignFxTotals')) {
                obj['foreignFxTotals'] = InvoiceDetailsv61ResponseSummaryForeignFxTotals.constructFromObject(data['foreignFxTotals']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61ResponseSummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61ResponseSummary</code>.
     */
    static validateJSON(data) {
        // validate the optional field `lines`
        if (data['lines']) { // data not null
          InvoiceDetailsv61ResponseSummaryLines.validateJSON(data['lines']);
        }
        if (data['miscCharges']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['miscCharges'])) {
                throw new Error("Expected the field `miscCharges` to be an array in the JSON data but got " + data['miscCharges']);
            }
            // validate the optional field `miscCharges` (array)
            for (const item of data['miscCharges']) {
                InvoiceDetailsv61ResponseSummaryMiscChargesInner.validateJSON(item);
            };
        }
        // validate the optional field `totals`
        if (data['totals']) { // data not null
          InvoiceDetailsv61ResponseSummaryTotals.validateJSON(data['totals']);
        }
        // validate the optional field `foreignFxTotals`
        if (data['foreignFxTotals']) { // data not null
          InvoiceDetailsv61ResponseSummaryForeignFxTotals.validateJSON(data['foreignFxTotals']);
        }

        return true;
    }


}



/**
 * @member {module:model/InvoiceDetailsv61ResponseSummaryLines} lines
 */
InvoiceDetailsv61ResponseSummary.prototype['lines'] = undefined;

/**
 * Miscellaneous charges.
 * @member {Array.<module:model/InvoiceDetailsv61ResponseSummaryMiscChargesInner>} miscCharges
 */
InvoiceDetailsv61ResponseSummary.prototype['miscCharges'] = undefined;

/**
 * @member {module:model/InvoiceDetailsv61ResponseSummaryTotals} totals
 */
InvoiceDetailsv61ResponseSummary.prototype['totals'] = undefined;

/**
 * @member {module:model/InvoiceDetailsv61ResponseSummaryForeignFxTotals} foreignFxTotals
 */
InvoiceDetailsv61ResponseSummary.prototype['foreignFxTotals'] = undefined;






export default InvoiceDetailsv61ResponseSummary;

