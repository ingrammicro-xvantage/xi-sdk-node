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
import GetResellerV6ValidateQuote500Response from '../model/GetResellerV6ValidateQuote500Response';
import PostRenewalssearch400Response from '../model/PostRenewalssearch400Response';
import ReturnsCreateRequest from '../model/ReturnsCreateRequest';
import ReturnsCreateResponse from '../model/ReturnsCreateResponse';
import ReturnsDetailsResponse from '../model/ReturnsDetailsResponse';
import ReturnsSearchResponse from '../model/ReturnsSearchResponse';

/**
* Returns service.
* @module api/ReturnsApi
* @version 1.0.0
*/
export default class ReturnsApi {

    /**
    * Constructs a new ReturnsApi. 
    * @alias module:api/ReturnsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getResellersV6Returnsdetails operation.
     * @callback module:api/ReturnsApi~getResellersV6ReturnsdetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReturnsDetailsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns Details
     * The Returns Details API will retrieve all the details related to the specific caseRequestNumber.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {String} caseRequestNumber A unique return request number.
     * @param {Object} opts Optional parameters
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {module:api/ReturnsApi~getResellersV6ReturnsdetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReturnsDetailsResponse}
     */
    getResellersV6Returnsdetails(iMCustomerNumber, iMCountryCode, iMCorrelationID, caseRequestNumber, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling getResellersV6Returnsdetails");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling getResellersV6Returnsdetails");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling getResellersV6Returnsdetails");
      }
      // verify the required parameter 'caseRequestNumber' is set
      if (caseRequestNumber === undefined || caseRequestNumber === null) {
        throw new Error("Missing the required parameter 'caseRequestNumber' when calling getResellersV6Returnsdetails");
      }

      let pathParams = {
        'caseRequestNumber': caseRequestNumber
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
      let returnType = ReturnsDetailsResponse;
      return this.apiClient.callApi(
        '/resellers/v6/returns/{caseRequestNumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResellersV6Returnssearch operation.
     * @callback module:api/ReturnsApi~getResellersV6ReturnssearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReturnsSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns Search
     * The Returns Search API, by default, will retrieve all the returns that are associated with the customer’s account. The customer will be able to search returns using the query parameters. The Returns Search response will return the following information:  returnClaimId, caseRequestNumber, createdOn, referenceNumber, and returnReason.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {Object} opts Optional parameters
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {String} [caseRequestNumber] A unique return request number.
     * @param {String} [invoiceNumber] The Invoice number for the order.
     * @param {String} [returnClaimId] A unique return claim Id.
     * @param {String} [referenceNumber] The reference number for the return.
     * @param {String} [ingramPartNumber] Unique IngramMicro part number.
     * @param {String} [vendorPartNumber] The vendor's part number.
     * @param {String} [returnStatusIn] Comma-separated values of pre-defined status. Open, Approved, Partially Approved, Denied, Voided.
     * @param {String} [claimStatusIn] Comma-separated values of pre-defined status. Open, Approved, Partially Approved, Denied, Voided.
     * @param {String} [createdOnBt] The date on which the return request was created. 
     * @param {String} [modifiedOnBt] The date on which the return request was last updated.
     * @param {String} [returnReasonIn] Comma separated Pre-defined value. test, (EW) Express Warehousing, (AR) Account Receivables, (BB) Buy Back, (BE) Stock Balance Exception, (BO) Bill Only, (CE) Credit Dept Use - Credit Exception, (CF) Configuration Fee, (CS ) Customer Service Discretion, (CS1) Customer Service Discretion CS Error, (DE) Defective Exception, (DF) Defective Items, (DI) Direct Credit, (DM) Damaged from Carrier, (DN) Damaged Without Product, (DT) Direct/ Special Order, (DT1) Direct Ship billed, not shipped., (FO) Freight Out, (FX) No-Scan, (IN) Incomplete, (LS) Lost Shipment, (MN) Minimum Order Fee Credit, (OS) Over Shipment, (PR) Pricing Error, (RF) Refusal Credit, (RI) Re-Invoice, (RP) Return For Repair, (RT) Return Not Credited, (RTD) RCN, (SB) Stock Balance, (SD) Sales Discretion, (SH) Incorrect Shipping And Handling, (SS) Short Shipment, (SSK) Short Ship kit, (SW) Sales Writeoff, (TE) Opened Return, (TR) Training Refund, (TX) Tax Credit, (WS) Wrong Sales Sealed, (WW) Wrong Warehouse, (FS) Warehouse Failed Serial# Capture, Latin America Vebdor Credits, Select Source, ITAD - Trade-in Credit, Withholding Tax
     * @param {String} [page] Number of page.
     * @param {String} [size] The submitted pagesize, default is 25
     * @param {String} [sort] Refers to the column selected to apply the sorting criteria.
     * @param {String} [sortingColumnName] The column name which will be sorted on.
     * @param {module:api/ReturnsApi~getResellersV6ReturnssearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReturnsSearchResponse}
     */
    getResellersV6Returnssearch(iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling getResellersV6Returnssearch");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling getResellersV6Returnssearch");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling getResellersV6Returnssearch");
      }

      let pathParams = {
      };
      let queryParams = {
        'caseRequestNumber': opts['caseRequestNumber'],
        'invoiceNumber': opts['invoiceNumber'],
        'returnClaimId': opts['returnClaimId'],
        'referenceNumber': opts['referenceNumber'],
        'ingramPartNumber': opts['ingramPartNumber'],
        'vendorPartNumber': opts['vendorPartNumber'],
        'returnStatus-in': opts['returnStatusIn'],
        'claimStatus-in': opts['claimStatusIn'],
        'createdOn-bt': opts['createdOnBt'],
        'modifiedOn-bt': opts['modifiedOnBt'],
        'returnReason-in': opts['returnReasonIn'],
        'page': opts['page'],
        'size': opts['size'],
        'sort': opts['sort'],
        'sortingColumnName': opts['sortingColumnName']
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
      let returnType = ReturnsSearchResponse;
      return this.apiClient.callApi(
        '/resellers/v6/returns/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postReturnscreate operation.
     * @callback module:api/ReturnsApi~postReturnscreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReturnsCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns Create
     * Return create endpoint will allow customers to create a return request. In order to create a request, the customer must provide either ingramPartNumber or vendorPartNumber along with other required fields listed below. 
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {Object} opts Optional parameters
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {module:model/ReturnsCreateRequest} [returnsCreateRequest] 
     * @param {module:api/ReturnsApi~postReturnscreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReturnsCreateResponse}
     */
    postReturnscreate(iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, callback) {
      opts = opts || {};
      let postBody = opts['returnsCreateRequest'];
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling postReturnscreate");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling postReturnscreate");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling postReturnscreate");
      }

      let pathParams = {
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ReturnsCreateResponse;
      return this.apiClient.callApi(
        '/resellers/v6/returns/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
