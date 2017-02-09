CallMeMaybe = {
  hide:function(){ $('body').addClass("call-me-maybe--hide") },
  show:function(){ $('body').removeClass("call-me-maybe--hide") },
  new:function(){
    if (Cookies.get('call-me-maybe') == undefined)
      Cookies.set('call-me-maybe', 'show');
    else if (Cookies.get('call-me-maybe') == "hide")
      CallMeMaybe.hide();

    $('.call-me-maybe--remote').click(function(){
        Cookies.remove('call-me-maybe');
        CallMeMaybe.show();
        return false;
    });

    $('.call-me-maybe--screener--close').click(function(){
      Cookies.set('call-me-maybe', 'hide');
      CallMeMaybe.hide();
      return false;
    });
  }
}