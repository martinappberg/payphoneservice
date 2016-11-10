function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

var appRouter = function(app) {

	//
 app.get("/", function(req, res) {
    res.send("Hello World");
});
 
app.post("/payments", function(req, res) {

	var newPayment = req.body;

  if (!(req.body.price || req.body.merchantID)) {
    handleError(res, "Invalid user input", "Must provide a price and merchantID", 400);
  }
  usersRef.once('/merchants', function(snapshot) {
  if (snapshot.hasChild(merchantID)) {
  	//publish payment if merchant exists
    function writeUserData(price, merchantID, uniqueID) {
    	firebase.database().ref('payments/' + merchantID).set({
    		unique: uniqueID,
    		merchant: merchantID,
    		amount : price
    	});
    }
}else {
  	handleError(res, "Invalid Merchant ID","Please provide a valid one", 400);
  }
});
  

});


/*  "/payments/:id"
 *    GET: find payment by id
 *    PUT: update payment by id
 *    DELETE: deletes payment by id
 */

app.get("/payments/:id", function(req, res) {
});

app.put("/payments/:id", function(req, res) {
});

app.delete("/payments/:id", function(req, res) {
});


}
 
module.exports = appRouter;