(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/kaboom/dist/kaboom.mjs
  var qt = Object.defineProperty;
  var bs = /* @__PURE__ */ __name((i, r, a) => r in i ? qt(i, r, { enumerable: true, configurable: true, writable: true, value: a }) : i[r] = a, "bs");
  var u = /* @__PURE__ */ __name((i, r) => qt(i, "name", { value: r, configurable: true }), "u");
  var vs = /* @__PURE__ */ __name((i, r) => {
    for (var a in r)
      qt(i, a, { get: r[a], enumerable: true });
  }, "vs");
  var Z = /* @__PURE__ */ __name((i, r, a) => (bs(i, typeof r != "symbol" ? r + "" : r, a), a), "Z");
  var ys = (() => {
    for (var i = new Uint8Array(128), r = 0; r < 64; r++)
      i[r < 26 ? r + 65 : r < 52 ? r + 71 : r < 62 ? r - 4 : r * 4 - 205] = r;
    return (a) => {
      for (var c = a.length, b = new Uint8Array((c - (a[c - 1] == "=") - (a[c - 2] == "=")) * 3 / 4 | 0), p = 0, T = 0; p < c; ) {
        var R = i[a.charCodeAt(p++)], C = i[a.charCodeAt(p++)], O = i[a.charCodeAt(p++)], M = i[a.charCodeAt(p++)];
        b[T++] = R << 2 | C >> 4, b[T++] = C << 4 | O >> 2, b[T++] = O << 6 | M;
      }
      return b;
    };
  })();
  function fe(i) {
    return i * Math.PI / 180;
  }
  __name(fe, "fe");
  u(fe, "deg2rad");
  function Ht(i) {
    return i * 180 / Math.PI;
  }
  __name(Ht, "Ht");
  u(Ht, "rad2deg");
  function ne(i, r, a) {
    return r > a ? ne(i, a, r) : Math.min(Math.max(i, r), a);
  }
  __name(ne, "ne");
  u(ne, "clamp");
  function ze(i, r, a) {
    return i + (r - i) * a;
  }
  __name(ze, "ze");
  u(ze, "lerp");
  function gt(i, r, a, c, b) {
    return c + (i - r) / (a - r) * (b - c);
  }
  __name(gt, "gt");
  u(gt, "map");
  function Jn(i, r, a, c, b) {
    return ne(gt(i, r, a, c, b), c, b);
  }
  __name(Jn, "Jn");
  u(Jn, "mapc");
  var H = /* @__PURE__ */ __name(class {
    constructor(r = 0, a = r) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      this.x = r, this.y = a;
    }
    static fromAngle(r) {
      let a = fe(r);
      return new H(Math.cos(a), Math.sin(a));
    }
    clone() {
      return new H(this.x, this.y);
    }
    add(...r) {
      let a = f(...r);
      return new H(this.x + a.x, this.y + a.y);
    }
    sub(...r) {
      let a = f(...r);
      return new H(this.x - a.x, this.y - a.y);
    }
    scale(...r) {
      let a = f(...r);
      return new H(this.x * a.x, this.y * a.y);
    }
    dist(...r) {
      let a = f(...r);
      return Math.sqrt((this.x - a.x) * (this.x - a.x) + (this.y - a.y) * (this.y - a.y));
    }
    len() {
      return this.dist(new H(0, 0));
    }
    unit() {
      let r = this.len();
      return r === 0 ? new H(0) : this.scale(1 / r);
    }
    normal() {
      return new H(this.y, -this.x);
    }
    dot(r) {
      return this.x * r.x + this.y * r.y;
    }
    angle(...r) {
      let a = f(...r);
      return Ht(Math.atan2(this.y - a.y, this.x - a.x));
    }
    lerp(r, a) {
      return new H(ze(this.x, r.x, a), ze(this.y, r.y, a));
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(r) {
      return new H(Number(this.x.toFixed(r)), Number(this.y.toFixed(r)));
    }
    eq(r) {
      return this.x === r.x && this.y === r.y;
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  }, "H");
  var D = H;
  u(D, "Vec2"), Z(D, "LEFT", new H(-1, 0)), Z(D, "RIGHT", new H(1, 0)), Z(D, "UP", new H(0, -1)), Z(D, "DOWN", new H(0, 1));
  function f(...i) {
    if (i.length === 1) {
      if (i[0] instanceof D)
        return f(i[0].x, i[0].y);
      if (Array.isArray(i[0]) && i[0].length === 2)
        return f(...i[0]);
    }
    return new D(...i);
  }
  __name(f, "f");
  u(f, "vec2");
  var _e = /* @__PURE__ */ __name(class {
    constructor(r, a, c) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "z", 0);
      this.x = r, this.y = a, this.z = c;
    }
    xy() {
      return f(this.x, this.y);
    }
  }, "_e");
  u(_e, "Vec3");
  var ge = u((i, r, a) => new _e(i, r, a), "vec3");
  var oe = /* @__PURE__ */ __name(class {
    constructor(r, a, c) {
      __publicField(this, "r", 255);
      __publicField(this, "g", 255);
      __publicField(this, "b", 255);
      this.r = ne(r, 0, 255), this.g = ne(a, 0, 255), this.b = ne(c, 0, 255);
    }
    static fromArray(r) {
      return new oe(r[0], r[1], r[2]);
    }
    static fromHex(r) {
      if (typeof r == "number")
        return new oe(r >> 16 & 255, r >> 8 & 255, r >> 0 & 255);
      {
        let a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
        return new oe(parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16));
      }
    }
    static fromHSL(r, a, c) {
      if (a == 0)
        return E(255 * c, 255 * c, 255 * c);
      let b = u((M, U, g) => (g < 0 && (g += 1), g > 1 && (g -= 1), g < 1 / 6 ? M + (U - M) * 6 * g : g < 1 / 2 ? U : g < 2 / 3 ? M + (U - M) * (2 / 3 - g) * 6 : M), "hue2rgb"), p = c < 0.5 ? c * (1 + a) : c + a - c * a, T = 2 * c - p, R = b(T, p, r + 1 / 3), C = b(T, p, r), O = b(T, p, r - 1 / 3);
      return new oe(Math.round(R * 255), Math.round(C * 255), Math.round(O * 255));
    }
    clone() {
      return new oe(this.r, this.g, this.b);
    }
    lighten(r) {
      return new oe(this.r + r, this.g + r, this.b + r);
    }
    darken(r) {
      return this.lighten(-r);
    }
    invert() {
      return new oe(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(r) {
      return new oe(this.r * r.r / 255, this.g * r.g / 255, this.b * r.b / 255);
    }
    eq(r) {
      return this.r === r.r && this.g === r.g && this.b === r.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
  }, "oe");
  var x = oe;
  u(x, "Color"), Z(x, "RED", E(255, 0, 0)), Z(x, "GREEN", E(0, 255, 0)), Z(x, "BLUE", E(0, 0, 255)), Z(x, "YELLOW", E(255, 255, 0)), Z(x, "MAGENTA", E(255, 0, 255)), Z(x, "CYAN", E(0, 255, 255)), Z(x, "WHITE", E(255, 255, 255)), Z(x, "BLACK", E(0, 0, 0));
  function E(...i) {
    if (i.length === 0)
      return new x(255, 255, 255);
    if (i.length === 1) {
      if (i[0] instanceof x)
        return i[0].clone();
      if (Array.isArray(i[0]) && i[0].length === 3)
        return x.fromArray(i[0]);
    }
    return new x(...i);
  }
  __name(E, "E");
  u(E, "rgb");
  var Zn = u((i, r, a) => x.fromHSL(i, r, a), "hsl2rgb");
  var j = /* @__PURE__ */ __name(class {
    constructor(r, a, c, b) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "w", 1);
      __publicField(this, "h", 1);
      this.x = r, this.y = a, this.w = c, this.h = b;
    }
    scale(r) {
      return new j(this.x + this.w * r.x, this.y + this.h * r.y, this.w * r.w, this.h * r.h);
    }
    clone() {
      return new j(this.x, this.y, this.w, this.h);
    }
    eq(r) {
      return this.x === r.x && this.y === r.y && this.w === r.w && this.h === r.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  }, "j");
  u(j, "Quad");
  function Wn(i, r, a, c) {
    return new j(i, r, a, c);
  }
  __name(Wn, "Wn");
  u(Wn, "quad");
  var A = /* @__PURE__ */ __name(class {
    constructor(r) {
      __publicField(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      r && (this.m = r);
    }
    static translate(r) {
      return new A([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r.x, r.y, 0, 1]);
    }
    static scale(r) {
      return new A([r.x, 0, 0, 0, 0, r.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(r) {
      return r = fe(-r), new A([1, 0, 0, 0, 0, Math.cos(r), -Math.sin(r), 0, 0, Math.sin(r), Math.cos(r), 0, 0, 0, 0, 1]);
    }
    static rotateY(r) {
      return r = fe(-r), new A([Math.cos(r), 0, Math.sin(r), 0, 0, 1, 0, 0, -Math.sin(r), 0, Math.cos(r), 0, 0, 0, 0, 1]);
    }
    static rotateZ(r) {
      return r = fe(-r), new A([Math.cos(r), -Math.sin(r), 0, 0, Math.sin(r), Math.cos(r), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(r) {
      return this.mult(A.translate(r));
    }
    scale(r) {
      return this.mult(A.scale(r));
    }
    rotateX(r) {
      return this.mult(A.rotateX(r));
    }
    rotateY(r) {
      return this.mult(A.rotateY(r));
    }
    rotateZ(r) {
      return this.mult(A.rotateZ(r));
    }
    mult(r) {
      let a = [];
      for (let c = 0; c < 4; c++)
        for (let b = 0; b < 4; b++)
          a[c * 4 + b] = this.m[0 * 4 + b] * r.m[c * 4 + 0] + this.m[1 * 4 + b] * r.m[c * 4 + 1] + this.m[2 * 4 + b] * r.m[c * 4 + 2] + this.m[3 * 4 + b] * r.m[c * 4 + 3];
      return new A(a);
    }
    multVec4(r) {
      return { x: r.x * this.m[0] + r.y * this.m[4] + r.z * this.m[8] + r.w * this.m[12], y: r.x * this.m[1] + r.y * this.m[5] + r.z * this.m[9] + r.w * this.m[13], z: r.x * this.m[2] + r.y * this.m[6] + r.z * this.m[10] + r.w * this.m[14], w: r.x * this.m[3] + r.y * this.m[7] + r.z * this.m[11] + r.w * this.m[15] };
    }
    multVec3(r) {
      let a = this.multVec4({ x: r.x, y: r.y, z: r.z, w: 1 });
      return ge(a.x, a.y, a.z);
    }
    multVec2(r) {
      return f(r.x * this.m[0] + r.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], r.x * this.m[1] + r.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
    }
    invert() {
      let r = [], a = this.m[10] * this.m[15] - this.m[14] * this.m[11], c = this.m[9] * this.m[15] - this.m[13] * this.m[11], b = this.m[9] * this.m[14] - this.m[13] * this.m[10], p = this.m[8] * this.m[15] - this.m[12] * this.m[11], T = this.m[8] * this.m[14] - this.m[12] * this.m[10], R = this.m[8] * this.m[13] - this.m[12] * this.m[9], C = this.m[6] * this.m[15] - this.m[14] * this.m[7], O = this.m[5] * this.m[15] - this.m[13] * this.m[7], M = this.m[5] * this.m[14] - this.m[13] * this.m[6], U = this.m[4] * this.m[15] - this.m[12] * this.m[7], g = this.m[4] * this.m[14] - this.m[12] * this.m[6], le = this.m[5] * this.m[15] - this.m[13] * this.m[7], I = this.m[4] * this.m[13] - this.m[12] * this.m[5], Y = this.m[6] * this.m[11] - this.m[10] * this.m[7], Ce = this.m[5] * this.m[11] - this.m[9] * this.m[7], Te = this.m[5] * this.m[10] - this.m[9] * this.m[6], rt = this.m[4] * this.m[11] - this.m[8] * this.m[7], it = this.m[4] * this.m[10] - this.m[8] * this.m[6], Ae = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      r[0] = this.m[5] * a - this.m[6] * c + this.m[7] * b, r[4] = -(this.m[4] * a - this.m[6] * p + this.m[7] * T), r[8] = this.m[4] * c - this.m[5] * p + this.m[7] * R, r[12] = -(this.m[4] * b - this.m[5] * T + this.m[6] * R), r[1] = -(this.m[1] * a - this.m[2] * c + this.m[3] * b), r[5] = this.m[0] * a - this.m[2] * p + this.m[3] * T, r[9] = -(this.m[0] * c - this.m[1] * p + this.m[3] * R), r[13] = this.m[0] * b - this.m[1] * T + this.m[2] * R, r[2] = this.m[1] * C - this.m[2] * O + this.m[3] * M, r[6] = -(this.m[0] * C - this.m[2] * U + this.m[3] * g), r[10] = this.m[0] * le - this.m[1] * U + this.m[3] * I, r[14] = -(this.m[0] * M - this.m[1] * g + this.m[2] * I), r[3] = -(this.m[1] * Y - this.m[2] * Ce + this.m[3] * Te), r[7] = this.m[0] * Y - this.m[2] * rt + this.m[3] * it, r[11] = -(this.m[0] * Ce - this.m[1] * rt + this.m[3] * Ae), r[15] = this.m[0] * Te - this.m[1] * it + this.m[2] * Ae;
      let Et = this.m[0] * r[0] + this.m[1] * r[4] + this.m[2] * r[8] + this.m[3] * r[12];
      for (let Oe = 0; Oe < 4; Oe++)
        for (let Pe = 0; Pe < 4; Pe++)
          r[Oe * 4 + Pe] *= 1 / Et;
      return new A(r);
    }
    clone() {
      return new A(this.m);
    }
    toString() {
      return this.m.toString();
    }
  }, "A");
  u(A, "Mat4");
  function $t(i, r, a, c = Math.sin) {
    return i + (c(a) + 1) / 2 * (r - i);
  }
  __name($t, "$t");
  u($t, "wave");
  var Us = 1103515245;
  var Es = 12345;
  var Yn = 2147483648;
  var ke = /* @__PURE__ */ __name(class {
    constructor(r) {
      __publicField(this, "seed");
      this.seed = r;
    }
    gen() {
      return this.seed = (Us * this.seed + Es) % Yn, this.seed / Yn;
    }
    genNumber(r, a) {
      return r + this.gen() * (a - r);
    }
    genVec2(r, a) {
      return new D(this.genNumber(r.x, a.x), this.genNumber(r.y, a.y));
    }
    genColor(r, a) {
      return new x(this.genNumber(r.r, a.r), this.genNumber(r.g, a.g), this.genNumber(r.b, a.b));
    }
    genAny(...r) {
      if (r.length === 0)
        return this.gen();
      if (r.length === 1) {
        if (typeof r[0] == "number")
          return this.genNumber(0, r[0]);
        if (r[0] instanceof D)
          return this.genVec2(f(0, 0), r[0]);
        if (r[0] instanceof x)
          return this.genColor(E(0, 0, 0), r[0]);
      } else if (r.length === 2) {
        if (typeof r[0] == "number" && typeof r[1] == "number")
          return this.genNumber(r[0], r[1]);
        if (r[0] instanceof D && r[1] instanceof D)
          return this.genVec2(r[0], r[1]);
        if (r[0] instanceof x && r[1] instanceof x)
          return this.genColor(r[0], r[1]);
      }
    }
  }, "ke");
  u(ke, "RNG");
  var zt = new ke(Date.now());
  function er(i) {
    return i != null && (zt.seed = i), zt.seed;
  }
  __name(er, "er");
  u(er, "randSeed");
  function tt(...i) {
    return zt.genAny(...i);
  }
  __name(tt, "tt");
  u(tt, "rand");
  function Yt(...i) {
    return Math.floor(tt(...i));
  }
  __name(Yt, "Yt");
  u(Yt, "randi");
  function tr(i) {
    return tt() <= i;
  }
  __name(tr, "tr");
  u(tr, "chance");
  function nr(i) {
    return i[Yt(i.length)];
  }
  __name(nr, "nr");
  u(nr, "choose");
  function rr(i, r) {
    return i.pos.x + i.width > r.pos.x && i.pos.x < r.pos.x + r.width && i.pos.y + i.height > r.pos.y && i.pos.y < r.pos.y + r.height;
  }
  __name(rr, "rr");
  u(rr, "testRectRect");
  function xs(i, r) {
    if (i.p1.x === i.p2.x && i.p1.y === i.p2.y || r.p1.x === r.p2.x && r.p1.y === r.p2.y)
      return null;
    let a = (r.p2.y - r.p1.y) * (i.p2.x - i.p1.x) - (r.p2.x - r.p1.x) * (i.p2.y - i.p1.y);
    if (a === 0)
      return null;
    let c = ((r.p2.x - r.p1.x) * (i.p1.y - r.p1.y) - (r.p2.y - r.p1.y) * (i.p1.x - r.p1.x)) / a, b = ((i.p2.x - i.p1.x) * (i.p1.y - r.p1.y) - (i.p2.y - i.p1.y) * (i.p1.x - r.p1.x)) / a;
    return c < 0 || c > 1 || b < 0 || b > 1 ? null : c;
  }
  __name(xs, "xs");
  u(xs, "testLineLineT");
  function je(i, r) {
    let a = xs(i, r);
    return a ? f(i.p1.x + a * (i.p2.x - i.p1.x), i.p1.y + a * (i.p2.y - i.p1.y)) : null;
  }
  __name(je, "je");
  u(je, "testLineLine");
  function ir(i, r) {
    if (He(i, r.p1) || He(i, r.p2))
      return true;
    let a = i.points();
    return !!je(r, new ie(a[0], a[1])) || !!je(r, new ie(a[1], a[2])) || !!je(r, new ie(a[2], a[3])) || !!je(r, new ie(a[3], a[0]));
  }
  __name(ir, "ir");
  u(ir, "testRectLine");
  function He(i, r) {
    return r.x > i.pos.x && r.x < i.pos.x + i.width && r.y > i.pos.y && r.y < i.pos.y + i.height;
  }
  __name(He, "He");
  u(He, "testRectPoint");
  function sr(i, r) {
    return i.center.dist(r) < i.radius;
  }
  __name(sr, "sr");
  u(sr, "testCirclePoint");
  function or(i, r) {
    let a = false, c = i.pts;
    for (let b = 0, p = c.length - 1; b < c.length; p = b++)
      c[b].y > r.y != c[p].y > r.y && r.x < (c[p].x - c[b].x) * (r.y - c[b].y) / (c[p].y - c[b].y) + c[b].x && (a = !a);
    return a;
  }
  __name(or, "or");
  u(or, "testPolygonPoint");
  var ie = /* @__PURE__ */ __name(class {
    constructor(r, a) {
      __publicField(this, "p1");
      __publicField(this, "p2");
      this.p1 = r, this.p2 = a;
    }
    transform(r) {
      return new ie(r.multVec2(this.p1), r.multVec2(this.p2));
    }
    bbox() {
      return G.fromPoints(this.p1, this.p2);
    }
  }, "ie");
  u(ie, "Line");
  var G = /* @__PURE__ */ __name(class {
    constructor(r, a, c) {
      __publicField(this, "pos");
      __publicField(this, "width");
      __publicField(this, "height");
      this.pos = r, this.width = a, this.height = c;
    }
    static fromPoints(r, a) {
      return new G(r.clone(), a.x - r.x, a.y - r.y);
    }
    center() {
      return new D(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
      return [this.pos, this.pos.add(this.width, 0), this.pos.add(this.width, this.height), this.pos.add(0, this.height)];
    }
    transform(r) {
      return new ae(this.points().map((a) => r.multVec2(a)));
    }
    bbox() {
      return new G(this.pos.clone(), this.width, this.height);
    }
    distToPoint(r) {
      let a = this.pos, c = this.pos.add(this.width, this.height), b = Math.max(a.x - r.x, 0, r.x - c.x), p = Math.max(a.y - r.y, 0, r.y - c.y);
      return Math.sqrt(b * b + p * p);
    }
  }, "G");
  u(G, "Rect");
  var me = /* @__PURE__ */ __name(class {
    constructor(r, a) {
      __publicField(this, "center");
      __publicField(this, "radius");
      this.center = r, this.radius = a;
    }
    transform(r) {
      return new qe(this.center, this.radius, this.radius).transform(r);
    }
    bbox() {
      return G.fromPoints(this.center.sub(f(this.radius)), this.center.add(f(this.radius)));
    }
  }, "me");
  u(me, "Circle");
  var qe = /* @__PURE__ */ __name(class {
    constructor(r, a, c) {
      __publicField(this, "center");
      __publicField(this, "radiusX");
      __publicField(this, "radiusY");
      this.center = r, this.radiusX = a, this.radiusY = c;
    }
    transform(r) {
      return new qe(r.multVec2(this.center), r.m[0] * this.radiusX, r.m[5] * this.radiusY);
    }
    bbox() {
      return G.fromPoints(this.center.sub(f(this.radiusX, this.radiusY)), this.center.add(f(this.radiusX, this.radiusY)));
    }
  }, "qe");
  u(qe, "Ellipse");
  var ae = /* @__PURE__ */ __name(class {
    constructor(r) {
      __publicField(this, "pts");
      if (r.length < 3)
        throw new Error("Polygons should have at least 3 vertices");
      this.pts = r;
    }
    transform(r) {
      return new ae(this.pts.map((a) => r.multVec2(a)));
    }
    bbox() {
      let r = f(Number.MAX_VALUE), a = f(-Number.MAX_VALUE);
      for (let c of this.pts)
        r.x = Math.min(r.x, c.x), a.x = Math.max(a.x, c.x), r.y = Math.min(r.y, c.y), a.y = Math.max(a.y, c.y);
      return G.fromPoints(r, a);
    }
  }, "ae");
  u(ae, "Polygon");
  function ar(i, r) {
    let a = Number.MAX_VALUE, c = f(0);
    for (let b of [i, r])
      for (let p = 0; p < b.pts.length; p++) {
        let T = b.pts[p], C = b.pts[(p + 1) % b.pts.length].sub(T).normal().unit(), O = Number.MAX_VALUE, M = -Number.MAX_VALUE;
        for (let I = 0; I < i.pts.length; I++) {
          let Y = i.pts[I].dot(C);
          O = Math.min(O, Y), M = Math.max(M, Y);
        }
        let U = Number.MAX_VALUE, g = -Number.MAX_VALUE;
        for (let I = 0; I < r.pts.length; I++) {
          let Y = r.pts[I].dot(C);
          U = Math.min(U, Y), g = Math.max(g, Y);
        }
        let le = Math.min(M, g) - Math.max(O, U);
        if (le < 0)
          return null;
        if (le < Math.abs(a)) {
          let I = g - O, Y = U - M;
          a = Math.abs(I) < Math.abs(Y) ? I : Y, c = C.scale(a);
        }
      }
    return c;
  }
  __name(ar, "ar");
  u(ar, "sat");
  var pt = 1.70158;
  var mt = pt * 1.525;
  var Xn = pt + 1;
  var Kn = 2 * Math.PI / 3;
  var Qn = 2 * Math.PI / 4.5;
  var pe = { linear: (i) => i, easeInSine: (i) => 1 - Math.cos(i * Math.PI / 2), easeOutSine: (i) => Math.sin(i * Math.PI / 2), easeInOutSine: (i) => -(Math.cos(Math.PI * i) - 1) / 2, easeInQuad: (i) => i * i, easeOutQuad: (i) => 1 - (1 - i) * (1 - i), easeInOutQuad: (i) => i < 0.5 ? 2 * i * i : 1 - Math.pow(-2 * i + 2, 2) / 2, easeInCubic: (i) => i * i * i, easeOutCubic: (i) => 1 - Math.pow(1 - i, 3), easeInOutCubic: (i) => i < 0.5 ? 4 * i * i * i : 1 - Math.pow(-2 * i + 2, 3) / 2, easeInQuart: (i) => i * i * i * i, easeOutQuart: (i) => 1 - Math.pow(1 - i, 4), easeInOutQuart: (i) => i < 0.5 ? 8 * i * i * i * i : 1 - Math.pow(-2 * i + 2, 4) / 2, easeInQuint: (i) => i * i * i * i * i, easeOutQuint: (i) => 1 - Math.pow(1 - i, 5), easeInOutQuint: (i) => i < 0.5 ? 16 * i * i * i * i * i : 1 - Math.pow(-2 * i + 2, 5) / 2, easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * i - 10), easeOutExpo: (i) => i === 1 ? 1 : 1 - Math.pow(2, -10 * i), easeInOutExpo: (i) => i === 0 ? 0 : i === 1 ? 1 : i < 0.5 ? Math.pow(2, 20 * i - 10) / 2 : (2 - Math.pow(2, -20 * i + 10)) / 2, easeInCirc: (i) => 1 - Math.sqrt(1 - Math.pow(i, 2)), easeOutCirc: (i) => Math.sqrt(1 - Math.pow(i - 1, 2)), easeInOutCirc: (i) => i < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * i, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * i + 2, 2)) + 1) / 2, easeInBack: (i) => Xn * i * i * i - pt * i * i, easeOutBack: (i) => 1 + Xn * Math.pow(i - 1, 3) + pt * Math.pow(i - 1, 2), easeInOutBack: (i) => i < 0.5 ? Math.pow(2 * i, 2) * ((mt + 1) * 2 * i - mt) / 2 : (Math.pow(2 * i - 2, 2) * ((mt + 1) * (i * 2 - 2) + mt) + 2) / 2, easeInElastic: (i) => i === 0 ? 0 : i === 1 ? 1 : -Math.pow(2, 10 * i - 10) * Math.sin((i * 10 - 10.75) * Kn), easeOutElastic: (i) => i === 0 ? 0 : i === 1 ? 1 : Math.pow(2, -10 * i) * Math.sin((i * 10 - 0.75) * Kn) + 1, easeInOutElastic: (i) => i === 0 ? 0 : i === 1 ? 1 : i < 0.5 ? -(Math.pow(2, 20 * i - 10) * Math.sin((20 * i - 11.125) * Qn)) / 2 : Math.pow(2, -20 * i + 10) * Math.sin((20 * i - 11.125) * Qn) / 2 + 1, easeInBounce: (i) => 1 - pe.easeOutBounce(1 - i), easeOutBounce: (i) => i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375, easeInOutBounce: (i) => i < 0.5 ? (1 - pe.easeOutBounce(1 - 2 * i)) / 2 : (1 + pe.easeOutBounce(2 * i - 1)) / 2 };
  var Se = /* @__PURE__ */ __name(class extends Map {
    constructor(...r) {
      super(...r);
      __publicField(this, "lastID");
      this.lastID = 0;
    }
    push(r) {
      let a = this.lastID;
      return this.set(a, r), this.lastID++, a;
    }
    pushd(r) {
      let a = this.push(r);
      return () => this.delete(a);
    }
  }, "Se");
  u(Se, "IDList");
  var W = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "handlers", new Se());
    }
    add(r) {
      let a = this.handlers.pushd((...b) => {
        c.paused || r(...b);
      }), c = { paused: false, cancel: a };
      return c;
    }
    addOnce(r) {
      let a = this.add((...c) => {
        a.cancel(), r(...c);
      });
      return a;
    }
    next() {
      return new Promise((r) => this.addOnce(r));
    }
    trigger(...r) {
      this.handlers.forEach((a) => a(...r));
    }
    numListeners() {
      return this.handlers.size;
    }
  }, "W");
  u(W, "Event");
  var ue = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "handlers", /* @__PURE__ */ new Map());
    }
    on(r, a) {
      return this.handlers.get(r) || this.handlers.set(r, new W()), this.handlers.get(r).add(a);
    }
    onOnce(r, a) {
      let c = this.on(r, (...b) => {
        c.cancel(), a(...b);
      });
      return c;
    }
    next(r) {
      return new Promise((a) => {
        this.onOnce(r, a);
      });
    }
    trigger(r, ...a) {
      this.handlers.get(r) && this.handlers.get(r).trigger(...a);
    }
    remove(r) {
      this.handlers.delete(r);
    }
    clear() {
      this.handlers = /* @__PURE__ */ new Map();
    }
    numListeners(r) {
      var _a, _b;
      return (_b = (_a = this.handlers.get(r)) == null ? void 0 : _a.numListeners()) != null ? _b : 0;
    }
  }, "ue");
  u(ue, "EventHandler");
  function Xt(i, r) {
    let a = typeof i, c = typeof r;
    if (a !== c)
      return false;
    if (a === "object" && c === "object") {
      let b = Object.keys(i), p = Object.keys(r);
      if (b.length !== p.length)
        return false;
      for (let T of b) {
        let R = i[T], C = r[T];
        if (!(typeof R == "function" && typeof C == "function") && !Xt(R, C))
          return false;
      }
      return true;
    }
    return i === r;
  }
  __name(Xt, "Xt");
  u(Xt, "deepEq");
  function Ss(i) {
    let r = window.atob(i), a = r.length, c = new Uint8Array(a);
    for (let b = 0; b < a; b++)
      c[b] = r.charCodeAt(b);
    return c.buffer;
  }
  __name(Ss, "Ss");
  u(Ss, "base64ToArrayBuffer");
  function ur(i) {
    return Ss(i.split(",")[1]);
  }
  __name(ur, "ur");
  u(ur, "dataURLToArrayBuffer");
  function wt(i, r) {
    let a = document.createElement("a");
    a.href = r, a.download = i, a.click();
  }
  __name(wt, "wt");
  u(wt, "download");
  function Kt(i, r) {
    wt(i, "data:text/plain;charset=utf-8," + r);
  }
  __name(Kt, "Kt");
  u(Kt, "downloadText");
  function cr(i, r) {
    Kt(i, JSON.stringify(r));
  }
  __name(cr, "cr");
  u(cr, "downloadJSON");
  function Qt(i, r) {
    let a = URL.createObjectURL(r);
    wt(i, a), URL.revokeObjectURL(a);
  }
  __name(Qt, "Qt");
  u(Qt, "downloadBlob");
  function Jt(i) {
    return i.match(/^data:\w+\/\w+;base64,.+/);
  }
  __name(Jt, "Jt");
  u(Jt, "isDataURL");
  var lr = (() => {
    let i = 0;
    return () => i++;
  })();
  var $e = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "dts", []);
      __publicField(this, "timer", 0);
      __publicField(this, "fps", 0);
    }
    tick(r) {
      this.dts.push(r), this.timer += r, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((a, c) => a + c) / this.dts.length)), this.dts = []);
    }
  }, "$e");
  u($e, "FPSCounter");
  var we = /* @__PURE__ */ __name(class {
    constructor(r, a) {
      __publicField(this, "time");
      __publicField(this, "action");
      __publicField(this, "finished", false);
      __publicField(this, "paused", false);
      this.time = r, this.action = a;
    }
    tick(r) {
      return this.finished || this.paused ? false : (this.time -= r, this.time <= 0 ? (this.action(), this.finished = true, this.time = 0, true) : false);
    }
    reset(r) {
      this.time = r, this.finished = false;
    }
  }, "we");
  u(we, "Timer");
  var hr = "data:image/png;base64,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";
  var dr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
  var As = {};
  vs(As, { default: () => Zt });
  var Zt = ys("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var fr = "data:image/png;base64,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";
  var mr = "data:image/png;base64,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";
  var Ds = "3000.0.0-alpha.10";
  var pr = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
  var gr = ["left", "middle", "right", "back", "forward"];
  var Ms = ["space", "left", "right", "up", "down", "tab", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "s"];
  var wr = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var br = 0;
  var vr = 3;
  var Fs = 0;
  var Bs = 3;
  var Ls = -1200;
  var Is = 1200;
  var bt = "topleft";
  var yr = 64;
  var Vs = "happy";
  var vt = "monospace";
  var Gs = 36;
  var Ur = 64;
  var yt = 1024;
  var Er = 0.1;
  var Ns = 1;
  var Cr = [{ name: "a_pos", size: 3 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
  var Ut = Cr.reduce((i, r) => i + r.size, 0);
  var Tr = 2048;
  var xr = Tr * 4 * Ut;
  var Sr = Tr * 6;
  var js = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var _s = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var Wt = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var en = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var ks = /* @__PURE__ */ new Set(["id", "require"]);
  var qs = /* @__PURE__ */ new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
  function tn(i) {
    return i === "pressed" || i === "rpressed" ? "down" : i === "released" ? "up" : i;
  }
  __name(tn, "tn");
  u(tn, "processButtonState");
  function zs(i) {
    i.requestFullscreen ? i.requestFullscreen() : i.webkitRequestFullscreen && i.webkitRequestFullscreen();
  }
  __name(zs, "zs");
  u(zs, "enterFullscreen");
  function Hs() {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
  }
  __name(Hs, "Hs");
  u(Hs, "exitFullscreen");
  function $s() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }
  __name($s, "$s");
  u($s, "getFullscreenElement");
  function nt(i) {
    switch (i) {
      case "topleft":
        return f(-1, -1);
      case "top":
        return f(0, -1);
      case "topright":
        return f(1, -1);
      case "left":
        return f(-1, 0);
      case "center":
        return f(0, 0);
      case "right":
        return f(1, 0);
      case "botleft":
        return f(-1, 1);
      case "bot":
        return f(0, 1);
      case "botright":
        return f(1, 1);
      default:
        return i;
    }
  }
  __name(nt, "nt");
  u(nt, "anchorPt");
  function Ys(i) {
    switch (i) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  __name(Ys, "Ys");
  u(Ys, "alignPt");
  function nn(i) {
    return i.createBuffer(1, 1, 44100);
  }
  __name(nn, "nn");
  u(nn, "createEmptyAudioBuffer");
  var vo = u((i = {}) => {
    let r = [], a = (() => {
      var _a, _b, _c;
      let e = (_a = i.root) != null ? _a : document.body;
      e === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
      let t = (_b = i.canvas) != null ? _b : (() => {
        let v = document.createElement("canvas");
        return e.appendChild(v), v;
      })(), n = (_c = i.scale) != null ? _c : 1, s = !(i.width && i.height && !i.stretch && !i.letterbox), h = t.parentElement.offsetWidth, o = t.parentElement.offsetHeight;
      s ? (t.width = h, t.height = o) : (t.width = i.width * n, t.height = i.height * n);
      let l = t.width, d = t.height, m = i.pixelDensity || window.devicePixelRatio;
      t.width *= m, t.height *= m;
      let w = [`width: ${l}px`, `height: ${d}px`, "outline: none", "cursor: default"];
      return i.crisp && (w.push("image-rendering: pixelated"), w.push("image-rendering: crisp-edges")), t.style.cssText = w.join(";"), t.tabIndex = 0, { canvas: t, canvas2: t.cloneNode(), pixelDensity: m, stretchToParent: s, lastParentWidth: h, lastParentHeight: o, keyStates: {}, mouseStates: {}, virtualButtonStates: {}, charInputted: [], numKeyDown: 0, isMouseMoved: false, isKeyPressed: false, isKeyPressedRepeat: false, isKeyReleased: false, mouseStarted: false, mousePos: f(0, 0), mouseDeltaPos: f(0, 0), time: 0, realTime: 0, skipTime: false, dt: 0, numFrames: 0, isTouchScreen: "ontouchstart" in window || navigator.maxTouchPoints > 0, loopID: null, stopped: false, paused: false, fpsCounter: new $e() };
    })(), c = a.canvas.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
    class b {
      constructor(t, n, s = {}) {
        __publicField(this, "glTex");
        __publicField(this, "width");
        __publicField(this, "height");
        this.glTex = c.createTexture(), r.push(() => this.free()), this.bind(), t && n && c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, t, n, 0, c.RGBA, c.UNSIGNED_BYTE, null), this.width = t, this.height = n;
        let h = (() => {
          var _a;
          switch ((_a = s.filter) != null ? _a : i.texFilter) {
            case "linear":
              return c.LINEAR;
            case "nearest":
              return c.NEAREST;
            default:
              return c.NEAREST;
          }
        })(), o = (() => {
          switch (s.wrap) {
            case "repeat":
              return c.REPEAT;
            case "clampToEdge":
              return c.CLAMP_TO_EDGE;
            default:
              return c.CLAMP_TO_EDGE;
          }
        })();
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, h), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, h), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, o), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, o), this.unbind();
      }
      static fromImage(t, n = {}) {
        let s = new b(0, 0, n);
        return s.bind(), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, t), s.width = t.width, s.height = t.height, s.unbind(), s;
      }
      update(t, n, s) {
        this.bind(), c.texSubImage2D(c.TEXTURE_2D, 0, t, n, c.RGBA, c.UNSIGNED_BYTE, s), this.unbind();
      }
      bind() {
        c.bindTexture(c.TEXTURE_2D, this.glTex);
      }
      unbind() {
        c.bindTexture(c.TEXTURE_2D, null);
      }
      free() {
        c.deleteTexture(this.glTex);
      }
    }
    __name(b, "b");
    u(b, "Texture");
    let p = (() => {
      var _a;
      let e = xt(Wt, en), t = b.fromImage(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1));
      if (i.background) {
        let o = x.fromArray(i.background);
        c.clearColor(o.r / 255, o.g / 255, o.b / 255, (_a = i.background[3]) != null ? _a : 1);
      }
      c.enable(c.BLEND), c.enable(c.SCISSOR_TEST), c.blendFuncSeparate(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA, c.ONE, c.ONE_MINUS_SRC_ALPHA);
      let n = c.createBuffer();
      c.bindBuffer(c.ARRAY_BUFFER, n), c.bufferData(c.ARRAY_BUFFER, xr * 4, c.DYNAMIC_DRAW), Cr.reduce((o, l, d) => (c.vertexAttribPointer(d, l.size, c.FLOAT, false, Ut * 4, o), c.enableVertexAttribArray(d), o + l.size * 4), 0), c.bindBuffer(c.ARRAY_BUFFER, null);
      let s = c.createBuffer();
      c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, s), c.bufferData(c.ELEMENT_ARRAY_BUFFER, Sr * 4, c.DYNAMIC_DRAW), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null);
      let h = b.fromImage(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { drawCalls: 0, lastDrawCalls: 0, defShader: e, curShader: e, defTex: t, curTex: t, curUniform: {}, vbuf: n, ibuf: s, vqueue: [], iqueue: [], transform: new A(), transformStack: [], bgTex: h, width: i.width, height: i.height, viewport: { x: 0, y: 0, width: c.drawingBufferWidth, height: c.drawingBufferHeight } };
    })();
    class T {
      constructor(t, n, s = {}) {
        __publicField(this, "tex");
        __publicField(this, "frames", [new j(0, 0, 1, 1)]);
        __publicField(this, "anims", {});
        this.tex = t, n && (this.frames = n), this.anims = s;
      }
      static from(t, n = {}) {
        return typeof t == "string" ? T.fromURL(t, n) : Promise.resolve(T.fromImage(t, n));
      }
      static fromImage(t, n = {}) {
        var _a;
        return new T(b.fromImage(t, n), Pe(n.sliceX || 1, n.sliceY || 1), (_a = n.anims) != null ? _a : {});
      }
      static fromURL(t, n = {}) {
        return Ae(t).then((s) => T.fromImage(s, n));
      }
    }
    __name(T, "T");
    u(T, "SpriteData");
    class R {
      constructor(t) {
        __publicField(this, "buf");
        this.buf = t;
      }
      static fromArrayBuffer(t) {
        return new Promise((n, s) => C.ctx.decodeAudioData(t, n, s)).then((n) => new R(n));
      }
      static fromURL(t) {
        return Jt(t) ? R.fromArrayBuffer(ur(t)) : it(t).then((n) => R.fromArrayBuffer(n));
      }
    }
    __name(R, "R");
    u(R, "SoundData");
    let C = (() => {
      let e = new (window.AudioContext || window.webkitAudioContext)(), t = e.createGain();
      t.connect(e.destination);
      let n = new R(nn(e));
      return e.decodeAudioData(Zt.buffer.slice(0)).then((s) => {
        n.buf = s;
      }).catch((s) => {
        console.error("Failed to load burp: ", s);
      }), { ctx: e, masterNode: t, burpSnd: n };
    })();
    class O {
      constructor(t) {
        __publicField(this, "done", false);
        __publicField(this, "data", null);
        __publicField(this, "error", null);
        __publicField(this, "onLoadEvents", new W());
        __publicField(this, "onErrorEvents", new W());
        __publicField(this, "onFinishEvents", new W());
        t.then((n) => {
          this.data = n, this.onLoadEvents.trigger(n);
        }).catch((n) => {
          if (this.error = n, this.onErrorEvents.numListeners() > 0)
            this.onErrorEvents.trigger(n);
          else
            throw n;
        }).finally(() => {
          this.onFinishEvents.trigger(), this.done = true;
        });
      }
      static loaded(t) {
        let n = new O(Promise.resolve(t));
        return n.data = t, n.done = true, n;
      }
      onLoad(t) {
        return this.onLoadEvents.add(t), this;
      }
      onError(t) {
        return this.onErrorEvents.add(t), this;
      }
      onFinish(t) {
        return this.onFinishEvents.add(t), this;
      }
      then(t) {
        return this.onLoad(t);
      }
      catch(t) {
        return this.onError(t);
      }
      finally(t) {
        return this.onFinish(t);
      }
    }
    __name(O, "O");
    u(O, "Asset");
    class M {
      constructor() {
        __publicField(this, "assets", /* @__PURE__ */ new Map());
        __publicField(this, "lastUID", 0);
      }
      add(t, n) {
        let s = t != null ? t : this.lastUID++ + "", h = new O(n);
        return this.assets.set(s, h), h;
      }
      addLoaded(t, n) {
        let s = t != null ? t : this.lastUID++ + "", h = O.loaded(n);
        this.assets.set(s, h);
      }
      get(t) {
        return this.assets.get(t);
      }
      progress() {
        if (this.assets.size === 0)
          return 1;
        let t = 0;
        return this.assets.forEach((n) => {
          n.done && t++;
        }), t / this.assets.size;
      }
    }
    __name(M, "M");
    u(M, "AssetBucket");
    let U = { urlPrefix: "", sprites: new M(), fonts: new M(), bitmapFonts: new M(), sounds: new M(), shaders: new M(), custom: new M(), loaded: false }, g = { ev: new ue(), objEvents: new ue(), root: Rn([]), gravity: 0, scenes: {}, logs: [], cam: { pos: null, scale: f(1), angle: 0, shake: 0, transform: new A() } };
    function le(e) {
      return U.custom.add(null, e);
    }
    __name(le, "le");
    u(le, "load");
    function I() {
      let e = [U.sprites, U.sounds, U.shaders, U.fonts, U.bitmapFonts, U.custom];
      return e.reduce((t, n) => t + n.progress(), 0) / e.length;
    }
    __name(I, "I");
    u(I, "loadProgress");
    function Y(e) {
      return e !== void 0 && (U.urlPrefix = e), U.urlPrefix;
    }
    __name(Y, "Y");
    u(Y, "loadRoot");
    function Ce(e) {
      let t = U.urlPrefix + e;
      return fetch(t).then((n) => {
        if (!n.ok)
          throw new Error(`Failed to fetch ${t}`);
        return n;
      });
    }
    __name(Ce, "Ce");
    u(Ce, "fetchURL");
    function Te(e) {
      return Ce(e).then((t) => t.json());
    }
    __name(Te, "Te");
    u(Te, "fetchJSON");
    function rt(e) {
      return Ce(e).then((t) => t.text());
    }
    __name(rt, "rt");
    u(rt, "fetchText");
    function it(e) {
      return Ce(e).then((t) => t.arrayBuffer());
    }
    __name(it, "it");
    u(it, "fetchArrayBuffer");
    function Ae(e) {
      let t = new Image();
      return t.crossOrigin = "anonymous", t.src = Jt(e) ? e : U.urlPrefix + e, new Promise((n, s) => {
        t.onload = () => n(t), t.onerror = () => s(new Error(`Failed to load image from "${e}"`));
      });
    }
    __name(Ae, "Ae");
    u(Ae, "loadImg");
    function Et(e, t) {
      let n = new FontFace(e, typeof t == "string" ? `url(${t})` : t);
      return document.fonts.add(n), U.fonts.add(e, n.load().catch(() => {
        throw new Error(`Failed to load font from "${t}"`);
      }));
    }
    __name(Et, "Et");
    u(Et, "loadFont");
    function Oe(e, t, n, s, h = {}) {
      return U.bitmapFonts.add(e, Ae(t).then((o) => {
        var _a;
        return Ir(b.fromImage(o, h), n, s, (_a = h.chars) != null ? _a : wr);
      }));
    }
    __name(Oe, "Oe");
    u(Oe, "loadBitmapFont");
    function Pe(e = 1, t = 1, n = 0, s = 0, h = 1, o = 1) {
      let l = [], d = h / e, m = o / t;
      for (let w = 0; w < t; w++)
        for (let v = 0; v < e; v++)
          l.push(new j(n + v * d, s + w * m, d, m));
      return l;
    }
    __name(Pe, "Pe");
    u(Pe, "slice");
    function rn(e, t) {
      return le(typeof t == "string" ? new Promise((n, s) => {
        Te(t).then((h) => {
          rn(e, h).then(n).catch(s);
        });
      }) : T.from(e).then((n) => {
        let s = {};
        for (let h in t) {
          let o = n.tex.width, l = n.tex.height, d = t[h], m = new T(n.tex, Pe(d.sliceX, d.sliceY, d.x / o, d.y / l, d.width / o, d.height / l), d.anims);
          U.sprites.addLoaded(h, m), s[h] = m;
        }
        return s;
      }));
    }
    __name(rn, "rn");
    u(rn, "loadSpriteAtlas");
    function Re(e, t, n = { sliceX: 1, sliceY: 1, anims: {} }) {
      return U.sprites.add(e, typeof t == "string" ? T.fromURL(t, n) : Promise.resolve(T.fromImage(t, n)));
    }
    __name(Re, "Re");
    u(Re, "loadSprite");
    function Ar(e, t) {
      return U.sprites.add(e, new Promise((n) => __async(this, null, function* () {
        let s = typeof t == "string" ? yield Te(t) : t, h = yield Promise.all(s.frames.map(Ae)), o = document.createElement("canvas");
        o.width = s.width, o.height = s.height * s.frames.length;
        let l = o.getContext("2d");
        h.forEach((m, w) => {
          l.drawImage(m, 0, w * s.height);
        });
        let d = yield Re(null, o, { sliceY: s.frames.length, anims: s.anims });
        n(d);
      })));
    }
    __name(Ar, "Ar");
    u(Ar, "loadPedit");
    function Or(e, t, n) {
      return U.sprites.add(e, new Promise((s) => __async(this, null, function* () {
        let h = yield Re(null, t), o = typeof n == "string" ? yield Te(n) : n, l = o.meta.size;
        h.frames = o.frames.map((d) => new j(d.frame.x / l.w, d.frame.y / l.h, d.frame.w / l.w, d.frame.h / l.h));
        for (let d of o.meta.frameTags)
          d.from === d.to ? h.anims[d.name] = d.from : h.anims[d.name] = { from: d.from, to: d.to, speed: 10, loop: true, pingpong: d.direction === "pingpong" };
        s(h);
      })));
    }
    __name(Or, "Or");
    u(Or, "loadAseprite");
    function Pr(e, t, n, s = false) {
      return U.shaders.add(e, new Promise((h, o) => {
        let l = u((d) => d ? rt(d) : new Promise((m) => m(null)), "resolveUrl");
        if (s)
          Promise.all([l(t), l(n)]).then(([d, m]) => {
            h(xt(d, m));
          }).catch(o);
        else
          try {
            h(xt(t, n));
          } catch (d) {
            o(d);
          }
      }));
    }
    __name(Pr, "Pr");
    u(Pr, "loadShader");
    function Rr(e, t) {
      return U.sounds.add(e, typeof t == "string" ? R.fromURL(t) : R.fromArrayBuffer(t));
    }
    __name(Rr, "Rr");
    u(Rr, "loadSound");
    function Dr(e = "bean") {
      return Re(e, dr);
    }
    __name(Dr, "Dr");
    u(Dr, "loadBean");
    function sn(e) {
      return U.sprites.get(e);
    }
    __name(sn, "sn");
    u(sn, "getSprite");
    function on(e) {
      return U.sounds.get(e);
    }
    __name(on, "on");
    u(on, "getSound");
    function Mr(e) {
      return U.fonts.get(e);
    }
    __name(Mr, "Mr");
    u(Mr, "getFont");
    function an(e) {
      return U.bitmapFonts.get(e);
    }
    __name(an, "an");
    u(an, "getBitmapFont");
    function un(e) {
      return U.shaders.get(e);
    }
    __name(un, "un");
    u(un, "getShader");
    function cn(e) {
      if (typeof e == "string") {
        let t = sn(e);
        if (t)
          return t;
        if (I() < 1)
          return null;
        throw new Error(`Sprite not found: ${e}`);
      } else {
        if (e instanceof T)
          return O.loaded(e);
        if (e instanceof O)
          return e;
        throw new Error(`Invalid sprite: ${e}`);
      }
    }
    __name(cn, "cn");
    u(cn, "resolveSprite");
    function Fr(e) {
      if (typeof e == "string") {
        let t = on(e);
        if (t)
          return t.data ? t.data : t;
        if (I() < 1)
          return null;
        throw new Error(`Sound not found: ${e}`);
      } else {
        if (e instanceof R)
          return e;
        if (e instanceof O)
          return e.data ? e.data : e;
        throw new Error(`Invalid sound: ${e}`);
      }
    }
    __name(Fr, "Fr");
    u(Fr, "resolveSound");
    function Br(e) {
      if (!e)
        return p.defShader;
      if (typeof e == "string") {
        let t = un(e);
        if (t)
          return t.data ? t.data : t;
        if (I() < 1)
          return null;
        throw new Error(`Shader not found: ${e}`);
      } else if (e instanceof O)
        return e.data ? e.data : e;
      return e;
    }
    __name(Br, "Br");
    u(Br, "resolveShader");
    function ln(e) {
      var _a;
      if (!e)
        return ln((_a = i.font) != null ? _a : Vs);
      if (typeof e == "string") {
        let t = an(e);
        if (t)
          return t.data ? t.data : t;
        if (document.fonts.check(`${Ur}px ${e}`))
          return e;
        if (I() < 1)
          return null;
        throw new Error(`Font not found: ${e}`);
      } else if (e instanceof O)
        return e.data ? e.data : e;
      return e;
    }
    __name(ln, "ln");
    u(ln, "resolveFont");
    function Lr(e) {
      return e !== void 0 && (C.masterNode.gain.value = ne(e, br, vr)), C.masterNode.gain.value;
    }
    __name(Lr, "Lr");
    u(Lr, "volume");
    function Ye(e, t = { loop: false, volume: 1, speed: 1, detune: 0, seek: 0 }) {
      var _a;
      let n = Fr(e);
      if (n instanceof O) {
        let y = Ye(new R(nn(C.ctx))), L = u((P) => {
          let q = Ye(P, t);
          for (let z2 in q)
            y[z2] = q[z2];
        }, "doPlay");
        return n.onLoad(L), y;
      } else if (n === null) {
        let y = Ye(new R(nn(C.ctx)));
        return Nt(() => {
        }), y;
      }
      let s = C.ctx, h = false, o = s.createBufferSource();
      o.buffer = n.buf, o.loop = !!t.loop;
      let l = s.createGain();
      o.connect(l), l.connect(C.masterNode);
      let d = (_a = t.seek) != null ? _a : 0;
      o.start(0, d);
      let m = s.currentTime - d, w = null, v = { stop() {
        h || (this.pause(), m = s.currentTime);
      }, play(y) {
        if (!h)
          return;
        let L = o;
        o = s.createBufferSource(), o.buffer = L.buffer, o.loop = L.loop, o.playbackRate.value = L.playbackRate.value, o.detune && (o.detune.value = L.detune.value), o.connect(l);
        let P = y != null ? y : this.time();
        o.start(0, P), m = s.currentTime - P, h = false, w = null;
      }, pause() {
        h || (o.stop(), h = true, w = s.currentTime);
      }, isPaused() {
        return h;
      }, isStopped() {
        return h;
      }, speed(y) {
        return y !== void 0 && (o.playbackRate.value = ne(y, Fs, Bs)), o.playbackRate.value;
      }, detune(y) {
        return o.detune ? (y !== void 0 && (o.detune.value = ne(y, Ls, Is)), o.detune.value) : 0;
      }, volume(y) {
        return y !== void 0 && (l.gain.value = ne(y, br, vr)), l.gain.value;
      }, loop() {
        o.loop = true;
      }, unloop() {
        o.loop = false;
      }, duration() {
        return n.buf.duration;
      }, time() {
        return h ? w - m : s.currentTime - m;
      } };
      return v.speed(t.speed), v.detune(t.detune), v.volume(t.volume), v;
    }
    __name(Ye, "Ye");
    u(Ye, "play");
    function hn(e) {
      return Ye(C.burpSnd, e);
    }
    __name(hn, "hn");
    u(hn, "burp");
    function xt(e = Wt, t = en) {
      let n = js.replace("{{user}}", e != null ? e : Wt), s = _s.replace("{{user}}", t != null ? t : en), h = c.createShader(c.VERTEX_SHADER), o = c.createShader(c.FRAGMENT_SHADER);
      c.shaderSource(h, n), c.shaderSource(o, s), c.compileShader(h), c.compileShader(o);
      let l = c.createProgram();
      if (r.push(() => c.deleteProgram(l)), c.attachShader(l, h), c.attachShader(l, o), c.bindAttribLocation(l, 0, "a_pos"), c.bindAttribLocation(l, 1, "a_uv"), c.bindAttribLocation(l, 2, "a_color"), c.linkProgram(l), !c.getProgramParameter(l, c.LINK_STATUS)) {
        let d = u((y) => {
          let L = new RegExp("^ERROR:\\s0:(?<line>\\d+):\\s(?<msg>.+)"), P = y.match(L);
          return { line: Number(P.groups.line), msg: P.groups.msg.replace(/\n\0$/, "") };
        }, "formatShaderError"), m = c.getShaderInfoLog(h), w = c.getShaderInfoLog(o), v = "";
        if (m) {
          let y = d(m);
          v += `Vertex shader line ${y.line - 14}: ${y.msg}`;
        }
        if (w) {
          let y = d(w);
          v += `Fragment shader line ${y.line - 14}: ${y.msg}`;
        }
        throw new Error(v);
      }
      return c.deleteShader(h), c.deleteShader(o), { bind() {
        c.useProgram(l);
      }, unbind() {
        c.useProgram(null);
      }, free() {
        c.deleteProgram(l);
      }, send(d) {
        for (let m in d) {
          let w = d[m], v = c.getUniformLocation(l, m);
          typeof w == "number" ? c.uniform1f(v, w) : w instanceof A ? c.uniformMatrix4fv(v, false, new Float32Array(w.m)) : w instanceof x ? c.uniform3f(v, w.r, w.g, w.b) : w instanceof _e ? c.uniform3f(v, w.x, w.y, w.z) : w instanceof D && c.uniform2f(v, w.x, w.y);
        }
      } };
    }
    __name(xt, "xt");
    u(xt, "makeShader");
    function Ir(e, t, n, s) {
      let h = e.width / t, o = {}, l = s.split("").entries();
      for (let [d, m] of l)
        o[m] = new j(d % h * t, Math.floor(d / h) * n, t, n);
      return { tex: e, map: o, size: n };
    }
    __name(Ir, "Ir");
    u(Ir, "makeFont");
    function St(e, t, n, s = p.defTex, h = p.defShader, o = {}) {
      let l = Br(h);
      if (!(!l || l instanceof O)) {
        (s !== p.curTex || l !== p.curShader || !Xt(p.curUniform, o) || p.vqueue.length + e.length * Ut > xr || p.iqueue.length + t.length > Sr) && he();
        for (let d of e) {
          let m = n ? p.transform : g.cam.transform.mult(p.transform), w = Nr(m.multVec2(d.pos.xy()));
          p.vqueue.push(w.x, w.y, d.pos.z, d.uv.x, d.uv.y, d.color.r / 255, d.color.g / 255, d.color.b / 255, d.opacity);
        }
        for (let d of t)
          p.iqueue.push(d + p.vqueue.length / Ut - e.length);
        p.curTex = s, p.curShader = l, p.curUniform = o;
      }
    }
    __name(St, "St");
    u(St, "drawRaw");
    function he() {
      !p.curTex || !p.curShader || p.vqueue.length === 0 || p.iqueue.length === 0 || (c.bindBuffer(c.ARRAY_BUFFER, p.vbuf), c.bufferSubData(c.ARRAY_BUFFER, 0, new Float32Array(p.vqueue)), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, p.ibuf), c.bufferSubData(c.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(p.iqueue)), p.curShader.bind(), p.curShader.send(p.curUniform), p.curTex.bind(), c.drawElements(c.TRIANGLES, p.iqueue.length, c.UNSIGNED_SHORT, 0), p.curTex.unbind(), p.curShader.unbind(), c.bindBuffer(c.ARRAY_BUFFER, null), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null), p.vqueue = [], p.iqueue = [], p.drawCalls++);
    }
    __name(he, "he");
    u(he, "flush");
    function Vr() {
      Xr(), c.clear(c.COLOR_BUFFER_BIT), i.background || ce(() => {
        Me({ width: _(), height: B(), quad: new j(0, 0, _() / yr, B() / yr), tex: p.bgTex, fixed: true });
      }), p.drawCalls = 0, p.transformStack = [], p.transform = new A();
    }
    __name(Vr, "Vr");
    u(Vr, "frameStart");
    function Gr() {
      he(), p.lastDrawCalls = p.drawCalls;
    }
    __name(Gr, "Gr");
    u(Gr, "frameEnd");
    function Nr(e) {
      return f(e.x / _() * 2 - 1, -e.y / B() * 2 + 1);
    }
    __name(Nr, "Nr");
    u(Nr, "screen2ndc");
    function jr(e) {
      p.transform = e.clone();
    }
    __name(jr, "jr");
    u(jr, "pushMatrix");
    function V(...e) {
      if (e[0] === void 0)
        return;
      let t = f(...e);
      t.x === 0 && t.y === 0 || (p.transform = p.transform.translate(t));
    }
    __name(V, "V");
    u(V, "pushTranslate");
    function De(...e) {
      if (e[0] === void 0)
        return;
      let t = f(...e);
      t.x === 1 && t.y === 1 || (p.transform = p.transform.scale(t));
    }
    __name(De, "De");
    u(De, "pushScale");
    function _r(e) {
      !e || (p.transform = p.transform.rotateX(e));
    }
    __name(_r, "_r");
    u(_r, "pushRotateX");
    function kr(e) {
      !e || (p.transform = p.transform.rotateY(e));
    }
    __name(kr, "kr");
    u(kr, "pushRotateY");
    function be(e) {
      !e || (p.transform = p.transform.rotateZ(e));
    }
    __name(be, "be");
    u(be, "pushRotateZ");
    let qr = be;
    function ee() {
      p.transformStack.push(p.transform.clone());
    }
    __name(ee, "ee");
    u(ee, "pushTransform");
    function X() {
      p.transformStack.length > 0 && (p.transform = p.transformStack.pop());
    }
    __name(X, "X");
    u(X, "popTransform");
    function Me(e) {
      var _a;
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let t = e.width, n = e.height, h = nt(e.anchor || bt).scale(f(t, n).scale(-0.5)), o = e.quad || new j(0, 0, 1, 1), l = e.color || E(255, 255, 255), d = (_a = e.opacity) != null ? _a : 1, m = e.tex ? Er / e.tex.width : 0, w = e.tex ? Er / e.tex.height : 0, v = o.x + m, y = o.y + w, L = o.w - m * 2, P = o.h - w * 2;
      ee(), V(e.pos), be(e.angle), De(e.scale), V(h), St([{ pos: ge(-t / 2, n / 2, 0), uv: f(e.flipX ? v + L : v, e.flipY ? y : y + P), color: l, opacity: d }, { pos: ge(-t / 2, -n / 2, 0), uv: f(e.flipX ? v + L : v, e.flipY ? y + P : y), color: l, opacity: d }, { pos: ge(t / 2, -n / 2, 0), uv: f(e.flipX ? v : v + L, e.flipY ? y + P : y), color: l, opacity: d }, { pos: ge(t / 2, n / 2, 0), uv: f(e.flipX ? v : v + L, e.flipY ? y : y + P), color: l, opacity: d }], [0, 1, 3, 1, 2, 3], e.fixed, e.tex, e.shader, e.uniform), X();
    }
    __name(Me, "Me");
    u(Me, "drawUVQuad");
    function zr(e) {
      var _a;
      if (!e.tex)
        throw new Error('drawTexture() requires property "tex".');
      let t = (_a = e.quad) != null ? _a : new j(0, 0, 1, 1), n = e.tex.width * t.w, s = e.tex.height * t.h, h = f(1);
      if (e.tiled) {
        let o = Math.ceil((e.width || n) / n), l = Math.ceil((e.height || s) / s), m = nt(e.anchor || bt).add(f(1, 1)).scale(0.5).scale(o * n, l * s);
        for (let w = 0; w < o; w++)
          for (let v = 0; v < l; v++)
            Me(__spreadProps(__spreadValues({}, e), { pos: (e.pos || f(0)).add(f(n * w, s * v)).sub(m), scale: h.scale(e.scale || f(1)), tex: e.tex, quad: t, width: n, height: s, anchor: "topleft" }));
      } else
        e.width && e.height ? (h.x = e.width / n, h.y = e.height / s) : e.width ? (h.x = e.width / n, h.y = h.x) : e.height && (h.y = e.height / s, h.x = h.y), Me(__spreadProps(__spreadValues({}, e), { scale: h.scale(e.scale || f(1)), tex: e.tex, quad: t, width: n, height: s }));
    }
    __name(zr, "zr");
    u(zr, "drawTexture");
    function dn(e) {
      var _a, _b;
      if (!e.sprite)
        throw new Error('drawSprite() requires property "sprite"');
      let t = cn(e.sprite);
      if (!t || !t.data)
        return;
      let n = t.data.frames[(_a = e.frame) != null ? _a : 0];
      if (!n)
        throw new Error(`Frame not found: ${(_b = e.frame) != null ? _b : 0}`);
      zr(__spreadProps(__spreadValues({}, e), { tex: t.data.tex, quad: n.scale(e.quad || new j(0, 0, 1, 1)) }));
    }
    __name(dn, "dn");
    u(dn, "drawSprite");
    function Xe(e, t, n, s, h, o = 1) {
      s = fe(s % 360), h = fe(h % 360), h <= s && (h += Math.PI * 2);
      let l = Math.ceil(Math.max(Math.sqrt(t + n) * 3 * (o || 1), 16)), d = (h - s) / l, m = [];
      for (let w = s; w < h; w += d)
        m.push(e.add(t * Math.cos(w), n * Math.sin(w)));
      return m.push(e.add(t * Math.cos(h), n * Math.sin(h))), m;
    }
    __name(Xe, "Xe");
    u(Xe, "getArcPts");
    function K(e) {
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let t = e.width, n = e.height, h = nt(e.anchor || bt).add(1, 1).scale(f(t, n).scale(-0.5)), o = [f(0, 0), f(t, 0), f(t, n), f(0, n)];
      if (e.radius) {
        let l = Math.min(Math.min(t, n) / 2, e.radius);
        o = [f(l, 0), f(t - l, 0), ...Xe(f(t - l, l), l, l, 270, 360), f(t, l), f(t, n - l), ...Xe(f(t - l, n - l), l, l, 0, 90), f(t - l, n), f(l, n), ...Xe(f(l, n - l), l, l, 90, 180), f(0, n - l), f(0, l), ...Xe(f(l, l), l, l, 180, 270)];
      }
      ye(__spreadValues(__spreadProps(__spreadValues({}, e), { offset: h, pts: o }), e.gradient ? { colors: e.horizontal ? [e.gradient[0], e.gradient[1], e.gradient[1], e.gradient[0]] : [e.gradient[0], e.gradient[0], e.gradient[1], e.gradient[1]] } : {}));
    }
    __name(K, "K");
    u(K, "drawRect");
    function Ke(e) {
      let { p1: t, p2: n } = e;
      if (!t || !n)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let s = e.width || 1, h = n.sub(t).unit().normal().scale(s * 0.5), o = [t.sub(h), t.add(h), n.add(h), n.sub(h)].map((l) => {
        var _a, _b;
        return { pos: ge(l.x, l.y, 0), uv: f(0), color: (_a = e.color) != null ? _a : x.WHITE, opacity: (_b = e.opacity) != null ? _b : 1 };
      });
      St(o, [0, 1, 3, 1, 2, 3], e.fixed, p.defTex, e.shader, e.uniform);
    }
    __name(Ke, "Ke");
    u(Ke, "drawLine");
    function fn(e) {
      let t = e.pts;
      if (!t)
        throw new Error('drawLines() requires property "pts".');
      if (!(t.length < 2))
        if (e.radius && t.length >= 3) {
          let n = t[0].dist(t[1]);
          for (let h = 1; h < t.length - 1; h++)
            n = Math.min(t[h].dist(t[h + 1]), n);
          let s = Math.min(e.radius, n / 2);
          Ke(__spreadProps(__spreadValues({}, e), { p1: t[0], p2: t[1] }));
          for (let h = 1; h < t.length - 2; h++) {
            let o = t[h], l = t[h + 1];
            Ke(__spreadProps(__spreadValues({}, e), { p1: o, p2: l }));
          }
          Ke(__spreadProps(__spreadValues({}, e), { p1: t[t.length - 2], p2: t[t.length - 1] }));
        } else
          for (let n = 0; n < t.length - 1; n++)
            Ke(__spreadProps(__spreadValues({}, e), { p1: t[n], p2: t[n + 1] })), e.join !== "none" && ve(__spreadProps(__spreadValues({}, e), { pos: t[n], radius: e.width / 2 }));
    }
    __name(fn, "fn");
    u(fn, "drawLines");
    function mn(e) {
      if (!e.p1 || !e.p2 || !e.p3)
        throw new Error('drawPolygon() requires properties "p1", "p2" and "p3".');
      return ye(__spreadProps(__spreadValues({}, e), { pts: [e.p1, e.p2, e.p3] }));
    }
    __name(mn, "mn");
    u(mn, "drawTriangle");
    function ve(e) {
      if (!e.radius)
        throw new Error('drawCircle() requires property "radius".');
      e.radius !== 0 && pn(__spreadProps(__spreadValues({}, e), { radiusX: e.radius, radiusY: e.radius, angle: 0 }));
    }
    __name(ve, "ve");
    u(ve, "drawCircle");
    function pn(e) {
      var _a, _b;
      if (e.radiusX === void 0 || e.radiusY === void 0)
        throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
      if (e.radiusX === 0 || e.radiusY === 0)
        return;
      let t = (_a = e.start) != null ? _a : 0, n = (_b = e.end) != null ? _b : 360, s = Xe(f(0), e.radiusX, e.radiusY, t, n, e.resolution);
      s.unshift(f(0));
      let h = __spreadValues(__spreadProps(__spreadValues({}, e), { pts: s, radius: 0 }), e.gradient ? { colors: [e.gradient[0], ...Array(s.length - 1).fill(e.gradient[1])] } : {});
      if (n - t >= 360 && e.outline) {
        e.fill !== false && ye(__spreadProps(__spreadValues({}, h), { outline: null })), ye(__spreadProps(__spreadValues({}, h), { pts: s.slice(1), fill: false }));
        return;
      }
      ye(h);
    }
    __name(pn, "pn");
    u(pn, "drawEllipse");
    function ye(e) {
      var _a, _b;
      if (!e.pts)
        throw new Error('drawPolygon() requires property "pts".');
      let t = e.pts.length;
      if (!(t < 3)) {
        if (ee(), V(e.pos), De(e.scale), be(e.angle), V(e.offset), e.fill !== false) {
          let n = (_a = e.color) != null ? _a : x.WHITE, s = e.pts.map((o, l) => {
            var _a2, _b2;
            return { pos: ge(o.x, o.y, 0), uv: f(0, 0), color: e.colors ? (_a2 = e.colors[l]) != null ? _a2 : n : n, opacity: (_b2 = e.opacity) != null ? _b2 : 1 };
          }), h = [...Array(t - 2).keys()].map((o) => [0, o + 1, o + 2]).flat();
          St(s, (_b = e.indices) != null ? _b : h, e.fixed, p.defTex, e.shader, e.uniform);
        }
        e.outline && fn({ pts: [...e.pts, e.pts[0]], radius: e.radius, width: e.outline.width, color: e.outline.color, join: e.outline.join, uniform: e.uniform, fixed: e.fixed, opacity: e.opacity }), X();
      }
    }
    __name(ye, "ye");
    u(ye, "drawPolygon");
    function gn(e, t, n) {
      he(), c.clear(c.STENCIL_BUFFER_BIT), c.enable(c.STENCIL_TEST), c.stencilFunc(c.NEVER, 1, 255), c.stencilOp(c.REPLACE, c.REPLACE, c.REPLACE), t(), he(), c.stencilFunc(n, 1, 255), c.stencilOp(c.KEEP, c.KEEP, c.KEEP), e(), he(), c.disable(c.STENCIL_TEST);
    }
    __name(gn, "gn");
    u(gn, "drawStenciled");
    function Hr(e, t) {
      gn(e, t, c.EQUAL);
    }
    __name(Hr, "Hr");
    u(Hr, "drawMasked");
    function $r(e, t) {
      gn(e, t, c.NOTEQUAL);
    }
    __name($r, "$r");
    u($r, "drawSubtracted");
    function wn() {
      return (p.viewport.width + p.viewport.height) / (p.width + p.height);
    }
    __name(wn, "wn");
    u(wn, "getViewportScale");
    function ce(e) {
      he();
      let t = p.width, n = p.height;
      p.width = p.viewport.width, p.height = p.viewport.height, e(), he(), p.width = t, p.height = n;
    }
    __name(ce, "ce");
    u(ce, "drawUnscaled");
    function bn(e, t) {
      t.pos && (e.pos = e.pos.add(t.pos)), t.scale && (e.scale = e.scale.scale(f(t.scale))), t.angle && (e.angle += t.angle), t.color && (e.color = e.color.mult(t.color)), t.opacity && (e.opacity *= t.opacity);
    }
    __name(bn, "bn");
    u(bn, "applyCharTransform");
    let vn = new RegExp("\\[(?<text>[^\\]]*)\\]\\.(?<style>[\\w\\.]+)+", "g");
    function Yr(e) {
      let t = {}, n = e.replace(vn, "$1"), s = 0;
      for (let h of e.matchAll(vn)) {
        let o = h.groups.style.split("."), l = h.index - s;
        for (let d = l; d < h.index + h.groups.text.length; d++)
          t[d] = { localIdx: d - l, styles: o };
        s += 3 + h.groups.style.length;
      }
      return { charStyleMap: t, text: n };
    }
    __name(Yr, "Yr");
    u(Yr, "compileStyledText");
    let Ct = {};
    function Ue(e) {
      var _a, _b, _c, _d, _e2, _f, _g;
      if (e.text === void 0)
        throw new Error('formatText() requires property "text".');
      let t = ln(e.font);
      if (e.text === "" || t instanceof O || !t)
        return { width: 0, height: 0, chars: [], opt: e };
      let { charStyleMap: n, text: s } = Yr(e.text + ""), h = s.split("");
      if (t instanceof FontFace || typeof t == "string") {
        let k = t instanceof FontFace ? t.family : t, S = (_a = Ct[k]) != null ? _a : { font: { tex: new b(yt, yt, { filter: "linear" }), map: {}, size: Ur }, cursor: f(0) };
        Ct[k] || (Ct[k] = S), t = S.font;
        for (let N of h)
          if (!S.font.map[N]) {
            let re = a.canvas2.getContext("2d");
            re.font = `${t.size}px ${k}`, re.clearRect(0, 0, a.canvas2.width, a.canvas2.height), re.textBaseline = "top", re.textAlign = "left", re.fillStyle = "rgb(255, 255, 255)", re.fillText(N, 0, 0);
            let et = re.measureText(N), Ge = Math.ceil(et.width), Ne = re.getImageData(0, 0, Ge, t.size);
            if (S.cursor.x + Ge > yt && (S.cursor.x = 0, S.cursor.y += t.size, S.cursor.y > yt))
              throw new Error("Font atlas exceeds character limit");
            t.tex.update(S.cursor.x, S.cursor.y, Ne), t.map[N] = new j(S.cursor.x, S.cursor.y, Ge, t.size), S.cursor.x += Ge;
          }
      }
      let o = e.size || t.size, l = f((_b = e.scale) != null ? _b : 1).scale(o / t.size), d = (_c = e.lineSpacing) != null ? _c : 0, m = (_d = e.letterSpacing) != null ? _d : 0, w = 0, v = 0, y = 0, L = [], P = [], q = 0, z2 = null, xe = null;
      for (; q < h.length; ) {
        let k = h[q];
        if (k === `
`)
          y += o + d, L.push({ width: w - m, chars: P }), z2 = null, xe = null, w = 0, P = [];
        else {
          let S = t.map[k];
          if (S) {
            let N = S.w * l.x;
            e.width && w + N > e.width && (y += o + d, z2 != null && (q -= P.length - z2, k = h[q], S = t.map[k], N = S.w * l.x, P = P.slice(0, z2 - 1), w = xe), z2 = null, xe = null, L.push({ width: w - m, chars: P }), w = 0, P = []), P.push({ tex: t.tex, width: S.w, height: S.h, quad: new j(S.x / t.tex.width, S.y / t.tex.height, S.w / t.tex.width, S.h / t.tex.height), ch: k, pos: f(w, y), opacity: (_e2 = e.opacity) != null ? _e2 : 1, color: (_f = e.color) != null ? _f : x.WHITE, scale: f(l), angle: 0 }), k === " " && (z2 = P.length, xe = w), w += N, v = Math.max(v, w), w += m;
          }
        }
        q++;
      }
      L.push({ width: w - m, chars: P }), y += o, e.width && (v = e.width);
      let J = [];
      for (let k of L) {
        let S = (v - k.width) * Ys((_g = e.align) != null ? _g : "left");
        for (let N of k.chars) {
          let re = t.map[N.ch], et = J.length, Ge = new D(re.w * l.x * 0.5, re.h * l.y * 0.5);
          if (N.pos = N.pos.add(S, 0).add(Ge), e.transform) {
            let Ne = typeof e.transform == "function" ? e.transform(et, N.ch) : e.transform;
            Ne && bn(N, Ne);
          }
          if (n[et]) {
            let { styles: Ne, localIdx: gs } = n[et];
            for (let ws of Ne) {
              let kt = e.styles[ws], $n = typeof kt == "function" ? kt(gs, N.ch) : kt;
              $n && bn(N, $n);
            }
          }
          J.push(N);
        }
      }
      return { width: v, height: y, chars: J, opt: e };
    }
    __name(Ue, "Ue");
    u(Ue, "formatText");
    function st(e) {
      Ee(Ue(e));
    }
    __name(st, "st");
    u(st, "drawText");
    function Ee(e) {
      var _a;
      ee(), V(e.opt.pos), be(e.opt.angle), V(nt((_a = e.opt.anchor) != null ? _a : "topleft").add(1, 1).scale(e.width, e.height).scale(-0.5)), e.chars.forEach((t) => {
        Me({ tex: t.tex, width: t.width, height: t.height, pos: t.pos, scale: t.scale, angle: t.angle, color: t.color, opacity: t.opacity, quad: t.quad, anchor: "center", uniform: e.opt.uniform, shader: e.opt.shader, fixed: e.opt.fixed });
      }), X();
    }
    __name(Ee, "Ee");
    u(Ee, "drawFormattedText");
    function Xr() {
      var _a;
      if (a.stretchToParent && !Mt()) {
        let h = a.canvas.parentElement.offsetWidth, o = a.canvas.parentElement.offsetHeight;
        if (h !== a.lastParentWidth || o !== a.lastParentHeight) {
          a.canvas.width = h * a.pixelDensity, a.canvas.height = o * a.pixelDensity, a.canvas.style.width = h + "px", a.canvas.style.height = o + "px";
          let l = _(), d = B();
          g.ev.onOnce("frameEnd", () => {
            g.ev.trigger("resize", l, d, _(), B());
          });
        }
        a.lastParentWidth = h, a.lastParentHeight = o;
      }
      let e = a.pixelDensity, t = c.drawingBufferWidth / e, n = c.drawingBufferHeight / e;
      if (Mt()) {
        let h = window.innerWidth, o = window.innerHeight, l = h / o, d = t / n;
        if (l > d) {
          let m = window.innerHeight * d;
          p.viewport = { x: (h - m) / 2, y: 0, width: m, height: o };
        } else {
          let m = window.innerWidth / d;
          p.viewport = { x: 0, y: (o - m) / 2, width: h, height: m };
        }
        return;
      }
      if (i.letterbox) {
        if (!i.width || !i.height)
          throw new Error("Letterboxing requires width and height defined.");
        let h = t / n, o = i.width / i.height;
        if (h > o) {
          i.stretch || (p.width = n * o, p.height = n);
          let l = n * o, d = n, m = (t - l) / 2;
          c.scissor(m * e, 0, l * e, d * e), c.viewport(m * e, 0, l * e, n * e), p.viewport = { x: m, y: 0, width: l, height: n };
        } else {
          i.stretch || (p.width = t, p.height = t / o);
          let l = t, d = t / o, m = (n - d) / 2;
          c.scissor(0, m * e, l * e, d * e), c.viewport(0, m * e, t * e, d * e), p.viewport = { x: 0, y: m, width: t, height: d };
        }
        return;
      }
      if (i.stretch) {
        if (!i.width || !i.height)
          throw new Error("Stretching requires width and height defined.");
        c.viewport(0, 0, t * e, n * e), p.viewport = { x: 0, y: 0, width: t, height: n };
        return;
      }
      let s = (_a = i.scale) != null ? _a : 1;
      p.width = t / s, p.height = n / s, c.viewport(0, 0, t * e, n * e), p.viewport = { x: 0, y: 0, width: t, height: n };
    }
    __name(Xr, "Xr");
    u(Xr, "updateViewport");
    function _() {
      return p.width;
    }
    __name(_, "_");
    u(_, "width");
    function B() {
      return p.height;
    }
    __name(B, "B");
    u(B, "height");
    let $ = {}, Qe = {}, Fe = {};
    function ot(e) {
      return f((e.x - p.viewport.x) * _() / p.viewport.width, (e.y - p.viewport.y) * B() / p.viewport.height);
    }
    __name(ot, "ot");
    u(ot, "windowToContent");
    function Kr(e) {
      return f(e.x * p.viewport.width / p.width, e.y * p.viewport.height / p.height);
    }
    __name(Kr, "Kr");
    u(Kr, "contentToView");
    function Tt(e, t) {
      let n = ot(f(e, t));
      a.mouseStarted && (a.mouseDeltaPos = n.sub(a.mousePos)), a.mousePos = n, a.mouseStarted = true, a.isMouseMoved = true;
    }
    __name(Tt, "Tt");
    u(Tt, "setMousePos"), $.mousemove = (e) => {
      Tt(e.offsetX, e.offsetY);
    }, $.mousedown = (e) => {
      let t = gr[e.button];
      t && (a.mouseStates[t] = "pressed");
    }, $.mouseup = (e) => {
      let t = gr[e.button];
      t && (a.mouseStates[t] = "released");
    }, $.keydown = (e) => {
      let t = pr[e.key] || e.key.toLowerCase();
      Ms.includes(t) && e.preventDefault(), t.length === 1 && a.charInputted.push(e.key), t === "space" && a.charInputted.push(" "), e.repeat ? (a.isKeyPressedRepeat = true, a.keyStates[t] = "rpressed") : (a.isKeyPressed = true, a.keyStates[t] = "pressed"), a.numKeyDown++;
    }, $.keyup = (e) => {
      let t = pr[e.key] || e.key.toLowerCase();
      a.keyStates[t] = "released", a.isKeyReleased = true, a.numKeyDown--;
    }, $.touchstart = (e) => {
      e.preventDefault();
      let t = [...e.changedTouches];
      t.forEach((n) => {
        g.ev.trigger("onTouchStart", ot(f(n.clientX, n.clientY)), n);
      }), i.touchToMouse !== false && (Tt(t[0].clientX, t[0].clientY), a.mouseStates.left = "pressed");
    }, $.touchmove = (e) => {
      e.preventDefault();
      let t = [...e.changedTouches];
      t.forEach((n) => {
        g.ev.trigger("onTouchMove", ot(f(n.clientX, n.clientY)), n);
      }), i.touchToMouse !== false && Tt(t[0].clientX, t[0].clientY);
    }, $.touchend = (e) => {
      [...e.changedTouches].forEach((n) => {
        g.ev.trigger("onTouchEnd", ot(f(n.clientX, n.clientY)), n);
      }), i.touchToMouse !== false && (a.mouseStates.left = "released");
    }, $.touchcancel = () => {
      i.touchToMouse !== false && (a.mouseStates.left = "released");
    }, $.contextmenu = function(e) {
      e.preventDefault();
    }, Qe.visibilitychange = () => {
      switch (document.visibilityState) {
        case "visible":
          a.skipTime = true, F.paused || C.ctx.resume();
          break;
        case "hidden":
          C.ctx.suspend();
          break;
      }
    }, Fe.error = (e) => {
      e.error ? jt(e.error) : jt(new Error(e.message));
    }, Fe.unhandledrejection = (e) => jt(e.reason);
    for (let e in $)
      a.canvas.addEventListener(e, $[e]);
    for (let e in Qe)
      document.addEventListener(e, Qe[e]);
    for (let e in Fe)
      window.addEventListener(e, Fe[e]);
    function te() {
      return a.mousePos.clone();
    }
    __name(te, "te");
    u(te, "mousePos");
    function yn() {
      return a.mouseDeltaPos.clone();
    }
    __name(yn, "yn");
    u(yn, "mouseDeltaPos");
    function Be(e = "left") {
      return a.mouseStates[e] === "pressed";
    }
    __name(Be, "Be");
    u(Be, "isMousePressed");
    function At(e = "left") {
      return a.mouseStates[e] === "pressed" || a.mouseStates[e] === "down";
    }
    __name(At, "At");
    u(At, "isMouseDown");
    function Je(e = "left") {
      return a.mouseStates[e] === "released";
    }
    __name(Je, "Je");
    u(Je, "isMouseReleased");
    function Un() {
      return a.isMouseMoved;
    }
    __name(Un, "Un");
    u(Un, "isMouseMoved");
    function Ot(e) {
      return e === void 0 ? a.isKeyPressed : a.keyStates[e] === "pressed";
    }
    __name(Ot, "Ot");
    u(Ot, "isKeyPressed");
    function Pt(e) {
      return e === void 0 ? a.isKeyPressedRepeat : a.keyStates[e] === "pressed" || a.keyStates[e] === "rpressed";
    }
    __name(Pt, "Pt");
    u(Pt, "isKeyPressedRepeat");
    function En(e) {
      return e === void 0 ? a.numKeyDown > 0 : a.keyStates[e] === "pressed" || a.keyStates[e] === "rpressed" || a.keyStates[e] === "down";
    }
    __name(En, "En");
    u(En, "isKeyDown");
    function Rt(e) {
      return e === void 0 ? a.isKeyReleased : a.keyStates[e] === "released";
    }
    __name(Rt, "Rt");
    u(Rt, "isKeyReleased");
    function xn(e) {
      return a.virtualButtonStates[e] === "pressed";
    }
    __name(xn, "xn");
    u(xn, "isVirtualButtonPressed");
    function Sn(e) {
      return a.virtualButtonStates[e] === "pressed" || a.virtualButtonStates[e] === "down";
    }
    __name(Sn, "Sn");
    u(Sn, "isVirtualButtonDown");
    function Cn(e) {
      return a.virtualButtonStates[e] === "released";
    }
    __name(Cn, "Cn");
    u(Cn, "isVirtualButtonReleased");
    function Qr() {
      return [...a.charInputted];
    }
    __name(Qr, "Qr");
    u(Qr, "charInputted");
    function Dt() {
      return a.time;
    }
    __name(Dt, "Dt");
    u(Dt, "time");
    function Jr() {
      return a.canvas.toDataURL();
    }
    __name(Jr, "Jr");
    u(Jr, "screenshot");
    function Tn(e) {
      return e && (a.canvas.style.cursor = e), a.canvas.style.cursor;
    }
    __name(Tn, "Tn");
    u(Tn, "setCursor");
    function Zr(e = true) {
      e ? zs(a.canvas) : Hs();
    }
    __name(Zr, "Zr");
    u(Zr, "setFullscreen");
    function Mt() {
      return Boolean($s());
    }
    __name(Mt, "Mt");
    u(Mt, "isFullscreen");
    function An() {
      return a.isTouchScreen;
    }
    __name(An, "An");
    u(An, "isTouchScreen");
    let F = { inspect: false, timeScale: 1, showLog: true, fps: () => a.fpsCounter.fps, numFrames: () => a.numFrames, stepFrame: qn, drawCalls: () => p.drawCalls, clearLog: () => g.logs = [], log: (e) => {
      var _a;
      let t = (_a = i.logMax) != null ? _a : Ns;
      g.logs.unshift(`${`[${Dt().toFixed(2)}].time `}[${(e == null ? void 0 : e.toString) ? e.toString() : e}].${e instanceof Error ? "error" : "info"}`), g.logs.length > t && (g.logs = g.logs.slice(0, t));
    }, error: (e) => F.log(new Error(e.toString ? e.toString() : e)), curRecording: null, get paused() {
      return a.paused;
    }, set paused(e) {
      a.paused = e, e ? C.ctx.suspend() : C.ctx.resume();
    } };
    function Q() {
      return a.dt * F.timeScale;
    }
    __name(Q, "Q");
    u(Q, "dt");
    function Wr(...e) {
      return e.length > 0 && (g.cam.pos = f(...e)), g.cam.pos ? g.cam.pos.clone() : dt2();
    }
    __name(Wr, "Wr");
    u(Wr, "camPos");
    function ei(...e) {
      return e.length > 0 && (g.cam.scale = f(...e)), g.cam.scale.clone();
    }
    __name(ei, "ei");
    u(ei, "camScale");
    function ti(e) {
      return e !== void 0 && (g.cam.angle = e), g.cam.angle;
    }
    __name(ti, "ti");
    u(ti, "camRot");
    function ni(e = 12) {
      g.cam.shake = e;
    }
    __name(ni, "ni");
    u(ni, "shake");
    function Ft(e) {
      return g.cam.transform.multVec2(e);
    }
    __name(Ft, "Ft");
    u(Ft, "toScreen");
    function On(e) {
      return g.cam.transform.invert().multVec2(e);
    }
    __name(On, "On");
    u(On, "toWorld");
    function Pn(e) {
      let t = new A();
      return e.pos && (t = t.translate(e.pos)), e.scale && (t = t.scale(e.scale)), e.angle && (t = t.rotateZ(e.angle)), e.parent ? t.mult(e.parent.transform) : t;
    }
    __name(Pn, "Pn");
    u(Pn, "calcTransform");
    function Rn(e) {
      let t = /* @__PURE__ */ new Map(), n = {}, s = new ue(), h = { id: lr(), hidden: false, paused: false, transform: new A(), children: [], parent: null, add(o) {
        let l = (() => {
          if (Array.isArray(o))
            return Rn(o);
          if (o.parent)
            throw new Error("Cannot add a game obj that already has a parent.");
          return o;
        })();
        return l.parent = this, l.transform = Pn(l), this.children.push(l), l.trigger("add", this), g.ev.trigger("add", this), l;
      }, readd(o) {
        let l = this.children.indexOf(o);
        return l !== -1 && (this.children.splice(l, 1), this.children.push(o)), o;
      }, remove(o) {
        let l = this.children.indexOf(o);
        l !== -1 && (o.parent = null, o.trigger("destroy"), g.ev.trigger("destroy", o), this.children.splice(l, 1));
      }, removeAll(o) {
        this.get(o).forEach((l) => this.remove(l));
      }, update() {
        this.paused || (this.get().forEach((o) => o.update()), this.trigger("update"));
      }, draw() {
        this.hidden || (ee(), V(this.pos), De(this.scale), be(this.angle), this.trigger("draw"), this.get().forEach((o) => o.draw()), X());
      }, drawInspect() {
        this.hidden || (ee(), V(this.pos), De(this.scale), be(this.angle), this.get().forEach((o) => o.drawInspect()), this.trigger("drawInspect"), X());
      }, use(o) {
        if (!o)
          return;
        if (typeof o == "string")
          return this.use({ id: o });
        o.id && (this.unuse(o.id), t.set(o.id, { cleanups: [] }));
        let l = o.id ? t.get(o.id) : n, d = o.id ? l.cleanups : [], m = u(() => {
          if (o.require) {
            for (let w of o.require)
              if (!this.c(w))
                throw new Error(`Component "${o.id}" requires component "${w}"`);
          }
        }, "checkDeps");
        o.destroy && d.push(o.destroy), o.require && !this.exists() && l.cleanups && d.push(this.on("add", m));
        for (let w in o)
          if (!ks.has(w)) {
            if (typeof o[w] == "function") {
              let v = o[w].bind(this);
              if (qs.has(w)) {
                d.push(this.on(w, v)), l[w] = v;
                continue;
              } else
                l[w] = v;
            } else
              l[w] = o[w];
            if (this[w] === void 0)
              Object.defineProperty(this, w, { get: () => l[w], set: (v) => l[w] = v, configurable: true, enumerable: true });
            else
              throw new Error(`Duplicate component property: "${w}"`);
          }
        this.exists() && (m(), o.add && o.add.call(this));
      }, unuse(o) {
        if (t.has(o)) {
          let l = t.get(o);
          l.cleanups.forEach((d) => d.cancel());
          for (let d in l)
            delete l[d];
        }
        t.delete(o);
      }, c(o) {
        return t.get(o);
      }, get(o) {
        return this.children.filter((l) => o ? l.is(o) : true).sort((l, d) => {
          var _a, _b;
          return ((_a = l.z) != null ? _a : 0) - ((_b = d.z) != null ? _b : 0);
        });
      }, getAll(o) {
        return this.children.sort((l, d) => {
          var _a, _b;
          return ((_a = l.z) != null ? _a : 0) - ((_b = d.z) != null ? _b : 0);
        }).flatMap((l) => [l, ...l.getAll(o)]).filter((l) => o ? l.is(o) : true);
      }, isAncestorOf(o) {
        return o.parent ? o.parent === this || this.isAncestorOf(o.parent) : false;
      }, exists() {
        return g.root.isAncestorOf(this);
      }, is(o) {
        if (o === "*")
          return true;
        if (Array.isArray(o)) {
          for (let l of o)
            if (!this.c(l))
              return false;
          return true;
        } else
          return this.c(o) != null;
      }, on(o, l) {
        return s.on(o, l.bind(this));
      }, trigger(o, ...l) {
        s.trigger(o, ...l), g.objEvents.trigger(o, this, ...l);
      }, destroy() {
        this.parent && this.parent.remove(this);
      }, inspect() {
        let o = {};
        for (let [l, d] of t)
          o[l] = d.inspect ? d.inspect() : null;
        return o;
      }, onAdd(o) {
        return this.on("add", o);
      }, onUpdate(o) {
        return this.on("update", o);
      }, onDraw(o) {
        return this.on("draw", o);
      }, onDestroy(o) {
        return this.on("destroy", o);
      }, clearEvents() {
        s.clear();
      } };
      for (let o of e)
        h.use(o);
      return h;
    }
    __name(Rn, "Rn");
    u(Rn, "make");
    function Le(e, t, n) {
      return g.objEvents[e] || (g.objEvents[e] = new Se()), g.objEvents.on(e, (s, ...h) => {
        s.is(t) && n(s, ...h);
      });
    }
    __name(Le, "Le");
    u(Le, "on");
    function de(e) {
      return new Promise((t) => {
        let n = e(() => {
          n.cancel(), t();
        });
      });
    }
    __name(de, "de");
    u(de, "promisifyEvent");
    let at = u((e, t) => {
      if (typeof e == "function" && t === void 0) {
        let n = We([{ update: e }]);
        return { get paused() {
          return n.paused;
        }, set paused(s) {
          n.paused = s;
        }, cancel: () => n.destroy() };
      } else {
        if (typeof e == "string")
          return Le("update", e, t);
        if (e === void 0 && t === void 0)
          return de(at);
      }
    }, "onUpdate"), Dn = u((e, t) => {
      if (typeof e == "function" && t === void 0) {
        let n = We([{ draw: e }]);
        return { get paused() {
          return n.hidden;
        }, set paused(s) {
          n.hidden = s;
        }, cancel: () => n.destroy() };
      } else {
        if (typeof e == "string")
          return Le("draw", e, t);
        if (e === void 0 && t === void 0)
          return de(Dn);
      }
    }, "onDraw");
    function Mn(e, t) {
      if (typeof e == "function" && t === void 0)
        return g.ev.on("add", e);
      if (typeof e == "string")
        return Le("add", e, t);
    }
    __name(Mn, "Mn");
    u(Mn, "onAdd");
    function ri(e, t) {
      if (typeof e == "function" && t === void 0)
        return g.ev.on("destroy", e);
      if (typeof e == "string")
        return Le("destroy", e, t);
    }
    __name(ri, "ri");
    u(ri, "onDestroy");
    function ii(e, t, n) {
      return Le("collide", e, (s, h, o) => h.is(t) && n(s, h, o));
    }
    __name(ii, "ii");
    u(ii, "onCollide");
    function ut(e, t) {
      jn(e).forEach(t), Mn(e, t);
    }
    __name(ut, "ut");
    u(ut, "forAllCurrentAndFuture");
    function si(e, t) {
      if (typeof e == "function")
        return Fn(e);
      {
        let n = [];
        return ut(e, (s) => {
          if (!s.area)
            throw new Error("onClick() requires the object to have area() component");
          n.push(s.onClick(() => t(s)));
        }), ct(n);
      }
    }
    __name(si, "si");
    u(si, "onClick");
    function oi(e, t) {
      let n = [];
      return ut(e, (s) => {
        if (!s.area)
          throw new Error("onHover() requires the object to have area() component");
        n.push(s.onHover(() => t(s)));
      }), ct(n);
    }
    __name(oi, "oi");
    u(oi, "onHover");
    function ai(e, t) {
      let n = [];
      return ut(e, (s) => {
        if (!s.area)
          throw new Error("onHoverUpdate() requires the object to have area() component");
        n.push(s.onHoverUpdate(() => t(s)));
      }), ct(n);
    }
    __name(ai, "ai");
    u(ai, "onHoverUpdate");
    function ui(e, t) {
      let n = [];
      return ut(e, (s) => {
        if (!s.area)
          throw new Error("onHoverEnd() requires the object to have area() component");
        n.push(s.onHoverEnd(() => t(s)));
      }), ct(n);
    }
    __name(ui, "ui");
    u(ui, "onHoverEnd");
    function Bt(e, t) {
      let n = 0, s = [];
      t && s.push(t);
      let h = at(() => {
        n += Q(), n >= e && (h.cancel(), s.forEach((o) => o()));
      });
      return { paused: h.paused, cancel: h.cancel, onFinish(o) {
        s.push(o);
      }, then(o) {
        return this.onFinish(o), this;
      } };
    }
    __name(Bt, "Bt");
    u(Bt, "wait");
    function ci(e, t) {
      let n = null, s = u(() => {
        t(), n = Bt(e, s);
      }, "newF");
      return s(), { get paused() {
        return n.paused;
      }, set paused(h) {
        n.paused = h;
      }, cancel: () => n.cancel() };
    }
    __name(ci, "ci");
    u(ci, "loop");
    function ct(e) {
      return { get paused() {
        return e[0].paused;
      }, set paused(t) {
        e.forEach((n) => n.paused = t);
      }, cancel: () => e.forEach((t) => t.cancel()) };
    }
    __name(ct, "ct");
    u(ct, "joinEventControllers");
    function li(e, t) {
      return g.ev.on("input", () => En(e) && t());
    }
    __name(li, "li");
    u(li, "onKeyDown");
    let se = u((e, t) => {
      if (typeof e == "function")
        return g.ev.on("input", () => Ot() && e());
      if (typeof e == "string" && typeof t == "function")
        return g.ev.on("input", () => Ot(e) && t(e));
      if (typeof e == "string" && t === void 0)
        return de(se.bind(void 0, e));
      if (typeof e === void 0 && t === void 0)
        return de(se);
    }, "onKeyPress"), Lt = u((e, t) => {
      if (typeof e == "function")
        return g.ev.on("input", () => Pt() && e());
      if (typeof e == "string" && typeof t == "function")
        return g.ev.on("input", () => Pt(e) && t(e));
      if (typeof e == "string" && t === void 0)
        return de(Lt.bind(void 0, e));
      if (typeof e === void 0 && t === void 0)
        return de(Lt);
    }, "onKeyPressRepeat"), It = u((e, t) => {
      if (typeof e == "function")
        return g.ev.on("input", () => Rt() && e());
      if (typeof e == "string" && typeof t == "function")
        return g.ev.on("input", () => Rt(e) && t(e));
      if (typeof e == "string" && t === void 0)
        return de(It.bind(void 0, e));
      if (typeof e === void 0 && t === void 0)
        return de(It);
    }, "onKeyRelease");
    function hi(e, t) {
      return typeof e == "function" ? g.ev.on("input", () => At() && e(te())) : g.ev.on("input", () => At(e) && t(te()));
    }
    __name(hi, "hi");
    u(hi, "onMouseDown");
    function Fn(e, t) {
      return typeof e == "function" ? g.ev.on("input", () => Be() && e(te())) : g.ev.on("input", () => Be(e) && t(te()));
    }
    __name(Fn, "Fn");
    u(Fn, "onMousePress");
    function di(e, t) {
      return typeof e == "function" ? g.ev.on("input", () => Je() && e(te())) : g.ev.on("input", () => Je(e) && t(te()));
    }
    __name(di, "di");
    u(di, "onMouseRelease");
    function fi(e) {
      return g.ev.on("input", () => Un() && e(te(), yn()));
    }
    __name(fi, "fi");
    u(fi, "onMouseMove");
    function mi(e) {
      return g.ev.on("input", () => Qr().forEach((t) => e(t)));
    }
    __name(mi, "mi");
    u(mi, "onCharInput");
    function pi(e) {
      return g.ev.on("onTouchStart", e);
    }
    __name(pi, "pi");
    u(pi, "onTouchStart");
    function gi(e) {
      return g.ev.on("onTouchMove", e);
    }
    __name(gi, "gi");
    u(gi, "onTouchMove");
    function wi(e) {
      return g.ev.on("onTouchEnd", e);
    }
    __name(wi, "wi");
    u(wi, "onTouchEnd");
    function bi(e, t) {
      return g.ev.on("input", () => xn(e) && t());
    }
    __name(bi, "bi");
    u(bi, "onVirtualButtonPress");
    function vi(e, t) {
      return g.ev.on("input", () => Sn(e) && t());
    }
    __name(vi, "vi");
    u(vi, "onVirtualButtonDown");
    function yi(e, t) {
      return g.ev.on("input", () => Cn(e) && t());
    }
    __name(yi, "yi");
    u(yi, "onVirtualButtonRelease");
    function Bn() {
      se("f1", () => {
        F.inspect = !F.inspect;
      }), se("f2", () => {
        F.clearLog();
      }), se("f8", () => {
        F.paused = !F.paused;
      }), se("f7", () => {
        F.timeScale = Ie(ne(F.timeScale - 0.2, 0, 2), 1);
      }), se("f9", () => {
        F.timeScale = Ie(ne(F.timeScale + 0.2, 0, 2), 1);
      }), se("f10", () => {
        F.stepFrame();
      });
    }
    __name(Bn, "Bn");
    u(Bn, "enterDebugMode");
    function Ln() {
      se("b", () => hn());
    }
    __name(Ln, "Ln");
    u(Ln, "enterBurpMode");
    function Ui(e) {
      return e !== void 0 && (g.gravity = e), g.gravity;
    }
    __name(Ui, "Ui");
    u(Ui, "gravity");
    function lt(...e) {
      return { id: "pos", pos: f(...e), moveBy(...t) {
        this.pos = this.pos.add(f(...t));
      }, move(...t) {
        this.moveBy(f(...t).scale(Q()));
      }, moveTo(...t) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.moveTo(f(t[0], t[1]), t[2]);
        let n = t[0], s = t[1];
        if (s === void 0) {
          this.pos = f(n);
          return;
        }
        let h = n.sub(this.pos);
        if (h.len() <= s * Q()) {
          this.pos = f(n);
          return;
        }
        this.move(h.unit().scale(s));
      }, worldPos() {
        return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
      }, screenPos() {
        return this.fixed ? this.pos : Ft(this.pos);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      }, drawInspect() {
        ve({ color: E(255, 0, 0), radius: 4 / wn() });
      } };
    }
    __name(lt, "lt");
    u(lt, "pos");
    function ht(...e) {
      return e.length === 0 ? ht(1) : { id: "scale", scale: f(...e), scaleTo(...t) {
        this.scale = f(...t);
      }, inspect() {
        return typeof this.scale == "number" ? `${Ie(this.scale, 2)}` : `(${Ie(this.scale.x, 2)}, ${Ie(this.scale.y, 2)})`;
      } };
    }
    __name(ht, "ht");
    u(ht, "scale");
    function Ei(e) {
      return { id: "rotate", angle: e != null ? e : 0, rotate(t) {
        this.rotateBy(t * Q());
      }, rotateBy(t) {
        this.angle += t;
      }, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    __name(Ei, "Ei");
    u(Ei, "rotate");
    function xi(...e) {
      return { id: "color", color: E(...e), inspect() {
        return this.color.toString();
      } };
    }
    __name(xi, "xi");
    u(xi, "color");
    function Ie(e, t) {
      return Number(e.toFixed(t));
    }
    __name(Ie, "Ie");
    u(Ie, "toFixed");
    function Si(e) {
      return { id: "opacity", opacity: e != null ? e : 1, inspect() {
        return `${Ie(this.opacity, 1)}`;
      }, fadeOut(t, n = pe.linear) {
        return _t(this.opacity, 0, t, (s) => this.opacity = s, n);
      } };
    }
    __name(Si, "Si");
    u(Si, "opacity");
    function Vt(e) {
      if (!e)
        throw new Error("Please define an anchor");
      return { id: "anchor", anchor: e, inspect() {
        return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
      } };
    }
    __name(Vt, "Vt");
    u(Vt, "anchor");
    function Ci(e) {
      return { id: "z", z: e, inspect() {
        return `${this.z}`;
      } };
    }
    __name(Ci, "Ci");
    u(Ci, "z");
    function Ti(e, t) {
      return { id: "follow", require: ["pos"], follow: { obj: e, offset: t != null ? t : f(0) }, add() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    __name(Ti, "Ti");
    u(Ti, "follow");
    function Ai(e, t) {
      let n = typeof e == "number" ? D.fromAngle(e) : e.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(n.scale(t));
      } };
    }
    __name(Ai, "Ai");
    u(Ai, "move");
    let Oi = 200;
    function Pi(e = {}) {
      var _a;
      let t = (_a = e.distance) != null ? _a : Oi, n = false;
      return { id: "offscreen", require: ["pos"], isOffScreen() {
        let s = Ft(this.pos), h = new G(f(0), _(), B());
        return !He(h, s) && h.distToPoint(s) > t;
      }, onExitScreen(s) {
        return this.on("exitView", s);
      }, onEnterScreen(s) {
        return this.on("enterView", s);
      }, update() {
        this.isOffScreen() ? (n || (this.trigger("exitView"), n = true), e.hide && (this.hidden = true), e.pause && (this.paused = true), e.destroy && this.destroy()) : (n && (this.trigger("enterView"), n = false), e.hide && (this.hidden = false), e.pause && (this.paused = false));
      }, inspect() {
        return `${this.isOffScreen()}`;
      } };
    }
    __name(Pi, "Pi");
    u(Pi, "offscreen");
    function Ri(e = {}) {
      var _a, _b, _c, _d, _e2;
      let t = [];
      return { id: "area", colliding: {}, collisionIgnore: (_a = e.collisionIgnore) != null ? _a : [], add() {
        this.area.cursor && t.push(this.onHover(() => Tn(this.area.cursor))), t.push(this.onCollideUpdate((n, s) => {
          this.colliding[n.id] || this.trigger("collide", n, s), this.colliding[n.id] = s;
        }));
      }, update() {
        for (let n in this.colliding) {
          let s = this.colliding[n];
          this.checkCollision(s.target) || (delete this.colliding[n], this.trigger("collideEnd", s.target, s));
        }
      }, drawInspect() {
        let n = this.localArea();
        ee(), De(this.area.scale), V(this.area.offset);
        let s = { outline: { width: 4 / wn(), color: E(0, 0, 255) }, anchor: this.anchor, fill: false, fixed: this.fixed };
        n instanceof G ? K(__spreadProps(__spreadValues({}, s), { pos: n.pos, width: n.width, height: n.height })) : n instanceof ae ? ye(__spreadProps(__spreadValues({}, s), { pts: n.pts })) : n instanceof me && ve(__spreadProps(__spreadValues({}, s), { pos: n.center, radius: n.radius })), X();
      }, destroy() {
        t.forEach((n) => n.cancel());
      }, area: { shape: (_b = e.shape) != null ? _b : null, scale: (_c = e.scale) != null ? _c : f(1), offset: (_d = e.offset) != null ? _d : f(0), cursor: (_e2 = e.cursor) != null ? _e2 : null }, isClicked() {
        return Be() && this.isHovering();
      }, isHovering() {
        let n = this.fixed ? te() : On(te());
        return this.hasPoint(n);
      }, checkCollision(n) {
        if (this === n || !n.area || !n.exists())
          return null;
        let s = this.worldArea(), h = n.worldArea();
        return ar(s, h);
      }, isColliding(n) {
        let s = this.checkCollision(n);
        return s && !s.isZero();
      }, isTouching(n) {
        return Boolean(this.checkCollision(n));
      }, onClick(n) {
        return this.onUpdate(() => {
          this.isClicked() && n();
        });
      }, onHover(n) {
        let s = false;
        return this.onUpdate(() => {
          s ? s = this.isHovering() : this.isHovering() && (s = true, n());
        });
      }, onHoverUpdate(n) {
        return this.onUpdate(() => {
          this.isHovering() && n();
        });
      }, onHoverEnd(n) {
        let s = false;
        return this.onUpdate(() => {
          s ? this.isHovering() || (s = false, n()) : s = this.isHovering();
        });
      }, onCollide(n, s) {
        if (typeof n == "function" && s === void 0)
          return this.on("collide", n);
        if (typeof n == "string")
          return this.onCollide((h, o) => {
            h.is(n) && s(h, o);
          });
      }, onCollideUpdate(n, s) {
        if (typeof n == "function" && s === void 0)
          return this.on("collideUpdate", n);
        if (typeof n == "string")
          return this.on("collideUpdate", (h, o) => h.is(n) && s(h, o));
      }, onCollideEnd(n, s) {
        if (typeof n == "function" && s === void 0)
          return this.on("collideEnd", n);
        if (typeof n == "string")
          return this.on("collideEnd", (h) => h.is(n) && s(h));
      }, hasPoint(n) {
        return or(this.worldArea(), n);
      }, pushOut(n) {
        let s = this.checkCollision(n);
        s && (this.pos = this.pos.add(s));
      }, pushOutAll() {
        g.root.getAll().forEach(this.pushOut);
      }, localArea() {
        return this.area.shape ? this.area.shape : this.renderArea();
      }, worldArea() {
        var _a2;
        let n = this.localArea();
        if (!(n instanceof ae || n instanceof G))
          throw new Error("Only support polygon and rect shapes for now");
        let s = this.transform.scale(f((_a2 = this.area.scale) != null ? _a2 : 1)).translate(this.area.offset);
        if (n instanceof G) {
          let h = n.bbox(), o = nt(this.anchor || bt).add(1, 1).scale(-0.5).scale(h.width, h.height);
          s = s.translate(o);
        }
        return n.transform(s);
      }, screenArea() {
        let n = this.worldArea();
        return this.fixed ? n : n.transform(g.cam.transform);
      } };
    }
    __name(Ri, "Ri");
    u(Ri, "area");
    function Ze(e) {
      return { color: e.color, opacity: e.opacity, anchor: e.anchor, outline: e.outline, fixed: e.fixed, shader: e.shader, uniform: e.uniform };
    }
    __name(Ze, "Ze");
    u(Ze, "getRenderProps");
    function Gt(e, t = {}) {
      var _a;
      let n = null, s = null;
      if (!e)
        throw new Error("Please pass the resource name or data to sprite()");
      let h = u((o, l, d, m) => {
        let w = f(1, 1);
        return d && m ? (w.x = d / (o.width * l.w), w.y = m / (o.height * l.h)) : d ? (w.x = d / (o.width * l.w), w.y = w.x) : m && (w.y = m / (o.height * l.h), w.x = w.y), w;
      }, "calcTexScale");
      return { id: "sprite", width: 0, height: 0, frame: t.frame || 0, quad: t.quad || new j(0, 0, 1, 1), animSpeed: (_a = t.animSpeed) != null ? _a : 1, draw() {
        !n || dn(__spreadProps(__spreadValues({}, Ze(this)), { sprite: n, frame: this.frame, quad: this.quad, flipX: t.flipX, flipY: t.flipY, tiled: t.tiled, width: t.width, height: t.height }));
      }, update() {
        if (!n) {
          let l = cn(e);
          if (!l || !l.data)
            return;
          let d = l.data.frames[0].clone();
          t.quad && (d = d.scale(t.quad));
          let m = h(l.data.tex, d, t.width, t.height);
          this.width = l.data.tex.width * d.w * m.x, this.height = l.data.tex.height * d.h * m.y, t.anim && this.play(t.anim), n = l.data, this.trigger("spriteLoaded", n);
        }
        if (!s)
          return;
        let o = n.anims[s.name];
        if (typeof o == "number") {
          this.frame = o;
          return;
        }
        if (o.speed === 0)
          throw new Error("Sprite anim speed cannot be 0");
        s.timer += Q() * this.animSpeed, s.timer >= 1 / s.speed && (s.timer = 0, o.from > o.to ? (this.frame--, this.frame < o.to && (s.loop ? this.frame = o.from : (this.frame++, s.onEnd(), this.stop()))) : (this.frame++, this.frame > o.to && (s.loop ? this.frame = o.from : (this.frame--, s.onEnd(), this.stop()))));
      }, play(o, l = {}) {
        var _a2, _b, _c, _d, _e2, _f, _g;
        if (!n) {
          this.on("spriteLoaded", () => {
            this.play(o, l);
          });
          return;
        }
        let d = n.anims[o];
        if (!d)
          throw new Error(`Anim not found: ${o}`);
        s && this.stop(), s = typeof d == "number" ? { name: o, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: () => {
        } } : { name: o, timer: 0, loop: (_b = (_a2 = l.loop) != null ? _a2 : d.loop) != null ? _b : false, pingpong: (_d = (_c = l.pingpong) != null ? _c : d.pingpong) != null ? _d : false, speed: (_f = (_e2 = l.speed) != null ? _e2 : d.speed) != null ? _f : 10, onEnd: (_g = l.onEnd) != null ? _g : () => {
        } }, this.frame = typeof d == "number" ? d : d.from, this.trigger("animStart", o);
      }, stop() {
        if (!s)
          return;
        let o = s.name;
        s = null, this.trigger("animEnd", o);
      }, numFrames() {
        return n ? n.frames.length : 0;
      }, curAnim() {
        return s == null ? void 0 : s.name;
      }, flipX(o) {
        t.flipX = o;
      }, flipY(o) {
        t.flipY = o;
      }, onAnimEnd(o, l) {
        return this.on("animEnd", (d) => {
          d === o && l();
        });
      }, onAnimStart(o, l) {
        return this.on("animStart", (d) => {
          d === o && l();
        });
      }, renderArea() {
        return new G(f(0), this.width, this.height);
      }, inspect() {
        if (typeof e == "string")
          return `"${e}"`;
      } };
    }
    __name(Gt, "Gt");
    u(Gt, "sprite");
    function Di(e, t = {}) {
      var _a;
      function n(s) {
        var _a2, _b;
        let h = Ue(__spreadProps(__spreadValues({}, Ze(s)), { text: s.text + "", size: s.textSize, font: s.font, width: t.width && s.width, align: s.align, letterSpacing: s.letterSpacing, lineSpacing: s.lineSpacing, transform: s.textTransform, styles: s.textStyles }));
        return t.width || (s.width = h.width / (((_a2 = s.scale) == null ? void 0 : _a2.x) || 1)), s.height = h.height / (((_b = s.scale) == null ? void 0 : _b.y) || 1), h;
      }
      __name(n, "n");
      return u(n, "update"), { id: "text", text: e, textSize: (_a = t.size) != null ? _a : Gs, font: t.font, width: t.width, height: 0, align: t.align, lineSpacing: t.lineSpacing, letterSpacing: t.letterSpacing, textTransform: t.transform, textStyles: t.styles, add() {
        Nt(() => n(this));
      }, draw() {
        Ee(n(this));
      }, renderArea() {
        return new G(f(0), this.width, this.height);
      } };
    }
    __name(Di, "Di");
    u(Di, "text");
    function Mi(e, t, n = {}) {
      return { id: "rect", width: e, height: t, radius: n.radius || 0, draw() {
        K(__spreadProps(__spreadValues({}, Ze(this)), { width: this.width, height: this.height, radius: this.radius }));
      }, renderArea() {
        return new G(f(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Mi, "Mi");
    u(Mi, "rect");
    function Fi(e, t) {
      return { id: "rect", width: e, height: t, draw() {
        Me(__spreadProps(__spreadValues({}, Ze(this)), { width: this.width, height: this.height }));
      }, renderArea() {
        return new G(f(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Fi, "Fi");
    u(Fi, "uvquad");
    function Bi(e) {
      return { id: "circle", radius: e, draw() {
        ve(__spreadProps(__spreadValues({}, Ze(this)), { radius: this.radius }));
      }, renderArea() {
        return new me(f(0), this.radius);
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    __name(Bi, "Bi");
    u(Bi, "circle");
    function Li(e = 1, t = E(0, 0, 0)) {
      return { id: "outline", outline: { width: e, color: t } };
    }
    __name(Li, "Li");
    u(Li, "outline");
    function In(e, t) {
      let n = new Se();
      return e && t && n.pushd(new we(e, t)), { id: "timer", wait(s, h) {
        let o = new we(s, h), l = n.pushd(o);
        return { get paused() {
          return o.paused;
        }, set paused(d) {
          o.paused = d;
        }, cancel: l };
      }, update() {
        n.forEach((s, h) => {
          s.tick(Q()) && n.delete(h);
        });
      } };
    }
    __name(In, "In");
    u(In, "timer");
    let Ii = 640, Vi = 65536;
    function Gi(e = {}) {
      var _a, _b, _c, _d;
      let t = 0, n = null, s = null, h = false, o = [];
      return { id: "body", require: ["pos", "area"], jumpForce: (_a = e.jumpForce) != null ? _a : Ii, gravityScale: (_b = e.gravityScale) != null ? _b : 1, isStatic: (_c = e.isStatic) != null ? _c : false, mass: (_d = e.mass) != null ? _d : 0, add() {
        o.push(this.onCollideUpdate((l, d) => {
          if (!l.is("body") || d.resolved || this.isStatic && l.isStatic)
            return;
          let m = !this.isStatic && l.isStatic ? d : d.reverse();
          m.source.trigger("beforePhysicsResolve", m), m.target.trigger("beforePhysicsResolve", m.reverse()), !d.resolved && (m.source.pos = m.source.pos.add(m.displacement), m.source.transform = Pn(m.source), d.resolved = true, m.source.trigger("physicsResolve", m), m.target.trigger("physicsResolve", m.reverse()));
        })), o.push(this.onPhysicsResolve((l) => {
          g.gravity && (l.isBottom() && this.isFalling() ? (t = 0, n = l.target, s = l.target.pos, h ? h = false : this.trigger("ground", n)) : l.isTop() && this.isJumping() && (t = 0, this.trigger("headbutt", l.target)));
        }));
      }, update() {
        var _a2;
        if (!g.gravity || this.isStatic)
          return;
        if (h && (n = null, s = null, this.trigger("fallOff"), h = false), n)
          if (!this.isTouching(n) || !n.exists() || !n.is("body"))
            h = true;
          else {
            !n.pos.eq(s) && e.stickToPlatform !== false && this.moveBy(n.pos.sub(s)), s = n.pos;
            return;
          }
        let l = t;
        t += g.gravity * this.gravityScale * Q(), t = Math.min(t, (_a2 = e.maxVelocity) != null ? _a2 : Vi), l < 0 && t >= 0 && this.trigger("fall"), this.move(0, t);
      }, destroy() {
        o.forEach((l) => l.cancel());
      }, onPhysicsResolve(l) {
        return this.on("physicsResolve", l);
      }, onBeforePhysicsResolve(l) {
        return this.on("beforePhysicsResolve", l);
      }, curPlatform() {
        return n;
      }, isGrounded() {
        return n !== null;
      }, isFalling() {
        return t > 0;
      }, isJumping() {
        return t < 0;
      }, jump(l) {
        n = null, s = null, t = -l || -this.jumpForce;
      }, onGround(l) {
        return this.on("ground", l);
      }, onFall(l) {
        return this.on("fall", l);
      }, onFallOff(l) {
        return this.on("fallOff", l);
      }, onHeadbutt(l) {
        return this.on("headbutt", l);
      } };
    }
    __name(Gi, "Gi");
    u(Gi, "body");
    function Ni(e = 2) {
      let t = e, n = [];
      return { id: "doubleJump", require: ["body"], numJumps: e, add() {
        n.push(this.onGround(() => {
          t = this.numJumps;
        }));
      }, destroy() {
        n.forEach((s) => s.cancel());
      }, doubleJump(s) {
        t <= 0 || (t < this.numJumps && this.trigger("doubleJump"), t--, this.jump(s));
      }, onDoubleJump(s) {
        return this.on("doubleJump", s);
      }, inspect() {
        return `${t}`;
      } };
    }
    __name(Ni, "Ni");
    u(Ni, "doubleJump");
    function ji(e, t = {}) {
      return { id: "shader", shader: e, uniform: t };
    }
    __name(ji, "ji");
    u(ji, "shader");
    function _i() {
      return { id: "fixed", fixed: true };
    }
    __name(_i, "_i");
    u(_i, "fixed");
    function Vn(e) {
      return { id: "stay", stay: true, scenesToStay: e };
    }
    __name(Vn, "Vn");
    u(Vn, "stay");
    function ki(e) {
      if (e == null)
        throw new Error("health() requires the initial amount of hp");
      return { id: "health", hurt(t = 1) {
        this.setHP(e - t), this.trigger("hurt");
      }, heal(t = 1) {
        this.setHP(e + t), this.trigger("heal");
      }, hp() {
        return e;
      }, setHP(t) {
        e = t, e <= 0 && this.trigger("death");
      }, onHurt(t) {
        return this.on("hurt", t);
      }, onHeal(t) {
        return this.on("heal", t);
      }, onDeath(t) {
        return this.on("death", t);
      }, inspect() {
        return `${e}`;
      } };
    }
    __name(ki, "ki");
    u(ki, "health");
    function qi(e, t = {}) {
      var _a;
      if (e == null)
        throw new Error("lifespan() requires time");
      let n = (_a = t.fade) != null ? _a : 0;
      return { id: "lifespan", add() {
        return __async(this, null, function* () {
          yield Bt(e), n > 0 && this.opacity && (yield _t(this.opacity, 0, n, (s) => this.opacity = s, pe.linear)), this.destroy();
        });
      } };
    }
    __name(qi, "qi");
    u(qi, "lifespan");
    function zi(e, t, n) {
      if (!e)
        throw new Error("state() requires an initial state");
      let s = {};
      function h(m) {
        s[m] || (s[m] = { enter: new W(), end: new W(), update: new W(), draw: new W() });
      }
      __name(h, "h");
      u(h, "initStateEvents");
      function o(m, w, v) {
        return h(w), s[w][m].add(v);
      }
      __name(o, "o");
      u(o, "on");
      function l(m, w, ...v) {
        h(w), s[w][m].trigger(...v);
      }
      __name(l, "l");
      u(l, "trigger");
      let d = false;
      return { id: "state", state: e, enterState(m, ...w) {
        if (d = true, t && !t.includes(m))
          throw new Error(`State not found: ${m}`);
        let v = this.state;
        if (n) {
          if (!(n == null ? void 0 : n[v]))
            return;
          let y = typeof n[v] == "string" ? [n[v]] : n[v];
          if (!y.includes(m))
            throw new Error(`Cannot transition state from "${v}" to "${m}". Available transitions: ${y.map((L) => `"${L}"`).join(", ")}`);
        }
        l("end", v, ...w), this.state = m, l("enter", m, ...w), l("enter", `${v} -> ${m}`, ...w);
      }, onStateTransition(m, w, v) {
        return o("enter", `${m} -> ${w}`, v);
      }, onStateEnter(m, w) {
        return o("enter", m, w);
      }, onStateUpdate(m, w) {
        return o("update", m, w);
      }, onStateDraw(m, w) {
        return o("draw", m, w);
      }, onStateEnd(m, w) {
        return o("end", m, w);
      }, update() {
        d || (l("enter", e), d = true), l("update", this.state);
      }, draw() {
        l("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    __name(zi, "zi");
    u(zi, "state");
    function Hi(e = 1) {
      let t = 0, n = false;
      return { require: ["opacity"], add() {
        this.opacity = 0;
      }, update() {
        n || (t += Q(), this.opacity = gt(t, 0, e, 0, 1), t >= e && (this.opacity = 1, n = true));
      } };
    }
    __name(Hi, "Hi");
    u(Hi, "fadeIn");
    function Nt(e) {
      U.loaded ? e() : g.ev.on("load", e);
    }
    __name(Nt, "Nt");
    u(Nt, "onLoad");
    function $i(e, t) {
      g.scenes[e] = t;
    }
    __name($i, "$i");
    u($i, "scene");
    function Yi(e, ...t) {
      if (!g.scenes[e])
        throw new Error(`Scene not found: ${e}`);
      g.ev.onOnce("frameEnd", () => {
        g.ev = new ue(), g.objEvents = new ue(), g.root.get().forEach((n) => {
          (!n.stay || n.scenesToStay && !n.scenesToStay.includes(e)) && g.root.remove(n);
        }), g.root.clearEvents(), g.cam = { pos: null, scale: f(1), angle: 0, shake: 0, transform: new A() }, g.gravity = 0, g.scenes[e](...t), i.debug !== false && Bn(), i.burp && Ln();
      });
    }
    __name(Yi, "Yi");
    u(Yi, "go");
    function Xi(e, t) {
      try {
        return JSON.parse(window.localStorage[e]);
      } catch (e2) {
        return t ? (Gn(e, t), t) : null;
      }
    }
    __name(Xi, "Xi");
    u(Xi, "getData");
    function Gn(e, t) {
      window.localStorage[e] = JSON.stringify(t);
    }
    __name(Gn, "Gn");
    u(Gn, "setData");
    function Nn(e) {
      let t = e(Ve);
      for (let n in t)
        Ve[n] = t[n], i.global !== false && (window[n] = t[n]);
      return Ve;
    }
    __name(Nn, "Nn");
    u(Nn, "plug");
    function dt2() {
      return f(_() / 2, B() / 2);
    }
    __name(dt2, "dt");
    u(dt2, "center");
    function Ki(e, t) {
      return { id: "grid", gridPos: t.clone(), setGridPos(...n) {
        let s = f(...n);
        this.gridPos = s.clone(), this.pos = f(this.gridPos.x * e.gridWidth(), this.gridPos.y * e.gridHeight());
      }, moveLeft() {
        this.setGridPos(this.gridPos.add(f(-1, 0)));
      }, moveRight() {
        this.setGridPos(this.gridPos.add(f(1, 0)));
      }, moveUp() {
        this.setGridPos(this.gridPos.add(f(0, -1)));
      }, moveDown() {
        this.setGridPos(this.gridPos.add(f(0, 1)));
      } };
    }
    __name(Ki, "Ki");
    u(Ki, "grid");
    function Qi(e, t) {
      var _a;
      if (!t.width || !t.height)
        throw new Error("Must provide level grid width & height.");
      let n = We([lt((_a = t.pos) != null ? _a : f(0))]), s = 0, h = { id: "level", gridWidth() {
        return t.width;
      }, gridHeight() {
        return t.height;
      }, getPos(...o) {
        let l = f(...o);
        return f(l.x * t.width, l.y * t.height);
      }, spawn(o, ...l) {
        let d = f(...l), m = (() => {
          if (t[o]) {
            if (typeof t[o] != "function")
              throw new Error("Level symbol def must be a function returning a component list");
            return t[o](d);
          } else if (t.any)
            return t.any(o, d);
        })();
        if (!m)
          return;
        let w = f(d.x * t.width, d.y * t.height);
        for (let v of m)
          if (v.id === "pos") {
            w.x += v.pos.x, w.y += v.pos.y;
            break;
          }
        return m.push(lt(w)), m.push(Ki(this, d)), n.add(m);
      }, levelWidth() {
        return s * t.width;
      }, levelHeight() {
        return e.length * t.height;
      } };
      return n.use(h), e.forEach((o, l) => {
        let d = o.split("");
        s = Math.max(d.length, s), d.forEach((m, w) => {
          n.spawn(m, f(w, l));
        });
      }), n;
    }
    __name(Qi, "Qi");
    u(Qi, "addLevel");
    function Ji(e) {
      let t = a.canvas.captureStream(e), n = C.ctx.createMediaStreamDestination();
      C.masterNode.connect(n);
      let s = new MediaRecorder(t), h = [];
      return s.ondataavailable = (o) => {
        o.data.size > 0 && h.push(o.data);
      }, s.onerror = () => {
        C.masterNode.disconnect(n), t.getTracks().forEach((o) => o.stop());
      }, s.start(), { resume() {
        s.resume();
      }, pause() {
        s.pause();
      }, stop() {
        return s.stop(), C.masterNode.disconnect(n), t.getTracks().forEach((o) => o.stop()), new Promise((o) => {
          s.onstop = () => {
            o(new Blob(h, { type: "video/mp4" }));
          };
        });
      }, download(o = "kaboom.mp4") {
        this.stop().then((l) => Qt(o, l));
      } };
    }
    __name(Ji, "Ji");
    u(Ji, "record");
    function Zi() {
      return document.activeElement === a.canvas;
    }
    __name(Zi, "Zi");
    u(Zi, "isFocused");
    function Wi(e) {
      e.destroy();
    }
    __name(Wi, "Wi");
    u(Wi, "destroy");
    let We = g.root.add.bind(g.root), es = g.root.readd.bind(g.root), ts = g.root.removeAll.bind(g.root), jn = g.root.get.bind(g.root), _n = g.root.getAll.bind(g.root);
    function kn(e = 2, t = 1) {
      let n = 0;
      return { id: "boom", require: ["scale"], update() {
        let s = Math.sin(n * e) * t;
        s < 0 && this.destroy(), this.scale = f(s), n += Q();
      } };
    }
    __name(kn, "kn");
    u(kn, "boom");
    let ns = Re(null, fr), rs = Re(null, mr);
    function is(e, t = {}) {
      var _a, _b;
      let n = We([lt(e), Vn()]), s = (t.speed || 1) * 5, h = t.scale || 1;
      n.add([Gt(rs), ht(0), Vt("center"), kn(s, h), ...(_a = t.comps) != null ? _a : []]);
      let o = n.add([Gt(ns), ht(0), Vt("center"), In(0.4 / s, () => o.use(kn(s, h))), ...(_b = t.comps) != null ? _b : []]);
      return o.onDestroy(() => n.destroy()), n;
    }
    __name(is, "is");
    u(is, "addKaboom");
    function qn() {
      g.root.update();
    }
    __name(qn, "qn");
    u(qn, "updateFrame");
    let ss = 64;
    class ft {
      constructor(t, n, s, h = false) {
        __publicField(this, "source");
        __publicField(this, "target");
        __publicField(this, "displacement");
        __publicField(this, "resolved", false);
        this.source = t, this.target = n, this.displacement = s, this.resolved = h;
      }
      reverse() {
        return new ft(this.target, this.source, this.displacement.scale(-1), this.resolved);
      }
      isLeft() {
        return this.displacement.x > 0;
      }
      isRight() {
        return this.displacement.x < 0;
      }
      isTop() {
        return this.displacement.y > 0;
      }
      isBottom() {
        return this.displacement.y < 0;
      }
      preventResolve() {
        this.resolved = true;
      }
    }
    __name(ft, "ft");
    u(ft, "Collision");
    function os() {
      let e = {}, t = i.hashGridSize || ss, n = new A(), s = [];
      function h(o) {
        if (s.push(n), o.pos && (n = n.translate(o.pos)), o.scale && (n = n.scale(o.scale)), o.angle && (n = n.rotateZ(o.angle)), o.transform = n.clone(), o.c("area") && !o.paused) {
          let l = o, m = l.worldArea().bbox(), w = Math.floor(m.pos.x / t), v = Math.floor(m.pos.y / t), y = Math.ceil((m.pos.x + m.width) / t), L = Math.ceil((m.pos.y + m.height) / t), P = /* @__PURE__ */ new Set();
          for (let q = w; q <= y; q++)
            for (let z2 = v; z2 <= L; z2++)
              if (!e[q])
                e[q] = {}, e[q][z2] = [l];
              else if (!e[q][z2])
                e[q][z2] = [l];
              else {
                let xe = e[q][z2];
                for (let J of xe) {
                  if (!J.exists() || P.has(J.id))
                    continue;
                  for (let S of l.collisionIgnore)
                    J.is(S);
                  for (let S of J.collisionIgnore)
                    l.is(S);
                  let k = l.checkCollision(J);
                  if (k && !k.isZero()) {
                    let S = new ft(l, J, k);
                    l.trigger("collideUpdate", J, S);
                    let N = S.reverse();
                    N.resolved = S.resolved, J.trigger("collideUpdate", l, N);
                  }
                  P.add(J.id);
                }
                xe.push(l);
              }
        }
        o.get().forEach(h), n = s.pop();
      }
      __name(h, "h");
      u(h, "checkObj"), h(g.root);
    }
    __name(os, "os");
    u(os, "checkFrame");
    function as() {
      var _a;
      let e = g.cam, t = D.fromAngle(tt(0, 360)).scale(e.shake);
      e.shake = ze(e.shake, 0, 5 * Q()), e.transform = new A().translate(dt2()).scale(e.scale).rotateZ(e.angle).translate(((_a = e.pos) != null ? _a : dt2()).scale(-1).add(t)), g.root.draw(), he();
    }
    __name(as, "as");
    u(as, "drawFrame");
    function us() {
      let e = I();
      ce(() => {
        let t = _() / 2, n = 24, s = f(_() / 2, B() / 2).sub(f(t / 2, n / 2));
        K({ pos: f(0), width: _(), height: B(), color: E(0, 0, 0) }), K({ pos: s, width: t, height: n, fill: false, outline: { width: 4 } }), K({ pos: s, width: t * e, height: n });
      }), g.ev.trigger("loading", e);
    }
    __name(us, "us");
    u(us, "drawLoadScreen");
    function zn(e, t) {
      ce(() => {
        let n = f(8);
        ee(), V(e);
        let s = Ue({ text: t, font: vt, size: 16, pos: n, color: E(255, 255, 255), fixed: true }), h = s.width + n.x * 2, o = s.height + n.x * 2;
        e.x + h >= _() && V(f(-h, 0)), e.y + o >= B() && V(f(0, -o)), K({ width: h, height: o, color: E(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), Ee(s), X();
      });
    }
    __name(zn, "zn");
    u(zn, "drawInspectText");
    function cs() {
      if (F.inspect) {
        let e = null;
        for (let t of _n())
          if (t.c("area") && t.isHovering()) {
            e = t;
            break;
          }
        if (g.root.drawInspect(), e) {
          let t = [], n = e.inspect();
          for (let s in n)
            n[s] ? t.push(`${s}: ${n[s]}`) : t.push(`${s}`);
          zn(Kr(te()), t.join(`
`));
        }
        zn(f(8), `FPS: ${F.fps()}`);
      }
      F.paused && ce(() => {
        ee(), V(_(), 0), V(-8, 8);
        let e = 32;
        K({ width: e, height: e, anchor: "topright", color: E(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let t = 1; t <= 2; t++)
          K({ width: 4, height: e * 0.6, anchor: "center", pos: f(-e / 3 * t, e * 0.5), color: E(255, 255, 255), radius: 2, fixed: true });
        X();
      }), F.timeScale !== 1 && ce(() => {
        ee(), V(_(), B()), V(-8, -8);
        let e = 8, t = Ue({ text: F.timeScale.toFixed(1), font: vt, size: 16, color: E(255, 255, 255), pos: f(-e), anchor: "botright", fixed: true });
        K({ width: t.width + e * 2 + e * 4, height: t.height + e * 2, anchor: "botright", color: E(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let n = 0; n < 2; n++) {
          let s = F.timeScale < 1;
          mn({ p1: f(-t.width - e * (s ? 2 : 3.5), -e), p2: f(-t.width - e * (s ? 2 : 3.5), -e - t.height), p3: f(-t.width - e * (s ? 3.5 : 2), -e - t.height / 2), pos: f(-n * e * 1 + (s ? -e * 0.5 : 0), 0), color: E(255, 255, 255), fixed: true });
        }
        Ee(t), X();
      }), F.curRecording && ce(() => {
        ee(), V(0, B()), V(24, -24), ve({ radius: 12, color: E(255, 0, 0), opacity: $t(0, 1, Dt() * 4), fixed: true }), X();
      }), F.showLog && g.logs.length > 0 && ce(() => {
        ee(), V(0, B()), V(8, -8);
        let e = 8, t = Ue({ text: g.logs.join(`
`), font: vt, pos: f(e, -e), anchor: "botleft", size: 16, width: _() * 0.6, lineSpacing: e / 2, fixed: true, styles: { time: { color: E(127, 127, 127) }, info: { color: E(255, 255, 255) }, error: { color: E(255, 0, 127) } } });
        K({ width: t.width + e * 2, height: t.height + e * 2, anchor: "botleft", color: E(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), Ee(t), X();
      });
    }
    __name(cs, "cs");
    u(cs, "drawDebug");
    function ls() {
      let e = te(), t = u((s, h, o) => {
        ve({ radius: 80 / 2, pos: s, outline: { width: 4, color: E(0, 0, 0) }, opacity: 0.5 }), o && st({ text: o, pos: s, color: E(0, 0, 0), size: 40, anchor: "center", opacity: 0.5 }), Be("left") && sr(new me(s, 80 / 2), e) && g.ev.onOnce("frameEnd", () => {
          a.virtualButtonStates[h] = "pressed", a.keyStates[h] = "pressed";
        }), Je("left") && g.ev.onOnce("frameEnd", () => {
          a.virtualButtonStates[h] = "released", a.keyStates[h] = "released";
        });
      }, "drawCircleButton"), n = u((s, h, o) => {
        K({ width: 64, height: 64, pos: s, outline: { width: 4, color: E(0, 0, 0) }, radius: 4, anchor: "center", opacity: 0.5 }), o && st({ text: o, pos: s, color: E(0, 0, 0), size: 40, anchor: "center", opacity: 0.5 }), Be("left") && He(new G(s.add(-64 / 2, -64 / 2), 64, 64), e) && g.ev.onOnce("frameEnd", () => {
          a.virtualButtonStates[h] = "pressed", a.keyStates[h] = "pressed";
        }), Je("left") && g.ev.onOnce("frameEnd", () => {
          a.virtualButtonStates[h] = "released", a.keyStates[h] = "released";
        });
      }, "drawSquareButton");
      ce(() => {
        t(f(_() - 80, B() - 160), "a"), t(f(_() - 160, B() - 80), "b"), n(f(60, B() - 124), "left"), n(f(188, B() - 124), "right"), n(f(124, B() - 188), "up"), n(f(124, B() - 60), "down");
      });
    }
    __name(ls, "ls");
    u(ls, "drawVirtualControls"), i.debug !== false && Bn(), i.burp && Ln();
    function hs(e) {
      g.ev.on("loading", e);
    }
    __name(hs, "hs");
    u(hs, "onLoadUpdate");
    function ds(e) {
      g.ev.on("resize", e);
    }
    __name(ds, "ds");
    u(ds, "onResize");
    function fs(e) {
      g.ev.on("error", e);
    }
    __name(fs, "fs");
    u(fs, "onError");
    function jt(e) {
      Hn(() => {
        ce(() => {
          let s = _(), h = B(), o = { size: 36, width: s - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: vt, fixed: true };
          K({ width: s, height: h, color: E(0, 0, 255), fixed: true });
          let l = Ue(__spreadProps(__spreadValues({}, o), { text: e.name, pos: f(32), color: E(255, 128, 0), fixed: true }));
          Ee(l), st(__spreadProps(__spreadValues({}, o), { text: e.message, pos: f(32, 32 + l.height + 16), fixed: true })), X(), g.ev.trigger("error", e);
        });
      });
    }
    __name(jt, "jt");
    u(jt, "handleErr");
    function ms() {
      for (let e in a.keyStates)
        a.keyStates[e] = tn(a.keyStates[e]);
      for (let e in a.mouseStates)
        a.mouseStates[e] = tn(a.mouseStates[e]);
      for (let e in a.virtualButtonStates)
        a.virtualButtonStates[e] = tn(a.virtualButtonStates[e]);
      a.charInputted = [], a.isMouseMoved = false, a.isKeyPressed = false, a.isKeyPressedRepeat = false, a.isKeyReleased = false;
    }
    __name(ms, "ms");
    u(ms, "resetInputState");
    function Hn(e) {
      a.loopID !== null && cancelAnimationFrame(a.loopID);
      let t = u((n) => {
        if (a.stopped)
          return;
        if (document.visibilityState !== "visible") {
          a.loopID = requestAnimationFrame(t);
          return;
        }
        let s = n / 1e3, h = s - a.realTime;
        a.realTime = s, a.skipTime || (a.dt = h, a.time += Q(), a.fpsCounter.tick(a.dt)), a.skipTime = false, a.numFrames++, Vr(), e(), Gr(), ms(), g.ev.trigger("frameEnd"), a.loopID = requestAnimationFrame(t);
      }, "frame");
      t(0);
    }
    __name(Hn, "Hn");
    u(Hn, "run");
    function ps() {
      g.ev.onOnce("frameEnd", () => {
        a.stopped = true, c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT | c.STENCIL_BUFFER_BIT);
        let e = c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS);
        for (let t = 0; t < e; t++)
          c.activeTexture(c.TEXTURE0 + t), c.bindTexture(c.TEXTURE_2D, null), c.bindTexture(c.TEXTURE_CUBE_MAP, null);
        c.bindBuffer(c.ARRAY_BUFFER, null), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null), c.bindRenderbuffer(c.RENDERBUFFER, null), c.bindFramebuffer(c.FRAMEBUFFER, null), r.forEach((t) => t()), c.deleteBuffer(p.vbuf), c.deleteBuffer(p.ibuf);
        for (let t in $)
          a.canvas.removeEventListener(t, $[t]);
        for (let t in Qe)
          document.removeEventListener(t, Qe[t]);
        for (let t in Fe)
          window.removeEventListener(t, Fe[t]);
      });
    }
    __name(ps, "ps");
    u(ps, "quit");
    function _t(e, t, n, s, h = pe.linear) {
      let o = 0, l = [], d = at(() => {
        o += Q();
        let m = Math.min(o / n, 1);
        s(ze(e, t, h(m))), m === 1 && (d.cancel(), s(t), l.forEach((w) => w()));
      });
      return { get paused() {
        return d.paused;
      }, set paused(m) {
        d.paused = m;
      }, onFinish(m) {
        l.push(m);
      }, then(m) {
        return this.onFinish(m), this;
      }, cancel() {
        d.cancel();
      }, finish() {
        d.cancel(), s(t), l.forEach((m) => m());
      } };
    }
    __name(_t, "_t");
    u(_t, "tween"), Oe("happy", hr, 28, 36), Hn(() => {
      U.loaded || I() === 1 && (U.loaded = true, g.ev.trigger("load")), !U.loaded && i.loadingScreen !== false ? us() : (g.ev.trigger("input"), F.paused || qn(), os(), as(), i.debug !== false && cs(), i.virtualControls && An() && ls());
    });
    let Ve = { VERSION: Ds, loadRoot: Y, loadProgress: I, loadSprite: Re, loadSpriteAtlas: rn, loadSound: Rr, loadBitmapFont: Oe, loadFont: Et, loadShader: Pr, loadAseprite: Or, loadPedit: Ar, loadBean: Dr, load: le, getSprite: sn, getSound: on, getFont: Mr, getBitmapFont: an, getShader: un, Asset: O, SpriteData: T, SoundData: R, width: _, height: B, center: dt2, dt: Q, time: Dt, screenshot: Jr, record: Ji, isFocused: Zi, setCursor: Tn, setFullscreen: Zr, isFullscreen: Mt, isTouchScreen: An, onLoad: Nt, onLoadUpdate: hs, onResize: ds, onError: fs, camPos: Wr, camScale: ei, camRot: ti, shake: ni, toScreen: Ft, toWorld: On, gravity: Ui, add: We, destroy: Wi, destroyAll: ts, get: jn, getAll: _n, readd: es, pos: lt, scale: ht, rotate: Ei, color: xi, opacity: Si, anchor: Vt, area: Ri, sprite: Gt, text: Di, rect: Mi, circle: Bi, uvquad: Fi, outline: Li, body: Gi, doubleJump: Ni, shader: ji, timer: In, fixed: _i, stay: Vn, health: ki, lifespan: qi, z: Ci, move: Ai, offscreen: Pi, follow: Ti, state: zi, fadeIn: Hi, on: Le, onUpdate: at, onDraw: Dn, onAdd: Mn, onDestroy: ri, onCollide: ii, onClick: si, onHover: oi, onHoverUpdate: ai, onHoverEnd: ui, onKeyDown: li, onKeyPress: se, onKeyPressRepeat: Lt, onKeyRelease: It, onMouseDown: hi, onMousePress: Fn, onMouseRelease: di, onMouseMove: fi, onCharInput: mi, onTouchStart: pi, onTouchMove: gi, onTouchEnd: wi, onVirtualButtonPress: bi, onVirtualButtonDown: vi, onVirtualButtonRelease: yi, mousePos: te, mouseDeltaPos: yn, isKeyDown: En, isKeyPressed: Ot, isKeyPressedRepeat: Pt, isKeyReleased: Rt, isMouseDown: At, isMousePressed: Be, isMouseReleased: Je, isMouseMoved: Un, isVirtualButtonPressed: xn, isVirtualButtonDown: Sn, isVirtualButtonReleased: Cn, loop: ci, wait: Bt, play: Ye, volume: Lr, burp: hn, audioCtx: C.ctx, Timer: we, Line: ie, Rect: G, Circle: me, Polygon: ae, Vec2: D, Color: x, Mat4: A, Quad: j, RNG: ke, rand: tt, randi: Yt, randSeed: er, vec2: f, rgb: E, hsl2rgb: Zn, quad: Wn, choose: nr, chance: tr, lerp: ze, tween: _t, easings: pe, map: gt, mapc: Jn, wave: $t, deg2rad: fe, rad2deg: Ht, testLineLine: je, testRectRect: rr, testRectLine: ir, testRectPoint: He, drawSprite: dn, drawText: st, formatText: Ue, drawRect: K, drawLine: Ke, drawLines: fn, drawTriangle: mn, drawCircle: ve, drawEllipse: pn, drawUVQuad: Me, drawPolygon: ye, drawFormattedText: Ee, drawMasked: Hr, drawSubtracted: $r, pushTransform: ee, popTransform: X, pushTranslate: V, pushScale: De, pushRotate: qr, pushRotateX: _r, pushRotateY: kr, pushRotateZ: be, pushMatrix: jr, debug: F, scene: $i, go: Yi, addLevel: Qi, getData: Xi, setData: Gn, download: wt, downloadJSON: cr, downloadText: Kt, downloadBlob: Qt, plug: Nn, ASCII_CHARS: wr, canvas: a.canvas, addKaboom: is, LEFT: D.LEFT, RIGHT: D.RIGHT, UP: D.UP, DOWN: D.DOWN, RED: x.RED, GREEN: x.GREEN, BLUE: x.BLUE, YELLOW: x.YELLOW, MAGENTA: x.MAGENTA, CYAN: x.CYAN, WHITE: x.WHITE, BLACK: x.BLACK, quit: ps, Event: W, EventHandler: ue };
    if (i.plugins && i.plugins.forEach(Nn), i.global !== false)
      for (let e in Ve)
        window[e] = Ve[e];
    return a.canvas.focus(), Ve;
  }, "default");

  // code/player.js
  var camVel = 0;
  function addGolfBall(x2, y, whenHole) {
    camPos(vec2(0, 0));
    var golfBall = add([
      sprite("ball"),
      pos(x2, y),
      area(),
      body(),
      scale(1),
      opacity(1),
      anchor("center"),
      "player"
    ]);
    var arrows = add([
      sprite("arrows"),
      pos(x2, y),
      opacity(0),
      follow(golfBall),
      anchor("bot")
    ]);
    var golfBallDrag = false;
    onMouseDown(() => {
      if (golfBall.isHovering()) {
        golfBallDrag = true;
        arrows.opacity = 1;
      }
    });
    camVel = vec2(0, 0);
    const speed = 250;
    var lStrength = 1;
    wait(1, () => {
      lStrength = 0.25;
    });
    var isWin = false;
    onUpdate(() => {
      if (golfBallDrag == true) {
        arrows.angle = trueMousePos().angle(arrows.pos) - 90;
        let dist = trueMousePos().dist(golfBall.pos);
        if (dist > 100) {
          arrows.play("3");
        } else if (dist > 50) {
          arrows.play("2");
        } else {
          arrows.play("1");
        }
      }
      if (isKeyDown("w")) {
        camVel = camVel.add(vec2(0, -speed * dt()));
      }
      if (isKeyDown("s")) {
        camVel = camVel.add(vec2(0, speed * dt()));
      }
      if (isKeyDown("a")) {
        camVel = camVel.add(vec2(-speed * dt(), 0));
      }
      if (isKeyDown("d")) {
        camVel = camVel.add(vec2(speed * dt(), 0));
      }
      camPos(vec2(
        lerp(camPos().x, camVel.x, lStrength),
        lerp(camPos().y, camVel.y, lStrength)
      ));
      drawCircle({
        pos: camVel,
        radius: 12
      });
    });
    var ballVel = vec2(0, 0);
    var mag = 100;
    var threshhold = 50;
    onMouseRelease(() => {
      if (golfBallDrag == true && !isWin) {
        ballVel = golfBall.pos.sub(trueMousePos()).scale(0.25);
        ballVel = vec2(Math.max(Math.min(ballVel.x, threshhold), -threshhold), Math.max(Math.min(ballVel.y, threshhold), -threshhold));
        console.log(ballVel);
        ballPhysics();
      }
      golfBallDrag = false;
      arrows.opacity = 0;
    });
    golfBall.onCollide("wall", (wall, col) => {
      console.log("Colloded");
      if (col.isBottom() || col.isTop()) {
        ballVel = vec2(ballVel.x, -ballVel.y);
      } else if (col.isLeft() || col.isRight()) {
        ballVel = vec2(-ballVel.x, ballVel.y);
      }
    });
    golfBall.onCollide("hole", (hole, col) => {
      isWin = true;
      golfBall.pos = hole.pos;
      golfBall.fadeOut(0.7);
      makeBallSmol(hole);
      wait(0.7, () => {
        whenHole();
      });
    });
    function ballPhysics() {
      mag = Math.sqrt(ballVel.x * ballVel.x + ballVel.y * ballVel.y);
      if (mag > 0.05) {
        ballVel = ballVel.scale(0.95);
        golfBall.moveBy(ballVel);
        wait(0.01, () => {
          if (!isWin)
            ballPhysics();
        });
      } else {
        return;
      }
    }
    __name(ballPhysics, "ballPhysics");
    function makeBallSmol(hole) {
      let ballScale = golfBall.scale;
      if (!(ballScale.x < 0.25 && ballScale.y < 0.25)) {
        wait(0.05, () => {
          golfBall.scale = vec2(ballScale.x * 0.95, ballScale.y * 0.95);
          makeBallSmol(hole);
        });
      }
    }
    __name(makeBallSmol, "makeBallSmol");
  }
  __name(addGolfBall, "addGolfBall");
  function forceCamVel(_camVel) {
    camVel = _camVel;
  }
  __name(forceCamVel, "forceCamVel");
  function trueMousePos() {
    return toWorld(mousePos());
  }
  __name(trueMousePos, "trueMousePos");

  // code/assets.js
  function loadAssets() {
    loadSprite("ball", "sprites/ball.png");
    loadSprite("grassball", "sprites/grassball.png");
    loadSprite("colorballmat", "sprites/colorballmat.png");
    loadSpriteAtlas("sprites/arrows.png", {
      "arrows": {
        x: 0,
        y: 0,
        width: 72,
        height: 66,
        sliceX: 3,
        anims: {
          "1": {
            from: 0,
            to: 0
          },
          "2": {
            from: 1,
            to: 1
          },
          "3": {
            from: 2,
            to: 2
          }
        }
      }
    });
    loadSpriteAtlas("sprites/tilesheet.png", {
      "g": {
        x: 0,
        y: 0,
        width: 64,
        height: 64
      },
      "h": {
        x: 0,
        y: 64,
        width: 64,
        height: 64
      },
      "w": {
        x: 0,
        y: 128,
        width: 64,
        height: 64
      }
    });
    console.log("LOADED ASSETS");
  }
  __name(loadAssets, "loadAssets");

  // code/tiles.js
  var blocks = ["g", "h", "w", "s"];
  var solids = ["w"];
  function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  __name(randomInterval, "randomInterval");
  function randomSmallOffset() {
    return randomInterval(0, 16);
  }
  __name(randomSmallOffset, "randomSmallOffset");
  function makeLevel(levelInfo, whenHole) {
    console.log("Making Level", levelInfo);
    var spawn = vec2(0, 0);
    let level = levelInfo[0];
    let hint = levelInfo[1] || "";
    let hintObject = add([
      text(hint),
      pos(0, 0)
    ]);
    hintObject.onUpdate(() => {
      hintObject.pos = camPos();
    });
    for (let i = 0; i < level.length; i++) {
      for (let j2 = 0; j2 < level[i].length; j2++) {
        let tile = level[i][j2];
        if (i == 0 || i == level.length - 1 || j2 == 0 || j2 == level[i].length - 1) {
          let offX = randomSmallOffset();
          let offY = randomSmallOffset();
          add([
            sprite("colorballmat"),
            z(-300),
            scale(2.4),
            pos(j2 * 64 + offX, i * 64 + offY),
            anchor("center"),
            color(31, 16, 42)
          ]);
          add([
            sprite("grassball"),
            scale(2.2),
            z(-100),
            pos(j2 * 64 + offX, i * 64 + offY),
            anchor("center")
          ]);
        }
        let spawnP = addTile(tile, j2 * 64, i * 64);
        if (spawnP.x != 0 && spawnP.y != 0) {
          console.log(spawnP);
          spawn = spawnP;
        }
      }
    }
    addGolfBall(spawn.x, spawn.y, whenHole);
    let cWidth = level[0].length;
    let cHeight = level.length;
    forceCamVel(vec2(cWidth / 2 * 64, cHeight / 2 * 64 - 32));
  }
  __name(makeLevel, "makeLevel");
  function addTile(tileName, x2, y) {
    let isSpecial = false;
    if (!blocks.includes(tileName)) {
      return vec2(0, 0);
    }
    if (tileName == "s") {
      isSpecial = true;
      tileName = "g";
    }
    let tile = add([
      sprite(tileName),
      pos(x2, y),
      anchor("center"),
      scale(1.01)
    ]);
    if (solids.includes(tileName)) {
      tile.use(area());
      tile.use(body({ isStatic: true }));
      tile.use("wall");
    }
    if (tileName == "h") {
      tile.use(area({ scale: vec2(0.01, 0.01) }));
      tile.use("hole");
    }
    if (isSpecial) {
      return vec2(x2, y);
    } else {
      return vec2(0, 0);
    }
  }
  __name(addTile, "addTile");
  function playTutorial(index) {
    if (tutorialLevels[index] == void 0) {
      go("mainMenu");
    } else {
      makeLevel(tutorialLevels[index], () => {
        go("tutorial", index + 1);
      });
    }
  }
  __name(playTutorial, "playTutorial");
  var tutorialLevels = [[
    [
      "wwwww",
      "wgggw",
      "wghgw",
      "wgggw",
      "wgggw",
      "wgggw",
      "wgsgw",
      "wgggw",
      "wwwww"
    ],
    "Click on the golf ball and hold backwards to shoot forwards"
  ], [
    [
      "wwwwwwwww",
      "wgggggggw",
      "wggggghgw",
      "wgsgwgggw",
      "wgggwwwww",
      "wwwww    "
    ],
    "Your ball can bounce off walls!"
  ]];

  // code/main.js
  vo({
    background: [174, 226, 255]
  });
  loadAssets();
  scene("tutorial", (level) => {
    console.log(level);
    playTutorial(level);
  });
  scene("mainMenu", () => {
  });
  go("tutorial", 0);
})();
//# sourceMappingURL=game.js.map
