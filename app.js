function addListItem() {
	var text = $('#new-text').val();
	$("#todolist").append('<li class = "LI"><div class="form"><input type="checkbox" class="edit"/><span class = "span">' + text + '</span> <button class="delete">Delete</button></div><div class="starthidden"><input autofocus type="text" name="input1" class="in"></input></div></li>');
	$("#new-text").val('');
};

function deleteItem() {
	$(this).parents()[1].remove();
};

function finishItem() {
    $('input:checkbox').on('change', function () {
		if (this.checked) {
			$(this).parent().css('textDecoration', 'line-through');
		} 
		else {
				$(this).parent().css('textDecoration', 'none');
			}
    })
};

$(function() {
    $('#new-text').keyup(function(e){
        if (e.keyCode === 13) {
            addListItem();
        }
    });
	});
	
    $(document).on('click', '.delete', deleteItem);
    $(document).on('click', '.edit', finishItem);
	
$("ul").on('dblclick', 'li', function ( event )  { 
	var target = $( event.currentTarget );
	if ( target.is( "li" ) ) {
		target.find('.starthidden').show();
		target.find('.form').hide();
		var t=target.find('span').text();
		target.find('.in').val(t);
		target.find('.in').focusout(function(){
			target.find('.form').show();  
            target.find('.span').text( target.find('.in').val());
            target.find('.starthidden').hide();  
    })
	} 
});
	

$("#select_all").click(function () {
	$('input:checkbox').not(this).prop('checked', this.checked);
		$('input:checkbox').on('change', function () {
			if (this.checked) {
				$('li').css('textDecoration', 'line-through');
			} 
				else {
						$('li').css('textDecoration', 'none');
					}
		})
	});


