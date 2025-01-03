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
 * The OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner model module.
 * @module model/OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner
 * @version 1.0.0
 */
class OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner {
    /**
     * Constructs a new <code>OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner</code>.
     * Serial information of the hardware to be associated with the warranty, applicable on post sale orders.
     * @alias module:model/OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner
     */
    constructor() { 
        
        OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner} The populated <code>OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner();

            if (data.hasOwnProperty('dateOfPurchase')) {
                obj['dateOfPurchase'] = ApiClient.convertToType(data['dateOfPurchase'], 'String');
            }
            if (data.hasOwnProperty('shipDate')) {
                obj['shipDate'] = ApiClient.convertToType(data['shipDate'], 'String');
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
     * Validates the JSON data with respect to <code>OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dateOfPurchase'] && !(typeof data['dateOfPurchase'] === 'string' || data['dateOfPurchase'] instanceof String)) {
            throw new Error("Expected the field `dateOfPurchase` to be a primitive type in the JSON string but got " + data['dateOfPurchase']);
        }
        // ensure the json data is a string
        if (data['shipDate'] && !(typeof data['shipDate'] === 'string' || data['shipDate'] instanceof String)) {
            throw new Error("Expected the field `shipDate` to be a primitive type in the JSON string but got " + data['shipDate']);
        }
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
 * @member {String} dateOfPurchase
 */
OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner.prototype['dateOfPurchase'] = undefined;

/**
 * Vendor specific mandatory field, date of hardware/product shipment from vendor.
 * @member {String} shipDate
 */
OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner.prototype['shipDate'] = undefined;

/**
 * Serial number of the hardware/product.
 * @member {String} primarySerialNumber
 */
OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner.prototype['primarySerialNumber'] = undefined;

/**
 * Serial number of accessory associated with the above hardware/product.
 * @member {String} secondarySerialNumber
 */
OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner.prototype['secondarySerialNumber'] = undefined;






export default OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner;

