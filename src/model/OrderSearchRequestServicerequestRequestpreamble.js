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

/**
 * The OrderSearchRequestServicerequestRequestpreamble model module.
 * @module model/OrderSearchRequestServicerequestRequestpreamble
 * @version 1.0.0
 */
class OrderSearchRequestServicerequestRequestpreamble {
    /**
     * Constructs a new <code>OrderSearchRequestServicerequestRequestpreamble</code>.
     * @alias module:model/OrderSearchRequestServicerequestRequestpreamble
     * @param isoCountryCode {String} 
     * @param customerNumber {String} 
     */
    constructor(isoCountryCode, customerNumber) { 
        
        OrderSearchRequestServicerequestRequestpreamble.initialize(this, isoCountryCode, customerNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isoCountryCode, customerNumber) { 
        obj['isoCountryCode'] = isoCountryCode;
        obj['customerNumber'] = customerNumber;
    }

    /**
     * Constructs a <code>OrderSearchRequestServicerequestRequestpreamble</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderSearchRequestServicerequestRequestpreamble} obj Optional instance to populate.
     * @return {module:model/OrderSearchRequestServicerequestRequestpreamble} The populated <code>OrderSearchRequestServicerequestRequestpreamble</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchRequestServicerequestRequestpreamble();

            if (data.hasOwnProperty('isoCountryCode')) {
                obj['isoCountryCode'] = ApiClient.convertToType(data['isoCountryCode'], 'String');
            }
            if (data.hasOwnProperty('customerNumber')) {
                obj['customerNumber'] = ApiClient.convertToType(data['customerNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderSearchRequestServicerequestRequestpreamble</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderSearchRequestServicerequestRequestpreamble</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrderSearchRequestServicerequestRequestpreamble.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['isoCountryCode'] && !(typeof data['isoCountryCode'] === 'string' || data['isoCountryCode'] instanceof String)) {
            throw new Error("Expected the field `isoCountryCode` to be a primitive type in the JSON string but got " + data['isoCountryCode']);
        }
        // ensure the json data is a string
        if (data['customerNumber'] && !(typeof data['customerNumber'] === 'string' || data['customerNumber'] instanceof String)) {
            throw new Error("Expected the field `customerNumber` to be a primitive type in the JSON string but got " + data['customerNumber']);
        }

        return true;
    }


}

OrderSearchRequestServicerequestRequestpreamble.RequiredProperties = ["isoCountryCode", "customerNumber"];

/**
 * @member {String} isoCountryCode
 */
OrderSearchRequestServicerequestRequestpreamble.prototype['isoCountryCode'] = undefined;

/**
 * @member {String} customerNumber
 */
OrderSearchRequestServicerequestRequestpreamble.prototype['customerNumber'] = undefined;






export default OrderSearchRequestServicerequestRequestpreamble;

