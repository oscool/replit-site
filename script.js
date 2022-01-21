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
theme = localStorage.getItem("theme")
if (theme == null){
  setTheme("light")
  theme = "light"
} 
function setTheme(theme){
  if (theme == "light"){
    theme = "light"
    localStorage.setItem("theme", "light")
    document.body.classList = ""
  } else if (theme == "dark"){
    theme = "dark"
    localStorage.setItem("theme", "dark")
    document.body.classList = "dark-theme"
    if (path === "https://site.oscool.repl.co/index.html"){
      document.querySelector("button").innerText = "Use Light Mode"
    }
  }
}
setTheme(localStorage.getItem("theme"))
function toggleTheme(){
  if (theme == "light"){
    theme = "dark"
    setTheme("dark")
    return "Use Light Mode"
  } else if (theme == "dark"){
    theme = "light"
    setTheme("light")
    return "Use Dark Mode"
  }
}
function currentThemeButton(){
  if (theme == "light"){
    theme = "light"
    return "Use Dark Mode"
  } else if (theme == "dark"){
    theme = "dark"
    return "Use Light Mode"
  }
}
function themeButton(){
  toggleTheme()
  return currentThemeButton()
}