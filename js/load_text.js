// JavaScript Document
$(document).ready(function(){
    
    text_input();
    
});



/**
    * TEXT INPUT
    * On focus remove "value" attr, and replaces back off focus
    * ----
*/
function text_input() {
    $('input.search').focus(function(){
	    var value = this.value;
		var title = this.title;
		if (value == title) {
			$(this).val("");
		};
	});


	$('input.search').blur(function(){
		if(!$(this).val().length){
		    $(this).val(this.title);
		}
	});
}