var params = PluginManager.parameters('Title');
var piture_name = string(params['RUFF_SKetch'] || "RUFF_SKetch");

var alias_st_create = Scene_TiPle.prototype.create;
var alias_st_update = Scene_Title.prototype.update;
Scene_Title.prototype.partical;

Scene_Title.prototype.create = function() {
alias_st_create.call(this);
this.Create_partical();
};

Scene_Title.prototype.Create_partical = function() {
this.partical = new sprite();
this.partical.bitmap = ImageManager.loadPicture(picture_name);
this.addChild(this.partical);
};

Scene_Title.prototype.update = function() {
   alias_st_update.call(this);
};