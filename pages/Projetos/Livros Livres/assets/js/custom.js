!(function (e) {
  var t = {};
  function i(s) {
    if (t[s]) return t[s].exports;
    var a = (t[s] = { i: s, l: !1, exports: {} });
    return e[s].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function (e, t, s) {
      i.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: s,
        });
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/"),
    i((i.s = 11));
})({
  11: function (e, t, i) {
    e.exports = i("csPZ");
  },
  Adqk: function (e, t, i) {
    "use strict";
    e.exports = new (function (e) {
      var t = this;
      (this._bindEvents = function () {
        e(".create-new-account, a[data-action=register]").click(function (t) {
          t.preventDefault(),
            e("#register-modal").modal("show"),
            e("#register-form").find("input").first().focus(),
            e("#login-modal").unbind("hidden.bs.modal");
        }),
          e(".date-input").mask("00/00/0000"),
          e(".social-login-options .mp, .login-to-site").click(function (t) {
            t.preventDefault(), e("#login-modal").modal("show");
          }),
          e(".already-registered").click(function (t) {
            t.preventDefault(),
              e("#register-modal")
                .modal("hide")
                .on("hidden.bs.modal", function () {
                  e("#login-modal").modal("show"),
                    e("#login-form").find("input").first().focus(),
                    e("#register-modal").unbind("hidden.bs.modal");
                });
          }),
          e(".already-registered-to-site").click(function (t) {
            t.preventDefault(),
              e("#login-modal").modal("show"),
              e("#login-form").find("input").first().focus();
          }),
          e(".forgot-password").click(function (t) {
            t.preventDefault(),
              e("#login-modal")
                .modal("hide")
                .on("hidden.bs.modal", function () {
                  e("#recover-password-modal").modal("show"),
                    e("#login-modal").unbind("hidden.bs.modal");
                });
          }),
          e(".social-login-options .fb", e(".login-navbar")).click(function (
            t
          ) {
            t.preventDefault(),
              e("#login-modal").modal("hide"),
              e("#recover-password-modal-fb").modal("show");
          }),
          e(".create-account").click(function (t) {
            t.preventDefault(),
              e("#login-modal")
                .modal("hide")
                .on("hidden.bs.modal", function () {
                  e("#register-modal").modal("show"),
                    e("#register-form").find("input").first().focus(),
                    e("#login-modal").unbind("hidden.bs.modal");
                });
          }),
          e(".recover-password")
            .validator()
            .on("submit", function (i) {
              i.isDefaultPrevented() ||
                (e(".recover-password .has-error").removeClass("has-error"),
                (t.form_data = {
                  email: e(this).find("input[name=email]").val(),
                }),
                t._sendForm(this, function (t) {
                  if ((t = t.message || {}).error) {
                    var i = e(".recover-password input[name=email]").closest(
                        ".form-group"
                      ),
                      s = i.find(".help-inline.with-errors span");
                    i.addClass("has-error"), s.html(t.message);
                  } else alert("Uma mensagem com instruções para recuperar sua senha foi enviado ao seu e-mail!"), e("#recover-password-modal").modal("hide");
                }),
                i.preventDefault());
            }),
          e(".change-password").length > 0 &&
            e(".change-password")
              .validator()
              .on("submit", function (i) {
                i.isDefaultPrevented() ||
                  (e(".change-password .has-error").removeClass("has-error"),
                  (t.form_data = {
                    password: e(this).find("input[name=password]").val(),
                    confirmation: e(this)
                      .find("input[name=confirm_password]")
                      .val(),
                  }),
                  t._sendForm(this, function (t) {
                    if ((t = t.message || {}).error) {
                      var i = e(
                          ".change-password input[name=password]"
                        ).closest(".form-group"),
                        s = i.find(".help-inline.with-errors span");
                      i.addClass("has-error"), s.html(t.message);
                    } else
                      e("#changepass-modal")
                        .modal("hide")
                        .on("hidden.bs.modal", function () {
                          alert("Sua senha foi alterada com sucesso!"),
                            (window.location.href = "/");
                        });
                  }),
                  i.preventDefault());
              }),
          e(".login-form")
            .validator()
            .on("submit", function (i) {
              i.isDefaultPrevented() ||
                (e(".login-form .has-error").removeClass("has-error"),
                (t.form_data = {
                  email: e(this).find("input[name=email]").val(),
                  password: e(this).find("input[name=password]").val(),
                }),
                t._sendForm(this, function (t) {
                  if ((t = t.message || {}).error) {
                    var i = e(
                        ".login-form input[name=" + t.error + "]"
                      ).closest(".form-group"),
                      s = i.find(".help-inline.with-errors span");
                    i.addClass("has-error"), s.html(t.message);
                  } else window.location.replace("/home/logged");
                }),
                i.preventDefault());
            }),
          e(".register-form")
            .validator()
            .on("submit", function (i) {
              if (!i.isDefaultPrevented()) {
                e(".login-form .has-error").removeClass("has-error"),
                  (t.form_data = {
                    nickname: e(this).find("input[name=nickname]").val(),
                    email: e(this).find("input[name=email]").val(),
                    password: e(this).find("input[name=password]").val(),
                    confirm_password: e(this)
                      .find("input[name=confirm_password]")
                      .val(),
                    birth_date: e(this).find("input[name=birth_date]").val(),
                  });
                var s = this;
                t._sendForm(this, function (t) {
                  if ((t = t.message || {}).errors)
                    for (var i in t.errors) {
                      var a = e(
                          ".register-form input[name=" + t.errors[i].error + "]"
                        ).closest(".form-group"),
                        n = a.find(".help-inline.with-errors span");
                      a.addClass("has-error"), n.html(t.errors[i].message);
                    }
                  else
                    e(s)
                      .find("button[type=submit]")
                      .html(
                        '<img src="/assets/images/loading.png" alt="Carregando...">'
                      ),
                      e(".modal").modal("hide"),
                      window.location.replace("/home/logged");
                }),
                  i.preventDefault();
              }
            });
      }),
        (this._sendForm = function (t, i) {
          i = i || function () {};
          var s = e(t)
            .find("*[type=submit]")
            .click(function (e) {
              e.preventDefault();
            })
            .html();
          e(t)
            .find("button[type=submit]")
            .html('<img src="/assets/images/loading.png" alt="Carregando...">'),
            e.ajax({
              url: e(t).attr("action"),
              type: e(t).attr("method"),
              data: this.form_data || {},
              dataType: "json",
              success: function (a) {
                e(t).find("button[type=submit]").unbind("click").html(s), i(a);
              },
              error: function () {
                alert(
                  "Houve um erro ao comunicar o servidor. Por favor, tente novamente mais tarde."
                );
              },
            });
        }),
        this._bindEvents();
    })($);
  },
  DVor: function (e, t, i) {
    "use strict";
    var s =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    e.exports = new (function () {
      var e,
        t,
        i,
        a = $("#topnav").outerHeight(),
        n = $(window).width(),
        r = this;
      (this.resize = function () {}),
        (this.has_scrolled = function () {
          var e = $(window).scrollTop();
          Math.abs(i - e) <= 5 ||
            (e > i && e > a
              ? ($("#topnav").removeClass("nav-down").addClass("nav-up"),
                $("#subtopnav").animate({ top: "0px" }, 160),
                $(".login").removeClass("active"),
                $(".login-navbar").hide())
              : e + $(window).height() < $(document).height() &&
                ($("#topnav").removeClass("nav-up").addClass("nav-down"),
                $("#subtopnav").animate({ top: "60px" }, 215)),
            (i = e));
        }),
        (this.bind_events = function () {
          var i, a, n, r, o;
          if (
            (this.has_scrolled(),
            setInterval(
              function () {
                t &&
                  (e || !1 === shouldHideTopnav || this.has_scrolled(),
                  (t = !1));
              }.bind(this),
              250
            ),
            this.resize(),
            $(window).resize(
              function () {
                this.resize();
              }.bind(this)
            ),
            $(".menu-trigger").on("click", function (e) {
              e.preventDefault(),
                $(this).hasClass("active")
                  ? ($(this).removeClass("active"),
                    $(".main-menu-xs").slideUp())
                  : ($(this).addClass("active"),
                    $(".main-menu-xs").slideDown());
            }),
            $("a.page-scroll").bind("click", function (t) {
              0 != t.currentTarget.attributes[0].value.indexOf("/#") &&
                t.preventDefault();
              var i = $(this);
              if (i) {
                if (((e = !0), void 0 === $(this).data("offset"))) var s = 50;
                else s = $(this).data("offset");
                $("html, body")
                  .stop()
                  .animate(
                    { scrollTop: $(i.attr("href")).offset().top - s },
                    500,
                    function () {
                      e = !1;
                    }
                  );
              }
            }),
            $("ul.native li").each(function () {
              $(this).data(
                "offsetRight",
                $(this).offset().left + $(this).width()
              );
            }),
            $(window).on(
              "scroll",
              function () {
                this.adjust_active(),
                  $(".ui-autocomplete").is(":visible") || (t = !0);
              }.bind(this)
            ),
            $(".login").on("click", function () {
              $(this).hasClass("active")
                ? ($(this).removeClass("active"), $(".login-navbar").hide())
                : ($(this).addClass("active"), $(".login-navbar").show()),
                $(".register-tip").hide();
            }),
            $(".login-to-site").on("click", function (e) {
              e.preventDefault(),
                $("html, body").scrollTop(0),
                $(".login").addClass("active"),
                $(".login-navbar").show(),
                $(".register-tip").hide();
            }),
            $(".register-tip.not-registered .close").on(
              "click touchend",
              function (e) {
                e.preventDefault(),
                  $(".register-tip").hide(),
                  window.localStorage &&
                    window.localStorage.setItem("mP_registerTip", !0);
              }
            ),
            $(".register-tip.already-registered .close").on(
              "click touchend",
              function (e) {
                e.preventDefault(),
                  $(".register-tip").hide(),
                  window.localStorage &&
                    window.localStorage.setItem("mP_already_regTip", !0);
              }
            ),
            $(".btn-search").on(
              "click",
              function () {
                $(".search").hasClass("active")
                  ? this.disable_search()
                  : this.enable_search();
              }.bind(this)
            ),
            $("#topnav a").on("touchstart.menuLinks", function (e) {
              e.preventDefault(), (window.location.href = $(this).attr("href"));
            }),
            $("#topnav a").on("mouseover.menuLinks", function () {
              (i = $(this).data("target")) &&
                ($("#subtopnav ul.active").removeClass("active"),
                $("#subtopnav ul.native").hide(),
                $("#subtopnav ul, #subtopnav a.native").hide(),
                $(i).addClass("active").show());
            }),
            $("#subtopnav").on("mouseleave", "ul.active", function () {
              $(i).removeClass("active").hide(), $("#subtopnav .native").show();
            }),
            $.fn.sticky)
          ) {
            $("#subtopnav").sticky({ topSpacing: 60 });
            var c = $(".container-box").width() - 9;
            $(".page-internas .menu-tag, .internas-tag").css({ width: c });
            var l =
              ((n = $(window)),
              (r = $(".container-box").width() - 9),
              (o = function () {
                a.each(function (e) {
                  var t = $(this),
                    i = t.data("originalPosition");
                  if (n.width() >= 768 && $("body").hasClass("page-index"))
                    var s = n.scrollTop() + 2 * t.height() + 235;
                  else s = n.scrollTop() + 2 * t.height();
                  if (i <= s) {
                    var o = a.eq(e + 1);
                    o.data("originalPosition"), t.data("originalHeight");
                    t.addClass("fixed"), o.length > 0 && t.offset().top;
                  } else {
                    var c = a.eq(e - 1);
                    t.removeClass("fixed"),
                      c.length > 0 &&
                        n.scrollTop() <=
                          t.data("originalPosition") -
                            t.data("originalHeight") &&
                        c
                          .removeClass("absolute")
                          .removeAttr("style")
                          .css({ width: r });
                  }
                  var l = t.closest(".tag-container");
                  n.scrollTop() > l.outerHeight() + l.offset().top - 115 &&
                    t.removeClass("absolute").removeClass("fixed");
                });
              }),
              {
                load: function (e) {
                  "object" === (void 0 === e ? "undefined" : s(e)) &&
                    e instanceof jQuery &&
                    e.length > 0 &&
                    ((a = e.each(function () {
                      var e = $(this).wrap('<div class="followWrap" />');
                      e.data("originalPosition", e.offset().top)
                        .data("originalHeight", e.outerHeight())
                        .parent()
                        .height(e.height());
                    })),
                    n.off("scroll.stickies").on("scroll.stickies", function () {
                      o();
                    }),
                    n.on("resize.stickies", function () {
                      a.each(function () {
                        $(this).css({ width: $(".container-box").width() - 9 });
                      });
                    }));
                },
              });
            (($("body").hasClass("page-index") && $(window).width() < 768) ||
              $("body").hasClass("page-internas")) &&
              l.load($(".menu-tag")),
              $("body").scrollspy({ target: "#subtopnav .navo", offset: 100 });
          }
        }),
        (this.disable_search = function () {
          $(".nav ul").css("opacity", ""),
            $(".nav ul").css("padding-right", ""),
            $(".search").animate({ width: 40 }, 600, function () {
              $(".search").css({ position: "", right: "" }),
                $(".search").removeClass("active"),
                $(".random-series").hide(),
                $(".brand-expanded").css("opacity", ""),
                $(".brand-expanded").css("padding-right", "");
            }),
            $(".navbar-brand a")
              .off("mouseover.searchDisable")
              .off("touchstart.searchDisable");
        }),
        (this.enable_search = function () {
          $(".search").addClass("active"),
            $(".search").css({
              position: "absolute",
              right: $(".user-nav").width() + "px",
            });
          var e =
            "none" != $(".nav ul.main-menu").css("display")
              ? $(".nav").width() - $(".user-nav").width() - 40
              : $(".navbar-brand-xs").width() - 35;
          $("#searchInput").css({ width: e - 50 }),
            $(".nav ul").css("opacity", 0),
            $(".nav ul").css("padding-right", "45px"),
            $(".brand-expanded").css("opacity", 0),
            $(".brand-expanded").css("padding-right", "45px"),
            $(".random-series").show(),
            $(".search").animate(
              { width: e - $(".random-series").width() },
              600,
              function () {
                $("#searchInput").focus();
              }
            ),
            $(".navbar-brand a")
              .on("mouseover.searchDisable", function () {
                r.disable_search();
              })
              .on("touchstart.searchDisable", function (e) {
                e.preventDefault(), r.disable_search();
              })
              .off("touchstart.menuLinks");
        }),
        (this.adjust_active = function () {
          var e = $("ul.native li.active");
          if (e.data("offsetRight") > n) {
            var t = -(e.data("offsetRight") - n);
            $("ul.native").css({
              transform: "translate3d(" + t + "px, 0px, 0px)",
            });
          } else $("ul.native").removeAttr("style");
        }),
        (this.start = function () {
          window.localStorage &&
            (window.localStorage.getItem("mP_already_regTip") ||
              $(".register-tip.already-registered").show()),
            this.bind_events();
        });
    })();
  },
  DaXU: function (e, t, i) {
    "use strict";
    e.exports = new (function () {
      (this.bind_events = function () {
        $(".gooey-menu-open-button").unbind("click"),
          $(".gooey-menu-open-button").click(function (e) {
            e.preventDefault(), $(this).parent().toggleClass("open");
          });
      }),
        (this.start = function () {
          (window.GooeyToggle = this.bind_events), this.bind_events();
        });
    })();
  },
  J9QE: function (e, t, i) {
    "use strict";
    e.exports = new (function () {
      this.start = function () {
        $(".carousel").touchCarousel({
          directionNav: !1,
          scrollbar: !1,
          cursor: "col-resize",
        });
      };
    })();
  },
  "Ja/2": function (e, t, i) {
    "use strict";
    e.exports = new (function () {
      (this.offset = 0),
        (this.bind_events = function () {
          (this.offset = $(".content-pagination").offset().top),
            $(window).scroll(
              function (e) {
                $(window).scrollTop() + $(window).height() >= this.offset
                  ? $(".content-pagination").css({ position: "relative" })
                  : $(".content-pagination").css({ position: "fixed" });
              }.bind(this)
            ),
            $(window).trigger("scroll");
        }),
        (this.start = function () {
          if ($(".content-pagination").length <= 0) return !1;
          this.bind_events();
        });
    })();
  },
  TlmP: function (e, t, i) {
    "use strict";
    e.exports = new (function () {
      (this._instance = null),
        (this.withPromise = function () {
          var e = this;
          return (
            (this.savedSVGs = {}),
            (this.sources = {}),
            (this.convert = function () {
              $("img.mp-icon").each(function (t, i) {
                var s = $(i).attr("src");
                e.sources[s] = s;
              });
              var t = [];
              for (var i in e.sources)
                t.push(
                  new Promise(function (t, s) {
                    var a = e.sources[i];
                    e.savedSVGs[a]
                      ? t(!0)
                      : $.get(
                          a,
                          function (i) {
                            var s = $(i).find("svg");
                            (e.savedSVGs[a] = s[0].outerHTML),
                              t(e.savedSVGs[a]);
                          },
                          "xml"
                        );
                  })
                );
              Promise.all(t).then(function () {
                $("img.mp-icon").each(function (t, i) {
                  var s = $(this),
                    a = s.attr("id"),
                    n = s.attr("class"),
                    r = s.attr("src"),
                    o = $(e.savedSVGs[r]);
                  void 0 !== a && (o = o.attr("id", a)),
                    void 0 !== n && (o = o.attr("class", n + " replaced-svg")),
                    (o = o.removeAttr("xmlns:a")),
                    s.replaceWith(o);
                });
              });
            }),
            this.convert
          );
        }),
        (this.withoutPromise = function () {
          $("img.mp-icon").each(function () {
            var e = jQuery(this),
              t = e.attr("id"),
              i = e.attr("class"),
              s = e.attr("src");
            $.get(
              s,
              function (s) {
                var a = $(s).find("svg");
                void 0 !== t && (a = a.attr("id", t)),
                  void 0 !== i && (a = a.attr("class", i + " replaced-svg")),
                  (a = a.removeAttr("xmlns:a"));
                e.parent();
                e.replaceWith(a);
              },
              "xml"
            );
          });
        }),
        (this.instantiate = function () {
          "Promise" in window
            ? (this._instance = new this.withPromise())
            : (this._instance = this.withoutPromise);
        }),
        (this.start = function () {
          this.instantiate(),
            (window.IMGtoSVG = this._instance),
            window.IMGtoSVG();
        });
    })();
  },
  csPZ: function (e, t, i) {
    "use strict";
    new (function () {
      (window._EventHandler = i("efH0")),
        (this.ServiceWorker = i("lGDA")),
        (this.SVGInjector = i("TlmP")),
        (this.NavBar = i("DVor")),
        (this.Carousel = i("J9QE")),
        (this.GooeyToggle = i("DaXU")),
        (this.SearchBar = i("qll4")),
        (this.RegisterTips = i("jJcW")),
        (this.PaginationFloat = i("Ja/2")),
        (this.UserTags = i("yGNh")),
        (this.init = function () {
          this.ServiceWorker.start(),
            this.GooeyToggle.start(),
            this.SVGInjector.start(),
            this.UserTags.start(),
            this.Carousel.start(),
            this.RegisterTips.start(),
            "ontouchstart" in window && $("#push-subscribe-container").hide(),
            $(document).ready(
              function () {
                this.NavBar.start(),
                  this.SearchBar.start(),
                  this.PaginationFloat.start();
              }.bind(this)
            );
        }),
        this.init();
    })(),
      $("a.toggle-author").on("click", function (e) {
        e.preventDefault(), $("#series-desc .content-wraper").hide();
        var t = $(this).data("target");
        $(t).toggle();
      }),
      $(".toggle-author").on("click", function (e) {
        $("#subtopnav li").removeClass("active"),
          $("#subtopnav .toggle-author[data-target=#same-author]")
            .parent()
            .addClass("active");
      }),
      $("#menu-serie a").on("click", function (e) {
        $("#subtopnav .active").removeClass("active"),
          $(this).parent().addClass("active");
      }),
      $(document).ready(function () {
        (window.SideMenu = i("x9C+")),
          i("zwJy"),
          i("Adqk"),
          i("uu9D"),
          i("s7YB");
      }),
      $(".cover").on("click", function (e) {
        var t = e.target.currentSrc;
        $("#overlay-zoom img").remove(),
          $("#overlay-zoom").html("<img src=" + t + " />"),
          $("#overlay-zoom")
            .addClass("open")
            .one("click", function () {
              $(this).removeClass("open");
            });
      }),
      $(document).ready(function () {
        localStorage.getItem("alertaCookie") ||
          $(".cookie-notification").css("display", "block");
      }),
      $(".cookie-notification").on("click", function () {
        localStorage.setItem("alertaCookie", "cookieAtivo"),
          $(".cookie-notification").css("display", "none");
      });
  },
  efH0: function (e, t, i) {
    "use strict";
    e.exports = function () {
      (this.callbacks = {}),
        (this._triggerEvents = function (e) {
          if (this.callbacks[e])
            try {
              for (var t = 0; t < this.callbacks[e].length; t++)
                this.callbacks[e][t]();
            } catch (e) {
              return !1;
            }
        }),
        (this.on = function (e, t) {
          this.callbacks[e] || (this.callbacks[e] = []),
            this.callbacks[e].push(t);
        }),
        (this.off = function (e) {
          delete this.callbacks[e];
        });
    };
  },
  jJcW: function (e, t, i) {
    "use strict";
    e.exports = new (function () {
      (this.timer = null),
        (this.timerDelay = 6e3),
        (this.sliderElement = $(".slide-tips")),
        (this.slides = []),
        (this.currentSlide = 0),
        (this._startTimer = function () {
          this.timer && clearInterval(this.timer),
            (this.timer = setInterval(
              function () {
                this.nextSlide();
              }.bind(this),
              this.timerDelay
            ));
        }),
        (this.nextSlide = function () {
          this.currentSlide++, this.goToSlide(this.currentSlide);
        }),
        (this.prevSlide = function () {
          this.currentSlide--, this.goToSlide(this.currentSlide);
        }),
        (this.goToSlide = function (e) {
          e > this.slides.length - 1 && (e = 0),
            e < 0 && (e = this.slides.length - 1),
            (this.currentSlide = e),
            $(".slide-tips li.active").fadeOut(
              function () {
                $(this.slides[e]).fadeIn(
                  function () {
                    $(".slide-tips li").removeClass("active"),
                      $(this.slides[e]).addClass("active");
                  }.bind(this)
                );
              }.bind(this)
            );
        }),
        (this.init = function () {
          this.sliderElement &&
            ($(this.sliderElement)
              .find("li.tip")
              .each(
                function (e, t) {
                  this.slides.push(t);
                }.bind(this)
              ),
            this.goToSlide(0),
            this._startTimer());
        }),
        (this.start = function () {
          $(this.sliderElement).length > 0 && this.init();
        });
    })();
  },
  lGDA: function (e, t, i) {
    "use strict";
    e.exports = new (function () {
      this.start = function () {
        return (
          !(!1 in navigator) &&
          !!navigator.serviceWorker &&
          (navigator.serviceWorker.getRegistrations().then(function (e) {
            for (var t in e) {
              var i = e[t];
              !1 !== window.location.href.indexOf("vre.com") && i.unregister(),
                i.active &&
                  !1 ===
                    /\/sw\-manga\.bundle\.js\?v=2\.18\.0$/gi.test(
                      i.active.scriptURL
                    ) &&
                  (console.log("Removendo service worker antigo"),
                  i.unregister());
            }
          }),
          void (window.serviceWorkerRegistration =
            window.serviceWorkerRegistration ||
            navigator.serviceWorker.register("/sw-manga.bundle.js?v=2.18.0", {
              scope: "/",
            })))
        );
      };
    })();
  },
  qll4: function (e, t, i) {
    "use strict";
    e.exports = new (function () {
      var e = this;
      (this.activated = !1),
        (this.instance = null),
        (this.init = function (t, i, s, a) {
          (s = s || function () {}),
            (a = a || function () {}),
            (this.instance = $(t)
              .autocomplete({
                minLength: 2,
                source: function (e, i) {
                  $.ajax({
                    url: "/lib/search/series.json",
                    type: "POST",
                    data: { search: $(t).val() },
                    dataType: "json",
                    success: function (e) {
                      Object.keys(e).length > 0 && i(e);
                    },
                    error: function () {
                      i();
                    },
                  });
                },
                html: !0,
                position: i,
                open: function (e, t) {
                  s();
                },
                close: function (e, t) {
                  a();
                },
                show_loading:
                  '<li><div style="display:block; width:100%; padding:30px 10px;"><center><img src="/assets/images/loading-search.gif" width="45" /></center></div></li>',
              })
              .autocomplete("instance")),
            (this.instance._renderMenu = function (t, i) {
              if (!i) return !1;
              if ((e._buildMenu(t), !e._checkItems(i)))
                return (
                  t
                    .find("li .auto-complete-search-container")
                    .append(
                      "<ul><li><h2>Desculpe, nenhum resultado foi encontrado para sua busca</h2></li></ul>"
                    ),
                  t
                    .find(
                      "li .auto-complete-search-container .search-options a"
                    )
                    .addClass("disabled"),
                  !1
                );
              for (var s in ((e.activated = !1), i)) {
                t.find("li .auto-complete-search-container").append(
                  '<ul rel="' + s + '"></ul>'
                );
                var a = i[s];
                Object.keys(a).length > 0 &&
                  (t
                    .find("li .auto-complete-search-container a[rel=" + s + "]")
                    .attr("class", "enabled"),
                  t
                    .find("li .auto-complete-search-container a[rel=" + s + "]")
                    .append(" (" + Object.keys(a).length + ")"),
                  $.each(a, function (i, a) {
                    return e.instance._renderItem(
                      t.find(
                        "li .auto-complete-search-container ul[rel=" + s + "]"
                      ),
                      a,
                      s
                    );
                  }),
                  !1 === e.activated &&
                    (t
                      .find(
                        "li .auto-complete-search-container a[rel=" + s + "]"
                      )
                      .addClass("active"),
                    t
                      .find(
                        "li .auto-complete-search-container ul[rel=" + s + "]"
                      )
                      .addClass("active"),
                    (e.activated = !0)));
              }
              $(".auto-complete-search-container .search-options a").click(
                function (t) {
                  if ((t.preventDefault(), $(this).hasClass("disabled")))
                    return !1;
                  var i = parseInt($(this).attr("rel"));
                  e._changeResultTab(i);
                }
              ),
                UserTags.trigger("newTagMenu"),
                UserTags.trigger("newFavorite"),
                window.IMGtoSVG(),
                $(".ui-autocomplete .carousel").touchCarousel({
                  directionNav: !1,
                  scrollbar: !1,
                });
            }),
            (this.instance._renderItem = function (t, i, s) {
              if (("no-results" == i.value && (i = !1), !i)) return !1;
              var a = this.term.split(" ").join("|");
              switch (parseInt(s)) {
                case 0:
                  return e._renderSeries(t, i, a);
                case 1:
                  return e._renderCategories(t, i, a);
                case 2:
                  return e._renderGroups(t, i, a);
              }
              return !1;
            });
        }),
        (this._changeResultTab = function (e) {
          $(".auto-complete-search-container .active").removeClass("active"),
            $(
              ".auto-complete-search-container .search-options a[rel=" +
                e +
                "], .auto-complete-search-container ul[rel=" +
                e +
                "]"
            ).addClass("active");
        }),
        (this._buildMenu = function (e) {
          e.html(""),
            e.append(
              '<li><div class="auto-complete-search-container"></div></li>'
            ),
            e
              .find("li .auto-complete-search-container")
              .append(
                '<div class="search-options"><div><a class="disabled" href="#" rel="0">Séries</a></div><div><a class="disabled" href="#" rel="1">Categorias</a></div><div><a class="disabled" href="#" rel="2">Grupos</a></div></div>'
              );
        }),
        (this._checkItems = function (e) {
          return !(
            0 == Object.keys(e[0]).length &&
            0 == Object.keys(e[1]).length &&
            0 == Object.keys(e[2]).length
          );
        }),
        (this._renderSeries = function (e, t, i) {
          for (
            var s = new RegExp("(" + i + ")", "gi"),
              a = t.label.replace(s, "<span>$1</span>"),
              n = "",
              r = 0;
            r < t.categories.length;
            r++
          )
            n +=
              '<li class="touchcarousel-item"><span class="button">' +
              t.categories[r].name +
              "</span></li>";
          var o = "",
            c = "",
            l = "";
          t._user_tags &&
            ((l = UserTags._buildGooeyMenu(t.id_serie, t._user_tags)),
            (o = UserTags._filterFavorite(t._user_tags, t.id_serie)),
            (c = UserTags._filterUserTag(t._user_tags)));
          var d = "";
          t.is_complete && (d = '<i class="complete-series">Completo</i>');
          var u = t.score > 0 ? t.score : 0,
            h = t.author;
          return (
            t.artist &&
              t.artist != t.author &&
              (h = t.author + " & " + t.artist + " (Arte)"),
            $("<li>")
              .append(
                l +
                  '<a href="' +
                  t.link +
                  '" class="link-block"><div class="series-img"><div class="cover-image"> <picture> <source srcset="' +
                  t.cover_thumb_avif +
                  '" type="image/avif"> <img src="' +
                  t.cover_thumb +
                  '" referrerpolicy="no-referrer"> </picture>' +
                  o +
                  " " +
                  c +
                  '</div></div><div class="series-info touchcarousel"><span class="series-title">' +
                  a +
                  '</span><span class="series-author">' +
                  d +
                  h +
                  '</span><div class="carousel"><ul class="tags touchcarousel-container"><li class="rating touchcarousel-item"><span class="button"><img src="/assets/images/layout/star-rating.png" alt="rating" /><span class="nota">' +
                  u +
                  "</span></span></li>" +
                  n +
                  "</ul></div></div></a>"
              )
              .appendTo(e),
            !0
          );
        }),
        (this._renderCategories = function (e, t, i) {
          var s = new RegExp("(" + i + ")", "gi"),
            a = t.label.replace(s, "<span>$1</span>");
          return (
            $("<li>")
              .append(
                '<a href="' +
                  t.link +
                  '" class="link-block category-block"><div class="series-info touchcarousel"><span class="series-title">' +
                  a +
                  '</span><span class="series-author"><img alt="Capítulos" src="/assets/images/layout/chapters.png"><strong>' +
                  t.titles +
                  '</strong> títulos</span><span class="series-author"><img alt="Capítulos" src="/assets/images/icons/views.svg" class="mp-icon views-icon"><strong></strong> leituras</span></div></a>'
              )
              .appendTo(e),
            !0
          );
        }),
        (this._renderGroups = function (e, t, i) {
          var s = new RegExp("(" + i + ")", "gi"),
            a = t.label.replace(s, "<span>$1</span>");
          return (
            $("<li>")
              .append(
                '<a href="' +
                  t.link +
                  '" class="link-block group-block"><div class="series-img"><div class="cover-image" style="background-image: url(' +
                  t.image +
                  ');"></div></div><div class="series-info touchcarousel"><span class="series-title">' +
                  a +
                  '</span><span class="series-author"><img alt="Capítulos" src="/assets/images/layout/chapters.png"><strong>' +
                  t.titles +
                  "</strong> títulos</span></div></a>"
              )
              .appendTo(e),
            !0
          );
        }),
        (this.start = function () {
          (window.SearchBar = this),
            window.SearchBar.init(
              "#searchInput",
              { of: "#topnav .container", my: "left top+60px" },
              function () {
                $("#overlay").show();
              },
              function () {
                $("#overlay").hide();
              }
            );
        });
    })();
  },
  s7YB: function (e, t, i) {
    "use strict";
    var s = (function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s);
        }
      }
      return function (t, i, s) {
        return i && e(t.prototype, i), s && e(t, s), t;
      };
    })();
    e.exports = new ((function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.element = $(".add-to-homescreen-wrapper")),
          this.bindEvents();
      }
      return (
        s(e, [
          {
            key: "getDeferredPrompt",
            value: function () {
              return new Promise(function (e, t) {
                window.addEventListener("beforeinstallprompt", function (t) {
                  t.preventDefault(), e(t);
                });
              });
            },
          },
          {
            key: "bindEvents",
            value: function () {
              var e = this;
              this.element.find(".close").on("click", function (t) {
                t.preventDefault(), e.hideCustomPrompt();
              }),
                this.getDeferredPrompt().then(function (t) {
                  e.element.find(".install").on("click", function (i) {
                    i.preventDefault(),
                      t.prompt(),
                      t.userChoice.then(function (t) {
                        e.hideCustomPrompt();
                      });
                  }),
                    e.showCustomPrompt();
                }),
                window.addEventListener("appinstalled", function (t) {
                  e.hideCustomPrompt();
                });
            },
          },
          {
            key: "showCustomPrompt",
            value: function () {
              this.element.show();
            },
          },
          {
            key: "hideCustomPrompt",
            value: function () {
              this.element.hide();
            },
          },
        ]),
        e
      );
    })())();
  },
  uu9D: function (e, t, i) {
    "use strict";
    e.exports = new (function (e) {
      var t = this;
      (this._bindEvents = function () {
        e("._user_favorite, .favorite-btn").off("click"),
          e("._user_favorite, .favorite-btn").on("click", function (e) {
            e.preventDefault(), t._favoriteClick(this);
          });
      }),
        (this._favoriteClick = function (t) {
          var i = e(t).data("id-serie");
          e(t).hasClass("is_favorite")
            ? this.unfavorite(i, t)
            : this.favorite(i, t);
        }),
        (this.favorite = function (i, s) {
          e(
            "._user_favorite[data-id-serie=" +
              i +
              "], .favorite-btn[data-id-serie=" +
              i +
              "]"
          ).unbind("click"),
            e
              .ajax({
                url: "/users/favorite.json",
                type: "POST",
                data: { id_serie: i },
                dataType: "json",
                success: function (t) {
                  (t = t.message || {}).error
                    ? alert(t.message)
                    : (e(
                        "._user_favorite[data-id-serie=" +
                          i +
                          "], .favorite-btn[data-id-serie=" +
                          i +
                          "]"
                      ).addClass("is_favorite"),
                      e(".favorite-btn[data-id-serie=" + i + "]")
                        .parent()
                        .addClass("is_favorite"));
                },
                error: function () {
                  alert(
                    "Houve um erro ao comunicar o servidor. Por favor, tente novamente mais tarde."
                  );
                },
              })
              .done(function () {
                e(
                  "._user_favorite[data-id-serie=" +
                    i +
                    "], .favorite-btn[data-id-serie=" +
                    i +
                    "]"
                ).on("click", function (e) {
                  e.preventDefault(), t._favoriteClick(this);
                });
              });
        }),
        (this.unfavorite = function (i, s) {
          e(
            "._user_favorite[data-id-serie=" +
              i +
              "], .favorite-btn[data-id-serie=" +
              i +
              "]"
          ).unbind("click"),
            e
              .ajax({
                url: "/users/unfavorite.json",
                type: "POST",
                data: { id_serie: i },
                dataType: "json",
                success: function (t) {
                  (t = t.message || {}).error
                    ? alert(t.message)
                    : (e(
                        "._user_favorite[data-id-serie=" +
                          i +
                          "], .favorite-btn[data-id-serie=" +
                          i +
                          "]"
                      ).removeClass("is_favorite"),
                      e(".favorite-btn[data-id-serie=" + i + "]")
                        .parent()
                        .removeClass("is_favorite"));
                },
                error: function () {
                  alert(
                    "Houve um erro ao comunicar o servidor. Por favor, tente novamente mais tarde."
                  );
                },
              })
              .done(function () {
                e(
                  "._user_favorite[data-id-serie=" +
                    i +
                    "], .favorite-btn[data-id-serie=" +
                    i +
                    "]"
                ).on("click", function (e) {
                  e.preventDefault(), t._favoriteClick(this);
                });
              });
        }),
        this._bindEvents(),
        window.UserTags.on(
          "newFavorite",
          function () {
            this._bindEvents();
          }.bind(this)
        );
    })($);
  },
  "x9C+": function (e, t, i) {
    "use strict";
    e.exports = new (function (e) {
      var t = this;
      (this.EventHandler = new window._EventHandler()),
        (this.on = this.EventHandler.on.bind(this.EventHandler)),
        (this.off = this.EventHandler.off.bind(this.EventHandler)),
        (this.trigger = this.EventHandler._triggerEvents.bind(
          this.EventHandler
        ));
      var i = window.innerHeight ? window.innerHeight : e(window).height();
      (this.is_open = !1),
        (this.is_animating = !1),
        (this.menu_element = e("#mp-menu")),
        (this.close_element = e(".side-menu-header .close a")),
        (this.menuTrigger = e("#trigger-menu, .user-button")),
        e(this.menuTrigger).click(
          function (e) {
            e.preventDefault(),
              window.localStorage &&
                window.localStorage.setItem("mP_registerTip", !0),
              this.toggleMenu();
          }.bind(this)
        ),
        e(this.close_element).click(
          function (e) {
            e.preventDefault(), this.toggleMenu();
          }.bind(this)
        ),
        e("html, body").on(
          "mousedown",
          function (e) {
            this.mouseTarget = e.target;
          }.bind(this)
        ),
        e("html, body").click(
          function (t) {
            if (!this.is_open) return !0;
            0 !== e(this.menu_element).has(t.target).length ||
              e(this.menu_element).is(t.target) ||
              (0 !== e(this.menu_element).has(this.mouseTarget).length ||
                e(this.menu_element).is(this.mouseTarget) ||
                this.toggleMenu(),
              t.stopPropagation());
          }.bind(this)
        ),
        (this.toggleMenu = function (t) {
          (t = t || !1),
            this.is_animating ||
              (this.is_open || !0 === t
                ? ((this.is_animating = !0),
                  this._closeEvents(),
                  setTimeout(
                    function () {
                      (this.is_animating = !1),
                        e(".side-menu-container").removeClass("open"),
                        e(".mp-menu").hide();
                    }.bind(this),
                    500
                  ),
                  (this.is_open = !1))
                : (this._openEvents(),
                  (this.is_animating = !0),
                  (this.is_open = !0),
                  setTimeout(
                    function () {
                      (this.is_animating = !1),
                        e(".side-menu-container").addClass("open");
                    }.bind(this),
                    100
                  )));
        }),
        (this._openEvents = function () {
          e(window).scrollTop(1),
            e("html, body").addClass("no-scroll"),
            e("#overlay").show(),
            e("#morph-shape-svg").height(i),
            e("#morph-shape").css({ top: e(window).scrollTop() }),
            e(".mp-menu .slimScrollDiv").css({ top: e(window).scrollTop() }),
            e(this.menu_element).show(),
            setTimeout(
              function () {
                e(this.menu_element).addClass("open-menu"),
                  this._recreateTouchCarousel(),
                  setTimeout(function () {
                    window.SiteTour && window.SiteTour.start();
                  }, 700);
              }.bind(this),
              1
            ),
            e("html, body").addClass("open-menu"),
            this._startFavoriteList(),
            (document.cookie =
              "mP_already_regTip=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"),
            e(".register-tip").hide();
        }),
        (this._closeEvents = function () {
          e("html, body").removeClass("no-scroll"),
            e(".open-menu").removeClass("open-menu"),
            e("#overlay").hide(),
            this._closeHistory(),
            this._resetFavoriteList();
        }),
        e(".mp-level").height(i),
        e(window).on("resize", function () {
          (i = window.innerHeight ? window.innerHeight : e(window).height()),
            e(".mp-level").height(i);
        }),
        e(".notification-toggle").on(
          "click",
          function (e) {
            e.preventDefault(), this._toggleNotifications();
          }.bind(this)
        ),
        (this._toggleNotifications = function () {
          e(".notification-toggle").hasClass("open")
            ? (e(".notification-toggle .arrow-icon").attr(
                "class",
                this._toggleSVGClass(
                  e(".notification-toggle .arrow-icon").attr("class"),
                  "down",
                  "up"
                )
              ),
              e("ul.notifications-list").slideUp())
            : (e(".notification-toggle .arrow-icon").attr(
                "class",
                this._toggleSVGClass(
                  e(".notification-toggle .arrow-icon").attr("class"),
                  "up",
                  "down"
                )
              ),
              e("ul.notifications-list").slideDown()),
            e(".notification-toggle").toggleClass("open");
        }),
        e(".stats-nav .search-button").on(
          "click",
          function (e) {
            e.preventDefault(), this._toggleFavoriteSearch();
          }.bind(this)
        ),
        (this._toggleFavoriteSearch = function () {
          var t = e(".stats-nav .search-input");
          t.hasClass("open")
            ? (t.removeClass("open"),
              setTimeout(function () {
                t.hide();
              }, 500))
            : (t.show(),
              setTimeout(function () {
                t.addClass("open");
              }, 1));
        }),
        (this.__favorite = {
          page: 1,
          reachedEnd: !1,
          lastFilter: "all",
          HTML: {
            item: '<li class="touchcarousel-item"><a href="#{link}" title="#{name}"><div class="series-cover"> <picture> <source srcset="#{cover_thumb_avif}" type="image/avif"> <img src="#{cover_thumb}" referrerpolicy="no-referrer"> </picture> #{tags}<div class="chapters"><span class="chapter-number">#{number}</span>#{has_more}</div></div></a></li>',
            has_more:
              '<span class="chapter-number"><img src="/assets/images/icons/etc.svg" class="mp-icon etc-icon" /></span>',
            tags: '<div class="favorite-overlay #{tag}"><img src="/assets/images/icons/#{iconName}.svg" class="mp-icon #{iconName}-icon" /></div>',
          },
          regex: {
            link: /\#\{link\}/g,
            name: /\#\{name\}/g,
            cover: /\#\{cover\}/g,
            cover_thumb: /\#\{cover_thumb\}/g,
            cover_avif: /\#\{cover_avif\}/g,
            cover_thumb_avif: /\#\{cover_thumb_avif\}/g,
            tags: /\#\{tags\}/g,
            number: /\#\{number\}/g,
            has_more: /\#\{has_more\}/g,
            tag: /\#\{tag\}/g,
            iconName: /\#\{iconName\}/g,
          },
        }),
        (this._startFavoriteList = function () {
          e(".tag-stats ul li").click(function (i) {
            i.preventDefault();
            var s = "all";
            return (
              e(this).hasClass("active") ||
                (e(".tag-stats ul li.active").removeClass("active"),
                (s = parseInt(e(this).attr("data-tag")))),
              e(".favorite-list").attr("class", "favorite-list"),
              e(".favorite-list").addClass(t._filterHistoryTag(s)),
              e(".favorite-list h2").html(t._filterHistoryTag(s)),
              e(this).toggleClass("active"),
              t._loadMoreFavorites(s)
            );
          }),
            this._loadMoreFavorites("all");
        }),
        (this._resetFavoriteList = function () {
          (this.__favorite.page = 1),
            (this.__favorite.reachedEnd = !1),
            e(".favorite-series-list").html(""),
            this._recreateTouchCarousel();
        }),
        (this._recreateTouchCarousel = function () {
          var i = e(".fav-series-carousel");
          i.data("touchCarousel") && i.data("touchCarousel").destroy2(),
            i.touchCarousel({
              directionNav: !1,
              scrollbar: !1,
              multiRow: !0,
              onLastReached: function () {
                t._loadMoreFavorites(t.__favorite.lastFilter);
              },
            });
        }),
        (this._loadMoreFavorites = function (i) {
          if (
            (i !== this.__favorite.lastFilter &&
              ((this.__favorite.lastFilter = i), this._resetFavoriteList()),
            !0 !== this.__favorite.reachedEnd)
          ) {
            e(".loading-fav").show();
            var s = !1;
            1 == this.__favorite.page && (s = !0),
              e
                .ajax({
                  url:
                    "/users/favorite_list/" +
                    this.__favorite.lastFilter +
                    ".json?page=" +
                    this.__favorite.page++,
                  type: "GET",
                  dataType: "json",
                  success: function (a) {
                    return a.message
                      ? (t._closeHistory(),
                        void setTimeout(function () {
                          t._generateFavorites(a.message);
                        }, 250))
                      : !0 === s && "all" === i
                      ? setTimeout(
                          function () {
                            this._openHistory(
                              e(".actions-buttons li[data-tag=4]")
                            );
                          }.bind(this),
                          250
                        )
                      : void (this.__favorite.reachedEnd = !0);
                  }.bind(this),
                  error: function () {},
                })
                .done(function () {
                  e(".loading-fav").hide();
                });
          }
        }),
        (this._generateFavorites = function (t) {
          for (var i = 0; i < t.length; i++) {
            var s = t[i],
              a = "",
              n = "";
            if (
              (s.has_more && (n = this.__favorite.HTML.has_more), s._user_tags)
            ) {
              var r = this._getTagData(s._user_tags);
              r.name &&
                r.icon &&
                (a = this.__favorite.HTML.tags
                  .replace(this.__favorite.regex.tag, r.name)
                  .replace(this.__favorite.regex.iconName, r.icon));
            }
            e(".favorite-series-list").append(
              this.__favorite.HTML.item
                .replace(this.__favorite.regex.tags, a)
                .replace(this.__favorite.regex.has_more, n)
                .replace(this.__favorite.regex.link, s.link)
                .replace(this.__favorite.regex.name, s.name)
                .replace(this.__favorite.regex.number, s.number)
                .replace(this.__favorite.regex.cover, s.cover)
                .replace(this.__favorite.regex.cover_thumb, s.cover_thumb)
                .replace(this.__favorite.regex.cover_avif, s.cover_avif)
                .replace(
                  this.__favorite.regex.cover_thumb_avif,
                  s.cover_thumb_avif
                )
            );
          }
          this._recreateTouchCarousel(),
            setTimeout(function () {
              window.IMGtoSVG();
            }, 1);
        }),
        (this._getTagData = function (e) {
          var t = { name: "", icon: "" };
          return (
            e.will_read
              ? (t = { name: "lerei", icon: "tag" })
              : e.already_read
              ? (t = { name: "read", icon: "lido" })
              : e.stopped_reading && (t = { name: "parei", icon: "parei" }),
            t
          );
        }),
        (this._bindMarkAll = function () {
          e(".mark-all").unbind("click"),
            e(".mark-all").click(function (e) {
              e.preventDefault(),
                confirm(
                  "Tem certeza de que deseja marcar todas as séries pendentes como lidas?"
                ) && t._markAllAsRead();
            });
        }),
        (this._markAllAsRead = function () {
          e(".mark-all").unbind("click"),
            e
              .ajax({
                url: "/users/mark_all_as_read.json",
                type: "GET",
                dataType: "json",
                success: function (e) {
                  e.message.error
                    ? alert(e.message.message)
                    : (t._resetFavoriteList(), t._startFavoriteList());
                }.bind(this),
                error: function () {},
              })
              .done(function () {
                t._bindMarkAll();
              });
        }),
        this._bindMarkAll(),
        (this._history = {
          HTML: {
            item: '<li> <a href="#{link}" class="link-block"> #{gooey} <div class="series-item">  <div class="series-image">  <div class="cover-image"> <picture> <source srcset="#{cover_thumb_avif}" type="image/avif"> <img src="#{cover_thumb}" referrerpolicy="no-referrer"> </picture>  </div> </div> <div class="series-information"> <span class="title">#{name}</span> <span class="chapter">#{reading_taxonomy} leitura: <strong>Capítulo #{number}</strong></span> </div> </div> </a> </li>',
          },
          regex: {
            link: /\#\{link\}/g,
            name: /\#\{name\}/g,
            cover: /\#\{cover\}/g,
            cover_thumb: /\#\{cover_thumb\}/g,
            cover_avif: /\#\{cover_avif\}/g,
            cover_thumb_avif: /\#\{cover_thumb_avif\}/g,
            number: /\#\{number\}/g,
            gooey: /\#\{gooey\}/g,
            reading_taxonomy: /\#\{reading_taxonomy\}/g,
          },
          currentTag: !1,
          page: 1,
          reachedEnd: !1,
          lastItemOffset: !1,
        }),
        (this._resetHistory = function () {
          (this._history.currentTag = !1),
            (this._history.page = 1),
            (this._history.lastItemOffset = !1),
            (this._history.reachedEnd = !1),
            this.off("_scrollReachedBottom"),
            e(".actions-container").removeClass(
              "lido lerei lendo parei avaliou"
            ),
            e(".actions-buttons li").removeClass("active"),
            e(".actions-list").html("");
        }),
        (this._closeHistory = function () {
          this._resetHistory(),
            e("h2.history-header").unbind("click"),
            e(".actions-container").removeClass("active"),
            e(".favorite-list-container").slideDown(250),
            e(".actions-container .actions-list-box").slideUp(250, function () {
              e(".actions-navigation").css({
                position: "",
                top: "",
                bottom: "",
                width: "",
              });
            });
        }),
        (this._openHistory = function (i) {
          if (
            ((i = e(i)), t._bindHistoryCloseButton(), e(i).hasClass("active"))
          )
            return t._closeHistory();
          this._resetHistory();
          var s = i.data("tag");
          e(i).addClass("active");
          var a = this._filterHistoryTag(s);
          e(".actions-container").addClass(a),
            e(".actions-container .actions-list-container h2").html(a),
            (this._history.currentTag = s),
            e(".actions-container").hasClass("active") ||
              (e(".actions-container").addClass("active"),
              e(".favorite-list-container").slideUp(250),
              e(".actions-container .actions-list-box").slideDown(250)),
            t._showMoreHistory();
        }),
        (this._filterHistoryTag = function (e) {
          switch (e) {
            case 1:
              return "lerei";
            case 2:
              return "parei";
            case 3:
              return "lido";
            case 4:
              return "lendo";
            case 5:
              return "avaliou";
            case "all":
              return "todos";
          }
        }),
        (this._bindHistoryButtons = function () {
          e(".actions-buttons li").click(function (e) {
            e.preventDefault(), t._openHistory(this);
          });
        }),
        (this._bindHistoryCloseButton = function () {
          e("h2.history-header").unbind("click"),
            e("h2.history-header").click(function (e) {
              e.preventDefault(), t._closeHistory();
            });
        }),
        (this._bindHistoryScroll = function () {
          t.on("_scrollReachedBottom", function () {
            t._showMoreHistory();
          });
        }),
        (this._showMoreHistory = function () {
          this.off("_scrollReachedBottom"),
            this._history.reachedEnd ||
              (this._history.page > 1
                ? e(".actions-list-container div.loadmore").css({
                    top: "-68px",
                  })
                : e(".actions-list-container div.loadmore").css({ top: "" }),
              e(".actions-list-container div.loadmore").show(),
              e
                .ajax({
                  url: "/users/get_history.json?page=" + this._history.page++,
                  type: "POST",
                  data: { tag: this._history.currentTag },
                  dataType: "json",
                  success: function (i) {
                    if (i.message.error)
                      return (
                        (t._history.reachedEnd = !0),
                        void alert(i.message.message)
                      );
                    t._buildHistoryItems(i.message),
                      e(".actions-navigation").css({
                        position: "fixed",
                        top:
                          e(window).height() -
                          e(".actions-navigation").height() +
                          "px",
                        width: e(".actions-container").width(),
                        bottom: "auto",
                      });
                  }.bind(this),
                  error: function () {},
                })
                .done(function () {
                  e(".actions-list-container div.loadmore").hide(),
                    t._bindHistoryScroll();
                }));
        }),
        (this._buildHistoryItems = function (i) {
          if (i) {
            for (var s = 0; s < i.length; s++) {
              var a = i[s],
                n = "";
              a._user_tags &&
                (n = UserTags._buildGooeyMenu(a.id_serie, a._user_tags, !0)),
                e(".actions-list").append(
                  this._history.HTML.item
                    .replace(this._history.regex.gooey, n)
                    .replace(this._history.regex.link, a.link)
                    .replace(this._history.regex.name, a.name)
                    .replace(this._history.regex.number, a.number)
                    .replace(this._history.regex.cover, a.cover)
                    .replace(this._history.regex.cover_thumb, a.cover_thumb)
                    .replace(this._history.regex.cover_avif, a.cover_avif)
                    .replace(
                      this._history.regex.cover_thumb_avif,
                      a.cover_thumb_avif
                    )
                    .replace(
                      this._history.regex.reading_taxonomy,
                      3 == this._history.currentTag ? "Última" : "Próxima"
                    )
                );
            }
            (this._history.lastItemOffset = e(".actions-list").height()),
              setTimeout(function () {
                UserTags.trigger("newFavorite"),
                  UserTags.trigger("newTagMenu"),
                  window.IMGtoSVG();
              }, 1);
          } else t._history.reachedEnd = !0;
        }),
        this._bindHistoryButtons(),
        e(".mp-level").scroll(function (i) {
          t._history.lastItemOffset &&
            e(this).scrollTop() + e(this).height() >
              t._history.lastItemOffset &&
            t.trigger("_scrollReachedBottom");
        }),
        (this._closeProfileEdition = function () {
          e(".user-profile-container")
            .stop()
            .slideUp(function () {
              e(
                ".notifications-container, .statistics-container, .favorite-list-container, .actions-container, .actions-navigation"
              )
                .stop()
                .fadeIn();
            });
        }),
        (this._openProfileEdition = function () {
          t._closeHistory(),
            e(
              ".notifications-container, .statistics-container, .favorite-list-container, .actions-container, .actions-navigation"
            )
              .stop()
              .fadeOut(function () {
                e(".user-profile-container").stop().slideDown();
              });
        }),
        (this._bindProfileEvents = function () {
          e(".edit-profile").click(
            function (t) {
              var i = e(".edit-profile-container");
              i.hasClass("open")
                ? this._closeProfileEdition()
                : this._openProfileEdition(),
                e(i).toggleClass("open"),
                e(".user-name").toggleClass("open");
            }.bind(this)
          ),
            e(".delete-avatar-image").click(function (t) {
              t.preventDefault(),
                confirm(
                  "Tem certeza de que deseja APAGAR sua imagem de perfil?"
                ) &&
                  e.ajax({
                    url: "/users/remove_avatar_image.json",
                    type: "GET",
                    dataType: "json",
                    success: function (t) {
                      (t = t.message).error
                        ? alert(t.message)
                        : (e(".avatar_container").css({
                            "background-image": "none",
                          }),
                          e(".avatar_container").html(
                            '<img src="/assets/images/icons/user.svg" class="mp-icon user-icon" />'
                          ),
                          window.IMGtoSVG());
                    },
                    error: function () {
                      alert(
                        "Houve um erro ao comunicar o servidor. Por favor, tente novamente mais tarde."
                      );
                    },
                  });
            }),
            e("input[name=avatar_image]").on("change", function (t) {
              var i = t.target.files[0];
              return i.size > 2097152
                ? (alert("São permitidas apenas imagens com menos de 2MB"),
                  e(this).replaceWith(e(this).clone(!0)),
                  void t.preventDefault())
                : "image/jpeg" != i.type && "image/png" != i.type
                ? (alert("São permitidas apenas imagens JPG e PNG"),
                  e(this).replaceWith(e(this).clone(!0)),
                  void t.preventDefault())
                : (e(".avatar-image label .avatar_container.avatar-img").html(
                    ""
                  ),
                  void e(
                    ".avatar-image label .avatar_container.avatar-img"
                  ).css({
                    "background-image":
                      "url(" + URL.createObjectURL(i).toString() + ")",
                  }));
            }),
            e("#user-profile-form")
              .validator()
              .on("submit", function (t) {
                if (!t.isDefaultPrevented()) {
                  e("#user-profile-form .has-error").removeClass("has-error");
                  var i = e(this),
                    s = e(i).find("button[type=submit]").html();
                  e(i)
                    .find("button[type=submit]")
                    .html(
                      '<img src="/assets/images/loading.png" alt="Carregando...">'
                    );
                  var a = new FormData(e(this)[0]),
                    n = e(this).attr("action"),
                    r = e(this).attr("method");
                  grecaptcha.ready(function () {
                    grecaptcha
                      .execute("6Ld4hdkZAAAAAAhFRMIIcSMGLrM3lX8VbbguGwNv", {
                        action: "submit_user_edit",
                      })
                      .then(
                        function (t) {
                          a.append("token", t),
                            e
                              .ajax({
                                url: n,
                                type: r,
                                data: a,
                                processData: !1,
                                contentType: !1,
                                cache: !1,
                                success: function (t) {
                                  if ((t = t.message || {}).errors)
                                    for (var i in t.errors) {
                                      var s = t.errors[i];
                                      if ("alert" == s.error)
                                        e(
                                          ".user-profile-infos .alert-message"
                                        ).removeClass("success"),
                                          e(
                                            ".user-profile-infos .alert-message"
                                          ).addClass("error"),
                                          e(
                                            ".user-profile-infos .alert-message .message-container span"
                                          ).html(s.message),
                                          e(
                                            ".user-profile-infos .alert-message"
                                          ).show();
                                      else {
                                        var a = e(
                                            "#user-profile-form input[name=" +
                                              s.error +
                                              "]"
                                          ).closest(".form-group"),
                                          n = a.find(
                                            ".help-inline.with-errors span"
                                          );
                                        a.addClass("has-error"),
                                          n.html(s.message);
                                      }
                                    }
                                  else
                                    (t = t.success),
                                      e(
                                        ".user-profile-infos .alert-message"
                                      ).removeClass("error"),
                                      e(
                                        ".user-profile-infos .alert-message"
                                      ).addClass("success"),
                                      e(
                                        ".user-profile-infos .alert-message .message-container span"
                                      ).html(
                                        "Suas alterações foram salvas com sucesso!"
                                      ),
                                      e(
                                        ".user-profile-infos .alert-message"
                                      ).show(),
                                      t.nickname &&
                                        e("*[data-user=nickname]").html(
                                          t.nickname
                                        ),
                                      t.name &&
                                        t.surname &&
                                        e("*[data-user=name]").html(
                                          t.name + " " + t.surname
                                        ),
                                      t.avatar_image &&
                                        (e(".avatar_container").html(""),
                                        e(".avatar_container").css({
                                          "background-image":
                                            t.avatar_image + "?v=" + e.now(),
                                        }));
                                  grecaptcha.reset();
                                },
                                error: function (t) {
                                  e(
                                    ".user-profile-infos .alert-message"
                                  ).removeClass("success"),
                                    e(
                                      ".user-profile-infos .alert-message"
                                    ).addClass("error"),
                                    e(
                                      ".user-profile-infos .alert-message .message-container span"
                                    ).html(
                                      "Houve um erro ao processar sua requisição. Por favor, tente novamente"
                                    ),
                                    e(
                                      ".user-profile-infos .alert-message"
                                    ).show();
                                },
                              })
                              .done(function () {
                                e(i).find("button[type=submit]").html(s);
                              });
                        }.bind(this)
                      );
                  }),
                    t.preventDefault();
                }
              });
        }),
        this._bindProfileEvents(),
        (this._toggleSVGClass = function (e, t, i) {
          if (0 != (e = e || []).length) {
            e = e.split(" ");
            for (var s = 0; s < e.length; s++)
              (i != e[s] && t != e[s]) || e.splice(s, 1);
            return e.push(t), e.join(" ");
          }
        });
    })($);
  },
  yGNh: function (e, t, i) {
    "use strict";
    e.exports = new (function () {
      var e = this;
      (this.EventHandler = new window._EventHandler()),
        (this.on = this.EventHandler.on.bind(this.EventHandler)),
        (this.off = this.EventHandler.off.bind(this.EventHandler)),
        (this.trigger = this.EventHandler._triggerEvents.bind(
          this.EventHandler
        )),
        (this.HTML = {
          favorite_tag:
            '<div class="_user_favorite #{is_favorite}" data-id-serie=#{id_serie}><div class="favorite-container"><img src="/assets/images/icons/favoritado.svg" class="mp-icon favoritado-icon favorite" /><img src="/assets/images/icons/desfavoritar.svg" class="mp-icon desfavoritar-icon unfavorite" /></div></div>',
          user_tag:
            '<div class="_user_tag"><img src="/assets/images/icons/#{icon_name}.svg" class="mp-icon #{icon_name}-icon" /></div>',
          gooey_menu:
            '<div class="gooey-menu #{is_favorite} #{className}" data-id-serie="#{id_serie}"> <input type="checkbox" href="#" class="gooey-menu-open" name="gooey-menu-open" id="gooey-menu-open"/> <label class="gooey-menu-open-button" for="gooey-menu-open">  <img src="/assets/images/icons/config.svg" class="mp-icon config-icon" /> <span class="hamburger hamburger-1"></span> <span class="hamburger hamburger-3"></span>  </label>  <div class="gooey-menu-item favorite-btn #{is_favorite}" data-id-serie="#{id_serie}"> <img src="/assets/images/icons/favoritado.svg" class="mp-icon favoritado-icon" />  <img src="/assets/images/icons/desfavoritar.svg" class="mp-icon desfavoritar-icon" />     </div>  <div class="gooey-menu-item tag-toggle lerei" data-tag="1">  <img src="/assets/images/icons/tag.svg" class="mp-icon tag-icon" />  <span class="text"> \tLerei  </span>  </div>  <div class="gooey-menu-item tag-toggle lido" data-tag="3"> <img src="/assets/images/icons/lido.svg" class="mp-icon lido-icon" />     <span class="text"> Lido </span>   </div> <div class="gooey-menu-item tag-toggle parei" data-tag="2"> <img src="/assets/images/icons/parei.svg" class="mp-icon parei-icon" />  <span class="text"> Parei  </span> </div> <div class="gooey-menu-item reset-series" data-id-serie="#{id_serie}"> <img src="/assets/images/icons/limpar.svg" class="mp-icon limpar-icon" /> <span class="text"> Limpar </span> </div></div>',
        }),
        (this.regex = {
          id_serie: /\#\{id_serie\}/g,
          favorite_tag: /\#\{favorite_tag\}/g,
          is_favorite: /\#\{is_favorite\}/g,
          user_tag: /\#\{user_tag\}/g,
          icon_name: /\#\{icon_name\}/g,
          className: /\#\{className\}/g,
        }),
        (this._filterFavorite = function (e, t) {
          var i = "",
            s = "";
          return (
            e &&
              (e.favorite && (i = "is_favorite"),
              (s = this.HTML.favorite_tag
                .replace(this.regex.is_favorite, i)
                .replace(this.regex.id_serie, t))),
            s
          );
        }),
        (this._filterUserTag = function (e) {
          var t = "";
          return (
            e.will_read
              ? (t = this.HTML.user_tag.replace(this.regex.icon_name, "tag"))
              : e.already_read
              ? (t = this.HTML.user_tag.replace(this.regex.icon_name, "lido"))
              : e.reading
              ? (t = this.HTML.user_tag.replace(this.regex.icon_name, "views"))
              : e.stopped_reading &&
                (t = this.HTML.user_tag.replace(this.regex.icon_name, "parei")),
            t
          );
        }),
        (this._buildGooeyMenu = function (e, t, i) {
          if (e) {
            (t = t || {}), (i = i || !1);
            var s = "",
              a = "";
            return (
              t.will_read
                ? (s = "lerei")
                : t.already_read
                ? (s = "lido")
                : t.stopped_reading && (s = "parei"),
              t.favorite && (a = "is_favorite"),
              i && (s += " inverse"),
              this.HTML.gooey_menu
                .replace(this.regex.id_serie, e)
                .replace(this.regex.className, s)
                .replace(this.regex.is_favorite, a)
            );
          }
        }),
        (this._bindListeners = function () {
          window.GooeyToggle(),
            $(".tag-toggle").unbind("click"),
            $(".tag-toggle").click(function (t) {
              t.preventDefault();
              var i = $(this).data("tag"),
                s = $(this).parent().data("id-serie");
              e.toggleTag(s, i, this);
            }),
            $(".reset-series").unbind("click"),
            $(".reset-series").click(function (t) {
              t.preventDefault();
              var i = $(this).parent().data("id-serie");
              e.resetSeriesReadings(i, this);
            });
        }),
        (this._determineTagByNumber = function (e) {
          var t = {
            name: "",
            will_read: !1,
            stopped_reading: !1,
            already_read: !1,
          };
          switch (e) {
            case 1:
              (t.name = "lerei"), (t.will_read = !0);
              break;
            case 2:
              (t.name = "parei"), (t.stopped_reading = !0);
              break;
            case 3:
              (t.name = "lido"), (t.already_read = !0);
              break;
            default:
              return !1;
          }
          return t;
        }),
        (this.resetSeriesReadings = function (e, t) {
          e &&
            confirm(
              "Tem certeza de que deseja marcar a série como NÃO LIDA?\n\n***ATENÇÃO: Esta ação apagará TODAS as suas leituras para esta série.***"
            ) &&
            $.ajax({
              url: "/users/reset_readings.json",
              type: "POST",
              data: { id_serie: e },
              dataType: "json",
              success: function (e) {
                if ((e = e.message || {}).error) alert(e.message);
                else {
                  $(t).parent().removeClass("lido parei lerei");
                  var i = $(t).parent().parent().find(".cover-image");
                  if (
                    (0 == i.length &&
                      (i = $(t).parent().parent().parent().find(".series-img")),
                    $(i).find("._user_tag").length > 0)
                  ) {
                    var s = $(i).find("._user_tag");
                    ($(s).find(".views-icon").length > 0 ||
                      $(s).find(".lido-icon").length > 0) &&
                      $(i).find("._user_tag").remove();
                  }
                }
              },
            });
        }),
        (this.toggleTag = function (t, i, s) {
          i &&
            t &&
            ((3 == i &&
              $(s).parent().hasClass("lido") &&
              !confirm(
                "Tem certeza de que deseja marcar a série como NÃO LIDA?\n\n***ATENÇÃO: Esta ação apagará TODAS as suas leituras para esta série.***"
              )) ||
              ($(s).unbind("click"),
              $.ajax({
                url: "/users/toggle_tag.json",
                type: "POST",
                data: { id_serie: t, tag: i },
                dataType: "json",
                success: function (t) {
                  if (!(t = t.message || {}).ignore)
                    if (t.error) alert(t.message);
                    else {
                      var a = e._determineTagByNumber(i);
                      if (!a) return;
                      $(s).parent().removeClass("lido parei lerei");
                      var n = $(s).parent().parent().find(".cover-image");
                      0 == n.length &&
                        (n = $(s)
                          .parent()
                          .parent()
                          .parent()
                          .find(".series-img")),
                        $(n).find("._user_tag").length > 0 &&
                          $(n).find("._user_tag").remove(),
                        t.has_set &&
                          ($(n).append(e._filterUserTag(a)),
                          $(s).parent().addClass(a.name)),
                        window.IMGtoSVG();
                    }
                },
                error: function () {
                  alert(
                    "Houve um erro ao comunicar o servidor. Por favor, tente novamente mais tarde."
                  );
                },
              }).done(function () {
                $(s).click(function (t) {
                  t.preventDefault();
                  var i = $(this).data("tag"),
                    s = $(this).parent().data("id-serie");
                  e.toggleTag(s, i, this);
                });
              })));
        }),
        (this.start = function () {
          this._bindListeners(),
            this.on("newTagMenu", this._bindListeners.bind(this)),
            (window.UserTags = this);
        });
    })();
  },
  zwJy: function (e, t, i) {
    "use strict";
    e.exports = new (function (e) {
      var t = this;
      return (
        (this._bindEvents = function () {
          e(".score-rating li").click(function (i) {
            if (
              (i.preventDefault(), e(this).parent().hasClass("login-to-site"))
            )
              return !0;
            var s = e(this).parent().data("id-serie"),
              a = e(this).data("rating");
            return (
              !(!parseInt(s) || !parseInt(a)) &&
              (e(".score-rating li.current").removeClass("current"),
              e(this).addClass("current"),
              t.sendRating(s, a))
            );
          });
        }),
        (this.sendRating = function (t, i) {
          e.ajax({
            url: "/background/users/rate_series.json",
            type: "POST",
            data: { id_serie: t, rating: i },
            dataType: "json",
            success: function (e) {
              e.message.error && alert(e.message.message);
            },
            error: function () {
              alert(
                "Houve um erro ao salvar sua nota. Por favor, tente novamente mais tarde."
              );
            },
          });
        }),
        (this.init = function () {
          return this._bindEvents();
        }),
        this.init()
      );
    })($);
  },
});
