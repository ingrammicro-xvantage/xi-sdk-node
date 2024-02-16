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

/**
 * The OrderSearchRequestServicerequestOrderLookupRequestOrderNumber model module.
 * @module model/OrderSearchRequestServicerequestOrderLookupRequestOrderNumber
 * @version 1.0.0
 */
class OrderSearchRequestServicerequestOrderLookupRequestOrderNumber {
    /**
     * Constructs a new <code>OrderSearchRequestServicerequestOrderLookupRequestOrderNumber</code>.
     * @alias module:model/OrderSearchRequestServicerequestOrderLookupRequestOrderNumber
     * @param entryDate {String} 
     * @param orderBranch {String} 
     */
    constructor(entryDate, orderBranch) { 
        
        OrderSearchRequestServicerequestOrderLookupRequestOrderNumber.initialize(this, entryDate, orderBranch);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entryDate, orderBranch) { 
        obj['entryDate'] = entryDate;
        obj['orderBranch'] = orderBranch;
    }

    /**
     * Constructs a <code>OrderSearchRequestServicerequestOrderLookupRequestOrderNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderSearchRequestServicerequestOrderLookupRequestOrderNumber} obj Optional instance to populate.
     * @return {module:model/OrderSearchRequestServicerequestOrderLookupRequestOrderNumber} The populated <code>OrderSearchRequestServicerequestOrderLookupRequestOrderNumber</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchRequestServicerequestOrderLookupRequestOrderNumber();

            if (data.hasOwnProperty('entryDate')) {
                obj['entryDate'] = ApiClient.convertToType(data['entryDate'], 'String');
            }
            if (data.hasOwnProperty('orderBranch')) {
                obj['orderBranch'] = ApiClient.convertToType(data['orderBranch'], 'String');
            }
            if (data.hasOwnProperty('orderNumber')) {
                obj['orderNumber'] = ApiClient.convertToType(data['orderNumber'], 'String');
            }
            if (data.hasOwnProperty('distributionNumber')) {
                obj['distributionNumber'] = ApiClient.convertToType(data['distributionNumber'], 'String');
            }
            if (data.hasOwnProperty('shipmentNumber')) {
                obj['shipmentNumber'] = ApiClient.convertToType(data['shipmentNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderSearchRequestServicerequestOrderLookupRequestOrderNumber</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderSearchRequestServicerequestOrderLookupRequestOrderNumber</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrderSearchRequestServicerequestOrderLookupRequestOrderNumber.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['entryDate'] && !(typeof data['entryDate'] === 'string' || data['entryDate'] instanceof String)) {
            throw new Error("Expected the field `entryDate` to be a primitive type in the JSON string but got " + data['entryDate']);
        }
        // ensure the json data is a string
        if (data['orderBranch'] && !(typeof data['orderBranch'] === 'string' || data['orderBranch'] instanceof String)) {
            throw new Error("Expected the field `orderBranch` to be a primitive type in the JSON string but got " + data['orderBranch']);
        }
        // ensure the json data is a string
        if (data['orderNumber'] && !(typeof data['orderNumber'] === 'string' || data['orderNumber'] instanceof String)) {
            throw new Error("Expected the field `orderNumber` to be a primitive type in the JSON string but got " + data['orderNumber']);
        }
        // ensure the json data is a string
        if (data['distributionNumber'] && !(typeof data['distributionNumber'] === 'string' || data['distributionNumber'] instanceof String)) {
            throw new Error("Expected the field `distributionNumber` to be a primitive type in the JSON string but got " + data['distributionNumber']);
        }
        // ensure the json data is a string
        if (data['shipmentNumber'] && !(typeof data['shipmentNumber'] === 'string' || data['shipmentNumber'] instanceof String)) {
            throw new Error("Expected the field `shipmentNumber` to be a primitive type in the JSON string but got " + data['shipmentNumber']);
        }

        return true;
    }


}

OrderSearchRequestServicerequestOrderLookupRequestOrderNumber.RequiredProperties = ["entryDate", "orderBranch"];

/**
 * @member {String} entryDate
 */
OrderSearchRequestServicerequestOrderLookupRequestOrderNumber.prototype['entryDate'] = undefined;

/**
 * @member {String} orderBranch
 */
OrderSearchRequestServicerequestOrderLookupRequestOrderNumber.prototype['orderBranch'] = undefined;

/**
 * @member {String} orderNumber
 */
OrderSearchRequestServicerequestOrderLookupRequestOrderNumber.prototype['orderNumber'] = undefined;

/**
 * @member {String} distributionNumber
 */
OrderSearchRequestServicerequestOrderLookupRequestOrderNumber.prototype['distributionNumber'] = undefined;

/**
 * @member {String} shipmentNumber
 */
OrderSearchRequestServicerequestOrderLookupRequestOrderNumber.prototype['shipmentNumber'] = undefined;






export default OrderSearchRequestServicerequestOrderLookupRequestOrderNumber;

