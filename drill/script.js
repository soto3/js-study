$(function(){
	var body = $('body');
	var ul = $('<ul />');
	$.each(messages, function(i, messages){
		var message_date = messages.date;
		var message_type = messages.type;
		var message_text = messages.text;
		var message_indicate = " [" + message_type + "] " + message_text;
		var li = $('<li />');
		var time = $('<time />').text(message_date);
		if(message_type === "error"){
			var indicate = $('<strong />').text(message_indicate);
		}
		if(message_type === "warning"){
			var indicate = $('<em />').text(message_indicate);
		}
		if(message_type === "info"){
			var indicate = $('<span />').text(message_indicate);
		}
		li.append(time);
		li.append(indicate);
		ul.append(li);
		body.append(ul);
		});
});
