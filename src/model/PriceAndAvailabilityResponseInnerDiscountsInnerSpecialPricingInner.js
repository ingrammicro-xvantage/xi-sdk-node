/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of APIs and webhooks to craft a seamless journey for your customers.
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
 * The PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner model module.
 * @module model/PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner
 * @version 1.0.0
 */
class PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner</code>.
     * @alias module:model/PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner
     */
    constructor() { 
        
        PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner} The populated <code>PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner();

            if (data.hasOwnProperty('discountType')) {
                obj['discountType'] = ApiClient.convertToType(data['discountType'], 'String');
            }
            if (data.hasOwnProperty('specialBidNumer')) {
                obj['specialBidNumer'] = ApiClient.convertToType(data['specialBidNumer'], 'String');
            }
            if (data.hasOwnProperty('specialPricingDiscount')) {
                obj['specialPricingDiscount'] = ApiClient.convertToType(data['specialPricingDiscount'], 'Number');
            }
            if (data.hasOwnProperty('specialPricingEffectiveDate')) {
                obj['specialPricingEffectiveDate'] = ApiClient.convertToType(data['specialPricingEffectiveDate'], 'Date');
            }
            if (data.hasOwnProperty('specialPricingExpirationDate')) {
                obj['specialPricingExpirationDate'] = ApiClient.convertToType(data['specialPricingExpirationDate'], 'Date');
            }
            if (data.hasOwnProperty('specialPricingAvailableQuantity')) {
                obj['specialPricingAvailableQuantity'] = ApiClient.convertToType(data['specialPricingAvailableQuantity'], 'Number');
            }
            if (data.hasOwnProperty('specialPricingMinQuantity')) {
                obj['specialPricingMinQuantity'] = ApiClient.convertToType(data['specialPricingMinQuantity'], 'Number');
            }
            if (data.hasOwnProperty('governmentDiscountType')) {
                obj['governmentDiscountType'] = ApiClient.convertToType(data['governmentDiscountType'], 'String');
            }
            if (data.hasOwnProperty('governmentDiscountedCustomerPrice')) {
                obj['governmentDiscountedCustomerPrice'] = ApiClient.convertToType(data['governmentDiscountedCustomerPrice'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['discountType'] && !(typeof data['discountType'] === 'string' || data['discountType'] instanceof String)) {
            throw new Error("Expected the field `discountType` to be a primitive type in the JSON string but got " + data['discountType']);
        }
        // ensure the json data is a string
        if (data['specialBidNumer'] && !(typeof data['specialBidNumer'] === 'string' || data['specialBidNumer'] instanceof String)) {
            throw new Error("Expected the field `specialBidNumer` to be a primitive type in the JSON string but got " + data['specialBidNumer']);
        }
        // ensure the json data is a string
        if (data['governmentDiscountType'] && !(typeof data['governmentDiscountType'] === 'string' || data['governmentDiscountType'] instanceof String)) {
            throw new Error("Expected the field `governmentDiscountType` to be a primitive type in the JSON string but got " + data['governmentDiscountType']);
        }

        return true;
    }


}



/**
 * The type of discount being given to the customer.
 * @member {String} discountType
 */
PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner.prototype['discountType'] = undefined;

/**
 * Pre-approved special pricing/bid number provided to the reseller by the vendor for special pricing and discounts. Used to track the bid number where different line items have different bid numbers. Line-level bid numbers take precedence over header-level bid numbers.
 * @member {String} specialBidNumer
 */
PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner.prototype['specialBidNumer'] = undefined;

/**
 * Special pricing discount amount given to the customer.
 * @member {Number} specialPricingDiscount
 */
PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner.prototype['specialPricingDiscount'] = undefined;

/**
 * The effective date of the special pricing available to the customer.
 * @member {Date} specialPricingEffectiveDate
 */
PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner.prototype['specialPricingEffectiveDate'] = undefined;

/**
 * The expiration date of the special pricing available to the customer.
 * @member {Date} specialPricingExpirationDate
 */
PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner.prototype['specialPricingExpirationDate'] = undefined;

/**
 * The available quantity of products with discounts.
 * @member {Number} specialPricingAvailableQuantity
 */
PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner.prototype['specialPricingAvailableQuantity'] = undefined;

/**
 * The minimum quantity of products that have to be purchased to ensure the discount is applied.
 * @member {Number} specialPricingMinQuantity
 */
PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner.prototype['specialPricingMinQuantity'] = undefined;

/**
 * Type of Government Discount. *Currently, this discount is only available in the USA.
 * @member {String} governmentDiscountType
 */
PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner.prototype['governmentDiscountType'] = undefined;

/**
 * Government Discounted Customer Price. *Currently, this discount is only available in the USA.
 * @member {Number} governmentDiscountedCustomerPrice
 */
PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner.prototype['governmentDiscountedCustomerPrice'] = undefined;






export default PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner;

