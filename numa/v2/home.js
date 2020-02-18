(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"home_atlas_", frames: [[0,0,1920,1069],[0,2142,1920,1069],[0,1071,1920,1069]]}
];


// symbols:



(lib.forest_scaled = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lines = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NUMAmainhouse_scaled = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lines();
	this.instance.parent = this;
	this.instance.setTransform(-960,-534.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-534.5,1920,1069);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBzIAAjPIg0AAIAAgWIB9AAIAAAWIgzAAIAADPg");
	this.shape.setTransform(251.3,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSBQQgdgiAAguQAAgzAjgiQAjgjA1AAQAgAAAaANQAaANAQAXIgSANQgPgTgVgKQgVgKgZAAQgbAAgXANQgXANgNAXQgNAWAAAbQAAAqAdAcQAcAcArAAQAxAAAggmIASAOQgRAWgaAMQgZAMggAAQg7AAgjgpg");
	this.shape_1.setTransform(230.3,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBzIAAjlICDAAIAAAWIhsAAIAABIIBrAAIAAAWIhrAAIAABaIBrAAIAAAXg");
	this.shape_2.setTransform(208.5,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBzIAAjPIg0AAIAAgWIB9AAIAAAWIgzAAIAADPg");
	this.shape_3.setTransform(191.2,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBzIAAjlIAVAAIAADlg");
	this.shape_4.setTransform(179.7,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA7BzIAAhvIh0AAIAABvIgYAAIAAjlIAYAAIAABhIB0AAIAAhhIAWAAIAADlg");
	this.shape_5.setTransform(164.1,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhSBQQgdgiAAguQAAgzAjgiQAjgjA1AAQAgAAAaANQAaANAQAXIgSANQgPgTgVgKQgVgKgZAAQgbAAgXANQgXANgNAXQgNAWAAAbQAAAqAdAcQAcAcArAAQAxAAAggmIASAOQgRAWgaAMQgZAMggAAQg7AAgjgpg");
	this.shape_6.setTransform(139,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAtBzIhShqIgNAAIAABqIgXAAIAAjlIAuAAQAmAAANADQAVAFAMAQQANAPAAAXQAAASgJAOQgIAOgRAHQgQAHgcABIBSBqgAgygNIAoAAQAWAAALgEQALgFAGgJQAGgKAAgLQAAgMgGgKQgGgJgKgEQgKgEgXgBIgpAAg");
	this.shape_7.setTransform(115.8,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABWBzIgkhMIhiAAIgkBMIgaAAIBtjlIAFAAIBrDlgAAoARIgnhSIgnBSIBOAAg");
	this.shape_8.setTransform(92.6,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABWBzIgkhMIhiAAIgkBMIgaAAIBtjlIAFAAIBrDlgAAoARIgnhSIgnBSIBOAAg");
	this.shape_9.setTransform(57.9,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABEBzIhEitIhECtIgFAAIhBjlIAYAAIAvClIBCilIAEAAIBBClIAvilIAYAAIhCDlg");
	this.shape_10.setTransform(29.7,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABWBzIgkhMIhiAAIgkBMIgaAAIBtjlIAFAAIBrDlgAAoARIgnhSIgnBSIBOAAg");
	this.shape_11.setTransform(1.4,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhBBzIBgjPIhWAAIAAgWIB5AAIhgDOIBbAAIAAAXg");
	this.shape_12.setTransform(-19.4,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABWBzIgkhMIhiAAIgkBMIgaAAIBtjlIAFAAIBrDlgAAoARIgnhSIgnBSIBOAAg");
	this.shape_13.setTransform(-39.8,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABrBzIgXikIhRCkIgFAAIhSilIgXClIgWAAIAhjlIAEAAIBcC8IBdi8IAEAAIAhDlg");
	this.shape_14.setTransform(-67.4,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtBpQgUgOgGgVQgEgOAAgjIAAiKIAWAAIAACKIACAfQACAOAFAIQAHAJANAHQANAGAMAAQAMAAAKgFQAKgFAIgIQAGgJADgMQADgJAAgbIAAiKIAXAAIAACKQAAAegGAUQgGATgSAOQgSAOgaAAQgaAAgVgNg");
	this.shape_15.setTransform(-93.7,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABVBzIiXitIAACtIgYAAIAAjlIAGAAICYCwIAAiwIAWAAIAADlg");
	this.shape_16.setTransform(-117.1,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhVBWQgjgjAAgyQAAggAQgdQAQgcAcgQQAbgQAgAAQAzAAAkAjQAjAjAAAyQAAAygjAjQgjAkgyAAQgzAAgjgjgAgwhUQgXANgNAXQgMAWAAAbQAAApAcAcQAcAcAoAAQAaAAAXgNQAXgNANgWQAMgXAAgbQAAgbgMgWQgNgWgXgNQgYgOgZAAQgZAAgXAOg");
	this.shape_17.setTransform(-153.9,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAuBzIhjhrIAABrIgYAAIAAjlIAYAAIAABXIBbhXIAfAAIhuBnIB3B+g");
	this.shape_18.setTransform(-177.2,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgLBzIAAjlIAXAAIAADlg");
	this.shape_19.setTransform(-192.5,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAtBzIhShqIgNAAIAABqIgXAAIAAjlIAuAAQAmAAANADQAVAFAMAQQANAPAAAXQAAASgJAOQgIAOgRAHQgQAHgcABIBSBqgAgygNIAoAAQAWAAALgEQALgFAGgJQAGgKAAgLQAAgMgGgKQgGgJgKgEQgKgEgXgBIgpAAg");
	this.shape_20.setTransform(-206.3,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgtBpQgUgOgGgVQgEgOAAgjIAAiKIAXAAIAACKIABAfQABAOAHAIQAGAJANAHQANAGAMAAQAMAAAKgFQAKgFAHgIQAIgJACgMQADgJAAgbIAAiKIAXAAIAACKQAAAegGAUQgGATgSAOQgSAOgaAAQgaAAgVgNg");
	this.shape_21.setTransform(-228.1,1.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAtBzIhShqIgNAAIAABqIgXAAIAAjlIAuAAQAmAAANADQAVAFAMAQQANAPAAAXQAAASgJAOQgIAOgRAHQgQAHgcABIBSBqgAgygNIAoAAQAWAAALgEQALgFAGgJQAGgKAAgLQAAgMgGgKQgGgJgKgEQgKgEgXgBIgpAAg");
	this.shape_22.setTransform(-248.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273.9,-21.6,547.8,43.3);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NUMAmainhouse_scaled();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,1920,1069), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBEIAAh6IgfAAIAAgNIBKAAIAAANIgeAAIAAB6g");
	this.shape.setTransform(96.1,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAwQgQgUgBgcQABgeAUgUQAVgVAfAAQATAAAPAIQAQAHAKAOIgLAIQgJgLgNgGQgMgGgPAAQgPAAgOAIQgOAHgHAOQgIANAAAPQAAAZARARQARARAZAAQAdAAATgXIALAJQgLAMgPAIQgPAHgTAAQgiAAgWgYg");
	this.shape_1.setTransform(83.3,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAzBEIgVgtIg6AAIgVAtIgQAAIBBiHIACAAIBACHgAAYAKIgYgwIgWAwIAuAAg");
	this.shape_2.setTransform(67.4,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBEIAAh6IgeAAIAAgNIBJAAIAAANIgeAAIAAB6g");
	this.shape_3.setTransform(55.3,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAzBEIhZhmIAABmIgPAAIAAiHIADAAIBaBnIAAhnIAOAAIAACHg");
	this.shape_4.setTransform(43.1,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyAzQgVgVAAgdQAAgTAKgRQAJgRARgJQAQgKATAAQAeAAAVAVQAVAVAAAdQAAAegVAVQgVAVgdAAQgeAAgVgVgAgcgxQgOAHgHAOQgIANAAAQQAAAYARARQARAQAXAAQAPAAAOgHQANgIAIgNQAIgOAAgQQAAgPgIgNQgIgOgNgHQgOgIgPAAQgOAAgOAIg");
	this.shape_5.setTransform(26.8,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwAwQgRgUAAgcQAAgeAUgUQAVgVAfAAQATAAAQAIQAPAHAKAOIgLAIQgJgLgNgGQgMgGgPAAQgPAAgOAIQgOAHgIAOQgHANgBAPQABAZARARQARARAZAAQAdAAATgXIALAJQgLAMgOAIQgQAHgTAAQgjAAgUgYg");
	this.shape_6.setTransform(9.7,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AoChoIQFAAIAADRIwFAAg");
	this.shape_7.setTransform(52.6,15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AoCBoIAAjQIQFAAIAADQg");
	this.shape_8.setTransform(52.6,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.8,27.3);


(lib.Symbol4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBEIAAiHIBNAAIAAANIg/AAIAAArIA/AAIAAAMIg/AAIAAA2IA/AAIAAANg");
	this.shape.setTransform(78.2,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAwQgQgUAAgcQgBgeAWgUQAUgVAfAAQATAAAQAIQAPAHAJAOIgKAIQgJgLgMgGQgNgGgPAAQgPAAgOAIQgOAHgIAOQgIANAAAPQAAAZASARQARARAZAAQAcAAAUgXIAKAJQgJAMgPAIQgQAHgTAAQgiAAgWgYg");
	this.shape_1.setTransform(63.9,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_2.setTransform(53,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABEIg8iHIAQAAIAsBoIAuhoIAPAAIg8CHg");
	this.shape_3.setTransform(43.1,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBEIgxg/IgHAAIAAA/IgNAAIAAiHIAbAAQAWAAAHACQAMACAIAKQAIAJgBANQAAALgEAJQgGAIgKADQgKAFgQAAIAxA/gAgdgHIAYAAQAMAAAGgDQAIgCADgGQADgGABgHQgBgHgDgFQgEgGgGgCQgGgDgNAAIgYAAg");
	this.shape_4.setTransform(29.9,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBEIAAiHIBNAAIAAANIg/AAIAAArIA/AAIAAAMIg/AAIAAA2IA/AAIAAANg");
	this.shape_5.setTransform(18.1,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUBBQgKgHgJgPIAMgHQAMAWAPAAQAHAAAGgDQAGgDADgFQADgGAAgGQAAgHgFgGQgGgJgQgNQgRgMgEgGQgIgJAAgMQAAgJAFgHQAEgHAIgEQAHgFAJAAQAJAAAJAFQAIAFAJANIgKAIQgJgKgFgDQgFgEgHAAQgHAAgFAFQgFAFgBAIQAAAEACAEQADAFAFAFIAQANQASAMAHAKQAGALAAAKQAAAPgMALQgLALgQAAQgLAAgKgHg");
	this.shape_6.setTransform(6.3,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AHLhjIAAAGIAAC7IAAAGAHLBeIgMAAAnEgzIAAgqIOPAAAnKhdIAGAA");
	this.shape_7.setTransform(45.3,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AnNBkIAAjHIAGAAIAGAAIOPAAIAAC7IgMAAIAMAAIAAAGIAAAGgAnBg5IAAgqgAHOBYg");
	this.shape_8.setTransform(45,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,27.3);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBEIAAiHIBNAAIAAANIg/AAIAAArIA/AAIAAAMIg/AAIAAA2IA/AAIAAANg");
	this.shape.setTransform(74,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBEIAAiHIANAAIAAB6IA0AAIAAANg");
	this.shape_1.setTransform(63.5,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBEIAAiHIAbAAQAXAAAIACQAMADAHAJQAIAJAAANQAAAOgIAJQgHAIgNADQgJACgYAAIgKAAIAAA/gAgcgIIAXABQANAAAHgDQAGgCAEgGQADgGAAgHQAAgHgDgFQgEgGgGgCQgGgDgNAAIgYAAg");
	this.shape_2.setTransform(52.2,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABABEIgOhgIgwBgIgDAAIgwhhIgOBhIgNAAIATiHIACAAIA3BvIA3hvIACAAIAUCHg");
	this.shape_3.setTransform(36.5,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAzBEIgVgtIg6AAIgVAtIgQAAIBBiHIACAAIBACHgAAYAKIgYgwIgWAwIAuAAg");
	this.shape_4.setTransform(19.6,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBBQgKgHgJgPIAMgHQAMAWAPAAQAHAAAGgDQAGgDADgFQADgGAAgGQAAgHgFgGQgGgJgQgNQgRgMgEgGQgIgJAAgMQAAgJAFgHQAEgHAIgEQAHgFAJAAQAJAAAJAFQAIAFAJANIgKAIQgJgKgFgDQgFgEgHAAQgHAAgFAFQgFAFgBAIQAAAEACAEQADAFAFAFIAQANQASAMAHAKQAGALAAAKQAAAPgMALQgLALgQAAQgLAAgKgHg");
	this.shape_5.setTransform(6.3,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmZhjIMzAAIAADHIszAAg");
	this.shape_6.setTransform(42.1,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmZBkIAAjHIMzAAIAADHg");
	this.shape_7.setTransform(42.1,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,27.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAzBEIgVgtIg6AAIgVAtIgQAAIBBiHIACAAIBACHgAAYAKIgYgwIgWAwIAuAAg");
	this.shape.setTransform(112.8,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABABEIgOhgIgwBgIgDAAIgwhhIgOBhIgNAAIATiHIACAAIA3BvIA3hvIACAAIAUCHg");
	this.shape_1.setTransform(96,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaA+QgMgIgEgNQgCgIAAgVIAAhRIANAAIAABRIABASQABAJAEAFQADAGAIADQAIAEAHAAQAGAAAHgDQAGgDAEgFQAEgFACgHQACgFAAgRIAAhRIANAAIAABRQAAATgDALQgEALgLAJQgKAIgQAAQgPAAgMgIg");
	this.shape_2.setTransform(79.9,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzBEIhZhmIAABmIgPAAIAAiHIADAAIBaBnIAAhnIAOAAIAACHg");
	this.shape_3.setTransform(65.6,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBEIAAh6IgeAAIAAgNIBJAAIAAANIgeAAIAAB6g");
	this.shape_4.setTransform(47.1,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBEIAAiHIBNAAIAAANIg/AAIAAArIA/AAIAAAMIg/AAIAAA2IA/AAIAAANg");
	this.shape_5.setTransform(37.4,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBEIAAiHIBNAAIAAANIg/AAIAAArIA/AAIAAAMIg/AAIAAA2IA/AAIAAANg");
	this.shape_6.setTransform(26.1,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABABEIgOhgIgxBgIgBAAIgyhhIgNBhIgNAAIAUiHIACAAIA2BvIA3hvIACAAIAUCHg");
	this.shape_7.setTransform(10.8,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("ApSh0ISlAAIAADpIylAAg");
	this.shape_8.setTransform(59.5,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ApSB1IAAjpISlAAIAADpg");
	this.shape_9.setTransform(59.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131,27.3);


(lib.numawhitesvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// numa white.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjYMyQjMgxh/iTQh/iSgYjYQgTipgCijQgCiTABjSIAAlmIAAg5IDRAAIACA7IAAFoQAADUABCUQABCaAPCGQATC2B+BzQB9BzC5AIQCEAGBnglQBxgpBSheQBoh3ADi0IAFnXIAFnYIAAhNIDOAAQAEAVABAPIAAHMQAAEOgEC9QgFCWgsCQQgvCZhpBmQhnBkibAuQh0Aih5ADIgTAAQhuAAhsgbg");
	this.shape.setTransform(287.2,88.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArONLIAA5pIDMAAIAAEiIAvg2QAZgcAQgQQEWkgF+BAQC9AgB/CRQB/CRAUDSQARClADDyQACCVAADTIgCFoIgDANIjLAAIgDg4IAAmOQABjqgCiiQgBhcgDg1QgFhQgMg/Qgsjji7hYQi8hYjYBnQinBPhZCIQhYCHgHC4QgGCrgCD6IgEGmIABA+g");
	this.shape_1.setTransform(77.1,84.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhrK+QhfgXg+gZQhSggg9gvQiziLhGi0QhGi2AsjZQAsjVCFiJQCGiJDVgxQDCgtCkAzQCpA1CBCZIAiAkIAAjsICnAAIAAU3IilAAIAAjXIgYASQilC6joAlQgCAAgEADIgFAFgAlql+QicCbgCDdIAAAHQAADdCcCgQCdCfDYAAQDkAACZiZQCYiZAAjmIAAAAQAAjliYicQiXibjhAAIgCAAQjaAAicCZg");
	this.shape_2.setTransform(300.9,288.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AvtKtIAA06ICuAAIAADNIAKAIQC1j/EdAMQEzANBkEsIAshAQDRkkFEAxQCNAVBeBdQBcBdAbCQQAUBsACBzQACCygBJAIgCAfIiyAAIAAg5QgBqagCiFQgBhRgNg0QgShGgtgxQhChJhkgTQhlgUhmAoQjpBdgnEFQgSCEgCCIQgCBxABCkIAAEYIiuAAIgEs3QAAgWgDghIgGg2QgNiZh6hMQh5hKiVAvQiJArhOBjQhMBhgOCOQgKBxgDCeIgEEQQgBA1ABBPIAACIg");
	this.shape_3.setTransform(100.6,287.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ANBNGQjNgxh+iSQiAiTgYjYQgSiggDisQgCiTABjSIAAlmIAAg4IDRgBIACA8IAAFoQAADTACCVQABCSAOCOQATC2B+BzQB+BzC5AIQCFAFBmglQBygoBShfQBnh2ADi1QADidAHsSIAAhNIDOAAQAEAVABAQIAAHMQAAENgEC9QgFCZgsCNQguCZhpBmQhnBkicAvQh/Alh/AAQhuAAhugcgA7pMzIAA5oIDKAAIAAEiIBYhiQEXkgF/BAQC9AgB/CRQB+CRAVDSQARClADDyQACCQgBDYIgBFoIgEANIjLAAIgCg5IAAmNQAAjpgBijQgBhcgEg1QgFhRgLg/Qgtjii6hZQi8hYjZBnQinBQhZCHQhYCIgHC4QgFCsgDD5IgDGmIAAA9g");
	this.shape_4.setTransform(182.3,86.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,370.9,359);


(lib.numalogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.numawhitesvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(185.4,179.5,1,1,0,0,0,185.4,179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,370.9,359);


// stage content:
(lib.home = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// JakeLinesMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_71 = new cjs.Graphics().p("Eg3oAT2IAAlvINRAAIAAFvgECZ6AI0IAArdIEsAAIAALdgEielgMBIAAn0IMgAAIAAH0g");
	var mask_graphics_72 = new cjs.Graphics().p("Eg3oAOOINDgqIAZFoItNAqgECZHgC2IEtgLIAyLnIknAOgEielgMBIAAn0IOAABIACHzg");
	var mask_graphics_73 = new cjs.Graphics().p("Eg3oAOVIM1hUIAyFjItJBSgECYWgDDIEsgUIBkLwIkhAbgEielgMBIAAn0IPiACIACHzg");
	var mask_graphics_74 = new cjs.Graphics().p("Eg3oAObIMmh9IBMFcItEB8gECXjgDQIEtgfICWL6IkbApgEielgMBIAAn0IRCADIADHzg");
	var mask_graphics_75 = new cjs.Graphics().p("Eg3oAOhIMYimIBlFWIs/ClgECWxgDdIEtgpIDIMEIkWA2gEielgMBIAAn0ISiAFIAFHyg");
	var mask_graphics_76 = new cjs.Graphics().p("Eg3oAOoIMKjQIB9FPIs6DPgECV/gDqIEtg0ID6MPIkQBDgEielgMBIAAn0IUDAGIAHHxg");
	var mask_graphics_77 = new cjs.Graphics().p("Eg3oAOvIL8j6ICWFJIs2D4gECVMgD3IEug+IEsMZIkMBQgEielgMBIAAn0IVkAIIAIHwg");
	var mask_graphics_78 = new cjs.Graphics().p("Eg3oAO1ILtkjICxFDIsyEhgECUagEEIEuhIIFeMiIkGBegEielgMBIAAn0IXFAJIAIHvg");
	var mask_graphics_79 = new cjs.Graphics().p("Eg3oAO8ILflNIDJE8IstFLgECTngESIEvhSIGQMtIkABrgEielgMBIAAn0IYlAKIAKHvg");
	var mask_graphics_80 = new cjs.Graphics().p("Eg3oAPDILRl3IDiE2IspF0gECS2gEeIEuhdIHCM2Ij7B5gEielgMBIAAn0IaGALIALHug");
	var mask_graphics_81 = new cjs.Graphics().p("Eg3oAPKILCmhID8EvIskGegECSDgErIEvhoIH0NBIj1CGgEielgMBIAAn0IbnAMIAMHug");
	var mask_graphics_82 = new cjs.Graphics().p("Eg3oAPQIK0nJIEUEpIseHGgECRQgE5IEwhwIImNKIjwCTgEielgMBIAAn0IdIANIANHtg");
	var mask_graphics_83 = new cjs.Graphics().p("Eg3oAPXIKlnzIEvEiIsbHwgECQfgFFIEvh8IJYNVIjrCggEielgMBIAAn0IeoAOIAOHtg");
	var mask_graphics_84 = new cjs.Graphics().p("Eg3oAPeIKXodIFIEbIsWIagECPsgFTIEwiGIKKNfIjlCugEielgMBIAAn0MAgJAAQIAQHsg");
	var mask_graphics_85 = new cjs.Graphics().p("Eg3oAPlIKJpHIFgEWIsRJCgECO6gFfIEwiQIK8NoIjgC7gEielgMBIAAn0MAhqAARIARHrg");
	var mask_graphics_86 = new cjs.Graphics().p("Eg3oAPrIJ6pxIF6EQIsNJsgECOHgFtIExiaILuNyIjaDJgEielgMBIAAn0MAjKAASIATHrg");
	var mask_graphics_87 = new cjs.Graphics().p("Eg3oAPyIJtqbIGREKIsHKVgECNVgF5IExilIMgN8IjUDWgEielgMBIAAn0MAkrAATIAUHqg");
	var mask_graphics_88 = new cjs.Graphics().p("Eg3oAP5IJerFIGsEDIsEK/gECMjgGHIExivINSOHIjQDjgEielgMBIAAn0MAmLAAUIAVHqg");
	var mask_graphics_89 = new cjs.Graphics().p("Eg3oAP/IJPruIHGD9Ir/LogECLwgGUIEyi5IOEORIjKDwgEielgMBIAAn0MAntAAWIAVHpg");
	var mask_graphics_90 = new cjs.Graphics().p("Eg3oAQGIJCsYIHdD3Ir6MRgECK/gGgIExjEIO2OaIjFD+gEielgMBIAAn0MApNAAXIAXHpg");
	var mask_graphics_91 = new cjs.Graphics().p("Eg3oAQMIIztAIH3DvIr2M7gECKMgGuIEyjOIPoOlIi/ELgEielgMBIAAn0MAqtAAYIAZHog");
	var mask_graphics_92 = new cjs.Graphics().p("Eg3oAQTIIltqIIQDpIrxNkgECJZgG7IEzjYIQaOuIi6EZgEielgMBIAAn0MAsOAAaIAaHng");
	var mask_graphics_93 = new cjs.Graphics().p("Eg3oAQaIIWuUIIqDiIrtOOgECIogHIIEyjjIRMO5Ii0EmgEielgMBIAAn0MAtvAAbIAbHmg");
	var mask_graphics_94 = new cjs.Graphics().p("Eg3oAQgIIIu9IJDDcIroO3gECH1gHVIEzjtIR+PDIiuEzgEielgMBIAAn0MAvQAAcIAcHmg");
	var mask_graphics_95 = new cjs.Graphics().p("Eg3oAQnIH6vnIJbDWIriPggECHDgHiIEzj3ISwPMIipFBgEielgMBIAAn0MAwwAAdIAeHlg");
	var mask_graphics_96 = new cjs.Graphics().p("Eg3oAQuIHrwRIJ1DPIreQKgECGQgHvIE0kCITiPXIijFOgEielgMBIAAn0MAyRAAeIAeHlg");
	var mask_graphics_97 = new cjs.Graphics().p("Eg3oAQ0IHdw5IKODIIraQzgECFegH8IE0kMIUUPhIieFbgEielgMBIAAn0MAzyAAfIAfHkg");
	var mask_graphics_98 = new cjs.Graphics().p("Eg3oAQ7IHOxjIKoDCIrVRcgECEsgIJIE0kWIVGPrIiZFogEielgMBIAAn0MA1TAAgIAgHkg");
	var mask_graphics_99 = new cjs.Graphics().p("Eg3oARCIHByNILAC7IrRSGgECD5gIWIE1khIV4P1IiTF2gEielgMBIAAn0MA2zAAiIAiHjg");
	var mask_graphics_100 = new cjs.Graphics().p("Eg3oARJIGyy3ILZC2IrMSugECDIgIjIE0kqIWqP+IiOGDgEielgMBIAAn0MA4UAAjIAjHig");
	var mask_graphics_101 = new cjs.Graphics().p("Eg3oARPIGjzgILzCvIrHTYgECCVgIwIE2k1IXbQIIiJGRgEielgMBIAAn0MA51AAlIAkHhg");
	var mask_graphics_102 = new cjs.Graphics().p("Eg3oARWIGW0KIMLCqIrCUAgECBjgI9IE1k/IYOQSIiDGegEielgMBIAAn0MA7VAAmIAmHgg");
	var mask_graphics_103 = new cjs.Graphics().p("Eg3oARcIGH0zIMlCjIq+UqgECAwgJKIE2lKIZAQcIh+GsgEielgMBIAAn0MA82AAmIAnHhg");
	var mask_graphics_104 = new cjs.Graphics().p("Eg3oARjIF51dIM+CdIq6VTgEB/+gJXIE3lUIZxQnIh4G4gEielgMBIAAn0MA+WAAoIAoHgg");
	var mask_graphics_105 = new cjs.Graphics().p("Eg3oARqIFq2HINXCXIq0V8gEB/MgJkIE2leIakQwIhzHGgEielgMBIAAn0MA/3AApIApHgg");
	var mask_graphics_106 = new cjs.Graphics().p("Eg3oARwIFc2wINwCQIqvWmgEB+ZgJyIE4loIbVQ7IhtHTgEielgMBIAAn0MBBYAArIAqHeg");
	var mask_graphics_107 = new cjs.Graphics().p("Eg3oAR3IFO3aIOJCKIqrXPgEB9ngJ+IE3lzIcIREIhnHhgEielgMBIAAn0MBC4AAsIAsHeg");
	var mask_graphics_108 = new cjs.Graphics().p("Eg3oAR+IE/4DIOjCCIqnX5gEB81gKMIE4l9Ic5RPIhiHugEielgMBIAAn0MBEZAAtIAtHdg");
	var mask_graphics_109 = new cjs.Graphics().p("Eg3oASEIEx4sIO8B8IqiYigEB8CgKZIE4mHIdsRYIhcH8gEielgMBIAAn0MBF6AAuIAuHdg");
	var mask_graphics_110 = new cjs.Graphics().p("Eg3oASLIEj5WIPVB2IqeZLgEB7RgKlIE4mSIedRjIhYIIgEielgMBIAAn0MBHaAAvIAwHcg");
	var mask_graphics_111 = new cjs.Graphics().p("Eg3oASSIEU6AIPuBvIqZZ1gEB6egKzIE4mcIfQRtIhSIWgEielgMBIAAn0MBI7AAwIAxHcg");
	var mask_graphics_112 = new cjs.Graphics().p("Eg3oASZIEG6rIQHBqIqUaegEB5sgK/IE4mnMAgCAR3IhMIjgEielgMBIAAn0MBKcAAxIAxHbg");
	var mask_graphics_113 = new cjs.Graphics().p("Eg3oASfID47UIQgBkIqPbHgEB45gLNIE6mwMAgzASAIhHIxgEielgMBIAAn0MBL9AAzIAyHag");
	var mask_graphics_114 = new cjs.Graphics().p("Eg3oASmIDq7+IQ5BeIqLbwgEB4HgLZIE5m7MAhmASLIhBI9gEielgMBIAAn0MBNdAA0IA0Hag");
	var mask_graphics_115 = new cjs.Graphics().p("Eg3oAStIDb8oIRTBXIqHcagEB3VgLnIE6nFMAiXASVIg8JLgEielgMBIAAn0MBO+AA1IA1HZg");
	var mask_graphics_116 = new cjs.Graphics().p("Eg3oAS0IDN9SIRrBRIqBdDgEB2igLzIE6nQMAjKASgIg3JXgEielgMBIAAn0MBQfAA3IA2HYg");
	var mask_graphics_117 = new cjs.Graphics().p("Eg3oAS6IC/96ISEBKIp8dsgEB1wgMBIE7nZMAj7ASpIgxJlgEielgMBIAAn0MBSAAA3IA3HYg");
	var mask_graphics_118 = new cjs.Graphics().p("Eg3oATAICw+jISfBDIp5eWgEB0+gMNIE6nlMAkuAS0IgsJygEielgMBIAAn0MBTgAA5IA5HXg");
	var mask_graphics_119 = new cjs.Graphics().p("Eg3oATSICi/OIS3A9Ip0e/gEB0MgMQIE7nvMAlfAS9IgmKAgEielgL3IAAn0MBVAAA6IA7HXg");
	var mask_graphics_120 = new cjs.Graphics().p("Eg3oATkICT/3ITRA2IpvfpgEBzZgMSIE7n5MAmSATIIggKMgEielgLrIAAn0MBWiAA7IA6HWg");
	var mask_graphics_121 = new cjs.Graphics().p("Eg3oAT2MACFgggITqAwMgJrAgRgEByngMUIE7oCMAnEATRIgcKagEielgLfIAAn1MBYCAA9IA8HVg");
	var mask_graphics_122 = new cjs.Graphics().p("Eg3oAUIMAB3ghKIUCAqMgJmAg7gEBx1gMVIE8oNMAn1ATbIgWKogEielgLUIAAn0MBZjAA+IA9HVg");
	var mask_graphics_123 = new cjs.Graphics().p("Eg3oAUbMABogh0IUdAjMgJiAhlgEBxCgMWIE8oYMAooATmIgRK0gEielgLIIAAn0MBbDAA/IA/HUg");
	var mask_graphics_124 = new cjs.Graphics().p("Eg3oAUtMABagidIU2AcMgJdAiOgEBwQgMXIE9ojMApZATwIgLLCgEielgK8IAAn1MBckABAIBAHUg");
	var mask_graphics_125 = new cjs.Graphics().p("Eg3oAU/MABMgjHIVOAXMgJYAi3gEBvegMZIE8osMAqMAT6IgGLPgEielgKxIAAn0MBeFABBIBBHUg");
	var mask_graphics_126 = new cjs.Graphics().p("Eg3oAVSMAA+gjxIVnAQMgJUAjhgEBurgMaIE+o3MAq9AUEIAALcgEielgKlIAAn0MBflABCIBDHTg");
	var mask_graphics_127 = new cjs.Graphics().p("Eg5UAU0IhCgOIC0sLIgJolIDkvTIMfAOIFIBIIGXAiIgDAwIgYBwIiyFmIqLWmIheDtgECX9AHeI5dpPIiIg2Ikfi2IvSmEIhBgsIGmomIEUBsIHECDIf3MrIEFCyIgCBnIBIHdIAACAIgMBEgEiBcgJOIoRg4I0SgIIgmlpIAAiLIaCATINihSMA3LAA0IFoAqIAkE5IApCyIoQAXIi3ATItbgoMgsNAApg");
	var mask_graphics_128 = new cjs.Graphics().p("Eg8EAUVIg/gaIFRr0Igep0IDmn6ImkAtIizAlIuPhKMgvRABeIj8AAIoOhtI1ugIIhMlgIAAiVIb4AUIM0isMA7EABDIFZBQIAfFQIApCGICvmCIOVAVIE0CMIHNA/IAGA0IgYCAIj5E5ItXVNIhJBoIhvCxgECW8AHWI9AoIIicgzIkjjoIxdl6Ig/g4IINoXIE8BqIGjAiMAkYAMmID2DkIgFB0ICQHyIAACQIgYA9g");
	var mask_graphics_129 = new cjs.Graphics().p("Eg+zAUeIg9goIHvrdIg0rDIDek/IihA1IvFhuMgyTACVIkNgBIoNihI3JgJIhylWIAAifIdtAWIMIkIMA+9ABTIFJB2IAMCoIBciFIQJAbIEiDPIICBdIAQA2IgYCRIlBELIxWVhIheBlIhlBXIgbAdgECV7AH2MggjgHCIivgzIkokYIzplwIg9hEIJ2oHIFjBoIGAhAMAo6AMjIDoETIgICBIDYIJIAACgIgkA1g");
	var mask_graphics_130 = new cjs.Graphics().p("EhBiAUvIg8g1IKNrGIhJsRICXieIqnhgMg1WADKIkegBIoLjWI4lgIIiXlNIAAioIfjAWILbliMBC1ABiIEdCNIRzAiIEPETII5B6IAYA5IgXCiImJDdI1VV0IhzBiIhvAbIgiAcgECU6AIeMgkHgF6IjCgxIktlKI1zlmIg7hRIAAgBILen2IGKBmIFfigMAtbAMdIDYFFIgKCNIEgIfIAACwIgwAug");
	var mask_graphics_131 = new cjs.Graphics().p("Egs8AUmIgpAcI2sgEIg7hCIMrqwIhetfIBuhZIkHgsMg4YAEBIktgBIoKkKI6AgKIi+lDIAAiyMAhYAAYIKum9MBGuAByIDMCEISbAlID7FXIJvCXIAgA8IgVCzInRCvI5UWHIiJBfgECT5AJEMgnqgEzIjVgwIkyl6I3+leIg6hcIAAgBINHnmIGyBjIE8kBMAx8AMZIDJF1IgLCbIFnI0IAADBIg7Alg");
	var mask_graphics_132 = new cjs.Graphics().p("EgtfAUbIguAbI40gFIg4hPIPJqZIhzumMg39AElIk+gBIoIlAI7bgJIjkk6IAAi8MAjOAAZIKBoYMBKnACCICXB8ISlAoIDoGaIKlC1IApA/IgUDEIoZCBI9TWaIieBcgECS4AJOMgrMgDsIjpguIk3msI6JlTIg5hpIAAgBIOwnWIHYBhIEcliMA2cAMUIC7GmIgOCoIGvJJIAADSIhIAeg");
	var mask_graphics_133 = new cjs.Graphics().p("EguCAUQIg1AaI64gGIg3hcIRmqCIhztZMg1cAE4IlPgBIoHlzI83gKIkJkwIAAjGMAlDAAaIJUpzMBOfACRIB1B2ISfAqIDUHdILaDTIAyBCIgUDUIpfBUMghRAWsIi0BagECR3AJZMguwgCmIj8gsIk7neI8UlJIg3h1IAAgBIQYnGIIABeID6nCMA69AMPICrHXIgQC0IH3JgIAADiIhTAWg");
	var mask_graphics_134 = new cjs.Graphics().p("EgulAUFIg7AaI8/gHIg0hpIUDpsIhvsFMgzAAFFIlgAAIoEmoI+TgLIkvknIAAjPMAm5AAbIInrOMBSYACiIBbBvISOArIDBIhIMRDwIA7BFIgUDlIqmAlMglRAXAIjKBXgECQ2AJjMgySgBeIkQgrIlBoOI+flBIg1iBIAAgBISAm2IIoBcIDYojMA/fAMKICbIIIgSDCII/J1IAADyIhgAOg");
	var mask_graphics_135 = new cjs.Graphics().p("EgvIAT6IhBAZI/FgIIgzh2IWhpVIhoqtMgwnAFPIlwgBIoDndI/tgLIlWkdIAAjZMAouAAdIH6sqMBWSACyIBIBpIR2AsICvJlINFENIBFBHIgTD2IrvgIMgpPAXTIjgBUgECP1AJtMg12gAWIkjgqIlEpAMggrgE3IgziNIAAgBITommIJPBZIC2qDMBEAAMFICNI5IgVDPIKHKKIAAEDIhsAHg");
	var mask_graphics_136 = new cjs.Graphics().p("EgvrATwIhIAWMghKgAIIgyiDIZAo+IhfpRMguRAFUImBgBIoAoRMghKgAMIl7kUIAAjiMAqkAAeIHNuFMBaKADCIA5BkIRcAsICaKoIN9EqIBNBLIgSEGIs3g2MgtNAXnIj1BRgECcvAQcIt7mlMg5ZAAxIk2gpIlKpxMgi1gEtIgyiaIAAgBIVSmVIJ2BXICTrkMBIiAMAIB+JrIgYDbILPKgIAAESg");
	var mask_graphics_137 = new cjs.Graphics().p("EgwOATkIhNAWMgjRgAJIgviRIbcomIhSnyMgr9AFXImRgBIn/pHMgimgALImhkLIAAjsMAsZAAfIGhvgMBeCADRIAuBgIQ8AsICILsIOzFHIBWBOIgREXIt/hlMgxMAX6IkLBPgECciARAIuum/Mg89AB5IlJgoIlPqjMglBgEiIgvinIAAgBIW5mFIKeBUIBytFMBNCAL8IBvKbIgaDpIMXK1IAAEkg");
	var mask_graphics_138 = new cjs.Graphics().p("EgwwATZIhVAWMglWgAKIguieId6oQIhEmPMgprAFVImigBIn9p7MgkBgAMInHkBIAAj2MAuPAAgIF0w6MBh6ADgIAlBaIQbAsIB1MxIPpFkIBgBQIgSEoIvFiSMg1NAYNIkgBLgECcWARjIvjnXMhAgAC/IldglIlUrVMgnLgEZIguizIAAgBIYil1ILFBSIBRumMBRjAL3IBfLNIgbD1INeLLIAAE0g");
	var mask_graphics_139 = new cjs.Graphics().p("EgxTATOIhbAVMgndgALIgsirMAgZgH5Ig1kqMgnbAFRImzgBIn7qvMglcgAOIntj2IAAkAMAwEAAhIFHyVMBl0ADwIAdBWIP5ArIBiN0IFUB8IZIlWILtBPIAuwGMBWEALyIBRL9IgeEDIOmLgIAAFEIibgXIwanwMhECAEHIlwglIlZsGI9YjAIBLA7IgRE4IwNjAMg5LAYgIk2BJg");
	var mask_graphics_140 = new cjs.Graphics().p("Egx1ATDIhjAUMgphgAMIgri4MAi3gHiIgkjCMglMAFKInEAAIn6rlMgm3gANIoTjuIAAkJMAx6AAjIEazxMBprAEAIAYBSIPVAqIBPO3IBjAmITYjuIMTBNIANxnMBamALtIBCMuIghEQIPuL2IAAFUIingfIxPoJMhHmAFOImCgjIles3IyUhvIAGAEIgQFLIxVjuInhDCIg1B4IiIgrMgysAUkIlLBGg");
	var mask_graphics_141 = new cjs.Graphics().p("EgyYAS4IhpATMgrogAMIgojGMAlTgHLIgQhYMgi/AFCInUgBIn4sZMgoTgAOIo5jkIAAkTMAzwAAkIDs1LMBtkAEPIATBOIOwAoIA5PDILdh+IM7BLIgWzIMBfHALoIAyNfIgiEdIQ2MMIAAFkIizgnIyDoiMhLJAGWImXgiIlitoIoRguIgNE6IydkbIkqByIhgDzIkfhfMg2gAVAIlhBCg");
	var mask_graphics_142 = new cjs.Graphics().p("Egy8AStIhtASMgtvgANIgnjTIZykaIywCxInkgBIn2tOMgpwgAPIpejZIAAkdMA1mAAlIC/2mMBxdAEfIAPBJIOKAoIAjOuIB+gUINiBIIg30oMBjnALjIAkOQIglEqIR+MhIAAF1Ii/guIy4o8MhOtAHdImpggIkEqbIgCA7IzllKIixBBIAiAbIhuE0ImxiUMg6ZAVeIl2A/g");
	var mask_graphics_143 = new cjs.Graphics().p("EgzeASiIh1ARMgv0gAOIgljgIDugkInZtRMgrKgAPIqEjPIAAknMA3bAAmICS4BMB1VAEvIANBGINjAmIAUQVIGiAgIhY2KMBoHALfIAWPBIgoE4ITGM2IAAGFIjLg2IzupUMhSOAIkIm+gfIksskIqKi4IhyAoIBpBLIhpFHIo9jJMg+XAV7ImMA9g");
	var mask_graphics_144 = new cjs.Graphics().p("Eg0BASXIh7ARMgx6gAQIgjjsIHPhAImLryMgsmgAPIqqjHIAAkwMA5RAAoIBk5dMB5PAE/IAJBCIJHAaIgclYMBspALaIAGPyIgpFFIUNNLIAAGWIjXg+I0jptMhVyAJrInQgdIkhsiIhHD5IrEj/MhCcAWZImiA6g");
	var mask_graphics_145 = new cjs.Graphics().p("Eg0jASMIiCAPMgm9gAKIgBgBItCgFIghj6IK7hVIlIqZMguBgAQIrRi8IAAk7MA7GAAqIA463MB78AFLIgZkMMBxJALVIgJQjIgrFSIVVNhIAAGmIjjhGI1YqGMhZUAKyInkgbIkUsWIjchRMhGkAW5Im4A2g");
	var mask_graphics_146 = new cjs.Graphics().p("Eg1GASBIiIAOIyCgFIprBmIoogBIgxhrIxAgFIggkHIOxhnIkPpEMgvcgARIr3izIAAlEMA88AArIAL8SMB1eAE+IgdkCMB1sALQIgYRUIguFfIWdN2IAAG3IjvhNI2MqfMhc5AL5In3gaIkVs2MhFKAVoInNA1g");
	var mask_graphics_147 = new cjs.Graphics().p("Eg1pAR2IiPAOIlvgCIzEDMIo4AAIhejVI1DgHIgekUISvh0IjdnzMgw5gARIscirIAAlNMA+xAAsIgi9tMBvBAExIgfj4MB6MALLIgmSFIgwFsIXkOMIAAHHIj7hVI3Bq5MhgcANBIoKgYIjurUMhA9ATnIniAxg");
	var mask_graphics_148 = new cjs.Graphics().p("Eg18AShI4fELIpIAAIiHk/I5JgIIgckhIWyh9IiymnMgyUgARItCigIAAlYMBAmAAtIhO/IMBoiAEjIghjtMB+uALGIg2S2IgzF5IYtOhIAAHYIkHhdI33rRMhj+AOIIoegXIjKp8Mg8sARvIn4Avg");
	var mask_graphics_149 = new cjs.Graphics().p("Eg19AUUI2ND3IpZgBIirmoI9UgKIgakuIa7iDIiNldMgzvgASItoiXIAAlhMBCcAAvMgB8ggkMBiDAEVIghjiMCDOALBIhFTnIg0GGIZ0O3IAAHoIkThkI4srrMhnhAPQIoxgWIiroqMg4WAP/IoOArg");
	var mask_graphics_150 = new cjs.Graphics().p("Eg1+AWIIz8DhIpqgBIjMoRMghhgALIgZk8IfJiFIhrkXMg1LgATIuOiNIAAlrMBESAAwMgCpgh/MBbkAEGIghjXMCHtAK9IhTUYIg3GTIa8PNIAAH4IkfhsI5gsEMhrFAQXIpEgUIiQneMgz9AOTIojAog");
	var mask_graphics_151 = new cjs.Graphics().p("Eg2AAX9IxqDKIp6AAIjqp7MglygANIgXlIMAjbgCFIhPjUMg2mgATIu0iEIAAl1MBGHAAyMgDWgjbMBVDAD2IggjJMCMPAK3IhjVJIg5GgIcEPiIAAIJIkqh0I6WscMgivAFfIgCBjIi1hHIrEBwIAAAAIgBAAMg9+AJzIpXgTIh3mXMgvhAMtIo5Alg");
	var mask_graphics_152 = new cjs.Graphics().p("Eg2DAZzIvXCzIqLgBIkFrlMgqFgAOIgVlWMAnugCAIg0iVMg4BgATIvah7IAAl+MBH9AAyMgEDgk0MBOiADlIggi9MCQxAKzIhzV6Ig7GtIdMP4IAAIZIk2h7I7Ms2I8oEqIgDDcImHicImfBEIgQB/IjWhaMhFTALSIprgRIhilXMgrBALNIpQAjg");
	var mask_graphics_153 = new cjs.Graphics().p("Eg2GAbqItDCaIqcAAIkftPMguagAPIgUljMAsHgB7IgdhXMg5dgAUIwAhxIAAmIMBJyAAzMgEvgmPMBIBADUIggivMCVSAKuIiBWrIg9G6IeTQNIAAIqIlDiDI8AtPI2iDxIgFFaIpWj1Ih/AVIgbEDImvi2MhMoAM0Ip9gPIhPkaMgmgAJxIplAgg");
	var mask_graphics_154 = new cjs.Graphics().p("Eg2KAdjIqvB/IqsAAIk2u4MgyzgARIgRlwMAwhgByIgJgdMg64gAUIwmhnIAAmTMBLoAA1MgFcgnqMBBfADDIgeihMCZzAKpIiQXcIhAHHIfbQjIAAI6IlPiLI81toIwcC1IgGHaIqQkRIgcExIqFkVMhT9AOaIqQgOIg/jjMgh+AIbIp5Adg");
	var mask_graphics_155 = new cjs.Graphics().p("Eg2OAfbIobBmIq9gBIlLwiMg3LgASIgRl9MAofgBPMgvrgARIxMheIAAmcMBNdAA2MgGJgpEMA69ACwIgbiTMCeTAKlIifYNIhCHUMAgjAQ4IAAJLIlaiTI9quBIq8B7IAkASIgGJHIpSj8IgWEYItel2MhbQAQCIqkgOIgviuI9YHHIqQAag");
	var mask_graphics_156 = new cjs.Graphics().p("Eg2TAhVImFBKIrOgBIlfyLMg7ngAUIgOmLIN8gVIx2gHIxxhUIAAmmMBLBAA1IEQgHMgG0gqWMA0bACeIgaiDMCi1AKfIivY+IhEHhMAhrAROIAAJbIlniaI+eubInjBXIDPBqIgFJXIoSjkIgRD+Iw4nbMhijARsIq4gMIggh9I4yF3IqlAXg");
	var mask_graphics_157 = new cjs.Graphics().p("Eg2XAjPIjxAuIreAAIlxz0MhAEgAWIgLlxIy/hLIAAmwMBEkAAwIMggPMgHfgrjMAt4ACLIgXh0MBb+AF+MAiRAB2IAAAEMApHACkIi9ZuIhHHvMAizARjIAAJrIlziiI/TuzIkbA0ICDA7IEJCFIgGJoInRjMIgODiI0RpAMhp1ATYIrLgLIgVhPI0JEqIq6AUg");
	var mask_graphics_158 = new cjs.Graphics().p("Eg2dAlKIhbARIruAAImC1dMhEigAYIgIlFIwTg3IAAm6MA+BAArIU3gSMgIKgs1MAnVAB5IgVhlMBHnAEqMA3aAC/IJnAeIgBAHMAjQACJIjLafIhKH7MAj7AR6IAAJ6Il+ipMggJgPMIhYAQIE7CPIESCIIgFJ6ImRiyIgJDFI3sqqMhxHAVHIregJIgKgmIvgDiIrQARg");
	var mask_graphics_159 = new cjs.Graphics().p("Eg2mAm6IrBAAImS3IMhJAgAZIgGkWItmgnIAAnDMA3pAAnIdDgRMgI2guMMAgzABlIgShUMBBvAEKMBJWAD6IH8AWIgCAKIdZBuIjbbQIhMIIMAlDASPIAAKLImLiwIzFpCIgDJBIlQiWIgGCmI7HsTMh4YAW2IrogHIq+CcIrnAPg");
	var mask_graphics_160 = new cjs.Graphics().p("Eg2yAoYIo1AAImg4xMhNigAaIgDjlIq5gZIAAnNMAr9AAhIOkADIcBgNMgJkgvmIaQBRIgPhEMAzDADNMBfeAFBIK4AfIgBALIXhBVIjqcBIhNIVMAmKASkIAAKdImWi5It3mjIgCHOIkOh7IgECHI+gt+Mh/rAYoIpPgEIo2B7Ir8AMg");
	var mask_graphics_161 = new cjs.Graphics().p("Eg3AAp2ImoAAImt6aMhSDgAcIgBiwIoMgPIAAnWIf2AaIfCAKIUcgIIFFAFMgKSgxKITsA9IgLgzMAnbACcMBkNAFMIcKBYIgBAJIB/AGIAAACIPpA3Ij4cyIhQIiMAnSAS6IAAKsImijAIopkFIgBFbIjKhdIgDBmMgh8gPrMiG7AabIm3gCImtBcIsRAIg");
	var mask_graphics_162 = new cjs.Graphics().p("Eg3NArVIkbAAIm68EMhWkgAeIgCh4IldgHIAAngIY8AUMAqYAATIKigFIMbAMMgLBgyxINIApIgIgjIbDBqMB0nAF9MAiiABtIgBAGIBUAEIAAADIKcAjIkIdjIhSIwMAoaATPIAAK8IqHkuIgBDnIiIg/IgBBGMglWgRaMiOOAcQIkigBIkgA8IsnAGg");
	var mask_graphics_163 = new cjs.Graphics().p("Eg3bAszIiNAAInG9tMhbIgAgIAAg9IivgCIAAnqIMrALMAw/AAcIKvABITvAQMgLwg0VIGlAVIgFgSISrBFMCp5AIiIAAADIAqACIAAACIFOARMgFrAnRMApiATkIAALNIlEiYIAAB1IhEggIAAAjMgozgTJMiVdAeFIiPAAIiTAeIs8ADg");
	var mask_graphics_164 = new cjs.Graphics().p("Eg3oAuSInR/XMhfsgAhIAAn0MBd/ABBMgMeg14MDG9AJ6MgF9AoOMAqqAT7IAALdMgsNgU6IAAABMicwAf8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_graphics_71,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_72,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_73,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_74,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_75,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_76,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_77,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_78,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_79,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_80,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_81,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_82,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_83,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_84,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_85,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_86,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_87,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_88,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_89,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_90,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_91,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_92,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_93,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_94,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_95,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_96,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_97,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_98,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_99,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_100,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_101,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_102,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_103,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_104,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_105,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_106,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_107,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_108,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_109,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_110,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_111,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_112,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_113,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_114,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_115,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_116,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_117,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_118,x:935,y:978.7}).wait(1).to({graphics:mask_graphics_119,x:935,y:977.7}).wait(1).to({graphics:mask_graphics_120,x:935,y:976.5}).wait(1).to({graphics:mask_graphics_121,x:935,y:975.4}).wait(1).to({graphics:mask_graphics_122,x:935,y:974.2}).wait(1).to({graphics:mask_graphics_123,x:935,y:973}).wait(1).to({graphics:mask_graphics_124,x:935,y:971.9}).wait(1).to({graphics:mask_graphics_125,x:935,y:970.7}).wait(1).to({graphics:mask_graphics_126,x:935,y:969.5}).wait(1).to({graphics:mask_graphics_127,x:935,y:967.2}).wait(1).to({graphics:mask_graphics_128,x:935,y:964.9}).wait(1).to({graphics:mask_graphics_129,x:935,y:958.7}).wait(1).to({graphics:mask_graphics_130,x:935,y:951.5}).wait(1).to({graphics:mask_graphics_131,x:935,y:944.7}).wait(1).to({graphics:mask_graphics_132,x:935,y:940.6}).wait(1).to({graphics:mask_graphics_133,x:935,y:936.5}).wait(1).to({graphics:mask_graphics_134,x:935,y:932.4}).wait(1).to({graphics:mask_graphics_135,x:935,y:928.3}).wait(1).to({graphics:mask_graphics_136,x:935,y:924.2}).wait(1).to({graphics:mask_graphics_137,x:935,y:920.1}).wait(1).to({graphics:mask_graphics_138,x:935,y:916}).wait(1).to({graphics:mask_graphics_139,x:935,y:911.9}).wait(1).to({graphics:mask_graphics_140,x:935,y:907.8}).wait(1).to({graphics:mask_graphics_141,x:935,y:903.7}).wait(1).to({graphics:mask_graphics_142,x:935,y:899.6}).wait(1).to({graphics:mask_graphics_143,x:935,y:895.5}).wait(1).to({graphics:mask_graphics_144,x:935,y:891.4}).wait(1).to({graphics:mask_graphics_145,x:935,y:887.4}).wait(1).to({graphics:mask_graphics_146,x:935,y:883.3}).wait(1).to({graphics:mask_graphics_147,x:935,y:879.2}).wait(1).to({graphics:mask_graphics_148,x:935,y:875.1}).wait(1).to({graphics:mask_graphics_149,x:935,y:871}).wait(1).to({graphics:mask_graphics_150,x:935,y:866.9}).wait(1).to({graphics:mask_graphics_151,x:935,y:862.8}).wait(1).to({graphics:mask_graphics_152,x:935,y:858.7}).wait(1).to({graphics:mask_graphics_153,x:935,y:854.6}).wait(1).to({graphics:mask_graphics_154,x:935,y:850.5}).wait(1).to({graphics:mask_graphics_155,x:935,y:846.4}).wait(1).to({graphics:mask_graphics_156,x:935,y:842.3}).wait(1).to({graphics:mask_graphics_157,x:935,y:838.2}).wait(1).to({graphics:mask_graphics_158,x:935,y:834.1}).wait(1).to({graphics:mask_graphics_159,x:935,y:830}).wait(1).to({graphics:mask_graphics_160,x:935,y:825.9}).wait(1).to({graphics:mask_graphics_161,x:935,y:821.8}).wait(1).to({graphics:mask_graphics_162,x:935,y:817.7}).wait(1).to({graphics:mask_graphics_163,x:935,y:813.6}).wait(1).to({graphics:mask_graphics_164,x:935,y:809.5}).wait(77));

	// JakeLines
	this.instance = new lib.lines();
	this.instance.parent = this;

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,534.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},71).to({state:[{t:this.instance_1}]},112).to({state:[{t:this.instance_1}]},16).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(183).to({_off:false},0).to({alpha:0},16).wait(42));

	// Meet Numa
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(647.9,391.4,1,1,0,0,0,115,13.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).wait(1).to({regX:59.5,regY:11.7,x:592.4,y:389.4,alpha:0.048},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:1},0).wait(174));

	// Sample
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(647.9,413.7,1,1,0,0,0,115,13.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Symbol3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46).to({_off:false},0).wait(1).to({regX:42.1,regY:14.1,x:575,y:414.1,alpha:0.048},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:1},0).wait(174));

	// Service
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(647.9,436,1,1,0,0,0,115,13.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46).to({_off:false},0).wait(1).to({regX:45.2,x:578.1,alpha:0.048},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:1},0).wait(174));

	// Contact
	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(647.4,459,1,1,0,0,0,115,13.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.Symbol5(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46).to({_off:false},0).wait(1).to({regX:52.6,regY:15.1,x:585,y:460.4,alpha:0.048},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:1},0).wait(174));

	// Ruriko Numazawa Architect
	this.instance_6 = new lib.Tween1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(793.8,321.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).wait(1).to({regX:0.7,regY:1.1,x:794.5,y:322.2,alpha:0.056},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// numa logo
	this.instance_7 = new lib.numalogo("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1471.5,397.9,0.511,0.511,0,0,0,185.4,178.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(1).to({regY:179.5,y:398.2,alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Main House
	this.instance_8 = new lib.Symbol10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(960,534.5,1,1,0,0,0,960,534.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(173).to({_off:false},0).wait(1).to({alpha:0.025},0).wait(1).to({alpha:0.051},0).wait(1).to({alpha:0.076},0).wait(1).to({alpha:0.101},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.152},0).wait(1).to({alpha:0.177},0).wait(1).to({alpha:0.202},0).wait(1).to({alpha:0.228},0).wait(1).to({alpha:0.253},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.329},0).wait(1).to({alpha:0.354},0).wait(1).to({alpha:0.379},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.43},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.506},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.582},0).wait(1).to({alpha:0.607},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.683},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.734},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.835},0).wait(1).to({alpha:0.86},0).wait(34));

	// REFERENCE_BASEFOREST
	this.instance_9 = new lib.forest_scaled();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(241));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,534.5,1920,1069);
// library properties:
lib.properties = {
	id: 'B055EE74C211434B9228961B18489959',
	width: 1920,
	height: 1069,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/home_atlas_.png", id:"home_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B055EE74C211434B9228961B18489959'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;