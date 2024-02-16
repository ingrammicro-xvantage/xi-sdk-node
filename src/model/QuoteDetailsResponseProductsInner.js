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
import QuoteDetailsResponseProductsInnerPrice from './QuoteDetailsResponseProductsInnerPrice';

/**
 * The QuoteDetailsResponseProductsInner model module.
 * @module model/QuoteDetailsResponseProductsInner
 * @version 1.0.0
 */
class QuoteDetailsResponseProductsInner {
    /**
     * Constructs a new <code>QuoteDetailsResponseProductsInner</code>.
     * @alias module:model/QuoteDetailsResponseProductsInner
     */
    constructor() { 
        
        QuoteDetailsResponseProductsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteDetailsResponseProductsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetailsResponseProductsInner} obj Optional instance to populate.
     * @return {module:model/QuoteDetailsResponseProductsInner} The populated <code>QuoteDetailsResponseProductsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteDetailsResponseProductsInner();

            if (data.hasOwnProperty('quoteProductGuid')) {
                obj['quoteProductGuid'] = ApiClient.convertToType(data['quoteProductGuid'], 'String');
            }
            if (data.hasOwnProperty('lineNumber')) {
                obj['lineNumber'] = ApiClient.convertToType(data['lineNumber'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('EAN')) {
                obj['EAN'] = ApiClient.convertToType(data['EAN'], 'String');
            }
            if (data.hasOwnProperty('CoO')) {
                obj['CoO'] = ApiClient.convertToType(data['CoO'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('weightUom')) {
                obj['weightUom'] = ApiClient.convertToType(data['weightUom'], 'String');
            }
            if (data.hasOwnProperty('isSuggestionProduct')) {
                obj['isSuggestionProduct'] = ApiClient.convertToType(data['isSuggestionProduct'], 'Boolean');
            }
            if (data.hasOwnProperty('vpnCategory')) {
                obj['vpnCategory'] = ApiClient.convertToType(data['vpnCategory'], 'String');
            }
            if (data.hasOwnProperty('quoteProductsSupplierPartAuxiliaryId')) {
                obj['quoteProductsSupplierPartAuxiliaryId'] = ApiClient.convertToType(data['quoteProductsSupplierPartAuxiliaryId'], 'String');
            }
            if (data.hasOwnProperty('vendorName')) {
                obj['vendorName'] = ApiClient.convertToType(data['vendorName'], 'String');
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = QuoteDetailsResponseProductsInnerPrice.constructFromObject(data['price']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetailsResponseProductsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetailsResponseProductsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['quoteProductGuid'] && !(typeof data['quoteProductGuid'] === 'string' || data['quoteProductGuid'] instanceof String)) {
            throw new Error("Expected the field `quoteProductGuid` to be a primitive type in the JSON string but got " + data['quoteProductGuid']);
        }
        // ensure the json data is a string
        if (data['lineNumber'] && !(typeof data['lineNumber'] === 'string' || data['lineNumber'] instanceof String)) {
            throw new Error("Expected the field `lineNumber` to be a primitive type in the JSON string but got " + data['lineNumber']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // ensure the json data is a string
        if (data['EAN'] && !(typeof data['EAN'] === 'string' || data['EAN'] instanceof String)) {
            throw new Error("Expected the field `EAN` to be a primitive type in the JSON string but got " + data['EAN']);
        }
        // ensure the json data is a string
        if (data['CoO'] && !(typeof data['CoO'] === 'string' || data['CoO'] instanceof String)) {
            throw new Error("Expected the field `CoO` to be a primitive type in the JSON string but got " + data['CoO']);
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
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['weightUom'] && !(typeof data['weightUom'] === 'string' || data['weightUom'] instanceof String)) {
            throw new Error("Expected the field `weightUom` to be a primitive type in the JSON string but got " + data['weightUom']);
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
        if (data['vendorName'] && !(typeof data['vendorName'] === 'string' || data['vendorName'] instanceof String)) {
            throw new Error("Expected the field `vendorName` to be a primitive type in the JSON string but got " + data['vendorName']);
        }
        // ensure the json data is a string
        if (data['terms'] && !(typeof data['terms'] === 'string' || data['terms'] instanceof String)) {
            throw new Error("Expected the field `terms` to be a primitive type in the JSON string but got " + data['terms']);
        }
        // validate the optional field `price`
        if (data['price']) { // data not null
          QuoteDetailsResponseProductsInnerPrice.validateJSON(data['price']);
        }

        return true;
    }


}



/**
 * Quote Product GUID  is the primary quote key in Ingram Micro's CRM - needed to retrieve quote details.
 * @member {String} quoteProductGuid
 */
QuoteDetailsResponseProductsInner.prototype['quoteProductGuid'] = undefined;

/**
 * Line number which the product will appear in the quote.  Line number is manditory when unique configurations are included in a quote and mainting the item line order is required.
 * @member {String} lineNumber
 */
QuoteDetailsResponseProductsInner.prototype['lineNumber'] = undefined;

/**
 * Quantity of product line item quoted.
 * @member {Number} quantity
 */
QuoteDetailsResponseProductsInner.prototype['quantity'] = undefined;

/**
 * Product line item comments.
 * @member {String} notes
 */
QuoteDetailsResponseProductsInner.prototype['notes'] = undefined;

/**
 * EANUPC
 * @member {String} EAN
 */
QuoteDetailsResponseProductsInner.prototype['EAN'] = undefined;

/**
 * Country of Origin.
 * @member {String} CoO
 */
QuoteDetailsResponseProductsInner.prototype['CoO'] = undefined;

/**
 * Ingram Micro SKU (stock keeping unit). An identification, usually alphanumeric, of a particular product that allows it to be tracked for inventory purposes
 * @member {String} ingramPartNumber
 */
QuoteDetailsResponseProductsInner.prototype['ingramPartNumber'] = undefined;

/**
 * Vendor Part Number
 * @member {String} vendorPartNumber
 */
QuoteDetailsResponseProductsInner.prototype['vendorPartNumber'] = undefined;

/**
 * Product description.  Note - The quote view api returns only the product short description as maintained in Ingram Micro's crm system.  For long descriptions, please refer to alternative information sources.
 * @member {String} description
 */
QuoteDetailsResponseProductsInner.prototype['description'] = undefined;

/**
 * Weight is provided based on country standard.  For countries following Imperial standards - weight is presented as pounds with decimal.  In countries following metric standards, weight is provided as kilograms with decimal.
 * @member {Number} weight
 */
QuoteDetailsResponseProductsInner.prototype['weight'] = undefined;

/**
 * Unit of measure
 * @member {String} weightUom
 */
QuoteDetailsResponseProductsInner.prototype['weightUom'] = undefined;

/**
 * Flag to indicate if a product line item is a suggested product.  The suggested product is provided in addition to the requested quoted products and a suggested option.  Suggested products are grouped together for subtotal and total calculations.
 * @member {Boolean} isSuggestionProduct
 */
QuoteDetailsResponseProductsInner.prototype['isSuggestionProduct'] = undefined;

/**
 * Vendor product category specific to Cisco. HWDW (hardware) or service.
 * @member {String} vpnCategory
 */
QuoteDetailsResponseProductsInner.prototype['vpnCategory'] = undefined;

/**
 * Vendor product configuration ID specific to Cisco.
 * @member {String} quoteProductsSupplierPartAuxiliaryId
 */
QuoteDetailsResponseProductsInner.prototype['quoteProductsSupplierPartAuxiliaryId'] = undefined;

/**
 * Vendor name of the product
 * @member {String} vendorName
 */
QuoteDetailsResponseProductsInner.prototype['vendorName'] = undefined;

/**
 * Terms of the quote
 * @member {String} terms
 */
QuoteDetailsResponseProductsInner.prototype['terms'] = undefined;

/**
 * @member {module:model/QuoteDetailsResponseProductsInnerPrice} price
 */
QuoteDetailsResponseProductsInner.prototype['price'] = undefined;






export default QuoteDetailsResponseProductsInner;

