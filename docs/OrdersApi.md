# XiSdkResellers.OrdersApi

All URIs are relative to *https://api.ingrammicro.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrdercancel**](OrdersApi.md#deleteOrdercancel) | **DELETE** /resellers/v6/orders/{OrderNumber} | Cancel your Order
[**getOrderdetailsV61**](OrdersApi.md#getOrderdetailsV61) | **GET** /resellers/v6.1/orders/{ordernumber} | Get Order Details v6.1
[**getResellersV6Ordersearch**](OrdersApi.md#getResellersV6Ordersearch) | **GET** /resellers/v6/orders/search | Search your Orders
[**postCreateorderV6**](OrdersApi.md#postCreateorderV6) | **POST** /resellers/v6/orders | Create your Order
[**postCreateorderV7**](OrdersApi.md#postCreateorderV7) | **POST** /resellers/v7/orders | Create your Order v7
[**putOrdermodify**](OrdersApi.md#putOrdermodify) | **PUT** /resellers/v6/orders/{orderNumber} | Modify your Order



## deleteOrdercancel

> deleteOrdercancel(orderNumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts)

Cancel your Order

This call must be submitted before the order is released to Ingram Micro’s warehouse. The order cannot be canceled once it is released to the warehouse. Order should be on customer hold to delete any order from Ingram system.

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.OrdersApi();
let orderNumber = "20-RD128"; // String | Ingram Micro sales order number.
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number.
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction accross all the systems.
let opts = {
  'regionCode': "CS", // String | Region code for sandbox testing - Not for use in production.
  'iMSenderID': "MyCompany" // String | Unique value used to identify the sender of the transaction. Example: MyCompany
};
apiInstance.deleteOrdercancel(orderNumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNumber** | **String**| Ingram Micro sales order number. | 
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction accross all the systems. | 
 **regionCode** | **String**| Region code for sandbox testing - Not for use in production. | [optional] 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | [optional] 

### Return type

null (empty response body)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderdetailsV61

> OrderDetailB2B getOrderdetailsV61(ordernumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts)

Get Order Details v6.1

The Orders details API endpoint allows a customer to retrieve their Ingram Micro orders details by using the Ingram Micro sales order number as a path parameter. The sales order number, IM-CustomerNumber, IM-CountryCode, and IM-CorrelationID are required parameters.&lt;br&gt;&lt;br&gt;*Service contracts, subscriptions, and license information are unavailable at the moment, this information will be available in the future. &lt;br&gt;&lt;br&gt; Recent bug fixes:   - Fixed duplication of serial numbers in the API response.   - Fixed API time-out issues   - Fixed missing tracking information.   - Implemented enhanced order status.  

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.OrdersApi();
let ordernumber = "20-RD3QV"; // String | The Ingram Micro sales order number.
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number.
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction accross all the systems.
let opts = {
  'iMSenderID': "MyCompany", // String | Unique value used to identify the sender of the transaction. Example: MyCompany.
  'ingramOrderDate': new Date("Wed May 13 00:00:00 UTC 2020"), // Date | The date and time in UTC format that the order was created.
  'vendorNumber': "vendorNumber_example", // String | Vendor Number.
  'simulateStatus': "simulateStatus_example", // String | Order response for various order statuses. Not for use in production.
  'isIml': true, // Boolean | True/False only for IML customers.
  'regionCode': "regionCode_example" // String | Region code for sandbox testing - Not for use in production.
};
apiInstance.getOrderdetailsV61(ordernumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordernumber** | **String**| The Ingram Micro sales order number. | 
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction accross all the systems. | 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany. | [optional] 
 **ingramOrderDate** | **Date**| The date and time in UTC format that the order was created. | [optional] 
 **vendorNumber** | **String**| Vendor Number. | [optional] 
 **simulateStatus** | **String**| Order response for various order statuses. Not for use in production. | [optional] 
 **isIml** | **Boolean**| True/False only for IML customers. | [optional] 
 **regionCode** | **String**| Region code for sandbox testing - Not for use in production. | [optional] 

### Return type

[**OrderDetailB2B**](OrderDetailB2B.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResellersV6Ordersearch

> OrderSearchResponse getResellersV6Ordersearch(iMCustomerNumber, iMCountryCode, iMCorrelationID, opts)

Search your Orders

The Orders Search API endpoint allows a customer to search their Ingram Micro orders by using any of the available query string parameters, customer can search their order by using single query string parameters or combining them together. This endpoint supports the pagination of results.

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.OrdersApi();
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number.
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction accross all the systems.
let opts = {
  'ingramOrderNumber': "ingramOrderNumber_example", // String | The Ingram Micro order number.
  'orderStatus': "orderStatus_example", // String | Ingram Micro order status.
  'orderStatusIn': ["null"], // [String] | Ingram Micro order status(can use it for multiple entries).
  'ingramOrderDate': "2021-04-23", // String | Search by Order date(yyyy-MM-dd).
  'ingramOrderDateBt': ["null"], // [String] | Search with the start and end date(only 2 entries allowed).
  'iMSenderID': "MyCompany", // String | Unique value used to identify the sender of the transaction. Example: MyCompany
  'customerOrderNumber': "customerOrderNumber_example", // String | Search using your PO/Order number.
  'pageSize': 56, // Number | The number of records required in the call - max records 100 per page.
  'pageNumber': 56, // Number | The page number reference.
  'endCustomerOrderNumber': "endCustomerOrderNumber_example", // String | End customer/user purchase order number.
  'invoiceDateBt': ["null"], // [String] | Invoice date of order, search with the start and end date(only 2 entries allowed).*Currently, this feature is not available in Australia.
  'shipDateBt': ["null"], // [String] | Shipment date of order, search with the start and end date(only 2 entries allowed).
  'deliveryDateBt': ["null"], // [String] | The delivery date of the order, search with the start and end date(only 2 entries allowed).*Currently, this feature is not available in Australia
  'ingramPartNumber': "ingramPartNumber_example", // String | Ingram Micro unique part number for the product.
  'vendorPartNumber': "vendorPartNumber_example", // String | Vendor’s part number for the product.
  'serialNumber': "serialNumber_example", // String | A serial number of the product.
  'trackingNumber': "trackingNumber_example", // String | The tracking number of the order.*Currently, this feature is not available in Australia
  'vendorName': "vendorName_example", // String | Name of the vendor.
  'specialBidNumber': "specialBidNumber_example" // String | The bid number provided to the reseller by the vendor for special pricing and discounts. Line-level bid numbers take precedence over header-level bid numbers.*Currently, this feature is not available in Australia
};
apiInstance.getResellersV6Ordersearch(iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction accross all the systems. | 
 **ingramOrderNumber** | **String**| The Ingram Micro order number. | [optional] 
 **orderStatus** | **String**| Ingram Micro order status. | [optional] 
 **orderStatusIn** | [**[String]**](String.md)| Ingram Micro order status(can use it for multiple entries). | [optional] 
 **ingramOrderDate** | **String**| Search by Order date(yyyy-MM-dd). | [optional] 
 **ingramOrderDateBt** | [**[String]**](String.md)| Search with the start and end date(only 2 entries allowed). | [optional] 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | [optional] 
 **customerOrderNumber** | **String**| Search using your PO/Order number. | [optional] 
 **pageSize** | **Number**| The number of records required in the call - max records 100 per page. | [optional] 
 **pageNumber** | **Number**| The page number reference. | [optional] 
 **endCustomerOrderNumber** | **String**| End customer/user purchase order number. | [optional] 
 **invoiceDateBt** | [**[String]**](String.md)| Invoice date of order, search with the start and end date(only 2 entries allowed).*Currently, this feature is not available in Australia. | [optional] 
 **shipDateBt** | [**[String]**](String.md)| Shipment date of order, search with the start and end date(only 2 entries allowed). | [optional] 
 **deliveryDateBt** | [**[String]**](String.md)| The delivery date of the order, search with the start and end date(only 2 entries allowed).*Currently, this feature is not available in Australia | [optional] 
 **ingramPartNumber** | **String**| Ingram Micro unique part number for the product. | [optional] 
 **vendorPartNumber** | **String**| Vendor’s part number for the product. | [optional] 
 **serialNumber** | **String**| A serial number of the product. | [optional] 
 **trackingNumber** | **String**| The tracking number of the order.*Currently, this feature is not available in Australia | [optional] 
 **vendorName** | **String**| Name of the vendor. | [optional] 
 **specialBidNumber** | **String**| The bid number provided to the reseller by the vendor for special pricing and discounts. Line-level bid numbers take precedence over header-level bid numbers.*Currently, this feature is not available in Australia | [optional] 

### Return type

[**OrderSearchResponse**](OrderSearchResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCreateorderV6

> OrderCreateResponse postCreateorderV6(iMCustomerNumber, iMCountryCode, iMCorrelationID, orderCreateRequest, opts)

Create your Order

Instantly create and place orders. The POST API supports stocked SKUs as well as licensing and warranties SKUs. IM-CustomerNumber, IM-CountryCode, IM-SenderID and IM-CorrelationID are required parameters. Ingram Micro recommends that you provide the ingrampartnumber for each SKU contained in each order. NOTE: You must have net terms to use the Ingram Micro Order Create API. Ingram Micro offers trade credit when using our APIs, and repayment is based on net terms. For example, if your net terms agreement is net-30, you will have 30 days to make a full payment. Ingram Micro does not allow credit card transactions for API ordering. 

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.OrdersApi();
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number.
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction accross all the systems.
let orderCreateRequest = {"customerOrderNumber":"SWAGGER-01","notes":"This is the field for comments","lines":[{"customerLineNumber":"1","ingramPartNumber":"DF4128","quantity":1}],"additionalAttributes":[{"attributeName":"allowDuplicateCustomerOrderNumber","attributeValue":"true"}]}; // OrderCreateRequest | 
let opts = {
  'iMSenderID': "MyCompany" // String | Unique value used to identify the sender of the transaction. Example: MyCompany
};
apiInstance.postCreateorderV6(iMCustomerNumber, iMCountryCode, iMCorrelationID, orderCreateRequest, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction accross all the systems. | 
 **orderCreateRequest** | [**OrderCreateRequest**](OrderCreateRequest.md)|  | 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | [optional] 

### Return type

[**OrderCreateResponse**](OrderCreateResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCreateorderV7

> OrderCreateV7Response201 postCreateorderV7(iMCustomerNumber, iMCountryCode, iMCorrelationID, orderCreateV7Request, opts)

Create your Order v7

The Order Create v7 allows our customers to create orders asynchronously. The customer can create either standard orders using stocked SKUs and/or create a “Quote to Order” using the existing quote which is in “Ready to Order” status, or the customer can create an order using the “Configure to order” (CTO) quote. Upon successful submission of the order create request, a confirmation message will be returned as an API response. &lt;br &gt; &lt;br &gt; Once the order is processed, Ingram Micro will notify customers via webhook using a pre-defined callback URL as an HTTP post regarding the updates related to the order. Upon successful order creation, a notification will be sent via webhook regarding the order details, in the event of any error occurring during the order creation process, an error message will be delivered via webhook. Nightly system unavailability will delay response Async response. &lt;br &gt; &lt;br &gt; The key differentiator between standard ordering and “Quote To Order” is the optional input field in the request body which is “quoteNumber”. If a customer passes the quote number in the request body, the order will be processed as a “Quote To Order” using the details from the quote. Any SKUs, quantity, or price information that are passed in the lines object within the request will be ignored in the case of “Quote To Order”.&lt;br &gt; &lt;br &gt; **Prerequisite:** Pre-defined callback URL &lt;br &gt; &lt;br &gt; **Standard ordering::**&lt;br&gt;&lt;br&gt;Ingram Micro recommends that you provide the ingramPartNumber for each SKU contained in each order. NOTE: You must have net terms to use the Ingram Micro Order Create API. Ingram Micro offers trade credit when using our APIs, and repayment is based on net terms. For example, if your net terms agreement is net 30, you will have 30 days to make a full payment. Ingram Micro does not allow credit card transactions for API ordering. &lt;br&gt;&lt;br&gt;[**Key differences between v6 and v7 Migration**](https://developer.ingrammicro.com/reseller/page/v6-and-v7-migration) &lt;br&gt;&lt;br&gt; &lt;br&gt;&lt;br&gt;**Quote to Order / Configure to Order:**&lt;br&gt;&lt;br&gt;If customers are planning to use Quote to Order or Configure to Order Quotes, it’s recommended to validate the quote using the “Validate Quote” endpoint before creating an order using the quote. Validate Quote endpoint will not only validate the quote but also outline all the mandatory fields required by the vendor at a header level and at the line level which a customer needs to pass to the Quote to Order endpoint request. For a detailed understanding of the “Validate Quote” endpoint, review the “Validate Quote” endpoint documentation. &lt;br&gt;&lt;br&gt; **How it works:**&lt;br&gt;&lt;br&gt;- The customer validates the quote with a quote number from the Validate Quote endpoint.&lt;br&gt;- The customer copies all the mandatory fields required by the vendor and adds them to the QTO request body.&lt;br&gt;- The customer provides all the values for Vendor mandatory fields along with other required information for QTO to create an order.&lt;br&gt;- After the order creation request receipt acknowledgment from the QTO endpoint, all further order creation updates will be provided via webhook push notification.

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.OrdersApi();
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number.
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction across all the systems.
let orderCreateV7Request = new XiSdkResellers.OrderCreateV7Request(); // OrderCreateV7Request | 
let opts = {
  'iMSenderID': "MyCompany" // String | Unique value used to identify the sender of the transaction. Example: MyCompany
};
apiInstance.postCreateorderV7(iMCustomerNumber, iMCountryCode, iMCorrelationID, orderCreateV7Request, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction across all the systems. | 
 **orderCreateV7Request** | [**OrderCreateV7Request**](OrderCreateV7Request.md)|  | 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | [optional] 

### Return type

[**OrderCreateV7Response201**](OrderCreateV7Response201.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putOrdermodify

> OrderModifyResponse putOrdermodify(orderNumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, orderModifyRequest, opts)

Modify your Order

The Order Modify API endpoint allows for changes to be made to an order after the order creation process as long as the order was created with the customer hold flag.  * Orders can be modified within 24hrs of being placed with the customer hold flag, after 24hrs they are voided if they are not released by the customer.  * Modifying orders that were placed without the customer hold flag is not possible 

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.OrdersApi();
let orderNumber = "20-RC1RD"; // String | Ingram sales order number.
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number.
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction across all the systems.
let orderModifyRequest = {"lines":[{"customerLineNumber":"002","ingramPartNumber":"2GZ200","addUpdateDeleteLine":"ADD","quantity":2}]}; // OrderModifyRequest | 
let opts = {
  'actionCode': "release", // String | Action code to be used for order release.
  'regionCode': "CS", // String | Region code paramter to be used only for order release functionality.Region code is only for sandbox not for production
  'iMSenderID': "MyCompany" // String | Unique value used to identify the sender of the transaction. Example: MyCompany
};
apiInstance.putOrdermodify(orderNumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, orderModifyRequest, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNumber** | **String**| Ingram sales order number. | 
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction across all the systems. | 
 **orderModifyRequest** | [**OrderModifyRequest**](OrderModifyRequest.md)|  | 
 **actionCode** | **String**| Action code to be used for order release. | [optional] 
 **regionCode** | **String**| Region code paramter to be used only for order release functionality.Region code is only for sandbox not for production | [optional] 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | [optional] 

### Return type

[**OrderModifyResponse**](OrderModifyResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

