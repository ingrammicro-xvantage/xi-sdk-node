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
    instance = new XiSdkResellers.OrderSearchResponseOrdersInner();
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

  describe('OrderSearchResponseOrdersInner', function() {
    it('should create an instance of OrderSearchResponseOrdersInner', function() {
      // uncomment below and update the code to test OrderSearchResponseOrdersInner
      //var instance = new XiSdkResellers.OrderSearchResponseOrdersInner();
      //expect(instance).to.be.a(XiSdkResellers.OrderSearchResponseOrdersInner);
    });

    it('should have the property ingramOrderNumber (base name: "ingramOrderNumber")', function() {
      // uncomment below and update the code to test the property ingramOrderNumber
      //var instance = new XiSdkResellers.OrderSearchResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramOrderDate (base name: "ingramOrderDate")', function() {
      // uncomment below and update the code to test the property ingramOrderDate
      //var instance = new XiSdkResellers.OrderSearchResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new XiSdkResellers.OrderSearchResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property vendorSalesOrderNumber (base name: "vendorSalesOrderNumber")', function() {
      // uncomment below and update the code to test the property vendorSalesOrderNumber
      //var instance = new XiSdkResellers.OrderSearchResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property vendorName (base name: "vendorName")', function() {
      // uncomment below and update the code to test the property vendorName
      //var instance = new XiSdkResellers.OrderSearchResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property endUserCompanyName (base name: "endUserCompanyName")', function() {
      // uncomment below and update the code to test the property endUserCompanyName
      //var instance = new XiSdkResellers.OrderSearchResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property orderTotal (base name: "orderTotal")', function() {
      // uncomment below and update the code to test the property orderTotal
      //var instance = new XiSdkResellers.OrderSearchResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property orderStatus (base name: "orderStatus")', function() {
      // uncomment below and update the code to test the property orderStatus
      //var instance = new XiSdkResellers.OrderSearchResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property subOrders (base name: "subOrders")', function() {
      // uncomment below and update the code to test the property subOrders
      //var instance = new XiSdkResellers.OrderSearchResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new XiSdkResellers.OrderSearchResponseOrdersInner();
      //expect(instance).to.be();
    });

  });

}));
