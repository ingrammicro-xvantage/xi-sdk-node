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
 * The OrderCreateRequestResellerInfo model module.
 * @module model/OrderCreateRequestResellerInfo
 * @version 6.0
 */
class OrderCreateRequestResellerInfo {
    /**
     * Constructs a new <code>OrderCreateRequestResellerInfo</code>.
     * The address and contact information provided by the reseller.
     * @alias module:model/OrderCreateRequestResellerInfo
     */
    constructor() { 
        
        OrderCreateRequestResellerInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateRequestResellerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateRequestResellerInfo} obj Optional instance to populate.
     * @return {module:model/OrderCreateRequestResellerInfo} The populated <code>OrderCreateRequestResellerInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateRequestResellerInfo();

            if (data.hasOwnProperty('resellerId')) {
                obj['resellerId'] = ApiClient.convertToType(data['resellerId'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
            }
            if (data.hasOwnProperty('addressLine1')) {
                obj['addressLine1'] = ApiClient.convertToType(data['addressLine1'], 'String');
            }
            if (data.hasOwnProperty('addressLine2')) {
                obj['addressLine2'] = ApiClient.convertToType(data['addressLine2'], 'String');
            }
            if (data.hasOwnProperty('addressLine3')) {
                obj['addressLine3'] = ApiClient.convertToType(data['addressLine3'], 'String');
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
     * Validates the JSON data with respect to <code>OrderCreateRequestResellerInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateRequestResellerInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['resellerId'] && !(typeof data['resellerId'] === 'string' || data['resellerId'] instanceof String)) {
            throw new Error("Expected the field `resellerId` to be a primitive type in the JSON string but got " + data['resellerId']);
        }
        // ensure the json data is a string
        if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
            throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
        }
        // ensure the json data is a string
        if (data['contact'] && !(typeof data['contact'] === 'string' || data['contact'] instanceof String)) {
            throw new Error("Expected the field `contact` to be a primitive type in the JSON string but got " + data['contact']);
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
        if (data['addressLine3'] && !(typeof data['addressLine3'] === 'string' || data['addressLine3'] instanceof String)) {
            throw new Error("Expected the field `addressLine3` to be a primitive type in the JSON string but got " + data['addressLine3']);
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
 * The reseller's Id.
 * @member {String} resellerId
 */
OrderCreateRequestResellerInfo.prototype['resellerId'] = undefined;

/**
 * The reseller's company name.
 * @member {String} companyName
 */
OrderCreateRequestResellerInfo.prototype['companyName'] = undefined;

/**
 * The reseller's contact name.
 * @member {String} contact
 */
OrderCreateRequestResellerInfo.prototype['contact'] = undefined;

/**
 * The reseller's street address.
 * @member {String} addressLine1
 */
OrderCreateRequestResellerInfo.prototype['addressLine1'] = undefined;

/**
 * The reseller's building or apartment number.
 * @member {String} addressLine2
 */
OrderCreateRequestResellerInfo.prototype['addressLine2'] = undefined;

/**
 * The reseller's address line 3.
 * @member {String} addressLine3
 */
OrderCreateRequestResellerInfo.prototype['addressLine3'] = undefined;

/**
 * The reseller's city.
 * @member {String} city
 */
OrderCreateRequestResellerInfo.prototype['city'] = undefined;

/**
 * The reseller's state.
 * @member {String} state
 */
OrderCreateRequestResellerInfo.prototype['state'] = undefined;

/**
 * The reseller's zip or postal code.
 * @member {String} postalCode
 */
OrderCreateRequestResellerInfo.prototype['postalCode'] = undefined;

/**
 * The reseller's two-character ISO country code.
 * @member {String} countryCode
 */
OrderCreateRequestResellerInfo.prototype['countryCode'] = undefined;

/**
 * The reseller's phone number.
 * @member {Number} phoneNumber
 */
OrderCreateRequestResellerInfo.prototype['phoneNumber'] = undefined;

/**
 * The reseller's email address.
 * @member {String} email
 */
OrderCreateRequestResellerInfo.prototype['email'] = undefined;






export default OrderCreateRequestResellerInfo;

