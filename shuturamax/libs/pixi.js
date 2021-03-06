/**
 * @license
 * Pixi.JS - v1.3.0
 * Copyright (c) 2012, Mat Groves
 * http://goodboydigital.com/
 *
 * Compiled: 2013-12-16
 *
 * Pixi.JS is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function() {
    function c() {
        return f.Matrix = "undefined" != typeof Float32Array ? Float32Array : Array, f.Matrix
    }

    function d(a) {
        return [(a >> 16 & 255) / 255, (a >> 8 & 255) / 255, (255 & a) / 255]
    }

    function d(a) {
        return [(a >> 16 & 255) / 255, (a >> 8 & 255) / 255, (255 & a) / 255]
    }
    var e = this,
        f = f || {};
    f.Point = function(a, b) {
        this.x = a || 0, this.y = b || 0
    }, f.Point.prototype.clone = function() {
        return new f.Point(this.x, this.y)
    }, f.Point.prototype.constructor = f.Point, f.Rectangle = function(a, b, c, d) {
        this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0
    }, f.Rectangle.prototype.clone = function() {
        return new f.Rectangle(this.x, this.y, this.width, this.height)
    }, f.Rectangle.prototype.contains = function(a, b) {
        if (this.width <= 0 || this.height <= 0) return !1;
        var c = this.x;
        if (a >= c && a <= c + this.width) {
            var d = this.y;
            if (b >= d && b <= d + this.height) return !0
        }
        return !1
    }, f.Rectangle.prototype.constructor = f.Rectangle, f.Polygon = function(a) {
        if (a instanceof Array || (a = Array.prototype.slice.call(arguments)), "number" == typeof a[0]) {
            for (var b = [], c = 0, d = a.length; d > c; c += 2) b.push(new f.Point(a[c], a[c + 1]));
            a = b
        }
        this.points = a
    }, f.Polygon.prototype.clone = function() {
        for (var a = [], b = 0; b < this.points.length; b++) a.push(this.points[b].clone());
        return new f.Polygon(a)
    }, f.Polygon.prototype.contains = function(a, b) {
        for (var c = !1, d = 0, e = this.points.length - 1; d < this.points.length; e = d++) {
            var f = this.points[d].x,
                g = this.points[d].y,
                h = this.points[e].x,
                i = this.points[e].y,
                j = g > b != i > b && (h - f) * (b - g) / (i - g) + f > a;
            j && (c = !c)
        }
        return c
    }, f.Polygon.prototype.constructor = f.Polygon, f.Circle = function(a, b, c) {
        this.x = a || 0, this.y = b || 0, this.radius = c || 0
    }, f.Circle.prototype.clone = function() {
        return new f.Circle(this.x, this.y, this.radius)
    }, f.Circle.prototype.contains = function(a, b) {
        if (this.radius <= 0) return !1;
        var c = this.x - a,
            d = this.y - b,
            e = this.radius * this.radius;
        return c *= c, d *= d, e >= c + d
    }, f.Circle.prototype.constructor = f.Circle, f.Ellipse = function(a, b, c, d) {
        this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0
    }, f.Ellipse.prototype.clone = function() {
        return new f.Ellipse(this.x, this.y, this.width, this.height)
    }, f.Ellipse.prototype.contains = function(a, b) {
        if (this.width <= 0 || this.height <= 0) return !1;
        var c = (a - this.x) / this.width - .5,
            d = (b - this.y) / this.height - .5;
        return c *= c, d *= d, .25 > c + d
    }, f.Ellipse.getBounds = function() {
        return new f.Rectangle(this.x, this.y, this.width, this.height)
    }, f.Ellipse.prototype.constructor = f.Ellipse, c(), f.mat3 = {}, f.mat3.create = function() {
        var a = new f.Matrix(9);
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a
    }, f.mat3.identity = function(a) {
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a
    }, f.mat4 = {}, f.mat4.create = function() {
        var a = new f.Matrix(16);
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
    }, f.mat3.multiply = function(a, b, c) {
        c || (c = a);
        var d = a[0],
            e = a[1],
            f = a[2],
            g = a[3],
            h = a[4],
            i = a[5],
            j = a[6],
            k = a[7],
            l = a[8],
            m = b[0],
            n = b[1],
            o = b[2],
            p = b[3],
            q = b[4],
            r = b[5],
            s = b[6],
            t = b[7],
            u = b[8];
        return c[0] = m * d + n * g + o * j, c[1] = m * e + n * h + o * k, c[2] = m * f + n * i + o * l, c[3] = p * d + q * g + r * j, c[4] = p * e + q * h + r * k, c[5] = p * f + q * i + r * l, c[6] = s * d + t * g + u * j, c[7] = s * e + t * h + u * k, c[8] = s * f + t * i + u * l, c
    }, f.mat3.clone = function(a) {
        var b = new f.Matrix(9);
        return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b
    }, f.mat3.transpose = function(a, b) {
        if (!b || a === b) {
            var c = a[1],
                d = a[2],
                e = a[5];
            return a[1] = a[3], a[2] = a[6], a[3] = c, a[5] = a[7], a[6] = d, a[7] = e, a
        }
        return b[0] = a[0], b[1] = a[3], b[2] = a[6], b[3] = a[1], b[4] = a[4], b[5] = a[7], b[6] = a[2], b[7] = a[5], b[8] = a[8], b
    }, f.mat3.toMat4 = function(a, b) {
        return b || (b = f.mat4.create()), b[15] = 1, b[14] = 0, b[13] = 0, b[12] = 0, b[11] = 0, b[10] = a[8], b[9] = a[7], b[8] = a[6], b[7] = 0, b[6] = a[5], b[5] = a[4], b[4] = a[3], b[3] = 0, b[2] = a[2], b[1] = a[1], b[0] = a[0], b
    }, f.mat4.create = function() {
        var a = new f.Matrix(16);
        return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
    }, f.mat4.transpose = function(a, b) {
        if (!b || a === b) {
            var c = a[1],
                d = a[2],
                e = a[3],
                f = a[6],
                g = a[7],
                h = a[11];
            return a[1] = a[4], a[2] = a[8], a[3] = a[12], a[4] = c, a[6] = a[9], a[7] = a[13], a[8] = d, a[9] = f, a[11] = a[14], a[12] = e, a[13] = g, a[14] = h, a
        }
        return b[0] = a[0], b[1] = a[4], b[2] = a[8], b[3] = a[12], b[4] = a[1], b[5] = a[5], b[6] = a[9], b[7] = a[13], b[8] = a[2], b[9] = a[6], b[10] = a[10], b[11] = a[14], b[12] = a[3], b[13] = a[7], b[14] = a[11], b[15] = a[15], b
    }, f.mat4.multiply = function(a, b, c) {
        c || (c = a);
        var d = a[0],
            e = a[1],
            f = a[2],
            g = a[3],
            h = a[4],
            i = a[5],
            j = a[6],
            k = a[7],
            l = a[8],
            m = a[9],
            n = a[10],
            o = a[11],
            p = a[12],
            q = a[13],
            r = a[14],
            s = a[15],
            t = b[0],
            u = b[1],
            v = b[2],
            w = b[3];
        return c[0] = t * d + u * h + v * l + w * p, c[1] = t * e + u * i + v * m + w * q, c[2] = t * f + u * j + v * n + w * r, c[3] = t * g + u * k + v * o + w * s, t = b[4], u = b[5], v = b[6], w = b[7], c[4] = t * d + u * h + v * l + w * p, c[5] = t * e + u * i + v * m + w * q, c[6] = t * f + u * j + v * n + w * r, c[7] = t * g + u * k + v * o + w * s, t = b[8], u = b[9], v = b[10], w = b[11], c[8] = t * d + u * h + v * l + w * p, c[9] = t * e + u * i + v * m + w * q, c[10] = t * f + u * j + v * n + w * r, c[11] = t * g + u * k + v * o + w * s, t = b[12], u = b[13], v = b[14], w = b[15], c[12] = t * d + u * h + v * l + w * p, c[13] = t * e + u * i + v * m + w * q, c[14] = t * f + u * j + v * n + w * r, c[15] = t * g + u * k + v * o + w * s, c
    }, f.DisplayObject = function() {
        this.last = this, this.first = this, this.position = new f.Point, this.scale = new f.Point(1, 1), this.pivot = new f.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.hitArea = null, this.buttonMode = !1, this.renderable = !1, this.parent = null, this.stage = null, this.worldAlpha = 1, this._interactive = !1, this.defaultCursor = "pointer", this.worldTransform = f.mat3.create(), this.localTransform = f.mat3.create(), this.color = [], this.dynamic = !0, this._sr = 0, this._cr = 1, this.filterArea = new f.Rectangle(0, 0, 1, 1)
    }, f.DisplayObject.prototype.constructor = f.DisplayObject, f.DisplayObject.prototype.setInteractive = function(a) {
        this.interactive = a
    }, Object.defineProperty(f.DisplayObject.prototype, "interactive", {
        get: function() {
            return this._interactive
        },
        set: function(a) {
            this._interactive = a, this.stage && (this.stage.dirty = !0)
        }
    }), Object.defineProperty(f.DisplayObject.prototype, "mask", {
        get: function() {
            return this._mask
        },
        set: function(a) {
            a ? this._mask ? (a.start = this._mask.start, a.end = this._mask.end) : (this.addFilter(a), a.renderable = !1) : (this.removeFilter(this._mask), this._mask.renderable = !0), this._mask = a
        }
    }), Object.defineProperty(f.DisplayObject.prototype, "filters", {
        get: function() {
            return this._filters
        },
        set: function(a) {
            if (a) {
                this._filters && this.removeFilter(this._filters), this.addFilter(a);
                for (var b = [], c = 0; c < a.length; c++)
                    for (var d = a[c].passes, e = 0; e < d.length; e++) b.push(d[e]);
                a.start.filterPasses = b
            } else this._filters && this.removeFilter(this._filters);
            this._filters = a
        }
    }), f.DisplayObject.prototype.addFilter = function(a) {
        var b = new f.FilterBlock,
            c = new f.FilterBlock;
        a.start = b, a.end = c, b.data = a, c.data = a, b.first = b.last = this, c.first = c.last = this, b.open = !0, b.target = this;
        var d, e, g = b,
            h = b;
        e = this.first._iPrev, e ? (d = e._iNext, g._iPrev = e, e._iNext = g) : d = this, d && (d._iPrev = h, h._iNext = d);
        var g = c,
            h = c,
            d = null,
            e = null;
        e = this.last, d = e._iNext, d && (d._iPrev = h, h._iNext = d), g._iPrev = e, e._iNext = g;
        for (var i = this, j = this.last; i;) i.last == j && (i.last = c), i = i.parent;
        this.first = b, this.__renderGroup && this.__renderGroup.addFilterBlocks(b, c)
    }, f.DisplayObject.prototype.removeFilter = function(a) {
        var b = a.start,
            c = b._iNext,
            d = b._iPrev;
        c && (c._iPrev = d), d && (d._iNext = c), this.first = b._iNext;
        var e = a.end,
            c = e._iNext,
            d = e._iPrev;
        c && (c._iPrev = d), d._iNext = c;
        for (var f = e._iPrev, g = this; g.last == e && (g.last = f, g = g.parent););
        this.__renderGroup && this.__renderGroup.removeFilterBlocks(b, e)
    }, f.DisplayObject.prototype.updateTransform = function() {
        this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation));
        var a = this.localTransform,
            b = this.parent.worldTransform,
            c = this.worldTransform;
        a[0] = this._cr * this.scale.x, a[1] = -this._sr * this.scale.y, a[3] = this._sr * this.scale.x, a[4] = this._cr * this.scale.y;
        var d = this.pivot.x,
            e = this.pivot.y,
            g = a[0],
            h = a[1],
            i = this.position.x - a[0] * d - e * a[1],
            j = a[3],
            k = a[4],
            l = this.position.y - a[4] * e - d * a[3],
            m = b[0],
            n = b[1],
            o = b[2],
            p = b[3],
            q = b[4],
            r = b[5];
        a[2] = i, a[5] = l, c[0] = m * g + n * j, c[1] = m * h + n * k, c[2] = m * i + n * l + o, c[3] = p * g + q * j, c[4] = p * h + q * k, c[5] = p * i + q * l + r, this.worldAlpha = this.alpha * this.parent.worldAlpha, this.vcount = f.visibleCount
    }, f.visibleCount = 0, f.DisplayObjectContainer = function() {
        f.DisplayObject.call(this), this.children = []
    }, f.DisplayObjectContainer.prototype = Object.create(f.DisplayObject.prototype), f.DisplayObjectContainer.prototype.constructor = f.DisplayObjectContainer, f.DisplayObjectContainer.prototype.addChild = function(a) {
        if (void 0 != a.parent && a.parent.removeChild(a), a.parent = this, this.children.push(a), this.stage) {
            var b = a;
            do b.interactive && (this.stage.dirty = !0), b.stage = this.stage, b = b._iNext; while (b)
        }
        var c, d, e = a.first,
            f = a.last;
        d = this._filters || this._mask ? this.last._iPrev : this.last, c = d._iNext;
        for (var g = this, h = d; g;) g.last == h && (g.last = a.last), g = g.parent;
        c && (c._iPrev = f, f._iNext = c), e._iPrev = d, d._iNext = e, this.__renderGroup && (a.__renderGroup && a.__renderGroup.removeDisplayObjectAndChildren(a), this.__renderGroup.addDisplayObjectAndChildren(a))
    }, f.DisplayObjectContainer.prototype.addChildAt = function(a, b) {
        if (!(b >= 0 && b <= this.children.length)) throw new Error(a + " The index " + b + " supplied is out of bounds " + this.children.length);
        if (void 0 != a.parent && a.parent.removeChild(a), a.parent = this, this.stage) {
            var c = a;
            do c.interactive && (this.stage.dirty = !0), c.stage = this.stage, c = c._iNext; while (c)
        }
        var d, e, f = a.first,
            g = a.last;
        if (b == this.children.length) {
            e = this.last;
            for (var h = this, i = this.last; h;) h.last == i && (h.last = a.last), h = h.parent
        } else e = 0 == b ? this : this.children[b - 1].last;
        d = e._iNext, d && (d._iPrev = g, g._iNext = d), f._iPrev = e, e._iNext = f, this.children.splice(b, 0, a), this.__renderGroup && (a.__renderGroup && a.__renderGroup.removeDisplayObjectAndChildren(a), this.__renderGroup.addDisplayObjectAndChildren(a))
    }, f.DisplayObjectContainer.prototype.swapChildren = function(a, b) {
        if (a !== b) {
            var c = this.children.indexOf(a),
                d = this.children.indexOf(b);
            if (0 > c || 0 > d) throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
            this.removeChild(a), this.removeChild(b), d > c ? (this.addChildAt(b, c), this.addChildAt(a, d)) : (this.addChildAt(a, d), this.addChildAt(b, c))
        }
    }, f.DisplayObjectContainer.prototype.getChildAt = function(a) {
        if (a >= 0 && a < this.children.length) return this.children[a];
        throw new Error(child + " Both the supplied DisplayObjects must be a child of the caller " + this)
    }, f.DisplayObjectContainer.prototype.removeChild = function(a) {
        var b = this.children.indexOf(a);
        if (-1 === b) throw new Error(a + " The supplied DisplayObject must be a child of the caller " + this);
        var c = a.first,
            d = a.last,
            e = d._iNext,
            f = c._iPrev;
        if (e && (e._iPrev = f), f._iNext = e, this.last == d)
            for (var g = c._iPrev, h = this; h.last == d && (h.last = g, h = h.parent););
        if (d._iNext = null, c._iPrev = null, this.stage) {
            var i = a;
            do i.interactive && (this.stage.dirty = !0), i.stage = null, i = i._iNext; while (i)
        }
        a.__renderGroup && a.__renderGroup.removeDisplayObjectAndChildren(a), a.parent = void 0, this.children.splice(b, 1)
    }, f.DisplayObjectContainer.prototype.updateTransform = function() {
        if (this.visible) {
            f.DisplayObject.prototype.updateTransform.call(this);
            for (var a = 0, b = this.children.length; b > a; a++) this.children[a].updateTransform()
        }
    }, f.blendModes = {}, f.blendModes.NORMAL = 0, f.blendModes.SCREEN = 1, f.Sprite = function(a) {
        f.DisplayObjectContainer.call(this), this.anchor = new f.Point, this.texture = a, this.blendMode = f.blendModes.NORMAL, this._width = 0, this._height = 0, a.baseTexture.hasLoaded ? this.updateFrame = !0 : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)), this.renderable = !0
    }, f.Sprite.prototype = Object.create(f.DisplayObjectContainer.prototype), f.Sprite.prototype.constructor = f.Sprite, Object.defineProperty(f.Sprite.prototype, "width", {
        get: function() {
            return this.scale.x * this.texture.frame.width
        },
        set: function(a) {
            this.scale.x = a / this.texture.frame.width, this._width = a
        }
    }), Object.defineProperty(f.Sprite.prototype, "height", {
        get: function() {
            return this.scale.y * this.texture.frame.height
        },
        set: function(a) {
            this.scale.y = a / this.texture.frame.height, this._height = a
        }
    }), f.Sprite.prototype.setTexture = function(a) {
        this.texture.baseTexture != a.baseTexture ? (this.textureChange = !0, this.texture = a, this.__renderGroup && this.__renderGroup.updateTexture(this)) : this.texture = a, this.updateFrame = !0
    }, f.Sprite.prototype.onTextureUpdate = function() {
        this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height), this.updateFrame = !0
    }, f.Sprite.fromFrame = function(a) {
        var b = f.TextureCache[a];
        if (!b) throw new Error("The frameId '" + a + "' does not exist in the texture cache" + this);
        return new f.Sprite(b)
    }, f.Sprite.fromImage = function(a) {
        var b = f.Texture.fromImage(a);
        return new f.Sprite(b)
    }, f.MovieClip = function(a) {
        f.Sprite.call(this, a[0]), this.textures = a, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this.currentFrame = 0, this.playing = !1
    }, f.MovieClip.prototype = Object.create(f.Sprite.prototype), f.MovieClip.prototype.constructor = f.MovieClip, Object.defineProperty(f.MovieClip.prototype, "totalFrames", {
        get: function() {
            return this.textures.length
        }
    }), f.MovieClip.prototype.stop = function() {
        this.playing = !1
    }, f.MovieClip.prototype.play = function() {
        this.playing = !0
    }, f.MovieClip.prototype.gotoAndStop = function(a) {
        this.playing = !1, this.currentFrame = a;
        var b = this.currentFrame + .5 | 0;
        this.setTexture(this.textures[b % this.textures.length])
    }, f.MovieClip.prototype.gotoAndPlay = function(a) {
        this.currentFrame = a, this.playing = !0
    }, f.MovieClip.prototype.updateTransform = function() {
        if (f.Sprite.prototype.updateTransform.call(this), this.playing) {
            this.currentFrame += this.animationSpeed;
            var a = this.currentFrame + .5 | 0;
            this.loop || a < this.textures.length ? this.setTexture(this.textures[a % this.textures.length]) : a >= this.textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete && this.onComplete())
        }
    }, f.FilterBlock = function() {
        this.visible = !0, this.renderable = !0
    }, f.Text = function(a, b) {
        this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), f.Sprite.call(this, f.Texture.fromCanvas(this.canvas)), this.setText(a), this.setStyle(b), this.updateText(), this.dirty = !1
    }, f.Text.prototype = Object.create(f.Sprite.prototype), f.Text.prototype.constructor = f.Text, f.Text.prototype.setStyle = function(a) {
        a = a || {}, a.font = a.font || "bold 20pt Arial", a.fill = a.fill || "black", a.align = a.align || "left", a.stroke = a.stroke || "black", a.strokeThickness = a.strokeThickness || 0, a.wordWrap = a.wordWrap || !1, a.wordWrapWidth = a.wordWrapWidth || 100, this.style = a, this.dirty = !0
    }, f.Text.prototype.setText = function(a) {
        this.text = a.toString() || " ", this.dirty = !0
    }, f.Text.prototype.updateText = function() {
        this.context.font = this.style.font;
        var a = this.text;
        this.style.wordWrap && (a = this.wordWrap(this.text));
        for (var b = a.split(/(?:\r\n|\r|\n)/), c = [], d = 0, e = 0; e < b.length; e++) {
            var g = this.context.measureText(b[e]).width;
            c[e] = g, d = Math.max(d, g)
        }
        this.canvas.width = d + this.style.strokeThickness;
        var h = this.determineFontHeight("font: " + this.style.font + ";") + this.style.strokeThickness;
        for (this.canvas.height = h * b.length, this.context.fillStyle = this.style.fill, this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.lineWidth = this.style.strokeThickness, this.context.textBaseline = "top", e = 0; e < b.length; e++) {
            var i = new f.Point(this.style.strokeThickness / 2, this.style.strokeThickness / 2 + e * h);
            "right" == this.style.align ? i.x += d - c[e] : "center" == this.style.align && (i.x += (d - c[e]) / 2), this.style.stroke && this.style.strokeThickness && this.context.strokeText(b[e], i.x, i.y), this.style.fill && this.context.fillText(b[e], i.x, i.y)
        }
        this.updateTexture()
    }, f.Text.prototype.updateTexture = function() {
        this.texture.baseTexture.width = this.canvas.width, this.texture.baseTexture.height = this.canvas.height, this.texture.frame.width = this.canvas.width, this.texture.frame.height = this.canvas.height, this._width = this.canvas.width, this._height = this.canvas.height, f.texturesToUpdate.push(this.texture.baseTexture)
    }, f.Text.prototype.updateTransform = function() {
        this.dirty && (this.updateText(), this.dirty = !1), f.Sprite.prototype.updateTransform.call(this)
    }, f.Text.prototype.determineFontHeight = function(a) {
        var b = f.Text.heightCache[a];
        if (!b) {
            var c = document.getElementsByTagName("body")[0],
                d = document.createElement("div"),
                e = document.createTextNode("M");
            d.appendChild(e), d.setAttribute("style", a + ";position:absolute;top:0;left:0"), c.appendChild(d), b = d.offsetHeight, f.Text.heightCache[a] = b, c.removeChild(d)
        }
        return b
    }, f.Text.prototype.wordWrap = function(a) {
        for (var b = "", c = a.split("\n"), d = 0; d < c.length; d++) {
            for (var e = this.style.wordWrapWidth, f = c[d].split(" "), g = 0; g < f.length; g++) {
                var h = this.context.measureText(f[g]).width,
                    i = h + this.context.measureText(" ").width;
                i > e ? (g > 0 && (b += "\n"), b += f[g] + " ", e = this.style.wordWrapWidth - h) : (e -= i, b += f[g] + " ")
            }
            b += "\n"
        }
        return b
    }, f.Text.prototype.destroy = function(a) {
        a && this.texture.destroy()
    }, f.Text.heightCache = {}, f.BitmapText = function(a, b) {
        f.DisplayObjectContainer.call(this), this.setText(a), this.setStyle(b), this.updateText(), this.dirty = !1
    }, f.BitmapText.prototype = Object.create(f.DisplayObjectContainer.prototype), f.BitmapText.prototype.constructor = f.BitmapText, f.BitmapText.prototype.setText = function(a) {
        this.text = a || " ", this.dirty = !0
    }, f.BitmapText.prototype.setStyle = function(a) {
        a = a || {}, a.align = a.align || "left", this.style = a;
        var b = a.font.split(" ");
        this.fontName = b[b.length - 1], this.fontSize = b.length >= 2 ? parseInt(b[b.length - 2], 10) : f.BitmapText.fonts[this.fontName].size, this.dirty = !0
    }, f.BitmapText.prototype.updateText = function() {
        for (var a = f.BitmapText.fonts[this.fontName], b = new f.Point, c = null, d = [], e = 0, g = [], h = 0, i = this.fontSize / a.size, j = 0; j < this.text.length; j++) {
            var k = this.text.charCodeAt(j);
            if (/(?:\r\n|\r|\n)/.test(this.text.charAt(j))) g.push(b.x), e = Math.max(e, b.x), h++, b.x = 0, b.y += a.lineHeight, c = null;
            else {
                var l = a.chars[k];
                l && (c && l[c] && (b.x += l.kerning[c]), d.push({
                    texture: l.texture,
                    line: h,
                    charCode: k,
                    position: new f.Point(b.x + l.xOffset, b.y + l.yOffset)
                }), b.x += l.xAdvance, c = k)
            }
        }
        g.push(b.x), e = Math.max(e, b.x);
        var m = [];
        for (j = 0; h >= j; j++) {
            var n = 0;
            "right" == this.style.align ? n = e - g[j] : "center" == this.style.align && (n = (e - g[j]) / 2), m.push(n)
        }
        for (j = 0; j < d.length; j++) {
            var o = new f.Sprite(d[j].texture);
            o.position.x = (d[j].position.x + m[d[j].line]) * i, o.position.y = d[j].position.y * i, o.scale.x = o.scale.y = i, this.addChild(o)
        }
        this.width = e * i, this.height = (b.y + a.lineHeight) * i
    }, f.BitmapText.prototype.updateTransform = function() {
        if (this.dirty) {
            for (; this.children.length > 0;) this.removeChild(this.getChildAt(0));
            this.updateText(), this.dirty = !1
        }
        f.DisplayObjectContainer.prototype.updateTransform.call(this)
    }, f.BitmapText.fonts = {}, f.InteractionManager = function(a) {
        this.stage = a, this.mouse = new f.InteractionData, this.touchs = {}, this.tempPoint = new f.Point, this.mouseoverEnabled = !0, this.pool = [], this.interactiveItems = [], this.interactionDOMElement = null, this.onMouseMove = this.onMouseMove.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.last = 0
    }, f.InteractionManager.prototype.constructor = f.InteractionManager, f.InteractionManager.prototype.collectInteractiveSprite = function(a, b) {
        for (var c = a.children, d = c.length, e = d - 1; e >= 0; e--) {
            var f = c[e];
            f.interactive ? (b.interactiveChildren = !0, this.interactiveItems.push(f), f.children.length > 0 && this.collectInteractiveSprite(f, f)) : (f.__iParent = null, f.children.length > 0 && this.collectInteractiveSprite(f, b))
        }
    }, f.InteractionManager.prototype.setTarget = function(a) {
        this.target = a, null === this.interactionDOMElement && this.setTargetDomElement(a.view), document.body.addEventListener("mouseup", this.onMouseUp, !0)
    }, f.InteractionManager.prototype.setTargetDomElement = function(a) {
        null !== this.interactionDOMElement && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "", this.interactionDOMElement.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0)), window.navigator.msPointerEnabled && (a.style["-ms-content-zooming"] = "none", a.style["-ms-touch-action"] = "none"), this.interactionDOMElement = a, a.addEventListener("mousemove", this.onMouseMove, !0), a.addEventListener("mousedown", this.onMouseDown, !0), a.addEventListener("mouseout", this.onMouseOut, !0), a.addEventListener("touchstart", this.onTouchStart, !0), a.addEventListener("touchend", this.onTouchEnd, !0), a.addEventListener("touchmove", this.onTouchMove, !0)
    }, f.InteractionManager.prototype.update = function() {
        if (this.target) {
            var a = Date.now(),
                b = a - this.last;
            if (b = 30 * b / 1e3, !(1 > b)) {
                if (this.last = a, this.dirty) {
                    this.dirty = !1;
                    for (var c = this.interactiveItems.length, d = 0; c > d; d++) this.interactiveItems[d].interactiveChildren = !1;
                    this.interactiveItems = [], this.stage.interactive && this.interactiveItems.push(this.stage), this.collectInteractiveSprite(this.stage, this.stage)
                }
                var e = this.interactiveItems.length;
                this.interactionDOMElement.style.cursor = "inherit";
                for (var d = 0; e > d; d++) {
                    var f = this.interactiveItems[d];
                    (f.mouseover || f.mouseout || f.buttonMode) && (f.__hit = this.hitTest(f, this.mouse), this.mouse.target = f, f.__hit ? (f.buttonMode && (this.interactionDOMElement.style.cursor = f.defaultCursor), f.__isOver || (f.mouseover && f.mouseover(this.mouse), f.__isOver = !0)) : f.__isOver && (f.mouseout && f.mouseout(this.mouse), f.__isOver = !1))
                }
            }
        }
    }, f.InteractionManager.prototype.onMouseMove = function(a) {
        this.mouse.originalEvent = a || window.event;
        var b = this.interactionDOMElement.getBoundingClientRect();
        this.mouse.global.x = (a.clientX - b.left) * (this.target.width / b.width), this.mouse.global.y = (a.clientY - b.top) * (this.target.height / b.height);
        for (var c = this.interactiveItems.length, d = (this.mouse.global, 0); c > d; d++) {
            var e = this.interactiveItems[d];
            e.mousemove && e.mousemove(this.mouse)
        }
    }, f.InteractionManager.prototype.onMouseDown = function(a) {
        this.mouse.originalEvent = a || window.event;
        for (var b = this.interactiveItems.length, c = (this.mouse.global, this.stage, 0); b > c; c++) {
            var d = this.interactiveItems[c];
            if ((d.mousedown || d.click) && (d.__mouseIsDown = !0, d.__hit = this.hitTest(d, this.mouse), d.__hit && (d.mousedown && d.mousedown(this.mouse), d.__isDown = !0, !d.interactiveChildren))) break
        }
    }, f.InteractionManager.prototype.onMouseOut = function() {
        var a = this.interactiveItems.length;
        this.interactionDOMElement.style.cursor = "inherit";
        for (var b = 0; a > b; b++) {
            var c = this.interactiveItems[b];
            c.__isOver && (this.mouse.target = c, c.mouseout && c.mouseout(this.mouse), c.__isOver = !1)
        }
    }, f.InteractionManager.prototype.onMouseUp = function(a) {
        this.mouse.originalEvent = a || window.event;
        for (var b = (this.mouse.global, this.interactiveItems.length), c = !1, d = 0; b > d; d++) {
            var e = this.interactiveItems[d];
            (e.mouseup || e.mouseupoutside || e.click) && (e.__hit = this.hitTest(e, this.mouse), e.__hit && !c ? (e.mouseup && e.mouseup(this.mouse), e.__isDown && e.click && e.click(this.mouse), e.interactiveChildren || (c = !0)) : e.__isDown && e.mouseupoutside && e.mouseupoutside(this.mouse), e.__isDown = !1)
        }
    }, f.InteractionManager.prototype.hitTest = function(a, b) {
        var c = b.global;
        if (a.vcount !== f.visibleCount) return !1;
        var d = a instanceof f.Sprite,
            e = a.worldTransform,
            g = e[0],
            h = e[1],
            i = e[2],
            j = e[3],
            k = e[4],
            l = e[5],
            m = 1 / (g * k + h * -j),
            n = k * m * c.x + -h * m * c.y + (l * h - i * k) * m,
            o = g * m * c.y + -j * m * c.x + (-l * g + i * j) * m;
        if (b.target = a, a.hitArea && a.hitArea.contains) return a.hitArea.contains(n, o) ? (b.target = a, !0) : !1;
        if (d) {
            var p, q = a.texture.frame.width,
                r = a.texture.frame.height,
                s = -q * a.anchor.x;
            if (n > s && s + q > n && (p = -r * a.anchor.y, o > p && p + r > o)) return b.target = a, !0
        }
        for (var t = a.children.length, u = 0; t > u; u++) {
            var v = a.children[u],
                w = this.hitTest(v, b);
            if (w) return b.target = a, !0
        }
        return !1
    }, f.InteractionManager.prototype.onTouchMove = function(a) {
        for (var b = this.interactionDOMElement.getBoundingClientRect(), c = a.changedTouches, d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.touchs[e.identifier];
            f.originalEvent = a || window.event, f.global.x = (e.clientX - b.left) * (this.target.width / b.width), f.global.y = (e.clientY - b.top) * (this.target.height / b.height)
        }
        for (var g = this.interactiveItems.length, d = 0; g > d; d++) {
            var h = this.interactiveItems[d];
            h.touchmove && h.touchmove(f)
        }
    }, f.InteractionManager.prototype.onTouchStart = function(a) {
        for (var b = this.interactionDOMElement.getBoundingClientRect(), c = a.changedTouches, d = 0; d < c.length; d++) {
            var e = c[d],
                g = this.pool.pop();
            g || (g = new f.InteractionData), g.originalEvent = a || window.event, this.touchs[e.identifier] = g, g.global.x = (e.clientX - b.left) * (this.target.width / b.width), g.global.y = (e.clientY - b.top) * (this.target.height / b.height);
            for (var h = this.interactiveItems.length, i = 0; h > i; i++) {
                var j = this.interactiveItems[i];
                if ((j.touchstart || j.tap) && (j.__hit = this.hitTest(j, g), j.__hit && (j.touchstart && j.touchstart(g), j.__isDown = !0, j.__touchData = g, !j.interactiveChildren))) break
            }
        }
    }, f.InteractionManager.prototype.onTouchEnd = function(a) {
        for (var b = this.interactionDOMElement.getBoundingClientRect(), c = a.changedTouches, d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.touchs[e.identifier],
                g = !1;
            f.global.x = (e.clientX - b.left) * (this.target.width / b.width), f.global.y = (e.clientY - b.top) * (this.target.height / b.height);
            for (var h = this.interactiveItems.length, i = 0; h > i; i++) {
                var j = this.interactiveItems[i],
                    k = j.__touchData;
                j.__hit = this.hitTest(j, f), k == f && (f.originalEvent = a || window.event, (j.touchend || j.tap) && (j.__hit && !g ? (j.touchend && j.touchend(f), j.__isDown && j.tap && j.tap(f), j.interactiveChildren || (g = !0)) : j.__isDown && j.touchendoutside && j.touchendoutside(f), j.__isDown = !1), j.__touchData = null)
            }
            this.pool.push(f), this.touchs[e.identifier] = null
        }
    }, f.InteractionData = function() {
        this.global = new f.Point, this.local = new f.Point, this.target, this.originalEvent
    }, f.InteractionData.prototype.getLocalPosition = function(a) {
        var b = a.worldTransform,
            c = this.global,
            d = b[0],
            e = b[1],
            g = b[2],
            h = b[3],
            i = b[4],
            j = b[5],
            k = 1 / (d * i + e * -h);
        return new f.Point(i * k * c.x + -e * k * c.y + (j * e - g * i) * k, d * k * c.y + -h * k * c.x + (-j * d + g * h) * k)
    }, f.InteractionData.prototype.constructor = f.InteractionData, f.Stage = function(a) {
        f.DisplayObjectContainer.call(this), this.worldTransform = f.mat3.create(), this.interactive = !0, this.interactionManager = new f.InteractionManager(this), this.dirty = !0, this.__childrenAdded = [], this.__childrenRemoved = [], this.stage = this, this.stage.hitArea = new f.Rectangle(0, 0, 1e5, 1e5), this.setBackgroundColor(a), this.worldVisible = !0
    }, f.Stage.prototype = Object.create(f.DisplayObjectContainer.prototype), f.Stage.prototype.constructor = f.Stage, f.Stage.prototype.setInteractionDelegate = function(a) {
        this.interactionManager.setTargetDomElement(a)
    }, f.Stage.prototype.updateTransform = function() {
        this.worldAlpha = 1, this.vcount = f.visibleCount;
        for (var a = 0, b = this.children.length; b > a; a++) this.children[a].updateTransform();
        this.dirty && (this.dirty = !1, this.interactionManager.dirty = !0), this.interactive && this.interactionManager.update()
    }, f.Stage.prototype.setBackgroundColor = function(a) {
        this.backgroundColor = a || 0, this.backgroundColorSplit = d(this.backgroundColor);
        var b = this.backgroundColor.toString(16);
        b = "000000".substr(0, 6 - b.length) + b, this.backgroundColorString = "#" + b
    }, f.Stage.prototype.getMousePosition = function() {
        return this.interactionManager.mouse.global
    };
    for (var h = 0, i = ["ms", "moz", "webkit", "o"], j = 0; j < i.length && !window.requestAnimationFrame; ++j) window.requestAnimationFrame = window[i[j] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[j] + "CancelAnimationFrame"] || window[i[j] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(a) {
        var b = (new Date).getTime(),
            c = Math.max(0, 16 - (b - h)),
            d = window.setTimeout(function() {
                a(b + c)
            }, c);
        return h = b + c, d
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    }), window.requestAnimFrame = window.requestAnimationFrame, "function" != typeof Function.prototype.bind && (Function.prototype.bind = function() {
        var a = Array.prototype.slice;
        return function(b) {
            function c() {
                var f = e.concat(a.call(arguments));
                d.apply(this instanceof c ? this : b, f)
            }
            var d = this,
                e = a.call(arguments, 1);
            if ("function" != typeof d) throw new TypeError;
            return c.prototype = function f(a) {
                return a && (f.prototype = a), this instanceof f ? void 0 : new f
            }(d.prototype), c
        }
    }());
    var k = f.AjaxRequest = function() {
        var a = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"];
        if (!window.ActiveXObject) return window.XMLHttpRequest ? new XMLHttpRequest : !1;
        for (var b = 0; b < a.length; b++) try {
            return new ActiveXObject(a[b])
        } catch (c) {}
    };
    f.runList = function(a) {
        console.log(">>>>>>>>>"), console.log("_");
        var b = 0,
            c = a.first;
        for (console.log(c); c._iNext;)
            if (b++, c = c._iNext, console.log(c), b > 100) {
                console.log("BREAK");
                break
            }
    }, f.EventTarget = function() {
        var a = {};
        this.addEventListener = this.on = function(b, c) {
            void 0 === a[b] && (a[b] = []), -1 === a[b].indexOf(c) && a[b].push(c)
        }, this.dispatchEvent = this.emit = function(b) {
            if (a[b.type] && a[b.type].length)
                for (var c = 0, d = a[b.type].length; d > c; c++) a[b.type][c](b)
        }, this.removeEventListener = this.off = function(b, c) {
            var d = a[b].indexOf(c); - 1 !== d && a[b].splice(d, 1)
        }, this.removeAllEventListeners = function(b) {
            var c = a[b];
            c && (c.length = 0)
        }
    }, f.autoDetectRenderer = function(a, b, c, d, e) {
        a || (a = 800), b || (b = 600);
        var g = function() {
            try {
                var a = document.createElement("canvas");
                return !!window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))
            } catch (b) {
                return !1
            }
        }();
        if (g) {
            var h = -1 != navigator.userAgent.toLowerCase().indexOf("trident");
            g = !h
        }
        return g ? new f.WebGLRenderer(a, b, c, d, e) : new f.CanvasRenderer(a, b, c, d)
    }, f.PolyK = {}, f.PolyK.Triangulate = function(a) {
        var b = !0,
            c = a.length >> 1;
        if (3 > c) return [];
        for (var d = [], e = [], g = 0; c > g; g++) e.push(g);
        for (var g = 0, h = c; h > 3;) {
            var i = e[(g + 0) % h],
                j = e[(g + 1) % h],
                k = e[(g + 2) % h],
                l = a[2 * i],
                m = a[2 * i + 1],
                n = a[2 * j],
                o = a[2 * j + 1],
                p = a[2 * k],
                q = a[2 * k + 1],
                r = !1;
            if (f.PolyK._convex(l, m, n, o, p, q, b)) {
                r = !0;
                for (var s = 0; h > s; s++) {
                    var t = e[s];
                    if (t != i && t != j && t != k && f.PolyK._PointInTriangle(a[2 * t], a[2 * t + 1], l, m, n, o, p, q)) {
                        r = !1;
                        break
                    }
                }
            }
            if (r) d.push(i, j, k), e.splice((g + 1) % h, 1), h--, g = 0;
            else if (g++ > 3 * h) {
                if (!b) return console.log("PIXI Warning: shape too complex to fill"), [];
                var d = [];
                e = [];
                for (var g = 0; c > g; g++) e.push(g);
                g = 0, h = c, b = !1
            }
        }
        return d.push(e[0], e[1], e[2]), d
    }, f.PolyK._PointInTriangle = function(a, b, c, d, e, f, g, h) {
        var i = g - c,
            j = h - d,
            k = e - c,
            l = f - d,
            m = a - c,
            n = b - d,
            o = i * i + j * j,
            p = i * k + j * l,
            q = i * m + j * n,
            r = k * k + l * l,
            s = k * m + l * n,
            t = 1 / (o * r - p * p),
            u = (r * q - p * s) * t,
            v = (o * s - p * q) * t;
        return u >= 0 && v >= 0 && 1 > u + v
    }, f.PolyK._convex = function(a, b, c, d, e, f, g) {
        return (b - d) * (e - c) + (c - a) * (f - d) >= 0 == g
    }, f.initDefaultShaders = function() {
        f.primitiveShader = new f.PrimitiveShader, f.primitiveShader.init(), f.stripShader = new f.StripShader, f.stripShader.init(), f.defaultShader = new f.PixiShader, f.defaultShader.init();
        var a = f.gl,
            b = f.defaultShader.program;
        a.useProgram(b), a.enableVertexAttribArray(f.defaultShader.aVertexPosition), a.enableVertexAttribArray(f.defaultShader.colorAttribute), a.enableVertexAttribArray(f.defaultShader.aTextureCoord)
    }, f.activatePrimitiveShader = function() {
        var a = f.gl;
        a.useProgram(f.primitiveShader.program), a.disableVertexAttribArray(f.defaultShader.aVertexPosition), a.disableVertexAttribArray(f.defaultShader.colorAttribute), a.disableVertexAttribArray(f.defaultShader.aTextureCoord), a.enableVertexAttribArray(f.primitiveShader.aVertexPosition), a.enableVertexAttribArray(f.primitiveShader.colorAttribute)
    }, f.deactivatePrimitiveShader = function() {
        var a = f.gl;
        a.useProgram(f.defaultShader.program), a.disableVertexAttribArray(f.primitiveShader.aVertexPosition), a.disableVertexAttribArray(f.primitiveShader.colorAttribute), a.enableVertexAttribArray(f.defaultShader.aVertexPosition), a.enableVertexAttribArray(f.defaultShader.colorAttribute), a.enableVertexAttribArray(f.defaultShader.aTextureCoord)
    }, f.activateStripShader = function() {
        var a = f.gl;
        a.useProgram(f.stripShader.program)
    }, f.deactivateStripShader = function() {
        var a = f.gl;
        a.useProgram(f.defaultShader.program)
    }, f.CompileVertexShader = function(a, b) {
        return f._CompileShader(a, b, a.VERTEX_SHADER)
    }, f.CompileFragmentShader = function(a, b) {
        return f._CompileShader(a, b, a.FRAGMENT_SHADER)
    }, f._CompileShader = function(a, b, c) {
        var d = b.join("\n"),
            e = a.createShader(c);
        return a.shaderSource(e, d), a.compileShader(e), a.getShaderParameter(e, a.COMPILE_STATUS) ? e : (console.log(a.getShaderInfoLog(e)), null)
    }, f.compileProgram = function(a, b) {
        var c = f.gl,
            d = f.CompileFragmentShader(c, b),
            e = f.CompileVertexShader(c, a),
            g = c.createProgram();
        return c.attachShader(g, e), c.attachShader(g, d), c.linkProgram(g), c.getProgramParameter(g, c.LINK_STATUS) || console.log("Could not initialise shaders"), g
    }, f.PixiShader = function() {
        this.program, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;", "}"], this.textureCount = 0
    }, f.PixiShader.prototype.init = function() {
        var a = f.compileProgram(this.vertexSrc || f.PixiShader.defaultVertexSrc, this.fragmentSrc),
            b = f.gl;
        b.useProgram(a), this.uSampler = b.getUniformLocation(a, "uSampler"), this.projectionVector = b.getUniformLocation(a, "projectionVector"), this.offsetVector = b.getUniformLocation(a, "offsetVector"), this.dimensions = b.getUniformLocation(a, "dimensions"), this.aVertexPosition = b.getAttribLocation(a, "aVertexPosition"), this.colorAttribute = b.getAttribLocation(a, "aColor"), this.aTextureCoord = b.getAttribLocation(a, "aTextureCoord");
        for (var c in this.uniforms) this.uniforms[c].uniformLocation = b.getUniformLocation(a, c);
        this.initUniforms(), this.program = a
    }, f.PixiShader.prototype.initUniforms = function() {
        this.textureCount = 1;
        var a;
        for (var b in this.uniforms) {
            var a = this.uniforms[b],
                c = a.type;
            "sampler2D" == c ? (a._init = !1, null !== a.value && this.initSampler2D(a)) : "mat2" == c || "mat3" == c || "mat4" == c ? (a.glMatrix = !0, a.glValueLength = 1, "mat2" == c ? a.glFunc = f.gl.uniformMatrix2fv : "mat3" == c ? a.glFunc = f.gl.uniformMatrix3fv : "mat4" == c && (a.glFunc = f.gl.uniformMatrix4fv)) : (a.glFunc = f.gl["uniform" + c], a.glValueLength = "2f" == c || "2i" == c ? 2 : "3f" == c || "3i" == c ? 3 : "4f" == c || "4i" == c ? 4 : 1)
        }
    }, f.PixiShader.prototype.initSampler2D = function(a) {
        if (a.value && a.value.baseTexture && a.value.baseTexture.hasLoaded) {
            if (f.gl.activeTexture(f.gl["TEXTURE" + this.textureCount]), f.gl.bindTexture(f.gl.TEXTURE_2D, a.value.baseTexture._glTexture), a.textureData) {
                var b = a.textureData,
                    c = b.magFilter ? b.magFilter : f.gl.LINEAR,
                    d = b.minFilter ? b.minFilter : f.gl.LINEAR,
                    e = b.wrapS ? b.wrapS : f.gl.CLAMP_TO_EDGE,
                    g = b.wrapT ? b.wrapT : f.gl.CLAMP_TO_EDGE,
                    h = b.luminance ? f.gl.LUMINANCE : f.gl.RGBA;
                if (b.repeat && (e = f.gl.REPEAT, g = f.gl.REPEAT), f.gl.pixelStorei(f.gl.UNPACK_FLIP_Y_WEBGL, !1), b.width) {
                    var i = b.width ? b.width : 512,
                        j = b.height ? b.height : 2,
                        k = b.border ? b.border : 0;
                    f.gl.texImage2D(f.gl.TEXTURE_2D, 0, h, i, j, k, h, f.gl.UNSIGNED_BYTE, null)
                } else f.gl.texImage2D(f.gl.TEXTURE_2D, 0, h, f.gl.RGBA, f.gl.UNSIGNED_BYTE, a.value.baseTexture.source);
                f.gl.texParameteri(f.gl.TEXTURE_2D, f.gl.TEXTURE_MAG_FILTER, c), f.gl.texParameteri(f.gl.TEXTURE_2D, f.gl.TEXTURE_MIN_FILTER, d), f.gl.texParameteri(f.gl.TEXTURE_2D, f.gl.TEXTURE_WRAP_S, e), f.gl.texParameteri(f.gl.TEXTURE_2D, f.gl.TEXTURE_WRAP_T, g)
            }
            f.gl.uniform1i(a.uniformLocation, this.textureCount), a._init = !0, this.textureCount++
        }
    }, f.PixiShader.prototype.syncUniforms = function() {
        this.textureCount = 1;
        var a;
        for (var b in this.uniforms) a = this.uniforms[b], 1 == a.glValueLength ? a.glMatrix === !0 ? a.glFunc.call(f.gl, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(f.gl, a.uniformLocation, a.value) : 2 == a.glValueLength ? a.glFunc.call(f.gl, a.uniformLocation, a.value.x, a.value.y) : 3 == a.glValueLength ? a.glFunc.call(f.gl, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 == a.glValueLength ? a.glFunc.call(f.gl, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w) : "sampler2D" == a.type && (a._init ? (f.gl.activeTexture(f.gl["TEXTURE" + this.textureCount]), f.gl.bindTexture(f.gl.TEXTURE_2D, a.value.baseTexture._glTexture), f.gl.uniform1i(a.uniformLocation, this.textureCount), this.textureCount++) : this.initSampler2D(a))
    }, f.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", "vTextureCoord = aTextureCoord;", "vColor = aColor;", "}"], f.StripShader = function() {
        this.program, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));", "gl_FragColor = gl_FragColor * alpha;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "varying vec2 vTextureCoord;", "varying vec2 offsetVector;", "varying float vColor;", "void main(void) {", "vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);", "v -= offsetVector.xyx;", "gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / projectionVector.y + 1.0 , 0.0, 1.0);", "vTextureCoord = aTextureCoord;", "vColor = aColor;", "}"]
    }, f.StripShader.prototype.init = function() {
        var a = f.compileProgram(this.vertexSrc, this.fragmentSrc),
            b = f.gl;
        b.useProgram(a), this.uSampler = b.getUniformLocation(a, "uSampler"), this.projectionVector = b.getUniformLocation(a, "projectionVector"), this.offsetVector = b.getUniformLocation(a, "offsetVector"), this.colorAttribute = b.getAttribLocation(a, "aColor"), this.aVertexPosition = b.getAttribLocation(a, "aVertexPosition"), this.aTextureCoord = b.getAttribLocation(a, "aTextureCoord"), this.translationMatrix = b.getUniformLocation(a, "translationMatrix"), this.alpha = b.getUniformLocation(a, "alpha"), this.program = a
    }, f.PrimitiveShader = function() {
        this.program, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "varying vec4 vColor;", "void main(void) {", "vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "v -= offsetVector.xyx;", "gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "vColor = aColor  * alpha;", "}"]
    }, f.PrimitiveShader.prototype.init = function() {
        var a = f.compileProgram(this.vertexSrc, this.fragmentSrc),
            b = f.gl;
        b.useProgram(a), this.projectionVector = b.getUniformLocation(a, "projectionVector"), this.offsetVector = b.getUniformLocation(a, "offsetVector"), this.aVertexPosition = b.getAttribLocation(a, "aVertexPosition"), this.colorAttribute = b.getAttribLocation(a, "aColor"), this.translationMatrix = b.getUniformLocation(a, "translationMatrix"), this.alpha = b.getUniformLocation(a, "alpha"), this.program = a
    }, f.WebGLGraphics = function() {}, f.WebGLGraphics.renderGraphics = function(a, b) {
        var c = f.gl;
        a._webGL || (a._webGL = {
            points: [],
            indices: [],
            lastIndex: 0,
            buffer: c.createBuffer(),
            indexBuffer: c.createBuffer()
        }), a.dirty && (a.dirty = !1, a.clearDirty && (a.clearDirty = !1, a._webGL.lastIndex = 0, a._webGL.points = [], a._webGL.indices = []), f.WebGLGraphics.updateGraphics(a)), f.activatePrimitiveShader();
        var d = f.mat3.clone(a.worldTransform);
        f.mat3.transpose(d), c.blendFunc(c.ONE, c.ONE_MINUS_SRC_ALPHA), c.uniformMatrix3fv(f.primitiveShader.translationMatrix, !1, d), c.uniform2f(f.primitiveShader.projectionVector, b.x, -b.y), c.uniform2f(f.primitiveShader.offsetVector, -f.offset.x, -f.offset.y), c.uniform1f(f.primitiveShader.alpha, a.worldAlpha), c.bindBuffer(c.ARRAY_BUFFER, a._webGL.buffer), c.vertexAttribPointer(f.primitiveShader.aVertexPosition, 2, c.FLOAT, !1, 24, 0), c.vertexAttribPointer(f.primitiveShader.colorAttribute, 4, c.FLOAT, !1, 24, 8), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, a._webGL.indexBuffer), c.drawElements(c.TRIANGLE_STRIP, a._webGL.indices.length, c.UNSIGNED_SHORT, 0), f.deactivatePrimitiveShader()
    }, f.WebGLGraphics.updateGraphics = function(a) {
        for (var b = a._webGL.lastIndex; b < a.graphicsData.length; b++) {
            var c = a.graphicsData[b];
            c.type == f.Graphics.POLY ? (c.fill && c.points.length > 3 && f.WebGLGraphics.buildPoly(c, a._webGL), c.lineWidth > 0 && f.WebGLGraphics.buildLine(c, a._webGL)) : c.type == f.Graphics.RECT ? f.WebGLGraphics.buildRectangle(c, a._webGL) : (c.type == f.Graphics.CIRC || c.type == f.Graphics.ELIP) && f.WebGLGraphics.buildCircle(c, a._webGL)
        }
        a._webGL.lastIndex = a.graphicsData.length;
        var d = f.gl;
        a._webGL.glPoints = new Float32Array(a._webGL.points), d.bindBuffer(d.ARRAY_BUFFER, a._webGL.buffer), d.bufferData(d.ARRAY_BUFFER, a._webGL.glPoints, d.STATIC_DRAW), a._webGL.glIndicies = new Uint16Array(a._webGL.indices), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, a._webGL.indexBuffer), d.bufferData(d.ELEMENT_ARRAY_BUFFER, a._webGL.glIndicies, d.STATIC_DRAW)
    }, f.WebGLGraphics.buildRectangle = function(a, b) {
        var c = a.points,
            e = c[0],
            g = c[1],
            h = c[2],
            i = c[3];
        if (a.fill) {
            var j = d(a.fillColor),
                k = a.fillAlpha,
                l = j[0] * k,
                m = j[1] * k,
                n = j[2] * k,
                o = b.points,
                p = b.indices,
                q = o.length / 6;
            o.push(e, g), o.push(l, m, n, k), o.push(e + h, g), o.push(l, m, n, k), o.push(e, g + i), o.push(l, m, n, k), o.push(e + h, g + i), o.push(l, m, n, k), p.push(q, q, q + 1, q + 2, q + 3, q + 3)
        }
        a.lineWidth && (a.points = [e, g, e + h, g, e + h, g + i, e, g + i, e, g], f.WebGLGraphics.buildLine(a, b))
    }, f.WebGLGraphics.buildCircle = function(a, b) {
        var c = a.points,
            e = c[0],
            g = c[1],
            h = c[2],
            i = c[3],
            j = 40,
            k = 2 * Math.PI / j;
        if (a.fill) {
            var l = d(a.fillColor),
                m = a.fillAlpha,
                n = l[0] * m,
                o = l[1] * m,
                p = l[2] * m,
                q = b.points,
                r = b.indices,
                s = q.length / 6;
            r.push(s);
            for (var t = 0; j + 1 > t; t++) q.push(e, g, n, o, p, m), q.push(e + Math.sin(k * t) * h, g + Math.cos(k * t) * i, n, o, p, m), r.push(s++, s++);
            r.push(s - 1)
        }
        if (a.lineWidth) {
            a.points = [];
            for (var t = 0; j + 1 > t; t++) a.points.push(e + Math.sin(k * t) * h, g + Math.cos(k * t) * i);
            f.WebGLGraphics.buildLine(a, b)
        }
    }, f.WebGLGraphics.buildLine = function(a, b) {
        var c = a.points;
        if (0 != c.length) {
            if (a.lineWidth % 2)
                for (var e = 0; e < c.length; e++) c[e] += .5;
            var g = new f.Point(c[0], c[1]),
                h = new f.Point(c[c.length - 2], c[c.length - 1]);
            if (g.x == h.x && g.y == h.y) {
                c.pop(), c.pop(), h = new f.Point(c[c.length - 2], c[c.length - 1]);
                var i = h.x + .5 * (g.x - h.x),
                    j = h.y + .5 * (g.y - h.y);
                c.unshift(i, j), c.push(i, j)
            }
            var k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F = b.points,
                G = b.indices,
                H = c.length / 2,
                I = c.length,
                J = F.length / 6,
                K = a.lineWidth / 2,
                L = d(a.lineColor),
                M = a.lineAlpha,
                N = L[0] * M,
                O = L[1] * M,
                P = L[2] * M;
            k = c[0], l = c[1], m = c[2], n = c[3], q = -(l - n), r = k - m, E = Math.sqrt(q * q + r * r), q /= E, r /= E, q *= K, r *= K, F.push(k - q, l - r, N, O, P, M), F.push(k + q, l + r, N, O, P, M);
            for (var e = 1; H - 1 > e; e++) k = c[2 * (e - 1)], l = c[2 * (e - 1) + 1], m = c[2 * e], n = c[2 * e + 1], o = c[2 * (e + 1)], p = c[2 * (e + 1) + 1], q = -(l - n), r = k - m, E = Math.sqrt(q * q + r * r), q /= E, r /= E, q *= K, r *= K, s = -(n - p), t = m - o, E = Math.sqrt(s * s + t * t), s /= E, t /= E, s *= K, t *= K, w = -r + l - (-r + n), x = -q + m - (-q + k), y = (-q + k) * (-r + n) - (-q + m) * (-r + l), z = -t + p - (-t + n), A = -s + m - (-s + o), B = (-s + o) * (-t + n) - (-s + m) * (-t + p), C = w * A - z * x, Math.abs(C) < .1 ? (C += 10.1, F.push(m - q, n - r, N, O, P, M), F.push(m + q, n + r, N, O, P, M)) : (px = (x * B - A * y) / C, py = (z * y - w * B) / C, D = (px - m) * (px - m) + (py - n) + (py - n), D > 19600 ? (u = q - s, v = r - t, E = Math.sqrt(u * u + v * v), u /= E, v /= E, u *= K, v *= K, F.push(m - u, n - v), F.push(N, O, P, M), F.push(m + u, n + v), F.push(N, O, P, M), F.push(m - u, n - v), F.push(N, O, P, M), I++) : (F.push(px, py), F.push(N, O, P, M), F.push(m - (px - m), n - (py - n)), F.push(N, O, P, M)));
            k = c[2 * (H - 2)], l = c[2 * (H - 2) + 1], m = c[2 * (H - 1)], n = c[2 * (H - 1) + 1], q = -(l - n), r = k - m, E = Math.sqrt(q * q + r * r), q /= E, r /= E, q *= K, r *= K, F.push(m - q, n - r), F.push(N, O, P, M), F.push(m + q, n + r), F.push(N, O, P, M), G.push(J);
            for (var e = 0; I > e; e++) G.push(J++);
            G.push(J - 1)
        }
    }, f.WebGLGraphics.buildPoly = function(a, b) {
        var c = a.points;
        if (!(c.length < 6)) {
            for (var e = b.points, g = b.indices, h = c.length / 2, i = d(a.fillColor), j = a.fillAlpha, k = i[0] * j, l = i[1] * j, m = i[2] * j, n = f.PolyK.Triangulate(c), o = e.length / 6, p = 0; p < n.length; p += 3) g.push(n[p] + o), g.push(n[p] + o), g.push(n[p + 1] + o), g.push(n[p + 2] + o), g.push(n[p + 2] + o);
            for (var p = 0; h > p; p++) e.push(c[2 * p], c[2 * p + 1], k, l, m, j)
        }
    }, f._defaultFrame = new f.Rectangle(0, 0, 1, 1), f.gl, f.WebGLRenderer = function(a, b, c, d, e) {
        this.transparent = !!d, this.width = a || 800, this.height = b || 600, this.view = c || document.createElement("canvas"), this.view.width = this.width, this.view.height = this.height;
        var g = this;
        this.view.addEventListener("webglcontextlost", function(a) {
            g.handleContextLost(a)
        }, !1), this.view.addEventListener("webglcontextrestored", function(a) {
            g.handleContextRestored(a)
        }, !1), this.batchs = [];
        var h = {
            alpha: this.transparent,
            antialias: !!e,
            premultipliedAlpha: !1,
            stencil: !0
        };
        try {
            f.gl = this.gl = this.view.getContext("experimental-webgl", h)
        } catch (i) {
            try {
                f.gl = this.gl = this.view.getContext("webgl", h)
            } catch (i) {
                throw new Error(" This browser does not support webGL. Try using the canvas renderer" + this)
            }
        }
        f.initDefaultShaders();
        var j = this.gl;
        j.useProgram(f.defaultShader.program), f.WebGLRenderer.gl = j, this.batch = new f.WebGLBatch(j), j.disable(j.DEPTH_TEST), j.disable(j.CULL_FACE), j.enable(j.BLEND), j.colorMask(!0, !0, !0, this.transparent), f.projection = new f.Point(400, 300), f.offset = new f.Point(0, 0), this.resize(this.width, this.height), this.contextLost = !1, this.stageRenderGroup = new f.WebGLRenderGroup(this.gl, this.transparent)
    }, f.WebGLRenderer.prototype.constructor = f.WebGLRenderer, f.WebGLRenderer.getBatch = function() {
        return 0 == f._batchs.length ? new f.WebGLBatch(f.WebGLRenderer.gl) : f._batchs.pop()
    }, f.WebGLRenderer.returnBatch = function(a) {
        a.clean(), f._batchs.push(a)
    }, f.WebGLRenderer.prototype.render = function(a) {
        if (!this.contextLost) {
            this.__stage !== a && (this.__stage = a, this.stageRenderGroup.setRenderable(a)), f.WebGLRenderer.updateTextures(), f.visibleCount++, a.updateTransform();
            var b = this.gl;
            if (b.colorMask(!0, !0, !0, this.transparent), b.viewport(0, 0, this.width, this.height), b.bindFramebuffer(b.FRAMEBUFFER, null), b.clearColor(a.backgroundColorSplit[0], a.backgroundColorSplit[1], a.backgroundColorSplit[2], !this.transparent), b.clear(b.COLOR_BUFFER_BIT), this.stageRenderGroup.backgroundColor = a.backgroundColorSplit, f.projection.x = this.width / 2, f.projection.y = -this.height / 2, this.stageRenderGroup.render(f.projection), a.interactive && (a._interactiveEventsAdded || (a._interactiveEventsAdded = !0, a.interactionManager.setTarget(this))), f.Texture.frameUpdates.length > 0) {
                for (var c = 0; c < f.Texture.frameUpdates.length; c++) f.Texture.frameUpdates[c].updateFrame = !1;
                f.Texture.frameUpdates = []
            }
        }
    }, f.WebGLRenderer.updateTextures = function() {
        for (var a = 0; a < f.texturesToUpdate.length; a++) f.WebGLRenderer.updateTexture(f.texturesToUpdate[a]);
        for (var a = 0; a < f.texturesToDestroy.length; a++) f.WebGLRenderer.destroyTexture(f.texturesToDestroy[a]);
        f.texturesToUpdate = [], f.texturesToDestroy = []
    }, f.WebGLRenderer.updateTexture = function(a) {
        var b = f.gl;
        a._glTexture || (a._glTexture = b.createTexture()), a.hasLoaded && (b.bindTexture(b.TEXTURE_2D, a._glTexture), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a.source), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR), a._powerOf2 ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.REPEAT), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.REPEAT)) : (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE)), b.bindTexture(b.TEXTURE_2D, null))
    }, f.WebGLRenderer.destroyTexture = function(a) {
        var b = f.gl;
        a._glTexture && (a._glTexture = b.createTexture(), b.deleteTexture(b.TEXTURE_2D, a._glTexture))
    }, f.WebGLRenderer.prototype.resize = function(a, b) {
        this.width = a, this.height = b, this.view.width = a, this.view.height = b, this.gl.viewport(0, 0, this.width, this.height), f.projection.x = this.width / 2, f.projection.y = -this.height / 2
    }, f.WebGLRenderer.prototype.handleContextLost = function(a) {
        a.preventDefault(), this.contextLost = !0
    }, f.WebGLRenderer.prototype.handleContextRestored = function() {
        this.gl = this.view.getContext("experimental-webgl", {
            alpha: !0
        }), this.initShaders();
        for (var a in f.TextureCache) {
            var b = f.TextureCache[a].baseTexture;
            b._glTexture = null, f.WebGLRenderer.updateTexture(b)
        }
        for (var c = 0; c < this.batchs.length; c++) this.batchs[c].restoreLostContext(this.gl), this.batchs[c].dirty = !0;
        f._restoreBatchs(this.gl), this.contextLost = !1
    }, f._batchs = [], f._getBatch = function(a) {
        return 0 == f._batchs.length ? new f.WebGLBatch(a) : f._batchs.pop()
    }, f._returnBatch = function(a) {
        a.clean(), f._batchs.push(a)
    }, f._restoreBatchs = function(a) {
        for (var b = 0; b < f._batchs.length; b++) f._batchs[b].restoreLostContext(a)
    }, f.WebGLBatch = function(a) {
        this.gl = a, this.size = 0, this.vertexBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), this.uvBuffer = a.createBuffer(), this.colorBuffer = a.createBuffer(), this.blendMode = f.blendModes.NORMAL, this.dynamicSize = 1
    }, f.WebGLBatch.prototype.constructor = f.WebGLBatch, f.WebGLBatch.prototype.clean = function() {
        this.verticies = [], this.uvs = [], this.indices = [], this.colors = [], this.dynamicSize = 1, this.texture = null, this.last = null, this.size = 0, this.head, this.tail
    }, f.WebGLBatch.prototype.restoreLostContext = function(a) {
        this.gl = a, this.vertexBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), this.uvBuffer = a.createBuffer(), this.colorBuffer = a.createBuffer()
    }, f.WebGLBatch.prototype.init = function(a) {
        a.batch = this, this.dirty = !0, this.blendMode = a.blendMode, this.texture = a.texture.baseTexture, this.head = a, this.tail = a, this.size = 1, this.growBatch()
    }, f.WebGLBatch.prototype.insertBefore = function(a, b) {
        this.size++, a.batch = this, this.dirty = !0;
        var c = b.__prev;
        b.__prev = a, a.__next = b, c ? (a.__prev = c, c.__next = a) : this.head = a
    }, f.WebGLBatch.prototype.insertAfter = function(a, b) {
        this.size++, a.batch = this, this.dirty = !0;
        var c = b.__next;
        b.__next = a, a.__prev = b, c ? (a.__next = c, c.__prev = a) : this.tail = a
    }, f.WebGLBatch.prototype.remove = function(a) {
        return this.size--, 0 == this.size ? (a.batch = null, a.__prev = null, a.__next = null, void 0) : (a.__prev ? a.__prev.__next = a.__next : (this.head = a.__next, this.head.__prev = null), a.__next ? a.__next.__prev = a.__prev : (this.tail = a.__prev, this.tail.__next = null), a.batch = null, a.__next = null, a.__prev = null, this.dirty = !0, void 0)
    }, f.WebGLBatch.prototype.split = function(a) {
        this.dirty = !0;
        var b = new f.WebGLBatch(this.gl);
        b.init(a), b.texture = this.texture, b.tail = this.tail, this.tail = a.__prev, this.tail.__next = null, a.__prev = null;
        for (var c = 0; a;) c++, a.batch = b, a = a.__next;
        return b.size = c, this.size -= c, b
    }, f.WebGLBatch.prototype.merge = function(a) {
        this.dirty = !0, this.tail.__next = a.head, a.head.__prev = this.tail, this.size += a.size, this.tail = a.tail;
        for (var b = a.head; b;) b.batch = this, b = b.__next
    }, f.WebGLBatch.prototype.growBatch = function() {
        var a = this.gl;
        this.dynamicSize = 1 == this.size ? 1 : 1.5 * this.size, this.verticies = new Float32Array(8 * this.dynamicSize), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bufferData(a.ARRAY_BUFFER, this.verticies, a.DYNAMIC_DRAW), this.uvs = new Float32Array(8 * this.dynamicSize), a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer), a.bufferData(a.ARRAY_BUFFER, this.uvs, a.DYNAMIC_DRAW), this.dirtyUVS = !0, this.colors = new Float32Array(4 * this.dynamicSize), a.bindBuffer(a.ARRAY_BUFFER, this.colorBuffer), a.bufferData(a.ARRAY_BUFFER, this.colors, a.DYNAMIC_DRAW), this.dirtyColors = !0, this.indices = new Uint16Array(6 * this.dynamicSize);
        for (var b = this.indices.length / 6, c = 0; b > c; c++) {
            var d = 6 * c,
                e = 4 * c;
            this.indices[d + 0] = e + 0, this.indices[d + 1] = e + 1, this.indices[d + 2] = e + 2, this.indices[d + 3] = e + 0, this.indices[d + 4] = e + 2, this.indices[d + 5] = e + 3
        }
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW)
    }, f.WebGLBatch.prototype.refresh = function() {
        this.gl;
        this.dynamicSize < this.size && this.growBatch();
        for (var a, b = 0, c = this.head; c;) {
            a = 8 * b;
            var d = c.texture,
                e = d.frame,
                f = d.baseTexture.width,
                g = d.baseTexture.height;
            this.uvs[a + 0] = e.x / f, this.uvs[a + 1] = e.y / g, this.uvs[a + 2] = (e.x + e.width) / f, this.uvs[a + 3] = e.y / g, this.uvs[a + 4] = (e.x + e.width) / f, this.uvs[a + 5] = (e.y + e.height) / g, this.uvs[a + 6] = e.x / f, this.uvs[a + 7] = (e.y + e.height) / g, c.updateFrame = !1, colorIndex = 4 * b, this.colors[colorIndex] = this.colors[colorIndex + 1] = this.colors[colorIndex + 2] = this.colors[colorIndex + 3] = c.worldAlpha, c = c.__next, b++
        }
        this.dirtyUVS = !0, this.dirtyColors = !0
    }, f.WebGLBatch.prototype.update = function() {
        for (var a, b, c, d, e, g, h, i, j, k, l, m, n, o, p, q, r = (this.gl, 0), s = this.head, t = this.verticies, u = this.uvs, v = this.colors; s;) {
            if (s.vcount === f.visibleCount) {
                if (b = s.texture.frame.width, c = s.texture.frame.height, d = s.anchor.x, e = s.anchor.y, g = b * (1 - d), h = b * -d, i = c * (1 - e), j = c * -e, k = 8 * r, a = s.worldTransform, l = a[0], m = a[3], n = a[1], o = a[4], p = a[2], q = a[5], t[k + 0] = l * h + n * j + p, t[k + 1] = o * j + m * h + q, t[k + 2] = l * g + n * j + p, t[k + 3] = o * j + m * g + q, t[k + 4] = l * g + n * i + p, t[k + 5] = o * i + m * g + q, t[k + 6] = l * h + n * i + p, t[k + 7] = o * i + m * h + q, s.updateFrame || s.texture.updateFrame) {
                    this.dirtyUVS = !0;
                    var w = s.texture,
                        x = w.frame,
                        y = w.baseTexture.width,
                        z = w.baseTexture.height;
                    u[k + 0] = x.x / y, u[k + 1] = x.y / z, u[k + 2] = (x.x + x.width) / y, u[k + 3] = x.y / z, u[k + 4] = (x.x + x.width) / y, u[k + 5] = (x.y + x.height) / z, u[k + 6] = x.x / y, u[k + 7] = (x.y + x.height) / z, s.updateFrame = !1
                }
                if (s.cacheAlpha != s.worldAlpha) {
                    s.cacheAlpha = s.worldAlpha;
                    var A = 4 * r;
                    v[A] = v[A + 1] = v[A + 2] = v[A + 3] = s.worldAlpha, this.dirtyColors = !0
                }
            } else k = 8 * r, t[k + 0] = t[k + 1] = t[k + 2] = t[k + 3] = t[k + 4] = t[k + 5] = t[k + 6] = t[k + 7] = 0;
            r++, s = s.__next
        }
    }, f.WebGLBatch.prototype.render = function(a, b) {
        if (a = a || 0, void 0 == b && (b = this.size), this.dirty && (this.refresh(), this.dirty = !1), 0 != this.size) {
            this.update();
            var c = this.gl,
                d = f.defaultShader;
            c.bindBuffer(c.ARRAY_BUFFER, this.vertexBuffer), c.bufferSubData(c.ARRAY_BUFFER, 0, this.verticies), c.vertexAttribPointer(d.aVertexPosition, 2, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, this.uvBuffer), this.dirtyUVS && (this.dirtyUVS = !1, c.bufferSubData(c.ARRAY_BUFFER, 0, this.uvs)), c.vertexAttribPointer(d.aTextureCoord, 2, c.FLOAT, !1, 0, 0), c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, this.texture._glTexture), c.bindBuffer(c.ARRAY_BUFFER, this.colorBuffer), this.dirtyColors && (this.dirtyColors = !1, c.bufferSubData(c.ARRAY_BUFFER, 0, this.colors)), c.vertexAttribPointer(d.colorAttribute, 1, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var e = b - a;
            c.drawElements(c.TRIANGLES, 6 * e, c.UNSIGNED_SHORT, 2 * a * 6)
        }
    }, f.WebGLRenderGroup = function(a, b) {
        this.gl = a, this.root, this.backgroundColor, this.transparent = void 0 == b ? !0 : b, this.batchs = [], this.toRemove = [], console.log(this.transparent), this.filterManager = new f.WebGLFilterManager(this.transparent)
    }, f.WebGLRenderGroup.prototype.constructor = f.WebGLRenderGroup, f.WebGLRenderGroup.prototype.setRenderable = function(a) {
        this.root && this.removeDisplayObjectAndChildren(this.root), a.worldVisible = a.visible, this.root = a, this.addDisplayObjectAndChildren(a)
    }, f.WebGLRenderGroup.prototype.render = function(a, b) {
        f.WebGLRenderer.updateTextures();
        var c = this.gl;
        c.uniform2f(f.defaultShader.projectionVector, a.x, a.y), this.filterManager.begin(a, b), c.blendFunc(c.ONE, c.ONE_MINUS_SRC_ALPHA);
        for (var d, e = 0; e < this.batchs.length; e++) d = this.batchs[e], d instanceof f.WebGLBatch ? this.batchs[e].render() : this.renderSpecial(d, a)
    }, f.WebGLRenderGroup.prototype.renderSpecific = function(a, b, c) {
        f.WebGLRenderer.updateTextures();
        var d = this.gl;
        d.uniform2f(f.defaultShader.projectionVector, b.x, b.y), this.filterManager.begin(b, c);
        for (var e, g, h, i, j = a.first; j._iNext && (!j.renderable || !j.__renderGroup);) j = j._iNext;
        var k = j.batch;
        if (j instanceof f.Sprite) {
            k = j.batch;
            var l = k.head;
            if (l == j) e = 0;
            else
                for (e = 1; l.__next != j;) e++, l = l.__next
        } else k = j;
        for (var m = a.last; m._iPrev && (!m.renderable || !m.__renderGroup);) m = m._iNext;
        if (m instanceof f.Sprite) {
            endBatch = m.batch;
            var l = endBatch.head;
            if (l == m) h = 0;
            else
                for (h = 1; l.__next != m;) h++, l = l.__next
        } else endBatch = m;
        if (k == endBatch) return k instanceof f.WebGLBatch ? k.render(e, h + 1) : this.renderSpecial(k, b), void 0;
        g = this.batchs.indexOf(k), i = this.batchs.indexOf(endBatch), k instanceof f.WebGLBatch ? k.render(e) : this.renderSpecial(k, b);
        for (var n = g + 1; i > n; n++) renderable = this.batchs[n], renderable instanceof f.WebGLBatch ? this.batchs[n].render() : this.renderSpecial(renderable, b);
        endBatch instanceof f.WebGLBatch ? endBatch.render(0, h + 1) : this.renderSpecial(endBatch, b)
    }, f.WebGLRenderGroup.prototype.renderSpecial = function(a, b) {
        var c = a.vcount === f.visibleCount;
        a instanceof f.TilingSprite ? c && this.renderTilingSprite(a, b) : a instanceof f.Strip ? c && this.renderStrip(a, b) : a instanceof f.CustomRenderable ? c && a.renderWebGL(this, b) : a instanceof f.Graphics ? c && a.renderable && f.WebGLGraphics.renderGraphics(a, b) : a instanceof f.FilterBlock && this.handleFilterBlock(a, b)
    }, flip = !1;
    var l = [],
        m = 0;
    f.WebGLRenderGroup.prototype.handleFilterBlock = function(a, b) {
        var c = f.gl;
        if (a.open) a.data instanceof Array ? this.filterManager.pushFilter(a) : (m++, l.push(a), c.enable(c.STENCIL_TEST), c.colorMask(!1, !1, !1, !1), c.stencilFunc(c.ALWAYS, 1, 1), c.stencilOp(c.KEEP, c.KEEP, c.INCR), f.WebGLGraphics.renderGraphics(a.data, b), c.colorMask(!0, !0, !0, !0), c.stencilFunc(c.NOTEQUAL, 0, l.length), c.stencilOp(c.KEEP, c.KEEP, c.KEEP));
        else if (a.data instanceof Array) this.filterManager.popFilter();
        else {
            var d = l.pop(a);
            d && (c.colorMask(!1, !1, !1, !1), c.stencilFunc(c.ALWAYS, 1, 1), c.stencilOp(c.KEEP, c.KEEP, c.DECR), f.WebGLGraphics.renderGraphics(d.data, b), c.colorMask(!0, !0, !0, !0), c.stencilFunc(c.NOTEQUAL, 0, l.length), c.stencilOp(c.KEEP, c.KEEP, c.KEEP)), c.disable(c.STENCIL_TEST)
        }
    }, f.WebGLRenderGroup.prototype.updateTexture = function(a) {
        this.removeObject(a);
        for (var b = a.first; b != this.root && (b = b._iPrev, !b.renderable || !b.__renderGroup););
        for (var c = a.last; c._iNext && (c = c._iNext, !c.renderable || !c.__renderGroup););
        this.insertObject(a, b, c)
    }, f.WebGLRenderGroup.prototype.addFilterBlocks = function(a, b) {
        a.__renderGroup = this, b.__renderGroup = this;
        for (var c = a; c != this.root.first && (c = c._iPrev, !c.renderable || !c.__renderGroup););
        this.insertAfter(a, c);
        for (var d = b; d != this.root.first && (d = d._iPrev, !d.renderable || !d.__renderGroup););
        this.insertAfter(b, d)
    }, f.WebGLRenderGroup.prototype.removeFilterBlocks = function(a, b) {
        this.removeObject(a), this.removeObject(b)
    }, f.WebGLRenderGroup.prototype.addDisplayObjectAndChildren = function(a) {
        a.__renderGroup && a.__renderGroup.removeDisplayObjectAndChildren(a);
        for (var b = a.first; b != this.root.first && (b = b._iPrev, !b.renderable || !b.__renderGroup););
        for (var c = a.last; c._iNext && (c = c._iNext, !c.renderable || !c.__renderGroup););
        var d = a.first,
            e = a.last._iNext;
        do d.__renderGroup = this, d.renderable && (this.insertObject(d, b, c), b = d), d = d._iNext; while (d != e)
    }, f.WebGLRenderGroup.prototype.removeDisplayObjectAndChildren = function(a) {
        if (a.__renderGroup == this) {
            {
                a.last
            }
            do a.__renderGroup = null, a.renderable && this.removeObject(a), a = a._iNext; while (a)
        }
    }, f.WebGLRenderGroup.prototype.insertObject = function(a, b, c) {
        var d = b,
            e = c;
        if (a instanceof f.Sprite) {
            var g, h;
            if (d instanceof f.Sprite) {
                if (g = d.batch, g && g.texture == a.texture.baseTexture && g.blendMode == a.blendMode) return g.insertAfter(a, d), void 0
            } else g = d;
            if (e)
                if (e instanceof f.Sprite) {
                    if (h = e.batch) {
                        if (h.texture == a.texture.baseTexture && h.blendMode == a.blendMode) return h.insertBefore(a, e), void 0;
                        if (h == g) {
                            var i = g.split(e),
                                j = f.WebGLRenderer.getBatch(),
                                k = this.batchs.indexOf(g);
                            return j.init(a), this.batchs.splice(k + 1, 0, j, i), void 0
                        }
                    }
                } else h = e;
            var j = f.WebGLRenderer.getBatch();
            if (j.init(a), g) {
                var k = this.batchs.indexOf(g);
                this.batchs.splice(k + 1, 0, j)
            } else this.batchs.push(j)
        } else a instanceof f.TilingSprite ? this.initTilingSprite(a) : a instanceof f.Strip && this.initStrip(a), this.insertAfter(a, d)
    }, f.WebGLRenderGroup.prototype.insertAfter = function(a, b) {
        if (b instanceof f.Sprite) {
            var c = b.batch;
            if (c)
                if (c.tail == b) {
                    var d = this.batchs.indexOf(c);
                    this.batchs.splice(d + 1, 0, a)
                } else {
                    var e = c.split(b.__next),
                        d = this.batchs.indexOf(c);
                    this.batchs.splice(d + 1, 0, a, e)
                }
            else this.batchs.push(a)
        } else {
            var d = this.batchs.indexOf(b);
            this.batchs.splice(d + 1, 0, a)
        }
    }, f.WebGLRenderGroup.prototype.removeObject = function(a) {
        var b;
        if (a instanceof f.Sprite) {
            var c = a.batch;
            if (!c) return;
            c.remove(a), 0 == c.size && (b = c)
        } else b = a;
        if (b) {
            var d = this.batchs.indexOf(b);
            if (-1 == d) return;
            if (0 == d || d == this.batchs.length - 1) return this.batchs.splice(d, 1), b instanceof f.WebGLBatch && f.WebGLRenderer.returnBatch(b), void 0;
            if (this.batchs[d - 1] instanceof f.WebGLBatch && this.batchs[d + 1] instanceof f.WebGLBatch && this.batchs[d - 1].texture == this.batchs[d + 1].texture && this.batchs[d - 1].blendMode == this.batchs[d + 1].blendMode) return this.batchs[d - 1].merge(this.batchs[d + 1]), b instanceof f.WebGLBatch && f.WebGLRenderer.returnBatch(b), f.WebGLRenderer.returnBatch(this.batchs[d + 1]), this.batchs.splice(d, 2), void 0;
            this.batchs.splice(d, 1), b instanceof f.WebGLBatch && f.WebGLRenderer.returnBatch(b)
        }
    }, f.WebGLRenderGroup.prototype.initTilingSprite = function(a) {
        var b = this.gl;
        a.verticies = new Float32Array([0, 0, a.width, 0, a.width, a.height, 0, a.height]), a.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), a.colors = new Float32Array([1, 1, 1, 1]), a.indices = new Uint16Array([0, 1, 3, 2]), a._vertexBuffer = b.createBuffer(), a._indexBuffer = b.createBuffer(), a._uvBuffer = b.createBuffer(), a._colorBuffer = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, a._vertexBuffer), b.bufferData(b.ARRAY_BUFFER, a.verticies, b.STATIC_DRAW), b.bindBuffer(b.ARRAY_BUFFER, a._uvBuffer), b.bufferData(b.ARRAY_BUFFER, a.uvs, b.DYNAMIC_DRAW), b.bindBuffer(b.ARRAY_BUFFER, a._colorBuffer), b.bufferData(b.ARRAY_BUFFER, a.colors, b.STATIC_DRAW), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, a._indexBuffer), b.bufferData(b.ELEMENT_ARRAY_BUFFER, a.indices, b.STATIC_DRAW), a.texture.baseTexture._glTexture ? (b.bindTexture(b.TEXTURE_2D, a.texture.baseTexture._glTexture), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.REPEAT), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.REPEAT), a.texture.baseTexture._powerOf2 = !0) : a.texture.baseTexture._powerOf2 = !0
    }, f.WebGLRenderGroup.prototype.renderStrip = function(a, b) {
        var c = this.gl;
        f.activateStripShader();
        var d = f.stripShader,
            e = (d.program, f.mat3.clone(a.worldTransform));
        f.mat3.transpose(e), c.uniformMatrix3fv(d.translationMatrix, !1, e), c.uniform2f(d.projectionVector, b.x, b.y), c.uniform2f(d.offsetVector, -f.offset.x, -f.offset.y), c.uniform1f(d.alpha, a.worldAlpha), a.dirty ? (a.dirty = !1, c.bindBuffer(c.ARRAY_BUFFER, a._vertexBuffer), c.bufferData(c.ARRAY_BUFFER, a.verticies, c.STATIC_DRAW), c.vertexAttribPointer(d.aVertexPosition, 2, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, a._uvBuffer), c.bufferData(c.ARRAY_BUFFER, a.uvs, c.STATIC_DRAW), c.vertexAttribPointer(d.aTextureCoord, 2, c.FLOAT, !1, 0, 0), c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, a.texture.baseTexture._glTexture), c.bindBuffer(c.ARRAY_BUFFER, a._colorBuffer), c.bufferData(c.ARRAY_BUFFER, a.colors, c.STATIC_DRAW), c.vertexAttribPointer(d.colorAttribute, 1, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, a._indexBuffer), c.bufferData(c.ELEMENT_ARRAY_BUFFER, a.indices, c.STATIC_DRAW)) : (c.bindBuffer(c.ARRAY_BUFFER, a._vertexBuffer), c.bufferSubData(c.ARRAY_BUFFER, 0, a.verticies), c.vertexAttribPointer(d.aVertexPosition, 2, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, a._uvBuffer), c.vertexAttribPointer(d.aTextureCoord, 2, c.FLOAT, !1, 0, 0), c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, a.texture.baseTexture._glTexture), c.bindBuffer(c.ARRAY_BUFFER, a._colorBuffer), c.vertexAttribPointer(d.colorAttribute, 1, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, a._indexBuffer)), c.drawElements(c.TRIANGLE_STRIP, a.indices.length, c.UNSIGNED_SHORT, 0), f.deactivateStripShader()
    }, f.WebGLRenderGroup.prototype.renderTilingSprite = function(a, b) {
        var c = this.gl,
            d = (f.shaderProgram, a.tilePosition),
            e = a.tileScale,
            g = d.x / a.texture.baseTexture.width,
            h = d.y / a.texture.baseTexture.height,
            i = a.width / a.texture.baseTexture.width / e.x,
            j = a.height / a.texture.baseTexture.height / e.y;
        a.uvs[0] = 0 - g, a.uvs[1] = 0 - h, a.uvs[2] = 1 * i - g, a.uvs[3] = 0 - h, a.uvs[4] = 1 * i - g, a.uvs[5] = 1 * j - h, a.uvs[6] = 0 - g, a.uvs[7] = 1 * j - h, a.verticies[2] = a.verticies[4] = a.width, a.verticies[5] = a.verticies[7] = a.height, c.bindBuffer(c.ARRAY_BUFFER, a._vertexBuffer), c.bufferSubData(c.ARRAY_BUFFER, 0, a.verticies), c.bindBuffer(c.ARRAY_BUFFER, a._uvBuffer), c.bufferSubData(c.ARRAY_BUFFER, 0, a.uvs), this.renderStrip(a, b)
    }, f.WebGLRenderGroup.prototype.initStrip = function(a) {
        {
            var b = this.gl;
            this.shaderProgram
        }
        a._vertexBuffer = b.createBuffer(), a._indexBuffer = b.createBuffer(), a._uvBuffer = b.createBuffer(), a._colorBuffer = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, a._vertexBuffer), b.bufferData(b.ARRAY_BUFFER, a.verticies, b.DYNAMIC_DRAW), b.bindBuffer(b.ARRAY_BUFFER, a._uvBuffer), b.bufferData(b.ARRAY_BUFFER, a.uvs, b.STATIC_DRAW), b.bindBuffer(b.ARRAY_BUFFER, a._colorBuffer), b.bufferData(b.ARRAY_BUFFER, a.colors, b.STATIC_DRAW), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, a._indexBuffer), b.bufferData(b.ELEMENT_ARRAY_BUFFER, a.indices, b.STATIC_DRAW)
    }, f.WebGLFilterManager = function(a) {
        this.transparent = a, this.filterStack = [], this.texturePool = [], this.offsetX = 0, this.offsetY = 0, this.initShaderBuffers()
    }, f.WebGLFilterManager.prototype.begin = function(a, b) {
        this.width = 2 * a.x, this.height = 2 * -a.y, this.buffer = b
    }, f.WebGLFilterManager.prototype.pushFilter = function(a) {
        var b = f.gl;
        this.filterStack.push(a);
        var c = a.filterPasses[0];
        this.offsetX += a.target.filterArea.x, this.offsetY += a.target.filterArea.y;
        var d = this.texturePool.pop();
        d ? d.resize(this.width, this.height) : d = new f.FilterTexture(this.width, this.height), b.bindTexture(b.TEXTURE_2D, d.texture), this.getBounds(a.target);
        var e = a.target.filterArea,
            g = c.padding;
        e.x -= g, e.y -= g, e.width += 2 * g, e.height += 2 * g, e.x < 0 && (e.x = 0), e.width > this.width && (e.width = this.width), e.y < 0 && (e.y = 0), e.height > this.height && (e.height = this.height), b.bindFramebuffer(b.FRAMEBUFFER, d.frameBuffer), b.viewport(0, 0, e.width, e.height), f.projection.x = e.width / 2, f.projection.y = -e.height / 2, f.offset.x = -e.x, f.offset.y = -e.y, b.uniform2f(f.defaultShader.projectionVector, e.width / 2, -e.height / 2), b.uniform2f(f.defaultShader.offsetVector, -e.x, -e.y), b.colorMask(!0, !0, !0, !0), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT), a._glFilterTexture = d
    }, f.WebGLFilterManager.prototype.popFilter = function() {
        var a = f.gl,
            b = this.filterStack.pop(),
            c = b.target.filterArea,
            d = b._glFilterTexture;
        if (b.filterPasses.length > 1) {
            a.viewport(0, 0, c.width, c.height), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = 0, this.vertexArray[1] = c.height, this.vertexArray[2] = c.width, this.vertexArray[3] = c.height, this.vertexArray[4] = 0, this.vertexArray[5] = 0, this.vertexArray[6] = c.width, this.vertexArray[7] = 0, a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertexArray), a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = c.width / this.width, this.uvArray[5] = c.height / this.height, this.uvArray[6] = c.width / this.width, this.uvArray[7] = c.height / this.height, a.bufferSubData(a.ARRAY_BUFFER, 0, this.uvArray);
            var e = d,
                g = this.texturePool.pop();
            g || (g = new f.FilterTexture(this.width, this.height)), a.bindFramebuffer(a.FRAMEBUFFER, g.frameBuffer), a.clear(a.COLOR_BUFFER_BIT), a.disable(a.BLEND);
            for (var h = 0; h < b.filterPasses.length - 1; h++) {
                var i = b.filterPasses[h];
                a.bindFramebuffer(a.FRAMEBUFFER, g.frameBuffer), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, e.texture), this.applyFilterPass(i, c, c.width, c.height);
                var j = e;
                e = g, g = j
            }
            a.enable(a.BLEND), d = e, this.texturePool.push(g)
        }
        var k = b.filterPasses[b.filterPasses.length - 1];
        this.offsetX -= c.x, this.offsetY -= c.y;
        var l = this.width,
            m = this.height,
            n = 0,
            o = 0,
            p = this.buffer;
        if (0 === this.filterStack.length) a.colorMask(!0, !0, !0, this.transparent);
        else {
            var q = this.filterStack[this.filterStack.length - 1],
                c = q.target.filterArea;
            l = c.width, m = c.height, n = c.x, o = c.y, p = q._glFilterTexture.frameBuffer
        }
        f.projection.x = l / 2, f.projection.y = -m / 2, f.offset.x = n, f.offset.y = o;
        var c = b.target.filterArea,
            r = c.x - n,
            s = c.y - o;
        a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = r, this.vertexArray[1] = s + c.height, this.vertexArray[2] = r + c.width, this.vertexArray[3] = s + c.height, this.vertexArray[4] = r, this.vertexArray[5] = s, this.vertexArray[6] = r + c.width, this.vertexArray[7] = s, a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertexArray), a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = c.width / this.width, this.uvArray[5] = c.height / this.height, this.uvArray[6] = c.width / this.width, this.uvArray[7] = c.height / this.height, a.bufferSubData(a.ARRAY_BUFFER, 0, this.uvArray), a.viewport(0, 0, l, m), a.bindFramebuffer(a.FRAMEBUFFER, p), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, d.texture), this.applyFilterPass(k, c, l, m), a.useProgram(f.defaultShader.program), a.uniform2f(f.defaultShader.projectionVector, l / 2, -m / 2), a.uniform2f(f.defaultShader.offsetVector, -n, -o), this.texturePool.push(d), b._glFilterTexture = null
    }, f.WebGLFilterManager.prototype.applyFilterPass = function(a, b, c, d) {
        var e = f.gl;
        if (!a.shader) {
            var g = new f.PixiShader;
            g.fragmentSrc = a.fragmentSrc, g.uniforms = a.uniforms, g.init(), a.shader = g
        }
        var g = a.shader;
        e.useProgram(g.program), e.uniform2f(g.projectionVector, c / 2, -d / 2), e.uniform2f(g.offsetVector, 0, 0), a.uniforms.dimensions && (a.uniforms.dimensions.value[0] = this.width, a.uniforms.dimensions.value[1] = this.height, a.uniforms.dimensions.value[2] = this.vertexArray[0], a.uniforms.dimensions.value[3] = this.vertexArray[5]), g.syncUniforms(), e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), e.vertexAttribPointer(g.aVertexPosition, 2, e.FLOAT, !1, 0, 0), e.bindBuffer(e.ARRAY_BUFFER, this.uvBuffer), e.vertexAttribPointer(g.aTextureCoord, 2, e.FLOAT, !1, 0, 0), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0)
    }, f.WebGLFilterManager.prototype.initShaderBuffers = function() {
        var a = f.gl;
        this.vertexBuffer = a.createBuffer(), this.uvBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), this.vertexArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bufferData(a.ARRAY_BUFFER, this.vertexArray, a.STATIC_DRAW), this.uvArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer), a.bufferData(a.ARRAY_BUFFER, this.uvArray, a.STATIC_DRAW), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), a.STATIC_DRAW)
    }, f.WebGLFilterManager.prototype.getBounds = function(a) {
        var b, c, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A = a.first,
            B = a.last._iNext,
            C = -1 / 0,
            D = -1 / 0,
            E = 1 / 0,
            F = 1 / 0;
        do {
            if (A.visible)
                if (A instanceof f.Sprite) c = A.texture.frame.width, d = A.texture.frame.height, e = A.anchor.x, g = A.anchor.y, h = c * (1 - e), i = c * -e, j = d * (1 - g), k = d * -g, l = !0;
                else if (A instanceof f.Graphics) {
                A.updateFilterBounds();
                var G = A.bounds;
                c = G.width, d = G.height, h = G.x, i = G.x + G.width, j = G.y, k = G.y + G.height, l = !0
            }
            l && (b = A.worldTransform, m = b[0], n = b[3], o = b[1], p = b[4], q = b[2], r = b[5], s = m * i + o * k + q, w = p * k + n * i + r, t = m * h + o * k + q, x = p * k + n * h + r, u = m * h + o * j + q, y = p * j + n * h + r, v = m * i + o * j + q, z = p * j + n * i + r, E = E > s ? s : E, E = E > t ? t : E, E = E > u ? u : E, E = E > v ? v : E, F = F > w ? w : F, F = F > x ? x : F, F = F > y ? y : F, F = F > z ? z : F, C = s > C ? s : C, C = t > C ? t : C, C = u > C ? u : C, C = v > C ? v : C, D = w > D ? w : D, D = x > D ? x : D, D = y > D ? y : D, D = z > D ? z : D), l = !1, A = A._iNext
        } while (A != B);
        a.filterArea.x = E, a.filterArea.y = F, a.filterArea.width = C - E, a.filterArea.height = D - F
    }, f.FilterTexture = function(a, b) {
        var c = f.gl;
        this.frameBuffer = c.createFramebuffer(), this.texture = c.createTexture(), c.bindTexture(c.TEXTURE_2D, this.texture), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), c.bindFramebuffer(c.FRAMEBUFFER, this.framebuffer), c.bindFramebuffer(c.FRAMEBUFFER, this.frameBuffer), c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, this.texture, 0), this.resize(a, b)
    }, f.FilterTexture.prototype.resize = function(a, b) {
        if (this.width != a || this.height != b) {
            this.width = a, this.height = b;
            var c = f.gl;
            c.bindTexture(c.TEXTURE_2D, this.texture), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, a, b, 0, c.RGBA, c.UNSIGNED_BYTE, null)
        }
    }, f.CanvasRenderer = function(a, b, c, d) {
        this.transparent = d, this.width = a || 800, this.height = b || 600, this.view = c || document.createElement("canvas"), this.context = this.view.getContext("2d"), this.refresh = !0, this.view.width = this.width, this.view.height = this.height, this.count = 0
    }, f.CanvasRenderer.prototype.constructor = f.CanvasRenderer, f.CanvasRenderer.prototype.render = function(a) {
        f.texturesToUpdate = [], f.texturesToDestroy = [], f.visibleCount++, a.updateTransform(), this.view.style.backgroundColor == a.backgroundColorString || this.transparent || (this.view.style.backgroundColor = a.backgroundColorString), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.width, this.height), this.renderDisplayObject(a), a.interactive && (a._interactiveEventsAdded || (a._interactiveEventsAdded = !0, a.interactionManager.setTarget(this))), f.Texture.frameUpdates.length > 0 && (f.Texture.frameUpdates = [])
    }, f.CanvasRenderer.prototype.resize = function(a, b) {
        this.width = a, this.height = b, this.view.width = a, this.view.height = b
    }, f.CanvasRenderer.prototype.renderDisplayObject = function(a) {
        var b, c = this.context;
        c.globalCompositeOperation = "source-over";
        var d = a.last._iNext;
        a = a.first;
        do
            if (b = a.worldTransform, a.visible)
                if (a.renderable) {
                    if (a instanceof f.Sprite) {
                        var e = a.texture.frame;
                        e && e.width && e.height && a.texture.baseTexture.source && (c.globalAlpha = a.worldAlpha, c.setTransform(b[0], b[3], b[1], b[4], b[2], b[5]), c.drawImage(a.texture.baseTexture.source, e.x, e.y, e.width, e.height, a.anchor.x * -e.width, a.anchor.y * -e.height, e.width, e.height))
                    } else if (a instanceof f.Strip) c.setTransform(b[0], b[3], b[1], b[4], b[2], b[5]), this.renderStrip(a);
                    else if (a instanceof f.TilingSprite) c.setTransform(b[0], b[3], b[1], b[4], b[2], b[5]), this.renderTilingSprite(a);
                    else if (a instanceof f.CustomRenderable) c.setTransform(b[0], b[3], b[1], b[4], b[2], b[5]), a.renderCanvas(this);
                    else if (a instanceof f.Graphics) c.setTransform(b[0], b[3], b[1], b[4], b[2], b[5]), f.CanvasGraphics.renderGraphics(a, c);
                    else if (a instanceof f.FilterBlock && a.data instanceof f.Graphics) {
                        var g = a.data;
                        if (a.open) {
                            c.save();
                            var h = g.alpha,
                                i = g.worldTransform;
                            c.setTransform(i[0], i[3], i[1], i[4], i[2], i[5]), g.worldAlpha = .5, c.worldAlpha = 0, f.CanvasGraphics.renderGraphicsMask(g, c), c.clip(), g.worldAlpha = h
                        } else c.restore()
                    }
                    a = a._iNext
                } else a = a._iNext;
        else a = a.last._iNext; while (a != d)
    }, f.CanvasRenderer.prototype.renderStripFlat = function(a) {
        var b = this.context,
            c = a.verticies,
            d = (a.uvs, c.length / 2);
        this.count++, b.beginPath();
        for (var e = 1; d - 2 > e; e++) {
            var f = 2 * e,
                g = c[f],
                h = c[f + 2],
                i = c[f + 4],
                j = c[f + 1],
                k = c[f + 3],
                l = c[f + 5];
            b.moveTo(g, j), b.lineTo(h, k), b.lineTo(i, l)
        }
        b.fillStyle = "#FF0000", b.fill(), b.closePath()
    }, f.CanvasRenderer.prototype.renderTilingSprite = function(a) {
        var b = this.context;
        b.globalAlpha = a.worldAlpha, a.__tilePattern || (a.__tilePattern = b.createPattern(a.texture.baseTexture.source, "repeat")), b.beginPath();
        var c = a.tilePosition,
            d = a.tileScale;
        b.scale(d.x, d.y), b.translate(c.x, c.y), b.fillStyle = a.__tilePattern, b.fillRect(-c.x, -c.y, a.width / d.x, a.height / d.y), b.scale(1 / d.x, 1 / d.y), b.translate(-c.x, -c.y), b.closePath()
    }, f.CanvasRenderer.prototype.renderStrip = function(a) {
        var b = this.context,
            c = a.verticies,
            d = a.uvs,
            e = c.length / 2;
        this.count++;
        for (var f = 1; e - 2 > f; f++) {
            var g = 2 * f,
                h = c[g],
                i = c[g + 2],
                j = c[g + 4],
                k = c[g + 1],
                l = c[g + 3],
                m = c[g + 5],
                n = d[g] * a.texture.width,
                o = d[g + 2] * a.texture.width,
                p = d[g + 4] * a.texture.width,
                q = d[g + 1] * a.texture.height,
                r = d[g + 3] * a.texture.height,
                s = d[g + 5] * a.texture.height;
            b.save(), b.beginPath(), b.moveTo(h, k), b.lineTo(i, l), b.lineTo(j, m), b.closePath(), b.clip();
            var t = n * r + q * p + o * s - r * p - q * o - n * s,
                u = h * r + q * j + i * s - r * j - q * i - h * s,
                v = n * i + h * p + o * j - i * p - h * o - n * j,
                w = n * r * j + q * i * p + h * o * s - h * r * p - q * o * j - n * i * s,
                x = k * r + q * m + l * s - r * m - q * l - k * s,
                y = n * l + k * p + o * m - l * p - k * o - n * m,
                z = n * r * m + q * l * p + k * o * s - k * r * p - q * o * m - n * l * s;
            b.transform(u / t, x / t, v / t, y / t, w / t, z / t), b.drawImage(a.texture.baseTexture.source, 0, 0), b.restore()
        }
    }, f.CanvasGraphics = function() {}, f.CanvasGraphics.renderGraphics = function(a, b) {
        for (var c = a.worldAlpha, d = 0; d < a.graphicsData.length; d++) {
            var e = a.graphicsData[d],
                g = e.points;
            if (b.strokeStyle = color = "#" + ("00000" + (0 | e.lineColor).toString(16)).substr(-6), b.lineWidth = e.lineWidth, e.type == f.Graphics.POLY) {
                b.beginPath(), b.moveTo(g[0], g[1]);
                for (var h = 1; h < g.length / 2; h++) b.lineTo(g[2 * h], g[2 * h + 1]);
                g[0] == g[g.length - 2] && g[1] == g[g.length - 1] && b.closePath(), e.fill && (b.globalAlpha = e.fillAlpha * c, b.fillStyle = color = "#" + ("00000" + (0 | e.fillColor).toString(16)).substr(-6), b.fill()), e.lineWidth && (b.globalAlpha = e.lineAlpha * c, b.stroke())
            } else if (e.type == f.Graphics.RECT)(e.fillColor || 0 === e.fillColor) && (b.globalAlpha = e.fillAlpha * c, b.fillStyle = color = "#" + ("00000" + (0 | e.fillColor).toString(16)).substr(-6), b.fillRect(g[0], g[1], g[2], g[3])), e.lineWidth && (b.globalAlpha = e.lineAlpha * c, b.strokeRect(g[0], g[1], g[2], g[3]));
            else if (e.type == f.Graphics.CIRC) b.beginPath(), b.arc(g[0], g[1], g[2], 0, 2 * Math.PI), b.closePath(), e.fill && (b.globalAlpha = e.fillAlpha * c, b.fillStyle = color = "#" + ("00000" + (0 | e.fillColor).toString(16)).substr(-6), b.fill()), e.lineWidth && (b.globalAlpha = e.lineAlpha * c, b.stroke());
            else if (e.type == f.Graphics.ELIP) {
                var i = e.points,
                    j = 2 * i[2],
                    k = 2 * i[3],
                    l = i[0] - j / 2,
                    m = i[1] - k / 2;
                b.beginPath();
                var n = .5522848,
                    o = j / 2 * n,
                    p = k / 2 * n,
                    q = l + j,
                    r = m + k,
                    s = l + j / 2,
                    t = m + k / 2;
                b.moveTo(l, t), b.bezierCurveTo(l, t - p, s - o, m, s, m), b.bezierCurveTo(s + o, m, q, t - p, q, t), b.bezierCurveTo(q, t + p, s + o, r, s, r), b.bezierCurveTo(s - o, r, l, t + p, l, t), b.closePath(), e.fill && (b.globalAlpha = e.fillAlpha * c, b.fillStyle = color = "#" + ("00000" + (0 | e.fillColor).toString(16)).substr(-6), b.fill()), e.lineWidth && (b.globalAlpha = e.lineAlpha * c, b.stroke())
            }
        }
    }, f.CanvasGraphics.renderGraphicsMask = function(a, b) {
        var c = (a.worldAlpha, a.graphicsData.length);
        if (0 !== c) {
            c > 1 && (c = 1, console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));
            for (var d = 0; 1 > d; d++) {
                var e = a.graphicsData[d],
                    g = e.points;
                if (e.type == f.Graphics.POLY) {
                    b.beginPath(), b.moveTo(g[0], g[1]);
                    for (var h = 1; h < g.length / 2; h++) b.lineTo(g[2 * h], g[2 * h + 1]);
                    g[0] == g[g.length - 2] && g[1] == g[g.length - 1] && b.closePath()
                } else if (e.type == f.Graphics.RECT) b.beginPath(), b.rect(g[0], g[1], g[2], g[3]), b.closePath();
                else if (e.type == f.Graphics.CIRC) b.beginPath(), b.arc(g[0], g[1], g[2], 0, 2 * Math.PI), b.closePath();
                else if (e.type == f.Graphics.ELIP) {
                    var i = e.points,
                        j = 2 * i[2],
                        k = 2 * i[3],
                        l = i[0] - j / 2,
                        m = i[1] - k / 2;
                    b.beginPath();
                    var n = .5522848,
                        o = j / 2 * n,
                        p = k / 2 * n,
                        q = l + j,
                        r = m + k,
                        s = l + j / 2,
                        t = m + k / 2;
                    b.moveTo(l, t), b.bezierCurveTo(l, t - p, s - o, m, s, m), b.bezierCurveTo(s + o, m, q, t - p, q, t), b.bezierCurveTo(q, t + p, s + o, r, s, r), b.bezierCurveTo(s - o, r, l, t + p, l, t), b.closePath()
                }
            }
        }
    }, f.Graphics = function() {
        f.DisplayObjectContainer.call(this), this.renderable = !0, this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = "black", this.graphicsData = [], this.currentPath = {
            points: []
        }
    }, f.Graphics.prototype = Object.create(f.DisplayObjectContainer.prototype), f.Graphics.prototype.constructor = f.Graphics, f.Graphics.prototype.lineStyle = function(a, b, c) {
        0 == this.currentPath.points.length && this.graphicsData.pop(), this.lineWidth = a || 0, this.lineColor = b || 0, this.lineAlpha = void 0 == c ? 1 : c, this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [],
            type: f.Graphics.POLY
        }, this.graphicsData.push(this.currentPath)
    }, f.Graphics.prototype.moveTo = function(a, b) {
        0 == this.currentPath.points.length && this.graphicsData.pop(), this.currentPath = this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [],
            type: f.Graphics.POLY
        }, this.currentPath.points.push(a, b), this.graphicsData.push(this.currentPath)
    }, f.Graphics.prototype.lineTo = function(a, b) {
        this.currentPath.points.push(a, b), this.dirty = !0
    }, f.Graphics.prototype.beginFill = function(a, b) {
        this.filling = !0, this.fillColor = a || 0, this.fillAlpha = void 0 == b ? 1 : b
    }, f.Graphics.prototype.endFill = function() {
        this.filling = !1, this.fillColor = null, this.fillAlpha = 1
    }, f.Graphics.prototype.drawRect = function(a, b, c, d) {
        0 == this.currentPath.points.length && this.graphicsData.pop(), this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [a, b, c, d],
            type: f.Graphics.RECT
        }, this.graphicsData.push(this.currentPath), this.dirty = !0
    }, f.Graphics.prototype.drawCircle = function(a, b, c) {
        0 == this.currentPath.points.length && this.graphicsData.pop(), this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [a, b, c, c],
            type: f.Graphics.CIRC
        }, this.graphicsData.push(this.currentPath), this.dirty = !0
    }, f.Graphics.prototype.drawElipse = function(a, b, c, d) {
        0 == this.currentPath.points.length && this.graphicsData.pop(), this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [a, b, c, d],
            type: f.Graphics.ELIP
        }, this.graphicsData.push(this.currentPath), this.dirty = !0
    }, f.Graphics.prototype.clear = function() {
        this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this.bounds = null
    }, f.Graphics.prototype.updateFilterBounds = function() {
        if (!this.bounds) {
            for (var a, b, c, d = 1 / 0, e = -1 / 0, g = 1 / 0, h = -1 / 0, i = 0; i < this.graphicsData.length; i++) {
                var j = this.graphicsData[i],
                    k = j.type,
                    l = j.lineWidth;
                if (a = j.points, k === f.Graphics.RECT) {
                    b = a.x - l / 2, c = a.y - l / 2;
                    var m = a.width + l,
                        n = a.height + l;
                    d = d > b ? b : d, e = b + m > e ? b + m : e, g = g > c ? b : g, h = c + n > h ? c + n : h
                } else if (k === f.Graphics.CIRC || k === f.Graphics.ELIP) {
                    b = a.x, c = a.y;
                    var o = a.radius + l / 2;
                    d = d > b - o ? b - o : d, e = b + o > e ? b + o : e, g = g > c - o ? c - o : g, h = c + o > h ? c + o : h
                } else
                    for (var p = 0; p < a.length; p += 2) b = a[p], c = a[p + 1], d = d > b - l ? b - l : d, e = b + l > e ? b + l : e, g = g > c - l ? c - l : g, h = c + l > h ? c + l : h
            }
            this.bounds = new f.Rectangle(d, g, e - d, h - g)
        }
    }, f.Graphics.POLY = 0, f.Graphics.RECT = 1, f.Graphics.CIRC = 2, f.Graphics.ELIP = 3, f.Strip = function(a, b, c) {
        f.DisplayObjectContainer.call(this), this.texture = a, this.blendMode = f.blendModes.NORMAL;
        try {
            this.uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.verticies = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0]), this.colors = new Float32Array([1, 1, 1, 1]), this.indices = new Uint16Array([0, 1, 2, 3])
        } catch (d) {
            this.uvs = [0, 1, 1, 1, 1, 0, 0, 1], this.verticies = [0, 0, 0, 0, 0, 0, 0, 0, 0], this.colors = [1, 1, 1, 1], this.indices = [0, 1, 2, 3]
        }
        this.width = b, this.height = c, a.baseTexture.hasLoaded ? (this.width = this.texture.frame.width, this.height = this.texture.frame.height, this.updateFrame = !0) : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)), this.renderable = !0
    }, f.Strip.prototype = Object.create(f.DisplayObjectContainer.prototype), f.Strip.prototype.constructor = f.Strip, f.Strip.prototype.setTexture = function(a) {
        this.texture = a, this.width = a.frame.width, this.height = a.frame.height, this.updateFrame = !0
    }, f.Strip.prototype.onTextureUpdate = function() {
        this.updateFrame = !0
    }, f.Rope = function(a, b) {
        f.Strip.call(this, a), this.points = b;
        try {
            this.verticies = new Float32Array(4 * b.length), this.uvs = new Float32Array(4 * b.length), this.colors = new Float32Array(2 * b.length), this.indices = new Uint16Array(2 * b.length)
        } catch (c) {
            this.verticies = verticies, this.uvs = uvs, this.colors = colors, this.indices = indices
        }
        this.refresh()
    }, f.Rope.prototype = Object.create(f.Strip.prototype), f.Rope.prototype.constructor = f.Rope, f.Rope.prototype.refresh = function() {
        var a = this.points;
        if (!(a.length < 1)) {
            var b = this.uvs,
                c = this.indices,
                d = this.colors,
                e = a[0],
                f = a[0];
            this.count -= .2, b[0] = 0, b[1] = 1, b[2] = 0, b[3] = 1, d[0] = 1, d[1] = 1, c[0] = 0, c[1] = 1;
            for (var g = a.length, h = 1; g > h; h++) {
                var f = a[h],
                    i = 4 * h,
                    j = h / (g - 1);
                h % 2 ? (b[i] = j, b[i + 1] = 0, b[i + 2] = j, b[i + 3] = 1) : (b[i] = j, b[i + 1] = 0, b[i + 2] = j, b[i + 3] = 1), i = 2 * h, d[i] = 1, d[i + 1] = 1, i = 2 * h, c[i] = i, c[i + 1] = i + 1, e = f
            }
        }
    }, f.Rope.prototype.updateTransform = function() {
        var a = this.points;
        if (!(a.length < 1)) {
            var b, c = this.verticies,
                d = a[0],
                e = {
                    x: 0,
                    y: 0
                },
                g = a[0];
            this.count -= .2, c[0] = g.x + e.x, c[1] = g.y + e.y, c[2] = g.x - e.x, c[3] = g.y - e.y;
            for (var h = a.length, i = 1; h > i; i++) {
                var g = a[i],
                    j = 4 * i;
                b = i < a.length - 1 ? a[i + 1] : g, e.y = -(b.x - d.x), e.x = b.y - d.y;
                var k = 10 * (1 - i / (h - 1));
                k > 1 && (k = 1);
                var l = Math.sqrt(e.x * e.x + e.y * e.y),
                    m = this.texture.height / 2;
                e.x /= l, e.y /= l, e.x *= m, e.y *= m, c[j] = g.x + e.x, c[j + 1] = g.y + e.y, c[j + 2] = g.x - e.x, c[j + 3] = g.y - e.y, d = g
            }
            f.DisplayObjectContainer.prototype.updateTransform.call(this)
        }
    }, f.Rope.prototype.setTexture = function(a) {
        this.texture = a, this.updateFrame = !0
    }, f.TilingSprite = function(a, b, c) {
        f.DisplayObjectContainer.call(this), this.texture = a, this.width = b, this.height = c, this.tileScale = new f.Point(1, 1), this.tilePosition = new f.Point(0, 0), this.renderable = !0, this.blendMode = f.blendModes.NORMAL
    }, f.TilingSprite.prototype = Object.create(f.DisplayObjectContainer.prototype), f.TilingSprite.prototype.constructor = f.TilingSprite, f.TilingSprite.prototype.setTexture = function(a) {
        this.texture = a, this.updateFrame = !0
    }, f.TilingSprite.prototype.onTextureUpdate = function() {
        this.updateFrame = !0
    }, f.Spine = function(a) {
        if (f.DisplayObjectContainer.call(this), this.spineData = f.AnimCache[a], !this.spineData) throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: " + a);
        this.skeleton = new n.Skeleton(this.spineData), this.skeleton.updateWorldTransform(), this.stateData = new n.AnimationStateData(this.spineData), this.state = new n.AnimationState(this.stateData), this.slotContainers = [];
        for (var b = 0, c = this.skeleton.drawOrder.length; c > b; b++) {
            var d = this.skeleton.drawOrder[b],
                e = d.attachment,
                g = new f.DisplayObjectContainer;
            if (this.slotContainers.push(g), this.addChild(g), e instanceof n.RegionAttachment) {
                var h = e.rendererObject.name,
                    i = this.createSprite(d, e.rendererObject);
                d.currentSprite = i, d.currentSpriteName = h, g.addChild(i)
            }
        }
    }, f.Spine.prototype = Object.create(f.DisplayObjectContainer.prototype), f.Spine.prototype.constructor = f.Spine, f.Spine.prototype.updateTransform = function() {
        this.lastTime = this.lastTime || Date.now();
        var a = .001 * (Date.now() - this.lastTime);
        this.lastTime = Date.now(), this.state.update(a), this.state.apply(this.skeleton), this.skeleton.updateWorldTransform();
        for (var b = this.skeleton.drawOrder, c = 0, d = b.length; d > c; c++) {
            var e = b[c],
                g = e.attachment,
                h = this.slotContainers[c];
            if (g instanceof n.RegionAttachment) {
                if (g.rendererObject && (!e.currentSpriteName || e.currentSpriteName != g.name)) {
                    var i = g.rendererObject.name;
                    if (void 0 !== e.currentSprite && (e.currentSprite.visible = !1), e.sprites = e.sprites || {}, void 0 !== e.sprites[i]) e.sprites[i].visible = !0;
                    else {
                        var j = this.createSprite(e, g.rendererObject);
                        h.addChild(j)
                    }
                    e.currentSprite = e.sprites[i], e.currentSpriteName = i
                }
                h.visible = !0;
                var k = e.bone;
                h.position.x = k.worldX + g.x * k.m00 + g.y * k.m01, h.position.y = k.worldY + g.x * k.m10 + g.y * k.m11, h.scale.x = k.worldScaleX, h.scale.y = k.worldScaleY, h.rotation = -(e.bone.worldRotation * Math.PI / 180)
            } else h.visible = !1
        }
        f.DisplayObjectContainer.prototype.updateTransform.call(this)
    }, f.Spine.prototype.createSprite = function(a, b) {
        var c = f.TextureCache[b.name] ? b.name : b.name + ".png",
            d = new f.Sprite(f.Texture.fromFrame(c));
        return d.scale = b.scale, d.rotation = b.rotation, d.anchor.x = d.anchor.y = .5, a.sprites = a.sprites || {}, a.sprites[b.name] = d, d
    };
    var n = {};
    n.BoneData = function(a, b) {
        this.name = a, this.parent = b
    }, n.BoneData.prototype = {
        length: 0,
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1
    }, n.SlotData = function(a, b) {
        this.name = a, this.boneData = b
    }, n.SlotData.prototype = {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        attachmentName: null
    }, n.Bone = function(a, b) {
        this.data = a, this.parent = b, this.setToSetupPose()
    }, n.Bone.yDown = !1, n.Bone.prototype = {
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        m00: 0,
        m01: 0,
        worldX: 0,
        m10: 0,
        m11: 0,
        worldY: 0,
        worldRotation: 0,
        worldScaleX: 1,
        worldScaleY: 1,
        updateWorldTransform: function(a, b) {
            var c = this.parent;
            null != c ? (this.worldX = this.x * c.m00 + this.y * c.m01 + c.worldX, this.worldY = this.x * c.m10 + this.y * c.m11 + c.worldY, this.worldScaleX = c.worldScaleX * this.scaleX, this.worldScaleY = c.worldScaleY * this.scaleY, this.worldRotation = c.worldRotation + this.rotation) : (this.worldX = this.x, this.worldY = this.y, this.worldScaleX = this.scaleX, this.worldScaleY = this.scaleY, this.worldRotation = this.rotation);
            var d = this.worldRotation * Math.PI / 180,
                e = Math.cos(d),
                f = Math.sin(d);
            this.m00 = e * this.worldScaleX, this.m10 = f * this.worldScaleX, this.m01 = -f * this.worldScaleY, this.m11 = e * this.worldScaleY, a && (this.m00 = -this.m00, this.m01 = -this.m01), b && (this.m10 = -this.m10, this.m11 = -this.m11), n.Bone.yDown && (this.m10 = -this.m10, this.m11 = -this.m11)
        },
        setToSetupPose: function() {
            var a = this.data;
            this.x = a.x, this.y = a.y, this.rotation = a.rotation, this.scaleX = a.scaleX, this.scaleY = a.scaleY
        }
    }, n.Slot = function(a, b, c) {
        this.data = a, this.skeleton = b, this.bone = c, this.setToSetupPose()
    }, n.Slot.prototype = {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        _attachmentTime: 0,
        attachment: null,
        setAttachment: function(a) {
            this.attachment = a, this._attachmentTime = this.skeleton.time
        },
        setAttachmentTime: function(a) {
            this._attachmentTime = this.skeleton.time - a
        },
        getAttachmentTime: function() {
            return this.skeleton.time - this._attachmentTime
        },
        setToSetupPose: function() {
            var a = this.data;
            this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a;
            for (var b = this.skeleton.data.slots, c = 0, d = b.length; d > c; c++)
                if (b[c] == a) {
                    this.setAttachment(a.attachmentName ? this.skeleton.getAttachmentBySlotIndex(c, a.attachmentName) : null);
                    break
                }
        }
    }, n.Skin = function(a) {
        this.name = a, this.attachments = {}
    }, n.Skin.prototype = {
        addAttachment: function(a, b, c) {
            this.attachments[a + ":" + b] = c
        },
        getAttachment: function(a, b) {
            return this.attachments[a + ":" + b]
        },
        _attachAll: function(a, b) {
            for (var c in b.attachments) {
                var d = c.indexOf(":"),
                    e = parseInt(c.substring(0, d)),
                    f = c.substring(d + 1),
                    g = a.slots[e];
                if (g.attachment && g.attachment.name == f) {
                    var h = this.getAttachment(e, f);
                    h && g.setAttachment(h)
                }
            }
        }
    }, n.Animation = function(a, b, c) {
        this.name = a, this.timelines = b, this.duration = c
    }, n.Animation.prototype = {
        apply: function(a, b, c) {
            c && 0 != this.duration && (b %= this.duration);
            for (var d = this.timelines, e = 0, f = d.length; f > e; e++) d[e].apply(a, b, 1)
        },
        mix: function(a, b, c, d) {
            c && 0 != this.duration && (b %= this.duration);
            for (var e = this.timelines, f = 0, g = e.length; g > f; f++) e[f].apply(a, b, d)
        }
    }, n.binarySearch = function(a, b, c) {
        var d = 0,
            e = Math.floor(a.length / c) - 2;
        if (0 == e) return c;
        for (var f = e >>> 1;;) {
            if (a[(f + 1) * c] <= b ? d = f + 1 : e = f, d == e) return (d + 1) * c;
            f = d + e >>> 1
        }
    }, n.linearSearch = function(a, b, c) {
        for (var d = 0, e = a.length - c; e >= d; d += c)
            if (a[d] > b) return d;
        return -1
    }, n.Curves = function(a) {
        this.curves = [], this.curves.length = 6 * (a - 1)
    }, n.Curves.prototype = {
        setLinear: function(a) {
            this.curves[6 * a] = 0
        },
        setStepped: function(a) {
            this.curves[6 * a] = -1
        },
        setCurve: function(a, b, c, d, e) {
            var f = .1,
                g = f * f,
                h = g * f,
                i = 3 * f,
                j = 3 * g,
                k = 6 * g,
                l = 6 * h,
                m = 2 * -b + d,
                n = 2 * -c + e,
                o = 3 * (b - d) + 1,
                p = 3 * (c - e) + 1,
                q = 6 * a,
                r = this.curves;
            r[q] = b * i + m * j + o * h, r[q + 1] = c * i + n * j + p * h, r[q + 2] = m * k + o * l, r[q + 3] = n * k + p * l, r[q + 4] = o * l, r[q + 5] = p * l
        },
        getCurvePercent: function(a, b) {
            b = 0 > b ? 0 : b > 1 ? 1 : b;
            var c = 6 * a,
                d = this.curves,
                e = d[c];
            if (!e) return b;
            if (-1 == e) return 0;
            for (var f = d[c + 1], g = d[c + 2], h = d[c + 3], i = d[c + 4], j = d[c + 5], k = e, l = f, m = 8;;) {
                if (k >= b) {
                    var n = k - e,
                        o = l - f;
                    return o + (l - o) * (b - n) / (k - n)
                }
                if (0 == m) break;
                m--, e += g, f += h, g += i, h += j, k += e, l += f
            }
            return l + (1 - l) * (b - k) / (1 - k)
        }
    }, n.RotateTimeline = function(a) {
        this.curves = new n.Curves(a), this.frames = [], this.frames.length = 2 * a
    }, n.RotateTimeline.prototype = {
        boneIndex: 0,
        getFrameCount: function() {
            return this.frames.length / 2
        },
        setFrame: function(a, b, c) {
            a *= 2, this.frames[a] = b, this.frames[a + 1] = c
        },
        apply: function(a, b, c) {
            var d = this.frames;
            if (!(b < d[0])) {
                var e = a.bones[this.boneIndex];
                if (b >= d[d.length - 2]) {
                    for (var f = e.data.rotation + d[d.length - 1] - e.rotation; f > 180;) f -= 360;
                    for (; - 180 > f;) f += 360;
                    return e.rotation += f * c, void 0
                }
                var g = n.binarySearch(d, b, 2),
                    h = d[g - 1],
                    i = d[g],
                    j = 1 - (b - i) / (d[g - 2] - i);
                j = this.curves.getCurvePercent(g / 2 - 1, j);
                for (var f = d[g + 1] - h; f > 180;) f -= 360;
                for (; - 180 > f;) f += 360;
                for (f = e.data.rotation + (h + f * j) - e.rotation; f > 180;) f -= 360;
                for (; - 180 > f;) f += 360;
                e.rotation += f * c
            }
        }
    }, n.TranslateTimeline = function(a) {
        this.curves = new n.Curves(a), this.frames = [], this.frames.length = 3 * a
    }, n.TranslateTimeline.prototype = {
        boneIndex: 0,
        getFrameCount: function() {
            return this.frames.length / 3
        },
        setFrame: function(a, b, c, d) {
            a *= 3, this.frames[a] = b, this.frames[a + 1] = c, this.frames[a + 2] = d
        },
        apply: function(a, b, c) {
            var d = this.frames;
            if (!(b < d[0])) {
                var e = a.bones[this.boneIndex];
                if (b >= d[d.length - 3]) return e.x += (e.data.x + d[d.length - 2] - e.x) * c, e.y += (e.data.y + d[d.length - 1] - e.y) * c, void 0;
                var f = n.binarySearch(d, b, 3),
                    g = d[f - 2],
                    h = d[f - 1],
                    i = d[f],
                    j = 1 - (b - i) / (d[f + -3] - i);
                j = this.curves.getCurvePercent(f / 3 - 1, j), e.x += (e.data.x + g + (d[f + 1] - g) * j - e.x) * c, e.y += (e.data.y + h + (d[f + 2] - h) * j - e.y) * c
            }
        }
    }, n.ScaleTimeline = function(a) {
        this.curves = new n.Curves(a), this.frames = [], this.frames.length = 3 * a
    }, n.ScaleTimeline.prototype = {
        boneIndex: 0,
        getFrameCount: function() {
            return this.frames.length / 3
        },
        setFrame: function(a, b, c, d) {
            a *= 3, this.frames[a] = b, this.frames[a + 1] = c, this.frames[a + 2] = d
        },
        apply: function(a, b, c) {
            var d = this.frames;
            if (!(b < d[0])) {
                var e = a.bones[this.boneIndex];
                if (b >= d[d.length - 3]) return e.scaleX += (e.data.scaleX - 1 + d[d.length - 2] - e.scaleX) * c, e.scaleY += (e.data.scaleY - 1 + d[d.length - 1] - e.scaleY) * c, void 0;
                var f = n.binarySearch(d, b, 3),
                    g = d[f - 2],
                    h = d[f - 1],
                    i = d[f],
                    j = 1 - (b - i) / (d[f + -3] - i);
                j = this.curves.getCurvePercent(f / 3 - 1, j), e.scaleX += (e.data.scaleX - 1 + g + (d[f + 1] - g) * j - e.scaleX) * c, e.scaleY += (e.data.scaleY - 1 + h + (d[f + 2] - h) * j - e.scaleY) * c
            }
        }
    }, n.ColorTimeline = function(a) {
        this.curves = new n.Curves(a), this.frames = [], this.frames.length = 5 * a
    }, n.ColorTimeline.prototype = {
        slotIndex: 0,
        getFrameCount: function() {
            return this.frames.length / 2
        },
        setFrame: function(c, d) {
            c *= 5, this.frames[c] = d, this.frames[c + 1] = r, this.frames[c + 2] = g, this.frames[c + 3] = b, this.frames[c + 4] = a
        },
        apply: function(a, b, c) {
            var d = this.frames;
            if (!(b < d[0])) {
                var e = a.slots[this.slotIndex];
                if (b >= d[d.length - 5]) {
                    var f = d.length - 1;
                    return e.r = d[f - 3], e.g = d[f - 2], e.b = d[f - 1], e.a = d[f], void 0
                }
                var g = n.binarySearch(d, b, 5),
                    h = d[g - 4],
                    i = d[g - 3],
                    j = d[g - 2],
                    k = d[g - 1],
                    l = d[g],
                    m = 1 - (b - l) / (d[g - 5] - l);
                m = this.curves.getCurvePercent(g / 5 - 1, m);
                var o = h + (d[g + 1] - h) * m,
                    p = i + (d[g + 2] - i) * m,
                    q = j + (d[g + 3] - j) * m,
                    r = k + (d[g + 4] - k) * m;
                1 > c ? (e.r += (o - e.r) * c, e.g += (p - e.g) * c, e.b += (q - e.b) * c, e.a += (r - e.a) * c) : (e.r = o, e.g = p, e.b = q, e.a = r)
            }
        }
    }, n.AttachmentTimeline = function(a) {
        this.curves = new n.Curves(a), this.frames = [], this.frames.length = a, this.attachmentNames = [], this.attachmentNames.length = a
    }, n.AttachmentTimeline.prototype = {
        slotIndex: 0,
        getFrameCount: function() {
            return this.frames.length
        },
        setFrame: function(a, b, c) {
            this.frames[a] = b, this.attachmentNames[a] = c
        },
        apply: function(a, b) {
            var c = this.frames;
            if (!(b < c[0])) {
                var d;
                d = b >= c[c.length - 1] ? c.length - 1 : n.binarySearch(c, b, 1) - 1;
                var e = this.attachmentNames[d];
                a.slots[this.slotIndex].setAttachment(e ? a.getAttachmentBySlotIndex(this.slotIndex, e) : null)
            }
        }
    }, n.SkeletonData = function() {
        this.bones = [], this.slots = [], this.skins = [], this.animations = []
    }, n.SkeletonData.prototype = {
        defaultSkin: null,
        findBone: function(a) {
            for (var b = this.bones, c = 0, d = b.length; d > c; c++)
                if (b[c].name == a) return b[c];
            return null
        },
        findBoneIndex: function(a) {
            for (var b = this.bones, c = 0, d = b.length; d > c; c++)
                if (b[c].name == a) return c;
            return -1
        },
        findSlot: function(a) {
            for (var b = this.slots, c = 0, d = b.length; d > c; c++)
                if (b[c].name == a) return slot[c];
            return null
        },
        findSlotIndex: function(a) {
            for (var b = this.slots, c = 0, d = b.length; d > c; c++)
                if (b[c].name == a) return c;
            return -1
        },
        findSkin: function(a) {
            for (var b = this.skins, c = 0, d = b.length; d > c; c++)
                if (b[c].name == a) return b[c];
            return null
        },
        findAnimation: function(a) {
            for (var b = this.animations, c = 0, d = b.length; d > c; c++)
                if (b[c].name == a) return b[c];
            return null
        }
    }, n.Skeleton = function(a) {
        this.data = a, this.bones = [];
        for (var b = 0, c = a.bones.length; c > b; b++) {
            var d = a.bones[b],
                e = d.parent ? this.bones[a.bones.indexOf(d.parent)] : null;
            this.bones.push(new n.Bone(d, e))
        }
        this.slots = [], this.drawOrder = [];
        for (var b = 0, c = a.slots.length; c > b; b++) {
            var f = a.slots[b],
                g = this.bones[a.bones.indexOf(f.boneData)],
                h = new n.Slot(f, this, g);
            this.slots.push(h), this.drawOrder.push(h)
        }
    }, n.Skeleton.prototype = {
        x: 0,
        y: 0,
        skin: null,
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        time: 0,
        flipX: !1,
        flipY: !1,
        updateWorldTransform: function() {
            for (var a = this.flipX, b = this.flipY, c = this.bones, d = 0, e = c.length; e > d; d++) c[d].updateWorldTransform(a, b)
        },
        setToSetupPose: function() {
            this.setBonesToSetupPose(), this.setSlotsToSetupPose()
        },
        setBonesToSetupPose: function() {
            for (var a = this.bones, b = 0, c = a.length; c > b; b++) a[b].setToSetupPose()
        },
        setSlotsToSetupPose: function() {
            for (var a = this.slots, b = 0, c = a.length; c > b; b++) a[b].setToSetupPose(b)
        },
        getRootBone: function() {
            return 0 == this.bones.length ? null : this.bones[0]
        },
        findBone: function(a) {
            for (var b = this.bones, c = 0, d = b.length; d > c; c++)
                if (b[c].data.name == a) return b[c];
            return null
        },
        findBoneIndex: function(a) {
            for (var b = this.bones, c = 0, d = b.length; d > c; c++)
                if (b[c].data.name == a) return c;
            return -1
        },
        findSlot: function(a) {
            for (var b = this.slots, c = 0, d = b.length; d > c; c++)
                if (b[c].data.name == a) return b[c];
            return null
        },
        findSlotIndex: function(a) {
            for (var b = this.slots, c = 0, d = b.length; d > c; c++)
                if (b[c].data.name == a) return c;
            return -1
        },
        setSkinByName: function(a) {
            var b = this.data.findSkin(a);
            if (!b) throw "Skin not found: " + a;
            this.setSkin(b)
        },
        setSkin: function(a) {
            this.skin && a && a._attachAll(this, this.skin), this.skin = a
        },
        getAttachmentBySlotName: function(a, b) {
            return this.getAttachmentBySlotIndex(this.data.findSlotIndex(a), b)
        },
        getAttachmentBySlotIndex: function(a, b) {
            if (this.skin) {
                var c = this.skin.getAttachment(a, b);
                if (c) return c
            }
            return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(a, b) : null
        },
        setAttachment: function(a, b) {
            for (var c = this.slots, d = 0, e = c.size; e > d; d++) {
                var f = c[d];
                if (f.data.name == a) {
                    var g = null;
                    if (b && (g = this.getAttachment(d, b), null == g)) throw "Attachment not found: " + b + ", for slot: " + a;
                    return f.setAttachment(g), void 0
                }
            }
            throw "Slot not found: " + a
        },
        update: function(a) {
            time += a
        }
    }, n.AttachmentType = {
        region: 0
    }, n.RegionAttachment = function() {
        this.offset = [], this.offset.length = 8, this.uvs = [], this.uvs.length = 8
    }, n.RegionAttachment.prototype = {
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        width: 0,
        height: 0,
        rendererObject: null,
        regionOffsetX: 0,
        regionOffsetY: 0,
        regionWidth: 0,
        regionHeight: 0,
        regionOriginalWidth: 0,
        regionOriginalHeight: 0,
        setUVs: function(a, b, c, d, e) {
            var f = this.uvs;
            e ? (f[2] = a, f[3] = d, f[4] = a, f[5] = b, f[6] = c, f[7] = b, f[0] = c, f[1] = d) : (f[0] = a, f[1] = d, f[2] = a, f[3] = b, f[4] = c, f[5] = b, f[6] = c, f[7] = d)
        },
        updateOffset: function() {
            var a = this.width / this.regionOriginalWidth * this.scaleX,
                b = this.height / this.regionOriginalHeight * this.scaleY,
                c = -this.width / 2 * this.scaleX + this.regionOffsetX * a,
                d = -this.height / 2 * this.scaleY + this.regionOffsetY * b,
                e = c + this.regionWidth * a,
                f = d + this.regionHeight * b,
                g = this.rotation * Math.PI / 180,
                h = Math.cos(g),
                i = Math.sin(g),
                j = c * h + this.x,
                k = c * i,
                l = d * h + this.y,
                m = d * i,
                n = e * h + this.x,
                o = e * i,
                p = f * h + this.y,
                q = f * i,
                r = this.offset;
            r[0] = j - m, r[1] = l + k, r[2] = j - q, r[3] = p + k, r[4] = n - q, r[5] = p + o, r[6] = n - m, r[7] = l + o
        },
        computeVertices: function(a, b, c, d) {
            a += c.worldX, b += c.worldY;
            var e = c.m00,
                f = c.m01,
                g = c.m10,
                h = c.m11,
                i = this.offset;
            d[0] = i[0] * e + i[1] * f + a, d[1] = i[0] * g + i[1] * h + b, d[2] = i[2] * e + i[3] * f + a, d[3] = i[2] * g + i[3] * h + b, d[4] = i[4] * e + i[5] * f + a, d[5] = i[4] * g + i[5] * h + b, d[6] = i[6] * e + i[7] * f + a, d[7] = i[6] * g + i[7] * h + b
        }
    }, n.AnimationStateData = function(a) {
        this.skeletonData = a, this.animationToMixTime = {}
    }, n.AnimationStateData.prototype = {
        defaultMix: 0,
        setMixByName: function(a, b, c) {
            var d = this.skeletonData.findAnimation(a);
            if (!d) throw "Animation not found: " + a;
            var e = this.skeletonData.findAnimation(b);
            if (!e) throw "Animation not found: " + b;
            this.setMix(d, e, c)
        },
        setMix: function(a, b, c) {
            this.animationToMixTime[a.name + ":" + b.name] = c
        },
        getMix: function(a, b) {
            var c = this.animationToMixTime[a.name + ":" + b.name];
            return c ? c : this.defaultMix
        }
    }, n.AnimationState = function(a) {
        this.data = a, this.queue = []
    }, n.AnimationState.prototype = {
        current: null,
        previous: null,
        currentTime: 0,
        previousTime: 0,
        currentLoop: !1,
        previousLoop: !1,
        mixTime: 0,
        mixDuration: 0,
        update: function(a) {
            if (this.currentTime += a, this.previousTime += a, this.mixTime += a, this.queue.length > 0) {
                var b = this.queue[0];
                this.currentTime >= b.delay && (this._setAnimation(b.animation, b.loop), this.queue.shift())
            }
        },
        apply: function(a) {
            if (this.current)
                if (this.previous) {
                    this.previous.apply(a, this.previousTime, this.previousLoop);
                    var b = this.mixTime / this.mixDuration;
                    b >= 1 && (b = 1, this.previous = null), this.current.mix(a, this.currentTime, this.currentLoop, b)
                } else this.current.apply(a, this.currentTime, this.currentLoop)
        },
        clearAnimation: function() {
            this.previous = null, this.current = null, this.queue.length = 0
        },
        _setAnimation: function(a, b) {
            this.previous = null, a && this.current && (this.mixDuration = this.data.getMix(this.current, a), this.mixDuration > 0 && (this.mixTime = 0, this.previous = this.current, this.previousTime = this.currentTime, this.previousLoop = this.currentLoop)), this.current = a, this.currentLoop = b, this.currentTime = 0
        },
        setAnimationByName: function(a, b) {
            var c = this.data.skeletonData.findAnimation(a);
            if (!c) throw "Animation not found: " + a;
            this.setAnimation(c, b)
        },
        setAnimation: function(a, b) {
            this.queue.length = 0, this._setAnimation(a, b)
        },
        addAnimationByName: function(a, b, c) {
            var d = this.data.skeletonData.findAnimation(a);
            if (!d) throw "Animation not found: " + a;
            this.addAnimation(d, b, c)
        },
        addAnimation: function(a, b, c) {
            var d = {};
            if (d.animation = a, d.loop = b, !c || 0 >= c) {
                var e = 0 == this.queue.length ? this.current : this.queue[this.queue.length - 1].animation;
                c = null != e ? e.duration - this.data.getMix(e, a) + (c || 0) : 0
            }
            d.delay = c, this.queue.push(d)
        },
        isComplete: function() {
            return !this.current || this.currentTime >= this.current.duration
        }
    }, n.SkeletonJson = function(a) {
        this.attachmentLoader = a
    }, n.SkeletonJson.prototype = {
        scale: 1,
        readSkeletonData: function(a) {
            for (var b = new n.SkeletonData, c = a.bones, d = 0, e = c.length; e > d; d++) {
                var f = c[d],
                    g = null;
                if (f.parent && (g = b.findBone(f.parent), !g)) throw "Parent bone not found: " + f.parent;
                var h = new n.BoneData(f.name, g);
                h.length = (f.length || 0) * this.scale, h.x = (f.x || 0) * this.scale, h.y = (f.y || 0) * this.scale, h.rotation = f.rotation || 0, h.scaleX = f.scaleX || 1, h.scaleY = f.scaleY || 1, b.bones.push(h)
            }
            for (var i = a.slots, d = 0, e = i.length; e > d; d++) {
                var j = i[d],
                    h = b.findBone(j.bone);
                if (!h) throw "Slot bone not found: " + j.bone;
                var k = new n.SlotData(j.name, h),
                    l = j.color;
                l && (k.r = n.SkeletonJson.toColor(l, 0), k.g = n.SkeletonJson.toColor(l, 1), k.b = n.SkeletonJson.toColor(l, 2), k.a = n.SkeletonJson.toColor(l, 3)), k.attachmentName = j.attachment, b.slots.push(k)
            }
            var m = a.skins;
            for (var o in m)
                if (m.hasOwnProperty(o)) {
                    var p = m[o],
                        q = new n.Skin(o);
                    for (var r in p)
                        if (p.hasOwnProperty(r)) {
                            var s = b.findSlotIndex(r),
                                t = p[r];
                            for (var u in t)
                                if (t.hasOwnProperty(u)) {
                                    var v = this.readAttachment(q, u, t[u]);
                                    null != v && q.addAttachment(s, u, v)
                                }
                        } b.skins.push(q), "default" == q.name && (b.defaultSkin = q)
                } var w = a.animations;
            for (var x in w) w.hasOwnProperty(x) && this.readAnimation(x, w[x], b);
            return b
        },
        readAttachment: function(a, b, c) {
            b = c.name || b;
            var d = n.AttachmentType[c.type || "region"];
            if (d == n.AttachmentType.region) {
                var e = new n.RegionAttachment;
                return e.x = (c.x || 0) * this.scale, e.y = (c.y || 0) * this.scale, e.scaleX = c.scaleX || 1, e.scaleY = c.scaleY || 1, e.rotation = c.rotation || 0, e.width = (c.width || 32) * this.scale, e.height = (c.height || 32) * this.scale, e.updateOffset(), e.rendererObject = {}, e.rendererObject.name = b, e.rendererObject.scale = {}, e.rendererObject.scale.x = e.scaleX, e.rendererObject.scale.y = e.scaleY, e.rendererObject.rotation = -e.rotation * Math.PI / 180, e
            }
            throw "Unknown attachment type: " + d
        },
        readAnimation: function(a, b, c) {
            var d = [],
                e = 0,
                f = b.bones;
            for (var g in f)
                if (f.hasOwnProperty(g)) {
                    var h = c.findBoneIndex(g);
                    if (-1 == h) throw "Bone not found: " + g;
                    var i = f[g];
                    for (var j in i)
                        if (i.hasOwnProperty(j)) {
                            var k = i[j];
                            if ("rotate" == j) {
                                var l = new n.RotateTimeline(k.length);
                                l.boneIndex = h;
                                for (var m = 0, o = 0, p = k.length; p > o; o++) {
                                    var q = k[o];
                                    l.setFrame(m, q.time, q.angle), n.SkeletonJson.readCurve(l, m, q), m++
                                }
                                d.push(l), e = Math.max(e, l.frames[2 * l.getFrameCount() - 2])
                            } else {
                                if ("translate" != j && "scale" != j) throw "Invalid timeline type for a bone: " + j + " (" + g + ")";
                                var l, r = 1;
                                "scale" == j ? l = new n.ScaleTimeline(k.length) : (l = new n.TranslateTimeline(k.length), r = this.scale), l.boneIndex = h;
                                for (var m = 0, o = 0, p = k.length; p > o; o++) {
                                    var q = k[o],
                                        s = (q.x || 0) * r,
                                        t = (q.y || 0) * r;
                                    l.setFrame(m, q.time, s, t), n.SkeletonJson.readCurve(l, m, q), m++
                                }
                                d.push(l), e = Math.max(e, l.frames[3 * l.getFrameCount() - 3])
                            }
                        }
                } var u = b.slots;
            for (var v in u)
                if (u.hasOwnProperty(v)) {
                    var w = u[v],
                        x = c.findSlotIndex(v);
                    for (var j in w)
                        if (w.hasOwnProperty(j)) {
                            var k = w[j];
                            if ("color" == j) {
                                var l = new n.ColorTimeline(k.length);
                                l.slotIndex = x;
                                for (var m = 0, o = 0, p = k.length; p > o; o++) {
                                    var q = k[o],
                                        y = q.color,
                                        z = n.SkeletonJson.toColor(y, 0),
                                        A = n.SkeletonJson.toColor(y, 1),
                                        B = n.SkeletonJson.toColor(y, 2),
                                        C = n.SkeletonJson.toColor(y, 3);
                                    l.setFrame(m, q.time, z, A, B, C), n.SkeletonJson.readCurve(l, m, q), m++
                                }
                                d.push(l), e = Math.max(e, l.frames[5 * l.getFrameCount() - 5])
                            } else {
                                if ("attachment" != j) throw "Invalid timeline type for a slot: " + j + " (" + v + ")";
                                var l = new n.AttachmentTimeline(k.length);
                                l.slotIndex = x;
                                for (var m = 0, o = 0, p = k.length; p > o; o++) {
                                    var q = k[o];
                                    l.setFrame(m++, q.time, q.name)
                                }
                                d.push(l), e = Math.max(e, l.frames[l.getFrameCount() - 1])
                            }
                        }
                } c.animations.push(new n.Animation(a, d, e))
        }
    }, n.SkeletonJson.readCurve = function(a, b, c) {
        var d = c.curve;
        d && ("stepped" == d ? a.curves.setStepped(b) : d instanceof Array && a.curves.setCurve(b, d[0], d[1], d[2], d[3]))
    }, n.SkeletonJson.toColor = function(a, b) {
        if (8 != a.length) throw "Color hexidecimal length must be 8, recieved: " + a;
        return parseInt(a.substring(2 * b, 2), 16) / 255
    }, n.Atlas = function(a, b) {
        this.textureLoader = b, this.pages = [], this.regions = [];
        var c = new n.AtlasReader(a),
            d = [];
        d.length = 4;
        for (var e = null;;) {
            var f = c.readLine();
            if (null == f) break;
            if (f = c.trim(f), 0 == f.length) e = null;
            else if (e) {
                var g = new n.AtlasRegion;
                g.name = f, g.page = e, g.rotate = "true" == c.readValue(), c.readTuple(d);
                var h = parseInt(d[0]),
                    i = parseInt(d[1]);
                c.readTuple(d);
                var j = parseInt(d[0]),
                    k = parseInt(d[1]);
                g.u = h / e.width, g.v = i / e.height, g.rotate ? (g.u2 = (h + k) / e.width, g.v2 = (i + j) / e.height) : (g.u2 = (h + j) / e.width, g.v2 = (i + k) / e.height), g.x = h, g.y = i, g.width = Math.abs(j), g.height = Math.abs(k), 4 == c.readTuple(d) && (g.splits = [parseInt(d[0]), parseInt(d[1]), parseInt(d[2]), parseInt(d[3])], 4 == c.readTuple(d) && (g.pads = [parseInt(d[0]), parseInt(d[1]), parseInt(d[2]), parseInt(d[3])], c.readTuple(d))), g.originalWidth = parseInt(d[0]), g.originalHeight = parseInt(d[1]), c.readTuple(d), g.offsetX = parseInt(d[0]), g.offsetY = parseInt(d[1]), g.index = parseInt(c.readValue()), this.regions.push(g)
            } else {
                e = new n.AtlasPage, e.name = f, e.format = n.Atlas.Format[c.readValue()], c.readTuple(d), e.minFilter = n.Atlas.TextureFilter[d[0]], e.magFilter = n.Atlas.TextureFilter[d[1]];
                var l = c.readValue();
                e.uWrap = n.Atlas.TextureWrap.clampToEdge, e.vWrap = n.Atlas.TextureWrap.clampToEdge, "x" == l ? e.uWrap = n.Atlas.TextureWrap.repeat : "y" == l ? e.vWrap = n.Atlas.TextureWrap.repeat : "xy" == l && (e.uWrap = e.vWrap = n.Atlas.TextureWrap.repeat), b.load(e, f), this.pages.push(e)
            }
        }
    }, n.Atlas.prototype = {
        findRegion: function(a) {
            for (var b = this.regions, c = 0, d = b.length; d > c; c++)
                if (b[c].name == a) return b[c];
            return null
        },
        dispose: function() {
            for (var a = this.pages, b = 0, c = a.length; c > b; b++) this.textureLoader.unload(a[b].rendererObject)
        },
        updateUVs: function(a) {
            for (var b = this.regions, c = 0, d = b.length; d > c; c++) {
                var e = b[c];
                e.page == a && (e.u = e.x / a.width, e.v = e.y / a.height, e.rotate ? (e.u2 = (e.x + e.height) / a.width, e.v2 = (e.y + e.width) / a.height) : (e.u2 = (e.x + e.width) / a.width, e.v2 = (e.y + e.height) / a.height))
            }
        }
    }, n.Atlas.Format = {
        alpha: 0,
        intensity: 1,
        luminanceAlpha: 2,
        rgb565: 3,
        rgba4444: 4,
        rgb888: 5,
        rgba8888: 6
    }, n.Atlas.TextureFilter = {
        nearest: 0,
        linear: 1,
        mipMap: 2,
        mipMapNearestNearest: 3,
        mipMapLinearNearest: 4,
        mipMapNearestLinear: 5,
        mipMapLinearLinear: 6
    }, n.Atlas.TextureWrap = {
        mirroredRepeat: 0,
        clampToEdge: 1,
        repeat: 2
    }, n.AtlasPage = function() {}, n.AtlasPage.prototype = {
        name: null,
        format: null,
        minFilter: null,
        magFilter: null,
        uWrap: null,
        vWrap: null,
        rendererObject: null,
        width: 0,
        height: 0
    }, n.AtlasRegion = function() {}, n.AtlasRegion.prototype = {
        page: null,
        name: null,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        u: 0,
        v: 0,
        u2: 0,
        v2: 0,
        offsetX: 0,
        offsetY: 0,
        originalWidth: 0,
        originalHeight: 0,
        index: 0,
        rotate: !1,
        splits: null,
        pads: null
    }, n.AtlasReader = function(a) {
        this.lines = a.split(/\r\n|\r|\n/)
    }, n.AtlasReader.prototype = {
        index: 0,
        trim: function(a) {
            return a.replace(/^\s+|\s+$/g, "")
        },
        readLine: function() {
            return this.index >= this.lines.length ? null : this.lines[this.index++]
        },
        readValue: function() {
            var a = this.readLine(),
                b = a.indexOf(":");
            if (-1 == b) throw "Invalid line: " + a;
            return this.trim(a.substring(b + 1))
        },
        readTuple: function(a) {
            var b = this.readLine(),
                c = b.indexOf(":");
            if (-1 == c) throw "Invalid line: " + b;
            for (var d = 0, e = c + 1; 3 > d; d++) {
                var f = b.indexOf(",", e);
                if (-1 == f) {
                    if (0 == d) throw "Invalid line: " + b;
                    break
                }
                a[d] = this.trim(b.substr(e, f - e)), e = f + 1
            }
            return a[d] = this.trim(b.substring(e)), d + 1
        }
    }, n.AtlasAttachmentLoader = function(a) {
        this.atlas = a
    }, n.AtlasAttachmentLoader.prototype = {
        newAttachment: function(a, b, c) {
            switch (b) {
                case n.AttachmentType.region:
                    var d = this.atlas.findRegion(c);
                    if (!d) throw "Region not found in atlas: " + c + " (" + b + ")";
                    var e = new n.RegionAttachment(c);
                    return e.rendererObject = d, e.setUVs(d.u, d.v, d.u2, d.v2, d.rotate), e.regionOffsetX = d.offsetX, e.regionOffsetY = d.offsetY, e.regionWidth = d.width, e.regionHeight = d.height, e.regionOriginalWidth = d.originalWidth, e.regionOriginalHeight = d.originalHeight, e
            }
            throw "Unknown attachment type: " + b
        }
    }, f.AnimCache = {}, n.Bone.yDown = !0, f.CustomRenderable = function() {
        f.DisplayObject.call(this), this.renderable = !0
    }, f.CustomRenderable.prototype = Object.create(f.DisplayObject.prototype), f.CustomRenderable.prototype.constructor = f.CustomRenderable, f.CustomRenderable.prototype.renderCanvas = function() {}, f.CustomRenderable.prototype.initWebGL = function() {}, f.CustomRenderable.prototype.renderWebGL = function() {}, f.BaseTextureCache = {}, f.texturesToUpdate = [], f.texturesToDestroy = [], f.BaseTexture = function(a) {
        if (f.EventTarget.call(this), this.width = 100, this.height = 100, this.hasLoaded = !1, this.source = a, a) {
            if (this.source instanceof Image || this.source instanceof HTMLImageElement)
                if (this.source.complete) this.hasLoaded = !0, this.width = this.source.width, this.height = this.source.height, f.texturesToUpdate.push(this);
                else {
                    var b = this;
                    this.source.onload = function() {
                        b.hasLoaded = !0, b.width = b.source.width, b.height = b.source.height, f.texturesToUpdate.push(b), b.dispatchEvent({
                            type: "loaded",
                            content: b
                        })
                    }
                }
            else this.hasLoaded = !0, this.width = this.source.width, this.height = this.source.height, f.texturesToUpdate.push(this);
            this.imageUrl = null, this._powerOf2 = !1
        }
    }, f.BaseTexture.prototype.constructor = f.BaseTexture, f.BaseTexture.prototype.destroy = function() {
        this.source instanceof Image && (this.imageUrl in f.BaseTextureCache && delete f.BaseTextureCache[this.imageUrl], this.imageUrl = null, this.source.src = null), this.source = null, f.texturesToDestroy.push(this)
    }, f.BaseTexture.prototype.updateSourceImage = function(a) {
        this.hasLoaded = !1, this.source.src = null, this.source.src = a
    }, f.BaseTexture.fromImage = function(a, b) {
        var c = f.BaseTextureCache[a];
        if (!c) {
            var d = new Image;
            b && (d.crossOrigin = ""), d.src = a, c = new f.BaseTexture(d), c.imageUrl = a, f.BaseTextureCache[a] = c
        }
        return c
    }, f.TextureCache = {}, f.FrameCache = {}, f.Texture = function(a, b) {
        if (f.EventTarget.call(this), b || (this.noFrame = !0, b = new f.Rectangle(0, 0, 1, 1)), a instanceof f.Texture && (a = a.baseTexture), this.baseTexture = a, this.frame = b, this.trim = new f.Point, this.scope = this, a.hasLoaded) this.noFrame && (b = new f.Rectangle(0, 0, a.width, a.height)), this.setFrame(b);
        else {
            var c = this;
            a.addEventListener("loaded", function() {
                c.onBaseTextureLoaded()
            })
        }
    }, f.Texture.prototype.constructor = f.Texture, f.Texture.prototype.onBaseTextureLoaded = function() {
        var a = this.baseTexture;
        a.removeEventListener("loaded", this.onLoaded), this.noFrame && (this.frame = new f.Rectangle(0, 0, a.width, a.height)), this.noFrame = !1, this.width = this.frame.width, this.height = this.frame.height, this.scope.dispatchEvent({
            type: "update",
            content: this
        })
    }, f.Texture.prototype.destroy = function(a) {
        a && this.baseTexture.destroy()
    }, f.Texture.prototype.setFrame = function(a) {
        if (this.frame = a, this.width = a.width, this.height = a.height, a.x + a.width > this.baseTexture.width || a.y + a.height > this.baseTexture.height) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
        this.updateFrame = !0, f.Texture.frameUpdates.push(this)
    }, f.Texture.fromImage = function(a, b) {
        var c = f.TextureCache[a];
        return c || (c = new f.Texture(f.BaseTexture.fromImage(a, b)), f.TextureCache[a] = c), c
    }, f.Texture.fromFrame = function(a) {
        var b = f.TextureCache[a];
        if (!b) throw new Error("The frameId '" + a + "' does not exist in the texture cache " + this);
        return b
    }, f.Texture.fromCanvas = function(a) {
        var b = new f.BaseTexture(a);
        return new f.Texture(b)
    }, f.Texture.addTextureToCache = function(a, b) {
        f.TextureCache[b] = a
    }, f.Texture.removeTextureFromCache = function(a) {
        var b = f.TextureCache[a];
        return f.TextureCache[a] = null, b
    }, f.Texture.frameUpdates = [], f.RenderTexture = function(a, b) {
        f.EventTarget.call(this), this.width = a || 100, this.height = b || 100, this.indetityMatrix = f.mat3.create(), this.frame = new f.Rectangle(0, 0, this.width, this.height), f.gl ? this.initWebGL() : this.initCanvas()
    }, f.RenderTexture.prototype = Object.create(f.Texture.prototype), f.RenderTexture.prototype.constructor = f.RenderTexture, f.RenderTexture.prototype.initWebGL = function() {
        var a = f.gl;
        this.glFramebuffer = a.createFramebuffer(), a.bindFramebuffer(a.FRAMEBUFFER, this.glFramebuffer), this.glFramebuffer.width = this.width, this.glFramebuffer.height = this.height, this.baseTexture = new f.BaseTexture, this.baseTexture.width = this.width, this.baseTexture.height = this.height, this.baseTexture._glTexture = a.createTexture(), a.bindTexture(a.TEXTURE_2D, this.baseTexture._glTexture), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, this.width, this.height, 0, a.RGBA, a.UNSIGNED_BYTE, null), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), this.baseTexture.isRender = !0, a.bindFramebuffer(a.FRAMEBUFFER, this.glFramebuffer), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.baseTexture._glTexture, 0), this.projection = new f.Point(this.width / 2, -this.height / 2), this.render = this.renderWebGL
    }, f.RenderTexture.prototype.resize = function(a, b) {
        if (this.width = a, this.height = b, f.gl) {
            this.projection.x = this.width / 2, this.projection.y = -this.height / 2;
            var c = f.gl;
            c.bindTexture(c.TEXTURE_2D, this.baseTexture._glTexture), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, this.width, this.height, 0, c.RGBA, c.UNSIGNED_BYTE, null)
        } else this.frame.width = this.width, this.frame.height = this.height, this.renderer.resize(this.width, this.height)
    }, f.RenderTexture.prototype.initCanvas = function() {
        this.renderer = new f.CanvasRenderer(this.width, this.height, null, 0), this.baseTexture = new f.BaseTexture(this.renderer.view), this.frame = new f.Rectangle(0, 0, this.width, this.height), this.render = this.renderCanvas
    }, f.RenderTexture.prototype.renderWebGL = function(a, b, c) {
        var d = f.gl;
        d.colorMask(!0, !0, !0, !0), d.viewport(0, 0, this.width, this.height), d.bindFramebuffer(d.FRAMEBUFFER, this.glFramebuffer), c && (d.clearColor(0, 0, 0, 0), d.clear(d.COLOR_BUFFER_BIT));
        var e = a.children,
            g = a.worldTransform;
        a.worldTransform = f.mat3.create(), a.worldTransform[4] = -1, a.worldTransform[5] = -2 * this.projection.y, b && (a.worldTransform[2] = b.x, a.worldTransform[5] -= b.y), f.visibleCount++, a.vcount = f.visibleCount;
        for (var h = 0, i = e.length; i > h; h++) e[h].updateTransform();
        var j = a.__renderGroup;
        j ? a == j.root ? j.render(this.projection, this.glFramebuffer) : j.renderSpecific(a, this.projection, this.glFramebuffer) : (this.renderGroup || (this.renderGroup = new f.WebGLRenderGroup(d)), this.renderGroup.setRenderable(a), this.renderGroup.render(this.projection, this.glFramebuffer)), a.worldTransform = g
    }, f.RenderTexture.prototype.renderCanvas = function(a, b, c) {
        var d = a.children;
        a.worldTransform = f.mat3.create(), b && (a.worldTransform[2] = b.x, a.worldTransform[5] = b.y);
        for (var e = 0, g = d.length; g > e; e++) d[e].updateTransform();
        c && this.renderer.context.clearRect(0, 0, this.width, this.height), this.renderer.renderDisplayObject(a), this.renderer.context.setTransform(1, 0, 0, 1, 0, 0)
    }, f.AssetLoader = function(a, b) {
        f.EventTarget.call(this), this.assetURLs = a, this.crossorigin = b, this.loadersByType = {
            jpg: f.ImageLoader,
            jpeg: f.ImageLoader,
            png: f.ImageLoader,
            gif: f.ImageLoader,
            json: f.JsonLoader,
            anim: f.SpineLoader,
            xml: f.BitmapFontLoader,
            fnt: f.BitmapFontLoader
        }
    }, f.AssetLoader.prototype.constructor = f.AssetLoader, f.AssetLoader.prototype._getDataType = function(a) {
        var b = "data:",
            c = a.slice(0, b.length).toLowerCase();
        if (c == b) {
            var d = a.slice(b.length),
                e = d.indexOf(",");
            if (-1 === e) return null;
            var f = d.slice(0, e).split(";")[0];
            return f && "text/plain" != f.toLowerCase() ? f.split("/").pop().toLowerCase() : "txt"
        }
        return null
    }, f.AssetLoader.prototype.load = function() {
        var a = this;
        this.loadCount = this.assetURLs.length;
        for (var b = 0; b < this.assetURLs.length; b++) {
            var c = this.assetURLs[b],
                d = this._getDataType(c);
            d || (d = c.split("?").shift().split(".").pop().toLowerCase());
            var e = this.loadersByType[d];
            if (!e) throw new Error(d + " is an unsupported file type");
            var f = new e(c, this.crossorigin);
            f.addEventListener("loaded", function() {
                a.onAssetLoaded()
            }), f.load()
        }
    }, f.AssetLoader.prototype.onAssetLoaded = function() {
        this.loadCount--, this.dispatchEvent({
            type: "onProgress",
            content: this
        }), this.onProgress && this.onProgress(), 0 == this.loadCount && (this.dispatchEvent({
            type: "onComplete",
            content: this
        }), this.onComplete && this.onComplete())
    }, f.JsonLoader = function(a, b) {
        f.EventTarget.call(this), this.url = a, this.crossorigin = b, this.baseUrl = a.replace(/[^\/]*$/, ""), this.loaded = !1
    }, f.JsonLoader.prototype.constructor = f.JsonLoader, f.JsonLoader.prototype.load = function() {
        this.ajaxRequest = new k;
        var a = this;
        this.ajaxRequest.onreadystatechange = function() {
            a.onJSONLoaded()
        }, this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/json"), this.ajaxRequest.send(null)
    }, f.JsonLoader.prototype.onJSONLoaded = function() {
        if (4 == this.ajaxRequest.readyState)
            if (200 == this.ajaxRequest.status || -1 == window.location.protocol.indexOf("http"))
                if (this.json = JSON.parse(this.ajaxRequest.responseText), this.json.frames) {
                    var a = this,
                        b = this.baseUrl + this.json.meta.image,
                        c = new f.ImageLoader(b, this.crossorigin),
                        d = this.json.frames;
                    this.texture = c.texture.baseTexture, c.addEventListener("loaded", function() {
                        a.onLoaded()
                    });
                    for (var e in d) {
                        var g = d[e].frame;
                        g && (f.TextureCache[e] = new f.Texture(this.texture, {
                            x: g.x,
                            y: g.y,
                            width: g.w,
                            height: g.h
                        }), d[e].trimmed && (f.TextureCache[e].realSize = d[e].spriteSourceSize, f.TextureCache[e].trim.x = 0))
                    }
                    c.load()
                } else if (this.json.bones) {
            var h = new n.SkeletonJson,
                i = h.readSkeletonData(this.json);
            f.AnimCache[this.url] = i, this.onLoaded()
        } else this.onLoaded();
        else this.onError()
    }, f.JsonLoader.prototype.onLoaded = function() {
        this.loaded = !0, this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, f.JsonLoader.prototype.onError = function() {
        this.dispatchEvent({
            type: "error",
            content: this
        })
    }, f.SpriteSheetLoader = function(a, b) {
        f.EventTarget.call(this), this.url = a, this.crossorigin = b, this.baseUrl = a.replace(/[^\/]*$/, ""), this.texture = null, this.frames = {}
    }, f.SpriteSheetLoader.prototype.constructor = f.SpriteSheetLoader, f.SpriteSheetLoader.prototype.load = function() {
        var a = this,
            b = new f.JsonLoader(this.url, this.crossorigin);
        b.addEventListener("loaded", function(b) {
            a.json = b.content.json, a.onJSONLoaded()
        }), b.load()
    }, f.SpriteSheetLoader.prototype.onJSONLoaded = function() {
        var a = this,
            b = this.baseUrl + this.json.meta.image,
            c = new f.ImageLoader(b, this.crossorigin),
            d = this.json.frames;
        this.texture = c.texture.baseTexture, c.addEventListener("loaded", function() {
            a.onLoaded()
        });
        for (var e in d) {
            var g = d[e].frame;
            g && (f.TextureCache[e] = new f.Texture(this.texture, {
                x: g.x,
                y: g.y,
                width: g.w,
                height: g.h
            }), d[e].trimmed && (f.TextureCache[e].realSize = d[e].spriteSourceSize, f.TextureCache[e].trim.x = 0))
        }
        c.load()
    }, f.SpriteSheetLoader.prototype.onLoaded = function() {
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, f.ImageLoader = function(a, b) {
        f.EventTarget.call(this), this.texture = f.Texture.fromImage(a, b), this.frames = []
    }, f.ImageLoader.prototype.constructor = f.ImageLoader, f.ImageLoader.prototype.load = function() {
        if (this.texture.baseTexture.hasLoaded) this.onLoaded();
        else {
            var a = this;
            this.texture.baseTexture.addEventListener("loaded", function() {
                a.onLoaded()
            })
        }
    }, f.ImageLoader.prototype.onLoaded = function() {
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, f.ImageLoader.prototype.loadFramedSpriteSheet = function(a, b, c) {
        this.frames = [];
        for (var d = Math.floor(this.texture.width / a), e = Math.floor(this.texture.height / b), g = 0, h = 0; e > h; h++)
            for (var i = 0; d > i; i++, g++) {
                var j = new f.Texture(this.texture, {
                    x: i * a,
                    y: h * b,
                    width: a,
                    height: b
                });
                this.frames.push(j), c && (f.TextureCache[c + "-" + g] = j)
            }
        if (this.texture.baseTexture.hasLoaded) this.onLoaded();
        else {
            var k = this;
            this.texture.baseTexture.addEventListener("loaded", function() {
                k.onLoaded()
            })
        }
    }, f.BitmapFontLoader = function(a, b) {
        f.EventTarget.call(this), this.url = a, this.crossorigin = b, this.baseUrl = a.replace(/[^\/]*$/, ""), this.texture = null
    }, f.BitmapFontLoader.prototype.constructor = f.BitmapFontLoader, f.BitmapFontLoader.prototype.load = function() {
        this.ajaxRequest = new XMLHttpRequest;
        var a = this;
        this.ajaxRequest.onreadystatechange = function() {
            a.onXMLLoaded()
        }, this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/xml"), this.ajaxRequest.send(null)
    }, f.BitmapFontLoader.prototype.onXMLLoaded = function() {
        if (4 == this.ajaxRequest.readyState && (200 == this.ajaxRequest.status || -1 == window.location.protocol.indexOf("http"))) {
            var a = this.baseUrl + this.ajaxRequest.responseXML.getElementsByTagName("page")[0].attributes.getNamedItem("file").nodeValue,
                b = new f.ImageLoader(a, this.crossorigin);
            this.texture = b.texture.baseTexture;
            var c = {},
                d = this.ajaxRequest.responseXML.getElementsByTagName("info")[0],
                e = this.ajaxRequest.responseXML.getElementsByTagName("common")[0];
            c.font = d.attributes.getNamedItem("face").nodeValue, c.size = parseInt(d.attributes.getNamedItem("size").nodeValue, 10), c.lineHeight = parseInt(e.attributes.getNamedItem("lineHeight").nodeValue, 10), c.chars = {};
            for (var g = this.ajaxRequest.responseXML.getElementsByTagName("char"), h = 0; h < g.length; h++) {
                var i = parseInt(g[h].attributes.getNamedItem("id").nodeValue, 10),
                    j = new f.Rectangle(parseInt(g[h].attributes.getNamedItem("x").nodeValue, 10), parseInt(g[h].attributes.getNamedItem("y").nodeValue, 10), parseInt(g[h].attributes.getNamedItem("width").nodeValue, 10), parseInt(g[h].attributes.getNamedItem("height").nodeValue, 10));
                c.chars[i] = {
                    xOffset: parseInt(g[h].attributes.getNamedItem("xoffset").nodeValue, 10),
                    yOffset: parseInt(g[h].attributes.getNamedItem("yoffset").nodeValue, 10),
                    xAdvance: parseInt(g[h].attributes.getNamedItem("xadvance").nodeValue, 10),
                    kerning: {},
                    texture: f.TextureCache[i] = new f.Texture(this.texture, j)
                }
            }
            var k = this.ajaxRequest.responseXML.getElementsByTagName("kerning");
            for (h = 0; h < k.length; h++) {
                var l = parseInt(k[h].attributes.getNamedItem("first").nodeValue, 10),
                    m = parseInt(k[h].attributes.getNamedItem("second").nodeValue, 10),
                    n = parseInt(k[h].attributes.getNamedItem("amount").nodeValue, 10);
                c.chars[m].kerning[l] = n
            }
            f.BitmapText.fonts[c.font] = c;
            var o = this;
            b.addEventListener("loaded", function() {
                o.onLoaded()
            }), b.load()
        }
    }, f.BitmapFontLoader.prototype.onLoaded = function() {
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, f.SpineLoader = function(a, b) {
        f.EventTarget.call(this), this.url = a, this.crossorigin = b, this.loaded = !1
    }, f.SpineLoader.prototype.constructor = f.SpineLoader, f.SpineLoader.prototype.load = function() {
        var a = this,
            b = new f.JsonLoader(this.url, this.crossorigin);
        b.addEventListener("loaded", function(b) {
            a.json = b.content.json, a.onJSONLoaded()
        }), b.load()
    }, f.SpineLoader.prototype.onJSONLoaded = function() {
        var a = new n.SkeletonJson,
            b = a.readSkeletonData(this.json);
        f.AnimCache[this.url] = b, this.onLoaded()
    }, f.SpineLoader.prototype.onLoaded = function() {
        this.loaded = !0, this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, f.AbstractFilter = function(a, b) {
        this.passes = [this], this.dirty = !0, this.padding = 0, this.uniforms = b || {}, this.fragmentSrc = a || []
    }, f.ColorMatrixFilter = function() {
        f.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            matrix: {
                type: "mat4",
                value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform float invert;", "uniform mat4 matrix;", "uniform sampler2D uSampler;", "void main(void) {", "gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;", "gl_FragColor = gl_FragColor * vColor;", "}"]
    }, f.ColorMatrixFilter.prototype = Object.create(f.AbstractFilter.prototype), f.ColorMatrixFilter.prototype.constructor = f.ColorMatrixFilter, Object.defineProperty(f.ColorMatrixFilter.prototype, "matrix", {
        get: function() {
            return this.uniforms.matrix.value
        },
        set: function(a) {
            this.uniforms.matrix.value = a
        }
    }), f.GrayFilter = function() {
        f.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            gray: {
                type: "1f",
                value: 1
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform float gray;", "void main(void) {", "gl_FragColor = texture2D(uSampler, vTextureCoord);", "gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);", "gl_FragColor = gl_FragColor * vColor;", "}"]
    }, f.GrayFilter.prototype = Object.create(f.AbstractFilter.prototype), f.GrayFilter.prototype.constructor = f.GrayFilter, Object.defineProperty(f.GrayFilter.prototype, "gray", {
        get: function() {
            return this.uniforms.gray.value
        },
        set: function(a) {
            this.uniforms.gray.value = a
        }
    }), f.DisplacementFilter = function(a) {
        f.AbstractFilter.call(this), this.passes = [this], a.baseTexture._powerOf2 = !0, this.uniforms = {
            displacementMap: {
                type: "sampler2D",
                value: a
            },
            scale: {
                type: "2f",
                value: {
                    x: 30,
                    y: 30
                }
            },
            offset: {
                type: "2f",
                value: {
                    x: 0,
                    y: 0
                }
            },
            mapDimensions: {
                type: "2f",
                value: {
                    x: 1,
                    y: 5112
                }
            },
            dimensions: {
                type: "4fv",
                value: [0, 0, 0, 0]
            }
        }, a.baseTexture.hasLoaded ? (this.uniforms.mapDimensions.value.x = a.width, this.uniforms.mapDimensions.value.y = a.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), a.baseTexture.on("loaded", this.boundLoadedFunction)), this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D displacementMap;", "uniform sampler2D uSampler;", "uniform vec2 scale;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "vec2 mapCords = vTextureCoord.xy;", "mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "mapCords.y *= -1.0;", "mapCords.y += 1.0;", "vec2 matSample = texture2D(displacementMap, mapCords).xy;", "matSample -= 0.5;", "matSample *= scale;", "matSample /= mapDimensions;", "gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));", "gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);", "vec2 cord = vTextureCoord;", "gl_FragColor = gl_FragColor * vColor;", "}"]
    }, f.DisplacementFilter.prototype = Object.create(f.AbstractFilter.prototype), f.DisplacementFilter.prototype.constructor = f.DisplacementFilter, f.DisplacementFilter.prototype.onTextureLoaded = function() {
        this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height, this.uniforms.displacementMap.value.baseTexture.off("loaded", this.boundLoadedFunction)
    }, Object.defineProperty(f.DisplacementFilter.prototype, "map", {
        get: function() {
            return this.uniforms.displacementMap.value
        },
        set: function(a) {
            this.uniforms.displacementMap.value = a
        }
    }), Object.defineProperty(f.DisplacementFilter.prototype, "scale", {
        get: function() {
            return this.uniforms.scale.value
        },
        set: function(a) {
            this.uniforms.scale.value = a
        }
    }), Object.defineProperty(f.DisplacementFilter.prototype, "offset", {
        get: function() {
            return this.uniforms.offset.value
        },
        set: function(a) {
            this.uniforms.offset.value = a
        }
    }), f.PixelateFilter = function() {
        f.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            invert: {
                type: "1f",
                value: 0
            },
            dimensions: {
                type: "4fv",
                value: new Float32Array([1e4, 100, 10, 10])
            },
            pixelSize: {
                type: "2f",
                value: {
                    x: 10,
                    y: 10
                }
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform vec2 testDim;", "uniform vec4 dimensions;", "uniform vec2 pixelSize;", "uniform sampler2D uSampler;", "void main(void) {", "vec2 coord = vTextureCoord;", "vec2 size = dimensions.xy/pixelSize;", "vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;", "gl_FragColor = texture2D(uSampler, color);", "}"]
    }, f.PixelateFilter.prototype = Object.create(f.AbstractFilter.prototype), f.PixelateFilter.prototype.constructor = f.PixelateFilter, Object.defineProperty(f.PixelateFilter.prototype, "size", {
        get: function() {
            return this.uniforms.pixelSize.value
        },
        set: function(a) {
            this.dirty = !0, this.uniforms.pixelSize.value = a
        }
    }), f.BlurXFilter = function() {
        f.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            blur: {
                type: "1f",
                value: 1 / 512
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "vec4 sum = vec4(0.0);", "sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;", "sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;", "sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;", "sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;", "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;", "sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;", "sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;", "sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;", "gl_FragColor = sum;", "}"]
    }, f.BlurXFilter.prototype = Object.create(f.AbstractFilter.prototype), f.BlurXFilter.prototype.constructor = f.BlurXFilter, Object.defineProperty(f.BlurXFilter.prototype, "blur", {
        get: function() {
            return this.uniforms.blur.value / (1 / 7e3)
        },
        set: function(a) {
            this.dirty = !0, this.uniforms.blur.value = 1 / 7e3 * a
        }
    }), f.BlurYFilter = function() {
        f.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            blur: {
                type: "1f",
                value: 1 / 512
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "vec4 sum = vec4(0.0);", "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;", "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;", "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;", "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;", "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;", "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;", "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;", "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;", "gl_FragColor = sum;", "}"]
    }, f.BlurYFilter.prototype = Object.create(f.AbstractFilter.prototype), f.BlurYFilter.prototype.constructor = f.BlurYFilter, Object.defineProperty(f.BlurYFilter.prototype, "blur", {
        get: function() {
            return this.uniforms.blur.value / (1 / 7e3)
        },
        set: function(a) {
            this.uniforms.blur.value = 1 / 7e3 * a
        }
    }), f.BlurFilter = function() {
        this.blurXFilter = new f.BlurXFilter, this.blurYFilter = new f.BlurYFilter, this.passes = [this.blurXFilter, this.blurYFilter]
    }, Object.defineProperty(f.BlurFilter.prototype, "blur", {
        get: function() {
            return this.blurXFilter.blur
        },
        set: function(a) {
            this.blurXFilter.blur = this.blurYFilter.blur = a
        }
    }), Object.defineProperty(f.BlurFilter.prototype, "blurX", {
        get: function() {
            return this.blurXFilter.blur
        },
        set: function(a) {
            this.blurXFilter.blur = a
        }
    }), Object.defineProperty(f.BlurFilter.prototype, "blurY", {
        get: function() {
            return this.blurYFilter.blur
        },
        set: function(a) {
            this.blurYFilter.blur = a
        }
    }), f.InvertFilter = function() {
        f.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            invert: {
                type: "1f",
                value: 1
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform float invert;", "uniform sampler2D uSampler;", "void main(void) {", "gl_FragColor = texture2D(uSampler, vTextureCoord);", "gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);", "gl_FragColor = gl_FragColor * vColor;", "}"]
    }, f.InvertFilter.prototype = Object.create(f.AbstractFilter.prototype), f.InvertFilter.prototype.constructor = f.InvertFilter, Object.defineProperty(f.InvertFilter.prototype, "invert", {
        get: function() {
            return this.uniforms.invert.value
        },
        set: function(a) {
            this.uniforms.invert.value = a
        }
    }), f.SepiaFilter = function() {
        f.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            sepia: {
                type: "1f",
                value: 1
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform float sepia;", "uniform sampler2D uSampler;", "const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);", "void main(void) {", "gl_FragColor = texture2D(uSampler, vTextureCoord);", "gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);", "gl_FragColor = gl_FragColor * vColor;", "}"]
    }, f.SepiaFilter.prototype = Object.create(f.AbstractFilter.prototype), f.SepiaFilter.prototype.constructor = f.SepiaFilter, Object.defineProperty(f.SepiaFilter.prototype, "sepia", {
        get: function() {
            return this.uniforms.sepia.value
        },
        set: function(a) {
            this.uniforms.sepia.value = a
        }
    }), f.TwistFilter = function() {
        f.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            radius: {
                type: "1f",
                value: .5
            },
            angle: {
                type: "1f",
                value: 5
            },
            offset: {
                type: "2f",
                value: {
                    x: .5,
                    y: .5
                }
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float radius;", "uniform float angle;", "uniform vec2 offset;", "void main(void) {", "vec2 coord = vTextureCoord - offset;", "float distance = length(coord);", "if (distance < radius){", "float ratio = (radius - distance) / radius;", "float angleMod = ratio * ratio * angle;", "float s = sin(angleMod);", "float c = cos(angleMod);", "coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);", "}", "gl_FragColor = texture2D(uSampler, coord+offset);", "}"]
    }, f.TwistFilter.prototype = Object.create(f.AbstractFilter.prototype), f.TwistFilter.prototype.constructor = f.TwistFilter, Object.defineProperty(f.TwistFilter.prototype, "offset", {
        get: function() {
            return this.uniforms.offset.value
        },
        set: function(a) {
            this.dirty = !0, this.uniforms.offset.value = a
        }
    }), Object.defineProperty(f.TwistFilter.prototype, "radius", {
        get: function() {
            return this.uniforms.radius.value
        },
        set: function(a) {
            this.dirty = !0, this.uniforms.radius.value = a
        }
    }), Object.defineProperty(f.TwistFilter.prototype, "angle", {
        get: function() {
            return this.uniforms.angle.value
        },
        set: function(a) {
            this.dirty = !0, this.uniforms.angle.value = a
        }
    }), f.ColorStepFilter = function() {
        f.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            step: {
                type: "1f",
                value: 5
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform float step;", "void main(void) {", "vec4 color = texture2D(uSampler, vTextureCoord);", "color = floor(color * step) / step;", "gl_FragColor = color * vColor;", "}"]
    }, f.ColorStepFilter.prototype = Object.create(f.AbstractFilter.prototype), f.ColorStepFilter.prototype.constructor = f.ColorStepFilter, Object.defineProperty(f.ColorStepFilter.prototype, "step", {
        get: function() {
            return this.uniforms.step.value
        },
        set: function(a) {
            this.uniforms.step.value = a
        }
    }), f.DotScreenFilter = function() {
        f.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            scale: {
                type: "1f",
                value: 1
            },
            angle: {
                type: "1f",
                value: 5
            },
            dimensions: {
                type: "4fv",
                value: [0, 0, 0, 0]
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float angle;", "uniform float scale;", "float pattern() {", "float s = sin(angle), c = cos(angle);", "vec2 tex = vTextureCoord * dimensions.xy;", "vec2 point = vec2(", "c * tex.x - s * tex.y,", "s * tex.x + c * tex.y", ") * scale;", "return (sin(point.x) * sin(point.y)) * 4.0;", "}", "void main() {", "vec4 color = texture2D(uSampler, vTextureCoord);", "float average = (color.r + color.g + color.b) / 3.0;", "gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);", "}"]
    }, f.DotScreenFilter.prototype = Object.create(f.DotScreenFilter.prototype), f.DotScreenFilter.prototype.constructor = f.DotScreenFilter, Object.defineProperty(f.DotScreenFilter.prototype, "scale", {
        get: function() {
            return this.uniforms.scale.value
        },
        set: function(a) {
            this.dirty = !0, this.uniforms.scale.value = a
        }
    }), Object.defineProperty(f.DotScreenFilter.prototype, "angle", {
        get: function() {
            return this.uniforms.angle.value
        },
        set: function(a) {
            this.dirty = !0, this.uniforms.angle.value = a
        }
    }), f.CrossHatchFilter = function() {
        f.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            blur: {
                type: "1f",
                value: 1 / 512
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);", "     ", "    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);", "     ", "    if (lum < 1.00) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "     ", "    if (lum < 0.75) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "     ", "    if (lum < 0.50) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "     ", "    if (lum < 0.3) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "}"]
    }, f.CrossHatchFilter.prototype = Object.create(f.AbstractFilter.prototype), f.CrossHatchFilter.prototype.constructor = f.BlurYFilter, Object.defineProperty(f.CrossHatchFilter.prototype, "blur", {
        get: function() {
            return this.uniforms.blur.value / (1 / 7e3)
        },
        set: function(a) {
            this.uniforms.blur.value = 1 / 7e3 * a
        }
    }), f.RGBSplitFilter = function() {
        f.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            red: {
                type: "2f",
                value: {
                    x: 20,
                    y: 20
                }
            },
            green: {
                type: "2f",
                value: {
                    x: -20,
                    y: 20
                }
            },
            blue: {
                type: "2f",
                value: {
                    x: 20,
                    y: -20
                }
            },
            dimensions: {
                type: "4fv",
                value: [0, 0, 0, 0]
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform vec2 red;", "uniform vec2 green;", "uniform vec2 blue;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "void main(void) {", "gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;", "gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;", "gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;", "gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;", "}"]
    }, f.RGBSplitFilter.prototype = Object.create(f.AbstractFilter.prototype), f.RGBSplitFilter.prototype.constructor = f.RGBSplitFilter, Object.defineProperty(f.RGBSplitFilter.prototype, "angle", {
        get: function() {
            return this.uniforms.blur.value / (1 / 7e3)
        },
        set: function(a) {
            this.uniforms.blur.value = 1 / 7e3 * a
        }
    }), "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = f), exports.PIXI = f) : "undefined" != typeof define && define.amd ? define(f) : e.PIXI = f
}).call(this);