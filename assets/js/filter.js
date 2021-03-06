$(document).ready(function() {
  params = get_parameters();

  $.getJSON( "invitados.json", function( data ) {
    if (data[params.invitado]) {
      NR_GUESTS=data[params.invitado];
      $('#rvsp_header').css('visibility', 'visible');
      $('#rvsp_button').css('visibility', 'visible');
      $('#rvsp_button2').css('visibility', 'visible');
    }
    else {
      console.log("Remove RVSP");
      $("#rvsp_header").remove();
      $("#rvsp_button").remove();
      $("#rvsp_button2").remove();
    }
    $("#nr_cupos").text(NR_GUESTS);
  });
});

function get_parameters() {
  var retval = new Object();
  if (window.location.href.indexOf("?") == -1) {
    retval.invitado = null;
    return retval;
  }
  var  params = window.location.href.split("?")[1].split("&");
  for (var i in params) {
    var sp = params[i].split("=");
    if (sp.length <= 1) {
      continue;
    }
    var result = sp[1].split("#")[0];
    if (sp[0] == "invitado")
    {
      retval.invitado = result;
    }
    else
    {
      retval[sp[0]] = result;
    }
  }
  return retval;
}
