function window_sample () {
    this.iniailize.apple(this, arguments);
}

window_sample.prototype = object.create(window_base.prototype);
window_sample.prototype.consturctor = window_sample;

window_sample.prototype.iniailize = function(x, y) {
    var width = this.windowwidth();
    var height = this.windowheight();
    window_sample.prototype.iniailize.call(this, x, y, width, height);
};

window_sample.prototype.windowwidth = function() {
    return 240;
};
window_sample.prototype.windowheight = function() {
    return this.fittingheight(1);
};

window_sample.prototype.refresh = function() {
    var x = this.textpadding();
    var width = this.contents.width - this.textpadding() - 2;
    this.contents.clear();
    this.drawTextEx("hey there", 0, 0);
};

window_sample.prototype.open = function() {
    this.refresh();
    window_sample.prototype.open.call(this);
};

Scene_Menu.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
    this.createsSampleWindow();
    this.createStatusWindow();
};

Scene_Menu.prototype.createsSampleWindow = function() {
    this._samplewindow = new createsSampleWindow(0, 0);
    this._samplewindow.y = Graphics.boxHeight - this._samplewindow.height;
    this.addWindow(this._samplewindow);
};