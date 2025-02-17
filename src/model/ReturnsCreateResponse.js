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
import ReturnsCreateResponseReturnsClaimsInner from './ReturnsCreateResponseReturnsClaimsInner';

/**
 * The ReturnsCreateResponse model module.
 * @module model/ReturnsCreateResponse
 * @version 1.0.0
 */
class ReturnsCreateResponse {
    /**
     * Constructs a new <code>ReturnsCreateResponse</code>.
     * @alias module:model/ReturnsCreateResponse
     */
    constructor() { 
        
        ReturnsCreateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReturnsCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsCreateResponse} obj Optional instance to populate.
     * @return {module:model/ReturnsCreateResponse} The populated <code>ReturnsCreateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnsCreateResponse();

            if (data.hasOwnProperty('returnsClaims')) {
                obj['returnsClaims'] = ApiClient.convertToType(data['returnsClaims'], [ReturnsCreateResponseReturnsClaimsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReturnsCreateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnsCreateResponse</code>.
     */
    static validateJSON(data) {
        if (data['returnsClaims']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['returnsClaims'])) {
                throw new Error("Expected the field `returnsClaims` to be an array in the JSON data but got " + data['returnsClaims']);
            }
            // validate the optional field `returnsClaims` (array)
            for (const item of data['returnsClaims']) {
                ReturnsCreateResponseReturnsClaimsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ReturnsCreateResponseReturnsClaimsInner>} returnsClaims
 */
ReturnsCreateResponse.prototype['returnsClaims'] = undefined;






export default ReturnsCreateResponse;

