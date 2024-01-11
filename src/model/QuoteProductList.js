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
import QuoteProductListPrice from './QuoteProductListPrice';

/**
 * The QuoteProductList model module.
 * @module model/QuoteProductList
 * @version 6.0
 */
class QuoteProductList {
    /**
     * Constructs a new <code>QuoteProductList</code>.
     * 
     * @alias module:model/QuoteProductList
     */
    constructor() { 
        
        QuoteProductList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteProductList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteProductList} obj Optional instance to populate.
     * @return {module:model/QuoteProductList} The populated <code>QuoteProductList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteProductList();

            if (data.hasOwnProperty('quoteProductGuid')) {
                obj['quoteProductGuid'] = ApiClient.convertToType(data['quoteProductGuid'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('bidStartDate')) {
                obj['bidStartDate'] = ApiClient.convertToType(data['bidStartDate'], 'String');
            }
            if (data.hasOwnProperty('bidExpiryDate')) {
                obj['bidExpiryDate'] = ApiClient.convertToType(data['bidExpiryDate'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('lineNumber')) {
                obj['lineNumber'] = ApiClient.convertToType(data['lineNumber'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'String');
            }
            if (data.hasOwnProperty('isSuggestionProduct')) {
                obj['isSuggestionProduct'] = ApiClient.convertToType(data['isSuggestionProduct'], 'String');
            }
            if (data.hasOwnProperty('vpnCategory')) {
                obj['vpnCategory'] = ApiClient.convertToType(data['vpnCategory'], 'String');
            }
            if (data.hasOwnProperty('quoteProductsSupplierPartAuxiliaryId')) {
                obj['quoteProductsSupplierPartAuxiliaryId'] = ApiClient.convertToType(data['quoteProductsSupplierPartAuxiliaryId'], 'String');
            }
            if (data.hasOwnProperty('quoteProductsVendor')) {
                obj['quoteProductsVendor'] = ApiClient.convertToType(data['quoteProductsVendor'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = QuoteProductListPrice.constructFromObject(data['price']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteProductList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteProductList</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['quoteProductGuid'] && !(typeof data['quoteProductGuid'] === 'string' || data['quoteProductGuid'] instanceof String)) {
            throw new Error("Expected the field `quoteProductGuid` to be a primitive type in the JSON string but got " + data['quoteProductGuid']);
        }
        // ensure the json data is a string
        if (data['quantity'] && !(typeof data['quantity'] === 'string' || data['quantity'] instanceof String)) {
            throw new Error("Expected the field `quantity` to be a primitive type in the JSON string but got " + data['quantity']);
        }
        // ensure the json data is a string
        if (data['comments'] && !(typeof data['comments'] === 'string' || data['comments'] instanceof String)) {
            throw new Error("Expected the field `comments` to be a primitive type in the JSON string but got " + data['comments']);
        }
        // ensure the json data is a string
        if (data['bidStartDate'] && !(typeof data['bidStartDate'] === 'string' || data['bidStartDate'] instanceof String)) {
            throw new Error("Expected the field `bidStartDate` to be a primitive type in the JSON string but got " + data['bidStartDate']);
        }
        // ensure the json data is a string
        if (data['bidExpiryDate'] && !(typeof data['bidExpiryDate'] === 'string' || data['bidExpiryDate'] instanceof String)) {
            throw new Error("Expected the field `bidExpiryDate` to be a primitive type in the JSON string but got " + data['bidExpiryDate']);
        }
        // ensure the json data is a string
        if (data['sku'] && !(typeof data['sku'] === 'string' || data['sku'] instanceof String)) {
            throw new Error("Expected the field `sku` to be a primitive type in the JSON string but got " + data['sku']);
        }
        // ensure the json data is a string
        if (data['lineNumber'] && !(typeof data['lineNumber'] === 'string' || data['lineNumber'] instanceof String)) {
            throw new Error("Expected the field `lineNumber` to be a primitive type in the JSON string but got " + data['lineNumber']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
        }
        // ensure the json data is a string
        if (data['weight'] && !(typeof data['weight'] === 'string' || data['weight'] instanceof String)) {
            throw new Error("Expected the field `weight` to be a primitive type in the JSON string but got " + data['weight']);
        }
        // ensure the json data is a string
        if (data['isSuggestionProduct'] && !(typeof data['isSuggestionProduct'] === 'string' || data['isSuggestionProduct'] instanceof String)) {
            throw new Error("Expected the field `isSuggestionProduct` to be a primitive type in the JSON string but got " + data['isSuggestionProduct']);
        }
        // ensure the json data is a string
        if (data['vpnCategory'] && !(typeof data['vpnCategory'] === 'string' || data['vpnCategory'] instanceof String)) {
            throw new Error("Expected the field `vpnCategory` to be a primitive type in the JSON string but got " + data['vpnCategory']);
        }
        // ensure the json data is a string
        if (data['quoteProductsSupplierPartAuxiliaryId'] && !(typeof data['quoteProductsSupplierPartAuxiliaryId'] === 'string' || data['quoteProductsSupplierPartAuxiliaryId'] instanceof String)) {
            throw new Error("Expected the field `quoteProductsSupplierPartAuxiliaryId` to be a primitive type in the JSON string but got " + data['quoteProductsSupplierPartAuxiliaryId']);
        }
        // ensure the json data is a string
        if (data['quoteProductsVendor'] && !(typeof data['quoteProductsVendor'] === 'string' || data['quoteProductsVendor'] instanceof String)) {
            throw new Error("Expected the field `quoteProductsVendor` to be a primitive type in the JSON string but got " + data['quoteProductsVendor']);
        }
        // validate the optional field `price`
        if (data['price']) { // data not null
          QuoteProductListPrice.validateJSON(data['price']);
        }

        return true;
    }


}



/**
 * @member {String} quoteProductGuid
 */
QuoteProductList.prototype['quoteProductGuid'] = undefined;

/**
 * @member {String} quantity
 */
QuoteProductList.prototype['quantity'] = undefined;

/**
 * @member {String} comments
 */
QuoteProductList.prototype['comments'] = undefined;

/**
 * @member {String} bidStartDate
 */
QuoteProductList.prototype['bidStartDate'] = undefined;

/**
 * @member {String} bidExpiryDate
 */
QuoteProductList.prototype['bidExpiryDate'] = undefined;

/**
 * @member {String} sku
 */
QuoteProductList.prototype['sku'] = undefined;

/**
 * @member {String} lineNumber
 */
QuoteProductList.prototype['lineNumber'] = undefined;

/**
 * @member {String} description
 */
QuoteProductList.prototype['description'] = undefined;

/**
 * @member {String} vendorPartNumber
 */
QuoteProductList.prototype['vendorPartNumber'] = undefined;

/**
 * @member {String} weight
 */
QuoteProductList.prototype['weight'] = undefined;

/**
 * @member {String} isSuggestionProduct
 */
QuoteProductList.prototype['isSuggestionProduct'] = undefined;

/**
 * @member {String} vpnCategory
 */
QuoteProductList.prototype['vpnCategory'] = undefined;

/**
 * @member {String} quoteProductsSupplierPartAuxiliaryId
 */
QuoteProductList.prototype['quoteProductsSupplierPartAuxiliaryId'] = undefined;

/**
 * @member {String} quoteProductsVendor
 */
QuoteProductList.prototype['quoteProductsVendor'] = undefined;

/**
 * @member {module:model/QuoteProductListPrice} price
 */
QuoteProductList.prototype['price'] = undefined;






export default QuoteProductList;

