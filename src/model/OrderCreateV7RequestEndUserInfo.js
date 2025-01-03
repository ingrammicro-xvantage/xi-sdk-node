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

/**
 * The OrderCreateV7RequestEndUserInfo model module.
 * @module model/OrderCreateV7RequestEndUserInfo
 * @version 1.0.0
 */
class OrderCreateV7RequestEndUserInfo {
    /**
     * Constructs a new <code>OrderCreateV7RequestEndUserInfo</code>.
     * The contact information for the end user/customer provided by the reseller. Used to determine pricing and discounts
     * @alias module:model/OrderCreateV7RequestEndUserInfo
     */
    constructor() { 
        
        OrderCreateV7RequestEndUserInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateV7RequestEndUserInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateV7RequestEndUserInfo} obj Optional instance to populate.
     * @return {module:model/OrderCreateV7RequestEndUserInfo} The populated <code>OrderCreateV7RequestEndUserInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateV7RequestEndUserInfo();

            if (data.hasOwnProperty('endUserId')) {
                obj['endUserId'] = ApiClient.convertToType(data['endUserId'], 'String');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('addressLine1')) {
                obj['addressLine1'] = ApiClient.convertToType(data['addressLine1'], 'String');
            }
            if (data.hasOwnProperty('addressLine2')) {
                obj['addressLine2'] = ApiClient.convertToType(data['addressLine2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateV7RequestEndUserInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateV7RequestEndUserInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['endUserId'] && !(typeof data['endUserId'] === 'string' || data['endUserId'] instanceof String)) {
            throw new Error("Expected the field `endUserId` to be a primitive type in the JSON string but got " + data['endUserId']);
        }
        // ensure the json data is a string
        if (data['contact'] && !(typeof data['contact'] === 'string' || data['contact'] instanceof String)) {
            throw new Error("Expected the field `contact` to be a primitive type in the JSON string but got " + data['contact']);
        }
        // ensure the json data is a string
        if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
            throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
        }
        // ensure the json data is a string
        if (data['addressLine1'] && !(typeof data['addressLine1'] === 'string' || data['addressLine1'] instanceof String)) {
            throw new Error("Expected the field `addressLine1` to be a primitive type in the JSON string but got " + data['addressLine1']);
        }
        // ensure the json data is a string
        if (data['addressLine2'] && !(typeof data['addressLine2'] === 'string' || data['addressLine2'] instanceof String)) {
            throw new Error("Expected the field `addressLine2` to be a primitive type in the JSON string but got " + data['addressLine2']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['postalCode'] && !(typeof data['postalCode'] === 'string' || data['postalCode'] instanceof String)) {
            throw new Error("Expected the field `postalCode` to be a primitive type in the JSON string but got " + data['postalCode']);
        }
        // ensure the json data is a string
        if (data['countryCode'] && !(typeof data['countryCode'] === 'string' || data['countryCode'] instanceof String)) {
            throw new Error("Expected the field `countryCode` to be a primitive type in the JSON string but got " + data['countryCode']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }


}



/**
 * ID for the end user/customer in Ingram Micro's system.
 * @member {String} endUserId
 */
OrderCreateV7RequestEndUserInfo.prototype['endUserId'] = undefined;

/**
 * The contact name for the end user/customer.
 * @member {String} contact
 */
OrderCreateV7RequestEndUserInfo.prototype['contact'] = undefined;

/**
 * The company name for the end user/customer. Required for Impulse countries.
 * @member {String} companyName
 */
OrderCreateV7RequestEndUserInfo.prototype['companyName'] = undefined;

/**
 * The end user/customer's street address and building or house number. Required for Impulse countries.
 * @member {String} addressLine1
 */
OrderCreateV7RequestEndUserInfo.prototype['addressLine1'] = undefined;

/**
 * The end user/customer's apartment number.
 * @member {String} addressLine2
 */
OrderCreateV7RequestEndUserInfo.prototype['addressLine2'] = undefined;

/**
 * The end user/customer's city. Required for Impulse countries.
 * @member {String} city
 */
OrderCreateV7RequestEndUserInfo.prototype['city'] = undefined;

/**
 * The end user/customer's state. Required for Impulse countries but optional for EMEA countries.
 * @member {String} state
 */
OrderCreateV7RequestEndUserInfo.prototype['state'] = undefined;

/**
 * The end user/customer's zip or postal code. Required for Impulse countries.
 * @member {String} postalCode
 */
OrderCreateV7RequestEndUserInfo.prototype['postalCode'] = undefined;

/**
 * The end user/customer's two-character ISO country code.
 * @member {String} countryCode
 */
OrderCreateV7RequestEndUserInfo.prototype['countryCode'] = undefined;

/**
 * The end user/customer's phone number.
 * @member {Number} phoneNumber
 */
OrderCreateV7RequestEndUserInfo.prototype['phoneNumber'] = undefined;

/**
 * The end user/customer's email.
 * @member {String} email
 */
OrderCreateV7RequestEndUserInfo.prototype['email'] = undefined;






export default OrderCreateV7RequestEndUserInfo;

