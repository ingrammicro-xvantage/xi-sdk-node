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
import QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo from './QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo';
import QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo from './QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo';
import QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser from './QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser';
import QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes from './QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes';

/**
 * The QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse model module.
 * @module model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse
 * @version 6.0
 */
class QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse {
    /**
     * Constructs a new <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse</code>.
     * @alias module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse
     */
    constructor() { 
        
        QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse} obj Optional instance to populate.
     * @return {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse} The populated <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();

            if (data.hasOwnProperty('quoteGuid')) {
                obj['quoteGuid'] = ApiClient.convertToType(data['quoteGuid'], 'String');
            }
            if (data.hasOwnProperty('quoteName')) {
                obj['quoteName'] = ApiClient.convertToType(data['quoteName'], 'String');
            }
            if (data.hasOwnProperty('quoteNumber')) {
                obj['quoteNumber'] = ApiClient.convertToType(data['quoteNumber'], 'String');
            }
            if (data.hasOwnProperty('quoteExpiryDate')) {
                obj['quoteExpiryDate'] = ApiClient.convertToType(data['quoteExpiryDate'], 'Date');
            }
            if (data.hasOwnProperty('revisionNumber')) {
                obj['revisionNumber'] = ApiClient.convertToType(data['revisionNumber'], 'String');
            }
            if (data.hasOwnProperty('introPreamble')) {
                obj['introPreamble'] = ApiClient.convertToType(data['introPreamble'], 'String');
            }
            if (data.hasOwnProperty('purchaseInstructions')) {
                obj['purchaseInstructions'] = ApiClient.convertToType(data['purchaseInstructions'], 'String');
            }
            if (data.hasOwnProperty('legalTerms')) {
                obj['legalTerms'] = ApiClient.convertToType(data['legalTerms'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('priceDeviationId')) {
                obj['priceDeviationId'] = ApiClient.convertToType(data['priceDeviationId'], 'String');
            }
            if (data.hasOwnProperty('priceDeviationStartDate')) {
                obj['priceDeviationStartDate'] = ApiClient.convertToType(data['priceDeviationStartDate'], 'Date');
            }
            if (data.hasOwnProperty('priceDeviationExpiryDate')) {
                obj['priceDeviationExpiryDate'] = ApiClient.convertToType(data['priceDeviationExpiryDate'], 'Date');
            }
            if (data.hasOwnProperty('customerNeed')) {
                obj['customerNeed'] = ApiClient.convertToType(data['customerNeed'], 'String');
            }
            if (data.hasOwnProperty('solutionProposed')) {
                obj['solutionProposed'] = ApiClient.convertToType(data['solutionProposed'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
            if (data.hasOwnProperty('leasingCalculations')) {
                obj['leasingCalculations'] = ApiClient.convertToType(data['leasingCalculations'], 'String');
            }
            if (data.hasOwnProperty('leasingInstructions')) {
                obj['leasingInstructions'] = ApiClient.convertToType(data['leasingInstructions'], 'String');
            }
            if (data.hasOwnProperty('accountInfo')) {
                obj['accountInfo'] = QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo.constructFromObject(data['accountInfo']);
            }
            if (data.hasOwnProperty('contactInfo')) {
                obj['contactInfo'] = QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo.constructFromObject(data['contactInfo']);
            }
            if (data.hasOwnProperty('vendorAttributes')) {
                obj['vendorAttributes'] = QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes.constructFromObject(data['vendorAttributes']);
            }
            if (data.hasOwnProperty('endUser')) {
                obj['endUser'] = QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.constructFromObject(data['endUser']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['quoteGuid'] && !(typeof data['quoteGuid'] === 'string' || data['quoteGuid'] instanceof String)) {
            throw new Error("Expected the field `quoteGuid` to be a primitive type in the JSON string but got " + data['quoteGuid']);
        }
        // ensure the json data is a string
        if (data['quoteName'] && !(typeof data['quoteName'] === 'string' || data['quoteName'] instanceof String)) {
            throw new Error("Expected the field `quoteName` to be a primitive type in the JSON string but got " + data['quoteName']);
        }
        // ensure the json data is a string
        if (data['quoteNumber'] && !(typeof data['quoteNumber'] === 'string' || data['quoteNumber'] instanceof String)) {
            throw new Error("Expected the field `quoteNumber` to be a primitive type in the JSON string but got " + data['quoteNumber']);
        }
        // ensure the json data is a string
        if (data['revisionNumber'] && !(typeof data['revisionNumber'] === 'string' || data['revisionNumber'] instanceof String)) {
            throw new Error("Expected the field `revisionNumber` to be a primitive type in the JSON string but got " + data['revisionNumber']);
        }
        // ensure the json data is a string
        if (data['introPreamble'] && !(typeof data['introPreamble'] === 'string' || data['introPreamble'] instanceof String)) {
            throw new Error("Expected the field `introPreamble` to be a primitive type in the JSON string but got " + data['introPreamble']);
        }
        // ensure the json data is a string
        if (data['purchaseInstructions'] && !(typeof data['purchaseInstructions'] === 'string' || data['purchaseInstructions'] instanceof String)) {
            throw new Error("Expected the field `purchaseInstructions` to be a primitive type in the JSON string but got " + data['purchaseInstructions']);
        }
        // ensure the json data is a string
        if (data['legalTerms'] && !(typeof data['legalTerms'] === 'string' || data['legalTerms'] instanceof String)) {
            throw new Error("Expected the field `legalTerms` to be a primitive type in the JSON string but got " + data['legalTerms']);
        }
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }
        // ensure the json data is a string
        if (data['priceDeviationId'] && !(typeof data['priceDeviationId'] === 'string' || data['priceDeviationId'] instanceof String)) {
            throw new Error("Expected the field `priceDeviationId` to be a primitive type in the JSON string but got " + data['priceDeviationId']);
        }
        // ensure the json data is a string
        if (data['customerNeed'] && !(typeof data['customerNeed'] === 'string' || data['customerNeed'] instanceof String)) {
            throw new Error("Expected the field `customerNeed` to be a primitive type in the JSON string but got " + data['customerNeed']);
        }
        // ensure the json data is a string
        if (data['solutionProposed'] && !(typeof data['solutionProposed'] === 'string' || data['solutionProposed'] instanceof String)) {
            throw new Error("Expected the field `solutionProposed` to be a primitive type in the JSON string but got " + data['solutionProposed']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['leasingCalculations'] && !(typeof data['leasingCalculations'] === 'string' || data['leasingCalculations'] instanceof String)) {
            throw new Error("Expected the field `leasingCalculations` to be a primitive type in the JSON string but got " + data['leasingCalculations']);
        }
        // ensure the json data is a string
        if (data['leasingInstructions'] && !(typeof data['leasingInstructions'] === 'string' || data['leasingInstructions'] instanceof String)) {
            throw new Error("Expected the field `leasingInstructions` to be a primitive type in the JSON string but got " + data['leasingInstructions']);
        }
        // validate the optional field `accountInfo`
        if (data['accountInfo']) { // data not null
          QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo.validateJSON(data['accountInfo']);
        }
        // validate the optional field `contactInfo`
        if (data['contactInfo']) { // data not null
          QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo.validateJSON(data['contactInfo']);
        }
        // validate the optional field `vendorAttributes`
        if (data['vendorAttributes']) { // data not null
          QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes.validateJSON(data['vendorAttributes']);
        }
        // validate the optional field `endUser`
        if (data['endUser']) { // data not null
          QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.validateJSON(data['endUser']);
        }

        return true;
    }


}



/**
 * @member {String} quoteGuid
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteGuid'] = undefined;

/**
 * @member {String} quoteName
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteName'] = undefined;

/**
 * @member {String} quoteNumber
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteNumber'] = undefined;

/**
 * @member {Date} quoteExpiryDate
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteExpiryDate'] = undefined;

/**
 * @member {String} revisionNumber
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['revisionNumber'] = undefined;

/**
 * @member {String} introPreamble
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['introPreamble'] = undefined;

/**
 * @member {String} purchaseInstructions
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['purchaseInstructions'] = undefined;

/**
 * @member {String} legalTerms
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['legalTerms'] = undefined;

/**
 * @member {String} currencyCode
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['currencyCode'] = undefined;

/**
 * @member {String} priceDeviationId
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['priceDeviationId'] = undefined;

/**
 * @member {Date} priceDeviationStartDate
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['priceDeviationStartDate'] = undefined;

/**
 * @member {Date} priceDeviationExpiryDate
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['priceDeviationExpiryDate'] = undefined;

/**
 * @member {String} customerNeed
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['customerNeed'] = undefined;

/**
 * @member {String} solutionProposed
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['solutionProposed'] = undefined;

/**
 * @member {String} status
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['status'] = undefined;

/**
 * @member {Date} created
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['created'] = undefined;

/**
 * @member {Date} modified
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['modified'] = undefined;

/**
 * @member {String} leasingCalculations
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['leasingCalculations'] = undefined;

/**
 * @member {String} leasingInstructions
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['leasingInstructions'] = undefined;

/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo} accountInfo
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['accountInfo'] = undefined;

/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo} contactInfo
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['contactInfo'] = undefined;

/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes} vendorAttributes
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['vendorAttributes'] = undefined;

/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser} endUser
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse.prototype['endUser'] = undefined;






export default QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse;

