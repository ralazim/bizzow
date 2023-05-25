$(function(){
    var elementSelector = "#background";
	var timeList = [
		{
			start: 0,
			end: 5,
            cls: "nightBackground",
		},
		{
			start: 6,
			end: 8,
            cls: "morningBackground",
		},
		{
			start: 9,
			end: 14,
            cls: "noonBackground",
		},
		{
            start: 15,
			end: 17,
            cls: "afternoonBackground",
		},
		{
			start: 18,
			end: 24,
            cls: "nightBackground",
		},
	];
	
	function run(){
        var hour = new Date().getHours();
        var time = timeList.find(a => hour >= a.start && hour <= a.end);
		if(time != null){
			$(elementSelector).attr("class", time.cls);
		}
	}
	
	run();
    setInterval(run, 1 * 60 * 1000);

    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeInLeft",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 4500,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

});