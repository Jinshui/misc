/* ========================================================================
 * Bootstrap: affix.js v3.0.2
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */


+function ($) { "use strict";

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element = $(element)
    this.affixed  =
    this.unpin    = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    this.affixed = affix
    this.unpin   = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))

    if (affix == 'bottom') {
      this.$element.offset({ top: document.body.offsetHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.0.2
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */


+function ($) { "use strict";

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.2
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.2
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */


+function ($) { "use strict";

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay
      , hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.'+ this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.$element.trigger('shown.bs.' + this.type)
    }
  }

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    $tip
      .offset(offset)
      .addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.$element.trigger('hidden.bs.' + this.type)

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth
    , height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.0.2
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */


+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.0.2
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.0.2
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
        .prop('checked', !this.$element.hasClass('active'))
        .trigger('change')
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.0.2
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */


+function ($) { "use strict";

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.0.2
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */


+function ($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000
  , pause: 'hover'
  , wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    this.sliding = true

    isCycling && this.pause()

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
        .emulateTransitionEnd(600)
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.2
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */


+function ($) { "use strict";

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#\w/.test(href) && $(href)

        return ($href
          && $href.length
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parents('.active')
      .removeClass('active')

    var selector = this.selector
      + '[data-target="' + target + '"],'
      + this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length)  {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.0.2
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */


+function ($) { "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.0.2
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */


+function ($) { "use strict";

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab'
      , relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(jQuery);

+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),function(){var a;a=window.Bootstrap=Ember.Namespace.create()}.call(this),function(){var a,b;a=window.Bootstrap,b=Ember.get,a.WithRouter=Ember.Mixin.create({router:Ember.computed(function(){return b(this,"controller").container.lookup("router:main")})})}.call(this),function(){var a,b,c;a=window.Bootstrap,b=Ember.get,c=Ember.set,a.TypeSupport=Ember.Mixin.create({classTypePrefix:Ember.required(String),classNameBindings:["typeClass"],type:"default",typeClass:function(){var a,b;return b=this.get("type"),null==b&&(b="default"),a=this.get("classTypePrefix"),""+a+"-"+b}.property("type").cacheable()})}.call(this),function(){var a,b,c;a=window.Bootstrap,b=Ember.get,c=Ember.set,a.SizeSupport=Ember.Mixin.create({classTypePrefix:Ember.required(String),classNameBindings:["sizeClass","largeSizeClass","smallSizeClass","extraSmallSizeClass"],size:null,xs:null,small:null,large:null,extraSmallSizeClass:function(){var a;return a=this.get("classTypePrefix"),this.xs?""+a+"-xs":null}.property("xs").cacheable(),smallSizeClass:function(){var a;return a=this.get("classTypePrefix"),this.small?""+a+"-sm":null}.property("small").cacheable(),largeSizeClass:function(){var a;return a=this.get("classTypePrefix"),this.large?""+a+"-lg":null}.property("large").cacheable(),sizeClass:function(){var a,b;return b=this.get("size"),a=this.get("classTypePrefix"),b?""+a+"-"+b:null}.property("size").cacheable()})}.call(this),function(){Bootstrap.ItemValue=Ember.Mixin.create({value:function(){var a,b;return a=this.get("parentView"),null!=a?b=this.get("content"):void 0}.property("content").cacheable()})}.call(this),function(){Bootstrap.ItemSelection=Ember.Mixin.create(Bootstrap.ItemValue,Bootstrap.WithRouter,{classNameBindings:["isActive:active"],isActive:function(){var a,b,c,d;return this.get("content.linkTo")&&this.get("content.linkTo")&&(null!=(d=this.get("router"))?d.isActive(this.get("content.linkTo")):void 0)?!0:(a=this.get("parentView"),null==a?!1:(b=a.get("selected"),c=this.get("value"),null==c?!1:b===c))}.property("value","parentView.selected","content.linkTo").cacheable(),click:function(a){var b,c;return a.preventDefault(),c=this.get("parentView"),null==c||(b=this.get("content"),"object"==typeof b&&b.get("disabled"))?void 0:c.set("selected",this.get("value"))}})}.call(this),function(){Bootstrap.ItemsSelection=Ember.Mixin.create({multiSelection:!1,selected:[]})}.call(this),function(){Bootstrap.Nav=Ember.Mixin.create({classNames:["nav"],classNameBindings:["navTypeClass"],tagName:"ul",navType:null,navTypeClass:function(){return null!=this.navType?"nav-"+this.navType:null}.property("navType").cacheable()})}.call(this),function(){Bootstrap.NavItem=Ember.Mixin.create(Bootstrap.SelectableView)}.call(this),function(){var a,b;a=function(a){var b,c;if(a&&(c=a.get("parentView")))return b=c instanceof Bootstrap.ItemsView,Ember.assert("The parent view must be an instance of Bootstrap.ItemsView or any inherited class",b),b?c:void 0},b=function(a,b,c){return"instance"===Ember.typeOf(a)||Ember.canInvoke(a,"get")?a.get(b):c},Bootstrap.ItemView=Ember.View.extend({isItem:!0,classNameBindings:["disabled"],title:function(){var c,d,e;if(e=a(this))return d=e.get("itemTitleKey")||"title",c=this.get("content"),b(c,d,c)}.property("content").cacheable(),disabled:function(){var c,d,e;if(e=a(this))return c=this.get("content"),d=!!b(c,"disabled",!1),d&&this.get("isActive")&&e.set("selected",null),d}.property("content","content.disabled").cacheable()})}.call(this),function(){Bootstrap.ItemsView=Ember.CollectionView.extend({didInsertElement:function(){var a,b,c,d,e,f;if(this.get("default")){for(a=this.get("default"),e=this._childViews,c=0,d=e.length;d>c;c++)b=e[c],(null!=(f=b.get("content"))?f.get("title"):void 0)===a&&this.set("selected",b.get("content"));return Ember.assert("Could not activate default tab "+a+" as it doesnt exist",a)}}})}.call(this),function(){Bootstrap.ItemPaneView=Ember.View.extend({template:Ember.Handlebars.compile(["{{#if view.content.template}}","{{bsItemPanePartial view.content.template}}","{{/if}}"].join("\n")),corrItem:function(){var a,b,c,d;if(null!=this.get("parentView").get("corrItemsView"))for(d=this.get("parentView").get("corrItemsView")._childViews,b=0,c=d.length;c>b;b++)if(a=d[b],a.content===this.get("content"))return a}.property("parentView.corrItemsView"),isVisible:function(){var a;return null!=(a=this.get("corrItem"))?a.get("isActive"):void 0}.property("corrItem.isActive"),controller:function(){var a,b;return a=this.get("parentView.controller"),this.get("content.controller")&&(b=this.get("container").lookup("controller:"+this.get("content.controller")),b&&(a=b)),a}.property("content")}),Ember.Handlebars.helper("bsItemPanePartial",function(a,b){var c,d;return d=b.data.view,c=d.templateForName(a),Ember.assert("Unable to find template with name '"+a+"'",c),c(this,{data:b.data})})}.call(this),function(){Bootstrap.ItemsPanesView=Ember.CollectionView.extend({viewsInserted:!1,corrItemsView:function(){var a;return a=Ember.View.views[this.get("items-id")]}.property("viewsInserted"),didInsertElement:function(){return this._super(),this.set("viewsInserted",!0)}})}.call(this);
+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),function(){Bootstrap.BsButtonComponent=Ember.Component.extend(Bootstrap.TypeSupport,Bootstrap.SizeSupport,{layoutName:"components/bs-button",tagName:"button",classNames:["btn"],classNameBindings:["blockClass"],classTypePrefix:"btn",clickedParam:null,block:null,attributeBindings:["disabled","dismiss:data-dismiss","_type:type"],_type:"button",bubbles:!0,init:function(){var a,b,c,d,e,f;if(this._super(),null!=this.get("content")&&"instance"===Ember.typeOf(this.get("content"))){d=this.get("content"),e=[];for(b in d)c=d[b],e.push(this.set(b,c));return e}null==this.get("title")&&this.set("title",this.get("content")),f=[];for(a in this)null!=a.match(/^data-[\w-]*$/)&&f.push(this.attributeBindings.pushObject(a));return f},blockClass:function(){return this.block?""+this.classTypePrefix+"-block":null}.property("block").cacheable(),click:function(a){return this.get("bubbles")||a.stopPropagation(),this.sendAction("clicked",this.get("clickedParam"))},loadingChanged:function(){var a;return a=null!==this.get("loading")?this.get("loading"):"reset",Ember.$("#"+this.elementId).button(a)}.observes("loading")}),Ember.Handlebars.helper("bs-button",Bootstrap.BsButtonComponent)}.call(this),function(){Bootstrap.BsBtnGroup=Bootstrap.ItemsView.extend(Bootstrap.SizeSupport,Bootstrap.ItemsSelection,{classTypePrefix:["btn-group"],classNames:["btn-group"],classNameBindings:["vertical:btn-group-vertical"],itemViewClass:Bootstrap.BsButtonComponent.extend(Bootstrap.ItemValue,Bootstrap.ItemSelection,{layoutName:"components/bs-button"})}),Ember.Handlebars.helper("bs-btn-group",Bootstrap.BsBtnGroup)}.call(this),function(){Bootstrap.BsBtnToolbarComponent=Ember.Component.extend({layoutName:"components/bs-btn-toolbar",classNames:["btn-toolbar"]}),Ember.Handlebars.helper("bs-btn-toolbar",Bootstrap.BsBtnToolbarComponent)}.call(this),this.Ember=this.Ember||{},this.Ember.TEMPLATES=this.Ember.TEMPLATES||{},this.Ember.TEMPLATES["components/bs-button"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return f={},g={},e.buffer.push(i(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"yield",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),h}),this.Ember=this.Ember||{},this.Ember.TEMPLATES=this.Ember.TEMPLATES||{},this.Ember.TEMPLATES["components/bs-btn-toolbar"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h=this.escapeExpression;f={},g={},e.buffer.push(h(c._triageMustache.call(b,"yield",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e})))});
!function(){Bootstrap.BsModalComponent=Ember.Component.extend({layoutName:"components/bs-modal",classNames:["modal"],attributeBindings:["role","aria-labelledby","isAriaHidden:aria-hidden","ariaLabelledBy:aria-labelledby"],isAriaHidden:function(){return""+this.get("isVisible")}.property("isVisible"),modalBackdrop:'<div class="modal-backdrop fade in"></div>',role:"dialog",backdrop:!0,title:null,isVisible:!1,manual:!1,didInsertElement:function(){var a;return this._super(),this.setupBinders(),a=this.get("name"),Ember.assert("Modal name is required for modal view "+this.get("elementId"),this.get("name")),null==a&&(a=this.get("elementId")),Bootstrap.ModalManager.add(a,this),this.manual?this.show():void 0},becameVisible:function(){return this.get("backdrop")?this.appendBackdrop():void 0},becameHidden:function(){return this._backdrop?this._backdrop.remove():void 0},appendBackdrop:function(){var a;return a=this.$().parent(),this._backdrop=Em.$(this.modalBackdrop).appendTo(a)},show:function(){return this.set("isVisible",!0)},hide:function(){return this.set("isVisible",!1)},toggle:function(){return this.toggleProperty("isVisible")},click:function(a){var b,c;return b=a.target,c=b.getAttribute("data-dismiss"),"modal"===c?this.close():void 0},keyPressed:function(a){return 27===a.keyCode?this.close(a):void 0},close:function(){return this.get("manual")?this.destroy():this.hide()},willDestroyElement:function(){var a;return this.removeHandlers(),a=this.get("name"),null==a&&(a=this.get("elementId")),Bootstrap.ModalManager.remove(a,this),this._backdrop?this._backdrop.remove():void 0},removeHandlers:function(){return jQuery(window.document).unbind("keyup",this._keyUpHandler)},setupBinders:function(){var a,b=this;return a=function(a){return b.keyPressed(a)},jQuery(window.document).bind("keyup",a),this._keyUpHandler=a}}),Bootstrap.ModalManager=Ember.Object.create({add:function(a,b){return this.set(a,b)},remove:function(a){return this.set(a,null)},close:function(a){return this.get(a).close()},hide:function(a){return this.get(a).hide()},show:function(a){return this.get(a).show()},toggle:function(a){return this.get(a).toggle()},open:function(a,b,c,d,e){var f,g,h;return f=e.container.lookup("component-lookup:main"),g=f.lookupFactory("bs-modal",e.get("container")).create(),g.setProperties({name:a,title:b,manual:!0,footerButtons:d,targetObject:e}),"string"===Ember.typeOf(c)?(h=e.container.lookup("template:"+c),Ember.assert("Template "+c+" was specified for Modal but template could not be found.",h),h&&g.setProperties({body:Ember.View.extend({template:h,controller:e})})):"class"===Ember.typeOf(c)&&g.setProperties({body:c,controller:e}),g.appendTo(e.namespace.rootElement)}}),Ember.Application.initializer({name:"bs-modal",initialize:function(a){return a.register("component:bs-modal",Bootstrap.BsModalComponent)}})}.call(this),this.Ember=this.Ember||{},this.Ember.TEMPLATES=this.Ember.TEMPLATES||{},this.Ember.TEMPLATES["components/bs-modal"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n                "),d={},e={},b.buffer.push(m(c.view.call(a,"view.body",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n            "),f}function g(a,b){var d,e,f="";return b.buffer.push("\n                "),d={},e={},b.buffer.push(m(c._triageMustache.call(a,"yield",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n            "),f}function h(a,b){var d,e,f,g,h="";return b.buffer.push("\n                "),e={content:a,targetObjectBinding:a},f={content:"ID",targetObjectBinding:"STRING"},g={hash:{content:"",targetObjectBinding:"view.targetObject"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(m((d=c["bs-button"]||a["bs-button"],d?d.call(a,g):n.call(a,"bs-button",g)))),b.buffer.push("\n            "),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l="",m=this.escapeExpression,n=c.helperMissing,o=this;return e.buffer.push('<div class="modal-dialog">\n    <div class="modal-content">\n        <div class="modal-header">\n            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n            <h4 class="modal-title">'),j={},k={},e.buffer.push(m(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push('</h4>\n        </div>\n        <div class="modal-body">\n            '),j={},k={},i=c["if"].call(b,"body",{hash:{},inverse:o.program(3,g,e),fn:o.program(1,f,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push('\n        </div>\n        <div class="modal-footer">\n            '),j={},k={},i=c.each.call(b,"footerButtons",{hash:{},inverse:o.noop,fn:o.program(5,h,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n        </div>\n    </div>\n</div>"),l});
+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),function(){Bootstrap.BsAlertComponent=Ember.Component.extend(Bootstrap.TypeSupport,{classNames:["alert"],classNameBindings:["fade","fade:in"],layoutName:"components/bs-alert",classTypePrefix:"alert",attributeBindings:["data-timeout"],dismissAfter:0,didInsertElement:function(){var a=this;return this.dismissAfter>0&&Ember.run.later(this,"dismiss",1e3*this.dismissAfter),Ember.$("#"+this.elementId).bind("closed.bs.alert",function(){return a.sendAction("closed"),a.destroy()}),Ember.$("#"+this.elementId).bind("close.bs.alert",function(){return a.sendAction("close")})},dismiss:function(){return Ember.$("#"+this.elementId).alert("close")}}),Ember.Handlebars.helper("bs-alert",Bootstrap.BsAlertComponent)}.call(this),this.Ember=this.Ember||{},this.Ember.TEMPLATES=this.Ember.TEMPLATES||{},this.Ember.TEMPLATES["components/bs-alert"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push('\n    <a class="close" data-dismiss="alert" href="#">&times;</a>\n')}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=this,l=this.escapeExpression;return h={},i={},g=c["if"].call(b,"dismiss",{hash:{},inverse:k.noop,fn:k.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n"),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"message",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"yield",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),j});
!function(){Bootstrap.NotificationsView=Ember.CollectionView.extend({classNames:["notifications"],attributeBindings:["style"],contentBinding:"Bootstrap.NM.content",showTime:2e3,fadeInTime:500,fadeOutTime:3e3,showTimeTimeoutId:null,itemViewClass:Ember.View.extend({classNames:["alert","notification"],template:Ember.Handlebars.compile("{{view.content.message}}"),classNameBindings:["alertType"],isVisible:!1,alertType:function(){return this.get("content").get("classType")}.property("content"),didInsertElement:function(){return this.$().fadeIn(this.get("fadeInTime"))}}),contentChanged:function(){return this.get("content").length>0?this.resetShowTime():void 0}.observes("content.length"),resetShowTime:function(){return this.$().css({display:"block"}),this.$().is(":animated")&&this.$().stop().animate({opacity:"100"}),null!=this.showTimeTimeoutId&&clearTimeout(this.showTimeTimeoutId),this.showTimeTimeoutId=setTimeout(this.fadeOut,this.showTime,this)},fadeOut:function(a){return a.$().fadeOut(a.fadeOutTime,function(){return a.get("content").clear()})},mouseEnter:function(){return this.$().is(":animated")?this.$().stop().animate({opacity:"100"}):void 0},mouseLeave:function(){return this.resetShowTime()}}),Ember.Handlebars.helper("bs-notifications",Bootstrap.NotificationsView),Bootstrap.NM=Bootstrap.NotificationManager=Ember.Object.create({content:Ember.A(),push:function(a,b){var c;return b=null!=b?b:b="info",c=Bootstrap.Notification.create({message:a,type:b}),this.get("content").pushObject(c)}}),Bootstrap.Notification=Ember.Object.extend({classType:function(){return null!=this.type?"alert-"+this.type:null}.property("type").cacheable()})}.call(this);
!function(){Bootstrap.BsListGroupComponent=Bootstrap.ItemsView.extend({tagName:"ul",classNames:["list-group"],itemViewClass:Bootstrap.ItemView.extend(Bootstrap.ItemSelection,{classNames:["list-group-item"],template:Ember.Handlebars.compile('{{#if view.badge}}\n    {{bs-badge contentBinding="view.badge"}}\n{{/if}}\n{{#if view.sub}}\n    <h4 class="list-group-item-heading">{{view.title}}</h4>\n    <p class="list-group-item-text">{{view.sub}}</p>\n{{else}}\n    {{view.title}}\n{{/if}}'),badge:function(){var a;return a=this.get("content"),"instance"===Ember.typeOf(a)||Ember.canInvoke(a,"get")?a.get("badge"):null}.property("content"),sub:function(){var a;return a=this.get("content"),"instance"===Ember.typeOf(a)||Ember.canInvoke(a,"get")?a.get("sub"):null}.property("content")})}),Ember.Handlebars.helper("bs-list-group",Bootstrap.BsListGroupComponent)}.call(this);
!function(){Bootstrap.BsLabelComponent=Ember.Component.extend(Bootstrap.TypeSupport,{layoutName:"components/bs-label",tagName:"span",classNames:["label"],classTypePrefix:"label"}),Ember.Handlebars.helper("bs-label",Bootstrap.BsLabelComponent)}.call(this),this.Ember=this.Ember||{},this.Ember.TEMPLATES=this.Ember.TEMPLATES||{},this.Ember.TEMPLATES["components/bs-label"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h=this.escapeExpression;f={},g={},e.buffer.push(h(c._triageMustache.call(b,"content",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e})))});
/**
 * Bootstrap Multiselect v0.9.8 (https://github.com/davidstutz/bootstrap-multiselect)
 * 
 * Copyright 2012 - 2014 David Stutz
 * 
 * Dual licensed under the BSD-3-Clause and the Apache License, Version 2.0.
 */
!function($) {
 
    "use strict";// jshint ;_;

    if (typeof ko !== 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
        ko.bindingHandlers.multiselect = {

            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                var listOfSelectedItems = allBindingsAccessor().selectedOptions;
                var config = ko.utils.unwrapObservable(valueAccessor());

                $(element).multiselect(config);

                if (isObservableArray(listOfSelectedItems)) {
                    
                    // Set the initial selection state on the multiselect list.
                    $(element).multiselect('select', ko.utils.unwrapObservable(listOfSelectedItems));
                    
                    // Subscribe to the selectedOptions: ko.observableArray
                    listOfSelectedItems.subscribe(function (changes) {
                        var addedArray = [], deletedArray = [];
                        forEach(changes, function (change) {
                            switch (change.status) {
                                case 'added':
                                    addedArray.push(change.value);
                                    break;
                                case 'deleted':
                                    deletedArray.push(change.value);
                                    break;
                            }
                        });
                        
                        if (addedArray.length > 0) {
                            $(element).multiselect('select', addedArray);
                        }
                        
                        if (deletedArray.length > 0) {
                            $(element).multiselect('deselect', deletedArray);
                        }
                    }, null, "arrayChange");
                }
            },

            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                var listOfItems = allBindingsAccessor().options,
                    ms = $(element).data('multiselect'),
                    config = ko.utils.unwrapObservable(valueAccessor());

                if (isObservableArray(listOfItems)) {
                    // Subscribe to the options: ko.observableArray incase it changes later
                    listOfItems.subscribe(function (theArray) {
                        $(element).multiselect('rebuild');
                    });
                }

                if (!ms) {
                    $(element).multiselect(config);
                }
                else {
                    ms.updateOriginalOptions();
                }
            }
        };
    }

    function isObservableArray(obj) {
        return ko.isObservable(obj) && !(obj.destroyAll === undefined);
    }

    function forEach(array, callback) {
        for (var index = 0; index < array.length; ++index) {
            callback(array[index]);
        }
    }

    /**
     * Constructor to create a new multiselect using the given select.
     * 
     * @param {jQuery} select
     * @param {Object} options
     * @returns {Multiselect}
     */
    function Multiselect(select, options) {

        this.options = this.mergeOptions(options);
        this.$select = $(select);

        // Initialization.
        // We have to clone to create a new reference.
        this.originalOptions = this.$select.clone()[0].options;
        this.query = '';
        this.searchTimeout = null;

        this.options.multiple = this.$select.attr('multiple') === "multiple";
        this.options.onChange = $.proxy(this.options.onChange, this);
        this.options.onDropdownShow = $.proxy(this.options.onDropdownShow, this);
        this.options.onDropdownHide = $.proxy(this.options.onDropdownHide, this);
        this.options.onDropdownShown = $.proxy(this.options.onDropdownShown, this);
        this.options.onDropdownHidden = $.proxy(this.options.onDropdownHidden, this);
        
        // Build select all if enabled.
        this.buildContainer();
        this.buildButton();
        this.buildDropdown();
        this.buildSelectAll();
        this.buildDropdownOptions();
        this.buildFilter();
        
        this.updateButtonText();
        this.updateSelectAll();
        
        if (this.options.disableIfEmpty) {
            this.disableIfEmpty();
        }
        
        this.$select.hide().after(this.$container);
    };

    Multiselect.prototype = {

        defaults: {
            /**
             * Default text function will either print 'None selected' in case no
             * option is selected or a list of the selected options up to a length
             * of 3 selected options.
             * 
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {String}
             */
            buttonText: function(options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText + ' <b class="caret"></b>';
                }
                else {
                    if (options.length > this.numberDisplayed) {
                        return options.length + ' ' + this.nSelectedText + ' <b class="caret"></b>';
                    }
                    else {
                        var selected = '';
                        options.each(function() {
                            var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).html();

                            selected += label + ', ';
                        });
                        return selected.substr(0, selected.length - 2) + ' <b class="caret"></b>';
                    }
                }
            },
            /**
             * Updates the title of the button similar to the buttonText function.
             * 
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {@exp;selected@call;substr}
             */
            buttonTitle: function(options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText;
                }
                else {
                    var selected = '';
                    options.each(function () {
                        selected += $(this).text() + ', ';
                    });
                    return selected.substr(0, selected.length - 2);
                }
            },
            /**
             * Create a label.
             * 
             * @param {jQuery} element
             * @returns {String}
             */
            label: function(element){
                return $(element).attr('label') || $(element).html();
            },
            /**
             * Triggered on change of the multiselect.
             * 
             * Not triggered when selecting/deselecting options manually.
             * 
             * @param {jQuery} option
             * @param {Boolean} checked
             */
            onChange : function(option, checked) {

            },
            /**
             * Triggered when the dropdown is shown.
             * 
             * @param {jQuery} event
             */
            onDropdownShow: function(event) {
                
            },
            /**
             * Triggered when the dropdown is hidden.
             * 
             * @param {jQuery} event
             */
            onDropdownHide: function(event) {
                
            },
            /**
             * Triggered after the dropdown is shown.
             * 
             * @param {jQuery} event
             */
            onDropdownShown: function(event) {
                
            },
            /**
             * Triggered after the dropdown is hidden.
             * 
             * @param {jQuery} event
             */
            onDropdownHidden: function(event) {
                
            },
            buttonClass: 'btn btn-default',
            dropRight: false,
            selectedClass: 'active',
            buttonWidth: 'auto',
            buttonContainer: '<div class="btn-group" />',
            // Maximum height of the dropdown menu.
            // If maximum height is exceeded a scrollbar will be displayed.
            maxHeight: false,
            checkboxName: false,
            includeSelectAllOption: false,
            includeSelectAllIfMoreThan: 0,
            selectAllText: ' Select all',
            selectAllValue: 'multiselect-all',
            enableFiltering: false,
            enableCaseInsensitiveFiltering: false,
            filterPlaceholder: 'Search',
            // possible options: 'text', 'value', 'both'
            filterBehavior: 'text',
            preventInputChangeEvent: false,
            nonSelectedText: 'None selected',
            nSelectedText: 'selected',
            numberDisplayed: 3,
            disableIfEmpty: false,
            templates: {
                button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"></button>',
                ul: '<ul class="multiselect-container dropdown-menu"></ul>',
                filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
                li: '<li><a href="javascript:void(0);"><label></label></a></li>',
                divider: '<li class="multiselect-item divider"></li>',
                liGroup: '<li class="multiselect-item group"><label class="multiselect-group"></label></li>'
            }
        },

        constructor: Multiselect,

        /**
         * Builds the container of the multiselect.
         */
        buildContainer: function() {
            this.$container = $(this.options.buttonContainer);
            this.$container.on('show.bs.dropdown', this.options.onDropdownShow);
            this.$container.on('hide.bs.dropdown', this.options.onDropdownHide);
            this.$container.on('shown.bs.dropdown', this.options.onDropdownShown);
            this.$container.on('hidden.bs.dropdown', this.options.onDropdownHidden);
        },

        /**
         * Builds the button of the multiselect.
         */
        buildButton: function() {
            this.$button = $(this.options.templates.button).addClass(this.options.buttonClass);

            // Adopt active state.
            if (this.$select.prop('disabled')) {
                this.disable();
            }
            else {
                this.enable();
            }

            // Manually add button width if set.
            if (this.options.buttonWidth && this.options.buttonWidth !== 'auto') {
                this.$button.css({
                    'width' : this.options.buttonWidth
                });
                this.$container.css({
                    'width': this.options.buttonWidth
                });
            }

            // Keep the tab index from the select.
            var tabindex = this.$select.attr('tabindex');
            if (tabindex) {
                this.$button.attr('tabindex', tabindex);
            }

            this.$container.prepend(this.$button);
        },

        /**
         * Builds the ul representing the dropdown menu.
         */
        buildDropdown: function() {

            // Build ul.
            this.$ul = $(this.options.templates.ul);

            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }

            // Set max height of dropdown menu to activate auto scrollbar.
            if (this.options.maxHeight) {
                // TODO: Add a class for this option to move the css declarations.
                this.$ul.css({
                    'max-height': this.options.maxHeight + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden'
                });
            }

            this.$container.append(this.$ul);
        },

        /**
         * Build the dropdown options and binds all nessecary events.
         * 
         * Uses createDivider and createOptionValue to create the necessary options.
         */
        buildDropdownOptions: function() {

            this.$select.children().each($.proxy(function(index, element) {
                
                // Support optgroups and options without a group simultaneously.
                var tag = $(element).prop('tagName')
                    .toLowerCase();
            
                if ($(element).prop('value') === this.options.selectAllValue) {
                    return;
                }

                if (tag === 'optgroup') {
                    this.createOptgroup(element);
                }
                else if (tag === 'option') {

                    if ($(element).data('role') === 'divider') {
                        this.createDivider();
                    }
                    else {
                        this.createOptionValue(element);
                    }

                }
                
                // Other illegal tags will be ignored.
            }, this));

            // Bind the change event on the dropdown elements.
            $('li input', this.$ul).on('change', $.proxy(function(event) {
                var $target = $(event.target);

                var checked = $target.prop('checked') || false;
                var isSelectAllOption = $target.val() === this.options.selectAllValue;

                // Apply or unapply the configured selected class.
                if (this.options.selectedClass) {
                    if (checked) {
                        $target.parents('li')
                            .addClass(this.options.selectedClass);
                    }
                    else {
                        $target.parents('li')
                            .removeClass(this.options.selectedClass);
                    }
                }

                // Get the corresponding option.
                var value = $target.val();
                var $option = this.getOptionByValue(value);

                var $optionsNotThis = $('option', this.$select).not($option);
                var $checkboxesNotThis = $('input', this.$container).not($target);

                if (isSelectAllOption) {
                    if (checked) {
                        this.selectAll();
                    }
                    else {
                        this.deselectAll();
                    }
                }

                if(!isSelectAllOption){
                    if (checked) {
                        $option.prop('selected', true);

                        if (this.options.multiple) {
                            // Simply select additional option.
                            $option.prop('selected', true);
                        }
                        else {
                            // Unselect all other options and corresponding checkboxes.
                            if (this.options.selectedClass) {
                                $($checkboxesNotThis).parents('li').removeClass(this.options.selectedClass);
                            }

                            $($checkboxesNotThis).prop('checked', false);
                            $optionsNotThis.prop('selected', false);

                            // It's a single selection, so close.
                            this.$button.click();
                        }

                        if (this.options.selectedClass === "active") {
                            $optionsNotThis.parents("a").css("outline", "");
                        }
                    }
                    else {
                        // Unselect option.
                        $option.prop('selected', false);
                    }
                }

                this.$select.change();

                this.updateButtonText();
                this.updateSelectAll();
                
                this.options.onChange($option, checked);

                if(this.options.preventInputChangeEvent) {
                    return false;
                }
            }, this));

            $('li a', this.$ul).on('touchstart click', function(event) {
                event.stopPropagation();

                var $target = $(event.target);

                if (event.shiftKey) {
                    var checked = $target.prop('checked') || false;

                    if (checked) {
                        var prev = $target.parents('li:last')
                            .siblings('li[class="active"]:first');

                        var currentIdx = $target.parents('li')
                            .index();
                        var prevIdx = prev.index();

                        if (currentIdx > prevIdx) {
                            $target.parents("li:last").prevUntil(prev).each(
                                function() {
                                    $(this).find("input:first").prop("checked", true)
                                        .trigger("change");
                                }
                            );
                        }
                        else {
                            $target.parents("li:last").nextUntil(prev).each(
                                function() {
                                    $(this).find("input:first").prop("checked", true)
                                        .trigger("change");
                                }
                            );
                        }
                    }
                }

                $target.blur();
            });

            // Keyboard support.
            this.$container.off('keydown.multiselect').on('keydown.multiselect', $.proxy(function(event) {
                if ($('input[type="text"]', this.$container).is(':focus')) {
                    return;
                }
                if ((event.keyCode === 9 || event.keyCode === 27)
                        && this.$container.hasClass('open')) {
                    
                    // Close on tab or escape.
                    this.$button.click();
                }
                else {
                    var $items = $(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");

                    if (!$items.length) {
                        return;
                    }

                    var index = $items.index($items.filter(':focus'));

                    // Navigation up.
                    if (event.keyCode === 38 && index > 0) {
                        index--;
                    }
                    // Navigate down.
                    else if (event.keyCode === 40 && index < $items.length - 1) {
                        index++;
                    }
                    else if (!~index) {
                        index = 0;
                    }

                    var $current = $items.eq(index);
                    $current.focus();

                    if (event.keyCode === 32 || event.keyCode === 13) {
                        var $checkbox = $current.find('input');

                        $checkbox.prop("checked", !$checkbox.prop("checked"));
                        $checkbox.change();
                    }

                    event.stopPropagation();
                    event.preventDefault();
                }
            }, this));
        },

        /**
         * Create an option using the given select option.
         * 
         * @param {jQuery} element
         */
        createOptionValue: function(element) {
            if ($(element).is(':selected')) {
                $(element).prop('selected', true);
            }

            // Support the label attribute on options.
            var label = this.options.label(element);
            var value = $(element).val();
            var inputType = this.options.multiple ? "checkbox" : "radio";

            var $li = $(this.options.templates.li);
            $('label', $li).addClass(inputType);
            
            if (this.options.checkboxName) {
                $('label', $li).append('<input type="' + inputType + '" name="' + this.options.checkboxName + '" />');
            }
            else {
                $('label', $li).append('<input type="' + inputType + '" />');
            }
            
            var selected = $(element).prop('selected') || false;
            var $checkbox = $('input', $li);
            $checkbox.val(value);

            if (value === this.options.selectAllValue) {
                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');
            }

            $('label', $li).append(" " + label);

            this.$ul.append($li);

            if ($(element).is(':disabled')) {
                $checkbox.attr('disabled', 'disabled')
                    .prop('disabled', true)
                    .parents('a')
                    .attr("tabindex", "-1")
                    .parents('li')
                    .addClass('disabled');
            }

            $checkbox.prop('checked', selected);

            if (selected && this.options.selectedClass) {
                $checkbox.parents('li')
                    .addClass(this.options.selectedClass);
            }
        },

        /**
         * Creates a divider using the given select option.
         * 
         * @param {jQuery} element
         */
        createDivider: function(element) {
            var $divider = $(this.options.templates.divider);
            this.$ul.append($divider);
        },

        /**
         * Creates an optgroup.
         * 
         * @param {jQuery} group
         */
        createOptgroup: function(group) {
            var groupName = $(group).prop('label');

            // Add a header for the group.
            var $li = $(this.options.templates.liGroup);
            $('label', $li).text(groupName);

            this.$ul.append($li);

            if ($(group).is(':disabled')) {
                $li.addClass('disabled');
            }

            // Add the options of the group.
            $('option', group).each($.proxy(function(index, element) {
                this.createOptionValue(element);
            }, this));
        },

        /**
         * Build the selct all.
         * 
         * Checks if a select all has already been created.
         */
        buildSelectAll: function() {
            var alreadyHasSelectAll = this.hasSelectAll();
            
            if (!alreadyHasSelectAll && this.options.includeSelectAllOption && this.options.multiple
                    && $('option', this.$select).length > this.options.includeSelectAllIfMoreThan) {
                
                // Check whether to add a divider after the select all.
                if (this.options.includeSelectAllDivider) {
                    this.$ul.prepend($(this.options.templates.divider));
                }

                var $li = $(this.options.templates.li);
                $('label', $li).addClass("checkbox");
                
                if (this.options.checkboxName) {
                    $('label', $li).append('<input type="checkbox" name="' + this.options.checkboxName + '" />');
                }
                else {
                    $('label', $li).append('<input type="checkbox" />');
                }
                
                var $checkbox = $('input', $li);
                $checkbox.val(this.options.selectAllValue);

                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');

                $('label', $li).append(" " + this.options.selectAllText);

                this.$ul.prepend($li);

                $checkbox.prop('checked', false);
            }
        },

        /**
         * Builds the filter.
         */
        buildFilter: function() {

            // Build filter if filtering OR case insensitive filtering is enabled and the number of options exceeds (or equals) enableFilterLength.
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var enableFilterLength = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);

                if (this.$select.find('option').length >= enableFilterLength) {

                    this.$filter = $(this.options.templates.filter);
                    $('input', this.$filter).attr('placeholder', this.options.filterPlaceholder);
                    this.$ul.prepend(this.$filter);

                    this.$filter.val(this.query).on('click', function(event) {
                        event.stopPropagation();
                    }).on('input keydown', $.proxy(function(event) {
                        // This is useful to catch "keydown" events after the browser has updated the control.
                        clearTimeout(this.searchTimeout);

                        this.searchTimeout = this.asyncFunction($.proxy(function() {

                            if (this.query !== event.target.value) {
                                this.query = event.target.value;

                                $.each($('li', this.$ul), $.proxy(function(index, element) {
                                    var value = $('input', element).val();
                                    var text = $('label', element).text();

                                    var filterCandidate = '';
                                    if ((this.options.filterBehavior === 'text')) {
                                        filterCandidate = text;
                                    }
                                    else if ((this.options.filterBehavior === 'value')) {
                                        filterCandidate = value;
                                    }
                                    else if (this.options.filterBehavior === 'both') {
                                        filterCandidate = text + '\n' + value;
                                    }

                                    if (value !== this.options.selectAllValue && text) {
                                        // By default lets assume that element is not
                                        // interesting for this search.
                                        var showElement = false;

                                        if (this.options.enableCaseInsensitiveFiltering && filterCandidate.toLowerCase().indexOf(this.query.toLowerCase()) > -1) {
                                            showElement = true;
                                        }
                                        else if (filterCandidate.indexOf(this.query) > -1) {
                                            showElement = true;
                                        }

                                        if (showElement) {
                                            $(element).show().removeClass("filter-hidden");
                                        }
                                        else {
                                            $(element).hide().addClass("filter-hidden");
                                        }
                                    }
                                }, this));
                            }

                            this.updateSelectAll();
                        }, this), 300, this);
                    }, this));
                }
            }
        },

        /**
         * Unbinds the whole plugin.
         */
        destroy: function() {
            this.$container.remove();
            this.$select.show();
            this.$select.data('multiselect', null);
        },

        /**
         * Refreshs the multiselect based on the selected options of the select.
         */
        refresh: function() {
            $('option', this.$select).each($.proxy(function(index, element) {
                var $input = $('li input', this.$ul).filter(function() {
                    return $(this).val() === $(element).val();
                });

                if ($(element).is(':selected')) {
                    $input.prop('checked', true);

                    if (this.options.selectedClass) {
                        $input.parents('li')
                            .addClass(this.options.selectedClass);
                    }
                }
                else {
                    $input.prop('checked', false);

                    if (this.options.selectedClass) {
                        $input.parents('li')
                            .removeClass(this.options.selectedClass);
                    }
                }

                if ($(element).is(":disabled")) {
                    $input.attr('disabled', 'disabled')
                        .prop('disabled', true)
                        .parents('li')
                        .addClass('disabled');
                }
                else {
                    $input.prop('disabled', false)
                        .parents('li')
                        .removeClass('disabled');
                }
            }, this));

            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Select all options of the given values.
         * 
         * If triggerOnChange is set to true, the on change event is triggered if
         * and only if one value is passed.
         * 
         * @param {Array} selectValues
         * @param {Boolean} triggerOnChange
         */
        select: function(selectValues, triggerOnChange) {
            if(!$.isArray(selectValues)) {
                selectValues = [selectValues];
            }

            for (var i = 0; i < selectValues.length; i++) {
                var value = selectValues[i];

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if($option === undefined || $checkbox === undefined) {
                    continue;
                }
                
                if (!this.options.multiple) {
                    this.deselectAll(false);
                }
                
                if (this.options.selectedClass) {
                    $checkbox.parents('li')
                        .addClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', true);
                $option.prop('selected', true);
            }

            this.updateButtonText();

            if (triggerOnChange && selectValues.length === 1) {
                this.options.onChange($option, true);
            }
        },

        /**
         * Clears all selected items.
         */
        clearSelection: function () {
            this.deselectAll(false);
            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Deselects all options of the given values.
         * 
         * If triggerOnChange is set to true, the on change event is triggered, if
         * and only if one value is passed.
         * 
         * @param {Array} deselectValues
         * @param {Boolean} triggerOnChange
         */
        deselect: function(deselectValues, triggerOnChange) {
            if(!$.isArray(deselectValues)) {
                deselectValues = [deselectValues];
            }

            for (var i = 0; i < deselectValues.length; i++) {

                var value = deselectValues[i];

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if($option === undefined || $checkbox === undefined) {
                    continue;
                }

                if (this.options.selectedClass) {
                    $checkbox.parents('li')
                        .removeClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', false);
                $option.prop('selected', false);
            }

            this.updateButtonText();

            if (triggerOnChange && deselectValues.length === 1) {
                this.options.onChange($option, false);
            }
        },
        
        /**
         * Selects all enabled & visible options.
         */
        selectAll: function () {
            var allCheckboxes = $("li input[type='checkbox']:enabled", this.$ul);
            var visibleCheckboxes = allCheckboxes.filter(":visible");
            var allCheckboxesCount = allCheckboxes.length;
            var visibleCheckboxesCount = visibleCheckboxes.length;
                
            visibleCheckboxes.prop('checked', true);
            $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass);
            
            if (allCheckboxesCount === visibleCheckboxesCount) {
                $("option:enabled", this.$select).prop('selected', true);
            }
            else {
                var values = visibleCheckboxes.map(function() {
                    return $(this).val();
                }).get();
                
                $("option:enabled", this.$select).filter(function(index) {
                    return $.inArray($(this).val(), values) !== -1;
                }).prop('selected', true);
            }
        },

        /**
         * Deselects all options.
         * 
         * If justVisible is true or not specified, only visible options are deselected.
         * 
         * @param {Boolean} justVisible
         */
        deselectAll: function (justVisible) {
            var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
            
            if(justVisible) {              
                var visibleCheckboxes = $("li input[type='checkbox']:enabled", this.$ul).filter(":visible");
                visibleCheckboxes.prop('checked', false);
                
                var values = visibleCheckboxes.map(function() {
                    return $(this).val();
                }).get();
                
                $("option:enabled", this.$select).filter(function(index) {
                    return $.inArray($(this).val(), values) !== -1;
                }).prop('selected', false);
                
                if (this.options.selectedClass) {
                    $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass);
                }
            }
            else {
                $("li input[type='checkbox']:enabled", this.$ul).prop('checked', false);
                $("option:enabled", this.$select).prop('selected', false);
                
                if (this.options.selectedClass) {
                    $("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass);
                }
            }
        },

        /**
         * Rebuild the plugin.
         * 
         * Rebuilds the dropdown, the filter and the select all option.
         */
        rebuild: function() {
            this.$ul.html('');

            // Important to distinguish between radios and checkboxes.
            this.options.multiple = this.$select.attr('multiple') === "multiple";

            this.buildSelectAll();
            this.buildDropdownOptions();
            this.buildFilter();
            
            this.updateButtonText();
            this.updateSelectAll();
            
            if (this.options.disableIfEmpty) {
                this.disableIfEmpty();
            }
            
            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }
        },

        /**
         * The provided data will be used to build the dropdown.
         * 
         * @param {Array} dataprovider
         */
        dataprovider: function(dataprovider) {
            var optionDOM = "";
            var groupCounter = 0;

            $.each(dataprovider, function (index, option) {
                if ($.isArray(option.children)) {
                    groupCounter++;
                    optionDOM += '<optgroup label="' + (option.title || 'Group ' + groupCounter) + '">';

                    forEach(option.children, function(subOption) {
                        optionDOM += '<option value="' + subOption.value + '">' + (subOption.label || subOption.value) + '</option>';
                    });

                    optionDOM += '</optgroup>';
                }
                else {
                    optionDOM += '<option value="' + option.value + '">' + (option.label || option.value) + '</option>';
                }
            });
            
            this.$select.html(optionDOM);
            this.rebuild();
        },

        /**
         * Enable the multiselect.
         */
        enable: function() {
            this.$select.prop('disabled', false);
            this.$button.prop('disabled', false)
                .removeClass('disabled');
        },

        /**
         * Disable the multiselect.
         */
        disable: function() {
            this.$select.prop('disabled', true);
            this.$button.prop('disabled', true)
                .addClass('disabled');
        },

        /**
         * Disable the multiselect if there are no options in the select.
         */
        disableIfEmpty: function () {
            if ($('option', this.$select).length <= 0) {
                this.disable();
            }
            else {
                this.enable();
            }
        },

        /**
         * Set the options.
         * 
         * @param {Array} options
         */
        setOptions: function(options) {
            this.options = this.mergeOptions(options);
        },

        /**
         * Merges the given options with the default options.
         * 
         * @param {Array} options
         * @returns {Array}
         */
        mergeOptions: function(options) {
            return $.extend(true, {}, this.defaults, options);
        },
        
        /**
         * Checks whether a select all checkbox is present.
         * 
         * @returns {Boolean}
         */
        hasSelectAll: function() {
            return $('li.' + this.options.selectAllValue, this.$ul).length > 0;
        },
        
        /**
         * Updates the select all checkbox based on the currently displayed and selected checkboxes.
         */
        updateSelectAll: function() {
            if (this.hasSelectAll()) {
                var allBoxes = $("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul);
                var allBoxesLength = allBoxes.length;
                var checkedBoxesLength = allBoxes.filter(":checked").length;
                var selectAllLi  = $("li." + this.options.selectAllValue, this.$ul);
                var selectAllInput = selectAllLi.find("input");
                
                if (checkedBoxesLength > 0 && checkedBoxesLength === allBoxesLength) {
                    selectAllInput.prop("checked", true);
                    selectAllLi.addClass(this.options.selectedClass);
                }
                else {
                    selectAllInput.prop("checked", false);
                    selectAllLi.removeClass(this.options.selectedClass);
                }
            }
        },
        
        /**
         * Update the button text and its title based on the currently selected options.
         */
        updateButtonText: function() {
            var options = this.getSelected();
            
            // First update the displayed button text.
            $('button.multiselect', this.$container).html(this.options.buttonText(options, this.$select));
            
            // Now update the title attribute of the button.
            $('button.multiselect', this.$container).attr('title', this.options.buttonTitle(options, this.$select));
        },

        /**
         * Get all selected options.
         * 
         * @returns {jQUery}
         */
        getSelected: function() {
            return $('option', this.$select).filter(":selected");
        },

        /**
         * Gets a select option by its value.
         * 
         * @param {String} value
         * @returns {jQuery}
         */
        getOptionByValue: function (value) {

            var options = $('option', this.$select);
            var valueToCompare = value.toString();

            for (var i = 0; i < options.length; i = i + 1) {
                var option = options[i];
                if (option.value === valueToCompare) {
                    return $(option);
                }
            }
        },

        /**
         * Get the input (radio/checkbox) by its value.
         * 
         * @param {String} value
         * @returns {jQuery}
         */
        getInputByValue: function (value) {

            var checkboxes = $('li input', this.$ul);
            var valueToCompare = value.toString();

            for (var i = 0; i < checkboxes.length; i = i + 1) {
                var checkbox = checkboxes[i];
                if (checkbox.value === valueToCompare) {
                    return $(checkbox);
                }
            }
        },

        /**
         * Used for knockout integration.
         */
        updateOriginalOptions: function() {
            this.originalOptions = this.$select.clone()[0].options;
        },

        asyncFunction: function(callback, timeout, self) {
            var args = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function() {
                callback.apply(self || window, args);
            }, timeout);
        }
    };

    $.fn.multiselect = function(option, parameter, extraOptions) {
        return this.each(function() {
            var data = $(this).data('multiselect');
            var options = typeof option === 'object' && option;
            
            // Initialize the multiselect.
            if (!data) {
                data = new Multiselect(this, options);
                $(this).data('multiselect', data);
            }

            // Call multiselect method.
            if (typeof option === 'string') {
                data[option](parameter, extraOptions);
                
                if (option === 'destroy') {
                    $(this).data('multiselect', false);
                }
            }
        });
    };

    $.fn.multiselect.Constructor = Multiselect;

    $(function() {
        $("select[data-role=multiselect]").multiselect();
    });

}(window.jQuery);

