/**
 * XI Sdk Resellers
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
    instance = new XiSdkResellers.OrderModifyRequestServicerequestOrdermodifyrequest();
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

  describe('OrderModifyRequestServicerequestOrdermodifyrequest', function() {
    it('should create an instance of OrderModifyRequestServicerequestOrdermodifyrequest', function() {
      // uncomment below and update the code to test OrderModifyRequestServicerequestOrdermodifyrequest
      //var instance = new XiSdkResellers.OrderModifyRequestServicerequestOrdermodifyrequest();
      //expect(instance).to.be.a(XiSdkResellers.OrderModifyRequestServicerequestOrdermodifyrequest);
    });

    it('should have the property ingramorderbranch (base name: "ingramorderbranch")', function() {
      // uncomment below and update the code to test the property ingramorderbranch
      //var instance = new XiSdkResellers.OrderModifyRequestServicerequestOrdermodifyrequest();
      //expect(instance).to.be();
    });

    it('should have the property ingramordernumber (base name: "ingramordernumber")', function() {
      // uncomment below and update the code to test the property ingramordernumber
      //var instance = new XiSdkResellers.OrderModifyRequestServicerequestOrdermodifyrequest();
      //expect(instance).to.be();
    });

    it('should have the property ingramorderdist (base name: "ingramorderdist")', function() {
      // uncomment below and update the code to test the property ingramorderdist
      //var instance = new XiSdkResellers.OrderModifyRequestServicerequestOrdermodifyrequest();
      //expect(instance).to.be();
    });

    it('should have the property ingramordership (base name: "ingramordership")', function() {
      // uncomment below and update the code to test the property ingramordership
      //var instance = new XiSdkResellers.OrderModifyRequestServicerequestOrdermodifyrequest();
      //expect(instance).to.be();
    });

    it('should have the property customerponumber (base name: "customerponumber")', function() {
      // uncomment below and update the code to test the property customerponumber
      //var instance = new XiSdkResellers.OrderModifyRequestServicerequestOrdermodifyrequest();
      //expect(instance).to.be();
    });

    it('should have the property shipto (base name: "shipto")', function() {
      // uncomment below and update the code to test the property shipto
      //var instance = new XiSdkResellers.OrderModifyRequestServicerequestOrdermodifyrequest();
      //expect(instance).to.be();
    });

    it('should have the property headerdata (base name: "headerdata")', function() {
      // uncomment below and update the code to test the property headerdata
      //var instance = new XiSdkResellers.OrderModifyRequestServicerequestOrdermodifyrequest();
      //expect(instance).to.be();
    });

    it('should have the property linedata (base name: "linedata")', function() {
      // uncomment below and update the code to test the property linedata
      //var instance = new XiSdkResellers.OrderModifyRequestServicerequestOrdermodifyrequest();
      //expect(instance).to.be();
    });

  });

}));
