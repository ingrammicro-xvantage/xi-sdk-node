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
import AvailabilityAsyncNotificationRequestResourceInnerLinksInner from './AvailabilityAsyncNotificationRequestResourceInnerLinksInner';

/**
 * The AvailabilityAsyncNotificationRequestResourceInner model module.
 * @module model/AvailabilityAsyncNotificationRequestResourceInner
 * @version 1.0.0
 */
class AvailabilityAsyncNotificationRequestResourceInner {
    /**
     * Constructs a new <code>AvailabilityAsyncNotificationRequestResourceInner</code>.
     * @alias module:model/AvailabilityAsyncNotificationRequestResourceInner
     */
    constructor() { 
        
        AvailabilityAsyncNotificationRequestResourceInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AvailabilityAsyncNotificationRequestResourceInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailabilityAsyncNotificationRequestResourceInner} obj Optional instance to populate.
     * @return {module:model/AvailabilityAsyncNotificationRequestResourceInner} The populated <code>AvailabilityAsyncNotificationRequestResourceInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AvailabilityAsyncNotificationRequestResourceInner();

            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorName')) {
                obj['vendorName'] = ApiClient.convertToType(data['vendorName'], 'String');
            }
            if (data.hasOwnProperty('upcCode')) {
                obj['upcCode'] = ApiClient.convertToType(data['upcCode'], 'String');
            }
            if (data.hasOwnProperty('skuStatus')) {
                obj['skuStatus'] = ApiClient.convertToType(data['skuStatus'], 'String');
            }
            if (data.hasOwnProperty('backOrderFlag')) {
                obj['backOrderFlag'] = ApiClient.convertToType(data['backOrderFlag'], 'String');
            }
            if (data.hasOwnProperty('totalAvailability')) {
                obj['totalAvailability'] = ApiClient.convertToType(data['totalAvailability'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [AvailabilityAsyncNotificationRequestResourceInnerLinksInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AvailabilityAsyncNotificationRequestResourceInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AvailabilityAsyncNotificationRequestResourceInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['eventType'] && !(typeof data['eventType'] === 'string' || data['eventType'] instanceof String)) {
            throw new Error("Expected the field `eventType` to be a primitive type in the JSON string but got " + data['eventType']);
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
        if (data['vendorName'] && !(typeof data['vendorName'] === 'string' || data['vendorName'] instanceof String)) {
            throw new Error("Expected the field `vendorName` to be a primitive type in the JSON string but got " + data['vendorName']);
        }
        // ensure the json data is a string
        if (data['upcCode'] && !(typeof data['upcCode'] === 'string' || data['upcCode'] instanceof String)) {
            throw new Error("Expected the field `upcCode` to be a primitive type in the JSON string but got " + data['upcCode']);
        }
        // ensure the json data is a string
        if (data['skuStatus'] && !(typeof data['skuStatus'] === 'string' || data['skuStatus'] instanceof String)) {
            throw new Error("Expected the field `skuStatus` to be a primitive type in the JSON string but got " + data['skuStatus']);
        }
        // ensure the json data is a string
        if (data['backOrderFlag'] && !(typeof data['backOrderFlag'] === 'string' || data['backOrderFlag'] instanceof String)) {
            throw new Error("Expected the field `backOrderFlag` to be a primitive type in the JSON string but got " + data['backOrderFlag']);
        }
        // ensure the json data is a string
        if (data['totalAvailability'] && !(typeof data['totalAvailability'] === 'string' || data['totalAvailability'] instanceof String)) {
            throw new Error("Expected the field `totalAvailability` to be a primitive type in the JSON string but got " + data['totalAvailability']);
        }
        if (data['links']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['links'])) {
                throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
            }
            // validate the optional field `links` (array)
            for (const item of data['links']) {
                AvailabilityAsyncNotificationRequestResourceInnerLinksInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The event name sent in the event request.
 * @member {String} eventType
 */
AvailabilityAsyncNotificationRequestResourceInner.prototype['eventType'] = undefined;

/**
 * The Unique IngramMicro part number for the product.
 * @member {String} ingramPartNumber
 */
AvailabilityAsyncNotificationRequestResourceInner.prototype['ingramPartNumber'] = undefined;

/**
 * The vendors part number for the product.
 * @member {String} vendorPartNumber
 */
AvailabilityAsyncNotificationRequestResourceInner.prototype['vendorPartNumber'] = undefined;

/**
 * The name of the vendor/manufacturer of the product.
 * @member {String} vendorName
 */
AvailabilityAsyncNotificationRequestResourceInner.prototype['vendorName'] = undefined;

/**
 * The UPC code for the product. Consists of 12 numeric digits that are uniquly assigned to each trade item.
 * @member {String} upcCode
 */
AvailabilityAsyncNotificationRequestResourceInner.prototype['upcCode'] = undefined;

/**
 * Status returned saying whether sku is active.
 * @member {String} skuStatus
 */
AvailabilityAsyncNotificationRequestResourceInner.prototype['skuStatus'] = undefined;

/**
 * Backordered Flag.
 * @member {String} backOrderFlag
 */
AvailabilityAsyncNotificationRequestResourceInner.prototype['backOrderFlag'] = undefined;

/**
 * totalAvailability.
 * @member {String} totalAvailability
 */
AvailabilityAsyncNotificationRequestResourceInner.prototype['totalAvailability'] = undefined;

/**
 * Link to Order Details for the order(s).
 * @member {Array.<module:model/AvailabilityAsyncNotificationRequestResourceInnerLinksInner>} links
 */
AvailabilityAsyncNotificationRequestResourceInner.prototype['links'] = undefined;






export default AvailabilityAsyncNotificationRequestResourceInner;

