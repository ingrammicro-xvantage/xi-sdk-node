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
import OrderCreateResponseOrdersInnerAdditionalAttributesInner from './OrderCreateResponseOrdersInnerAdditionalAttributesInner';
import OrderCreateResponseOrdersInnerLinesInner from './OrderCreateResponseOrdersInnerLinesInner';
import OrderCreateResponseOrdersInnerLinksInner from './OrderCreateResponseOrdersInnerLinksInner';
import OrderCreateResponseOrdersInnerMiscellaneousChargesInner from './OrderCreateResponseOrdersInnerMiscellaneousChargesInner';
import OrderCreateResponseOrdersInnerRejectedLineItemsInner from './OrderCreateResponseOrdersInnerRejectedLineItemsInner';

/**
 * The OrderCreateResponseOrdersInner model module.
 * @module model/OrderCreateResponseOrdersInner
 * @version 1.0.0
 */
class OrderCreateResponseOrdersInner {
    /**
     * Constructs a new <code>OrderCreateResponseOrdersInner</code>.
     * @alias module:model/OrderCreateResponseOrdersInner
     */
    constructor() { 
        
        OrderCreateResponseOrdersInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateResponseOrdersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseOrdersInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseOrdersInner} The populated <code>OrderCreateResponseOrdersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateResponseOrdersInner();

