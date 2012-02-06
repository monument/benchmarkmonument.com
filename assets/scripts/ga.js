// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-28607914-2']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Guag.es
var _gauges = _gauges || [];
(function() {
	var t   = document.createElement('script');
	t.type  = 'text/javascript';
	t.async = true;
	t.id    = 'gauges-tracker';
	t.setAttribute('data-site-id', '4f2db014844d52061000004e');
	t.src = '//secure.gaug.es/track.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(t, s);
})();

// Piwik
var pkBaseURL = (("https:" == document.location.protocol) ? "https://www.benchmarkmonument.com/piwik/" : "http://www.benchmarkmonument.com/piwik/");
document.write(unescape("%3Cscript src='" + pkBaseURL + "piwik.js' type='text/javascript'%3E%3C/script%3E"));

try {
var piwikTracker = Piwik.getTracker(pkBaseURL + "piwik.php", 1);
piwikTracker.trackPageView();
piwikTracker.enableLinkTracking();
} catch( err ) {}