/**
 * XI Sdk Resellers
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
import OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInnerLinksInner from './OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInnerLinksInner';

/**
 * The OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner model module.
 * @module model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner
 * @version 1.0.0
 */
class OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner {
    /**
     * Constructs a new <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner</code>.
     * @alias module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner
     */
    constructor() { 
        
        OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner} obj Optional instance to populate.
     * @return {module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner} The populated <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner();

            if (data.hasOwnProperty('subordernumber')) {
                obj['subordernumber'] = ApiClient.convertToType(data['subordernumber'], 'String');
            }
            if (data.hasOwnProperty('statuscode')) {
                obj['statuscode'] = ApiClient.convertToType(data['statuscode'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('holdreasoncode')) {
                obj['holdreasoncode'] = ApiClient.convertToType(data['holdreasoncode'], 'String');
            }
            if (data.hasOwnProperty('holdreason')) {
                obj['holdreason'] = ApiClient.convertToType(data['holdreason'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInnerLinksInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['subordernumber'] && !(typeof data['subordernumber'] === 'string' || data['subordernumber'] instanceof String)) {
            throw new Error("Expected the field `subordernumber` to be a primitive type in the JSON string but got " + data['subordernumber']);
        }
        // ensure the json data is a string
        if (data['statuscode'] && !(typeof data['statuscode'] === 'string' || data['statuscode'] instanceof String)) {
            throw new Error("Expected the field `statuscode` to be a primitive type in the JSON string but got " + data['statuscode']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['holdreasoncode'] && !(typeof data['holdreasoncode'] === 'string' || data['holdreasoncode'] instanceof String)) {
            throw new Error("Expected the field `holdreasoncode` to be a primitive type in the JSON string but got " + data['holdreasoncode']);
        }
        // ensure the json data is a string
        if (data['holdreason'] && !(typeof data['holdreason'] === 'string' || data['holdreason'] instanceof String)) {
            throw new Error("Expected the field `holdreason` to be a primitive type in the JSON string but got " + data['holdreason']);
        }
        if (data['links']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['links'])) {
                throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
            }
            // validate the optional field `links` (array)
            for (const item of data['links']) {
                OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInnerLinksInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * A sub order number
 * @member {String} subordernumber
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner.prototype['subordernumber'] = undefined;

/**
 * Order status code
 * @member {String} statuscode
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner.prototype['statuscode'] = undefined;

/**
 * Details of the order statuscode - i.e. statuscode = 4 then status = SHIPPED
 * @member {String} status
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner.prototype['status'] = undefined;

/**
 * Will be returned in case of order on hold
 * @member {String} holdreasoncode
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner.prototype['holdreasoncode'] = undefined;

/**
 * Reason for order hold - will be returned if the order is on hold
 * @member {String} holdreason
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner.prototype['holdreason'] = undefined;

/**
 * HATEOAS links for the details and invoices of the sub-orders if available
 * @member {Array.<module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInnerLinksInner>} links
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner.prototype['links'] = undefined;






export default OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner;

