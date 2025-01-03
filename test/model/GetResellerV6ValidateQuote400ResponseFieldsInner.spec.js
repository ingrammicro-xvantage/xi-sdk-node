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
    instance = new XiSdkResellers.GetResellerV6ValidateQuote400ResponseFieldsInner();
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

  describe('GetResellerV6ValidateQuote400ResponseFieldsInner', function() {
    it('should create an instance of GetResellerV6ValidateQuote400ResponseFieldsInner', function() {
      // uncomment below and update the code to test GetResellerV6ValidateQuote400ResponseFieldsInner
      //var instance = new XiSdkResellers.GetResellerV6ValidateQuote400ResponseFieldsInner();
      //expect(instance).to.be.a(XiSdkResellers.GetResellerV6ValidateQuote400ResponseFieldsInner);
    });

    it('should have the property field (base name: "field")', function() {
      // uncomment below and update the code to test the property field
      //var instance = new XiSdkResellers.GetResellerV6ValidateQuote400ResponseFieldsInner();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new XiSdkResellers.GetResellerV6ValidateQuote400ResponseFieldsInner();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new XiSdkResellers.GetResellerV6ValidateQuote400ResponseFieldsInner();
      //expect(instance).to.be();
    });

  });

}));
