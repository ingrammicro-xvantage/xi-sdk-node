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
import PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner from './PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner';
import PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner from './PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner';

/**
 * The PriceAndAvailabilityResponseInnerDiscountsInner model module.
 * @module model/PriceAndAvailabilityResponseInnerDiscountsInner
 * @version 1.0.0
 */
class PriceAndAvailabilityResponseInnerDiscountsInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityResponseInnerDiscountsInner</code>.
     * @alias module:model/PriceAndAvailabilityResponseInnerDiscountsInner
     */
    constructor() { 
        
        PriceAndAvailabilityResponseInnerDiscountsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityResponseInnerDiscountsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityResponseInnerDiscountsInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityResponseInnerDiscountsInner} The populated <code>PriceAndAvailabilityResponseInnerDiscountsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityResponseInnerDiscountsInner();

            if (data.hasOwnProperty('specialPricing')) {
                obj['specialPricing'] = ApiClient.convertToType(data['specialPricing'], [PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner]);
            }
            if (data.hasOwnProperty('quantityDiscounts')) {
                obj['quantityDiscounts'] = ApiClient.convertToType(data['quantityDiscounts'], [PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityResponseInnerDiscountsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityResponseInnerDiscountsInner</code>.
     */
    static validateJSON(data) {
        if (data['specialPricing']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['specialPricing'])) {
                throw new Error("Expected the field `specialPricing` to be an array in the JSON data but got " + data['specialPricing']);
            }
            // validate the optional field `specialPricing` (array)
            for (const item of data['specialPricing']) {
                PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner.validateJSON(item);
            };
        }
        if (data['quantityDiscounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['quantityDiscounts'])) {
                throw new Error("Expected the field `quantityDiscounts` to be an array in the JSON data but got " + data['quantityDiscounts']);
            }
            // validate the optional field `quantityDiscounts` (array)
            for (const item of data['quantityDiscounts']) {
                PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner>} specialPricing
 */
PriceAndAvailabilityResponseInnerDiscountsInner.prototype['specialPricing'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner>} quantityDiscounts
 */
PriceAndAvailabilityResponseInnerDiscountsInner.prototype['quantityDiscounts'] = undefined;






export default PriceAndAvailabilityResponseInnerDiscountsInner;

