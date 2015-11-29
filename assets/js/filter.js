$(document).ready(function() {
  params = get_parameters();
  $.getJSON( "invitados.json", function( data ) {
    if (data[params.invitado]) {
      NR_GUESTS=data[params.invitado];
    }
    else {
      console.log("Remove RVSP")
    }
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
