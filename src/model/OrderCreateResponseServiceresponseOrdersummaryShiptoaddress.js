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
 * The OrderCreateResponseServiceresponseOrdersummaryShiptoaddress model module.
 * @module model/OrderCreateResponseServiceresponseOrdersummaryShiptoaddress
 * @version 6.0
 */
class OrderCreateResponseServiceresponseOrdersummaryShiptoaddress {
    /**
     * Constructs a new <code>OrderCreateResponseServiceresponseOrdersummaryShiptoaddress</code>.
     * @alias module:model/OrderCreateResponseServiceresponseOrdersummaryShiptoaddress
     */
    constructor() { 
        
        OrderCreateResponseServiceresponseOrdersummaryShiptoaddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateResponseServiceresponseOrdersummaryShiptoaddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseServiceresponseOrdersummaryShiptoaddress} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseServiceresponseOrdersummaryShiptoaddress} The populated <code>OrderCreateResponseServiceresponseOrdersummaryShiptoaddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateResponseServiceresponseOrdersummaryShiptoaddress();

            if (data.hasOwnProperty('attention')) {
                obj['attention'] = ApiClient.convertToType(data['attention'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('addressline1')) {
                obj['addressline1'] = ApiClient.convertToType(data['addressline1'], 'String');
            }
            if (data.hasOwnProperty('addressline2')) {
                obj['addressline2'] = ApiClient.convertToType(data['addressline2'], 'String');
            }
            if (data.hasOwnProperty('addressline3')) {
                obj['addressline3'] = ApiClient.convertToType(data['addressline3'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('postalcode')) {
                obj['postalcode'] = ApiClient.convertToType(data['postalcode'], 'String');
            }
            if (data.hasOwnProperty('countrycode')) {
                obj['countrycode'] = ApiClient.convertToType(data['countrycode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseServiceresponseOrdersummaryShiptoaddress</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseServiceresponseOrdersummaryShiptoaddress</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['attention'] && !(typeof data['attention'] === 'string' || data['attention'] instanceof String)) {
            throw new Error("Expected the field `attention` to be a primitive type in the JSON string but got " + data['attention']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['addressline1'] && !(typeof data['addressline1'] === 'string' || data['addressline1'] instanceof String)) {
            throw new Error("Expected the field `addressline1` to be a primitive type in the JSON string but got " + data['addressline1']);
        }
        // ensure the json data is a string
        if (data['addressline2'] && !(typeof data['addressline2'] === 'string' || data['addressline2'] instanceof String)) {
            throw new Error("Expected the field `addressline2` to be a primitive type in the JSON string but got " + data['addressline2']);
        }
        // ensure the json data is a string
        if (data['addressline3'] && !(typeof data['addressline3'] === 'string' || data['addressline3'] instanceof String)) {
            throw new Error("Expected the field `addressline3` to be a primitive type in the JSON string but got " + data['addressline3']);
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
        if (data['postalcode'] && !(typeof data['postalcode'] === 'string' || data['postalcode'] instanceof String)) {
            throw new Error("Expected the field `postalcode` to be a primitive type in the JSON string but got " + data['postalcode']);
        }
        // ensure the json data is a string
        if (data['countrycode'] && !(typeof data['countrycode'] === 'string' || data['countrycode'] instanceof String)) {
            throw new Error("Expected the field `countrycode` to be a primitive type in the JSON string but got " + data['countrycode']);
        }

        return true;
    }


}



/**
 * @member {String} attention
 */
OrderCreateResponseServiceresponseOrdersummaryShiptoaddress.prototype['attention'] = undefined;

/**
 * @member {String} name
 */
OrderCreateResponseServiceresponseOrdersummaryShiptoaddress.prototype['name'] = undefined;

/**
 * @member {String} addressline1
 */
OrderCreateResponseServiceresponseOrdersummaryShiptoaddress.prototype['addressline1'] = undefined;

/**
 * @member {String} addressline2
 */
OrderCreateResponseServiceresponseOrdersummaryShiptoaddress.prototype['addressline2'] = undefined;

/**
 * @member {String} addressline3
 */
OrderCreateResponseServiceresponseOrdersummaryShiptoaddress.prototype['addressline3'] = undefined;

/**
 * @member {String} city
 */
OrderCreateResponseServiceresponseOrdersummaryShiptoaddress.prototype['city'] = undefined;

/**
 * @member {String} state
 */
OrderCreateResponseServiceresponseOrdersummaryShiptoaddress.prototype['state'] = undefined;

/**
 * @member {String} postalcode
 */
OrderCreateResponseServiceresponseOrdersummaryShiptoaddress.prototype['postalcode'] = undefined;

/**
 * @member {String} countrycode
 */
OrderCreateResponseServiceresponseOrdersummaryShiptoaddress.prototype['countrycode'] = undefined;






export default OrderCreateResponseServiceresponseOrdersummaryShiptoaddress;

