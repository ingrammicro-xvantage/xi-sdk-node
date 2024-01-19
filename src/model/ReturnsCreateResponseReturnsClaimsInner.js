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
import ReturnsSearchResponseReturnsClaimsInnerLinksInner from './ReturnsSearchResponseReturnsClaimsInnerLinksInner';

/**
 * The ReturnsCreateResponseReturnsClaimsInner model module.
 * @module model/ReturnsCreateResponseReturnsClaimsInner
 * @version 6.0
 */
class ReturnsCreateResponseReturnsClaimsInner {
    /**
     * Constructs a new <code>ReturnsCreateResponseReturnsClaimsInner</code>.
     * @alias module:model/ReturnsCreateResponseReturnsClaimsInner
     */
    constructor() { 
        
        ReturnsCreateResponseReturnsClaimsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReturnsCreateResponseReturnsClaimsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsCreateResponseReturnsClaimsInner} obj Optional instance to populate.
     * @return {module:model/ReturnsCreateResponseReturnsClaimsInner} The populated <code>ReturnsCreateResponseReturnsClaimsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnsCreateResponseReturnsClaimsInner();

            if (data.hasOwnProperty('rmaClaimId')) {
                obj['rmaClaimId'] = ApiClient.convertToType(data['rmaClaimId'], 'String');
            }
            if (data.hasOwnProperty('caseRequestNumber')) {
                obj['caseRequestNumber'] = ApiClient.convertToType(data['caseRequestNumber'], 'String');
            }
            if (data.hasOwnProperty('referenceNumber')) {
                obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('returnReason')) {
                obj['returnReason'] = ApiClient.convertToType(data['returnReason'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('estimatedTotalValue')) {
                obj['estimatedTotalValue'] = ApiClient.convertToType(data['estimatedTotalValue'], 'Number');
            }
            if (data.hasOwnProperty('credit')) {
                obj['credit'] = ApiClient.convertToType(data['credit'], 'Number');
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
     * Validates the JSON data with respect to <code>ReturnsCreateResponseReturnsClaimsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnsCreateResponseReturnsClaimsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['rmaClaimId'] && !(typeof data['rmaClaimId'] === 'string' || data['rmaClaimId'] instanceof String)) {
            throw new Error("Expected the field `rmaClaimId` to be a primitive type in the JSON string but got " + data['rmaClaimId']);
        }
        // ensure the json data is a string
        if (data['caseRequestNumber'] && !(typeof data['caseRequestNumber'] === 'string' || data['caseRequestNumber'] instanceof String)) {
            throw new Error("Expected the field `caseRequestNumber` to be a primitive type in the JSON string but got " + data['caseRequestNumber']);
        }
        // ensure the json data is a string
        if (data['referenceNumber'] && !(typeof data['referenceNumber'] === 'string' || data['referenceNumber'] instanceof String)) {
            throw new Error("Expected the field `referenceNumber` to be a primitive type in the JSON string but got " + data['referenceNumber']);
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
        if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
        }
        // ensure the json data is a string
        if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
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
 * The rmaClaimId claim id.
 * @member {String} rmaClaimId
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['rmaClaimId'] = undefined;

/**
 * A unique return request number.
 * @member {String} caseRequestNumber
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['caseRequestNumber'] = undefined;

/**
 * The reference number for the return.
 * @member {String} referenceNumber
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['referenceNumber'] = undefined;

/**
 * The date on which the return request was created. 
 * @member {Date} createdOn
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['createdOn'] = undefined;

/**
 * Type of request.
 * @member {String} type
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['type'] = undefined;

/**
 * The reason for the return.
 * @member {String} returnReason
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['returnReason'] = undefined;

/**
 * Unique line number from Ingram.
 * @member {String} ingramPartNumber
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['ingramPartNumber'] = undefined;

/**
 * Vendor Part Number.
 * @member {String} vendorPartNumber
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['vendorPartNumber'] = undefined;

/**
 * Return quantity of the product.
 * @member {Number} quantity
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['quantity'] = undefined;

/**
 * Return notes.
 * @member {String} notes
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['notes'] = undefined;

/**
 * The estimated total value of the return.
 * @member {Number} estimatedTotalValue
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['estimatedTotalValue'] = undefined;

/**
 * The amount of credit.
 * @member {Number} credit
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['credit'] = undefined;

/**
 * The status of the request.
 * @member {String} status
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/ReturnsSearchResponseReturnsClaimsInnerLinksInner>} links
 */
ReturnsCreateResponseReturnsClaimsInner.prototype['links'] = undefined;






export default ReturnsCreateResponseReturnsClaimsInner;

