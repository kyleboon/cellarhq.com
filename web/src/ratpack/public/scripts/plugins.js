/*
 *  Document   : plugins.js
 *  Author     : Various
 *  Description: Jquery Plugins in one file for consistency
 *
 *  Feel free to remove the plugins you won't use (along with their style - if there is one - in css/plugins.css)
 *  or include them separately if you are going to use them only in few pages of your project.
 *  I've included this file along with css/plugins.css in all pages to make all the plugins
 *  available everywhere with the minimum cost (few http requests).
 *
 *  Most plugins are initialized on specific classes in app.js - uiInit() to be available for use in any page.
 *  You can remove the initializations from app.js if you like and only put them in the pages you will use them :-)
 */

/* Avoid `console` errors in browsers that lack a console */
(function () {
  var e;
  var t = function () {
  };
  var n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
  var r = n.length;
  var i = window.console = window.console || {};
  while (r--) {
    e = n[r];
    if (!i[e]) {
      i[e] = t
    }
  }
})();

/*! jQuery UI - v1.10.4 - 2014-09-07
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.resizable.js, jquery.ui.sortable.js, jquery.ui.autocomplete.js, jquery.ui.menu.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function (e, t) {
  function i(t, i) {
    var n, a, o, r = t.nodeName.toLowerCase();
    return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && s(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && s(t)
  }

  function s(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
        return "hidden" === e.css(this, "visibility")
      }).length
  }

  var n = 0, a = /^ui-id-\d+$/;
  e.ui = e.ui || {}, e.extend(e.ui, {
    version: "1.10.4",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    focus: function (t) {
      return function (i, s) {
        return "number" == typeof i ? this.each(function () {
          var t = this;
          setTimeout(function () {
            e(t).focus(), s && s.call(t)
          }, i)
        }) : t.apply(this, arguments)
      }
    }(e.fn.focus), scrollParent: function () {
      var t;
      return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
        return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
      }).eq(0) : this.parents().filter(function () {
        return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
      }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
    }, zIndex: function (i) {
      if (i !== t)return this.css("zIndex", i);
      if (this.length)for (var s, n, a = e(this[0]); a.length && a[0] !== document;) {
        if (s = a.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (n = parseInt(a.css("zIndex"), 10), !isNaN(n) && 0 !== n))return n;
        a = a.parent()
      }
      return 0
    }, uniqueId: function () {
      return this.each(function () {
        this.id || (this.id = "ui-id-" + ++n)
      })
    }, removeUniqueId: function () {
      return this.each(function () {
        a.test(this.id) && e(this).removeAttr("id")
      })
    }
  }), e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (i) {
        return !!e.data(i, t)
      }
    }) : function (t, i, s) {
      return !!e.data(t, s[3])
    }, focusable: function (t) {
      return i(t, !isNaN(e.attr(t, "tabindex")))
    }, tabbable: function (t) {
      var s = e.attr(t, "tabindex"), n = isNaN(s);
      return (n || s >= 0) && i(t, !n)
    }
  }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, s) {
    function n(t, i, s, n) {
      return e.each(a, function () {
        i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), n && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
      }), i
    }

    var a = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"], o = s.toLowerCase(), r = {
      innerWidth: e.fn.innerWidth,
      innerHeight: e.fn.innerHeight,
      outerWidth: e.fn.outerWidth,
      outerHeight: e.fn.outerHeight
    };
    e.fn["inner" + s] = function (i) {
      return i === t ? r["inner" + s].call(this) : this.each(function () {
        e(this).css(o, n(this, i) + "px")
      })
    }, e.fn["outer" + s] = function (t, i) {
      return "number" != typeof t ? r["outer" + s].call(this, t) : this.each(function () {
        e(this).css(o, n(this, t, !0, i) + "px")
      })
    }
  }), e.fn.addBack || (e.fn.addBack = function (e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
    return function (i) {
      return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
    }
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart"in document.createElement("div"), e.fn.extend({
    disableSelection: function () {
      return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
        e.preventDefault()
      })
    }, enableSelection: function () {
      return this.unbind(".ui-disableSelection")
    }
  }), e.extend(e.ui, {
    plugin: {
      add: function (t, i, s) {
        var n, a = e.ui[t].prototype;
        for (n in s)a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
      }, call: function (e, t, i) {
        var s, n = e.plugins[t];
        if (n && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)for (s = 0; n.length > s; s++)e.options[n[s][0]] && n[s][1].apply(e.element, i)
      }
    }, hasScroll: function (t, i) {
      if ("hidden" === e(t).css("overflow"))return !1;
      var s = i && "left" === i ? "scrollLeft" : "scrollTop", n = !1;
      return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
    }
  })
})(jQuery);
(function (e, t) {
  var i = 0, s = Array.prototype.slice, n = e.cleanData;
  e.cleanData = function (t) {
    for (var i, s = 0; null != (i = t[s]); s++)try {
      e(i).triggerHandler("remove")
    } catch (a) {
    }
    n(t)
  }, e.widget = function (i, s, n) {
    var a, o, r, h, l = {}, u = i.split(".")[0];
    i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function (t) {
      return !!e.data(t, a)
    }, e[u] = e[u] || {}, o = e[u][i], r = e[u][i] = function (e, i) {
      return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new r(e, i)
    }, e.extend(r, o, {
      version: n.version,
      _proto: e.extend({}, n),
      _childConstructors: []
    }), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function (i, n) {
      return e.isFunction(n) ? (l[i] = function () {
        var e = function () {
          return s.prototype[i].apply(this, arguments)
        }, t = function (e) {
          return s.prototype[i].apply(this, e)
        };
        return function () {
          var i, s = this._super, a = this._superApply;
          return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
        }
      }(), t) : (l[i] = n, t)
    }), r.prototype = e.widget.extend(h, {widgetEventPrefix: o ? h.widgetEventPrefix || i : i}, l, {
      constructor: r,
      namespace: u,
      widgetName: i,
      widgetFullName: a
    }), o ? (e.each(o._childConstructors, function (t, i) {
      var s = i.prototype;
      e.widget(s.namespace + "." + s.widgetName, r, i._proto)
    }), delete o._childConstructors) : s._childConstructors.push(r), e.widget.bridge(i, r)
  }, e.widget.extend = function (i) {
    for (var n, a, o = s.call(arguments, 1), r = 0, h = o.length; h > r; r++)for (n in o[r])a = o[r][n], o[r].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
    return i
  }, e.widget.bridge = function (i, n) {
    var a = n.prototype.widgetFullName || i;
    e.fn[i] = function (o) {
      var r = "string" == typeof o, h = s.call(arguments, 1), l = this;
      return o = !r && h.length ? e.widget.extend.apply(null, [o].concat(h)) : o, r ? this.each(function () {
        var s, n = e.data(this, a);
        return n ? e.isFunction(n[o]) && "_" !== o.charAt(0) ? (s = n[o].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + o + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + o + "'")
      }) : this.each(function () {
        var t = e.data(this, a);
        t ? t.option(o || {})._init() : e.data(this, a, new n(o, this))
      }), l
    }
  }, e.Widget = function () {
  }, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {disabled: !1, create: null},
    _createWidget: function (t, s) {
      s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function (e) {
          e.target === s && this.destroy()
        }
      }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function () {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },
    _destroy: e.noop,
    widget: function () {
      return this.element
    },
    option: function (i, s) {
      var n, a, o, r = i;
      if (0 === arguments.length)return e.widget.extend({}, this.options);
      if ("string" == typeof i)if (r = {}, n = i.split("."), i = n.shift(), n.length) {
        for (a = r[i] = e.widget.extend({}, this.options[i]), o = 0; n.length - 1 > o; o++)a[n[o]] = a[n[o]] || {}, a = a[n[o]];
        if (i = n.pop(), 1 === arguments.length)return a[i] === t ? null : a[i];
        a[i] = s
      } else {
        if (1 === arguments.length)return this.options[i] === t ? null : this.options[i];
        r[i] = s
      }
      return this._setOptions(r), this
    },
    _setOptions: function (e) {
      var t;
      for (t in e)this._setOption(t, e[t]);
      return this
    },
    _setOption: function (e, t) {
      return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
    },
    enable: function () {
      return this._setOption("disabled", !1)
    },
    disable: function () {
      return this._setOption("disabled", !0)
    },
    _on: function (i, s, n) {
      var a, o = this;
      "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function (n, r) {
        function h() {
          return i || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : t
        }

        "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || e.guid++);
        var l = n.match(/^(\w+)\s*(.*)$/), u = l[1] + o.eventNamespace, c = l[2];
        c ? a.delegate(c, u, h) : s.bind(u, h)
      })
    },
    _off: function (e, t) {
      t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
    },
    _delay: function (e, t) {
      function i() {
        return ("string" == typeof e ? s[e] : e).apply(s, arguments)
      }

      var s = this;
      return setTimeout(i, t || 0)
    },
    _hoverable: function (t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function (t) {
          e(t.currentTarget).addClass("ui-state-hover")
        }, mouseleave: function (t) {
          e(t.currentTarget).removeClass("ui-state-hover")
        }
      })
    },
    _focusable: function (t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function (t) {
          e(t.currentTarget).addClass("ui-state-focus")
        }, focusout: function (t) {
          e(t.currentTarget).removeClass("ui-state-focus")
        }
      })
    },
    _trigger: function (t, i, s) {
      var n, a, o = this.options[t];
      if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)for (n in a)n in i || (i[n] = a[n]);
      return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
    }
  }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
    e.Widget.prototype["_" + t] = function (s, n, a) {
      "string" == typeof n && (n = {effect: n});
      var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
      n = n || {}, "number" == typeof n && (n = {duration: n}), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
        e(this)[t](), a && a.call(s[0]), i()
      })
    }
  })
})(jQuery);
(function (e) {
  var t = !1;
  e(document).mouseup(function () {
    t = !1
  }), e.widget("ui.mouse", {
    version: "1.10.4",
    options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
    _mouseInit: function () {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function (e) {
        return t._mouseDown(e)
      }).bind("click." + this.widgetName, function (i) {
        return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
      }), this.started = !1
    },
    _mouseDestroy: function () {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function (i) {
      if (!t) {
        this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
        var s = this, n = 1 === i.which, a = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
        return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          s.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
          return s._mouseMove(e)
        }, this._mouseUpDelegate = function (e) {
          return s._mouseUp(e)
        }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
      }
    },
    _mouseMove: function (t) {
      return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
    },
    _mouseUp: function (t) {
      return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
    },
    _mouseDistanceMet: function (e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet
    },
    _mouseStart: function () {
    },
    _mouseDrag: function () {
    },
    _mouseStop: function () {
    },
    _mouseCapture: function () {
      return !0
    }
  })
})(jQuery);
(function (e, t) {
  function i(e, t, i) {
    return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
  }

  function s(t, i) {
    return parseInt(e.css(t, i), 10) || 0
  }

  function n(t) {
    var i = t[0];
    return 9 === i.nodeType ? {
      width: t.width(),
      height: t.height(),
      offset: {top: 0, left: 0}
    } : e.isWindow(i) ? {
      width: t.width(),
      height: t.height(),
      offset: {top: t.scrollTop(), left: t.scrollLeft()}
    } : i.preventDefault ? {width: 0, height: 0, offset: {top: i.pageY, left: i.pageX}} : {
      width: t.outerWidth(),
      height: t.outerHeight(),
      offset: t.offset()
    }
  }

  e.ui = e.ui || {};
  var a, o = Math.max, r = Math.abs, h = Math.round, l = /left|center|right/, u = /top|center|bottom/, c = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = e.fn.position;
  e.position = {
    scrollbarWidth: function () {
      if (a !== t)return a;
      var i, s, n = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
      return e("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
    }, getScrollInfo: function (t) {
      var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"), s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"), n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth, a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
      return {width: a ? e.position.scrollbarWidth() : 0, height: n ? e.position.scrollbarWidth() : 0}
    }, getWithinInfo: function (t) {
      var i = e(t || window), s = e.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType;
      return {
        element: i,
        isWindow: s,
        isDocument: n,
        offset: i.offset() || {left: 0, top: 0},
        scrollLeft: i.scrollLeft(),
        scrollTop: i.scrollTop(),
        width: s ? i.width() : i.outerWidth(),
        height: s ? i.height() : i.outerHeight()
      }
    }
  }, e.fn.position = function (t) {
    if (!t || !t.of)return f.apply(this, arguments);
    t = e.extend({}, t);
    var a, p, m, g, v, b, _ = e(t.of), y = e.position.getWithinInfo(t.within), x = e.position.getScrollInfo(y), w = (t.collision || "flip").split(" "), k = {};
    return b = n(_), _[0].preventDefault && (t.at = "left top"), p = b.width, m = b.height, g = b.offset, v = e.extend({}, g), e.each(["my", "at"], function () {
      var e, i, s = (t[this] || "").split(" ");
      1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : u.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = u.test(s[1]) ? s[1] : "center", e = c.exec(s[0]), i = c.exec(s[1]), k[this] = [e ? e[0] : 0, i ? i[0] : 0], t[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
    }), 1 === w.length && (w[1] = w[0]), "right" === t.at[0] ? v.left += p : "center" === t.at[0] && (v.left += p / 2), "bottom" === t.at[1] ? v.top += m : "center" === t.at[1] && (v.top += m / 2), a = i(k.at, p, m), v.left += a[0], v.top += a[1], this.each(function () {
      var n, l, u = e(this), c = u.outerWidth(), d = u.outerHeight(), f = s(this, "marginLeft"), b = s(this, "marginTop"), D = c + f + s(this, "marginRight") + x.width, T = d + b + s(this, "marginBottom") + x.height, C = e.extend({}, v), M = i(k.my, u.outerWidth(), u.outerHeight());
      "right" === t.my[0] ? C.left -= c : "center" === t.my[0] && (C.left -= c / 2), "bottom" === t.my[1] ? C.top -= d : "center" === t.my[1] && (C.top -= d / 2), C.left += M[0], C.top += M[1], e.support.offsetFractions || (C.left = h(C.left), C.top = h(C.top)), n = {
        marginLeft: f,
        marginTop: b
      }, e.each(["left", "top"], function (i, s) {
        e.ui.position[w[i]] && e.ui.position[w[i]][s](C, {
          targetWidth: p,
          targetHeight: m,
          elemWidth: c,
          elemHeight: d,
          collisionPosition: n,
          collisionWidth: D,
          collisionHeight: T,
          offset: [a[0] + M[0], a[1] + M[1]],
          my: t.my,
          at: t.at,
          within: y,
          elem: u
        })
      }), t.using && (l = function (e) {
        var i = g.left - C.left, s = i + p - c, n = g.top - C.top, a = n + m - d, h = {
          target: {
            element: _,
            left: g.left,
            top: g.top,
            width: p,
            height: m
          },
          element: {element: u, left: C.left, top: C.top, width: c, height: d},
          horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
          vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
        };
        c > p && p > r(i + s) && (h.horizontal = "center"), d > m && m > r(n + a) && (h.vertical = "middle"), h.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", t.using.call(this, e, h)
      }), u.offset(e.extend(C, {using: l}))
    })
  }, e.ui.position = {
    fit: {
      left: function (e, t) {
        var i, s = t.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = e.left - t.collisionPosition.marginLeft, h = n - r, l = r + t.collisionWidth - a - n;
        t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left)
      }, top: function (e, t) {
        var i, s = t.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = t.within.height, r = e.top - t.collisionPosition.marginTop, h = n - r, l = r + t.collisionHeight - a - n;
        t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top)
      }
    }, flip: {
      left: function (e, t) {
        var i, s, n = t.within, a = n.offset.left + n.scrollLeft, o = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = e.left - t.collisionPosition.marginLeft, u = l - h, c = l + t.collisionWidth - o - h, d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, f = -2 * t.offset[0];
        0 > u ? (i = e.left + d + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += d + p + f)) : c > 0 && (s = e.left - t.collisionPosition.marginLeft + d + p + f - h, (s > 0 || c > r(s)) && (e.left += d + p + f))
      }, top: function (e, t) {
        var i, s, n = t.within, a = n.offset.top + n.scrollTop, o = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = e.top - t.collisionPosition.marginTop, u = l - h, c = l + t.collisionHeight - o - h, d = "top" === t.my[1], p = d ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, m = -2 * t.offset[1];
        0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, e.top + p + f + m > u && (0 > s || r(u) > s) && (e.top += p + f + m)) : c > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, e.top + p + f + m > c && (i > 0 || c > r(i)) && (e.top += p + f + m))
      }
    }, flipfit: {
      left: function () {
        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
      }, top: function () {
        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
      }
    }
  }, function () {
    var t, i, s, n, a, o = document.getElementsByTagName("body")[0], r = document.createElement("div");
    t = document.createElement(o ? "div" : "body"), s = {
      visibility: "hidden",
      width: 0,
      height: 0,
      border: 0,
      margin: 0,
      background: "none"
    }, o && e.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
    for (a in s)t.style[a] = s[a];
    t.appendChild(r), i = o || document.documentElement, i.insertBefore(t, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = e(r).offset().left, e.support.offsetFractions = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t)
  }()
})(jQuery);
(function (e) {
  function t(e) {
    return parseInt(e, 10) || 0
  }

  function i(e) {
    return !isNaN(parseInt(e, 10))
  }

  e.widget("ui.resizable", e.ui.mouse, {
    version: "1.10.4",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _create: function () {
      var t, i, s, n, a, o = this, r = this.options;
      if (this.element.addClass("ui-resizable"), e.extend(this, {
          _aspectRatio: !!r.aspectRatio,
          aspectRatio: r.aspectRatio,
          originalElement: this.element,
          _proportionallyResizeElements: [],
          _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
        }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
          position: this.element.css("position"),
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          top: this.element.css("top"),
          left: this.element.css("left")
        })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
          marginLeft: this.originalElement.css("marginLeft"),
          marginTop: this.originalElement.css("marginTop"),
          marginRight: this.originalElement.css("marginRight"),
          marginBottom: this.originalElement.css("marginBottom")
        }), this.originalElement.css({
          marginLeft: 0,
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0
        }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
          position: "static",
          zoom: 1,
          display: "block"
        })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
            n: ".ui-resizable-n",
            e: ".ui-resizable-e",
            s: ".ui-resizable-s",
            w: ".ui-resizable-w",
            se: ".ui-resizable-se",
            sw: ".ui-resizable-sw",
            ne: ".ui-resizable-ne",
            nw: ".ui-resizable-nw"
          } : "e,s,se"), this.handles.constructor === String)for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++)s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({zIndex: r.zIndex}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
      this._renderAxis = function (t) {
        var i, s, n, a;
        t = t || this.element;
        for (i in this.handles)this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), e(this.handles[i]).length
      }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
        o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
      }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
        r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
      }).mouseleave(function () {
        r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
      })), this._mouseInit()
    },
    _destroy: function () {
      this._mouseDestroy();
      var t, i = function (t) {
        e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
      };
      return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
        position: t.css("position"),
        width: t.outerWidth(),
        height: t.outerHeight(),
        top: t.css("top"),
        left: t.css("left")
      }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
    },
    _mouseCapture: function (t) {
      var i, s, n = !1;
      for (i in this.handles)s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
      return !this.options.disabled && n
    },
    _mouseStart: function (i) {
      var s, n, a, o = this.options, r = this.element.position(), h = this.element;
      return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({
        position: "absolute",
        top: h.css("top"),
        left: h.css("left")
      }) : h.is(".ui-draggable") && h.css({
        position: "absolute",
        top: r.top,
        left: r.left
      }), this._renderProxy(), s = t(this.helper.css("left")), n = t(this.helper.css("top")), o.containment && (s += e(o.containment).scrollLeft() || 0, n += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: s,
        top: n
      }, this.size = this._helper ? {width: this.helper.width(), height: this.helper.height()} : {
        width: h.width(),
        height: h.height()
      }, this.originalSize = this._helper ? {width: h.outerWidth(), height: h.outerHeight()} : {
        width: h.width(),
        height: h.height()
      }, this.originalPosition = {left: s, top: n}, this.sizeDiff = {
        width: h.outerWidth() - h.width(),
        height: h.outerHeight() - h.height()
      }, this.originalMousePosition = {
        left: i.pageX,
        top: i.pageY
      }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
    },
    _mouseDrag: function (t) {
      var i, s = this.helper, n = {}, a = this.originalMousePosition, o = this.axis, r = this.position.top, h = this.position.left, l = this.size.width, u = this.size.height, c = t.pageX - a.left || 0, d = t.pageY - a.top || 0, p = this._change[o];
      return p ? (i = p.apply(this, [t, c, d]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== u && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || this._trigger("resize", t, this.ui()), !1) : !1
    },
    _mouseStop: function (t) {
      this.resizing = !1;
      var i, s, n, a, o, r, h, l = this.options, u = this;
      return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && e.ui.hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
        width: u.helper.width() - a,
        height: u.helper.height() - n
      }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
        top: h,
        left: r
      })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
    },
    _updateVirtualBoundaries: function (e) {
      var t, s, n, a, o, r = this.options;
      o = {
        minWidth: i(r.minWidth) ? r.minWidth : 0,
        maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
        minHeight: i(r.minHeight) ? r.minHeight : 0,
        maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
      }, (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
    },
    _updateCache: function (e) {
      this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width)
    },
    _updateRatio: function (e) {
      var t = this.position, s = this.size, n = this.axis;
      return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (s.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (s.height - e.height), e.left = t.left + (s.width - e.width)), e
    },
    _respectSize: function (e) {
      var t = this._vBoundaries, s = this.axis, n = i(e.width) && t.maxWidth && t.maxWidth < e.width, a = i(e.height) && t.maxHeight && t.maxHeight < e.height, o = i(e.width) && t.minWidth && t.minWidth > e.width, r = i(e.height) && t.minHeight && t.minHeight > e.height, h = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, u = /sw|nw|w/.test(s), c = /nw|ne|n/.test(s);
      return o && (e.width = t.minWidth), r && (e.height = t.minHeight), n && (e.width = t.maxWidth), a && (e.height = t.maxHeight), o && u && (e.left = h - t.minWidth), n && u && (e.left = h - t.maxWidth), r && c && (e.top = l - t.minHeight), a && c && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
    },
    _proportionallyResize: function () {
      if (this._proportionallyResizeElements.length) {
        var e, t, i, s, n, a = this.helper || this.element;
        for (e = 0; this._proportionallyResizeElements.length > e; e++) {
          if (n = this._proportionallyResizeElements[e], !this.borderDif)for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; i.length > t; t++)this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
          n.css({
            height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
            width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
          })
        }
      }
    },
    _renderProxy: function () {
      var t = this.element, i = this.options;
      this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
        width: this.element.outerWidth() - 1,
        height: this.element.outerHeight() - 1,
        position: "absolute",
        left: this.elementOffset.left + "px",
        top: this.elementOffset.top + "px",
        zIndex: ++i.zIndex
      }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
    },
    _change: {
      e: function (e, t) {
        return {width: this.originalSize.width + t}
      }, w: function (e, t) {
        var i = this.originalSize, s = this.originalPosition;
        return {left: s.left + t, width: i.width - t}
      }, n: function (e, t, i) {
        var s = this.originalSize, n = this.originalPosition;
        return {top: n.top + i, height: s.height - i}
      }, s: function (e, t, i) {
        return {height: this.originalSize.height + i}
      }, se: function (t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
      }, sw: function (t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
      }, ne: function (t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
      }, nw: function (t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
      }
    },
    _propagate: function (t, i) {
      e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      }
    }
  }), e.ui.plugin.add("resizable", "animate", {
    stop: function (t) {
      var i = e(this).data("ui-resizable"), s = i.options, n = i._proportionallyResizeElements, a = n.length && /textarea/i.test(n[0].nodeName), o = a && e.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = a ? 0 : i.sizeDiff.width, h = {
        width: i.size.width - r,
        height: i.size.height - o
      }, l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
      i.element.animate(e.extend(h, u && l ? {top: u, left: l} : {}), {
        duration: s.animateDuration,
        easing: s.animateEasing,
        step: function () {
          var s = {
            width: parseInt(i.element.css("width"), 10),
            height: parseInt(i.element.css("height"), 10),
            top: parseInt(i.element.css("top"), 10),
            left: parseInt(i.element.css("left"), 10)
          };
          n && n.length && e(n[0]).css({width: s.width, height: s.height}), i._updateCache(s), i._propagate("resize", t)
        }
      })
    }
  }), e.ui.plugin.add("resizable", "containment", {
    start: function () {
      var i, s, n, a, o, r, h, l = e(this).data("ui-resizable"), u = l.options, c = l.element, d = u.containment, p = d instanceof e ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
      p && (l.containerElement = e(p), /document/.test(d) || d === document ? (l.containerOffset = {
        left: 0,
        top: 0
      }, l.containerPosition = {left: 0, top: 0}, l.parentData = {
        element: e(document),
        left: 0,
        top: 0,
        width: e(document).width(),
        height: e(document).height() || document.body.parentNode.scrollHeight
      }) : (i = e(p), s = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, n) {
        s[e] = t(i.css("padding" + n))
      }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
        height: i.innerHeight() - s[3],
        width: i.innerWidth() - s[1]
      }, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = e.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = e.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {
        element: p,
        left: n.left,
        top: n.top,
        width: r,
        height: h
      }))
    }, resize: function (t) {
      var i, s, n, a, o = e(this).data("ui-resizable"), r = o.options, h = o.containerOffset, l = o.position, u = o._aspectRatio || t.shiftKey, c = {
        top: 0,
        left: 0
      }, d = o.containerElement;
      d[0] !== document && /static/.test(d.css("position")) && (c = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - c.left), u && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= Math.abs(o.parentData.left)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio))
    }, stop: function () {
      var t = e(this).data("ui-resizable"), i = t.options, s = t.containerOffset, n = t.containerPosition, a = t.containerElement, o = e(t.helper), r = o.offset(), h = o.outerWidth() - t.sizeDiff.width, l = o.outerHeight() - t.sizeDiff.height;
      t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      })
    }
  }), e.ui.plugin.add("resizable", "alsoResize", {
    start: function () {
      var t = e(this).data("ui-resizable"), i = t.options, s = function (t) {
        e(t).each(function () {
          var t = e(this);
          t.data("ui-resizable-alsoresize", {
            width: parseInt(t.width(), 10),
            height: parseInt(t.height(), 10),
            left: parseInt(t.css("left"), 10),
            top: parseInt(t.css("top"), 10)
          })
        })
      };
      "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function (e) {
        s(e)
      })
    }, resize: function (t, i) {
      var s = e(this).data("ui-resizable"), n = s.options, a = s.originalSize, o = s.originalPosition, r = {
        height: s.size.height - a.height || 0,
        width: s.size.width - a.width || 0,
        top: s.position.top - o.top || 0,
        left: s.position.left - o.left || 0
      }, h = function (t, s) {
        e(t).each(function () {
          var t = e(this), n = e(this).data("ui-resizable-alsoresize"), a = {}, o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
          e.each(o, function (e, t) {
            var i = (n[t] || 0) + (r[t] || 0);
            i && i >= 0 && (a[t] = i || null)
          }), t.css(a)
        })
      };
      "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : e.each(n.alsoResize, function (e, t) {
        h(e, t)
      })
    }, stop: function () {
      e(this).removeData("resizable-alsoresize")
    }
  }), e.ui.plugin.add("resizable", "ghost", {
    start: function () {
      var t = e(this).data("ui-resizable"), i = t.options, s = t.size;
      t.ghost = t.originalElement.clone(), t.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: s.height,
        width: s.width,
        margin: 0,
        left: 0,
        top: 0
      }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
    }, resize: function () {
      var t = e(this).data("ui-resizable");
      t.ghost && t.ghost.css({position: "relative", height: t.size.height, width: t.size.width})
    }, stop: function () {
      var t = e(this).data("ui-resizable");
      t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
    }
  }), e.ui.plugin.add("resizable", "grid", {
    resize: function () {
      var t = e(this).data("ui-resizable"), i = t.options, s = t.size, n = t.originalSize, a = t.originalPosition, o = t.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, h = r[0] || 1, l = r[1] || 1, u = Math.round((s.width - n.width) / h) * h, c = Math.round((s.height - n.height) / l) * l, d = n.width + u, p = n.height + c, f = i.maxWidth && d > i.maxWidth, m = i.maxHeight && p > i.maxHeight, g = i.minWidth && i.minWidth > d, v = i.minHeight && i.minHeight > p;
      i.grid = r, g && (d += h), v && (p += l), f && (d -= h), m && (p -= l), /^(se|s|e)$/.test(o) ? (t.size.width = d, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.top = a.top - c) : /^(sw)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.left = a.left - u) : (p - l > 0 ? (t.size.height = p, t.position.top = a.top - c) : (t.size.height = l, t.position.top = a.top + n.height - l), d - h > 0 ? (t.size.width = d, t.position.left = a.left - u) : (t.size.width = h, t.position.left = a.left + n.width - h))
    }
  })
})(jQuery);
(function (e) {
  function t(e, t, i) {
    return e > t && t + i > e
  }

  function i(e) {
    return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
  }

  e.widget("ui.sortable", e.ui.mouse, {
    version: "1.10.4",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _create: function () {
      var e = this.options;
      this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
    },
    _destroy: function () {
      this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
      for (var e = this.items.length - 1; e >= 0; e--)this.items[e].item.removeData(this.widgetName + "-item");
      return this
    },
    _setOption: function (t, i) {
      "disabled" === t ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : e.Widget.prototype._setOption.apply(this, arguments)
    },
    _mouseCapture: function (t, i) {
      var s = null, n = !1, a = this;
      return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
        return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : undefined
      }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () {
        this === t.target && (n = !0)
      }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
    },
    _mouseStart: function (t, i, s) {
      var n, a, o = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left
        }, e.extend(this.offset, {
          click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top},
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset()
        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
          prev: this.currentItem.prev()[0],
          parent: this.currentItem.parent()[0]
        }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)for (n = this.containers.length - 1; n >= 0; n--)this.containers[n]._trigger("activate", t, this._uiHash(this));
      return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
    },
    _mouseDrag: function (t) {
      var i, s, n, a, o = this.options, r = !1;
      for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
        if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))break;
        this._rearrange(t, s), this._trigger("change", t, this._uiHash());
        break
      }
      return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    },
    _mouseStop: function (t, i) {
      if (t) {
        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
          var s = this, n = this.placeholder.offset(), a = this.options.axis, o = {};
          a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
            s._clear(t)
          })
        } else this._clear(t, i);
        return !1
      }
    },
    cancel: function () {
      if (this.dragging) {
        this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
        for (var t = this.containers.length - 1; t >= 0; t--)this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
    },
    serialize: function (t) {
      var i = this._getItemsAsjQuery(t && t.connected), s = [];
      return t = t || {}, e(i).each(function () {
        var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
        i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
      }), !s.length && t.key && s.push(t.key + "="), s.join("&")
    },
    toArray: function (t) {
      var i = this._getItemsAsjQuery(t && t.connected), s = [];
      return t = t || {}, i.each(function () {
        s.push(e(t.item || this).attr(t.attribute || "id") || "")
      }), s
    },
    _intersectsWith: function (e) {
      var t = this.positionAbs.left, i = t + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, a = e.left, o = a + e.width, r = e.top, h = r + e.height, l = this.offset.click.top, u = this.offset.click.left, c = "x" === this.options.axis || s + l > r && h > s + l, d = "y" === this.options.axis || t + u > a && o > t + u, p = c && d;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
    },
    _intersectsWithPointer: function (e) {
      var i = "x" === this.options.axis || t(this.positionAbs.top + this.offset.click.top, e.top, e.height), s = "y" === this.options.axis || t(this.positionAbs.left + this.offset.click.left, e.left, e.width), n = i && s, a = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
      return n ? this.floating ? o && "right" === o || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1
    },
    _intersectsWithSides: function (e) {
      var i = t(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height), s = t(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width), n = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
      return this.floating && a ? "right" === a && s || "left" === a && !s : n && ("down" === n && i || "up" === n && !i)
    },
    _getDragVerticalDirection: function () {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== e && (e > 0 ? "down" : "up")
    },
    _getDragHorizontalDirection: function () {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== e && (e > 0 ? "right" : "left")
    },
    refresh: function (e) {
      return this._refreshItems(e), this.refreshPositions(), this
    },
    _connectWith: function () {
      var e = this.options;
      return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
    },
    _getItemsAsjQuery: function (t) {
      function i() {
        r.push(this)
      }

      var s, n, a, o, r = [], h = [], l = this._connectWith();
      if (l && t)for (s = l.length - 1; s >= 0; s--)for (a = e(l[s]), n = a.length - 1; n >= 0; n--)o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
      for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--)h[s][0].each(i);
      return e(r)
    },
    _removeCurrentsFromItems: function () {
      var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = e.grep(this.items, function (e) {
        for (var i = 0; t.length > i; i++)if (t[i] === e.item[0])return !1;
        return !0
      })
    },
    _refreshItems: function (t) {
      this.items = [], this.containers = [this];
      var i, s, n, a, o, r, h, l, u = this.items, c = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {item: this.currentItem}) : e(this.options.items, this.element), this]], d = this._connectWith();
      if (d && this.ready)for (i = d.length - 1; i >= 0; i--)for (n = e(d[i]), s = n.length - 1; s >= 0; s--)a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (c.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {item: this.currentItem}) : e(a.options.items, a.element), a]), this.containers.push(a));
      for (i = c.length - 1; i >= 0; i--)for (o = c[i][1], r = c[i][0], s = 0, l = r.length; l > s; s++)h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({
        item: h,
        instance: o,
        width: 0,
        height: 0,
        left: 0,
        top: 0
      })
    },
    refreshPositions: function (t) {
      this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, s, n, a;
      for (i = this.items.length - 1; i >= 0; i--)s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
      if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--)a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this
    },
    _createPlaceholder: function (t) {
      t = t || this;
      var i, s = t.options;
      s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
        element: function () {
          var s = t.currentItem[0].nodeName.toLowerCase(), n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
          return "tr" === s ? t.currentItem.children().each(function () {
            e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(n)
          }) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
        }, update: function (e, n) {
          (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
        }
      }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
    },
    _contactContainers: function (s) {
      var n, a, o, r, h, l, u, c, d, p, f = null, m = null;
      for (n = this.containers.length - 1; n >= 0; n--)if (!e.contains(this.currentItem[0], this.containers[n].element[0]))if (this._intersectsWith(this.containers[n].containerCache)) {
        if (f && e.contains(this.containers[n].element[0], f.element[0]))continue;
        f = this.containers[n], m = n
      } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
      if (f)if (1 === this.containers.length)this.containers[m].containerCache.over || (this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1); else {
        for (o = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", u = this.positionAbs[h] + this.offset.click[h], a = this.items.length - 1; a >= 0; a--)e.contains(this.containers[m].element[0], this.items[a].item[0]) && this.items[a].item[0] !== this.currentItem[0] && (!p || t(this.positionAbs.top + this.offset.click.top, this.items[a].top, this.items[a].height)) && (c = this.items[a].item.offset()[h], d = !1, Math.abs(c - u) > Math.abs(c + this.items[a][l] - u) && (d = !0, c += this.items[a][l]), o > Math.abs(c - u) && (o = Math.abs(c - u), r = this.items[a], this.direction = d ? "up" : "down"));
        if (!r && !this.options.dropOnEmpty)return;
        if (this.currentContainer === this.containers[m])return;
        r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[m].element, !0), this._trigger("change", s, this._uiHash()), this.containers[m]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1
      }
    },
    _createHelper: function (t) {
      var i = this.options, s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
      return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
    },
    _adjustOffsetFromHelper: function (t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), "left"in t && (this.offset.click.left = t.left + this.margins.left), "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top"in t && (this.offset.click.top = t.top + this.margins.top), "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
        top: 0,
        left: 0
      }), {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function () {
      if ("relative" === this.cssPosition) {
        var e = this.currentItem.position();
        return {
          top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        }
      }
      return {top: 0, left: 0}
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      }
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    },
    _setContainment: function () {
      var t, i, s, n = this.options;
      "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
    },
    _convertPositionTo: function (t, i) {
      i || (i = this.position);
      var s = "absolute" === t ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = /(html|body)/i.test(n[0].tagName);
      return {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
      }
    },
    _generatePosition: function (t) {
      var i, s, n = this.options, a = t.pageX, o = t.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
        top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
        left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
      }
    },
    _rearrange: function (e, t, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var n = this.counter;
      this._delay(function () {
        n === this.counter && this.refreshPositions(!s)
      })
    },
    _clear: function (e, t) {
      function i(e, t, i) {
        return function (s) {
          i._trigger(e, s, t._uiHash(t))
        }
      }

      this.reverting = !1;
      var s, n = [];
      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
      } else this.currentItem.show();
      for (this.fromOutside && !t && n.push(function (e) {
        this._trigger("receive", e, this._uiHash(this.fromOutside))
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function (e) {
        this._trigger("update", e, this._uiHash())
      }), this !== this.currentContainer && (t || (n.push(function (e) {
        this._trigger("remove", e, this._uiHash())
      }), n.push(function (e) {
        return function (t) {
          e._trigger("receive", t, this._uiHash(this))
        }
      }.call(this, this.currentContainer)), n.push(function (e) {
        return function (t) {
          e._trigger("update", t, this._uiHash(this))
        }
      }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--)t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
        if (!t) {
          for (this._trigger("beforeStop", e, this._uiHash()), s = 0; n.length > s; s++)n[s].call(this, e);
          this._trigger("stop", e, this._uiHash())
        }
        return this.fromOutside = !1, !1
      }
      if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
        for (s = 0; n.length > s; s++)n[s].call(this, e);
        this._trigger("stop", e, this._uiHash())
      }
      return this.fromOutside = !1, !0
    },
    _trigger: function () {
      e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    },
    _uiHash: function (t) {
      var i = t || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || e([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: t ? t.element : null
      }
    }
  })
})(jQuery);
(function (e) {
  e.widget("ui.autocomplete", {
    version: "1.10.4",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {my: "left top", at: "left bottom", collision: "none"},
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function () {
      var t, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n;
      this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
        keydown: function (n) {
          if (this.element.prop("readOnly"))return t = !0, s = !0, i = !0, undefined;
          t = !1, s = !1, i = !1;
          var a = e.ui.keyCode;
          switch (n.keyCode) {
            case a.PAGE_UP:
              t = !0, this._move("previousPage", n);
              break;
            case a.PAGE_DOWN:
              t = !0, this._move("nextPage", n);
              break;
            case a.UP:
              t = !0, this._keyEvent("previous", n);
              break;
            case a.DOWN:
              t = !0, this._keyEvent("next", n);
              break;
            case a.ENTER:
            case a.NUMPAD_ENTER:
              this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
              break;
            case a.TAB:
              this.menu.active && this.menu.select(n);
              break;
            case a.ESCAPE:
              this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
              break;
            default:
              i = !0, this._searchTimeout(n)
          }
        }, keypress: function (s) {
          if (t)return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined;
          if (!i) {
            var n = e.ui.keyCode;
            switch (s.keyCode) {
              case n.PAGE_UP:
                this._move("previousPage", s);
                break;
              case n.PAGE_DOWN:
                this._move("nextPage", s);
                break;
              case n.UP:
                this._keyEvent("previous", s);
                break;
              case n.DOWN:
                this._keyEvent("next", s)
            }
          }
        }, input: function (e) {
          return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
        }, focus: function () {
          this.selectedItem = null, this.previous = this._value()
        }, blur: function (e) {
          return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
        }
      }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu"), this._on(this.menu.element, {
        mousedown: function (t) {
          t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur
          });
          var i = this.menu.element[0];
          e(t.target).closest(".ui-menu-item").length || this._delay(function () {
            var t = this;
            this.document.one("mousedown", function (s) {
              s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
            })
          })
        }, menufocus: function (t, i) {
          if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)))return this.menu.blur(), this.document.one("mousemove", function () {
            e(t.target).trigger(t.originalEvent)
          }), undefined;
          var s = i.item.data("ui-autocomplete-item");
          !1 !== this._trigger("focus", t, {item: s}) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
        }, menuselect: function (e, t) {
          var i = t.item.data("ui-autocomplete-item"), s = this.previous;
          this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
            this.previous = s, this.selectedItem = i
          })), !1 !== this._trigger("select", e, {item: i}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
        }
      }), this.liveRegion = e("<span>", {
        role: "status",
        "aria-live": "polite"
      }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
        beforeunload: function () {
          this.element.removeAttr("autocomplete")
        }
      })
    },
    _destroy: function () {
      clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
    },
    _setOption: function (e, t) {
      this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
    },
    _initSource: function () {
      var t, i, s = this;
      e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
        s(e.ui.autocomplete.filter(t, i.term))
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
        s.xhr && s.xhr.abort(), s.xhr = e.ajax({
          url: i, data: t, dataType: "json", success: function (e) {
            n(e)
          }, error: function () {
            n([])
          }
        })
      }) : this.source = this.options.source
    },
    _searchTimeout: function (e) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
      }, this.options.delay)
    },
    search: function (e, t) {
      return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
    },
    _search: function (e) {
      this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: e}, this._response())
    },
    _response: function () {
      var t = ++this.requestIndex;
      return e.proxy(function (e) {
        t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
      }, this)
    },
    __response: function (e) {
      e && (e = this._normalize(e)), this._trigger("response", null, {content: e}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
    },
    close: function (e) {
      this.cancelSearch = !0, this._close(e)
    },
    _close: function (e) {
      this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
    },
    _change: function (e) {
      this.previous !== this._value() && this._trigger("change", e, {item: this.selectedItem})
    },
    _normalize: function (t) {
      return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
        return "string" == typeof t ? {label: t, value: t} : e.extend({
          label: t.label || t.value,
          value: t.value || t.label
        }, t)
      })
    },
    _suggest: function (t) {
      var i = this.menu.element.empty();
      this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
    },
    _resizeMenu: function () {
      var e = this.menu.element;
      e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
    },
    _renderMenu: function (t, i) {
      var s = this;
      e.each(i, function (e, i) {
        s._renderItemData(t, i)
      })
    },
    _renderItemData: function (e, t) {
      return this._renderItem(e, t).data("ui-autocomplete-item", t)
    },
    _renderItem: function (t, i) {
      return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
    },
    _move: function (e, t) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined)
    },
    widget: function () {
      return this.menu.element
    },
    _value: function () {
      return this.valueMethod.apply(this.element, arguments)
    },
    _keyEvent: function (e, t) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
    }
  }), e.extend(e.ui.autocomplete, {
    escapeRegex: function (e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }, filter: function (t, i) {
      var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
      return e.grep(t, function (e) {
        return s.test(e.label || e.value || e)
      })
    }
  }), e.widget("ui.autocomplete", e.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function (e) {
          return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
        }
      }
    }, __response: function (e) {
      var t;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
    }
  })
})(jQuery);
(function (e) {
  e.widget("ui.menu", {
    version: "1.10.4",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {submenu: "ui-icon-carat-1-e"},
      menus: "ul",
      position: {my: "left top", at: "right top"},
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function () {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
        role: this.options.role,
        tabIndex: 0
      }).bind("click" + this.eventNamespace, e.proxy(function (e) {
        this.options.disabled && e.preventDefault()
      }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
        "mousedown .ui-menu-item > a": function (e) {
          e.preventDefault()
        }, "click .ui-state-disabled > a": function (e) {
          e.preventDefault()
        }, "click .ui-menu-item:has(a)": function (t) {
          var i = e(t.target).closest(".ui-menu-item");
          !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
        }, "mouseenter .ui-menu-item": function (t) {
          var i = e(t.currentTarget);
          i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
        }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (e, t) {
          var i = this.active || this.element.children(".ui-menu-item").eq(0);
          t || this.focus(e, i)
        }, blur: function (t) {
          this._delay(function () {
            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
          })
        }, keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function (t) {
          e(t.target).closest(".ui-menu").length || this.collapseAll(t), this.mouseHandled = !1
        }
      })
    },
    _destroy: function () {
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
        var t = e(this);
        t.data("ui-menu-submenu-carat") && t.remove()
      }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
    },
    _keydown: function (t) {
      function i(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
      }

      var s, n, a, o, r, h = !0;
      switch (t.keyCode) {
        case e.ui.keyCode.PAGE_UP:
          this.previousPage(t);
          break;
        case e.ui.keyCode.PAGE_DOWN:
          this.nextPage(t);
          break;
        case e.ui.keyCode.HOME:
          this._move("first", "first", t);
          break;
        case e.ui.keyCode.END:
          this._move("last", "last", t);
          break;
        case e.ui.keyCode.UP:
          this.previous(t);
          break;
        case e.ui.keyCode.DOWN:
          this.next(t);
          break;
        case e.ui.keyCode.LEFT:
          this.collapse(t);
          break;
        case e.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
          break;
        case e.ui.keyCode.ENTER:
        case e.ui.keyCode.SPACE:
          this._activate(t);
          break;
        case e.ui.keyCode.ESCAPE:
          this.collapse(t);
          break;
        default:
          h = !1, n = this.previousFilter || "", a = String.fromCharCode(t.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
            return r.test(e(this).children("a").text())
          }), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(t.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
            return r.test(e(this).children("a").text())
          })), s.length ? (this.focus(t, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function () {
            delete this.previousFilter
          }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
      }
      h && t.preventDefault()
    },
    _activate: function (e) {
      this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
    },
    refresh: function () {
      var t, i = this.options.icons.submenu, s = this.element.find(this.options.menus);
      this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function () {
        var t = e(this), s = t.prev("a"), n = e("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
        s.attr("aria-haspopup", "true").prepend(n), t.attr("aria-labelledby", s.attr("id"))
      }), t = s.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
        tabIndex: -1,
        role: this._itemRole()
      }), t.children(":not(.ui-menu-item)").each(function () {
        var t = e(this);
        /[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
      }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
    },
    _itemRole: function () {
      return {menu: "menuitem", listbox: "option"}[this.options.role]
    },
    _setOption: function (e, t) {
      "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), this._super(e, t)
    },
    focus: function (e, t) {
      var i, s;
      this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
        this._close()
      }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {item: t})
    },
    _scrollIntoView: function (t) {
      var i, s, n, a, o, r;
      this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
    },
    blur: function (e, t) {
      t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {item: this.active}))
    },
    _startOpening: function (e) {
      clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
        this._close(), this._open(e)
      }, this.delay))
    },
    _open: function (t) {
      var i = e.extend({of: this.active}, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
    },
    collapseAll: function (t, i) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
        s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s
      }, this.delay)
    },
    _close: function (e) {
      e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
    },
    collapse: function (e) {
      var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      t && t.length && (this._close(), this.focus(e, t))
    },
    expand: function (e) {
      var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
      t && t.length && (this._open(t.parent()), this._delay(function () {
        this.focus(e, t)
      }))
    },
    next: function (e) {
      this._move("next", "first", e)
    },
    previous: function (e) {
      this._move("prev", "last", e)
    },
    isFirstItem: function () {
      return this.active && !this.active.prevAll(".ui-menu-item").length
    },
    isLastItem: function () {
      return this.active && !this.active.nextAll(".ui-menu-item").length
    },
    _move: function (e, t, i) {
      var s;
      this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[t]()), this.focus(i, s)
    },
    nextPage: function (t) {
      var i, s, n;
      return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
        return i = e(this), 0 > i.offset().top - s - n
      }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(t), undefined)
    },
    previousPage: function (t) {
      var i, s, n;
      return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
        return i = e(this), i.offset().top - s + n > 0
      }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(t), undefined)
    },
    _hasScroll: function () {
      return this.element.outerHeight() < this.element.prop("scrollHeight")
    },
    select: function (t) {
      this.active = this.active || e(t.target).closest(".ui-menu-item");
      var i = {item: this.active};
      this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
    }
  })
})(jQuery);

/*! DataTables 1.10.2
 * ©2008-2014 SpryMedia Ltd - datatables.net/license
 */
(function (za, O, l) {
  var N = function (h) {
    function T(a) {
      var b, c, d = {};
      h.each(a, function (e) {
        if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " "))c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && T(a[e])
      });
      a._hungarianMap = d
    }

    function G(a, b, c) {
      a._hungarianMap || T(a);
      var d;
      h.each(b, function (e) {
        d = a._hungarianMap[e];
        if (d !== l && (c || b[d] === l))"o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), G(a[d], b[d], c)) : b[d] = b[e]
      })
    }

    function N(a) {
      var b = p.defaults.oLanguage, c = a.sZeroRecords;
      !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && D(a, a, "sZeroRecords", "sEmptyTable");
      !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && D(a, a, "sZeroRecords", "sLoadingRecords");
      a.sInfoThousands && (a.sThousands = a.sInfoThousands);
      (a = a.sDecimal) && cb(a)
    }

    function db(a) {
      w(a, "ordering", "bSort");
      w(a, "orderMulti", "bSortMulti");
      w(a, "orderClasses", "bSortClasses");
      w(a, "orderCellsTop", "bSortCellsTop");
      w(a, "order", "aaSorting");
      w(a, "orderFixed", "aaSortingFixed");
      w(a, "paging", "bPaginate");
      w(a, "pagingType", "sPaginationType");
      w(a, "pageLength", "iDisplayLength");
      w(a, "searching", "bFilter");
      if (a = a.aoSearchCols)for (var b = 0, c = a.length; b < c; b++)a[b] && G(p.models.oSearch, a[b])
    }

    function eb(a) {
      w(a, "orderable", "bSortable");
      w(a, "orderData", "aDataSort");
      w(a, "orderSequence", "asSorting");
      w(a, "orderDataType", "sortDataType")
    }

    function fb(a) {
      var a = a.oBrowser, b = h("<div/>").css({
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        width: 1,
        overflow: "hidden"
      }).append(h("<div/>").css({
        position: "absolute", top: 1, left: 1, width: 100,
        overflow: "scroll"
      }).append(h('<div class="test"/>').css({width: "100%", height: 10}))).appendTo("body"), c = b.find(".test");
      a.bScrollOversize = 100 === c[0].offsetWidth;
      a.bScrollbarLeft = 1 !== c.offset().left;
      b.remove()
    }

    function gb(a, b, c, d, e, f) {
      var g, j = !1;
      c !== l && (g = c, j = !0);
      for (; d !== e;)a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f);
      return g
    }

    function Aa(a, b) {
      var c = p.defaults.column, d = a.aoColumns.length, c = h.extend({}, p.models.oColumn, c, {
        nTh: b ? b : O.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML :
          "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d
      });
      a.aoColumns.push(c);
      c = a.aoPreSearchCols;
      c[d] = h.extend({}, p.models.oSearch, c[d]);
      fa(a, d, null)
    }

    function fa(a, b, c) {
      var b = a.aoColumns[b], d = a.oClasses, e = h(b.nTh);
      if (!b.sWidthOrig) {
        b.sWidthOrig = e.attr("width") || null;
        var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
        f && (b.sWidthOrig = f[1])
      }
      c !== l && null !== c && (eb(c), G(p.defaults.column, c), c.mDataProp !== l && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), h.extend(b, c), D(b, c, "sWidth", "sWidthOrig"), "number" === typeof c.iDataSort && (b.aDataSort = [c.iDataSort]), D(b, c, "aDataSort"));
      var g = b.mData, j = U(g), i = b.mRender ? U(b.mRender) : null, c = function (a) {
        return "string" === typeof a && -1 !== a.indexOf("@")
      };
      b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
      b.fnGetData = function (a, b, c) {
        var d = j(a, b, l, c);
        return i && b ? i(d, b, a, c) : d
      };
      b.fnSetData = function (a, b, c) {
        return Ba(g)(a, b, c)
      };
      a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
      a = -1 !== h.inArray("asc", b.asSorting);
      c = -1 !== h.inArray("desc", b.asSorting);
      !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
    }

    function V(a) {
      if (!1 !== a.oFeatures.bAutoWidth) {
        var b = a.aoColumns;
        Ca(a);
        for (var c = 0, d = b.length; c < d; c++)b[c].nTh.style.width = b[c].sWidth
      }
      b =
        a.oScroll;
      ("" !== b.sY || "" !== b.sX) && W(a);
      u(a, null, "column-sizing", [a])
    }

    function ga(a, b) {
      var c = X(a, "bVisible");
      return "number" === typeof c[b] ? c[b] : null
    }

    function Y(a, b) {
      var c = X(a, "bVisible"), c = h.inArray(b, c);
      return -1 !== c ? c : null
    }

    function Z(a) {
      return X(a, "bVisible").length
    }

    function X(a, b) {
      var c = [];
      h.map(a.aoColumns, function (a, e) {
        a[b] && c.push(e)
      });
      return c
    }

    function Da(a) {
      var b = a.aoColumns, c = a.aoData, d = p.ext.type.detect, e, f, g, j, i, h, m, o, k;
      e = 0;
      for (f = b.length; e < f; e++)if (m = b[e], k = [], !m.sType && m._sManualType)m.sType =
        m._sManualType; else if (!m.sType) {
        g = 0;
        for (j = d.length; g < j; g++) {
          i = 0;
          for (h = c.length; i < h && !(k[i] === l && (k[i] = A(a, i, e, "type")), o = d[g](k[i], a), !o || "html" === o); i++);
          if (o) {
            m.sType = o;
            break
          }
        }
        m.sType || (m.sType = "string")
      }
    }

    function hb(a, b, c, d) {
      var e, f, g, j, i, n, m = a.aoColumns;
      if (b)for (e = b.length - 1; 0 <= e; e--) {
        n = b[e];
        var o = n.targets !== l ? n.targets : n.aTargets;
        h.isArray(o) || (o = [o]);
        f = 0;
        for (g = o.length; f < g; f++)if ("number" === typeof o[f] && 0 <= o[f]) {
          for (; m.length <= o[f];)Aa(a);
          d(o[f], n)
        } else if ("number" === typeof o[f] && 0 > o[f])d(m.length +
          o[f], n); else if ("string" === typeof o[f]) {
          j = 0;
          for (i = m.length; j < i; j++)("_all" == o[f] || h(m[j].nTh).hasClass(o[f])) && d(j, n)
        }
      }
      if (c) {
        e = 0;
        for (a = c.length; e < a; e++)d(e, c[e])
      }
    }

    function I(a, b, c, d) {
      var e = a.aoData.length, f = h.extend(!0, {}, p.models.oRow, {src: c ? "dom" : "data"});
      f._aData = b;
      a.aoData.push(f);
      for (var b = a.aoColumns, f = 0, g = b.length; f < g; f++)c && Ea(a, e, f, A(a, e, f)), b[f].sType = null;
      a.aiDisplayMaster.push(e);
      (c || !a.oFeatures.bDeferRender) && Fa(a, e, c, d);
      return e
    }

    function ha(a, b) {
      var c;
      b instanceof h || (b = h(b));
      return b.map(function (b,
                             e) {
        c = ia(a, e);
        return I(a, c.data, e, c.cells)
      })
    }

    function A(a, b, c, d) {
      var e = a.iDraw, f = a.aoColumns[c], g = a.aoData[b]._aData, j = f.sDefaultContent, c = f.fnGetData(g, d, {
        settings: a,
        row: b,
        col: c
      });
      if (c === l)return a.iDrawError != e && null === j && (P(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b, 4), a.iDrawError = e), j;
      if ((c === g || null === c) && null !== j)c = j; else if ("function" === typeof c)return c.call(g);
      return null === c && "display" == d ? "" : c
    }

    function Ea(a, b, c, d) {
      a.aoColumns[c].fnSetData(a.aoData[b]._aData,
        d, {settings: a, row: b, col: c})
    }

    function Ga(a) {
      return h.map(a.match(/(\\.|[^\.])+/g), function (a) {
        return a.replace(/\\./g, ".")
      })
    }

    function U(a) {
      if (h.isPlainObject(a)) {
        var b = {};
        h.each(a, function (a, c) {
          c && (b[a] = U(c))
        });
        return function (a, c, f, g) {
          var j = b[c] || b._;
          return j !== l ? j(a, c, f, g) : a
        }
      }
      if (null === a)return function (a) {
        return a
      };
      if ("function" === typeof a)return function (b, c, f, g) {
        return a(b, c, f, g)
      };
      if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
        var c = function (a, b, f) {
          var g,
            j;
          if ("" !== f) {
            j = Ga(f);
            for (var i = 0, h = j.length; i < h; i++) {
              f = j[i].match($);
              g = j[i].match(Q);
              if (f) {
                j[i] = j[i].replace($, "");
                "" !== j[i] && (a = a[j[i]]);
                g = [];
                j.splice(0, i + 1);
                j = j.join(".");
                i = 0;
                for (h = a.length; i < h; i++)g.push(c(a[i], b, j));
                a = f[0].substring(1, f[0].length - 1);
                a = "" === a ? g : g.join(a);
                break
              } else if (g) {
                j[i] = j[i].replace(Q, "");
                a = a[j[i]]();
                continue
              }
              if (null === a || a[j[i]] === l)return l;
              a = a[j[i]]
            }
          }
          return a
        };
        return function (b, e) {
          return c(b, e, a)
        }
      }
      return function (b) {
        return b[a]
      }
    }

    function Ba(a) {
      if (h.isPlainObject(a))return Ba(a._);
      if (null === a)return function () {
      };
      if ("function" === typeof a)return function (b, d, e) {
        a(b, "set", d, e)
      };
      if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
        var b = function (a, d, e) {
          var e = Ga(e), f;
          f = e[e.length - 1];
          for (var g, j, i = 0, h = e.length - 1; i < h; i++) {
            g = e[i].match($);
            j = e[i].match(Q);
            if (g) {
              e[i] = e[i].replace($, "");
              a[e[i]] = [];
              f = e.slice();
              f.splice(0, i + 1);
              g = f.join(".");
              j = 0;
              for (h = d.length; j < h; j++)f = {}, b(f, d[j], g), a[e[i]].push(f);
              return
            }
            j && (e[i] = e[i].replace(Q, ""), a = a[e[i]](d));
            if (null ===
              a[e[i]] || a[e[i]] === l)a[e[i]] = {};
            a = a[e[i]]
          }
          if (f.match(Q))a[f.replace(Q, "")](d); else a[f.replace($, "")] = d
        };
        return function (c, d) {
          return b(c, d, a)
        }
      }
      return function (b, d) {
        b[a] = d
      }
    }

    function Ha(a) {
      return C(a.aoData, "_aData")
    }

    function ja(a) {
      a.aoData.length = 0;
      a.aiDisplayMaster.length = 0;
      a.aiDisplay.length = 0
    }

    function ka(a, b, c) {
      for (var d = -1, e = 0, f = a.length; e < f; e++)a[e] == b ? d = e : a[e] > b && a[e]--;
      -1 != d && c === l && a.splice(d, 1)
    }

    function la(a, b, c, d) {
      var e = a.aoData[b], f;
      if ("dom" === c || (!c || "auto" === c) && "dom" === e.src)e._aData =
        ia(a, e).data; else {
        var g = e.anCells, j;
        if (g) {
          c = 0;
          for (f = g.length; c < f; c++) {
            for (j = g[c]; j.childNodes.length;)j.removeChild(j.firstChild);
            g[c].innerHTML = A(a, b, c, "display")
          }
        }
      }
      e._aSortData = null;
      e._aFilterData = null;
      a = a.aoColumns;
      if (d !== l)a[d].sType = null; else {
        c = 0;
        for (f = a.length; c < f; c++)a[c].sType = null
      }
      Ia(e)
    }

    function ia(a, b) {
      var c = [], d = [], e = b.firstChild, f, g, j, i = 0, n, m = a.aoColumns, o = function (a, b, c) {
        "string" === typeof a && (b = a.indexOf("@"), -1 !== b && (a = a.substring(b + 1), j["@" + a] = c.getAttribute(a)))
      }, k = function (a) {
        g = m[i];
        n = h.trim(a.innerHTML);
        g && g._bAttrSrc ? (j = {display: n}, o(g.mData.sort, j, a), o(g.mData.type, j, a), o(g.mData.filter, j, a), c.push(j)) : c.push(n);
        i++
      };
      if (e)for (; e;) {
        f = e.nodeName.toUpperCase();
        if ("TD" == f || "TH" == f)k(e), d.push(e);
        e = e.nextSibling
      } else {
        d = b.anCells;
        e = 0;
        for (f = d.length; e < f; e++)k(d[e])
      }
      return {data: c, cells: d}
    }

    function Fa(a, b, c, d) {
      var e = a.aoData[b], f = e._aData, g = [], j, i, h, m, o;
      if (null === e.nTr) {
        j = c || O.createElement("tr");
        e.nTr = j;
        e.anCells = g;
        j._DT_RowIndex = b;
        Ia(e);
        m = 0;
        for (o = a.aoColumns.length; m < o; m++) {
          h = a.aoColumns[m];
          i = c ? d[m] : O.createElement(h.sCellType);
          g.push(i);
          if (!c || h.mRender || h.mData !== m)i.innerHTML = A(a, b, m, "display");
          h.sClass && (i.className += " " + h.sClass);
          h.bVisible && !c ? j.appendChild(i) : !h.bVisible && c && i.parentNode.removeChild(i);
          h.fnCreatedCell && h.fnCreatedCell.call(a.oInstance, i, A(a, b, m), f, b, m)
        }
        u(a, "aoRowCreatedCallback", null, [j, f, b])
      }
      e.nTr.setAttribute("role", "row")
    }

    function Ia(a) {
      var b = a.nTr, c = a._aData;
      if (b) {
        c.DT_RowId && (b.id = c.DT_RowId);
        if (c.DT_RowClass) {
          var d = c.DT_RowClass.split(" ");
          a.__rowc = a.__rowc ?
            Ja(a.__rowc.concat(d)) : d;
          h(b).removeClass(a.__rowc.join(" ")).addClass(c.DT_RowClass)
        }
        c.DT_RowData && h(b).data(c.DT_RowData)
      }
    }

    function ib(a) {
      var b, c, d, e, f, g = a.nTHead, j = a.nTFoot, i = 0 === h("th, td", g).length, n = a.oClasses, m = a.aoColumns;
      i && (e = h("<tr/>").appendTo(g));
      b = 0;
      for (c = m.length; b < c; b++)f = m[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Ka(a, f.nTh, b))), f.sTitle != d.html() &&
      d.html(f.sTitle), La(a, "header")(a, d, f, n);
      i && aa(a.aoHeader, g);
      h(g).find(">tr").attr("role", "row");
      h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
      h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
      if (null !== j) {
        a = a.aoFooter[0];
        b = 0;
        for (c = a.length; b < c; b++)f = m[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass)
      }
    }

    function ba(a, b, c) {
      var d, e, f, g = [], j = [], i = a.aoColumns.length, n;
      if (b) {
        c === l && (c = !1);
        d = 0;
        for (e = b.length; d < e; d++) {
          g[d] = b[d].slice();
          g[d].nTr = b[d].nTr;
          for (f = i - 1; 0 <= f; f--)!a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
          j.push([])
        }
        d = 0;
        for (e = g.length; d < e; d++) {
          if (a = g[d].nTr)for (; f = a.firstChild;)a.removeChild(f);
          f = 0;
          for (b = g[d].length; f < b; f++)if (n = i = 1, j[d][f] === l) {
            a.appendChild(g[d][f].cell);
            for (j[d][f] = 1; g[d + i] !== l && g[d][f].cell == g[d + i][f].cell;)j[d + i][f] = 1, i++;
            for (; g[d][f + n] !== l && g[d][f].cell == g[d][f + n].cell;) {
              for (c = 0; c < i; c++)j[d + c][f + n] = 1;
              n++
            }
            h(g[d][f].cell).attr("rowspan", i).attr("colspan", n)
          }
        }
      }
    }

    function K(a) {
      var b = u(a, "aoPreDrawCallback", "preDraw", [a]);
      if (-1 !== h.inArray(!1, b))B(a, !1); else {
        var b =
          [], c = 0, d = a.asStripeClasses, e = d.length, f = a.oLanguage, g = a.iInitDisplayStart, j = "ssp" == z(a), i = a.aiDisplay;
        a.bDrawing = !0;
        g !== l && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
        var g = a._iDisplayStart, n = a.fnDisplayEnd();
        if (a.bDeferLoading)a.bDeferLoading = !1, a.iDraw++, B(a, !1); else if (j) {
          if (!a.bDestroying && !jb(a))return
        } else a.iDraw++;
        if (0 !== i.length) {
          f = j ? a.aoData.length : n;
          for (j = j ? 0 : g; j < f; j++) {
            var m = i[j], o = a.aoData[m];
            null === o.nTr && Fa(a, m);
            m = o.nTr;
            if (0 !== e) {
              var k = d[c % e];
              o._sRowStripe !=
              k && (h(m).removeClass(o._sRowStripe).addClass(k), o._sRowStripe = k)
            }
            u(a, "aoRowCallback", null, [m, o._aData, c, j]);
            b.push(m);
            c++
          }
        } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == z(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", {"class": e ? d[0] : ""}).append(h("<td />", {
          valign: "top",
          colSpan: Z(a),
          "class": a.oClasses.sRowEmpty
        }).html(c))[0];
        u(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ha(a), g, n, i]);
        u(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0],
          Ha(a), g, n, i]);
        d = h(a.nTBody);
        d.children().detach();
        d.append(h(b));
        u(a, "aoDrawCallback", "draw", [a]);
        a.bSorted = !1;
        a.bFiltered = !1;
        a.bDrawing = !1
      }
    }

    function L(a, b) {
      var c = a.oFeatures, d = c.bFilter;
      c.bSort && kb(a);
      d ? ca(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
      !0 !== b && (a._iDisplayStart = 0);
      a._drawHold = b;
      K(a);
      a._drawHold = !1
    }

    function lb(a) {
      var b = a.oClasses, c = h(a.nTable), c = h("<div/>").insertBefore(c), d = a.oFeatures, e = h("<div/>", {
        id: a.sTableId + "_wrapper",
        "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
      });
      a.nHolding = c[0];
      a.nTableWrapper = e[0];
      a.nTableReinsertBefore = a.nTable.nextSibling;
      for (var f = a.sDom.split(""), g, j, i, n, m, o, k = 0; k < f.length; k++) {
        g = null;
        j = f[k];
        if ("<" == j) {
          i = h("<div/>")[0];
          n = f[k + 1];
          if ("'" == n || '"' == n) {
            m = "";
            for (o = 2; f[k + o] != n;)m += f[k + o], o++;
            "H" == m ? m = b.sJUIHeader : "F" == m && (m = b.sJUIFooter);
            -1 != m.indexOf(".") ? (n = m.split("."), i.id = n[0].substr(1, n[0].length - 1), i.className = n[1]) : "#" == m.charAt(0) ? i.id = m.substr(1, m.length - 1) : i.className = m;
            k += o
          }
          e.append(i);
          e = h(i)
        } else if (">" == j)e = e.parent(); else if ("l" ==
          j && d.bPaginate && d.bLengthChange)g = mb(a); else if ("f" == j && d.bFilter)g = nb(a); else if ("r" == j && d.bProcessing)g = ob(a); else if ("t" == j)g = pb(a); else if ("i" == j && d.bInfo)g = qb(a); else if ("p" == j && d.bPaginate)g = rb(a); else if (0 !== p.ext.feature.length) {
          i = p.ext.feature;
          o = 0;
          for (n = i.length; o < n; o++)if (j == i[o].cFeature) {
            g = i[o].fnInit(a);
            break
          }
        }
        g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g))
      }
      c.replaceWith(e)
    }

    function aa(a, b) {
      var c = h(b).children("tr"), d, e, f, g, j, i, n, m, o, k;
      a.splice(0, a.length);
      f = 0;
      for (i = c.length; f <
      i; f++)a.push([]);
      f = 0;
      for (i = c.length; f < i; f++) {
        d = c[f];
        for (e = d.firstChild; e;) {
          if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
            m = 1 * e.getAttribute("colspan");
            o = 1 * e.getAttribute("rowspan");
            m = !m || 0 === m || 1 === m ? 1 : m;
            o = !o || 0 === o || 1 === o ? 1 : o;
            g = 0;
            for (j = a[f]; j[g];)g++;
            n = g;
            k = 1 === m ? !0 : !1;
            for (j = 0; j < m; j++)for (g = 0; g < o; g++)a[f + g][n + j] = {cell: e, unique: k}, a[f + g].nTr = d
          }
          e = e.nextSibling
        }
      }
    }

    function ma(a, b, c) {
      var d = [];
      c || (c = a.aoHeader, b && (c = [], aa(c, b)));
      for (var b = 0, e = c.length; b < e; b++)for (var f = 0, g = c[b].length; f <
      g; f++)if (c[b][f].unique && (!d[f] || !a.bSortCellsTop))d[f] = c[b][f].cell;
      return d
    }

    function na(a, b, c) {
      u(a, "aoServerParams", "serverParams", [b]);
      if (b && h.isArray(b)) {
        var d = {}, e = /(.*?)\[\]$/;
        h.each(b, function (a, b) {
          var c = b.name.match(e);
          c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value
        });
        b = d
      }
      var f, g = a.ajax, j = a.oInstance;
      if (h.isPlainObject(g) && g.data) {
        f = g.data;
        var i = h.isFunction(f) ? f(b) : f, b = h.isFunction(f) && i ? i : h.extend(!0, b, i);
        delete g.data
      }
      i = {
        data: b, success: function (b) {
          var d = b.error || b.sError;
          d && a.oApi._fnLog(a, 0, d);
          a.json = b;
          u(a, null, "xhr", [a, b]);
          c(b)
        }, dataType: "json", cache: !1, type: a.sServerMethod, error: function (b, c) {
          var d = a.oApi._fnLog;
          "parsererror" == c ? d(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && d(a, 0, "Ajax error", 7);
          B(a, !1)
        }
      };
      a.oAjaxData = b;
      u(a, null, "preXhr", [a, b]);
      a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function (a, b) {
        return {name: b, value: a}
      }), c, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(i, {url: g || a.sAjaxSource})) : h.isFunction(g) ? a.jqXHR = g.call(j,
        b, c, a) : (a.jqXHR = h.ajax(h.extend(i, g)), g.data = f)
    }

    function jb(a) {
      return a.bAjaxDataGet ? (a.iDraw++, B(a, !0), na(a, sb(a), function (b) {
        tb(a, b)
      }), !1) : !0
    }

    function sb(a) {
      var b = a.aoColumns, c = b.length, d = a.oFeatures, e = a.oPreviousSearch, f = a.aoPreSearchCols, g, j = [], i, n, m, o = R(a);
      g = a._iDisplayStart;
      i = !1 !== d.bPaginate ? a._iDisplayLength : -1;
      var k = function (a, b) {
        j.push({name: a, value: b})
      };
      k("sEcho", a.iDraw);
      k("iColumns", c);
      k("sColumns", C(b, "sName").join(","));
      k("iDisplayStart", g);
      k("iDisplayLength", i);
      var l = {
        draw: a.iDraw,
        columns: [], order: [], start: g, length: i, search: {value: e.sSearch, regex: e.bRegex}
      };
      for (g = 0; g < c; g++)n = b[g], m = f[g], i = "function" == typeof n.mData ? "function" : n.mData, l.columns.push({
        data: i,
        name: n.sName,
        searchable: n.bSearchable,
        orderable: n.bSortable,
        search: {value: m.sSearch, regex: m.bRegex}
      }), k("mDataProp_" + g, i), d.bFilter && (k("sSearch_" + g, m.sSearch), k("bRegex_" + g, m.bRegex), k("bSearchable_" + g, n.bSearchable)), d.bSort && k("bSortable_" + g, n.bSortable);
      d.bFilter && (k("sSearch", e.sSearch), k("bRegex", e.bRegex));
      d.bSort &&
      (h.each(o, function (a, b) {
        l.order.push({column: b.col, dir: b.dir});
        k("iSortCol_" + a, b.col);
        k("sSortDir_" + a, b.dir)
      }), k("iSortingCols", o.length));
      b = p.ext.legacy.ajax;
      return null === b ? a.sAjaxSource ? j : l : b ? j : l
    }

    function tb(a, b) {
      var c = b.sEcho !== l ? b.sEcho : b.draw, d = b.iTotalRecords !== l ? b.iTotalRecords : b.recordsTotal, e = b.iTotalDisplayRecords !== l ? b.iTotalDisplayRecords : b.recordsFiltered;
      if (c) {
        if (1 * c < a.iDraw)return;
        a.iDraw = 1 * c
      }
      ja(a);
      a._iRecordsTotal = parseInt(d, 10);
      a._iRecordsDisplay = parseInt(e, 10);
      c = oa(a, b);
      d = 0;
      for (e =
             c.length; d < e; d++)I(a, c[d]);
      a.aiDisplay = a.aiDisplayMaster.slice();
      a.bAjaxDataGet = !1;
      K(a);
      a._bInitComplete || pa(a, b);
      a.bAjaxDataGet = !0;
      B(a, !1)
    }

    function oa(a, b) {
      var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== l ? a.ajax.dataSrc : a.sAjaxDataProp;
      return "data" === c ? b.aaData || b[c] : "" !== c ? U(c)(b) : b
    }

    function nb(a) {
      var b = a.oClasses, c = a.sTableId, d = a.oLanguage, e = a.oPreviousSearch, f = a.aanFeatures, g = '<input type="search" class="' + b.sFilterInput + '"/>', j = d.sSearch, j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g, b = h("<div/>",
        {id: !f.f ? c + "_filter" : null, "class": b.sFilter}).append(h("<label/>").append(j)), f = function () {
        var b = !this.value ? "" : this.value;
        b != e.sSearch && (ca(a, {
          sSearch: b,
          bRegex: e.bRegex,
          bSmart: e.bSmart,
          bCaseInsensitive: e.bCaseInsensitive
        }), a._iDisplayStart = 0, K(a))
      }, i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", "ssp" === z(a) ? Ma(f, 400) : f).bind("keypress.DT", function (a) {
        if (13 == a.keyCode)return !1
      }).attr("aria-controls", c);
      h(a.nTable).on("search.dt.DT",
        function (b, c) {
          if (a === c)try {
            i[0] !== O.activeElement && i.val(e.sSearch)
          } catch (d) {
          }
        });
      return b[0]
    }

    function ca(a, b, c) {
      var d = a.oPreviousSearch, e = a.aoPreSearchCols, f = function (a) {
        d.sSearch = a.sSearch;
        d.bRegex = a.bRegex;
        d.bSmart = a.bSmart;
        d.bCaseInsensitive = a.bCaseInsensitive
      };
      Da(a);
      if ("ssp" != z(a)) {
        ub(a, b.sSearch, c, b.bEscapeRegex !== l ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
        f(b);
        for (b = 0; b < e.length; b++)vb(a, e[b].sSearch, b, e[b].bEscapeRegex !== l ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
        wb(a)
      } else f(b);
      a.bFiltered = !0;
      u(a, null, "search", [a])
    }

    function wb(a) {
      for (var b = p.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
        for (var j = [], i = 0, h = c.length; i < h; i++)e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
        c.length = 0;
        c.push.apply(c, j)
      }
    }

    function vb(a, b, c, d, e, f) {
      if ("" !== b)for (var g = a.aiDisplay, d = Na(b, d, e, f), e = g.length - 1; 0 <= e; e--)b = a.aoData[g[e]]._aFilterData[c], d.test(b) || g.splice(e, 1)
    }

    function ub(a, b, c, d, e, f) {
      var d = Na(b, d, e, f), e = a.oPreviousSearch.sSearch, f = a.aiDisplayMaster,
        g;
      0 !== p.ext.search.length && (c = !0);
      g = xb(a);
      if (0 >= b.length)a.aiDisplay = f.slice(); else {
        if (g || c || e.length > b.length || 0 !== b.indexOf(e) || a.bSorted)a.aiDisplay = f.slice();
        b = a.aiDisplay;
        for (c = b.length - 1; 0 <= c; c--)d.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1)
      }
    }

    function Na(a, b, c, d) {
      a = b ? a : Oa(a);
      c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || "", function (a) {
          return '"' === a.charAt(0) ? a.match(/^"(.*)"$/)[1] : a
        }).join(")(?=.*?") + ").*$");
      return RegExp(a, d ? "i" : "")
    }

    function Oa(a) {
      return a.replace(Vb, "\\$1")
    }

    function xb(a) {
      var b =
        a.aoColumns, c, d, e, f, g, j, i, h, m = p.ext.type.search;
      c = !1;
      d = 0;
      for (f = a.aoData.length; d < f; d++)if (h = a.aoData[d], !h._aFilterData) {
        j = [];
        e = 0;
        for (g = b.length; e < g; e++)c = b[e], c.bSearchable ? (i = A(a, d, e, "filter"), m[c.sType] && (i = m[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (qa.innerHTML = i, i = Wb ? qa.textContent : qa.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
        h._aFilterData = j;
        h._sFilterRow = j.join("  ");
        c = !0
      }
      return c
    }

    function yb(a) {
      return {
        search: a.sSearch,
        smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive
      }
    }

    function zb(a) {
      return {sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive}
    }

    function qb(a) {
      var b = a.sTableId, c = a.aanFeatures.i, d = h("<div/>", {
        "class": a.oClasses.sInfo,
        id: !c ? b + "_info" : null
      });
      c || (a.aoDrawCallback.push({
        fn: Ab,
        sName: "information"
      }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info"));
      return d[0]
    }

    function Ab(a) {
      var b = a.aanFeatures.i;
      if (0 !== b.length) {
        var c =
          a.oLanguage, d = a._iDisplayStart + 1, e = a.fnDisplayEnd(), f = a.fnRecordsTotal(), g = a.fnRecordsDisplay(), j = g ? c.sInfo : c.sInfoEmpty;
        g !== f && (j += " " + c.sInfoFiltered);
        j += c.sInfoPostFix;
        j = Bb(a, j);
        c = c.fnInfoCallback;
        null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));
        h(b).html(j)
      }
    }

    function Bb(a, b) {
      var c = a.fnFormatNumber, d = a._iDisplayStart + 1, e = a._iDisplayLength, f = a.fnRecordsDisplay(), g = -1 === e;
      return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g,
        c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
    }

    function ra(a) {
      var b, c, d = a.iInitDisplayStart, e = a.aoColumns, f;
      c = a.oFeatures;
      if (a.bInitialised) {
        lb(a);
        ib(a);
        ba(a, a.aoHeader);
        ba(a, a.aoFooter);
        B(a, !0);
        c.bAutoWidth && Ca(a);
        b = 0;
        for (c = e.length; b < c; b++)f = e[b], f.sWidth && (f.nTh.style.width = s(f.sWidth));
        L(a);
        e = z(a);
        "ssp" != e && ("ajax" == e ? na(a, [], function (c) {
          var f = oa(a, c);
          for (b = 0; b < f.length; b++)I(a, f[b]);
          a.iInitDisplayStart = d;
          L(a);
          B(a, !1);
          pa(a, c)
        }, a) :
          (B(a, !1), pa(a)))
      } else setTimeout(function () {
        ra(a)
      }, 200)
    }

    function pa(a, b) {
      a._bInitComplete = !0;
      b && V(a);
      u(a, "aoInitComplete", "init", [a, b])
    }

    function Pa(a, b) {
      var c = parseInt(b, 10);
      a._iDisplayLength = c;
      Qa(a);
      u(a, null, "length", [a, c])
    }

    function mb(a) {
      for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", {
        name: c + "_length",
        "aria-controls": c,
        "class": b.sLengthSelect
      }), g = 0, j = f.length; g < j; g++)e[0][g] = new Option(d[g], f[g]);
      var i = h("<div><label/></div>").addClass(b.sLength);
      a.aanFeatures.l || (i[0].id = c + "_length");
      i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
      h("select", i).val(a._iDisplayLength).bind("change.DT", function () {
        Pa(a, h(this).val());
        K(a)
      });
      h(a.nTable).bind("length.dt.DT", function (b, c, d) {
        a === c && h("select", i).val(d)
      });
      return i[0]
    }

    function rb(a) {
      var b = a.sPaginationType, c = p.ext.pager[b], d = "function" === typeof c, e = function (a) {
        K(a)
      }, b = h("<div/>").addClass(a.oClasses.sPaging + b)[0], f = a.aanFeatures;
      d || c.fnInit(a, b, e);
      f.p || (b.id = a.sTableId +
        "_paginate", a.aoDrawCallback.push({
        fn: function (a) {
          if (d) {
            var b = a._iDisplayStart, i = a._iDisplayLength, h = a.fnRecordsDisplay(), m = -1 === i, b = m ? 0 : Math.ceil(b / i), i = m ? 1 : Math.ceil(h / i), h = c(b, i), o, m = 0;
            for (o = f.p.length; m < o; m++)La(a, "pageButton")(a, f.p[m], m, h, b, i)
          } else c.fnUpdate(a, e)
        }, sName: "pagination"
      }));
      return b
    }

    function Ra(a, b, c) {
      var d = a._iDisplayStart, e = a._iDisplayLength, f = a.fnRecordsDisplay();
      0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" ==
      b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : P(a, 0, "Unknown paging action: " + b, 5);
      b = a._iDisplayStart !== d;
      a._iDisplayStart = d;
      b && (u(a, null, "page", [a]), c && K(a));
      return b
    }

    function ob(a) {
      return h("<div/>", {
        id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
        "class": a.oClasses.sProcessing
      }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
    }

    function B(a, b) {
      a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
      u(a, null, "processing", [a, b])
    }

    function pb(a) {
      var b = h(a.nTable);
      b.attr("role",
        "grid");
      var c = a.oScroll;
      if ("" === c.sX && "" === c.sY)return a.nTable;
      var d = c.sX, e = c.sY, f = a.oClasses, g = b.children("caption"), j = g.length ? g[0]._captionSide : null, i = h(b[0].cloneNode(!1)), n = h(b[0].cloneNode(!1)), m = b.children("tfoot");
      c.sX && "100%" === b.attr("width") && b.removeAttr("width");
      m.length || (m = null);
      c = h("<div/>", {"class": f.sScrollWrapper}).append(h("<div/>", {"class": f.sScrollHead}).css({
        overflow: "hidden",
        position: "relative",
        border: 0,
        width: d ? !d ? null : s(d) : "100%"
      }).append(h("<div/>", {"class": f.sScrollHeadInner}).css({
        "box-sizing": "content-box",
        width: c.sXInner || "100%"
      }).append(i.removeAttr("id").css("margin-left", 0).append(b.children("thead")))).append("top" === j ? g : null)).append(h("<div/>", {"class": f.sScrollBody}).css({
        overflow: "auto",
        height: !e ? null : s(e),
        width: !d ? null : s(d)
      }).append(b));
      m && c.append(h("<div/>", {"class": f.sScrollFoot}).css({
        overflow: "hidden",
        border: 0,
        width: d ? !d ? null : s(d) : "100%"
      }).append(h("<div/>", {"class": f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left", 0).append(b.children("tfoot")))).append("bottom" === j ? g :
        null));
      var b = c.children(), o = b[0], f = b[1], k = m ? b[2] : null;
      d && h(f).scroll(function () {
        var a = this.scrollLeft;
        o.scrollLeft = a;
        m && (k.scrollLeft = a)
      });
      a.nScrollHead = o;
      a.nScrollBody = f;
      a.nScrollFoot = k;
      a.aoDrawCallback.push({fn: W, sName: "scrolling"});
      return c[0]
    }

    function W(a) {
      var b = a.oScroll, c = b.sX, d = b.sXInner, e = b.sY, f = b.iBarWidth, g = h(a.nScrollHead), j = g[0].style, i = g.children("div"), n = i[0].style, m = i.children("table"), i = a.nScrollBody, o = h(i), k = i.style, l = h(a.nScrollFoot).children("div"), p = l.children("table"), r = h(a.nTHead),
        q = h(a.nTable), da = q[0], M = da.style, J = a.nTFoot ? h(a.nTFoot) : null, u = a.oBrowser, v = u.bScrollOversize, y, t, x, w, z, A = [], B = [], C = [], D, E = function (a) {
          a = a.style;
          a.paddingTop = "0";
          a.paddingBottom = "0";
          a.borderTopWidth = "0";
          a.borderBottomWidth = "0";
          a.height = 0
        };
      q.children("thead, tfoot").remove();
      z = r.clone().prependTo(q);
      y = r.find("tr");
      x = z.find("tr");
      z.find("th, td").removeAttr("tabindex");
      J && (w = J.clone().prependTo(q), t = J.find("tr"), w = w.find("tr"));
      c || (k.width = "100%", g[0].style.width = "100%");
      h.each(ma(a, z), function (b, c) {
        D =
          ga(a, b);
        c.style.width = a.aoColumns[D].sWidth
      });
      J && F(function (a) {
        a.style.width = ""
      }, w);
      b.bCollapse && "" !== e && (k.height = o[0].offsetHeight + r[0].offsetHeight + "px");
      g = q.outerWidth();
      if ("" === c) {
        if (M.width = "100%", v && (q.find("tbody").height() > i.offsetHeight || "scroll" == o.css("overflow-y")))M.width = s(q.outerWidth() - f)
      } else"" !== d ? M.width = s(d) : g == o.width() && o.height() < q.height() ? (M.width = s(g - f), q.outerWidth() > g - f && (M.width = s(g))) : M.width = s(g);
      g = q.outerWidth();
      F(E, x);
      F(function (a) {
          C.push(a.innerHTML);
          A.push(s(h(a).css("width")))
        },
        x);
      F(function (a, b) {
        a.style.width = A[b]
      }, y);
      h(x).height(0);
      J && (F(E, w), F(function (a) {
        B.push(s(h(a).css("width")))
      }, w), F(function (a, b) {
        a.style.width = B[b]
      }, t), h(w).height(0));
      F(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + C[b] + "</div>";
        a.style.width = A[b]
      }, x);
      J && F(function (a, b) {
        a.innerHTML = "";
        a.style.width = B[b]
      }, w);
      if (q.outerWidth() < g) {
        t = i.scrollHeight > i.offsetHeight || "scroll" == o.css("overflow-y") ? g + f : g;
        if (v && (i.scrollHeight > i.offsetHeight || "scroll" == o.css("overflow-y")))M.width =
          s(t - f);
        ("" === c || "" !== d) && P(a, 1, "Possible column misalignment", 6)
      } else t = "100%";
      k.width = s(t);
      j.width = s(t);
      J && (a.nScrollFoot.style.width = s(t));
      !e && v && (k.height = s(da.offsetHeight + f));
      e && b.bCollapse && (k.height = s(e), b = c && da.offsetWidth > i.offsetWidth ? f : 0, da.offsetHeight < i.offsetHeight && (k.height = s(da.offsetHeight + b)));
      b = q.outerWidth();
      m[0].style.width = s(b);
      n.width = s(b);
      m = q.height() > i.clientHeight || "scroll" == o.css("overflow-y");
      u = "padding" + (u.bScrollbarLeft ? "Left" : "Right");
      n[u] = m ? f + "px" : "0px";
      J && (p[0].style.width =
        s(b), l[0].style.width = s(b), l[0].style[u] = m ? f + "px" : "0px");
      o.scroll();
      if ((a.bSorted || a.bFiltered) && !a._drawHold)i.scrollTop = 0
    }

    function F(a, b, c) {
      for (var d = 0, e = 0, f = b.length, g, j; e < f;) {
        g = b[e].firstChild;
        for (j = c ? c[e].firstChild : null; g;)1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
        e++
      }
    }

    function Ca(a) {
      var b = a.nTable, c = a.aoColumns, d = a.oScroll, e = d.sY, f = d.sX, g = d.sXInner, j = c.length, d = X(a, "bVisible"), i = h("th", a.nTHead), n = b.getAttribute("width"), m = b.parentNode, o = !1, k, l;
      for (k = 0; k <
      d.length; k++)l = c[d[k]], null !== l.sWidth && (l.sWidth = Cb(l.sWidthOrig, m), o = !0);
      if (!o && !f && !e && j == Z(a) && j == i.length)for (k = 0; k < j; k++)c[k].sWidth = s(i.eq(k).width()); else {
        j = h(b).clone().empty().css("visibility", "hidden").removeAttr("id").append(h(a.nTHead).clone(!1)).append(h(a.nTFoot).clone(!1)).append(h("<tbody><tr/></tbody>"));
        j.find("tfoot th, tfoot td").css("width", "");
        var p = j.find("tbody tr"), i = ma(a, j.find("thead")[0]);
        for (k = 0; k < d.length; k++)l = c[d[k]], i[k].style.width = null !== l.sWidthOrig && "" !== l.sWidthOrig ?
          s(l.sWidthOrig) : "";
        if (a.aoData.length)for (k = 0; k < d.length; k++)o = d[k], l = c[o], h(Db(a, o)).clone(!1).append(l.sContentPadding).appendTo(p);
        j.appendTo(m);
        f && g ? j.width(g) : f ? (j.css("width", "auto"), j.width() < m.offsetWidth && j.width(m.offsetWidth)) : e ? j.width(m.offsetWidth) : n && j.width(n);
        Eb(a, j[0]);
        if (f) {
          for (k = g = 0; k < d.length; k++)l = c[d[k]], e = h(i[k]).outerWidth(), g += null === l.sWidthOrig ? e : parseInt(l.sWidth, 10) + e - h(i[k]).width();
          j.width(s(g));
          b.style.width = s(g)
        }
        for (k = 0; k < d.length; k++)if (l = c[d[k]], e = h(i[k]).width())l.sWidth =
          s(e);
        b.style.width = s(j.css("width"));
        j.remove()
      }
      n && (b.style.width = s(n));
      if ((n || f) && !a._reszEvt)h(za).bind("resize.DT-" + a.sInstance, Ma(function () {
        V(a)
      })), a._reszEvt = !0
    }

    function Ma(a, b) {
      var c = b || 200, d, e;
      return function () {
        var b = this, g = +new Date, j = arguments;
        d && g < d + c ? (clearTimeout(e), e = setTimeout(function () {
          d = l;
          a.apply(b, j)
        }, c)) : d ? (d = g, a.apply(b, j)) : d = g
      }
    }

    function Cb(a, b) {
      if (!a)return 0;
      var c = h("<div/>").css("width", s(a)).appendTo(b || O.body), d = c[0].offsetWidth;
      c.remove();
      return d
    }

    function Eb(a, b) {
      var c =
        a.oScroll;
      if (c.sX || c.sY)c = !c.sX ? c.iBarWidth : 0, b.style.width = s(h(b).outerWidth() - c)
    }

    function Db(a, b) {
      var c = Fb(a, b);
      if (0 > c)return null;
      var d = a.aoData[c];
      return !d.nTr ? h("<td/>").html(A(a, c, b, "display"))[0] : d.anCells[b]
    }

    function Fb(a, b) {
      for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++)c = A(a, f, b, "display") + "", c = c.replace(Xb, ""), c.length > d && (d = c.length, e = f);
      return e
    }

    function s(a) {
      return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
    }

    function Gb() {
      if (!p.__scrollbarWidth) {
        var a =
          h("<p/>").css({width: "100%", height: 200, padding: 0})[0], b = h("<div/>").css({
          position: "absolute",
          top: 0,
          left: 0,
          width: 200,
          height: 150,
          padding: 0,
          overflow: "hidden",
          visibility: "hidden"
        }).append(a).appendTo("body"), c = a.offsetWidth;
        b.css("overflow", "scroll");
        a = a.offsetWidth;
        c === a && (a = b[0].clientWidth);
        b.remove();
        p.__scrollbarWidth = c - a
      }
      return p.__scrollbarWidth
    }

    function R(a) {
      var b, c, d = [], e = a.aoColumns, f, g, j, i;
      b = a.aaSortingFixed;
      c = h.isPlainObject(b);
      var n = [];
      f = function (a) {
        a.length && !h.isArray(a[0]) ? n.push(a) : n.push.apply(n,
          a)
      };
      h.isArray(b) && f(b);
      c && b.pre && f(b.pre);
      f(a.aaSorting);
      c && b.post && f(b.post);
      for (a = 0; a < n.length; a++) {
        i = n[a][0];
        f = e[i].aDataSort;
        b = 0;
        for (c = f.length; b < c; b++)g = f[b], j = e[g].sType || "string", d.push({
          src: i,
          col: g,
          dir: n[a][1],
          index: n[a][2],
          type: j,
          formatter: p.ext.type.order[j + "-pre"]
        })
      }
      return d
    }

    function kb(a) {
      var b, c, d = [], e = p.ext.type.order, f = a.aoData, g = 0, j, i = a.aiDisplayMaster, h;
      Da(a);
      h = R(a);
      b = 0;
      for (c = h.length; b < c; b++)j = h[b], j.formatter && g++, Hb(a, j.col);
      if ("ssp" != z(a) && 0 !== h.length) {
        b = 0;
        for (c = i.length; b < c; b++)d[i[b]] =
          b;
        g === h.length ? i.sort(function (a, b) {
          var c, e, g, j, i = h.length, l = f[a]._aSortData, p = f[b]._aSortData;
          for (g = 0; g < i; g++)if (j = h[g], c = l[j.col], e = p[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c)return "asc" === j.dir ? c : -c;
          c = d[a];
          e = d[b];
          return c < e ? -1 : c > e ? 1 : 0
        }) : i.sort(function (a, b) {
          var c, g, j, i, l = h.length, p = f[a]._aSortData, r = f[b]._aSortData;
          for (j = 0; j < l; j++)if (i = h[j], c = p[i.col], g = r[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, g), 0 !== c)return c;
          c = d[a];
          g = d[b];
          return c < g ? -1 : c > g ? 1 : 0
        })
      }
      a.bSorted = !0
    }

    function Ib(a) {
      for (var b, c,
             d = a.aoColumns, e = R(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
        c = d[f];
        var j = c.asSorting;
        b = c.sTitle.replace(/<.*?>/g, "");
        var i = c.nTh;
        i.removeAttribute("aria-sort");
        c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
        i.setAttribute("aria-label", b)
      }
    }

    function Sa(a, b, c, d) {
      var e = a.aaSorting, f = a.aoColumns[b].asSorting, g = function (a) {
        var b = a._idx;
        b === l && (b = h.inArray(a[1],
          f));
        return b + 1 >= f.length ? 0 : b + 1
      };
      "number" === typeof e[0] && (e = a.aaSorting = [e]);
      c && a.oFeatures.bSortMulti ? (c = h.inArray(b, C(e, "0")), -1 !== c ? (b = g(e[c]), e[c][1] = f[b], e[c]._idx = b) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
      L(a);
      "function" == typeof d && d(a)
    }

    function Ka(a, b, c, d) {
      var e = a.aoColumns[c];
      Ta(b, {}, function (b) {
        !1 !== e.bSortable && (a.oFeatures.bProcessing ? (B(a, !0), setTimeout(function () {
          Sa(a, c, b.shiftKey,
            d);
          "ssp" !== z(a) && B(a, !1)
        }, 0)) : Sa(a, c, b.shiftKey, d))
      })
    }

    function sa(a) {
      var b = a.aLastSort, c = a.oClasses.sSortColumn, d = R(a), e = a.oFeatures, f, g;
      if (e.bSort && e.bSortClasses) {
        e = 0;
        for (f = b.length; e < f; e++)g = b[e].src, h(C(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
        e = 0;
        for (f = d.length; e < f; e++)g = d[e].src, h(C(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3))
      }
      a.aLastSort = d
    }

    function Hb(a, b) {
      var c = a.aoColumns[b], d = p.ext.order[c.sSortDataType], e;
      d && (e = d.call(a.oInstance, a, b, Y(a, b)));
      for (var f, g = p.ext.type.order[c.sType +
      "-pre"], j = 0, i = a.aoData.length; j < i; j++)if (c = a.aoData[j], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d)f = d ? e[j] : A(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f
    }

    function ta(a) {
      if (a.oFeatures.bStateSave && !a.bDestroying) {
        var b = {
          time: +new Date,
          start: a._iDisplayStart,
          length: a._iDisplayLength,
          order: h.extend(!0, [], a.aaSorting),
          search: yb(a.oPreviousSearch),
          columns: h.map(a.aoColumns, function (b, d) {
            return {visible: b.bVisible, search: yb(a.aoPreSearchCols[d])}
          })
        };
        u(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
        a.oSavedState =
          b;
        a.fnStateSaveCallback.call(a.oInstance, a, b)
      }
    }

    function Jb(a) {
      var b, c, d = a.aoColumns;
      if (a.oFeatures.bStateSave) {
        var e = a.fnStateLoadCallback.call(a.oInstance, a);
        if (e && e.time && (b = u(a, "aoStateLoadParams", "stateLoadParams", [a, e]), -1 === h.inArray(!1, b) && (b = a.iStateDuration, !(0 < b && e.time < +new Date - 1E3 * b) && d.length === e.columns.length))) {
          a.oLoadedState = h.extend(!0, {}, e);
          a._iDisplayStart = e.start;
          a.iInitDisplayStart = e.start;
          a._iDisplayLength = e.length;
          a.aaSorting = [];
          h.each(e.order, function (b, c) {
            a.aaSorting.push(c[0] >=
            d.length ? [0, c[1]] : c)
          });
          h.extend(a.oPreviousSearch, zb(e.search));
          b = 0;
          for (c = e.columns.length; b < c; b++) {
            var f = e.columns[b];
            d[b].bVisible = f.visible;
            h.extend(a.aoPreSearchCols[b], zb(f.search))
          }
          u(a, "aoStateLoaded", "stateLoaded", [a, e])
        }
      }
    }

    function ua(a) {
      var b = p.settings, a = h.inArray(a, C(b, "nTable"));
      return -1 !== a ? b[a] : null
    }

    function P(a, b, c, d) {
      c = "DataTables warning: " + (null !== a ? "table id=" + a.sTableId + " - " : "") + c;
      d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
      if (b)za.console &&
      console.log && console.log(c); else if (a = p.ext, "alert" == (a.sErrMode || a.errMode))alert(c); else throw Error(c);
    }

    function D(a, b, c, d) {
      h.isArray(c) ? h.each(c, function (c, d) {
        h.isArray(d) ? D(a, b, d[0], d[1]) : D(a, b, d)
      }) : (d === l && (d = c), b[c] !== l && (a[d] = b[c]))
    }

    function Kb(a, b, c) {
      var d, e;
      for (e in b)b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d);
      return a
    }

    function Ta(a, b, c) {
      h(a).bind("click.DT", b, function (b) {
        a.blur();
        c(b)
      }).bind("keypress.DT", b, function (a) {
        13 === a.which && (a.preventDefault(), c(a))
      }).bind("selectstart.DT", function () {
        return !1
      })
    }

    function x(a, b, c, d) {
      c && a[b].push({fn: c, sName: d})
    }

    function u(a, b, c, d) {
      var e = [];
      b && (e = h.map(a[b].slice().reverse(), function (b) {
        return b.fn.apply(a.oInstance, d)
      }));
      null !== c && h(a.nTable).trigger(c + ".dt", d);
      return e
    }

    function Qa(a) {
      var b = a._iDisplayStart, c = a.fnDisplayEnd(), d = a._iDisplayLength;
      c === a.fnRecordsDisplay() && (b = c - d);
      if (-1 === d || 0 > b)b = 0;
      a._iDisplayStart = b
    }

    function La(a, b) {
      var c =
        a.renderer, d = p.ext.renderer[b];
      return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._
    }

    function z(a) {
      return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
    }

    function Ua(a, b) {
      var c = [], c = Lb.numbers_length, d = Math.floor(c / 2);
      b <= c ? c = S(0, b) : a <= d ? (c = S(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = S(b - (c - 2), b) : (c = S(a - 1, a + 2), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
      c.DT_el = "span";
      return c
    }

    function cb(a) {
      h.each({
        num: function (b) {
          return va(b,
            a)
        }, "num-fmt": function (b) {
          return va(b, a, Va)
        }, "html-num": function (b) {
          return va(b, a, wa)
        }, "html-num-fmt": function (b) {
          return va(b, a, wa, Va)
        }
      }, function (b, c) {
        t.type.order[b + a + "-pre"] = c
      })
    }

    function Mb(a) {
      return function () {
        var b = [ua(this[p.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
        return p.ext.internal[a].apply(this, b)
      }
    }

    var p, t, q, r, v, Wa = {}, Nb = /[\r\n]/g, wa = /<.*?>/g, Yb = /^[\w\+\-]/, Zb = /[\w\+\-]$/, Vb = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), Va = /[',$\u00a3\u20ac\u00a5%\u2009\u202F]/g,
      H = function (a) {
        return !a || !0 === a || "-" === a ? !0 : !1
      }, Ob = function (a) {
        var b = parseInt(a, 10);
        return !isNaN(b) && isFinite(a) ? b : null
      }, Pb = function (a, b) {
        Wa[b] || (Wa[b] = RegExp(Oa(b), "g"));
        return "string" === typeof a ? a.replace(/\./g, "").replace(Wa[b], ".") : a
      }, Xa = function (a, b, c) {
        var d = "string" === typeof a;
        b && d && (a = Pb(a, b));
        c && d && (a = a.replace(Va, ""));
        return H(a) || !isNaN(parseFloat(a)) && isFinite(a)
      }, Qb = function (a, b, c) {
        return H(a) ? !0 : !(H(a) || "string" === typeof a) ? null : Xa(a.replace(wa, ""), b, c) ? !0 : null
      }, C = function (a, b, c) {
        var d =
          [], e = 0, f = a.length;
        if (c !== l)for (; e < f; e++)a[e] && a[e][b] && d.push(a[e][b][c]); else for (; e < f; e++)a[e] && d.push(a[e][b]);
        return d
      }, xa = function (a, b, c, d) {
        var e = [], f = 0, g = b.length;
        if (d !== l)for (; f < g; f++)e.push(a[b[f]][c][d]); else for (; f < g; f++)e.push(a[b[f]][c]);
        return e
      }, S = function (a, b) {
        var c = [], d;
        b === l ? (b = 0, d = a) : (d = b, b = a);
        for (var e = b; e < d; e++)c.push(e);
        return c
      }, Ja = function (a) {
        var b = [], c, d, e = a.length, f, g = 0;
        d = 0;
        a:for (; d < e; d++) {
          c = a[d];
          for (f = 0; f < g; f++)if (b[f] === c)continue a;
          b.push(c);
          g++
        }
        return b
      }, w = function (a,
                       b, c) {
        a[b] !== l && (a[c] = a[b])
      }, $ = /\[.*?\]$/, Q = /\(\)$/, qa = h("<div>")[0], Wb = qa.textContent !== l, Xb = /<.*?>/g;
    p = function (a) {
      this.$ = function (a, b) {
        return this.api(!0).$(a, b)
      };
      this._ = function (a, b) {
        return this.api(!0).rows(a, b).data()
      };
      this.api = function (a) {
        return a ? new q(ua(this[t.iApiIndex])) : new q(this)
      };
      this.fnAddData = function (a, b) {
        var c = this.api(!0), d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
        (b === l || b) && c.draw();
        return d.flatten().toArray()
      };
      this.fnAdjustColumnSizing =
        function (a) {
          var b = this.api(!0).columns.adjust(), c = b.settings()[0], d = c.oScroll;
          a === l || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && W(c)
        };
      this.fnClearTable = function (a) {
        var b = this.api(!0).clear();
        (a === l || a) && b.draw()
      };
      this.fnClose = function (a) {
        this.api(!0).row(a).child.hide()
      };
      this.fnDeleteRow = function (a, b, c) {
        var d = this.api(!0), a = d.rows(a), e = a.settings()[0], h = e.aoData[a[0][0]];
        a.remove();
        b && b.call(this, e, h);
        (c === l || c) && d.draw();
        return h
      };
      this.fnDestroy = function (a) {
        this.api(!0).destroy(a)
      };
      this.fnDraw = function (a) {
        this.api(!0).draw(!a)
      };
      this.fnFilter = function (a, b, c, d, e, h) {
        e = this.api(!0);
        null === b || b === l ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h);
        e.draw()
      };
      this.fnGetData = function (a, b) {
        var c = this.api(!0);
        if (a !== l) {
          var d = a.nodeName ? a.nodeName.toLowerCase() : "";
          return b !== l || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null
        }
        return c.data().toArray()
      };
      this.fnGetNodes = function (a) {
        var b = this.api(!0);
        return a !== l ? b.row(a).node() : b.rows().nodes().flatten().toArray()
      };
      this.fnGetPosition = function (a) {
        var b = this.api(!0), c = a.nodeName.toUpperCase();
        return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
      };
      this.fnIsOpen = function (a) {
        return this.api(!0).row(a).child.isShown()
      };
      this.fnOpen = function (a, b, c) {
        return this.api(!0).row(a).child(b, c).show().child()[0]
      };
      this.fnPageChange = function (a, b) {
        var c = this.api(!0).page(a);
        (b === l || b) && c.draw(!1)
      };
      this.fnSetColumnVis = function (a, b, c) {
        a = this.api(!0).column(a).visible(b);
        (c === l || c) && a.columns.adjust().draw()
      };
      this.fnSettings = function () {
        return ua(this[t.iApiIndex])
      };
      this.fnSort = function (a) {
        this.api(!0).order(a).draw()
      };
      this.fnSortListener = function (a, b, c) {
        this.api(!0).order.listener(a, b, c)
      };
      this.fnUpdate = function (a, b, c, d, e) {
        var h = this.api(!0);
        c === l || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
        (e === l || e) && h.columns.adjust();
        (d === l || d) && h.draw();
        return 0
      };
      this.fnVersionCheck = t.fnVersionCheck;
      var b = this, c = a === l, d = this.length;
      c && (a = {});
      this.oApi = this.internal = t.internal;
      for (var e in p.ext.internal)e && (this[e] = Mb(e));
      this.each(function () {
        var e = {}, g = 1 < d ? Kb(e, a, !0) :
          a, j = 0, i, n = this.getAttribute("id"), e = !1, m = p.defaults;
        if ("table" != this.nodeName.toLowerCase())P(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2); else {
          db(m);
          eb(m.column);
          G(m, m, !0);
          G(m.column, m.column, !0);
          G(m, g);
          var o = p.settings, j = 0;
          for (i = o.length; j < i; j++) {
            if (o[j].nTable == this) {
              i = g.bRetrieve !== l ? g.bRetrieve : m.bRetrieve;
              if (c || i)return o[j].oInstance;
              if (g.bDestroy !== l ? g.bDestroy : m.bDestroy) {
                o[j].oInstance.fnDestroy();
                break
              } else {
                P(o[j], 0, "Cannot reinitialise DataTable", 3);
                return
              }
            }
            if (o[j].sTableId ==
              this.id) {
              o.splice(j, 1);
              break
            }
          }
          if (null === n || "" === n)this.id = n = "DataTables_Table_" + p.ext._unique++;
          var k = h.extend(!0, {}, p.models.oSettings, {
            nTable: this,
            oApi: b.internal,
            oInit: g,
            sDestroyWidth: h(this)[0].style.width,
            sInstance: n,
            sTableId: n
          });
          o.push(k);
          k.oInstance = 1 === b.length ? b : h(this).dataTable();
          db(g);
          g.oLanguage && N(g.oLanguage);
          g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
          g = Kb(h.extend(!0, {}, m), g);
          D(k.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
          D(k, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"], ["bJQueryUI", "bJUI"]]);
          D(k.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"],
            ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);
          D(k.oLanguage, g, "fnInfoCallback");
          x(k, "aoDrawCallback", g.fnDrawCallback, "user");
          x(k, "aoServerParams", g.fnServerParams, "user");
          x(k, "aoStateSaveParams", g.fnStateSaveParams, "user");
          x(k, "aoStateLoadParams", g.fnStateLoadParams, "user");
          x(k, "aoStateLoaded", g.fnStateLoaded, "user");
          x(k, "aoRowCallback", g.fnRowCallback, "user");
          x(k, "aoRowCreatedCallback", g.fnCreatedRow, "user");
          x(k, "aoHeaderCallback", g.fnHeaderCallback, "user");
          x(k, "aoFooterCallback", g.fnFooterCallback,
            "user");
          x(k, "aoInitComplete", g.fnInitComplete, "user");
          x(k, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
          n = k.oClasses;
          g.bJQueryUI ? (h.extend(n, p.ext.oJUIClasses, g.oClasses), g.sDom === m.sDom && "lfrtip" === m.sDom && (k.sDom = '<"H"lfr>t<"F"ip>'), k.renderer) ? h.isPlainObject(k.renderer) && !k.renderer.header && (k.renderer.header = "jqueryui") : k.renderer = "jqueryui" : h.extend(n, p.ext.classes, g.oClasses);
          h(this).addClass(n.sTable);
          if ("" !== k.oScroll.sX || "" !== k.oScroll.sY)k.oScroll.iBarWidth = Gb();
          !0 === k.oScroll.sX && (k.oScroll.sX =
            "100%");
          k.iInitDisplayStart === l && (k.iInitDisplayStart = g.iDisplayStart, k._iDisplayStart = g.iDisplayStart);
          null !== g.iDeferLoading && (k.bDeferLoading = !0, j = h.isArray(g.iDeferLoading), k._iRecordsDisplay = j ? g.iDeferLoading[0] : g.iDeferLoading, k._iRecordsTotal = j ? g.iDeferLoading[1] : g.iDeferLoading);
          "" !== g.oLanguage.sUrl ? (k.oLanguage.sUrl = g.oLanguage.sUrl, h.getJSON(k.oLanguage.sUrl, null, function (a) {
            N(a);
            G(m.oLanguage, a);
            h.extend(true, k.oLanguage, g.oLanguage, a);
            ra(k)
          }), e = !0) : h.extend(!0, k.oLanguage, g.oLanguage);
          null === g.asStripeClasses && (k.asStripeClasses = [n.sStripeOdd, n.sStripeEven]);
          var j = k.asStripeClasses, r = h("tbody tr:eq(0)", this);
          -1 !== h.inArray(!0, h.map(j, function (a) {
            return r.hasClass(a)
          })) && (h("tbody tr", this).removeClass(j.join(" ")), k.asDestroyStripes = j.slice());
          var o = [], q, j = this.getElementsByTagName("thead");
          0 !== j.length && (aa(k.aoHeader, j[0]), o = ma(k));
          if (null === g.aoColumns) {
            q = [];
            j = 0;
            for (i = o.length; j < i; j++)q.push(null)
          } else q = g.aoColumns;
          j = 0;
          for (i = q.length; j < i; j++)Aa(k, o ? o[j] : null);
          hb(k, g.aoColumnDefs,
            q, function (a, b) {
              fa(k, a, b)
            });
          if (r.length) {
            var s = function (a, b) {
              return a.getAttribute("data-" + b) ? b : null
            };
            h.each(ia(k, r[0]).cells, function (a, b) {
              var c = k.aoColumns[a];
              if (c.mData === a) {
                var d = s(b, "sort") || s(b, "order"), e = s(b, "filter") || s(b, "search");
                if (d !== null || e !== null) {
                  c.mData = {
                    _: a + ".display",
                    sort: d !== null ? a + ".@data-" + d : l,
                    type: d !== null ? a + ".@data-" + d : l,
                    filter: e !== null ? a + ".@data-" + e : l
                  };
                  fa(k, a)
                }
              }
            })
          }
          var t = k.oFeatures;
          g.bStateSave && (t.bStateSave = !0, Jb(k, g), x(k, "aoDrawCallback", ta, "state_save"));
          if (g.aaSorting ===
            l) {
            o = k.aaSorting;
            j = 0;
            for (i = o.length; j < i; j++)o[j][1] = k.aoColumns[j].asSorting[0]
          }
          sa(k);
          t.bSort && x(k, "aoDrawCallback", function () {
            if (k.bSorted) {
              var a = R(k), b = {};
              h.each(a, function (a, c) {
                b[c.src] = c.dir
              });
              u(k, null, "order", [k, a, b]);
              Ib(k)
            }
          });
          x(k, "aoDrawCallback", function () {
            (k.bSorted || z(k) === "ssp" || t.bDeferRender) && sa(k)
          }, "sc");
          fb(k);
          j = h(this).children("caption").each(function () {
            this._captionSide = h(this).css("caption-side")
          });
          i = h(this).children("thead");
          0 === i.length && (i = h("<thead/>").appendTo(this));
          k.nTHead =
            i[0];
          i = h(this).children("tbody");
          0 === i.length && (i = h("<tbody/>").appendTo(this));
          k.nTBody = i[0];
          i = h(this).children("tfoot");
          if (0 === i.length && 0 < j.length && ("" !== k.oScroll.sX || "" !== k.oScroll.sY))i = h("<tfoot/>").appendTo(this);
          0 === i.length || 0 === i.children().length ? h(this).addClass(n.sNoFooter) : 0 < i.length && (k.nTFoot = i[0], aa(k.aoFooter, k.nTFoot));
          if (g.aaData)for (j = 0; j < g.aaData.length; j++)I(k, g.aaData[j]); else(k.bDeferLoading || "dom" == z(k)) && ha(k, h(k.nTBody).children("tr"));
          k.aiDisplay = k.aiDisplayMaster.slice();
          k.bInitialised = !0;
          !1 === e && ra(k)
        }
      });
      b = null;
      return this
    };
    var Rb = [], y = Array.prototype, $b = function (a) {
      var b, c, d = p.settings, e = h.map(d, function (a) {
        return a.nTable
      });
      if (a) {
        if (a.nTable && a.oApi)return [a];
        if (a.nodeName && "table" === a.nodeName.toLowerCase())return b = h.inArray(a, e), -1 !== b ? [d[b]] : null;
        if (a && "function" === typeof a.settings)return a.settings().toArray();
        "string" === typeof a ? c = h(a) : a instanceof h && (c = a)
      } else return [];
      if (c)return c.map(function () {
        b = h.inArray(this, e);
        return -1 !== b ? d[b] : null
      }).toArray()
    };
    q = function (a, b) {
      if (!this instanceof q)throw"DT API must be constructed as a new object";
      var c = [], d = function (a) {
        (a = $b(a)) && c.push.apply(c, a)
      };
      if (h.isArray(a))for (var e = 0, f = a.length; e < f; e++)d(a[e]); else d(a);
      this.context = Ja(c);
      b && this.push.apply(this, b.toArray ? b.toArray() : b);
      this.selector = {rows: null, cols: null, opts: null};
      q.extend(this, this, Rb)
    };
    p.Api = q;
    q.prototype = {
      concat: y.concat, context: [], each: function (a) {
        for (var b = 0, c = this.length; b < c; b++)a.call(this, this[b], b, this);
        return this
      }, eq: function (a) {
        var b =
          this.context;
        return b.length > a ? new q(b[a], this[a]) : null
      }, filter: function (a) {
        var b = [];
        if (y.filter)b = y.filter.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++)a.call(this, this[c], c, this) && b.push(this[c]);
        return new q(this.context, b)
      }, flatten: function () {
        var a = [];
        return new q(this.context, a.concat.apply(a, this.toArray()))
      }, join: y.join, indexOf: y.indexOf || function (a, b) {
        for (var c = b || 0, d = this.length; c < d; c++)if (this[c] === a)return c;
        return -1
      }, iterator: function (a, b, c) {
        var d = [], e, f, g, h, i, n = this.context,
          m, o, k = this.selector;
        "string" === typeof a && (c = b, b = a, a = !1);
        f = 0;
        for (g = n.length; f < g; f++)if ("table" === b)e = c(n[f], f), e !== l && d.push(e); else if ("columns" === b || "rows" === b)e = c(n[f], this[f], f), e !== l && d.push(e); else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
          o = this[f];
          "column-rows" === b && (m = Ya(n[f], k.opts));
          h = 0;
          for (i = o.length; h < i; h++)e = o[h], e = "cell" === b ? c(n[f], e.row, e.column, f, h) : c(n[f], e, f, h, m), e !== l && d.push(e)
        }
        return d.length ? (a = new q(n, a ? d.concat.apply([], d) : d), b = a.selector, b.rows = k.rows, b.cols =
          k.cols, b.opts = k.opts, a) : this
      }, lastIndexOf: y.lastIndexOf || function (a, b) {
        return this.indexOf.apply(this.toArray.reverse(), arguments)
      }, length: 0, map: function (a) {
        var b = [];
        if (y.map)b = y.map.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++)b.push(a.call(this, this[c], c));
        return new q(this.context, b)
      }, pluck: function (a) {
        return this.map(function (b) {
          return b[a]
        })
      }, pop: y.pop, push: y.push, reduce: y.reduce || function (a, b) {
        return gb(this, a, b, 0, this.length, 1)
      }, reduceRight: y.reduceRight || function (a, b) {
        return gb(this,
          a, b, this.length - 1, -1, -1)
      }, reverse: y.reverse, selector: null, shift: y.shift, sort: y.sort, splice: y.splice, toArray: function () {
        return y.slice.call(this)
      }, to$: function () {
        return h(this)
      }, toJQuery: function () {
        return h(this)
      }, unique: function () {
        return new q(this.context, Ja(this))
      }, unshift: y.unshift
    };
    q.extend = function (a, b, c) {
      if (b && (b instanceof q || b.__dt_wrapper)) {
        var d, e, f, g = function (a, b, c) {
          return function () {
            var d = b.apply(a, arguments);
            q.extend(d, d, c.methodExt);
            return d
          }
        };
        d = 0;
        for (e = c.length; d < e; d++)f = c[d], b[f.name] =
          "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, q.extend(a, b[f.name], f.propExt)
      }
    };
    q.register = r = function (a, b) {
      if (h.isArray(a))for (var c = 0, d = a.length; c < d; c++)q.register(a[c], b); else for (var e = a.split("."), f = Rb, g, j, c = 0, d = e.length; c < d; c++) {
        g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
        var i;
        a:{
          i = 0;
          for (var n = f.length; i < n; i++)if (f[i].name === g) {
            i = f[i];
            break a
          }
          i = null
        }
        i || (i = {name: g, val: {}, methodExt: [], propExt: []}, f.push(i));
        c === d - 1 ? i.val = b : f = j ? i.methodExt :
          i.propExt
      }
    };
    q.registerPlural = v = function (a, b, c) {
      q.register(a, c);
      q.register(b, function () {
        var a = c.apply(this, arguments);
        return a === this ? this : a instanceof q ? a.length ? h.isArray(a[0]) ? new q(a.context, a[0]) : a[0] : l : a
      })
    };
    r("tables()", function (a) {
      var b;
      if (a) {
        b = q;
        var c = this.context;
        if ("number" === typeof a)a = [c[a]]; else var d = h.map(c, function (a) {
          return a.nTable
        }), a = h(d).filter(a).map(function () {
          var a = h.inArray(this, d);
          return c[a]
        }).toArray();
        b = new b(a)
      } else b = this;
      return b
    });
    r("table()", function (a) {
      var a = this.tables(a),
        b = a.context;
      return b.length ? new q(b[0]) : a
    });
    v("tables().nodes()", "table().node()", function () {
      return this.iterator("table", function (a) {
        return a.nTable
      })
    });
    v("tables().body()", "table().body()", function () {
      return this.iterator("table", function (a) {
        return a.nTBody
      })
    });
    v("tables().header()", "table().header()", function () {
      return this.iterator("table", function (a) {
        return a.nTHead
      })
    });
    v("tables().footer()", "table().footer()", function () {
      return this.iterator("table", function (a) {
        return a.nTFoot
      })
    });
    v("tables().containers()",
      "table().container()", function () {
        return this.iterator("table", function (a) {
          return a.nTableWrapper
        })
      });
    r("draw()", function (a) {
      return this.iterator("table", function (b) {
        L(b, !1 === a)
      })
    });
    r("page()", function (a) {
      return a === l ? this.page.info().page : this.iterator("table", function (b) {
        Ra(b, a)
      })
    });
    r("page.info()", function () {
      if (0 === this.context.length)return l;
      var a = this.context[0], b = a._iDisplayStart, c = a._iDisplayLength, d = a.fnRecordsDisplay(), e = -1 === c;
      return {
        page: e ? 0 : Math.floor(b / c), pages: e ? 1 : Math.ceil(d / c), start: b,
        end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d
      }
    });
    r("page.len()", function (a) {
      return a === l ? 0 !== this.context.length ? this.context[0]._iDisplayLength : l : this.iterator("table", function (b) {
        Pa(b, a)
      })
    });
    var Sb = function (a, b, c) {
      "ssp" == z(a) ? L(a, b) : (B(a, !0), na(a, [], function (c) {
        ja(a);
        for (var c = oa(a, c), d = 0, g = c.length; d < g; d++)I(a, c[d]);
        L(a, b);
        B(a, !1)
      }));
      if (c) {
        var d = new q(a);
        d.one("draw", function () {
          c(d.ajax.json())
        })
      }
    };
    r("ajax.json()", function () {
      var a = this.context;
      if (0 < a.length)return a[0].json
    });
    r("ajax.params()", function () {
      var a = this.context;
      if (0 < a.length)return a[0].oAjaxData
    });
    r("ajax.reload()", function (a, b) {
      return this.iterator("table", function (c) {
        Sb(c, !1 === b, a)
      })
    });
    r("ajax.url()", function (a) {
      var b = this.context;
      if (a === l) {
        if (0 === b.length)return l;
        b = b[0];
        return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
      }
      return this.iterator("table", function (b) {
        h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
      })
    });
    r("ajax.url().load()", function (a, b) {
      return this.iterator("table", function (c) {
        Sb(c,
          !1 === b, a)
      })
    });
    var Za = function (a, b) {
      var c = [], d, e, f, g, j, i;
      if (!a || "string" === typeof a || a.length === l)a = [a];
      f = 0;
      for (g = a.length; f < g; f++) {
        e = a[f] && a[f].split ? a[f].split(",") : [a[f]];
        j = 0;
        for (i = e.length; j < i; j++)(d = b("string" === typeof e[j] ? h.trim(e[j]) : e[j])) && d.length && c.push.apply(c, d)
      }
      return c
    }, $a = function (a) {
      a || (a = {});
      a.filter && !a.search && (a.search = a.filter);
      return {search: a.search || "none", order: a.order || "current", page: a.page || "all"}
    }, ab = function (a) {
      for (var b = 0, c = a.length; b < c; b++)if (0 < a[b].length)return a[0] =
        a[b], a.length = 1, a.context = [a.context[b]], a;
      a.length = 0;
      return a
    }, Ya = function (a, b) {
      var c, d, e, f = [], g = a.aiDisplay;
      c = a.aiDisplayMaster;
      var j = b.search;
      d = b.order;
      e = b.page;
      if ("ssp" == z(a))return "removed" === j ? [] : S(0, c.length);
      if ("current" == e) {
        c = a._iDisplayStart;
        for (d = a.fnDisplayEnd(); c < d; c++)f.push(g[c])
      } else if ("current" == d || "applied" == d)f = "none" == j ? c.slice() : "applied" == j ? g.slice() : h.map(c, function (a) {
        return -1 === h.inArray(a, g) ? a : null
      }); else if ("index" == d || "original" == d) {
        c = 0;
        for (d = a.aoData.length; c < d; c++)"none" ==
        j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c))
      }
      return f
    };
    r("rows()", function (a, b) {
      a === l ? a = "" : h.isPlainObject(a) && (b = a, a = "");
      var b = $a(b), c = this.iterator("table", function (c) {
        var e = b;
        return Za(a, function (a) {
          var b = Ob(a);
          if (b !== null && !e)return [b];
          var j = Ya(c, e);
          if (b !== null && h.inArray(b, j) !== -1)return [b];
          if (!a)return j;
          for (var b = [], i = 0, n = j.length; i < n; i++)b.push(c.aoData[j[i]].nTr);
          return a.nodeName && h.inArray(a, b) !== -1 ? [a._DT_RowIndex] : h(b).filter(a).map(function () {
            return this._DT_RowIndex
          }).toArray()
        })
      });
      c.selector.rows = a;
      c.selector.opts = b;
      return c
    });
    r("rows().nodes()", function () {
      return this.iterator("row", function (a, b) {
        return a.aoData[b].nTr || l
      })
    });
    r("rows().data()", function () {
      return this.iterator(!0, "rows", function (a, b) {
        return xa(a.aoData, b, "_aData")
      })
    });
    v("rows().cache()", "row().cache()", function (a) {
      return this.iterator("row", function (b, c) {
        var d = b.aoData[c];
        return "search" === a ? d._aFilterData : d._aSortData
      })
    });
    v("rows().invalidate()", "row().invalidate()", function (a) {
      return this.iterator("row", function (b,
                                            c) {
        la(b, c, a)
      })
    });
    v("rows().indexes()", "row().index()", function () {
      return this.iterator("row", function (a, b) {
        return b
      })
    });
    v("rows().remove()", "row().remove()", function () {
      var a = this;
      return this.iterator("row", function (b, c, d) {
        var e = b.aoData;
        e.splice(c, 1);
        for (var f = 0, g = e.length; f < g; f++)null !== e[f].nTr && (e[f].nTr._DT_RowIndex = f);
        h.inArray(c, b.aiDisplay);
        ka(b.aiDisplayMaster, c);
        ka(b.aiDisplay, c);
        ka(a[d], c, !1);
        Qa(b)
      })
    });
    r("rows.add()", function (a) {
      var b = this.iterator("table", function (b) {
        var c, f, g, h = [];
        f = 0;
        for (g = a.length; f < g; f++)c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(ha(b, c)[0]) : h.push(I(b, c));
        return h
      }), c = this.rows(-1);
      c.pop();
      c.push.apply(c, b.toArray());
      return c
    });
    r("row()", function (a, b) {
      return ab(this.rows(a, b))
    });
    r("row().data()", function (a) {
      var b = this.context;
      if (a === l)return b.length && this.length ? b[0].aoData[this[0]]._aData : l;
      b[0].aoData[this[0]]._aData = a;
      la(b[0], this[0], "data");
      return this
    });
    r("row().node()", function () {
      var a = this.context;
      return a.length && this.length ? a[0].aoData[this[0]].nTr ||
      null : null
    });
    r("row.add()", function (a) {
      a instanceof h && a.length && (a = a[0]);
      var b = this.iterator("table", function (b) {
        return a.nodeName && "TR" === a.nodeName.toUpperCase() ? ha(b, a)[0] : I(b, a)
      });
      return this.row(b[0])
    });
    var bb = function (a) {
      var b = a.context;
      b.length && a.length && (a = b[0].aoData[a[0]], a._details && (a._details.remove(), a._detailsShow = l, a._details = l))
    }, Tb = function (a, b) {
      var c = a.context;
      if (c.length && a.length) {
        var d = c[0].aoData[a[0]];
        if (d._details) {
          (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach();
          var e = c[0], f = new q(e), g = e.aoData;
          f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
          0 < C(g, "_details").length && (f.on("draw.dt.DT_details", function (a, b) {
            e === b && f.rows({page: "current"}).eq(0).each(function (a) {
              a = g[a];
              a._detailsShow && a._details.insertAfter(a.nTr)
            })
          }), f.on("column-visibility.dt.DT_details", function (a, b) {
            if (e === b)for (var c, d = Z(b), f = 0, h = g.length; f < h; f++)c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d)
          }), f.on("destroy.dt.DT_details", function (a,
                                                      b) {
            if (e === b)for (var c = 0, d = g.length; c < d; c++)g[c]._details && bb(g[c])
          }))
        }
      }
    };
    r("row().child()", function (a, b) {
      var c = this.context;
      if (a === l)return c.length && this.length ? c[0].aoData[this[0]]._details : l;
      if (!0 === a)this.child.show(); else if (!1 === a)bb(this); else if (c.length && this.length) {
        var d = c[0], c = c[0].aoData[this[0]], e = [], f = function (a, b) {
          if (a.nodeName && "tr" === a.nodeName.toLowerCase())e.push(a); else {
            var c = h("<tr><td/></tr>").addClass(b);
            h("td", c).addClass(b).html(a)[0].colSpan = Z(d);
            e.push(c[0])
          }
        };
        if (h.isArray(a) ||
          a instanceof h)for (var g = 0, j = a.length; g < j; g++)f(a[g], b); else f(a, b);
        c._details && c._details.remove();
        c._details = h(e);
        c._detailsShow && c._details.insertAfter(c.nTr)
      }
      return this
    });
    r(["row().child.show()", "row().child().show()"], function () {
      Tb(this, !0);
      return this
    });
    r(["row().child.hide()", "row().child().hide()"], function () {
      Tb(this, !1);
      return this
    });
    r(["row().child.remove()", "row().child().remove()"], function () {
      bb(this);
      return this
    });
    r("row().child.isShown()", function () {
      var a = this.context;
      return a.length &&
      this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
    });
    var ac = /^(.+):(name|visIdx|visible)$/;
    r("columns()", function (a, b) {
      a === l ? a = "" : h.isPlainObject(a) && (b = a, a = "");
      var b = $a(b), c = this.iterator("table", function (b) {
        var c = a, f = b.aoColumns, g = C(f, "sName"), j = C(f, "nTh");
        return Za(c, function (a) {
          var c = Ob(a);
          if (a === "")return S(f.length);
          if (c !== null)return [c >= 0 ? c : f.length + c];
          var e = typeof a === "string" ? a.match(ac) : "";
          if (e)switch (e[2]) {
            case "visIdx":
            case "visible":
              a = parseInt(e[1], 10);
              if (a < 0) {
                c = h.map(f, function (a,
                                       b) {
                  return a.bVisible ? b : null
                });
                return [c[c.length + a]]
              }
              return [ga(b, a)];
            case "name":
              return h.map(g, function (a, b) {
                return a === e[1] ? b : null
              })
          } else return h(j).filter(a).map(function () {
            return h.inArray(this, j)
          }).toArray()
        })
      });
      c.selector.cols = a;
      c.selector.opts = b;
      return c
    });
    v("columns().header()", "column().header()", function () {
      return this.iterator("column", function (a, b) {
        return a.aoColumns[b].nTh
      })
    });
    v("columns().footer()", "column().footer()", function () {
      return this.iterator("column", function (a, b) {
        return a.aoColumns[b].nTf
      })
    });
    v("columns().data()", "column().data()", function () {
      return this.iterator("column-rows", function (a, b, c, d, e) {
        for (var c = [], d = 0, f = e.length; d < f; d++)c.push(A(a, e[d], b, ""));
        return c
      })
    });
    v("columns().cache()", "column().cache()", function (a) {
      return this.iterator("column-rows", function (b, c, d, e, f) {
        return xa(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
      })
    });
    v("columns().nodes()", "column().nodes()", function () {
      return this.iterator("column-rows", function (a, b, c, d, e) {
        return xa(a.aoData, e, "anCells", b)
      })
    });
    v("columns().visible()",
      "column().visible()", function (a, b) {
        return this.iterator("column", function (c, d) {
          var e;
          if (a === l)e = c.aoColumns[d].bVisible; else {
            var f = c.aoColumns;
            e = f[d];
            var g = c.aoData, j, i, n;
            if (a === l)e = e.bVisible; else {
              if (e.bVisible !== a) {
                if (a) {
                  var m = h.inArray(!0, C(f, "bVisible"), d + 1);
                  j = 0;
                  for (i = g.length; j < i; j++)n = g[j].nTr, f = g[j].anCells, n && n.insertBefore(f[d], f[m] || null)
                } else h(C(c.aoData, "anCells", d)).detach();
                e.bVisible = a;
                ba(c, c.aoHeader);
                ba(c, c.aoFooter);
                if (b === l || b)V(c), (c.oScroll.sX || c.oScroll.sY) && W(c);
                u(c, null, "column-visibility",
                  [c, d, a]);
                ta(c)
              }
              e = void 0
            }
          }
          return e
        })
      });
    v("columns().indexes()", "column().index()", function (a) {
      return this.iterator("column", function (b, c) {
        return "visible" === a ? Y(b, c) : c
      })
    });
    r("columns.adjust()", function () {
      return this.iterator("table", function (a) {
        V(a)
      })
    });
    r("column.index()", function (a, b) {
      if (0 !== this.context.length) {
        var c = this.context[0];
        if ("fromVisible" === a || "toData" === a)return ga(c, b);
        if ("fromData" === a || "toVisible" === a)return Y(c, b)
      }
    });
    r("column()", function (a, b) {
      return ab(this.columns(a, b))
    });
    r("cells()",
      function (a, b, c) {
        h.isPlainObject(a) && (typeof a.row !== l ? (c = b, b = null) : (c = a, a = null));
        h.isPlainObject(b) && (c = b, b = null);
        if (null === b || b === l)return this.iterator("table", function (b) {
          var d = a, e = $a(c), f = b.aoData, g = Ya(b, e), e = xa(f, g, "anCells"), j = h([].concat.apply([], e)), i, m = b.aoColumns.length, n, p, r, q;
          return Za(d, function (a) {
            if (a === null || a === l) {
              n = [];
              p = 0;
              for (r = g.length; p < r; p++) {
                i = g[p];
                for (q = 0; q < m; q++)n.push({row: i, column: q})
              }
              return n
            }
            return h.isPlainObject(a) ? [a] : j.filter(a).map(function (a, b) {
              i = b.parentNode._DT_RowIndex;
              return {row: i, column: h.inArray(b, f[i].anCells)}
            }).toArray()
          })
        });
        var d = this.columns(b, c), e = this.rows(a, c), f, g, j, i, n, m = this.iterator("table", function (a, b) {
          f = [];
          g = 0;
          for (j = e[b].length; g < j; g++) {
            i = 0;
            for (n = d[b].length; i < n; i++)f.push({row: e[b][g], column: d[b][i]})
          }
          return f
        });
        h.extend(m.selector, {cols: b, rows: a, opts: c});
        return m
      });
    v("cells().nodes()", "cell().node()", function () {
      return this.iterator("cell", function (a, b, c) {
        return a.aoData[b].anCells[c]
      })
    });
    r("cells().data()", function () {
      return this.iterator("cell",
        function (a, b, c) {
          return A(a, b, c)
        })
    });
    v("cells().cache()", "cell().cache()", function (a) {
      a = "search" === a ? "_aFilterData" : "_aSortData";
      return this.iterator("cell", function (b, c, d) {
        return b.aoData[c][a][d]
      })
    });
    v("cells().indexes()", "cell().index()", function () {
      return this.iterator("cell", function (a, b, c) {
        return {row: b, column: c, columnVisible: Y(a, c)}
      })
    });
    r(["cells().invalidate()", "cell().invalidate()"], function (a) {
      var b = this.selector;
      this.rows(b.rows, b.opts).invalidate(a);
      return this
    });
    r("cell()", function (a, b,
                          c) {
      return ab(this.cells(a, b, c))
    });
    r("cell().data()", function (a) {
      var b = this.context, c = this[0];
      if (a === l)return b.length && c.length ? A(b[0], c[0].row, c[0].column) : l;
      Ea(b[0], c[0].row, c[0].column, a);
      la(b[0], c[0].row, "data", c[0].column);
      return this
    });
    r("order()", function (a, b) {
      var c = this.context;
      if (a === l)return 0 !== c.length ? c[0].aaSorting : l;
      "number" === typeof a ? a = [[a, b]] : h.isArray(a[0]) || (a = Array.prototype.slice.call(arguments));
      return this.iterator("table", function (b) {
        b.aaSorting = a.slice()
      })
    });
    r("order.listener()",
      function (a, b, c) {
        return this.iterator("table", function (d) {
          Ka(d, a, b, c)
        })
      });
    r(["columns().order()", "column().order()"], function (a) {
      var b = this;
      return this.iterator("table", function (c, d) {
        var e = [];
        h.each(b[d], function (b, c) {
          e.push([c, a])
        });
        c.aaSorting = e
      })
    });
    r("search()", function (a, b, c, d) {
      var e = this.context;
      return a === l ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : l : this.iterator("table", function (e) {
        e.oFeatures.bFilter && ca(e, h.extend({}, e.oPreviousSearch, {
          sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 :
            c, bCaseInsensitive: null === d ? !0 : d
        }), 1)
      })
    });
    v("columns().search()", "column().search()", function (a, b, c, d) {
      return this.iterator("column", function (e, f) {
        var g = e.aoPreSearchCols;
        if (a === l)return g[f].sSearch;
        e.oFeatures.bFilter && (h.extend(g[f], {
          sSearch: a + "",
          bRegex: null === b ? !1 : b,
          bSmart: null === c ? !0 : c,
          bCaseInsensitive: null === d ? !0 : d
        }), ca(e, e.oPreviousSearch, 1))
      })
    });
    r("state()", function () {
      return this.context.length ? this.context[0].oSavedState : null
    });
    r("state.clear()", function () {
      return this.iterator("table", function (a) {
        a.fnStateSaveCallback.call(a.oInstance,
          a, {})
      })
    });
    r("state.loaded()", function () {
      return this.context.length ? this.context[0].oLoadedState : null
    });
    r("state.save()", function () {
      return this.iterator("table", function (a) {
        ta(a)
      })
    });
    p.versionCheck = p.fnVersionCheck = function (a) {
      for (var b = p.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++)if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d)return c > d;
      return !0
    };
    p.isDataTable = p.fnIsDataTable = function (a) {
      var b = h(a).get(0), c = !1;
      h.each(p.settings, function (a, e) {
        if (e.nTable === b || e.nScrollHead ===
          b || e.nScrollFoot === b)c = !0
      });
      return c
    };
    p.tables = p.fnTables = function (a) {
      return jQuery.map(p.settings, function (b) {
        if (!a || a && h(b.nTable).is(":visible"))return b.nTable
      })
    };
    p.camelToHungarian = G;
    r("$()", function (a, b) {
      var c = this.rows(b).nodes(), c = h(c);
      return h([].concat(c.filter(a).toArray(), c.find(a).toArray()))
    });
    h.each(["on", "one", "off"], function (a, b) {
      r(b + "()", function () {
        var a = Array.prototype.slice.call(arguments);
        a[0].match(/\.dt\b/) || (a[0] += ".dt");
        var d = h(this.tables().nodes());
        d[b].apply(d, a);
        return this
      })
    });
    r("clear()", function () {
      return this.iterator("table", function (a) {
        ja(a)
      })
    });
    r("settings()", function () {
      return new q(this.context, this.context)
    });
    r("data()", function () {
      return this.iterator("table", function (a) {
        return C(a.aoData, "_aData")
      }).flatten()
    });
    r("destroy()", function (a) {
      a = a || !1;
      return this.iterator("table", function (b) {
        var c = b.nTableWrapper.parentNode, d = b.oClasses, e = b.nTable, f = b.nTBody, g = b.nTHead, j = b.nTFoot, i = h(e), f = h(f), l = h(b.nTableWrapper), m = h.map(b.aoData, function (a) {
          return a.nTr
        }), o;
        b.bDestroying = !0;
        u(b, "aoDestroyCallback", "destroy", [b]);
        a || (new q(b)).columns().visible(!0);
        l.unbind(".DT").find(":not(tbody *)").unbind(".DT");
        h(za).unbind(".DT-" + b.sInstance);
        e != g.parentNode && (i.children("thead").detach(), i.append(g));
        j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));
        i.detach();
        l.detach();
        b.aaSorting = [];
        b.aaSortingFixed = [];
        sa(b);
        h(m).removeClass(b.asStripeClasses.join(" "));
        h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
        b.bJUI &&
        (h("th span." + d.sSortIcon + ", td span." + d.sSortIcon, g).detach(), h("th, td", g).each(function () {
          var a = h("div." + d.sSortJUIWrapper, this);
          h(this).append(a.contents());
          a.detach()
        }));
        !a && c && c.insertBefore(e, b.nTableReinsertBefore);
        f.children().detach();
        f.append(m);
        i.css("width", b.sDestroyWidth).removeClass(d.sTable);
        (o = b.asDestroyStripes.length) && f.children().each(function (a) {
          h(this).addClass(b.asDestroyStripes[a % o])
        });
        c = h.inArray(b, p.settings);
        -1 !== c && p.settings.splice(c, 1)
      })
    });
    p.version = "1.10.2";
    p.settings =
      [];
    p.models = {};
    p.models.oSearch = {bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0};
    p.models.oRow = {
      nTr: null,
      anCells: null,
      _aData: [],
      _aSortData: null,
      _aFilterData: null,
      _sFilterRow: null,
      _sRowStripe: "",
      src: null
    };
    p.models.oColumn = {
      idx: null,
      aDataSort: null,
      asSorting: null,
      bSearchable: null,
      bSortable: null,
      bVisible: null,
      _sManualType: null,
      _bAttrSrc: !1,
      fnCreatedCell: null,
      fnGetData: null,
      fnSetData: null,
      mData: null,
      mRender: null,
      nTh: null,
      nTf: null,
      sClass: null,
      sContentPadding: null,
      sDefaultContent: null,
      sName: null,
      sSortDataType: "std",
      sSortingClass: null,
      sSortingClassJUI: null,
      sTitle: null,
      sType: null,
      sWidth: null,
      sWidthOrig: null
    };
    p.defaults = {
      aaData: null,
      aaSorting: [[0, "asc"]],
      aaSortingFixed: [],
      ajax: null,
      aLengthMenu: [10, 25, 50, 100],
      aoColumns: null,
      aoColumnDefs: null,
      aoSearchCols: [],
      asStripeClasses: null,
      bAutoWidth: !0,
      bDeferRender: !1,
      bDestroy: !1,
      bFilter: !0,
      bInfo: !0,
      bJQueryUI: !1,
      bLengthChange: !0,
      bPaginate: !0,
      bProcessing: !1,
      bRetrieve: !1,
      bScrollCollapse: !1,
      bServerSide: !1,
      bSort: !0,
      bSortMulti: !0,
      bSortCellsTop: !1,
      bSortClasses: !0,
      bStateSave: !1,
      fnCreatedRow: null,
      fnDrawCallback: null,
      fnFooterCallback: null,
      fnFormatNumber: function (a) {
        return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
      },
      fnHeaderCallback: null,
      fnInfoCallback: null,
      fnInitComplete: null,
      fnPreDrawCallback: null,
      fnRowCallback: null,
      fnServerData: null,
      fnServerParams: null,
      fnStateLoadCallback: function (a) {
        try {
          return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
        } catch (b) {
        }
      },
      fnStateLoadParams: null,
      fnStateLoaded: null,
      fnStateSaveCallback: function (a, b) {
        try {
          (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
        } catch (c) {
        }
      },
      fnStateSaveParams: null,
      iStateDuration: 7200,
      iDeferLoading: null,
      iDisplayLength: 10,
      iDisplayStart: 0,
      iTabIndex: 0,
      oClasses: {},
      oLanguage: {
        oAria: {
          sSortAscending: ": activate to sort column ascending",
          sSortDescending: ": activate to sort column descending"
        },
        oPaginate: {sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous"},
        sEmptyTable: "No data available in table",
        sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
        sInfoEmpty: "Showing 0 to 0 of 0 entries",
        sInfoFiltered: "(filtered from _MAX_ total entries)",
        sInfoPostFix: "",
        sDecimal: "",
        sThousands: ",",
        sLengthMenu: "Show _MENU_ entries",
        sLoadingRecords: "Loading...",
        sProcessing: "Processing...",
        sSearch: "Search:",
        sSearchPlaceholder: "",
        sUrl: "",
        sZeroRecords: "No matching records found"
      },
      oSearch: h.extend({}, p.models.oSearch),
      sAjaxDataProp: "data",
      sAjaxSource: null,
      sDom: "lfrtip",
      sPaginationType: "simple_numbers",
      sScrollX: "",
      sScrollXInner: "",
      sScrollY: "",
      sServerMethod: "GET",
      renderer: null
    };
    T(p.defaults);
    p.defaults.column = {
      aDataSort: null,
      iDataSort: -1,
      asSorting: ["asc", "desc"],
      bSearchable: !0,
      bSortable: !0,
      bVisible: !0,
      fnCreatedCell: null,
      mData: null,
      mRender: null,
      sCellType: "td",
      sClass: "",
      sContentPadding: "",
      sDefaultContent: null,
      sName: "",
      sSortDataType: "std",
      sTitle: null,
      sType: null,
      sWidth: null
    };
    T(p.defaults.column);
    p.models.oSettings = {
      oFeatures: {
        bAutoWidth: null,
        bDeferRender: null,
        bFilter: null,
        bInfo: null,
        bLengthChange: null,
        bPaginate: null,
        bProcessing: null,
        bServerSide: null,
        bSort: null,
        bSortMulti: null,
        bSortClasses: null,
        bStateSave: null
      },
      oScroll: {bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null},
      oLanguage: {fnInfoCallback: null},
      oBrowser: {bScrollOversize: !1, bScrollbarLeft: !1},
      ajax: null,
      aanFeatures: [],
      aoData: [],
      aiDisplay: [],
      aiDisplayMaster: [],
      aoColumns: [],
      aoHeader: [],
      aoFooter: [],
      oPreviousSearch: {},
      aoPreSearchCols: [],
      aaSorting: null,
      aaSortingFixed: [],
      asStripeClasses: null,
      asDestroyStripes: [],
      sDestroyWidth: 0,
      aoRowCallback: [],
      aoHeaderCallback: [],
      aoFooterCallback: [],
      aoDrawCallback: [],
      aoRowCreatedCallback: [],
      aoPreDrawCallback: [],
      aoInitComplete: [],
      aoStateSaveParams: [],
      aoStateLoadParams: [],
      aoStateLoaded: [],
      sTableId: "",
      nTable: null,
      nTHead: null,
      nTFoot: null,
      nTBody: null,
      nTableWrapper: null,
      bDeferLoading: !1,
      bInitialised: !1,
      aoOpenRows: [],
      sDom: null,
      sPaginationType: "two_button",
      iStateDuration: 0,
      aoStateSave: [],
      aoStateLoad: [],
      oSavedState: null,
      oLoadedState: null,
      sAjaxSource: null,
      sAjaxDataProp: null,
      bAjaxDataGet: !0,
      jqXHR: null,
      json: l,
      oAjaxData: l,
      fnServerData: null,
      aoServerParams: [],
      sServerMethod: null,
      fnFormatNumber: null,
      aLengthMenu: null,
      iDraw: 0,
      bDrawing: !1,
      iDrawError: -1,
      _iDisplayLength: 10,
      _iDisplayStart: 0,
      _iRecordsTotal: 0,
      _iRecordsDisplay: 0,
      bJUI: null,
      oClasses: {},
      bFiltered: !1,
      bSorted: !1,
      bSortCellsTop: null,
      oInit: null,
      aoDestroyCallback: [],
      fnRecordsTotal: function () {
        return "ssp" == z(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
      },
      fnRecordsDisplay: function () {
        return "ssp" == z(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
      },
      fnDisplayEnd: function () {
        var a =
          this._iDisplayLength, b = this._iDisplayStart, c = b + a, d = this.aiDisplay.length, e = this.oFeatures, f = e.bPaginate;
        return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
      },
      oInstance: null,
      sInstance: null,
      iTabIndex: 0,
      nScrollHead: null,
      nScrollFoot: null,
      aLastSort: [],
      oPlugins: {}
    };
    p.ext = t = {
      classes: {},
      errMode: "alert",
      feature: [],
      search: [],
      internal: {},
      legacy: {ajax: null},
      pager: {},
      renderer: {pageButton: {}, header: {}},
      order: {},
      type: {detect: [], search: {}, order: {}},
      _unique: 0,
      fnVersionCheck: p.fnVersionCheck,
      iApiIndex: 0,
      oJUIClasses: {},
      sVersion: p.version
    };
    h.extend(t, {
      afnFiltering: t.search,
      aTypes: t.type.detect,
      ofnSearch: t.type.search,
      oSort: t.type.order,
      afnSortData: t.order,
      aoFeatures: t.feature,
      oApi: t.internal,
      oStdClasses: t.classes,
      oPagination: t.pager
    });
    h.extend(p.ext.classes, {
      sTable: "dataTable",
      sNoFooter: "no-footer",
      sPageButton: "paginate_button",
      sPageButtonActive: "current",
      sPageButtonDisabled: "disabled",
      sStripeOdd: "odd",
      sStripeEven: "even",
      sRowEmpty: "dataTables_empty",
      sWrapper: "dataTables_wrapper",
      sFilter: "dataTables_filter",
      sInfo: "dataTables_info",
      sPaging: "dataTables_paginate paging_",
      sLength: "dataTables_length",
      sProcessing: "dataTables_processing",
      sSortAsc: "sorting_asc",
      sSortDesc: "sorting_desc",
      sSortable: "sorting",
      sSortableAsc: "sorting_asc_disabled",
      sSortableDesc: "sorting_desc_disabled",
      sSortableNone: "sorting_disabled",
      sSortColumn: "sorting_",
      sFilterInput: "",
      sLengthSelect: "",
      sScrollWrapper: "dataTables_scroll",
      sScrollHead: "dataTables_scrollHead",
      sScrollHeadInner: "dataTables_scrollHeadInner",
      sScrollBody: "dataTables_scrollBody",
      sScrollFoot: "dataTables_scrollFoot",
      sScrollFootInner: "dataTables_scrollFootInner",
      sHeaderTH: "",
      sFooterTH: "",
      sSortJUIAsc: "",
      sSortJUIDesc: "",
      sSortJUI: "",
      sSortJUIAscAllowed: "",
      sSortJUIDescAllowed: "",
      sSortJUIWrapper: "",
      sSortIcon: "",
      sJUIHeader: "",
      sJUIFooter: ""
    });
    var ya = "", ya = "", E = ya + "ui-state-default", ea = ya + "css_right ui-icon ui-icon-", Ub = ya + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
    h.extend(p.ext.oJUIClasses, p.ext.classes, {
      sPageButton: "fg-button ui-button " + E,
      sPageButtonActive: "ui-state-disabled",
      sPageButtonDisabled: "ui-state-disabled",
      sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
      sSortAsc: E + " sorting_asc",
      sSortDesc: E + " sorting_desc",
      sSortable: E + " sorting",
      sSortableAsc: E + " sorting_asc_disabled",
      sSortableDesc: E + " sorting_desc_disabled",
      sSortableNone: E + " sorting_disabled",
      sSortJUIAsc: ea + "triangle-1-n",
      sSortJUIDesc: ea + "triangle-1-s",
      sSortJUI: ea + "carat-2-n-s",
      sSortJUIAscAllowed: ea + "carat-1-n",
      sSortJUIDescAllowed: ea + "carat-1-s",
      sSortJUIWrapper: "DataTables_sort_wrapper",
      sSortIcon: "DataTables_sort_icon",
      sScrollHead: "dataTables_scrollHead " + E,
      sScrollFoot: "dataTables_scrollFoot " + E,
      sHeaderTH: E,
      sFooterTH: E,
      sJUIHeader: Ub + " ui-corner-tl ui-corner-tr",
      sJUIFooter: Ub + " ui-corner-bl ui-corner-br"
    });
    var Lb = p.ext.pager;
    h.extend(Lb, {
      simple: function () {
        return ["previous", "next"]
      }, full: function () {
        return ["first", "previous", "next", "last"]
      }, simple_numbers: function (a, b) {
        return ["previous", Ua(a, b), "next"]
      }, full_numbers: function (a, b) {
        return ["first", "previous", Ua(a, b), "next", "last"]
      }, _numbers: Ua,
      numbers_length: 7
    });
    h.extend(!0, p.ext.renderer, {
      pageButton: {
        _: function (a, b, c, d, e, f) {
          var g = a.oClasses, j = a.oLanguage.oPaginate, i, l, m = 0, o = function (b, d) {
            var k, p, r, q, s = function (b) {
              Ra(a, b.data.action, true)
            };
            k = 0;
            for (p = d.length; k < p; k++) {
              q = d[k];
              if (h.isArray(q)) {
                r = h("<" + (q.DT_el || "div") + "/>").appendTo(b);
                o(r, q)
              } else {
                l = i = "";
                switch (q) {
                  case "ellipsis":
                    b.append("<span>&hellip;</span>");
                    break;
                  case "first":
                    i = j.sFirst;
                    l = q + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "previous":
                    i = j.sPrevious;
                    l = q + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "next":
                    i = j.sNext;
                    l = q + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "last":
                    i = j.sLast;
                    l = q + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  default:
                    i = q + 1;
                    l = e === q ? g.sPageButtonActive : ""
                }
                if (i) {
                  r = h("<a>", {
                    "class": g.sPageButton + " " + l,
                    "aria-controls": a.sTableId,
                    "data-dt-idx": m,
                    tabindex: a.iTabIndex,
                    id: c === 0 && typeof q === "string" ? a.sTableId + "_" + q : null
                  }).html(i).appendTo(b);
                  Ta(r, {action: q}, s);
                  m++
                }
              }
            }
          };
          try {
            var k = h(O.activeElement).data("dt-idx");
            o(h(b).empty(), d);
            k !== null && h(b).find("[data-dt-idx=" + k + "]").focus()
          } catch (p) {
          }
        }
      }
    });
    var va = function (a, b, c, d) {
      if (!a || "-" === a)return -Infinity;
      b && (a = Pb(a, b));
      a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
      return 1 * a
    };
    h.extend(t.type.order, {
      "date-pre": function (a) {
        return Date.parse(a) || 0
      }, "html-pre": function (a) {
        return H(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
      }, "string-pre": function (a) {
        return H(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString()
      }, "string-asc": function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
      }, "string-desc": function (a, b) {
        return a < b ? 1 : a >
        b ? -1 : 0
      }
    });
    cb("");
    h.extend(p.ext.type.detect, [function (a, b) {
      var c = b.oLanguage.sDecimal;
      return Xa(a, c) ? "num" + c : null
    }, function (a) {
      if (a && (!Yb.test(a) || !Zb.test(a)))return null;
      var b = Date.parse(a);
      return null !== b && !isNaN(b) || H(a) ? "date" : null
    }, function (a, b) {
      var c = b.oLanguage.sDecimal;
      return Xa(a, c, !0) ? "num-fmt" + c : null
    }, function (a, b) {
      var c = b.oLanguage.sDecimal;
      return Qb(a, c) ? "html-num" + c : null
    }, function (a, b) {
      var c = b.oLanguage.sDecimal;
      return Qb(a, c, !0) ? "html-num-fmt" + c : null
    }, function (a) {
      return H(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
    }]);
    h.extend(p.ext.type.search, {
      html: function (a) {
        return H(a) ? a : "string" === typeof a ? a.replace(Nb, " ").replace(wa, "") : ""
      }, string: function (a) {
        return H(a) ? a : "string" === typeof a ? a.replace(Nb, " ") : a
      }
    });
    h.extend(!0, p.ext.renderer, {
      header: {
        _: function (a, b, c, d) {
          h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
            if (a === f) {
              e = c.idx;
              b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass)
            }
          })
        }, jqueryui: function (a,
                               b, c, d) {
          var e = c.idx;
          h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
          h(a.nTable).on("order.dt.DT", function (f, g, h, i) {
            if (a === g) {
              b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(i[e] == "asc" ? d.sSortAsc : i[e] == "desc" ? d.sSortDesc : c.sSortingClass);
              b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(i[e] == "asc" ? d.sSortJUIAsc :
                i[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
            }
          })
        }
      }
    });
    p.render = {
      number: function (a, b, c, d) {
        return {
          display: function (e) {
            var f = 0 > e ? "-" : "", e = Math.abs(parseFloat(e)), g = parseInt(e, 10), e = c ? b + (e - g).toFixed(c).substring(2) : "";
            return f + (d || "") + g.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + e
          }
        }
      }
    };
    h.extend(p.ext.internal, {
      _fnExternApiFunc: Mb,
      _fnBuildAjax: na,
      _fnAjaxUpdate: jb,
      _fnAjaxParameters: sb,
      _fnAjaxUpdateDraw: tb,
      _fnAjaxDataSrc: oa,
      _fnAddColumn: Aa,
      _fnColumnOptions: fa,
      _fnAdjustColumnSizing: V,
      _fnVisibleToColumnIndex: ga,
      _fnColumnIndexToVisible: Y,
      _fnVisbleColumns: Z,
      _fnGetColumns: X,
      _fnColumnTypes: Da,
      _fnApplyColumnDefs: hb,
      _fnHungarianMap: T,
      _fnCamelToHungarian: G,
      _fnLanguageCompat: N,
      _fnBrowserDetect: fb,
      _fnAddData: I,
      _fnAddTr: ha,
      _fnNodeToDataIndex: function (a, b) {
        return b._DT_RowIndex !== l ? b._DT_RowIndex : null
      },
      _fnNodeToColumnIndex: function (a, b, c) {
        return h.inArray(c, a.aoData[b].anCells)
      },
      _fnGetCellData: A,
      _fnSetCellData: Ea,
      _fnSplitObjNotation: Ga,
      _fnGetObjectDataFn: U,
      _fnSetObjectDataFn: Ba,
      _fnGetDataMaster: Ha,
      _fnClearTable: ja,
      _fnDeleteIndex: ka,
      _fnInvalidateRow: la,
      _fnGetRowElements: ia,
      _fnCreateTr: Fa,
      _fnBuildHead: ib,
      _fnDrawHead: ba,
      _fnDraw: K,
      _fnReDraw: L,
      _fnAddOptionsHtml: lb,
      _fnDetectHeader: aa,
      _fnGetUniqueThs: ma,
      _fnFeatureHtmlFilter: nb,
      _fnFilterComplete: ca,
      _fnFilterCustom: wb,
      _fnFilterColumn: vb,
      _fnFilter: ub,
      _fnFilterCreateSearch: Na,
      _fnEscapeRegex: Oa,
      _fnFilterData: xb,
      _fnFeatureHtmlInfo: qb,
      _fnUpdateInfo: Ab,
      _fnInfoMacros: Bb,
      _fnInitialise: ra,
      _fnInitComplete: pa,
      _fnLengthChange: Pa,
      _fnFeatureHtmlLength: mb,
      _fnFeatureHtmlPaginate: rb,
      _fnPageChange: Ra,
      _fnFeatureHtmlProcessing: ob,
      _fnProcessingDisplay: B,
      _fnFeatureHtmlTable: pb,
      _fnScrollDraw: W,
      _fnApplyToChildren: F,
      _fnCalculateColumnWidths: Ca,
      _fnThrottle: Ma,
      _fnConvertToWidth: Cb,
      _fnScrollingWidthAdjust: Eb,
      _fnGetWidestNode: Db,
      _fnGetMaxLenString: Fb,
      _fnStringToCss: s,
      _fnScrollBarWidth: Gb,
      _fnSortFlatten: R,
      _fnSort: kb,
      _fnSortAria: Ib,
      _fnSortListener: Sa,
      _fnSortAttachListener: Ka,
      _fnSortingClasses: sa,
      _fnSortData: Hb,
      _fnSaveState: ta,
      _fnLoadState: Jb,
      _fnSettingsFromNode: ua,
      _fnLog: P,
      _fnMap: D,
      _fnBindAction: Ta,
      _fnCallbackReg: x,
      _fnCallbackFire: u,
      _fnLengthOverflow: Qa,
      _fnRenderer: La,
      _fnDataSource: z,
      _fnRowAttributes: Ia,
      _fnCalculateEnd: function () {
      }
    });
    h.fn.dataTable = p;
    h.fn.dataTableSettings = p.settings;
    h.fn.dataTableExt = p.ext;
    h.fn.DataTable = function (a) {
      return h(this).dataTable(a).api()
    };
    h.each(p, function (a, b) {
      h.fn.DataTable[a] = b
    });
    return h.fn.dataTable
  };
  "function" === typeof define && define.amd ? define("datatables", ["jquery"], N) : "object" === typeof exports ? N(require("jquery")) : jQuery && !jQuery.fn.dataTable && N(jQuery)
})(window,
  document);

// Datatables Bootstrap Pagination Integration
jQuery.fn.dataTableExt.oApi.fnPagingInfo = function (e) {
  return {
    iStart: e._iDisplayStart,
    iEnd: e.fnDisplayEnd(),
    iLength: e._iDisplayLength,
    iTotal: e.fnRecordsTotal(),
    iFilteredTotal: e.fnRecordsDisplay(),
    iPage: Math.ceil(e._iDisplayStart / e._iDisplayLength),
    iTotalPages: Math.ceil(e.fnRecordsDisplay() / e._iDisplayLength)
  }
}, jQuery.extend(jQuery.fn.dataTableExt.oPagination, {
  bootstrap: {
    fnInit: function (e, t, n) {
      var i = e.oLanguage.oPaginate, r = function (t) {
        t.preventDefault(), e.oApi._fnPageChange(e, t.data.action) && n(e)
      };
      jQuery(t).append('<ul class="pagination pagination-sm remove-margin"><li class="prev disabled"><a href="javascript:void(0)"><i class="fa fa-chevron-left"></i> ' + i.sPrevious + "</a></li>" + '<li class="next disabled"><a href="javascript:void(0)">' + i.sNext + ' <i class="fa fa-chevron-right"></i></a></li>' + "</ul>");
      var o = jQuery("a", t);
      jQuery(o[0]).bind("click.DT", {action: "previous"}, r), jQuery(o[1]).bind("click.DT", {action: "next"}, r)
    }, fnUpdate: function (e, t) {
      var n, i, r, o, a, s = 5, l = e.oInstance.fnPagingInfo(), c = e.aanFeatures.p, u = Math.floor(s / 2);
      for (l.iTotalPages < s ? (o = 1, a = l.iTotalPages) : l.iPage <= u ? (o = 1, a = s) : l.iPage >= l.iTotalPages - u ? (o = l.iTotalPages - s + 1, a = l.iTotalPages) : (o = l.iPage - u + 1, a = o + s - 1), n = 0, iLen = c.length; iLen > n; n++) {
        for (jQuery("li:gt(0)", c[n]).filter(":not(:last)").remove(), i = o; a >= i; i++)r = i === l.iPage + 1 ? 'class="active"' : "", jQuery("<li " + r + '><a href="javascript:void(0)">' + i + "</a></li>").insertBefore(jQuery("li:last", c[n])[0]).bind("click", function (n) {
          n.preventDefault(), e._iDisplayStart = (parseInt(jQuery("a", this).text(), 10) - 1) * l.iLength, t(e)
        });
        0 === l.iPage ? jQuery("li:first", c[n]).addClass("disabled") : jQuery("li:first", c[n]).removeClass("disabled"), l.iPage === l.iTotalPages - 1 || 0 === l.iTotalPages ? jQuery("li:last", c[n]).addClass("disabled") : jQuery("li:last", c[n]).removeClass("disabled")
      }
    }
  }
});

/*! moment.js
 * version : 2.7.0
 * authors : Tim Wood, Iskren Chernev, Moment.js contributors
 * license : MIT
 * momentjs.com
 */
(function (a) {
  function b(a, b, c) {
    switch (arguments.length) {
      case 2:
        return null != a ? a : b;
      case 3:
        return null != a ? a : null != b ? b : c;
      default:
        throw new Error("Implement me")
    }
  }

  function c() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1
    }
  }

  function d(a, b) {
    function c() {
      mb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
    }

    var d = !0;
    return j(function () {
      return d && (c(), d = !1), b.apply(this, arguments)
    }, b)
  }

  function e(a, b) {
    return function (c) {
      return m(a.call(this, c), b)
    }
  }

  function f(a, b) {
    return function (c) {
      return this.lang().ordinal(a.call(this, c), b)
    }
  }

  function g() {
  }

  function h(a) {
    z(a), j(this, a)
  }

  function i(a) {
    var b = s(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
    this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._bubble()
  }

  function j(a, b) {
    for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
    return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a
  }

  function k(a) {
    var b, c = {};
    for (b in a)a.hasOwnProperty(b) && Ab.hasOwnProperty(b) && (c[b] = a[b]);
    return c
  }

  function l(a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a)
  }

  function m(a, b, c) {
    for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;)d = "0" + d;
    return (e ? c ? "+" : "" : "-") + d
  }

  function n(a, b, c, d) {
    var e = b._milliseconds, f = b._days, g = b._months;
    d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && hb(a, "Date", gb(a, "Date") + f * c), g && fb(a, gb(a, "Month") + g * c), d && mb.updateOffset(a, f || g)
  }

  function o(a) {
    return "[object Array]" === Object.prototype.toString.call(a)
  }

  function p(a) {
    return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
  }

  function q(a, b, c) {
    var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
    for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
    return g + f
  }

  function r(a) {
    if (a) {
      var b = a.toLowerCase().replace(/(.)s$/, "$1");
      a = bc[a] || cc[b] || b
    }
    return a
  }

  function s(a) {
    var b, c, d = {};
    for (c in a)a.hasOwnProperty(c) && (b = r(c), b && (d[b] = a[c]));
    return d
  }

  function t(b) {
    var c, d;
    if (0 === b.indexOf("week"))c = 7, d = "day"; else {
      if (0 !== b.indexOf("month"))return;
      c = 12, d = "month"
    }
    mb[b] = function (e, f) {
      var g, h, i = mb.fn._lang[b], j = [];
      if ("number" == typeof e && (f = e, e = a), h = function (a) {
          var b = mb().utc().set(d, a);
          return i.call(mb.fn._lang, b, e || "")
        }, null != f)return h(f);
      for (g = 0; c > g; g++)j.push(h(g));
      return j
    }
  }

  function u(a) {
    var b = +a, c = 0;
    return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
  }

  function v(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
  }

  function w(a, b, c) {
    return bb(mb([a, 11, 31 + b - c]), b, c).week
  }

  function x(a) {
    return y(a) ? 366 : 365
  }

  function y(a) {
    return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
  }

  function z(a) {
    var b;
    a._a && -2 === a._pf.overflow && (b = a._a[tb] < 0 || a._a[tb] > 11 ? tb : a._a[ub] < 1 || a._a[ub] > v(a._a[sb], a._a[tb]) ? ub : a._a[vb] < 0 || a._a[vb] > 23 ? vb : a._a[wb] < 0 || a._a[wb] > 59 ? wb : a._a[xb] < 0 || a._a[xb] > 59 ? xb : a._a[yb] < 0 || a._a[yb] > 999 ? yb : -1, a._pf._overflowDayOfYear && (sb > b || b > ub) && (b = ub), a._pf.overflow = b)
  }

  function A(a) {
    return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
  }

  function B(a) {
    return a ? a.toLowerCase().replace("_", "-") : a
  }

  function C(a, b) {
    return b._isUTC ? mb(a).zone(b._offset || 0) : mb(a).local()
  }

  function D(a, b) {
    return b.abbr = a, zb[a] || (zb[a] = new g), zb[a].set(b), zb[a]
  }

  function E(a) {
    delete zb[a]
  }

  function F(a) {
    var b, c, d, e, f = 0, g = function (a) {
      if (!zb[a] && Bb)try {
        require("./lang/" + a)
      } catch (b) {
      }
      return zb[a]
    };
    if (!a)return mb.fn._lang;
    if (!o(a)) {
      if (c = g(a))return c;
      a = [a]
    }
    for (; f < a.length;) {
      for (e = B(a[f]).split("-"), b = e.length, d = B(a[f + 1]), d = d ? d.split("-") : null; b > 0;) {
        if (c = g(e.slice(0, b).join("-")))return c;
        if (d && d.length >= b && q(e, d, !0) >= b - 1)break;
        b--
      }
      f++
    }
    return mb.fn._lang
  }

  function G(a) {
    return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
  }

  function H(a) {
    var b, c, d = a.match(Fb);
    for (b = 0, c = d.length; c > b; b++)d[b] = hc[d[b]] ? hc[d[b]] : G(d[b]);
    return function (e) {
      var f = "";
      for (b = 0; c > b; b++)f += d[b]instanceof Function ? d[b].call(e, a) : d[b];
      return f
    }
  }

  function I(a, b) {
    return a.isValid() ? (b = J(b, a.lang()), dc[b] || (dc[b] = H(b)), dc[b](a)) : a.lang().invalidDate()
  }

  function J(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a
    }

    var d = 5;
    for (Gb.lastIndex = 0; d >= 0 && Gb.test(a);)a = a.replace(Gb, c), Gb.lastIndex = 0, d -= 1;
    return a
  }

  function K(a, b) {
    var c, d = b._strict;
    switch (a) {
      case"Q":
        return Rb;
      case"DDDD":
        return Tb;
      case"YYYY":
      case"GGGG":
      case"gggg":
        return d ? Ub : Jb;
      case"Y":
      case"G":
      case"g":
        return Wb;
      case"YYYYYY":
      case"YYYYY":
      case"GGGGG":
      case"ggggg":
        return d ? Vb : Kb;
      case"S":
        if (d)return Rb;
      case"SS":
        if (d)return Sb;
      case"SSS":
        if (d)return Tb;
      case"DDD":
        return Ib;
      case"MMM":
      case"MMMM":
      case"dd":
      case"ddd":
      case"dddd":
        return Mb;
      case"a":
      case"A":
        return F(b._l)._meridiemParse;
      case"X":
        return Pb;
      case"Z":
      case"ZZ":
        return Nb;
      case"T":
        return Ob;
      case"SSSS":
        return Lb;
      case"MM":
      case"DD":
      case"YY":
      case"GG":
      case"gg":
      case"HH":
      case"hh":
      case"mm":
      case"ss":
      case"ww":
      case"WW":
        return d ? Sb : Hb;
      case"M":
      case"D":
      case"d":
      case"H":
      case"h":
      case"m":
      case"s":
      case"w":
      case"W":
      case"e":
      case"E":
        return Hb;
      case"Do":
        return Qb;
      default:
        return c = new RegExp(T(S(a.replace("\\", "")), "i"))
    }
  }

  function L(a) {
    a = a || "";
    var b = a.match(Nb) || [], c = b[b.length - 1] || [], d = (c + "").match(_b) || ["-", 0, 0], e = +(60 * d[1]) + u(d[2]);
    return "+" === d[0] ? -e : e
  }

  function M(a, b, c) {
    var d, e = c._a;
    switch (a) {
      case"Q":
        null != b && (e[tb] = 3 * (u(b) - 1));
        break;
      case"M":
      case"MM":
        null != b && (e[tb] = u(b) - 1);
        break;
      case"MMM":
      case"MMMM":
        d = F(c._l).monthsParse(b), null != d ? e[tb] = d : c._pf.invalidMonth = b;
        break;
      case"D":
      case"DD":
        null != b && (e[ub] = u(b));
        break;
      case"Do":
        null != b && (e[ub] = u(parseInt(b, 10)));
        break;
      case"DDD":
      case"DDDD":
        null != b && (c._dayOfYear = u(b));
        break;
      case"YY":
        e[sb] = mb.parseTwoDigitYear(b);
        break;
      case"YYYY":
      case"YYYYY":
      case"YYYYYY":
        e[sb] = u(b);
        break;
      case"a":
      case"A":
        c._isPm = F(c._l).isPM(b);
        break;
      case"H":
      case"HH":
      case"h":
      case"hh":
        e[vb] = u(b);
        break;
      case"m":
      case"mm":
        e[wb] = u(b);
        break;
      case"s":
      case"ss":
        e[xb] = u(b);
        break;
      case"S":
      case"SS":
      case"SSS":
      case"SSSS":
        e[yb] = u(1e3 * ("0." + b));
        break;
      case"X":
        c._d = new Date(1e3 * parseFloat(b));
        break;
      case"Z":
      case"ZZ":
        c._useUTC = !0, c._tzm = L(b);
        break;
      case"dd":
      case"ddd":
      case"dddd":
        d = F(c._l).weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
        break;
      case"w":
      case"ww":
      case"W":
      case"WW":
      case"d":
      case"e":
      case"E":
        a = a.substr(0, 1);
      case"gggg":
      case"GGGG":
      case"GGGGG":
        a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = u(b));
        break;
      case"gg":
      case"GG":
        c._w = c._w || {}, c._w[a] = mb.parseTwoDigitYear(b)
    }
  }

  function N(a) {
    var c, d, e, f, g, h, i, j;
    c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[sb], bb(mb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (j = F(a._l), g = j._week.dow, h = j._week.doy, d = b(c.gg, a._a[sb], bb(mb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = cb(d, e, f, h, g), a._a[sb] = i.year, a._dayOfYear = i.dayOfYear
  }

  function O(a) {
    var c, d, e, f, g = [];
    if (!a._d) {
      for (e = Q(a), a._w && null == a._a[ub] && null == a._a[tb] && N(a), a._dayOfYear && (f = b(a._a[sb], e[sb]), a._dayOfYear > x(f) && (a._pf._overflowDayOfYear = !0), d = Z(f, 0, a._dayOfYear), a._a[tb] = d.getUTCMonth(), a._a[ub] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c)a._a[c] = g[c] = e[c];
      for (; 7 > c; c++)a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
      a._d = (a._useUTC ? Z : Y).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() + a._tzm)
    }
  }

  function P(a) {
    var b;
    a._d || (b = s(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], O(a))
  }

  function Q(a) {
    var b = new Date;
    return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
  }

  function R(a) {
    if (a._f === mb.ISO_8601)return void V(a);
    a._a = [], a._pf.empty = !0;
    var b, c, d, e, f, g = F(a._l), h = "" + a._i, i = h.length, j = 0;
    for (d = J(a._f, g).match(Fb) || [], b = 0; b < d.length; b++)e = d[b], c = (h.match(K(e, a)) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), hc[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), M(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
    a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[vb] < 12 && (a._a[vb] += 12), a._isPm === !1 && 12 === a._a[vb] && (a._a[vb] = 0), O(a), z(a)
  }

  function S(a) {
    return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
      return b || c || d || e
    })
  }

  function T(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  }

  function U(a) {
    var b, d, e, f, g;
    if (0 === a._f.length)return a._pf.invalidFormat = !0, void(a._d = new Date(0 / 0));
    for (f = 0; f < a._f.length; f++)g = 0, b = j({}, a), b._pf = c(), b._f = a._f[f], R(b), A(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, d = b));
    j(a, d || b)
  }

  function V(a) {
    var b, c, d = a._i, e = Xb.exec(d);
    if (e) {
      for (a._pf.iso = !0, b = 0, c = Zb.length; c > b; b++)if (Zb[b][1].exec(d)) {
        a._f = Zb[b][0] + (e[6] || " ");
        break
      }
      for (b = 0, c = $b.length; c > b; b++)if ($b[b][1].exec(d)) {
        a._f += $b[b][0];
        break
      }
      d.match(Nb) && (a._f += "Z"), R(a)
    } else a._isValid = !1
  }

  function W(a) {
    V(a), a._isValid === !1 && (delete a._isValid, mb.createFromInputFallback(a))
  }

  function X(b) {
    var c = b._i, d = Cb.exec(c);
    c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? W(b) : o(c) ? (b._a = c.slice(0), O(b)) : p(c) ? b._d = new Date(+c) : "object" == typeof c ? P(b) : "number" == typeof c ? b._d = new Date(c) : mb.createFromInputFallback(b)
  }

  function Y(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);
    return 1970 > a && h.setFullYear(a), h
  }

  function Z(a) {
    var b = new Date(Date.UTC.apply(null, arguments));
    return 1970 > a && b.setUTCFullYear(a), b
  }

  function $(a, b) {
    if ("string" == typeof a)if (isNaN(a)) {
      if (a = b.weekdaysParse(a), "number" != typeof a)return null
    } else a = parseInt(a, 10);
    return a
  }

  function _(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d)
  }

  function ab(a, b, c) {
    var d = rb(Math.abs(a) / 1e3), e = rb(d / 60), f = rb(e / 60), g = rb(f / 24), h = rb(g / 365), i = d < ec.s && ["s", d] || 1 === e && ["m"] || e < ec.m && ["mm", e] || 1 === f && ["h"] || f < ec.h && ["hh", f] || 1 === g && ["d"] || g <= ec.dd && ["dd", g] || g <= ec.dm && ["M"] || g < ec.dy && ["MM", rb(g / 30)] || 1 === h && ["y"] || ["yy", h];
    return i[2] = b, i[3] = a > 0, i[4] = c, _.apply({}, i)
  }

  function bb(a, b, c) {
    var d, e = c - b, f = c - a.day();
    return f > e && (f -= 7), e - 7 > f && (f += 7), d = mb(a).add("d", f), {
      week: Math.ceil(d.dayOfYear() / 7),
      year: d.year()
    }
  }

  function cb(a, b, c, d, e) {
    var f, g, h = Z(a, 0, 1).getUTCDay();
    return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
      year: g > 0 ? a : a - 1,
      dayOfYear: g > 0 ? g : x(a - 1) + g
    }
  }

  function db(b) {
    var c = b._i, d = b._f;
    return null === c || d === a && "" === c ? mb.invalid({nullInput: !0}) : ("string" == typeof c && (b._i = c = F().preparse(c)), mb.isMoment(c) ? (b = k(c), b._d = new Date(+c._d)) : d ? o(d) ? U(b) : R(b) : X(b), new h(b))
  }

  function eb(a, b) {
    var c, d;
    if (1 === b.length && o(b[0]) && (b = b[0]), !b.length)return mb();
    for (c = b[0], d = 1; d < b.length; ++d)b[d][a](c) && (c = b[d]);
    return c
  }

  function fb(a, b) {
    var c;
    return "string" == typeof b && (b = a.lang().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), v(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
  }

  function gb(a, b) {
    return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
  }

  function hb(a, b, c) {
    return "Month" === b ? fb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
  }

  function ib(a, b) {
    return function (c) {
      return null != c ? (hb(this, a, c), mb.updateOffset(this, b), this) : gb(this, a)
    }
  }

  function jb(a) {
    mb.duration.fn[a] = function () {
      return this._data[a]
    }
  }

  function kb(a, b) {
    mb.duration.fn["as" + a] = function () {
      return +this / b
    }
  }

  function lb(a) {
    "undefined" == typeof ender && (nb = qb.moment, qb.moment = a ? d("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", mb) : mb)
  }

  for (var mb, nb, ob, pb = "2.7.0", qb = "undefined" != typeof global ? global : this, rb = Math.round, sb = 0, tb = 1, ub = 2, vb = 3, wb = 4, xb = 5, yb = 6, zb = {}, Ab = {
    _isAMomentObject: null,
    _i: null,
    _f: null,
    _l: null,
    _strict: null,
    _tzm: null,
    _isUTC: null,
    _offset: null,
    _pf: null,
    _lang: null
  }, Bb = "undefined" != typeof module && module.exports, Cb = /^\/?Date\((\-?\d+)/i, Db = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Eb = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Fb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Gb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Hb = /\d\d?/, Ib = /\d{1,3}/, Jb = /\d{1,4}/, Kb = /[+\-]?\d{1,6}/, Lb = /\d+/, Mb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Nb = /Z|[\+\-]\d\d:?\d\d/gi, Ob = /T/i, Pb = /[\+\-]?\d+(\.\d{1,3})?/, Qb = /\d{1,2}/, Rb = /\d/, Sb = /\d\d/, Tb = /\d{3}/, Ub = /\d{4}/, Vb = /[+-]?\d{6}/, Wb = /[+-]?\d+/, Xb = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Yb = "YYYY-MM-DDTHH:mm:ssZ", Zb = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], $b = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], _b = /([\+\-]|\d\d)/gi, ac = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
    Milliseconds: 1,
    Seconds: 1e3,
    Minutes: 6e4,
    Hours: 36e5,
    Days: 864e5,
    Months: 2592e6,
    Years: 31536e6
  }), bc = {
    ms: "millisecond",
    s: "second",
    m: "minute",
    h: "hour",
    d: "day",
    D: "date",
    w: "week",
    W: "isoWeek",
    M: "month",
    Q: "quarter",
    y: "year",
    DDD: "dayOfYear",
    e: "weekday",
    E: "isoWeekday",
    gg: "weekYear",
    GG: "isoWeekYear"
  }, cc = {
    dayofyear: "dayOfYear",
    isoweekday: "isoWeekday",
    isoweek: "isoWeek",
    weekyear: "weekYear",
    isoweekyear: "isoWeekYear"
  }, dc = {}, ec = {
    s: 45,
    m: 45,
    h: 22,
    dd: 25,
    dm: 45,
    dy: 345
  }, fc = "DDD w W M D d".split(" "), gc = "M D H h m s w W".split(" "), hc = {
    M: function () {
      return this.month() + 1
    }, MMM: function (a) {
      return this.lang().monthsShort(this, a)
    }, MMMM: function (a) {
      return this.lang().months(this, a)
    }, D: function () {
      return this.date()
    }, DDD: function () {
      return this.dayOfYear()
    }, d: function () {
      return this.day()
    }, dd: function (a) {
      return this.lang().weekdaysMin(this, a)
    }, ddd: function (a) {
      return this.lang().weekdaysShort(this, a)
    }, dddd: function (a) {
      return this.lang().weekdays(this, a)
    }, w: function () {
      return this.week()
    }, W: function () {
      return this.isoWeek()
    }, YY: function () {
      return m(this.year() % 100, 2)
    }, YYYY: function () {
      return m(this.year(), 4)
    }, YYYYY: function () {
      return m(this.year(), 5)
    }, YYYYYY: function () {
      var a = this.year(), b = a >= 0 ? "+" : "-";
      return b + m(Math.abs(a), 6)
    }, gg: function () {
      return m(this.weekYear() % 100, 2)
    }, gggg: function () {
      return m(this.weekYear(), 4)
    }, ggggg: function () {
      return m(this.weekYear(), 5)
    }, GG: function () {
      return m(this.isoWeekYear() % 100, 2)
    }, GGGG: function () {
      return m(this.isoWeekYear(), 4)
    }, GGGGG: function () {
      return m(this.isoWeekYear(), 5)
    }, e: function () {
      return this.weekday()
    }, E: function () {
      return this.isoWeekday()
    }, a: function () {
      return this.lang().meridiem(this.hours(), this.minutes(), !0)
    }, A: function () {
      return this.lang().meridiem(this.hours(), this.minutes(), !1)
    }, H: function () {
      return this.hours()
    }, h: function () {
      return this.hours() % 12 || 12
    }, m: function () {
      return this.minutes()
    }, s: function () {
      return this.seconds()
    }, S: function () {
      return u(this.milliseconds() / 100)
    }, SS: function () {
      return m(u(this.milliseconds() / 10), 2)
    }, SSS: function () {
      return m(this.milliseconds(), 3)
    }, SSSS: function () {
      return m(this.milliseconds(), 3)
    }, Z: function () {
      var a = -this.zone(), b = "+";
      return 0 > a && (a = -a, b = "-"), b + m(u(a / 60), 2) + ":" + m(u(a) % 60, 2)
    }, ZZ: function () {
      var a = -this.zone(), b = "+";
      return 0 > a && (a = -a, b = "-"), b + m(u(a / 60), 2) + m(u(a) % 60, 2)
    }, z: function () {
      return this.zoneAbbr()
    }, zz: function () {
      return this.zoneName()
    }, X: function () {
      return this.unix()
    }, Q: function () {
      return this.quarter()
    }
  }, ic = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; fc.length;)ob = fc.pop(), hc[ob + "o"] = f(hc[ob], ob);
  for (; gc.length;)ob = gc.pop(), hc[ob + ob] = e(hc[ob], 2);
  for (hc.DDDD = e(hc.DDD, 3), j(g.prototype, {
    set: function (a) {
      var b, c;
      for (c in a)b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
    },
    _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    months: function (a) {
      return this._months[a.month()]
    },
    _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    monthsShort: function (a) {
      return this._monthsShort[a.month()]
    },
    monthsParse: function (a) {
      var b, c, d;
      for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)if (this._monthsParse[b] || (c = mb.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a))return b
    },
    _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdays: function (a) {
      return this._weekdays[a.day()]
    },
    _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysShort: function (a) {
      return this._weekdaysShort[a.day()]
    },
    _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    weekdaysMin: function (a) {
      return this._weekdaysMin[a.day()]
    },
    weekdaysParse: function (a) {
      var b, c, d;
      for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)if (this._weekdaysParse[b] || (c = mb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a))return b
    },
    _longDateFormat: {
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D YYYY",
      LLL: "MMMM D YYYY LT",
      LLLL: "dddd, MMMM D YYYY LT"
    },
    longDateFormat: function (a) {
      var b = this._longDateFormat[a];
      return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
        return a.slice(1)
      }), this._longDateFormat[a] = b), b
    },
    isPM: function (a) {
      return "p" === (a + "").toLowerCase().charAt(0)
    },
    _meridiemParse: /[ap]\.?m?\.?/i,
    meridiem: function (a, b, c) {
      return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    },
    _calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    calendar: function (a, b) {
      var c = this._calendar[a];
      return "function" == typeof c ? c.apply(b) : c
    },
    _relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    relativeTime: function (a, b, c, d) {
      var e = this._relativeTime[c];
      return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
    },
    pastFuture: function (a, b) {
      var c = this._relativeTime[a > 0 ? "future" : "past"];
      return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
    },
    ordinal: function (a) {
      return this._ordinal.replace("%d", a)
    },
    _ordinal: "%d",
    preparse: function (a) {
      return a
    },
    postformat: function (a) {
      return a
    },
    week: function (a) {
      return bb(a, this._week.dow, this._week.doy).week
    },
    _week: {dow: 0, doy: 6},
    _invalidDate: "Invalid date",
    invalidDate: function () {
      return this._invalidDate
    }
  }), mb = function (b, d, e, f) {
    var g;
    return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = d, g._l = e, g._strict = f, g._isUTC = !1, g._pf = c(), db(g)
  }, mb.suppressDeprecationWarnings = !1, mb.createFromInputFallback = d("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
    a._d = new Date(a._i)
  }), mb.min = function () {
    var a = [].slice.call(arguments, 0);
    return eb("isBefore", a)
  }, mb.max = function () {
    var a = [].slice.call(arguments, 0);
    return eb("isAfter", a)
  }, mb.utc = function (b, d, e, f) {
    var g;
    return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = d, g._strict = f, g._pf = c(), db(g).utc()
  }, mb.unix = function (a) {
    return mb(1e3 * a)
  }, mb.duration = function (a, b) {
    var c, d, e, f = a, g = null;
    return mb.isDuration(a) ? f = {
      ms: a._milliseconds,
      d: a._days,
      M: a._months
    } : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = Db.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
      y: 0,
      d: u(g[ub]) * c,
      h: u(g[vb]) * c,
      m: u(g[wb]) * c,
      s: u(g[xb]) * c,
      ms: u(g[yb]) * c
    }) : (g = Eb.exec(a)) && (c = "-" === g[1] ? -1 : 1, e = function (a) {
      var b = a && parseFloat(a.replace(",", "."));
      return (isNaN(b) ? 0 : b) * c
    }, f = {
      y: e(g[2]),
      M: e(g[3]),
      d: e(g[4]),
      h: e(g[5]),
      m: e(g[6]),
      s: e(g[7]),
      w: e(g[8])
    }), d = new i(f), mb.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
  }, mb.version = pb, mb.defaultFormat = Yb, mb.ISO_8601 = function () {
  }, mb.momentProperties = Ab, mb.updateOffset = function () {
  }, mb.relativeTimeThreshold = function (b, c) {
    return ec[b] === a ? !1 : (ec[b] = c, !0)
  }, mb.lang = function (a, b) {
    var c;
    return a ? (b ? D(B(a), b) : null === b ? (E(a), a = "en") : zb[a] || F(a), c = mb.duration.fn._lang = mb.fn._lang = F(a), c._abbr) : mb.fn._lang._abbr
  }, mb.langData = function (a) {
    return a && a._lang && a._lang._abbr && (a = a._lang._abbr), F(a)
  }, mb.isMoment = function (a) {
    return a instanceof h || null != a && a.hasOwnProperty("_isAMomentObject")
  }, mb.isDuration = function (a) {
    return a instanceof i
  }, ob = ic.length - 1; ob >= 0; --ob)t(ic[ob]);
  mb.normalizeUnits = function (a) {
    return r(a)
  }, mb.invalid = function (a) {
    var b = mb.utc(0 / 0);
    return null != a ? j(b._pf, a) : b._pf.userInvalidated = !0, b
  }, mb.parseZone = function () {
    return mb.apply(null, arguments).parseZone()
  }, mb.parseTwoDigitYear = function (a) {
    return u(a) + (u(a) > 68 ? 1900 : 2e3)
  }, j(mb.fn = h.prototype, {
    clone: function () {
      return mb(this)
    },
    valueOf: function () {
      return +this._d + 6e4 * (this._offset || 0)
    },
    unix: function () {
      return Math.floor(+this / 1e3)
    },
    toString: function () {
      return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    },
    toDate: function () {
      return this._offset ? new Date(+this) : this._d
    },
    toISOString: function () {
      var a = mb(this).utc();
      return 0 < a.year() && a.year() <= 9999 ? I(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : I(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    },
    toArray: function () {
      var a = this;
      return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
    },
    isValid: function () {
      return A(this)
    },
    isDSTShifted: function () {
      return this._a ? this.isValid() && q(this._a, (this._isUTC ? mb.utc(this._a) : mb(this._a)).toArray()) > 0 : !1
    },
    parsingFlags: function () {
      return j({}, this._pf)
    },
    invalidAt: function () {
      return this._pf.overflow
    },
    utc: function () {
      return this.zone(0)
    },
    local: function () {
      return this.zone(0), this._isUTC = !1, this
    },
    format: function (a) {
      var b = I(this, a || mb.defaultFormat);
      return this.lang().postformat(b)
    },
    add: function (a, b) {
      var c;
      return c = "string" == typeof a && "string" == typeof b ? mb.duration(isNaN(+b) ? +a : +b, isNaN(+b) ? b : a) : "string" == typeof a ? mb.duration(+b, a) : mb.duration(a, b), n(this, c, 1), this
    },
    subtract: function (a, b) {
      var c;
      return c = "string" == typeof a && "string" == typeof b ? mb.duration(isNaN(+b) ? +a : +b, isNaN(+b) ? b : a) : "string" == typeof a ? mb.duration(+b, a) : mb.duration(a, b), n(this, c, -1), this
    },
    diff: function (a, b, c) {
      var d, e, f = C(a, this), g = 6e4 * (this.zone() - f.zone());
      return b = r(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - mb(this).startOf("month") - (f - mb(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - mb(this).startOf("month").zone() - (f.zone() - mb(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : l(e)
    },
    from: function (a, b) {
      return mb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
    },
    fromNow: function (a) {
      return this.from(mb(), a)
    },
    calendar: function (a) {
      var b = a || mb(), c = C(b, this).startOf("day"), d = this.diff(c, "days", !0), e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
      return this.format(this.lang().calendar(e, this))
    },
    isLeapYear: function () {
      return y(this.year())
    },
    isDST: function () {
      return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
    },
    day: function (a) {
      var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != a ? (a = $(a, this.lang()), this.add({d: a - b})) : b
    },
    month: ib("Month", !0),
    startOf: function (a) {
      switch (a = r(a)) {
        case"year":
          this.month(0);
        case"quarter":
        case"month":
          this.date(1);
        case"week":
        case"isoWeek":
        case"day":
          this.hours(0);
        case"hour":
          this.minutes(0);
        case"minute":
          this.seconds(0);
        case"second":
          this.milliseconds(0)
      }
      return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    },
    endOf: function (a) {
      return a = r(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)
    },
    isAfter: function (a, b) {
      return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +mb(a).startOf(b)
    },
    isBefore: function (a, b) {
      return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +mb(a).startOf(b)
    },
    isSame: function (a, b) {
      return b = b || "ms", +this.clone().startOf(b) === +C(a, this).startOf(b)
    },
    min: d("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (a) {
      return a = mb.apply(null, arguments), this > a ? this : a
    }),
    max: d("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (a) {
      return a = mb.apply(null, arguments), a > this ? this : a
    }),
    zone: function (a, b) {
      var c = this._offset || 0;
      return null == a ? this._isUTC ? c : this._d.getTimezoneOffset() : ("string" == typeof a && (a = L(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, c !== a && (!b || this._changeInProgress ? n(this, mb.duration(c - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, mb.updateOffset(this, !0), this._changeInProgress = null)), this)
    },
    zoneAbbr: function () {
      return this._isUTC ? "UTC" : ""
    },
    zoneName: function () {
      return this._isUTC ? "Coordinated Universal Time" : ""
    },
    parseZone: function () {
      return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
    },
    hasAlignedHourOffset: function (a) {
      return a = a ? mb(a).zone() : 0, (this.zone() - a) % 60 === 0
    },
    daysInMonth: function () {
      return v(this.year(), this.month())
    },
    dayOfYear: function (a) {
      var b = rb((mb(this).startOf("day") - mb(this).startOf("year")) / 864e5) + 1;
      return null == a ? b : this.add("d", a - b)
    },
    quarter: function (a) {
      return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    },
    weekYear: function (a) {
      var b = bb(this, this.lang()._week.dow, this.lang()._week.doy).year;
      return null == a ? b : this.add("y", a - b)
    },
    isoWeekYear: function (a) {
      var b = bb(this, 1, 4).year;
      return null == a ? b : this.add("y", a - b)
    },
    week: function (a) {
      var b = this.lang().week(this);
      return null == a ? b : this.add("d", 7 * (a - b))
    },
    isoWeek: function (a) {
      var b = bb(this, 1, 4).week;
      return null == a ? b : this.add("d", 7 * (a - b))
    },
    weekday: function (a) {
      var b = (this.day() + 7 - this.lang()._week.dow) % 7;
      return null == a ? b : this.add("d", a - b)
    },
    isoWeekday: function (a) {
      return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
    },
    isoWeeksInYear: function () {
      return w(this.year(), 1, 4)
    },
    weeksInYear: function () {
      var a = this._lang._week;
      return w(this.year(), a.dow, a.doy)
    },
    get: function (a) {
      return a = r(a), this[a]()
    },
    set: function (a, b) {
      return a = r(a), "function" == typeof this[a] && this[a](b), this
    },
    lang: function (b) {
      return b === a ? this._lang : (this._lang = F(b), this)
    }
  }), mb.fn.millisecond = mb.fn.milliseconds = ib("Milliseconds", !1), mb.fn.second = mb.fn.seconds = ib("Seconds", !1), mb.fn.minute = mb.fn.minutes = ib("Minutes", !1), mb.fn.hour = mb.fn.hours = ib("Hours", !0), mb.fn.date = ib("Date", !0), mb.fn.dates = d("dates accessor is deprecated. Use date instead.", ib("Date", !0)), mb.fn.year = ib("FullYear", !0), mb.fn.years = d("years accessor is deprecated. Use year instead.", ib("FullYear", !0)), mb.fn.days = mb.fn.day, mb.fn.months = mb.fn.month, mb.fn.weeks = mb.fn.week, mb.fn.isoWeeks = mb.fn.isoWeek, mb.fn.quarters = mb.fn.quarter, mb.fn.toJSON = mb.fn.toISOString, j(mb.duration.fn = i.prototype, {
    _bubble: function () {
      var a, b, c, d, e = this._milliseconds, f = this._days, g = this._months, h = this._data;
      h.milliseconds = e % 1e3, a = l(e / 1e3), h.seconds = a % 60, b = l(a / 60), h.minutes = b % 60, c = l(b / 60), h.hours = c % 24, f += l(c / 24), h.days = f % 30, g += l(f / 30), h.months = g % 12, d = l(g / 12), h.years = d
    }, weeks: function () {
      return l(this.days() / 7)
    }, valueOf: function () {
      return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12)
    }, humanize: function (a) {
      var b = +this, c = ab(b, !a, this.lang());
      return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
    }, add: function (a, b) {
      var c = mb.duration(a, b);
      return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
    }, subtract: function (a, b) {
      var c = mb.duration(a, b);
      return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
    }, get: function (a) {
      return a = r(a), this[a.toLowerCase() + "s"]()
    }, as: function (a) {
      return a = r(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
    }, lang: mb.fn.lang, toIsoString: function () {
      var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
      return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
    }
  });
  for (ob in ac)ac.hasOwnProperty(ob) && (kb(ob, ac[ob]), jb(ob.toLowerCase()));
  kb("Weeks", 6048e5), mb.duration.fn.asMonths = function () {
    return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
  }, mb.lang("en", {
    ordinal: function (a) {
      var b = a % 10, c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
      return a + c
    }
  }), Bb ? module.exports = mb : "function" == typeof define && define.amd ? (define("moment", function (a, b, c) {
    return c.config && c.config() && c.config().noGlobal === !0 && (qb.moment = nb), mb
  }), lb(!0)) : lb()
}).call(this);

/*!
 * FullCalendar v2.0.2 & Google Calendar Extension
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function (t) {
  "function" == typeof define && define.amd ? define(["jquery", "moment"], t) : t(jQuery, moment)
})(function (t, e) {
  function n(t, e) {
    return e.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
  }

  function r(t, e) {
    var n = e.longDateFormat("L");
    return n = n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), t.isRTL ? n += " ddd" : n = "ddd " + n, n
  }

  function a(t) {
    o(xe, t)
  }

  function o(e) {
    function n(n, r) {
      t.isPlainObject(r) && t.isPlainObject(e[n]) && !i(n) ? e[n] = o({}, e[n], r) : void 0 !== r && (e[n] = r)
    }

    for (var r = 1; arguments.length > r; r++)t.each(arguments[r], n);
    return e
  }

  function i(t) {
    return /(Time|Duration)$/.test(t)
  }

  function s(n, r) {
    function a(t) {
      se ? f() && (b(), m(t)) : i()
    }

    function i() {
      le = ne.theme ? "ui" : "fc", n.addClass("fc"), ne.isRTL ? n.addClass("fc-rtl") : n.addClass("fc-ltr"), ne.theme && n.addClass("ui-widget"), se = t("<div class='fc-content' />").prependTo(n), oe = new l(te, ne), ie = oe.render(), ie && n.prepend(ie), h(ne.defaultView), ne.handleWindowResize && t(window).resize(w), v() || s()
    }

    function s() {
      setTimeout(function () {
        !ce.start && v() && g()
      }, 0)
    }

    function d() {
      ce && (Q("viewDestroy", ce, ce, ce.element), ce.triggerEventDestroy()), t(window).unbind("resize", w), ne.droppable && t(document).off("dragstart", J).off("dragstop", K), ce.selectionManagerDestroy && ce.selectionManagerDestroy(), oe.destroy(), se.remove(), n.removeClass("fc fc-ltr fc-rtl ui-widget")
    }

    function f() {
      return n.is(":visible")
    }

    function v() {
      return t("body").is(":visible")
    }

    function h(t) {
      ce && t == ce.name || p(t)
    }

    function p(e) {
      ye++, ce && (Q("viewDestroy", ce, ce, ce.element), N(), ce.triggerEventDestroy(), $(), ce.element.remove(), oe.deactivateButton(ce.name)), oe.activateButton(e), ce = new _e[e](t("<div class='fc-view fc-view-" + e + "' />").appendTo(se), te), g(), V(), ye--
    }

    function g(t) {
      ce.start && !t && fe.isWithin(ce.intervalStart, ce.intervalEnd) || f() && m(t)
    }

    function m(t) {
      ye++, ce.start && (Q("viewDestroy", ce, ce, ce.element), N(), x()), $(), t && (fe = ce.incrementDate(fe, t)), ce.render(fe.clone()), D(), V(), (ce.afterRender || k)(), H(), F(), Q("viewRender", ce, ce, ce.element), ye--, M()
    }

    function y() {
      f() && (N(), x(), b(), D(), S())
    }

    function b() {
      ue = ne.contentHeight ? ne.contentHeight : ne.height ? ne.height - (ie ? ie.height() : 0) - T(se) : Math.round(se.width() / Math.max(ne.aspectRatio, .5))
    }

    function D() {
      void 0 === ue && b(), ye++, ce.setHeight(ue), ce.setWidth(se.width()), ye--, de = n.outerWidth()
    }

    function w(t) {
      if (!ye && t.target === window)if (ce.start) {
        var e = ++me;
        setTimeout(function () {
          e == me && !ye && f() && de != (de = n.outerWidth()) && (ye++, y(), ce.trigger("windowResize", ge), ye--)
        }, ne.windowResizeDelay)
      } else s()
    }

    function C() {
      x(), z()
    }

    function E(t) {
      x(), S(t)
    }

    function S(t) {
      f() && (ce.renderEvents(be, t), ce.trigger("eventAfterAllRender"))
    }

    function x() {
      ce.triggerEventDestroy(), ce.clearEvents(), ce.clearEventData()
    }

    function M() {
      !ne.lazyFetching || he(ce.start, ce.end) ? z() : S()
    }

    function z() {
      pe(ce.start, ce.end)
    }

    function R(t) {
      be = t, S()
    }

    function _(t) {
      E(t)
    }

    function H() {
      oe.updateTitle(ce.title)
    }

    function F() {
      var t = te.getNow();
      t.isWithin(ce.intervalStart, ce.intervalEnd) ? oe.disableButton("today") : oe.enableButton("today")
    }

    function A(t, e) {
      ce.select(t, e)
    }

    function N() {
      ce && ce.unselect()
    }

    function Y() {
      g(-1)
    }

    function O() {
      g(1)
    }

    function W() {
      fe.add("years", -1), g()
    }

    function L() {
      fe.add("years", 1), g()
    }

    function Z() {
      fe = te.getNow(), g()
    }

    function P(t) {
      fe = te.moment(t), g()
    }

    function j(t) {
      fe.add(e.duration(t)), g()
    }

    function q() {
      return fe.clone()
    }

    function $() {
      se.css({width: "100%", height: se.height(), overflow: "hidden"})
    }

    function V() {
      se.css({width: "", height: "", overflow: ""})
    }

    function X() {
      return te
    }

    function U() {
      return ce
    }

    function G(t, e) {
      return void 0 === e ? ne[t] : (("height" == t || "contentHeight" == t || "aspectRatio" == t) && (ne[t] = e, y()), void 0)
    }

    function Q(t, e) {
      return ne[t] ? ne[t].apply(e || ge, Array.prototype.slice.call(arguments, 2)) : void 0
    }

    function J(e, n) {
      var r = e.target, a = t(r);
      if (!a.parents(".fc").length) {
        var o = ne.dropAccept;
        (t.isFunction(o) ? o.call(r, a) : a.is(o)) && (ve = r, ce.dragStart(ve, e, n))
      }
    }

    function K(t, e) {
      ve && (ce.dragStop(ve, t, e), ve = null)
    }

    var te = this;
    r = r || {};
    var ee, ne = o({}, xe, r);
    ee = ne.lang in Me ? Me[ne.lang] : Me[xe.lang], ee && (ne = o({}, xe, ee, r)), ne.isRTL && (ne = o({}, xe, ze, ee || {}, r)), te.options = ne, te.render = a, te.destroy = d, te.refetchEvents = C, te.reportEvents = R, te.reportEventChange = _, te.rerenderEvents = E, te.changeView = h, te.select = A, te.unselect = N, te.prev = Y, te.next = O, te.prevYear = W, te.nextYear = L, te.today = Z, te.gotoDate = P, te.incrementDate = j, te.getDate = q, te.getCalendar = X, te.getView = U, te.option = G, te.trigger = Q;
    var re = u(e.langData(ne.lang));
    if (ne.monthNames && (re._months = ne.monthNames), ne.monthNamesShort && (re._monthsShort = ne.monthNamesShort), ne.dayNames && (re._weekdays = ne.dayNames), ne.dayNamesShort && (re._weekdaysShort = ne.dayNamesShort), null != ne.firstDay) {
      var ae = u(re._week);
      ae.dow = ne.firstDay, re._week = ae
    }
    te.defaultAllDayEventDuration = e.duration(ne.defaultAllDayEventDuration), te.defaultTimedEventDuration = e.duration(ne.defaultTimedEventDuration), te.moment = function () {
      var t;
      return "local" === ne.timezone ? (t = Re.moment.apply(null, arguments), t.hasTime() && t.local()) : t = "UTC" === ne.timezone ? Re.moment.utc.apply(null, arguments) : Re.moment.parseZone.apply(null, arguments), t._lang = re, t
    }, te.getIsAmbigTimezone = function () {
      return "local" !== ne.timezone && "UTC" !== ne.timezone
    }, te.rezoneDate = function (t) {
      return te.moment(t.toArray())
    }, te.getNow = function () {
      var t = ne.now;
      return "function" == typeof t && (t = t()), te.moment(t)
    }, te.calculateWeekNumber = function (t) {
      var e = ne.weekNumberCalculation;
      return "function" == typeof e ? e(t) : "local" === e ? t.week() : "ISO" === e.toUpperCase() ? t.isoWeek() : void 0
    }, te.getEventEnd = function (t) {
      return t.end ? t.end.clone() : te.getDefaultEventEnd(t.allDay, t.start)
    }, te.getDefaultEventEnd = function (t, e) {
      var n = e.clone();
      return t ? n.stripTime().add(te.defaultAllDayEventDuration) : n.add(te.defaultTimedEventDuration), te.getIsAmbigTimezone() && n.stripZone(), n
    }, te.formatRange = function (t, e, n) {
      return "function" == typeof n && (n = n.call(te, ne, re)), I(t, e, n, null, ne.isRTL)
    }, te.formatDate = function (t, e) {
      return "function" == typeof e && (e = e.call(te, ne, re)), B(t, e)
    }, c.call(te, ne);
    var oe, ie, se, le, ce, de, ue, fe, ve, he = te.isFetchNeeded, pe = te.fetchEvents, ge = n[0], me = 0, ye = 0, be = [];
    fe = null != ne.defaultDate ? te.moment(ne.defaultDate) : te.getNow(), ne.droppable && t(document).on("dragstart", J).on("dragstop", K)
  }

  function l(e, n) {
    function r() {
      f = n.theme ? "ui" : "fc";
      var e = n.header;
      return e ? v = t("<table class='fc-header' style='width:100%'/>").append(t("<tr/>").append(o("left")).append(o("center")).append(o("right"))) : void 0
    }

    function a() {
      v.remove()
    }

    function o(r) {
      var a = t("<td class='fc-header-" + r + "'/>"), o = n.header[r];
      return o && t.each(o.split(" "), function (r) {
        r > 0 && a.append("<span class='fc-header-space'/>");
        var o;
        t.each(this.split(","), function (r, i) {
          if ("title" == i)a.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"), o && o.addClass(f + "-corner-right"), o = null; else {
            var s;
            if (e[i] ? s = e[i] : _e[i] && (s = function () {
                h.removeClass(f + "-state-hover"), e.changeView(i)
              }), s) {
              var l, c = z(n.themeButtonIcons, i), d = z(n.buttonIcons, i), u = z(n.defaultButtonText, i), v = z(n.buttonText, i);
              l = v ? R(v) : c && n.theme ? "<span class='ui-icon ui-icon-" + c + "'></span>" : d && !n.theme ? "<span class='fc-icon fc-icon-" + d + "'></span>" : R(u || i);
              var h = t("<span class='fc-button fc-button-" + i + " " + f + "-state-default'>" + l + "</span>").click(function () {
                h.hasClass(f + "-state-disabled") || s()
              }).mousedown(function () {
                h.not("." + f + "-state-active").not("." + f + "-state-disabled").addClass(f + "-state-down")
              }).mouseup(function () {
                h.removeClass(f + "-state-down")
              }).hover(function () {
                h.not("." + f + "-state-active").not("." + f + "-state-disabled").addClass(f + "-state-hover")
              }, function () {
                h.removeClass(f + "-state-hover").removeClass(f + "-state-down")
              }).appendTo(a);
              H(h), o || h.addClass(f + "-corner-left"), o = h
            }
          }
        }), o && o.addClass(f + "-corner-right")
      }), a
    }

    function i(t) {
      v.find("h2").html(t)
    }

    function s(t) {
      v.find("span.fc-button-" + t).addClass(f + "-state-active")
    }

    function l(t) {
      v.find("span.fc-button-" + t).removeClass(f + "-state-active")
    }

    function c(t) {
      v.find("span.fc-button-" + t).addClass(f + "-state-disabled")
    }

    function d(t) {
      v.find("span.fc-button-" + t).removeClass(f + "-state-disabled")
    }

    var u = this;
    u.render = r, u.destroy = a, u.updateTitle = i, u.activateButton = s, u.deactivateButton = l, u.disableButton = c, u.enableButton = d;
    var f, v = t([])
  }

  function c(e) {
    function n(t, e) {
      return !E || t.clone().stripZone() < E.clone().stripZone() || e.clone().stripZone() > S.clone().stripZone()
    }

    function r(t, e) {
      E = t, S = e, O = [];
      var n = ++H, r = _.length;
      F = r;
      for (var o = 0; r > o; o++)a(_[o], n)
    }

    function a(e, n) {
      o(e, function (r) {
        var a, o, i = t.isArray(e.events);
        if (n == H) {
          if (r)for (a = 0; r.length > a; a++)o = r[a], i || (o = D(o, e)), o && O.push(o);
          F--, F || M(O)
        }
      })
    }

    function o(n, r) {
      var a, i, s = Re.sourceFetchers;
      for (a = 0; s.length > a; a++) {
        if (i = s[a].call(C, n, E.clone(), S.clone(), e.timezone, r), i === !0)return;
        if ("object" == typeof i)return o(i, r), void 0
      }
      var l = n.events;
      if (l)t.isFunction(l) ? (y(), l.call(C, E.clone(), S.clone(), e.timezone, function (t) {
        r(t), b()
      })) : t.isArray(l) ? r(l) : r(); else {
        var c = n.url;
        if (c) {
          var d, u = n.success, f = n.error, v = n.complete;
          d = t.isFunction(n.data) ? n.data() : n.data;
          var h = t.extend({}, d || {}), p = Y(n.startParam, e.startParam), g = Y(n.endParam, e.endParam), m = Y(n.timezoneParam, e.timezoneParam);
          p && (h[p] = E.format()), g && (h[g] = S.format()), e.timezone && "local" != e.timezone && (h[m] = e.timezone), y(), t.ajax(t.extend({}, He, n, {
            data: h,
            success: function (e) {
              e = e || [];
              var n = N(u, this, arguments);
              t.isArray(n) && (e = n), r(e)
            },
            error: function () {
              N(f, this, arguments), r()
            },
            complete: function () {
              N(v, this, arguments), b()
            }
          }))
        } else r()
      }
    }

    function i(t) {
      var e = s(t);
      e && (_.push(e), F++, a(e, H))
    }

    function s(e) {
      var n, r, a = Re.sourceNormalizers;
      if (t.isFunction(e) || t.isArray(e) ? n = {events: e} : "string" == typeof e ? n = {url: e} : "object" == typeof e && (n = t.extend({}, e), "string" == typeof n.className && (n.className = n.className.split(/\s+/))), n) {
        for (t.isArray(n.events) && (n.events = t.map(n.events, function (t) {
          return D(t, n)
        })), r = 0; a.length > r; r++)a[r].call(C, n);
        return n
      }
    }

    function l(e) {
      _ = t.grep(_, function (t) {
        return !c(t, e)
      }), O = t.grep(O, function (t) {
        return !c(t.source, e)
      }), M(O)
    }

    function c(t, e) {
      return t && e && u(t) == u(e)
    }

    function u(t) {
      return ("object" == typeof t ? t.events || t.url : "") || t
    }

    function f(t) {
      t.start = C.moment(t.start), t.end && (t.end = C.moment(t.end)), w(t), h(t), M(O)
    }

    function h(t) {
      var e, n, r, a;
      for (e = 0; O.length > e; e++)if (n = O[e], n._id == t._id && n !== t)for (r = 0; W.length > r; r++)a = W[r], void 0 !== t[a] && (n[a] = t[a])
    }

    function p(t, e) {
      var n = D(t);
      n && (n.source || (e && (R.events.push(n), n.source = R), O.push(n)), M(O))
    }

    function g(e) {
      var n, r;
      for (null == e ? e = function () {
        return !0
      } : t.isFunction(e) || (n = e + "", e = function (t) {
        return t._id == n
      }), O = t.grep(O, e, !0), r = 0; _.length > r; r++)t.isArray(_[r].events) && (_[r].events = t.grep(_[r].events, e, !0));
      M(O)
    }

    function m(e) {
      return t.isFunction(e) ? t.grep(O, e) : null != e ? (e += "", t.grep(O, function (t) {
        return t._id == e
      })) : O
    }

    function y() {
      A++ || k("loading", null, !0, x())
    }

    function b() {
      --A || k("loading", null, !1, x())
    }

    function D(n, r) {
      var a, o, i, s, l = {};
      return e.eventDataTransform && (n = e.eventDataTransform(n)), r && r.eventDataTransform && (n = r.eventDataTransform(n)), a = C.moment(n.start || n.date), a.isValid() && (o = null, !n.end || (o = C.moment(n.end), o.isValid())) ? (i = n.allDay, void 0 === i && (s = Y(r ? r.allDayDefault : void 0, e.allDayDefault), i = void 0 !== s ? s : !(a.hasTime() || o && o.hasTime())), i ? (a.hasTime() && a.stripTime(), o && o.hasTime() && o.stripTime()) : (a.hasTime() || (a = C.rezoneDate(a)), o && !o.hasTime() && (o = C.rezoneDate(o))), t.extend(l, n), r && (l.source = r), l._id = n._id || (void 0 === n.id ? "_fc" + Fe++ : n.id + ""), l.className = n.className ? "string" == typeof n.className ? n.className.split(/\s+/) : n.className : [], l.allDay = i, l.start = a, l.end = o, e.forceEventDuration && !l.end && (l.end = z(l)), d(l), l) : void 0
    }

    function w(t, e, n) {
      var r, a, o, i, s = t._allDay, l = t._start, c = t._end, d = !1;
      return e || n || (e = t.start, n = t.end), r = t.allDay != s ? t.allDay : !(e || n).hasTime(), r && (e && (e = e.clone().stripTime()), n && (n = n.clone().stripTime())), e && (a = r ? v(e, l.clone().stripTime()) : v(e, l)), r != s ? d = !0 : n && (o = v(n || C.getDefaultEventEnd(r, e || l), e || l).subtract(v(c || C.getDefaultEventEnd(s, l), l))), i = T(m(t._id), d, r, a, o), {
        dateDelta: a,
        durationDelta: o,
        undo: i
      }
    }

    function T(n, r, a, o, i) {
      var s = C.getIsAmbigTimezone(), l = [];
      return t.each(n, function (t, n) {
        var c = n._allDay, u = n._start, f = n._end, v = null != a ? a : c, h = u.clone(), p = !r && f ? f.clone() : null;
        v ? (h.stripTime(), p && p.stripTime()) : (h.hasTime() || (h = C.rezoneDate(h)), p && !p.hasTime() && (p = C.rezoneDate(p))), p || !e.forceEventDuration && !+i || (p = C.getDefaultEventEnd(v, h)), h.add(o), p && p.add(o).add(i), s && (+o || +i) && (h.stripZone(), p && p.stripZone()), n.allDay = v, n.start = h, n.end = p, d(n), l.push(function () {
          n.allDay = c, n.start = u, n.end = f, d(n)
        })
      }), function () {
        for (var t = 0; l.length > t; t++)l[t]()
      }
    }

    var C = this;
    C.isFetchNeeded = n, C.fetchEvents = r, C.addEventSource = i, C.removeEventSource = l, C.updateEvent = f, C.renderEvent = p, C.removeEvents = g, C.clientEvents = m, C.mutateEvent = w;
    var E, S, k = C.trigger, x = C.getView, M = C.reportEvents, z = C.getEventEnd, R = {events: []}, _ = [R], H = 0, F = 0, A = 0, O = [];
    t.each((e.events ? [e.events] : []).concat(e.eventSources || []), function (t, e) {
      var n = s(e);
      n && _.push(n)
    });
    var W = ["title", "url", "allDay", "className", "editable", "color", "backgroundColor", "borderColor", "textColor"]
  }

  function d(t) {
    t._allDay = t.allDay, t._start = t.start.clone(), t._end = t.end ? t.end.clone() : null
  }

  function u(t) {
    var e = function () {
    };
    return e.prototype = t, new e
  }

  function f(t, e) {
    for (var n in e)e.hasOwnProperty(n) && (t[n] = e[n])
  }

  function v(t, n) {
    return e.duration({days: t.clone().stripTime().diff(n.clone().stripTime(), "days"), ms: t.time() - n.time()})
  }

  function h(t) {
    return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
  }

  function p(e, n, r) {
    e.unbind("mouseover").mouseover(function (e) {
      for (var a, o, i, s = e.target; s != this;)a = s, s = s.parentNode;
      void 0 !== (o = a._fci) && (a._fci = void 0, i = n[o], r(i.event, i.element, i), t(e.target).trigger(e)), e.stopPropagation()
    })
  }

  function g(e, n, r) {
    for (var a, o = 0; e.length > o; o++)a = t(e[o]), a.width(Math.max(0, n - y(a, r)))
  }

  function m(e, n, r) {
    for (var a, o = 0; e.length > o; o++)a = t(e[o]), a.height(Math.max(0, n - T(a, r)))
  }

  function y(t, e) {
    return b(t) + w(t) + (e ? D(t) : 0)
  }

  function b(e) {
    return (parseFloat(t.css(e[0], "paddingLeft", !0)) || 0) + (parseFloat(t.css(e[0], "paddingRight", !0)) || 0)
  }

  function D(e) {
    return (parseFloat(t.css(e[0], "marginLeft", !0)) || 0) + (parseFloat(t.css(e[0], "marginRight", !0)) || 0)
  }

  function w(e) {
    return (parseFloat(t.css(e[0], "borderLeftWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderRightWidth", !0)) || 0)
  }

  function T(t, e) {
    return C(t) + S(t) + (e ? E(t) : 0)
  }

  function C(e) {
    return (parseFloat(t.css(e[0], "paddingTop", !0)) || 0) + (parseFloat(t.css(e[0], "paddingBottom", !0)) || 0)
  }

  function E(e) {
    return (parseFloat(t.css(e[0], "marginTop", !0)) || 0) + (parseFloat(t.css(e[0], "marginBottom", !0)) || 0)
  }

  function S(e) {
    return (parseFloat(t.css(e[0], "borderTopWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderBottomWidth", !0)) || 0)
  }

  function k() {
  }

  function x(t, e) {
    return t - e
  }

  function M(t) {
    return Math.max.apply(Math, t)
  }

  function z(t, e) {
    if (t = t || {}, void 0 !== t[e])return t[e];
    for (var n, r = e.split(/(?=[A-Z])/), a = r.length - 1; a >= 0; a--)if (n = t[r[a].toLowerCase()], void 0 !== n)return n;
    return t["default"]
  }

  function R(t) {
    return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
  }

  function _(t) {
    return t.replace(/&.*?;/g, "")
  }

  function H(t) {
    t.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function () {
      return !1
    })
  }

  function F(t) {
    t.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
  }

  function A(t, e) {
    var n = t.source || {}, r = t.color, a = n.color, o = e("eventColor"), i = t.backgroundColor || r || n.backgroundColor || a || e("eventBackgroundColor") || o, s = t.borderColor || r || n.borderColor || a || e("eventBorderColor") || o, l = t.textColor || n.textColor || e("eventTextColor"), c = [];
    return i && c.push("background-color:" + i), s && c.push("border-color:" + s), l && c.push("color:" + l), c.join(";")
  }

  function N(e, n, r) {
    if (t.isFunction(e) && (e = [e]), e) {
      var a, o;
      for (a = 0; e.length > a; a++)o = e[a].apply(n, r) || o;
      return o
    }
  }

  function Y() {
    for (var t = 0; arguments.length > t; t++)if (void 0 !== arguments[t])return arguments[t]
  }

  function O(n, r, a) {
    var o, i, s, l, c = n[0], d = 1 == n.length && "string" == typeof c;
    return e.isMoment(c) ? (l = e.apply(null, n), c._ambigTime && (l._ambigTime = !0), c._ambigZone && (l._ambigZone = !0)) : h(c) || void 0 === c ? l = e.apply(null, n) : (o = !1, i = !1, d ? Ne.test(c) ? (c += "-01", n = [c], o = !0, i = !0) : (s = Ye.exec(c)) && (o = !s[5], i = !0) : t.isArray(c) && (i = !0), l = r ? e.utc.apply(e, n) : e.apply(null, n), o ? (l._ambigTime = !0, l._ambigZone = !0) : a && (i ? l._ambigZone = !0 : d && l.zone(c))), new W(l)
  }

  function W(t) {
    f(this, t)
  }

  function L(t) {
    var e, n = [], r = !1, a = !1;
    for (e = 0; t.length > e; e++)n.push(Re.moment(t[e])), r = r || n[e]._ambigTime, a = a || n[e]._ambigZone;
    for (e = 0; n.length > e; e++)r ? n[e].stripTime() : a && n[e].stripZone();
    return n
  }

  function Z(t, n) {
    return e.fn.format.call(t, n)
  }

  function B(t, e) {
    return P(t, V(e))
  }

  function P(t, e) {
    var n, r = "";
    for (n = 0; e.length > n; n++)r += j(t, e[n]);
    return r
  }

  function j(t, e) {
    var n, r;
    return "string" == typeof e ? e : (n = e.token) ? Oe[n] ? Oe[n](t) : Z(t, n) : e.maybe && (r = P(t, e.maybe), r.match(/[1-9]/)) ? r : ""
  }

  function I(t, e, n, r, a) {
    return t = Re.moment.parseZone(t), e = Re.moment.parseZone(e), n = t.lang().longDateFormat(n) || n, r = r || " - ", q(t, e, V(n), r, a)
  }

  function q(t, e, n, r, a) {
    var o, i, s, l, c = "", d = "", u = "", f = "", v = "";
    for (i = 0; n.length > i && (o = $(t, e, n[i]), o !== !1); i++)c += o;
    for (s = n.length - 1; s > i && (o = $(t, e, n[s]), o !== !1); s--)d = o + d;
    for (l = i; s >= l; l++)u += j(t, n[l]), f += j(e, n[l]);
    return (u || f) && (v = a ? f + r + u : u + r + f), c + v + d
  }

  function $(t, e, n) {
    var r, a;
    return "string" == typeof n ? n : (r = n.token) && (a = We[r.charAt(0)], a && t.isSame(e, a)) ? Z(t, r) : !1
  }

  function V(t) {
    return t in Le ? Le[t] : Le[t] = X(t)
  }

  function X(t) {
    for (var e, n = [], r = /\[([^\]]*)\]|\(([^\)]*)\)|(LT|(\w)\4*o?)|([^\w\[\(]+)/g; e = r.exec(t);)e[1] ? n.push(e[1]) : e[2] ? n.push({maybe: X(e[2])}) : e[3] ? n.push({token: e[3]}) : e[5] && n.push(e[5]);
    return n
  }

  function U(t, e) {
    function n(t, e) {
      return t.clone().stripTime().add("months", e).startOf("month")
    }

    function r(t) {
      a.intervalStart = t.clone().stripTime().startOf("month"), a.intervalEnd = a.intervalStart.clone().add("months", 1), a.start = a.intervalStart.clone(), a.start = a.skipHiddenDays(a.start), a.start.startOf("week"), a.start = a.skipHiddenDays(a.start), a.end = a.intervalEnd.clone(), a.end = a.skipHiddenDays(a.end, -1, !0), a.end.add("days", (7 - a.end.weekday()) % 7), a.end = a.skipHiddenDays(a.end, -1, !0);
      var n = Math.ceil(a.end.diff(a.start, "weeks", !0));
      "fixed" == a.opt("weekMode") && (a.end.add("weeks", 6 - n), n = 6), a.title = e.formatDate(a.intervalStart, a.opt("titleFormat")), a.renderBasic(n, a.getCellsPerWeek(), !0)
    }

    var a = this;
    a.incrementDate = n, a.render = r, J.call(a, t, e, "month")
  }

  function G(t, e) {
    function n(t, e) {
      return t.clone().stripTime().add("weeks", e).startOf("week")
    }

    function r(t) {
      a.intervalStart = t.clone().stripTime().startOf("week"), a.intervalEnd = a.intervalStart.clone().add("weeks", 1), a.start = a.skipHiddenDays(a.intervalStart), a.end = a.skipHiddenDays(a.intervalEnd, -1, !0), a.title = e.formatRange(a.start, a.end.clone().subtract(1), a.opt("titleFormat"), " — "), a.renderBasic(1, a.getCellsPerWeek(), !1)
    }

    var a = this;
    a.incrementDate = n, a.render = r, J.call(a, t, e, "basicWeek")
  }

  function Q(t, e) {
    function n(t, e) {
      var n = t.clone().stripTime().add("days", e);
      return n = a.skipHiddenDays(n, 0 > e ? -1 : 1)
    }

    function r(t) {
      a.start = a.intervalStart = t.clone().stripTime(), a.end = a.intervalEnd = a.start.clone().add("days", 1), a.title = e.formatDate(a.start, a.opt("titleFormat")), a.renderBasic(1, 1, !1)
    }

    var a = this;
    a.incrementDate = n, a.render = r, J.call(a, t, e, "basicDay")
  }

  function J(e, n, r) {
    function a(t, e, n) {
      U = t, G = e, Q = n, o(), W || i(), s()
    }

    function o() {
      re = ie("theme") ? "ui" : "fc", ae = ie("columnFormat"), oe = ie("weekNumbers")
    }

    function i() {
      I = t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(e)
    }

    function s() {
      var n = l();
      N && N.remove(), N = t(n).appendTo(e), Y = N.find("thead"), O = Y.find(".fc-day-header"), W = N.find("tbody"), L = W.find("tr"), Z = W.find(".fc-day"), B = L.find("td:first-child"), P = L.eq(0).find(".fc-day > div"), j = L.eq(0).find(".fc-day-content > div"), F(Y.add(Y.find("tr"))), F(L), L.eq(0).addClass("fc-first"), L.filter(":last").addClass("fc-last"), Z.each(function (e, n) {
        var r = ue(Math.floor(e / G), e % G);
        se("dayRender", A, r, t(n))
      }), h(Z)
    }

    function l() {
      var t = "<table class='fc-border-separate' style='width:100%' cellspacing='0'>" + c() + d() + "</table>";
      return t
    }

    function c() {
      var t, e, n = re + "-widget-header", r = "";
      for (r += "<thead><tr>", oe && (r += "<th class='fc-week-number " + n + "'>" + R(ie("weekNumberTitle")) + "</th>"), t = 0; G > t; t++)e = ue(0, t), r += "<th class='fc-day-header fc-" + Ae[e.day()] + " " + n + "'>" + R(he(e, ae)) + "</th>";
      return r += "</tr></thead>"
    }

    function d() {
      var t, e, n, r = re + "-widget-content", a = "";
      for (a += "<tbody>", t = 0; U > t; t++) {
        for (a += "<tr class='fc-week'>", oe && (n = ue(t, 0), a += "<td class='fc-week-number " + r + "'>" + "<div>" + R(pe(n)) + "</div>" + "</td>"), e = 0; G > e; e++)n = ue(t, e), a += u(n);
        a += "</tr>"
      }
      return a += "</tbody>"
    }

    function u(t) {
      var e = A.intervalStart.month(), r = n.getNow().stripTime(), a = "", o = re + "-widget-content", i = ["fc-day", "fc-" + Ae[t.day()], o];
      return t.month() != e && i.push("fc-other-month"), t.isSame(r, "day") ? i.push("fc-today", re + "-state-highlight") : r > t ? i.push("fc-past") : i.push("fc-future"), a += "<td class='" + i.join(" ") + "'" + " data-date='" + t.format() + "'" + ">" + "<div>", Q && (a += "<div class='fc-day-number'>" + t.date() + "</div>"), a += "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"
    }

    function f(e) {
      $ = e;
      var n, r, a, o = Math.max($ - Y.height(), 0);
      "variable" == ie("weekMode") ? n = r = Math.floor(o / (1 == U ? 2 : 6)) : (n = Math.floor(o / U), r = o - n * (U - 1)), B.each(function (e, o) {
        U > e && (a = t(o), a.find("> div").css("min-height", (e == U - 1 ? r : n) - T(a)))
      })
    }

    function v(t) {
      q = t, ee.clear(), ne.clear(), X = 0, oe && (X = Y.find("th.fc-week-number").outerWidth()), V = Math.floor((q - X) / G), g(O.slice(0, -1), V)
    }

    function h(t) {
      t.click(p).mousedown(de)
    }

    function p(e) {
      if (!ie("selectable")) {
        var r = n.moment(t(this).data("date"));
        se("dayClick", this, r, e)
      }
    }

    function m(t, e, n) {
      n && J.build();
      for (var r = ve(t, e), a = 0; r.length > a; a++) {
        var o = r[a];
        h(y(o.row, o.leftCol, o.row, o.rightCol))
      }
    }

    function y(t, n, r, a) {
      var o = J.rect(t, n, r, a, e);
      return le(o, e)
    }

    function b(t) {
      return t.clone().stripTime().add("days", 1)
    }

    function D(t, e) {
      m(t, e, !0)
    }

    function w() {
      ce()
    }

    function C(t, e) {
      var n = fe(t), r = Z[n.row * G + n.col];
      se("dayClick", r, t, e)
    }

    function E(t, e) {
      te.start(function (t) {
        if (ce(), t) {
          var e = ue(t), r = e.clone().add(n.defaultAllDayEventDuration);
          m(e, r)
        }
      }, e)
    }

    function S(t, e, n) {
      var r = te.stop();
      ce(), r && se("drop", t, ue(r), e, n)
    }

    function k(t) {
      return ee.left(t)
    }

    function x(t) {
      return ee.right(t)
    }

    function M(t) {
      return ne.left(t)
    }

    function z(t) {
      return ne.right(t)
    }

    function _(t) {
      return L.eq(t)
    }

    var A = this;
    A.renderBasic = a, A.setHeight = f, A.setWidth = v, A.renderDayOverlay = m, A.defaultSelectionEnd = b, A.renderSelection = D, A.clearSelection = w, A.reportDayClick = C, A.dragStart = E, A.dragStop = S, A.getHoverListener = function () {
      return te
    }, A.colLeft = k, A.colRight = x, A.colContentLeft = M, A.colContentRight = z, A.getIsCellAllDay = function () {
      return !0
    }, A.allDayRow = _, A.getRowCnt = function () {
      return U
    }, A.getColCnt = function () {
      return G
    }, A.getColWidth = function () {
      return V
    }, A.getDaySegmentContainer = function () {
      return I
    }, ge.call(A, e, n, r), Te.call(A), we.call(A), K.call(A);
    var N, Y, O, W, L, Z, B, P, j, I, q, $, V, X, U, G, Q, J, te, ee, ne, re, ae, oe, ie = A.opt, se = A.trigger, le = A.renderOverlay, ce = A.clearOverlays, de = A.daySelectionMousedown, ue = A.cellToDate, fe = A.dateToCell, ve = A.rangeToSegments, he = n.formatDate, pe = n.calculateWeekNumber;
    H(e.addClass("fc-grid")), J = new Ce(function (e, n) {
      var r, a, o;
      O.each(function (e, i) {
        r = t(i), a = r.offset().left, e && (o[1] = a), o = [a], n[e] = o
      }), o[1] = a + r.outerWidth(), L.each(function (n, i) {
        U > n && (r = t(i), a = r.offset().top, n && (o[1] = a), o = [a], e[n] = o)
      }), o[1] = a + r.outerHeight()
    }), te = new Ee(J), ee = new ke(function (t) {
      return P.eq(t)
    }), ne = new ke(function (t) {
      return j.eq(t)
    })
  }

  function K() {
    function t(t, e) {
      n.renderDayEvents(t, e)
    }

    function e() {
      n.getDaySegmentContainer().empty()
    }

    var n = this;
    n.renderEvents = t, n.clearEvents = e, me.call(n)
  }

  function te(t, e) {
    function n(t, e) {
      return t.clone().stripTime().add("weeks", e).startOf("week")
    }

    function r(t) {
      a.intervalStart = t.clone().stripTime().startOf("week"), a.intervalEnd = a.intervalStart.clone().add("weeks", 1), a.start = a.skipHiddenDays(a.intervalStart), a.end = a.skipHiddenDays(a.intervalEnd, -1, !0), a.title = e.formatRange(a.start, a.end.clone().subtract(1), a.opt("titleFormat"), " — "), a.renderAgenda(a.getCellsPerWeek())
    }

    var a = this;
    a.incrementDate = n, a.render = r, ae.call(a, t, e, "agendaWeek")
  }

  function ee(t, e) {
    function n(t, e) {
      var n = t.clone().stripTime().add("days", e);
      return n = a.skipHiddenDays(n, 0 > e ? -1 : 1)
    }

    function r(t) {
      a.start = a.intervalStart = t.clone().stripTime(), a.end = a.intervalEnd = a.start.clone().add("days", 1), a.title = e.formatDate(a.start, a.opt("titleFormat")), a.renderAgenda(1)
    }

    var a = this;
    a.incrementDate = n, a.render = r, ae.call(a, t, e, "agendaDay")
  }

  function ne(t, e) {
    return e.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
  }

  function re(t, e) {
    return e.longDateFormat("LT").replace(/\s*a$/i, "")
  }

  function ae(n, r, a) {
    function o(t) {
      xe = t, i(), $ ? l() : s()
    }

    function i() {
      Fe = Le("theme") ? "ui" : "fc", Ne = Le("isRTL"), We = Le("columnFormat"), Ye = e.duration(Le("minTime")), Oe = e.duration(Le("maxTime")), me = e.duration(Le("slotDuration")), be = Le("snapDuration"), be = be ? e.duration(be) : me
    }

    function s() {
      var r, a, o, i, s = Fe + "-widget-header", c = Fe + "-widget-content", d = 0 === me.asMinutes() % 15;
      for (l(), ee = t("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n), Le("allDaySlot") ? (ne = t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ee), r = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + s + " fc-agenda-axis'>" + (Le("allDayHTML") || R(Le("allDayText"))) + "</th>" + "<td>" + "<div class='fc-day-content'><div style='position:relative'/></div>" + "</td>" + "<th class='" + s + " fc-agenda-gutter'>&nbsp;</th>" + "</tr>" + "</table>", re = t(r).appendTo(ee), ae = re.find("tr"), y(ae.find("td")), ee.append("<div class='fc-agenda-divider " + s + "'>" + "<div class='fc-agenda-divider-inner'/>" + "</div>")) : ne = t([]), ie = t("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(ee), se = t("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(ie), le = t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(se), r = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>", a = e.duration(+Ye), Me = 0; Oe > a;)o = q.start.clone().time(a), i = o.minutes(), r += "<tr class='fc-slot" + Me + " " + (i ? "fc-minor" : "") + "'>" + "<th class='fc-agenda-axis " + s + "'>" + (d && i ? "&nbsp;" : R(Ge(o, Le("axisFormat")))) + "</th>" + "<td class='" + c + "'>" + "<div style='position:relative'>&nbsp;</div>" + "</td>" + "</tr>", a.add(me), Me++;
      r += "</tbody></table>", ce = t(r).appendTo(se), b(ce.find("td"))
    }

    function l() {
      var e = c();
      $ && $.remove(), $ = t(e).appendTo(n), V = $.find("thead"), X = V.find("th").slice(1, -1), U = $.find("tbody"), G = U.find("td").slice(0, -1), Q = G.find("> div"), J = G.find(".fc-day-content > div"), K = G.eq(0), te = Q.eq(0), F(V.add(V.find("tr"))), F(U.add(U.find("tr")))
    }

    function c() {
      var t = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>" + d() + u() + "</table>";
      return t
    }

    function d() {
      var t, e, n, r = Fe + "-widget-header", a = "";
      for (a += "<thead><tr>", Le("weekNumbers") ? (t = Ve(0, 0), e = Qe(t), Ne ? e += Le("weekNumberTitle") : e = Le("weekNumberTitle") + e, a += "<th class='fc-agenda-axis fc-week-number " + r + "'>" + R(e) + "</th>") : a += "<th class='fc-agenda-axis " + r + "'>&nbsp;</th>", n = 0; xe > n; n++)t = Ve(0, n), a += "<th class='fc-" + Ae[t.day()] + " fc-col" + n + " " + r + "'>" + R(Ge(t, We)) + "</th>";
      return a += "<th class='fc-agenda-gutter " + r + "'>&nbsp;</th>" + "</tr>" + "</thead>"
    }

    function u() {
      var t, e, n, a, o, i = Fe + "-widget-header", s = Fe + "-widget-content", l = r.getNow().stripTime(), c = "";
      for (c += "<tbody><tr><th class='fc-agenda-axis " + i + "'>&nbsp;</th>", n = "", e = 0; xe > e; e++)t = Ve(0, e), o = ["fc-col" + e, "fc-" + Ae[t.day()], s], t.isSame(l, "day") ? o.push(Fe + "-state-highlight", "fc-today") : l > t ? o.push("fc-past") : o.push("fc-future"), a = "<td class='" + o.join(" ") + "'>" + "<div>" + "<div class='fc-day-content'>" + "<div style='position:relative'>&nbsp;</div>" + "</div>" + "</div>" + "</td>", n += a;
      return c += n, c += "<td class='fc-agenda-gutter " + s + "'>&nbsp;</td>" + "</tr>" + "</tbody>"
    }

    function f(t) {
      void 0 === t && (t = fe), fe = t, Je = {};
      var e = U.position().top, n = ie.position().top, r = Math.min(t - e, ce.height() + n + 1);
      te.height(r - T(K)), ee.css("top", e), ie.height(r - n - 1);
      var a = ce.find("tr:first").height() + 1, o = ce.find("tr:eq(1)").height();
      ye = (a + o) / 2, De = me / be, Se = ye / De
    }

    function v(e) {
      ue = e, _e.clear(), He.clear();
      var n = V.find("th:first");
      re && (n = n.add(re.find("th:first"))), n = n.add(ce.find("th:first")), ve = 0, g(n.width("").each(function (e, n) {
        ve = Math.max(ve, t(n).outerWidth())
      }), ve);
      var r = $.find(".fc-agenda-gutter");
      re && (r = r.add(re.find("th.fc-agenda-gutter")));
      var a = ie[0].clientWidth;
      pe = ie.width() - a, pe ? (g(r, pe), r.show().prev().removeClass("fc-last")) : r.hide().prev().addClass("fc-last"), he = Math.floor((a - ve) / xe), g(X.slice(0, -1), he)
    }

    function h() {
      function t() {
        ie.scrollTop(n)
      }

      var n = Y(e.duration(Le("scrollTime"))) + 1;
      t(), setTimeout(t, 0)
    }

    function p() {
      h()
    }

    function y(t) {
      t.click(D).mousedown(qe)
    }

    function b(t) {
      t.click(D).mousedown(B)
    }

    function D(t) {
      if (!Le("selectable")) {
        var e = Math.min(xe - 1, Math.floor((t.pageX - $.offset().left - ve) / he)), n = Ve(0, e), a = this.parentNode.className.match(/fc-slot(\d+)/);
        if (a) {
          var o = parseInt(a[1], 10);
          n.add(Ye + o * me), n = r.rezoneDate(n), Ze("dayClick", G[e], n, t)
        } else Ze("dayClick", G[e], n, t)
      }
    }

    function w(t, e, n) {
      n && ze.build();
      for (var r = Ue(t, e), a = 0; r.length > a; a++) {
        var o = r[a];
        y(C(o.row, o.leftCol, o.row, o.rightCol))
      }
    }

    function C(t, e, n, r) {
      var a = ze.rect(t, e, n, r, ee);
      return Be(a, ee)
    }

    function E(t, e) {
      t = t.clone().stripZone(), e = e.clone().stripZone();
      for (var n = 0; xe > n; n++) {
        var r = Ve(0, n), a = r.clone().add("days", 1), o = t > r ? t : r, i = e > a ? a : e;
        if (i > o) {
          var s = ze.rect(0, n, 0, n, se), l = N(o, r), c = N(i, r);
          s.top = l, s.height = c - l, b(Be(s, se))
        }
      }
    }

    function S(t) {
      return _e.left(t)
    }

    function k(t) {
      return He.left(t)
    }

    function M(t) {
      return _e.right(t)
    }

    function z(t) {
      return He.right(t)
    }

    function _(t) {
      return Le("allDaySlot") && !t.row
    }

    function A(t) {
      var n = Ve(0, t.col), a = t.row;
      return Le("allDaySlot") && a--, a >= 0 && (n.time(e.duration(Ye + a * be)), n = r.rezoneDate(n)), n
    }

    function N(t, n) {
      return Y(e.duration(t.clone().stripZone() - n.clone().stripTime()))
    }

    function Y(t) {
      if (Ye > t)return 0;
      if (t >= Oe)return ce.height();
      var e = (t - Ye) / me, n = Math.floor(e), r = e - n, a = Je[n];
      void 0 === a && (a = Je[n] = ce.find("tr").eq(n).find("td div")[0].offsetTop);
      var o = a - 1 + r * ye;
      return o = Math.max(o, 0)
    }

    function O(t) {
      return t.hasTime() ? t.clone().add(me) : t.clone().add("days", 1)
    }

    function W(t, e) {
      t.hasTime() || e.hasTime() ? L(t, e) : Le("allDaySlot") && w(t, e, !0)
    }

    function L(e, n) {
      var r = Le("selectHelper");
      if (ze.build(), r) {
        var a = Xe(e).col;
        if (a >= 0 && xe > a) {
          var o = ze.rect(0, a, 0, a, se), i = N(e, e), s = N(n, e);
          if (s > i) {
            if (o.top = i, o.height = s - i, o.left += 2, o.width -= 5, t.isFunction(r)) {
              var l = r(e, n);
              l && (o.position = "absolute", de = t(l).css(o).appendTo(se))
            } else o.isStart = !0, o.isEnd = !0, de = t($e({
              title: "",
              start: e,
              end: n,
              className: ["fc-select-helper"],
              editable: !1
            }, o)), de.css("opacity", Le("dragOpacity"));
            de && (b(de), se.append(de), g(de, o.width, !0), m(de, o.height, !0))
          }
        }
      } else E(e, n)
    }

    function Z() {
      Pe(), de && (de.remove(), de = null)
    }

    function B(e) {
      if (1 == e.which && Le("selectable")) {
        Ie(e);
        var n;
        Re.start(function (t, e) {
          if (Z(), t && t.col == e.col && !_(t)) {
            var r = A(e), a = A(t);
            n = [r, r.clone().add(be), a, a.clone().add(be)].sort(x), L(n[0], n[3])
          } else n = null
        }, e), t(document).one("mouseup", function (t) {
          Re.stop(), n && (+n[0] == +n[1] && P(n[0], t), je(n[0], n[3], t))
        })
      }
    }

    function P(t, e) {
      Ze("dayClick", G[Xe(t).col], t, e)
    }

    function j(t, e) {
      Re.start(function (t) {
        if (Pe(), t) {
          var e = A(t), n = e.clone();
          e.hasTime() ? (n.add(r.defaultTimedEventDuration), E(e, n)) : (n.add(r.defaultAllDayEventDuration), w(e, n))
        }
      }, e)
    }

    function I(t, e, n) {
      var r = Re.stop();
      Pe(), r && Ze("drop", t, A(r), e, n)
    }

    var q = this;
    q.renderAgenda = o, q.setWidth = v, q.setHeight = f, q.afterRender = p, q.computeDateTop = N, q.getIsCellAllDay = _, q.allDayRow = function () {
      return ae
    }, q.getCoordinateGrid = function () {
      return ze
    }, q.getHoverListener = function () {
      return Re
    }, q.colLeft = S, q.colRight = M, q.colContentLeft = k, q.colContentRight = z, q.getDaySegmentContainer = function () {
      return ne
    }, q.getSlotSegmentContainer = function () {
      return le
    }, q.getSlotContainer = function () {
      return se
    }, q.getRowCnt = function () {
      return 1
    }, q.getColCnt = function () {
      return xe
    }, q.getColWidth = function () {
      return he
    }, q.getSnapHeight = function () {
      return Se
    }, q.getSnapDuration = function () {
      return be
    }, q.getSlotHeight = function () {
      return ye
    }, q.getSlotDuration = function () {
      return me
    }, q.getMinTime = function () {
      return Ye
    }, q.getMaxTime = function () {
      return Oe
    }, q.defaultSelectionEnd = O, q.renderDayOverlay = w, q.renderSelection = W, q.clearSelection = Z, q.reportDayClick = P, q.dragStart = j, q.dragStop = I, ge.call(q, n, r, a), Te.call(q), we.call(q), oe.call(q);
    var $, V, X, U, G, Q, J, K, te, ee, ne, re, ae, ie, se, le, ce, de, ue, fe, ve, he, pe, me, ye, be, De, Se, xe, Me, ze, Re, _e, He, Fe, Ne, Ye, Oe, We, Le = q.opt, Ze = q.trigger, Be = q.renderOverlay, Pe = q.clearOverlays, je = q.reportSelection, Ie = q.unselect, qe = q.daySelectionMousedown, $e = q.slotSegHtml, Ve = q.cellToDate, Xe = q.dateToCell, Ue = q.rangeToSegments, Ge = r.formatDate, Qe = r.calculateWeekNumber, Je = {};
    H(n.addClass("fc-agenda")), ze = new Ce(function (e, n) {
      function r(t) {
        return Math.max(l, Math.min(c, t))
      }

      var a, o, i;
      X.each(function (e, r) {
        a = t(r), o = a.offset().left, e && (i[1] = o), i = [o], n[e] = i
      }), i[1] = o + a.outerWidth(), Le("allDaySlot") && (a = ae, o = a.offset().top, e[0] = [o, o + a.outerHeight()]);
      for (var s = se.offset().top, l = ie.offset().top, c = l + ie.outerHeight(), d = 0; Me * De > d; d++)e.push([r(s + Se * d), r(s + Se * (d + 1))])
    }), Re = new Ee(ze), _e = new ke(function (t) {
      return Q.eq(t)
    }), He = new ke(function (t) {
      return J.eq(t)
    })
  }

  function oe() {
    function n(t, e) {
      var n, r = t.length, o = [], s = [];
      for (n = 0; r > n; n++)t[n].allDay ? o.push(t[n]) : s.push(t[n]);
      v("allDaySlot") && (V(o, e), w()), i(a(s), e)
    }

    function r() {
      C().empty(), E().empty()
    }

    function a(t) {
      var e, n, r, a, i, s = H(), l = X(), c = U(), d = [];
      for (n = 0; s > n; n++)for (e = _(0, n), i = o(t, e.clone().time(l), e.clone().time(c)), i = ie(i), r = 0; i.length > r; r++)a = i[r], a.col = n, d.push(a);
      return d
    }

    function o(t, e, n) {
      e = e.clone().stripZone(), n = n.clone().stripZone();
      var r, a, o, i, s, l, c, d, u = [], f = t.length;
      for (r = 0; f > r; r++)a = t[r], o = a.start.clone().stripZone(), i = J(a).stripZone(), i > e && n > o && (e > o ? (s = e.clone(), c = !1) : (s = o, c = !0), i > n ? (l = n.clone(), d = !1) : (l = i, d = !0), u.push({
        event: a,
        start: s,
        end: l,
        isStart: c,
        isEnd: d
      }));
      return u.sort(pe)
    }

    function i(e, n) {
      var r, a, o, i, c, d, u, f, g, m, b, D, w, C, S, x, R = e.length, _ = "", H = E(), F = v("isRTL");
      for (r = 0; R > r; r++)a = e[r], o = a.event, i = k(a.start, a.start), c = k(a.end, a.start), d = M(a.col), u = z(a.col), f = u - d, u -= .025 * f, f = u - d, g = f * (a.forwardCoord - a.backwardCoord), v("slotEventOverlap") && (g = Math.max(2 * (g - 10), g)), F ? (b = u - a.backwardCoord * f, m = b - g) : (m = d + a.backwardCoord * f, b = m + g), m = Math.max(m, d), b = Math.min(b, u), g = b - m, a.top = i, a.left = m, a.outerWidth = g, a.outerHeight = c - i, _ += s(o, a);
      for (H[0].innerHTML = _, D = H.children(), r = 0; R > r; r++)a = e[r], o = a.event, w = t(D[r]), C = h("eventRender", o, o, w), C === !1 ? w.remove() : (C && C !== !0 && (w.remove(), w = t(C).css({
        position: "absolute",
        top: a.top,
        left: a.left
      }).appendTo(H)), a.element = w, o._id === n ? l(o, w, a) : w[0]._fci = r, Z(o, w));
      for (p(H, e, l), r = 0; R > r; r++)a = e[r], (w = a.element) && (a.vsides = T(w, !0), a.hsides = y(w, !0), S = w.find(".fc-event-title"), S.length && (a.contentTop = S[0].offsetTop));
      for (r = 0; R > r; r++)a = e[r], (w = a.element) && (w[0].style.width = Math.max(0, a.outerWidth - a.hsides) + "px", x = Math.max(0, a.outerHeight - a.vsides), w[0].style.height = x + "px", o = a.event, void 0 !== a.contentTop && 10 > x - a.contentTop && (w.find("div.fc-event-time").text(Q(o.start, v("timeFormat")) + " - " + o.title), w.find("div.fc-event-title").remove()), h("eventAfterRender", o, o, w))
    }

    function s(t, e) {
      var n = "<", r = t.url, a = A(t, v), o = ["fc-event", "fc-event-vert"];
      return g(t) && o.push("fc-event-draggable"), e.isStart && o.push("fc-event-start"), e.isEnd && o.push("fc-event-end"), o = o.concat(t.className), t.source && (o = o.concat(t.source.className || [])), n += r ? "a href='" + R(t.url) + "'" : "div", n += " class='" + o.join(" ") + "'" + " style=" + "'" + "position:absolute;" + "top:" + e.top + "px;" + "left:" + e.left + "px;" + a + "'" + ">" + "<div class='fc-event-inner'>" + "<div class='fc-event-time'>" + R(f.getEventTimeText(t)) + "</div>" + "<div class='fc-event-title'>" + R(t.title || "") + "</div>" + "</div>" + "<div class='fc-event-bg'></div>", e.isEnd && b(t) && (n += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"), n += "</" + (r ? "a" : "div") + ">"
    }

    function l(t, e, n) {
      var r = e.find("div.fc-event-time");
      g(t) && d(t, e, r), n.isEnd && b(t) && u(t, e, r), D(t, e)
    }

    function c(t, n, r) {
      function a() {
        c || (n.width(o).height("").draggable("option", "grid", null), c = !0)
      }

      var o, i, s, l = r.isStart, c = !0, d = S(), u = F(), f = X(), p = W(), g = O(), y = Y(), b = N();
      n.draggable({
        opacity: v("dragOpacity", "month"), revertDuration: v("dragRevertDuration"), start: function (e, r) {
          h("eventDragStart", n[0], t, e, r), P(t, n), o = n.width(), d.start(function (e, r) {
            if ($(), e) {
              i = !1;
              var o = _(0, r.col), d = _(0, e.col);
              s = d.diff(o, "days"), e.row ? l ? c && (n.width(u - 10), m(n, G.defaultTimedEventDuration / p * g), n.draggable("option", "grid", [u, 1]), c = !1) : i = !0 : (q(t.start.clone().add("days", s), J(t).add("days", s)), a()), i = i || c && !s
            } else a(), i = !0;
            n.draggable("option", "revert", i)
          }, e, "drag")
        }, stop: function (r, o) {
          if (d.stop(), $(), h("eventDragStop", n[0], t, r, o), i)a(), n.css("filter", ""), B(t, n); else {
            var l, u, v = t.start.clone().add("days", s);
            c || (u = Math.round((n.offset().top - L().offset().top) / b), l = e.duration(f + u * y), v = G.rezoneDate(v.clone().time(l))), j(n[0], t, v, r, o)
          }
        }
      })
    }

    function d(t, e, n) {
      function r() {
        $(), s && (c ? (n.hide(), e.draggable("option", "grid", null), q(b, D)) : (a(), n.css("display", ""), e.draggable("option", "grid", [C, E])))
      }

      function a() {
        b && n.text(f.getEventTimeText(b, t.end ? D : null))
      }

      var o, i, s, l, c, d, u, p, g, m, y, b, D, w = f.getCoordinateGrid(), T = H(), C = F(), E = N(), S = Y();
      e.draggable({
        scroll: !1,
        grid: [C, E],
        axis: 1 == T ? "y" : !1,
        opacity: v("dragOpacity"),
        revertDuration: v("dragRevertDuration"),
        start: function (n, r) {
          h("eventDragStart", e[0], t, n, r), P(t, e), w.build(), o = e.position(), i = w.cell(n.pageX, n.pageY), s = l = !0, c = d = x(i), u = p = 0, g = 0, m = y = 0, b = null, D = null
        },
        drag: function (n, a) {
          var f = w.cell(n.pageX, n.pageY);
          if (s = !!f) {
            if (c = x(f), u = Math.round((a.position.left - o.left) / C), u != p) {
              var v = _(0, i.col), h = i.col + u;
              h = Math.max(0, h), h = Math.min(T - 1, h);
              var k = _(0, h);
              g = k.diff(v, "days")
            }
            c || (m = Math.round((a.position.top - o.top) / E))
          }
          (s != l || c != d || u != p || m != y) && (c ? (b = t.start.clone().stripTime().add("days", g), D = b.clone().add(G.defaultAllDayEventDuration)) : (b = t.start.clone().add(m * S).add("days", g), D = J(t).add(m * S).add("days", g)), r(), l = s, d = c, p = u, y = m), e.draggable("option", "revert", !s)
        },
        stop: function (n, a) {
          $(), h("eventDragStop", e[0], t, n, a), s && (c || g || m) ? j(e[0], t, b, n, a) : (s = !0, c = !1, u = 0, g = 0, m = 0, r(), e.css("filter", ""), e.css(o), B(t, e))
        }
      })
    }

    function u(t, e, n) {
      var r, a, o, i = N(), s = Y();
      e.resizable({
        handles: {s: ".ui-resizable-handle"}, grid: i, start: function (n, o) {
          r = a = 0, P(t, e), h("eventResizeStart", e[0], t, n, o)
        }, resize: function (l, c) {
          if (r = Math.round((Math.max(i, e.height()) - c.originalSize.height) / i), r != a) {
            o = J(t).add(s * r);
            var d;
            d = r ? f.getEventTimeText(t.start, o) : f.getEventTimeText(t), n.text(d), a = r
          }
        }, stop: function (n, a) {
          h("eventResizeStop", e[0], t, n, a), r ? I(e[0], t, o, n, a) : B(t, e)
        }
      })
    }

    var f = this;
    f.renderEvents = n, f.clearEvents = r, f.slotSegHtml = s, me.call(f);
    var v = f.opt, h = f.trigger, g = f.isEventDraggable, b = f.isEventResizable, D = f.eventElementHandlers, w = f.setHeight, C = f.getDaySegmentContainer, E = f.getSlotSegmentContainer, S = f.getHoverListener, k = f.computeDateTop, x = f.getIsCellAllDay, M = f.colContentLeft, z = f.colContentRight, _ = f.cellToDate, H = f.getColCnt, F = f.getColWidth, N = f.getSnapHeight, Y = f.getSnapDuration, O = f.getSlotHeight, W = f.getSlotDuration, L = f.getSlotContainer, Z = f.reportEventElement, B = f.showEvents, P = f.hideEvents, j = f.eventDrop, I = f.eventResize, q = f.renderDayOverlay, $ = f.clearOverlays, V = f.renderDayEvents, X = f.getMinTime, U = f.getMaxTime, G = f.calendar, Q = G.formatDate, J = G.getEventEnd;
    f.draggableDayEvent = c
  }

  function ie(t) {
    var e, n = se(t), r = n[0];
    if (le(n), r) {
      for (e = 0; r.length > e; e++)ce(r[e]);
      for (e = 0; r.length > e; e++)de(r[e], 0, 0)
    }
    return ue(n)
  }

  function se(t) {
    var e, n, r, a = [];
    for (e = 0; t.length > e; e++) {
      for (n = t[e], r = 0; a.length > r && fe(n, a[r]).length; r++);
      (a[r] || (a[r] = [])).push(n)
    }
    return a
  }

  function le(t) {
    var e, n, r, a, o;
    for (e = 0; t.length > e; e++)for (n = t[e], r = 0; n.length > r; r++)for (a = n[r], a.forwardSegs = [], o = e + 1; t.length > o; o++)fe(a, t[o], a.forwardSegs)
  }

  function ce(t) {
    var e, n, r = t.forwardSegs, a = 0;
    if (void 0 === t.forwardPressure) {
      for (e = 0; r.length > e; e++)n = r[e], ce(n), a = Math.max(a, 1 + n.forwardPressure);
      t.forwardPressure = a
    }
  }

  function de(t, e, n) {
    var r, a = t.forwardSegs;
    if (void 0 === t.forwardCoord)for (a.length ? (a.sort(he), de(a[0], e + 1, n), t.forwardCoord = a[0].backwardCoord) : t.forwardCoord = 1, t.backwardCoord = t.forwardCoord - (t.forwardCoord - n) / (e + 1), r = 0; a.length > r; r++)de(a[r], 0, t.forwardCoord)
  }

  function ue(t) {
    var e, n, r, a = [];
    for (e = 0; t.length > e; e++)for (n = t[e], r = 0; n.length > r; r++)a.push(n[r]);
    return a
  }

  function fe(t, e, n) {
    n = n || [];
    for (var r = 0; e.length > r; r++)ve(t, e[r]) && n.push(e[r]);
    return n
  }

  function ve(t, e) {
    return t.end > e.start && t.start < e.end
  }

  function he(t, e) {
    return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || pe(t, e)
  }

  function pe(t, e) {
    return t.start - e.start || e.end - e.start - (t.end - t.start) || (t.event.title || "").localeCompare(e.event.title)
  }

  function ge(n, r, a) {
    function o(e, n) {
      var r = O[e];
      return t.isPlainObject(r) && !i(e) ? z(r, n || a) : r
    }

    function s(t, e) {
      return r.trigger.apply(r, [t, e || H].concat(Array.prototype.slice.call(arguments, 2), [H]))
    }

    function l(t) {
      var e = t.source || {};
      return Y(t.startEditable, e.startEditable, o("eventStartEditable"), t.editable, e.editable, o("editable"))
    }

    function c(t) {
      var e = t.source || {};
      return Y(t.durationEditable, e.durationEditable, o("eventDurationEditable"), t.editable, e.editable, o("editable"))
    }

    function d() {
      A = {}, N = []
    }

    function u(t, e) {
      N.push({event: t, element: e}), A[t._id] ? A[t._id].push(e) : A[t._id] = [e]
    }

    function f() {
      t.each(N, function (t, e) {
        H.trigger("eventDestroy", e.event, e.event, e.element)
      })
    }

    function v(t, e) {
      e.click(function (n) {
        return e.hasClass("ui-draggable-dragging") || e.hasClass("ui-resizable-resizing") ? void 0 : s("eventClick", this, t, n)
      }).hover(function (e) {
        s("eventMouseover", this, t, e)
      }, function (e) {
        s("eventMouseout", this, t, e)
      })
    }

    function h(t, e) {
      g(t, e, "show")
    }

    function p(t, e) {
      g(t, e, "hide")
    }

    function g(t, e, n) {
      var r, a = A[t._id], o = a.length;
      for (r = 0; o > r; r++)e && a[r][0] == e[0] || a[r][n]()
    }

    function m(t, e, n, a, o) {
      var i = r.mutateEvent(e, n, null);
      s("eventDrop", t, e, i.dateDelta, function () {
        i.undo(), F(e._id)
      }, a, o), F(e._id)
    }

    function y(t, e, n, a, o) {
      var i = r.mutateEvent(e, null, n);
      s("eventResize", t, e, i.durationDelta, function () {
        i.undo(), F(e._id)
      }, a, o), F(e._id)
    }

    function b(t) {
      return e.isMoment(t) && (t = t.day()), B[t]
    }

    function D() {
      return L
    }

    function w(t, e, n) {
      var r = t.clone();
      for (e = e || 1; B[(r.day() + (n ? e : 0) + 7) % 7];)r.add("days", e);
      return r
    }

    function T() {
      var t = C.apply(null, arguments), e = E(t), n = S(e);
      return n
    }

    function C(t, e) {
      var n = H.getColCnt(), r = I ? -1 : 1, a = I ? n - 1 : 0;
      "object" == typeof t && (e = t.col, t = t.row);
      var o = t * n + (e * r + a);
      return o
    }

    function E(t) {
      var e = H.start.day();
      return t += P[e], 7 * Math.floor(t / L) + j[(t % L + L) % L] - e
    }

    function S(t) {
      return H.start.clone().add("days", t)
    }

    function k(t) {
      var e = x(t), n = M(e), r = R(n);
      return r
    }

    function x(t) {
      return t.clone().stripTime().diff(H.start, "days")
    }

    function M(t) {
      var e = H.start.day();
      return t += e, Math.floor(t / 7) * L + P[(t % 7 + 7) % 7] - P[e]
    }

    function R(t) {
      var e = H.getColCnt(), n = I ? -1 : 1, r = I ? e - 1 : 0, a = Math.floor(t / e), o = (t % e + e) % e * n + r;
      return {row: a, col: o}
    }

    function _(t, e) {
      var n = H.getRowCnt(), r = H.getColCnt(), a = [], o = x(t), i = x(e), s = +e.time();
      s && s >= W && i++, i = Math.max(i, o + 1);
      for (var l = M(o), c = M(i) - 1, d = 0; n > d; d++) {
        var u = d * r, f = u + r - 1, v = Math.max(l, u), h = Math.min(c, f);
        if (h >= v) {
          var p = R(v), g = R(h), m = [p.col, g.col].sort(), y = E(v) == o, b = E(h) + 1 == i;
          a.push({row: d, leftCol: m[0], rightCol: m[1], isStart: y, isEnd: b})
        }
      }
      return a
    }

    var H = this;
    H.element = n, H.calendar = r, H.name = a, H.opt = o, H.trigger = s, H.isEventDraggable = l, H.isEventResizable = c, H.clearEventData = d, H.reportEventElement = u, H.triggerEventDestroy = f, H.eventElementHandlers = v, H.showEvents = h, H.hideEvents = p, H.eventDrop = m, H.eventResize = y;
    var F = r.reportEventChange, A = {}, N = [], O = r.options, W = e.duration(O.nextDayThreshold);
    H.getEventTimeText = function (t) {
      var e, n;
      return 2 === arguments.length ? (e = arguments[0], n = arguments[1]) : (e = t.start, n = t.end), n && o("displayEventEnd") ? r.formatRange(e, n, o("timeFormat")) : r.formatDate(e, o("timeFormat"))
    }, H.isHiddenDay = b, H.skipHiddenDays = w, H.getCellsPerWeek = D, H.dateToCell = k, H.dateToDayOffset = x, H.dayOffsetToCellOffset = M, H.cellOffsetToCell = R, H.cellToDate = T, H.cellToCellOffset = C, H.cellOffsetToDayOffset = E, H.dayOffsetToDate = S, H.rangeToSegments = _;
    var L, Z = o("hiddenDays") || [], B = [], P = [], j = [], I = o("isRTL");
    (function () {
      o("weekends") === !1 && Z.push(0, 6);
      for (var e = 0, n = 0; 7 > e; e++)P[e] = n, B[e] = -1 != t.inArray(e, Z), B[e] || (j[n] = e, n++);
      if (L = n, !L)throw"invalid hiddenDays"
    })()
  }

  function me() {
    function e(t, e) {
      var n = r(t, !1, !0);
      be(n, function (t, e) {
        x(t.event, e)
      }), m(n, e), be(n, function (t, e) {
        E("eventAfterRender", t.event, t.event, e)
      })
    }

    function n(t, e, n) {
      var a = r([t], !0, !1), o = [];
      return be(a, function (t, r) {
        t.row === e && r.css("top", n), o.push(r[0])
      }), o
    }

    function r(e, n, r) {
      var o, l, u = I(), f = n ? t("<div/>") : u, v = a(e);
      return i(v), o = s(v), f[0].innerHTML = o, l = f.children(), n && u.append(l), c(v, l), be(v, function (t, e) {
        t.hsides = y(e, !0)
      }), be(v, function (t, e) {
        e.width(Math.max(0, t.outerWidth - t.hsides))
      }), be(v, function (t, e) {
        t.outerHeight = e.outerHeight(!0)
      }), d(v, r), v
    }

    function a(t) {
      for (var e = [], n = 0; t.length > n; n++) {
        var r = o(t[n]);
        e.push.apply(e, r)
      }
      return e
    }

    function o(t) {
      for (var e = U(t.start, ne(t)), n = 0; e.length > n; n++)e[n].event = t;
      return e
    }

    function i(t) {
      for (var e = C("isRTL"), n = 0; t.length > n; n++) {
        var r = t[n], a = (e ? r.isEnd : r.isStart) ? P : Z, o = (e ? r.isStart : r.isEnd) ? j : B, i = a(r.leftCol), s = o(r.rightCol);
        r.left = i, r.outerWidth = s - i
      }
    }

    function s(t) {
      for (var e = "", n = 0; t.length > n; n++)e += l(t[n]);
      return e
    }

    function l(t) {
      var e = "", n = C("isRTL"), r = t.event, a = r.url, o = ["fc-event", "fc-event-hori"];
      S(r) && o.push("fc-event-draggable"), t.isStart && o.push("fc-event-start"), t.isEnd && o.push("fc-event-end"), o = o.concat(r.className), r.source && (o = o.concat(r.source.className || []));
      var i = A(r, C);
      return e += a ? "<a href='" + R(a) + "'" : "<div", e += " class='" + o.join(" ") + "'" + " style=" + "'" + "position:absolute;" + "left:" + t.left + "px;" + i + "'" + ">" + "<div class='fc-event-inner'>", !r.allDay && t.isStart && (e += "<span class='fc-event-time'>" + R(T.getEventTimeText(r)) + "</span>"), e += "<span class='fc-event-title'>" + R(r.title || "") + "</span>" + "</div>", r.allDay && t.isEnd && k(r) && (e += "<div class='ui-resizable-handle ui-resizable-" + (n ? "w" : "e") + "'>" + "&nbsp;&nbsp;&nbsp;" + "</div>"), e += "</" + (a ? "a" : "div") + ">"
    }

    function c(e, n) {
      for (var r = 0; e.length > r; r++) {
        var a = e[r], o = a.event, i = n.eq(r), s = E("eventRender", o, o, i);
        s === !1 ? i.remove() : (s && s !== !0 && (s = t(s).css({
          position: "absolute",
          left: a.left
        }), i.replaceWith(s), i = s), a.element = i)
      }
    }

    function d(t, e) {
      var n, r = u(t), a = g(), o = [];
      if (e)for (n = 0; a.length > n; n++)a[n].height(r[n]);
      for (n = 0; a.length > n; n++)o.push(a[n].position().top);
      be(t, function (t, e) {
        e.css("top", o[t.row] + t.top)
      })
    }

    function u(t) {
      for (var e, n = O(), r = W(), a = [], o = f(t), i = 0; n > i; i++) {
        var s = o[i], l = [];
        for (e = 0; r > e; e++)l.push(0);
        for (var c = 0; s.length > c; c++) {
          var d = s[c];
          for (d.top = M(l.slice(d.leftCol, d.rightCol + 1)), e = d.leftCol; d.rightCol >= e; e++)l[e] = d.top + d.outerHeight
        }
        a.push(M(l))
      }
      return a
    }

    function f(t) {
      var e, n, r, a = O(), o = [];
      for (e = 0; t.length > e; e++)n = t[e], r = n.row, n.element && (o[r] ? o[r].push(n) : o[r] = [n]);
      for (r = 0; a > r; r++)o[r] = v(o[r] || []);
      return o
    }

    function v(t) {
      for (var e = [], n = h(t), r = 0; n.length > r; r++)e.push.apply(e, n[r]);
      return e
    }

    function h(t) {
      t.sort(De);
      for (var e = [], n = 0; t.length > n; n++) {
        for (var r = t[n], a = 0; e.length > a && ye(r, e[a]); a++);
        e[a] ? e[a].push(r) : e[a] = [r]
      }
      return e
    }

    function g() {
      var t, e = O(), n = [];
      for (t = 0; e > t; t++)n[t] = L(t).find("div.fc-day-content > div");
      return n
    }

    function m(t, e) {
      var n = I();
      be(t, function (t, n, r) {
        var a = t.event;
        a._id === e ? b(a, n, t) : n[0]._fci = r
      }), p(n, t, b)
    }

    function b(t, e, n) {
      S(t) && T.draggableDayEvent(t, e, n), t.allDay && n.isEnd && k(t) && T.resizableDayEvent(t, e, n), z(t, e)
    }

    function D(t, e) {
      var n, r, a = X();
      e.draggable({
        delay: 50,
        opacity: C("dragOpacity"),
        revertDuration: C("dragRevertDuration"),
        start: function (o, i) {
          E("eventDragStart", e[0], t, o, i), F(t, e), a.start(function (a, o, i, s) {
            if (e.draggable("option", "revert", !a || !i && !s), $(), a) {
              var l = G(o), c = G(a);
              n = c.diff(l, "days"), r = t.start.clone().add("days", n), q(r, ne(t).add("days", n))
            } else n = 0
          }, o, "drag")
        },
        stop: function (o, i) {
          a.stop(), $(), E("eventDragStop", e[0], t, o, i), n ? N(e[0], t, r, o, i) : (e.css("filter", ""), _(t, e))
        }
      })
    }

    function w(e, r, a) {
      var o = C("isRTL"), i = o ? "w" : "e", s = r.find(".ui-resizable-" + i), l = !1;
      H(r), r.mousedown(function (t) {
        t.preventDefault()
      }).click(function (t) {
        l && (t.preventDefault(), t.stopImmediatePropagation())
      }), s.mousedown(function (o) {
        function s(n) {
          E("eventResizeStop", r[0], e, n, {}), t("body").css("cursor", ""), f.stop(), $(), c && Y(r[0], e, d, n, {}), setTimeout(function () {
            l = !1
          }, 0)
        }

        if (1 == o.which) {
          l = !0;
          var c, d, u, f = X(), v = r.css("top"), h = t.extend({}, e), p = te(K(e.start));
          V(), t("body").css("cursor", i + "-resize").one("mouseup", s), E("eventResizeStart", r[0], e, o, {}), f.start(function (r, o) {
            if (r) {
              var s = Q(o), l = Q(r);
              if (l = Math.max(l, p), c = J(l) - J(s), d = ne(e).add("days", c), c) {
                h.end = d;
                var f = u;
                u = n(h, a.row, v), u = t(u), u.find("*").css("cursor", i + "-resize"), f && f.remove(), F(e)
              } else u && (_(e), u.remove(), u = null);
              $(), q(e.start, d)
            }
          }, o)
        }
      })
    }

    var T = this;
    T.renderDayEvents = e, T.draggableDayEvent = D, T.resizableDayEvent = w;
    var C = T.opt, E = T.trigger, S = T.isEventDraggable, k = T.isEventResizable, x = T.reportEventElement, z = T.eventElementHandlers, _ = T.showEvents, F = T.hideEvents, N = T.eventDrop, Y = T.eventResize, O = T.getRowCnt, W = T.getColCnt, L = T.allDayRow, Z = T.colLeft, B = T.colRight, P = T.colContentLeft, j = T.colContentRight, I = T.getDaySegmentContainer, q = T.renderDayOverlay, $ = T.clearOverlays, V = T.clearSelection, X = T.getHoverListener, U = T.rangeToSegments, G = T.cellToDate, Q = T.cellToCellOffset, J = T.cellOffsetToDayOffset, K = T.dateToDayOffset, te = T.dayOffsetToCellOffset, ee = T.calendar, ne = ee.getEventEnd
  }

  function ye(t, e) {
    for (var n = 0; e.length > n; n++) {
      var r = e[n];
      if (r.leftCol <= t.rightCol && r.rightCol >= t.leftCol)return !0
    }
    return !1
  }

  function be(t, e) {
    for (var n = 0; t.length > n; n++) {
      var r = t[n], a = r.element;
      a && e(r, a, n)
    }
  }

  function De(t, e) {
    return e.rightCol - e.leftCol - (t.rightCol - t.leftCol) || e.event.allDay - t.event.allDay || t.event.start - e.event.start || (t.event.title || "").localeCompare(e.event.title)
  }

  function we() {
    function e(e) {
      var n = c("unselectCancel");
      n && t(e.target).parents(n).length || r(e)
    }

    function n(t, e) {
      r(), t = l.moment(t), e = e ? l.moment(e) : u(t), f(t, e), a(t, e)
    }

    function r(t) {
      h && (h = !1, v(), d("unselect", null, t))
    }

    function a(t, e, n) {
      h = !0, d("select", null, t, e, n)
    }

    function o(e) {
      var n = s.cellToDate, o = s.getIsCellAllDay, i = s.getHoverListener(), l = s.reportDayClick;
      if (1 == e.which && c("selectable")) {
        r(e);
        var d;
        i.start(function (t, e) {
          v(), t && o(t) ? (d = [n(e), n(t)].sort(x), f(d[0], d[1].clone().add("days", 1))) : d = null
        }, e), t(document).one("mouseup", function (t) {
          i.stop(), d && (+d[0] == +d[1] && l(d[0], t), a(d[0], d[1].clone().add("days", 1), t))
        })
      }
    }

    function i() {
      t(document).off("mousedown", e)
    }

    var s = this;
    s.select = n, s.unselect = r, s.reportSelection = a, s.daySelectionMousedown = o, s.selectionManagerDestroy = i;
    var l = s.calendar, c = s.opt, d = s.trigger, u = s.defaultSelectionEnd, f = s.renderSelection, v = s.clearSelection, h = !1;
    c("selectable") && c("unselectAuto") && t(document).on("mousedown", e)
  }

  function Te() {
    function e(e, n) {
      var r = o.shift();
      return r || (r = t("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")), r[0].parentNode != n[0] && r.appendTo(n), a.push(r.css(e).show()), r
    }

    function n() {
      for (var t; t = a.shift();)o.push(t.hide().unbind())
    }

    var r = this;
    r.renderOverlay = e, r.clearOverlays = n;
    var a = [], o = []
  }

  function Ce(t) {
    var e, n, r = this;
    r.build = function () {
      e = [], n = [], t(e, n)
    }, r.cell = function (t, r) {
      var a, o = e.length, i = n.length, s = -1, l = -1;
      for (a = 0; o > a; a++)if (r >= e[a][0] && e[a][1] > r) {
        s = a;
        break
      }
      for (a = 0; i > a; a++)if (t >= n[a][0] && n[a][1] > t) {
        l = a;
        break
      }
      return s >= 0 && l >= 0 ? {row: s, col: l} : null
    }, r.rect = function (t, r, a, o, i) {
      var s = i.offset();
      return {top: e[t][0] - s.top, left: n[r][0] - s.left, width: n[o][1] - n[r][0], height: e[a][1] - e[t][0]}
    }
  }

  function Ee(e) {
    function n(t) {
      Se(t);
      var n = e.cell(t.pageX, t.pageY);
      (Boolean(n) !== Boolean(i) || n && (n.row != i.row || n.col != i.col)) && (n ? (o || (o = n), a(n, o, n.row - o.row, n.col - o.col)) : a(n, o), i = n)
    }

    var r, a, o, i, s = this;
    s.start = function (s, l, c) {
      a = s, o = i = null, e.build(), n(l), r = c || "mousemove", t(document).bind(r, n)
    }, s.stop = function () {
      return t(document).unbind(r, n), i
    }
  }

  function Se(t) {
    void 0 === t.pageX && (t.pageX = t.originalEvent.pageX, t.pageY = t.originalEvent.pageY)
  }

  function ke(t) {
    function e(e) {
      return r[e] = r[e] || t(e)
    }

    var n = this, r = {}, a = {}, o = {};
    n.left = function (t) {
      return a[t] = void 0 === a[t] ? e(t).position().left : a[t]
    }, n.right = function (t) {
      return o[t] = void 0 === o[t] ? n.left(t) + e(t).width() : o[t]
    }, n.clear = function () {
      r = {}, a = {}, o = {}
    }
  }

  var xe = {
    lang: "en",
    defaultTimedEventDuration: "02:00:00",
    defaultAllDayEventDuration: {days: 1},
    forceEventDuration: !1,
    nextDayThreshold: "09:00:00",
    defaultView: "month",
    aspectRatio: 1.35,
    header: {left: "title", center: "", right: "today prev,next"},
    weekends: !0,
    weekNumbers: !1,
    weekNumberTitle: "W",
    weekNumberCalculation: "local",
    lazyFetching: !0,
    startParam: "start",
    endParam: "end",
    timezoneParam: "timezone",
    timezone: !1,
    titleFormat: {month: "MMMM YYYY", week: "ll", day: "LL"},
    columnFormat: {month: "ddd", week: r, day: "dddd"},
    timeFormat: {"default": n},
    displayEventEnd: {month: !1, basicWeek: !1, "default": !0},
    isRTL: !1,
    defaultButtonText: {
      prev: "prev",
      next: "next",
      prevYear: "prev year",
      nextYear: "next year",
      today: "today",
      month: "month",
      week: "week",
      day: "day"
    },
    buttonIcons: {
      prev: "left-single-arrow",
      next: "right-single-arrow",
      prevYear: "left-double-arrow",
      nextYear: "right-double-arrow"
    },
    theme: !1,
    themeButtonIcons: {
      prev: "circle-triangle-w",
      next: "circle-triangle-e",
      prevYear: "seek-prev",
      nextYear: "seek-next"
    },
    unselectAuto: !0,
    dropAccept: "*",
    handleWindowResize: !0,
    windowResizeDelay: 200
  }, Me = {en: {columnFormat: {week: "ddd M/D"}}}, ze = {
    header: {left: "next,prev today", center: "", right: "title"},
    buttonIcons: {
      prev: "right-single-arrow",
      next: "left-single-arrow",
      prevYear: "right-double-arrow",
      nextYear: "left-double-arrow"
    },
    themeButtonIcons: {
      prev: "circle-triangle-e",
      next: "circle-triangle-w",
      nextYear: "seek-prev",
      prevYear: "seek-next"
    }
  }, Re = t.fullCalendar = {version: "2.0.2"}, _e = Re.views = {};
  t.fn.fullCalendar = function (e) {
    var n = Array.prototype.slice.call(arguments, 1), r = this;
    return this.each(function (a, o) {
      var i, l = t(o), c = l.data("fullCalendar");
      "string" == typeof e ? c && t.isFunction(c[e]) && (i = c[e].apply(c, n), a || (r = i), "destroy" === e && l.removeData("fullCalendar")) : c || (c = new s(l, e), l.data("fullCalendar", c), c.render())
    }), r
  }, Re.langs = Me, Re.datepickerLang = function (e, n, r) {
    var a = Me[e];
    a || (a = Me[e] = {}), o(a, {
      isRTL: r.isRTL,
      weekNumberTitle: r.weekHeader,
      titleFormat: {month: r.showMonthAfterYear ? "YYYY[" + r.yearSuffix + "] MMMM" : "MMMM YYYY[" + r.yearSuffix + "]"},
      defaultButtonText: {prev: _(r.prevText), next: _(r.nextText), today: _(r.currentText)}
    }), t.datepicker && (t.datepicker.regional[n] = t.datepicker.regional[e] = r, t.datepicker.regional.en = t.datepicker.regional[""], t.datepicker.setDefaults(r))
  }, Re.lang = function (t, e) {
    var n;
    e && (n = Me[t], n || (n = Me[t] = {}), o(n, e || {})), xe.lang = t
  }, Re.sourceNormalizers = [], Re.sourceFetchers = [];
  var He = {dataType: "json", cache: !1}, Fe = 1;
  Re.applyAll = N;
  var Ae = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], Ne = /^\s*\d{4}-\d\d$/, Ye = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;
  Re.moment = function () {
    return O(arguments)
  }, Re.moment.utc = function () {
    var t = O(arguments, !0);
    return t.hasTime() && t.utc(), t
  }, Re.moment.parseZone = function () {
    return O(arguments, !0, !0)
  }, W.prototype = u(e.fn), W.prototype.clone = function () {
    return O([this])
  }, W.prototype.time = function (t) {
    if (null == t)return e.duration({
      hours: this.hours(),
      minutes: this.minutes(),
      seconds: this.seconds(),
      milliseconds: this.milliseconds()
    });
    delete this._ambigTime, e.isDuration(t) || e.isMoment(t) || (t = e.duration(t));
    var n = 0;
    return e.isDuration(t) && (n = 24 * Math.floor(t.asDays())), this.hours(n + t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())
  }, W.prototype.stripTime = function () {
    var t = this.toArray();
    return e.fn.utc.call(this), this.year(t[0]).month(t[1]).date(t[2]).hours(0).minutes(0).seconds(0).milliseconds(0), this._ambigTime = !0, this._ambigZone = !0, this
  }, W.prototype.hasTime = function () {
    return !this._ambigTime
  }, W.prototype.stripZone = function () {
    var t = this.toArray(), n = this._ambigTime;
    return e.fn.utc.call(this), this.year(t[0]).month(t[1]).date(t[2]).hours(t[3]).minutes(t[4]).seconds(t[5]).milliseconds(t[6]), n && (this._ambigTime = !0), this._ambigZone = !0, this
  }, W.prototype.hasZone = function () {
    return !this._ambigZone
  }, W.prototype.zone = function (t) {
    return null != t && (delete this._ambigTime, delete this._ambigZone), e.fn.zone.apply(this, arguments)
  }, W.prototype.local = function () {
    var t = this.toArray(), n = this._ambigZone;
    return delete this._ambigTime, delete this._ambigZone, e.fn.local.apply(this, arguments), n && this.year(t[0]).month(t[1]).date(t[2]).hours(t[3]).minutes(t[4]).seconds(t[5]).milliseconds(t[6]), this
  }, W.prototype.utc = function () {
    return delete this._ambigTime, delete this._ambigZone, e.fn.utc.apply(this, arguments)
  }, W.prototype.format = function () {
    return arguments[0] ? B(this, arguments[0]) : this._ambigTime ? Z(this, "YYYY-MM-DD") : this._ambigZone ? Z(this, "YYYY-MM-DD[T]HH:mm:ss") : Z(this)
  }, W.prototype.toISOString = function () {
    return this._ambigTime ? Z(this, "YYYY-MM-DD") : this._ambigZone ? Z(this, "YYYY-MM-DD[T]HH:mm:ss") : e.fn.toISOString.apply(this, arguments)
  }, W.prototype.isWithin = function (t, e) {
    var n = L([this, t, e]);
    return n[0] >= n[1] && n[0] < n[2]
  }, t.each(["isBefore", "isAfter", "isSame"], function (t, n) {
    W.prototype[n] = function (t, r) {
      var a = L([this, t]);
      return e.fn[n].call(a[0], a[1], r)
    }
  });
  var Oe = {
    t: function (t) {
      return Z(t, "a").charAt(0)
    }, T: function (t) {
      return Z(t, "A").charAt(0)
    }
  };
  Re.formatRange = I;
  var We = {
    Y: "year",
    M: "month",
    D: "day",
    d: "day",
    A: "second",
    a: "second",
    T: "second",
    t: "second",
    H: "second",
    h: "second",
    m: "second",
    s: "second"
  }, Le = {};
  _e.month = U, _e.basicWeek = G, _e.basicDay = Q, a({weekMode: "fixed"}), _e.agendaWeek = te, _e.agendaDay = ee, a({
    allDaySlot: !0,
    allDayText: "all-day",
    scrollTime: "06:00:00",
    slotDuration: "00:30:00",
    axisFormat: ne,
    timeFormat: {agenda: re},
    dragOpacity: {agenda: .5},
    minTime: "00:00:00",
    maxTime: "24:00:00",
    slotEventOverlap: !0
  })
});
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
  function t(t, a, r, c) {
    var l = t.success, i = e.extend({}, t.data || {}, {singleevents: !0, "max-results": 9999});
    return e.extend({}, t, {
      url: t.url.replace(/\/basic$/, "/full") + "?alt=json-in-script&callback=?",
      dataType: "jsonp",
      data: i,
      timezoneParam: "ctz",
      startParam: "start-min",
      endParam: "start-max",
      success: function (t) {
        var a = [];
        t.feed.entry && e.each(t.feed.entry, function (t, n) {
          var r;
          e.each(n.link, function (e, t) {
            "text/html" == t.type && (r = t.href, c && "local" != c && (r += (-1 == r.indexOf("?") ? "?" : "&") + "ctz=" + encodeURIComponent(c)))
          }), a.push({
            id: n.gCal$uid.value,
            title: n.title.$t,
            start: n.gd$when[0].startTime,
            end: n.gd$when[0].endTime,
            url: r,
            location: n.gd$where[0].valueString,
            description: n.content.$t
          })
        });
        var r = [a].concat(Array.prototype.slice.call(arguments, 1)), i = n(l, this, r);
        return e.isArray(i) ? i : a
      }
    })
  }

  var a = e.fullCalendar, n = a.applyAll;
  a.sourceNormalizers.push(function (e) {
    ("gcal" == e.dataType || void 0 === e.dataType && (e.url || "").match(/^(http|https):\/\/www.google.com\/calendar\/feeds\//)) && (e.dataType = "gcal", void 0 === e.editable && (e.editable = !1))
  }), a.sourceFetchers.push(function (e, a, n, r) {
    return "gcal" == e.dataType ? t(e, a, n, r) : void 0
  }), a.gcalFeed = function (t, a) {
    return e.extend({}, a, {url: t, dataType: "gcal"})
  }
});

/*!
 * Easy pie chart is a jquery plugin to display simple animated pie charts for only one value
 *
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library (http://jquery.com)
 *
 * @source: http://github.com/rendro/easy-pie-chart/
 * @autor: Robert Fleischmann
 * @version: 1.2.5
 *
 * Inspired by: http://dribbble.com/shots/631074-Simple-Pie-Charts-II?list=popular&offset=210
 * Thanks to Philip Thrasher for the jquery plugin boilerplate for coffee script
 */
!function (e) {
  return e.easyPieChart = function (t, n) {
    var i, a, r, o, s, l, d, c, u = this;
    return this.el = t, this.$el = e(t), this.$el.data("easyPieChart", this), this.init = function () {
      var t, i;
      return u.options = e.extend({}, e.easyPieChart.defaultOptions, n), t = parseInt(u.$el.data("percent"), 10), u.percentage = 0, u.canvas = e("<canvas width='" + u.options.size + "' height='" + u.options.size + "'></canvas>").get(0), u.$el.append(u.canvas), "undefined" != typeof G_vmlCanvasManager && null !== G_vmlCanvasManager && G_vmlCanvasManager.initElement(u.canvas), u.ctx = u.canvas.getContext("2d"), window.devicePixelRatio > 1 && (i = window.devicePixelRatio, e(u.canvas).css({
        width: u.options.size,
        height: u.options.size
      }), u.canvas.width *= i, u.canvas.height *= i, u.ctx.scale(i, i)), u.ctx.translate(u.options.size / 2, u.options.size / 2), u.ctx.rotate(u.options.rotate * Math.PI / 180), u.$el.addClass("easyPieChart"), u.$el.css({
        width: u.options.size,
        height: u.options.size,
        lineHeight: "" + u.options.size + "px"
      }), u.update(t), u
    }, this.update = function (e) {
      return e = parseFloat(e) || 0, u.options.animate === !1 ? r(e) : u.options.delay ? (a(u.percentage, 0), setTimeout(function () {
        return a(u.percentage, e)
      }, u.options.delay)) : a(u.percentage, e), u
    }, d = function () {
      var e, t, n;
      for (u.ctx.fillStyle = u.options.scaleColor, u.ctx.lineWidth = 1, n = [], e = t = 0; 24 >= t; e = ++t)n.push(i(e));
      return n
    }, i = function (e) {
      var t;
      t = 0 === e % 6 ? 0 : .017 * u.options.size, u.ctx.save(), u.ctx.rotate(e * Math.PI / 12), u.ctx.fillRect(u.options.size / 2 - t, 0, .05 * -u.options.size + t, 1), u.ctx.restore()
    }, c = function () {
      var e;
      e = u.options.size / 2 - u.options.lineWidth / 2, u.options.scaleColor !== !1 && (e -= .08 * u.options.size), u.ctx.beginPath(), u.ctx.arc(0, 0, e, 0, 2 * Math.PI, !0), u.ctx.closePath(), u.ctx.strokeStyle = u.options.trackColor, u.ctx.lineWidth = u.options.lineWidth, u.ctx.stroke()
    }, l = function () {
      u.options.scaleColor !== !1 && d(), u.options.trackColor !== !1 && c()
    }, r = function (t) {
      var n;
      l(), u.ctx.strokeStyle = e.isFunction(u.options.barColor) ? u.options.barColor(t) : u.options.barColor, u.ctx.lineCap = u.options.lineCap, u.ctx.lineWidth = u.options.lineWidth, n = u.options.size / 2 - u.options.lineWidth / 2, u.options.scaleColor !== !1 && (n -= .08 * u.options.size), u.ctx.save(), u.ctx.rotate(-Math.PI / 2), u.ctx.beginPath(), u.ctx.arc(0, 0, n, 0, 2 * Math.PI * t / 100, !1), u.ctx.stroke(), u.ctx.restore()
    }, s = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
          return window.setTimeout(e, 1e3 / 60)
        }
    }(), a = function (e, t) {
      var n, i;
      u.options.onStart.call(u), u.percentage = t, Date.now || (Date.now = function () {
        return +new Date
      }), i = Date.now(), n = function () {
        var a, d;
        return d = Math.min(Date.now() - i, u.options.animate), u.ctx.clearRect(-u.options.size / 2, -u.options.size / 2, u.options.size, u.options.size), l.call(u), a = [o(d, e, t - e, u.options.animate)], u.options.onStep.call(u, a), r.call(u, a), d >= u.options.animate ? u.options.onStop.call(u, a, t) : s(n)
      }, s(n)
    }, o = function (e, t, n, i) {
      var a, r;
      return a = function (e) {
        return Math.pow(e, 2)
      }, r = function (e) {
        return 1 > e ? a(e) : 2 - a(-2 * (e / 2) + 2)
      }, e /= i / 2, n / 2 * r(e) + t
    }, this.init()
  }, e.easyPieChart.defaultOptions = {
    barColor: "#ef1e25",
    trackColor: "#f2f2f2",
    scaleColor: "#dfe0e0",
    lineCap: "round",
    rotate: 0,
    size: 110,
    lineWidth: 3,
    animate: !1,
    delay: !1,
    onStart: e.noop,
    onStop: e.noop,
    onStep: e.noop
  }, e.fn.easyPieChart = function (t) {
    return e.each(this, function (n, i) {
      var a, r;
      return a = e(i), a.data("easyPieChart") ? void 0 : (r = e.extend({}, t, a.data()), a.data("easyPieChart", new e.easyPieChart(i, r)))
    })
  }, void 0
}(jQuery);

/*!
 * Javascript plotting library for jQuery, version 0.8.3.
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 *
 * Plugin for jQuery for working with colors. Version 1.1.
 * Inspiration from jQuery color animation plugin by John Resig.
 * Released under the MIT license by Ole Laursen, October 2009.
 */
(function ($) {
  $.color = {};
  $.color.make = function (r, g, b, a) {
    var o = {};
    o.r = r || 0;
    o.g = g || 0;
    o.b = b || 0;
    o.a = a != null ? a : 1;
    o.add = function (c, d) {
      for (var i = 0; i < c.length; ++i)o[c.charAt(i)] += d;
      return o.normalize()
    };
    o.scale = function (c, f) {
      for (var i = 0; i < c.length; ++i)o[c.charAt(i)] *= f;
      return o.normalize()
    };
    o.toString = function () {
      if (o.a >= 1) {
        return "rgb(" + [o.r, o.g, o.b].join(",") + ")"
      } else {
        return "rgba(" + [o.r, o.g, o.b, o.a].join(",") + ")"
      }
    };
    o.normalize = function () {
      function clamp(min, value, max) {
        return value < min ? min : value > max ? max : value
      }

      o.r = clamp(0, parseInt(o.r), 255);
      o.g = clamp(0, parseInt(o.g), 255);
      o.b = clamp(0, parseInt(o.b), 255);
      o.a = clamp(0, o.a, 1);
      return o
    };
    o.clone = function () {
      return $.color.make(o.r, o.b, o.g, o.a)
    };
    return o.normalize()
  };
  $.color.extract = function (elem, css) {
    var c;
    do {
      c = elem.css(css).toLowerCase();
      if (c != "" && c != "transparent")break;
      elem = elem.parent()
    } while (elem.length && !$.nodeName(elem.get(0), "body"));
    if (c == "rgba(0, 0, 0, 0)")c = "transparent";
    return $.color.parse(c)
  };
  $.color.parse = function (str) {
    var res, m = $.color.make;
    if (res = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))return m(parseInt(res[1], 10), parseInt(res[2], 10), parseInt(res[3], 10));
    if (res = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseInt(res[1], 10), parseInt(res[2], 10), parseInt(res[3], 10), parseFloat(res[4]));
    if (res = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))return m(parseFloat(res[1]) * 2.55, parseFloat(res[2]) * 2.55, parseFloat(res[3]) * 2.55);
    if (res = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseFloat(res[1]) * 2.55, parseFloat(res[2]) * 2.55, parseFloat(res[3]) * 2.55, parseFloat(res[4]));
    if (res = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))return m(parseInt(res[1], 16), parseInt(res[2], 16), parseInt(res[3], 16));
    if (res = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))return m(parseInt(res[1] + res[1], 16), parseInt(res[2] + res[2], 16), parseInt(res[3] + res[3], 16));
    var name = $.trim(str).toLowerCase();
    if (name == "transparent")return m(255, 255, 255, 0); else {
      res = lookupColors[name] || [0, 0, 0];
      return m(res[0], res[1], res[2])
    }
  };
  var lookupColors = {
    aqua: [0, 255, 255],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    black: [0, 0, 0],
    blue: [0, 0, 255],
    brown: [165, 42, 42],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgrey: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkviolet: [148, 0, 211],
    fuchsia: [255, 0, 255],
    gold: [255, 215, 0],
    green: [0, 128, 0],
    indigo: [75, 0, 130],
    khaki: [240, 230, 140],
    lightblue: [173, 216, 230],
    lightcyan: [224, 255, 255],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    navy: [0, 0, 128],
    olive: [128, 128, 0],
    orange: [255, 165, 0],
    pink: [255, 192, 203],
    purple: [128, 0, 128],
    violet: [128, 0, 128],
    red: [255, 0, 0],
    silver: [192, 192, 192],
    white: [255, 255, 255],
    yellow: [255, 255, 0]
  }
})(jQuery);
(function ($) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (!$.fn.detach) {
    $.fn.detach = function () {
      return this.each(function () {
        if (this.parentNode) {
          this.parentNode.removeChild(this)
        }
      })
    }
  }
  function Canvas(cls, container) {
    var element = container.children("." + cls)[0];
    if (element == null) {
      element = document.createElement("canvas");
      element.className = cls;
      $(element).css({direction: "ltr", position: "absolute", left: 0, top: 0}).appendTo(container);
      if (!element.getContext) {
        if (window.G_vmlCanvasManager) {
          element = window.G_vmlCanvasManager.initElement(element)
        } else {
          throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.")
        }
      }
    }
    this.element = element;
    var context = this.context = element.getContext("2d");
    var devicePixelRatio = window.devicePixelRatio || 1, backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
    this.pixelRatio = devicePixelRatio / backingStoreRatio;
    this.resize(container.width(), container.height());
    this.textContainer = null;
    this.text = {};
    this._textCache = {}
  }

  Canvas.prototype.resize = function (width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height)
    }
    var element = this.element, context = this.context, pixelRatio = this.pixelRatio;
    if (this.width != width) {
      element.width = width * pixelRatio;
      element.style.width = width + "px";
      this.width = width
    }
    if (this.height != height) {
      element.height = height * pixelRatio;
      element.style.height = height + "px";
      this.height = height
    }
    context.restore();
    context.save();
    context.scale(pixelRatio, pixelRatio)
  };
  Canvas.prototype.clear = function () {
    this.context.clearRect(0, 0, this.width, this.height)
  };
  Canvas.prototype.render = function () {
    var cache = this._textCache;
    for (var layerKey in cache) {
      if (hasOwnProperty.call(cache, layerKey)) {
        var layer = this.getTextLayer(layerKey), layerCache = cache[layerKey];
        layer.hide();
        for (var styleKey in layerCache) {
          if (hasOwnProperty.call(layerCache, styleKey)) {
            var styleCache = layerCache[styleKey];
            for (var key in styleCache) {
              if (hasOwnProperty.call(styleCache, key)) {
                var positions = styleCache[key].positions;
                for (var i = 0, position; position = positions[i]; i++) {
                  if (position.active) {
                    if (!position.rendered) {
                      layer.append(position.element);
                      position.rendered = true
                    }
                  } else {
                    positions.splice(i--, 1);
                    if (position.rendered) {
                      position.element.detach()
                    }
                  }
                }
                if (positions.length == 0) {
                  delete styleCache[key]
                }
              }
            }
          }
        }
        layer.show()
      }
    }
  };
  Canvas.prototype.getTextLayer = function (classes) {
    var layer = this.text[classes];
    if (layer == null) {
      if (this.textContainer == null) {
        this.textContainer = $("<div class='flot-text'></div>").css({
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          "font-size": "smaller",
          color: "#545454"
        }).insertAfter(this.element)
      }
      layer = this.text[classes] = $("<div></div>").addClass(classes).css({
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }).appendTo(this.textContainer)
    }
    return layer
  };
  Canvas.prototype.getTextInfo = function (layer, text, font, angle, width) {
    var textStyle, layerCache, styleCache, info;
    text = "" + text;
    if (typeof font === "object") {
      textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px/" + font.lineHeight + "px " + font.family
    } else {
      textStyle = font
    }
    layerCache = this._textCache[layer];
    if (layerCache == null) {
      layerCache = this._textCache[layer] = {}
    }
    styleCache = layerCache[textStyle];
    if (styleCache == null) {
      styleCache = layerCache[textStyle] = {}
    }
    info = styleCache[text];
    if (info == null) {
      var element = $("<div></div>").html(text).css({
        position: "absolute",
        "max-width": width,
        top: -9999
      }).appendTo(this.getTextLayer(layer));
      if (typeof font === "object") {
        element.css({font: textStyle, color: font.color})
      } else if (typeof font === "string") {
        element.addClass(font)
      }
      info = styleCache[text] = {
        width: element.outerWidth(true),
        height: element.outerHeight(true),
        element: element,
        positions: []
      };
      element.detach()
    }
    return info
  };
  Canvas.prototype.addText = function (layer, x, y, text, font, angle, width, halign, valign) {
    var info = this.getTextInfo(layer, text, font, angle, width), positions = info.positions;
    if (halign == "center") {
      x -= info.width / 2
    } else if (halign == "right") {
      x -= info.width
    }
    if (valign == "middle") {
      y -= info.height / 2
    } else if (valign == "bottom") {
      y -= info.height
    }
    for (var i = 0, position; position = positions[i]; i++) {
      if (position.x == x && position.y == y) {
        position.active = true;
        return
      }
    }
    position = {
      active: true,
      rendered: false,
      element: positions.length ? info.element.clone() : info.element,
      x: x,
      y: y
    };
    positions.push(position);
    position.element.css({top: Math.round(y), left: Math.round(x), "text-align": halign})
  };
  Canvas.prototype.removeText = function (layer, x, y, text, font, angle) {
    if (text == null) {
      var layerCache = this._textCache[layer];
      if (layerCache != null) {
        for (var styleKey in layerCache) {
          if (hasOwnProperty.call(layerCache, styleKey)) {
            var styleCache = layerCache[styleKey];
            for (var key in styleCache) {
              if (hasOwnProperty.call(styleCache, key)) {
                var positions = styleCache[key].positions;
                for (var i = 0, position; position = positions[i]; i++) {
                  position.active = false
                }
              }
            }
          }
        }
      }
    } else {
      var positions = this.getTextInfo(layer, text, font, angle).positions;
      for (var i = 0, position; position = positions[i]; i++) {
        if (position.x == x && position.y == y) {
          position.active = false
        }
      }
    }
  };
  function Plot(placeholder, data_, options_, plugins) {
    var series = [], options = {
      colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
      legend: {
        show: true,
        noColumns: 1,
        labelFormatter: null,
        labelBoxBorderColor: "#ccc",
        container: null,
        position: "ne",
        margin: 5,
        backgroundColor: null,
        backgroundOpacity: .85,
        sorted: null
      },
      xaxis: {
        show: null,
        position: "bottom",
        mode: null,
        font: null,
        color: null,
        tickColor: null,
        transform: null,
        inverseTransform: null,
        min: null,
        max: null,
        autoscaleMargin: null,
        ticks: null,
        tickFormatter: null,
        labelWidth: null,
        labelHeight: null,
        reserveSpace: null,
        tickLength: null,
        alignTicksWithAxis: null,
        tickDecimals: null,
        tickSize: null,
        minTickSize: null
      },
      yaxis: {autoscaleMargin: .02, position: "left"},
      xaxes: [],
      yaxes: [],
      series: {
        points: {show: false, radius: 3, lineWidth: 2, fill: true, fillColor: "#ffffff", symbol: "circle"},
        lines: {lineWidth: 2, fill: false, fillColor: null, steps: false},
        bars: {
          show: false,
          lineWidth: 2,
          barWidth: 1,
          fill: true,
          fillColor: null,
          align: "left",
          horizontal: false,
          zero: true
        },
        shadowSize: 3,
        highlightColor: null
      },
      grid: {
        show: true,
        aboveData: false,
        color: "#545454",
        backgroundColor: null,
        borderColor: null,
        tickColor: null,
        margin: 0,
        labelMargin: 5,
        axisMargin: 8,
        borderWidth: 2,
        minBorderMargin: null,
        markings: null,
        markingsColor: "#f4f4f4",
        markingsLineWidth: 2,
        clickable: false,
        hoverable: false,
        autoHighlight: true,
        mouseActiveRadius: 10
      },
      interaction: {redrawOverlayInterval: 1e3 / 60},
      hooks: {}
    }, surface = null, overlay = null, eventHolder = null, ctx = null, octx = null, xaxes = [], yaxes = [], plotOffset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, plotWidth = 0, plotHeight = 0, hooks = {
      processOptions: [],
      processRawData: [],
      processDatapoints: [],
      processOffset: [],
      drawBackground: [],
      drawSeries: [],
      draw: [],
      bindEvents: [],
      drawOverlay: [],
      shutdown: []
    }, plot = this;
    plot.setData = setData;
    plot.setupGrid = setupGrid;
    plot.draw = draw;
    plot.getPlaceholder = function () {
      return placeholder
    };
    plot.getCanvas = function () {
      return surface.element
    };
    plot.getPlotOffset = function () {
      return plotOffset
    };
    plot.width = function () {
      return plotWidth
    };
    plot.height = function () {
      return plotHeight
    };
    plot.offset = function () {
      var o = eventHolder.offset();
      o.left += plotOffset.left;
      o.top += plotOffset.top;
      return o
    };
    plot.getData = function () {
      return series
    };
    plot.getAxes = function () {
      var res = {}, i;
      $.each(xaxes.concat(yaxes), function (_, axis) {
        if (axis)res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis
      });
      return res
    };
    plot.getXAxes = function () {
      return xaxes
    };
    plot.getYAxes = function () {
      return yaxes
    };
    plot.c2p = canvasToAxisCoords;
    plot.p2c = axisToCanvasCoords;
    plot.getOptions = function () {
      return options
    };
    plot.highlight = highlight;
    plot.unhighlight = unhighlight;
    plot.triggerRedrawOverlay = triggerRedrawOverlay;
    plot.pointOffset = function (point) {
      return {
        left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),
        top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)
      }
    };
    plot.shutdown = shutdown;
    plot.destroy = function () {
      shutdown();
      placeholder.removeData("plot").empty();
      series = [];
      options = null;
      surface = null;
      overlay = null;
      eventHolder = null;
      ctx = null;
      octx = null;
      xaxes = [];
      yaxes = [];
      hooks = null;
      highlights = [];
      plot = null
    };
    plot.resize = function () {
      var width = placeholder.width(), height = placeholder.height();
      surface.resize(width, height);
      overlay.resize(width, height)
    };
    plot.hooks = hooks;
    initPlugins(plot);
    parseOptions(options_);
    setupCanvases();
    setData(data_);
    setupGrid();
    draw();
    bindEvents();
    function executeHooks(hook, args) {
      args = [plot].concat(args);
      for (var i = 0; i < hook.length; ++i)hook[i].apply(this, args)
    }

    function initPlugins() {
      var classes = {Canvas: Canvas};
      for (var i = 0; i < plugins.length; ++i) {
        var p = plugins[i];
        p.init(plot, classes);
        if (p.options)$.extend(true, options, p.options)
      }
    }

    function parseOptions(opts) {
      $.extend(true, options, opts);
      if (opts && opts.colors) {
        options.colors = opts.colors
      }
      if (options.xaxis.color == null)options.xaxis.color = $.color.parse(options.grid.color).scale("a", .22).toString();
      if (options.yaxis.color == null)options.yaxis.color = $.color.parse(options.grid.color).scale("a", .22).toString();
      if (options.xaxis.tickColor == null)options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;
      if (options.yaxis.tickColor == null)options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;
      if (options.grid.borderColor == null)options.grid.borderColor = options.grid.color;
      if (options.grid.tickColor == null)options.grid.tickColor = $.color.parse(options.grid.color).scale("a", .22).toString();
      var i, axisOptions, axisCount, fontSize = placeholder.css("font-size"), fontSizeDefault = fontSize ? +fontSize.replace("px", "") : 13, fontDefaults = {
        style: placeholder.css("font-style"),
        size: Math.round(.8 * fontSizeDefault),
        variant: placeholder.css("font-variant"),
        weight: placeholder.css("font-weight"),
        family: placeholder.css("font-family")
      };
      axisCount = options.xaxes.length || 1;
      for (i = 0; i < axisCount; ++i) {
        axisOptions = options.xaxes[i];
        if (axisOptions && !axisOptions.tickColor) {
          axisOptions.tickColor = axisOptions.color
        }
        axisOptions = $.extend(true, {}, options.xaxis, axisOptions);
        options.xaxes[i] = axisOptions;
        if (axisOptions.font) {
          axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
          if (!axisOptions.font.color) {
            axisOptions.font.color = axisOptions.color
          }
          if (!axisOptions.font.lineHeight) {
            axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15)
          }
        }
      }
      axisCount = options.yaxes.length || 1;
      for (i = 0; i < axisCount; ++i) {
        axisOptions = options.yaxes[i];
        if (axisOptions && !axisOptions.tickColor) {
          axisOptions.tickColor = axisOptions.color
        }
        axisOptions = $.extend(true, {}, options.yaxis, axisOptions);
        options.yaxes[i] = axisOptions;
        if (axisOptions.font) {
          axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
          if (!axisOptions.font.color) {
            axisOptions.font.color = axisOptions.color
          }
          if (!axisOptions.font.lineHeight) {
            axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15)
          }
        }
      }
      if (options.xaxis.noTicks && options.xaxis.ticks == null)options.xaxis.ticks = options.xaxis.noTicks;
      if (options.yaxis.noTicks && options.yaxis.ticks == null)options.yaxis.ticks = options.yaxis.noTicks;
      if (options.x2axis) {
        options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
        options.xaxes[1].position = "top";
        if (options.x2axis.min == null) {
          options.xaxes[1].min = null
        }
        if (options.x2axis.max == null) {
          options.xaxes[1].max = null
        }
      }
      if (options.y2axis) {
        options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
        options.yaxes[1].position = "right";
        if (options.y2axis.min == null) {
          options.yaxes[1].min = null
        }
        if (options.y2axis.max == null) {
          options.yaxes[1].max = null
        }
      }
      if (options.grid.coloredAreas)options.grid.markings = options.grid.coloredAreas;
      if (options.grid.coloredAreasColor)options.grid.markingsColor = options.grid.coloredAreasColor;
      if (options.lines)$.extend(true, options.series.lines, options.lines);
      if (options.points)$.extend(true, options.series.points, options.points);
      if (options.bars)$.extend(true, options.series.bars, options.bars);
      if (options.shadowSize != null)options.series.shadowSize = options.shadowSize;
      if (options.highlightColor != null)options.series.highlightColor = options.highlightColor;
      for (i = 0; i < options.xaxes.length; ++i)getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
      for (i = 0; i < options.yaxes.length; ++i)getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];
      for (var n in hooks)if (options.hooks[n] && options.hooks[n].length)hooks[n] = hooks[n].concat(options.hooks[n]);
      executeHooks(hooks.processOptions, [options])
    }

    function setData(d) {
      series = parseData(d);
      fillInSeriesOptions();
      processData()
    }

    function parseData(d) {
      var res = [];
      for (var i = 0; i < d.length; ++i) {
        var s = $.extend(true, {}, options.series);
        if (d[i].data != null) {
          s.data = d[i].data;
          delete d[i].data;
          $.extend(true, s, d[i]);
          d[i].data = s.data
        } else s.data = d[i];
        res.push(s)
      }
      return res
    }

    function axisNumber(obj, coord) {
      var a = obj[coord + "axis"];
      if (typeof a == "object")a = a.n;
      if (typeof a != "number")a = 1;
      return a
    }

    function allAxes() {
      return $.grep(xaxes.concat(yaxes), function (a) {
        return a
      })
    }

    function canvasToAxisCoords(pos) {
      var res = {}, i, axis;
      for (i = 0; i < xaxes.length; ++i) {
        axis = xaxes[i];
        if (axis && axis.used)res["x" + axis.n] = axis.c2p(pos.left)
      }
      for (i = 0; i < yaxes.length; ++i) {
        axis = yaxes[i];
        if (axis && axis.used)res["y" + axis.n] = axis.c2p(pos.top)
      }
      if (res.x1 !== undefined)res.x = res.x1;
      if (res.y1 !== undefined)res.y = res.y1;
      return res
    }

    function axisToCanvasCoords(pos) {
      var res = {}, i, axis, key;
      for (i = 0; i < xaxes.length; ++i) {
        axis = xaxes[i];
        if (axis && axis.used) {
          key = "x" + axis.n;
          if (pos[key] == null && axis.n == 1)key = "x";
          if (pos[key] != null) {
            res.left = axis.p2c(pos[key]);
            break
          }
        }
      }
      for (i = 0; i < yaxes.length; ++i) {
        axis = yaxes[i];
        if (axis && axis.used) {
          key = "y" + axis.n;
          if (pos[key] == null && axis.n == 1)key = "y";
          if (pos[key] != null) {
            res.top = axis.p2c(pos[key]);
            break
          }
        }
      }
      return res
    }

    function getOrCreateAxis(axes, number) {
      if (!axes[number - 1])axes[number - 1] = {
        n: number,
        direction: axes == xaxes ? "x" : "y",
        options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
      };
      return axes[number - 1]
    }

    function fillInSeriesOptions() {
      var neededColors = series.length, maxIndex = -1, i;
      for (i = 0; i < series.length; ++i) {
        var sc = series[i].color;
        if (sc != null) {
          neededColors--;
          if (typeof sc == "number" && sc > maxIndex) {
            maxIndex = sc
          }
        }
      }
      if (neededColors <= maxIndex) {
        neededColors = maxIndex + 1
      }
      var c, colors = [], colorPool = options.colors, colorPoolSize = colorPool.length, variation = 0;
      for (i = 0; i < neededColors; i++) {
        c = $.color.parse(colorPool[i % colorPoolSize] || "#666");
        if (i % colorPoolSize == 0 && i) {
          if (variation >= 0) {
            if (variation < .5) {
              variation = -variation - .2
            } else variation = 0
          } else variation = -variation
        }
        colors[i] = c.scale("rgb", 1 + variation)
      }
      var colori = 0, s;
      for (i = 0; i < series.length; ++i) {
        s = series[i];
        if (s.color == null) {
          s.color = colors[colori].toString();
          ++colori
        } else if (typeof s.color == "number")s.color = colors[s.color].toString();
        if (s.lines.show == null) {
          var v, show = true;
          for (v in s)if (s[v] && s[v].show) {
            show = false;
            break
          }
          if (show)s.lines.show = true
        }
        if (s.lines.zero == null) {
          s.lines.zero = !!s.lines.fill
        }
        s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
        s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"))
      }
    }

    function processData() {
      var topSentry = Number.POSITIVE_INFINITY, bottomSentry = Number.NEGATIVE_INFINITY, fakeInfinity = Number.MAX_VALUE, i, j, k, m, length, s, points, ps, x, y, axis, val, f, p, data, format;

      function updateAxis(axis, min, max) {
        if (min < axis.datamin && min != -fakeInfinity)axis.datamin = min;
        if (max > axis.datamax && max != fakeInfinity)axis.datamax = max
      }

      $.each(allAxes(), function (_, axis) {
        axis.datamin = topSentry;
        axis.datamax = bottomSentry;
        axis.used = false
      });
      for (i = 0; i < series.length; ++i) {
        s = series[i];
        s.datapoints = {points: []};
        executeHooks(hooks.processRawData, [s, s.data, s.datapoints])
      }
      for (i = 0; i < series.length; ++i) {
        s = series[i];
        data = s.data;
        format = s.datapoints.format;
        if (!format) {
          format = [];
          format.push({x: true, number: true, required: true});
          format.push({y: true, number: true, required: true});
          if (s.bars.show || s.lines.show && s.lines.fill) {
            var autoscale = !!(s.bars.show && s.bars.zero || s.lines.show && s.lines.zero);
            format.push({y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale});
            if (s.bars.horizontal) {
              delete format[format.length - 1].y;
              format[format.length - 1].x = true
            }
          }
          s.datapoints.format = format
        }
        if (s.datapoints.pointsize != null)continue;
        s.datapoints.pointsize = format.length;
        ps = s.datapoints.pointsize;
        points = s.datapoints.points;
        var insertSteps = s.lines.show && s.lines.steps;
        s.xaxis.used = s.yaxis.used = true;
        for (j = k = 0; j < data.length; ++j, k += ps) {
          p = data[j];
          var nullify = p == null;
          if (!nullify) {
            for (m = 0; m < ps; ++m) {
              val = p[m];
              f = format[m];
              if (f) {
                if (f.number && val != null) {
                  val = +val;
                  if (isNaN(val))val = null; else if (val == Infinity)val = fakeInfinity; else if (val == -Infinity)val = -fakeInfinity
                }
                if (val == null) {
                  if (f.required)nullify = true;
                  if (f.defaultValue != null)val = f.defaultValue
                }
              }
              points[k + m] = val
            }
          }
          if (nullify) {
            for (m = 0; m < ps; ++m) {
              val = points[k + m];
              if (val != null) {
                f = format[m];
                if (f.autoscale !== false) {
                  if (f.x) {
                    updateAxis(s.xaxis, val, val)
                  }
                  if (f.y) {
                    updateAxis(s.yaxis, val, val)
                  }
                }
              }
              points[k + m] = null
            }
          } else {
            if (insertSteps && k > 0 && points[k - ps] != null && points[k - ps] != points[k] && points[k - ps + 1] != points[k + 1]) {
              for (m = 0; m < ps; ++m)points[k + ps + m] = points[k + m];
              points[k + 1] = points[k - ps + 1];
              k += ps
            }
          }
        }
      }
      for (i = 0; i < series.length; ++i) {
        s = series[i];
        executeHooks(hooks.processDatapoints, [s, s.datapoints])
      }
      for (i = 0; i < series.length; ++i) {
        s = series[i];
        points = s.datapoints.points;
        ps = s.datapoints.pointsize;
        format = s.datapoints.format;
        var xmin = topSentry, ymin = topSentry, xmax = bottomSentry, ymax = bottomSentry;
        for (j = 0; j < points.length; j += ps) {
          if (points[j] == null)continue;
          for (m = 0; m < ps; ++m) {
            val = points[j + m];
            f = format[m];
            if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)continue;
            if (f.x) {
              if (val < xmin)xmin = val;
              if (val > xmax)xmax = val
            }
            if (f.y) {
              if (val < ymin)ymin = val;
              if (val > ymax)ymax = val
            }
          }
        }
        if (s.bars.show) {
          var delta;
          switch (s.bars.align) {
            case"left":
              delta = 0;
              break;
            case"right":
              delta = -s.bars.barWidth;
              break;
            default:
              delta = -s.bars.barWidth / 2
          }
          if (s.bars.horizontal) {
            ymin += delta;
            ymax += delta + s.bars.barWidth
          } else {
            xmin += delta;
            xmax += delta + s.bars.barWidth
          }
        }
        updateAxis(s.xaxis, xmin, xmax);
        updateAxis(s.yaxis, ymin, ymax)
      }
      $.each(allAxes(), function (_, axis) {
        if (axis.datamin == topSentry)axis.datamin = null;
        if (axis.datamax == bottomSentry)axis.datamax = null
      })
    }

    function setupCanvases() {
      placeholder.css("padding", 0).children().filter(function () {
        return !$(this).hasClass("flot-overlay") && !$(this).hasClass("flot-base")
      }).remove();
      if (placeholder.css("position") == "static")placeholder.css("position", "relative");
      surface = new Canvas("flot-base", placeholder);
      overlay = new Canvas("flot-overlay", placeholder);
      ctx = surface.context;
      octx = overlay.context;
      eventHolder = $(overlay.element).unbind();
      var existing = placeholder.data("plot");
      if (existing) {
        existing.shutdown();
        overlay.clear()
      }
      placeholder.data("plot", plot)
    }

    function bindEvents() {
      if (options.grid.hoverable) {
        eventHolder.mousemove(onMouseMove);
        eventHolder.bind("mouseleave", onMouseLeave)
      }
      if (options.grid.clickable)eventHolder.click(onClick);
      executeHooks(hooks.bindEvents, [eventHolder])
    }

    function shutdown() {
      if (redrawTimeout)clearTimeout(redrawTimeout);
      eventHolder.unbind("mousemove", onMouseMove);
      eventHolder.unbind("mouseleave", onMouseLeave);
      eventHolder.unbind("click", onClick);
      executeHooks(hooks.shutdown, [eventHolder])
    }

    function setTransformationHelpers(axis) {
      function identity(x) {
        return x
      }

      var s, m, t = axis.options.transform || identity, it = axis.options.inverseTransform;
      if (axis.direction == "x") {
        s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
        m = Math.min(t(axis.max), t(axis.min))
      } else {
        s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
        s = -s;
        m = Math.max(t(axis.max), t(axis.min))
      }
      if (t == identity)axis.p2c = function (p) {
        return (p - m) * s
      }; else axis.p2c = function (p) {
        return (t(p) - m) * s
      };
      if (!it)axis.c2p = function (c) {
        return m + c / s
      }; else axis.c2p = function (c) {
        return it(m + c / s)
      }
    }

    function measureTickLabels(axis) {
      var opts = axis.options, ticks = axis.ticks || [], labelWidth = opts.labelWidth || 0, labelHeight = opts.labelHeight || 0, maxWidth = labelWidth || (axis.direction == "x" ? Math.floor(surface.width / (ticks.length || 1)) : null), legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis", layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles, font = opts.font || "flot-tick-label tickLabel";
      for (var i = 0; i < ticks.length; ++i) {
        var t = ticks[i];
        if (!t.label)continue;
        var info = surface.getTextInfo(layer, t.label, font, null, maxWidth);
        labelWidth = Math.max(labelWidth, info.width);
        labelHeight = Math.max(labelHeight, info.height)
      }
      axis.labelWidth = opts.labelWidth || labelWidth;
      axis.labelHeight = opts.labelHeight || labelHeight
    }

    function allocateAxisBoxFirstPhase(axis) {
      var lw = axis.labelWidth, lh = axis.labelHeight, pos = axis.options.position, isXAxis = axis.direction === "x", tickLength = axis.options.tickLength, axisMargin = options.grid.axisMargin, padding = options.grid.labelMargin, innermost = true, outermost = true, first = true, found = false;
      $.each(isXAxis ? xaxes : yaxes, function (i, a) {
        if (a && (a.show || a.reserveSpace)) {
          if (a === axis) {
            found = true
          } else if (a.options.position === pos) {
            if (found) {
              outermost = false
            } else {
              innermost = false
            }
          }
          if (!found) {
            first = false
          }
        }
      });
      if (outermost) {
        axisMargin = 0
      }
      if (tickLength == null) {
        tickLength = first ? "full" : 5
      }
      if (!isNaN(+tickLength))padding += +tickLength;
      if (isXAxis) {
        lh += padding;
        if (pos == "bottom") {
          plotOffset.bottom += lh + axisMargin;
          axis.box = {top: surface.height - plotOffset.bottom, height: lh}
        } else {
          axis.box = {top: plotOffset.top + axisMargin, height: lh};
          plotOffset.top += lh + axisMargin
        }
      } else {
        lw += padding;
        if (pos == "left") {
          axis.box = {left: plotOffset.left + axisMargin, width: lw};
          plotOffset.left += lw + axisMargin
        } else {
          plotOffset.right += lw + axisMargin;
          axis.box = {left: surface.width - plotOffset.right, width: lw}
        }
      }
      axis.position = pos;
      axis.tickLength = tickLength;
      axis.box.padding = padding;
      axis.innermost = innermost
    }

    function allocateAxisBoxSecondPhase(axis) {
      if (axis.direction == "x") {
        axis.box.left = plotOffset.left - axis.labelWidth / 2;
        axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth
      } else {
        axis.box.top = plotOffset.top - axis.labelHeight / 2;
        axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight
      }
    }

    function adjustLayoutForThingsStickingOut() {
      var minMargin = options.grid.minBorderMargin, axis, i;
      if (minMargin == null) {
        minMargin = 0;
        for (i = 0; i < series.length; ++i)minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth / 2))
      }
      var margins = {left: minMargin, right: minMargin, top: minMargin, bottom: minMargin};
      $.each(allAxes(), function (_, axis) {
        if (axis.reserveSpace && axis.ticks && axis.ticks.length) {
          if (axis.direction === "x") {
            margins.left = Math.max(margins.left, axis.labelWidth / 2);
            margins.right = Math.max(margins.right, axis.labelWidth / 2)
          } else {
            margins.bottom = Math.max(margins.bottom, axis.labelHeight / 2);
            margins.top = Math.max(margins.top, axis.labelHeight / 2)
          }
        }
      });
      plotOffset.left = Math.ceil(Math.max(margins.left, plotOffset.left));
      plotOffset.right = Math.ceil(Math.max(margins.right, plotOffset.right));
      plotOffset.top = Math.ceil(Math.max(margins.top, plotOffset.top));
      plotOffset.bottom = Math.ceil(Math.max(margins.bottom, plotOffset.bottom))
    }

    function setupGrid() {
      var i, axes = allAxes(), showGrid = options.grid.show;
      for (var a in plotOffset) {
        var margin = options.grid.margin || 0;
        plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0
      }
      executeHooks(hooks.processOffset, [plotOffset]);
      for (var a in plotOffset) {
        if (typeof options.grid.borderWidth == "object") {
          plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0
        } else {
          plotOffset[a] += showGrid ? options.grid.borderWidth : 0
        }
      }
      $.each(axes, function (_, axis) {
        var axisOpts = axis.options;
        axis.show = axisOpts.show == null ? axis.used : axisOpts.show;
        axis.reserveSpace = axisOpts.reserveSpace == null ? axis.show : axisOpts.reserveSpace;
        setRange(axis)
      });
      if (showGrid) {
        var allocatedAxes = $.grep(axes, function (axis) {
          return axis.show || axis.reserveSpace
        });
        $.each(allocatedAxes, function (_, axis) {
          setupTickGeneration(axis);
          setTicks(axis);
          snapRangeToTicks(axis, axis.ticks);
          measureTickLabels(axis)
        });
        for (i = allocatedAxes.length - 1; i >= 0; --i)allocateAxisBoxFirstPhase(allocatedAxes[i]);
        adjustLayoutForThingsStickingOut();
        $.each(allocatedAxes, function (_, axis) {
          allocateAxisBoxSecondPhase(axis)
        })
      }
      plotWidth = surface.width - plotOffset.left - plotOffset.right;
      plotHeight = surface.height - plotOffset.bottom - plotOffset.top;
      $.each(axes, function (_, axis) {
        setTransformationHelpers(axis)
      });
      if (showGrid) {
        drawAxisLabels()
      }
      insertLegend()
    }

    function setRange(axis) {
      var opts = axis.options, min = +(opts.min != null ? opts.min : axis.datamin), max = +(opts.max != null ? opts.max : axis.datamax), delta = max - min;
      if (delta == 0) {
        var widen = max == 0 ? 1 : .01;
        if (opts.min == null)min -= widen;
        if (opts.max == null || opts.min != null)max += widen
      } else {
        var margin = opts.autoscaleMargin;
        if (margin != null) {
          if (opts.min == null) {
            min -= delta * margin;
            if (min < 0 && axis.datamin != null && axis.datamin >= 0)min = 0
          }
          if (opts.max == null) {
            max += delta * margin;
            if (max > 0 && axis.datamax != null && axis.datamax <= 0)max = 0
          }
        }
      }
      axis.min = min;
      axis.max = max
    }

    function setupTickGeneration(axis) {
      var opts = axis.options;
      var noTicks;
      if (typeof opts.ticks == "number" && opts.ticks > 0)noTicks = opts.ticks; else noTicks = .3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);
      var delta = (axis.max - axis.min) / noTicks, dec = -Math.floor(Math.log(delta) / Math.LN10), maxDec = opts.tickDecimals;
      if (maxDec != null && dec > maxDec) {
        dec = maxDec
      }
      var magn = Math.pow(10, -dec), norm = delta / magn, size;
      if (norm < 1.5) {
        size = 1
      } else if (norm < 3) {
        size = 2;
        if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
          size = 2.5;
          ++dec
        }
      } else if (norm < 7.5) {
        size = 5
      } else {
        size = 10
      }
      size *= magn;
      if (opts.minTickSize != null && size < opts.minTickSize) {
        size = opts.minTickSize
      }
      axis.delta = delta;
      axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
      axis.tickSize = opts.tickSize || size;
      if (opts.mode == "time" && !axis.tickGenerator) {
        throw new Error("Time mode requires the flot.time plugin.")
      }
      if (!axis.tickGenerator) {
        axis.tickGenerator = function (axis) {
          var ticks = [], start = floorInBase(axis.min, axis.tickSize), i = 0, v = Number.NaN, prev;
          do {
            prev = v;
            v = start + i * axis.tickSize;
            ticks.push(v);
            ++i
          } while (v < axis.max && v != prev);
          return ticks
        };
        axis.tickFormatter = function (value, axis) {
          var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
          var formatted = "" + Math.round(value * factor) / factor;
          if (axis.tickDecimals != null) {
            var decimal = formatted.indexOf(".");
            var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
            if (precision < axis.tickDecimals) {
              return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision)
            }
          }
          return formatted
        }
      }
      if ($.isFunction(opts.tickFormatter))axis.tickFormatter = function (v, axis) {
        return "" + opts.tickFormatter(v, axis)
      };
      if (opts.alignTicksWithAxis != null) {
        var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
        if (otherAxis && otherAxis.used && otherAxis != axis) {
          var niceTicks = axis.tickGenerator(axis);
          if (niceTicks.length > 0) {
            if (opts.min == null)axis.min = Math.min(axis.min, niceTicks[0]);
            if (opts.max == null && niceTicks.length > 1)axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1])
          }
          axis.tickGenerator = function (axis) {
            var ticks = [], v, i;
            for (i = 0; i < otherAxis.ticks.length; ++i) {
              v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
              v = axis.min + v * (axis.max - axis.min);
              ticks.push(v)
            }
            return ticks
          };
          if (!axis.mode && opts.tickDecimals == null) {
            var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1), ts = axis.tickGenerator(axis);
            if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))axis.tickDecimals = extraDec
          }
        }
      }
    }

    function setTicks(axis) {
      var oticks = axis.options.ticks, ticks = [];
      if (oticks == null || typeof oticks == "number" && oticks > 0)ticks = axis.tickGenerator(axis); else if (oticks) {
        if ($.isFunction(oticks))ticks = oticks(axis); else ticks = oticks
      }
      var i, v;
      axis.ticks = [];
      for (i = 0; i < ticks.length; ++i) {
        var label = null;
        var t = ticks[i];
        if (typeof t == "object") {
          v = +t[0];
          if (t.length > 1)label = t[1]
        } else v = +t;
        if (label == null)label = axis.tickFormatter(v, axis);
        if (!isNaN(v))axis.ticks.push({v: v, label: label})
      }
    }

    function snapRangeToTicks(axis, ticks) {
      if (axis.options.autoscaleMargin && ticks.length > 0) {
        if (axis.options.min == null)axis.min = Math.min(axis.min, ticks[0].v);
        if (axis.options.max == null && ticks.length > 1)axis.max = Math.max(axis.max, ticks[ticks.length - 1].v)
      }
    }

    function draw() {
      surface.clear();
      executeHooks(hooks.drawBackground, [ctx]);
      var grid = options.grid;
      if (grid.show && grid.backgroundColor)drawBackground();
      if (grid.show && !grid.aboveData) {
        drawGrid()
      }
      for (var i = 0; i < series.length; ++i) {
        executeHooks(hooks.drawSeries, [ctx, series[i]]);
        drawSeries(series[i])
      }
      executeHooks(hooks.draw, [ctx]);
      if (grid.show && grid.aboveData) {
        drawGrid()
      }
      surface.render();
      triggerRedrawOverlay()
    }

    function extractRange(ranges, coord) {
      var axis, from, to, key, axes = allAxes();
      for (var i = 0; i < axes.length; ++i) {
        axis = axes[i];
        if (axis.direction == coord) {
          key = coord + axis.n + "axis";
          if (!ranges[key] && axis.n == 1)key = coord + "axis";
          if (ranges[key]) {
            from = ranges[key].from;
            to = ranges[key].to;
            break
          }
        }
      }
      if (!ranges[key]) {
        axis = coord == "x" ? xaxes[0] : yaxes[0];
        from = ranges[coord + "1"];
        to = ranges[coord + "2"]
      }
      if (from != null && to != null && from > to) {
        var tmp = from;
        from = to;
        to = tmp
      }
      return {from: from, to: to, axis: axis}
    }

    function drawBackground() {
      ctx.save();
      ctx.translate(plotOffset.left, plotOffset.top);
      ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
      ctx.fillRect(0, 0, plotWidth, plotHeight);
      ctx.restore()
    }

    function drawGrid() {
      var i, axes, bw, bc;
      ctx.save();
      ctx.translate(plotOffset.left, plotOffset.top);
      var markings = options.grid.markings;
      if (markings) {
        if ($.isFunction(markings)) {
          axes = plot.getAxes();
          axes.xmin = axes.xaxis.min;
          axes.xmax = axes.xaxis.max;
          axes.ymin = axes.yaxis.min;
          axes.ymax = axes.yaxis.max;
          markings = markings(axes)
        }
        for (i = 0; i < markings.length; ++i) {
          var m = markings[i], xrange = extractRange(m, "x"), yrange = extractRange(m, "y");
          if (xrange.from == null)xrange.from = xrange.axis.min;
          if (xrange.to == null)xrange.to = xrange.axis.max;
          if (yrange.from == null)yrange.from = yrange.axis.min;
          if (yrange.to == null)yrange.to = yrange.axis.max;
          if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max || yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)continue;
          xrange.from = Math.max(xrange.from, xrange.axis.min);
          xrange.to = Math.min(xrange.to, xrange.axis.max);
          yrange.from = Math.max(yrange.from, yrange.axis.min);
          yrange.to = Math.min(yrange.to, yrange.axis.max);
          var xequal = xrange.from === xrange.to, yequal = yrange.from === yrange.to;
          if (xequal && yequal) {
            continue
          }
          xrange.from = Math.floor(xrange.axis.p2c(xrange.from));
          xrange.to = Math.floor(xrange.axis.p2c(xrange.to));
          yrange.from = Math.floor(yrange.axis.p2c(yrange.from));
          yrange.to = Math.floor(yrange.axis.p2c(yrange.to));
          if (xequal || yequal) {
            var lineWidth = m.lineWidth || options.grid.markingsLineWidth, subPixel = lineWidth % 2 ? .5 : 0;
            ctx.beginPath();
            ctx.strokeStyle = m.color || options.grid.markingsColor;
            ctx.lineWidth = lineWidth;
            if (xequal) {
              ctx.moveTo(xrange.to + subPixel, yrange.from);
              ctx.lineTo(xrange.to + subPixel, yrange.to)
            } else {
              ctx.moveTo(xrange.from, yrange.to + subPixel);
              ctx.lineTo(xrange.to, yrange.to + subPixel)
            }
            ctx.stroke()
          } else {
            ctx.fillStyle = m.color || options.grid.markingsColor;
            ctx.fillRect(xrange.from, yrange.to, xrange.to - xrange.from, yrange.from - yrange.to)
          }
        }
      }
      axes = allAxes();
      bw = options.grid.borderWidth;
      for (var j = 0; j < axes.length; ++j) {
        var axis = axes[j], box = axis.box, t = axis.tickLength, x, y, xoff, yoff;
        if (!axis.show || axis.ticks.length == 0)continue;
        ctx.lineWidth = 1;
        if (axis.direction == "x") {
          x = 0;
          if (t == "full")y = axis.position == "top" ? 0 : plotHeight; else y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0)
        } else {
          y = 0;
          if (t == "full")x = axis.position == "left" ? 0 : plotWidth; else x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0)
        }
        if (!axis.innermost) {
          ctx.strokeStyle = axis.options.color;
          ctx.beginPath();
          xoff = yoff = 0;
          if (axis.direction == "x")xoff = plotWidth + 1; else yoff = plotHeight + 1;
          if (ctx.lineWidth == 1) {
            if (axis.direction == "x") {
              y = Math.floor(y) + .5
            } else {
              x = Math.floor(x) + .5
            }
          }
          ctx.moveTo(x, y);
          ctx.lineTo(x + xoff, y + yoff);
          ctx.stroke()
        }
        ctx.strokeStyle = axis.options.tickColor;
        ctx.beginPath();
        for (i = 0; i < axis.ticks.length; ++i) {
          var v = axis.ticks[i].v;
          xoff = yoff = 0;
          if (isNaN(v) || v < axis.min || v > axis.max || t == "full" && (typeof bw == "object" && bw[axis.position] > 0 || bw > 0) && (v == axis.min || v == axis.max))continue;
          if (axis.direction == "x") {
            x = axis.p2c(v);
            yoff = t == "full" ? -plotHeight : t;
            if (axis.position == "top")yoff = -yoff
          } else {
            y = axis.p2c(v);
            xoff = t == "full" ? -plotWidth : t;
            if (axis.position == "left")xoff = -xoff
          }
          if (ctx.lineWidth == 1) {
            if (axis.direction == "x")x = Math.floor(x) + .5; else y = Math.floor(y) + .5
          }
          ctx.moveTo(x, y);
          ctx.lineTo(x + xoff, y + yoff)
        }
        ctx.stroke()
      }
      if (bw) {
        bc = options.grid.borderColor;
        if (typeof bw == "object" || typeof bc == "object") {
          if (typeof bw !== "object") {
            bw = {top: bw, right: bw, bottom: bw, left: bw}
          }
          if (typeof bc !== "object") {
            bc = {top: bc, right: bc, bottom: bc, left: bc}
          }
          if (bw.top > 0) {
            ctx.strokeStyle = bc.top;
            ctx.lineWidth = bw.top;
            ctx.beginPath();
            ctx.moveTo(0 - bw.left, 0 - bw.top / 2);
            ctx.lineTo(plotWidth, 0 - bw.top / 2);
            ctx.stroke()
          }
          if (bw.right > 0) {
            ctx.strokeStyle = bc.right;
            ctx.lineWidth = bw.right;
            ctx.beginPath();
            ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);
            ctx.lineTo(plotWidth + bw.right / 2, plotHeight);
            ctx.stroke()
          }
          if (bw.bottom > 0) {
            ctx.strokeStyle = bc.bottom;
            ctx.lineWidth = bw.bottom;
            ctx.beginPath();
            ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);
            ctx.lineTo(0, plotHeight + bw.bottom / 2);
            ctx.stroke()
          }
          if (bw.left > 0) {
            ctx.strokeStyle = bc.left;
            ctx.lineWidth = bw.left;
            ctx.beginPath();
            ctx.moveTo(0 - bw.left / 2, plotHeight + bw.bottom);
            ctx.lineTo(0 - bw.left / 2, 0);
            ctx.stroke()
          }
        } else {
          ctx.lineWidth = bw;
          ctx.strokeStyle = options.grid.borderColor;
          ctx.strokeRect(-bw / 2, -bw / 2, plotWidth + bw, plotHeight + bw)
        }
      }
      ctx.restore()
    }

    function drawAxisLabels() {
      $.each(allAxes(), function (_, axis) {
        var box = axis.box, legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis", layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles, font = axis.options.font || "flot-tick-label tickLabel", tick, x, y, halign, valign;
        surface.removeText(layer);
        if (!axis.show || axis.ticks.length == 0)return;
        for (var i = 0; i < axis.ticks.length; ++i) {
          tick = axis.ticks[i];
          if (!tick.label || tick.v < axis.min || tick.v > axis.max)continue;
          if (axis.direction == "x") {
            halign = "center";
            x = plotOffset.left + axis.p2c(tick.v);
            if (axis.position == "bottom") {
              y = box.top + box.padding
            } else {
              y = box.top + box.height - box.padding;
              valign = "bottom"
            }
          } else {
            valign = "middle";
            y = plotOffset.top + axis.p2c(tick.v);
            if (axis.position == "left") {
              x = box.left + box.width - box.padding;
              halign = "right"
            } else {
              x = box.left + box.padding
            }
          }
          surface.addText(layer, x, y, tick.label, font, null, null, halign, valign)
        }
      })
    }

    function drawSeries(series) {
      if (series.lines.show)drawSeriesLines(series);
      if (series.bars.show)drawSeriesBars(series);
      if (series.points.show)drawSeriesPoints(series)
    }

    function drawSeriesLines(series) {
      function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
        var points = datapoints.points, ps = datapoints.pointsize, prevx = null, prevy = null;
        ctx.beginPath();
        for (var i = ps; i < points.length; i += ps) {
          var x1 = points[i - ps], y1 = points[i - ps + 1], x2 = points[i], y2 = points[i + 1];
          if (x1 == null || x2 == null)continue;
          if (y1 <= y2 && y1 < axisy.min) {
            if (y2 < axisy.min)continue;
            x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
            y1 = axisy.min
          } else if (y2 <= y1 && y2 < axisy.min) {
            if (y1 < axisy.min)continue;
            x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
            y2 = axisy.min
          }
          if (y1 >= y2 && y1 > axisy.max) {
            if (y2 > axisy.max)continue;
            x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
            y1 = axisy.max
          } else if (y2 >= y1 && y2 > axisy.max) {
            if (y1 > axisy.max)continue;
            x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
            y2 = axisy.max
          }
          if (x1 <= x2 && x1 < axisx.min) {
            if (x2 < axisx.min)continue;
            y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
            x1 = axisx.min
          } else if (x2 <= x1 && x2 < axisx.min) {
            if (x1 < axisx.min)continue;
            y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
            x2 = axisx.min
          }
          if (x1 >= x2 && x1 > axisx.max) {
            if (x2 > axisx.max)continue;
            y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
            x1 = axisx.max
          } else if (x2 >= x1 && x2 > axisx.max) {
            if (x1 > axisx.max)continue;
            y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
            x2 = axisx.max
          }
          if (x1 != prevx || y1 != prevy)ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);
          prevx = x2;
          prevy = y2;
          ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset)
        }
        ctx.stroke()
      }

      function plotLineArea(datapoints, axisx, axisy) {
        var points = datapoints.points, ps = datapoints.pointsize, bottom = Math.min(Math.max(0, axisy.min), axisy.max), i = 0, top, areaOpen = false, ypos = 1, segmentStart = 0, segmentEnd = 0;
        while (true) {
          if (ps > 0 && i > points.length + ps)break;
          i += ps;
          var x1 = points[i - ps], y1 = points[i - ps + ypos], x2 = points[i], y2 = points[i + ypos];
          if (areaOpen) {
            if (ps > 0 && x1 != null && x2 == null) {
              segmentEnd = i;
              ps = -ps;
              ypos = 2;
              continue
            }
            if (ps < 0 && i == segmentStart + ps) {
              ctx.fill();
              areaOpen = false;
              ps = -ps;
              ypos = 1;
              i = segmentStart = segmentEnd + ps;
              continue
            }
          }
          if (x1 == null || x2 == null)continue;
          if (x1 <= x2 && x1 < axisx.min) {
            if (x2 < axisx.min)continue;
            y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
            x1 = axisx.min
          } else if (x2 <= x1 && x2 < axisx.min) {
            if (x1 < axisx.min)continue;
            y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
            x2 = axisx.min
          }
          if (x1 >= x2 && x1 > axisx.max) {
            if (x2 > axisx.max)continue;
            y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
            x1 = axisx.max
          } else if (x2 >= x1 && x2 > axisx.max) {
            if (x1 > axisx.max)continue;
            y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
            x2 = axisx.max
          }
          if (!areaOpen) {
            ctx.beginPath();
            ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
            areaOpen = true
          }
          if (y1 >= axisy.max && y2 >= axisy.max) {
            ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
            ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
            continue
          } else if (y1 <= axisy.min && y2 <= axisy.min) {
            ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
            ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
            continue
          }
          var x1old = x1, x2old = x2;
          if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
            x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
            y1 = axisy.min
          } else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
            x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
            y2 = axisy.min
          }
          if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
            x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
            y1 = axisy.max
          } else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
            x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
            y2 = axisy.max
          }
          if (x1 != x1old) {
            ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1))
          }
          ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
          ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
          if (x2 != x2old) {
            ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
            ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2))
          }
        }
      }

      ctx.save();
      ctx.translate(plotOffset.left, plotOffset.top);
      ctx.lineJoin = "round";
      var lw = series.lines.lineWidth, sw = series.shadowSize;
      if (lw > 0 && sw > 0) {
        ctx.lineWidth = sw;
        ctx.strokeStyle = "rgba(0,0,0,0.1)";
        var angle = Math.PI / 18;
        plotLine(series.datapoints, Math.sin(angle) * (lw / 2 + sw / 2), Math.cos(angle) * (lw / 2 + sw / 2), series.xaxis, series.yaxis);
        ctx.lineWidth = sw / 2;
        plotLine(series.datapoints, Math.sin(angle) * (lw / 2 + sw / 4), Math.cos(angle) * (lw / 2 + sw / 4), series.xaxis, series.yaxis)
      }
      ctx.lineWidth = lw;
      ctx.strokeStyle = series.color;
      var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
      if (fillStyle) {
        ctx.fillStyle = fillStyle;
        plotLineArea(series.datapoints, series.xaxis, series.yaxis)
      }
      if (lw > 0)plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
      ctx.restore()
    }

    function drawSeriesPoints(series) {
      function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
        var points = datapoints.points, ps = datapoints.pointsize;
        for (var i = 0; i < points.length; i += ps) {
          var x = points[i], y = points[i + 1];
          if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)continue;
          ctx.beginPath();
          x = axisx.p2c(x);
          y = axisy.p2c(y) + offset;
          if (symbol == "circle")ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false); else symbol(ctx, x, y, radius, shadow);
          ctx.closePath();
          if (fillStyle) {
            ctx.fillStyle = fillStyle;
            ctx.fill()
          }
          ctx.stroke()
        }
      }

      ctx.save();
      ctx.translate(plotOffset.left, plotOffset.top);
      var lw = series.points.lineWidth, sw = series.shadowSize, radius = series.points.radius, symbol = series.points.symbol;
      if (lw == 0)lw = 1e-4;
      if (lw > 0 && sw > 0) {
        var w = sw / 2;
        ctx.lineWidth = w;
        ctx.strokeStyle = "rgba(0,0,0,0.1)";
        plotPoints(series.datapoints, radius, null, w + w / 2, true, series.xaxis, series.yaxis, symbol);
        ctx.strokeStyle = "rgba(0,0,0,0.2)";
        plotPoints(series.datapoints, radius, null, w / 2, true, series.xaxis, series.yaxis, symbol)
      }
      ctx.lineWidth = lw;
      ctx.strokeStyle = series.color;
      plotPoints(series.datapoints, radius, getFillStyle(series.points, series.color), 0, false, series.xaxis, series.yaxis, symbol);
      ctx.restore()
    }

    function drawBar(x, y, b, barLeft, barRight, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
      var left, right, bottom, top, drawLeft, drawRight, drawTop, drawBottom, tmp;
      if (horizontal) {
        drawBottom = drawRight = drawTop = true;
        drawLeft = false;
        left = b;
        right = x;
        top = y + barLeft;
        bottom = y + barRight;
        if (right < left) {
          tmp = right;
          right = left;
          left = tmp;
          drawLeft = true;
          drawRight = false
        }
      } else {
        drawLeft = drawRight = drawTop = true;
        drawBottom = false;
        left = x + barLeft;
        right = x + barRight;
        bottom = b;
        top = y;
        if (top < bottom) {
          tmp = top;
          top = bottom;
          bottom = tmp;
          drawBottom = true;
          drawTop = false
        }
      }
      if (right < axisx.min || left > axisx.max || top < axisy.min || bottom > axisy.max)return;
      if (left < axisx.min) {
        left = axisx.min;
        drawLeft = false
      }
      if (right > axisx.max) {
        right = axisx.max;
        drawRight = false
      }
      if (bottom < axisy.min) {
        bottom = axisy.min;
        drawBottom = false
      }
      if (top > axisy.max) {
        top = axisy.max;
        drawTop = false
      }
      left = axisx.p2c(left);
      bottom = axisy.p2c(bottom);
      right = axisx.p2c(right);
      top = axisy.p2c(top);
      if (fillStyleCallback) {
        c.fillStyle = fillStyleCallback(bottom, top);
        c.fillRect(left, top, right - left, bottom - top)
      }
      if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
        c.beginPath();
        c.moveTo(left, bottom);
        if (drawLeft)c.lineTo(left, top); else c.moveTo(left, top);
        if (drawTop)c.lineTo(right, top); else c.moveTo(right, top);
        if (drawRight)c.lineTo(right, bottom); else c.moveTo(right, bottom);
        if (drawBottom)c.lineTo(left, bottom); else c.moveTo(left, bottom);
        c.stroke()
      }
    }

    function drawSeriesBars(series) {
      function plotBars(datapoints, barLeft, barRight, fillStyleCallback, axisx, axisy) {
        var points = datapoints.points, ps = datapoints.pointsize;
        for (var i = 0; i < points.length; i += ps) {
          if (points[i] == null)continue;
          drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth)
        }
      }

      ctx.save();
      ctx.translate(plotOffset.left, plotOffset.top);
      ctx.lineWidth = series.bars.lineWidth;
      ctx.strokeStyle = series.color;
      var barLeft;
      switch (series.bars.align) {
        case"left":
          barLeft = 0;
          break;
        case"right":
          barLeft = -series.bars.barWidth;
          break;
        default:
          barLeft = -series.bars.barWidth / 2
      }
      var fillStyleCallback = series.bars.fill ? function (bottom, top) {
        return getFillStyle(series.bars, series.color, bottom, top)
      } : null;
      plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, fillStyleCallback, series.xaxis, series.yaxis);
      ctx.restore()
    }

    function getFillStyle(filloptions, seriesColor, bottom, top) {
      var fill = filloptions.fill;
      if (!fill)return null;
      if (filloptions.fillColor)return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);
      var c = $.color.parse(seriesColor);
      c.a = typeof fill == "number" ? fill : .4;
      c.normalize();
      return c.toString()
    }

    function insertLegend() {
      if (options.legend.container != null) {
        $(options.legend.container).html("")
      } else {
        placeholder.find(".legend").remove()
      }
      if (!options.legend.show) {
        return
      }
      var fragments = [], entries = [], rowStarted = false, lf = options.legend.labelFormatter, s, label;
      for (var i = 0; i < series.length; ++i) {
        s = series[i];
        if (s.label) {
          label = lf ? lf(s.label, s) : s.label;
          if (label) {
            entries.push({label: label, color: s.color})
          }
        }
      }
      if (options.legend.sorted) {
        if ($.isFunction(options.legend.sorted)) {
          entries.sort(options.legend.sorted)
        } else if (options.legend.sorted == "reverse") {
          entries.reverse()
        } else {
          var ascending = options.legend.sorted != "descending";
          entries.sort(function (a, b) {
            return a.label == b.label ? 0 : a.label < b.label != ascending ? 1 : -1
          })
        }
      }
      for (var i = 0; i < entries.length; ++i) {
        var entry = entries[i];
        if (i % options.legend.noColumns == 0) {
          if (rowStarted)fragments.push("</tr>");
          fragments.push("<tr>");
          rowStarted = true
        }
        fragments.push('<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' + '<td class="legendLabel">' + entry.label + "</td>")
      }
      if (rowStarted)fragments.push("</tr>");
      if (fragments.length == 0)return;
      var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + "</table>";
      if (options.legend.container != null)$(options.legend.container).html(table); else {
        var pos = "", p = options.legend.position, m = options.legend.margin;
        if (m[0] == null)m = [m, m];
        if (p.charAt(0) == "n")pos += "top:" + (m[1] + plotOffset.top) + "px;"; else if (p.charAt(0) == "s")pos += "bottom:" + (m[1] + plotOffset.bottom) + "px;";
        if (p.charAt(1) == "e")pos += "right:" + (m[0] + plotOffset.right) + "px;"; else if (p.charAt(1) == "w")pos += "left:" + (m[0] + plotOffset.left) + "px;";
        var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos + ";") + "</div>").appendTo(placeholder);
        if (options.legend.backgroundOpacity != 0) {
          var c = options.legend.backgroundColor;
          if (c == null) {
            c = options.grid.backgroundColor;
            if (c && typeof c == "string")c = $.color.parse(c); else c = $.color.extract(legend, "background-color");
            c.a = 1;
            c = c.toString()
          }
          var div = legend.children();
          $('<div style="position:absolute;width:' + div.width() + "px;height:" + div.height() + "px;" + pos + "background-color:" + c + ';"> </div>').prependTo(legend).css("opacity", options.legend.backgroundOpacity)
        }
      }
    }

    var highlights = [], redrawTimeout = null;

    function findNearbyItem(mouseX, mouseY, seriesFilter) {
      var maxDistance = options.grid.mouseActiveRadius, smallestDistance = maxDistance * maxDistance + 1, item = null, foundPoint = false, i, j, ps;
      for (i = series.length - 1; i >= 0; --i) {
        if (!seriesFilter(series[i]))continue;
        var s = series[i], axisx = s.xaxis, axisy = s.yaxis, points = s.datapoints.points, mx = axisx.c2p(mouseX), my = axisy.c2p(mouseY), maxx = maxDistance / axisx.scale, maxy = maxDistance / axisy.scale;
        ps = s.datapoints.pointsize;
        if (axisx.options.inverseTransform)maxx = Number.MAX_VALUE;
        if (axisy.options.inverseTransform)maxy = Number.MAX_VALUE;
        if (s.lines.show || s.points.show) {
          for (j = 0; j < points.length; j += ps) {
            var x = points[j], y = points[j + 1];
            if (x == null)continue;
            if (x - mx > maxx || x - mx < -maxx || y - my > maxy || y - my < -maxy)continue;
            var dx = Math.abs(axisx.p2c(x) - mouseX), dy = Math.abs(axisy.p2c(y) - mouseY), dist = dx * dx + dy * dy;
            if (dist < smallestDistance) {
              smallestDistance = dist;
              item = [i, j / ps]
            }
          }
        }
        if (s.bars.show && !item) {
          var barLeft, barRight;
          switch (s.bars.align) {
            case"left":
              barLeft = 0;
              break;
            case"right":
              barLeft = -s.bars.barWidth;
              break;
            default:
              barLeft = -s.bars.barWidth / 2
          }
          barRight = barLeft + s.bars.barWidth;
          for (j = 0; j < points.length; j += ps) {
            var x = points[j], y = points[j + 1], b = points[j + 2];
            if (x == null)continue;
            if (series[i].bars.horizontal ? mx <= Math.max(b, x) && mx >= Math.min(b, x) && my >= y + barLeft && my <= y + barRight : mx >= x + barLeft && mx <= x + barRight && my >= Math.min(b, y) && my <= Math.max(b, y))item = [i, j / ps]
          }
        }
      }
      if (item) {
        i = item[0];
        j = item[1];
        ps = series[i].datapoints.pointsize;
        return {
          datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
          dataIndex: j,
          series: series[i],
          seriesIndex: i
        }
      }
      return null
    }

    function onMouseMove(e) {
      if (options.grid.hoverable)triggerClickHoverEvent("plothover", e, function (s) {
        return s["hoverable"] != false
      })
    }

    function onMouseLeave(e) {
      if (options.grid.hoverable)triggerClickHoverEvent("plothover", e, function (s) {
        return false
      })
    }

    function onClick(e) {
      triggerClickHoverEvent("plotclick", e, function (s) {
        return s["clickable"] != false
      })
    }

    function triggerClickHoverEvent(eventname, event, seriesFilter) {
      var offset = eventHolder.offset(), canvasX = event.pageX - offset.left - plotOffset.left, canvasY = event.pageY - offset.top - plotOffset.top, pos = canvasToAxisCoords({
        left: canvasX,
        top: canvasY
      });
      pos.pageX = event.pageX;
      pos.pageY = event.pageY;
      var item = findNearbyItem(canvasX, canvasY, seriesFilter);
      if (item) {
        item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);
        item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10)
      }
      if (options.grid.autoHighlight) {
        for (var i = 0; i < highlights.length; ++i) {
          var h = highlights[i];
          if (h.auto == eventname && !(item && h.series == item.series && h.point[0] == item.datapoint[0] && h.point[1] == item.datapoint[1]))unhighlight(h.series, h.point)
        }
        if (item)highlight(item.series, item.datapoint, eventname)
      }
      placeholder.trigger(eventname, [pos, item])
    }

    function triggerRedrawOverlay() {
      var t = options.interaction.redrawOverlayInterval;
      if (t == -1) {
        drawOverlay();
        return
      }
      if (!redrawTimeout)redrawTimeout = setTimeout(drawOverlay, t)
    }

    function drawOverlay() {
      redrawTimeout = null;
      octx.save();
      overlay.clear();
      octx.translate(plotOffset.left, plotOffset.top);
      var i, hi;
      for (i = 0; i < highlights.length; ++i) {
        hi = highlights[i];
        if (hi.series.bars.show)drawBarHighlight(hi.series, hi.point); else drawPointHighlight(hi.series, hi.point)
      }
      octx.restore();
      executeHooks(hooks.drawOverlay, [octx])
    }

    function highlight(s, point, auto) {
      if (typeof s == "number")s = series[s];
      if (typeof point == "number") {
        var ps = s.datapoints.pointsize;
        point = s.datapoints.points.slice(ps * point, ps * (point + 1))
      }
      var i = indexOfHighlight(s, point);
      if (i == -1) {
        highlights.push({series: s, point: point, auto: auto});
        triggerRedrawOverlay()
      } else if (!auto)highlights[i].auto = false
    }

    function unhighlight(s, point) {
      if (s == null && point == null) {
        highlights = [];
        triggerRedrawOverlay();
        return
      }
      if (typeof s == "number")s = series[s];
      if (typeof point == "number") {
        var ps = s.datapoints.pointsize;
        point = s.datapoints.points.slice(ps * point, ps * (point + 1))
      }
      var i = indexOfHighlight(s, point);
      if (i != -1) {
        highlights.splice(i, 1);
        triggerRedrawOverlay()
      }
    }

    function indexOfHighlight(s, p) {
      for (var i = 0; i < highlights.length; ++i) {
        var h = highlights[i];
        if (h.series == s && h.point[0] == p[0] && h.point[1] == p[1])return i
      }
      return -1
    }

    function drawPointHighlight(series, point) {
      var x = point[0], y = point[1], axisx = series.xaxis, axisy = series.yaxis, highlightColor = typeof series.highlightColor === "string" ? series.highlightColor : $.color.parse(series.color).scale("a", .5).toString();
      if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)return;
      var pointRadius = series.points.radius + series.points.lineWidth / 2;
      octx.lineWidth = pointRadius;
      octx.strokeStyle = highlightColor;
      var radius = 1.5 * pointRadius;
      x = axisx.p2c(x);
      y = axisy.p2c(y);
      octx.beginPath();
      if (series.points.symbol == "circle")octx.arc(x, y, radius, 0, 2 * Math.PI, false); else series.points.symbol(octx, x, y, radius, false);
      octx.closePath();
      octx.stroke()
    }

    function drawBarHighlight(series, point) {
      var highlightColor = typeof series.highlightColor === "string" ? series.highlightColor : $.color.parse(series.color).scale("a", .5).toString(), fillStyle = highlightColor, barLeft;
      switch (series.bars.align) {
        case"left":
          barLeft = 0;
          break;
        case"right":
          barLeft = -series.bars.barWidth;
          break;
        default:
          barLeft = -series.bars.barWidth / 2
      }
      octx.lineWidth = series.bars.lineWidth;
      octx.strokeStyle = highlightColor;
      drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth, function () {
        return fillStyle
      }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth)
    }

    function getColorOrGradient(spec, bottom, top, defaultColor) {
      if (typeof spec == "string")return spec; else {
        var gradient = ctx.createLinearGradient(0, top, 0, bottom);
        for (var i = 0, l = spec.colors.length; i < l; ++i) {
          var c = spec.colors[i];
          if (typeof c != "string") {
            var co = $.color.parse(defaultColor);
            if (c.brightness != null)co = co.scale("rgb", c.brightness);
            if (c.opacity != null)co.a *= c.opacity;
            c = co.toString()
          }
          gradient.addColorStop(i / (l - 1), c)
        }
        return gradient
      }
    }
  }

  $.plot = function (placeholder, data, options) {
    var plot = new Plot($(placeholder), data, options, $.plot.plugins);
    return plot
  };
  $.plot.version = "0.8.3";
  $.plot.plugins = [];
  $.fn.plot = function (data, options) {
    return this.each(function () {
      $.plot(this, data, options)
    })
  };
  function floorInBase(n, base) {
    return base * Math.floor(n / base)
  }
})(jQuery);

/*!
 * Flot plugin for rendering pie charts.
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 * Created by Brian Medendorp
 * Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars
 */
(function ($) {
  var REDRAW_ATTEMPTS = 10;
  var REDRAW_SHRINK = .95;

  function init(plot) {
    var canvas = null, target = null, options = null, maxRadius = null, centerLeft = null, centerTop = null, processed = false, ctx = null;
    var highlights = [];
    plot.hooks.processOptions.push(function (plot, options) {
      if (options.series.pie.show) {
        options.grid.show = false;
        if (options.series.pie.label.show == "auto") {
          if (options.legend.show) {
            options.series.pie.label.show = false
          } else {
            options.series.pie.label.show = true
          }
        }
        if (options.series.pie.radius == "auto") {
          if (options.series.pie.label.show) {
            options.series.pie.radius = 3 / 4
          } else {
            options.series.pie.radius = 1
          }
        }
        if (options.series.pie.tilt > 1) {
          options.series.pie.tilt = 1
        } else if (options.series.pie.tilt < 0) {
          options.series.pie.tilt = 0
        }
      }
    });
    plot.hooks.bindEvents.push(function (plot, eventHolder) {
      var options = plot.getOptions();
      if (options.series.pie.show) {
        if (options.grid.hoverable) {
          eventHolder.unbind("mousemove").mousemove(onMouseMove)
        }
        if (options.grid.clickable) {
          eventHolder.unbind("click").click(onClick)
        }
      }
    });
    plot.hooks.processDatapoints.push(function (plot, series, data, datapoints) {
      var options = plot.getOptions();
      if (options.series.pie.show) {
        processDatapoints(plot, series, data, datapoints)
      }
    });
    plot.hooks.drawOverlay.push(function (plot, octx) {
      var options = plot.getOptions();
      if (options.series.pie.show) {
        drawOverlay(plot, octx)
      }
    });
    plot.hooks.draw.push(function (plot, newCtx) {
      var options = plot.getOptions();
      if (options.series.pie.show) {
        draw(plot, newCtx)
      }
    });
    function processDatapoints(plot, series, datapoints) {
      if (!processed) {
        processed = true;
        canvas = plot.getCanvas();
        target = $(canvas).parent();
        options = plot.getOptions();
        plot.setData(combine(plot.getData()))
      }
    }

    function combine(data) {
      var total = 0, combined = 0, numCombined = 0, color = options.series.pie.combine.color, newdata = [];
      for (var i = 0; i < data.length; ++i) {
        var value = data[i].data;
        if ($.isArray(value) && value.length == 1) {
          value = value[0]
        }
        if ($.isArray(value)) {
          if (!isNaN(parseFloat(value[1])) && isFinite(value[1])) {
            value[1] = +value[1]
          } else {
            value[1] = 0
          }
        } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
          value = [1, +value]
        } else {
          value = [1, 0]
        }
        data[i].data = [value]
      }
      for (var i = 0; i < data.length; ++i) {
        total += data[i].data[0][1]
      }
      for (var i = 0; i < data.length; ++i) {
        var value = data[i].data[0][1];
        if (value / total <= options.series.pie.combine.threshold) {
          combined += value;
          numCombined++;
          if (!color) {
            color = data[i].color
          }
        }
      }
      for (var i = 0; i < data.length; ++i) {
        var value = data[i].data[0][1];
        if (numCombined < 2 || value / total > options.series.pie.combine.threshold) {
          newdata.push($.extend(data[i], {
            data: [[1, value]],
            color: data[i].color,
            label: data[i].label,
            angle: value * Math.PI * 2 / total,
            percent: value / (total / 100)
          }))
        }
      }
      if (numCombined > 1) {
        newdata.push({
          data: [[1, combined]],
          color: color,
          label: options.series.pie.combine.label,
          angle: combined * Math.PI * 2 / total,
          percent: combined / (total / 100)
        })
      }
      return newdata
    }

    function draw(plot, newCtx) {
      if (!target) {
        return
      }
      var canvasWidth = plot.getPlaceholder().width(), canvasHeight = plot.getPlaceholder().height(), legendWidth = target.children().filter(".legend").children().width() || 0;
      ctx = newCtx;
      processed = false;
      maxRadius = Math.min(canvasWidth, canvasHeight / options.series.pie.tilt) / 2;
      centerTop = canvasHeight / 2 + options.series.pie.offset.top;
      centerLeft = canvasWidth / 2;
      if (options.series.pie.offset.left == "auto") {
        if (options.legend.position.match("w")) {
          centerLeft += legendWidth / 2
        } else {
          centerLeft -= legendWidth / 2
        }
        if (centerLeft < maxRadius) {
          centerLeft = maxRadius
        } else if (centerLeft > canvasWidth - maxRadius) {
          centerLeft = canvasWidth - maxRadius
        }
      } else {
        centerLeft += options.series.pie.offset.left
      }
      var slices = plot.getData(), attempts = 0;
      do {
        if (attempts > 0) {
          maxRadius *= REDRAW_SHRINK
        }
        attempts += 1;
        clear();
        if (options.series.pie.tilt <= .8) {
          drawShadow()
        }
      } while (!drawPie() && attempts < REDRAW_ATTEMPTS);
      if (attempts >= REDRAW_ATTEMPTS) {
        clear();
        target.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")
      }
      if (plot.setSeries && plot.insertLegend) {
        plot.setSeries(slices);
        plot.insertLegend()
      }
      function clear() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        target.children().filter(".pieLabel, .pieLabelBackground").remove()
      }

      function drawShadow() {
        var shadowLeft = options.series.pie.shadow.left;
        var shadowTop = options.series.pie.shadow.top;
        var edge = 10;
        var alpha = options.series.pie.shadow.alpha;
        var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;
        if (radius >= canvasWidth / 2 - shadowLeft || radius * options.series.pie.tilt >= canvasHeight / 2 - shadowTop || radius <= edge) {
          return
        }
        ctx.save();
        ctx.translate(shadowLeft, shadowTop);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "#000";
        ctx.translate(centerLeft, centerTop);
        ctx.scale(1, options.series.pie.tilt);
        for (var i = 1; i <= edge; i++) {
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
          ctx.fill();
          radius -= i
        }
        ctx.restore()
      }

      function drawPie() {
        var startAngle = Math.PI * options.series.pie.startAngle;
        var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;
        ctx.save();
        ctx.translate(centerLeft, centerTop);
        ctx.scale(1, options.series.pie.tilt);
        ctx.save();
        var currentAngle = startAngle;
        for (var i = 0; i < slices.length; ++i) {
          slices[i].startAngle = currentAngle;
          drawSlice(slices[i].angle, slices[i].color, true)
        }
        ctx.restore();
        if (options.series.pie.stroke.width > 0) {
          ctx.save();
          ctx.lineWidth = options.series.pie.stroke.width;
          currentAngle = startAngle;
          for (var i = 0; i < slices.length; ++i) {
            drawSlice(slices[i].angle, options.series.pie.stroke.color, false)
          }
          ctx.restore()
        }
        drawDonutHole(ctx);
        ctx.restore();
        if (options.series.pie.label.show) {
          return drawLabels()
        } else return true;
        function drawSlice(angle, color, fill) {
          if (angle <= 0 || isNaN(angle)) {
            return
          }
          if (fill) {
            ctx.fillStyle = color
          } else {
            ctx.strokeStyle = color;
            ctx.lineJoin = "round"
          }
          ctx.beginPath();
          if (Math.abs(angle - Math.PI * 2) > 1e-9) {
            ctx.moveTo(0, 0)
          }
          ctx.arc(0, 0, radius, currentAngle, currentAngle + angle / 2, false);
          ctx.arc(0, 0, radius, currentAngle + angle / 2, currentAngle + angle, false);
          ctx.closePath();
          currentAngle += angle;
          if (fill) {
            ctx.fill()
          } else {
            ctx.stroke()
          }
        }

        function drawLabels() {
          var currentAngle = startAngle;
          var radius = options.series.pie.label.radius > 1 ? options.series.pie.label.radius : maxRadius * options.series.pie.label.radius;
          for (var i = 0; i < slices.length; ++i) {
            if (slices[i].percent >= options.series.pie.label.threshold * 100) {
              if (!drawLabel(slices[i], currentAngle, i)) {
                return false
              }
            }
            currentAngle += slices[i].angle
          }
          return true;
          function drawLabel(slice, startAngle, index) {
            if (slice.data[0][1] == 0) {
              return true
            }
            var lf = options.legend.labelFormatter, text, plf = options.series.pie.label.formatter;
            if (lf) {
              text = lf(slice.label, slice)
            } else {
              text = slice.label
            }
            if (plf) {
              text = plf(text, slice)
            }
            var halfAngle = (startAngle + slice.angle + startAngle) / 2;
            var x = centerLeft + Math.round(Math.cos(halfAngle) * radius);
            var y = centerTop + Math.round(Math.sin(halfAngle) * radius) * options.series.pie.tilt;
            var html = "<span class='pieLabel' id='pieLabel" + index + "' style='position:absolute;top:" + y + "px;left:" + x + "px;'>" + text + "</span>";
            target.append(html);
            var label = target.children("#pieLabel" + index);
            var labelTop = y - label.height() / 2;
            var labelLeft = x - label.width() / 2;
            label.css("top", labelTop);
            label.css("left", labelLeft);
            if (0 - labelTop > 0 || 0 - labelLeft > 0 || canvasHeight - (labelTop + label.height()) < 0 || canvasWidth - (labelLeft + label.width()) < 0) {
              return false
            }
            if (options.series.pie.label.background.opacity != 0) {
              var c = options.series.pie.label.background.color;
              if (c == null) {
                c = slice.color
              }
              var pos = "top:" + labelTop + "px;left:" + labelLeft + "px;";
              $("<div class='pieLabelBackground' style='position:absolute;width:" + label.width() + "px;height:" + label.height() + "px;" + pos + "background-color:" + c + ";'></div>").css("opacity", options.series.pie.label.background.opacity).insertBefore(label)
            }
            return true
          }
        }
      }
    }

    function drawDonutHole(layer) {
      if (options.series.pie.innerRadius > 0) {
        layer.save();
        var innerRadius = options.series.pie.innerRadius > 1 ? options.series.pie.innerRadius : maxRadius * options.series.pie.innerRadius;
        layer.globalCompositeOperation = "destination-out";
        layer.beginPath();
        layer.fillStyle = options.series.pie.stroke.color;
        layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
        layer.fill();
        layer.closePath();
        layer.restore();
        layer.save();
        layer.beginPath();
        layer.strokeStyle = options.series.pie.stroke.color;
        layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
        layer.stroke();
        layer.closePath();
        layer.restore()
      }
    }

    function isPointInPoly(poly, pt) {
      for (var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)(poly[i][1] <= pt[1] && pt[1] < poly[j][1] || poly[j][1] <= pt[1] && pt[1] < poly[i][1]) && pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0] && (c = !c);
      return c
    }

    function findNearbySlice(mouseX, mouseY) {
      var slices = plot.getData(), options = plot.getOptions(), radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius, x, y;
      for (var i = 0; i < slices.length; ++i) {
        var s = slices[i];
        if (s.pie.show) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, radius, s.startAngle, s.startAngle + s.angle / 2, false);
          ctx.arc(0, 0, radius, s.startAngle + s.angle / 2, s.startAngle + s.angle, false);
          ctx.closePath();
          x = mouseX - centerLeft;
          y = mouseY - centerTop;
          if (ctx.isPointInPath) {
            if (ctx.isPointInPath(mouseX - centerLeft, mouseY - centerTop)) {
              ctx.restore();
              return {datapoint: [s.percent, s.data], dataIndex: 0, series: s, seriesIndex: i}
            }
          } else {
            var p1X = radius * Math.cos(s.startAngle), p1Y = radius * Math.sin(s.startAngle), p2X = radius * Math.cos(s.startAngle + s.angle / 4), p2Y = radius * Math.sin(s.startAngle + s.angle / 4), p3X = radius * Math.cos(s.startAngle + s.angle / 2), p3Y = radius * Math.sin(s.startAngle + s.angle / 2), p4X = radius * Math.cos(s.startAngle + s.angle / 1.5), p4Y = radius * Math.sin(s.startAngle + s.angle / 1.5), p5X = radius * Math.cos(s.startAngle + s.angle), p5Y = radius * Math.sin(s.startAngle + s.angle), arrPoly = [[0, 0], [p1X, p1Y], [p2X, p2Y], [p3X, p3Y], [p4X, p4Y], [p5X, p5Y]], arrPoint = [x, y];
            if (isPointInPoly(arrPoly, arrPoint)) {
              ctx.restore();
              return {datapoint: [s.percent, s.data], dataIndex: 0, series: s, seriesIndex: i}
            }
          }
          ctx.restore()
        }
      }
      return null
    }

    function onMouseMove(e) {
      triggerClickHoverEvent("plothover", e)
    }

    function onClick(e) {
      triggerClickHoverEvent("plotclick", e)
    }

    function triggerClickHoverEvent(eventname, e) {
      var offset = plot.offset();
      var canvasX = parseInt(e.pageX - offset.left);
      var canvasY = parseInt(e.pageY - offset.top);
      var item = findNearbySlice(canvasX, canvasY);
      if (options.grid.autoHighlight) {
        for (var i = 0; i < highlights.length; ++i) {
          var h = highlights[i];
          if (h.auto == eventname && !(item && h.series == item.series)) {
            unhighlight(h.series)
          }
        }
      }
      if (item) {
        highlight(item.series, eventname)
      }
      var pos = {pageX: e.pageX, pageY: e.pageY};
      target.trigger(eventname, [pos, item])
    }

    function highlight(s, auto) {
      var i = indexOfHighlight(s);
      if (i == -1) {
        highlights.push({series: s, auto: auto});
        plot.triggerRedrawOverlay()
      } else if (!auto) {
        highlights[i].auto = false
      }
    }

    function unhighlight(s) {
      if (s == null) {
        highlights = [];
        plot.triggerRedrawOverlay()
      }
      var i = indexOfHighlight(s);
      if (i != -1) {
        highlights.splice(i, 1);
        plot.triggerRedrawOverlay()
      }
    }

    function indexOfHighlight(s) {
      for (var i = 0; i < highlights.length; ++i) {
        var h = highlights[i];
        if (h.series == s)return i
      }
      return -1
    }

    function drawOverlay(plot, octx) {
      var options = plot.getOptions();
      var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;
      octx.save();
      octx.translate(centerLeft, centerTop);
      octx.scale(1, options.series.pie.tilt);
      for (var i = 0; i < highlights.length; ++i) {
        drawHighlight(highlights[i].series)
      }
      drawDonutHole(octx);
      octx.restore();
      function drawHighlight(series) {
        if (series.angle <= 0 || isNaN(series.angle)) {
          return
        }
        octx.fillStyle = "rgba(255, 255, 255, " + options.series.pie.highlight.opacity + ")";
        octx.beginPath();
        if (Math.abs(series.angle - Math.PI * 2) > 1e-9) {
          octx.moveTo(0, 0)
        }
        octx.arc(0, 0, radius, series.startAngle, series.startAngle + series.angle / 2, false);
        octx.arc(0, 0, radius, series.startAngle + series.angle / 2, series.startAngle + series.angle, false);
        octx.closePath();
        octx.fill()
      }
    }
  }

  var options = {
    series: {
      pie: {
        show: false,
        radius: "auto",
        innerRadius: 0,
        startAngle: 3 / 2,
        tilt: 1,
        shadow: {left: 5, top: 15, alpha: .02},
        offset: {top: 0, left: "auto"},
        stroke: {color: "#fff", width: 1},
        label: {
          show: "auto", formatter: function (label, slice) {
            return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + slice.color + ";'>" + label + "<br/>" + Math.round(slice.percent) + "%</div>"
          }, radius: 1, background: {color: null, opacity: 0}, threshold: 0
        },
        combine: {threshold: -1, color: null, label: "Other"},
        highlight: {opacity: .5}
      }
    }
  };
  $.plot.plugins.push({init: init, options: options, name: "pie", version: "1.1"})
})(jQuery);

/*!
 * Flot plugin for automatically redrawing plots as the placeholder resizes.
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 * Inline dependency:
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function ($, e, t) {
  "$:nomunge";
  var i = [], n = $.resize = $.extend($.resize, {}), a, r = false, s = "setTimeout", u = "resize", m = u + "-special-event", o = "pendingDelay", l = "activeDelay", f = "throttleWindow";
  n[o] = 200;
  n[l] = 20;
  n[f] = true;
  $.event.special[u] = {
    setup: function () {
      if (!n[f] && this[s]) {
        return false
      }
      var e = $(this);
      i.push(this);
      e.data(m, {w: e.width(), h: e.height()});
      if (i.length === 1) {
        a = t;
        h()
      }
    }, teardown: function () {
      if (!n[f] && this[s]) {
        return false
      }
      var e = $(this);
      for (var t = i.length - 1; t >= 0; t--) {
        if (i[t] == this) {
          i.splice(t, 1);
          break
        }
      }
      e.removeData(m);
      if (!i.length) {
        if (r) {
          cancelAnimationFrame(a)
        } else {
          clearTimeout(a)
        }
        a = null
      }
    }, add: function (e) {
      if (!n[f] && this[s]) {
        return false
      }
      var i;

      function a(e, n, a) {
        var r = $(this), s = r.data(m) || {};
        s.w = n !== t ? n : r.width();
        s.h = a !== t ? a : r.height();
        i.apply(this, arguments)
      }

      if ($.isFunction(e)) {
        i = e;
        return a
      } else {
        i = e.handler;
        e.handler = a
      }
    }
  };
  function h(t) {
    if (r === true) {
      r = t || 1
    }
    for (var s = i.length - 1; s >= 0; s--) {
      var l = $(i[s]);
      if (l[0] == e || l.is(":visible")) {
        var f = l.width(), c = l.height(), d = l.data(m);
        if (d && (f !== d.w || c !== d.h)) {
          l.trigger(u, [d.w = f, d.h = c]);
          r = t || true
        }
      } else {
        d = l.data(m);
        d.w = 0;
        d.h = 0
      }
    }
    if (a !== null) {
      if (r && (t == null || t - r < 1e3)) {
        a = e.requestAnimationFrame(h)
      } else {
        a = setTimeout(h, n[o]);
        r = false
      }
    }
  }

  if (!e.requestAnimationFrame) {
    e.requestAnimationFrame = function () {
      return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t, i) {
          return e.setTimeout(function () {
            t((new Date).getTime())
          }, n[l])
        }
    }()
  }
  if (!e.cancelAnimationFrame) {
    e.cancelAnimationFrame = function () {
      return e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout
    }()
  }
})(jQuery, this);
(function ($) {
  var options = {};

  function init(plot) {
    function onResize() {
      var placeholder = plot.getPlaceholder();
      if (placeholder.width() == 0 || placeholder.height() == 0)return;
      plot.resize();
      plot.setupGrid();
      plot.draw()
    }

    function bindEvents(plot, eventHolder) {
      plot.getPlaceholder().resize(onResize)
    }

    function shutdown(plot, eventHolder) {
      plot.getPlaceholder().unbind("resize", onResize)
    }

    plot.hooks.bindEvents.push(bindEvents);
    plot.hooks.shutdown.push(shutdown)
  }

  $.plot.plugins.push({init: init, options: options, name: "resize", version: "1.0"})
})(jQuery);

/*!
 * Flot plugin for stacking data sets rather than overlyaing them.
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 */
(function ($) {
  var options = {series: {stack: null}};

  function init(plot) {
    function findMatchingSeries(s, allseries) {
      var res = null;
      for (var i = 0; i < allseries.length; ++i) {
        if (s == allseries[i])break;
        if (allseries[i].stack == s.stack)res = allseries[i]
      }
      return res
    }

    function stackData(plot, s, datapoints) {
      if (s.stack == null || s.stack === false)return;
      var other = findMatchingSeries(s, plot.getData());
      if (!other)return;
      var ps = datapoints.pointsize, points = datapoints.points, otherps = other.datapoints.pointsize, otherpoints = other.datapoints.points, newpoints = [], px, py, intery, qx, qy, bottom, withlines = s.lines.show, horizontal = s.bars.horizontal, withbottom = ps > 2 && (horizontal ? datapoints.format[2].x : datapoints.format[2].y), withsteps = withlines && s.lines.steps, fromgap = true, keyOffset = horizontal ? 1 : 0, accumulateOffset = horizontal ? 0 : 1, i = 0, j = 0, l, m;
      while (true) {
        if (i >= points.length)break;
        l = newpoints.length;
        if (points[i] == null) {
          for (m = 0; m < ps; ++m)newpoints.push(points[i + m]);
          i += ps
        } else if (j >= otherpoints.length) {
          if (!withlines) {
            for (m = 0; m < ps; ++m)newpoints.push(points[i + m])
          }
          i += ps
        } else if (otherpoints[j] == null) {
          for (m = 0; m < ps; ++m)newpoints.push(null);
          fromgap = true;
          j += otherps
        } else {
          px = points[i + keyOffset];
          py = points[i + accumulateOffset];
          qx = otherpoints[j + keyOffset];
          qy = otherpoints[j + accumulateOffset];
          bottom = 0;
          if (px == qx) {
            for (m = 0; m < ps; ++m)newpoints.push(points[i + m]);
            newpoints[l + accumulateOffset] += qy;
            bottom = qy;
            i += ps;
            j += otherps
          } else if (px > qx) {
            if (withlines && i > 0 && points[i - ps] != null) {
              intery = py + (points[i - ps + accumulateOffset] - py) * (qx - px) / (points[i - ps + keyOffset] - px);
              newpoints.push(qx);
              newpoints.push(intery + qy);
              for (m = 2; m < ps; ++m)newpoints.push(points[i + m]);
              bottom = qy
            }
            j += otherps
          } else {
            if (fromgap && withlines) {
              i += ps;
              continue
            }
            for (m = 0; m < ps; ++m)newpoints.push(points[i + m]);
            if (withlines && j > 0 && otherpoints[j - otherps] != null)bottom = qy + (otherpoints[j - otherps + accumulateOffset] - qy) * (px - qx) / (otherpoints[j - otherps + keyOffset] - qx);
            newpoints[l + accumulateOffset] += bottom;
            i += ps
          }
          fromgap = false;
          if (l != newpoints.length && withbottom)newpoints[l + 2] += bottom
        }
        if (withsteps && l != newpoints.length && l > 0 && newpoints[l] != null && newpoints[l] != newpoints[l - ps] && newpoints[l + 1] != newpoints[l - ps + 1]) {
          for (m = 0; m < ps; ++m)newpoints[l + ps + m] = newpoints[l + m];
          newpoints[l + 1] = newpoints[l - ps + 1]
        }
      }
      datapoints.points = newpoints
    }

    plot.hooks.processDatapoints.push(stackData)
  }

  $.plot.plugins.push({init: init, options: options, name: "stack", version: "1.2"})
})(jQuery);

/*
 * Pretty handling of time axes.
 *
 * Copyright (c) 2007-2013 IOLA and Ole Laursen.
 * Licensed under the MIT license.
 *
 * Set axis.mode to "time" to enable. See the section "Time series data" in
 * API.txt for details.
 */
(function ($) {
  var options = {xaxis: {timezone: null, timeformat: null, twelveHourClock: false, monthNames: null}};

  function floorInBase(n, base) {
    return base * Math.floor(n / base)
  }

  function formatDate(d, fmt, monthNames, dayNames) {
    if (typeof d.strftime == "function") {
      return d.strftime(fmt)
    }
    var leftPad = function (n, pad) {
      n = "" + n;
      pad = "" + (pad == null ? "0" : pad);
      return n.length == 1 ? pad + n : n
    };
    var r = [];
    var escape = false;
    var hours = d.getHours();
    var isAM = hours < 12;
    if (monthNames == null) {
      monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
    if (dayNames == null) {
      dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    }
    var hours12;
    if (hours > 12) {
      hours12 = hours - 12
    } else if (hours == 0) {
      hours12 = 12
    } else {
      hours12 = hours
    }
    for (var i = 0; i < fmt.length; ++i) {
      var c = fmt.charAt(i);
      if (escape) {
        switch (c) {
          case"a":
            c = "" + dayNames[d.getDay()];
            break;
          case"b":
            c = "" + monthNames[d.getMonth()];
            break;
          case"d":
            c = leftPad(d.getDate());
            break;
          case"e":
            c = leftPad(d.getDate(), " ");
            break;
          case"h":
          case"H":
            c = leftPad(hours);
            break;
          case"I":
            c = leftPad(hours12);
            break;
          case"l":
            c = leftPad(hours12, " ");
            break;
          case"m":
            c = leftPad(d.getMonth() + 1);
            break;
          case"M":
            c = leftPad(d.getMinutes());
            break;
          case"q":
            c = "" + (Math.floor(d.getMonth() / 3) + 1);
            break;
          case"S":
            c = leftPad(d.getSeconds());
            break;
          case"y":
            c = leftPad(d.getFullYear() % 100);
            break;
          case"Y":
            c = "" + d.getFullYear();
            break;
          case"p":
            c = isAM ? "" + "am" : "" + "pm";
            break;
          case"P":
            c = isAM ? "" + "AM" : "" + "PM";
            break;
          case"w":
            c = "" + d.getDay();
            break
        }
        r.push(c);
        escape = false
      } else {
        if (c == "%") {
          escape = true
        } else {
          r.push(c)
        }
      }
    }
    return r.join("")
  }

  function makeUtcWrapper(d) {
    function addProxyMethod(sourceObj, sourceMethod, targetObj, targetMethod) {
      sourceObj[sourceMethod] = function () {
        return targetObj[targetMethod].apply(targetObj, arguments)
      }
    }

    var utc = {date: d};
    if (d.strftime != undefined) {
      addProxyMethod(utc, "strftime", d, "strftime")
    }
    addProxyMethod(utc, "getTime", d, "getTime");
    addProxyMethod(utc, "setTime", d, "setTime");
    var props = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"];
    for (var p = 0; p < props.length; p++) {
      addProxyMethod(utc, "get" + props[p], d, "getUTC" + props[p]);
      addProxyMethod(utc, "set" + props[p], d, "setUTC" + props[p])
    }
    return utc
  }

  function dateGenerator(ts, opts) {
    if (opts.timezone == "browser") {
      return new Date(ts)
    } else if (!opts.timezone || opts.timezone == "utc") {
      return makeUtcWrapper(new Date(ts))
    } else if (typeof timezoneJS != "undefined" && typeof timezoneJS.Date != "undefined") {
      var d = new timezoneJS.Date;
      d.setTimezone(opts.timezone);
      d.setTime(ts);
      return d
    } else {
      return makeUtcWrapper(new Date(ts))
    }
  }

  var timeUnitSize = {
    second: 1e3,
    minute: 60 * 1e3,
    hour: 60 * 60 * 1e3,
    day: 24 * 60 * 60 * 1e3,
    month: 30 * 24 * 60 * 60 * 1e3,
    quarter: 3 * 30 * 24 * 60 * 60 * 1e3,
    year: 365.2425 * 24 * 60 * 60 * 1e3
  };
  var baseSpec = [[1, "second"], [2, "second"], [5, "second"], [10, "second"], [30, "second"], [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"], [30, "minute"], [1, "hour"], [2, "hour"], [4, "hour"], [8, "hour"], [12, "hour"], [1, "day"], [2, "day"], [3, "day"], [.25, "month"], [.5, "month"], [1, "month"], [2, "month"]];
  var specMonths = baseSpec.concat([[3, "month"], [6, "month"], [1, "year"]]);
  var specQuarters = baseSpec.concat([[1, "quarter"], [2, "quarter"], [1, "year"]]);

  function init(plot) {
    plot.hooks.processOptions.push(function (plot, options) {
      $.each(plot.getAxes(), function (axisName, axis) {
        var opts = axis.options;
        if (opts.mode == "time") {
          axis.tickGenerator = function (axis) {
            var ticks = [];
            var d = dateGenerator(axis.min, opts);
            var minSize = 0;
            var spec = opts.tickSize && opts.tickSize[1] === "quarter" || opts.minTickSize && opts.minTickSize[1] === "quarter" ? specQuarters : specMonths;
            if (opts.minTickSize != null) {
              if (typeof opts.tickSize == "number") {
                minSize = opts.tickSize
              } else {
                minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]]
              }
            }
            for (var i = 0; i < spec.length - 1; ++i) {
              if (axis.delta < (spec[i][0] * timeUnitSize[spec[i][1]] + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2 && spec[i][0] * timeUnitSize[spec[i][1]] >= minSize) {
                break
              }
            }
            var size = spec[i][0];
            var unit = spec[i][1];
            if (unit == "year") {
              if (opts.minTickSize != null && opts.minTickSize[1] == "year") {
                size = Math.floor(opts.minTickSize[0])
              } else {
                var magn = Math.pow(10, Math.floor(Math.log(axis.delta / timeUnitSize.year) / Math.LN10));
                var norm = axis.delta / timeUnitSize.year / magn;
                if (norm < 1.5) {
                  size = 1
                } else if (norm < 3) {
                  size = 2
                } else if (norm < 7.5) {
                  size = 5
                } else {
                  size = 10
                }
                size *= magn
              }
              if (size < 1) {
                size = 1
              }
            }
            axis.tickSize = opts.tickSize || [size, unit];
            var tickSize = axis.tickSize[0];
            unit = axis.tickSize[1];
            var step = tickSize * timeUnitSize[unit];
            if (unit == "second") {
              d.setSeconds(floorInBase(d.getSeconds(), tickSize))
            } else if (unit == "minute") {
              d.setMinutes(floorInBase(d.getMinutes(), tickSize))
            } else if (unit == "hour") {
              d.setHours(floorInBase(d.getHours(), tickSize))
            } else if (unit == "month") {
              d.setMonth(floorInBase(d.getMonth(), tickSize))
            } else if (unit == "quarter") {
              d.setMonth(3 * floorInBase(d.getMonth() / 3, tickSize))
            } else if (unit == "year") {
              d.setFullYear(floorInBase(d.getFullYear(), tickSize))
            }
            d.setMilliseconds(0);
            if (step >= timeUnitSize.minute) {
              d.setSeconds(0)
            }
            if (step >= timeUnitSize.hour) {
              d.setMinutes(0)
            }
            if (step >= timeUnitSize.day) {
              d.setHours(0)
            }
            if (step >= timeUnitSize.day * 4) {
              d.setDate(1)
            }
            if (step >= timeUnitSize.month * 2) {
              d.setMonth(floorInBase(d.getMonth(), 3))
            }
            if (step >= timeUnitSize.quarter * 2) {
              d.setMonth(floorInBase(d.getMonth(), 6))
            }
            if (step >= timeUnitSize.year) {
              d.setMonth(0)
            }
            var carry = 0;
            var v = Number.NaN;
            var prev;
            do {
              prev = v;
              v = d.getTime();
              ticks.push(v);
              if (unit == "month" || unit == "quarter") {
                if (tickSize < 1) {
                  d.setDate(1);
                  var start = d.getTime();
                  d.setMonth(d.getMonth() + (unit == "quarter" ? 3 : 1));
                  var end = d.getTime();
                  d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
                  carry = d.getHours();
                  d.setHours(0)
                } else {
                  d.setMonth(d.getMonth() + tickSize * (unit == "quarter" ? 3 : 1))
                }
              } else if (unit == "year") {
                d.setFullYear(d.getFullYear() + tickSize)
              } else {
                d.setTime(v + step)
              }
            } while (v < axis.max && v != prev);
            return ticks
          };
          axis.tickFormatter = function (v, axis) {
            var d = dateGenerator(v, axis.options);
            if (opts.timeformat != null) {
              return formatDate(d, opts.timeformat, opts.monthNames, opts.dayNames)
            }
            var useQuarters = axis.options.tickSize && axis.options.tickSize[1] == "quarter" || axis.options.minTickSize && axis.options.minTickSize[1] == "quarter";
            var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
            var span = axis.max - axis.min;
            var suffix = opts.twelveHourClock ? " %p" : "";
            var hourCode = opts.twelveHourClock ? "%I" : "%H";
            var fmt;
            if (t < timeUnitSize.minute) {
              fmt = hourCode + ":%M:%S" + suffix
            } else if (t < timeUnitSize.day) {
              if (span < 2 * timeUnitSize.day) {
                fmt = hourCode + ":%M" + suffix
              } else {
                fmt = "%b %d " + hourCode + ":%M" + suffix
              }
            } else if (t < timeUnitSize.month) {
              fmt = "%b %d"
            } else if (useQuarters && t < timeUnitSize.quarter || !useQuarters && t < timeUnitSize.year) {
              if (span < timeUnitSize.year) {
                fmt = "%b"
              } else {
                fmt = "%b %Y"
              }
            } else if (useQuarters && t < timeUnitSize.year) {
              if (span < timeUnitSize.year) {
                fmt = "Q%q"
              } else {
                fmt = "Q%q %Y"
              }
            } else {
              fmt = "%Y"
            }
            var rt = formatDate(d, fmt, opts.monthNames, opts.dayNames);
            return rt
          }
        }
      })
    })
  }

  $.plot.plugins.push({init: init, options: options, name: "time", version: "1.0"});
  $.plot.formatDate = formatDate;
  $.plot.dateGenerator = dateGenerator
})(jQuery);

/*!
 * Dropzone.js 3.10.2
 * http://www.dropzonejs.com/
 */
!function () {
  function a(b) {
    var c = a.modules[b];
    if (!c)throw new Error('failed to require "' + b + '"');
    return "exports"in c || "function" != typeof c.definition || (c.client = c.component = !0, c.definition.call(this, c.exports = {}, c), delete c.definition), c.exports
  }

  a.modules = {}, a.register = function (b, c) {
    a.modules[b] = {definition: c}
  }, a.define = function (b, c) {
    a.modules[b] = {exports: c}
  }, a.register("component~emitter@1.1.2", function (a, b) {
    function c(a) {
      return a ? d(a) : void 0
    }

    function d(a) {
      for (var b in c.prototype)a[b] = c.prototype[b];
      return a
    }

    b.exports = c, c.prototype.on = c.prototype.addEventListener = function (a, b) {
      return this._callbacks = this._callbacks || {}, (this._callbacks[a] = this._callbacks[a] || []).push(b), this
    }, c.prototype.once = function (a, b) {
      function c() {
        d.off(a, c), b.apply(this, arguments)
      }

      var d = this;
      return this._callbacks = this._callbacks || {}, c.fn = b, this.on(a, c), this
    }, c.prototype.off = c.prototype.removeListener = c.prototype.removeAllListeners = c.prototype.removeEventListener = function (a, b) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length)return this._callbacks = {}, this;
      var c = this._callbacks[a];
      if (!c)return this;
      if (1 == arguments.length)return delete this._callbacks[a], this;
      for (var d, e = 0; e < c.length; e++)if (d = c[e], d === b || d.fn === b) {
        c.splice(e, 1);
        break
      }
      return this
    }, c.prototype.emit = function (a) {
      this._callbacks = this._callbacks || {};
      var b = [].slice.call(arguments, 1), c = this._callbacks[a];
      if (c) {
        c = c.slice(0);
        for (var d = 0, e = c.length; e > d; ++d)c[d].apply(this, b)
      }
      return this
    }, c.prototype.listeners = function (a) {
      return this._callbacks = this._callbacks || {}, this._callbacks[a] || []
    }, c.prototype.hasListeners = function (a) {
      return !!this.listeners(a).length
    }
  }), a.register("dropzone", function (b, c) {
    c.exports = a("dropzone/lib/dropzone.js")
  }), a.register("dropzone/lib/dropzone.js", function (b, c) {
    (function () {
      var b, d, e, f, g, h, i, j, k = {}.hasOwnProperty, l = function (a, b) {
        function c() {
          this.constructor = a
        }

        for (var d in b)k.call(b, d) && (a[d] = b[d]);
        return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
      }, m = [].slice;
      d = "undefined" != typeof Emitter && null !== Emitter ? Emitter : a("component~emitter@1.1.2"), i = function () {
      }, b = function (a) {
        function b(a, d) {
          var e, f, g;
          if (this.element = a, this.version = b.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType)throw new Error("Invalid dropzone element.");
          if (this.element.dropzone)throw new Error("Dropzone already attached.");
          if (b.instances.push(this), this.element.dropzone = this, e = null != (g = b.optionsForElement(this.element)) ? g : {}, this.options = c({}, this.defaultOptions, e, null != d ? d : {}), this.options.forceFallback || !b.isBrowserSupported())return this.options.fallback.call(this);
          if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url)throw new Error("No URL provided.");
          if (this.options.acceptedFiles && this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
          this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (f = this.getExistingFallback()) && f.parentNode && f.parentNode.removeChild(f), this.options.previewsContainer !== !1 && (this.previewsContainer = this.options.previewsContainer ? b.getElement(this.options.previewsContainer, "previewsContainer") : this.element), this.options.clickable && (this.clickableElements = this.options.clickable === !0 ? [this.element] : b.getElements(this.options.clickable, "clickable")), this.init()
        }

        var c;
        return l(b, a), b.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached"], b.prototype.defaultOptions = {
          url: null,
          method: "post",
          withCredentials: !1,
          parallelUploads: 2,
          uploadMultiple: !1,
          maxFilesize: 256,
          paramName: "file",
          createImageThumbnails: !0,
          maxThumbnailFilesize: 10,
          thumbnailWidth: 100,
          thumbnailHeight: 100,
          maxFiles: null,
          params: {},
          clickable: !0,
          ignoreHiddenFiles: !0,
          acceptedFiles: null,
          acceptedMimeTypes: null,
          autoProcessQueue: !0,
          autoQueue: !0,
          addRemoveLinks: !1,
          previewsContainer: null,
          dictDefaultMessage: "Drop files here to upload",
          dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
          dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
          dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
          dictInvalidFileType: "You can't upload files of this type.",
          dictResponseError: "Server responded with {{statusCode}} code.",
          dictCancelUpload: "Cancel upload",
          dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
          dictRemoveFile: "Remove file",
          dictRemoveFileConfirmation: null,
          dictMaxFilesExceeded: "You can not upload any more files.",
          accept: function (a, b) {
            return b()
          },
          init: function () {
            return i
          },
          forceFallback: !1,
          fallback: function () {
            var a, c, d, e, f, g;
            for (this.element.className = "" + this.element.className + " dz-browser-not-supported", g = this.element.getElementsByTagName("div"), e = 0, f = g.length; f > e; e++)a = g[e], /(^| )dz-message($| )/.test(a.className) && (c = a, a.className = "dz-message");
            return c || (c = b.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(c)), d = c.getElementsByTagName("span")[0], d && (d.textContent = this.options.dictFallbackMessage), this.element.appendChild(this.getFallbackForm())
          },
          resize: function (a) {
            var b, c, d;
            return b = {
              srcX: 0,
              srcY: 0,
              srcWidth: a.width,
              srcHeight: a.height
            }, c = a.width / a.height, b.optWidth = this.options.thumbnailWidth, b.optHeight = this.options.thumbnailHeight, null == b.optWidth && null == b.optHeight ? (b.optWidth = b.srcWidth, b.optHeight = b.srcHeight) : null == b.optWidth ? b.optWidth = c * b.optHeight : null == b.optHeight && (b.optHeight = 1 / c * b.optWidth), d = b.optWidth / b.optHeight, a.height < b.optHeight || a.width < b.optWidth ? (b.trgHeight = b.srcHeight, b.trgWidth = b.srcWidth) : c > d ? (b.srcHeight = a.height, b.srcWidth = b.srcHeight * d) : (b.srcWidth = a.width, b.srcHeight = b.srcWidth / d), b.srcX = (a.width - b.srcWidth) / 2, b.srcY = (a.height - b.srcHeight) / 2, b
          },
          drop: function () {
            return this.element.classList.remove("dz-drag-hover")
          },
          dragstart: i,
          dragend: function () {
            return this.element.classList.remove("dz-drag-hover")
          },
          dragenter: function () {
            return this.element.classList.add("dz-drag-hover")
          },
          dragover: function () {
            return this.element.classList.add("dz-drag-hover")
          },
          dragleave: function () {
            return this.element.classList.remove("dz-drag-hover")
          },
          paste: i,
          reset: function () {
            return this.element.classList.remove("dz-started")
          },
          addedfile: function (a) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o;
            if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
              for (a.previewElement = b.createElement(this.options.previewTemplate.trim()), a.previewTemplate = a.previewElement, this.previewsContainer.appendChild(a.previewElement), l = a.previewElement.querySelectorAll("[data-dz-name]"), f = 0, i = l.length; i > f; f++)c = l[f], c.textContent = a.name;
              for (m = a.previewElement.querySelectorAll("[data-dz-size]"), g = 0, j = m.length; j > g; g++)c = m[g], c.innerHTML = this.filesize(a.size);
              for (this.options.addRemoveLinks && (a._removeLink = b.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), a.previewElement.appendChild(a._removeLink)), d = function (c) {
                return function (d) {
                  return d.preventDefault(), d.stopPropagation(), a.status === b.UPLOADING ? b.confirm(c.options.dictCancelUploadConfirmation, function () {
                    return c.removeFile(a)
                  }) : c.options.dictRemoveFileConfirmation ? b.confirm(c.options.dictRemoveFileConfirmation, function () {
                    return c.removeFile(a)
                  }) : c.removeFile(a)
                }
              }(this), n = a.previewElement.querySelectorAll("[data-dz-remove]"), o = [], h = 0, k = n.length; k > h; h++)e = n[h], o.push(e.addEventListener("click", d));
              return o
            }
          },
          removedfile: function (a) {
            var b;
            return a.previewElement && null != (b = a.previewElement) && b.parentNode.removeChild(a.previewElement), this._updateMaxFilesReachedClass()
          },
          thumbnail: function (a, b) {
            var c, d, e, f, g;
            if (a.previewElement) {
              for (a.previewElement.classList.remove("dz-file-preview"), a.previewElement.classList.add("dz-image-preview"), f = a.previewElement.querySelectorAll("[data-dz-thumbnail]"), g = [], d = 0, e = f.length; e > d; d++)c = f[d], c.alt = a.name, g.push(c.src = b);
              return g
            }
          },
          error: function (a, b) {
            var c, d, e, f, g;
            if (a.previewElement) {
              for (a.previewElement.classList.add("dz-error"), "String" != typeof b && b.error && (b = b.error), f = a.previewElement.querySelectorAll("[data-dz-errormessage]"), g = [], d = 0, e = f.length; e > d; d++)c = f[d], g.push(c.textContent = b);
              return g
            }
          },
          errormultiple: i,
          processing: function (a) {
            return a.previewElement && (a.previewElement.classList.add("dz-processing"), a._removeLink) ? a._removeLink.textContent = this.options.dictCancelUpload : void 0
          },
          processingmultiple: i,
          uploadprogress: function (a, b) {
            var c, d, e, f, g;
            if (a.previewElement) {
              for (f = a.previewElement.querySelectorAll("[data-dz-uploadprogress]"), g = [], d = 0, e = f.length; e > d; d++)c = f[d], g.push(c.style.width = "" + b + "%");
              return g
            }
          },
          totaluploadprogress: i,
          sending: i,
          sendingmultiple: i,
          success: function (a) {
            return a.previewElement ? a.previewElement.classList.add("dz-success") : void 0
          },
          successmultiple: i,
          canceled: function (a) {
            return this.emit("error", a, "Upload canceled.")
          },
          canceledmultiple: i,
          complete: function (a) {
            return a._removeLink ? a._removeLink.textContent = this.options.dictRemoveFile : void 0
          },
          completemultiple: i,
          maxfilesexceeded: i,
          maxfilesreached: i,
          previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-details">\n    <div class="dz-filename"><span data-dz-name></span></div>\n    <div class="dz-size" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-success-mark"><span>✔</span></div>\n  <div class="dz-error-mark"><span>✘</span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n</div>'
        }, c = function () {
          var a, b, c, d, e, f, g;
          for (d = arguments[0], c = 2 <= arguments.length ? m.call(arguments, 1) : [], f = 0, g = c.length; g > f; f++) {
            b = c[f];
            for (a in b)e = b[a], d[a] = e
          }
          return d
        }, b.prototype.getAcceptedFiles = function () {
          var a, b, c, d, e;
          for (d = this.files, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a.accepted && e.push(a);
          return e
        }, b.prototype.getRejectedFiles = function () {
          var a, b, c, d, e;
          for (d = this.files, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a.accepted || e.push(a);
          return e
        }, b.prototype.getFilesWithStatus = function (a) {
          var b, c, d, e, f;
          for (e = this.files, f = [], c = 0, d = e.length; d > c; c++)b = e[c], b.status === a && f.push(b);
          return f
        }, b.prototype.getQueuedFiles = function () {
          return this.getFilesWithStatus(b.QUEUED)
        }, b.prototype.getUploadingFiles = function () {
          return this.getFilesWithStatus(b.UPLOADING)
        }, b.prototype.getActiveFiles = function () {
          var a, c, d, e, f;
          for (e = this.files, f = [], c = 0, d = e.length; d > c; c++)a = e[c], (a.status === b.UPLOADING || a.status === b.QUEUED) && f.push(a);
          return f
        }, b.prototype.init = function () {
          var a, c, d, e, f, g, h;
          for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(b.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (d = function (a) {
            return function () {
              return a.hiddenFileInput && document.body.removeChild(a.hiddenFileInput), a.hiddenFileInput = document.createElement("input"), a.hiddenFileInput.setAttribute("type", "file"), (null == a.options.maxFiles || a.options.maxFiles > 1) && a.hiddenFileInput.setAttribute("multiple", "multiple"), a.hiddenFileInput.className = "dz-hidden-input", null != a.options.acceptedFiles && a.hiddenFileInput.setAttribute("accept", a.options.acceptedFiles), a.hiddenFileInput.style.visibility = "hidden", a.hiddenFileInput.style.position = "absolute", a.hiddenFileInput.style.top = "0", a.hiddenFileInput.style.left = "0", a.hiddenFileInput.style.height = "0", a.hiddenFileInput.style.width = "0", document.body.appendChild(a.hiddenFileInput), a.hiddenFileInput.addEventListener("change", function () {
                var b, c, e, f;
                if (c = a.hiddenFileInput.files, c.length)for (e = 0, f = c.length; f > e; e++)b = c[e], a.addFile(b);
                return d()
              })
            }
          }(this))(), this.URL = null != (g = window.URL) ? g : window.webkitURL, h = this.events, e = 0, f = h.length; f > e; e++)a = h[e], this.on(a, this.options[a]);
          return this.on("uploadprogress", function (a) {
            return function () {
              return a.updateTotalUploadProgress()
            }
          }(this)), this.on("removedfile", function (a) {
            return function () {
              return a.updateTotalUploadProgress()
            }
          }(this)), this.on("canceled", function (a) {
            return function (b) {
              return a.emit("complete", b)
            }
          }(this)), this.on("complete", function (a) {
            return function () {
              return 0 === a.getUploadingFiles().length && 0 === a.getQueuedFiles().length ? setTimeout(function () {
                return a.emit("queuecomplete")
              }, 0) : void 0
            }
          }(this)), c = function (a) {
            return a.stopPropagation(), a.preventDefault ? a.preventDefault() : a.returnValue = !1
          }, this.listeners = [{
            element: this.element, events: {
              dragstart: function (a) {
                return function (b) {
                  return a.emit("dragstart", b)
                }
              }(this), dragenter: function (a) {
                return function (b) {
                  return c(b), a.emit("dragenter", b)
                }
              }(this), dragover: function (a) {
                return function (b) {
                  var d;
                  try {
                    d = b.dataTransfer.effectAllowed
                  } catch (e) {
                  }
                  return b.dataTransfer.dropEffect = "move" === d || "linkMove" === d ? "move" : "copy", c(b), a.emit("dragover", b)
                }
              }(this), dragleave: function (a) {
                return function (b) {
                  return a.emit("dragleave", b)
                }
              }(this), drop: function (a) {
                return function (b) {
                  return c(b), a.drop(b)
                }
              }(this), dragend: function (a) {
                return function (b) {
                  return a.emit("dragend", b)
                }
              }(this)
            }
          }], this.clickableElements.forEach(function (a) {
            return function (c) {
              return a.listeners.push({
                element: c, events: {
                  click: function (d) {
                    return c !== a.element || d.target === a.element || b.elementInside(d.target, a.element.querySelector(".dz-message")) ? a.hiddenFileInput.click() : void 0
                  }
                }
              })
            }
          }(this)), this.enable(), this.options.init.call(this)
        }, b.prototype.destroy = function () {
          var a;
          return this.disable(), this.removeAllFiles(!0), (null != (a = this.hiddenFileInput) ? a.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, b.instances.splice(b.instances.indexOf(this), 1)
        }, b.prototype.updateTotalUploadProgress = function () {
          var a, b, c, d, e, f, g, h;
          if (d = 0, c = 0, a = this.getActiveFiles(), a.length) {
            for (h = this.getActiveFiles(), f = 0, g = h.length; g > f; f++)b = h[f], d += b.upload.bytesSent, c += b.upload.total;
            e = 100 * d / c
          } else e = 100;
          return this.emit("totaluploadprogress", e, c, d)
        }, b.prototype._getParamName = function (a) {
          return "function" == typeof this.options.paramName ? this.options.paramName(a) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + a + "]" : "")
        }, b.prototype.getFallbackForm = function () {
          var a, c, d, e;
          return (a = this.getExistingFallback()) ? a : (d = '<div class="dz-fallback">', this.options.dictFallbackText && (d += "<p>" + this.options.dictFallbackText + "</p>"), d += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', c = b.createElement(d), "FORM" !== this.element.tagName ? (e = b.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), e.appendChild(c)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != e ? e : c)
        }, b.prototype.getExistingFallback = function () {
          var a, b, c, d, e, f;
          for (b = function (a) {
            var b, c, d;
            for (c = 0, d = a.length; d > c; c++)if (b = a[c], /(^| )fallback($| )/.test(b.className))return b
          }, f = ["div", "form"], d = 0, e = f.length; e > d; d++)if (c = f[d], a = b(this.element.getElementsByTagName(c)))return a
        }, b.prototype.setupEventListeners = function () {
          var a, b, c, d, e, f, g;
          for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++)a = f[d], g.push(function () {
            var d, e;
            d = a.events, e = [];
            for (b in d)c = d[b], e.push(a.element.addEventListener(b, c, !1));
            return e
          }());
          return g
        }, b.prototype.removeEventListeners = function () {
          var a, b, c, d, e, f, g;
          for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++)a = f[d], g.push(function () {
            var d, e;
            d = a.events, e = [];
            for (b in d)c = d[b], e.push(a.element.removeEventListener(b, c, !1));
            return e
          }());
          return g
        }, b.prototype.disable = function () {
          var a, b, c, d, e;
          for (this.clickableElements.forEach(function (a) {
            return a.classList.remove("dz-clickable")
          }), this.removeEventListeners(), d = this.files, e = [], b = 0, c = d.length; c > b; b++)a = d[b], e.push(this.cancelUpload(a));
          return e
        }, b.prototype.enable = function () {
          return this.clickableElements.forEach(function (a) {
            return a.classList.add("dz-clickable")
          }), this.setupEventListeners()
        }, b.prototype.filesize = function (a) {
          var b;
          return a >= 109951162777.6 ? (a /= 109951162777.6, b = "TiB") : a >= 107374182.4 ? (a /= 107374182.4, b = "GiB") : a >= 104857.6 ? (a /= 104857.6, b = "MiB") : a >= 102.4 ? (a /= 102.4, b = "KiB") : (a = 10 * a, b = "b"), "<strong>" + Math.round(a) / 10 + "</strong> " + b
        }, b.prototype._updateMaxFilesReachedClass = function () {
          return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
        }, b.prototype.drop = function (a) {
          var b, c;
          a.dataTransfer && (this.emit("drop", a), b = a.dataTransfer.files, b.length && (c = a.dataTransfer.items, c && c.length && null != c[0].webkitGetAsEntry ? this._addFilesFromItems(c) : this.handleFiles(b)))
        }, b.prototype.paste = function (a) {
          var b, c;
          if (null != (null != a && null != (c = a.clipboardData) ? c.items : void 0))return this.emit("paste", a), b = a.clipboardData.items, b.length ? this._addFilesFromItems(b) : void 0
        }, b.prototype.handleFiles = function (a) {
          var b, c, d, e;
          for (e = [], c = 0, d = a.length; d > c; c++)b = a[c], e.push(this.addFile(b));
          return e
        }, b.prototype._addFilesFromItems = function (a) {
          var b, c, d, e, f;
          for (f = [], d = 0, e = a.length; e > d; d++)c = a[d], f.push(null != c.webkitGetAsEntry && (b = c.webkitGetAsEntry()) ? b.isFile ? this.addFile(c.getAsFile()) : b.isDirectory ? this._addFilesFromDirectory(b, b.name) : void 0 : null != c.getAsFile ? null == c.kind || "file" === c.kind ? this.addFile(c.getAsFile()) : void 0 : void 0);
          return f
        }, b.prototype._addFilesFromDirectory = function (a, b) {
          var c, d;
          return c = a.createReader(), d = function (a) {
            return function (c) {
              var d, e, f;
              for (e = 0, f = c.length; f > e; e++)d = c[e], d.isFile ? d.file(function (c) {
                return a.options.ignoreHiddenFiles && "." === c.name.substring(0, 1) ? void 0 : (c.fullPath = "" + b + "/" + c.name, a.addFile(c))
              }) : d.isDirectory && a._addFilesFromDirectory(d, "" + b + "/" + d.name)
            }
          }(this), c.readEntries(d, function (a) {
            return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(a) : void 0
          })
        }, b.prototype.accept = function (a, c) {
          return a.size > 1024 * this.options.maxFilesize * 1024 ? c(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(a.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : b.isValidFile(a, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (c(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", a)) : this.options.accept.call(this, a, c) : c(this.options.dictInvalidFileType)
        }, b.prototype.addFile = function (a) {
          return a.upload = {
            progress: 0,
            total: a.size,
            bytesSent: 0
          }, this.files.push(a), a.status = b.ADDED, this.emit("addedfile", a), this._enqueueThumbnail(a), this.accept(a, function (b) {
            return function (c) {
              return c ? (a.accepted = !1, b._errorProcessing([a], c)) : (a.accepted = !0, b.options.autoQueue && b.enqueueFile(a)), b._updateMaxFilesReachedClass()
            }
          }(this))
        }, b.prototype.enqueueFiles = function (a) {
          var b, c, d;
          for (c = 0, d = a.length; d > c; c++)b = a[c], this.enqueueFile(b);
          return null
        }, b.prototype.enqueueFile = function (a) {
          if (a.status !== b.ADDED || a.accepted !== !0)throw new Error("This file can't be queued because it has already been processed or was rejected.");
          return a.status = b.QUEUED, this.options.autoProcessQueue ? setTimeout(function (a) {
            return function () {
              return a.processQueue()
            }
          }(this), 0) : void 0
        }, b.prototype._thumbnailQueue = [], b.prototype._processingThumbnail = !1, b.prototype._enqueueThumbnail = function (a) {
          return this.options.createImageThumbnails && a.type.match(/image.*/) && a.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(a), setTimeout(function (a) {
            return function () {
              return a._processThumbnailQueue()
            }
          }(this), 0)) : void 0
        }, b.prototype._processThumbnailQueue = function () {
          return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail = !0, this.createThumbnail(this._thumbnailQueue.shift(), function (a) {
            return function () {
              return a._processingThumbnail = !1, a._processThumbnailQueue()
            }
          }(this)))
        }, b.prototype.removeFile = function (a) {
          return a.status === b.UPLOADING && this.cancelUpload(a), this.files = j(this.files, a), this.emit("removedfile", a), 0 === this.files.length ? this.emit("reset") : void 0
        }, b.prototype.removeAllFiles = function (a) {
          var c, d, e, f;
          for (null == a && (a = !1), f = this.files.slice(), d = 0, e = f.length; e > d; d++)c = f[d], (c.status !== b.UPLOADING || a) && this.removeFile(c);
          return null
        }, b.prototype.createThumbnail = function (a, b) {
          var c;
          return c = new FileReader, c.onload = function (d) {
            return function () {
              var e;
              return e = document.createElement("img"), e.onload = function () {
                var c, f, g, i, j, k, l, m;
                return a.width = e.width, a.height = e.height, g = d.options.resize.call(d, a), null == g.trgWidth && (g.trgWidth = g.optWidth), null == g.trgHeight && (g.trgHeight = g.optHeight), c = document.createElement("canvas"), f = c.getContext("2d"), c.width = g.trgWidth, c.height = g.trgHeight, h(f, e, null != (j = g.srcX) ? j : 0, null != (k = g.srcY) ? k : 0, g.srcWidth, g.srcHeight, null != (l = g.trgX) ? l : 0, null != (m = g.trgY) ? m : 0, g.trgWidth, g.trgHeight), i = c.toDataURL("image/png"), d.emit("thumbnail", a, i), null != b ? b() : void 0
              }, e.src = c.result
            }
          }(this), c.readAsDataURL(a)
        }, b.prototype.processQueue = function () {
          var a, b, c, d;
          if (b = this.options.parallelUploads, c = this.getUploadingFiles().length, a = c, !(c >= b) && (d = this.getQueuedFiles(), d.length > 0)) {
            if (this.options.uploadMultiple)return this.processFiles(d.slice(0, b - c));
            for (; b > a;) {
              if (!d.length)return;
              this.processFile(d.shift()), a++
            }
          }
        }, b.prototype.processFile = function (a) {
          return this.processFiles([a])
        }, b.prototype.processFiles = function (a) {
          var c, d, e;
          for (d = 0, e = a.length; e > d; d++)c = a[d], c.processing = !0, c.status = b.UPLOADING, this.emit("processing", c);
          return this.options.uploadMultiple && this.emit("processingmultiple", a), this.uploadFiles(a)
        }, b.prototype._getFilesWithXhr = function (a) {
          var b, c;
          return c = function () {
            var c, d, e, f;
            for (e = this.files, f = [], c = 0, d = e.length; d > c; c++)b = e[c], b.xhr === a && f.push(b);
            return f
          }.call(this)
        }, b.prototype.cancelUpload = function (a) {
          var c, d, e, f, g, h, i;
          if (a.status === b.UPLOADING) {
            for (d = this._getFilesWithXhr(a.xhr), e = 0, g = d.length; g > e; e++)c = d[e], c.status = b.CANCELED;
            for (a.xhr.abort(), f = 0, h = d.length; h > f; f++)c = d[f], this.emit("canceled", c);
            this.options.uploadMultiple && this.emit("canceledmultiple", d)
          } else((i = a.status) === b.ADDED || i === b.QUEUED) && (a.status = b.CANCELED, this.emit("canceled", a), this.options.uploadMultiple && this.emit("canceledmultiple", [a]));
          return this.options.autoProcessQueue ? this.processQueue() : void 0
        }, b.prototype.uploadFile = function (a) {
          return this.uploadFiles([a])
        }, b.prototype.uploadFiles = function (a) {
          var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I;
          for (t = new XMLHttpRequest, u = 0, y = a.length; y > u; u++)d = a[u], d.xhr = t;
          t.open(this.options.method, this.options.url, !0), t.withCredentials = !!this.options.withCredentials, q = null, f = function (b) {
            return function () {
              var c, e, f;
              for (f = [], c = 0, e = a.length; e > c; c++)d = a[c], f.push(b._errorProcessing(a, q || b.options.dictResponseError.replace("{{statusCode}}", t.status), t));
              return f
            }
          }(this), r = function (b) {
            return function (c) {
              var e, f, g, h, i, j, k, l, m;
              if (null != c)for (f = 100 * c.loaded / c.total, g = 0, j = a.length; j > g; g++)d = a[g], d.upload = {
                progress: f,
                total: c.total,
                bytesSent: c.loaded
              }; else {
                for (e = !0, f = 100, h = 0, k = a.length; k > h; h++)d = a[h], (100 !== d.upload.progress || d.upload.bytesSent !== d.upload.total) && (e = !1), d.upload.progress = f, d.upload.bytesSent = d.upload.total;
                if (e)return
              }
              for (m = [], i = 0, l = a.length; l > i; i++)d = a[i], m.push(b.emit("uploadprogress", d, f, d.upload.bytesSent));
              return m
            }
          }(this), t.onload = function (c) {
            return function (d) {
              var e;
              if (a[0].status !== b.CANCELED && 4 === t.readyState) {
                if (q = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json"))try {
                  q = JSON.parse(q)
                } catch (g) {
                  d = g, q = "Invalid JSON response from server."
                }
                return r(), 200 <= (e = t.status) && 300 > e ? c._finished(a, q, d) : f()
              }
            }
          }(this), t.onerror = function () {
            return function () {
              return a[0].status !== b.CANCELED ? f() : void 0
            }
          }(this), p = null != (D = t.upload) ? D : t, p.onprogress = r, i = {
            Accept: "application/json",
            "Cache-Control": "no-cache",
            "X-Requested-With": "XMLHttpRequest"
          }, this.options.headers && c(i, this.options.headers);
          for (g in i)h = i[g], t.setRequestHeader(g, h);
          if (e = new FormData, this.options.params) {
            E = this.options.params;
            for (n in E)s = E[n], e.append(n, s)
          }
          for (v = 0, z = a.length; z > v; v++)d = a[v], this.emit("sending", d, t, e);
          if (this.options.uploadMultiple && this.emit("sendingmultiple", a, t, e), "FORM" === this.element.tagName)for (F = this.element.querySelectorAll("input, textarea, select, button"), w = 0, A = F.length; A > w; w++)if (k = F[w], l = k.getAttribute("name"), m = k.getAttribute("type"), "SELECT" === k.tagName && k.hasAttribute("multiple"))for (G = k.options, x = 0, B = G.length; B > x; x++)o = G[x], o.selected && e.append(l, o.value); else(!m || "checkbox" !== (H = m.toLowerCase()) && "radio" !== H || k.checked) && e.append(l, k.value);
          for (j = C = 0, I = a.length - 1; I >= 0 ? I >= C : C >= I; j = I >= 0 ? ++C : --C)e.append(this._getParamName(j), a[j], a[j].name);
          return t.send(e)
        }, b.prototype._finished = function (a, c, d) {
          var e, f, g;
          for (f = 0, g = a.length; g > f; f++)e = a[f], e.status = b.SUCCESS, this.emit("success", e, c, d), this.emit("complete", e);
          return this.options.uploadMultiple && (this.emit("successmultiple", a, c, d), this.emit("completemultiple", a)), this.options.autoProcessQueue ? this.processQueue() : void 0
        }, b.prototype._errorProcessing = function (a, c, d) {
          var e, f, g;
          for (f = 0, g = a.length; g > f; f++)e = a[f], e.status = b.ERROR, this.emit("error", e, c, d), this.emit("complete", e);
          return this.options.uploadMultiple && (this.emit("errormultiple", a, c, d), this.emit("completemultiple", a)), this.options.autoProcessQueue ? this.processQueue() : void 0
        }, b
      }(d), b.version = "3.10.2", b.options = {}, b.optionsForElement = function (a) {
        return a.getAttribute("id") ? b.options[e(a.getAttribute("id"))] : void 0
      }, b.instances = [], b.forElement = function (a) {
        if ("string" == typeof a && (a = document.querySelector(a)), null == (null != a ? a.dropzone : void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        return a.dropzone
      }, b.autoDiscover = !0, b.discover = function () {
        var a, c, d, e, f, g;
        for (document.querySelectorAll ? d = document.querySelectorAll(".dropzone") : (d = [], a = function (a) {
          var b, c, e, f;
          for (f = [], c = 0, e = a.length; e > c; c++)b = a[c], f.push(/(^| )dropzone($| )/.test(b.className) ? d.push(b) : void 0);
          return f
        }, a(document.getElementsByTagName("div")), a(document.getElementsByTagName("form"))), g = [], e = 0, f = d.length; f > e; e++)c = d[e], g.push(b.optionsForElement(c) !== !1 ? new b(c) : void 0);
        return g
      }, b.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], b.isBrowserSupported = function () {
        var a, c, d, e, f;
        if (a = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)if ("classList"in document.createElement("a"))for (f = b.blacklistedBrowsers, d = 0, e = f.length; e > d; d++)c = f[d], c.test(navigator.userAgent) && (a = !1); else a = !1; else a = !1;
        return a
      }, j = function (a, b) {
        var c, d, e, f;
        for (f = [], d = 0, e = a.length; e > d; d++)c = a[d], c !== b && f.push(c);
        return f
      }, e = function (a) {
        return a.replace(/[\-_](\w)/g, function (a) {
          return a.charAt(1).toUpperCase()
        })
      }, b.createElement = function (a) {
        var b;
        return b = document.createElement("div"), b.innerHTML = a, b.childNodes[0]
      }, b.elementInside = function (a, b) {
        if (a === b)return !0;
        for (; a = a.parentNode;)if (a === b)return !0;
        return !1
      }, b.getElement = function (a, b) {
        var c;
        if ("string" == typeof a ? c = document.querySelector(a) : null != a.nodeType && (c = a), null == c)throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector or a plain HTML element.");
        return c
      }, b.getElements = function (a, b) {
        var c, d, e, f, g, h, i, j;
        if (a instanceof Array) {
          e = [];
          try {
            for (f = 0, h = a.length; h > f; f++)d = a[f], e.push(this.getElement(d, b))
          } catch (k) {
            c = k, e = null
          }
        } else if ("string" == typeof a)for (e = [], j = document.querySelectorAll(a), g = 0, i = j.length; i > g; g++)d = j[g], e.push(d); else null != a.nodeType && (e = [a]);
        if (null == e || !e.length)throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        return e
      }, b.confirm = function (a, b, c) {
        return window.confirm(a) ? b() : null != c ? c() : void 0
      }, b.isValidFile = function (a, b) {
        var c, d, e, f, g;
        if (!b)return !0;
        for (b = b.split(","), d = a.type, c = d.replace(/\/.*$/, ""), f = 0, g = b.length; g > f; f++)if (e = b[f], e = e.trim(), "." === e.charAt(0)) {
          if (-1 !== a.name.toLowerCase().indexOf(e.toLowerCase(), a.name.length - e.length))return !0
        } else if (/\/\*$/.test(e)) {
          if (c === e.replace(/\/.*$/, ""))return !0
        } else if (d === e)return !0;
        return !1
      }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (a) {
        return this.each(function () {
          return new b(this, a)
        })
      }), "undefined" != typeof c && null !== c ? c.exports = b : window.Dropzone = b, b.ADDED = "added", b.QUEUED = "queued", b.ACCEPTED = b.QUEUED, b.UPLOADING = "uploading", b.PROCESSING = b.UPLOADING, b.CANCELED = "canceled", b.ERROR = "error", b.SUCCESS = "success", g = function (a) {
        var b, c, d, e, f, g, h, i, j, k;
        for (h = a.naturalWidth, g = a.naturalHeight, c = document.createElement("canvas"), c.width = 1, c.height = g, d = c.getContext("2d"), d.drawImage(a, 0, 0), e = d.getImageData(0, 0, 1, g).data, k = 0, f = g, i = g; i > k;)b = e[4 * (i - 1) + 3], 0 === b ? f = i : k = i, i = f + k >> 1;
        return j = i / g, 0 === j ? 1 : j
      }, h = function (a, b, c, d, e, f, h, i, j, k) {
        var l;
        return l = g(b), a.drawImage(b, c, d, e, f, h, i, j, k / l)
      }, f = function (a, b) {
        var c, d, e, f, g, h, i, j, k;
        if (e = !1, k = !0, d = a.document, j = d.documentElement, c = d.addEventListener ? "addEventListener" : "attachEvent", i = d.addEventListener ? "removeEventListener" : "detachEvent", h = d.addEventListener ? "" : "on", f = function (c) {
            return "readystatechange" !== c.type || "complete" === d.readyState ? (("load" === c.type ? a : d)[i](h + c.type, f, !1), !e && (e = !0) ? b.call(a, c.type || c) : void 0) : void 0
          }, g = function () {
            var a;
            try {
              j.doScroll("left")
            } catch (b) {
              return a = b, void setTimeout(g, 50)
            }
            return f("poll")
          }, "complete" !== d.readyState) {
          if (d.createEventObject && j.doScroll) {
            try {
              k = !a.frameElement
            } catch (l) {
            }
            k && g()
          }
          return d[c](h + "DOMContentLoaded", f, !1), d[c](h + "readystatechange", f, !1), a[c](h + "load", f, !1)
        }
      }, b._autoDiscoverFunction = function () {
        return b.autoDiscover ? b.discover() : void 0
      }, f(window, b._autoDiscoverFunction)
    }).call(this)
  }), "object" == typeof exports ? module.exports = a("dropzone") : "function" == typeof define && define.amd ? define([], function () {
    return a("dropzone")
  }) : this.Dropzone = a("dropzone")
}();

/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function (t, e) {
  function i() {
    return new Date(Date.UTC.apply(Date, arguments))
  }

  function a() {
    var t = new Date;
    return i(t.getFullYear(), t.getMonth(), t.getDate())
  }

  function s(t) {
    return function () {
      return this[t].apply(this, arguments)
    }
  }

  function n(e, i) {
    function a(t, e) {
      return e.toLowerCase()
    }

    var s, n = t(e).data(), r = {}, h = new RegExp("^" + i.toLowerCase() + "([A-Z])");
    i = new RegExp("^" + i.toLowerCase());
    for (var o in n)i.test(o) && (s = o.replace(h, a), r[s] = n[o]);
    return r
  }

  function r(e) {
    var i = {};
    if (f[e] || (e = e.split("-")[0], f[e])) {
      var a = f[e];
      return t.each(p, function (t, e) {
        e in a && (i[e] = a[e])
      }), i
    }
  }

  var h = t(window), o = function () {
    var e = {
      get: function (t) {
        return this.slice(t)[0]
      }, contains: function (t) {
        for (var e = t && t.valueOf(), i = 0, a = this.length; a > i; i++)if (this[i].valueOf() === e)return i;
        return -1
      }, remove: function (t) {
        this.splice(t, 1)
      }, replace: function (e) {
        e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
      }, clear: function () {
        this.splice(0)
      }, copy: function () {
        var t = new o;
        return t.replace(this), t
      }
    };
    return function () {
      var i = [];
      return i.push.apply(i, arguments), t.extend(i, e), i
    }
  }(), d = function (e, i) {
    this.dates = new o, this.viewDate = a(), this.focusDate = null, this._process_options(i), this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(g.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function (t, e) {
      return parseInt(e) + 1
    }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
  };
  d.prototype = {
    constructor: d, _process_options: function (e) {
      this._o = t.extend({}, this._o, e);
      var i = this.o = t.extend({}, this._o), a = i.language;
      switch (f[a] || (a = a.split("-")[0], f[a] || (a = u.language)), i.language = a, i.startView) {
        case 2:
        case"decade":
          i.startView = 2;
          break;
        case 1:
        case"year":
          i.startView = 1;
          break;
        default:
          i.startView = 0
      }
      switch (i.minViewMode) {
        case 1:
        case"months":
          i.minViewMode = 1;
          break;
        case 2:
        case"years":
          i.minViewMode = 2;
          break;
        default:
          i.minViewMode = 0
      }
      i.startView = Math.max(i.startView, i.minViewMode), i.multidate !== !0 && (i.multidate = Number(i.multidate) || !1, i.multidate = i.multidate !== !1 ? Math.max(0, i.multidate) : 1), i.multidateSeparator = String(i.multidateSeparator), i.weekStart %= 7, i.weekEnd = (i.weekStart + 6) % 7;
      var s = g.parseFormat(i.format);
      i.startDate !== -1 / 0 && (i.startDate = i.startDate ? i.startDate instanceof Date ? this._local_to_utc(this._zero_time(i.startDate)) : g.parseDate(i.startDate, s, i.language) : -1 / 0), 1 / 0 !== i.endDate && (i.endDate = i.endDate ? i.endDate instanceof Date ? this._local_to_utc(this._zero_time(i.endDate)) : g.parseDate(i.endDate, s, i.language) : 1 / 0), i.daysOfWeekDisabled = i.daysOfWeekDisabled || [], t.isArray(i.daysOfWeekDisabled) || (i.daysOfWeekDisabled = i.daysOfWeekDisabled.split(/[,\s]*/)), i.daysOfWeekDisabled = t.map(i.daysOfWeekDisabled, function (t) {
        return parseInt(t, 10)
      });
      var n = String(i.orientation).toLowerCase().split(/\s+/g), r = i.orientation.toLowerCase();
      if (n = t.grep(n, function (t) {
          return /^auto|left|right|top|bottom$/.test(t)
        }), i.orientation = {x: "auto", y: "auto"}, r && "auto" !== r)if (1 === n.length)switch (n[0]) {
        case"top":
        case"bottom":
          i.orientation.y = n[0];
          break;
        case"left":
        case"right":
          i.orientation.x = n[0]
      } else r = t.grep(n, function (t) {
        return /^left|right$/.test(t)
      }), i.orientation.x = r[0] || "auto", r = t.grep(n, function (t) {
        return /^top|bottom$/.test(t)
      }), i.orientation.y = r[0] || "auto"; else;
    }, _events: [], _secondaryEvents: [], _applyEvents: function (t) {
      for (var i, a, s, n = 0; n < t.length; n++)i = t[n][0], 2 === t[n].length ? (a = e, s = t[n][1]) : 3 === t[n].length && (a = t[n][1], s = t[n][2]), i.on(s, a)
    }, _unapplyEvents: function (t) {
      for (var i, a, s, n = 0; n < t.length; n++)i = t[n][0], 2 === t[n].length ? (s = e, a = t[n][1]) : 3 === t[n].length && (s = t[n][1], a = t[n][2]), i.off(a, s)
    }, _buildEvents: function () {
      this.isInput ? this._events = [[this.element, {
        focus: t.proxy(this.show, this), keyup: t.proxy(function (e) {
          -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
        }, this), keydown: t.proxy(this.keydown, this)
      }]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), {
        focus: t.proxy(this.show, this),
        keyup: t.proxy(function (e) {
          -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
        }, this),
        keydown: t.proxy(this.keydown, this)
      }], [this.component, {click: t.proxy(this.show, this)}]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {click: t.proxy(this.show, this)}]], this._events.push([this.element, "*", {
        blur: t.proxy(function (t) {
          this._focused_from = t.target
        }, this)
      }], [this.element, {
        blur: t.proxy(function (t) {
          this._focused_from = t.target
        }, this)
      }]), this._secondaryEvents = [[this.picker, {click: t.proxy(this.click, this)}], [t(window), {resize: t.proxy(this.place, this)}], [t(document), {
        "mousedown touchstart": t.proxy(function (t) {
          this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
        }, this)
      }]]
    }, _attachEvents: function () {
      this._detachEvents(), this._applyEvents(this._events)
    }, _detachEvents: function () {
      this._unapplyEvents(this._events)
    }, _attachSecondaryEvents: function () {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
    }, _detachSecondaryEvents: function () {
      this._unapplyEvents(this._secondaryEvents)
    }, _trigger: function (e, i) {
      var a = i || this.dates.get(-1), s = this._utc_to_local(a);
      this.element.trigger({
        type: e,
        date: s,
        dates: t.map(this.dates, this._utc_to_local),
        format: t.proxy(function (t, e) {
          0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
          var i = this.dates.get(t);
          return g.formatDate(i, e, this.o.language)
        }, this)
      })
    }, show: function () {
      this.isInline || this.picker.appendTo("body"), this.picker.show(), this.place(), this._attachSecondaryEvents(), this._trigger("show")
    }, hide: function () {
      this.isInline || this.picker.is(":visible") && (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
    }, remove: function () {
      this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
    }, _utc_to_local: function (t) {
      return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
    }, _local_to_utc: function (t) {
      return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
    }, _zero_time: function (t) {
      return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
    }, _zero_utc_time: function (t) {
      return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
    }, getDates: function () {
      return t.map(this.dates, this._utc_to_local)
    }, getUTCDates: function () {
      return t.map(this.dates, function (t) {
        return new Date(t)
      })
    }, getDate: function () {
      return this._utc_to_local(this.getUTCDate())
    }, getUTCDate: function () {
      return new Date(this.dates.get(-1))
    }, setDates: function () {
      var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
      this.update.apply(this, e), this._trigger("changeDate"), this.setValue()
    }, setUTCDates: function () {
      var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
      this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue()
    }, setDate: s("setDates"), setUTCDate: s("setUTCDates"), setValue: function () {
      var t = this.getFormattedDate();
      this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change()
    }, getFormattedDate: function (i) {
      i === e && (i = this.o.format);
      var a = this.o.language;
      return t.map(this.dates, function (t) {
        return g.formatDate(t, i, a)
      }).join(this.o.multidateSeparator)
    }, setStartDate: function (t) {
      this._process_options({startDate: t}), this.update(), this.updateNavArrows()
    }, setEndDate: function (t) {
      this._process_options({endDate: t}), this.update(), this.updateNavArrows()
    }, setDaysOfWeekDisabled: function (t) {
      this._process_options({daysOfWeekDisabled: t}), this.update(), this.updateNavArrows()
    }, place: function () {
      if (!this.isInline) {
        var e = this.picker.outerWidth(), i = this.picker.outerHeight(), a = 10, s = h.width(), n = h.height(), r = h.scrollTop(), o = parseInt(this.element.parents().filter(function () {
            return "auto" !== t(this).css("z-index")
          }).first().css("z-index")) + 10, d = this.component ? this.component.parent().offset() : this.element.offset(), l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1), c = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1), u = d.left, p = d.top;
        this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (u -= e - c)) : (this.picker.addClass("datepicker-orient-left"), d.left < 0 ? u -= d.left - a : d.left + e > s && (u = s - e - a));
        var f, g, v = this.o.orientation.y;
        "auto" === v && (f = -r + d.top - i, g = r + n - (d.top + l + i), v = Math.max(f, g) === g ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + v), "top" === v ? p += l : p -= i + parseInt(this.picker.css("padding-top")), this.picker.css({
          top: p,
          left: u,
          zIndex: o
        })
      }
    }, _allow_update: !0, update: function () {
      if (this._allow_update) {
        var e = this.dates.copy(), i = [], a = !1;
        arguments.length ? (t.each(arguments, t.proxy(function (t, e) {
          e instanceof Date && (e = this._local_to_utc(e)), i.push(e)
        }, this)), a = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function (t) {
          return g.parseDate(t, this.o.format, this.o.language)
        }, this)), i = t.grep(i, t.proxy(function (t) {
          return t < this.o.startDate || t > this.o.endDate || !t
        }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), a ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill()
      }
    }, fillDow: function () {
      var t = this.o.weekStart, e = "<tr>";
      if (this.o.calendarWeeks) {
        var i = '<th class="cw">&nbsp;</th>';
        e += i, this.picker.find(".datepicker-days thead tr:first-child").prepend(i)
      }
      for (; t < this.o.weekStart + 7;)e += '<th class="dow">' + f[this.o.language].daysMin[t++ % 7] + "</th>";
      e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
    }, fillMonths: function () {
      for (var t = "", e = 0; 12 > e;)t += '<span class="month">' + f[this.o.language].monthsShort[e++] + "</span>";
      this.picker.find(".datepicker-months td").html(t)
    }, setRange: function (e) {
      e && e.length ? this.range = t.map(e, function (t) {
        return t.valueOf()
      }) : delete this.range, this.fill()
    }, getClassNames: function (e) {
      var i = [], a = this.viewDate.getUTCFullYear(), s = this.viewDate.getUTCMonth(), n = new Date;
      return e.getUTCFullYear() < a || e.getUTCFullYear() === a && e.getUTCMonth() < s ? i.push("old") : (e.getUTCFullYear() > a || e.getUTCFullYear() === a && e.getUTCMonth() > s) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === n.getFullYear() && e.getUTCMonth() === n.getMonth() && e.getUTCDate() === n.getDate() && i.push("today"), -1 !== this.dates.contains(e) && i.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected")), i
    }, fill: function () {
      var a, s = new Date(this.viewDate), n = s.getUTCFullYear(), r = s.getUTCMonth(), h = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0, o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0, d = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0, l = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0, c = f[this.o.language].today || f.en.today || "", u = f[this.o.language].clear || f.en.clear || "";
      this.picker.find(".datepicker-days thead th.datepicker-switch").text(f[this.o.language].months[r] + " " + n), this.picker.find("tfoot th.today").text(c).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(u).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
      var p = i(n, r - 1, 28), v = g.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
      p.setUTCDate(v), p.setUTCDate(v - (p.getUTCDay() - this.o.weekStart + 7) % 7);
      var D = new Date(p);
      D.setUTCDate(D.getUTCDate() + 42), D = D.valueOf();
      for (var m, y = []; p.valueOf() < D;) {
        if (p.getUTCDay() === this.o.weekStart && (y.push("<tr>"), this.o.calendarWeeks)) {
          var w = new Date(+p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5), k = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5), C = new Date(Number(C = i(k.getUTCFullYear(), 0, 1)) + (11 - C.getUTCDay()) % 7 * 864e5), _ = (k - C) / 864e5 / 7 + 1;
          y.push('<td class="cw">' + _ + "</td>")
        }
        if (m = this.getClassNames(p), m.push("day"), this.o.beforeShowDay !== t.noop) {
          var T = this.o.beforeShowDay(this._utc_to_local(p));
          T === e ? T = {} : "boolean" == typeof T ? T = {enabled: T} : "string" == typeof T && (T = {classes: T}), T.enabled === !1 && m.push("disabled"), T.classes && (m = m.concat(T.classes.split(/\s+/))), T.tooltip && (a = T.tooltip)
        }
        m = t.unique(m), y.push('<td class="' + m.join(" ") + '"' + (a ? ' title="' + a + '"' : "") + ">" + p.getUTCDate() + "</td>"), p.getUTCDay() === this.o.weekEnd && y.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1)
      }
      this.picker.find(".datepicker-days tbody").empty().append(y.join(""));
      var b = this.picker.find(".datepicker-months").find("th:eq(1)").text(n).end().find("span").removeClass("active");
      t.each(this.dates, function (t, e) {
        e.getUTCFullYear() === n && b.eq(e.getUTCMonth()).addClass("active")
      }), (h > n || n > d) && b.addClass("disabled"), n === h && b.slice(0, o).addClass("disabled"), n === d && b.slice(l + 1).addClass("disabled"), y = "", n = 10 * parseInt(n / 10, 10);
      var U = this.picker.find(".datepicker-years").find("th:eq(1)").text(n + "-" + (n + 9)).end().find("td");
      n -= 1;
      for (var M, x = t.map(this.dates, function (t) {
        return t.getUTCFullYear()
      }), S = -1; 11 > S; S++)M = ["year"], -1 === S ? M.push("old") : 10 === S && M.push("new"), -1 !== t.inArray(n, x) && M.push("active"), (h > n || n > d) && M.push("disabled"), y += '<span class="' + M.join(" ") + '">' + n + "</span>", n += 1;
      U.html(y)
    }, updateNavArrows: function () {
      if (this._allow_update) {
        var t = new Date(this.viewDate), e = t.getUTCFullYear(), i = t.getUTCMonth();
        switch (this.viewMode) {
          case 0:
            this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? {visibility: "hidden"} : {visibility: "visible"}), this.picker.find(".next").css(1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? {visibility: "hidden"} : {visibility: "visible"});
            break;
          case 1:
          case 2:
            this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? {visibility: "hidden"} : {visibility: "visible"}), this.picker.find(".next").css(1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() ? {visibility: "hidden"} : {visibility: "visible"})
        }
      }
    }, click: function (e) {
      e.preventDefault();
      var a, s, n, r = t(e.target).closest("span, td, th");
      if (1 === r.length)switch (r[0].nodeName.toLowerCase()) {
        case"th":
          switch (r[0].className) {
            case"datepicker-switch":
              this.showMode(1);
              break;
            case"prev":
            case"next":
              var h = g.modes[this.viewMode].navStep * ("prev" === r[0].className ? -1 : 1);
              switch (this.viewMode) {
                case 0:
                  this.viewDate = this.moveMonth(this.viewDate, h), this._trigger("changeMonth", this.viewDate);
                  break;
                case 1:
                case 2:
                  this.viewDate = this.moveYear(this.viewDate, h), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
              }
              this.fill();
              break;
            case"today":
              var o = new Date;
              o = i(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0), this.showMode(-2);
              var d = "linked" === this.o.todayBtn ? null : "view";
              this._setDate(o, d);
              break;
            case"clear":
              var l;
              this.isInput ? l = this.element : this.component && (l = this.element.find("input")), l && l.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
          }
          break;
        case"span":
          r.is(".disabled") || (this.viewDate.setUTCDate(1), r.is(".month") ? (n = 1, s = r.parent().find("span").index(r), a = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(s), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(i(a, s, n))) : (n = 1, s = 0, a = parseInt(r.text(), 10) || 0, this.viewDate.setUTCFullYear(a), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(a, s, n))), this.showMode(-1), this.fill());
          break;
        case"td":
          r.is(".day") && !r.is(".disabled") && (n = parseInt(r.text(), 10) || 1, a = this.viewDate.getUTCFullYear(), s = this.viewDate.getUTCMonth(), r.is(".old") ? 0 === s ? (s = 11, a -= 1) : s -= 1 : r.is(".new") && (11 === s ? (s = 0, a += 1) : s += 1), this._setDate(i(a, s, n)))
      }
      this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from
    }, _toggle_multidate: function (t) {
      var e = this.dates.contains(t);
      if (t ? -1 !== e ? this.dates.remove(e) : this.dates.push(t) : this.dates.clear(), "number" == typeof this.o.multidate)for (; this.dates.length > this.o.multidate;)this.dates.remove(0)
    }, _setDate: function (t, e) {
      e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), this._trigger("changeDate");
      var i;
      this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), !this.o.autoclose || e && "date" !== e || this.hide()
    }, moveMonth: function (t, i) {
      if (!t)return e;
      if (!i)return t;
      var a, s, n = new Date(t.valueOf()), r = n.getUTCDate(), h = n.getUTCMonth(), o = Math.abs(i);
      if (i = i > 0 ? 1 : -1, 1 === o)s = -1 === i ? function () {
        return n.getUTCMonth() === h
      } : function () {
        return n.getUTCMonth() !== a
      }, a = h + i, n.setUTCMonth(a), (0 > a || a > 11) && (a = (a + 12) % 12); else {
        for (var d = 0; o > d; d++)n = this.moveMonth(n, i);
        a = n.getUTCMonth(), n.setUTCDate(r), s = function () {
          return a !== n.getUTCMonth()
        }
      }
      for (; s();)n.setUTCDate(--r), n.setUTCMonth(a);
      return n
    }, moveYear: function (t, e) {
      return this.moveMonth(t, 12 * e)
    }, dateWithinRange: function (t) {
      return t >= this.o.startDate && t <= this.o.endDate
    }, keydown: function (t) {
      if (this.picker.is(":not(:visible)"))return void(27 === t.keyCode && this.show());
      var e, i, s, n = !1, r = this.focusDate || this.viewDate;
      switch (t.keyCode) {
        case 27:
          this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault();
          break;
        case 37:
        case 39:
          if (!this.o.keyboardNavigation)break;
          e = 37 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || a(), e), s = this.moveYear(r, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || a(), e), s = this.moveMonth(r, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || a()), i.setUTCDate(i.getUTCDate() + e), s = new Date(r), s.setUTCDate(r.getUTCDate() + e)), this.dateWithinRange(i) && (this.focusDate = this.viewDate = s, this.setValue(), this.fill(), t.preventDefault());
          break;
        case 38:
        case 40:
          if (!this.o.keyboardNavigation)break;
          e = 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || a(), e), s = this.moveYear(r, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || a(), e), s = this.moveMonth(r, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || a()), i.setUTCDate(i.getUTCDate() + 7 * e), s = new Date(r), s.setUTCDate(r.getUTCDate() + 7 * e)), this.dateWithinRange(i) && (this.focusDate = this.viewDate = s, this.setValue(), this.fill(), t.preventDefault());
          break;
        case 32:
          break;
        case 13:
          r = this.focusDate || this.dates.get(-1) || this.viewDate, this._toggle_multidate(r), n = !0, this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), this.o.autoclose && this.hide());
          break;
        case 9:
          this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
      }
      if (n) {
        this._trigger(this.dates.length ? "changeDate" : "clearDate");
        var h;
        this.isInput ? h = this.element : this.component && (h = this.element.find("input")), h && h.change()
      }
    }, showMode: function (t) {
      t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + g.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
    }
  };
  var l = function (e, i) {
    this.element = t(e), this.inputs = t.map(i.inputs, function (t) {
      return t.jquery ? t[0] : t
    }), delete i.inputs, t(this.inputs).datepicker(i).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function (e) {
      return t(e).data("datepicker")
    }), this.updateDates()
  };
  l.prototype = {
    updateDates: function () {
      this.dates = t.map(this.pickers, function (t) {
        return t.getUTCDate()
      }), this.updateRanges()
    }, updateRanges: function () {
      var e = t.map(this.dates, function (t) {
        return t.valueOf()
      });
      t.each(this.pickers, function (t, i) {
        i.setRange(e)
      })
    }, dateUpdated: function (e) {
      if (!this.updating) {
        this.updating = !0;
        var i = t(e.target).data("datepicker"), a = i.getUTCDate(), s = t.inArray(e.target, this.inputs), n = this.inputs.length;
        if (-1 !== s) {
          if (t.each(this.pickers, function (t, e) {
              e.getUTCDate() || e.setUTCDate(a)
            }), a < this.dates[s])for (; s >= 0 && a < this.dates[s];)this.pickers[s--].setUTCDate(a); else if (a > this.dates[s])for (; n > s && a > this.dates[s];)this.pickers[s++].setUTCDate(a);
          this.updateDates(), delete this.updating
        }
      }
    }, remove: function () {
      t.map(this.pickers, function (t) {
        t.remove()
      }), delete this.element.data().datepicker
    }
  };
  var c = t.fn.datepicker;
  t.fn.datepicker = function (i) {
    var a = Array.apply(null, arguments);
    a.shift();
    var s;
    return this.each(function () {
      var h = t(this), o = h.data("datepicker"), c = "object" == typeof i && i;
      if (!o) {
        var p = n(this, "date"), f = t.extend({}, u, p, c), g = r(f.language), v = t.extend({}, u, g, p, c);
        if (h.is(".input-daterange") || v.inputs) {
          var D = {inputs: v.inputs || h.find("input").toArray()};
          h.data("datepicker", o = new l(this, t.extend(v, D)))
        } else h.data("datepicker", o = new d(this, v))
      }
      return "string" == typeof i && "function" == typeof o[i] && (s = o[i].apply(o, a), s !== e) ? !1 : void 0
    }), s !== e ? s : this
  };
  var u = t.fn.datepicker.defaults = {
    autoclose: !1,
    beforeShowDay: t.noop,
    calendarWeeks: !1,
    clearBtn: !1,
    daysOfWeekDisabled: [],
    endDate: 1 / 0,
    forceParse: !0,
    format: "mm/dd/yyyy",
    keyboardNavigation: !0,
    language: "en",
    minViewMode: 0,
    multidate: !1,
    multidateSeparator: ",",
    orientation: "auto",
    rtl: !1,
    startDate: -1 / 0,
    startView: 0,
    todayBtn: !1,
    todayHighlight: !1,
    weekStart: 0
  }, p = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
  t.fn.datepicker.Constructor = d;
  var f = t.fn.datepicker.dates = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      clear: "Clear"
    }
  }, g = {
    modes: [{clsName: "days", navFnc: "Month", navStep: 1}, {
      clsName: "months",
      navFnc: "FullYear",
      navStep: 1
    }, {clsName: "years", navFnc: "FullYear", navStep: 10}],
    isLeapYear: function (t) {
      return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    },
    getDaysInMonth: function (t, e) {
      return [31, g.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
    },
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
    parseFormat: function (t) {
      var e = t.replace(this.validParts, "\x00").split("\x00"), i = t.match(this.validParts);
      if (!e || !e.length || !i || 0 === i.length)throw new Error("Invalid date format.");
      return {separators: e, parts: i}
    },
    parseDate: function (a, s, n) {
      function r() {
        var t = this.slice(0, u[l].length), e = u[l].slice(0, t.length);
        return t === e
      }

      if (!a)return e;
      if (a instanceof Date)return a;
      "string" == typeof s && (s = g.parseFormat(s));
      var h, o, l, c = /([\-+]\d+)([dmwy])/, u = a.match(/([\-+]\d+)([dmwy])/g);
      if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(a)) {
        for (a = new Date, l = 0; l < u.length; l++)switch (h = c.exec(u[l]), o = parseInt(h[1]), h[2]) {
          case"d":
            a.setUTCDate(a.getUTCDate() + o);
            break;
          case"m":
            a = d.prototype.moveMonth.call(d.prototype, a, o);
            break;
          case"w":
            a.setUTCDate(a.getUTCDate() + 7 * o);
            break;
          case"y":
            a = d.prototype.moveYear.call(d.prototype, a, o)
        }
        return i(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), 0, 0, 0)
      }
      u = a && a.match(this.nonpunctuation) || [], a = new Date;
      var p, v, D = {}, m = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], y = {
        yyyy: function (t, e) {
          return t.setUTCFullYear(e)
        }, yy: function (t, e) {
          return t.setUTCFullYear(2e3 + e)
        }, m: function (t, e) {
          if (isNaN(t))return t;
          for (e -= 1; 0 > e;)e += 12;
          for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;)t.setUTCDate(t.getUTCDate() - 1);
          return t
        }, d: function (t, e) {
          return t.setUTCDate(e)
        }
      };
      y.M = y.MM = y.mm = y.m, y.dd = y.d, a = i(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0);
      var w = s.parts.slice();
      if (u.length !== w.length && (w = t(w).filter(function (e, i) {
          return -1 !== t.inArray(i, m)
        }).toArray()), u.length === w.length) {
        var k;
        for (l = 0, k = w.length; k > l; l++) {
          if (p = parseInt(u[l], 10), h = w[l], isNaN(p))switch (h) {
            case"MM":
              v = t(f[n].months).filter(r), p = t.inArray(v[0], f[n].months) + 1;
              break;
            case"M":
              v = t(f[n].monthsShort).filter(r), p = t.inArray(v[0], f[n].monthsShort) + 1
          }
          D[h] = p
        }
        var C, _;
        for (l = 0; l < m.length; l++)_ = m[l], _ in D && !isNaN(D[_]) && (C = new Date(a), y[_](C, D[_]), isNaN(C) || (a = C))
      }
      return a
    },
    formatDate: function (e, i, a) {
      if (!e)return "";
      "string" == typeof i && (i = g.parseFormat(i));
      var s = {
        d: e.getUTCDate(),
        D: f[a].daysShort[e.getUTCDay()],
        DD: f[a].days[e.getUTCDay()],
        m: e.getUTCMonth() + 1,
        M: f[a].monthsShort[e.getUTCMonth()],
        MM: f[a].months[e.getUTCMonth()],
        yy: e.getUTCFullYear().toString().substring(2),
        yyyy: e.getUTCFullYear()
      };
      s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m, e = [];
      for (var n = t.extend([], i.separators), r = 0, h = i.parts.length; h >= r; r++)n.length && e.push(n.shift()), e.push(s[i.parts[r]]);
      return e.join("")
    },
    headTemplate: '<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
  };
  g.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + g.headTemplate + "<tbody></tbody>" + g.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = g, t.fn.datepicker.noConflict = function () {
    return t.fn.datepicker = c, this
  }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (e) {
    var i = t(this);
    i.data("datepicker") || (e.preventDefault(), i.datepicker("show"))
  }), t(function () {
    t('[data-provide="datepicker-inline"]').datepicker()
  })
}(window.jQuery);

/*! bootstrap-timepicker v0.2.5
 * http://jdewit.github.com/bootstrap-timepicker
 * Copyright (c) 2013 Joris de Wit
 * MIT License
 */
!function (a, b, c) {
  "use strict";
  var d = function (b, c) {
    this.widget = "", this.$element = a(b), this.defaultTime = c.defaultTime, this.disableFocus = c.disableFocus, this.disableMousewheel = c.disableMousewheel, this.isOpen = c.isOpen, this.minuteStep = c.minuteStep, this.modalBackdrop = c.modalBackdrop, this.secondStep = c.secondStep, this.showInputs = c.showInputs, this.showMeridian = c.showMeridian, this.showSeconds = c.showSeconds, this.template = c.template, this.appendWidgetTo = c.appendWidgetTo, this.showWidgetOnAddonClick = c.showWidgetOnAddonClick, this._init()
  };
  d.prototype = {
    constructor: d, _init: function () {
      var b = this;
      this.showWidgetOnAddonClick && (this.$element.parent().hasClass("input-group") || this.$element.parent().hasClass("input-group")) ? (this.$element.parent(".input-group").find(".input-group-addon, .input-group-btn").on({"click.timepicker": a.proxy(this.showWidget, this)}), this.$element.on({
        "focus.timepicker": a.proxy(this.highlightUnit, this),
        "click.timepicker": a.proxy(this.highlightUnit, this),
        "keydown.timepicker": a.proxy(this.elementKeydown, this),
        "blur.timepicker": a.proxy(this.blurElement, this),
        "mousewheel.timepicker DOMMouseScroll.timepicker": a.proxy(this.mousewheel, this)
      })) : this.template ? this.$element.on({
        "focus.timepicker": a.proxy(this.showWidget, this),
        "click.timepicker": a.proxy(this.showWidget, this),
        "blur.timepicker": a.proxy(this.blurElement, this),
        "mousewheel.timepicker DOMMouseScroll.timepicker": a.proxy(this.mousewheel, this)
      }) : this.$element.on({
        "focus.timepicker": a.proxy(this.highlightUnit, this),
        "click.timepicker": a.proxy(this.highlightUnit, this),
        "keydown.timepicker": a.proxy(this.elementKeydown, this),
        "blur.timepicker": a.proxy(this.blurElement, this),
        "mousewheel.timepicker DOMMouseScroll.timepicker": a.proxy(this.mousewheel, this)
      }), this.$widget = this.template !== !1 ? a(this.getTemplate()).prependTo(this.$element.parents(this.appendWidgetTo)).on("click", a.proxy(this.widgetClick, this)) : !1, this.showInputs && this.$widget !== !1 && this.$widget.find("input").each(function () {
        a(this).on({
          "click.timepicker": function () {
            a(this).select()
          }, "keydown.timepicker": a.proxy(b.widgetKeydown, b), "keyup.timepicker": a.proxy(b.widgetKeyup, b)
        })
      }), this.setDefaultTime(this.defaultTime)
    }, blurElement: function () {
      this.highlightedUnit = null, this.updateFromElementVal()
    }, clear: function () {
      this.hour = "", this.minute = "", this.second = "", this.meridian = "", this.$element.val("")
    }, decrementHour: function () {
      if (this.showMeridian)if (1 === this.hour)this.hour = 12; else {
        if (12 === this.hour)return this.hour--, this.toggleMeridian();
        if (0 === this.hour)return this.hour = 11, this.toggleMeridian();
        this.hour--
      } else this.hour <= 0 ? this.hour = 23 : this.hour--
    }, decrementMinute: function (a) {
      var b;
      b = a ? this.minute - a : this.minute - this.minuteStep, 0 > b ? (this.decrementHour(), this.minute = b + 60) : this.minute = b
    }, decrementSecond: function () {
      var a = this.second - this.secondStep;
      0 > a ? (this.decrementMinute(!0), this.second = a + 60) : this.second = a
    }, elementKeydown: function (a) {
      switch (a.keyCode) {
        case 9:
        case 27:
          this.updateFromElementVal();
          break;
        case 37:
          a.preventDefault(), this.highlightPrevUnit();
          break;
        case 38:
          switch (a.preventDefault(), this.highlightedUnit) {
            case"hour":
              this.incrementHour(), this.highlightHour();
              break;
            case"minute":
              this.incrementMinute(), this.highlightMinute();
              break;
            case"second":
              this.incrementSecond(), this.highlightSecond();
              break;
            case"meridian":
              this.toggleMeridian(), this.highlightMeridian()
          }
          this.update();
          break;
        case 39:
          a.preventDefault(), this.highlightNextUnit();
          break;
        case 40:
          switch (a.preventDefault(), this.highlightedUnit) {
            case"hour":
              this.decrementHour(), this.highlightHour();
              break;
            case"minute":
              this.decrementMinute(), this.highlightMinute();
              break;
            case"second":
              this.decrementSecond(), this.highlightSecond();
              break;
            case"meridian":
              this.toggleMeridian(), this.highlightMeridian()
          }
          this.update()
      }
    }, getCursorPosition: function () {
      var a = this.$element.get(0);
      if ("selectionStart"in a)return a.selectionStart;
      if (c.selection) {
        a.focus();
        var b = c.selection.createRange(), d = c.selection.createRange().text.length;
        return b.moveStart("character", -a.value.length), b.text.length - d
      }
    }, getTemplate: function () {
      var a, b, c, d, e, f;
      switch (this.showInputs ? (b = '<input type="text" class="form-control bootstrap-timepicker-hour" maxlength="2"/>', c = '<input type="text" class="form-control bootstrap-timepicker-minute" maxlength="2"/>', d = '<input type="text" class="form-control bootstrap-timepicker-second" maxlength="2"/>', e = '<input type="text" class="form-control bootstrap-timepicker-meridian" maxlength="2"/>') : (b = '<span class="bootstrap-timepicker-hour"></span>', c = '<span class="bootstrap-timepicker-minute"></span>', d = '<span class="bootstrap-timepicker-second"></span>', e = '<span class="bootstrap-timepicker-meridian"></span>'), f = '<table><tr><td><a href="#" data-action="incrementHour"><i class="fa fa-chevron-up"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="fa fa-chevron-up"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="fa fa-chevron-up"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="fa fa-chevron-up"></i></a></td>' : "") + "</tr>" + "<tr>" + "<td>" + b + "</td> " + '<td class="separator">:</td>' + "<td>" + c + "</td> " + (this.showSeconds ? '<td class="separator">:</td><td>' + d + "</td>" : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + e + "</td>" : "") + "</tr>" + "<tr>" + '<td><a href="#" data-action="decrementHour"><i class="fa fa-chevron-down"></i></a></td>' + '<td class="separator"></td>' + '<td><a href="#" data-action="decrementMinute"><i class="fa fa-chevron-down"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="fa fa-chevron-down"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="fa fa-chevron-down"></i></a></td>' : "") + "</tr>" + "</table>", this.template) {
        case"modal":
          a = '<div class="modal fade in" data-backdrop="' + (this.modalBackdrop ? "true" : "false") + '">' + '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">' + '<a href="#" class="close" data-dismiss="modal">×</a>' + "<h3>Pick Time</h3>" + "</div>" + '<div class="modal-content"><div class="bootstrap-timepicker-widget">' + f + "</div></div>" + '<div class="modal-footer">' + '<a href="#" class="btn btn-sm btn-primary" data-dismiss="modal">OK</a>' + "</div>" + "</div>" + "</div>" + "</div>";
          break;
        case"dropdown":
          a = '<div class="bootstrap-timepicker-widget dropdown-menu">' + f + "</div>"
      }
      return a
    }, getTime: function () {
      return this.hour || this.minute || this.second ? this.hour + ":" + (1 === this.minute.toString().length ? "0" + this.minute : this.minute) + (this.showSeconds ? ":" + (1 === this.second.toString().length ? "0" + this.second : this.second) : "") + (this.showMeridian ? " " + this.meridian : "") : ""
    }, hideWidget: function () {
      this.isOpen !== !1 && (this.$element.trigger({
        type: "hide.timepicker",
        time: {
          value: this.getTime(),
          hours: this.hour,
          minutes: this.minute,
          seconds: this.second,
          meridian: this.meridian
        }
      }), "modal" === this.template && this.$widget.modal ? this.$widget.modal("hide") : this.$widget.removeClass("open"), a(c).off("mousedown.timepicker, touchend.timepicker"), this.isOpen = !1)
    }, highlightUnit: function () {
      this.position = this.getCursorPosition(), this.position >= 0 && this.position <= 2 ? this.highlightHour() : this.position >= 3 && this.position <= 5 ? this.highlightMinute() : this.position >= 6 && this.position <= 8 ? this.showSeconds ? this.highlightSecond() : this.highlightMeridian() : this.position >= 9 && this.position <= 11 && this.highlightMeridian()
    }, highlightNextUnit: function () {
      switch (this.highlightedUnit) {
        case"hour":
          this.highlightMinute();
          break;
        case"minute":
          this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
          break;
        case"second":
          this.showMeridian ? this.highlightMeridian() : this.highlightHour();
          break;
        case"meridian":
          this.highlightHour()
      }
    }, highlightPrevUnit: function () {
      switch (this.highlightedUnit) {
        case"hour":
          this.showMeridian ? this.highlightMeridian() : this.showSeconds ? this.highlightSecond() : this.highlightMinute();
          break;
        case"minute":
          this.highlightHour();
          break;
        case"second":
          this.highlightMinute();
          break;
        case"meridian":
          this.showSeconds ? this.highlightSecond() : this.highlightMinute()
      }
    }, highlightHour: function () {
      var a = this.$element.get(0), b = this;
      this.highlightedUnit = "hour", a.setSelectionRange && setTimeout(function () {
        b.hour < 10 ? a.setSelectionRange(0, 1) : a.setSelectionRange(0, 2)
      }, 0)
    }, highlightMinute: function () {
      var a = this.$element.get(0), b = this;
      this.highlightedUnit = "minute", a.setSelectionRange && setTimeout(function () {
        b.hour < 10 ? a.setSelectionRange(2, 4) : a.setSelectionRange(3, 5)
      }, 0)
    }, highlightSecond: function () {
      var a = this.$element.get(0), b = this;
      this.highlightedUnit = "second", a.setSelectionRange && setTimeout(function () {
        b.hour < 10 ? a.setSelectionRange(5, 7) : a.setSelectionRange(6, 8)
      }, 0)
    }, highlightMeridian: function () {
      var a = this.$element.get(0), b = this;
      this.highlightedUnit = "meridian", a.setSelectionRange && (this.showSeconds ? setTimeout(function () {
        b.hour < 10 ? a.setSelectionRange(8, 10) : a.setSelectionRange(9, 11)
      }, 0) : setTimeout(function () {
        b.hour < 10 ? a.setSelectionRange(5, 7) : a.setSelectionRange(6, 8)
      }, 0))
    }, incrementHour: function () {
      if (this.showMeridian) {
        if (11 === this.hour)return this.hour++, this.toggleMeridian();
        12 === this.hour && (this.hour = 0)
      }
      return 23 === this.hour ? (this.hour = 0, void 0) : (this.hour++, void 0)
    }, incrementMinute: function (a) {
      var b;
      b = a ? this.minute + a : this.minute + this.minuteStep - this.minute % this.minuteStep, b > 59 ? (this.incrementHour(), this.minute = b - 60) : this.minute = b
    }, incrementSecond: function () {
      var a = this.second + this.secondStep - this.second % this.secondStep;
      a > 59 ? (this.incrementMinute(!0), this.second = a - 60) : this.second = a
    }, mousewheel: function (b) {
      if (!this.disableMousewheel) {
        b.preventDefault(), b.stopPropagation();
        var c = b.originalEvent.wheelDelta || -b.originalEvent.detail, d = null;
        switch ("mousewheel" === b.type ? d = -1 * b.originalEvent.wheelDelta : "DOMMouseScroll" === b.type && (d = 40 * b.originalEvent.detail), d && (b.preventDefault(), a(this).scrollTop(d + a(this).scrollTop())), this.highlightedUnit) {
          case"minute":
            c > 0 ? this.incrementMinute() : this.decrementMinute(), this.highlightMinute();
            break;
          case"second":
            c > 0 ? this.incrementSecond() : this.decrementSecond(), this.highlightSecond();
            break;
          case"meridian":
            this.toggleMeridian(), this.highlightMeridian();
            break;
          default:
            c > 0 ? this.incrementHour() : this.decrementHour(), this.highlightHour()
        }
        return !1
      }
    }, remove: function () {
      a("document").off(".timepicker"), this.$widget && this.$widget.remove(), delete this.$element.data().timepicker
    }, setDefaultTime: function (a) {
      if (this.$element.val())this.updateFromElementVal(); else if ("current" === a) {
        var b = new Date, c = b.getHours(), d = b.getMinutes(), e = b.getSeconds(), f = "AM";
        0 !== e && (e = Math.ceil(b.getSeconds() / this.secondStep) * this.secondStep, 60 === e && (d += 1, e = 0)), 0 !== d && (d = Math.ceil(b.getMinutes() / this.minuteStep) * this.minuteStep, 60 === d && (c += 1, d = 0)), this.showMeridian && (0 === c ? c = 12 : c >= 12 ? (c > 12 && (c -= 12), f = "PM") : f = "AM"), this.hour = c, this.minute = d, this.second = e, this.meridian = f, this.update()
      } else a === !1 ? (this.hour = 0, this.minute = 0, this.second = 0, this.meridian = "AM") : this.setTime(a)
    }, setTime: function (a, b) {
      if (!a)return this.clear(), void 0;
      var c, d, e, f, g;
      "object" == typeof a && a.getMonth ? (d = a.getHours(), e = a.getMinutes(), f = a.getSeconds(), this.showMeridian && (g = "AM", d > 12 && (g = "PM", d %= 12), 12 === d && (g = "PM"))) : (g = null !== a.match(/p/i) ? "PM" : "AM", a = a.replace(/[^0-9\:]/g, ""), c = a.split(":"), d = c[0] ? c[0].toString() : c.toString(), e = c[1] ? c[1].toString() : "", f = c[2] ? c[2].toString() : "", d.length > 4 && (f = d.substr(4, 2)), d.length > 2 && (e = d.substr(2, 2), d = d.substr(0, 2)), e.length > 2 && (f = e.substr(2, 2), e = e.substr(0, 2)), f.length > 2 && (f = f.substr(2, 2)), d = parseInt(d, 10), e = parseInt(e, 10), f = parseInt(f, 10), isNaN(d) && (d = 0), isNaN(e) && (e = 0), isNaN(f) && (f = 0), this.showMeridian ? 1 > d ? d = 1 : d > 12 && (d = 12) : (d >= 24 ? d = 23 : 0 > d && (d = 0), 13 > d && "PM" === g && (d += 12)), 0 > e ? e = 0 : e >= 60 && (e = 59), this.showSeconds && (isNaN(f) ? f = 0 : 0 > f ? f = 0 : f >= 60 && (f = 59))), this.hour = d, this.minute = e, this.second = f, this.meridian = g, this.update(b)
    }, showWidget: function () {
      if (!this.isOpen && !this.$element.is(":disabled")) {
        var b = this;
        a(c).on("mousedown.timepicker, touchend.timepicker", function (c) {
          0 === a(c.target).closest(".bootstrap-timepicker-widget").length && b.hideWidget()
        }), this.$element.trigger({
          type: "show.timepicker",
          time: {
            value: this.getTime(),
            hours: this.hour,
            minutes: this.minute,
            seconds: this.second,
            meridian: this.meridian
          }
        }), this.disableFocus && this.$element.blur(), this.hour || (this.defaultTime ? this.setDefaultTime(this.defaultTime) : this.setTime("0:0:0")), "modal" === this.template && this.$widget.modal ? this.$widget.modal("show").on("hidden", a.proxy(this.hideWidget, this)) : this.isOpen === !1 && this.$widget.addClass("open"), this.isOpen = !0
      }
    }, toggleMeridian: function () {
      this.meridian = "AM" === this.meridian ? "PM" : "AM"
    }, update: function (a) {
      this.updateElement(), a || this.updateWidget(), this.$element.trigger({
        type: "changeTime.timepicker",
        time: {
          value: this.getTime(),
          hours: this.hour,
          minutes: this.minute,
          seconds: this.second,
          meridian: this.meridian
        }
      })
    }, updateElement: function () {
      this.$element.val(this.getTime()).change()
    }, updateFromElementVal: function () {
      this.setTime(this.$element.val())
    }, updateWidget: function () {
      if (this.$widget !== !1) {
        var a = this.hour, b = 1 === this.minute.toString().length ? "0" + this.minute : this.minute, c = 1 === this.second.toString().length ? "0" + this.second : this.second;
        this.showInputs ? (this.$widget.find("input.bootstrap-timepicker-hour").val(a), this.$widget.find("input.bootstrap-timepicker-minute").val(b), this.showSeconds && this.$widget.find("input.bootstrap-timepicker-second").val(c), this.showMeridian && this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)) : (this.$widget.find("span.bootstrap-timepicker-hour").text(a), this.$widget.find("span.bootstrap-timepicker-minute").text(b), this.showSeconds && this.$widget.find("span.bootstrap-timepicker-second").text(c), this.showMeridian && this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))
      }
    }, updateFromWidgetInputs: function () {
      if (this.$widget !== !1) {
        var a = this.$widget.find("input.bootstrap-timepicker-hour").val() + ":" + this.$widget.find("input.bootstrap-timepicker-minute").val() + (this.showSeconds ? ":" + this.$widget.find("input.bootstrap-timepicker-second").val() : "") + (this.showMeridian ? this.$widget.find("input.bootstrap-timepicker-meridian").val() : "");
        this.setTime(a, !0)
      }
    }, widgetClick: function (b) {
      b.stopPropagation(), b.preventDefault();
      var c = a(b.target), d = c.closest("a").data("action");
      d && this[d](), this.update(), c.is("input") && c.get(0).setSelectionRange(0, 2)
    }, widgetKeydown: function (b) {
      var c = a(b.target), d = c.attr("class").replace("bootstrap-timepicker-", "");
      switch (b.keyCode) {
        case 9:
          if (this.showMeridian && "meridian" === d || this.showSeconds && "second" === d || !this.showMeridian && !this.showSeconds && "minute" === d)return this.hideWidget();
          break;
        case 27:
          this.hideWidget();
          break;
        case 38:
          switch (b.preventDefault(), d) {
            case"hour":
              this.incrementHour();
              break;
            case"minute":
              this.incrementMinute();
              break;
            case"second":
              this.incrementSecond();
              break;
            case"meridian":
              this.toggleMeridian()
          }
          this.setTime(this.getTime()), c.get(0).setSelectionRange(0, 2);
          break;
        case 40:
          switch (b.preventDefault(), d) {
            case"hour":
              this.decrementHour();
              break;
            case"minute":
              this.decrementMinute();
              break;
            case"second":
              this.decrementSecond();
              break;
            case"meridian":
              this.toggleMeridian()
          }
          this.setTime(this.getTime()), c.get(0).setSelectionRange(0, 2)
      }
    }, widgetKeyup: function (a) {
      (65 === a.keyCode || 77 === a.keyCode || 80 === a.keyCode || 46 === a.keyCode || 8 === a.keyCode || a.keyCode >= 46 && a.keyCode <= 57) && this.updateFromWidgetInputs()
    }
  }, a.fn.timepicker = function (b) {
    var c = Array.apply(null, arguments);
    return c.shift(), this.each(function () {
      var e = a(this), f = e.data("timepicker"), g = "object" == typeof b && b;
      f || e.data("timepicker", f = new d(this, a.extend({}, a.fn.timepicker.defaults, g, a(this).data()))), "string" == typeof b && f[b].apply(f, c)
    })
  }, a.fn.timepicker.defaults = {
    defaultTime: "current",
    disableFocus: !1,
    disableMousewheel: !1,
    isOpen: !1,
    minuteStep: 15,
    modalBackdrop: !1,
    secondStep: 15,
    showSeconds: !1,
    showInputs: !0,
    showMeridian: !0,
    template: "dropdown",
    appendWidgetTo: ".bootstrap-timepicker",
    showWidgetOnAddonClick: !0
  }, a.fn.timepicker.Constructor = d
}(jQuery, window, document);

/*!
 * Chosen v1.1.0 | (c) 2011-2013 by Harvest | MIT License
 * https://github.com/harvesthq/chosen/blob/master/LICENSE.md
 */
!function () {
  var a, AbstractChosen, Chosen, SelectParser, b, c = {}.hasOwnProperty, d = function (a, b) {
    function d() {
      this.constructor = a
    }

    for (var e in b)c.call(b, e) && (a[e] = b[e]);
    return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
  };
  SelectParser = function () {
    function SelectParser() {
      this.options_index = 0, this.parsed = []
    }

    return SelectParser.prototype.add_node = function (a) {
      return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a)
    }, SelectParser.prototype.add_group = function (a) {
      var b, c, d, e, f, g;
      for (b = this.parsed.length, this.parsed.push({
        array_index: b,
        group: !0,
        label: this.escapeExpression(a.label),
        children: 0,
        disabled: a.disabled
      }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++)c = f[d], g.push(this.add_option(c, b, a.disabled));
      return g
    }, SelectParser.prototype.add_option = function (a, b, c) {
      return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({
        array_index: this.parsed.length,
        options_index: this.options_index,
        value: a.value,
        text: a.text,
        html: a.innerHTML,
        selected: a.selected,
        disabled: c === !0 ? c : a.disabled,
        group_array_index: b,
        classes: a.className,
        style: a.style.cssText
      })) : this.parsed.push({
        array_index: this.parsed.length,
        options_index: this.options_index,
        empty: !0
      }), this.options_index += 1) : void 0
    }, SelectParser.prototype.escapeExpression = function (a) {
      var b, c;
      return null == a || a === !1 ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      }, c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c, function (a) {
        return b[a] || "&amp;"
      })) : a
    }, SelectParser
  }(), SelectParser.select_to_array = function (a) {
    var b, c, d, e, f;
    for (c = new SelectParser, f = a.childNodes, d = 0, e = f.length; e > d; d++)b = f[d], c.add_node(b);
    return c.parsed
  }, AbstractChosen = function () {
    function AbstractChosen(a, b) {
      this.form_field = a, this.options = null != b ? b : {}, AbstractChosen.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
    }

    return AbstractChosen.prototype.set_default_values = function () {
      var a = this;
      return this.click_test_action = function (b) {
        return a.test_active_click(b)
      }, this.activate_action = function (b) {
        return a.activate_field(b)
      }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0
    }, AbstractChosen.prototype.set_default_text = function () {
      return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text
    }, AbstractChosen.prototype.mouse_enter = function () {
      return this.mouse_on_container = !0
    }, AbstractChosen.prototype.mouse_leave = function () {
      return this.mouse_on_container = !1
    }, AbstractChosen.prototype.input_focus = function () {
      var a = this;
      if (this.is_multiple) {
        if (!this.active_field)return setTimeout(function () {
          return a.container_mousedown()
        }, 50)
      } else if (!this.active_field)return this.activate_field()
    }, AbstractChosen.prototype.input_blur = function () {
      var a = this;
      return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
        return a.blur_test()
      }, 100))
    }, AbstractChosen.prototype.results_option_build = function (a) {
      var b, c, d, e, f;
      for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++)c = f[d], b += c.group ? this.result_add_group(c) : this.result_add_option(c), (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(c.text));
      return b
    }, AbstractChosen.prototype.result_add_option = function (a) {
      var b, c;
      return a.search_match ? this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.style.cssText = a.style, c.setAttribute("data-option-array-index", a.array_index), c.innerHTML = a.search_text, this.outerHTML(c)) : "" : ""
    }, AbstractChosen.prototype.result_add_group = function (a) {
      var b;
      return a.search_match || a.group_match ? a.active_options > 0 ? (b = document.createElement("li"), b.className = "group-result", b.innerHTML = a.search_text, this.outerHTML(b)) : "" : ""
    }, AbstractChosen.prototype.results_update_field = function () {
      return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
    }, AbstractChosen.prototype.reset_single_select_options = function () {
      var a, b, c, d, e;
      for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a.selected ? e.push(a.selected = !1) : e.push(void 0);
      return e
    }, AbstractChosen.prototype.results_toggle = function () {
      return this.results_showing ? this.results_hide() : this.results_show()
    }, AbstractChosen.prototype.results_search = function () {
      return this.results_showing ? this.winnow_results() : this.results_show()
    }, AbstractChosen.prototype.winnow_results = function () {
      var a, b, c, d, e, f, g, h, i, j, k, l, m;
      for (this.no_results_clear(), e = 0, g = this.get_search_text(), a = g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), d = this.search_contains ? "" : "^", c = new RegExp(d + a, "i"), j = new RegExp(a, "i"), m = this.results_data, k = 0, l = m.length; l > k; k++)b = m[k], b.search_match = !1, f = null, this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (f = this.results_data[b.group_array_index], 0 === f.active_options && f.search_match && (e += 1), f.active_options += 1), (!b.group || this.group_search) && (b.search_text = b.group ? b.label : b.html, b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (e += 1), b.search_match ? (g.length && (h = b.search_text.search(j), i = b.search_text.substr(0, h + g.length) + "</em>" + b.search_text.substr(h + g.length), b.search_text = i.substr(0, h) + "<em>" + i.substr(h)), null != f && (f.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
      return this.result_clear_highlight(), 1 > e && g.length ? (this.update_results_content(""), this.no_results(g)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
    }, AbstractChosen.prototype.search_string_match = function (a, b) {
      var c, d, e, f;
      if (b.test(a))return !0;
      if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length))for (e = 0, f = d.length; f > e; e++)if (c = d[e], b.test(c))return !0
    }, AbstractChosen.prototype.choices_count = function () {
      var a, b, c, d;
      if (null != this.selected_option_count)return this.selected_option_count;
      for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++)a = d[b], a.selected && (this.selected_option_count += 1);
      return this.selected_option_count
    }, AbstractChosen.prototype.choices_click = function (a) {
      return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
    }, AbstractChosen.prototype.keyup_checker = function (a) {
      var b, c;
      switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), b) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0)return this.keydown_backstroke();
          if (!this.pending_backstroke)return this.result_clear_highlight(), this.results_search();
          break;
        case 13:
          if (a.preventDefault(), this.results_showing)return this.result_select(a);
          break;
        case 27:
          return this.results_showing && this.results_hide(), !0;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          return this.results_search()
      }
    }, AbstractChosen.prototype.clipboard_event_checker = function () {
      var a = this;
      return setTimeout(function () {
        return a.results_search()
      }, 50)
    }, AbstractChosen.prototype.container_width = function () {
      return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
    }, AbstractChosen.prototype.include_option_in_results = function (a) {
      return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0
    }, AbstractChosen.prototype.search_results_touchstart = function (a) {
      return this.touch_started = !0, this.search_results_mouseover(a)
    }, AbstractChosen.prototype.search_results_touchmove = function (a) {
      return this.touch_started = !1, this.search_results_mouseout(a)
    }, AbstractChosen.prototype.search_results_touchend = function (a) {
      return this.touch_started ? this.search_results_mouseup(a) : void 0
    }, AbstractChosen.prototype.outerHTML = function (a) {
      var b;
      return a.outerHTML ? a.outerHTML : (b = document.createElement("div"), b.appendChild(a), b.innerHTML)
    }, AbstractChosen.browser_is_supported = function () {
      return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
    }, AbstractChosen.default_multiple_text = "Select Some Options", AbstractChosen.default_single_text = "Select an Option", AbstractChosen.default_no_result_text = "No results match", AbstractChosen
  }(), a = jQuery, a.fn.extend({
    chosen: function (b) {
      return AbstractChosen.browser_is_supported() ? this.each(function () {
        var c, d;
        c = a(this), d = c.data("chosen"), "destroy" === b && d ? d.destroy() : d || c.data("chosen", new Chosen(this, b))
      }) : this
    }
  }), Chosen = function (c) {
    function Chosen() {
      return b = Chosen.__super__.constructor.apply(this, arguments)
    }

    return d(Chosen, c), Chosen.prototype.setup = function () {
      return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
    }, Chosen.prototype.set_up_html = function () {
      var b, c;
      return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className), this.is_rtl && b.push("chosen-rtl"), c = {
        "class": b.join(" "),
        style: "width: " + this.container_width() + ";",
        title: this.form_field.title
      }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div />", c), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {chosen: this})
    }, Chosen.prototype.register_observers = function () {
      var a = this;
      return this.container.bind("mousedown.chosen", function (b) {
        a.container_mousedown(b)
      }), this.container.bind("mouseup.chosen", function (b) {
        a.container_mouseup(b)
      }), this.container.bind("mouseenter.chosen", function (b) {
        a.mouse_enter(b)
      }), this.container.bind("mouseleave.chosen", function (b) {
        a.mouse_leave(b)
      }), this.search_results.bind("mouseup.chosen", function (b) {
        a.search_results_mouseup(b)
      }), this.search_results.bind("mouseover.chosen", function (b) {
        a.search_results_mouseover(b)
      }), this.search_results.bind("mouseout.chosen", function (b) {
        a.search_results_mouseout(b)
      }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (b) {
        a.search_results_mousewheel(b)
      }), this.search_results.bind("touchstart.chosen", function (b) {
        a.search_results_touchstart(b)
      }), this.search_results.bind("touchmove.chosen", function (b) {
        a.search_results_touchmove(b)
      }), this.search_results.bind("touchend.chosen", function (b) {
        a.search_results_touchend(b)
      }), this.form_field_jq.bind("chosen:updated.chosen", function (b) {
        a.results_update_field(b)
      }), this.form_field_jq.bind("chosen:activate.chosen", function (b) {
        a.activate_field(b)
      }), this.form_field_jq.bind("chosen:open.chosen", function (b) {
        a.container_mousedown(b)
      }), this.form_field_jq.bind("chosen:close.chosen", function (b) {
        a.input_blur(b)
      }), this.search_field.bind("blur.chosen", function (b) {
        a.input_blur(b)
      }), this.search_field.bind("keyup.chosen", function (b) {
        a.keyup_checker(b)
      }), this.search_field.bind("keydown.chosen", function (b) {
        a.keydown_checker(b)
      }), this.search_field.bind("focus.chosen", function (b) {
        a.input_focus(b)
      }), this.search_field.bind("cut.chosen", function (b) {
        a.clipboard_event_checker(b)
      }), this.search_field.bind("paste.chosen", function (b) {
        a.clipboard_event_checker(b)
      }), this.is_multiple ? this.search_choices.bind("click.chosen", function (b) {
        a.choices_click(b)
      }) : this.container.bind("click.chosen", function (a) {
        a.preventDefault()
      })
    }, Chosen.prototype.destroy = function () {
      return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
    }, Chosen.prototype.search_field_disabled = function () {
      return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
    }, Chosen.prototype.container_mousedown = function (b) {
      return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
    }, Chosen.prototype.container_mouseup = function (a) {
      return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a)
    }, Chosen.prototype.search_results_mousewheel = function (a) {
      var b;
      return a.originalEvent && (b = -a.originalEvent.wheelDelta || a.originalEvent.detail), null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0
    }, Chosen.prototype.blur_test = function () {
      return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
    }, Chosen.prototype.close_field = function () {
      return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
    }, Chosen.prototype.activate_field = function () {
      return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
    }, Chosen.prototype.test_active_click = function (b) {
      var c;
      return c = a(b.target).closest(".chosen-container"), c.length && this.container[0] === c[0] ? this.active_field = !0 : this.close_field()
    }, Chosen.prototype.results_build = function () {
      return this.parsing = !0, this.selected_option_count = null, this.results_data = SelectParser.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({first: !0})), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
    }, Chosen.prototype.result_do_highlight = function (a) {
      var b, c, d, e, f;
      if (a.length) {
        if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e)return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
        if (f > c)return this.search_results.scrollTop(c)
      }
    }, Chosen.prototype.result_clear_highlight = function () {
      return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
    }, Chosen.prototype.results_show = function () {
      return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {chosen: this}))
    }, Chosen.prototype.update_results_content = function (a) {
      return this.search_results.html(a)
    }, Chosen.prototype.results_hide = function () {
      return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {chosen: this})), this.results_showing = !1
    }, Chosen.prototype.set_tab_index = function () {
      var a;
      return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0
    }, Chosen.prototype.set_label_behavior = function () {
      var b = this;
      return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (a) {
        return b.is_multiple ? b.container_mousedown(a) : b.activate_field()
      }) : void 0
    }, Chosen.prototype.show_search_field_default = function () {
      return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
    }, Chosen.prototype.search_results_mouseup = function (b) {
      var c;
      return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0
    }, Chosen.prototype.search_results_mouseover = function (b) {
      var c;
      return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0
    }, Chosen.prototype.search_results_mouseout = function (b) {
      return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
    }, Chosen.prototype.choice_build = function (b) {
      var c, d, e = this;
      return c = a("<li />", {"class": "search-choice"}).html("<span>" + b.html + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", {
        "class": "search-choice-close",
        "data-option-array-index": b.array_index
      }), d.bind("click.chosen", function (a) {
        return e.choice_destroy_link_click(a)
      }), c.append(d)), this.search_container.before(c)
    }, Chosen.prototype.choice_destroy_link_click = function (b) {
      return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target))
    }, Chosen.prototype.choice_destroy = function (a) {
      return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0
    }, Chosen.prototype.results_reset = function () {
      return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
    }, Chosen.prototype.results_reset_cleanup = function () {
      return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
    }, Chosen.prototype.result_select = function (a) {
      var b, c;
      return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.is_multiple ? b.removeClass("active-result") : this.reset_single_select_options(), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(c.text), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {selected: this.form_field.options[c.options_index].value}), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0
    }, Chosen.prototype.single_set_selected_text = function (a) {
      return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(a)
    }, Chosen.prototype.result_deselect = function (a) {
      var b;
      return b = this.results_data[a], this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {deselected: this.form_field.options[b.options_index].value}), this.search_field_scale(), !0)
    }, Chosen.prototype.single_deselect_control_build = function () {
      return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
    }, Chosen.prototype.get_search_text = function () {
      return this.search_field.val() === this.default_text ? "" : a("<div/>").text(a.trim(this.search_field.val())).html()
    }, Chosen.prototype.winnow_results_set_highlight = function () {
      var a, b;
      return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = b.length ? b.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0
    }, Chosen.prototype.no_results = function (b) {
      var c;
      return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), c.find("span").first().html(b), this.search_results.append(c), this.form_field_jq.trigger("chosen:no_results", {chosen: this})
    }, Chosen.prototype.no_results_clear = function () {
      return this.search_results.find(".no-results").remove()
    }, Chosen.prototype.keydown_arrow = function () {
      var a;
      return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show()
    }, Chosen.prototype.keyup_arrow = function () {
      var a;
      return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
    }, Chosen.prototype.keydown_backstroke = function () {
      var a;
      return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
    }, Chosen.prototype.clear_backstroke = function () {
      return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
    }, Chosen.prototype.keydown_checker = function (a) {
      var b, c;
      switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          this.results_showing && !this.is_multiple && this.result_select(a), this.mouse_on_container = !1;
          break;
        case 13:
          a.preventDefault();
          break;
        case 38:
          a.preventDefault(), this.keyup_arrow();
          break;
        case 40:
          a.preventDefault(), this.keydown_arrow()
      }
    }, Chosen.prototype.search_field_scale = function () {
      var b, c, d, e, f, g, h, i, j;
      if (this.is_multiple) {
        for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], i = 0, j = g.length; j > i; i++)e = g[i], f += e + ":" + this.search_field.css(e) + ";";
        return b = a("<div />", {style: f}), b.text(this.search_field.val()), a("body").append(b), h = b.width() + 25, b.remove(), c = this.container.outerWidth(), h > c - 10 && (h = c - 10), this.search_field.css({width: h + "px"})
      }
    }, Chosen
  }(AbstractChosen)
}.call(this);

/*!
 * bootstrap3-wysihtml5-bower 2014-06-22 - https://github.com/Waxolunist/bootstrap3-wysihtml5-bower/tree/v0.2.11/dist
 */
var wysihtml5 = {
  version: "0.3.0",
  commands: {},
  dom: {},
  quirks: {},
  toolbar: {},
  lang: {},
  selection: {},
  views: {},
  INVISIBLE_SPACE: "﻿",
  EMPTY_FUNCTION: function () {
  },
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  BACKSPACE_KEY: 8,
  ENTER_KEY: 13,
  ESCAPE_KEY: 27,
  SPACE_KEY: 32,
  DELETE_KEY: 46
};
window.rangy = function () {
  function a(a, b) {
    var c = typeof a[b];
    return c == j || !(c != i || !a[b]) || "unknown" == c
  }

  function b(a, b) {
    return !(typeof a[b] != i || !a[b])
  }

  function c(a, b) {
    return typeof a[b] != k
  }

  function d(a) {
    return function (b, c) {
      for (var d = c.length; d--;)if (!a(b, c[d]))return !1;
      return !0
    }
  }

  function e(a) {
    return a && p(a, o) && r(a, n)
  }

  function f(a) {
    window.alert("Rangy not supported in your browser. Reason: " + a), s.initialized = !0, s.supported = !1
  }

  function g() {
    if (!s.initialized) {
      var c, d = !1, g = !1;
      for (a(document, "createRange") && (c = document.createRange(), p(c, m) && r(c, l) && (d = !0), c.detach()), (c = b(document, "body") ? document.body : document.getElementsByTagName("body")[0]) && a(c, "createTextRange") && (c = c.createTextRange(), e(c) && (g = !0)), !d && !g && f("Neither Range nor TextRange are implemented"), s.initialized = !0, s.features = {
        implementsDomRange: d,
        implementsTextRange: g
      }, d = u.concat(t), g = 0, c = d.length; c > g; ++g)try {
        d[g](s)
      } catch (h) {
        b(window, "console") && a(window.console, "log") && window.console.log("Init listener threw an exception. Continuing.", h)
      }
    }
  }

  function h(a) {
    this.name = a, this.supported = this.initialized = !1
  }

  var i = "object", j = "function", k = "undefined", l = "startContainer startOffset endContainer endOffset collapsed commonAncestorContainer START_TO_START START_TO_END END_TO_START END_TO_END".split(" "), m = "setStart setStartBefore setStartAfter setEnd setEndBefore setEndAfter collapse selectNode selectNodeContents compareBoundaryPoints deleteContents extractContents cloneContents insertNode surroundContents cloneRange toString detach".split(" "), n = "boundingHeight boundingLeft boundingTop boundingWidth htmlText text".split(" "), o = "collapse compareEndPoints duplicate getBookmark moveToBookmark moveToElementText parentElement pasteHTML select setEndPoint getBoundingClientRect".split(" "), p = d(a), q = d(b), r = d(c), s = {
    version: "1.2.2",
    initialized: !1,
    supported: !0,
    util: {
      isHostMethod: a,
      isHostObject: b,
      isHostProperty: c,
      areHostMethods: p,
      areHostObjects: q,
      areHostProperties: r,
      isTextRange: e
    },
    features: {},
    modules: {},
    config: {alertOnWarn: !1, preferTextRange: !1}
  };
  s.fail = f, s.warn = function (a) {
    a = "Rangy warning: " + a, s.config.alertOnWarn ? window.alert(a) : typeof window.console != k && typeof window.console.log != k && window.console.log(a)
  }, {}.hasOwnProperty ? s.util.extend = function (a, b) {
    for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c])
  } : f("hasOwnProperty not supported");
  var t = [], u = [];
  s.init = g, s.addInitListener = function (a) {
    s.initialized ? a(s) : t.push(a)
  };
  var v = [];
  s.addCreateMissingNativeApiListener = function (a) {
    v.push(a)
  }, s.createMissingNativeApi = function (a) {
    a = a || window, g();
    for (var b = 0, c = v.length; c > b; ++b)v[b](a)
  }, h.prototype.fail = function (a) {
    throw this.initialized = !0, this.supported = !1, Error("Module '" + this.name + "' failed to load: " + a)
  }, h.prototype.warn = function (a) {
    s.warn("Module " + this.name + ": " + a)
  }, h.prototype.createError = function (a) {
    return Error("Error in Rangy " + this.name + " module: " + a)
  }, s.createModule = function (a, b) {
    var c = new h(a);
    s.modules[a] = c, u.push(function (a) {
      b(a, c), c.initialized = !0, c.supported = !0
    })
  }, s.requireModules = function (a) {
    for (var b, c, d = 0, e = a.length; e > d; ++d) {
      if (c = a[d], b = s.modules[c], !(b && b instanceof h))throw Error("Module '" + c + "' not found");
      if (!b.supported)throw Error("Module '" + c + "' not supported")
    }
  };
  var w = !1, q = function () {
    w || (w = !0, s.initialized || g())
  };
  if (typeof window == k)f("No window found"); else {
    if (typeof document != k)return a(document, "addEventListener") && document.addEventListener("DOMContentLoaded", q, !1), a(window, "addEventListener") ? window.addEventListener("load", q, !1) : a(window, "attachEvent") ? window.attachEvent("onload", q) : f("Window does not have required addEventListener or attachEvent method"), s;
    f("No document found")
  }
}(), rangy.createModule("DomUtil", function (a, b) {
  function c(a) {
    for (var b = 0; a = a.previousSibling;)b++;
    return b
  }

  function d(a, b) {
    var c, d = [];
    for (c = a; c; c = c.parentNode)d.push(c);
    for (c = b; c; c = c.parentNode)if (p(d, c))return c;
    return null
  }

  function e(a, b, c) {
    for (c = c ? a : a.parentNode; c;) {
      if (a = c.parentNode, a === b)return c;
      c = a
    }
    return null
  }

  function f(a) {
    return a = a.nodeType, 3 == a || 4 == a || 8 == a
  }

  function g(a, b) {
    var c = b.nextSibling, d = b.parentNode;
    return c ? d.insertBefore(a, c) : d.appendChild(a), a
  }

  function h(a) {
    if (9 == a.nodeType)return a;
    if (typeof a.ownerDocument != m)return a.ownerDocument;
    if (typeof a.document != m)return a.document;
    if (a.parentNode)return h(a.parentNode);
    throw Error("getDocument: no document found for node")
  }

  function i(a) {
    return a ? f(a) ? '"' + a.data + '"' : 1 == a.nodeType ? "<" + a.nodeName + (a.id ? ' id="' + a.id + '"' : "") + ">[" + a.childNodes.length + "]" : a.nodeName : "[No node]"
  }

  function j(a) {
    this._next = this.root = a
  }

  function k(a, b) {
    this.node = a, this.offset = b
  }

  function l(a) {
    this.code = this[a], this.codeName = a, this.message = "DOMException: " + this.codeName
  }

  var m = "undefined", n = a.util;
  n.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"]) || b.fail("document missing a Node creation method"), n.isHostMethod(document, "getElementsByTagName") || b.fail("document missing getElementsByTagName method");
  var o = document.createElement("div");
  n.areHostMethods(o, ["insertBefore", "appendChild", "cloneNode"]) || b.fail("Incomplete Element implementation"), n.isHostProperty(o, "innerHTML") || b.fail("Element is missing innerHTML property"), o = document.createTextNode("test"), n.areHostMethods(o, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"]) || b.fail("Incomplete Text Node implementation");
  var p = function (a, b) {
    for (var c = a.length; c--;)if (a[c] === b)return !0;
    return !1
  };
  j.prototype = {
    _current: null, hasNext: function () {
      return !!this._next
    }, next: function () {
      var a, b = this._current = this._next;
      if (this._current) {
        if (a = b.firstChild, !a)for (a = null; b !== this.root && !(a = b.nextSibling);)b = b.parentNode;
        this._next = a
      }
      return this._current
    }, detach: function () {
      this._current = this._next = this.root = null
    }
  }, k.prototype = {
    equals: function (a) {
      return this.node === a.node & this.offset == a.offset
    }, inspect: function () {
      return "[DomPosition(" + i(this.node) + ":" + this.offset + ")]"
    }
  }, l.prototype = {
    INDEX_SIZE_ERR: 1,
    HIERARCHY_REQUEST_ERR: 3,
    WRONG_DOCUMENT_ERR: 4,
    NO_MODIFICATION_ALLOWED_ERR: 7,
    NOT_FOUND_ERR: 8,
    NOT_SUPPORTED_ERR: 9,
    INVALID_STATE_ERR: 11
  }, l.prototype.toString = function () {
    return this.message
  }, a.dom = {
    arrayContains: p, isHtmlNamespace: function (a) {
      var b;
      return typeof a.namespaceURI == m || null === (b = a.namespaceURI) || "http://www.w3.org/1999/xhtml" == b
    }, parentElement: function (a) {
      return a = a.parentNode, 1 == a.nodeType ? a : null
    }, getNodeIndex: c, getNodeLength: function (a) {
      var b;
      return f(a) ? a.length : (b = a.childNodes) ? b.length : 0
    }, getCommonAncestor: d, isAncestorOf: function (a, b, c) {
      for (b = c ? b : b.parentNode; b;) {
        if (b === a)return !0;
        b = b.parentNode
      }
      return !1
    }, getClosestAncestorIn: e, isCharacterDataNode: f, insertAfter: g, splitDataNode: function (a, b) {
      var c = a.cloneNode(!1);
      return c.deleteData(0, b), a.deleteData(b, a.length - b), g(c, a), c
    }, getDocument: h, getWindow: function (a) {
      if (a = h(a), typeof a.defaultView != m)return a.defaultView;
      if (typeof a.parentWindow != m)return a.parentWindow;
      throw Error("Cannot get a window object for node")
    }, getIframeWindow: function (a) {
      if (typeof a.contentWindow != m)return a.contentWindow;
      if (typeof a.contentDocument != m)return a.contentDocument.defaultView;
      throw Error("getIframeWindow: No Window object found for iframe element")
    }, getIframeDocument: function (a) {
      if (typeof a.contentDocument != m)return a.contentDocument;
      if (typeof a.contentWindow != m)return a.contentWindow.document;
      throw Error("getIframeWindow: No Document object found for iframe element")
    }, getBody: function (a) {
      return n.isHostObject(a, "body") ? a.body : a.getElementsByTagName("body")[0]
    }, getRootContainer: function (a) {
      for (var b; b = a.parentNode;)a = b;
      return a
    }, comparePoints: function (a, b, f, g) {
      var h;
      if (a == f)return b === g ? 0 : g > b ? -1 : 1;
      if (h = e(f, a, !0))return b <= c(h) ? -1 : 1;
      if (h = e(a, f, !0))return c(h) < g ? -1 : 1;
      if (b = d(a, f), a = a === b ? b : e(a, b, !0), f = f === b ? b : e(f, b, !0), a === f)throw Error("comparePoints got to case 4 and childA and childB are the same!");
      for (b = b.firstChild; b;) {
        if (b === a)return -1;
        if (b === f)return 1;
        b = b.nextSibling
      }
      throw Error("Should not be here!")
    }, inspectNode: i, fragmentFromNodeChildren: function (a) {
      for (var b, c = h(a).createDocumentFragment(); b = a.firstChild;)c.appendChild(b);
      return c
    }, createIterator: function (a) {
      return new j(a)
    }, DomPosition: k
  }, a.DOMException = l
}), rangy.createModule("DomRange", function (a) {
  function b(a, b) {
    return 3 != a.nodeType && (H.isAncestorOf(a, b.startContainer, !0) || H.isAncestorOf(a, b.endContainer, !0))
  }

  function c(a) {
    return H.getDocument(a.startContainer)
  }

  function d(a, b, c) {
    if (b = a._listeners[b])for (var d = 0, e = b.length; e > d; ++d)b[d].call(a, {target: a, args: c})
  }

  function e(a) {
    return new I(a.parentNode, H.getNodeIndex(a))
  }

  function f(a) {
    return new I(a.parentNode, H.getNodeIndex(a) + 1)
  }

  function g(a, b, c) {
    var d = 11 == a.nodeType ? a.firstChild : a;
    return H.isCharacterDataNode(b) ? c == b.length ? H.insertAfter(a, b) : b.parentNode.insertBefore(a, 0 == c ? b : H.splitDataNode(b, c)) : c >= b.childNodes.length ? b.appendChild(a) : b.insertBefore(a, b.childNodes[c]), d
  }

  function h(a) {
    for (var b, d, e = c(a.range).createDocumentFragment(); d = a.next();) {
      if (b = a.isPartiallySelectedSubtree(), d = d.cloneNode(!b), b && (b = a.getSubtreeIterator(), d.appendChild(h(b)), b.detach(!0)), 10 == d.nodeType)throw new J("HIERARCHY_REQUEST_ERR");
      e.appendChild(d)
    }
    return e
  }

  function i(a, b, c) {
    for (var d, e, c = c || {stop: !1}; d = a.next();)if (a.isPartiallySelectedSubtree()) {
      if (!1 === b(d)) {
        c.stop = !0;
        break
      }
      if (d = a.getSubtreeIterator(), i(d, b, c), d.detach(!0), c.stop)break
    } else for (d = H.createIterator(d); e = d.next();)if (!1 === b(e))return void(c.stop = !0)
  }

  function j(a) {
    for (var b; a.next();)a.isPartiallySelectedSubtree() ? (b = a.getSubtreeIterator(), j(b), b.detach(!0)) : a.remove()
  }

  function k(a) {
    for (var b, d, e = c(a.range).createDocumentFragment(); b = a.next();) {
      if (a.isPartiallySelectedSubtree() ? (b = b.cloneNode(!1), d = a.getSubtreeIterator(), b.appendChild(k(d)), d.detach(!0)) : a.remove(), 10 == b.nodeType)throw new J("HIERARCHY_REQUEST_ERR");
      e.appendChild(b)
    }
    return e
  }

  function l(a, b, c) {
    var d, e = !(!b || !b.length), f = !!c;
    e && (d = RegExp("^(" + b.join("|") + ")$"));
    var g = [];
    return i(new n(a, !1), function (a) {
      (!e || d.test(a.nodeType)) && (!f || c(a)) && g.push(a)
    }), g
  }

  function m(a) {
    return "[" + ("undefined" == typeof a.getName ? "Range" : a.getName()) + "(" + H.inspectNode(a.startContainer) + ":" + a.startOffset + ", " + H.inspectNode(a.endContainer) + ":" + a.endOffset + ")]"
  }

  function n(a, b) {
    if (this.range = a, this.clonePartiallySelectedTextNodes = b, !a.collapsed) {
      this.sc = a.startContainer, this.so = a.startOffset, this.ec = a.endContainer, this.eo = a.endOffset;
      var c = a.commonAncestorContainer;
      this.sc === this.ec && H.isCharacterDataNode(this.sc) ? (this.isSingleCharacterDataNode = !0, this._first = this._last = this._next = this.sc) : (this._first = this._next = this.sc !== c || H.isCharacterDataNode(this.sc) ? H.getClosestAncestorIn(this.sc, c, !0) : this.sc.childNodes[this.so], this._last = this.ec !== c || H.isCharacterDataNode(this.ec) ? H.getClosestAncestorIn(this.ec, c, !0) : this.ec.childNodes[this.eo - 1])
    }
  }

  function o(a) {
    this.code = this[a], this.codeName = a, this.message = "RangeException: " + this.codeName
  }

  function p(a, b, c) {
    this.nodes = l(a, b, c), this._next = this.nodes[0], this._position = 0
  }

  function q(a) {
    return function (b, c) {
      for (var d, e = c ? b : b.parentNode; e;) {
        if (d = e.nodeType, H.arrayContains(a, d))return e;
        e = e.parentNode
      }
      return null
    }
  }

  function r(a, b) {
    if (R(a, b))throw new o("INVALID_NODE_TYPE_ERR")
  }

  function s(a) {
    if (!a.startContainer)throw new J("INVALID_STATE_ERR")
  }

  function t(a, b) {
    if (!H.arrayContains(b, a.nodeType))throw new o("INVALID_NODE_TYPE_ERR")
  }

  function u(a, b) {
    if (0 > b || b > (H.isCharacterDataNode(a) ? a.length : a.childNodes.length))throw new J("INDEX_SIZE_ERR")
  }

  function v(a, b) {
    if (P(a, !0) !== P(b, !0))throw new J("WRONG_DOCUMENT_ERR")
  }

  function w(a) {
    if (Q(a, !0))throw new J("NO_MODIFICATION_ALLOWED_ERR")
  }

  function x(a, b) {
    if (!a)throw new J(b)
  }

  function y(a) {
    if (s(a), !((H.arrayContains(L, a.startContainer.nodeType) || P(a.startContainer, !0)) && (H.arrayContains(L, a.endContainer.nodeType) || P(a.endContainer, !0)) && a.startOffset <= (H.isCharacterDataNode(a.startContainer) ? a.startContainer.length : a.startContainer.childNodes.length) && a.endOffset <= (H.isCharacterDataNode(a.endContainer) ? a.endContainer.length : a.endContainer.childNodes.length)))throw Error("Range error: Range is no longer valid after DOM mutation (" + a.inspect() + ")")
  }

  function z() {
  }

  function A(a) {
    a.START_TO_START = W, a.START_TO_END = X, a.END_TO_END = Y, a.END_TO_START = Z, a.NODE_BEFORE = $, a.NODE_AFTER = _, a.NODE_BEFORE_AND_AFTER = ab, a.NODE_INSIDE = bb
  }

  function B(a) {
    A(a), A(a.prototype)
  }

  function C(a, b) {
    return function () {
      y(this);
      var c = this.startContainer, d = this.startOffset, e = this.commonAncestorContainer, g = new n(this, !0);
      return c !== e && (c = H.getClosestAncestorIn(c, e, !0), d = f(c), c = d.node, d = d.offset), i(g, w), g.reset(), e = a(g), g.detach(), b(this, c, d, c, d), e
    }
  }

  function D(c, d, g) {
    function h(a, b) {
      return function (c) {
        s(this), t(c, K), t(O(c), L), c = (a ? e : f)(c), (b ? i : l)(this, c.node, c.offset)
      }
    }

    function i(a, b, c) {
      var e = a.endContainer, f = a.endOffset;
      (b !== a.startContainer || c !== a.startOffset) && ((O(b) != O(e) || 1 == H.comparePoints(b, c, e, f)) && (e = b, f = c), d(a, b, c, e, f))
    }

    function l(a, b, c) {
      var e = a.startContainer, f = a.startOffset;
      (b !== a.endContainer || c !== a.endOffset) && ((O(b) != O(e) || -1 == H.comparePoints(b, c, e, f)) && (e = b, f = c), d(a, e, f, b, c))
    }

    c.prototype = new z, a.util.extend(c.prototype, {
      setStart: function (a, b) {
        s(this), r(a, !0), u(a, b), i(this, a, b)
      },
      setEnd: function (a, b) {
        s(this), r(a, !0), u(a, b), l(this, a, b)
      },
      setStartBefore: h(!0, !0),
      setStartAfter: h(!1, !0),
      setEndBefore: h(!0, !1),
      setEndAfter: h(!1, !1),
      collapse: function (a) {
        y(this), a ? d(this, this.startContainer, this.startOffset, this.startContainer, this.startOffset) : d(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset)
      },
      selectNodeContents: function (a) {
        s(this), r(a, !0), d(this, a, 0, a, H.getNodeLength(a))
      },
      selectNode: function (a) {
        s(this), r(a, !1), t(a, K);
        var b = e(a), a = f(a);
        d(this, b.node, b.offset, a.node, a.offset)
      },
      extractContents: C(k, d),
      deleteContents: C(j, d),
      canSurroundContents: function () {
        y(this), w(this.startContainer), w(this.endContainer);
        var a = new n(this, !0), c = a._first && b(a._first, this) || a._last && b(a._last, this);
        return a.detach(), !c
      },
      detach: function () {
        g(this)
      },
      splitBoundaries: function () {
        y(this);
        var a = this.startContainer, b = this.startOffset, c = this.endContainer, e = this.endOffset, f = a === c;
        H.isCharacterDataNode(c) && e > 0 && e < c.length && H.splitDataNode(c, e), H.isCharacterDataNode(a) && b > 0 && b < a.length && (a = H.splitDataNode(a, b), f ? (e -= b, c = a) : c == a.parentNode && e >= H.getNodeIndex(a) && e++, b = 0), d(this, a, b, c, e)
      },
      normalizeBoundaries: function () {
        y(this);
        var a = this.startContainer, b = this.startOffset, c = this.endContainer, e = this.endOffset, f = function (a) {
          var b = a.nextSibling;
          b && b.nodeType == a.nodeType && (c = a, e = a.length, a.appendData(b.data), b.parentNode.removeChild(b))
        }, g = function (d) {
          var f = d.previousSibling;
          if (f && f.nodeType == d.nodeType) {
            a = d;
            var g = d.length;
            b = f.length, d.insertData(0, f.data), f.parentNode.removeChild(f), a == c ? (e += b, c = a) : c == d.parentNode && (f = H.getNodeIndex(d), e == f ? (c = d, e = g) : e > f && e--)
          }
        }, h = !0;
        H.isCharacterDataNode(c) ? c.length == e && f(c) : (e > 0 && (h = c.childNodes[e - 1]) && H.isCharacterDataNode(h) && f(h), h = !this.collapsed), h ? H.isCharacterDataNode(a) ? 0 == b && g(a) : b < a.childNodes.length && (f = a.childNodes[b]) && H.isCharacterDataNode(f) && g(f) : (a = c, b = e), d(this, a, b, c, e)
      },
      collapseToPoint: function (a, b) {
        s(this), r(a, !0), u(a, b), (a !== this.startContainer || b !== this.startOffset || a !== this.endContainer || b !== this.endOffset) && d(this, a, b, a, b)
      }
    }), B(c)
  }

  function E(a) {
    a.collapsed = a.startContainer === a.endContainer && a.startOffset === a.endOffset, a.commonAncestorContainer = a.collapsed ? a.startContainer : H.getCommonAncestor(a.startContainer, a.endContainer)
  }

  function F(a, b, c, e, f) {
    var g = a.startContainer !== b || a.startOffset !== c, h = a.endContainer !== e || a.endOffset !== f;
    a.startContainer = b, a.startOffset = c, a.endContainer = e, a.endOffset = f, E(a), d(a, "boundarychange", {
      startMoved: g,
      endMoved: h
    })
  }

  function G(a) {
    this.startContainer = a, this.startOffset = 0, this.endContainer = a, this.endOffset = 0, this._listeners = {
      boundarychange: [],
      detach: []
    }, E(this)
  }

  a.requireModules(["DomUtil"]);
  var H = a.dom, I = H.DomPosition, J = a.DOMException;
  n.prototype = {
    _current: null,
    _next: null,
    _first: null,
    _last: null,
    isSingleCharacterDataNode: !1,
    reset: function () {
      this._current = null, this._next = this._first
    },
    hasNext: function () {
      return !!this._next
    },
    next: function () {
      var a = this._current = this._next;
      return a && (this._next = a !== this._last ? a.nextSibling : null, H.isCharacterDataNode(a) && this.clonePartiallySelectedTextNodes && (a === this.ec && (a = a.cloneNode(!0)).deleteData(this.eo, a.length - this.eo), this._current === this.sc && (a = a.cloneNode(!0)).deleteData(0, this.so))), a
    },
    remove: function () {
      var a, b, c = this._current;
      !H.isCharacterDataNode(c) || c !== this.sc && c !== this.ec ? c.parentNode && c.parentNode.removeChild(c) : (a = c === this.sc ? this.so : 0, b = c === this.ec ? this.eo : c.length, a != b && c.deleteData(a, b - a))
    },
    isPartiallySelectedSubtree: function () {
      return b(this._current, this.range)
    },
    getSubtreeIterator: function () {
      var a;
      if (this.isSingleCharacterDataNode)a = this.range.cloneRange(), a.collapse(); else {
        a = new G(c(this.range));
        var b = this._current, d = b, e = 0, f = b, g = H.getNodeLength(b);
        H.isAncestorOf(b, this.sc, !0) && (d = this.sc, e = this.so), H.isAncestorOf(b, this.ec, !0) && (f = this.ec, g = this.eo), F(a, d, e, f, g)
      }
      return new n(a, this.clonePartiallySelectedTextNodes)
    },
    detach: function (a) {
      a && this.range.detach(), this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null
    }
  }, o.prototype = {BAD_BOUNDARYPOINTS_ERR: 1, INVALID_NODE_TYPE_ERR: 2}, o.prototype.toString = function () {
    return this.message
  }, p.prototype = {
    _current: null, hasNext: function () {
      return !!this._next
    }, next: function () {
      return this._current = this._next, this._next = this.nodes[++this._position], this._current
    }, detach: function () {
      this._current = this._next = this.nodes = null
    }
  };
  var K = [1, 3, 4, 5, 7, 8, 10], L = [2, 9, 11], M = [1, 3, 4, 5, 7, 8, 10, 11], N = [1, 3, 4, 5, 7, 8], O = H.getRootContainer, P = q([9, 11]), Q = q([5, 6, 10, 12]), R = q([6, 10, 12]), S = document.createElement("style"), T = !1;
  try {
    S.innerHTML = "<b>x</b>", T = 3 == S.firstChild.nodeType
  } catch (U) {
  }
  a.features.htmlParsingConforms = T;
  var V = "startContainer startOffset endContainer endOffset collapsed commonAncestorContainer".split(" "), W = 0, X = 1, Y = 2, Z = 3, $ = 0, _ = 1, ab = 2, bb = 3;
  z.prototype = {
    attachListener: function (a, b) {
      this._listeners[a].push(b)
    }, compareBoundaryPoints: function (a, b) {
      y(this), v(this.startContainer, b.startContainer);
      var c = a == Z || a == W ? "start" : "end", d = a == X || a == W ? "start" : "end";
      return H.comparePoints(this[c + "Container"], this[c + "Offset"], b[d + "Container"], b[d + "Offset"])
    }, insertNode: function (a) {
      if (y(this), t(a, M), w(this.startContainer), H.isAncestorOf(a, this.startContainer, !0))throw new J("HIERARCHY_REQUEST_ERR");
      this.setStartBefore(g(a, this.startContainer, this.startOffset))
    }, cloneContents: function () {
      y(this);
      var a, b;
      return this.collapsed ? c(this).createDocumentFragment() : this.startContainer === this.endContainer && H.isCharacterDataNode(this.startContainer) ? (a = this.startContainer.cloneNode(!0), a.data = a.data.slice(this.startOffset, this.endOffset), b = c(this).createDocumentFragment(), b.appendChild(a), b) : (b = new n(this, !0), a = h(b), b.detach(), a)
    }, canSurroundContents: function () {
      y(this), w(this.startContainer), w(this.endContainer);
      var a = new n(this, !0), c = a._first && b(a._first, this) || a._last && b(a._last, this);
      return a.detach(), !c
    }, surroundContents: function (a) {
      if (t(a, N), !this.canSurroundContents())throw new o("BAD_BOUNDARYPOINTS_ERR");
      var b = this.extractContents();
      if (a.hasChildNodes())for (; a.lastChild;)a.removeChild(a.lastChild);
      g(a, this.startContainer, this.startOffset), a.appendChild(b), this.selectNode(a)
    }, cloneRange: function () {
      y(this);
      for (var a, b = new G(c(this)), d = V.length; d--;)a = V[d], b[a] = this[a];
      return b
    }, toString: function () {
      y(this);
      var a = this.startContainer;
      if (a === this.endContainer && H.isCharacterDataNode(a))return 3 == a.nodeType || 4 == a.nodeType ? a.data.slice(this.startOffset, this.endOffset) : "";
      var b = [], a = new n(this, !0);
      return i(a, function (a) {
        (3 == a.nodeType || 4 == a.nodeType) && b.push(a.data)
      }), a.detach(), b.join("")
    }, compareNode: function (a) {
      y(this);
      var b = a.parentNode, c = H.getNodeIndex(a);
      if (!b)throw new J("NOT_FOUND_ERR");
      return a = this.comparePoint(b, c), b = this.comparePoint(b, c + 1), 0 > a ? b > 0 ? ab : $ : b > 0 ? _ : bb
    }, comparePoint: function (a, b) {
      return y(this), x(a, "HIERARCHY_REQUEST_ERR"), v(a, this.startContainer), 0 > H.comparePoints(a, b, this.startContainer, this.startOffset) ? -1 : 0 < H.comparePoints(a, b, this.endContainer, this.endOffset) ? 1 : 0
    }, createContextualFragment: T ? function (a) {
      var b = this.startContainer, c = H.getDocument(b);
      if (!b)throw new J("INVALID_STATE_ERR");
      var d = null;
      return 1 == b.nodeType ? d = b : H.isCharacterDataNode(b) && (d = H.parentElement(b)), d = null === d || "HTML" == d.nodeName && H.isHtmlNamespace(H.getDocument(d).documentElement) && H.isHtmlNamespace(d) ? c.createElement("body") : d.cloneNode(!1), d.innerHTML = a, H.fragmentFromNodeChildren(d)
    } : function (a) {
      s(this);
      var b = c(this).createElement("body");
      return b.innerHTML = a, H.fragmentFromNodeChildren(b)
    }, toHtml: function () {
      y(this);
      var a = c(this).createElement("div");
      return a.appendChild(this.cloneContents()), a.innerHTML
    }, intersectsNode: function (a, b) {
      if (y(this), x(a, "NOT_FOUND_ERR"), H.getDocument(a) !== c(this))return !1;
      var d = a.parentNode, e = H.getNodeIndex(a);
      x(d, "NOT_FOUND_ERR");
      var f = H.comparePoints(d, e, this.endContainer, this.endOffset), d = H.comparePoints(d, e + 1, this.startContainer, this.startOffset);
      return b ? 0 >= f && d >= 0 : 0 > f && d > 0
    }, isPointInRange: function (a, b) {
      return y(this), x(a, "HIERARCHY_REQUEST_ERR"), v(a, this.startContainer), 0 <= H.comparePoints(a, b, this.startContainer, this.startOffset) && 0 >= H.comparePoints(a, b, this.endContainer, this.endOffset)
    }, intersectsRange: function (a, b) {
      if (y(this), c(a) != c(this))throw new J("WRONG_DOCUMENT_ERR");
      var d = H.comparePoints(this.startContainer, this.startOffset, a.endContainer, a.endOffset), e = H.comparePoints(this.endContainer, this.endOffset, a.startContainer, a.startOffset);
      return b ? 0 >= d && e >= 0 : 0 > d && e > 0
    }, intersection: function (a) {
      if (this.intersectsRange(a)) {
        var b = H.comparePoints(this.startContainer, this.startOffset, a.startContainer, a.startOffset), c = H.comparePoints(this.endContainer, this.endOffset, a.endContainer, a.endOffset), d = this.cloneRange();
        return -1 == b && d.setStart(a.startContainer, a.startOffset), 1 == c && d.setEnd(a.endContainer, a.endOffset), d
      }
      return null
    }, union: function (a) {
      if (this.intersectsRange(a, !0)) {
        var b = this.cloneRange();
        return -1 == H.comparePoints(a.startContainer, a.startOffset, this.startContainer, this.startOffset) && b.setStart(a.startContainer, a.startOffset), 1 == H.comparePoints(a.endContainer, a.endOffset, this.endContainer, this.endOffset) && b.setEnd(a.endContainer, a.endOffset), b
      }
      throw new o("Ranges do not intersect")
    }, containsNode: function (a, b) {
      return b ? this.intersectsNode(a, !1) : this.compareNode(a) == bb
    }, containsNodeContents: function (a) {
      return 0 <= this.comparePoint(a, 0) && 0 >= this.comparePoint(a, H.getNodeLength(a))
    }, containsRange: function (a) {
      return this.intersection(a).equals(a)
    }, containsNodeText: function (a) {
      var b = this.cloneRange();
      b.selectNode(a);
      var c = b.getNodes([3]);
      return 0 < c.length ? (b.setStart(c[0], 0), a = c.pop(), b.setEnd(a, a.length), a = this.containsRange(b), b.detach(), a) : this.containsNodeContents(a)
    }, createNodeIterator: function (a, b) {
      return y(this), new p(this, a, b)
    }, getNodes: function (a, b) {
      return y(this), l(this, a, b)
    }, getDocument: function () {
      return c(this)
    }, collapseBefore: function (a) {
      s(this), this.setEndBefore(a), this.collapse(!1)
    }, collapseAfter: function (a) {
      s(this), this.setStartAfter(a), this.collapse(!0)
    }, getName: function () {
      return "DomRange"
    }, equals: function (a) {
      return G.rangesEqual(this, a)
    }, inspect: function () {
      return m(this)
    }
  }, D(G, F, function (a) {
    s(a), a.startContainer = a.startOffset = a.endContainer = a.endOffset = null, a.collapsed = a.commonAncestorContainer = null, d(a, "detach", null), a._listeners = null
  }), a.rangePrototype = z.prototype, G.rangeProperties = V, G.RangeIterator = n, G.copyComparisonConstants = B, G.createPrototypeRange = D, G.inspect = m, G.getRangeDocument = c, G.rangesEqual = function (a, b) {
    return a.startContainer === b.startContainer && a.startOffset === b.startOffset && a.endContainer === b.endContainer && a.endOffset === b.endOffset
  }, a.DomRange = G, a.RangeException = o
}), rangy.createModule("WrappedRange", function (a) {
  function b(a, b, c, d) {
    var g = a.duplicate();
    g.collapse(c);
    var h = g.parentElement();
    if (e.isAncestorOf(b, h, !0) || (h = b), !h.canHaveHTML)return new f(h.parentNode, e.getNodeIndex(h));
    var i, b = e.getDocument(h).createElement("span"), j = c ? "StartToStart" : "StartToEnd";
    do h.insertBefore(b, b.previousSibling), g.moveToElementText(b); while (0 < (i = g.compareEndPoints(j, a)) && b.previousSibling);
    if (j = b.nextSibling, -1 == i && j && e.isCharacterDataNode(j)) {
      if (g.setEndPoint(c ? "EndToStart" : "EndToEnd", a), /[\r\n]/.test(j.data))for (h = g.duplicate(), c = h.text.replace(/\r\n/g, "\r").length, c = h.moveStart("character", c); -1 == h.compareEndPoints("StartToEnd", h);)c++, h.moveStart("character", 1); else c = g.text.length;
      h = new f(j, c)
    } else j = (d || !c) && b.previousSibling, h = (c = (d || c) && b.nextSibling) && e.isCharacterDataNode(c) ? new f(c, 0) : j && e.isCharacterDataNode(j) ? new f(j, j.length) : new f(h, e.getNodeIndex(b));
    return b.parentNode.removeChild(b), h
  }

  function c(a, b) {
    var c, d, f = a.offset, g = e.getDocument(a.node), h = g.body.createTextRange(), i = e.isCharacterDataNode(a.node);
    return i ? (c = a.node, d = c.parentNode) : (c = a.node.childNodes, c = f < c.length ? c[f] : null, d = a.node), g = g.createElement("span"), g.innerHTML = "&#feff;", c ? d.insertBefore(g, c) : d.appendChild(g), h.moveToElementText(g), h.collapse(!b), d.removeChild(g), i && h[b ? "moveStart" : "moveEnd"]("character", f), h
  }

  a.requireModules(["DomUtil", "DomRange"]);
  var d, e = a.dom, f = e.DomPosition, g = a.DomRange;
  if (!a.features.implementsDomRange || a.features.implementsTextRange && a.config.preferTextRange) {
    if (a.features.implementsTextRange) {
      d = function (a) {
        this.textRange = a, this.refresh()
      }, d.prototype = new g(document), d.prototype.refresh = function () {
        var a, c, d = this.textRange;
        a = d.parentElement();
        var f = d.duplicate();
        f.collapse(!0), c = f.parentElement(), f = d.duplicate(), f.collapse(!1), d = f.parentElement(), c = c == d ? c : e.getCommonAncestor(c, d), c = c == a ? c : e.getCommonAncestor(a, c), 0 == this.textRange.compareEndPoints("StartToEnd", this.textRange) ? c = a = b(this.textRange, c, !0, !0) : (a = b(this.textRange, c, !0, !1), c = b(this.textRange, c, !1, !1)), this.setStart(a.node, a.offset), this.setEnd(c.node, c.offset)
      }, g.copyComparisonConstants(d);
      var h = function () {
        return this
      }();
      "undefined" == typeof h.Range && (h.Range = d), a.createNativeRange = function (a) {
        return a = a || document, a.body.createTextRange()
      }
    }
  } else(function () {
    function b(a) {
      for (var b, c = h.length; c--;)b = h[c], a[b] = a.nativeRange[b]
    }

    var c, f, h = g.rangeProperties;
    d = function (a) {
      if (!a)throw Error("Range must be specified");
      this.nativeRange = a, b(this)
    }, g.createPrototypeRange(d, function (a, b, c, d, e) {
      var f = a.endContainer !== d || a.endOffset != e;
      (a.startContainer !== b || a.startOffset != c || f) && (a.setEnd(d, e), a.setStart(b, c))
    }, function (a) {
      a.nativeRange.detach(), a.detached = !0;
      for (var b, c = h.length; c--;)b = h[c], a[b] = null
    }), c = d.prototype, c.selectNode = function (a) {
      this.nativeRange.selectNode(a), b(this)
    }, c.deleteContents = function () {
      this.nativeRange.deleteContents(), b(this)
    }, c.extractContents = function () {
      var a = this.nativeRange.extractContents();
      return b(this), a
    }, c.cloneContents = function () {
      return this.nativeRange.cloneContents()
    }, c.surroundContents = function (a) {
      this.nativeRange.surroundContents(a), b(this)
    }, c.collapse = function (a) {
      this.nativeRange.collapse(a), b(this)
    }, c.cloneRange = function () {
      return new d(this.nativeRange.cloneRange())
    }, c.refresh = function () {
      b(this)
    }, c.toString = function () {
      return this.nativeRange.toString()
    };
    var i = document.createTextNode("test");
    e.getBody(document).appendChild(i);
    var j = document.createRange();
    j.setStart(i, 0), j.setEnd(i, 0);
    try {
      j.setStart(i, 1), c.setStart = function (a, c) {
        this.nativeRange.setStart(a, c), b(this)
      }, c.setEnd = function (a, c) {
        this.nativeRange.setEnd(a, c), b(this)
      }, f = function (a) {
        return function (c) {
          this.nativeRange[a](c), b(this)
        }
      }
    } catch (k) {
      c.setStart = function (a, c) {
        try {
          this.nativeRange.setStart(a, c)
        } catch (d) {
          this.nativeRange.setEnd(a, c), this.nativeRange.setStart(a, c)
        }
        b(this)
      }, c.setEnd = function (a, c) {
        try {
          this.nativeRange.setEnd(a, c)
        } catch (d) {
          this.nativeRange.setStart(a, c), this.nativeRange.setEnd(a, c)
        }
        b(this)
      }, f = function (a, c) {
        return function (d) {
          try {
            this.nativeRange[a](d)
          } catch (e) {
            this.nativeRange[c](d), this.nativeRange[a](d)
          }
          b(this)
        }
      }
    }
    c.setStartBefore = f("setStartBefore", "setEndBefore"), c.setStartAfter = f("setStartAfter", "setEndAfter"), c.setEndBefore = f("setEndBefore", "setStartBefore"), c.setEndAfter = f("setEndAfter", "setStartAfter"), j.selectNodeContents(i), c.selectNodeContents = j.startContainer == i && j.endContainer == i && 0 == j.startOffset && j.endOffset == i.length ? function (a) {
      this.nativeRange.selectNodeContents(a), b(this)
    } : function (a) {
      this.setStart(a, 0), this.setEnd(a, g.getEndOffset(a))
    }, j.selectNodeContents(i), j.setEnd(i, 3), f = document.createRange(), f.selectNodeContents(i), f.setEnd(i, 4), f.setStart(i, 2), c.compareBoundaryPoints = -1 == j.compareBoundaryPoints(j.START_TO_END, f) & 1 == j.compareBoundaryPoints(j.END_TO_START, f) ? function (a, b) {
      return b = b.nativeRange || b, a == b.START_TO_END ? a = b.END_TO_START : a == b.END_TO_START && (a = b.START_TO_END), this.nativeRange.compareBoundaryPoints(a, b)
    } : function (a, b) {
      return this.nativeRange.compareBoundaryPoints(a, b.nativeRange || b)
    }, a.util.isHostMethod(j, "createContextualFragment") && (c.createContextualFragment = function (a) {
      return this.nativeRange.createContextualFragment(a)
    }), e.getBody(document).removeChild(i), j.detach(), f.detach()
  })(), a.createNativeRange = function (a) {
    return a = a || document, a.createRange()
  };
  a.features.implementsTextRange && (d.rangeToTextRange = function (a) {
    if (a.collapsed)return c(new f(a.startContainer, a.startOffset), !0);
    var b = c(new f(a.startContainer, a.startOffset), !0), d = c(new f(a.endContainer, a.endOffset), !1), a = e.getDocument(a.startContainer).body.createTextRange();
    return a.setEndPoint("StartToStart", b), a.setEndPoint("EndToEnd", d), a
  }), d.prototype.getName = function () {
    return "WrappedRange"
  }, a.WrappedRange = d, a.createRange = function (b) {
    return b = b || document, new d(a.createNativeRange(b))
  }, a.createRangyRange = function (a) {
    return a = a || document, new g(a)
  }, a.createIframeRange = function (b) {
    return a.createRange(e.getIframeDocument(b))
  }, a.createIframeRangyRange = function (b) {
    return a.createRangyRange(e.getIframeDocument(b))
  }, a.addCreateMissingNativeApiListener(function (b) {
    b = b.document, "undefined" == typeof b.createRange && (b.createRange = function () {
      return a.createRange(this)
    }), b = b = null
  })
}), rangy.createModule("WrappedSelection", function (a, b) {
  function c(a) {
    return (a || window).getSelection()
  }

  function d(a) {
    return (a || window).document.selection
  }

  function e(a, b, c) {
    var d = c ? "end" : "start", c = c ? "start" : "end";
    a.anchorNode = b[d + "Container"], a.anchorOffset = b[d + "Offset"], a.focusNode = b[c + "Container"], a.focusOffset = b[c + "Offset"]
  }

  function f(a) {
    a.anchorNode = a.focusNode = null, a.anchorOffset = a.focusOffset = 0, a.rangeCount = 0, a.isCollapsed = !0, a._ranges.length = 0
  }

  function g(b) {
    var c;
    return b instanceof t ? (c = b._selectionNativeRange, c || (c = a.createNativeRange(r.getDocument(b.startContainer)), c.setEnd(b.endContainer, b.endOffset), c.setStart(b.startContainer, b.startOffset), b._selectionNativeRange = c, b.attachListener("detach", function () {
      this._selectionNativeRange = null
    }))) : b instanceof u ? c = b.nativeRange : a.features.implementsDomRange && b instanceof r.getWindow(b.startContainer).Range && (c = b), c
  }

  function h(a) {
    var b, c = a.getNodes();
    a:if (c.length && 1 == c[0].nodeType) {
      b = 1;
      for (var d = c.length; d > b; ++b)if (!r.isAncestorOf(c[0], c[b])) {
        b = !1;
        break a
      }
      b = !0
    } else b = !1;
    if (!b)throw Error("getSingleElementFromRange: range " + a.inspect() + " did not consist of a single element");
    return c[0]
  }

  function i(a, b) {
    var c = new u(b);
    a._ranges = [c], e(a, c, !1), a.rangeCount = 1, a.isCollapsed = c.collapsed
  }

  function j(b) {
    if (b._ranges.length = 0, "None" == b.docSelection.type)f(b); else {
      var c = b.docSelection.createRange();
      if (c && "undefined" != typeof c.text)i(b, c); else {
        b.rangeCount = c.length;
        for (var d, g = r.getDocument(c.item(0)), h = 0; h < b.rangeCount; ++h)d = a.createRange(g), d.selectNode(c.item(h)), b._ranges.push(d);
        b.isCollapsed = 1 == b.rangeCount && b._ranges[0].collapsed, e(b, b._ranges[b.rangeCount - 1], !1)
      }
    }
  }

  function k(a, b) {
    for (var c = a.docSelection.createRange(), d = h(b), e = r.getDocument(c.item(0)), e = r.getBody(e).createControlRange(), f = 0, g = c.length; g > f; ++f)e.add(c.item(f));
    try {
      e.add(d)
    } catch (i) {
      throw Error("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")
    }
    e.select(), j(a)
  }

  function l(a, b, c) {
    this.nativeSelection = a, this.docSelection = b, this._ranges = [], this.win = c, this.refresh()
  }

  function m(a, b) {
    for (var c, d = r.getDocument(b[0].startContainer), d = r.getBody(d).createControlRange(), e = 0; rangeCount > e; ++e) {
      c = h(b[e]);
      try {
        d.add(c)
      } catch (f) {
        throw Error("setRanges(): Element within the one of the specified Ranges could not be added to control selection (does it have layout?)")
      }
    }
    d.select(), j(a)
  }

  function n(a, b) {
    if (a.anchorNode && r.getDocument(a.anchorNode) !== r.getDocument(b))throw new v("WRONG_DOCUMENT_ERR")
  }

  function o(a) {
    var b = [], c = new w(a.anchorNode, a.anchorOffset), d = new w(a.focusNode, a.focusOffset), e = "function" == typeof a.getName ? a.getName() : "Selection";
    if ("undefined" != typeof a.rangeCount)for (var f = 0, g = a.rangeCount; g > f; ++f)b[f] = t.inspect(a.getRangeAt(f));
    return "[" + e + "(Ranges: " + b.join(", ") + ")(anchor: " + c.inspect() + ", focus: " + d.inspect() + "]"
  }

  a.requireModules(["DomUtil", "DomRange", "WrappedRange"]), a.config.checkSelectionRanges = !0;
  var p, q, r = a.dom, s = a.util, t = a.DomRange, u = a.WrappedRange, v = a.DOMException, w = r.DomPosition, x = a.util.isHostMethod(window, "getSelection"), y = a.util.isHostObject(document, "selection"), z = y && (!x || a.config.preferTextRange);
  z ? (p = d, a.isSelectionValid = function (a) {
    var a = (a || window).document, b = a.selection;
    return "None" != b.type || r.getDocument(b.createRange().parentElement()) == a
  }) : x ? (p = c, a.isSelectionValid = function () {
    return !0
  }) : b.fail("Neither document.selection or window.getSelection() detected."), a.getNativeSelection = p;
  var x = p(), A = a.createNativeRange(document), B = r.getBody(document), C = s.areHostObjects(x, s.areHostProperties(x, ["anchorOffset", "focusOffset"]));
  a.features.selectionHasAnchorAndFocus = C;
  var D = s.isHostMethod(x, "extend");
  a.features.selectionHasExtend = D;
  var E = "number" == typeof x.rangeCount;
  a.features.selectionHasRangeCount = E;
  var F = !1, G = !0;
  s.areHostMethods(x, ["addRange", "getRangeAt", "removeAllRanges"]) && "number" == typeof x.rangeCount && a.features.implementsDomRange && function () {
    var a = document.createElement("iframe");
    B.appendChild(a);
    var b = r.getIframeDocument(a);
    b.open(), b.write("<html><head></head><body>12</body></html>"), b.close();
    var c = r.getIframeWindow(a).getSelection(), d = b.documentElement.lastChild.firstChild, b = b.createRange();
    b.setStart(d, 1), b.collapse(!0), c.addRange(b), G = 1 == c.rangeCount, c.removeAllRanges();
    var e = b.cloneRange();
    b.setStart(d, 0), e.setEnd(d, 2), c.addRange(b), c.addRange(e), F = 2 == c.rangeCount, b.detach(), e.detach(), B.removeChild(a)
  }(), a.features.selectionSupportsMultipleRanges = F, a.features.collapsedNonEditableSelectionsSupported = G;
  var H, I = !1;
  B && s.isHostMethod(B, "createControlRange") && (H = B.createControlRange(), s.areHostProperties(H, ["item", "add"]) && (I = !0)), a.features.implementsControlRange = I, q = C ? function (a) {
    return a.anchorNode === a.focusNode && a.anchorOffset === a.focusOffset
  } : function (a) {
    return a.rangeCount ? a.getRangeAt(a.rangeCount - 1).collapsed : !1
  };
  var J;
  if (s.isHostMethod(x, "getRangeAt") ? J = function (a, b) {
      try {
        return a.getRangeAt(b)
      } catch (c) {
        return null
      }
    } : C && (J = function (b) {
      var c = r.getDocument(b.anchorNode), c = a.createRange(c);
      return c.setStart(b.anchorNode, b.anchorOffset), c.setEnd(b.focusNode, b.focusOffset), c.collapsed !== this.isCollapsed && (c.setStart(b.focusNode, b.focusOffset), c.setEnd(b.anchorNode, b.anchorOffset)), c
    }), a.getSelection = function (a) {
      var a = a || window, b = a._rangySelection, c = p(a), e = y ? d(a) : null;
      return b ? (b.nativeSelection = c, b.docSelection = e, b.refresh(a)) : (b = new l(c, e, a), a._rangySelection = b), b
    }, a.getIframeSelection = function (b) {
      return a.getSelection(r.getIframeWindow(b))
    }, H = l.prototype, !z && C && s.areHostMethods(x, ["removeAllRanges", "addRange"])) {
    H.removeAllRanges = function () {
      this.nativeSelection.removeAllRanges(), f(this)
    };
    var K = function (b, c) {
      var d = t.getRangeDocument(c), d = a.createRange(d);
      d.collapseToPoint(c.endContainer, c.endOffset), b.nativeSelection.addRange(g(d)), b.nativeSelection.extend(c.startContainer, c.startOffset), b.refresh()
    };
    H.addRange = E ? function (b, c) {
      if (I && y && "Control" == this.docSelection.type)k(this, b); else if (c && D)K(this, b); else {
        var d;
        F ? d = this.rangeCount : (this.removeAllRanges(), d = 0), this.nativeSelection.addRange(g(b)), this.rangeCount = this.nativeSelection.rangeCount, this.rangeCount == d + 1 ? (a.config.checkSelectionRanges && (d = J(this.nativeSelection, this.rangeCount - 1)) && !t.rangesEqual(d, b) && (b = new u(d)), this._ranges[this.rangeCount - 1] = b, e(this, b, N(this.nativeSelection)), this.isCollapsed = q(this)) : this.refresh()
      }
    } : function (a, b) {
      b && D ? K(this, a) : (this.nativeSelection.addRange(g(a)), this.refresh())
    }, H.setRanges = function (a) {
      if (I && a.length > 1)m(this, a); else {
        this.removeAllRanges();
        for (var b = 0, c = a.length; c > b; ++b)this.addRange(a[b])
      }
    }
  } else {
    if (!(s.isHostMethod(x, "empty") && s.isHostMethod(A, "select") && I && z))return b.fail("No means of selecting a Range or TextRange was found"), !1;
    H.removeAllRanges = function () {
      try {
        if (this.docSelection.empty(), "None" != this.docSelection.type) {
          var a;
          if (this.anchorNode)a = r.getDocument(this.anchorNode); else if ("Control" == this.docSelection.type) {
            var b = this.docSelection.createRange();
            b.length && (a = r.getDocument(b.item(0)).body.createTextRange())
          }
          a && (a.body.createTextRange().select(), this.docSelection.empty())
        }
      } catch (c) {
      }
      f(this)
    }, H.addRange = function (a) {
      "Control" == this.docSelection.type ? k(this, a) : (u.rangeToTextRange(a).select(), this._ranges[0] = a, this.rangeCount = 1, this.isCollapsed = this._ranges[0].collapsed, e(this, a, !1))
    }, H.setRanges = function (a) {
      this.removeAllRanges();
      var b = a.length;
      b > 1 ? m(this, a) : b && this.addRange(a[0])
    }
  }
  H.getRangeAt = function (a) {
    if (0 > a || a >= this.rangeCount)throw new v("INDEX_SIZE_ERR");
    return this._ranges[a]
  };
  var L;
  if (z)L = function (b) {
    var c;
    a.isSelectionValid(b.win) ? c = b.docSelection.createRange() : (c = r.getBody(b.win.document).createTextRange(), c.collapse(!0)), "Control" == b.docSelection.type ? j(b) : c && "undefined" != typeof c.text ? i(b, c) : f(b)
  }; else if (s.isHostMethod(x, "getRangeAt") && "number" == typeof x.rangeCount)L = function (b) {
    if (I && y && "Control" == b.docSelection.type)j(b); else if (b._ranges.length = b.rangeCount = b.nativeSelection.rangeCount, b.rangeCount) {
      for (var c = 0, d = b.rangeCount; d > c; ++c)b._ranges[c] = new a.WrappedRange(b.nativeSelection.getRangeAt(c));
      e(b, b._ranges[b.rangeCount - 1], N(b.nativeSelection)), b.isCollapsed = q(b)
    } else f(b)
  }; else {
    if (!C || "boolean" != typeof x.isCollapsed || "boolean" != typeof A.collapsed || !a.features.implementsDomRange)return b.fail("No means of obtaining a Range or TextRange from the user's selection was found"), !1;
    L = function (a) {
      var b;
      b = a.nativeSelection, b.anchorNode ? (b = J(b, 0), a._ranges = [b], a.rangeCount = 1, b = a.nativeSelection, a.anchorNode = b.anchorNode, a.anchorOffset = b.anchorOffset, a.focusNode = b.focusNode, a.focusOffset = b.focusOffset, a.isCollapsed = q(a)) : f(a)
    }
  }
  H.refresh = function (a) {
    var b = a ? this._ranges.slice(0) : null;
    if (L(this), a) {
      if (a = b.length, a != this._ranges.length)return !1;
      for (; a--;)if (!t.rangesEqual(b[a], this._ranges[a]))return !1;
      return !0
    }
  };
  var M = function (a, b) {
    var c = a.getAllRanges(), d = !1;
    a.removeAllRanges();
    for (var e = 0, g = c.length; g > e; ++e)d || b !== c[e] ? a.addRange(c[e]) : d = !0;
    a.rangeCount || f(a)
  };
  H.removeRange = I ? function (a) {
    if ("Control" == this.docSelection.type) {
      for (var b, c = this.docSelection.createRange(), a = h(a), d = r.getDocument(c.item(0)), d = r.getBody(d).createControlRange(), e = !1, f = 0, g = c.length; g > f; ++f)b = c.item(f), b !== a || e ? d.add(c.item(f)) : e = !0;
      d.select(), j(this)
    } else M(this, a)
  } : function (a) {
    M(this, a)
  };
  var N;
  !z && C && a.features.implementsDomRange ? (N = function (a) {
    var b = !1;
    return a.anchorNode && (b = 1 == r.comparePoints(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)), b
  }, H.isBackwards = function () {
    return N(this)
  }) : N = H.isBackwards = function () {
    return !1
  }, H.toString = function () {
    for (var a = [], b = 0, c = this.rangeCount; c > b; ++b)a[b] = "" + this._ranges[b];
    return a.join("")
  }, H.collapse = function (b, c) {
    n(this, b);
    var d = a.createRange(r.getDocument(b));
    d.collapseToPoint(b, c), this.removeAllRanges(), this.addRange(d), this.isCollapsed = !0
  }, H.collapseToStart = function () {
    if (!this.rangeCount)throw new v("INVALID_STATE_ERR");
    var a = this._ranges[0];
    this.collapse(a.startContainer, a.startOffset)
  }, H.collapseToEnd = function () {
    if (!this.rangeCount)throw new v("INVALID_STATE_ERR");
    var a = this._ranges[this.rangeCount - 1];
    this.collapse(a.endContainer, a.endOffset)
  }, H.selectAllChildren = function (b) {
    n(this, b);
    var c = a.createRange(r.getDocument(b));
    c.selectNodeContents(b), this.removeAllRanges(), this.addRange(c)
  }, H.deleteFromDocument = function () {
    if (I && y && "Control" == this.docSelection.type) {
      for (var a, b = this.docSelection.createRange(); b.length;)a = b.item(0), b.remove(a), a.parentNode.removeChild(a);
      this.refresh()
    } else if (this.rangeCount) {
      b = this.getAllRanges(), this.removeAllRanges(), a = 0;
      for (var c = b.length; c > a; ++a)b[a].deleteContents();
      this.addRange(b[c - 1])
    }
  }, H.getAllRanges = function () {
    return this._ranges.slice(0)
  }, H.setSingleRange = function (a) {
    this.setRanges([a])
  }, H.containsNode = function (a, b) {
    for (var c = 0, d = this._ranges.length; d > c; ++c)if (this._ranges[c].containsNode(a, b))return !0;
    return !1
  }, H.toHtml = function () {
    var a = "";
    if (this.rangeCount) {
      for (var a = t.getRangeDocument(this._ranges[0]).createElement("div"), b = 0, c = this._ranges.length; c > b; ++b)a.appendChild(this._ranges[b].cloneContents());
      a = a.innerHTML
    }
    return a
  }, H.getName = function () {
    return "WrappedSelection"
  }, H.inspect = function () {
    return o(this)
  }, H.detach = function () {
    this.win = this.anchorNode = this.focusNode = this.win._rangySelection = null
  }, l.inspect = o, a.Selection = l, a.selectionPrototype = H, a.addCreateMissingNativeApiListener(function (b) {
    "undefined" == typeof b.getSelection && (b.getSelection = function () {
      return a.getSelection(this)
    }), b = null
  })
});
var Base = function () {
};
Base.extend = function (a, b) {
  var c = Base.prototype.extend;
  Base._prototyping = !0;
  var d = new this;
  c.call(d, a), d.base = function () {
  }, delete Base._prototyping;
  var e = d.constructor, f = d.constructor = function () {
    if (!Base._prototyping)if (this._constructing || this.constructor == f)this._constructing = !0, e.apply(this, arguments), delete this._constructing; else if (null != arguments[0])return (arguments[0].extend || c).call(arguments[0], d)
  };
  return f.ancestor = this, f.extend = this.extend, f.forEach = this.forEach, f.implement = this.implement, f.prototype = d, f.toString = this.toString, f.valueOf = function (a) {
    return "object" == a ? f : e.valueOf()
  }, c.call(f, b), "function" == typeof f.init && f.init(), f
}, Base.prototype = {
  extend: function (a, b) {
    if (1 < arguments.length) {
      var c = this[a];
      if (c && "function" == typeof b && (!c.valueOf || c.valueOf() != b.valueOf()) && /\bbase\b/.test(b)) {
        var d = b.valueOf(), b = function () {
          var a = this.base || Base.prototype.base;
          this.base = c;
          var b = d.apply(this, arguments);
          return this.base = a, b
        };
        b.valueOf = function (a) {
          return "object" == a ? b : d
        }, b.toString = Base.toString
      }
      this[a] = b
    } else if (a) {
      var e = Base.prototype.extend;
      !Base._prototyping && "function" != typeof this && (e = this.extend || e);
      for (var f = {toSource: null}, g = ["constructor", "toString", "valueOf"], h = Base._prototyping ? 0 : 1; i = g[h++];)a[i] != f[i] && e.call(this, i, a[i]);
      for (var i in a)f[i] || e.call(this, i, a[i])
    }
    return this
  }
}, Base = Base.extend({
  constructor: function (a) {
    this.extend(a)
  }
}, {
  ancestor: Object, version: "1.1", forEach: function (a, b, c) {
    for (var d in a)void 0 === this.prototype[d] && b.call(c, a[d], d, a)
  }, implement: function () {
    for (var a = 0; a < arguments.length; a++)"function" == typeof arguments[a] ? arguments[a](this.prototype) : this.prototype.extend(arguments[a]);
    return this
  }, toString: function () {
    return "" + this.valueOf()
  }
}), wysihtml5.browser = function () {
  var a = navigator.userAgent, b = document.createElement("div"), c = -1 !== a.indexOf("MSIE") && -1 === a.indexOf("Opera"), d = -1 !== a.indexOf("Gecko") && -1 === a.indexOf("KHTML"), e = -1 !== a.indexOf("AppleWebKit/"), f = -1 !== a.indexOf("Chrome/"), g = -1 !== a.indexOf("Opera/");
  return {
    USER_AGENT: a, supported: function () {
      var a = this.USER_AGENT.toLowerCase(), c = "contentEditable"in b, d = document.execCommand && document.queryCommandSupported && document.queryCommandState, e = document.querySelector && document.querySelectorAll, a = this.isIos() && 5 > (/ipad|iphone|ipod/.test(a) && a.match(/ os (\d+).+? like mac os x/) || [, 0])[1] || -1 !== a.indexOf("opera mobi") || -1 !== a.indexOf("hpwos/");
      return c && d && e && !a
    }, isTouchDevice: function () {
      return this.supportsEvent("touchmove")
    }, isIos: function () {
      var a = this.USER_AGENT.toLowerCase();
      return -1 !== a.indexOf("webkit") && -1 !== a.indexOf("mobile")
    }, supportsSandboxedIframes: function () {
      return c
    }, throwsMixedContentWarningWhenIframeSrcIsEmpty: function () {
      return !("querySelector"in document)
    }, displaysCaretInEmptyContentEditableCorrectly: function () {
      return !d
    }, hasCurrentStyleProperty: function () {
      return "currentStyle"in b
    }, insertsLineBreaksOnReturn: function () {
      return d
    }, supportsPlaceholderAttributeOn: function (a) {
      return "placeholder"in a
    }, supportsEvent: function (a) {
      var c;
      return (c = "on" + a in b) || (b.setAttribute("on" + a, "return;"), c = "function" == typeof b["on" + a]), c
    }, supportsEventsInIframeCorrectly: function () {
      return !g
    }, firesOnDropOnlyWhenOnDragOverIsCancelled: function () {
      return e || d
    }, supportsDataTransfer: function () {
      try {
        return e && (window.Clipboard || window.DataTransfer).prototype.getData
      } catch (a) {
        return !1
      }
    }, supportsHTML5Tags: function (a) {
      return a = a.createElement("div"), a.innerHTML = "<article>foo</article>", "<article>foo</article>" === a.innerHTML.toLowerCase()
    }, supportsCommand: function () {
      var a = {formatBlock: c, insertUnorderedList: c || g || e, insertOrderedList: c || g || e}, b = {insertHTML: d};
      return function (c, d) {
        if (!a[d]) {
          try {
            return c.queryCommandSupported(d)
          } catch (e) {
          }
          try {
            return c.queryCommandEnabled(d)
          } catch (f) {
            return !!b[d]
          }
        }
        return !1
      }
    }(), doesAutoLinkingInContentEditable: function () {
      return c
    }, canDisableAutoLinking: function () {
      return this.supportsCommand(document, "AutoUrlDetect")
    }, clearsContentEditableCorrectly: function () {
      return d || g || e
    }, supportsGetAttributeCorrectly: function () {
      return "1" != document.createElement("td").getAttribute("rowspan")
    }, canSelectImagesInContentEditable: function () {
      return d || c || g
    }, clearsListsInContentEditableCorrectly: function () {
      return d || c || e
    }, autoScrollsToCaret: function () {
      return !e
    }, autoClosesUnclosedTags: function () {
      var a, c = b.cloneNode(!1);
      return c.innerHTML = "<p><div></div>", c = c.innerHTML.toLowerCase(), a = "<p></p><div></div>" === c || "<p><div></div></p>" === c, this.autoClosesUnclosedTags = function () {
        return a
      }, a
    }, supportsNativeGetElementsByClassName: function () {
      return -1 !== ("" + document.getElementsByClassName).indexOf("[native code]")
    }, supportsSelectionModify: function () {
      return "getSelection"in window && "modify"in window.getSelection()
    }, supportsClassList: function () {
      return "classList"in b
    }, needsSpaceAfterLineBreak: function () {
      return g
    }, supportsSpeechApiOn: function (b) {
      return 11 <= (a.match(/Chrome\/(\d+)/) || [, 0])[1] && ("onwebkitspeechchange"in b || "speech"in b)
    }, crashesWhenDefineProperty: function (a) {
      return c && ("XMLHttpRequest" === a || "XDomainRequest" === a)
    }, doesAsyncFocus: function () {
      return c
    }, hasProblemsSettingCaretAfterImg: function () {
      return c
    }, hasUndoInContextMenu: function () {
      return d || f || g
    }
  }
}(), wysihtml5.lang.array = function (a) {
  return {
    contains: function (b) {
      if (a.indexOf)return -1 !== a.indexOf(b);
      for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return !0;
      return !1
    }, without: function (b) {
      for (var b = wysihtml5.lang.array(b), c = [], d = 0, e = a.length; e > d; d++)b.contains(a[d]) || c.push(a[d]);
      return c
    }, get: function () {
      for (var b = 0, c = a.length, d = []; c > b; b++)d.push(a[b]);
      return d
    }
  }
}, wysihtml5.lang.Dispatcher = Base.extend({
  observe: function (a, b) {
    return this.events = this.events || {}, this.events[a] = this.events[a] || [], this.events[a].push(b), this
  }, on: function () {
    return this.observe.apply(this, wysihtml5.lang.array(arguments).get())
  }, fire: function (a, b) {
    this.events = this.events || {};
    for (var c = this.events[a] || [], d = 0; d < c.length; d++)c[d].call(this, b);
    return this
  }, stopObserving: function (a, b) {
    this.events = this.events || {};
    var c, d, e = 0;
    if (a) {
      for (c = this.events[a] || [], d = []; e < c.length; e++)c[e] !== b && b && d.push(c[e]);
      this.events[a] = d
    } else this.events = {};
    return this
  }
}), wysihtml5.lang.object = function (a) {
  return {
    merge: function (b) {
      for (var c in b)a[c] = b[c];
      return this
    }, get: function () {
      return a
    }, clone: function () {
      var b, c = {};
      for (b in a)c[b] = a[b];
      return c
    }, isArray: function () {
      return "[object Array]" === Object.prototype.toString.call(a)
    }
  }
}, function () {
  var a = /^\s+/, b = /\s+$/;
  wysihtml5.lang.string = function (c) {
    return c = "" + c, {
      trim: function () {
        return c.replace(a, "").replace(b, "")
      }, interpolate: function (a) {
        for (var b in a)c = this.replace("#{" + b + "}").by(a[b]);
        return c
      }, replace: function (a) {
        return {
          by: function (b) {
            return c.split(a).join(b)
          }
        }
      }
    }
  }
}(), function (a) {
  function b(a) {
    return a.replace(e, function (a, b) {
      var c = (b.match(f) || [])[1] || "", d = h[c], b = b.replace(f, "");
      b.split(d).length > b.split(c).length && (b += c, c = "");
      var e = d = b;
      return b.length > g && (e = e.substr(0, g) + "..."), "www." === d.substr(0, 4) && (d = "http://" + d), '<a href="' + d + '">' + e + "</a>" + c
    })
  }

  function c(f) {
    if (!d.contains(f.nodeName)) {
      if (f.nodeType !== a.TEXT_NODE || !f.data.match(e)) {
        for (h = a.lang.array(f.childNodes).get(), g = h.length, i = 0; g > i; i++)c(h[i]);
        return f
      }
      var g, h = f.parentNode;
      g = h.ownerDocument;
      var i = g._wysihtml5_tempElement;
      for (i || (i = g._wysihtml5_tempElement = g.createElement("div")), g = i, g.innerHTML = "<span></span>" + b(f.data), g.removeChild(g.firstChild); g.firstChild;)h.insertBefore(g.firstChild, f);
      h.removeChild(f)
    }
  }

  var d = a.lang.array("CODE PRE A SCRIPT HEAD TITLE STYLE".split(" ")), e = /((https?:\/\/|www\.)[^\s<]{3,})/gi, f = /([^\w\/\-](,?))$/i, g = 100, h = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  a.dom.autoLink = function (a) {
    var b;
    a:{
      b = a;
      for (var e; b.parentNode;) {
        if (b = b.parentNode, e = b.nodeName, d.contains(e)) {
          b = !0;
          break a
        }
        if ("body" === e)break
      }
      b = !1
    }
    return b ? a : (a === a.ownerDocument.documentElement && (a = a.ownerDocument.body), c(a))
  }, a.dom.autoLink.URL_REG_EXP = e
}(wysihtml5), function (a) {
  var b = a.browser.supportsClassList(), c = a.dom;
  c.addClass = function (a, d) {
    return b ? a.classList.add(d) : void(c.hasClass(a, d) || (a.className += " " + d))
  }, c.removeClass = function (a, c) {
    return b ? a.classList.remove(c) : void(a.className = a.className.replace(RegExp("(^|\\s+)" + c + "(\\s+|$)"), " "))
  }, c.hasClass = function (a, c) {
    if (b)return a.classList.contains(c);
    var d = a.className;
    return 0 < d.length && (d == c || RegExp("(^|\\s)" + c + "(\\s|$)").test(d))
  }
}(wysihtml5), wysihtml5.dom.contains = function () {
  var a = document.documentElement;
  return a.contains ? function (a, b) {
    return b.nodeType !== wysihtml5.ELEMENT_NODE && (b = b.parentNode), a !== b && a.contains(b)
  } : a.compareDocumentPosition ? function (a, b) {
    return !!(16 & a.compareDocumentPosition(b))
  } : void 0
}(), wysihtml5.dom.convertToList = function () {
  function a(a, b) {
    var c = a.createElement("li");
    return b.appendChild(c), c
  }

  return function (b, c) {
    if ("UL" === b.nodeName || "OL" === b.nodeName || "MENU" === b.nodeName)return b;
    var d, e, f, g, h, i = b.ownerDocument, j = i.createElement(c), k = b.querySelectorAll("br"), l = k.length;
    for (h = 0; l > h; h++)for (d = k[h]; (e = d.parentNode) && e !== b && e.lastChild === d;) {
      if ("block" === wysihtml5.dom.getStyle("display").from(e)) {
        e.removeChild(d);
        break
      }
      wysihtml5.dom.insert(d).after(d.parentNode)
    }
    for (k = wysihtml5.lang.array(b.childNodes).get(), l = k.length, h = 0; l > h; h++)g = g || a(i, j), d = k[h], e = "block" === wysihtml5.dom.getStyle("display").from(d), f = "BR" === d.nodeName, e ? (g = g.firstChild ? a(i, j) : g, g.appendChild(d), g = null) : f ? g = g.firstChild ? null : g : g.appendChild(d);
    return b.parentNode.replaceChild(j, b), j
  }
}(), wysihtml5.dom.copyAttributes = function (a) {
  return {
    from: function (b) {
      return {
        to: function (c) {
          for (var d, e = 0, f = a.length; f > e; e++)d = a[e], "undefined" != typeof b[d] && "" !== b[d] && (c[d] = b[d]);
          return {andTo: arguments.callee}
        }
      }
    }
  }
}, function (a) {
  var b = ["-webkit-box-sizing", "-moz-box-sizing", "-ms-box-sizing", "box-sizing"], c = function (c) {
    var d;
    a:for (var e = 0, f = b.length; f > e; e++)if ("border-box" === a.getStyle(b[e]).from(c)) {
      d = b[e];
      break a
    }
    return d ? parseInt(a.getStyle("width").from(c), 10) < c.offsetWidth : !1
  };
  a.copyStyles = function (d) {
    return {
      from: function (e) {
        c(e) && (d = wysihtml5.lang.array(d).without(b));
        for (var f, g = "", h = d.length, i = 0; h > i; i++)f = d[i], g += f + ":" + a.getStyle(f).from(e) + ";";
        return {
          to: function (b) {
            return a.setStyles(g).on(b), {andTo: arguments.callee}
          }
        }
      }
    }
  }
}(wysihtml5.dom), function (a) {
  a.dom.delegate = function (b, c, d, e) {
    return a.dom.observe(b, d, function (d) {
      for (var f = d.target, g = a.lang.array(b.querySelectorAll(c)); f && f !== b;) {
        if (g.contains(f)) {
          e.call(f, d);
          break
        }
        f = f.parentNode
      }
    })
  }
}(wysihtml5), wysihtml5.dom.getAsDom = function () {
  var a = "abbr article aside audio bdi canvas command datalist details figcaption figure footer header hgroup keygen mark meter nav output progress rp rt ruby svg section source summary time track video wbr".split(" ");
  return function (b, c) {
    var d, c = c || document;
    if ("object" == typeof b && b.nodeType)d = c.createElement("div"), d.appendChild(b); else if (wysihtml5.browser.supportsHTML5Tags(c))d = c.createElement("div"), d.innerHTML = b; else {
      if (d = c, !d._wysihtml5_supportsHTML5Tags) {
        for (var e = 0, f = a.length; f > e; e++)d.createElement(a[e]);
        d._wysihtml5_supportsHTML5Tags = !0
      }
      d = c, e = d.createElement("div"), e.style.display = "none", d.body.appendChild(e);
      try {
        e.innerHTML = b
      } catch (g) {
      }
      d.body.removeChild(e), d = e
    }
    return d
  }
}(), wysihtml5.dom.getParentElement = function () {
  function a(a, b) {
    return b && b.length ? "string" == typeof b ? a === b : wysihtml5.lang.array(b).contains(a) : !0
  }

  return function (b, c, d) {
    if (d = d || 50, c.className || c.classRegExp) {
      a:{
        for (var e = c.nodeName, f = c.className, c = c.classRegExp; d-- && b && "BODY" !== b.nodeName;) {
          var g;
          if ((g = b.nodeType === wysihtml5.ELEMENT_NODE) && (g = a(b.nodeName, e))) {
            g = f;
            var h = (b.className || "").match(c) || [];
            g = g ? h[h.length - 1] === g : !!h.length
          }
          if (g)break a;
          b = b.parentNode
        }
        b = null
      }
      return b
    }
    a:{
      for (e = c.nodeName, f = d; f-- && b && "BODY" !== b.nodeName;) {
        if (a(b.nodeName, e))break a;
        b = b.parentNode
      }
      b = null
    }
    return b
  }
}(), wysihtml5.dom.getStyle = function () {
  function a(a) {
    return a.replace(c, function (a) {
      return a.charAt(1).toUpperCase()
    })
  }

  var b = {"float": "styleFloat"in document.createElement("div").style ? "styleFloat" : "cssFloat"}, c = /\-[a-z]/g;
  return function (c) {
    return {
      from: function (d) {
        if (d.nodeType === wysihtml5.ELEMENT_NODE) {
          var e = d.ownerDocument, f = b[c] || a(c), g = d.style, h = d.currentStyle, i = g[f];
          if (i)return i;
          if (h)try {
            return h[f]
          } catch (j) {
          }
          var k, f = e.defaultView || e.parentWindow, e = ("height" === c || "width" === c) && "TEXTAREA" === d.nodeName;
          if (f.getComputedStyle)return e && (k = g.overflow, g.overflow = "hidden"), d = f.getComputedStyle(d, null).getPropertyValue(c), e && (g.overflow = k || ""), d
        }
      }
    }
  }
}(), wysihtml5.dom.hasElementWithTagName = function () {
  var a = {}, b = 1;
  return function (c, d) {
    var e = (c._wysihtml5_identifier || (c._wysihtml5_identifier = b++)) + ":" + d, f = a[e];
    return f || (f = a[e] = c.getElementsByTagName(d)), 0 < f.length
  }
}(), function (a) {
  var b = {}, c = 1;
  a.dom.hasElementWithClassName = function (d, e) {
    if (!a.browser.supportsNativeGetElementsByClassName())return !!d.querySelector("." + e);
    var f = (d._wysihtml5_identifier || (d._wysihtml5_identifier = c++)) + ":" + e, g = b[f];
    return g || (g = b[f] = d.getElementsByClassName(e)), 0 < g.length
  }
}(wysihtml5), wysihtml5.dom.insert = function (a) {
  return {
    after: function (b) {
      b.parentNode.insertBefore(a, b.nextSibling)
    }, before: function (b) {
      b.parentNode.insertBefore(a, b)
    }, into: function (b) {
      b.appendChild(a)
    }
  }
}, wysihtml5.dom.insertCSS = function (a) {
  return a = a.join("\n"), {
    into: function (b) {
      var c = b.head || b.getElementsByTagName("head")[0], d = b.createElement("style");
      d.type = "text/css", d.styleSheet ? d.styleSheet.cssText = a : d.appendChild(b.createTextNode(a)), c && c.appendChild(d)
    }
  }
}, wysihtml5.dom.observe = function (a, b, c) {
  for (var d, e, b = "string" == typeof b ? [b] : b, f = 0, g = b.length; g > f; f++)e = b[f], a.addEventListener ? a.addEventListener(e, c, !1) : (d = function (b) {
    "target"in b || (b.target = b.srcElement), b.preventDefault = b.preventDefault || function () {
        this.returnValue = !1
      }, b.stopPropagation = b.stopPropagation || function () {
        this.cancelBubble = !0
      }, c.call(a, b)
  }, a.attachEvent("on" + e, d));
  return {
    stop: function () {
      for (var e, f = 0, g = b.length; g > f; f++)e = b[f], a.removeEventListener ? a.removeEventListener(e, c, !1) : a.detachEvent("on" + e, d)
    }
  }
}, wysihtml5.dom.parse = function () {
  function a(b, e) {
    var f, g = b.childNodes, h = g.length;
    f = c[b.nodeType];
    var i = 0;
    if (f = f && f(b), !f)return null;
    for (i = 0; h > i; i++)(newChild = a(g[i], e)) && f.appendChild(newChild);
    return e && 1 >= f.childNodes.length && f.nodeName.toLowerCase() === d && !f.attributes.length ? f.firstChild : f
  }

  function b(a, b) {
    var c, b = b.toLowerCase();
    if ((c = "IMG" == a.nodeName) && (c = "src" == b)) {
      var d;
      try {
        d = a.complete && !a.mozMatchesSelector(":-moz-broken")
      } catch (e) {
        a.complete && "complete" === a.readyState && (d = !0)
      }
      c = !0 === d
    }
    return c ? a.src : h && "outerHTML"in a ? -1 != a.outerHTML.toLowerCase().indexOf(" " + b + "=") ? a.getAttribute(b) : null : a.getAttribute(b)
  }

  var c = {
    1: function (a) {
      var c, f, h = g.tags;
      if (f = a.nodeName.toLowerCase(), c = a.scopeName, a._wysihtml5)return null;
      if (a._wysihtml5 = 1, "wysihtml5-temp" === a.className)return null;
      if (c && "HTML" != c && (f = c + ":" + f), "outerHTML"in a && !wysihtml5.browser.autoClosesUnclosedTags() && "P" === a.nodeName && "</p>" !== a.outerHTML.slice(-4).toLowerCase() && (f = "div"), f in h) {
        if (c = h[f], !c || c.remove)return null;
        c = "string" == typeof c ? {rename_tag: c} : c
      } else {
        if (!a.firstChild)return null;
        c = {rename_tag: d}
      }
      f = a.ownerDocument.createElement(c.rename_tag || f);
      var h = {}, k = c.set_class, l = c.add_class, m = c.set_attributes, n = c.check_attributes, o = g.classes, p = 0, q = [];
      c = [];
      var r, s = [], t = [];
      if (m && (h = wysihtml5.lang.object(m).clone()), n)for (r in n)(m = i[n[r]]) && (m = m(b(a, r)), "string" == typeof m && (h[r] = m));
      if (k && q.push(k), l)for (r in l)(m = j[l[r]]) && (k = m(b(a, r)), "string" == typeof k && q.push(k));
      for (o["_wysihtml5-temp-placeholder"] = 1, (t = a.getAttribute("class")) && (q = q.concat(t.split(e))), l = q.length; l > p; p++)a = q[p], o[a] && c.push(a);
      for (o = c.length; o--;)a = c[o], wysihtml5.lang.array(s).contains(a) || s.unshift(a);
      s.length && (h["class"] = s.join(" "));
      for (r in h)try {
        f.setAttribute(r, h[r])
      } catch (u) {
      }
      return h.src && ("undefined" != typeof h.width && f.setAttribute("width", h.width), "undefined" != typeof h.height && f.setAttribute("height", h.height)), f
    }, 3: function (a) {
      return a.ownerDocument.createTextNode(a.data)
    }
  }, d = "span", e = /\s+/, f = {
    tags: {},
    classes: {}
  }, g = {}, h = !wysihtml5.browser.supportsGetAttributeCorrectly(), i = {
    url: function () {
      var a = /^https?:\/\//i;
      return function (b) {
        return b && b.match(a) ? b.replace(a, function (a) {
          return a.toLowerCase()
        }) : null
      }
    }(), alt: function () {
      var a = /[^ a-z0-9_\-]/gi;
      return function (b) {
        return b ? b.replace(a, "") : ""
      }
    }(), numbers: function () {
      var a = /\D/g;
      return function (b) {
        return (b = (b || "").replace(a, "")) || null
      }
    }()
  }, j = {
    align_img: function () {
      var a = {left: "wysiwyg-float-left", right: "wysiwyg-float-right"};
      return function (b) {
        return a[("" + b).toLowerCase()]
      }
    }(), align_text: function () {
      var a = {
        left: "wysiwyg-text-align-left",
        right: "wysiwyg-text-align-right",
        center: "wysiwyg-text-align-center",
        justify: "wysiwyg-text-align-justify"
      };
      return function (b) {
        return a[("" + b).toLowerCase()]
      }
    }(), clear_br: function () {
      var a = {
        left: "wysiwyg-clear-left",
        right: "wysiwyg-clear-right",
        both: "wysiwyg-clear-both",
        all: "wysiwyg-clear-both"
      };
      return function (b) {
        return a[("" + b).toLowerCase()]
      }
    }(), size_font: function () {
      var a = {
        1: "wysiwyg-font-size-xx-small",
        2: "wysiwyg-font-size-small",
        3: "wysiwyg-font-size-medium",
        4: "wysiwyg-font-size-large",
        5: "wysiwyg-font-size-x-large",
        6: "wysiwyg-font-size-xx-large",
        7: "wysiwyg-font-size-xx-large",
        "-": "wysiwyg-font-size-smaller",
        "+": "wysiwyg-font-size-larger"
      };
      return function (b) {
        return a[("" + b).charAt(0)]
      }
    }()
  };
  return function (b, c, d, e) {
    wysihtml5.lang.object(g).merge(f).merge(c).get();
    for (var d = d || b.ownerDocument || document, c = d.createDocumentFragment(), h = "string" == typeof b, b = h ? wysihtml5.dom.getAsDom(b, d) : b; b.firstChild;)d = b.firstChild, b.removeChild(d), (d = a(d, e)) && c.appendChild(d);
    return b.innerHTML = "", b.appendChild(c), h ? wysihtml5.quirks.getCorrectInnerHTML(b) : b
  }
}(), wysihtml5.dom.removeEmptyTextNodes = function (a) {
  for (var b = wysihtml5.lang.array(a.childNodes).get(), c = b.length, d = 0; c > d; d++)a = b[d], a.nodeType === wysihtml5.TEXT_NODE && "" === a.data && a.parentNode.removeChild(a)
}, wysihtml5.dom.renameElement = function (a, b) {
  for (var c, d = a.ownerDocument.createElement(b); c = a.firstChild;)d.appendChild(c);
  return wysihtml5.dom.copyAttributes(["align", "className"]).from(a).to(d), a.parentNode.replaceChild(d, a), d
}, wysihtml5.dom.replaceWithChildNodes = function (a) {
  if (a.parentNode)if (a.firstChild) {
    for (var b = a.ownerDocument.createDocumentFragment(); a.firstChild;)b.appendChild(a.firstChild);
    a.parentNode.replaceChild(b, a)
  } else a.parentNode.removeChild(a)
}, function (a) {
  function b(a) {
    var b = a.ownerDocument.createElement("br");
    a.appendChild(b)
  }

  a.resolveList = function (c) {
    if ("MENU" === c.nodeName || "UL" === c.nodeName || "OL" === c.nodeName) {
      var d, e, f, g = c.ownerDocument.createDocumentFragment(), h = c.previousElementSibling || c.previousSibling;
      for (h && "block" !== a.getStyle("display").from(h) && b(g); f = c.firstChild;) {
        for (d = f.lastChild; h = f.firstChild;)e = (e = h === d) && "block" !== a.getStyle("display").from(h) && "BR" !== h.nodeName, g.appendChild(h), e && b(g);
        f.parentNode.removeChild(f)
      }
      c.parentNode.replaceChild(g, c)
    }
  }
}(wysihtml5.dom), function (a) {
  var b = document, c = "parent top opener frameElement frames localStorage globalStorage sessionStorage indexedDB".split(" "), d = "open close openDialog showModalDialog alert confirm prompt openDatabase postMessage XMLHttpRequest XDomainRequest".split(" "), e = ["referrer", "write", "open", "close"];
  a.dom.Sandbox = Base.extend({
    constructor: function (b, c) {
      this.callback = b || a.EMPTY_FUNCTION, this.config = a.lang.object({}).merge(c).get(), this.iframe = this._createIframe()
    }, insertInto: function (a) {
      "string" == typeof a && (a = b.getElementById(a)), a.appendChild(this.iframe)
    }, getIframe: function () {
      return this.iframe
    }, getWindow: function () {
      this._readyError()
    }, getDocument: function () {
      this._readyError()
    }, destroy: function () {
      var a = this.getIframe();
      a.parentNode.removeChild(a)
    }, _readyError: function () {
      throw Error("wysihtml5.Sandbox: Sandbox iframe isn't loaded yet")
    }, _createIframe: function () {
      var c = this, d = b.createElement("iframe");
      return d.className = "wysihtml5-sandbox", a.dom.setAttributes({
        security: "restricted",
        allowtransparency: "true",
        frameborder: 0,
        width: 0,
        height: 0,
        marginwidth: 0,
        marginheight: 0
      }).on(d), a.browser.throwsMixedContentWarningWhenIframeSrcIsEmpty() && (d.src = "javascript:'<html></html>'"), d.onload = function () {
        d.onreadystatechange = d.onload = null, c._onLoadIframe(d)
      }, d.onreadystatechange = function () {
        /loaded|complete/.test(d.readyState) && (d.onreadystatechange = d.onload = null, c._onLoadIframe(d))
      }, d
    }, _onLoadIframe: function (f) {
      if (a.dom.contains(b.documentElement, f)) {
        var g = this, h = f.contentWindow, i = f.contentWindow.document, j = this._getHtml({
          charset: b.characterSet || b.charset || "utf-8",
          stylesheets: this.config.stylesheets
        });
        if (i.open("text/html", "replace"), i.write(j), i.close(), this.getWindow = function () {
            return f.contentWindow
          }, this.getDocument = function () {
            return f.contentWindow.document
          }, h.onerror = function (a, b, c) {
            throw Error("wysihtml5.Sandbox: " + a, b, c)
          }, !a.browser.supportsSandboxedIframes()) {
          var k, j = 0;
          for (k = c.length; k > j; j++)this._unset(h, c[j]);
          for (j = 0, k = d.length; k > j; j++)this._unset(h, d[j], a.EMPTY_FUNCTION);
          for (j = 0, k = e.length; k > j; j++)this._unset(i, e[j]);
          this._unset(i, "cookie", "", !0)
        }
        this.loaded = !0, setTimeout(function () {
          g.callback(g)
        }, 0)
      }
    }, _getHtml: function (b) {
      var c, d = b.stylesheets, e = "", f = 0;
      if (d = "string" == typeof d ? [d] : d)for (c = d.length; c > f; f++)e += '<link rel="stylesheet" href="' + d[f] + '">';
      return b.stylesheets = e, a.lang.string('<!DOCTYPE html><html><head><meta charset="#{charset}">#{stylesheets}</head><body></body></html>').interpolate(b)
    }, _unset: function (b, c, d, e) {
      try {
        b[c] = d
      } catch (f) {
      }
      try {
        b.__defineGetter__(c, function () {
          return d
        })
      } catch (g) {
      }
      if (e)try {
        b.__defineSetter__(c, function () {
        })
      } catch (h) {
      }
      if (!a.browser.crashesWhenDefineProperty(c))try {
        var i = {
          get: function () {
            return d
          }
        };
        e && (i.set = function () {
        }), Object.defineProperty(b, c, i)
      } catch (j) {
      }
    }
  })
}(wysihtml5), function () {
  var a = {className: "class"};
  wysihtml5.dom.setAttributes = function (b) {
    return {
      on: function (c) {
        for (var d in b)c.setAttribute(a[d] || d, b[d])
      }
    }
  }
}(), wysihtml5.dom.setStyles = function (a) {
  return {
    on: function (b) {
      if (b = b.style, "string" == typeof a)b.cssText += ";" + a; else for (var c in a)"float" === c ? (b.cssFloat = a[c], b.styleFloat = a[c]) : b[c] = a[c]
    }
  }
}, function (a) {
  a.simulatePlaceholder = function (b, c, d) {
    var e = function () {
      c.hasPlaceholderSet() && c.clear(), a.removeClass(c.element, "placeholder")
    }, f = function () {
      c.isEmpty() && (c.setValue(d), a.addClass(c.element, "placeholder"))
    };
    b.observe("set_placeholder", f).observe("unset_placeholder", e).observe("focus:composer", e).observe("paste:composer", e).observe("blur:composer", f), f()
  }
}(wysihtml5.dom), function (a) {
  var b = document.documentElement;
  "textContent"in b ? (a.setTextContent = function (a, b) {
    a.textContent = b
  }, a.getTextContent = function (a) {
    return a.textContent
  }) : "innerText"in b ? (a.setTextContent = function (a, b) {
    a.innerText = b
  }, a.getTextContent = function (a) {
    return a.innerText
  }) : (a.setTextContent = function (a, b) {
    a.nodeValue = b
  }, a.getTextContent = function (a) {
    return a.nodeValue
  })
}(wysihtml5.dom), wysihtml5.quirks.cleanPastedHTML = function () {
  var a = {"a u": wysihtml5.dom.replaceWithChildNodes};
  return function (b, c, d) {
    var e, f, g, c = c || a, d = d || b.ownerDocument || document, h = "string" == typeof b, i = 0, b = h ? wysihtml5.dom.getAsDom(b, d) : b;
    for (g in c)for (e = b.querySelectorAll(g), d = c[g], f = e.length; f > i; i++)d(e[i]);
    return h ? b.innerHTML : b
  }
}(), function (a) {
  var b = a.dom;
  a.quirks.ensureProperClearing = function () {
    var a = function () {
      var a = this;
      setTimeout(function () {
        var b = a.innerHTML.toLowerCase();
        ("<p>&nbsp;</p>" == b || "<p>&nbsp;</p><p>&nbsp;</p>" == b) && (a.innerHTML = "")
      }, 0)
    };
    return function (c) {
      b.observe(c.element, ["cut", "keydown"], a)
    }
  }(), a.quirks.ensureProperClearingOfLists = function () {
    var c = ["OL", "UL", "MENU"];
    return function (d) {
      b.observe(d.element, "keydown", function (e) {
        if (e.keyCode === a.BACKSPACE_KEY) {
          var f = d.selection.getSelectedNode(), e = d.element;
          e.firstChild && a.lang.array(c).contains(e.firstChild.nodeName) && (f = b.getParentElement(f, {nodeName: c})) && f == e.firstChild && 1 >= f.childNodes.length && (f.firstChild ? "" === f.firstChild.innerHTML : 1) && f.parentNode.removeChild(f)
        }
      })
    }
  }()
}(wysihtml5), function (a) {
  a.quirks.getCorrectInnerHTML = function (b) {
    var c = b.innerHTML;
    if (-1 === c.indexOf("%7E"))return c;
    var d, e, f, g, b = b.querySelectorAll("[href*='~'], [src*='~']");
    for (g = 0, f = b.length; f > g; g++)d = b[g].href || b[g].src, e = a.lang.string(d).replace("~").by("%7E"), c = a.lang.string(c).replace(e).by(d);
    return c
  }
}(wysihtml5), function (a) {
  var b = a.dom, c = "LI P H1 H2 H3 H4 H5 H6".split(" "), d = ["UL", "OL", "MENU"];
  a.quirks.insertLineBreakOnReturn = function (e) {
    function f(c) {
      if (c = b.getParentElement(c, {nodeName: ["P", "DIV"]}, 2)) {
        var d = document.createTextNode(a.INVISIBLE_SPACE);
        b.insert(d).before(c), b.replaceWithChildNodes(c), e.selection.selectNode(d)
      }
    }

    b.observe(e.element.ownerDocument, "keydown", function (g) {
      var h = g.keyCode;
      if (!(g.shiftKey || h !== a.ENTER_KEY && h !== a.BACKSPACE_KEY)) {
        var i = e.selection.getSelectedNode();
        (i = b.getParentElement(i, {nodeName: c}, 4)) ? "LI" !== i.nodeName || h !== a.ENTER_KEY && h !== a.BACKSPACE_KEY ? i.nodeName.match(/H[1-6]/) && h === a.ENTER_KEY && setTimeout(function () {
          f(e.selection.getSelectedNode())
        }, 0) : setTimeout(function () {
          var a, c = e.selection.getSelectedNode();
          c && ((a = b.getParentElement(c, {nodeName: d}, 2)) || f(c))
        }, 0) : h === a.ENTER_KEY && !a.browser.insertsLineBreaksOnReturn() && (e.commands.exec("insertLineBreak"), g.preventDefault())
      }
    })
  }
}(wysihtml5), function (a) {
  a.quirks.redraw = function (b) {
    a.dom.addClass(b, "wysihtml5-quirks-redraw"), a.dom.removeClass(b, "wysihtml5-quirks-redraw");
    try {
      var c = b.ownerDocument;
      c.execCommand("italic", !1, null), c.execCommand("italic", !1, null)
    } catch (d) {
    }
  }
}(wysihtml5), function (a) {
  var b = a.dom;
  a.Selection = Base.extend({
    constructor: function (a) {
      window.rangy.init(), this.editor = a, this.composer = a.composer, this.doc = this.composer.doc
    }, getBookmark: function () {
      var a = this.getRange();
      return a && a.cloneRange()
    }, setBookmark: function (a) {
      a && this.setSelection(a)
    }, setBefore: function (a) {
      var b = rangy.createRange(this.doc);
      return b.setStartBefore(a), b.setEndBefore(a), this.setSelection(b)
    }, setAfter: function (a) {
      var b = rangy.createRange(this.doc);
      return b.setStartAfter(a), b.setEndAfter(a), this.setSelection(b)
    }, selectNode: function (c) {
      var d = rangy.createRange(this.doc), e = c.nodeType === a.ELEMENT_NODE, f = "canHaveHTML"in c ? c.canHaveHTML : "IMG" !== c.nodeName, g = e ? c.innerHTML : c.data, g = "" === g || g === a.INVISIBLE_SPACE, h = b.getStyle("display").from(c), h = "block" === h || "list-item" === h;
      if (g && e && f)try {
        c.innerHTML = a.INVISIBLE_SPACE
      } catch (i) {
      }
      f ? d.selectNodeContents(c) : d.selectNode(c), f && g && e ? d.collapse(h) : f && g && (d.setStartAfter(c), d.setEndAfter(c)), this.setSelection(d)
    }, getSelectedNode: function (a) {
      return a && this.doc.selection && "Control" === this.doc.selection.type && (a = this.doc.selection.createRange()) && a.length ? a.item(0) : (a = this.getSelection(this.doc), a.focusNode === a.anchorNode ? a.focusNode : (a = this.getRange(this.doc)) ? a.commonAncestorContainer : this.doc.body)
    }, executeAndRestore: function (b, c) {
      var d = this.doc.body, e = c && d.scrollTop, f = c && d.scrollLeft, g = '<span class="_wysihtml5-temp-placeholder">' + a.INVISIBLE_SPACE + "</span>", h = this.getRange(this.doc);
      if (h) {
        g = h.createContextualFragment(g), h.insertNode(g);
        try {
          b(h.startContainer, h.endContainer)
        } catch (i) {
          setTimeout(function () {
            throw i
          }, 0)
        }
        (caretPlaceholder = this.doc.querySelector("._wysihtml5-temp-placeholder")) ? (h = rangy.createRange(this.doc), h.selectNode(caretPlaceholder), h.deleteContents(), this.setSelection(h)) : d.focus(), c && (d.scrollTop = e, d.scrollLeft = f);
        try {
          caretPlaceholder.parentNode.removeChild(caretPlaceholder)
        } catch (j) {
        }
      } else b(d, d)
    }, executeAndRestoreSimple: function (a) {
      var b, c, d, e = this.getRange(), f = this.doc.body;
      if (e) {
        b = e.getNodes([3]), f = b[0] || e.startContainer, d = b[b.length - 1] || e.endContainer, b = f === e.startContainer ? e.startOffset : 0, c = d === e.endContainer ? e.endOffset : d.length;
        try {
          a(e.startContainer, e.endContainer)
        } catch (g) {
          setTimeout(function () {
            throw g
          }, 0)
        }
        a = rangy.createRange(this.doc);
        try {
          a.setStart(f, b)
        } catch (h) {
        }
        try {
          a.setEnd(d, c)
        } catch (i) {
        }
        try {
          this.setSelection(a)
        } catch (j) {
        }
      } else a(f, f)
    }, insertHTML: function (a) {
      var a = rangy.createRange(this.doc).createContextualFragment(a), b = a.lastChild;
      this.insertNode(a), b && this.setAfter(b)
    }, insertNode: function (a) {
      var b = this.getRange();
      b && b.insertNode(a)
    }, surround: function (a) {
      var b = this.getRange();
      if (b)try {
        b.surroundContents(a), this.selectNode(a)
      } catch (c) {
        a.appendChild(b.extractContents()), b.insertNode(a)
      }
    }, scrollIntoView: function () {
      var b, c = this.doc, d = c.documentElement.scrollHeight > c.documentElement.offsetHeight;
      if ((b = c._wysihtml5ScrollIntoViewElement) || (b = c.createElement("span"), b.innerHTML = a.INVISIBLE_SPACE), b = c._wysihtml5ScrollIntoViewElement = b, d) {
        this.insertNode(b);
        var d = b, e = 0;
        if (d.parentNode)do e += d.offsetTop || 0, d = d.offsetParent; while (d);
        d = e, b.parentNode.removeChild(b), d > c.body.scrollTop && (c.body.scrollTop = d)
      }
    }, selectLine: function () {
      a.browser.supportsSelectionModify() ? this._selectLine_W3C() : this.doc.selection && this._selectLine_MSIE()
    }, _selectLine_W3C: function () {
      var a = this.doc.defaultView.getSelection();
      a.modify("extend", "left", "lineboundary"), a.modify("extend", "right", "lineboundary")
    }, _selectLine_MSIE: function () {
      var a, b = this.doc.selection.createRange(), c = b.boundingTop, d = this.doc.body.scrollWidth;
      if (b.moveToPoint) {
        for (0 === c && (a = this.doc.createElement("span"), this.insertNode(a), c = a.offsetTop, a.parentNode.removeChild(a)), c += 1, a = -10; d > a; a += 2)try {
          b.moveToPoint(a, c);
          break
        } catch (e) {
        }
        for (a = this.doc.selection.createRange(); d >= 0; d--)try {
          a.moveToPoint(d, c);
          break
        } catch (f) {
        }
        b.setEndPoint("EndToEnd", a), b.select()
      }
    }, getText: function () {
      var a = this.getSelection();
      return a ? a.toString() : ""
    }, getNodes: function (a, b) {
      var c = this.getRange();
      return c ? c.getNodes([a], b) : []
    }, getRange: function () {
      var a = this.getSelection();
      return a && a.rangeCount && a.getRangeAt(0)
    }, getSelection: function () {
      return rangy.getSelection(this.doc.defaultView || this.doc.parentWindow)
    }, setSelection: function (a) {
      return rangy.getSelection(this.doc.defaultView || this.doc.parentWindow).setSingleRange(a)
    }
  })
}(wysihtml5), function (a, b) {
  function c(a, c) {
    return b.dom.isCharacterDataNode(a) ? 0 == c ? !!a.previousSibling : c == a.length ? !!a.nextSibling : !0 : c > 0 && c < a.childNodes.length
  }

  function d(a, c, e) {
    var f;
    if (b.dom.isCharacterDataNode(c) && (0 == e ? (e = b.dom.getNodeIndex(c), c = c.parentNode) : e == c.length ? (e = b.dom.getNodeIndex(c) + 1, c = c.parentNode) : f = b.dom.splitDataNode(c, e)), !f) {
      f = c.cloneNode(!1), f.id && f.removeAttribute("id");
      for (var g; g = c.childNodes[e];)f.appendChild(g);
      b.dom.insertAfter(f, c)
    }
    return c == a ? f : d(a, f.parentNode, b.dom.getNodeIndex(f))
  }

  function e(b) {
    this.firstTextNode = (this.isElementMerge = b.nodeType == a.ELEMENT_NODE) ? b.lastChild : b, this.textNodes = [this.firstTextNode]
  }

  function f(a, b, c, d) {
    this.tagNames = a || [g], this.cssClass = b || "", this.similarClassRegExp = c, this.normalize = d, this.applyToAnyTagName = !1
  }

  var g = "span", h = /\s+/g;
  e.prototype = {
    doMerge: function () {
      for (var a, b, c = [], d = 0, e = this.textNodes.length; e > d; ++d)a = this.textNodes[d], b = a.parentNode, c[d] = a.data, d && (b.removeChild(a), b.hasChildNodes() || b.parentNode.removeChild(b));
      return this.firstTextNode.data = c = c.join("")
    }, getLength: function () {
      for (var a = this.textNodes.length, b = 0; a--;)b += this.textNodes[a].length;
      return b
    }, toString: function () {
      for (var a = [], b = 0, c = this.textNodes.length; c > b; ++b)a[b] = "'" + this.textNodes[b].data + "'";
      return "[Merge(" + a.join(",") + ")]"
    }
  }, f.prototype = {
    getAncestorWithClass: function (c) {
      for (var d; c;) {
        if (this.cssClass)if (d = this.cssClass, c.className) {
          var e = c.className.match(this.similarClassRegExp) || [];
          d = e[e.length - 1] === d
        } else d = !1; else d = !0;
        if (c.nodeType == a.ELEMENT_NODE && b.dom.arrayContains(this.tagNames, c.tagName.toLowerCase()) && d)return c;
        c = c.parentNode
      }
      return !1
    }, postApply: function (a, b) {
      for (var c, d, f, g = a[0], h = a[a.length - 1], i = [], j = g, k = h, l = 0, m = h.length, n = 0, o = a.length; o > n; ++n)d = a[n], (f = this.getAdjacentMergeableTextNode(d.parentNode, !1)) ? (c || (c = new e(f), i.push(c)), c.textNodes.push(d), d === g && (j = c.firstTextNode, l = j.length), d === h && (k = c.firstTextNode, m = c.getLength())) : c = null;
      if ((g = this.getAdjacentMergeableTextNode(h.parentNode, !0)) && (c || (c = new e(h), i.push(c)), c.textNodes.push(g)), i.length) {
        for (n = 0, o = i.length; o > n; ++n)i[n].doMerge();
        b.setStart(j, l), b.setEnd(k, m)
      }
    }, getAdjacentMergeableTextNode: function (b, c) {
      var d = b.nodeType == a.TEXT_NODE, e = d ? b.parentNode : b, f = c ? "nextSibling" : "previousSibling";
      if (d) {
        if ((d = b[f]) && d.nodeType == a.TEXT_NODE)return d
      } else if ((d = e[f]) && this.areElementsMergeable(b, d))return d[c ? "firstChild" : "lastChild"];
      return null
    }, areElementsMergeable: function (a, c) {
      var d;
      if ((d = b.dom.arrayContains(this.tagNames, (a.tagName || "").toLowerCase())) && (d = b.dom.arrayContains(this.tagNames, (c.tagName || "").toLowerCase())) && (d = a.className.replace(h, " ") == c.className.replace(h, " ")))a:if (a.attributes.length != c.attributes.length)d = !1; else {
        d = 0;
        for (var e, f, g = a.attributes.length; g > d; ++d)if (e = a.attributes[d], f = e.name, "class" != f && (f = c.attributes.getNamedItem(f), e.specified != f.specified || e.specified && e.nodeValue !== f.nodeValue)) {
          d = !1;
          break a
        }
        d = !0
      }
      return d
    }, createContainer: function (a) {
      return a = a.createElement(this.tagNames[0]), this.cssClass && (a.className = this.cssClass), a
    }, applyToTextNode: function (a) {
      var c = a.parentNode;
      1 == c.childNodes.length && b.dom.arrayContains(this.tagNames, c.tagName.toLowerCase()) ? this.cssClass && (a = this.cssClass, c.className ? (c.className && (c.className = c.className.replace(this.similarClassRegExp, "")), c.className += " " + a) : c.className = a) : (c = this.createContainer(b.dom.getDocument(a)), a.parentNode.insertBefore(c, a), c.appendChild(a))
    }, isRemovable: function (c) {
      return b.dom.arrayContains(this.tagNames, c.tagName.toLowerCase()) && a.lang.string(c.className).trim() == this.cssClass
    }, undoToTextNode: function (a, b, e) {
      if (b.containsNode(e) || (a = b.cloneRange(), a.selectNode(e), a.isPointInRange(b.endContainer, b.endOffset) && c(b.endContainer, b.endOffset) && (d(e, b.endContainer, b.endOffset), b.setEndAfter(e)), a.isPointInRange(b.startContainer, b.startOffset) && c(b.startContainer, b.startOffset) && (e = d(e, b.startContainer, b.startOffset))), this.similarClassRegExp && e.className && (e.className = e.className.replace(this.similarClassRegExp, "")), this.isRemovable(e)) {
        for (b = e, e = b.parentNode; b.firstChild;)e.insertBefore(b.firstChild, b);
        e.removeChild(b)
      }
    }, applyToRange: function (b) {
      var c = b.getNodes([a.TEXT_NODE]);
      if (!c.length)try {
        var d = this.createContainer(b.endContainer.ownerDocument);
        return b.surroundContents(d), void this.selectNode(b, d)
      } catch (e) {
      }
      if (b.splitBoundaries(), c = b.getNodes([a.TEXT_NODE]), c.length) {
        for (var f = 0, g = c.length; g > f; ++f)d = c[f], this.getAncestorWithClass(d) || this.applyToTextNode(d);
        b.setStart(c[0], 0), d = c[c.length - 1], b.setEnd(d, d.length), this.normalize && this.postApply(c, b)
      }
    }, undoToRange: function (b) {
      var c, d, e = b.getNodes([a.TEXT_NODE]);
      e.length ? (b.splitBoundaries(), e = b.getNodes([a.TEXT_NODE])) : (e = b.endContainer.ownerDocument.createTextNode(a.INVISIBLE_SPACE), b.insertNode(e), b.selectNode(e), e = [e]);
      for (var f = 0, g = e.length; g > f; ++f)c = e[f], (d = this.getAncestorWithClass(c)) && this.undoToTextNode(c, b, d);
      1 == g ? this.selectNode(b, e[0]) : (b.setStart(e[0], 0), c = e[e.length - 1], b.setEnd(c, c.length), this.normalize && this.postApply(e, b))
    }, selectNode: function (b, c) {
      var d = c.nodeType === a.ELEMENT_NODE, e = "canHaveHTML"in c ? c.canHaveHTML : !0, f = d ? c.innerHTML : c.data;
      if ((f = "" === f || f === a.INVISIBLE_SPACE) && d && e)try {
        c.innerHTML = a.INVISIBLE_SPACE
      } catch (g) {
      }
      b.selectNodeContents(c), f && d ? b.collapse(!1) : f && (b.setStartAfter(c), b.setEndAfter(c))
    }, getTextSelectedByRange: function (a, b) {
      var c = b.cloneRange();
      c.selectNodeContents(a);
      var d = c.intersection(b), d = d ? d.toString() : "";
      return c.detach(), d
    }, isAppliedToRange: function (b) {
      var c, d = [], e = b.getNodes([a.TEXT_NODE]);
      if (!e.length)return (c = this.getAncestorWithClass(b.startContainer)) ? [c] : !1;
      for (var f, g = 0, h = e.length; h > g; ++g) {
        if (f = this.getTextSelectedByRange(e[g], b), c = this.getAncestorWithClass(e[g]), "" != f && !c)return !1;
        d.push(c)
      }
      return d
    }, toggleRange: function (a) {
      this.isAppliedToRange(a) ? this.undoToRange(a) : this.applyToRange(a)
    }
  }, a.selection.HTMLApplier = f
}(wysihtml5, rangy), wysihtml5.Commands = Base.extend({
  constructor: function (a) {
    this.editor = a, this.composer = a.composer, this.doc = this.composer.doc
  }, support: function (a) {
    return wysihtml5.browser.supportsCommand(this.doc, a)
  }, exec: function (a, b) {
    var c = wysihtml5.commands[a], d = wysihtml5.lang.array(arguments).get(), e = c && c.exec, f = null;
    if (this.editor.fire("beforecommand:composer"), e)d.unshift(this.composer), f = e.apply(c, d); else try {
      f = this.doc.execCommand(a, !1, b)
    } catch (g) {
    }
    return this.editor.fire("aftercommand:composer"), f
  }, state: function (a) {
    var b = wysihtml5.commands[a], c = wysihtml5.lang.array(arguments).get(), d = b && b.state;
    if (d)return c.unshift(this.composer), d.apply(b, c);
    try {
      return this.doc.queryCommandState(a)
    } catch (e) {
      return !1
    }
  }, value: function (a) {
    var b = wysihtml5.commands[a], c = b && b.value;
    if (c)return c.call(b, this.composer, a);
    try {
      return this.doc.queryCommandValue(a)
    } catch (d) {
      return null
    }
  }
}), function (a) {
  a.commands.bold = {
    exec: function (b, c) {
      return a.commands.formatInline.exec(b, c, "b")
    }, state: function (b, c) {
      return a.commands.formatInline.state(b, c, "b")
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  function b(b, f) {
    var g, h, i, j = b.doc, k = "_wysihtml5-temp-" + +new Date, l = 0;
    for (a.commands.formatInline.exec(b, c, d, k, /non-matching-class/g), g = j.querySelectorAll(d + "." + k), k = g.length; k > l; l++)for (i in h = g[l], h.removeAttribute("class"), f)h.setAttribute(i, f[i]);
    l = h, 1 === k && (i = e.getTextContent(h), k = !!h.querySelector("*"), i = "" === i || i === a.INVISIBLE_SPACE, !k && i && (e.setTextContent(h, f.text || h.href), j = j.createTextNode(" "), b.selection.setAfter(h), b.selection.insertNode(j), l = j)), b.selection.setAfter(l)
  }

  var c, d = "A", e = a.dom;
  a.commands.createLink = {
    exec: function (a, c, d) {
      var f = this.state(a, c);
      f ? a.selection.executeAndRestore(function () {
        for (var a, b, c, d = f.length, g = 0; d > g; g++)a = f[g], b = e.getParentElement(a, {nodeName: "code"}), c = e.getTextContent(a), c.match(e.autoLink.URL_REG_EXP) && !b ? e.renameElement(a, "code") : e.replaceWithChildNodes(a)
      }) : (d = "object" == typeof d ? d : {href: d}, b(a, d))
    }, state: function (b, c) {
      return a.commands.formatInline.state(b, c, "A")
    }, value: function () {
      return c
    }
  }
}(wysihtml5), function (a) {
  var b = /wysiwyg-font-size-[a-z\-]+/g;
  a.commands.fontSize = {
    exec: function (c, d, e) {
      return a.commands.formatInline.exec(c, d, "span", "wysiwyg-font-size-" + e, b)
    }, state: function (c, d, e) {
      return a.commands.formatInline.state(c, d, "span", "wysiwyg-font-size-" + e, b)
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  var b = /wysiwyg-color-[a-z]+/g;
  a.commands.foreColor = {
    exec: function (c, d, e) {
      return a.commands.formatInline.exec(c, d, "span", "wysiwyg-color-" + e, b)
    }, state: function (c, d, e) {
      return a.commands.formatInline.state(c, d, "span", "wysiwyg-color-" + e, b)
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  function b(b) {
    for (b = b.previousSibling; b && b.nodeType === a.TEXT_NODE && !a.lang.string(b.data).trim();)b = b.previousSibling;
    return b
  }

  function c(b) {
    for (b = b.nextSibling; b && b.nodeType === a.TEXT_NODE && !a.lang.string(b.data).trim();)b = b.nextSibling;
    return b
  }

  function d(a) {
    return "BR" === a.nodeName || "block" === g.getStyle("display").from(a) ? !0 : !1
  }

  function e(b, c, d, e) {
    if (e)var f = g.observe(b, "DOMNodeInserted", function (b) {
      var c, b = b.target;
      b.nodeType === a.ELEMENT_NODE && (c = g.getStyle("display").from(b), "inline" !== c.substr(0, 6) && (b.className += " " + e))
    });
    b.execCommand(c, !1, d), f && f.stop()
  }

  function f(a, d) {
    a.selection.selectLine(), a.selection.surround(d);
    var e = c(d), f = b(d);
    e && "BR" === e.nodeName && e.parentNode.removeChild(e), f && "BR" === f.nodeName && f.parentNode.removeChild(f), (e = d.lastChild) && "BR" === e.nodeName && e.parentNode.removeChild(e), a.selection.selectNode(d)
  }

  var g = a.dom, h = "H1 H2 H3 H4 H5 H6 P BLOCKQUOTE DIV".split(" ");
  a.commands.formatBlock = {
    exec: function (i, j, k, l, m) {
      var n, o = i.doc, p = this.state(i, j, k, l, m), k = "string" == typeof k ? k.toUpperCase() : k;
      if (p)i.selection.executeAndRestoreSimple(function () {
        m && (p.className = p.className.replace(m, ""));
        var e = !!a.lang.string(p.className).trim();
        if (e || p.nodeName !== (k || "DIV"))e && g.renameElement(p, "DIV"); else {
          var e = p, f = e.ownerDocument, h = c(e), i = b(e);
          h && !d(h) && e.parentNode.insertBefore(f.createElement("br"), h), i && !d(i) && e.parentNode.insertBefore(f.createElement("br"), e), g.replaceWithChildNodes(p)
        }
      }); else {
        if ((null === k || a.lang.array(h).contains(k)) && (n = i.selection.getSelectedNode(), p = g.getParentElement(n, {nodeName: h})))return void i.selection.executeAndRestoreSimple(function () {
          if (k && (p = g.renameElement(p, k)), l) {
            var a = p;
            a.className ? (a.className = a.className.replace(m, ""), a.className += " " + l) : a.className = l
          }
        });
        i.commands.support(j) ? e(o, j, k || "DIV", l) : (p = o.createElement(k || "DIV"), l && (p.className = l), f(i, p))
      }
    }, state: function (a, b, c, d, e) {
      return c = "string" == typeof c ? c.toUpperCase() : c, a = a.selection.getSelectedNode(), g.getParentElement(a, {
        nodeName: c,
        className: d,
        classRegExp: e
      })
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  function b(b, e, f) {
    var g = b + ":" + e;
    if (!d[g]) {
      var h = d, i = a.selection.HTMLApplier, j = c[b], b = j ? [b.toLowerCase(), j.toLowerCase()] : [b.toLowerCase()];
      h[g] = new i(b, e, f, !0)
    }
    return d[g]
  }

  var c = {strong: "b", em: "i", b: "strong", i: "em"}, d = {};
  a.commands.formatInline = {
    exec: function (a, c, d, e, f) {
      return (c = a.selection.getRange()) ? (b(d, e, f).toggleRange(c), void a.selection.setSelection(c)) : !1
    }, state: function (d, e, f, g, h) {
      var e = d.doc, i = c[f] || f;
      return !a.dom.hasElementWithTagName(e, f) && !a.dom.hasElementWithTagName(e, i) || g && !a.dom.hasElementWithClassName(e, g) ? !1 : (d = d.selection.getRange(), d ? b(f, g, h).isAppliedToRange(d) : !1)
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  a.commands.insertHTML = {
    exec: function (a, b, c) {
      a.commands.support(b) ? a.doc.execCommand(b, !1, c) : a.selection.insertHTML(c)
    }, state: function () {
      return !1
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  a.commands.insertImage = {
    exec: function (b, c, d) {
      var e, d = "object" == typeof d ? d : {src: d}, f = b.doc, c = this.state(b);
      if (c)b.selection.setBefore(c), d = c.parentNode, d.removeChild(c), a.dom.removeEmptyTextNodes(d), "A" === d.nodeName && !d.firstChild && (b.selection.setAfter(d), d.parentNode.removeChild(d)), a.quirks.redraw(b.element); else {
        c = f.createElement("IMG");
        for (e in d)c[e] = d[e];
        b.selection.insertNode(c), a.browser.hasProblemsSettingCaretAfterImg() ? (d = f.createTextNode(a.INVISIBLE_SPACE), b.selection.insertNode(d), b.selection.setAfter(d)) : b.selection.setAfter(c)
      }
    }, state: function (b) {
      var c;
      return a.dom.hasElementWithTagName(b.doc, "IMG") && (c = b.selection.getSelectedNode()) ? "IMG" === c.nodeName ? c : c.nodeType !== a.ELEMENT_NODE ? !1 : (c = b.selection.getText(), (c = a.lang.string(c).trim()) ? !1 : (b = b.selection.getNodes(a.ELEMENT_NODE, function (a) {
        return "IMG" === a.nodeName
      }), 1 !== b.length ? !1 : b[0])) : !1
    }, value: function (a) {
      return (a = this.state(a)) && a.src
    }
  }
}(wysihtml5), function (a) {
  var b = "<br>" + (a.browser.needsSpaceAfterLineBreak() ? " " : "");
  a.commands.insertLineBreak = {
    exec: function (c, d) {
      c.commands.support(d) ? (c.doc.execCommand(d, !1, null), a.browser.autoScrollsToCaret() || c.selection.scrollIntoView()) : c.commands.exec("insertHTML", b)
    }, state: function () {
      return !1
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  a.commands.insertOrderedList = {
    exec: function (b, c) {
      var d, e = b.doc, f = b.selection.getSelectedNode(), g = a.dom.getParentElement(f, {nodeName: "OL"}), h = a.dom.getParentElement(f, {nodeName: "UL"}), f = "_wysihtml5-temp-" + (new Date).getTime();
      b.commands.support(c) ? e.execCommand(c, !1, null) : g ? b.selection.executeAndRestoreSimple(function () {
        a.dom.resolveList(g)
      }) : h ? b.selection.executeAndRestoreSimple(function () {
        a.dom.renameElement(h, "ol")
      }) : (b.commands.exec("formatBlock", "div", f), d = e.querySelector("." + f), e = "" === d.innerHTML || d.innerHTML === a.INVISIBLE_SPACE, b.selection.executeAndRestoreSimple(function () {
        g = a.dom.convertToList(d, "ol")
      }), e && b.selection.selectNode(g.querySelector("li")))
    }, state: function (b) {
      return b = b.selection.getSelectedNode(), a.dom.getParentElement(b, {nodeName: "OL"})
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  a.commands.insertUnorderedList = {
    exec: function (b, c) {
      var d, e = b.doc, f = b.selection.getSelectedNode(), g = a.dom.getParentElement(f, {nodeName: "UL"}), h = a.dom.getParentElement(f, {nodeName: "OL"}), f = "_wysihtml5-temp-" + (new Date).getTime();
      b.commands.support(c) ? e.execCommand(c, !1, null) : g ? b.selection.executeAndRestoreSimple(function () {
        a.dom.resolveList(g)
      }) : h ? b.selection.executeAndRestoreSimple(function () {
        a.dom.renameElement(h, "ul")
      }) : (b.commands.exec("formatBlock", "div", f), d = e.querySelector("." + f), e = "" === d.innerHTML || d.innerHTML === a.INVISIBLE_SPACE, b.selection.executeAndRestoreSimple(function () {
        g = a.dom.convertToList(d, "ul")
      }), e && b.selection.selectNode(g.querySelector("li")))
    }, state: function (b) {
      return b = b.selection.getSelectedNode(), a.dom.getParentElement(b, {nodeName: "UL"})
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  a.commands.italic = {
    exec: function (b, c) {
      return a.commands.formatInline.exec(b, c, "i")
    }, state: function (b, c) {
      return a.commands.formatInline.state(b, c, "i")
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  var b = /wysiwyg-text-align-[a-z]+/g;
  a.commands.justifyCenter = {
    exec: function (c) {
      return a.commands.formatBlock.exec(c, "formatBlock", null, "wysiwyg-text-align-center", b)
    }, state: function (c) {
      return a.commands.formatBlock.state(c, "formatBlock", null, "wysiwyg-text-align-center", b)
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  var b = /wysiwyg-text-align-[a-z]+/g;
  a.commands.justifyLeft = {
    exec: function (c) {
      return a.commands.formatBlock.exec(c, "formatBlock", null, "wysiwyg-text-align-left", b)
    }, state: function (c) {
      return a.commands.formatBlock.state(c, "formatBlock", null, "wysiwyg-text-align-left", b)
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  var b = /wysiwyg-text-align-[a-z]+/g;
  a.commands.justifyRight = {
    exec: function (c) {
      return a.commands.formatBlock.exec(c, "formatBlock", null, "wysiwyg-text-align-right", b)
    }, state: function (c) {
      return a.commands.formatBlock.state(c, "formatBlock", null, "wysiwyg-text-align-right", b)
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  a.commands.underline = {
    exec: function (b, c) {
      return a.commands.formatInline.exec(b, c, "u")
    }, state: function (b, c) {
      return a.commands.formatInline.state(b, c, "u")
    }, value: function () {
    }
  }
}(wysihtml5), function (a) {
  var b = '<span id="_wysihtml5-undo" class="_wysihtml5-temp">' + a.INVISIBLE_SPACE + "</span>", c = '<span id="_wysihtml5-redo" class="_wysihtml5-temp">' + a.INVISIBLE_SPACE + "</span>", d = a.dom;
  a.UndoManager = a.lang.Dispatcher.extend({
    constructor: function (a) {
      this.editor = a, this.composer = a.composer, this.element = this.composer.element, this.history = [this.composer.getValue()], this.position = 1, this.composer.commands.support("insertHTML") && this._observe()
    }, _observe: function () {
      var e, f = this, g = this.composer.sandbox.getDocument();
      if (d.observe(this.element, "keydown", function (a) {
          if (!a.altKey && (a.ctrlKey || a.metaKey)) {
            var b = a.keyCode, c = 90 === b && a.shiftKey || 89 === b;
            90 !== b || a.shiftKey ? c && (f.redo(), a.preventDefault()) : (f.undo(), a.preventDefault())
          }
        }), d.observe(this.element, "keydown", function (a) {
          a = a.keyCode, a !== e && (e = a, (8 === a || 46 === a) && f.transact())
        }), a.browser.hasUndoInContextMenu()) {
        var h, i, j = function () {
          for (var a; a = g.querySelector("._wysihtml5-temp");)a.parentNode.removeChild(a);
          clearInterval(h)
        };
        d.observe(this.element, "contextmenu", function () {
          j(), f.composer.selection.executeAndRestoreSimple(function () {
            f.element.lastChild && f.composer.selection.setAfter(f.element.lastChild), g.execCommand("insertHTML", !1, b), g.execCommand("insertHTML", !1, c), g.execCommand("undo", !1, null)
          }), h = setInterval(function () {
            g.getElementById("_wysihtml5-redo") ? (j(), f.redo()) : g.getElementById("_wysihtml5-undo") || (j(), f.undo())
          }, 400), i || (i = !0, d.observe(document, "mousedown", j), d.observe(g, ["mousedown", "paste", "cut", "copy"], j))
        })
      }
      this.editor.observe("newword:composer", function () {
        f.transact()
      }).observe("beforecommand:composer", function () {
        f.transact()
      })
    }, transact: function () {
      var a = this.history[this.position - 1], b = this.composer.getValue();
      b != a && (40 < (this.history.length = this.position) && (this.history.shift(), this.position--), this.position++, this.history.push(b))
    }, undo: function () {
      this.transact(), 1 >= this.position || (this.set(this.history[--this.position - 1]), this.editor.fire("undo:composer"))
    }, redo: function () {
      this.position >= this.history.length || (this.set(this.history[++this.position - 1]), this.editor.fire("redo:composer"))
    }, set: function (a) {
      this.composer.setValue(a), this.editor.focus(!0)
    }
  })
}(wysihtml5), wysihtml5.views.View = Base.extend({
  constructor: function (a, b, c) {
    this.parent = a, this.element = b, this.config = c, this._observeViewChange()
  }, _observeViewChange: function () {
    var a = this;
    this.parent.observe("beforeload", function () {
      a.parent.observe("change_view", function (b) {
        b === a.name ? (a.parent.currentView = a, a.show(), setTimeout(function () {
          a.focus()
        }, 0)) : a.hide()
      })
    })
  }, focus: function () {
    if (this.element.ownerDocument.querySelector(":focus") !== this.element)try {
      this.element.focus()
    } catch (a) {
    }
  }, hide: function () {
    this.element.style.display = "none"
  }, show: function () {
    this.element.style.display = ""
  }, disable: function () {
    this.element.setAttribute("disabled", "disabled")
  }, enable: function () {
    this.element.removeAttribute("disabled")
  }
}), function (a) {
  var b = a.dom, c = a.browser;
  a.views.Composer = a.views.View.extend({
    name: "composer", CARET_HACK: "<br>", constructor: function (a, b, c) {
      this.base(a, b, c), this.textarea = this.parent.textarea, this._initSandbox()
    }, clear: function () {
      this.element.innerHTML = c.displaysCaretInEmptyContentEditableCorrectly() ? "" : this.CARET_HACK
    }, getValue: function (b) {
      var c = this.isEmpty() ? "" : a.quirks.getCorrectInnerHTML(this.element);
      return b && (c = this.parent.parse(c)), c = a.lang.string(c).replace(a.INVISIBLE_SPACE).by("")
    }, setValue: function (a, b) {
      b && (a = this.parent.parse(a)), this.element.innerHTML = a
    }, show: function () {
      this.iframe.style.display = this._displayStyle || "", this.disable(), this.enable()
    }, hide: function () {
      this._displayStyle = b.getStyle("display").from(this.iframe), "none" === this._displayStyle && (this._displayStyle = null), this.iframe.style.display = "none"
    }, disable: function () {
      this.element.removeAttribute("contentEditable"), this.base()
    }, enable: function () {
      this.element.setAttribute("contentEditable", "true"), this.base()
    }, focus: function (b) {
      a.browser.doesAsyncFocus() && this.hasPlaceholderSet() && this.clear(), this.base();
      var c = this.element.lastChild;
      b && c && ("BR" === c.nodeName ? this.selection.setBefore(this.element.lastChild) : this.selection.setAfter(this.element.lastChild))
    }, getTextContent: function () {
      return b.getTextContent(this.element)
    }, hasPlaceholderSet: function () {
      return this.getTextContent() == this.textarea.element.getAttribute("placeholder")
    }, isEmpty: function () {
      var a = this.element.innerHTML;
      return "" === a || a === this.CARET_HACK || this.hasPlaceholderSet() || "" === this.getTextContent() && !this.element.querySelector("blockquote, ul, ol, img, embed, object, table, iframe, svg, video, audio, button, input, select, textarea")
    }, _initSandbox: function () {
      var a = this;
      this.sandbox = new b.Sandbox(function () {
        a._create()
      }, {stylesheets: this.config.stylesheets}), this.iframe = this.sandbox.getIframe();
      var c = document.createElement("input");
      c.type = "hidden", c.name = "_wysihtml5_mode", c.value = 1;
      var d = this.textarea.element;
      b.insert(this.iframe).after(d), b.insert(c).after(d)
    }, _create: function () {
      var d = this;
      this.doc = this.sandbox.getDocument(), this.element = this.doc.body, this.textarea = this.parent.textarea, this.element.innerHTML = this.textarea.getValue(!0), this.enable(), this.selection = new a.Selection(this.parent), this.commands = new a.Commands(this.parent), b.copyAttributes("className spellcheck title lang dir accessKey".split(" ")).from(this.textarea.element).to(this.element), b.addClass(this.element, this.config.composerClassName), this.config.style && this.style(), this.observe();
      var e = this.config.name;
      e && (b.addClass(this.element, e), b.addClass(this.iframe, e)), (e = "string" == typeof this.config.placeholder ? this.config.placeholder : this.textarea.element.getAttribute("placeholder")) && b.simulatePlaceholder(this.parent, this, e), this.commands.exec("styleWithCSS", !1), this._initAutoLinking(), this._initObjectResizing(), this._initUndoManager(), (this.textarea.element.hasAttribute("autofocus") || document.querySelector(":focus") == this.textarea.element) && setTimeout(function () {
        d.focus()
      }, 100), a.quirks.insertLineBreakOnReturn(this), c.clearsContentEditableCorrectly() || a.quirks.ensureProperClearing(this), c.clearsListsInContentEditableCorrectly() || a.quirks.ensureProperClearingOfLists(this), this.initSync && this.config.sync && this.initSync(), this.textarea.hide(), this.parent.fire("beforeload").fire("load")
    }, _initAutoLinking: function () {
      var d = this, e = c.canDisableAutoLinking(), f = c.doesAutoLinkingInContentEditable();
      if (e && this.commands.exec("autoUrlDetect", !1), this.config.autoLink) {
        (!f || f && e) && this.parent.observe("newword:composer", function () {
          d.selection.executeAndRestore(function (a, c) {
            b.autoLink(c.parentNode)
          })
        });
        var g = this.sandbox.getDocument().getElementsByTagName("a"), h = b.autoLink.URL_REG_EXP, i = function (c) {
          return c = a.lang.string(b.getTextContent(c)).trim(), "www." === c.substr(0, 4) && (c = "http://" + c), c
        };
        b.observe(this.element, "keydown", function (a) {
          if (g.length) {
            var c, a = d.selection.getSelectedNode(a.target.ownerDocument), e = b.getParentElement(a, {nodeName: "A"}, 4);
            e && (c = i(e), setTimeout(function () {
              var a = i(e);
              a !== c && a.match(h) && e.setAttribute("href", a)
            }, 0))
          }
        })
      }
    }, _initObjectResizing: function () {
      var d = ["width", "height"], e = d.length, f = this.element;
      this.commands.exec("enableObjectResizing", this.config.allowObjectResizing), this.config.allowObjectResizing ? c.supportsEvent("resizeend") && b.observe(f, "resizeend", function (b) {
        for (var c, b = b.target || b.srcElement, g = b.style, h = 0; e > h; h++)c = d[h], g[c] && (b.setAttribute(c, parseInt(g[c], 10)), g[c] = "");
        a.quirks.redraw(f)
      }) : c.supportsEvent("resizestart") && b.observe(f, "resizestart", function (a) {
        a.preventDefault()
      })
    }, _initUndoManager: function () {
      new a.UndoManager(this.parent)
    }
  })
}(wysihtml5), function (a) {
  var b = a.dom, c = document, d = window, e = c.createElement("div"), f = "background-color color cursor font-family font-size font-style font-variant font-weight line-height letter-spacing text-align text-decoration text-indent text-rendering word-break word-wrap word-spacing".split(" "), g = "background-color border-collapse border-bottom-color border-bottom-style border-bottom-width border-left-color border-left-style border-left-width border-right-color border-right-style border-right-width border-top-color border-top-style border-top-width clear display float margin-bottom margin-left margin-right margin-top outline-color outline-offset outline-width outline-style padding-left padding-right padding-top padding-bottom position top left right bottom z-index vertical-align text-align -webkit-box-sizing -moz-box-sizing -ms-box-sizing box-sizing -webkit-box-shadow -moz-box-shadow -ms-box-shadow box-shadow -webkit-border-top-right-radius -moz-border-radius-topright border-top-right-radius -webkit-border-bottom-right-radius -moz-border-radius-bottomright border-bottom-right-radius -webkit-border-bottom-left-radius -moz-border-radius-bottomleft border-bottom-left-radius -webkit-border-top-left-radius -moz-border-radius-topleft border-top-left-radius width height".split(" "), h = "width height top left right bottom".split(" "), i = ["html             { height: 100%; }", "body             { min-height: 100%; padding: 0; margin: 0; margin-top: -1px; padding-top: 1px; }", "._wysihtml5-temp { display: none; }", a.browser.isGecko ? "body.placeholder { color: graytext !important; }" : "body.placeholder { color: #a9a9a9 !important; }", "body[disabled]   { background-color: #eee !important; color: #999 !important; cursor: default !important; }", "img:-moz-broken  { -moz-force-broken-image-icon: 1; height: 24px; width: 24px; }"], j = function (a) {
    if (a.setActive)try {
      a.setActive()
    } catch (e) {
    } else {
      var f = a.style, g = c.documentElement.scrollTop || c.body.scrollTop, h = c.documentElement.scrollLeft || c.body.scrollLeft, f = {
        position: f.position,
        top: f.top,
        left: f.left,
        WebkitUserSelect: f.WebkitUserSelect
      };
      b.setStyles({
        position: "absolute",
        top: "-99999px",
        left: "-99999px",
        WebkitUserSelect: "none"
      }).on(a), a.focus(), b.setStyles(f).on(a), d.scrollTo && d.scrollTo(h, g)
    }
  };
  a.views.Composer.prototype.style = function () {
    var k = this, l = c.querySelector(":focus"), m = this.textarea.element, n = m.hasAttribute("placeholder"), o = n && m.getAttribute("placeholder");
    this.focusStylesHost = this.focusStylesHost || e.cloneNode(!1), this.blurStylesHost = this.blurStylesHost || e.cloneNode(!1), n && m.removeAttribute("placeholder"), m === l && m.blur(), b.copyStyles(g).from(m).to(this.iframe).andTo(this.blurStylesHost), b.copyStyles(f).from(m).to(this.element).andTo(this.blurStylesHost), b.insertCSS(i).into(this.element.ownerDocument), j(m), b.copyStyles(g).from(m).to(this.focusStylesHost), b.copyStyles(f).from(m).to(this.focusStylesHost);
    var p = a.lang.array(g).without(["display"]);
    if (l ? l.focus() : m.blur(), n && m.setAttribute("placeholder", o), !a.browser.hasCurrentStyleProperty())var q = b.observe(d, "resize", function () {
      if (b.contains(document.documentElement, k.iframe)) {
        var a = b.getStyle("display").from(m), c = b.getStyle("display").from(k.iframe);
        m.style.display = "", k.iframe.style.display = "none", b.copyStyles(h).from(m).to(k.iframe).andTo(k.focusStylesHost).andTo(k.blurStylesHost), k.iframe.style.display = c, m.style.display = a
      } else q.stop()
    });
    return this.parent.observe("focus:composer", function () {
      b.copyStyles(p).from(k.focusStylesHost).to(k.iframe), b.copyStyles(f).from(k.focusStylesHost).to(k.element)
    }), this.parent.observe("blur:composer", function () {
      b.copyStyles(p).from(k.blurStylesHost).to(k.iframe), b.copyStyles(f).from(k.blurStylesHost).to(k.element)
    }), this
  }
}(wysihtml5), function (a) {
  var b = a.dom, c = a.browser, d = {66: "bold", 73: "italic", 85: "underline"};
  a.views.Composer.prototype.observe = function () {
    var e = this, f = this.getValue(), g = this.sandbox.getIframe(), h = this.element, i = c.supportsEventsInIframeCorrectly() ? h : this.sandbox.getWindow(), j = c.supportsEvent("drop") ? ["drop", "paste"] : ["dragdrop", "paste"];
    b.observe(g, "DOMNodeRemoved", function () {
      clearInterval(k), e.parent.fire("destroy:composer")
    });
    var k = setInterval(function () {
      b.contains(document.documentElement, g) || (clearInterval(k), e.parent.fire("destroy:composer"))
    }, 250);
    b.observe(i, "focus", function () {
      e.parent.fire("focus").fire("focus:composer"), setTimeout(function () {
        f = e.getValue()
      }, 0)
    }), b.observe(i, "blur", function () {
      f !== e.getValue() && e.parent.fire("change").fire("change:composer"), e.parent.fire("blur").fire("blur:composer")
    }), a.browser.isIos() && b.observe(h, "blur", function () {
      var a = h.ownerDocument.createElement("input"), b = document.documentElement.scrollTop || document.body.scrollTop, c = document.documentElement.scrollLeft || document.body.scrollLeft;
      try {
        e.selection.insertNode(a)
      } catch (d) {
        h.appendChild(a)
      }
      a.focus(), a.parentNode.removeChild(a), window.scrollTo(c, b)
    }), b.observe(h, "dragenter", function () {
      e.parent.fire("unset_placeholder")
    }), c.firesOnDropOnlyWhenOnDragOverIsCancelled() && b.observe(h, ["dragover", "dragenter"], function (a) {
      a.preventDefault()
    }), b.observe(h, j, function (a) {
      var b, d = a.dataTransfer;
      d && c.supportsDataTransfer() && (b = d.getData("text/html") || d.getData("text/plain")), b ? (h.focus(), e.commands.exec("insertHTML", b), e.parent.fire("paste").fire("paste:composer"), a.stopPropagation(), a.preventDefault()) : setTimeout(function () {
        e.parent.fire("paste").fire("paste:composer")
      }, 0)
    }), b.observe(h, "keyup", function (b) {
      b = b.keyCode, (b === a.SPACE_KEY || b === a.ENTER_KEY) && e.parent.fire("newword:composer")
    }), this.parent.observe("paste:composer", function () {
      setTimeout(function () {
        e.parent.fire("newword:composer")
      }, 0)
    }), c.canSelectImagesInContentEditable() || b.observe(h, "mousedown", function (a) {
      var b = a.target;
      "IMG" === b.nodeName && (e.selection.selectNode(b), a.preventDefault())
    }), b.observe(h, "keydown", function (a) {
      var b = d[a.keyCode];
      (a.ctrlKey || a.metaKey) && !a.altKey && b && (e.commands.exec(b), a.preventDefault())
    }), b.observe(h, "keydown", function (b) {
      var c = e.selection.getSelectedNode(!0), d = b.keyCode;
      !c || "IMG" !== c.nodeName || d !== a.BACKSPACE_KEY && d !== a.DELETE_KEY || (d = c.parentNode, d.removeChild(c), "A" === d.nodeName && !d.firstChild && d.parentNode.removeChild(d), setTimeout(function () {
        a.quirks.redraw(h)
      }, 0), b.preventDefault())
    });
    var l = {IMG: "Image: ", A: "Link: "};
    b.observe(h, "mouseover", function (a) {
      var a = a.target, b = a.nodeName;
      !("A" !== b && "IMG" !== b) && !a.hasAttribute("title") && (b = l[b] + (a.getAttribute("href") || a.getAttribute("src")), a.setAttribute("title", b))
    })
  }
}(wysihtml5), function (a) {
  a.views.Synchronizer = Base.extend({
    constructor: function (a, b, c) {
      this.editor = a, this.textarea = b, this.composer = c, this._observe()
    }, fromComposerToTextarea: function (b) {
      this.textarea.setValue(a.lang.string(this.composer.getValue()).trim(), b)
    }, fromTextareaToComposer: function (a) {
      var b = this.textarea.getValue();
      b ? this.composer.setValue(b, a) : (this.composer.clear(), this.editor.fire("set_placeholder"))
    }, sync: function (a) {
      "textarea" === this.editor.currentView.name ? this.fromTextareaToComposer(a) : this.fromComposerToTextarea(a)
    }, _observe: function () {
      var b, c = this, d = this.textarea.element.form, e = function () {
        b = setInterval(function () {
          c.fromComposerToTextarea()
        }, 400)
      }, f = function () {
        clearInterval(b), b = null
      };
      e(), d && (a.dom.observe(d, "submit", function () {
        c.sync(!0)
      }), a.dom.observe(d, "reset", function () {
        setTimeout(function () {
          c.fromTextareaToComposer()
        }, 0)
      })), this.editor.observe("change_view", function (a) {
        "composer" !== a || b ? "textarea" === a && (c.fromComposerToTextarea(!0), f()) : (c.fromTextareaToComposer(!0), e())
      }), this.editor.observe("destroy:composer", f)
    }
  })
}(wysihtml5), wysihtml5.views.Textarea = wysihtml5.views.View.extend({
  name: "textarea",
  constructor: function (a, b, c) {
    this.base(a, b, c), this._observe()
  },
  clear: function () {
    this.element.value = ""
  },
  getValue: function (a) {
    var b = this.isEmpty() ? "" : this.element.value;
    return a && (b = this.parent.parse(b)), b
  },
  setValue: function (a, b) {
    b && (a = this.parent.parse(a)), this.element.value = a
  },
  hasPlaceholderSet: function () {
    var a = wysihtml5.browser.supportsPlaceholderAttributeOn(this.element), b = this.element.getAttribute("placeholder") || null, c = this.element.value;
    return a && !c || c === b
  },
  isEmpty: function () {
    return !wysihtml5.lang.string(this.element.value).trim() || this.hasPlaceholderSet()
  },
  _observe: function () {
    var a = this.element, b = this.parent, c = {
      focusin: "focus",
      focusout: "blur"
    }, d = wysihtml5.browser.supportsEvent("focusin") ? ["focusin", "focusout", "change"] : ["focus", "blur", "change"];
    b.observe("beforeload", function () {
      wysihtml5.dom.observe(a, d, function (a) {
        a = c[a.type] || a.type, b.fire(a).fire(a + ":textarea")
      }), wysihtml5.dom.observe(a, ["paste", "drop"], function () {
        setTimeout(function () {
          b.fire("paste").fire("paste:textarea")
        }, 0)
      })
    })
  }
}), function (a) {
  var b = a.dom;
  a.toolbar.Dialog = a.lang.Dispatcher.extend({
    constructor: function (a, b) {
      this.link = a, this.container = b
    }, _observe: function () {
      if (!this._observed) {
        var c = this, d = function (a) {
          var b = c._serialize();
          b == c.elementToChange ? c.fire("edit", b) : c.fire("save", b), c.hide(), a.preventDefault(), a.stopPropagation()
        };
        b.observe(c.link, "click", function () {
          b.hasClass(c.link, "wysihtml5-command-dialog-opened") && setTimeout(function () {
            c.hide()
          }, 0)
        }), b.observe(this.container, "keydown", function (b) {
          var e = b.keyCode;
          e === a.ENTER_KEY && d(b), e === a.ESCAPE_KEY && c.hide()
        }), b.delegate(this.container, "[data-wysihtml5-dialog-action=save]", "click", d), b.delegate(this.container, "[data-wysihtml5-dialog-action=cancel]", "click", function (a) {
          c.fire("cancel"), c.hide(), a.preventDefault(), a.stopPropagation()
        });
        for (var e = this.container.querySelectorAll("input, select, textarea"), f = 0, g = e.length, h = function () {
          clearInterval(c.interval)
        }; g > f; f++)b.observe(e[f], "change", h);
        this._observed = !0
      }
    }, _serialize: function () {
      for (var a = this.elementToChange || {}, b = this.container.querySelectorAll("[data-wysihtml5-dialog-field]"), c = b.length, d = 0; c > d; d++)a[b[d].getAttribute("data-wysihtml5-dialog-field")] = b[d].value;
      return a
    }, _interpolate: function (a) {
      for (var b, c, d = document.querySelector(":focus"), e = this.container.querySelectorAll("[data-wysihtml5-dialog-field]"), f = e.length, g = 0; f > g; g++)b = e[g], b !== d && !(a && "hidden" === b.type) && (c = b.getAttribute("data-wysihtml5-dialog-field"), c = this.elementToChange ? this.elementToChange[c] || "" : b.defaultValue, b.value = c)
    }, show: function (a) {
      var c = this, d = this.container.querySelector("input, select, textarea");
      if (this.elementToChange = a, this._observe(), this._interpolate(), a && (this.interval = setInterval(function () {
          c._interpolate(!0)
        }, 500)), b.addClass(this.link, "wysihtml5-command-dialog-opened"), this.container.style.display = "", this.fire("show"), d && !a)try {
        d.focus()
      } catch (e) {
      }
    }, hide: function () {
      clearInterval(this.interval), this.elementToChange = null, b.removeClass(this.link, "wysihtml5-command-dialog-opened"), this.container.style.display = "none", this.fire("hide")
    }
  })
}(wysihtml5), function (a) {
  var b = a.dom, c = {position: "relative"}, d = {
    left: 0,
    margin: 0,
    opacity: 0,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 0,
    zIndex: 1
  }, e = {
    cursor: "inherit",
    fontSize: "50px",
    height: "50px",
    marginTop: "-25px",
    outline: 0,
    padding: 0,
    position: "absolute",
    right: "-4px",
    top: "50%"
  }, f = {"x-webkit-speech": "", speech: ""};
  a.toolbar.Speech = function (g, h) {
    var i = document.createElement("input");
    if (a.browser.supportsSpeechApiOn(i)) {
      var j = document.createElement("div");
      a.lang.object(d).merge({
        width: h.offsetWidth + "px",
        height: h.offsetHeight + "px"
      }), b.insert(i).into(j), b.insert(j).into(h), b.setStyles(e).on(i), b.setAttributes(f).on(i), b.setStyles(d).on(j), b.setStyles(c).on(h), b.observe(i, "onwebkitspeechchange"in i ? "webkitspeechchange" : "speechchange", function () {
        g.execCommand("insertText", i.value), i.value = ""
      }), b.observe(i, "click", function (a) {
        b.hasClass(h, "wysihtml5-command-disabled") && a.preventDefault(), a.stopPropagation()
      })
    } else h.style.display = "none"
  }
}(wysihtml5), function (a) {
  var b = a.dom;
  a.toolbar.Toolbar = Base.extend({
    constructor: function (b, c) {
      this.editor = b, this.container = "string" == typeof c ? document.getElementById(c) : c, this.composer = b.composer, this._getLinks("command"), this._getLinks("action"), this._observe(), this.show();
      for (var d = this.container.querySelectorAll("[data-wysihtml5-command=insertSpeech]"), e = d.length, f = 0; e > f; f++)new a.toolbar.Speech(this, d[f])
    }, _getLinks: function (b) {
      for (var c, d, e, f, g, h = this[b + "Links"] = a.lang.array(this.container.querySelectorAll("[data-wysihtml5-" + b + "]")).get(), i = h.length, j = 0, k = this[b + "Mapping"] = {}; i > j; j++)c = h[j], e = c.getAttribute("data-wysihtml5-" + b), f = c.getAttribute("data-wysihtml5-" + b + "-value"), d = this.container.querySelector("[data-wysihtml5-" + b + "-group='" + e + "']"), g = this._getDialog(c, e), k[e + ":" + f] = {
        link: c,
        group: d,
        name: e,
        value: f,
        dialog: g,
        state: !1
      }
    }, _getDialog: function (b, c) {
      var d, e, f = this, g = this.container.querySelector("[data-wysihtml5-dialog='" + c + "']");
      return g && (d = new a.toolbar.Dialog(b, g), d.observe("show", function () {
        e = f.composer.selection.getBookmark(), f.editor.fire("show:dialog", {
          command: c,
          dialogContainer: g,
          commandLink: b
        })
      }), d.observe("save", function (a) {
        e && f.composer.selection.setBookmark(e), f._execCommand(c, a), f.editor.fire("save:dialog", {
          command: c,
          dialogContainer: g,
          commandLink: b
        })
      }), d.observe("cancel", function () {
        f.editor.focus(!1), f.editor.fire("cancel:dialog", {command: c, dialogContainer: g, commandLink: b})
      })), d
    }, execCommand: function (a, b) {
      if (!this.commandsDisabled) {
        var c = this.commandMapping[a + ":" + b];
        c && c.dialog && !c.state ? c.dialog.show() : this._execCommand(a, b)
      }
    }, _execCommand: function (a, b) {
      this.editor.focus(!1), this.composer.commands.exec(a, b), this._updateLinkStates()
    }, execAction: function (a) {
      var b = this.editor;
      switch (a) {
        case"change_view":
          b.currentView === b.textarea ? b.fire("change_view", "composer") : b.fire("change_view", "textarea")
      }
    }, _observe: function () {
      for (var a = this, c = this.editor, d = this.container, e = this.commandLinks.concat(this.actionLinks), f = e.length, g = 0; f > g; g++)b.setAttributes({
        href: "javascript:;",
        unselectable: "on"
      }).on(e[g]);
      b.delegate(d, "[data-wysihtml5-command]", "mousedown", function (a) {
        a.preventDefault()
      }), b.delegate(d, "[data-wysihtml5-command]", "click", function (b) {
        var c = this.getAttribute("data-wysihtml5-command"), d = this.getAttribute("data-wysihtml5-command-value");
        a.execCommand(c, d), b.preventDefault()
      }), b.delegate(d, "[data-wysihtml5-action]", "click", function (b) {
        var c = this.getAttribute("data-wysihtml5-action");
        a.execAction(c), b.preventDefault()
      }), c.observe("focus:composer", function () {
        a.bookmark = null, clearInterval(a.interval), a.interval = setInterval(function () {
          a._updateLinkStates()
        }, 500)
      }), c.observe("blur:composer", function () {
        clearInterval(a.interval)
      }), c.observe("destroy:composer", function () {
        clearInterval(a.interval)
      }), c.observe("change_view", function (c) {
        setTimeout(function () {
          a.commandsDisabled = "composer" !== c, a._updateLinkStates(), a.commandsDisabled ? b.addClass(d, "wysihtml5-commands-disabled") : b.removeClass(d, "wysihtml5-commands-disabled")
        }, 0)
      })
    }, _updateLinkStates: function () {
      var c, d, e, f = this.commandMapping, g = this.actionMapping;
      for (c in f)e = f[c], this.commandsDisabled ? (d = !1, b.removeClass(e.link, "wysihtml5-command-active"), e.group && b.removeClass(e.group, "wysihtml5-command-active"), e.dialog && e.dialog.hide()) : (d = this.composer.commands.state(e.name, e.value), a.lang.object(d).isArray() && (d = 1 === d.length ? d[0] : !0), b.removeClass(e.link, "wysihtml5-command-disabled"), e.group && b.removeClass(e.group, "wysihtml5-command-disabled")), e.state !== d && ((e.state = d) ? (b.addClass(e.link, "wysihtml5-command-active"), e.group && b.addClass(e.group, "wysihtml5-command-active"), e.dialog && ("object" == typeof d ? e.dialog.show(d) : e.dialog.hide())) : (b.removeClass(e.link, "wysihtml5-command-active"), e.group && b.removeClass(e.group, "wysihtml5-command-active"), e.dialog && e.dialog.hide()));
      for (c in g)f = g[c], "change_view" === f.name && (f.state = this.editor.currentView === this.editor.textarea, f.state ? b.addClass(f.link, "wysihtml5-action-active") : b.removeClass(f.link, "wysihtml5-action-active"))
    }, show: function () {
      this.container.style.display = ""
    }, hide: function () {
      this.container.style.display = "none"
    }
  })
}(wysihtml5), function (a) {
  var b = {
    name: void 0,
    style: !0,
    toolbar: void 0,
    autoLink: !0,
    parserRules: {tags: {br: {}, span: {}, div: {}, p: {}}, classes: {}},
    parser: a.dom.parse,
    composerClassName: "wysihtml5-editor",
    bodyClassName: "wysihtml5-supported",
    stylesheets: [],
    placeholderText: void 0,
    allowObjectResizing: !0,
    supportTouchDevices: !0
  };
  a.Editor = a.lang.Dispatcher.extend({
    constructor: function (c, d) {
      if (this.textareaElement = "string" == typeof c ? document.getElementById(c) : c, this.config = a.lang.object({}).merge(b).merge(d).get(), this.currentView = this.textarea = new a.views.Textarea(this, this.textareaElement, this.config), this._isCompatible = a.browser.supported(), !this._isCompatible || !this.config.supportTouchDevices && a.browser.isTouchDevice()) {
        var e = this;
        setTimeout(function () {
          e.fire("beforeload").fire("load")
        }, 0)
      } else {
        a.dom.addClass(document.body, this.config.bodyClassName), this.currentView = this.composer = new a.views.Composer(this, this.textareaElement, this.config), "function" == typeof this.config.parser && this._initParser(), this.observe("beforeload", function () {
          this.synchronizer = new a.views.Synchronizer(this, this.textarea, this.composer), this.config.toolbar && (this.toolbar = new a.toolbar.Toolbar(this, this.config.toolbar))
        });
        try {
        } catch (f) {
        }
      }
    }, isCompatible: function () {
      return this._isCompatible
    }, clear: function () {
      return this.currentView.clear(), this
    }, getValue: function (a) {
      return this.currentView.getValue(a)
    }, setValue: function (a, b) {
      return a ? (this.currentView.setValue(a, b), this) : this.clear()
    }, focus: function (a) {
      return this.currentView.focus(a), this
    }, disable: function () {
      return this.currentView.disable(), this
    }, enable: function () {
      return this.currentView.enable(), this
    }, isEmpty: function () {
      return this.currentView.isEmpty()
    }, hasPlaceholderSet: function () {
      return this.currentView.hasPlaceholderSet()
    }, parse: function (b) {
      var c = this.config.parser(b, this.config.parserRules, this.composer.sandbox.getDocument(), !0);
      return "object" == typeof b && a.quirks.redraw(b), c
    }, _initParser: function () {
      this.observe("paste:composer", function () {
        var b = this;
        b.composer.selection.executeAndRestore(function () {
          a.quirks.cleanPastedHTML(b.composer.element), b.parse(b.composer.element)
        }, !0)
      }), this.observe("paste:textarea", function () {
        this.textarea.setValue(this.parse(this.textarea.getValue()))
      })
    }
  })
}(wysihtml5);
var Handlebars = function () {
  var a = function () {
    "use strict";
    function a(a) {
      this.string = a
    }

    var b;
    return a.prototype.toString = function () {
      return "" + this.string
    }, b = a
  }(), b = function (a) {
    "use strict";
    function b(a) {
      return h[a] || "&amp;"
    }

    function c(a, b) {
      for (var c in b)Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
    }

    function d(a) {
      return a instanceof g ? a.toString() : a || 0 === a ? (a = "" + a, j.test(a) ? a.replace(i, b) : a) : ""
    }

    function e(a) {
      return a || 0 === a ? m(a) && 0 === a.length ? !0 : !1 : !0
    }

    var f = {}, g = a, h = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    }, i = /[&<>"'`]/g, j = /[&<>"'`]/;
    f.extend = c;
    var k = Object.prototype.toString;
    f.toString = k;
    var l = function (a) {
      return "function" == typeof a
    };
    l(/x/) && (l = function (a) {
      return "function" == typeof a && "[object Function]" === k.call(a)
    });
    var l;
    f.isFunction = l;
    var m = Array.isArray || function (a) {
        return a && "object" == typeof a ? "[object Array]" === k.call(a) : !1
      };
    return f.isArray = m, f.escapeExpression = d, f.isEmpty = e, f
  }(a), c = function () {
    "use strict";
    function a(a, b) {
      var d;
      b && b.firstLine && (d = b.firstLine, a += " - " + d + ":" + b.firstColumn);
      for (var e = Error.prototype.constructor.call(this, a), f = 0; f < c.length; f++)this[c[f]] = e[c[f]];
      d && (this.lineNumber = d, this.column = b.firstColumn)
    }

    var b, c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    return a.prototype = new Error, b = a
  }(), d = function (a, b) {
    "use strict";
    function c(a, b) {
      this.helpers = a || {}, this.partials = b || {}, d(this)
    }

    function d(a) {
      a.registerHelper("helperMissing", function (a) {
        if (2 === arguments.length)return void 0;
        throw new h("Missing helper: '" + a + "'")
      }), a.registerHelper("blockHelperMissing", function (b, c) {
        var d = c.inverse || function () {
          }, e = c.fn;
        return m(b) && (b = b.call(this)), b === !0 ? e(this) : b === !1 || null == b ? d(this) : l(b) ? b.length > 0 ? a.helpers.each(b, c) : d(this) : e(b)
      }), a.registerHelper("each", function (a, b) {
        var c, d = b.fn, e = b.inverse, f = 0, g = "";
        if (m(a) && (a = a.call(this)), b.data && (c = q(b.data)), a && "object" == typeof a)if (l(a))for (var h = a.length; h > f; f++)c && (c.index = f, c.first = 0 === f, c.last = f === a.length - 1), g += d(a[f], {data: c}); else for (var i in a)a.hasOwnProperty(i) && (c && (c.key = i, c.index = f, c.first = 0 === f), g += d(a[i], {data: c}), f++);
        return 0 === f && (g = e(this)), g
      }), a.registerHelper("if", function (a, b) {
        return m(a) && (a = a.call(this)), !b.hash.includeZero && !a || g.isEmpty(a) ? b.inverse(this) : b.fn(this)
      }), a.registerHelper("unless", function (b, c) {
        return a.helpers["if"].call(this, b, {fn: c.inverse, inverse: c.fn, hash: c.hash})
      }), a.registerHelper("with", function (a, b) {
        return m(a) && (a = a.call(this)), g.isEmpty(a) ? void 0 : b.fn(a)
      }), a.registerHelper("log", function (b, c) {
        var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
        a.log(d, b)
      })
    }

    function e(a, b) {
      p.log(a, b)
    }

    var f = {}, g = a, h = b, i = "1.3.0";
    f.VERSION = i;
    var j = 4;
    f.COMPILER_REVISION = j;
    var k = {1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: ">= 1.0.0"};
    f.REVISION_CHANGES = k;
    var l = g.isArray, m = g.isFunction, n = g.toString, o = "[object Object]";
    f.HandlebarsEnvironment = c, c.prototype = {
      constructor: c, logger: p, log: e, registerHelper: function (a, b, c) {
        if (n.call(a) === o) {
          if (c || b)throw new h("Arg not supported with multiple helpers");
          g.extend(this.helpers, a)
        } else c && (b.not = c), this.helpers[a] = b
      }, registerPartial: function (a, b) {
        n.call(a) === o ? g.extend(this.partials, a) : this.partials[a] = b
      }
    };
    var p = {
      methodMap: {0: "debug", 1: "info", 2: "warn", 3: "error"},
      DEBUG: 0,
      INFO: 1,
      WARN: 2,
      ERROR: 3,
      level: 3,
      log: function (a, b) {
        if (p.level <= a) {
          var c = p.methodMap[a];
          "undefined" != typeof console && console[c] && console[c].call(console, b)
        }
      }
    };
    f.logger = p, f.log = e;
    var q = function (a) {
      var b = {};
      return g.extend(b, a), b
    };
    return f.createFrame = q, f
  }(b, c), e = function (a, b, c) {
    "use strict";
    function d(a) {
      var b = a && a[0] || 1, c = m;
      if (b !== c) {
        if (c > b) {
          var d = n[c], e = n[b];
          throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
        }
        throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
      }
    }

    function e(a, b) {
      if (!b)throw new l("No environment passed to template");
      var c = function (a, c, d, e, f, g) {
        var h = b.VM.invokePartial.apply(this, arguments);
        if (null != h)return h;
        if (b.compile) {
          var i = {helpers: e, partials: f, data: g};
          return f[c] = b.compile(a, {data: void 0 !== g}, b), f[c](d, i)
        }
        throw new l("The partial " + c + " could not be compiled when running in runtime-only mode")
      }, d = {
        escapeExpression: k.escapeExpression, invokePartial: c, programs: [], program: function (a, b, c) {
          var d = this.programs[a];
          return c ? d = g(a, b, c) : d || (d = this.programs[a] = g(a, b)), d
        }, merge: function (a, b) {
          var c = a || b;
          return a && b && a !== b && (c = {}, k.extend(c, b), k.extend(c, a)), c
        }, programWithDepth: b.VM.programWithDepth, noop: b.VM.noop, compilerInfo: null
      };
      return function (c, e) {
        e = e || {};
        var f, g, h = e.partial ? e : b;
        e.partial || (f = e.helpers, g = e.partials);
        var i = a.call(d, h, c, f, g, e.data);
        return e.partial || b.VM.checkRevision(d.compilerInfo), i
      }
    }

    function f(a, b, c) {
      var d = Array.prototype.slice.call(arguments, 3), e = function (a, e) {
        return e = e || {}, b.apply(this, [a, e.data || c].concat(d))
      };
      return e.program = a, e.depth = d.length, e
    }

    function g(a, b, c) {
      var d = function (a, d) {
        return d = d || {}, b(a, d.data || c)
      };
      return d.program = a, d.depth = 0, d
    }

    function h(a, b, c, d, e, f) {
      var g = {partial: !0, helpers: d, partials: e, data: f};
      if (void 0 === a)throw new l("The partial " + b + " could not be found");
      return a instanceof Function ? a(c, g) : void 0
    }

    function i() {
      return ""
    }

    var j = {}, k = a, l = b, m = c.COMPILER_REVISION, n = c.REVISION_CHANGES;
    return j.checkRevision = d, j.template = e, j.programWithDepth = f, j.program = g, j.invokePartial = h, j.noop = i, j
  }(b, c, d), f = function (a, b, c, d, e) {
    "use strict";
    var f, g = a, h = b, i = c, j = d, k = e, l = function () {
      var a = new g.HandlebarsEnvironment;
      return j.extend(a, g), a.SafeString = h, a.Exception = i, a.Utils = j, a.VM = k, a.template = function (b) {
        return k.template(b, a)
      }, a
    }, m = l();
    return m.create = l, f = m
  }(d, a, c, b, e);
  return f
}(), glob = "undefined" == typeof window ? global : window, Handlebars = glob.Handlebars || require("handlebars");
this.wysihtml5 = this.wysihtml5 || {}, this.wysihtml5.tpl = this.wysihtml5.tpl || {}, this.wysihtml5.tpl.blockquote = Handlebars.template(function (a, b, c, d, e) {
  function f(a) {
    var b, c = "";
    return c += "btn-" + j((b = a && a.options, b = null == b || b === !1 ? b : b.size, typeof b === i ? b.apply(a) : b))
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var g, h = "", i = "function", j = this.escapeExpression, k = this;
  return h += '<li>\n  <a class="btn ', g = c["if"].call(b, (g = b && b.options, null == g || g === !1 ? g : g.size), {
    hash: {},
    inverse: k.noop,
    fn: k.program(1, f, e),
    data: e
  }), (g || 0 === g) && (h += g), h += ' btn-default" data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="blockquote" data-wysihtml5-display-format-name="false" tabindex="-1">\n    <i class="fa fa-quote-left"></i>\n  </a>\n</li>\n'
}), this.wysihtml5.tpl.color = Handlebars.template(function (a, b, c, d, e) {
  function f(a) {
    var b, c = "";
    return c += "btn-" + j((b = a && a.options, b = null == b || b === !1 ? b : b.size, typeof b === i ? b.apply(a) : b))
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var g, h = "", i = "function", j = this.escapeExpression, k = this;
  return h += '<li class="dropdown">\n  <a class="btn btn-default dropdown-toggle ', g = c["if"].call(b, (g = b && b.options, null == g || g === !1 ? g : g.size), {
    hash: {},
    inverse: k.noop,
    fn: k.program(1, f, e),
    data: e
  }), (g || 0 === g) && (h += g), h += '" data-toggle="dropdown" tabindex="-1">\n    <span class="current-color">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.black, typeof g === i ? g.apply(b) : g)) + '</span>\n    <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="black"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="black">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.black, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="silver"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="silver">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.silver, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="gray"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="gray">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.gray, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="maroon"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="maroon">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.maroon, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="red"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="red">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.red, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="purple"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="purple">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.purple, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="green"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="green">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.green, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="olive"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="olive">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.olive, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="navy"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="navy">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.navy, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="blue"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="blue">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.blue, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="orange"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="orange">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.orange, typeof g === i ? g.apply(b) : g)) + "</a></li>\n  </ul>\n</li>\n"
}), this.wysihtml5.tpl.emphasis = Handlebars.template(function (a, b, c, d, e) {
  function f(a) {
    var b, c = "";
    return c += "btn-" + k((b = a && a.options, b = null == b || b === !1 ? b : b.size, typeof b === j ? b.apply(a) : b))
  }

  function g(a, b) {
    var d, e = "";
    return e += '\n    <a class="btn ', d = c["if"].call(a, (d = a && a.options, null == d || d === !1 ? d : d.size), {
      hash: {},
      inverse: l.noop,
      fn: l.program(1, f, b),
      data: b
    }), (d || 0 === d) && (e += d), e += ' btn-default" data-wysihtml5-command="small" title="CTRL+S" tabindex="-1">' + k((d = a && a.locale, d = null == d || d === !1 ? d : d.emphasis, d = null == d || d === !1 ? d : d.small, typeof d === j ? d.apply(a) : d)) + "</a>\n    "
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var h, i = "", j = "function", k = this.escapeExpression, l = this;
  return i += '<li>\n  <div class="btn-group">\n    <a class="btn ', h = c["if"].call(b, (h = b && b.options, null == h || h === !1 ? h : h.size), {
    hash: {},
    inverse: l.noop,
    fn: l.program(1, f, e),
    data: e
  }), (h || 0 === h) && (i += h), i += ' btn-default" data-wysihtml5-command="bold" title="CTRL+B" tabindex="-1">' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.emphasis, h = null == h || h === !1 ? h : h.bold, typeof h === j ? h.apply(b) : h)) + '</a>\n    <a class="btn ', h = c["if"].call(b, (h = b && b.options, null == h || h === !1 ? h : h.size), {
    hash: {},
    inverse: l.noop,
    fn: l.program(1, f, e),
    data: e
  }), (h || 0 === h) && (i += h), i += ' btn-default" data-wysihtml5-command="italic" title="CTRL+I" tabindex="-1">' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.emphasis, h = null == h || h === !1 ? h : h.italic, typeof h === j ? h.apply(b) : h)) + '</a>\n    <a class="btn ', h = c["if"].call(b, (h = b && b.options, null == h || h === !1 ? h : h.size), {
    hash: {},
    inverse: l.noop,
    fn: l.program(1, f, e),
    data: e
  }), (h || 0 === h) && (i += h), i += ' btn-default" data-wysihtml5-command="underline" title="CTRL+U" tabindex="-1">' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.emphasis, h = null == h || h === !1 ? h : h.underline, typeof h === j ? h.apply(b) : h)) + "</a>\n    ", h = c["if"].call(b, (h = b && b.options, null == h || h === !1 ? h : h.emSmall), {
    hash: {},
    inverse: l.noop,
    fn: l.program(3, g, e),
    data: e
  }), (h || 0 === h) && (i += h), i += "\n  </div>\n</li>\n"
}), this.wysihtml5.tpl["font-styles"] = Handlebars.template(function (a, b, c, d, e) {
  function f(a) {
    var b, c = "";
    return c += "btn-" + j((b = a && a.options, b = null == b || b === !1 ? b : b.size, typeof b === i ? b.apply(a) : b))
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var g, h = "", i = "function", j = this.escapeExpression, k = this;
  return h += '<li class="dropdown">\n  <a class="btn btn-default dropdown-toggle ', g = c["if"].call(b, (g = b && b.options, null == g || g === !1 ? g : g.size), {
    hash: {},
    inverse: k.noop,
    fn: k.program(1, f, e),
    data: e
  }), (g || 0 === g) && (h += g), h += '" data-toggle="dropdown">\n    <i class="fa fa-font"></i>\n    <span class="current-font">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.font_styles, g = null == g || g === !1 ? g : g.normal, typeof g === i ? g.apply(b) : g)) + '</span>\n    <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="p" tabindex="-1">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.font_styles, g = null == g || g === !1 ? g : g.normal, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1" tabindex="-1">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.font_styles, g = null == g || g === !1 ? g : g.h1, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h2" tabindex="-1">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.font_styles, g = null == g || g === !1 ? g : g.h2, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h3" tabindex="-1">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.font_styles, g = null == g || g === !1 ? g : g.h3, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h4" tabindex="-1">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.font_styles, g = null == g || g === !1 ? g : g.h4, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h5" tabindex="-1">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.font_styles, g = null == g || g === !1 ? g : g.h5, typeof g === i ? g.apply(b) : g)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h6" tabindex="-1">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.font_styles, g = null == g || g === !1 ? g : g.h6, typeof g === i ? g.apply(b) : g)) + "</a></li>\n  </ul>\n</li>\n"
}), this.wysihtml5.tpl.html = Handlebars.template(function (a, b, c, d, e) {
  function f(a) {
    var b, c = "";
    return c += "btn-" + j((b = a && a.options, b = null == b || b === !1 ? b : b.size, typeof b === i ? b.apply(a) : b))
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var g, h = "", i = "function", j = this.escapeExpression, k = this;
  return h += '<li>\n  <div class="btn-group">\n    <a class="btn ', g = c["if"].call(b, (g = b && b.options, null == g || g === !1 ? g : g.size), {
    hash: {},
    inverse: k.noop,
    fn: k.program(1, f, e),
    data: e
  }), (g || 0 === g) && (h += g), h += ' btn-default" data-wysihtml5-action="change_view" title="' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.html, g = null == g || g === !1 ? g : g.edit, typeof g === i ? g.apply(b) : g)) + '" tabindex="-1">\n      <span class="fa fa-pencil"></span>\n    </a>\n  </div>\n</li>\n'
}), this.wysihtml5.tpl.image = Handlebars.template(function (a, b, c, d, e) {
  function f() {
    return "modal-sm"
  }

  function g(a) {
    var b, c = "";
    return c += "btn-" + k((b = a && a.options, b = null == b || b === !1 ? b : b.size, typeof b === j ? b.apply(a) : b))
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var h, i = "", j = "function", k = this.escapeExpression, l = this;
  return i += '<li>\n  <div class="bootstrap-wysihtml5-insert-image-modal modal fade">\n    <div class="modal-dialog ', h = c["if"].call(b, (h = b && b.options, null == h || h === !1 ? h : h.smallmodals), {
    hash: {},
    inverse: l.noop,
    fn: l.program(1, f, e),
    data: e
  }), (h || 0 === h) && (i += h), i += '">\n      <div class="modal-content">\n        <div class="modal-header">\n          <a class="close" data-dismiss="modal">&times;</a>\n          <h3 class="modal-title"><strong>' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.image, h = null == h || h === !1 ? h : h.insert, typeof h === j ? h.apply(b) : h)) + '</strong></h3>\n        </div>\n        <div class="modal-body">\n          <input value="http://" class="bootstrap-wysihtml5-insert-image-url form-control">\n        </div>\n        <div class="modal-footer">\n          <a class="btn btn-danger" data-dismiss="modal">' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.image, h = null == h || h === !1 ? h : h.cancel, typeof h === j ? h.apply(b) : h)) + '</a>\n          <a class="btn btn-primary" data-dismiss="modal">' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.image, h = null == h || h === !1 ? h : h.insert, typeof h === j ? h.apply(b) : h)) + '</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class="btn ', h = c["if"].call(b, (h = b && b.options, null == h || h === !1 ? h : h.size), {
    hash: {},
    inverse: l.noop,
    fn: l.program(3, g, e),
    data: e
  }), (h || 0 === h) && (i += h), i += ' btn-default" data-wysihtml5-command="insertImage" title="' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.image, h = null == h || h === !1 ? h : h.insert, typeof h === j ? h.apply(b) : h)) + '" tabindex="-1">\n    <i class="fa fa-picture-o"></i>\n  </a>\n</li>\n'
}), this.wysihtml5.tpl.link = Handlebars.template(function (a, b, c, d, e) {
  function f() {
    return "modal-sm"
  }

  function g(a) {
    var b, c = "";
    return c += "btn-" + k((b = a && a.options, b = null == b || b === !1 ? b : b.size, typeof b === j ? b.apply(a) : b))
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var h, i = "", j = "function", k = this.escapeExpression, l = this;
  return i += '<li>\n  <div class="bootstrap-wysihtml5-insert-link-modal modal fade">\n    <div class="modal-dialog ', h = c["if"].call(b, (h = b && b.options, null == h || h === !1 ? h : h.smallmodals), {
    hash: {},
    inverse: l.noop,
    fn: l.program(1, f, e),
    data: e
  }), (h || 0 === h) && (i += h), i += '">\n      <div class="modal-content">\n        <div class="modal-header">\n          <a class="close" data-dismiss="modal">&times;</a>\n          <h3 class="modal-title"><strong>' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.link, h = null == h || h === !1 ? h : h.insert, typeof h === j ? h.apply(b) : h)) + '</strong></h3>\n        </div>\n        <div class="modal-body">\n          <input value="http://" class="bootstrap-wysihtml5-insert-link-url form-control">\n          <div class="checkbox"><label> <input type="checkbox" class="bootstrap-wysihtml5-insert-link-target" checked>' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.link, h = null == h || h === !1 ? h : h.target, typeof h === j ? h.apply(b) : h)) + '</label></div>\n        </div>\n        <div class="modal-footer">\n          <a class="btn btn-danger" data-dismiss="modal">' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.link, h = null == h || h === !1 ? h : h.cancel, typeof h === j ? h.apply(b) : h)) + '</a>\n          <a href="#" class="btn btn-primary" data-dismiss="modal">' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.link, h = null == h || h === !1 ? h : h.insert, typeof h === j ? h.apply(b) : h)) + '</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class="btn ', h = c["if"].call(b, (h = b && b.options, null == h || h === !1 ? h : h.size), {
    hash: {},
    inverse: l.noop,
    fn: l.program(3, g, e),
    data: e
  }), (h || 0 === h) && (i += h), i += ' btn-default" data-wysihtml5-command="createLink" title="' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.link, h = null == h || h === !1 ? h : h.insert, typeof h === j ? h.apply(b) : h)) + '" tabindex="-1">\n    <i class="fa fa-external-link"></i>\n  </a>\n</li>\n'
}), this.wysihtml5.tpl.lists = Handlebars.template(function (a, b, c, d, e) {
  function f(a) {
    var b, c = "";
    return c += "btn-" + j((b = a && a.options, b = null == b || b === !1 ? b : b.size, typeof b === i ? b.apply(a) : b))
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var g, h = "", i = "function", j = this.escapeExpression, k = this;
  return h += '<li>\n  <div class="btn-group">\n    <a class="btn ', g = c["if"].call(b, (g = b && b.options, null == g || g === !1 ? g : g.size), {
    hash: {},
    inverse: k.noop,
    fn: k.program(1, f, e),
    data: e
  }), (g || 0 === g) && (h += g), h += ' btn-default" data-wysihtml5-command="insertUnorderedList" title="' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.lists, g = null == g || g === !1 ? g : g.unordered, typeof g === i ? g.apply(b) : g)) + '" tabindex="-1"><i class="fa fa-list"></i></a>\n    <a class="btn ', g = c["if"].call(b, (g = b && b.options, null == g || g === !1 ? g : g.size), {
    hash: {},
    inverse: k.noop,
    fn: k.program(1, f, e),
    data: e
  }), (g || 0 === g) && (h += g), h += ' btn-default" data-wysihtml5-command="insertOrderedList" title="' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.lists, g = null == g || g === !1 ? g : g.ordered, typeof g === i ? g.apply(b) : g)) + '" tabindex="-1"><i class="fa fa-th-list"></i></a>\n    <a class="btn ', g = c["if"].call(b, (g = b && b.options, null == g || g === !1 ? g : g.size), {
    hash: {},
    inverse: k.noop,
    fn: k.program(1, f, e),
    data: e
  }), (g || 0 === g) && (h += g), h += ' btn-default" data-wysihtml5-command="Outdent" title="' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.lists, g = null == g || g === !1 ? g : g.outdent, typeof g === i ? g.apply(b) : g)) + '" tabindex="-1"><i class="fa fa-outdent"></i></a>\n    <a class="btn ', g = c["if"].call(b, (g = b && b.options, null == g || g === !1 ? g : g.size), {
    hash: {},
    inverse: k.noop,
    fn: k.program(1, f, e),
    data: e
  }), (g || 0 === g) && (h += g), h += ' btn-default" data-wysihtml5-command="Indent" title="' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.lists, g = null == g || g === !1 ? g : g.indent, typeof g === i ? g.apply(b) : g)) + '" tabindex="-1"><i class="fa fa-indent"></i></a>\n  </div>\n</li>\n'
}), "object" == typeof exports && exports && (module.exports = this.wysihtml5.tpl), !function (a, b) {
  "use strict";
  var c = function (a, c, d) {
    return b.tpl[a] ? b.tpl[a]({locale: c, options: d}) : void 0
  }, d = function (c, d) {
    this.el = c;
    var e = a.extend(!0, {}, f, d);
    a.extend(e.shortcuts, f.shortcuts);
    for (var g in e.customTemplates)b.tpl[g] = e.customTemplates[g];
    this.toolbar = this.createToolbar(c, e), this.editor = this.createEditor(e), window.editor = this.editor, a("iframe.wysihtml5-sandbox").each(function (b, c) {
      a(c.contentWindow).off("focus.wysihtml5").on({
        "focus.wysihtml5": function () {
          a("li.dropdown").removeClass("open")
        }
      })
    })
  };
  d.prototype = {
    constructor: d, createEditor: function (c) {
      c = c || {}, c = a.extend(!0, {}, c), c.toolbar = this.toolbar[0];
      var d = new b.Editor(this.el[0], c);
      if (this.addMoreShortcuts(d, d.currentView.iframe.contentDocument.body || d.currentView.iframe.contentDocument, c.shortcuts), c && c.events)for (var e in c.events)d.on(e, c.events[e]);
      return d
    }, createToolbar: function (b, d) {
      var e = this, h = a("<ul/>", {
        "class": "wysihtml5-toolbar",
        style: "display:none"
      }), i = d.locale || f.locale || "en";
      g.hasOwnProperty(i) || (i = "en");
      var j = a.extend(!0, {}, g.en, g[i]);
      for (var k in d) {
        var l = !1;
        void 0 !== d[k] ? d[k] === !0 && (l = !0) : l = f[k], l === !0 && (h.append(c(k, j, d)), "html" === k && this.initHtml(h), "link" === k && this.initInsertLink(h), "image" === k && this.initInsertImage(h))
      }
      if (d.toolbar)for (k in d.toolbar)h.append(d.toolbar[k]);
      return h.find('a[data-wysihtml5-command="formatBlock"]').click(function (b) {
        var c = b.delegateTarget || b.target || b.srcElement, d = a(c), f = d.data("wysihtml5-display-format-name"), g = d.data("wysihtml5-format-name") || d.html();
        (void 0 === f || "true" === f) && e.toolbar.find(".current-font").text(g)
      }), h.find('a[data-wysihtml5-command="foreColor"]').click(function (b) {
        var c = b.target || b.srcElement, d = a(c);
        e.toolbar.find(".current-color").text(d.html())
      }), this.el.before(h), h
    }, initHtml: function (a) {
      var b = 'a[data-wysihtml5-action="change_view"]';
      a.find(b).click(function () {
        a.find("a.btn").not(b).toggleClass("disabled")
      })
    }, initInsertImage: function (b) {
      var c, d = this, e = b.find(".bootstrap-wysihtml5-insert-image-modal"), f = e.find(".bootstrap-wysihtml5-insert-image-url"), g = e.find("a.btn-primary"), h = f.val(), i = function () {
        var a = f.val();
        f.val(h), d.editor.currentView.element.focus(), c && (d.editor.composer.selection.setBookmark(c), c = null), d.editor.composer.commands.exec("insertImage", a)
      };
      f.keypress(function (a) {
        13 == a.which && (i(), e.modal("hide"))
      }), g.click(i), e.on("shown", function () {
        f.focus()
      }), e.on("hide", function () {
        d.editor.currentView.element.focus()
      }), b.find("a[data-wysihtml5-command=insertImage]").click(function () {
        var b = a(this).hasClass("wysihtml5-command-active");
        return b ? !0 : (d.editor.currentView.element.focus(!1), c = d.editor.composer.selection.getBookmark(), e.appendTo("body").modal("show"), e.on("click.dismiss.modal", '[data-dismiss="modal"]', function (a) {
          a.stopPropagation()
        }), !1)
      })
    }, initInsertLink: function (b) {
      var c, d = this, e = b.find(".bootstrap-wysihtml5-insert-link-modal"), f = e.find(".bootstrap-wysihtml5-insert-link-url"), g = e.find(".bootstrap-wysihtml5-insert-link-target"), h = e.find("a.btn-primary"), i = f.val(), j = function () {
        var a = f.val();
        f.val(i), d.editor.currentView.element.focus(), c && (d.editor.composer.selection.setBookmark(c), c = null);
        var b = g.prop("checked");
        d.editor.composer.commands.exec("createLink", {
          href: a,
          target: b ? "_blank" : "_self",
          rel: b ? "nofollow" : ""
        })
      };
      f.keypress(function (a) {
        13 == a.which && (j(), e.modal("hide"))
      }), h.click(j), e.on("shown", function () {
        f.focus()
      }), e.on("hide", function () {
        d.editor.currentView.element.focus()
      }), b.find("a[data-wysihtml5-command=createLink]").click(function () {
        var b = a(this).hasClass("wysihtml5-command-active");
        return b ? !0 : (d.editor.currentView.element.focus(!1), c = d.editor.composer.selection.getBookmark(), e.appendTo("body").modal("show"), e.on("click.dismiss.modal", '[data-dismiss="modal"]', function (a) {
          a.stopPropagation()
        }), !1)
      })
    }, addMoreShortcuts: function (a, c, d) {
      b.dom.observe(c, "keydown", function (c) {
        var e = c.keyCode, f = d[e];
        (c.ctrlKey || c.metaKey || c.altKey) && f && b.commands[f] && (b.commands[f].exec(a.composer, f), c.preventDefault())
      })
    }
  };
  var e = {
    resetDefaults: function () {
      a.fn.wysihtml5.defaultOptions = a.extend(!0, {}, a.fn.wysihtml5.defaultOptionsCache)
    }, bypassDefaults: function (b) {
      return this.each(function () {
        var c = a(this);
        c.data("wysihtml5", new d(c, b))
      })
    }, shallowExtend: function (b) {
      var c = a.extend({}, a.fn.wysihtml5.defaultOptions, b || {}, a(this).data()), d = this;
      return e.bypassDefaults.apply(d, [c])
    }, deepExtend: function (b) {
      var c = a.extend(!0, {}, a.fn.wysihtml5.defaultOptions, b || {}), d = this;
      return e.bypassDefaults.apply(d, [c])
    }, init: function (a) {
      var b = this;
      return e.shallowExtend.apply(b, [a])
    }
  };
  a.fn.wysihtml5 = function (b) {
    return e[b] ? e[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.wysihtml5") : e.init.apply(this, arguments)
  }, a.fn.wysihtml5.Constructor = d;
  var f = a.fn.wysihtml5.defaultOptions = {
    "font-styles": !0,
    color: !1,
    emphasis: !0,
    blockquote: !0,
    lists: !0,
    html: !1,
    link: !0,
    image: !0,
    smallmodals: !1,
    events: {},
    parserRules: {
      classes: {
        "wysiwyg-color-silver": 1,
        "wysiwyg-color-gray": 1,
        "wysiwyg-color-white": 1,
        "wysiwyg-color-maroon": 1,
        "wysiwyg-color-red": 1,
        "wysiwyg-color-purple": 1,
        "wysiwyg-color-fuchsia": 1,
        "wysiwyg-color-green": 1,
        "wysiwyg-color-lime": 1,
        "wysiwyg-color-olive": 1,
        "wysiwyg-color-yellow": 1,
        "wysiwyg-color-navy": 1,
        "wysiwyg-color-blue": 1,
        "wysiwyg-color-teal": 1,
        "wysiwyg-color-aqua": 1,
        "wysiwyg-color-orange": 1
      },
      tags: {
        b: {},
        i: {},
        strong: {},
        em: {},
        p: {},
        br: {},
        ol: {},
        ul: {},
        li: {},
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        blockquote: {},
        u: 1,
        img: {check_attributes: {width: "numbers", alt: "alt", src: "url", height: "numbers"}},
        a: {check_attributes: {href: "url"}, set_attributes: {target: "_blank", rel: "nofollow"}},
        span: 1,
        div: 1,
        small: 1,
        code: 1,
        pre: 1
      }
    },
    emSmall: 1,
    locale: "en",
    shortcuts: {83: "small"}
  };
  "undefined" == typeof a.fn.wysihtml5.defaultOptionsCache && (a.fn.wysihtml5.defaultOptionsCache = a.extend(!0, {}, a.fn.wysihtml5.defaultOptions));
  var g = a.fn.wysihtml5.locale = {}
}(window.jQuery, window.wysihtml5), function (a) {
  var b;
  a.commands.small = {
    exec: function (b, c) {
      return a.commands.formatInline.exec(b, c, "small")
    }, state: function (b, c) {
      return a.commands.formatInline.state(b, c, "small")
    }, value: function () {
      return b
    }
  }
}(wysihtml5), function (a) {
  a.fn.wysihtml5.locale.en = a.fn.wysihtml5.locale["en-US"] = {
    font_styles: {
      normal: "Normal text",
      h1: "Heading 1",
      h2: "Heading 2",
      h3: "Heading 3",
      h4: "Heading 4",
      h5: "Heading 5",
      h6: "Heading 6"
    },
    emphasis: {bold: "Bold", italic: "Italic", underline: "Underline", small: "Small"},
    lists: {unordered: "Unordered list", ordered: "Ordered list", outdent: "Outdent", indent: "Indent"},
    link: {insert: "Insert link", cancel: "Cancel", target: "Open link in new window"},
    image: {insert: "Insert image", cancel: "Cancel"},
    html: {edit: "Edit HTML"},
    colours: {
      black: "Black",
      silver: "Silver",
      gray: "Grey",
      maroon: "Maroon",
      red: "Red",
      purple: "Purple",
      green: "Green",
      olive: "Olive",
      navy: "Navy",
      blue: "Blue",
      orange: "Orange"
    }
  }
}(jQuery);

/*! jQuery Validation Plugin - v1.13.0 - 7/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length)return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (b) {
        c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
      }), this.submit(function (b) {
        function d() {
          var d;
          return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
        }

        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
      })), c)
    }, valid: function () {
      var b, c;
      return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b
      })), b
    }, removeAttrs: function (b) {
      var c = {}, d = this;
      return a.each(b.split(/\s/), function (a, b) {
        c[b] = d.attr(b), d.removeAttr(b)
      }), c
    }, rules: function (b, c) {
      var d, e, f, g, h, i, j = this[0];
      if (b)switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
        case"add":
          a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
          break;
        case"remove":
          return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
          }), i) : (delete e[j.name], f)
      }
      return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({required: h}, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {remote: h})), g
    }
  }), a.extend(a.expr[":"], {
    blank: function (b) {
      return !a.trim("" + a(b).val())
    }, filled: function (b) {
      return !!a.trim("" + a(b).val())
    }, unchecked: function (b) {
      return !a(b).prop("checked")
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c)
    } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c
      })
    }), b)
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function (a) {
        this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
      },
      onfocusout: function (a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
      },
      onkeyup: function (a, b) {
        (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
      },
      onclick: function (a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
      },
      highlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
      },
      unhighlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
      }
    },
    setDefaults: function (b) {
      a.extend(a.validator.defaults, b)
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date ( ISO ).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function () {
        function b(b) {
          var c = a.data(this[0].form, "validator"), d = "on" + b.type.replace(/^validate/, ""), e = c.settings;
          e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
        }

        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c, d = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            d[c] = b
          })
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d)
        }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
      }, form: function () {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
      }, checkForm: function () {
        this.prepareForm();
        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)this.check(b[a]);
        return this.valid()
      }, element: function (b) {
        var c = this.clean(b), d = this.validationTargetFor(c), e = !0;
        return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
      }, showErrors: function (b) {
        if (b) {
          a.extend(this.errorMap, b), this.errorList = [];
          for (var c in b)this.errorList.push({message: b[c], element: this.findByName(c)[0]});
          this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b)
          })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
      }, resetForm: function () {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
      }, numberOfInvalids: function () {
        return this.objectLength(this.invalid)
      }, objectLength: function (a) {
        var b, c = 0;
        for (b in a)c++;
        return c
      }, hideErrors: function () {
        this.hideThese(this.toHide)
      }, hideThese: function (a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide()
      }, valid: function () {
        return 0 === this.size()
      }, size: function () {
        return this.errorList.length
      }, focusInvalid: function () {
        if (this.settings.focusInvalid)try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
        } catch (b) {
        }
      }, findLastActive: function () {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
            return a.element.name === b.name
          }).length && b
      }, elements: function () {
        var b = this, c = {};
        return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
          return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
        })
      }, clean: function (b) {
        return a(b)[0]
      }, errors: function () {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext)
      }, reset: function () {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
      }, prepareForm: function () {
        this.reset(), this.toHide = this.errors().add(this.containers)
      }, prepareElement: function (a) {
        this.reset(), this.toHide = this.errorsFor(a)
      }, elementValue: function (b) {
        var c, d = a(b), e = b.type;
        return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
      }, check: function (b) {
        b = this.validationTargetFor(this.clean(b));
        var c, d, e, f = a(b).rules(), g = a.map(f, function (a, b) {
          return b
        }).length, h = !1, i = this.elementValue(b);
        for (d in f) {
          e = {method: d, parameters: f[d]};
          try {
            if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
              h = !0;
              continue
            }
            if (h = !1, "pending" === c)return void(this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c)return this.formatAndAdd(b, e), !1
          } catch (j) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
          }
        }
        if (!h)return this.objectLength(f) && this.successList.push(b), !0
      }, customDataMessage: function (b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
      }, customMessage: function (a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b])
      }, findDefined: function () {
        for (var a = 0; a < arguments.length; a++)if (void 0 !== arguments[a])return arguments[a];
        return void 0
      }, defaultMessage: function (b, c) {
        return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
      }, formatAndAdd: function (b, c) {
        var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
        "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
          message: d,
          element: b,
          method: c.method
        }), this.errorMap[b.name] = d, this.submitted[b.name] = d
      }, addWrapper: function (a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
      }, defaultShowErrors: function () {
        var a, b, c;
        for (a = 0; this.errorList[a]; a++)c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (a = 0; this.successList[a]; a++)this.showLabel(this.successList[a]);
        if (this.settings.unhighlight)for (a = 0, b = this.validElements(); b[a]; a++)this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
      }, validElements: function () {
        return this.currentElements.not(this.invalidElements())
      }, invalidElements: function () {
        return a(this.errorList).map(function () {
          return this.element
        })
      }, showLabel: function (b, c) {
        var d, e, f, g = this.errorsFor(b), h = this.idOrName(b), i = a(b).attr("aria-describedby");
        g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id"), i ? i.match(new RegExp("\b" + f + "\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
          c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
        }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
      }, errorsFor: function (b) {
        var c = this.idOrName(b), d = a(b).attr("aria-describedby"), e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
      }, idOrName: function (a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
      }, validationTargetFor: function (a) {
        return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
      }, checkable: function (a) {
        return /radio|checkbox/i.test(a.type)
      }, findByName: function (b) {
        return a(this.currentForm).find("[name='" + b + "']")
      }, getLength: function (b, c) {
        switch (c.nodeName.toLowerCase()) {
          case"select":
            return a("option:selected", c).length;
          case"input":
            if (this.checkable(c))return this.findByName(c.name).filter(":checked").length
        }
        return b.length
      }, depend: function (a, b) {
        return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
      }, dependTypes: {
        "boolean": function (a) {
          return a
        }, string: function (b, c) {
          return !!a(b, c.form).length
        }, "function": function (a, b) {
          return a(b)
        }
      }, optional: function (b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
      }, startRequest: function (a) {
        this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
      }, stopRequest: function (b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
      }, previousValue: function (b) {
        return a.data(b, "previousValue") || a.data(b, "previousValue", {
            old: null,
            valid: !0,
            message: this.defaultMessage(b, "remote")
          })
      }
    },
    classRuleSettings: {
      required: {required: !0},
      email: {email: !0},
      url: {url: !0},
      date: {date: !0},
      dateISO: {dateISO: !0},
      number: {number: !0},
      digits: {digits: !0},
      creditcard: {creditcard: !0}
    },
    addClassRules: function (b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
    },
    classRules: function (b) {
      var c = {}, d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
      }), c
    },
    attributeRules: function (b) {
      var c, d, e = {}, f = a(b), g = b.getAttribute("type");
      for (c in a.validator.methods)"required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
    },
    dataRules: function (b) {
      var c, d, e = {}, f = a(b);
      for (c in a.validator.methods)d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
      return e
    },
    staticRules: function (b) {
      var c = {}, d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
    },
    normalizeRules: function (b, c) {
      return a.each(b, function (d, e) {
        if (e === !1)return void delete b[d];
        if (e.param || e.depends) {
          var f = !0;
          switch (typeof e.depends) {
            case"string":
              f = !!a(e.depends, c.form).length;
              break;
            case"function":
              f = e.depends.call(c, c)
          }
          f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
        }
      }), a.each(b, function (d, e) {
        b[d] = a.isFunction(e) ? e(c) : e
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]))
      }), a.each(["rangelength", "range"], function () {
        var c;
        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
      }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
    },
    normalizeRule: function (b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0
        }), b = c
      }
      return b
    },
    addMethod: function (b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
    },
    methods: {
      required: function (b, c, d) {
        if (!this.depend(d, c))return "dependency-mismatch";
        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0
        }
        return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
      }, email: function (a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
      }, url: function (a, b) {
        return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
      }, date: function (a, b) {
        return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
      }, dateISO: function (a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
      }, number: function (a, b) {
        return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
      }, digits: function (a, b) {
        return this.optional(b) || /^\d+$/.test(a)
      }, creditcard: function (a, b) {
        if (this.optional(b))return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(a))return !1;
        var c, d, e = 0, f = 0, g = !1;
        if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19)return !1;
        for (c = a.length - 1; c >= 0; c--)d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
        return e % 10 === 0
      }, minlength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
        return this.optional(c) || e >= d
      }, maxlength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
        return this.optional(c) || d >= e
      }, rangelength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
        return this.optional(c) || e >= d[0] && e <= d[1]
      }, min: function (a, b, c) {
        return this.optional(b) || a >= c
      }, max: function (a, b, c) {
        return this.optional(b) || c >= a
      }, range: function (a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1]
      }, equalTo: function (b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
          a(c).valid()
        }), b === e.val()
      }, remote: function (b, c, d) {
        if (this.optional(c))return "dependency-mismatch";
        var e, f, g = this.previousValue(c);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {url: d} || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
          url: d,
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: f,
          context: e.currentForm,
          success: function (d) {
            var f, h, i, j = d === !0 || "true" === d;
            e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
          }
        }, d)), "pending")
      }
    }
  }), a.format = function () {
    throw"$.format has been deprecated. Please use $.validator.format instead."
  };
  var b, c = {};
  a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
    var e = a.port;
    "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
  }) : (b = a.ajax, a.ajax = function (d) {
    var e = ("mode"in d ? d : a.ajaxSettings).mode, f = ("port"in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
  }), a.extend(a.fn, {
    validateDelegate: function (b, c, d) {
      return this.bind(c, function (c) {
        var e = a(c.target);
        return e.is(b) ? d.apply(e, arguments) : void 0
      })
    }
  })
});

/*
 * jQuery wizard plug-in 3.0.7 (18-SEPT-2012)
 *
 *
 * Copyright (c) 2012 Jan Sundman (jan.sundman[at]aland.net)
 *
 * http://www.thecodemine.org
 *
 * Licensed under the MIT licens:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 */
(function (e) {
  e.widget("ui.formwizard", {
    _init: function () {
      var t = this;
      var n = this.options.formOptions.success;
      var r = this.options.formOptions.complete;
      var i = this.options.formOptions.beforeSend;
      var s = this.options.formOptions.beforeSubmit;
      var o = this.options.formOptions.beforeSerialize;
      this.options.formOptions = e.extend(this.options.formOptions, {
        success: function (e, r, i) {
          if (n) {
            n(e, r, i)
          }
          if (t.options.formOptions && t.options.formOptions.resetForm || !t.options.formOptions) {
            t._reset()
          }
        }, complete: function (e, n) {
          if (r) {
            r(e, n)
          }
          t._enableNavigation()
        }, beforeSubmit: function (e, n, r) {
          if (s) {
            var i = s(e, n, r);
            if (!i)t._enableNavigation();
            return i
          }
        }, beforeSend: function (e) {
          if (i) {
            var n = i(e);
            if (!n)t._enableNavigation();
            return n
          }
        }, beforeSerialize: function (e, n) {
          if (o) {
            var r = o(e, n);
            if (!r)t._enableNavigation();
            return r
          }
        }
      });
      if (this.options.historyEnabled) {
        e.bbq.removeState("_" + e(this.element).attr("id"))
      }
      this.steps = this.element.find(".step").hide();
      this.firstStep = this.steps.eq(0).attr("id");
      this.activatedSteps = new Array;
      this.isLastStep = false;
      this.previousStep = undefined;
      this.currentStep = this.steps.eq(0).attr("id");
      this.nextButton = this.element.find(this.options.next).click(function () {
        return t._next()
      });
      this.nextButtonInitinalValue = this.nextButton.val();
      this.nextButton.val(this.options.textNext);
      this.backButton = this.element.find(this.options.back).click(function () {
        t._back();
        return false
      });
      this.backButtonInitinalValue = this.backButton.val();
      this.backButton.val(this.options.textBack);
      if (this.options.validationEnabled && jQuery().validate == undefined) {
        this.options.validationEnabled = false;
        if (window["console"] !== undefined) {
          console.log("%s", "validationEnabled option set, but the validation plugin is not included")
        }
      } else if (this.options.validationEnabled) {
        this.element.validate(this.options.validationOptions)
      }
      if (this.options.formPluginEnabled && jQuery().ajaxSubmit == undefined) {
        this.options.formPluginEnabled = false;
        if (window["console"] !== undefined) {
          console.log("%s", "formPluginEnabled option set but the form plugin is not included")
        }
      }
      if (this.options.disableInputFields == true) {
        e(this.steps).find(":input:not('.wizard-ignore')").attr("disabled", "disabled")
      }
      if (this.options.historyEnabled) {
        e(window).bind("hashchange", undefined, function (n) {
          var r = n.getState("_" + e(t.element).attr("id")) || t.firstStep;
          if (r !== t.currentStep) {
            if (t.options.validationEnabled && r === t._navigate(t.currentStep)) {
              if (!t.element.valid()) {
                t._updateHistory(t.currentStep);
                t.element.validate().focusInvalid();
                return false
              }
            }
            if (r !== t.currentStep)t._show(r)
          }
        })
      }
      this.element.addClass("ui-formwizard");
      this.element.find(":input").addClass("ui-wizard-content");
      this.steps.addClass("ui-formwizard-content");
      this.backButton.addClass("ui-formwizard-button ui-wizard-content");
      this.nextButton.addClass("ui-formwizard-button ui-wizard-content");
      if (!this.options.disableUIStyles) {
        this.element.addClass("ui-helper-reset ui-widget ui-widget-content ui-helper-reset ui-corner-all");
        this.element.find(":input").addClass("ui-helper-reset ui-state-default");
        this.steps.addClass("ui-helper-reset ui-corner-all");
        this.backButton.addClass("ui-helper-reset ui-state-default");
        this.nextButton.addClass("ui-helper-reset ui-state-default")
      }
      this._show(undefined);
      return e(this)
    },
    _next: function () {
      if (this.options.validationEnabled) {
        if (!this.element.valid()) {
          this.element.validate().focusInvalid();
          return false
        }
      }
      if (this.options.remoteAjax != undefined) {
        var t = this.options.remoteAjax[this.currentStep];
        var n = this;
        if (t !== undefined) {
          var r = t.success;
          var i = t.beforeSend;
          var s = t.complete;
          t = e.extend({}, t, {
            success: function (e, t) {
              if (r !== undefined && r(e, t) || r == undefined) {
                n._continueToNextStep()
              }
            }, beforeSend: function (t) {
              n._disableNavigation();
              if (i !== undefined)i(t);
              e(n.element).trigger("before_remote_ajax", {currentStep: n.currentStep})
            }, complete: function (t, r) {
              if (s !== undefined)s(t, r);
              e(n.element).trigger("after_remote_ajax", {currentStep: n.currentStep});
              n._enableNavigation()
            }
          });
          this.element.ajaxSubmit(t);
          return false
        }
      }
      return this._continueToNextStep()
    },
    _back: function () {
      if (this.activatedSteps.length > 0) {
        if (this.options.historyEnabled) {
          this._updateHistory(this.activatedSteps[this.activatedSteps.length - 2])
        } else {
          this._show(this.activatedSteps[this.activatedSteps.length - 2], true)
        }
      }
      return false
    },
    _continueToNextStep: function () {
      if (this.isLastStep) {
        for (var e = 0; e < this.activatedSteps.length; e++) {
          this.steps.filter("#" + this.activatedSteps[e]).find(":input").not(".wizard-ignore").removeAttr("disabled")
        }
        if (!this.options.formPluginEnabled) {
          return true
        } else {
          this._disableNavigation();
          this.element.ajaxSubmit(this.options.formOptions);
          return false
        }
      }
      var t = this._navigate(this.currentStep);
      if (t == this.currentStep) {
        return false
      }
      if (this.options.historyEnabled) {
        this._updateHistory(t)
      } else {
        this._show(t, true)
      }
      return false
    },
    _updateHistory: function (t) {
      var n = {};
      n["_" + e(this.element).attr("id")] = t;
      e.bbq.pushState(n)
    },
    _disableNavigation: function () {
      this.nextButton.attr("disabled", "disabled");
      this.backButton.attr("disabled", "disabled");
      if (!this.options.disableUIStyles) {
        this.nextButton.removeClass("ui-state-active").addClass("ui-state-disabled");
        this.backButton.removeClass("ui-state-active").addClass("ui-state-disabled")
      }
    },
    _enableNavigation: function () {
      if (this.isLastStep) {
        this.nextButton.val(this.options.textSubmit)
      } else {
        this.nextButton.val(this.options.textNext)
      }
      if (e.trim(this.currentStep) !== this.steps.eq(0).attr("id")) {
        this.backButton.removeAttr("disabled");
        if (!this.options.disableUIStyles) {
          this.backButton.removeClass("ui-state-disabled").addClass("ui-state-active")
        }
      }
      this.nextButton.removeAttr("disabled");
      if (!this.options.disableUIStyles) {
        this.nextButton.removeClass("ui-state-disabled").addClass("ui-state-active")
      }
    },
    _animate: function (e, t, n) {
      this._disableNavigation();
      var r = this.steps.filter("#" + e);
      var i = this.steps.filter("#" + t);
      r.find(":input").not(".wizard-ignore").attr("disabled", "disabled");
      i.find(":input").not(".wizard-ignore").removeAttr("disabled");
      var s = this;
      r.animate(s.options.outAnimation, s.options.outDuration, s.options.easing, function () {
        i.animate(s.options.inAnimation, s.options.inDuration, s.options.easing, function () {
          if (s.options.focusFirstInput)i.find(":input:first").focus();
          s._enableNavigation();
          n.apply(s)
        });
        return
      })
    },
    _checkIflastStep: function (t) {
      this.isLastStep = false;
      if (e("#" + t).hasClass(this.options.submitStepClass) || this.steps.filter(":last").attr("id") == t) {
        this.isLastStep = true
      }
    },
    _getLink: function (t) {
      var n = undefined;
      var r = this.steps.filter("#" + t).find(this.options.linkClass);
      if (r != undefined) {
        if (r.filter(":radio,:checkbox").size() > 0) {
          n = r.filter(this.options.linkClass + ":checked").val()
        } else {
          n = e(r).val()
        }
      }
      return n
    },
    _navigate: function (e) {
      var t = this._getLink(e);
      if (t != undefined) {
        if (t != "" && t != null && t != undefined && this.steps.filter("#" + t).attr("id") != undefined) {
          return t
        }
        return this.currentStep
      } else if (t == undefined && !this.isLastStep) {
        var n = this.steps.filter("#" + e).next().attr("id");
        return n
      }
    },
    _show: function (t) {
      var n = false;
      var r = t !== undefined;
      if (t == undefined || t == "") {
        this.activatedSteps.pop();
        t = this.firstStep;
        this.activatedSteps.push(t)
      } else {
        if (e.inArray(t, this.activatedSteps) > -1) {
          n = true;
          this.activatedSteps.pop()
        } else {
          this.activatedSteps.push(t)
        }
      }
      if (this.currentStep !== t || t === this.firstStep) {
        this.previousStep = this.currentStep;
        this._checkIflastStep(t);
        this.currentStep = t;
        var i = function () {
          if (r) {
            e(this.element).trigger("step_shown", e.extend({isBackNavigation: n}, this._state()))
          }
        };
        if (r) {
          e(this.element).trigger("before_step_shown", e.extend({isBackNavigation: n}, this._state()))
        }
        this._animate(this.previousStep, t, i)
      }
    },
    _reset: function () {
      this.element.resetForm();
      e("label,:input,textarea", this).removeClass("error");
      for (var t = 0; t < this.activatedSteps.length; t++) {
        this.steps.filter("#" + this.activatedSteps[t]).hide().find(":input").attr("disabled", "disabled")
      }
      this.activatedSteps = new Array;
      this.previousStep = undefined;
      this.isLastStep = false;
      if (this.options.historyEnabled) {
        this._updateHistory(this.firstStep)
      } else {
        this._show(this.firstStep)
      }
    },
    _state: function (e) {
      var t = {
        settings: this.options,
        activatedSteps: this.activatedSteps,
        isLastStep: this.isLastStep,
        isFirstStep: this.currentStep === this.firstStep,
        previousStep: this.previousStep,
        currentStep: this.currentStep,
        backButton: this.backButton,
        nextButton: this.nextButton,
        steps: this.steps,
        firstStep: this.firstStep
      };
      if (e !== undefined)return t[e];
      return t
    },
    show: function (e) {
      if (this.options.historyEnabled) {
        this._updateHistory(e)
      } else {
        this._show(e)
      }
    },
    state: function (e) {
      return this._state(e)
    },
    reset: function () {
      this._reset()
    },
    next: function () {
      this._next()
    },
    back: function () {
      this._back()
    },
    destroy: function () {
      this.element.find("*").removeAttr("disabled").show();
      this.nextButton.unbind("click").val(this.nextButtonInitinalValue).removeClass("ui-state-disabled").addClass("ui-state-active");
      this.backButton.unbind("click").val(this.backButtonInitinalValue).removeClass("ui-state-disabled").addClass("ui-state-active");
      this.backButtonInitinalValue = undefined;
      this.nextButtonInitinalValue = undefined;
      this.activatedSteps = undefined;
      this.previousStep = undefined;
      this.currentStep = undefined;
      this.isLastStep = undefined;
      this.options = undefined;
      this.nextButton = undefined;
      this.backButton = undefined;
      this.formwizard = undefined;
      this.element = undefined;
      this.steps = undefined;
      this.firstStep = undefined
    },
    update_steps: function () {
      this.steps = this.element.find(".step").addClass("ui-formwizard-content");
      this.firstStep = this.steps.eq(0).attr("id");
      this.steps.not("#" + this.currentStep).hide().find(":input").addClass("ui-wizard-content").attr("disabled", "disabled");
      this._checkIflastStep(this.currentStep);
      this._enableNavigation();
      if (!this.options.disableUIStyles) {
        this.steps.addClass("ui-helper-reset ui-corner-all");
        this.steps.find(":input").addClass("ui-helper-reset ui-state-default")
      }
    },
    options: {
      historyEnabled: false,
      validationEnabled: false,
      validationOptions: undefined,
      formPluginEnabled: false,
      linkClass: ".link",
      submitStepClass: "submit_step",
      back: ":reset",
      next: ":submit",
      textSubmit: "Submit",
      textNext: "Next",
      textBack: "Back",
      remoteAjax: undefined,
      inAnimation: {opacity: "show"},
      outAnimation: {opacity: "hide"},
      inDuration: 400,
      outDuration: 400,
      easing: "swing",
      focusFirstInput: false,
      disableInputFields: true,
      formOptions: {
        reset: true, success: function (e) {
          if (window["console"] !== undefined) {
            console.log("%s", "form submit successful")
          }
        }, disableUIStyles: false
      }
    }
  })
})(jQuery);

/*!
 * jQuery Tags Input Plugin 1.3.3
 *
 * Copyright (c) 2011 XOXCO, Inc
 *
 * Documentation for this plugin lives here:
 * http://xoxco.com/clickable/jquery-tags-input
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 * ben@xoxco.com
 */
(function (a) {
  var b = new Array;
  var c = new Array;
  a.fn.doAutosize = function (b) {
    var c = a(this).data("minwidth"), d = a(this).data("maxwidth"), e = "", f = a(this), g = a("#" + a(this).data("tester_id"));
    if (e === (e = f.val())) {
      return
    }
    var h = e.replace(/&/g, "&").replace(/\s/g, " ").replace(/</g, "<").replace(/>/g, ">");
    g.html(h);
    var i = g.width(), j = i + b.comfortZone >= c ? i + b.comfortZone : c, k = f.width(), l = j < k && j >= c || j > c && j < d;
    if (l) {
      f.width(j)
    }
  };
  a.fn.resetAutosize = function (b) {
    var c = a(this).data("minwidth") || b.minInputWidth || a(this).width(), d = a(this).data("maxwidth") || b.maxInputWidth || a(this).closest(".tagsinput").width() - b.inputPadding, e = "", f = a(this), g = a("<tester/>").css({
      position: "absolute",
      top: -9999,
      left: -9999,
      width: "auto",
      fontSize: f.css("fontSize"),
      fontFamily: f.css("fontFamily"),
      fontWeight: f.css("fontWeight"),
      letterSpacing: f.css("letterSpacing"),
      whiteSpace: "nowrap"
    }), h = a(this).attr("id") + "_autosize_tester";
    if (!a("#" + h).length > 0) {
      g.attr("id", h);
      g.appendTo("body")
    }
    f.data("minwidth", c);
    f.data("maxwidth", d);
    f.data("tester_id", h);
    f.css("width", c)
  };
  a.fn.addTag = function (d, e) {
    e = jQuery.extend({focus: false, callback: true}, e);
    this.each(function () {
      var f = a(this).attr("id");
      var g = a(this).val().split(b[f]);
      if (g[0] == "") {
        g = new Array
      }
      d = jQuery.trim(d);
      if (e.unique) {
        var h = a(g).tagExist(d);
        if (h == true) {
          a("#" + f + "_tag").addClass("not_valid")
        }
      } else {
        var h = false
      }
      if (d != "" && h != true) {
        a("<span>").addClass("tag").append(a("<span>").text(d).append("  "), a("<a>", {
          href: "#",
          title: "Removing tag",
          text: "x"
        }).click(function () {
          return a("#" + f).removeTag(escape(d))
        })).insertBefore("#" + f + "_addTag");
        g.push(d);
        a("#" + f + "_tag").val("");
        if (e.focus) {
          a("#" + f + "_tag").focus()
        } else {
          a("#" + f + "_tag").blur()
        }
        a.fn.tagsInput.updateTagsField(this, g);
        if (e.callback && c[f] && c[f]["onAddTag"]) {
          var i = c[f]["onAddTag"];
          i.call(this, d)
        }
        if (c[f] && c[f]["onChange"]) {
          var j = g.length;
          var i = c[f]["onChange"];
          i.call(this, a(this), g[j - 1])
        }
      }
    });
    return false
  };
  a.fn.removeTag = function (d) {
    d = unescape(d);
    this.each(function () {
      var e = a(this).attr("id");
      var f = a(this).val().split(b[e]);
      a("#" + e + "_tagsinput .tag").remove();
      str = "";
      for (i = 0; i < f.length; i++) {
        if (f[i] != d) {
          str = str + b[e] + f[i]
        }
      }
      a.fn.tagsInput.importTags(this, str);
      if (c[e] && c[e]["onRemoveTag"]) {
        var g = c[e]["onRemoveTag"];
        g.call(this, d)
      }
    });
    return false
  };
  a.fn.tagExist = function (b) {
    return jQuery.inArray(b, a(this)) >= 0
  };
  a.fn.importTags = function (b) {
    id = a(this).attr("id");
    a("#" + id + "_tagsinput .tag").remove();
    a.fn.tagsInput.importTags(this, b)
  };
  a.fn.tagsInput = function (d) {
    var e = jQuery.extend({
      interactive: true,
      defaultText: "add a tag",
      minChars: 0,
      width: "300px",
      height: "100px",
      autocomplete: {selectFirst: false},
      hide: true,
      delimiter: ",",
      unique: true,
      removeWithBackspace: true,
      placeholderColor: "#666666",
      autosize: true,
      comfortZone: 20,
      inputPadding: 6 * 2
    }, d);
    this.each(function () {
      if (e.hide) {
        a(this).hide()
      }
      var d = a(this).attr("id");
      if (!d || b[a(this).attr("id")]) {
        d = a(this).attr("id", "tags" + (new Date).getTime()).attr("id")
      }
      var f = jQuery.extend({
        pid: d,
        real_input: "#" + d,
        holder: "#" + d + "_tagsinput",
        input_wrapper: "#" + d + "_addTag",
        fake_input: "#" + d + "_tag"
      }, e);
      b[d] = f.delimiter;
      if (e.onAddTag || e.onRemoveTag || e.onChange) {
        c[d] = new Array;
        c[d]["onAddTag"] = e.onAddTag;
        c[d]["onRemoveTag"] = e.onRemoveTag;
        c[d]["onChange"] = e.onChange
      }
      var g = '<div id="' + d + '_tagsinput" class="tagsinput"><div id="' + d + '_addTag">';
      if (e.interactive) {
        g = g + '<input id="' + d + '_tag" value="" data-default="' + e.defaultText + '" />'
      }
      g = g + '</div><div class="tags_clear"></div></div>';
      a(g).insertAfter(this);
      a(f.holder).css("width", e.width);
      a(f.holder).css("height", e.height);
      if (a(f.real_input).val() != "") {
        a.fn.tagsInput.importTags(a(f.real_input), a(f.real_input).val())
      }
      if (e.interactive) {
        a(f.fake_input).val(a(f.fake_input).attr("data-default"));
        a(f.fake_input).css("color", e.placeholderColor);
        a(f.fake_input).resetAutosize(e);
        a(f.holder).bind("click", f, function (b) {
          a(b.data.fake_input).focus()
        });
        a(f.fake_input).bind("focus", f, function (b) {
          if (a(b.data.fake_input).val() == a(b.data.fake_input).attr("data-default")) {
            a(b.data.fake_input).val("")
          }
          a(b.data.fake_input).css("color", "#000000")
        });
        if (e.autocomplete_url != undefined) {
          autocomplete_options = {source: e.autocomplete_url};
          for (attrname in e.autocomplete) {
            autocomplete_options[attrname] = e.autocomplete[attrname]
          }
          if (jQuery.Autocompleter !== undefined) {
            a(f.fake_input).autocomplete(e.autocomplete_url, e.autocomplete);
            a(f.fake_input).bind("result", f, function (b, c, f) {
              if (c) {
                a("#" + d).addTag(c[0] + "", {focus: true, unique: e.unique})
              }
            })
          } else if (jQuery.ui.autocomplete !== undefined) {
            a(f.fake_input).autocomplete(autocomplete_options);
            a(f.fake_input).bind("autocompleteselect", f, function (b, c) {
              a(b.data.real_input).addTag(c.item.value, {focus: true, unique: e.unique});
              return false
            })
          }
        } else {
          a(f.fake_input).bind("blur", f, function (b) {
            var c = a(this).attr("data-default");
            if (a(b.data.fake_input).val() != "" && a(b.data.fake_input).val() != c) {
              if (b.data.minChars <= a(b.data.fake_input).val().length && (!b.data.maxChars || b.data.maxChars >= a(b.data.fake_input).val().length))a(b.data.real_input).addTag(a(b.data.fake_input).val(), {
                focus: true,
                unique: e.unique
              })
            } else {
              a(b.data.fake_input).val(a(b.data.fake_input).attr("data-default"));
              a(b.data.fake_input).css("color", e.placeholderColor)
            }
            return false
          })
        }
        a(f.fake_input).bind("keypress", f, function (b) {
          if (b.which == b.data.delimiter.charCodeAt(0) || b.which == 13) {
            b.preventDefault();
            if (b.data.minChars <= a(b.data.fake_input).val().length && (!b.data.maxChars || b.data.maxChars >= a(b.data.fake_input).val().length))a(b.data.real_input).addTag(a(b.data.fake_input).val(), {
              focus: true,
              unique: e.unique
            });
            a(b.data.fake_input).resetAutosize(e);
            return false
          } else if (b.data.autosize) {
            a(b.data.fake_input).doAutosize(e)
          }
        });
        f.removeWithBackspace && a(f.fake_input).bind("keydown", function (b) {
          if (b.keyCode == 8 && a(this).val() == "") {
            b.preventDefault();
            var c = a(this).closest(".tagsinput").find(".tag:last").text();
            var d = a(this).attr("id").replace(/_tag$/, "");
            c = c.replace(/[\s]+x$/, "");
            a("#" + d).removeTag(escape(c));
            a(this).trigger("focus")
          }
        });
        a(f.fake_input).blur();
        if (f.unique) {
          a(f.fake_input).keydown(function (b) {
            if (b.keyCode == 8 || String.fromCharCode(b.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/)) {
              a(this).removeClass("not_valid")
            }
          })
        }
      }
    });
    return this
  };
  a.fn.tagsInput.updateTagsField = function (c, d) {
    var e = a(c).attr("id");
    a(c).val(d.join(b[e]))
  };
  a.fn.tagsInput.importTags = function (d, e) {
    a(d).val("");
    var f = a(d).attr("id");
    var g = e.split(b[f]);
    for (i = 0; i < g.length; i++) {
      a(d).addTag(g[i], {focus: false, callback: false})
    }
    if (c[f] && c[f]["onChange"]) {
      var h = c[f]["onChange"];
      h.call(d, d, g[i])
    }
  }
})(jQuery);

/*!
 * jquery.sparkline 2.1.2 - http://omnipotent.net/jquery.sparkline/
 * Licensed under the New BSD License - see above site for details
 */
(function (a, b, c) {
  (function (a) {
    typeof define == "function" && define.amd ? define(["jquery"], a) : jQuery && !jQuery.fn.sparkline && a(jQuery)
  })(function (d) {
    "use strict";
    var e = {}, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L = 0;
    f = function () {
      return {
        common: {
          type: "line",
          lineColor: "#00f",
          fillColor: "#cdf",
          defaultPixelsPerValue: 3,
          width: "auto",
          height: "auto",
          composite: !1,
          tagValuesAttribute: "values",
          tagOptionsPrefix: "spark",
          enableTagOptions: !1,
          enableHighlight: !0,
          highlightLighten: 1.4,
          tooltipSkipNull: !0,
          tooltipPrefix: "",
          tooltipSuffix: "",
          disableHiddenCheck: !1,
          numberFormatter: !1,
          numberDigitGroupCount: 3,
          numberDigitGroupSep: ",",
          numberDecimalMark: ".",
          disableTooltips: !1,
          disableInteraction: !1
        },
        line: {
          spotColor: "#f80",
          highlightSpotColor: "#5f5",
          highlightLineColor: "#f22",
          spotRadius: 1.5,
          minSpotColor: "#f80",
          maxSpotColor: "#f80",
          lineWidth: 1,
          normalRangeMin: c,
          normalRangeMax: c,
          normalRangeColor: "#ccc",
          drawNormalOnTop: !1,
          chartRangeMin: c,
          chartRangeMax: c,
          chartRangeMinX: c,
          chartRangeMaxX: c,
          tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
        },
        bar: {
          barColor: "#3366cc",
          negBarColor: "#f44",
          stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
          zeroColor: c,
          nullColor: c,
          zeroAxis: !0,
          barWidth: 4,
          barSpacing: 1,
          chartRangeMax: c,
          chartRangeMin: c,
          chartRangeClip: !1,
          colorMap: c,
          tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
        },
        tristate: {
          barWidth: 4,
          barSpacing: 1,
          posBarColor: "#6f6",
          negBarColor: "#f44",
          zeroBarColor: "#999",
          colorMap: {},
          tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
          tooltipValueLookups: {map: {"-1": "Loss", 0: "Draw", 1: "Win"}}
        },
        discrete: {
          lineHeight: "auto",
          thresholdColor: c,
          thresholdValue: 0,
          chartRangeMax: c,
          chartRangeMin: c,
          chartRangeClip: !1,
          tooltipFormat: new h("{{prefix}}{{value}}{{suffix}}")
        },
        bullet: {
          targetColor: "#f33",
          targetWidth: 3,
          performanceColor: "#33f",
          rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
          base: c,
          tooltipFormat: new h("{{fieldkey:fields}} - {{value}}"),
          tooltipValueLookups: {fields: {r: "Range", p: "Performance", t: "Target"}}
        },
        pie: {
          offset: 0,
          sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
          borderWidth: 0,
          borderColor: "#000",
          tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
        },
        box: {
          raw: !1,
          boxLineColor: "#000",
          boxFillColor: "#cdf",
          whiskerColor: "#000",
          outlierLineColor: "#333",
          outlierFillColor: "#fff",
          medianColor: "#f00",
          showOutliers: !0,
          outlierIQR: 1.5,
          spotRadius: 1.5,
          target: c,
          targetColor: "#4a2",
          chartRangeMax: c,
          chartRangeMin: c,
          tooltipFormat: new h("{{field:fields}}: {{value}}"),
          tooltipFormatFieldlistKey: "field",
          tooltipValueLookups: {
            fields: {
              lq: "Lower Quartile",
              med: "Median",
              uq: "Upper Quartile",
              lo: "Left Outlier",
              ro: "Right Outlier",
              lw: "Left Whisker",
              rw: "Right Whisker"
            }
          }
        }
      }
    }, E = '.jqstooltip { width: auto !important; height: auto !important; position: absolute;left: 0px;top: 0px;visibility: hidden;background: #000000;color: white;font-size: 11px;text-align: left;white-space: nowrap;padding: 5px;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}', g = function () {
      var a, b;
      return a = function () {
        this.init.apply(this, arguments)
      }, arguments.length > 1 ? (arguments[0] ? (a.prototype = d.extend(new arguments[0], arguments[arguments.length - 1]), a._super = arguments[0].prototype) : a.prototype = arguments[arguments.length - 1], arguments.length > 2 && (b = Array.prototype.slice.call(arguments, 1, -1), b.unshift(a.prototype), d.extend.apply(d, b))) : a.prototype = arguments[0], a.prototype.cls = a, a
    }, d.SPFormatClass = h = g({
      fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g, precre: /(\w+)\.(\d+)/, init: function (a, b) {
        this.format = a, this.fclass = b
      }, render: function (a, b, d) {
        var e = this, f = a, g, h, i, j, k;
        return this.format.replace(this.fre, function () {
          var a;
          return h = arguments[1], i = arguments[3], g = e.precre.exec(h), g ? (k = g[2], h = g[1]) : k = !1, j = f[h], j === c ? "" : i && b && b[i] ? (a = b[i], a.get ? b[i].get(j) || j : b[i][j] || j) : (n(j) && (d.get("numberFormatter") ? j = d.get("numberFormatter")(j) : j = s(j, k, d.get("numberDigitGroupCount"), d.get("numberDigitGroupSep"), d.get("numberDecimalMark"))), j)
        })
      }
    }), d.spformat = function (a, b) {
      return new h(a, b)
    }, i = function (a, b, c) {
      return a < b ? b : a > c ? c : a
    }, j = function (a, c) {
      var d;
      return c === 2 ? (d = b.floor(a.length / 2), a.length % 2 ? a[d] : (a[d - 1] + a[d]) / 2) : a.length % 2 ? (d = (a.length * c + c) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]) : (d = (a.length * c + 2) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1])
    }, k = function (a) {
      var b;
      switch (a) {
        case"undefined":
          a = c;
          break;
        case"null":
          a = null;
          break;
        case"true":
          a = !0;
          break;
        case"false":
          a = !1;
          break;
        default:
          b = parseFloat(a), a == b && (a = b)
      }
      return a
    }, l = function (a) {
      var b, c = [];
      for (b = a.length; b--;)c[b] = k(a[b]);
      return c
    }, m = function (a, b) {
      var c, d, e = [];
      for (c = 0, d = a.length; c < d; c++)a[c] !== b && e.push(a[c]);
      return e
    }, n = function (a) {
      return !isNaN(parseFloat(a)) && isFinite(a)
    }, s = function (a, b, c, e, f) {
      var g, h;
      a = (b === !1 ? parseFloat(a).toString() : a.toFixed(b)).split(""), g = (g = d.inArray(".", a)) < 0 ? a.length : g, g < a.length && (a[g] = f);
      for (h = g - c; h > 0; h -= c)a.splice(h, 0, e);
      return a.join("")
    }, o = function (a, b, c) {
      var d;
      for (d = b.length; d--;) {
        if (c && b[d] === null)continue;
        if (b[d] !== a)return !1
      }
      return !0
    }, p = function (a) {
      var b = 0, c;
      for (c = a.length; c--;)b += typeof a[c] == "number" ? a[c] : 0;
      return b
    }, r = function (a) {
      return d.isArray(a) ? a : [a]
    }, q = function (b) {
      var c;
      a.createStyleSheet ? a.createStyleSheet().cssText = b : (c = a.createElement("style"), c.type = "text/css", a.getElementsByTagName("head")[0].appendChild(c), c[typeof a.body.style.WebkitAppearance == "string" ? "innerText" : "innerHTML"] = b)
    }, d.fn.simpledraw = function (b, e, f, g) {
      var h, i;
      if (f && (h = this.data("_jqs_vcanvas")))return h;
      if (d.fn.sparkline.canvas === !1)return !1;
      if (d.fn.sparkline.canvas === c) {
        var j = a.createElement("canvas");
        if (!j.getContext || !j.getContext("2d")) {
          if (!a.namespaces || !!a.namespaces.v)return d.fn.sparkline.canvas = !1, !1;
          a.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), d.fn.sparkline.canvas = function (a, b, c, d) {
            return new J(a, b, c)
          }
        } else d.fn.sparkline.canvas = function (a, b, c, d) {
          return new I(a, b, c, d)
        }
      }
      return b === c && (b = d(this).innerWidth()), e === c && (e = d(this).innerHeight()), h = d.fn.sparkline.canvas(b, e, this, g), i = d(this).data("_jqs_mhandler"), i && i.registerCanvas(h), h
    }, d.fn.cleardraw = function () {
      var a = this.data("_jqs_vcanvas");
      a && a.reset()
    }, d.RangeMapClass = t = g({
      init: function (a) {
        var b, c, d = [];
        for (b in a)a.hasOwnProperty(b) && typeof b == "string" && b.indexOf(":") > -1 && (c = b.split(":"), c[0] = c[0].length === 0 ? -Infinity : parseFloat(c[0]), c[1] = c[1].length === 0 ? Infinity : parseFloat(c[1]), c[2] = a[b], d.push(c));
        this.map = a, this.rangelist = d || !1
      }, get: function (a) {
        var b = this.rangelist, d, e, f;
        if ((f = this.map[a]) !== c)return f;
        if (b)for (d = b.length; d--;) {
          e = b[d];
          if (e[0] <= a && e[1] >= a)return e[2]
        }
        return c
      }
    }), d.range_map = function (a) {
      return new t(a)
    }, u = g({
      init: function (a, b) {
        var c = d(a);
        this.$el = c, this.options = b, this.currentPageX = 0, this.currentPageY = 0, this.el = a, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !b.get("disableTooltips"), this.highlightEnabled = !b.get("disableHighlight")
      }, registerSparkline: function (a) {
        this.splist.push(a), this.over && this.updateDisplay()
      }, registerCanvas: function (a) {
        var b = d(a.canvas);
        this.canvas = a, this.$canvas = b, b.mouseenter(d.proxy(this.mouseenter, this)), b.mouseleave(d.proxy(this.mouseleave, this)), b.click(d.proxy(this.mouseclick, this))
      }, reset: function (a) {
        this.splist = [], this.tooltip && a && (this.tooltip.remove(), this.tooltip = c)
      }, mouseclick: function (a) {
        var b = d.Event("sparklineClick");
        b.originalEvent = a, b.sparklines = this.splist, this.$el.trigger(b)
      }, mouseenter: function (b) {
        d(a.body).unbind("mousemove.jqs"), d(a.body).bind("mousemove.jqs", d.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = b.pageX, this.currentPageY = b.pageY, this.currentEl = b.target, !this.tooltip && this.displayTooltips && (this.tooltip = new v(this.options), this.tooltip.updatePosition(b.pageX, b.pageY)), this.updateDisplay()
      }, mouseleave: function () {
        d(a.body).unbind("mousemove.jqs");
        var b = this.splist, c = b.length, e = !1, f, g;
        this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null);
        for (g = 0; g < c; g++)f = b[g], f.clearRegionHighlight() && (e = !0);
        e && this.canvas.render()
      }, mousemove: function (a) {
        this.currentPageX = a.pageX, this.currentPageY = a.pageY, this.currentEl = a.target, this.tooltip && this.tooltip.updatePosition(a.pageX, a.pageY), this.updateDisplay()
      }, updateDisplay: function () {
        var a = this.splist, b = a.length, c = !1, e = this.$canvas.offset(), f = this.currentPageX - e.left, g = this.currentPageY - e.top, h, i, j, k, l;
        if (!this.over)return;
        for (j = 0; j < b; j++)i = a[j], k = i.setRegionHighlight(this.currentEl, f, g), k && (c = !0);
        if (c) {
          l = d.Event("sparklineRegionChange"), l.sparklines = this.splist, this.$el.trigger(l);
          if (this.tooltip) {
            h = "";
            for (j = 0; j < b; j++)i = a[j], h += i.getCurrentRegionTooltip();
            this.tooltip.setContent(h)
          }
          this.disableHighlight || this.canvas.render()
        }
        k === null && this.mouseleave()
      }
    }), v = g({
      sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
      init: function (b) {
        var c = b.get("tooltipClassname", "jqstooltip"), e = this.sizeStyle, f;
        this.container = b.get("tooltipContainer") || a.body, this.tooltipOffsetX = b.get("tooltipOffsetX", 10), this.tooltipOffsetY = b.get("tooltipOffsetY", 12), d("#jqssizetip").remove(), d("#jqstooltip").remove(), this.sizetip = d("<div/>", {
          id: "jqssizetip",
          style: e,
          "class": c
        }), this.tooltip = d("<div/>", {
          id: "jqstooltip",
          "class": c
        }).appendTo(this.container), f = this.tooltip.offset(), this.offsetLeft = f.left, this.offsetTop = f.top, this.hidden = !0, d(window).unbind("resize.jqs scroll.jqs"), d(window).bind("resize.jqs scroll.jqs", d.proxy(this.updateWindowDims, this)), this.updateWindowDims()
      },
      updateWindowDims: function () {
        this.scrollTop = d(window).scrollTop(), this.scrollLeft = d(window).scrollLeft(), this.scrollRight = this.scrollLeft + d(window).width(), this.updatePosition()
      },
      getSize: function (a) {
        this.sizetip.html(a).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove()
      },
      setContent: function (a) {
        if (!a) {
          this.tooltip.css("visibility", "hidden"), this.hidden = !0;
          return
        }
        this.getSize(a), this.tooltip.html(a).css({
          width: this.width,
          height: this.height,
          visibility: "visible"
        }), this.hidden && (this.hidden = !1, this.updatePosition())
      },
      updatePosition: function (a, b) {
        if (a === c) {
          if (this.mousex === c)return;
          a = this.mousex - this.offsetLeft, b = this.mousey - this.offsetTop
        } else this.mousex = a -= this.offsetLeft, this.mousey = b -= this.offsetTop;
        if (!this.height || !this.width || this.hidden)return;
        b -= this.height + this.tooltipOffsetY, a += this.tooltipOffsetX, b < this.scrollTop && (b = this.scrollTop), a < this.scrollLeft ? a = this.scrollLeft : a + this.width > this.scrollRight && (a = this.scrollRight - this.width), this.tooltip.css({
          left: a,
          top: b
        })
      },
      remove: function () {
        this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = c, d(window).unbind("resize.jqs scroll.jqs")
      }
    }), F = function () {
      q(E)
    }, d(F), K = [], d.fn.sparkline = function (b, e) {
      return this.each(function () {
        var f = new d.fn.sparkline.options(this, e), g = d(this), h, i;
        h = function () {
          var e, h, i, j, k, l, m;
          if (b === "html" || b === c) {
            m = this.getAttribute(f.get("tagValuesAttribute"));
            if (m === c || m === null)m = g.html();
            e = m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")
          } else e = b;
          h = f.get("width") === "auto" ? e.length * f.get("defaultPixelsPerValue") : f.get("width");
          if (f.get("height") === "auto") {
            if (!f.get("composite") || !d.data(this, "_jqs_vcanvas"))j = a.createElement("span"), j.innerHTML = "a", g.html(j), i = d(j).innerHeight() || d(j).height(), d(j).remove(), j = null
          } else i = f.get("height");
          f.get("disableInteraction") ? k = !1 : (k = d.data(this, "_jqs_mhandler"), k ? f.get("composite") || k.reset() : (k = new u(this, f), d.data(this, "_jqs_mhandler", k)));
          if (f.get("composite") && !d.data(this, "_jqs_vcanvas")) {
            d.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), d.data(this, "_jqs_errnotify", !0));
            return
          }
          l = new (d.fn.sparkline[f.get("type")])(this, e, f, h, i), l.render(), k && k.registerSparkline(l)
        };
        if (d(this).html() && !f.get("disableHiddenCheck") && d(this).is(":hidden") || !d(this).parents("body").length) {
          if (!f.get("composite") && d.data(this, "_jqs_pending"))for (i = K.length; i; i--)K[i - 1][0] == this && K.splice(i - 1, 1);
          K.push([this, h]), d.data(this, "_jqs_pending", !0)
        } else h.call(this)
      })
    }, d.fn.sparkline.defaults = f(), d.sparkline_display_visible = function () {
      var a, b, c, e = [];
      for (b = 0, c = K.length; b < c; b++)a = K[b][0], d(a).is(":visible") && !d(a).parents().is(":hidden") ? (K[b][1].call(a), d.data(K[b][0], "_jqs_pending", !1), e.push(b)) : !d(a).closest("html").length && !d.data(a, "_jqs_pending") && (d.data(K[b][0], "_jqs_pending", !1), e.push(b));
      for (b = e.length; b; b--)K.splice(e[b - 1], 1)
    }, d.fn.sparkline.options = g({
      init: function (a, b) {
        var c, f, g, h;
        this.userOptions = b = b || {}, this.tag = a, this.tagValCache = {}, f = d.fn.sparkline.defaults, g = f.common, this.tagOptionsPrefix = b.enableTagOptions && (b.tagOptionsPrefix || g.tagOptionsPrefix), h = this.getTagSetting("type"), h === e ? c = f[b.type || g.type] : c = f[h], this.mergedOptions = d.extend({}, g, c, b)
      }, getTagSetting: function (a) {
        var b = this.tagOptionsPrefix, d, f, g, h;
        if (b === !1 || b === c)return e;
        if (this.tagValCache.hasOwnProperty(a))d = this.tagValCache.key; else {
          d = this.tag.getAttribute(b + a);
          if (d === c || d === null)d = e; else if (d.substr(0, 1) === "[") {
            d = d.substr(1, d.length - 2).split(",");
            for (f = d.length; f--;)d[f] = k(d[f].replace(/(^\s*)|(\s*$)/g, ""))
          } else if (d.substr(0, 1) === "{") {
            g = d.substr(1, d.length - 2).split(","), d = {};
            for (f = g.length; f--;)h = g[f].split(":", 2), d[h[0].replace(/(^\s*)|(\s*$)/g, "")] = k(h[1].replace(/(^\s*)|(\s*$)/g, ""))
          } else d = k(d);
          this.tagValCache.key = d
        }
        return d
      }, get: function (a, b) {
        var d = this.getTagSetting(a), f;
        return d !== e ? d : (f = this.mergedOptions[a]) === c ? b : f
      }
    }), d.fn.sparkline._base = g({
      disabled: !1, init: function (a, b, e, f, g) {
        this.el = a, this.$el = d(a), this.values = b, this.options = e, this.width = f, this.height = g, this.currentRegion = c
      }, initTarget: function () {
        var a = !this.options.get("disableInteraction");
        (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), a)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0
      }, render: function () {
        return this.disabled ? (this.el.innerHTML = "", !1) : !0
      }, getRegion: function (a, b) {
      }, setRegionHighlight: function (a, b, d) {
        var e = this.currentRegion, f = !this.options.get("disableHighlight"), g;
        return b > this.canvasWidth || d > this.canvasHeight || b < 0 || d < 0 ? null : (g = this.getRegion(a, b, d), e !== g ? (e !== c && f && this.removeHighlight(), this.currentRegion = g, g !== c && f && this.renderHighlight(), !0) : !1)
      }, clearRegionHighlight: function () {
        return this.currentRegion !== c ? (this.removeHighlight(), this.currentRegion = c, !0) : !1
      }, renderHighlight: function () {
        this.changeHighlight(!0)
      }, removeHighlight: function () {
        this.changeHighlight(!1)
      }, changeHighlight: function (a) {
      }, getCurrentRegionTooltip: function () {
        var a = this.options, b = "", e = [], f, g, i, j, k, l, m, n, o, p, q, r, s, t;
        if (this.currentRegion === c)return "";
        f = this.getCurrentRegionFields(), q = a.get("tooltipFormatter");
        if (q)return q(this, a, f);
        a.get("tooltipChartTitle") && (b += '<div class="jqs jqstitle">' + a.get("tooltipChartTitle") + "</div>\n"), g = this.options.get("tooltipFormat");
        if (!g)return "";
        d.isArray(g) || (g = [g]), d.isArray(f) || (f = [f]), m = this.options.get("tooltipFormatFieldlist"), n = this.options.get("tooltipFormatFieldlistKey");
        if (m && n) {
          o = [];
          for (l = f.length; l--;)p = f[l][n], (t = d.inArray(p, m)) != -1 && (o[t] = f[l]);
          f = o
        }
        i = g.length, s = f.length;
        for (l = 0; l < i; l++) {
          r = g[l], typeof r == "string" && (r = new h(r)), j = r.fclass || "jqsfield";
          for (t = 0; t < s; t++)if (!f[t].isNull || !a.get("tooltipSkipNull"))d.extend(f[t], {
            prefix: a.get("tooltipPrefix"),
            suffix: a.get("tooltipSuffix")
          }), k = r.render(f[t], a.get("tooltipValueLookups"), a), e.push('<div class="' + j + '">' + k + "</div>")
        }
        return e.length ? b + e.join("\n") : ""
      }, getCurrentRegionFields: function () {
      }, calcHighlightColor: function (a, c) {
        var d = c.get("highlightColor"), e = c.get("highlightLighten"), f, g, h, j;
        if (d)return d;
        if (e) {
          f = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);
          if (f) {
            h = [], g = a.length === 4 ? 16 : 1;
            for (j = 0; j < 3; j++)h[j] = i(b.round(parseInt(f[j + 1], 16) * g * e), 0, 255);
            return "rgb(" + h.join(",") + ")"
          }
        }
        return a
      }
    }), w = {
      changeHighlight: function (a) {
        var b = this.currentRegion, c = this.target, e = this.regionShapes[b], f;
        e && (f = this.renderRegion(b, a), d.isArray(f) || d.isArray(e) ? (c.replaceWithShapes(e, f), this.regionShapes[b] = d.map(f, function (a) {
          return a.id
        })) : (c.replaceWithShape(e, f), this.regionShapes[b] = f.id))
      }, render: function () {
        var a = this.values, b = this.target, c = this.regionShapes, e, f, g, h;
        if (!this.cls._super.render.call(this))return;
        for (g = a.length; g--;) {
          e = this.renderRegion(g);
          if (e)if (d.isArray(e)) {
            f = [];
            for (h = e.length; h--;)e[h].append(), f.push(e[h].id);
            c[g] = f
          } else e.append(), c[g] = e.id; else c[g] = null
        }
        b.render()
      }
    }, d.fn.sparkline.line = x = g(d.fn.sparkline._base, {
      type: "line", init: function (a, b, c, d, e) {
        x._super.init.call(this, a, b, c, d, e), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget()
      }, getRegion: function (a, b, d) {
        var e, f = this.regionMap;
        for (e = f.length; e--;)if (f[e] !== null && b >= f[e][0] && b <= f[e][1])return f[e][2];
        return c
      }, getCurrentRegionFields: function () {
        var a = this.currentRegion;
        return {
          isNull: this.yvalues[a] === null,
          x: this.xvalues[a],
          y: this.yvalues[a],
          color: this.options.get("lineColor"),
          fillColor: this.options.get("fillColor"),
          offset: a
        }
      }, renderHighlight: function () {
        var a = this.currentRegion, b = this.target, d = this.vertices[a], e = this.options, f = e.get("spotRadius"), g = e.get("highlightSpotColor"), h = e.get("highlightLineColor"), i, j;
        if (!d)return;
        f && g && (i = b.drawCircle(d[0], d[1], f, c, g), this.highlightSpotId = i.id, b.insertAfterShape(this.lastShapeId, i)), h && (j = b.drawLine(d[0], this.canvasTop, d[0], this.canvasTop + this.canvasHeight, h), this.highlightLineId = j.id, b.insertAfterShape(this.lastShapeId, j))
      }, removeHighlight: function () {
        var a = this.target;
        this.highlightSpotId && (a.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (a.removeShapeId(this.highlightLineId), this.highlightLineId = null)
      }, scanValues: function () {
        var a = this.values, c = a.length, d = this.xvalues, e = this.yvalues, f = this.yminmax, g, h, i, j, k;
        for (g = 0; g < c; g++)h = a[g], i = typeof a[g] == "string", j = typeof a[g] == "object" && a[g]instanceof Array, k = i && a[g].split(":"), i && k.length === 2 ? (d.push(Number(k[0])), e.push(Number(k[1])), f.push(Number(k[1]))) : j ? (d.push(h[0]), e.push(h[1]), f.push(h[1])) : (d.push(g), a[g] === null || a[g] === "null" ? e.push(null) : (e.push(Number(h)), f.push(Number(h))));
        this.options.get("xvalues") && (d = this.options.get("xvalues")), this.maxy = this.maxyorg = b.max.apply(b, f), this.miny = this.minyorg = b.min.apply(b, f), this.maxx = b.max.apply(b, d), this.minx = b.min.apply(b, d), this.xvalues = d, this.yvalues = e, this.yminmax = f
      }, processRangeOptions: function () {
        var a = this.options, b = a.get("normalRangeMin"), d = a.get("normalRangeMax");
        b !== c && (b < this.miny && (this.miny = b), d > this.maxy && (this.maxy = d)), a.get("chartRangeMin") !== c && (a.get("chartRangeClip") || a.get("chartRangeMin") < this.miny) && (this.miny = a.get("chartRangeMin")), a.get("chartRangeMax") !== c && (a.get("chartRangeClip") || a.get("chartRangeMax") > this.maxy) && (this.maxy = a.get("chartRangeMax")), a.get("chartRangeMinX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMinX") < this.minx) && (this.minx = a.get("chartRangeMinX")), a.get("chartRangeMaxX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMaxX") > this.maxx) && (this.maxx = a.get("chartRangeMaxX"))
      }, drawNormalRange: function (a, d, e, f, g) {
        var h = this.options.get("normalRangeMin"), i = this.options.get("normalRangeMax"), j = d + b.round(e - e * ((i - this.miny) / g)), k = b.round(e * (i - h) / g);
        this.target.drawRect(a, j, f, k, c, this.options.get("normalRangeColor")).append()
      }, render: function () {
        var a = this.options, e = this.target, f = this.canvasWidth, g = this.canvasHeight, h = this.vertices, i = a.get("spotRadius"), j = this.regionMap, k, l, m, n, o, p, q, r, s, u, v, w, y, z, A, B, C, D, E, F, G, H, I, J, K;
        if (!x._super.render.call(this))return;
        this.scanValues(), this.processRangeOptions(), I = this.xvalues, J = this.yvalues;
        if (!this.yminmax.length || this.yvalues.length < 2)return;
        n = o = 0, k = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx, l = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny, m = this.yvalues.length - 1, i && (f < i * 4 || g < i * 4) && (i = 0);
        if (i) {
          G = a.get("highlightSpotColor") && !a.get("disableInteraction");
          if (G || a.get("minSpotColor") || a.get("spotColor") && J[m] === this.miny)g -= b.ceil(i);
          if (G || a.get("maxSpotColor") || a.get("spotColor") && J[m] === this.maxy)g -= b.ceil(i), n += b.ceil(i);
          if (G || (a.get("minSpotColor") || a.get("maxSpotColor")) && (J[0] === this.miny || J[0] === this.maxy))o += b.ceil(i), f -= b.ceil(i);
          if (G || a.get("spotColor") || a.get("minSpotColor") || a.get("maxSpotColor") && (J[m] === this.miny || J[m] === this.maxy))f -= b.ceil(i)
        }
        g--, a.get("normalRangeMin") !== c && !a.get("drawNormalOnTop") && this.drawNormalRange(o, n, g, f, l), q = [], r = [q], z = A = null, B = J.length;
        for (K = 0; K < B; K++)s = I[K], v = I[K + 1], u = J[K], w = o + b.round((s - this.minx) * (f / k)), y = K < B - 1 ? o + b.round((v - this.minx) * (f / k)) : f, A = w + (y - w) / 2, j[K] = [z || 0, A, K], z = A, u === null ? K && (J[K - 1] !== null && (q = [], r.push(q)), h.push(null)) : (u < this.miny && (u = this.miny), u > this.maxy && (u = this.maxy), q.length || q.push([w, n + g]), p = [w, n + b.round(g - g * ((u - this.miny) / l))], q.push(p), h.push(p));
        C = [], D = [], E = r.length;
        for (K = 0; K < E; K++)q = r[K], q.length && (a.get("fillColor") && (q.push([q[q.length - 1][0], n + g]), D.push(q.slice(0)), q.pop()), q.length > 2 && (q[0] = [q[0][0], q[1][1]]), C.push(q));
        E = D.length;
        for (K = 0; K < E; K++)e.drawShape(D[K], a.get("fillColor"), a.get("fillColor")).append();
        a.get("normalRangeMin") !== c && a.get("drawNormalOnTop") && this.drawNormalRange(o, n, g, f, l), E = C.length;
        for (K = 0; K < E; K++)e.drawShape(C[K], a.get("lineColor"), c, a.get("lineWidth")).append();
        if (i && a.get("valueSpots")) {
          F = a.get("valueSpots"), F.get === c && (F = new t(F));
          for (K = 0; K < B; K++)H = F.get(J[K]), H && e.drawCircle(o + b.round((I[K] - this.minx) * (f / k)), n + b.round(g - g * ((J[K] - this.miny) / l)), i, c, H).append()
        }
        i && a.get("spotColor") && J[m] !== null && e.drawCircle(o + b.round((I[I.length - 1] - this.minx) * (f / k)), n + b.round(g - g * ((J[m] - this.miny) / l)), i, c, a.get("spotColor")).append(), this.maxy !== this.minyorg && (i && a.get("minSpotColor") && (s = I[d.inArray(this.minyorg, J)], e.drawCircle(o + b.round((s - this.minx) * (f / k)), n + b.round(g - g * ((this.minyorg - this.miny) / l)), i, c, a.get("minSpotColor")).append()), i && a.get("maxSpotColor") && (s = I[d.inArray(this.maxyorg, J)], e.drawCircle(o + b.round((s - this.minx) * (f / k)), n + b.round(g - g * ((this.maxyorg - this.miny) / l)), i, c, a.get("maxSpotColor")).append())), this.lastShapeId = e.getLastShapeId(), this.canvasTop = n, e.render()
      }
    }), d.fn.sparkline.bar = y = g(d.fn.sparkline._base, w, {
      type: "bar", init: function (a, e, f, g, h) {
        var j = parseInt(f.get("barWidth"), 10), n = parseInt(f.get("barSpacing"), 10), o = f.get("chartRangeMin"), p = f.get("chartRangeMax"), q = f.get("chartRangeClip"), r = Infinity, s = -Infinity, u, v, w, x, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R;
        y._super.init.call(this, a, e, f, g, h);
        for (A = 0, B = e.length; A < B; A++) {
          O = e[A], u = typeof O == "string" && O.indexOf(":") > -1;
          if (u || d.isArray(O))J = !0, u && (O = e[A] = l(O.split(":"))), O = m(O, null), v = b.min.apply(b, O), w = b.max.apply(b, O), v < r && (r = v), w > s && (s = w)
        }
        this.stacked = J, this.regionShapes = {}, this.barWidth = j, this.barSpacing = n, this.totalBarWidth = j + n, this.width = g = e.length * j + (e.length - 1) * n, this.initTarget(), q && (H = o === c ? -Infinity : o, I = p === c ? Infinity : p), z = [], x = J ? [] : z;
        var S = [], T = [];
        for (A = 0, B = e.length; A < B; A++)if (J) {
          K = e[A], e[A] = N = [], S[A] = 0, x[A] = T[A] = 0;
          for (L = 0, M = K.length; L < M; L++)O = N[L] = q ? i(K[L], H, I) : K[L], O !== null && (O > 0 && (S[A] += O), r < 0 && s > 0 ? O < 0 ? T[A] += b.abs(O) : x[A] += O : x[A] += b.abs(O - (O < 0 ? s : r)), z.push(O))
        } else O = q ? i(e[A], H, I) : e[A], O = e[A] = k(O), O !== null && z.push(O);
        this.max = G = b.max.apply(b, z), this.min = F = b.min.apply(b, z), this.stackMax = s = J ? b.max.apply(b, S) : G, this.stackMin = r = J ? b.min.apply(b, z) : F, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < F) && (F = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > G) && (G = f.get("chartRangeMax")), this.zeroAxis = D = f.get("zeroAxis", !0), F <= 0 && G >= 0 && D ? E = 0 : D == 0 ? E = F : F > 0 ? E = F : E = G, this.xaxisOffset = E, C = J ? b.max.apply(b, x) + b.max.apply(b, T) : G - F, this.canvasHeightEf = D && F < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, F < E ? (Q = J && G >= 0 ? s : G, P = (Q - E) / C * this.canvasHeight, P !== b.ceil(P) && (this.canvasHeightEf -= 2, P = b.ceil(P))) : P = this.canvasHeight, this.yoffset = P, d.isArray(f.get("colorMap")) ? (this.colorMapByIndex = f.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = f.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new t(this.colorMapByValue))), this.range = C
      }, getRegion: function (a, d, e) {
        var f = b.floor(d / this.totalBarWidth);
        return f < 0 || f >= this.values.length ? c : f
      }, getCurrentRegionFields: function () {
        var a = this.currentRegion, b = r(this.values[a]), c = [], d, e;
        for (e = b.length; e--;)d = b[e], c.push({
          isNull: d === null,
          value: d,
          color: this.calcColor(e, d, a),
          offset: a
        });
        return c
      }, calcColor: function (a, b, e) {
        var f = this.colorMapByIndex, g = this.colorMapByValue, h = this.options, i, j;
        return this.stacked ? i = h.get("stackedBarColor") : i = b < 0 ? h.get("negBarColor") : h.get("barColor"), b === 0 && h.get("zeroColor") !== c && (i = h.get("zeroColor")), g && (j = g.get(b)) ? i = j : f && f.length > e && (i = f[e]), d.isArray(i) ? i[a % i.length] : i
      }, renderRegion: function (a, e) {
        var f = this.values[a], g = this.options, h = this.xaxisOffset, i = [], j = this.range, k = this.stacked, l = this.target, m = a * this.totalBarWidth, n = this.canvasHeightEf, p = this.yoffset, q, r, s, t, u, v, w, x, y, z;
        f = d.isArray(f) ? f : [f], w = f.length, x = f[0], t = o(null, f), z = o(h, f, !0);
        if (t)return g.get("nullColor") ? (s = e ? g.get("nullColor") : this.calcHighlightColor(g.get("nullColor"), g), q = p > 0 ? p - 1 : p, l.drawRect(m, q, this.barWidth - 1, 0, s, s)) : c;
        u = p;
        for (v = 0; v < w; v++) {
          x = f[v];
          if (k && x === h) {
            if (!z || y)continue;
            y = !0
          }
          j > 0 ? r = b.floor(n * (b.abs(x - h) / j)) + 1 : r = 1, x < h || x === h && p === 0 ? (q = u, u += r) : (q = p - r, p -= r), s = this.calcColor(v, x, a), e && (s = this.calcHighlightColor(s, g)), i.push(l.drawRect(m, q, this.barWidth - 1, r - 1, s, s))
        }
        return i.length === 1 ? i[0] : i
      }
    }), d.fn.sparkline.tristate = z = g(d.fn.sparkline._base, w, {
      type: "tristate", init: function (a, b, e, f, g) {
        var h = parseInt(e.get("barWidth"), 10), i = parseInt(e.get("barSpacing"), 10);
        z._super.init.call(this, a, b, e, f, g), this.regionShapes = {}, this.barWidth = h, this.barSpacing = i, this.totalBarWidth = h + i, this.values = d.map(b, Number), this.width = f = b.length * h + (b.length - 1) * i, d.isArray(e.get("colorMap")) ? (this.colorMapByIndex = e.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = e.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new t(this.colorMapByValue))), this.initTarget()
      }, getRegion: function (a, c, d) {
        return b.floor(c / this.totalBarWidth)
      }, getCurrentRegionFields: function () {
        var a = this.currentRegion;
        return {
          isNull: this.values[a] === c,
          value: this.values[a],
          color: this.calcColor(this.values[a], a),
          offset: a
        }
      }, calcColor: function (a, b) {
        var c = this.values, d = this.options, e = this.colorMapByIndex, f = this.colorMapByValue, g, h;
        return f && (h = f.get(a)) ? g = h : e && e.length > b ? g = e[b] : c[b] < 0 ? g = d.get("negBarColor") : c[b] > 0 ? g = d.get("posBarColor") : g = d.get("zeroBarColor"), g
      }, renderRegion: function (a, c) {
        var d = this.values, e = this.options, f = this.target, g, h, i, j, k, l;
        g = f.pixelHeight, i = b.round(g / 2), j = a * this.totalBarWidth, d[a] < 0 ? (k = i, h = i - 1) : d[a] > 0 ? (k = 0, h = i - 1) : (k = i - 1, h = 2), l = this.calcColor(d[a], a);
        if (l === null)return;
        return c && (l = this.calcHighlightColor(l, e)), f.drawRect(j, k, this.barWidth - 1, h - 1, l, l)
      }
    }), d.fn.sparkline.discrete = A = g(d.fn.sparkline._base, w, {
      type: "discrete", init: function (a, e, f, g, h) {
        A._super.init.call(this, a, e, f, g, h), this.regionShapes = {}, this.values = e = d.map(e, Number), this.min = b.min.apply(b, e), this.max = b.max.apply(b, e), this.range = this.max - this.min, this.width = g = f.get("width") === "auto" ? e.length * 2 : this.width, this.interval = b.floor(g / e.length), this.itemWidth = g / e.length, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < this.min) && (this.min = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > this.max) && (this.max = f.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = f.get("lineHeight") === "auto" ? b.round(this.canvasHeight * .3) : f.get("lineHeight"))
      }, getRegion: function (a, c, d) {
        return b.floor(c / this.itemWidth)
      }, getCurrentRegionFields: function () {
        var a = this.currentRegion;
        return {isNull: this.values[a] === c, value: this.values[a], offset: a}
      }, renderRegion: function (a, c) {
        var d = this.values, e = this.options, f = this.min, g = this.max, h = this.range, j = this.interval, k = this.target, l = this.canvasHeight, m = this.lineHeight, n = l - m, o, p, q, r;
        return p = i(d[a], f, g), r = a * j, o = b.round(n - n * ((p - f) / h)), q = e.get("thresholdColor") && p < e.get("thresholdValue") ? e.get("thresholdColor") : e.get("lineColor"), c && (q = this.calcHighlightColor(q, e)), k.drawLine(r, o, r, o + m, q)
      }
    }), d.fn.sparkline.bullet = B = g(d.fn.sparkline._base, {
      type: "bullet", init: function (a, d, e, f, g) {
        var h, i, j;
        B._super.init.call(this, a, d, e, f, g), this.values = d = l(d), j = d.slice(), j[0] = j[0] === null ? j[2] : j[0], j[1] = d[1] === null ? j[2] : j[1], h = b.min.apply(b, d), i = b.max.apply(b, d), e.get("base") === c ? h = h < 0 ? h : 0 : h = e.get("base"), this.min = h, this.max = i, this.range = i - h, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = f = e.get("width") === "auto" ? "4.0em" : f, this.target = this.$el.simpledraw(f, g, e.get("composite")), d.length || (this.disabled = !0), this.initTarget()
      }, getRegion: function (a, b, d) {
        var e = this.target.getShapeAt(a, b, d);
        return e !== c && this.shapes[e] !== c ? this.shapes[e] : c
      }, getCurrentRegionFields: function () {
        var a = this.currentRegion;
        return {fieldkey: a.substr(0, 1), value: this.values[a.substr(1)], region: a}
      }, changeHighlight: function (a) {
        var b = this.currentRegion, c = this.valueShapes[b], d;
        delete this.shapes[c];
        switch (b.substr(0, 1)) {
          case"r":
            d = this.renderRange(b.substr(1), a);
            break;
          case"p":
            d = this.renderPerformance(a);
            break;
          case"t":
            d = this.renderTarget(a)
        }
        this.valueShapes[b] = d.id, this.shapes[d.id] = b, this.target.replaceWithShape(c, d)
      }, renderRange: function (a, c) {
        var d = this.values[a], e = b.round(this.canvasWidth * ((d - this.min) / this.range)), f = this.options.get("rangeColors")[a - 2];
        return c && (f = this.calcHighlightColor(f, this.options)), this.target.drawRect(0, 0, e - 1, this.canvasHeight - 1, f, f)
      }, renderPerformance: function (a) {
        var c = this.values[1], d = b.round(this.canvasWidth * ((c - this.min) / this.range)), e = this.options.get("performanceColor");
        return a && (e = this.calcHighlightColor(e, this.options)), this.target.drawRect(0, b.round(this.canvasHeight * .3), d - 1, b.round(this.canvasHeight * .4) - 1, e, e)
      }, renderTarget: function (a) {
        var c = this.values[0], d = b.round(this.canvasWidth * ((c - this.min) / this.range) - this.options.get("targetWidth") / 2), e = b.round(this.canvasHeight * .1), f = this.canvasHeight - e * 2, g = this.options.get("targetColor");
        return a && (g = this.calcHighlightColor(g, this.options)), this.target.drawRect(d, e, this.options.get("targetWidth") - 1, f - 1, g, g)
      }, render: function () {
        var a = this.values.length, b = this.target, c, d;
        if (!B._super.render.call(this))return;
        for (c = 2; c < a; c++)d = this.renderRange(c).append(), this.shapes[d.id] = "r" + c, this.valueShapes["r" + c] = d.id;
        this.values[1] !== null && (d = this.renderPerformance().append(), this.shapes[d.id] = "p1", this.valueShapes.p1 = d.id), this.values[0] !== null && (d = this.renderTarget().append(), this.shapes[d.id] = "t0", this.valueShapes.t0 = d.id), b.render()
      }
    }), d.fn.sparkline.pie = C = g(d.fn.sparkline._base, {
      type: "pie", init: function (a, c, e, f, g) {
        var h = 0, i;
        C._super.init.call(this, a, c, e, f, g), this.shapes = {}, this.valueShapes = {}, this.values = c = d.map(c, Number), e.get("width") === "auto" && (this.width = this.height);
        if (c.length > 0)for (i = c.length; i--;)h += c[i];
        this.total = h, this.initTarget(), this.radius = b.floor(b.min(this.canvasWidth, this.canvasHeight) / 2)
      }, getRegion: function (a, b, d) {
        var e = this.target.getShapeAt(a, b, d);
        return e !== c && this.shapes[e] !== c ? this.shapes[e] : c
      }, getCurrentRegionFields: function () {
        var a = this.currentRegion;
        return {
          isNull: this.values[a] === c,
          value: this.values[a],
          percent: this.values[a] / this.total * 100,
          color: this.options.get("sliceColors")[a % this.options.get("sliceColors").length],
          offset: a
        }
      }, changeHighlight: function (a) {
        var b = this.currentRegion, c = this.renderSlice(b, a), d = this.valueShapes[b];
        delete this.shapes[d], this.target.replaceWithShape(d, c), this.valueShapes[b] = c.id, this.shapes[c.id] = b
      }, renderSlice: function (a, d) {
        var e = this.target, f = this.options, g = this.radius, h = f.get("borderWidth"), i = f.get("offset"), j = 2 * b.PI, k = this.values, l = this.total, m = i ? 2 * b.PI * (i / 360) : 0, n, o, p, q, r;
        q = k.length;
        for (p = 0; p < q; p++) {
          n = m, o = m, l > 0 && (o = m + j * (k[p] / l));
          if (a === p)return r = f.get("sliceColors")[p % f.get("sliceColors").length], d && (r = this.calcHighlightColor(r, f)), e.drawPieSlice(g, g, g - h, n, o, c, r);
          m = o
        }
      }, render: function () {
        var a = this.target, d = this.values, e = this.options, f = this.radius, g = e.get("borderWidth"), h, i;
        if (!C._super.render.call(this))return;
        g && a.drawCircle(f, f, b.floor(f - g / 2), e.get("borderColor"), c, g).append();
        for (i = d.length; i--;)d[i] && (h = this.renderSlice(i).append(), this.valueShapes[i] = h.id, this.shapes[h.id] = i);
        a.render()
      }
    }), d.fn.sparkline.box = D = g(d.fn.sparkline._base, {
      type: "box", init: function (a, b, c, e, f) {
        D._super.init.call(this, a, b, c, e, f), this.values = d.map(b, Number), this.width = c.get("width") === "auto" ? "4.0em" : e, this.initTarget(), this.values.length || (this.disabled = 1)
      }, getRegion: function () {
        return 1
      }, getCurrentRegionFields: function () {
        var a = [{field: "lq", value: this.quartiles[0]}, {field: "med", value: this.quartiles[1]}, {
          field: "uq",
          value: this.quartiles[2]
        }];
        return this.loutlier !== c && a.push({
          field: "lo",
          value: this.loutlier
        }), this.routlier !== c && a.push({
          field: "ro",
          value: this.routlier
        }), this.lwhisker !== c && a.push({
          field: "lw",
          value: this.lwhisker
        }), this.rwhisker !== c && a.push({field: "rw", value: this.rwhisker}), a
      }, render: function () {
        var a = this.target, d = this.values, e = d.length, f = this.options, g = this.canvasWidth, h = this.canvasHeight, i = f.get("chartRangeMin") === c ? b.min.apply(b, d) : f.get("chartRangeMin"), k = f.get("chartRangeMax") === c ? b.max.apply(b, d) : f.get("chartRangeMax"), l = 0, m, n, o, p, q, r, s, t, u, v, w;
        if (!D._super.render.call(this))return;
        if (f.get("raw"))f.get("showOutliers") && d.length > 5 ? (n = d[0], m = d[1], p = d[2], q = d[3], r = d[4], s = d[5], t = d[6]) : (m = d[0], p = d[1], q = d[2], r = d[3], s = d[4]); else {
          d.sort(function (a, b) {
            return a - b
          }), p = j(d, 1), q = j(d, 2), r = j(d, 3), o = r - p;
          if (f.get("showOutliers")) {
            m = s = c;
            for (u = 0; u < e; u++)m === c && d[u] > p - o * f.get("outlierIQR") && (m = d[u]), d[u] < r + o * f.get("outlierIQR") && (s = d[u]);
            n = d[0], t = d[e - 1]
          } else m = d[0], s = d[e - 1]
        }
        this.quartiles = [p, q, r], this.lwhisker = m, this.rwhisker = s, this.loutlier = n, this.routlier = t, w = g / (k - i + 1), f.get("showOutliers") && (l = b.ceil(f.get("spotRadius")), g -= 2 * b.ceil(f.get("spotRadius")), w = g / (k - i + 1), n < m && a.drawCircle((n - i) * w + l, h / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append(), t > s && a.drawCircle((t - i) * w + l, h / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append()), a.drawRect(b.round((p - i) * w + l), b.round(h * .1), b.round((r - p) * w), b.round(h * .8), f.get("boxLineColor"), f.get("boxFillColor")).append(), a.drawLine(b.round((m - i) * w + l), b.round(h / 2), b.round((p - i) * w + l), b.round(h / 2), f.get("lineColor")).append(), a.drawLine(b.round((m - i) * w + l), b.round(h / 4), b.round((m - i) * w + l), b.round(h - h / 4), f.get("whiskerColor")).append(), a.drawLine(b.round((s - i) * w + l), b.round(h / 2), b.round((r - i) * w + l), b.round(h / 2), f.get("lineColor")).append(), a.drawLine(b.round((s - i) * w + l), b.round(h / 4), b.round((s - i) * w + l), b.round(h - h / 4), f.get("whiskerColor")).append(), a.drawLine(b.round((q - i) * w + l), b.round(h * .1), b.round((q - i) * w + l), b.round(h * .9), f.get("medianColor")).append(), f.get("target") && (v = b.ceil(f.get("spotRadius")), a.drawLine(b.round((f.get("target") - i) * w + l), b.round(h / 2 - v), b.round((f.get("target") - i) * w + l), b.round(h / 2 + v), f.get("targetColor")).append(), a.drawLine(b.round((f.get("target") - i) * w + l - v), b.round(h / 2), b.round((f.get("target") - i) * w + l + v), b.round(h / 2), f.get("targetColor")).append()), a.render()
      }
    }), G = g({
      init: function (a, b, c, d) {
        this.target = a, this.id = b, this.type = c, this.args = d
      }, append: function () {
        return this.target.appendShape(this), this
      }
    }), H = g({
      _pxregex: /(\d+)(px)?\s*$/i, init: function (a, b, c) {
        if (!a)return;
        this.width = a, this.height = b, this.target = c, this.lastShapeId = null, c[0] && (c = c[0]), d.data(c, "_jqs_vcanvas", this)
      }, drawLine: function (a, b, c, d, e, f) {
        return this.drawShape([[a, b], [c, d]], e, f)
      }, drawShape: function (a, b, c, d) {
        return this._genShape("Shape", [a, b, c, d])
      }, drawCircle: function (a, b, c, d, e, f) {
        return this._genShape("Circle", [a, b, c, d, e, f])
      }, drawPieSlice: function (a, b, c, d, e, f, g) {
        return this._genShape("PieSlice", [a, b, c, d, e, f, g])
      }, drawRect: function (a, b, c, d, e, f) {
        return this._genShape("Rect", [a, b, c, d, e, f])
      }, getElement: function () {
        return this.canvas
      }, getLastShapeId: function () {
        return this.lastShapeId
      }, reset: function () {
        alert("reset not implemented")
      }, _insert: function (a, b) {
        d(b).html(a)
      }, _calculatePixelDims: function (a, b, c) {
        var e;
        e = this._pxregex.exec(b), e ? this.pixelHeight = e[1] : this.pixelHeight = d(c).height(), e = this._pxregex.exec(a), e ? this.pixelWidth = e[1] : this.pixelWidth = d(c).width()
      }, _genShape: function (a, b) {
        var c = L++;
        return b.unshift(c), new G(this, c, a, b)
      }, appendShape: function (a) {
        alert("appendShape not implemented")
      }, replaceWithShape: function (a, b) {
        alert("replaceWithShape not implemented")
      }, insertAfterShape: function (a, b) {
        alert("insertAfterShape not implemented")
      }, removeShapeId: function (a) {
        alert("removeShapeId not implemented")
      }, getShapeAt: function (a, b, c) {
        alert("getShapeAt not implemented")
      }, render: function () {
        alert("render not implemented")
      }
    }), I = g(H, {
      init: function (b, e, f, g) {
        I._super.init.call(this, b, e, f), this.canvas = a.createElement("canvas"), f[0] && (f = f[0]), d.data(f, "_jqs_vcanvas", this), d(this.canvas).css({
          display: "inline-block",
          width: b,
          height: e,
          verticalAlign: "top"
        }), this._insert(this.canvas, f), this._calculatePixelDims(b, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = g, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c, d(this.canvas).css({
          width: this.pixelWidth,
          height: this.pixelHeight
        })
      }, _getContext: function (a, b, d) {
        var e = this.canvas.getContext("2d");
        return a !== c && (e.strokeStyle = a), e.lineWidth = d === c ? 1 : d, b !== c && (e.fillStyle = b), e
      }, reset: function () {
        var a = this._getContext();
        a.clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c
      }, _drawShape: function (a, b, d, e, f) {
        var g = this._getContext(d, e, f), h, i;
        g.beginPath(), g.moveTo(b[0][0] + .5, b[0][1] + .5);
        for (h = 1, i = b.length; h < i; h++)g.lineTo(b[h][0] + .5, b[h][1] + .5);
        d !== c && g.stroke(), e !== c && g.fill(), this.targetX !== c && this.targetY !== c && g.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a)
      }, _drawCircle: function (a, d, e, f, g, h, i) {
        var j = this._getContext(g, h, i);
        j.beginPath(), j.arc(d, e, f, 0, 2 * b.PI, !1), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a), g !== c && j.stroke(), h !== c && j.fill()
      }, _drawPieSlice: function (a, b, d, e, f, g, h, i) {
        var j = this._getContext(h, i);
        j.beginPath(), j.moveTo(b, d), j.arc(b, d, e, f, g, !1), j.lineTo(b, d), j.closePath(), h !== c && j.stroke(), i && j.fill(), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a)
      }, _drawRect: function (a, b, c, d, e, f, g) {
        return this._drawShape(a, [[b, c], [b + d, c], [b + d, c + e], [b, c + e], [b, c]], f, g)
      }, appendShape: function (a) {
        return this.shapes[a.id] = a, this.shapeseq.push(a.id), this.lastShapeId = a.id, a.id
      }, replaceWithShape: function (a, b) {
        var c = this.shapeseq, d;
        this.shapes[b.id] = b;
        for (d = c.length; d--;)c[d] == a && (c[d] = b.id);
        delete this.shapes[a]
      }, replaceWithShapes: function (a, b) {
        var c = this.shapeseq, d = {}, e, f, g;
        for (f = a.length; f--;)d[a[f]] = !0;
        for (f = c.length; f--;)e = c[f], d[e] && (c.splice(f, 1), delete this.shapes[e], g = f);
        for (f = b.length; f--;)c.splice(g, 0, b[f].id), this.shapes[b[f].id] = b[f]
      }, insertAfterShape: function (a, b) {
        var c = this.shapeseq, d;
        for (d = c.length; d--;)if (c[d] === a) {
          c.splice(d + 1, 0, b.id), this.shapes[b.id] = b;
          return
        }
      }, removeShapeId: function (a) {
        var b = this.shapeseq, c;
        for (c = b.length; c--;)if (b[c] === a) {
          b.splice(c, 1);
          break
        }
        delete this.shapes[a]
      }, getShapeAt: function (a, b, c) {
        return this.targetX = b, this.targetY = c, this.render(), this.currentTargetShapeId
      }, render: function () {
        var a = this.shapeseq, b = this.shapes, c = a.length, d = this._getContext(), e, f, g;
        d.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
        for (g = 0; g < c; g++)e = a[g], f = b[e], this["_draw" + f.type].apply(this, f.args);
        this.interact || (this.shapes = {}, this.shapeseq = [])
      }
    }), J = g(H, {
      init: function (b, c, e) {
        var f;
        J._super.init.call(this, b, c, e), e[0] && (e = e[0]), d.data(e, "_jqs_vcanvas", this), this.canvas = a.createElement("span"), d(this.canvas).css({
          display: "inline-block",
          position: "relative",
          overflow: "hidden",
          width: b,
          height: c,
          margin: "0px",
          padding: "0px",
          verticalAlign: "top"
        }), this._insert(this.canvas, e), this._calculatePixelDims(b, c, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, f = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"' + ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", f), this.group = d(this.canvas).children()[0], this.rendered = !1, this.prerender = ""
      }, _drawShape: function (a, b, d, e, f) {
        var g = [], h, i, j, k, l, m, n;
        for (n = 0, m = b.length; n < m; n++)g[n] = "" + b[n][0] + "," + b[n][1];
        return h = g.splice(0, 1), f = f === c ? 1 : f, i = d === c ? ' stroked="false" ' : ' strokeWeight="' + f + 'px" strokeColor="' + d + '" ', j = e === c ? ' filled="false"' : ' fillColor="' + e + '" filled="true" ', k = g[0] === g[g.length - 1] ? "x " : "", l = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + h + " l " + g.join(", ") + " " + k + 'e">' + " </v:shape>", l
      }, _drawCircle: function (a, b, d, e, f, g, h) {
        var i, j, k;
        return b -= e, d -= e, i = f === c ? ' stroked="false" ' : ' strokeWeight="' + h + 'px" strokeColor="' + f + '" ', j = g === c ? ' filled="false"' : ' fillColor="' + g + '" filled="true" ', k = '<v:oval  id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;top:' + d + "px; left:" + b + "px; width:" + e * 2 + "px; height:" + e * 2 + 'px"></v:oval>', k
      }, _drawPieSlice: function (a, d, e, f, g, h, i, j) {
        var k, l, m, n, o, p, q, r;
        if (g === h)return "";
        h - g === 2 * b.PI && (g = 0, h = 2 * b.PI), l = d + b.round(b.cos(g) * f), m = e + b.round(b.sin(g) * f), n = d + b.round(b.cos(h) * f), o = e + b.round(b.sin(h) * f);
        if (l === n && m === o) {
          if (h - g < b.PI)return "";
          l = n = d + f, m = o = e
        }
        return l === n && m === o && h - g < b.PI ? "" : (k = [d - f, e - f, d + f, e + f, l, m, n, o], p = i === c ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + i + '" ', q = j === c ? ' filled="false"' : ' fillColor="' + j + '" filled="true" ', r = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + a + '" ' + p + q + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + d + "," + e + " wa " + k.join(", ") + ' x e">' + " </v:shape>", r)
      }, _drawRect: function (a, b, c, d, e, f, g) {
        return this._drawShape(a, [[b, c], [b, c + e], [b + d, c + e], [b + d, c], [b, c]], f, g)
      }, reset: function () {
        this.group.innerHTML = ""
      }, appendShape: function (a) {
        var b = this["_draw" + a.type].apply(this, a.args);
        return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", b) : this.prerender += b, this.lastShapeId = a.id, a.id
      }, replaceWithShape: function (a, b) {
        var c = d("#jqsshape" + a), e = this["_draw" + b.type].apply(this, b.args);
        c[0].outerHTML = e
      }, replaceWithShapes: function (a, b) {
        var c = d("#jqsshape" + a[0]), e = "", f = b.length, g;
        for (g = 0; g < f; g++)e += this["_draw" + b[g].type].apply(this, b[g].args);
        c[0].outerHTML = e;
        for (g = 1; g < a.length; g++)d("#jqsshape" + a[g]).remove()
      }, insertAfterShape: function (a, b) {
        var c = d("#jqsshape" + a), e = this["_draw" + b.type].apply(this, b.args);
        c[0].insertAdjacentHTML("afterEnd", e)
      }, removeShapeId: function (a) {
        var b = d("#jqsshape" + a);
        this.group.removeChild(b[0])
      }, getShapeAt: function (a, b, c) {
        var d = a.id.substr(8);
        return d
      }, render: function () {
        this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0)
      }
    })
  })
})(document, Math);

/*!
 * Magnific Popup v0.9.9 by Dmitry Semenov
 *
 * http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina+imagezoom+fastclick
 */
(function (a) {
  var b = "Close", c = "BeforeClose", d = "AfterClose", e = "BeforeAppend", f = "MarkupParse", g = "Open", h = "Change", i = "mfp", j = "." + i, k = "mfp-ready", l = "mfp-removing", m = "mfp-prevent-close", n, o = function () {
  }, p = !!window.jQuery, q, r = a(window), s, t, u, v, w, x = function (a, b) {
    n.ev.on(i + a + j, b)
  }, y = function (b, c, d, e) {
    var f = document.createElement("div");
    return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
  }, z = function (b, c) {
    n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]))
  }, A = function (b) {
    if (b !== w || !n.currTemplate.closeBtn)n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)), w = b;
    return n.currTemplate.closeBtn
  }, B = function () {
    a.magnificPopup.instance || (n = new o, n.init(), a.magnificPopup.instance = n)
  }, C = function () {
    var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
    if (a.transition !== undefined)return !0;
    while (b.length)if (b.pop() + "Transition"in a)return !0;
    return !1
  };
  o.prototype = {
    constructor: o, init: function () {
      var b = navigator.appVersion;
      n.isIE7 = b.indexOf("MSIE 7.") !== -1, n.isIE8 = b.indexOf("MSIE 8.") !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = C(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), t = a(document), n.popupsCache = {}
    }, open: function (b) {
      s || (s = a(document.body));
      var c;
      if (b.isObj === !1) {
        n.items = b.items.toArray(), n.index = 0;
        var d = b.items, e;
        for (c = 0; c < d.length; c++) {
          e = d[c], e.parsed && (e = e.el[0]);
          if (e === b.el[0]) {
            n.index = c;
            break
          }
        }
      } else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0;
      if (n.isOpen) {
        n.updateItemHTML();
        return
      }
      n.types = [], v = "", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = t, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = y("bg").on("click" + j, function () {
        n.close()
      }), n.wrap = y("wrap").attr("tabindex", -1).on("click" + j, function (a) {
        n._checkIfClose(a.target) && n.close()
      }), n.container = y("container", n.wrap)), n.contentContainer = y("content"), n.st.preloader && (n.preloader = y("preloader", n.container, n.st.tLoading));
      var h = a.magnificPopup.modules;
      for (c = 0; c < h.length; c++) {
        var i = h[c];
        i = i.charAt(0).toUpperCase() + i.slice(1), n["init" + i].call(n)
      }
      z("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (x(f, function (a, b, c, d) {
        c.close_replaceWith = A(d.type)
      }), v += " mfp-close-btn-in") : n.wrap.append(A())), n.st.alignTop && (v += " mfp-align-top"), n.fixedContentPos ? n.wrap.css({
        overflow: n.st.overflowY,
        overflowX: "hidden",
        overflowY: n.st.overflowY
      }) : n.wrap.css({
        top: r.scrollTop(),
        position: "absolute"
      }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({
        height: t.height(),
        position: "absolute"
      }), n.st.enableEscapeKey && t.on("keyup" + j, function (a) {
        a.keyCode === 27 && n.close()
      }), r.on("resize" + j, function () {
        n.updateSize()
      }), n.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && n.wrap.addClass(v);
      var l = n.wH = r.height(), m = {};
      if (n.fixedContentPos && n._hasScrollBar(l)) {
        var o = n._getScrollbarSize();
        o && (m.marginRight = o)
      }
      n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden");
      var p = n.st.mainClass;
      return n.isIE7 && (p += " mfp-ie7"), p && n._addClassToMFP(p), n.updateItemHTML(), z("BuildControls"), a("html").css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || s), n._lastFocusedEl = document.activeElement, setTimeout(function () {
        n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), t.on("focusin" + j, n._onFocusIn)
      }, 16), n.isOpen = !0, n.updateSize(l), z(g), b
    }, close: function () {
      if (!n.isOpen)return;
      z(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(function () {
        n._close()
      }, n.st.removalDelay)) : n._close()
    }, _close: function () {
      z(b);
      var c = l + " " + k + " ";
      n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + " "), n._removeClassFromMFP(c);
      if (n.fixedContentPos) {
        var e = {marginRight: ""};
        n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
      }
      t.off("keyup" + j + " focusin" + j), n.ev.off(j), n.wrap.attr("class", "mfp-wrap").removeAttr("style"), n.bgOverlay.attr("class", "mfp-bg"), n.container.attr("class", "mfp-container"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, z(d)
    }, updateSize: function (a) {
      if (n.isIOS) {
        var b = document.documentElement.clientWidth / window.innerWidth, c = window.innerHeight * b;
        n.wrap.css("height", c), n.wH = c
      } else n.wH = a || r.height();
      n.fixedContentPos || n.wrap.css("height", n.wH), z("Resize")
    }, updateItemHTML: function () {
      var b = n.items[n.index];
      n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index));
      var c = b.type;
      z("BeforeChange", [n.currItem ? n.currItem.type : "", c]), n.currItem = b;
      if (!n.currTemplate[c]) {
        var d = n.st[c] ? n.st[c].markup : !1;
        z("FirstMarkupParse", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0
      }
      u && u !== b.type && n.container.removeClass("mfp-" + u + "-holder");
      var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]);
      n.appendContent(e, c), b.preloaded = !0, z(h, b), u = b.type, n.container.prepend(n.contentContainer), z("AfterChange")
    }, appendContent: function (a, b) {
      n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".mfp-close").length || n.content.append(A()) : n.content = a : n.content = "", z(e), n.container.addClass("mfp-" + b + "-holder"), n.contentContainer.append(n.content)
    }, parseEl: function (b) {
      var c = n.items[b], d;
      c.tagName ? c = {el: a(c)} : (d = c.type, c = {data: c, src: c.src});
      if (c.el) {
        var e = n.types;
        for (var f = 0; f < e.length; f++)if (c.el.hasClass("mfp-" + e[f])) {
          d = e[f];
          break
        }
        c.src = c.el.attr("data-mfp-src"), c.src || (c.src = c.el.attr("href"))
      }
      return c.type = d || n.st.type || "inline", c.index = b, c.parsed = !0, n.items[b] = c, z("ElementParse", c), n.items[b]
    }, addGroup: function (a, b) {
      var c = function (c) {
        c.mfpEl = this, n._openClick(c, a, b)
      };
      b || (b = {});
      var d = "click.magnificPopup";
      b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)))
    }, _openClick: function (b, c, d) {
      var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick;
      if (!e && (b.which === 2 || b.ctrlKey || b.metaKey))return;
      var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn;
      if (f)if (a.isFunction(f)) {
        if (!f.call(n))return !0
      } else if (r.width() < f)return !0;
      b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d)
    }, updateStatus: function (a, b) {
      if (n.preloader) {
        q !== a && n.container.removeClass("mfp-s-" + q), !b && a === "loading" && (b = n.st.tLoading);
        var c = {status: a, text: b};
        z("UpdateStatus", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation()
        }), n.container.addClass("mfp-s-" + a), q = a
      }
    }, _checkIfClose: function (b) {
      if (a(b).hasClass(m))return;
      var c = n.st.closeOnContentClick, d = n.st.closeOnBgClick;
      if (c && d)return !0;
      if (!n.content || a(b).hasClass("mfp-close") || n.preloader && b === n.preloader[0])return !0;
      if (b !== n.content[0] && !a.contains(n.content[0], b)) {
        if (d && a.contains(document, b))return !0
      } else if (c)return !0;
      return !1
    }, _addClassToMFP: function (a) {
      n.bgOverlay.addClass(a), n.wrap.addClass(a)
    }, _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), n.wrap.removeClass(a)
    }, _hasScrollBar: function (a) {
      return (n.isIE7 ? t.height() : document.body.scrollHeight) > (a || r.height())
    }, _setFocus: function () {
      (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus()
    }, _onFocusIn: function (b) {
      if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target))return n._setFocus(), !1
    }, _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), z(f, [b, c, d]), a.each(c, function (a, c) {
        if (c === undefined || c === !1)return !0;
        e = a.split("_");
        if (e.length > 1) {
          var d = b.find(j + "-" + e[0]);
          if (d.length > 0) {
            var f = e[1];
            f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
          }
        } else b.find(j + "-" + a).html(c)
      })
    }, _getScrollbarSize: function () {
      if (n.scrollbarSize === undefined) {
        var a = document.createElement("div");
        a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
      }
      return n.scrollbarSize
    }
  }, a.magnificPopup = {
    instance: null,
    proto: o.prototype,
    modules: [],
    open: function (b, c) {
      return B(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
    },
    close: function () {
      return a.magnificPopup.instance && a.magnificPopup.instance.close()
    },
    registerModule: function (b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading..."
    }
  }, a.fn.magnificPopup = function (b) {
    B();
    var c = a(this);
    if (typeof b == "string")if (b === "open") {
      var d, e = p ? c.data("magnificPopup") : c[0].magnificPopup, f = parseInt(arguments[1], 10) || 0;
      e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({mfpEl: d}, c, e)
    } else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1)); else b = a.extend(!0, {}, b), p ? c.data("magnificPopup", b) : c[0].magnificPopup = b, n.addGroup(c, b);
    return c
  };
  var D = "inline", E, F, G, H = function () {
    G && (F.after(G.addClass(E)).detach(), G = null)
  };
  a.magnificPopup.registerModule(D, {
    options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
    proto: {
      initInline: function () {
        n.types.push(D), x(b + "." + D, function () {
          H()
        })
      }, getInline: function (b, c) {
        H();
        if (b.src) {
          var d = n.st.inline, e = a(b.src);
          if (e.length) {
            var f = e[0].parentNode;
            f && f.tagName && (F || (E = d.hiddenClass, F = y(E), E = "mfp-" + E), G = e.after(F).detach().removeClass(E)), n.updateStatus("ready")
          } else n.updateStatus("error", d.tNotFound), e = a("<div>");
          return b.inlineElement = e, e
        }
        return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c
      }
    }
  });
  var I = "ajax", J, K = function () {
    J && s.removeClass(J)
  }, L = function () {
    K(), n.req && n.req.abort()
  };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    }, proto: {
      initAjax: function () {
        n.types.push(I), J = n.st.ajax.cursor, x(b + "." + I, L), x("BeforeChange." + I, L)
      }, getAjax: function (b) {
        J && s.addClass(J), n.updateStatus("loading");
        var c = a.extend({
          url: b.src, success: function (c, d, e) {
            var f = {data: c, xhr: e};
            z("ParseAjax", f), n.appendContent(a(f.data), I), b.finished = !0, K(), n._setFocus(), setTimeout(function () {
              n.wrap.addClass(k)
            }, 16), n.updateStatus("ready"), z("AjaxContentAdded")
          }, error: function () {
            K(), b.finished = b.loadError = !0, n.updateStatus("error", n.st.ajax.tError.replace("%url%", b.src))
          }
        }, n.st.ajax.settings);
        return n.req = a.ajax(c), ""
      }
    }
  });
  var M, N = function (b) {
    if (b.data && b.data.title !== undefined)return b.data.title;
    var c = n.st.image.titleSrc;
    if (c) {
      if (a.isFunction(c))return c.call(n, b);
      if (b.el)return b.el.attr(c) || ""
    }
    return ""
  };
  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    }, proto: {
      initImage: function () {
        var a = n.st.image, c = ".image";
        n.types.push("image"), x(g + c, function () {
          n.currItem.type === "image" && a.cursor && s.addClass(a.cursor)
        }), x(b + c, function () {
          a.cursor && s.removeClass(a.cursor), r.off("resize" + j)
        }), x("Resize" + c, n.resizeImage), n.isLowIE && x("AfterChange", n.resizeImage)
      }, resizeImage: function () {
        var a = n.currItem;
        if (!a || !a.img)return;
        if (n.st.image.verticalFit) {
          var b = 0;
          n.isLowIE && (b = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", n.wH - b)
        }
      }, _onImageHasSize: function (a) {
        a.img && (a.hasSize = !0, M && clearInterval(M), a.isCheckingImgSize = !1, z("ImageHasSize", a), a.imgHidden && (n.content && n.content.removeClass("mfp-loading"), a.imgHidden = !1))
      }, findImageSize: function (a) {
        var b = 0, c = a.img[0], d = function (e) {
          M && clearInterval(M), M = setInterval(function () {
            if (c.naturalWidth > 0) {
              n._onImageHasSize(a);
              return
            }
            b > 200 && clearInterval(M), b++, b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500)
          }, e)
        };
        d(1)
      }, getImage: function (b, c) {
        var d = 0, e = function () {
          b && (b.img[0].complete ? (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("ready")), b.hasSize = !0, b.loaded = !0, z("ImageLoadComplete")) : (d++, d < 200 ? setTimeout(e, 100) : f()))
        }, f = function () {
          b && (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("error", g.tError.replace("%url%", b.src))), b.hasSize = !0, b.loaded = !0, b.loadError = !0)
        }, g = n.st.image, h = c.find(".mfp-img");
        if (h.length) {
          var i = document.createElement("img");
          i.className = "mfp-img", b.img = a(i).on("load.mfploader", e).on("error.mfploader", f), i.src = b.src, h.is("img") && (b.img = b.img.clone()), i = b.img[0], i.naturalWidth > 0 ? b.hasSize = !0 : i.width || (b.hasSize = !1)
        }
        return n._parseMarkup(c, {
          title: N(b),
          img_replaceWith: b.img
        }, b), n.resizeImage(), b.hasSize ? (M && clearInterval(M), b.loadError ? (c.addClass("mfp-loading"), n.updateStatus("error", g.tError.replace("%url%", b.src))) : (c.removeClass("mfp-loading"), n.updateStatus("ready")), c) : (n.updateStatus("loading"), b.loading = !0, b.hasSize || (b.imgHidden = !0, c.addClass("mfp-loading"), n.findImageSize(b)), c)
      }
    }
  });
  var O, P = function () {
    return O === undefined && (O = document.createElement("p").style.MozTransform !== undefined), O
  };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img")
      }
    }, proto: {
      initZoom: function () {
        var a = n.st.zoom, d = ".zoom", e;
        if (!a.enabled || !n.supportsTransition)return;
        var f = a.duration, g = function (b) {
          var c = b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + a.duration / 1e3 + "s " + a.easing, e = {
            position: "fixed",
            zIndex: 9999,
            left: 0,
            top: 0,
            "-webkit-backface-visibility": "hidden"
          }, f = "transition";
          return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, c.css(e), c
        }, h = function () {
          n.content.css("visibility", "visible")
        }, i, j;
        x("BuildControls" + d, function () {
          if (n._allowZoom()) {
            clearTimeout(i), n.content.css("visibility", "hidden"), e = n._getItemToZoom();
            if (!e) {
              h();
              return
            }
            j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(function () {
              j.css(n._getOffset(!0)), i = setTimeout(function () {
                h(), setTimeout(function () {
                  j.remove(), e = j = null, z("ZoomAnimationEnded")
                }, 16)
              }, f)
            }, 16)
          }
        }), x(c + d, function () {
          if (n._allowZoom()) {
            clearTimeout(i), n.st.removalDelay = f;
            if (!e) {
              e = n._getItemToZoom();
              if (!e)return;
              j = g(e)
            }
            j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css("visibility", "hidden"), setTimeout(function () {
              j.css(n._getOffset())
            }, 16)
          }
        }), x(b + d, function () {
          n._allowZoom() && (h(), j && j.remove(), e = null)
        })
      }, _allowZoom: function () {
        return n.currItem.type === "image"
      }, _getItemToZoom: function () {
        return n.currItem.hasSize ? n.currItem.img : !1
      }, _getOffset: function (b) {
        var c;
        b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem);
        var d = c.offset(), e = parseInt(c.css("padding-top"), 10), f = parseInt(c.css("padding-bottom"), 10);
        d.top -= a(window).scrollTop() - e;
        var g = {width: c.width(), height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e};
        return P() ? g["-moz-transform"] = g.transform = "translate(" + d.left + "px," + d.top + "px)" : (g.left = d.left, g.top = d.top), g
      }
    }
  });
  var Q = "iframe", R = "//about:blank", S = function (a) {
    if (n.currTemplate[Q]) {
      var b = n.currTemplate[Q].find("iframe");
      b.length && (a || (b[0].src = R), n.isIE8 && b.css("display", a ? "block" : "none"))
    }
  };
  a.magnificPopup.registerModule(Q, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
        vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
        gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
      }
    }, proto: {
      initIframe: function () {
        n.types.push(Q), x("BeforeChange", function (a, b, c) {
          b !== c && (b === Q ? S() : c === Q && S(!0))
        }), x(b + "." + Q, function () {
          S()
        })
      }, getIframe: function (b, c) {
        var d = b.src, e = n.st.iframe;
        a.each(e.patterns, function () {
          if (d.indexOf(this.index) > -1)return this.id && (typeof this.id == "string" ? d = d.substr(d.lastIndexOf(this.id) + this.id.length, d.length) : d = this.id.call(this, d)), d = this.src.replace("%id%", d), !1
        });
        var f = {};
        return e.srcAction && (f[e.srcAction] = d), n._parseMarkup(c, f, b), n.updateStatus("ready"), c
      }
    }
  });
  var T = function (a) {
    var b = n.items.length;
    return a > b - 1 ? a - b : a < 0 ? b + a : a
  }, U = function (a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
  };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    }, proto: {
      initGallery: function () {
        var c = n.st.gallery, d = ".mfp-gallery", e = Boolean(a.fn.mfpFastClick);
        n.direction = !0;
        if (!c || !c.enabled)return !1;
        v += " mfp-gallery", x(g + d, function () {
          c.navigateByImgClick && n.wrap.on("click" + d, ".mfp-img", function () {
            if (n.items.length > 1)return n.next(), !1
          }), t.on("keydown" + d, function (a) {
            a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next()
          })
        }), x("UpdateStatus" + d, function (a, b) {
          b.text && (b.text = U(b.text, n.currItem.index, n.items.length))
        }), x(f + d, function (a, b, d, e) {
          var f = n.items.length;
          d.counter = f > 1 ? U(c.tCounter, e.index, f) : ""
        }), x("BuildControls" + d, function () {
          if (n.items.length > 1 && c.arrows && !n.arrowLeft) {
            var b = c.arrowMarkup, d = n.arrowLeft = a(b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(m), f = n.arrowRight = a(b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(m), g = e ? "mfpFastClick" : "click";
            d[g](function () {
              n.prev()
            }), f[g](function () {
              n.next()
            }), n.isIE7 && (y("b", d[0], !1, !0), y("a", d[0], !1, !0), y("b", f[0], !1, !0), y("a", f[0], !1, !0)), n.container.append(d.add(f))
          }
        }), x(h + d, function () {
          n._preloadTimeout && clearTimeout(n._preloadTimeout), n._preloadTimeout = setTimeout(function () {
            n.preloadNearbyImages(), n._preloadTimeout = null
          }, 16)
        }), x(b + d, function () {
          t.off(d), n.wrap.off("click" + d), n.arrowLeft && e && n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(), n.arrowRight = n.arrowLeft = null
        })
      }, next: function () {
        n.direction = !0, n.index = T(n.index + 1), n.updateItemHTML()
      }, prev: function () {
        n.direction = !1, n.index = T(n.index - 1), n.updateItemHTML()
      }, goTo: function (a) {
        n.direction = a >= n.index, n.index = a, n.updateItemHTML()
      }, preloadNearbyImages: function () {
        var a = n.st.gallery.preload, b = Math.min(a[0], n.items.length), c = Math.min(a[1], n.items.length), d;
        for (d = 1; d <= (n.direction ? c : b); d++)n._preloadItem(n.index + d);
        for (d = 1; d <= (n.direction ? b : c); d++)n._preloadItem(n.index - d)
      }, _preloadItem: function (b) {
        b = T(b);
        if (n.items[b].preloaded)return;
        var c = n.items[b];
        c.parsed || (c = n.parseEl(b)), z("LazyLoad", c), c.type === "image" && (c.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
          c.hasSize = !0
        }).on("error.mfploader", function () {
          c.hasSize = !0, c.loadError = !0, z("LazyLoadError", c)
        }).attr("src", c.src)), c.preloaded = !0
      }
    }
  });
  var V = "retina";
  a.magnificPopup.registerModule(V, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a
        })
      }, ratio: 1
    }, proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = n.st.retina, b = a.ratio;
          b = isNaN(b) ? b() : b, b > 1 && (x("ImageHasSize." + V, function (a, c) {
            c.img.css({"max-width": c.img[0].naturalWidth / b, width: "100%"})
          }), x("ElementParse." + V, function (c, d) {
            d.src = a.replaceSrc(d, b)
          }))
        }
      }
    }
  }), function () {
    var b = 1e3, c = "ontouchstart"in window, d = function () {
      r.off("touchmove" + f + " touchend" + f)
    }, e = "mfpFastClick", f = "." + e;
    a.fn.mfpFastClick = function (e) {
      return a(this).each(function () {
        var g = a(this), h;
        if (c) {
          var i, j, k, l, m, n;
          g.on("touchstart" + f, function (a) {
            l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, r.on("touchmove" + f, function (a) {
              m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0];
              if (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10)l = !0, d()
            }).on("touchend" + f, function (a) {
              d();
              if (l || n > 1)return;
              h = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
                h = !1
              }, b), e()
            })
          })
        }
        g.on("click" + f, function () {
          h || e()
        })
      })
    }, a.fn.destroyMfpFastClick = function () {
      a(this).off("touchstart" + f + " click" + f), c && r.off("touchmove" + f + " touchend" + f)
    }
  }(), B()
})(window.jQuery || window.Zepto);

/*!
 * slimScroll
 * Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.2
 *
 */
(function (f) {
  jQuery.fn.extend({
    slimScroll: function (g) {
      var a = f.extend({
        width: "auto",
        height: "250px",
        size: "7px",
        color: "#000",
        position: "right",
        distance: "1px",
        start: "top",
        opacity: 0.4,
        alwaysVisible: !1,
        disableFadeOut: !1,
        railVisible: !1,
        railColor: "#333",
        railOpacity: 0.2,
        railDraggable: !0,
        railClass: "slimScrollRail",
        barClass: "slimScrollBar",
        wrapperClass: "slimScrollDiv",
        allowPageScroll: !1,
        wheelStep: 20,
        touchScrollStep: 200,
        borderRadius: "7px",
        railBorderRadius: "7px"
      }, g);
      this.each(function () {
        function u(d) {
          if (r) {
            d = d ||
              window.event;
            var c = 0;
            d.wheelDelta && (c = -d.wheelDelta / 120);
            d.detail && (c = d.detail / 3);
            f(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && m(c, !0);
            d.preventDefault && !k && d.preventDefault();
            k || (d.returnValue = !1)
          }
        }

        function m(d, f, g) {
          k = !1;
          var e = d, h = b.outerHeight() - c.outerHeight();
          f && (e = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), e = Math.min(Math.max(e, 0), h), e = 0 < d ? Math.ceil(e) : Math.floor(e), c.css({top: e + "px"}));
          l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
          e = l * (b[0].scrollHeight - b.outerHeight());
          g && (e = d, d = e / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), h), c.css({top: d + "px"}));
          b.scrollTop(e);
          b.trigger("slimscrolling", ~~e);
          v();
          p()
        }

        function C() {
          window.addEventListener ? (this.addEventListener("DOMMouseScroll", u, !1), this.addEventListener("mousewheel", u, !1)) : document.attachEvent("onmousewheel", u)
        }

        function w() {
          s = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), D);
          c.css({height: s + "px"});
          var a = s == b.outerHeight() ? "none" : "block";
          c.css({display: a})
        }

        function v() {
          w();
          clearTimeout(A);
          l == ~~l ? (k = a.allowPageScroll, B != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;
          B = l;
          s >= b.outerHeight() ? k = !0 : (c.stop(!0, !0).fadeIn("fast"), a.railVisible && h.stop(!0, !0).fadeIn("fast"))
        }

        function p() {
          a.alwaysVisible || (A = setTimeout(function () {
            a.disableFadeOut && r || x || y || (c.fadeOut("slow"), h.fadeOut("slow"))
          }, 1E3))
        }

        var r, x, y, A, z, s, l, B, D = 30, k = !1, b = f(this);
        if (b.parent().hasClass(a.wrapperClass)) {
          var n = b.scrollTop(), c = b.parent().find("." + a.barClass), h = b.parent().find("." +
            a.railClass);
          w();
          if (f.isPlainObject(g)) {
            if ("height"in g && "auto" == g.height) {
              b.parent().css("height", "auto");
              b.css("height", "auto");
              var q = b.parent().parent().height();
              b.parent().css("height", q);
              b.css("height", q)
            }
            if ("scrollTo"in g)n = parseInt(a.scrollTo); else if ("scrollBy"in g)n += parseInt(a.scrollBy); else if ("destroy"in g) {
              c.remove();
              h.remove();
              b.unwrap();
              return
            }
            m(n, !1, !0)
          }
        } else {
          a.height = "auto" == g.height ? b.parent().height() : g.height;
          n = f("<div></div>").addClass(a.wrapperClass).css({
            position: "relative",
            overflow: "hidden", width: a.width, height: a.height
          });
          b.css({overflow: "hidden", width: a.width, height: a.height});
          var h = f("<div></div>").addClass(a.railClass).css({
            width: a.size,
            height: "100%",
            position: "absolute",
            top: 0,
            display: a.alwaysVisible && a.railVisible ? "block" : "none",
            "border-radius": a.railBorderRadius,
            background: a.railColor,
            opacity: a.railOpacity,
            zIndex: 90
          }), c = f("<div></div>").addClass(a.barClass).css({
            background: a.color,
            width: a.size,
            position: "absolute",
            top: 0,
            opacity: a.opacity,
            display: a.alwaysVisible ?
              "block" : "none",
            "border-radius": a.borderRadius,
            BorderRadius: a.borderRadius,
            MozBorderRadius: a.borderRadius,
            WebkitBorderRadius: a.borderRadius,
            zIndex: 99
          }), q = "right" == a.position ? {right: a.distance} : {left: a.distance};
          h.css(q);
          c.css(q);
          b.wrap(n);
          b.parent().append(c);
          b.parent().append(h);
          a.railDraggable && c.bind("mousedown", function (a) {
            var b = f(document);
            y = !0;
            t = parseFloat(c.css("top"));
            pageY = a.pageY;
            b.bind("mousemove.slimscroll", function (a) {
              currTop = t + a.pageY - pageY;
              c.css("top", currTop);
              m(0, c.position().top, !1)
            });
            b.bind("mouseup.slimscroll", function (a) {
              y = !1;
              p();
              b.unbind(".slimscroll")
            });
            return !1
          }).bind("selectstart.slimscroll", function (a) {
            a.stopPropagation();
            a.preventDefault();
            return !1
          });
          h.hover(function () {
            v()
          }, function () {
            p()
          });
          c.hover(function () {
            x = !0
          }, function () {
            x = !1
          });
          b.hover(function () {
            r = !0;
            v();
            p()
          }, function () {
            r = !1;
            p()
          });
          b.bind("touchstart", function (a, b) {
            a.originalEvent.touches.length && (z = a.originalEvent.touches[0].pageY)
          });
          b.bind("touchmove", function (b) {
            k || b.originalEvent.preventDefault();
            b.originalEvent.touches.length &&
            (m((z - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), z = b.originalEvent.touches[0].pageY)
          });
          w();
          "bottom" === a.start ? (c.css({top: b.outerHeight() - c.outerHeight()}), m(0, !0)) : "top" !== a.start && (m(f(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
          C()
        }
      });
      return this
    }
  });
  jQuery.fn.extend({slimscroll: jQuery.fn.slimScroll})
})(jQuery);

/*! http://mths.be/placeholder v2.0.7 by @mathias */
!function (e, t, n) {
  function i(e) {
    var t = {}, i = /^jQuery\d+$/;
    return n.each(e.attributes, function (e, n) {
      n.specified && !i.test(n.name) && (t[n.name] = n.value)
    }), t
  }

  function r(e, t) {
    var i = this, r = n(i);
    if (i.value == r.attr("placeholder") && r.hasClass("placeholder"))if (r.data("placeholder-password")) {
      if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")), e === !0)return r[0].value = t;
      r.focus()
    } else i.value = "", r.removeClass("placeholder"), i == o() && i.select()
  }

  function a() {
    var e, t = this, a = n(t), o = this.id;
    if ("" == t.value) {
      if ("password" == t.type) {
        if (!a.data("placeholder-textinput")) {
          try {
            e = a.clone().attr({type: "text"})
          } catch (s) {
            e = n("<input>").attr(n.extend(i(this), {type: "text"}))
          }
          e.removeAttr("name").data({
            "placeholder-password": a,
            "placeholder-id": o
          }).bind("focus.placeholder", r), a.data({"placeholder-textinput": e, "placeholder-id": o}).before(e)
        }
        a = a.removeAttr("id").hide().prev().attr("id", o).show()
      }
      a.addClass("placeholder"), a[0].value = a.attr("placeholder")
    } else a.removeClass("placeholder")
  }

  function o() {
    try {
      return t.activeElement
    } catch (e) {
    }
  }

  var s, l, c = "placeholder"in t.createElement("input"), u = "placeholder"in t.createElement("textarea"), d = n.fn, h = n.valHooks, f = n.propHooks;
  c && u ? (l = d.placeholder = function () {
    return this
  }, l.input = l.textarea = !0) : (l = d.placeholder = function () {
    var e = this;
    return e.filter((c ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
      "focus.placeholder": r,
      "blur.placeholder": a
    }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
  }, l.input = c, l.textarea = u, s = {
    get: function (e) {
      var t = n(e), i = t.data("placeholder-password");
      return i ? i[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
    }, set: function (e, t) {
      var i = n(e), s = i.data("placeholder-password");
      return s ? s[0].value = t : i.data("placeholder-enabled") ? ("" == t ? (e.value = t, e != o() && a.call(e)) : i.hasClass("placeholder") ? r.call(e, !0, t) || (e.value = t) : e.value = t, i) : e.value = t
    }
  }, c || (h.input = s, f.value = s), u || (h.textarea = s, f.value = s), n(function () {
    n(t).delegate("form", "submit.placeholder", function () {
      var e = n(".placeholder", this).each(r);
      setTimeout(function () {
        e.each(a)
      }, 10)
    })
  }), n(e).bind("beforeunload.placeholder", function () {
    n(".placeholder").each(function () {
      this.value = ""
    })
  }))
}(this, document, jQuery);

/* =========================================================
 * bootstrap-slider.js v3.0.0
 * http://www.eyecon.ro/bootstrap-slider
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function (t) {
  function e(e, s) {
    if (n[e]) {
      var h = i(this), a = n[e].apply(h, s);
      return "undefined" == typeof a ? t(this) : a
    }
    throw new Error("method '" + e + "()' does not exist for slider.")
  }

  function i(e) {
    var i = t(e).data("slider");
    if (i && i instanceof a)return i;
    throw new Error(h.callingContextNotSliderInstance)
  }

  function s(e) {
    var i = t(this);
    return i.each(function () {
      var i = t(this), s = i.data("slider"), h = "object" == typeof e && e;
      s && !h && (h = {}, t.each(t.fn.slider.defaults, function (t) {
        h[t] = s[t]
      })), i.data("slider", new a(this, t.extend({}, t.fn.slider.defaults, h)))
    }), i
  }

  var h = {
    formatInvalidInputErrorMsg: function (t) {
      return "Invalid input value '" + t + "' passed in"
    },
    callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
  }, a = function (e, i) {
    var s = this.element = t(e).hide(), h = t(e)[0].style.width, a = !1, n = this.element.parent();
    n.hasClass("slider") === !0 ? (a = !0, this.picker = n) : this.picker = t('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element), this.id = this.element.data("slider-id") || i.id, this.id && (this.picker[0].id = this.id), "undefined" != typeof Modernizr && Modernizr.touch && (this.touchCapable = !0);
    var o = this.element.data("slider-tooltip") || i.tooltip;
    switch (this.tooltip = this.picker.find(".tooltip"), this.tooltipInner = this.tooltip.find("div.tooltip-inner"), a === !0 && (this.picker.removeClass("slider-horizontal"), this.picker.removeClass("slider-vertical"), this.tooltip.removeClass("hide")), this.orientation = this.element.data("slider-orientation") || i.orientation, this.orientation) {
      case"vertical":
        this.picker.addClass("slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight", this.tooltip.addClass("right")[0].style.left = "100%";
        break;
      default:
        this.picker.addClass("slider-horizontal").css("width", h), this.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth", this.tooltip.addClass("top")[0].style.top = -this.tooltip.outerHeight() - 14 + "px"
    }
    var r = this;
    t.each(["min", "max", "step", "value"], function (t, e) {
      r[e] = "undefined" != typeof s.data("slider-" + e) ? s.data("slider-" + e) : "undefined" != typeof i[e] ? i[e] : "undefined" != typeof s.prop(e) ? s.prop(e) : 0
    }), this.value instanceof Array ? a && !this.range ? this.value = this.value[0] : this.range = !0 : this.range && (this.value = [this.value, this.max]), this.selection = this.element.data("slider-selection") || i.selection, this.selectionEl = this.picker.find(".slider-selection"), "none" === this.selection && this.selectionEl.addClass("hide"), this.selectionElStyle = this.selectionEl[0].style, this.handle1 = this.picker.find(".slider-handle:first"), this.handle1Stype = this.handle1[0].style, this.handle2 = this.picker.find(".slider-handle:last"), this.handle2Stype = this.handle2[0].style, a === !0 && (this.handle1.removeClass("round triangle"), this.handle2.removeClass("round triangle hide"));
    var l = this.element.data("slider-handle") || i.handle;
    switch (l) {
      case"round":
        this.handle1.addClass("round"), this.handle2.addClass("round");
        break;
      case"triangle":
        this.handle1.addClass("triangle"), this.handle2.addClass("triangle")
    }
    this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), this.value[1] = "after" === this.selection ? this.max : this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos], this.formater = i.formater, this.reversed = this.element.data("slider-reversed") || i.reversed, this.layout(), this.handle1.on({keydown: t.proxy(this.keydown, this, 0)}), this.handle2.on({keydown: t.proxy(this.keydown, this, 1)}), this.picker.on(this.touchCapable ? {touchstart: t.proxy(this.mousedown, this)} : {mousedown: t.proxy(this.mousedown, this)}), "hide" === o ? this.tooltip.addClass("hide") : "always" === o ? (this.showTooltip(), this.alwaysShowTooltip = !0) : (this.picker.on({
      mouseenter: t.proxy(this.showTooltip, this),
      mouseleave: t.proxy(this.hideTooltip, this)
    }), this.handle1.on({
      focus: t.proxy(this.showTooltip, this),
      blur: t.proxy(this.hideTooltip, this)
    }), this.handle2.on({
      focus: t.proxy(this.showTooltip, this),
      blur: t.proxy(this.hideTooltip, this)
    })), this.enabled = i.enabled && (void 0 === this.element.data("slider-enabled") || this.element.data("slider-enabled") === !0), this.enabled ? this.enable() : this.disable()
  };
  a.prototype = {
    constructor: a, over: !1, inDrag: !1, showTooltip: function () {
      this.tooltip.addClass("in"), this.over = !0
    }, hideTooltip: function () {
      this.inDrag === !1 && this.alwaysShowTooltip !== !0 && this.tooltip.removeClass("in"), this.over = !1
    }, layout: function () {
      var t;
      t = this.reversed ? [100 - this.percentage[0], this.percentage[1]] : [this.percentage[0], this.percentage[1]], this.handle1Stype[this.stylePos] = t[0] + "%", this.handle2Stype[this.stylePos] = t[1] + "%", "vertical" === this.orientation ? (this.selectionElStyle.top = Math.min(t[0], t[1]) + "%", this.selectionElStyle.height = Math.abs(t[0] - t[1]) + "%") : (this.selectionElStyle.left = Math.min(t[0], t[1]) + "%", this.selectionElStyle.width = Math.abs(t[0] - t[1]) + "%"), this.range ? (this.tooltipInner.text(this.formater(this.value[0]) + " : " + this.formater(this.value[1])), this.tooltip[0].style[this.stylePos] = this.size * (t[0] + (t[1] - t[0]) / 2) / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px") : (this.tooltipInner.text(this.formater(this.value[0])), this.tooltip[0].style[this.stylePos] = this.size * t[0] / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px")
    }, mousedown: function (e) {
      if (!this.isEnabled())return !1;
      this.touchCapable && "touchstart" === e.type && (e = e.originalEvent), this.triggerFocusOnHandle(), this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos];
      var i = this.getPercentage(e);
      if (this.range) {
        var s = Math.abs(this.percentage[0] - i), h = Math.abs(this.percentage[1] - i);
        this.dragged = h > s ? 0 : 1
      } else this.dragged = 0;
      this.percentage[this.dragged] = this.reversed ? 100 - i : i, this.layout(), t(document).on(this.touchCapable ? {
        touchmove: t.proxy(this.mousemove, this),
        touchend: t.proxy(this.mouseup, this)
      } : {mousemove: t.proxy(this.mousemove, this), mouseup: t.proxy(this.mouseup, this)}), this.inDrag = !0;
      var a = this.calculateValue();
      return this.setValue(a), this.element.trigger({type: "slideStart", value: a}).trigger({
        type: "slide",
        value: a
      }), !0
    }, triggerFocusOnHandle: function (t) {
      0 === t && this.handle1.focus(), 1 === t && this.handle2.focus()
    }, keydown: function (t, e) {
      if (!this.isEnabled())return !1;
      var i;
      switch (e.which) {
        case 37:
        case 40:
          i = "vertical" === this.orientation && "after" === this.selection ? 1 : -1;
          break;
        case 39:
        case 38:
          i = "vertical" === this.orientation && "after" === this.selection ? -1 : 1
      }
      if (i) {
        var s = i * this.percentage[2], h = this.percentage[t] + s;
        h > 100 ? h = 100 : 0 > h && (h = 0), this.dragged = t, this.adjustPercentageForRangeSliders(h), this.percentage[this.dragged] = h, this.layout();
        var a = this.calculateValue();
        return this.setValue(a), this.element.trigger({type: "slide", value: a}).trigger({
          type: "slideStop",
          value: a
        }).data("value", a).prop("value", a), !1
      }
    }, mousemove: function (t) {
      if (!this.isEnabled())return !1;
      this.touchCapable && "touchmove" === t.type && (t = t.originalEvent);
      var e = this.getPercentage(t);
      this.adjustPercentageForRangeSliders(e), this.percentage[this.dragged] = this.reversed ? 100 - e : e, this.layout();
      var i = this.calculateValue();
      return this.setValue(i), this.element.trigger({type: "slide", value: i}).data("value", i).prop("value", i), !1
    }, adjustPercentageForRangeSliders: function (t) {
      this.range && (0 === this.dragged && this.percentage[1] < t ? (this.percentage[0] = this.percentage[1], this.dragged = 1) : 1 === this.dragged && this.percentage[0] > t && (this.percentage[1] = this.percentage[0], this.dragged = 0))
    }, mouseup: function () {
      if (!this.isEnabled())return !1;
      t(document).off(this.touchCapable ? {
        touchmove: this.mousemove,
        touchend: this.mouseup
      } : {mousemove: this.mousemove, mouseup: this.mouseup}), this.inDrag = !1, this.over === !1 && this.hideTooltip();
      var e = this.calculateValue();
      return this.layout(), this.element.data("value", e).prop("value", e).trigger({type: "slideStop", value: e}), !1
    }, calculateValue: function () {
      var t;
      return this.range ? (t = [this.min, this.max], 0 !== this.percentage[0] && (t[0] = Math.max(this.min, this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step)), 100 !== this.percentage[1] && (t[1] = Math.min(this.max, this.min + Math.round(this.diff * this.percentage[1] / 100 / this.step) * this.step)), this.value = t) : (t = this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, t < this.min ? t = this.min : t > this.max && (t = this.max), t = parseFloat(t), this.value = [t, this.value[1]]), t
    }, getPercentage: function (t) {
      this.touchCapable && (t = t.touches[0]);
      var e = 100 * (t[this.mousePos] - this.offset[this.stylePos]) / this.size;
      return e = Math.round(e / this.percentage[2]) * this.percentage[2], Math.max(0, Math.min(100, e))
    }, getValue: function () {
      return this.range ? this.value : this.value[0]
    }, setValue: function (t) {
      this.value = this.validateInputValue(t), this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), this.value[1] = "after" === this.selection ? this.max : this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.layout(), this.element.trigger({
        type: "slide",
        value: this.value
      }).data("value", this.value).prop("value", this.value)
    }, validateInputValue: function (e) {
      if ("number" == typeof e)return e;
      if (e instanceof Array)return t.each(e, function (t, e) {
        if ("number" != typeof e)throw new Error(h.formatInvalidInputErrorMsg(e))
      }), e;
      throw new Error(h.formatInvalidInputErrorMsg(e))
    }, destroy: function () {
      this.handle1.off(), this.handle2.off(), this.element.off().show().insertBefore(this.picker), this.picker.off().remove(), t(this.element).removeData("slider")
    }, disable: function () {
      this.enabled = !1, this.handle1.removeAttr("tabindex"), this.handle2.removeAttr("tabindex"), this.picker.addClass("slider-disabled"), this.element.trigger("slideDisabled")
    }, enable: function () {
      this.enabled = !0, this.handle1.attr("tabindex", 0), this.handle2.attr("tabindex", 0), this.picker.removeClass("slider-disabled"), this.element.trigger("slideEnabled")
    }, toggle: function () {
      this.enabled ? this.disable() : this.enable()
    }, isEnabled: function () {
      return this.enabled
    }, setAttribute: function (t, e) {
      this[t] = e
    }
  };
  var n = {
    getValue: a.prototype.getValue,
    setValue: a.prototype.setValue,
    setAttribute: a.prototype.setAttribute,
    destroy: a.prototype.destroy,
    disable: a.prototype.disable,
    enable: a.prototype.enable,
    toggle: a.prototype.toggle,
    isEnabled: a.prototype.isEnabled
  };
  t.fn.slider = function (t) {
    if ("string" == typeof t && "refresh" !== t) {
      var i = Array.prototype.slice.call(arguments, 1);
      return e.call(this, t, i)
    }
    return s.call(this, t)
  }, t.fn.slider.defaults = {
    min: 0,
    max: 10,
    step: 1,
    orientation: "horizontal",
    value: 5,
    range: !1,
    selection: "before",
    tooltip: "show",
    handle: "round",
    reversed: !1,
    enabled: !0,
    formater: function (t) {
      return t
    }
  }, t.fn.slider.Constructor = a
}(window.jQuery);

/*!
 * Retina.js v1.1.0
 *
 * Copyright 2013 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function () {
  function t() {
  }

  function e(t, e) {
    this.path = t, "undefined" != typeof e && null !== e ? (this.at_2x_path = e, this.perform_check = !1) : (this.at_2x_path = t.replace(/\.\w+$/, function (t) {
      return "@2x" + t
    }), this.perform_check = !0)
  }

  function i(t) {
    this.el = t, this.path = new e(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
    var i = this;
    this.path.check_2x_variant(function (t) {
      t && i.swap()
    })
  }

  var n = "undefined" == typeof exports ? window : exports, a = {check_mime_type: !0};
  n.Retina = t, t.configure = function (t) {
    null == t && (t = {});
    for (var e in t)a[e] = t[e]
  }, t.init = function (t) {
    null == t && (t = n);
    var e = t.onload || new Function;
    t.onload = function () {
      var t, n, a = document.getElementsByTagName("img"), h = [];
      for (t = 0; t < a.length; t++)n = a[t], h.push(new i(n));
      e()
    }
  }, t.isRetina = function () {
    var t = "(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";
    return n.devicePixelRatio > 1 ? !0 : n.matchMedia && n.matchMedia(t).matches ? !0 : !1
  }, n.RetinaImagePath = e, e.confirmed_paths = [], e.prototype.is_external = function () {
    return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
  }, e.prototype.check_2x_variant = function (t) {
    var i, n = this;
    return this.is_external() ? t(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in e.confirmed_paths ? t(!0) : (i = new XMLHttpRequest, i.open("HEAD", this.at_2x_path), i.onreadystatechange = function () {
      if (4 != i.readyState)return t(!1);
      if (i.status >= 200 && i.status <= 399) {
        if (a.check_mime_type) {
          var h = i.getResponseHeader("Content-Type");
          if (null == h || !h.match(/^image/i))return t(!1)
        }
        return e.confirmed_paths.push(n.at_2x_path), t(!0)
      }
      return t(!1)
    }, i.send(), void 0) : t(!0)
  }, n.RetinaImage = i, i.prototype.swap = function (t) {
    function e() {
      i.el.complete ? $(i.el).is(":visible") && (i.el.setAttribute("width", i.el.offsetWidth), i.el.setAttribute("height", i.el.offsetHeight), i.el.setAttribute("src", t)) : setTimeout(e, 5)
    }

    "undefined" == typeof t && (t = this.path.at_2x_path);
    var i = this;
    e()
  }, t.isRetina() && t.init(n)
}();

/*!
 * Bootstrap-growl v1.1.0
 *
 * Copyright (c) Nick Larson, http://github.com/ifightcrime
 * Released under the MIT license
 *
 * Pretty simple jQuery plugin that turns standard Bootstrap alerts into hovering "Growl-like" notifications.
 *
 */
(function () {
  var t;
  t = jQuery, t.bootstrapGrowl = function (e, s) {
    var a, o, l;
    switch (s = t.extend({}, t.bootstrapGrowl.default_options, s), a = t("<div>"), a.attr("class", "bootstrap-growl alert"), s.type && a.addClass("alert-" + s.type), s.allow_dismiss && a.append('<a class="close" data-dismiss="alert" href="#">&times;</a>'), a.append(e), s.top_offset && (s.offset = {
      from: "top",
      amount: s.top_offset
    }), l = s.offset.amount, t(".bootstrap-growl").each(function () {
      return l = Math.max(l, parseInt(t(this).css(s.offset.from)) + t(this).outerHeight() + s.stackup_spacing)
    }), o = {
      position: "body" === s.ele ? "fixed" : "absolute",
      margin: 0,
      "z-index": "9999",
      display: "none"
    }, o[s.offset.from] = l + "px", a.css(o), "auto" !== s.width && a.css("width", s.width + "px"), t(s.ele).append(a), s.align) {
      case"center":
        a.css({left: "50%", "margin-left": "-" + a.outerWidth() / 2 + "px"});
        break;
      case"left":
        a.css("left", "20px");
        break;
      default:
        a.css("right", "20px")
    }
    return a.fadeIn(), s.delay > 0 && a.delay(s.delay).fadeOut(function () {
      return t(this).alert("close")
    }), a
  }, t.bootstrapGrowl.default_options = {
    ele: "body",
    type: "info",
    offset: {from: "top", amount: 20},
    align: "right",
    width: 250,
    delay: 4e3,
    allow_dismiss: !0,
    stackup_spacing: 10
  }
}).call(this);

/*!
 * jQuery countTo Plugin
 * https://github.com/mhuggins/jquery-countTo
 * Copyright (c) Matt Huggins; Licensed MIT
 */
!function (t) {
  function e(t, e) {
    return t.toFixed(e.decimals)
  }

  t.fn.countTo = function (e) {
    return e = e || {}, t(this).each(function () {
      function a() {
        s += l, c++, n(s), "function" == typeof o.onUpdate && o.onUpdate.call(f, s), c >= r && (i.removeData("countTo"), clearInterval(d.interval), s = o.to, "function" == typeof o.onComplete && o.onComplete.call(f, s))
      }

      function n(t) {
        var e = o.formatter.call(f, t, o);
        i.text(e)
      }

      var o = t.extend({}, t.fn.countTo.defaults, {
        from: t(this).data("from"),
        to: t(this).data("to"),
        speed: t(this).data("speed"),
        refreshInterval: t(this).data("refresh-interval"),
        decimals: t(this).data("decimals")
      }, e), r = Math.ceil(o.speed / o.refreshInterval), l = (o.to - o.from) / r, f = this, i = t(this), c = 0, s = o.from, d = i.data("countTo") || {};
      i.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(a, o.refreshInterval), n(s)
    })
  }, t.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    formatter: e,
    onUpdate: null,
    onComplete: null
  }
}(jQuery);
