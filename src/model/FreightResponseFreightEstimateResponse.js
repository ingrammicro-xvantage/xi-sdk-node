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
import FreightResponseFreightEstimateResponseDistributionInner from './FreightResponseFreightEstimateResponseDistributionInner';
import FreightResponseFreightEstimateResponseLinesInner from './FreightResponseFreightEstimateResponseLinesInner';

/**
 * The FreightResponseFreightEstimateResponse model module.
 * @module model/FreightResponseFreightEstimateResponse
 * @version 6.0
 */
class FreightResponseFreightEstimateResponse {
    /**
     * Constructs a new <code>FreightResponseFreightEstimateResponse</code>.
     * @alias module:model/FreightResponseFreightEstimateResponse
     */
    constructor() { 
        
        FreightResponseFreightEstimateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FreightResponseFreightEstimateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreightResponseFreightEstimateResponse} obj Optional instance to populate.
     * @return {module:model/FreightResponseFreightEstimateResponse} The populated <code>FreightResponseFreightEstimateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FreightResponseFreightEstimateResponse();

            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('totalFreightAmount')) {
                obj['totalFreightAmount'] = ApiClient.convertToType(data['totalFreightAmount'], 'Number');
            }
            if (data.hasOwnProperty('totalTaxAmount')) {
                obj['totalTaxAmount'] = ApiClient.convertToType(data['totalTaxAmount'], 'Number');
            }
            if (data.hasOwnProperty('totalFees')) {
                obj['totalFees'] = ApiClient.convertToType(data['totalFees'], 'Number');
            }
            if (data.hasOwnProperty('totalNetAmount')) {
                obj['totalNetAmount'] = ApiClient.convertToType(data['totalNetAmount'], 'Number');
            }
            if (data.hasOwnProperty('grossAmount')) {
                obj['grossAmount'] = ApiClient.convertToType(data['grossAmount'], 'Number');
            }
            if (data.hasOwnProperty('distribution')) {
                obj['distribution'] = ApiClient.convertToType(data['distribution'], [FreightResponseFreightEstimateResponseDistributionInner]);
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [FreightResponseFreightEstimateResponseLinesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FreightResponseFreightEstimateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FreightResponseFreightEstimateResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }
        if (data['distribution']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['distribution'])) {
                throw new Error("Expected the field `distribution` to be an array in the JSON data but got " + data['distribution']);
            }
            // validate the optional field `distribution` (array)
            for (const item of data['distribution']) {
                FreightResponseFreightEstimateResponseDistributionInner.validateJSON(item);
            };
        }
        if (data['lines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['lines'])) {
                throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
            }
            // validate the optional field `lines` (array)
            for (const item of data['lines']) {
                FreightResponseFreightEstimateResponseLinesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The country-specific three-character ISO 4217 currency code used for the order.
 * @member {String} currencyCode
 */
FreightResponseFreightEstimateResponse.prototype['currencyCode'] = undefined;

/**
 * Total freight amount.
 * @member {Number} totalFreightAmount
 */
FreightResponseFreightEstimateResponse.prototype['totalFreightAmount'] = undefined;

/**
 * Total tax amount.
 * @member {Number} totalTaxAmount
 */
FreightResponseFreightEstimateResponse.prototype['totalTaxAmount'] = undefined;

/**
 * Total fees.
 * @member {Number} totalFees
 */
FreightResponseFreightEstimateResponse.prototype['totalFees'] = undefined;

/**
 * Total net amount.
 * @member {Number} totalNetAmount
 */
FreightResponseFreightEstimateResponse.prototype['totalNetAmount'] = undefined;

/**
 * Gross amount.
 * @member {Number} grossAmount
 */
FreightResponseFreightEstimateResponse.prototype['grossAmount'] = undefined;

/**
 * @member {Array.<module:model/FreightResponseFreightEstimateResponseDistributionInner>} distribution
 */
FreightResponseFreightEstimateResponse.prototype['distribution'] = undefined;

/**
 * @member {Array.<module:model/FreightResponseFreightEstimateResponseLinesInner>} lines
 */
FreightResponseFreightEstimateResponse.prototype['lines'] = undefined;






export default FreightResponseFreightEstimateResponse;

