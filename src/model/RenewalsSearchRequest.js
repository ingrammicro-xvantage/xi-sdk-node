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
import RenewalsSearchRequestDataType from './RenewalsSearchRequestDataType';
import RenewalsSearchRequestStatus from './RenewalsSearchRequestStatus';

/**
 * The RenewalsSearchRequest model module.
 * @module model/RenewalsSearchRequest
 * @version 1.0.0
 */
class RenewalsSearchRequest {
    /**
     * Constructs a new <code>RenewalsSearchRequest</code>.
     * @alias module:model/RenewalsSearchRequest
     */
    constructor() { 
        
        RenewalsSearchRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenewalsSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewalsSearchRequest} obj Optional instance to populate.
     * @return {module:model/RenewalsSearchRequest} The populated <code>RenewalsSearchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenewalsSearchRequest();

            if (data.hasOwnProperty('status')) {
                obj['status'] = RenewalsSearchRequestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('dataType')) {
                obj['dataType'] = RenewalsSearchRequestDataType.constructFromObject(data['dataType']);
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('endUser')) {
                obj['endUser'] = ApiClient.convertToType(data['endUser'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RenewalsSearchRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RenewalsSearchRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `status`
        if (data['status']) { // data not null
          RenewalsSearchRequestStatus.validateJSON(data['status']);
        }
        // validate the optional field `dataType`
        if (data['dataType']) { // data not null
          RenewalsSearchRequestDataType.validateJSON(data['dataType']);
        }
        // ensure the json data is a string
        if (data['vendor'] && !(typeof data['vendor'] === 'string' || data['vendor'] instanceof String)) {
            throw new Error("Expected the field `vendor` to be a primitive type in the JSON string but got " + data['vendor']);
        }
        // ensure the json data is a string
        if (data['endUser'] && !(typeof data['endUser'] === 'string' || data['endUser'] instanceof String)) {
            throw new Error("Expected the field `endUser` to be a primitive type in the JSON string but got " + data['endUser']);
        }

        return true;
    }


}



/**
 * @member {module:model/RenewalsSearchRequestStatus} status
 */
RenewalsSearchRequest.prototype['status'] = undefined;

/**
 * @member {module:model/RenewalsSearchRequestDataType} dataType
 */
RenewalsSearchRequest.prototype['dataType'] = undefined;

/**
 * The name of the Vendor.
 * @member {String} vendor
 */
RenewalsSearchRequest.prototype['vendor'] = undefined;

/**
 * The name of the enduser. 
 * @member {String} endUser
 */
RenewalsSearchRequest.prototype['endUser'] = undefined;






export default RenewalsSearchRequest;

