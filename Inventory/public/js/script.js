$.ajax({
	url: "http://localhost:3000/instock",
	dataType: "json",
	success: function(dataFromServer){
		console.log(dataFromServer);
	},
	error: function(){
		console.log("something went wrong");
	}
})