// Last commit: a56fcf9 (2014-06-12 18:59:24 -0400)


// ==========================================================================
// Project:   Ember ListView
// Copyright: ©2012-2013 Erik Bryn, Yapp Inc., and contributors.
// License:   Licensed under MIT license
// ==========================================================================


(function() {
var get = Ember.get, set = Ember.set;

function samePosition(a, b) {
  return a && b && a.x === b.x && a.y === b.y;
}

function positionElement() {
  var element, position, _position;

  Ember.instrument('view.updateContext.positionElement', this, function() {
    element = get(this, 'element');
    position = this.position;
    _position = this._position;

    if (!position || !element) { return; }

    // TODO: avoid needing this by avoiding unnecessary
    // calls to this method in the first place
    if (samePosition(position, _position)) { return; }
    Ember.run.schedule('render', this, this._parentView.applyTransform, element, position.x, position.y);
    this._position = position;
  }, this);
}

Ember.ListItemViewMixin = Ember.Mixin.create({
  init: function(){
    this._super();
    this.one('didInsertElement', positionElement);
  },
  classNames: ['ember-list-item-view'],
  _position: null,
  updatePosition: function(position) {
    this.position = position;
    this._positionElement();
  },
  _positionElement: positionElement
});

})();



(function() {
var get = Ember.get, set = Ember.set;

var backportedInnerString = function(buffer) {
  var content = [], childBuffers = buffer.childBuffers;

  Ember.ArrayPolyfills.forEach.call(childBuffers, function(buffer) {
    var stringy = typeof buffer === 'string';
    if (stringy) {
      content.push(buffer);
    } else {
      buffer.array(content);
    }
  });

  return content.join('');
};

function willInsertElementIfNeeded(view) {
  if (view.willInsertElement) {
    view.willInsertElement();
  }
}

function didInsertElementIfNeeded(view) {
  if (view.didInsertElement) {
    view.didInsertElement();
  }
}

function rerender() {
  var element, buffer, context, hasChildViews;
  element = get(this, 'element');

  if (!element) { return; }

  context = get(this, 'context');

  // releases action helpers in contents
  // this means though that the ListItemView itself can't use classBindings or attributeBindings
  // need support for rerender contents in ember
  this.triggerRecursively('willClearRender');

  if (this.lengthAfterRender > this.lengthBeforeRender) {
    this.clearRenderedChildren();
    this._childViews.length = this.lengthBeforeRender; // triage bug in ember
  }

  if (context) {
    buffer = Ember.RenderBuffer();
    buffer = this.renderToBuffer(buffer);

    // check again for childViews, since rendering may have added some
    hasChildViews = this._childViews.length > 0;

    if (hasChildViews) {
      this.invokeRecursively(willInsertElementIfNeeded, false);
    }

    element.innerHTML = buffer.innerString ? buffer.innerString() : backportedInnerString(buffer);

    set(this, 'element', element);

    this.transitionTo('inDOM');

    if (hasChildViews) {
      this.invokeRecursively(didInsertElementIfNeeded, false);
    }
  } else {
    element.innerHTML = ''; // when there is no context, this view should be completely empty
  }
}

/**
  The `Ember.ListItemView` view class renders a
  [div](https://developer.mozilla.org/en/HTML/Element/div) HTML element
  with `ember-list-item-view` class. It allows you to specify a custom item
  handlebars template for `Ember.ListView`.

  Example:

  ```handlebars
  <script type="text/x-handlebars" data-template-name="row_item">
    {{name}}
  </script>
  ```

  ```javascript
  App.ListView = Ember.ListView.extend({
    height: 500,
    rowHeight: 20,
    itemViewClass: Ember.ListItemView.extend({templateName: "row_item"})
  });
  ```

  @extends Ember.View
  @class ListItemView
  @namespace Ember
*/
Ember.ListItemView = Ember.View.extend(Ember.ListItemViewMixin, {
  updateContext: function(newContext){
    var context = get(this, 'context');
    Ember.instrument('view.updateContext.render', this, function() {
      if (context !== newContext) {
        set(this, 'context', newContext);
        if (newContext && newContext.isController) {
          set(this, 'controller', newContext);
        }
      }
    }, this);
  },
  rerender: function () { Ember.run.scheduleOnce('render', this, rerender); },
  _contextDidChange: Ember.observer(rerender, 'context', 'controller')
});

})();



(function() {
var get = Ember.get, set = Ember.set;

Ember.ReusableListItemView = Ember.View.extend(Ember.ListItemViewMixin, {
  init: function(){
    this._super();
    var context = Ember.ObjectProxy.create();
    this.set('context', context);
    this._proxyContext = context;
  },
  isVisible: Ember.computed('context.content', function(){
    return !!this.get('context.content');
  }),
  updateContext: function(newContext){
    var context = get(this._proxyContext, 'content'), state;

    // Support old and new Ember versions
    state = this._state || this.state;

    if (context !== newContext) {
      if (state === 'inDOM') {
        this.prepareForReuse(newContext);
      }

      set(this._proxyContext, 'content', newContext);

      if (newContext && newContext.isController) {
        set(this, 'controller', newContext);
      }
    }
  },
  prepareForReuse: Ember.K
});

})();



(function() {
var el = document.createElement('div'), style = el.style;

var propPrefixes = ['Webkit', 'Moz', 'O', 'ms'];

function testProp(prop) {
  if (prop in style) return prop;
  var uppercaseProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i=0; i<propPrefixes.length; i++) {
    var prefixedProp = propPrefixes[i] + uppercaseProp;
    if (prefixedProp in style) {
      return prefixedProp;
    }
  }
  return null;
}

var transformProp = testProp('transform');
var perspectiveProp = testProp('perspective');

var supports2D = transformProp !== null;
var supports3D = perspectiveProp !== null;

Ember.ListViewHelper = {
  transformProp: transformProp,
  applyTransform: (function(){
    if (supports2D) {
      return function(element, x, y){
        element.style[transformProp] = 'translate(' + x + 'px, ' + y + 'px)';
      };
    } else {
      return function(element, x, y){
        element.style.top  = y + 'px';
        element.style.left = x + 'px';
      };
    }
  })(),
  apply3DTransform: (function(){
    if (supports3D) {
      return function(element, x, y){
        element.style[transformProp] = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
      };
    } else if (supports2D) {
      return function(element, x, y){
        element.style[transformProp] = 'translate(' + x + 'px, ' + y + 'px)';
      };
    } else {
      return function(element, x, y){
        element.style.top  = y + 'px';
        element.style.left = x + 'px';
      };
    }
  })()
};

})();



(function() {
var get = Ember.get, set = Ember.set,
min = Math.min, max = Math.max, floor = Math.floor,
ceil = Math.ceil,
forEach = Ember.ArrayPolyfills.forEach;

function addContentArrayObserver() {
  var content = get(this, 'content');
  if (content) {
    content.addArrayObserver(this);
  }
}

function removeAndDestroy(object){
  this.removeObject(object);
  object.destroy();
}

function syncChildViews(){
  Ember.run.once(this, '_syncChildViews');
}

function sortByContentIndex (viewOne, viewTwo){
  return get(viewOne, 'contentIndex') - get(viewTwo, 'contentIndex');
}

function notifyMutationListeners() {
  if (Ember.View.notifyMutationListeners) {
    Ember.run.once(Ember.View, 'notifyMutationListeners');
  }
}

function removeEmptyView() {
  var emptyView = get(this, 'emptyView');
  if (emptyView && emptyView instanceof Ember.View) {
    emptyView.removeFromParent();
  }
}

function addEmptyView() {
  var emptyView = get(this, 'emptyView');

  if (!emptyView) { return; }

  if ('string' === typeof emptyView) {
    emptyView = get(emptyView) || emptyView;
  }

  emptyView = this.createChildView(emptyView);
  set(this, 'emptyView', emptyView);

  if (Ember.CoreView.detect(emptyView)) {
    this._createdEmptyView = emptyView;
  }

  this.unshiftObject(emptyView);
}

var domManager = Ember.create(Ember.ContainerView.proto().domManager);

domManager.prepend = function(view, html) {
  view.$('.ember-list-container').prepend(html);
  notifyMutationListeners();
};



function enableProfilingOutput() {
  function before(name, time, payload) {
    console.time(name);
  }

  function after (name, time, payload) {
    console.timeEnd(name);
  }

  if (Ember.ENABLE_PROFILING) {
    Ember.subscribe('view._scrollContentTo', {
      before: before,
      after: after
    });
    Ember.subscribe('view.updateContext', {
      before: before,
      after: after
    });
  }
}

/**
  @class Ember.ListViewMixin
  @namespace Ember
*/
Ember.ListViewMixin = Ember.Mixin.create({
  itemViewClass: Ember.ReusableListItemView,
  emptyViewClass: Ember.View,
  classNames: ['ember-list-view'],
  attributeBindings: ['style'],
  domManager: domManager,
  scrollTop: 0,
  bottomPadding: 0,
  _lastEndingIndex: 0,
  paddingCount: 1,

  /**
    @private

    Setup a mixin.
    - adding observer to content array
    - creating child views based on height and length of the content array

    @method init
  */
  init: function() {
    this._super();
    this.on('didInsertElement', this._syncListContainerWidth);
    this.columnCountDidChange();
    this._syncChildViews();
    this._addContentArrayObserver();
  },

  _addContentArrayObserver: Ember.beforeObserver(function() {
    addContentArrayObserver.call(this);
  }, 'content'),

  /**
    Called on your view when it should push strings of HTML into a
    `Ember.RenderBuffer`.

    Adds a [div](https://developer.mozilla.org/en-US/docs/HTML/Element/div)
    with a required `ember-list-container` class.

    @method render
    @param {Ember.RenderBuffer} buffer The render buffer
  */
  render: function(buffer) {
    buffer.push('<div class="ember-list-container">');
    this._super(buffer);
    buffer.push('</div>');
  },

  willInsertElement: function() {
    if (!this.get("height") || !this.get("rowHeight")) {
      throw new Error("A ListView must be created with a height and a rowHeight.");
    }
    this._super();
  },

  /**
    @private

    Sets inline styles of the view:
    - height
    - width
    - position
    - overflow
    - -webkit-overflow
    - overflow-scrolling

    Called while attributes binding.

    @property {Ember.ComputedProperty} style
  */
  style: Ember.computed('height', 'width', function() {
    var height, width, style, css;

    height = get(this, 'height');
    width = get(this, 'width');
    css = get(this, 'css');

    style = '';

    if (height) { style += 'height:' + height + 'px;'; }
    if (width)  { style += 'width:'  + width  + 'px;'; }

    for ( var rule in css ){
      if (css.hasOwnProperty(rule)) {
        style += rule + ':' + css[rule] + ';';
      }
    }

    return style;
  }),

  /**
    @private

    Performs visual scrolling. Is overridden in Ember.ListView.

    @method scrollTo
  */
  scrollTo: function(y) {
    throw new Error('must override to perform the visual scroll and effectively delegate to _scrollContentTo');
  },

  /**
    @private

    Internal method used to force scroll position

    @method scrollTo
  */
  _scrollTo: Ember.K,

  /**
    @private
    @method _scrollContentTo
  */
  _scrollContentTo: function(y) {
    var startingIndex, endingIndex,
        contentIndex, visibleEndingIndex, maxContentIndex,
        contentIndexEnd, contentLength, scrollTop, content;

    scrollTop = max(0, y);

    if (this.scrollTop === scrollTop) {
      return;
    }

    // allow a visual overscroll, but don't scroll the content. As we are doing needless
    // recycyling, and adding unexpected nodes to the DOM.
    var maxScrollTop = max(0, get(this, 'totalHeight') - get(this, 'height'));
    scrollTop = min(scrollTop, maxScrollTop);

    content = get(this, 'content');
    contentLength = get(content, 'length');
    startingIndex = this._startingIndex(contentLength);

    Ember.instrument('view._scrollContentTo', {
      scrollTop: scrollTop,
      content: content,
      startingIndex: startingIndex,
      endingIndex: min(max(contentLength - 1, 0), startingIndex + this._numChildViewsForViewport())
    }, function () {
      this.scrollTop = scrollTop;

      maxContentIndex = max(contentLength - 1, 0);

      startingIndex = this._startingIndex();
      visibleEndingIndex = startingIndex + this._numChildViewsForViewport();

      endingIndex = min(maxContentIndex, visibleEndingIndex);

      if (startingIndex === this._lastStartingIndex &&
          endingIndex === this._lastEndingIndex) {

        this.trigger('scrollYChanged', y);
        return;
      } else {

        Ember.run(this, function(){
          this._reuseChildren();

          this._lastStartingIndex = startingIndex;
          this._lastEndingIndex = endingIndex;
          this.trigger('scrollYChanged', y);
        });
      }
    }, this);

  },

  /**
    @private

    Computes the height for a `Ember.ListView` scrollable container div.
    You must specify `rowHeight` parameter for the height to be computed properly.

    @property {Ember.ComputedProperty} totalHeight
  */
  totalHeight: Ember.computed('content.length', 'rowHeight', 'columnCount', 'bottomPadding', function() {
    var contentLength, rowHeight, columnCount, bottomPadding;

    contentLength = get(this, 'content.length');
    rowHeight = get(this, 'rowHeight');
    columnCount = get(this, 'columnCount');
    bottomPadding = get(this, 'bottomPadding');

    return ((ceil(contentLength / columnCount)) * rowHeight) + bottomPadding;
  }),

  /**
    @private
    @method _prepareChildForReuse
  */
  _prepareChildForReuse: function(childView) {
    childView.prepareForReuse();
  },

  /**
    @private
    @method _reuseChildForContentIndex
  */
  _reuseChildForContentIndex: function(childView, contentIndex) {
    var content, context, newContext, childsCurrentContentIndex, position, enableProfiling;

    content = get(this, 'content');
    enableProfiling = get(this, 'enableProfiling');
    position = this.positionForIndex(contentIndex);
    childView.updatePosition(position);

    set(childView, 'contentIndex', contentIndex);

    if (enableProfiling) {
      Ember.instrument('view._reuseChildForContentIndex', position, function(){}, this);
    }

    newContext = content.objectAt(contentIndex);
    childView.updateContext(newContext);
  },

  /**
    @private
    @method positionForIndex
  */
  positionForIndex: function(index){
    var elementWidth, width, columnCount, rowHeight, y, x;

    elementWidth = get(this, 'elementWidth') || 1;
    width = get(this, 'width') || 1;
    columnCount = get(this, 'columnCount');
    rowHeight = get(this, 'rowHeight');

    y = (rowHeight * floor(index/columnCount));
    x = (index % columnCount) * elementWidth;

    return {
      y: y,
      x: x
    };
  },

  /**
    @private
    @method _childViewCount
  */
  _childViewCount: function() {
    var contentLength, childViewCountForHeight;

    contentLength = get(this, 'content.length');
    childViewCountForHeight = this._numChildViewsForViewport();

    return min(contentLength, childViewCountForHeight);
  },

  /**
    @private

    Returns a number of columns in the Ember.ListView (for grid layout).

    If you want to have a multi column layout, you need to specify both
    `width` and `elementWidth`.

    If no `elementWidth` is specified, it returns `1`. Otherwise, it will
    try to fit as many columns as possible for a given `width`.

    @property {Ember.ComputedProperty} columnCount
  */
  columnCount: Ember.computed('width', 'elementWidth', function() {
    var elementWidth, width, count;

    elementWidth = get(this, 'elementWidth');
    width = get(this, 'width');

    if (elementWidth && width > elementWidth) {
      count = floor(width / elementWidth);
    } else {
      count = 1;
    }

    return count;
  }),

  /**
    @private

    Fires every time column count is changed.

    @event columnCountDidChange
  */
  columnCountDidChange: Ember.observer(function(){
    var ratio, currentScrollTop, proposedScrollTop, maxScrollTop,
        scrollTop, lastColumnCount, newColumnCount, element;

    lastColumnCount = this._lastColumnCount;

    currentScrollTop = this.scrollTop;
    newColumnCount = get(this, 'columnCount');
    maxScrollTop = get(this, 'maxScrollTop');
    element = get(this, 'element');

    this._lastColumnCount = newColumnCount;

    if (lastColumnCount) {
      ratio = (lastColumnCount / newColumnCount);
      proposedScrollTop = currentScrollTop * ratio;
      scrollTop = min(maxScrollTop, proposedScrollTop);

      this._scrollTo(scrollTop);
      this.scrollTop = scrollTop;
    }

    if (arguments.length > 0) {
      // invoked by observer
      Ember.run.schedule('afterRender', this, this._syncListContainerWidth);
    }
  }, 'columnCount'),

  /**
    @private

    Computes max possible scrollTop value given the visible viewport
    and scrollable container div height.

    @property {Ember.ComputedProperty} maxScrollTop
  */
  maxScrollTop: Ember.computed('height', 'totalHeight', function(){
    var totalHeight, viewportHeight;

    totalHeight = get(this, 'totalHeight');
    viewportHeight = get(this, 'height');

    return max(0, totalHeight - viewportHeight);
  }),

  /**
    @private

    Determines whether the emptyView is the current childView.

    @method _isChildEmptyView
  */
  _isChildEmptyView: function() {
    var emptyView = get(this, 'emptyView');

    return emptyView && emptyView instanceof Ember.View &&
           this._childViews.length === 1 && this._childViews.indexOf(emptyView) === 0;
  },

  /**
    @private

    Computes the number of views that would fit in the viewport area.
    You must specify `height` and `rowHeight` parameters for the number of
    views to be computed properly.

    @method _numChildViewsForViewport
  */
  _numChildViewsForViewport: function() {
    var height, rowHeight, paddingCount, columnCount;

    height = get(this, 'height');
    rowHeight = get(this, 'rowHeight');
    paddingCount = get(this, 'paddingCount');
    columnCount = get(this, 'columnCount');

    return (ceil(height / rowHeight) * columnCount) + (paddingCount * columnCount);
  },

  /**
    @private

    Computes the starting index of the item views array.
    Takes `scrollTop` property of the element into account.

    Is used in `_syncChildViews`.

    @method _startingIndex
  */
  _startingIndex: function(_contentLength) {
    var scrollTop, rowHeight, columnCount, calculatedStartingIndex,
        contentLength, largestStartingIndex;

    if (_contentLength === undefined) {
      contentLength = get(this, 'content.length');
    } else {
      contentLength = _contentLength;
    }

    scrollTop = this.scrollTop;
    rowHeight = get(this, 'rowHeight');
    columnCount = get(this, 'columnCount');

    calculatedStartingIndex = floor(scrollTop / rowHeight) * columnCount;

    largestStartingIndex = max(contentLength - 1, 0);

    return min(calculatedStartingIndex, largestStartingIndex);
  },

  /**
    @private
    @event contentWillChange
  */
  contentWillChange: Ember.beforeObserver(function() {
    var content;

    content = get(this, 'content');

    if (content) {
      content.removeArrayObserver(this);
    }
  }, 'content'),

  /**),
    @private
    @event contentDidChange
  */
  contentDidChange: Ember.observer(function() {
    addContentArrayObserver.call(this);
    syncChildViews.call(this);
  }, 'content'),

  /**
    @private
    @property {Function} needsSyncChildViews
  */
  needsSyncChildViews: Ember.observer(syncChildViews, 'height', 'width', 'columnCount'),

  /**
    @private

    Returns a new item view. Takes `contentIndex` to set the context
    of the returned view properly.

    @param {Number} contentIndex item index in the content array
    @method _addItemView
  */
  _addItemView: function(contentIndex){
    var itemViewClass, childView;

    itemViewClass = get(this, 'itemViewClass');
    childView = this.createChildView(itemViewClass);

    this.pushObject(childView);
   },

  /**
    @private

    Intelligently manages the number of childviews.

    @method _syncChildViews
   **/
  _syncChildViews: function(){
    var childViews, childViewCount,
        numberOfChildViews, numberOfChildViewsNeeded,
        contentIndex, startingIndex, endingIndex,
        contentLength, emptyView, count, delta;

    if (get(this, 'isDestroyed') || get(this, 'isDestroying')) {
      return;
    }

    contentLength = get(this, 'content.length');
    emptyView = get(this, 'emptyView');

    childViewCount = this._childViewCount();
    childViews = this.positionOrderedChildViews();

    if (this._isChildEmptyView()) {
      removeEmptyView.call(this);
    }

    startingIndex = this._startingIndex();
    endingIndex = startingIndex + childViewCount;

    numberOfChildViewsNeeded = childViewCount;
    numberOfChildViews = childViews.length;

    delta = numberOfChildViewsNeeded - numberOfChildViews;

    if (delta === 0) {
      // no change
    } else if (delta > 0) {
      // more views are needed
      contentIndex = this._lastEndingIndex;

      for (count = 0; count < delta; count++, contentIndex++) {
        this._addItemView(contentIndex);
      }
    } else {
      // less views are needed
      forEach.call(
        childViews.splice(numberOfChildViewsNeeded, numberOfChildViews),
        removeAndDestroy,
        this
      );
    }

    this._reuseChildren();

    this._lastStartingIndex = startingIndex;
    this._lastEndingIndex   = this._lastEndingIndex + delta;

    if (contentLength === 0 || contentLength === undefined) {
      addEmptyView.call(this);
    }
  },

  /**
    @private

    Applies an inline width style to the list container.

    @method _syncListContainerWidth
   **/
  _syncListContainerWidth: function(){
    var elementWidth, columnCount, containerWidth, element;

    elementWidth = get(this, 'elementWidth');
    columnCount = get(this, 'columnCount');
    containerWidth = elementWidth * columnCount;
    element = this.$('.ember-list-container');

    if (containerWidth && element) {
      element.css('width', containerWidth);
    }
  },

  /**
    @private
    @method _reuseChildren
  */
  _reuseChildren: function(){
    var contentLength, childViews, childViewsLength,
        startingIndex, endingIndex, childView, attrs,
        contentIndex, visibleEndingIndex, maxContentIndex,
        contentIndexEnd, scrollTop;

    scrollTop = this.scrollTop;
    contentLength = get(this, 'content.length');
    maxContentIndex = max(contentLength - 1, 0);
    childViews = this.getReusableChildViews();
    childViewsLength =  childViews.length;

    startingIndex = this._startingIndex();
    visibleEndingIndex = startingIndex + this._numChildViewsForViewport();

    endingIndex = min(maxContentIndex, visibleEndingIndex);

    contentIndexEnd = min(visibleEndingIndex, startingIndex + childViewsLength);

    for (contentIndex = startingIndex; contentIndex < contentIndexEnd; contentIndex++) {
      childView = childViews[contentIndex % childViewsLength];
      this._reuseChildForContentIndex(childView, contentIndex);
    }
  },

  /**
    @private
    @method getReusableChildViews
  */
  getReusableChildViews: function() {
    return this._childViews;
  },

  /**
    @private
    @method positionOrderedChildViews
  */
  positionOrderedChildViews: function() {
    return this.getReusableChildViews().sort(sortByContentIndex);
  },

  arrayWillChange: Ember.K,

  /**
    @private
    @event arrayDidChange
  */
  // TODO: refactor
  arrayDidChange: function(content, start, removedCount, addedCount) {
    var index, contentIndex, state;

    removeEmptyView.call(this);

    // Support old and new Ember versions
    state = this._state || this.state;

    if (state === 'inDOM') {
      // ignore if all changes are out of the visible change
      if( start >= this._lastStartingIndex || start < this._lastEndingIndex) {
        index = 0;
        // ignore all changes not in the visible range
        // this can re-position many, rather then causing a cascade of re-renders
        forEach.call(
          this.positionOrderedChildViews(),
          function(childView) {
            contentIndex = this._lastStartingIndex + index;
            this._reuseChildForContentIndex(childView, contentIndex);
            index++;
          },
          this
        );
      }

      syncChildViews.call(this);
    }
  },

  destroy: function () {
    if (!this._super()) { return; }

    if (this._createdEmptyView) {
      this._createdEmptyView.destroy();
    }

    return this;
  }
});

})();



