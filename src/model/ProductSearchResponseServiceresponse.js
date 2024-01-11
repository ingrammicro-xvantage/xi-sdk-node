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
import ProductSearchResponseServiceresponseProductsearchresponseInner from './ProductSearchResponseServiceresponseProductsearchresponseInner';
import ProductSearchResponseServiceresponseResponsepreamble from './ProductSearchResponseServiceresponseResponsepreamble';

/**
 * The ProductSearchResponseServiceresponse model module.
 * @module model/ProductSearchResponseServiceresponse
 * @version 6.0
 */
class ProductSearchResponseServiceresponse {
    /**
     * Constructs a new <code>ProductSearchResponseServiceresponse</code>.
     * @alias module:model/ProductSearchResponseServiceresponse
     */
    constructor() { 
        
        ProductSearchResponseServiceresponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductSearchResponseServiceresponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductSearchResponseServiceresponse} obj Optional instance to populate.
     * @return {module:model/ProductSearchResponseServiceresponse} The populated <code>ProductSearchResponseServiceresponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductSearchResponseServiceresponse();

            if (data.hasOwnProperty('responsepreamble')) {
                obj['responsepreamble'] = ProductSearchResponseServiceresponseResponsepreamble.constructFromObject(data['responsepreamble']);
            }
            if (data.hasOwnProperty('productsearchresponse')) {
                obj['productsearchresponse'] = ApiClient.convertToType(data['productsearchresponse'], [ProductSearchResponseServiceresponseProductsearchresponseInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductSearchResponseServiceresponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductSearchResponseServiceresponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `responsepreamble`
        if (data['responsepreamble']) { // data not null
          ProductSearchResponseServiceresponseResponsepreamble.validateJSON(data['responsepreamble']);
        }
        if (data['productsearchresponse']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['productsearchresponse'])) {
                throw new Error("Expected the field `productsearchresponse` to be an array in the JSON data but got " + data['productsearchresponse']);
            }
            // validate the optional field `productsearchresponse` (array)
            for (const item of data['productsearchresponse']) {
                ProductSearchResponseServiceresponseProductsearchresponseInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/ProductSearchResponseServiceresponseResponsepreamble} responsepreamble
 */
ProductSearchResponseServiceresponse.prototype['responsepreamble'] = undefined;

/**
 * @member {Array.<module:model/ProductSearchResponseServiceresponseProductsearchresponseInner>} productsearchresponse
 */
ProductSearchResponseServiceresponse.prototype['productsearchresponse'] = undefined;






export default ProductSearchResponseServiceresponse;

