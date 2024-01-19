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
import PriceAndAvailabilityRequestServicerequestPriceandstockrequest from './PriceAndAvailabilityRequestServicerequestPriceandstockrequest';
import PriceAndAvailabilityRequestServicerequestRequestpreamble from './PriceAndAvailabilityRequestServicerequestRequestpreamble';

/**
 * The PriceAndAvailabilityRequestServicerequest model module.
 * @module model/PriceAndAvailabilityRequestServicerequest
 * @version 6.0
 */
class PriceAndAvailabilityRequestServicerequest {
    /**
     * Constructs a new <code>PriceAndAvailabilityRequestServicerequest</code>.
     * @alias module:model/PriceAndAvailabilityRequestServicerequest
     */
    constructor() { 
        
        PriceAndAvailabilityRequestServicerequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityRequestServicerequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityRequestServicerequest} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityRequestServicerequest} The populated <code>PriceAndAvailabilityRequestServicerequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityRequestServicerequest();

            if (data.hasOwnProperty('requestpreamble')) {
                obj['requestpreamble'] = PriceAndAvailabilityRequestServicerequestRequestpreamble.constructFromObject(data['requestpreamble']);
            }
            if (data.hasOwnProperty('priceandstockrequest')) {
                obj['priceandstockrequest'] = PriceAndAvailabilityRequestServicerequestPriceandstockrequest.constructFromObject(data['priceandstockrequest']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityRequestServicerequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityRequestServicerequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `requestpreamble`
        if (data['requestpreamble']) { // data not null
          PriceAndAvailabilityRequestServicerequestRequestpreamble.validateJSON(data['requestpreamble']);
        }
        // validate the optional field `priceandstockrequest`
        if (data['priceandstockrequest']) { // data not null
          PriceAndAvailabilityRequestServicerequestPriceandstockrequest.validateJSON(data['priceandstockrequest']);
        }

        return true;
    }


}



/**
 * @member {module:model/PriceAndAvailabilityRequestServicerequestRequestpreamble} requestpreamble
 */
PriceAndAvailabilityRequestServicerequest.prototype['requestpreamble'] = undefined;

/**
 * @member {module:model/PriceAndAvailabilityRequestServicerequestPriceandstockrequest} priceandstockrequest
 */
PriceAndAvailabilityRequestServicerequest.prototype['priceandstockrequest'] = undefined;






export default PriceAndAvailabilityRequestServicerequest;

