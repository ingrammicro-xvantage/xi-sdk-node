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


import ApiClient from "../ApiClient";
import GetResellerV6ValidateQuote500Response from '../model/GetResellerV6ValidateQuote500Response';
import PostRenewalssearch400Response from '../model/PostRenewalssearch400Response';
import RenewalsDetailsResponse from '../model/RenewalsDetailsResponse';
import RenewalsSearchRequest from '../model/RenewalsSearchRequest';
import RenewalsSearchResponse from '../model/RenewalsSearchResponse';

/**
* Renewals service.
* @module api/RenewalsApi
* @version 1.0.0
*/
export default class RenewalsApi {

    /**
    * Constructs a new RenewalsApi. 
    * @alias module:api/RenewalsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getResellersV6Renewalsdetails operation.
     * @callback module:api/RenewalsApi~getResellersV6RenewalsdetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenewalsDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Renewals Details
     * The Renewal Details API endpoint will retrieve all the details related to the renewal. The customer is required to pass renewalId as a path parameter while sending a request.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {String} renewalId Unique Ingram renewal ID.
     * @param {Object} opts Optional parameters
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {module:api/RenewalsApi~getResellersV6RenewalsdetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RenewalsDetailsResponse}
     */
    getResellersV6Renewalsdetails(iMCustomerNumber, iMCountryCode, iMCorrelationID, renewalId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling getResellersV6Renewalsdetails");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling getResellersV6Renewalsdetails");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling getResellersV6Renewalsdetails");
      }
      // verify the required parameter 'renewalId' is set
      if (renewalId === undefined || renewalId === null) {
        throw new Error("Missing the required parameter 'renewalId' when calling getResellersV6Renewalsdetails");
      }

      let pathParams = {
        'renewalId': renewalId
      };
      let queryParams = {
      };
      let headerParams = {
        'IM-CustomerNumber': iMCustomerNumber,
        'IM-CountryCode': iMCountryCode,
        'IM-CorrelationID': iMCorrelationID,
        'IM-SenderID': opts['iMSenderID']
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RenewalsDetailsResponse;
      return this.apiClient.callApi(
        '/resellers/v6/renewals/{renewalId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postRenewalssearch operation.
     * @callback module:api/RenewalsApi~postRenewalssearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenewalsSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Renewals Search
     * The Renewal Search API, by default, will retrieve all the renewals that are associated with the customer’s account. The customer will be able to search for renewals via basic search or advanced search. Basic search is available thru the query string parameters, whereas the advanced search is available thru the request body schema. 
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {String} contentType The media type for JSON Request.
     * @param {Object} opts Optional parameters
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {String} [customerOrderNumber] The reseller's unique PO/Order number.
     * @param {String} [ingramPurchaseOrderNumber] Sales order number.
     * @param {String} [serialNumber] A serial number of the product.
     * @param {String} [page] Number of page.
     * @param {String} [size] The submitted pagesize, default is 25.
     * @param {String} [sort] Refers to the column selected to apply the sorting criteria.
     * @param {module:model/RenewalsSearchRequest} [renewalsSearchRequest] 
     * @param {module:api/RenewalsApi~postRenewalssearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RenewalsSearchResponse}
     */
    postRenewalssearch(iMCustomerNumber, iMCountryCode, iMCorrelationID, contentType, opts, callback) {
      opts = opts || {};
      let postBody = opts['renewalsSearchRequest'];
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling postRenewalssearch");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling postRenewalssearch");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling postRenewalssearch");
      }
      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling postRenewalssearch");
      }

      let pathParams = {
      };
      let queryParams = {
        'customerOrderNumber': opts['customerOrderNumber'],
        'ingramPurchaseOrderNumber': opts['ingramPurchaseOrderNumber'],
        'serialNumber': opts['serialNumber'],
        'page': opts['page'],
        'size': opts['size'],
        'sort': opts['sort']
      };
      let headerParams = {
        'IM-CustomerNumber': iMCustomerNumber,
        'IM-CountryCode': iMCountryCode,
        'IM-CorrelationID': iMCorrelationID,
        'IM-SenderID': opts['iMSenderID'],
        'Content type': contentType
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RenewalsSearchResponse;
      return this.apiClient.callApi(
        '/resellers/v6/renewals/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
