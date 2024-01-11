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
import PriceAndAvailabilityRequestServicerequest from './PriceAndAvailabilityRequestServicerequest';

/**
 * The PriceAndAvailabilityRequest model module.
 * @module model/PriceAndAvailabilityRequest
 * @version 6.0
 */
class PriceAndAvailabilityRequest {
    /**
     * Constructs a new <code>PriceAndAvailabilityRequest</code>.
     * Request object model for the multi sku price and stock API endpoint
     * @alias module:model/PriceAndAvailabilityRequest
     */
    constructor() { 
        
        PriceAndAvailabilityRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityRequest} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityRequest} The populated <code>PriceAndAvailabilityRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityRequest();

            if (data.hasOwnProperty('servicerequest')) {
                obj['servicerequest'] = PriceAndAvailabilityRequestServicerequest.constructFromObject(data['servicerequest']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `servicerequest`
        if (data['servicerequest']) { // data not null
          PriceAndAvailabilityRequestServicerequest.validateJSON(data['servicerequest']);
        }

        return true;
    }


}



/**
 * @member {module:model/PriceAndAvailabilityRequestServicerequest} servicerequest
 */
PriceAndAvailabilityRequest.prototype['servicerequest'] = undefined;






export default PriceAndAvailabilityRequest;

