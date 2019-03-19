onLoadAndResize();

$(window).resize(onLoadAndResize);

$('#menuBtn').click(
  function()
  {
    $('#modalMenu').modal({closable: false}).modal('show');
  }
);

$('#sidebarBtn').click(
  function()
  {
    $('#sidebarBtn').hide();

    $('#sidebarMenu').sidebar(
      {
        onHidden: function() {
          $('#sidebarBtn').show();
        }
      }
    ).sidebar('toggle');
  }
);

$('#accordionMenu').accordion();

function onLoadAndResize()
{
  var titleGridPos = ($('#mainBGImg').height() / 2) - ($('#titleGrid').height() / 3);
  $('#titleGrid').css('margin-top', titleGridPos + 'px');

  if($(window).width() <= 1172)
  {
    $('#githubLabel').removeClass('massive');
    $('#githubLabel').addClass('large');

    $('#menuList').hide();

    $('#logo').css('margin-right', '0');
    $('#logo').css('right', '50%');
    $('#logo').css('transform', 'translateX(50%)');

    $('#titleBtns').removeClass('huge');
    $('#titleBtns').addClass('mini');

    $('#titleCol').addClass('center aligned');

    $('#menuBtn').show();
  }
  else
  {
    $('#githubLabel').removeClass('large');
    $('#githubLabel').addClass('massive');

    $('#menuList').show();

    $('#logo').css('margin-right', '10%');
    $('#logo').css('right', '0');
    $('#logo').css('transform', '');

    $('#titleBtns').removeClass('mini');
    $('#titleBtns').addClass('huge');

    $('#titleCol').removeClass('center aligned');

    $('#menuBtn').hide();
  }
}
