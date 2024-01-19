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

/**
 * The OrderModifyResponseRejectedLineItemsInner model module.
 * @module model/OrderModifyResponseRejectedLineItemsInner
 * @version 6.0
 */
class OrderModifyResponseRejectedLineItemsInner {
    /**
     * Constructs a new <code>OrderModifyResponseRejectedLineItemsInner</code>.
     * @alias module:model/OrderModifyResponseRejectedLineItemsInner
     */
    constructor() { 
        
        OrderModifyResponseRejectedLineItemsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderModifyResponseRejectedLineItemsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModifyResponseRejectedLineItemsInner} obj Optional instance to populate.
     * @return {module:model/OrderModifyResponseRejectedLineItemsInner} The populated <code>OrderModifyResponseRejectedLineItemsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderModifyResponseRejectedLineItemsInner();

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
            if (data.hasOwnProperty('rejectCode')) {
                obj['rejectCode'] = ApiClient.convertToType(data['rejectCode'], 'String');
            }
            if (data.hasOwnProperty('rejectReason')) {
                obj['rejectReason'] = ApiClient.convertToType(data['rejectReason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderModifyResponseRejectedLineItemsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModifyResponseRejectedLineItemsInner</code>.
     */
    static validateJSON(data) {
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
        // ensure the json data is a string
        if (data['rejectCode'] && !(typeof data['rejectCode'] === 'string' || data['rejectCode'] instanceof String)) {
            throw new Error("Expected the field `rejectCode` to be a primitive type in the JSON string but got " + data['rejectCode']);
        }
        // ensure the json data is a string
        if (data['rejectReason'] && !(typeof data['rejectReason'] === 'string' || data['rejectReason'] instanceof String)) {
            throw new Error("Expected the field `rejectReason` to be a primitive type in the JSON string but got " + data['rejectReason']);
        }

        return true;
    }


}



/**
 * The IngramMicro line number for the failed line item.
 * @member {String} ingramLineNumber
 */
OrderModifyResponseRejectedLineItemsInner.prototype['ingramLineNumber'] = undefined;

/**
 * The reseller's line number of the failed line item for reference in their system.
 * @member {String} customerLineNumber
 */
OrderModifyResponseRejectedLineItemsInner.prototype['customerLineNumber'] = undefined;

/**
 * The IngramMicro part number for the failed line item.
 * @member {String} ingramPartNumber
 */
OrderModifyResponseRejectedLineItemsInner.prototype['ingramPartNumber'] = undefined;

/**
 * The vendor's part number for the failed line item.
 * @member {String} vendorPartNumber
 */
OrderModifyResponseRejectedLineItemsInner.prototype['vendorPartNumber'] = undefined;

/**
 * The quantity ordered of the failed line item.
 * @member {Number} quantityOrdered
 */
OrderModifyResponseRejectedLineItemsInner.prototype['quantityOrdered'] = undefined;

/**
 * The rejection code for the failed line item.
 * @member {String} rejectCode
 */
OrderModifyResponseRejectedLineItemsInner.prototype['rejectCode'] = undefined;

/**
 * The rejection reason for the failed line item.
 * @member {String} rejectReason
 */
OrderModifyResponseRejectedLineItemsInner.prototype['rejectReason'] = undefined;






export default OrderModifyResponseRejectedLineItemsInner;

