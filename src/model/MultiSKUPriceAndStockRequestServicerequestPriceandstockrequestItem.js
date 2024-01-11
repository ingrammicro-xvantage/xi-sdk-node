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

/**
 * The MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem model module.
 * @module model/MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem
 * @version 6.0
 */
class MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem {
    /**
     * Constructs a new <code>MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem</code>.
     * @alias module:model/MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem
     */
    constructor() { 
        
        MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem} obj Optional instance to populate.
     * @return {module:model/MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem} The populated <code>MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem();

            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('ingrampartnumber')) {
                obj['ingrampartnumber'] = ApiClient.convertToType(data['ingrampartnumber'], 'String');
            }
            if (data.hasOwnProperty('vendorpartnumber')) {
                obj['vendorpartnumber'] = ApiClient.convertToType(data['vendorpartnumber'], 'String');
            }
            if (data.hasOwnProperty('UPC')) {
                obj['UPC'] = ApiClient.convertToType(data['UPC'], 'String');
            }
            if (data.hasOwnProperty('customerpartnumber')) {
                obj['customerpartnumber'] = ApiClient.convertToType(data['customerpartnumber'], 'String');
            }
            if (data.hasOwnProperty('warehouseidlist')) {
                obj['warehouseidlist'] = ApiClient.convertToType(data['warehouseidlist'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ingrampartnumber'] && !(typeof data['ingrampartnumber'] === 'string' || data['ingrampartnumber'] instanceof String)) {
            throw new Error("Expected the field `ingrampartnumber` to be a primitive type in the JSON string but got " + data['ingrampartnumber']);
        }
        // ensure the json data is a string
        if (data['vendorpartnumber'] && !(typeof data['vendorpartnumber'] === 'string' || data['vendorpartnumber'] instanceof String)) {
            throw new Error("Expected the field `vendorpartnumber` to be a primitive type in the JSON string but got " + data['vendorpartnumber']);
        }
        // ensure the json data is a string
        if (data['UPC'] && !(typeof data['UPC'] === 'string' || data['UPC'] instanceof String)) {
            throw new Error("Expected the field `UPC` to be a primitive type in the JSON string but got " + data['UPC']);
        }
        // ensure the json data is a string
        if (data['customerpartnumber'] && !(typeof data['customerpartnumber'] === 'string' || data['customerpartnumber'] instanceof String)) {
            throw new Error("Expected the field `customerpartnumber` to be a primitive type in the JSON string but got " + data['customerpartnumber']);
        }
        // ensure the json data is a string
        if (data['warehouseidlist'] && !(typeof data['warehouseidlist'] === 'string' || data['warehouseidlist'] instanceof String)) {
            throw new Error("Expected the field `warehouseidlist` to be a primitive type in the JSON string but got " + data['warehouseidlist']);
        }

        return true;
    }


}



/**
 * @member {Number} index
 */
MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.prototype['index'] = undefined;

/**
 * Ingram Micro system specific SKU number for the product for which the price is requested at Ingram Micro
 * @member {String} ingrampartnumber
 */
MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.prototype['ingrampartnumber'] = undefined;

/**
 * Vendor Part Number for the product for which the price is requested at Ingram Micro
 * @member {String} vendorpartnumber
 */
MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.prototype['vendorpartnumber'] = undefined;

/**
 * Universal Product code for the product for which the price is requested at Ingram Micro
 * @member {String} UPC
 */
MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.prototype['UPC'] = undefined;

/**
 * Unique identification number of customer. For this option the Ingram Micro Sales rep must set up a cross reference table. 
 * @member {String} customerpartnumber
 */
MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.prototype['customerpartnumber'] = undefined;

/**
 * Unique identity for Ingram Micro warehouses against which stock details are returned.
 * @member {String} warehouseidlist
 */
MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.prototype['warehouseidlist'] = undefined;






export default MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem;

