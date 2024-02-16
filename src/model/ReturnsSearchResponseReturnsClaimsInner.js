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
import ReturnsSearchResponseReturnsClaimsInnerLinksInner from './ReturnsSearchResponseReturnsClaimsInnerLinksInner';

/**
 * The ReturnsSearchResponseReturnsClaimsInner model module.
 * @module model/ReturnsSearchResponseReturnsClaimsInner
 * @version 1.0.0
 */
class ReturnsSearchResponseReturnsClaimsInner {
    /**
     * Constructs a new <code>ReturnsSearchResponseReturnsClaimsInner</code>.
     * @alias module:model/ReturnsSearchResponseReturnsClaimsInner
     */
    constructor() { 
        
        ReturnsSearchResponseReturnsClaimsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReturnsSearchResponseReturnsClaimsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsSearchResponseReturnsClaimsInner} obj Optional instance to populate.
     * @return {module:model/ReturnsSearchResponseReturnsClaimsInner} The populated <code>ReturnsSearchResponseReturnsClaimsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnsSearchResponseReturnsClaimsInner();

            if (data.hasOwnProperty('returnClaimId')) {
                obj['returnClaimId'] = ApiClient.convertToType(data['returnClaimId'], 'String');
            }
            if (data.hasOwnProperty('caseRequestNumber')) {
                obj['caseRequestNumber'] = ApiClient.convertToType(data['caseRequestNumber'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('returnReason')) {
                obj['returnReason'] = ApiClient.convertToType(data['returnReason'], 'String');
            }
            if (data.hasOwnProperty('referenceNumber')) {
                obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
            }
            if (data.hasOwnProperty('estimatedTotalValue')) {
                obj['estimatedTotalValue'] = ApiClient.convertToType(data['estimatedTotalValue'], 'Number');
            }
            if (data.hasOwnProperty('credit')) {
                obj['credit'] = ApiClient.convertToType(data['credit'], 'Number');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [ReturnsSearchResponseReturnsClaimsInnerLinksInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReturnsSearchResponseReturnsClaimsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnsSearchResponseReturnsClaimsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['returnClaimId'] && !(typeof data['returnClaimId'] === 'string' || data['returnClaimId'] instanceof String)) {
            throw new Error("Expected the field `returnClaimId` to be a primitive type in the JSON string but got " + data['returnClaimId']);
        }
        // ensure the json data is a string
        if (data['caseRequestNumber'] && !(typeof data['caseRequestNumber'] === 'string' || data['caseRequestNumber'] instanceof String)) {
            throw new Error("Expected the field `caseRequestNumber` to be a primitive type in the JSON string but got " + data['caseRequestNumber']);
        }
        // ensure the json data is a string
        if (data['createdOn'] && !(typeof data['createdOn'] === 'string' || data['createdOn'] instanceof String)) {
            throw new Error("Expected the field `createdOn` to be a primitive type in the JSON string but got " + data['createdOn']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['returnReason'] && !(typeof data['returnReason'] === 'string' || data['returnReason'] instanceof String)) {
            throw new Error("Expected the field `returnReason` to be a primitive type in the JSON string but got " + data['returnReason']);
        }
        // ensure the json data is a string
        if (data['referenceNumber'] && !(typeof data['referenceNumber'] === 'string' || data['referenceNumber'] instanceof String)) {
            throw new Error("Expected the field `referenceNumber` to be a primitive type in the JSON string but got " + data['referenceNumber']);
        }
        // ensure the json data is a string
        if (data['modifiedOn'] && !(typeof data['modifiedOn'] === 'string' || data['modifiedOn'] instanceof String)) {
            throw new Error("Expected the field `modifiedOn` to be a primitive type in the JSON string but got " + data['modifiedOn']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        if (data['links']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['links'])) {
                throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
            }
            // validate the optional field `links` (array)
            for (const item of data['links']) {
                ReturnsSearchResponseReturnsClaimsInnerLinksInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * A unique return claim Id.
 * @member {String} returnClaimId
 */
ReturnsSearchResponseReturnsClaimsInner.prototype['returnClaimId'] = undefined;

/**
 * A unique return request number.
 * @member {String} caseRequestNumber
 */
ReturnsSearchResponseReturnsClaimsInner.prototype['caseRequestNumber'] = undefined;

/**
 * The date on which the return request was created. 
 * @member {String} createdOn
 */
ReturnsSearchResponseReturnsClaimsInner.prototype['createdOn'] = undefined;

/**
 * Type of request.
 * @member {String} type
 */
ReturnsSearchResponseReturnsClaimsInner.prototype['type'] = undefined;

/**
 * The reason for the return.
 * @member {String} returnReason
 */
ReturnsSearchResponseReturnsClaimsInner.prototype['returnReason'] = undefined;

/**
 * The reference number for the return.
 * @member {String} referenceNumber
 */
ReturnsSearchResponseReturnsClaimsInner.prototype['referenceNumber'] = undefined;

/**
 * The estimated total value of the return.
 * @member {Number} estimatedTotalValue
 */
ReturnsSearchResponseReturnsClaimsInner.prototype['estimatedTotalValue'] = undefined;

/**
 * The amount of credit.
 * @member {Number} credit
 */
ReturnsSearchResponseReturnsClaimsInner.prototype['credit'] = undefined;

/**
 * The date on which the return request was last updated.
 * @member {String} modifiedOn
 */
ReturnsSearchResponseReturnsClaimsInner.prototype['modifiedOn'] = undefined;

/**
 * The status of the request.
 * @member {String} status
 */
ReturnsSearchResponseReturnsClaimsInner.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/ReturnsSearchResponseReturnsClaimsInnerLinksInner>} links
 */
ReturnsSearchResponseReturnsClaimsInner.prototype['links'] = undefined;






export default ReturnsSearchResponseReturnsClaimsInner;

