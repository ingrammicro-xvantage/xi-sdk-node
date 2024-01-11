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
 * The RenewalsDetailsResponseProductsInner model module.
 * @module model/RenewalsDetailsResponseProductsInner
 * @version 6.0
 */
class RenewalsDetailsResponseProductsInner {
    /**
     * Constructs a new <code>RenewalsDetailsResponseProductsInner</code>.
     * @alias module:model/RenewalsDetailsResponseProductsInner
     */
    constructor() { 
        
        RenewalsDetailsResponseProductsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenewalsDetailsResponseProductsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewalsDetailsResponseProductsInner} obj Optional instance to populate.
     * @return {module:model/RenewalsDetailsResponseProductsInner} The populated <code>RenewalsDetailsResponseProductsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenewalsDetailsResponseProductsInner();

            if (data.hasOwnProperty('ingramLineNumber')) {
                obj['ingramLineNumber'] = ApiClient.convertToType(data['ingramLineNumber'], 'String');
            }
            if (data.hasOwnProperty('productDescription')) {
                obj['productDescription'] = ApiClient.convertToType(data['productDescription'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('manufacturerPartNumber')) {
                obj['manufacturerPartNumber'] = ApiClient.convertToType(data['manufacturerPartNumber'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
            if (data.hasOwnProperty('isConsolidated')) {
                obj['isConsolidated'] = ApiClient.convertToType(data['isConsolidated'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RenewalsDetailsResponseProductsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RenewalsDetailsResponseProductsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ingramLineNumber'] && !(typeof data['ingramLineNumber'] === 'string' || data['ingramLineNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramLineNumber` to be a primitive type in the JSON string but got " + data['ingramLineNumber']);
        }
        // ensure the json data is a string
        if (data['productDescription'] && !(typeof data['productDescription'] === 'string' || data['productDescription'] instanceof String)) {
            throw new Error("Expected the field `productDescription` to be a primitive type in the JSON string but got " + data['productDescription']);
        }
        // ensure the json data is a string
        if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
        }
        // ensure the json data is a string
        if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
        }
        // ensure the json data is a string
        if (data['manufacturerPartNumber'] && !(typeof data['manufacturerPartNumber'] === 'string' || data['manufacturerPartNumber'] instanceof String)) {
            throw new Error("Expected the field `manufacturerPartNumber` to be a primitive type in the JSON string but got " + data['manufacturerPartNumber']);
        }
        // ensure the json data is a string
        if (data['quantity'] && !(typeof data['quantity'] === 'string' || data['quantity'] instanceof String)) {
            throw new Error("Expected the field `quantity` to be a primitive type in the JSON string but got " + data['quantity']);
        }
        // ensure the json data is a string
        if (data['isConsolidated'] && !(typeof data['isConsolidated'] === 'string' || data['isConsolidated'] instanceof String)) {
            throw new Error("Expected the field `isConsolidated` to be a primitive type in the JSON string but got " + data['isConsolidated']);
        }

        return true;
    }


}



/**
 * Unique Ingram Micro line number.
 * @member {String} ingramLineNumber
 */
RenewalsDetailsResponseProductsInner.prototype['ingramLineNumber'] = undefined;

/**
 * The description of the product.
 * @member {String} productDescription
 */
RenewalsDetailsResponseProductsInner.prototype['productDescription'] = undefined;

/**
 * The vendor's part number for the line item.
 * @member {String} vendorPartNumber
 */
RenewalsDetailsResponseProductsInner.prototype['vendorPartNumber'] = undefined;

/**
 * Unique IngramMicro part number.
 * @member {String} ingramPartNumber
 */
RenewalsDetailsResponseProductsInner.prototype['ingramPartNumber'] = undefined;

/**
 * The manufacturer's part number for the line item.
 * @member {String} manufacturerPartNumber
 */
RenewalsDetailsResponseProductsInner.prototype['manufacturerPartNumber'] = undefined;

/**
 * The quantity of the line item.
 * @member {String} quantity
 */
RenewalsDetailsResponseProductsInner.prototype['quantity'] = undefined;

/**
 * The unit price of the line item.
 * @member {Number} unitPrice
 */
RenewalsDetailsResponseProductsInner.prototype['unitPrice'] = undefined;

/**
 * Is the line item consolidated? Yes or No.
 * @member {String} isConsolidated
 */
RenewalsDetailsResponseProductsInner.prototype['isConsolidated'] = undefined;






export default RenewalsDetailsResponseProductsInner;

