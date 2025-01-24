/**
 * XI Sdk Resellers
 * For Resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
import PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner from './PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner';
import PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerFeesInner from './PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerFeesInner';
import PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner from './PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner';

/**
 * The PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner model module.
 * @module model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner
 * @version 1.0.0
 */
class PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner</code>.
     * @alias module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner
     */
    constructor() { 
        
        PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner} The populated <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'String');
            }
            if (data.hasOwnProperty('resourceUId')) {
                obj['resourceUId'] = ApiClient.convertToType(data['resourceUId'], 'String');
            }
            if (data.hasOwnProperty('resourceName')) {
                obj['resourceName'] = ApiClient.convertToType(data['resourceName'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('minUnits')) {
                obj['minUnits'] = ApiClient.convertToType(data['minUnits'], 'Number');
            }
            if (data.hasOwnProperty('maxUnits')) {
                obj['maxUnits'] = ApiClient.convertToType(data['maxUnits'], 'Number');
            }
            if (data.hasOwnProperty('recurringpricemodel')) {
                obj['recurringpricemodel'] = ApiClient.convertToType(data['recurringpricemodel'], 'String');
            }
            if (data.hasOwnProperty('unitOfMeasure')) {
                obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
            }
            if (data.hasOwnProperty('resourcePricing')) {
                obj['resourcePricing'] = ApiClient.convertToType(data['resourcePricing'], [PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner]);
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], [PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner]);
            }
            if (data.hasOwnProperty('fees')) {
                obj['fees'] = ApiClient.convertToType(data['fees'], [PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerFeesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['resourceId'] && !(typeof data['resourceId'] === 'string' || data['resourceId'] instanceof String)) {
            throw new Error("Expected the field `resourceId` to be a primitive type in the JSON string but got " + data['resourceId']);
        }
        // ensure the json data is a string
        if (data['resourceUId'] && !(typeof data['resourceUId'] === 'string' || data['resourceUId'] instanceof String)) {
            throw new Error("Expected the field `resourceUId` to be a primitive type in the JSON string but got " + data['resourceUId']);
        }
        // ensure the json data is a string
        if (data['resourceName'] && !(typeof data['resourceName'] === 'string' || data['resourceName'] instanceof String)) {
            throw new Error("Expected the field `resourceName` to be a primitive type in the JSON string but got " + data['resourceName']);
        }
        // ensure the json data is a string
        if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
        }
        // ensure the json data is a string
        if (data['recurringpricemodel'] && !(typeof data['recurringpricemodel'] === 'string' || data['recurringpricemodel'] instanceof String)) {
            throw new Error("Expected the field `recurringpricemodel` to be a primitive type in the JSON string but got " + data['recurringpricemodel']);
        }
        // ensure the json data is a string
        if (data['unitOfMeasure'] && !(typeof data['unitOfMeasure'] === 'string' || data['unitOfMeasure'] instanceof String)) {
            throw new Error("Expected the field `unitOfMeasure` to be a primitive type in the JSON string but got " + data['unitOfMeasure']);
        }
        if (data['resourcePricing']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['resourcePricing'])) {
                throw new Error("Expected the field `resourcePricing` to be an array in the JSON data but got " + data['resourcePricing']);
            }
            // validate the optional field `resourcePricing` (array)
            for (const item of data['resourcePricing']) {
                PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner.validateJSON(item);
            };
        }
        if (data['discounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['discounts'])) {
                throw new Error("Expected the field `discounts` to be an array in the JSON data but got " + data['discounts']);
            }
            // validate the optional field `discounts` (array)
            for (const item of data['discounts']) {
                PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner.validateJSON(item);
            };
        }
        if (data['fees']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fees'])) {
                throw new Error("Expected the field `fees` to be an array in the JSON data but got " + data['fees']);
            }
            // validate the optional field `fees` (array)
            for (const item of data['fees']) {
                PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerFeesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} resourceId
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner.prototype['resourceId'] = undefined;

/**
 * The resource id of the subscription product.
 * @member {String} resourceUId
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner.prototype['resourceUId'] = undefined;

/**
 * The name of the resource of the subscription product.
 * @member {String} resourceName
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner.prototype['resourceName'] = undefined;

/**
 * Vendor’s part number for the subscription product.
 * @member {String} vendorPartNumber
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner.prototype['vendorPartNumber'] = undefined;

/**
 * Minimum unit needs to purchased.
 * @member {Number} minUnits
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner.prototype['minUnits'] = undefined;

/**
 * Maximum unit available for a purchase.
 * @member {Number} maxUnits
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner.prototype['maxUnits'] = undefined;

/**
 * Recurring price model
 * @member {String} recurringpricemodel
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner.prototype['recurringpricemodel'] = undefined;

/**
 * Unit of mesaure for a subscription product.
 * @member {String} unitOfMeasure
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner.prototype['unitOfMeasure'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner>} resourcePricing
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner.prototype['resourcePricing'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner>} discounts
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner.prototype['discounts'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerFeesInner>} fees
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner.prototype['fees'] = undefined;






export default PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInner;

