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
    instance = new ResellerApiDocumentation.ProductSearchRequestServicerequest();
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

  describe('ProductSearchRequestServicerequest', function() {
    it('should create an instance of ProductSearchRequestServicerequest', function() {
      // uncomment below and update the code to test ProductSearchRequestServicerequest
      //var instance = new ResellerApiDocumentation.ProductSearchRequestServicerequest();
      //expect(instance).to.be.a(ResellerApiDocumentation.ProductSearchRequestServicerequest);
    });

    it('should have the property requestpreamble (base name: "requestpreamble")', function() {
      // uncomment below and update the code to test the property requestpreamble
      //var instance = new ResellerApiDocumentation.ProductSearchRequestServicerequest();
      //expect(instance).to.be();
    });

    it('should have the property productsearchrequest (base name: "productsearchrequest")', function() {
      // uncomment below and update the code to test the property productsearchrequest
      //var instance = new ResellerApiDocumentation.ProductSearchRequestServicerequest();
      //expect(instance).to.be();
    });

  });

}));
