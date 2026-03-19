(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"claussen_midterm_atlas_1", frames: [[0,855,818,561],[1050,0,326,653],[1150,765,319,651],[1471,765,323,633],[1654,0,300,681],[642,0,406,669],[1378,0,274,763],[820,671,328,669],[0,1614,666,408],[668,1614,1211,167],[0,1418,1408,194],[0,0,640,853]]},
		{name:"claussen_midterm_atlas_2", frames: [[586,660,279,632],[0,0,306,659],[295,661,289,660],[308,0,281,658],[591,0,271,613],[0,661,293,685],[533,1323,281,649],[0,1348,531,362],[0,1712,298,329],[300,1974,179,46]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_47 = function() {
	this.initialize(ss["claussen_midterm_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["claussen_midterm_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["claussen_midterm_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["claussen_midterm_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["claussen_midterm_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["claussen_midterm_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["claussen_midterm_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["claussen_midterm_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["claussen_midterm_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["claussen_midterm_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["claussen_midterm_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["claussen_midterm_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["claussen_midterm_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["claussen_midterm_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["claussen_midterm_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(img.CachedBmp_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2874,225);


(lib.CachedBmp_31 = function() {
	this.initialize(ss["claussen_midterm_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["claussen_midterm_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["claussen_midterm_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["claussen_midterm_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["claussen_midterm_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(img.CachedBmp_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5964,175);


(lib.CachedBmp_25 = function() {
	this.initialize(ss["claussen_midterm_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["claussen_midterm_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.toastytween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_47();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.Bitmap6();
	this.instance_1.setTransform(122.95,89.2,0.7019,0.7019);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.toastytween, new cjs.Rectangle(0,0,572.2,687.9), null);


(lib.subzero = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_40();
	this.instance.setTransform(-44.2,-85.05,0.25,0.25);

	this.instance_1 = new lib.CachedBmp_41();
	this.instance_1.setTransform(-43.2,-82.25,0.25,0.25);

	this.instance_2 = new lib.CachedBmp_42();
	this.instance_2.setTransform(-46.4,-81.95,0.25,0.25);

	this.instance_3 = new lib.CachedBmp_43();
	this.instance_3.setTransform(-50.8,-75.55,0.25,0.25);

	this.instance_4 = new lib.CachedBmp_44();
	this.instance_4.setTransform(-40.65,-75.6,0.25,0.25);

	this.instance_5 = new lib.CachedBmp_45();
	this.instance_5.setTransform(-37.35,-80.25,0.25,0.25);

	this.instance_6 = new lib.CachedBmp_46();
	this.instance_6.setTransform(-37.45,-80.6,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.8,-85,94.9,170.2);


(lib.sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000131").s().p("Egs+A51ImPgUQjIgJjHgTQjJgSjKAAImgAAIgaAAIgPAGQiYBDiXhHIgDgBIg+AAQjKACjJgJQi/gJiqhOQgugVgjglQiPiagSjRQgSjUBvi2QB3jEDiAHQBCACBBATQBoAHBoADIgBkXQgCjMgHjMQgHjOgJjOQgKjQgGjQQgGjLgEjMIgKmaIgKmTQgGjNAAjNQAAjKgMjLQgMjKgUjKQgVjOgLjOQgLjOAPjOQAQjUCTiZQB7iACxgfQDNgjDOgfQDGgcDIgOQDMgPDMgRQDJgQDKgPQDKgPDKgHQDLgIDMgBQDPgBDQACQDHABDHAHQDLAHDKABQDMABDMAEIGaAKQDOAFDNAIIGbARQDOAIDOADQDOAEDOAAQDOAADOAEQDLAEDMAKIGaAUQDNAKDNANQDLAMDLADQDLADDKASQDPASDPAVICOAOQhehwghiRQghiPAViQQAaiyB3iIQBoh4CfgNQCdgNB0BuQBnBiBGB/QCCDvA9EKQAYBmAUBnIATADIAoAHQBoAnBJBTQBMBWAmBsQAuCBgGCJQgFB0goBtQgnBrhRBRQgYAYgbAUQAFA1ABA1QADCAAQB/IAjEXIAUCvIAAgBIAEAjIABAEIABAOIABAEIAAACQAQCSAUCRQAcDHAWDJQAWDLAZDLQAZDKAXDJQAXDTAVDTQAVDTAZDTIA/IbIA4HPQAgEBgrD9QgfC5iICAQi9CwkAg+QgggIgigDQjFgRjGgEImZgHQjQgEjPgLQjJgKjJABImXABQjDABjEADQjMADjMAJQjFAIjGgCQjRgBjRADQjRAEjRAHImFANQjCAGjBAHImTAPIl/ANQjEAHjFAMQjNAOjNARQjMARjNAHQjAAGjAAPQjLAQjMAMQjMAMjMABIg6AAgEBT1AmwIABAAIgCAAIABAAg");
	this.shape.setTransform(-0.0101,0.031);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sky, new cjs.Rectangle(-591.3,-370.1,1182.6999999999998,740.3), null);


(lib.scorpion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_33();
	this.instance.setTransform(-57.7,-117.45,0.3514,0.3514);

	this.instance_1 = new lib.CachedBmp_34();
	this.instance_1.setTransform(-43,-110.65,0.3514,0.3514);

	this.instance_2 = new lib.CachedBmp_35();
	this.instance_2.setTransform(-37.8,-150.7,0.3514,0.3514);

	this.instance_3 = new lib.CachedBmp_36();
	this.instance_3.setTransform(-38.8,-124.1,0.3514,0.3514);

	this.instance_4 = new lib.CachedBmp_37();
	this.instance_4.setTransform(-38.3,-97.65,0.3514,0.3514);

	this.instance_5 = new lib.CachedBmp_38();
	this.instance_5.setTransform(-38.65,-114.4,0.3514,0.3514);

	this.instance_6 = new lib.CachedBmp_39();
	this.instance_6.setTransform(-57.45,-117.7,0.3514,0.3514);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},6).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,-150.7,142.9,268.5);


(lib.pitbridge = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(-591.6,-46.35,0.4117,0.4117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pitbridge, new cjs.Rectangle(-591.6,-46.3,1183.2,92.6), null);


(lib.moon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#908CA3").s().p("AiuPeQg2gCg1gKQg1gIgzgPQgxgPgvgVQgwgWgugZQgugZgtgbQgtgcgqgfQgqgggpgjQgngigigpQgigogcguQgdgtgYgvQgZgwgPg0IgKgnQgIgggGggQgLg1gGg1QgGg1gBg2QAAg0AGg2QAFg0ALg0QALg0AQgzQAQgzAZgvQAYgvAbguIAcguQAdgtAigpQAhgoAlgkQAmgkArgcQAtgeAxgWQAwgXAxgWIAHgDQAvgZAxgVQAwgWAxgRQAwgRAxgOQAygPA1gEIAfgCQAmgCAlABQAoACAoAEQA4AFA3AEQA2AEA1AKQA1AKA0AOIBrAdIAkALQAfALAfAPQAuAXAsAcQArAaAqAbQApAcAkAiQAjAjAcAoQAeAtAdAtQAcAtAWAyQAXAyAVA0QAVA0AOA3QAOA2AGA3QAHA4AEA4QAEA3gDA3QgDAngIAlQgIAogaAfIgBAFQgFAkgLAjQgDAmgSAjQgPAggbAWIgPALIgJAQQgYAsghAnQghAogkAmQgiAmgoAfQgeAZggAYQgsAhguAdQgsAdgwAVQgwAXgyATQgyAVg1ALQgzAMg0AIIhRAMQg0AIgzADIhnAGIgiACIgoABIgbAAg");
	this.shape.setTransform(0.0047,0.0129);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.moon, new cjs.Rectangle(-111.2,-99,222.5,198.1), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(37.3,8.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_30();
	this.instance_1.setTransform(-5,-5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-5,-5,333,204), null);


(lib.healthbar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(-74.45,-140.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_28();
	this.instance_1.setTransform(1047.05,-41.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_27();
	this.instance_2.setTransform(-1702.25,-48.1,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_26();
	this.instance_3.setTransform(-1490.95,-43.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.healthbar, new cjs.Rectangle(-1702.2,-140.8,3354.8,189.70000000000002), null);


(lib.finishhim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_76 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(76).call(this.frame_76).wait(1));

	// finish
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(-51.8,-22.25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:1.1444,scaleY:1.1444,x:-65.5219,y:-25.6616},0).wait(1).to({scaleX:1.2888,scaleY:1.2888,x:-79.2439,y:-29.0733},0).wait(1).to({scaleX:1.4331,scaleY:1.4331,x:-92.9658,y:-32.4849},0).wait(1).to({scaleX:1.5775,scaleY:1.5775,x:-106.6877,y:-35.8965},0).wait(1).to({scaleX:1.7219,scaleY:1.7219,x:-120.4096,y:-39.3081},0).wait(1).to({scaleX:1.8663,scaleY:1.8663,x:-134.1316,y:-42.7198},0).wait(1).to({scaleX:2.0107,scaleY:2.0107,x:-147.8535,y:-46.1314},0).wait(1).to({scaleX:2.155,scaleY:2.155,x:-161.5754,y:-49.543},0).wait(1).to({scaleX:2.2994,scaleY:2.2994,x:-175.2974,y:-52.9547},0).wait(1).to({scaleX:2.4438,scaleY:2.4438,x:-189.0193,y:-56.3663},0).wait(1).to({scaleX:2.5882,scaleY:2.5882,x:-202.7412,y:-59.7779},0).wait(1).to({scaleX:2.5865,scaleY:2.5865,x:-202.5937,y:-59.74},0).wait(1).to({scaleX:2.5849,scaleY:2.5849,x:-202.4462,y:-59.7021},0).wait(1).to({scaleX:2.5832,scaleY:2.5832,x:-202.2988,y:-59.6642},0).wait(1).to({scaleX:2.5816,scaleY:2.5816,x:-202.1513,y:-59.6263},0).wait(1).to({scaleX:2.5799,scaleY:2.5799,x:-202.0038,y:-59.5884},0).wait(1).to({scaleX:2.5783,scaleY:2.5783,x:-201.8563,y:-59.5505},0).wait(1).to({scaleX:2.5766,scaleY:2.5766,x:-201.7089,y:-59.5126},0).wait(1).to({scaleX:2.575,scaleY:2.575,x:-201.5614,y:-59.4747},0).wait(1).to({scaleX:2.5733,scaleY:2.5733,x:-201.4139,y:-59.4368},0).wait(1).to({scaleX:2.5717,scaleY:2.5717,x:-201.2664,y:-59.3989},0).wait(1).to({scaleX:2.57,scaleY:2.57,x:-201.1189,y:-59.361},0).wait(1).to({scaleX:2.5684,scaleY:2.5684,x:-200.9714,y:-59.3231},0).wait(1).to({scaleX:2.5667,scaleY:2.5667,x:-200.824,y:-59.2852},0).wait(1).to({scaleX:2.5651,scaleY:2.5651,x:-200.6765,y:-59.2473},0).wait(1).to({scaleX:2.5635,scaleY:2.5635,x:-200.529,y:-59.2094},0).wait(1).to({scaleX:2.5618,scaleY:2.5618,x:-200.3815,y:-59.1715},0).wait(1).to({scaleX:2.5602,scaleY:2.5602,x:-200.234,y:-59.1336},0).wait(1).to({scaleX:2.5585,scaleY:2.5585,x:-200.0866,y:-59.0957},0).wait(1).to({scaleX:2.5569,scaleY:2.5569,x:-199.9391,y:-59.0578},0).wait(1).to({scaleX:2.5552,scaleY:2.5552,x:-199.7916,y:-59.0199},0).wait(1).to({scaleX:2.5536,scaleY:2.5536,x:-199.6441,y:-58.982},0).wait(1).to({scaleX:2.5519,scaleY:2.5519,x:-199.4966,y:-58.9441},0).wait(1).to({scaleX:2.5503,scaleY:2.5503,x:-199.3492,y:-58.9062},0).wait(1).to({scaleX:2.5486,scaleY:2.5486,x:-199.2017,y:-58.8683},0).wait(1).to({scaleX:2.547,scaleY:2.547,x:-199.0542,y:-58.8304},0).wait(1).to({scaleX:2.5453,scaleY:2.5453,x:-198.9067,y:-58.7925},0).wait(1).to({scaleX:2.5437,scaleY:2.5437,x:-198.7592,y:-58.7546},0).wait(1).to({scaleX:2.542,scaleY:2.542,x:-198.6118,y:-58.7167},0).wait(1).to({scaleX:2.5404,scaleY:2.5404,x:-198.4643,y:-58.6788},0).wait(1).to({scaleX:2.5387,scaleY:2.5387,x:-198.3168,y:-58.6409},0).wait(1).to({scaleX:2.5371,scaleY:2.5371,x:-198.1693,y:-58.603},0).wait(1).to({scaleX:2.5354,scaleY:2.5354,x:-198.0218,y:-58.5651},0).wait(1).to({scaleX:2.5338,scaleY:2.5338,x:-197.8744,y:-58.5272},0).wait(1).to({scaleX:2.5321,scaleY:2.5321,x:-197.7269,y:-58.4893},0).wait(1).to({scaleX:2.5305,scaleY:2.5305,x:-197.5794,y:-58.4514},0).wait(1).to({scaleX:2.5288,scaleY:2.5288,x:-197.4319,y:-58.4135},0).wait(1).to({scaleX:2.5272,scaleY:2.5272,x:-197.2844,y:-58.3756},0).wait(1).to({scaleX:2.5256,scaleY:2.5256,x:-197.137,y:-58.3377},0).wait(1).to({scaleX:2.5239,scaleY:2.5239,x:-196.9895,y:-58.2998},0).wait(1).to({scaleX:2.5223,scaleY:2.5223,x:-196.842,y:-58.2619},0).wait(1).to({scaleX:2.5206,scaleY:2.5206,x:-196.6945,y:-58.224},0).wait(1).to({scaleX:2.519,scaleY:2.519,x:-196.547,y:-58.1861},0).wait(1).to({scaleX:2.5173,scaleY:2.5173,x:-196.3996,y:-58.1482},0).wait(1).to({scaleX:2.5157,scaleY:2.5157,x:-196.2521,y:-58.1103},0).wait(1).to({scaleX:2.514,scaleY:2.514,x:-196.1046,y:-58.0724},0).wait(1).to({scaleX:2.5124,scaleY:2.5124,x:-195.9571,y:-58.0345},0).wait(1).to({scaleX:2.3652,scaleY:2.3652,x:-181.0814,y:-54.6501},0).wait(1).to({scaleX:2.2181,scaleY:2.2181,x:-166.2056,y:-51.2656},0).wait(1).to({scaleX:2.0709,scaleY:2.0709,x:-151.3299,y:-47.8812},0).wait(1).to({scaleX:1.9238,scaleY:1.9238,x:-136.4542,y:-44.4968},0).wait(1).to({scaleX:1.7766,scaleY:1.7766,x:-121.5784,y:-41.1124},0).wait(1).to({scaleX:1.6295,scaleY:1.6295,x:-106.7027,y:-37.7279},0).wait(1).to({scaleX:1.4823,scaleY:1.4823,x:-91.827,y:-34.3435},0).wait(1).to({scaleX:1.3352,scaleY:1.3352,x:-76.9512,y:-30.9591},0).wait(1).to({scaleX:1.188,scaleY:1.188,x:-62.0755,y:-27.5746},0).wait(1).to({scaleX:1.0409,scaleY:1.0409,x:-47.1998,y:-24.1902},0).wait(1).to({scaleX:0.8937,scaleY:0.8937,x:-32.324,y:-20.8058},0).wait(1).to({scaleX:0.7466,scaleY:0.7466,x:-17.4483,y:-17.4213},0).wait(1).to({scaleX:0.5994,scaleY:0.5994,x:-2.5726,y:-14.0369},0).wait(1).to({scaleX:0.4523,scaleY:0.4523,x:12.3032,y:-10.6525},0).wait(1).to({scaleX:0.3051,scaleY:0.3051,x:27.1789,y:-7.268},0).wait(1).to({scaleX:0.158,scaleY:0.158,x:42.0546,y:-3.8836},0).wait(1).to({scaleX:0.0108,scaleY:0.0108,x:56.9304,y:-0.4992},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,-22.2,179,46);


(lib.cloud3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B3B5").s().p("ADZDvQg2gCg2gFIhugLQg2gFg1gLIhqgVQg3gLg4gDQg2gEg1AHIhcAMIAEgBQgxAIgxAEQg6ADg6AAQg6AAg4gGIhSgMQg3gJg3gIQgcgEgbgFIABAAQgZgEgYgGIhGgOQgigGghgKQgegKgbgRQgYgPgEgbIgBgMIAAgCIgBgFIAAgFIgBgEIAAgFIABgFIAAgFIABgDIABgFIACgEIACgFIACgEIADgEIACgEIADgDIACgCIADgDIADgCIADgCIAEgCIADgBIAEgCIAFgCIAEgCQAKgIAMgFQAOgFAPgCIAegEQASgCARgEIAigGIACgBIADAAIADgBIAFAAIBSgOIBugQQA3gHA1gOQAygMAwgQIBOgaQAzgSA2gOQAzgNA1gDQAogCApACQA1AEA1AHIBPAMIBkASIBqATQAqAIArAGIA8AIQApAGApAAQApgBApgHIAtgJQA/gOBAgIQAogGAoABQAxAAAvAHIABAAIABAAIABABIABAAIABAAIACAAIABAAIABABIAaAFQA2ALA1AOIBzAcQA1AMA1AIQA3AIA4ALQA5ALA2AWQA0AUAvAdQASALAGAUQANArghAeQgMALgQAAQgyABgyADIg2AFQgpAFgoAIIABAAIgDAAIAAAAIgDABIgvAHQgaAFgZAGIg4AMIg4AMIgmAIIgGABIABAAIAFgBIADAAQgyALgzAIQg6AJg6AGQgpAEgqADQg2AEg3ACQg2ACg2AFQglAEgkAAIgZgBgAMyBAIAHgBIgDAAIgEABgAKUhCIgBgBIgBAAIACABg");
	this.shape.setTransform(0.0236,0.0188);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud3, new cjs.Rectangle(-136.8,-23.9,273.70000000000005,47.9), null);


(lib.cloud2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B3B5").s().p("AhqKHQhDAAhCgBIiGgEQhEgChFgDIhlgGQhBgDhBgHQhCgHhCgEQhCgEhDABQhDAAhDgDQhCgEhBAFQhCAFhBAJQhEAKhFACQgxACgygHQgrgGgrgHIACAAIg/gLQgfgGgegLQgcgLgbgPQgagOgUgXQgTgXgRgZIgPgTIgFgDIgFgEIgFgDIgFgDQgfgOghgDQgggEgdgOQgegPgVgbQgUgagGgjQgFghAHghIAFgUIAAgFIgBgGIAAgGIABgFIABgGIABgFIACgGIACgFIADgFIADgFIAEgEIAEgEIAEgDIAFgDQA9gbBBgNQBCgNBAgSICGglQA/gSBBgOQAngIAngKQBEgSBGgIICGgMQBBgFBCgBICRgBQBCAABBACQBCABBBAGQBBAGBBADQBIADBIgJQAzgHAwgRQBHgYAsg6QAug9AehGQAchEAlg+QAjg9A4gsQAygnA5gaQAsgUAtgPQA8gVA/gHQAlgFAkAAQBDgCBDAJQA9AIA7APQA9APA4AeQA4AdA0AlQAZASAWAWQAsArAgA1QAhA1AcA3QAMAXARATQAXARAaANQAcAPAbAQQAaAQAYAUQAWARARAWQASAXAMAbQAGAOADAOIACAEIACABIAFAEIAHADIAIACIAHACQBCAGBCgBIBngDQBCgBBBAAQBAABA/AJQA9AJA8AQQBBAQA8AdIBvAzQA6AbATA7QATA5gjAwQggAug2ARQg9AUg/AMQhBANhCALQhHALhIAHQhLAGhLAFQhKAEhJAJQhQAKhQAGQhIAFhIAKIgnAHIAEgCIgHACQg7AMg6AQQhDAThDgOIiIgdQgzgKgzgDQgzgDgyADQgRABgQADIABAAQg4AKg2ARQg5ATg4AUQg5AVg8ANQg6AMg7AFQgkADglAAIgbgBg");
	this.shape.setTransform(0.0187,0.0273);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud2, new cjs.Rectangle(-222.2,-64.7,444.5,129.5), null);


(lib.cloud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B3B5").s().p("AFULdQhRgIhRgSQhSgRhNghQhLgghOgbQhPgbhRgWQhPgWhSgGQhUgGhRAUIilAmQhPARhPANQg5AKg4gCQhRgChRgLQhVgMhUgSIhYgSIifgkQhMgQhMgMIicgZIingZQg/gJg/gEQhXgGhVgNIgwgIIgIgBIgKgCIgLgCIgLgBIgKgCIgDgBIACABIALACQg3gIg2gMQg8gOg8gQQg+gRg4gdQgwgZgtggQgegUgQggQgKgUgGgWQgKgMgIgMQgHgNgGgOQgGgOgDgPQgEgPgBgPQgCgPABgPQAAgPADgPIACgKIADgKIAEgLIAEgLIADgKIAEgJIAFgIIAFgIIAFgHIAGgHIAGgHIAGgHIAHgGIAHgGQBBgoBGggQBKgiBOgXQBTgYBUgTQBXgTBYgRQBWgRBWgPICugdQBTgOBSgRQBMgQBHgdIAKgEQA2guAzgyQAegdAkgUQBHgnBOgQQBRgQBTgGQBQgHBQgIQBUgIBUAJICqASQBUAKBQAaQBRAbBQAeQBFAaBHAQIAfAGIgCAAQBJAPBKAMQBUAOBXAHQBYAGBYAAQBaAABZgFQBXgFBXgEQBYgDBYgJQBSgJBSgMQBNgLBOAMQBRANBRgDQBNgCBOgBQAtAAAsAFQBTAJBOAaICfA2QBSAcBPAiQBTAjBVAcQBKAYBKAaICaA1QBIAZBLAQQBVASBSAbQBNAZBFArQA8AlASBFQASBGgZBEQgYA+g8AbQgfAOgjgEQhkgKhkgJQhVgHhWACQg3ACg3AIIABAAQhIALhIAQQhSAShRAXQhRAXhDAzQhEAzhAA4Qg+A1hKAiQhFAfhKAUQhRAWhUgCQhQgChOgSQhPgShRgDQhOgDhOAFQhVAGhPAgQgmAQgmANQhPAchTANQg1AIg1AAQgXAAgYgBgEgmwAGIIAJABIAJACIgcgFIAKACgEgnUAGCIAAAAIgDAAIADAAg");
	this.shape.setTransform(-0.0088,0.0208);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud, new cjs.Rectangle(-304.4,-73.4,608.9,146.9), null);


(lib.toasty = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57).call(this.frame_57).wait(1));

	// Layer_1
	this.toasty = new lib.toastytween();
	this.toasty.name = "toasty";
	this.toasty.setTransform(-61.85,-44.3,1,1,0,0,0,286.1,343.9);

	this.timeline.addTween(cjs.Tween.get(this.toasty).wait(1).to({x:-117.55,y:-76.6},0).wait(1).to({x:-173.25,y:-108.9},0).wait(1).to({x:-228.95,y:-141.2},0).wait(1).to({x:-284.65,y:-173.5},0).wait(1).to({x:-340.35,y:-205.8},0).wait(1).to({x:-396.05,y:-238.15},0).wait(1).to({x:-451.75,y:-270.45},0).wait(1).to({x:-507.45,y:-302.75},0).wait(1).to({x:-563.15,y:-335.05},0).wait(1).to({x:-618.85,y:-367.35},0).wait(1).to({x:-674.6,y:-399.7},0).wait(1).to({y:-399.65},0).wait(1).to({x:-674.65},0).wait(1).to({x:-674.7},0).wait(2).to({x:-674.75},0).wait(1).to({x:-674.8,y:-399.6},0).wait(2).to({x:-674.85},0).wait(1).to({x:-674.9},0).wait(2).to({x:-674.95,y:-399.55},0).wait(1).to({x:-675},0).wait(2).to({x:-675.05},0).wait(1).to({x:-675.1},0).wait(1).to({y:-399.5},0).wait(1).to({x:-675.15},0).wait(1).to({x:-675.2},0).wait(2).to({x:-675.25},0).wait(1).to({x:-675.3,y:-399.45},0).wait(2).to({x:-675.35},0).wait(1).to({x:-675.4},0).wait(2).to({x:-675.45,y:-399.4},0).wait(1).to({x:-675.5},0).wait(2).to({x:-675.55},0).wait(1).to({x:-675.6},0).wait(1).to({x:-675.65,y:-399.35},0).wait(2).to({x:-675.7},0).wait(1).to({x:-675.75},0).wait(1).to({x:-624.55,y:-369.75},0).wait(1).to({x:-573.4,y:-340.15},0).wait(1).to({x:-522.25,y:-310.6},0).wait(1).to({x:-471.1,y:-281},0).wait(1).to({x:-419.95,y:-251.4},0).wait(1).to({x:-368.8,y:-221.8},0).wait(1).to({x:-317.6,y:-192.2},0).wait(1).to({x:-266.45,y:-162.65},0).wait(1).to({x:-215.3,y:-133.05},0).wait(1).to({x:-164.15,y:-103.45},0).wait(1).to({x:-113,y:-73.85},0).wait(1).to({x:-61.85,y:-44.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-961.8,-743.6,1186,1043.3);


(lib.bothbackclouds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cloud3();
	this.instance.setTransform(976.4,163.5);

	this.instance_1 = new lib.cloud2();
	this.instance_1.setTransform(222.25,64.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bothbackclouds, new cjs.Rectangle(0,0,1113.3,187.5), null);


// stage content:
(lib.claussen_midterm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [41];
	// timeline functions:
	this.frame_41 = function() {
		this.stop();
		
		this.mortalkombat_mc.addEventListener("click", link.bind(this));
		
		function link(e) {
			
			var url = "https://www.mksecrets.net/";
			
			var win = window.open(url, "_blank");
			
			win.focus();
		
			} this.stop();
		
		this.mortalkombat_mc.addEventListener("click", link.bind(this));
		
		function link(e) {
			
			var url = "https://www.mksecrets.net/";
			
			var win = window.open(url, "_blank");
			
			win.focus();
		
			} 
		
		this.scorpion_mc.addEventListener("click",finishhim);
		
		var root = this;
		function finishhim(){
			console.log("fatality")
			root.scorpion_mc.play();
			
		}
		
		this.moon_mc.addEventListener("click",toasty);
		
		var root = this;
		function toasty(){
			console.log("danforden")
			root.toasty_mc.play();
			
		}
		
		this.healthbars_mc.addEventListener("click",fatality);
		
		var root = this;
		function fatality(){
			console.log("flawless")
			root.finishhim_mc.play();
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(1));

	// Layer_4
	this.finishhim_mc = new lib.finishhim();
	this.finishhim_mc.name = "finishhim_mc";
	this.finishhim_mc.setTransform(449.55,348.4);
	this.finishhim_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.finishhim_mc).wait(41).to({_off:false},0).wait(1));

	// toasty
	this.toasty_mc = new lib.toasty();
	this.toasty_mc.name = "toasty_mc";
	this.toasty_mc.setTransform(1089.85,674.45,0.3998,0.3998,0,0,0,-61.8,-44.1);
	this.toasty_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.toasty_mc).wait(41).to({_off:false},0).wait(1));

	// text
	this.mortalkombat_mc = new lib.logo();
	this.mortalkombat_mc.name = "mortalkombat_mc";
	this.mortalkombat_mc.setTransform(453.6,789.8,1,1,0,0,0,161.5,97);

	this.timeline.addTween(cjs.Tween.get(this.mortalkombat_mc).wait(1).to({y:783.7},0).wait(1).to({y:777.6},0).wait(1).to({y:771.5},0).wait(1).to({y:765.4},0).wait(1).to({y:759.3},0).wait(1).to({y:753.2},0).wait(1).to({y:747.1},0).wait(1).to({y:741},0).wait(1).to({y:734.9},0).wait(1).to({y:728.8},0).wait(1).to({y:722.7},0).wait(1).to({y:716.6},0).wait(1).to({y:710.5},0).wait(1).to({y:704.4},0).wait(1).to({y:698.3},0).wait(1).to({y:692.2},0).wait(1).to({y:686.1},0).wait(1).to({y:680},0).wait(1).to({y:673.9},0).wait(1).to({y:667.8},0).wait(1).to({y:661.7},0).wait(1).to({y:655.6},0).wait(1).to({y:649.5},0).wait(1).to({y:643.4},0).wait(1).to({y:637.3},0).wait(1).to({y:631.2},0).wait(1).to({y:625.1},0).wait(1).to({y:619},0).wait(1).to({y:612.9},0).wait(1).to({y:606.8},0).wait(1).to({y:600.7},0).wait(1).to({y:594.6},0).wait(1).to({y:588.5},0).wait(1).to({y:582.4},0).wait(1).to({y:576.3},0).wait(1).to({y:570.2},0).wait(1).to({y:564.1},0).wait(1).to({y:558},0).wait(1).to({y:551.9},0).wait(1).to({y:545.8},0).wait(1).to({y:539.7},0).wait(1));

	// helathbars
	this.healthbars_mc = new lib.healthbar();
	this.healthbars_mc.name = "healthbars_mc";
	this.healthbars_mc.setTransform(475,-45.6,0.3017,0.3017,0,0,0,-6.3,-48.6);

	this.timeline.addTween(cjs.Tween.get(this.healthbars_mc).wait(1).to({regX:-24.9,regY:-46,x:469.4,y:-42.4},0).wait(1).to({y:-40},0).wait(1).to({y:-37.6},0).wait(1).to({y:-35.2},0).wait(1).to({y:-32.8},0).wait(1).to({y:-30.35},0).wait(1).to({y:-27.95},0).wait(1).to({y:-25.55},0).wait(1).to({y:-23.15},0).wait(1).to({y:-20.75},0).wait(1).to({y:-18.35},0).wait(1).to({y:-15.9},0).wait(1).to({y:-13.55},0).wait(1).to({y:-11.15},0).wait(1).to({y:-8.75},0).wait(1).to({y:-6.35},0).wait(1).to({y:-3.95},0).wait(1).to({y:-1.5},0).wait(1).to({y:0.9},0).wait(1).to({y:3.3},0).wait(1).to({y:5.7},0).wait(1).to({y:8.1},0).wait(1).to({y:10.5},0).wait(1).to({y:12.95},0).wait(1).to({y:15.35},0).wait(1).to({y:17.75},0).wait(1).to({y:20.15},0).wait(1).to({y:22.55},0).wait(1).to({y:24.95},0).wait(1).to({y:27.4},0).wait(1).to({y:29.8},0).wait(1).to({y:32.2},0).wait(1).to({y:34.6},0).wait(1).to({y:37},0).wait(1).to({y:39.4},0).wait(1).to({y:41.85},0).wait(1).to({y:44.25},0).wait(1).to({y:46.65},0).wait(1).to({y:49.05},0).wait(1).to({y:51.45},0).wait(1).to({y:53.9},0).wait(1));

	// subzero
	this.instance = new lib.subzero();
	this.instance.setTransform(781.05,566.9,2.0002,2.0002,0,0,0,-6.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-3.4,x:787.05,y:563.1},0).wait(1).to({y:559.35},0).wait(1).to({y:555.6},0).wait(1).to({y:551.85},0).wait(1).to({y:548.1},0).wait(1).to({y:544.3},0).wait(1).to({y:540.55},0).wait(1).to({y:536.8},0).wait(1).to({y:533.05},0).wait(1).to({y:529.3},0).wait(1).to({y:525.55},0).wait(1).to({y:521.75},0).wait(1).to({y:518},0).wait(1).to({y:514.25},0).wait(1).to({y:510.5},0).wait(1).to({y:506.75},0).wait(1).to({y:503},0).wait(1).to({y:499.2},0).wait(1).to({y:495.45},0).wait(1).to({y:491.7},0).wait(1).to({y:487.95},0).wait(1).to({y:484.2},0).wait(1).to({y:480.45},0).wait(1).to({y:476.65},0).wait(1).to({y:472.9},0).wait(1).to({y:469.15},0).wait(1).to({y:465.4},0).wait(1).to({y:461.65},0).wait(1).to({y:457.9},0).wait(1).to({y:454.1},0).wait(1).to({y:450.35},0).wait(1).to({y:446.6},0).wait(1).to({y:442.85},0).wait(1).to({y:439.1},0).wait(1).to({y:435.35},0).wait(1).to({y:431.55},0).wait(1).to({y:427.8},0).wait(1).to({y:424.05},0).wait(1).to({y:420.3},0).wait(1).to({y:416.55},0).wait(1).to({y:412.75},0).wait(1));

	// scorpion
	this.scorpion_mc = new lib.scorpion();
	this.scorpion_mc.name = "scorpion_mc";
	this.scorpion_mc.setTransform(152.35,552.5,1.4228,1.4228,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.scorpion_mc).wait(1).to({regX:13.8,regY:-16.5,x:171.8,y:525.5},0).wait(1).to({y:522.15},0).wait(1).to({y:518.85},0).wait(1).to({y:515.5},0).wait(1).to({y:512.2},0).wait(1).to({y:508.85},0).wait(1).to({y:505.5},0).wait(1).to({y:502.2},0).wait(1).to({y:498.85},0).wait(1).to({y:495.55},0).wait(1).to({y:492.2},0).wait(1).to({y:488.85},0).wait(1).to({y:485.55},0).wait(1).to({y:482.2},0).wait(1).to({y:478.9},0).wait(1).to({y:475.55},0).wait(1).to({y:472.25},0).wait(1).to({y:468.9},0).wait(1).to({y:465.55},0).wait(1).to({y:462.25},0).wait(1).to({y:458.9},0).wait(1).to({y:455.6},0).wait(1).to({y:452.25},0).wait(1).to({y:448.9},0).wait(1).to({y:445.6},0).wait(1).to({y:442.25},0).wait(1).to({y:438.95},0).wait(1).to({y:435.6},0).wait(1).to({y:432.3},0).wait(1).to({y:428.95},0).wait(1).to({y:425.6},0).wait(1).to({y:422.3},0).wait(1).to({y:418.95},0).wait(1).to({y:415.65},0).wait(1).to({y:412.3},0).wait(1).to({y:408.95},0).wait(1).to({y:405.65},0).wait(1).to({y:402.3},0).wait(1).to({y:399},0).wait(1).to({y:395.65},0).wait(1).to({y:392.3},0).wait(1));

	// bridge
	this.bridge_mc = new lib.pitbridge();
	this.bridge_mc.name = "bridge_mc";
	this.bridge_mc.setTransform(442.4,733.55,1,1.2144,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.bridge_mc).wait(1).to({regY:0,scaleY:1.2145,y:733.45},0).wait(3).to({y:729.6737},0).wait(1).to({y:725.8974},0).wait(1).to({y:722.1211},0).wait(1).to({y:718.3447},0).wait(1).to({y:714.5684},0).wait(1).to({y:710.7921},0).wait(1).to({y:707.0158},0).wait(1).to({y:703.2395},0).wait(1).to({y:699.4632},0).wait(1).to({y:695.6868},0).wait(1).to({y:691.9105},0).wait(1).to({y:688.1342},0).wait(1).to({y:684.3579},0).wait(1).to({y:680.5816},0).wait(1).to({y:676.8053},0).wait(1).to({y:673.0289},0).wait(1).to({y:669.2526},0).wait(1).to({y:665.4763},0).wait(1).to({y:661.7},0).wait(1).to({y:657.9237},0).wait(1).to({y:654.1474},0).wait(1).to({y:650.3711},0).wait(1).to({y:646.5947},0).wait(1).to({y:642.8184},0).wait(1).to({y:639.0421},0).wait(1).to({y:635.2658},0).wait(1).to({y:631.4895},0).wait(1).to({y:627.7132},0).wait(1).to({y:623.9368},0).wait(1).to({y:620.1605},0).wait(1).to({y:616.3842},0).wait(1).to({y:612.6079},0).wait(1).to({y:608.8316},0).wait(1).to({y:605.0553},0).wait(1).to({y:601.2789},0).wait(1).to({y:597.5026},0).wait(1).to({y:593.7263},0).wait(1).to({y:589.95},0).wait(1));

	// clouds_front
	this.front_cloud_mc = new lib.cloud();
	this.front_cloud_mc.name = "front_cloud_mc";
	this.front_cloud_mc.setTransform(596.55,-23.3);

	this.timeline.addTween(cjs.Tween.get(this.front_cloud_mc).wait(1).to({y:-19.8},0).wait(1).to({y:-16.3},0).wait(1).to({y:-12.8},0).wait(1).to({y:-9.3},0).wait(1).to({y:-5.8},0).wait(1).to({y:-2.3},0).wait(1).to({y:1.2},0).wait(1).to({y:4.7},0).wait(1).to({y:8.2},0).wait(1).to({y:11.7},0).wait(1).to({y:15.2},0).wait(1).to({y:18.7},0).wait(1).to({y:22.2},0).wait(1).to({y:25.7},0).wait(1).to({y:29.2},0).wait(1).to({y:32.7},0).wait(1).to({y:36.2},0).wait(1).to({y:39.7},0).wait(1).to({y:43.2},0).wait(1).to({y:46.7},0).wait(1).to({y:50.2},0).wait(1).to({y:53.7},0).wait(1).to({y:57.2},0).wait(1).to({y:60.7},0).wait(1).to({y:64.2},0).wait(1).to({y:67.7},0).wait(1).to({y:71.2},0).wait(1).to({y:74.7},0).wait(1).to({y:78.2},0).wait(1).to({y:81.7},0).wait(1).to({y:85.2},0).wait(1).to({y:88.7},0).wait(1).to({y:92.2},0).wait(1).to({y:95.7},0).wait(1).to({y:99.2},0).wait(1).to({y:102.7},0).wait(1).to({y:106.2},0).wait(1).to({y:109.7},0).wait(1).to({y:113.2},0).wait(1).to({y:116.7},0).wait(1).to({y:120.2},0).wait(1));

	// moon
	this.moon_mc = new lib.moon();
	this.moon_mc.name = "moon_mc";
	this.moon_mc.setTransform(202.4,-1.65,1.1091,1.1933,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.moon_mc).wait(1).to({regX:0,regY:0,scaleX:1.1092,x:202.2,y:0.75},0).wait(1).to({y:3.25},0).wait(1).to({y:5.75},0).wait(1).to({y:8.25},0).wait(1).to({y:10.75},0).wait(1).to({y:13.25},0).wait(1).to({y:15.75},0).wait(1).to({y:18.25},0).wait(1).to({y:20.75},0).wait(1).to({y:23.25},0).wait(1).to({y:25.75},0).wait(1).to({y:28.25},0).wait(1).to({y:30.75},0).wait(1).to({y:33.25},0).wait(1).to({y:35.75},0).wait(1).to({y:38.25},0).wait(1).to({y:40.75},0).wait(1).to({y:43.25},0).wait(1).to({y:45.75},0).wait(1).to({y:48.25},0).wait(1).to({y:50.75},0).wait(1).to({y:53.25},0).wait(1).to({y:55.75},0).wait(1).to({y:58.25},0).wait(1).to({y:60.75},0).wait(1).to({y:63.25},0).wait(1).to({y:65.75},0).wait(1).to({y:68.25},0).wait(1).to({y:70.75},0).wait(1).to({y:73.25},0).wait(1).to({y:75.75},0).wait(1).to({y:78.25},0).wait(1).to({y:80.75},0).wait(1).to({y:83.25},0).wait(1).to({y:85.75},0).wait(1).to({y:88.25},0).wait(1).to({y:90.75},0).wait(1).to({y:93.25},0).wait(1).to({y:95.75},0).wait(1).to({y:98.25},0).wait(1).to({y:100.75},0).wait(1));

	// cloud_back
	this.clouds_back_mc = new lib.bothbackclouds();
	this.clouds_back_mc.name = "clouds_back_mc";
	this.clouds_back_mc.setTransform(321.45,82.45,1,1,0,0,0,556.6,93.8);

	this.timeline.addTween(cjs.Tween.get(this.clouds_back_mc).wait(1).to({y:87.45},0).wait(1).to({y:92.45},0).wait(1).to({y:97.45},0).wait(1).to({y:102.45},0).wait(1).to({y:107.45},0).wait(1).to({y:112.45},0).wait(1).to({y:117.45},0).wait(1).to({y:122.45},0).wait(1).to({y:127.45},0).wait(1).to({y:132.45},0).wait(1).to({y:137.45},0).wait(1).to({y:142.45},0).wait(1).to({y:147.45},0).wait(1).to({y:152.45},0).wait(1).to({y:157.45},0).wait(1).to({y:162.45},0).wait(1).to({y:167.45},0).wait(1).to({y:172.45},0).wait(1).to({y:177.45},0).wait(1).to({y:182.45},0).wait(1).to({y:187.45},0).wait(1).to({y:192.45},0).wait(1).to({y:197.45},0).wait(1).to({y:202.45},0).wait(1).to({y:207.45},0).wait(1).to({y:212.45},0).wait(1).to({y:217.45},0).wait(1).to({y:222.45},0).wait(1).to({y:227.45},0).wait(1).to({y:232.45},0).wait(1).to({y:237.45},0).wait(1).to({y:242.45},0).wait(1).to({y:247.45},0).wait(1).to({y:252.45},0).wait(1).to({y:257.45},0).wait(1).to({y:262.45},0).wait(1).to({y:267.45},0).wait(1).to({y:272.45},0).wait(1).to({y:277.45},0).wait(1).to({y:282.45},0).wait(1).to({y:287.45},0).wait(1));

	// sky
	this.instance_1 = new lib.sky();
	this.instance_1.setTransform(426.45,307.7,1.397,1.397,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(80.1,110.5,1172.4,781.3);
// library properties:
lib.properties = {
	id: '0362AAC658FF954B80EC35B50A0084AA',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_32.png?1773953073187", id:"CachedBmp_32"},
		{src:"images/CachedBmp_26.png?1773953073187", id:"CachedBmp_26"},
		{src:"images/claussen_midterm_atlas_1.png?1773953073052", id:"claussen_midterm_atlas_1"},
		{src:"images/claussen_midterm_atlas_2.png?1773953073053", id:"claussen_midterm_atlas_2"}
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
an.compositions['0362AAC658FF954B80EC35B50A0084AA'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;