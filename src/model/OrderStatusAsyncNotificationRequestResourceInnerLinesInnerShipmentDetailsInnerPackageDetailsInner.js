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
 * The OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner model module.
 * @module model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner
 * @version 1.0.0
 */
class OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner {
    /**
     * Constructs a new <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner</code>.
     * @alias module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner
     */
    constructor() { 
        
        OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner} obj Optional instance to populate.
     * @return {module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner} The populated <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner();

            if (data.hasOwnProperty('cartonNumber')) {
                obj['cartonNumber'] = ApiClient.convertToType(data['cartonNumber'], 'String');
            }
            if (data.hasOwnProperty('quantityInbox')) {
                obj['quantityInbox'] = ApiClient.convertToType(data['quantityInbox'], 'String');
            }
            if (data.hasOwnProperty('trackingNumber')) {
                obj['trackingNumber'] = ApiClient.convertToType(data['trackingNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cartonNumber'] && !(typeof data['cartonNumber'] === 'string' || data['cartonNumber'] instanceof String)) {
            throw new Error("Expected the field `cartonNumber` to be a primitive type in the JSON string but got " + data['cartonNumber']);
        }
        // ensure the json data is a string
        if (data['quantityInbox'] && !(typeof data['quantityInbox'] === 'string' || data['quantityInbox'] instanceof String)) {
            throw new Error("Expected the field `quantityInbox` to be a primitive type in the JSON string but got " + data['quantityInbox']);
        }
        // ensure the json data is a string
        if (data['trackingNumber'] && !(typeof data['trackingNumber'] === 'string' || data['trackingNumber'] instanceof String)) {
            throw new Error("Expected the field `trackingNumber` to be a primitive type in the JSON string but got " + data['trackingNumber']);
        }

        return true;
    }


}



/**
 * The shipment carton number that contains the line item.
 * @member {String} cartonNumber
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner.prototype['cartonNumber'] = undefined;

/**
 * The quantity of line items in the box.
 * @member {String} quantityInbox
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner.prototype['quantityInbox'] = undefined;

/**
 * The tracking number for the shipment containing the line item.
 * @member {String} trackingNumber
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner.prototype['trackingNumber'] = undefined;






export default OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner;

