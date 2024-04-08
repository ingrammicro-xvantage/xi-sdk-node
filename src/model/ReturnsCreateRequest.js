/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
import ReturnsCreateRequestListInner from './ReturnsCreateRequestListInner';

/**
 * The ReturnsCreateRequest model module.
 * @module model/ReturnsCreateRequest
 * @version 1.0.0
 */
class ReturnsCreateRequest {
    /**
     * Constructs a new <code>ReturnsCreateRequest</code>.
     * @alias module:model/ReturnsCreateRequest
     */
    constructor() { 
        
        ReturnsCreateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReturnsCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsCreateRequest} obj Optional instance to populate.
     * @return {module:model/ReturnsCreateRequest} The populated <code>ReturnsCreateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnsCreateRequest();

            if (data.hasOwnProperty('list')) {
                obj['list'] = ApiClient.convertToType(data['list'], [ReturnsCreateRequestListInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReturnsCreateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnsCreateRequest</code>.
     */
    static validateJSON(data) {
        if (data['list']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['list'])) {
                throw new Error("Expected the field `list` to be an array in the JSON data but got " + data['list']);
            }
            // validate the optional field `list` (array)
            for (const item of data['list']) {
                ReturnsCreateRequestListInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ReturnsCreateRequestListInner>} list
 */
ReturnsCreateRequest.prototype['list'] = undefined;






export default ReturnsCreateRequest;

