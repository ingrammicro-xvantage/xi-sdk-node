/**
 * XI SDK Resellers
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
import OrderModifyResponseLinesInnerAdditionalAttributesInner from './OrderModifyResponseLinesInnerAdditionalAttributesInner';
import OrderModifyResponseLinesInnerShipmentDetails from './OrderModifyResponseLinesInnerShipmentDetails';

/**
 * The OrderModifyResponseLinesInner model module.
 * @module model/OrderModifyResponseLinesInner
 * @version 6.0
 */
class OrderModifyResponseLinesInner {
    /**
     * Constructs a new <code>OrderModifyResponseLinesInner</code>.
     * @alias module:model/OrderModifyResponseLinesInner
     */
    constructor() { 
        
        OrderModifyResponseLinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderModifyResponseLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModifyResponseLinesInner} obj Optional instance to populate.
     * @return {module:model/OrderModifyResponseLinesInner} The populated <code>OrderModifyResponseLinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderModifyResponseLinesInner();

            if (data.hasOwnProperty('subOrderNumber')) {
                obj['subOrderNumber'] = ApiClient.convertToType(data['subOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramLineNumber')) {
                obj['ingramLineNumber'] = ApiClient.convertToType(data['ingramLineNumber'], 'String');
            }
            if (data.hasOwnProperty('customerLineNumber')) {
                obj['customerLineNumber'] = ApiClient.convertToType(data['customerLineNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('quantityOrdered')) {
                obj['quantityOrdered'] = ApiClient.convertToType(data['quantityOrdered'], 'Number');
            }
            if (data.hasOwnProperty('quantityConfirmed')) {
                obj['quantityConfirmed'] = ApiClient.convertToType(data['quantityConfirmed'], 'Number');
            }
            if (data.hasOwnProperty('quantityBackOrdered')) {
                obj['quantityBackOrdered'] = ApiClient.convertToType(data['quantityBackOrdered'], 'Number');
            }
            if (data.hasOwnProperty('shipmentDetails')) {
                obj['shipmentDetails'] = OrderModifyResponseLinesInnerShipmentDetails.constructFromObject(data['shipmentDetails']);
            }
            if (data.hasOwnProperty('additionalAttributes')) {
                obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [OrderModifyResponseLinesInnerAdditionalAttributesInner]);
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderModifyResponseLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModifyResponseLinesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['subOrderNumber'] && !(typeof data['subOrderNumber'] === 'string' || data['subOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `subOrderNumber` to be a primitive type in the JSON string but got " + data['subOrderNumber']);
        }
        // ensure the json data is a string
        if (data['ingramLineNumber'] && !(typeof data['ingramLineNumber'] === 'string' || data['ingramLineNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramLineNumber` to be a primitive type in the JSON string but got " + data['ingramLineNumber']);
        }
        // ensure the json data is a string
        if (data['customerLineNumber'] && !(typeof data['customerLineNumber'] === 'string' || data['customerLineNumber'] instanceof String)) {
            throw new Error("Expected the field `customerLineNumber` to be a primitive type in the JSON string but got " + data['customerLineNumber']);
        }
        // ensure the json data is a string
        if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
        }
        // ensure the json data is a string
        if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
        }
        // validate the optional field `shipmentDetails`
        if (data['shipmentDetails']) { // data not null
          OrderModifyResponseLinesInnerShipmentDetails.validateJSON(data['shipmentDetails']);
        }
        if (data['additionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalAttributes'])) {
                throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
            }
            // validate the optional field `additionalAttributes` (array)
            for (const item of data['additionalAttributes']) {
                OrderModifyResponseLinesInnerAdditionalAttributesInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }

        return true;
    }


}



/**
 * The sub order number. The two-digit prefix is the warehouse code of the warehouse nearest the reseller. The middle number is the order number. The two-digit suffix is the sub order number.
 * @member {String} subOrderNumber
 */
OrderModifyResponseLinesInner.prototype['subOrderNumber'] = undefined;

/**
 * The IngramMicro line number.
 * @member {String} ingramLineNumber
 */
OrderModifyResponseLinesInner.prototype['ingramLineNumber'] = undefined;

/**
 * The reseller's line number for reference in their system.
 * @member {String} customerLineNumber
 */
OrderModifyResponseLinesInner.prototype['customerLineNumber'] = undefined;

/**
 * The unique IngramMicro part number for the line item.
 * @member {String} ingramPartNumber
 */
OrderModifyResponseLinesInner.prototype['ingramPartNumber'] = undefined;

/**
 * The vendor's part number for the line item.
 * @member {String} vendorPartNumber
 */
OrderModifyResponseLinesInner.prototype['vendorPartNumber'] = undefined;

/**
 * The quantity ordered of the line item.
 * @member {Number} quantityOrdered
 */
OrderModifyResponseLinesInner.prototype['quantityOrdered'] = undefined;

/**
 * The quantity confirmed of the line item.
 * @member {Number} quantityConfirmed
 */
OrderModifyResponseLinesInner.prototype['quantityConfirmed'] = undefined;

/**
 * The quantity backordered of the line item.
 * @member {Number} quantityBackOrdered
 */
OrderModifyResponseLinesInner.prototype['quantityBackOrdered'] = undefined;

/**
 * @member {module:model/OrderModifyResponseLinesInnerShipmentDetails} shipmentDetails
 */
OrderModifyResponseLinesInner.prototype['shipmentDetails'] = undefined;

/**
 * SAP requested and country-specific line level details.
 * @member {Array.<module:model/OrderModifyResponseLinesInnerAdditionalAttributesInner>} additionalAttributes
 */
OrderModifyResponseLinesInner.prototype['additionalAttributes'] = undefined;

/**
 * Line-level notes for the order.
 * @member {String} notes
 */
OrderModifyResponseLinesInner.prototype['notes'] = undefined;






export default OrderModifyResponseLinesInner;

