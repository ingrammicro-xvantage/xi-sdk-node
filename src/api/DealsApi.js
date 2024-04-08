/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
import DealsDetailsResponse from '../model/DealsDetailsResponse';
import DealsSearchResponse from '../model/DealsSearchResponse';
import GetResellerV6ValidateQuote500Response from '../model/GetResellerV6ValidateQuote500Response';
import PostRenewalssearch400Response from '../model/PostRenewalssearch400Response';

/**
* Deals service.
* @module api/DealsApi
* @version 1.0.0
*/
export default class DealsApi {

    /**
    * Constructs a new DealsApi. 
    * @alias module:api/DealsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getResellersV6Dealsdetails operation.
     * @callback module:api/DealsApi~getResellersV6DealsdetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DealsDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deals Details
     * The Deals Details API will retrieve all the details related to the specific deal id.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {String} iMApplicationId Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {String} iMEnvironment Environment name.
     * @param {String} dealId Unique deal ID.
     * @param {module:api/DealsApi~getResellersV6DealsdetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DealsDetailsResponse}
     */
    getResellersV6Dealsdetails(iMCustomerNumber, iMCountryCode, iMCorrelationID, iMApplicationId, iMEnvironment, dealId, callback) {
      let postBody = null;
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling getResellersV6Dealsdetails");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling getResellersV6Dealsdetails");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling getResellersV6Dealsdetails");
      }
      // verify the required parameter 'iMApplicationId' is set
      if (iMApplicationId === undefined || iMApplicationId === null) {
        throw new Error("Missing the required parameter 'iMApplicationId' when calling getResellersV6Dealsdetails");
      }
      // verify the required parameter 'iMEnvironment' is set
      if (iMEnvironment === undefined || iMEnvironment === null) {
        throw new Error("Missing the required parameter 'iMEnvironment' when calling getResellersV6Dealsdetails");
      }
      // verify the required parameter 'dealId' is set
      if (dealId === undefined || dealId === null) {
        throw new Error("Missing the required parameter 'dealId' when calling getResellersV6Dealsdetails");
      }

      let pathParams = {
        'dealId': dealId
      };
      let queryParams = {
      };
      let headerParams = {
        'IM-CustomerNumber': iMCustomerNumber,
        'IM-CountryCode': iMCountryCode,
        'IM-CorrelationID': iMCorrelationID,
        'IM-ApplicationId': iMApplicationId,
        'IM-Environment': iMEnvironment
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DealsDetailsResponse;
      return this.apiClient.callApi(
        '/resellers/v6/deals/{dealId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResellersV6Dealssearch operation.
     * @callback module:api/DealsApi~getResellersV6DealssearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DealsSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deals Search
     * The Deals Search API, by default, will retrieve all the deals that are associated with the customer’s account. The customer will be able to search deals using the End-user name, Vendor name, or DealID. 
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {Object} opts Optional parameters
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {String} [endUser] The end user/customer's name.
     * @param {String} [vendor] The vendor's name.
     * @param {String} [dealId] Deal/Special bid number.
     * @param {Number} [size] The number of records required in the call - max records 100 per page.
     * @param {Number} [page] The page number reference.
     * @param {module:api/DealsApi~getResellersV6DealssearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DealsSearchResponse}
     */
    getResellersV6Dealssearch(iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling getResellersV6Dealssearch");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling getResellersV6Dealssearch");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling getResellersV6Dealssearch");
      }

      let pathParams = {
      };
      let queryParams = {
        'endUser': opts['endUser'],
        'vendor': opts['vendor'],
        'dealId': opts['dealId'],
        'Size': opts['size'],
        'Page': opts['page']
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
      let returnType = DealsSearchResponse;
      return this.apiClient.callApi(
        '/resellers/v6/deals/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
