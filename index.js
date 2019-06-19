$("body").hide();

var PC = 0;
var count = 0;
window.onresize = resize;
window.onload = function() {
  $("body").show();
  resize();
}

function resize() {
  var sirina = $(".kocka").width();
  $(".kocka").css("height", sirina);
}

function checkWin() {
  var map = {
    "A": $("#A").attr("znak"),
    "B": $("#B").attr("znak"),
    "C": $("#C").attr("znak"),
    "D": $("#D").attr("znak"),
    "E": $("#E").attr("znak"),
    "F": $("#F").attr("znak"),
    "G": $("#G").attr("znak"),
    "H": $("#H").attr("znak"),
    "I": $("#I").attr("znak")
  }
  if (((map.E == map.A) && (map.E == map.I)
    || (map.E == map.B) && (map.E == map.H)
    || (map.E == map.C) && (map.E == map.G)
    || (map.E == map.D) && (map.E == map.F))
    && map.E != undefined) {
    if ($(".winwin").find("h1").html() == undefined) {
      $(".winwin").append("<h1 class='wintext'>" + map.E + " WINS!</h1>");
    }
   $(".winwin").fadeIn(1250);
  } else if (((map.A == map.D) && (map.A == map.G)
    || (map.A == map.B) && (map.A == map.C)) && map.A != undefined) {
    if ($(".winwin").find("h1").html() == undefined) {
      $(".winwin").append("<h1 class='wintext'>" + map.A + " WINS!</h1>");
    }
    $(".winwin").fadeIn(1250);
  } else if (((map.I == map.H) && (map.I == map.G)
    || (map.I == map.F) && (map.I == map.C)) && map.I != undefined) {
    if ($(".winwin").find("h1").html() == undefined) {
      $(".winwin").append("<h1 class='wintext'>" + map.I + " WINS!</h1>");
    }
    $(".winwin").fadeIn(1250);
  } else if (count == 9) {
    $(".winwin").append("<h1 class='wintext'>DRAW!</h1>");
    $(".winwin").fadeIn(1250);
  }
}

function twoplayer() {
  clear();
  PC = 0;
  newGame();
}

function oneplayer() {
  clear();
  PC = 1;
  newGame();
}

function clear() {
  count = 0;
  $(".winwin").fadeOut(250);
  $(".winwin").children().fadeOut(250);
  $(".winwin").children().remove();
  $(".malakocka").find("img").css("display", "none");
  $(".malakocka").find("img").attr("src", "blank");
  $(".malakocka").removeAttr("znak");
}

function response(id) {
  $(id).find("img").attr("src", "X.svg");
  $(id).find("img").css("display", "block");
  $(id).attr("znak", "X");
  count++;
  checkWin();
}

function PCTurn() {
  var mapa = {
    "A": $("#A").attr("znak"),
    "B": $("#B").attr("znak"),
    "C": $("#C").attr("znak"),
    "D": $("#D").attr("znak"),
    "E": $("#E").attr("znak"),
    "F": $("#F").attr("znak"),
    "G": $("#G").attr("znak"),
    "H": $("#H").attr("znak"),
    "I": $("#I").attr("znak")
  }
  if ((mapa.A == "O"
    || mapa.C == "O"
    || mapa.G == "O"
    || mapa.I == "O")
    && count == 1) {
    response("#E");
  } else if (mapa.E == "O" && count == 1) {
    var fourarr = ["#A", "#C", "#G", "#I"];
    var randnum2 = Math.floor(Math.random()*4);
    response(fourarr[randnum2]);
  } else if (((mapa.A  == mapa.I && mapa.A != undefined)
    || (mapa.B  == mapa.H && mapa.B != undefined)
    || (mapa.C  == mapa.G && mapa.C != undefined)
    || (mapa.F  == mapa.D && mapa.F != undefined))
    && $("#E").find("img").attr("src") == "blank") {
    response("#E");
  } else if (((mapa.B == mapa.C && mapa.B != undefined)
    || (mapa.D == mapa.G && mapa.D != undefined)
    || (mapa.E  == mapa.I && mapa.E != undefined)) &&
    $("#A").find("img").attr("src") == "blank") {
    response("#A");
  } else if (((mapa.A == mapa.C && mapa.A != undefined)
    || (mapa.E == mapa.H && mapa.E != undefined))
    && $("#B").find("img").attr("src") == "blank") {
    response("#B");
  } else if (((mapa.A == mapa.B && mapa.A != undefined)
    || (mapa.F == mapa.I && mapa.I != undefined)
    || (mapa.E == mapa.G && mapa.E != undefined))
    && $("#C").find("img").attr("src") == "blank") {
    response ("#C");
  } else if (((mapa.C == mapa.I && mapa.I != undefined)
    || (mapa.D == mapa.E && mapa.D != undefined))
    && $("#F").find("img").attr("src") == "blank") {
    response("#F");
  } else if (((mapa.F == mapa.C && mapa.F != undefined)
    || (mapa.H == mapa.G && mapa.H != undefined)
    || (mapa.A == mapa.E && mapa.A != undefined))
    && $("#I").find("img").attr("src") == "blank") {
    response("#I");
  } else if (((mapa.B == mapa.E && mapa.B != undefined)
    || (mapa.G == mapa.I && mapa.I != undefined))
    && $("#H").find("img").attr("src") == "blank") {
    response("#H");
  } else if (((mapa.I == mapa.H && mapa.I != undefined)
    || (mapa.D == mapa.A && mapa.D != undefined)
    || (mapa.E == mapa.C && mapa.E != undefined))
    && $("#G").find("img").attr("src") == "blank") {
    response("#G");
  } else if (((mapa.E == mapa.F && mapa.E != undefined)
    || (mapa.A == mapa.G && mapa.A != undefined))
    && $("#D").find("img").attr("src") == "blank") {
    response("#D");
  } else {
    var squarearr = [];
    console.log(squarearr.length)
    $(".malakocka").each(function() {
      if ($(this).find("img").attr("src") == "blank") {
        squarearr.push($(this).attr("id"));
      }
    });
    var randnum = Math.floor(Math.random()*(squarearr.length));
    console.log(squarearr);
    var squareid = "#" + squarearr[randnum];
    response(squareid);
  }
}

function newGame() {
  $(".malakocka").css("background", "rgb(250, 220, 110)");
  $(".malakocka").click(function() {
    if ((count%2 == 0 && $(this).find("img").attr("src") == "blank") && ($(".winwin").find("h1").html() == undefined)) {
      $(this).find("img").css("display", "block");
      $(this).find("img").attr("src", "O.svg");
      $(this).attr("znak", "O");
      count++;
      checkWin();
      if (PC == 1) {
        PCTurn();
      }
    } else if ((count%2 != 0 && $(this).find("img").attr("src") == "blank") && ($(".winwin").find("h1").html() == undefined && PC == 0)) {
      $(this).find("img").css("display", "block");
      $(this).find("img").attr("src", "X.svg");
      $(this).attr("znak", "X");
      count++;
      checkWin();
    }
  });
}
