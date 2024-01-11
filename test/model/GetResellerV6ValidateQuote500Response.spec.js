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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ResellerApiDocumentation);
  }
}(this, function(expect, ResellerApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ResellerApiDocumentation.GetResellerV6ValidateQuote500Response();
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

  describe('GetResellerV6ValidateQuote500Response', function() {
    it('should create an instance of GetResellerV6ValidateQuote500Response', function() {
      // uncomment below and update the code to test GetResellerV6ValidateQuote500Response
      //var instance = new ResellerApiDocumentation.GetResellerV6ValidateQuote500Response();
      //expect(instance).to.be.a(ResellerApiDocumentation.GetResellerV6ValidateQuote500Response);
    });

    it('should have the property traceid (base name: "traceid")', function() {
      // uncomment below and update the code to test the property traceid
      //var instance = new ResellerApiDocumentation.GetResellerV6ValidateQuote500Response();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ResellerApiDocumentation.GetResellerV6ValidateQuote500Response();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new ResellerApiDocumentation.GetResellerV6ValidateQuote500Response();
      //expect(instance).to.be();
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instance = new ResellerApiDocumentation.GetResellerV6ValidateQuote500Response();
      //expect(instance).to.be();
    });

  });

}));
