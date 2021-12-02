$(document).ready(function () {

   // dropdowns
   $('.js-select-head').on('click', function () {
      if ($(this).closest('.js-select').hasClass('open')) {
         $(this).closest('.js-select').removeClass('open').find('.js-select').removeClass('open');
      } else {
         $(this).closest('.js-select').addClass('open');
      }
   });

   $('.js-select--swich .js-select-body .js-select-item').on('click', function () {
      btn = $(this);
      block = btn.closest('.js-select');
      thisText = btn.text();
      block.toggleClass('open');
      block.find('.js-select-head .select__placeholder').text(thisText);
      block.find('.js-select-head input').val(thisText);

      if (!block.find('.js-select-head .select__placeholder').hasClass('active')) {
         block.find('.js-select-head .select__placeholder').addClass('active');
      }
   });

   $(document).on('mouseup', function (e) {
      if (!$(e.target).closest(".js-select").length) {
         $('.js-select').removeClass('open');
      }
      e.stopPropagation();
   });

   $('.js-accordion-head').on('click', function () {
      if ($(this).closest('.js-accordion').hasClass('open')) {
         $(this).closest('.js-accordion').children('.js-accordion-body').slideUp();
         $(this).closest('.js-accordion').removeClass('open');
      } else {
         $(this).closest('.js-accordion').children('.js-accordion-body').slideDown();
         $(this).closest('.js-accordion').addClass('open');
      }
   });
   // dropdowns end

   // Ввод промокода
   $(".checkbox__block").on('click', function () {
      if ($('.checkbox__none').prop('checked')) {
         $(this).closest('.checkbox__block').addClass('active');
         $(this).closest('.checkbox__block').find('.checkbox__input').show();
      } else if (!$('.checkbox__none').prop('checked')) {
         $(this).closest('.checkbox__block').removeClass('active');
         $(this).closest('.checkbox__block').find('.checkbox__input').hide();
      }

   })
   // Ввод промокода конец

   // действия в форме полиса
   $('.form-policy__btn-to-step-two').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-one').hide();
      $(this).closest('.form-policy').find('.form-policy__step-two').css('display', 'flex');
   });
   $('.form-policy__btn-prev-to-step-one').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-two').hide();
      $(this).closest('.form-policy').find('.form-policy__step-one').css('display', 'flex');
   });
   $('.form-policy__btn-to-step-three').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-two').hide();
      $(this).closest('.form-policy').find('.form-policy__step-three').css('display', 'flex');
   });
   $('.form-policy__btn-prev-to-step-two').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-three').hide();
      $(this).closest('.form-policy').find('.form-policy__step-two').css('display', 'flex');
   });
   $('.form-policy__btn-prev-to-step-three').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-four').hide();
      $(this).closest('.form-policy').find('.form-policy__step-three').css('display', 'flex');
   });

   $('.tariff__item--start').on('click', function () {
      $('.tariff__item--standart').removeClass('active');
      $('.tariff__item--max').removeClass('active');
      $('.tariff__item--start').addClass('active');
   });
   $('.tariff__item--standart').on('click', function () {
      $('.tariff__item--start').removeClass('active');
      $('.tariff__item--max').removeClass('active');
      $('.tariff__item--standart').addClass('active');
   });
   $('.tariff__item--max').on('click', function () {
      $('.tariff__item--standart').removeClass('active');
      $('.tariff__item--start').removeClass('active');
      $('.tariff__item--max').addClass('active');
   });
   // действия в форме полиса конец

   // Туристы старт
   $('.js-add-tourist').on('click', function () {
      var btn = $(this);
      if (btn.hasClass('js-add-tourist-block')) {
         btn.closest('.form-policy').find('.form-policy__participants').show();
         btn.removeClass('js-add-tourist-block');
         $('.form-policy__tourist').find('.num').val('');
         $('.form-policy__tourist .form-policy__tourist-subtitle .num').each(function () {
            $(this).html($('.form-policy__tourist .form-policy__tourist-subtitle .num').index(this));
         });
      } else {
         btn.closest('.form-policy').find('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').show();
         $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
         $('.form-policy__tourist').find('.num').val('');
         $('.form-policy__tourist .form-policy__tourist-subtitle .num').each(function () {
            $(this).html($('.form-policy__tourist .form-policy__tourist-subtitle .num').index(this));
         });
      }
   });

   $(document).on('click', '.form-policy__tourist-delete', function () {
      var btn = $(this);
      btn.closest('.form-policy__tourist').remove();
      $('.form-policy__tourist').find('.num').val('');
      $('.form-policy__tourist .form-policy__tourist-subtitle .num').each(function () {
         $(this).html($('.form-policy__tourist .form-policy__tourist-subtitle .num').index(this));
      });
      var count = 0;
      $($(document).find('.form-policy__tourist')).each(function () {
         count++;
      })
      if (count <= 1) {
         $('.form-policy__participants').hide();
         $('.js-add-tourist').addClass('js-add-tourist-block');
         $('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').show();
         $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
         $('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').show();
         $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
         $('.form-policy__tourist').find('.num').val('');
         $('.form-policy__tourist .form-policy__tourist-subtitle .num').each(function () {
            $(this).html($('.form-policy__tourist .form-policy__tourist-subtitle .num').index(this));
         });
      }
   });
   // Туристы конец

   // Календарь 
   $('input[name="daterange"], .daterangepicker').on('focus', function () {

      $(this).daterangepicker({
         opens: 'right',
         "linkedCalendars": false,
         "autoApply": true,
         "parentEl": ".js-calendar",
         "showCustomRangeLabel": false,
         "locale": {
            "format": "DD.MM.YYYY",
            "separator": " - ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
               "Пн",
               "Вт",
               "Ср",
               "Чт",
               "Пт",
               "Сб",
               "Вс"
            ],
            "monthNames": [
               "Январь",
               "Февраль",
               "Март",
               "Апрель",
               "Май",
               "Июнь",
               "Июль",
               "Август",
               "Сентябрь",
               "Октябрь",
               "Ноябрь",
               "Декабрь"
            ],
            "firstDay": 1
         },
      }, function (start, end, label) {
         console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      });
   });
   $('input[name="departure"], .daterangepicker').on('focus', function () {

      $(this).daterangepicker({
         opens: 'right',
         singleDatePicker: true,
         "linkedCalendars": false,
         "autoApply": true,
         "parentEl": ".js-calendar",
         "showCustomRangeLabel": false,
         "locale": {
            "format": "DD.MM.YYYY",
            "separator": " - ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
               "Пн",
               "Вт",
               "Ср",
               "Чт",
               "Пт",
               "Сб",
               "Вс"
            ],
            "monthNames": [
               "Январь",
               "Февраль",
               "Март",
               "Апрель",
               "Май",
               "Июнь",
               "Июль",
               "Август",
               "Сентябрь",
               "Октябрь",
               "Ноябрь",
               "Декабрь"
            ],
            "firstDay": 1
         },
      });
   });
   // Календарь конец

   //  скролл 
   if ($('.wrapper').hasClass('page-policy')) {
      new SimpleBar(document.getElementById('mini-search__result'));
   }
   //  скролл конец

   // Выбор тарифа
   $('.form-policy-tariff__item').on('click', function () {
      // alert('g')
      $('.form-policy-tariff__item').removeClass('active');
      $(this).addClass('active');
   });
   // Выбор тарифа конец

   // Поиск страны
   $('#mini-search__input').keyup(function () {
      // alert('f');

      var input, filter, ul, li, a, i;
      input = document.getElementById("mini-search__input");
      filter = input.value.toUpperCase();
      ul = document.getElementById("mini-search__result");
      li = ul.getElementsByTagName("p");
      for (i = 0; i < li.length; i++) {
         // alert('f');
         a = li[i];
         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].classList.add('show');
         } else {
            li[i].classList.remove('show');
         }
      }
   });
   // Поиск страны конец

   // Попап
   $('.btn-popup-type-of-rest').on('click', function () {
      $('.popup-type-of-rest').fadeIn();
   });
   //нажатие вне body
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".popup__content").length && !$(e.target).closest(".btn-popup").length) {
         $('.popup').fadeOut();
      }
      e.stopPropagation();
   });
   $('.popup-close').on('click', function () {
      $('.popup').fadeOut();
   })
   //нажатие вне body
   // Попап конец

   // плавная прокрутка якоря
   const anchors = document.querySelectorAll('a[href*="#"]')

   for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
         e.preventDefault()

         const blockID = anchor.getAttribute('href').substr(1)

         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   }
   //плавная прокрутка якоря конец
});