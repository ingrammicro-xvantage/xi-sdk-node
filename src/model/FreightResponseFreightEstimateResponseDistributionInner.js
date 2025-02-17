/**
 * XI Sdk Resellers
 * For Resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
import FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner from './FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner';

/**
 * The FreightResponseFreightEstimateResponseDistributionInner model module.
 * @module model/FreightResponseFreightEstimateResponseDistributionInner
 * @version 1.0.0
 */
class FreightResponseFreightEstimateResponseDistributionInner {
    /**
     * Constructs a new <code>FreightResponseFreightEstimateResponseDistributionInner</code>.
     * @alias module:model/FreightResponseFreightEstimateResponseDistributionInner
     */
    constructor() { 
        
        FreightResponseFreightEstimateResponseDistributionInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FreightResponseFreightEstimateResponseDistributionInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreightResponseFreightEstimateResponseDistributionInner} obj Optional instance to populate.
     * @return {module:model/FreightResponseFreightEstimateResponseDistributionInner} The populated <code>FreightResponseFreightEstimateResponseDistributionInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FreightResponseFreightEstimateResponseDistributionInner();

            if (data.hasOwnProperty('shipFromBranchNumber')) {
                obj['shipFromBranchNumber'] = ApiClient.convertToType(data['shipFromBranchNumber'], 'String');
            }
            if (data.hasOwnProperty('carrierCode')) {
                obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'String');
            }
            if (data.hasOwnProperty('shipVia')) {
                obj['shipVia'] = ApiClient.convertToType(data['shipVia'], 'String');
            }
            if (data.hasOwnProperty('freightRate')) {
                obj['freightRate'] = ApiClient.convertToType(data['freightRate'], 'Number');
            }
            if (data.hasOwnProperty('totalWeight')) {
                obj['totalWeight'] = ApiClient.convertToType(data['totalWeight'], 'Number');
            }
            if (data.hasOwnProperty('transitDays')) {
                obj['transitDays'] = ApiClient.convertToType(data['transitDays'], 'Number');
            }
            if (data.hasOwnProperty('carrierList')) {
                obj['carrierList'] = ApiClient.convertToType(data['carrierList'], [FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FreightResponseFreightEstimateResponseDistributionInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FreightResponseFreightEstimateResponseDistributionInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['shipFromBranchNumber'] && !(typeof data['shipFromBranchNumber'] === 'string' || data['shipFromBranchNumber'] instanceof String)) {
            throw new Error("Expected the field `shipFromBranchNumber` to be a primitive type in the JSON string but got " + data['shipFromBranchNumber']);
        }
        // ensure the json data is a string
        if (data['carrierCode'] && !(typeof data['carrierCode'] === 'string' || data['carrierCode'] instanceof String)) {
            throw new Error("Expected the field `carrierCode` to be a primitive type in the JSON string but got " + data['carrierCode']);
        }
        // ensure the json data is a string
        if (data['shipVia'] && !(typeof data['shipVia'] === 'string' || data['shipVia'] instanceof String)) {
            throw new Error("Expected the field `shipVia` to be a primitive type in the JSON string but got " + data['shipVia']);
        }
        if (data['carrierList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['carrierList'])) {
                throw new Error("Expected the field `carrierList` to be an array in the JSON data but got " + data['carrierList']);
            }
            // validate the optional field `carrierList` (array)
            for (const item of data['carrierList']) {
                FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The ID of the warehouse the line item will ship from.
 * @member {String} shipFromBranchNumber
 */
FreightResponseFreightEstimateResponseDistributionInner.prototype['shipFromBranchNumber'] = undefined;

/**
 * The code for the shipping carrier for the line item.
 * @member {String} carrierCode
 */
FreightResponseFreightEstimateResponseDistributionInner.prototype['carrierCode'] = undefined;

/**
 * The name of the shipping carrier.
 * @member {String} shipVia
 */
FreightResponseFreightEstimateResponseDistributionInner.prototype['shipVia'] = undefined;

/**
 * Estimated freight charge.
 * @member {Number} freightRate
 */
FreightResponseFreightEstimateResponseDistributionInner.prototype['freightRate'] = undefined;

/**
 * Total weight.
 * @member {Number} totalWeight
 */
FreightResponseFreightEstimateResponseDistributionInner.prototype['totalWeight'] = undefined;

/**
 * Number of transit days.
 * @member {Number} transitDays
 */
FreightResponseFreightEstimateResponseDistributionInner.prototype['transitDays'] = undefined;

/**
 * @member {Array.<module:model/FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner>} carrierList
 */
FreightResponseFreightEstimateResponseDistributionInner.prototype['carrierList'] = undefined;






export default FreightResponseFreightEstimateResponseDistributionInner;

