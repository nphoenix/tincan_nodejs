//
// Registration Class
//

function Registration(id) {

  //
  // Registration Fields
  //

  this.id = id;



  //
  // State Data
  //

  this.states = {};

  this.setState = function(id,data) {
    this.states[id] = data;
  };

  this.getState = function(id) {
    return this.states[id];
  };

  this.getStateKeys = function() {
    return Object.keys(this.states);
  };

  this.deleteState = function(id) {
    if (id) {
      delete this.states[id];
    } else {
      this.states = {};
    }
  };


  //
  // Statement Data
  //

  this.statements = {};

  this.addStatement = function(id,data) {
    this.statements[id] = data;
  };

  this.getStatement = function(id) {
    return this.statements[id];
  };

  this.allStatements = function(id) {
    return this.statements;
  };

};


//
// Registration Data Store
//
var registrations = {};


//
// Exports
//

// All Registrations
exports.allRegistrations = function() {
  console.log("ALL");
  console.log(registrations);
  return registrations;
};

// Load Specific Registration
exports.loadRegistration = function(registrationId) {
  return registrations[registrationId];
};

exports.createRegistration = function(id) {
  var reg = new Registration(id);
  registrations[id] = reg;
  return reg;
};

exports.initialize = function() {
  // Test Data
  return exports.createRegistration('b9855f24-2140-4fb8-931d-2a37cf412c2e');
};

exports.reset = function() {
  console.log("*** RESET DATABASE ***");
  registrations = {};
};

