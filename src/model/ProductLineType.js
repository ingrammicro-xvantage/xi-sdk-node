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
import InvoiceDetailResponseServiceresponseInvoicedetailresponseExtendedspecsInner from './InvoiceDetailResponseServiceresponseInvoicedetailresponseExtendedspecsInner';
import ProductLineTypeSerialnumberdetailsInner from './ProductLineTypeSerialnumberdetailsInner';
import ProductLineTypeTrackingnumberdetailsInner from './ProductLineTypeTrackingnumberdetailsInner';

/**
 * The ProductLineType model module.
 * @module model/ProductLineType
 * @version 1.0.0
 */
class ProductLineType {
    /**
     * Constructs a new <code>ProductLineType</code>.
     * Product line items object under each invoice
     * @alias module:model/ProductLineType
     */
    constructor() { 
        
        ProductLineType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductLineType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductLineType} obj Optional instance to populate.
     * @return {module:model/ProductLineType} The populated <code>ProductLineType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductLineType();

            if (data.hasOwnProperty('linenumber')) {
                obj['linenumber'] = ApiClient.convertToType(data['linenumber'], 'String');
            }
            if (data.hasOwnProperty('linetype')) {
                obj['linetype'] = ApiClient.convertToType(data['linetype'], 'String');
            }
            if (data.hasOwnProperty('partnumber')) {
                obj['partnumber'] = ApiClient.convertToType(data['partnumber'], 'String');
            }
            if (data.hasOwnProperty('vendorpartnumber')) {
                obj['vendorpartnumber'] = ApiClient.convertToType(data['vendorpartnumber'], 'String');
            }
            if (data.hasOwnProperty('partdescription')) {
                obj['partdescription'] = ApiClient.convertToType(data['partdescription'], 'String');
            }
            if (data.hasOwnProperty('shipfrombranch')) {
                obj['shipfrombranch'] = ApiClient.convertToType(data['shipfrombranch'], 'String');
            }
            if (data.hasOwnProperty('shippedquantity')) {
                obj['shippedquantity'] = ApiClient.convertToType(data['shippedquantity'], 'String');
            }
            if (data.hasOwnProperty('orderedquantity')) {
                obj['orderedquantity'] = ApiClient.convertToType(data['orderedquantity'], 'String');
            }
            if (data.hasOwnProperty('marginpercent')) {
                obj['marginpercent'] = ApiClient.convertToType(data['marginpercent'], 'String');
            }
            if (data.hasOwnProperty('backorderquantity')) {
                obj['backorderquantity'] = ApiClient.convertToType(data['backorderquantity'], 'String');
            }
            if (data.hasOwnProperty('backorderetadate')) {
                obj['backorderetadate'] = ApiClient.convertToType(data['backorderetadate'], 'Date');
            }
            if (data.hasOwnProperty('extendedprice')) {
                obj['extendedprice'] = ApiClient.convertToType(data['extendedprice'], 'String');
            }
            if (data.hasOwnProperty('specialbidnumber')) {
                obj['specialbidnumber'] = ApiClient.convertToType(data['specialbidnumber'], 'String');
            }
            if (data.hasOwnProperty('ordersuffix')) {
                obj['ordersuffix'] = ApiClient.convertToType(data['ordersuffix'], 'String');
            }
            if (data.hasOwnProperty('isacopapplied')) {
                obj['isacopapplied'] = ApiClient.convertToType(data['isacopapplied'], 'String');
            }
            if (data.hasOwnProperty('unitprice')) {
                obj['unitprice'] = ApiClient.convertToType(data['unitprice'], 'String');
            }
            if (data.hasOwnProperty('unitofmeasure')) {
                obj['unitofmeasure'] = ApiClient.convertToType(data['unitofmeasure'], 'String');
            }
            if (data.hasOwnProperty('serialnumberdetails')) {
                obj['serialnumberdetails'] = ApiClient.convertToType(data['serialnumberdetails'], [ProductLineTypeSerialnumberdetailsInner]);
            }
            if (data.hasOwnProperty('trackingnumberdetails')) {
                obj['trackingnumberdetails'] = ApiClient.convertToType(data['trackingnumberdetails'], [ProductLineTypeTrackingnumberdetailsInner]);
            }
            if (data.hasOwnProperty('productextendedspecs')) {
                obj['productextendedspecs'] = ApiClient.convertToType(data['productextendedspecs'], [InvoiceDetailResponseServiceresponseInvoicedetailresponseExtendedspecsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductLineType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductLineType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['linenumber'] && !(typeof data['linenumber'] === 'string' || data['linenumber'] instanceof String)) {
            throw new Error("Expected the field `linenumber` to be a primitive type in the JSON string but got " + data['linenumber']);
        }
        // ensure the json data is a string
        if (data['linetype'] && !(typeof data['linetype'] === 'string' || data['linetype'] instanceof String)) {
            throw new Error("Expected the field `linetype` to be a primitive type in the JSON string but got " + data['linetype']);
        }
        // ensure the json data is a string
        if (data['partnumber'] && !(typeof data['partnumber'] === 'string' || data['partnumber'] instanceof String)) {
            throw new Error("Expected the field `partnumber` to be a primitive type in the JSON string but got " + data['partnumber']);
        }
        // ensure the json data is a string
        if (data['vendorpartnumber'] && !(typeof data['vendorpartnumber'] === 'string' || data['vendorpartnumber'] instanceof String)) {
            throw new Error("Expected the field `vendorpartnumber` to be a primitive type in the JSON string but got " + data['vendorpartnumber']);
        }
        // ensure the json data is a string
        if (data['partdescription'] && !(typeof data['partdescription'] === 'string' || data['partdescription'] instanceof String)) {
            throw new Error("Expected the field `partdescription` to be a primitive type in the JSON string but got " + data['partdescription']);
        }
        // ensure the json data is a string
        if (data['shipfrombranch'] && !(typeof data['shipfrombranch'] === 'string' || data['shipfrombranch'] instanceof String)) {
            throw new Error("Expected the field `shipfrombranch` to be a primitive type in the JSON string but got " + data['shipfrombranch']);
        }
        // ensure the json data is a string
        if (data['shippedquantity'] && !(typeof data['shippedquantity'] === 'string' || data['shippedquantity'] instanceof String)) {
            throw new Error("Expected the field `shippedquantity` to be a primitive type in the JSON string but got " + data['shippedquantity']);
        }
        // ensure the json data is a string
        if (data['orderedquantity'] && !(typeof data['orderedquantity'] === 'string' || data['orderedquantity'] instanceof String)) {
            throw new Error("Expected the field `orderedquantity` to be a primitive type in the JSON string but got " + data['orderedquantity']);
        }
        // ensure the json data is a string
        if (data['marginpercent'] && !(typeof data['marginpercent'] === 'string' || data['marginpercent'] instanceof String)) {
            throw new Error("Expected the field `marginpercent` to be a primitive type in the JSON string but got " + data['marginpercent']);
        }
        // ensure the json data is a string
        if (data['backorderquantity'] && !(typeof data['backorderquantity'] === 'string' || data['backorderquantity'] instanceof String)) {
            throw new Error("Expected the field `backorderquantity` to be a primitive type in the JSON string but got " + data['backorderquantity']);
        }
        // ensure the json data is a string
        if (data['extendedprice'] && !(typeof data['extendedprice'] === 'string' || data['extendedprice'] instanceof String)) {
            throw new Error("Expected the field `extendedprice` to be a primitive type in the JSON string but got " + data['extendedprice']);
        }
        // ensure the json data is a string
        if (data['specialbidnumber'] && !(typeof data['specialbidnumber'] === 'string' || data['specialbidnumber'] instanceof String)) {
            throw new Error("Expected the field `specialbidnumber` to be a primitive type in the JSON string but got " + data['specialbidnumber']);
        }
        // ensure the json data is a string
        if (data['ordersuffix'] && !(typeof data['ordersuffix'] === 'string' || data['ordersuffix'] instanceof String)) {
            throw new Error("Expected the field `ordersuffix` to be a primitive type in the JSON string but got " + data['ordersuffix']);
        }
        // ensure the json data is a string
        if (data['isacopapplied'] && !(typeof data['isacopapplied'] === 'string' || data['isacopapplied'] instanceof String)) {
            throw new Error("Expected the field `isacopapplied` to be a primitive type in the JSON string but got " + data['isacopapplied']);
        }
        // ensure the json data is a string
        if (data['unitprice'] && !(typeof data['unitprice'] === 'string' || data['unitprice'] instanceof String)) {
            throw new Error("Expected the field `unitprice` to be a primitive type in the JSON string but got " + data['unitprice']);
        }
        // ensure the json data is a string
        if (data['unitofmeasure'] && !(typeof data['unitofmeasure'] === 'string' || data['unitofmeasure'] instanceof String)) {
            throw new Error("Expected the field `unitofmeasure` to be a primitive type in the JSON string but got " + data['unitofmeasure']);
        }
        if (data['serialnumberdetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['serialnumberdetails'])) {
                throw new Error("Expected the field `serialnumberdetails` to be an array in the JSON data but got " + data['serialnumberdetails']);
            }
            // validate the optional field `serialnumberdetails` (array)
            for (const item of data['serialnumberdetails']) {
                ProductLineTypeSerialnumberdetailsInner.validateJSON(item);
            };
        }
        if (data['trackingnumberdetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['trackingnumberdetails'])) {
                throw new Error("Expected the field `trackingnumberdetails` to be an array in the JSON data but got " + data['trackingnumberdetails']);
            }
            // validate the optional field `trackingnumberdetails` (array)
            for (const item of data['trackingnumberdetails']) {
                ProductLineTypeTrackingnumberdetailsInner.validateJSON(item);
            };
        }
        if (data['productextendedspecs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['productextendedspecs'])) {
                throw new Error("Expected the field `productextendedspecs` to be an array in the JSON data but got " + data['productextendedspecs']);
            }
            // validate the optional field `productextendedspecs` (array)
            for (const item of data['productextendedspecs']) {
                InvoiceDetailResponseServiceresponseInvoicedetailresponseExtendedspecsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} linenumber
 */
ProductLineType.prototype['linenumber'] = undefined;

/**
 * @member {String} linetype
 */
ProductLineType.prototype['linetype'] = undefined;

/**
 * @member {String} partnumber
 */
ProductLineType.prototype['partnumber'] = undefined;

/**
 * @member {String} vendorpartnumber
 */
ProductLineType.prototype['vendorpartnumber'] = undefined;

/**
 * @member {String} partdescription
 */
ProductLineType.prototype['partdescription'] = undefined;

/**
 * @member {String} shipfrombranch
 */
ProductLineType.prototype['shipfrombranch'] = undefined;

/**
 * @member {String} shippedquantity
 */
ProductLineType.prototype['shippedquantity'] = undefined;

/**
 * @member {String} orderedquantity
 */
ProductLineType.prototype['orderedquantity'] = undefined;

/**
 * @member {String} marginpercent
 */
ProductLineType.prototype['marginpercent'] = undefined;

/**
 * @member {String} backorderquantity
 */
ProductLineType.prototype['backorderquantity'] = undefined;

/**
 * @member {Date} backorderetadate
 */
ProductLineType.prototype['backorderetadate'] = undefined;

/**
 * @member {String} extendedprice
 */
ProductLineType.prototype['extendedprice'] = undefined;

/**
 * @member {String} specialbidnumber
 */
ProductLineType.prototype['specialbidnumber'] = undefined;

/**
 * @member {String} ordersuffix
 */
ProductLineType.prototype['ordersuffix'] = undefined;

/**
 * @member {String} isacopapplied
 */
ProductLineType.prototype['isacopapplied'] = undefined;

/**
 * @member {String} unitprice
 */
ProductLineType.prototype['unitprice'] = undefined;

/**
 * @member {String} unitofmeasure
 */
ProductLineType.prototype['unitofmeasure'] = undefined;

/**
 * @member {Array.<module:model/ProductLineTypeSerialnumberdetailsInner>} serialnumberdetails
 */
ProductLineType.prototype['serialnumberdetails'] = undefined;

/**
 * @member {Array.<module:model/ProductLineTypeTrackingnumberdetailsInner>} trackingnumberdetails
 */
ProductLineType.prototype['trackingnumberdetails'] = undefined;

/**
 * @member {Array.<module:model/InvoiceDetailResponseServiceresponseInvoicedetailresponseExtendedspecsInner>} productextendedspecs
 */
ProductLineType.prototype['productextendedspecs'] = undefined;






export default ProductLineType;

