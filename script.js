// function changeFn() {
//   // var el = document.getElementById('start');
//   // console.log(el);
//   // el.innerHTML = 'Go';
//   $('#start').html('Go');
// }
// $(document).ready(function() {
//   $('#start').html('Gocx');
// });

$(function() {
  setTimeout(function() {
    $('#start').html('Go');
  }, 2000);
});
function changeFn() {
  $(function() {
    $('#start').html('Done');
  });
  $(function() {
    var val = $('#attr').attr('href');
    alert(val);
  });
  $(function() {
    $('#arri_change').attr('href', 'http://www.jquery.com');
  });
}
function removeAttr() {
  $(function() {
    $('table').removeAttr('border');
    $('table').removeAttr('class');
  });
}

function gethtml() {
  $(function() {
    var val = $('#gethtml').html();
    alert(val);
  });
}

function sethtml() {
  $(function() {
    $('#gethtml').html('JQuery is <b>fun</b>');
  });
}

function val() {
  $(function() {
    alert($('#name').val());
  });
}

function addClass() {
  $(function() {
    $("#class").addClass("header");
  });
}

function removeClass() {
  $(function() {
    $("#class").removeClass("container");
  });
}
$(function() {
  $("button").click(function() {
      $("#toggle").toggleClass("container header");
  });
});