/**
 * XI SDK Resellers
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
import OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner from './OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner';
import OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner from './OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner';

/**
 * The OrderStatusAsyncNotificationRequestResourceInnerLinesInner model module.
 * @module model/OrderStatusAsyncNotificationRequestResourceInnerLinesInner
 * @version 1.0.0
 */
class OrderStatusAsyncNotificationRequestResourceInnerLinesInner {
    /**
     * Constructs a new <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInner</code>.
     * @alias module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInner
     */
    constructor() { 
        
        OrderStatusAsyncNotificationRequestResourceInnerLinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInner} obj Optional instance to populate.
     * @return {module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInner} The populated <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatusAsyncNotificationRequestResourceInnerLinesInner();

            if (data.hasOwnProperty('LineNumber')) {
                obj['LineNumber'] = ApiClient.convertToType(data['LineNumber'], 'String');
            }
            if (data.hasOwnProperty('subOrderNumber')) {
                obj['subOrderNumber'] = ApiClient.convertToType(data['subOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('lineStatus')) {
                obj['lineStatus'] = ApiClient.convertToType(data['lineStatus'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('requestedQuantity')) {
                obj['requestedQuantity'] = ApiClient.convertToType(data['requestedQuantity'], 'String');
            }
            if (data.hasOwnProperty('shippedQuantity')) {
                obj['shippedQuantity'] = ApiClient.convertToType(data['shippedQuantity'], 'String');
            }
            if (data.hasOwnProperty('backorderedQuantity')) {
                obj['backorderedQuantity'] = ApiClient.convertToType(data['backorderedQuantity'], 'String');
            }
            if (data.hasOwnProperty('shipmentDetails')) {
                obj['shipmentDetails'] = ApiClient.convertToType(data['shipmentDetails'], [OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner]);
            }
            if (data.hasOwnProperty('serialNumberDetails')) {
                obj['serialNumberDetails'] = ApiClient.convertToType(data['serialNumberDetails'], [OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['LineNumber'] && !(typeof data['LineNumber'] === 'string' || data['LineNumber'] instanceof String)) {
            throw new Error("Expected the field `LineNumber` to be a primitive type in the JSON string but got " + data['LineNumber']);
        }
        // ensure the json data is a string
        if (data['subOrderNumber'] && !(typeof data['subOrderNumber'] === 'string' || data['subOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `subOrderNumber` to be a primitive type in the JSON string but got " + data['subOrderNumber']);
        }
        // ensure the json data is a string
        if (data['lineStatus'] && !(typeof data['lineStatus'] === 'string' || data['lineStatus'] instanceof String)) {
            throw new Error("Expected the field `lineStatus` to be a primitive type in the JSON string but got " + data['lineStatus']);
        }
        // ensure the json data is a string
        if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
        }
        // ensure the json data is a string
        if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
        }
        // ensure the json data is a string
        if (data['requestedQuantity'] && !(typeof data['requestedQuantity'] === 'string' || data['requestedQuantity'] instanceof String)) {
            throw new Error("Expected the field `requestedQuantity` to be a primitive type in the JSON string but got " + data['requestedQuantity']);
        }
        // ensure the json data is a string
        if (data['shippedQuantity'] && !(typeof data['shippedQuantity'] === 'string' || data['shippedQuantity'] instanceof String)) {
            throw new Error("Expected the field `shippedQuantity` to be a primitive type in the JSON string but got " + data['shippedQuantity']);
        }
        // ensure the json data is a string
        if (data['backorderedQuantity'] && !(typeof data['backorderedQuantity'] === 'string' || data['backorderedQuantity'] instanceof String)) {
            throw new Error("Expected the field `backorderedQuantity` to be a primitive type in the JSON string but got " + data['backorderedQuantity']);
        }
        if (data['shipmentDetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['shipmentDetails'])) {
                throw new Error("Expected the field `shipmentDetails` to be an array in the JSON data but got " + data['shipmentDetails']);
            }
            // validate the optional field `shipmentDetails` (array)
            for (const item of data['shipmentDetails']) {
                OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner.validateJSON(item);
            };
        }
        if (data['serialNumberDetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['serialNumberDetails'])) {
                throw new Error("Expected the field `serialNumberDetails` to be an array in the JSON data but got " + data['serialNumberDetails']);
            }
            // validate the optional field `serialNumberDetails` (array)
            for (const item of data['serialNumberDetails']) {
                OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The Ingram Micro line number for the product
 * @member {String} LineNumber
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInner.prototype['LineNumber'] = undefined;

/**
 * The sub order number. The two-digit prefix is the warehouse code of the warehouse nearest the reseller. The middle number is the order number. The two-digit suffix is the sub order number.
 * @member {String} subOrderNumber
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInner.prototype['subOrderNumber'] = undefined;

/**
 * The status for the line item in the order. One of: Backordered, Open, Shipped
 * @member {String} lineStatus
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInner.prototype['lineStatus'] = undefined;

/**
 * The Ingram Micro part number for the line item.
 * @member {String} ingramPartNumber
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInner.prototype['ingramPartNumber'] = undefined;

/**
 * The vendor part number for the line item.
 * @member {String} vendorPartNumber
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInner.prototype['vendorPartNumber'] = undefined;

/**
 * The quantity of the line item requested.
 * @member {String} requestedQuantity
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInner.prototype['requestedQuantity'] = undefined;

/**
 * The quantity of the line item that has been shipped.
 * @member {String} shippedQuantity
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInner.prototype['shippedQuantity'] = undefined;

/**
 * The quantity of the line item that is backordered.
 * @member {String} backorderedQuantity
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInner.prototype['backorderedQuantity'] = undefined;

/**
 * @member {Array.<module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner>} shipmentDetails
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInner.prototype['shipmentDetails'] = undefined;

/**
 * @member {Array.<module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner>} serialNumberDetails
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInner.prototype['serialNumberDetails'] = undefined;






export default OrderStatusAsyncNotificationRequestResourceInnerLinesInner;

