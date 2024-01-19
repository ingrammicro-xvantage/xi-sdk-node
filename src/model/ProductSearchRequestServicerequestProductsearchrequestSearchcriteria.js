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
 * The ProductSearchRequestServicerequestProductsearchrequestSearchcriteria model module.
 * @module model/ProductSearchRequestServicerequestProductsearchrequestSearchcriteria
 * @version 6.0
 */
class ProductSearchRequestServicerequestProductsearchrequestSearchcriteria {
    /**
     * Constructs a new <code>ProductSearchRequestServicerequestProductsearchrequestSearchcriteria</code>.
     * @alias module:model/ProductSearchRequestServicerequestProductsearchrequestSearchcriteria
     */
    constructor() { 
        
        ProductSearchRequestServicerequestProductsearchrequestSearchcriteria.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductSearchRequestServicerequestProductsearchrequestSearchcriteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductSearchRequestServicerequestProductsearchrequestSearchcriteria} obj Optional instance to populate.
     * @return {module:model/ProductSearchRequestServicerequestProductsearchrequestSearchcriteria} The populated <code>ProductSearchRequestServicerequestProductsearchrequestSearchcriteria</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductSearchRequestServicerequestProductsearchrequestSearchcriteria();

            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('vendorpartnumber')) {
                obj['vendorpartnumber'] = ApiClient.convertToType(data['vendorpartnumber'], 'String');
            }
            if (data.hasOwnProperty('partdescription')) {
                obj['partdescription'] = ApiClient.convertToType(data['partdescription'], 'String');
            }
            if (data.hasOwnProperty('UPC')) {
                obj['UPC'] = ApiClient.convertToType(data['UPC'], 'String');
            }
            if (data.hasOwnProperty('customerpartnumber')) {
                obj['customerpartnumber'] = ApiClient.convertToType(data['customerpartnumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductSearchRequestServicerequestProductsearchrequestSearchcriteria</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductSearchRequestServicerequestProductsearchrequestSearchcriteria</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['vendor'] && !(typeof data['vendor'] === 'string' || data['vendor'] instanceof String)) {
            throw new Error("Expected the field `vendor` to be a primitive type in the JSON string but got " + data['vendor']);
        }
        // ensure the json data is a string
        if (data['vendorpartnumber'] && !(typeof data['vendorpartnumber'] === 'string' || data['vendorpartnumber'] instanceof String)) {
            throw new Error("Expected the field `vendorpartnumber` to be a primitive type in the JSON string but got " + data['vendorpartnumber']);
        }
        // ensure the json data is a string
        if (data['partdescription'] && !(typeof data['partdescription'] === 'string' || data['partdescription'] instanceof String)) {
            throw new Error("Expected the field `partdescription` to be a primitive type in the JSON string but got " + data['partdescription']);
        }
        // ensure the json data is a string
        if (data['UPC'] && !(typeof data['UPC'] === 'string' || data['UPC'] instanceof String)) {
            throw new Error("Expected the field `UPC` to be a primitive type in the JSON string but got " + data['UPC']);
        }
        // ensure the json data is a string
        if (data['customerpartnumber'] && !(typeof data['customerpartnumber'] === 'string' || data['customerpartnumber'] instanceof String)) {
            throw new Error("Expected the field `customerpartnumber` to be a primitive type in the JSON string but got " + data['customerpartnumber']);
        }

        return true;
    }


}



/**
 * Name of the vendor or manufacturer or brand of the product
 * @member {String} vendor
 */
ProductSearchRequestServicerequestProductsearchrequestSearchcriteria.prototype['vendor'] = undefined;

/**
 * Vendor provided part number
 * @member {String} vendorpartnumber
 */
ProductSearchRequestServicerequestProductsearchrequestSearchcriteria.prototype['vendorpartnumber'] = undefined;

/**
 * This field seraches the decriptioon of the product.
 * @member {String} partdescription
 */
ProductSearchRequestServicerequestProductsearchrequestSearchcriteria.prototype['partdescription'] = undefined;

/**
 * Universal Product Code
 * @member {String} UPC
 */
ProductSearchRequestServicerequestProductsearchrequestSearchcriteria.prototype['UPC'] = undefined;

/**
 * Customer’s designated part number 
 * @member {String} customerpartnumber
 */
ProductSearchRequestServicerequestProductsearchrequestSearchcriteria.prototype['customerpartnumber'] = undefined;






export default ProductSearchRequestServicerequestProductsearchrequestSearchcriteria;

