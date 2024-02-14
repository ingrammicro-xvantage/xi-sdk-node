/**
 * XI Sdk Resellers
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
import ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner from './ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner';

/**
 * The ProductSearchResponseServiceresponseProductsearchresponseInner model module.
 * @module model/ProductSearchResponseServiceresponseProductsearchresponseInner
 * @version 1.0.0
 */
class ProductSearchResponseServiceresponseProductsearchresponseInner {
    /**
     * Constructs a new <code>ProductSearchResponseServiceresponseProductsearchresponseInner</code>.
     * @alias module:model/ProductSearchResponseServiceresponseProductsearchresponseInner
     */
    constructor() { 
        
        ProductSearchResponseServiceresponseProductsearchresponseInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductSearchResponseServiceresponseProductsearchresponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductSearchResponseServiceresponseProductsearchresponseInner} obj Optional instance to populate.
     * @return {module:model/ProductSearchResponseServiceresponseProductsearchresponseInner} The populated <code>ProductSearchResponseServiceresponseProductsearchresponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductSearchResponseServiceresponseProductsearchresponseInner();

            if (data.hasOwnProperty('responseflag')) {
                obj['responseflag'] = ApiClient.convertToType(data['responseflag'], 'String');
            }
            if (data.hasOwnProperty('partnumbers')) {
                obj['partnumbers'] = ApiClient.convertToType(data['partnumbers'], [ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductSearchResponseServiceresponseProductsearchresponseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductSearchResponseServiceresponseProductsearchresponseInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['responseflag'] && !(typeof data['responseflag'] === 'string' || data['responseflag'] instanceof String)) {
            throw new Error("Expected the field `responseflag` to be a primitive type in the JSON string but got " + data['responseflag']);
        }
        if (data['partnumbers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['partnumbers'])) {
                throw new Error("Expected the field `partnumbers` to be an array in the JSON data but got " + data['partnumbers']);
            }
            // validate the optional field `partnumbers` (array)
            for (const item of data['partnumbers']) {
                ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Number of records in the search result.
 * @member {String} responseflag
 */
ProductSearchResponseServiceresponseProductsearchresponseInner.prototype['responseflag'] = undefined;

/**
 * @member {Array.<module:model/ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner>} partnumbers
 */
ProductSearchResponseServiceresponseProductsearchresponseInner.prototype['partnumbers'] = undefined;






export default ProductSearchResponseServiceresponseProductsearchresponseInner;

