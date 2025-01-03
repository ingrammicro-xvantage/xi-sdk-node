/**
 * XI Sdk Resellers
 * For Resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
    instance = new XiSdkResellers.OrderDetailB2BLinesInnerScheduleLinesInner();
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

  describe('OrderDetailB2BLinesInnerScheduleLinesInner', function() {
    it('should create an instance of OrderDetailB2BLinesInnerScheduleLinesInner', function() {
      // uncomment below and update the code to test OrderDetailB2BLinesInnerScheduleLinesInner
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerScheduleLinesInner();
      //expect(instance).to.be.a(XiSdkResellers.OrderDetailB2BLinesInnerScheduleLinesInner);
    });

    it('should have the property lineNumber (base name: "lineNumber")', function() {
      // uncomment below and update the code to test the property lineNumber
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerScheduleLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property scheduleLineDate (base name: "scheduleLineDate")', function() {
      // uncomment below and update the code to test the property scheduleLineDate
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerScheduleLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property requestedQuantity (base name: "requestedQuantity")', function() {
      // uncomment below and update the code to test the property requestedQuantity
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerScheduleLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property confirmedQuantity (base name: "confirmedQuantity")', function() {
      // uncomment below and update the code to test the property confirmedQuantity
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerScheduleLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property goodsIssueDate (base name: "goodsIssueDate")', function() {
      // uncomment below and update the code to test the property goodsIssueDate
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerScheduleLinesInner();
      //expect(instance).to.be();
    });

  });

}));
