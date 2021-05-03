var Ie = (function () {
    function Ie(prefix) {
        if (prefix === void 0) { prefix = ["Moz", "Webkit", "O", "ms", "Khtml"]; }
        this.prefix = [];
        this.userAgent = navigator.userAgent;
        this.minVersion = 6;
        this.maxVersion = 11;
        this.prefix = prefix;
    }
    Ie.prototype.isIe = function () {
        return !!(window.ActiveXObject || "ActiveXObject" in window);
    };
    Ie.prototype.is = function (front, after) {
        this.Error(front);
        if (after === undefined) {
            return front == 11 ? this.ie11() : this.range(front);
        }
        this.Error(after);
        if (front > after) {
            (front ^= after), (after ^= front), (front ^= after);
        }
        for (var i = front; i <= after; i++) {
            var result = i == 11 ? this.ie11() : this.range(i);
            if (result) {
                return true;
            }
        }
        return false;
    };
    Ie.prototype.isEdge = function () {
        return this.userAgent.indexOf("Edge") > -1;
    };
    Ie.prototype.detectCss = function (name) {
        if (name in document.body.style)
            return true;
        var prefProperty = name.charAt(0).toUpperCase() + name.substr(1);
        for (var _i = 0, _a = this.prefix; _i < _a.length; _i++) {
            var value = _a[_i];
            var v = value + prefProperty;
            if (v in document.body.style) {
                return true;
            }
        }
        return false;
    };
    Ie.prototype.ie11 = function () {
        var reg = /rv:(\d+)/;
        var exec = reg.exec(this.userAgent);
        return !!(exec && Number(exec[1]) == 11);
    };
    Ie.prototype.range = function (edition) {
        var reg = /MSIE\s+(\d+)/;
        var exec = reg.exec(this.userAgent);
        return !!(exec && Number(exec[1]) == edition);
    };
    Ie.prototype.Error = function (edition) {
        if (isNaN(edition) ||
            edition > this.maxVersion ||
            edition < this.minVersion) {
            throw new Error("Error in filling in version number, the correct range is " + this.minVersion + " - " + this.maxVersion);
        }
    };
    return Ie;
}());
var ie = new Ie();

export default ie;
//# sourceMappingURL=main.esm.js.map
