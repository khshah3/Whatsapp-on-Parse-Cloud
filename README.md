# Whatsapp-on-Parse-Cloud

This is a simple wrapper of wha.tools that can be used as a cloud library on parse.com to send messages to Whatsapp users.

##Download

In your cloud/ folder for parse. Download and copy the file whatsapp.js (git clone would work)

##Setup

Following the steps below:

*First thing you want to do is go to http://wha.tools
*Create an account with them (You can get a 20 day free trial)
* Get the API key

Enter the API key on this line

```
exports.api_key = 'ADD_YOUR_OWN_API_KEY'
```
##Usage

Amongst the many features supported the most important things for your application are shown below:

###Subscribe

You need to subscribe your app before you can do anything. I just went ahead and created background job that you can run at free will. 

```
  /**
 * Subscribes to whatsapp message delivery.
 * @param  JSON request The request for this function.
 * @param  JSON status  The status of the object
 * @return nothing
 */
Parse.Cloud.job('whatsappSubscribe',function(request,status){
	  Whatsapp.subscribe().then(function(httpResponse){
      	var response = JSON.parse(httpResponse.text);
          if(response.success == true){
          	  console.log(response.result)
              status.success("Succesfully subscribed with" + JSON.stringify(response.result));
           }else if(response.error){
           	console.error(response.error)
           	status.error("Error with" + JSON.stringify(response.error));
           }
	  },function(httpResponse){
	  	  console.error('Request failed with response code ' + httpResponse.status);
          response.error(httpResponse);
	  })

}
```

###Send Message

You can send a whatsapp message with 

```
Whatsapp.sendMessage(phoneNumber,message)
```

An example is shown below.

```
Whatsapp.sendMessage(request.params.phoneNumber,request.params.message).then(function(httpResponse){
      var response = JSON.parse(httpResponse.text);
      	console.log(response);
          if(response.success == true){
              status.success("Succesfully sent message");
           }else if(response.error){
           	console.error(response.error)
           	status.error("Error with" + JSON.stringify(response.error));
           }
	},function(httpResponse){
		console.error('Request failed with response code ' + httpResponse.status);
        status.error(httpResponse);
	})
```
