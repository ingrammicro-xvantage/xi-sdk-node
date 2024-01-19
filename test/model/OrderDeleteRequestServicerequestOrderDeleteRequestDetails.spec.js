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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.XiSdkResellers);
  }
}(this, function(expect, XiSdkResellers) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new XiSdkResellers.OrderDeleteRequestServicerequestOrderDeleteRequestDetails();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OrderDeleteRequestServicerequestOrderDeleteRequestDetails', function() {
    it('should create an instance of OrderDeleteRequestServicerequestOrderDeleteRequestDetails', function() {
      // uncomment below and update the code to test OrderDeleteRequestServicerequestOrderDeleteRequestDetails
      //var instance = new XiSdkResellers.OrderDeleteRequestServicerequestOrderDeleteRequestDetails();
      //expect(instance).to.be.a(XiSdkResellers.OrderDeleteRequestServicerequestOrderDeleteRequestDetails);
    });

    it('should have the property entryDate (base name: "entryDate")', function() {
      // uncomment below and update the code to test the property entryDate
      //var instance = new XiSdkResellers.OrderDeleteRequestServicerequestOrderDeleteRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property orderBranch (base name: "orderBranch")', function() {
      // uncomment below and update the code to test the property orderBranch
      //var instance = new XiSdkResellers.OrderDeleteRequestServicerequestOrderDeleteRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property orderNumber (base name: "orderNumber")', function() {
      // uncomment below and update the code to test the property orderNumber
      //var instance = new XiSdkResellers.OrderDeleteRequestServicerequestOrderDeleteRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property rejectionCode (base name: "rejectionCode")', function() {
      // uncomment below and update the code to test the property rejectionCode
      //var instance = new XiSdkResellers.OrderDeleteRequestServicerequestOrderDeleteRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property distributionNumber (base name: "distributionNumber")', function() {
      // uncomment below and update the code to test the property distributionNumber
      //var instance = new XiSdkResellers.OrderDeleteRequestServicerequestOrderDeleteRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property shipmentNumber (base name: "shipmentNumber")', function() {
      // uncomment below and update the code to test the property shipmentNumber
      //var instance = new XiSdkResellers.OrderDeleteRequestServicerequestOrderDeleteRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property operatorID (base name: "operatorID")', function() {
      // uncomment below and update the code to test the property operatorID
      //var instance = new XiSdkResellers.OrderDeleteRequestServicerequestOrderDeleteRequestDetails();
      //expect(instance).to.be();
    });

  });

}));
