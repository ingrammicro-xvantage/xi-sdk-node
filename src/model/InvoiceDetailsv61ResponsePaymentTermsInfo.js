/**
 * XI SDK Resellers
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
 * The InvoiceDetailsv61ResponsePaymentTermsInfo model module.
 * @module model/InvoiceDetailsv61ResponsePaymentTermsInfo
 * @version 6.0
 */
class InvoiceDetailsv61ResponsePaymentTermsInfo {
    /**
     * Constructs a new <code>InvoiceDetailsv61ResponsePaymentTermsInfo</code>.
     * Payment terms is the agreement between Ingram and the customer by what period they should pay the invoice by
     * @alias module:model/InvoiceDetailsv61ResponsePaymentTermsInfo
     */
    constructor() { 
        
        InvoiceDetailsv61ResponsePaymentTermsInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetailsv61ResponsePaymentTermsInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61ResponsePaymentTermsInfo} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61ResponsePaymentTermsInfo} The populated <code>InvoiceDetailsv61ResponsePaymentTermsInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailsv61ResponsePaymentTermsInfo();

            if (data.hasOwnProperty('paymentTermsCode')) {
                obj['paymentTermsCode'] = ApiClient.convertToType(data['paymentTermsCode'], 'String');
            }
            if (data.hasOwnProperty('paymentTermsDescription')) {
                obj['paymentTermsDescription'] = ApiClient.convertToType(data['paymentTermsDescription'], 'String');
            }
            if (data.hasOwnProperty('paymentTermsDueDate')) {
                obj['paymentTermsDueDate'] = ApiClient.convertToType(data['paymentTermsDueDate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61ResponsePaymentTermsInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61ResponsePaymentTermsInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['paymentTermsCode'] && !(typeof data['paymentTermsCode'] === 'string' || data['paymentTermsCode'] instanceof String)) {
            throw new Error("Expected the field `paymentTermsCode` to be a primitive type in the JSON string but got " + data['paymentTermsCode']);
        }
        // ensure the json data is a string
        if (data['paymentTermsDescription'] && !(typeof data['paymentTermsDescription'] === 'string' || data['paymentTermsDescription'] instanceof String)) {
            throw new Error("Expected the field `paymentTermsDescription` to be a primitive type in the JSON string but got " + data['paymentTermsDescription']);
        }
        // ensure the json data is a string
        if (data['paymentTermsDueDate'] && !(typeof data['paymentTermsDueDate'] === 'string' || data['paymentTermsDueDate'] instanceof String)) {
            throw new Error("Expected the field `paymentTermsDueDate` to be a primitive type in the JSON string but got " + data['paymentTermsDueDate']);
        }

        return true;
    }


}



/**
 * Code of the payment terms.
 * @member {String} paymentTermsCode
 */
InvoiceDetailsv61ResponsePaymentTermsInfo.prototype['paymentTermsCode'] = undefined;

/**
 * Description of the payment terms.
 * @member {String} paymentTermsDescription
 */
InvoiceDetailsv61ResponsePaymentTermsInfo.prototype['paymentTermsDescription'] = undefined;

/**
 * Due date of the payment terms.
 * @member {String} paymentTermsDueDate
 */
InvoiceDetailsv61ResponsePaymentTermsInfo.prototype['paymentTermsDueDate'] = undefined;






export default InvoiceDetailsv61ResponsePaymentTermsInfo;

