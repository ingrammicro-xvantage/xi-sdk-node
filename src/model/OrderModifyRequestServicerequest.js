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
import OrderModifyRequestServicerequestOrdermodifyrequest from './OrderModifyRequestServicerequestOrdermodifyrequest';
import OrderModifyRequestServicerequestRequestpreamble from './OrderModifyRequestServicerequestRequestpreamble';

/**
 * The OrderModifyRequestServicerequest model module.
 * @module model/OrderModifyRequestServicerequest
 * @version 1.0.0
 */
class OrderModifyRequestServicerequest {
    /**
     * Constructs a new <code>OrderModifyRequestServicerequest</code>.
     * @alias module:model/OrderModifyRequestServicerequest
     */
    constructor() { 
        
        OrderModifyRequestServicerequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderModifyRequestServicerequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModifyRequestServicerequest} obj Optional instance to populate.
     * @return {module:model/OrderModifyRequestServicerequest} The populated <code>OrderModifyRequestServicerequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderModifyRequestServicerequest();

            if (data.hasOwnProperty('requestpreamble')) {
                obj['requestpreamble'] = OrderModifyRequestServicerequestRequestpreamble.constructFromObject(data['requestpreamble']);
            }
            if (data.hasOwnProperty('ordermodifyrequest')) {
                obj['ordermodifyrequest'] = OrderModifyRequestServicerequestOrdermodifyrequest.constructFromObject(data['ordermodifyrequest']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderModifyRequestServicerequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModifyRequestServicerequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `requestpreamble`
        if (data['requestpreamble']) { // data not null
          OrderModifyRequestServicerequestRequestpreamble.validateJSON(data['requestpreamble']);
        }
        // validate the optional field `ordermodifyrequest`
        if (data['ordermodifyrequest']) { // data not null
          OrderModifyRequestServicerequestOrdermodifyrequest.validateJSON(data['ordermodifyrequest']);
        }

        return true;
    }


}



/**
 * @member {module:model/OrderModifyRequestServicerequestRequestpreamble} requestpreamble
 */
OrderModifyRequestServicerequest.prototype['requestpreamble'] = undefined;

/**
 * @member {module:model/OrderModifyRequestServicerequestOrdermodifyrequest} ordermodifyrequest
 */
OrderModifyRequestServicerequest.prototype['ordermodifyrequest'] = undefined;






export default OrderModifyRequestServicerequest;

