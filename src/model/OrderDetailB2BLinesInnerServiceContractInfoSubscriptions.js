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

/**
 * The OrderDetailB2BLinesInnerServiceContractInfoSubscriptions model module.
 * @module model/OrderDetailB2BLinesInnerServiceContractInfoSubscriptions
 * @version 6.0
 */
class OrderDetailB2BLinesInnerServiceContractInfoSubscriptions {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInnerServiceContractInfoSubscriptions</code>.
     * @alias module:model/OrderDetailB2BLinesInnerServiceContractInfoSubscriptions
     */
    constructor() { 
        
        OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerServiceContractInfoSubscriptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerServiceContractInfoSubscriptions} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerServiceContractInfoSubscriptions} The populated <code>OrderDetailB2BLinesInnerServiceContractInfoSubscriptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInnerServiceContractInfoSubscriptions();

            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('subscriptionTerm')) {
                obj['subscriptionTerm'] = ApiClient.convertToType(data['subscriptionTerm'], 'String');
            }
            if (data.hasOwnProperty('renewalTerm')) {
                obj['renewalTerm'] = ApiClient.convertToType(data['renewalTerm'], 'String');
            }
            if (data.hasOwnProperty('billingModel')) {
                obj['billingModel'] = ApiClient.convertToType(data['billingModel'], 'String');
            }
            if (data.hasOwnProperty('subcriptionStartDate')) {
                obj['subcriptionStartDate'] = ApiClient.convertToType(data['subcriptionStartDate'], 'String');
            }
            if (data.hasOwnProperty('subcriptionEndDate')) {
                obj['subcriptionEndDate'] = ApiClient.convertToType(data['subcriptionEndDate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerServiceContractInfoSubscriptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerServiceContractInfoSubscriptions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['subscriptionId'] && !(typeof data['subscriptionId'] === 'string' || data['subscriptionId'] instanceof String)) {
            throw new Error("Expected the field `subscriptionId` to be a primitive type in the JSON string but got " + data['subscriptionId']);
        }
        // ensure the json data is a string
        if (data['subscriptionTerm'] && !(typeof data['subscriptionTerm'] === 'string' || data['subscriptionTerm'] instanceof String)) {
            throw new Error("Expected the field `subscriptionTerm` to be a primitive type in the JSON string but got " + data['subscriptionTerm']);
        }
        // ensure the json data is a string
        if (data['renewalTerm'] && !(typeof data['renewalTerm'] === 'string' || data['renewalTerm'] instanceof String)) {
            throw new Error("Expected the field `renewalTerm` to be a primitive type in the JSON string but got " + data['renewalTerm']);
        }
        // ensure the json data is a string
        if (data['billingModel'] && !(typeof data['billingModel'] === 'string' || data['billingModel'] instanceof String)) {
            throw new Error("Expected the field `billingModel` to be a primitive type in the JSON string but got " + data['billingModel']);
        }
        // ensure the json data is a string
        if (data['subcriptionStartDate'] && !(typeof data['subcriptionStartDate'] === 'string' || data['subcriptionStartDate'] instanceof String)) {
            throw new Error("Expected the field `subcriptionStartDate` to be a primitive type in the JSON string but got " + data['subcriptionStartDate']);
        }
        // ensure the json data is a string
        if (data['subcriptionEndDate'] && !(typeof data['subcriptionEndDate'] === 'string' || data['subcriptionEndDate'] instanceof String)) {
            throw new Error("Expected the field `subcriptionEndDate` to be a primitive type in the JSON string but got " + data['subcriptionEndDate']);
        }

        return true;
    }


}



/**
 * The ID of the subscription.
 * @member {String} subscriptionId
 */
OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.prototype['subscriptionId'] = undefined;

/**
 * The term of the subscription.
 * @member {String} subscriptionTerm
 */
OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.prototype['subscriptionTerm'] = undefined;

/**
 * The renewal term of the subscription.
 * @member {String} renewalTerm
 */
OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.prototype['renewalTerm'] = undefined;

/**
 * The billing model of the billing.
 * @member {String} billingModel
 */
OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.prototype['billingModel'] = undefined;

/**
 * Start date of the subcription.
 * @member {String} subcriptionStartDate
 */
OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.prototype['subcriptionStartDate'] = undefined;

/**
 * End date of the subcription.
 * @member {String} subcriptionEndDate
 */
OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.prototype['subcriptionEndDate'] = undefined;






export default OrderDetailB2BLinesInnerServiceContractInfoSubscriptions;