(function() {
var get = Ember.get, set = Ember.set;

/**
  The `Ember.ListView` view class renders a
  [div](https://developer.mozilla.org/en/HTML/Element/div) HTML element,
  with `ember-list-view` class.

  The context of each item element within the `Ember.ListView` are populated
  from the objects in the `Element.ListView`'s `content` property.

  ### `content` as an Array of Objects

  The simplest version of an `Ember.ListView` takes an array of object as its
  `content` property. The object will be used as the `context` each item element
  inside the rendered `div`.

  Example:

  ```javascript
  App.ContributorsRoute = Ember.Route.extend({
    model: function() {
      return [{ name: 'Stefan Penner' }, { name: 'Alex Navasardyan' }, { name: 'Ray Cohen'}];
    }
  });
  ```

  ```handlebars
  {{#ember-list items=contributors height=500 rowHeight=50}}
    {{name}}
  {{/ember-list}}
  ```

  Would result in the following HTML:

  ```html
   <div id="ember181" class="ember-view ember-list-view" style="height:500px;width:500px;position:relative;overflow:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;">
    <div class="ember-list-container">
      <div id="ember186" class="ember-view ember-list-item-view" style="-webkit-transform: translate3d(0px, 0px, 0);">
        <script id="metamorph-0-start" type="text/x-placeholder"></script>Stefan Penner<script id="metamorph-0-end" type="text/x-placeholder"></script>
      </div>
      <div id="ember187" class="ember-view ember-list-item-view" style="-webkit-transform: translate3d(0px, 50px, 0);">
        <script id="metamorph-1-start" type="text/x-placeholder"></script>Alex Navasardyan<script id="metamorph-1-end" type="text/x-placeholder"></script>
      </div>
      <div id="ember188" class="ember-view ember-list-item-view" style="-webkit-transform: translate3d(0px, 100px, 0);">
        <script id="metamorph-2-start" type="text/x-placeholder"></script>Rey Cohen<script id="metamorph-2-end" type="text/x-placeholder"></script>
      </div>
      <div id="ember189" class="ember-view ember-list-scrolling-view" style="height: 150px"></div>
    </div>
  </div>
  ```

  By default `Ember.ListView` provides support for `height`,
  `rowHeight`, `width`, `elementWidth`, `scrollTop` parameters.

  Note, that `height` and `rowHeight` are required parameters.

  ```handlebars
  {{#ember-list items=this height=500 rowHeight=50}}
    {{name}}
  {{/ember-list}}
  ```

  If you would like to have multiple columns in your view layout, you can
  set `width` and `elementWidth` parameters respectively.

  ```handlebars
  {{#ember-list items=this height=500 rowHeight=50 width=500 elementWidth=80}}
    {{name}}
  {{/ember-list}}
  ```

  ### extending `Ember.ListView`

  Example:

  ```handlebars
  {{view App.ListView contentBinding="content"}}

  <script type="text/x-handlebars" data-template-name="row_item">
    {{name}}
  </script>
  ```

  ```javascript
  App.ListView = Ember.ListView.extend({
    height: 500,
    width: 500,
    elementWidth: 80,
    rowHeight: 20,
    itemViewClass: Ember.ListItemView.extend({templateName: "row_item"})
  });
  ```

  @extends Ember.ContainerView
  @class ListView
  @namespace Ember
*/
Ember.ListView = Ember.ContainerView.extend(Ember.ListViewMixin, {
  css: {
    position: 'relative',
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    'overflow-scrolling': 'touch'
  },

  applyTransform: Ember.ListViewHelper.applyTransform,

  _scrollTo: function(scrollTop) {
    var element = get(this, 'element');

    if (element) { element.scrollTop = scrollTop; }
  },

  didInsertElement: function() {
    var that = this,
        element = get(this, 'element');

    this._updateScrollableHeight();

    this._scroll = function(e) { that.scroll(e); };

    Ember.$(element).on('scroll', this._scroll);
  },

  willDestroyElement: function() {
    var element;

    element = get(this, 'element');

    Ember.$(element).off('scroll', this._scroll);
  },

  scroll: function(e) {
    this.scrollTo(e.target.scrollTop);
  },

  scrollTo: function(y){
    var element = get(this, 'element');
    this._scrollTo(y);
    this._scrollContentTo(y);
  },

  totalHeightDidChange: Ember.observer(function () {
    Ember.run.scheduleOnce('afterRender', this, this._updateScrollableHeight);
  }, 'totalHeight'),

  _updateScrollableHeight: function () {
    var height, state;

    // Support old and new Ember versions
    state = this._state || this.state;

    if (state === 'inDOM') {
      // if the list is currently displaying the emptyView, remove the height
      if (this._isChildEmptyView()) {
          height = '';
      } else {
          height = get(this, 'totalHeight');
      }

      this.$('.ember-list-container').css({
        height: height
      });
    }
  }
});

})();



(function() {
var fieldRegex = /input|textarea|select/i,
  hasTouch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch,
  handleStart, handleMove, handleEnd, handleCancel,
  startEvent, moveEvent, endEvent, cancelEvent;
if (hasTouch) {
  startEvent = 'touchstart';
  handleStart = function (e) {
    var touch = e.touches[0],
      target = touch && touch.target;
    // avoid e.preventDefault() on fields
    if (target && fieldRegex.test(target.tagName)) {
      return;
    }
    bindWindow(this.scrollerEventHandlers);
    this.willBeginScroll(e.touches, e.timeStamp);
    e.preventDefault();
  };
  moveEvent = 'touchmove';
  handleMove = function (e) {
    this.continueScroll(e.touches, e.timeStamp);
  };
  endEvent = 'touchend';
  handleEnd = function (e) {
    // if we didn't end up scrolling we need to
    // synthesize click since we did e.preventDefault()
    // on touchstart
    if (!this._isScrolling) {
      synthesizeClick(e);
    }
    unbindWindow(this.scrollerEventHandlers);
    this.endScroll(e.timeStamp);
  };
  cancelEvent = 'touchcancel';
  handleCancel = function (e) {
    unbindWindow(this.scrollerEventHandlers);
    this.endScroll(e.timeStamp);
  };
} else {
  startEvent = 'mousedown';
  handleStart = function (e) {
    if (e.which !== 1) return;
    var target = e.target;
    // avoid e.preventDefault() on fields
    if (target && fieldRegex.test(target.tagName)) {
      return;
    }
    bindWindow(this.scrollerEventHandlers);
    this.willBeginScroll([e], e.timeStamp);
    e.preventDefault();
  };
  moveEvent = 'mousemove';
  handleMove = function (e) {
    this.continueScroll([e], e.timeStamp);
  };
  endEvent = 'mouseup';
  handleEnd = function (e) {
    unbindWindow(this.scrollerEventHandlers);
    this.endScroll(e.timeStamp);
  };
  cancelEvent = 'mouseout';
  handleCancel = function (e) {
    if (e.relatedTarget) return;
    unbindWindow(this.scrollerEventHandlers);
    this.endScroll(e.timeStamp);
  };
}

function handleWheel(e) {
  this.mouseWheel(e);
  e.preventDefault();
}

function bindElement(el, handlers) {
  el.addEventListener(startEvent, handlers.start, false);
  el.addEventListener('mousewheel', handlers.wheel, false);
}

function unbindElement(el, handlers) {
  el.removeEventListener(startEvent, handlers.start, false);
  el.removeEventListener('mousewheel', handlers.wheel, false);
}

function bindWindow(handlers) {
  window.addEventListener(moveEvent, handlers.move, true);
  window.addEventListener(endEvent, handlers.end, true);
  window.addEventListener(cancelEvent, handlers.cancel, true);
}

function unbindWindow(handlers) {
  window.removeEventListener(moveEvent, handlers.move, true);
  window.removeEventListener(endEvent, handlers.end, true);
  window.removeEventListener(cancelEvent, handlers.cancel, true);
}

Ember.VirtualListScrollerEvents = Ember.Mixin.create({
  init: function() {
    this.on('didInsertElement', this, 'bindScrollerEvents');
    this.on('willDestroyElement', this, 'unbindScrollerEvents');
    this.scrollerEventHandlers = {
      start: bind(this, handleStart),
      move: bind(this, handleMove),
      end: bind(this, handleEnd),
      cancel: bind(this, handleCancel),
      wheel: bind(this, handleWheel)
    };
    return this._super();
  },
  scrollElement: Ember.computed.oneWay('element').readOnly(),
  bindScrollerEvents: function() {
    var el = this.get('scrollElement'),
      handlers = this.scrollerEventHandlers;
    bindElement(el, handlers);
  },
  unbindScrollerEvents: function() {
    var el = this.get('scrollElement'),
      handlers = this.scrollerEventHandlers;
    unbindElement(el, handlers);
    unbindWindow(handlers);
  }
});

function bind(view, handler) {
  return function (evt) {
    handler.call(view, evt);
  };
}

function synthesizeClick(e) {
  var point = e.changedTouches[0],
    target = point.target,
    ev;
  if (target && fieldRegex.test(target.tagName)) {
    ev = document.createEvent('MouseEvents');
    ev.initMouseEvent('click', true, true, e.view, 1, point.screenX, point.screenY, point.clientX, point.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
    return target.dispatchEvent(ev);
  }
}

})();



(function() {
/*global Scroller*/
var max = Math.max, get = Ember.get, set = Ember.set;

function updateScrollerDimensions(target) {
  var width, height, totalHeight;

  target = target || this;

  width = get(target, 'width');
  height = get(target, 'height');
  totalHeight = get(target, 'totalHeight');

  target.scroller.setDimensions(width, height, width, totalHeight);
  target.trigger('scrollerDimensionsDidChange');
}

/**
  VirtualListView

  @class VirtualListView
  @namespace Ember
*/
Ember.VirtualListView = Ember.ContainerView.extend(Ember.ListViewMixin, Ember.VirtualListScrollerEvents, {
  _isScrolling: false,
  _mouseWheel: null,
  css: {
    position: 'relative',
    overflow: 'hidden'
  },

  init: function(){
    this._super();
    this.setupScroller();
    this.setupPullToRefresh();
  },
  _scrollerTop: 0,
  applyTransform: Ember.ListViewHelper.apply3DTransform,

  setupScroller: function(){
    var view, y;

    view = this;

    view.scroller = new Scroller(function(left, top, zoom) {
      // Support old and new Ember versions
      var state = view._state || view.state;

      if (state !== 'inDOM') { return; }

      if (view.listContainerElement) {
        view._scrollerTop = top;
        view._scrollContentTo(top);
        view.applyTransform(view.listContainerElement, 0, -top);
      }
    }, {
      scrollingX: false,
      scrollingComplete: function(){
        view.trigger('scrollingDidComplete');
      }
    });

    view.trigger('didInitializeScroller');
    updateScrollerDimensions(view);
  },
  setupPullToRefresh: function() {
    if (!this.pullToRefreshViewClass) { return; }
    this._insertPullToRefreshView();
    this._activateScrollerPullToRefresh();
  },
  _insertPullToRefreshView: function(){
    this.pullToRefreshView = this.createChildView(this.pullToRefreshViewClass);
    this.insertAt(0, this.pullToRefreshView);
    var view = this;
    this.pullToRefreshView.on('didInsertElement', function(){
      Ember.run.schedule('afterRender', this, function(){
        view.applyTransform(this.get('element'), 0, -1 * view.pullToRefreshViewHeight);
      });
    });
  },
  _activateScrollerPullToRefresh: function(){
    var view = this;
    function activatePullToRefresh(){
      view.pullToRefreshView.set('active', true);
      view.trigger('activatePullToRefresh');
    }
    function deactivatePullToRefresh() {
      view.pullToRefreshView.set('active', false);
      view.trigger('deactivatePullToRefresh');
    }
    function startPullToRefresh() {
      Ember.run(function(){
        view.pullToRefreshView.set('refreshing', true);

        function finishRefresh(){
          if (view && !view.get('isDestroyed') && !view.get('isDestroying')) {
            view.scroller.finishPullToRefresh();
            view.pullToRefreshView.set('refreshing', false);
          }
        }
        view.startRefresh(finishRefresh);
      });
    }
    this.scroller.activatePullToRefresh(
      this.pullToRefreshViewHeight,
      activatePullToRefresh,
      deactivatePullToRefresh,
      startPullToRefresh
    );
  },

  getReusableChildViews: function(){
    var firstView = this._childViews[0];
    if (firstView && firstView === this.pullToRefreshView) {
      return this._childViews.slice(1);
    } else {
      return this._childViews;
    }
  },

  scrollerDimensionsNeedToChange: Ember.observer(function() {
    Ember.run.once(this, updateScrollerDimensions);
  }, 'width', 'height', 'totalHeight'),

  didInsertElement: function() {
    this.listContainerElement = this.$('> .ember-list-container')[0];
  },

  willBeginScroll: function(touches, timeStamp) {
    this._isScrolling = false;
    this.trigger('scrollingDidStart');

    this.scroller.doTouchStart(touches, timeStamp);
  },

  continueScroll: function(touches, timeStamp) {
    var startingScrollTop, endingScrollTop, event;

    if (this._isScrolling) {
      this.scroller.doTouchMove(touches, timeStamp);
    } else {
      startingScrollTop = this._scrollerTop;

      this.scroller.doTouchMove(touches, timeStamp);

      endingScrollTop = this._scrollerTop;

      if (startingScrollTop !== endingScrollTop) {
        event = Ember.$.Event("scrollerstart");
        Ember.$(touches[0].target).trigger(event);

        this._isScrolling = true;
      }
    }
  },

  endScroll: function(timeStamp) {
    this.scroller.doTouchEnd(timeStamp);
  },

  // api
  scrollTo: function(y, animate) {
    if (animate === undefined) {
      animate = true;
    }

    this.scroller.scrollTo(0, y, animate, 1);
  },

  // events
  mouseWheel: function(e){
    var inverted, delta, candidatePosition;

    inverted = e.webkitDirectionInvertedFromDevice;
    delta = e.wheelDeltaY * (inverted ? 0.8 : -0.8);
    candidatePosition = this.scroller.__scrollTop + delta;

    if ((candidatePosition >= 0) && (candidatePosition <= this.scroller.__maxScrollTop)) {
      this.scroller.scrollBy(0, delta, true);
      e.stopPropagation();
    }

    return false;
  }
});

})();



(function() {
Ember.Handlebars.registerHelper('ember-list', function emberList(options) {
  var hash = options.hash;
  var types = options.hashTypes;

  hash.content = hash.items;
  delete hash.items;

  types.content = types.items;
  delete types.items;

  if (!hash.content) {
    hash.content = "this";
    types.content = "ID";
  }

  for (var prop in hash) {
    if (/-/.test(prop)) {
      var camelized = Ember.String.camelize(prop);
      hash[camelized] = hash[prop];
      types[camelized] = types[prop];
      delete hash[prop];
      delete types[prop];
    }
  }

  return Ember.Handlebars.helpers.collection.call(this, 'Ember.ListView', options);
});


})();



(function() {

})();


(function(global) {

Ember.libraries.register('Ember Simple Auth', '0.6.6');

var define, requireModule;

(function() {
  var registry = {}, seen = {};

  define = function(name, deps, callback) {
    registry[name] = { deps: deps, callback: callback };
  };

  requireModule = function(name) {
    if (seen.hasOwnProperty(name)) { return seen[name]; }
    seen[name] = {};

    if (!registry[name]) {
      throw new Error("Could not find module " + name);
    }

    var mod = registry[name],
        deps = mod.deps,
        callback = mod.callback,
        reified = [],
        exports;

    for (var i=0, l=deps.length; i<l; i++) {
      if (deps[i] === 'exports') {
        reified.push(exports = {});
      } else {
        reified.push(requireModule(resolve(deps[i])));
      }
    }

    var value = callback.apply(this, reified);
    return seen[name] = exports || value;

    function resolve(child) {
      if (child.charAt(0) !== '.') { return child; }
      var parts = child.split("/");
      var parentBase = name.split("/").slice(0, -1);

      for (var i=0, l=parts.length; i<l; i++) {
        var part = parts[i];

        if (part === '..') { parentBase.pop(); }
        else if (part === '.') { continue; }
        else { parentBase.push(part); }
      }

      return parentBase.join("/");
    }
  };

  requireModule.registry = registry;
})();

define("simple-auth/authenticators/base", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /**
      The base for all authenticators. __This serves as a starting point for
      implementing custom authenticators and must not be used directly.__

      The authenticator authenticates the session. The actual mechanism used to do
      this might e.g. be posting a set of credentials to a server and in exchange
      retrieving an access token, initiating authentication against an external
      provider like Facebook etc. and depends on the specific authenticator. Any
      data that the authenticator receives upon successful authentication and
      resolves with from the
      [`Authenticators.Base#authenticate`](#SimpleAuth-Authenticators-Base-authenticate)
      method is stored in the session and can then be used by the authorizer (see
      [`Authorizers.Base`](#SimpleAuth-Authorizers-Base)).

      The authenticator also decides whether a set of data that was restored from
      the session store (see
      [`Stores.Base`](#SimpleAuth-Stores-Base)) is sufficient for the session to be
      authenticated or not.

      __Custom authenticators have to be registered with Ember's dependency
      injection container__ so that the session can retrieve an instance, e.g.:

      ```javascript
      import Base from 'simple-auth/authenticators/base';

      var CustomAuthenticator = Base.extend({
        ...
      });

      Ember.Application.initializer({
        name: 'authentication',
        initialize: function(container, application) {
          container.register('authenticator:custom', CustomAuthenticator);
        }
      });
      ```

      ```javascript
      // app/controllers/login.js
      import AuthenticationControllerMixin from 'simple-auth/mixins/authentication-controller-mixin';

      export default Ember.Controller.extend(AuthenticationControllerMixin, {
        authenticator: 'authenticator:custom'
      });
      ```

      @class Base
      @namespace SimpleAuth.Authenticators
      @module simple-auth/authenticators/base
      @extends Ember.Object
      @uses Ember.Evented
    */
    __exports__["default"] = Ember.Object.extend(Ember.Evented, {
      /**
        __Triggered when the data that constitutes the session is updated by the
        authenticator__. This might happen e.g. because the authenticator refreshes
        it or an event from is triggered from an external authentication provider.
        The session automatically catches that event, passes the updated data back
        to the authenticator's
        [SimpleAuth.Authenticators.Base#restore](#SimpleAuth-Authenticators-Base-restore)
        method and handles the result of that invocation accordingly.

        @event sessionDataUpdated
        @param {Object} data The updated session data
      */
      /**
        __Triggered when the data that constitutes the session is invalidated by
        the authenticator__. This might happen e.g. because the date expires or an
        event is triggered from an external authentication provider. The session
        automatically catches that event and invalidates itself.

        @event sessionDataInvalidated
        @param {Object} data The updated session data
      */

      /**
        Restores the session from a set of properties. __This method is invoked by
        the session either after the application starts up and session data was
        restored from the store__ or when properties in the store have changed due
        to external events (e.g. in another tab) and the new set of properties
        needs to be re-checked for whether it still constitutes an authenticated
        session.

        __This method returns a promise. A resolving promise will result in the
        session being authenticated.__ Any properties the promise resolves with
        will be saved in and accessible via the session. In most cases the `data`
        argument will simply be forwarded through the promise. A rejecting promise
        indicates that authentication failed and the session will remain unchanged.

        `SimpleAuth.Authenticators.Base`'s implementation always returns a
        rejecting promise.

        @method restore
        @param {Object} data The data to restore the session from
        @return {Ember.RSVP.Promise} A promise that when it resolves results in the session being authenticated
      */
      restore: function(data) {
        return new Ember.RSVP.reject();
      },

      /**
        Authenticates the session with the specified `options`. These options vary
        depending on the actual authentication mechanism the authenticator
        implements (e.g. a set of credentials or a Facebook account id etc.). __The
        session will invoke this method when an action in the appliaction triggers
        authentication__ (see
        [SimpleAuth.AuthenticationControllerMixin.actions#authenticate](#SimpleAuth-AuthenticationControllerMixin-authenticate)).

        __This method returns a promise. A resolving promise will result in the
        session being authenticated.__ Any properties the promise resolves with
        will be saved in and accessible via the session. A rejecting promise
        indicates that authentication failed and the session will remain unchanged.

        `SimpleAuth.Authenticators.Base`'s implementation always returns a
        rejecting promise and thus never authenticates the session.

        @method authenticate
        @param {Object} options The options to authenticate the session with
        @return {Ember.RSVP.Promise} A promise that when it resolves results in the session being authenticated
      */
      authenticate: function(options) {
        return new Ember.RSVP.reject();
      },

      /**
        This callback is invoked when the session is invalidated. While the session
        will invalidate itself and clear all session properties, it might be
        necessary for some authenticators to perform additional tasks (e.g.
        invalidating an access token on the server), which should be done in this
        method.

        __This method returns a promise. A resolving promise will result in the
        session being invalidated.__ A rejecting promise will result in the session
        invalidation being intercepted and the session being left authenticated.

        `SimpleAuth.Authenticators.Base`'s implementation always returns a
        resolving promise and thus never intercepts session invalidation.

        @method invalidate
        @param {Object} data The data that the session currently holds
        @return {Ember.RSVP.Promise} A promise that when it resolves results in the session being invalidated
      */
      invalidate: function(data) {
        return new Ember.RSVP.resolve();
      }
    });
  });
define("simple-auth/authorizers/base", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /**
      The base for all authorizers. __This serves as a starting point for
      implementing custom authorizers and must not be used directly.__

      __The authorizer preprocesses all XHR requests__ (except ones to 3rd party
      origins, see
      [Configuration.crossOriginWhitelist](#SimpleAuth-Configuration-crossOriginWhitelist))
      and makes sure they have the required data attached that allows the server to
      identify the user making the request. This data might be an HTTP header,
      query string parameters in the URL, cookies etc. __The authorizer has to fit
      the authenticator__ (see
      [SimpleAuth.Authenticators.Base](#SimpleAuth-Authenticators-Base))
      as it relies on data that the authenticator acquires during authentication.

      @class Base
      @namespace SimpleAuth.Authorizers
      @module simple-auth/authorizers/base
      @extends Ember.Object
    */
    __exports__["default"] = Ember.Object.extend({
      /**
        The session the authorizer gets the data it needs to authorize requests
        from.

        @property session
        @readOnly
        @type SimpleAuth.Session
        @default the session instance
      */
      session: null,

      /**
        Authorizes an XHR request by adding some sort of secret information that
        allows the server to identify the user making the request (e.g. a token in
        the `Authorization` header or some other secret in the query string etc.).

        `SimpleAuth.Authorizers.Base`'s implementation does nothing.

        @method authorize
        @param {jqXHR} jqXHR The XHR request to authorize (see http://api.jquery.com/jQuery.ajax/#jqXHR)
        @param {Object} requestOptions The options as provided to the `$.ajax` method (see http://api.jquery.com/jQuery.ajaxPrefilter/)
      */
      authorize: function(jqXHR, requestOptions) {
      }
    });
  });
define("simple-auth/configuration", 
  ["./utils/get-global-config","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var getGlobalConfig = __dependency1__["default"];

    /**
      Ember Simple Auth's configuration object.

      To change any of these values, define a global environment object for Ember
      Simple Auth and define the values there:

      ```javascript
      window.ENV = window.ENV || {};
      window.ENV['simple-auth'] = {
        authenticationRoute: 'sign-in'
      };
      ```

      @class Configuration
      @namespace SimpleAuth
      @module simple-auth/configuration
    */
    __exports__["default"] = {
      /**
        The route to transition to for authentication.

        @property authenticationRoute
        @readOnly
        @static
        @type String
        @default 'login'
      */
      authenticationRoute: 'login',

      /**
        The route to transition to after successful authentication.

        @property routeAfterAuthentication
        @readOnly
        @static
        @type String
        @default 'index'
      */
      routeAfterAuthentication: 'index',

      /**
        The route to transition to if a route that implements
        [`UnauthenticatedRouteMixin`](#SimpleAuth-UnauthenticatedRouteMixin) is
        accessed when the session is authenticated.

        @property routeIfAlreadyAuthenticated
        @readOnly
        @static
        @type String
        @default 'index'
      */
      routeIfAlreadyAuthenticated: 'index',

      /**
        The name of the property that the session is injected with into routes and
        controllers.

        @property sessionPropertyName
        @readOnly
        @static
        @type String
        @default 'session'
      */
      sessionPropertyName: 'session',

      /**
        The authorizer factory to use as it is registered with Ember's container,
        see
        [Ember's API docs](http://emberjs.com/api/classes/Ember.Application.html#method_register);
        when the application does not interact with a server that requires
        authorized requests, no auzthorizer is needed.

        @property authorizer
        @readOnly
        @static
        @type String
        @default null
      */
      authorizer: null,

      /**
        The session factory to use as it is registered with Ember's container,
        see
        [Ember's API docs](http://emberjs.com/api/classes/Ember.Application.html#method_register).

        @property session
        @readOnly
        @static
        @type String
        @default 'simple-auth-session:main'
      */
      session: 'simple-auth-session:main',

      /**
        The store factory to use as it is registered with Ember's container, see
        [Ember's API docs](http://emberjs.com/api/classes/Ember.Application.html#method_register).

        @property store
        @readOnly
        @static
        @type String
        @default simple-auth-session-store:local-storage
      */
      store: 'simple-auth-session-store:local-storage',

      /**
        Ember Simple Auth will never authorize requests going to a different origin
        than the one the Ember.js application was loaded from; to explicitely
        enable authorization for additional origins, whitelist those origins with
        this setting. _Beware that origins consist of protocol, host and port (port
        can be left out when it is 80 for HTTP or 443 for HTTPS)_

        @property crossOriginWhitelist
        @readOnly
        @static
        @type Array
        @default []
      */
      crossOriginWhitelist: [],

      /**
        @property applicationRootUrl
        @private
      */
      applicationRootUrl: null,

      /**
        @method load
        @private
      */
      load: function(container) {
        var globalConfig              = getGlobalConfig('simple-auth');
        this.authenticationRoute      = globalConfig.authenticationRoute || this.authenticationRoute;
        this.routeAfterAuthentication = globalConfig.routeAfterAuthentication || this.routeAfterAuthentication;
        this.routeIfAlreadyAuthenticated     = globalConfig.routeIfAlreadyAuthenticated || this.routeIfAlreadyAuthenticated;
        this.sessionPropertyName      = globalConfig.sessionPropertyName || this.sessionPropertyName;
        this.authorizer               = globalConfig.authorizer || this.authorizer;
        this.session                  = globalConfig.session || this.session;
        this.store                    = globalConfig.store || this.store;
        this.crossOriginWhitelist     = globalConfig.crossOriginWhitelist || this.crossOriginWhitelist;
        this.applicationRootUrl       = container.lookup('router:main').get('rootURL') || '/';
      }
    };
  });
define("simple-auth/ember", 
  ["./initializer"],
  function(__dependency1__) {
    "use strict";
    var initializer = __dependency1__["default"];

    Ember.onLoad('Ember.Application', function(Application) {
      Application.initializer(initializer);
    });
  });
define("simple-auth/initializer", 
  ["./setup","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var setup = __dependency1__["default"];

    __exports__["default"] = {
      name:       'simple-auth',
      initialize: function(container, application) {
        setup(container, application);
      }
    };
  });
define("simple-auth/mixins/application-route-mixin", 
  ["./../configuration","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Configuration = __dependency1__["default"];

    /**
      The mixin for the application route; defines actions to authenticate the
      session as well as to invalidate it. These actions can be used in all
      templates like this:

      ```handlebars
      {{#if session.isAuthenticated}}
        <a {{ action 'invalidateSession' }}>Logout</a>
      {{else}}
        <a {{ action 'authenticateSession' }}>Login</a>
      {{/if}}
      ```

      or in the case that the application uses a dedicated route for logging in:

      ```handlebars
      {{#if session.isAuthenticated}}
        <a {{ action 'invalidateSession' }}>Logout</a>
      {{else}}
        {{#link-to 'login'}}Login{{/link-to}}
      {{/if}}
      ```

      This mixin also defines actions that are triggered whenever the session is
      successfully authenticated or invalidated and whenever authentication or
      invalidation fails. These actions provide a good starting point for adding
      custom behavior to these events.

      __When this mixin is used and the application's `ApplicationRoute` defines
      the `beforeModel` method, that method has to call `_super`.__

      Using this mixin is optional. Without using it, the session's events will not
      be automatically translated into route actions but would have to be handled
      inidivially, e.g. in an initializer:

      ```javascript
      Ember.Application.initializer({
        name:       'authentication',
        after:      'simple-auth',
        initialize: function(container, application) {
          var applicationRoute = container.lookup('route:application');
          var session          = container.lookup('simple-auth-session:main');
          // handle the session events
          session.on('sessionAuthenticationSucceeded', function() {
            applicationRoute.transitionTo('index');
          });
        }
      });
      ```

      @class ApplicationRouteMixin
      @namespace SimpleAuth
      @module simple-auth/mixins/application-route-mixin
      @extends Ember.Mixin
      @static
    */
    __exports__["default"] = Ember.Mixin.create({
      /**
        @method beforeModel
        @private
      */
      beforeModel: function(transition) {
        this._super(transition);
        if (!this.get('_authEventListenersAssigned')) {
          this.set('_authEventListenersAssigned', true);
          var _this = this;
          Ember.A([
            'sessionAuthenticationSucceeded',
            'sessionAuthenticationFailed',
            'sessionInvalidationSucceeded',
            'sessionInvalidationFailed',
            'authorizationFailed'
          ]).forEach(function(event) {
            _this.get(Configuration.sessionPropertyName).on(event, function(error) {
              Array.prototype.unshift.call(arguments, event);
              transition.send.apply(transition, arguments);
            });
          });
        }
      },

      actions: {
        /**
          This action triggers transition to the
          [`Configuration.authenticationRoute`](#SimpleAuth-Configuration-authenticationRoute).
          It can be used in templates as shown above. It is also triggered
          automatically by the
          [`AuthenticatedRouteMixin`](#SimpleAuth-AuthenticatedRouteMixin) whenever
          a route that requries authentication is accessed but the session is not
          currently authenticated.

          __For an application that works without an authentication route (e.g.
          because it opens a new window to handle authentication there), this is
          the action to override, e.g.:__

          ```javascript
          App.ApplicationRoute = Ember.Route.extend(SimpleAuth.ApplicationRouteMixin, {
            actions: {
              authenticateSession: function() {
                this.get('session').authenticate('authenticator:custom', {});
              }
            }
          });
          ```

          @method actions.authenticateSession
        */
        authenticateSession: function() {
          this.transitionTo(Configuration.authenticationRoute);
        },

        /**
          This action is triggered whenever the session is successfully
          authenticated. If there is a transition that was previously intercepted
          by
          [`AuthenticatedRouteMixin#beforeModel`](#SimpleAuth-AuthenticatedRouteMixin-beforeModel)
          it will retry it. If there is no such transition, this action transitions
          to the
          [`Configuration.routeAfterAuthentication`](#SimpleAuth-Configuration-routeAfterAuthentication).

          @method actions.sessionAuthenticationSucceeded
        */
        sessionAuthenticationSucceeded: function() {
          var attemptedTransition = this.get(Configuration.sessionPropertyName).get('attemptedTransition');
          if (attemptedTransition) {
            attemptedTransition.retry();
            this.get(Configuration.sessionPropertyName).set('attemptedTransition', null);
          } else {
            this.transitionTo(Configuration.routeAfterAuthentication);
          }
        },

        /**
          This action is triggered whenever session authentication fails. The
          `error` argument is the error object that the promise the authenticator
          returns rejects with. (see
          [`Authenticators.Base#authenticate`](#SimpleAuth-Authenticators-Base-authenticate)).

          It can be overridden to display error messages etc.:

          ```javascript
          App.ApplicationRoute = Ember.Route.extend(SimpleAuth.ApplicationRouteMixin, {
            actions: {
              sessionAuthenticationFailed: function(error) {
                this.controllerFor('application').set('loginErrorMessage', error.message);
              }
            }
          });
          ```

          @method actions.sessionAuthenticationFailed
          @param {any} error The error the promise returned by the authenticator rejects with, see [`Authenticators.Base#authenticate`](#SimpleAuth-Authenticators-Base-authenticate)
        */
        sessionAuthenticationFailed: function(error) {
        },

        /**
          This action invalidates the session (see
          [`Session#invalidate`](#SimpleAuth-Session-invalidate)).
          If invalidation succeeds, it reloads the application (see
          [`ApplicationRouteMixin#sessionInvalidationSucceeded`](#SimpleAuth-ApplicationRouteMixin-sessionInvalidationSucceeded)).

          @method actions.invalidateSession
        */
        invalidateSession: function() {
          this.get(Configuration.sessionPropertyName).invalidate();
        },

        /**
          This action is invoked whenever the session is successfully invalidated.
          It reloads the Ember.js application by redirecting the browser to the
          application's root URL so that all in-memory data (such as Ember Data
          stores etc.) gets cleared. The root URL is automatically retrieved from
          the Ember.js application's router (see
          http://emberjs.com/guides/routing/#toc_specifying-a-root-url).

          @method actions.sessionInvalidationSucceeded
        */
        sessionInvalidationSucceeded: function() {
          window.location.replace(Configuration.applicationRootUrl);
        },

        /**
          This action is invoked whenever session invalidation fails. This mainly
          serves as an extension point to add custom behavior and does nothing by
          default.

          @method actions.sessionInvalidationFailed
          @param {any} error The error the promise returned by the authenticator rejects with, see [`Authenticators.Base#invalidate`](#SimpleAuth-Authenticators-Base-invalidate)
        */
        sessionInvalidationFailed: function(error) {
        },

        /**
          This action is invoked when an authorization error occurs (which is
          the case __when the server responds with HTTP status 401__). It
          invalidates the session and reloads the application (see
          [`ApplicationRouteMixin#sessionInvalidationSucceeded`](#SimpleAuth-ApplicationRouteMixin-sessionInvalidationSucceeded)).

          @method actions.authorizationFailed
        */
        authorizationFailed: function() {
          if (this.get(Configuration.sessionPropertyName).get('isAuthenticated')) {
            this.get(Configuration.sessionPropertyName).invalidate();
          }
        }
      }
    });
  });
define("simple-auth/mixins/authenticated-route-mixin", 
  ["./../configuration","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Configuration = __dependency1__["default"];

    /**
      This mixin is for routes that require the session to be authenticated to be
      accessible. Including this mixin in a route automatically adds a hook that
      enforces the session to be authenticated and redirects to the
      [`Configuration.authenticationRoute`](#SimpleAuth-Configuration-authenticationRoute)
      if it is not.

      ```javascript
      // app/routes/protected.js
      import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

      export default Ember.Route.extend(AuthenticatedRouteMixin);
      ```

      `AuthenticatedRouteMixin` performs the redirect in the `beforeModel` method
      so that in all methods executed after that the session is guaranteed to be
      authenticated. __If `beforeModel` is overridden, ensure that the custom
      implementation calls `this._super(transition)`__ so that the session
      enforcement code is actually executed.

      @class AuthenticatedRouteMixin
      @namespace SimpleAuth
      @module simple-auth/mixins/authenticated-route-mixin
      @extends Ember.Mixin
      @static
    */
    __exports__["default"] = Ember.Mixin.create({
      /**
        This method implements the enforcement of the session being authenticated.
        If the session is not authenticated, the current transition will be aborted
        and a redirect will be triggered to the
        [`Configuration.authenticationRoute`](#SimpleAuth-Configuration-authenticationRoute).
        The method also saves the intercepted transition so that it can be retried
        after the session has been authenticated (see
        [`ApplicationRouteMixin#sessionAuthenticationSucceeded`](#SimpleAuth-ApplicationRouteMixin-sessionAuthenticationSucceeded)).

        @method beforeModel
        @param {Transition} transition The transition that lead to this route
      */
      beforeModel: function(transition) {
        this._super(transition);
        if (!this.get(Configuration.sessionPropertyName).get('isAuthenticated')) {
          transition.abort();
          this.get(Configuration.sessionPropertyName).set('attemptedTransition', transition);
          Ember.assert('The route configured as Configuration.authenticationRoute cannot implement the AuthenticatedRouteMixin mixin as that leads to an infinite transitioning loop.', this.get('routeName') !== Configuration.authenticationRoute);
          transition.send('authenticateSession');
        }
      }
    });
  });
define("simple-auth/mixins/authentication-controller-mixin", 
  ["./../configuration","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Configuration = __dependency1__["default"];

    /**
      This mixin is for the controller that handles the
      [`Configuration.authenticationRoute`](#SimpleAuth-Configuration-authenticationRoute).
      It provides the `authenticate` action that will authenticate the session with
      the configured authenticator (see
      [`AuthenticationControllerMixin#authenticator`](#SimpleAuth-AuthenticationControllerMixin-authenticator)).

      @class AuthenticationControllerMixin
      @namespace SimpleAuth
      @module simple-auth/mixins/authentication-controller-mixin
      @extends Ember.Mixin
    */
    __exports__["default"] = Ember.Mixin.create({
      /**
        The authenticator factory to use as it is registered with Ember's
        container, see
        [Ember's API docs](http://emberjs.com/api/classes/Ember.Application.html#method_register).

        @property authenticator
        @type String
        @default null
      */
      authenticator: null,

      actions: {
        /**
          This action will authenticate the session with the configured
          authenticator (see
          [`AuthenticationControllerMixin#authenticator`](#SimpleAuth-AuthenticationControllerMixin-authenticator),
          [`Session#authenticate`](#SimpleAuth-Session-authenticate)).

          @method actions.authenticate
          @param {Object} options Any options the authenticator needs to authenticate the session
        */
        authenticate: function(options) {
          var authenticator = this.get('authenticator');
          Ember.assert('AuthenticationControllerMixin/LoginControllerMixin require the authenticator property to be set on the controller', !Ember.isEmpty(authenticator));
          return this.get(Configuration.sessionPropertyName).authenticate(this.get('authenticator'), options);
        }
      }
    });
  });
define("simple-auth/mixins/login-controller-mixin", 
  ["./../configuration","./authentication-controller-mixin","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Configuration = __dependency1__["default"];
    var AuthenticationControllerMixin = __dependency2__["default"];

    /**
      This mixin is for the controller that handles the
      [`Configuration.authenticationRoute`](#SimpleAuth-Configuration-authenticationRoute)
      if the used authentication mechanism works with a login form that asks for
      user credentials. It provides the `authenticate` action that will
      authenticate the session with the configured authenticator when invoked.
      __This is a specialization of
      [`AuthenticationControllerMixin`](#SimpleAuth-AuthenticationControllerMixin).__

      Accompanying the controller that this mixin is mixed in the application needs
      to have a `login` template with the fields `identification` and `password` as
      well as an actionable button or link that triggers the `authenticate` action,
      e.g.:

      ```handlebars
      <form {{action 'authenticate' on='submit'}}>
        <label for="identification">Login</label>
        {{input value=identification placeholder='Enter Login'}}
        <label for="password">Password</label>
        {{input value=password placeholder='Enter Password' type='password'}}
        <button type="submit">Login</button>
      </form>
      ```

      @class LoginControllerMixin
      @namespace SimpleAuth
      @module simple-auth/mixins/login-controller-mixin
      @extends SimpleAuth.AuthenticationControllerMixin
    */
    __exports__["default"] = Ember.Mixin.create(AuthenticationControllerMixin, {
      actions: {
        /**
          This action will authenticate the session with the configured
          authenticator (see
          [AuthenticationControllerMixin#authenticator](#SimpleAuth-Authentication-authenticator))
          if both `identification` and `password` are non-empty. It passes both
          values to the authenticator.

          __The action also resets the `password` property so sensitive data does
          not stay in memory for longer than necessary.__

          @method actions.authenticate
        */
        authenticate: function() {
          var data = this.getProperties('identification', 'password');
          this.set('password', null);
          return this._super(data);
        }
      }
    });
  });
define("simple-auth/mixins/unauthenticated-route-mixin", 
  ["./../configuration","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Configuration = __dependency1__["default"];

    /**
      This mixin is for routes that should only be accessible if the session is
      not authenticated. This is e.g. the case for the login route that should not
      be accessible when the session is already authenticated. Including this mixin
      in a route automatically adds a hook that redirects to the
      [`Configuration.routeIfAlreadyAuthenticated`](#SimpleAuth-Configuration-routeIfAlreadyAuthenticated),
      which defaults to `'index'`.

      ```javascript
      // app/routes/login.js
      import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

      export default Ember.Route.extend(UnauthenticatedRouteMixin);
      ```

      `UnauthenticatedRouteMixin` performs the redirect in the `beforeModel`
      method. __If `beforeModel` is overridden, ensure that the custom
      implementation calls `this._super(transition)`__.

      @class UnauthenticatedRouteMixin
      @namespace SimpleAuth
      @module simple-auth/mixins/unauthenticated-route-mixin
      @extends Ember.Mixin
      @static
    */
    __exports__["default"] = Ember.Mixin.create({
      /**
        This method implements the enforcement of the session not being
        authenticated. If the session is authenticated, the current transition will
        be aborted and a redirect will be triggered to the
        [`Configuration.routeIfAlreadyAuthenticated`](#SimpleAuth-Configuration-routeIfAlreadyAuthenticated).

        @method beforeModel
        @param {Transition} transition The transition that lead to this route
      */
      beforeModel: function(transition) {
        if (this.get(Configuration.sessionPropertyName).get('isAuthenticated')) {
          transition.abort();
          Ember.assert('The route configured as Configuration.routeIfAlreadyAuthenticated cannot implement the UnauthenticatedRouteMixin mixin as that leads to an infinite transitioning loop.', this.get('routeName') !== Configuration.routeIfAlreadyAuthenticated);
          this.transitionTo(Configuration.routeIfAlreadyAuthenticated);
        }
      }
    });
  });
define("simple-auth/session", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /**
      __The session provides access to the current authentication state as well as
      any data the authenticator resolved with__ (see
      [`Authenticators.Base#authenticate`](#SimpleAuth-Authenticators-Base-authenticate)).
      It is created when Ember Simple Auth is set up and __injected into all
      controllers and routes so that these parts of the application can always
      access the current authentication state and other data__, depending on the
      authenticator in use and whether the session is actually authenticated (see
      [`Authenticators.Base`](#SimpleAuth-Authenticators-Base)).

      The session also provides methods to authenticate and to invalidate itself
      (see
      [`Session#authenticate`](#SimpleAuth-Session-authenticate),
      [`Session#invaldiate`](#SimpleAuth-Session-invaldiate)).
      These methods are usually invoked through actions from routes or controllers.
      To authenticate the session manually, simple call the
      [`Session#authenticate`](#SimpleAuth-Session-authenticate)
      method with the authenticator factory to use as well as any options the
      authenticator needs to authenticate the session:

      ```javascript
      this.get('session').authenticate('authenticator:custom', { some: 'option' }).then(function() {
        // authentication was successful
      }, function() {
        // authentication failed
      });
      ```

      The session also observes the store and - if it is authenticated - the
      authenticator for changes (see
      [`Authenticators.Base`](#SimpleAuth-Authenticators-Base)
      end [`Stores.Base`](#SimpleAuth-Stores-Base)).

      @class Session
      @namespace SimpleAuth
      @module simple-auth/session
      @extends Ember.ObjectProxy
      @uses Ember.Evented
    */
    __exports__["default"] = Ember.ObjectProxy.extend(Ember.Evented, {
      /**
        Triggered __whenever the session is successfully authenticated__. When the
        application uses the
        [`ApplicationRouteMixin` mixin](#SimpleAuth-ApplicationRouteMixin),
        [`ApplicationRouteMixin.actions#sessionAuthenticationSucceeded`](#SimpleAuth-ApplicationRouteMixin-sessionAuthenticationSucceeded)
        will be invoked whenever this event is triggered.

        @event sessionAuthenticationSucceeded
      */
      /**
        Triggered __whenever an attempt to authenticate the session fails__. When
        the application uses the
        [`ApplicationRouteMixin` mixin](#SimpleAuth-ApplicationRouteMixin),
        [`ApplicationRouteMixin.actions#sessionAuthenticationFailed`](#SimpleAuth-ApplicationRouteMixin-sessionAuthenticationFailed)
        will be invoked whenever this event is triggered.

        @event sessionAuthenticationFailed
        @param {Object} error The error object; this depends on the authenticator in use, see [SimpleAuth.Authenticators.Base#authenticate](#SimpleAuth-Authenticators-Base-authenticate)
      */
      /**
        Triggered __whenever the session is successfully invalidated__. When the
        application uses the
        [`ApplicationRouteMixin` mixin](#SimpleAuth-ApplicationRouteMixin),
        [`ApplicationRouteMixin.actions#sessionInvalidationSucceeded`](#SimpleAuth-ApplicationRouteMixin-sessionInvalidationSucceeded)
        will be invoked whenever this event is triggered.

        @event sessionInvalidationSucceeded
      */
      /**
        Triggered __whenever an attempt to invalidate the session fails__. When the
        application uses the
        [`ApplicationRouteMixin` mixin](#SimpleAuth-ApplicationRouteMixin),
        [`ApplicationRouteMixin.actions#sessionInvalidationFailed`](#SimpleAuth-ApplicationRouteMixin-sessionInvalidationFailed)
        will be invoked whenever this event is triggered.

        @event sessionInvalidationFailed
        @param {Object} error The error object; this depends on the authenticator in use, see [SimpleAuth.Authenticators.Base#invalidate](#SimpleAuth-Authenticators-Base-invalidate)
      */
      /**
        Triggered __whenever the server rejects the authorization information
        passed with a request and responds with status 401__. When the application
        uses the
        [`ApplicationRouteMixin` mixin](#SimpleAuth-ApplicationRouteMixin),
        [`ApplicationRouteMixin.actions#authorizationFailed`](#SimpleAuth-ApplicationRouteMixin-authorizationFailed)
        will be invoked whenever this event is triggered.

        @event authorizationFailed
      */

      /**
        The authenticator factory to use as it is registered with Ember's
        container, see
        [Ember's API docs](http://emberjs.com/api/classes/Ember.Application.html#method_register).
        This is only set when the session is currently authenticated.

        @property authenticator
        @type String
        @readOnly
        @default null
      */
      authenticator: null,
      /**
        The store used to persist session properties.

        @property store
        @type SimpleAuth.Stores.Base
        @readOnly
        @default null
      */
      store: null,
      /**
        The Ember.js container,

        @property container
        @type Container
        @readOnly
        @default null
      */
      container: null,
      /**
        Returns whether the session is currently authenticated.

        @property isAuthenticated
        @type Boolean
        @readOnly
        @default false
      */
      isAuthenticated: false,
      /**
        @property attemptedTransition
        @private
      */
      attemptedTransition: null,
      /**
        @property content
        @private
      */
      content: {},

      /**
        Authenticates the session with an `authenticator` and appropriate
        `options`. __This delegates the actual authentication work to the
        `authenticator`__ and handles the returned promise accordingly (see
        [`Authenticators.Base#authenticate`](#SimpleAuth-Authenticators-Base-authenticate)).
        All data the authenticator resolves with will be saved in the session.

        __This method returns a promise itself. A resolving promise indicates that
        the session was successfully authenticated__ while a rejecting promise
        indicates that authentication failed and the session remains
        unauthenticated.

        @method authenticate
        @param {String} authenticator The authenticator factory to use as it is registered with Ember's container, see [Ember's API docs](http://emberjs.com/api/classes/Ember.Application.html#method_register)
        @param {Object} options The options to pass to the authenticator; depending on the type of authenticator these might be a set of credentials, a Facebook OAuth Token, etc.
        @return {Ember.RSVP.Promise} A promise that resolves when the session was authenticated successfully
      */
      authenticate: function(authenticator, options) {
        Ember.assert('Session#authenticate requires the authenticator factory to be specified, was ' + authenticator, !Ember.isEmpty(authenticator));
        var _this = this;
        return new Ember.RSVP.Promise(function(resolve, reject) {
          _this.container.lookup(authenticator).authenticate(options).then(function(content) {
            _this.setup(authenticator, content, true);
            resolve();
          }, function(error) {
            _this.clear();
            _this.trigger('sessionAuthenticationFailed', error);
            reject(error);
          });
        });
      },

      /**
        Invalidates the session with the authenticator it is currently
        authenticated with (see
        [`Session#authenticator`](#SimpleAuth-Session-authenticator)). __This
        invokes the authenticator's `invalidate` method and handles the returned
        promise accordingly__ (see
        [`Authenticators.Base#invalidate`](#SimpleAuth-Authenticators-Base-invalidate)).

        __This method returns a promise itself. A resolving promise indicates that
        the session was successfully invalidated__ while a rejecting promise
        indicates that the promise returned by the `authenticator` rejected and
        thus invalidation was cancelled. In that case the session remains
        authenticated. Once the session is successfully invalidated it clears all
        of its data.

        @method invalidate
        @return {Ember.RSVP.Promise} A promise that resolves when the session was invalidated successfully
      */
      invalidate: function() {
        Ember.assert('Session#invalidate requires the session to be authenticated', this.get('isAuthenticated'));
        var _this = this;
        return new Ember.RSVP.Promise(function(resolve, reject) {
          var authenticator = _this.container.lookup(_this.authenticator);
          authenticator.invalidate(_this.content).then(function() {
            authenticator.off('sessionDataUpdated');
            _this.clear(true);
            resolve();
          }, function(error) {
            _this.trigger('sessionInvalidationFailed', error);
            reject(error);
          });
        });
      },

      /**
        @method restore
        @private
      */
      restore: function() {
        var _this = this;
        return new Ember.RSVP.Promise(function(resolve, reject) {
          var restoredContent = _this.store.restore();
          var authenticator   = restoredContent.authenticator;
          if (!!authenticator) {
            delete restoredContent.authenticator;
            _this.container.lookup(authenticator).restore(restoredContent).then(function(content) {
              _this.setup(authenticator, content);
              resolve();
            }, function() {
              _this.store.clear();
              reject();
            });
          } else {
            _this.store.clear();
            reject();
          }
        });
      },

      /**
        @method setup
        @private
      */
      setup: function(authenticator, content, trigger) {
        content = Ember.merge(Ember.merge({}, this.content), content);
        trigger = !!trigger && !this.get('isAuthenticated');
        this.beginPropertyChanges();
        this.setProperties({
          isAuthenticated: true,
          authenticator:   authenticator,
          content:         content
        });
        this.bindToAuthenticatorEvents();
        this.updateStore();
        this.endPropertyChanges();
        if (trigger) {
          this.trigger('sessionAuthenticationSucceeded');
        }
      },

      /**
        @method clear
        @private
      */
      clear: function(trigger) {
        trigger = !!trigger && this.get('isAuthenticated');
        this.beginPropertyChanges();
        this.setProperties({
          isAuthenticated: false,
          authenticator:   null,
          content:         {}
        });
        this.store.clear();
        this.endPropertyChanges();
        if (trigger) {
          this.trigger('sessionInvalidationSucceeded');
        }
      },

      /**
        @method setUnknownProperty
        @private
      */
      setUnknownProperty: function(key, value) {
        var result = this._super(key, value);
        this.updateStore();
        return result;
      },

      /**
        @method updateStore
        @private
      */
      updateStore: function() {
        var data = this.content;
        if (!Ember.isEmpty(this.authenticator)) {
          data = Ember.merge({ authenticator: this.authenticator }, data);
        }
        if (!Ember.isEmpty(data)) {
          this.store.persist(data);
        }
      },

      /**
        @method bindToAuthenticatorEvents
        @private
      */
      bindToAuthenticatorEvents: function() {
        var _this = this;
        var authenticator = this.container.lookup(this.authenticator);
        authenticator.off('sessionDataUpdated');
        authenticator.off('sessionDataInvalidated');
        authenticator.on('sessionDataUpdated', function(content) {
          _this.setup(_this.authenticator, content);
        });
        authenticator.on('sessionDataInvalidated', function(content) {
          _this.clear(true);
        });
      },

      /**
        @method bindToStoreEvents
        @private
      */
      bindToStoreEvents: function() {
        var _this = this;
        this.store.on('sessionDataUpdated', function(content) {
          var authenticator = content.authenticator;
          if (!!authenticator) {
            delete content.authenticator;
            _this.container.lookup(authenticator).restore(content).then(function(content) {
              _this.setup(authenticator, content, true);
            }, function() {
              _this.clear(true);
            });
          } else {
            _this.clear(true);
          }
        });
      }.observes('store')
    });
  });
