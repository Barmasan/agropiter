"use strict";

window.onload = function () {
  //модалка 
  var btnArea = document.querySelectorAll('.area__cart'),
      modalBack = document.querySelector('.modal-back'),
      modalArea = document.querySelectorAll('.modal-wrap'),
      closeBtn = document.querySelectorAll('.close'),
      closeBack = document.querySelectorAll('.modal-back-close');

  var _loop = function _loop(i) {
    btnArea[i].addEventListener('click', function () {
      $(modalBack).css('display', 'block');
      $(closeBack[i]).css('display', 'block');
      $(modalArea[i]).slideDown(300);
      $('body').css('overflow', 'hidden');
    });
  };

  for (var i = 0; i < btnArea.length; i++) {
    _loop(i);
  }

  var _loop2 = function _loop2(i) {
    closeBtn[i].addEventListener('click', function () {
      $(modalArea[i]).slideUp(100);
      $(modalBack).css('display', 'none');
      $(closeBack[i]).css('display', 'none');
      $('body').css('overflow', 'auto');
    });
  };

  for (var i = 0; i < closeBtn.length; i++) {
    _loop2(i);
  }

  var _loop3 = function _loop3(i) {
    closeBack[i].addEventListener('click', function () {
      $(modalArea[i]).slideUp(100);
      $(modalBack).css('display', 'none');
      $(closeBack[i]).css('display', 'none');
      $('body').css('overflow', 'auto');
    });
  };

  for (var i = 0; i < modalArea.length; i++) {
    _loop3(i);
  } //END модалка 
  // таймер


  var days = $('.time__days').children(),
      //дни
  hours = $('.time__hours').children(),
      //часы 
  min = $('.time__min').children(),
      //минуты  
  sec = $('.time__sec').children(),
      //секунды
  deadLine = new Date("September 01 2019 00:00:00");

  function timer() {
    var nowDate = new Date(),
        remainedSec = deadLine - nowDate,
        remainedMinutes = deadLine - nowDate,
        remainedHours = deadLine - nowDate,
        remainedDays = deadLine - nowDate;
    remainedSec = parseInt((deadLine - nowDate) / 1000 % 60), remainedMinutes = parseInt((deadLine - nowDate) / 1000 / 60 % 60), remainedHours = parseInt((deadLine - nowDate) / 1000 / 60 / 60 % 24), remainedDays = parseInt((deadLine - nowDate) / 1000 / 60 / 60 / 24);
    days.html(zero(remainedDays));
    hours.html(zero(remainedHours));
    min.html(zero(remainedMinutes));
    sec.html(zero(remainedSec));
  }

  var tim = window.setInterval(timer, 1000);

  function zero(par) {
    if (par < 10) {
      return par = '0' + par;
    } else {
      return par = '' + par;
    }
  } //END таймер 
  //форма обратной связи
  //форма на первом экране


  $(function () {
    $('#utpForm').submit(function () {
      var errors = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          errors = true;
        }
      });

      if (!errors) {
        var data = $('#utpForm').serialize();
        $.ajax({
          url: 'mail.php',
          type: 'POST',
          data: data,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#utpForm').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма на первом экране
  //фора в блоке с таймером

  $(function () {
    $('#timerForm').submit(function () {
      var errorsTimer = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          errorsTimer = true;
        }
      });

      if (!errorsTimer) {
        var dataTime = $('#timerForm').serialize();
        $.ajax({
          url: 'mail.php',
          type: 'POST',
          data: dataTime,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#timerForm').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END фора в блоке с таймером
  //форма в блоке "Как мы работаем"

  $(function () {
    $('#formConsult').submit(function () {
      var errorWork = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          errorWork = true;
        }
      });

      if (!errorWork) {
        var dataWork = $('#formConsult').serialize();
        $.ajax({
          url: 'mail.php',
          type: 'POST',
          data: dataWork,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#formConsult').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма в блоке "Как мы работаем"
  //форма Вальтеровский ручей

  $(function () {
    $('#valter').submit(function () {
      var error = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          error = true;
        }
      });

      if (!error) {
        var data = $('#valter').serialize();
        $.ajax({
          url: 'mailProduct.php',
          type: 'POST',
          data: data,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#valter').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма Вальтеровский ручей
  //форма Вальтеровский ручей 2

  $(function () {
    $('#valterTwo').submit(function () {
      var error = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          error = true;
        }
      });

      if (!error) {
        var data = $('#valterTwo').serialize();
        $.ajax({
          url: 'mailProduct.php',
          type: 'POST',
          data: data,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#valterTwo').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма Вальтеровский ручей 2
  //форма Большое Троицкое

  $(function () {
    $('#bigTroickoe').submit(function () {
      var error = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          error = true;
        }
      });

      if (!error) {
        var data = $('#bigTroickoe').serialize();
        $.ajax({
          url: 'mailProduct.php',
          type: 'POST',
          data: data,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#bigTroickoe').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма Большое Троицкое
  //форма Малое Троицкое

  $(function () {
    $('#troickoe').submit(function () {
      var error = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          error = true;
        }
      });

      if (!error) {
        var data = $('#troickoe').serialize();
        $.ajax({
          url: 'mailProduct.php',
          type: 'POST',
          data: data,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#troickoe').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма Малое Троицкое
  //форма Подолье

  $(function () {
    $('#podolie').submit(function () {
      var error = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          error = true;
        }
      });

      if (!error) {
        var data = $('#podolie').serialize();
        $.ajax({
          url: 'mailProduct.php',
          type: 'POST',
          data: data,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#podolie').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма Подолье
  //форма Подолье 2

  $(function () {
    $('#podolieTwo').submit(function () {
      var error = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          error = true;
        }
      });

      if (!error) {
        var data = $('#podolieTwo').serialize();
        $.ajax({
          url: 'mailProduct.php',
          type: 'POST',
          data: data,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#podolieTwo').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма Подолье 2
  //форма Мучихино

  $(function () {
    $('#muchihino').submit(function () {
      var error = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          error = true;
        }
      });

      if (!error) {
        var data = $('#muchihino').serialize();
        $.ajax({
          url: 'mailProduct.php',
          type: 'POST',
          data: data,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#muchihino').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма Мучихино
  //форма Мучихино 2

  $(function () {
    $('#muchihinoTwo').submit(function () {
      var error = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          error = true;
        }
      });

      if (!error) {
        var data = $('#muchihinoTwo').serialize();
        $.ajax({
          url: 'mailProduct.php',
          type: 'POST',
          data: data,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#muchihinoTwo').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма Мучихино 2
  //форма Васильково

  $(function () {
    $('#vasilkovo').submit(function () {
      var error = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          error = true;
        }
      });

      if (!error) {
        var data = $('#vasilkovo').serialize();
        $.ajax({
          url: 'mailProduct.php',
          type: 'POST',
          data: data,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#vasilkovo').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма Васильково
  //форма Васильково 2

  $(function () {
    $('#vasilkovoTwo').submit(function () {
      var error = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          error = true;
        }
      });

      if (!error) {
        var data = $('#vasilkovoTwo').serialize();
        $.ajax({
          url: 'mailProduct.php',
          type: 'POST',
          data: data,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#vasilkovoTwo').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма Васильково 2
  //форма Городище

  $(function () {
    $('#gorodishe').submit(function () {
      var error = false;
      $(this).find('input').each(function () {
        if ($.trim($(this).val()) == "") {
          error = true;
        }
      });

      if (!error) {
        var data = $('#gorodishe').serialize();
        $.ajax({
          url: 'mailProduct.php',
          type: 'POST',
          data: data,
          success: function success(res) {
            if (res == 1) {
              alert('Спасибо, Ваше письмо отправлено!');
              $('#gorodishe').find('input:not(.btn)').val('');
            } else {
              alert('Что-то пошло не так, повторите попытку пожалуйста.');
            }
          },
          error: function error() {
            alert('Ошибка!');
          }
        });
      }

      return false;
    });
  }); //END форма Городище
  //END форма обратной связи
  //валидация форм

  var inptName = document.querySelectorAll('input[name="user_name"]'),
      inptPhone = document.querySelectorAll('input[name="user_phone"]'); //проверяем блок с именем

  var _loop4 = function _loop4(i) {
    inptName[i].addEventListener('input', function () {
      if (inptName[i].checkValidity() == false) {
        inptName[i].style.color = "red";
      } else {
        inptName[i].style.color = "green";
      }
    });
  };

  for (var i = 0; i < inptName.length; i++) {
    _loop4(i);
  } //проверяем блок с телефоном


  var _loop5 = function _loop5(io) {
    inptPhone[io].addEventListener('input', function () {
      if (inptPhone[io].checkValidity() == false) {
        inptPhone[io].style.color = "red";
      } else {
        inptPhone[io].style.color = "green";
      }
    });
  };

  for (var io = 0; io < inptPhone.length; io++) {
    _loop5(io);
  } //END валидация форм

};