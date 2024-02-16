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
 * The ProductDetailResponseIndicators model module.
 * @module model/ProductDetailResponseIndicators
 * @version 1.0.0
 */
class ProductDetailResponseIndicators {
    /**
     * Constructs a new <code>ProductDetailResponseIndicators</code>.
     * Indicators of the Product
     * @alias module:model/ProductDetailResponseIndicators
     */
    constructor() { 
        
        ProductDetailResponseIndicators.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductDetailResponseIndicators</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductDetailResponseIndicators} obj Optional instance to populate.
     * @return {module:model/ProductDetailResponseIndicators} The populated <code>ProductDetailResponseIndicators</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductDetailResponseIndicators();

            if (data.hasOwnProperty('hasWarranty')) {
                obj['hasWarranty'] = ApiClient.convertToType(data['hasWarranty'], 'Boolean');
            }
            if (data.hasOwnProperty('isNewProduct')) {
                obj['isNewProduct'] = ApiClient.convertToType(data['isNewProduct'], 'Boolean');
            }
            if (data.hasOwnProperty('HasReturnLimits')) {
                obj['HasReturnLimits'] = ApiClient.convertToType(data['HasReturnLimits'], 'Boolean');
            }
            if (data.hasOwnProperty('IsBackOrderAllowed')) {
                obj['IsBackOrderAllowed'] = ApiClient.convertToType(data['IsBackOrderAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('isShippedFromPartner')) {
                obj['isShippedFromPartner'] = ApiClient.convertToType(data['isShippedFromPartner'], 'Boolean');
            }
            if (data.hasOwnProperty('isReplacementProduct')) {
                obj['isReplacementProduct'] = ApiClient.convertToType(data['isReplacementProduct'], 'Boolean');
            }
            if (data.hasOwnProperty('isDirectship')) {
                obj['isDirectship'] = ApiClient.convertToType(data['isDirectship'], 'Boolean');
            }
            if (data.hasOwnProperty('isDownloadable')) {
                obj['isDownloadable'] = ApiClient.convertToType(data['isDownloadable'], 'Boolean');
            }
            if (data.hasOwnProperty('isDigitalType')) {
                obj['isDigitalType'] = ApiClient.convertToType(data['isDigitalType'], 'Boolean');
            }
            if (data.hasOwnProperty('skuType')) {
                obj['skuType'] = ApiClient.convertToType(data['skuType'], 'String');
            }
            if (data.hasOwnProperty('hasStdSpecialPrice')) {
                obj['hasStdSpecialPrice'] = ApiClient.convertToType(data['hasStdSpecialPrice'], 'Boolean');
            }
            if (data.hasOwnProperty('hasAcopSpecialPrice')) {
                obj['hasAcopSpecialPrice'] = ApiClient.convertToType(data['hasAcopSpecialPrice'], 'Boolean');
            }
            if (data.hasOwnProperty('hasAcopQuantityBreak')) {
                obj['hasAcopQuantityBreak'] = ApiClient.convertToType(data['hasAcopQuantityBreak'], 'Boolean');
            }
            if (data.hasOwnProperty('hasStdWebDiscount')) {
                obj['hasStdWebDiscount'] = ApiClient.convertToType(data['hasStdWebDiscount'], 'Boolean');
            }
            if (data.hasOwnProperty('hasSpecialBid')) {
                obj['hasSpecialBid'] = ApiClient.convertToType(data['hasSpecialBid'], 'Boolean');
            }
            if (data.hasOwnProperty('isExportableToCountry')) {
                obj['isExportableToCountry'] = ApiClient.convertToType(data['isExportableToCountry'], 'Boolean');
            }
            if (data.hasOwnProperty('isDiscontinuedProduct')) {
                obj['isDiscontinuedProduct'] = ApiClient.convertToType(data['isDiscontinuedProduct'], 'Boolean');
            }
            if (data.hasOwnProperty('isRefurbishedProduct')) {
                obj['isRefurbishedProduct'] = ApiClient.convertToType(data['isRefurbishedProduct'], 'Boolean');
            }
            if (data.hasOwnProperty('isReturnableProduct')) {
                obj['isReturnableProduct'] = ApiClient.convertToType(data['isReturnableProduct'], 'Boolean');
            }
            if (data.hasOwnProperty('isIngramShip')) {
                obj['isIngramShip'] = ApiClient.convertToType(data['isIngramShip'], 'Boolean');
            }
            if (data.hasOwnProperty('isEnduserRequired')) {
                obj['isEnduserRequired'] = ApiClient.convertToType(data['isEnduserRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('isHeavyWeight')) {
                obj['isHeavyWeight'] = ApiClient.convertToType(data['isHeavyWeight'], 'Boolean');
            }
            if (data.hasOwnProperty('hasLtl')) {
                obj['hasLtl'] = ApiClient.convertToType(data['hasLtl'], 'Boolean');
            }
            if (data.hasOwnProperty('isClearanceProduct')) {
                obj['isClearanceProduct'] = ApiClient.convertToType(data['isClearanceProduct'], 'Boolean');
            }
            if (data.hasOwnProperty('hasBundle')) {
                obj['hasBundle'] = ApiClient.convertToType(data['hasBundle'], 'Boolean');
            }
            if (data.hasOwnProperty('isOversizeProduct')) {
                obj['isOversizeProduct'] = ApiClient.convertToType(data['isOversizeProduct'], 'Boolean');
            }
            if (data.hasOwnProperty('isPreorderProduct')) {
                obj['isPreorderProduct'] = ApiClient.convertToType(data['isPreorderProduct'], 'Boolean');
            }
            if (data.hasOwnProperty('isLicenseProduct')) {
                obj['isLicenseProduct'] = ApiClient.convertToType(data['isLicenseProduct'], 'Boolean');
            }
            if (data.hasOwnProperty('isDirectshipOrderable')) {
                obj['isDirectshipOrderable'] = ApiClient.convertToType(data['isDirectshipOrderable'], 'Boolean');
            }
            if (data.hasOwnProperty('isServiceSku')) {
                obj['isServiceSku'] = ApiClient.convertToType(data['isServiceSku'], 'Boolean');
            }
            if (data.hasOwnProperty('isConfigurable')) {
                obj['isConfigurable'] = ApiClient.convertToType(data['isConfigurable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductDetailResponseIndicators</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductDetailResponseIndicators</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['skuType'] && !(typeof data['skuType'] === 'string' || data['skuType'] instanceof String)) {
            throw new Error("Expected the field `skuType` to be a primitive type in the JSON string but got " + data['skuType']);
        }

        return true;
    }


}



/**
 * Boolean that indicates whether product has a warranty.
 * @member {Boolean} hasWarranty
 */
ProductDetailResponseIndicators.prototype['hasWarranty'] = undefined;

/**
 * Boolean that indicates whether it’s a new product. 
 * @member {Boolean} isNewProduct
 */
ProductDetailResponseIndicators.prototype['isNewProduct'] = undefined;

/**
 * Boolean that indicates whether there is any limit to return the product.
 * @member {Boolean} HasReturnLimits
 */
ProductDetailResponseIndicators.prototype['HasReturnLimits'] = undefined;

/**
 * Boolean that indicates whether back order is allowed for the product.
 * @member {Boolean} IsBackOrderAllowed
 */
ProductDetailResponseIndicators.prototype['IsBackOrderAllowed'] = undefined;

/**
 * Boolean that indicates whether product is shipped from the partner.
 * @member {Boolean} isShippedFromPartner
 */
ProductDetailResponseIndicators.prototype['isShippedFromPartner'] = undefined;

/**
 * Boolean that indicates whether product is a replacement product.
 * @member {Boolean} isReplacementProduct
 */
ProductDetailResponseIndicators.prototype['isReplacementProduct'] = undefined;

/**
 * Boolean that indicates whether it’s a direct ship product.
 * @member {Boolean} isDirectship
 */
ProductDetailResponseIndicators.prototype['isDirectship'] = undefined;

/**
 * Boolean that indicates whether product is downloadable.
 * @member {Boolean} isDownloadable
 */
ProductDetailResponseIndicators.prototype['isDownloadable'] = undefined;

/**
 * Boolean that indicates whether it’s a digital product. 
 * @member {Boolean} isDigitalType
 */
ProductDetailResponseIndicators.prototype['isDigitalType'] = undefined;

/**
 * skutype
 * @member {String} skuType
 */
ProductDetailResponseIndicators.prototype['skuType'] = undefined;

/**
 * Boolean that indicates whether product has any standard special price.
 * @member {Boolean} hasStdSpecialPrice
 */
ProductDetailResponseIndicators.prototype['hasStdSpecialPrice'] = undefined;

/**
 * Boolean that indicates whether product has any ACOP special price.
 * @member {Boolean} hasAcopSpecialPrice
 */
ProductDetailResponseIndicators.prototype['hasAcopSpecialPrice'] = undefined;

/**
 * Boolean that indicates whether product has any ACOP quantity break.
 * @member {Boolean} hasAcopQuantityBreak
 */
ProductDetailResponseIndicators.prototype['hasAcopQuantityBreak'] = undefined;

/**
 * Boolean that indicates whether product has any standard web discount.
 * @member {Boolean} hasStdWebDiscount
 */
ProductDetailResponseIndicators.prototype['hasStdWebDiscount'] = undefined;

/**
 * Boolean that indicates whether product has any special bid.
 * @member {Boolean} hasSpecialBid
 */
ProductDetailResponseIndicators.prototype['hasSpecialBid'] = undefined;

/**
 * Boolean that indicates whether product is exportable.
 * @member {Boolean} isExportableToCountry
 */
ProductDetailResponseIndicators.prototype['isExportableToCountry'] = undefined;

/**
 * Boolean that indicates whether it’s a discontinued product.
 * @member {Boolean} isDiscontinuedProduct
 */
ProductDetailResponseIndicators.prototype['isDiscontinuedProduct'] = undefined;

/**
 * Boolean that indicates whether product is refurbished.
 * @member {Boolean} isRefurbishedProduct
 */
ProductDetailResponseIndicators.prototype['isRefurbishedProduct'] = undefined;

/**
 * Boolean that indicates if the product can be returned.
 * @member {Boolean} isReturnableProduct
 */
ProductDetailResponseIndicators.prototype['isReturnableProduct'] = undefined;

/**
 * Boolean that indicates whether it’s a Ingram shipped product.
 * @member {Boolean} isIngramShip
 */
ProductDetailResponseIndicators.prototype['isIngramShip'] = undefined;

/**
 * Do vendor requires Enduser name required to create an order.
 * @member {Boolean} isEnduserRequired
 */
ProductDetailResponseIndicators.prototype['isEnduserRequired'] = undefined;

/**
 * Boolean that indicates whether it’s  heavy weight product.
 * @member {Boolean} isHeavyWeight
 */
ProductDetailResponseIndicators.prototype['isHeavyWeight'] = undefined;

/**
 * Boolean that indicates whether it hasLtl or not.
 * @member {Boolean} hasLtl
 */
ProductDetailResponseIndicators.prototype['hasLtl'] = undefined;

/**
 * Boolean that indicates whether it’s clearnce product.
 * @member {Boolean} isClearanceProduct
 */
ProductDetailResponseIndicators.prototype['isClearanceProduct'] = undefined;

/**
 * Boolean that indicates whether it’s a bundled product.
 * @member {Boolean} hasBundle
 */
ProductDetailResponseIndicators.prototype['hasBundle'] = undefined;

/**
 * Boolean that indicates whether it’s oversized product.
 * @member {Boolean} isOversizeProduct
 */
ProductDetailResponseIndicators.prototype['isOversizeProduct'] = undefined;

/**
 * Boolean that indicates whether it’s a preorder product.
 * @member {Boolean} isPreorderProduct
 */
ProductDetailResponseIndicators.prototype['isPreorderProduct'] = undefined;

/**
 * Boolean that indicates whether it’s a licened product.
 * @member {Boolean} isLicenseProduct
 */
ProductDetailResponseIndicators.prototype['isLicenseProduct'] = undefined;

/**
 * Boolean that indicates whether product is directship orderable.
 * @member {Boolean} isDirectshipOrderable
 */
ProductDetailResponseIndicators.prototype['isDirectshipOrderable'] = undefined;

/**
 * Boolean that indicates whether product is service SKU.
 * @member {Boolean} isServiceSku
 */
ProductDetailResponseIndicators.prototype['isServiceSku'] = undefined;

/**
 * Boolean that indicates whether product is configurable.
 * @member {Boolean} isConfigurable
 */
ProductDetailResponseIndicators.prototype['isConfigurable'] = undefined;






export default ProductDetailResponseIndicators;

