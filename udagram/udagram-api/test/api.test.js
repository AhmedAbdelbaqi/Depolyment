const request = require('supertest');
const express = require('express');

app = express();


app.get ('/test' , function(req,res) {
  res.send(200)
}) 

describe("Api test endpoints" ,  function() {
  it("end point : /test" , function(done) {
     request(app).
      get("/test").
      expect(200,done)
  })
});



