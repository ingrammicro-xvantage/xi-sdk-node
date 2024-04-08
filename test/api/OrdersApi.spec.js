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
    instance = new XiSdkResellers.OrdersApi();
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

  describe('OrdersApi', function() {
    describe('deleteOrdercancel', function() {
      it('should call deleteOrdercancel successfully', function(done) {
        //uncomment below and update the code to test deleteOrdercancel
        //instance.deleteOrdercancel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderdetailsV61', function() {
      it('should call getOrderdetailsV61 successfully', function(done) {
        //uncomment below and update the code to test getOrderdetailsV61
        //instance.getOrderdetailsV61(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getResellersV6Ordersearch', function() {
      it('should call getResellersV6Ordersearch successfully', function(done) {
        //uncomment below and update the code to test getResellersV6Ordersearch
        //instance.getResellersV6Ordersearch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCreateorderV6', function() {
      it('should call postCreateorderV6 successfully', function(done) {
        //uncomment below and update the code to test postCreateorderV6
        //instance.postCreateorderV6(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putOrdermodify', function() {
      it('should call putOrdermodify successfully', function(done) {
        //uncomment below and update the code to test putOrdermodify
        //instance.putOrdermodify(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