define("simple-auth/setup", 
  ["./configuration","./session","./stores/local-storage","./stores/ephemeral","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Configuration = __dependency1__["default"];
    var Session = __dependency2__["default"];
    var LocalStorage = __dependency3__["default"];
    var Ephemeral = __dependency4__["default"];

    function extractLocationOrigin(location) {
      if (Ember.typeOf(location) === 'string') {
        var link = document.createElement('a');
        link.href = location;
        //IE requires the following line when url is relative.
        //First assignment of relative url to link.href results in absolute url on link.href but link.hostname and other properties are not set
        //Second assignment of absolute url to link.href results in link.hostname and other properties being set as expected
        link.href = link.href;
        location = link;
      }
      var port = location.port;
      if (Ember.isEmpty(port)) {
        //need to include the port whether its actually present or not as some versions of IE will always set it
        port = location.protocol === 'http:' ? '80' : (location.protocol === 'https:' ? '443' : '');
      }
      return location.protocol + '//' + location.hostname + (port !== '' ? ':' + port : '');
    }

    var urlOrigins     = {};
    var crossOriginWhitelist;
    function shouldAuthorizeRequest(options) {
      if (options.crossDomain === false) {
        return true;
      }
      var urlOrigin = urlOrigins[options.url] = urlOrigins[options.url] || extractLocationOrigin(options.url);
      return crossOriginWhitelist.indexOf(urlOrigin) > -1;
    }

    function registerFactories(container) {
      container.register('simple-auth-session-store:local-storage', LocalStorage);
      container.register('simple-auth-session-store:ephemeral', Ephemeral);
      container.register('simple-auth-session:main', Session);
    }

    /**
      @method setup
      @private
    **/
    __exports__["default"] = function(container, application) {
      Configuration.load(container);
      application.deferReadiness();
      registerFactories(container);

      var store   = container.lookup(Configuration.store);
      var session = container.lookup(Configuration.session);
      session.setProperties({ store: store, container: container });
      Ember.A(['controller', 'route']).forEach(function(component) {
        container.injection(component, Configuration.sessionPropertyName, Configuration.session);
      });

      crossOriginWhitelist = Ember.A(Configuration.crossOriginWhitelist).map(function(origin) {
        return extractLocationOrigin(origin);
      });

      if (!Ember.isEmpty(Configuration.authorizer)) {
        var authorizer = container.lookup(Configuration.authorizer);
        if (!!authorizer) {
          authorizer.set('session', session);
          Ember.$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
            if (!authorizer.isDestroyed && shouldAuthorizeRequest(options)) {
              jqXHR.__simple_auth_authorized__ = true;
              authorizer.authorize(jqXHR, options);
            }
          });
          Ember.$(document).ajaxError(function(event, jqXHR, setting, exception) {
            if (!!jqXHR.__simple_auth_authorized__ && jqXHR.status === 401) {
              session.trigger('authorizationFailed');
            }
          });
        }
      } else {
        Ember.Logger.info('No authorizer was configured for Ember Simple Auth - specify one if backend requests need to be authorized.');
      }

      var advanceReadiness = function() {
        application.advanceReadiness();
      };
      session.restore().then(advanceReadiness, advanceReadiness);
    }
  });
define("simple-auth/stores/base", 
  ["../utils/flat-objects-are-equal","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var flatObjectsAreEqual = __dependency1__["default"];

    /**
      The base for all store types. __This serves as a starting point for
      implementing custom stores and must not be used directly.__

      Stores are used to persist the session's state so it survives a page reload
      and is synchronized across multiple tabs or windows of the same application.
      The store to be used with the application can be configured in the global
      configuration object:

      ```js
      window.ENV = window.ENV || {};
      window.ENV['simple-auth'] = {
        store: 'simple-auth-session-store:local-storage'
      }
      ```

      @class Base
      @namespace SimpleAuth.Stores
      @module simple-auth/stores/base
      @extends Ember.Object
      @uses Ember.Evented
    */
    __exports__["default"] = Ember.Object.extend(Ember.Evented, {
      /**
        __Triggered when the data that constitutes the session changes in the
        store. This usually happens because the session is authenticated or
        invalidated in another tab or window.__ The session automatically catches
        that event, passes the updated data to its authenticator's
        [`Authenticators.Base#restore`](#SimpleAuth-Authenticators-Base-restore)
        method and handles the result of that invocation accordingly.

        @event sessionDataUpdated
        @param {Object} data The updated session data
      */

      /**
        Persists the `data` in the store. This actually replaces all currently
        stored data.

        `Stores.Base`'s implementation does nothing.

        @method persist
        @param {Object} data The data to persist
      */
      persist: function(data) {
      },

      /**
        Restores all data currently saved in the store as a plain object.

        `Stores.Base`'s implementation always returns an empty plain Object.

        @method restore
        @return {Object} The data currently persisted in the store.
      */
      restore: function() {
        return {};
      },

      /**
        Clears the store.

        `Stores.Base`'s implementation does nothing.

        @method clear
      */
      clear: function() {
      }
    });
  });
define("simple-auth/stores/ephemeral", 
  ["./base","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Base = __dependency1__["default"];

    /**
      Store that saves its data in memory and thus __is not actually persistent__.
      It does also not synchronize the session's state across multiple tabs or
      windows as those cannot share memory.

      __This store is mainly useful for testing.__

      _The factory for this store is registered as
      `'simple-auth-session-store:ephemeral'` in Ember's container._

      @class Ephemeral
      @namespace SimpleAuth.Stores
      @module simple-auth/stores/ephemeral
      @extends Stores.Base
    */
    __exports__["default"] = Base.extend({
      /**
        @method init
        @private
      */
      init: function() {
        this.clear();
      },

      /**
        Persists the `data`.

        @method persist
        @param {Object} data The data to persist
      */
      persist: function(data) {
        this._data = JSON.stringify(data || {});
      },

      /**
        Restores all data currently saved as a plain object.

        @method restore
        @return {Object} All data currently persisted
      */
      restore: function() {
        return JSON.parse(this._data) || {};
      },

      /**
        Clears the store.

        @method clear
      */
      clear: function() {
        delete this._data;
        this._data = '{}';
      }
    });
  });
define("simple-auth/stores/local-storage", 
  ["./base","../utils/flat-objects-are-equal","simple-auth/utils/get-global-config","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Base = __dependency1__["default"];
    var flatObjectsAreEqual = __dependency2__["default"];
    var getGlobalConfig = __dependency3__["default"];

    /**
      Store that saves its data in the browser's `localStorage`.

      _The factory for this store is registered as
      `'simple-auth-session-store:local-storage'` in Ember's container._

      __`Stores.LocalStorage` is Ember Simple Auth's default store.__

      @class LocalStorage
      @namespace SimpleAuth.Stores
      @module simple-auth/stores/local-storage
      @extends Stores.Base
    */
    __exports__["default"] = Base.extend({
      /**
        The key the store stores the data in.

        @property key
        @type String
        @default 'ember_simple_auth:session'
      */
      key: 'ember_simple_auth:session',

      /**
        @method init
        @private
      */
      init: function() {
        var globalConfig = getGlobalConfig('simple-auth');
        this.key         = globalConfig.localStorageKey || this.key;

        this.bindToStorageEvents();
      },

      /**
        Persists the `data` in the `localStorage`.

        @method persist
        @param {Object} data The data to persist
      */
      persist: function(data) {
        data = JSON.stringify(data || {});
        localStorage.setItem(this.key, data);
        this._lastData = this.restore();
      },

      /**
        Restores all data currently saved in the `localStorage` identified by the
        `keyPrefix` as one plain object.

        @method restore
        @return {Object} All data currently persisted in the `localStorage`
      */
      restore: function() {
        var data = localStorage.getItem(this.key);
        return JSON.parse(data) || {};
      },

      /**
        Clears the store by deleting all `localStorage` keys prefixed with the
        `keyPrefix`.

        @method clear
      */
      clear: function() {
        localStorage.removeItem(this.key);
        this._lastData = null;
      },

      /**
        @method bindToStorageEvents
        @private
      */
      bindToStorageEvents: function() {
        var _this = this;
        Ember.$(window).bind('storage', function(e) {
          var data = _this.restore();
          if (!flatObjectsAreEqual(data, _this._lastData)) {
            _this._lastData = data;
            _this.trigger('sessionDataUpdated', data);
          }
        });
      }
    });
  });
define("simple-auth/utils/flat-objects-are-equal", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /**
      @method flatObjectsAreEqual
      @private
    */
    __exports__["default"] = function(a, b) {
      function sortObject(object) {
        var array = [];
        for (var property in object) {
          array.push([property, object[property]]);
        }
        return array.sort(function(a, b) {
          if (a[0] < b[0]) {
            return -1;
          } else if (a[0] > b[0]) {
            return 1;
          } else {
            return 0;
          }
        });
      }
      return JSON.stringify(sortObject(a)) === JSON.stringify(sortObject(b));
    }
  });
define("simple-auth/utils/get-global-config", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var global = (typeof window !== 'undefined') ? window : {};

    __exports__["default"] = function(scope) {
      return(global.ENV || {})[scope] || {};
    }
  });
define("simple-auth/utils/is-secure-url", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /**
      @method isSecureUrl
      @private
    */
    __exports__["default"] = function(url) {
      var link  = document.createElement('a');
      link.href = url;
      link.href = link.href;
      return link.protocol == 'https:';
    }
  });
var initializer                   = requireModule('simple-auth/initializer')['default'];
var Configuration                 = requireModule('simple-auth/configuration')['default'];
var Session                       = requireModule('simple-auth/session')['default'];
var BaseAuthenticator             = requireModule('simple-auth/authenticators/base')['default'];
var BaseAuthorizer                = requireModule('simple-auth/authorizers/base')['default'];
var BaseStore                     = requireModule('simple-auth/stores/base')['default'];
var LocalStorageStore             = requireModule('simple-auth/stores/local-storage')['default'];
var EphemeralStore                = requireModule('simple-auth/stores/ephemeral')['default'];
var flatObjectsAreEqual           = requireModule('simple-auth/utils/flat-objects-are-equal')['default'];
var isSecureUrl                   = requireModule('simple-auth/utils/is-secure-url')['default'];
var getGlobalConfig               = requireModule('simple-auth/utils/get-global-config')['default'];
var ApplicationRouteMixin         = requireModule('simple-auth/mixins/application-route-mixin')['default'];
var AuthenticatedRouteMixin       = requireModule('simple-auth/mixins/authenticated-route-mixin')['default'];
var AuthenticationControllerMixin = requireModule('simple-auth/mixins/authentication-controller-mixin')['default'];
var LoginControllerMixin          = requireModule('simple-auth/mixins/login-controller-mixin')['default'];
var UnauthenticatedRouteMixin     = requireModule('simple-auth/mixins/unauthenticated-route-mixin')['default'];

global.SimpleAuth = {
  Configuration: Configuration,

  Session: Session,

  Authenticators: {
    Base: BaseAuthenticator
  },

  Authorizers: {
    Base: BaseAuthorizer
  },

  Stores: {
    Base:         BaseStore,
    LocalStorage: LocalStorageStore,
    Ephemeral:    EphemeralStore
  },

  Utils: {
    flatObjectsAreEqual: flatObjectsAreEqual,
    isSecureUrl:         isSecureUrl,
    getGlobalConfig:     getGlobalConfig
  },

  ApplicationRouteMixin:         ApplicationRouteMixin,
  AuthenticatedRouteMixin:       AuthenticatedRouteMixin,
  AuthenticationControllerMixin: AuthenticationControllerMixin,
  LoginControllerMixin:          LoginControllerMixin,
  UnauthenticatedRouteMixin:     UnauthenticatedRouteMixin
};

requireModule('simple-auth/ember');

Ember.libraries.register('Ember Simple Auth', '0.6.6');
})((typeof global !== 'undefined') ? global : window);

