$(document).ready(function(){
  $(".toggle").on("click", function(event){
    event.preventDefault();
  $(".nav-list").toggleClass("showing");

  });

  $(document).on("click", function(event){
    const target = event.target;
  if(!$(target).closest(".toggle").length){
        $(".nav-list").removeClass("showing");
    }
  });
});

  