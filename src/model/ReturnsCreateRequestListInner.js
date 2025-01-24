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
import ReturnsCreateRequestListInnerShipFromInfoInner from './ReturnsCreateRequestListInnerShipFromInfoInner';

/**
 * The ReturnsCreateRequestListInner model module.
 * @module model/ReturnsCreateRequestListInner
 * @version 1.0.0
 */
class ReturnsCreateRequestListInner {
    /**
     * Constructs a new <code>ReturnsCreateRequestListInner</code>.
     * @alias module:model/ReturnsCreateRequestListInner
     * @param invoiceNumber {String} The Invoice number of the order.
     * @param invoiceDate {Date} Date of an Invoice.
     * @param quantity {Number} Return quantity of the product.
     * @param primaryReason {String} Primary reason to return the product.
     * @param secondaryReason {String} Secondary reason to return the product.
     * @param shipFromInfo {Array.<module:model/ReturnsCreateRequestListInnerShipFromInfoInner>} 
     * @param numberOfBoxes {Number} Number of boxes to return.
     */
    constructor(invoiceNumber, invoiceDate, quantity, primaryReason, secondaryReason, shipFromInfo, numberOfBoxes) { 
        
        ReturnsCreateRequestListInner.initialize(this, invoiceNumber, invoiceDate, quantity, primaryReason, secondaryReason, shipFromInfo, numberOfBoxes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, invoiceNumber, invoiceDate, quantity, primaryReason, secondaryReason, shipFromInfo, numberOfBoxes) { 
        obj['invoiceNumber'] = invoiceNumber;
        obj['invoiceDate'] = invoiceDate;
        obj['quantity'] = quantity;
        obj['primaryReason'] = primaryReason;
        obj['secondaryReason'] = secondaryReason;
        obj['shipFromInfo'] = shipFromInfo;
        obj['numberOfBoxes'] = numberOfBoxes;
    }

    /**
     * Constructs a <code>ReturnsCreateRequestListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsCreateRequestListInner} obj Optional instance to populate.
     * @return {module:model/ReturnsCreateRequestListInner} The populated <code>ReturnsCreateRequestListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnsCreateRequestListInner();

            if (data.hasOwnProperty('invoiceNumber')) {
                obj['invoiceNumber'] = ApiClient.convertToType(data['invoiceNumber'], 'String');
            }
            if (data.hasOwnProperty('invoiceDate')) {
                obj['invoiceDate'] = ApiClient.convertToType(data['invoiceDate'], 'Date');
            }
            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = ApiClient.convertToType(data['customerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('serialNumber')) {
                obj['serialNumber'] = ApiClient.convertToType(data['serialNumber'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('primaryReason')) {
                obj['primaryReason'] = ApiClient.convertToType(data['primaryReason'], 'String');
            }
            if (data.hasOwnProperty('secondaryReason')) {
                obj['secondaryReason'] = ApiClient.convertToType(data['secondaryReason'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('referenceNumber')) {
                obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
            }
            if (data.hasOwnProperty('billToAddressId')) {
                obj['billToAddressId'] = ApiClient.convertToType(data['billToAddressId'], 'String');
            }
            if (data.hasOwnProperty('shipFromInfo')) {
                obj['shipFromInfo'] = ApiClient.convertToType(data['shipFromInfo'], [ReturnsCreateRequestListInnerShipFromInfoInner]);
            }
            if (data.hasOwnProperty('numberOfBoxes')) {
                obj['numberOfBoxes'] = ApiClient.convertToType(data['numberOfBoxes'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReturnsCreateRequestListInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnsCreateRequestListInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReturnsCreateRequestListInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['invoiceNumber'] && !(typeof data['invoiceNumber'] === 'string' || data['invoiceNumber'] instanceof String)) {
            throw new Error("Expected the field `invoiceNumber` to be a primitive type in the JSON string but got " + data['invoiceNumber']);
        }
        // ensure the json data is a string
        if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
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
        if (data['serialNumber'] && !(typeof data['serialNumber'] === 'string' || data['serialNumber'] instanceof String)) {
            throw new Error("Expected the field `serialNumber` to be a primitive type in the JSON string but got " + data['serialNumber']);
        }
        // ensure the json data is a string
        if (data['primaryReason'] && !(typeof data['primaryReason'] === 'string' || data['primaryReason'] instanceof String)) {
            throw new Error("Expected the field `primaryReason` to be a primitive type in the JSON string but got " + data['primaryReason']);
        }
        // ensure the json data is a string
        if (data['secondaryReason'] && !(typeof data['secondaryReason'] === 'string' || data['secondaryReason'] instanceof String)) {
            throw new Error("Expected the field `secondaryReason` to be a primitive type in the JSON string but got " + data['secondaryReason']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // ensure the json data is a string
        if (data['referenceNumber'] && !(typeof data['referenceNumber'] === 'string' || data['referenceNumber'] instanceof String)) {
            throw new Error("Expected the field `referenceNumber` to be a primitive type in the JSON string but got " + data['referenceNumber']);
        }
        // ensure the json data is a string
        if (data['billToAddressId'] && !(typeof data['billToAddressId'] === 'string' || data['billToAddressId'] instanceof String)) {
            throw new Error("Expected the field `billToAddressId` to be a primitive type in the JSON string but got " + data['billToAddressId']);
        }
        if (data['shipFromInfo']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['shipFromInfo'])) {
                throw new Error("Expected the field `shipFromInfo` to be an array in the JSON data but got " + data['shipFromInfo']);
            }
            // validate the optional field `shipFromInfo` (array)
            for (const item of data['shipFromInfo']) {
                ReturnsCreateRequestListInnerShipFromInfoInner.validateJSON(item);
            };
        }

        return true;
    }


}

ReturnsCreateRequestListInner.RequiredProperties = ["invoiceNumber", "invoiceDate", "quantity", "primaryReason", "secondaryReason", "shipFromInfo", "numberOfBoxes"];

/**
 * The Invoice number of the order.
 * @member {String} invoiceNumber
 */
ReturnsCreateRequestListInner.prototype['invoiceNumber'] = undefined;

/**
 * Date of an Invoice.
 * @member {Date} invoiceDate
 */
ReturnsCreateRequestListInner.prototype['invoiceDate'] = undefined;

/**
 * The reseller's order number for reference in their system.
 * @member {String} customerOrderNumber
 */
ReturnsCreateRequestListInner.prototype['customerOrderNumber'] = undefined;

/**
 * Unique line number from Ingram.
 * @member {String} ingramPartNumber
 */
ReturnsCreateRequestListInner.prototype['ingramPartNumber'] = undefined;

/**
 * Vendor Part Number.
 * @member {String} vendorPartNumber
 */
ReturnsCreateRequestListInner.prototype['vendorPartNumber'] = undefined;

/**
 * Serial number of the product.
 * @member {String} serialNumber
 */
ReturnsCreateRequestListInner.prototype['serialNumber'] = undefined;

/**
 * Return quantity of the product.
 * @member {Number} quantity
 */
ReturnsCreateRequestListInner.prototype['quantity'] = undefined;

/**
 * Primary reason to return the product.
 * @member {String} primaryReason
 */
ReturnsCreateRequestListInner.prototype['primaryReason'] = undefined;

/**
 * Secondary reason to return the product.
 * @member {String} secondaryReason
 */
ReturnsCreateRequestListInner.prototype['secondaryReason'] = undefined;

/**
 * Return notes.
 * @member {String} notes
 */
ReturnsCreateRequestListInner.prototype['notes'] = undefined;

/**
 * Reference number to return the product.
 * @member {String} referenceNumber
 */
ReturnsCreateRequestListInner.prototype['referenceNumber'] = undefined;

/**
 * Suffix used to identify billing address.
 * @member {String} billToAddressId
 */
ReturnsCreateRequestListInner.prototype['billToAddressId'] = undefined;

/**
 * @member {Array.<module:model/ReturnsCreateRequestListInnerShipFromInfoInner>} shipFromInfo
 */
ReturnsCreateRequestListInner.prototype['shipFromInfo'] = undefined;

/**
 * Number of boxes to return.
 * @member {Number} numberOfBoxes
 */
ReturnsCreateRequestListInner.prototype['numberOfBoxes'] = undefined;






export default ReturnsCreateRequestListInner;

