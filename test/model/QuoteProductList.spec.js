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
    instance = new XiSdkResellers.QuoteProductList();
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

  describe('QuoteProductList', function() {
    it('should create an instance of QuoteProductList', function() {
      // uncomment below and update the code to test QuoteProductList
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be.a(XiSdkResellers.QuoteProductList);
    });

    it('should have the property quoteProductGuid (base name: "quoteProductGuid")', function() {
      // uncomment below and update the code to test the property quoteProductGuid
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property bidStartDate (base name: "bidStartDate")', function() {
      // uncomment below and update the code to test the property bidStartDate
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property bidExpiryDate (base name: "bidExpiryDate")', function() {
      // uncomment below and update the code to test the property bidExpiryDate
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property lineNumber (base name: "lineNumber")', function() {
      // uncomment below and update the code to test the property lineNumber
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property vendorPartNumber (base name: "vendorPartNumber")', function() {
      // uncomment below and update the code to test the property vendorPartNumber
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property isSuggestionProduct (base name: "isSuggestionProduct")', function() {
      // uncomment below and update the code to test the property isSuggestionProduct
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property vpnCategory (base name: "vpnCategory")', function() {
      // uncomment below and update the code to test the property vpnCategory
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property quoteProductsSupplierPartAuxiliaryId (base name: "quoteProductsSupplierPartAuxiliaryId")', function() {
      // uncomment below and update the code to test the property quoteProductsSupplierPartAuxiliaryId
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property quoteProductsVendor (base name: "quoteProductsVendor")', function() {
      // uncomment below and update the code to test the property quoteProductsVendor
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new XiSdkResellers.QuoteProductList();
      //expect(instance).to.be();
    });

  });

}));
