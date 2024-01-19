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
import OrderDetailB2BLinesInnerServiceContractInfoContractInfo from './OrderDetailB2BLinesInnerServiceContractInfoContractInfo';
import OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo from './OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo';
import OrderDetailB2BLinesInnerServiceContractInfoSubscriptions from './OrderDetailB2BLinesInnerServiceContractInfoSubscriptions';

/**
 * The OrderDetailB2BLinesInnerServiceContractInfo model module.
 * @module model/OrderDetailB2BLinesInnerServiceContractInfo
 * @version 6.0
 */
class OrderDetailB2BLinesInnerServiceContractInfo {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInnerServiceContractInfo</code>.
     * @alias module:model/OrderDetailB2BLinesInnerServiceContractInfo
     */
    constructor() { 
        
        OrderDetailB2BLinesInnerServiceContractInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerServiceContractInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerServiceContractInfo} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerServiceContractInfo} The populated <code>OrderDetailB2BLinesInnerServiceContractInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInnerServiceContractInfo();

            if (data.hasOwnProperty('contractInfo')) {
                obj['contractInfo'] = OrderDetailB2BLinesInnerServiceContractInfoContractInfo.constructFromObject(data['contractInfo']);
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.constructFromObject(data['subscriptions']);
            }
            if (data.hasOwnProperty('licenseInfo')) {
                obj['licenseInfo'] = OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo.constructFromObject(data['licenseInfo']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerServiceContractInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerServiceContractInfo</code>.
     */
    static validateJSON(data) {
        // validate the optional field `contractInfo`
        if (data['contractInfo']) { // data not null
          OrderDetailB2BLinesInnerServiceContractInfoContractInfo.validateJSON(data['contractInfo']);
        }
        // validate the optional field `subscriptions`
        if (data['subscriptions']) { // data not null
          OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.validateJSON(data['subscriptions']);
        }
        // validate the optional field `licenseInfo`
        if (data['licenseInfo']) { // data not null
          OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo.validateJSON(data['licenseInfo']);
        }

        return true;
    }


}



/**
 * @member {module:model/OrderDetailB2BLinesInnerServiceContractInfoContractInfo} contractInfo
 */
OrderDetailB2BLinesInnerServiceContractInfo.prototype['contractInfo'] = undefined;

/**
 * @member {module:model/OrderDetailB2BLinesInnerServiceContractInfoSubscriptions} subscriptions
 */
OrderDetailB2BLinesInnerServiceContractInfo.prototype['subscriptions'] = undefined;

/**
 * @member {module:model/OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo} licenseInfo
 */
OrderDetailB2BLinesInnerServiceContractInfo.prototype['licenseInfo'] = undefined;






export default OrderDetailB2BLinesInnerServiceContractInfo;

