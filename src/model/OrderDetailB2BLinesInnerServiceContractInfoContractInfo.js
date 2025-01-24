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

/**
 * The OrderDetailB2BLinesInnerServiceContractInfoContractInfo model module.
 * @module model/OrderDetailB2BLinesInnerServiceContractInfoContractInfo
 * @version 1.0.0
 */
class OrderDetailB2BLinesInnerServiceContractInfoContractInfo {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInnerServiceContractInfoContractInfo</code>.
     * @alias module:model/OrderDetailB2BLinesInnerServiceContractInfoContractInfo
     */
    constructor() { 
        
        OrderDetailB2BLinesInnerServiceContractInfoContractInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerServiceContractInfoContractInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerServiceContractInfoContractInfo} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerServiceContractInfoContractInfo} The populated <code>OrderDetailB2BLinesInnerServiceContractInfoContractInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInnerServiceContractInfoContractInfo();

            if (data.hasOwnProperty('contractDescription')) {
                obj['contractDescription'] = ApiClient.convertToType(data['contractDescription'], 'String');
            }
            if (data.hasOwnProperty('contractNumber')) {
                obj['contractNumber'] = ApiClient.convertToType(data['contractNumber'], 'String');
            }
            if (data.hasOwnProperty('contractStatus')) {
                obj['contractStatus'] = ApiClient.convertToType(data['contractStatus'], 'String');
            }
            if (data.hasOwnProperty('contractStartDate')) {
                obj['contractStartDate'] = ApiClient.convertToType(data['contractStartDate'], 'String');
            }
            if (data.hasOwnProperty('contractEndDate')) {
                obj['contractEndDate'] = ApiClient.convertToType(data['contractEndDate'], 'String');
            }
            if (data.hasOwnProperty('contractDuration')) {
                obj['contractDuration'] = ApiClient.convertToType(data['contractDuration'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerServiceContractInfoContractInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerServiceContractInfoContractInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contractDescription'] && !(typeof data['contractDescription'] === 'string' || data['contractDescription'] instanceof String)) {
            throw new Error("Expected the field `contractDescription` to be a primitive type in the JSON string but got " + data['contractDescription']);
        }
        // ensure the json data is a string
        if (data['contractNumber'] && !(typeof data['contractNumber'] === 'string' || data['contractNumber'] instanceof String)) {
            throw new Error("Expected the field `contractNumber` to be a primitive type in the JSON string but got " + data['contractNumber']);
        }
        // ensure the json data is a string
        if (data['contractStatus'] && !(typeof data['contractStatus'] === 'string' || data['contractStatus'] instanceof String)) {
            throw new Error("Expected the field `contractStatus` to be a primitive type in the JSON string but got " + data['contractStatus']);
        }
        // ensure the json data is a string
        if (data['contractStartDate'] && !(typeof data['contractStartDate'] === 'string' || data['contractStartDate'] instanceof String)) {
            throw new Error("Expected the field `contractStartDate` to be a primitive type in the JSON string but got " + data['contractStartDate']);
        }
        // ensure the json data is a string
        if (data['contractEndDate'] && !(typeof data['contractEndDate'] === 'string' || data['contractEndDate'] instanceof String)) {
            throw new Error("Expected the field `contractEndDate` to be a primitive type in the JSON string but got " + data['contractEndDate']);
        }
        // ensure the json data is a string
        if (data['contractDuration'] && !(typeof data['contractDuration'] === 'string' || data['contractDuration'] instanceof String)) {
            throw new Error("Expected the field `contractDuration` to be a primitive type in the JSON string but got " + data['contractDuration']);
        }

        return true;
    }


}



/**
 * The description of the contract.
 * @member {String} contractDescription
 */
OrderDetailB2BLinesInnerServiceContractInfoContractInfo.prototype['contractDescription'] = undefined;

/**
 * Contract number.
 * @member {String} contractNumber
 */
OrderDetailB2BLinesInnerServiceContractInfoContractInfo.prototype['contractNumber'] = undefined;

/**
 * The status of the contract.
 * @member {String} contractStatus
 */
OrderDetailB2BLinesInnerServiceContractInfoContractInfo.prototype['contractStatus'] = undefined;

/**
 * Start date of the contract.
 * @member {String} contractStartDate
 */
OrderDetailB2BLinesInnerServiceContractInfoContractInfo.prototype['contractStartDate'] = undefined;

/**
 * End date of the contract.
 * @member {String} contractEndDate
 */
OrderDetailB2BLinesInnerServiceContractInfoContractInfo.prototype['contractEndDate'] = undefined;

/**
 * The duration of the contract.
 * @member {String} contractDuration
 */
OrderDetailB2BLinesInnerServiceContractInfoContractInfo.prototype['contractDuration'] = undefined;






export default OrderDetailB2BLinesInnerServiceContractInfoContractInfo;

