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
 * The RenewalsSearchRequestStatusOpporutinyStatus model module.
 * @module model/RenewalsSearchRequestStatusOpporutinyStatus
 * @version 6.0
 */
class RenewalsSearchRequestStatusOpporutinyStatus {
    /**
     * Constructs a new <code>RenewalsSearchRequestStatusOpporutinyStatus</code>.
     * @alias module:model/RenewalsSearchRequestStatusOpporutinyStatus
     */
    constructor() { 
        
        RenewalsSearchRequestStatusOpporutinyStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenewalsSearchRequestStatusOpporutinyStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewalsSearchRequestStatusOpporutinyStatus} obj Optional instance to populate.
     * @return {module:model/RenewalsSearchRequestStatusOpporutinyStatus} The populated <code>RenewalsSearchRequestStatusOpporutinyStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenewalsSearchRequestStatusOpporutinyStatus();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('subStatus')) {
                obj['subStatus'] = ApiClient.convertToType(data['subStatus'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RenewalsSearchRequestStatusOpporutinyStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RenewalsSearchRequestStatusOpporutinyStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['subStatus'] && !(typeof data['subStatus'] === 'string' || data['subStatus'] instanceof String)) {
            throw new Error("Expected the field `subStatus` to be a primitive type in the JSON string but got " + data['subStatus']);
        }

        return true;
    }


}



/**
 * The value of opportunity status, it can be either Open or Closed.
 * @member {String} value
 */
RenewalsSearchRequestStatusOpporutinyStatus.prototype['value'] = undefined;

/**
 * The sub-status of Opportunity status. Possible sub-status values for Open opportunity status are Ready to order, Quote pending, Notification sent, Future, and Quote requested. Possible sub-status values for Closed opportunity status are All, Ordered, Quote closed-contract sales desk, Expired, Transition to new/upsell, Lost to competitior, Consolidated, Transitioned to cloud, Renewal went direct, EOL, End user out of business, Void, Other, and Cancelled.
 * @member {String} subStatus
 */
RenewalsSearchRequestStatusOpporutinyStatus.prototype['subStatus'] = undefined;






export default RenewalsSearchRequestStatusOpporutinyStatus;

