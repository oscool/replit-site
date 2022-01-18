var bar = $(".bar");
var path = window.location.href;
if (path == "https://site.oscool.repl.co/"){
  var path = "https://site.oscool.repl.co/index.html"
}
$.ajax({
  url: "https://site.oscool.repl.co/bar.html",
  type: "GET"
}).done(function(r){
  var txt = bar.add(r)
  bar.html(txt) 
  $(".bar a").each(function(idx, val){
    console.log(val)
    if (val.href === path){
      console.log("found")
      val = $(val)
      val.addClass("active")
    }
  })
});
