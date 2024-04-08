/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
 * The OrderCreateRequestVmf model module.
 * @module model/OrderCreateRequestVmf
 * @version 1.0.0
 */
class OrderCreateRequestVmf {
    /**
     * Constructs a new <code>OrderCreateRequestVmf</code>.
     * Vendor mandatory fields, this is required in case of warranty orders.
     * @alias module:model/OrderCreateRequestVmf
     */
    constructor() { 
        
        OrderCreateRequestVmf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateRequestVmf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateRequestVmf} obj Optional instance to populate.
     * @return {module:model/OrderCreateRequestVmf} The populated <code>OrderCreateRequestVmf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateRequestVmf();

            if (data.hasOwnProperty('vendAuthNumber')) {
                obj['vendAuthNumber'] = ApiClient.convertToType(data['vendAuthNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateRequestVmf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateRequestVmf</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['vendAuthNumber'] && !(typeof data['vendAuthNumber'] === 'string' || data['vendAuthNumber'] instanceof String)) {
            throw new Error("Expected the field `vendAuthNumber` to be a primitive type in the JSON string but got " + data['vendAuthNumber']);
        }

        return true;
    }


}



/**
 * Authorization number provided by vendor to Ingram's reseller. Orders will be placed on hold without this value, vendor specific mandatory field - please reach out Ingram Sales team for list of vendor for whom this is mandatory.
 * @member {String} vendAuthNumber
 */
OrderCreateRequestVmf.prototype['vendAuthNumber'] = undefined;






export default OrderCreateRequestVmf;

