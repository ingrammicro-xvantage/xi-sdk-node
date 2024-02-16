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
import PriceAndAvailabilityResponseInnerAvailability from './PriceAndAvailabilityResponseInnerAvailability';
import PriceAndAvailabilityResponseInnerDiscountsInner from './PriceAndAvailabilityResponseInnerDiscountsInner';
import PriceAndAvailabilityResponseInnerPricing from './PriceAndAvailabilityResponseInnerPricing';
import PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner from './PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner';
import PriceAndAvailabilityResponseInnerServiceFeesInner from './PriceAndAvailabilityResponseInnerServiceFeesInner';

/**
 * The PriceAndAvailabilityResponseInner model module.
 * @module model/PriceAndAvailabilityResponseInner
 * @version 1.0.0
 */
class PriceAndAvailabilityResponseInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityResponseInner</code>.
     * @alias module:model/PriceAndAvailabilityResponseInner
     */
    constructor() { 
        
        PriceAndAvailabilityResponseInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityResponseInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityResponseInner} The populated <code>PriceAndAvailabilityResponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityResponseInner();

            if (data.hasOwnProperty('productStatusCode')) {
                obj['productStatusCode'] = ApiClient.convertToType(data['productStatusCode'], 'String');
            }
            if (data.hasOwnProperty('productStatusMessage')) {
                obj['productStatusMessage'] = ApiClient.convertToType(data['productStatusMessage'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('extendedVendorPartNumber')) {
                obj['extendedVendorPartNumber'] = ApiClient.convertToType(data['extendedVendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('customerPartNumber')) {
                obj['customerPartNumber'] = ApiClient.convertToType(data['customerPartNumber'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('partNumberType')) {
                obj['partNumberType'] = ApiClient.convertToType(data['partNumberType'], 'String');
            }
            if (data.hasOwnProperty('vendorNumber')) {
                obj['vendorNumber'] = ApiClient.convertToType(data['vendorNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorName')) {
                obj['vendorName'] = ApiClient.convertToType(data['vendorName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('productClass')) {
                obj['productClass'] = ApiClient.convertToType(data['productClass'], 'String');
            }
            if (data.hasOwnProperty('uom')) {
                obj['uom'] = ApiClient.convertToType(data['uom'], 'String');
            }
            if (data.hasOwnProperty('productStatus')) {
                obj['productStatus'] = ApiClient.convertToType(data['productStatus'], 'String');
            }
            if (data.hasOwnProperty('acceptBackOrder')) {
                obj['acceptBackOrder'] = ApiClient.convertToType(data['acceptBackOrder'], 'Boolean');
            }
            if (data.hasOwnProperty('productAuthorized')) {
                obj['productAuthorized'] = ApiClient.convertToType(data['productAuthorized'], 'Boolean');
            }
            if (data.hasOwnProperty('returnableProduct')) {
                obj['returnableProduct'] = ApiClient.convertToType(data['returnableProduct'], 'Boolean');
            }
            if (data.hasOwnProperty('endUserInfoRequired')) {
                obj['endUserInfoRequired'] = ApiClient.convertToType(data['endUserInfoRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('govtSpecialPriceAvailable')) {
                obj['govtSpecialPriceAvailable'] = ApiClient.convertToType(data['govtSpecialPriceAvailable'], 'Boolean');
            }
            if (data.hasOwnProperty('govtProgramType')) {
                obj['govtProgramType'] = ApiClient.convertToType(data['govtProgramType'], 'String');
            }
            if (data.hasOwnProperty('govtEndUserType')) {
                obj['govtEndUserType'] = ApiClient.convertToType(data['govtEndUserType'], 'String');
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = PriceAndAvailabilityResponseInnerAvailability.constructFromObject(data['availability']);
            }
            if (data.hasOwnProperty('reserveInventoryDetails')) {
                obj['reserveInventoryDetails'] = ApiClient.convertToType(data['reserveInventoryDetails'], [PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner]);
            }
            if (data.hasOwnProperty('pricing')) {
                obj['pricing'] = PriceAndAvailabilityResponseInnerPricing.constructFromObject(data['pricing']);
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], [PriceAndAvailabilityResponseInnerDiscountsInner]);
            }
            if (data.hasOwnProperty('bundlePartIndicator')) {
                obj['bundlePartIndicator'] = ApiClient.convertToType(data['bundlePartIndicator'], 'Boolean');
            }
            if (data.hasOwnProperty('serviceFees')) {
                obj['serviceFees'] = ApiClient.convertToType(data['serviceFees'], [PriceAndAvailabilityResponseInnerServiceFeesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityResponseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityResponseInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['productStatusCode'] && !(typeof data['productStatusCode'] === 'string' || data['productStatusCode'] instanceof String)) {
            throw new Error("Expected the field `productStatusCode` to be a primitive type in the JSON string but got " + data['productStatusCode']);
        }
        // ensure the json data is a string
        if (data['productStatusMessage'] && !(typeof data['productStatusMessage'] === 'string' || data['productStatusMessage'] instanceof String)) {
            throw new Error("Expected the field `productStatusMessage` to be a primitive type in the JSON string but got " + data['productStatusMessage']);
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
        if (data['extendedVendorPartNumber'] && !(typeof data['extendedVendorPartNumber'] === 'string' || data['extendedVendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `extendedVendorPartNumber` to be a primitive type in the JSON string but got " + data['extendedVendorPartNumber']);
        }
        // ensure the json data is a string
        if (data['customerPartNumber'] && !(typeof data['customerPartNumber'] === 'string' || data['customerPartNumber'] instanceof String)) {
            throw new Error("Expected the field `customerPartNumber` to be a primitive type in the JSON string but got " + data['customerPartNumber']);
        }
        // ensure the json data is a string
        if (data['upc'] && !(typeof data['upc'] === 'string' || data['upc'] instanceof String)) {
            throw new Error("Expected the field `upc` to be a primitive type in the JSON string but got " + data['upc']);
        }
        // ensure the json data is a string
        if (data['partNumberType'] && !(typeof data['partNumberType'] === 'string' || data['partNumberType'] instanceof String)) {
            throw new Error("Expected the field `partNumberType` to be a primitive type in the JSON string but got " + data['partNumberType']);
        }
        // ensure the json data is a string
        if (data['vendorNumber'] && !(typeof data['vendorNumber'] === 'string' || data['vendorNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorNumber` to be a primitive type in the JSON string but got " + data['vendorNumber']);
        }
        // ensure the json data is a string
        if (data['vendorName'] && !(typeof data['vendorName'] === 'string' || data['vendorName'] instanceof String)) {
            throw new Error("Expected the field `vendorName` to be a primitive type in the JSON string but got " + data['vendorName']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['productClass'] && !(typeof data['productClass'] === 'string' || data['productClass'] instanceof String)) {
            throw new Error("Expected the field `productClass` to be a primitive type in the JSON string but got " + data['productClass']);
        }
        // ensure the json data is a string
        if (data['uom'] && !(typeof data['uom'] === 'string' || data['uom'] instanceof String)) {
            throw new Error("Expected the field `uom` to be a primitive type in the JSON string but got " + data['uom']);
        }
        // ensure the json data is a string
        if (data['productStatus'] && !(typeof data['productStatus'] === 'string' || data['productStatus'] instanceof String)) {
            throw new Error("Expected the field `productStatus` to be a primitive type in the JSON string but got " + data['productStatus']);
        }
        // ensure the json data is a string
        if (data['govtProgramType'] && !(typeof data['govtProgramType'] === 'string' || data['govtProgramType'] instanceof String)) {
            throw new Error("Expected the field `govtProgramType` to be a primitive type in the JSON string but got " + data['govtProgramType']);
        }
        // ensure the json data is a string
        if (data['govtEndUserType'] && !(typeof data['govtEndUserType'] === 'string' || data['govtEndUserType'] instanceof String)) {
            throw new Error("Expected the field `govtEndUserType` to be a primitive type in the JSON string but got " + data['govtEndUserType']);
        }
        // validate the optional field `availability`
        if (data['availability']) { // data not null
          PriceAndAvailabilityResponseInnerAvailability.validateJSON(data['availability']);
        }
        if (data['reserveInventoryDetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['reserveInventoryDetails'])) {
                throw new Error("Expected the field `reserveInventoryDetails` to be an array in the JSON data but got " + data['reserveInventoryDetails']);
            }
            // validate the optional field `reserveInventoryDetails` (array)
            for (const item of data['reserveInventoryDetails']) {
                PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner.validateJSON(item);
            };
        }
        // validate the optional field `pricing`
        if (data['pricing']) { // data not null
          PriceAndAvailabilityResponseInnerPricing.validateJSON(data['pricing']);
        }
        if (data['discounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['discounts'])) {
                throw new Error("Expected the field `discounts` to be an array in the JSON data but got " + data['discounts']);
            }
            // validate the optional field `discounts` (array)
            for (const item of data['discounts']) {
                PriceAndAvailabilityResponseInnerDiscountsInner.validateJSON(item);
            };
        }
        if (data['serviceFees']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['serviceFees'])) {
                throw new Error("Expected the field `serviceFees` to be an array in the JSON data but got " + data['serviceFees']);
            }
            // validate the optional field `serviceFees` (array)
            for (const item of data['serviceFees']) {
                PriceAndAvailabilityResponseInnerServiceFeesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Codes signifying whether the sku is active or not.
 * @member {String} productStatusCode
 */
PriceAndAvailabilityResponseInner.prototype['productStatusCode'] = undefined;

/**
 * Message returned saying whether sku is active.
 * @member {String} productStatusMessage
 */
PriceAndAvailabilityResponseInner.prototype['productStatusMessage'] = undefined;

/**
 * Ingram Micro unique part number for the product.
 * @member {String} ingramPartNumber
 */
PriceAndAvailabilityResponseInner.prototype['ingramPartNumber'] = undefined;

/**
 * Vendor’s part number for the product.
 * @member {String} vendorPartNumber
 */
PriceAndAvailabilityResponseInner.prototype['vendorPartNumber'] = undefined;

/**
 * Extended Vendor Part Number. *Currently, this feature is not available in these countries (Mexico, Turkey, New Zealand, Colombia, Chile, Brazil, Peru, Western Sahara).
 * @member {String} extendedVendorPartNumber
 */
PriceAndAvailabilityResponseInner.prototype['extendedVendorPartNumber'] = undefined;

/**
 * Reseller / end-user’s part number for the product.
 * @member {String} customerPartNumber
 */
PriceAndAvailabilityResponseInner.prototype['customerPartNumber'] = undefined;

/**
 * The UPC code for the product. Consists of 12 numeric digits that are uniquely assigned to each trade item.
 * @member {String} upc
 */
PriceAndAvailabilityResponseInner.prototype['upc'] = undefined;

/**
 * Number type of the part.
 * @member {String} partNumberType
 */
PriceAndAvailabilityResponseInner.prototype['partNumberType'] = undefined;

/**
 * Vendor number that identifies the product.
 * @member {String} vendorNumber
 */
PriceAndAvailabilityResponseInner.prototype['vendorNumber'] = undefined;

/**
 * Vendor name for the order.
 * @member {String} vendorName
 */
PriceAndAvailabilityResponseInner.prototype['vendorName'] = undefined;

/**
 * The description given for the product.
 * @member {String} description
 */
PriceAndAvailabilityResponseInner.prototype['description'] = undefined;

/**
 * Indicates whether the product is directly shipped from the vendor’s warehouse or if the product ships from Ingram Micro’s warehouse. Class Codes are Ingram classifications on how skus are stocked A = Product that is stocked usually in all IM warehouses and replenished on a regular basis. B = Product that is stocked in limited IM warehouses and replenished on a regular basis C = Product that is stocked in fewer IM warehouses and replenished on a regular basis. D = Product that Ingram Micro has elected to discontinue. E = Product that will be phased out later, according to the vendor. You may not want to replenish this product, but instead sell down what is in stock. F = Product that we carry for a specific customer or supplier under a contractual agreement. N = New Sku. Classification before first receipt O = Discontinued product to be liquidated S= Order for Specialized Demand (Order to backorder) X= direct ship from Vendor V = product that vendor has elected to discontinue.
 * @member {String} productClass
 */
PriceAndAvailabilityResponseInner.prototype['productClass'] = undefined;

/**
 * The description given for the product.
 * @member {String} uom
 */
PriceAndAvailabilityResponseInner.prototype['uom'] = undefined;

/**
 * Status that gives whether the product is Active.
 * @member {String} productStatus
 */
PriceAndAvailabilityResponseInner.prototype['productStatus'] = undefined;

/**
 * Boolean that indicates if the product accepts backorder.
 * @member {Boolean} acceptBackOrder
 */
PriceAndAvailabilityResponseInner.prototype['acceptBackOrder'] = undefined;

/**
 * Boolean that indicates whether a product is authorized.
 * @member {Boolean} productAuthorized
 */
PriceAndAvailabilityResponseInner.prototype['productAuthorized'] = undefined;

/**
 * Boolean that indicates if the product can be returned.
 * @member {Boolean} returnableProduct
 */
PriceAndAvailabilityResponseInner.prototype['returnableProduct'] = undefined;

/**
 * Boolean that indicates  if end user information is required.
 * @member {Boolean} endUserInfoRequired
 */
PriceAndAvailabilityResponseInner.prototype['endUserInfoRequired'] = undefined;

/**
 * Boolean that indicates if special pricing is available for the product.
 * @member {Boolean} govtSpecialPriceAvailable
 */
PriceAndAvailabilityResponseInner.prototype['govtSpecialPriceAvailable'] = undefined;

/**
 * Program type, “PA” for government orders, “ED” for education order.
 * @member {String} govtProgramType
 */
PriceAndAvailabilityResponseInner.prototype['govtProgramType'] = undefined;

/**
 * Type of end user of the program. F = Federal, S = State, E = Local, K = K-12 school, and H = Higher Education.
 * @member {String} govtEndUserType
 */
PriceAndAvailabilityResponseInner.prototype['govtEndUserType'] = undefined;

/**
 * @member {module:model/PriceAndAvailabilityResponseInnerAvailability} availability
 */
PriceAndAvailabilityResponseInner.prototype['availability'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner>} reserveInventoryDetails
 */
PriceAndAvailabilityResponseInner.prototype['reserveInventoryDetails'] = undefined;

/**
 * @member {module:model/PriceAndAvailabilityResponseInnerPricing} pricing
 */
PriceAndAvailabilityResponseInner.prototype['pricing'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityResponseInnerDiscountsInner>} discounts
 */
PriceAndAvailabilityResponseInner.prototype['discounts'] = undefined;

/**
 * True of false value to indicate whether it’s bundle part. *Currently, this feature is not available in these countries (Mexico, Turkey, New Zealand, Colombia, Chile, Brazil, Peru, Western Sahara).
 * @member {Boolean} bundlePartIndicator
 */
PriceAndAvailabilityResponseInner.prototype['bundlePartIndicator'] = undefined;

/**
 * *Currently, this feature is not available in these countries (Mexico, Turkey, New Zealand, Colombia, Chile, Brazil, Peru, Western Sahara).
 * @member {Array.<module:model/PriceAndAvailabilityResponseInnerServiceFeesInner>} serviceFees
 */
PriceAndAvailabilityResponseInner.prototype['serviceFees'] = undefined;






export default PriceAndAvailabilityResponseInner;