(function(global) {

Ember.libraries.register('Ember Simple Auth OAuth 2.0', '0.6.6');

var define, requireModule;

(function() {
  var registry = {}, seen = {};

  define = function(name, deps, callback) {
    registry[name] = { deps: deps, callback: callback };
  };

  requireModule = function(name) {
    if (seen.hasOwnProperty(name)) { return seen[name]; }
    seen[name] = {};

    if (!registry[name]) {
      throw new Error("Could not find module " + name);
    }

    var mod = registry[name],
        deps = mod.deps,
        callback = mod.callback,
        reified = [],
        exports;

    for (var i=0, l=deps.length; i<l; i++) {
      if (deps[i] === 'exports') {
        reified.push(exports = {});
      } else {
        reified.push(requireModule(resolve(deps[i])));
      }
    }

    var value = callback.apply(this, reified);
    return seen[name] = exports || value;

    function resolve(child) {
      if (child.charAt(0) !== '.') { return child; }
      var parts = child.split("/");
      var parentBase = name.split("/").slice(0, -1);

      for (var i=0, l=parts.length; i<l; i++) {
        var part = parts[i];

        if (part === '..') { parentBase.pop(); }
        else if (part === '.') { continue; }
        else { parentBase.push(part); }
      }

      return parentBase.join("/");
    }
  };

  requireModule.registry = registry;
})();

define("simple-auth-oauth2/authenticators/oauth2", 
  ["simple-auth/authenticators/base","simple-auth/utils/is-secure-url","simple-auth/utils/get-global-config","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Base = __dependency1__["default"];
    var isSecureUrl = __dependency2__["default"];
    var getGlobalConfig = __dependency3__["default"];

    /**
      Authenticator that conforms to OAuth 2
      ([RFC 6749](http://tools.ietf.org/html/rfc6749)), specifically the _"Resource
      Owner Password Credentials Grant Type"_.

      This authenticator supports access token refresh (see
      [RFC 6740, section 6](http://tools.ietf.org/html/rfc6749#section-6)).

      _The factory for this authenticator is registered as
      `'simple-auth-authenticator:oauth2-password-grant'` in Ember's
      container._

      @class OAuth2
      @namespace SimpleAuth.Authenticators
      @module simple-auth-oauth2/authenticators/oauth2
      @extends Base
    */
    __exports__["default"] = Base.extend({
      /**
        Triggered when the authenticator refreshes the access token (see
        [RFC 6740, section 6](http://tools.ietf.org/html/rfc6749#section-6)).

        @event updated
        @param {Object} data The updated session data
      */

      /**
        The endpoint on the server the authenticator acquires the access token
        from.

        This value can be configured via the global environment object:

        ```js
        window.ENV = window.ENV || {};
        window.ENV['simple-auth-oauth2'] = {
          serverTokenEndpoint: '/some/custom/endpoint'
        }
        ```

        @property serverTokenEndpoint
        @type String
        @default '/token'
      */
      serverTokenEndpoint: '/token',

      /**
        The endpoint on the server the authenticator uses to revoke tokens. Only
        set this if the server actually supports token revokation.

        This value can be configured via the global environment object:

        ```js
        window.ENV = window.ENV || {};
        window.ENV['simple-auth-oauth2'] = {
          serverTokenRevocationEndpoint: '/some/custom/endpoint'
        }
        ```

        @property serverTokenRevocationEndpoint
        @type String
        @default null
      */
      serverTokenRevocationEndpoint: null,

      /**
        Sets whether the authenticator automatically refreshes access tokens.

        This value can be configured via the global environment object:

        ```js
        window.ENV = window.ENV || {};
        window.ENV['simple-auth-oauth2'] = {
          refreshAccessTokens: false
        }
        ```

        @property refreshAccessTokens
        @type Boolean
        @default true
      */
      refreshAccessTokens: true,

      /**
        @property _refreshTokenTimeout
        @private
      */
      _refreshTokenTimeout: null,

      /**
        @method init
        @private
      */
      init: function() {
        var globalConfig                   = getGlobalConfig('simple-auth-oauth2');
        this.serverTokenEndpoint           = globalConfig.serverTokenEndpoint || this.serverTokenEndpoint;
        this.serverTokenRevocationEndpoint = globalConfig.serverTokenRevocationEndpoint || this.serverTokenRevocationEndpoint;
        this.refreshAccessTokens           = globalConfig.refreshAccessTokens || this.refreshAccessTokens;
      },

      /**
        Restores the session from a set of session properties; __will return a
        resolving promise when there's a non-empty `access_token` in the `data`__
        and a rejecting promise otherwise.

        This method also schedules automatic token refreshing when there are values
        for `refresh_token` and `expires_in` in the `data` and automatic token
        refreshing is not disabled (see
        [`Authenticators.OAuth2#refreshAccessTokens`](#SimpleAuth-Authenticators-OAuth2-refreshAccessTokens)).

        @method restore
        @param {Object} data The data to restore the session from
        @return {Ember.RSVP.Promise} A promise that when it resolves results in the session being authenticated
      */
      restore: function(data) {
        var _this = this;
        return new Ember.RSVP.Promise(function(resolve, reject) {
          var now = (new Date()).getTime();
          if (!Ember.isEmpty(data.expires_at) && data.expires_at < now) {
            if (_this.refreshAccessTokens) {
              _this.refreshAccessToken(data.expires_in, data.refresh_token).then(function(data) {
                resolve(data);
              }, reject);
            } else {
              reject();
            }
          } else {
            if (Ember.isEmpty(data.access_token)) {
              reject();
            } else {
              _this.scheduleAccessTokenRefresh(data.expires_in, data.expires_at, data.refresh_token);
              resolve(data);
            }
          }
        });
      },

      /**
        Authenticates the session with the specified `credentials`; the credentials
        are send via a _"POST"_ request to the
        [`Authenticators.OAuth2#serverTokenEndpoint`](#SimpleAuth-Authenticators-OAuth2-serverTokenEndpoint)
        and if they are valid the server returns an access token in response (see
        http://tools.ietf.org/html/rfc6749#section-4.3). __If the credentials are
        valid and authentication succeeds, a promise that resolves with the
        server's response is returned__, otherwise a promise that rejects with the
        error is returned.

        This method also schedules automatic token refreshing when there are values
        for `refresh_token` and `expires_in` in the server response and automatic
        token refreshing is not disabled (see
        [`Authenticators.OAuth2#refreshAccessTokens`](#SimpleAuth-Authenticators-OAuth2-refreshAccessTokens)).

        @method authenticate
        @param {Object} credentials The credentials to authenticate the session with
        @return {Ember.RSVP.Promise} A promise that resolves when an access token is successfully acquired from the server and rejects otherwise
      */
      authenticate: function(credentials) {
        var _this = this;
        return new Ember.RSVP.Promise(function(resolve, reject) {
          var data = { grant_type: 'password', username: credentials.identification, password: credentials.password };
          _this.makeRequest(_this.serverTokenEndpoint, data).then(function(response) {
            Ember.run(function() {
              var expiresAt = _this.absolutizeExpirationTime(response.expires_in);
              _this.scheduleAccessTokenRefresh(response.expires_in, expiresAt, response.refresh_token);
              if (!Ember.isEmpty(expiresAt)) {
                response = Ember.merge(response, { expires_at: expiresAt });
              }
              resolve(response);
            });
          }, function(xhr, status, error) {
            Ember.run(function() {
              reject(xhr.responseJSON || xhr.responseText);
            });
          });
        });
      },

      /**
        Cancels any outstanding automatic token refreshes and returns a resolving
        promise.

        @method invalidate
        @param {Object} data The data of the session to be invalidated
        @return {Ember.RSVP.Promise} A resolving promise
      */
      invalidate: function(data) {
        var _this = this;
        function success(resolve) {
          Ember.run.cancel(_this._refreshTokenTimeout);
          delete _this._refreshTokenTimeout;
          resolve();
        }
        return new Ember.RSVP.Promise(function(resolve, reject) {
          if (!Ember.isEmpty(_this.serverTokenRevocationEndpoint)) {
            var requests = [];
            Ember.A(['access_token', 'refresh_token']).forEach(function(tokenType) {
              if (!Ember.isEmpty(data[tokenType])) {
                requests.push(_this.makeRequest(_this.serverTokenRevocationEndpoint, {
                  token_type_hint: tokenType, token: data[tokenType]
                }));
              }
            });
            Ember.$.when.apply(Ember.$, requests).always(function(responses) {
              success(resolve);
            });
          } else {
            success(resolve);
          }
        });
      },

      /**
        Sends an `AJAX` request to the `url`. This will always be a _"POST"_
        request with content type _"application/x-www-form-urlencoded"_ as
        specified in [RFC 6749](http://tools.ietf.org/html/rfc6749).

        This method is not meant to be used directly but serves as an extension
        point to e.g. add _"Client Credentials"_ (see
        [RFC 6749, section 2.3](http://tools.ietf.org/html/rfc6749#section-2.3)).

        @method makeRequest
        @param {Object} url The url to send the request to
        @param {Object} data The data to send with the request, e.g. username and password or the refresh token
        @return {Deferred object} A Deferred object (see [the jQuery docs](http://api.jquery.com/category/deferred-object/)) that is compatible to Ember.RSVP.Promise; will resolve if the request succeeds, reject otherwise
        @protected
      */
      makeRequest: function(url, data) {
        if (!isSecureUrl(url)) {
          Ember.Logger.warn('Credentials are transmitted via an insecure connection - use HTTPS to keep them secure.');
        }
        return Ember.$.ajax({
          url:         url,
          type:        'POST',
          data:        data,
          dataType:    'json',
          contentType: 'application/x-www-form-urlencoded'
        });
      },

      /**
        @method scheduleAccessTokenRefresh
        @private
      */
      scheduleAccessTokenRefresh: function(expiresIn, expiresAt, refreshToken) {
        var _this = this;
        if (this.refreshAccessTokens) {
          var now = (new Date()).getTime();
          if (Ember.isEmpty(expiresAt) && !Ember.isEmpty(expiresIn)) {
            expiresAt = new Date(now + expiresIn * 1000).getTime();
          }
          var offset = (Math.floor(Math.random() * 5) + 5) * 1000;
          if (!Ember.isEmpty(refreshToken) && !Ember.isEmpty(expiresAt) && expiresAt > now - offset) {
            Ember.run.cancel(this._refreshTokenTimeout);
            delete this._refreshTokenTimeout;
            if (!Ember.testing) {
              this._refreshTokenTimeout = Ember.run.later(this, this.refreshAccessToken, expiresIn, refreshToken, expiresAt - now - offset);
            }
          }
        }
      },

      /**
        @method refreshAccessToken
        @private
      */
      refreshAccessToken: function(expiresIn, refreshToken) {
        var _this = this;
        var data  = { grant_type: 'refresh_token', refresh_token: refreshToken };
        return new Ember.RSVP.Promise(function(resolve, reject) {
          _this.makeRequest(_this.serverTokenEndpoint, data).then(function(response) {
            Ember.run(function() {
              expiresIn     = response.expires_in || expiresIn;
              refreshToken  = response.refresh_token || refreshToken;
              var expiresAt = _this.absolutizeExpirationTime(expiresIn);
              var data      = Ember.merge(response, { expires_in: expiresIn, expires_at: expiresAt, refresh_token: refreshToken });
              _this.scheduleAccessTokenRefresh(expiresIn, null, refreshToken);
              _this.trigger('sessionDataUpdated', data);
              resolve(data);
            });
          }, function(xhr, status, error) {
            Ember.Logger.warn('Access token could not be refreshed - server responded with ' + error + '.');
            reject();
          });
        });
      },

      /**
        @method absolutizeExpirationTime
        @private
      */
      absolutizeExpirationTime: function(expiresIn) {
        if (!Ember.isEmpty(expiresIn)) {
          return new Date((new Date().getTime()) + expiresIn * 1000).getTime();
        }
      }
    });
  });
define("simple-auth-oauth2/authorizers/oauth2", 
  ["simple-auth/authorizers/base","simple-auth/utils/is-secure-url","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Base = __dependency1__["default"];
    var isSecureUrl = __dependency2__["default"];

    /**
      Authorizer that conforms to OAuth 2
      ([RFC 6749](http://tools.ietf.org/html/rfc6749)) by sending a bearer token
      ([RFC 6749](http://tools.ietf.org/html/rfc6750)) in the request's
      `Authorization` header.

      _The factory for this authorizer is registered as
      `'simple-auth-authorizer:oauth2-bearer'` in Ember's container._

      @class OAuth2
      @namespace SimpleAuth.Authorizers
      @module simple-auth-devise/authorizers/oauth2
      @extends Base
    */
    __exports__["default"] = Base.extend({
      /**
        Authorizes an XHR request by sending the `access_token` property from the
        session as a bearer token in the `Authorization` header:

        ```
        Authorization: Bearer <access_token>
        ```

        @method authorize
        @param {jqXHR} jqXHR The XHR request to authorize (see http://api.jquery.com/jQuery.ajax/#jqXHR)
        @param {Object} requestOptions The options as provided to the `$.ajax` method (see http://api.jquery.com/jQuery.ajaxPrefilter/)
      */
      authorize: function(jqXHR, requestOptions) {
        var accessToken = this.get('session.access_token');
        if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
          if (!isSecureUrl(requestOptions.url)) {
            Ember.Logger.warn('Credentials are transmitted via an insecure connection - use HTTPS to keep them secure.');
          }
          jqXHR.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        }
      }
    });
  });
define("simple-auth-oauth2/ember", 
  ["./initializer"],
  function(__dependency1__) {
    "use strict";
    var initializer = __dependency1__["default"];

    Ember.onLoad('Ember.Application', function(Application) {
      Application.initializer(initializer);
    });
  });
define("simple-auth-oauth2/initializer", 
  ["simple-auth-oauth2/authenticators/oauth2","simple-auth-oauth2/authorizers/oauth2","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Authenticator = __dependency1__["default"];
    var Authorizer = __dependency2__["default"];

    __exports__["default"] = {
      name:       'simple-auth-oauth2',
      before:     'simple-auth',
      initialize: function(container, application) {
        container.register('simple-auth-authorizer:oauth2-bearer', Authorizer);
        container.register('simple-auth-authenticator:oauth2-password-grant', Authenticator);
      }
    };
  });
define('simple-auth/authenticators/base',  ['exports'], function(__exports__) {
  __exports__['default'] = global.SimpleAuth.Authenticators.Base;
});
define('simple-auth/authorizers/base',  ['exports'], function(__exports__) {
  __exports__['default'] = global.SimpleAuth.Authorizers.Base;
});
define('simple-auth/utils/is-secure-url',  ['exports'], function(__exports__) {
  __exports__['default'] = global.SimpleAuth.Utils.isSecureUrl;
});
define('simple-auth/utils/get-global-config',  ['exports'], function(__exports__) {
  __exports__['default'] = global.SimpleAuth.Utils.getGlobalConfig;
});

var initializer   = requireModule('simple-auth-oauth2/initializer')['default'];
var Authenticator = requireModule('simple-auth-oauth2/authenticators/oauth2')['default'];
var Authorizer    = requireModule('simple-auth-oauth2/authorizers/oauth2')['default'];

global.SimpleAuth.Authenticators.OAuth2 = Authenticator;
global.SimpleAuth.Authorizers.OAuth2    = Authorizer;

requireModule('simple-auth-oauth2/ember');
})((typeof global !== 'undefined') ? global : window);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/**
 * This script gives you the zone info key representing your device's time zone setting.
 *
 * @name jsTimezoneDetect
 * @version 1.0.5
 * @author Jon Nylander
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://pellepim.bitbucket.org/jstz/
 *
 * Copyright (c) Jon Nylander
 */

/*jslint undef: true */
/*global console, exports*/

(function(root) {
  /**
   * Namespace to hold all the code for timezone detection.
   */
  var jstz = (function () {
      'use strict';
      var HEMISPHERE_SOUTH = 's',
          
          /**
           * Gets the offset in minutes from UTC for a certain date.
           * @param {Date} date
           * @returns {Number}
           */
          get_date_offset = function (date) {
              var offset = -date.getTimezoneOffset();
              return (offset !== null ? offset : 0);
          },

          get_date = function (year, month, date) {
              var d = new Date();
              if (year !== undefined) {
                d.setFullYear(year);
              }
              d.setMonth(month);
              d.setDate(date);
              return d;
          },

          get_january_offset = function (year) {
              return get_date_offset(get_date(year, 0 ,2));
          },

          get_june_offset = function (year) {
              return get_date_offset(get_date(year, 5, 2));
          },

          /**
           * Private method.
           * Checks whether a given date is in daylight saving time.
           * If the date supplied is after august, we assume that we're checking
           * for southern hemisphere DST.
           * @param {Date} date
           * @returns {Boolean}
           */
          date_is_dst = function (date) {
              var is_southern = date.getMonth() > 7,
                  base_offset = is_southern ? get_june_offset(date.getFullYear()) : 
                                              get_january_offset(date.getFullYear()),
                  date_offset = get_date_offset(date),
                  is_west = base_offset < 0,
                  dst_offset = base_offset - date_offset;
                  
              if (!is_west && !is_southern) {
                  return dst_offset < 0;
              }

              return dst_offset !== 0;
          },

          /**
           * This function does some basic calculations to create information about
           * the user's timezone. It uses REFERENCE_YEAR as a solid year for which
           * the script has been tested rather than depend on the year set by the
           * client device.
           *
           * Returns a key that can be used to do lookups in jstz.olson.timezones.
           * eg: "720,1,2". 
           *
           * @returns {String}
           */

          lookup_key = function () {
              var january_offset = get_january_offset(),
                  june_offset = get_june_offset(),
                  diff = january_offset - june_offset;

              if (diff < 0) {
                  return january_offset + ",1";
              } else if (diff > 0) {
                  return june_offset + ",1," + HEMISPHERE_SOUTH;
              }

              return january_offset + ",0";
          },

          /**
           * Uses get_timezone_info() to formulate a key to use in the olson.timezones dictionary.
           *
           * Returns a primitive object on the format:
           * {'timezone': TimeZone, 'key' : 'the key used to find the TimeZone object'}
           *
           * @returns Object
           */
          determine = function () {
              var key = lookup_key();
              return new jstz.TimeZone(jstz.olson.timezones[key]);
          },

          /**
           * This object contains information on when daylight savings starts for
           * different timezones.
           *
           * The list is short for a reason. Often we do not have to be very specific
           * to single out the correct timezone. But when we do, this list comes in
           * handy.
           *
           * Each value is a date denoting when daylight savings starts for that timezone.
           */
          dst_start_for = function (tz_name) {

            var ru_pre_dst_change = new Date(2010, 6, 15, 1, 0, 0, 0), // In 2010 Russia had DST, this allows us to detect Russia :)
                dst_starts = {
                    'America/Denver': new Date(2011, 2, 13, 3, 0, 0, 0),
                    'America/Mazatlan': new Date(2011, 3, 3, 3, 0, 0, 0),
                    'America/Chicago': new Date(2011, 2, 13, 3, 0, 0, 0),
                    'America/Mexico_City': new Date(2011, 3, 3, 3, 0, 0, 0),
                    'America/Asuncion': new Date(2012, 9, 7, 3, 0, 0, 0),
                    'America/Santiago': new Date(2012, 9, 3, 3, 0, 0, 0),
                    'America/Campo_Grande': new Date(2012, 9, 21, 5, 0, 0, 0),
                    'America/Montevideo': new Date(2011, 9, 2, 3, 0, 0, 0),
                    'America/Sao_Paulo': new Date(2011, 9, 16, 5, 0, 0, 0),
                    'America/Los_Angeles': new Date(2011, 2, 13, 8, 0, 0, 0),
                    'America/Santa_Isabel': new Date(2011, 3, 5, 8, 0, 0, 0),
                    'America/Havana': new Date(2012, 2, 10, 2, 0, 0, 0),
                    'America/New_York': new Date(2012, 2, 10, 7, 0, 0, 0),
                    'Europe/Helsinki': new Date(2013, 2, 31, 5, 0, 0, 0),
                    'Pacific/Auckland': new Date(2011, 8, 26, 7, 0, 0, 0),
                    'America/Halifax': new Date(2011, 2, 13, 6, 0, 0, 0),
                    'America/Goose_Bay': new Date(2011, 2, 13, 2, 1, 0, 0),
                    'America/Miquelon': new Date(2011, 2, 13, 5, 0, 0, 0),
                    'America/Godthab': new Date(2011, 2, 27, 1, 0, 0, 0),
                    'Europe/Moscow': ru_pre_dst_change,
                    'Asia/Amman': new Date(2013, 2, 29, 1, 0, 0, 0),
                    'Asia/Beirut': new Date(2013, 2, 31, 2, 0, 0, 0),
                    'Asia/Damascus': new Date(2013, 3, 6, 2, 0, 0, 0),
                    'Asia/Jerusalem': new Date(2013, 2, 29, 5, 0, 0, 0),
                    'Asia/Yekaterinburg': ru_pre_dst_change,
                    'Asia/Omsk': ru_pre_dst_change,
                    'Asia/Krasnoyarsk': ru_pre_dst_change,
                    'Asia/Irkutsk': ru_pre_dst_change,
                    'Asia/Yakutsk': ru_pre_dst_change,
                    'Asia/Vladivostok': ru_pre_dst_change,
                    'Asia/Baku': new Date(2013, 2, 31, 4, 0, 0),
                    'Asia/Yerevan': new Date(2013, 2, 31, 3, 0, 0),
                    'Asia/Kamchatka': ru_pre_dst_change,
                    'Asia/Gaza': new Date(2010, 2, 27, 4, 0, 0),
                    'Africa/Cairo': new Date(2010, 4, 1, 3, 0, 0),
                    'Europe/Minsk': ru_pre_dst_change,
                    'Pacific/Apia': new Date(2010, 10, 1, 1, 0, 0, 0),
                    'Pacific/Fiji': new Date(2010, 11, 1, 0, 0, 0),
                    'Australia/Perth': new Date(2008, 10, 1, 1, 0, 0, 0)
                };

              return dst_starts[tz_name];
          };

      return {
          determine: determine,
          date_is_dst: date_is_dst,
          dst_start_for: dst_start_for 
      };
  }());

  /**
   * Simple object to perform ambiguity check and to return name of time zone.
   */
  jstz.TimeZone = function (tz_name) {
      'use strict';
        /**
         * The keys in this object are timezones that we know may be ambiguous after
         * a preliminary scan through the olson_tz object.
         *
         * The array of timezones to compare must be in the order that daylight savings
         * starts for the regions.
         */
      var AMBIGUITIES = {
              'America/Denver':       ['America/Denver', 'America/Mazatlan'],
              'America/Chicago':      ['America/Chicago', 'America/Mexico_City'],
              'America/Santiago':     ['America/Santiago', 'America/Asuncion', 'America/Campo_Grande'],
              'America/Montevideo':   ['America/Montevideo', 'America/Sao_Paulo'],
              'Asia/Beirut':          ['Asia/Amman', 'Asia/Jerusalem', 'Asia/Beirut', 'Europe/Helsinki','Asia/Damascus'],
              'Pacific/Auckland':     ['Pacific/Auckland', 'Pacific/Fiji'],
              'America/Los_Angeles':  ['America/Los_Angeles', 'America/Santa_Isabel'],
              'America/New_York':     ['America/Havana', 'America/New_York'],
              'America/Halifax':      ['America/Goose_Bay', 'America/Halifax'],
              'America/Godthab':      ['America/Miquelon', 'America/Godthab'],
              'Asia/Dubai':           ['Europe/Moscow'],
              'Asia/Dhaka':           ['Asia/Yekaterinburg'],
              'Asia/Jakarta':         ['Asia/Omsk'],
              'Asia/Shanghai':        ['Asia/Krasnoyarsk', 'Australia/Perth'],
              'Asia/Tokyo':           ['Asia/Irkutsk'],
              'Australia/Brisbane':   ['Asia/Yakutsk'],
              'Pacific/Noumea':       ['Asia/Vladivostok'],
              'Pacific/Tarawa':       ['Asia/Kamchatka', 'Pacific/Fiji'],
              'Pacific/Tongatapu':    ['Pacific/Apia'],
              'Asia/Baghdad':         ['Europe/Minsk'],
              'Asia/Baku':            ['Asia/Yerevan','Asia/Baku'],
              'Africa/Johannesburg':  ['Asia/Gaza', 'Africa/Cairo']
          },

          timezone_name = tz_name,
          
          /**
           * Checks if a timezone has possible ambiguities. I.e timezones that are similar.
           *
           * For example, if the preliminary scan determines that we're in America/Denver.
           * We double check here that we're really there and not in America/Mazatlan.
           *
           * This is done by checking known dates for when daylight savings start for different
           * timezones during 2010 and 2011.
           */
          ambiguity_check = function () {
              var ambiguity_list = AMBIGUITIES[timezone_name],
                  length = ambiguity_list.length,
                  i = 0,
                  tz = ambiguity_list[0];

              for (; i < length; i += 1) {
                  tz = ambiguity_list[i];

                  if (jstz.date_is_dst(jstz.dst_start_for(tz))) {
                      timezone_name = tz;
                      return;
                  }
              }
          },

          /**
           * Checks if it is possible that the timezone is ambiguous.
           */
          is_ambiguous = function () {
              return typeof (AMBIGUITIES[timezone_name]) !== 'undefined';
          };

      if (is_ambiguous()) {
          ambiguity_check();
      }

      return {
          name: function () {
              return timezone_name;
          }
      };
  };

  jstz.olson = {};

  /*
   * The keys in this dictionary are comma separated as such:
   *
   * First the offset compared to UTC time in minutes.
   *
   * Then a flag which is 0 if the timezone does not take daylight savings into account and 1 if it
   * does.
   *
   * Thirdly an optional 's' signifies that the timezone is in the southern hemisphere,
   * only interesting for timezones with DST.
   *
   * The mapped arrays is used for constructing the jstz.TimeZone object from within
   * jstz.determine_timezone();
   */
  jstz.olson.timezones = {
      '-720,0'   : 'Pacific/Majuro',
      '-660,0'   : 'Pacific/Pago_Pago',
      '-600,1'   : 'America/Adak',
      '-600,0'   : 'Pacific/Honolulu',
      '-570,0'   : 'Pacific/Marquesas',
      '-540,0'   : 'Pacific/Gambier',
      '-540,1'   : 'America/Anchorage',
      '-480,1'   : 'America/Los_Angeles',
      '-480,0'   : 'Pacific/Pitcairn',
      '-420,0'   : 'America/Phoenix',
      '-420,1'   : 'America/Denver',
      '-360,0'   : 'America/Guatemala',
      '-360,1'   : 'America/Chicago',
      '-360,1,s' : 'Pacific/Easter',
      '-300,0'   : 'America/Bogota',
      '-300,1'   : 'America/New_York',
      '-270,0'   : 'America/Caracas',
      '-240,1'   : 'America/Halifax',
      '-240,0'   : 'America/Santo_Domingo',
      '-240,1,s' : 'America/Santiago',
      '-210,1'   : 'America/St_Johns',
      '-180,1'   : 'America/Godthab',
      '-180,0'   : 'America/Argentina/Buenos_Aires',
      '-180,1,s' : 'America/Montevideo',
      '-120,0'   : 'America/Noronha',
      '-120,1'   : 'America/Noronha',
      '-60,1'    : 'Atlantic/Azores',
      '-60,0'    : 'Atlantic/Cape_Verde',
      '0,0'      : 'UTC',
      '0,1'      : 'Europe/London',
      '60,1'     : 'Europe/Berlin',
      '60,0'     : 'Africa/Lagos',
      '60,1,s'   : 'Africa/Windhoek',
      '120,1'    : 'Asia/Beirut',
      '120,0'    : 'Africa/Johannesburg',
      '180,0'    : 'Asia/Baghdad',
      '180,1'    : 'Europe/Moscow',
      '210,1'    : 'Asia/Tehran',
      '240,0'    : 'Asia/Dubai',
      '240,1'    : 'Asia/Baku',
      '270,0'    : 'Asia/Kabul',
      '300,1'    : 'Asia/Yekaterinburg',
      '300,0'    : 'Asia/Karachi',
      '330,0'    : 'Asia/Kolkata',
      '345,0'    : 'Asia/Kathmandu',
      '360,0'    : 'Asia/Dhaka',
      '360,1'    : 'Asia/Omsk',
      '390,0'    : 'Asia/Rangoon',
      '420,1'    : 'Asia/Krasnoyarsk',
      '420,0'    : 'Asia/Jakarta',
      '480,0'    : 'Asia/Shanghai',
      '480,1'    : 'Asia/Irkutsk',
      '525,0'    : 'Australia/Eucla',
      '525,1,s'  : 'Australia/Eucla',
      '540,1'    : 'Asia/Yakutsk',
      '540,0'    : 'Asia/Tokyo',
      '570,0'    : 'Australia/Darwin',
      '570,1,s'  : 'Australia/Adelaide',
      '600,0'    : 'Australia/Brisbane',
      '600,1'    : 'Asia/Vladivostok',
      '600,1,s'  : 'Australia/Sydney',
      '630,1,s'  : 'Australia/Lord_Howe',
      '660,1'    : 'Asia/Kamchatka',
      '660,0'    : 'Pacific/Noumea',
      '690,0'    : 'Pacific/Norfolk',
      '720,1,s'  : 'Pacific/Auckland',
      '720,0'    : 'Pacific/Tarawa',
      '765,1,s'  : 'Pacific/Chatham',
      '780,0'    : 'Pacific/Tongatapu',
      '780,1,s'  : 'Pacific/Apia',
      '840,0'    : 'Pacific/Kiritimati'
  };

  if (typeof exports !== 'undefined') {
    exports.jstz = jstz;
  } else {
    root.jstz = jstz;
  }
})(this);

