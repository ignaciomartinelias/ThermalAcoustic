$(function() {
 
	$('#carousel').carouFredSel({
		responsive: true,
		scroll: 1,
		items: {
			width: 300,
			visible: {
				min: 3,
				max: 10
			}
		}
	});
 
});