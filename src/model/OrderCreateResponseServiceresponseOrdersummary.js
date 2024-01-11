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
import OrderCreateResponseServiceresponseOrdersummaryShiptoaddress from './OrderCreateResponseServiceresponseOrdersummaryShiptoaddress';

/**
 * The OrderCreateResponseServiceresponseOrdersummary model module.
 * @module model/OrderCreateResponseServiceresponseOrdersummary
 * @version 6.0
 */
class OrderCreateResponseServiceresponseOrdersummary {
    /**
     * Constructs a new <code>OrderCreateResponseServiceresponseOrdersummary</code>.
     * @alias module:model/OrderCreateResponseServiceresponseOrdersummary
     */
    constructor() { 
        
        OrderCreateResponseServiceresponseOrdersummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateResponseServiceresponseOrdersummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseServiceresponseOrdersummary} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseServiceresponseOrdersummary} The populated <code>OrderCreateResponseServiceresponseOrdersummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateResponseServiceresponseOrdersummary();

            if (data.hasOwnProperty('customerponumber')) {
                obj['customerponumber'] = ApiClient.convertToType(data['customerponumber'], 'String');
            }
            if (data.hasOwnProperty('totalorderamount')) {
                obj['totalorderamount'] = ApiClient.convertToType(data['totalorderamount'], 'String');
            }
            if (data.hasOwnProperty('totalordercreated')) {
                obj['totalordercreated'] = ApiClient.convertToType(data['totalordercreated'], 'String');
            }
            if (data.hasOwnProperty('shiptoaddress')) {
                obj['shiptoaddress'] = OrderCreateResponseServiceresponseOrdersummaryShiptoaddress.constructFromObject(data['shiptoaddress']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseServiceresponseOrdersummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseServiceresponseOrdersummary</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customerponumber'] && !(typeof data['customerponumber'] === 'string' || data['customerponumber'] instanceof String)) {
            throw new Error("Expected the field `customerponumber` to be a primitive type in the JSON string but got " + data['customerponumber']);
        }
        // ensure the json data is a string
        if (data['totalorderamount'] && !(typeof data['totalorderamount'] === 'string' || data['totalorderamount'] instanceof String)) {
            throw new Error("Expected the field `totalorderamount` to be a primitive type in the JSON string but got " + data['totalorderamount']);
        }
        // ensure the json data is a string
        if (data['totalordercreated'] && !(typeof data['totalordercreated'] === 'string' || data['totalordercreated'] instanceof String)) {
            throw new Error("Expected the field `totalordercreated` to be a primitive type in the JSON string but got " + data['totalordercreated']);
        }
        // validate the optional field `shiptoaddress`
        if (data['shiptoaddress']) { // data not null
          OrderCreateResponseServiceresponseOrdersummaryShiptoaddress.validateJSON(data['shiptoaddress']);
        }

        return true;
    }


}



/**
 * @member {String} customerponumber
 */
OrderCreateResponseServiceresponseOrdersummary.prototype['customerponumber'] = undefined;

/**
 * Total of all the orders including taxes and fees
 * @member {String} totalorderamount
 */
OrderCreateResponseServiceresponseOrdersummary.prototype['totalorderamount'] = undefined;

/**
 * Number of orders created, in some cases we may create more than one order.
 * @member {String} totalordercreated
 */
OrderCreateResponseServiceresponseOrdersummary.prototype['totalordercreated'] = undefined;

/**
 * @member {module:model/OrderCreateResponseServiceresponseOrdersummaryShiptoaddress} shiptoaddress
 */
OrderCreateResponseServiceresponseOrdersummary.prototype['shiptoaddress'] = undefined;






export default OrderCreateResponseServiceresponseOrdersummary;