//! moment.js
//! version : 2.8.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {
    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = '2.8.3',
        // the global-scope this is NOT the global object in Node.js
        globalScope = typeof global !== 'undefined' ? global : this,
        oldGlobalMoment,
        round = Math.round,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for locale config files
        locales = {},

        // extra moment internal properties (plugins register props here)
        momentProperties = [],

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        parseTokenOrdinal = /\d{1,2}/,

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-15', '30']
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // default relative time thresholds
        relativeTimeThresholds = {
            s: 45,  // seconds to minute
            m: 45,  // minutes to hour
            h: 22,  // hours to day
            d: 26,  // days to month
            M: 11   // months to year
        },

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.localeData().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.localeData().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.localeData().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.localeData().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.localeData().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        deprecations = {},

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

    // Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2: return a != null ? a : b;
            case 3: return a != null ? a : b != null ? b : c;
            default: throw new Error('Implement me');
        }
    }

    function hasOwnProp(a, b) {
        return hasOwnProperty.call(a, b);
    }

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function printMsg(msg) {
        if (moment.suppressDeprecationWarnings === false &&
                typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
            if (firstTime) {
                printMsg(msg);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            printMsg(msg);
            deprecations[name] = true;
        }
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.localeData().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Locale() {
    }

    // Moment prototype object
    function Moment(config, skipOverflow) {
        if (skipOverflow !== false) {
            checkOverflow(config);
        }
        copyConfig(this, config);
        this._d = new Date(+config._d);
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = moment.localeData();

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = from._pf;
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = makeAs(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = moment.duration(val, period);
            addOrSubtractDurationFromMoment(this, dur, direction);
            return this;
        };
    }

    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return Object.prototype.toString.call(input) === '[object Date]' ||
            input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment._locale[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment._locale, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0;
            }
        }
        return m._isValid;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && hasModule) {
            try {
                oldLocale = moment.locale();
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
                moment.locale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function makeAs(input, model) {
        return model._isUTC ? moment(input).zone(model._offset || 0) :
            moment(input).local();
    }

    /************************************
        Locale
    ************************************/


    extend(Locale.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        },

        _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                if (!this._monthsParse[i]) {
                    mom = moment.utc([2000, i]);
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LT : 'h:mm A',
            L : 'MM/DD/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY LT',
            LLLL : 'dddd, MMMM D, YYYY LT'
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom) : output;
        },

        _relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },

        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },

        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace('%d', number);
        },
        _ordinal : '%d',

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) {
                return parseTokenOneDigit;
            }
            /* falls through */
        case 'SS':
            if (strict) {
                return parseTokenTwoDigits;
            }
            /* falls through */
        case 'SSS':
            if (strict) {
                return parseTokenThreeDigits;
            }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return config._locale._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return parseTokenOrdinal;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
            return a;
        }
    }

    function timezoneMinutesFromString(string) {
        string = string || '';
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = config._locale.monthsParse(input);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(input, 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = config._locale.isPM(input);
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        // WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = config._locale.weekdaysParse(input);
            // if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
        // WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
        // Apply timezone offset from input. The actual zone can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
        }
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {
        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return;
        }

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // handle am pm
        if (config._isPm && config._a[HOUR] < 12) {
            config._a[HOUR] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[HOUR] === 12) {
            config._a[HOUR] = 0;
        }

        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function parseISO(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be 'T' or undefined
                    config._f = isoDates[i][0] + (match[6] || ' ');
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += 'Z';
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config);
        }
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function makeDateFromInput(config) {
        var input = config._i, matched;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            dateFromConfig(config);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, locale) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = locale.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = moment.duration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            years = round(duration.as('y')),

            args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh', hours] ||
                days === 1 && ['d'] ||
                days < relativeTimeThresholds.d && ['dd', days] ||
                months === 1 && ['M'] ||
                months < relativeTimeThresholds.M && ['MM', months] ||
                years === 1 && ['y'] || ['yy', years];

        args[2] = withoutSuffix;
        args[3] = +posNegDuration > 0;
        args[4] = locale;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || moment.localeData(config._l);

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (moment.isMoment(input)) {
            return new Moment(input, true);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        return new Moment(config);
    }

    moment = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = locale;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i);
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    };

    moment.max = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    };

    // creating with utc
    moment.utc = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso,
            diffRes;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        } else if (typeof duration === 'object' &&
                ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(moment(duration.from), moment(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // constant that refers to the ISO standard
    moment.ISO_8601 = function () {};

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function (threshold, limit) {
        if (relativeTimeThresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return relativeTimeThresholds[threshold];
        }
        relativeTimeThresholds[threshold] = limit;
        return true;
    };

    moment.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        function (key, value) {
            return moment.locale(key, value);
        }
    );

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    moment.locale = function (key, values) {
        var data;
        if (key) {
            if (typeof(values) !== 'undefined') {
                data = moment.defineLocale(key, values);
            }
            else {
                data = moment.localeData(key);
            }

            if (data) {
                moment.duration._locale = moment._locale = data;
            }
        }

        return moment._locale._abbr;
    };

    moment.defineLocale = function (name, values) {
        if (values !== null) {
            values.abbr = name;
            if (!locales[name]) {
                locales[name] = new Locale();
            }
            locales[name].set(values);

            // backwards compat for now: also set the locale
            moment.locale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    };

    moment.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        function (key) {
            return moment.localeData(key);
        }
    );

    // returns locale data
    moment.localeData = function (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return moment._locale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null && hasOwnProp(obj, '_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {
            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function (keepLocalTime) {
            return this.zone(0, keepLocalTime);
        },

        local : function (keepLocalTime) {
            if (this._isUTC) {
                this.zone(0, keepLocalTime);
                this._isUTC = false;

                if (keepLocalTime) {
                    this.add(this._dateTzOffset(), 'm');
                }
            }
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.localeData().postformat(output);
        },

        add : createAdder(1, 'add'),

        subtract : createAdder(-1, 'subtract'),

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output, daysAdjust;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                daysAdjust = (this - moment(this).startOf('month')) -
                    (that - moment(that).startOf('month'));
                // same as above but with zones, to negate all dst
                daysAdjust -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4;
                output += daysAdjust / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function (time) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're zone'd or not.
            var now = time || moment(),
                sod = makeAs(now, this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.localeData().calendar(format, this));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf : function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
        },

        isAfter: function (input, units) {
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this > +input;
            } else {
                return +this.clone().startOf(units) > +moment(input).startOf(units);
            }
        },

        isBefore: function (input, units) {
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this < +input;
            } else {
                return +this.clone().startOf(units) < +moment(input).startOf(units);
            }
        },

        isSame: function (input, units) {
            units = normalizeUnits(units || 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this === +input;
            } else {
                return +this.clone().startOf(units) === +makeAs(input, this).startOf(units);
            }
        },

        min: deprecate(
                 'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
                 function (other) {
                     other = moment.apply(null, arguments);
                     return other < this ? this : other;
                 }
         ),

        max: deprecate(
                'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
                function (other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }
        ),

        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[zone(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist int zone
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        zone : function (input, keepLocalTime) {
            var offset = this._offset || 0,
                localAdjust;
            if (input != null) {
                if (typeof input === 'string') {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = this._dateTzOffset();
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.subtract(localAdjust, 'm');
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(offset - input, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
            } else {
                return this._isUTC ? offset : this._dateTzOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? 'UTC' : '';
        },

        zoneName : function () {
            return this._isUTC ? 'Coordinated Universal Time' : '';
        },

        parseZone : function () {
            if (this._tzm) {
                this.zone(this._tzm);
            } else if (typeof this._i === 'string') {
                this.zone(this._i);
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).zone();
            }

            return (this.zone() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        week : function (input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                this[units](value);
            }
            return this;
        },

        // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.
        locale : function (key) {
            var newLocaleData;

            if (key === undefined) {
                return this._locale._abbr;
            } else {
                newLocaleData = moment.localeData(key);
                if (newLocaleData != null) {
                    this._locale = newLocaleData;
                }
                return this;
            }
        },

        lang : deprecate(
            'moment().lang() is deprecated. Use moment().localeData() instead.',
            function (key) {
                if (key === undefined) {
                    return this.localeData();
                } else {
                    return this.locale(key);
                }
            }
        ),

        localeData : function () {
            return this._locale;
        },

        _dateTzOffset : function () {
            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return Math.round(this._d.getTimezoneOffset() / 15) * 15;
        }
    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    function daysToYears (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        return days * 400 / 146097;
    }

    function yearsToDays (years) {
        // years * 365 + absRound(years / 4) -
        //     absRound(years / 100) + absRound(years / 400);
        return years * 146097 / 400;
    }

    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years = 0;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);

            // Accurately convert days to years, assume start from year 0.
            years = absRound(daysToYears(days));
            days -= absRound(yearsToDays(years));

            // 30 days to a month
            // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
            months += absRound(days / 30);
            days %= 30;

            // 12 months -> 1 year
            years += absRound(months / 12);
            months %= 12;

            data.days = days;
            data.months = months;
            data.years = years;
        },

        abs : function () {
            this._milliseconds = Math.abs(this._milliseconds);
            this._days = Math.abs(this._days);
            this._months = Math.abs(this._months);

            this._data.milliseconds = Math.abs(this._data.milliseconds);
            this._data.seconds = Math.abs(this._data.seconds);
            this._data.minutes = Math.abs(this._data.minutes);
            this._data.hours = Math.abs(this._data.hours);
            this._data.months = Math.abs(this._data.months);
            this._data.years = Math.abs(this._data.years);

            return this;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var output = relativeTime(this, !withSuffix, this.localeData());

            if (withSuffix) {
                output = this.localeData().pastFuture(+this, output);
            }

            return this.localeData().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            var days, months;
            units = normalizeUnits(units);

            if (units === 'month' || units === 'year') {
                days = this._days + this._milliseconds / 864e5;
                months = this._months + daysToYears(days) * 12;
                return units === 'month' ? months : months / 12;
            } else {
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + yearsToDays(this._months / 12);
                switch (units) {
                    case 'week': return days / 7 + this._milliseconds / 6048e5;
                    case 'day': return days + this._milliseconds / 864e5;
                    case 'hour': return days * 24 + this._milliseconds / 36e5;
                    case 'minute': return days * 24 * 60 + this._milliseconds / 6e4;
                    case 'second': return days * 24 * 60 * 60 + this._milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                    case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
                    default: throw new Error('Unknown unit ' + units);
                }
            }
        },

        lang : moment.fn.lang,
        locale : moment.fn.locale,

        toIsoString : deprecate(
            'toIsoString() is deprecated. Please use toISOString() instead ' +
            '(notice the capitals)',
            function () {
                return this.toISOString();
            }
        ),

        toISOString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        },

        localeData : function () {
            return this._locale;
        }
    });

    moment.duration.fn.toString = moment.duration.fn.toISOString;

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    for (i in unitMillisecondFactors) {
        if (hasOwnProp(unitMillisecondFactors, i)) {
            makeDurationGetter(i.toLowerCase());
        }
    }

    moment.duration.fn.asMilliseconds = function () {
        return this.as('ms');
    };
    moment.duration.fn.asSeconds = function () {
        return this.as('s');
    };
    moment.duration.fn.asMinutes = function () {
        return this.as('m');
    };
    moment.duration.fn.asHours = function () {
        return this.as('h');
    };
    moment.duration.fn.asDays = function () {
        return this.as('d');
    };
    moment.duration.fn.asWeeks = function () {
        return this.as('weeks');
    };
    moment.duration.fn.asMonths = function () {
        return this.as('M');
    };
    moment.duration.fn.asYears = function () {
        return this.as('y');
    };

    /************************************
        Default Locale
    ************************************/


    // Set default locale, other locale will inherit from English.
    moment.locale('en', {
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LOCALES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    'Accessing Moment through the global scope is ' +
                    'deprecated, and will be removed in an upcoming ' +
                    'release.',
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === 'function' && define.amd) {
        define('moment', function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);

//! moment-timezone.js
//! version : 0.2.2
//! author : Tim Wood
//! license : MIT
//! github.com/moment/moment-timezone

(function (root, factory) {
	"use strict";

	/*global define*/
	if (typeof define === 'function' && define.amd) {
		define(['moment'], factory);                 // AMD
	} else if (typeof exports === 'object') {
		module.exports = factory(require('moment')); // Node
	} else {
		factory(root.moment);                        // Browser
	}
}(this, function (moment) {
	"use strict";

	// Do not load moment-timezone a second time.
	if (moment.tz !== undefined) { return moment; }

	var VERSION = "0.2.2",
		zones = {},
		links = {},

		momentVersion = moment.version.split('.'),
		major = +momentVersion[0],
		minor = +momentVersion[1];

	// Moment.js version check
	if (major < 2 || (major === 2 && minor < 6)) {
		logError('Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ' + moment.version + '. See momentjs.com');
	}

	/************************************
		Unpacking
	************************************/

	function charCodeToInt(charCode) {
		if (charCode > 96) {
			return charCode - 87;
		} else if (charCode > 64) {
			return charCode - 29;
		}
		return charCode - 48;
	}

	function unpackBase60(string) {
		var i = 0,
			parts = string.split('.'),
			whole = parts[0],
			fractional = parts[1] || '',
			multiplier = 1,
			num,
			out = 0,
			sign = 1;

		// handle negative numbers
		if (string.charCodeAt(0) === 45) {
			i = 1;
			sign = -1;
		}

		// handle digits before the decimal
		for (i; i < whole.length; i++) {
			num = charCodeToInt(whole.charCodeAt(i));
			out = 60 * out + num;
		}

		// handle digits after the decimal
		for (i = 0; i < fractional.length; i++) {
			multiplier = multiplier / 60;
			num = charCodeToInt(fractional.charCodeAt(i));
			out += num * multiplier;
		}

		return out * sign;
	}

	function arrayToInt (array) {
		for (var i = 0; i < array.length; i++) {
			array[i] = unpackBase60(array[i]);
		}
	}

	function intToUntil (array, length) {
		for (var i = 0; i < length; i++) {
			array[i] = Math.round((array[i - 1] || 0) + (array[i] * 60000)); // minutes to milliseconds
		}

		array[length - 1] = Infinity;
	}

	function mapIndices (source, indices) {
		var out = [], i;

		for (i = 0; i < indices.length; i++) {
			out[i] = source[indices[i]];
		}

		return out;
	}

	function unpack (string) {
		var data = string.split('|'),
			offsets = data[2].split(' '),
			indices = data[3].split(''),
			untils  = data[4].split(' ');

		arrayToInt(offsets);
		arrayToInt(indices);
		arrayToInt(untils);

		intToUntil(untils, indices.length);

		return {
			name    : data[0],
			abbrs   : mapIndices(data[1].split(' '), indices),
			offsets : mapIndices(offsets, indices),
			untils  : untils
		};
	}

	/************************************
		Zone object
	************************************/

	function Zone (packedString) {
		if (packedString) {
			this._set(unpack(packedString));
		}
	}

	Zone.prototype = {
		_set : function (unpacked) {
			this.name    = unpacked.name;
			this.abbrs   = unpacked.abbrs;
			this.untils  = unpacked.untils;
			this.offsets = unpacked.offsets;
		},

		_index : function (timestamp) {
			var target = +timestamp,
				untils = this.untils,
				i;

			for (i = 0; i < untils.length; i++) {
				if (target < untils[i]) {
					return i;
				}
			}
		},

		parse : function (timestamp) {
			var target  = +timestamp,
				offsets = this.offsets,
				untils  = this.untils,
				max     = untils.length - 1,
				offset, offsetNext, offsetPrev, i;

			for (i = 0; i < max; i++) {
				offset     = offsets[i];
				offsetNext = offsets[i + 1];
				offsetPrev = offsets[i ? i - 1 : i];

				if (offset < offsetNext && tz.moveAmbiguousForward) {
					offset = offsetNext;
				} else if (offset > offsetPrev && tz.moveInvalidForward) {
					offset = offsetPrev;
				}

				if (target < untils[i] - (offset * 60000)) {
					return offsets[i];
				}
			}

			return offsets[max];
		},

		abbr : function (mom) {
			return this.abbrs[this._index(mom)];
		},

		offset : function (mom) {
			return this.offsets[this._index(mom)];
		}
	};

	/************************************
		Global Methods
	************************************/

	function normalizeName (name) {
		return (name || '').toLowerCase().replace(/\//g, '_');
	}

	function addZone (packed) {
		var i, zone, zoneName;

		if (typeof packed === "string") {
			packed = [packed];
		}

		for (i = 0; i < packed.length; i++) {
			zone = new Zone(packed[i]);
			zoneName = normalizeName(zone.name);
			zones[zoneName] = zone;
			upgradeLinksToZones(zoneName);
		}
	}

	function getZone (name) {
		return zones[normalizeName(name)] || null;
	}

	function getNames () {
		var i, out = [];

		for (i in zones) {
			if (zones.hasOwnProperty(i) && zones[i]) {
				out.push(zones[i].name);
			}
		}

		return out.sort();
	}

	function addLink (aliases) {
		var i, alias;

		if (typeof aliases === "string") {
			aliases = [aliases];
		}

		for (i = 0; i < aliases.length; i++) {
			alias = aliases[i].split('|');
			pushLink(alias[0], alias[1]);
			pushLink(alias[1], alias[0]);
		}
	}

	function upgradeLinksToZones (zoneName) {
		if (!links[zoneName]) {
			return;
		}

		var i,
			zone = zones[zoneName],
			linkNames = links[zoneName];

		for (i = 0; i < linkNames.length; i++) {
			copyZoneWithName(zone, linkNames[i]);
		}

		links[zoneName] = null;
	}

	function copyZoneWithName (zone, name) {
		var linkZone = zones[normalizeName(name)] = new Zone();
		linkZone._set(zone);
		linkZone.name = name;
	}

	function pushLink (zoneName, linkName) {
		zoneName = normalizeName(zoneName);

		if (zones[zoneName]) {
			copyZoneWithName(zones[zoneName], linkName);
		} else {
			links[zoneName] = links[zoneName] || [];
			links[zoneName].push(linkName);
		}
	}

	function loadData (data) {
		addZone(data.zones);
		addLink(data.links);
		tz.dataVersion = data.version;
	}

	function zoneExists (name) {
		if (!zoneExists.didShowError) {
			zoneExists.didShowError = true;
				logError("moment.tz.zoneExists('" + name + "') has been deprecated in favor of !moment.tz.zone('" + name + "')");
		}
		return !!getZone(name);
	}

	function needsOffset (m) {
		return !!(m._a && (m._tzm === undefined));
	}

	function logError (message) {
		if (typeof console !== 'undefined' && typeof console.error === 'function') {
			console.error(message);
		}
	}

	/************************************
		moment.tz namespace
	************************************/

	function tz () {
		var args = Array.prototype.slice.call(arguments, 0, -1),
			name = arguments[arguments.length - 1],
			zone = getZone(name),
			out  = moment.utc.apply(null, args);

		if (zone && needsOffset(out)) {
			out.add(zone.parse(out), 'minutes');
		}

		out.tz(name);

		return out;
	}

	tz.version      = VERSION;
	tz.dataVersion  = '';
	tz._zones       = zones;
	tz._links       = links;
	tz.add          = addZone;
	tz.link         = addLink;
	tz.load         = loadData;
	tz.zone         = getZone;
	tz.zoneExists   = zoneExists; // deprecated in 0.1.0
	tz.names        = getNames;
	tz.Zone         = Zone;
	tz.unpack       = unpack;
	tz.unpackBase60 = unpackBase60;
	tz.needsOffset  = needsOffset;
	tz.moveInvalidForward   = true;
	tz.moveAmbiguousForward = false;

	/************************************
		Interface with Moment.js
	************************************/

	var fn = moment.fn;

	moment.tz = tz;

	moment.updateOffset = function (mom, keepTime) {
		var offset;
		if (mom._z) {
			offset = mom._z.offset(mom);
			if (Math.abs(offset) < 16) {
				offset = offset / 60;
			}
			mom.zone(offset, keepTime);
		}
	};

	fn.tz = function (name) {
		if (name) {
			this._z = getZone(name);
			if (this._z) {
				moment.updateOffset(this);
			} else {
				logError("Moment Timezone has no data for " + name + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
			}
			return this;
		}
		if (this._z) { return this._z.name; }
	};

	function abbrWrap (old) {
		return function () {
			if (this._z) { return this._z.abbr(this); }
			return old.call(this);
		};
	}

	function resetZoneWrap (old) {
		return function () {
			this._z = null;
			return old.apply(this, arguments);
		};
	}

	fn.zoneName = abbrWrap(fn.zoneName);
	fn.zoneAbbr = abbrWrap(fn.zoneAbbr);
	fn.utc      = resetZoneWrap(fn.utc);

	// Cloning a moment should include the _z property.
	var momentProperties = moment.momentProperties;
	if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
		// moment 2.8.1+
		momentProperties.push('_z');
		momentProperties.push('_a');
	} else if (momentProperties) {
		// moment 2.7.0
		momentProperties._z = null;
	}

	loadData({
		"version": "2014g",
		"zones": [
			"Africa/Abidjan|GMT|0|0|",
			"Africa/Addis_Ababa|EAT|-30|0|",
			"Africa/Algiers|CET|-10|0|",
			"Africa/Bangui|WAT|-10|0|",
			"Africa/Blantyre|CAT|-20|0|",
			"Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010|1Cby0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0 1o10 jz0 gN0 pb0 1qN0 dX0 e10 xz0 1o10 bb0 e10 An0 1o10 5z0 e10 FX0 1o10 2L0 e10 IL0 1C10 Lz0",
			"Africa/Casablanca|WET WEST|0 -10|01010101010101010101010101010101010101010|1Cco0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uo0 e00 DA0 11A0 rA0 e00 Jc0 WM0 m00 gM0 M00 WM0 jc0 e00 RA0 11A0 dA0 e00 Uo0 11A0 800 gM0 Xc0",
			"Africa/Ceuta|CET CEST|-10 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"Africa/Johannesburg|SAST|-20|0|",
			"Africa/Tripoli|EET CET CEST|-20 -10 -20|0120|1IlA0 TA0 1o00",
			"Africa/Windhoek|WAST WAT|-20 -10|01010101010101010101010|1C1c0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0",
			"America/Adak|HAST HADT|a0 90|01010101010101010101010|1BR00 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1BQX0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Anguilla|AST|40|0|",
			"America/Araguaina|BRT BRST|30 20|010|1IdD0 Lz0",
			"America/Argentina/Buenos_Aires|ART|30|0|",
			"America/Asuncion|PYST PYT|30 40|01010101010101010101010|1C430 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0",
			"America/Atikokan|EST|50|0|",
			"America/Bahia|BRT BRST|30 20|010|1FJf0 Rb0",
			"America/Bahia_Banderas|MST CDT CST|70 50 60|01212121212121212121212|1C1l0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0",
			"America/Belem|BRT|30|0|",
			"America/Belize|CST|60|0|",
			"America/Boa_Vista|AMT|40|0|",
			"America/Bogota|COT|50|0|",
			"America/Boise|MST MDT|70 60|01010101010101010101010|1BQV0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Campo_Grande|AMST AMT|30 40|01010101010101010101010|1BIr0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10",
			"America/Cancun|CST CDT|60 50|01010101010101010101010|1C1k0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0",
			"America/Caracas|VET|4u|0|",
			"America/Cayenne|GFT|30|0|",
			"America/Chicago|CST CDT|60 50|01010101010101010101010|1BQU0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Chihuahua|MST MDT|70 60|01010101010101010101010|1C1l0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0",
			"America/Creston|MST|70|0|",
			"America/Dawson|PST PDT|80 70|01010101010101010101010|1BQW0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Detroit|EST EDT|50 40|01010101010101010101010|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Eirunepe|AMT ACT|40 50|01|1KLE0",
			"America/Glace_Bay|AST ADT|40 30|01010101010101010101010|1BQS0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Godthab|WGT WGST|30 20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"America/Goose_Bay|AST ADT|40 30|01010101010101010101010|1BQQ1 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Grand_Turk|EST EDT AST|50 40 40|01010101012|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Guayaquil|ECT|50|0|",
			"America/Guyana|GYT|40|0|",
			"America/Havana|CST CDT|50 40|01010101010101010101010|1BQR0 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0",
			"America/La_Paz|BOT|40|0|",
			"America/Lima|PET|50|0|",
			"America/Metlakatla|PST|80|0|",
			"America/Miquelon|PMST PMDT|30 20|01010101010101010101010|1BQR0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Montevideo|UYST UYT|20 30|01010101010101010101010|1BQQ0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10",
			"America/Noronha|FNT|20|0|",
			"America/North_Dakota/Beulah|MST MDT CST CDT|70 60 60 50|01232323232323232323232|1BQV0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Paramaribo|SRT|30|0|",
			"America/Port-au-Prince|EST EDT|50 40|0101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Santa_Isabel|PST PDT|80 70|01010101010101010101010|1C1m0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0",
			"America/Santiago|CLST CLT|30 40|01010101010101010101010|1C1f0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0",
			"America/Sao_Paulo|BRST BRT|20 30|01010101010101010101010|1BIq0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10",
			"America/Scoresbysund|EGT EGST|10 0|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1BQPv 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"Antarctica/Casey|CAST AWST|-b0 -80|0101|1BN30 40P0 KL0",
			"Antarctica/Davis|DAVT DAVT|-50 -70|0101|1BPw0 3Wn0 KN0",
			"Antarctica/DumontDUrville|DDUT|-a0|0|",
			"Antarctica/Macquarie|AEDT MIST|-b0 -b0|01|1C140",
			"Antarctica/Mawson|MAWT|-50|0|",
			"Antarctica/McMurdo|NZDT NZST|-d0 -c0|01010101010101010101010|1C120 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00",
			"Antarctica/Rothera|ROTT|30|0|",
			"Antarctica/Syowa|SYOT|-30|0|",
			"Antarctica/Troll|UTC CEST|0 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"Antarctica/Vostok|VOST|-60|0|",
			"Asia/Aden|AST|-30|0|",
			"Asia/Almaty|ALMT|-60|0|",
			"Asia/Amman|EET EEST|-20 -30|010101010101010101010|1BVy0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0",
			"Asia/Anadyr|ANAT ANAST ANAT|-c0 -c0 -b0|0120|1BWe0 1qN0 WM0",
			"Asia/Aqtau|AQTT|-50|0|",
			"Asia/Ashgabat|TMT|-50|0|",
			"Asia/Baku|AZT AZST|-40 -50|01010101010101010101010|1BWo0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"Asia/Bangkok|ICT|-70|0|",
			"Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1BWm0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0",
			"Asia/Bishkek|KGT|-60|0|",
			"Asia/Brunei|BNT|-80|0|",
			"Asia/Calcutta|IST|-5u|0|",
			"Asia/Chita|YAKT YAKST YAKT IRKT|-90 -a0 -a0 -80|01023|1BWh0 1qM0 WM0 8Hz0",
			"Asia/Choibalsan|CHOT|-80|0|",
			"Asia/Chongqing|CST|-80|0|",
			"Asia/Dacca|BDT|-60|0|",
			"Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1C0m0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0",
			"Asia/Dili|TLT|-90|0|",
			"Asia/Dubai|GST|-40|0|",
			"Asia/Dushanbe|TJT|-50|0|",
			"Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1BVW1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0",
			"Asia/Hebron|EET EEST|-20 -30|0101010101010101010101010|1BVy0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0",
			"Asia/Hong_Kong|HKT|-80|0|",
			"Asia/Hovd|HOVT|-70|0|",
			"Asia/Irkutsk|IRKT IRKST IRKT|-80 -90 -90|01020|1BWi0 1qM0 WM0 8Hz0",
			"Asia/Istanbul|EET EEST|-20 -30|01010101010101010101010|1BWp0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"Asia/Jakarta|WIB|-70|0|",
			"Asia/Jayapura|WIT|-90|0|",
			"Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1BVA0 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0",
			"Asia/Kabul|AFT|-4u|0|",
			"Asia/Kamchatka|PETT PETST PETT|-c0 -c0 -b0|0120|1BWe0 1qN0 WM0",
			"Asia/Karachi|PKT|-50|0|",
			"Asia/Kashgar|XJT|-60|0|",
			"Asia/Kathmandu|NPT|-5J|0|",
			"Asia/Khandyga|VLAT VLAST VLAT YAKT YAKT|-a0 -b0 -b0 -a0 -90|010234|1BWg0 1qM0 WM0 17V0 7zD0",
			"Asia/Krasnoyarsk|KRAT KRAST KRAT|-70 -80 -80|01020|1BWj0 1qM0 WM0 8Hz0",
			"Asia/Kuala_Lumpur|MYT|-80|0|",
			"Asia/Magadan|MAGT MAGST MAGT MAGT|-b0 -c0 -c0 -a0|01023|1BWf0 1qM0 WM0 8Hz0",
			"Asia/Makassar|WITA|-80|0|",
			"Asia/Manila|PHT|-80|0|",
			"Asia/Nicosia|EET EEST|-20 -30|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"Asia/Novokuznetsk|KRAT NOVST NOVT NOVT|-70 -70 -60 -70|01230|1BWj0 1qN0 WM0 8Hz0",
			"Asia/Novosibirsk|NOVT NOVST NOVT|-60 -70 -70|01020|1BWk0 1qM0 WM0 8Hz0",
			"Asia/Omsk|OMST OMSST OMST|-60 -70 -70|01020|1BWk0 1qM0 WM0 8Hz0",
			"Asia/Oral|ORAT|-50|0|",
			"Asia/Pyongyang|KST|-90|0|",
			"Asia/Qyzylorda|QYZT|-60|0|",
			"Asia/Rangoon|MMT|-6u|0|",
			"Asia/Sakhalin|SAKT SAKST SAKT|-a0 -b0 -b0|01020|1BWg0 1qM0 WM0 8Hz0",
			"Asia/Samarkand|UZT|-50|0|",
			"Asia/Singapore|SGT|-80|0|",
			"Asia/Srednekolymsk|MAGT MAGST MAGT SRET|-b0 -c0 -c0 -b0|01023|1BWf0 1qM0 WM0 8Hz0",
			"Asia/Tbilisi|GET|-40|0|",
			"Asia/Tehran|IRST IRDT|-3u -4u|01010101010101010101010|1BTUu 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0",
			"Asia/Thimbu|BTT|-60|0|",
			"Asia/Tokyo|JST|-90|0|",
			"Asia/Ulaanbaatar|ULAT|-80|0|",
			"Asia/Ust-Nera|MAGT MAGST MAGT VLAT VLAT|-b0 -c0 -c0 -b0 -a0|010234|1BWf0 1qM0 WM0 17V0 7zD0",
			"Asia/Vladivostok|VLAT VLAST VLAT|-a0 -b0 -b0|01020|1BWg0 1qM0 WM0 8Hz0",
			"Asia/Yakutsk|YAKT YAKST YAKT|-90 -a0 -a0|01020|1BWh0 1qM0 WM0 8Hz0",
			"Asia/Yekaterinburg|YEKT YEKST YEKT|-50 -60 -60|01020|1BWl0 1qM0 WM0 8Hz0",
			"Asia/Yerevan|AMT AMST|-40 -50|01010|1BWm0 1qM0 WM0 1qM0",
			"Atlantic/Azores|AZOT AZOST|10 0|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"Atlantic/Canary|WET WEST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"Atlantic/Cape_Verde|CVT|10|0|",
			"Atlantic/South_Georgia|GST|20|0|",
			"Atlantic/Stanley|FKST FKT|30 40|010|1C6R0 U10",
			"Australia/ACT|AEDT AEST|-b0 -a0|01010101010101010101010|1C140 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0",
			"Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1C14u 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0",
			"Australia/Brisbane|AEST|-a0|0|",
			"Australia/Darwin|ACST|-9u|0|",
			"Australia/Eucla|ACWST|-8J|0|",
			"Australia/LHI|LHDT LHST|-b0 -au|01010101010101010101010|1C130 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu",
			"Australia/Perth|AWST|-80|0|",
			"Chile/EasterIsland|EASST EAST|50 60|01010101010101010101010|1C1f0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0",
			"Eire|GMT IST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"Etc/GMT+1|GMT+1|10|0|",
			"Etc/GMT+10|GMT+10|a0|0|",
			"Etc/GMT+11|GMT+11|b0|0|",
			"Etc/GMT+12|GMT+12|c0|0|",
			"Etc/GMT+2|GMT+2|20|0|",
			"Etc/GMT+3|GMT+3|30|0|",
			"Etc/GMT+4|GMT+4|40|0|",
			"Etc/GMT+5|GMT+5|50|0|",
			"Etc/GMT+6|GMT+6|60|0|",
			"Etc/GMT+7|GMT+7|70|0|",
			"Etc/GMT+8|GMT+8|80|0|",
			"Etc/GMT+9|GMT+9|90|0|",
			"Etc/GMT-1|GMT-1|-10|0|",
			"Etc/GMT-10|GMT-10|-a0|0|",
			"Etc/GMT-11|GMT-11|-b0|0|",
			"Etc/GMT-12|GMT-12|-c0|0|",
			"Etc/GMT-13|GMT-13|-d0|0|",
			"Etc/GMT-14|GMT-14|-e0|0|",
			"Etc/GMT-2|GMT-2|-20|0|",
			"Etc/GMT-3|GMT-3|-30|0|",
			"Etc/GMT-4|GMT-4|-40|0|",
			"Etc/GMT-5|GMT-5|-50|0|",
			"Etc/GMT-6|GMT-6|-60|0|",
			"Etc/GMT-7|GMT-7|-70|0|",
			"Etc/GMT-8|GMT-8|-80|0|",
			"Etc/GMT-9|GMT-9|-90|0|",
			"Etc/UCT|UCT|0|0|",
			"Etc/UTC|UTC|0|0|",
			"Europe/Belfast|GMT BST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"Europe/Kaliningrad|EET EEST FET|-20 -30 -30|01020|1BWo0 1qM0 WM0 8Hz0",
			"Europe/Minsk|EET EEST FET|-20 -30 -30|0102|1BWo0 1qM0 WM0",
			"Europe/Moscow|MSK MSD MSK|-30 -40 -40|01020|1BWn0 1qM0 WM0 8Hz0",
			"Europe/Samara|SAMT SAMST SAMT|-40 -40 -30|0120|1BWm0 1qN0 WM0",
			"Europe/Simferopol|EET EEST MSK MSK|-20 -30 -40 -30|01010101023|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0",
			"Europe/Volgograd|MSK MSK|-30 -40|01010|1BWn0 1qM0 WM0 8Hz0",
			"HST|HST|a0|0|",
			"Indian/Chagos|IOT|-60|0|",
			"Indian/Christmas|CXT|-70|0|",
			"Indian/Cocos|CCT|-6u|0|",
			"Indian/Kerguelen|TFT|-50|0|",
			"Indian/Mahe|SCT|-40|0|",
			"Indian/Maldives|MVT|-50|0|",
			"Indian/Mauritius|MUT|-40|0|",
			"Indian/Reunion|RET|-40|0|",
			"Kwajalein|MHT|-c0|0|",
			"MET|MET MEST|-10 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"NZ-CHAT|CHADT CHAST|-dJ -cJ|01010101010101010101010|1C120 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00",
			"Pacific/Apia|SST SDT WSDT WSST|b0 a0 -e0 -d0|01012323232323232323232|1Dbn0 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00",
			"Pacific/Chuuk|CHUT|-a0|0|",
			"Pacific/Efate|VUT|-b0|0|",
			"Pacific/Enderbury|PHOT|-d0|0|",
			"Pacific/Fakaofo|TKT TKT|b0 -d0|01|1Gfn0",
			"Pacific/Fiji|FJST FJT|-d0 -c0|01010101010101010101010|1BWe0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1Q10 xz0 1Q10 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Q10 xz0 1Q10",
			"Pacific/Funafuti|TVT|-c0|0|",
			"Pacific/Galapagos|GALT|60|0|",
			"Pacific/Gambier|GAMT|90|0|",
			"Pacific/Guadalcanal|SBT|-b0|0|",
			"Pacific/Guam|ChST|-a0|0|",
			"Pacific/Kiritimati|LINT|-e0|0|",
			"Pacific/Kosrae|KOST|-b0|0|",
			"Pacific/Marquesas|MART|9u|0|",
			"Pacific/Midway|SST|b0|0|",
			"Pacific/Nauru|NRT|-c0|0|",
			"Pacific/Niue|NUT|b0|0|",
			"Pacific/Norfolk|NFT|-bu|0|",
			"Pacific/Noumea|NCT|-b0|0|",
			"Pacific/Palau|PWT|-90|0|",
			"Pacific/Pohnpei|PONT|-b0|0|",
			"Pacific/Port_Moresby|PGT|-a0|0|",
			"Pacific/Rarotonga|CKT|a0|0|",
			"Pacific/Tahiti|TAHT|a0|0|",
			"Pacific/Tarawa|GILT|-c0|0|",
			"Pacific/Tongatapu|TOT|-d0|0|",
			"Pacific/Wake|WAKT|-c0|0|",
			"Pacific/Wallis|WFT|-c0|0|"
		],
		"links": [
			"Africa/Abidjan|Africa/Accra",
			"Africa/Abidjan|Africa/Bamako",
			"Africa/Abidjan|Africa/Banjul",
			"Africa/Abidjan|Africa/Bissau",
			"Africa/Abidjan|Africa/Conakry",
			"Africa/Abidjan|Africa/Dakar",
			"Africa/Abidjan|Africa/Freetown",
			"Africa/Abidjan|Africa/Lome",
			"Africa/Abidjan|Africa/Monrovia",
			"Africa/Abidjan|Africa/Nouakchott",
			"Africa/Abidjan|Africa/Ouagadougou",
			"Africa/Abidjan|Africa/Sao_Tome",
			"Africa/Abidjan|Africa/Timbuktu",
			"Africa/Abidjan|America/Danmarkshavn",
			"Africa/Abidjan|Atlantic/Reykjavik",
			"Africa/Abidjan|Atlantic/St_Helena",
			"Africa/Abidjan|Etc/GMT",
			"Africa/Abidjan|Etc/GMT+0",
			"Africa/Abidjan|Etc/GMT-0",
			"Africa/Abidjan|Etc/GMT0",
			"Africa/Abidjan|Etc/Greenwich",
			"Africa/Abidjan|GMT",
			"Africa/Abidjan|GMT+0",
			"Africa/Abidjan|GMT-0",
			"Africa/Abidjan|GMT0",
			"Africa/Abidjan|Greenwich",
			"Africa/Abidjan|Iceland",
			"Africa/Addis_Ababa|Africa/Asmara",
			"Africa/Addis_Ababa|Africa/Asmera",
			"Africa/Addis_Ababa|Africa/Dar_es_Salaam",
			"Africa/Addis_Ababa|Africa/Djibouti",
			"Africa/Addis_Ababa|Africa/Juba",
			"Africa/Addis_Ababa|Africa/Kampala",
			"Africa/Addis_Ababa|Africa/Khartoum",
			"Africa/Addis_Ababa|Africa/Mogadishu",
			"Africa/Addis_Ababa|Africa/Nairobi",
			"Africa/Addis_Ababa|Indian/Antananarivo",
			"Africa/Addis_Ababa|Indian/Comoro",
			"Africa/Addis_Ababa|Indian/Mayotte",
			"Africa/Algiers|Africa/Tunis",
			"Africa/Bangui|Africa/Brazzaville",
			"Africa/Bangui|Africa/Douala",
			"Africa/Bangui|Africa/Kinshasa",
			"Africa/Bangui|Africa/Lagos",
			"Africa/Bangui|Africa/Libreville",
			"Africa/Bangui|Africa/Luanda",
			"Africa/Bangui|Africa/Malabo",
			"Africa/Bangui|Africa/Ndjamena",
			"Africa/Bangui|Africa/Niamey",
			"Africa/Bangui|Africa/Porto-Novo",
			"Africa/Blantyre|Africa/Bujumbura",
			"Africa/Blantyre|Africa/Gaborone",
			"Africa/Blantyre|Africa/Harare",
			"Africa/Blantyre|Africa/Kigali",
			"Africa/Blantyre|Africa/Lubumbashi",
			"Africa/Blantyre|Africa/Lusaka",
			"Africa/Blantyre|Africa/Maputo",
			"Africa/Cairo|Egypt",
			"Africa/Casablanca|Africa/El_Aaiun",
			"Africa/Ceuta|Arctic/Longyearbyen",
			"Africa/Ceuta|Atlantic/Jan_Mayen",
			"Africa/Ceuta|CET",
			"Africa/Ceuta|Europe/Amsterdam",
			"Africa/Ceuta|Europe/Andorra",
			"Africa/Ceuta|Europe/Belgrade",
			"Africa/Ceuta|Europe/Berlin",
			"Africa/Ceuta|Europe/Bratislava",
			"Africa/Ceuta|Europe/Brussels",
			"Africa/Ceuta|Europe/Budapest",
			"Africa/Ceuta|Europe/Busingen",
			"Africa/Ceuta|Europe/Copenhagen",
			"Africa/Ceuta|Europe/Gibraltar",
			"Africa/Ceuta|Europe/Ljubljana",
			"Africa/Ceuta|Europe/Luxembourg",
			"Africa/Ceuta|Europe/Madrid",
			"Africa/Ceuta|Europe/Malta",
			"Africa/Ceuta|Europe/Monaco",
			"Africa/Ceuta|Europe/Oslo",
			"Africa/Ceuta|Europe/Paris",
			"Africa/Ceuta|Europe/Podgorica",
			"Africa/Ceuta|Europe/Prague",
			"Africa/Ceuta|Europe/Rome",
			"Africa/Ceuta|Europe/San_Marino",
			"Africa/Ceuta|Europe/Sarajevo",
			"Africa/Ceuta|Europe/Skopje",
			"Africa/Ceuta|Europe/Stockholm",
			"Africa/Ceuta|Europe/Tirane",
			"Africa/Ceuta|Europe/Vaduz",
			"Africa/Ceuta|Europe/Vatican",
			"Africa/Ceuta|Europe/Vienna",
			"Africa/Ceuta|Europe/Warsaw",
			"Africa/Ceuta|Europe/Zagreb",
			"Africa/Ceuta|Europe/Zurich",
			"Africa/Ceuta|Poland",
			"Africa/Johannesburg|Africa/Maseru",
			"Africa/Johannesburg|Africa/Mbabane",
			"Africa/Tripoli|Libya",
			"America/Adak|America/Atka",
			"America/Adak|US/Aleutian",
			"America/Anchorage|America/Juneau",
			"America/Anchorage|America/Nome",
			"America/Anchorage|America/Sitka",
			"America/Anchorage|America/Yakutat",
			"America/Anchorage|US/Alaska",
			"America/Anguilla|America/Antigua",
			"America/Anguilla|America/Aruba",
			"America/Anguilla|America/Barbados",
			"America/Anguilla|America/Blanc-Sablon",
			"America/Anguilla|America/Curacao",
			"America/Anguilla|America/Dominica",
			"America/Anguilla|America/Grenada",
			"America/Anguilla|America/Guadeloupe",
			"America/Anguilla|America/Kralendijk",
			"America/Anguilla|America/Lower_Princes",
			"America/Anguilla|America/Marigot",
			"America/Anguilla|America/Martinique",
			"America/Anguilla|America/Montserrat",
			"America/Anguilla|America/Port_of_Spain",
			"America/Anguilla|America/Puerto_Rico",
			"America/Anguilla|America/Santo_Domingo",
			"America/Anguilla|America/St_Barthelemy",
			"America/Anguilla|America/St_Kitts",
			"America/Anguilla|America/St_Lucia",
			"America/Anguilla|America/St_Thomas",
			"America/Anguilla|America/St_Vincent",
			"America/Anguilla|America/Tortola",
			"America/Anguilla|America/Virgin",
			"America/Argentina/Buenos_Aires|America/Argentina/Catamarca",
			"America/Argentina/Buenos_Aires|America/Argentina/ComodRivadavia",
			"America/Argentina/Buenos_Aires|America/Argentina/Cordoba",
			"America/Argentina/Buenos_Aires|America/Argentina/Jujuy",
			"America/Argentina/Buenos_Aires|America/Argentina/La_Rioja",
			"America/Argentina/Buenos_Aires|America/Argentina/Mendoza",
			"America/Argentina/Buenos_Aires|America/Argentina/Rio_Gallegos",
			"America/Argentina/Buenos_Aires|America/Argentina/Salta",
			"America/Argentina/Buenos_Aires|America/Argentina/San_Juan",
			"America/Argentina/Buenos_Aires|America/Argentina/San_Luis",
			"America/Argentina/Buenos_Aires|America/Argentina/Tucuman",
			"America/Argentina/Buenos_Aires|America/Argentina/Ushuaia",
			"America/Argentina/Buenos_Aires|America/Buenos_Aires",
			"America/Argentina/Buenos_Aires|America/Catamarca",
			"America/Argentina/Buenos_Aires|America/Cordoba",
			"America/Argentina/Buenos_Aires|America/Jujuy",
			"America/Argentina/Buenos_Aires|America/Mendoza",
			"America/Argentina/Buenos_Aires|America/Rosario",
			"America/Atikokan|America/Cayman",
			"America/Atikokan|America/Coral_Harbour",
			"America/Atikokan|America/Jamaica",
			"America/Atikokan|America/Panama",
			"America/Atikokan|EST",
			"America/Atikokan|Jamaica",
			"America/Belem|America/Fortaleza",
			"America/Belem|America/Maceio",
			"America/Belem|America/Recife",
			"America/Belem|America/Santarem",
			"America/Belize|America/Costa_Rica",
			"America/Belize|America/El_Salvador",
			"America/Belize|America/Guatemala",
			"America/Belize|America/Managua",
			"America/Belize|America/Regina",
			"America/Belize|America/Swift_Current",
			"America/Belize|America/Tegucigalpa",
			"America/Belize|Canada/East-Saskatchewan",
			"America/Belize|Canada/Saskatchewan",
			"America/Boa_Vista|America/Manaus",
			"America/Boa_Vista|America/Porto_Velho",
			"America/Boa_Vista|Brazil/West",
			"America/Boise|America/Cambridge_Bay",
			"America/Boise|America/Denver",
			"America/Boise|America/Edmonton",
			"America/Boise|America/Inuvik",
			"America/Boise|America/Ojinaga",
			"America/Boise|America/Shiprock",
			"America/Boise|America/Yellowknife",
			"America/Boise|Canada/Mountain",
			"America/Boise|MST7MDT",
			"America/Boise|Navajo",
			"America/Boise|US/Mountain",
			"America/Campo_Grande|America/Cuiaba",
			"America/Cancun|America/Merida",
			"America/Cancun|America/Mexico_City",
			"America/Cancun|America/Monterrey",
			"America/Cancun|Mexico/General",
			"America/Chicago|America/Indiana/Knox",
			"America/Chicago|America/Indiana/Tell_City",
			"America/Chicago|America/Knox_IN",
			"America/Chicago|America/Matamoros",
			"America/Chicago|America/Menominee",
			"America/Chicago|America/North_Dakota/Center",
			"America/Chicago|America/North_Dakota/New_Salem",
			"America/Chicago|America/Rainy_River",
			"America/Chicago|America/Rankin_Inlet",
			"America/Chicago|America/Resolute",
			"America/Chicago|America/Winnipeg",
			"America/Chicago|CST6CDT",
			"America/Chicago|Canada/Central",
			"America/Chicago|US/Central",
			"America/Chicago|US/Indiana-Starke",
			"America/Chihuahua|America/Mazatlan",
			"America/Chihuahua|Mexico/BajaSur",
			"America/Creston|America/Dawson_Creek",
			"America/Creston|America/Hermosillo",
			"America/Creston|America/Phoenix",
			"America/Creston|MST",
			"America/Creston|US/Arizona",
			"America/Dawson|America/Ensenada",
			"America/Dawson|America/Los_Angeles",
			"America/Dawson|America/Tijuana",
			"America/Dawson|America/Vancouver",
			"America/Dawson|America/Whitehorse",
			"America/Dawson|Canada/Pacific",
			"America/Dawson|Canada/Yukon",
			"America/Dawson|Mexico/BajaNorte",
			"America/Dawson|PST8PDT",
			"America/Dawson|US/Pacific",
			"America/Dawson|US/Pacific-New",
			"America/Detroit|America/Fort_Wayne",
			"America/Detroit|America/Indiana/Indianapolis",
			"America/Detroit|America/Indiana/Marengo",
			"America/Detroit|America/Indiana/Petersburg",
			"America/Detroit|America/Indiana/Vevay",
			"America/Detroit|America/Indiana/Vincennes",
			"America/Detroit|America/Indiana/Winamac",
			"America/Detroit|America/Indianapolis",
			"America/Detroit|America/Iqaluit",
			"America/Detroit|America/Kentucky/Louisville",
			"America/Detroit|America/Kentucky/Monticello",
			"America/Detroit|America/Louisville",
			"America/Detroit|America/Montreal",
			"America/Detroit|America/Nassau",
			"America/Detroit|America/New_York",
			"America/Detroit|America/Nipigon",
			"America/Detroit|America/Pangnirtung",
			"America/Detroit|America/Thunder_Bay",
			"America/Detroit|America/Toronto",
			"America/Detroit|Canada/Eastern",
			"America/Detroit|EST5EDT",
			"America/Detroit|US/East-Indiana",
			"America/Detroit|US/Eastern",
			"America/Detroit|US/Michigan",
			"America/Eirunepe|America/Porto_Acre",
			"America/Eirunepe|America/Rio_Branco",
			"America/Eirunepe|Brazil/Acre",
			"America/Glace_Bay|America/Halifax",
			"America/Glace_Bay|America/Moncton",
			"America/Glace_Bay|America/Thule",
			"America/Glace_Bay|Atlantic/Bermuda",
			"America/Glace_Bay|Canada/Atlantic",
			"America/Havana|Cuba",
			"America/Metlakatla|Pacific/Pitcairn",
			"America/Noronha|Brazil/DeNoronha",
			"America/Santiago|Antarctica/Palmer",
			"America/Santiago|Chile/Continental",
			"America/Sao_Paulo|Brazil/East",
			"America/St_Johns|Canada/Newfoundland",
			"Antarctica/McMurdo|Antarctica/South_Pole",
			"Antarctica/McMurdo|NZ",
			"Antarctica/McMurdo|Pacific/Auckland",
			"Asia/Aden|Asia/Baghdad",
			"Asia/Aden|Asia/Bahrain",
			"Asia/Aden|Asia/Kuwait",
			"Asia/Aden|Asia/Qatar",
			"Asia/Aden|Asia/Riyadh",
			"Asia/Aqtau|Asia/Aqtobe",
			"Asia/Ashgabat|Asia/Ashkhabad",
			"Asia/Bangkok|Asia/Ho_Chi_Minh",
			"Asia/Bangkok|Asia/Phnom_Penh",
			"Asia/Bangkok|Asia/Saigon",
			"Asia/Bangkok|Asia/Vientiane",
			"Asia/Calcutta|Asia/Colombo",
			"Asia/Calcutta|Asia/Kolkata",
			"Asia/Chongqing|Asia/Chungking",
			"Asia/Chongqing|Asia/Harbin",
			"Asia/Chongqing|Asia/Macao",
			"Asia/Chongqing|Asia/Macau",
			"Asia/Chongqing|Asia/Shanghai",
			"Asia/Chongqing|Asia/Taipei",
			"Asia/Chongqing|PRC",
			"Asia/Chongqing|ROC",
			"Asia/Dacca|Asia/Dhaka",
			"Asia/Dubai|Asia/Muscat",
			"Asia/Hong_Kong|Hongkong",
			"Asia/Istanbul|Europe/Istanbul",
			"Asia/Istanbul|Turkey",
			"Asia/Jakarta|Asia/Pontianak",
			"Asia/Jerusalem|Asia/Tel_Aviv",
			"Asia/Jerusalem|Israel",
			"Asia/Kashgar|Asia/Urumqi",
			"Asia/Kathmandu|Asia/Katmandu",
			"Asia/Kuala_Lumpur|Asia/Kuching",
			"Asia/Makassar|Asia/Ujung_Pandang",
			"Asia/Nicosia|EET",
			"Asia/Nicosia|Europe/Athens",
			"Asia/Nicosia|Europe/Bucharest",
			"Asia/Nicosia|Europe/Chisinau",
			"Asia/Nicosia|Europe/Helsinki",
			"Asia/Nicosia|Europe/Kiev",
			"Asia/Nicosia|Europe/Mariehamn",
			"Asia/Nicosia|Europe/Nicosia",
			"Asia/Nicosia|Europe/Riga",
			"Asia/Nicosia|Europe/Sofia",
			"Asia/Nicosia|Europe/Tallinn",
			"Asia/Nicosia|Europe/Tiraspol",
			"Asia/Nicosia|Europe/Uzhgorod",
			"Asia/Nicosia|Europe/Vilnius",
			"Asia/Nicosia|Europe/Zaporozhye",
			"Asia/Pyongyang|Asia/Seoul",
			"Asia/Pyongyang|ROK",
			"Asia/Samarkand|Asia/Tashkent",
			"Asia/Singapore|Singapore",
			"Asia/Tehran|Iran",
			"Asia/Thimbu|Asia/Thimphu",
			"Asia/Tokyo|Japan",
			"Asia/Ulaanbaatar|Asia/Ulan_Bator",
			"Atlantic/Canary|Atlantic/Faeroe",
			"Atlantic/Canary|Atlantic/Faroe",
			"Atlantic/Canary|Atlantic/Madeira",
			"Atlantic/Canary|Europe/Lisbon",
			"Atlantic/Canary|Portugal",
			"Atlantic/Canary|WET",
			"Australia/ACT|Australia/Canberra",
			"Australia/ACT|Australia/Currie",
			"Australia/ACT|Australia/Hobart",
			"Australia/ACT|Australia/Melbourne",
			"Australia/ACT|Australia/NSW",
			"Australia/ACT|Australia/Sydney",
			"Australia/ACT|Australia/Tasmania",
			"Australia/ACT|Australia/Victoria",
			"Australia/Adelaide|Australia/Broken_Hill",
			"Australia/Adelaide|Australia/South",
			"Australia/Adelaide|Australia/Yancowinna",
			"Australia/Brisbane|Australia/Lindeman",
			"Australia/Brisbane|Australia/Queensland",
			"Australia/Darwin|Australia/North",
			"Australia/LHI|Australia/Lord_Howe",
			"Australia/Perth|Australia/West",
			"Chile/EasterIsland|Pacific/Easter",
			"Eire|Europe/Dublin",
			"Etc/UCT|UCT",
			"Etc/UTC|Etc/Universal",
			"Etc/UTC|Etc/Zulu",
			"Etc/UTC|UTC",
			"Etc/UTC|Universal",
			"Etc/UTC|Zulu",
			"Europe/Belfast|Europe/Guernsey",
			"Europe/Belfast|Europe/Isle_of_Man",
			"Europe/Belfast|Europe/Jersey",
			"Europe/Belfast|Europe/London",
			"Europe/Belfast|GB",
			"Europe/Belfast|GB-Eire",
			"Europe/Moscow|W-SU",
			"HST|Pacific/Honolulu",
			"HST|Pacific/Johnston",
			"HST|US/Hawaii",
			"Kwajalein|Pacific/Kwajalein",
			"Kwajalein|Pacific/Majuro",
			"NZ-CHAT|Pacific/Chatham",
			"Pacific/Chuuk|Pacific/Truk",
			"Pacific/Chuuk|Pacific/Yap",
			"Pacific/Guam|Pacific/Saipan",
			"Pacific/Midway|Pacific/Pago_Pago",
			"Pacific/Midway|Pacific/Samoa",
			"Pacific/Midway|US/Samoa",
			"Pacific/Pohnpei|Pacific/Ponape"
		]
	});


	return moment;
}));

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}).call(this);

/*global Ember*/

// Translated into javascript from https://github.com/ef4/ember-animation-demo on 7/25/14

/*
Copyright (c) 2014 Edward Faulkner <ef@alum.mit.edu>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var GrowingBox = Ember.Component.extend({
    transition: 'height 250ms ease-out',
    animateAtInsertion: false,

    layoutName: 'growing-box-layout',

    didInsertElement: function() {
        'use strict';
        var that = this;
        this._super();
        if (this.get('animateAtInsertion')) {
            this.enableTransition();
        }
        this.$().css({overflow: 'hidden'});

        /* if there are other growing views in our descendants, and they
         * animate, we won't see their resulting size changes until their
         * animations finish. This causes our animation to run in series
         * after theirs.
         *
         * Instead, we propagate our own event up the DOM to give early
         * warning, allowing the animations to run in parallel, which gives
         * a much nicer visual effect.
         */
        this.$().on('dynamicSpaceChange', function(event) {
            var heightChange;
            if ((event.target !== that.get('element')) && (heightChange = that.$(event.target).data('heightChange'))) {
                that.set('childHeightChange', heightChange);
                that.heightChanged();
                return false;
            }
        });
    },

    enableTransition: function() {
        'use strict';
        var transition = this.get('transition');
        this.$().css({
            '-webkit-transition': transition,
            '-moz-transition': transition,
            '-ms-transition': transition,
            '-o-transition': transition,
            'transition': transition
        });
        this.set('enabledTransition', true);
    },

    heightChanged: function() {
        'use strict';
        var that = this,
            currentHeight = this.$().height(),
            targetHeight = this.get('contentHeight') + (this.get('childHeightChange') || 0);
        this.set('childHeightChange', null);
        this.$().css('height', targetHeight);
        this.$().data('heightChange', targetHeight - currentHeight);
        this.$().trigger('dynamicSpaceChange');
        if (!this.get('enabledTransition')) {
            Ember.run.next(function() { that.enableTransition(); });
        }
    }.observes('contentHeight'),

    classNames: ['pretty-color'],
    attributeBindings: ['style'],
    style: function() {
        'use strict';
        return 'color: ' + this.get('name') + ';';
    }.property('name')
});

