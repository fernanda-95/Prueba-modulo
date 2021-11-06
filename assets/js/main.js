// @ts-nocheck

$(function () {
  $("[data-toggle='tooltip']").tooltip();
});


$(function () {
  // $("h1").click(function () {
  //   alert("llllllldlddd");
  // });
  // $("p").click(function () {
  //   $("p").hide();
  // });

  $(".panqueques").click(function () {
    $(".texto1").toggle("slow");
  });

  $(".tiramisu").click(function () {
    $(".texto2").toggle(1000);
  });

  $(".plateada").click(function () {
    $(".texto3").toggle(1000);
  });

  $(".titulo1" ).on( "click", function() {
    console.log( $( this ).css("color","red") );
  });

  $(".titulo2" ).on( "click", function() {
    console.log( $( this ).css("color","red") );
  });
});
