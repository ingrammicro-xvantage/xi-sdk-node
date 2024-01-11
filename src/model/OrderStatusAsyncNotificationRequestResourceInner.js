/**
 * Reseller API Documentation
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
import OrderStatusAsyncNotificationRequestResourceInnerLinesInner from './OrderStatusAsyncNotificationRequestResourceInnerLinesInner';
import OrderStatusAsyncNotificationRequestResourceInnerLinksInner from './OrderStatusAsyncNotificationRequestResourceInnerLinksInner';

/**
 * The OrderStatusAsyncNotificationRequestResourceInner model module.
 * @module model/OrderStatusAsyncNotificationRequestResourceInner
 * @version 6.0
 */
class OrderStatusAsyncNotificationRequestResourceInner {
    /**
     * Constructs a new <code>OrderStatusAsyncNotificationRequestResourceInner</code>.
     * @alias module:model/OrderStatusAsyncNotificationRequestResourceInner
     */
    constructor() { 
        
        OrderStatusAsyncNotificationRequestResourceInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderStatusAsyncNotificationRequestResourceInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderStatusAsyncNotificationRequestResourceInner} obj Optional instance to populate.
     * @return {module:model/OrderStatusAsyncNotificationRequestResourceInner} The populated <code>OrderStatusAsyncNotificationRequestResourceInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatusAsyncNotificationRequestResourceInner();

            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
            }
            if (data.hasOwnProperty('orderNumber')) {
                obj['orderNumber'] = ApiClient.convertToType(data['orderNumber'], 'String');
            }
            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = ApiClient.convertToType(data['customerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('orderEntryTimeStamp')) {
                obj['orderEntryTimeStamp'] = ApiClient.convertToType(data['orderEntryTimeStamp'], 'String');
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [OrderStatusAsyncNotificationRequestResourceInnerLinesInner]);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [OrderStatusAsyncNotificationRequestResourceInnerLinksInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderStatusAsyncNotificationRequestResourceInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderStatusAsyncNotificationRequestResourceInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['eventType'] && !(typeof data['eventType'] === 'string' || data['eventType'] instanceof String)) {
            throw new Error("Expected the field `eventType` to be a primitive type in the JSON string but got " + data['eventType']);
        }
        // ensure the json data is a string
        if (data['orderNumber'] && !(typeof data['orderNumber'] === 'string' || data['orderNumber'] instanceof String)) {
            throw new Error("Expected the field `orderNumber` to be a primitive type in the JSON string but got " + data['orderNumber']);
        }
        // ensure the json data is a string
        if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['orderEntryTimeStamp'] && !(typeof data['orderEntryTimeStamp'] === 'string' || data['orderEntryTimeStamp'] instanceof String)) {
            throw new Error("Expected the field `orderEntryTimeStamp` to be a primitive type in the JSON string but got " + data['orderEntryTimeStamp']);
        }
        if (data['lines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['lines'])) {
                throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
            }
            // validate the optional field `lines` (array)
            for (const item of data['lines']) {
                OrderStatusAsyncNotificationRequestResourceInnerLinesInner.validateJSON(item);
            };
        }
        if (data['links']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['links'])) {
                throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
            }
            // validate the optional field `links` (array)
            for (const item of data['links']) {
                OrderStatusAsyncNotificationRequestResourceInnerLinksInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The event name sent in the event request.
 * @member {String} eventType
 */
OrderStatusAsyncNotificationRequestResourceInner.prototype['eventType'] = undefined;

/**
 * The Ingram Micro order number.
 * @member {String} orderNumber
 */
OrderStatusAsyncNotificationRequestResourceInner.prototype['orderNumber'] = undefined;

/**
 * The reseller's unique PO/Order number.
 * @member {String} customerOrderNumber
 */
OrderStatusAsyncNotificationRequestResourceInner.prototype['customerOrderNumber'] = undefined;

/**
 * The timestamp at which the order was created.
 * @member {String} orderEntryTimeStamp
 */
OrderStatusAsyncNotificationRequestResourceInner.prototype['orderEntryTimeStamp'] = undefined;

/**
 * The line-level details for the order.
 * @member {Array.<module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInner>} lines
 */
OrderStatusAsyncNotificationRequestResourceInner.prototype['lines'] = undefined;

/**
 * Link to Order Details for the order(s).
 * @member {Array.<module:model/OrderStatusAsyncNotificationRequestResourceInnerLinksInner>} links
 */
OrderStatusAsyncNotificationRequestResourceInner.prototype['links'] = undefined;






export default OrderStatusAsyncNotificationRequestResourceInner;

