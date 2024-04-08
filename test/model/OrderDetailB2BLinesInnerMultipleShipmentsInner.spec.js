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
    instance = new XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner();
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

  describe('OrderDetailB2BLinesInnerMultipleShipmentsInner', function() {
    it('should create an instance of OrderDetailB2BLinesInnerMultipleShipmentsInner', function() {
      // uncomment below and update the code to test OrderDetailB2BLinesInnerMultipleShipmentsInner
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner();
      //expect(instance).to.be.a(XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner);
    });

    it('should have the property lineNumber (base name: "lineNumber")', function() {
      // uncomment below and update the code to test the property lineNumber
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner();
      //expect(instance).to.be();
    });

    it('should have the property requestedQuantity (base name: "requestedQuantity")', function() {
      // uncomment below and update the code to test the property requestedQuantity
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner();
      //expect(instance).to.be();
    });

    it('should have the property confirmedQuantity (base name: "confirmedQuantity")', function() {
      // uncomment below and update the code to test the property confirmedQuantity
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner();
      //expect(instance).to.be();
    });

    it('should have the property dateType (base name: "dateType")', function() {
      // uncomment below and update the code to test the property dateType
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner();
      //expect(instance).to.be();
    });

    it('should have the property dateRange (base name: "dateRange")', function() {
      // uncomment below and update the code to test the property dateRange
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner();
      //expect(instance).to.be();
    });

    it('should have the property deliveryDate (base name: "deliveryDate")', function() {
      // uncomment below and update the code to test the property deliveryDate
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner();
      //expect(instance).to.be();
    });

  });

}));
