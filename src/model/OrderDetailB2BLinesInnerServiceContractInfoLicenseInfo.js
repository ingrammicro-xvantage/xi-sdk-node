/**
 * XI Sdk Resellers
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

/**
 * The OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo model module.
 * @module model/OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo
 * @version 1.0.0
 */
class OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo</code>.
     * @alias module:model/OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo
     */
    constructor() { 
        
        OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo} The populated <code>OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo();

            if (data.hasOwnProperty('licenseNumber')) {
                obj['licenseNumber'] = ApiClient.convertToType(data['licenseNumber'], ['String']);
            }
            if (data.hasOwnProperty('licenseStartDate')) {
                obj['licenseStartDate'] = ApiClient.convertToType(data['licenseStartDate'], 'String');
            }
            if (data.hasOwnProperty('licenseEndDate')) {
                obj['licenseEndDate'] = ApiClient.convertToType(data['licenseEndDate'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['licenseNumber'])) {
            throw new Error("Expected the field `licenseNumber` to be an array in the JSON data but got " + data['licenseNumber']);
        }
        // ensure the json data is a string
        if (data['licenseStartDate'] && !(typeof data['licenseStartDate'] === 'string' || data['licenseStartDate'] instanceof String)) {
            throw new Error("Expected the field `licenseStartDate` to be a primitive type in the JSON string but got " + data['licenseStartDate']);
        }
        // ensure the json data is a string
        if (data['licenseEndDate'] && !(typeof data['licenseEndDate'] === 'string' || data['licenseEndDate'] instanceof String)) {
            throw new Error("Expected the field `licenseEndDate` to be a primitive type in the JSON string but got " + data['licenseEndDate']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['quantity'] && !(typeof data['quantity'] === 'string' || data['quantity'] instanceof String)) {
            throw new Error("Expected the field `quantity` to be a primitive type in the JSON string but got " + data['quantity']);
        }

        return true;
    }


}



/**
 * License numbers.
 * @member {Array.<String>} licenseNumber
 */
OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo.prototype['licenseNumber'] = undefined;

/**
 * Start Date of the license.
 * @member {String} licenseStartDate
 */
OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo.prototype['licenseStartDate'] = undefined;

/**
 * End Date of the license.
 * @member {String} licenseEndDate
 */
OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo.prototype['licenseEndDate'] = undefined;

/**
 * Description of the license.
 * @member {String} description
 */
OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo.prototype['description'] = undefined;

/**
 * Quantity of the license.
 * @member {String} quantity
 */
OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo.prototype['quantity'] = undefined;






export default OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo;

