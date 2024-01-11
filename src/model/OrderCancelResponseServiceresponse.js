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
import OrderCancelResponseServiceresponseResponsepreamble from './OrderCancelResponseServiceresponseResponsepreamble';

/**
 * The OrderCancelResponseServiceresponse model module.
 * @module model/OrderCancelResponseServiceresponse
 * @version 6.0
 */
class OrderCancelResponseServiceresponse {
    /**
     * Constructs a new <code>OrderCancelResponseServiceresponse</code>.
     * @alias module:model/OrderCancelResponseServiceresponse
     */
    constructor() { 
        
        OrderCancelResponseServiceresponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCancelResponseServiceresponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCancelResponseServiceresponse} obj Optional instance to populate.
     * @return {module:model/OrderCancelResponseServiceresponse} The populated <code>OrderCancelResponseServiceresponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCancelResponseServiceresponse();

            if (data.hasOwnProperty('responsepreamble')) {
                obj['responsepreamble'] = OrderCancelResponseServiceresponseResponsepreamble.constructFromObject(data['responsepreamble']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCancelResponseServiceresponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCancelResponseServiceresponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `responsepreamble`
        if (data['responsepreamble']) { // data not null
          OrderCancelResponseServiceresponseResponsepreamble.validateJSON(data['responsepreamble']);
        }

        return true;
    }


}



/**
 * @member {module:model/OrderCancelResponseServiceresponseResponsepreamble} responsepreamble
 */
OrderCancelResponseServiceresponse.prototype['responsepreamble'] = undefined;






export default OrderCancelResponseServiceresponse;

