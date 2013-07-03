var nike = nike || {};
nike.hypervenom = nike.hypervenom || {}, nike.hypervenom.utils = function (a, b) {
	"use strict";

	function c(a) {
		document.getElementById(a + "-loader").className += " hide"
	}

	function d(a) {
		document.getElementById(a + "-loader").className = "image-loader"
	}
	var e, f, g, h, i = {};
	b && (i = a.extend({}, i, b));
	var j = function (a, b) {
		var c;
		return function () {
			var d = this,
				e = arguments,
				f = function () {
					b.apply(d, e), c = null
				};
			c && clearTimeout(c), c = setTimeout(f, a || 250)
		}
	}, k = function (a) {
		c(a)
	}, l = function () {
		c("lightbox")
	}, m = function () {
		h = f.getModule(g.VIDEO_PLAYER)
	};
	return {
		debounce: j,
		isMobile: e,
		onTemplateLoadDesktop: k,
		onTemplateReady: m,
		onTemplateLoadLightbox: l,
		hideLoader: c,
		showLoader: d
	}
}($jQ);
var nike = nike || {};
nike.hypervenom = nike.hypervenom || {}, nike.hypervenom.preloadImages = function (a) {
	"use strict";

	function b() {
		for (var a = e.length - 1; a >= 0; a--) g[e[a].getAttribute("data-img-order")] = e[a].getAttribute("data-img-src");
		c(g)
	}

	function c(b) {
		for (var c in b) b.hasOwnProperty(c) && e[c] && (e[c].src = b[c], h ? e[c].className += " loaded" : a(e[c]).delay(1500).animate({
			opacity: 1
		}, 1500));
		d()
	}

	function d() {
		for (var a = f.length - 1; a >= 0; a--) f[a].className += " loaded"
	}
	var e = document.getElementsByClassName ? document.getElementsByClassName("preload-image") : document.querySelectorAll(".preload-image"),
		f = document.getElementsByClassName ? document.getElementsByClassName("hotspot") : document.querySelectorAll(".hotspot"),
		g = {}, h = Modernizr.csstransitions,
		i = function () {
			b()
		};
	return i(), {
		init: i
	}
}($jQ);
var nike = nike || {};
nike.hypervenom = nike.hypervenom || {}, nike.hypervenom.lightbox = function (a) {
	"use strict";

	function b() {
		a(function () {
			h = a('<a class="close">X</a>'), f = a('<div id="overlay"></div>'), g = a('<div id="overlay-content">' + j + "</div>"), a("body").append(f.append(g))
		})
	}

	function c(a, b, c) {
		if (f && !i) {
			a && (g.hide().addClass(b).append(a).prepend(h), f.on("click", function () {
				d()
			}), h.on("click", function () {
				d()
			}), g.children().on("click", function (a) {
				a.stopPropagation()
			})), b && f.addClass(b);
			var e;
			void 0 !== c && (e = c.height), f.fadeIn(300, function () {
				void 0 === e && (e = g.height()), g.css({
					"margin-top": -e / 2
				}), g.fadeIn(400)
			}), i = !0
		}
	}

	function d() {
		f && (g.html(""), f.fadeOut(400, function () {
			f.removeClass()
		}), i = !1)
	}

	function e() {
		document.getElementById("loading-image").style.display = "none"
	}
	var f, g, h, i = !1,
		j = '<img src="/static/images/ajax-loader.gif" alt="loading..." class="loading-image" id="lightbox-loader" />';
	return {
		init: b,
		show: c,
		hide: d,
		hideLoading: e
	}
}($jQ);
var nike = nike || {};
nike.hypervenom = nike.hypervenom || {}, nike.hypervenom.nav = function (a, b) {
	"use strict";
	this.skrollr = b, this.NUMBER_OF_MENU_ICONS = 6, this.IMAGE_HEIGHT = 92, this.ACTIVE_BAR_OFFSET = 26, this.ANIMATION_TIME = 400, this.DEFAULT_EASING = "cubic", this.ACTIVE_IMAGE_URL = "/static/images/section-mark-active.png", this.INACTIVE_IMAGE_URL = "/static/images/section-mark-inactive.png", this.LABEL_FILE_LOCATION = "assets/images/foreground-elements/nav/labels/", this.labels = ["Introducing Hypervenom", "Deadly Deception", "Leathal Agility", "A new breed", "Watch Hypervenom", "Supernatural Attack"], this.LABEL_CLASS_NAME = "label", this.LABEL_ID_NAME = "label", this.ICON_CLASS_NAME = "section-icon", this.ICON_ID_NAME = "icon", this.scrollBar = null, this.sectionIconsContainer = null, this.container = null, this.scrollHeight = 0, this.itemSpacing = 0, this.pageHeight = 0, this.currentSection = 1, this.previousSection = 1, this.pageHeight = 0, this.stopScrollBarHeight = !1, this.positions = [0, 580, 1210, 1935, 2850, 4600], this.distances = [], this.footerHeight = 600, this.distanceToTopOfNav = 0, this.topOfNavYOffset = 0, this.bottomOfNavAbsolute = 0, this.bottomBoundary = 0, this.distanceToBottomBoundary = 0, this.activeClass = " active-icon", this.deactiveClass = "deactive-icon", this.activeIcons = document.getElementsByClassName ? document.getElementsByClassName("active-icon") : document.querySelectorAll(".active-icon"), this.deactiveIcons = document.getElementsByClassName ? document.getElementsByClassName("deactive-icon") : document.querySelectorAll(".deactive-icon"), this.init = function () {
		this.container = document.getElementById("scroll-progress"), this.scrollBar = document.getElementById("scroll-progress-bar"), this.sectionIconsContainer = document.getElementById("scroll-section-images"), this.scrollHeight = a("#scroll-progress-background").css("height"), this.scrollHeight = this.scrollHeight.substring(0, this.scrollHeight.length - 2), this.itemSpacing = (this.scrollHeight - this.IMAGE_HEIGHT / 2) / (this.NUMBER_OF_MENU_ICONS - 1), this.pageHeight = a(document).height(), this.createIcons(), this.addEventListeners(), this.calculateDistances(), this.update()
	}, this.addEventListeners = function () {
		var b = this;
		a(window).resize(_.debounce(function () {
			b.update()
		}, 300)), this.skrollr.on("beforerender", function () {
			b.update()
		})
	}, this.createIcons = function () {
		for (var a = 0; a < this.NUMBER_OF_MENU_ICONS; ++a) this.createIcon(a)
	}, this.updateIcons = function () {
		for (var a = 0; a < this.NUMBER_OF_MENU_ICONS; ++a) a <= this.currentSection ? (this.activateIcon(a), a === this.currentSection ? this.activateLabel(a) : this.deactivateLabel(a)) : (this.deactivateIcon(a), this.deactivateLabel(a))
	}, this.createIcon = function (b) {
		var c = this,
			d = document.getElementById(this.ICON_ID_NAME + b);
		a(d).on("click", function (a) {
			a.preventDefault(), c.onSectionIconClickHandler(a)
		}), a(d).mouseenter(function () {
			var a = this.getAttribute("data-label-id");
			document.getElementById(a).style.display = "block"
		}).mouseleave(function () {
				var a = this.getAttribute("data-label-id"),
					b = document.getElementById(a);
				b.style.display = "none"
			})
	}, this.activateIcon = function (b) {
		a(document.getElementById(this.ICON_ID_NAME + b)).removeClass(this.deactiveClass).addClass(this.activeClass)
	}, this.deactivateIcon = function (b) {
		a(document.getElementById(this.ICON_ID_NAME + b)).removeClass(this.activeClass).addClass(this.deactiveClass)
	}, this.activateLabel = function (b) {
		var c = document.getElementById(this.LABEL_ID_NAME + b);
		a(c).hasClass("current-section") || (a(c).addClass("current-section"), $jQ(document).trigger("current-section", b))
	}, this.deactivateLabel = function (b) {
		var c = document.getElementById(this.LABEL_ID_NAME + b);
		a(c).removeClass("current-section")
	}, this.gotoPosition = function (b, c) {
		b = parseInt(b, 10);
		var d = a(window).height(),
			e = this.positions[b] - d / 2 + 1;
		this.skrollr.animateTo(e, {
			duration: this.ANIMATION_TIME,
			easing: this.DEFAULT_EASING,
			done: c
		})
	}, this.getCurrentSection = function (b) {
		for (var c = 0; c < this.positions.length; ++c) {
			var d = this.positions[c],
				e = this.positions[c + 1] || a(document).outerHeight(!0);
			if (b > d && e > b || b === d) return c
		}
		return 0
	}, this.calculatePositions = function () {
		this.distanceToTopOfNav = (a(window).height() - this.scrollHeight) / 2, this.topOfNavYOffset = parseFloat(this.skrollr.getScrollTop()) + parseFloat(this.distanceToTopOfNav), this.bottomOfNavAbsolute = this.topOfNavYOffset + parseFloat(this.scrollHeight), this.bottomBoundary = this.pageHeight - this.footerHeight, this.distanceToBottomBoundary = this.bottomOfNavAbsolute - this.bottomBoundary
	}, this.calculateDistances = function () {
		for (var a = 0, b = this.positions.length; b > a; ++a) {
			var c = this.positions[a],
				d = this.positions[a + 1] || this.pageHeight,
				e = d - c;
			0 === a && (e -= window.innerWidth / 2), this.distances.push(d - c)
		}
	}, this.getYOffset = function () {
		var b = this.skrollr.getScrollTop(),
			c = a(window).height() / 2,
			d = b + c;
		return d
	}, this.calculateScale = function (a) {
		var b = this.distances[a],
			c = b / (this.scrollHeight / (this.NUMBER_OF_MENU_ICONS - 1));
		return c
	}, this.update = function () {
		var b = this.getYOffset();
		this.currentSection = this.getCurrentSection(b);
		var c = this.calculateScale(this.currentSection),
			d = b - this.positions[this.currentSection],
			e = this.currentSection * (this.itemSpacing + this.ACTIVE_BAR_OFFSET / (this.NUMBER_OF_MENU_ICONS - 1)),
			f = d / c,
			g = e + f;
		this.currentSection + 1 !== this.NUMBER_OF_MENU_ICONS && (g = g > this.scrollHeight ? this.scrollHeight : g, a(this.scrollBar).height(g + "px")), this.checkForBottomBoundary(), this.updateIcons(), this.previousSection = this.currentSection
	}, this.checkForBottomBoundary = function () {
		this.calculatePositions(), this.bottomOfNavAbsolute >= this.bottomBoundary ? this.moveElementY(this.container, this.diff2) : this.moveElementY(this.container, 0)
	}, this.moveElementY = function (a, b) {
		var c, d = a,
			e = document.documentElement.style;
		"MozAppearance" in e ? c = "gecko" : "WebkitAppearance" in e ? c = "webkit" : "string" == typeof navigator.cpuClass && (c = "trident");
		var f, g = {
				trident: "ms",
				gecko: "Moz",
				webkit: "Webkit",
				presto: "O"
			}[c],
			h = document.createElement("div"),
			i = g + "Perspective",
			j = g + "Transform";
		h.className += "mynewelement", h.style[i] !== f ? (d.style[i] = 1e3, d.style[j] = "translate3d(0px," + -b + "px, 0)") : h.style[j] !== f ? d.style[j] = "translate(0px," + -b + "px)" : d.style.marginTop === top ? -b + "px" : ""
	}, this.onSectionIconClickHandler = function (b) {
		var c = b.target.id;
		c = c.substring(4, c.length), nike.hypervenom.tracking.trackScroll = !1, this.gotoPosition(c, function () {
			nike.hypervenom.tracking.trackScroll = !0, a(document).trigger("current-section", c)
		})
	}
};
var nike = nike || {};
nike.hypervenom = nike.hypervenom || {}, nike.hypervenom.hotspots = function (a) {
	"use strict";
	var b, c = nike.hypervenom.utils,
		d = function (b) {
			var d = b.offset(),
				e = a("#" + b.data("elid")),
				f = e.find(".content");
			e.removeClass("alt-position");
			var g, h, i = e.data("position"),
				j = 0,
				k = 0,
				l = e.height(),
				m = e.width(),
				n = function () {
					switch (i) {
						case "top-left":
							j = 0, k = 0;
							break;
						case "top-right":
							j = -m;
							break;
						case "bottom-left":
							k = -l;
							break;
						case "bottom-right":
							j = -m, k = -l
					}
					g = d.left + j, h = d.top + k - (parseInt(a("#skrollr-body").css("top"), 10) || 0)
				};
			if (n(), c.isMobile) h = (a(window).height() - f.height()) / 2 + a(window).scrollTop(), e.css({
				top: h
			});
			else {
				var o = parseInt(f.css("left"), 10) || 0;
				(0 > g + o || g + m + o > a(window).width()) && (e.addClass("alt-position"), i = e.data("alt-position"), n()), e.css({
					left: g,
					top: h
				})
			}
		}, e = function (a) {
			nike.hypervenom.hotspots.openedHotspot = a
		}, f = function () {
			return nike.hypervenom.hotspots.openedHotspot
		}, g = function (b) {
			b.addClass("show"), a("#popups-overlay").addClass("show")
		}, h = function (c) {
			c || (c = "", a("#popups-overlay").removeClass("show")), a(".popover").not(c).removeClass("show"), a(window).off("resize", j), a(window).off("scroll", k), b = void 0
		}, i = function () {
			a(".popover").on("click", ".close", function (a) {
				h(), a.stopPropagation()
			}), a(".popover").on("click", ".content", function (a) {
				a.stopPropagation()
			}), a("#popups-overlay").on("click", function (a) {
				c.isMobile && (h(), a.stopPropagation())
			}), a(document).on("click", function (a) {
				h(), a.stopPropagation()
			}), a(".hotspot").on("click", function (b) {
				var f = a(this),
					i = a("#" + f.data("elid"));
				b.preventDefault(), i.hasClass("show") ? h() : (a(this).hasClass("AnalyticsHandler") && a(document).trigger("track-link", b), d(f), e(f), g(i), h(i)), a(window).on("resize", j), c.isMobile && a(window).on("scroll", k), b.stopPropagation()
			})
		}, j = _.debounce(function () {
			d(f())
		}, 300),
		k = _.throttle(function () {
			d(f())
		}, 100),
		l = function () {
			i()
		};
	return l(), {
		init: l,
		openedHotspot: b,
		positionHotspot: d,
		getOpenedHotspot: f
	}
}($jQ);
var nike = nike || {};
nike.hypervenom = nike.hypervenom || {}, nike.hypervenom.video = function (a) {
	"use strict";
	var b, c, d = function () {
		brightcove.createExperiences()
	}, e = function (b) {
		var c = 985,
			d = 558,
			e = c / d,
			f = a("#wrapper").width() - 40,
			g = f,
			h = f / e,
			i = '<div style="width: ' + g + 'px;">' + '<object id="' + b["data-experience-id"].value + '" class="BrightcoveExperience">' + '<param name="bgcolor" value="#FFFFFF" />' + '<param name="width" value="' + g + '" />' + '<param name="height" value="' + h + '" />' + '<param name="playerID" value="' + b["data-player-id"].value + '" />' + '<param name="isVid" value="true" />' + '<param name="isUI" value="true" />' + '<param name="dynamicStreaming" value="true" />' + '<param name="cacheAMFURL" value="https://share.brightcove.com/services/messagebroker/amf"/>' + '<param name="secureConnections" value="true" />' + '<param name="videoId" value="' + b["data-video-id"].value + '">' + '<param name="wmode" value="transparent" />' + '<param name="includeAPI" value="true" />' + '<param name="templateLoadHandler" value="' + b["data-template-load"].value + '" />' + '<param name="templateReadyHandler" value="' + b["data-template-ready"].value + '" />' + "</object>" + "</div>";
		return {
			objectHtml: i,
			width: g,
			height: h
		}
	}, f = function (a) {
		b = brightcove.getExperience(a), c = b.getModule(APIModule.VIDEO_PLAYER), c.pause(!1)
	};
	return {
		init: d,
		createVideo: e,
		play: f
	}
}($jQ);
var nike = nike || {};
nike.hypervenom = nike.hypervenom || {}, nike.hypervenom.popovers = function (a) {
	"use strict";
	var b;
	b = {}, b.shapes = {
		desktop: {
			sketch: [
				{outside: [{x: 31,y: 0}, {x: 369,y: 0}, {x: 369,y: 100}, {x: 0,y: 140}],inside: [{x: 41,y: 10}, {x: 359,y: 10}, {x: 359,y: 89}, {x: 20,y: 119}]},
				{outside: [{x: 0,y: 40}, {x: 370,y: 0}, {x: 337,y: 180}, {x: 0,y: 180}],inside: [{x: 10,y: 50}, {x: 349,y: 20}, {x: 327,y: 170}, {x: 10,y: 170}]},
				{outside: [{x: 0,y: 0}, {x: 337,y: 0}, {x: 370,y: 190}, {x: 0,y: 148}],inside: [{x: 10,y: 10}, {x: 327,y: 10}, {x: 349,y: 169}, {x: 10,y: 140}]},
				{outside: [{x: 0,y: 0}, {x: 370,y: 40}, {x: 370,y: 190}, {x: 30,y: 190}],inside: [{x: 20,y: 20}, {x: 360,y: 50}, {x: 360,y: 180}, {x: 40,y: 180}]},
				{outside: [{x: 0,y: 40}, {x: 370,y: 0}, {x: 338,y: 140}, {x: 0,y: 140}],inside: [{x: 10,y: 50}, {x: 349,y: 20}, {x: 327,y: 130}, {x: 10,y: 130}]}],
			boots: [
				{outside: [{x: 0,y: 0}, {x: 369,y: 39}, {x: 369,y: 309}, {x: 39,y: 309}],inside: [{x: 20,y: 19}, {x: 359,y: 49}, {x: 359,y: 299}, {x: 48,y: 299}]},
				{outside: [{x: 4,y: 40}, {x: 373,y: 0}, {x: 333,y: 309}, {x: 4,y: 309}],inside: [{x: 14,y: 50}, {x: 353,y: 20}, {x: 323,y: 299}, {x: 14,y: 299}]},
				{outside: [{x: 0,y: 0}, {x: 369,y: 39}, {x: 369,y: 309}, {x: 39,y: 309}],inside: [{x: 20,y: 19}, {x: 359,y: 49}, {x: 359,y: 299}, {x: 48,y: 299}]},
				{outside: [{x: 39,y: 3}, {x: 369,y: 3}, {x: 369,y: 272}, {x: 0,y: 312}],inside: [{x: 49,y: 13}, {x: 359,y: 13}, {x: 359,y: 262}, {x: 20,y: 292}]},
				{outside: [{x: 0,y: 0}, {x: 369,y: 39}, {x: 369,y: 309}, {x: 39,y: 309}],inside: [{x: 20,y: 19}, {x: 359,y: 49}, {x: 359,y: 299}, {x: 48,y: 299}]},
				{outside: [{x: 4,y: 40}, {x: 373,y: 0}, {x: 333,y: 309}, {x: 4,y: 309}],inside: [{x: 14,y: 50}, {x: 353,y: 20}, {x: 323,y: 299}, {x: 14,y: 299}]}]
		},
		mobile: {
			sketch: [],
			boots: []
		}
	}, b.calculateMobilePoints = function () {
		var b = this,
			c = function (c) {
				var d = .75,
					e = b.shapes.desktop,
					f = b.shapes.mobile;
				a.each(e[c], function (b, e) {
					var g = {
						inside: [],
						outside: []
					};
					a.each(e.outside, function (a, b) {
						g.outside[a] = {}, g.outside[a].x = b.x * d, g.outside[a].y = b.y * d
					}), a.each(e.inside, function (a, b) {
						g.inside[a] = {}, g.inside[a].x = b.x * d, g.inside[a].y = b.y * d
					}), f[c].push(g)
				})
			};
		c("boots"), c("sketch")
	}, b.resize = function (b, c) {
		a("#popups-overlay").addClass("invisible2");
		var d, e, f = b.find("p").outerHeight(),
			g = b.width();
		if (d = c.outside[2].y - c.outside[1].y, e = c.outside[3].y - c.outside[0].y, e > d && (d = e), f > d) {
			var h = f - d;
			c.inside[2].y += h, c.inside[3].y += h, c.outside[2].y += h, c.outside[3].y += h, b.height(f), b.width(g), b.find("canvas").attr({
				width: g,
				height: f
			}).css({
					width: g,
					height: f
				})
		}
		a("#popups-overlay").removeClass("invisible2")
	}, b.drawOutside = function (a, b) {
		a.globalCompositeOperation = "source-over", a.beginPath(), a.moveTo(b[0].x, b[0].y);
		for (var c = 1; c < b.length; c++) a.lineTo(b[c].x, b[c].y);
		a.closePath(), a.lineWidth = 1, a.strokeStyle = "#ff3800", a.stroke()
	}, b.drawInside = function (b, c, d, e) {
		c.beginPath(), c.moveTo(d[0].x, d[0].y);
		for (var f = 1; f < d.length; f++) c.lineTo(d[f].x, d[f].y);
		if (c.closePath(), e) {
			a("#popups-overlay").addClass("invisible2"), c.shadowBlur = 20, c.shadowColor = "black", c.fill(), c.globalCompositeOperation = "source-atop", c.drawImage(e, 0, 0);
			var g = b.find("p").outerHeight(),
				h = [{
					x: 0,
					y: b.height() - g
				}, {
					x: b.width(),
					y: b.height() - g
				}, {
					x: b.width(),
					y: b.height()
				}, {
					x: 0,
					y: b.height()
				}];
			c.shadowColor = "transparent", this.drawInside(b, c, h), a("#popups-overlay").removeClass("invisible2")
		} else c.fill()
	}, b.draw = function (b, c) {
		var d, e = this,
			f = document.createElement("IMG");
		"sketch" === c ? d = a("#popover-sketch" + (b + 1) + " .content") : (d = a("#popover-boot" + (b + 1) + " .content"), f.src = "/static/images/hotspots/popover_boot" + (b + 1) + ".jpg");
		var g = d.data("position");
		d.find(".content").append('<span class="close ' + g + '"></span>');
		var h = d.find("canvas")[0];
		if (h.getContext && h.getContext("2d")) {
			var i = h.getContext("2d");
			i.clearRect(0, 0, h.width, h.height);
			var j = "desktop";
			nike.hypervenom.utils.isMobile && (j = "mobile");
			var k = parseInt(d.parent("div").data("shape"), 10) - 1,
				l = a.extend(!0, {}, this.shapes[j][c][k]);
			if (this.resize(d, l, c), window.devicePixelRatio > 1) {
				var m = a(h).attr("width"),
					n = a(h).attr("height"),
					o = m,
					p = n;
				a(h).attr("width", m * window.devicePixelRatio), a(h).attr("height", n * window.devicePixelRatio), a(h).css("width", o), a(h).css("height", p), i.scale(window.devicePixelRatio, window.devicePixelRatio)
			}
			"sketch" === c ? (this.drawInside(d, i, l.inside), e.drawOutside(i, l.outside)) : f.onload = function () {
				e.drawInside(d, i, l.inside, f), e.drawOutside(i, l.outside)
			}
		} else "sketch" !== c && d.append("<img src='" + f.src + "' class='' />")
	}, b.setCanvasSizes = function () {
		var b = "desktop";
		nike.hypervenom.utils.isMobile && (b = "mobile"), a(".popover canvas").each(function () {
			var c = a(this).data(b + "-width"),
				d = a(this).data(b + "-height");
			a(this).attr("width", c).css("width", c), a(this).attr("height", d).css("height", d), a(this).parent(".content").attr("width", c).css("width", c).attr("height", d).css("height", d)
		})
	}, b.drawCanvases = function () {
		b.setCanvasSizes();
		for (var a = 0; 5 >= a; a++) b.draw(a, "boots");
		for (a = 0; 10 >= a; a++) b.draw(a, "sketch")
	};
	var c = function () {
		b.calculateMobilePoints(), a("#popups-overlay").height(a(document).height()), b.drawCanvases(), a(document).bind("isMobileChanged", function () {
			b.drawCanvases()
		})
	};
	return {
		n: b,
		init: c,
		shapes: b.shapes
	}
}($jQ);
var nike = nike || {};
nike.hypervenom = nike.hypervenom || {}, nike.hypervenom.init = function (a, b, c) {
	"use strict";

	function d(b) {
		var c = document.getElementById("navigation"),
			d = document.getElementById("footer"),
			e = '<div data-gadget="nike.gadget.OneNikeNav" id="nike-nav"></div>',
			f = '<div data-gadget="nike.gadget.mobile.OneNikeNav" id="nike-nav"></div>',
			g = '<div data-gadget="nike.gadget.OneNikeFooter" id="nike-footer"></div>',
			h = '<div data-gadget="nike.gadget.mobile.OneNikeFooter" id="nike-footer"></div>';
		switch (b) {
			case "desktop":
				i("data-desktop-css"), c.innerHTML = e, d.innerHTML = g, u.load(function () {
					yepnope && yepnope.injectCss && (yepnope.injectCss("http://www.nike.com/apps/nike/ui/v4/nike-cq-wcm-head.css"), yepnope.injectCss("http://www.nike.com/etc/designs/nike/pes/nike.cq.pes.css"))
				});
				break;
			case "mobile":
				i("data-mobile-css"), c.innerHTML = f, d.innerHTML = h, a("#nike-nav").on("click touchstart", ".login-menu a", function () {
					var b = a(this),
						c = b.attr("href");
					c && /^\//.test(c) && b.attr("href", "http://m.nike.com" + c)
				});
				break;
			default:
				i("data-mobile-css"), c.innerHTML = f, d.innerHTML = h
		}
		if (!nike.isGadgetLoaded(a("#nike-nav"))) {
			try {
				nike.store.ui.widgets.ModalDialog.prototype.autoShow = !1, nike.gadget.mobile.OneNikeNav.showSearchDropdown(!1, !1)
			} catch (j) {}
			a(".modal, .modalBlock").remove(), nike.reloadGadget(document.getElementById("nike-nav"))
		}
		nike.isGadgetLoaded(a("#nike-footer")) || nike.reloadGadget(document.getElementById("nike-footer"))
	}

	function e() {
		for (var a = s.length - 1; a >= 0; a--) {
			var b, c = s[a];
			b = JSON.parse(c.getAttribute("data-parallax")), f(b, c)
		}
	}

	function f(c, d) {
		a.each(c, function (a, c) {
			b.csstransforms3d ? d.setAttribute(a, "transform: translate3d(" + c[0] + "px, " + c[1] + "px, 0);") : b.csstransforms ? d.setAttribute(a, "transform: translate(" + c[0] + "px, " + c[1] + "px);") : d.setAttribute(a, "margin-left: " + c[0] + "px; margin-top: " + c[1] + "px;")
		})
	}

	function g() {
		m = skrollr.init({
			smoothScrolling: !0,
			forceHeight: !1
		}), u.load(function () {
			m.refresh("#athlete")
		})
	}

	function h() {
		var b = new nike.hypervenom.nav(a, m);
		b.init()
	}

	function i(a) {
		var b = t.getAttribute(a);
		t.setAttribute("href", b)
	}

	function j(c, d) {
		d && b.touch && d.preventDefault();
		for (var e = r.length - 1; e >= 0; e--) {
			var f = a(r[e]);
			f.find("object, iframe").remove(), c && q.showLoader(r[e].getAttribute("data-experience-id")), f.prepend(o.createVideo(r[e].attributes).objectHtml)
		}
		o.init()
	}

	function k() {
		a(".video-thumbnail").on("click", function (a) {
			a.preventDefault();
			var b = this.attributes,
				c = o.createVideo(b);
			p.show(c.objectHtml, "video-overlay-player", {
				height: c.height
			}), o.init()
		}), window.addEventListener ? window.addEventListener("resize", function () {
			q.debounce(300, j(!0))
		}, !1) : window.attachEvent && window.attachEvent("resize", function () {
			q.debounce(300, j(!0))
		})
	}

	function l() {
		setTimeout(function () {
			b.csstransitions ? a("#monster-1").addClass("show") : a("#monster-1").animate({
				opacity: 1
			}, 1e3)
		}, 2e3)
	}
	var m, n = {}, o = nike.hypervenom.video,
		p = nike.hypervenom.lightbox,
		q = nike.hypervenom.utils,
		r = document.getElementsByClassName ? document.getElementsByClassName("video-player") : document.querySelectorAll(".video-player"),
		s = document.getElementsByClassName ? document.getElementsByClassName("parallax-item") : document.querySelectorAll(".parallax-item"),
		t = document.getElementById("nike-css"),
		u = a(window);
	c && (n = a.extend({}, n, c));
	var v = function () {
		b.touch && !b.ipad ? (d("mobile"), q.isMobile = !0, a("html").addClass("mobile")) : (d("desktop"), q.isMobile = !1), e(), b.touch || g(), b.touch || h(), nike.hypervenom.lightbox.init(), k(), l(), setTimeout(function () {
			j()
		}, 2e3), setTimeout(function () {
			nike.hypervenom.popovers.init()
		}, 1500), a(document).ready(function () {
			nike.hypervenom.tracking({
				s_account: window.trackingAccount ? window.trackingAccount : "nikecomdev",
				codeLocation: "http://store.nike.com/cms/common/resources/thirdparty/omniture/s_code.min.js",
				extraInternalLinkFilters: ""
			})
		})
	}, w = function () {
		p.hideLoading()
	};
	return v(), {
		init: v,
		onTemplateLoadLightbox: w
	}
}($jQ, $Modernizr);
var analyticsReady, nike = nike || {};
nike.hypervenom = nike.hypervenom || {}, nike.hypervenom.tracking = function (a) {
	"use strict";
	window.s_account = a.s_account;
	var b, c, d = a.codeLocation,
		e = {}, f = window,
		g = $(window),
		h = "nikecom",
		i = "hypervenom",
		j = "",
		k = {}, l = "prop10,prop12,prop3,eVar4",
		m = "",
		n = ["channel"].concat(l.split(",")).concat(["events"]),
		o = !0,
		p = [{
			name: "intro",
			tracked: !1,
			elId: ""
		}, {
			name: "attack",
			tracked: !1,
			elId: "boot-1"
		}, {
			name: "deception",
			tracked: !1,
			elId: "boot-2"
		}, {
			name: "agility",
			tracked: !1,
			elId: "boot-3"
		}, {
			name: "new breed ",
			tracked: !1,
			elId: "athlete-hero"
		}, {
			name: "design",
			tracked: !1,
			elId: "design"
		}],
		q = function (a) {
			if (nike.hypervenom.tracking.trackScroll && p[a].tracked === !1) {
				var b = {
					pageName: p[a].name
				};
				w(b), p[a].tracked = !0
			}
		}, r = function () {
			nike.hypervenom.tracking.trackScroll = !0, $jQ(document).on("current-section", function (a, b) {
				q(b)
			}), $jQ(document).on("track-link", function (a, b) {
				v(b)
			}), $(document).on("click", "[data-analytics-event]", function (a) {
				v(a)
			})
		}, s = function () {
			$.when(u()).then(function () {
				b = e.t, c = e.tl, $("[data-analytics-page]").each(function () {
					w($(this).data("analytics-page")), p[0].tracked = !0
				}), r(), nike.hypervenom.utils.isMobile && t()
			})
		}, t = function () {
			h = "nikecom:mobile", $.each(p, function (a, b) {
				b.elId && (b.offsetTop = $("#" + b.elId).offset().top)
			});
			var a = function () {
				var a = g.scrollTop(),
					c = g.height(),
					d = 0;
				$.each(p, function (b, e) {
					e.tracked || (d++, e.offsetTop >= a && e.offsetTop < a + c && $jQ(document).trigger("current-section", b))
				}), 0 === d && g.off("scroll", b)
			}, b = _.throttle(a, 100);
			g.on("scroll", b)
		}, u = function () {
			return analyticsReady = new $.Deferred, Modernizr.load([{
				load: d,
				complete: function () {
					e = f.s || {}, e.linkInternalFilters = e.linkInternalFilters + a.extraInternalLinkFilters, e.linkTrackVars += "," + l, e.linkTrackEvents = m, analyticsReady.resolve(), w = y, x = z
				}
			}]), analyticsReady
		}, v = function (a) {
			var b = $(a.target);
			b = b.is("[data-analytics-event]") ? b : b.closest("[data-analytics-event]"), x(b.data("analytics-event"))
		}, w = function (a) {
			$.when(analyticsReady).then(function () {
				y(a)
			})
		}, x = function (a) {
			$.when(analyticsReady).then(function () {
				z(a)
			})
		}, y = function (a) {
			j = C(a.pageName), A({
				channel: "off platform",
				prop10: "brand",
				prop12: "football",
				products: void 0,
				pageName: [h, i, j + (a.pageState || "")].join(">")
			}), e.t(e)
		}, z = function (a) {
			var b = $.extend(!0, {}, a);
			b.linkContext && (b.linkContext = C(b.linkContext)), b.props.prop3 = i + ":" + a.props.prop3, A(b.props), e.tl(!0, b.type || "o", "page activity click"), A({
				prop3: null
			}), a.pageName && w(a)
		}, A = function (a) {
			$.each(n, function () {
				e[this] && delete e[this]
			}), $.extend(e, {
				prop2: "nikecom",
				prop14: nike.COUNTRY,
				prop15: nike.LANGUAGE,
				prop17: "off platform",
				eVar4: nike.exp.profile.Login.state.loggedIn ? "logged in" : "not logged in"
			}, a || {})
		}, B = function (a, b) {
			k[a] = b
		}, C = function (a) {
			return a.replace(/\{(\w+)\}/g, function (a, b) {
				return k[b] || ""
			})
		};
	return s(), {
		trackScroll: o,
		trackEvent: x,
		trackPage: w,
		trackSection: q,
		setConstant: B
	}
};