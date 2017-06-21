function Menu(options)
{
	var root =  options.element;
	root.onmousedown = function()
	{
    return false;
	}
	root.onclick = function(event)
	{
		if(event.target.closest('.menu__item'))
		{
			event.preventDefault();	
			var id = event.target.closest('.menu__item').querySelector('a').getAttribute('href');
			var distance = document.querySelector(id).offsetTop;
			slide(distance,id);
		}
	}

	function slide(distance,id)
	{
		var body = $("html, body");
		body.stop().animate({scrollTop:distance}, 500, 'swing');
	}
}

function View(options)
{
		var root =  options.element;
		var arrows = options.arrows;

	function createArrows()
	{
		var left = $('<div>').addClass('carousel__leftArrow carousel__block carousel__arrow ');
		$(root).prepend(left);
		console.table(root);	
		var right = $('<div>').addClass('carousel__block carousel__arrow carousel__rightArrow');
		$(root).prepend(right);
	};
	function arrowShiftsFocus(){};
	
//---------------------Use---------------------

	if (arrows == true)
		{
			console.info('arrows are true! so lets create them');
			createArrows();
		};
	$(root).children().hover( function(event)
	{
		// event.preventDefault();
		// console.log(root.getAttribute('id')+'>div');
		$(root).children().removeClass('view__active');
		if(event.target.closest('#'+root.getAttribute('id')+'>div'))
		{
			if(event.target.closest('#'+root.getAttribute('id')+'>div'))
			{
				// console.log('ready to toggle')
				$(event.target.closest('#'+root.getAttribute('id')+'>div')).toggleClass('view__active');  
			}
		}
	});
}