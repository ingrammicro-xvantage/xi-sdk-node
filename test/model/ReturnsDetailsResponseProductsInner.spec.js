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
    instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
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

  describe('ReturnsDetailsResponseProductsInner', function() {
    it('should create an instance of ReturnsDetailsResponseProductsInner', function() {
      // uncomment below and update the code to test ReturnsDetailsResponseProductsInner
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be.a(ResellerApiDocumentation.ReturnsDetailsResponseProductsInner);
    });

    it('should have the property ingramLineNumber (base name: "ingramLineNumber")', function() {
      // uncomment below and update the code to test the property ingramLineNumber
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramPartNumber (base name: "ingramPartNumber")', function() {
      // uncomment below and update the code to test the property ingramPartNumber
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property vendorPartNumber (base name: "vendorPartNumber")', function() {
      // uncomment below and update the code to test the property vendorPartNumber
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property upc (base name: "upc")', function() {
      // uncomment below and update the code to test the property upc
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDate (base name: "invoiceDate")', function() {
      // uncomment below and update the code to test the property invoiceDate
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceNumber (base name: "invoiceNumber")', function() {
      // uncomment below and update the code to test the property invoiceNumber
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property requestDetails (base name: "requestDetails")', function() {
      // uncomment below and update the code to test the property requestDetails
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property unitPrice (base name: "unitPrice")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property extendedPrice (base name: "extendedPrice")', function() {
      // uncomment below and update the code to test the property extendedPrice
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property returnBranch (base name: "returnBranch")', function() {
      // uncomment below and update the code to test the property returnBranch
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property shipFromBranch (base name: "shipFromBranch")', function() {
      // uncomment below and update the code to test the property shipFromBranch
      //var instance = new ResellerApiDocumentation.ReturnsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

  });

}));