Ember.Handlebars.helper('growing-box', GrowingBox);

// ==========================================================================
// Project:   Ember Validations
// Copyright: Copyright 2013 DockYard, LLC. and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================


 // Version: 1.0.0.beta.2

// Copyright: Copyright 2013 DockYard, LLC. and contributors.
!function(){Ember.Validations=Ember.Namespace.create({VERSION:"1.0.0.beta.2"})}(),function(){Ember.Validations.messages={render:function(t,s){if(Ember.I18n)return Ember.I18n.t("errors."+t,s);var i=new RegExp("{{(.*?)}}"),e="";return i.test(this.defaults[t])&&(e=i.exec(this.defaults[t])[1]),this.defaults[t].replace(i,s[e])},defaults:{inclusion:"is not included in the list",exclusion:"is reserved",invalid:"is invalid",confirmation:"doesn't match {{attribute}}",accepted:"must be accepted",empty:"can't be empty",blank:"can't be blank",present:"must be blank",tooLong:"is too long (maximum is {{count}} characters)",tooShort:"is too short (minimum is {{count}} characters)",wrongLength:"is the wrong length (should be {{count}} characters)",notANumber:"is not a number",notAnInteger:"must be an integer",greaterThan:"must be greater than {{count}}",greaterThanOrEqualTo:"must be greater than or equal to {{count}}",equalTo:"must be equal to {{count}}",lessThan:"must be less than {{count}}",lessThanOrEqualTo:"must be less than or equal to {{count}}",otherThan:"must be other than {{count}}",odd:"must be odd",even:"must be even",url:"is not a valid URL"}}}(),function(){Ember.Validations.Errors=Ember.Object.extend({unknownProperty:function(t){return this.set(t,Ember.makeArray()),this.get(t)}})}(),function(){var t=Ember.Mixin.create({isValid:function(){return 0===this.get("validators").compact().filterBy("isValid",!1).get("length")}.property("validators.@each.isValid"),isInvalid:Ember.computed.not("isValid")}),s=function(t,i){var o=t.get(i);t.removeObserver(i,s),Ember.isArray(o)?t.validators.pushObject(e.create({model:t,property:i,contentBinding:"model."+i})):t.validators.pushObject(o)},i=function(t){var s=t.classify();return Ember.Validations.validators.local[s]||Ember.Validations.validators.remote[s]},e=Ember.ArrayProxy.extend(t,{validate:function(){return this._validate()},_validate:function(){var t=this.get("content").invoke("_validate").without(void 0);return Ember.RSVP.all(t)}.on("init"),validators:Ember.computed.alias("content")});Ember.Validations.Mixin=Ember.Mixin.create(t,{init:function(){this._super(),this.errors=Ember.Validations.Errors.create(),this._dependentValidationKeys={},this.validators=Ember.makeArray(),void 0===this.get("validations")&&(this.validations={}),this.buildValidators(),this.validators.forEach(function(t){t.addObserver("errors.[]",this,function(t){var s=Ember.makeArray();this.validators.forEach(function(i){i.property===t.property&&(s=s.concat(i.errors))},this),this.set("errors."+t.property,s)})},this)},buildValidators:function(){var t;for(t in this.validations)this.validations[t].constructor===Object?this.buildRuleValidator(t):this.buildObjectValidator(t)},buildRuleValidator:function(t){var s;for(s in this.validations[t])this.validations[t].hasOwnProperty(s)&&this.validators.pushObject(i(s).create({model:this,property:t,options:this.validations[t][s]}))},buildObjectValidator:function(t){Ember.isNone(this.get(t))?this.addObserver(t,this,s):s(this,t)},validate:function(){var t=this;return this._validate().then(function(s){var i=t.get("errors");return s.contains(!1)?Ember.RSVP.reject(i):i})},_validate:function(){var t=this.validators.invoke("_validate").without(void 0);return Ember.RSVP.all(t)}.on("init")})}(),function(){Ember.Validations.patterns=Ember.Namespace.create({numericality:/^(-|\+)?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d*)?$/,blank:/^\s*$/})}(),function(){Ember.Validations.validators=Ember.Namespace.create(),Ember.Validations.validators.local=Ember.Namespace.create(),Ember.Validations.validators.remote=Ember.Namespace.create()}(),function(){Ember.Validations.validators.Base=Ember.Object.extend({init:function(){this.set("errors",Ember.makeArray()),this._dependentValidationKeys=Ember.makeArray(),this.conditionals={"if":this.get("options.if"),unless:this.get("options.unless")},this.model.addObserver(this.property,this,this._validate)},addObserversForDependentValidationKeys:function(){this._dependentValidationKeys.forEach(function(t){this.model.addObserver(t,this,this._validate)},this)}.on("init"),pushDependentValidationKeyToModel:function(){var t=this.get("model");void 0===t._dependentValidationKeys[this.property]&&(t._dependentValidationKeys[this.property]=Ember.makeArray()),t._dependentValidationKeys[this.property].addObjects(this._dependentValidationKeys)}.on("init"),call:function(){throw"Not implemented!"},unknownProperty:function(t){var s=this.get("model");return s?s.get(t):void 0},isValid:Ember.computed.empty("errors.[]"),validate:function(){var t=this;return this._validate().then(function(s){var i=t.get("model.errors");return s?i:Ember.RSVP.reject(i)})},_validate:function(){return this.errors.clear(),this.canValidate()&&this.call(),this.get("isValid")?Ember.RSVP.resolve(!0):Ember.RSVP.resolve(!1)}.on("init"),canValidate:function(){if("object"!=typeof this.conditionals)return!0;if(this.conditionals["if"]){if("function"==typeof this.conditionals["if"])return this.conditionals["if"](this.model,this.property);if("string"==typeof this.conditionals["if"])return"function"==typeof this.model[this.conditionals["if"]]?this.model[this.conditionals["if"]]():this.model.get(this.conditionals["if"])}else{if(!this.conditionals.unless)return!0;if("function"==typeof this.conditionals.unless)return!this.conditionals.unless(this.model,this.property);if("string"==typeof this.conditionals.unless)return"function"==typeof this.model[this.conditionals.unless]?!this.model[this.conditionals.unless]():!this.model.get(this.conditionals.unless)}}})}(),function(){Ember.Validations.validators.local.Absence=Ember.Validations.validators.Base.extend({init:function(){this._super(),this.options===!0&&this.set("options",{}),void 0===this.options.message&&this.set("options.message",Ember.Validations.messages.render("present",this.options))},call:function(){Ember.isEmpty(this.model.get(this.property))||this.errors.pushObject(this.options.message)}})}(),function(){Ember.Validations.validators.local.Acceptance=Ember.Validations.validators.Base.extend({init:function(){this._super(),this.options===!0&&this.set("options",{}),void 0===this.options.message&&this.set("options.message",Ember.Validations.messages.render("accepted",this.options))},call:function(){this.options.accept?this.model.get(this.property)!==this.options.accept&&this.errors.pushObject(this.options.message):"1"!==this.model.get(this.property)&&1!==this.model.get(this.property)&&this.model.get(this.property)!==!0&&this.errors.pushObject(this.options.message)}})}(),function(){Ember.Validations.validators.local.Confirmation=Ember.Validations.validators.Base.extend({init:function(){this.originalProperty=this.property,this.property=this.property+"Confirmation",this._super(),this._dependentValidationKeys.pushObject(this.originalProperty),this.options===!0&&(this.set("options",{attribute:this.originalProperty}),this.set("options",{message:Ember.Validations.messages.render("confirmation",this.options)}))},call:function(){this.model.get(this.originalProperty)!==this.model.get(this.property)&&this.errors.pushObject(this.options.message)}})}(),function(){Ember.Validations.validators.local.Exclusion=Ember.Validations.validators.Base.extend({init:function(){this._super(),this.options.constructor===Array&&this.set("options",{"in":this.options}),void 0===this.options.message&&this.set("options.message",Ember.Validations.messages.render("exclusion",this.options))},call:function(){var t,s;Ember.isEmpty(this.model.get(this.property))?void 0===this.options.allowBlank&&this.errors.pushObject(this.options.message):this.options["in"]?-1!==Ember.$.inArray(this.model.get(this.property),this.options["in"])&&this.errors.pushObject(this.options.message):this.options.range&&(t=this.options.range[0],s=this.options.range[1],this.model.get(this.property)>=t&&this.model.get(this.property)<=s&&this.errors.pushObject(this.options.message))}})}(),function(){Ember.Validations.validators.local.Format=Ember.Validations.validators.Base.extend({init:function(){this._super(),this.options.constructor===RegExp&&this.set("options",{"with":this.options}),void 0===this.options.message&&this.set("options.message",Ember.Validations.messages.render("invalid",this.options))},call:function(){Ember.isEmpty(this.model.get(this.property))?void 0===this.options.allowBlank&&this.errors.pushObject(this.options.message):this.options["with"]&&!this.options["with"].test(this.model.get(this.property))?this.errors.pushObject(this.options.message):this.options.without&&this.options.without.test(this.model.get(this.property))&&this.errors.pushObject(this.options.message)}})}(),function(){Ember.Validations.validators.local.Inclusion=Ember.Validations.validators.Base.extend({init:function(){this._super(),this.options.constructor===Array&&this.set("options",{"in":this.options}),void 0===this.options.message&&this.set("options.message",Ember.Validations.messages.render("inclusion",this.options))},call:function(){var t,s;Ember.isEmpty(this.model.get(this.property))?void 0===this.options.allowBlank&&this.errors.pushObject(this.options.message):this.options["in"]?-1===Ember.$.inArray(this.model.get(this.property),this.options["in"])&&this.errors.pushObject(this.options.message):this.options.range&&(t=this.options.range[0],s=this.options.range[1],(this.model.get(this.property)<t||this.model.get(this.property)>s)&&this.errors.pushObject(this.options.message))}})}(),function(){Ember.Validations.validators.local.Length=Ember.Validations.validators.Base.extend({init:function(){var t,s;for(this._super(),"number"==typeof this.options&&this.set("options",{is:this.options}),void 0===this.options.messages&&this.set("options.messages",{}),t=0;t<this.messageKeys().length;t++)s=this.messageKeys()[t],void 0!==this.options[s]&&this.options[s].constructor===String&&this.model.addObserver(this.options[s],this,this._validate);this.options.tokenizer=this.options.tokenizer||function(t){return t.split("")}},CHECKS:{is:"==",minimum:">=",maximum:"<="},MESSAGES:{is:"wrongLength",minimum:"tooShort",maximum:"tooLong"},getValue:function(t){return this.options[t].constructor===String?this.model.get(this.options[t])||0:this.options[t]},messageKeys:function(){return Ember.keys(this.MESSAGES)},checkKeys:function(){return Ember.keys(this.CHECKS)},renderMessageFor:function(t){var s,i={count:this.getValue(t)};for(s in this.options)i[s]=this.options[s];return this.options.messages[this.MESSAGES[t]]||Ember.Validations.messages.render(this.MESSAGES[t],i)},renderBlankMessage:function(){return this.options.is?this.renderMessageFor("is"):this.options.minimum?this.renderMessageFor("minimum"):void 0},call:function(){var t,s,i;if(Ember.isEmpty(this.model.get(this.property)))void 0===this.options.allowBlank&&(this.options.is||this.options.minimum)&&this.errors.pushObject(this.renderBlankMessage());else for(i in this.CHECKS)s=this.CHECKS[i],this.options[i]&&(t=new Function("return "+this.options.tokenizer(this.model.get(this.property)).length+" "+s+" "+this.getValue(i)),t()||this.errors.pushObject(this.renderMessageFor(i)))}})}(),function(){Ember.Validations.validators.local.Numericality=Ember.Validations.validators.Base.extend({init:function(){var t,s,i;for(this._super(),this.options===!0?this.options={}:this.options.constructor===String&&(i=this.options,this.options={},this.options[i]=!0),(void 0===this.options.messages||void 0===this.options.messages.numericality)&&(this.options.messages=this.options.messages||{},this.options.messages={numericality:Ember.Validations.messages.render("notANumber",this.options)}),void 0!==this.options.onlyInteger&&void 0===this.options.messages.onlyInteger&&(this.options.messages.onlyInteger=Ember.Validations.messages.render("notAnInteger",this.options)),s=Ember.keys(this.CHECKS).concat(["odd","even"]),t=0;t<s.length;t++)i=s[t],isNaN(this.options[i])&&this.model.addObserver(this.options[i],this,this._validate),void 0!==this.options[i]&&void 0===this.options.messages[i]&&(-1!==Ember.$.inArray(i,Ember.keys(this.CHECKS))&&(this.options.count=this.options[i]),this.options.messages[i]=Ember.Validations.messages.render(i,this.options),void 0!==this.options.count&&delete this.options.count)},CHECKS:{equalTo:"===",greaterThan:">",greaterThanOrEqualTo:">=",lessThan:"<",lessThanOrEqualTo:"<="},call:function(){var t,s,i,e;if(Ember.isEmpty(this.model.get(this.property)))void 0===this.options.allowBlank&&this.errors.pushObject(this.options.messages.numericality);else if(Ember.Validations.patterns.numericality.test(this.model.get(this.property)))if(this.options.onlyInteger!==!0||/^[+\-]?\d+$/.test(this.model.get(this.property)))if(this.options.odd&&parseInt(this.model.get(this.property),10)%2===0)this.errors.pushObject(this.options.messages.odd);else if(this.options.even&&parseInt(this.model.get(this.property),10)%2!==0)this.errors.pushObject(this.options.messages.even);else for(t in this.CHECKS)e=this.CHECKS[t],void 0!==this.options[t]&&(!isNaN(parseFloat(this.options[t]))&&isFinite(this.options[t])?s=this.options[t]:void 0!==this.model.get(this.options[t])&&(s=this.model.get(this.options[t])),i=new Function("return "+this.model.get(this.property)+" "+e+" "+s),i()||this.errors.pushObject(this.options.messages[t]));else this.errors.pushObject(this.options.messages.onlyInteger);else this.errors.pushObject(this.options.messages.numericality)}})}(),function(){Ember.Validations.validators.local.Presence=Ember.Validations.validators.Base.extend({init:function(){this._super(),this.options===!0&&(this.options={}),void 0===this.options.message&&(this.options.message=Ember.Validations.messages.render("blank",this.options))},call:function(){Ember.isEmpty(this.model.get(this.property))&&this.errors.pushObject(this.options.message)}})}(),function(){Ember.Validations.validators.local.Url=Ember.Validations.validators.Base.extend({regexp:null,regexp_ip:null,init:function(){this._super(),void 0===this.get("options.message")&&this.set("options.message",Ember.Validations.messages.render("url",this.options)),void 0===this.get("options.protocols")&&this.set("options.protocols",["http","https"]);var t="(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])",s="("+t+"(\\."+t+"){3})",i="([a-zA-Z0-9\\-]+\\.)+([a-zA-Z]{2,})",e="%[0-9a-fA-F]{2}",o="a-zA-Z0-9$\\-_.+!*'(),;:@&=",n="(["+o+"]|"+e+")*",r="^";this.get("options.domainOnly")===!0?r+=i:(r+="("+this.get("options.protocols").join("|")+"):\\/\\/",this.get("options.allowUserPass")===!0&&(r+="(([a-zA-Z0-9$\\-_.+!*'(),;:&=]|"+e+")+@)?"),r+=this.get("options.allowIp")===!0?"("+i+"|"+s+")":"("+i+")",this.get("options.allowPort")===!0&&(r+="(:[0-9]+)?"),r+="(\\/",r+="("+n+"(\\/"+n+")*)?",r+="(\\?(["+o+"/?]|"+e+")*)?",r+="(\\#(["+o+"/?]|"+e+")*)?",r+=")?"),r+="$",this.regexp=new RegExp(r),this.regexp_ip=new RegExp(s)},call:function(){var t=this.model.get(this.property);if(Ember.isEmpty(t))this.get("options.allowBlank")!==!0&&this.errors.pushObject(this.get("options.message"));else{if(this.get("options.allowIp")!==!0&&this.regexp_ip.test(t))return this.errors.pushObject(this.get("options.message")),void 0;this.regexp.test(t)||this.errors.pushObject(this.get("options.message"))}}})}(),"undefined"==typeof location||"localhost"!==location.hostname&&"127.0.0.1"!==location.hostname||Ember.Logger.warn("You are running a production build of Ember on localhost and won't receive detailed error messages. If you want full error messages please use the non-minified build provided on the Ember website.");
/* =============================================================
 * bootstrap3-typeahead.js v3.0.3
 * https://github.com/bassjobsen/Bootstrap-3-Typeahead
 * =============================================================
 * Original written by @mdo and @fat
 * =============================================================
 * Copyright 2014 Bass Jobsen @bassjobsen
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
 * ============================================================ */