            if (data.hasOwnProperty('numberOfLinesWithSuccess')) {
                obj['numberOfLinesWithSuccess'] = ApiClient.convertToType(data['numberOfLinesWithSuccess'], 'Number');
            }
            if (data.hasOwnProperty('numberOfLinesWithError')) {
                obj['numberOfLinesWithError'] = ApiClient.convertToType(data['numberOfLinesWithError'], 'Number');
            }
            if (data.hasOwnProperty('numberOfLinesWithWarning')) {
                obj['numberOfLinesWithWarning'] = ApiClient.convertToType(data['numberOfLinesWithWarning'], 'Number');
            }
            if (data.hasOwnProperty('ingramOrderNumber')) {
                obj['ingramOrderNumber'] = ApiClient.convertToType(data['ingramOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramOrderDate')) {
                obj['ingramOrderDate'] = ApiClient.convertToType(data['ingramOrderDate'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('orderType')) {
                obj['orderType'] = ApiClient.convertToType(data['orderType'], 'String');
            }
            if (data.hasOwnProperty('orderTotal')) {
                obj['orderTotal'] = ApiClient.convertToType(data['orderTotal'], 'Number');
            }
            if (data.hasOwnProperty('freightCharges')) {
                obj['freightCharges'] = ApiClient.convertToType(data['freightCharges'], 'Number');
            }
            if (data.hasOwnProperty('totalTax')) {
                obj['totalTax'] = ApiClient.convertToType(data['totalTax'], 'Number');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [OrderCreateResponseOrdersInnerLinesInner]);
            }
            if (data.hasOwnProperty('miscellaneousCharges')) {
                obj['miscellaneousCharges'] = ApiClient.convertToType(data['miscellaneousCharges'], [OrderCreateResponseOrdersInnerMiscellaneousChargesInner]);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [OrderCreateResponseOrdersInnerLinksInner]);
            }
            if (data.hasOwnProperty('rejectedLineItems')) {
                obj['rejectedLineItems'] = ApiClient.convertToType(data['rejectedLineItems'], [OrderCreateResponseOrdersInnerRejectedLineItemsInner]);
            }
            if (data.hasOwnProperty('additionalAttributes')) {
                obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [OrderCreateResponseOrdersInnerAdditionalAttributesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseOrdersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseOrdersInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ingramOrderNumber'] && !(typeof data['ingramOrderNumber'] === 'string' || data['ingramOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramOrderNumber` to be a primitive type in the JSON string but got " + data['ingramOrderNumber']);
        }
        // ensure the json data is a string
        if (data['ingramOrderDate'] && !(typeof data['ingramOrderDate'] === 'string' || data['ingramOrderDate'] instanceof String)) {
            throw new Error("Expected the field `ingramOrderDate` to be a primitive type in the JSON string but got " + data['ingramOrderDate']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // ensure the json data is a string
        if (data['orderType'] && !(typeof data['orderType'] === 'string' || data['orderType'] instanceof String)) {
            throw new Error("Expected the field `orderType` to be a primitive type in the JSON string but got " + data['orderType']);
        }
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }
        if (data['lines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['lines'])) {
                throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
            }
            // validate the optional field `lines` (array)
            for (const item of data['lines']) {
                OrderCreateResponseOrdersInnerLinesInner.validateJSON(item);
            };
        }
        if (data['miscellaneousCharges']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['miscellaneousCharges'])) {
                throw new Error("Expected the field `miscellaneousCharges` to be an array in the JSON data but got " + data['miscellaneousCharges']);
            }
            // validate the optional field `miscellaneousCharges` (array)
            for (const item of data['miscellaneousCharges']) {
                OrderCreateResponseOrdersInnerMiscellaneousChargesInner.validateJSON(item);
            };
        }
        if (data['links']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['links'])) {
                throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
            }
            // validate the optional field `links` (array)
            for (const item of data['links']) {
                OrderCreateResponseOrdersInnerLinksInner.validateJSON(item);
            };
        }
        if (data['rejectedLineItems']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rejectedLineItems'])) {
                throw new Error("Expected the field `rejectedLineItems` to be an array in the JSON data but got " + data['rejectedLineItems']);
            }
            // validate the optional field `rejectedLineItems` (array)
            for (const item of data['rejectedLineItems']) {
                OrderCreateResponseOrdersInnerRejectedLineItemsInner.validateJSON(item);
            };
        }
        if (data['additionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalAttributes'])) {
                throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
            }
            // validate the optional field `additionalAttributes` (array)
            for (const item of data['additionalAttributes']) {
                OrderCreateResponseOrdersInnerAdditionalAttributesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The number of lines in the order that were successful.
 * @member {Number} numberOfLinesWithSuccess
 */
OrderCreateResponseOrdersInner.prototype['numberOfLinesWithSuccess'] = undefined;

/**
 * The number of lines in the order that have errors.
 * @member {Number} numberOfLinesWithError
 */
OrderCreateResponseOrdersInner.prototype['numberOfLinesWithError'] = undefined;

/**
 * The number of lines in the order that have a warning.
 * @member {Number} numberOfLinesWithWarning
 */
OrderCreateResponseOrdersInner.prototype['numberOfLinesWithWarning'] = undefined;

/**
 * The Ingram Micro order number.
 * @member {String} ingramOrderNumber
 */
OrderCreateResponseOrdersInner.prototype['ingramOrderNumber'] = undefined;

/**
 * The date in UTC format that the order was created in Ingram Micro's system.
 * @member {String} ingramOrderDate
 */
OrderCreateResponseOrdersInner.prototype['ingramOrderDate'] = undefined;

/**
 * Order-level notes.
 * @member {String} notes
 */
OrderCreateResponseOrdersInner.prototype['notes'] = undefined;

/**
 * The order typer. One of: S=Stocked PO D=Direct Ship PO
 * @member {String} orderType
 */
OrderCreateResponseOrdersInner.prototype['orderType'] = undefined;

/**
 * The total price for the order.
 * @member {Number} orderTotal
 */
OrderCreateResponseOrdersInner.prototype['orderTotal'] = undefined;

/**
 * The total freight charges for the order.
 * @member {Number} freightCharges
 */
OrderCreateResponseOrdersInner.prototype['freightCharges'] = undefined;

/**
 * The total tax for the order.
 * @member {Number} totalTax
 */
OrderCreateResponseOrdersInner.prototype['totalTax'] = undefined;

/**
 * The country-specific three character ISO 4217 currency code used for the order.
 * @member {String} currencyCode
 */
OrderCreateResponseOrdersInner.prototype['currencyCode'] = undefined;

/**
 * The line-level details for the order.
 * @member {Array.<module:model/OrderCreateResponseOrdersInnerLinesInner>} lines
 */
OrderCreateResponseOrdersInner.prototype['lines'] = undefined;

/**
 * @member {Array.<module:model/OrderCreateResponseOrdersInnerMiscellaneousChargesInner>} miscellaneousCharges
 */
OrderCreateResponseOrdersInner.prototype['miscellaneousCharges'] = undefined;

/**
 * Link to Order Details for the order(s).
 * @member {Array.<module:model/OrderCreateResponseOrdersInnerLinksInner>} links
 */
OrderCreateResponseOrdersInner.prototype['links'] = undefined;

/**
 * A list of rejected line items.
 * @member {Array.<module:model/OrderCreateResponseOrdersInnerRejectedLineItemsInner>} rejectedLineItems
 */
OrderCreateResponseOrdersInner.prototype['rejectedLineItems'] = undefined;

/**
 * @member {Array.<module:model/OrderCreateResponseOrdersInnerAdditionalAttributesInner>} additionalAttributes
 */
OrderCreateResponseOrdersInner.prototype['additionalAttributes'] = undefined;






export default OrderCreateResponseOrdersInner;

