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


import ApiClient from "../ApiClient";
import OrderStatusAsyncNotificationRequest from '../model/OrderStatusAsyncNotificationRequest';

/**
* OrderStatus service.
* @module api/OrderStatusApi
* @version 6.0
*/
export default class OrderStatusApi {

    /**
    * Constructs a new OrderStatusApi. 
    * @alias module:api/OrderStatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the resellersV1WebhooksOrderstatuseventPost operation.
     * @callback module:api/OrderStatusApi~resellersV1WebhooksOrderstatuseventPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Order Status
     * @param {String} targeturl The webhook url where the request needs to sent.
     * @param {String} xHubSignature Ingram Micro creates a signature token by use of a secret key + Event ID. The algorithm to generate the secret ley is given at link https://developer.ingrammicro.com/reseller/article/how-use-webhook-secret-key. Use the event Id in the below sample along with your secret key to generate the key. Alternatively, to send try this out, use a random text to see how it works.
     * @param {module:model/OrderStatusAsyncNotificationRequest} orderStatusAsyncNotificationRequest 
     * @param {module:api/OrderStatusApi~resellersV1WebhooksOrderstatuseventPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    resellersV1WebhooksOrderstatuseventPost(targeturl, xHubSignature, orderStatusAsyncNotificationRequest, callback) {
      let postBody = orderStatusAsyncNotificationRequest;
      // verify the required parameter 'targeturl' is set
      if (targeturl === undefined || targeturl === null) {
        throw new Error("Missing the required parameter 'targeturl' when calling resellersV1WebhooksOrderstatuseventPost");
      }
      // verify the required parameter 'xHubSignature' is set
      if (xHubSignature === undefined || xHubSignature === null) {
        throw new Error("Missing the required parameter 'xHubSignature' when calling resellersV1WebhooksOrderstatuseventPost");
      }
      // verify the required parameter 'orderStatusAsyncNotificationRequest' is set
      if (orderStatusAsyncNotificationRequest === undefined || orderStatusAsyncNotificationRequest === null) {
        throw new Error("Missing the required parameter 'orderStatusAsyncNotificationRequest' when calling resellersV1WebhooksOrderstatuseventPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'targeturl': targeturl,
        'x-hub-signature': xHubSignature
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/resellers/v1/webhooks/orderstatusevent', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
