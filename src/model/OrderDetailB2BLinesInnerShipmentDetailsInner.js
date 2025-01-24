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
import OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner from './OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner';

/**
 * The OrderDetailB2BLinesInnerShipmentDetailsInner model module.
 * @module model/OrderDetailB2BLinesInnerShipmentDetailsInner
 * @version 1.0.0
 */
class OrderDetailB2BLinesInnerShipmentDetailsInner {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInnerShipmentDetailsInner</code>.
     * @alias module:model/OrderDetailB2BLinesInnerShipmentDetailsInner
     */
    constructor() { 
        
        OrderDetailB2BLinesInnerShipmentDetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerShipmentDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerShipmentDetailsInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerShipmentDetailsInner} The populated <code>OrderDetailB2BLinesInnerShipmentDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInnerShipmentDetailsInner();

            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('deliveryNumber')) {
                obj['deliveryNumber'] = ApiClient.convertToType(data['deliveryNumber'], 'String');
            }
            if (data.hasOwnProperty('estimatedShipDate')) {
                obj['estimatedShipDate'] = ApiClient.convertToType(data['estimatedShipDate'], 'String');
            }
            if (data.hasOwnProperty('shippedDate')) {
                obj['shippedDate'] = ApiClient.convertToType(data['shippedDate'], 'String');
            }
            if (data.hasOwnProperty('estimatedDeliveryDate')) {
                obj['estimatedDeliveryDate'] = ApiClient.convertToType(data['estimatedDeliveryDate'], 'String');
            }
            if (data.hasOwnProperty('shipFromWarehouseId')) {
                obj['shipFromWarehouseId'] = ApiClient.convertToType(data['shipFromWarehouseId'], 'String');
            }
            if (data.hasOwnProperty('shipFromLocation')) {
                obj['shipFromLocation'] = ApiClient.convertToType(data['shipFromLocation'], 'String');
            }
            if (data.hasOwnProperty('invoiceNumber')) {
                obj['invoiceNumber'] = ApiClient.convertToType(data['invoiceNumber'], 'String');
            }
            if (data.hasOwnProperty('invoiceDate')) {
                obj['invoiceDate'] = ApiClient.convertToType(data['invoiceDate'], 'String');
            }
            if (data.hasOwnProperty('carrierDetails')) {
                obj['carrierDetails'] = ApiClient.convertToType(data['carrierDetails'], [OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerShipmentDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerShipmentDetailsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['deliveryNumber'] && !(typeof data['deliveryNumber'] === 'string' || data['deliveryNumber'] instanceof String)) {
            throw new Error("Expected the field `deliveryNumber` to be a primitive type in the JSON string but got " + data['deliveryNumber']);
        }
        // ensure the json data is a string
        if (data['estimatedShipDate'] && !(typeof data['estimatedShipDate'] === 'string' || data['estimatedShipDate'] instanceof String)) {
            throw new Error("Expected the field `estimatedShipDate` to be a primitive type in the JSON string but got " + data['estimatedShipDate']);
        }
        // ensure the json data is a string
        if (data['shippedDate'] && !(typeof data['shippedDate'] === 'string' || data['shippedDate'] instanceof String)) {
            throw new Error("Expected the field `shippedDate` to be a primitive type in the JSON string but got " + data['shippedDate']);
        }
        // ensure the json data is a string
        if (data['estimatedDeliveryDate'] && !(typeof data['estimatedDeliveryDate'] === 'string' || data['estimatedDeliveryDate'] instanceof String)) {
            throw new Error("Expected the field `estimatedDeliveryDate` to be a primitive type in the JSON string but got " + data['estimatedDeliveryDate']);
        }
        // ensure the json data is a string
        if (data['shipFromWarehouseId'] && !(typeof data['shipFromWarehouseId'] === 'string' || data['shipFromWarehouseId'] instanceof String)) {
            throw new Error("Expected the field `shipFromWarehouseId` to be a primitive type in the JSON string but got " + data['shipFromWarehouseId']);
        }
        // ensure the json data is a string
        if (data['shipFromLocation'] && !(typeof data['shipFromLocation'] === 'string' || data['shipFromLocation'] instanceof String)) {
            throw new Error("Expected the field `shipFromLocation` to be a primitive type in the JSON string but got " + data['shipFromLocation']);
        }
        // ensure the json data is a string
        if (data['invoiceNumber'] && !(typeof data['invoiceNumber'] === 'string' || data['invoiceNumber'] instanceof String)) {
            throw new Error("Expected the field `invoiceNumber` to be a primitive type in the JSON string but got " + data['invoiceNumber']);
        }
        // ensure the json data is a string
        if (data['invoiceDate'] && !(typeof data['invoiceDate'] === 'string' || data['invoiceDate'] instanceof String)) {
            throw new Error("Expected the field `invoiceDate` to be a primitive type in the JSON string but got " + data['invoiceDate']);
        }
        if (data['carrierDetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['carrierDetails'])) {
                throw new Error("Expected the field `carrierDetails` to be an array in the JSON data but got " + data['carrierDetails']);
            }
            // validate the optional field `carrierDetails` (array)
            for (const item of data['carrierDetails']) {
                OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The quantity shipped of the line item.
 * @member {Number} quantity
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['quantity'] = undefined;

/**
 * The actual date of delivery of the line item.
 * @member {String} deliveryNumber
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['deliveryNumber'] = undefined;

/**
 * The date the line item is expected to be shipped.
 * @member {String} estimatedShipDate
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['estimatedShipDate'] = undefined;

/**
 * @member {String} shippedDate
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['shippedDate'] = undefined;

/**
 * @member {String} estimatedDeliveryDate
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['estimatedDeliveryDate'] = undefined;

/**
 * The ID of the warehouse the product will ship from.
 * @member {String} shipFromWarehouseId
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['shipFromWarehouseId'] = undefined;

/**
 * The city and state the line item ships from.
 * @member {String} shipFromLocation
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['shipFromLocation'] = undefined;

/**
 * The Ingram Micro invoice number for the line item.
 * @member {String} invoiceNumber
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['invoiceNumber'] = undefined;

/**
 * The date the IngramMicro invoice was created for the line item.
 * @member {String} invoiceDate
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['invoiceDate'] = undefined;

/**
 * The shipment carrier details for the line item.
 * @member {Array.<module:model/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner>} carrierDetails
 */
OrderDetailB2BLinesInnerShipmentDetailsInner.prototype['carrierDetails'] = undefined;






export default OrderDetailB2BLinesInnerShipmentDetailsInner;

