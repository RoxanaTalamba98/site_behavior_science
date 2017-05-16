(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 682,
	height: 528,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/creier_atlas_.png", id:"creier_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"creier_atlas_", frames: [[112,284,117,117],[170,148,199,134],[0,0,168,189],[170,0,192,146],[0,191,110,137],[231,295,139,94],[371,0,114,173],[371,175,136,118]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.cerebel = function() {
	this.spriteSheet = ss["creier_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.corpulcallos = function() {
	this.spriteSheet = ss["creier_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.spriteSheet = ss["creier_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.spriteSheet = ss["creier_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.spriteSheet = ss["creier_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.lobultemporal = function() {
	this.spriteSheet = ss["creier_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.maduva = function() {
	this.spriteSheet = ss["creier_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.talamus = function() {
	this.spriteSheet = ss["creier_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape.setTransform(62.4,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBMQACgkgBgrQAAgrgCgcIATgBQgCAeAAAqQAAAqACAlg");
	this.shape_1.setTransform(54.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_2.setTransform(46.6,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAnQgOgPAAgWQAAgWANgQQAOgRAUgBQAUAAAMANQAKAMABAUIgBAKIhIABQABAQALAKQALALAQAAQARAAAOgEIgCAPQgKAFgUgBQgaAAgPgPgAgagIIA2gBQgBgegZAAQgXgBgFAgg");
	this.shape_3.setTransform(35.7,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAbA0QACgcAAgfQAAgRgHgGQgHgGgMAAQgNAAgNALIABBNIgUAAIABg0QAAgYgEgXIATgDIACANIABAAQAQgOAQAAQASAAAKAIQAJAHAAAVIAAAIIAAAHIAAA0g");
	this.shape_4.setTransform(24,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJBJQABgWAAgcQAAgdgDgUIATgEQgCAXABAeQgBAaACAYgAgIgyQgCgDAAgFQgBgGAEgEQAEgDAEAAQAFgBADAEQADAEABAEQAAAFgEAFQgEAEgFAAQgFAAgDgEg");
	this.shape_5.setTransform(15.9,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgtBNQACgdAAgpQAAgzgFgcIATgCIABAKIABAAQALgMAVAAQAVAAALAPQAMAPAAAVQAAAXgNAQQgNARgXAAQgTAAgGgHIgBAAIABA1gAgbgxIABA7QAJAIAOAAQAQAAAJgMQAIgLAAgRQAAgRgIgLQgJgLgNAAQgTAAgIAMg");
	this.shape_6.setTransform(7.3,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_7.setTransform(-9.2,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiA+QgNgPAAgVQAAgYAOgOQANgSAXAAQARAAAIAHIAAAAQAAgbgBgZIAUgBQgCAbAAAsQAAAsADAjIgQAAIgBgKIgCAAQgLANgUAAQgUAAgMgPgAgSgFQgJAKAAATQAAAQAIALQAJALANAAQATABAIgKQAAghgCgdQgIgIgNAAQgQAAgJAMg");
	this.shape_8.setTransform(-20.7,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbA0QACgcAAgfQAAgRgHgGQgGgGgNAAQgNAAgNALIAABNIgTAAIABg0QAAgYgEgXIATgDIACANIAAAAQAQgOARAAQASAAAKAIQAJAHAAAVIAAAIIAAAHIAAA0g");
	this.shape_9.setTransform(-32.6,2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_10.setTransform(-44,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBMQABgkAAgrQAAgrgDgcIAVgBQgDAeAAAqQAAAqADAlg");
	this.shape_11.setTransform(-51.9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgjA0QgTgUAAgeQAAgcAVgXQAVgWAjAAQANAAAMADIgDASQgSgEgKAAQgYAAgOAPQgOAQAAAXQAAAWAQARQAQASAaAAIAQgBQgCgMAAgPQAAgMgBgMIATAAIAAAfIAAAeQgRAGgSAAQgkAAgTgUg");
	this.shape_12.setTransform(-61.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.1,-15.4,294.4,30.9);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape.setTransform(62.4,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBMQACgkAAgrQAAgrgEgcIAVgBQgCAeAAAqQAAAqACAlg");
	this.shape_1.setTransform(54.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAQgBgEAAgGIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_2.setTransform(46.5,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAnQgPgPgBgWQABgWANgQQANgRAVgBQAVAAAKANQAMAMgBAUIAAAKIhIABQABAQALAKQALALARAAQAQAAAOgEIgBAPQgLAFgUgBQgaAAgOgPgAgbgIIA2gBQABgegaAAQgYgBgFAgg");
	this.shape_3.setTransform(35.7,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAaA0QADgcAAgfQAAgRgGgGQgIgGgMAAQgNAAgNALIAABNIgTAAIABg0QABgYgFgXIATgDIACANIAAAAQARgOAQAAQARAAAKAIQAKAHAAAVIAAAIIgBAHIABA0g");
	this.shape_4.setTransform(24,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKBJQACgWAAgcQAAgdgEgUIAUgEQgCAXAAAeQAAAaACAYgAgHgyQgEgDAAgFQABgGADgEQAEgDAEAAQAFgBAEAEQACAEABAEQgBAFgDAFQgEAEgFAAQgEAAgDgEg");
	this.shape_5.setTransform(15.8,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgtBNQACgdAAgpQAAgzgFgcIATgCIABAKIABAAQALgMAVAAQAVAAALAPQAMAPAAAVQAAAXgNAQQgNARgXAAQgTAAgGgHIgBAAIABA1gAgbgxIABA7QAJAIAOAAQAQAAAJgMQAIgLAAgRQAAgRgIgLQgJgLgNAAQgTAAgIAMg");
	this.shape_6.setTransform(7.2,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAQgBgEAAgGIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_7.setTransform(-9.3,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiA+QgNgPAAgVQAAgYAOgOQANgSAXAAQARAAAIAHIAAAAQAAgbgBgZIAUgBQgCAbAAAsQAAAsADAjIgQAAIgBgKIgCAAQgLANgUAAQgUAAgMgPgAgSgFQgJAKAAATQAAAQAIALQAJALANAAQATABAIgKQAAghgCgdQgIgIgNAAQgQAAgJAMg");
	this.shape_8.setTransform(-20.7,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAaA0QADgcAAgfQAAgRgGgGQgIgGgMAAQgNAAgNALIABBNIgUAAIACg0QAAgYgFgXIATgDIACANIAAAAQARgOAQAAQASAAAJAIQAKAHAAAVIAAAIIgBAHIABA0g");
	this.shape_9.setTransform(-32.6,2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_10.setTransform(-44.1,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBMQABgkABgrQAAgrgDgcIATgBQgBAeAAAqQAAAqABAlg");
	this.shape_11.setTransform(-51.9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgjA0QgTgUAAgeQAAgcAVgXQAVgWAjAAQANAAAMADIgDASQgSgEgKAAQgYAAgOAPQgOAQAAAXQAAAWAQARQAQASAaAAIAQgBQgCgMAAgPQAAgMgBgMIATAAIAAAfIAAAeQgRAGgSAAQgkAAgTgUg");
	this.shape_12.setTransform(-61.4,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.2,-15.4,294.4,30.9);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAnQgPgPgBgWQAAgWAOgQQANgRAVgBQAVAAAKANQAMAMgBAUIAAAKIhIABQABAQALAKQALALARAAQAQAAAOgEIgBAPQgLAFgUgBQgaAAgOgPgAgbgIIA2gBQABgegaAAQgYgBgFAgg");
	this.shape.setTransform(29.4,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBMQABgkABgrQgBgrgCgcIATgBQgBAeAAAqQAAAqABAlg");
	this.shape_1.setTransform(21.1,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_2.setTransform(13.1,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_3.setTransform(4.5,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAnQgOgPAAgWQAAgWANgQQAOgRAUgBQAUAAAMANQAKAMABAUIgBAKIhIABQABAQALAKQALALAQAAQARAAAOgEIgCAPQgKAFgUgBQgaAAgPgPgAgagIIA2gBQgBgegZAAQgXgBgFAgg");
	this.shape_4.setTransform(-5.6,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_5.setTransform(-15.3,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_6.setTransform(-24.7,16.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIBMQABgkABgrQAAgrgDgcIATgBQgBAeAAAqQAAAqABAlg");
	this.shape_7.setTransform(-32.6,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAnQgPgPgBgWQABgVANgSQANgRAVAAQAVAAAKANQAMAMgBATIAAALIhIABQABAQALALQALAKARAAQAQAAAOgEIgBAPQgLAFgUAAQgaAAgOgQgAgbgIIA2gCQABgegaAAQgYABgFAfg");
	this.shape_8.setTransform(49.2,-12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIBLQABgjAAgrQABgrgDgbIATgCQgBAeAAAqQAAArABAjg");
	this.shape_9.setTransform(40.9,-14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAnQgPgPAAgWQAAgVAOgSQAOgRAUAAQAVAAAKANQAMAMAAATIgBALIhIABQABAQALALQALAKARAAQAQAAAOgEIgCAPQgKAFgUAAQgaAAgPgQgAgbgIIA3gCQAAgegaAAQgXABgGAfg");
	this.shape_10.setTransform(32.8,-12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBLQABgjAAgrQAAgrgDgbIAUgCQgCAeAAAqQAAArACAjg");
	this.shape_11.setTransform(24.5,-14.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiAsQgIgKAAgbIAAgKIAAgKQAAgPgCgWIAUgBIgBAkQAAAgAEAKQAFAKAPAAQAPAAALgJIgBhOIATgBIAAA2QAAAXACAXIgRABIgBgKIgBAAQgPAMgSAAQgTAAgIgIg");
	this.shape_12.setTransform(16.2,-11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAmQgOgPAAgWQAAgVAPgQQAPgRAYAAQANAAAIADIgDARQgMgFgLAAQgNAAgJALQgJALAAAQQAAAPALAMQAKALASAAQAIAAAPgEIgCAPQgIAFgPAAQgaAAgPgQg");
	this.shape_13.setTransform(5.5,-12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKBIQACgVAAgbQAAgdgDgWIATgCQgBAWgBAfQABAZABAXgAgIgxQgDgEAAgFQABgFADgEQAEgFAEAAQAFABADADQAEAEAAAEQgBAFgDAFQgEAEgFAAQgEAAgEgDg");
	this.shape_14.setTransform(-1.9,-14.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_15.setTransform(-7.8,-12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_16.setTransform(-16.3,-13.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAbA0QACgcAAgfQAAgRgHgGQgGgGgNAAQgNAAgNALIAABNIgTAAIABg0QABgYgFgXIATgDIACANIAAAAQAQgOARAAQASAAAJAIQAKAHAAAVIAAAIIgBAHIABA0g");
	this.shape_17.setTransform(-26.2,-12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAnQgPgPgBgWQAAgVAOgSQANgRAVAAQAVAAAKANQAMAMgBATIAAALIhIABQABAQALALQALAKARAAQAQAAAOgEIgBAPQgLAFgUAAQgaAAgOgQgAgbgIIA2gCQABgegaAAQgYABgFAfg");
	this.shape_18.setTransform(-37.7,-12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBFQAAgIgZg9Qgag7AAgJIAUAAQAAAIAUAzQASAyAAAHIABAAQAAgIATgxQAUgxAAgKIATAAQAAAIgbA8QgbA9AAAIg");
	this.shape_19.setTransform(-48.8,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-29.8,135,59.7);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAnQgPgPgBgWQAAgWAOgQQANgRAVgBQAVAAAKANQALAMAAAUIAAAKIhIABQABAQALAKQALALARAAQAQAAAOgEIgBAPQgLAFgUgBQgaAAgOgPgAgbgIIA2gBQAAgegZAAQgYgBgFAgg");
	this.shape.setTransform(-1.1,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBMQACgkgBgrQAAgrgCgcIATgBQgCAeAAAqQAAAqACAlg");
	this.shape_1.setTransform(-9.4,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_2.setTransform(-17.4,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_3.setTransform(-26,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAnQgPgPABgWQAAgWANgQQANgRAVgBQAUAAAMANQALAMgBAUIAAAKIhIABQABAQALAKQALALAQAAQARAAAOgEIgBAPQgLAFgUgBQgaAAgPgPgAgagIIA1gBQABgegaAAQgYgBgEAgg");
	this.shape_4.setTransform(-36.1,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_5.setTransform(-45.8,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_6.setTransform(-55.2,16.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIBMQABgkAAgrQAAgrgCgcIATgBQgBAeAAAqQAAAqABAlg");
	this.shape_7.setTransform(-63.1,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAnQgOgPAAgWQAAgVANgSQAOgRAUAAQAUAAAMANQAKAMABATIgBALIhIABQABAQALALQALAKAQAAQARAAAOgEIgCAPQgKAFgUAAQgaAAgPgQgAgagIIA2gCQgBgegZAAQgXABgFAfg");
	this.shape_8.setTransform(38.5,-12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIBLQACgjAAgrQAAgrgEgbIAVgCQgCAeAAAqQAAArACAjg");
	this.shape_9.setTransform(30.2,-14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAnQgPgPgBgWQAAgVAOgSQANgRAVAAQAVAAAKANQAMAMgBATIAAALIhIABQABAQALALQALAKARAAQAQAAAOgEIgBAPQgLAFgUAAQgaAAgOgQgAgagIIA1gCQABgegaAAQgYABgEAfg");
	this.shape_10.setTransform(22.2,-12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBLQABgjABgrQAAgrgDgbIATgCQgBAeAAAqQAAArABAjg");
	this.shape_11.setTransform(13.9,-14.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiAsQgIgKAAgbIAAgKIAAgKQAAgPgCgWIAUgBIgBAkQAAAgAEAKQAFAKAPAAQAPAAALgJQAAg5gBgVIATgBIAAA2QAAAXACAXIgRABIgBgKIgBAAQgPAMgSAAQgTAAgIgIg");
	this.shape_12.setTransform(5.6,-11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAmQgPgPgBgWQAAgVAQgQQAQgRAXAAQANAAAIADIgDARQgMgFgLAAQgNAAgJALQgJALAAAQQAAAPAKAMQALALASAAQAIAAAOgEIgBAPQgJAFgOAAQgaAAgOgQg");
	this.shape_13.setTransform(-5.1,-12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJBIQABgVAAgbQAAgdgDgWIATgCQgCAWABAfQgBAZACAXgAgIgxQgCgEAAgFQgBgFAEgEQAEgFAEAAQAFABADADQADAEAAAEQAAAFgDAFQgEAEgFAAQgFAAgDgDg");
	this.shape_14.setTransform(-12.6,-14.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_15.setTransform(-18.4,-12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_16.setTransform(-26.9,-13.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAbA0QACgcAAgfQAAgRgHgGQgGgGgNAAQgNAAgNALIABBNIgUAAIACg0QgBgYgEgXIATgDIACANIABAAQAQgOAQAAQARAAALAIQAJAHAAAVIAAAIIAAAHIAAA0g");
	this.shape_17.setTransform(-36.8,-12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAnQgOgPAAgWQAAgVANgSQAOgRAUAAQAUAAAMANQAKAMABATIgBALIhIABQABAQALALQALAKAQAAQARAAAOgEIgCAPQgKAFgUAAQgaAAgPgQgAgagIIA2gCQgBgegZAAQgXABgFAfg");
	this.shape_18.setTransform(-48.3,-12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBFQAAgIgZg9Qgag7AAgJIAUAAQAAAIAUAzQASAyAAAHIABAAQAAgIATgxQAUgxAAgKIATAAQAAAIgbA8QgbA9AAAIg");
	this.shape_19.setTransform(-59.4,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-29.8,135,59.7);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAxIADgPQAOAFARAAQAVAAAAgNQAAgHgFgDQgFgEgKgFQgQgGgHgEQgKgIAAgMQAAgMAKgJQAJgIARAAQASAAALADIgDAPQgMgEgPAAQgSAAAAALQAAAGAEAEQAFAEALAFQAPAGAHADQAKAJAAAMQAAAfgmAAQgSAAgPgEg");
	this.shape.setTransform(41.7,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIQAAg6gBgVIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_1.setTransform(31.2,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA6A0QACgcAAggQAAgRgGgGQgGgFgNAAQgMAAgMALIAAAZIAAA0IgRAAQACgeAAgeQAAgRgGgGQgGgFgNAAQgNAAgMALIAABNIgTAAIACg0QAAgXgFgYIATgDIACANIABAAQAOgOARAAQAXAAAIAOIABAAQAQgOAQAAQASAAAJAIQAJAIAAAUIAAAIIAAAHIAAA0g");
	this.shape_2.setTransform(16.1,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_3.setTransform(1.7,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBMQABgkABgrQAAgrgEgcIAVgBQgCAeAAAqQAAAqACAlg");
	this.shape_4.setTransform(-6.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_5.setTransform(-14.1,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_6.setTransform(-23.4,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjApQgPgNAAgZQABgZAPgQQARgQASAAQAVAAAOAOQAPAOAAAZQAAAagQAPQgRAPgSAAQgVAAgOgOgAgXgcQgIANAAAPQAAAPAIAOQAJAMAOAAQAPAAAJgLQAHgNAAgQQAAgPgHgNQgJgNgPAAQgOAAgJAMg");
	this.shape_7.setTransform(-33.4,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgtBNQACgdAAgpQAAgzgFgcIATgCIABAKIABAAQALgMAVAAQAVAAALAPQAMAPAAAVQAAAXgNAQQgNARgXAAQgTAAgGgHIgBAAIABA1gAgbgxIABA7QAJAIAOAAQAQAAAJgMQAIgLAAgRQAAgRgIgLQgJgLgNAAQgTAAgIAMg");
	this.shape_8.setTransform(-45.6,4.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJBJQABgWAAgcQAAgdgEgUIAUgEQgBAXAAAeQAAAaABAYgAgHgyQgDgDAAgFQAAgGADgEQAEgDAEAAQAGgBACAEQADAEAAAEQABAFgEAFQgDAEgGAAQgEAAgDgEg");
	this.shape_9.setTransform(-54.1,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAfBGIABhDIg+AAIABBDIgVAAIAChIQAAgkgCgfIAVAAIgBA8IA+AAIgBg8IAUAAQgBAfAAAkQAAAmABAig");
	this.shape_10.setTransform(-63.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-15.4,146,30.9);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAxIADgPQAOAFARAAQAVAAAAgNQAAgHgFgDQgFgEgKgFQgQgGgHgEQgKgIAAgMQAAgMAKgJQAJgIARAAQASAAALADIgDAPQgMgEgPAAQgSAAAAALQAAAGAEAEQAFAEALAFQAPAGAHADQAKAJAAAMQAAAfgmAAQgSAAgPgEg");
	this.shape.setTransform(41.6,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_1.setTransform(31.2,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA6A0QACgcAAggQAAgRgGgGQgGgFgNAAQgMAAgMALIAAAZIAAA0IgRAAQACgeAAgeQAAgRgGgGQgGgFgNAAQgNAAgMALIAABNIgTAAIACg0QAAgXgFgYIATgDIACANIABAAQAOgOARAAQAXAAAIAOIABAAQAQgOAQAAQASAAAJAIQAJAIAAAUIAAAIIAAAHIAAA0g");
	this.shape_2.setTransform(16.1,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_3.setTransform(1.7,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBMQACgkgBgrQAAgrgCgcIATgBQgCAeAAAqQAAAqACAlg");
	this.shape_4.setTransform(-6.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_5.setTransform(-14.2,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_6.setTransform(-23.4,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjApQgOgNAAgZQAAgZAPgQQARgQATAAQATAAAPAOQAOAOAAAZQAAAagQAPQgPAPgUAAQgTAAgPgOgAgWgcQgJANAAAPQAAAPAJAOQAIAMAOAAQAPAAAIgLQAJgNAAgQQAAgPgJgNQgIgNgPAAQgOAAgIAMg");
	this.shape_7.setTransform(-33.4,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgtBNQACgdAAgpQAAgzgFgcIATgCIABAKIABAAQALgMAVAAQAVAAALAPQAMAPAAAVQAAAXgNAQQgNARgXAAQgTAAgGgHIgBAAIABA1gAgbgxIABA7QAJAIAOAAQAQAAAJgMQAIgLAAgRQAAgRgIgLQgJgLgNAAQgTAAgIAMg");
	this.shape_8.setTransform(-45.7,4.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKBJQACgWAAgcQAAgdgDgUIATgEQgBAXgBAeQABAaABAYgAgIgyQgDgDAAgFQABgGADgEQAEgDAEAAQAFgBADAEQAEAEAAAEQgBAFgDAFQgEAEgFAAQgEAAgEgEg");
	this.shape_9.setTransform(-54.1,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAfBGIABhDIg/AAIABBDIgUAAIABhIQAAgkgBgfIAUAAIgBA8IA/AAIgBg8IAUAAQgBAfgBAkQABAmABAig");
	this.shape_10.setTransform(-63.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-15.4,146,30.9);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAxIADgPQAOAFARAAQAVAAAAgNQAAgHgFgDQgFgEgKgFQgQgGgHgEQgKgIAAgMQAAgMAKgJQAJgIARAAQASAAALADIgDAPQgMgEgPAAQgSAAAAALQAAAGAEAEQAFAEALAFQAPAGAHADQAKAJAAAMQAAAfgmAAQgSAAgPgEg");
	this.shape.setTransform(0.1,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_1.setTransform(-10.4,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA6A0QACgcAAggQAAgRgGgGQgGgFgNAAQgMAAgMALIAAAZIAAA0IgRAAQACgeAAgeQAAgRgGgGQgGgFgNAAQgNAAgMALIAABNIgTAAIACg0QAAgXgFgYIATgDIACANIABAAQAOgOARAAQAXAAAIAOIABAAQAQgOAQAAQASAAAJAIQAJAIAAAUIAAAIIAAAHIAAA0g");
	this.shape_2.setTransform(-25.5,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAQgBgEAAgGIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_3.setTransform(-39.9,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBMQACgkAAgrQgBgrgDgcIAVgBQgCAegBAqQABAqACAlg");
	this.shape_4.setTransform(-47.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_5.setTransform(-55.7,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIBGIABhIIgBg0IgsABIAAgQIBpAAIAAAQQgWgCgXABIAAA0IABBIg");
	this.shape_6.setTransform(-65.7,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-15.4,146.6,30.9);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAxIADgPQAOAFARAAQAVAAAAgNQAAgHgFgDQgFgEgKgFQgQgGgHgEQgKgIAAgMQAAgMAKgJQAJgIARAAQASAAALADIgDAPQgMgEgPAAQgSAAAAALQAAAGAEAEQAFAEALAFQAPAGAHADQAKAJAAAMQAAAfgmAAQgSAAgPgEg");
	this.shape.setTransform(0.1,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_1.setTransform(-10.4,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA6A0QACgcAAggQAAgRgGgGQgGgFgNAAQgMAAgMALIAAAZIAAA0IgRAAQACgeAAgeQAAgRgGgGQgGgFgNAAQgNAAgMALIAABNIgTAAIACg0QAAgXgFgYIATgDIACANIABAAQAOgOARAAQAXAAAIAOIABAAQAQgOAQAAQASAAAJAIQAJAIAAAUIAAAIIAAAHIAAA0g");
	this.shape_2.setTransform(-25.5,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAQgBgEAAgGIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_3.setTransform(-39.9,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBMQACgkAAgrQgBgrgDgcIAVgBQgCAegBAqQABAqACAlg");
	this.shape_4.setTransform(-47.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_5.setTransform(-55.7,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIBGIABhIIgBg0IgsABIAAgQIBpAAIAAAQQgWgCgXABIAAA0IABBIg");
	this.shape_6.setTransform(-65.7,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-15.4,146.6,30.9);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJBJQABgWAAgcQAAgdgEgUIAUgEQgBAXAAAeQAAAaABAYgAgHgyQgDgDAAgFQAAgGADgEQAEgDAEAAQAGgBACAEQADAEAAAEQABAFgEAFQgDAEgGAAQgEAAgDgEg");
	this.shape.setTransform(48.1,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBJQACgWAAgcQAAgdgEgUIAUgEQgCAXAAAeQAAAaACAYgAgHgyQgEgDAAgFQABgGADgEQAEgDAEAAQAFgBAEAEQADAEgBAEQAAAFgDAFQgEAEgFAAQgEAAgDgEg");
	this.shape_1.setTransform(43.3,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_2.setTransform(37.4,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_3.setTransform(27.4,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAbA0QACgcAAgfQAAgRgHgGQgGgGgNAAQgNAAgNALIAABNIgTAAIABg0QABgYgFgXIATgDIACANIAAAAQAQgOARAAQASAAAJAIQAKAHAAAVIAAAIIgBAHIABA0g");
	this.shape_4.setTransform(16.1,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKBJQACgWAAgcQAAgdgDgUIATgEQgBAXgBAeQABAaABAYgAgIgyQgDgDAAgFQABgGADgEQAEgDAEAAQAFgBADAEQAEAEAAAEQgBAFgDAFQgEAEgFAAQgEAAgEgEg");
	this.shape_5.setTransform(8,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgtBNQACgdAAgpQAAgzgFgcIATgCIABAKIABAAQALgMAVAAQAVAAALAPQAMAPAAAVQAAAXgNAQQgNARgXAAQgTAAgGgHIgBAAIABA1gAgbgxIABA7QAJAIAOAAQAQAAAJgMQAIgLAAgRQAAgRgIgLQgJgLgNAAQgTAAgIAMg");
	this.shape_6.setTransform(-0.6,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjAxIADgPQAOAFARAAQAVAAAAgNQAAgHgFgDQgFgEgKgFQgQgGgHgEQgKgIAAgMQAAgMAKgJQAJgIARAAQASAAALADIgDAPQgMgEgPAAQgSAAAAALQAAAGAEAEQAFAEALAFQAPAGAHADQAKAJAAAMQAAAfgmAAQgSAAgPgEg");
	this.shape_7.setTransform(-11.4,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_8.setTransform(-26.3,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIAzQAAgIgTgrQgUgtAAgEIAVAAQAAAEAOAkQAMAiAAAGIABAAQAAgGAOggQANgjAAgHIAUAAQAAAFgWAsQgWAtAAAGg");
	this.shape_9.setTransform(-36.8,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIQAAg6gBgVIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_10.setTransform(-48,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiA+QgNgPAAgVQAAgYAOgOQANgSAXAAQARAAAIAHIAAAAQAAgbgBgZIAUgBQgCAbAAAsQAAAsADAjIgQAAIgBgKIgCAAQgLANgUAAQgUAAgMgPgAgSgFQgJAKAAATQAAAQAIALQAJALANAAQATABAIgKQAAghgCgdQgIgIgNAAQgQAAgJAMg");
	this.shape_11.setTransform(-60.1,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_12.setTransform(-71.6,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA4BGQAAgZgDgtIgDg0IgBAAQgLAjgRAnQgQAoAAAIIgNAAQAAgIgPgpQgPgogEgOIgGgTIgBAAQAAAOgEAsQgEAsAAAUIgTAAIAIg8QAHg3AAgYIAcAAQAAAMARAwQAQAtAAAKIABAAQAAgKATgtQATgwAAgMIAcAAQAAAYAFA3IAFA8g");
	this.shape_13.setTransform(-86.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.6,-15.4,195.3,30.9);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBJQACgWAAgcQAAgdgDgUIATgEQgBAXgBAeQABAaABAYgAgIgyQgDgDAAgFQABgGADgEQAEgDAEAAQAFgBADAEQAEAEAAAEQgBAFgDAFQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(48,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJBJQABgWAAgcQAAgdgDgUIATgEQgCAXABAeQgBAaACAYgAgIgyQgCgDAAgFQgBgGAEgEQAEgDAEAAQAFgBADAEQADAEAAAEQAAAFgDAFQgEAEgFAAQgFAAgDgEg");
	this.shape_1.setTransform(43.2,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_2.setTransform(37.4,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_3.setTransform(27.3,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAaA0QADgcAAgfQAAgRgGgGQgIgGgMAAQgNAAgNALIABBNIgUAAIACg0QAAgYgFgXIATgDIACANIABAAQAQgOAQAAQASAAAJAIQAKAHAAAVIAAAIIgBAHIABA0g");
	this.shape_4.setTransform(16.1,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJBJQABgWAAgcQAAgdgEgUIAUgEQgBAXAAAeQAAAaABAYgAgHgyQgDgDgBgFQAAgGAEgEQAEgDAEAAQAGgBADAEQACAEAAAEQABAFgEAFQgDAEgGAAQgEAAgDgEg");
	this.shape_5.setTransform(7.9,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgtBNQACgdAAgpQAAgzgFgcIATgCIABAKIABAAQALgMAVAAQAVAAALAPQAMAPAAAVQAAAXgNAQQgNARgXAAQgTAAgGgHIgBAAIABA1gAgbgxIABA7QAJAIAOAAQAQAAAJgMQAIgLAAgRQAAgRgIgLQgJgLgNAAQgTAAgIAMg");
	this.shape_6.setTransform(-0.7,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjAxIADgPQAOAFARAAQAVAAAAgNQAAgHgFgDQgFgEgKgFQgQgGgHgEQgKgIAAgMQAAgMAKgJQAJgIARAAQASAAALADIgDAPQgMgEgPAAQgSAAAAALQAAAGAEAEQAFAEALAFQAPAGAHADQAKAJAAAMQAAAfgmAAQgSAAgPgEg");
	this.shape_7.setTransform(-11.5,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAQgBgEAAgGIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_8.setTransform(-26.4,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIAzQAAgIgTgrQgUgtAAgEIAVAAQAAAEAOAkQAMAiAAAGIABAAQAAgGAOggQANgjAAgHIAUAAQAAAFgWAsQgWAtAAAGg");
	this.shape_9.setTransform(-36.9,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_10.setTransform(-48,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiA+QgNgPAAgVQAAgYAOgOQANgSAXAAQARAAAIAHIAAAAQAAgbgBgZIAUgBQgCAbAAAsQAAAsADAjIgQAAIgBgKIgCAAQgLANgUAAQgUAAgMgPgAgSgFQgJAKAAATQAAAQAIALQAJALANAAQATABAIgKQAAghgCgdQgIgIgNAAQgQAAgJAMg");
	this.shape_11.setTransform(-60.2,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_12.setTransform(-71.6,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA4BGQAAgZgDgtIgDg0IgBAAQgLAjgRAnQgQAoAAAIIgNAAQAAgIgPgpQgPgogEgOIgGgTIgBAAQAAAOgEAsQgEAsAAAUIgTAAIAIg8QAHg3AAgYIAcAAQAAAMARAwQAQAtAAAKIABAAQAAgKATgtQATgwAAgMIAcAAQAAAYAFA3IAFA8g");
	this.shape_13.setTransform(-86.4,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.6,-15.4,195.3,30.9);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBMQABgkAAgrQAAgrgDgcIAUgBQgCAeAAAqQAAAqACAlg");
	this.shape.setTransform(-3.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_1.setTransform(-12.1,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBMQACgkgBgrQAAgrgCgcIATgBQgCAeAAAqQAAAqACAlg");
	this.shape_2.setTransform(-20.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAnQgPgPAAgWQAAgWAOgQQAOgRAUgBQAVAAAKANQAMAMAAAUIgBAKIhIABQABAQALAKQALALAQAAQARAAAOgEIgCAPQgKAFgUgBQgaAAgPgPgAgbgIIA3gBQAAgegaAAQgYgBgFAgg");
	this.shape_3.setTransform(-28.7,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBGIgBAAIgDAEIgPAAIABhOQAAgngEggIAWgBIgBA6IAAAAQALgMAVAAQAUAAAMAPQAMAPAAATQAAAYgOARQgNARgWAAQgTAAgHgHgAgcgDQAAAkACAXQAJAIAOAAQAPAAAJgMQAJgNAAgRQAAgRgJgJQgIgLgNAAQgTAAgJAMg");
	this.shape_4.setTransform(-40.4,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAnQgPgPABgWQAAgWANgQQANgRAVgBQAUAAAMANQALAMgBAUIAAAKIhIABQABAQALAKQALALAQAAQARAAAOgEIgBAPQgLAFgUgBQgaAAgPgPgAgagIIA1gBQABgegaAAQgYgBgEAgg");
	this.shape_5.setTransform(-52.3,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_6.setTransform(-61.3,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAnQgOgPAAgWQAAgWANgQQAOgRAUgBQAUAAAMANQAKAMABAUIgBAKIhIABQABAQALAKQALALAQAAQARAAAOgEIgCAPQgKAFgUgBQgaAAgPgPgAgagIIA2gBQgBgegZAAQgXgBgFAgg");
	this.shape_7.setTransform(-71.4,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggAzQgTgTAAgeQAAgcAVgXQAVgWAhAAQAKAAAKADIgDARQgMgEgKAAQgYAAgNAQQgOAQAAAXQAAAXAQAQQAPARAaAAQAKAAARgEIgCAQQgNAEgPAAQgjAAgTgVg");
	this.shape_8.setTransform(-82.9,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.1,-15.4,182.4,30.9);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBMQABgkAAgrQAAgrgDgcIAUgBQgCAeAAAqQAAAqACAlg");
	this.shape.setTransform(-3.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_1.setTransform(-12.1,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBMQACgkgBgrQAAgrgCgcIATgBQgCAeAAAqQAAAqACAlg");
	this.shape_2.setTransform(-20.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAnQgPgPAAgWQAAgWAOgQQAOgRAUgBQAVAAAKANQAMAMAAAUIgBAKIhIABQABAQALAKQALALAQAAQARAAAOgEIgCAPQgKAFgUgBQgaAAgPgPgAgbgIIA3gBQAAgegaAAQgYgBgFAgg");
	this.shape_3.setTransform(-28.7,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBGIgBAAIgDAEIgPAAIABhOQAAgngEggIAWgBIgBA6IAAAAQALgMAVAAQAUAAAMAPQAMAPAAATQAAAYgOARQgNARgWAAQgTAAgHgHgAgcgDQAAAkACAXQAJAIAOAAQAPAAAJgMQAJgNAAgRQAAgRgJgJQgIgLgNAAQgTAAgJAMg");
	this.shape_4.setTransform(-40.4,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAnQgPgPABgWQAAgWANgQQANgRAVgBQAUAAAMANQALAMgBAUIAAAKIhIABQABAQALAKQALALAQAAQARAAAOgEIgBAPQgLAFgUgBQgaAAgPgPgAgagIIA1gBQABgegaAAQgYgBgEAgg");
	this.shape_5.setTransform(-52.3,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_6.setTransform(-61.3,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAnQgOgPAAgWQAAgWANgQQAOgRAUgBQAUAAAMANQAKAMABAUIgBAKIhIABQABAQALAKQALALAQAAQARAAAOgEIgCAPQgKAFgUgBQgaAAgPgPgAgagIIA2gBQgBgegZAAQgXgBgFAgg");
	this.shape_7.setTransform(-71.4,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggAzQgTgTAAgeQAAgcAVgXQAVgWAhAAQAKAAAKADIgDARQgMgEgKAAQgYAAgNAQQgOAQAAAXQAAAXAQAQQAPARAaAAQAKAAARgEIgCAQQgNAEgPAAQgjAAgTgVg");
	this.shape_8.setTransform(-82.9,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.1,-15.4,182.4,30.9);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBMQACgkAAgrQgBgrgDgcIAVgBQgCAegBAqQABAqACAlg");
	this.shape.setTransform(57.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_1.setTransform(49.6,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_2.setTransform(41,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjApQgPgNAAgZQABgZAQgQQAPgQAUAAQATAAAPAOQAOAOAAAZQAAAagPAPQgRAPgSAAQgVAAgOgOgAgXgcQgIANAAAPQAAAPAIAOQAJAMAOAAQAPAAAIgLQAIgNAAgQQAAgPgIgNQgIgNgPAAQgOAAgJAMg");
	this.shape_3.setTransform(30.4,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgtBNQACgdAAgpQAAgzgFgcIATgCIABAKIABAAQALgMAVAAQAVAAALAPQAMAPAAAVQAAAXgNAQQgNARgXAAQgTAAgGgHIgBAAIABA1gAgbgxIABA7QAJAIAOAAQAQAAAJgMQAIgLAAgRQAAgRgIgLQgJgLgNAAQgTAAgIAMg");
	this.shape_4.setTransform(18.2,4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA6A0QACgcAAggQAAgRgGgGQgGgFgNAAQgMAAgMALIAAAZIAAA0IgRAAQACgeAAgeQAAgRgGgGQgGgFgNAAQgNAAgMALIAABNIgTAAIACg0QAAgXgFgYIATgDIACANIABAAQAOgOARAAQAXAAAIAOIABAAQAQgOAQAAQASAAAJAIQAJAIAAAUIAAAIIAAAHIAAA0g");
	this.shape_5.setTransform(2.8,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAnQgPgPAAgWQAAgWAOgQQAOgRAUgBQAVAAAKANQAMAMAAAUIgBAKIhIABQABAQALAKQALALAQAAQARAAAOgEIgCAPQgKAFgUgBQgaAAgPgPgAgbgIIA3gBQAAgegaAAQgYgBgFAgg");
	this.shape_6.setTransform(-11.6,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_7.setTransform(-21.3,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIBMQABgkABgrQAAgrgDgcIATgBQgBAeAAAqQAAAqABAlg");
	this.shape_8.setTransform(-32.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_9.setTransform(-40.9,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaBGIgBAAIgDAEIgPAAIABhOQAAgngEggIAWgBIgBA6IAAAAQALgMAVAAQAUAAAMAPQAMAPAAATQAAAYgOARQgNARgWAAQgTAAgHgHgAgcgDQAAAkACAXQAJAIAOAAQAPAAAJgMQAJgNAAgRQAAgRgJgJQgIgLgNAAQgTAAgJAMg");
	this.shape_10.setTransform(-52.8,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjApQgOgNAAgZQgBgZARgQQAPgQAUAAQATAAAPAOQAOAOAAAZQABAagRAPQgPAPgUAAQgTAAgPgOgAgWgcQgJANAAAPQAAAPAJAOQAIAMAOAAQAPAAAIgLQAJgNgBgQQABgPgJgNQgIgNgPAAQgOAAgIAMg");
	this.shape_11.setTransform(-65.2,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgpBGQABgbAAgtQAAgpgBgaIAUAAIgBBDQAAAjgCAWIBCgCIgBARg");
	this.shape_12.setTransform(-75.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.1,-15.4,168.2,30.9);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBMQACgkAAgrQgBgrgDgcIAVgBQgCAegBAqQABAqACAlg");
	this.shape.setTransform(57.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_1.setTransform(49.6,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_2.setTransform(41,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjApQgPgNAAgZQABgZAQgQQAPgQAUAAQATAAAPAOQAOAOAAAZQAAAagPAPQgRAPgSAAQgVAAgOgOgAgXgcQgIANAAAPQAAAPAIAOQAJAMAOAAQAPAAAIgLQAIgNAAgQQAAgPgIgNQgIgNgPAAQgOAAgJAMg");
	this.shape_3.setTransform(30.4,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgtBNQACgdAAgpQAAgzgFgcIATgCIABAKIABAAQALgMAVAAQAVAAALAPQAMAPAAAVQAAAXgNAQQgNARgXAAQgTAAgGgHIgBAAIABA1gAgbgxIABA7QAJAIAOAAQAQAAAJgMQAIgLAAgRQAAgRgIgLQgJgLgNAAQgTAAgIAMg");
	this.shape_4.setTransform(18.2,4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA6A0QACgcAAggQAAgRgGgGQgGgFgNAAQgMAAgMALIAAAZIAAA0IgRAAQACgeAAgeQAAgRgGgGQgGgFgNAAQgNAAgMALIAABNIgTAAIACg0QAAgXgFgYIATgDIACANIABAAQAOgOARAAQAXAAAIAOIABAAQAQgOAQAAQASAAAJAIQAJAIAAAUIAAAIIAAAHIAAA0g");
	this.shape_5.setTransform(2.8,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAnQgPgPAAgWQAAgWAOgQQAOgRAUgBQAVAAAKANQAMAMAAAUIgBAKIhIABQABAQALAKQALALAQAAQARAAAOgEIgCAPQgKAFgUgBQgaAAgPgPgAgbgIIA3gBQAAgegaAAQgYgBgFAgg");
	this.shape_6.setTransform(-11.6,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_7.setTransform(-21.3,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIBMQABgkABgrQAAgrgDgcIATgBQgBAeAAAqQAAAqABAlg");
	this.shape_8.setTransform(-32.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_9.setTransform(-40.9,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaBGIgBAAIgDAEIgPAAIABhOQAAgngEggIAWgBIgBA6IAAAAQALgMAVAAQAUAAAMAPQAMAPAAATQAAAYgOARQgNARgWAAQgTAAgHgHgAgcgDQAAAkACAXQAJAIAOAAQAPAAAJgMQAJgNAAgRQAAgRgJgJQgIgLgNAAQgTAAgJAMg");
	this.shape_10.setTransform(-52.8,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjApQgOgNAAgZQgBgZARgQQAPgQAUAAQATAAAPAOQAOAOAAAZQABAagRAPQgPAPgUAAQgTAAgPgOgAgWgcQgJANAAAPQAAAPAJAOQAIAMAOAAQAPAAAIgLQAJgNgBgQQABgPgJgNQgIgNgPAAQgOAAgIAMg");
	this.shape_11.setTransform(-65.2,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgpBGQABgbAAgtQAAgpgBgaIAUAAIgBBDQAAAjgCAWIBCgCIgBARg");
	this.shape_12.setTransform(-75.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.1,-15.4,168.2,30.9);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBMQABgkABgrQAAgrgDgcIATgBQgBAeAAAqQAAAqABAlg");
	this.shape.setTransform(14.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_1.setTransform(6.7,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_2.setTransform(-2.6,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJBJQABgWAAgcQAAgdgEgUIAUgEQgBAXAAAeQAAAaABAYgAgHgyQgDgDgBgFQAAgGAEgEQAEgDAEAAQAGgBADAEQACAEAAAEQABAFgEAFQgDAEgGAAQgEAAgDgEg");
	this.shape_3.setTransform(-8.7,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgtBNQACgdAAgpQAAgzgFgcIATgCIABAKIABAAQALgMAVAAQAVAAALAPQAMAPAAAVQAAAXgNAQQgNARgXAAQgTAAgGgHIgBAAIABA1gAgbgxIABA7QAJAIAOAAQAQAAAJgMQAIgLAAgRQAAgRgIgLQgJgLgNAAQgTAAgIAMg");
	this.shape_4.setTransform(-17.3,4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKBJQACgWAAgcQAAgdgDgUIATgEQgBAXgBAeQABAaABAYgAgIgyQgDgDAAgFQABgGADgEQAEgDAEAAQAFgBADAEQAEAEAAAEQgBAFgDAFQgEAEgFAAQgEAAgEgEg");
	this.shape_5.setTransform(-25.8,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAmQgOgPAAgWQAAgVAPgQQAQgRAXAAQANAAAIADIgDARQgLgFgMAAQgNAAgJALQgJALAAAQQAAAPALAMQAKALASAAQAIAAAPgEIgCAPQgJAFgOAAQgaAAgPgQg");
	this.shape_6.setTransform(-33.1,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAmQgPgPgBgWQAAgVAQgQQAPgRAYAAQANAAAIADIgDARQgMgFgLAAQgNAAgJALQgJALAAAQQAAAPAKAMQALALASAAQAIAAAOgEIgBAPQgJAFgOAAQgaAAgOgQg");
	this.shape_7.setTransform(-43,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjApQgPgNAAgZQAAgZAQgQQAQgQATAAQAVAAAOAOQAPAOAAAZQgBAagQAPQgQAPgSAAQgVAAgOgOgAgXgcQgIANAAAPQAAAPAIAOQAJAMAOAAQAPAAAJgLQAHgNABgQQgBgPgHgNQgJgNgPAAQgOAAgJAMg");
	this.shape_8.setTransform(-54.3,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIBMQACgkAAgrQAAgrgEgcIAVgBQgCAeAAAqQAAAqACAlg");
	this.shape_9.setTransform(-67.9,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_10.setTransform(-76.2,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaBGIgBAAIgDAEIgPAAIABhOQAAgngEggIAWgBIgBA6IAAAAQALgMAVAAQAUAAAMAPQAMAPAAATQAAAYgOARQgNARgWAAQgTAAgHgHgAgcgDQAAAkACAXQAJAIAOAAQAPAAAJgMQAJgNAAgRQAAgRgJgJQgIgLgNAAQgTAAgJAMg");
	this.shape_11.setTransform(-88.1,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgjApQgOgNAAgZQAAgZAPgQQARgQATAAQATAAAPAOQAOAOAAAZQAAAagQAPQgPAPgUAAQgTAAgPgOgAgWgcQgJANAAAPQAAAPAJAOQAIAMAOAAQAPAAAIgLQAJgNAAgQQAAgPgJgNQgIgNgPAAQgOAAgIAMg");
	this.shape_12.setTransform(-100.5,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgpBGQABgbAAgtQAAgpgBgaIAUAAIgBBDQAAAjgCAWIBCgCIgBARg");
	this.shape_13.setTransform(-111.1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.4,-15.4,238.9,30.9);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBMQABgkABgrQAAgrgDgcIATgBQgBAeAAAqQAAAqABAlg");
	this.shape.setTransform(14.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_1.setTransform(6.7,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_2.setTransform(-2.6,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJBJQABgWAAgcQAAgdgEgUIAUgEQgBAXAAAeQAAAaABAYgAgHgyQgDgDgBgFQAAgGAEgEQAEgDAEAAQAGgBADAEQACAEAAAEQABAFgEAFQgDAEgGAAQgEAAgDgEg");
	this.shape_3.setTransform(-8.7,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgtBNQACgdAAgpQAAgzgFgcIATgCIABAKIABAAQALgMAVAAQAVAAALAPQAMAPAAAVQAAAXgNAQQgNARgXAAQgTAAgGgHIgBAAIABA1gAgbgxIABA7QAJAIAOAAQAQAAAJgMQAIgLAAgRQAAgRgIgLQgJgLgNAAQgTAAgIAMg");
	this.shape_4.setTransform(-17.3,4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKBJQACgWAAgcQAAgdgDgUIATgEQgBAXgBAeQABAaABAYgAgIgyQgDgDAAgFQABgGADgEQAEgDAEAAQAFgBADAEQAEAEAAAEQgBAFgDAFQgEAEgFAAQgEAAgEgEg");
	this.shape_5.setTransform(-25.8,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAmQgOgPAAgWQAAgVAPgQQAQgRAXAAQANAAAIADIgDARQgLgFgMAAQgNAAgJALQgJALAAAQQAAAPALAMQAKALASAAQAIAAAPgEIgCAPQgJAFgOAAQgaAAgPgQg");
	this.shape_6.setTransform(-33.1,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAmQgPgPgBgWQAAgVAQgQQAPgRAYAAQANAAAIADIgDARQgMgFgLAAQgNAAgJALQgJALAAAQQAAAPAKAMQALALASAAQAIAAAOgEIgBAPQgJAFgOAAQgaAAgOgQg");
	this.shape_7.setTransform(-43,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjApQgPgNAAgZQAAgZAQgQQAQgQATAAQAVAAAOAOQAPAOAAAZQgBAagQAPQgQAPgSAAQgVAAgOgOgAgXgcQgIANAAAPQAAAPAIAOQAJAMAOAAQAPAAAJgLQAHgNABgQQgBgPgHgNQgJgNgPAAQgOAAgJAMg");
	this.shape_8.setTransform(-54.3,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIBMQACgkAAgrQAAgrgEgcIAVgBQgCAeAAAqQAAAqACAlg");
	this.shape_9.setTransform(-67.9,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_10.setTransform(-76.2,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaBGIgBAAIgDAEIgPAAIABhOQAAgngEggIAWgBIgBA6IAAAAQALgMAVAAQAUAAAMAPQAMAPAAATQAAAYgOARQgNARgWAAQgTAAgHgHgAgcgDQAAAkACAXQAJAIAOAAQAPAAAJgMQAJgNAAgRQAAgRgJgJQgIgLgNAAQgTAAgJAMg");
	this.shape_11.setTransform(-88.1,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgjApQgOgNAAgZQAAgZAPgQQARgQATAAQATAAAPAOQAOAOAAAZQAAAagQAPQgPAPgUAAQgTAAgPgOgAgWgcQgJANAAAPQAAAPAJAOQAIAMAOAAQAPAAAIgLQAJgNAAgQQAAgPgJgNQgIgNgPAAQgOAAgIAMg");
	this.shape_12.setTransform(-100.5,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgpBGQABgbAAgtQAAgpgBgaIAUAAIgBBDQAAAjgCAWIBCgCIgBARg");
	this.shape_13.setTransform(-111.1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.4,-15.4,238.9,30.9);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBMQABgkABgrQAAgrgDgcIATgBQgBAeAAAqQAAAqABAlg");
	this.shape.setTransform(40.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_1.setTransform(32.3,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_2.setTransform(23.1,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAnQgPgPAAgWQAAgWAOgQQAOgRAUgBQAVAAAKANQAMAMAAAUIgBAKIhIABQABAQALAKQALALAQAAQARAAAOgEIgCAPQgKAFgUgBQgaAAgPgPgAgbgIIA3gBQAAgegaAAQgXgBgGAgg");
	this.shape_3.setTransform(13.6,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJBJQABgWAAgcQAAgdgDgUIATgEQgBAXgBAeQABAaABAYgAgIgyQgCgDAAgFQAAgGADgEQAEgDAEAAQAFgBADAEQAEAEAAAEQAAAFgEAFQgDAEgGAAQgFAAgDgEg");
	this.shape_4.setTransform(5.6,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_5.setTransform(-0.2,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_6.setTransform(-10.3,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtBNQACgdAAgpQAAgzgFgcIATgCIABAKIABAAQALgMAVAAQAVAAALAPQAMAPAAAVQAAAXgNAQQgNARgXAAQgTAAgGgHIgBAAIABA1gAgbgxIABA7QAJAIAOAAQAQAAAJgMQAIgLAAgRQAAgRgIgLQgJgLgNAAQgTAAgIAMg");
	this.shape_7.setTransform(-21.6,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIBMQACgkAAgrQgBgrgDgcIAVgBQgCAegBAqQABAqACAlg");
	this.shape_8.setTransform(-35.1,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_9.setTransform(-43.4,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaBGIgBAAIgDAEIgPAAIABhOQAAgngEggIAWgBIgBA6IAAAAQALgMAVAAQAUAAAMAPQAMAPAAATQAAAYgOARQgNARgWAAQgTAAgHgHgAgcgDQAAAkACAXQAJAIAOAAQAPAAAJgMQAJgNAAgRQAAgRgJgJQgIgLgNAAQgTAAgJAMg");
	this.shape_10.setTransform(-55.4,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjApQgOgNAAgZQAAgZAPgQQARgQASAAQAVAAAOAOQAPAOAAAZQgBAagQAPQgPAPgUAAQgTAAgPgOgAgWgcQgJANAAAPQAAAPAJAOQAIAMAOAAQAPAAAJgLQAHgNABgQQgBgPgHgNQgJgNgPAAQgOAAgIAMg");
	this.shape_11.setTransform(-67.7,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgpBGQABgbAAgtQAAgpgBgaIAUAAIgBBDQAAAjgCAWIBCgCIgBARg");
	this.shape_12.setTransform(-78.4,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.6,-15.4,173.4,30.9);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBLQABgjABgrQAAgrgDgbIATgCQgBAeAAAqQAAArABAjg");
	this.shape.setTransform(40.3,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAuQgJgHAAgNQAAgRAOgJQAOgJAkAAIAAgHQAAgNgHgEQgHgFgMABQgRgBgRAFIACgPQAQgEATgBQATAAALAIQAKAIAAATIAAASIgBAQQAAAUADAPIgRABIgBgKIgBAAQgNAMgVgBQgMABgJgIgAgGAEQgSAFAAAQQAAAOAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_1.setTransform(32.3,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_2.setTransform(23.1,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAnQgPgPAAgWQAAgVAOgSQAOgRAUAAQAVAAAKANQAMAMAAATIgBALIhIABQABAQALALQALAKAQAAQARAAAOgEIgCAPQgKAFgUAAQgaAAgPgQgAgbgIIA3gCQAAgegaAAQgXABgGAfg");
	this.shape_3.setTransform(13.6,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJBIQABgVAAgbQAAgdgDgWIATgCQgBAWgBAfQABAZABAXgAgIgxQgCgEAAgFQAAgFADgEQAEgFAEAAQAFABADADQAEAEAAAEQAAAFgEAFQgDAEgGAAQgFAAgDgDg");
	this.shape_4.setTransform(5.6,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_5.setTransform(-0.2,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAuQgJgHAAgNQAAgRAOgJQAOgJAkAAIAAgHQAAgNgHgEQgHgFgMABQgRgBgRAFIACgPQAQgEATgBQATAAALAIQAKAIAAATIAAASIgBAQQAAAUADAPIgRABIgBgKIgBAAQgNAMgVgBQgMABgJgIgAgGAEQgSAFAAAQQAAAOAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_6.setTransform(-10.3,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtBNQACgcAAgrQAAgxgFgcIATgEIABALIABAAQALgMAVAAQAVAAALAPQAMAPAAAVQAAAXgNAPQgNASgXAAQgTAAgGgHIgBAAIABA1gAgbgyIABA9QAJAHAOAAQAQAAAJgNQAIgKAAgSQAAgPgIgMQgJgLgNAAQgTAAgIALg");
	this.shape_7.setTransform(-21.6,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIBLQACgjAAgrQgBgrgDgbIAVgCQgCAegBAqQABArACAjg");
	this.shape_8.setTransform(-35.1,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiAsQgIgKAAgbIAAgKIAAgKQAAgPgCgWIAUgBIgBAkQAAAgAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAXIgRABIgBgKIgBAAQgPAMgSAAQgTAAgIgIg");
	this.shape_9.setTransform(-43.4,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaBGIgBAAIgDAEIgPAAIABhOQAAgngEggIAWgBIgBA6IAAAAQALgMAVAAQAUAAAMAPQAMAPAAATQAAAYgOAQQgNASgWAAQgTAAgHgHgAgcgEQAAAlACAYQAJAHAOAAQAPAAAJgNQAJgMAAgRQAAgRgJgJQgIgLgNAAQgTAAgJALg");
	this.shape_10.setTransform(-55.4,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjAqQgOgOAAgZQAAgaAPgPQARgQASAAQAVAAAOAOQAPAOAAAZQgBAZgQAQQgPAPgUAAQgTAAgPgNgAgWgcQgJAMAAAQQAAAPAJANQAIANAOABQAPgBAJgMQAHgMABgRQgBgOgHgNQgJgNgPAAQgOAAgIAMg");
	this.shape_11.setTransform(-67.7,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgpBFQABgaAAgtQAAgogBgaIAUAAIgBBCQAAAjgCAWIBCgBIgBAPg");
	this.shape_12.setTransform(-78.4,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.6,-15.4,173.4,30.9);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBMQACgkgBgrQAAgrgCgcIATgBQgCAeAAAqQAAAqACAlg");
	this.shape.setTransform(52.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAIgBgKIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_1.setTransform(44.8,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_2.setTransform(35.5,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAaA0QADgcAAgfQAAgRgHgGQgHgGgMAAQgNAAgNALIABBNIgUAAIACg0QgBgYgEgXIATgDIACANIABAAQAQgOAQAAQARAAALAIQAJAHAAAVIAAAIIAAAHIAAA0g");
	this.shape_3.setTransform(25.6,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjApQgPgNAAgZQAAgZAQgQQAQgQATAAQAVAAAOAOQAPAOAAAZQgBAagPAPQgRAPgSAAQgVAAgOgOgAgXgcQgIANAAAPQAAAPAIAOQAJAMAOAAQAPAAAJgLQAHgNABgQQgBgPgHgNQgJgNgPAAQgOAAgJAMg");
	this.shape_4.setTransform(13.6,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_5.setTransform(4.1,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOBNQACgkAAgwIgXABIABgQIAWABQAAgdAIgNQAGgNARAAQAIAAAIACIgCAOIgOgBQgJAAgEAIQgEAHAAAZIAfgBIgBAQIgegBQAAAvACAlg");
	this.shape_6.setTransform(-3.9,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIBMQACgkgBgrQAAgrgCgcIATgBQgCAeAAAqQAAAqACAlg");
	this.shape_7.setTransform(-15.2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_8.setTransform(-23.5,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaBGIgBAAIgDAEIgPAAIABhOQAAgngEggIAWgBIgBA6IAAAAQALgMAVAAQAUAAAMAPQAMAPAAATQAAAYgOARQgNARgWAAQgTAAgHgHgAgcgDQAAAkACAXQAJAIAOAAQAPAAAJgMQAJgNAAgRQAAgRgJgJQgIgLgNAAQgTAAgJAMg");
	this.shape_9.setTransform(-35.4,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjApQgPgNAAgZQABgZAPgQQARgQASAAQAVAAAOAOQAPAOAAAZQAAAagQAPQgRAPgSAAQgVAAgOgOgAgXgcQgIANAAAPQAAAPAIAOQAJAMAOAAQAPAAAJgLQAHgNAAgQQAAgPgHgNQgJgNgPAAQgOAAgJAMg");
	this.shape_10.setTransform(-47.8,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgpBGQABgbAAgtQAAgpgBgaIAUAAIgBBDQAAAjgCAWIBCgCIgBARg");
	this.shape_11.setTransform(-58.4,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-15.4,133.5,30.9);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBMQACgkAAgrQAAgrgEgcIAVgBQgCAeAAAqQAAAqACAlg");
	this.shape.setTransform(52.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAvQgJgIAAgNQAAgRAOgJQAOgJAkgBIAAgFQAAgNgHgFQgHgFgMAAQgRAAgRAFIACgPQAQgFATABQATAAALAIQAKAHAAATIAAASIgBAQQAAATADAQIgRAAQgBgEAAgGIgBAAQgNANgVAAQgMgBgJgGgAgGAEQgSAFAAAPQAAAPAVAAQAQAAAKgJIAAgdQgVAAgIADg");
	this.shape_1.setTransform(44.7,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA5QgHgKAAgaIAAgoIgSAAIABgPIASAAIABgeIAPgCIgCAgIAfgBIAAAQIgfAAIAAAiQAAAWAEAHQAFAIAMAAQAFAAAIgDIgBAOQgJAEgHAAQgSAAgHgKg");
	this.shape_2.setTransform(35.5,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAbA0QACgcAAgfQAAgRgHgGQgGgGgNAAQgNAAgNALIAABNIgTAAIABg0QABgYgFgXIATgDIACANIAAAAQAQgOARAAQASAAAKAIQAJAHAAAVIAAAIIgBAHIABA0g");
	this.shape_3.setTransform(25.6,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjApQgOgNAAgZQgBgZARgQQAPgQAUAAQATAAAPAOQAOAOAAAZQABAagRAPQgPAPgUAAQgTAAgPgOgAgWgcQgJANAAAPQAAAPAJAOQAIAMAOAAQAPAAAIgLQAJgNgBgQQABgPgJgNQgIgNgPAAQgOAAgIAMg");
	this.shape_4.setTransform(13.6,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdA0IACg0QAAgYgGgXIATgDIACAQIABAAQALgRAOAAQAIAAAMADIgFARQgIgDgIAAQgSAAgGATIABBDg");
	this.shape_5.setTransform(4.1,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNBNQABgkAAgwIgWABIAAgQIAWABQAAgdAIgNQAGgNASAAQAHAAAJACIgEAOIgMgBQgLAAgDAIQgDAHAAAZIAdgBIAAAQIgdgBQgBAvACAlg");
	this.shape_6.setTransform(-4,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIBMQACgkAAgrQAAgrgEgcIAVgBQgCAeAAAqQAAAqACAlg");
	this.shape_7.setTransform(-15.2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiArQgIgJAAgbIAAgJIAAgLQAAgPgCgWIAUgBIgBAjQAAAhAEAKQAFAKAPAAQAPAAALgIIgBhPIATgBIAAA2QAAAXACAYIgRAAIgBgKIgBAAQgPAMgSAAQgTAAgIgJg");
	this.shape_8.setTransform(-23.5,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaBGIgBAAIgDAEIgPAAIABhOQAAgngEggIAWgBIgBA6IAAAAQALgMAVAAQAUAAAMAPQAMAPAAATQAAAYgOARQgNARgWAAQgTAAgHgHgAgcgDQAAAkACAXQAJAIAOAAQAPAAAJgMQAJgNAAgRQAAgRgJgJQgIgLgNAAQgTAAgJAMg");
	this.shape_9.setTransform(-35.5,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjApQgOgNAAgZQAAgZAPgQQARgQATAAQATAAAPAOQAOAOAAAZQAAAagQAPQgPAPgUAAQgTAAgPgOgAgWgcQgJANAAAPQAAAPAJAOQAIAMAOAAQAPAAAIgLQAJgNAAgQQAAgPgJgNQgIgNgPAAQgOAAgIAMg");
	this.shape_10.setTransform(-47.8,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgpBGQABgbAAgtQAAgpgBgaIAUAAIgBBDQAAAjgCAWIBCgCIgBARg");
	this.shape_11.setTransform(-58.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-15.4,133.5,30.9);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,189);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.maduva();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,173);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.talamus();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136,118);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.corpulcallos();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199,134);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lobultemporal();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,94);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cerebel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,117);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,137);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,146);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.setTransform(84,95.5,1,1,0,0,0,84,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,176,197);


// stage content:



(lib.creier = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_141 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(141).call(this.frame_141).wait(1));

	// Layer 35
	this.instance = new lib.Tween21("synched",0);
	this.instance.setTransform(-91.5,169);
	this.instance._off = true;

	this.instance_1 = new lib.Tween22("synched",0);
	this.instance_1.setTransform(87.6,186.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},122).to({state:[{t:this.instance_1}]},19).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122).to({_off:false},0).to({_off:true,x:87.6,y:186.7},19).wait(1));

	// dunga lob occipi copy 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFgIIALAAIAAARIgLAAg");
	this.shape.setTransform(317.4,235.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAqATIheglIAPABIBaAkg");
	this.shape_1.setTransform(312.6,234);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABbAdIi+g6IASADIC1A4g");
	this.shape_2.setTransform(307.8,232.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmgJIBGAQIAGADg");
	this.shape_3.setTransform(313.8,234.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjXgzIgagKIHeB4IAFADg");
	this.shape_4.setTransform(293.4,229.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AkEg8IgbgMII9CNIADAEg");
	this.shape_5.setTransform(288.6,228.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AkxhFIgegOIKeChIABAFg");
	this.shape_6.setTransform(283.8,227);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AldhOIghgPIL9C2IgBAFg");
	this.shape_7.setTransform(279.1,225.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AmLhWIgjgSINdDLIgDAGg");
	this.shape_8.setTransform(274.3,224.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Am5hfIglgTIO9DeIgEAIg");
	this.shape_9.setTransform(269.6,223.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AnmhoIgogVIQdDzIgGAIg");
	this.shape_10.setTransform(264.9,222.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AoThxIgrgXIR9EIIgIAJg");
	this.shape_11.setTransform(260.2,221.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ApBh5IgtgaITdEdIgKAKg");
	this.shape_12.setTransform(255.5,219.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ApuiCIgwgbIU9ExIgMAKg");
	this.shape_13.setTransform(250.8,218.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AqciKIgygeIWdFGIgNALg");
	this.shape_14.setTransform(246,217.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ArJiTIg1ggIX9FaIgOAMg");
	this.shape_15.setTransform(241.3,216.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ar3icIg3ghIZdFuIgQANg");
	this.shape_16.setTransform(236.6,215.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AskikIg6gkIa9GDIgSAOg");
	this.shape_17.setTransform(231.9,214.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AtSitIg8gmIcdGYIgUAPg");
	this.shape_18.setTransform(227.2,212.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},122).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

	// Layer 38
	this.instance_2 = new lib.Tween23("synched",0);
	this.instance_2.setTransform(-101.3,404.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween24("synched",0);
	this.instance_3.setTransform(111.8,395.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},110).to({state:[{t:this.instance_3}]},17).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({_off:false},0).to({_off:true,x:111.8,y:395.5},17).wait(15));

	// dunga lob occipi copy 7
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFgIIALAAIAAARIgLAAg");
	this.shape_19.setTransform(317.4,326.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgsANIBZgoIgBASIhWAlg");
	this.shape_20.setTransform(313.5,328.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhUAjICphRIgCAQIihBNg");
	this.shape_21.setTransform(309.6,330.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ah7A5ID3h6IgDAPIjtB0g");
	this.shape_22.setTransform(305.7,332.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AiiBPIFFijIgEAOIk4Cbg");
	this.shape_23.setTransform(301.7,334.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AjKBlIGVjMIgFANImEDCg");
	this.shape_24.setTransform(297.8,336.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ADyh6IgGALInODpIgPABg");
	this.shape_25.setTransform(293.9,338.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AEZiOIgHAJIoaEQIgQAFg");
	this.shape_26.setTransform(289.9,340.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AFBijIgIAIIplE4IgUAHg");
	this.shape_27.setTransform(286,342.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAmgTIgJAHIhCAgg");
	this.shape_28.setTransform(314.3,328.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AmbDQINHmsIALgFIttHCg");
	this.shape_29.setTransform(274.2,349);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AnADiIOSnVIAMgCIu7Hrg");
	this.shape_30.setTransform(270.3,351.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AnlDzIPen7IANgCIwLIVg");
	this.shape_31.setTransform(266.3,353.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AoKEEIQpoiIAOAAIxZI9g");
	this.shape_32.setTransform(262.4,355.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AovEWIR1pJIAPABIyoJmg");
	this.shape_33.setTransform(258.5,357.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("ApUEoITApxIAQADIz3KQg");
	this.shape_34.setTransform(254.6,359.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ap5E6IULqYIARAEI1FK5g");
	this.shape_35.setTransform(250.6,361.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19}]},110).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).wait(15));

	// Layer 33
	this.instance_4 = new lib.Tween17("synched",0);
	this.instance_4.setTransform(-48.2,262.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween18("synched",0);
	this.instance_5.setTransform(111.9,262.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},100).to({state:[{t:this.instance_5}]},17).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).to({_off:true,x:111.9},17).wait(25));

	// dunga lob occipi copy 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFgIIALAAIAAARIgLAAg");
	this.shape_36.setTransform(329.8,292.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag4gOIAQgBIBhAeIgLABg");
	this.shape_37.setTransform(324.6,292.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhrgVIATgBIDEArIgJACg");
	this.shape_38.setTransform(319.5,291.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AiegcIAWgCIEnA6IgIADg");
	this.shape_39.setTransform(314.4,290.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AjRgjIAZgCIGKBGIgHAFg");
	this.shape_40.setTransform(309.2,290.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AkEgpIAcgDIHtBUIgFAEg");
	this.shape_41.setTransform(304.1,289.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ak3gwIAfgDIJQBhIgDAGg");
	this.shape_42.setTransform(298.9,288.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Alqg2IAigEIKzBuIgCAHg");
	this.shape_43.setTransform(293.8,288.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Amdg9IAlgEIMWB7IAAAIg");
	this.shape_44.setTransform(288.7,287.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AnRhEIApgEIN4CIIACAJg");
	this.shape_45.setTransform(283.6,286.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AoFhLIArgEIPcCWIAEAJg");
	this.shape_46.setTransform(278.6,286.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ao4hRIAugFIQ/CjIAEAKg");
	this.shape_47.setTransform(273.5,285.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("ApshYIAygFIShCwIAGALg");
	this.shape_48.setTransform(268.4,284.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AqghfIA0gFIUFC9IAIAMg");
	this.shape_49.setTransform(263.4,284.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("ArUhmIA4gFIVnDKIAKANg");
	this.shape_50.setTransform(258.3,283.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AsHhsIA6gHIXLDZIAKANg");
	this.shape_51.setTransform(253.2,282.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("As7hzIA9gHIYuDmIAMAPg");
	this.shape_52.setTransform(248.2,282.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Atvh6IBAgHIaRDzIAOAPg");
	this.shape_53.setTransform(243.1,281.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36}]},100).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(25));

	// Layer 32
	this.instance_6 = new lib.Tween15("synched",0);
	this.instance_6.setTransform(775.6,231.6);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween16("synched",0);
	this.instance_7.setTransform(608.7,241.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},88).to({state:[{t:this.instance_7}]},17).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(88).to({_off:false},0).to({_off:true,x:608.7,y:241.6},17).wait(37));

	// dunga lob occipi copy 4
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgFgIIALAAIAAARIgLAAg");
	this.shape_54.setTransform(361.4,252.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag5gGIBzgDIgEAQIhuADg");
	this.shape_55.setTransform(366.6,252.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhtgEIDbgHIgIARIjQAGg");
	this.shape_56.setTransform(371.8,252);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AihgDIFDgJIgMAQIk0AJg");
	this.shape_57.setTransform(376.9,251.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AjUgBIGpgNIgOASImYALg");
	this.shape_58.setTransform(382.1,251.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AkJAAIISgPIgSARIn6AOg");
	this.shape_59.setTransform(387.3,251.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ak8AAIJ5gQIgWAQIpeARg");
	this.shape_60.setTransform(392.4,251.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AlwACILhgTIgaARIrBASg");
	this.shape_61.setTransform(397.6,251.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AmkADINJgVIgdASIskATg");
	this.shape_62.setTransform(402.7,251.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AnYAGIOxgaIgiASIuHAXg");
	this.shape_63.setTransform(407.9,251);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AoMAHIQZgcIglASIvqAZg");
	this.shape_64.setTransform(413.1,250.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("ApAAJISBggIgpATIxOAcg");
	this.shape_65.setTransform(418.3,250.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ap0AKITpgiIgtATIywAeg");
	this.shape_66.setTransform(423.4,250.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AqoAMIVRglIgwASI0UAhg");
	this.shape_67.setTransform(428.6,250.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("ArcANIW5goIg0ATI13Akg");
	this.shape_68.setTransform(433.7,250.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AsQAQIYhgrIg4ASI3bAlg");
	this.shape_69.setTransform(438.9,250.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AtEARIaJguIg8ATI49Aog");
	this.shape_70.setTransform(444.1,250);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("At4ATIbxgxIhAASI6gArg");
	this.shape_71.setTransform(449.2,249.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54}]},88).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).wait(37));

	// Layer 31
	this.instance_8 = new lib.Tween13("synched",0);
	this.instance_8.setTransform(-54.6,443.2);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween14("synched",0);
	this.instance_9.setTransform(238.4,443.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},75).to({state:[{t:this.instance_9}]},17).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(75).to({_off:false},0).to({_off:true,x:238.4},17).wait(50));

	// dunga lob occipi copy 3
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFgIIALAAIAAARIgLAAg");
	this.shape_72.setTransform(364,371.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgaAJIA1gkIAAATIg0Akg");
	this.shape_73.setTransform(362,373.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgwAcIBfhJIABASIheBJg");
	this.shape_74.setTransform(359.9,375.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhFAvICJhuIACARIiIBug");
	this.shape_75.setTransform(357.8,377.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhaBBICyiSIADARIiyCSg");
	this.shape_76.setTransform(355.8,378.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AhwBUIDdi3IAEAQIjcC3g");
	this.shape_77.setTransform(353.7,380.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AiFBnIEHjdIAEAQIkGDdg");
	this.shape_78.setTransform(351.7,382.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AiaB5IEwkBIAFAQIkwEBg");
	this.shape_79.setTransform(349.6,384.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AiwCMIFbkmIAGAPIlbEmg");
	this.shape_80.setTransform(347.5,386);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AjFCfIGFlLIAGAOImEFLg");
	this.shape_81.setTransform(345.5,387.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AjbCyIGvlwIAHANImuFwg");
	this.shape_82.setTransform(343.4,389.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AjwDFIHZmVIAIAMInYGVg");
	this.shape_83.setTransform(341.3,391.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AkFDXIICm6IAJAMIoCG7g");
	this.shape_84.setTransform(339.3,393.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AkbDqIItnfIAJAMIosHfg");
	this.shape_85.setTransform(337.2,395);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AkwD9IJXoEIAKALIpXIEg");
	this.shape_86.setTransform(335.2,396.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AlFEQIKAopIALAKIqAIpg");
	this.shape_87.setTransform(333.1,398.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AlbEiIKrpOIAMAKIqrJOg");
	this.shape_88.setTransform(331,400.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AlwE1ILVpzIAMAKIrUJzg");
	this.shape_89.setTransform(329,402.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_72}]},75).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).wait(50));

	// Layer 30
	this.instance_10 = new lib.Tween11("synched",0);
	this.instance_10.setTransform(816.2,348.3);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween12("synched",0);
	this.instance_11.setTransform(604.2,348.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},61).to({state:[{t:this.instance_11}]},17).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(61).to({_off:false},0).to({_off:true,x:604.2},17).wait(64));

	// dunga lob occipi copy 2
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgFgIIALAAIAAARIgLAAg");
	this.shape_90.setTransform(416.3,322.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgggOIANgCIA0AfIgMACg");
	this.shape_91.setTransform(419,323.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("Ag7gVIAMgCIBrAtIgMACg");
	this.shape_92.setTransform(421.7,324);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AhVgcIAKgCIChA7IgKADg");
	this.shape_93.setTransform(424.3,324.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AhwgiIAJgEIDYBJIgKAEg");
	this.shape_94.setTransform(427,325.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AiLgpIAJgFIEOBXIgJAGg");
	this.shape_95.setTransform(429.7,326.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AimgvIAJgGIFEBlIgIAGg");
	this.shape_96.setTransform(432.4,327);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AjBg2IAIgHIF7BzIgIAHg");
	this.shape_97.setTransform(435.1,327.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Ajcg8IAHgIIGxCBIgGAIg");
	this.shape_98.setTransform(437.8,328.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("Aj3hDIAHgJIHoCPIgHAJg");
	this.shape_99.setTransform(440.4,329.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AkRhJIAFgKIIfCdIgGAKg");
	this.shape_100.setTransform(443.1,330.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AkshQIAEgKIJWCrIgGAKg");
	this.shape_101.setTransform(445.8,330.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AlHhXIAEgLIKLC5IgEAMg");
	this.shape_102.setTransform(448.5,331.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AliheIAEgLILBDGIgDAOg");
	this.shape_103.setTransform(451.2,332.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("Al9hkIADgNIL4DVIgCAOg");
	this.shape_104.setTransform(453.9,333.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AmYhrIADgNIMuDjIgCAOg");
	this.shape_105.setTransform(456.5,333.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AmzhxIACgPINlDxIgCAQg");
	this.shape_106.setTransform(459.2,334.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AnNh4IABgPIObD/IgBAQg");
	this.shape_107.setTransform(461.9,335.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_90}]},61).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).wait(64));

	// Layer 28
	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.setTransform(-71.1,352.4);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween10("synched",0);
	this.instance_13.setTransform(129.9,352.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},47).to({state:[{t:this.instance_13}]},17).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({_off:false},0).to({_off:true,x:129.9},17).wait(78));

	// dunga lob occipi copy
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgFgIIALAAIAAARIgLAAg");
	this.shape_108.setTransform(273,297.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgcAHIA4gfIABASIg4Afg");
	this.shape_109.setTransform(270.8,298.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgzAXIBmg/IABASIhlA/g");
	this.shape_110.setTransform(268.6,300.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AhKAoICShgIADARIiTBgg");
	this.shape_111.setTransform(266.4,301.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AhhA4IDAiAIADARIjACAg");
	this.shape_112.setTransform(264.2,303.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("Ah4BIIDuihIADARIjtChg");
	this.shape_113.setTransform(262,304.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AiPBZIEbjCIAEARIkbDCg");
	this.shape_114.setTransform(259.8,306.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AimBpIFJjiIAEARIlIDhg");
	this.shape_115.setTransform(257.6,307.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("Ai9B6IF2kCIAFAPIl1EDg");
	this.shape_116.setTransform(255.4,309.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AjUCLIGjkjIAGAOImjEjg");
	this.shape_117.setTransform(253.2,310.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AjrCbIHQlDIAHAOInQFDg");
	this.shape_118.setTransform(251,312.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AkCCsIH+lkIAHANIn+Fkg");
	this.shape_119.setTransform(248.8,313.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AkZC8IIsmEIAHANIorGEg");
	this.shape_120.setTransform(246.6,315.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AkxDNIJamlIAJAMIpZGlg");
	this.shape_121.setTransform(244.4,316.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AlIDdIKInFIAJAMIqGHGg");
	this.shape_122.setTransform(242.2,318.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AlfDuIK1nmIAKAMIq0Hlg");
	this.shape_123.setTransform(240,319.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("Al2D+ILioHIALAMIrhIHg");
	this.shape_124.setTransform(237.8,321.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AmNEPIMQooIALAMIsOImg");
	this.shape_125.setTransform(235.6,322.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_108}]},47).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).wait(78));

	// txt lb occipi
	this.instance_14 = new lib.Tween7("synched",0);
	this.instance_14.setTransform(830.2,160);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween8("synched",0);
	this.instance_15.setTransform(655.7,167.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},34).to({state:[{t:this.instance_15}]},17).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(34).to({_off:false},0).to({_off:true,x:655.7,y:167.7},17).wait(91));

	// dunga lob occipi
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgFgIIALAAIAAARIgLAAg");
	this.shape_126.setTransform(456.7,230.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgcAHIA4gfIABASIg4Afg");
	this.shape_127.setTransform(459,228.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgzAXIBmg/IABASIhmA/g");
	this.shape_128.setTransform(461.4,227.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AhKAoICShgIADARIiTBgg");
	this.shape_129.setTransform(463.7,225.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AhhA4IDAiAIADARIjACAg");
	this.shape_130.setTransform(466.1,224);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("Ah4BIIDtihIAEARIjuChg");
	this.shape_131.setTransform(468.4,222.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AiPBZIEbjBIAEAQIkbDBg");
	this.shape_132.setTransform(470.7,220.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AimBpIFIjhIAFAQIlJDhg");
	this.shape_133.setTransform(473.1,219.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("Ai+B6IF3kDIAFAQIl2ECg");
	this.shape_134.setTransform(475.4,217.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AjUCLIGjkjIAGAOImjEjg");
	this.shape_135.setTransform(477.7,216);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AjrCbIHQlDIAHAOInRFDg");
	this.shape_136.setTransform(480.1,214.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AkDCsIH/lkIAIANIn/Fkg");
	this.shape_137.setTransform(482.4,212.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AkZC8IIrmEIAJANIosGEg");
	this.shape_138.setTransform(484.8,211.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AkxDMIJZmlIAKAOIpaGlg");
	this.shape_139.setTransform(487.1,209.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AlIDdIKHnFIAKAMIqHHGg");
	this.shape_140.setTransform(489.4,208.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AlfDtIK0nmIALAMIq1Hng");
	this.shape_141.setTransform(491.8,206.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("Al2D+ILhoGIAMALIriIHg");
	this.shape_142.setTransform(494.1,204.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AmNEOIMOomIANAKIsQIog");
	this.shape_143.setTransform(496.5,203.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_126}]},34).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).wait(91));

	// text lob pari
	this.instance_16 = new lib.Tween5("synched",0);
	this.instance_16.setTransform(553.1,-16.2);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween6("synched",0);
	this.instance_17.setTransform(560.5,81.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},19).to({state:[{t:this.instance_17}]},17).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({_off:false},0).to({_off:true,x:560.5,y:81.3},17).wait(106));

	// dunga lob parietal
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgFgIIALAAIAAARIgLAAg");
	this.shape_144.setTransform(394.8,143.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgcAHIA4gfIABASIg4Afg");
	this.shape_145.setTransform(397.1,141.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgzAXIBmhAIABATIhlA/g");
	this.shape_146.setTransform(399.4,140.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AhKAoICShgIADARIiTBgg");
	this.shape_147.setTransform(401.8,138.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AhhA4IDAiAIADARIjACAg");
	this.shape_148.setTransform(404.1,137);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("Ah4BJIDtihIAEAQIjuChg");
	this.shape_149.setTransform(406.4,135.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AiPBZIEbjCIAEARIkbDBg");
	this.shape_150.setTransform(408.7,133.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AimBqIFIjiIAFAPIlJDig");
	this.shape_151.setTransform(411,132.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("Ai9B6IF1kCIAGAPIl2ECg");
	this.shape_152.setTransform(413.3,130.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AjVCLIGkkkIAGAPImjEkg");
	this.shape_153.setTransform(415.6,129.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AjsCbIHRlDIAHAOInRFEg");
	this.shape_154.setTransform(417.9,127.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AkDCsIH+lkIAJANIn/Fkg");
	this.shape_155.setTransform(420.2,125.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AkaC8IIsmFIAJAOIosGEg");
	this.shape_156.setTransform(422.5,124.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AkxDNIJZmlIAKAMIpaGlg");
	this.shape_157.setTransform(424.8,122.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AlIDdIKHnGIAKANIqHHFg");
	this.shape_158.setTransform(427.1,121.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AlfDuIK0nmIALALIq1Hmg");
	this.shape_159.setTransform(429.4,119.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("Al2D+ILhoGIAMALIriIHg");
	this.shape_160.setTransform(431.7,118);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AmNEOIMOonIANALIsQIog");
	this.shape_161.setTransform(434,116.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_144}]},19).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).wait(106));

	// txt lob frontal
	this.instance_18 = new lib.Tween3("synched",0);
	this.instance_18.setTransform(-62.7,98.2);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween4("synched",0);
	this.instance_19.setTransform(91.4,98.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},4).to({state:[{t:this.instance_19}]},17).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(4).to({_off:false},0).to({_off:true,x:91.4},17).wait(121));

	// dunga lob front
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgJADIADgKIAQAFIgDAKg");
	this.shape_162.setTransform(239.2,143.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgigHIACgMIBEAaIgDANg");
	this.shape_163.setTransform(236.6,142.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("Ag8gSIAEgNIB1AyIgEANg");
	this.shape_164.setTransform(234,141.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AhUgeIACgMICnBIIgCANg");
	this.shape_165.setTransform(231.4,140);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AhugpIAEgNIDZBhIgDAMg");
	this.shape_166.setTransform(228.7,138.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AiHg1IADgNIEMB4IgDANg");
	this.shape_167.setTransform(226.1,137.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AighBIADgNIE+CQIgDANg");
	this.shape_168.setTransform(223.5,136.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("Ai5hMIAEgOIFvCnIgDAOg");
	this.shape_169.setTransform(220.9,135.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AjShYIADgNIGiC+IgDAOg");
	this.shape_170.setTransform(218.3,134.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AjrhjIADgOIHUDWIgDANg");
	this.shape_171.setTransform(215.6,133.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AkEhvIADgOIIGDtIgDAOg");
	this.shape_172.setTransform(213,132);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("Akdh6IADgPII4EFIgDAOg");
	this.shape_173.setTransform(210.4,130.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("Ak2iGIADgPIJqEdIgDAOg");
	this.shape_174.setTransform(207.8,129.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AlQiRIADgPIKeEzIgEAPg");
	this.shape_175.setTransform(205.2,128.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AlpidIAEgPILPFLIgEAOg");
	this.shape_176.setTransform(202.5,127.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AmCipIAEgPIMBFiIgDAPg");
	this.shape_177.setTransform(199.9,126.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("Ambi0IAEgQIMzF6IgEAPg");
	this.shape_178.setTransform(197.3,125.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("Am0jAIAEgQINlGSIgDAPg");
	this.shape_179.setTransform(194.7,124.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_162}]},4).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).wait(121));

	// lob frontal
	this.instance_20 = new lib.Symbol1();
	this.instance_20.setTransform(252,191.5,1,1,0,0,0,84,94.5);
	this.instance_20.filters = [new cjs.ColorFilter(0.96, 0.96, 0.96, 1, 10.2, 10.2, 10.2, 0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 12, 0))];
	this.instance_20.cache(-2,-1,180,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(142));

	// lob parietal
	this.instance_21 = new lib.Symbol2();
	this.instance_21.setTransform(388,174,1,1,0,0,0,96,73);
	this.instance_21.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 24, 0))];
	this.instance_21.cache(-2,-2,196,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(142));

	// lob occipital
	this.instance_22 = new lib.Symbol3();
	this.instance_22.setTransform(458,246.5,1,1,0,0,0,55,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(142));

	// lobul temporal
	this.instance_23 = new lib.Symbol5();
	this.instance_23.setTransform(283.5,304,1,1,0,0,0,69.5,47);
	this.instance_23.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 9, -23))];
	this.instance_23.cache(-2,-2,143,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(142));

	// cerebel
	this.instance_24 = new lib.Symbol4();
	this.instance_24.setTransform(423.5,323.5,1,1,0,0,0,58.5,58.5);
	this.instance_24.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 7, 0))];
	this.instance_24.cache(-2,-2,121,121);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(142));

	// corpul callos
	this.instance_25 = new lib.Symbol6();
	this.instance_25.setTransform(320.5,270,1,1,0,0,0,99.5,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(142));

	// talamus
	this.instance_26 = new lib.Symbol7();
	this.instance_26.setTransform(357,283,1,1,0,0,0,68,59);
	this.instance_26.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 7, 0))];
	this.instance_26.cache(-2,-2,140,122);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(142));

	// maduva
	this.instance_27 = new lib.Symbol8();
	this.instance_27.setTransform(379,367.5,1,1,0,0,0,57,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(142));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(509,362,349,356);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;