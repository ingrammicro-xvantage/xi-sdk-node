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
import InvoiceDetailRequestServicerequestRequestpreamble from './InvoiceDetailRequestServicerequestRequestpreamble';
import OrderDetailRequestServicerequestOrderdetailrequest from './OrderDetailRequestServicerequestOrderdetailrequest';

/**
 * The OrderDetailRequestServicerequest model module.
 * @module model/OrderDetailRequestServicerequest
 * @version 6.0
 */
class OrderDetailRequestServicerequest {
    /**
     * Constructs a new <code>OrderDetailRequestServicerequest</code>.
     * @alias module:model/OrderDetailRequestServicerequest
     * @param requestpreamble {module:model/InvoiceDetailRequestServicerequestRequestpreamble} 
     */
    constructor(requestpreamble) { 
        
        OrderDetailRequestServicerequest.initialize(this, requestpreamble);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requestpreamble) { 
        obj['requestpreamble'] = requestpreamble;
    }

    /**
     * Constructs a <code>OrderDetailRequestServicerequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailRequestServicerequest} obj Optional instance to populate.
     * @return {module:model/OrderDetailRequestServicerequest} The populated <code>OrderDetailRequestServicerequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailRequestServicerequest();

            if (data.hasOwnProperty('requestpreamble')) {
                obj['requestpreamble'] = InvoiceDetailRequestServicerequestRequestpreamble.constructFromObject(data['requestpreamble']);
            }
            if (data.hasOwnProperty('orderdetailrequest')) {
                obj['orderdetailrequest'] = OrderDetailRequestServicerequestOrderdetailrequest.constructFromObject(data['orderdetailrequest']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailRequestServicerequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailRequestServicerequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrderDetailRequestServicerequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `requestpreamble`
        if (data['requestpreamble']) { // data not null
          InvoiceDetailRequestServicerequestRequestpreamble.validateJSON(data['requestpreamble']);
        }
        // validate the optional field `orderdetailrequest`
        if (data['orderdetailrequest']) { // data not null
          OrderDetailRequestServicerequestOrderdetailrequest.validateJSON(data['orderdetailrequest']);
        }

        return true;
    }


}

OrderDetailRequestServicerequest.RequiredProperties = ["requestpreamble"];

/**
 * @member {module:model/InvoiceDetailRequestServicerequestRequestpreamble} requestpreamble
 */
OrderDetailRequestServicerequest.prototype['requestpreamble'] = undefined;

/**
 * @member {module:model/OrderDetailRequestServicerequestOrderdetailrequest} orderdetailrequest
 */
OrderDetailRequestServicerequest.prototype['orderdetailrequest'] = undefined;






export default OrderDetailRequestServicerequest;

