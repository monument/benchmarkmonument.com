top.name="netobjects_main_power";
function go(){
  //use time to create navigator name(allow random).
  if (navigator.userAgent.substring(0,9) != "Mozilla/2"){
   //3.0 and above
   var WinName = window.open('Sitemapper.html','netobjects_nav','toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,copyhistory=0,width=385,height=335');
 }
 else if  (window.name == "netobjects_main_power"){
  //2.0 re-entry position - main window already have name
  var WinName = window.open('Sitemapper.html','netobjects_nav','toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,copyhistory=0,width=385,height=335');
}
else {
  //2.0
  var Replace = window.open(window.location,"netobjects_main_power");
  var WinName = window.open('Sitemapper.html','netobjects_nav','toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,copyhistory=0,width=385,height=335');
  window.close();
}
}

function F_loadRollover(){} 
function F_roll(){}