!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.select = this.options.select || this.select
    this.autoSelect = typeof this.options.autoSelect == 'boolean' ? this.options.autoSelect : true
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.source = this.options.source
    this.$menu = $(this.options.menu)
    this.shown = false
    this.listen(),
	this.showHintOnFocus = typeof this.options.showHintOnFocus == 'boolean' ? this.options.showHintOnFocus : false
  }

  Typeahead.prototype = {

    constructor: Typeahead
	
  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      if(this.autoSelect || val) {
        this.$element
          .val(this.updater(val))
          .change()
      }
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , setSource: function (source) {
      this.source = source;
    }	

  , show: function () {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      }), scrollHeight
      
      scrollHeight = typeof this.options.scrollHeight == 'function' ?
          this.options.scrollHeight.call() :
          this.options.scrollHeight

      this.$menu
        .insertAfter(this.$element)
        .css({
          top: pos.top + pos.height + scrollHeight
        , left: pos.left
        })
        .show()

      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (query) {
      var items      
	  if (typeof(query) != 'undefined' && query != null) {
		this.query = query;
	  } else {
		this.query = this.$element.val() ||  '';
	  }

      if (this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }
	  
	  if (this.options.items == 'all' || this.options.minLength == 0 && !this.$element.val()) {
		return this.render(items).show()
	  } else {	
		return this.render(items.slice(0, this.options.items)).show()
	  }
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      if (this.autoSelect) {
        items.first().addClass('active')
      }
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('focus',    $.proxy(this.focus, this))
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
        .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
	}
  , destroy : function () {
		   this.$element.data('typeahead',null)
			this.$element
			.off('focus')
			.off('blur')
			.off('keypress')
			.off('keyup')

		  if (this.eventSupported('keydown')) {
			this.$element.off('keydown')
		  }

		  this.$menu.remove();
	}	
  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27]);
	  if (!this.shown && e.keyCode == 40) {
		this.lookup("");
	  } else {
		this.move(e)
	  }
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {  
		case 40: // down arrow      
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break		
        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , focus: function (e) {
	  console.log('focus');
	  if (!this.focused) {
		  this.focused = true
		  if (this.options.minLength == 0 && !this.$element.val() || this.options.showHintOnFocus) {
			this.lookup(); 
		  }
	  }
    }

  , blur: function (e) {
      this.focused = false
      if (!this.mousedover && this.shown) this.hide()
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
      this.$element.focus()
    }

  , mouseenter: function (e) {
      this.mousedover = true
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  , mouseleave: function (e) {
      this.mousedover = false
      if (!this.focused && this.shown) this.hide()
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead

  $.fn.typeahead = function (option) {
	var arg = arguments;
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') {
		if (arg.length > 1) {
			data[option].apply(data, Array.prototype.slice.call(arg ,1));
		} else {
			data[option]()
		}
	  }
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  , scrollHeight: 0
  , autoSelect: true
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD NO CONFLICT
  * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }


 /* TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this)
    if ($this.data('typeahead')) return
    $this.typeahead($this.data())
  })

}(window.jQuery);

(function() {

var _ref;

Ember.Widgets = Ember.Namespace.create();

Ember.Widgets.VERSION = '0.0.1';

if ((_ref = Ember.libraries) != null) {
  _ref.register('Ember Widgets', Ember.Widgets.VERSION);
}


})();

(function() {

Ember.TEMPLATES["accordion_group_layout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"panel-heading\">\n  <h4 class=\"panel-title\">\n    <a class=\"accordion-toggle collapsed\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "view.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </a>\n  </h4>\n</div>\n<div class=\"panel-collapse collapse\">\n  <div class=\"panel-body\">");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["carousel"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.CollectionView", {hash:{
    'tagName': ("ol"),
    'class': ("carousel-indicators"),
    'contentBinding': ("view.content"),
    'itemViewClass': ("Ember.Widgets.CarouselIndicator")
  },hashTypes:{'tagName': "STRING",'class': "STRING",'contentBinding': "STRING",'itemViewClass': "STRING"},hashContexts:{'tagName': depth0,'class': depth0,'contentBinding': depth0,'itemViewClass': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n<div class=\"carousel-inner\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<a class=\"left carousel-control\"  href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "prev", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">‹</a>\n<a class=\"right carousel-control\" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "next", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">›</a>\n");
  return buffer;
  
});

Ember.TEMPLATES["component_default_content"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<p>");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n");
  return buffer;
  
});

Ember.TEMPLATES["modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <button type=\"button\" class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendConfirm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          ");
  stack1 = helpers._triageMustache.call(depth0, "confirmText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </button>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendCancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          ");
  stack1 = helpers._triageMustache.call(depth0, "cancelText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </button>\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendCancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</button>\n      <h4 class=\"modal-title\">");
  stack1 = helpers._triageMustache.call(depth0, "headerText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n    </div>\n    <div class=\"modal-body\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "_contentViewClass", {hash:{
    'contentBinding': ("content")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n    <div class=\"modal-footer\">\n      ");
  stack1 = helpers['if'].call(depth0, "confirmText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      ");
  stack1 = helpers['if'].call(depth0, "cancelText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["multi-select"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class=\"ember-select-no-results\">\n      No results match \"");
  stack1 = helpers._triageMustache.call(depth0, "query", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"\n    </span>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"ember-select-container ember-select-multi dropdown-toggle\">\n  <ul class=\"ember-select-choices\">\n    \n    ");
  data.buffer.push(escapeExpression(helpers.each.call(depth0, "selections", {hash:{
    'itemViewClass': ("view.selectionItemView")
  },hashTypes:{'itemViewClass': "STRING"},hashContexts:{'itemViewClass': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    <li class=\"ember-select-search-field\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "searchView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </li>\n  </ul>\n</div>\n<div class=\"dropdown-menu\">\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "listView", {hash:{
    'tagName': ("ul"),
    'classNames': ("grey-box-scroll-bar ember-select-results"),
    'heightBinding': ("dropdownHeight"),
    'rowHeightBinding': ("rowHeight"),
    'contentBinding': ("groupedContent"),
    'itemViewClassBinding': ("itemView")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING",'heightBinding': "STRING",'rowHeightBinding': "STRING",'contentBinding': "STRING",'itemViewClassBinding': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0,'heightBinding': depth0,'rowHeightBinding': depth0,'contentBinding': depth0,'itemViewClassBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "hasNoResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["multi_select_item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div>");
  stack1 = helpers._triageMustache.call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<a class=\"ember-select-search-choice-close\" href=\"#\"\n  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeSelectItem", "view.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">×\n</a>\n");
  return buffer;
  
});

Ember.TEMPLATES["popover"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <h4 class=\"popover-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"arrow\"></div>\n");
  stack1 = helpers['if'].call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"popover-content\">\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view._contentViewClass", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["select"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "selectedItemView", {hash:{
    'contentBinding': ("selection")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.dropdownToggleIcon")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <span>");
  stack1 = helpers._triageMustache.call(depth0, "prompt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n      <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.dropdownToggleIcon")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div class=\"ember-select-search\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "searchView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n  ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class=\"ember-select-no-results\">No results match \"");
  stack1 = helpers._triageMustache.call(depth0, "query", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"</span>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"ember-select-container dropdown-toggle\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleDropdown", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n  <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":ember-select-choice isButton:btn\n      isButton:btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers['if'].call(depth0, "selection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </a>\n</div>\n\n<div class=\"dropdown-menu\">\n  ");
  stack1 = helpers.unless.call(depth0, "isSelect", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "listView", {hash:{
    'tagName': ("ul"),
    'classNames': ("ember-select-results"),
    'heightBinding': ("dropdownHeight"),
    'rowHeightBinding': ("rowHeight"),
    'contentBinding': ("groupedContent"),
    'itemViewClassBinding': ("itemView")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING",'heightBinding': "STRING",'rowHeightBinding': "STRING",'contentBinding': "STRING",'itemViewClassBinding': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0,'heightBinding': depth0,'rowHeightBinding': depth0,'contentBinding': depth0,'itemViewClassBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "hasNoResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["select_item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["select_item_layout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "view.content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "view.content.isGroupOption", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["view_parent_view_content"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "view.parentView.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

})();

(function() {


Ember.Widgets.StyleBindingsMixin = Ember.Mixin.create({
  concatenatedProperties: ['styleBindings'],
  attributeBindings: ['style'],
  unitType: 'px',
  createStyleString: function(styleName, property) {
    var value;
    value = this.get(property);
    if (value === void 0) {
      return;
    }
    if (Ember.typeOf(value) === 'number') {
      value = value + this.get('unitType');
    }
    return "" + styleName + ":" + value + ";";
  },
  applyStyleBindings: function() {
    var lookup, properties, styleBindings, styleComputed, styles,
      _this = this;
    styleBindings = this.styleBindings;
    if (!styleBindings) {
      return;
    }
    lookup = {};
    styleBindings.forEach(function(binding) {
      var property, style, _ref;
      _ref = binding.split(':'), property = _ref[0], style = _ref[1];
      return lookup[style || property] = property;
    });
    styles = _.keys(lookup);
    properties = _.values(lookup);
    styleComputed = Ember.computed(function() {
      var styleString, styleTokens;
      styleTokens = styles.map(function(style) {
        return _this.createStyleString(style, lookup[style]);
      });
      styleString = styleTokens.join('');
      if (styleString.length !== 0) {
        return styleString;
      }
    });
    styleComputed.property.apply(styleComputed, properties);
    return Ember.defineProperty(this, 'style', styleComputed);
  },
  init: function() {
    this.applyStyleBindings();
    return this._super();
  }
});

Ember.Widgets.BodyEventListener = Ember.Mixin.create({
  bodyElementSelector: 'html',
  bodyClick: Ember.K,
  didInsertElement: function() {
    this._super();
    return Ember.run.next(this, this._setupDocumentHandlers);
  },
  willDestroyElement: function() {
    this._super();
    return this._removeDocumentHandlers();
  },
  click: function(event) {
    return event.stopPropagation();
  },
  _setupDocumentHandlers: function() {
    var _this = this;
    if (this._clickHandler) {
      return;
    }
    this._clickHandler = function() {
      return _this.bodyClick();
    };
    return $(this.get('bodyElementSelector')).on("click", this._clickHandler);
  },
  _removeDocumentHandlers: function() {
    $(this.get('bodyElementSelector')).off("click", this._clickHandler);
    return this._clickHandler = null;
  }
});


})();

(function() {


Ember.Widgets.AccordionComponent = Ember.Component.extend({
  classNames: 'panel-group',
  activeIndex: 0
});

Ember.Widgets.AccordionItem = Ember.View.extend({
  defaultTemplate: Ember.Handlebars.compile('{{view.content}}'),
  layoutName: 'accordion_group_layout',
  classNames: 'panel panel-default',
  title: 'Untitled Accordion Group',
  index: 0,
  isActive: false,
  content: Ember.computed.alias('parentView.content'),
  isActiveDidChange: Ember.observer(function() {
    this.set('isActive', this.get('parentView.activeIndex') === this.get('index'));
    if (this.get('isActive')) {
      return this.show();
    } else {
      return this.hide();
    }
  }, 'parentView.activeIndex'),
  didInsertElement: function() {
    var index;
    index = this.get('parentView').$('.panel').index(this.$());
    this.set('index', index);
    return this.isActiveDidChange();
  },
  click: function() {
    if (this.get('isActive')) {
      return this.set('parentView.activeIndex', null);
    } else {
      return this.set('parentView.activeIndex', this.get('index'));
    }
  },
  hide: function() {
    var $accordionBody,
      _this = this;
    $accordionBody = this.$('.panel-collapse');
    $accordionBody.height($accordionBody.height())[0].offsetHeight;
    $accordionBody.removeClass('collapse').removeClass('in').addClass('collapsing');
    return $accordionBody.height(0).one($.support.transition.end, function() {
      return $accordionBody.removeClass('collapsing').addClass('collapse');
    });
  },
  show: function() {
    var $accordionBody,
      _this = this;
    $accordionBody = this.$('.panel-collapse');
    $accordionBody.removeClass('collapse').addClass('collapsing').height(0);
    $accordionBody.height($accordionBody[0]['scrollHeight']);
    return this.$().one($.support.transition.end, function() {
      return $accordionBody.removeClass('collapsing').addClass('in').height('auto');
    });
  }
});

Ember.Handlebars.helper('accordion-component', Ember.Widgets.AccordionComponent);

Ember.Handlebars.helper('accordion-item', Ember.Widgets.AccordionItem);


})();

(function() {


Ember.Widgets.CarouselComponent = Ember.Component.extend({
  layoutName: 'carousel',
  classNames: ['carousel', 'slide'],
  classNameBindings: ['sliding'],
  activeIndex: 0,
  didInsertElement: function() {
    if (!this.get('content')) {
      return this.set('content', new Array(this.$('.item').length));
    }
  },
  actions: {
    prev: function() {
      var activeIndex, contentLength, nextIndex;
      if (this.get('sliding')) {
        return;
      }
      activeIndex = this.get('activeIndex');
      contentLength = this.get('content.length');
      nextIndex = activeIndex - 1;
      nextIndex = nextIndex < 0 ? contentLength - 1 : nextIndex;
      return this.slide('prev', nextIndex);
    },
    next: function() {
      var activeIndex, contentLength, nextIndex;
      if (this.get('sliding')) {
        return;
      }
      activeIndex = this.get('activeIndex');
      contentLength = this.get('content.length');
      nextIndex = activeIndex + 1;
      nextIndex = nextIndex >= contentLength ? 0 : nextIndex;
      return this.slide('next', nextIndex);
    }
  },
  to: function(pos) {
    var direction,
      _this = this;
    if (!((0 <= pos && pos < this.get('content.length')))) {
      return;
    }
    if (this.get('sliding')) {
      return this.$().one('slid', function() {
        return _this.to(pos);
      });
    }
    direction = pos > this.get('activeIndex') ? 'next' : 'prev';
    return this.slide(direction, pos);
  },
  slide: function(type, nextIndex) {
    var $active, $next, direction,
      _this = this;
    if (this.get('activeIndex') === nextIndex) {
      return;
    }
    direction = type === 'next' ? 'left' : 'right';
    $active = $(this.$('.item').get(this.get('activeIndex')));
    $next = $(this.$('.item').get(nextIndex));
    this.set('sliding', true);
    $next.addClass(type);
    $next[0].offsetWidth;
    $active.addClass(direction);
    $next.addClass(direction);
    return this.$().one($.support.transition.end, function() {
      return Ember.run(_this, function() {
        this.set('activeIndex', nextIndex);
        $next.removeClass([type, direction].join(' ')).addClass('active');
        $active.removeClass(['active', direction].join(' '));
        return this.set('sliding', false);
      });
    });
  }
});

Ember.Widgets.CarouselIndicator = Ember.View.extend({
  classNameBindings: 'isActive:active',
  isActive: Ember.computed(function() {
    return this.get('contentIndex') === this.get('controller.activeIndex');
  }).property('contentIndex', 'controller.activeIndex'),
  click: function() {
    return this.get('controller').to(this.get('contentIndex'));
  }
});

Ember.Widgets.CarouselItem = Ember.View.extend({
  classNames: 'item'
});

Ember.Handlebars.helper('carousel-component', Ember.Widgets.CarouselComponent);

Ember.Handlebars.helper('carousel-item', Ember.Widgets.CarouselItem);


})();

(function() {


Ember.Widgets.ModalComponent = Ember.Component.extend(Ember.Widgets.StyleBindingsMixin, {
  layoutName: 'modal',
  classNames: ['modal'],
  classNameBindings: ['isShowing:in', 'fade'],
  modalPaneBackdrop: '<div class="modal-backdrop"></div>',
  bodyElementSelector: '.modal-backdrop',
  enforceModality: false,
  backdrop: true,
  isShowing: false,
  fade: true,
  headerText: "Modal Header",
  confirmText: "Confirm",
  cancelText: "Cancel",
  content: "",
  contentViewClass: null,
  defaultContentViewClass: Ember.View.extend({
    templateName: 'component_default_content'
  }),
  _contentViewClass: Ember.computed(function() {
    var contentViewClass;
    contentViewClass = this.get('contentViewClass');
    if (!contentViewClass) {
      return this.get('defaultContentViewClass');
    }
    if (typeof contentViewClass === 'string') {
      return Ember.get(this.get('contentViewClass'));
    } else {
      return contentViewClass;
    }
  }).property('contentViewClass'),
  actions: {
    sendCancel: function() {
      this.sendAction('cancel');
      return this.hide();
    },
    sendConfirm: function() {
      this.sendAction('confirm');
      return this.hide();
    }
  },
  didInsertElement: function() {
    this._super();
    if (this.get('fade')) {
      this.$()[0].offsetWidth;
    }
    if (this.get('backdrop')) {
      this._appendBackdrop();
    }
    Ember.run.next(this, function() {
      return this.set('isShowing', true);
    });
    return $(document.body).addClass('modal-open');
  },
  click: function(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (!this.get('enforceModality')) {
      return this.hide();
    }
  },
  hide: function() {
    var _this = this;
    this.set('isShowing', false);
    $(document.body).removeClass('modal-open');
    this._backdrop.removeClass('in');
    return this.$().one($.support.transition.end, function() {
      if (_this._backdrop) {
        _this._backdrop.remove();
      }
      return _this.destroy();
    });
  },
  _appendBackdrop: function() {
    var modalPaneBackdrop, parentLayer;
    parentLayer = this.$().parent();
    modalPaneBackdrop = this.get('modalPaneBackdrop');
    if (this.get('fade')) {
      this._backdrop = jQuery(modalPaneBackdrop).addClass('fade');
    }
    this._backdrop.appendTo(parentLayer);
    return Ember.run.next(this, function() {
      return this._backdrop.addClass('in');
    });
  }
});

Ember.Widgets.ModalComponent.reopenClass({
  rootElement: '.ember-application',
  hideAll: function() {},
  popup: function(options) {
    var modal, rootElement;
    if (options == null) {
      options = {};
    }
    rootElement = options.rootElement || this.rootElement;
    modal = this.create(options);
    modal.container = modal.get('targetObject.container');
    modal.appendTo(rootElement);
    return modal;
  }
});

Ember.Handlebars.helper('modal-component', Ember.Widgets.ModalComponent);


})();

(function() {


Ember.Widgets.PopoverComponent = Ember.Component.extend(Ember.Widgets.StyleBindingsMixin, Ember.Widgets.BodyEventListener, {
  layoutName: 'popover',
  classNames: ['popover'],
  classNameBindings: ['isShowing:in', 'fade', 'placement'],
  styleBindings: ['left', 'top', 'display', 'visibility'],
  targetElement: null,
  contentViewClass: null,
  placement: 'top',
  title: '',
  left: 0,
  top: 0,
  display: 'block',
  visibility: 'hidden',
  fade: true,
  isShowing: false,
  inserted: false,
  content: "",
  _resizeHandler: null,
  _scrollHandler: null,
  _contentViewClass: Ember.computed(function() {
    if (this.get('contentViewClass')) {
      return this.get('contentViewClass');
    }
    return Ember.View.extend({
      content: Ember.computed.alias('parentView.content'),
      templateName: 'view_parent_view_content'
    });
  }).property('contentViewClass'),
  didInsertElement: function() {
    this._super();
    return Ember.run.next(this, function() {
      this.snapToPosition();
      this.set('visibility', 'visible');
      return this.set('isShowing', true);
    });
  },
  bodyClick: function() {
    return this.hide();
  },
  hide: function() {
    var _this = this;
    this.set('isShowing', false);
    return this.$().one($.support.transition.end, function() {
      return _this.destroy();
    });
  },
  snapToPosition: function() {
    var $target, actualHeight, actualWidth, pos;
    if (this.get('state') !== 'inDOM') {
      return;
    }
    $target = $(this.get('targetElement'));
    actualWidth = this.$()[0].offsetWidth;
    actualHeight = this.$()[0].offsetHeight;
    pos = $target.offset();
    pos.width = $target[0].offsetWidth;
    pos.height = $target[0].offsetHeight;
    switch (this.get('placement')) {
      case 'bottom':
        this.set('top', pos.top + pos.height);
        this.set('left', pos.left + pos.width / 2 - actualWidth / 2);
        break;
      case 'top':
        this.set('top', pos.top - actualHeight);
        this.set('left', pos.left + pos.width / 2 - actualWidth / 2);
        break;
      case 'top-right':
        this.set('top', pos.top);
        this.set('left', pos.left + pos.width);
        break;
      case 'top-left':
        this.set('top', pos.top);
        this.set('left', pos.left - actualWidth);
        break;
      case 'bottom-right':
        this.set('top', pos.top + pos.height);
        this.set('left', pos.left + pos.width - actualWidth);
        break;
      case 'bottom-left':
        this.set('top', pos.top + pos.height);
        this.set('left', pos.left);
        break;
      case 'left':
        this.set('top', pos.top + pos.height / 2 - actualHeight / 2);
        this.set('left', pos.left - actualWidth);
        break;
      case 'right':
        this.set('top', pos.top + pos.height / 2 - actualHeight / 2);
        this.set('left', pos.left + pos.width);
        break;
    }
    return this.correctHorizontalIfOffScreen();
  },
  correctHorizontalIfOffScreen: function() {
    var actualWidth, bodyWidth, hideArrow;
    bodyWidth = $('body').width();
    actualWidth = this.$()[0].offsetWidth;
    hideArrow = false;
    if (this.get('left') + actualWidth > bodyWidth) {
      this.set('left', bodyWidth - actualWidth);
      hideArrow = true;
    }
    if (this.get('left') < 0) {
      this.set('left', 0);
      hideArrow = true;
    }
    if (hideArrow) {
      return this.$().addClass('no-arrow');
    } else {
      return this.$().removeClass('no-arrow');
    }
  },
  debounceSnapToPosition: Ember.computed(function() {
    return Ember.run.debounce(this, this.snapToPosition, 100);
  }),
  _setupDocumentHandlers: function() {
    this._super();
    if (!this._resizeHandler) {
      this._resizeHandler = this.get('debounceSnapToPosition');
      $('html').on('resize', this._resizeHandler);
    }
    if (!this._scrollHandler) {
      this._scrollHandler = this.get('debounceSnapToPosition');
      return $('html').on('scroll', this._scrollHandler);
    }
  },
  _removeDocumentHandlers: function() {
    this._super();
    $('html').off('resize', this._resizeHandler);
    this._resizeHandler = null;
    $('html').off('scroll', this._scrollHandler);
    return this._scrollHandler = null;
  }
});

Ember.Widgets.PopoverComponent.reopenClass({
  rootElement: '.ember-application',
  hideAll: function() {},
  popup: function(options) {
    var popover, rootElement;
    rootElement = options.rootElement || this.rootElement;
    popover = this.create(options);
    popover.appendTo(rootElement);
    return popover;
  }
});

Ember.Handlebars.helper('popover-component', Ember.Widgets.PopoverComponent);


})();

(function() {


Ember.Widgets.PopoverLinkComponent = Ember.Component.extend({
  classNames: ['popover-link'],
  placement: 'top',
  content: null,
  title: null,
  contentViewClass: null,
  _contentViewClass: Ember.computed(function() {
    if (this.get('contentViewClass')) {
      return Ember.get(this.get('contentViewClass'));
    }
  }).property('contentViewClass'),
  click: function(event) {
    return Ember.Widgets.PopoverComponent.popup({
      targetElement: event.target,
      targetObject: this.get('targetObject'),
      container: this.get('container'),
      placement: this.get('placement'),
      title: this.get('title'),
      content: this.get('content'),
      contentViewClass: this.get('_contentViewClass')
    });
  }
});

Ember.Handlebars.helper('popover-link-component', Ember.Widgets.PopoverLinkComponent);


})();

(function() {

var get, set;

get = function(object, key) {
  if (!object) {
    return void 0;
  }
  if (!key) {
    return object;
  }
  return (typeof object.get === "function" ? object.get(key) : void 0) || object[key];
};

set = function(object, key, value) {
  if (!(object && key)) {
    return;
  }
  return (typeof object.set === "function" ? object.set(key, value) : void 0) || (object[key] = value);
};

Ember.Widgets.SelectOptionView = Ember.ListItemView.extend({
  tagName: 'li',
  templateName: 'select_item',
  layoutName: 'select_item_layout',
  classNames: 'ember-select-result-item',
  classNameBindings: ['content.isGroupOption:ember-select-group', 'isHighlighted:highlighted'],
  labelPath: Ember.computed.alias('controller.optionLabelPath'),
  isHighlighted: Ember.computed(function() {
    return this.get('controller.highlighted') === this.get('content');
  }).property('controller.highlighted', 'content'),
  labelPathDidChange: Ember.observer(function() {
    var labelPath, path;
    labelPath = this.get('labelPath');
    path = labelPath ? "content." + labelPath : 'content';
    Ember.defineProperty(this, 'label', Ember.computed.alias(path));
    return this.notifyPropertyChange('label');
  }, 'content', 'labelPath'),
  didInsertElement: function() {
    this._super();
    return this.labelPathDidChange();
  },
  updateContext: function(context) {
    this._super(context);
    return this.set('content', context);
  },
  click: function() {
    if (this.get('content.isGroupOption')) {
      return;
    }
    this.set('controller.selection', this.get('content'));
    return this.get('controller').hideDropdown();
  },
  mouseEnter: function() {
    if (this.get('content.isGroupOption')) {
      return;
    }
    return this.set('controller.highlighted', this.get('content'));
  }
});

Ember.Widgets.SelectComponent = Ember.Component.extend(Ember.Widgets.BodyEventListener, {
  layoutName: 'select',
  classNames: 'ember-select',
  attributeBindings: ['tabindex'],
  classNameBindings: ['showDropdown:open'],
  itemViewClass: 'Ember.Widgets.SelectOptionView',
  prompt: 'Select a Value',
  highlightedIndex: -1,
  tabindex: -1,
  showDropdown: false,
  dropdownHeight: 300,
  rowHeight: 26,
  sortLabels: true,
  isSelect: false,
  isButton: true,
  dropdownToggleIcon: 'fa fa-caret-down',
  content: [],
  selection: null,
  query: '',
  optionLabelPath: '',
  optionValuePath: '',
  optionGroupPath: '',
  optionDefaultPath: '',
  itemView: Ember.computed(function() {
    var itemViewClass;
    itemViewClass = this.get('itemViewClass');
    if (typeof itemViewClass === 'string') {
      return Ember.get(itemViewClass);
    }
    return itemViewClass;
  }).property('itemViewClass'),
  selectedItemView: Ember.computed(function() {
    return this.get('itemView').extend({
      tagName: 'span',
      labelPath: Ember.computed.alias('controller.optionLabelPath'),
      context: Ember.computed.alias('controller.selection')
    });
  }).property('itemView'),
  selectedLabel: Ember.computed(function() {
    return get(this.get('selection'), this.get('optionLabelPath'));
  }).property('selection', 'optionLabelPath'),
  searchView: Ember.TextField.extend({
    placeholder: 'Search',
    valueBinding: 'parentView.query',
    showDropdownDidChange: Ember.observer(function() {
      return Ember.run.next(this, function() {
        if (this.get('state') === 'inDOM') {
          return this.$().focus();
        }
      });
    }, 'parentView.showDropdown')
  }),
  listView: Ember.ListView.extend({
    style: Ember.computed(function() {
      var height;
      height = Math.min(this.get('height'), this.get('totalHeight'));
      return "height: " + height + "px";
    }).property('height', 'totalHeight')
  }),
  filteredContent: Ember.computed(function() {
    var content, filteredContent, query,
      _this = this;
    content = this.get('content');
    query = this.get('query');
    if (!content) {
      return [];
    }
    filteredContent = this.get('content').filter(function(item) {
      return _this.matcher(query, item);
    });
    if (!this.get('sortLabels')) {
      return filteredContent;
    }
    return _.sortBy(filteredContent, function(item) {
      var _ref;
      return (_ref = get(item, _this.get('optionLabelPath'))) != null ? _ref.toLowerCase() : void 0;
    });
  }).property('content.@each', 'query', 'optionLabelPath', 'sortLabels'),
  groupedContent: Ember.computed(function() {
    var content, groups, path, result;
    path = this.get('optionGroupPath');
    content = this.get('filteredContent');
    if (!path) {
      return content;
    }
    groups = _.groupBy(content, function(item) {
      return get(item, path);
    });
    result = Ember.A();
    _.keys(groups).sort().forEach(function(key) {
      result.pushObject(Ember.Object.create({
        isGroupOption: true,
        name: key
      }));
      return result.pushObjects(groups[key]);
    });
    return result;
  }).property('filteredContent', 'optionGroupPath'),
  hasNoResults: Ember.computed.empty('filteredContent'),
  value: Ember.computed(function(key, value) {
    var selection, valuePath;
    if (arguments.length === 2) {
      valuePath = this.get('optionValuePath');
      selection = value;
      if (valuePath) {
        selection = this.get('content').findProperty(valuePath, value);
      }
      this.set('selection', selection);
      return value;
    } else {
      valuePath = this.get('optionValuePath');
      selection = this.get('selection');
      if (valuePath) {
        return get(selection, valuePath);
      } else {
        return selections;
      }
    }
  }).property('selection'),
  didInsertElement: function() {
    this._super();
    return this.setDefaultSelection();
  },
  matcher: function(searchText, item) {
    var escapedSearchText, label, regex;
    if (!searchText) {
      return true;
    }
    label = get(item, this.get('optionLabelPath'));
    escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    regex = new RegExp(escapedSearchText, 'i');
    return regex.test(label);
  },
  actions: {
    toggleDropdown: function(event) {
      return this.toggleDropdown(event);
    }
  },
  toggleDropdown: function(event) {
    return this.toggleProperty('showDropdown');
  },
  hideDropdown: function(event) {
    return this.set('showDropdown', false);
  },
  setDefaultSelection: Ember.observer(function() {
    var content, defaultPath;
    if (this.get('selection')) {
      return;
    }
    content = this.get('content');
    defaultPath = this.get('optionDefaultPath');
    if (!(content && defaultPath)) {
      return;
    }
    return this.set('selection', content.findProperty(defaultPath));
  }, 'content.@each'),
  selectableOptionsDidChange: Ember.observer(function() {
    var highlighted;
    highlighted = this.get('highlighted');
    if (!this.get('selectableOptions').contains(highlighted)) {
      return this.set('highlighted', this.get('selectableOptions.firstObject'));
    }
  }, 'selectableOptions'),
  /*
    # SELECTION RELATED
  */

  KEY_EVENTS: {
    8: 'deletePressed',
    27: 'escapePressed',
    13: 'enterPressed',
    38: 'upArrowPressed',
    40: 'downArrowPressed'
  },
  selectableOptions: Ember.computed(function() {
    return (this.get('groupedContent') || []).filter(function(item) {
      return !get(item, 'isGroupOption');
    });
  }).property('groupedContent'),
  highlighted: Ember.computed(function(key, value) {
    var content, index;
    content = this.get('selectableOptions') || [];
    value = value || [];
    if (arguments.length === 1) {
      index = this.get('highlightedIndex');
      value = content.objectAt(index);
    } else {
      index = content.indexOf(value);
      this.setHighlightedIndex(index, true);
    }
    return value;
  }).property('selectableOptions', 'highlightedIndex'),
  bodyClick: function() {
    return this.hideDropdown();
  },
  keyDown: function(event) {
    var map, method, _ref;
    if (!this.get('showDropdown')) {
      return this.set('showDropdown', true);
    }
    map = this.get('KEY_EVENTS');
    method = map[event.keyCode];
    if (method) {
      return (_ref = this.get(method)) != null ? _ref.apply(this, arguments) : void 0;
    }
  },
  deletePressed: Ember.K,
  escapePressed: function(event) {
    return this.hideDropdown();
  },
  enterPressed: function(event) {
    var item;
    item = this.get('highlighted');
    if (item) {
      this.set('selection', item);
    }
    this.hideDropdown();
    return event.preventDefault();
  },
  upArrowPressed: function(event) {
    var index, sel;
    sel = this.get('highlightedIndex');
    index = event.ctrlKey || event.metaKey ? 0 : sel - 1;
    this.setHighlightedIndex(index, true);
    return event.preventDefault();
  },
  downArrowPressed: function(event) {
    var clen, index, sel;
    sel = this.get('highlightedIndex');
    clen = this.get('selectableOptions.length');
    index = event.ctrlKey || event.metaKey ? clen - 1 : sel + 1;
    this.setHighlightedIndex(index, true);
    return event.preventDefault();
  },
  setHighlightedIndex: function(index, ensureVisible) {
    if (!this.ensureIndex(index)) {
      return;
    }
    this.set('highlightedIndex', index);
    if (ensureVisible) {
      return this.ensureVisible(index);
    }
  },
  ensureIndex: function(index) {
    var clen;
    clen = this.get('selectableOptions.length');
    return index >= 0 && index < clen;
  },
  ensureVisible: function(index) {
    var $listView, endIndex, item, listView, newIndex, numRows, startIndex;
    $listView = this.$('.ember-list-view');
    listView = Ember.View.views[$listView.attr('id')];
    startIndex = listView._startingIndex();
    numRows = listView._childViewCount() - 1;
    endIndex = startIndex + numRows;
    item = this.get('selectableOptions').objectAt(index);
    newIndex = this.get('groupedContent').indexOf(item);
    if (index === 0) {
      return $listView.scrollTop(0);
    } else if (newIndex < startIndex) {
      return $listView.scrollTop(newIndex * this.get('rowHeight'));
    } else if (newIndex >= endIndex) {
      return $listView.scrollTop((newIndex - numRows + 1.5) * this.get('rowHeight'));
    }
  }
});

Ember.Handlebars.helper('select-component', Ember.Widgets.SelectComponent);


})();

(function() {

var get, set;

get = function(object, key) {
  if (!object) {
    return void 0;
  }
  if (!key) {
    return object;
  }
  return (typeof object.get === "function" ? object.get(key) : void 0) || object[key];
};

set = function(object, key, value) {
  if (!(object && key)) {
    return;
  }
  return (typeof object.set === "function" ? object.set(key, value) : void 0) || (object[key] = value);
};

Ember.Widgets.MultiSelectOptionView = Ember.View.extend({
  tagName: 'li',
  templateName: 'multi_select_item',
  classNames: 'ember-select-search-choice',
  labelPath: Ember.computed.alias('controller.optionLabelPath'),
  didInsertElement: function() {
    this._super();
    return this.labelPathDidChange();
  },
  labelPathDidChange: Ember.observer(function() {
    var labelPath, path;
    labelPath = this.get('labelPath');
    path = labelPath ? "context." + labelPath : 'context';
    Ember.defineProperty(this, 'label', Ember.computed.alias(path));
    return this.notifyPropertyChange('label');
  }, 'context', 'labelPath')
});

Ember.Widgets.MultiSelectComponent = Ember.Widgets.SelectComponent.extend({
  layoutName: 'multi-select',
  selections: void 0,
  values: Ember.computed(function(key, value) {
    var selections, valuePath;
    if (arguments.length === 2) {
      if (!value) {
        return;
      }
      valuePath = this.get('optionValuePath');
      this.set('selections', this.get('content').filter(function(item) {
        return value.contains(get(item, valuePath));
      }));
      return value;
    } else {
      valuePath = this.get('optionValuePath');
      selections = this.get('selections');
      if (valuePath) {
        return selections.getEach(valuePath);
      } else {
        return selections;
      }
    }
  }).property('selections.@each'),
  selectionItemView: Ember.Widgets.MultiSelectOptionView,
  searchView: Ember.TextField.extend({
    "class": 'ember-select-input',
    valueBinding: 'parentView.query',
    focusIn: function(event) {
      return this.set('parentView.showDropdown', true);
    }
  }),
  filteredContent: Ember.computed(function() {
    var content, query, selections,
      _this = this;
    content = this.get('content');
    query = this.get('query');
    selections = this.get('selections');
    if (!(content && selections)) {
      return [];
    }
    return this.get('content').filter(function(item) {
      return !selections.contains(item) && _this.matcher(query, item);
    });
  }).property('content.@each', 'optionLabelPath', 'query', 'selections.@each'),
  selectionDidChange: Ember.observer(function() {
    var selection, selections;
    selections = this.get('selections');
    selection = this.get('selection');
    this.set('selection', null);
    this.set('query', '');
    if (!Ember.isEmpty(selection) && !selections.contains(selection)) {
      return selections.pushObject(selection);
    }
  }, 'selection'),
  didInsertElement: function() {
    this._super();
    if (!this.get('selections')) {
      this.set('selections', []);
    }
    if (!this.get('values')) {
      return this.set('values', []);
    }
  },
  deletePressed: function(event) {
    if (event.target.selectionStart === 0) {
      return this.removeSelectItem(this.get('selections.lastObject'));
    }
  },
  removeSelectItem: function(item) {
    return this.get('selections').removeObject(item);
  },
  actions: {
    removeSelectItem: function(item) {
      return this.removeSelectItem(item);
    }
  }
});

Ember.Handlebars.helper('multi-select-component', Ember.Widgets.MultiSelectComponent);


})();