$(document).ready(function(){

  $(".sidebar.right").sidebar({side: "right"});
  $(".navbar-toggle.collapsed").click(function(){
    $(".sidebar.right").css("display","inherit");
    $(".sidebar.right").trigger("sidebar:open");
  });

  $(".btn-close").click(function(){
    $(".sidebar.right").trigger("sidebar:close");
  });

  $('a.sider_menu_item').click(function(){
    $(".sidebar.right").trigger("sidebar:close");
    return false;
  });

});
