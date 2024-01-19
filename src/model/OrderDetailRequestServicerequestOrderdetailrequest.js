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

/**
 * The OrderDetailRequestServicerequestOrderdetailrequest model module.
 * @module model/OrderDetailRequestServicerequestOrderdetailrequest
 * @version 6.0
 */
class OrderDetailRequestServicerequestOrderdetailrequest {
    /**
     * Constructs a new <code>OrderDetailRequestServicerequestOrderdetailrequest</code>.
     * @alias module:model/OrderDetailRequestServicerequestOrderdetailrequest
     * @param ordernumber {String} Ingram Micro Order Number
     */
    constructor(ordernumber) { 
        
        OrderDetailRequestServicerequestOrderdetailrequest.initialize(this, ordernumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ordernumber) { 
        obj['ordernumber'] = ordernumber;
    }

    /**
     * Constructs a <code>OrderDetailRequestServicerequestOrderdetailrequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailRequestServicerequestOrderdetailrequest} obj Optional instance to populate.
     * @return {module:model/OrderDetailRequestServicerequestOrderdetailrequest} The populated <code>OrderDetailRequestServicerequestOrderdetailrequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailRequestServicerequestOrderdetailrequest();

            if (data.hasOwnProperty('ordernumber')) {
                obj['ordernumber'] = ApiClient.convertToType(data['ordernumber'], 'String');
            }
            if (data.hasOwnProperty('customerponumber')) {
                obj['customerponumber'] = ApiClient.convertToType(data['customerponumber'], 'String');
            }
            if (data.hasOwnProperty('orderdate')) {
                obj['orderdate'] = ApiClient.convertToType(data['orderdate'], 'String');
            }
            if (data.hasOwnProperty('systemid')) {
                obj['systemid'] = ApiClient.convertToType(data['systemid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailRequestServicerequestOrderdetailrequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailRequestServicerequestOrderdetailrequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrderDetailRequestServicerequestOrderdetailrequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ordernumber'] && !(typeof data['ordernumber'] === 'string' || data['ordernumber'] instanceof String)) {
            throw new Error("Expected the field `ordernumber` to be a primitive type in the JSON string but got " + data['ordernumber']);
        }
        // ensure the json data is a string
        if (data['customerponumber'] && !(typeof data['customerponumber'] === 'string' || data['customerponumber'] instanceof String)) {
            throw new Error("Expected the field `customerponumber` to be a primitive type in the JSON string but got " + data['customerponumber']);
        }
        // ensure the json data is a string
        if (data['orderdate'] && !(typeof data['orderdate'] === 'string' || data['orderdate'] instanceof String)) {
            throw new Error("Expected the field `orderdate` to be a primitive type in the JSON string but got " + data['orderdate']);
        }
        // ensure the json data is a string
        if (data['systemid'] && !(typeof data['systemid'] === 'string' || data['systemid'] instanceof String)) {
            throw new Error("Expected the field `systemid` to be a primitive type in the JSON string but got " + data['systemid']);
        }

        return true;
    }


}

OrderDetailRequestServicerequestOrderdetailrequest.RequiredProperties = ["ordernumber"];

/**
 * Ingram Micro Order Number
 * @member {String} ordernumber
 */
OrderDetailRequestServicerequestOrderdetailrequest.prototype['ordernumber'] = undefined;

/**
 * @member {String} customerponumber
 */
OrderDetailRequestServicerequestOrderdetailrequest.prototype['customerponumber'] = undefined;

/**
 * @member {String} orderdate
 */
OrderDetailRequestServicerequestOrderdetailrequest.prototype['orderdate'] = undefined;

/**
 * @member {String} systemid
 */
OrderDetailRequestServicerequestOrderdetailrequest.prototype['systemid'] = undefined;






export default OrderDetailRequestServicerequestOrderdetailrequest;

