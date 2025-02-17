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
 * The OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner model module.
 * @module model/OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner
 * @version 1.0.0
 */
class OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner {
    /**
     * Constructs a new <code>OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner</code>.
     * @alias module:model/OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner
     */
    constructor() { 
        
        OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner} The populated <code>OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner();

            if (data.hasOwnProperty('dateofPurchase')) {
                obj['dateofPurchase'] = ApiClient.convertToType(data['dateofPurchase'], 'Date');
            }
            if (data.hasOwnProperty('shipDate')) {
                obj['shipDate'] = ApiClient.convertToType(data['shipDate'], 'Date');
            }
            if (data.hasOwnProperty('primarySerialNumber')) {
                obj['primarySerialNumber'] = ApiClient.convertToType(data['primarySerialNumber'], 'String');
            }
            if (data.hasOwnProperty('secondarySerialNumber')) {
                obj['secondarySerialNumber'] = ApiClient.convertToType(data['secondarySerialNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['primarySerialNumber'] && !(typeof data['primarySerialNumber'] === 'string' || data['primarySerialNumber'] instanceof String)) {
            throw new Error("Expected the field `primarySerialNumber` to be a primitive type in the JSON string but got " + data['primarySerialNumber']);
        }
        // ensure the json data is a string
        if (data['secondarySerialNumber'] && !(typeof data['secondarySerialNumber'] === 'string' || data['secondarySerialNumber'] instanceof String)) {
            throw new Error("Expected the field `secondarySerialNumber` to be a primitive type in the JSON string but got " + data['secondarySerialNumber']);
        }

        return true;
    }


}



/**
 * Date of purchase of the hardware.
 * @member {Date} dateofPurchase
 */
OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner.prototype['dateofPurchase'] = undefined;

/**
 * Vendor specific mandatory field, date of hardware/product shipment from vendor.
 * @member {Date} shipDate
 */
OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner.prototype['shipDate'] = undefined;

/**
 * Serial number of the hardware/product.
 * @member {String} primarySerialNumber
 */
OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner.prototype['primarySerialNumber'] = undefined;

/**
 * Serial number of accessory associated with the above hardware/product.
 * @member {String} secondarySerialNumber
 */
OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner.prototype['secondarySerialNumber'] = undefined;






export default OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner;

