(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1270,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AAfAYQgIgEADgIIgzgVQgCADgDABQgEABgDgBQgFgDgBgGQAAgGAGgDQAHgCAEAFQADAEgBAFIAyAVQADgEAGAAQAGAAADAFQABAHgFAEQgDADgDAAIgDgBg");
	this.shape.setTransform(-33.9,173.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AAPByQgOgDgBgOQgCgJADgIQAEgIAIgDIgdiIQgJABgIgFQgHgFgCgJQgDgOALgJQAMgKAQAHQAKALgCAOQgCANgMAFIAeCIQANgBAIAKQAJAMgHAPQgJALgLAAIgGgBg");
	this.shape_1.setTransform(83.8,-109.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.5,0,11.5,0).s().p("AhgBgQgRgHAAgVQAEgTARgFQAPgEAMALICBhpQgJgOAHgOQAIgQATAAQAVAEAEASQAEARgNALQgJAHgLgBQgKAAgIgIIiBBpQAGAJgBALQgCALgIAGQgJAHgJAAQgFAAgGgDg");
	this.shape_2.setTransform(-51,176.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10,0,10,0).s().p("AA6BVQgIgHgBgJQAAgKAFgHIhvhjQgGAGgKABQgKAAgHgHQgMgKAFgPQAEgPASgEQASACAGAOQAGANgIALIBuBjQALgKAOAFQAOAEAEASQgCASgPAGQgFADgFAAQgIAAgHgHg");
	this.shape_3.setTransform(-16.9,-115.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.8,0).s().p("AgmAhQgIgDAAgHQgBgHAGgDQAIgGAGAIIA2ggQgEgJAHgEQAGgEAGAEQAGADgBAIQgDAHgGABQgHABgDgFIg2AgQADAGgEAFQgDAFgHAAIgBAAg");
	this.shape_4.setTransform(-112.2,71.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.4,0).s().p("AAUAoQgCgHAFgFIgug1QgGAEgGgDQgHgDgBgJQACgJAIgCQAHgCAFAGQADAEAAAEQAAAFgEADIAvA1QAIgGAIAIQAFAGgDAHQgDAHgJAAQgJgCgCgGg");
	this.shape_5.setTransform(-6.1,201);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.4,0,12.5,0).s().p("ABaAXQgOgGgBgPIiUgBQgCAPgNAGQgOAGgOgLQgLgPAGgMQAIgOAPAAQAJAAAIAHQAGAGACAKICUABQABgKAHgGQAHgHAJAAQAQAAAGAOQAIANgMAOQgJAHgJAAQgFAAgEgCg");
	this.shape_6.setTransform(45.6,-105.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AggAyQgIgCgCgJQAAgJAHgDQAGgEAGAEIAtg3QgFgFACgHQACgHAIgCQAKAAADAHQADAHgFAGQgDAEgEAAQgFABgEgDIgtA4QADADAAAFQABAFgDADQgEAFgFAAIgDAAg");
	this.shape_7.setTransform(175.7,-1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("Ag9AoQgCgKAHgFQAFgEAFABQAGAAAEAEIBHg2QgEgFABgFQABgGAFgEQAHgGAJAFQAJAEAAALQgDALgJACQgJACgGgHIhGA3QAFAHgFAIQgEAIgLAAQgKgDgCgJg");
	this.shape_8.setTransform(78.1,11.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6,0).s().p("Ag6BWQgDgPAKgIQAKgJAMAFIA3h2QgKgHAAgMQAAgOAOgHQAQgDAJALQAIALgGAMQgDAHgIAEQgIADgIgDIg4B1QAHAFADAIQACAIgDAIQgGAMgOAAQgOAAgHgPg");
	this.shape_9.setTransform(-135,179.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AAVAgQgGgFAFgHIgoglQgDADgDAAQgEAAgDgDQgEgEACgFQABgGAHgCQAHABACAFQACAFgDAFIAoAkQAEgDAFABQAGACABAHQAAAHgGACIgEABQgDAAgDgDg");
	this.shape_10.setTransform(-108.4,-26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,4,0).s().p("AAQBdQgMgCgDgLQgBgIACgGQAEgHAHgCIgdhvQgHABgGgEQgGgEgCgHQgDgMAJgHQAJgJANAGQAJAIAAAMQgCALgKAEIAcBvQALgCAHAJQAIAJgFAMQgIAKgJAAIgEgBg");
	this.shape_11.setTransform(-72.3,-58.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.1,0,11.2,0).s().p("AhsBhQgHgRANgOQAIgIALgBQALgBAJAHIB5iBQgHgJAAgLQAAgMAIgIQAMgOASAGQATAFADAWQgCAVgRAHQgQAHgOgLIh5CCQAMANgGARQgFARgVADQgXgCgGgSg");
	this.shape_12.setTransform(99.3,158.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.4,0,6.5,0).s().p("Ag7AOQgGgHADgHQADgGAIgBQALgBADAKIBLgFQABgFADgDQADgEAFAAQAIgBAEAHQAFAHgGAGQgHAGgHgCQgHgDgBgFIhMAEQAAAIgHADQgDACgDAAQgEAAgFgDg");
	this.shape_13.setTransform(158.8,137.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.3,0,8.3,0).s().p("AA3AeQgHgGABgKIhigYQgDAJgKABQgKABgIgIQgFgMAIgIQAGgIALADQAGABAEAGQADAFgBAHIBiAYQADgGAFgDQAGgCAGAAQALADACAKQACALgKAIQgFACgEAAQgGAAgFgEg");
	this.shape_14.setTransform(30,222.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.4,0,1.4,0).s().p("AAAArQgDgFABgFQACgFADgBIgGg1QgFAAgDgEQgDgFADgFQAEgFAGACQADABABAGQABADgCADQgCADgBABIAGA0QAIAAABAIQABAGgFADIgFACQgDAAgCgCg");
	this.shape_15.setTransform(-70.2,166.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,3.9,0).s().p("AggAfQgGgCAAgHQACgHAGgBQAFgCAEAEIAqghQgDgFADgEQACgFAHAAQAHABABAGQACAGgFAEQgDACgDAAQgEgBgDgCIgqAhQAEAHgGAFQgDACgDAAIgEgBg");
	this.shape_16.setTransform(32,-222);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.5,0).s().p("AApASQgEgBgCgDQgDgEAAgEIhAgJQAAADgEABQgEADgEgBQgGgBgCgFQgCgGAFgGQAHgEAGAEQAFADAAAHIA/AJQACgEAGgCQAHgBAFADQAEAHgEAGQgDAFgGAAIgCAAg");
	this.shape_17.setTransform(36.1,-42.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.1,0).s().p("AgjAcQgFgDAAgHQACgGAHgBQAFgBADAEIAugcQgDgFADgFQADgFAHABQAHACAAAGQABAGgFADQgGAEgGgGIguAdQAEAHgHAFQgDABgCAAIgFgBg");
	this.shape_18.setTransform(-160.3,104);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.8,0,2.9,0).s().p("AgJCFQgPgHgBgRQAAgKAHgIQAHgIALgBIgCijQgLAAgHgIQgHgIAAgKQAAgRAPgIQAOgHAQAMQAMAPgHAPQgGAPgQABIACCjQAQABAGAPQAHAPgLAPQgKAIgKAAQgEAAgGgDg");
	this.shape_19.setTransform(121.2,70.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.2,0,10.3,0).s().p("AhTBhQgQgGgCgTQADgTAPgFQAOgFAMAKIBwhsQgJgMAGgOQAGgPASgCQATADAGAQQAFAQgMALQgIAHgKAAQgKAAgHgGIhxBsQAHAHgBAKQgBAKgHAHQgIAIgKAAQgEAAgFgCg");
	this.shape_20.setTransform(112.3,-125.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.7,0,6.8,0).s().p("AAyAbQgFgBgDgFQgDgEABgGIhPgTQgCAFgFACQgFABgFAAQgIgCgCgIQgBgJAIgHQAJgDAGAFQAGAFgBAIIBQAUQADgIAHgBQAJAAAGAGQAEAKgGAHQgFAFgGAAIgDgBg");
	this.shape_21.setTransform(-166.3,-53.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,4,0).s().p("AghAXQgGgDABgFQAAgGAFgCQAGgEAFAHIAtgVQgDgHAHgDQAFgDAEAEQAFADgCAHQgDAFgFAAQgFAAgDgEIgtAVQACAEgDAEQgDADgFAAIgCAAg");
	this.shape_22.setTransform(-62.2,177.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.7,0,2.8,0).s().p("AAFBEQgGgGABgJQAAgIAIgDIgShSQgIABgFgHQgGgHAFgJQAGgJAJADQAJACAAAIQADANgKAEIASBTQAFgBAFADQAEADACAFQACAJgHAGQgEADgFAAQgEAAgEgCg");
	this.shape_23.setTransform(80.4,136);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.2,0,5.3,0).s().p("AgvAYQgGgFADgIQAEgHAHABQAGAAADAGIA8gWQgBgHAEgEQAFgFAHACQAHAFAAAHQgBAHgGACQgJAEgFgJIg8AWQACAJgJAEIgEABQgEgBgDgCg");
	this.shape_24.setTransform(90.4,164.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.6,0).s().p("AgnAgQgGgEABgHQACgHAHgBQAGgCAEAFIAzghQgDgGADgFQADgFAIAAQAHADABAGQABAHgFAEQgIAFgGgIIgzAiQACADgBAEQgBAEgEACQgDADgDAAQgCAAgDgCg");
	this.shape_25.setTransform(79.7,-77.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.4,0,14.4,0).s().p("ABrA5QgLgDgGgKQgHgJACgLIirgpQgEAKgKAGQgKADgLgCQgSgDgDgSQgFgTASgNQATgIAOALQAOAKgDARICrApQAGgQARgCQASgCANAOQAJAUgNAPQgIALgNAAIgIgBg");
	this.shape_26.setTransform(-52.1,59.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.9,0,12,0).s().p("ABWAWQgNgGgCgOIiOgBQgBAOgNAFQgNAGgOgKQgKgOAGgMQAIgNAOAAQAJAAAHAGQAHAGAAAJICPACQABgJAHgGQAGgHAKAAQAOAAAGAOQAHAMgKAOQgJAGgIAAQgFAAgFgCg");
	this.shape_27.setTransform(143,84.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.9,0,1.9,0).s().p("AgNA0QgFgEABgHQABgJALAAIAKhAQgEgBgBgDQgCgEABgEQABgHAFgCQAHgCAFAGQAEAHgEAGQgEAFgGAAIgKBAQAEACACAGQABAGgEAGQgDABgDAAQgEAAgDgCg");
	this.shape_28.setTransform(136.1,-81.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.4,0,1.5,0).s().p("AgMArQgDgGADgFQADgFAFABIAGg3QgDgBgCgFQgBgGAEgFQAFgDAFADQAFADgBAGQgBAEgCACQgDADgEgBIgGA3QAGACgBAIQgBAGgDACIgDAAQgEAAgEgDg");
	this.shape_29.setTransform(73.4,138.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AAbAcQgDgCgBgDQgBgEACgDIgwgdQgFAHgIgEQgEgDAAgGQAAgGAHgDQAHgBADAFQADAFgCAFIAvAcQAEgEAFABQAGAAADAHQABAHgFADIgFACIgGgCg");
	this.shape_30.setTransform(-7.1,71.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5.1,0).s().p("AgwArQgDgIAGgGQAIgIAKAHIA1g5QgDgEAAgFQAAgFADgEQAGgGAIACQAIADACAKQgBAJgHADQgIADgGgFIg1A6QAFAGgDAHQgCAHgKACQgKgBgDgIg");
	this.shape_31.setTransform(-16.8,76.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.6,0,7.6,0).s().p("AhHANQgHgJAEgHQAEgJAKAAQAFAAAFAEQAFAEAAAEIBagCQABgFAEgFQAEgEAGAAQAJAAAFAIQAFAIgHAIQgJAHgIgEQgJgDgBgIIhaACQgBAJgHAEQgDACgEAAQgFAAgGgEg");
	this.shape_32.setTransform(-74.2,86.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.8,0,1.9,0).s().p("AgKBDQgIgEABgJQABgFAEgEQAEgDAFAAIAFhTQgLgCABgNQABgIAHgDQAHgEAIAHQAFAJgEAHQgEAHgIAAIgFBTQAGABADAIQADAIgHAIQgEADgDAAQgEAAgDgDg");
	this.shape_33.setTransform(-94.5,123.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.3,0,14.4,0).s().p("ABpA+QgLgDgGgKQgGgKACgLIiqgyQgEALgKAFQgLAFgLgEQgRgFgDgSQgDgTASgNQATgHAOAMQANALgDARICqAyQAHgQARgCQASgDAMARQAIAVgNAOQgJAKgLAAIgKgCg");
	this.shape_34.setTransform(56.4,63.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.2,0,7.2,0).s().p("Ag/AxQgJgGABgMQAFgLAJgCQAKgBAGAIIBSgzQgEgIAFgIQAGgIALAAQAMAFABAKQABALgJAFQgFADgGgBQgGgBgEgFIhTAyQADAGgBAGQgCAGgGADQgEADgFAAQgEAAgEgCg");
	this.shape_35.setTransform(-143.1,126.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AgnAaQgFgEABgHQADgGAGgBQAGAAADAFIAygaQgCgFADgFQAEgFAHABQAHADAAAGQAAAGgFADQgEACgDgBQgEgBgCgDIgyAaQABAEgBADQgBAEgEACIgEABQgDAAgDgCg");
	this.shape_36.setTransform(-24.2,175.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.5,0,7.6,0).s().p("AAlA9QgEgLAHgIIhRhRQgJAHgLgEQgLgEgCgOQACgOAMgEQALgEAJAIQAFAFAAAIQABAHgFAGIBSBRQAGgFAHABQAIAAAFAFQAJAJgEALQgEAMgPACQgNgCgFgLg");
	this.shape_37.setTransform(-69.3,153.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.7,0).s().p("AAmAVQgFgFABgGIhDgQQgCAGgHAAQgHAAgFgEQgDgIAFgGQAEgFAHABQAFABACAEQADAEgBAFIBCAQQACgEAEgDQAEgBAEAAQAHACABAHQACAIgHAFIgGABQgEAAgDgCg");
	this.shape_38.setTransform(-44.3,181.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AAZAaQgDgFADgFIgxgdQgEAFgFgBQgGgBgDgGQgBgIAGgDQAFgDAFADQAHAEgDAIIAxAdQACgDAEgBQADAAADACQAGADgBAGQAAAGgHADIgCAAQgGAAgDgEg");
	this.shape_39.setTransform(108,-26.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.7,0,9.8,0).s().p("AA8BJQgHgFgCgJQgCgIAFgIIhuhRQgGAGgJABQgJABgHgFQgMgJADgOQADgPAQgEQARAAAHAMQAGAMgHALIBvBSQAJgKANADQAOADAEAPQAAASgNAGQgGADgFAAQgHAAgGgFg");
	this.shape_40.setTransform(182.8,9.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.5,0,7.5,0).s().p("Ag9A1QgMgFgBgLQgBgKAJgGQAGgDAGABQAGABAEAFIBWg0QgDgGACgGQACgGAFgEQAJgFAJAFQAKAGgCANQgEALgKABQgKACgGgIIhWA0QAFAJgGAIQgFAIgLAAIgCAAg");
	this.shape_41.setTransform(30.7,-111.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6.1,0).s().p("Ag7AlQgBgJAHgFQAEgEAGABQAFABAEAEIBDgzQgCgFAAgFQABgGAFgDQAHgFAIADQAIAFAAAKQgDAKgIACQgIACgGgGIhDAzQAEAHgEAHQgEAIgKAAQgLgDgCgJg");
	this.shape_42.setTransform(-178.6,15.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.8,0,6.9,0).s().p("AhBAQQgFgIAFgIQAHgGAIACQAIADACAFIBRgKQgBgIAHgEQAHgEAJAEQAHAHgDAJQgCAGgJABQgFABgEgDQgFgDgBgDIhRAKQABAGgEAEQgDAEgFAAIgCAAQgHAAgFgFg");
	this.shape_43.setTransform(132.9,63.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.3,0,11.3,0).s().p("ABRA0QgJgDgEgIQgEgHACgJIiFgsQgEAIgIADQgIAEgJgDQgOgEgBgPQgCgPAOgKQAQgFALAKQAJAJgDANICFAsQAGgMAOgBQAOgCAJAOQAGARgLALQgHAHgJAAQgEAAgEgCg");
	this.shape_44.setTransform(104.1,169.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.9,0,1.9,0).s().p("AgEBUQgJgEgBgLQAAgGAEgFQAFgFAFgBIgChnQgGAAgFgFQgEgFgBgGQAAgLAJgFQAJgFAKAHQAHAKgEAKQgDAJgKABIADBnQAKABAEAIQAEAKgHAKQgGAFgGAAQgCAAgEgCg");
	this.shape_45.setTransform(-27.4,-7.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.7,0).s().p("AAkAnQgJgHAFgKIhAgpQgDAEgFAAQgFABgEgDQgHgEABgIQABgJAJgDQAKAAAEAHQAEAGgEAHIBAApQAFgGAIABQAHACADAIQABAKgHAEQgEADgDAAQgEAAgDgDg");
	this.shape_46.setTransform(171.9,122.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.6,0).s().p("AAHAmQgDgHAHgFIgWgyQgIADgEgIQgCgFAEgFQADgFAHACQAGADAAAGQAAAGgEACIAWAzQAFgCAEADQAEAEgBAHQgEAGgGAAQgFAAgDgGg");
	this.shape_47.setTransform(129.3,79.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.1,0,11.1,0).s().p("AhmAbQgLgMAFgOQAEgLAOgBQAJgBAHAFQAGAFACAHICFgNQgBgIAGgGQAGgHAIgBQAOgBAIALQAHANgJAMQgLALgNgFQgMgEgDgKIiEAMQAAANgLAGQgGADgGAAQgHAAgHgEg");
	this.shape_48.setTransform(97.8,166.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.7,0,13.7,0).s().p("ABfBMQgLgFgEgKQgEgKADgLIighJQgGAKgLADQgLAEgKgFQgRgIAAgSQgBgTAUgLQAVgEALAOQAMAMgGARIChBJQAJgPARAAQASAAAKATQAEAVgOAMQgJAHgJAAQgHAAgGgDg");
	this.shape_49.setTransform(21.4,1.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.9,0,8,0).s().p("AAvCPQgTgBgIgSQgFgLAFgLQAEgLAJgFIhHipQgLAEgLgFQgLgEgFgLQgHgSANgOQAMgPAWAFQATALAAATQAAASgPAIIBHCoQARgFANAMQAOANgFAVQgKATgTAAIgCAAg");
	this.shape_50.setTransform(-21.3,2.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.7,0).s().p("AglBrQgLgJAEgOQACgJAIgFQAHgFAJACIAhiGQgIgDgEgIQgDgIABgJQADgOAOgCQAPgDALANQAGAPgJAMQgIAKgOgCIghCGQANAFABANQABAOgKAKQgHADgGAAQgIAAgHgGg");
	this.shape_51.setTransform(-6.7,180.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.1,0,8.1,0).s().p("AAxAsQgHgIAFgJIhegyQgGAJgKgBQgLgBgFgLQgCgOAJgGQAJgHAKAGQAGADACAGQACAHgCAGIBdAyQAEgGAHgCQAGgBAGADQAKAFAAALQgBAMgMAFIgEABQgKAAgFgIg");
	this.shape_52.setTransform(25,-77.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.9,0,7.9,0).s().p("AA7AgQgGgCgEgFQgDgFABgGIhdgXQgDAFgFADQgFABgGAAQgKgCgCgKQgCgKAJgHQALgFAIAGQAHAGgBAKIBdAXQADgJAJgCQAKAAAHAIQAFALgHAIQgFAFgGAAIgFAAg");
	this.shape_53.setTransform(-71.7,183.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AARBnQgNgDgEgMQAAgIACgHQAEgIAIgCIgfh7QgIABgGgEQgHgFgCgIQgEgMAKgJQALgJAOAGQAKAKgBAMQgBAMgMAFIAfB7QAMgCAIAJQAIAKgGAOQgIALgLAAIgEgBg");
	this.shape_54.setTransform(-87.2,-107.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AgaCCQgLgRAIgPQAIgOAQgBIAHimQgOgCgGgPQgGgQANgPQAPgMAPAJQAPAIgBASQAAALgIAHQgHAHgLABIgHCmQAIABAHAIQAHAIAAALQgBASgQAGQgFADgFAAQgKAAgLgJg");
	this.shape_55.setTransform(-131.5,15.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.9,0,13,0).s().p("ABjAoQgKgBgGgIQgGgIAAgKIiagUQgCAHgIAGQgJAGgKgCQgQgCgFgNQgFgRAOgNQAQgJAOAJQANAIgBAPICaAUQADgMAPgFQAPgEANANQAKAPgKAOQgIAMgNAAIgEgBg");
	this.shape_56.setTransform(-15.8,-196.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.4,0,12.5,0).s().p("ABSASQgHgHgBgJIiUgBQgBAKgHAGQgHAHgJAAQgQAAgGgOQgHgMALgPQAOgLAOAHQANAFABAPICUAAQACgOANgGQAOgGAOALQALAPgHAMQgHANgPAAQgKAAgHgGg");
	this.shape_57.setTransform(-38.1,-105.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.7,0).s().p("AAvANQgHgDAAgIIhOgCQgBAHgHADQgIADgHgGQgGgHAEgGQAEgIAIABQAFAAAEADQADAEABAFIBOABQABgEADgDQAEgDAFAAQAIAAAEAIQADAGgGAHQgFADgEAAIgGgBg");
	this.shape_58.setTransform(18.6,-223.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.2,0).s().p("ABGAdQgHgBgEgGQgFgGABgHIhtgOQgCAFgGADQgGAEgHgBQgLgBgEgJQgDgMAKgJQALgGAKAGQAJAGgBAKIBtAPQADgJAKgCQALgEAKAJQAGALgHAKQgFAIgKAAIgDAAg");
	this.shape_59.setTransform(89.9,56.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8,0,8.2,0).s().p("AAeBtQgFgJACgKQADgLAIgGIhPiOQgKAEgJgDQgLgDgFgJQgIgPAKgOQAKgPATADQATAIABARQABAQgNAJIBPCOQAPgHANAKQANAKgDATQgHASgSABIgCAAQgPAAgIgNg");
	this.shape_60.setTransform(-131.7,-0.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6.1,0).s().p("AAmAbQgFgFACgHIhGgbQgDAHgIAAQgIAAgEgIQgDgJAGgFQAGgGAIADQAEACACAFQACAEgBAFIBGAbQAFgKALAEQAHADABAIQABAIgJAFIgEABQgGAAgEgFg");
	this.shape_61.setTransform(123.2,-79.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.5,0,6.6,0).s().p("AAlA4QgEgEgBgHQAAgGADgFIhIhBQgFAEgGABQgGAAgFgFQgIgGADgKQADgLAMgCQAMABAEAKQAEAIgGAIIBIBBQAHgHAKADQAJADACAMQAAAMgLAEIgGACQgGAAgFgFg");
	this.shape_62.setTransform(101.3,42.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.7,0,1.7,0).s().p("AAAA0QgFgFACgHQACgGAEgCIgHhAQgHABgDgGQgDgFADgHQAGgGAHACQAEACABAHQACAKgIACIAHBAQAEAAAEADQADACABAEQABAHgGAEQgDACgEAAQgDAAgCgCg");
	this.shape_63.setTransform(4.3,-188.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.3,0,9.3,0).s().p("AhKBGQgPgFgCgOQgCgNALgHQAHgFAIABQAIABAFAHIBqhIQgEgHACgIQACgIAHgFQALgIAMAHQAMAHgBAQQgFAOgNADQgMACgIgKIhqBIQAGALgHALQgHAKgOAAIgBAAg");
	this.shape_64.setTransform(104,-115);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.9,0,1.9,0).s().p("AAKAnQgFAAgCgFQgCgHAGgEIgOgtQgIACgCgHQgCgFAEgEQAEgDAFACQAFADAAAFQAAAFgFACIAPAtQAEgBAEADQADAEgCAFQgDAFgEAAIgBAAg");
	this.shape_65.setTransform(-121.8,75.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#34FFFD","#267AB3"],[0,1],-0.8,0,0.9,0).s().p("AgFAoQgEgFACgFQADgEAEAAIAAgzQgEAAgCgFQgCgFAEgEQAEgEAEACQAFADAAAFQAAAJgIgBIgBAzQAIABAAAHQAAAFgFADIgDAAQgCAAgDgCg");
	this.shape_66.setTransform(-61.6,-91.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.7,0,6.7,0).s().p("AAqAeQgGgGADgIIhOgeQgEAIgIAAQgJAAgFgIQgDgLAHgGQAGgFAJADQAFACACAFQADAFgCAFIBOAeQACgFAFgCQAGgCAFACQAIADABAJQAAAKgJAFIgFABQgGAAgFgFg");
	this.shape_67.setTransform(169.9,148.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AgYA2QgIgBgDgIQgBgJAGgEQAFgEAHADIAjg+QgGgEABgHQABgHAIgDQAJgBAEAGQAEAGgEAHQgCAEgFABQgEACgEgCIgjA9QAIAHgFAJQgDAGgHAAIgBAAg");
	this.shape_68.setTransform(-149.2,169.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.1,0,9.1,0).s().p("ABBARQgKgEgBgLIhsgCQgBALgKAEQgKAEgKgIQgIgLAFgIQAFgKAMAAQAGAAAGAFQAFAFAAAHIBsABQABgGAFgFQAFgEAHAAQAMAAAFAKQAFAJgJAKQgGAFgHAAQgDAAgEgCg");
	this.shape_69.setTransform(138.7,-121.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AAaATQgDgEABgFIgwgSQgCAFgFAAQgGAAgDgFQgCgHAFgEQAEgDAFACQAHADgCAIIAwASQABgDAEgBQADgCADACQAFACAAAFQABAGgGADIgDABQgEAAgDgDg");
	this.shape_70.setTransform(-121.5,35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.2,0,7.2,0).s().p("AAuB3QgRAAgHgOQgEgJADgKQADgJAIgGIhDiLQgKADgJgDQgJgEgFgJQgHgPAKgMQAKgOATAEQARAIAAARQABAPgNAIIBECLQAOgFALAKQAMAKgDASQgIARgQAAIgBAAg");
	this.shape_71.setTransform(146.1,34.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13,0,13.1,0).s().p("Ah+AOQgIgOAMgPQAOgMAPAGQAOAGACAPICcgDQABgPANgGQAPgHAPALQAMAPgHANQgHAPgQAAQgKAAgIgGQgHgHgBgKIicADQgBAKgHAHQgIAHgKABQgQAAgHgOg");
	this.shape_72.setTransform(138,5.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.7,0,2.8,0).s().p("AgNB7QgOgHABgQQAAgJAHgHQAGgHAKgBIADiXQgJgBgGgHQgHgIABgJQAAgQAOgGQANgHAPAMQAKAOgGAOQgHANgOABIgECXQAOACAGAOQAGAOgLAOQgJAGgHAAQgGAAgGgDg");
	this.shape_73.setTransform(154.8,110.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.5,0,7.6,0).s().p("AA1AQQgIgEAAgJIhZgDQgBAIgIADQgJADgIgHQgHgHAFgIQAEgJAKABQAFAAAEAEQAEAEABAGIBZACQABgDAEgEQAFgEAFABQAKAAAEAJQADAHgHAIQgFADgFAAQgDAAgEgBg");
	this.shape_74.setTransform(179.7,-34.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AggAcQgBgFADgEQAHgGAFAFIAjgkQgFgGAGgGQAEgEAFACQAFACABAGQgBAGgFACQgEACgEgDIgkAkQAEAEgCAFQgCAFgGABQgHgBgCgFg");
	this.shape_75.setTransform(51.2,76.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.1,0,1.2,0).s().p("AgJAmQgDgFADgFQACgEAFAAIADgwQgCgBgCgFQgCgEAEgFQAEgDAEADQAFADgBAFQgBAHgHAAIgDAxQAFABgBAIQAAAFgEACIgCAAQgEAAgDgDg");
	this.shape_76.setTransform(-84,210);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.6,0,7.6,0).s().p("AhKAwQgCgMAIgGQAGgFAHABQAHAAAFAFIBVhBQgEgGABgHQABgHAGgEQAJgHAKAFQAKAFABAOQgEAMgLADQgKACgHgIIhVBCQAFAJgFAJQgFAKgNABQgNgEgCgLg");
	this.shape_77.setTransform(160.5,53);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.1,0).s().p("AAaATQgEgDACgFIgvgTQgDAFgFAAQgFAAgDgFQgCgHAEgEQAEgDAFACQAIADgDAIIAvASQACgDADgBQADgBADABQAFACABAGQAAAGgGADIgDAAQgEAAgCgDg");
	this.shape_78.setTransform(28,171.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.7,0).s().p("AAhCNQgSgCgGgSQgDgKAEgLQAFgKAKgFIg2inQgLACgKgFQgKgGgEgLQgFgRANgNQANgNAVAHQARAMgBASQgCARgQAHIA3CoQAQgEAMAMQAMAOgHAUQgKAQgQAAIgFgBg");
	this.shape_79.setTransform(79.8,-88.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.5,0,3.6,0).s().p("AgeA/QgGgHADgIQACgFAFgDQAFgCAFACIAfhQQgFgCgCgFQgCgGACgFQADgIAJgBQAJgBAGAKQADAKgHAGQgGAGgIgDIgeBQQAHADABAJQAAAIgJAGIgGABQgGAAgEgFg");
	this.shape_80.setTransform(102.1,213.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.5,0).s().p("AAaBSQgLAAgEgKQgDgHACgGQADgGAGgEIgohgQgGACgGgDQgHgDgCgGQgEgKAHgIQAHgJANADQALAHAAAKQgBALgJAFIAoBgQAKgDAHAHQAIAHgDAMQgHALgKAAIgBAAg");
	this.shape_81.setTransform(-0.9,-177.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.1,0,7.1,0).s().p("AhBAMQgHgIAEgGQADgIAJgBQAGAAAEAEQAEADABAEIBUgCQAAgFAEgEQAEgEAFAAQAJAAAEAIQAEAHgGAHQgIAHgIgEQgHgDgBgHIhUACQgBAJgHADQgDACgDAAQgFAAgFgEg");
	this.shape_82.setTransform(-17.3,-69.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.9,0,3,0).s().p("AAMAiQgCgCABgEQABgDACgDIgdgrQgHAEgFgGQgDgFADgFQACgFAHAAQAGACABAGQABAFgEADIAdAsQAFgDAFADQAEADAAAGQgCAGgGABIgBABQgFAAgDgFg");
	this.shape_83.setTransform(83.6,190.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.2,0,11.2,0).s().p("ABKBJQgJgFgDgKQgCgJAEgJIiBhMQgGAIgJACQgKACgIgFQgOgIABgPQACgRARgHQASgCAJANQAIAMgGANICBBMQAJgMAPACQAPACAHAQQACATgOAJQgHAFgGAAQgHAAgGgEg");
	this.shape_84.setTransform(78,123.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.2,0).s().p("AASA5QgIAAgDgHQgCgFACgEQACgFAEgCIgbhDQgFACgEgCQgEgCgCgFQgDgHAFgFQAFgGAJACQAIAEAAAIQgBAHgGADIAbBDQAHgCAFAFQAFAFgCAJQgEAIgHAAIgBgBg");
	this.shape_85.setTransform(87.8,139.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10,0,10.1,0).s().p("ABPAZQgIAAgFgGQgGgGAAgHIh4gHQgBAGgGAEQgGAFgIAAQgMgBgFgMQgFgKAKgLQAMgIALAGQAKAFABAMIB3AHQACgKALgEQAMgEALAJQAIALgGALQgGALgLAAIgCgBg");
	this.shape_86.setTransform(91.3,148.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AAYAoQgDgDAAgFQgBgEADgDIgvgvQgDADgEAAQgFAAgDgEQgFgEADgHQACgHAIgBQAIABADAGQACAHgEAFIAvAuQAFgEAGACQAGADABAIQgBAIgHADIgDAAQgFAAgDgDg");
	this.shape_87.setTransform(161.8,111.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.2,0,5.2,0).s().p("AAdBkQgNgBgFgNQgDgHADgIQADgHAHgEIgth1QgIACgHgEQgHgDgDgIQgFgMAJgKQAJgKAPAEQANAIAAANQgBANgLAFIAtB2QAMgEAJAJQAJAJgEAOQgIANgMAAIgCAAg");
	this.shape_88.setTransform(182.7,122.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.4,0).s().p("AAnB4QgRgIgBgQQgBgPANgJIhFiNQgPAGgMgKQgMgKADgTQAJgSARAAQAQAAAIAPQAEAJgDAKQgCAJgJAGIBGCNQAJgEAKAEQAJADAFAKQAHAOgKAOQgIAKgNAAIgIgBg");
	this.shape_89.setTransform(117.1,74.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.9,0,11.9,0).s().p("ABRBGQgJgEgEgKQgDgJADgJIiKhGQgFAJgKACQgJADgJgFQgPgHAAgQQABgRARgIQATgDAJAMQAKALgGAPICLBFQAIgNAPABQAQABAIARQADATgNAKQgHAFgIAAQgGAAgGgDg");
	this.shape_90.setTransform(51,164.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.4,0,6.5,0).s().p("AAuAMQgHgDAAgIIhNgBQgBAHgGADQgIADgHgGQgFgHADgGQAEgHAIAAQAFAAADAEQAEADAAAFIBNABQAAgEAEgDQAEgDAFAAQAIAAADAHQAEAGgGAHQgFAEgEAAIgGgCg");
	this.shape_91.setTransform(16.9,-36.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.4,0,6.5,0).s().p("Ag/BaQgDgQALgJQALgIAMAEIA8h7QgLgHAAgOQABgOAPgHQARgDAJALQAJAMgHANQgEAIgIADQgIADgJgDIg8B7QAIAFACAIQADAJgEAIQgHANgOAAQgPAAgIgQg");
	this.shape_92.setTransform(-192.6,15.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.2,0).s().p("AALBSQgKgDgBgKQgBgGABgGQADgFAGgDIgUhhQgHABgFgDQgFgEgCgGQgCgLAIgGQAJgHALAFQAHAIgCAKQgBAKgIADIAVBhQAJgBAGAHQAGAJgFAKQgGAIgJAAIgDAAg");
	this.shape_93.setTransform(23.3,26.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.3,0,13.4,0).s().p("Ah9AwQgMgNAIgTQAMgPAQACQAQACAGAPICegsQgDgQAMgKQANgLASAHQAQAMgDASQgDARgQAEQgKADgKgFQgJgEgEgKIieAsQACAKgFAJQgGAJgKADIgJACQgKAAgJgKg");
	this.shape_94.setTransform(-60,-30.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.7,0).s().p("AALA/QgIgCgCgHQgBgFACgFQACgEAFgCIgThKQgFABgEgDQgEgCgCgFQgCgIAGgFQAHgGAJAEQAFAFAAAIQAAAIgHADIASBJQAIgBAEAGQAFAGgDAJQgFAGgGAAIgDAAg");
	this.shape_95.setTransform(71.6,146.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.2,0).s().p("AgYBIQgIgGADgKQABgFAFgEQAGgDAFABIAWhZQgFgDgDgFQgCgFAAgGQADgJAJgCQAKgCAHAJQAFAKgGAHQgGAIgJgCIgWBaQAJADAAAJQABAJgHAHQgEACgEAAQgGAAgEgEg");
	this.shape_96.setTransform(172.5,-53);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.1,0).s().p("AANA6QgDgFACgFQABgFAFgDIgmhNQgFACgFgCQgFgCgDgFQgEgIAFgHQAGgIALACQAJAFABAJQAAAIgHAFIAmBMQAIgDAGAGQAHAFgCAKQgEAKgKAAIgBAAQgIAAgEgIg");
	this.shape_97.setTransform(99.2,150.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#34FFFD","#267AB3"],[0,1],-0.9,0,1,0).s().p("AAAApQgFgCAAgFQgBgIAGgBIgBgxQgHgBgBgHQAAgFAFgDQAEgCAEADQADAFgBAFQgCAEgEABIABAxQAFAAACAFQADAEgEAFQgDADgDAAIgBgBg");
	this.shape_98.setTransform(145.6,-23.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.2,0,14.2,0).s().p("Ah8BFQgSgMACgTQABgSASgHQALgDAKAEQAKAEAGAKICng8QgDgLAFgKQAFgLALgEQARgGAOANQAOANgHAVQgLASgSgBQgSgBgHgQIinA9QAEARgMAMQgJAIgMAAQgGAAgHgCg");
	this.shape_99.setTransform(97.3,-109.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.5,0).s().p("AAiBIQgLgEgCgKQgCgJAIgGIg3hSQgJAFgIgGQgJgFABgMQAEgMAKgCQALgBAFAJQAEAFgBAGQgBAHgFAEIA3BSQAGgDAGABQAGACAEAFQAGAJgFAJQgFAIgMAAIgBAAg");
	this.shape_100.setTransform(-172.3,130.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.8,0,2.9,0).s().p("AASAkQgGgCgBgFQgBgFAEgDIgcgoQgFADgEgDQgFgDABgGQACgGAFgBQAFgBADAFQAFAGgGAFIAcAoQAHgEAFAGQADAFgDAEQgCAFgGAAIgBAAg");
	this.shape_101.setTransform(100,125.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.4,0,1.5,0).s().p("AgIAzQgGgDABgHQABgJAKAAIADg/QgHgCABgJQAAgHAFgCQAGgDAGAGQAEAGgDAGQgDAFgHABIgDA+QAEABACAGQACAGgFAGQgDACgCAAQgDAAgDgCg");
	this.shape_102.setTransform(1.2,160.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.3,0,13.3,0).s().p("AiAAZQgJgOALgPQAOgNAPAFQAPAFADANICfgPQAAgQANgIQAOgIAQAKQAOAPgGAQQgGANgQACQgKABgJgGQgIgGgCgIIifAPQABAKgHAIQgHAIgKABIgDAAQgPAAgIgNg");
	this.shape_103.setTransform(-94.2,-18.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.3,0,2.4,0).s().p("AgOBSQgJgGABgKQABgHAFgEQAEgEAHAAIAIhlQgFgBgEgGQgEgFABgGQABgLAIgEQAKgEAJAJQAHAKgFAJQgFAJgKAAIgIBlQAIACADAJQADAKgIAJQgEAEgFAAQgEAAgFgDg");
	this.shape_104.setTransform(21.7,90.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.1,0).s().p("AgdAbQgCgFAEgEQAFgFAGAEIAggjQgGgFAGgGQADgEAFACQAGABABAGQgBAGgFACQgEACgEgDIggAkQADADgBAFQgCAFgGABQgGgBgCgFg");
	this.shape_105.setTransform(54.6,47.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.5,0).s().p("AggCIQgOgKACgRQACgLAJgHQAIgHALAAIAXipQgJgCgFgJQgHgJACgLQADgSAPgFQARgGAPAPQAKASgKAPQgJAOgQgBIgYCpQAPAEAEAQQAFARgPAOQgHAGgIAAQgJAAgIgGg");
	this.shape_106.setTransform(-84.3,178.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.2,0).s().p("AgeB7QgNgKADgPQABgKAIgGQAIgGAKAAIAWiYQgJgCgEgJQgFgIABgKQADgQANgEQAQgFANAOQAJAQgJANQgIANgPgBIgXCYQANAEAEAOQAEAPgMANQgHAFgIAAQgIAAgHgFg");
	this.shape_107.setTransform(143.6,-115.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.7,0,11.8,0).s().p("ABDBNQgIgOAHgOIiGhdQgKAMgQgDQgQgEgGgSQgBgUAQgJQAPgIAOAKQAIAGACAKQADAKgGAJICGBeQAHgIALgCQAKgBAJAGQAOAKgDARQgDARgTAGIgCAAQgSAAgIgNg");
	this.shape_108.setTransform(-4.6,-31.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("AA+BBQgIgLAGgNIh6hNQgIALgOgCQgPgCgGgQQgCgSAOgJQANgIAMAJQAIAFADAJQACAJgEAIIB6BNQAGgHAJgCQAJgCAIAFQANAJgCAPQgCAPgRAGIgDABQgPAAgHgMg");
	this.shape_109.setTransform(-43.7,171.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5,0).s().p("AgvAOQgEgFADgHQAFgDAGABQAGAAACAFIA6gLQgBgGAFgDQAFgEAHADQAGAFgCAGQgBAFgHABQgJACgCgHIg7ALQABAEgDADQgCADgEABIgCAAQgFAAgDgEg");
	this.shape_110.setTransform(-2.5,4.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.3,0,1.4,0).s().p("AAAApQgDgFABgFQACgFACgBIgFgxQgFAAgDgEQgDgFADgFQAFgFAFACQADACABAFQABAIgGABIAGAyQAIAAABAHQABAFgFADQgCACgDAAIgEgBg");
	this.shape_111.setTransform(-144.4,-108.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.4,0,6.4,0).s().p("AgzA8QgKgDgCgMQACgMAKgDQAJgDAHAGIBGhCQgGgIADgJQAEgJAMgBQAMACADAKQADAKgHAHQgFAEgGAAQgGAAgFgEIhGBCQAEAFAAAGQgBAHgFAEQgFAEgFAAIgGgBg");
	this.shape_112.setTransform(45.7,146.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.2,0).s().p("AhUAqQgJgJAEgNQAHgMAMAAQAMABAFAKIBrgpQgDgLAIgIQAIgIAOADQAMAIgBAMQgBAMgLAFQgHACgHgCQgHgDgDgGIhsAoQACAHgDAHQgEAHgHADIgHACQgHAAgGgGg");
	this.shape_113.setTransform(127.8,-55.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.1,0).s().p("AASAtQgHgDAAgGQgBgGAFgEIgegzQgFADgFgDQgFgEABgHQADgHAGgBQAHAAADAFQAEAIgHAFIAdAzQAJgDAEAHQADAGgDAFQgDAFgHAAIgBAAg");
	this.shape_114.setTransform(157.8,147.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.2,0).s().p("AgoAZQgBgGAFgEQADgCAEAAQAEABACADIAugiQgEgIAHgFQAFgEAFADQAGADAAAIQgCAGgGACQgGABgEgEIguAhQADAFgDAFQgDAFgHAAQgHgCgBgGg");
	this.shape_115.setTransform(121.3,36.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.9,0,2,0).s().p("AABBEQgGgDgBgIQgBgFADgFQADgEAEgBIgHhSQgGAAgEgEQgEgDAAgGQgBgIAHgFQAIgFAHAGQAHAHgDAIQgDAIgGACIAHBSQAJAAAEAHQAEAHgFAIQgGAFgFAAIgFgBg");
	this.shape_116.setTransform(188,47);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AAMBjQgMgJACgNQACgMALgEIghh3QgMACgHgJQgJgKAGgOQAJgNANADQANACADANQACAHgDAIQgEAHgHADIAhB3QAIgCAGAFQAHAEACAHQAEANgKAJQgGAFgHAAQgFAAgGgCg");
	this.shape_117.setTransform(-171.9,139.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.2,0).s().p("AAVAqQgHgHAHgIIgrgzQgJAGgHgIQgEgFACgHQADgHAJAAQAIACACAGQACAHgFAFIAsAzQAFgEAHADQAGADABAIQgCAIgHACIgEAAQgFAAgDgEg");
	this.shape_118.setTransform(109.9,82.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.9,0,6,0).s().p("AgzAuQgIgEABgLQADgKAIgBQAIgCAFAGIBDgxQgEgGAEgIQAEgHAKAAQAKADACAJQACAJgHAFQgKAHgJgJIhDAwQADAFgBAFQgBAFgFAEQgEACgEAAQgDAAgEgBg");
	this.shape_119.setTransform(98.6,-180.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.2,0,1.2,0).s().p("AgBAsQgFgFACgGQACgFADgBIgCg1QgGAAgCgFQgDgFADgFQAFgFAEACQAFACABAGQABAIgHACIADA1QAIAAABAJQAAAFgFADIgFACQgCAAgBgCg");
	this.shape_120.setTransform(19.6,83.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.3,0,2.4,0).s().p("AgVAhQgDgEADgEQADgHAHADIAWgqQgHgEAEgGQACgFAFAAQAGAAACAGQABAGgEADQgEADgEgCIgVAqQAEADgBAEQAAAFgFADIgCAAQgFAAgDgEg");
	this.shape_121.setTransform(186.1,64.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.2,0,10.2,0).s().p("AAyBVQgGgOALgMIhwhyQgMAKgOgFQgPgGgDgTQADgUARgFQAPgGAMAMQAHAIAAAKQABAKgHAIIBvBxQAIgGAKAAQALABAHAHQALAMgFAQQgGAQgUACQgSgDgGgPg");
	this.shape_122.setTransform(67,-184.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.8,0).s().p("AgtBSQgEgOAIgIQAJgIALADIAohuQgKgFAAgLQgBgMAMgIQAOgEAJAKQAIAJgFALQgCAHgHADQgHAEgHgCIgpBtQAHADADAHQACAHgCAHQgFAMgMABIgDAAQgLAAgGgLg");
	this.shape_123.setTransform(71.2,-170.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.5,0).s().p("AAVAnQgCgGAFgGIgwg1QgFAFgHgDQgHgDgBgJQACgJAIgCQAHgCAFAGQADADAAAFQAAAEgDAEIAwA1QAEgDAEABQAFAAADADQAFAGgDAHQgDAIgJAAQgIgCgDgHg");
	this.shape_124.setTransform(101.5,-7.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.9,0,6,0).s().p("AAkAdQgFgGADgHIhFgdQgDAHgIAAQgHAAgFgIQgCgKAGgFQAGgFAHADQAFACACAFQACAEgCAFIBFAdQAGgKAKAFQAHADABAIQAAAIgIAEIgFABQgFAAgFgEg");
	this.shape_125.setTransform(151.9,88.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.3,0).s().p("AAsAeQgKgEACgMIhIgZQgFALgLgEQgIgCgBgJQgBgIAIgFQAJgDAGAFQAGAGgCAHIBIAZQADgHAIgBQAIAAAFAIQADAJgGAGQgEAEgFAAIgFgBg");
	this.shape_126.setTransform(110.9,71);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AATAfQgGgHAFgFIgkgkQgGAFgGgFQgEgEACgFQABgGAHAAQAGAAACAGQACAEgDAEIAkAkQAEgEAFACQAFACABAGQgBAHgFACIgDAAQgEAAgCgCg");
	this.shape_127.setTransform(25.6,36.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.1,0,8.2,0).s().p("AAfBqQgFgJACgKQACgKAJgGIhRiKQgJAEgKgDQgJgDgGgJQgIgOAJgOQAJgOAUACQASAHACARQABAPgMAJIBQCKQAOgHANAJQANAKgCATQgHASgSACIgDAAQgOAAgIgNg");
	this.shape_128.setTransform(-69.1,48.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.4,0,9.5,0).s().p("AArBsQgGgJABgLQABgKAIgHIhiiJQgJAGgLgCQgKgDgHgIQgKgOAIgQQAJgQAVAAQATAGAEARQADAQgMALIBiCIQAOgIAOAIQAPAJAAAUQgGAUgSADIgFABQgOAAgJgMg");
	this.shape_129.setTransform(186.9,-9.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.7,0).s().p("AAUAsQgCgHAGgGIgwg8QgHAEgHgEQgHgDAAgKQACgJAIgCQAJgCAFAGQAHAKgJAIIAxA9QAEgDAFABQAFABADAEQAFAGgDAIQgEAHgJABQgKgDgCgIg");
	this.shape_130.setTransform(-71,103.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.3,0,9.4,0).s().p("ABGAiQgHgCgEgGQgEgGABgHIhvgWQgCAHgHACQgGADgHgBQgMgCgDgKQgDgMALgJQAMgGAKAHQAJAHgCALIBvAWQAEgKALgBQALgDAJAJQAGAMgIAKQgFAIgIAAIgGgBg");
	this.shape_131.setTransform(28.4,84.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.3,0).s().p("AgtBTQgMgCgEgNQgBgOAKgGQAJgGAKAFIBAhfQgIgHABgLQACgMAOgEQAOgBAGALQAFAKgGAKQgEAHgHABQgIACgGgEIhABfQAGAFABAHQABAHgEAHQgGAIgJAAIgEAAg");
	this.shape_132.setTransform(3.4,200.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.2,0,2.3,0).s().p("AAKAwQgGgBgCgGQgCgJAIgDIgRg4QgJACgDgJQgCgGAFgEQAFgFAHADQAGAEgBAGQgBAGgFACIARA4QAFgBAEAEQAEAFgCAGQgDAGgGAAIgCAAg");
	this.shape_133.setTransform(-7.1,122.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AAJAgQgEgHAGgEIgWgpQgGAEgFgHQgCgEADgEQADgFAGABQAFACABAGQAAAEgEADIAXAoQAEgBAEACQADADAAAGQgCAFgGABIgBAAQgEAAgCgEg");
	this.shape_134.setTransform(132.2,-113.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("AA9ApQgHgCgDgHQgDgGACgGIhkgkQgDAHgHACQgGADgGgDQgLgDgBgLQgBgMALgHQAMgEAIAIQAIAHgDAKIBkAjQAFgJAKgBQALAAAHAKQAEANgJAIQgFAFgHAAIgGgBg");
	this.shape_135.setTransform(-39.2,191);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.2,0,2.2,0).s().p("AAJArQgGgDAAgGQAAgFAGgDIgSgzQgFABgEgDQgEgEACgHQAEgGAGABQAFABACAFQADAHgHAFIARAzQADgBAEABQADACABADQACAGgEAEQgDADgDAAIgEgBg");
	this.shape_136.setTransform(50,15.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.3,0,11.3,0).s().p("AA8BTQgHgOAJgNIh+hsQgLAMgQgFQgQgFgEgTQABgVAQgHQAQgHANAMQAIAGACALQABALgGAIIB+BsQAHgIALAAQAKgBAJAHQANAMgEAQQgFASgUAEQgUgBgHgQg");
	this.shape_137.setTransform(-7,129.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.9,0).s().p("AgjA7QgJgCgDgKQAAgKAIgEQAHgEAHAEIAxhCQgGgGACgIQACgIAKgDQAKAAAEAIQAEAIgFAHQgDAEgFABQgGABgEgCIgyBCQAEADABAGQAAAFgDAEQgFAGgGAAIgDAAg");
	this.shape_138.setTransform(173.6,57.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.9,0,10.9,0).s().p("AhXBTQgSgGgCgQQgDgPANgJQAIgGAKABQAJACAHAHIB8hWQgFgIACgKQACgJAIgGQANgJAOAIQAOAIAAATQgGARgPADQgPACgJgLIh8BWQAHANgIANQgIAMgQAAIgCAAg");
	this.shape_139.setTransform(-42.9,-38);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6.1,0).s().p("Ag5AQQgFgGAFgJQAGgEAHACQAHABACAFIBHgLQgBgHAGgEQAGgFAIAEQAHAGgDAIQgCAFgHACQgFABgEgDQgEgBgBgEIhHALQABAFgDAEQgDAEgFAAIgCABQgGAAgEgFg");
	this.shape_140.setTransform(-27.6,214.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.7,0,8.8,0).s().p("Ag5CIQgTgBgKgVQgDgVAPgLQAOgLAQAHIBVieQgPgJABgSQACgSATgJQAWgDAMAPQAKAQgJAQQgFAKgLAEQgLADgKgEIhVCeQAJAGADALQADAMgFAKQgJAQgSAAIgBAAg");
	this.shape_141.setTransform(82.1,-125.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AAZBDQgKgFgBgJQgBgIAIgFIgrhNQgIADgHgFQgHgFABgLQAFgKAJgBQAKAAAEAIQADAFgBAGQgCAFgEADIAqBOQAFgDAGACQAFACADAFQAEAIgFAIQgEAGgIAAIgEAAg");
	this.shape_142.setTransform(-61,-71.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AAUAbQgDgCAAgDQgBgDACgDIgkgeQgCACgDAAQgEAAgCgCQgEgDABgFQACgFAGgBQAGAAACAFQACAEgDAEIAkAeQADgDAFABQAFABABAGQAAAGgFACIgDABQgDAAgCgCg");
	this.shape_143.setTransform(-190.4,37.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.3,0,2.3,0).s().p("AgEBiQgLgFAAgNQgBgIAFgFQAFgGAGgBIgDh3QgIAAgFgFQgFgGgBgIQAAgMALgGQALgGAKAIQAJALgEAMQgFALgKABIAEB3QALABAFAKQAGALgIALQgIAHgHAAQgDAAgEgCg");
	this.shape_144.setTransform(-193.8,65.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.3,0).s().p("AAwAPQgKAAgBgMIhJgDQgBADgEADQgEADgEgBQgIAAgDgHQgDgGAGgHQAHgFAHAEQAHADAAAIIBJADQABgFAHgCQAHgDAHAGQAFAFgEAHQgDAHgHAAIgCgBg");
	this.shape_145.setTransform(-15.3,124.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.4,0,8.5,0).s().p("AA0A+QgGgEgBgIQgCgHAEgHIhghEQgFAFgHABQgIABgGgEQgKgHACgMQACgNAOgEQAPgBAGALQAFAKgFAKIBfBEQAIgJALADQAMACAEAOQABAPgMAGQgEACgFAAQgGAAgGgEg");
	this.shape_146.setTransform(39.8,153.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.3,0,7.3,0).s().p("Ag/AlQgJgGAAgKQABgKAJgDQAFgCAGACQAGACACAFIBVggQgBgGACgFQADgGAFgCQAJgDAHAGQAIAHgEALQgFAJgKAAQgJgBgEgIIhVAhQADAIgGAHQgFAFgGAAIgHgBg");
	this.shape_147.setTransform(49,-26.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AgmAGQgDgEADgEQAFgDAFABQAEACABADIAvgCQAAgFAFgCQAEgCAFADQAEAEgCADQgCAFgFAAQgHAAgCgFIgvACQAAAHgIABIgBAAQgEAAgCgEg");
	this.shape_148.setTransform(95.3,182.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.9,0,2.9,0).s().p("AgVAkQgFgBgCgGQAAgGAFgDQAEgCAEACIAdgoQgEgDABgFQABgFAGgCQAHAAACAFQADAEgDAFQgFAGgHgEIgcAoQAFAFgEAHQgDADgEAAIgCAAg");
	this.shape_149.setTransform(-57.9,-190.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.7,0,10.8,0).s().p("AhiAbQgLgMAEgNQAFgLANgBQAIgBAHAFQAHAFABAGICAgNQAAgIAFgGQAGgHAIgBQANgBAHALQAIAMgIAMQgLAKgNgEQgMgDgDgLIh/ANQAAAMgLAHQgFADgGAAQgGAAgHgEg");
	this.shape_150.setTransform(-118.8,-35.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AghAWQgEgDABgGQACgGAGAAQAEAAADAEIArgXQgCgEADgEQADgEAGABQAGACAAAGQAAAFgFACQgCACgEgBQgDgBgBgCIgrAWQABADgBADQgBADgDACIgEABQgDAAgCgCg");
	this.shape_151.setTransform(-154.6,19.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5.1,0).s().p("AAmASQgJgCABgJIg7gLQgDAHgJgCQgGgBgCgEQgBgHAFgFQAHgDAFAEQAFADgBAGIA7ALQACgFAGAAQAGgBAFADQADAHgEAFQgDAEgEAAIgDAAg");
	this.shape_152.setTransform(162.3,-34.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AAPAsQgCgEAAgEQABgEADgDIgjg4QgEADgEgBQgEgBgDgEQgEgGAEgGQAEgHAIABQAIADABAHQABAGgFAEIAjA4QAGgDAGAEQAGAEgBAIQgDAIgHAAIgCAAQgGAAgDgFg");
	this.shape_153.setTransform(-78.4,167.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.4,0,1.4,0).s().p("AgCA0QgGgGADgHQACgGAEgBIgDhAQgGAAgDgFQgEgGAFgHQAGgFAEACQAGADABAHQABAEgDADQgDAEgCAAIADBAQAEAAADADQADADABAEQAAAHgFADQgDACgDAAQgDAAgCgCg");
	this.shape_154.setTransform(175.3,106.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.1,0,1.2,0).s().p("AgGArQgFgDABgGQAAgDACgCQADgDADAAIADgzQgHgCABgIQABgFAEgCQAEgCAFAEQADAGgCAEQgDAFgFAAIgCA0QADABACAEQACAGgFAEQgCACgBAAIgFgBg");
	this.shape_155.setTransform(46.2,-94.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AgeB5QgKgQAIgOQAIgNAPAAIAOicQgNgDgEgOQgFgPAMgOQAPgKAOAJQAOAJgCAQQAAAKgIAHQgIAGgKAAIgOCcQAIACAGAIQAGAIgBAKQgCAQgNAGQgFABgEAAQgLAAgKgJg");
	this.shape_156.setTransform(64.4,15.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.8,0,13.9,0).s().p("AiFAXQgJgPALgQQAOgNAQAGQAQAFADAOIClgMQAAgQAOgIQAPgIARAKQAOAQgHAPQgGAQgRABQgLABgIgHQgIgGgCgJIimAMQAAALgHAIQgHAIgLAAIgDAAQgPAAgIgNg");
	this.shape_157.setTransform(18.4,-93.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.9,0,8,0).s().p("AhHArQgJgHADgMQAFgLALgBQAKAAAFAJIBcgsQgEgJAHgIQAHgIAMADQALAGAAALQAAAKgKAFQgGADgGgCQgGgCgEgGIhcAsQADAGgDAGQgCAGgGADQgFACgDAAQgGAAgEgEg");
	this.shape_158.setTransform(99,10.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.1,0,11.1,0).s().p("AA+BiQgIgIAAgKQgBgLAGgJIh6hyQgIAGgLAAQgLAAgIgHQgMgMAFgRQAFgRAVgEQAUACAGAQQAHAPgKANIB6BzQANgLAPAGQAQAGADATQgCAVgRAHQgFACgFAAQgKAAgJgIg");
	this.shape_159.setTransform(151.1,-6.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.6,0,8.6,0).s().p("AhSAMQgGgJAHgJQAKgIAKAEQAJADACAIIBmgEQAAgKAJgFQAJgFAKAHQAJAJgEAJQgFAKgKAAQgHABgFgEQgFgEgBgFIhmAEQgBAHgEAFQgFAEgGABIgCAAQgJAAgFgJg");
	this.shape_160.setTransform(167.1,116.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AATAXQgCgEACgEIgmgcQgDAEgFgBQgEgCgCgFQAAgGAFgDQAEgCAEADQAGAEgEAHIAmAcQAFgFAGAEQAEACgBAGQgBAFgGABQgGAAgCgEg");
	this.shape_161.setTransform(-131.9,110.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.5,0).s().p("AhCAvQgJgGACgNQAEgLALgBQAJgBAGAIIBWgwQgFgJAGgIQAGgIAMACQALAEABALQABALgJAFQgGADgGgBQgGgCgEgFIhWAwQADAGgCAGQgCAGgFADQgEADgFAAQgEAAgFgDg");
	this.shape_162.setTransform(130.9,70.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AAeASQgHgDABgHIgwgNQgDAFgIAAQgFgCAAgFQgBgFAFgEQAGgCAEADQADADgBAFIAwANQACgEAFgBQAFgBAEAFQACAGgDAEQgDADgEAAIgCAAg");
	this.shape_163.setTransform(-76.7,213.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.8,0,1.8,0).s().p("AgBBJQgIgDgBgKQAAgGADgEQAEgEAEgBIgEhYQgFAAgFgEQgEgEAAgGQgBgKAJgEQAIgFAHAHQAHAHgDAJQgDAJgHABIADBYQAJAAAEAIQAEAIgGAIQgFAFgGAAIgEgBg");
	this.shape_164.setTransform(15.7,-75);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AAfAQQgHgBABgIIgxgLQgDAFgIgBQgFAAgBgFQgBgGAFgEQAGgCAEADQAEADgBAFIAxALQACgEAFgBQAFAAAEADQADAGgEAFQgDADgEAAIgCgBg");
	this.shape_165.setTransform(-103.9,59.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.1,0,14.2,0).s().p("ABcA7QgMgLAEgRIiog4QgHAQgRACQgSABgMgRQgHgVAOgOQAMgNASAGQALAEAFAKQAFAKgCALICnA4QAFgLALgEQAKgFALAEQARAGACASQADATgTAMQgHADgGAAQgLAAgJgJg");
	this.shape_166.setTransform(174.6,75.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AgOBdQgLgGABgMQABgHAFgFQAGgFAHAAIAHhzQgFgBgFgGQgFgFABgIQABgMALgEQAKgFAKAKQAIALgGALQgFAJgLABIgHByQAJACAEALQAEALgJAKQgHAEgEAAQgFAAgFgDg");
	this.shape_167.setTransform(141.1,150);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AgBCCQgQgHgBgQQAAgKAGgIQAGgIAIgBIgJieQgKAAgHgHQgHgHgBgKQgBgRAOgIQAPgIAOAKQANAPgGAPQgFAOgOADIAJCdQAQABAHANQAHAOgKAQQgJAJgLAAQgFAAgDgCg");
	this.shape_168.setTransform(-137.8,-35.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.3,0).s().p("AgnA2QgFgHAEgIQADgEAFgBQAFgBAFACIAqhGQgEgEgBgEQgBgGADgEQAEgIAJABQAJABAEAJQAAALgGAEQgHAFgHgEIgqBGQAGAFgBAIQgBAJgJADIgDAAQgIAAgEgHg");
	this.shape_169.setTransform(-4.3,-42.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.3,0,7.3,0).s().p("AAlA6QgEgKAGgJIhQhLQgIAHgKgEQgLgDgCgNQABgOAMgFQAKgEAJAIQAFAFAAAIQABAHgEAFIBQBMQAFgFAHAAQAIAAAFAFQAIAIgDALQgEAMgOACQgNgCgEgKg");
	this.shape_170.setTransform(157.4,-19.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.5,0,3.6,0).s().p("AASAjQgGgFAGgIIglgqQgHAFgGgHQgEgEADgGQACgFAHgBQAHACACAFQACAGgEAEIAkAqQAFgDAFACQAGADAAAHQgBAHgGACIgCAAQgFAAgDgEg");
	this.shape_171.setTransform(114.9,-55.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.5,0,6.5,0).s().p("AAaB9QgQgKABgQQABgQAOgHIg4iVQgPAEgLgLQgMgMAFgSQALgRARABQARACAGAPQAEAKgEAKQgEAJgKAFIA5CVQAKgCAJAEQAJAFAEAKQAGAPgMAMQgIAJgLAAQgGAAgGgCg");
	this.shape_172.setTransform(102.8,-17.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.3,0,2.3,0).s().p("AgHBtQgNgGAAgOQAAgJAGgGQAGgGAIgBIgBiFQgJgBgGgGQgGgGAAgJQAAgOANgGQAKgGAOAKQAJAMgFANQgFAMgNABIABCFQANABAGALQAFANgJAMQgJAHgIAAQgDAAgEgCg");
	this.shape_173.setTransform(128.9,-47.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("Ag+BcQgDgQALgKQAKgIANAEIA7h9QgMgHABgNQAAgPAOgHQARgEAKAMQAJALgGANQgEAJgJADQgIADgIgDIg7B9QAHAFADAIQADAJgEAIQgHANgOAAQgPAAgIgPg");
	this.shape_174.setTransform(-180.5,86.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.5,0,10.6,0).s().p("ABJA5QgIgEgDgIQgEgIADgIIh7g2QgEAIgJADQgIACgIgDQgNgGAAgOQgBgOAPgIQAQgEAJAKQAJAKgFAMIB8A2QAGgLAOAAQANgBAIAPQAEAQgLAJQgHAGgHAAQgFAAgFgCg");
	this.shape_175.setTransform(28.9,-46.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AATBKQgEgGACgHQACgHAGgEIgzhhQgHACgGgCQgHgCgEgHQgFgKAHgJQAHgKANACQAMAGABALQABALgJAGIAzBiQAKgFAIAHQAJAHgCANQgFANgNAAIgBAAQgLAAgEgKg");
	this.shape_176.setTransform(158.3,78.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AAhAMQgIgBAAgIIgygDQgBAGgIgBQgGgBgCgEQgCgEAFgFQAFgDAFADQAEACAAAFIAzAEQABgDAEgCQAGgCAEAFQAEADgDAFQgDAEgEAAIgCAAg");
	this.shape_177.setTransform(-128,163.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.3,0).s().p("AgmAVQgFgEACgHQADgFAGAAQAFAAADAEIAxgUQgCgFAEgEQAEgEAGACQAGADAAAGQgBAGgFACQgIADgEgHIgxAUQADAIgIADIgEABQgDAAgCgCg");
	this.shape_178.setTransform(138.5,-132.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.7,0,9.8,0).s().p("AhfBEQgEgPAMgKQAHgGAJABQAJAAAHAHIBshdQgFgHABgJQABgJAHgGQAMgKANAGQAPAGAAASQgDARgOAEQgOAEgKgKIhsBcQAIALgGANQgHANgRABQgRgDgEgPg");
	this.shape_179.setTransform(94.5,-5.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.3,0,11.3,0).s().p("ABRA0QgIgDgFgIQgEgIACgIIiFgsQgDAIgJAEQgIADgJgCQgOgFgBgOQgCgQAOgJQAQgGALAKQAKAJgDAOICFArQAFgMAOgBQAOgCAKAOQAFARgLAKQgHAHgJAAIgIgBg");
	this.shape_180.setTransform(101.4,3.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.7,0,8.8,0).s().p("AA4AkQgIgHADgKIhngiQgEAKgLABQgLABgHgLQgEgNAIgIQAIgIALAEQAGACAEAGQADAGgBAHIBmAiQADgHAGgDQAHgCAGACQALADACAMQABALgLAIIgIABQgHAAgGgFg");
	this.shape_181.setTransform(165.9,154.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.6,0,12.6,0).s().p("ABYAeQgMgHgBgPIiWgKQgDAMgNAFQgPAGgOgMQgKgOAJgOQAIgOAPABQAKABAHAHQAGAIAAAJICXALQABgIAIgGQAIgGAJABQAQABAGAOQAGAOgNAOQgIAFgJAAQgGAAgGgDg");
	this.shape_182.setTransform(39.1,-49.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AAWAaQgCgFACgFIgtgeQgDAFgFgBQgGgBgCgHQgBgHAGgDQAFgCAFADQADACAAADQABAEgCADIAtAeQAGgHAHAFQAEADAAAGQgBAGgHACIgBAAQgGAAgDgEg");
	this.shape_183.setTransform(-134.5,-96.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.8,0,6.9,0).s().p("AhAASQgFgHAEgKQAHgFAIACQAIACACAGIBRgOQgBgIAGgEQAHgFAJAEQAIAHgDAJQgCAGgIACQgGABgEgDQgFgBgBgFIhQANQAAAGgDAEQgDAEgFABIgDABQgHAAgEgGg");
	this.shape_184.setTransform(154.5,-77.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.9,0,5,0).s().p("AAeBWQgMAAgFgKQgDgHADgHQACgHAGgDIgthlQgHACgGgDQgHgDgDgGQgFgLAIgJQAIgJANADQAMAHAAALQAAALgKAFIAtBlQALgDAIAHQAIAHgCANQgHAMgLAAIgBAAg");
	this.shape_185.setTransform(85.6,103.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.9,0,6,0).s().p("Ag1APQgHgGADgHQACgFAIgBQAEgBAEADQAEACABADIBFgHQAAgFADgDQADgDAEgBQAIgBAEAGQAEAHgEAFQgGAGgHgCQgHgCgCgFIhFAHQAAAHgGAEQgDACgDAAQgEAAgDgDg");
	this.shape_186.setTransform(-27.8,-18.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.6,0,8.7,0).s().p("AA+AnQgGgCgDgGQgEgGACgHIhmggQgCAGgHADQgGADgHgCQgKgEgCgLQgBgLALgIQAMgEAIAIQAIAGgDALIBmAgQAEgKAKgBQALgBAIALQAEAMgIAJQgGAFgHAAIgGgBg");
	this.shape_187.setTransform(125.5,18.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.1,0,9.2,0).s().p("ABHAXQgHAAgFgGQgEgFAAgHIhtgGQgBAFgFAFQgGAEgHgBQgLgBgFgKQgEgJAJgKQALgHAKAFQAJAFAAALIBtAGQACgJAKgDQAKgEAKAJQAHAJgGAKQgFAJgKAAIgCAAg");
	this.shape_188.setTransform(-130.9,129.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.3,0).s().p("AgeA7QgDgJAFgHQAGgGAIACIAbhOQgIgDAAgIQgBgJAIgGQAKgDAHAHQAFAGgCAIQgCAFgFADQgFACgFgBIgaBOQAEADADAFQABAFgBAFQgDAIgJABIgCAAQgHAAgFgIg");
	this.shape_189.setTransform(8.8,51.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.3,0,12.3,0).s().p("ABOA5QgLgLAFgPIiRg4QgHANgPABQgQABgKgQQgFgTANgLQAMgLAPAGQAJAEAEAJQAFAJgDAJICRA5QAEgJAKgEQAJgDAJADQAPAGACAQQABARgRAKIgJABQgMAAgIgHg");
	this.shape_190.setTransform(-97.6,-52.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AAPAqQgFAAgDgFQgDgHAHgFIgWgwQgIADgEgHQgCgFAEgFQADgFAHACQAGADAAAFQAAAGgFACIAWAwQAFgBAEADQAFAEgCAGQgCAGgGAAIgBAAg");
	this.shape_191.setTransform(-21.5,83.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12,0,12.1,0).s().p("AhiBUQgTgHgCgSQgBgRAOgIQAJgGALACQAKACAGAIICKhUQgEgJADgKQACgLAJgFQAPgJAOAJQAPAKgCAUQgHASgRACQgQACgJgNIiKBVQAHAOgJANQgJAMgPAAIgFAAg");
	this.shape_192.setTransform(25.2,70.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.2,0,7.2,0).s().p("AhFALQgFgIAGgHQAIgHAJADQAIADABAGIBVgEQAAgIAIgEQAIgEAIAFQAHAIgDAHQgEAIgJABQgFAAgEgDQgFgEgBgDIhVAEQAAAGgEAEQgEAEgFAAIgBAAQgIAAgFgHg");
	this.shape_193.setTransform(-1.7,170.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.6,0,5.7,0).s().p("AgrCSQgQgMAEgSQACgMAKgHQAKgHAMABIAli3QgMgDgEgLQgGgKACgMQAEgTARgEQAUgFAPARQAJAUgLAQQgLAOgSgCIgkC3QAPAGAEARQAEATgPAPQgJAEgIAAQgKAAgJgHg");
	this.shape_194.setTransform(145.8,67.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.7,0,14.7,0).s().p("AiDA7QgSgNAEgUQADgSASgFQALgDALAFQAKAFAEALICvgvQgDgLAHgKQAGgKALgDQASgFANAOQANAPgJAVQgNAPgSgBQgRgDgHgQIiuAvQADARgNALQgJAHgLAAQgHAAgIgDg");
	this.shape_195.setTransform(-10.9,-34.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.8,0).s().p("AAaAfQgDgFADgGIg1gmQgEAFgGgBQgHgBgCgIQgBgIAHgEQAGgDAGAEQADADABAEQABAEgCAEIA1AmQACgEAFAAQAEgBAEADQAFAEgBAHQgBAHgIACQgIAAgEgGg");
	this.shape_196.setTransform(47.1,-169.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.3,0).s().p("AgfAcQgCgFAEgEQAGgGAGAFIAigkQgFgFAGgHQADgEAGACQAFACABAGQgBAGgFACQgEACgEgDIgjAkQADAEgCAFQgCAFgGABQgGgBgCgFg");
	this.shape_197.setTransform(-68.1,206.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.7,0,7.7,0).s().p("AhDAjQgKgHABgLQACgKAJgDQAGgCAGADQAGADACAFIBagcQgBgGADgGQADgFAGgCQAJgDAHAHQAIAHgEAMQgHAJgJgBQgKgBgEgIIhaAcQACAJgHAHQgFAEgGAAIgHgBg");
	this.shape_198.setTransform(24.4,141.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AgXAlQgCgGAFgEQAEgEAFACIAVgyQgEgDAAgFQAAgFAFgEQAHgBAEAEQAEAFgDAFQgDAIgIgDIgWAyQAIAEgEAIQgCAFgGAAQgGAAgDgGg");
	this.shape_199.setTransform(-71.4,219.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.7,0,10.7,0).s().p("AhaBZQgPgHgBgUQAFgSAPgEQAPgDAKAKIB4hhQgIgNAHgNQAHgOASgBQATAFAEAQQADAQgMAKQgIAGgKAAQgKgBgHgHIh4BhQAGAIgBAKQgCAKgIAGQgHAHgIAAQgGAAgGgDg");
	this.shape_200.setTransform(101.3,205.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.2,0,7.2,0).s().p("AhGA8QgEgLAJgJQAFgFAHAAQAHAAAGAEIBOhQQgFgFAAgIQABgHAFgFQAIgIALADQAMAEACAOQgCANgLAFQgKAEgJgHIhOBQQAHAIgDAKQgEALgOACQgOgCgEgLg");
	this.shape_201.setTransform(-59.7,53.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.4,0).s().p("AADB8QgMgNAEgPQAEgPAMgEIgZiYQgPABgJgMQgJgNAJgRQANgOAQAFQANAEADAQQACAKgGAIQgDAJgKACIAaCYQAKAAAIAGQAIAGABAJQADAQgNAKQgHAFgIAAQgHAAgIgEg");
	this.shape_202.setTransform(108.6,59.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.9,0,12,0).s().p("ABNA1QgLgKAEgPIiMgzQgHANgOABQgQABgJgPQgGgSAMgLQAMgLAOAGQAJADAFAJQAEAIgDAJICNA0QAEgJAJgDQAJgEAJADQAPAGABAPQACARgQAJIgLACQgKAAgHgHg");
	this.shape_203.setTransform(-118.8,123.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.2,0,1.2,0).s().p("AABAoQgDgCgBgFQgBgHAGgCIgEgvQgHAAgBgIQgBgFAEgDQAFgCADADQAEAEgBAFQgCAEgCABIADAwQAFAAADAEQACAFgDAFQgDADgDAAIgDgBg");
	this.shape_204.setTransform(-152.7,108.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2.1,0).s().p("AgSAoQgCgGADgEQAEgFAFABIAPg0QgFgCgBgGQgBgFAGgEQAGgDAFAFQAEAEgCAFQgCAIgIgCIgPA1QAGADgBAIQgBAGgGABIgCAAQgFAAgDgFg");
	this.shape_205.setTransform(55.3,153.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.8,0,2.9,0).s().p("AgMB1QgLgNAGgOQAFgOAMgCIgEiTQgOgBgHgMQgGgOAJgPQAOgMANAHQAOAGABAPQAAAKgGAHQgGAIgIABIAFCTQAKABAGAGQAHAHAAAJQABAQgNAHQgGADgGAAQgHAAgJgGg");
	this.shape_206.setTransform(125.7,-143.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.4,0).s().p("AA4AYQgGgBgDgEQgEgFABgGIhYgNQgBAFgFACQgFADgFgBQgJgBgDgHQgDgKAIgHQAKgFAHAFQAIAFgBAJIBXANQACgHAJgCQAJgCAHAFQAFAKgGAIQgEAGgHAAIgDAAg");
	this.shape_207.setTransform(36.2,227.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5,0).s().p("AgsCFQgJgTAKgPQAJgOARACIAeiuQgPgFgEgQQgEgSANgOQATgKAQALQAOALgDASQgCALgJAHQgJAHgLgBIgdCuQALADAEAJQAGAKgCALQgDASgQAFIgIACQgOAAgLgNg");
	this.shape_208.setTransform(-157.9,90.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.2,0).s().p("AAQAgQgFgFAFgHIgggnQgHAFgFgGQgEgEACgFQADgFAGgBQAHACABAFQABAFgDADIAgAnQAFgDAEADQAFACABAGQgCAHgFABIgDABQgEAAgCgEg");
	this.shape_209.setTransform(58.4,162.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.4,0).s().p("AgUAnQgEgFADgFQADgHAIACIAUgwQgHgEADgHQADgFAFgBQAGAAADAGQACAGgEAEQgEADgFgBIgVAwQAFADAAAFQAAAGgGADIgDAAQgEAAgDgDg");
	this.shape_210.setTransform(-37.2,215.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.7,0,8.7,0).s().p("AhGBWQgOgFgCgQQACgQANgFQAMgFALAIIBehgQgIgKAFgMQAFgNAQgCQAQACAFAOQAFANgKAKQgGAGgJABQgJAAgGgGIhfBgQAFAHAAAIQAAAJgGAGQgHAHgJAAIgIgBg");
	this.shape_211.setTransform(17.7,-192.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AALArQgFgDAAgGQAAgFAEgDIgVgyQgFACgEgEQgFgEACgGQADgGAGAAQAGAAACAFQAEAIgIAEIAWAyQAIgCADAHQADAFgEAFQgDADgFAAIgDAAg");
	this.shape_212.setTransform(40.9,-140.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.3,0).s().p("AAfABIg+gBQgBAKgJAAQgHAAgDgGQgDgEAFgGQAGgFAGADQAGACAAAGIA+AAQABgFAGgDQAGgCAGAEQAEAGgDAEQgDAGgGAAQgKAAgBgJg");
	this.shape_213.setTransform(-167.2,7.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2,0).s().p("AgSAhQgCgGAEgDQADgDAEABIARgsQgFgCAAgEQAAgFAFgDQAGgCADAEQAEAEgCAEQgBADgDACQgDABgDgBIgQAsQAHACgDAIQgCAFgFAAIgBAAQgEAAgDgFg");
	this.shape_214.setTransform(106.2,90.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.6,0,11.6,0).s().p("ABMBMQgIgFgDgKQgDgJAEgJIiGhQQgGAIgJACQgKACgJgFQgOgJABgQQACgRASgHQATgCAJAOQAIAMgGAOICGBPQAJgMAPACQAQACAHARQACAUgOAJQgHAEgHAAQgHAAgHgEg");
	this.shape_215.setTransform(36.6,-193.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.6,0,11.7,0).s().p("AhhBjQgRgHgBgWQAEgTARgFQAQgFAMAMICChtQgJgOAHgPQAIgPAUgBQAVAEAFASQAEARgOAMQgIAHgLgBQgLAAgIgIIiCBtQAGAJgCALQgBALgIAHQgJAHgKAAQgFAAgGgDg");
	this.shape_216.setTransform(-139.9,137.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.4,0,10.5,0).s().p("AhmBLQgEgQAMgKQAIgHAKAAQAJAAAIAHIB0hmQgHgIABgKQABgKAIgHQAMgKAPAGQAQAGABAUQgEASgPAFQgPAEgKgKIh0BmQAJAMgHAOQgGAOgTACQgSgEgFgQg");
	this.shape_217.setTransform(75.7,112);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.2,0,13.3,0).s().p("Ah6AgQgOgOAGgQQAGgOAQgCQAKgBAJAGQAIAGACAIICegPQAAgKAHgHQAHgIAKgBQAQgCAJAOQAJAOgKAPQgOANgPgFQgPgFgDgNIifAPQABAQgOAIQgGADgHAAQgIAAgJgFg");
	this.shape_218.setTransform(126.4,47.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.5,0,5.5,0).s().p("AAnAJQgGgCAAgHIhBAAQgBAHgFACQgGADgHgFQgEgGADgFQADgGAGAAQAEAAAEADQADADAAAEIBBAAQAAgEADgDQAEgCAEAAQAGAAAEAGQACAEgEAHQgEADgEAAIgFgCg");
	this.shape_219.setTransform(-32.1,-154.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.9,0,4.9,0).s().p("AAHCbQgRgGgDgTQgBgNAHgKQAHgKAJgCIgYi8QgMABgJgIQgKgIgBgMQgDgTAQgLQARgMASAMQAQAQgFASQgFASgQAEIAYC8QATgBAJAQQALAQgLAUQgMAMgOAAQgFAAgFgCg");
	this.shape_220.setTransform(80.3,184.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6,0).s().p("AgwCHQgOgMAFgSQADgLAJgGQAKgGALACIAsipQgKgEgFgKQgFgKACgLQAFgRASgEQASgEAOASQAHATgLAOQgLANgQgDIgtCqQAQAGADARQAAARgOANQgIAEgHAAQgLAAgIgIg");
	this.shape_221.setTransform(-179.8,61);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.6,0,5.7,0).s().p("AgvAfQgIgFAAgHQABgIAGgDQALgEAFAJIBBgbQgCgEACgFQACgEAEgCQAHgDAGAFQAGAFgCAJQgFAHgHAAQgHAAgDgGIhBAbQACAHgFAFQgEAEgFAAIgEAAg");
	this.shape_222.setTransform(36.1,-71.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.7,0,1.7,0).s().p("AAGAsQgGgCAAgFQgBgIAGgDIgKgzQgIABgCgIQgBgGAEgDQAFgEAGADQADAEgBAGQgBAFgDABIAKA0QAFgBADAFQADAEgCAGQgEAEgEAAIgCAAg");
	this.shape_223.setTransform(-28,164.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.4,0).s().p("Ag0AjQgCgIAGgFQAEgDAFAAQAFABADADIA9gvQgDgEABgFQAAgFAEgDQAHgFAHADQAIAEAAAJQgCAJgIACQgIACgFgFIg8AvQAEAHgDAGQgEAHgJAAQgKgCgBgIg");
	this.shape_224.setTransform(120.9,159.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AgaAbQgGgCgBgFQgBgFAFgDQACgCADABQADAAACACIAmgaQgEgGAGgFQAEgDAFADQAEACAAAGQgCAFgEABQgFABgDgDIgmAbQADAEgDAEQgCAEgFAAIgBAAg");
	this.shape_225.setTransform(-81.1,-89);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AgkAUQgBgFAFgDQAGgEAFAGIAqgcQgEgHAHgEQAEgDAFACQAFADgBAGQgCAGgFABQgFABgDgEIgqAcQADAFgDAEQgDAEgGAAQgGgCgBgGg");
	this.shape_226.setTransform(-13.7,-205.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("AAcB6QgFgKADgLQADgMAKgGIhSiiQgLAEgLgEQgLgEgFgLQgIgRALgPQAMgQAWAFQAUAJABATQAAASgPAJIBSCjQAQgHAOALQAOAMgDAVQgKAVgUAAQgTAAgIgRg");
	this.shape_227.setTransform(52.7,-71.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.2,0,5.3,0).s().p("AAYA7QgDgFAAgGQABgFAEgEIg2hKQgFADgFgBQgGgBgEgFQgGgIAFgJQAEgJAMABQALADACAJQABAJgGAGIA2BKQAHgFAIAEQAIAFAAALQgDALgKACIgDAAQgHAAgFgGg");
	this.shape_228.setTransform(149.7,59.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.3,0,12.4,0).s().p("AhlByQgTgHgCgXQAEgWASgGQARgGANAMICJh+QgLgPAHgRQAIgRAWgCQAXAEAGATQAFATgOANQgJAIgMAAQgMAAgJgIIiJB+QAIAKgBAMQgBAMgJAIQgJAIgLAAQgGAAgGgCg");
	this.shape_229.setTransform(-148.2,-8.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.3,0,8.4,0).s().p("AhIA8QgLgFABgPQAEgNAMgDQALgCAHAKIBfhBQgGgKAGgJQAGgKAOAAQAOAEACAMQABANgKAGQgGAFgHgBQgHgBgFgGIhfBAQAEAHgCAHQgBAIgHADQgFAEgGAAQgEAAgFgDg");
	this.shape_230.setTransform(56.9,-26.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AAIA1QgHgEABgHQABgHAGgDIgTg/QgGABgFgFQgEgFACgHQAFgHAIABQAGABADAHQABAKgIADIATBAQAKgCADAJQACAHgFAFQgDADgFAAIgFgBg");
	this.shape_231.setTransform(-76.1,-65.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.2,0,12.3,0).s().p("ABXAZQgMgGgBgOIiSgFQgCANgNAFQgOAFgOgLQgKgNAHgNQAHgOAQABQAJAAAHAHQAGAGABAKICSAEQABgHAHgGQAHgHAKABQAPABAGANQAGANgLAOQgJAGgIAAQgGAAgFgDg");
	this.shape_232.setTransform(91.6,171.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("AA7AYQgJgFABgKIhmgOQgCAIgKACQgKADgJgIQgGgKAHgJQAGgJAKACQAHABAEAFQAEAFAAAHIBlAOQACgGAFgCQAGgEAGABQALABADAJQAEAKgKAJQgFADgFAAQgFAAgEgDg");
	this.shape_233.setTransform(-5.8,158.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("AAtAeQgFgBgCgFQgCgEABgFIhKgbQgCAFgFACQgFACgFgCQgIgDAAgIQgBgIAIgGQAJgDAGAGQAGAGgCAHIBKAaQADgHAIAAQAIgBAFAIQADAKgGAGQgEAEgFAAIgFgCg");
	this.shape_234.setTransform(143.7,-95.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.1,0,6.2,0).s().p("AAkAxQgFgDAAgGQgBgGADgEIhEg4QgEAEgGAAQgFABgFgEQgHgGACgJQADgKALgCQAKAAAEAJQAEAHgFAIIBEA3QAGgGAIADQAJACADAKQgBALgJAEIgGACQgFAAgEgEg");
	this.shape_235.setTransform(-11.9,188);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.8,0,3.9,0).s().p("AghB6QgJgRAIgOQAIgNAQABIAQidQgNgDgEgPQgFgQANgNQAPgKAPAJQANAJgCAQQgBAKgIAHQgIAHgKgBIgRCdQAIADAGAIQAGAIgBAKQgCAQgNAGQgFABgEAAQgLAAgLgJg");
	this.shape_236.setTransform(113,-161.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.4,0).s().p("AgVA0QgIAAgDgIQgBgIAFgEQAFgEAHACIAgg8QgGgEABgGQAAgIAIgDQAIgBAFAGQAEAGgEAGQgCAEgEACQgFABgDgCIggA8QAEADABAEQABAFgDADQgDAGgGAAIgBAAg");
	this.shape_237.setTransform(127.9,125.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3,0,3.1,0).s().p("AgcAfQgCgEADgFQAFgGAGAEIAfgpQgGgFAFgGQADgFAFACQAGABACAGQAAAGgFADQgFACgEgDIgeApQADADgBAFQgBAFgGACQgHAAgCgFg");
	this.shape_238.setTransform(15.1,137.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.6,0,14.7,0).s().p("AiIA8QgOgOAHgVQANgSASACQASABAHARICtg6QgEgRANgMQAOgNAUAHQATANgCAUQgDASgSAGQgLAEgLgFQgKgEgFgLIitA5QADAMgGAKQgGAKgLAEQgFABgFAAQgMAAgJgJg");
	this.shape_239.setTransform(145.1,52.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.4,0).s().p("AgUBFQgFgKAFgHQAEgIAJABIAMhZQgHgCgCgJQgDgJAHgHQAJgGAIAGQAIAFgCAKQAAAFgFAEQgFAEgFgBIgMBZQAEABADAFQAEAFgBAGQgCAJgHADIgEABQgHAAgGgGg");
	this.shape_240.setTransform(138.3,106);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.5,0,14.6,0).s().p("Ah/BGQgTgMACgUQACgTASgHQALgDALAEQAKAFAFAKICsg9QgDgLAGgKQAFgLALgEQASgGAOANQAOAOgHAVQgMASgTgBQgRgBgIgQIisA8QAFASgNAMQgJAJgNAAQgFAAgHgCg");
	this.shape_241.setTransform(70.4,23.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.8,0,5.8,0).s().p("AgyAbQgHgFABgIQABgHAHgDQAEgBAFACQAEABACAFIBDgXQgBgEACgEQACgFAEgBQAHgDAGAGQAGAFgDAJQgFAHgHgBQgHAAgDgHIhEAXQACAHgFAEQgDAEgFAAIgGgBg");
	this.shape_242.setTransform(-124.2,-68.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5,0).s().p("AgtAJQgFgFACgEQADgGAGAAQAEgBADADQADACAAACIA7gBQAAgJAJgBQAGAAADAFQAEAGgFAEQgFAFgGgDQgFgCgBgEIg7ACQAAAGgFACIgFACQgDAAgDgDg");
	this.shape_243.setTransform(112.4,4.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.4,0,14.5,0).s().p("AiJApQgMgPAKgUQAOgOARAEQARAEAFAOICsghQgCgRAOgKQAPgKASAJQARAOgFATQgEAPgSAEQgLACgKgGQgKgEgDgLIisAiQABALgHAJQgGAJgLACIgHABQgNAAgJgLg");
	this.shape_244.setTransform(-138.8,35.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.9,0).s().p("AAmAMQgEAAgDgDQgCgDAAgDIg5gDQgCAGgIAAQgGgBgCgFQgDgEAFgFQAGgEAFADQAFADAAAFIA5ADQABgEAFgCQAGgCAFAFQAEAEgDAFQgDAFgFAAIgBAAg");
	this.shape_245.setTransform(96.1,90.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AgnAMQgFgFACgFQACgDAFgBQAIgBACAGIAzgGQgBgDADgDQACgCADgBQAGgBADAFQADAFgDAEQgFAEgFgBQgFgCgBgDIgzAFQAAAFgEADIgEABIgGgBg");
	this.shape_246.setTransform(131.2,92.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1,0,1.1,0).s().p("AgBAmQgEgFABgEQACgEADgBIgCguQgFAAgCgEQgCgFADgFQAEgEADACQAEACABAFQABAHgGABIACAvQAHAAABAHQAAAFgEACIgEACQgCAAgBgCg");
	this.shape_247.setTransform(-8.7,28.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.7,0,7.7,0).s().p("AhGAVQgIgJADgJQADgHAKgCQAGAAAFADQAFADABAEIBbgKQgBgGAEgFQAEgEAGgBQAKgCAFAIQAGAJgGAIQgIAHgJgCQgJgDgCgHIhbALQABAJgIAFQgEACgFAAQgEAAgFgCg");
	this.shape_248.setTransform(126.3,-33.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AgiAXQgGgDAAgGQAAgGAFgCQAHgEAFAIIAvgVQgBgDABgDQABgDADgBQAFgDAFAEQAEADgBAHQgDAGgGAAQgFAAgDgFIgvAUQACAFgEAEQgCADgEAAIgDAAg");
	this.shape_249.setTransform(-157.7,157.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.1,0,8.2,0).s().p("AhLB0QgKgOAIgPQAFgKAKgEQALgDAKAEIBOiWQgJgGgDgKQgCgLAFgKQAIgPASAAQASABAJATQADAUgOALQgNAKgPgHIhOCWQANAJgBARQgBARgSAJIgIABQgPAAgJgNg");
	this.shape_250.setTransform(75.6,190.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.7,0,9.8,0).s().p("AhPBEQgQgGgBgPQgBgNALgHQAIgFAIACQAIABAFAHIBwhDQgEgIACgIQADgIAHgEQAMgHALAHQAMAHgCARQgFAOgOACQgMACgIgLIhwBEQAGALgHALQgHAKgNAAIgDAAg");
	this.shape_251.setTransform(-58.6,183.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AAlAOQgGgDABgGIg/gHQgCAFgGABQgGACgFgFQgFgFAEgGQAEgGAHABQAJACAAAJIA/AHQABgDADgBQAEgDAEABQAGABADAEQACAHgGAFQgDACgDAAQgDAAgDgCg");
	this.shape_252.setTransform(-187.7,103.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.6,0,1.7,0).s().p("AgMAlQgEgDABgFQACgIAHACIALguQgFgCAAgHQACgFAFgBQAFgBAEAFQACAFgDAEQgDAEgFgBIgLAtQAEACAAAFQAAAFgDADIgFABQgCAAgCgCg");
	this.shape_253.setTransform(-47.9,9.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AgEB8QgNgOAFgPQAFgOAMgDIgOiaQgPAAgIgNQgIgNAJgQQAOgOAQAGQANAFACAQQABAKgGAIQgGAIgHACIAOCbQAKgBAIAHQAHAHABAJQACAQgOAJQgGAEgHAAQgIAAgHgFg");
	this.shape_254.setTransform(79,70.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("AA/AjQgGgCgEgGQgDgFABgHIhlgZQgCAGgGADQgGABgHAAQgKgCgDgLQgCgLAKgIQAMgFAIAHQAIAGgBAKIBkAaQAEgKAKgBQALgBAHAJQAFAMgHAIQgGAGgHAAIgFAAg");
	this.shape_255.setTransform(44.1,131.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AAYAXQgHgEADgHIgogWQgFAGgGgEQgEgDAAgEQABgGAFgCQAGgBADAEQACAEgBAEIAoAXQADgEAEABQAGAAACAGQABAGgFADIgEABIgEgBg");
	this.shape_256.setTransform(181.4,3.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("AAtAfQgFgCgCgEQgDgFACgFIhKgbQgCAEgFACQgEACgFgCQgIgCgBgJQgBgJAJgFQAJgCAGAGQAFAFgCAHIBKAcQADgHAIgBQAIAAAFAIQADAKgHAFQgEAEgEAAIgFgBg");
	this.shape_257.setTransform(-172.8,-61.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6,0).s().p("AgoBYQgNgBgGgNQgBgOAKgHQAJgHAKAFIA7hmQgJgHABgMQABgMANgFQAPgCAHALQAHAKgGAKQgEAHgIACQgHADgHgEIg6BnQAGAEABAIQACAHgEAHQgGAJgKAAIgCAAg");
	this.shape_258.setTransform(138.9,119.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.8,0,5.9,0).s().p("AAjAtQgEgDgBgFQgBgGADgEIhBgzQgEAEgFABQgGAAgEgDQgGgFABgJQACgJAKgCQAKAAAEAHQAEAHgEAHIBAAzQAGgGAIACQAIACADAKQAAAKgJAEIgGABQgEAAgEgDg");
	this.shape_259.setTransform(147.5,-86.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.7,0).s().p("Ag+AYQgGgGAEgKQAGgIAIACQAIABADAHIBOgWQgBgIAGgFQAGgFAJADQAJAGgCAJQgBAIgIADQgFABgFgCQgFgDgCgEIhOAWQABAFgDAEQgDAFgFABIgEABQgGAAgEgFg");
	this.shape_260.setTransform(-29.9,39.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.9,0,8.9,0).s().p("AA8AdQgJgGABgKIhpgVQgDAIgKACQgLACgIgIQgGgMAHgJQAHgJALADQAHABAEAGQAEAFgBAHIBpAVQACgGAGgDQAGgCAHABQALABADAKQACAMgKAIQgFADgFAAQgFAAgFgEg");
	this.shape_261.setTransform(25.9,161.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.7,0,11.7,0).s().p("AhoBGQgOgKADgTQAHgQAQgBQAPgCAJANICHhJQgGgOAJgMQAKgMASACQASAIABARQAAAQgOAIQgJAFgJgDQgKgCgFgJIiIBJQAEAJgDAKQgEAJgIAFQgHADgGAAQgHAAgHgFg");
	this.shape_262.setTransform(91.5,-15.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AgiARQgEgDACgGQADgFAFABQAEAAADAEIArgQQgBgFADgDQADgEAGACQAFADgBAFQAAAFgFACQgGACgEgGIgrAQQACAHgHADIgDABQgCAAgDgDg");
	this.shape_263.setTransform(179.1,-9.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.3,0,11.4,0).s().p("AhrAmQgKgLAHgQQALgLAOAAQANACAFANICGghQgCgNALgJQALgJAPAGQAOALgDAPQgDAOgOADQgJABgHgCQgIgEgDgJIiHAiQABAJgEAHQgFAIgJACIgHAAQgJAAgIgIg");
	this.shape_264.setTransform(147.5,110.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AARArQgCgEAAgEQAAgEAEgDIgmg1QgJAEgGgIQgEgFADgGQAEgHAIAAQAIADABAHQACAGgFAEIAmA2QAFgDAGADQAGADAAAIQgDAIgHACIgCAAQgGAAgDgFg");
	this.shape_265.setTransform(36.2,87);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.4,0).s().p("AAhAPQgIgBABgIIg0gJQgBAGgJgCQgFgBgCgEQgBgFAFgFQAGgCAEADQAEADAAAFIAzAJQABgEAGAAQAFgBAEACQADAGgDAFQgDAEgEAAIgCgBg");
	this.shape_266.setTransform(40.7,161.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.5,0).s().p("AAkBRQgFgHAAgIQABgIAGgGIhOhkQgHAEgIgBQgJgCgFgGQgIgLAGgMQAGgMAQAAQAPAEADAMQADANgJAIIBOBlQALgHALAGQALAGABAPQgEAQgOACIgGABQgJAAgGgIg");
	this.shape_267.setTransform(128.6,30.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.4,0,14.5,0).s().p("Ah/A+QgTgNAEgTQACgSASgGQALgDALAFQAKAFAEAKICrgzQgCgLAGgKQAGgKALgDQARgFANANQANAOgIAVQgMARgSgCQgRgCgHgQIirAzQADARgNALQgIAIgMAAQgGAAgHgDg");
	this.shape_268.setTransform(-29,104.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3,0,3,0).s().p("AgWBOQgIgGACgKQABgHAFgDQAFgEAHABIAShhQgGgCgCgFQgCgGABgGQABgKAJgDQAKgDAJAKQAFALgGAIQgGAHgKgBIgSBhQAHADACAJQACAKgGAIQgFADgFAAQgFAAgFgEg");
	this.shape_269.setTransform(-162.5,134.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("AhTB2QgEgVAOgMQAOgLARAGIBRiiQgPgKABgRQAAgTAUgJQAWgFAMAQQALAPgIARQgFALgLAEQgLAEgLgFIhRCjQAKAGADAMQADALgFAKQgJARgTAAQgUAAgJgVg");
	this.shape_270.setTransform(-13.9,172.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AgjAYQgFgDABgHQADgFAFgBQAGgBACAFIAugZQgCgFADgEQADgEAHABQAGADAAAFQAAAGgFADQgHADgEgGIguAYQAEAHgIAFIgEABQgDAAgCgCg");
	this.shape_271.setTransform(-114.5,-119.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AgZAqQgGgBgCgIQAAgHAFgDQAFgCAFADIAkgvQgFgEACgFQABgHAHgCQAHAAADAGQADAGgEAFQgCADgEABQgEAAgDgCIgjAvQADACAAAEQABAEgDADQgDAEgEAAIgDAAg");
	this.shape_272.setTransform(115.8,82.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1,0,1,0).s().p("AgEAsQgEgGACgFQACgFAEAAIAAg2QgFgBgDgEQgCgFAEgGQAFgEAEACQAFADAAAFQAAAJgIABIABA2QAJAAAAAIQAAAGgFADIgFABQgBAAgDgCg");
	this.shape_273.setTransform(150.4,-64.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.2,0,2.3,0).s().p("AgVAhQgBgGAEgDQAEgDAEACIAUgtQgFgCAAgFQAAgFAGgDQAGgCADAFQAEAEgDAFQgDAGgHgCIgTAsQAHAEgEAHQgCAFgFAAQgGAAgDgGg");
	this.shape_274.setTransform(-73.6,127.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.6,0).s().p("AAYBcQgMgCgEgLQgCgHADgHQACgHAHgDIgmhsQgHACgHgDQgGgEgDgGQgEgMAIgIQAJgKAOAFQALAHgBAMQAAAMgLAEIAmBsQALgDAIAIQAIAIgEAOQgHALgLAAIgCAAg");
	this.shape_275.setTransform(-92.9,210);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.5,0,14.6,0).s().p("AiJAyQgMgPAIgUQAOgPARABQARACAGARICtgtQgDgRAOgLQAOgLAUAIQARANgDATQgEATgSAEQgLABgKgDQgKgFgEgLIitAsQACAMgGAJQgHAKgLADIgJABQgMAAgJgKg");
	this.shape_276.setTransform(148.2,153.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AgkBXQgJgIAEgMQADgHAGgDQAHgEAHACIAihuQgGgDgDgGQgDgHACgHQADgMAMgBQANgCAIAMQAEANgIAJQgHAIgLgDIgjBuQALAEABALQABAMgLAIIgJACQgIAAgGgGg");
	this.shape_277.setTransform(-177.1,117.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AAABKQgGgIADgJQACgJAHgCIgNhbQgJABgFgIQgFgIAFgKQAIgIAKADQAHADABAJQABAGgDAFQgDAFgEACIANBbQAGgBAEAEQAFAEABAGQABAJgHAGQgFADgEAAQgFAAgFgDg");
	this.shape_278.setTransform(-138.9,105.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.6,0).s().p("AAnB2QgPgBgHgOQgEgJADgJQADgJAJgFIg8iLQgJADgJgDQgJgEgEgJQgGgPAKgMQALgMASAEQAQAJAAAQQgBAOgMAHIA7CLQAPgFAKAKQAMALgEARQgJAQgQAAIgBAAg");
	this.shape_279.setTransform(81.3,-2.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AgaBYQgJgHACgLQACgHAGgEQAGgEAHAAIAVhuQgHgCgCgGQgDgGABgIQACgLAKgDQAMgDAJALQAGAMgHAJQgGAJgLgBIgWBuQAJADACALQADALgIAJQgGADgFAAQgGAAgGgFg");
	this.shape_280.setTransform(97.8,54.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10,0,10.1,0).s().p("AhhALQgGgLAIgLQAMgJALAFQALAEABALIB4gCQABgLAKgFQALgFAMAIQAKALgGAKQgFALgNABQgIAAgFgFQgGgFgBgIIh4ADQgBAHgFAGQgGAFgHAAIgBAAQgMAAgFgKg");
	this.shape_281.setTransform(107.8,49.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.1,0,10.1,0).s().p("AhiBfQgGgQALgNQAHgIALgCQAKgBAJAGIBsh9QgHgIgBgLQAAgLAHgIQALgNARAFQARAEAFAUQgCAUgPAIQgPAGgNgJIhsB+QALAMgEAPQgFAQgUAFQgVgBgHgRg");
	this.shape_282.setTransform(165.2,-19.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.8,0,7.9,0).s().p("AhMCCQgFgVANgOQANgMASAFIBFiwQgRgJAAgSQgBgTATgMQAXgHAOAQQANAOgIASQgEAMgLAFQgLAFgMgDIhECwQALAFAEAMQAEALgEALQgHASgUACIgCAAQgTAAgMgTg");
	this.shape_283.setTransform(-14.1,-62.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.1,0,6.2,0).s().p("Ag3AkQgHgGACgKQAEgJAIAAQAIAAAEAGIBHgjQgDgIAFgGQAGgHAJACQAJAFABAIQAAAIgIAFQgEACgGgBQgFgBgCgFIhHAjQAEAMgLAFQgDACgDAAQgEAAgEgCg");
	this.shape_284.setTransform(-2.2,116.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.7,0).s().p("AgqAIQgFgGADgDQACgFAGgBQAIAAABAHIA2AAQABgJAIAAQAGgBADAGQADAEgFAEQgFAFgFgCQgFgCgBgFIg2ABQAAAFgFADIgEABQgDAAgDgCg");
	this.shape_285.setTransform(187,101.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AgiAZQgGgDAAgGQgBgGAFgCQAIgEAEAHIAvgWQgCgJAHgDQAFgCAEADQAFAEgBAHQgDAFgGABQgFAAgDgFIgvAXQACAEgEAFQgCADgFAAIgCAAg");
	this.shape_286.setTransform(-5.4,21.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("AAmAkQgFgHADgHIhIgoQgFAHgIgBQgJgBgEgJQgCgLAIgFQAHgFAIAFQAFACABAFQACAFgCAGIBJAnQADgEAFgBQAFgBAFACQAIAFgBAIQAAAJgKAFIgCAAQgIAAgFgGg");
	this.shape_287.setTransform(109.2,209.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.8,0,7.9,0).s().p("AhLBUQgGgNAIgMQAFgHAJgBQAJgCAHAFIBShuQgGgGgBgIQgBgJAFgHQAJgMAOADQAPADAEAQQAAARgMAHQgMAGgLgHIhSBtQAKAJgDANQgDAOgQAFIgBAAQgQAAgHgNg");
	this.shape_288.setTransform(43.7,45.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.8,0,7.9,0).s().p("AA0AbQgHgFABgKIhcgVQgDAJgJAAQgKABgHgGQgFgLAHgIQAGgIAKADQAGABAEAFQADAFgBAGIBcAVQACgFAFgDQAGgBAGAAQAKACACAJQACAKgJAIQgFACgEAAQgFAAgFgEg");
	this.shape_289.setTransform(-179.6,124.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.8,0).s().p("AAUByQgPgDgDgOQgCgJADgIQAEgIAJgDIgjiIQgJACgHgFQgIgFgDgIQgDgOALgKQALgKAQAHQAMAKgBAOQgCANgNAFIAjCIQAOgDAIALQAJALgGAQQgJALgLAAIgFAAg");
	this.shape_290.setTransform(-188.7,56.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.7,0).s().p("AAfAHQgDgDAAgDIg3gBQgBAIgIAAQgGAAgCgFQgDgEAEgFQAGgEAFACQAFADAAAFIA3AAQABgFAFgCQAFgCAFAEQAEAFgDAEQgCAFgGAAQgEAAgCgCg");
	this.shape_291.setTransform(46.5,-80);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.8,0).s().p("AgrAMQgFgFACgGQACgDAGgBQAIgBACAGIA4gFQAAgJAJgBQAGgBADAFQAEAFgEAFQgFAEgGgBQgFgCgBgDIg5AFQABAGgFADIgFABQgDAAgDgCg");
	this.shape_292.setTransform(15.7,-62.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.9,0,7.9,0).s().p("AhJBpQgJgOAIgOQAFgJAKgDQAJgDAJAEIBOiHQgIgFgCgKQgCgKAFgJQAIgOAQABQARABAIASQACATgNAJQgMAJgOgGIhOCHQAMAJgCAPQgBAQgRAHIgGABQgPAAgIgMg");
	this.shape_293.setTransform(137.5,71.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("AA0AwQgHgJAEgKIhjg2QgGAJgLgBQgLgBgGgMQgCgOAKgHQAKgHAKAGQAHAEACAHQACAHgDAGIBjA2QAEgGAHgCQAHgCAHAEQAKAGgBAMQAAAMgNAFIgFABQgKAAgFgIg");
	this.shape_294.setTransform(178.4,19.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.5,0).s().p("AgxBUQgHgJAFgMQADgHAHgCQAIgDAHACIAyhrQgHgEgCgHQgDgIAEgHQAFgLAMAAQANgBAHAOQADAOgJAIQgJAHgLgEIgyBsQAKAGAAALQgBANgMAGIgHABQgKAAgGgIg");
	this.shape_295.setTransform(127.2,197.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.1,0,2.1,0).s().p("AgSAiQgDgDACgFQADgHAHACIARgqQgGgEADgHQACgEAFAAQAFgBADAFQABAGgDADQgEADgEgBIgSArQAFACAAAFQAAAFgFADIgDAAQgEAAgDgDg");
	this.shape_296.setTransform(-96.3,196.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.7,0,2.8,0).s().p("AAKA4QgHgEAAgIQABgHAGgDIgVhDQgHACgFgFQgFgFADgJQAFgHAIABQAHABADAHQABAEgCAFQgCAEgEACIAVBDQAFgBAEACQAEACABAFQADAHgGAFQgDADgEAAIgGgBg");
	this.shape_297.setTransform(125.2,151.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AglAIQgEgFACgDQACgEAFgBQAIgBABAGIAvgBQAAgDADgCQACgDADAAQAFAAACAEQADAFgDADQgFAEgEgCQgFgCgBgDIgvACQAAAFgEACIgEABQgDAAgDgCg");
	this.shape_298.setTransform(105.2,70);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3,0,3.1,0).s().p("AgbAtQgEgFADgGQACgEAEgBQAEgCAEACIAcg6QgEgCgBgEQgBgEACgEQADgGAGAAQAIAAADAHQABAIgFAEQgFAEgGgCIgbA6QAFADAAAGQAAAHgHADIgEABQgGAAgDgFg");
	this.shape_299.setTransform(-112.7,158.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.1,0,2.1,0).s().p("AgOA+QgHgFABgIQABgFAEgDQAEgDAFAAIAKhMQgEgBgBgEQgDgEABgFQABgIAGgDQAIgCAHAHQAEAIgEAHQgFAGgHAAIgLBMQAGACACAHQACAIgGAGQgDACgEAAQgEAAgDgCg");
	this.shape_300.setTransform(-94.7,177.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.3,0).s().p("Ag9AoQgCgJAHgGQAFgEAFABQAGAAAEAEIBGg2QgDgFABgGQABgGAFgDQAHgGAIAEQAJAEAAAMQgDAKgIACQgJADgGgHIhGA3QAFAHgEAIQgEAIgLAAQgLgDgCgJg");
	this.shape_301.setTransform(103.5,-90.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.1,0).s().p("AARAvQgHgDAAgGQgBgGAFgEIgdg2QgFACgFgDQgFgEABgIQADgHAHAAQAGgBADAGQACAEgBAEQgBADgDADIAdA2QAJgDAEAIQADAGgDAFQgEAEgGAAIgCAAg");
	this.shape_302.setTransform(169.7,90.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7,0,7,0).s().p("AAsAgQgGgGADgIIhSggQgEAIgIAAQgJABgGgJQgDgLAIgGQAGgGAJADQAFACADAFQACAGgCAFIBSAfQACgFAGgCQAFgCAFACQAJAEABAJQAAAJgJAGIgHAAQgGAAgEgEg");
	this.shape_303.setTransform(178.2,71.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.4,0,12.4,0).s().p("ABNA9QgKgLAFgPIiRhBQgIAOgPAAQgRAAgJgRQgEgUANgLQANgKAPAHQAJAEAEAJQAEAKgDAKICRBAQAFgIAKgEQAKgDAJAEQAPAHABARQAAARgRAJIgJACQgNAAgIgKg");
	this.shape_304.setTransform(87.4,134.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2,0).s().p("AACBAQgGgCgBgJQAAgFADgEQACgEAEgBIgJhNQgFABgEgEQgDgDgBgFQgBgIAHgFQAHgEAGAFQAHAGgDAIQgCAHgFACIAIBNQAIgBAEAHQAEAHgFAIQgFAFgFAAIgFgBg");
	this.shape_305.setTransform(-7.1,-198.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.7,0,1.7,0).s().p("AgBA4QgGgGACgHQACgHAFgBIgGhFQgGAAgEgFQgEgHAEgHQAHgGAHADQAFACABAHQABALgJACIAGBFQALAAABAKQABAHgGAEQgDACgDAAQgEAAgCgCg");
	this.shape_306.setTransform(54,-132.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AgnAPQgDgEACgGQADgFAGABQAFABACAEIAxgNQgBgFADgEQAEgDAGACQAGAEgBAFQgBAGgFABQgIABgDgGIgxAOQACAIgIACIgCAAQgEAAgDgDg");
	this.shape_307.setTransform(169,-13.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.1,0,12.1,0).s().p("ABbAsQgJgCgGgIQgFgIABgJIiQgcQgDAJgIADQgIAEgJgCQgPgDgEgNQgEgPAOgMQAQgHAMAJQALAIgBAOICQAcQAEgMAOgCQAOgDAMALQAIAQgKANQgHAJgLAAIgGAAg");
	this.shape_308.setTransform(-87.3,133);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.7,0,14.7,0).s().p("ABfBBQgNgMAFgSIiuhAQgIARgSABQgTABgMgTQgGgWAOgOQAPgNARAHQALAEAGALQAFAKgDAMICuBAQAFgLALgEQALgFALAEQASAHACATQACAUgUAMQgHACgGAAQgMAAgJgJg");
	this.shape_309.setTransform(96.6,-64.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.5,0,1.6,0).s().p("AgLAnQgEgDABgFQABgIAIABIAJgwQgFgCABgIQAAgFAFgBQAFgBAEAFQADAFgDAEQgDAEgFAAIgJAvQADACAAAFQABAFgCAEIgFABQgDAAgCgCg");
	this.shape_310.setTransform(168.6,5.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12,0,12.1,0).s().p("AhlBMQgSgIAAgRQgBgQAOgIQAKgFAJACQAKADAGAIICMhKQgEgJADgKQAEgJAJgFQAOgIAOAJQAOAKgEAUQgIARgQABQgPABgJgMIiMBKQAGAOgJAMQgIALgOAAIgHgBg");
	this.shape_311.setTransform(135.5,81.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("AhnBZQgGgQAMgMQAHgIALgBQALgBAIAHIB0h3QgHgJABgKQAAgLAHgIQAMgMARAFQARAGADAUQgCAUgQAGQgPAHgNgLIh0B4QALAMgGAQQgGAQgUADQgUgDgGgRg");
	this.shape_312.setTransform(73.6,44);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.1,0,12.2,0).s().p("ABHBkQgJgIgBgLQgCgLAHgKIiIhzQgIAIgLABQgMAAgJgHQgOgMAFgSQAFgTAVgFQAVACAIAQQAIAPgKAPICIBzQAMgMARAFQASAFAEAVQgBAWgSAIQgGADgGAAQgKAAgJgIg");
	this.shape_313.setTransform(-44.1,-138.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13,0,13.1,0).s().p("Ah1AsQgPgNAEgQQAEgPAQgDQAKgCAJAFQAJADADAKICagfQgBgKAGgIQAGgIAKgDQAQgDAKANQALANgJASQgMAMgQgDQgPgDgEgNIibAfQABAPgMAKQgHAFgJAAQgHAAgHgEg");
	this.shape_314.setTransform(28.4,111.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.8,0).s().p("AAtANQgEAAgDgDQgDgEgBgEIhDgCQgBAEgDADQgDADgFgBQgHAAgDgGQgDgFAGgHQAGgEAGADQAGADABAGIBDABQABgFAGgCQAHgDAGAFQAFAFgDAHQgEAGgGAAIgBAAg");
	this.shape_315.setTransform(4.3,114.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.4,0).s().p("AAkBPQgFgHABgIQAAgIAGgFIhOhiQgHAFgIgCQgIgBgFgGQgIgLAFgLQAGgMAQgBQAOAEADAMQADAMgIAJIBOBhQAKgHALAGQALAGABAPQgEAPgNADIgFABQgJAAgHgIg");
	this.shape_316.setTransform(-5.5,89.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.8,0,3.9,0).s().p("AAYAcQgHgFAEgHIgqgeQgCADgEAAQgDABgDgCQgEgEAAgFQABgGAGgCQAHAAADAFQADAEgDAFIAqAdQAEgEAFABQAFACACAGQABAGgFADIgFACQgDAAgCgCg");
	this.shape_317.setTransform(113,126.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5,0).s().p("AgtAJQgFgFACgEQADgGAGAAQAEgBADADQADACAAACIA7gBQABgJAIgBQAGAAADAFQAEAGgFAEQgFAFgGgCQgFgCgBgFIg7ACQAAAGgFACIgFACQgDAAgDgDg");
	this.shape_318.setTransform(148.3,117.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.7,0).s().p("AAcABIg3gBQgBAIgIAAQgGAAgDgFQgDgDAFgGQAFgEAFACQAFADABAFIA3AAQABgFAFgCQAFgCAFAEQAFAFgDAEQgDAFgGAAQgIAAgBgIg");
	this.shape_319.setTransform(-10.7,52);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AAVAZQgDgFADgEIgqgdQgDADgFgBQgGgBgCgGQAAgGAFgDQAFgCAFADQAGAEgEAHIAqAdQAFgGAHAFQAEADgBAFQgBAGgGACQgGAAgDgEg");
	this.shape_320.setTransform(-55.4,168);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.2,0,3.3,0).s().p("AgeA6QgDgJAGgGQAFgGAIACIAahOQgHgDAAgIQgBgJAIgFQAKgDAGAGQAGAHgDAIQgCAFgEACQgFADgFgCIgbBOQAFACACAFQADAFgCAFQgDAIgJABIgCAAQgHAAgFgIg");
	this.shape_321.setTransform(-84.1,23.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.2,0,5.3,0).s().p("AARBxQgOgKACgOQACgOAMgFIgpiJQgOADgJgKQgKgLAGgQQAKgPAPACQAPADAFAOQACAJgEAIQgDAIgJAEIAqCIQAJgCAIAFQAIAEACAJQAFAOgLALQgHAGgKAAQgFAAgGgCg");
	this.shape_322.setTransform(-187.3,-8.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.8,0,2.9,0).s().p("AAPAsQgGgDgBgGQAAgGAFgDIgbgyQgFACgEgEQgFgDABgHQADgHAGAAQAGAAADAFQAEAHgHAGIAaAyQAEgCADACQAEABACADQADAFgEAGQgDAEgFAAIgDAAg");
	this.shape_323.setTransform(89.1,209.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.6,0,1.6,0).s().p("AgEA8QgGgHADgHQADgHAFgBIgDhLQgIAAgDgHQgEgHAFgHQAHgGAGADQAHADABAIQAAAFgDADQgDAEgDABIADBLQAFAAAEADQADADAAAFQABAIgHAEQgDACgDAAQgDAAgEgDg");
	this.shape_324.setTransform(2.8,35.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.8,0).s().p("AgzBdQgIgKAFgNQAEgHAHgEQAIgDAIADIA0h3QgHgEgDgIQgDgIAEgHQAFgMAOgBQAOgBAHAOQAEAQgKAIQgJAJgNgEIgzB2QALAHAAAMQAAANgOAIIgIABQgKAAgHgIg");
	this.shape_325.setTransform(41.9,-33.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.2,0).s().p("AAbBJQgEgGABgHQABgIAGgEIg/hdQgHAEgHgCQgHgBgEgGQgHgKAGgKQAGgLAOABQANAEACALQACALgJAHIBABdQAJgGAKAGQAJAGAAANQgFAOgMACIgDAAQgJAAgGgIg");
	this.shape_326.setTransform(117.6,183.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.8,0,7.8,0).s().p("AA6AgQgGgBgEgFQgDgGABgGIhcgYQgCAGgFADQgGABgGAAQgKgDgBgKQgCgKAJgHQALgEAIAGQAHAGgCAJIBcAYQADgJAKgBQAJgBAHAJQAFALgHAIQgFAFgGAAIgFgBg");
	this.shape_327.setTransform(23.7,60.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.8,0,9.8,0).s().p("AhGCCQgUgDgHgVQgBgVAQgKQAPgJAPAIIBliWQgOgLADgRQADgTAUgHQAXgBAKARQAJAQgKAQQgHAJgLADQgMADgKgGIhkCWQAJAIACALQACAMgHAJQgJAOgPAAIgFgBg");
	this.shape_328.setTransform(161.6,-5.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.5,0).s().p("AhOAQQgJgJAFgJQAEgJALgBQAGAAAFAEQAFAEABAFIBlgDQAAgHAFgFQAEgEAHgBQALAAAFAJQAFAKgHAIQgKAIgJgEQgKgDgBgJIhlAEQAAAKgJAEQgEACgEAAQgFAAgGgEg");
	this.shape_329.setTransform(-62.8,-10.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.2,0,3.2,0).s().p("AgBB9QgPgGgBgQQgBgJAHgIQAGgIAHgBIgIiZQgKAAgHgHQgHgHgBgKQgBgQAOgHQAOgJAOALQAMAOgFAPQgGANgMADIAICYQAPABAHANQAHAOgKAPQgJAJgKAAQgFAAgDgDg");
	this.shape_330.setTransform(-109.6,-102.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.6,0).s().p("AANApQgFgDgBgFQAAgGAEgDIgXgvQgFACgEgDQgFgEABgGQADgGAGgBQAGAAACAFQAEAIgHAEIAYAwQAIgEADAIQADAFgDAFQgDAEgFAAIgDgBg");
	this.shape_331.setTransform(-77.2,149.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.8,0,5.9,0).s().p("Ag1AbQgGgFADgJQAEgIAIABQAHAAADAGIBEgaQgCgHAFgFQAFgFAJACQAIAEgBAIQgBAIgHADQgKAEgFgKIhEAaQACAFgCAEQgCAEgFACIgFACQgEAAgEgEg");
	this.shape_332.setTransform(50.5,68.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("AAtAfQgFgCgCgEQgDgFACgFIhKgbQgCAEgFACQgEACgFgCQgIgDgBgIQAAgJAIgFQAJgCAGAGQAGAFgDAHIBKAcQADgHAIAAQAIgBAFAIQADAKgGAGQgFADgEAAIgFgBg");
	this.shape_333.setTransform(50.8,107.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.1,0,2.2,0).s().p("AgOBAQgHgFABgIQABgFAEgDQAEgEAFABIAKhPQgEgBgCgFQgCgEAAgFQACgIAGgDQAIgCAHAHQAEAIgEAHQgEAHgIgBIgKBPQAFACACAHQADAIgHAHQgCACgEAAQgEAAgEgCg");
	this.shape_334.setTransform(-169.6,92.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.5,0,3.6,0).s().p("AAACFQgQgGgBgRQAAgKAGgIQAGgIAIgCIgLiiQgKAAgIgHQgHgHgBgLQgCgRAPgIQAPgJAPALQANAOgGAQQgFAOgOADIAMCiQAPABAIAOQAIAOgKAQQgKAJgLAAQgFAAgEgCg");
	this.shape_335.setTransform(-39.9,-69.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.1,0).s().p("AgiAWQgGgDAAgGQAAgFAFgCQAIgDAEAGIAvgTQgDgHAHgEQAFgCAFAEQAEADgCAHQgDAFgFAAQgFAAgDgEIgvATQACAFgEAEQgCADgEAAIgDgBg");
	this.shape_336.setTransform(-65.5,171.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AgeAdQgFgCAAgHQACgGAFgBQAFgBADADIAogeQgDgEADgFQACgEAGgBQAGACACAGQABAFgFADQgGAFgFgGIgoAfQAFAGgHAFQgCACgDAAIgEgBg");
	this.shape_337.setTransform(37.2,169.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.9,0,9,0).s().p("AhXA8QgDgOAKgIQAHgFAIAAQAIABAGAFIBkhRQgFgHABgIQABgIAHgGQAKgIANAGQAMAGABAQQgEAPgNADQgMADgJgJIhjBRQAHALgGALQgGAMgPABQgQgEgDgNg");
	this.shape_338.setTransform(152,122.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.4,0).s().p("Ag0AsQgDgIAHgGQADgEAGAAQAFgBAEAEIA6g7QgDgEAAgFQAAgGAEgDQAGgHAIADQAJADABALQgBAJgIAEQgHACgHgFIg6A7QAFAGgCAHQgEAIgJACQgLgBgDgJg");
	this.shape_339.setTransform(62,154.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.3,0,14.4,0).s().p("AiIArQgMgOAJgUQAOgOARADQARACAFAQICrglQgCgRAOgKQAOgKATAIQARAOgFATQgEARgSACQgLADgJgFQgKgFgEgKIiqAkQABAMgGAJQgHAJgLACIgHABQgNAAgJgLg");
	this.shape_340.setTransform(-111.1,183.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.9,0,11,0).s().p("ABDBSQgIgGgCgJQgCgKAGgJIh8hbQgHAHgKABQgKABgIgGQgNgJADgQQADgRATgFQASAAAIAOQAHANgIANIB8BbQALgLAOAEQAQADAFASQAAATgPAIQgGADgGAAQgIAAgHgGg");
	this.shape_341.setTransform(187.4,96.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.6,0,5.7,0).s().p("AAcAtQgDgIAFgHIg9g6QgHAFgHgCQgJgDgBgKQABgLAJgDQAIgEAGAHQAEADABAGQAAAGgDAEIA9A6QAEgDAGAAQAGAAAEAEQAGAGgDAJQgCAIgLACQgKgBgEgIg");
	this.shape_342.setTransform(-76.6,96.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.7,0,2.7,0).s().p("AALAgQgEgHAGgEIgagoQgHADgEgGQgDgFADgEQACgFAHABQAFACABAFQABAFgEADIAaAoQAEgDAEADQAFADgBAGQgCAGgFABIgBAAQgEAAgDgEg");
	this.shape_343.setTransform(184,-16.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.7,0).s().p("AgpBGQgGgJAEgJQADgGAGgCQAGgDAGADIArhZQgGgDgBgGQgCgGADgGQAEgJALAAQAKAAAGALQACAMgIAGQgHAGgJgDIgrBYQAIAFAAAKQgBAKgKAGIgGAAQgIAAgFgGg");
	this.shape_344.setTransform(-46.6,216.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.1,0,2.1,0).s().p("AgMBRQgJgFABgLQABgGAEgEQAFgFAGAAIAFhjQgEgBgEgFQgEgFAAgHQABgKAKgEQAIgEAJAIQAHAKgFAJQgFAJgJAAIgFBjQAHACAEAJQADAJgIAKQgGAEgDAAQgFAAgEgDg");
	this.shape_345.setTransform(54.4,210.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2.1,0).s().p("AgGBgQgLgFAAgMQAAgIAFgGQAFgFAHgBIgBh1QgIgBgFgFQgFgGAAgHQgBgMALgGQAJgGAMAJQAJALgFALQgEALgMABIACB1QAMABAFAKQAFALgJALQgHAGgIAAQgCAAgEgCg");
	this.shape_346.setTransform(-5.7,-162.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AAoATQgJgCABgKIg/gLQgCAHgKgCQgHgBgCgFQgBgGAGgGQAHgDAFAEQAFADAAAHIA+ALQACgFAGAAQAHgBAFADQADAHgEAGQgEAEgFAAIgCAAg");
	this.shape_347.setTransform(-29.6,18.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.6,0).s().p("AgVBZQgHgMAGgKQAGgKALAAIAIhyQgJgCgDgKQgEgLAJgKQAKgIALAHQAKAGgBAMQgBAHgFAFQgGAFgHAAIgJBxQAGACAEAGQAFAFgBAIQgBAMgLAEIgGABQgIAAgHgGg");
	this.shape_348.setTransform(-31.5,-219);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,4,0).s().p("AAcARQgDAAgBgDQgCgDABgDIgugNQgCAFgIgBQgEgBgBgFQgBgGAFgDQAGgCADADQAEAEgBAEIAtANQACgEAFAAQAFgBADAFQACAGgEADQgCADgDAAIgDgBg");
	this.shape_349.setTransform(109.7,106.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("AhoBPQgEgQAMgLQAIgHAKAAQAKAAAIAHIB1hrQgGgIABgKQABgLAIgHQAMgLAPAGQAQAHACAUQgDASgQAFQgPAFgLgKIh2BrQAJAMgGAOQgGAPgTACQgUgDgFgRg");
	this.shape_350.setTransform(149.6,-63.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.8,0).s().p("AgrAMQgFgFACgGQACgDAGgBQAJgBACAGIA3gFQAAgJAIgBQAGgBADAFQAEAGgEAEQgEAFgGgCQgGgCgBgDIg3AFQAAAGgFADIgEABQgDAAgEgCg");
	this.shape_351.setTransform(77.5,-42.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.4,0,10.4,0).s().p("AhkAQQgHgMAJgLQALgJAMAEQALAEACAKIB8gHQAAgMALgGQALgGANAIQAKAMgFAKQgFAMgNABQgIABgGgFQgGgFgCgGIh7AHQgBAIgFAGQgFAGgIAAIgCAAQgMAAgGgKg");
	this.shape_352.setTransform(43.4,63.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AgwAbQgGgFACgIQAEgHAHAAQAHAAADAFIA+gaQgCgGAFgFQAEgGAIACQAIAFgBAHQAAAHgGADQgEACgFgCQgEgBgCgEIg+AaQACAEgCAFQgCAEgEACIgFABQgDAAgEgDg");
	this.shape_353.setTransform(156.4,67.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AAQAkQgGgHAHgGIgigsQgIAEgFgGQgEgFADgFQADgGAHAAQAHACABAFQABAGgEAEIAiAsQAFgDAFADQAFACAAAHQgCAHgGACIgCAAQgFAAgCgEg");
	this.shape_354.setTransform(143.9,166.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,3.9,0).s().p("AAYAyQgIgCgBgHQgBgHAFgFIgng4QgGADgGgDQgGgEAAgIQADgJAHgBQAHgBAFAGQAGAJgIAHIAnA4QAEgCAEABQAFABACAEQAFAGgEAGQgDAGgIAAIgCAAg");
	this.shape_355.setTransform(162.5,162.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3,0,3.1,0).s().p("AgNCUQgRgJABgSQAAgMAIgIQAHgJAMgBIABi1QgMgBgHgJQgIgJAAgLQAAgTARgIQAPgJASAOQANARgHARQgIARgRABIgBC1QARACAHAQQAIARgNARQgLAIgKAAQgGAAgHgDg");
	this.shape_356.setTransform(90.5,-129.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.2,0,5.3,0).s().p("AAfAfQgEgFADgHIg8gjQgEAFgHgBQgHgBgDgIQgBgIAHgFQAGgEAGAEQAJAHgFAJIA8AjQAGgIAKAFQAGAEgBAHQAAAIgJADIgBABQgHAAgEgGg");
	this.shape_357.setTransform(-142.8,-80);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7,0,7.1,0).s().p("AhEB2QgFgUAMgMQAMgMAQAFIA9ifQgOgHgBgRQgBgRARgLQAVgFAMANQAMANgGARQgEAKgKAFQgKAEgLgDIg9CfQAKAFAEAKQAEAKgEAKQgHARgSABIgCAAQgQAAgLgQg");
	this.shape_358.setTransform(-43.6,87.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5.1,0).s().p("AAhAeQgDgCgCgEQgBgEABgEIg5gdQgGAIgIgFQgGgDAAgHQAAgHAIgDQAHgBAFAFQADAFgCAGIA5AdQAEgFAGAAQAHABADAHQACAIgGAEQgDACgDAAQgDAAgDgBg");
	this.shape_359.setTransform(119.4,-7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.9,0,12,0).s().p("ABbAoQgKgCgFgHQgGgHABgKIiOgWQgCAIgIAEQgIAFgJgCQgPgDgEgMQgEgPANgMQAPgIANAIQALAIgBAOICOAXQADgMAOgDQAOgEAMALQAJAQgKAMQgHAKgLAAIgFAAg");
	this.shape_360.setTransform(86.8,-138.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.9,0,4.9,0).s().p("AgoAdQgHgDgBgHQAAgHAGgDQAEgCAEABQAEACACADIA4gbQgEgIAJgFQAGgDAFAEQAGAEgCAIQgDAHgHAAQgGAAgDgFIg4AbQACAGgEAEQgDAEgGAAIgCAAg");
	this.shape_361.setTransform(22.8,-67.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.lf(["#34FFFD","#267AB3"],[0,1],-15.1,0,15.2,0).s().p("AiQAmQgMgQALgUQAPgOASAFQARAEAFAPIC1gdQgCgSAPgJQAPgLAUAKQARAQgGATQgFAQgTADQgMACgKgGQgJgFgEgLIi0AdQABALgIAKQgHAJgLACIgGABQgPAAgJgNg");
	this.shape_362.setTransform(-77.6,197.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.7,0,8.7,0).s().p("AhCBiQgQgEgDgSQAAgRAOgGQAMgHAMAIIBchuQgKgKAEgNQAEgOARgEQASAAAGAPQAGANgJAMQgGAHgJABQgKACgHgGIhdBuQAHAHAAAJQABAKgGAHQgIAIgKAAIgGAAg");
	this.shape_363.setTransform(130.2,-71.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.1,0,10.2,0).s().p("AhiBXQgGgPALgMQAIgIAKgBQAKgBAIAHIBvh1QgHgIAAgKQAAgLAHgHQAMgMAQAEQARAFADAUQgCAUgQAGQgOAGgNgKIhuB1QALAMgGAPQgFAQgTADQgUgCgGgRg");
	this.shape_364.setTransform(-55.3,-181);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.3,0).s().p("AhOBLQgNgGAAgRQAEgPANgDQAMgDAJAJIBohSQgHgLAGgLQAHgMAQgBQAQAFADAOQACANgKAJQgHAFgJgBQgIAAgGgGIhoBRQAFAHgCAJQgBAIgHAGQgGAFgHAAQgFAAgFgDg");
	this.shape_365.setTransform(-133.7,-142.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.9,0,5.9,0).s().p("AAkAtQgEgDgBgFQgBgGADgEIhCgyQgEAEgFABQgGAAgEgDQgHgFACgJQACgJAKgDQAKAAAEAIQAEAHgFAHIBCAyQAGgGAIACQAIACADAJQAAALgIAEIgHABQgEAAgEgDg");
	this.shape_366.setTransform(160.2,2.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AgSA6QgGgFABgIQADgKALABIAQhHQgEgCgDgEQAAgEAAgFQABgHAIgCQAIgCAFAHQAEAJgFAGQgEAFgHgBIgQBIQAGACAAAHQABAIgFAFIgGACQgFAAgDgDg");
	this.shape_367.setTransform(1.8,131.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.7,0).s().p("AgtAnQgCgHAFgGQADgDAFAAQAFgBADADIAzgzQgDgEAAgEQAAgFADgEQAFgFAIACQAHADACAJQgBAJgHACQgHADgGgFIgyA0QAFAFgDAHQgDAHgIACQgJgBgDgIg");
	this.shape_368.setTransform(-5.1,-13.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.3,0,1.3,0).s().p("AgIAnQgFgDABgFQABgHAIAAIAFgvQgFgBABgIQABgFADgBQAFgCAEAEQADAGgDAEQgCAEgFgBIgGAvQADABABAFQACAFgEAEIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAg");
	this.shape_369.setTransform(21.3,200.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.1,0,5.1,0).s().p("AgrAnQgHgEAAgJQADgIAHgCQAHgBAFAFIA5gpQgEgGAEgGQADgHAJAAQAIADACAIQABAHgGAEQgJAGgHgIIg5AqQAFAJgIAHQgEADgDAAIgGgCg");
	this.shape_370.setTransform(174.8,50);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.7,0).s().p("AAkAOQgEgBgCgCQgCgDAAgEIg3gGQgCAGgIgBQgGgBgCgDQgCgGAFgFQAGgDAFADQAFADgBAFIA3AGQABgDAGgCQAFgBAFAEQADAFgDAFQgDAEgEAAIgCAAg");
	this.shape_371.setTransform(169.2,-57.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.4,0,10.4,0).s().p("AhaAzQgOgJABgOQACgNAMgFQAIgDAIADQAIADADAHIB7gsQgDgIAEgHQAEgIAIgDQANgEAKAJQAKAKgFAPQgIANgOgBQgMAAgGgMIh6AsQADANgJAJQgGAGgJAAIgJgBg");
	this.shape_372.setTransform(12.8,105);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4,0).s().p("AAZAUQgEgEACgFIgugUQgCAEgFAAQgGAAgDgFQgBgHAFgDQAEgEAFADQAGADgCAIIAuAUQABgDAEgBQADgBADABQAFADAAAFQAAAGgGADIgCAAQgEAAgDgDg");
	this.shape_373.setTransform(-8,-182);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.8,0,7.8,0).s().p("AAuAtQgGgIAFgKIhagyQgGAIgKgBQgKgBgFgMQgCgNAJgGQAJgGAKAGQAGADACAGQACAHgDAGIBZAzQAEgGAHgBQAGgCAGAEQAKAFgBALQgBALgMAFIgEAAQgKAAgFgHg");
	this.shape_374.setTransform(71.3,154.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1,0,1,0).s().p("AgFAnQgEgCAAgFQABgIAHAAIABguQgFgCAAgHQABgFAEgCQADgCAFAEQADAFgCAEQgDAFgEAAIgCAuQADABACAEQACAFgEAEQgDACAAAAIgFgBg");
	this.shape_375.setTransform(-132.9,144.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AASBHQgKgBgDgJQgCgFACgGQADgFAFgCIgchUQgFACgFgDQgGgDgBgFQgDgJAGgGQAGgHALADQAJAGgBAJQAAAJgIADIAcBUQAIgCAGAGQAHAGgEALQgFAIgJAAIgBAAg");
	this.shape_376.setTransform(-45.6,151.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.1,0,10.2,0).s().p("AhjBKQgFgPAMgLQAHgGAKAAQAKAAAHAHIBxhlQgGgIABgJQABgKAHgHQAMgKAPAGQAPAGABATQgDASgPAEQgOAFgLgKIhxBkQAJAMgGANQgGAOgSACQgTgDgEgQg");
	this.shape_377.setTransform(-149.7,76.6);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.6,0).s().p("AgeAYQgFgDAAgGQACgFAFgBQAFgBADAEIAogZQgCgEADgEQADgEAFAAQAGACABAGQAAAFgEADQgGADgFgFIgoAYQADAHgGAEIgEACIgEgCg");
	this.shape_378.setTransform(179,-25.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.3,0,8.3,0).s().p("AA0AoQgHgIADgKIhhgpQgEAJgLAAQgLABgGgLQgDgNAJgIQAIgHAKAFQAHACACAHQADAGgCAGIBgApQAEgGAGgCQAGgCAHACQAKAFABALQAAALgMAHIgGABQgIAAgFgGg");
	this.shape_379.setTransform(152.1,100.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.7,0,7.8,0).s().p("AAvA8QgGgEgBgHQgBgHAEgGIhXhDQgFAFgHAAQgHABgGgFQgJgGADgMQACgMANgDQAOAAAFAKQAFAKgGAJIBXBDQAHgIALACQALADADANQAAAOgLAFQgEACgEAAQgGAAgFgEg");
	this.shape_380.setTransform(123.2,108.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("AA9BEQgIgMAHgNIh5hRQgJALgOgDQgPgCgGgRQgBgSAOgIQANgIANAJQAIAFACAJQACAJgFAJIB6BRQAGgHAJgBQAKgCAIAFQAMAJgCAPQgCAQgRAGIgCAAQgQAAgIgMg");
	this.shape_381.setTransform(3.4,150.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.2,0,5.3,0).s().p("AAjARQgFgEABgGIg9gLQgCAEgGABQgHABgFgDQgDgHAEgGQAEgFAHABQAJACgBAKIA9ALQABgEAEgBQADgBAEABQAHAAACAFQABAHgGAFIgGACQgDAAgDgCg");
	this.shape_382.setTransform(99.1,-164.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.7,0,11.7,0).s().p("AhpApQgOgLAEgQQADgOAOgBQAKgCAHADQAIAEADAJICLgeQgBgJAFgHQAGgIAJgCQAOgDAJAMQAKAMgHAQQgLALgPgDQgNgCgFgMIiLAdQACAOgLAIQgGAFgIAAQgGAAgHgDg");
	this.shape_383.setTransform(49,-56.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.8,0,3.9,0).s().p("AATAoQgGgIAHgHIgogwQgDACgEAAQgFgBgCgDQgFgFADgGQADgHAIAAQAIACACAGQABAGgEAFIAnAwQAFgDAGACQAGADAAAIQgCAIgGABIgDABQgFAAgDgEg");
	this.shape_384.setTransform(-107,-61.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("ABDA0QgJgKAEgNIh9g1QgGAMgNAAQgOAAgIgOQgFgRAMgJQALgKAMAGQAJAEADAIQAEAIgDAIIB9A1QAEgHAIgDQAJgDAIADQANAGAAAOQABAPgPAIIgIABQgKAAgHgHg");
	this.shape_385.setTransform(190.5,-3.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AgkAVQgGgDABgGQAAgGAFgCQAEgBADABQADABACAEIAxgSQgDgIAIgDQAFgCAEAEQAFAEgCAGQgDAGgGgBQgFAAgDgFIgxASQACAFgEAEQgDADgEAAIgDgBg");
	this.shape_386.setTransform(87.2,-81.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.7,0).s().p("AAYBMQgKgGgBgKQAAgJAIgGIgshYQgJAEgIgGQgIgGACgMQAGgLALgBQAKAAAFAJQACAGgBAGQgCAHgFADIAsBYQAGgCAGACQAGACADAGQAEAJgGAIQgFAHgJAAIgFAAg");
	this.shape_387.setTransform(169.9,138);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.1,0,5.2,0).s().p("AguAbQgGgFACgIQAEgHAHAAQAGAAAEAGIA7gbQgDgGAFgFQAEgFAIACQAHAEAAAHQAAAHgGADQgKAEgEgJIg8AbQACAEgCADQgBAEgEACIgFACQgEAAgDgDg");
	this.shape_388.setTransform(124.1,77.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2.1,0).s().p("AgDBZQgKgEgBgMQAAgHAEgFQAFgFAFgBIgChsQgHgBgFgEQgFgFAAgHQgBgMAKgFQAKgGAKAIQAIAKgEALQgEAKgKABIADBsQALABAFAJQAEAKgHAKQgHAGgHAAQgCAAgDgCg");
	this.shape_389.setTransform(67.2,179.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.3,0).s().p("Ag3BpQgKgMAGgOQAEgIAIgEQAJgEAJADIA3iGQgIgEgDgJQgDgJAEgIQAGgOAPgBQAPgBAJAQQAEARgLAKQgKAKgNgFIg4CGQAMAHAAAOQABAPgPAIIgJACQgMAAgHgJg");
	this.shape_390.setTransform(106.5,18.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.9,0,11,0).s().p("AA2ByQgHgJAAgMQABgMAIgIIh1iNQgKAHgLgBQgMgCgHgJQgMgPAHgRQAIgSAXgBQAVAFAFASQAFARgMANIB1CMQAOgKAQAIQARAIABAWQgFAWgTAFIgIABQgNAAgKgLg");
	this.shape_391.setTransform(-25.4,-64.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AgPBTQgJgGABgKQABgHAFgEQAEgFAHAAIAKhmQgFgCgEgFQgEgGABgGQABgLAIgDQALgEAJAJQAGAKgFAJQgFAJgKAAIgKBnQAIACADAJQAEAKgJAJQgEAEgFAAQgFAAgEgDg");
	this.shape_392.setTransform(172.4,13.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.8,0,6.9,0).s().p("AAhCTQgTgDgFgSQgEgLAFgLQAFgLAKgEIg3iuQgMACgKgGQgKgGgEgLQgFgSANgNQAOgOAWAIQASAMgCATQgCASgQAHIA3CuQARgEAMANQANAOgHAVQgLAQgRAAIgFAAg");
	this.shape_393.setTransform(173.7,-28.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.3,0,1.3,0).s().p("AgKAsQgDgGADgFQACgFAGAAIADg3QgDgBgCgGQgCgFAFgFQAEgEAFADQAFADgBAGQAAAEgDACQgCADgEAAIgDA3QAGACgBAJQAAAGgFACIgCAAQgEAAgEgDg");
	this.shape_394.setTransform(17.1,123.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AgJCVQgPgSAGgRQAGgRAQgDIgNi6QgSAAgJgQQgJgRAMgTQARgQARAIQASAHABAUQABALgHAKQgIAJgJACIANC6QAMABAJAHQAJAJAAAMQACATgRAKQgHAEgIAAQgKAAgJgGg");
	this.shape_395.setTransform(24.2,118.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.3,0).s().p("AhLBBQgOgFgCgOQgCgNAMgGQAGgFAIACQAIABAFAHIBqhCQgDgHACgIQACgIAHgEQALgHALAHQAMAHgCAQQgFAOgNACQgMABgIgKIhqBCQAFALgGAKQgHAJgLAAIgEAAg");
	this.shape_396.setTransform(119.8,140.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AgfAjQgCgGADgFQAFgGAIAEIAhgtQgGgGAFgHQAEgFAGACQAGABACAHQAAAHgFACQgFADgFgDIgiAtQAFAEgCAGQgBAFgHACQgHAAgDgFg");
	this.shape_397.setTransform(98.3,18.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.5,0,10.6,0).s().p("ABCA1QgJgKAFgNIh8g3QgHAMgNAAQgNAAgIgPQgEgQALgKQALgJANAGQAIAEAEAIQADAIgDAIIB8A3QAEgHAIgDQAJgCAIADQAMAGABAOQAAAPgPAIIgIAAQgKAAgHgHg");
	this.shape_398.setTransform(117.6,147);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.7,0,2.8,0).s().p("AgYAsQgEgFADgGQAEgIAJACIAYg2QgIgFADgIQADgGAGAAQAHAAAEAGQABAHgFAFQgEAEgGgCIgYA2QAFADAAAGQAAAHgGADIgEAAQgEAAgEgDg");
	this.shape_399.setTransform(-96.8,38.8);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AAeAHQgEgCgBgFIgxAAQgBAFgEACQgFACgFgDQgDgFACgDQADgFAEAAQAIAAABAHIAxAAQABgHAIAAQAFAAACAFQADADgFAFQgCACgDAAIgEgBg");
	this.shape_400.setTransform(67.2,-4.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AgnAjQgCgGAFgFQAHgHAHAGIArguQgDgDAAgEQAAgFADgDQAFgFAGACQAHACABAIQgBAIgGACQgGADgFgEIgqAuQAEAFgCAGQgCAGgIABQgIAAgDgHg");
	this.shape_401.setTransform(-139.9,-126.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5,0).s().p("AgrCQQgLgUALgQQAJgPATABIAai7QgQgFgFgRQgFgTAPgQQATgLARAMQAQALgDATQgCAMgJAIQgJAIgMgBIgaC6QAJADAHAKQAHAKgCAMQgDAUgRAGQgFABgFAAQgOAAgLgMg");
	this.shape_402.setTransform(-118.8,-45.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14,0,14.1,0).s().p("ABaA/QgNgMAFgQIilg/QgIAPgRABQgSABgLgSQgGgVAOgNQANgMARAGQALAEAFALQAFAKgDALIClA+QAFgKALgEQAKgEALAEQARAGACATQACATgTAMQgGABgGAAQgMAAgJgJg");
	this.shape_403.setTransform(72.4,-47.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("AhmAQQgHgMAJgMQALgJANAEQALAEACALIB/gGQAAgNALgGQAMgGAMAJQALAMgGAKQgFAMgNABQgIABgGgFQgHgFgBgGIh/AGQAAAIgGAGQgFAGgIAAIgCAAQgMAAgGgKg");
	this.shape_404.setTransform(180.4,29);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AAMA1QgHgBgCgGQgCgEACgEQACgEAEgCIgTg+QgKACgDgKQgCgGAFgFQAFgFAIACQAGAFgBAHQAAAGgGADIATA+QAGgBAFAFQAEAFgCAHQgEAGgGAAIgCAAg");
	this.shape_405.setTransform(-161,48.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AgnANQgFgFACgGQABgDAGgBQAIgBACAGIAzgGQAAgEACgCQACgDAEgBQAFgBADAFQAEAFgDAEQgFAEgFgBQgFgCgBgDIg0AHQAAAFgEADQgBAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgFgBg");
	this.shape_406.setTransform(26.4,103);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AgeCQQgMgTAJgQQAIgQASgBIAJi4QgQgDgGgQQgHgSAPgQQAQgNASAKQAQAJgBATQAAAMgJAIQgJAIgLABIgJC4QAJACAIAJQAIAJgBAMQgBATgSAHQgEADgGAAQgMAAgMgKg");
	this.shape_407.setTransform(-39.7,-6.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.6,0,1.6,0).s().p("AgOAmQgCgFADgFQADgEAFABIAJgyQgEgBAAgFQgBgFADgEQAGgDAEADQAEAEgBAFQgCAIgHgBIgJAxQAFADgCAHQAAAGgEABIgCABQgEAAgEgFg");
	this.shape_408.setTransform(-192.2,76);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.lf(["#34FFFD","#267AB3"],[0,1],-0.8,0,0.9,0).s().p("AgDAoQgEgDAAgFQAAgHAHgBIAAgvQgGgBAAgHQAAgFAFgDQADgCAEAEQAEAFgCAEQgCAEgFABIgBAvQAFABABAEQACAFgDAFQgDACgCAAIgDgBg");
	this.shape_409.setTransform(30.6,41.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.1,0,12.2,0).s().p("ABCBvQgIgIgBgNQAAgMAHgJIiEiFQgKAIgMgBQgMAAgIgJQgOgOAGgSQAGgTAYgDQAWADAHASQAGARgLAOICFCFQAOgMARAHQASAHADAWQgDAXgTAHQgGACgFAAQgMAAgKgKg");
	this.shape_410.setTransform(88.8,156.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.7,0).s().p("AAABLQgGgIADgJQACgJAHgCIgOhcQgJAAgFgHQgGgIAFgKQAIgJAKADQAIADABAJQABAGgDAFQgCAFgFACIAOBcQAGAAAFAEQAFADAAAGQACAKgIAGQgEADgFAAQgEAAgGgDg");
	this.shape_411.setTransform(69.2,75.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.7,0).s().p("AAcABIg3gBQgBAIgIAAQgGAAgDgFQgCgDAEgGQAGgEAFACQAFADAAAFIA3AAQABgFAFgCQAFgCAGAEQAEAFgDAEQgDAFgFAAQgJAAgBgIg");
	this.shape_412.setTransform(-50.7,223.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AgSBhQgIgMAFgLQAFgLANgBIADh7QgKgCgEgLQgFgMAKgLQAKgJAMAGQAMAGgBANQAAAIgGAGQgGAFgIABIgEB7QAHABAFAHQAFAGgBAIQAAANgMAFQgEACgDAAQgIAAgHgHg");
	this.shape_413.setTransform(10.8,204.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AAdAbQgHgEADgJIgygaQgCADgEABQgDABgEgCQgFgCAAgHQAAgGAHgDQAHgBAEAFQADAEgCAFIAyAbQADgFAGABQAGAAADAGQABAIgFADQgDACgDAAIgFgBg");
	this.shape_414.setTransform(57,-165.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4,0).s().p("AgjANQgEgFABgFQABgDAFAAQAHgCACAFIAvgHQgBgHAHgCQAFgBADAFQADAEgCAFQgEADgFgCQgFgBgBgCIguAHQAAAFgEACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgEgBg");
	this.shape_415.setTransform(39.8,193.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("AhoBTQgFgQAMgMQAIgHAKAAQAKgBAIAHIB2hwQgHgIABgKQABgLAHgHQAMgMAQAGQARAHACAUQgDATgQAFQgPAGgMgLIh1BwQAKAMgGAPQgHAPgTADQgUgDgFgRg");
	this.shape_416.setTransform(27.1,-98.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.7,0,14.8,0).s().p("AiJA+QgOgPAHgVQANgTATACQARACAIAQICug7QgEgRANgMQANgNAVAGQATANgCAUQgDATgSAGQgLAEgLgFQgKgFgFgKIiuA7QACALgFAKQgGALgLAEQgGACgFAAQgMAAgJgJg");
	this.shape_417.setTransform(-11.7,110.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.9,0,12,0).s().p("ABYAxQgJgCgFgIQgFgIACgKIiOglQgDAIgJAFQgIADgJgBQgPgEgDgPQgDgQAPgLQAQgGAMAJQALAJgDAOICOAmQAFgNAOgDQAPgBALANQAHARgLAMQgIAIgKAAIgHgBg");
	this.shape_418.setTransform(132.2,115.3);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AAfAJQgFgDAAgFIgzgBQgBAEgEACQgFACgFgEQgEgEADgEQADgFAFAAQAIABAAAIIAzAAQAAgCADgCQACgCAEAAQAFAAACAFQADADgFAFQgDADgDAAIgDgBg");
	this.shape_419.setTransform(-33.7,144.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.4,0,6.4,0).s().p("Ag1CKQgOgNAGgSQADgLAKgGQAKgGALACIAxitQgKgFgFgKQgGgLAEgLQAFgSATgDQATgDANASQAIAUgMAOQgMANgRgDIgxCuQAQAGACASQADASgRANQgJADgHAAQgLAAgJgIg");
	this.shape_420.setTransform(117.6,-22.3);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.1,0,8.1,0).s().p("ABAATQgGAAgFgFQgEgEgBgGIhggEQAAAFgFAEQgFAEgGAAQgKgBgEgJQgFgIAIgJQAKgGAJAEQAIAEAAAKIBhADQABgIAJgDQAJgEAJAHQAHAIgFAKQgFAIgIAAIgCAAg");
	this.shape_421.setTransform(184.7,69.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5,0).s().p("AgoAiQgIgDgBgHQAAgHAGgEQAEgCAEABQAEABADADIA4ghQgCgDACgFQABgEAEgCQAGgEAFAEQAGAEAAAJQgDAHgHABQgHAAgEgFIg4AhQADAGgEAFQgEAFgGAAIgCAAg");
	this.shape_422.setTransform(95.1,100.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.2,0,8.2,0).s().p("AhNAXQgHgJAGgLQAIgHAKADQAJABADAIIBhgTQgBgJAIgGQAIgGALAFQAJAJgDAKQgCAIgKACQgHABgFgDQgGgBgCgGIhhASQABAGgEAFQgDAGgHABIgEABQgHAAgFgHg");
	this.shape_423.setTransform(-99.8,-101.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AAXAgQgCgGADgFIgxgoQgEAFgGgCQgGgCgCgHQAAgIAHgDQAGgDAFAEQAHAGgFAIIAwApQADgDAFgBQAEAAADADQAFAEgBAHQgCAGgIACQgIAAgDgGg");
	this.shape_424.setTransform(31.7,147.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.5,0,13.5,0).s().p("ABXA5QgMgLAEgQIifg2QgHAOgQACQgSABgLgQQgGgUANgNQAMgNARAGQAKAEAFAKQAFAJgCAKICfA3QAEgJAKgFQAKgEALADQAQAGACASQACASgRALQgHACgFAAQgMAAgIgIg");
	this.shape_425.setTransform(-109.1,-171.2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6.1,0).s().p("AgpBXQgMgBgGgOQgBgOAKgHQAJgGAKAFIA8hlQgJgHABgLQABgMANgFQAPgCAHALQAHAKgHALQgEAGgHACQgHADgHgEIg7BlQAGAEABAIQACAHgEAHQgGAJgLAAIgCAAg");
	this.shape_426.setTransform(86.6,-38.3);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.5,0,1.5,0).s().p("AAAA2QgFgDAAgGQgBgEADgEQADgDACgBIgFhBQgEAAgDgCQgDgDgBgFQAAgGAGgEQAGgEAFAFQAFAFgCAHQgCAGgFABIAFBBQAGAAADAFQAEAGgFAHQgEAEgEAAIgEgBg");
	this.shape_427.setTransform(49.3,-188.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,4,0).s().p("AggAZQgGgDAAgGQAAgFAFgDQAGgDAFAGIAsgWQgCgIAGgDQAFgDAEADQAFAEgBAGQgDAGgFAAQgFAAgDgEIgsAXQACAEgDAEQgDAEgGAAIgBAAg");
	this.shape_428.setTransform(-81.6,138.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.3,0).s().p("AApAnQgEgCgCgGQgCgFACgEIhHgoQgDAEgFACQgFABgFgDQgIgEABgJQAAgJAKgEQAKgBAFAHQAEAGgDAIIBIAnQAEgGAIAAQAJABAEAJQABALgHAFQgEACgEAAQgDAAgEgCg");
	this.shape_429.setTransform(181.4,128.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.8,0,1.9,0).s().p("AgOBDQgGgIAFgIQADgHAJgBIAEhVQgGgBgDgIQgDgJAHgIQAHgFAIAEQAIAFgBAJQAAAFgEAEQgEAEgGAAIgEBWQADABAEAEQADAEAAAGQgBAJgIADIgDABQgGAAgGgFg");
	this.shape_430.setTransform(71.4,10.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AgXAqQgCgHAEgEQAFgEAGABIATg3QgEgDgBgGQAAgGAGgEQAHgCAEAFQAFAEgCAGQgDAJgKgDIgTA4QAHAEgDAJQgCAGgHAAIAAAAQgGAAgEgGg");
	this.shape_431.setTransform(191.9,6.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.7,0).s().p("AArAbQgGgFACgIIhNgZQgEAHgIABQgIABgGgIQgDgKAGgGQAGgGAIADQAFABADAFQACAEgBAGIBOAYQACgEAFgCQAFgDAFACQAIADABAIQABAJgJAGIgGABQgFAAgEgEg");
	this.shape_432.setTransform(-23.4,-186.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.5,0,10.5,0).s().p("AA6BfQgHgHgBgLQgBgKAHgIIh0hwQgHAHgLgBQgKAAgIgHQgMgMAGgQQAFgQAUgDQATACAGAQQAGAOgKAMIB0BwQAMgKAOAFQAQAGADATQgCAUgRAGQgFABgFAAQgKAAgIgHg");
	this.shape_433.setTransform(79.8,-138.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,3.9,0).s().p("AgjAQQgEgDACgGQADgFAFABQAFAAACAEIAtgPQgBgEADgDQAEgEAFACQAFADAAAFQgBAFgFACQgHACgDgGIgtAPQACAHgHACIgCABQgDAAgDgDg");
	this.shape_434.setTransform(-84.8,120.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AAOBcQgLgJABgLQABgLALgFIgihuQgLACgHgIQgIgJAEgNQAJgMAMABQAMACAEAMQACAHgDAHQgDAHgHACIAhBvQAHgCAHAEQAHAEACAHQADAMgIAIQgGAGgIAAQgEAAgFgCg");
	this.shape_435.setTransform(92.5,72.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.6,0,1.6,0).s().p("AgLArQgEgEABgFQABgJAIABIAJg0QgGgCABgIQABgGAEgBQAFgCAFAFQADAGgDAFQgDAEgGgBIgIA1QADABABAFQACAGgDAEQgDACgDAAQgCAAgDgCg");
	this.shape_436.setTransform(-83.3,-119.3);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.3,0).s().p("AhIBjQgQgEgDgSQACgSAOgGQANgGAMAIIBjhvQgKgLAEgOQAFgPARgDQATABAGAPQAGAPgKALQgHAHgJABQgKABgIgFIhjBvQAHAHAAAKQAAAKgGAHQgIAIgKAAIgIgBg");
	this.shape_437.setTransform(32.4,158.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.4,0,13.5,0).s().p("ABfBGQgLgEgEgKQgFgKAEgLIifhAQgFAJgLAEQgKAEgKgEQgRgHgBgSQgBgSATgLQAUgFAMANQALAMgFAQICeBAQAJgOAQgBQASAAAKARQAGAVgPAMQgIAHgKAAQgGAAgFgCg");
	this.shape_438.setTransform(45.4,214.4);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.4,0).s().p("AAYAeQgDgGADgFIgxgjQgEAFgFgCQgHgBgCgHQAAgIAGgDQAGgDAFAEQAHAFgEAIIAwAjQAHgGAHAFQAFAEgBAGQgBAHgHACIgBAAQgHAAgDgFg");
	this.shape_439.setTransform(137.1,169.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.4,0,8.4,0).s().p("AhCBYQgOgEgDgQQACgQANgGQAMgFAKAIIBbhjQgJgKAEgMQAEgNAQgDQARABAFAOQAFANgJAKQgGAHgJAAQgIABgHgFIhbBjQAGAGAAAJQAAAIgGAHQgHAHgJAAIgHgBg");
	this.shape_440.setTransform(111.3,-84.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.7,0).s().p("AgYAhQgCgEACgFQAEgHAHAEIAagqQgGgFADgGQADgFAGABQAFABACAFQABAHgFACQgEAEgEgDIgZApQAEADgBAFQgBAGgGACIgBAAQgFAAgDgEg");
	this.shape_441.setTransform(188.1,23.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6.1,0).s().p("AgsBNQgLgCgEgNQAAgNAJgGQAJgFAJAFIA+hXQgIgHACgLQADgKAMgEQANgBAGAKQAFAKgGAKQgEAFgHACQgHABgGgDIg+BXQAGAFAAAGQABAHgEAGQgFAIgKAAIgDAAg");
	this.shape_442.setTransform(-96.7,52.3);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.8,0).s().p("AAgAPQgFgDABgGIg3gKQgCAEgFABQgGABgFgDQgDgHAEgEQAEgFAFABQAJACgBAJIA3AKQADgGAIABQAGAAACAFQABAGgFAFIgGABQgDAAgCgCg");
	this.shape_443.setTransform(71.8,3.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AANAxQgGgBgDgGQgDgIAIgFIgTg5QgJACgEgIQgCgGAFgFQAFgFAHACQAGAEAAAHQgBAGgFACIATA6QAGgCAEAFQAFAEgCAHQgEAGgGAAIgBAAg");
	this.shape_444.setTransform(152,173);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.8,0,1.9,0).s().p("AgBA8QgGgGACgIQADgHAFgBIgHhKQgHAAgEgHQgEgGAEgIQAHgHAIADQAFADABAIQABAFgDAEQgDAEgDAAIAHBLQAFgBAEAEQADADABAFQABAHgHAFQgDACgDAAQgEAAgDgDg");
	this.shape_445.setTransform(53.6,187.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3,0,3,0).s().p("AgaA0QgEgFACgHQACgEAEgCQAFgCAEABIAZhCQgEgCgBgEQgCgEACgFQACgHAIAAQAIgBAEAIQADAIgFAFQgFAFgHgCIgaBCQAGADABAHQAAAHgIAFIgFAAQgFAAgEgEg");
	this.shape_446.setTransform(15.1,221.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.2,0).s().p("AAZAZQgEgEADgFIgwgdQgDAFgFgBQgGgBgDgGQAAgHAFgEQAFgDAFADQAHAFgEAIIAwAcQAFgHAHAFQAFADAAAGQgBAGgHACIgBAAQgGAAgCgEg");
	this.shape_447.setTransform(120.9,-1.1);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2.1,0).s().p("AgTApQgCgHAEgEQAEgEAFABIAPg1QgFgCgBgGQgBgGAGgEQAHgCAEAEQAEAEgBAGQgBADgEACQgDACgDgBIgPA1QAGAEgBAIQgCAGgFABIgCAAQgFAAgEgFg");
	this.shape_448.setTransform(-185.4,73.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.1,0,9.1,0).s().p("AAwBXQgHgHAAgJQAAgJAGgHIhihpQgHAFgKAAQgJgBgGgHQgLgLAGgOQAFgOASgCQARADAFAOQAFANgKALIBjBpQALgJANAFQAOAGACARQgDASgQAFIgHABQgKAAgHgIg");
	this.shape_449.setTransform(13.2,174.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AgYCWQgRgKACgTQABgMAIgIQAJgIAMAAIANi5QgKgCgHgJQgHgKAAgLQACgUASgHQAQgHARAPQAMATgJARQgIAPgSABIgNC4QAPADAGARQAGASgOAQQgKAHgJAAQgIAAgHgEg");
	this.shape_450.setTransform(113.2,112.4);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AgXAkQgBgHAEgDQAEgEAFACIAWgwQgFgDABgFQAAgFAGgDQAGgCAEAFQADAFgCAFQgEAHgHgDIgXAwQAHAEgDAHQgDAFgFAAIgBAAQgGAAgCgFg");
	this.shape_451.setTransform(106,-152.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.7,0).s().p("AgZAlQgBgHAEgDQAEgEAGACIAXgyQgEgDAAgGQAAgGAGgDQAHgBAEAFQAEAEgDAGQgEAIgIgEIgYAzQADACABADQACAEgCADQgDAGgGAAQgGAAgDgHg");
	this.shape_452.setTransform(-91.9,-64.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.5,0,5.5,0).s().p("AAjBbQgNAAgFgLQgEgGADgIQACgHAGgEIgzhqQgHACgHgCQgHgDgEgHQgFgLAHgKQAIgKAPADQAMAGABAMQAAAMgKAGIA0BqQAKgEAJAHQAKAIgDAOQgGANgMAAIgBAAg");
	this.shape_453.setTransform(71.2,-132.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.9,0,13.9,0).s().p("ABuAgQgLgBgIgHQgHgIgBgKIimgGQgBAJgIAHQgIAHgLgBQgRgBgHgPQgIgPAOgQQAQgLAQAIQAOAHABAQICmAGQACgOAPgGQAQgHAPANQAMAPgJAPQgIAPgPAAIgCAAg");
	this.shape_454.setTransform(19.9,211.7);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.9,0,4.9,0).s().p("AgtA9QgFgIAFgIQADgFAGgCQAFgCAGADIAwhOQgFgEgBgGQgBgGADgFQAFgIAKABQAKABAEALQABALgIAFQgHAFgJgEIgwBPQAHAFgBAJQgBAJgLAEIgCAAQgKAAgEgHg");
	this.shape_455.setTransform(-4.1,-69.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AAVApQgGgIAGgHIgrgxQgIAGgHgIQgFgFADgGQACgHAJgBQAIACACAGQACAGgFAFIAsAxQAFgEAGADQAHADAAAIQgBAIgHACIgDABQgFAAgEgEg");
	this.shape_456.setTransform(65.7,207.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.1,0,6.2,0).s().p("Ag1AfQgIgFABgIQAAgIAIgDQAFgCAEACQAFACACAEIBIgbQgBgFACgEQACgFAFgCQAHgDAGAGQAHAFgDAKQgFAIgIgBQgIAAgDgHIhIAbQACAIgFAFQgEAEgGAAIgFgBg");
	this.shape_457.setTransform(-4.4,-76.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10,0,10.1,0).s().p("ABABGQgIgFgCgIQgCgJAEgIIhyhLQgGAHgJABQgIABgIgFQgMgIACgOQACgOARgGQAQgBAHAMQAIALgHAMIBzBMQAIgLANADQAOACAGAPQABASgNAHQgGADgFAAQgHAAgGgEg");
	this.shape_458.setTransform(-11.8,-83);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.7,0,8.8,0).s().p("AhWA5QgCgNAKgIQAGgFAIABQAIAAAGAGIBihOQgEgGABgIQABgIAHgGQAKgIAMAGQAMAFAAAQQgDAPgNADQgMADgIgJIhjBOQAHAKgGALQgGALgPABQgPgEgDgNg");
	this.shape_459.setTransform(147.5,159.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.5,0,13.6,0).s().p("AhwBZQgVgIgBgUQgBgTAQgJQAKgGALADQALACAHAKICdhYQgEgLADgLQAEgLAKgGQAQgJAQALQAQALgDAWQgJATgSACQgSACgKgOIidBYQAHAQgKAOQgJANgQAAIgHgBg");
	this.shape_460.setTransform(-86.4,164);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.9,0,10.9,0).s().p("AhVB1QgTgFgEgWQACgVAQgHQAQgIAOALIB1iEQgLgMAFgQQAGgSAUgEQAWACAHASQAHARgMANQgIAJgLABQgLABgJgHIh2CEQAIAIAAALQAAAMgIAIQgJAKgLAAIgJgBg");
	this.shape_461.setTransform(44.3,80.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.lf(["#34FFFD","#267AB3"],[0,1],-15.6,0,15.6,0).s().p("AB3AzQgMgCgHgJQgIgKABgMIi6gdQgDALgKAGQgKAGgNgCQgTgDgFgRQgGgTARgQQAUgLAQALQAPAKgBASIC6AdQAFgPARgFQATgFAQAOQALAVgMARQgKANgPAAIgGgBg");
	this.shape_462.setTransform(-116,-142.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.1,0,1.2,0).s().p("AgDA4QgHgDAAgHQAAgFADgDQADgDAEgBIAAhDQgKgBAAgKQgBgHAHgDQAEgEAHAFQAFAHgDAGQgCAGgHABIAABDQAHABADAGQADAGgFAHQgEADgEAAIgDgBg");
	this.shape_463.setTransform(78.8,202.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.1,0,10.2,0).s().p("AhTBJQgQgGgBgPQgCgPAMgHQAIgFAIACQAJABAGAHIB0hJQgEgIACgJQADgIAHgFQANgIAMAIQANAIgCARQgFAPgPACQgNACgIgLIh1BKQAGAMgHALQgIALgOAAIgDAAg");
	this.shape_464.setTransform(172.3,25.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AgVAnQgEgFADgFQADgHAIACIAVgwQgHgFAEgHQACgFAGAAQAGAAADAGQABAGgEAEQgEADgFgCIgVAxQAEADAAAFQAAAGgGADIgDAAQgFAAgCgDg");
	this.shape_465.setTransform(96.5,136);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AghBSQgFgMAHgJQAHgJAKACIAahsQgLgEgBgKQAAgLAIgJQANgGAJAIQAJAIgDALQgCAHgGAEQgGAEgHgBIgZBsQAHACADAGQABAHgBAHQgCALgLACIgFABQgJAAgGgJg");
	this.shape_466.setTransform(50.1,-144.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.5,0).s().p("AgpAGQgEgGACgDQADgFAFAAQAIAAABAIIA1AAQABgIAIAAQAFAAADAFQACADgEAGQgFADgFgCQgFgCAAgFIg1AAQAAAFgFADIgDABQgEAAgDgDg");
	this.shape_467.setTransform(-174.4,27.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AAQAsQgCgDAAgFQABgEADgDIglg3QgJAEgGgIQgEgGAEgGQAEgHAIABQAIADABAGQABAHgFAEIAlA4QAGgDAGADQAGAEgBAIQgCAIgIABIgCAAQgGAAgDgFg");
	this.shape_468.setTransform(-57.1,216.7);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.3,0,2.4,0).s().p("AgUBCQgFgKAFgHQAFgHAIABIAMhVQgGgCgCgIQgCgJAFgHQAKgFAHAFQAHAGgBAIQgBAGgEADQgFAEgFgBIgMBVQAEABACAFQADAFgBAFQgBAJgHADIgEABQgHAAgFgGg");
	this.shape_469.setTransform(188.1,39);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.7,0).s().p("Ag8AVQgHgHACgIQADgHAIgBQAFgBAEADQAFABABAFIBPgNQgBgFADgEQAEgFAFAAQAIgCAFAHQAFAHgFAJQgGAFgIgCQgIgCgCgGIhOANQAAAIgGAFQgEACgEAAQgEAAgEgCg");
	this.shape_470.setTransform(-190.8,85);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AglALQgEgEACgFQABgDAFgBQAIgBACAFIAwgFQgBgIAIgBQAFgBADAFQADAEgDAEQgEAEgFgBQgFgCgBgCIgwAFQAAAFgEACQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgFgCg");
	this.shape_471.setTransform(64.7,124.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("Ag5CAQgTgBgIgUQgDgUAOgKQAOgKAPAHIBUiVQgOgKACgQQACgRASgJQAVgDALAQQAKAOgJAQQgFAJgLAEQgKADgKgEIhUCUQAJAHACAKQADALgGAKQgIAOgQAAIgCAAg");
	this.shape_472.setTransform(127.2,-91.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.6,0,1.7,0).s().p("AgLAzQgFgEABgHQABgJAKAAIAHg+QgHgCABgKQABgGAEgCQAHgDAGAGQADAHgDAFQgDAGgHgBIgHA/QAEABACAGQACAGgGAGQgBACgEAAQgDAAgDgCg");
	this.shape_473.setTransform(140.7,59.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.7,0,7.7,0).s().p("AhHAfQgHgHADgMQAHgJAKABQAJABAEAIIBagdQgCgJAHgGQAHgHALAEQAKAGgBALQgCAKgJADQgGACgGgDQgGgDgCgFIhaAdQABAGgDAGQgDAFgGACIgFABQgGAAgFgFg");
	this.shape_474.setTransform(56.1,100);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.9,0,2.9,0).s().p("AgVBNQgIgGACgKQABgGAFgEQAFgDAHAAIARhgQgGgBgCgGQgDgFACgGQABgKAJgDQAKgDAIAKQAFAKgGAIQgFAIgKgBIgRBgQAHADACAJQACAJgHAIQgFADgFAAQgFAAgEgEg");
	this.shape_475.setTransform(-17.5,36.6);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2.1,0).s().p("AAAA8QgEgGACgIQACgHAFgCIgLhIQgHAAgEgGQgEgGAEgIQAGgHAIACQAGADABAHQABAFgDAEQgCAEgDABIAKBJQAFgBAEADQAEADAAAFQABAIgGAEQgDADgEAAQgEAAgEgCg");
	this.shape_476.setTransform(-67.8,-15.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.5,0,12.6,0).s().p("ABVAqQgMgJACgPIiVgfQgFANgOACQgPADgMgLQgJgRALgNQAKgNAPAEQAKACAFAIQAGAIgBAJICVAfQADgJAIgEQAJgEAJACQAQACADAPQAEAQgOAMQgIAEgGAAQgIAAgHgFg");
	this.shape_477.setTransform(86.3,179.2);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.7,0).s().p("AgwAfQgIgFABgHQAAgIAHgDQAEgCAFACQAEABACAEIBCgbQgBgFACgEQABgEAFgCQAGgDAGAFQAGAFgCAIQgEAIgIAAQgHAAgDgGIhCAbQADAHgFAFQgEAEgGAAIgEAAg");
	this.shape_478.setTransform(-41.3,-217.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.5,0,3.5,0).s().p("AgKCGQgNgQAGgQQAFgPAPgDIgJioQgRAAgHgPQgIgPALgQQAQgOAOAHQARAGABASQAAALgHAIQgGAIgJACIAJCoQALAAAHAIQAIAHABALQABASgPAIQgHAEgHAAQgIAAgJgGg");
	this.shape_479.setTransform(-135.7,-61.6);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.2,0,8.3,0).s().p("AA8AmQgHgCgDgGQgDgGABgGIhgggQgDAGgGADQgGADgGgCQgKgEgCgKQgBgLAKgHQAMgEAIAHQAHAHgCAJIBgAgQAFgJAKgBQAKgCAHALQAEAMgIAHQgFAGgHAAIgFgBg");
	this.shape_480.setTransform(129.1,158.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.5,0,7.6,0).s().p("AhICDQgGgVANgOQANgNARAFIBBiwQgQgIgCgSQgBgUATgMQAXgHAOAPQANAPgHASQgEALgLAFQgLAGgLgDIhBCwQALAFAEALQAFALgEAMQgHASgUACIgDAAQgSAAgLgSg");
	this.shape_481.setTransform(47.9,178);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.3,0,10.4,0).s().p("AA+A7QgIgKAFgNIh3hEQgIALgOgBQgOgBgGgPQgDgRANgJQAMgIAMAHQAIAFADAIQADAJgEAIIB4BDQAFgHAIgCQAJgCAIAFQAMAHgBAOQgBAPgQAHIgEAAQgNAAgHgKg");
	this.shape_482.setTransform(167.3,33.4);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.5,0).s().p("Ag7A5QgMgEgCgLQgBgKAIgHQAGgDAHAAQAGABAEAGIBVg7QgEgGACgGQABgHAGgEQAIgHAKAGQAKAFgBANQgDAMgLACQgKACgGgIIhVA7QAFAKgFAIQgFAJgMAAIgBgBg");
	this.shape_483.setTransform(44.8,-180);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.3,0,11.3,0).s().p("ABYAdQgIgBgGgGQgGgHAAgIIiHgJQgCAHgGAFQgHAGgJgBQgOgBgFgNQgGgMAMgMQANgJAMAHQAMAGAAANICHAIQACgLANgEQANgFAMALQAJAMgHAMQgHAMgNAAIgCAAg");
	this.shape_484.setTransform(-22.5,-138.6);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.9,0,2,0).s().p("AgMBCQgHgEABgJQAAgFAEgDQAEgEAFAAIAHhRQgDgBgDgFQgDgEAAgFQABgJAGgDQAJgDAHAHQAFAJgEAHQgEAHgIAAIgHBRQAGACACAIQADAIgHAHQgCADgEAAQgEAAgEgDg");
	this.shape_485.setTransform(46,225.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.8,0,10.8,0).s().p("AA/BZQgIgHgBgKQgBgKAGgIIh5hmQgHAHgKABQgKAAgIgGQgNgLAEgQQAEgRATgEQATABAHAPQAHAOgJAMIB5BmQALgLAPAEQAPAFAEASQAAAUgQAHQgGACgFAAQgJAAgIgGg");
	this.shape_486.setTransform(2,-6.3);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AAXAcQgDgCAAgDQgBgEACgDIgqgfQgCADgEAAQgDABgDgDQgEgDABgFQABgGAHgCQAGAAADAFQACAFgDAEIAqAfQADgEAGABQAFACACAGQAAAHgFACIgFACQgDAAgCgDg");
	this.shape_487.setTransform(-59,-80.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4,0).s().p("AgXCZQgRgKABgTQABgMAJgJQAJgIAMAAIALi9QgKgCgHgJQgIgJABgNQABgTASgHQARgIASAPQAMATgJARQgJAQgSABIgLC8QAQADAGARQAGASgOARQgLAHgIAAQgIAAgIgEg");
	this.shape_488.setTransform(-95.3,-129);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.5,0).s().p("AhIBAQgEgMAIgJQAFgFAIgBQAIAAAGAEIBQhVQgFgFAAgIQAAgIAFgFQAJgJAMADQAMAEACAPQgCAOgLAEQgKAFgJgHIhRBVQAIAJgEAKQgEAMgOACQgOgBgFgMg");
	this.shape_489.setTransform(131.5,103);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("AAmAzQgFgEgBgGQgBgGAEgFIhHg5QgKAKgLgIQgHgHACgJQACgKALgCQALAAAFAJQAEAIgFAHIBGA5QAHgHAIADQAJACADALQAAALgJAFQgDABgEAAQgFAAgEgDg");
	this.shape_490.setTransform(-136.5,101.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.3,0,2.3,0).s().p("AgMBlQgJgMAFgMQAFgMALgBIgCh/QgMgBgFgLQgGgMAJgMQAMgKALAGQAMAGAAANQAAAIgFAGQgFAGgJABIADB/QAIABAGAFQAGAGAAAIQAAAOgMAGQgFACgFAAQgFAAgIgFg");
	this.shape_491.setTransform(135.7,132.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.8,0,6.9,0).s().p("Ag/BeQgIgMAHgMQAFgIAIgDQAIgDAJAEIBCh5QgHgGgDgIQgCgJAFgIQAHgMAOAAQAPABAHAQQACAQgLAJQgLAIgMgFIhCB5QALAIgBANQgCAOgPAHIgFABQgOAAgHgLg");
	this.shape_492.setTransform(16.5,43.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.7,0).s().p("AAJAmQgEgIAHgEIgYgxQgDABgEgBQgDgBgCgEQgDgFAEgEQAEgFAHABQAFADABAFQAAAGgEADIAXAxQAFgCAFADQAEAEgBAGQgDAHgGAAQgGAAgCgFg");
	this.shape_493.setTransform(-138.9,171.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AgfAcQgCgFAEgEQAFgGAGAFIAkglQgGgGAGgFQAEgEAFABQAGACAAAHQAAAGgFACQgFACgEgDIgjAkQADAEgCAFQgCAFgGABQgGAAgCgGg");
	this.shape_494.setTransform(99.8,63.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.2,0,8.2,0).s().p("AhQAyQgDgMAKgHQAGgFAIABQAGABAGAFIBdhFQgFgGABgHQACgIAGgEQAKgIAKAGQAMAFAAAPQgEAOgMACQgKADgIgJIhdBFQAGAKgFAKQgHAKgNAAQgOgEgCgMg");
	this.shape_495.setTransform(162.9,95.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.1,0,8.1,0).s().p("Ag7BlQgQgCgFgRQAAgRANgIQAMgHAMAHIBUhzQgLgJADgOQADgOARgFQASgBAHAOQAHANgJAMQgFAIgJACQgJABgIgEIhUBzQAHAGABAJQABAJgGAIQgHAJgLAAIgFAAg");
	this.shape_496.setTransform(6.1,-205.6);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.2,0,14.3,0).s().p("AiAAwQgRgOAFgSQAEgQASgDQALgCAKAFQAJAEADAKICqghQgBgLAGgJQAHgJALgCQARgDALAOQAMAOgKAUQgNANgSgEQgQgDgFgOIiqAhQACAQgNAKQgIAGgJAAQgIAAgIgEg");
	this.shape_497.setTransform(111.2,177.9);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.3,0,1.3,0).s().p("AgHAwQgGgDABgGQABgJAJAAIADg7QgCAAgCgDQgDgDABgEQABgGAEgCQAFgDAGAFQADAGgDAGQgCAFgGAAIgDA6QADABACAFQACAGgEAFQgDACgCAAQgCAAgDgBg");
	this.shape_498.setTransform(41.9,-87.6);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.4,0,1.4,0).s().p("AgJAoQgFgDABgGQACgHAHAAIAHgwQgFgCABgIQABgFADgBQAFgCAEAFQADAFgDAFQgCAEgFgBIgHAxQADABABAFQABAFgDAEIgEABQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAg");
	this.shape_499.setTransform(-116.3,-149.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.6,0).s().p("AAfAOQgFgDABgFIg1gJQgCADgFABQgGACgEgDQgDgGADgFQAEgFAFABQAJACgBAIIA1AJQADgGAIABQAGABABAEQACAGgFAFIgGABQgDAAgCgCg");
	this.shape_500.setTransform(135.4,-19.4);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.7,0,2.8,0).s().p("AgFBiQgJgLAEgMQADgLAKgDIgJh5QgMAAgFgLQgGgLAHgMQALgKALAFQAMAEABANQABAIgFAGQgFAGgGABIAJB6QAIAAAGAGQAGAFAAAIQABAMgKAHQgGADgGAAQgGAAgFgEg");
	this.shape_501.setTransform(151.7,1.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AgVA9QgEgIAFgHQAFgHAIABIAOhPQgHgDgBgHQgCgJAGgGQAJgFAHAGQAHAFgCAIQgBAFgEAEQgEADgGgBIgOBQQAFABABAFQADAEgBAFQgCAJgGACIgEAAQgHAAgFgGg");
	this.shape_502.setTransform(45.3,154.4);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.9,0,10.9,0).s().p("AhYBQQgRgGgCgQQgCgQAMgIQAIgFAKABQAJACAGAHIB9hSQgEgIACgJQACgKAIgFQANgJAOAIQAOAIgCATQgGARgPACQgOADgJgMIh9BSQAHANgIAMQgIANgPAAIgDgBg");
	this.shape_503.setTransform(54.2,218.3);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AgoAWQgFgEACgHQAEgGAGAAQAFAAADAFIAzgUQgCgGAEgEQADgEAHACQAGADAAAGQAAAGgGACQgHAEgFgIIgzAVQADAIgIADIgEABQgDAAgDgCg");
	this.shape_504.setTransform(-18.5,130.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.8,0,7.9,0).s().p("Ag4BoQgQgCgFgRQgBgRANgIQALgHANAGIBQh3QgLgJADgOQACgOAQgGQASgBAIAOQAIANgJAMQgFAIgKACQgIACgJgEIhQB3QAHAFACAKQABAJgFAIQgIAKgLAAIgEAAg");
	this.shape_505.setTransform(-85.2,97.6);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.6,0).s().p("AgoAPQgGgEACgGQABgFAGAAQAIgBADAFIA1gJQgBgJAJgBQAFgBAEAEQADAFgDAGQgEADgFgBQgGgBgBgDIg2AJQABAGgFADQgCACgDAAIgFgCg");
	this.shape_506.setTransform(101,79.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6.1,0).s().p("AAaCOQgSgDgFgSQgDgLAFgKQAFgKALgEIguipQgLACgKgGQgJgGgDgLQgFgSAOgMQAOgNAUAJQAPAMgBASQgCARgQAGIAtCqQARgDALANQALAOgHATQgLAPgPAAIgGgBg");
	this.shape_507.setTransform(-120.4,154.6);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.9,0,9,0).s().p("ABGAVQgHAAgFgFQgEgFgBgHIhqgEQgBAFgFAEQgGAFgHgBQgLgBgEgKQgEgIAIgKQALgHAKAFQAJAEAAALIBqAEQACgJAKgDQAKgEAKAIQAHAJgGAKQgFAJgJAAIgCAAg");
	this.shape_508.setTransform(177.2,138.8);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("ABFAsQgJgJADgMIh+gpQgFALgNABQgNACgJgNQgGgQALgKQAJgKANAFQAIACAFAIQAEAHgCAJIB9ApQAEgIAHgDQAIgEAIADQANAFACANQACAOgOAKIgJABQgJAAgHgGg");
	this.shape_509.setTransform(55.2,-102.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.3,0).s().p("AAOAnQgFgIAHgGIghgwQgIAEgFgHQgDgFADgGQADgGAHABQAHACABAGQABAGgEAEIAgAwQAFgDAFADQAGAEgBAHQgCAHgGABIgCAAQgFAAgDgEg");
	this.shape_510.setTransform(42.5,55.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.1,0,6.1,0).s().p("Ag3BZQgJgKAHgMQADgIAIgDQAIgDAIADIA5hyQgHgEgCgIQgCgIAEgHQAGgMANAAQAOAAAHAPQADAPgKAIQgKAIgMgFIg6ByQALAHgBANQgBANgNAHIgGAAQgMAAgGgJg");
	this.shape_511.setTransform(-128.3,-36.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AASAeQgCgFADgFIgngmQgEADgFgBQgGgCgBgHQABgHAGgCQAFgCAFAEQAGAGgGAHIAoAmQAGgGAGAGQAFAEgCAGQgCAGgHABQgHgBgCgFg");
	this.shape_512.setTransform(181,90);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AgQCWQgRgIABgUQAAgLAIgJQAIgIAMgBIAEi4QgLgCgIgJQgIgJAAgLQABgUARgIQAQgIASAOQANASgIARQgIARgSABIgEC4QASACAHARQAHARgOARQgKAIgJAAQgHAAgIgEg");
	this.shape_513.setTransform(162,-47.1);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.7,0,13.8,0).s().p("AhzBUQgUgKgBgTQAAgTARgIQAKgFALACQALAEAGAJICghQQgEgLAEgKQAEgLAKgGQARgIAPALQAQAMgFAWQgJATgSABQgSABgJgPIigBQQAGARgLANQgJALgPAAIgIAAg");
	this.shape_514.setTransform(-13.8,-43.7);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.9,0,14,0).s().p("Ah1BZQgVgKAAgUQgBgTARgJQAKgFAMADQALACAHAKICihWQgFgLAEgLQAEgMALgFQAQgJAQALQAQAMgDAWQgKAUgSABQgSACgKgPIijBWQAHARgKAOQgKAMgRAAIgHAAg");
	this.shape_515.setTransform(-109.6,4.9);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.2,0,3.3,0).s().p("AAPA5QgIgEAAgIQAAgHAHgDIgdhDQgHACgFgFQgGgFACgJQAFgIAIAAQAIABADAHQAEAKgJAGIAcBDQAEgCAFACQAEACACAEQADAHgFAGQgEAFgGAAIgEgBg");
	this.shape_516.setTransform(-5.1,-144.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.7,0).s().p("AAbAbQgDgFACgFIg1gfQgDAFgGgBQgHAAgDgHQgBgIAGgEQAFgDAGADQAIAFgEAIIA1AfQAHgIAHAFQAGADAAAHQgBAHgHADIgCAAQgGAAgEgFg");
	this.shape_517.setTransform(-6.6,-62.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.9,0,3,0).s().p("AAMAcQgBgFAEgDIgegmQgEADgEgDQgFgCAAgGQACgGAFgBQAFgCADAFQAEAGgFAFIAeAmQACgCAEABQADABACACQADAEgCAFQgDAFgGAAQgFgCgCgFg");
	this.shape_518.setTransform(0.4,46.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7,0,7.1,0).s().p("AAtBdQgPgFgCgNQgCgMAJgIIhIhrQgLAGgLgGQgLgHABgQQAFgPAOgCQANgCAIALQAEAHgBAIQgBAIgGAGIBIBqQAHgEAIACQAIACAFAHQAHALgGAMQgHALgOAAIgCAAg");
	this.shape_519.setTransform(61.5,-120.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.7,0).s().p("AALCGQgOgEgDgRQgCgLAGgIQAEgJAKgDIgciiQgKABgJgGQgIgHgCgKQgDgRAOgKQAOgLASAKQANANgEAQQgEAQgOAEIAcCiQAQgBAJANQAJAOgJARQgKAMgMAAIgJgCg");
	this.shape_520.setTransform(142.3,170.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.7,0,10.7,0).s().p("AhpBDQgDgQAMgJQAIgGAKABQAJABAHAHIB5hdQgFgIABgKQACgJAIgGQAMgKAPAHQAOAHABATQgFASgPAEQgPADgKgLIh5BcQAIANgHANQgHAOgTAAQgSgFgDgQg");
	this.shape_521.setTransform(-11.3,152.5);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2,0).s().p("AAKApQgGgBgCgFQgCgIAHgDIgPgvQgIACgCgHQgCgFAEgEQAEgEAGACQAFADgBAFQAAAFgFACIAQAwQAFgBADADQAEAEgCAGQgDAFgFAAIgBAAg");
	this.shape_522.setTransform(56.2,130);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.2,0).s().p("AA3CCQgUgIgCgSQgDgRAOgKIhciWQgPAHgOgJQgPgLACgUQAHgVATgBQATgCAJAPQAGAKgCALQgCAKgJAIIBcCWQAKgFALADQALADAGAKQAJAQgJAOQgJAPgTAAIgEAAg");
	this.shape_523.setTransform(-72.5,-83.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.5,0,13.6,0).s().p("ABaAzQgNgLADgQIihgrQgFAPgQADQgRABgMgOQgIgUAMgNQALgNARAFQAKADAGAJQAGAJgCAKIChArQAEgKAJgEQAJgFALACQAQAFAEARQADASgRAMQgHADgHAAQgJAAgIgGg");
	this.shape_524.setTransform(134,40.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AAUAtQgDgEAAgEQABgFADgDIgqg3QgKAFgGgIQgFgFAEgHQADgHAJAAQAIACACAHQABAHgFAFIArA3QAGgEAGADQAGAEAAAIQgCAJgIABIgDAAQgFAAgDgEg");
	this.shape_525.setTransform(-172.4,-49.9);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.3,0,13.3,0).s().p("ABZAvQgMgKACgQIiegkQgFAPgQABQgQADgMgNQgJgTAMgNQALgNAQAEQAKACAGAJQAGAJgCAKICeAkQAEgKAJgEQAJgDAKABQARADADAQQAEASgQAMQgIADgGAAQgJAAgIgFg");
	this.shape_526.setTransform(181.4,82.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.9,0,3,0).s().p("AgaAxQgEgGADgGQABgEAEgCQAEgCAFACIAZg+QgIgFADgJQADgHAHAAQAIAAAEAHQACAIgGAFQgEAEgHgCIgaA+QAGADAAAGQAAAHgHAEIgEABQgFAAgEgEg");
	this.shape_527.setTransform(44.6,24.9);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.8,0).s().p("AglAxQgIgCgCgKQABgJAIgDQAGgDAGAFIAzg2QgEgGACgHQADgHAJgCQAJABADAIQADAHgGAGQgDADgFABQgFAAgEgDIgzA2QADAEAAAFQAAAFgDADQgEAFgFAAIgEgBg");
	this.shape_528.setTransform(117.6,90.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.8,0,2.9,0).s().p("AgXA/QgGgFACgJQACgFAEgDQAEgCAGAAIAVhOQgFgDgDgEQgCgFABgFQADgJAIgBQAJgCAGAJQAEAJgGAHQgFAGgIgCIgVBPQAIADABAIQAAAJgGAFIgIACQgFAAgEgEg");
	this.shape_529.setTransform(142.3,130.4);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.2,0,2.2,0).s().p("AgQBZQgIgLAGgKQAFgKAKgBIADhxQgJgBgEgLQgEgKAIgLQAKgIALAGQAKAFAAAMQgBAIgFAFQgFAFgHAAIgEBxQAGABAFAGQAFAFgBAIQAAALgLAFQgEACgCAAQgHAAgHgGg");
	this.shape_530.setTransform(137.8,31);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AAZAnQgEgDAAgEQAAgEACgEIgwgtQgIAGgHgHQgFgFACgGQACgHAJgCQAIABACAHQADAGgEAFIAwAuQAFgFAGADQAHACABAIQgBAIgHADIgEABQgEAAgDgEg");
	this.shape_531.setTransform(-129.3,96.6);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.3,0).s().p("AAsANQgHgDAAgIIhJgCQgBAGgHADQgHACgHgFQgFgGAEgHQADgHAIABQALABABALIBJABQABgJAMAAQAIABADAHQADAFgGAHQgEADgEAAIgGgBg");
	this.shape_532.setTransform(-42.1,135.9);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.1,0,5.1,0).s().p("AASBqQgNgJABgNQABgOAMgFIgpiAQgNADgJgKQgJgKAFgPQAJgOAPACQAOACAEANQADAJgEAHQgDAIgIAEIApCAQAJgCAHAEQAIAEADAIQAEAOgKAKQgHAGgIAAQgGAAgFgCg");
	this.shape_533.setTransform(-82.4,89.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.2,0,3.3,0).s().p("AgFBvQgLgMAFgOQAEgNALgCIgMiKQgNAAgHgMQgHgMAJgOQAMgMAOAFQAMAFABAOQABAJgFAHQgGAHgGACIAMCKQAIAAAHAGQAHAGABAJQABAOgMAIQgGADgHAAQgHAAgGgEg");
	this.shape_534.setTransform(51.9,36.8);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,4,0).s().p("AAYATQgDgDABgFIgtgTQgCAEgFAAQgFAAgDgGQgBgGAEgDQAEgEAFADQADABABADQABADgBADIAtATQADgGAIADQAEACABAFQAAAGgGADIgDAAQgEAAgCgDg");
	this.shape_535.setTransform(128.2,5.9);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1,0,1.1,0).s().p("AgBAmQgEgEACgFQABgEADgBIgCgvQgFAAgCgEQgCgEADgFQAEgEADACQAEACABAFQAAADgCACQgCADgBAAIADAvQAHAAAAAHQABAFgEADIgFABQgCAAgBgCg");
	this.shape_536.setTransform(90.6,-73.2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.8,0).s().p("Ag1AZQgFgGACgIQAFgHAIAAQAHABADAGIBCgXQgBgHAFgFQAFgFAIADQAIAEgBAIQgBAIgHACQgEACgFgCQgEgCgCgEIhDAXQADALgKAEIgEAAQgFAAgEgDg");
	this.shape_537.setTransform(123.7,99.6);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.6,0,14.7,0).s().p("ABnBMQgLgFgFgLQgFgKADgMIishGQgFAKgMAEQgLAFgLgFQgSgHgBgUQgBgUAUgLQAVgGANAOQANANgGARICsBHQAJgQASgBQATAAALATQAGAWgPAOQgJAIgKAAQgGAAgHgDg");
	this.shape_538.setTransform(36.4,-97.4);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AgVBLQgFgKAFgJQAFgIAJAAIAMhgQgHgCgDgJQgDgKAIgIQAJgGAJAGQAIAGgBAKQgDAOgOAAIgMBgQAEABAEAFQAEAFgBAHQgBAKgIADIgFABQgIAAgGgGg");
	this.shape_539.setTransform(70.2,117.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AATCGQgQgEgDgRQgCgKADgJQAGgJAKgEIgmigQgKABgJgFQgJgGgCgLQgEgQANgLQAOgMATAJQANAMgDARQgBAQgPAFIAlCgQAQgCAJAMQALAOgIASQgLANgNAAIgHgBg");
	this.shape_540.setTransform(133.4,-41);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.1,0,7.2,0).s().p("AArAnQgGgHAEgJIhSgrQgFAIgJgBQgKgBgEgKQgCgMAIgFQAIgGAJAFQAFACACAGQACAGgDAFIBSAsQAEgFAFgCQAGgBAGADQAIAFAAAJQgBALgKAEIgEABQgIAAgFgHg");
	this.shape_541.setTransform(69.1,105);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.8,0,3.9,0).s().p("AAOAzQgCgEABgFQABgFAEgDIglhCQgEACgFgBQgFgCgCgEQgEgHAEgGQAFgHAKABQAIAEABAIQABAHgHAEIAlBCQAHgDAGAEQAGAFgBAJQgEAJgIAAIgBAAQgHAAgEgGg");
	this.shape_542.setTransform(3.3,-107.6);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.3,0,8.3,0).s().p("AAtA8QgFgKAGgKIhdhMQgIAJgLgDQgMgEgEgOQABgPAMgFQALgGAKAIQAGAFABAIQABAIgEAGIBdBMQAFgGAIAAQAHgBAHAFQAJAJgDAMQgDANgOADQgPgBgFgLg");
	this.shape_543.setTransform(149.4,-28.5);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.4,0,9.4,0).s().p("AhKBiQgQgFgDgTQACgRAOgGQAOgGALAJIBmhtQgKgLAFgOQAFgPASgDQASACAGAQQAFAOgKALQgHAHgJABQgKABgIgGIhlBtQAGAHAAAKQAAAKgHAHQgHAIgKAAIgIgBg");
	this.shape_544.setTransform(-58.3,-21.7);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.9,0).s().p("AAdBEQgLgEgBgJQgBgJAHgGIgvhOQgIAEgIgFQgIgFABgLQAEgLAKgBQAKgBAFAIQADAFgBAGQgBAGgFADIAwBPQAFgDAGACQAFABAEAFQAFAJgFAIQgFAHgJAAIgDAAg");
	this.shape_545.setTransform(134.1,-1.5);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.5,0).s().p("AAvCBQgSgIgCgSQgBgQAOgKIhTiXQgQAHgNgKQgOgKACgVQAJgUATgBQASAAAIAPQAGAKgDALQgDAKgJAHIBTCXQAKgFALAEQALADAFAKQAIAQgKAOQgIANgRAAIgHgBg");
	this.shape_546.setTransform(49.6,170.8);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8,0,8.1,0).s().p("AAyAnQgGgHADgKIhegoQgFAJgKAAQgKAAgGgLQgDgMAIgHQAIgHAKAEQAHADACAGQADAGgCAGIBdAoQADgFAHgDQAGgCAGADQAKAEAAALQABALgMAGIgGABQgIAAgFgGg");
	this.shape_547.setTransform(109.2,131.9);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11,0,11.1,0).s().p("AhpAYQgJgMAJgNQALgLANAEQANAEADALICDgQQAAgNALgHQALgHAOAIQAMAMgFANQgEALgOACQgIABgHgFQgHgEgCgHIiEAQQAAAIgFAHQgGAGgIABIgEAAQgLAAgGgJg");
	this.shape_548.setTransform(114.4,11.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.7,0).s().p("AgrCTQgQgMAEgTQADgMAKgHQAJgHAMABIAli3QgLgEgFgKQgFgKACgMQADgTASgFQATgFAPASQAKAUgLAPQgLAPgSgCIglC3QAPAGAEASQAEATgPAOQgJAFgIAAQgLAAgIgHg");
	this.shape_549.setTransform(134.7,17);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.9,0,7.9,0).s().p("AhDA+QgLgGAAgOQAEgMALgDQALgCAHAIIBZhDQgGgJAGgKQAFgKAOAAQANAEACAMQACAMgJAHQgGAEgHgBQgHAAgFgGIhZBDQAEAGgBAHQgCAHgGAEQgFAEgFAAQgFAAgEgCg");
	this.shape_550.setTransform(35.8,19.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.5,0,5.6,0).s().p("Ag0ASQgEgFADgIQAFgFAHAAQAGABADAGIBBgPQgBgHAFgEQAFgEAIADQAHAFgCAIQgBAHgHAAQgKACgEgIIhBAPQABAEgDAEQgCAEgEABIgEAAQgEAAgEgEg");
	this.shape_551.setTransform(39,37.3);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AgCCGQgOgOAFgRQAFgPAOgEIgUinQgQABgJgOQgJgPAKgSQAPgOARAGQAPAFACARQABALgGAJQgGAJgJACIAUCnQALAAAIAHQAJAHABALQACARgOAKQgIAFgIAAQgIAAgIgGg");
	this.shape_552.setTransform(-106.8,169);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.4,0).s().p("AgyAQQgEgFADgIQAFgEAGABQAHAAACAGIA/gNQgBgGAFgEQAFgEAHADQAHAFgCAHQgCAGgGAAQgEABgEgBQgEgBgBgEIg/ANQABAEgDADQgCAEgEABIgDAAQgFAAgDgEg");
	this.shape_553.setTransform(39.2,16);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.3,0).s().p("AgoAxQgEgIAFgGQADgEAFgBQAFgBAEACIArg+QgEgEAAgFQgBgFADgEQAEgGAJABQAIABADAKQAAAJgHAEQgGAEgHgEIgrA/QAGAFgCAHQgBAIgJADIgBAAQgJAAgEgHg");
	this.shape_554.setTransform(22.9,-15.2);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.9,0).s().p("AgtAQQgEgFADgHQAEgEAGAAQAGABACAFIA5gNQgBgGAEgDQAFgEAHADQAGAEgCAHQgBAGgGAAQgEAAgDAAQgEgBgBgEIg5ANQACAJgJACIgDABQgEAAgDgEg");
	this.shape_555.setTransform(-19.9,25.5);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AAWBRQgKgBgEgKQgCgHACgGQADgGAFgDIgihfQgHACgGgDQgFgDgDgGQgEgKAIgIQAHgIAMAEQALAGgBALQAAAKgJAEIAiBfQAKgCAHAHQAIAHgEAMQgGAKgKAAIgCAAg");
	this.shape_556.setTransform(-91.6,111.2);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AARAhQgGgGAGgGIgjgnQgHAEgFgGQgEgEACgFQACgGAHAAQAHABACAGQABAFgEADIAjAoQAFgDAEACQAGACAAAHQgBAHgGABIgCAAQgEAAgDgDg");
	this.shape_557.setTransform(-86.9,29.6);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.9,0,5,0).s().p("AAWBaQgMgHABgMQAAgLAKgGIgshqQgLADgIgHQgJgIADgOQAIgMAMAAQAMABAFALQADAHgDAHQgCAHgHAEIAsBqQAHgCAHADQAHADADAHQAEALgHAJQgGAHgKAAIgHgBg");
	this.shape_558.setTransform(63.6,111.1);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.3,0).s().p("AA5B9QgTgHgDgRQgDgQAOgLIhfiQQgOAIgPgJQgPgKACgVQAGgUAUgCQARgCAKAPQAGAJgCALQgCALgIAHIBeCQQAKgFALACQAKADAHAJQAKAPgKAQQgJAOgSAAIgEAAg");
	this.shape_559.setTransform(48.1,-197.8);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.8,0,5.9,0).s().p("AAeA5QgEgFAAgGQAAgGAEgEIg+hEQgFAEgGgBQgGAAgEgFQgGgHAEgJQADgKAMgBQALACADAJQADAJgGAHIA+BEQAHgGAIAEQAJAEABALQgCALgKADIgFABQgGAAgFgFg");
	this.shape_560.setTransform(27.8,129.9);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.3,0,9.4,0).s().p("AArBpQgGgIABgLQABgKAIgHIhiiFQgJAGgKgCQgKgCgHgJQgKgNAIgQQAIgQAUABQATAFAEARQADAPgMALIBiCEQAOgIAOAIQAPAIAAAUQgGAUgSADIgGAAQgMAAgJgLg");
	this.shape_561.setTransform(40.4,142.8);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5.1,0).s().p("AgpAiQgIgDAAgIQgBgHAGgDQAEgCAEAAQAFABACAEIA5ghQgEgKAJgFQAGgDAGAEQAGAEgBAIQgDAIgHABQgHAAgDgFIg6AhQADAGgEAFQgDAFgGAAIgDAAg");
	this.shape_562.setTransform(-48.7,76.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.8,0,13.9,0).s().p("AiCAyQgMgNAIgUQAMgQARACQARACAGAQICkguQgDgRANgKQANgLATAHQARAMgDATQgDARgRAFQgLADgKgFQgJgFgEgKIilAuQACALgFAJQgGAJgLAEIgJABQgLAAgJgKg");
	this.shape_563.setTransform(40.5,118.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2.1,0).s().p("AgQBMQgGgKAEgJQAFgIAJAAIAFhhQgHgCgDgJQgEgJAIgJQAIgGAJAFQAJAFgBAKQgBAOgPABIgFBhQAFABADAFQAEAEAAAHQgBAKgJAEIgEABQgHAAgGgFg");
	this.shape_564.setTransform(39.3,28.4);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AgbAgQgGgCAAgHQABgGAFgCQAFgBADADIAlgiQgDgFACgEQACgFAGgBQAHABACAGQABAFgEAEQgGAFgGgFIgkAiQAEAGgFAGQgDADgDAAIgDgBg");
	this.shape_565.setTransform(-88.1,197.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.4,0).s().p("AAoAUQgKgCACgKIg/gOQgEAIgJgCQgHAAgBgHQgCgHAGgFQAIgDAFAEQAFAEgBAGIA/AOQACgGAHAAQAGAAAFAEQAEAHgFAGQgDAEgFAAIgDgBg");
	this.shape_566.setTransform(80.2,213.4);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AgiBUQgIgIADgLQADgGAGgEQAGgEAHACIAghqQgHgDgDgGQgDgGACgHQAEgLALgCQAMgCAIALQAEANgHAIQgHAJgLgDIggBqQAKAEABALQACALgLAIIgJABQgHAAgGgFg");
	this.shape_567.setTransform(148.1,-73.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AANB4QgNgDgCgPQgCgKAEgIQADgIAJgDIgciQQgKABgHgGQgIgFgCgKQgDgOAMgKQANgKAQAIQAMAMgEAOQgDAOgMAFIAdCQQAOgBAJALQAIAMgHAQQgJALgMAAIgHgBg");
	this.shape_568.setTransform(-149.8,-101.4);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.6,0,8.6,0).s().p("AA4BrQgRgFgEgPQgDgOALgKIhZh6QgNAHgNgHQgNgHAAgTQAFgSAQgDQAQgCAJAMQAGAIgBAKQgBAJgHAHIBZB6QAJgFAJACQAKABAGAIQAJANgHAOQgHAOgSAAIgCAAg");
	this.shape_569.setTransform(91.3,193.6);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.6,0).s().p("AASAfQgCgFADgFIgmgoQgEAEgFgCQgGgDgBgGQACgHAGgCQAFgCAEAEQAGAGgFAHIAlAoQAHgFAGAGQAEAEgCAGQgCAGgHAAQgHgBgBgFg");
	this.shape_570.setTransform(-172.3,109.4);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.1,0,9.2,0).s().p("AArBkQgGgIABgKQABgKAHgHIhgh9QgIAFgKgCQgKgCgHgIQgKgNAIgOQAHgQAUAAQASAFAEAQQADAPgLALIBgB9QANgJAOAIQAOAIAAASQgFATgRAEIgGABQgMAAgIgLg");
	this.shape_571.setTransform(65.3,-206.6);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.1,0,2.2,0).s().p("AgEBNQgIgJAEgJQADgJAHgCIgGhfQgJAAgFgIQgFgJAGgJQAJgIAIADQAJAEABAKQABAGgEAFQgEAFgEABIAGBfQAGAAAFAEQAEAEABAHQABAKgJAFQgEACgEAAQgFAAgEgDg");
	this.shape_572.setTransform(1.5,22.1);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.8,0,3.9,0).s().p("AAbATQgHgDACgHIgsgQQgDAHgHgDQgFgCAAgFQgBgFAGgDQAFgCAEAEQADADgBAFIAsAQQACgFAFAAQAFAAADAFQACAGgEADQgDADgDAAIgDgBg");
	this.shape_573.setTransform(50.3,122.5);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AgqAnQgJgDgBgIQgBgHAGgEQAEgDAFABQAFABADADIA8gnQgCgEABgFQABgFAEgCQAGgFAHAEQAHAEgBAJQgDAJgHABQgHABgFgGIg8AoQADAHgDAGQgEAFgIAAIgBAAg");
	this.shape_574.setTransform(-30.3,-29.4);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.9,0,5.9,0).s().p("AApAQQgGgEAAgHIhFgHQgBAFgHACQgHACgGgGQgFgGAFgGQAEgGAHABQAKABAAALIBGAHQACgIALABQAHABACAFQADAHgGAGQgEADgEAAQgDAAgDgCg");
	this.shape_575.setTransform(-108.8,190.6);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AANBEQgJgGABgJQAAgIAJgEIgdhRQgIADgGgHQgGgGADgKQAGgJAJABQAJABADAIQACAGgCAFQgCAFgGACIAdBRQAGgBAEADQAFACACAFQADAJgGAHQgEAEgGAAIgHgBg");
	this.shape_576.setTransform(-11.4,163.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.2,0,13.3,0).s().p("AhzBEQgSgLACgSQABgRAQgHQAKgEAKAEQAKAEAFAKICcg+QgDgKAFgJQAEgKAKgEQAQgHANAMQAOAMgGAUQgKARgRAAQgQgBgIgPIicA+QAFAPgLAMQgJAJgMAAIgLgCg");
	this.shape_577.setTransform(-52.1,-218.5);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AguBmQgKgKAFgOQADgIAHgEQAJgEAIACIAsiBQgIgDgCgIQgEgIADgJQAFgNAOgCQAOgCAKAPQAEAQgJAKQgJAJgNgDIgtCBQAMAFABANQABAOgOAJQgFACgFAAQgJAAgHgHg");
	this.shape_578.setTransform(54.5,26.3);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.4,0,13.5,0).s().p("Ah1BeQgSgKACgXQAHgVATgDQASgDALAOICahkQgIgQAJgPQAKgQAWABQAWAIADAUQACATgQAKQgKAHgMgCQgLgCgIgJIiaBkQAGALgDALQgDAMgKAGQgIAGgJAAQgHAAgIgFg");
	this.shape_579.setTransform(73.7,210.9);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.6,0).s().p("AgrAFQgDgFAEgEQAFgEAFACQAFACABAEIA1AAQAAgFAFgCQAFgDAGAEQAEAFgDAEQgCAFgGAAQgIAAgBgIIg1ABQgBAJgIAAQgGAAgCgFg");
	this.shape_580.setTransform(131.7,-9.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.9,0,9,0).s().p("ABGAUQgGAAgFgFQgFgEgBgHIhqgEQgBAGgFAFQgFAEgHAAQgLgBgFgKQgEgIAIgLQALgHAKAFQAJAFAAAKIBrACQABgIAKgEQAKgEAKAIQAHAJgFAKQgFAJgKAAIgCAAg");
	this.shape_581.setTransform(177.8,42.8);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AABB2QgKgMADgPQAEgOAMgDIgXiSQgPABgIgMQgIgMAIgQQAMgOAQAFQANAEACAPQACAKgFAIQgEAIgJACIAXCSQAKgBAHAGQAIAGACAJQACAPgMAJQgHAFgIAAQgHAAgIgEg");
	this.shape_582.setTransform(-16.9,212);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.9,0,12,0).s().p("Ah1BbQgFgSAOgNQAIgIAMAAQAMAAAIAIICEh7QgHgKABgLQABgMAIgIQAOgNASAHQASAHACAWQgEAVgRAHQgRAFgNgLIiEB7QALAOgHAQQgHASgWACQgWgEgGgTg");
	this.shape_583.setTransform(138.5,-47.2);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.9,0,9,0).s().p("AA+AYQgJgGABgKIhrgLQgCAIgKADQgKADgKgJQgHgJAHgKQAGgJALABQAHABAEAFQAFAFAAAHIBqALQABgEAGgEQAGgEAHAAQALACADAIQAEALgJAKQgGADgGAAQgEAAgFgCg");
	this.shape_584.setTransform(149.6,-41.2);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.4,0).s().p("AhHANQgEgIAFgIQAIgHAJADQAIADABAGIBYgGQAAgJAHgEQAIgFAJAGQAIAIgDAIQgEAHgJABQgFABgFgEQgFgDgBgEIhXAHQAAAGgEAEQgEAEgGABIgCAAQgHAAgFgHg");
	this.shape_585.setTransform(-7.2,140.4);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.2,0,3.3,0).s().p("AgWAqQgHAAgCgIQAAgGAFgEQAFgDAFADIAggwQgFgDABgHQABgGAHgBQAIgBADAFQADAGgEAFQgCADgDABQgEABgEgCIgfAwQACACABAEQAAAEgCADQgDAFgFAAIgBgBg");
	this.shape_586.setTransform(-121.5,175);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.9,0,8.9,0).s().p("AAoBnQgGgJABgKQABgKAIgHIhbiCQgJAFgKgCQgKgCgGgJQgKgNAIgPQAIgPAUABQASAGADAQQADAPgLAKIBbCCQAOgHANAIQAOAIAAATQgGATgRADIgFAAQgNAAgIgLg");
	this.shape_587.setTransform(136.1,-26.3);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.7,0,7.8,0).s().p("AhHBoQgJgNAIgOQAFgJAJgDQAJgDAJAEIBMiGQgIgFgCgKQgCgKAFgJQAIgOAQACQAQABAIARQACATgNAJQgMAJgOgGIhLCFQAMAJgBAPQgCAQgRAHIgFABQgPAAgIgMg");
	this.shape_588.setTransform(156.4,-33);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.2,0,11.3,0).s().p("AhsASQgIgNAKgMQAMgKANAEQAMAFACALICGgJQAAgNAMgGQAMgHAOAJQALAMgGAMQgFANgOABQgIABgHgGQgHgFgBgHIiGAJQgBAJgFAGQgGAGgJABIgCAAQgNAAgGgLg");
	this.shape_589.setTransform(-121.3,190.1);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.4,0).s().p("AgWAlQgCgGAFgEQAEgEAFACIAUgxQgEgDgBgFQAAgFAGgEQAHgCADAFQAEAFgCAFQgEAHgHgCIgVAxQAIADgEAIQgCAFgGABQgGAAgDgGg");
	this.shape_590.setTransform(171.8,-23.2);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.7,0).s().p("Ag5CDQgNgNAGgRQAEgLAKgFQAJgGALADIA3ilQgKgFgEgKQgFgKAEgLQAFgRASgDQATgCAMASQAHAUgMANQgMAMgRgEIg2CmQAPAHACARQABARgRAMQgHADgGAAQgMAAgJgJg");
	this.shape_591.setTransform(171.7,-37.6);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_592.setTransform(194.9,45.6);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_593.setTransform(194.9,65.4);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_594.setTransform(193.7,28.8);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_595.setTransform(193.1,55.2);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_596.setTransform(191.9,84.6);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_597.setTransform(191.9,75);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQALAAAAALQAAAMgLgBQgLABABgMg");
	this.shape_598.setTransform(191.3,21);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQALAAAAALQAAAMgLgBQgLABABgMg");
	this.shape_599.setTransform(191.3,-7.8);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_600.setTransform(190.7,92.4);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQAMAAgBALQABAMgMgBQgLABAAgMg");
	this.shape_601.setTransform(190.1,8.4);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_602.setTransform(188.9,102);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_603.setTransform(188.3,-21.6);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_604.setTransform(188.3,18);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_605.setTransform(183.5,117.6);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_606.setTransform(182.9,-30);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_607.setTransform(177.5,-44.4);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_608.setTransform(175.7,135);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_609.setTransform(175.1,-55.8);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_610.setTransform(174.5,90.6);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQAMAAgBALQABAMgMgBQgLABAAgMg");
	this.shape_611.setTransform(172.1,40.8);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_612.setTransform(170.3,147.6);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_613.setTransform(169.1,55.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_614.setTransform(168.5,-70.8);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_615.setTransform(167.9,1.2);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQALABAAAKQAAALgLABQgLgBABgLg");
	this.shape_616.setTransform(164.3,126);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQALgBAAALQAAALgLAAQgLAAABgLg");
	this.shape_617.setTransform(164.3,22.2);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_618.setTransform(163.1,81);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_619.setTransform(163.1,154.8);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQAMgBgBALQABALgMAAQgLAAAAgLg");
	this.shape_620.setTransform(163.1,-82.2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_621.setTransform(160.1,98.4);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_622.setTransform(158.9,-93);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_623.setTransform(157.1,162.6);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_624.setTransform(155.9,-45.6);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_625.setTransform(154.7,105);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_626.setTransform(153.5,35.4);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_627.setTransform(153.5,-97.8);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_628.setTransform(151.1,-107.4);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_629.setTransform(150.5,115.8);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_630.setTransform(149.9,-7.2);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_631.setTransform(149.9,0);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_632.setTransform(149.9,171.6);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_633.setTransform(147.5,60);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_634.setTransform(147.5,-112.2);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_635.setTransform(145.7,150);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_636.setTransform(144.5,-124.2);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_637.setTransform(143.9,32.4);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_638.setTransform(141.5,-72);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_639.setTransform(140.9,-136.2);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_640.setTransform(139.1,-97.8);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_641.setTransform(139.1,180.6);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_642.setTransform(138.5,9);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_643.setTransform(136.7,82.2);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQAMgBgBALQABALgMAAQgLAAAAgLg");
	this.shape_644.setTransform(136.1,-62.4);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_645.setTransform(135.5,-142.8);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_646.setTransform(134.9,131.4);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_647.setTransform(133.1,110.4);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_648.setTransform(130.7,169.2);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_649.setTransform(130.7,190.8);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_650.setTransform(129.5,-153);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_651.setTransform(128.9,38.4);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQALgBAAALQAAALgLAAQgLAAABgLg");
	this.shape_652.setTransform(128.3,-123.6);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQALABAAAKQAAALgLABQgLgBABgLg");
	this.shape_653.setTransform(128.3,-41.4);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQALABAAAKQAAALgLABQgLgBABgLg");
	this.shape_654.setTransform(128.3,122.4);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQALAAAAALQAAAMgLgBQgLABABgMg");
	this.shape_655.setTransform(128.3,-18.6);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQAMgBgBALQABALgMAAQgLAAAAgLg");
	this.shape_656.setTransform(127.1,105);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_657.setTransform(126.5,-75);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_658.setTransform(125.9,-2.4);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_659.setTransform(125.9,21);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQALAAAAALQAAAMgLgBQgLABABgMg");
	this.shape_660.setTransform(124.7,53.4);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_661.setTransform(123.5,-165);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_662.setTransform(122.3,-141.6);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_663.setTransform(122.3,-42.6);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_664.setTransform(121.1,200.4);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_665.setTransform(118.7,-92.4);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQALABAAAKQAAALgLABQgLgBABgLg");
	this.shape_666.setTransform(115.7,-174.6);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_667.setTransform(113.3,-63.6);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_668.setTransform(112.7,122.4);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_669.setTransform(112.7,5.4);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_670.setTransform(112.7,185.4);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQAMgBgBALQABALgMAAQgLAAAAgLg");
	this.shape_671.setTransform(112.7,141);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_672.setTransform(111.5,201.6);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_673.setTransform(111.5,-50.4);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_674.setTransform(110.9,-111);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_675.setTransform(110.9,-144);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQALgBAAALQAAALgLAAQgLAAABgLg");
	this.shape_676.setTransform(110.3,88.8);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_677.setTransform(107.9,171);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_678.setTransform(107.9,72.6);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_679.setTransform(107.3,-159.6);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_680.setTransform(107.3,-88.8);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_681.setTransform(106.7,-106.2);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_682.setTransform(106.7,22.2);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_683.setTransform(106.1,64.8);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_684.setTransform(105.5,121.2);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQAMAAgBALQABAMgMgBQgLABAAgMg");
	this.shape_685.setTransform(103.7,208.2);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_686.setTransform(103.1,-187.8);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_687.setTransform(102.5,36.6);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_688.setTransform(101.9,105.6);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_689.setTransform(100.1,6);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_690.setTransform(98.3,-19.8);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_691.setTransform(97.1,-29.4);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_692.setTransform(96.5,-117);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_693.setTransform(94.7,140.4);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_694.setTransform(94.1,-176.4);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_695.setTransform(93.5,-62.4);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_696.setTransform(92.9,-132.6);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_697.setTransform(91.7,-199.2);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_698.setTransform(91.7,46.2);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_699.setTransform(91.1,-45.6);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_700.setTransform(89.9,214.8);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_701.setTransform(89.3,93);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_702.setTransform(88.7,153.6);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_703.setTransform(87.5,172.8);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_704.setTransform(85.7,-92.4);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_705.setTransform(83.9,117.6);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_706.setTransform(83.9,102);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_707.setTransform(82.7,-34.2);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_708.setTransform(82.7,54);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_709.setTransform(82.1,-147.6);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_710.setTransform(82.1,-188.4);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_711.setTransform(80.9,-8.4);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_712.setTransform(80.3,139.2);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_713.setTransform(80.3,-21);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_714.setTransform(79.7,-44.4);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_715.setTransform(79.1,19.8);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_716.setTransform(79.1,-206.4);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_717.setTransform(79.1,-129);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_718.setTransform(78.5,-118.2);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_719.setTransform(77.3,217.2);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_720.setTransform(76.7,-91.8);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_721.setTransform(74.3,196.2);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_722.setTransform(74.3,3.6);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_723.setTransform(73.7,-184.2);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_724.setTransform(73.1,67.8);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_725.setTransform(71.9,-212.4);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_726.setTransform(70.7,101.4);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_727.setTransform(70.7,135);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_728.setTransform(70.1,-57);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_729.setTransform(69.5,178.8);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_730.setTransform(68.3,-136.2);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_731.setTransform(67.7,3);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_732.setTransform(65.3,220.2);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_733.setTransform(62.9,-16.2);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_734.setTransform(62.9,-215.4);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_735.setTransform(61.7,18);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_736.setTransform(61.1,172.8);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_737.setTransform(56.9,210);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_738.setTransform(56.9,-43.2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_739.setTransform(55.1,68.4);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_740.setTransform(55.1,-170.4);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_741.setTransform(53.3,-201);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_742.setTransform(52.7,118.8);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_743.setTransform(52.7,-136.2);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_744.setTransform(51.5,-189.6);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_745.setTransform(50.9,155.4);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_746.setTransform(50.3,168.6);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_747.setTransform(49.1,-111.6);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_748.setTransform(49.1,189.6);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_749.setTransform(48.5,-220.8);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_750.setTransform(47.3,-91.2);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_751.setTransform(46.1,-64.2);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_752.setTransform(45.5,223.2);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_753.setTransform(45.5,-198);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_754.setTransform(44.3,-172.8);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_755.setTransform(44.3,141);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_756.setTransform(43.7,203.4);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_757.setTransform(43.1,-151.8);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_758.setTransform(42.5,-208.2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_759.setTransform(41.9,34.2);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_760.setTransform(41.3,123.6);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_761.setTransform(40.1,-226.8);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_762.setTransform(38.9,72.6);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_763.setTransform(38.3,54.6);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_764.setTransform(37.7,181.8);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_765.setTransform(37.1,-12.6);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_766.setTransform(37.1,-190.2);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_767.setTransform(36.5,-222);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_768.setTransform(35.9,110.4);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_769.setTransform(35.9,-42);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_770.setTransform(35.9,15.6);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_771.setTransform(31.7,-132);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_772.setTransform(31.1,-214.8);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_773.setTransform(30.5,-231.6);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_774.setTransform(30.5,146.4);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_775.setTransform(30.5,-78);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_776.setTransform(29.9,38.4);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_777.setTransform(28.7,-119.4);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_778.setTransform(28.7,-22.8);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_779.setTransform(28.7,-96.6);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_780.setTransform(28.7,130.8);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_781.setTransform(28.7,221.4);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_782.setTransform(28.1,-139.8);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_783.setTransform(26.3,196.2);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_784.setTransform(26.3,164.4);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_785.setTransform(25.1,109.8);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_786.setTransform(23.9,-56.4);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_787.setTransform(23.9,-174);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_788.setTransform(23.3,88.8);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_789.setTransform(23.3,-15.6);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_790.setTransform(22.7,29.4);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_791.setTransform(22.7,-145.8);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_792.setTransform(20.9,58.8);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_793.setTransform(20.9,51);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_794.setTransform(19.7,78);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_795.setTransform(19.7,141);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_796.setTransform(19.1,180);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_797.setTransform(19.1,-182.4);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_798.setTransform(19.1,-39);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_799.setTransform(18.5,-231.6);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_800.setTransform(17.3,-166.2);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_801.setTransform(16.1,34.2);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_802.setTransform(16.1,-201);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_803.setTransform(14.9,157.2);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_804.setTransform(14.3,218.4);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_805.setTransform(13.7,-73.8);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_806.setTransform(13.1,138.6);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_807.setTransform(10.7,193.8);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_808.setTransform(9.5,-126);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_809.setTransform(8.9,-228);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_810.setTransform(7.1,-139.2);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_811.setTransform(5.9,213);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_812.setTransform(2.9,-219);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_813.setTransform(1.7,-212.4);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_814.setTransform(-0.1,204);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_815.setTransform(-0.7,-204.6);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_816.setTransform(-0.7,-193.8);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_817.setTransform(-3.7,-186);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_818.setTransform(-4.3,190.2);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_819.setTransform(-4.3,203.4);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_820.setTransform(-4.9,174);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_821.setTransform(-4.9,-170.4);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_822.setTransform(-5.5,-32.4);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_823.setTransform(-6.1,-19.8);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_824.setTransform(-6.1,-152.4);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_825.setTransform(-6.1,-3);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_826.setTransform(-6.7,-58.8);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_827.setTransform(-6.7,-131.4);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_828.setTransform(-6.7,-47.4);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_829.setTransform(-7.3,34.2);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_830.setTransform(-7.3,121.2);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_831.setTransform(-7.3,16.8);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_832.setTransform(-7.3,102);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_833.setTransform(-7.3,139.2);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_834.setTransform(-7.3,161.4);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_835.setTransform(-7.3,47.4);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_836.setTransform(-7.9,63);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_837.setTransform(-7.9,-88.2);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_838.setTransform(-7.9,79.8);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_839.setTransform(-7.9,-110.4);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_840.setTransform(-7.9,-76.2);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_841.setTransform(-8.5,-197.4);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_842.setTransform(-9.7,213.6);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_843.setTransform(-12.1,-211.2);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_844.setTransform(-15.7,220.2);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_845.setTransform(-16.3,-218.4);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_846.setTransform(-16.9,165.6);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_847.setTransform(-19.3,124.8);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_848.setTransform(-19.9,-96);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_849.setTransform(-21.7,29.4);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_850.setTransform(-24.7,-114);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_851.setTransform(-25.3,-227.4);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_852.setTransform(-25.3,-5.4);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_853.setTransform(-25.9,-160.8);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_854.setTransform(-27.1,-178.2);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_855.setTransform(-27.1,225);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_856.setTransform(-28.3,-210.6);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_857.setTransform(-28.3,19.2);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_858.setTransform(-30.1,40.2);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_859.setTransform(-30.7,-230.4);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_860.setTransform(-31.3,-31.2);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_861.setTransform(-31.9,121.2);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_862.setTransform(-34.3,160.8);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_863.setTransform(-34.9,189.6);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_864.setTransform(-34.9,138);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_865.setTransform(-36.1,-93);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_866.setTransform(-37.3,-204);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_867.setTransform(-37.3,79.2);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_868.setTransform(-38.5,-109.8);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_869.setTransform(-38.5,-139.2);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_870.setTransform(-39.7,224.4);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_871.setTransform(-40.9,18.6);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_872.setTransform(-41.5,173.4);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_873.setTransform(-42.1,8.4);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_874.setTransform(-43.9,-45.6);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_875.setTransform(-44.5,-185.4);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_876.setTransform(-45.1,-156);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_877.setTransform(-45.7,-193.2);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_878.setTransform(-45.7,-213.6);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_879.setTransform(-46.9,69);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_880.setTransform(-46.9,144);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_881.setTransform(-50.5,110.4);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_882.setTransform(-51.1,-226.2);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_883.setTransform(-51.1,220.2);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_884.setTransform(-51.7,81);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_885.setTransform(-51.7,-120.6);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_886.setTransform(-52.9,189);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_887.setTransform(-54.1,-68.4);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_888.setTransform(-54.1,-160.8);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_889.setTransform(-54.7,128.4);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_890.setTransform(-55.3,12);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_891.setTransform(-55.3,53.4);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_892.setTransform(-57.7,-145.8);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_893.setTransform(-57.7,-88.2);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_894.setTransform(-57.7,-184.2);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_895.setTransform(-58.3,-196.2);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_896.setTransform(-61.3,-214.2);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_897.setTransform(-61.9,-15.6);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_898.setTransform(-61.9,218.4);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_899.setTransform(-62.5,-28.8);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_900.setTransform(-64.3,-40.8);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_901.setTransform(-64.9,-126);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_902.setTransform(-64.9,21);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_903.setTransform(-67.3,-73.2);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_904.setTransform(-69.1,166.2);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_905.setTransform(-70.3,-16.8);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_906.setTransform(-70.9,-57);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_907.setTransform(-72.1,125.4);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_908.setTransform(-72.7,-154.2);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_909.setTransform(-73.3,2.4);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_910.setTransform(-73.3,-220.8);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_911.setTransform(-73.9,-96.6);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_912.setTransform(-74.5,-199.8);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_913.setTransform(-75.1,54.6);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_914.setTransform(-75.1,97.8);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_915.setTransform(-75.7,23.4);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_916.setTransform(-76.3,-67.8);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_917.setTransform(-76.9,143.4);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_918.setTransform(-78.1,-141);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_919.setTransform(-78.1,214.8);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_920.setTransform(-78.7,85.2);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_921.setTransform(-84.7,1.2);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_922.setTransform(-85.9,19.2);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_923.setTransform(-85.9,-124.2);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_924.setTransform(-87.7,129);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_925.setTransform(-88.3,-211.2);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_926.setTransform(-88.9,152.4);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_927.setTransform(-88.9,-69);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_928.setTransform(-89.5,210.6);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_929.setTransform(-90.7,-143.4);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_930.setTransform(-91.9,69.6);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_931.setTransform(-93.7,-57.6);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_932.setTransform(-93.7,27);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_933.setTransform(-95.5,-124.2);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_934.setTransform(-96.1,-111.6);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_935.setTransform(-97.9,120.6);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_936.setTransform(-98.5,135);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_937.setTransform(-98.5,-21);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_938.setTransform(-98.5,205.8);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_939.setTransform(-98.5,-204);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_940.setTransform(-99.1,-46.8);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_941.setTransform(-99.1,-75.6);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_942.setTransform(-102.7,-54.6);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_943.setTransform(-102.7,-2.4);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_944.setTransform(-103.3,49.2);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_945.setTransform(-104.5,199.2);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_946.setTransform(-107.5,72);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_947.setTransform(-108.1,106.2);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_948.setTransform(-109.3,162);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_949.setTransform(-109.3,-138.6);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_950.setTransform(-111.1,-36);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_951.setTransform(-111.1,-192.6);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_952.setTransform(-114.1,-88.8);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_953.setTransform(-116.5,-183.6);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_954.setTransform(-117.1,-3.6);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_955.setTransform(-117.1,-67.2);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_956.setTransform(-118.3,28.8);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_957.setTransform(-118.3,192.6);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_958.setTransform(-120.1,138.6);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_959.setTransform(-120.7,100.8);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_960.setTransform(-122.5,66.6);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_961.setTransform(-122.5,42);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_962.setTransform(-123.7,151.8);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_963.setTransform(-126.7,21.6);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_964.setTransform(-127.3,187.2);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_965.setTransform(-127.9,121.2);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_966.setTransform(-130.3,-164.4);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_967.setTransform(-131.5,162);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_968.setTransform(-134.5,-103.2);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_969.setTransform(-135.1,-70.2);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_970.setTransform(-135.1,183.6);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_971.setTransform(-135.1,6);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_972.setTransform(-136.3,-121.8);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_973.setTransform(-136.9,136.2);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_974.setTransform(-137.5,15.6);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_975.setTransform(-137.5,100.2);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_976.setTransform(-137.5,66.6);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_977.setTransform(-138.7,-148.2);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_978.setTransform(-139.9,-46.8);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_979.setTransform(-142.9,-84.6);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_980.setTransform(-142.9,175.2);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_981.setTransform(-144.7,-134.4);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_982.setTransform(-145.9,30.6);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_983.setTransform(-147.1,-3.6);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_984.setTransform(-148.9,72.6);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_985.setTransform(-150.7,100.8);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_986.setTransform(-153.7,162.6);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_987.setTransform(-153.7,-118.8);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_988.setTransform(-155.5,10.8);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_989.setTransform(-156.1,-58.8);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_990.setTransform(-157.3,55.2);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_991.setTransform(-157.9,-105);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_992.setTransform(-158.5,-18.6);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_993.setTransform(-159.7,154.2);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_994.setTransform(-162.7,118.2);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_995.setTransform(-163.3,94.2);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_996.setTransform(-165.1,40.2);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_997.setTransform(-166.3,147);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_998.setTransform(-166.9,-87.6);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_999.setTransform(-168.7,22.8);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_1000.setTransform(-169.3,4.8);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_1001.setTransform(-171.1,-70.2);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_1002.setTransform(-172.3,-22.2);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_1003.setTransform(-172.3,139.2);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_1004.setTransform(-174.1,87.6);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_1005.setTransform(-174.7,-61.8);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_1006.setTransform(-177.7,132.6);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_1007.setTransform(-181.3,-43.2);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_1008.setTransform(-181.9,119.4);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_1009.setTransform(-183.7,113.4);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_1010.setTransform(-187.9,106.8);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_1011.setTransform(-189.7,-12);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_1012.setTransform(-190.3,-28.2);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_1013.setTransform(-191.5,97.8);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_1014.setTransform(-191.5,-1.8);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_1015.setTransform(-193.3,83.4);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_1016.setTransform(-193.9,42);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_1017.setTransform(-195.7,27);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_1018.setTransform(-196.3,53.4);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_1019.setTransform(-198.7,67.8);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_1020.setTransform(-199.3,11.4);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f().s("#378FAB").ss(0.8).p("AgQhwIhyBaIEACCg");
	this.shape_1021.setTransform(149.8,16.1,1,1,0,0,0,0,0.2);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#378FAB").ss(0.8).p("AgvhtIAqBsIA0Bwg");
	this.shape_1022.setTransform(162.8,-75.1,1,1,0,0,0,0.9,2.3);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f().s("#378FAB").ss(0.8).p("AiBhyIA2DoIDKhmg");
	this.shape_1023.setTransform(149.8,25.3,1,1,0,0,0,0.1,0.2);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#378FAB").ss(0.8).p("AhjgoIAABGICyAMg");
	this.shape_1024.setTransform(158.1,1.6,1,1,0,0,0,0,0.2);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f().s("#378FAB").ss(0.8).p("AhnAoIBgAeIBqiCg");
	this.shape_1025.setTransform(153.1,32.8,1,1,0,0,0,0.6,0);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#378FAB").ss(0.8).p("AhSg9IBwB8IA8hMg");
	this.shape_1026.setTransform(152.8,160.9,1,1,0,0,0,0.6,0.2);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f().s("#378FAB").ss(0.8).p("AhXhxICODcIAkjQg");
	this.shape_1027.setTransform(157.2,16,1,1,0,0,0,0.3,0);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#378FAB").ss(0.8).p("AgdhpIgqBqICIBmg");
	this.shape_1028.setTransform(155.9,120.6,1,1,0,0,0,0,0.5);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f().s("#378FAB").ss(0.8).p("AAniMIh2EAICsjQg");
	this.shape_1029.setTransform(147.7,-78.9,1,1,0,0,0,0,0.2);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#378FAB").ss(0.8).p("Agng/IAYBeIA0Awg");
	this.shape_1030.setTransform(153.8,-94.7,1,1,0,0,0,0.5,1.7);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f().s("#378FAB").ss(0.8).p("AhrhpICyDiIA2hCg");
	this.shape_1031.setTransform(146.7,98.3,1,1,0,0,0,1,1);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#378FAB").ss(0.8).p("Ag8hmIhODQIESgqg");
	this.shape_1032.setTransform(140.4,-47.3,1,1,0,0,0,0,0.2);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f().s("#378FAB").ss(0.8).p("AiIBRIDWByIA8l+g");
	this.shape_1033.setTransform(140.4,-22.2,1,1,0,0,0,0.2,0);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#378FAB").ss(0.8).p("AiNheIAADiIESkMg");
	this.shape_1034.setTransform(140.7,-27.4);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f().s("#378FAB").ss(0.8).p("ABHhqIisDQIDWhmg");
	this.shape_1035.setTransform(149.9,-77.4,1,1,0,0,0,0,0.3);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#378FAB").ss(0.8).p("AgxiIIg2BgIDECmg");
	this.shape_1036.setTransform(144.7,-53.3,1,1,0,0,0,0,0.4);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f().s("#378FAB").ss(0.8).p("AhqhSICaDQIA8kAg");
	this.shape_1037.setTransform(156.6,72.9,1,1,0,0,0,0.2,0);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#378FAB").ss(0.8).p("AAdhMIhSCOIB2heg");
	this.shape_1038.setTransform(142.7,-99.6,1,1,0,0,0,0,0.3);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f().s("#378FAB").ss(0.8).p("AiUhBIBsC4IC4jug");
	this.shape_1039.setTransform(148.2,142.6,1,1,0,0,0,0.2,0);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#378FAB").ss(0.8).p("AgviTIAkESIA6j0g");
	this.shape_1040.setTransform(147,51.8,1,1,0,0,0,0.1,0.1);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f().s("#378FAB").ss(0.8).p("AADiUIg0BCIBeDQg");
	this.shape_1041.setTransform(157.9,118.2,1,1,0,0,0,0,0.4);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#378FAB").ss(0.8).p("Ag3hoIAqDWIBGhag");
	this.shape_1042.setTransform(149.7,165.7,1,1,0,0,0,0.2,0.7);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f().s("#378FAB").ss(0.8).p("AhIiJIgkEYIDWg2g");
	this.shape_1043.setTransform(142.2,101,1,1,0,0,0,0,0.5);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f().s("#378FAB").ss(0.8).p("AhlAAICsA2IAqhqg");
	this.shape_1044.setTransform(142.4,114.8,1,1,0,0,0,0.9,0);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f().s("#378FAB").ss(0.8).p("Ah2g4IB8BwIByhYg");
	this.shape_1045.setTransform(136.6,7.9,1,1,0,0,0,0.6,0.1);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f().s("#378FAB").ss(0.8).p("AAKhNIiaCaIEkg2g");
	this.shape_1046.setTransform(147.6,128.3,1,1,0,0,0,0,0.1);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f().s("#378FAB").ss(0.8).p("ABUhkIhhBuIhIBaICpjIIAhgm");
	this.shape_1047.setTransform(156.7,166);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#378FAB").ss(0.8).p("AhIiGIAYEAIB2kAg");
	this.shape_1048.setTransform(144.6,-79.7);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f().s("#378FAB").ss(0.8).p("Agwh3Ig8D0IDWgwg");
	this.shape_1049.setTransform(156.6,52.4,1,1,0,0,0,0,0.4);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#378FAB").ss(0.8).p("AgMgGIhUBkIC+i+g");
	this.shape_1050.setTransform(138.6,185.9);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f().s("#378FAB").ss(0.8).p("AhjhPIgYCgIDugwg");
	this.shape_1051.setTransform(136.5,-5.8,1,1,0,0,0,0,0.2);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#378FAB").ss(0.8).p("AhoAMIDuAYIAAhGg");
	this.shape_1052.setTransform(136.2,0.9,1,1,0,0,0,1.6,0);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f().s("#378FAB").ss(0.8).p("AA7hcIjcBeIFIBag");
	this.shape_1053.setTransform(127.1,145.3);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f().s("#378FAB").ss(0.8).p("AiiiMICyEYICWi+g");
	this.shape_1054.setTransform(127.5,159.8,1,1,0,0,0,0.3,0.2);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f().s("#378FAB").ss(0.8).p("AhbhUIAeCsICUg8g");
	this.shape_1055.setTransform(133.4,34.3,1,1,0,0,0,0.1,0.3);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f().s("#378FAB").ss(0.8).p("AhCg7IgwB2IDchAg");
	this.shape_1056.setTransform(138,121);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f().s("#378FAB").ss(0.8).p("AhygJIBCBYICaiag");
	this.shape_1057.setTransform(138.2,128,1,1,0,0,0,0.2,0);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f().s("#378FAB").ss(0.8).p("Ahdh/IBqEAIBUiOg");
	this.shape_1058.setTransform(136.2,-105.8,1,1,0,0,0,0.3,0.4);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f().s("#378FAB").ss(0.8).p("Ag5hRIA6BkIA2BCg");
	this.shape_1059.setTransform(134.8,-138.1,1,1,0,0,0,1.3,2.1);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f().s("#378FAB").ss(0.8).p("AAhiBIisB+IEYCCg");
	this.shape_1060.setTransform(123.1,-105.8,1,1,0,0,0,0,0.2);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f().s("#378FAB").ss(0.8).p("AiOhZIBOC4IDKg2g");
	this.shape_1061.setTransform(123.7,-97.1,1,1,0,0,0,0.3,0.3);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f().s("#378FAB").ss(0.8).p("Ahmg8IBOCsIB8jig");
	this.shape_1062.setTransform(127.3,-81.7,1,1,0,0,0,0.1,0);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f().s("#378FAB").ss(0.8).p("ABXg3IjWBkIEMAMg");
	this.shape_1063.setTransform(152.5,-71.9,1,1,0,0,0,0,0.1);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f().s("#378FAB").ss(0.8).p("AgphqIAADWIBShmg");
	this.shape_1064.setTransform(133.1,185,1,1,0,0,0,0,0.6);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f().s("#378FAB").ss(0.8).p("AhBCWICCkr");
	this.shape_1065.setTransform(175.1,137.1);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().s("#378FAB").ss(0.8).p("Ahfg4IBUBwIBqhYg");
	this.shape_1066.setTransform(138.8,179.5,1,1,0,0,0,0.3,0.1);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f().s("#378FAB").ss(0.8).p("AiUhPIAYCgIEGhCg");
	this.shape_1067.setTransform(121.1,85.2,1,1,0,0,0,0.1,0.1);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f().s("#378FAB").ss(0.8).p("AiCgvICmCgIBgjig");
	this.shape_1068.setTransform(121.9,98.2,1,1,0,0,0,0.3,0);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f().s("#378FAB").ss(0.8).p("AhHg+IBeB8IA2heg");
	this.shape_1069.setTransform(132.3,-64,1,1,0,0,0,0.4,0.1);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#378FAB").ss(0.8).p("ABGg9IigAGIC+Bwg");
	this.shape_1070.setTransform(135.6,-113.4);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f().s("#378FAB").ss(0.8).p("AATg9IiCBwIDiAMg");
	this.shape_1071.setTransform(122.7,-64,1,1,0,0,0,0,0.2);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f().s("#378FAB").ss(0.8).p("AAXiOIimC+IEeBgg");
	this.shape_1072.setTransform(120.5,72.5,1,1,0,0,0,0,0.3);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f().s("#378FAB").ss(0.8).p("Ag/h0IAADoIB8h2g");
	this.shape_1073.setTransform(130.5,14.2,1,1,0,0,0,0,0.4);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f().s("#378FAB").ss(0.8).p("AhxhqIBaDQICIjEg");
	this.shape_1074.setTransform(123.1,-48.3,1,1,0,0,0,0.2,0);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f().s("#378FAB").ss(0.8).p("AgdhbIAMCsIAuh2g");
	this.shape_1075.setTransform(128.3,119.1,1,1,0,0,0,0,0.4);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f().s("#378FAB").ss(0.8).p("AhIBrIA8AMIBMjQg");
	this.shape_1076.setTransform(128,-48.8,1,1,0,0,0,0.2,0);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f().s("#378FAB").ss(0.8).p("AhCiQIgwEqIDigSg");
	this.shape_1077.setTransform(117.6,160.7,1,1,0,0,0,0,0.6);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f().s("#378FAB").ss(0.8).p("AA0h6Ih8DiICUAeg");
	this.shape_1078.setTransform(132,-80.2,1,1,0,0,0,0,0.7);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f().s("#378FAB").ss(0.8).p("AilBMICyBUICWk2g");
	this.shape_1079.setTransform(165.1,-10.3,1,1,0,0,0,0.4,0);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f().s("#378FAB").ss(0.8).p("AhYhJIBUCUIBeheg");
	this.shape_1080.setTransform(120.1,197.6,1,1,0,0,0,0.3,0.2);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f().s("#378FAB").ss(0.8).p("AA3hoIiUC+IC+AYg");
	this.shape_1081.setTransform(138.3,165.4,1,1,0,0,0,0,0.4);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f().s("#378FAB").ss(0.8).p("ABUhZIi+AMIDcCgg");
	this.shape_1082.setTransform(115.6,34.5);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f().s("#378FAB").ss(0.8).p("AhehOIgqCOIEGASg");
	this.shape_1083.setTransform(114.4,34.9,1,1,0,0,0,0,0.2);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f().s("#378FAB").ss(0.8).p("Ah0g/IAwCOICyigg");
	this.shape_1084.setTransform(117.9,181.9,1,1,0,0,0,0.1,0);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f().s("#378FAB").ss(0.8).p("AhWA4ICyA2IAAjWg");
	this.shape_1085.setTransform(119.9,184.3,1,1,0,0,0,0.3,0);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f().s("#378FAB").ss(0.8).p("AAvg8Ih8B8ICggGg");
	this.shape_1086.setTransform(134.3,-125.2,1,1,0,0,0,0,0.3);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f().s("#378FAB").ss(0.8).p("AhLhqIgqCUIDiBCg");
	this.shape_1087.setTransform(134.7,54.1,1,1,0,0,0,0,0.4);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f().s("#378FAB").ss(0.8).p("ABEhSIiOCsICaAAg");
	this.shape_1088.setTransform(118.4,118.3,1,1,0,0,0,0,0.5);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f().s("#378FAB").ss(0.8).p("AhPhgIAAC4ICai4g");
	this.shape_1089.setTransform(118.9,136.6);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f().s("#378FAB").ss(0.8).p("AiOhXIESCsIAYigg");
	this.shape_1090.setTransform(111.6,-6.4,1,1,0,0,0,0.8,0);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f().s("#378FAB").ss(0.8).p("AhXiiIAAFIICsh+g");
	this.shape_1091.setTransform(117.9,-122.6,1,1,0,0,0,0,0.5);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f().s("#378FAB").ss(0.8).p("AAbhUIhwgYICsDKg");
	this.shape_1092.setTransform(117.7,-128.6);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f().s("#378FAB").ss(0.8).p("AA5iNIiUA8IC4DWg");
	this.shape_1093.setTransform(136.3,51.2,1,1,0,0,0,0,0.1);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f().s("#378FAB").ss(0.8).p("Ah9hRIBsCmICOisg");
	this.shape_1094.setTransform(112.9,118.4,1,1,0,0,0,0.2,0);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f().s("#378FAB").ss(0.8).p("AgqhRIhUCmID6gGg");
	this.shape_1095.setTransform(112.8,101.7,1,1,0,0,0,0,0.2);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f().s("#378FAB").ss(0.8).p("AAxheIiaC4IDcheg");
	this.shape_1096.setTransform(121.5,136.6,1,1,0,0,0,0,0.2);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f().s("#378FAB").ss(0.8).p("AhbAkIBwAYIBIhwg");
	this.shape_1097.setTransform(119,-143.1,1,1,0,0,0,0.7,0);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f().s("#378FAB").ss(0.8).p("Ah+hUIDcCmIAqiUg");
	this.shape_1098.setTransform(114.1,49.7,1,1,0,0,0,0.7,0.1);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f().s("#378FAB").ss(0.8).p("AAPhbIhqCCIC4A2g");
	this.shape_1099.setTransform(160.9,36.2,1,1,0,0,0,0,0.3);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f().s("#378FAB").ss(0.8).p("AhlAXIASBOICmi+g");
	this.shape_1100.setTransform(114.5,67);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f().s("#378FAB").ss(0.8).p("AAkh0Ih8B2ICyByg");
	this.shape_1101.setTransform(133,25.6,1,1,0,0,0,0,0.3);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f().s("#378FAB").ss(0.8).p("AgciIIA6DuIAAjig");
	this.shape_1102.setTransform(123.4,-24.4);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f().s("#378FAB").ss(0.8).p("Ahfh7IA8D6ICChyg");
	this.shape_1103.setTransform(115.3,-71.4,1,1,0,0,0,0.2,0.4);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f().s("#378FAB").ss(0.8).p("AARhaIhwAkIC+CIg");
	this.shape_1104.setTransform(115.1,-78.8);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f().s("#378FAB").ss(0.8).p("AAzgtIh2BeICOAAg");
	this.shape_1105.setTransform(144.1,-98,1,1,0,0,0,0,0.2);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f().s("#378FAB").ss(0.8).p("AhviKIAkEYIC4hyg");
	this.shape_1106.setTransform(112,55.5,1,1,0,0,0,0.1,0.4);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f().s("#378FAB").ss(0.8).p("AhBhXIA8CyIBGi+g");
	this.shape_1107.setTransform(127.1,-128.2);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f().s("#378FAB").ss(0.8).p("AAGg2IhGBwICCgMg");
	this.shape_1108.setTransform(127,-142.6,1,1,0,0,0,0,0.3);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f().s("#378FAB").ss(0.8).p("AgkhQIg8CmIC+gMg");
	this.shape_1109.setTransform(114.6,18.4,1,1,0,0,0,0,0.3);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f().s("#378FAB").ss(0.8).p("AgmhmIgSCCIBqBOg");
	this.shape_1110.setTransform(115.4,-47.9,1,1,0,0,0,0,0.8);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f().s("#378FAB").ss(0.8).p("AhwiRIB2EeIBsjcg");
	this.shape_1111.setTransform(134.4,72.6,1,1,0,0,0,0.2,0.1);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f().s("#378FAB").ss(0.8).p("AiFiFICOEGIB+j6g");
	this.shape_1112.setTransform(153.3,-54,1,1,0,0,0,0.2,0);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f().s("#378FAB").ss(0.8).p("AgShAIhaBwIDWASg");
	this.shape_1113.setTransform(103.2,-176.5,1,1,0,0,0,0,0.2);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().s("#378FAB").ss(0.8).p("AhphUICCCmIBUiUg");
	this.shape_1114.setTransform(103.3,-163.3,1,1,0,0,0,0.4,0);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f().s("#378FAB").ss(0.8).p("Ag0hIIAkCaIBGAMg");
	this.shape_1115.setTransform(105.7,118.7,1,1,0,0,0,0.3,1.2);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f().s("#378FAB").ss(0.8).p("AhxhMIAkCaIC4hYg");
	this.shape_1116.setTransform(117,-147.2,1,1,0,0,0,0.1,0.1);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f().s("#378FAB").ss(0.8).p("AiGh4ICOD6ICEhOg");
	this.shape_1117.setTransform(110.5,-2.6,1,1,0,0,0,0.5,0.5);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f().s("#378FAB").ss(0.8).p("AAMhjIhGC+IB8h8g");
	this.shape_1118.setTransform(132.4,-127.9,1,1,0,0,0,0,0.3);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f().s("#378FAB").ss(0.8).p("AgXhrIhsDcIEGgMg");
	this.shape_1119.setTransform(148.1,75.7,1,1,0,0,0,0,0.3);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f().s("#378FAB").ss(0.8).p("AhYhjICaDEIAeiOg");
	this.shape_1120.setTransform(161.1,50.1,1,1,0,0,0,0.5,0.2);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f().s("#378FAB").ss(0.8).p("Ag/hEIg8CCIDuh8g");
	this.shape_1121.setTransform(99.3,151.8);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("#378FAB").ss(0.8).p("AhHh3IASEAIB8gGg");
	this.shape_1122.setTransform(103.8,-2.3,1,1,0,0,0,0.1,0.9);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f().s("#378FAB").ss(0.8).p("AASheIhqC+ICyAGg");
	this.shape_1123.setTransform(101.8,135.8,1,1,0,0,0,0,0.5);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#378FAB").ss(0.8).p("Ag8hSIAGCsIBwgkg");
	this.shape_1124.setTransform(111,-92.8,1,1,0,0,0,0,0.5);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f().s("#378FAB").ss(0.8).p("AhQhRIgYCmIDKgwg");
	this.shape_1125.setTransform(99.8,-49.4,1,1,0,0,0,0,0.2);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("#378FAB").ss(0.8).p("AhzgKICsAuIBIhGg");
	this.shape_1126.setTransform(156.8,155.7,1,1,0,0,0,1.3,0);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f().s("#378FAB").ss(0.8).p("Aiog0IAMBeIEqAMg");
	this.shape_1127.setTransform(112.2,-19.4,1,1,0,0,0,0,0.1);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f().s("#378FAB").ss(0.8).p("ABShJIjKASID6B8g");
	this.shape_1128.setTransform(97.8,182.9);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f().s("#378FAB").ss(0.8).p("AgWhkIgqAwIB2CIg");
	this.shape_1129.setTransform(111.4,-96,1,1,0,0,0,0,0.3);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f().s("#378FAB").ss(0.8).p("AhcgTIAkCaICOkMg");
	this.shape_1130.setTransform(100.4,-126);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f().s("#378FAB").ss(0.8).p("AAoh+IiIEGIDEgMg");
	this.shape_1131.setTransform(101.4,-70.9,1,1,0,0,0,0,0.6);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f().s("#378FAB").ss(0.8).p("Ahdg2ICyB2IASiCg");
	this.shape_1132.setTransform(101.7,-52.3,1,1,0,0,0,0.6,0);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f().s("#378FAB").ss(0.8).p("ABih3Ij6CCIE2Bsg");
	this.shape_1133.setTransform(110.6,-25.9,1,1,0,0,0,0,0.1);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("#378FAB").ss(0.8).p("Ahng5IA8CgICOjQg");
	this.shape_1134.setTransform(99.7,-35.3);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f().s("#378FAB").ss(0.8).p("AAVhrIiODQID6iCg");
	this.shape_1135.setTransform(107.5,-34.9,1,1,0,0,0,0,0.1);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("#378FAB").ss(0.8).p("AhchcIgMC+IDKgSg");
	this.shape_1136.setTransform(96.2,167.7,1,1,0,0,0,0,0.3);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f().s("#378FAB").ss(0.8).p("AgwBjIA6A2IAkkYg");
	this.shape_1137.setTransform(130.2,99.5);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("#378FAB").ss(0.8).p("Ah6iwICgFgIBajig");
	this.shape_1138.setTransform(98.3,195.4,1,1,0,0,0,0.3,0.3);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f().s("#378FAB").ss(0.8).p("ABxhMIj6B2IEeAkg");
	this.shape_1139.setTransform(94.1,-147.2,1,1,0,0,0,0,0.1);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f().s("#378FAB").ss(0.8).p("ABqhUIjQCIIDWAkg");
	this.shape_1140.setTransform(94.2,-92.9,1,1,0,0,0,0,0.2);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f().s("#378FAB").ss(0.8).p("AhriYIBOEqICIkGg");
	this.shape_1141.setTransform(94.7,-72.5);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f().s("#378FAB").ss(0.8).p("AAEh8IhqD0IDQiIg");
	this.shape_1142.setTransform(94.2,-99.6,1,1,0,0,0,0,0.3);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f().s("#378FAB").ss(0.8).p("Ah1gXIC+CsIAwkqg");
	this.shape_1143.setTransform(99,160.5,1,1,0,0,0,0.3,0);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("#378FAB").ss(0.8).p("AgpB5IBMhCIAMigg");
	this.shape_1144.setTransform(106.5,199.9,1,1,0,0,0,0.4,-0.6);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f().s("#378FAB").ss(0.8).p("AiQhKIBsCUICyhwg");
	this.shape_1145.setTransform(95.1,-135.4,1,1,0,0,0,0.3,0.1);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f().s("#378FAB").ss(0.8).p("AAEhJIhSCUICgg2g");
	this.shape_1146.setTransform(113.4,-162.3,1,1,0,0,0,0,0.3);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f().s("#378FAB").ss(0.8).p("AhIhDIhgCIIFIgeg");
	this.shape_1147.setTransform(88.2,65.4);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f().s("#378FAB").ss(0.8).p("AgdheIhaBOIDoBqg");
	this.shape_1148.setTransform(92.9,60.5,1,1,0,0,0,0,0.2);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f().s("#378FAB").ss(0.8).p("AghhtIBGDEIAAi4g");
	this.shape_1149.setTransform(107.2,136.8,1,1,0,0,0,0.1,0.1);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f().s("#378FAB").ss(0.8).p("AiPhYICaC4ICKhCg");
	this.shape_1150.setTransform(87.5,210.1,1,1,0,0,0,0.6,0.4);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f().s("#378FAB").ss(0.8).p("AgPivIiEDoIEkB4g");
	this.shape_1151.setTransform(87.3,195.3,1,1,0,0,0,0,0.4);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("#378FAB").ss(0.8).p("AgIg3IhgBqIDQAGg");
	this.shape_1152.setTransform(90.8,-188.8,1,1,0,0,0,0,0.2);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f().s("#378FAB").ss(0.8).p("Ahxh/IB8EGIBshgg");
	this.shape_1153.setTransform(89.1,37.7,1,1,0,0,0,0.4,0.6);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f().s("#378FAB").ss(0.8).p("AhchOIAACaICyh2g");
	this.shape_1154.setTransform(91.4,114.5);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f().s("#378FAB").ss(0.8).p("Agmg+Ig2BYICyAkg");
	this.shape_1155.setTransform(91.4,104,1,1,0,0,0,0,0.2);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f().s("#378FAB").ss(0.8).p("Ahmg8IB2B2IBahwg");
	this.shape_1156.setTransform(91,-177.7,1,1,0,0,0,0.4,0);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f().s("#378FAB").ss(0.8).p("ABBh0Ii4DuID0gYg");
	this.shape_1157.setTransform(155.9,142.7,1,1,0,0,0,0,0.4);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().s("#378FAB").ss(0.8).p("AgGgCIg8BMICCiUg");
	this.shape_1158.setTransform(162,159.7);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f().s("#378FAB").ss(0.8).p("AgkhKIgMCgIBegMg");
	this.shape_1159.setTransform(114.6,198.1,1,1,0,0,0,0,0.7);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f().s("#378FAB").ss(0.8).p("AgEiPIh4EeID6h4g");
	this.shape_1160.setTransform(92.8,-157.1,1,1,0,0,0,0,0.3);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f().s("#378FAB").ss(0.8).p("Ahdg/IAGB8ICshwg");
	this.shape_1161.setTransform(87.9,-10);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f().s("#378FAB").ss(0.8).p("AhBgxIBkBqIAqgwg");
	this.shape_1162.setTransform(102.1,-106.9,1,1,0,0,0,0.8,0.5);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f().s("#378FAB").ss(0.8).p("AA2g7IigA2IDcBAg");
	this.shape_1163.setTransform(116.2,-154.4);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f().s("#378FAB").ss(0.8).p("AALhOIhSBwICOAwg");
	this.shape_1164.setTransform(88.1,-32.7,1,1,0,0,0,0,0.4);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f().s("#378FAB").ss(0.8).p("Ag+hCIgYCCICmhSg");
	this.shape_1165.setTransform(87.2,-23);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f().s("#378FAB").ss(0.8).p("AgkhrIgkDWICOAMg");
	this.shape_1166.setTransform(85.8,133.7,1,1,0,0,0,0,0.7);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f().s("#378FAB").ss(0.8).p("ABIidIiNEMICNA8g");
	this.shape_1167.setTransform(101.8,-122.7,1,1,0,0,0,0,0.9);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f().s("#378FAB").ss(0.8).p("Ah+hLIDoCgIAeisg");
	this.shape_1168.setTransform(148.2,94.4,1,1,0,0,0,0.6,0);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f().s("#378FAB").ss(0.8).p("AADijIhYAGICmEkg");
	this.shape_1169.setTransform(83.5,-71.4);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f().s("#378FAB").ss(0.8).p("AgyipIhCFaIDog2g");
	this.shape_1170.setTransform(80,-69.6,1,1,0,0,0,0,0.6);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f().s("#378FAB").ss(0.8).p("AAjiPIhqBgICOC4g");
	this.shape_1171.setTransform(97.1,55.9,1,1,0,0,0,0,0.3);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f().s("#378FAB").ss(0.8).p("Aith9ICiD6IC4jKg");
	this.shape_1172.setTransform(89,85.1,1,1,0,0,0,0.3,0.1);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f().s("#378FAB").ss(0.8).p("AhGhJIBSCOIA8iCg");
	this.shape_1173.setTransform(85.8,151.2,1,1,0,0,0,0.2,0);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f().s("#378FAB").ss(0.8).p("Ag+hZIAeCyIBehqg");
	this.shape_1174.setTransform(83.7,-192.5,1,1,0,0,0,0.1,0.3);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f().s("#378FAB").ss(0.8).p("Ah1gjIBgB8ICIiyg");
	this.shape_1175.setTransform(80.3,-48.8,1,1,0,0,0,0.2,0);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f().s("#378FAB").ss(0.8).p("ABLhPIjQCIIESAYg");
	this.shape_1176.setTransform(90.7,18.7,1,1,0,0,0,0,0.2);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f().s("#378FAB").ss(0.8).p("Ag6guIAeBkIBShwg");
	this.shape_1177.setTransform(83.8,-35.2);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f().s("#378FAB").ss(0.8).p("AhZiEIBIEAIBqj0g");
	this.shape_1178.setTransform(85.7,-100.3);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f().s("#378FAB").ss(0.8).p("AhZg5IgGBqICyAMg");
	this.shape_1179.setTransform(86.3,-118.3,1,1,0,0,0,0,0.3);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f().s("#378FAB").ss(0.8).p("ABUgtIimBSICyAMg");
	this.shape_1180.setTransform(86.8,-20,1,1,0,0,0,0,0.2);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f().s("#378FAB").ss(0.8).p("AhCBgIBwgMIAYimg");
	this.shape_1181.setTransform(85,-49.6,1,1,0,0,0,0.4,-0.1);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f().s("#378FAB").ss(0.8).p("AA1hPIiIAkICsB2g");
	this.shape_1182.setTransform(85.7,-120);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f().s("#378FAB").ss(0.8).p("ABZg2Ii+BkIDWAMg");
	this.shape_1183.setTransform(164.3,-45.5,1,1,0,0,0,0,0.2);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f().s("#378FAB").ss(0.8).p("AiDhRIAwCgIDQiIg");
	this.shape_1184.setTransform(85.8,16.3,1,1,0,0,0,0.1,0);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f().s("#378FAB").ss(0.8).p("AhqhzIBqDiIBsi+g");
	this.shape_1185.setTransform(93,133.8,1,1,0,0,0,0.2,0.1);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f().s("#378FAB").ss(0.8).p("AiDhTIDoCmIAqiOg");
	this.shape_1186.setTransform(91.2,32.9,1,1,0,0,0,0.7,0.1);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f().s("#378FAB").ss(0.8).p("Ag2hrIA6DWIA2h8g");
	this.shape_1187.setTransform(168.2,141.9,1,1,0,0,0,0.2,0.5);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f().s("#378FAB").ss(0.8).p("AiKgdIBUA6ICyg6g");
	this.shape_1188.setTransform(73.8,180.3,1,1,0,0,0,0.6,0);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f().s("#378FAB").ss(0.8).p("AgqhVIgeCsICOhOg");
	this.shape_1189.setTransform(165.6,94.5,1,1,0,0,0,0,0.3);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f().s("#378FAB").ss(0.8).p("AiZhKICyCgICEisg");
	this.shape_1190.setTransform(66.8,130.9,1,1,0,0,0,0.5,0);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f().s("#378FAB").ss(0.8).p("AjAhNIBmCsIESi+g");
	this.shape_1191.setTransform(68.6,167.8,1,1,0,0,0,0.2,0);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f().s("#378FAB").ss(0.8).p("ABsgzIjiAMIEABYg");
	this.shape_1192.setTransform(67,-34.7);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f().s("#378FAB").ss(0.8).p("ABvhPIkkCgIF4gSg");
	this.shape_1193.setTransform(67.3,151.9,1,1,0,0,0,0,0.1);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f().s("#378FAB").ss(0.8).p("AgUg+IhUAqIDKBMg");
	this.shape_1194.setTransform(82.4,-177.6);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f().s("#378FAB").ss(0.8).p("AAZhVIiyCsIE2gMg");
	this.shape_1195.setTransform(66.3,114.7,1,1,0,0,0,0,0.2);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f().s("#378FAB").ss(0.8).p("AhBBIIBeAqIAkjWg");
	this.shape_1196.setTransform(75.7,132.3,1,1,0,0,0,0.2,0);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f().s("#378FAB").ss(0.8).p("AgGi1IjGCiIGWDEg");
	this.shape_1197.setTransform(60.6,40.9,1,1,0,0,0,0,0.2);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f().s("#378FAB").ss(0.8).p("AhDAWIBqBIIAei4g");
	this.shape_1198.setTransform(73.6,-133.9,1,1,0,0,0,0.3,0);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f().s("#378FAB").ss(0.8).p("Ag9hRIBACgIA8img");
	this.shape_1199.setTransform(104.6,18.7,1,1,0,0,0,0.1,0);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f().s("#378FAB").ss(0.8).p("ABYg+IisAwICyBMg");
	this.shape_1200.setTransform(69.6,-10.1);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f().s("#378FAB").ss(0.8).p("AiEilICEFUICIhyg");
	this.shape_1201.setTransform(67,-148.6,1,1,0,0,0,0.4,0.6);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f().s("#378FAB").ss(0.8).p("AiBiGIA8EMIDEiyg");
	this.shape_1202.setTransform(68.2,-25,1,1,0,0,0,0.1,0.1);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f().s("#378FAB").ss(0.8).p("Ahki6IBUFsIB2keg");
	this.shape_1203.setTransform(82.1,-160.7,1,1,0,0,0,0.1,0.2);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f().s("#378FAB").ss(0.8).p("AA6hsIjEDKIEkigg");
	this.shape_1204.setTransform(63,150.4);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f().s("#378FAB").ss(0.8).p("Ahbg6IAwCsICCjog");
	this.shape_1205.setTransform(76.9,189.2);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f().s("#378FAB").ss(0.8).p("Agah2IgSEGIBYgGg");
	this.shape_1206.setTransform(79.4,-100.3,1,1,0,0,0,0,1.4);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f().s("#378FAB").ss(0.8).p("AAThCIiCCIIDigMg");
	this.shape_1207.setTransform(66.3,-45.5,1,1,0,0,0,0,0.2);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f().s("#378FAB").ss(0.8).p("AhcBbICsgwIAYiCg");
	this.shape_1208.setTransform(71.2,-21.1,1,1,0,0,0,0.8,-0.3);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f().s("#378FAB").ss(0.8).p("ABBg6Ii4BwIEAg2g");
	this.shape_1209.setTransform(63.5,-202);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f().s("#378FAB").ss(0.8).p("AhZhfIAwC+ICChwg");
	this.shape_1210.setTransform(70.2,-1.8,1,1,0,0,0,0.1,0.2);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f().s("#378FAB").ss(0.8).p("AAvh5Ii+D0IEkhCg");
	this.shape_1211.setTransform(61.7,-119.1,1,1,0,0,0,0,0.3);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f().s("#378FAB").ss(0.8).p("AhDA+IBCAGIBAh2g");
	this.shape_1212.setTransform(73.1,1.3,1,1,0,0,0,0.4,0);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f().s("#378FAB").ss(0.8).p("AiOhCIESDEIASkGg");
	this.shape_1213.setTransform(62.1,-100.3,1,1,0,0,0,0.5,0);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f().s("#378FAB").ss(0.8).p("ABEhOIiCgGICCCgg");
	this.shape_1214.setTransform(75.2,114.4);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f().s("#378FAB").ss(0.8).p("AhEijIgYFOIC4hUg");
	this.shape_1215.setTransform(78.2,89.3,1,1,0,0,0,0,0.6);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f().s("#378FAB").ss(0.8).p("AhXAqICCAGIA2hYg");
	this.shape_1216.setTransform(78.7,101.7,1,1,0,0,0,1,0);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f().s("#378FAB").ss(0.8).p("Ah9g5IDKCmIA2jcg");
	this.shape_1217.setTransform(64.5,-190.6,1,1,0,0,0,0.4,0);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f().s("#378FAB").ss(0.8).p("ABLhLIiyB2IDWAkg");
	this.shape_1218.setTransform(92.5,118,1,1,0,0,0,0,0.2);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f().s("#378FAB").ss(0.8).p("AjLioICEFUIESiQg");
	this.shape_1219.setTransform(60.7,55.9,1,1,0,0,0,0.2,0.3);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f().s("#378FAB").ss(0.8).p("AiEhiIgSDKIEkgGg");
	this.shape_1220.setTransform(60.6,-96.8,1,1,0,0,0,0,0.3);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f().s("#378FAB").ss(0.8).p("AAyi4Ii4CKIEMDig");
	this.shape_1221.setTransform(66.8,-160.9,1,1,0,0,0,0,0.2);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f().s("#378FAB").ss(0.8).p("AAAhUIg7CUIB8iOg");
	this.shape_1222.setTransform(65.9,16);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f().s("#378FAB").ss(0.8).p("AhngpIB8B8IBUimg");
	this.shape_1223.setTransform(98.2,101.8,1,1,0,0,0,0.3,0);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f().s("#378FAB").ss(0.8).p("AiPiGIgMEMIEwkSg");
	this.shape_1224.setTransform(59.9,-73.2);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f().s("#378FAB").ss(0.8).p("AiWBpIDuBIIBClag");
	this.shape_1225.setTransform(59.7,-70.2,1,1,0,0,0,0.3,0);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f().s("#378FAB").ss(0.8).p("AAMhmIg0DcIBSgqg");
	this.shape_1226.setTransform(76,-190.3,1,1,0,0,0,0,1.2);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f().s("#378FAB").ss(0.8).p("AiFBMICygGIBgiIg");
	this.shape_1227.setTransform(67.7,65.3,1,1,0,0,0,1,0);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f().s("#378FAB").ss(0.8).p("AgnhZIgeC4ICIgkg");
	this.shape_1228.setTransform(84.3,-133.5,1,1,0,0,0,0,0.5);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f().s("#378FAB").ss(0.8).p("AAaiJIiOBOIDoC+g");
	this.shape_1229.setTransform(170,109.1,1,1,0,0,0,0,0.1);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f().s("#378FAB").ss(0.8).p("AiRi6IgeF4IFahag");
	this.shape_1230.setTransform(51.7,96.1,1,1,0,0,0,0,0.3);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f().s("#378FAB").ss(0.8).p("AiuAEICoBUICyisg");
	this.shape_1231.setTransform(52.2,114.4,1,1,0,0,0,0.6,0);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f().s("#378FAB").ss(0.8).p("AiDBiIEGAAIAMi+g");
	this.shape_1232.setTransform(73.2,167.4,1,1,0,0,0,0.7,0);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f().s("#378FAB").ss(0.8).p("AiHgpIBCCOIDEjKg");
	this.shape_1233.setTransform(56.2,149.7,1,1,0,0,0,0.1,0);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f().s("#378FAB").ss(0.8).p("Ah+hlIBODKICsiIg");
	this.shape_1234.setTransform(60.2,204.4,1,1,0,0,0,0.2,0.1);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f().s("#378FAB").ss(0.8).p("ABVhjIi4DKIDQgqg");
	this.shape_1235.setTransform(97.5,87.5,1,1,0,0,0,0,0.4);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f().s("#378FAB").ss(0.8).p("Ah2hoIBsDQICCiIg");
	this.shape_1236.setTransform(56.5,-48.9,1,1,0,0,0,0.3,0.2);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f().s("#378FAB").ss(0.8).p("AAohNIh8COICsASg");
	this.shape_1237.setTransform(68.4,16.3,1,1,0,0,0,0,0.3);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f().s("#378FAB").ss(0.8).p("ABRhVIjKBqID6BCg");
	this.shape_1238.setTransform(59.5,192.1,1,1,0,0,0,0,0.1);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f().s("#378FAB").ss(0.8).p("AgGiqIh4C4ID6Ccg");
	this.shape_1239.setTransform(54,-148.3,1,1,0,0,0,0,0.4);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f().s("#378FAB").ss(0.8).p("Ah+hHIBgCaICaAAg");
	this.shape_1240.setTransform(54.6,-139.4,1,1,0,0,0,0.6,0.6);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f().s("#378FAB").ss(0.8).p("AAAirIigAqIE8Eeg");
	this.shape_1241.setTransform(53.2,90.1);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f().s("#378FAB").ss(0.8).p("AhwhgIAkC+IC4iIg");
	this.shape_1242.setTransform(61,-175.4);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f().s("#378FAB").ss(0.8).p("ABHiUIjEEwIEAgkg");
	this.shape_1243.setTransform(47.9,-23.2,1,1,0,0,0,0,0.5);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f().s("#378FAB").ss(0.8).p("AAFhMIheCOIC4hwg");
	this.shape_1244.setTransform(60.5,-203.2);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f().s("#378FAB").ss(0.8).p("AhChGIhCB2IEAAYg");
	this.shape_1245.setTransform(85.8,3.5,1,1,0,0,0,0,0.2);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f().s("#378FAB").ss(0.8).p("ABFipIisgSIDQFmg");
	this.shape_1246.setTransform(70.3,41.3);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f().s("#378FAB").ss(0.8).p("AAVhWIh2CmIDKhqg");
	this.shape_1247.setTransform(57.1,186.2,1,1,0,0,0,0,0.1);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f().s("#378FAB").ss(0.8).p("AgvhsIgMDQIB2img");
	this.shape_1248.setTransform(53.3,184.2,1,1,0,0,0,0,0.1);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f().s("#378FAB").ss(0.8).p("AhChjIASDEIBwiCg");
	this.shape_1249.setTransform(48.6,218.2,1,1,0,0,0,0,0.2);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f().s("#378FAB").ss(0.8).p("ACugmIlIAeIFaAug");
	this.shape_1250.setTransform(86.8,73.2);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f().s("#378FAB").ss(0.8).p("AhmgvIBUBkIB2geg");
	this.shape_1251.setTransform(66,219.6,1,1,0,0,0,0.6,0.3);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f().s("#378FAB").ss(0.8).p("AhNhiIAeDQIB8gYg");
	this.shape_1252.setTransform(80.4,211.4,1,1,0,0,0,0.1,0.7);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f().s("#378FAB").ss(0.8).p("Ag8iAIgkD0IC+j0g");
	this.shape_1253.setTransform(57,-118.8);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f().s("#378FAB").ss(0.8).p("AgwhtIhUDcIEGg8g");
	this.shape_1254.setTransform(55.8,134.5,1,1,0,0,0,0,0.2);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f().s("#378FAB").ss(0.8).p("AiViLIgMEYIE8h+g");
	this.shape_1255.setTransform(50.3,6.2,1,1,0,0,0,0,0.2);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f().s("#378FAB").ss(0.8).p("Ag2gvIAeBkIBMgeg");
	this.shape_1256.setTransform(46.4,-198.4,1,1,0,0,0,0.2,0.4);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f().s("#378FAB").ss(0.8).p("AglgcIA6BSIAShwg");
	this.shape_1257.setTransform(47.7,-190.5,1,1,0,0,0,0.2,0);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f().s("#378FAB").ss(0.8).p("AAShZIhGCmIBqAYg");
	this.shape_1258.setTransform(47.8,-175.2,1,1,0,0,0,0,0.8);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f().s("#378FAB").ss(0.8).p("AgwhuIgMDQIB2i4g");
	this.shape_1259.setTransform(47.4,-157.2);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f().s("#378FAB").ss(0.8).p("AhUg/IA2CCIBwgwg");
	this.shape_1260.setTransform(42.9,121.6,1,1,0,0,0,0.3,0.3);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f().s("#378FAB").ss(0.8).p("AiXA0IEAAYIA8iUg");
	this.shape_1261.setTransform(50.3,14.8,1,1,0,0,0,1,0);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f().s("#378FAB").ss(0.8).p("AhVhWIAGCyICggqg");
	this.shape_1262.setTransform(45.1,68.3,1,1,0,0,0,0,0.4);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f().s("#378FAB").ss(0.8).p("AgyioIgkDKICmCKg");
	this.shape_1263.setTransform(45.2,56.5,1,1,0,0,0,0,0.8);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f().s("#378FAB").ss(0.8).p("AhGhZIBGCsIBIimg");
	this.shape_1264.setTransform(42.5,-176.6,1,1,0,0,0,0.1,0);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f().s("#378FAB").ss(0.8).p("AAJhgIhwDEIDQgqg");
	this.shape_1265.setTransform(40.3,-137.1,1,1,0,0,0,0,0.4);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f().s("#378FAB").ss(0.8).p("AhmhSICsDKIAkj0g");
	this.shape_1266.setTransform(40.5,-119.1,1,1,0,0,0,0.3,0);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f().s("#378FAB").ss(0.8).p("AAFhgIg6B8IBqBIg");
	this.shape_1267.setTransform(46.1,-205.9,1,1,0,0,0,0,0.6);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f().s("#378FAB").ss(0.8).p("AhjhTIgSBwIDcA2g");
	this.shape_1268.setTransform(61.5,-187.7,1,1,0,0,0,0,0.3);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f().s("#378FAB").ss(0.8).p("AANgnIhSBMICOAGg");
	this.shape_1269.setTransform(42.3,-189.2,1,1,0,0,0,0,0.2);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f().s("#378FAB").ss(0.8).p("AhMhlIgeB8IDKBOg");
	this.shape_1270.setTransform(37.6,-116.8,1,1,0,0,0,0,0.4);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f().s("#378FAB").ss(0.8).p("AhqiRIAMEkIDEkwg");
	this.shape_1271.setTransform(44.8,-22.9);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f().s("#378FAB").ss(0.8).p("ABKhnIisCIIDKBIg");
	this.shape_1272.setTransform(65,211.4,1,1,0,0,0,0,0.3);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f().s("#378FAB").ss(0.8).p("AgbgcIgkAuIB2AMg");
	this.shape_1273.setTransform(41.1,-219.2,1,1,0,0,0,0,0.1);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f().s("#378FAB").ss(0.8).p("AhehdIASC4ICmiCg");
	this.shape_1274.setTransform(36.4,-82.5,1,1,0,0,0,0,0.1);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f().s("#378FAB").ss(0.8).p("Ag2hsIA6DWIA2iIg");
	this.shape_1275.setTransform(41.6,197.7,1,1,0,0,0,0.2,0.4);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f().s("#378FAB").ss(0.8).p("AgBhrIhmDcIDQgMg");
	this.shape_1276.setTransform(44.5,-48.3,1,1,0,0,0,0,0.5);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f().s("#378FAB").ss(0.8).p("ABthgIkAAkIEwCag");
	this.shape_1277.setTransform(50.1,-1.9);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f().s("#378FAB").ss(0.8).p("Ag5hCIAeCsIBSjcg");
	this.shape_1278.setTransform(45.3,134.9);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f().s("#378FAB").ss(0.8).p("AhHhkIAwDEIBeiOg");
	this.shape_1279.setTransform(54,-205.9,1,1,0,0,0,0.1,0.2);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f().s("#378FAB").ss(0.8).p("ABPiAIisByIC+COg");
	this.shape_1280.setTransform(88.5,-2.1,1,1,0,0,0,0,0.2);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f().s("#378FAB").ss(0.8).p("AhhhxIC+DcIAMjQg");
	this.shape_1281.setTransform(32.3,-158,1,1,0,0,0,0.4,0);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f().s("#378FAB").ss(0.8).p("AAfhTIiCCgIDKAMg");
	this.shape_1282.setTransform(32.1,-176.9,1,1,0,0,0,0,0.3);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f().s("#378FAB").ss(0.8).p("AhPhLIASCaICIg2g");
	this.shape_1283.setTransform(35,143.3,1,1,0,0,0,0.1,0.3);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f().s("#378FAB").ss(0.8).p("Ah2hWIByCsIB8iCg");
	this.shape_1284.setTransform(36.7,177.8,1,1,0,0,0,0.3,0.1);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f().s("#378FAB").ss(0.8).p("Ag9AdIBwBOIAMjQg");
	this.shape_1285.setTransform(42.3,183.4,1,1,0,0,0,0.2,0);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f().s("#378FAB").ss(0.8).p("AhnhyIAADiIDKiUg");
	this.shape_1286.setTransform(37.3,-103.2,1,1,0,0,0,0,0.1);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f().s("#378FAB").ss(0.8).p("AhiAyIC4A2IASjKg");
	this.shape_1287.setTransform(37.2,-97.1,1,1,0,0,0,0.4,0);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f().s("#378FAB").ss(0.8).p("AAlhIIiIA2IDKBYg");
	this.shape_1288.setTransform(38.7,152.9);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f().s("#378FAB").ss(0.8).p("AhrACIA2A8ICUh2g");
	this.shape_1289.setTransform(32,-141.5,1,1,0,0,0,0.3,0);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f().s("#378FAB").ss(0.8).p("AAxhXIh8BIICaBkg");
	this.shape_1290.setTransform(34.5,137.1,1,1,0,0,0,0,0.2);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f().s("#378FAB").ss(0.8).p("AgthqIhCDWIDchOg");
	this.shape_1291.setTransform(33.3,-62.4,1,1,0,0,0,0,0.3);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f().s("#378FAB").ss(0.8).p("AhRgCICaCIIAMkMg");
	this.shape_1292.setTransform(37.1,-73.1,1,1,0,0,0,0.2,0);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f().s("#378FAB").ss(0.8).p("AhFhzIhCBOIEACOg");
	this.shape_1293.setTransform(29.1,-157.6,1,1,0,0,0,0,0.2);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f().s("#378FAB").ss(0.8).p("AiChjIA2DKIDKg8g");
	this.shape_1294.setTransform(28.8,-151.3,1,1,0,0,0,0.2,0.3);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f().s("#378FAB").ss(0.8).p("Ag6hHIA6CIIA8h8g");
	this.shape_1295.setTransform(40.8,-210.2,1,1,0,0,0,0.2,0);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f().s("#378FAB").ss(0.8).p("AhVhdIgMC+IC+g2g");
	this.shape_1296.setTransform(27.7,73.1,1,1,0,0,0,0,0.3);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f().s("#378FAB").ss(0.8).p("Ag9igIAkFUIBYhOg");
	this.shape_1297.setTransform(83.7,41.8,1,1,0,0,0,0.2,1.3);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f().s("#378FAB").ss(0.8).p("AhMgbIB8DWIAel4g");
	this.shape_1298.setTransform(29.2,96.1);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f().s("#378FAB").ss(0.8).p("AgwhZIBkCyIAGhqg");
	this.shape_1299.setTransform(71.9,-122,1,1,0,0,0,0.5,0.6);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f().s("#378FAB").ss(0.8).p("AgrgtIA6BeIAkgwg");
	this.shape_1300.setTransform(33.6,-222,1,1,0,0,0,0.5,0.4);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f().s("#378FAB").ss(0.8).p("AhegmIAABMICsgog");
	this.shape_1301.setTransform(28.6,59.4);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f().s("#378FAB").ss(0.8).p("AAChOIhYB8ICsAkg");
	this.shape_1302.setTransform(27.8,51.2,1,1,0,0,0,0,0.3);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f().s("#378FAB").ss(0.8).p("AAKhjIhGDKIB8hIg");
	this.shape_1303.setTransform(33,125.5,1,1,0,0,0,0,0.6);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f().s("#378FAB").ss(0.8).p("AhThZIgqCyID0hZg");
	this.shape_1304.setTransform(37.1,160,1,1,0,0,0,0,0.1);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f().s("#378FAB").ss(0.8).p("AAth6IiUCIIDQBsg");
	this.shape_1305.setTransform(24.7,-197.6,1,1,0,0,0,0,0.3);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f().s("#378FAB").ss(0.8).p("AhqhbIAeC4ICyhOg");
	this.shape_1306.setTransform(25.1,-187,1,1,0,0,0,0.1,0.2);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f().s("#378FAB").ss(0.8).p("AhdAAIAwBSICCigg");
	this.shape_1307.setTransform(26.8,-177.7,1,1,0,0,0,0.1,0);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f().s("#378FAB").ss(0.8).p("Ag/goICCCaIAAjog");
	this.shape_1308.setTransform(117.5,14,1,1,0,0,0,0.2,0);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f().s("#378FAB").ss(0.8).p("AAOhYIg0CyIBShOg");
	this.shape_1309.setTransform(39.2,-193.9,1,1,0,0,0,0,0.8);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f().s("#378FAB").ss(0.8).p("AhhgqIBIBYIB2gqg");
	this.shape_1310.setTransform(31.2,38.5,1,1,0,0,0,0.5,0.2);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f().s("#378FAB").ss(0.8).p("Ag/hiIASDQIBqAGg");
	this.shape_1311.setTransform(28,104.3,1,1,0,0,0,0.1,1);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f().s("#378FAB").ss(0.8).p("AAlhaIiCCIIC+Awg");
	this.shape_1312.setTransform(30.3,29.6,1,1,0,0,0,0,0.3);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f().s("#378FAB").ss(0.8).p("AgVhTIhICaIC4ASg");
	this.shape_1313.setTransform(26.7,177.8,1,1,0,0,0,0,0.4);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f().s("#378FAB").ss(0.8).p("AAgh8Ih8D6IC+hmg");
	this.shape_1314.setTransform(163.4,-53.2,1,1,0,0,0,0,0.5);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f().s("#378FAB").ss(0.8).p("Ag6g+IBSCgIAkjKg");
	this.shape_1315.setTransform(34.1,49.3,1,1,0,0,0,0.1,0);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f().s("#378FAB").ss(0.8).p("ABVicIkkB+IGiC4g");
	this.shape_1316.setTransform(12.9,4.7,1,1,0,0,0,0,0.1);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f().s("#378FAB").ss(0.8).p("AjLidIEeFCICEiKg");
	this.shape_1317.setTransform(13.3,17.9,1,1,0,0,0,0.8,0.5);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f().s("#378FAB").ss(0.8).p("ABXhbIisAqICyCIg");
	this.shape_1318.setTransform(27.7,68.3);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f().s("#378FAB").ss(0.8).p("ABThGIi4CIIDcg8g");
	this.shape_1319.setTransform(17.9,-127.9,1,1,0,0,0,0,0.2);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f().s("#378FAB").ss(0.8).p("AhchRIBICgIBwiOg");
	this.shape_1320.setTransform(26.8,192.8,1,1,0,0,0,0.2,0);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f().s("#378FAB").ss(0.8).p("AA7hYIh2AAIB8Cmg");
	this.shape_1321.setTransform(22.7,-218.2);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f().s("#378FAB").ss(0.8).p("AgRhYIhgAkIDcCCg");
	this.shape_1322.setTransform(18.5,-218.1);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f().s("#378FAB").ss(0.8).p("AgQgxIg2BGICIAeg");
	this.shape_1323.setTransform(28.6,-13,1,1,0,0,0,0,0.2);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f().s("#378FAB").ss(0.8).p("ABEheIiUCyICmASg");
	this.shape_1324.setTransform(35,218,1,1,0,0,0,0,0.5);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f().s("#378FAB").ss(0.8).p("AhXh/IAYD6ICUiyg");
	this.shape_1325.setTransform(33.3,213.7,1,1,0,0,0,0,0.2);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f().s("#378FAB").ss(0.8).p("AgDgtIhCAuICIAqg");
	this.shape_1326.setTransform(21.3,38.6,1,1,0,0,0,0,0.1);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f().s("#378FAB").ss(0.8).p("AhEhUIAwCmIBYh8g");
	this.shape_1327.setTransform(21.3,47.4,1,1,0,0,0,0.1,0.1);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f().s("#378FAB").ss(0.8).p("AiChdIA8C4IDEigg");
	this.shape_1328.setTransform(47.3,29.5,1,1,0,0,0,0.1,0);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f().s("#378FAB").ss(0.8).p("AAbhpIhwCOICsBIg");
	this.shape_1329.setTransform(33.1,197.4,1,1,0,0,0,0,0.4);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f().s("#378FAB").ss(0.8).p("AgyhSIgGCCIBqAqg");
	this.shape_1330.setTransform(54.2,168.9,1,1,0,0,0,0,0.7);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f().s("#378FAB").ss(0.8).p("AgthsIAqDoIA0hIg");
	this.shape_1331.setTransform(22.1,-22.3,1,1,0,0,0,0.2,1.2);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f().s("#378FAB").ss(0.8).p("Ai1gcIDWCOICWjig");
	this.shape_1332.setTransform(9,-80.7,1,1,0,0,0,0.5,0);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f().s("#378FAB").ss(0.8).p("Ai8htIAADcIFshUg");
	this.shape_1333.setTransform(9.2,-94.7,1,1,0,0,0,0,0.1);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f().s("#378FAB").ss(0.8).p("AhXhBIg8BYIEYAqg");
	this.shape_1334.setTransform(15.9,-216.7,1,1,0,0,0,0,0.1);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f().s("#378FAB").ss(0.8).p("AhRAgIBCAYIBYhkg");
	this.shape_1335.setTransform(20,139.9,1,1,0,0,0,0.5,0);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f().s("#378FAB").ss(0.8).p("AiLhZICECyICUiIg");
	this.shape_1336.setTransform(15.5,-205.3,1,1,0,0,0,0.4,0.1);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f().s("#378FAB").ss(0.8).p("AAlhLIhYBkIBqA2g");
	this.shape_1337.setTransform(23.1,143.3,1,1,0,0,0,0,0.4);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f().s("#378FAB").ss(0.8).p("AAsiLIh2EeICahOg");
	this.shape_1338.setTransform(18.8,129.1,1,1,0,0,0,0,0.8);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f().s("#378FAB").ss(0.8).p("AgJiTIiuCaIFsCKg");
	this.shape_1339.setTransform(8.7,-106.4,1,1,0,0,0,0,0.2);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f().s("#378FAB").ss(0.8).p("AgDhFIg2BGIBwBCg");
	this.shape_1340.setTransform(35.1,-210.1,1,1,0,0,0,0,0.3);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f().s("#378FAB").ss(0.8).p("AhogBIC+BAIAeh8g");
	this.shape_1341.setTransform(19,-121.2,1,1,0,0,0,0.8,0);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f().s("#378FAB").ss(0.8).p("Ag3h0IAqDiIBGiag");
	this.shape_1342.setTransform(18.8,173.7,1,1,0,0,0,0.1,0.3);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f().s("#378FAB").ss(0.8).p("AinhfIAAC+IFChwg");
	this.shape_1343.setTransform(7.7,116.1);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f().s("#378FAB").ss(0.8).p("ACVhnIkwCCIFCBOg");
	this.shape_1344.setTransform(6.5,103.9,1,1,0,0,0,0,0.1);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f().s("#378FAB").ss(0.8).p("AhzAYIDuAqIAGiCg");
	this.shape_1345.setTransform(37,166.4,1,1,0,0,0,0.9,0);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f().s("#378FAB").ss(0.8).p("Ag3h+IA6D0IA2iyg");
	this.shape_1346.setTransform(35,-197.2,1,1,0,0,0,0.1,0.3);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f().s("#378FAB").ss(0.8).p("AgNhPIgSCgIBAhOg");
	this.shape_1347.setTransform(18.7,-169.1,1,1,0,0,0,0,0.7);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f().s("#378FAB").ss(0.8).p("Ahsg/IAYCCIC4iIg");
	this.shape_1348.setTransform(16.2,-128.2);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f().s("#378FAB").ss(0.8).p("AhShDIBkCsIBCjWg");
	this.shape_1349.setTransform(20.4,-62.4,1,1,0,0,0,0.2,0);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f().s("#378FAB").ss(0.8).p("ABWhDIjWgMIEMCag");
	this.shape_1350.setTransform(167,-33);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f().s("#378FAB").ss(0.8).p("Aijg4IAABwIEwhYg");
	this.shape_1351.setTransform(7.9,-48.5);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f().s("#378FAB").ss(0.8).p("AiTADIEABUIAwisg");
	this.shape_1352.setTransform(7.1,-43.2,1,1,0,0,0,0.8,0);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f().s("#378FAB").ss(0.8).p("AiPihIgMDEIEqB+g");
	this.shape_1353.setTransform(6.5,18.1,1,1,0,0,0,0,0.4);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f().s("#378FAB").ss(0.8).p("AgkhTIgwCsICmgeg");
	this.shape_1354.setTransform(25.8,-43,1,1,0,0,0,0,0.4);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f().s("#378FAB").ss(0.8).p("AAZiCIhkEMICahCg");
	this.shape_1355.setTransform(12.9,-147.8,1,1,0,0,0,0,0.7);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f().s("#378FAB").ss(0.8).p("AhNh+IAkD0IB2jcg");
	this.shape_1356.setTransform(16.7,211.1);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f().s("#378FAB").ss(0.8).p("AhuggIB2COIBmjcg");
	this.shape_1357.setTransform(33.4,-48.5,1,1,0,0,0,0.2,0);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f().s("#378FAB").ss(0.8).p("ABhhSIjoCCIEYAkg");
	this.shape_1358.setTransform(4.5,47.2,1,1,0,0,0,0,0.2);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f().s("#378FAB").ss(0.8).p("AiIhOIDoCsIBCgwg");
	this.shape_1359.setTransform(6.3,30.1,1,1,0,0,0,1.7,0.8);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f().s("#378FAB").ss(0.8).p("AiYhTIAACmIEkh8g");
	this.shape_1360.setTransform(7.4,-6.8);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f().s("#378FAB").ss(0.8).p("ABshyIj6C+IEkAqg");
	this.shape_1361.setTransform(6.4,-22.7,1,1,0,0,0,0,0.2);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f().s("#378FAB").ss(0.8).p("AhXioICaFIIAYlOg");
	this.shape_1362.setTransform(62.3,89.8,1,1,0,0,0,0.2,0);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f().s("#378FAB").ss(0.8).p("AiPhRIAACmIESgSg");
	this.shape_1363.setTransform(4.7,75.9,1,1,0,0,0,0,0.2);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f().s("#378FAB").ss(0.8).p("AA1hVIjKCUIEwAYg");
	this.shape_1364.setTransform(6.5,-60.4,1,1,0,0,0,0,0.2);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f().s("#378FAB").ss(0.8).p("AiggcIDKCsIB4keg");
	this.shape_1365.setTransform(7.3,128.7,1,1,0,0,0,0.3,0);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f().s("#378FAB").ss(0.8).p("ABEhtIiUDiICmgqg");
	this.shape_1366.setTransform(20,-80.4,1,1,0,0,0,0,0.6);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f().s("#378FAB").ss(0.8).p("AifhuIAGDcIEwiCg");
	this.shape_1367.setTransform(6.3,95.4);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f().s("#378FAB").ss(0.8).p("AiPhMIgGCaIEegqg");
	this.shape_1368.setTransform(5.3,59.7,1,1,0,0,0,0,0.1);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f().s("#378FAB").ss(0.8).p("AgghlIASC4IAuigg");
	this.shape_1369.setTransform(14.6,153.4,1,1,0,0,0,0,0.1);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f().s("#378FAB").ss(0.8).p("AAFhNIhSCIICaAYg");
	this.shape_1370.setTransform(16.7,192.8,1,1,0,0,0,0,0.4);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f().s("#378FAB").ss(0.8).p("AhShDIBeCgIBIi+g");
	this.shape_1371.setTransform(25.8,-27.6,1,1,0,0,0,0.2,0);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f().s("#378FAB").ss(0.8).p("AiFhJIAMCUID0hCg");
	this.shape_1372.setTransform(4.9,-35.3,1,1,0,0,0,0,0.1);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f().s("#378FAB").ss(0.8).p("ACdgSIkYgkIEYBwg");
	this.shape_1373.setTransform(3.3,57.5);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f().s("#378FAB").ss(0.8).p("Ah0AEICCCEIBmkMg");
	this.shape_1374.setTransform(4,-148.3,1,1,0,0,0,0.2,0);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f().s("#378FAB").ss(0.8).p("AhshaIgMCyIDoiIg");
	this.shape_1375.setTransform(4.2,-156.7);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f().s("#378FAB").ss(0.8).p("ACCg2IkSASIE2BYg");
	this.shape_1376.setTransform(4.8,88);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f().s("#378FAB").ss(0.8).p("Ahcg4IgeBMIDiAkg");
	this.shape_1377.setTransform(6.8,-183.4,1,1,0,0,0,0,0.1);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f().s("#378FAB").ss(0.8).p("AgdhSIgwCgICahqg");
	this.shape_1378.setTransform(20.9,154,1,1,0,0,0,0,0.1);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f().s("#378FAB").ss(0.8).p("Ah0hiICaDEIBUiIg");
	this.shape_1379.setTransform(5.5,188.6,1,1,0,0,0,0.5,0.2);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f().s("#378FAB").ss(0.8).p("AAwh3Ih2DcICOAeg");
	this.shape_1380.setTransform(19.6,213.5,1,1,0,0,0,0,0.7);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f().s("#378FAB").ss(0.8).p("AhBg4IgYBMICmAkg");
	this.shape_1381.setTransform(6.5,-201.9,1,1,0,0,0,0,0.2);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f().s("#378FAB").ss(0.8).p("AhYg1IAABqICmhGg");
	this.shape_1382.setTransform(6.4,-194.6);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f().s("#378FAB").ss(0.8).p("AhpjAIg8F+IFIjig");
	this.shape_1383.setTransform(164.7,-21.5,1,1,0,0,0,0,0.2);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f().s("#378FAB").ss(0.8).p("AhFhgIgMBCICOBwg");
	this.shape_1384.setTransform(8.1,-204.2,1,1,0,0,0,0,0.5);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f().s("#378FAB").ss(0.8).p("AhyhFIAAB2IDWAYg");
	this.shape_1385.setTransform(1.8,-76.3,1,1,0,0,0,0,0.3);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f().s("#378FAB").ss(0.8).p("AhuhXIAMCsIDKiUg");
	this.shape_1386.setTransform(1.4,-62.8);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f().s("#378FAB").ss(0.8).p("AhMATIBwBIIAqiyg");
	this.shape_1387.setTransform(21.1,159.7,1,1,0,0,0,0.3,0);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f().s("#378FAB").ss(0.8).p("AAFhyIguC+IBSA2g");
	this.shape_1388.setTransform(8.3,211,1,1,0,0,0,0,1.2);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f().s("#378FAB").ss(0.8).p("AgMhjIg2CIICCBCg");
	this.shape_1389.setTransform(48.6,204.7,1,1,0,0,0,0,0.6);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f().s("#378FAB").ss(0.8).p("Ag1hvIAkDQIBGjKg");
	this.shape_1390.setTransform(28.7,125.5);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f().s("#378FAB").ss(0.8).p("Ah/gcIgGB8ID6i+g");
	this.shape_1391.setTransform(5.5,-24.9);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f().s("#378FAB").ss(0.8).p("AhLhFIAqCIIBqhkg");
	this.shape_1392.setTransform(1.6,201.8,1,1,0,0,0,0.1,0.1);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f().s("#378FAB").ss(0.8).p("AhbiVIC+EkIAAjig");
	this.shape_1393.setTransform(17.3,-106.2,1,1,0,0,0,0.4,0.2);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f().s("#378FAB").ss(0.8).p("AhxhrIAADcIDcgqg");
	this.shape_1394.setTransform(2.3,154.9,1,1,0,0,0,0,0.3);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f().s("#378FAB").ss(0.8).p("AhfgBIBwBYIBOisg");
	this.shape_1395.setTransform(172.4,130.7,1,1,0,0,0,0.3,0);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f().s("#378FAB").ss(0.8).p("Ah7hCIAACCIDoiCg");
	this.shape_1396.setTransform(3.3,45.5);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f().s("#378FAB").ss(0.8).p("ABghfIjKAGIDcCyg");
	this.shape_1397.setTransform(1.6,152.7);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f().s("#378FAB").ss(0.8).p("Ag/hmIgGDQICIhOg");
	this.shape_1398.setTransform(-1.5,-137.1,1,1,0,0,0,0,0.4);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f().s("#378FAB").ss(0.8).p("ABHhdIimBIIDEBwg");
	this.shape_1399.setTransform(7.1,-186.9,1,1,0,0,0,0,0.1);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f().s("#378FAB").ss(0.8).p("AiPhyID6DuIA2hmg");
	this.shape_1400.setTransform(-21.2,206.3,1,1,0,0,0,1.1,0.6);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f().s("#378FAB").ss(0.8).p("AA6gfIiaBAIDQgGg");
	this.shape_1401.setTransform(15,-138);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f().s("#378FAB").ss(0.8).p("Ag2AHIA6BaIAwi+g");
	this.shape_1402.setTransform(3.7,207.7,1,1,0,0,0,0.1,0);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f().s("#378FAB").ss(0.8).p("AAlhAIheAqIB2BSg");
	this.shape_1403.setTransform(-12.8,172.5,1,1,0,0,0,0,0.1);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f().s("#378FAB").ss(0.8).p("AhjgZIAkBqICaigg");
	this.shape_1404.setTransform(27.9,85.2);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f().s("#378FAB").ss(0.8).p("AAhh6IiyDuIEqiag");
	this.shape_1405.setTransform(-22.1,182.6,1,1,0,0,0,0,0.1);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f().s("#378FAB").ss(0.8).p("ACahOIkqCaIEwAGg");
	this.shape_1406.setTransform(-22.1,186.7,1,1,0,0,0,0,0.2);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f().s("#378FAB").ss(0.8).p("AAQhAIhwCCIDEgeg");
	this.shape_1407.setTransform(53.4,221.3,1,1,0,0,0,0,0.2);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f().s("#378FAB").ss(0.8).p("AhzgpIAYB8IDEimg");
	this.shape_1408.setTransform(2.5,170.1);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f().s("#378FAB").ss(0.8).p("Ah+h/IA8EAIC+iOg");
	this.shape_1409.setTransform(-20.3,-13.6,1,1,0,0,0,0.1,0.2);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f().s("#378FAB").ss(0.8).p("Ah1iGIAqESIC+hUg");
	this.shape_1410.setTransform(170.2,116.9,1,1,0,0,0,0.1,0.4);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f().s("#378FAB").ss(0.8).p("AhphWIAACyIDKgGg");
	this.shape_1411.setTransform(1.5,134.8,1,1,0,0,0,0,0.4);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f().s("#378FAB").ss(0.8).p("AB7hOIj0CgIEAgMg");
	this.shape_1412.setTransform(-20.8,-34.7,1,1,0,0,0,0,0.2);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f().s("#378FAB").ss(0.8).p("AhbhxICyDcIAMjEg");
	this.shape_1413.setTransform(-17.4,10.6,1,1,0,0,0,0.4,0.1);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f().s("#378FAB").ss(0.8).p("Ah4gzID6BwIAGh8g");
	this.shape_1414.setTransform(-20.1,-21.4,1,1,0,0,0,0.9,0);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f().s("#378FAB").ss(0.8).p("ADrhWInMBOIHYBeg");
	this.shape_1415.setTransform(-33.3,-63);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f().s("#378FAB").ss(0.8).p("AjxhwIBmDiIFyiCg");
	this.shape_1416.setTransform(-31.5,-52.4,1,1,0,0,0,0.2,0.1);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f().s("#378FAB").ss(0.8).p("AiqBCIFygSIAAhwg");
	this.shape_1417.setTransform(-26.9,-47.8,1,1,0,0,0,1.6,-0.1);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f().s("#378FAB").ss(0.8).p("Aieh9ICKD6ICyisg");
	this.shape_1418.setTransform(-24.1,-121.9,1,1,0,0,0,0.3,0.1);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f().s("#378FAB").ss(0.8).p("ABQhvIjECmIDuA8g");
	this.shape_1419.setTransform(5,173.3,1,1,0,0,0,0,0.3);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f().s("#378FAB").ss(0.8).p("AhQheIAGCgICUAkg");
	this.shape_1420.setTransform(1.4,188.7,1,1,0,0,0,0,0.6);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f().s("#378FAB").ss(0.8).p("AhwhOIgMCaIDuh2g");
	this.shape_1421.setTransform(5.8,-173.6);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f().s("#378FAB").ss(0.8).p("Ag5g4IB2COIAAiyg");
	this.shape_1422.setTransform(-15.1,135.1,1,1,0,0,0,0.2,0);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f().s("#378FAB").ss(0.8).p("ABKhgIi4C+IDohOg");
	this.shape_1423.setTransform(-17.8,-182.8,1,1,0,0,0,0,0.3);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f().s("#378FAB").ss(0.8).p("AA+hqIh2DiIB2gkg");
	this.shape_1424.setTransform(-15.3,118.2,1,1,0,0,0,0,0.9);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f().s("#378FAB").ss(0.8).p("AhrgmIBCBkICOh8g");
	this.shape_1425.setTransform(-19.1,27.6,1,1,0,0,0,0.2,0);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f().s("#378FAB").ss(0.8).p("AhLh2IgeD0IDQgYg");
	this.shape_1426.setTransform(-19.4,11.6,1,1,0,0,0,0,0.5);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f().s("#378FAB").ss(0.8).p("AiVjQIA2GiID0jAg");
	this.shape_1427.setTransform(-23.9,105,1,1,0,0,0,0.1,0.4);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f().s("#378FAB").ss(0.8).p("AiJg2IESCUIAMi+g");
	this.shape_1428.setTransform(4.8,73,1,1,0,0,0,0.7,0);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f().s("#378FAB").ss(0.8).p("Ah5hTIAACsIDoAAg");
	this.shape_1429.setTransform(3.1,30.1,1,1,0,0,0,0,0.3);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f().s("#378FAB").ss(0.8).p("AAShGIiaCCIESAMg");
	this.shape_1430.setTransform(-23,136.6,1,1,0,0,0,0,0.2);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f().s("#378FAB").ss(0.8).p("AhxhWIAMCsIDQheg");
	this.shape_1431.setTransform(-17.4,-164.8,1,1,0,0,0,0,0.1);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f().s("#378FAB").ss(0.8).p("AhkAGIDEBUIAMiyg");
	this.shape_1432.setTransform(-17,-156.9,1,1,0,0,0,0.5,0);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f().s("#378FAB").ss(0.8).p("AhqhxIDcDiIAGiag");
	this.shape_1433.setTransform(-20.4,56.5,1,1,0,0,0,0.7,0.3);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f().s("#378FAB").ss(0.8).p("AgfhZIhUBqIDiBIg");
	this.shape_1434.setTransform(-20.2,43.2,1,1,0,0,0,0,0.2);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f().s("#378FAB").ss(0.8).p("ACUhtIkkgGIEqDig");
	this.shape_1435.setTransform(-24.6,95.3);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f().s("#378FAB").ss(0.8).p("AiLBPIEkAGIAAimg");
	this.shape_1436.setTransform(-24.3,75.7,1,1,0,0,0,0.8,0);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f().s("#378FAB").ss(0.8).p("AgaiOIioEeIGEg8g");
	this.shape_1437.setTransform(-29.2,59.2,1,1,0,0,0,0,0.2);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f().s("#378FAB").ss(0.8).p("AjKgSIBgBkIEkigg");
	this.shape_1438.setTransform(-28.1,75.5,1,1,0,0,0,0.3,0);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f().s("#378FAB").ss(0.8).p("AhChbICOCyIAAiCg");
	this.shape_1439.setTransform(-16.3,43.4,1,1,0,0,0,0.5,0.3);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f().s("#378FAB").ss(0.8).p("AiHiLICyESIBgkGg");
	this.shape_1440.setTransform(-22.7,156.6,1,1,0,0,0,0.3,0);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f().s("#378FAB").ss(0.8).p("AgtCNIBegqIAAjcg");
	this.shape_1441.setTransform(-13.9,155.7,1,1,0,0,0,0.2,-0.2);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f().s("#378FAB").ss(0.8).p("AiOhFIEwCIIAAiCg");
	this.shape_1442.setTransform(-21.3,201.1,1,1,0,0,0,1.1,0);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f().s("#378FAB").ss(0.8).p("AhCijIB8E2IAMkYg");
	this.shape_1443.setTransform(28.4,5.4,1,1,0,0,0,0.2,0.1);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f().s("#378FAB").ss(0.8).p("AAUhmIigAeIEYCmg");
	this.shape_1444.setTransform(-23.8,-81.1);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f().s("#378FAB").ss(0.8).p("ABKhTIiOB8ICOAwg");
	this.shape_1445.setTransform(-16.5,30.2,1,1,0,0,0,0,0.4);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f().s("#378FAB").ss(0.8).p("AAeiMIhGC+IBSBmg");
	this.shape_1446.setTransform(31,-22.1,1,1,0,0,0,0,1.2);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f().s("#378FAB").ss(0.8).p("Agzh6Ii0D0IHMhOg");
	this.shape_1447.setTransform(-32.7,-76,1,1,0,0,0,0,0.1);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f().s("#378FAB").ss(0.8).p("AgjhsIh+DWIFCiCg");
	this.shape_1448.setTransform(-24.1,-145.3);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f().s("#378FAB").ss(0.8).p("AhbA+IC+AYIAAimg");
	this.shape_1449.setTransform(-17.4,-7.1,1,1,0,0,0,0.5,0);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f().s("#378FAB").ss(0.8).p("Ai8g+IB+COID0igg");
	this.shape_1450.setTransform(-26.4,-34.7,1,1,0,0,0,0.3,0);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f().s("#378FAB").ss(0.8).p("AhdilIBOFgIBwgwg");
	this.shape_1451.setTransform(-27,212,1,1,0,0,0,0.3,1.2);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f().s("#378FAB").ss(0.8).p("AhvAAIDcBOIAMiag");
	this.shape_1452.setTransform(-17,-173.7,1,1,0,0,0,0.7,0);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f().s("#378FAB").ss(0.8).p("AgdhTIgeCmIB2hOg");
	this.shape_1453.setTransform(-24.1,-214.1,1,1,0,0,0,0,0.3);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f().s("#378FAB").ss(0.8).p("AhbiEIAGDiICsAwg");
	this.shape_1454.setTransform(-27.4,156.5,1,1,0,0,0,0,0.7);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f().s("#378FAB").ss(0.8).p("Ag1g/IhIB8ID0hMg");
	this.shape_1455.setTransform(-30.7,171.7);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f().s("#378FAB").ss(0.8).p("Ah9gpIBCCgICyjug");
	this.shape_1456.setTransform(-30.6,182.1,1,1,0,0,0,0.1,0);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f().s("#378FAB").ss(0.8).p("AhUhbIAwCyIB2iOg");
	this.shape_1457.setTransform(-17.9,-100.1,1,1,0,0,0,0.1,0.1);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f().s("#378FAB").ss(0.8).p("AgwhWIgeCmICaiCg");
	this.shape_1458.setTransform(-28.8,134.4);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f().s("#378FAB").ss(0.8).p("AhMhqIgMDQICsiag");
	this.shape_1459.setTransform(-0.8,-116,1,1,0,0,0,0,0.1);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f().s("#378FAB").ss(0.8).p("AhWBIICmAkIAMjQg");
	this.shape_1460.setTransform(-17.4,-116.7,1,1,0,0,0,0.3,0);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f().s("#378FAB").ss(0.8).p("Ag7hDIhaBCIEeBAg");
	this.shape_1461.setTransform(-24.1,-199.3);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f().s("#378FAB").ss(0.8).p("AiPiBIBmEAIC4i+g");
	this.shape_1462.setTransform(-24.4,-186.3,1,1,0,0,0,0.2,0.1);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f().s("#378FAB").ss(0.8).p("AgWhoIgSDQIBShqg");
	this.shape_1463.setTransform(-27.7,34.9,1,1,0,0,0,0,0.6);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f().s("#378FAB").ss(0.8).p("ABChHIigAGIDECCg");
	this.shape_1464.setTransform(-20.6,-199.5);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f().s("#378FAB").ss(0.8).p("Ah8BUIB8AkIB4jig");
	this.shape_1465.setTransform(-20.8,117.3,1,1,0,0,0,0.4,0);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f().s("#378FAB").ss(0.8).p("AA7hAIiIBMICgA2g");
	this.shape_1466.setTransform(-0.7,-127.9,1,1,0,0,0,0,0.2);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f().s("#378FAB").ss(0.8).p("AhSAQICIBsIAej0g");
	this.shape_1467.setTransform(-35.4,11.3,1,1,0,0,0,0.2,0);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f().s("#378FAB").ss(0.8).p("AgdhQIAGCmIA0hIg");
	this.shape_1468.setTransform(31.7,-218.1,1,1,0,0,0,0,0.8);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f().s("#378FAB").ss(0.8).p("ABYhrIiyDcIC+gwg");
	this.shape_1469.setTransform(-37.7,-162.3,1,1,0,0,0,0,0.5);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f().s("#378FAB").ss(0.8).p("Ahgg8IBCCmIB8jWg");
	this.shape_1470.setTransform(-37,-145.3,1,1,0,0,0,0.1,0);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f().s("#378FAB").ss(0.8).p("AhUiVIgGEkICyjcg");
	this.shape_1471.setTransform(-37.8,-165.7,1,1,0,0,0,0,0.1);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f().s("#378FAB").ss(0.8).p("AhyAoIDcAqIASigg");
	this.shape_1472.setTransform(5.5,-169.9,1,1,0,0,0,0.7,0);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f().s("#378FAB").ss(0.8).p("AgPh9IhIC4ICsBIg");
	this.shape_1473.setTransform(-37.5,-186.2,1,1,0,0,0,0,0.6);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f().s("#378FAB").ss(0.8).p("AArglIh2BMICggGg");
	this.shape_1474.setTransform(-22.5,-209.9,1,1,0,0,0,0,0.1);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f().s("#378FAB").ss(0.8).p("Ai0h1IDEDuICoiIg");
	this.shape_1475.setTransform(-45.1,1,1,1,0,0,0,0.5,0.2);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f().s("#378FAB").ss(0.8).p("AhFiLIAAEkICIgqg");
	this.shape_1476.setTransform(-33.3,-119.7,1,1,0,0,0,0,0.9);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f().s("#378FAB").ss(0.8).p("AiAgJIBUCaICmkeg");
	this.shape_1477.setTransform(-44.1,59,1,1,0,0,0,0.1,0);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f().s("#378FAB").ss(0.8).p("Ag1hiIB2DEIAAh2g");
	this.shape_1478.setTransform(-15.6,-80.9,1,1,0,0,0,0.6,0.6);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f().s("#378FAB").ss(0.8).p("AATisIiOFaID6iEg");
	this.shape_1479.setTransform(-44.7,40.9,1,1,0,0,0,0,0.5);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f().s("#378FAB").ss(0.8).p("Aikg1IAGCCIEwiag");
	this.shape_1480.setTransform(-47.8,-18.8);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f().s("#378FAB").ss(0.8).p("AhogpIA2B8ICUimg");
	this.shape_1481.setTransform(-42.3,-217.4,1,1,0,0,0,0.1,0);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f().s("#378FAB").ss(0.8).p("AibAbIE8BOIAGjQg");
	this.shape_1482.setTransform(-23.9,-137.4,1,1,0,0,0,0.7,0);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f().s("#378FAB").ss(0.8).p("AgZhuIAYDEIAcimg");
	this.shape_1483.setTransform(-29.7,-214.5,1,1,0,0,0,0.1,0.2);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f().s("#378FAB").ss(0.8).p("AhQCOIBwAqIAwlag");
	this.shape_1484.setTransform(-44.6,210.5,1,1,0,0,0,0.1,0);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f().s("#378FAB").ss(0.8).p("AhaihIASE2ICgkwg");
	this.shape_1485.setTransform(-45.6,209.7);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f().s("#378FAB").ss(0.8).p("AAZhNIhwCaICyAGg");
	this.shape_1486.setTransform(-45.8,186.2,1,1,0,0,0,0,0.4);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f().s("#378FAB").ss(0.8).p("AA6h0Ih2A8IB8Cmg");
	this.shape_1487.setTransform(-42.5,154.5,1,1,0,0,0,0,0.2);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f().s("#378FAB").ss(0.8).p("AhihKIBOCaIB2g8g");
	this.shape_1488.setTransform(-46.3,140.8,1,1,0,0,0,0.3,0.3);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f().s("#378FAB").ss(0.8).p("ABYhpIi+DWIDWgwg");
	this.shape_1489.setTransform(-49.1,-94.2,1,1,0,0,0,0,0.4);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f().s("#378FAB").ss(0.8).p("AhuhMIAkDEICyj0g");
	this.shape_1490.setTransform(-48.4,-76);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f().s("#378FAB").ss(0.8).p("AhziMIC+EwIA8hCg");
	this.shape_1491.setTransform(-23.9,209.7,1,1,0,0,0,1.1,1.4);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f().s("#378FAB").ss(0.8).p("Ag8iPIA2EkIBGh+g");
	this.shape_1492.setTransform(-42.3,163.8,1,1,0,0,0,0.2,0.9);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f().s("#378FAB").ss(0.8).p("AAfhSIi4CmIE2gYg");
	this.shape_1493.setTransform(-48.9,-32.5,1,1,0,0,0,0,0.2);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f().s("#378FAB").ss(0.8).p("AgphlIAADKIBShqg");
	this.shape_1494.setTransform(-43.2,-198.3,1,1,0,0,0,0,0.5);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f().s("#378FAB").ss(0.8).p("AguAUIAMBOIBGi4g");
	this.shape_1495.setTransform(-42.8,-190.7);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f().s("#378FAB").ss(0.8).p("AhehQIAYCmICggeg");
	this.shape_1496.setTransform(-30.6,-96.7,1,1,0,0,0,0.1,0.4);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f().s("#378FAB").ss(0.8).p("AhVhmIgkDQIDugqg");
	this.shape_1497.setTransform(174.7,16.3,1,1,0,0,0,0,0.3);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f().s("#378FAB").ss(0.8).p("AAehTIh8BkIC+BCg");
	this.shape_1498.setTransform(-50,-142.8,1,1,0,0,0,0,0.2);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f().s("#378FAB").ss(0.8).p("Ahfh/IA8D6ICCi4g");
	this.shape_1499.setTransform(-49.8,-128.3,1,1,0,0,0,0.1,0.1);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f().s("#378FAB").ss(0.8).p("Ah3iZIBgFCICOlag");
	this.shape_1500.setTransform(-54.7,41);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f().s("#378FAB").ss(0.8).p("AAnjMIiCE2IC4Bsg");
	this.shape_1501.setTransform(-43,105.1,1,1,0,0,0,0,0.9);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f().s("#378FAB").ss(0.8).p("AhPAZIAkBOIBwjEg");
	this.shape_1502.setTransform(34.3,-137.9);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f().s("#378FAB").ss(0.8).p("ABAgyIiCAkICOBAg");
	this.shape_1503.setTransform(-50.4,18.1);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f().s("#378FAB").ss(0.8).p("AgZgsIhgBYIDugYg");
	this.shape_1504.setTransform(-54.5,21);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f().s("#378FAB").ss(0.8).p("AhrgjIASB2IC4img");
	this.shape_1505.setTransform(-55.3,-32.7);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f().s("#378FAB").ss(0.8).p("AAhhyIimByIEMBwg");
	this.shape_1506.setTransform(-59.2,-52.1,1,1,0,0,0,0,0.2);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f().s("#378FAB").ss(0.8).p("AiJhOIBCCgIDKgwg");
	this.shape_1507.setTransform(-58.7,-44.3,1,1,0,0,0,0.2,0.2);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f().s("#378FAB").ss(0.8).p("AhJhYIgqCyIDihIg");
	this.shape_1508.setTransform(-44.8,124.1,1,1,0,0,0,0,0.2);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f().s("#378FAB").ss(0.8).p("Ah5hIIBOC4ICgjig");
	this.shape_1509.setTransform(174.8,34.1,1,1,0,0,0,0.1,0);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f().s("#378FAB").ss(0.8).p("AhBg8IAGB2IB2hYg");
	this.shape_1510.setTransform(-53.5,-185.5);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f().s("#378FAB").ss(0.8).p("AgahMIgkCUIB8hkg");
	this.shape_1511.setTransform(-53.2,-148.3,1,1,0,0,0,0,0.2);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f().s("#378FAB").ss(0.8).p("AhIiRIAMEkICCk2g");
	this.shape_1512.setTransform(-46.2,100.1);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f().s("#378FAB").ss(0.8).p("AAZg7IhkB2ICaAGg");
	this.shape_1513.setTransform(-55.4,-215.3,1,1,0,0,0,0,0.3);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f().s("#378FAB").ss(0.8).p("AhOhcIAeCyIB8isg");
	this.shape_1514.setTransform(-55.2,-200.3);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f().s("#378FAB").ss(0.8).p("AA8hQIjEAMIEYCOg");
	this.shape_1515.setTransform(-63.2,66);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f().s("#378FAB").ss(0.8).p("AgBgNIhsgSIDcA6g");
	this.shape_1516.setTransform(-52.7,226.1);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f().s("#378FAB").ss(0.8).p("AgYg5IgwB2ICOgSg");
	this.shape_1517.setTransform(-46.2,79.6,1,1,0,0,0,0,0.3);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f().s("#378FAB").ss(0.8).p("ABLhLIjcCUIEqAGg");
	this.shape_1518.setTransform(-64.1,140.8,1,1,0,0,0,0,0.2);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f().s("#378FAB").ss(0.8).p("AiXhzIBODiIDcjcg");
	this.shape_1519.setTransform(-63.4,159.5,1,1,0,0,0,0.1,0);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f().s("#378FAB").ss(0.8).p("Ah7iJIAeESIDWiUg");
	this.shape_1520.setTransform(-64.3,116.3,1,1,0,0,0,0.1,0.2);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f().s("#378FAB").ss(0.8).p("AiEh/IDoEGIAwh4g");
	this.shape_1521.setTransform(-62.6,72.5,1,1,0,0,0,0.9,0.6);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f().s("#378FAB").ss(0.8).p("AhEiGIBYEMIA2iag");
	this.shape_1522.setTransform(179.9,109.2,1,1,0,0,0,0.3,0.5);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f().s("#378FAB").ss(0.8).p("AhtgLIDEBeIAeimg");
	this.shape_1523.setTransform(-44.9,134.1,1,1,0,0,0,0.6,0);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f().s("#378FAB").ss(0.8).p("AgOikIgwFaIB8AGg");
	this.shape_1524.setTransform(-35.2,212,1,1,0,0,0,0,1.4);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f().s("#378FAB").ss(0.8).p("AiHhxICgDiIByiag");
	this.shape_1525.setTransform(-56.9,182.3,1,1,0,0,0,0.4,0.2);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f().s("#378FAB").ss(0.8).p("AB+h/IkwCaIFsBmg");
	this.shape_1526.setTransform(-45.7,-13.7,1,1,0,0,0,0,0.1);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f().s("#378FAB").ss(0.8).p("AAFh4IhGDEICCA2g");
	this.shape_1527.setTransform(-60.1,-128.3,1,1,0,0,0,0,0.8);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f().s("#378FAB").ss(0.8).p("AhoA+ICsAeIAqiyg");
	this.shape_1528.setTransform(-62.9,123.6,1,1,0,0,0,0.5,0);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f().s("#378FAB").ss(0.8).p("Ai/BfIByAqID6kAg");
	this.shape_1529.setTransform(-71.6,205.5,1,1,0,0,0,0.5,0);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f().s("#378FAB").ss(0.8).p("AguBsIBYAwIAGkkg");
	this.shape_1530.setTransform(-51.2,-167.2);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f().s("#378FAB").ss(0.8).p("AAuhcIiIAqIC4CIg");
	this.shape_1531.setTransform(-31.2,-100.2);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f().s("#378FAB").ss(0.8).p("AgwhSIgkCgICmhwg");
	this.shape_1532.setTransform(-64.2,-60.4);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f().s("#378FAB").ss(0.8).p("AAehfIheCUICCAwg");
	this.shape_1533.setTransform(-62.6,-73.5,1,1,0,0,0,0,0.5);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f().s("#378FAB").ss(0.8).p("ABxiRIjoCmID0B+g");
	this.shape_1534.setTransform(-64.8,100.4,1,1,0,0,0,0,0.3);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f().s("#378FAB").ss(0.8).p("AhAhbIgwCyIDciUg");
	this.shape_1535.setTransform(-67.4,139.2);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f().s("#378FAB").ss(0.8).p("AAXiHIhwCyICyBgg");
	this.shape_1536.setTransform(-66.1,3,1,1,0,0,0,0,0.5);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f().s("#378FAB").ss(0.8).p("AhXhaIBUC4IBehag");
	this.shape_1537.setTransform(-65.9,16.4,1,1,0,0,0,0.3,0.3);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f().s("#378FAB").ss(0.8).p("AgSiYIhaEkIDcjug");
	this.shape_1538.setTransform(-64.7,-106,1,1,0,0,0,0,0.1);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f().s("#378FAB").ss(0.8).p("AADihIhkFOIDEgMg");
	this.shape_1539.setTransform(-67,42.5,1,1,0,0,0,0,0.8);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f().s("#378FAB").ss(0.8).p("AAWjeIjKG6IFsjYg");
	this.shape_1540.setTransform(-73.2,193.4,1,1,0,0,0,0,0.4);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f().s("#378FAB").ss(0.8).p("AhtBSICgBUIA8lCg");
	this.shape_1541.setTransform(-64.4,-100.3,1,1,0,0,0,0.2,0);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f().s("#378FAB").ss(0.8).p("ABAhgIh8CsIB8Aeg");
	this.shape_1542.setTransform(-54,-198.7,1,1,0,0,0,0,0.6);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f().s("#378FAB").ss(0.8).p("AA7iRIiUEqIC4hCg");
	this.shape_1543.setTransform(-65.4,-164.3,1,1,0,0,0,0,0.7);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f().s("#378FAB").ss(0.8).p("AhZgHICUBSIAkiUg");
	this.shape_1544.setTransform(-65,-148.8,1,1,0,0,0,0.5,0);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f().s("#378FAB").ss(0.8).p("AhhiCIBCESICCgkg");
	this.shape_1545.setTransform(-53.6,2.8,1,1,0,0,0,0.3,0.8);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f().s("#378FAB").ss(0.8).p("Ag2hqIgMDQICCiOg");
	this.shape_1546.setTransform(-69.6,-205.3,1,1,0,0,0,0,0.2);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f().s("#378FAB").ss(0.8).p("AhkiVIgkEwIEMgqg");
	this.shape_1547.setTransform(-66.8,74.5,1,1,0,0,0,0,0.4);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f().s("#378FAB").ss(0.8).p("Ah9B1ICgAkIBakkg");
	this.shape_1548.setTransform(-67,207.6,1,1,0,0,0,0.3,0);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f().s("#378FAB").ss(0.8).p("AgZhnIgeC+IBwiyg");
	this.shape_1549.setTransform(-69.5,-1.8);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f().s("#378FAB").ss(0.8).p("AhVguIBUBeIBYhAg");
	this.shape_1550.setTransform(-38.3,-204.2,1,1,0,0,0,0.5,0.1);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f().s("#378FAB").ss(0.8).p("AhBh0IAkDoIBej0g");
	this.shape_1551.setTransform(-52.9,-167.9);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f().s("#378FAB").ss(0.8).p("AAYh4Ig6DuIBMh2g");
	this.shape_1552.setTransform(-68.5,-22.9,1,1,0,0,0,0,1.2);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f().s("#378FAB").ss(0.8).p("AhugDIB2BAIBmh2g");
	this.shape_1553.setTransform(-63.4,-215.8,1,1,0,0,0,0.6,0);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f().s("#378FAB").ss(0.8).p("AiMgpIAkB8IDoimg");
	this.shape_1554.setTransform(-66.4,93.9);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f().s("#378FAB").ss(0.8).p("AimBQIEYAqIA8jug");
	this.shape_1555.setTransform(-83,-24.5,1,1,0,0,0,0.6,0);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f().s("#378FAB").ss(0.8).p("AixiBIAGEAIFUjEg");
	this.shape_1556.setTransform(-83.1,-29.3);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f().s("#378FAB").ss(0.8).p("ABxhQIkYBkIFaA8g");
	this.shape_1557.setTransform(-84.1,-44.4);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f().s("#378FAB").ss(0.8).p("AAkiPIhYEkIBqASg");
	this.shape_1558.setTransform(-58.4,209.3,1,1,0,0,0,0,1.3);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f().s("#378FAB").ss(0.8).p("ABAhfIiUCmICsAeg");
	this.shape_1559.setTransform(-39,-215.8,1,1,0,0,0,0,0.4);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f().s("#378FAB").ss(0.8).p("Ag2ibIAGE2IBklOg");
	this.shape_1560.setTransform(-72,43.5);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f().s("#378FAB").ss(0.8).p("AhPh1IBCDoIBeiUg");
	this.shape_1561.setTransform(-67.4,-79.9,1,1,0,0,0,0.2,0.3);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f().s("#378FAB").ss(0.8).p("AgxhAIg2CCIDKgwg");
	this.shape_1562.setTransform(-69.4,-143,1,1,0,0,0,0,0.1);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f().s("#378FAB").ss(0.8).p("AAChEIjKBeIGQAqg");
	this.shape_1563.setTransform(-91,163.9);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f().s("#378FAB").ss(0.8).p("AjKi7IAwFyIFglIg");
	this.shape_1564.setTransform(-90.8,185.3);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f().s("#378FAB").ss(0.8).p("AAUhzIh2BaIDECIg");
	this.shape_1565.setTransform(-80.7,159.7,1,1,0,0,0,0,0.2);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f().s("#378FAB").ss(0.8).p("AA7gqIh2BYICCgMg");
	this.shape_1566.setTransform(-53.5,-184,1,1,0,0,0,0,0.3);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f().s("#378FAB").ss(0.8).p("AiaC/IBaAwIDKm6g");
	this.shape_1567.setTransform(-84.5,191.2,1,1,0,0,0,0.2,0);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f().s("#378FAB").ss(0.8).p("ABViQIjcDcIESBIg");
	this.shape_1568.setTransform(-57.3,163.3,1,1,0,0,0,0,0.3);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f().s("#378FAB").ss(0.8).p("Aheg2Ig2BqIEYhkg");
	this.shape_1569.setTransform(-86,-47.5);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f().s("#378FAB").ss(0.8).p("Ai9CSIA8BCIEkmKg");
	this.shape_1570.setTransform(-87.1,189,1,1,0,0,0,0.2,0);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f().s("#378FAB").ss(0.8).p("AhXAtIB8AYIA2iCg");
	this.shape_1571.setTransform(-83.1,-143.4,1,1,0,0,0,0.6,0);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f().s("#378FAB").ss(0.8).p("AjWjCIEAGQIC0hsg");
	this.shape_1572.setTransform(-96.1,-158.8,1,1,0,0,0,0.7,0.7);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f().s("#378FAB").ss(0.8).p("AizjKIg2BaIG0Ekg");
	this.shape_1573.setTransform(-94.8,-167.5,1,1,0,0,0,0,0.2);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f().s("#378FAB").ss(0.8).p("Ag9BEIBkAqIAYjQg");
	this.shape_1574.setTransform(-81.2,16.9,1,1,0,0,0,0.2,0);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f().s("#378FAB").ss(0.8).p("AgzheIgMCyIB8img");
	this.shape_1575.setTransform(-81.3,15.2);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f().s("#378FAB").ss(0.8).p("Ahgi0IgeFmID6jQg");
	this.shape_1576.setTransform(-88.2,-88.7,1,1,0,0,0,0,0.2);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f().s("#378FAB").ss(0.8).p("AgUiFIgYEeIBYg2g");
	this.shape_1577.setTransform(-73.6,-77.3,1,1,0,0,0,0,1.3);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f().s("#378FAB").ss(0.8).p("AgsgcIA0BqIAkigg");
	this.shape_1578.setTransform(-73.5,-60.3,1,1,0,0,0,0.1,0);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f().s("#378FAB").ss(0.8).p("AgdhhIgYDQIBqgYg");
	this.shape_1579.setTransform(-72,17.6,1,1,0,0,0,0,0.8);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f().s("#378FAB").ss(0.8).p("AiBBOIBmBCICUkSg");
	this.shape_1580.setTransform(-87.6,-78.9,1,1,0,0,0,0.3,0);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f().s("#378FAB").ss(0.8).p("AhkgzICCCUIBIjEg");
	this.shape_1581.setTransform(-69.5,-131.2,1,1,0,0,0,0.3,0);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f().s("#378FAB").ss(0.8).p("AhSgBICCCaIAkkwg");
	this.shape_1582.setTransform(-85.1,74.4,1,1,0,0,0,0.2,0);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f().s("#378FAB").ss(0.8).p("AhIgyIAMBkIB8AGg");
	this.shape_1583.setTransform(-36.4,18.4,1,1,0,0,0,0.1,0.4);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f().s("#378FAB").ss(0.8).p("Ag8hxIBqDWIASjQg");
	this.shape_1584.setTransform(-36.3,34.5,1,1,0,0,0,0.2,0);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f().s("#378FAB").ss(0.8).p("AgKiLIhmB+IDcCUg");
	this.shape_1585.setTransform(-86.6,-105.3,1,1,0,0,0,0,0.3);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f().s("#378FAB").ss(0.8).p("ACwjmIlsBIIF+F+g");
	this.shape_1586.setTransform(-94,-172.2);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f().s("#378FAB").ss(0.8).p("AiogcIBmCOIDijig");
	this.shape_1587.setTransform(-92.8,113.6,1,1,0,0,0,0.2,0);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f().s("#378FAB").ss(0.8).p("AhIgIICIBwIAMjQg");
	this.shape_1588.setTransform(-82.4,-205.7,1,1,0,0,0,0.3,0);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f().s("#378FAB").ss(0.8).p("AgiikIg8FCIC+jWg");
	this.shape_1589.setTransform(-49.9,-99.2,1,1,0,0,0,0,0.3);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f().s("#378FAB").ss(0.8).p("AiDgnIBmBSICagkg");
	this.shape_1590.setTransform(-85.8,129.3,1,1,0,0,0,0.7,0.2);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f().s("#378FAB").ss(0.8).p("Ag9g5Ih+BwIFshGg");
	this.shape_1591.setTransform(-94.1,-193.6);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f().s("#378FAB").ss(0.8).p("Ag+hjIAwC+IBMimg");
	this.shape_1592.setTransform(-86.2,-128.9);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f().s("#378FAB").ss(0.8).p("AA0hWIiCCOICgAkg");
	this.shape_1593.setTransform(-68.4,-200.5,1,1,0,0,0,0,0.4);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f().s("#378FAB").ss(0.8).p("ABAg0IisBkIDiAGg");
	this.shape_1594.setTransform(-84.6,-57.8,1,1,0,0,0,0,0.1);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f().s("#378FAB").ss(0.8).p("ABliGIjiDiIEAAwg");
	this.shape_1595.setTransform(-87,116.3,1,1,0,0,0,0,0.4);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f().s("#378FAB").ss(0.8).p("AALhRIiaAYIEeCCg");
	this.shape_1596.setTransform(-94.9,82.3);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f().s("#378FAB").ss(0.8).p("AiOirIgGFUIEkjQg");
	this.shape_1597.setTransform(-95,93.9,1,1,0,0,0,0,0.2);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f().s("#378FAB").ss(0.8).p("AhMg3IBqCOIAwiyg");
	this.shape_1598.setTransform(-81.6,139.1,1,1,0,0,0,0.2,0);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f().s("#378FAB").ss(0.8).p("ACKhpIkkDQIFIhUg");
	this.shape_1599.setTransform(-94.3,100.6,1,1,0,0,0,0,0.2);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f().s("#378FAB").ss(0.8).p("AhPiKIBYEkIBOhOg");
	this.shape_1600.setTransform(-96,17.1,1,1,0,0,0,0.4,1.1);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f().s("#378FAB").ss(0.8).p("AhTjmIASHGICUkqg");
	this.shape_1601.setTransform(-67.9,-171.7,1,1,0,0,0,0,0.4);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f().s("#378FAB").ss(0.8).p("AA2ikIiUE2IDKjig");
	this.shape_1602.setTransform(175.6,-8.5,1,1,0,0,0,0,0.4);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f().s("#378FAB").ss(0.8).p("AhJCMIB8AMIAYkeg");
	this.shape_1603.setTransform(-83.1,-78.5,1,1,0,0,0,0.2,0);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f().s("#378FAB").ss(0.8).p("AgtiHIhgDcIEYA2g");
	this.shape_1604.setTransform(-90.8,45.5,1,1,0,0,0,0,0.4);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f().s("#378FAB").ss(0.8).p("AhlhRIDKCmIASheg");
	this.shape_1605.setTransform(177.3,14.3,1,1,0,0,0,1,0.4);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f().s("#378FAB").ss(0.8).p("AAHiFIhqEMIDKhgg");
	this.shape_1606.setTransform(-101,153.4,1,1,0,0,0,0,0.5);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f().s("#378FAB").ss(0.8).p("ABYigIiyAkIC4ESg");
	this.shape_1607.setTransform(-86.4,44);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f().s("#378FAB").ss(0.8).p("AgwhGIgGCOIBqg8g");
	this.shape_1608.setTransform(-94.7,132.5,1,1,0,0,0,0,0.3);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f().s("#378FAB").ss(0.8).p("AgLgnIhOBMICygkg");
	this.shape_1609.setTransform(-86.5,27.7);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f().s("#378FAB").ss(0.8).p("AAlg8IhMB2IBSAMg");
	this.shape_1610.setTransform(-68.1,-17.4,1,1,0,0,0,0,0.7);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f().s("#378FAB").ss(0.8).p("ABTgqIiggkICmCag");
	this.shape_1611.setTransform(-68.5,-187.3);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f().s("#378FAB").ss(0.8).p("AgTg4IhmBGIDuAqg");
	this.shape_1612.setTransform(-88,-200.8,1,1,0,0,0,0,0.1);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f().s("#378FAB").ss(0.8).p("AgwhaIA0CyIAwhwg");
	this.shape_1613.setTransform(-95.7,-61.5,1,1,0,0,0,0.2,0.4);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f().s("#378FAB").ss(0.8).p("Ah/jXIBIHAIC4gwg");
	this.shape_1614.setTransform(-105.2,-156.4,1,1,0,0,0,0.2,1);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f().s("#378FAB").ss(0.8).p("AA9hrIh2COIB2BOg");
	this.shape_1615.setTransform(-15.8,-94.5,1,1,0,0,0,0,0.5);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f().s("#378FAB").ss(0.8).p("AhqhUIBgCsIB2hYg");
	this.shape_1616.setTransform(-89.2,148.3,1,1,0,0,0,0.3,0.2);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f().s("#378FAB").ss(0.8).p("AgjhsIgqDiICagYg");
	this.shape_1617.setTransform(-101.4,65.3,1,1,0,0,0,0,0.6);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f().s("#378FAB").ss(0.8).p("AgxhrIgqC4ICyAkg");
	this.shape_1618.setTransform(-95.3,-5.1,1,1,0,0,0,0,0.5);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f().s("#378FAB").ss(0.8).p("AiMhlIByDKICmiUg");
	this.shape_1619.setTransform(-90.6,64,1,1,0,0,0,0.3,0.1);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f().s("#378FAB").ss(0.8).p("Agog7IgwBwICshkg");
	this.shape_1620.setTransform(-86.6,-58.5);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f().s("#378FAB").ss(0.8).p("AgHhgIgkDQIBYgeg");
	this.shape_1621.setTransform(-100,-60.3,1,1,0,0,0,0,1);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f().s("#378FAB").ss(0.8).p("ABGiGIkMCmIGQBmg");
	this.shape_1622.setTransform(-118.2,-120.4,1,1,0,0,0,0,0.1);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f().s("#378FAB").ss(0.8).p("AjQhbIASC4IF+hUg");
	this.shape_1623.setTransform(-117.2,-108);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f().s("#378FAB").ss(0.8).p("Ai/gcIDKCOIC0jig");
	this.shape_1624.setTransform(-116.6,-95.7,1,1,0,0,0,0.5,0);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f().s("#378FAB").ss(0.8).p("AhYAyICUCEIAelmg");
	this.shape_1625.setTransform(-106.8,-89.3,1,1,0,0,0,0.1,0);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f().s("#378FAB").ss(0.8).p("AhnBbIDWgkIAGiOg");
	this.shape_1626.setTransform(-110.7,133.8,1,1,0,0,0,0.7,-0.2);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f().s("#378FAB").ss(0.8).p("AiYhUIBOCsIDciyg");
	this.shape_1627.setTransform(-114.2,134.2,1,1,0,0,0,0.2,0);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f().s("#378FAB").ss(0.8).p("AiLhvICKDcICOiyg");
	this.shape_1628.setTransform(-85.9,-5.1,1,1,0,0,0,0.3,0.1);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f().s("#378FAB").ss(0.8).p("AgtgYIAkBMIA0hqg");
	this.shape_1629.setTransform(-99.8,-47.5,1,1,0,0,0,0.1,0);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f().s("#378FAB").ss(0.8).p("AhrhlIBrDoIBrkMg");
	this.shape_1630.setTransform(-111,153.3,1,1,0,0,0,0.1,0);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f().s("#378FAB").ss(0.8).p("AhagwICICOIAwi+g");
	this.shape_1631.setTransform(-101.6,-129.1,1,1,0,0,0,0.3,0);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f().s("#378FAB").ss(0.8).p("AhvAJIDcBIIAMigg");
	this.shape_1632.setTransform(178,4.8,1,1,0,0,0,0.7,0);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f().s("#378FAB").ss(0.8).p("Ah5heICUDKIBgjcg");
	this.shape_1633.setTransform(-107.6,42.8,1,1,0,0,0,0.3,0);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f().s("#378FAB").ss(0.8).p("AhXgUICOB8IAkjQg");
	this.shape_1634.setTransform(-109.7,-60.5,1,1,0,0,0,0.3,0);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f().s("#378FAB").ss(0.8).p("Ag8hqIgeDWICyhUg");
	this.shape_1635.setTransform(-109.8,-73.2,1,1,0,0,0,0,0.3);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.f().s("#378FAB").ss(0.8).p("AAhiXIiaE2ID0gSg");
	this.shape_1636.setTransform(-107.9,17.9,1,1,0,0,0,0,0.6);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.f().s("#378FAB").ss(0.8).p("ABchxIjKDiIDohag");
	this.shape_1637.setTransform(177.2,-5.2,1,1,0,0,0,0,0.4);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f().s("#378FAB").ss(0.8).p("AhGicIA8E2IBSi4g");
	this.shape_1638.setTransform(-111.7,-46.4,1,1,0,0,0,0.1,0.5);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f().s("#378FAB").ss(0.8).p("AhBipIgMFCICak2g");
	this.shape_1639.setTransform(-112.3,18);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f().s("#378FAB").ss(0.8).p("AAAhJIhsA8IDWBSg");
	this.shape_1640.setTransform(-89.4,141,1,1,0,0,0,0,0.1);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.f().s("#378FAB").ss(0.8).p("AheA/ICUA2IAqjig");
	this.shape_1641.setTransform(-114.5,64.8,1,1,0,0,0,0.3,0);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f().s("#378FAB").ss(0.8).p("Ahhh8IAAD0IC+isg");
	this.shape_1642.setTransform(-114.5,59.1,1,1,0,0,0,0,0.1);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f().s("#378FAB").ss(0.8).p("AAchfIhSC4IB2hqg");
	this.shape_1643.setTransform(-107.3,-39.9,1,1,0,0,0,0,0.5);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f().s("#378FAB").ss(0.8).p("AgfiiIg8FCIC4isg");
	this.shape_1644.setTransform(-109.6,-14.7,1,1,0,0,0,0,0.4);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f().s("#378FAB").ss(0.8).p("AhKiwIASFUICCkeg");
	this.shape_1645.setTransform(-116.7,89,1,1,0,0,0,0,0.1);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f().s("#378FAB").ss(0.8).p("AhGBaIBwAMIAei+g");
	this.shape_1646.setTransform(-79.1,-3.3,1,1,0,0,0,0.3,0);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f().s("#378FAB").ss(0.8).p("AAUixIhYEwICIBCg");
	this.shape_1647.setTransform(-113.2,185.4,1,1,0,0,0,0,1.1);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f().s("#378FAB").ss(0.8).p("AhaBVICOAMIAqi4g");
	this.shape_1648.setTransform(-109.4,-7.6,1,1,0,0,0,0.4,0);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f().s("#378FAB").ss(0.8).p("AgZhoIhIDKIDEiUg");
	this.shape_1649.setTransform(-119.8,116,1,1,0,0,0,0,0.1);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.f().s("#378FAB").ss(0.8).p("AhAB9IB8A2IAGlUg");
	this.shape_1650.setTransform(-115.9,92.8,1,1,0,0,0,0.1,0);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f().s("#378FAB").ss(0.8).p("AhbBsIBaA2IBYkwg");
	this.shape_1651.setTransform(-119.6,180.8,1,1,0,0,0,0.2,0);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f().s("#378FAB").ss(0.8).p("AhviAIAqD6ICyj6g");
	this.shape_1652.setTransform(-122.1,179.5);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f().s("#378FAB").ss(0.8).p("AgigxIhOBkIDcAAg");
	this.shape_1653.setTransform(-121.9,161.4,1,1,0,0,0,0,0.1);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f().s("#378FAB").ss(0.8).p("AiViDIAYEGIEMimg");
	this.shape_1654.setTransform(-125.5,-130.3,1,1,0,0,0,0,0.1);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.f().s("#378FAB").ss(0.8).p("AhlBRICyAeIAejWg");
	this.shape_1655.setTransform(-126.2,-73.8,1,1,0,0,0,0.4,0);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.f().s("#378FAB").ss(0.8).p("AiTgyIBOCOIDQi4g");
	this.shape_1656.setTransform(-129.7,-74.9,1,1,0,0,0,0.2,0);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.f().s("#378FAB").ss(0.8).p("AhBiAIhUCgIEkBgg");
	this.shape_1657.setTransform(-125.4,-146.6,1,1,0,0,0,0,0.3);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f().s("#378FAB").ss(0.8).p("AhdhFIgeCOIDuAAg");
	this.shape_1658.setTransform(179.7,52.5,1,1,0,0,0,0,0.2);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f().s("#378FAB").ss(0.8).p("AhKg5ICOBwIASheg");
	this.shape_1659.setTransform(180.9,101,1,1,0,0,0,0.7,0.1);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.f().s("#378FAB").ss(0.8).p("AhdCNICIi+IA2hag");
	this.shape_1660.setTransform(-121.2,-176,1,1,0,0,0,1.4,-2);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.f().s("#378FAB").ss(0.8).p("AgvBjIBSBIIAMlCg");
	this.shape_1661.setTransform(-123.7,16.1);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f().s("#378FAB").ss(0.8).p("AhagdIBUCaIBej6g");
	this.shape_1662.setTransform(-127.7,13.6,1,1,0,0,0,0.1,0);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.f().s("#378FAB").ss(0.8).p("Ag9iCICCEMIAGh+g");
	this.shape_1663.setTransform(-104.2,-119.7,1,1,0,0,0,0.7,1.2);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f().s("#378FAB").ss(0.8).p("AhsjaIhIGuIFmlCg");
	this.shape_1664.setTransform(-130.8,-20.2,1,1,0,0,0,0,0.1);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f().s("#378FAB").ss(0.8).p("AiXgvIB4BeICyheg");
	this.shape_1665.setTransform(-133,5.7,1,1,0,0,0,0.6,0);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f().s("#378FAB").ss(0.8).p("Ag9hbIhUC4IEegqg");
	this.shape_1666.setTransform(-130.1,-89.2,1,1,0,0,0,0,0.2);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f().s("#378FAB").ss(0.8).p("AguhDIgGB8IBkh8g");
	this.shape_1667.setTransform(-92.6,-112.9);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f().s("#378FAB").ss(0.8).p("ABCiPIiCC4ICCBsg");
	this.shape_1668.setTransform(-47,-119.6,1,1,0,0,0,0,0.6);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f().s("#378FAB").ss(0.8).p("AAAhXIgvC+IBeAAg");
	this.shape_1669.setTransform(-92.5,-129,1,1,0,0,0,0,1);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f().s("#378FAB").ss(0.8).p("ABDiiIiUFOICmAGg");
	this.shape_1670.setTransform(-131,88.3,1,1,0,0,0,0,0.9);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f().s("#378FAB").ss(0.8).p("AhShsIBeDQIBIjKg");
	this.shape_1671.setTransform(-130.7,115.6,1,1,0,0,0,0.2,0);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f().s("#378FAB").ss(0.8).p("ABMhzIiUD0ICUAAg");
	this.shape_1672.setTransform(-132,59,1,1,0,0,0,0,0.8);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f().s("#378FAB").ss(0.8).p("AhLiwIAAFOICUlOg");
	this.shape_1673.setTransform(-131.7,88.8);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f().s("#378FAB").ss(0.8).p("AAFhTIhYCUICmAYg");
	this.shape_1674.setTransform(-130.3,134.6,1,1,0,0,0,0,0.4);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f().s("#378FAB").ss(0.8).p("AhVhtICmDWIAMiyg");
	this.shape_1675.setTransform(-95.4,13.3,1,1,0,0,0,0.4,0.1);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f().s("#378FAB").ss(0.8).p("AgEgJIhOgkICmBYg");
	this.shape_1676.setTransform(-128.6,192.7);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f().s("#378FAB").ss(0.8).p("Ahzi0IBUFmICUj0g");
	this.shape_1677.setTransform(-135.9,53.5,1,1,0,0,0,0.1,0.2);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f().s("#378FAB").ss(0.8).p("ABNhlIi+BaIDoBwg");
	this.shape_1678.setTransform(-136.2,36.5,1,1,0,0,0,0,0.1);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f().s("#378FAB").ss(0.8).p("AgKhMIhUCUIC+hYg");
	this.shape_1679.setTransform(-138.1,27.9,1,1,0,0,0,0,0.1);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f().s("#378FAB").ss(0.8).p("Ag4hkIgqCCIC+BIg");
	this.shape_1680.setTransform(-114.3,43.9,1,1,0,0,0,0,0.4);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f().s("#378FAB").ss(0.8).p("AhQhOICCCaIAkiCg");
	this.shape_1681.setTransform(-130.2,148.8,1,1,0,0,0,0.4,0.1);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f().s("#378FAB").ss(0.8).p("AAyhJIjECUIEqgGg");
	this.shape_1682.setTransform(-115,118.3,1,1,0,0,0,0,0.2);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f().s("#378FAB").ss(0.8).p("Ag3hkIh4CsIFaAeg");
	this.shape_1683.setTransform(-146.8,115.6,1,1,0,0,0,0,0.2);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f().s("#378FAB").ss(0.8).p("AACgyIgQBeIAcAeg");
	this.shape_1684.setTransform(188,19.8,1,1,0,0,0,0,1.7);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f().s("#378FAB").ss(0.8).p("AAQhvIiCAGIDiDKg");
	this.shape_1685.setTransform(-141,115.9);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f().s("#378FAB").ss(0.8).p("AiohZIEACyIBaiUg");
	this.shape_1686.setTransform(-146.8,131.8,1,1,0,0,0,0.8,0.1);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f().s("#378FAB").ss(0.8).p("AiwCmIEqAAIA8lCg");
	this.shape_1687.setTransform(-130.7,-15.7,1,1,0,0,0,0.5,0);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f().s("#378FAB").ss(0.8).p("Ag4AaIBMBUIAkjWg");
	this.shape_1688.setTransform(-138.8,177,1,1,0,0,0,0.1,0);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f().s("#378FAB").ss(0.8).p("AhyhnICUDKIBUi4g");
	this.shape_1689.setTransform(-147.8,-90,1,1,0,0,0,0.3,0);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f().s("#378FAB").ss(0.8).p("AAdiAIiCEAIDQhyg");
	this.shape_1690.setTransform(-147.7,-66.7,1,1,0,0,0,0,0.4);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f().s("#378FAB").ss(0.8).p("AhmgBICgB2IAwjog");
	this.shape_1691.setTransform(-147.2,-54,1,1,0,0,0,0.3,0);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f().s("#378FAB").ss(0.8).p("AheAAICyAwIAYheg");
	this.shape_1692.setTransform(-146.8,15.3,1,1,0,0,0,1,0);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f().s("#378FAB").ss(0.8).p("AgRhHIhUCOIDKgwg");
	this.shape_1693.setTransform(-147.1,8.3,1,1,0,0,0,0,0.2);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f().s("#378FAB").ss(0.8).p("ABViaIjiDKIEeBsg");
	this.shape_1694.setTransform(-127.4,-46.8,1,1,0,0,0,0,0.3);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f().s("#378FAB").ss(0.8).p("Agmh0IgkCCICOBmg");
	this.shape_1695.setTransform(-118,155.4,1,1,0,0,0,0,0.6);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f().s("#378FAB").ss(0.8).p("Ahug8IBsB8IBwiCg");
	this.shape_1696.setTransform(-144.1,173.2,1,1,0,0,0,0.3,0);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f().s("#378FAB").ss(0.8).p("AARiCIg6CIIBSB+g");
	this.shape_1697.setTransform(-142.2,-129.6,1,1,0,0,0,0,0.9);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f().s("#378FAB").ss(0.8).p("Ag/h8IA2EAIBMhmg");
	this.shape_1698.setTransform(-132,154.1,1,1,0,0,0,0.2,0.8);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f().s("#378FAB").ss(0.8).p("AibAWIBCBIIDiiyg");
	this.shape_1699.setTransform(-152.2,149.3,1,1,0,0,0,0.3,0);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f().s("#378FAB").ss(0.8).p("AhwiOIgkEeIEkhsg");
	this.shape_1700.setTransform(-153.2,137.2,1,1,0,0,0,0,0.2);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f().s("#378FAB").ss(0.8).p("AADhLIhYCaICsgeg");
	this.shape_1701.setTransform(-146.9,-121.9,1,1,0,0,0,0,0.3);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f().s("#378FAB").ss(0.8).p("AhYhjIBeDEIBUiUg");
	this.shape_1702.setTransform(-148.2,25.5,1,1,0,0,0,0.2,0.1);

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f().s("#378FAB").ss(0.8).p("AgbhRIhOCmIDQgSg");
	this.shape_1703.setTransform(-77.1,-127.9,1,1,0,0,0,0,0.3);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f().s("#378FAB").ss(0.8).p("AgChyIgkDWIBMAkg");
	this.shape_1704.setTransform(-133,179.5,1,1,0,0,0,0,1.5);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f().s("#378FAB").ss(0.8).p("AhhhTIBUCsIBwg8g");
	this.shape_1705.setTransform(-148.9,68.5,1,1,0,0,0,0.4,0.4);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f().s("#378FAB").ss(0.8).p("AAOiwIhwD0IDEByg");
	this.shape_1706.setTransform(-149.1,53.5,1,1,0,0,0,0,0.7);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f().s("#378FAB").ss(0.8).p("AhdBHIBwCWIBImug");
	this.shape_1707.setTransform(-150.9,-21.2);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f().s("#378FAB").ss(0.8).p("AhEjMIgYGQIC4kYg");
	this.shape_1708.setTransform(-151,-33.4,1,1,0,0,0,0,0.3);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f().s("#378FAB").ss(0.8).p("AhmhXIgqCsIEYiOg");
	this.shape_1709.setTransform(-158.4,-74.2);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f().s("#378FAB").ss(0.8).p("AhVh+Ig8EAIEeg8g");
	this.shape_1710.setTransform(175.9,72.8,1,1,0,0,0,0,0.3);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f().s("#378FAB").ss(0.8).p("AiNAQICUByICEkAg");
	this.shape_1711.setTransform(-158.4,-67.3,1,1,0,0,0,0.3,0);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f().s("#378FAB").ss(0.8).p("AgehjIhaCsIDuAeg");
	this.shape_1712.setTransform(-156.5,-90.1,1,1,0,0,0,0,0.3);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f().s("#378FAB").ss(0.8).p("AhICTIBYiaIA8iKg");
	this.shape_1713.setTransform(-147,-131.2,1,1,0,0,0,1.1,-2.2);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f().s("#378FAB").ss(0.8).p("AiSgPIByBeICsiag");
	this.shape_1714.setTransform(176.4,87.2,1,1,0,0,0,0.4,0);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f().s("#378FAB").ss(0.8).p("AhggaIBOCUIBwj0g");
	this.shape_1715.setTransform(-157,47.4,1,1,0,0,0,0.1,0);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f().s("#378FAB").ss(0.8).p("AARhiIiCB2IDiBOg");
	this.shape_1716.setTransform(-159.1,25.4,1,1,0,0,0,0,0.2);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f().s("#378FAB").ss(0.8).p("Ah0hVIAkCsIC+heg");
	this.shape_1717.setTransform(-158.7,36.1,1,1,0,0,0,0.1,0.1);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f().s("#378FAB").ss(0.8).p("AhOhLIgqCIIDoASg");
	this.shape_1718.setTransform(-147.6,-106.4,1,1,0,0,0,0,0.2);

	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f().s("#378FAB").ss(0.8).p("Ah3A2IA8BUICmkGg");
	this.shape_1719.setTransform(-149.3,153.2,1,1,0,0,0,0.1,0);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f().s("#378FAB").ss(0.8).p("ABQheIisAeIC+Cag");
	this.shape_1720.setTransform(-146.2,-107.7);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f().s("#378FAB").ss(0.8).p("AA6h/IimEGIDcgGg");
	this.shape_1721.setTransform(-144.6,154,1,1,0,0,0,0,0.5);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f().s("#378FAB").ss(0.8).p("AgviDIgSEYICCgGg");
	this.shape_1722.setTransform(-145.8,91.4,1,1,0,0,0,0,1);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f().s("#378FAB").ss(0.8).p("Ag/h6IAGDuIB2isg");
	this.shape_1723.setTransform(-158.7,111.3,1,1,0,0,0,0,0.2);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f().s("#378FAB").ss(0.8).p("ABfhNIisCaICsg8g");
	this.shape_1724.setTransform(180.5,87.8,1,1,0,0,0,0,0.4);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f().s("#378FAB").ss(0.8).p("AhNAVICgASIAMhMg");
	this.shape_1725.setTransform(181.6,92.9,1,1,0,0,0,1.1,0);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f().s("#378FAB").ss(0.8).p("AhFhaIAGCyICCh2g");
	this.shape_1726.setTransform(-164,18.7,1,1,0,0,0,0,0.2);

	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f().s("#378FAB").ss(0.8).p("AAEgFIhAhIIB8Cag");
	this.shape_1727.setTransform(-162,159.4);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f().s("#378FAB").ss(0.8).p("AgBhzIhsDoIDchUg");
	this.shape_1728.setTransform(-160.1,-2.1,1,1,0,0,0,0,0.3);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f().s("#378FAB").ss(0.8).p("AhtANICIA8IBUiOg");
	this.shape_1729.setTransform(-159.5,7.9,1,1,0,0,0,0.6,0);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f().s("#378FAB").ss(0.8).p("AiAAuIBsBCICOjWg");
	this.shape_1730.setTransform(-162.6,87.5,1,1,0,0,0,0.4,0);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f().s("#378FAB").ss(0.8).p("AA5ivIhwA8IBwESg");
	this.shape_1731.setTransform(-145.1,88.9,1,1,0,0,0,0,0.2);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f().s("#378FAB").ss(0.8).p("AB7hJIk2CCIGEASg");
	this.shape_1732.setTransform(-179.3,52.1);

	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f().s("#378FAB").ss(0.8).p("AhCh4IgwDoIDijKg");
	this.shape_1733.setTransform(-130.2,-53.6);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f().s("#378FAB").ss(0.8).p("AhniEIB2ESIBakkg");
	this.shape_1734.setTransform(-77.1,-106.3,1,1,0,0,0,0.1,0);

	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f().s("#378FAB").ss(0.8).p("Ag9g4IgkBSIC4Aeg");
	this.shape_1735.setTransform(-166.6,-59.7,1,1,0,0,0,0,0.2);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f().s("#378FAB").ss(0.8).p("AjBhHIgYCOIGch8g");
	this.shape_1736.setTransform(-178.7,65.2);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f().s("#378FAB").ss(0.8).p("AjNgiID0DEIColCg");
	this.shape_1737.setTransform(-179.4,75.9,1,1,0,0,0,0.4,0);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f().s("#378FAB").ss(0.8).p("Ag9hfIhCC4ID6iag");
	this.shape_1738.setTransform(-170.3,-47.7);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f().s("#378FAB").ss(0.8).p("Ahig8IAqCCICUiOg");
	this.shape_1739.setTransform(-173.8,130.1);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f().s("#378FAB").ss(0.8).p("AARhiIiIC+ID0h8g");
	this.shape_1740.setTransform(-177.7,102.2,1,1,0,0,0,0,0.1);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f().s("#378FAB").ss(0.8).p("AiEAkIAqBCIDKi+g");
	this.shape_1741.setTransform(-176.2,107.7,1,1,0,0,0,0.1,0);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f().s("#378FAB").ss(0.8).p("AhEiLIAeEMIBqjog");
	this.shape_1742.setTransform(-167.2,-3.6);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f().s("#378FAB").ss(0.8).p("AhOAtIA2BCIBejQg");
	this.shape_1743.setTransform(-171.5,132.6,1,1,0,0,0,0.1,0);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f().s("#378FAB").ss(0.8).p("Ah1gcIASA6IC+gMg");
	this.shape_1744.setTransform(-173.5,120.9,1,1,0,0,0,0.1,0.1);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f().s("#378FAB").ss(0.8).p("AA7hzIigDiIDWh2g");
	this.shape_1745.setTransform(180.5,34.5,1,1,0,0,0,0,0.3);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f().s("#378FAB").ss(0.8).p("AACghIgcgeIA0Bqg");
	this.shape_1746.setTransform(189.2,29);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f().s("#378FAB").ss(0.8).p("AgghMIgYBeIBqA8g");
	this.shape_1747.setTransform(-133.6,18.8,1,1,0,0,0,0,0.6);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f().s("#378FAB").ss(0.8).p("AgwBLIA6BOIAkkeg");
	this.shape_1748.setTransform(-169.2,136.1);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f().s("#378FAB").ss(0.8).p("AhLhBIhOCCIEqhBg");
	this.shape_1749.setTransform(-185.7,9.4);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f().s("#378FAB").ss(0.8).p("ABlh0IjKC+IDQAwg");
	this.shape_1750.setTransform(-175.3,110.9,1,1,0,0,0,0,0.4);

	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f().s("#378FAB").ss(0.8).p("AAAhmIhZCUICyA8g");
	this.shape_1751.setTransform(-183,-27.9,1,1,0,0,0,0,0.4);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.f().s("#378FAB").ss(0.8).p("AhchQIAGCgICshkg");
	this.shape_1752.setTransform(-182.8,-15.4,1,1,0,0,0,0,0.1);

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.f().s("#378FAB").ss(0.8).p("AiehLIAkCaIEMgqg");
	this.shape_1753.setTransform(-185.1,23.8,1,1,0,0,0,0.1,0.2);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.f().s("#378FAB").ss(0.8).p("ACZhZIkqBCIEwBwg");
	this.shape_1754.setTransform(-186.5,18.4);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.f().s("#378FAB").ss(0.8).p("AhbAIIAkBaICIi+g");
	this.shape_1755.setTransform(-184.1,101.4);

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.f().s("#378FAB").ss(0.8).p("AAgjiIiIDAIDQEAg");
	this.shape_1756.setTransform(-121.5,-155.8,1,1,0,0,0,0,0.5);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f().s("#378FAB").ss(0.8).p("AAtiiIimFCID6iWg");
	this.shape_1757.setTransform(-163.6,76.4,1,1,0,0,0,0,0.4);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f().s("#378FAB").ss(0.8).p("Ah+hfIA2CaIC+Aqg");
	this.shape_1758.setTransform(-187.4,82.4,1,1,0,0,0,0.3,0.5);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f().s("#378FAB").ss(0.8).p("AA5iBIh2BsIB8CUg");
	this.shape_1759.setTransform(-106.7,-28.8,1,1,0,0,0,0,0.4);

	this.shape_1760 = new cjs.Shape();
	this.shape_1760.graphics.f().s("#378FAB").ss(0.8).p("AhGBQIB8BCIASkYg");
	this.shape_1760.setTransform(-157.8,90.7,1,1,0,0,0,0.2,0);

	this.shape_1761 = new cjs.Shape();
	this.shape_1761.graphics.f().s("#378FAB").ss(0.8).p("AiOgvIgYBwIE2iCg");
	this.shape_1761.setTransform(-181.4,51.4);

	this.shape_1762 = new cjs.Shape();
	this.shape_1762.graphics.f().s("#378FAB").ss(0.8).p("AhihHIASCOICshkg");
	this.shape_1762.setTransform(-185.2,95.2);

	this.shape_1763 = new cjs.Shape();
	this.shape_1763.graphics.f().s("#378FAB").ss(0.8).p("AhkhUIgSBkIDcBCg");
	this.shape_1763.setTransform(-181.4,1.3,1,1,0,0,0,0,0.3);

	this.shape_1764 = new cjs.Shape();
	this.shape_1764.graphics.f().s("#378FAB").ss(0.8).p("ABxhdIj6C+IEegSg");
	this.shape_1764.setTransform(-181.8,37,1,1,0,0,0,0,0.2);

	this.shape_1765 = new cjs.Shape();
	this.shape_1765.graphics.f().s("#378FAB").ss(0.8).p("AgnhoIAoDKIAqiCg");
	this.shape_1765.setTransform(-124.3,37.1,1,1,0,0,0,0.1,0.5);

	this.shape_1766 = new cjs.Shape();
	this.shape_1766.graphics.f().s("#378FAB").ss(0.8).p("AAKgCIg6h+IBkEAg");
	this.shape_1766.setTransform(-184.8,124.3);

	this.shape_1767 = new cjs.Shape();
	this.shape_1767.graphics.f().s("#378FAB").ss(0.8).p("Ah2heIDiDEIAehgg");
	this.shape_1767.setTransform(180.3,69.8,1,1,0,0,0,1.1,0.5);

	this.shape_1768 = new cjs.Shape();
	this.shape_1768.graphics.f().s("#378FAB").ss(0.8).p("AAPABIgohAIA6B8g");
	this.shape_1768.setTransform(-187.1,117.7);

	this.shape_1769 = new cjs.Shape();
	this.shape_1769.graphics.f().s("#378FAB").ss(0.8).p("AB4gzIjuAAIEABkg");
	this.shape_1769.setTransform(179.2,64.9);

	this.shape_1770 = new cjs.Shape();
	this.shape_1770.graphics.f().s("#378FAB").ss(0.8).p("AhohGIDQCOIASheg");
	this.shape_1770.setTransform(181.8,52.7,1,1,0,0,0,1,0.3);

	this.shape_1771 = new cjs.Shape();
	this.shape_1771.graphics.f().s("#378FAB").ss(0.8).p("Ah/gZIBaDQICglsg");
	this.shape_1771.setTransform(-170.3,-36);

	this.shape_1772 = new cjs.Shape();
	this.shape_1772.graphics.f().s("#378FAB").ss(0.8).p("ABqhSIjWB2IDiAwg");
	this.shape_1772.setTransform(181.2,41.8,1,1,0,0,0,0,0.2);

	this.shape_1773 = new cjs.Shape();
	this.shape_1773.graphics.f().s("#378FAB").ss(0.8).p("AAUAFIg0iaIBGEqg");
	this.shape_1773.setTransform(-197.2,87.3);

	this.shape_1774 = new cjs.Shape();
	this.shape_1774.graphics.f().s("#378FAB").ss(0.8).p("ABJiHIisBmIDKCmg");
	this.shape_1774.setTransform(-181.4,-3.8,1,1,0,0,0,0,0.2);

	this.shape_1775 = new cjs.Shape();
	this.shape_1775.graphics.f().s("#378FAB").ss(0.8).p("AhPCvICIAkIAYmQg");
	this.shape_1775.setTransform(-165.9,-35.2,1,1,0,0,0,0.1,0);

	this.shape_1776 = new cjs.Shape();
	this.shape_1776.graphics.f().s("#378FAB").ss(0.8).p("AiMg1IASCUID6i+g");
	this.shape_1776.setTransform(-183.4,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1776},{t:this.shape_1775},{t:this.shape_1774},{t:this.shape_1773},{t:this.shape_1772},{t:this.shape_1771},{t:this.shape_1770},{t:this.shape_1769},{t:this.shape_1768},{t:this.shape_1767},{t:this.shape_1766},{t:this.shape_1765},{t:this.shape_1764},{t:this.shape_1763},{t:this.shape_1762},{t:this.shape_1761},{t:this.shape_1760},{t:this.shape_1759},{t:this.shape_1758},{t:this.shape_1757},{t:this.shape_1756},{t:this.shape_1755},{t:this.shape_1754},{t:this.shape_1753},{t:this.shape_1752},{t:this.shape_1751},{t:this.shape_1750},{t:this.shape_1749},{t:this.shape_1748},{t:this.shape_1747},{t:this.shape_1746},{t:this.shape_1745},{t:this.shape_1744},{t:this.shape_1743},{t:this.shape_1742},{t:this.shape_1741},{t:this.shape_1740},{t:this.shape_1739},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733},{t:this.shape_1732},{t:this.shape_1731},{t:this.shape_1730},{t:this.shape_1729},{t:this.shape_1728},{t:this.shape_1727},{t:this.shape_1726},{t:this.shape_1725},{t:this.shape_1724},{t:this.shape_1723},{t:this.shape_1722},{t:this.shape_1721},{t:this.shape_1720},{t:this.shape_1719},{t:this.shape_1718},{t:this.shape_1717},{t:this.shape_1716},{t:this.shape_1715},{t:this.shape_1714},{t:this.shape_1713},{t:this.shape_1712},{t:this.shape_1711},{t:this.shape_1710},{t:this.shape_1709},{t:this.shape_1708},{t:this.shape_1707},{t:this.shape_1706},{t:this.shape_1705},{t:this.shape_1704},{t:this.shape_1703},{t:this.shape_1702},{t:this.shape_1701},{t:this.shape_1700},{t:this.shape_1699},{t:this.shape_1698},{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1689},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685},{t:this.shape_1684},{t:this.shape_1683},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1676},{t:this.shape_1675},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1670},{t:this.shape_1669},{t:this.shape_1668},{t:this.shape_1667},{t:this.shape_1666},{t:this.shape_1665},{t:this.shape_1664},{t:this.shape_1663},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1660},{t:this.shape_1659},{t:this.shape_1658},{t:this.shape_1657},{t:this.shape_1656},{t:this.shape_1655},{t:this.shape_1654},{t:this.shape_1653},{t:this.shape_1652},{t:this.shape_1651},{t:this.shape_1650},{t:this.shape_1649},{t:this.shape_1648},{t:this.shape_1647},{t:this.shape_1646},{t:this.shape_1645},{t:this.shape_1644},{t:this.shape_1643},{t:this.shape_1642},{t:this.shape_1641},{t:this.shape_1640},{t:this.shape_1639},{t:this.shape_1638},{t:this.shape_1637},{t:this.shape_1636},{t:this.shape_1635},{t:this.shape_1634},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631},{t:this.shape_1630},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624},{t:this.shape_1623},{t:this.shape_1622},{t:this.shape_1621},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609},{t:this.shape_1608},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.4,-232.8,403.6,465.6);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AAfAYQgIgEADgIIgzgVQgCADgDABQgEABgDgBQgFgDgBgGQAAgGAGgDQAHgCAEAFQADAEgBAFIAyAVQADgEAGAAQAGAAADAFQABAHgFAEQgDADgDAAIgDgBg");
	this.shape.setTransform(-33.9,173.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AAPByQgOgDgBgOQgCgJADgIQAEgIAIgDIgdiIQgJABgIgFQgHgFgCgJQgDgOALgJQAMgKAQAHQAKALgCAOQgCANgMAFIAeCIQANgBAIAKQAJAMgHAPQgJALgLAAIgGgBg");
	this.shape_1.setTransform(83.8,-109.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.5,0,11.5,0).s().p("AhgBgQgRgHAAgVQAEgTARgFQAPgEAMALICBhpQgJgOAHgOQAIgQATAAQAVAEAEASQAEARgNALQgJAHgLgBQgKAAgIgIIiBBpQAGAJgBALQgCALgIAGQgJAHgJAAQgFAAgGgDg");
	this.shape_2.setTransform(-51,176.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10,0,10,0).s().p("AA6BVQgIgHgBgJQAAgKAFgHIhvhjQgGAGgKABQgKAAgHgHQgMgKAFgPQAEgPASgEQASACAGAOQAGANgIALIBuBjQALgKAOAFQAOAEAEASQgCASgPAGQgFADgFAAQgIAAgHgHg");
	this.shape_3.setTransform(-16.9,-115.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.8,0).s().p("AgmAhQgIgDAAgHQgBgHAGgDQAIgGAGAIIA2ggQgEgJAHgEQAGgEAGAEQAGADgBAIQgDAHgGABQgHABgDgFIg2AgQADAGgEAFQgDAFgHAAIgBAAg");
	this.shape_4.setTransform(-112.2,71.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.4,0).s().p("AAUAoQgCgHAFgFIgug1QgGAEgGgDQgHgDgBgJQACgJAIgCQAHgCAFAGQADAEAAAEQAAAFgEADIAvA1QAIgGAIAIQAFAGgDAHQgDAHgJAAQgJgCgCgGg");
	this.shape_5.setTransform(-6.1,201);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.4,0,12.5,0).s().p("ABaAXQgOgGgBgPIiUgBQgCAPgNAGQgOAGgOgLQgLgPAGgMQAIgOAPAAQAJAAAIAHQAGAGACAKICUABQABgKAHgGQAHgHAJAAQAQAAAGAOQAIANgMAOQgJAHgJAAQgFAAgEgCg");
	this.shape_6.setTransform(45.6,-105.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AggAyQgIgCgCgJQAAgJAHgDQAGgEAGAEIAtg3QgFgFACgHQACgHAIgCQAKAAADAHQADAHgFAGQgDAEgEAAQgFABgEgDIgtA4QADADAAAFQABAFgDADQgEAFgFAAIgDAAg");
	this.shape_7.setTransform(175.7,-1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("Ag9AoQgCgKAHgFQAFgEAFABQAGAAAEAEIBHg2QgEgFABgFQABgGAFgEQAHgGAJAFQAJAEAAALQgDALgJACQgJACgGgHIhGA3QAFAHgFAIQgEAIgLAAQgKgDgCgJg");
	this.shape_8.setTransform(78.1,11.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6,0).s().p("Ag6BWQgDgPAKgIQAKgJAMAFIA3h2QgKgHAAgMQAAgOAOgHQAQgDAJALQAIALgGAMQgDAHgIAEQgIADgIgDIg4B1QAHAFADAIQACAIgDAIQgGAMgOAAQgOAAgHgPg");
	this.shape_9.setTransform(-135,179.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AAVAgQgGgFAFgHIgoglQgDADgDAAQgEAAgDgDQgEgEACgFQABgGAHgCQAHABACAFQACAFgDAFIAoAkQAEgDAFABQAGACABAHQAAAHgGACIgEABQgDAAgDgDg");
	this.shape_10.setTransform(-108.4,-26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,4,0).s().p("AAQBdQgMgCgDgLQgBgIACgGQAEgHAHgCIgdhvQgHABgGgEQgGgEgCgHQgDgMAJgHQAJgJANAGQAJAIAAAMQgCALgKAEIAcBvQALgCAHAJQAIAJgFAMQgIAKgJAAIgEgBg");
	this.shape_11.setTransform(-72.3,-58.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.1,0,11.2,0).s().p("AhsBhQgHgRANgOQAIgIALgBQALgBAJAHIB5iBQgHgJAAgLQAAgMAIgIQAMgOASAGQATAFADAWQgCAVgRAHQgQAHgOgLIh5CCQAMANgGARQgFARgVADQgXgCgGgSg");
	this.shape_12.setTransform(99.3,158.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.4,0,6.5,0).s().p("Ag7AOQgGgHADgHQADgGAIgBQALgBADAKIBLgFQABgFADgDQADgEAFAAQAIgBAEAHQAFAHgGAGQgHAGgHgCQgHgDgBgFIhMAEQAAAIgHADQgDACgDAAQgEAAgFgDg");
	this.shape_13.setTransform(158.8,137.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.3,0,8.3,0).s().p("AA3AeQgHgGABgKIhigYQgDAJgKABQgKABgIgIQgFgMAIgIQAGgIALADQAGABAEAGQADAFgBAHIBiAYQADgGAFgDQAGgCAGAAQALADACAKQACALgKAIQgFACgEAAQgGAAgFgEg");
	this.shape_14.setTransform(30,222.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.4,0,1.4,0).s().p("AAAArQgDgFABgFQACgFADgBIgGg1QgFAAgDgEQgDgFADgFQAEgFAGACQADABABAGQABADgCADQgCADgBABIAGA0QAIAAABAIQABAGgFADIgFACQgDAAgCgCg");
	this.shape_15.setTransform(-70.2,166.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,3.9,0).s().p("AggAfQgGgCAAgHQACgHAGgBQAFgCAEAEIAqghQgDgFADgEQACgFAHAAQAHABABAGQACAGgFAEQgDACgDAAQgEgBgDgCIgqAhQAEAHgGAFQgDACgDAAIgEgBg");
	this.shape_16.setTransform(32,-222);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.5,0).s().p("AApASQgEgBgCgDQgDgEAAgEIhAgJQAAADgEABQgEADgEgBQgGgBgCgFQgCgGAFgGQAHgEAGAEQAFADAAAHIA/AJQACgEAGgCQAHgBAFADQAEAHgEAGQgDAFgGAAIgCAAg");
	this.shape_17.setTransform(36.1,-42.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.1,0).s().p("AgjAcQgFgDAAgHQACgGAHgBQAFgBADAEIAugcQgDgFADgFQADgFAHABQAHACAAAGQABAGgFADQgGAEgGgGIguAdQAEAHgHAFQgDABgCAAIgFgBg");
	this.shape_18.setTransform(-160.3,104);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.8,0,2.9,0).s().p("AgJCFQgPgHgBgRQAAgKAHgIQAHgIALgBIgCijQgLAAgHgIQgHgIAAgKQAAgRAPgIQAOgHAQAMQAMAPgHAPQgGAPgQABIACCjQAQABAGAPQAHAPgLAPQgKAIgKAAQgEAAgGgDg");
	this.shape_19.setTransform(121.2,70.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.2,0,10.3,0).s().p("AhTBhQgQgGgCgTQADgTAPgFQAOgFAMAKIBwhsQgJgMAGgOQAGgPASgCQATADAGAQQAFAQgMALQgIAHgKAAQgKAAgHgGIhxBsQAHAHgBAKQgBAKgHAHQgIAIgKAAQgEAAgFgCg");
	this.shape_20.setTransform(112.3,-125.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.7,0,6.8,0).s().p("AAyAbQgFgBgDgFQgDgEABgGIhPgTQgCAFgFACQgFABgFAAQgIgCgCgIQgBgJAIgHQAJgDAGAFQAGAFgBAIIBQAUQADgIAHgBQAJAAAGAGQAEAKgGAHQgFAFgGAAIgDgBg");
	this.shape_21.setTransform(-166.3,-53.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,4,0).s().p("AghAXQgGgDABgFQAAgGAFgCQAGgEAFAHIAtgVQgDgHAHgDQAFgDAEAEQAFADgCAHQgDAFgFAAQgFAAgDgEIgtAVQACAEgDAEQgDADgFAAIgCAAg");
	this.shape_22.setTransform(-62.2,177.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.7,0,2.8,0).s().p("AAFBEQgGgGABgJQAAgIAIgDIgShSQgIABgFgHQgGgHAFgJQAGgJAJADQAJACAAAIQADANgKAEIASBTQAFgBAFADQAEADACAFQACAJgHAGQgEADgFAAQgEAAgEgCg");
	this.shape_23.setTransform(80.4,136);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.2,0,5.3,0).s().p("AgvAYQgGgFADgIQAEgHAHABQAGAAADAGIA8gWQgBgHAEgEQAFgFAHACQAHAFAAAHQgBAHgGACQgJAEgFgJIg8AWQACAJgJAEIgEABQgEgBgDgCg");
	this.shape_24.setTransform(90.4,164.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.6,0).s().p("AgnAgQgGgEABgHQACgHAHgBQAGgCAEAFIAzghQgDgGADgFQADgFAIAAQAHADABAGQABAHgFAEQgIAFgGgIIgzAiQACADgBAEQgBAEgEACQgDADgDAAQgCAAgDgCg");
	this.shape_25.setTransform(79.7,-77.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.4,0,14.4,0).s().p("ABrA5QgLgDgGgKQgHgJACgLIirgpQgEAKgKAGQgKADgLgCQgSgDgDgSQgFgTASgNQATgIAOALQAOAKgDARICrApQAGgQARgCQASgCANAOQAJAUgNAPQgIALgNAAIgIgBg");
	this.shape_26.setTransform(-52.1,59.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.9,0,12,0).s().p("ABWAWQgNgGgCgOIiOgBQgBAOgNAFQgNAGgOgKQgKgOAGgMQAIgNAOAAQAJAAAHAGQAHAGAAAJICPACQABgJAHgGQAGgHAKAAQAOAAAGAOQAHAMgKAOQgJAGgIAAQgFAAgFgCg");
	this.shape_27.setTransform(143,84.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.9,0,1.9,0).s().p("AgNA0QgFgEABgHQABgJALAAIAKhAQgEgBgBgDQgCgEABgEQABgHAFgCQAHgCAFAGQAEAHgEAGQgEAFgGAAIgKBAQAEACACAGQABAGgEAGQgDABgDAAQgEAAgDgCg");
	this.shape_28.setTransform(136.1,-81.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.4,0,1.5,0).s().p("AgMArQgDgGADgFQADgFAFABIAGg3QgDgBgCgFQgBgGAEgFQAFgDAFADQAFADgBAGQgBAEgCACQgDADgEgBIgGA3QAGACgBAIQgBAGgDACIgDAAQgEAAgEgDg");
	this.shape_29.setTransform(73.4,138.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AAbAcQgDgCgBgDQgBgEACgDIgwgdQgFAHgIgEQgEgDAAgGQAAgGAHgDQAHgBADAFQADAFgCAFIAvAcQAEgEAFABQAGAAADAHQABAHgFADIgFACIgGgCg");
	this.shape_30.setTransform(-7.1,71.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5.1,0).s().p("AgwArQgDgIAGgGQAIgIAKAHIA1g5QgDgEAAgFQAAgFADgEQAGgGAIACQAIADACAKQgBAJgHADQgIADgGgFIg1A6QAFAGgDAHQgCAHgKACQgKgBgDgIg");
	this.shape_31.setTransform(-16.8,76.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.6,0,7.6,0).s().p("AhHANQgHgJAEgHQAEgJAKAAQAFAAAFAEQAFAEAAAEIBagCQABgFAEgFQAEgEAGAAQAJAAAFAIQAFAIgHAIQgJAHgIgEQgJgDgBgIIhaACQgBAJgHAEQgDACgEAAQgFAAgGgEg");
	this.shape_32.setTransform(-74.2,86.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.8,0,1.9,0).s().p("AgKBDQgIgEABgJQABgFAEgEQAEgDAFAAIAFhTQgLgCABgNQABgIAHgDQAHgEAIAHQAFAJgEAHQgEAHgIAAIgFBTQAGABADAIQADAIgHAIQgEADgDAAQgEAAgDgDg");
	this.shape_33.setTransform(-94.5,123.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.3,0,14.4,0).s().p("ABpA+QgLgDgGgKQgGgKACgLIiqgyQgEALgKAFQgLAFgLgEQgRgFgDgSQgDgTASgNQATgHAOAMQANALgDARICqAyQAHgQARgCQASgDAMARQAIAVgNAOQgJAKgLAAIgKgCg");
	this.shape_34.setTransform(56.4,63.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.2,0,7.2,0).s().p("Ag/AxQgJgGABgMQAFgLAJgCQAKgBAGAIIBSgzQgEgIAFgIQAGgIALAAQAMAFABAKQABALgJAFQgFADgGgBQgGgBgEgFIhTAyQADAGgBAGQgCAGgGADQgEADgFAAQgEAAgEgCg");
	this.shape_35.setTransform(-143.1,126.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AgnAaQgFgEABgHQADgGAGgBQAGAAADAFIAygaQgCgFADgFQAEgFAHABQAHADAAAGQAAAGgFADQgEACgDgBQgEgBgCgDIgyAaQABAEgBADQgBAEgEACIgEABQgDAAgDgCg");
	this.shape_36.setTransform(-24.2,175.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.5,0,7.6,0).s().p("AAlA9QgEgLAHgIIhRhRQgJAHgLgEQgLgEgCgOQACgOAMgEQALgEAJAIQAFAFAAAIQABAHgFAGIBSBRQAGgFAHABQAIAAAFAFQAJAJgEALQgEAMgPACQgNgCgFgLg");
	this.shape_37.setTransform(-69.3,153.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.7,0).s().p("AAmAVQgFgFABgGIhDgQQgCAGgHAAQgHAAgFgEQgDgIAFgGQAEgFAHABQAFABACAEQADAEgBAFIBCAQQACgEAEgDQAEgBAEAAQAHACABAHQACAIgHAFIgGABQgEAAgDgCg");
	this.shape_38.setTransform(-44.3,181.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AAZAaQgDgFADgFIgxgdQgEAFgFgBQgGgBgDgGQgBgIAGgDQAFgDAFADQAHAEgDAIIAxAdQACgDAEgBQADAAADACQAGADgBAGQAAAGgHADIgCAAQgGAAgDgEg");
	this.shape_39.setTransform(108,-26.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.7,0,9.8,0).s().p("AA8BJQgHgFgCgJQgCgIAFgIIhuhRQgGAGgJABQgJABgHgFQgMgJADgOQADgPAQgEQARAAAHAMQAGAMgHALIBvBSQAJgKANADQAOADAEAPQAAASgNAGQgGADgFAAQgHAAgGgFg");
	this.shape_40.setTransform(182.8,9.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.5,0,7.5,0).s().p("Ag9A1QgMgFgBgLQgBgKAJgGQAGgDAGABQAGABAEAFIBWg0QgDgGACgGQACgGAFgEQAJgFAJAFQAKAGgCANQgEALgKABQgKACgGgIIhWA0QAFAJgGAIQgFAIgLAAIgCAAg");
	this.shape_41.setTransform(30.7,-111.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6.1,0).s().p("Ag7AlQgBgJAHgFQAEgEAGABQAFABAEAEIBDgzQgCgFAAgFQABgGAFgDQAHgFAIADQAIAFAAAKQgDAKgIACQgIACgGgGIhDAzQAEAHgEAHQgEAIgKAAQgLgDgCgJg");
	this.shape_42.setTransform(-178.6,15.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.8,0,6.9,0).s().p("AhBAQQgFgIAFgIQAHgGAIACQAIADACAFIBRgKQgBgIAHgEQAHgEAJAEQAHAHgDAJQgCAGgJABQgFABgEgDQgFgDgBgDIhRAKQABAGgEAEQgDAEgFAAIgCAAQgHAAgFgFg");
	this.shape_43.setTransform(132.9,63.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.3,0,11.3,0).s().p("ABRA0QgJgDgEgIQgEgHACgJIiFgsQgEAIgIADQgIAEgJgDQgOgEgBgPQgCgPAOgKQAQgFALAKQAJAJgDANICFAsQAGgMAOgBQAOgCAJAOQAGARgLALQgHAHgJAAQgEAAgEgCg");
	this.shape_44.setTransform(104.1,169.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.9,0,1.9,0).s().p("AgEBUQgJgEgBgLQAAgGAEgFQAFgFAFgBIgChnQgGAAgFgFQgEgFgBgGQAAgLAJgFQAJgFAKAHQAHAKgEAKQgDAJgKABIADBnQAKABAEAIQAEAKgHAKQgGAFgGAAQgCAAgEgCg");
	this.shape_45.setTransform(-27.4,-7.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.7,0).s().p("AAkAnQgJgHAFgKIhAgpQgDAEgFAAQgFABgEgDQgHgEABgIQABgJAJgDQAKAAAEAHQAEAGgEAHIBAApQAFgGAIABQAHACADAIQABAKgHAEQgEADgDAAQgEAAgDgDg");
	this.shape_46.setTransform(171.9,122.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.6,0).s().p("AAHAmQgDgHAHgFIgWgyQgIADgEgIQgCgFAEgFQADgFAHACQAGADAAAGQAAAGgEACIAWAzQAFgCAEADQAEAEgBAHQgEAGgGAAQgFAAgDgGg");
	this.shape_47.setTransform(129.3,79.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.1,0,11.1,0).s().p("AhmAbQgLgMAFgOQAEgLAOgBQAJgBAHAFQAGAFACAHICFgNQgBgIAGgGQAGgHAIgBQAOgBAIALQAHANgJAMQgLALgNgFQgMgEgDgKIiEAMQAAANgLAGQgGADgGAAQgHAAgHgEg");
	this.shape_48.setTransform(97.8,166.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.7,0,13.7,0).s().p("ABfBMQgLgFgEgKQgEgKADgLIighJQgGAKgLADQgLAEgKgFQgRgIAAgSQgBgTAUgLQAVgEALAOQAMAMgGARIChBJQAJgPARAAQASAAAKATQAEAVgOAMQgJAHgJAAQgHAAgGgDg");
	this.shape_49.setTransform(21.4,1.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.9,0,8,0).s().p("AAvCPQgTgBgIgSQgFgLAFgLQAEgLAJgFIhHipQgLAEgLgFQgLgEgFgLQgHgSANgOQAMgPAWAFQATALAAATQAAASgPAIIBHCoQARgFANAMQAOANgFAVQgKATgTAAIgCAAg");
	this.shape_50.setTransform(-21.3,2.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.7,0).s().p("AglBrQgLgJAEgOQACgJAIgFQAHgFAJACIAhiGQgIgDgEgIQgDgIABgJQADgOAOgCQAPgDALANQAGAPgJAMQgIAKgOgCIghCGQANAFABANQABAOgKAKQgHADgGAAQgIAAgHgGg");
	this.shape_51.setTransform(-6.7,180.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.1,0,8.1,0).s().p("AAxAsQgHgIAFgJIhegyQgGAJgKgBQgLgBgFgLQgCgOAJgGQAJgHAKAGQAGADACAGQACAHgCAGIBdAyQAEgGAHgCQAGgBAGADQAKAFAAALQgBAMgMAFIgEABQgKAAgFgIg");
	this.shape_52.setTransform(25,-77.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.9,0,7.9,0).s().p("AA7AgQgGgCgEgFQgDgFABgGIhdgXQgDAFgFADQgFABgGAAQgKgCgCgKQgCgKAJgHQALgFAIAGQAHAGgBAKIBdAXQADgJAJgCQAKAAAHAIQAFALgHAIQgFAFgGAAIgFAAg");
	this.shape_53.setTransform(-71.7,183.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AARBnQgNgDgEgMQAAgIACgHQAEgIAIgCIgfh7QgIABgGgEQgHgFgCgIQgEgMAKgJQALgJAOAGQAKAKgBAMQgBAMgMAFIAfB7QAMgCAIAJQAIAKgGAOQgIALgLAAIgEgBg");
	this.shape_54.setTransform(-87.2,-107.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AgaCCQgLgRAIgPQAIgOAQgBIAHimQgOgCgGgPQgGgQANgPQAPgMAPAJQAPAIgBASQAAALgIAHQgHAHgLABIgHCmQAIABAHAIQAHAIAAALQgBASgQAGQgFADgFAAQgKAAgLgJg");
	this.shape_55.setTransform(-131.5,15.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.9,0,13,0).s().p("ABjAoQgKgBgGgIQgGgIAAgKIiagUQgCAHgIAGQgJAGgKgCQgQgCgFgNQgFgRAOgNQAQgJAOAJQANAIgBAPICaAUQADgMAPgFQAPgEANANQAKAPgKAOQgIAMgNAAIgEgBg");
	this.shape_56.setTransform(-15.8,-196.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.4,0,12.5,0).s().p("ABSASQgHgHgBgJIiUgBQgBAKgHAGQgHAHgJAAQgQAAgGgOQgHgMALgPQAOgLAOAHQANAFABAPICUAAQACgOANgGQAOgGAOALQALAPgHAMQgHANgPAAQgKAAgHgGg");
	this.shape_57.setTransform(-38.1,-105.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.7,0).s().p("AAvANQgHgDAAgIIhOgCQgBAHgHADQgIADgHgGQgGgHAEgGQAEgIAIABQAFAAAEADQADAEABAFIBOABQABgEADgDQAEgDAFAAQAIAAAEAIQADAGgGAHQgFADgEAAIgGgBg");
	this.shape_58.setTransform(18.6,-223.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.2,0).s().p("ABGAdQgHgBgEgGQgFgGABgHIhtgOQgCAFgGADQgGAEgHgBQgLgBgEgJQgDgMAKgJQALgGAKAGQAJAGgBAKIBtAPQADgJAKgCQALgEAKAJQAGALgHAKQgFAIgKAAIgDAAg");
	this.shape_59.setTransform(89.9,56.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8,0,8.2,0).s().p("AAeBtQgFgJACgKQADgLAIgGIhPiOQgKAEgJgDQgLgDgFgJQgIgPAKgOQAKgPATADQATAIABARQABAQgNAJIBPCOQAPgHANAKQANAKgDATQgHASgSABIgCAAQgPAAgIgNg");
	this.shape_60.setTransform(-131.7,-0.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6.1,0).s().p("AAmAbQgFgFACgHIhGgbQgDAHgIAAQgIAAgEgIQgDgJAGgFQAGgGAIADQAEACACAFQACAEgBAFIBGAbQAFgKALAEQAHADABAIQABAIgJAFIgEABQgGAAgEgFg");
	this.shape_61.setTransform(123.2,-79.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.5,0,6.6,0).s().p("AAlA4QgEgEgBgHQAAgGADgFIhIhBQgFAEgGABQgGAAgFgFQgIgGADgKQADgLAMgCQAMABAEAKQAEAIgGAIIBIBBQAHgHAKADQAJADACAMQAAAMgLAEIgGACQgGAAgFgFg");
	this.shape_62.setTransform(101.3,42.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.7,0,1.7,0).s().p("AAAA0QgFgFACgHQACgGAEgCIgHhAQgHABgDgGQgDgFADgHQAGgGAHACQAEACABAHQACAKgIACIAHBAQAEAAAEADQADACABAEQABAHgGAEQgDACgEAAQgDAAgCgCg");
	this.shape_63.setTransform(4.3,-188.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.3,0,9.3,0).s().p("AhKBGQgPgFgCgOQgCgNALgHQAHgFAIABQAIABAFAHIBqhIQgEgHACgIQACgIAHgFQALgIAMAHQAMAHgBAQQgFAOgNADQgMACgIgKIhqBIQAGALgHALQgHAKgOAAIgBAAg");
	this.shape_64.setTransform(104,-115);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.9,0,1.9,0).s().p("AAKAnQgFAAgCgFQgCgHAGgEIgOgtQgIACgCgHQgCgFAEgEQAEgDAFACQAFADAAAFQAAAFgFACIAPAtQAEgBAEADQADAEgCAFQgDAFgEAAIgBAAg");
	this.shape_65.setTransform(-121.8,75.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#34FFFD","#267AB3"],[0,1],-0.8,0,0.9,0).s().p("AgFAoQgEgFACgFQADgEAEAAIAAgzQgEAAgCgFQgCgFAEgEQAEgEAEACQAFADAAAFQAAAJgIgBIgBAzQAIABAAAHQAAAFgFADIgDAAQgCAAgDgCg");
	this.shape_66.setTransform(-61.6,-91.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.7,0,6.7,0).s().p("AAqAeQgGgGADgIIhOgeQgEAIgIAAQgJAAgFgIQgDgLAHgGQAGgFAJADQAFACACAFQADAFgCAFIBOAeQACgFAFgCQAGgCAFACQAIADABAJQAAAKgJAFIgFABQgGAAgFgFg");
	this.shape_67.setTransform(169.9,148.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AgYA2QgIgBgDgIQgBgJAGgEQAFgEAHADIAjg+QgGgEABgHQABgHAIgDQAJgBAEAGQAEAGgEAHQgCAEgFABQgEACgEgCIgjA9QAIAHgFAJQgDAGgHAAIgBAAg");
	this.shape_68.setTransform(-149.2,169.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.1,0,9.1,0).s().p("ABBARQgKgEgBgLIhsgCQgBALgKAEQgKAEgKgIQgIgLAFgIQAFgKAMAAQAGAAAGAFQAFAFAAAHIBsABQABgGAFgFQAFgEAHAAQAMAAAFAKQAFAJgJAKQgGAFgHAAQgDAAgEgCg");
	this.shape_69.setTransform(138.7,-121.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AAaATQgDgEABgFIgwgSQgCAFgFAAQgGAAgDgFQgCgHAFgEQAEgDAFACQAHADgCAIIAwASQABgDAEgBQADgCADACQAFACAAAFQABAGgGADIgDABQgEAAgDgDg");
	this.shape_70.setTransform(-121.5,35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.2,0,7.2,0).s().p("AAuB3QgRAAgHgOQgEgJADgKQADgJAIgGIhDiLQgKADgJgDQgJgEgFgJQgHgPAKgMQAKgOATAEQARAIAAARQABAPgNAIIBECLQAOgFALAKQAMAKgDASQgIARgQAAIgBAAg");
	this.shape_71.setTransform(146.1,34.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13,0,13.1,0).s().p("Ah+AOQgIgOAMgPQAOgMAPAGQAOAGACAPICcgDQABgPANgGQAPgHAPALQAMAPgHANQgHAPgQAAQgKAAgIgGQgHgHgBgKIicADQgBAKgHAHQgIAHgKABQgQAAgHgOg");
	this.shape_72.setTransform(138,5.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.7,0,2.8,0).s().p("AgNB7QgOgHABgQQAAgJAHgHQAGgHAKgBIADiXQgJgBgGgHQgHgIABgJQAAgQAOgGQANgHAPAMQAKAOgGAOQgHANgOABIgECXQAOACAGAOQAGAOgLAOQgJAGgHAAQgGAAgGgDg");
	this.shape_73.setTransform(154.8,110.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.5,0,7.6,0).s().p("AA1AQQgIgEAAgJIhZgDQgBAIgIADQgJADgIgHQgHgHAFgIQAEgJAKABQAFAAAEAEQAEAEABAGIBZACQABgDAEgEQAFgEAFABQAKAAAEAJQADAHgHAIQgFADgFAAQgDAAgEgBg");
	this.shape_74.setTransform(179.7,-34.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AggAcQgBgFADgEQAHgGAFAFIAjgkQgFgGAGgGQAEgEAFACQAFACABAGQgBAGgFACQgEACgEgDIgkAkQAEAEgCAFQgCAFgGABQgHgBgCgFg");
	this.shape_75.setTransform(51.2,76.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.1,0,1.2,0).s().p("AgJAmQgDgFADgFQACgEAFAAIADgwQgCgBgCgFQgCgEAEgFQAEgDAEADQAFADgBAFQgBAHgHAAIgDAxQAFABgBAIQAAAFgEACIgCAAQgEAAgDgDg");
	this.shape_76.setTransform(-84,210);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.6,0,7.6,0).s().p("AhKAwQgCgMAIgGQAGgFAHABQAHAAAFAFIBVhBQgEgGABgHQABgHAGgEQAJgHAKAFQAKAFABAOQgEAMgLADQgKACgHgIIhVBCQAFAJgFAJQgFAKgNABQgNgEgCgLg");
	this.shape_77.setTransform(160.5,53);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.1,0).s().p("AAaATQgEgDACgFIgvgTQgDAFgFAAQgFAAgDgFQgCgHAEgEQAEgDAFACQAIADgDAIIAvASQACgDADgBQADgBADABQAFACABAGQAAAGgGADIgDAAQgEAAgCgDg");
	this.shape_78.setTransform(28,171.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.7,0).s().p("AAhCNQgSgCgGgSQgDgKAEgLQAFgKAKgFIg2inQgLACgKgFQgKgGgEgLQgFgRANgNQANgNAVAHQARAMgBASQgCARgQAHIA3CoQAQgEAMAMQAMAOgHAUQgKAQgQAAIgFgBg");
	this.shape_79.setTransform(79.8,-88.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.5,0,3.6,0).s().p("AgeA/QgGgHADgIQACgFAFgDQAFgCAFACIAfhQQgFgCgCgFQgCgGACgFQADgIAJgBQAJgBAGAKQADAKgHAGQgGAGgIgDIgeBQQAHADABAJQAAAIgJAGIgGABQgGAAgEgFg");
	this.shape_80.setTransform(102.1,213.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.5,0).s().p("AAaBSQgLAAgEgKQgDgHACgGQADgGAGgEIgohgQgGACgGgDQgHgDgCgGQgEgKAHgIQAHgJANADQALAHAAAKQgBALgJAFIAoBgQAKgDAHAHQAIAHgDAMQgHALgKAAIgBAAg");
	this.shape_81.setTransform(-0.9,-177.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.1,0,7.1,0).s().p("AhBAMQgHgIAEgGQADgIAJgBQAGAAAEAEQAEADABAEIBUgCQAAgFAEgEQAEgEAFAAQAJAAAEAIQAEAHgGAHQgIAHgIgEQgHgDgBgHIhUACQgBAJgHADQgDACgDAAQgFAAgFgEg");
	this.shape_82.setTransform(-17.3,-69.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.9,0,3,0).s().p("AAMAiQgCgCABgEQABgDACgDIgdgrQgHAEgFgGQgDgFADgFQACgFAHAAQAGACABAGQABAFgEADIAdAsQAFgDAFADQAEADAAAGQgCAGgGABIgBABQgFAAgDgFg");
	this.shape_83.setTransform(83.6,190.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.2,0,11.2,0).s().p("ABKBJQgJgFgDgKQgCgJAEgJIiBhMQgGAIgJACQgKACgIgFQgOgIABgPQACgRARgHQASgCAJANQAIAMgGANICBBMQAJgMAPACQAPACAHAQQACATgOAJQgHAFgGAAQgHAAgGgEg");
	this.shape_84.setTransform(78,123.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.2,0).s().p("AASA5QgIAAgDgHQgCgFACgEQACgFAEgCIgbhDQgFACgEgCQgEgCgCgFQgDgHAFgFQAFgGAJACQAIAEAAAIQgBAHgGADIAbBDQAHgCAFAFQAFAFgCAJQgEAIgHAAIgBgBg");
	this.shape_85.setTransform(87.8,139.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10,0,10.1,0).s().p("ABPAZQgIAAgFgGQgGgGAAgHIh4gHQgBAGgGAEQgGAFgIAAQgMgBgFgMQgFgKAKgLQAMgIALAGQAKAFABAMIB3AHQACgKALgEQAMgEALAJQAIALgGALQgGALgLAAIgCgBg");
	this.shape_86.setTransform(91.3,148.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AAYAoQgDgDAAgFQgBgEADgDIgvgvQgDADgEAAQgFAAgDgEQgFgEADgHQACgHAIgBQAIABADAGQACAHgEAFIAvAuQAFgEAGACQAGADABAIQgBAIgHADIgDAAQgFAAgDgDg");
	this.shape_87.setTransform(161.8,111.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.2,0,5.2,0).s().p("AAdBkQgNgBgFgNQgDgHADgIQADgHAHgEIgth1QgIACgHgEQgHgDgDgIQgFgMAJgKQAJgKAPAEQANAIAAANQgBANgLAFIAtB2QAMgEAJAJQAJAJgEAOQgIANgMAAIgCAAg");
	this.shape_88.setTransform(182.7,122.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.4,0).s().p("AAnB4QgRgIgBgQQgBgPANgJIhFiNQgPAGgMgKQgMgKADgTQAJgSARAAQAQAAAIAPQAEAJgDAKQgCAJgJAGIBGCNQAJgEAKAEQAJADAFAKQAHAOgKAOQgIAKgNAAIgIgBg");
	this.shape_89.setTransform(117.1,74.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.9,0,11.9,0).s().p("ABRBGQgJgEgEgKQgDgJADgJIiKhGQgFAJgKACQgJADgJgFQgPgHAAgQQABgRARgIQATgDAJAMQAKALgGAPICLBFQAIgNAPABQAQABAIARQADATgNAKQgHAFgIAAQgGAAgGgDg");
	this.shape_90.setTransform(51,164.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.4,0,6.5,0).s().p("AAuAMQgHgDAAgIIhNgBQgBAHgGADQgIADgHgGQgFgHADgGQAEgHAIAAQAFAAADAEQAEADAAAFIBNABQAAgEAEgDQAEgDAFAAQAIAAADAHQAEAGgGAHQgFAEgEAAIgGgCg");
	this.shape_91.setTransform(16.9,-36.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.4,0,6.5,0).s().p("Ag/BaQgDgQALgJQALgIAMAEIA8h7QgLgHAAgOQABgOAPgHQARgDAJALQAJAMgHANQgEAIgIADQgIADgJgDIg8B7QAIAFACAIQADAJgEAIQgHANgOAAQgPAAgIgQg");
	this.shape_92.setTransform(-192.6,15.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.2,0).s().p("AALBSQgKgDgBgKQgBgGABgGQADgFAGgDIgUhhQgHABgFgDQgFgEgCgGQgCgLAIgGQAJgHALAFQAHAIgCAKQgBAKgIADIAVBhQAJgBAGAHQAGAJgFAKQgGAIgJAAIgDAAg");
	this.shape_93.setTransform(23.3,26.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.3,0,13.4,0).s().p("Ah9AwQgMgNAIgTQAMgPAQACQAQACAGAPICegsQgDgQAMgKQANgLASAHQAQAMgDASQgDARgQAEQgKADgKgFQgJgEgEgKIieAsQACAKgFAJQgGAJgKADIgJACQgKAAgJgKg");
	this.shape_94.setTransform(-60,-30.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.7,0).s().p("AALA/QgIgCgCgHQgBgFACgFQACgEAFgCIgThKQgFABgEgDQgEgCgCgFQgCgIAGgFQAHgGAJAEQAFAFAAAIQAAAIgHADIASBJQAIgBAEAGQAFAGgDAJQgFAGgGAAIgDAAg");
	this.shape_95.setTransform(71.6,146.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.2,0).s().p("AgYBIQgIgGADgKQABgFAFgEQAGgDAFABIAWhZQgFgDgDgFQgCgFAAgGQADgJAJgCQAKgCAHAJQAFAKgGAHQgGAIgJgCIgWBaQAJADAAAJQABAJgHAHQgEACgEAAQgGAAgEgEg");
	this.shape_96.setTransform(172.5,-53);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.1,0).s().p("AANA6QgDgFACgFQABgFAFgDIgmhNQgFACgFgCQgFgCgDgFQgEgIAFgHQAGgIALACQAJAFABAJQAAAIgHAFIAmBMQAIgDAGAGQAHAFgCAKQgEAKgKAAIgBAAQgIAAgEgIg");
	this.shape_97.setTransform(99.2,150.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#34FFFD","#267AB3"],[0,1],-0.9,0,1,0).s().p("AAAApQgFgCAAgFQgBgIAGgBIgBgxQgHgBgBgHQAAgFAFgDQAEgCAEADQADAFgBAFQgCAEgEABIABAxQAFAAACAFQADAEgEAFQgDADgDAAIgBgBg");
	this.shape_98.setTransform(145.6,-23.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.2,0,14.2,0).s().p("Ah8BFQgSgMACgTQABgSASgHQALgDAKAEQAKAEAGAKICng8QgDgLAFgKQAFgLALgEQARgGAOANQAOANgHAVQgLASgSgBQgSgBgHgQIinA9QAEARgMAMQgJAIgMAAQgGAAgHgCg");
	this.shape_99.setTransform(97.3,-109.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.5,0).s().p("AAiBIQgLgEgCgKQgCgJAIgGIg3hSQgJAFgIgGQgJgFABgMQAEgMAKgCQALgBAFAJQAEAFgBAGQgBAHgFAEIA3BSQAGgDAGABQAGACAEAFQAGAJgFAJQgFAIgMAAIgBAAg");
	this.shape_100.setTransform(-172.3,130.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.8,0,2.9,0).s().p("AASAkQgGgCgBgFQgBgFAEgDIgcgoQgFADgEgDQgFgDABgGQACgGAFgBQAFgBADAFQAFAGgGAFIAcAoQAHgEAFAGQADAFgDAEQgCAFgGAAIgBAAg");
	this.shape_101.setTransform(100,125.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.4,0,1.5,0).s().p("AgIAzQgGgDABgHQABgJAKAAIADg/QgHgCABgJQAAgHAFgCQAGgDAGAGQAEAGgDAGQgDAFgHABIgDA+QAEABACAGQACAGgFAGQgDACgCAAQgDAAgDgCg");
	this.shape_102.setTransform(1.2,160.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.3,0,13.3,0).s().p("AiAAZQgJgOALgPQAOgNAPAFQAPAFADANICfgPQAAgQANgIQAOgIAQAKQAOAPgGAQQgGANgQACQgKABgJgGQgIgGgCgIIifAPQABAKgHAIQgHAIgKABIgDAAQgPAAgIgNg");
	this.shape_103.setTransform(-94.2,-18.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.3,0,2.4,0).s().p("AgOBSQgJgGABgKQABgHAFgEQAEgEAHAAIAIhlQgFgBgEgGQgEgFABgGQABgLAIgEQAKgEAJAJQAHAKgFAJQgFAJgKAAIgIBlQAIACADAJQADAKgIAJQgEAEgFAAQgEAAgFgDg");
	this.shape_104.setTransform(21.7,90.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.1,0).s().p("AgdAbQgCgFAEgEQAFgFAGAEIAggjQgGgFAGgGQADgEAFACQAGABABAGQgBAGgFACQgEACgEgDIggAkQADADgBAFQgCAFgGABQgGgBgCgFg");
	this.shape_105.setTransform(54.6,47.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.5,0).s().p("AggCIQgOgKACgRQACgLAJgHQAIgHALAAIAXipQgJgCgFgJQgHgJACgLQADgSAPgFQARgGAPAPQAKASgKAPQgJAOgQgBIgYCpQAPAEAEAQQAFARgPAOQgHAGgIAAQgJAAgIgGg");
	this.shape_106.setTransform(-84.3,178.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.2,0).s().p("AgeB7QgNgKADgPQABgKAIgGQAIgGAKAAIAWiYQgJgCgEgJQgFgIABgKQADgQANgEQAQgFANAOQAJAQgJANQgIANgPgBIgXCYQANAEAEAOQAEAPgMANQgHAFgIAAQgIAAgHgFg");
	this.shape_107.setTransform(143.6,-115.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.7,0,11.8,0).s().p("ABDBNQgIgOAHgOIiGhdQgKAMgQgDQgQgEgGgSQgBgUAQgJQAPgIAOAKQAIAGACAKQADAKgGAJICGBeQAHgIALgCQAKgBAJAGQAOAKgDARQgDARgTAGIgCAAQgSAAgIgNg");
	this.shape_108.setTransform(-4.6,-31.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("AA+BBQgIgLAGgNIh6hNQgIALgOgCQgPgCgGgQQgCgSAOgJQANgIAMAJQAIAFADAJQACAJgEAIIB6BNQAGgHAJgCQAJgCAIAFQANAJgCAPQgCAPgRAGIgDABQgPAAgHgMg");
	this.shape_109.setTransform(-43.7,171.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5,0).s().p("AgvAOQgEgFADgHQAFgDAGABQAGAAACAFIA6gLQgBgGAFgDQAFgEAHADQAGAFgCAGQgBAFgHABQgJACgCgHIg7ALQABAEgDADQgCADgEABIgCAAQgFAAgDgEg");
	this.shape_110.setTransform(-2.5,4.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.3,0,1.4,0).s().p("AAAApQgDgFABgFQACgFACgBIgFgxQgFAAgDgEQgDgFADgFQAFgFAFACQADACABAFQABAIgGABIAGAyQAIAAABAHQABAFgFADQgCACgDAAIgEgBg");
	this.shape_111.setTransform(-144.4,-108.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.4,0,6.4,0).s().p("AgzA8QgKgDgCgMQACgMAKgDQAJgDAHAGIBGhCQgGgIADgJQAEgJAMgBQAMACADAKQADAKgHAHQgFAEgGAAQgGAAgFgEIhGBCQAEAFAAAGQgBAHgFAEQgFAEgFAAIgGgBg");
	this.shape_112.setTransform(45.7,146.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.2,0).s().p("AhUAqQgJgJAEgNQAHgMAMAAQAMABAFAKIBrgpQgDgLAIgIQAIgIAOADQAMAIgBAMQgBAMgLAFQgHACgHgCQgHgDgDgGIhsAoQACAHgDAHQgEAHgHADIgHACQgHAAgGgGg");
	this.shape_113.setTransform(127.8,-55.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.1,0).s().p("AASAtQgHgDAAgGQgBgGAFgEIgegzQgFADgFgDQgFgEABgHQADgHAGgBQAHAAADAFQAEAIgHAFIAdAzQAJgDAEAHQADAGgDAFQgDAFgHAAIgBAAg");
	this.shape_114.setTransform(157.8,147.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.2,0).s().p("AgoAZQgBgGAFgEQADgCAEAAQAEABACADIAugiQgEgIAHgFQAFgEAFADQAGADAAAIQgCAGgGACQgGABgEgEIguAhQADAFgDAFQgDAFgHAAQgHgCgBgGg");
	this.shape_115.setTransform(121.3,36.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.9,0,2,0).s().p("AABBEQgGgDgBgIQgBgFADgFQADgEAEgBIgHhSQgGAAgEgEQgEgDAAgGQgBgIAHgFQAIgFAHAGQAHAHgDAIQgDAIgGACIAHBSQAJAAAEAHQAEAHgFAIQgGAFgFAAIgFgBg");
	this.shape_116.setTransform(188,47);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AAMBjQgMgJACgNQACgMALgEIghh3QgMACgHgJQgJgKAGgOQAJgNANADQANACADANQACAHgDAIQgEAHgHADIAhB3QAIgCAGAFQAHAEACAHQAEANgKAJQgGAFgHAAQgFAAgGgCg");
	this.shape_117.setTransform(-171.9,139.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.2,0).s().p("AAVAqQgHgHAHgIIgrgzQgJAGgHgIQgEgFACgHQADgHAJAAQAIACACAGQACAHgFAFIAsAzQAFgEAHADQAGADABAIQgCAIgHACIgEAAQgFAAgDgEg");
	this.shape_118.setTransform(109.9,82.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.9,0,6,0).s().p("AgzAuQgIgEABgLQADgKAIgBQAIgCAFAGIBDgxQgEgGAEgIQAEgHAKAAQAKADACAJQACAJgHAFQgKAHgJgJIhDAwQADAFgBAFQgBAFgFAEQgEACgEAAQgDAAgEgBg");
	this.shape_119.setTransform(98.6,-180.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.2,0,1.2,0).s().p("AgBAsQgFgFACgGQACgFADgBIgCg1QgGAAgCgFQgDgFADgFQAFgFAEACQAFACABAGQABAIgHACIADA1QAIAAABAJQAAAFgFADIgFACQgCAAgBgCg");
	this.shape_120.setTransform(19.6,83.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.3,0,2.4,0).s().p("AgVAhQgDgEADgEQADgHAHADIAWgqQgHgEAEgGQACgFAFAAQAGAAACAGQABAGgEADQgEADgEgCIgVAqQAEADgBAEQAAAFgFADIgCAAQgFAAgDgEg");
	this.shape_121.setTransform(186.1,64.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.2,0,10.2,0).s().p("AAyBVQgGgOALgMIhwhyQgMAKgOgFQgPgGgDgTQADgUARgFQAPgGAMAMQAHAIAAAKQABAKgHAIIBvBxQAIgGAKAAQALABAHAHQALAMgFAQQgGAQgUACQgSgDgGgPg");
	this.shape_122.setTransform(67,-184.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.8,0).s().p("AgtBSQgEgOAIgIQAJgIALADIAohuQgKgFAAgLQgBgMAMgIQAOgEAJAKQAIAJgFALQgCAHgHADQgHAEgHgCIgpBtQAHADADAHQACAHgCAHQgFAMgMABIgDAAQgLAAgGgLg");
	this.shape_123.setTransform(71.2,-170.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.5,0).s().p("AAVAnQgCgGAFgGIgwg1QgFAFgHgDQgHgDgBgJQACgJAIgCQAHgCAFAGQADADAAAFQAAAEgDAEIAwA1QAEgDAEABQAFAAADADQAFAGgDAHQgDAIgJAAQgIgCgDgHg");
	this.shape_124.setTransform(101.5,-7.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.9,0,6,0).s().p("AAkAdQgFgGADgHIhFgdQgDAHgIAAQgHAAgFgIQgCgKAGgFQAGgFAHADQAFACACAFQACAEgCAFIBFAdQAGgKAKAFQAHADABAIQAAAIgIAEIgFABQgFAAgFgEg");
	this.shape_125.setTransform(151.9,88.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.3,0).s().p("AAsAeQgKgEACgMIhIgZQgFALgLgEQgIgCgBgJQgBgIAIgFQAJgDAGAFQAGAGgCAHIBIAZQADgHAIgBQAIAAAFAIQADAJgGAGQgEAEgFAAIgFgBg");
	this.shape_126.setTransform(110.9,71);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AATAfQgGgHAFgFIgkgkQgGAFgGgFQgEgEACgFQABgGAHAAQAGAAACAGQACAEgDAEIAkAkQAEgEAFACQAFACABAGQgBAHgFACIgDAAQgEAAgCgCg");
	this.shape_127.setTransform(25.6,36.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.1,0,8.2,0).s().p("AAfBqQgFgJACgKQACgKAJgGIhRiKQgJAEgKgDQgJgDgGgJQgIgOAJgOQAJgOAUACQASAHACARQABAPgMAJIBQCKQAOgHANAJQANAKgCATQgHASgSACIgDAAQgOAAgIgNg");
	this.shape_128.setTransform(-69.1,48.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.4,0,9.5,0).s().p("AArBsQgGgJABgLQABgKAIgHIhiiJQgJAGgLgCQgKgDgHgIQgKgOAIgQQAJgQAVAAQATAGAEARQADAQgMALIBiCIQAOgIAOAIQAPAJAAAUQgGAUgSADIgFABQgOAAgJgMg");
	this.shape_129.setTransform(186.9,-9.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.7,0).s().p("AAUAsQgCgHAGgGIgwg8QgHAEgHgEQgHgDAAgKQACgJAIgCQAJgCAFAGQAHAKgJAIIAxA9QAEgDAFABQAFABADAEQAFAGgDAIQgEAHgJABQgKgDgCgIg");
	this.shape_130.setTransform(-71,103.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.3,0,9.4,0).s().p("ABGAiQgHgCgEgGQgEgGABgHIhvgWQgCAHgHACQgGADgHgBQgMgCgDgKQgDgMALgJQAMgGAKAHQAJAHgCALIBvAWQAEgKALgBQALgDAJAJQAGAMgIAKQgFAIgIAAIgGgBg");
	this.shape_131.setTransform(28.4,84.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.3,0).s().p("AgtBTQgMgCgEgNQgBgOAKgGQAJgGAKAFIBAhfQgIgHABgLQACgMAOgEQAOgBAGALQAFAKgGAKQgEAHgHABQgIACgGgEIhABfQAGAFABAHQABAHgEAHQgGAIgJAAIgEAAg");
	this.shape_132.setTransform(3.4,200.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.2,0,2.3,0).s().p("AAKAwQgGgBgCgGQgCgJAIgDIgRg4QgJACgDgJQgCgGAFgEQAFgFAHADQAGAEgBAGQgBAGgFACIARA4QAFgBAEAEQAEAFgCAGQgDAGgGAAIgCAAg");
	this.shape_133.setTransform(-7.1,122.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AAJAgQgEgHAGgEIgWgpQgGAEgFgHQgCgEADgEQADgFAGABQAFACABAGQAAAEgEADIAXAoQAEgBAEACQADADAAAGQgCAFgGABIgBAAQgEAAgCgEg");
	this.shape_134.setTransform(132.2,-113.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("AA9ApQgHgCgDgHQgDgGACgGIhkgkQgDAHgHACQgGADgGgDQgLgDgBgLQgBgMALgHQAMgEAIAIQAIAHgDAKIBkAjQAFgJAKgBQALAAAHAKQAEANgJAIQgFAFgHAAIgGgBg");
	this.shape_135.setTransform(-39.2,191);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.2,0,2.2,0).s().p("AAJArQgGgDAAgGQAAgFAGgDIgSgzQgFABgEgDQgEgEACgHQAEgGAGABQAFABACAFQADAHgHAFIARAzQADgBAEABQADACABADQACAGgEAEQgDADgDAAIgEgBg");
	this.shape_136.setTransform(50,15.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.3,0,11.3,0).s().p("AA8BTQgHgOAJgNIh+hsQgLAMgQgFQgQgFgEgTQABgVAQgHQAQgHANAMQAIAGACALQABALgGAIIB+BsQAHgIALAAQAKgBAJAHQANAMgEAQQgFASgUAEQgUgBgHgQg");
	this.shape_137.setTransform(-7,129.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.9,0).s().p("AgjA7QgJgCgDgKQAAgKAIgEQAHgEAHAEIAxhCQgGgGACgIQACgIAKgDQAKAAAEAIQAEAIgFAHQgDAEgFABQgGABgEgCIgyBCQAEADABAGQAAAFgDAEQgFAGgGAAIgDAAg");
	this.shape_138.setTransform(173.6,57.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.9,0,10.9,0).s().p("AhXBTQgSgGgCgQQgDgPANgJQAIgGAKABQAJACAHAHIB8hWQgFgIACgKQACgJAIgGQANgJAOAIQAOAIAAATQgGARgPADQgPACgJgLIh8BWQAHANgIANQgIAMgQAAIgCAAg");
	this.shape_139.setTransform(-42.9,-38);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6.1,0).s().p("Ag5AQQgFgGAFgJQAGgEAHACQAHABACAFIBHgLQgBgHAGgEQAGgFAIAEQAHAGgDAIQgCAFgHACQgFABgEgDQgEgBgBgEIhHALQABAFgDAEQgDAEgFAAIgCABQgGAAgEgFg");
	this.shape_140.setTransform(-27.6,214.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.7,0,8.8,0).s().p("Ag5CIQgTgBgKgVQgDgVAPgLQAOgLAQAHIBVieQgPgJABgSQACgSATgJQAWgDAMAPQAKAQgJAQQgFAKgLAEQgLADgKgEIhVCeQAJAGADALQADAMgFAKQgJAQgSAAIgBAAg");
	this.shape_141.setTransform(82.1,-125.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AAZBDQgKgFgBgJQgBgIAIgFIgrhNQgIADgHgFQgHgFABgLQAFgKAJgBQAKAAAEAIQADAFgBAGQgCAFgEADIAqBOQAFgDAGACQAFACADAFQAEAIgFAIQgEAGgIAAIgEAAg");
	this.shape_142.setTransform(-61,-71.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AAUAbQgDgCAAgDQgBgDACgDIgkgeQgCACgDAAQgEAAgCgCQgEgDABgFQACgFAGgBQAGAAACAFQACAEgDAEIAkAeQADgDAFABQAFABABAGQAAAGgFACIgDABQgDAAgCgCg");
	this.shape_143.setTransform(-190.4,37.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.3,0,2.3,0).s().p("AgEBiQgLgFAAgNQgBgIAFgFQAFgGAGgBIgDh3QgIAAgFgFQgFgGgBgIQAAgMALgGQALgGAKAIQAJALgEAMQgFALgKABIAEB3QALABAFAKQAGALgIALQgIAHgHAAQgDAAgEgCg");
	this.shape_144.setTransform(-193.8,65.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.3,0).s().p("AAwAPQgKAAgBgMIhJgDQgBADgEADQgEADgEgBQgIAAgDgHQgDgGAGgHQAHgFAHAEQAHADAAAIIBJADQABgFAHgCQAHgDAHAGQAFAFgEAHQgDAHgHAAIgCgBg");
	this.shape_145.setTransform(-15.3,124.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.4,0,8.5,0).s().p("AA0A+QgGgEgBgIQgCgHAEgHIhghEQgFAFgHABQgIABgGgEQgKgHACgMQACgNAOgEQAPgBAGALQAFAKgFAKIBfBEQAIgJALADQAMACAEAOQABAPgMAGQgEACgFAAQgGAAgGgEg");
	this.shape_146.setTransform(39.8,153.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.3,0,7.3,0).s().p("Ag/AlQgJgGAAgKQABgKAJgDQAFgCAGACQAGACACAFIBVggQgBgGACgFQADgGAFgCQAJgDAHAGQAIAHgEALQgFAJgKAAQgJgBgEgIIhVAhQADAIgGAHQgFAFgGAAIgHgBg");
	this.shape_147.setTransform(49,-26.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AgmAGQgDgEADgEQAFgDAFABQAEACABADIAvgCQAAgFAFgCQAEgCAFADQAEAEgCADQgCAFgFAAQgHAAgCgFIgvACQAAAHgIABIgBAAQgEAAgCgEg");
	this.shape_148.setTransform(95.3,182.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.9,0,2.9,0).s().p("AgVAkQgFgBgCgGQAAgGAFgDQAEgCAEACIAdgoQgEgDABgFQABgFAGgCQAHAAACAFQADAEgDAFQgFAGgHgEIgcAoQAFAFgEAHQgDADgEAAIgCAAg");
	this.shape_149.setTransform(-57.9,-190.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.7,0,10.8,0).s().p("AhiAbQgLgMAEgNQAFgLANgBQAIgBAHAFQAHAFABAGICAgNQAAgIAFgGQAGgHAIgBQANgBAHALQAIAMgIAMQgLAKgNgEQgMgDgDgLIh/ANQAAAMgLAHQgFADgGAAQgGAAgHgEg");
	this.shape_150.setTransform(-118.8,-35.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AghAWQgEgDABgGQACgGAGAAQAEAAADAEIArgXQgCgEADgEQADgEAGABQAGACAAAGQAAAFgFACQgCACgEgBQgDgBgBgCIgrAWQABADgBADQgBADgDACIgEABQgDAAgCgCg");
	this.shape_151.setTransform(-154.6,19.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5.1,0).s().p("AAmASQgJgCABgJIg7gLQgDAHgJgCQgGgBgCgEQgBgHAFgFQAHgDAFAEQAFADgBAGIA7ALQACgFAGAAQAGgBAFADQADAHgEAFQgDAEgEAAIgDAAg");
	this.shape_152.setTransform(162.3,-34.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AAPAsQgCgEAAgEQABgEADgDIgjg4QgEADgEgBQgEgBgDgEQgEgGAEgGQAEgHAIABQAIADABAHQABAGgFAEIAjA4QAGgDAGAEQAGAEgBAIQgDAIgHAAIgCAAQgGAAgDgFg");
	this.shape_153.setTransform(-78.4,167.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.4,0,1.4,0).s().p("AgCA0QgGgGADgHQACgGAEgBIgDhAQgGAAgDgFQgEgGAFgHQAGgFAEACQAGADABAHQABAEgDADQgDAEgCAAIADBAQAEAAADADQADADABAEQAAAHgFADQgDACgDAAQgDAAgCgCg");
	this.shape_154.setTransform(175.3,106.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.1,0,1.2,0).s().p("AgGArQgFgDABgGQAAgDACgCQADgDADAAIADgzQgHgCABgIQABgFAEgCQAEgCAFAEQADAGgCAEQgDAFgFAAIgCA0QADABACAEQACAGgFAEQgCACgBAAIgFgBg");
	this.shape_155.setTransform(46.2,-94.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AgeB5QgKgQAIgOQAIgNAPAAIAOicQgNgDgEgOQgFgPAMgOQAPgKAOAJQAOAJgCAQQAAAKgIAHQgIAGgKAAIgOCcQAIACAGAIQAGAIgBAKQgCAQgNAGQgFABgEAAQgLAAgKgJg");
	this.shape_156.setTransform(64.4,15.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.8,0,13.9,0).s().p("AiFAXQgJgPALgQQAOgNAQAGQAQAFADAOIClgMQAAgQAOgIQAPgIARAKQAOAQgHAPQgGAQgRABQgLABgIgHQgIgGgCgJIimAMQAAALgHAIQgHAIgLAAIgDAAQgPAAgIgNg");
	this.shape_157.setTransform(18.4,-93.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.9,0,8,0).s().p("AhHArQgJgHADgMQAFgLALgBQAKAAAFAJIBcgsQgEgJAHgIQAHgIAMADQALAGAAALQAAAKgKAFQgGADgGgCQgGgCgEgGIhcAsQADAGgDAGQgCAGgGADQgFACgDAAQgGAAgEgEg");
	this.shape_158.setTransform(99,10.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.1,0,11.1,0).s().p("AA+BiQgIgIAAgKQgBgLAGgJIh6hyQgIAGgLAAQgLAAgIgHQgMgMAFgRQAFgRAVgEQAUACAGAQQAHAPgKANIB6BzQANgLAPAGQAQAGADATQgCAVgRAHQgFACgFAAQgKAAgJgIg");
	this.shape_159.setTransform(151.1,-6.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.6,0,8.6,0).s().p("AhSAMQgGgJAHgJQAKgIAKAEQAJADACAIIBmgEQAAgKAJgFQAJgFAKAHQAJAJgEAJQgFAKgKAAQgHABgFgEQgFgEgBgFIhmAEQgBAHgEAFQgFAEgGABIgCAAQgJAAgFgJg");
	this.shape_160.setTransform(167.1,116.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AATAXQgCgEACgEIgmgcQgDAEgFgBQgEgCgCgFQAAgGAFgDQAEgCAEADQAGAEgEAHIAmAcQAFgFAGAEQAEACgBAGQgBAFgGABQgGAAgCgEg");
	this.shape_161.setTransform(-131.9,110.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.5,0).s().p("AhCAvQgJgGACgNQAEgLALgBQAJgBAGAIIBWgwQgFgJAGgIQAGgIAMACQALAEABALQABALgJAFQgGADgGgBQgGgCgEgFIhWAwQADAGgCAGQgCAGgFADQgEADgFAAQgEAAgFgDg");
	this.shape_162.setTransform(130.9,70.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AAeASQgHgDABgHIgwgNQgDAFgIAAQgFgCAAgFQgBgFAFgEQAGgCAEADQADADgBAFIAwANQACgEAFgBQAFgBAEAFQACAGgDAEQgDADgEAAIgCAAg");
	this.shape_163.setTransform(-76.7,213.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.8,0,1.8,0).s().p("AgBBJQgIgDgBgKQAAgGADgEQAEgEAEgBIgEhYQgFAAgFgEQgEgEAAgGQgBgKAJgEQAIgFAHAHQAHAHgDAJQgDAJgHABIADBYQAJAAAEAIQAEAIgGAIQgFAFgGAAIgEgBg");
	this.shape_164.setTransform(15.7,-75);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AAfAQQgHgBABgIIgxgLQgDAFgIgBQgFAAgBgFQgBgGAFgEQAGgCAEADQAEADgBAFIAxALQACgEAFgBQAFAAAEADQADAGgEAFQgDADgEAAIgCgBg");
	this.shape_165.setTransform(-103.9,59.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.1,0,14.2,0).s().p("ABcA7QgMgLAEgRIiog4QgHAQgRACQgSABgMgRQgHgVAOgOQAMgNASAGQALAEAFAKQAFAKgCALICnA4QAFgLALgEQAKgFALAEQARAGACASQADATgTAMQgHADgGAAQgLAAgJgJg");
	this.shape_166.setTransform(174.6,75.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AgOBdQgLgGABgMQABgHAFgFQAGgFAHAAIAHhzQgFgBgFgGQgFgFABgIQABgMALgEQAKgFAKAKQAIALgGALQgFAJgLABIgHByQAJACAEALQAEALgJAKQgHAEgEAAQgFAAgFgDg");
	this.shape_167.setTransform(141.1,150);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AgBCCQgQgHgBgQQAAgKAGgIQAGgIAIgBIgJieQgKAAgHgHQgHgHgBgKQgBgRAOgIQAPgIAOAKQANAPgGAPQgFAOgOADIAJCdQAQABAHANQAHAOgKAQQgJAJgLAAQgFAAgDgCg");
	this.shape_168.setTransform(-137.8,-35.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.3,0).s().p("AgnA2QgFgHAEgIQADgEAFgBQAFgBAFACIAqhGQgEgEgBgEQgBgGADgEQAEgIAJABQAJABAEAJQAAALgGAEQgHAFgHgEIgqBGQAGAFgBAIQgBAJgJADIgDAAQgIAAgEgHg");
	this.shape_169.setTransform(-4.3,-42.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.3,0,7.3,0).s().p("AAlA6QgEgKAGgJIhQhLQgIAHgKgEQgLgDgCgNQABgOAMgFQAKgEAJAIQAFAFAAAIQABAHgEAFIBQBMQAFgFAHAAQAIAAAFAFQAIAIgDALQgEAMgOACQgNgCgEgKg");
	this.shape_170.setTransform(157.4,-19.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.5,0,3.6,0).s().p("AASAjQgGgFAGgIIglgqQgHAFgGgHQgEgEADgGQACgFAHgBQAHACACAFQACAGgEAEIAkAqQAFgDAFACQAGADAAAHQgBAHgGACIgCAAQgFAAgDgEg");
	this.shape_171.setTransform(114.9,-55.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.5,0,6.5,0).s().p("AAaB9QgQgKABgQQABgQAOgHIg4iVQgPAEgLgLQgMgMAFgSQALgRARABQARACAGAPQAEAKgEAKQgEAJgKAFIA5CVQAKgCAJAEQAJAFAEAKQAGAPgMAMQgIAJgLAAQgGAAgGgCg");
	this.shape_172.setTransform(102.8,-17.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.3,0,2.3,0).s().p("AgHBtQgNgGAAgOQAAgJAGgGQAGgGAIgBIgBiFQgJgBgGgGQgGgGAAgJQAAgOANgGQAKgGAOAKQAJAMgFANQgFAMgNABIABCFQANABAGALQAFANgJAMQgJAHgIAAQgDAAgEgCg");
	this.shape_173.setTransform(128.9,-47.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("Ag+BcQgDgQALgKQAKgIANAEIA7h9QgMgHABgNQAAgPAOgHQARgEAKAMQAJALgGANQgEAJgJADQgIADgIgDIg7B9QAHAFADAIQADAJgEAIQgHANgOAAQgPAAgIgPg");
	this.shape_174.setTransform(-180.5,86.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.5,0,10.6,0).s().p("ABJA5QgIgEgDgIQgEgIADgIIh7g2QgEAIgJADQgIACgIgDQgNgGAAgOQgBgOAPgIQAQgEAJAKQAJAKgFAMIB8A2QAGgLAOAAQANgBAIAPQAEAQgLAJQgHAGgHAAQgFAAgFgCg");
	this.shape_175.setTransform(28.9,-46.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AATBKQgEgGACgHQACgHAGgEIgzhhQgHACgGgCQgHgCgEgHQgFgKAHgJQAHgKANACQAMAGABALQABALgJAGIAzBiQAKgFAIAHQAJAHgCANQgFANgNAAIgBAAQgLAAgEgKg");
	this.shape_176.setTransform(158.3,78.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AAhAMQgIgBAAgIIgygDQgBAGgIgBQgGgBgCgEQgCgEAFgFQAFgDAFADQAEACAAAFIAzAEQABgDAEgCQAGgCAEAFQAEADgDAFQgDAEgEAAIgCAAg");
	this.shape_177.setTransform(-128,163.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.3,0).s().p("AgmAVQgFgEACgHQADgFAGAAQAFAAADAEIAxgUQgCgFAEgEQAEgEAGACQAGADAAAGQgBAGgFACQgIADgEgHIgxAUQADAIgIADIgEABQgDAAgCgCg");
	this.shape_178.setTransform(138.5,-132.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.7,0,9.8,0).s().p("AhfBEQgEgPAMgKQAHgGAJABQAJAAAHAHIBshdQgFgHABgJQABgJAHgGQAMgKANAGQAPAGAAASQgDARgOAEQgOAEgKgKIhsBcQAIALgGANQgHANgRABQgRgDgEgPg");
	this.shape_179.setTransform(94.5,-5.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.3,0,11.3,0).s().p("ABRA0QgIgDgFgIQgEgIACgIIiFgsQgDAIgJAEQgIADgJgCQgOgFgBgOQgCgQAOgJQAQgGALAKQAKAJgDAOICFArQAFgMAOgBQAOgCAKAOQAFARgLAKQgHAHgJAAIgIgBg");
	this.shape_180.setTransform(101.4,3.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.7,0,8.8,0).s().p("AA4AkQgIgHADgKIhngiQgEAKgLABQgLABgHgLQgEgNAIgIQAIgIALAEQAGACAEAGQADAGgBAHIBmAiQADgHAGgDQAHgCAGACQALADACAMQABALgLAIIgIABQgHAAgGgFg");
	this.shape_181.setTransform(165.9,154.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.6,0,12.6,0).s().p("ABYAeQgMgHgBgPIiWgKQgDAMgNAFQgPAGgOgMQgKgOAJgOQAIgOAPABQAKABAHAHQAGAIAAAJICXALQABgIAIgGQAIgGAJABQAQABAGAOQAGAOgNAOQgIAFgJAAQgGAAgGgDg");
	this.shape_182.setTransform(39.1,-49.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AAWAaQgCgFACgFIgtgeQgDAFgFgBQgGgBgCgHQgBgHAGgDQAFgCAFADQADACAAADQABAEgCADIAtAeQAGgHAHAFQAEADAAAGQgBAGgHACIgBAAQgGAAgDgEg");
	this.shape_183.setTransform(-134.5,-96.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.8,0,6.9,0).s().p("AhAASQgFgHAEgKQAHgFAIACQAIACACAGIBRgOQgBgIAGgEQAHgFAJAEQAIAHgDAJQgCAGgIACQgGABgEgDQgFgBgBgFIhQANQAAAGgDAEQgDAEgFABIgDABQgHAAgEgGg");
	this.shape_184.setTransform(154.5,-77.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.9,0,5,0).s().p("AAeBWQgMAAgFgKQgDgHADgHQACgHAGgDIgthlQgHACgGgDQgHgDgDgGQgFgLAIgJQAIgJANADQAMAHAAALQAAALgKAFIAtBlQALgDAIAHQAIAHgCANQgHAMgLAAIgBAAg");
	this.shape_185.setTransform(85.6,103.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.9,0,6,0).s().p("Ag1APQgHgGADgHQACgFAIgBQAEgBAEADQAEACABADIBFgHQAAgFADgDQADgDAEgBQAIgBAEAGQAEAHgEAFQgGAGgHgCQgHgCgCgFIhFAHQAAAHgGAEQgDACgDAAQgEAAgDgDg");
	this.shape_186.setTransform(-27.8,-18.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.6,0,8.7,0).s().p("AA+AnQgGgCgDgGQgEgGACgHIhmggQgCAGgHADQgGADgHgCQgKgEgCgLQgBgLALgIQAMgEAIAIQAIAGgDALIBmAgQAEgKAKgBQALgBAIALQAEAMgIAJQgGAFgHAAIgGgBg");
	this.shape_187.setTransform(125.5,18.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.1,0,9.2,0).s().p("ABHAXQgHAAgFgGQgEgFAAgHIhtgGQgBAFgFAFQgGAEgHgBQgLgBgFgKQgEgJAJgKQALgHAKAFQAJAFAAALIBtAGQACgJAKgDQAKgEAKAJQAHAJgGAKQgFAJgKAAIgCAAg");
	this.shape_188.setTransform(-130.9,129.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.3,0).s().p("AgeA7QgDgJAFgHQAGgGAIACIAbhOQgIgDAAgIQgBgJAIgGQAKgDAHAHQAFAGgCAIQgCAFgFADQgFACgFgBIgaBOQAEADADAFQABAFgBAFQgDAIgJABIgCAAQgHAAgFgIg");
	this.shape_189.setTransform(8.8,51.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.3,0,12.3,0).s().p("ABOA5QgLgLAFgPIiRg4QgHANgPABQgQABgKgQQgFgTANgLQAMgLAPAGQAJAEAEAJQAFAJgDAJICRA5QAEgJAKgEQAJgDAJADQAPAGACAQQABARgRAKIgJABQgMAAgIgHg");
	this.shape_190.setTransform(-97.6,-52.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AAPAqQgFAAgDgFQgDgHAHgFIgWgwQgIADgEgHQgCgFAEgFQADgFAHACQAGADAAAFQAAAGgFACIAWAwQAFgBAEADQAFAEgCAGQgCAGgGAAIgBAAg");
	this.shape_191.setTransform(-21.5,83.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12,0,12.1,0).s().p("AhiBUQgTgHgCgSQgBgRAOgIQAJgGALACQAKACAGAIICKhUQgEgJADgKQACgLAJgFQAPgJAOAJQAPAKgCAUQgHASgRACQgQACgJgNIiKBVQAHAOgJANQgJAMgPAAIgFAAg");
	this.shape_192.setTransform(25.2,70.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.2,0,7.2,0).s().p("AhFALQgFgIAGgHQAIgHAJADQAIADABAGIBVgEQAAgIAIgEQAIgEAIAFQAHAIgDAHQgEAIgJABQgFAAgEgDQgFgEgBgDIhVAEQAAAGgEAEQgEAEgFAAIgBAAQgIAAgFgHg");
	this.shape_193.setTransform(-1.7,170.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.6,0,5.7,0).s().p("AgrCSQgQgMAEgSQACgMAKgHQAKgHAMABIAli3QgMgDgEgLQgGgKACgMQAEgTARgEQAUgFAPARQAJAUgLAQQgLAOgSgCIgkC3QAPAGAEARQAEATgPAPQgJAEgIAAQgKAAgJgHg");
	this.shape_194.setTransform(145.8,67.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.7,0,14.7,0).s().p("AiDA7QgSgNAEgUQADgSASgFQALgDALAFQAKAFAEALICvgvQgDgLAHgKQAGgKALgDQASgFANAOQANAPgJAVQgNAPgSgBQgRgDgHgQIiuAvQADARgNALQgJAHgLAAQgHAAgIgDg");
	this.shape_195.setTransform(-10.9,-34.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.8,0).s().p("AAaAfQgDgFADgGIg1gmQgEAFgGgBQgHgBgCgIQgBgIAHgEQAGgDAGAEQADADABAEQABAEgCAEIA1AmQACgEAFAAQAEgBAEADQAFAEgBAHQgBAHgIACQgIAAgEgGg");
	this.shape_196.setTransform(47.1,-169.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.3,0).s().p("AgfAcQgCgFAEgEQAGgGAGAFIAigkQgFgFAGgHQADgEAGACQAFACABAGQgBAGgFACQgEACgEgDIgjAkQADAEgCAFQgCAFgGABQgGgBgCgFg");
	this.shape_197.setTransform(-68.1,206.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.7,0,7.7,0).s().p("AhDAjQgKgHABgLQACgKAJgDQAGgCAGADQAGADACAFIBagcQgBgGADgGQADgFAGgCQAJgDAHAHQAIAHgEAMQgHAJgJgBQgKgBgEgIIhaAcQACAJgHAHQgFAEgGAAIgHgBg");
	this.shape_198.setTransform(24.4,141.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AgXAlQgCgGAFgEQAEgEAFACIAVgyQgEgDAAgFQAAgFAFgEQAHgBAEAEQAEAFgDAFQgDAIgIgDIgWAyQAIAEgEAIQgCAFgGAAQgGAAgDgGg");
	this.shape_199.setTransform(-71.4,219.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.7,0,10.7,0).s().p("AhaBZQgPgHgBgUQAFgSAPgEQAPgDAKAKIB4hhQgIgNAHgNQAHgOASgBQATAFAEAQQADAQgMAKQgIAGgKAAQgKgBgHgHIh4BhQAGAIgBAKQgCAKgIAGQgHAHgIAAQgGAAgGgDg");
	this.shape_200.setTransform(101.3,205.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.2,0,7.2,0).s().p("AhGA8QgEgLAJgJQAFgFAHAAQAHAAAGAEIBOhQQgFgFAAgIQABgHAFgFQAIgIALADQAMAEACAOQgCANgLAFQgKAEgJgHIhOBQQAHAIgDAKQgEALgOACQgOgCgEgLg");
	this.shape_201.setTransform(-59.7,53.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.4,0).s().p("AADB8QgMgNAEgPQAEgPAMgEIgZiYQgPABgJgMQgJgNAJgRQANgOAQAFQANAEADAQQACAKgGAIQgDAJgKACIAaCYQAKAAAIAGQAIAGABAJQADAQgNAKQgHAFgIAAQgHAAgIgEg");
	this.shape_202.setTransform(108.6,59.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.9,0,12,0).s().p("ABNA1QgLgKAEgPIiMgzQgHANgOABQgQABgJgPQgGgSAMgLQAMgLAOAGQAJADAFAJQAEAIgDAJICNA0QAEgJAJgDQAJgEAJADQAPAGABAPQACARgQAJIgLACQgKAAgHgHg");
	this.shape_203.setTransform(-118.8,123.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.2,0,1.2,0).s().p("AABAoQgDgCgBgFQgBgHAGgCIgEgvQgHAAgBgIQgBgFAEgDQAFgCADADQAEAEgBAFQgCAEgCABIADAwQAFAAADAEQACAFgDAFQgDADgDAAIgDgBg");
	this.shape_204.setTransform(-152.7,108.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2.1,0).s().p("AgSAoQgCgGADgEQAEgFAFABIAPg0QgFgCgBgGQgBgFAGgEQAGgDAFAFQAEAEgCAFQgCAIgIgCIgPA1QAGADgBAIQgBAGgGABIgCAAQgFAAgDgFg");
	this.shape_205.setTransform(55.3,153.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.8,0,2.9,0).s().p("AgMB1QgLgNAGgOQAFgOAMgCIgEiTQgOgBgHgMQgGgOAJgPQAOgMANAHQAOAGABAPQAAAKgGAHQgGAIgIABIAFCTQAKABAGAGQAHAHAAAJQABAQgNAHQgGADgGAAQgHAAgJgGg");
	this.shape_206.setTransform(125.7,-143.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.4,0).s().p("AA4AYQgGgBgDgEQgEgFABgGIhYgNQgBAFgFACQgFADgFgBQgJgBgDgHQgDgKAIgHQAKgFAHAFQAIAFgBAJIBXANQACgHAJgCQAJgCAHAFQAFAKgGAIQgEAGgHAAIgDAAg");
	this.shape_207.setTransform(36.2,227.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5,0).s().p("AgsCFQgJgTAKgPQAJgOARACIAeiuQgPgFgEgQQgEgSANgOQATgKAQALQAOALgDASQgCALgJAHQgJAHgLgBIgdCuQALADAEAJQAGAKgCALQgDASgQAFIgIACQgOAAgLgNg");
	this.shape_208.setTransform(-157.9,90.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.2,0).s().p("AAQAgQgFgFAFgHIgggnQgHAFgFgGQgEgEACgFQADgFAGgBQAHACABAFQABAFgDADIAgAnQAFgDAEADQAFACABAGQgCAHgFABIgDABQgEAAgCgEg");
	this.shape_209.setTransform(58.4,162.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.4,0).s().p("AgUAnQgEgFADgFQADgHAIACIAUgwQgHgEADgHQADgFAFgBQAGAAADAGQACAGgEAEQgEADgFgBIgVAwQAFADAAAFQAAAGgGADIgDAAQgEAAgDgDg");
	this.shape_210.setTransform(-37.2,215.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.7,0,8.7,0).s().p("AhGBWQgOgFgCgQQACgQANgFQAMgFALAIIBehgQgIgKAFgMQAFgNAQgCQAQACAFAOQAFANgKAKQgGAGgJABQgJAAgGgGIhfBgQAFAHAAAIQAAAJgGAGQgHAHgJAAIgIgBg");
	this.shape_211.setTransform(17.7,-192.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AALArQgFgDAAgGQAAgFAEgDIgVgyQgFACgEgEQgFgEACgGQADgGAGAAQAGAAACAFQAEAIgIAEIAWAyQAIgCADAHQADAFgEAFQgDADgFAAIgDAAg");
	this.shape_212.setTransform(40.9,-140.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.3,0).s().p("AAfABIg+gBQgBAKgJAAQgHAAgDgGQgDgEAFgGQAGgFAGADQAGACAAAGIA+AAQABgFAGgDQAGgCAGAEQAEAGgDAEQgDAGgGAAQgKAAgBgJg");
	this.shape_213.setTransform(-167.2,7.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2,0).s().p("AgSAhQgCgGAEgDQADgDAEABIARgsQgFgCAAgEQAAgFAFgDQAGgCADAEQAEAEgCAEQgBADgDACQgDABgDgBIgQAsQAHACgDAIQgCAFgFAAIgBAAQgEAAgDgFg");
	this.shape_214.setTransform(106.2,90.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.6,0,11.6,0).s().p("ABMBMQgIgFgDgKQgDgJAEgJIiGhQQgGAIgJACQgKACgJgFQgOgJABgQQACgRASgHQATgCAJAOQAIAMgGAOICGBPQAJgMAPACQAQACAHARQACAUgOAJQgHAEgHAAQgHAAgHgEg");
	this.shape_215.setTransform(36.6,-193.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.6,0,11.7,0).s().p("AhhBjQgRgHgBgWQAEgTARgFQAQgFAMAMICChtQgJgOAHgPQAIgPAUgBQAVAEAFASQAEARgOAMQgIAHgLgBQgLAAgIgIIiCBtQAGAJgCALQgBALgIAHQgJAHgKAAQgFAAgGgDg");
	this.shape_216.setTransform(-139.9,137.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.4,0,10.5,0).s().p("AhmBLQgEgQAMgKQAIgHAKAAQAJAAAIAHIB0hmQgHgIABgKQABgKAIgHQAMgKAPAGQAQAGABAUQgEASgPAFQgPAEgKgKIh0BmQAJAMgHAOQgGAOgTACQgSgEgFgQg");
	this.shape_217.setTransform(75.7,112);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.2,0,13.3,0).s().p("Ah6AgQgOgOAGgQQAGgOAQgCQAKgBAJAGQAIAGACAIICegPQAAgKAHgHQAHgIAKgBQAQgCAJAOQAJAOgKAPQgOANgPgFQgPgFgDgNIifAPQABAQgOAIQgGADgHAAQgIAAgJgFg");
	this.shape_218.setTransform(126.4,47.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.5,0,5.5,0).s().p("AAnAJQgGgCAAgHIhBAAQgBAHgFACQgGADgHgFQgEgGADgFQADgGAGAAQAEAAAEADQADADAAAEIBBAAQAAgEADgDQAEgCAEAAQAGAAAEAGQACAEgEAHQgEADgEAAIgFgCg");
	this.shape_219.setTransform(-32.1,-154.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.9,0,4.9,0).s().p("AAHCbQgRgGgDgTQgBgNAHgKQAHgKAJgCIgYi8QgMABgJgIQgKgIgBgMQgDgTAQgLQARgMASAMQAQAQgFASQgFASgQAEIAYC8QATgBAJAQQALAQgLAUQgMAMgOAAQgFAAgFgCg");
	this.shape_220.setTransform(80.3,184.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6,0).s().p("AgwCHQgOgMAFgSQADgLAJgGQAKgGALACIAsipQgKgEgFgKQgFgKACgLQAFgRASgEQASgEAOASQAHATgLAOQgLANgQgDIgtCqQAQAGADARQAAARgOANQgIAEgHAAQgLAAgIgIg");
	this.shape_221.setTransform(-179.8,61);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.6,0,5.7,0).s().p("AgvAfQgIgFAAgHQABgIAGgDQALgEAFAJIBBgbQgCgEACgFQACgEAEgCQAHgDAGAFQAGAFgCAJQgFAHgHAAQgHAAgDgGIhBAbQACAHgFAFQgEAEgFAAIgEAAg");
	this.shape_222.setTransform(36.1,-71.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.7,0,1.7,0).s().p("AAGAsQgGgCAAgFQgBgIAGgDIgKgzQgIABgCgIQgBgGAEgDQAFgEAGADQADAEgBAGQgBAFgDABIAKA0QAFgBADAFQADAEgCAGQgEAEgEAAIgCAAg");
	this.shape_223.setTransform(-28,164.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.4,0).s().p("Ag0AjQgCgIAGgFQAEgDAFAAQAFABADADIA9gvQgDgEABgFQAAgFAEgDQAHgFAHADQAIAEAAAJQgCAJgIACQgIACgFgFIg8AvQAEAHgDAGQgEAHgJAAQgKgCgBgIg");
	this.shape_224.setTransform(120.9,159.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AgaAbQgGgCgBgFQgBgFAFgDQACgCADABQADAAACACIAmgaQgEgGAGgFQAEgDAFADQAEACAAAGQgCAFgEABQgFABgDgDIgmAbQADAEgDAEQgCAEgFAAIgBAAg");
	this.shape_225.setTransform(-81.1,-89);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AgkAUQgBgFAFgDQAGgEAFAGIAqgcQgEgHAHgEQAEgDAFACQAFADgBAGQgCAGgFABQgFABgDgEIgqAcQADAFgDAEQgDAEgGAAQgGgCgBgGg");
	this.shape_226.setTransform(-13.7,-205.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("AAcB6QgFgKADgLQADgMAKgGIhSiiQgLAEgLgEQgLgEgFgLQgIgRALgPQAMgQAWAFQAUAJABATQAAASgPAJIBSCjQAQgHAOALQAOAMgDAVQgKAVgUAAQgTAAgIgRg");
	this.shape_227.setTransform(52.7,-71.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.2,0,5.3,0).s().p("AAYA7QgDgFAAgGQABgFAEgEIg2hKQgFADgFgBQgGgBgEgFQgGgIAFgJQAEgJAMABQALADACAJQABAJgGAGIA2BKQAHgFAIAEQAIAFAAALQgDALgKACIgDAAQgHAAgFgGg");
	this.shape_228.setTransform(149.7,59.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.3,0,12.4,0).s().p("AhlByQgTgHgCgXQAEgWASgGQARgGANAMICJh+QgLgPAHgRQAIgRAWgCQAXAEAGATQAFATgOANQgJAIgMAAQgMAAgJgIIiJB+QAIAKgBAMQgBAMgJAIQgJAIgLAAQgGAAgGgCg");
	this.shape_229.setTransform(-148.2,-8.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.3,0,8.4,0).s().p("AhIA8QgLgFABgPQAEgNAMgDQALgCAHAKIBfhBQgGgKAGgJQAGgKAOAAQAOAEACAMQABANgKAGQgGAFgHgBQgHgBgFgGIhfBAQAEAHgCAHQgBAIgHADQgFAEgGAAQgEAAgFgDg");
	this.shape_230.setTransform(56.9,-26.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AAIA1QgHgEABgHQABgHAGgDIgTg/QgGABgFgFQgEgFACgHQAFgHAIABQAGABADAHQABAKgIADIATBAQAKgCADAJQACAHgFAFQgDADgFAAIgFgBg");
	this.shape_231.setTransform(-76.1,-65.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.2,0,12.3,0).s().p("ABXAZQgMgGgBgOIiSgFQgCANgNAFQgOAFgOgLQgKgNAHgNQAHgOAQABQAJAAAHAHQAGAGABAKICSAEQABgHAHgGQAHgHAKABQAPABAGANQAGANgLAOQgJAGgIAAQgGAAgFgDg");
	this.shape_232.setTransform(91.6,171.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("AA7AYQgJgFABgKIhmgOQgCAIgKACQgKADgJgIQgGgKAHgJQAGgJAKACQAHABAEAFQAEAFAAAHIBlAOQACgGAFgCQAGgEAGABQALABADAJQAEAKgKAJQgFADgFAAQgFAAgEgDg");
	this.shape_233.setTransform(-5.8,158.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("AAtAeQgFgBgCgFQgCgEABgFIhKgbQgCAFgFACQgFACgFgCQgIgDAAgIQgBgIAIgGQAJgDAGAGQAGAGgCAHIBKAaQADgHAIAAQAIgBAFAIQADAKgGAGQgEAEgFAAIgFgCg");
	this.shape_234.setTransform(143.7,-95.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.1,0,6.2,0).s().p("AAkAxQgFgDAAgGQgBgGADgEIhEg4QgEAEgGAAQgFABgFgEQgHgGACgJQADgKALgCQAKAAAEAJQAEAHgFAIIBEA3QAGgGAIADQAJACADAKQgBALgJAEIgGACQgFAAgEgEg");
	this.shape_235.setTransform(-11.9,188);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.8,0,3.9,0).s().p("AghB6QgJgRAIgOQAIgNAQABIAQidQgNgDgEgPQgFgQANgNQAPgKAPAJQANAJgCAQQgBAKgIAHQgIAHgKgBIgRCdQAIADAGAIQAGAIgBAKQgCAQgNAGQgFABgEAAQgLAAgLgJg");
	this.shape_236.setTransform(113,-161.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.4,0).s().p("AgVA0QgIAAgDgIQgBgIAFgEQAFgEAHACIAgg8QgGgEABgGQAAgIAIgDQAIgBAFAGQAEAGgEAGQgCAEgEACQgFABgDgCIggA8QAEADABAEQABAFgDADQgDAGgGAAIgBAAg");
	this.shape_237.setTransform(127.9,125.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3,0,3.1,0).s().p("AgcAfQgCgEADgFQAFgGAGAEIAfgpQgGgFAFgGQADgFAFACQAGABACAGQAAAGgFADQgFACgEgDIgeApQADADgBAFQgBAFgGACQgHAAgCgFg");
	this.shape_238.setTransform(15.1,137.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.6,0,14.7,0).s().p("AiIA8QgOgOAHgVQANgSASACQASABAHARICtg6QgEgRANgMQAOgNAUAHQATANgCAUQgDASgSAGQgLAEgLgFQgKgEgFgLIitA5QADAMgGAKQgGAKgLAEQgFABgFAAQgMAAgJgJg");
	this.shape_239.setTransform(145.1,52.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.4,0).s().p("AgUBFQgFgKAFgHQAEgIAJABIAMhZQgHgCgCgJQgDgJAHgHQAJgGAIAGQAIAFgCAKQAAAFgFAEQgFAEgFgBIgMBZQAEABADAFQAEAFgBAGQgCAJgHADIgEABQgHAAgGgGg");
	this.shape_240.setTransform(138.3,106);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.5,0,14.6,0).s().p("Ah/BGQgTgMACgUQACgTASgHQALgDALAEQAKAFAFAKICsg9QgDgLAGgKQAFgLALgEQASgGAOANQAOAOgHAVQgMASgTgBQgRgBgIgQIisA8QAFASgNAMQgJAJgNAAQgFAAgHgCg");
	this.shape_241.setTransform(70.4,23.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.8,0,5.8,0).s().p("AgyAbQgHgFABgIQABgHAHgDQAEgBAFACQAEABACAFIBDgXQgBgEACgEQACgFAEgBQAHgDAGAGQAGAFgDAJQgFAHgHgBQgHAAgDgHIhEAXQACAHgFAEQgDAEgFAAIgGgBg");
	this.shape_242.setTransform(-124.2,-68.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5,0).s().p("AgtAJQgFgFACgEQADgGAGAAQAEgBADADQADACAAACIA7gBQAAgJAJgBQAGAAADAFQAEAGgFAEQgFAFgGgDQgFgCgBgEIg7ACQAAAGgFACIgFACQgDAAgDgDg");
	this.shape_243.setTransform(112.4,4.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.4,0,14.5,0).s().p("AiJApQgMgPAKgUQAOgOARAEQARAEAFAOICsghQgCgRAOgKQAPgKASAJQARAOgFATQgEAPgSAEQgLACgKgGQgKgEgDgLIisAiQABALgHAJQgGAJgLACIgHABQgNAAgJgLg");
	this.shape_244.setTransform(-138.8,35.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.9,0).s().p("AAmAMQgEAAgDgDQgCgDAAgDIg5gDQgCAGgIAAQgGgBgCgFQgDgEAFgFQAGgEAFADQAFADAAAFIA5ADQABgEAFgCQAGgCAFAFQAEAEgDAFQgDAFgFAAIgBAAg");
	this.shape_245.setTransform(96.1,90.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AgnAMQgFgFACgFQACgDAFgBQAIgBACAGIAzgGQgBgDADgDQACgCADgBQAGgBADAFQADAFgDAEQgFAEgFgBQgFgCgBgDIgzAFQAAAFgEADIgEABIgGgBg");
	this.shape_246.setTransform(131.2,92.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1,0,1.1,0).s().p("AgBAmQgEgFABgEQACgEADgBIgCguQgFAAgCgEQgCgFADgFQAEgEADACQAEACABAFQABAHgGABIACAvQAHAAABAHQAAAFgEACIgEACQgCAAgBgCg");
	this.shape_247.setTransform(-8.7,28.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.7,0,7.7,0).s().p("AhGAVQgIgJADgJQADgHAKgCQAGAAAFADQAFADABAEIBbgKQgBgGAEgFQAEgEAGgBQAKgCAFAIQAGAJgGAIQgIAHgJgCQgJgDgCgHIhbALQABAJgIAFQgEACgFAAQgEAAgFgCg");
	this.shape_248.setTransform(126.3,-33.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AgiAXQgGgDAAgGQAAgGAFgCQAHgEAFAIIAvgVQgBgDABgDQABgDADgBQAFgDAFAEQAEADgBAHQgDAGgGAAQgFAAgDgFIgvAUQACAFgEAEQgCADgEAAIgDAAg");
	this.shape_249.setTransform(-157.7,157.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.1,0,8.2,0).s().p("AhLB0QgKgOAIgPQAFgKAKgEQALgDAKAEIBOiWQgJgGgDgKQgCgLAFgKQAIgPASAAQASABAJATQADAUgOALQgNAKgPgHIhOCWQANAJgBARQgBARgSAJIgIABQgPAAgJgNg");
	this.shape_250.setTransform(75.6,190.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.7,0,9.8,0).s().p("AhPBEQgQgGgBgPQgBgNALgHQAIgFAIACQAIABAFAHIBwhDQgEgIACgIQADgIAHgEQAMgHALAHQAMAHgCARQgFAOgOACQgMACgIgLIhwBEQAGALgHALQgHAKgNAAIgDAAg");
	this.shape_251.setTransform(-58.6,183.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AAlAOQgGgDABgGIg/gHQgCAFgGABQgGACgFgFQgFgFAEgGQAEgGAHABQAJACAAAJIA/AHQABgDADgBQAEgDAEABQAGABADAEQACAHgGAFQgDACgDAAQgDAAgDgCg");
	this.shape_252.setTransform(-187.7,103.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.6,0,1.7,0).s().p("AgMAlQgEgDABgFQACgIAHACIALguQgFgCAAgHQACgFAFgBQAFgBAEAFQACAFgDAEQgDAEgFgBIgLAtQAEACAAAFQAAAFgDADIgFABQgCAAgCgCg");
	this.shape_253.setTransform(-47.9,9.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AgEB8QgNgOAFgPQAFgOAMgDIgOiaQgPAAgIgNQgIgNAJgQQAOgOAQAGQANAFACAQQABAKgGAIQgGAIgHACIAOCbQAKgBAIAHQAHAHABAJQACAQgOAJQgGAEgHAAQgIAAgHgFg");
	this.shape_254.setTransform(79,70.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("AA/AjQgGgCgEgGQgDgFABgHIhlgZQgCAGgGADQgGABgHAAQgKgCgDgLQgCgLAKgIQAMgFAIAHQAIAGgBAKIBkAaQAEgKAKgBQALgBAHAJQAFAMgHAIQgGAGgHAAIgFAAg");
	this.shape_255.setTransform(44.1,131.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AAYAXQgHgEADgHIgogWQgFAGgGgEQgEgDAAgEQABgGAFgCQAGgBADAEQACAEgBAEIAoAXQADgEAEABQAGAAACAGQABAGgFADIgEABIgEgBg");
	this.shape_256.setTransform(181.4,3.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("AAtAfQgFgCgCgEQgDgFACgFIhKgbQgCAEgFACQgEACgFgCQgIgCgBgJQgBgJAJgFQAJgCAGAGQAFAFgCAHIBKAcQADgHAIgBQAIAAAFAIQADAKgHAFQgEAEgEAAIgFgBg");
	this.shape_257.setTransform(-172.8,-61.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6,0).s().p("AgoBYQgNgBgGgNQgBgOAKgHQAJgHAKAFIA7hmQgJgHABgMQABgMANgFQAPgCAHALQAHAKgGAKQgEAHgIACQgHADgHgEIg6BnQAGAEABAIQACAHgEAHQgGAJgKAAIgCAAg");
	this.shape_258.setTransform(138.9,119.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.8,0,5.9,0).s().p("AAjAtQgEgDgBgFQgBgGADgEIhBgzQgEAEgFABQgGAAgEgDQgGgFABgJQACgJAKgCQAKAAAEAHQAEAHgEAHIBAAzQAGgGAIACQAIACADAKQAAAKgJAEIgGABQgEAAgEgDg");
	this.shape_259.setTransform(147.5,-86.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.7,0).s().p("Ag+AYQgGgGAEgKQAGgIAIACQAIABADAHIBOgWQgBgIAGgFQAGgFAJADQAJAGgCAJQgBAIgIADQgFABgFgCQgFgDgCgEIhOAWQABAFgDAEQgDAFgFABIgEABQgGAAgEgFg");
	this.shape_260.setTransform(-29.9,39.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.9,0,8.9,0).s().p("AA8AdQgJgGABgKIhpgVQgDAIgKACQgLACgIgIQgGgMAHgJQAHgJALADQAHABAEAGQAEAFgBAHIBpAVQACgGAGgDQAGgCAHABQALABADAKQACAMgKAIQgFADgFAAQgFAAgFgEg");
	this.shape_261.setTransform(25.9,161.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.7,0,11.7,0).s().p("AhoBGQgOgKADgTQAHgQAQgBQAPgCAJANICHhJQgGgOAJgMQAKgMASACQASAIABARQAAAQgOAIQgJAFgJgDQgKgCgFgJIiIBJQAEAJgDAKQgEAJgIAFQgHADgGAAQgHAAgHgFg");
	this.shape_262.setTransform(91.5,-15.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AgiARQgEgDACgGQADgFAFABQAEAAADAEIArgQQgBgFADgDQADgEAGACQAFADgBAFQAAAFgFACQgGACgEgGIgrAQQACAHgHADIgDABQgCAAgDgDg");
	this.shape_263.setTransform(179.1,-9.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.3,0,11.4,0).s().p("AhrAmQgKgLAHgQQALgLAOAAQANACAFANICGghQgCgNALgJQALgJAPAGQAOALgDAPQgDAOgOADQgJABgHgCQgIgEgDgJIiHAiQABAJgEAHQgFAIgJACIgHAAQgJAAgIgIg");
	this.shape_264.setTransform(147.5,110.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AARArQgCgEAAgEQAAgEAEgDIgmg1QgJAEgGgIQgEgFADgGQAEgHAIAAQAIADABAHQACAGgFAEIAmA2QAFgDAGADQAGADAAAIQgDAIgHACIgCAAQgGAAgDgFg");
	this.shape_265.setTransform(36.2,87);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.4,0).s().p("AAhAPQgIgBABgIIg0gJQgBAGgJgCQgFgBgCgEQgBgFAFgFQAGgCAEADQAEADAAAFIAzAJQABgEAGAAQAFgBAEACQADAGgDAFQgDAEgEAAIgCgBg");
	this.shape_266.setTransform(40.7,161.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.5,0).s().p("AAkBRQgFgHAAgIQABgIAGgGIhOhkQgHAEgIgBQgJgCgFgGQgIgLAGgMQAGgMAQAAQAPAEADAMQADANgJAIIBOBlQALgHALAGQALAGABAPQgEAQgOACIgGABQgJAAgGgIg");
	this.shape_267.setTransform(128.6,30.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.4,0,14.5,0).s().p("Ah/A+QgTgNAEgTQACgSASgGQALgDALAFQAKAFAEAKICrgzQgCgLAGgKQAGgKALgDQARgFANANQANAOgIAVQgMARgSgCQgRgCgHgQIirAzQADARgNALQgIAIgMAAQgGAAgHgDg");
	this.shape_268.setTransform(-29,104.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3,0,3,0).s().p("AgWBOQgIgGACgKQABgHAFgDQAFgEAHABIAShhQgGgCgCgFQgCgGABgGQABgKAJgDQAKgDAJAKQAFALgGAIQgGAHgKgBIgSBhQAHADACAJQACAKgGAIQgFADgFAAQgFAAgFgEg");
	this.shape_269.setTransform(-162.5,134.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("AhTB2QgEgVAOgMQAOgLARAGIBRiiQgPgKABgRQAAgTAUgJQAWgFAMAQQALAPgIARQgFALgLAEQgLAEgLgFIhRCjQAKAGADAMQADALgFAKQgJARgTAAQgUAAgJgVg");
	this.shape_270.setTransform(-13.9,172.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AgjAYQgFgDABgHQADgFAFgBQAGgBACAFIAugZQgCgFADgEQADgEAHABQAGADAAAFQAAAGgFADQgHADgEgGIguAYQAEAHgIAFIgEABQgDAAgCgCg");
	this.shape_271.setTransform(-114.5,-119.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AgZAqQgGgBgCgIQAAgHAFgDQAFgCAFADIAkgvQgFgEACgFQABgHAHgCQAHAAADAGQADAGgEAFQgCADgEABQgEAAgDgCIgjAvQADACAAAEQABAEgDADQgDAEgEAAIgDAAg");
	this.shape_272.setTransform(115.8,82.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1,0,1,0).s().p("AgEAsQgEgGACgFQACgFAEAAIAAg2QgFgBgDgEQgCgFAEgGQAFgEAEACQAFADAAAFQAAAJgIABIABA2QAJAAAAAIQAAAGgFADIgFABQgBAAgDgCg");
	this.shape_273.setTransform(150.4,-64.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.2,0,2.3,0).s().p("AgVAhQgBgGAEgDQAEgDAEACIAUgtQgFgCAAgFQAAgFAGgDQAGgCADAFQAEAEgDAFQgDAGgHgCIgTAsQAHAEgEAHQgCAFgFAAQgGAAgDgGg");
	this.shape_274.setTransform(-73.6,127.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.6,0).s().p("AAYBcQgMgCgEgLQgCgHADgHQACgHAHgDIgmhsQgHACgHgDQgGgEgDgGQgEgMAIgIQAJgKAOAFQALAHgBAMQAAAMgLAEIAmBsQALgDAIAIQAIAIgEAOQgHALgLAAIgCAAg");
	this.shape_275.setTransform(-92.9,210);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.5,0,14.6,0).s().p("AiJAyQgMgPAIgUQAOgPARABQARACAGARICtgtQgDgRAOgLQAOgLAUAIQARANgDATQgEATgSAEQgLABgKgDQgKgFgEgLIitAsQACAMgGAJQgHAKgLADIgJABQgMAAgJgKg");
	this.shape_276.setTransform(148.2,153.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AgkBXQgJgIAEgMQADgHAGgDQAHgEAHACIAihuQgGgDgDgGQgDgHACgHQADgMAMgBQANgCAIAMQAEANgIAJQgHAIgLgDIgjBuQALAEABALQABAMgLAIIgJACQgIAAgGgGg");
	this.shape_277.setTransform(-177.1,117.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AAABKQgGgIADgJQACgJAHgCIgNhbQgJABgFgIQgFgIAFgKQAIgIAKADQAHADABAJQABAGgDAFQgDAFgEACIANBbQAGgBAEAEQAFAEABAGQABAJgHAGQgFADgEAAQgFAAgFgDg");
	this.shape_278.setTransform(-138.9,105.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.6,0).s().p("AAnB2QgPgBgHgOQgEgJADgJQADgJAJgFIg8iLQgJADgJgDQgJgEgEgJQgGgPAKgMQALgMASAEQAQAJAAAQQgBAOgMAHIA7CLQAPgFAKAKQAMALgEARQgJAQgQAAIgBAAg");
	this.shape_279.setTransform(81.3,-2.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AgaBYQgJgHACgLQACgHAGgEQAGgEAHAAIAVhuQgHgCgCgGQgDgGABgIQACgLAKgDQAMgDAJALQAGAMgHAJQgGAJgLgBIgWBuQAJADACALQADALgIAJQgGADgFAAQgGAAgGgFg");
	this.shape_280.setTransform(97.8,54.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10,0,10.1,0).s().p("AhhALQgGgLAIgLQAMgJALAFQALAEABALIB4gCQABgLAKgFQALgFAMAIQAKALgGAKQgFALgNABQgIAAgFgFQgGgFgBgIIh4ADQgBAHgFAGQgGAFgHAAIgBAAQgMAAgFgKg");
	this.shape_281.setTransform(107.8,49.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.1,0,10.1,0).s().p("AhiBfQgGgQALgNQAHgIALgCQAKgBAJAGIBsh9QgHgIgBgLQAAgLAHgIQALgNARAFQARAEAFAUQgCAUgPAIQgPAGgNgJIhsB+QALAMgEAPQgFAQgUAFQgVgBgHgRg");
	this.shape_282.setTransform(165.2,-19.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.8,0,7.9,0).s().p("AhMCCQgFgVANgOQANgMASAFIBFiwQgRgJAAgSQgBgTATgMQAXgHAOAQQANAOgIASQgEAMgLAFQgLAFgMgDIhECwQALAFAEAMQAEALgEALQgHASgUACIgCAAQgTAAgMgTg");
	this.shape_283.setTransform(-14.1,-62.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.1,0,6.2,0).s().p("Ag3AkQgHgGACgKQAEgJAIAAQAIAAAEAGIBHgjQgDgIAFgGQAGgHAJACQAJAFABAIQAAAIgIAFQgEACgGgBQgFgBgCgFIhHAjQAEAMgLAFQgDACgDAAQgEAAgEgCg");
	this.shape_284.setTransform(-2.2,116.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.7,0).s().p("AgqAIQgFgGADgDQACgFAGgBQAIAAABAHIA2AAQABgJAIAAQAGgBADAGQADAEgFAEQgFAFgFgCQgFgCgBgFIg2ABQAAAFgFADIgEABQgDAAgDgCg");
	this.shape_285.setTransform(187,101.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AgiAZQgGgDAAgGQgBgGAFgCQAIgEAEAHIAvgWQgCgJAHgDQAFgCAEADQAFAEgBAHQgDAFgGABQgFAAgDgFIgvAXQACAEgEAFQgCADgFAAIgCAAg");
	this.shape_286.setTransform(-5.4,21.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("AAmAkQgFgHADgHIhIgoQgFAHgIgBQgJgBgEgJQgCgLAIgFQAHgFAIAFQAFACABAFQACAFgCAGIBJAnQADgEAFgBQAFgBAFACQAIAFgBAIQAAAJgKAFIgCAAQgIAAgFgGg");
	this.shape_287.setTransform(109.2,209.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.8,0,7.9,0).s().p("AhLBUQgGgNAIgMQAFgHAJgBQAJgCAHAFIBShuQgGgGgBgIQgBgJAFgHQAJgMAOADQAPADAEAQQAAARgMAHQgMAGgLgHIhSBtQAKAJgDANQgDAOgQAFIgBAAQgQAAgHgNg");
	this.shape_288.setTransform(43.7,45.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.8,0,7.9,0).s().p("AA0AbQgHgFABgKIhcgVQgDAJgJAAQgKABgHgGQgFgLAHgIQAGgIAKADQAGABAEAFQADAFgBAGIBcAVQACgFAFgDQAGgBAGAAQAKACACAJQACAKgJAIQgFACgEAAQgFAAgFgEg");
	this.shape_289.setTransform(-179.6,124.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.8,0).s().p("AAUByQgPgDgDgOQgCgJADgIQAEgIAJgDIgjiIQgJACgHgFQgIgFgDgIQgDgOALgKQALgKAQAHQAMAKgBAOQgCANgNAFIAjCIQAOgDAIALQAJALgGAQQgJALgLAAIgFAAg");
	this.shape_290.setTransform(-188.7,56.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.7,0).s().p("AAfAHQgDgDAAgDIg3gBQgBAIgIAAQgGAAgCgFQgDgEAEgFQAGgEAFACQAFADAAAFIA3AAQABgFAFgCQAFgCAFAEQAEAFgDAEQgCAFgGAAQgEAAgCgCg");
	this.shape_291.setTransform(46.5,-80);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.8,0).s().p("AgrAMQgFgFACgGQACgDAGgBQAIgBACAGIA4gFQAAgJAJgBQAGgBADAFQAEAFgEAFQgFAEgGgBQgFgCgBgDIg5AFQABAGgFADIgFABQgDAAgDgCg");
	this.shape_292.setTransform(15.7,-62.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.9,0,7.9,0).s().p("AhJBpQgJgOAIgOQAFgJAKgDQAJgDAJAEIBOiHQgIgFgCgKQgCgKAFgJQAIgOAQABQARABAIASQACATgNAJQgMAJgOgGIhOCHQAMAJgCAPQgBAQgRAHIgGABQgPAAgIgMg");
	this.shape_293.setTransform(137.5,71.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("AA0AwQgHgJAEgKIhjg2QgGAJgLgBQgLgBgGgMQgCgOAKgHQAKgHAKAGQAHAEACAHQACAHgDAGIBjA2QAEgGAHgCQAHgCAHAEQAKAGgBAMQAAAMgNAFIgFABQgKAAgFgIg");
	this.shape_294.setTransform(178.4,19.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.5,0).s().p("AgxBUQgHgJAFgMQADgHAHgCQAIgDAHACIAyhrQgHgEgCgHQgDgIAEgHQAFgLAMAAQANgBAHAOQADAOgJAIQgJAHgLgEIgyBsQAKAGAAALQgBANgMAGIgHABQgKAAgGgIg");
	this.shape_295.setTransform(127.2,197.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.1,0,2.1,0).s().p("AgSAiQgDgDACgFQADgHAHACIARgqQgGgEADgHQACgEAFAAQAFgBADAFQABAGgDADQgEADgEgBIgSArQAFACAAAFQAAAFgFADIgDAAQgEAAgDgDg");
	this.shape_296.setTransform(-96.3,196.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.7,0,2.8,0).s().p("AAKA4QgHgEAAgIQABgHAGgDIgVhDQgHACgFgFQgFgFADgJQAFgHAIABQAHABADAHQABAEgCAFQgCAEgEACIAVBDQAFgBAEACQAEACABAFQADAHgGAFQgDADgEAAIgGgBg");
	this.shape_297.setTransform(125.2,151.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AglAIQgEgFACgDQACgEAFgBQAIgBABAGIAvgBQAAgDADgCQACgDADAAQAFAAACAEQADAFgDADQgFAEgEgCQgFgCgBgDIgvACQAAAFgEACIgEABQgDAAgDgCg");
	this.shape_298.setTransform(105.2,70);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3,0,3.1,0).s().p("AgbAtQgEgFADgGQACgEAEgBQAEgCAEACIAcg6QgEgCgBgEQgBgEACgEQADgGAGAAQAIAAADAHQABAIgFAEQgFAEgGgCIgbA6QAFADAAAGQAAAHgHADIgEABQgGAAgDgFg");
	this.shape_299.setTransform(-112.7,158.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.1,0,2.1,0).s().p("AgOA+QgHgFABgIQABgFAEgDQAEgDAFAAIAKhMQgEgBgBgEQgDgEABgFQABgIAGgDQAIgCAHAHQAEAIgEAHQgFAGgHAAIgLBMQAGACACAHQACAIgGAGQgDACgEAAQgEAAgDgCg");
	this.shape_300.setTransform(-94.7,177.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.3,0).s().p("Ag9AoQgCgJAHgGQAFgEAFABQAGAAAEAEIBGg2QgDgFABgGQABgGAFgDQAHgGAIAEQAJAEAAAMQgDAKgIACQgJADgGgHIhGA3QAFAHgEAIQgEAIgLAAQgLgDgCgJg");
	this.shape_301.setTransform(103.5,-90.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.1,0,3.1,0).s().p("AARAvQgHgDAAgGQgBgGAFgEIgdg2QgFACgFgDQgFgEABgIQADgHAHAAQAGgBADAGQACAEgBAEQgBADgDADIAdA2QAJgDAEAIQADAGgDAFQgEAEgGAAIgCAAg");
	this.shape_302.setTransform(169.7,90.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7,0,7,0).s().p("AAsAgQgGgGADgIIhSggQgEAIgIAAQgJABgGgJQgDgLAIgGQAGgGAJADQAFACADAFQACAGgCAFIBSAfQACgFAGgCQAFgCAFACQAJAEABAJQAAAJgJAGIgHAAQgGAAgEgEg");
	this.shape_303.setTransform(178.2,71.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.4,0,12.4,0).s().p("ABNA9QgKgLAFgPIiRhBQgIAOgPAAQgRAAgJgRQgEgUANgLQANgKAPAHQAJAEAEAJQAEAKgDAKICRBAQAFgIAKgEQAKgDAJAEQAPAHABARQAAARgRAJIgJACQgNAAgIgKg");
	this.shape_304.setTransform(87.4,134.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2,0).s().p("AACBAQgGgCgBgJQAAgFADgEQACgEAEgBIgJhNQgFABgEgEQgDgDgBgFQgBgIAHgFQAHgEAGAFQAHAGgDAIQgCAHgFACIAIBNQAIgBAEAHQAEAHgFAIQgFAFgFAAIgFgBg");
	this.shape_305.setTransform(-7.1,-198.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.7,0,1.7,0).s().p("AgBA4QgGgGACgHQACgHAFgBIgGhFQgGAAgEgFQgEgHAEgHQAHgGAHADQAFACABAHQABALgJACIAGBFQALAAABAKQABAHgGAEQgDACgDAAQgEAAgCgCg");
	this.shape_306.setTransform(54,-132.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AgnAPQgDgEACgGQADgFAGABQAFABACAEIAxgNQgBgFADgEQAEgDAGACQAGAEgBAFQgBAGgFABQgIABgDgGIgxAOQACAIgIACIgCAAQgEAAgDgDg");
	this.shape_307.setTransform(169,-13.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.1,0,12.1,0).s().p("ABbAsQgJgCgGgIQgFgIABgJIiQgcQgDAJgIADQgIAEgJgCQgPgDgEgNQgEgPAOgMQAQgHAMAJQALAIgBAOICQAcQAEgMAOgCQAOgDAMALQAIAQgKANQgHAJgLAAIgGAAg");
	this.shape_308.setTransform(-87.3,133);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.7,0,14.7,0).s().p("ABfBBQgNgMAFgSIiuhAQgIARgSABQgTABgMgTQgGgWAOgOQAPgNARAHQALAEAGALQAFAKgDAMICuBAQAFgLALgEQALgFALAEQASAHACATQACAUgUAMQgHACgGAAQgMAAgJgJg");
	this.shape_309.setTransform(96.6,-64.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.5,0,1.6,0).s().p("AgLAnQgEgDABgFQABgIAIABIAJgwQgFgCABgIQAAgFAFgBQAFgBAEAFQADAFgDAEQgDAEgFAAIgJAvQADACAAAFQABAFgCAEIgFABQgDAAgCgCg");
	this.shape_310.setTransform(168.6,5.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12,0,12.1,0).s().p("AhlBMQgSgIAAgRQgBgQAOgIQAKgFAJACQAKADAGAIICMhKQgEgJADgKQAEgJAJgFQAOgIAOAJQAOAKgEAUQgIARgQABQgPABgJgMIiMBKQAGAOgJAMQgIALgOAAIgHgBg");
	this.shape_311.setTransform(135.5,81.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("AhnBZQgGgQAMgMQAHgIALgBQALgBAIAHIB0h3QgHgJABgKQAAgLAHgIQAMgMARAFQARAGADAUQgCAUgQAGQgPAHgNgLIh0B4QALAMgGAQQgGAQgUADQgUgDgGgRg");
	this.shape_312.setTransform(73.6,44);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.1,0,12.2,0).s().p("ABHBkQgJgIgBgLQgCgLAHgKIiIhzQgIAIgLABQgMAAgJgHQgOgMAFgSQAFgTAVgFQAVACAIAQQAIAPgKAPICIBzQAMgMARAFQASAFAEAVQgBAWgSAIQgGADgGAAQgKAAgJgIg");
	this.shape_313.setTransform(-44.1,-138.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13,0,13.1,0).s().p("Ah1AsQgPgNAEgQQAEgPAQgDQAKgCAJAFQAJADADAKICagfQgBgKAGgIQAGgIAKgDQAQgDAKANQALANgJASQgMAMgQgDQgPgDgEgNIibAfQABAPgMAKQgHAFgJAAQgHAAgHgEg");
	this.shape_314.setTransform(28.4,111.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.8,0).s().p("AAtANQgEAAgDgDQgDgEgBgEIhDgCQgBAEgDADQgDADgFgBQgHAAgDgGQgDgFAGgHQAGgEAGADQAGADABAGIBDABQABgFAGgCQAHgDAGAFQAFAFgDAHQgEAGgGAAIgBAAg");
	this.shape_315.setTransform(4.3,114.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.4,0).s().p("AAkBPQgFgHABgIQAAgIAGgFIhOhiQgHAFgIgCQgIgBgFgGQgIgLAFgLQAGgMAQgBQAOAEADAMQADAMgIAJIBOBhQAKgHALAGQALAGABAPQgEAPgNADIgFABQgJAAgHgIg");
	this.shape_316.setTransform(-5.5,89.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.8,0,3.9,0).s().p("AAYAcQgHgFAEgHIgqgeQgCADgEAAQgDABgDgCQgEgEAAgFQABgGAGgCQAHAAADAFQADAEgDAFIAqAdQAEgEAFABQAFACACAGQABAGgFADIgFACQgDAAgCgCg");
	this.shape_317.setTransform(113,126.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5,0).s().p("AgtAJQgFgFACgEQADgGAGAAQAEgBADADQADACAAACIA7gBQABgJAIgBQAGAAADAFQAEAGgFAEQgFAFgGgCQgFgCgBgFIg7ACQAAAGgFACIgFACQgDAAgDgDg");
	this.shape_318.setTransform(148.3,117.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.7,0).s().p("AAcABIg3gBQgBAIgIAAQgGAAgDgFQgDgDAFgGQAFgEAFACQAFADABAFIA3AAQABgFAFgCQAFgCAFAEQAFAFgDAEQgDAFgGAAQgIAAgBgIg");
	this.shape_319.setTransform(-10.7,52);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AAVAZQgDgFADgEIgqgdQgDADgFgBQgGgBgCgGQAAgGAFgDQAFgCAFADQAGAEgEAHIAqAdQAFgGAHAFQAEADgBAFQgBAGgGACQgGAAgDgEg");
	this.shape_320.setTransform(-55.4,168);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.2,0,3.3,0).s().p("AgeA6QgDgJAGgGQAFgGAIACIAahOQgHgDAAgIQgBgJAIgFQAKgDAGAGQAGAHgDAIQgCAFgEACQgFADgFgCIgbBOQAFACACAFQADAFgCAFQgDAIgJABIgCAAQgHAAgFgIg");
	this.shape_321.setTransform(-84.1,23.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.2,0,5.3,0).s().p("AARBxQgOgKACgOQACgOAMgFIgpiJQgOADgJgKQgKgLAGgQQAKgPAPACQAPADAFAOQACAJgEAIQgDAIgJAEIAqCIQAJgCAIAFQAIAEACAJQAFAOgLALQgHAGgKAAQgFAAgGgCg");
	this.shape_322.setTransform(-187.3,-8.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.8,0,2.9,0).s().p("AAPAsQgGgDgBgGQAAgGAFgDIgbgyQgFACgEgEQgFgDABgHQADgHAGAAQAGAAADAFQAEAHgHAGIAaAyQAEgCADACQAEABACADQADAFgEAGQgDAEgFAAIgDAAg");
	this.shape_323.setTransform(89.1,209.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.6,0,1.6,0).s().p("AgEA8QgGgHADgHQADgHAFgBIgDhLQgIAAgDgHQgEgHAFgHQAHgGAGADQAHADABAIQAAAFgDADQgDAEgDABIADBLQAFAAAEADQADADAAAFQABAIgHAEQgDACgDAAQgDAAgEgDg");
	this.shape_324.setTransform(2.8,35.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.8,0).s().p("AgzBdQgIgKAFgNQAEgHAHgEQAIgDAIADIA0h3QgHgEgDgIQgDgIAEgHQAFgMAOgBQAOgBAHAOQAEAQgKAIQgJAJgNgEIgzB2QALAHAAAMQAAANgOAIIgIABQgKAAgHgIg");
	this.shape_325.setTransform(41.9,-33.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.2,0).s().p("AAbBJQgEgGABgHQABgIAGgEIg/hdQgHAEgHgCQgHgBgEgGQgHgKAGgKQAGgLAOABQANAEACALQACALgJAHIBABdQAJgGAKAGQAJAGAAANQgFAOgMACIgDAAQgJAAgGgIg");
	this.shape_326.setTransform(117.6,183.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.8,0,7.8,0).s().p("AA6AgQgGgBgEgFQgDgGABgGIhcgYQgCAGgFADQgGABgGAAQgKgDgBgKQgCgKAJgHQALgEAIAGQAHAGgCAJIBcAYQADgJAKgBQAJgBAHAJQAFALgHAIQgFAFgGAAIgFgBg");
	this.shape_327.setTransform(23.7,60.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.8,0,9.8,0).s().p("AhGCCQgUgDgHgVQgBgVAQgKQAPgJAPAIIBliWQgOgLADgRQADgTAUgHQAXgBAKARQAJAQgKAQQgHAJgLADQgMADgKgGIhkCWQAJAIACALQACAMgHAJQgJAOgPAAIgFgBg");
	this.shape_328.setTransform(161.6,-5.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.5,0).s().p("AhOAQQgJgJAFgJQAEgJALgBQAGAAAFAEQAFAEABAFIBlgDQAAgHAFgFQAEgEAHgBQALAAAFAJQAFAKgHAIQgKAIgJgEQgKgDgBgJIhlAEQAAAKgJAEQgEACgEAAQgFAAgGgEg");
	this.shape_329.setTransform(-62.8,-10.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.2,0,3.2,0).s().p("AgBB9QgPgGgBgQQgBgJAHgIQAGgIAHgBIgIiZQgKAAgHgHQgHgHgBgKQgBgQAOgHQAOgJAOALQAMAOgFAPQgGANgMADIAICYQAPABAHANQAHAOgKAPQgJAJgKAAQgFAAgDgDg");
	this.shape_330.setTransform(-109.6,-102.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.6,0).s().p("AANApQgFgDgBgFQAAgGAEgDIgXgvQgFACgEgDQgFgEABgGQADgGAGgBQAGAAACAFQAEAIgHAEIAYAwQAIgEADAIQADAFgDAFQgDAEgFAAIgDgBg");
	this.shape_331.setTransform(-77.2,149.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.8,0,5.9,0).s().p("Ag1AbQgGgFADgJQAEgIAIABQAHAAADAGIBEgaQgCgHAFgFQAFgFAJACQAIAEgBAIQgBAIgHADQgKAEgFgKIhEAaQACAFgCAEQgCAEgFACIgFACQgEAAgEgEg");
	this.shape_332.setTransform(50.5,68.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("AAtAfQgFgCgCgEQgDgFACgFIhKgbQgCAEgFACQgEACgFgCQgIgDgBgIQAAgJAIgFQAJgCAGAGQAGAFgDAHIBKAcQADgHAIAAQAIgBAFAIQADAKgGAGQgFADgEAAIgFgBg");
	this.shape_333.setTransform(50.8,107.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.1,0,2.2,0).s().p("AgOBAQgHgFABgIQABgFAEgDQAEgEAFABIAKhPQgEgBgCgFQgCgEAAgFQACgIAGgDQAIgCAHAHQAEAIgEAHQgEAHgIgBIgKBPQAFACACAHQADAIgHAHQgCACgEAAQgEAAgEgCg");
	this.shape_334.setTransform(-169.6,92.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.5,0,3.6,0).s().p("AAACFQgQgGgBgRQAAgKAGgIQAGgIAIgCIgLiiQgKAAgIgHQgHgHgBgLQgCgRAPgIQAPgJAPALQANAOgGAQQgFAOgOADIAMCiQAPABAIAOQAIAOgKAQQgKAJgLAAQgFAAgEgCg");
	this.shape_335.setTransform(-39.9,-69.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.1,0).s().p("AgiAWQgGgDAAgGQAAgFAFgCQAIgDAEAGIAvgTQgDgHAHgEQAFgCAFAEQAEADgCAHQgDAFgFAAQgFAAgDgEIgvATQACAFgEAEQgCADgEAAIgDgBg");
	this.shape_336.setTransform(-65.5,171.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AgeAdQgFgCAAgHQACgGAFgBQAFgBADADIAogeQgDgEADgFQACgEAGgBQAGACACAGQABAFgFADQgGAFgFgGIgoAfQAFAGgHAFQgCACgDAAIgEgBg");
	this.shape_337.setTransform(37.2,169.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.9,0,9,0).s().p("AhXA8QgDgOAKgIQAHgFAIAAQAIABAGAFIBkhRQgFgHABgIQABgIAHgGQAKgIANAGQAMAGABAQQgEAPgNADQgMADgJgJIhjBRQAHALgGALQgGAMgPABQgQgEgDgNg");
	this.shape_338.setTransform(152,122.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.4,0).s().p("Ag0AsQgDgIAHgGQADgEAGAAQAFgBAEAEIA6g7QgDgEAAgFQAAgGAEgDQAGgHAIADQAJADABALQgBAJgIAEQgHACgHgFIg6A7QAFAGgCAHQgEAIgJACQgLgBgDgJg");
	this.shape_339.setTransform(62,154.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.3,0,14.4,0).s().p("AiIArQgMgOAJgUQAOgOARADQARACAFAQICrglQgCgRAOgKQAOgKATAIQARAOgFATQgEARgSACQgLADgJgFQgKgFgEgKIiqAkQABAMgGAJQgHAJgLACIgHABQgNAAgJgLg");
	this.shape_340.setTransform(-111.1,183.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.9,0,11,0).s().p("ABDBSQgIgGgCgJQgCgKAGgJIh8hbQgHAHgKABQgKABgIgGQgNgJADgQQADgRATgFQASAAAIAOQAHANgIANIB8BbQALgLAOAEQAQADAFASQAAATgPAIQgGADgGAAQgIAAgHgGg");
	this.shape_341.setTransform(187.4,96.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.6,0,5.7,0).s().p("AAcAtQgDgIAFgHIg9g6QgHAFgHgCQgJgDgBgKQABgLAJgDQAIgEAGAHQAEADABAGQAAAGgDAEIA9A6QAEgDAGAAQAGAAAEAEQAGAGgDAJQgCAIgLACQgKgBgEgIg");
	this.shape_342.setTransform(-76.6,96.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.7,0,2.7,0).s().p("AALAgQgEgHAGgEIgagoQgHADgEgGQgDgFADgEQACgFAHABQAFACABAFQABAFgEADIAaAoQAEgDAEADQAFADgBAGQgCAGgFABIgBAAQgEAAgDgEg");
	this.shape_343.setTransform(184,-16.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.7,0).s().p("AgpBGQgGgJAEgJQADgGAGgCQAGgDAGADIArhZQgGgDgBgGQgCgGADgGQAEgJALAAQAKAAAGALQACAMgIAGQgHAGgJgDIgrBYQAIAFAAAKQgBAKgKAGIgGAAQgIAAgFgGg");
	this.shape_344.setTransform(-46.6,216.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.1,0,2.1,0).s().p("AgMBRQgJgFABgLQABgGAEgEQAFgFAGAAIAFhjQgEgBgEgFQgEgFAAgHQABgKAKgEQAIgEAJAIQAHAKgFAJQgFAJgJAAIgFBjQAHACAEAJQADAJgIAKQgGAEgDAAQgFAAgEgDg");
	this.shape_345.setTransform(54.4,210.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2.1,0).s().p("AgGBgQgLgFAAgMQAAgIAFgGQAFgFAHgBIgBh1QgIgBgFgFQgFgGAAgHQgBgMALgGQAJgGAMAJQAJALgFALQgEALgMABIACB1QAMABAFAKQAFALgJALQgHAGgIAAQgCAAgEgCg");
	this.shape_346.setTransform(-5.7,-162.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AAoATQgJgCABgKIg/gLQgCAHgKgCQgHgBgCgFQgBgGAGgGQAHgDAFAEQAFADAAAHIA+ALQACgFAGAAQAHgBAFADQADAHgEAGQgEAEgFAAIgCAAg");
	this.shape_347.setTransform(-29.6,18.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.6,0).s().p("AgVBZQgHgMAGgKQAGgKALAAIAIhyQgJgCgDgKQgEgLAJgKQAKgIALAHQAKAGgBAMQgBAHgFAFQgGAFgHAAIgJBxQAGACAEAGQAFAFgBAIQgBAMgLAEIgGABQgIAAgHgGg");
	this.shape_348.setTransform(-31.5,-219);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,4,0).s().p("AAcARQgDAAgBgDQgCgDABgDIgugNQgCAFgIgBQgEgBgBgFQgBgGAFgDQAGgCADADQAEAEgBAEIAtANQACgEAFAAQAFgBADAFQACAGgEADQgCADgDAAIgDgBg");
	this.shape_349.setTransform(109.7,106.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("AhoBPQgEgQAMgLQAIgHAKAAQAKAAAIAHIB1hrQgGgIABgKQABgLAIgHQAMgLAPAGQAQAHACAUQgDASgQAFQgPAFgLgKIh2BrQAJAMgGAOQgGAPgTACQgUgDgFgRg");
	this.shape_350.setTransform(149.6,-63.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.8,0).s().p("AgrAMQgFgFACgGQACgDAGgBQAJgBACAGIA3gFQAAgJAIgBQAGgBADAFQAEAGgEAEQgEAFgGgCQgGgCgBgDIg3AFQAAAGgFADIgEABQgDAAgEgCg");
	this.shape_351.setTransform(77.5,-42.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.4,0,10.4,0).s().p("AhkAQQgHgMAJgLQALgJAMAEQALAEACAKIB8gHQAAgMALgGQALgGANAIQAKAMgFAKQgFAMgNABQgIABgGgFQgGgFgCgGIh7AHQgBAIgFAGQgFAGgIAAIgCAAQgMAAgGgKg");
	this.shape_352.setTransform(43.4,63.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AgwAbQgGgFACgIQAEgHAHAAQAHAAADAFIA+gaQgCgGAFgFQAEgGAIACQAIAFgBAHQAAAHgGADQgEACgFgCQgEgBgCgEIg+AaQACAEgCAFQgCAEgEACIgFABQgDAAgEgDg");
	this.shape_353.setTransform(156.4,67.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AAQAkQgGgHAHgGIgigsQgIAEgFgGQgEgFADgFQADgGAHAAQAHACABAFQABAGgEAEIAiAsQAFgDAFADQAFACAAAHQgCAHgGACIgCAAQgFAAgCgEg");
	this.shape_354.setTransform(143.9,166.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,3.9,0).s().p("AAYAyQgIgCgBgHQgBgHAFgFIgng4QgGADgGgDQgGgEAAgIQADgJAHgBQAHgBAFAGQAGAJgIAHIAnA4QAEgCAEABQAFABACAEQAFAGgEAGQgDAGgIAAIgCAAg");
	this.shape_355.setTransform(162.5,162.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3,0,3.1,0).s().p("AgNCUQgRgJABgSQAAgMAIgIQAHgJAMgBIABi1QgMgBgHgJQgIgJAAgLQAAgTARgIQAPgJASAOQANARgHARQgIARgRABIgBC1QARACAHAQQAIARgNARQgLAIgKAAQgGAAgHgDg");
	this.shape_356.setTransform(90.5,-129.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.2,0,5.3,0).s().p("AAfAfQgEgFADgHIg8gjQgEAFgHgBQgHgBgDgIQgBgIAHgFQAGgEAGAEQAJAHgFAJIA8AjQAGgIAKAFQAGAEgBAHQAAAIgJADIgBABQgHAAgEgGg");
	this.shape_357.setTransform(-142.8,-80);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7,0,7.1,0).s().p("AhEB2QgFgUAMgMQAMgMAQAFIA9ifQgOgHgBgRQgBgRARgLQAVgFAMANQAMANgGARQgEAKgKAFQgKAEgLgDIg9CfQAKAFAEAKQAEAKgEAKQgHARgSABIgCAAQgQAAgLgQg");
	this.shape_358.setTransform(-43.6,87.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5.1,0).s().p("AAhAeQgDgCgCgEQgBgEABgEIg5gdQgGAIgIgFQgGgDAAgHQAAgHAIgDQAHgBAFAFQADAFgCAGIA5AdQAEgFAGAAQAHABADAHQACAIgGAEQgDACgDAAQgDAAgDgBg");
	this.shape_359.setTransform(119.4,-7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.9,0,12,0).s().p("ABbAoQgKgCgFgHQgGgHABgKIiOgWQgCAIgIAEQgIAFgJgCQgPgDgEgMQgEgPANgMQAPgIANAIQALAIgBAOICOAXQADgMAOgDQAOgEAMALQAJAQgKAMQgHAKgLAAIgFAAg");
	this.shape_360.setTransform(86.8,-138.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.9,0,4.9,0).s().p("AgoAdQgHgDgBgHQAAgHAGgDQAEgCAEABQAEACACADIA4gbQgEgIAJgFQAGgDAFAEQAGAEgCAIQgDAHgHAAQgGAAgDgFIg4AbQACAGgEAEQgDAEgGAAIgCAAg");
	this.shape_361.setTransform(22.8,-67.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.lf(["#34FFFD","#267AB3"],[0,1],-15.1,0,15.2,0).s().p("AiQAmQgMgQALgUQAPgOASAFQARAEAFAPIC1gdQgCgSAPgJQAPgLAUAKQARAQgGATQgFAQgTADQgMACgKgGQgJgFgEgLIi0AdQABALgIAKQgHAJgLACIgGABQgPAAgJgNg");
	this.shape_362.setTransform(-77.6,197.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.7,0,8.7,0).s().p("AhCBiQgQgEgDgSQAAgRAOgGQAMgHAMAIIBchuQgKgKAEgNQAEgOARgEQASAAAGAPQAGANgJAMQgGAHgJABQgKACgHgGIhdBuQAHAHAAAJQABAKgGAHQgIAIgKAAIgGAAg");
	this.shape_363.setTransform(130.2,-71.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.1,0,10.2,0).s().p("AhiBXQgGgPALgMQAIgIAKgBQAKgBAIAHIBvh1QgHgIAAgKQAAgLAHgHQAMgMAQAEQARAFADAUQgCAUgQAGQgOAGgNgKIhuB1QALAMgGAPQgFAQgTADQgUgCgGgRg");
	this.shape_364.setTransform(-55.3,-181);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.3,0).s().p("AhOBLQgNgGAAgRQAEgPANgDQAMgDAJAJIBohSQgHgLAGgLQAHgMAQgBQAQAFADAOQACANgKAJQgHAFgJgBQgIAAgGgGIhoBRQAFAHgCAJQgBAIgHAGQgGAFgHAAQgFAAgFgDg");
	this.shape_365.setTransform(-133.7,-142.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.9,0,5.9,0).s().p("AAkAtQgEgDgBgFQgBgGADgEIhCgyQgEAEgFABQgGAAgEgDQgHgFACgJQACgJAKgDQAKAAAEAIQAEAHgFAHIBCAyQAGgGAIACQAIACADAJQAAALgIAEIgHABQgEAAgEgDg");
	this.shape_366.setTransform(160.2,2.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AgSA6QgGgFABgIQADgKALABIAQhHQgEgCgDgEQAAgEAAgFQABgHAIgCQAIgCAFAHQAEAJgFAGQgEAFgHgBIgQBIQAGACAAAHQABAIgFAFIgGACQgFAAgDgDg");
	this.shape_367.setTransform(1.8,131.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.7,0).s().p("AgtAnQgCgHAFgGQADgDAFAAQAFgBADADIAzgzQgDgEAAgEQAAgFADgEQAFgFAIACQAHADACAJQgBAJgHACQgHADgGgFIgyA0QAFAFgDAHQgDAHgIACQgJgBgDgIg");
	this.shape_368.setTransform(-5.1,-13.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.3,0,1.3,0).s().p("AgIAnQgFgDABgFQABgHAIAAIAFgvQgFgBABgIQABgFADgBQAFgCAEAEQADAGgDAEQgCAEgFgBIgGAvQADABABAFQACAFgEAEIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAg");
	this.shape_369.setTransform(21.3,200.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.1,0,5.1,0).s().p("AgrAnQgHgEAAgJQADgIAHgCQAHgBAFAFIA5gpQgEgGAEgGQADgHAJAAQAIADACAIQABAHgGAEQgJAGgHgIIg5AqQAFAJgIAHQgEADgDAAIgGgCg");
	this.shape_370.setTransform(174.8,50);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.7,0).s().p("AAkAOQgEgBgCgCQgCgDAAgEIg3gGQgCAGgIgBQgGgBgCgDQgCgGAFgFQAGgDAFADQAFADgBAFIA3AGQABgDAGgCQAFgBAFAEQADAFgDAFQgDAEgEAAIgCAAg");
	this.shape_371.setTransform(169.2,-57.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.4,0,10.4,0).s().p("AhaAzQgOgJABgOQACgNAMgFQAIgDAIADQAIADADAHIB7gsQgDgIAEgHQAEgIAIgDQANgEAKAJQAKAKgFAPQgIANgOgBQgMAAgGgMIh6AsQADANgJAJQgGAGgJAAIgJgBg");
	this.shape_372.setTransform(12.8,105);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4,0).s().p("AAZAUQgEgEACgFIgugUQgCAEgFAAQgGAAgDgFQgBgHAFgDQAEgEAFADQAGADgCAIIAuAUQABgDAEgBQADgBADABQAFADAAAFQAAAGgGADIgCAAQgEAAgDgDg");
	this.shape_373.setTransform(-8,-182);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.8,0,7.8,0).s().p("AAuAtQgGgIAFgKIhagyQgGAIgKgBQgKgBgFgMQgCgNAJgGQAJgGAKAGQAGADACAGQACAHgDAGIBZAzQAEgGAHgBQAGgCAGAEQAKAFgBALQgBALgMAFIgEAAQgKAAgFgHg");
	this.shape_374.setTransform(71.3,154.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1,0,1,0).s().p("AgFAnQgEgCAAgFQABgIAHAAIABguQgFgCAAgHQABgFAEgCQADgCAFAEQADAFgCAEQgDAFgEAAIgCAuQADABACAEQACAFgEAEQgDACAAAAIgFgBg");
	this.shape_375.setTransform(-132.9,144.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AASBHQgKgBgDgJQgCgFACgGQADgFAFgCIgchUQgFACgFgDQgGgDgBgFQgDgJAGgGQAGgHALADQAJAGgBAJQAAAJgIADIAcBUQAIgCAGAGQAHAGgEALQgFAIgJAAIgBAAg");
	this.shape_376.setTransform(-45.6,151.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.1,0,10.2,0).s().p("AhjBKQgFgPAMgLQAHgGAKAAQAKAAAHAHIBxhlQgGgIABgJQABgKAHgHQAMgKAPAGQAPAGABATQgDASgPAEQgOAFgLgKIhxBkQAJAMgGANQgGAOgSACQgTgDgEgQg");
	this.shape_377.setTransform(-149.7,76.6);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.6,0).s().p("AgeAYQgFgDAAgGQACgFAFgBQAFgBADAEIAogZQgCgEADgEQADgEAFAAQAGACABAGQAAAFgEADQgGADgFgFIgoAYQADAHgGAEIgEACIgEgCg");
	this.shape_378.setTransform(179,-25.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.3,0,8.3,0).s().p("AA0AoQgHgIADgKIhhgpQgEAJgLAAQgLABgGgLQgDgNAJgIQAIgHAKAFQAHACACAHQADAGgCAGIBgApQAEgGAGgCQAGgCAHACQAKAFABALQAAALgMAHIgGABQgIAAgFgGg");
	this.shape_379.setTransform(152.1,100.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.7,0,7.8,0).s().p("AAvA8QgGgEgBgHQgBgHAEgGIhXhDQgFAFgHAAQgHABgGgFQgJgGADgMQACgMANgDQAOAAAFAKQAFAKgGAJIBXBDQAHgIALACQALADADANQAAAOgLAFQgEACgEAAQgGAAgFgEg");
	this.shape_380.setTransform(123.2,108.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("AA9BEQgIgMAHgNIh5hRQgJALgOgDQgPgCgGgRQgBgSAOgIQANgIANAJQAIAFACAJQACAJgFAJIB6BRQAGgHAJgBQAKgCAIAFQAMAJgCAPQgCAQgRAGIgCAAQgQAAgIgMg");
	this.shape_381.setTransform(3.4,150.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.2,0,5.3,0).s().p("AAjARQgFgEABgGIg9gLQgCAEgGABQgHABgFgDQgDgHAEgGQAEgFAHABQAJACgBAKIA9ALQABgEAEgBQADgBAEABQAHAAACAFQABAHgGAFIgGACQgDAAgDgCg");
	this.shape_382.setTransform(99.1,-164.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.7,0,11.7,0).s().p("AhpApQgOgLAEgQQADgOAOgBQAKgCAHADQAIAEADAJICLgeQgBgJAFgHQAGgIAJgCQAOgDAJAMQAKAMgHAQQgLALgPgDQgNgCgFgMIiLAdQACAOgLAIQgGAFgIAAQgGAAgHgDg");
	this.shape_383.setTransform(49,-56.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.8,0,3.9,0).s().p("AATAoQgGgIAHgHIgogwQgDACgEAAQgFgBgCgDQgFgFADgGQADgHAIAAQAIACACAGQABAGgEAFIAnAwQAFgDAGACQAGADAAAIQgCAIgGABIgDABQgFAAgDgEg");
	this.shape_384.setTransform(-107,-61.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("ABDA0QgJgKAEgNIh9g1QgGAMgNAAQgOAAgIgOQgFgRAMgJQALgKAMAGQAJAEADAIQAEAIgDAIIB9A1QAEgHAIgDQAJgDAIADQANAGAAAOQABAPgPAIIgIABQgKAAgHgHg");
	this.shape_385.setTransform(190.5,-3.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AgkAVQgGgDABgGQAAgGAFgCQAEgBADABQADABACAEIAxgSQgDgIAIgDQAFgCAEAEQAFAEgCAGQgDAGgGgBQgFAAgDgFIgxASQACAFgEAEQgDADgEAAIgDgBg");
	this.shape_386.setTransform(87.2,-81.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.7,0).s().p("AAYBMQgKgGgBgKQAAgJAIgGIgshYQgJAEgIgGQgIgGACgMQAGgLALgBQAKAAAFAJQACAGgBAGQgCAHgFADIAsBYQAGgCAGACQAGACADAGQAEAJgGAIQgFAHgJAAIgFAAg");
	this.shape_387.setTransform(169.9,138);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.1,0,5.2,0).s().p("AguAbQgGgFACgIQAEgHAHAAQAGAAAEAGIA7gbQgDgGAFgFQAEgFAIACQAHAEAAAHQAAAHgGADQgKAEgEgJIg8AbQACAEgCADQgBAEgEACIgFACQgEAAgDgDg");
	this.shape_388.setTransform(124.1,77.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2.1,0).s().p("AgDBZQgKgEgBgMQAAgHAEgFQAFgFAFgBIgChsQgHgBgFgEQgFgFAAgHQgBgMAKgFQAKgGAKAIQAIAKgEALQgEAKgKABIADBsQALABAFAJQAEAKgHAKQgHAGgHAAQgCAAgDgCg");
	this.shape_389.setTransform(67.2,179.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.3,0).s().p("Ag3BpQgKgMAGgOQAEgIAIgEQAJgEAJADIA3iGQgIgEgDgJQgDgJAEgIQAGgOAPgBQAPgBAJAQQAEARgLAKQgKAKgNgFIg4CGQAMAHAAAOQABAPgPAIIgJACQgMAAgHgJg");
	this.shape_390.setTransform(106.5,18.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.9,0,11,0).s().p("AA2ByQgHgJAAgMQABgMAIgIIh1iNQgKAHgLgBQgMgCgHgJQgMgPAHgRQAIgSAXgBQAVAFAFASQAFARgMANIB1CMQAOgKAQAIQARAIABAWQgFAWgTAFIgIABQgNAAgKgLg");
	this.shape_391.setTransform(-25.4,-64.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AgPBTQgJgGABgKQABgHAFgEQAEgFAHAAIAKhmQgFgCgEgFQgEgGABgGQABgLAIgDQALgEAJAJQAGAKgFAJQgFAJgKAAIgKBnQAIACADAJQAEAKgJAJQgEAEgFAAQgFAAgEgDg");
	this.shape_392.setTransform(172.4,13.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.8,0,6.9,0).s().p("AAhCTQgTgDgFgSQgEgLAFgLQAFgLAKgEIg3iuQgMACgKgGQgKgGgEgLQgFgSANgNQAOgOAWAIQASAMgCATQgCASgQAHIA3CuQARgEAMANQANAOgHAVQgLAQgRAAIgFAAg");
	this.shape_393.setTransform(173.7,-28.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.3,0,1.3,0).s().p("AgKAsQgDgGADgFQACgFAGAAIADg3QgDgBgCgGQgCgFAFgFQAEgEAFADQAFADgBAGQAAAEgDACQgCADgEAAIgDA3QAGACgBAJQAAAGgFACIgCAAQgEAAgEgDg");
	this.shape_394.setTransform(17.1,123.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AgJCVQgPgSAGgRQAGgRAQgDIgNi6QgSAAgJgQQgJgRAMgTQARgQARAIQASAHABAUQABALgHAKQgIAJgJACIANC6QAMABAJAHQAJAJAAAMQACATgRAKQgHAEgIAAQgKAAgJgGg");
	this.shape_395.setTransform(24.2,118.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.3,0).s().p("AhLBBQgOgFgCgOQgCgNAMgGQAGgFAIACQAIABAFAHIBqhCQgDgHACgIQACgIAHgEQALgHALAHQAMAHgCAQQgFAOgNACQgMABgIgKIhqBCQAFALgGAKQgHAJgLAAIgEAAg");
	this.shape_396.setTransform(119.8,140.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AgfAjQgCgGADgFQAFgGAIAEIAhgtQgGgGAFgHQAEgFAGACQAGABACAHQAAAHgFACQgFADgFgDIgiAtQAFAEgCAGQgBAFgHACQgHAAgDgFg");
	this.shape_397.setTransform(98.3,18.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.5,0,10.6,0).s().p("ABCA1QgJgKAFgNIh8g3QgHAMgNAAQgNAAgIgPQgEgQALgKQALgJANAGQAIAEAEAIQADAIgDAIIB8A3QAEgHAIgDQAJgCAIADQAMAGABAOQAAAPgPAIIgIAAQgKAAgHgHg");
	this.shape_398.setTransform(117.6,147);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.7,0,2.8,0).s().p("AgYAsQgEgFADgGQAEgIAJACIAYg2QgIgFADgIQADgGAGAAQAHAAAEAGQABAHgFAFQgEAEgGgCIgYA2QAFADAAAGQAAAHgGADIgEAAQgEAAgEgDg");
	this.shape_399.setTransform(-96.8,38.8);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AAeAHQgEgCgBgFIgxAAQgBAFgEACQgFACgFgDQgDgFACgDQADgFAEAAQAIAAABAHIAxAAQABgHAIAAQAFAAACAFQADADgFAFQgCACgDAAIgEgBg");
	this.shape_400.setTransform(67.2,-4.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AgnAjQgCgGAFgFQAHgHAHAGIArguQgDgDAAgEQAAgFADgDQAFgFAGACQAHACABAIQgBAIgGACQgGADgFgEIgqAuQAEAFgCAGQgCAGgIABQgIAAgDgHg");
	this.shape_401.setTransform(-139.9,-126.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5,0).s().p("AgrCQQgLgUALgQQAJgPATABIAai7QgQgFgFgRQgFgTAPgQQATgLARAMQAQALgDATQgCAMgJAIQgJAIgMgBIgaC6QAJADAHAKQAHAKgCAMQgDAUgRAGQgFABgFAAQgOAAgLgMg");
	this.shape_402.setTransform(-118.8,-45.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14,0,14.1,0).s().p("ABaA/QgNgMAFgQIilg/QgIAPgRABQgSABgLgSQgGgVAOgNQANgMARAGQALAEAFALQAFAKgDALIClA+QAFgKALgEQAKgEALAEQARAGACATQACATgTAMQgGABgGAAQgMAAgJgJg");
	this.shape_403.setTransform(72.4,-47.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("AhmAQQgHgMAJgMQALgJANAEQALAEACALIB/gGQAAgNALgGQAMgGAMAJQALAMgGAKQgFAMgNABQgIABgGgFQgHgFgBgGIh/AGQAAAIgGAGQgFAGgIAAIgCAAQgMAAgGgKg");
	this.shape_404.setTransform(180.4,29);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AAMA1QgHgBgCgGQgCgEACgEQACgEAEgCIgTg+QgKACgDgKQgCgGAFgFQAFgFAIACQAGAFgBAHQAAAGgGADIATA+QAGgBAFAFQAEAFgCAHQgEAGgGAAIgCAAg");
	this.shape_405.setTransform(-161,48.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AgnANQgFgFACgGQABgDAGgBQAIgBACAGIAzgGQAAgEACgCQACgDAEgBQAFgBADAFQAEAFgDAEQgFAEgFgBQgFgCgBgDIg0AHQAAAFgEADQgBAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgFgBg");
	this.shape_406.setTransform(26.4,103);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AgeCQQgMgTAJgQQAIgQASgBIAJi4QgQgDgGgQQgHgSAPgQQAQgNASAKQAQAJgBATQAAAMgJAIQgJAIgLABIgJC4QAJACAIAJQAIAJgBAMQgBATgSAHQgEADgGAAQgMAAgMgKg");
	this.shape_407.setTransform(-39.7,-6.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.6,0,1.6,0).s().p("AgOAmQgCgFADgFQADgEAFABIAJgyQgEgBAAgFQgBgFADgEQAGgDAEADQAEAEgBAFQgCAIgHgBIgJAxQAFADgCAHQAAAGgEABIgCABQgEAAgEgFg");
	this.shape_408.setTransform(-192.2,76);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.lf(["#34FFFD","#267AB3"],[0,1],-0.8,0,0.9,0).s().p("AgDAoQgEgDAAgFQAAgHAHgBIAAgvQgGgBAAgHQAAgFAFgDQADgCAEAEQAEAFgCAEQgCAEgFABIgBAvQAFABABAEQACAFgDAFQgDACgCAAIgDgBg");
	this.shape_409.setTransform(30.6,41.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.1,0,12.2,0).s().p("ABCBvQgIgIgBgNQAAgMAHgJIiEiFQgKAIgMgBQgMAAgIgJQgOgOAGgSQAGgTAYgDQAWADAHASQAGARgLAOICFCFQAOgMARAHQASAHADAWQgDAXgTAHQgGACgFAAQgMAAgKgKg");
	this.shape_410.setTransform(88.8,156.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.7,0).s().p("AAABLQgGgIADgJQACgJAHgCIgOhcQgJAAgFgHQgGgIAFgKQAIgJAKADQAIADABAJQABAGgDAFQgCAFgFACIAOBcQAGAAAFAEQAFADAAAGQACAKgIAGQgEADgFAAQgEAAgGgDg");
	this.shape_411.setTransform(69.2,75.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.7,0).s().p("AAcABIg3gBQgBAIgIAAQgGAAgDgFQgCgDAEgGQAGgEAFACQAFADAAAFIA3AAQABgFAFgCQAFgCAGAEQAEAFgDAEQgDAFgFAAQgJAAgBgIg");
	this.shape_412.setTransform(-50.7,223.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AgSBhQgIgMAFgLQAFgLANgBIADh7QgKgCgEgLQgFgMAKgLQAKgJAMAGQAMAGgBANQAAAIgGAGQgGAFgIABIgEB7QAHABAFAHQAFAGgBAIQAAANgMAFQgEACgDAAQgIAAgHgHg");
	this.shape_413.setTransform(10.8,204.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AAdAbQgHgEADgJIgygaQgCADgEABQgDABgEgCQgFgCAAgHQAAgGAHgDQAHgBAEAFQADAEgCAFIAyAbQADgFAGABQAGAAADAGQABAIgFADQgDACgDAAIgFgBg");
	this.shape_414.setTransform(57,-165.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4,0).s().p("AgjANQgEgFABgFQABgDAFAAQAHgCACAFIAvgHQgBgHAHgCQAFgBADAFQADAEgCAFQgEADgFgCQgFgBgBgCIguAHQAAAFgEACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgEgBg");
	this.shape_415.setTransform(39.8,193.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("AhoBTQgFgQAMgMQAIgHAKAAQAKgBAIAHIB2hwQgHgIABgKQABgLAHgHQAMgMAQAGQARAHACAUQgDATgQAFQgPAGgMgLIh1BwQAKAMgGAPQgHAPgTADQgUgDgFgRg");
	this.shape_416.setTransform(27.1,-98.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.7,0,14.8,0).s().p("AiJA+QgOgPAHgVQANgTATACQARACAIAQICug7QgEgRANgMQANgNAVAGQATANgCAUQgDATgSAGQgLAEgLgFQgKgFgFgKIiuA7QACALgFAKQgGALgLAEQgGACgFAAQgMAAgJgJg");
	this.shape_417.setTransform(-11.7,110.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.9,0,12,0).s().p("ABYAxQgJgCgFgIQgFgIACgKIiOglQgDAIgJAFQgIADgJgBQgPgEgDgPQgDgQAPgLQAQgGAMAJQALAJgDAOICOAmQAFgNAOgDQAPgBALANQAHARgLAMQgIAIgKAAIgHgBg");
	this.shape_418.setTransform(132.2,115.3);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.4,0).s().p("AAfAJQgFgDAAgFIgzgBQgBAEgEACQgFACgFgEQgEgEADgEQADgFAFAAQAIABAAAIIAzAAQAAgCADgCQACgCAEAAQAFAAACAFQADADgFAFQgDADgDAAIgDgBg");
	this.shape_419.setTransform(-33.7,144.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.4,0,6.4,0).s().p("Ag1CKQgOgNAGgSQADgLAKgGQAKgGALACIAxitQgKgFgFgKQgGgLAEgLQAFgSATgDQATgDANASQAIAUgMAOQgMANgRgDIgxCuQAQAGACASQADASgRANQgJADgHAAQgLAAgJgIg");
	this.shape_420.setTransform(117.6,-22.3);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.1,0,8.1,0).s().p("ABAATQgGAAgFgFQgEgEgBgGIhggEQAAAFgFAEQgFAEgGAAQgKgBgEgJQgFgIAIgJQAKgGAJAEQAIAEAAAKIBhADQABgIAJgDQAJgEAJAHQAHAIgFAKQgFAIgIAAIgCAAg");
	this.shape_421.setTransform(184.7,69.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5,0).s().p("AgoAiQgIgDgBgHQAAgHAGgEQAEgCAEABQAEABADADIA4ghQgCgDACgFQABgEAEgCQAGgEAFAEQAGAEAAAJQgDAHgHABQgHAAgEgFIg4AhQADAGgEAFQgEAFgGAAIgCAAg");
	this.shape_422.setTransform(95.1,100.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.2,0,8.2,0).s().p("AhNAXQgHgJAGgLQAIgHAKADQAJABADAIIBhgTQgBgJAIgGQAIgGALAFQAJAJgDAKQgCAIgKACQgHABgFgDQgGgBgCgGIhhASQABAGgEAFQgDAGgHABIgEABQgHAAgFgHg");
	this.shape_423.setTransform(-99.8,-101.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AAXAgQgCgGADgFIgxgoQgEAFgGgCQgGgCgCgHQAAgIAHgDQAGgDAFAEQAHAGgFAIIAwApQADgDAFgBQAEAAADADQAFAEgBAHQgCAGgIACQgIAAgDgGg");
	this.shape_424.setTransform(31.7,147.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.5,0,13.5,0).s().p("ABXA5QgMgLAEgQIifg2QgHAOgQACQgSABgLgQQgGgUANgNQAMgNARAGQAKAEAFAKQAFAJgCAKICfA3QAEgJAKgFQAKgEALADQAQAGACASQACASgRALQgHACgFAAQgMAAgIgIg");
	this.shape_425.setTransform(-109.1,-171.2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6.1,0).s().p("AgpBXQgMgBgGgOQgBgOAKgHQAJgGAKAFIA8hlQgJgHABgLQABgMANgFQAPgCAHALQAHAKgHALQgEAGgHACQgHADgHgEIg7BlQAGAEABAIQACAHgEAHQgGAJgLAAIgCAAg");
	this.shape_426.setTransform(86.6,-38.3);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.5,0,1.5,0).s().p("AAAA2QgFgDAAgGQgBgEADgEQADgDACgBIgFhBQgEAAgDgCQgDgDgBgFQAAgGAGgEQAGgEAFAFQAFAFgCAHQgCAGgFABIAFBBQAGAAADAFQAEAGgFAHQgEAEgEAAIgEgBg");
	this.shape_427.setTransform(49.3,-188.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,4,0).s().p("AggAZQgGgDAAgGQAAgFAFgDQAGgDAFAGIAsgWQgCgIAGgDQAFgDAEADQAFAEgBAGQgDAGgFAAQgFAAgDgEIgsAXQACAEgDAEQgDAEgGAAIgBAAg");
	this.shape_428.setTransform(-81.6,138.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.3,0).s().p("AApAnQgEgCgCgGQgCgFACgEIhHgoQgDAEgFACQgFABgFgDQgIgEABgJQAAgJAKgEQAKgBAFAHQAEAGgDAIIBIAnQAEgGAIAAQAJABAEAJQABALgHAFQgEACgEAAQgDAAgEgCg");
	this.shape_429.setTransform(181.4,128.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.8,0,1.9,0).s().p("AgOBDQgGgIAFgIQADgHAJgBIAEhVQgGgBgDgIQgDgJAHgIQAHgFAIAEQAIAFgBAJQAAAFgEAEQgEAEgGAAIgEBWQADABAEAEQADAEAAAGQgBAJgIADIgDABQgGAAgGgFg");
	this.shape_430.setTransform(71.4,10.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AgXAqQgCgHAEgEQAFgEAGABIATg3QgEgDgBgGQAAgGAGgEQAHgCAEAFQAFAEgCAGQgDAJgKgDIgTA4QAHAEgDAJQgCAGgHAAIAAAAQgGAAgEgGg");
	this.shape_431.setTransform(191.9,6.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.7,0).s().p("AArAbQgGgFACgIIhNgZQgEAHgIABQgIABgGgIQgDgKAGgGQAGgGAIADQAFABADAFQACAEgBAGIBOAYQACgEAFgCQAFgDAFACQAIADABAIQABAJgJAGIgGABQgFAAgEgEg");
	this.shape_432.setTransform(-23.4,-186.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.5,0,10.5,0).s().p("AA6BfQgHgHgBgLQgBgKAHgIIh0hwQgHAHgLgBQgKAAgIgHQgMgMAGgQQAFgQAUgDQATACAGAQQAGAOgKAMIB0BwQAMgKAOAFQAQAGADATQgCAUgRAGQgFABgFAAQgKAAgIgHg");
	this.shape_433.setTransform(79.8,-138.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,3.9,0).s().p("AgjAQQgEgDACgGQADgFAFABQAFAAACAEIAtgPQgBgEADgDQAEgEAFACQAFADAAAFQgBAFgFACQgHACgDgGIgtAPQACAHgHACIgCABQgDAAgDgDg");
	this.shape_434.setTransform(-84.8,120.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AAOBcQgLgJABgLQABgLALgFIgihuQgLACgHgIQgIgJAEgNQAJgMAMABQAMACAEAMQACAHgDAHQgDAHgHACIAhBvQAHgCAHAEQAHAEACAHQADAMgIAIQgGAGgIAAQgEAAgFgCg");
	this.shape_435.setTransform(92.5,72.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.6,0,1.6,0).s().p("AgLArQgEgEABgFQABgJAIABIAJg0QgGgCABgIQABgGAEgBQAFgCAFAFQADAGgDAFQgDAEgGgBIgIA1QADABABAFQACAGgDAEQgDACgDAAQgCAAgDgCg");
	this.shape_436.setTransform(-83.3,-119.3);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.3,0).s().p("AhIBjQgQgEgDgSQACgSAOgGQANgGAMAIIBjhvQgKgLAEgOQAFgPARgDQATABAGAPQAGAPgKALQgHAHgJABQgKABgIgFIhjBvQAHAHAAAKQAAAKgGAHQgIAIgKAAIgIgBg");
	this.shape_437.setTransform(32.4,158.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.4,0,13.5,0).s().p("ABfBGQgLgEgEgKQgFgKAEgLIifhAQgFAJgLAEQgKAEgKgEQgRgHgBgSQgBgSATgLQAUgFAMANQALAMgFAQICeBAQAJgOAQgBQASAAAKARQAGAVgPAMQgIAHgKAAQgGAAgFgCg");
	this.shape_438.setTransform(45.4,214.4);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.4,0).s().p("AAYAeQgDgGADgFIgxgjQgEAFgFgCQgHgBgCgHQAAgIAGgDQAGgDAFAEQAHAFgEAIIAwAjQAHgGAHAFQAFAEgBAGQgBAHgHACIgBAAQgHAAgDgFg");
	this.shape_439.setTransform(137.1,169.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.4,0,8.4,0).s().p("AhCBYQgOgEgDgQQACgQANgGQAMgFAKAIIBbhjQgJgKAEgMQAEgNAQgDQARABAFAOQAFANgJAKQgGAHgJAAQgIABgHgFIhbBjQAGAGAAAJQAAAIgGAHQgHAHgJAAIgHgBg");
	this.shape_440.setTransform(111.3,-84.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.7,0).s().p("AgYAhQgCgEACgFQAEgHAHAEIAagqQgGgFADgGQADgFAGABQAFABACAFQABAHgFACQgEAEgEgDIgZApQAEADgBAFQgBAGgGACIgBAAQgFAAgDgEg");
	this.shape_441.setTransform(188.1,23.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6.1,0).s().p("AgsBNQgLgCgEgNQAAgNAJgGQAJgFAJAFIA+hXQgIgHACgLQADgKAMgEQANgBAGAKQAFAKgGAKQgEAFgHACQgHABgGgDIg+BXQAGAFAAAGQABAHgEAGQgFAIgKAAIgDAAg");
	this.shape_442.setTransform(-96.7,52.3);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.8,0).s().p("AAgAPQgFgDABgGIg3gKQgCAEgFABQgGABgFgDQgDgHAEgEQAEgFAFABQAJACgBAJIA3AKQADgGAIABQAGAAACAFQABAGgFAFIgGABQgDAAgCgCg");
	this.shape_443.setTransform(71.8,3.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AANAxQgGgBgDgGQgDgIAIgFIgTg5QgJACgEgIQgCgGAFgFQAFgFAHACQAGAEAAAHQgBAGgFACIATA6QAGgCAEAFQAFAEgCAHQgEAGgGAAIgBAAg");
	this.shape_444.setTransform(152,173);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.8,0,1.9,0).s().p("AgBA8QgGgGACgIQADgHAFgBIgHhKQgHAAgEgHQgEgGAEgIQAHgHAIADQAFADABAIQABAFgDAEQgDAEgDAAIAHBLQAFgBAEAEQADADABAFQABAHgHAFQgDACgDAAQgEAAgDgDg");
	this.shape_445.setTransform(53.6,187.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3,0,3,0).s().p("AgaA0QgEgFACgHQACgEAEgCQAFgCAEABIAZhCQgEgCgBgEQgCgEACgFQACgHAIAAQAIgBAEAIQADAIgFAFQgFAFgHgCIgaBCQAGADABAHQAAAHgIAFIgFAAQgFAAgEgEg");
	this.shape_446.setTransform(15.1,221.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.2,0).s().p("AAZAZQgEgEADgFIgwgdQgDAFgFgBQgGgBgDgGQAAgHAFgEQAFgDAFADQAHAFgEAIIAwAcQAFgHAHAFQAFADAAAGQgBAGgHACIgBAAQgGAAgCgEg");
	this.shape_447.setTransform(120.9,-1.1);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2.1,0).s().p("AgTApQgCgHAEgEQAEgEAFABIAPg1QgFgCgBgGQgBgGAGgEQAHgCAEAEQAEAEgBAGQgBADgEACQgDACgDgBIgPA1QAGAEgBAIQgCAGgFABIgCAAQgFAAgEgFg");
	this.shape_448.setTransform(-185.4,73.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.1,0,9.1,0).s().p("AAwBXQgHgHAAgJQAAgJAGgHIhihpQgHAFgKAAQgJgBgGgHQgLgLAGgOQAFgOASgCQARADAFAOQAFANgKALIBjBpQALgJANAFQAOAGACARQgDASgQAFIgHABQgKAAgHgIg");
	this.shape_449.setTransform(13.2,174.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AgYCWQgRgKACgTQABgMAIgIQAJgIAMAAIANi5QgKgCgHgJQgHgKAAgLQACgUASgHQAQgHARAPQAMATgJARQgIAPgSABIgNC4QAPADAGARQAGASgOAQQgKAHgJAAQgIAAgHgEg");
	this.shape_450.setTransform(113.2,112.4);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AgXAkQgBgHAEgDQAEgEAFACIAWgwQgFgDABgFQAAgFAGgDQAGgCAEAFQADAFgCAFQgEAHgHgDIgXAwQAHAEgDAHQgDAFgFAAIgBAAQgGAAgCgFg");
	this.shape_451.setTransform(106,-152.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.7,0).s().p("AgZAlQgBgHAEgDQAEgEAGACIAXgyQgEgDAAgGQAAgGAGgDQAHgBAEAFQAEAEgDAGQgEAIgIgEIgYAzQADACABADQACAEgCADQgDAGgGAAQgGAAgDgHg");
	this.shape_452.setTransform(-91.9,-64.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.5,0,5.5,0).s().p("AAjBbQgNAAgFgLQgEgGADgIQACgHAGgEIgzhqQgHACgHgCQgHgDgEgHQgFgLAHgKQAIgKAPADQAMAGABAMQAAAMgKAGIA0BqQAKgEAJAHQAKAIgDAOQgGANgMAAIgBAAg");
	this.shape_453.setTransform(71.2,-132.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.9,0,13.9,0).s().p("ABuAgQgLgBgIgHQgHgIgBgKIimgGQgBAJgIAHQgIAHgLgBQgRgBgHgPQgIgPAOgQQAQgLAQAIQAOAHABAQICmAGQACgOAPgGQAQgHAPANQAMAPgJAPQgIAPgPAAIgCAAg");
	this.shape_454.setTransform(19.9,211.7);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.9,0,4.9,0).s().p("AgtA9QgFgIAFgIQADgFAGgCQAFgCAGADIAwhOQgFgEgBgGQgBgGADgFQAFgIAKABQAKABAEALQABALgIAFQgHAFgJgEIgwBPQAHAFgBAJQgBAJgLAEIgCAAQgKAAgEgHg");
	this.shape_455.setTransform(-4.1,-69.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AAVApQgGgIAGgHIgrgxQgIAGgHgIQgFgFADgGQACgHAJgBQAIACACAGQACAGgFAFIAsAxQAFgEAGADQAHADAAAIQgBAIgHACIgDABQgFAAgEgEg");
	this.shape_456.setTransform(65.7,207.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.1,0,6.2,0).s().p("Ag1AfQgIgFABgIQAAgIAIgDQAFgCAEACQAFACACAEIBIgbQgBgFACgEQACgFAFgCQAHgDAGAGQAHAFgDAKQgFAIgIgBQgIAAgDgHIhIAbQACAIgFAFQgEAEgGAAIgFgBg");
	this.shape_457.setTransform(-4.4,-76.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10,0,10.1,0).s().p("ABABGQgIgFgCgIQgCgJAEgIIhyhLQgGAHgJABQgIABgIgFQgMgIACgOQACgOARgGQAQgBAHAMQAIALgHAMIBzBMQAIgLANADQAOACAGAPQABASgNAHQgGADgFAAQgHAAgGgEg");
	this.shape_458.setTransform(-11.8,-83);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.7,0,8.8,0).s().p("AhWA5QgCgNAKgIQAGgFAIABQAIAAAGAGIBihOQgEgGABgIQABgIAHgGQAKgIAMAGQAMAFAAAQQgDAPgNADQgMADgIgJIhjBOQAHAKgGALQgGALgPABQgPgEgDgNg");
	this.shape_459.setTransform(147.5,159.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.5,0,13.6,0).s().p("AhwBZQgVgIgBgUQgBgTAQgJQAKgGALADQALACAHAKICdhYQgEgLADgLQAEgLAKgGQAQgJAQALQAQALgDAWQgJATgSACQgSACgKgOIidBYQAHAQgKAOQgJANgQAAIgHgBg");
	this.shape_460.setTransform(-86.4,164);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.9,0,10.9,0).s().p("AhVB1QgTgFgEgWQACgVAQgHQAQgIAOALIB1iEQgLgMAFgQQAGgSAUgEQAWACAHASQAHARgMANQgIAJgLABQgLABgJgHIh2CEQAIAIAAALQAAAMgIAIQgJAKgLAAIgJgBg");
	this.shape_461.setTransform(44.3,80.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.lf(["#34FFFD","#267AB3"],[0,1],-15.6,0,15.6,0).s().p("AB3AzQgMgCgHgJQgIgKABgMIi6gdQgDALgKAGQgKAGgNgCQgTgDgFgRQgGgTARgQQAUgLAQALQAPAKgBASIC6AdQAFgPARgFQATgFAQAOQALAVgMARQgKANgPAAIgGgBg");
	this.shape_462.setTransform(-116,-142.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.1,0,1.2,0).s().p("AgDA4QgHgDAAgHQAAgFADgDQADgDAEgBIAAhDQgKgBAAgKQgBgHAHgDQAEgEAHAFQAFAHgDAGQgCAGgHABIAABDQAHABADAGQADAGgFAHQgEADgEAAIgDgBg");
	this.shape_463.setTransform(78.8,202.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.1,0,10.2,0).s().p("AhTBJQgQgGgBgPQgCgPAMgHQAIgFAIACQAJABAGAHIB0hJQgEgIACgJQADgIAHgFQANgIAMAIQANAIgCARQgFAPgPACQgNACgIgLIh1BKQAGAMgHALQgIALgOAAIgDAAg");
	this.shape_464.setTransform(172.3,25.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AgVAnQgEgFADgFQADgHAIACIAVgwQgHgFAEgHQACgFAGAAQAGAAADAGQABAGgEAEQgEADgFgCIgVAxQAEADAAAFQAAAGgGADIgDAAQgFAAgCgDg");
	this.shape_465.setTransform(96.5,136);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AghBSQgFgMAHgJQAHgJAKACIAahsQgLgEgBgKQAAgLAIgJQANgGAJAIQAJAIgDALQgCAHgGAEQgGAEgHgBIgZBsQAHACADAGQABAHgBAHQgCALgLACIgFABQgJAAgGgJg");
	this.shape_466.setTransform(50.1,-144.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.5,0).s().p("AgpAGQgEgGACgDQADgFAFAAQAIAAABAIIA1AAQABgIAIAAQAFAAADAFQACADgEAGQgFADgFgCQgFgCAAgFIg1AAQAAAFgFADIgDABQgEAAgDgDg");
	this.shape_467.setTransform(-174.4,27.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AAQAsQgCgDAAgFQABgEADgDIglg3QgJAEgGgIQgEgGAEgGQAEgHAIABQAIADABAGQABAHgFAEIAlA4QAGgDAGADQAGAEgBAIQgCAIgIABIgCAAQgGAAgDgFg");
	this.shape_468.setTransform(-57.1,216.7);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.3,0,2.4,0).s().p("AgUBCQgFgKAFgHQAFgHAIABIAMhVQgGgCgCgIQgCgJAFgHQAKgFAHAFQAHAGgBAIQgBAGgEADQgFAEgFgBIgMBVQAEABACAFQADAFgBAFQgBAJgHADIgEABQgHAAgFgGg");
	this.shape_469.setTransform(188.1,39);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.7,0).s().p("Ag8AVQgHgHACgIQADgHAIgBQAFgBAEADQAFABABAFIBPgNQgBgFADgEQAEgFAFAAQAIgCAFAHQAFAHgFAJQgGAFgIgCQgIgCgCgGIhOANQAAAIgGAFQgEACgEAAQgEAAgEgCg");
	this.shape_470.setTransform(-190.8,85);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AglALQgEgEACgFQABgDAFgBQAIgBACAFIAwgFQgBgIAIgBQAFgBADAFQADAEgDAEQgEAEgFgBQgFgCgBgCIgwAFQAAAFgEACQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgFgCg");
	this.shape_471.setTransform(64.7,124.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.6,0).s().p("Ag5CAQgTgBgIgUQgDgUAOgKQAOgKAPAHIBUiVQgOgKACgQQACgRASgJQAVgDALAQQAKAOgJAQQgFAJgLAEQgKADgKgEIhUCUQAJAHACAKQADALgGAKQgIAOgQAAIgCAAg");
	this.shape_472.setTransform(127.2,-91.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.6,0,1.7,0).s().p("AgLAzQgFgEABgHQABgJAKAAIAHg+QgHgCABgKQABgGAEgCQAHgDAGAGQADAHgDAFQgDAGgHgBIgHA/QAEABACAGQACAGgGAGQgBACgEAAQgDAAgDgCg");
	this.shape_473.setTransform(140.7,59.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.7,0,7.7,0).s().p("AhHAfQgHgHADgMQAHgJAKABQAJABAEAIIBagdQgCgJAHgGQAHgHALAEQAKAGgBALQgCAKgJADQgGACgGgDQgGgDgCgFIhaAdQABAGgDAGQgDAFgGACIgFABQgGAAgFgFg");
	this.shape_474.setTransform(56.1,100);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.9,0,2.9,0).s().p("AgVBNQgIgGACgKQABgGAFgEQAFgDAHAAIARhgQgGgBgCgGQgDgFACgGQABgKAJgDQAKgDAIAKQAFAKgGAIQgFAIgKgBIgRBgQAHADACAJQACAJgHAIQgFADgFAAQgFAAgEgEg");
	this.shape_475.setTransform(-17.5,36.6);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2.1,0).s().p("AAAA8QgEgGACgIQACgHAFgCIgLhIQgHAAgEgGQgEgGAEgIQAGgHAIACQAGADABAHQABAFgDAEQgCAEgDABIAKBJQAFgBAEADQAEADAAAFQABAIgGAEQgDADgEAAQgEAAgEgCg");
	this.shape_476.setTransform(-67.8,-15.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.lf(["#34FFFD","#267AB3"],[0,1],-12.5,0,12.6,0).s().p("ABVAqQgMgJACgPIiVgfQgFANgOACQgPADgMgLQgJgRALgNQAKgNAPAEQAKACAFAIQAGAIgBAJICVAfQADgJAIgEQAJgEAJACQAQACADAPQAEAQgOAMQgIAEgGAAQgIAAgHgFg");
	this.shape_477.setTransform(86.3,179.2);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.7,0).s().p("AgwAfQgIgFABgHQAAgIAHgDQAEgCAFACQAEABACAEIBCgbQgBgFACgEQABgEAFgCQAGgDAGAFQAGAFgCAIQgEAIgIAAQgHAAgDgGIhCAbQADAHgFAFQgEAEgGAAIgEAAg");
	this.shape_478.setTransform(-41.3,-217.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.5,0,3.5,0).s().p("AgKCGQgNgQAGgQQAFgPAPgDIgJioQgRAAgHgPQgIgPALgQQAQgOAOAHQARAGABASQAAALgHAIQgGAIgJACIAJCoQALAAAHAIQAIAHABALQABASgPAIQgHAEgHAAQgIAAgJgGg");
	this.shape_479.setTransform(-135.7,-61.6);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.2,0,8.3,0).s().p("AA8AmQgHgCgDgGQgDgGABgGIhgggQgDAGgGADQgGADgGgCQgKgEgCgKQgBgLAKgHQAMgEAIAHQAHAHgCAJIBgAgQAFgJAKgBQAKgCAHALQAEAMgIAHQgFAGgHAAIgFgBg");
	this.shape_480.setTransform(129.1,158.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.5,0,7.6,0).s().p("AhICDQgGgVANgOQANgNARAFIBBiwQgQgIgCgSQgBgUATgMQAXgHAOAPQANAPgHASQgEALgLAFQgLAGgLgDIhBCwQALAFAEALQAFALgEAMQgHASgUACIgDAAQgSAAgLgSg");
	this.shape_481.setTransform(47.9,178);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.3,0,10.4,0).s().p("AA+A7QgIgKAFgNIh3hEQgIALgOgBQgOgBgGgPQgDgRANgJQAMgIAMAHQAIAFADAIQADAJgEAIIB4BDQAFgHAIgCQAJgCAIAFQAMAHgBAOQgBAPgQAHIgEAAQgNAAgHgKg");
	this.shape_482.setTransform(167.3,33.4);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.5,0).s().p("Ag7A5QgMgEgCgLQgBgKAIgHQAGgDAHAAQAGABAEAGIBVg7QgEgGACgGQABgHAGgEQAIgHAKAGQAKAFgBANQgDAMgLACQgKACgGgIIhVA7QAFAKgFAIQgFAJgMAAIgBgBg");
	this.shape_483.setTransform(44.8,-180);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.3,0,11.3,0).s().p("ABYAdQgIgBgGgGQgGgHAAgIIiHgJQgCAHgGAFQgHAGgJgBQgOgBgFgNQgGgMAMgMQANgJAMAHQAMAGAAANICHAIQACgLANgEQANgFAMALQAJAMgHAMQgHAMgNAAIgCAAg");
	this.shape_484.setTransform(-22.5,-138.6);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.9,0,2,0).s().p("AgMBCQgHgEABgJQAAgFAEgDQAEgEAFAAIAHhRQgDgBgDgFQgDgEAAgFQABgJAGgDQAJgDAHAHQAFAJgEAHQgEAHgIAAIgHBRQAGACACAIQADAIgHAHQgCADgEAAQgEAAgEgDg");
	this.shape_485.setTransform(46,225.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.8,0,10.8,0).s().p("AA/BZQgIgHgBgKQgBgKAGgIIh5hmQgHAHgKABQgKAAgIgGQgNgLAEgQQAEgRATgEQATABAHAPQAHAOgJAMIB5BmQALgLAPAEQAPAFAEASQAAAUgQAHQgGACgFAAQgJAAgIgGg");
	this.shape_486.setTransform(2,-6.3);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.7,0,3.8,0).s().p("AAXAcQgDgCAAgDQgBgEACgDIgqgfQgCADgEAAQgDABgDgDQgEgDABgFQABgGAHgCQAGAAADAFQACAFgDAEIAqAfQADgEAGABQAFACACAGQAAAHgFACIgFACQgDAAgCgDg");
	this.shape_487.setTransform(-59,-80.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4,0).s().p("AgXCZQgRgKABgTQABgMAJgJQAJgIAMAAIALi9QgKgCgHgJQgIgJABgNQABgTASgHQARgIASAPQAMATgJARQgJAQgSABIgLC8QAQADAGARQAGASgOARQgLAHgIAAQgIAAgIgEg");
	this.shape_488.setTransform(-95.3,-129);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.5,0).s().p("AhIBAQgEgMAIgJQAFgFAIgBQAIAAAGAEIBQhVQgFgFAAgIQAAgIAFgFQAJgJAMADQAMAEACAPQgCAOgLAEQgKAFgJgHIhRBVQAIAJgEAKQgEAMgOACQgOgBgFgMg");
	this.shape_489.setTransform(131.5,103);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.3,0,6.4,0).s().p("AAmAzQgFgEgBgGQgBgGAEgFIhHg5QgKAKgLgIQgHgHACgJQACgKALgCQALAAAFAJQAEAIgFAHIBGA5QAHgHAIADQAJACADALQAAALgJAFQgDABgEAAQgFAAgEgDg");
	this.shape_490.setTransform(-136.5,101.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.3,0,2.3,0).s().p("AgMBlQgJgMAFgMQAFgMALgBIgCh/QgMgBgFgLQgGgMAJgMQAMgKALAGQAMAGAAANQAAAIgFAGQgFAGgJABIADB/QAIABAGAFQAGAGAAAIQAAAOgMAGQgFACgFAAQgFAAgIgFg");
	this.shape_491.setTransform(135.7,132.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.8,0,6.9,0).s().p("Ag/BeQgIgMAHgMQAFgIAIgDQAIgDAJAEIBCh5QgHgGgDgIQgCgJAFgIQAHgMAOAAQAPABAHAQQACAQgLAJQgLAIgMgFIhCB5QALAIgBANQgCAOgPAHIgFABQgOAAgHgLg");
	this.shape_492.setTransform(16.5,43.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.6,0,2.7,0).s().p("AAJAmQgEgIAHgEIgYgxQgDABgEgBQgDgBgCgEQgDgFAEgEQAEgFAHABQAFADABAFQAAAGgEADIAXAxQAFgCAFADQAEAEgBAGQgDAHgGAAQgGAAgCgFg");
	this.shape_493.setTransform(-138.9,171.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AgfAcQgCgFAEgEQAFgGAGAFIAkglQgGgGAGgFQAEgEAFABQAGACAAAHQAAAGgFACQgFACgEgDIgjAkQADAEgCAFQgCAFgGABQgGAAgCgGg");
	this.shape_494.setTransform(99.8,63.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.2,0,8.2,0).s().p("AhQAyQgDgMAKgHQAGgFAIABQAGABAGAFIBdhFQgFgGABgHQACgIAGgEQAKgIAKAGQAMAFAAAPQgEAOgMACQgKADgIgJIhdBFQAGAKgFAKQgHAKgNAAQgOgEgCgMg");
	this.shape_495.setTransform(162.9,95.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.1,0,8.1,0).s().p("Ag7BlQgQgCgFgRQAAgRANgIQAMgHAMAHIBUhzQgLgJADgOQADgOARgFQASgBAHAOQAHANgJAMQgFAIgJACQgJABgIgEIhUBzQAHAGABAJQABAJgGAIQgHAJgLAAIgFAAg");
	this.shape_496.setTransform(6.1,-205.6);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.2,0,14.3,0).s().p("AiAAwQgRgOAFgSQAEgQASgDQALgCAKAFQAJAEADAKICqghQgBgLAGgJQAHgJALgCQARgDALAOQAMAOgKAUQgNANgSgEQgQgDgFgOIiqAhQACAQgNAKQgIAGgJAAQgIAAgIgEg");
	this.shape_497.setTransform(111.2,177.9);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.3,0,1.3,0).s().p("AgHAwQgGgDABgGQABgJAJAAIADg7QgCAAgCgDQgDgDABgEQABgGAEgCQAFgDAGAFQADAGgDAGQgCAFgGAAIgDA6QADABACAFQACAGgEAFQgDACgCAAQgCAAgDgBg");
	this.shape_498.setTransform(41.9,-87.6);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1.4,0,1.4,0).s().p("AgJAoQgFgDABgGQACgHAHAAIAHgwQgFgCABgIQABgFADgBQAFgCAEAFQADAFgDAFQgCAEgFgBIgHAxQADABABAFQABAFgDAEIgEABQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAg");
	this.shape_499.setTransform(-116.3,-149.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.6,0).s().p("AAfAOQgFgDABgFIg1gJQgCADgFABQgGACgEgDQgDgGADgFQAEgFAFABQAJACgBAIIA1AJQADgGAIABQAGABABAEQACAGgFAFIgGABQgDAAgCgCg");
	this.shape_500.setTransform(135.4,-19.4);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.7,0,2.8,0).s().p("AgFBiQgJgLAEgMQADgLAKgDIgJh5QgMAAgFgLQgGgLAHgMQALgKALAFQAMAEABANQABAIgFAGQgFAGgGABIAJB6QAIAAAGAGQAGAFAAAIQABAMgKAHQgGADgGAAQgGAAgFgEg");
	this.shape_501.setTransform(151.7,1.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.5,0).s().p("AgVA9QgEgIAFgHQAFgHAIABIAOhPQgHgDgBgHQgCgJAGgGQAJgFAHAGQAHAFgCAIQgBAFgEAEQgEADgGgBIgOBQQAFABABAFQADAEgBAFQgCAJgGACIgEAAQgHAAgFgGg");
	this.shape_502.setTransform(45.3,154.4);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.9,0,10.9,0).s().p("AhYBQQgRgGgCgQQgCgQAMgIQAIgFAKABQAJACAGAHIB9hSQgEgIACgJQACgKAIgFQANgJAOAIQAOAIgCATQgGARgPACQgOADgJgMIh9BSQAHANgIAMQgIANgPAAIgDgBg");
	this.shape_503.setTransform(54.2,218.3);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AgoAWQgFgEACgHQAEgGAGAAQAFAAADAFIAzgUQgCgGAEgEQADgEAHACQAGADAAAGQAAAGgGACQgHAEgFgIIgzAVQADAIgIADIgEABQgDAAgDgCg");
	this.shape_504.setTransform(-18.5,130.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.8,0,7.9,0).s().p("Ag4BoQgQgCgFgRQgBgRANgIQALgHANAGIBQh3QgLgJADgOQACgOAQgGQASgBAIAOQAIANgJAMQgFAIgKACQgIACgJgEIhQB3QAHAFACAKQABAJgFAIQgIAKgLAAIgEAAg");
	this.shape_505.setTransform(-85.2,97.6);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.6,0).s().p("AgoAPQgGgEACgGQABgFAGAAQAIgBADAFIA1gJQgBgJAJgBQAFgBAEAEQADAFgDAGQgEADgFgBQgGgBgBgDIg2AJQABAGgFADQgCACgDAAIgFgCg");
	this.shape_506.setTransform(101,79.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6,0,6.1,0).s().p("AAaCOQgSgDgFgSQgDgLAFgKQAFgKALgEIguipQgLACgKgGQgJgGgDgLQgFgSAOgMQAOgNAUAJQAPAMgBASQgCARgQAGIAtCqQARgDALANQALAOgHATQgLAPgPAAIgGgBg");
	this.shape_507.setTransform(-120.4,154.6);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.9,0,9,0).s().p("ABGAVQgHAAgFgFQgEgFgBgHIhqgEQgBAFgFAEQgGAFgHgBQgLgBgEgKQgEgIAIgKQALgHAKAFQAJAEAAALIBqAEQACgJAKgDQAKgEAKAIQAHAJgGAKQgFAJgJAAIgCAAg");
	this.shape_508.setTransform(177.2,138.8);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.6,0,10.7,0).s().p("ABFAsQgJgJADgMIh+gpQgFALgNABQgNACgJgNQgGgQALgKQAJgKANAFQAIACAFAIQAEAHgCAJIB9ApQAEgIAHgDQAIgEAIADQANAFACANQACAOgOAKIgJABQgJAAgHgGg");
	this.shape_509.setTransform(55.2,-102.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.3,0).s().p("AAOAnQgFgIAHgGIghgwQgIAEgFgHQgDgFADgGQADgGAHABQAHACABAGQABAGgEAEIAgAwQAFgDAFADQAGAEgBAHQgCAHgGABIgCAAQgFAAgDgEg");
	this.shape_510.setTransform(42.5,55.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.1,0,6.1,0).s().p("Ag3BZQgJgKAHgMQADgIAIgDQAIgDAIADIA5hyQgHgEgCgIQgCgIAEgHQAGgMANAAQAOAAAHAPQADAPgKAIQgKAIgMgFIg6ByQALAHgBANQgBANgNAHIgGAAQgMAAgGgJg");
	this.shape_511.setTransform(-128.3,-36.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.7,0).s().p("AASAeQgCgFADgFIgngmQgEADgFgBQgGgCgBgHQABgHAGgCQAFgCAFAEQAGAGgGAHIAoAmQAGgGAGAGQAFAEgCAGQgCAGgHABQgHgBgCgFg");
	this.shape_512.setTransform(181,90);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AgQCWQgRgIABgUQAAgLAIgJQAIgIAMgBIAEi4QgLgCgIgJQgIgJAAgLQABgUARgIQAQgIASAOQANASgIARQgIARgSABIgEC4QASACAHARQAHARgOARQgKAIgJAAQgHAAgIgEg");
	this.shape_513.setTransform(162,-47.1);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.7,0,13.8,0).s().p("AhzBUQgUgKgBgTQAAgTARgIQAKgFALACQALAEAGAJICghQQgEgLAEgKQAEgLAKgGQARgIAPALQAQAMgFAWQgJATgSABQgSABgJgPIigBQQAGARgLANQgJALgPAAIgIAAg");
	this.shape_514.setTransform(-13.8,-43.7);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.9,0,14,0).s().p("Ah1BZQgVgKAAgUQgBgTARgJQAKgFAMADQALACAHAKICihWQgFgLAEgLQAEgMALgFQAQgJAQALQAQAMgDAWQgKAUgSABQgSACgKgPIijBWQAHARgKAOQgKAMgRAAIgHAAg");
	this.shape_515.setTransform(-109.6,4.9);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.2,0,3.3,0).s().p("AAPA5QgIgEAAgIQAAgHAHgDIgdhDQgHACgFgFQgGgFACgJQAFgIAIAAQAIABADAHQAEAKgJAGIAcBDQAEgCAFACQAEACACAEQADAHgFAGQgEAFgGAAIgEgBg");
	this.shape_516.setTransform(-5.1,-144.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.7,0,4.7,0).s().p("AAbAbQgDgFACgFIg1gfQgDAFgGgBQgHAAgDgHQgBgIAGgEQAFgDAGADQAIAFgEAIIA1AfQAHgIAHAFQAGADAAAHQgBAHgHADIgCAAQgGAAgEgFg");
	this.shape_517.setTransform(-6.6,-62.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.9,0,3,0).s().p("AAMAcQgBgFAEgDIgegmQgEADgEgDQgFgCAAgGQACgGAFgBQAFgCADAFQAEAGgFAFIAeAmQACgCAEABQADABACACQADAEgCAFQgDAFgGAAQgFgCgCgFg");
	this.shape_518.setTransform(0.4,46.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7,0,7.1,0).s().p("AAtBdQgPgFgCgNQgCgMAJgIIhIhrQgLAGgLgGQgLgHABgQQAFgPAOgCQANgCAIALQAEAHgBAIQgBAIgGAGIBIBqQAHgEAIACQAIACAFAHQAHALgGAMQgHALgOAAIgCAAg");
	this.shape_519.setTransform(61.5,-120.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.6,0,4.7,0).s().p("AALCGQgOgEgDgRQgCgLAGgIQAEgJAKgDIgciiQgKABgJgGQgIgHgCgKQgDgRAOgKQAOgLASAKQANANgEAQQgEAQgOAEIAcCiQAQgBAJANQAJAOgJARQgKAMgMAAIgJgCg");
	this.shape_520.setTransform(142.3,170.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.lf(["#34FFFD","#267AB3"],[0,1],-10.7,0,10.7,0).s().p("AhpBDQgDgQAMgJQAIgGAKABQAJABAHAHIB5hdQgFgIABgKQACgJAIgGQAMgKAPAHQAOAHABATQgFASgPAEQgPADgKgLIh5BcQAIANgHANQgHAOgTAAQgSgFgDgQg");
	this.shape_521.setTransform(-11.3,152.5);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2,0).s().p("AAKApQgGgBgCgFQgCgIAHgDIgPgvQgIACgCgHQgCgFAEgEQAEgEAGACQAFADgBAFQAAAFgFACIAQAwQAFgBADADQAEAEgCAGQgDAFgFAAIgBAAg");
	this.shape_522.setTransform(56.2,130);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.2,0).s().p("AA3CCQgUgIgCgSQgDgRAOgKIhciWQgPAHgOgJQgPgLACgUQAHgVATgBQATgCAJAPQAGAKgCALQgCAKgJAIIBcCWQAKgFALADQALADAGAKQAJAQgJAOQgJAPgTAAIgEAAg");
	this.shape_523.setTransform(-72.5,-83.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.5,0,13.6,0).s().p("ABaAzQgNgLADgQIihgrQgFAPgQADQgRABgMgOQgIgUAMgNQALgNARAFQAKADAGAJQAGAJgCAKIChArQAEgKAJgEQAJgFALACQAQAFAEARQADASgRAMQgHADgHAAQgJAAgIgGg");
	this.shape_524.setTransform(134,40.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AAUAtQgDgEAAgEQABgFADgDIgqg3QgKAFgGgIQgFgFAEgHQADgHAJAAQAIACACAHQABAHgFAFIArA3QAGgEAGADQAGAEAAAIQgCAJgIABIgDAAQgFAAgDgEg");
	this.shape_525.setTransform(-172.4,-49.9);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.3,0,13.3,0).s().p("ABZAvQgMgKACgQIiegkQgFAPgQABQgQADgMgNQgJgTAMgNQALgNAQAEQAKACAGAJQAGAJgCAKICeAkQAEgKAJgEQAJgDAKABQARADADAQQAEASgQAMQgIADgGAAQgJAAgIgFg");
	this.shape_526.setTransform(181.4,82.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.9,0,3,0).s().p("AgaAxQgEgGADgGQABgEAEgCQAEgCAFACIAZg+QgIgFADgJQADgHAHAAQAIAAAEAHQACAIgGAFQgEAEgHgCIgaA+QAGADAAAGQAAAHgHAEIgEABQgFAAgEgEg");
	this.shape_527.setTransform(44.6,24.9);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.8,0).s().p("AglAxQgIgCgCgKQABgJAIgDQAGgDAGAFIAzg2QgEgGACgHQADgHAJgCQAJABADAIQADAHgGAGQgDADgFABQgFAAgEgDIgzA2QADAEAAAFQAAAFgDADQgEAFgFAAIgEgBg");
	this.shape_528.setTransform(117.6,90.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.8,0,2.9,0).s().p("AgXA/QgGgFACgJQACgFAEgDQAEgCAGAAIAVhOQgFgDgDgEQgCgFABgFQADgJAIgBQAJgCAGAJQAEAJgGAHQgFAGgIgCIgVBPQAIADABAIQAAAJgGAFIgIACQgFAAgEgEg");
	this.shape_529.setTransform(142.3,130.4);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.2,0,2.2,0).s().p("AgQBZQgIgLAGgKQAFgKAKgBIADhxQgJgBgEgLQgEgKAIgLQAKgIALAGQAKAFAAAMQgBAIgFAFQgFAFgHAAIgEBxQAGABAFAGQAFAFgBAIQAAALgLAFQgEACgCAAQgHAAgHgGg");
	this.shape_530.setTransform(137.8,31);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AAZAnQgEgDAAgEQAAgEACgEIgwgtQgIAGgHgHQgFgFACgGQACgHAJgCQAIABACAHQADAGgEAFIAwAuQAFgFAGADQAHACABAIQgBAIgHADIgEABQgEAAgDgEg");
	this.shape_531.setTransform(-129.3,96.6);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.2,0,6.3,0).s().p("AAsANQgHgDAAgIIhJgCQgBAGgHADQgHACgHgFQgFgGAEgHQADgHAIABQALABABALIBJABQABgJAMAAQAIABADAHQADAFgGAHQgEADgEAAIgGgBg");
	this.shape_532.setTransform(-42.1,135.9);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.1,0,5.1,0).s().p("AASBqQgNgJABgNQABgOAMgFIgpiAQgNADgJgKQgJgKAFgPQAJgOAPACQAOACAEANQADAJgEAHQgDAIgIAEIApCAQAJgCAHAEQAIAEADAIQAEAOgKAKQgHAGgIAAQgGAAgFgCg");
	this.shape_533.setTransform(-82.4,89.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.2,0,3.3,0).s().p("AgFBvQgLgMAFgOQAEgNALgCIgMiKQgNAAgHgMQgHgMAJgOQAMgMAOAFQAMAFABAOQABAJgFAHQgGAHgGACIAMCKQAIAAAHAGQAHAGABAJQABAOgMAIQgGADgHAAQgHAAgGgEg");
	this.shape_534.setTransform(51.9,36.8);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.9,0,4,0).s().p("AAYATQgDgDABgFIgtgTQgCAEgFAAQgFAAgDgGQgBgGAEgDQAEgEAFADQADABABADQABADgBADIAtATQADgGAIADQAEACABAFQAAAGgGADIgDAAQgEAAgCgDg");
	this.shape_535.setTransform(128.2,5.9);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.lf(["#34FFFD","#267AB3"],[0,1],-1,0,1.1,0).s().p("AgBAmQgEgEACgFQABgEADgBIgCgvQgFAAgCgEQgCgEADgFQAEgEADACQAEACABAFQAAADgCACQgCADgBAAIADAvQAHAAAAAHQABAFgEADIgFABQgCAAgBgCg");
	this.shape_536.setTransform(90.6,-73.2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.8,0).s().p("Ag1AZQgFgGACgIQAFgHAIAAQAHABADAGIBCgXQgBgHAFgFQAFgFAIADQAIAEgBAIQgBAIgHACQgEACgFgCQgEgCgCgEIhDAXQADALgKAEIgEAAQgFAAgEgDg");
	this.shape_537.setTransform(123.7,99.6);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.lf(["#34FFFD","#267AB3"],[0,1],-14.6,0,14.7,0).s().p("ABnBMQgLgFgFgLQgFgKADgMIishGQgFAKgMAEQgLAFgLgFQgSgHgBgUQgBgUAUgLQAVgGANAOQANANgGARICsBHQAJgQASgBQATAAALATQAGAWgPAOQgJAIgKAAQgGAAgHgDg");
	this.shape_538.setTransform(36.4,-97.4);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.5,0,2.5,0).s().p("AgVBLQgFgKAFgJQAFgIAJAAIAMhgQgHgCgDgJQgDgKAIgIQAJgGAJAGQAIAGgBAKQgDAOgOAAIgMBgQAEABAEAFQAEAFgBAHQgBAKgIADIgFABQgIAAgGgGg");
	this.shape_539.setTransform(70.2,117.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AATCGQgQgEgDgRQgCgKADgJQAGgJAKgEIgmigQgKABgJgFQgJgGgCgLQgEgQANgLQAOgMATAJQANAMgDARQgBAQgPAFIAlCgQAQgCAJAMQALAOgIASQgLANgNAAIgHgBg");
	this.shape_540.setTransform(133.4,-41);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.1,0,7.2,0).s().p("AArAnQgGgHAEgJIhSgrQgFAIgJgBQgKgBgEgKQgCgMAIgFQAIgGAJAFQAFACACAGQACAGgDAFIBSAsQAEgFAFgCQAGgBAGADQAIAFAAAJQgBALgKAEIgEABQgIAAgFgHg");
	this.shape_541.setTransform(69.1,105);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.8,0,3.9,0).s().p("AAOAzQgCgEABgFQABgFAEgDIglhCQgEACgFgBQgFgCgCgEQgEgHAEgGQAFgHAKABQAIAEABAIQABAHgHAEIAlBCQAHgDAGAEQAGAFgBAJQgEAJgIAAIgBAAQgHAAgEgGg");
	this.shape_542.setTransform(3.3,-107.6);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.3,0,8.3,0).s().p("AAtA8QgFgKAGgKIhdhMQgIAJgLgDQgMgEgEgOQABgPAMgFQALgGAKAIQAGAFABAIQABAIgEAGIBdBMQAFgGAIAAQAHgBAHAFQAJAJgDAMQgDANgOADQgPgBgFgLg");
	this.shape_543.setTransform(149.4,-28.5);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.4,0,9.4,0).s().p("AhKBiQgQgFgDgTQACgRAOgGQAOgGALAJIBmhtQgKgLAFgOQAFgPASgDQASACAGAQQAFAOgKALQgHAHgJABQgKABgIgGIhlBtQAGAHAAAKQAAAKgHAHQgHAIgKAAIgIgBg");
	this.shape_544.setTransform(-58.3,-21.7);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.9,0).s().p("AAdBEQgLgEgBgJQgBgJAHgGIgvhOQgIAEgIgFQgIgFABgLQAEgLAKgBQAKgBAFAIQADAFgBAGQgBAGgFADIAwBPQAFgDAGACQAFABAEAFQAFAJgFAIQgFAHgJAAIgDAAg");
	this.shape_545.setTransform(134.1,-1.5);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.5,0,8.5,0).s().p("AAvCBQgSgIgCgSQgBgQAOgKIhTiXQgQAHgNgKQgOgKACgVQAJgUATgBQASAAAIAPQAGAKgDALQgDAKgJAHIBTCXQAKgFALAEQALADAFAKQAIAQgKAOQgIANgRAAIgHgBg");
	this.shape_546.setTransform(49.6,170.8);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8,0,8.1,0).s().p("AAyAnQgGgHADgKIhegoQgFAJgKAAQgKAAgGgLQgDgMAIgHQAIgHAKAEQAHADACAGQADAGgCAGIBdAoQADgFAHgDQAGgCAGADQAKAEAAALQABALgMAGIgGABQgIAAgFgGg");
	this.shape_547.setTransform(109.2,131.9);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11,0,11.1,0).s().p("AhpAYQgJgMAJgNQALgLANAEQANAEADALICDgQQAAgNALgHQALgHAOAIQAMAMgFANQgEALgOACQgIABgHgFQgHgEgCgHIiEAQQAAAIgFAHQgGAGgIABIgEAAQgLAAgGgJg");
	this.shape_548.setTransform(114.4,11.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.7,0,5.7,0).s().p("AgrCTQgQgMAEgTQADgMAKgHQAJgHAMABIAli3QgLgEgFgKQgFgKACgMQADgTASgFQATgFAPASQAKAUgLAPQgLAPgSgCIglC3QAPAGAEASQAEATgPAOQgJAFgIAAQgLAAgIgHg");
	this.shape_549.setTransform(134.7,17);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.9,0,7.9,0).s().p("AhDA+QgLgGAAgOQAEgMALgDQALgCAHAIIBZhDQgGgJAGgKQAFgKAOAAQANAEACAMQACAMgJAHQgGAEgHgBQgHAAgFgGIhZBDQAEAGgBAHQgCAHgGAEQgFAEgFAAQgFAAgEgCg");
	this.shape_550.setTransform(35.8,19.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.5,0,5.6,0).s().p("Ag0ASQgEgFADgIQAFgFAHAAQAGABADAGIBBgPQgBgHAFgEQAFgEAIADQAHAFgCAIQgBAHgHAAQgKACgEgIIhBAPQABAEgDAEQgCAEgEABIgEAAQgEAAgEgEg");
	this.shape_551.setTransform(39,37.3);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.2,0,4.3,0).s().p("AgCCGQgOgOAFgRQAFgPAOgEIgUinQgQABgJgOQgJgPAKgSQAPgOARAGQAPAFACARQABALgGAJQgGAJgJACIAUCnQALAAAIAHQAJAHABALQACARgOAKQgIAFgIAAQgIAAgIgGg");
	this.shape_552.setTransform(-106.8,169);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.4,0).s().p("AgyAQQgEgFADgIQAFgEAGABQAHAAACAGIA/gNQgBgGAFgEQAFgEAHADQAHAFgCAHQgCAGgGAAQgEABgEgBQgEgBgBgEIg/ANQABAEgDADQgCAEgEABIgDAAQgFAAgDgEg");
	this.shape_553.setTransform(39.2,16);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.3,0,4.3,0).s().p("AgoAxQgEgIAFgGQADgEAFgBQAFgBAEACIArg+QgEgEAAgFQgBgFADgEQAEgGAJABQAIABADAKQAAAJgHAEQgGAEgHgEIgrA/QAGAFgCAHQgBAIgJADIgBAAQgJAAgEgHg");
	this.shape_554.setTransform(22.9,-15.2);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.8,0,4.9,0).s().p("AgtAQQgEgFADgHQAEgEAGAAQAGABACAFIA5gNQgBgGAEgDQAFgEAHADQAGAEgCAHQgBAGgGAAQgEAAgDAAQgEgBgBgEIg5ANQACAJgJACIgDABQgEAAgDgEg");
	this.shape_555.setTransform(-19.9,25.5);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AAWBRQgKgBgEgKQgCgHACgGQADgGAFgDIgihfQgHACgGgDQgFgDgDgGQgEgKAIgIQAHgIAMAEQALAGgBALQAAAKgJAEIAiBfQAKgCAHAHQAIAHgEAMQgGAKgKAAIgCAAg");
	this.shape_556.setTransform(-91.6,111.2);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.3,0,3.4,0).s().p("AARAhQgGgGAGgGIgjgnQgHAEgFgGQgEgEACgFQACgGAHAAQAHABACAGQABAFgEADIAjAoQAFgDAEACQAGACAAAHQgBAHgGABIgCAAQgEAAgDgDg");
	this.shape_557.setTransform(-86.9,29.6);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.9,0,5,0).s().p("AAWBaQgMgHABgMQAAgLAKgGIgshqQgLADgIgHQgJgIADgOQAIgMAMAAQAMABAFALQADAHgDAHQgCAHgHAEIAsBqQAHgCAHADQAHADADAHQAEALgHAJQgGAHgKAAIgHgBg");
	this.shape_558.setTransform(63.6,111.1);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.2,0,9.3,0).s().p("AA5B9QgTgHgDgRQgDgQAOgLIhfiQQgOAIgPgJQgPgKACgVQAGgUAUgCQARgCAKAPQAGAJgCALQgCALgIAHIBeCQQAKgFALACQAKADAHAJQAKAPgKAQQgJAOgSAAIgEAAg");
	this.shape_559.setTransform(48.1,-197.8);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.8,0,5.9,0).s().p("AAeA5QgEgFAAgGQAAgGAEgEIg+hEQgFAEgGgBQgGAAgEgFQgGgHAEgJQADgKAMgBQALACADAJQADAJgGAHIA+BEQAHgGAIAEQAJAEABALQgCALgKADIgFABQgGAAgFgFg");
	this.shape_560.setTransform(27.8,129.9);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.3,0,9.4,0).s().p("AArBpQgGgIABgLQABgKAIgHIhiiFQgJAGgKgCQgKgCgHgJQgKgNAIgQQAIgQAUABQATAFAEARQADAPgMALIBiCEQAOgIAOAIQAPAIAAAUQgGAUgSADIgGAAQgMAAgJgLg");
	this.shape_561.setTransform(40.4,142.8);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5,0,5.1,0).s().p("AgpAiQgIgDAAgIQgBgHAGgDQAEgCAEAAQAFABACAEIA5ghQgEgKAJgFQAGgDAGAEQAGAEgBAIQgDAIgHABQgHAAgDgFIg6AhQADAGgEAFQgDAFgGAAIgDAAg");
	this.shape_562.setTransform(-48.7,76.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.8,0,13.9,0).s().p("AiCAyQgMgNAIgUQAMgQARACQARACAGAQICkguQgDgRANgKQANgLATAHQARAMgDATQgDARgRAFQgLADgKgFQgJgFgEgKIilAuQACALgFAJQgGAJgLAEIgJABQgLAAgJgKg");
	this.shape_563.setTransform(40.5,118.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2,0,2.1,0).s().p("AgQBMQgGgKAEgJQAFgIAJAAIAFhhQgHgCgDgJQgEgJAIgJQAIgGAJAFQAJAFgBAKQgBAOgPABIgFBhQAFABADAFQAEAEAAAHQgBAKgJAEIgEABQgHAAgGgFg");
	this.shape_564.setTransform(39.3,28.4);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AgbAgQgGgCAAgHQABgGAFgCQAFgBADADIAlgiQgDgFACgEQACgFAGgBQAHABACAGQABAFgEAEQgGAFgGgFIgkAiQAEAGgFAGQgDADgDAAIgDgBg");
	this.shape_565.setTransform(-88.1,197.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.4,0,5.4,0).s().p("AAoAUQgKgCACgKIg/gOQgEAIgJgCQgHAAgBgHQgCgHAGgFQAIgDAFAEQAFAEgBAGIA/AOQACgGAHAAQAGAAAFAEQAEAHgFAGQgDAEgFAAIgDgBg");
	this.shape_566.setTransform(80.2,213.4);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4,0,4.1,0).s().p("AgiBUQgIgIADgLQADgGAGgEQAGgEAHACIAghqQgHgDgDgGQgDgGACgHQAEgLALgCQAMgCAIALQAEANgHAIQgHAJgLgDIggBqQAKAEABALQACALgLAIIgJABQgHAAgGgFg");
	this.shape_567.setTransform(148.1,-73.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.4,0,4.5,0).s().p("AANB4QgNgDgCgPQgCgKAEgIQADgIAJgDIgciQQgKABgHgGQgIgFgCgKQgDgOAMgKQANgKAQAIQAMAMgEAOQgDAOgMAFIAdCQQAOgBAJALQAIAMgHAQQgJALgMAAIgHgBg");
	this.shape_568.setTransform(-149.8,-101.4);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.6,0,8.6,0).s().p("AA4BrQgRgFgEgPQgDgOALgKIhZh6QgNAHgNgHQgNgHAAgTQAFgSAQgDQAQgCAJAMQAGAIgBAKQgBAJgHAHIBZB6QAJgFAJACQAKABAGAIQAJANgHAOQgHAOgSAAIgCAAg");
	this.shape_569.setTransform(91.3,193.6);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.6,0,3.6,0).s().p("AASAfQgCgFADgFIgmgoQgEAEgFgCQgGgDgBgGQACgHAGgCQAFgCAEAEQAGAGgFAHIAlAoQAHgFAGAGQAEAEgCAGQgCAGgHAAQgHgBgBgFg");
	this.shape_570.setTransform(-172.3,109.4);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.lf(["#34FFFD","#267AB3"],[0,1],-9.1,0,9.2,0).s().p("AArBkQgGgIABgKQABgKAHgHIhgh9QgIAFgKgCQgKgCgHgIQgKgNAIgOQAHgQAUAAQASAFAEAQQADAPgLALIBgB9QANgJAOAIQAOAIAAASQgFATgRAEIgGABQgMAAgIgLg");
	this.shape_571.setTransform(65.3,-206.6);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.1,0,2.2,0).s().p("AgEBNQgIgJAEgJQADgJAHgCIgGhfQgJAAgFgIQgFgJAGgJQAJgIAIADQAJAEABAKQABAGgEAFQgEAFgEABIAGBfQAGAAAFAEQAEAEABAHQABAKgJAFQgEACgEAAQgFAAgEgDg");
	this.shape_572.setTransform(1.5,22.1);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.8,0,3.9,0).s().p("AAbATQgHgDACgHIgsgQQgDAHgHgDQgFgCAAgFQgBgFAGgDQAFgCAEAEQADADgBAFIAsAQQACgFAFAAQAFAAADAFQACAGgEADQgDADgDAAIgDgBg");
	this.shape_573.setTransform(50.3,122.5);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AgqAnQgJgDgBgIQgBgHAGgEQAEgDAFABQAFABADADIA8gnQgCgEABgFQABgFAEgCQAGgFAHAEQAHAEgBAJQgDAJgHABQgHABgFgGIg8AoQADAHgDAGQgEAFgIAAIgBAAg");
	this.shape_574.setTransform(-30.3,-29.4);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.9,0,5.9,0).s().p("AApAQQgGgEAAgHIhFgHQgBAFgHACQgHACgGgGQgFgGAFgGQAEgGAHABQAKABAAALIBGAHQACgIALABQAHABACAFQADAHgGAGQgEADgEAAQgDAAgDgCg");
	this.shape_575.setTransform(-108.8,190.6);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.4,0,3.5,0).s().p("AANBEQgJgGABgJQAAgIAJgEIgdhRQgIADgGgHQgGgGADgKQAGgJAJABQAJABADAIQACAGgCAFQgCAFgGACIAdBRQAGgBAEADQAFACACAFQADAJgGAHQgEAEgGAAIgHgBg");
	this.shape_576.setTransform(-11.4,163.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.2,0,13.3,0).s().p("AhzBEQgSgLACgSQABgRAQgHQAKgEAKAEQAKAEAFAKICcg+QgDgKAFgJQAEgKAKgEQAQgHANAMQAOAMgGAUQgKARgRAAQgQgBgIgPIicA+QAFAPgLAMQgJAJgMAAIgLgCg");
	this.shape_577.setTransform(-52.1,-218.5);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.lf(["#34FFFD","#267AB3"],[0,1],-5.3,0,5.4,0).s().p("AguBmQgKgKAFgOQADgIAHgEQAJgEAIACIAsiBQgIgDgCgIQgEgIADgJQAFgNAOgCQAOgCAKAPQAEAQgJAKQgJAJgNgDIgtCBQAMAFABANQABAOgOAJQgFACgFAAQgJAAgHgHg");
	this.shape_578.setTransform(54.5,26.3);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.lf(["#34FFFD","#267AB3"],[0,1],-13.4,0,13.5,0).s().p("Ah1BeQgSgKACgXQAHgVATgDQASgDALAOICahkQgIgQAJgPQAKgQAWABQAWAIADAUQACATgQAKQgKAHgMgCQgLgCgIgJIiaBkQAGALgDALQgDAMgKAGQgIAGgJAAQgHAAgIgFg");
	this.shape_579.setTransform(73.7,210.9);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.5,0,4.6,0).s().p("AgrAFQgDgFAEgEQAFgEAFACQAFACABAEIA1AAQAAgFAFgCQAFgDAGAEQAEAFgDAEQgCAFgGAAQgIAAgBgIIg1ABQgBAJgIAAQgGAAgCgFg");
	this.shape_580.setTransform(131.7,-9.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.9,0,9,0).s().p("ABGAUQgGAAgFgFQgFgEgBgHIhqgEQgBAGgFAFQgFAEgHAAQgLgBgFgKQgEgIAIgLQALgHAKAFQAJAFAAAKIBrACQABgIAKgEQAKgEAKAIQAHAJgFAKQgFAJgKAAIgCAAg");
	this.shape_581.setTransform(177.8,42.8);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.lf(["#34FFFD","#267AB3"],[0,1],-4.1,0,4.2,0).s().p("AABB2QgKgMADgPQAEgOAMgDIgXiSQgPABgIgMQgIgMAIgQQAMgOAQAFQANAEACAPQACAKgFAIQgEAIgJACIAXCSQAKgBAHAGQAIAGACAJQACAPgMAJQgHAFgIAAQgHAAgIgEg");
	this.shape_582.setTransform(-16.9,212);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.9,0,12,0).s().p("Ah1BbQgFgSAOgNQAIgIAMAAQAMAAAIAIICEh7QgHgKABgLQABgMAIgIQAOgNASAHQASAHACAWQgEAVgRAHQgRAFgNgLIiEB7QALAOgHAQQgHASgWACQgWgEgGgTg");
	this.shape_583.setTransform(138.5,-47.2);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.9,0,9,0).s().p("AA+AYQgJgGABgKIhrgLQgCAIgKADQgKADgKgJQgHgJAHgKQAGgJALABQAHABAEAFQAFAFAAAHIBqALQABgEAGgEQAGgEAHAAQALACADAIQAEALgJAKQgGADgGAAQgEAAgFgCg");
	this.shape_584.setTransform(149.6,-41.2);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.4,0,7.4,0).s().p("AhHANQgEgIAFgIQAIgHAJADQAIADABAGIBYgGQAAgJAHgEQAIgFAJAGQAIAIgDAIQgEAHgJABQgFABgFgEQgFgDgBgEIhXAHQAAAGgEAEQgEAEgGABIgCAAQgHAAgFgHg");
	this.shape_585.setTransform(-7.2,140.4);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.lf(["#34FFFD","#267AB3"],[0,1],-3.2,0,3.3,0).s().p("AgWAqQgHAAgCgIQAAgGAFgEQAFgDAFADIAggwQgFgDABgHQABgGAHgBQAIgBADAFQADAGgEAFQgCADgDABQgEABgEgCIgfAwQACACABAEQAAAEgCADQgDAFgFAAIgBgBg");
	this.shape_586.setTransform(-121.5,175);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.lf(["#34FFFD","#267AB3"],[0,1],-8.9,0,8.9,0).s().p("AAoBnQgGgJABgKQABgKAIgHIhbiCQgJAFgKgCQgKgCgGgJQgKgNAIgPQAIgPAUABQASAGADAQQADAPgLAKIBbCCQAOgHANAIQAOAIAAATQgGATgRADIgFAAQgNAAgIgLg");
	this.shape_587.setTransform(136.1,-26.3);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.lf(["#34FFFD","#267AB3"],[0,1],-7.7,0,7.8,0).s().p("AhHBoQgJgNAIgOQAFgJAJgDQAJgDAJAEIBMiGQgIgFgCgKQgCgKAFgJQAIgOAQACQAQABAIARQACATgNAJQgMAJgOgGIhLCFQAMAJgBAPQgCAQgRAHIgFABQgPAAgIgMg");
	this.shape_588.setTransform(156.4,-33);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.lf(["#34FFFD","#267AB3"],[0,1],-11.2,0,11.3,0).s().p("AhsASQgIgNAKgMQAMgKANAEQAMAFACALICGgJQAAgNAMgGQAMgHAOAJQALAMgGAMQgFANgOABQgIABgHgGQgHgFgBgHIiGAJQgBAJgFAGQgGAGgJABIgCAAQgNAAgGgLg");
	this.shape_589.setTransform(-121.3,190.1);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.lf(["#34FFFD","#267AB3"],[0,1],-2.4,0,2.4,0).s().p("AgWAlQgCgGAFgEQAEgEAFACIAUgxQgEgDgBgFQAAgFAGgEQAHgCADAFQAEAFgCAFQgEAHgHgCIgVAxQAIADgEAIQgCAFgGABQgGAAgDgGg");
	this.shape_590.setTransform(171.8,-23.2);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.lf(["#34FFFD","#267AB3"],[0,1],-6.6,0,6.7,0).s().p("Ag5CDQgNgNAGgRQAEgLAKgFQAJgGALADIA3ilQgKgFgEgKQgFgKAEgLQAFgRASgDQATgCAMASQAHAUgMANQgMAMgRgEIg2CmQAPAHACARQABARgRAMQgHADgGAAQgMAAgJgJg");
	this.shape_591.setTransform(171.7,-37.6);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_592.setTransform(194.9,45.6);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_593.setTransform(194.9,65.4);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_594.setTransform(193.7,28.8);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_595.setTransform(193.1,55.2);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_596.setTransform(191.9,84.6);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_597.setTransform(191.9,75);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQALAAAAALQAAAMgLgBQgLABABgMg");
	this.shape_598.setTransform(191.3,21);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQALAAAAALQAAAMgLgBQgLABABgMg");
	this.shape_599.setTransform(191.3,-7.8);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_600.setTransform(190.7,92.4);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQAMAAgBALQABAMgMgBQgLABAAgMg");
	this.shape_601.setTransform(190.1,8.4);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_602.setTransform(188.9,102);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_603.setTransform(188.3,-21.6);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_604.setTransform(188.3,18);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_605.setTransform(183.5,117.6);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_606.setTransform(182.9,-30);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_607.setTransform(177.5,-44.4);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_608.setTransform(175.7,135);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_609.setTransform(175.1,-55.8);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_610.setTransform(174.5,90.6);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQAMAAgBALQABAMgMgBQgLABAAgMg");
	this.shape_611.setTransform(172.1,40.8);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_612.setTransform(170.3,147.6);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_613.setTransform(169.1,55.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_614.setTransform(168.5,-70.8);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_615.setTransform(167.9,1.2);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQALABAAAKQAAALgLABQgLgBABgLg");
	this.shape_616.setTransform(164.3,126);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQALgBAAALQAAALgLAAQgLAAABgLg");
	this.shape_617.setTransform(164.3,22.2);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_618.setTransform(163.1,81);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_619.setTransform(163.1,154.8);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQAMgBgBALQABALgMAAQgLAAAAgLg");
	this.shape_620.setTransform(163.1,-82.2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_621.setTransform(160.1,98.4);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_622.setTransform(158.9,-93);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_623.setTransform(157.1,162.6);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_624.setTransform(155.9,-45.6);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_625.setTransform(154.7,105);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_626.setTransform(153.5,35.4);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_627.setTransform(153.5,-97.8);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_628.setTransform(151.1,-107.4);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_629.setTransform(150.5,115.8);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_630.setTransform(149.9,-7.2);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_631.setTransform(149.9,0);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_632.setTransform(149.9,171.6);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_633.setTransform(147.5,60);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_634.setTransform(147.5,-112.2);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_635.setTransform(145.7,150);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_636.setTransform(144.5,-124.2);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_637.setTransform(143.9,32.4);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_638.setTransform(141.5,-72);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_639.setTransform(140.9,-136.2);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_640.setTransform(139.1,-97.8);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_641.setTransform(139.1,180.6);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_642.setTransform(138.5,9);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_643.setTransform(136.7,82.2);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQAMgBgBALQABALgMAAQgLAAAAgLg");
	this.shape_644.setTransform(136.1,-62.4);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_645.setTransform(135.5,-142.8);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_646.setTransform(134.9,131.4);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_647.setTransform(133.1,110.4);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_648.setTransform(130.7,169.2);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_649.setTransform(130.7,190.8);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_650.setTransform(129.5,-153);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_651.setTransform(128.9,38.4);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQALgBAAALQAAALgLAAQgLAAABgLg");
	this.shape_652.setTransform(128.3,-123.6);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQALABAAAKQAAALgLABQgLgBABgLg");
	this.shape_653.setTransform(128.3,-41.4);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQALABAAAKQAAALgLABQgLgBABgLg");
	this.shape_654.setTransform(128.3,122.4);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQALAAAAALQAAAMgLgBQgLABABgMg");
	this.shape_655.setTransform(128.3,-18.6);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQAMgBgBALQABALgMAAQgLAAAAgLg");
	this.shape_656.setTransform(127.1,105);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_657.setTransform(126.5,-75);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_658.setTransform(125.9,-2.4);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_659.setTransform(125.9,21);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQALAAAAALQAAAMgLgBQgLABABgMg");
	this.shape_660.setTransform(124.7,53.4);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_661.setTransform(123.5,-165);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_662.setTransform(122.3,-141.6);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_663.setTransform(122.3,-42.6);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_664.setTransform(121.1,200.4);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_665.setTransform(118.7,-92.4);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQALABAAAKQAAALgLABQgLgBABgLg");
	this.shape_666.setTransform(115.7,-174.6);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_667.setTransform(113.3,-63.6);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_668.setTransform(112.7,122.4);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_669.setTransform(112.7,5.4);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_670.setTransform(112.7,185.4);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQAMgBgBALQABALgMAAQgLAAAAgLg");
	this.shape_671.setTransform(112.7,141);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_672.setTransform(111.5,201.6);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_673.setTransform(111.5,-50.4);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_674.setTransform(110.9,-111);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_675.setTransform(110.9,-144);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQALgBAAALQAAALgLAAQgLAAABgLg");
	this.shape_676.setTransform(110.3,88.8);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_677.setTransform(107.9,171);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_678.setTransform(107.9,72.6);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_679.setTransform(107.3,-159.6);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_680.setTransform(107.3,-88.8);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_681.setTransform(106.7,-106.2);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_682.setTransform(106.7,22.2);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_683.setTransform(106.1,64.8);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_684.setTransform(105.5,121.2);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQAMAAgBALQABAMgMgBQgLABAAgMg");
	this.shape_685.setTransform(103.7,208.2);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_686.setTransform(103.1,-187.8);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_687.setTransform(102.5,36.6);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_688.setTransform(101.9,105.6);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_689.setTransform(100.1,6);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_690.setTransform(98.3,-19.8);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_691.setTransform(97.1,-29.4);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_692.setTransform(96.5,-117);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQAMABgBAKQABALgMABQgLgBAAgLg");
	this.shape_693.setTransform(94.7,140.4);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_694.setTransform(94.1,-176.4);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_695.setTransform(93.5,-62.4);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_696.setTransform(92.9,-132.6);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_697.setTransform(91.7,-199.2);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_698.setTransform(91.7,46.2);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_699.setTransform(91.1,-45.6);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_700.setTransform(89.9,214.8);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_701.setTransform(89.3,93);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_702.setTransform(88.7,153.6);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_703.setTransform(87.5,172.8);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_704.setTransform(85.7,-92.4);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_705.setTransform(83.9,117.6);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_706.setTransform(83.9,102);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_707.setTransform(82.7,-34.2);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_708.setTransform(82.7,54);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_709.setTransform(82.1,-147.6);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_710.setTransform(82.1,-188.4);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_711.setTransform(80.9,-8.4);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_712.setTransform(80.3,139.2);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_713.setTransform(80.3,-21);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_714.setTransform(79.7,-44.4);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_715.setTransform(79.1,19.8);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_716.setTransform(79.1,-206.4);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_717.setTransform(79.1,-129);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_718.setTransform(78.5,-118.2);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_719.setTransform(77.3,217.2);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_720.setTransform(76.7,-91.8);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_721.setTransform(74.3,196.2);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_722.setTransform(74.3,3.6);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_723.setTransform(73.7,-184.2);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_724.setTransform(73.1,67.8);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_725.setTransform(71.9,-212.4);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_726.setTransform(70.7,101.4);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_727.setTransform(70.7,135);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_728.setTransform(70.1,-57);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_729.setTransform(69.5,178.8);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_730.setTransform(68.3,-136.2);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_731.setTransform(67.7,3);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_732.setTransform(65.3,220.2);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_733.setTransform(62.9,-16.2);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_734.setTransform(62.9,-215.4);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_735.setTransform(61.7,18);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_736.setTransform(61.1,172.8);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_737.setTransform(56.9,210);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_738.setTransform(56.9,-43.2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_739.setTransform(55.1,68.4);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_740.setTransform(55.1,-170.4);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_741.setTransform(53.3,-201);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_742.setTransform(52.7,118.8);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_743.setTransform(52.7,-136.2);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_744.setTransform(51.5,-189.6);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_745.setTransform(50.9,155.4);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_746.setTransform(50.3,168.6);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_747.setTransform(49.1,-111.6);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_748.setTransform(49.1,189.6);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_749.setTransform(48.5,-220.8);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_750.setTransform(47.3,-91.2);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_751.setTransform(46.1,-64.2);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_752.setTransform(45.5,223.2);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_753.setTransform(45.5,-198);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_754.setTransform(44.3,-172.8);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_755.setTransform(44.3,141);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_756.setTransform(43.7,203.4);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_757.setTransform(43.1,-151.8);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_758.setTransform(42.5,-208.2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_759.setTransform(41.9,34.2);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_760.setTransform(41.3,123.6);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_761.setTransform(40.1,-226.8);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_762.setTransform(38.9,72.6);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_763.setTransform(38.3,54.6);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_764.setTransform(37.7,181.8);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_765.setTransform(37.1,-12.6);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_766.setTransform(37.1,-190.2);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_767.setTransform(36.5,-222);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_768.setTransform(35.9,110.4);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_769.setTransform(35.9,-42);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_770.setTransform(35.9,15.6);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_771.setTransform(31.7,-132);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_772.setTransform(31.1,-214.8);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_773.setTransform(30.5,-231.6);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_774.setTransform(30.5,146.4);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_775.setTransform(30.5,-78);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_776.setTransform(29.9,38.4);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_777.setTransform(28.7,-119.4);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_778.setTransform(28.7,-22.8);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_779.setTransform(28.7,-96.6);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_780.setTransform(28.7,130.8);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_781.setTransform(28.7,221.4);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_782.setTransform(28.1,-139.8);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_783.setTransform(26.3,196.2);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_784.setTransform(26.3,164.4);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_785.setTransform(25.1,109.8);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_786.setTransform(23.9,-56.4);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_787.setTransform(23.9,-174);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_788.setTransform(23.3,88.8);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_789.setTransform(23.3,-15.6);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_790.setTransform(22.7,29.4);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_791.setTransform(22.7,-145.8);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_792.setTransform(20.9,58.8);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_793.setTransform(20.9,51);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_794.setTransform(19.7,78);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_795.setTransform(19.7,141);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_796.setTransform(19.1,180);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_797.setTransform(19.1,-182.4);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_798.setTransform(19.1,-39);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_799.setTransform(18.5,-231.6);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_800.setTransform(17.3,-166.2);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_801.setTransform(16.1,34.2);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_802.setTransform(16.1,-201);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_803.setTransform(14.9,157.2);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_804.setTransform(14.3,218.4);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_805.setTransform(13.7,-73.8);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_806.setTransform(13.1,138.6);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_807.setTransform(10.7,193.8);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_808.setTransform(9.5,-126);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_809.setTransform(8.9,-228);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_810.setTransform(7.1,-139.2);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_811.setTransform(5.9,213);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_812.setTransform(2.9,-219);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_813.setTransform(1.7,-212.4);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_814.setTransform(-0.1,204);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_815.setTransform(-0.7,-204.6);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_816.setTransform(-0.7,-193.8);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_817.setTransform(-3.7,-186);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_818.setTransform(-4.3,190.2);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_819.setTransform(-4.3,203.4);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_820.setTransform(-4.9,174);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_821.setTransform(-4.9,-170.4);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_822.setTransform(-5.5,-32.4);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_823.setTransform(-6.1,-19.8);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_824.setTransform(-6.1,-152.4);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_825.setTransform(-6.1,-3);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_826.setTransform(-6.7,-58.8);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_827.setTransform(-6.7,-131.4);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_828.setTransform(-6.7,-47.4);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_829.setTransform(-7.3,34.2);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_830.setTransform(-7.3,121.2);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_831.setTransform(-7.3,16.8);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_832.setTransform(-7.3,102);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_833.setTransform(-7.3,139.2);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_834.setTransform(-7.3,161.4);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_835.setTransform(-7.3,47.4);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_836.setTransform(-7.9,63);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_837.setTransform(-7.9,-88.2);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_838.setTransform(-7.9,79.8);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_839.setTransform(-7.9,-110.4);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_840.setTransform(-7.9,-76.2);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_841.setTransform(-8.5,-197.4);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_842.setTransform(-9.7,213.6);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_843.setTransform(-12.1,-211.2);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_844.setTransform(-15.7,220.2);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_845.setTransform(-16.3,-218.4);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_846.setTransform(-16.9,165.6);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_847.setTransform(-19.3,124.8);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_848.setTransform(-19.9,-96);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_849.setTransform(-21.7,29.4);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_850.setTransform(-24.7,-114);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_851.setTransform(-25.3,-227.4);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_852.setTransform(-25.3,-5.4);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_853.setTransform(-25.9,-160.8);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_854.setTransform(-27.1,-178.2);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_855.setTransform(-27.1,225);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_856.setTransform(-28.3,-210.6);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_857.setTransform(-28.3,19.2);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_858.setTransform(-30.1,40.2);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_859.setTransform(-30.7,-230.4);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_860.setTransform(-31.3,-31.2);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_861.setTransform(-31.9,121.2);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALABQALgBABALQgBALgLAAQgLAAAAgLg");
	this.shape_862.setTransform(-34.3,160.8);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_863.setTransform(-34.9,189.6);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_864.setTransform(-34.9,138);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_865.setTransform(-36.1,-93);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_866.setTransform(-37.3,-204);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_867.setTransform(-37.3,79.2);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_868.setTransform(-38.5,-109.8);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_869.setTransform(-38.5,-139.2);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_870.setTransform(-39.7,224.4);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_871.setTransform(-40.9,18.6);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_872.setTransform(-41.5,173.4);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_873.setTransform(-42.1,8.4);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_874.setTransform(-43.9,-45.6);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_875.setTransform(-44.5,-185.4);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_876.setTransform(-45.1,-156);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_877.setTransform(-45.7,-193.2);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_878.setTransform(-45.7,-213.6);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_879.setTransform(-46.9,69);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_880.setTransform(-46.9,144);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_881.setTransform(-50.5,110.4);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_882.setTransform(-51.1,-226.2);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_883.setTransform(-51.1,220.2);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_884.setTransform(-51.7,81);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_885.setTransform(-51.7,-120.6);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_886.setTransform(-52.9,189);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_887.setTransform(-54.1,-68.4);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_888.setTransform(-54.1,-160.8);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_889.setTransform(-54.7,128.4);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_890.setTransform(-55.3,12);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_891.setTransform(-55.3,53.4);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_892.setTransform(-57.7,-145.8);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_893.setTransform(-57.7,-88.2);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_894.setTransform(-57.7,-184.2);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_895.setTransform(-58.3,-196.2);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#5FFFFD").s().p("AgLAAQAAgKALgBQALABABAKQgBALgLABQgLgBAAgLg");
	this.shape_896.setTransform(-61.3,-214.2);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_897.setTransform(-61.9,-15.6);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_898.setTransform(-61.9,218.4);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_899.setTransform(-62.5,-28.8);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_900.setTransform(-64.3,-40.8);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_901.setTransform(-64.9,-126);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_902.setTransform(-64.9,21);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_903.setTransform(-67.3,-73.2);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_904.setTransform(-69.1,166.2);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_905.setTransform(-70.3,-16.8);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_906.setTransform(-70.9,-57);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_907.setTransform(-72.1,125.4);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_908.setTransform(-72.7,-154.2);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_909.setTransform(-73.3,2.4);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_910.setTransform(-73.3,-220.8);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_911.setTransform(-73.9,-96.6);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_912.setTransform(-74.5,-199.8);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_913.setTransform(-75.1,54.6);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_914.setTransform(-75.1,97.8);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_915.setTransform(-75.7,23.4);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_916.setTransform(-76.3,-67.8);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_917.setTransform(-76.9,143.4);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_918.setTransform(-78.1,-141);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_919.setTransform(-78.1,214.8);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_920.setTransform(-78.7,85.2);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_921.setTransform(-84.7,1.2);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_922.setTransform(-85.9,19.2);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_923.setTransform(-85.9,-124.2);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_924.setTransform(-87.7,129);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_925.setTransform(-88.3,-211.2);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_926.setTransform(-88.9,152.4);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_927.setTransform(-88.9,-69);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_928.setTransform(-89.5,210.6);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_929.setTransform(-90.7,-143.4);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_930.setTransform(-91.9,69.6);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_931.setTransform(-93.7,-57.6);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_932.setTransform(-93.7,27);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_933.setTransform(-95.5,-124.2);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_934.setTransform(-96.1,-111.6);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_935.setTransform(-97.9,120.6);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_936.setTransform(-98.5,135);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_937.setTransform(-98.5,-21);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_938.setTransform(-98.5,205.8);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_939.setTransform(-98.5,-204);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_940.setTransform(-99.1,-46.8);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_941.setTransform(-99.1,-75.6);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_942.setTransform(-102.7,-54.6);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_943.setTransform(-102.7,-2.4);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_944.setTransform(-103.3,49.2);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_945.setTransform(-104.5,199.2);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_946.setTransform(-107.5,72);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_947.setTransform(-108.1,106.2);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_948.setTransform(-109.3,162);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_949.setTransform(-109.3,-138.6);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_950.setTransform(-111.1,-36);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_951.setTransform(-111.1,-192.6);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_952.setTransform(-114.1,-88.8);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_953.setTransform(-116.5,-183.6);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_954.setTransform(-117.1,-3.6);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_955.setTransform(-117.1,-67.2);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_956.setTransform(-118.3,28.8);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_957.setTransform(-118.3,192.6);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_958.setTransform(-120.1,138.6);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_959.setTransform(-120.7,100.8);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_960.setTransform(-122.5,66.6);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_961.setTransform(-122.5,42);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_962.setTransform(-123.7,151.8);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_963.setTransform(-126.7,21.6);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_964.setTransform(-127.3,187.2);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_965.setTransform(-127.9,121.2);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_966.setTransform(-130.3,-164.4);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_967.setTransform(-131.5,162);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_968.setTransform(-134.5,-103.2);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_969.setTransform(-135.1,-70.2);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_970.setTransform(-135.1,183.6);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_971.setTransform(-135.1,6);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_972.setTransform(-136.3,-121.8);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_973.setTransform(-136.9,136.2);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_974.setTransform(-137.5,15.6);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_975.setTransform(-137.5,100.2);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_976.setTransform(-137.5,66.6);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_977.setTransform(-138.7,-148.2);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_978.setTransform(-139.9,-46.8);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_979.setTransform(-142.9,-84.6);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_980.setTransform(-142.9,175.2);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_981.setTransform(-144.7,-134.4);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_982.setTransform(-145.9,30.6);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_983.setTransform(-147.1,-3.6);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_984.setTransform(-148.9,72.6);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_985.setTransform(-150.7,100.8);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_986.setTransform(-153.7,162.6);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQALABAAAKQAAALgLABQgKgBAAgLg");
	this.shape_987.setTransform(-153.7,-118.8);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_988.setTransform(-155.5,10.8);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_989.setTransform(-156.1,-58.8);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_990.setTransform(-157.3,55.2);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_991.setTransform(-157.9,-105);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_992.setTransform(-158.5,-18.6);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_993.setTransform(-159.7,154.2);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_994.setTransform(-162.7,118.2);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_995.setTransform(-163.3,94.2);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_996.setTransform(-165.1,40.2);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMgBQgKABAAgMg");
	this.shape_997.setTransform(-166.3,147);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_998.setTransform(-166.9,-87.6);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_999.setTransform(-168.7,22.8);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_1000.setTransform(-169.3,4.8);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_1001.setTransform(-171.1,-70.2);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_1002.setTransform(-172.3,-22.2);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_1003.setTransform(-172.3,139.2);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_1004.setTransform(-174.1,87.6);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKAAQALAAABALQgBAMgLgBQgKABgBgMg");
	this.shape_1005.setTransform(-174.7,-61.8);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALAAQAMAAAAALQAAAMgMgBQgLABABgMg");
	this.shape_1006.setTransform(-177.7,132.6);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_1007.setTransform(-181.3,-43.2);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#5FFFFD").s().p("AgLAAQABgLAKABQALgBABALQgBALgLAAQgKAAgBgLg");
	this.shape_1008.setTransform(-181.9,119.4);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#5FFFFD").s().p("AgLAAQABgKAKgBQALABABAKQgBALgLABQgKgBgBgLg");
	this.shape_1009.setTransform(-183.7,113.4);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_1010.setTransform(-187.9,106.8);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQALgBAAALQAAALgLAAQgKAAAAgLg");
	this.shape_1011.setTransform(-189.7,-12);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_1012.setTransform(-190.3,-28.2);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_1013.setTransform(-191.5,97.8);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#5FFFFD").s().p("AgKAAQAAgKAKgBQAMABgBAKQABALgMABQgKgBAAgLg");
	this.shape_1014.setTransform(-191.5,-1.8);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKABQAMgBgBALQABALgMAAQgKAAAAgLg");
	this.shape_1015.setTransform(-193.3,83.4);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_1016.setTransform(-193.9,42);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#5FFFFD").s().p("AgKAAQgBgKALgBQAMABAAAKQAAALgMABQgLgBABgLg");
	this.shape_1017.setTransform(-195.7,27);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#5FFFFD").s().p("AgLAAQAAgLALAAQALAAABALQgBAMgLgBQgLABAAgMg");
	this.shape_1018.setTransform(-196.3,53.4);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#5FFFFD").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLgBQgKABAAgMg");
	this.shape_1019.setTransform(-198.7,67.8);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#5FFFFD").s().p("AgKAAQgBgLALABQAMgBAAALQAAALgMAAQgLAAABgLg");
	this.shape_1020.setTransform(-199.3,11.4);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f().s("#378FAB").ss(0.8).p("AgQhwIhyBaIEACCg");
	this.shape_1021.setTransform(149.8,16.1,1,1,0,0,0,0,0.2);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#378FAB").ss(0.8).p("AgvhtIAqBsIA0Bwg");
	this.shape_1022.setTransform(162.8,-75.1,1,1,0,0,0,0.9,2.3);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f().s("#378FAB").ss(0.8).p("AiBhyIA2DoIDKhmg");
	this.shape_1023.setTransform(149.8,25.3,1,1,0,0,0,0.1,0.2);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#378FAB").ss(0.8).p("AhjgoIAABGICyAMg");
	this.shape_1024.setTransform(158.1,1.6,1,1,0,0,0,0,0.2);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f().s("#378FAB").ss(0.8).p("AhnAoIBgAeIBqiCg");
	this.shape_1025.setTransform(153.1,32.8,1,1,0,0,0,0.6,0);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#378FAB").ss(0.8).p("AhSg9IBwB8IA8hMg");
	this.shape_1026.setTransform(152.8,160.9,1,1,0,0,0,0.6,0.2);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f().s("#378FAB").ss(0.8).p("AhXhxICODcIAkjQg");
	this.shape_1027.setTransform(157.2,16,1,1,0,0,0,0.3,0);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#378FAB").ss(0.8).p("AgdhpIgqBqICIBmg");
	this.shape_1028.setTransform(155.9,120.6,1,1,0,0,0,0,0.5);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f().s("#378FAB").ss(0.8).p("AAniMIh2EAICsjQg");
	this.shape_1029.setTransform(147.7,-78.9,1,1,0,0,0,0,0.2);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#378FAB").ss(0.8).p("Agng/IAYBeIA0Awg");
	this.shape_1030.setTransform(153.8,-94.7,1,1,0,0,0,0.5,1.7);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f().s("#378FAB").ss(0.8).p("AhrhpICyDiIA2hCg");
	this.shape_1031.setTransform(146.7,98.3,1,1,0,0,0,1,1);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#378FAB").ss(0.8).p("Ag8hmIhODQIESgqg");
	this.shape_1032.setTransform(140.4,-47.3,1,1,0,0,0,0,0.2);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f().s("#378FAB").ss(0.8).p("AiIBRIDWByIA8l+g");
	this.shape_1033.setTransform(140.4,-22.2,1,1,0,0,0,0.2,0);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#378FAB").ss(0.8).p("AiNheIAADiIESkMg");
	this.shape_1034.setTransform(140.7,-27.4);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f().s("#378FAB").ss(0.8).p("ABHhqIisDQIDWhmg");
	this.shape_1035.setTransform(149.9,-77.4,1,1,0,0,0,0,0.3);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#378FAB").ss(0.8).p("AgxiIIg2BgIDECmg");
	this.shape_1036.setTransform(144.7,-53.3,1,1,0,0,0,0,0.4);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f().s("#378FAB").ss(0.8).p("AhqhSICaDQIA8kAg");
	this.shape_1037.setTransform(156.6,72.9,1,1,0,0,0,0.2,0);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#378FAB").ss(0.8).p("AAdhMIhSCOIB2heg");
	this.shape_1038.setTransform(142.7,-99.6,1,1,0,0,0,0,0.3);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f().s("#378FAB").ss(0.8).p("AiUhBIBsC4IC4jug");
	this.shape_1039.setTransform(148.2,142.6,1,1,0,0,0,0.2,0);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#378FAB").ss(0.8).p("AgviTIAkESIA6j0g");
	this.shape_1040.setTransform(147,51.8,1,1,0,0,0,0.1,0.1);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f().s("#378FAB").ss(0.8).p("AADiUIg0BCIBeDQg");
	this.shape_1041.setTransform(157.9,118.2,1,1,0,0,0,0,0.4);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#378FAB").ss(0.8).p("Ag3hoIAqDWIBGhag");
	this.shape_1042.setTransform(149.7,165.7,1,1,0,0,0,0.2,0.7);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f().s("#378FAB").ss(0.8).p("AhIiJIgkEYIDWg2g");
	this.shape_1043.setTransform(142.2,101,1,1,0,0,0,0,0.5);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f().s("#378FAB").ss(0.8).p("AhlAAICsA2IAqhqg");
	this.shape_1044.setTransform(142.4,114.8,1,1,0,0,0,0.9,0);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f().s("#378FAB").ss(0.8).p("Ah2g4IB8BwIByhYg");
	this.shape_1045.setTransform(136.6,7.9,1,1,0,0,0,0.6,0.1);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f().s("#378FAB").ss(0.8).p("AAKhNIiaCaIEkg2g");
	this.shape_1046.setTransform(147.6,128.3,1,1,0,0,0,0,0.1);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f().s("#378FAB").ss(0.8).p("ABUhkIhhBuIhIBaICpjIIAhgm");
	this.shape_1047.setTransform(156.7,166);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#378FAB").ss(0.8).p("AhIiGIAYEAIB2kAg");
	this.shape_1048.setTransform(144.6,-79.7);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f().s("#378FAB").ss(0.8).p("Agwh3Ig8D0IDWgwg");
	this.shape_1049.setTransform(156.6,52.4,1,1,0,0,0,0,0.4);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#378FAB").ss(0.8).p("AgMgGIhUBkIC+i+g");
	this.shape_1050.setTransform(138.6,185.9);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f().s("#378FAB").ss(0.8).p("AhjhPIgYCgIDugwg");
	this.shape_1051.setTransform(136.5,-5.8,1,1,0,0,0,0,0.2);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#378FAB").ss(0.8).p("AhoAMIDuAYIAAhGg");
	this.shape_1052.setTransform(136.2,0.9,1,1,0,0,0,1.6,0);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f().s("#378FAB").ss(0.8).p("AA7hcIjcBeIFIBag");
	this.shape_1053.setTransform(127.1,145.3);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f().s("#378FAB").ss(0.8).p("AiiiMICyEYICWi+g");
	this.shape_1054.setTransform(127.5,159.8,1,1,0,0,0,0.3,0.2);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f().s("#378FAB").ss(0.8).p("AhbhUIAeCsICUg8g");
	this.shape_1055.setTransform(133.4,34.3,1,1,0,0,0,0.1,0.3);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f().s("#378FAB").ss(0.8).p("AhCg7IgwB2IDchAg");
	this.shape_1056.setTransform(138,121);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f().s("#378FAB").ss(0.8).p("AhygJIBCBYICaiag");
	this.shape_1057.setTransform(138.2,128,1,1,0,0,0,0.2,0);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f().s("#378FAB").ss(0.8).p("Ahdh/IBqEAIBUiOg");
	this.shape_1058.setTransform(136.2,-105.8,1,1,0,0,0,0.3,0.4);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f().s("#378FAB").ss(0.8).p("Ag5hRIA6BkIA2BCg");
	this.shape_1059.setTransform(134.8,-138.1,1,1,0,0,0,1.3,2.1);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f().s("#378FAB").ss(0.8).p("AAhiBIisB+IEYCCg");
	this.shape_1060.setTransform(123.1,-105.8,1,1,0,0,0,0,0.2);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f().s("#378FAB").ss(0.8).p("AiOhZIBOC4IDKg2g");
	this.shape_1061.setTransform(123.7,-97.1,1,1,0,0,0,0.3,0.3);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f().s("#378FAB").ss(0.8).p("Ahmg8IBOCsIB8jig");
	this.shape_1062.setTransform(127.3,-81.7,1,1,0,0,0,0.1,0);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f().s("#378FAB").ss(0.8).p("ABXg3IjWBkIEMAMg");
	this.shape_1063.setTransform(152.5,-71.9,1,1,0,0,0,0,0.1);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f().s("#378FAB").ss(0.8).p("AgphqIAADWIBShmg");
	this.shape_1064.setTransform(133.1,185,1,1,0,0,0,0,0.6);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f().s("#378FAB").ss(0.8).p("AhACWIAshnIAUgvIBCiU");
	this.shape_1065.setTransform(175,137.1);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().s("#378FAB").ss(0.8).p("Ahfg4IBUBwIBqhYg");
	this.shape_1066.setTransform(138.8,179.5,1,1,0,0,0,0.3,0.1);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f().s("#378FAB").ss(0.8).p("AiUhPIAYCgIEGhCg");
	this.shape_1067.setTransform(121.1,85.2,1,1,0,0,0,0.1,0.1);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f().s("#378FAB").ss(0.8).p("AiCgvICmCgIBgjig");
	this.shape_1068.setTransform(121.9,98.2,1,1,0,0,0,0.3,0);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f().s("#378FAB").ss(0.8).p("AhHg+IBeB8IA2heg");
	this.shape_1069.setTransform(132.3,-64,1,1,0,0,0,0.4,0.1);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#378FAB").ss(0.8).p("ABGg9IigAGIC+Bwg");
	this.shape_1070.setTransform(135.6,-113.4);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f().s("#378FAB").ss(0.8).p("AATg9IiCBwIDiAMg");
	this.shape_1071.setTransform(122.7,-64,1,1,0,0,0,0,0.2);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f().s("#378FAB").ss(0.8).p("AAXiOIimC+IEeBgg");
	this.shape_1072.setTransform(120.5,72.5,1,1,0,0,0,0,0.3);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f().s("#378FAB").ss(0.8).p("Ag/h0IAADoIB8h2g");
	this.shape_1073.setTransform(130.5,14.2,1,1,0,0,0,0,0.4);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f().s("#378FAB").ss(0.8).p("AhxhqIBaDQICIjEg");
	this.shape_1074.setTransform(123.1,-48.3,1,1,0,0,0,0.2,0);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f().s("#378FAB").ss(0.8).p("AgdhbIAMCsIAuh2g");
	this.shape_1075.setTransform(128.3,119.1,1,1,0,0,0,0,0.4);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f().s("#378FAB").ss(0.8).p("AhIBrIA8AMIBMjQg");
	this.shape_1076.setTransform(128,-48.8,1,1,0,0,0,0.2,0);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f().s("#378FAB").ss(0.8).p("AhCiQIgwEqIDigSg");
	this.shape_1077.setTransform(117.6,160.7,1,1,0,0,0,0,0.6);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f().s("#378FAB").ss(0.8).p("AA0h6Ih8DiICUAeg");
	this.shape_1078.setTransform(132,-80.2,1,1,0,0,0,0,0.7);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f().s("#378FAB").ss(0.8).p("AilBMICyBUICWk2g");
	this.shape_1079.setTransform(165.1,-10.3,1,1,0,0,0,0.4,0);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f().s("#378FAB").ss(0.8).p("AhYhJIBUCUIBeheg");
	this.shape_1080.setTransform(120.1,197.6,1,1,0,0,0,0.3,0.2);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f().s("#378FAB").ss(0.8).p("AA3hoIiUC+IC+AYg");
	this.shape_1081.setTransform(138.3,165.4,1,1,0,0,0,0,0.4);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f().s("#378FAB").ss(0.8).p("ABUhZIi+AMIDcCgg");
	this.shape_1082.setTransform(115.6,34.5);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f().s("#378FAB").ss(0.8).p("AhehOIgqCOIEGASg");
	this.shape_1083.setTransform(114.4,34.9,1,1,0,0,0,0,0.2);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f().s("#378FAB").ss(0.8).p("Ah0g/IAwCOICyigg");
	this.shape_1084.setTransform(117.9,181.9,1,1,0,0,0,0.1,0);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f().s("#378FAB").ss(0.8).p("AhWA4ICyA2IAAjWg");
	this.shape_1085.setTransform(119.9,184.3,1,1,0,0,0,0.3,0);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f().s("#378FAB").ss(0.8).p("AAvg8Ih8B8ICggGg");
	this.shape_1086.setTransform(134.3,-125.2,1,1,0,0,0,0,0.3);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f().s("#378FAB").ss(0.8).p("AhLhqIgqCUIDiBCg");
	this.shape_1087.setTransform(134.7,54.1,1,1,0,0,0,0,0.4);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f().s("#378FAB").ss(0.8).p("ABEhSIiOCsICaAAg");
	this.shape_1088.setTransform(118.4,118.3,1,1,0,0,0,0,0.5);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f().s("#378FAB").ss(0.8).p("AhPhgIAAC4ICai4g");
	this.shape_1089.setTransform(118.9,136.6);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f().s("#378FAB").ss(0.8).p("AiOhXIESCsIAYigg");
	this.shape_1090.setTransform(111.6,-6.4,1,1,0,0,0,0.8,0);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f().s("#378FAB").ss(0.8).p("AhXiiIAAFIICsh+g");
	this.shape_1091.setTransform(117.9,-122.6,1,1,0,0,0,0,0.5);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f().s("#378FAB").ss(0.8).p("AAbhUIhwgYICsDKg");
	this.shape_1092.setTransform(117.7,-128.6);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f().s("#378FAB").ss(0.8).p("AA5iNIiUA8IC4DWg");
	this.shape_1093.setTransform(136.3,51.2,1,1,0,0,0,0,0.1);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f().s("#378FAB").ss(0.8).p("Ah9hRIBsCmICOisg");
	this.shape_1094.setTransform(112.9,118.4,1,1,0,0,0,0.2,0);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f().s("#378FAB").ss(0.8).p("AgqhRIhUCmID6gGg");
	this.shape_1095.setTransform(112.8,101.7,1,1,0,0,0,0,0.2);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f().s("#378FAB").ss(0.8).p("AAxheIiaC4IDcheg");
	this.shape_1096.setTransform(121.5,136.6,1,1,0,0,0,0,0.2);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f().s("#378FAB").ss(0.8).p("AhbAkIBwAYIBIhwg");
	this.shape_1097.setTransform(119,-143.1,1,1,0,0,0,0.7,0);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f().s("#378FAB").ss(0.8).p("Ah+hUIDcCmIAqiUg");
	this.shape_1098.setTransform(114.1,49.7,1,1,0,0,0,0.7,0.1);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f().s("#378FAB").ss(0.8).p("AAPhbIhqCCIC4A2g");
	this.shape_1099.setTransform(160.9,36.2,1,1,0,0,0,0,0.3);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f().s("#378FAB").ss(0.8).p("AhlAXIASBOICmi+g");
	this.shape_1100.setTransform(114.5,67);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f().s("#378FAB").ss(0.8).p("AAkh0Ih8B2ICyByg");
	this.shape_1101.setTransform(133,25.6,1,1,0,0,0,0,0.3);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f().s("#378FAB").ss(0.8).p("AgciIIA6DuIAAjig");
	this.shape_1102.setTransform(123.4,-24.4);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f().s("#378FAB").ss(0.8).p("Ahfh7IA8D6ICChyg");
	this.shape_1103.setTransform(115.3,-71.4,1,1,0,0,0,0.2,0.4);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f().s("#378FAB").ss(0.8).p("AARhaIhwAkIC+CIg");
	this.shape_1104.setTransform(115.1,-78.8);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f().s("#378FAB").ss(0.8).p("AAzgtIh2BeICOAAg");
	this.shape_1105.setTransform(144.1,-98,1,1,0,0,0,0,0.2);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f().s("#378FAB").ss(0.8).p("AhviKIAkEYIC4hyg");
	this.shape_1106.setTransform(112,55.5,1,1,0,0,0,0.1,0.4);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f().s("#378FAB").ss(0.8).p("AhBhXIA8CyIBGi+g");
	this.shape_1107.setTransform(127.1,-128.2);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f().s("#378FAB").ss(0.8).p("AAGg2IhGBwICCgMg");
	this.shape_1108.setTransform(127,-142.6,1,1,0,0,0,0,0.3);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f().s("#378FAB").ss(0.8).p("AgkhQIg8CmIC+gMg");
	this.shape_1109.setTransform(114.6,18.4,1,1,0,0,0,0,0.3);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f().s("#378FAB").ss(0.8).p("AgmhmIgSCCIBqBOg");
	this.shape_1110.setTransform(115.4,-47.9,1,1,0,0,0,0,0.8);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f().s("#378FAB").ss(0.8).p("AhwiRIB2EeIBsjcg");
	this.shape_1111.setTransform(134.4,72.6,1,1,0,0,0,0.2,0.1);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f().s("#378FAB").ss(0.8).p("AiFiFICOEGIB+j6g");
	this.shape_1112.setTransform(153.3,-54,1,1,0,0,0,0.2,0);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f().s("#378FAB").ss(0.8).p("AgShAIhaBwIDWASg");
	this.shape_1113.setTransform(103.2,-176.5,1,1,0,0,0,0,0.2);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().s("#378FAB").ss(0.8).p("AhphUICCCmIBUiUg");
	this.shape_1114.setTransform(103.3,-163.3,1,1,0,0,0,0.4,0);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f().s("#378FAB").ss(0.8).p("Ag0hIIAkCaIBGAMg");
	this.shape_1115.setTransform(105.7,118.7,1,1,0,0,0,0.3,1.2);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f().s("#378FAB").ss(0.8).p("AhxhMIAkCaIC4hYg");
	this.shape_1116.setTransform(117,-147.2,1,1,0,0,0,0.1,0.1);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f().s("#378FAB").ss(0.8).p("AiGh4ICOD6ICEhOg");
	this.shape_1117.setTransform(110.5,-2.6,1,1,0,0,0,0.5,0.5);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f().s("#378FAB").ss(0.8).p("AAMhjIhGC+IB8h8g");
	this.shape_1118.setTransform(132.4,-127.9,1,1,0,0,0,0,0.3);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f().s("#378FAB").ss(0.8).p("AgXhrIhsDcIEGgMg");
	this.shape_1119.setTransform(148.1,75.7,1,1,0,0,0,0,0.3);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f().s("#378FAB").ss(0.8).p("AhYhjICaDEIAeiOg");
	this.shape_1120.setTransform(161.1,50.1,1,1,0,0,0,0.5,0.2);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f().s("#378FAB").ss(0.8).p("Ag/hEIg8CCIDuh8g");
	this.shape_1121.setTransform(99.3,151.8);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("#378FAB").ss(0.8).p("AhHh3IASEAIB8gGg");
	this.shape_1122.setTransform(103.8,-2.3,1,1,0,0,0,0.1,0.9);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f().s("#378FAB").ss(0.8).p("AASheIhqC+ICyAGg");
	this.shape_1123.setTransform(101.8,135.8,1,1,0,0,0,0,0.5);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#378FAB").ss(0.8).p("Ag8hSIAGCsIBwgkg");
	this.shape_1124.setTransform(111,-92.8,1,1,0,0,0,0,0.5);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f().s("#378FAB").ss(0.8).p("AhQhRIgYCmIDKgwg");
	this.shape_1125.setTransform(99.8,-49.4,1,1,0,0,0,0,0.2);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("#378FAB").ss(0.8).p("AhzgKICsAuIBIhGg");
	this.shape_1126.setTransform(156.8,155.7,1,1,0,0,0,1.3,0);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f().s("#378FAB").ss(0.8).p("Aiog0IAMBeIEqAMg");
	this.shape_1127.setTransform(112.2,-19.4,1,1,0,0,0,0,0.1);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f().s("#378FAB").ss(0.8).p("ABShJIjKASID6B8g");
	this.shape_1128.setTransform(97.8,182.9);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f().s("#378FAB").ss(0.8).p("AgWhkIgqAwIB2CIg");
	this.shape_1129.setTransform(111.4,-96,1,1,0,0,0,0,0.3);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f().s("#378FAB").ss(0.8).p("AhcgTIAkCaICOkMg");
	this.shape_1130.setTransform(100.4,-126);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f().s("#378FAB").ss(0.8).p("AAoh+IiIEGIDEgMg");
	this.shape_1131.setTransform(101.4,-70.9,1,1,0,0,0,0,0.6);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f().s("#378FAB").ss(0.8).p("Ahdg2ICyB2IASiCg");
	this.shape_1132.setTransform(101.7,-52.3,1,1,0,0,0,0.6,0);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f().s("#378FAB").ss(0.8).p("ABih3Ij6CCIE2Bsg");
	this.shape_1133.setTransform(110.6,-25.9,1,1,0,0,0,0,0.1);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("#378FAB").ss(0.8).p("Ahng5IA8CgICOjQg");
	this.shape_1134.setTransform(99.7,-35.3);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f().s("#378FAB").ss(0.8).p("AAVhrIiODQID6iCg");
	this.shape_1135.setTransform(107.5,-34.9,1,1,0,0,0,0,0.1);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("#378FAB").ss(0.8).p("AhchcIgMC+IDKgSg");
	this.shape_1136.setTransform(96.2,167.7,1,1,0,0,0,0,0.3);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f().s("#378FAB").ss(0.8).p("AgwBjIA6A2IAkkYg");
	this.shape_1137.setTransform(130.2,99.5);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("#378FAB").ss(0.8).p("Ah6iwICgFgIBajig");
	this.shape_1138.setTransform(98.3,195.4,1,1,0,0,0,0.3,0.3);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f().s("#378FAB").ss(0.8).p("ABxhMIj6B2IEeAkg");
	this.shape_1139.setTransform(94.1,-147.2,1,1,0,0,0,0,0.1);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f().s("#378FAB").ss(0.8).p("ABqhUIjQCIIDWAkg");
	this.shape_1140.setTransform(94.2,-92.9,1,1,0,0,0,0,0.2);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f().s("#378FAB").ss(0.8).p("AhriYIBOEqICIkGg");
	this.shape_1141.setTransform(94.7,-72.5);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f().s("#378FAB").ss(0.8).p("AAEh8IhqD0IDQiIg");
	this.shape_1142.setTransform(94.2,-99.6,1,1,0,0,0,0,0.3);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f().s("#378FAB").ss(0.8).p("Ah1gXIC+CsIAwkqg");
	this.shape_1143.setTransform(99,160.5,1,1,0,0,0,0.3,0);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("#378FAB").ss(0.8).p("AgpB5IBMhCIAMigg");
	this.shape_1144.setTransform(106.5,199.9,1,1,0,0,0,0.4,-0.6);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f().s("#378FAB").ss(0.8).p("AiQhKIBsCUICyhwg");
	this.shape_1145.setTransform(95.1,-135.4,1,1,0,0,0,0.3,0.1);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f().s("#378FAB").ss(0.8).p("AAEhJIhSCUICgg2g");
	this.shape_1146.setTransform(113.4,-162.3,1,1,0,0,0,0,0.3);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f().s("#378FAB").ss(0.8).p("AhIhDIhgCIIFIgeg");
	this.shape_1147.setTransform(88.2,65.4);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f().s("#378FAB").ss(0.8).p("AgdheIhaBOIDoBqg");
	this.shape_1148.setTransform(92.9,60.5,1,1,0,0,0,0,0.2);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f().s("#378FAB").ss(0.8).p("AghhtIBGDEIAAi4g");
	this.shape_1149.setTransform(107.2,136.8,1,1,0,0,0,0.1,0.1);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f().s("#378FAB").ss(0.8).p("AiPhYICaC4ICKhCg");
	this.shape_1150.setTransform(87.5,210.1,1,1,0,0,0,0.6,0.4);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f().s("#378FAB").ss(0.8).p("AgPivIiEDoIEkB4g");
	this.shape_1151.setTransform(87.3,195.3,1,1,0,0,0,0,0.4);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("#378FAB").ss(0.8).p("AgIg3IhgBqIDQAGg");
	this.shape_1152.setTransform(90.8,-188.8,1,1,0,0,0,0,0.2);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f().s("#378FAB").ss(0.8).p("Ahxh/IB8EGIBshgg");
	this.shape_1153.setTransform(89.1,37.7,1,1,0,0,0,0.4,0.6);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f().s("#378FAB").ss(0.8).p("AhchOIAACaICyh2g");
	this.shape_1154.setTransform(91.4,114.5);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f().s("#378FAB").ss(0.8).p("Agmg+Ig2BYICyAkg");
	this.shape_1155.setTransform(91.4,104,1,1,0,0,0,0,0.2);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f().s("#378FAB").ss(0.8).p("Ahmg8IB2B2IBahwg");
	this.shape_1156.setTransform(91,-177.7,1,1,0,0,0,0.4,0);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f().s("#378FAB").ss(0.8).p("ABBh0Ii4DuID0gYg");
	this.shape_1157.setTransform(155.9,142.7,1,1,0,0,0,0,0.4);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().s("#378FAB").ss(0.8).p("AgGgCIg8BMICCiUg");
	this.shape_1158.setTransform(162,159.7);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f().s("#378FAB").ss(0.8).p("AgkhKIgMCgIBegMg");
	this.shape_1159.setTransform(114.6,198.1,1,1,0,0,0,0,0.7);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f().s("#378FAB").ss(0.8).p("AgEiPIh4EeID6h4g");
	this.shape_1160.setTransform(92.8,-157.1,1,1,0,0,0,0,0.3);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f().s("#378FAB").ss(0.8).p("Ahdg/IAGB8ICshwg");
	this.shape_1161.setTransform(87.9,-10);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f().s("#378FAB").ss(0.8).p("AhBgxIBkBqIAqgwg");
	this.shape_1162.setTransform(102.1,-106.9,1,1,0,0,0,0.8,0.5);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f().s("#378FAB").ss(0.8).p("AA2g7IigA2IDcBAg");
	this.shape_1163.setTransform(116.2,-154.4);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f().s("#378FAB").ss(0.8).p("AALhOIhSBwICOAwg");
	this.shape_1164.setTransform(88.1,-32.7,1,1,0,0,0,0,0.4);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f().s("#378FAB").ss(0.8).p("Ag+hCIgYCCICmhSg");
	this.shape_1165.setTransform(87.2,-23);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f().s("#378FAB").ss(0.8).p("AgkhrIgkDWICOAMg");
	this.shape_1166.setTransform(85.8,133.7,1,1,0,0,0,0,0.7);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f().s("#378FAB").ss(0.8).p("ABIidIiNEMICNA8g");
	this.shape_1167.setTransform(101.8,-122.7,1,1,0,0,0,0,0.9);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f().s("#378FAB").ss(0.8).p("Ah+hLIDoCgIAeisg");
	this.shape_1168.setTransform(148.2,94.4,1,1,0,0,0,0.6,0);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f().s("#378FAB").ss(0.8).p("AADijIhYAGICmEkg");
	this.shape_1169.setTransform(83.5,-71.4);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f().s("#378FAB").ss(0.8).p("AgyipIhCFaIDog2g");
	this.shape_1170.setTransform(80,-69.6,1,1,0,0,0,0,0.6);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f().s("#378FAB").ss(0.8).p("AAjiPIhqBgICOC4g");
	this.shape_1171.setTransform(97.1,55.9,1,1,0,0,0,0,0.3);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f().s("#378FAB").ss(0.8).p("Aith9ICiD6IC4jKg");
	this.shape_1172.setTransform(89,85.1,1,1,0,0,0,0.3,0.1);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f().s("#378FAB").ss(0.8).p("AhGhJIBSCOIA8iCg");
	this.shape_1173.setTransform(85.8,151.2,1,1,0,0,0,0.2,0);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f().s("#378FAB").ss(0.8).p("Ag+hZIAeCyIBehqg");
	this.shape_1174.setTransform(83.7,-192.5,1,1,0,0,0,0.1,0.3);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f().s("#378FAB").ss(0.8).p("Ah1gjIBgB8ICIiyg");
	this.shape_1175.setTransform(80.3,-48.8,1,1,0,0,0,0.2,0);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f().s("#378FAB").ss(0.8).p("ABLhPIjQCIIESAYg");
	this.shape_1176.setTransform(90.7,18.7,1,1,0,0,0,0,0.2);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f().s("#378FAB").ss(0.8).p("Ag6guIAeBkIBShwg");
	this.shape_1177.setTransform(83.8,-35.2);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f().s("#378FAB").ss(0.8).p("AhZiEIBIEAIBqj0g");
	this.shape_1178.setTransform(85.7,-100.3);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f().s("#378FAB").ss(0.8).p("AhZg5IgGBqICyAMg");
	this.shape_1179.setTransform(86.3,-118.3,1,1,0,0,0,0,0.3);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f().s("#378FAB").ss(0.8).p("ABUgtIimBSICyAMg");
	this.shape_1180.setTransform(86.8,-20,1,1,0,0,0,0,0.2);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f().s("#378FAB").ss(0.8).p("AhCBgIBwgMIAYimg");
	this.shape_1181.setTransform(85,-49.6,1,1,0,0,0,0.4,-0.1);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f().s("#378FAB").ss(0.8).p("AA1hPIiIAkICsB2g");
	this.shape_1182.setTransform(85.7,-120);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f().s("#378FAB").ss(0.8).p("ABZg2Ii+BkIDWAMg");
	this.shape_1183.setTransform(164.3,-45.5,1,1,0,0,0,0,0.2);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f().s("#378FAB").ss(0.8).p("AiDhRIAwCgIDQiIg");
	this.shape_1184.setTransform(85.8,16.3,1,1,0,0,0,0.1,0);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f().s("#378FAB").ss(0.8).p("AhqhzIBqDiIBsi+g");
	this.shape_1185.setTransform(93,133.8,1,1,0,0,0,0.2,0.1);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f().s("#378FAB").ss(0.8).p("AiDhTIDoCmIAqiOg");
	this.shape_1186.setTransform(91.2,32.9,1,1,0,0,0,0.7,0.1);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f().s("#378FAB").ss(0.8).p("Ag2hrIA6DWIA2h8g");
	this.shape_1187.setTransform(168.2,141.9,1,1,0,0,0,0.2,0.5);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f().s("#378FAB").ss(0.8).p("AiKgdIBUA6ICyg6g");
	this.shape_1188.setTransform(73.8,180.3,1,1,0,0,0,0.6,0);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f().s("#378FAB").ss(0.8).p("AgqhVIgeCsICOhOg");
	this.shape_1189.setTransform(165.6,94.5,1,1,0,0,0,0,0.3);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f().s("#378FAB").ss(0.8).p("AiZhKICyCgICEisg");
	this.shape_1190.setTransform(66.8,130.9,1,1,0,0,0,0.5,0);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f().s("#378FAB").ss(0.8).p("AjAhNIBmCsIESi+g");
	this.shape_1191.setTransform(68.6,167.8,1,1,0,0,0,0.2,0);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f().s("#378FAB").ss(0.8).p("ABsgzIjiAMIEABYg");
	this.shape_1192.setTransform(67,-34.7);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f().s("#378FAB").ss(0.8).p("ABvhPIkkCgIF4gSg");
	this.shape_1193.setTransform(67.3,151.9,1,1,0,0,0,0,0.1);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f().s("#378FAB").ss(0.8).p("AgUg+IhUAqIDKBMg");
	this.shape_1194.setTransform(82.4,-177.6);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f().s("#378FAB").ss(0.8).p("AAZhVIiyCsIE2gMg");
	this.shape_1195.setTransform(66.3,114.7,1,1,0,0,0,0,0.2);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f().s("#378FAB").ss(0.8).p("AhBBIIBeAqIAkjWg");
	this.shape_1196.setTransform(75.7,132.3,1,1,0,0,0,0.2,0);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f().s("#378FAB").ss(0.8).p("AgGi1IjGCiIGWDEg");
	this.shape_1197.setTransform(60.6,40.9,1,1,0,0,0,0,0.2);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f().s("#378FAB").ss(0.8).p("AhDAWIBqBIIAei4g");
	this.shape_1198.setTransform(73.6,-133.9,1,1,0,0,0,0.3,0);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f().s("#378FAB").ss(0.8).p("Ag9hRIBACgIA8img");
	this.shape_1199.setTransform(104.6,18.7,1,1,0,0,0,0.1,0);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f().s("#378FAB").ss(0.8).p("ABYg+IisAwICyBMg");
	this.shape_1200.setTransform(69.6,-10.1);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f().s("#378FAB").ss(0.8).p("AiEilICEFUICIhyg");
	this.shape_1201.setTransform(67,-148.6,1,1,0,0,0,0.4,0.6);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f().s("#378FAB").ss(0.8).p("AiBiGIA8EMIDEiyg");
	this.shape_1202.setTransform(68.2,-25,1,1,0,0,0,0.1,0.1);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f().s("#378FAB").ss(0.8).p("Ahki6IBUFsIB2keg");
	this.shape_1203.setTransform(82.1,-160.7,1,1,0,0,0,0.1,0.2);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f().s("#378FAB").ss(0.8).p("AA6hsIjEDKIEkigg");
	this.shape_1204.setTransform(63,150.4);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f().s("#378FAB").ss(0.8).p("Ahbg6IAwCsICCjog");
	this.shape_1205.setTransform(76.9,189.2);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f().s("#378FAB").ss(0.8).p("Agah2IgSEGIBYgGg");
	this.shape_1206.setTransform(79.4,-100.3,1,1,0,0,0,0,1.4);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f().s("#378FAB").ss(0.8).p("AAThCIiCCIIDigMg");
	this.shape_1207.setTransform(66.3,-45.5,1,1,0,0,0,0,0.2);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f().s("#378FAB").ss(0.8).p("AhcBbICsgwIAYiCg");
	this.shape_1208.setTransform(71.2,-21.1,1,1,0,0,0,0.8,-0.3);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f().s("#378FAB").ss(0.8).p("ABBg6Ii4BwIEAg2g");
	this.shape_1209.setTransform(63.5,-202);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f().s("#378FAB").ss(0.8).p("AhZhfIAwC+ICChwg");
	this.shape_1210.setTransform(70.2,-1.8,1,1,0,0,0,0.1,0.2);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f().s("#378FAB").ss(0.8).p("AAvh5Ii+D0IEkhCg");
	this.shape_1211.setTransform(61.7,-119.1,1,1,0,0,0,0,0.3);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f().s("#378FAB").ss(0.8).p("AhDA+IBCAGIBAh2g");
	this.shape_1212.setTransform(73.1,1.3,1,1,0,0,0,0.4,0);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f().s("#378FAB").ss(0.8).p("AiOhCIESDEIASkGg");
	this.shape_1213.setTransform(62.1,-100.3,1,1,0,0,0,0.5,0);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f().s("#378FAB").ss(0.8).p("ABEhOIiCgGICCCgg");
	this.shape_1214.setTransform(75.2,114.4);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f().s("#378FAB").ss(0.8).p("AhEijIgYFOIC4hUg");
	this.shape_1215.setTransform(78.2,89.3,1,1,0,0,0,0,0.6);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f().s("#378FAB").ss(0.8).p("AhXAqICCAGIA2hYg");
	this.shape_1216.setTransform(78.7,101.7,1,1,0,0,0,1,0);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f().s("#378FAB").ss(0.8).p("Ah9g5IDKCmIA2jcg");
	this.shape_1217.setTransform(64.5,-190.6,1,1,0,0,0,0.4,0);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f().s("#378FAB").ss(0.8).p("ABLhLIiyB2IDWAkg");
	this.shape_1218.setTransform(92.5,118,1,1,0,0,0,0,0.2);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f().s("#378FAB").ss(0.8).p("AjLioICEFUIESiQg");
	this.shape_1219.setTransform(60.7,55.9,1,1,0,0,0,0.2,0.3);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f().s("#378FAB").ss(0.8).p("AiEhiIgSDKIEkgGg");
	this.shape_1220.setTransform(60.6,-96.8,1,1,0,0,0,0,0.3);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f().s("#378FAB").ss(0.8).p("AAyi4Ii4CKIEMDig");
	this.shape_1221.setTransform(66.8,-160.9,1,1,0,0,0,0,0.2);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f().s("#378FAB").ss(0.8).p("AAAhUIg7CUIB8iOg");
	this.shape_1222.setTransform(65.9,16);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f().s("#378FAB").ss(0.8).p("AhngpIB8B8IBUimg");
	this.shape_1223.setTransform(98.2,101.8,1,1,0,0,0,0.3,0);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f().s("#378FAB").ss(0.8).p("AiPiGIgMEMIEwkSg");
	this.shape_1224.setTransform(59.9,-73.2);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f().s("#378FAB").ss(0.8).p("AiWBpIDuBIIBClag");
	this.shape_1225.setTransform(59.7,-70.2,1,1,0,0,0,0.3,0);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f().s("#378FAB").ss(0.8).p("AAMhmIg0DcIBSgqg");
	this.shape_1226.setTransform(76,-190.3,1,1,0,0,0,0,1.2);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f().s("#378FAB").ss(0.8).p("AiFBMICygGIBgiIg");
	this.shape_1227.setTransform(67.7,65.3,1,1,0,0,0,1,0);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f().s("#378FAB").ss(0.8).p("AgnhZIgeC4ICIgkg");
	this.shape_1228.setTransform(84.3,-133.5,1,1,0,0,0,0,0.5);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f().s("#378FAB").ss(0.8).p("AAaiJIiOBOIDoC+g");
	this.shape_1229.setTransform(170,109.1,1,1,0,0,0,0,0.1);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f().s("#378FAB").ss(0.8).p("AiRi6IgeF4IFahag");
	this.shape_1230.setTransform(51.7,96.1,1,1,0,0,0,0,0.3);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f().s("#378FAB").ss(0.8).p("AiuAEICoBUICyisg");
	this.shape_1231.setTransform(52.2,114.4,1,1,0,0,0,0.6,0);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f().s("#378FAB").ss(0.8).p("AiDBiIEGAAIAMi+g");
	this.shape_1232.setTransform(73.2,167.4,1,1,0,0,0,0.7,0);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f().s("#378FAB").ss(0.8).p("AiHgpIBCCOIDEjKg");
	this.shape_1233.setTransform(56.2,149.7,1,1,0,0,0,0.1,0);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f().s("#378FAB").ss(0.8).p("Ah+hlIBODKICsiIg");
	this.shape_1234.setTransform(60.2,204.4,1,1,0,0,0,0.2,0.1);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f().s("#378FAB").ss(0.8).p("ABVhjIi4DKIDQgqg");
	this.shape_1235.setTransform(97.5,87.5,1,1,0,0,0,0,0.4);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f().s("#378FAB").ss(0.8).p("Ah2hoIBsDQICCiIg");
	this.shape_1236.setTransform(56.5,-48.9,1,1,0,0,0,0.3,0.2);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f().s("#378FAB").ss(0.8).p("AAohNIh8COICsASg");
	this.shape_1237.setTransform(68.4,16.3,1,1,0,0,0,0,0.3);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f().s("#378FAB").ss(0.8).p("ABRhVIjKBqID6BCg");
	this.shape_1238.setTransform(59.5,192.1,1,1,0,0,0,0,0.1);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f().s("#378FAB").ss(0.8).p("AgGiqIh4C4ID6Ccg");
	this.shape_1239.setTransform(54,-148.3,1,1,0,0,0,0,0.4);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f().s("#378FAB").ss(0.8).p("Ah+hHIBgCaICaAAg");
	this.shape_1240.setTransform(54.6,-139.4,1,1,0,0,0,0.6,0.6);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f().s("#378FAB").ss(0.8).p("AAAirIigAqIE8Eeg");
	this.shape_1241.setTransform(53.2,90.1);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f().s("#378FAB").ss(0.8).p("AhwhgIAkC+IC4iIg");
	this.shape_1242.setTransform(61,-175.4);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f().s("#378FAB").ss(0.8).p("ABHiUIjEEwIEAgkg");
	this.shape_1243.setTransform(47.9,-23.2,1,1,0,0,0,0,0.5);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f().s("#378FAB").ss(0.8).p("AAFhMIheCOIC4hwg");
	this.shape_1244.setTransform(60.5,-203.2);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f().s("#378FAB").ss(0.8).p("AhChGIhCB2IEAAYg");
	this.shape_1245.setTransform(85.8,3.5,1,1,0,0,0,0,0.2);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f().s("#378FAB").ss(0.8).p("ABFipIisgSIDQFmg");
	this.shape_1246.setTransform(70.3,41.3);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f().s("#378FAB").ss(0.8).p("AAVhWIh2CmIDKhqg");
	this.shape_1247.setTransform(57.1,186.2,1,1,0,0,0,0,0.1);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f().s("#378FAB").ss(0.8).p("AgvhsIgMDQIB2img");
	this.shape_1248.setTransform(53.3,184.2,1,1,0,0,0,0,0.1);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f().s("#378FAB").ss(0.8).p("AhChjIASDEIBwiCg");
	this.shape_1249.setTransform(48.6,218.2,1,1,0,0,0,0,0.2);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f().s("#378FAB").ss(0.8).p("ACugmIlIAeIFaAug");
	this.shape_1250.setTransform(86.8,73.2);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f().s("#378FAB").ss(0.8).p("AhmgvIBUBkIB2geg");
	this.shape_1251.setTransform(66,219.6,1,1,0,0,0,0.6,0.3);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f().s("#378FAB").ss(0.8).p("AhNhiIAeDQIB8gYg");
	this.shape_1252.setTransform(80.4,211.4,1,1,0,0,0,0.1,0.7);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f().s("#378FAB").ss(0.8).p("Ag8iAIgkD0IC+j0g");
	this.shape_1253.setTransform(57,-118.8);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f().s("#378FAB").ss(0.8).p("AgwhtIhUDcIEGg8g");
	this.shape_1254.setTransform(55.8,134.5,1,1,0,0,0,0,0.2);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f().s("#378FAB").ss(0.8).p("AiViLIgMEYIE8h+g");
	this.shape_1255.setTransform(50.3,6.2,1,1,0,0,0,0,0.2);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f().s("#378FAB").ss(0.8).p("Ag2gvIAeBkIBMgeg");
	this.shape_1256.setTransform(46.4,-198.4,1,1,0,0,0,0.2,0.4);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f().s("#378FAB").ss(0.8).p("AglgcIA6BSIAShwg");
	this.shape_1257.setTransform(47.7,-190.5,1,1,0,0,0,0.2,0);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f().s("#378FAB").ss(0.8).p("AAShZIhGCmIBqAYg");
	this.shape_1258.setTransform(47.8,-175.2,1,1,0,0,0,0,0.8);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f().s("#378FAB").ss(0.8).p("AgwhuIgMDQIB2i4g");
	this.shape_1259.setTransform(47.4,-157.2);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f().s("#378FAB").ss(0.8).p("AhUg/IA2CCIBwgwg");
	this.shape_1260.setTransform(42.9,121.6,1,1,0,0,0,0.3,0.3);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f().s("#378FAB").ss(0.8).p("AiXA0IEAAYIA8iUg");
	this.shape_1261.setTransform(50.3,14.8,1,1,0,0,0,1,0);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f().s("#378FAB").ss(0.8).p("AhVhWIAGCyICggqg");
	this.shape_1262.setTransform(45.1,68.3,1,1,0,0,0,0,0.4);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f().s("#378FAB").ss(0.8).p("AgyioIgkDKICmCKg");
	this.shape_1263.setTransform(45.2,56.5,1,1,0,0,0,0,0.8);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f().s("#378FAB").ss(0.8).p("AhGhZIBGCsIBIimg");
	this.shape_1264.setTransform(42.5,-176.6,1,1,0,0,0,0.1,0);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f().s("#378FAB").ss(0.8).p("AAJhgIhwDEIDQgqg");
	this.shape_1265.setTransform(40.3,-137.1,1,1,0,0,0,0,0.4);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f().s("#378FAB").ss(0.8).p("AhmhSICsDKIAkj0g");
	this.shape_1266.setTransform(40.5,-119.1,1,1,0,0,0,0.3,0);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f().s("#378FAB").ss(0.8).p("AAFhgIg6B8IBqBIg");
	this.shape_1267.setTransform(46.1,-205.9,1,1,0,0,0,0,0.6);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f().s("#378FAB").ss(0.8).p("AhjhTIgSBwIDcA2g");
	this.shape_1268.setTransform(61.5,-187.7,1,1,0,0,0,0,0.3);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f().s("#378FAB").ss(0.8).p("AANgnIhSBMICOAGg");
	this.shape_1269.setTransform(42.3,-189.2,1,1,0,0,0,0,0.2);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f().s("#378FAB").ss(0.8).p("AhMhlIgeB8IDKBOg");
	this.shape_1270.setTransform(37.6,-116.8,1,1,0,0,0,0,0.4);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f().s("#378FAB").ss(0.8).p("AhqiRIAMEkIDEkwg");
	this.shape_1271.setTransform(44.8,-22.9);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f().s("#378FAB").ss(0.8).p("ABKhnIisCIIDKBIg");
	this.shape_1272.setTransform(65,211.4,1,1,0,0,0,0,0.3);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f().s("#378FAB").ss(0.8).p("AgbgcIgkAuIB2AMg");
	this.shape_1273.setTransform(41.1,-219.2,1,1,0,0,0,0,0.1);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f().s("#378FAB").ss(0.8).p("AhehdIASC4ICmiCg");
	this.shape_1274.setTransform(36.4,-82.5,1,1,0,0,0,0,0.1);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f().s("#378FAB").ss(0.8).p("Ag2hsIA6DWIA2iIg");
	this.shape_1275.setTransform(41.6,197.7,1,1,0,0,0,0.2,0.4);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f().s("#378FAB").ss(0.8).p("AgBhrIhmDcIDQgMg");
	this.shape_1276.setTransform(44.5,-48.3,1,1,0,0,0,0,0.5);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f().s("#378FAB").ss(0.8).p("ABthgIkAAkIEwCag");
	this.shape_1277.setTransform(50.1,-1.9);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f().s("#378FAB").ss(0.8).p("Ag5hCIAeCsIBSjcg");
	this.shape_1278.setTransform(45.3,134.9);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f().s("#378FAB").ss(0.8).p("AhHhkIAwDEIBeiOg");
	this.shape_1279.setTransform(54,-205.9,1,1,0,0,0,0.1,0.2);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f().s("#378FAB").ss(0.8).p("ABPiAIisByIC+COg");
	this.shape_1280.setTransform(88.5,-2.1,1,1,0,0,0,0,0.2);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f().s("#378FAB").ss(0.8).p("AhhhxIC+DcIAMjQg");
	this.shape_1281.setTransform(32.3,-158,1,1,0,0,0,0.4,0);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f().s("#378FAB").ss(0.8).p("AAfhTIiCCgIDKAMg");
	this.shape_1282.setTransform(32.1,-176.9,1,1,0,0,0,0,0.3);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f().s("#378FAB").ss(0.8).p("AhPhLIASCaICIg2g");
	this.shape_1283.setTransform(35,143.3,1,1,0,0,0,0.1,0.3);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f().s("#378FAB").ss(0.8).p("Ah2hWIByCsIB8iCg");
	this.shape_1284.setTransform(36.7,177.8,1,1,0,0,0,0.3,0.1);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f().s("#378FAB").ss(0.8).p("Ag9AdIBwBOIAMjQg");
	this.shape_1285.setTransform(42.3,183.4,1,1,0,0,0,0.2,0);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f().s("#378FAB").ss(0.8).p("AhnhyIAADiIDKiUg");
	this.shape_1286.setTransform(37.3,-103.2,1,1,0,0,0,0,0.1);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f().s("#378FAB").ss(0.8).p("AhiAyIC4A2IASjKg");
	this.shape_1287.setTransform(37.2,-97.1,1,1,0,0,0,0.4,0);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f().s("#378FAB").ss(0.8).p("AAlhIIiIA2IDKBYg");
	this.shape_1288.setTransform(38.7,152.9);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f().s("#378FAB").ss(0.8).p("AhrACIA2A8ICUh2g");
	this.shape_1289.setTransform(32,-141.5,1,1,0,0,0,0.3,0);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f().s("#378FAB").ss(0.8).p("AAxhXIh8BIICaBkg");
	this.shape_1290.setTransform(34.5,137.1,1,1,0,0,0,0,0.2);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f().s("#378FAB").ss(0.8).p("AgthqIhCDWIDchOg");
	this.shape_1291.setTransform(33.3,-62.4,1,1,0,0,0,0,0.3);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f().s("#378FAB").ss(0.8).p("AhRgCICaCIIAMkMg");
	this.shape_1292.setTransform(37.1,-73.1,1,1,0,0,0,0.2,0);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f().s("#378FAB").ss(0.8).p("AhFhzIhCBOIEACOg");
	this.shape_1293.setTransform(29.1,-157.6,1,1,0,0,0,0,0.2);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f().s("#378FAB").ss(0.8).p("AiChjIA2DKIDKg8g");
	this.shape_1294.setTransform(28.8,-151.3,1,1,0,0,0,0.2,0.3);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f().s("#378FAB").ss(0.8).p("Ag6hHIA6CIIA8h8g");
	this.shape_1295.setTransform(40.8,-210.2,1,1,0,0,0,0.2,0);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f().s("#378FAB").ss(0.8).p("AhVhdIgMC+IC+g2g");
	this.shape_1296.setTransform(27.7,73.1,1,1,0,0,0,0,0.3);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f().s("#378FAB").ss(0.8).p("Ag9igIAkFUIBYhOg");
	this.shape_1297.setTransform(83.7,41.8,1,1,0,0,0,0.2,1.3);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f().s("#378FAB").ss(0.8).p("AhMgbIB8DWIAel4g");
	this.shape_1298.setTransform(29.2,96.1);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f().s("#378FAB").ss(0.8).p("AgwhZIBkCyIAGhqg");
	this.shape_1299.setTransform(71.9,-122,1,1,0,0,0,0.5,0.6);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f().s("#378FAB").ss(0.8).p("AgrgtIA6BeIAkgwg");
	this.shape_1300.setTransform(33.6,-222,1,1,0,0,0,0.5,0.4);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f().s("#378FAB").ss(0.8).p("AhegmIAABMICsgog");
	this.shape_1301.setTransform(28.6,59.4);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f().s("#378FAB").ss(0.8).p("AAChOIhYB8ICsAkg");
	this.shape_1302.setTransform(27.8,51.2,1,1,0,0,0,0,0.3);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f().s("#378FAB").ss(0.8).p("AAKhjIhGDKIB8hIg");
	this.shape_1303.setTransform(33,125.5,1,1,0,0,0,0,0.6);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f().s("#378FAB").ss(0.8).p("AhThZIgqCyID0hZg");
	this.shape_1304.setTransform(37.1,160,1,1,0,0,0,0,0.1);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f().s("#378FAB").ss(0.8).p("AAth6IiUCIIDQBsg");
	this.shape_1305.setTransform(24.7,-197.6,1,1,0,0,0,0,0.3);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f().s("#378FAB").ss(0.8).p("AhqhbIAeC4ICyhOg");
	this.shape_1306.setTransform(25.1,-187,1,1,0,0,0,0.1,0.2);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f().s("#378FAB").ss(0.8).p("AhdAAIAwBSICCigg");
	this.shape_1307.setTransform(26.8,-177.7,1,1,0,0,0,0.1,0);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f().s("#378FAB").ss(0.8).p("Ag/goICCCaIAAjog");
	this.shape_1308.setTransform(117.5,14,1,1,0,0,0,0.2,0);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f().s("#378FAB").ss(0.8).p("AAOhYIg0CyIBShOg");
	this.shape_1309.setTransform(39.2,-193.9,1,1,0,0,0,0,0.8);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f().s("#378FAB").ss(0.8).p("AhhgqIBIBYIB2gqg");
	this.shape_1310.setTransform(31.2,38.5,1,1,0,0,0,0.5,0.2);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f().s("#378FAB").ss(0.8).p("Ag/hiIASDQIBqAGg");
	this.shape_1311.setTransform(28,104.3,1,1,0,0,0,0.1,1);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f().s("#378FAB").ss(0.8).p("AAlhaIiCCIIC+Awg");
	this.shape_1312.setTransform(30.3,29.6,1,1,0,0,0,0,0.3);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f().s("#378FAB").ss(0.8).p("AgVhTIhICaIC4ASg");
	this.shape_1313.setTransform(26.7,177.8,1,1,0,0,0,0,0.4);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f().s("#378FAB").ss(0.8).p("AAgh8Ih8D6IC+hmg");
	this.shape_1314.setTransform(163.4,-53.2,1,1,0,0,0,0,0.5);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f().s("#378FAB").ss(0.8).p("Ag6g+IBSCgIAkjKg");
	this.shape_1315.setTransform(34.1,49.3,1,1,0,0,0,0.1,0);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f().s("#378FAB").ss(0.8).p("ABVicIkkB+IGiC4g");
	this.shape_1316.setTransform(12.9,4.7,1,1,0,0,0,0,0.1);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f().s("#378FAB").ss(0.8).p("AjLidIEeFCICEiKg");
	this.shape_1317.setTransform(13.3,17.9,1,1,0,0,0,0.8,0.5);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f().s("#378FAB").ss(0.8).p("ABXhbIisAqICyCIg");
	this.shape_1318.setTransform(27.7,68.3);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f().s("#378FAB").ss(0.8).p("ABThGIi4CIIDcg8g");
	this.shape_1319.setTransform(17.9,-127.9,1,1,0,0,0,0,0.2);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f().s("#378FAB").ss(0.8).p("AhchRIBICgIBwiOg");
	this.shape_1320.setTransform(26.8,192.8,1,1,0,0,0,0.2,0);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f().s("#378FAB").ss(0.8).p("AA7hYIh2AAIB8Cmg");
	this.shape_1321.setTransform(22.7,-218.2);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f().s("#378FAB").ss(0.8).p("AgRhYIhgAkIDcCCg");
	this.shape_1322.setTransform(18.5,-218.1);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f().s("#378FAB").ss(0.8).p("AgQgxIg2BGICIAeg");
	this.shape_1323.setTransform(28.6,-13,1,1,0,0,0,0,0.2);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f().s("#378FAB").ss(0.8).p("ABEheIiUCyICmASg");
	this.shape_1324.setTransform(35,218,1,1,0,0,0,0,0.5);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f().s("#378FAB").ss(0.8).p("AhXh/IAYD6ICUiyg");
	this.shape_1325.setTransform(33.3,213.7,1,1,0,0,0,0,0.2);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f().s("#378FAB").ss(0.8).p("AgDgtIhCAuICIAqg");
	this.shape_1326.setTransform(21.3,38.6,1,1,0,0,0,0,0.1);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f().s("#378FAB").ss(0.8).p("AhEhUIAwCmIBYh8g");
	this.shape_1327.setTransform(21.3,47.4,1,1,0,0,0,0.1,0.1);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f().s("#378FAB").ss(0.8).p("AiChdIA8C4IDEigg");
	this.shape_1328.setTransform(47.3,29.5,1,1,0,0,0,0.1,0);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f().s("#378FAB").ss(0.8).p("AAbhpIhwCOICsBIg");
	this.shape_1329.setTransform(33.1,197.4,1,1,0,0,0,0,0.4);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f().s("#378FAB").ss(0.8).p("AgyhSIgGCCIBqAqg");
	this.shape_1330.setTransform(54.2,168.9,1,1,0,0,0,0,0.7);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f().s("#378FAB").ss(0.8).p("AgthsIAqDoIA0hIg");
	this.shape_1331.setTransform(22.1,-22.3,1,1,0,0,0,0.2,1.2);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f().s("#378FAB").ss(0.8).p("Ai1gcIDWCOICWjig");
	this.shape_1332.setTransform(9,-80.7,1,1,0,0,0,0.5,0);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f().s("#378FAB").ss(0.8).p("Ai8htIAADcIFshUg");
	this.shape_1333.setTransform(9.2,-94.7,1,1,0,0,0,0,0.1);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f().s("#378FAB").ss(0.8).p("AhXhBIg8BYIEYAqg");
	this.shape_1334.setTransform(15.9,-216.7,1,1,0,0,0,0,0.1);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f().s("#378FAB").ss(0.8).p("AhRAgIBCAYIBYhkg");
	this.shape_1335.setTransform(20,139.9,1,1,0,0,0,0.5,0);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f().s("#378FAB").ss(0.8).p("AiLhZICECyICUiIg");
	this.shape_1336.setTransform(15.5,-205.3,1,1,0,0,0,0.4,0.1);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f().s("#378FAB").ss(0.8).p("AAlhLIhYBkIBqA2g");
	this.shape_1337.setTransform(23.1,143.3,1,1,0,0,0,0,0.4);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f().s("#378FAB").ss(0.8).p("AAsiLIh2EeICahOg");
	this.shape_1338.setTransform(18.8,129.1,1,1,0,0,0,0,0.8);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f().s("#378FAB").ss(0.8).p("AgJiTIiuCaIFsCKg");
	this.shape_1339.setTransform(8.7,-106.4,1,1,0,0,0,0,0.2);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f().s("#378FAB").ss(0.8).p("AgDhFIg2BGIBwBCg");
	this.shape_1340.setTransform(35.1,-210.1,1,1,0,0,0,0,0.3);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f().s("#378FAB").ss(0.8).p("AhogBIC+BAIAeh8g");
	this.shape_1341.setTransform(19,-121.2,1,1,0,0,0,0.8,0);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f().s("#378FAB").ss(0.8).p("Ag3h0IAqDiIBGiag");
	this.shape_1342.setTransform(18.8,173.7,1,1,0,0,0,0.1,0.3);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f().s("#378FAB").ss(0.8).p("AinhfIAAC+IFChwg");
	this.shape_1343.setTransform(7.7,116.1);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f().s("#378FAB").ss(0.8).p("ACVhnIkwCCIFCBOg");
	this.shape_1344.setTransform(6.5,103.9,1,1,0,0,0,0,0.1);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f().s("#378FAB").ss(0.8).p("AhzAYIDuAqIAGiCg");
	this.shape_1345.setTransform(37,166.4,1,1,0,0,0,0.9,0);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f().s("#378FAB").ss(0.8).p("Ag3h+IA6D0IA2iyg");
	this.shape_1346.setTransform(35,-197.2,1,1,0,0,0,0.1,0.3);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f().s("#378FAB").ss(0.8).p("AgNhPIgSCgIBAhOg");
	this.shape_1347.setTransform(18.7,-169.1,1,1,0,0,0,0,0.7);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f().s("#378FAB").ss(0.8).p("Ahsg/IAYCCIC4iIg");
	this.shape_1348.setTransform(16.2,-128.2);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f().s("#378FAB").ss(0.8).p("AhShDIBkCsIBCjWg");
	this.shape_1349.setTransform(20.4,-62.4,1,1,0,0,0,0.2,0);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f().s("#378FAB").ss(0.8).p("ABWhDIjWgMIEMCag");
	this.shape_1350.setTransform(167,-33);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f().s("#378FAB").ss(0.8).p("Aijg4IAABwIEwhYg");
	this.shape_1351.setTransform(7.9,-48.5);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f().s("#378FAB").ss(0.8).p("AiTADIEABUIAwisg");
	this.shape_1352.setTransform(7.1,-43.2,1,1,0,0,0,0.8,0);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f().s("#378FAB").ss(0.8).p("AiPihIgMDEIEqB+g");
	this.shape_1353.setTransform(6.5,18.1,1,1,0,0,0,0,0.4);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f().s("#378FAB").ss(0.8).p("AgkhTIgwCsICmgeg");
	this.shape_1354.setTransform(25.8,-43,1,1,0,0,0,0,0.4);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f().s("#378FAB").ss(0.8).p("AAZiCIhkEMICahCg");
	this.shape_1355.setTransform(12.9,-147.8,1,1,0,0,0,0,0.7);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f().s("#378FAB").ss(0.8).p("AhNh+IAkD0IB2jcg");
	this.shape_1356.setTransform(16.7,211.1);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f().s("#378FAB").ss(0.8).p("AhuggIB2COIBmjcg");
	this.shape_1357.setTransform(33.4,-48.5,1,1,0,0,0,0.2,0);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f().s("#378FAB").ss(0.8).p("ABhhSIjoCCIEYAkg");
	this.shape_1358.setTransform(4.5,47.2,1,1,0,0,0,0,0.2);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f().s("#378FAB").ss(0.8).p("AiIhOIDoCsIBCgwg");
	this.shape_1359.setTransform(6.3,30.1,1,1,0,0,0,1.7,0.8);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f().s("#378FAB").ss(0.8).p("AiYhTIAACmIEkh8g");
	this.shape_1360.setTransform(7.4,-6.8);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f().s("#378FAB").ss(0.8).p("ABshyIj6C+IEkAqg");
	this.shape_1361.setTransform(6.4,-22.7,1,1,0,0,0,0,0.2);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f().s("#378FAB").ss(0.8).p("AhXioICaFIIAYlOg");
	this.shape_1362.setTransform(62.3,89.8,1,1,0,0,0,0.2,0);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f().s("#378FAB").ss(0.8).p("AiPhRIAACmIESgSg");
	this.shape_1363.setTransform(4.7,75.9,1,1,0,0,0,0,0.2);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f().s("#378FAB").ss(0.8).p("AA1hVIjKCUIEwAYg");
	this.shape_1364.setTransform(6.5,-60.4,1,1,0,0,0,0,0.2);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f().s("#378FAB").ss(0.8).p("AiggcIDKCsIB4keg");
	this.shape_1365.setTransform(7.3,128.7,1,1,0,0,0,0.3,0);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f().s("#378FAB").ss(0.8).p("ABEhtIiUDiICmgqg");
	this.shape_1366.setTransform(20,-80.4,1,1,0,0,0,0,0.6);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f().s("#378FAB").ss(0.8).p("AifhuIAGDcIEwiCg");
	this.shape_1367.setTransform(6.3,95.4);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f().s("#378FAB").ss(0.8).p("AiPhMIgGCaIEegqg");
	this.shape_1368.setTransform(5.3,59.7,1,1,0,0,0,0,0.1);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f().s("#378FAB").ss(0.8).p("AgghlIASC4IAuigg");
	this.shape_1369.setTransform(14.6,153.4,1,1,0,0,0,0,0.1);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f().s("#378FAB").ss(0.8).p("AAFhNIhSCIICaAYg");
	this.shape_1370.setTransform(16.7,192.8,1,1,0,0,0,0,0.4);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f().s("#378FAB").ss(0.8).p("AhShDIBeCgIBIi+g");
	this.shape_1371.setTransform(25.8,-27.6,1,1,0,0,0,0.2,0);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f().s("#378FAB").ss(0.8).p("AiFhJIAMCUID0hCg");
	this.shape_1372.setTransform(4.9,-35.3,1,1,0,0,0,0,0.1);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f().s("#378FAB").ss(0.8).p("ACdgSIkYgkIEYBwg");
	this.shape_1373.setTransform(3.3,57.5);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f().s("#378FAB").ss(0.8).p("Ah0AEICCCEIBmkMg");
	this.shape_1374.setTransform(4,-148.3,1,1,0,0,0,0.2,0);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f().s("#378FAB").ss(0.8).p("AhshaIgMCyIDoiIg");
	this.shape_1375.setTransform(4.2,-156.7);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f().s("#378FAB").ss(0.8).p("ACCg2IkSASIE2BYg");
	this.shape_1376.setTransform(4.8,88);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f().s("#378FAB").ss(0.8).p("Ahcg4IgeBMIDiAkg");
	this.shape_1377.setTransform(6.8,-183.4,1,1,0,0,0,0,0.1);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f().s("#378FAB").ss(0.8).p("AgdhSIgwCgICahqg");
	this.shape_1378.setTransform(20.9,154,1,1,0,0,0,0,0.1);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f().s("#378FAB").ss(0.8).p("Ah0hiICaDEIBUiIg");
	this.shape_1379.setTransform(5.5,188.6,1,1,0,0,0,0.5,0.2);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f().s("#378FAB").ss(0.8).p("AAwh3Ih2DcICOAeg");
	this.shape_1380.setTransform(19.6,213.5,1,1,0,0,0,0,0.7);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f().s("#378FAB").ss(0.8).p("AhBg4IgYBMICmAkg");
	this.shape_1381.setTransform(6.5,-201.9,1,1,0,0,0,0,0.2);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f().s("#378FAB").ss(0.8).p("AhYg1IAABqICmhGg");
	this.shape_1382.setTransform(6.4,-194.6);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f().s("#378FAB").ss(0.8).p("AhpjAIg8F+IFIjig");
	this.shape_1383.setTransform(164.7,-21.5,1,1,0,0,0,0,0.2);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f().s("#378FAB").ss(0.8).p("AhFhgIgMBCICOBwg");
	this.shape_1384.setTransform(8.1,-204.2,1,1,0,0,0,0,0.5);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f().s("#378FAB").ss(0.8).p("AhyhFIAAB2IDWAYg");
	this.shape_1385.setTransform(1.8,-76.3,1,1,0,0,0,0,0.3);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f().s("#378FAB").ss(0.8).p("AhuhXIAMCsIDKiUg");
	this.shape_1386.setTransform(1.4,-62.8);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f().s("#378FAB").ss(0.8).p("AhMATIBwBIIAqiyg");
	this.shape_1387.setTransform(21.1,159.7,1,1,0,0,0,0.3,0);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f().s("#378FAB").ss(0.8).p("AAFhyIguC+IBSA2g");
	this.shape_1388.setTransform(8.3,211,1,1,0,0,0,0,1.2);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f().s("#378FAB").ss(0.8).p("AgMhjIg2CIICCBCg");
	this.shape_1389.setTransform(48.6,204.7,1,1,0,0,0,0,0.6);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f().s("#378FAB").ss(0.8).p("Ag1hvIAkDQIBGjKg");
	this.shape_1390.setTransform(28.7,125.5);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f().s("#378FAB").ss(0.8).p("Ah/gcIgGB8ID6i+g");
	this.shape_1391.setTransform(5.5,-24.9);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f().s("#378FAB").ss(0.8).p("AhLhFIAqCIIBqhkg");
	this.shape_1392.setTransform(1.6,201.8,1,1,0,0,0,0.1,0.1);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f().s("#378FAB").ss(0.8).p("AhbiVIC+EkIAAjig");
	this.shape_1393.setTransform(17.3,-106.2,1,1,0,0,0,0.4,0.2);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f().s("#378FAB").ss(0.8).p("AhxhrIAADcIDcgqg");
	this.shape_1394.setTransform(2.3,154.9,1,1,0,0,0,0,0.3);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f().s("#378FAB").ss(0.8).p("AhfgBIBwBYIBOisg");
	this.shape_1395.setTransform(172.4,130.7,1,1,0,0,0,0.3,0);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f().s("#378FAB").ss(0.8).p("Ah7hCIAACCIDoiCg");
	this.shape_1396.setTransform(3.3,45.5);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f().s("#378FAB").ss(0.8).p("ABghfIjKAGIDcCyg");
	this.shape_1397.setTransform(1.6,152.7);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f().s("#378FAB").ss(0.8).p("Ag/hmIgGDQICIhOg");
	this.shape_1398.setTransform(-1.5,-137.1,1,1,0,0,0,0,0.4);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f().s("#378FAB").ss(0.8).p("ABHhdIimBIIDEBwg");
	this.shape_1399.setTransform(7.1,-186.9,1,1,0,0,0,0,0.1);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f().s("#378FAB").ss(0.8).p("AiPhyID6DuIA2hmg");
	this.shape_1400.setTransform(-21.2,206.3,1,1,0,0,0,1.1,0.6);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f().s("#378FAB").ss(0.8).p("AA6gfIiaBAIDQgGg");
	this.shape_1401.setTransform(15,-138);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f().s("#378FAB").ss(0.8).p("Ag2AHIA6BaIAwi+g");
	this.shape_1402.setTransform(3.7,207.7,1,1,0,0,0,0.1,0);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f().s("#378FAB").ss(0.8).p("AAlhAIheAqIB2BSg");
	this.shape_1403.setTransform(-12.8,172.5,1,1,0,0,0,0,0.1);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f().s("#378FAB").ss(0.8).p("AhjgZIAkBqICaigg");
	this.shape_1404.setTransform(27.9,85.2);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f().s("#378FAB").ss(0.8).p("AAhh6IiyDuIEqiag");
	this.shape_1405.setTransform(-22.1,182.6,1,1,0,0,0,0,0.1);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f().s("#378FAB").ss(0.8).p("ACahOIkqCaIEwAGg");
	this.shape_1406.setTransform(-22.1,186.7,1,1,0,0,0,0,0.2);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f().s("#378FAB").ss(0.8).p("AAQhAIhwCCIDEgeg");
	this.shape_1407.setTransform(53.4,221.3,1,1,0,0,0,0,0.2);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f().s("#378FAB").ss(0.8).p("AhzgpIAYB8IDEimg");
	this.shape_1408.setTransform(2.5,170.1);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f().s("#378FAB").ss(0.8).p("Ah+h/IA8EAIC+iOg");
	this.shape_1409.setTransform(-20.3,-13.6,1,1,0,0,0,0.1,0.2);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f().s("#378FAB").ss(0.8).p("Ah1iGIAqESIC+hUg");
	this.shape_1410.setTransform(170.2,116.9,1,1,0,0,0,0.1,0.4);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f().s("#378FAB").ss(0.8).p("AhphWIAACyIDKgGg");
	this.shape_1411.setTransform(1.5,134.8,1,1,0,0,0,0,0.4);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f().s("#378FAB").ss(0.8).p("AB7hOIj0CgIEAgMg");
	this.shape_1412.setTransform(-20.8,-34.7,1,1,0,0,0,0,0.2);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f().s("#378FAB").ss(0.8).p("AhbhxICyDcIAMjEg");
	this.shape_1413.setTransform(-17.4,10.6,1,1,0,0,0,0.4,0.1);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f().s("#378FAB").ss(0.8).p("Ah4gzID6BwIAGh8g");
	this.shape_1414.setTransform(-20.1,-21.4,1,1,0,0,0,0.9,0);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f().s("#378FAB").ss(0.8).p("ADrhWInMBOIHYBeg");
	this.shape_1415.setTransform(-33.3,-63);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f().s("#378FAB").ss(0.8).p("AjxhwIBmDiIFyiCg");
	this.shape_1416.setTransform(-31.5,-52.4,1,1,0,0,0,0.2,0.1);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f().s("#378FAB").ss(0.8).p("AiqBCIFygSIAAhwg");
	this.shape_1417.setTransform(-26.9,-47.8,1,1,0,0,0,1.6,-0.1);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f().s("#378FAB").ss(0.8).p("Aieh9ICKD6ICyisg");
	this.shape_1418.setTransform(-24.1,-121.9,1,1,0,0,0,0.3,0.1);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f().s("#378FAB").ss(0.8).p("ABQhvIjECmIDuA8g");
	this.shape_1419.setTransform(5,173.3,1,1,0,0,0,0,0.3);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f().s("#378FAB").ss(0.8).p("AhQheIAGCgICUAkg");
	this.shape_1420.setTransform(1.4,188.7,1,1,0,0,0,0,0.6);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f().s("#378FAB").ss(0.8).p("AhwhOIgMCaIDuh2g");
	this.shape_1421.setTransform(5.8,-173.6);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f().s("#378FAB").ss(0.8).p("Ag5g4IB2COIAAiyg");
	this.shape_1422.setTransform(-15.1,135.1,1,1,0,0,0,0.2,0);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f().s("#378FAB").ss(0.8).p("ABKhgIi4C+IDohOg");
	this.shape_1423.setTransform(-17.8,-182.8,1,1,0,0,0,0,0.3);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f().s("#378FAB").ss(0.8).p("AA+hqIh2DiIB2gkg");
	this.shape_1424.setTransform(-15.3,118.2,1,1,0,0,0,0,0.9);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f().s("#378FAB").ss(0.8).p("AhrgmIBCBkICOh8g");
	this.shape_1425.setTransform(-19.1,27.6,1,1,0,0,0,0.2,0);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f().s("#378FAB").ss(0.8).p("AhLh2IgeD0IDQgYg");
	this.shape_1426.setTransform(-19.4,11.6,1,1,0,0,0,0,0.5);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f().s("#378FAB").ss(0.8).p("AiVjQIA2GiID0jAg");
	this.shape_1427.setTransform(-23.9,105,1,1,0,0,0,0.1,0.4);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f().s("#378FAB").ss(0.8).p("AiJg2IESCUIAMi+g");
	this.shape_1428.setTransform(4.8,73,1,1,0,0,0,0.7,0);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f().s("#378FAB").ss(0.8).p("Ah5hTIAACsIDoAAg");
	this.shape_1429.setTransform(3.1,30.1,1,1,0,0,0,0,0.3);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f().s("#378FAB").ss(0.8).p("AAShGIiaCCIESAMg");
	this.shape_1430.setTransform(-23,136.6,1,1,0,0,0,0,0.2);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f().s("#378FAB").ss(0.8).p("AhxhWIAMCsIDQheg");
	this.shape_1431.setTransform(-17.4,-164.8,1,1,0,0,0,0,0.1);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f().s("#378FAB").ss(0.8).p("AhkAGIDEBUIAMiyg");
	this.shape_1432.setTransform(-17,-156.9,1,1,0,0,0,0.5,0);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f().s("#378FAB").ss(0.8).p("AhqhxIDcDiIAGiag");
	this.shape_1433.setTransform(-20.4,56.5,1,1,0,0,0,0.7,0.3);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f().s("#378FAB").ss(0.8).p("AgfhZIhUBqIDiBIg");
	this.shape_1434.setTransform(-20.2,43.2,1,1,0,0,0,0,0.2);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f().s("#378FAB").ss(0.8).p("ACUhtIkkgGIEqDig");
	this.shape_1435.setTransform(-24.6,95.3);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f().s("#378FAB").ss(0.8).p("AiLBPIEkAGIAAimg");
	this.shape_1436.setTransform(-24.3,75.7,1,1,0,0,0,0.8,0);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f().s("#378FAB").ss(0.8).p("AgaiOIioEeIGEg8g");
	this.shape_1437.setTransform(-29.2,59.2,1,1,0,0,0,0,0.2);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f().s("#378FAB").ss(0.8).p("AjKgSIBgBkIEkigg");
	this.shape_1438.setTransform(-28.1,75.5,1,1,0,0,0,0.3,0);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f().s("#378FAB").ss(0.8).p("AhChbICOCyIAAiCg");
	this.shape_1439.setTransform(-16.3,43.4,1,1,0,0,0,0.5,0.3);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f().s("#378FAB").ss(0.8).p("AiHiLICyESIBgkGg");
	this.shape_1440.setTransform(-22.7,156.6,1,1,0,0,0,0.3,0);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f().s("#378FAB").ss(0.8).p("AgtCNIBegqIAAjcg");
	this.shape_1441.setTransform(-13.9,155.7,1,1,0,0,0,0.2,-0.2);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f().s("#378FAB").ss(0.8).p("AiOhFIEwCIIAAiCg");
	this.shape_1442.setTransform(-21.3,201.1,1,1,0,0,0,1.1,0);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f().s("#378FAB").ss(0.8).p("AhCijIB8E2IAMkYg");
	this.shape_1443.setTransform(28.4,5.4,1,1,0,0,0,0.2,0.1);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f().s("#378FAB").ss(0.8).p("AAUhmIigAeIEYCmg");
	this.shape_1444.setTransform(-23.8,-81.1);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f().s("#378FAB").ss(0.8).p("ABKhTIiOB8ICOAwg");
	this.shape_1445.setTransform(-16.5,30.2,1,1,0,0,0,0,0.4);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f().s("#378FAB").ss(0.8).p("AAeiMIhGC+IBSBmg");
	this.shape_1446.setTransform(31,-22.1,1,1,0,0,0,0,1.2);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f().s("#378FAB").ss(0.8).p("Agzh6Ii0D0IHMhOg");
	this.shape_1447.setTransform(-32.7,-76,1,1,0,0,0,0,0.1);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f().s("#378FAB").ss(0.8).p("AgjhsIh+DWIFCiCg");
	this.shape_1448.setTransform(-24.1,-145.3);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f().s("#378FAB").ss(0.8).p("AhbA+IC+AYIAAimg");
	this.shape_1449.setTransform(-17.4,-7.1,1,1,0,0,0,0.5,0);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f().s("#378FAB").ss(0.8).p("Ai8g+IB+COID0igg");
	this.shape_1450.setTransform(-26.4,-34.7,1,1,0,0,0,0.3,0);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f().s("#378FAB").ss(0.8).p("AhdilIBOFgIBwgwg");
	this.shape_1451.setTransform(-27,212,1,1,0,0,0,0.3,1.2);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f().s("#378FAB").ss(0.8).p("AhvAAIDcBOIAMiag");
	this.shape_1452.setTransform(-17,-173.7,1,1,0,0,0,0.7,0);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f().s("#378FAB").ss(0.8).p("AgdhTIgeCmIB2hOg");
	this.shape_1453.setTransform(-24.1,-214.1,1,1,0,0,0,0,0.3);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f().s("#378FAB").ss(0.8).p("AhbiEIAGDiICsAwg");
	this.shape_1454.setTransform(-27.4,156.5,1,1,0,0,0,0,0.7);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f().s("#378FAB").ss(0.8).p("Ag1g/IhIB8ID0hMg");
	this.shape_1455.setTransform(-30.7,171.7);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f().s("#378FAB").ss(0.8).p("Ah9gpIBCCgICyjug");
	this.shape_1456.setTransform(-30.6,182.1,1,1,0,0,0,0.1,0);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f().s("#378FAB").ss(0.8).p("AhUhbIAwCyIB2iOg");
	this.shape_1457.setTransform(-17.9,-100.1,1,1,0,0,0,0.1,0.1);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f().s("#378FAB").ss(0.8).p("AgwhWIgeCmICaiCg");
	this.shape_1458.setTransform(-28.8,134.4);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f().s("#378FAB").ss(0.8).p("AhMhqIgMDQICsiag");
	this.shape_1459.setTransform(-0.8,-116,1,1,0,0,0,0,0.1);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f().s("#378FAB").ss(0.8).p("AhWBIICmAkIAMjQg");
	this.shape_1460.setTransform(-17.4,-116.7,1,1,0,0,0,0.3,0);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f().s("#378FAB").ss(0.8).p("Ag7hDIhaBCIEeBAg");
	this.shape_1461.setTransform(-24.1,-199.3);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f().s("#378FAB").ss(0.8).p("AiPiBIBmEAIC4i+g");
	this.shape_1462.setTransform(-24.4,-186.3,1,1,0,0,0,0.2,0.1);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f().s("#378FAB").ss(0.8).p("AgWhoIgSDQIBShqg");
	this.shape_1463.setTransform(-27.7,34.9,1,1,0,0,0,0,0.6);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f().s("#378FAB").ss(0.8).p("ABChHIigAGIDECCg");
	this.shape_1464.setTransform(-20.6,-199.5);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f().s("#378FAB").ss(0.8).p("Ah8BUIB8AkIB4jig");
	this.shape_1465.setTransform(-20.8,117.3,1,1,0,0,0,0.4,0);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f().s("#378FAB").ss(0.8).p("AA7hAIiIBMICgA2g");
	this.shape_1466.setTransform(-0.7,-127.9,1,1,0,0,0,0,0.2);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f().s("#378FAB").ss(0.8).p("AhSAQICIBsIAej0g");
	this.shape_1467.setTransform(-35.4,11.3,1,1,0,0,0,0.2,0);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f().s("#378FAB").ss(0.8).p("AgdhQIAGCmIA0hIg");
	this.shape_1468.setTransform(31.7,-218.1,1,1,0,0,0,0,0.8);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f().s("#378FAB").ss(0.8).p("ABYhrIiyDcIC+gwg");
	this.shape_1469.setTransform(-37.7,-162.3,1,1,0,0,0,0,0.5);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f().s("#378FAB").ss(0.8).p("Ahgg8IBCCmIB8jWg");
	this.shape_1470.setTransform(-37,-145.3,1,1,0,0,0,0.1,0);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f().s("#378FAB").ss(0.8).p("AhUiVIgGEkICyjcg");
	this.shape_1471.setTransform(-37.8,-165.7,1,1,0,0,0,0,0.1);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f().s("#378FAB").ss(0.8).p("AhyAoIDcAqIASigg");
	this.shape_1472.setTransform(5.5,-169.9,1,1,0,0,0,0.7,0);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f().s("#378FAB").ss(0.8).p("AgPh9IhIC4ICsBIg");
	this.shape_1473.setTransform(-37.5,-186.2,1,1,0,0,0,0,0.6);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f().s("#378FAB").ss(0.8).p("AArglIh2BMICggGg");
	this.shape_1474.setTransform(-22.5,-209.9,1,1,0,0,0,0,0.1);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f().s("#378FAB").ss(0.8).p("Ai0h1IDEDuICoiIg");
	this.shape_1475.setTransform(-45.1,1,1,1,0,0,0,0.5,0.2);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f().s("#378FAB").ss(0.8).p("AhFiLIAAEkICIgqg");
	this.shape_1476.setTransform(-33.3,-119.7,1,1,0,0,0,0,0.9);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f().s("#378FAB").ss(0.8).p("AiAgJIBUCaICmkeg");
	this.shape_1477.setTransform(-44.1,59,1,1,0,0,0,0.1,0);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f().s("#378FAB").ss(0.8).p("Ag1hiIB2DEIAAh2g");
	this.shape_1478.setTransform(-15.6,-80.9,1,1,0,0,0,0.6,0.6);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f().s("#378FAB").ss(0.8).p("AATisIiOFaID6iEg");
	this.shape_1479.setTransform(-44.7,40.9,1,1,0,0,0,0,0.5);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f().s("#378FAB").ss(0.8).p("Aikg1IAGCCIEwiag");
	this.shape_1480.setTransform(-47.8,-18.8);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f().s("#378FAB").ss(0.8).p("AhogpIA2B8ICUimg");
	this.shape_1481.setTransform(-42.3,-217.4,1,1,0,0,0,0.1,0);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f().s("#378FAB").ss(0.8).p("AibAbIE8BOIAGjQg");
	this.shape_1482.setTransform(-23.9,-137.4,1,1,0,0,0,0.7,0);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f().s("#378FAB").ss(0.8).p("AgZhuIAYDEIAcimg");
	this.shape_1483.setTransform(-29.7,-214.5,1,1,0,0,0,0.1,0.2);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f().s("#378FAB").ss(0.8).p("AhQCOIBwAqIAwlag");
	this.shape_1484.setTransform(-44.6,210.5,1,1,0,0,0,0.1,0);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f().s("#378FAB").ss(0.8).p("AhaihIASE2ICgkwg");
	this.shape_1485.setTransform(-45.6,209.7);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f().s("#378FAB").ss(0.8).p("AAZhNIhwCaICyAGg");
	this.shape_1486.setTransform(-45.8,186.2,1,1,0,0,0,0,0.4);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f().s("#378FAB").ss(0.8).p("AA6h0Ih2A8IB8Cmg");
	this.shape_1487.setTransform(-42.5,154.5,1,1,0,0,0,0,0.2);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f().s("#378FAB").ss(0.8).p("AhihKIBOCaIB2g8g");
	this.shape_1488.setTransform(-46.3,140.8,1,1,0,0,0,0.3,0.3);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f().s("#378FAB").ss(0.8).p("ABYhpIi+DWIDWgwg");
	this.shape_1489.setTransform(-49.1,-94.2,1,1,0,0,0,0,0.4);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f().s("#378FAB").ss(0.8).p("AhuhMIAkDEICyj0g");
	this.shape_1490.setTransform(-48.4,-76);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f().s("#378FAB").ss(0.8).p("AhziMIC+EwIA8hCg");
	this.shape_1491.setTransform(-23.9,209.7,1,1,0,0,0,1.1,1.4);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f().s("#378FAB").ss(0.8).p("Ag8iPIA2EkIBGh+g");
	this.shape_1492.setTransform(-42.3,163.8,1,1,0,0,0,0.2,0.9);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f().s("#378FAB").ss(0.8).p("AAfhSIi4CmIE2gYg");
	this.shape_1493.setTransform(-48.9,-32.5,1,1,0,0,0,0,0.2);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f().s("#378FAB").ss(0.8).p("AgphlIAADKIBShqg");
	this.shape_1494.setTransform(-43.2,-198.3,1,1,0,0,0,0,0.5);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f().s("#378FAB").ss(0.8).p("AguAUIAMBOIBGi4g");
	this.shape_1495.setTransform(-42.8,-190.7);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f().s("#378FAB").ss(0.8).p("AhehQIAYCmICggeg");
	this.shape_1496.setTransform(-30.6,-96.7,1,1,0,0,0,0.1,0.4);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f().s("#378FAB").ss(0.8).p("AhVhmIgkDQIDugqg");
	this.shape_1497.setTransform(174.7,16.3,1,1,0,0,0,0,0.3);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f().s("#378FAB").ss(0.8).p("AAehTIh8BkIC+BCg");
	this.shape_1498.setTransform(-50,-142.8,1,1,0,0,0,0,0.2);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f().s("#378FAB").ss(0.8).p("Ahfh/IA8D6ICCi4g");
	this.shape_1499.setTransform(-49.8,-128.3,1,1,0,0,0,0.1,0.1);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f().s("#378FAB").ss(0.8).p("Ah3iZIBgFCICOlag");
	this.shape_1500.setTransform(-54.7,41);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f().s("#378FAB").ss(0.8).p("AAnjMIiCE2IC4Bsg");
	this.shape_1501.setTransform(-43,105.1,1,1,0,0,0,0,0.9);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f().s("#378FAB").ss(0.8).p("AhPAZIAkBOIBwjEg");
	this.shape_1502.setTransform(34.3,-137.9);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f().s("#378FAB").ss(0.8).p("ABAgyIiCAkICOBAg");
	this.shape_1503.setTransform(-50.4,18.1);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f().s("#378FAB").ss(0.8).p("AgZgsIhgBYIDugYg");
	this.shape_1504.setTransform(-54.5,21);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f().s("#378FAB").ss(0.8).p("AhrgjIASB2IC4img");
	this.shape_1505.setTransform(-55.3,-32.7);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f().s("#378FAB").ss(0.8).p("AAhhyIimByIEMBwg");
	this.shape_1506.setTransform(-59.2,-52.1,1,1,0,0,0,0,0.2);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f().s("#378FAB").ss(0.8).p("AiJhOIBCCgIDKgwg");
	this.shape_1507.setTransform(-58.7,-44.3,1,1,0,0,0,0.2,0.2);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f().s("#378FAB").ss(0.8).p("AhJhYIgqCyIDihIg");
	this.shape_1508.setTransform(-44.8,124.1,1,1,0,0,0,0,0.2);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f().s("#378FAB").ss(0.8).p("Ah5hIIBOC4ICgjig");
	this.shape_1509.setTransform(174.8,34.1,1,1,0,0,0,0.1,0);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f().s("#378FAB").ss(0.8).p("AhBg8IAGB2IB2hYg");
	this.shape_1510.setTransform(-53.5,-185.5);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f().s("#378FAB").ss(0.8).p("AgahMIgkCUIB8hkg");
	this.shape_1511.setTransform(-53.2,-148.3,1,1,0,0,0,0,0.2);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f().s("#378FAB").ss(0.8).p("AhIiRIAMEkICCk2g");
	this.shape_1512.setTransform(-46.2,100.1);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f().s("#378FAB").ss(0.8).p("AAZg7IhkB2ICaAGg");
	this.shape_1513.setTransform(-55.4,-215.3,1,1,0,0,0,0,0.3);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f().s("#378FAB").ss(0.8).p("AhOhcIAeCyIB8isg");
	this.shape_1514.setTransform(-55.2,-200.3);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f().s("#378FAB").ss(0.8).p("AA8hQIjEAMIEYCOg");
	this.shape_1515.setTransform(-63.2,66);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f().s("#378FAB").ss(0.8).p("AgBgNIhsgSIDcA6g");
	this.shape_1516.setTransform(-52.7,226.1);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f().s("#378FAB").ss(0.8).p("AgYg5IgwB2ICOgSg");
	this.shape_1517.setTransform(-46.2,79.6,1,1,0,0,0,0,0.3);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f().s("#378FAB").ss(0.8).p("ABLhLIjcCUIEqAGg");
	this.shape_1518.setTransform(-64.1,140.8,1,1,0,0,0,0,0.2);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f().s("#378FAB").ss(0.8).p("AiXhzIBODiIDcjcg");
	this.shape_1519.setTransform(-63.4,159.5,1,1,0,0,0,0.1,0);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f().s("#378FAB").ss(0.8).p("Ah7iJIAeESIDWiUg");
	this.shape_1520.setTransform(-64.3,116.3,1,1,0,0,0,0.1,0.2);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f().s("#378FAB").ss(0.8).p("AiEh/IDoEGIAwh4g");
	this.shape_1521.setTransform(-62.6,72.5,1,1,0,0,0,0.9,0.6);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f().s("#378FAB").ss(0.8).p("AhEiGIBYEMIA2iag");
	this.shape_1522.setTransform(179.9,109.2,1,1,0,0,0,0.3,0.5);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f().s("#378FAB").ss(0.8).p("AhtgLIDEBeIAeimg");
	this.shape_1523.setTransform(-44.9,134.1,1,1,0,0,0,0.6,0);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f().s("#378FAB").ss(0.8).p("AgOikIgwFaIB8AGg");
	this.shape_1524.setTransform(-35.2,212,1,1,0,0,0,0,1.4);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f().s("#378FAB").ss(0.8).p("AiHhxICgDiIByiag");
	this.shape_1525.setTransform(-56.9,182.3,1,1,0,0,0,0.4,0.2);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f().s("#378FAB").ss(0.8).p("AB+h/IkwCaIFsBmg");
	this.shape_1526.setTransform(-45.7,-13.7,1,1,0,0,0,0,0.1);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f().s("#378FAB").ss(0.8).p("AAFh4IhGDEICCA2g");
	this.shape_1527.setTransform(-60.1,-128.3,1,1,0,0,0,0,0.8);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f().s("#378FAB").ss(0.8).p("AhoA+ICsAeIAqiyg");
	this.shape_1528.setTransform(-62.9,123.6,1,1,0,0,0,0.5,0);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f().s("#378FAB").ss(0.8).p("Ai/BfIByAqID6kAg");
	this.shape_1529.setTransform(-71.6,205.5,1,1,0,0,0,0.5,0);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f().s("#378FAB").ss(0.8).p("AguBsIBYAwIAGkkg");
	this.shape_1530.setTransform(-51.2,-167.2);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f().s("#378FAB").ss(0.8).p("AAuhcIiIAqIC4CIg");
	this.shape_1531.setTransform(-31.2,-100.2);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f().s("#378FAB").ss(0.8).p("AgwhSIgkCgICmhwg");
	this.shape_1532.setTransform(-64.2,-60.4);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f().s("#378FAB").ss(0.8).p("AAehfIheCUICCAwg");
	this.shape_1533.setTransform(-62.6,-73.5,1,1,0,0,0,0,0.5);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f().s("#378FAB").ss(0.8).p("ABxiRIjoCmID0B+g");
	this.shape_1534.setTransform(-64.8,100.4,1,1,0,0,0,0,0.3);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f().s("#378FAB").ss(0.8).p("AhAhbIgwCyIDciUg");
	this.shape_1535.setTransform(-67.4,139.2);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f().s("#378FAB").ss(0.8).p("AAXiHIhwCyICyBgg");
	this.shape_1536.setTransform(-66.1,3,1,1,0,0,0,0,0.5);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f().s("#378FAB").ss(0.8).p("AhXhaIBUC4IBehag");
	this.shape_1537.setTransform(-65.9,16.4,1,1,0,0,0,0.3,0.3);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f().s("#378FAB").ss(0.8).p("AgSiYIhaEkIDcjug");
	this.shape_1538.setTransform(-64.7,-106,1,1,0,0,0,0,0.1);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f().s("#378FAB").ss(0.8).p("AADihIhkFOIDEgMg");
	this.shape_1539.setTransform(-67,42.5,1,1,0,0,0,0,0.8);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f().s("#378FAB").ss(0.8).p("AAWjeIjKG6IFsjYg");
	this.shape_1540.setTransform(-73.2,193.4,1,1,0,0,0,0,0.4);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f().s("#378FAB").ss(0.8).p("AhtBSICgBUIA8lCg");
	this.shape_1541.setTransform(-64.4,-100.3,1,1,0,0,0,0.2,0);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f().s("#378FAB").ss(0.8).p("ABAhgIh8CsIB8Aeg");
	this.shape_1542.setTransform(-54,-198.7,1,1,0,0,0,0,0.6);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f().s("#378FAB").ss(0.8).p("AA7iRIiUEqIC4hCg");
	this.shape_1543.setTransform(-65.4,-164.3,1,1,0,0,0,0,0.7);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f().s("#378FAB").ss(0.8).p("AhZgHICUBSIAkiUg");
	this.shape_1544.setTransform(-65,-148.8,1,1,0,0,0,0.5,0);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f().s("#378FAB").ss(0.8).p("AhhiCIBCESICCgkg");
	this.shape_1545.setTransform(-53.6,2.8,1,1,0,0,0,0.3,0.8);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f().s("#378FAB").ss(0.8).p("Ag2hqIgMDQICCiOg");
	this.shape_1546.setTransform(-69.6,-205.3,1,1,0,0,0,0,0.2);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f().s("#378FAB").ss(0.8).p("AhkiVIgkEwIEMgqg");
	this.shape_1547.setTransform(-66.8,74.5,1,1,0,0,0,0,0.4);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f().s("#378FAB").ss(0.8).p("Ah9B1ICgAkIBakkg");
	this.shape_1548.setTransform(-67,207.6,1,1,0,0,0,0.3,0);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f().s("#378FAB").ss(0.8).p("AgZhnIgeC+IBwiyg");
	this.shape_1549.setTransform(-69.5,-1.8);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f().s("#378FAB").ss(0.8).p("AhVguIBUBeIBYhAg");
	this.shape_1550.setTransform(-38.3,-204.2,1,1,0,0,0,0.5,0.1);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f().s("#378FAB").ss(0.8).p("AhBh0IAkDoIBej0g");
	this.shape_1551.setTransform(-52.9,-167.9);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f().s("#378FAB").ss(0.8).p("AAYh4Ig6DuIBMh2g");
	this.shape_1552.setTransform(-68.5,-22.9,1,1,0,0,0,0,1.2);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f().s("#378FAB").ss(0.8).p("AhugDIB2BAIBmh2g");
	this.shape_1553.setTransform(-63.4,-215.8,1,1,0,0,0,0.6,0);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f().s("#378FAB").ss(0.8).p("AiMgpIAkB8IDoimg");
	this.shape_1554.setTransform(-66.4,93.9);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f().s("#378FAB").ss(0.8).p("AimBQIEYAqIA8jug");
	this.shape_1555.setTransform(-83,-24.5,1,1,0,0,0,0.6,0);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f().s("#378FAB").ss(0.8).p("AixiBIAGEAIFUjEg");
	this.shape_1556.setTransform(-83.1,-29.3);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f().s("#378FAB").ss(0.8).p("ABxhQIkYBkIFaA8g");
	this.shape_1557.setTransform(-84.1,-44.4);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f().s("#378FAB").ss(0.8).p("AAkiPIhYEkIBqASg");
	this.shape_1558.setTransform(-58.4,209.3,1,1,0,0,0,0,1.3);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f().s("#378FAB").ss(0.8).p("ABAhfIiUCmICsAeg");
	this.shape_1559.setTransform(-39,-215.8,1,1,0,0,0,0,0.4);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f().s("#378FAB").ss(0.8).p("Ag2ibIAGE2IBklOg");
	this.shape_1560.setTransform(-72,43.5);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f().s("#378FAB").ss(0.8).p("AhPh1IBCDoIBeiUg");
	this.shape_1561.setTransform(-67.4,-79.9,1,1,0,0,0,0.2,0.3);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f().s("#378FAB").ss(0.8).p("AgxhAIg2CCIDKgwg");
	this.shape_1562.setTransform(-69.4,-143,1,1,0,0,0,0,0.1);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f().s("#378FAB").ss(0.8).p("AAChEIjKBeIGQAqg");
	this.shape_1563.setTransform(-91,163.9);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f().s("#378FAB").ss(0.8).p("AjKi7IAwFyIFglIg");
	this.shape_1564.setTransform(-90.8,185.3);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f().s("#378FAB").ss(0.8).p("AAUhzIh2BaIDECIg");
	this.shape_1565.setTransform(-80.7,159.7,1,1,0,0,0,0,0.2);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f().s("#378FAB").ss(0.8).p("AA7gqIh2BYICCgMg");
	this.shape_1566.setTransform(-53.5,-184,1,1,0,0,0,0,0.3);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f().s("#378FAB").ss(0.8).p("AiaC/IBaAwIDKm6g");
	this.shape_1567.setTransform(-84.5,191.2,1,1,0,0,0,0.2,0);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f().s("#378FAB").ss(0.8).p("ABViQIjcDcIESBIg");
	this.shape_1568.setTransform(-57.3,163.3,1,1,0,0,0,0,0.3);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f().s("#378FAB").ss(0.8).p("Aheg2Ig2BqIEYhkg");
	this.shape_1569.setTransform(-86,-47.5);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f().s("#378FAB").ss(0.8).p("Ai9CSIA8BCIEkmKg");
	this.shape_1570.setTransform(-87.1,189,1,1,0,0,0,0.2,0);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f().s("#378FAB").ss(0.8).p("AhXAtIB8AYIA2iCg");
	this.shape_1571.setTransform(-83.1,-143.4,1,1,0,0,0,0.6,0);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f().s("#378FAB").ss(0.8).p("AjWjCIEAGQIC0hsg");
	this.shape_1572.setTransform(-96.1,-158.8,1,1,0,0,0,0.7,0.7);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f().s("#378FAB").ss(0.8).p("AizjKIg2BaIG0Ekg");
	this.shape_1573.setTransform(-94.8,-167.5,1,1,0,0,0,0,0.2);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f().s("#378FAB").ss(0.8).p("Ag9BEIBkAqIAYjQg");
	this.shape_1574.setTransform(-81.2,16.9,1,1,0,0,0,0.2,0);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f().s("#378FAB").ss(0.8).p("AgzheIgMCyIB8img");
	this.shape_1575.setTransform(-81.3,15.2);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f().s("#378FAB").ss(0.8).p("Ahgi0IgeFmID6jQg");
	this.shape_1576.setTransform(-88.2,-88.7,1,1,0,0,0,0,0.2);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f().s("#378FAB").ss(0.8).p("AgUiFIgYEeIBYg2g");
	this.shape_1577.setTransform(-73.6,-77.3,1,1,0,0,0,0,1.3);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f().s("#378FAB").ss(0.8).p("AgsgcIA0BqIAkigg");
	this.shape_1578.setTransform(-73.5,-60.3,1,1,0,0,0,0.1,0);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f().s("#378FAB").ss(0.8).p("AgdhhIgYDQIBqgYg");
	this.shape_1579.setTransform(-72,17.6,1,1,0,0,0,0,0.8);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f().s("#378FAB").ss(0.8).p("AiBBOIBmBCICUkSg");
	this.shape_1580.setTransform(-87.6,-78.9,1,1,0,0,0,0.3,0);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f().s("#378FAB").ss(0.8).p("AhkgzICCCUIBIjEg");
	this.shape_1581.setTransform(-69.5,-131.2,1,1,0,0,0,0.3,0);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f().s("#378FAB").ss(0.8).p("AhSgBICCCaIAkkwg");
	this.shape_1582.setTransform(-85.1,74.4,1,1,0,0,0,0.2,0);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f().s("#378FAB").ss(0.8).p("AhIgyIAMBkIB8AGg");
	this.shape_1583.setTransform(-36.4,18.4,1,1,0,0,0,0.1,0.4);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f().s("#378FAB").ss(0.8).p("Ag8hxIBqDWIASjQg");
	this.shape_1584.setTransform(-36.3,34.5,1,1,0,0,0,0.2,0);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f().s("#378FAB").ss(0.8).p("AgKiLIhmB+IDcCUg");
	this.shape_1585.setTransform(-86.6,-105.3,1,1,0,0,0,0,0.3);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f().s("#378FAB").ss(0.8).p("ACwjmIlsBIIF+F+g");
	this.shape_1586.setTransform(-94,-172.2);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f().s("#378FAB").ss(0.8).p("AiogcIBmCOIDijig");
	this.shape_1587.setTransform(-92.8,113.6,1,1,0,0,0,0.2,0);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f().s("#378FAB").ss(0.8).p("AhIgIICIBwIAMjQg");
	this.shape_1588.setTransform(-82.4,-205.7,1,1,0,0,0,0.3,0);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f().s("#378FAB").ss(0.8).p("AgiikIg8FCIC+jWg");
	this.shape_1589.setTransform(-49.9,-99.2,1,1,0,0,0,0,0.3);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f().s("#378FAB").ss(0.8).p("AiDgnIBmBSICagkg");
	this.shape_1590.setTransform(-85.8,129.3,1,1,0,0,0,0.7,0.2);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f().s("#378FAB").ss(0.8).p("Ag9g5Ih+BwIFshGg");
	this.shape_1591.setTransform(-94.1,-193.6);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f().s("#378FAB").ss(0.8).p("Ag+hjIAwC+IBMimg");
	this.shape_1592.setTransform(-86.2,-128.9);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f().s("#378FAB").ss(0.8).p("AA0hWIiCCOICgAkg");
	this.shape_1593.setTransform(-68.4,-200.5,1,1,0,0,0,0,0.4);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f().s("#378FAB").ss(0.8).p("ABAg0IisBkIDiAGg");
	this.shape_1594.setTransform(-84.6,-57.8,1,1,0,0,0,0,0.1);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f().s("#378FAB").ss(0.8).p("ABliGIjiDiIEAAwg");
	this.shape_1595.setTransform(-87,116.3,1,1,0,0,0,0,0.4);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f().s("#378FAB").ss(0.8).p("AALhRIiaAYIEeCCg");
	this.shape_1596.setTransform(-94.9,82.3);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f().s("#378FAB").ss(0.8).p("AiOirIgGFUIEkjQg");
	this.shape_1597.setTransform(-95,93.9,1,1,0,0,0,0,0.2);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f().s("#378FAB").ss(0.8).p("AhMg3IBqCOIAwiyg");
	this.shape_1598.setTransform(-81.6,139.1,1,1,0,0,0,0.2,0);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f().s("#378FAB").ss(0.8).p("ACKhpIkkDQIFIhUg");
	this.shape_1599.setTransform(-94.3,100.6,1,1,0,0,0,0,0.2);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f().s("#378FAB").ss(0.8).p("AhPiKIBYEkIBOhOg");
	this.shape_1600.setTransform(-96,17.1,1,1,0,0,0,0.4,1.1);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f().s("#378FAB").ss(0.8).p("AhTjmIASHGICUkqg");
	this.shape_1601.setTransform(-67.9,-171.7,1,1,0,0,0,0,0.4);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f().s("#378FAB").ss(0.8).p("AA2ikIiUE2IDKjig");
	this.shape_1602.setTransform(175.6,-8.5,1,1,0,0,0,0,0.4);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f().s("#378FAB").ss(0.8).p("AhJCMIB8AMIAYkeg");
	this.shape_1603.setTransform(-83.1,-78.5,1,1,0,0,0,0.2,0);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f().s("#378FAB").ss(0.8).p("AgtiHIhgDcIEYA2g");
	this.shape_1604.setTransform(-90.8,45.5,1,1,0,0,0,0,0.4);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f().s("#378FAB").ss(0.8).p("AhlhRIDKCmIASheg");
	this.shape_1605.setTransform(177.3,14.3,1,1,0,0,0,1,0.4);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f().s("#378FAB").ss(0.8).p("AAHiFIhqEMIDKhgg");
	this.shape_1606.setTransform(-101,153.4,1,1,0,0,0,0,0.5);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f().s("#378FAB").ss(0.8).p("ABYigIiyAkIC4ESg");
	this.shape_1607.setTransform(-86.4,44);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f().s("#378FAB").ss(0.8).p("AgwhGIgGCOIBqg8g");
	this.shape_1608.setTransform(-94.7,132.5,1,1,0,0,0,0,0.3);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f().s("#378FAB").ss(0.8).p("AgLgnIhOBMICygkg");
	this.shape_1609.setTransform(-86.5,27.7);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f().s("#378FAB").ss(0.8).p("AAlg8IhMB2IBSAMg");
	this.shape_1610.setTransform(-68.1,-17.4,1,1,0,0,0,0,0.7);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f().s("#378FAB").ss(0.8).p("ABTgqIiggkICmCag");
	this.shape_1611.setTransform(-68.5,-187.3);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f().s("#378FAB").ss(0.8).p("AgTg4IhmBGIDuAqg");
	this.shape_1612.setTransform(-88,-200.8,1,1,0,0,0,0,0.1);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f().s("#378FAB").ss(0.8).p("AgwhaIA0CyIAwhwg");
	this.shape_1613.setTransform(-95.7,-61.5,1,1,0,0,0,0.2,0.4);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f().s("#378FAB").ss(0.8).p("Ah/jXIBIHAIC4gwg");
	this.shape_1614.setTransform(-105.2,-156.4,1,1,0,0,0,0.2,1);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f().s("#378FAB").ss(0.8).p("AA9hrIh2COIB2BOg");
	this.shape_1615.setTransform(-15.8,-94.5,1,1,0,0,0,0,0.5);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f().s("#378FAB").ss(0.8).p("AhqhUIBgCsIB2hYg");
	this.shape_1616.setTransform(-89.2,148.3,1,1,0,0,0,0.3,0.2);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f().s("#378FAB").ss(0.8).p("AgjhsIgqDiICagYg");
	this.shape_1617.setTransform(-101.4,65.3,1,1,0,0,0,0,0.6);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f().s("#378FAB").ss(0.8).p("AgxhrIgqC4ICyAkg");
	this.shape_1618.setTransform(-95.3,-5.1,1,1,0,0,0,0,0.5);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f().s("#378FAB").ss(0.8).p("AiMhlIByDKICmiUg");
	this.shape_1619.setTransform(-90.6,64,1,1,0,0,0,0.3,0.1);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f().s("#378FAB").ss(0.8).p("Agog7IgwBwICshkg");
	this.shape_1620.setTransform(-86.6,-58.5);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f().s("#378FAB").ss(0.8).p("AgHhgIgkDQIBYgeg");
	this.shape_1621.setTransform(-100,-60.3,1,1,0,0,0,0,1);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f().s("#378FAB").ss(0.8).p("ABGiGIkMCmIGQBmg");
	this.shape_1622.setTransform(-118.2,-120.4,1,1,0,0,0,0,0.1);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f().s("#378FAB").ss(0.8).p("AjQhbIASC4IF+hUg");
	this.shape_1623.setTransform(-117.2,-108);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f().s("#378FAB").ss(0.8).p("Ai/gcIDKCOIC0jig");
	this.shape_1624.setTransform(-116.6,-95.7,1,1,0,0,0,0.5,0);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f().s("#378FAB").ss(0.8).p("AhYAyICUCEIAelmg");
	this.shape_1625.setTransform(-106.8,-89.3,1,1,0,0,0,0.1,0);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f().s("#378FAB").ss(0.8).p("AhnBbIDWgkIAGiOg");
	this.shape_1626.setTransform(-110.7,133.8,1,1,0,0,0,0.7,-0.2);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f().s("#378FAB").ss(0.8).p("AiYhUIBOCsIDciyg");
	this.shape_1627.setTransform(-114.2,134.2,1,1,0,0,0,0.2,0);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f().s("#378FAB").ss(0.8).p("AiLhvICKDcICOiyg");
	this.shape_1628.setTransform(-85.9,-5.1,1,1,0,0,0,0.3,0.1);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f().s("#378FAB").ss(0.8).p("AgtgYIAkBMIA0hqg");
	this.shape_1629.setTransform(-99.8,-47.5,1,1,0,0,0,0.1,0);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f().s("#378FAB").ss(0.8).p("AhrhlIBrDoIBrkMg");
	this.shape_1630.setTransform(-111,153.3,1,1,0,0,0,0.1,0);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f().s("#378FAB").ss(0.8).p("AhagwICICOIAwi+g");
	this.shape_1631.setTransform(-101.6,-129.1,1,1,0,0,0,0.3,0);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f().s("#378FAB").ss(0.8).p("AhvAJIDcBIIAMigg");
	this.shape_1632.setTransform(178,4.8,1,1,0,0,0,0.7,0);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f().s("#378FAB").ss(0.8).p("Ah5heICUDKIBgjcg");
	this.shape_1633.setTransform(-107.6,42.8,1,1,0,0,0,0.3,0);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f().s("#378FAB").ss(0.8).p("AhXgUICOB8IAkjQg");
	this.shape_1634.setTransform(-109.7,-60.5,1,1,0,0,0,0.3,0);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f().s("#378FAB").ss(0.8).p("Ag8hqIgeDWICyhUg");
	this.shape_1635.setTransform(-109.8,-73.2,1,1,0,0,0,0,0.3);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.f().s("#378FAB").ss(0.8).p("AAhiXIiaE2ID0gSg");
	this.shape_1636.setTransform(-107.9,17.9,1,1,0,0,0,0,0.6);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.f().s("#378FAB").ss(0.8).p("ABchxIjKDiIDohag");
	this.shape_1637.setTransform(177.2,-5.2,1,1,0,0,0,0,0.4);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f().s("#378FAB").ss(0.8).p("AhGicIA8E2IBSi4g");
	this.shape_1638.setTransform(-111.7,-46.4,1,1,0,0,0,0.1,0.5);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f().s("#378FAB").ss(0.8).p("AhBipIgMFCICak2g");
	this.shape_1639.setTransform(-112.3,18);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f().s("#378FAB").ss(0.8).p("AAAhJIhsA8IDWBSg");
	this.shape_1640.setTransform(-89.4,141,1,1,0,0,0,0,0.1);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.f().s("#378FAB").ss(0.8).p("AheA/ICUA2IAqjig");
	this.shape_1641.setTransform(-114.5,64.8,1,1,0,0,0,0.3,0);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f().s("#378FAB").ss(0.8).p("Ahhh8IAAD0IC+isg");
	this.shape_1642.setTransform(-114.5,59.1,1,1,0,0,0,0,0.1);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f().s("#378FAB").ss(0.8).p("AAchfIhSC4IB2hqg");
	this.shape_1643.setTransform(-107.3,-39.9,1,1,0,0,0,0,0.5);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f().s("#378FAB").ss(0.8).p("AgfiiIg8FCIC4isg");
	this.shape_1644.setTransform(-109.6,-14.7,1,1,0,0,0,0,0.4);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f().s("#378FAB").ss(0.8).p("AhKiwIASFUICCkeg");
	this.shape_1645.setTransform(-116.7,89,1,1,0,0,0,0,0.1);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f().s("#378FAB").ss(0.8).p("AhGBaIBwAMIAei+g");
	this.shape_1646.setTransform(-79.1,-3.3,1,1,0,0,0,0.3,0);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f().s("#378FAB").ss(0.8).p("AAUixIhYEwICIBCg");
	this.shape_1647.setTransform(-113.2,185.4,1,1,0,0,0,0,1.1);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f().s("#378FAB").ss(0.8).p("AhaBVICOAMIAqi4g");
	this.shape_1648.setTransform(-109.4,-7.6,1,1,0,0,0,0.4,0);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f().s("#378FAB").ss(0.8).p("AgZhoIhIDKIDEiUg");
	this.shape_1649.setTransform(-119.8,116,1,1,0,0,0,0,0.1);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.f().s("#378FAB").ss(0.8).p("AhAB9IB8A2IAGlUg");
	this.shape_1650.setTransform(-115.9,92.8,1,1,0,0,0,0.1,0);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f().s("#378FAB").ss(0.8).p("AhbBsIBaA2IBYkwg");
	this.shape_1651.setTransform(-119.6,180.8,1,1,0,0,0,0.2,0);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f().s("#378FAB").ss(0.8).p("AhviAIAqD6ICyj6g");
	this.shape_1652.setTransform(-122.1,179.5);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f().s("#378FAB").ss(0.8).p("AgigxIhOBkIDcAAg");
	this.shape_1653.setTransform(-121.9,161.4,1,1,0,0,0,0,0.1);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f().s("#378FAB").ss(0.8).p("AiViDIAYEGIEMimg");
	this.shape_1654.setTransform(-125.5,-130.3,1,1,0,0,0,0,0.1);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.f().s("#378FAB").ss(0.8).p("AhlBRICyAeIAejWg");
	this.shape_1655.setTransform(-126.2,-73.8,1,1,0,0,0,0.4,0);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.f().s("#378FAB").ss(0.8).p("AiTgyIBOCOIDQi4g");
	this.shape_1656.setTransform(-129.7,-74.9,1,1,0,0,0,0.2,0);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.f().s("#378FAB").ss(0.8).p("AhBiAIhUCgIEkBgg");
	this.shape_1657.setTransform(-125.4,-146.6,1,1,0,0,0,0,0.3);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f().s("#378FAB").ss(0.8).p("AhdhFIgeCOIDuAAg");
	this.shape_1658.setTransform(179.7,52.5,1,1,0,0,0,0,0.2);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f().s("#378FAB").ss(0.8).p("AhKg5ICOBwIASheg");
	this.shape_1659.setTransform(180.9,101,1,1,0,0,0,0.7,0.1);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.f().s("#378FAB").ss(0.8).p("AhdCNICIi+IA2hag");
	this.shape_1660.setTransform(-121.2,-176,1,1,0,0,0,1.4,-2);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.f().s("#378FAB").ss(0.8).p("AgvBjIBSBIIAMlCg");
	this.shape_1661.setTransform(-123.7,16.1);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f().s("#378FAB").ss(0.8).p("AhagdIBUCaIBej6g");
	this.shape_1662.setTransform(-127.7,13.6,1,1,0,0,0,0.1,0);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.f().s("#378FAB").ss(0.8).p("Ag9iCICCEMIAGh+g");
	this.shape_1663.setTransform(-104.2,-119.7,1,1,0,0,0,0.7,1.2);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f().s("#378FAB").ss(0.8).p("AhsjaIhIGuIFmlCg");
	this.shape_1664.setTransform(-130.8,-20.2,1,1,0,0,0,0,0.1);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f().s("#378FAB").ss(0.8).p("AiXgvIB4BeICyheg");
	this.shape_1665.setTransform(-133,5.7,1,1,0,0,0,0.6,0);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f().s("#378FAB").ss(0.8).p("Ag9hbIhUC4IEegqg");
	this.shape_1666.setTransform(-130.1,-89.2,1,1,0,0,0,0,0.2);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f().s("#378FAB").ss(0.8).p("AguhDIgGB8IBkh8g");
	this.shape_1667.setTransform(-92.6,-112.9);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f().s("#378FAB").ss(0.8).p("ABCiPIiCC4ICCBsg");
	this.shape_1668.setTransform(-47,-119.6,1,1,0,0,0,0,0.6);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f().s("#378FAB").ss(0.8).p("AAAhXIgvC+IBeAAg");
	this.shape_1669.setTransform(-92.5,-129,1,1,0,0,0,0,1);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f().s("#378FAB").ss(0.8).p("ABDiiIiUFOICmAGg");
	this.shape_1670.setTransform(-131,88.3,1,1,0,0,0,0,0.9);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f().s("#378FAB").ss(0.8).p("AhShsIBeDQIBIjKg");
	this.shape_1671.setTransform(-130.7,115.6,1,1,0,0,0,0.2,0);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f().s("#378FAB").ss(0.8).p("ABMhzIiUD0ICUAAg");
	this.shape_1672.setTransform(-132,59,1,1,0,0,0,0,0.8);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f().s("#378FAB").ss(0.8).p("AhLiwIAAFOICUlOg");
	this.shape_1673.setTransform(-131.7,88.8);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f().s("#378FAB").ss(0.8).p("AAFhTIhYCUICmAYg");
	this.shape_1674.setTransform(-130.3,134.6,1,1,0,0,0,0,0.4);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f().s("#378FAB").ss(0.8).p("AhVhtICmDWIAMiyg");
	this.shape_1675.setTransform(-95.4,13.3,1,1,0,0,0,0.4,0.1);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f().s("#378FAB").ss(0.8).p("AgEgJIhOgkICmBYg");
	this.shape_1676.setTransform(-128.6,192.7);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f().s("#378FAB").ss(0.8).p("Ahzi0IBUFmICUj0g");
	this.shape_1677.setTransform(-135.9,53.5,1,1,0,0,0,0.1,0.2);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f().s("#378FAB").ss(0.8).p("ABNhlIi+BaIDoBwg");
	this.shape_1678.setTransform(-136.2,36.5,1,1,0,0,0,0,0.1);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f().s("#378FAB").ss(0.8).p("AgKhMIhUCUIC+hYg");
	this.shape_1679.setTransform(-138.1,27.9,1,1,0,0,0,0,0.1);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f().s("#378FAB").ss(0.8).p("Ag4hkIgqCCIC+BIg");
	this.shape_1680.setTransform(-114.3,43.9,1,1,0,0,0,0,0.4);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f().s("#378FAB").ss(0.8).p("AhQhOICCCaIAkiCg");
	this.shape_1681.setTransform(-130.2,148.8,1,1,0,0,0,0.4,0.1);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f().s("#378FAB").ss(0.8).p("AAyhJIjECUIEqgGg");
	this.shape_1682.setTransform(-115,118.3,1,1,0,0,0,0,0.2);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f().s("#378FAB").ss(0.8).p("Ag3hkIh4CsIFaAeg");
	this.shape_1683.setTransform(-146.8,115.6,1,1,0,0,0,0,0.2);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f().s("#378FAB").ss(0.8).p("AACgyIgQBeIAcAeg");
	this.shape_1684.setTransform(188,19.8,1,1,0,0,0,0,1.7);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f().s("#378FAB").ss(0.8).p("AAQhvIiCAGIDiDKg");
	this.shape_1685.setTransform(-141,115.9);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f().s("#378FAB").ss(0.8).p("AiohZIEACyIBaiUg");
	this.shape_1686.setTransform(-146.8,131.8,1,1,0,0,0,0.8,0.1);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f().s("#378FAB").ss(0.8).p("AiwCmIEqAAIA8lCg");
	this.shape_1687.setTransform(-130.7,-15.7,1,1,0,0,0,0.5,0);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f().s("#378FAB").ss(0.8).p("Ag4AaIBMBUIAkjWg");
	this.shape_1688.setTransform(-138.8,177,1,1,0,0,0,0.1,0);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f().s("#378FAB").ss(0.8).p("AhyhnICUDKIBUi4g");
	this.shape_1689.setTransform(-147.8,-90,1,1,0,0,0,0.3,0);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f().s("#378FAB").ss(0.8).p("AAdiAIiCEAIDQhyg");
	this.shape_1690.setTransform(-147.7,-66.7,1,1,0,0,0,0,0.4);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f().s("#378FAB").ss(0.8).p("AhmgBICgB2IAwjog");
	this.shape_1691.setTransform(-147.2,-54,1,1,0,0,0,0.3,0);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f().s("#378FAB").ss(0.8).p("AheAAICyAwIAYheg");
	this.shape_1692.setTransform(-146.8,15.3,1,1,0,0,0,1,0);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f().s("#378FAB").ss(0.8).p("AgRhHIhUCOIDKgwg");
	this.shape_1693.setTransform(-147.1,8.3,1,1,0,0,0,0,0.2);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f().s("#378FAB").ss(0.8).p("ABViaIjiDKIEeBsg");
	this.shape_1694.setTransform(-127.4,-46.8,1,1,0,0,0,0,0.3);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f().s("#378FAB").ss(0.8).p("Agmh0IgkCCICOBmg");
	this.shape_1695.setTransform(-118,155.4,1,1,0,0,0,0,0.6);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f().s("#378FAB").ss(0.8).p("Ahug8IBsB8IBwiCg");
	this.shape_1696.setTransform(-144.1,173.2,1,1,0,0,0,0.3,0);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f().s("#378FAB").ss(0.8).p("AARiCIg6CIIBSB+g");
	this.shape_1697.setTransform(-142.2,-129.6,1,1,0,0,0,0,0.9);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f().s("#378FAB").ss(0.8).p("Ag/h8IA2EAIBMhmg");
	this.shape_1698.setTransform(-132,154.1,1,1,0,0,0,0.2,0.8);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f().s("#378FAB").ss(0.8).p("AibAWIBCBIIDiiyg");
	this.shape_1699.setTransform(-152.2,149.3,1,1,0,0,0,0.3,0);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f().s("#378FAB").ss(0.8).p("AhwiOIgkEeIEkhsg");
	this.shape_1700.setTransform(-153.2,137.2,1,1,0,0,0,0,0.2);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f().s("#378FAB").ss(0.8).p("AADhLIhYCaICsgeg");
	this.shape_1701.setTransform(-146.9,-121.9,1,1,0,0,0,0,0.3);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f().s("#378FAB").ss(0.8).p("AhYhjIBeDEIBUiUg");
	this.shape_1702.setTransform(-148.2,25.5,1,1,0,0,0,0.2,0.1);

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f().s("#378FAB").ss(0.8).p("AgbhRIhOCmIDQgSg");
	this.shape_1703.setTransform(-77.1,-127.9,1,1,0,0,0,0,0.3);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f().s("#378FAB").ss(0.8).p("AgChyIgkDWIBMAkg");
	this.shape_1704.setTransform(-133,179.5,1,1,0,0,0,0,1.5);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f().s("#378FAB").ss(0.8).p("AhhhTIBUCsIBwg8g");
	this.shape_1705.setTransform(-148.9,68.5,1,1,0,0,0,0.4,0.4);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f().s("#378FAB").ss(0.8).p("AAOiwIhwD0IDEByg");
	this.shape_1706.setTransform(-149.1,53.5,1,1,0,0,0,0,0.7);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f().s("#378FAB").ss(0.8).p("AhdBHIBwCWIBImug");
	this.shape_1707.setTransform(-150.9,-21.2);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f().s("#378FAB").ss(0.8).p("AhEjMIgYGQIC4kYg");
	this.shape_1708.setTransform(-151,-33.4,1,1,0,0,0,0,0.3);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f().s("#378FAB").ss(0.8).p("AhmhXIgqCsIEYiOg");
	this.shape_1709.setTransform(-158.4,-74.2);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f().s("#378FAB").ss(0.8).p("AhVh+Ig8EAIEeg8g");
	this.shape_1710.setTransform(175.9,72.8,1,1,0,0,0,0,0.3);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f().s("#378FAB").ss(0.8).p("AiNAQICUByICEkAg");
	this.shape_1711.setTransform(-158.4,-67.3,1,1,0,0,0,0.3,0);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f().s("#378FAB").ss(0.8).p("AgehjIhaCsIDuAeg");
	this.shape_1712.setTransform(-156.5,-90.1,1,1,0,0,0,0,0.3);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f().s("#378FAB").ss(0.8).p("AhICTIBYiaIA8iKg");
	this.shape_1713.setTransform(-147,-131.2,1,1,0,0,0,1.1,-2.2);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f().s("#378FAB").ss(0.8).p("AiSgPIByBeICsiag");
	this.shape_1714.setTransform(176.4,87.2,1,1,0,0,0,0.4,0);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f().s("#378FAB").ss(0.8).p("AhggaIBOCUIBwj0g");
	this.shape_1715.setTransform(-157,47.4,1,1,0,0,0,0.1,0);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f().s("#378FAB").ss(0.8).p("AARhiIiCB2IDiBOg");
	this.shape_1716.setTransform(-159.1,25.4,1,1,0,0,0,0,0.2);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f().s("#378FAB").ss(0.8).p("Ah0hVIAkCsIC+heg");
	this.shape_1717.setTransform(-158.7,36.1,1,1,0,0,0,0.1,0.1);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f().s("#378FAB").ss(0.8).p("AhOhLIgqCIIDoASg");
	this.shape_1718.setTransform(-147.6,-106.4,1,1,0,0,0,0,0.2);

	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f().s("#378FAB").ss(0.8).p("Ah3A2IA8BUICmkGg");
	this.shape_1719.setTransform(-149.3,153.2,1,1,0,0,0,0.1,0);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f().s("#378FAB").ss(0.8).p("ABQheIisAeIC+Cag");
	this.shape_1720.setTransform(-146.2,-107.7);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f().s("#378FAB").ss(0.8).p("AA6h/IimEGIDcgGg");
	this.shape_1721.setTransform(-144.6,154,1,1,0,0,0,0,0.5);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f().s("#378FAB").ss(0.8).p("AgviDIgSEYICCgGg");
	this.shape_1722.setTransform(-145.8,91.4,1,1,0,0,0,0,1);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f().s("#378FAB").ss(0.8).p("Ag/h6IAGDuIB2isg");
	this.shape_1723.setTransform(-158.7,111.3,1,1,0,0,0,0,0.2);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f().s("#378FAB").ss(0.8).p("ABfhNIisCaICsg8g");
	this.shape_1724.setTransform(180.5,87.8,1,1,0,0,0,0,0.4);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f().s("#378FAB").ss(0.8).p("AhNAVICgASIAMhMg");
	this.shape_1725.setTransform(181.6,92.9,1,1,0,0,0,1.1,0);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f().s("#378FAB").ss(0.8).p("AhFhaIAGCyICCh2g");
	this.shape_1726.setTransform(-164,18.7,1,1,0,0,0,0,0.2);

	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f().s("#378FAB").ss(0.8).p("AAEgFIhAhIIB8Cag");
	this.shape_1727.setTransform(-162,159.4);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f().s("#378FAB").ss(0.8).p("AgBhzIhsDoIDchUg");
	this.shape_1728.setTransform(-160.1,-2.1,1,1,0,0,0,0,0.3);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f().s("#378FAB").ss(0.8).p("AhtANICIA8IBUiOg");
	this.shape_1729.setTransform(-159.5,7.9,1,1,0,0,0,0.6,0);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f().s("#378FAB").ss(0.8).p("AiAAuIBsBCICOjWg");
	this.shape_1730.setTransform(-162.6,87.5,1,1,0,0,0,0.4,0);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f().s("#378FAB").ss(0.8).p("AA5ivIhwA8IBwESg");
	this.shape_1731.setTransform(-145.1,88.9,1,1,0,0,0,0,0.2);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f().s("#378FAB").ss(0.8).p("AB7hJIk2CCIGEASg");
	this.shape_1732.setTransform(-179.3,52.1);

	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f().s("#378FAB").ss(0.8).p("AhCh4IgwDoIDijKg");
	this.shape_1733.setTransform(-130.2,-53.6);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f().s("#378FAB").ss(0.8).p("AhniEIB2ESIBakkg");
	this.shape_1734.setTransform(-77.1,-106.3,1,1,0,0,0,0.1,0);

	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f().s("#378FAB").ss(0.8).p("Ag9g4IgkBSIC4Aeg");
	this.shape_1735.setTransform(-166.6,-59.7,1,1,0,0,0,0,0.2);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f().s("#378FAB").ss(0.8).p("AjBhHIgYCOIGch8g");
	this.shape_1736.setTransform(-178.7,65.2);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f().s("#378FAB").ss(0.8).p("AjNgiID0DEIColCg");
	this.shape_1737.setTransform(-179.4,75.9,1,1,0,0,0,0.4,0);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f().s("#378FAB").ss(0.8).p("Ag9hfIhCC4ID6iag");
	this.shape_1738.setTransform(-170.3,-47.7);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f().s("#378FAB").ss(0.8).p("Ahig8IAqCCICUiOg");
	this.shape_1739.setTransform(-173.8,130.1);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f().s("#378FAB").ss(0.8).p("AARhiIiIC+ID0h8g");
	this.shape_1740.setTransform(-177.7,102.2,1,1,0,0,0,0,0.1);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f().s("#378FAB").ss(0.8).p("AiEAkIAqBCIDKi+g");
	this.shape_1741.setTransform(-176.2,107.7,1,1,0,0,0,0.1,0);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f().s("#378FAB").ss(0.8).p("AhEiLIAeEMIBqjog");
	this.shape_1742.setTransform(-167.2,-3.6);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f().s("#378FAB").ss(0.8).p("AhOAtIA2BCIBejQg");
	this.shape_1743.setTransform(-171.5,132.6,1,1,0,0,0,0.1,0);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f().s("#378FAB").ss(0.8).p("Ah1gcIASA6IC+gMg");
	this.shape_1744.setTransform(-173.5,120.9,1,1,0,0,0,0.1,0.1);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f().s("#378FAB").ss(0.8).p("AA7hzIigDiIDWh2g");
	this.shape_1745.setTransform(180.5,34.5,1,1,0,0,0,0,0.3);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f().s("#378FAB").ss(0.8).p("AACghIgcgeIA0Bqg");
	this.shape_1746.setTransform(189.2,29);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f().s("#378FAB").ss(0.8).p("AgghMIgYBeIBqA8g");
	this.shape_1747.setTransform(-133.6,18.8,1,1,0,0,0,0,0.6);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f().s("#378FAB").ss(0.8).p("AgwBLIA6BOIAkkeg");
	this.shape_1748.setTransform(-169.2,136.1);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f().s("#378FAB").ss(0.8).p("AhLhBIhOCCIEqhBg");
	this.shape_1749.setTransform(-185.7,9.4);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f().s("#378FAB").ss(0.8).p("ABlh0IjKC+IDQAwg");
	this.shape_1750.setTransform(-175.3,110.9,1,1,0,0,0,0,0.4);

	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f().s("#378FAB").ss(0.8).p("AAAhmIhZCUICyA8g");
	this.shape_1751.setTransform(-183,-27.9,1,1,0,0,0,0,0.4);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.f().s("#378FAB").ss(0.8).p("AhchQIAGCgICshkg");
	this.shape_1752.setTransform(-182.8,-15.4,1,1,0,0,0,0,0.1);

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.f().s("#378FAB").ss(0.8).p("AiehLIAkCaIEMgqg");
	this.shape_1753.setTransform(-185.1,23.8,1,1,0,0,0,0.1,0.2);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.f().s("#378FAB").ss(0.8).p("ACZhZIkqBCIEwBwg");
	this.shape_1754.setTransform(-186.5,18.4);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.f().s("#378FAB").ss(0.8).p("AhbAIIAkBaICIi+g");
	this.shape_1755.setTransform(-184.1,101.4);

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.f().s("#378FAB").ss(0.8).p("AAgjiIiIDAIDQEAg");
	this.shape_1756.setTransform(-121.5,-155.8,1,1,0,0,0,0,0.5);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f().s("#378FAB").ss(0.8).p("AAtiiIimFCID6iWg");
	this.shape_1757.setTransform(-163.6,76.4,1,1,0,0,0,0,0.4);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f().s("#378FAB").ss(0.8).p("Ah+hfIA2CaIC+Aqg");
	this.shape_1758.setTransform(-187.4,82.4,1,1,0,0,0,0.3,0.5);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f().s("#378FAB").ss(0.8).p("AA5iBIh2BsIB8CUg");
	this.shape_1759.setTransform(-106.7,-28.8,1,1,0,0,0,0,0.4);

	this.shape_1760 = new cjs.Shape();
	this.shape_1760.graphics.f().s("#378FAB").ss(0.8).p("AhGBQIB8BCIASkYg");
	this.shape_1760.setTransform(-157.8,90.7,1,1,0,0,0,0.2,0);

	this.shape_1761 = new cjs.Shape();
	this.shape_1761.graphics.f().s("#378FAB").ss(0.8).p("AiOgvIgYBwIE2iCg");
	this.shape_1761.setTransform(-181.4,51.4);

	this.shape_1762 = new cjs.Shape();
	this.shape_1762.graphics.f().s("#378FAB").ss(0.8).p("AhihHIASCOICshkg");
	this.shape_1762.setTransform(-185.2,95.2);

	this.shape_1763 = new cjs.Shape();
	this.shape_1763.graphics.f().s("#378FAB").ss(0.8).p("AhkhUIgSBkIDcBCg");
	this.shape_1763.setTransform(-181.4,1.3,1,1,0,0,0,0,0.3);

	this.shape_1764 = new cjs.Shape();
	this.shape_1764.graphics.f().s("#378FAB").ss(0.8).p("ABxhdIj6C+IEegSg");
	this.shape_1764.setTransform(-181.8,37,1,1,0,0,0,0,0.2);

	this.shape_1765 = new cjs.Shape();
	this.shape_1765.graphics.f().s("#378FAB").ss(0.8).p("AgnhoIAoDKIAqiCg");
	this.shape_1765.setTransform(-124.3,37.1,1,1,0,0,0,0.1,0.5);

	this.shape_1766 = new cjs.Shape();
	this.shape_1766.graphics.f().s("#378FAB").ss(0.8).p("AAKgCIg6h+IBkEAg");
	this.shape_1766.setTransform(-184.8,124.3);

	this.shape_1767 = new cjs.Shape();
	this.shape_1767.graphics.f().s("#378FAB").ss(0.8).p("Ah2heIDiDEIAehgg");
	this.shape_1767.setTransform(180.3,69.8,1,1,0,0,0,1.1,0.5);

	this.shape_1768 = new cjs.Shape();
	this.shape_1768.graphics.f().s("#378FAB").ss(0.8).p("AAPABIgohAIA6B8g");
	this.shape_1768.setTransform(-187.1,117.7);

	this.shape_1769 = new cjs.Shape();
	this.shape_1769.graphics.f().s("#378FAB").ss(0.8).p("AB4gzIjuAAIEABkg");
	this.shape_1769.setTransform(179.2,64.9);

	this.shape_1770 = new cjs.Shape();
	this.shape_1770.graphics.f().s("#378FAB").ss(0.8).p("AhohGIDQCOIASheg");
	this.shape_1770.setTransform(181.8,52.7,1,1,0,0,0,1,0.3);

	this.shape_1771 = new cjs.Shape();
	this.shape_1771.graphics.f().s("#378FAB").ss(0.8).p("Ah/gZIBaDQICglsg");
	this.shape_1771.setTransform(-170.3,-36);

	this.shape_1772 = new cjs.Shape();
	this.shape_1772.graphics.f().s("#378FAB").ss(0.8).p("ABqhSIjWB2IDiAwg");
	this.shape_1772.setTransform(181.2,41.8,1,1,0,0,0,0,0.2);

	this.shape_1773 = new cjs.Shape();
	this.shape_1773.graphics.f().s("#378FAB").ss(0.8).p("AAUAFIg0iaIBGEqg");
	this.shape_1773.setTransform(-197.2,87.3);

	this.shape_1774 = new cjs.Shape();
	this.shape_1774.graphics.f().s("#378FAB").ss(0.8).p("ABJiHIisBmIDKCmg");
	this.shape_1774.setTransform(-181.4,-3.8,1,1,0,0,0,0,0.2);

	this.shape_1775 = new cjs.Shape();
	this.shape_1775.graphics.f().s("#378FAB").ss(0.8).p("AhPCvICIAkIAYmQg");
	this.shape_1775.setTransform(-165.9,-35.2,1,1,0,0,0,0.1,0);

	this.shape_1776 = new cjs.Shape();
	this.shape_1776.graphics.f().s("#378FAB").ss(0.8).p("AiMg1IASCUID6i+g");
	this.shape_1776.setTransform(-183.4,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1776},{t:this.shape_1775},{t:this.shape_1774},{t:this.shape_1773},{t:this.shape_1772},{t:this.shape_1771},{t:this.shape_1770},{t:this.shape_1769},{t:this.shape_1768},{t:this.shape_1767},{t:this.shape_1766},{t:this.shape_1765},{t:this.shape_1764},{t:this.shape_1763},{t:this.shape_1762},{t:this.shape_1761},{t:this.shape_1760},{t:this.shape_1759},{t:this.shape_1758},{t:this.shape_1757},{t:this.shape_1756},{t:this.shape_1755},{t:this.shape_1754},{t:this.shape_1753},{t:this.shape_1752},{t:this.shape_1751},{t:this.shape_1750},{t:this.shape_1749},{t:this.shape_1748},{t:this.shape_1747},{t:this.shape_1746},{t:this.shape_1745},{t:this.shape_1744},{t:this.shape_1743},{t:this.shape_1742},{t:this.shape_1741},{t:this.shape_1740},{t:this.shape_1739},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733},{t:this.shape_1732},{t:this.shape_1731},{t:this.shape_1730},{t:this.shape_1729},{t:this.shape_1728},{t:this.shape_1727},{t:this.shape_1726},{t:this.shape_1725},{t:this.shape_1724},{t:this.shape_1723},{t:this.shape_1722},{t:this.shape_1721},{t:this.shape_1720},{t:this.shape_1719},{t:this.shape_1718},{t:this.shape_1717},{t:this.shape_1716},{t:this.shape_1715},{t:this.shape_1714},{t:this.shape_1713},{t:this.shape_1712},{t:this.shape_1711},{t:this.shape_1710},{t:this.shape_1709},{t:this.shape_1708},{t:this.shape_1707},{t:this.shape_1706},{t:this.shape_1705},{t:this.shape_1704},{t:this.shape_1703},{t:this.shape_1702},{t:this.shape_1701},{t:this.shape_1700},{t:this.shape_1699},{t:this.shape_1698},{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1689},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685},{t:this.shape_1684},{t:this.shape_1683},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1676},{t:this.shape_1675},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1670},{t:this.shape_1669},{t:this.shape_1668},{t:this.shape_1667},{t:this.shape_1666},{t:this.shape_1665},{t:this.shape_1664},{t:this.shape_1663},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1660},{t:this.shape_1659},{t:this.shape_1658},{t:this.shape_1657},{t:this.shape_1656},{t:this.shape_1655},{t:this.shape_1654},{t:this.shape_1653},{t:this.shape_1652},{t:this.shape_1651},{t:this.shape_1650},{t:this.shape_1649},{t:this.shape_1648},{t:this.shape_1647},{t:this.shape_1646},{t:this.shape_1645},{t:this.shape_1644},{t:this.shape_1643},{t:this.shape_1642},{t:this.shape_1641},{t:this.shape_1640},{t:this.shape_1639},{t:this.shape_1638},{t:this.shape_1637},{t:this.shape_1636},{t:this.shape_1635},{t:this.shape_1634},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631},{t:this.shape_1630},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624},{t:this.shape_1623},{t:this.shape_1622},{t:this.shape_1621},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609},{t:this.shape_1608},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.4,-232.8,403.6,465.6);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AhQBRQghgigBgvQABguAhgiQAighAugBQAvABAiAhQAhAiABAuQgBAvghAiQgiAhgvABQgugBgighg");
	this.shape.setTransform(11.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,23);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);
	this.instance.shadow = new cjs.Shadow("rgba(51,255,255,1)",0,0,25);
	this.instance.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance.cache(-2,-2,27,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.56,scaleY:0.56,x:11.6,y:11.6},18).to({scaleX:1,scaleY:1},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-76,183,183);


// stage content:



(lib.neurologie1270x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_105 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(105).call(this.frame_105).wait(1));

	// Layer 23
	this.instance = new lib.Symbol2();
	this.instance.setTransform(20.9,333.9,8.096,0.178,0,0,0,2.6,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).wait(1).to({regX:11.5,regY:11.5,x:90.4,y:377.3},0).wait(1).to({x:89.6,y:418.8},0).wait(1).to({x:91.9,y:460.2},0).wait(1).to({x:99.3,y:500.9},0).wait(1).to({x:115,y:539.2},0).wait(1).to({x:140.8,y:571.5},0).wait(1).to({x:175,y:594.8},0).wait(1).to({x:213.5,y:610.1},0).wait(1).to({x:253.9,y:619.5},0).wait(1).to({x:294.9,y:625.1},0).wait(1).to({x:336.3,y:627.9},0).wait(1).to({x:377.8,y:628.9},0).wait(1).to({x:419.3,y:628.4},0).wait(1).to({x:460.8,y:626.9},0).wait(1).to({x:502.1,y:624.4},0).wait(1).to({x:543.5,y:621.3},0).wait(1).to({x:584.8,y:617.7},0).wait(1).to({x:626.1,y:613.6},0).wait(1).to({x:667.4,y:609.1},0).wait(1).to({x:708.6,y:604.3},0).wait(1).to({x:749.7,y:599.2},0).wait(1).to({x:790.9,y:593.9},0).wait(1).to({x:832,y:588.4},0).wait(1).to({x:873.1,y:582.7},0).wait(1).to({x:914.2,y:576.8},0).wait(1).to({x:888.7,y:580.2},0).wait(1).to({x:863.2,y:583.6},0).wait(1).to({x:837.7,y:587},0).wait(1).to({x:812.1,y:590.4},0).wait(1).to({x:786.6,y:593.8},0).wait(1).to({x:761.1,y:597.2},0).wait(1).to({x:735.6,y:600.5},0).wait(1).to({x:710,y:603.9},0).wait(1).to({x:684.5,y:607.2},0).wait(1).to({x:659,y:610.5},0).wait(1).to({x:633.4,y:613.7},0).wait(1).to({x:607.9,y:616.9},0).wait(1).to({x:582.3,y:619.9},0).wait(1).to({x:588,y:617.7},0).wait(1).to({x:613.4,y:613.6},0).wait(1).to({x:638.8,y:609.8},0).wait(1).to({x:664.3,y:605.9},0).wait(1).to({x:689.7,y:602.1},0).wait(1).to({x:715.2,y:598.4},0).wait(1).to({x:740.6,y:594.6},0).wait(1).to({x:766.1,y:590.9},0).wait(1).to({x:791.5,y:587.2},0).wait(1).to({x:817,y:583.5},0).wait(1).to({x:842.3,y:579.8},0).wait(1).to({x:867.4,y:576.2},0).wait(1).to({x:888,y:573.2},0).wait(1).to({x:919,y:568.8},0).wait(1));

	// Layer 15
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(1571.4,555.3,8.096,0.178,0,0,0,40.5,-5.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).wait(1).to({regX:11.5,regY:11.5,x:1273,y:570.6},0).wait(1).to({x:1208.9,y:581.5},0).wait(1).to({x:1144.6,y:591.4},0).wait(1).to({x:1080.2,y:600.5},0).wait(1).to({x:1015.7,y:608.9},0).wait(1).to({x:951,y:616.5},0).wait(1).to({x:886.3,y:623.2},0).wait(1).to({x:821.4,y:629.1},0).wait(1).to({x:756.5,y:633.8},0).wait(1).to({x:691.4,y:637.2},0).wait(1).to({x:626.2,y:638.9},0).wait(1).to({x:560.8,y:637.9},0).wait(1).to({x:510.5,y:633.2},0).wait(1).to({x:432.6,y:621.4},0).wait(1).to({x:368.9,y:608.7},0).wait(1).to({x:316.8,y:594.6},0).wait(1).to({x:243.3,y:572.8},0).wait(1).to({x:182,y:552.9},0).wait(1).to({x:126.5,y:532.2},0).wait(1).to({x:59.4,y:505.6},0).wait(1).to({x:2.7,y:482.2},0).wait(1).to({x:-36.4,y:467.5},0).wait(1).to({x:42.9,y:480.3},0).wait(1).to({x:108.1,y:492.4},0).wait(1).to({x:172.5,y:505.3},0).wait(1).to({x:238.7,y:519.9},0).wait(1).to({x:295.9,y:539.6},0).wait(1).to({x:296.3,y:540.7},0).wait(1).to({x:296.6,y:541.9},0).wait(1).to({x:296.8,y:543.1},0).wait(1).to({x:297,y:544.3},0).wait(1).to({x:297.2,y:545.5},0).wait(1).to({x:297.3,y:546.7},0).wait(1).to({x:297.4,y:547.9},0).wait(1).to({x:297.5,y:549.1},0).wait(1).to({y:550.3},0).wait(1).to({y:551.5},0).wait(1).to({x:297.4,y:552.7},0).wait(1).to({x:297.3,y:554},0).wait(1).to({x:297.1,y:555.2},0).wait(1).to({x:296.9,y:556.4},0).wait(1).to({x:296.7,y:557.5},0).wait(1).to({x:296.4,y:558.7},0).wait(1).to({x:296.1,y:559.9},0).wait(1).to({x:295.7,y:561.1},0).wait(1).to({x:295.4,y:562.1},0).wait(1).to({x:294.9,y:563.3},0).wait(1).to({x:294.6,y:564},0).wait(1).to({x:294.3,y:564.7},0).wait(1).to({x:293.9,y:565.4},0).wait(1).to({x:293.4,y:566.4},0).wait(1).to({x:292,y:568.7},0).wait(1));

	// Layer 14
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(-31.6,715.8,0.421,0.421,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.74,scaleY:0.74,skewY:0,x:560.4,y:438.6},69).wait(37));

	// Layer 13
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(1326.1,95.5,0.421,0.421,0,0,180);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.39,scaleY:0.39,skewY:0,x:1082.1,y:155.4},25).wait(46));

	// Layer 11
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(-67.1,670.3,0.421,0.421,0,0,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({scaleX:0.68,scaleY:0.68,skewY:0,x:700.5,y:178.6},53).wait(28));

	// Layer 10
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(1095.3,-70,0.421,0.421,0,0,180);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:0.77,scaleY:0.77,skewY:0,x:1213.9,y:537.7},32).wait(33));

	// Layer 9
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(844.2,785.1,0.421,0.421,0,0,180);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).to({regX:-0.1,scaleX:0.64,scaleY:0.64,skewY:0,x:1126.1,y:473.5},43).wait(29));

	// Layer 8
	this.instance_7 = new lib.Symbol2();
	this.instance_7.setTransform(654.1,-81.4,0.421,0.421,0,0,180);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).to({regX:4,regY:10.6,scaleX:0.46,scaleY:0.46,skewY:0,x:743,y:89.7},28).wait(41));

	// Layer 7
	this.instance_8 = new lib.Symbol2();
	this.instance_8.setTransform(654.1,792.5,0.421,0.421,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:11.5,regY:11.5,scaleX:0.42,scaleY:0.42,x:638.2,y:749.5},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:628.2,y:701.5},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:619.3,y:653.2},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:611.5,y:604.7},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:605.1,y:556.1},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:600.3,y:507.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:597.1,y:458.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:595.9,y:409.1},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:596.9,y:360.1},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:600.7,y:311.1},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:607.6,y:262.5},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:618.6,y:214.7},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:634.5,y:168.3},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:656.6,y:124.5},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:686.1,y:85.4},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:723.9,y:54.2},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:768.4,y:34},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:816.7,y:25.9},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:865.7,y:28.4},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:913.5,y:39},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:959.8,y:55.4},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:1004.2,y:76.3},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:1047,y:100.5},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:1088.1,y:127.2},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:1128,y:156},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:1142.9,y:170.2},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:1152.4,y:188.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:1154.6,y:208.7},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:1153.1,y:229.2},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:1150.9,y:249.8},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:1149.4,y:270.4},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:1149.5,y:291},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:1151.1,y:311.6},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:1154.3,y:332},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:1158.9,y:352.1},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:1164.7,y:371.9},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:1171.6,y:391.3},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:1179.4,y:410.4},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:1185.6,y:429.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:1189.1,y:450.2},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:1190.6,y:470.9},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:1190.5,y:491.7},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:1188.7,y:512.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:1184.8,y:532.6},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:1178.7,y:552.3},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:1169.6,y:570.8},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:1157.2,y:587.2},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:1141.4,y:600.3},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:1122.9,y:609.1},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:1102.8,y:613.4},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:1082.2,y:613.9},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:1061.6,y:611.6},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:1042.2,y:607.2},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:1021.8,y:601.9},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:1001.7,y:596.5},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:981.7,y:591},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:961.7,y:585.5},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:941.8,y:580},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:921.8,y:574.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:901.9,y:569.4},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:881.8,y:564.2},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:861.8,y:559.2},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:841.7,y:554.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:821.6,y:549.6},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:801.4,y:545.2},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:781.2,y:541},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:760.9,y:537.3},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:740.4,y:534},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:719.9,y:531.3},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:699.2,y:529.6},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:681.3,y:528.9},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:660.1,y:521.4},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:641,y:513.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:622,y:504.7},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:603.2,y:496.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:584.5,y:487.3},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:565.9,y:478.5},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:547.2,y:469.5},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:528.7,y:460.5},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:510.1,y:451.4},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:491.6,y:442.3},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:473.2,y:433},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:454.7,y:423.6},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:436.4,y:414.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:418.2,y:404.4},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:400.6,y:393.9},0).wait(1).to({scaleX:0.52,scaleY:0.65,x:389.1,y:379.8},0).wait(1).to({scaleX:0.42,scaleY:0.67,x:389.3,y:361.4},0).wait(1).to({scaleX:0.32,scaleY:0.69,x:401.6,y:346.1},0).wait(1).to({scaleX:0.22,scaleY:0.72,x:418,y:334.6},0).wait(1).to({scaleX:0.12,scaleY:0.74,x:435.8,y:325.1},0).wait(1).to({scaleX:0.01,scaleY:0.76,x:454.4,y:317.1},0).wait(1).to({scaleX:0.09,scaleY:0.79,skewY:0,x:473.3,y:310},0).wait(1).to({scaleX:0.19,scaleY:0.81,x:492.6,y:303.7},0).wait(1).to({scaleX:0.29,scaleY:0.84,x:512.1,y:297.9},0).wait(1).to({scaleX:0.39,scaleY:0.86,x:531.7,y:292.6},0).wait(1).to({scaleX:0.49,scaleY:0.88,x:551.5,y:287.9},0).wait(1).to({scaleX:0.59,scaleY:0.91,x:571.4,y:283.5},0).wait(1).to({scaleX:0.7,scaleY:0.93,x:591.4,y:279.6},0).wait(1).to({scaleX:0.8,scaleY:0.95,x:611.4,y:276},0).wait(1).to({scaleX:0.9,scaleY:0.98,x:631.6,y:273},0).wait(1).to({scaleX:1,scaleY:1,x:651.8,y:270.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:668.7,y:266.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:685.7,y:263.1},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:702.4,y:263.5},0).wait(1));

	// Layer 6
	this.instance_9 = new lib.Symbol2();
	this.instance_9.setTransform(1364.9,294.7,0.421,0.421,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:11.5,regY:11.5,scaleX:0.42,scaleY:0.42,x:1340.2,y:291.4},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:1319.8,y:283.2},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:1299.5,y:275},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:1279.2,y:266.9},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:1258.9,y:258.8},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:1238.7,y:250.8},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:1218.3,y:242.8},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:1198,y:234.8},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:1177.6,y:226.9},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:1157.3,y:219},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:1136.9,y:211.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:1116.5,y:203.4},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:1096.1,y:195.7},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:1075.7,y:188},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:1055.2,y:180.4},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:1034.7,y:172.9},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:1014.1,y:165.5},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:993.5,y:158.2},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:972.7,y:151.1},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:955.5,y:145.5},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:932,y:138.6},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:910.7,y:132.4},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:889.6,y:126.4},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:868.5,y:120.4},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:847.4,y:114.5},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:826.3,y:108.8},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:805.3,y:103.1},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:784.1,y:97.6},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:763,y:92.2},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:741.7,y:86.9},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:720.5,y:81.8},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:699.1,y:76.9},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:677.4,y:72.5},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:659.9,y:69.6},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:635.4,y:66.8},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:613.3,y:64.5},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:591.4,y:62.6},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:569.5,y:60.9},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:547.7,y:59.6},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:525.9,y:58.8},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:504,y:58.7},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:481.9,y:60},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:463.5,y:64.6},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:441.1,y:73},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:420.9,y:82.6},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:402.2,y:95.1},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:392.2,y:109.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:391.1,y:133.8},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:393.6,y:155.8},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:399,y:177},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:407.9,y:196.9},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:419.2,y:213.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:433.5,y:231.4},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:447.6,y:248.4},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:462,y:264.9},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:476.8,y:281.1},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:492,y:296.9},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:507.6,y:312.2},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:523.6,y:326.9},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:540.1,y:340.6},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:557.2,y:354.4},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:574.5,y:367.8},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:591.8,y:381},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:609.3,y:394.1},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:626.9,y:407},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:644.5,y:419.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:662.3,y:432.4},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:680.2,y:444.9},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:698.2,y:457.2},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:716.4,y:469.3},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:734.7,y:481.2},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:744.2,y:498.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:753,y:519.2},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:763,y:538.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:774.2,y:557.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:786.4,y:575.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:799.8,y:593.1},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:814.5,y:609.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:831,y:623.6},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:849.3,y:635.1},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:869.9,y:641.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:891.5,y:641},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:910.9,y:632.1},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:928,y:618.9},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:945.3,y:605.7},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:963.4,y:593.2},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:982.3,y:581.8},0).wait(1).to({scaleX:0.48,scaleY:0.61,x:1003.2,y:571.7},0).wait(1).to({scaleX:0.37,scaleY:0.64,x:1024.8,y:562.6},0).wait(1).to({scaleX:0.27,scaleY:0.67,x:1047.2,y:554.5},0).wait(1).to({scaleX:0.16,scaleY:0.69,x:1070.7,y:548},0).wait(1).to({scaleX:0.05,scaleY:0.72,x:1087.5,y:545.2},0).wait(1).to({scaleX:0.05,scaleY:0.75,skewY:0,x:1087.1,y:519.8},0).wait(1).to({scaleX:0.16,scaleY:0.78,x:1085.2,y:497.7},0).wait(1).to({scaleX:0.26,scaleY:0.81,x:1082.8,y:476.9},0).wait(1).to({scaleX:0.37,scaleY:0.83,x:1079.6,y:454.2},0).wait(1).to({scaleX:0.47,scaleY:0.86,x:1076.5,y:432.3},0).wait(1).to({scaleX:0.58,scaleY:0.89,x:1073.6,y:411},0).wait(1).to({scaleX:0.68,scaleY:0.92,x:1085.3,y:408.2},0).wait(1).to({scaleX:0.79,scaleY:0.94,x:1097.1,y:405.4},0).wait(1).to({scaleX:0.9,scaleY:0.97,x:1108.9,y:402.6},0).wait(1).to({scaleX:1,scaleY:1,x:1120.7,y:399.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,skewY:180,x:1109.5,y:395.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:1122.7,y:389.7},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:1136,y:383.9},0).wait(1));

	// Layer 5
	this.instance_10 = new lib.Symbol2();
	this.instance_10.setTransform(-57.4,401.4,0.421,0.421,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:11.5,regY:11.5,scaleX:0.41,scaleY:0.43,x:-43.2,y:400.7},0).wait(1).to({scaleX:0.4,scaleY:0.43,x:-20,y:394},0).wait(1).to({scaleX:0.39,scaleY:0.44,x:1.9,y:388},0).wait(1).to({scaleX:0.37,scaleY:0.44,x:24,y:382.5},0).wait(1).to({scaleX:0.36,scaleY:0.45,x:46.3,y:377.4},0).wait(1).to({scaleX:0.35,scaleY:0.45,x:68.6,y:372.8},0).wait(1).to({scaleX:0.34,scaleY:0.46,x:91.1,y:368.9},0).wait(1).to({scaleX:0.33,scaleY:0.46,x:113.8,y:365.5},0).wait(1).to({scaleX:0.31,scaleY:0.47,x:136.6,y:362.8},0).wait(1).to({scaleX:0.3,scaleY:0.47,x:159.6,y:360.8},0).wait(1).to({scaleX:0.29,scaleY:0.48,x:182.8,y:359.6},0).wait(1).to({scaleX:0.28,scaleY:0.48,x:206,y:359.5},0).wait(1).to({scaleX:0.27,scaleY:0.49,x:229.3,y:360.4},0).wait(1).to({scaleX:0.25,scaleY:0.49,x:252.6,y:362.7},0).wait(1).to({scaleX:0.24,scaleY:0.5,x:275.8,y:366.5},0).wait(1).to({scaleX:0.23,scaleY:0.5,x:298.8,y:372},0).wait(1).to({scaleX:0.22,scaleY:0.51,x:321.2,y:379.5},0).wait(1).to({scaleX:0.2,scaleY:0.51,x:342.8,y:389.3},0).wait(1).to({scaleX:0.19,scaleY:0.52,x:363.2,y:401.5},0).wait(1).to({scaleX:0.18,scaleY:0.52,x:381.8,y:416.4},0).wait(1).to({scaleX:0.17,scaleY:0.53,x:398.3,y:433.7},0).wait(1).to({scaleX:0.15,scaleY:0.53,x:412.3,y:453.3},0).wait(1).to({scaleX:0.14,scaleY:0.54,x:423.5,y:474.6},0).wait(1).to({scaleX:0.13,scaleY:0.54,x:432.1,y:497.2},0).wait(1).to({scaleX:0.12,scaleY:0.55,x:438.2,y:520.6},0).wait(1).to({scaleX:0.1,scaleY:0.55,x:444.7,y:544},0).wait(1).to({scaleX:0.09,scaleY:0.56,x:455.5,y:565.8},0).wait(1).to({scaleX:0.08,scaleY:0.56,x:469.6,y:585.9},0).wait(1).to({scaleX:0.06,scaleY:0.57,x:486.3,y:604},0).wait(1).to({scaleX:0.05,scaleY:0.57,x:504.9,y:620.2},0).wait(1).to({scaleX:0.04,scaleY:0.58,x:525.2,y:634.5},0).wait(1).to({scaleX:0.03,scaleY:0.58,x:546.9,y:646.8},0).wait(1).to({scaleX:0.01,scaleY:0.59,x:569.6,y:657.2},0).wait(1).to({scaleX:0,scaleY:0.59,skewY:0,x:593.2,y:665.4},0).wait(1).to({scaleX:0.02,scaleY:0.6,x:617.6,y:671.6},0).wait(1).to({scaleX:0.03,scaleY:0.6,x:642.5,y:675.3},0).wait(1).to({scaleX:0.04,scaleY:0.61,x:667.7,y:676.6},0).wait(1).to({scaleX:0.05,scaleY:0.62,x:693,y:675.2},0).wait(1).to({scaleX:0.07,scaleY:0.62,x:718.1,y:671.1},0).wait(1).to({scaleX:0.08,scaleY:0.63,x:742.6,y:664.1},0).wait(1).to({scaleX:0.09,scaleY:0.63,x:766.1,y:654.3},0).wait(1).to({scaleX:0.11,scaleY:0.64,x:788.5,y:641.8},0).wait(1).to({scaleX:0.12,scaleY:0.64,x:809.3,y:626.9},0).wait(1).to({scaleX:0.14,scaleY:0.65,x:828.5,y:609.8},0).wait(1).to({scaleX:0.15,scaleY:0.65,x:846,y:590.8},0).wait(1).to({scaleX:0.16,scaleY:0.66,x:861.7,y:570.1},0).wait(1).to({scaleX:0.18,scaleY:0.66,x:876.3,y:547.9},0).wait(1).to({scaleX:0.19,scaleY:0.67,x:892.7,y:527.5},0).wait(1).to({scaleX:0.2,scaleY:0.68,x:912.6,y:510.8},0).wait(1).to({scaleX:0.22,scaleY:0.68,x:936.4,y:500.9},0).wait(1).to({scaleX:0.23,scaleY:0.69,x:962.3,y:500.5},0).wait(1).to({scaleX:0.25,scaleY:0.69,x:987.4,y:508.6},0).wait(1).to({scaleX:0.26,scaleY:0.7,x:1010.3,y:522.2},0).wait(1).to({scaleX:0.27,scaleY:0.7,x:1031.3,y:538.7},0).wait(1).to({scaleX:0.29,scaleY:0.71,x:1051,y:556.9},0).wait(1).to({scaleX:0.3,scaleY:0.72,x:1069.7,y:576.1},0).wait(1).to({scaleX:0.32,scaleY:0.72,x:1088.2,y:595.8},0).wait(1).to({scaleX:0.33,scaleY:0.73,x:1106.8,y:615.6},0).wait(1).to({scaleX:0.34,scaleY:0.73,x:1126.5,y:634.6},0).wait(1).to({scaleX:0.36,scaleY:0.74,x:1149.2,y:649.9},0).wait(1).to({scaleX:0.37,scaleY:0.74,x:1172.9,y:643.5},0).wait(1).to({scaleX:0.39,scaleY:0.75,x:1190.8,y:623.3},0).wait(1).to({scaleX:0.4,scaleY:0.76,x:1203.2,y:599.4},0).wait(1).to({scaleX:0.42,scaleY:0.76,x:1209.5,y:573},0).wait(1).to({scaleX:0.43,scaleY:0.77,x:1210.7,y:545.8},0).wait(1).to({scaleX:0.44,scaleY:0.77,x:1208.2,y:518.6},0).wait(1).to({scaleX:0.46,scaleY:0.78,x:1203.4,y:491.5},0).wait(1).to({scaleX:0.47,scaleY:0.79,x:1197.5,y:464.7},0).wait(1).to({scaleX:0.49,scaleY:0.79,x:1191.1,y:437.8},0).wait(1).to({scaleX:0.5,scaleY:0.8,x:1184.9,y:410.8},0).wait(1).to({scaleX:0.52,scaleY:0.8,x:1179.5,y:383.6},0).wait(1).to({scaleX:0.53,scaleY:0.81,x:1175.4,y:356},0).wait(1).to({scaleX:0.55,scaleY:0.82,x:1173.3,y:328.1},0).wait(1).to({scaleX:0.56,scaleY:0.82,x:1173.8,y:300.2},0).wait(1).to({scaleX:0.58,scaleY:0.83,x:1177.3,y:272.3},0).wait(1).to({scaleX:0.59,scaleY:0.83,x:1184.5,y:245.1},0).wait(1).to({scaleX:0.61,scaleY:0.84,x:1195.3,y:218.9},0).wait(1).to({scaleX:0.62,scaleY:0.85,x:1209.6,y:194.2},0).wait(1).to({scaleX:0.64,scaleY:0.85,x:1224.4,y:169.3},0).wait(1).to({scaleX:0.65,scaleY:0.86,x:1233.7,y:142},0).wait(1).to({scaleX:0.67,scaleY:0.86,x:1230.2,y:114.5},0).wait(1).to({scaleX:0.68,scaleY:0.87,x:1211.7,y:94.4},0).wait(1).to({scaleX:0.7,scaleY:0.88,x:1185.6,y:82.3},0).wait(1).to({scaleX:0.71,scaleY:0.88,x:1159.7,y:79.4},0).wait(1).to({scaleX:0.73,scaleY:0.89,x:1131.2,y:90.1},0).wait(1).to({scaleX:0.74,scaleY:0.9,x:1105.1,y:103.4},0).wait(1).to({scaleX:0.76,scaleY:0.9,x:1079.6,y:117.8},0).wait(1).to({scaleX:0.77,scaleY:0.91,x:1054.5,y:132.7},0).wait(1).to({scaleX:0.79,scaleY:0.91,x:1029.6,y:147.9},0).wait(1).to({scaleX:0.8,scaleY:0.92,x:1004.8,y:163.3},0).wait(1).to({scaleX:0.82,scaleY:0.93,x:979.9,y:178.8},0).wait(1).to({scaleX:0.84,scaleY:0.93,x:954.9,y:194.5},0).wait(1).to({scaleX:0.85,scaleY:0.94,x:929.9,y:210.1},0).wait(1).to({scaleX:0.87,scaleY:0.95,x:904.6,y:225.6},0).wait(1).to({scaleX:0.88,scaleY:0.95,x:879.3,y:241.1},0).wait(1).to({scaleX:0.9,scaleY:0.96,x:853.7,y:256.3},0).wait(1).to({scaleX:0.91,scaleY:0.97,x:827.9,y:271.3},0).wait(1).to({scaleX:0.93,scaleY:0.97,x:801.8,y:285.9},0).wait(1).to({scaleX:0.95,scaleY:0.98,x:775.3,y:300},0).wait(1).to({scaleX:0.96,scaleY:0.98,x:748.3,y:313.4},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:720.7,y:325.8},0).wait(1).to({scaleX:0.99,scaleY:1,x:692.4,y:336.5},0).wait(1).to({scaleX:0.09,scaleY:0.72,skewY:180,x:650.4,y:341},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:637,y:340.7},0).wait(2));

	// Layer 4
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(1326.1,745.2,0.421,0.421,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:11.5,regY:11.5,scaleX:0.41,scaleY:0.43,skewX:-0.4,skewY:179.6,x:1312.3,y:748.7},0).wait(1).to({scaleX:0.4,scaleY:0.43,skewX:-0.8,skewY:179.2,x:1303.4,y:747.3},0).wait(1).to({scaleX:0.38,scaleY:0.44,skewX:-1.1,skewY:178.9,x:1294.4,y:746},0).wait(1).to({scaleX:0.37,scaleY:0.44,skewX:-1.5,skewY:178.5,x:1285.5,y:744.6},0).wait(1).to({scaleX:0.36,scaleY:0.45,skewX:-1.9,skewY:178.1,x:1276.5,y:743.2},0).wait(1).to({scaleX:0.34,scaleY:0.45,skewX:-2.3,skewY:177.7,x:1267.5,y:741.7},0).wait(1).to({scaleX:0.33,scaleY:0.46,skewX:-2.7,skewY:177.3,x:1258.5,y:740.3},0).wait(1).to({scaleX:0.32,scaleY:0.46,skewX:-3.1,skewY:176.9,x:1249.5,y:738.8},0).wait(1).to({scaleX:0.3,scaleY:0.47,skewX:-3.5,skewY:176.5,x:1240.5,y:737.3},0).wait(1).to({scaleX:0.29,scaleY:0.48,skewX:-3.9,skewY:176.1,x:1231.4,y:735.7},0).wait(1).to({scaleX:0.28,scaleY:0.48,skewX:-4.2,skewY:175.8,x:1222.3,y:734.2},0).wait(1).to({scaleX:0.26,scaleY:0.49,skewX:-4.6,skewY:175.4,x:1213.2,y:732.6},0).wait(1).to({scaleX:0.25,scaleY:0.49,skewX:-5,skewY:175,x:1204.1,y:731},0).wait(1).to({scaleX:0.24,scaleY:0.5,skewX:-5.4,skewY:174.6,x:1195,y:729.3},0).wait(1).to({scaleX:0.22,scaleY:0.5,skewX:-5.8,skewY:174.2,x:1185.8,y:727.6},0).wait(1).to({scaleX:0.21,scaleY:0.51,skewX:-6.2,skewY:173.8,x:1176.7,y:725.8},0).wait(1).to({scaleX:0.2,scaleY:0.51,skewX:-6.6,skewY:173.4,x:1167.5,y:724.1},0).wait(1).to({scaleX:0.18,scaleY:0.52,skewX:-7,skewY:173,x:1158.4,y:722.3},0).wait(1).to({scaleX:0.17,scaleY:0.52,skewX:-7.4,skewY:172.6,x:1149.2,y:720.5},0).wait(1).to({scaleX:0.15,scaleY:0.53,skewX:-7.8,skewY:172.2,x:1140,y:718.6},0).wait(1).to({scaleX:0.14,scaleY:0.54,skewX:-8.2,skewY:171.8,x:1130.7,y:716.7},0).wait(1).to({scaleX:0.13,scaleY:0.54,skewX:-8.6,skewY:171.4,x:1121.5,y:714.6},0).wait(1).to({scaleX:0.11,scaleY:0.55,skewX:-9,skewY:171,x:1112.2,y:712.6},0).wait(1).to({scaleX:0.1,scaleY:0.55,skewX:-9.4,skewY:170.6,x:1103,y:710.5},0).wait(1).to({scaleX:0.09,scaleY:0.56,skewX:-9.8,skewY:170.2,x:1093.7,y:708.4},0).wait(1).to({scaleX:0.07,scaleY:0.56,skewX:-10.2,skewY:169.8,x:1084.4,y:706.2},0).wait(1).to({scaleX:0.06,scaleY:0.57,skewX:-10.6,skewY:169.4,x:1075.2,y:704},0).wait(1).to({scaleX:0.04,scaleY:0.57,skewX:-11,skewY:169,x:1065.9,y:701.7},0).wait(1).to({scaleX:0.03,scaleY:0.58,skewX:-11.4,skewY:168.6,x:1056.6,y:699.2},0).wait(1).to({scaleX:0.02,scaleY:0.59,skewX:-11.8,skewY:168.2,x:1047.3,y:696.8},0).wait(1).to({scaleX:0,scaleY:0.59,skewX:-12.3,skewY:167.7,x:1038,y:694.2},0).wait(1).to({scaleX:0.01,scaleY:0.6,rotation:-12.7,skewX:0,skewY:0,x:1028.7,y:691.5},0).wait(1).to({scaleX:0.03,scaleY:0.6,rotation:-13.1,x:1019.4,y:688.8},0).wait(1).to({scaleX:0.04,scaleY:0.61,rotation:-13.5,x:1010.2,y:685.9},0).wait(1).to({scaleX:0.05,scaleY:0.62,rotation:-13.9,x:1000.9,y:682.9},0).wait(1).to({scaleX:0.07,scaleY:0.62,rotation:-14.3,x:991.7,y:679.8},0).wait(1).to({scaleX:0.08,scaleY:0.63,rotation:-14.7,x:982.5,y:676.5},0).wait(1).to({scaleX:0.1,scaleY:0.63,rotation:-15.1,x:973.3,y:673},0).wait(1).to({scaleX:0.11,scaleY:0.64,rotation:-15.6,x:964.3,y:669.4},0).wait(1).to({scaleX:0.13,scaleY:0.64,rotation:-16,x:955.4,y:665.4},0).wait(1).to({scaleX:0.14,scaleY:0.65,rotation:-16.4,x:946.4,y:661.2},0).wait(1).to({scaleX:0.15,scaleY:0.66,rotation:-16.8,x:937.7,y:656.5},0).wait(1).to({scaleX:0.17,scaleY:0.66,rotation:-17.2,x:929.1,y:651.3},0).wait(1).to({scaleX:0.18,scaleY:0.67,rotation:-17.7,x:921.1,y:645.4},0).wait(1).to({scaleX:0.2,scaleY:0.67,rotation:-18.1,x:913.8,y:638.4},0).wait(1).to({scaleX:0.21,scaleY:0.68,rotation:-18.5,x:908.3,y:630},0).wait(1).to({scaleX:0.23,scaleY:0.69,rotation:-18.9,x:906.9,y:620.2},0).wait(1).to({scaleX:0.24,scaleY:0.69,rotation:-19.3,x:910.9,y:611},0).wait(1).to({scaleX:0.26,scaleY:0.7,rotation:-19.8,x:918.2,y:603.6},0).wait(1).to({scaleX:0.27,scaleY:0.7,rotation:-20.2,x:927,y:597.9},0).wait(1).to({scaleX:0.28,scaleY:0.71,rotation:-20.6,x:936.4,y:593},0).wait(1).to({scaleX:0.3,scaleY:0.71,rotation:-21,x:946.2,y:589},0).wait(1).to({scaleX:0.31,scaleY:0.72,rotation:-21.5,x:956.2,y:585.6},0).wait(1).to({scaleX:0.33,scaleY:0.73,rotation:-21.9,x:966.3,y:582.7},0).wait(1).to({scaleX:0.34,scaleY:0.73,rotation:-22.3,x:976.6,y:580.1},0).wait(1).to({scaleX:0.36,scaleY:0.74,rotation:-22.8,x:987,y:577.8},0).wait(1).to({scaleX:0.37,scaleY:0.74,rotation:-23.2,x:997.5,y:575.8},0).wait(1).to({scaleX:0.39,scaleY:0.75,rotation:-23.6,x:1008.1,y:574.1},0).wait(1).to({scaleX:0.4,scaleY:0.76,rotation:-24.1,x:1018.6,y:572.7},0).wait(1).to({scaleX:0.42,scaleY:0.76,rotation:-24.5,x:1029.3,y:571.5},0).wait(1).to({scaleX:0.43,scaleY:0.77,rotation:-24.9,x:1040,y:570.7},0).wait(1).to({scaleX:0.45,scaleY:0.77,rotation:-25.4,x:1050.8,y:570.2},0).wait(1).to({scaleX:0.46,scaleY:0.78,rotation:-25.8,x:1061.6,y:570.1},0).wait(1).to({scaleX:0.48,scaleY:0.79,rotation:-26.2,x:1072.3,y:570.4},0).wait(1).to({scaleX:0.49,scaleY:0.79,rotation:-26.7,x:1083.2,y:571.4},0).wait(1).to({scaleX:0.51,scaleY:0.8,rotation:-27.1,x:1093.9,y:573.7},0).wait(1).to({scaleX:0.52,scaleY:0.81,rotation:-27.6,x:1103.5,y:578.4},0).wait(1).to({scaleX:0.54,scaleY:0.81,rotation:-28,x:1105.3,y:587.5},0).wait(1).to({scaleX:0.55,scaleY:0.82,rotation:-28.5,x:1098.6,y:595.5},0).wait(1).to({scaleX:0.57,scaleY:0.82,rotation:-28.9,x:1090,y:601.8},0).wait(1).to({scaleX:0.58,scaleY:0.83,rotation:-29.3,x:1081,y:607.2},0).wait(1).to({scaleX:0.6,scaleY:0.84,rotation:-29.8,x:1071.7,y:612},0).wait(1).to({scaleX:0.61,scaleY:0.84,rotation:-30.2,x:1062.2,y:616.5},0).wait(1).to({scaleX:0.63,scaleY:0.85,rotation:-30.7,x:1052.5,y:620.7},0).wait(1).to({scaleX:0.64,scaleY:0.86,rotation:-31.1,x:1042.6,y:624.5},0).wait(1).to({scaleX:0.66,scaleY:0.86,rotation:-31.6,x:1032.6,y:627.8},0).wait(1).to({scaleX:0.67,scaleY:0.87,rotation:-32,x:1022.3,y:630.6},0).wait(1).to({scaleX:0.69,scaleY:0.87,rotation:-32.5,x:1012,y:633},0).wait(1).to({scaleX:0.71,scaleY:0.88,rotation:-32.9,x:1001.5,y:634.9},0).wait(1).to({scaleX:0.72,scaleY:0.89,rotation:-33.4,x:990.9,y:636.1},0).wait(1).to({scaleX:0.74,scaleY:0.89,rotation:-33.8,x:980.2,y:636.8},0).wait(1).to({scaleX:0.75,scaleY:0.9,rotation:-34.3,x:969.5,y:637},0).wait(1).to({scaleX:0.77,scaleY:0.91,rotation:-34.7,x:958.8,y:636.5},0).wait(1).to({scaleX:0.78,scaleY:0.91,rotation:-35.2,x:948,y:635.5},0).wait(1).to({scaleX:0.8,scaleY:0.92,rotation:-35.7,x:937.3,y:633.9},0).wait(1).to({scaleX:0.81,scaleY:0.92,rotation:-36.1,x:926.7,y:631.7},0).wait(1).to({scaleX:0.83,scaleY:0.93,rotation:-36.6,x:916.2,y:628.9},0).wait(1).to({scaleX:0.85,scaleY:0.94,rotation:-37,x:905.7,y:625.6},0).wait(1).to({scaleX:0.86,scaleY:0.94,rotation:-37.5,x:895.5,y:621.7},0).wait(1).to({scaleX:0.88,scaleY:0.95,rotation:-38,x:885.4,y:617.4},0).wait(1).to({scaleX:0.89,scaleY:0.96,rotation:-38.4,x:875.5,y:612.6},0).wait(1).to({scaleX:0.91,scaleY:0.96,rotation:-38.9,x:865.7,y:607.3},0).wait(1).to({scaleX:0.92,scaleY:0.97,rotation:-39.4,x:856.2,y:601.6},0).wait(1).to({scaleX:0.94,scaleY:0.98,rotation:-39.8,x:846.9,y:595.6},0).wait(1).to({scaleX:0.96,scaleY:0.98,rotation:-40.3,x:837.7,y:589.1},0).wait(1).to({scaleX:0.97,scaleY:0.99,rotation:-40.8,x:828.8,y:582.3},0).wait(1).to({scaleX:0.99,scaleY:1,rotation:-41.2,x:820.1,y:575.1},0).wait(1).to({scaleX:0.91,scaleY:1.01,rotation:-41.7,x:810.9,y:568.4},0).wait(1).to({scaleX:0.57,scaleY:1.03,rotation:-42.2,x:799.8,y:563.5},0).wait(1).to({scaleX:0.23,scaleY:1.05,rotation:-42.6,x:788.8,y:558.5},0).wait(1).to({scaleX:0.11,scaleY:1.08,rotation:0,skewX:-43.1,skewY:136.9,x:778.2,y:553.1},0).wait(1).to({scaleX:0.45,scaleY:1.1,skewX:-43.6,skewY:136.4,x:767.8,y:547.6},0).wait(1).to({scaleX:0.79,scaleY:1.12,skewX:-44,skewY:136,x:757.7,y:541.9},0).wait(1).to({scaleX:0.64,scaleY:0.84,skewX:-44.5,skewY:135.5,x:749.6,y:529.5},0).wait(1).to({scaleX:0.37,scaleY:0.49,skewX:-45,skewY:135,x:742,y:515.7},0).wait(1));

	// Layer 1
	this.instance_12 = new lib.Symbol2();
	this.instance_12.setTransform(1135.9,779.5,0.421,0.421,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:11.5,regY:11.5,scaleX:0.41,scaleY:0.43,x:1107.1,y:773.1},0).wait(1).to({scaleX:0.4,scaleY:0.43,x:1083.6,y:761.8},0).wait(1).to({scaleX:0.39,scaleY:0.44,x:1060.4,y:750.3},0).wait(1).to({scaleX:0.38,scaleY:0.44,x:1037.3,y:738.7},0).wait(1).to({scaleX:0.36,scaleY:0.45,x:1014.3,y:726.8},0).wait(1).to({scaleX:0.35,scaleY:0.45,x:991.4,y:714.5},0).wait(1).to({scaleX:0.34,scaleY:0.45,x:968,y:701.7},0).wait(1).to({scaleX:0.33,scaleY:0.46,x:944.9,y:688.6},0).wait(1).to({scaleX:0.32,scaleY:0.46,x:921.9,y:675.2},0).wait(1).to({scaleX:0.3,scaleY:0.47,x:899.1,y:661.3},0).wait(1).to({scaleX:0.29,scaleY:0.47,x:876.5,y:647.1},0).wait(1).to({scaleX:0.28,scaleY:0.48,x:854.1,y:632.5},0).wait(1).to({scaleX:0.27,scaleY:0.48,x:831.8,y:617.3},0).wait(1).to({scaleX:0.26,scaleY:0.49,x:809.6,y:601.3},0).wait(1).to({scaleX:0.24,scaleY:0.49,x:787.8,y:584.8},0).wait(1).to({scaleX:0.23,scaleY:0.5,x:766.4,y:567.8},0).wait(1).to({scaleX:0.22,scaleY:0.5,x:745.5,y:549.9},0).wait(1).to({scaleX:0.21,scaleY:0.51,x:725.2,y:531.3},0).wait(1).to({scaleX:0.2,scaleY:0.51,x:705.7,y:511.8},0).wait(1).to({scaleX:0.18,scaleY:0.52,x:687.1,y:491.3},0).wait(1).to({scaleX:0.17,scaleY:0.52,x:669.6,y:469.7},0).wait(1).to({scaleX:0.16,scaleY:0.53,x:653.4,y:446.6},0).wait(1).to({scaleX:0.15,scaleY:0.53,x:639.2,y:422.3},0).wait(1).to({scaleX:0.13,scaleY:0.54,x:627.5,y:396.6},0).wait(1).to({scaleX:0.12,scaleY:0.54,x:619,y:369.6},0).wait(1).to({scaleX:0.11,scaleY:0.55,x:614.5,y:341.6},0).wait(1).to({scaleX:0.1,scaleY:0.55,y:313.1},0).wait(1).to({scaleX:0.08,scaleY:0.56,x:619.5,y:285},0).wait(1).to({scaleX:0.07,scaleY:0.56,x:629.3,y:257.9},0).wait(1).to({scaleX:0.06,scaleY:0.57,x:643.2,y:232.4},0).wait(1).to({scaleX:0.04,scaleY:0.57,x:660.4,y:208.7},0).wait(1).to({scaleX:0.03,scaleY:0.58,x:680.3,y:187},0).wait(1).to({scaleX:0.02,scaleY:0.59,x:701.8,y:167.4},0).wait(1).to({scaleX:0.01,scaleY:0.59,x:724.9,y:149.2},0).wait(1).to({scaleX:0.01,scaleY:0.6,skewY:0,x:749.2,y:132.4},0).wait(1).to({scaleX:0.02,scaleY:0.6,x:774.3,y:116.9},0).wait(1).to({scaleX:0.03,scaleY:0.61,x:800.3,y:102.5},0).wait(1).to({scaleX:0.05,scaleY:0.61,x:826.8,y:89},0).wait(1).to({scaleX:0.06,scaleY:0.62,x:853.7,y:76.4},0).wait(1).to({scaleX:0.07,scaleY:0.62,x:880.9,y:64.6},0).wait(1).to({scaleX:0.09,scaleY:0.63,x:903.8,y:54.8},0).wait(1).to({scaleX:0.1,scaleY:0.63,x:916.9,y:46},0).wait(1).to({scaleX:0.11,scaleY:0.64,x:929,y:35.7},0).wait(1).to({scaleX:0.13,scaleY:0.65,x:940.8,y:24.9},0).wait(1).to({scaleX:0.14,scaleY:0.65,x:953.3,y:14.9},0).wait(1).to({scaleX:0.16,scaleY:0.66,x:967.1,y:6.9},0).wait(1).to({scaleX:0.17,scaleY:0.66,x:982.5,y:2.3},0).wait(1).to({scaleX:0.18,scaleY:0.67,x:998.7,y:1.8},0).wait(1).to({scaleX:0.2,scaleY:0.67,x:1014.8,y:4.9},0).wait(1).to({scaleX:0.21,scaleY:0.68,x:1030.2,y:10.5},0).wait(1).to({scaleX:0.22,scaleY:0.68,x:1044.9,y:17.8},0).wait(1).to({scaleX:0.24,scaleY:0.69,x:1059.1,y:26.3},0).wait(1).to({scaleX:0.25,scaleY:0.7,x:1072.8,y:35.5},0).wait(1).to({scaleX:0.27,scaleY:0.7,x:1086.3,y:45.3},0).wait(1).to({scaleX:0.28,scaleY:0.71,x:1099.8,y:55.2},0).wait(1).to({scaleX:0.29,scaleY:0.71,x:1113.2,y:65.2},0).wait(1).to({scaleX:0.31,scaleY:0.72,x:1126.6,y:75.3},0).wait(1).to({scaleX:0.32,scaleY:0.72,x:1139.9,y:85.5},0).wait(1).to({scaleX:0.34,scaleY:0.73,x:1153.2,y:95.9},0).wait(1).to({scaleX:0.35,scaleY:0.74,x:1166.5,y:106.5},0).wait(1).to({scaleX:0.37,scaleY:0.74,x:1179.7,y:117.2},0).wait(1).to({scaleX:0.38,scaleY:0.75,x:1192.8,y:128.1},0).wait(1).to({scaleX:0.39,scaleY:0.75,x:1205.9,y:139.2},0).wait(1).to({scaleX:0.41,scaleY:0.76,x:1218.9,y:150.5},0).wait(1).to({scaleX:0.42,scaleY:0.77,x:1231.7,y:161.9},0).wait(1).to({scaleX:0.44,scaleY:0.77,x:1244.4,y:173.6},0).wait(1).to({scaleX:0.45,scaleY:0.78,x:1257,y:185.6},0).wait(1).to({scaleX:0.47,scaleY:0.78,x:1269.4,y:197.8},0).wait(1).to({scaleX:0.48,scaleY:0.79,x:1281.6,y:210.3},0).wait(1).to({scaleX:0.5,scaleY:0.8,x:1293.6,y:223.2},0).wait(1).to({scaleX:0.51,scaleY:0.8,x:1305.2,y:236.3},0).wait(1).to({scaleX:0.53,scaleY:0.81,x:1316.5,y:249.9},0).wait(1).to({scaleX:0.54,scaleY:0.81,x:1327.4,y:263.9},0).wait(1).to({scaleX:0.56,scaleY:0.82,x:1337.7,y:278.3},0).wait(1).to({scaleX:0.57,scaleY:0.83,x:1347.3,y:293.3},0).wait(1).to({scaleX:0.59,scaleY:0.83,x:1356.1,y:308.8},0).wait(1).to({scaleX:0.6,scaleY:0.84,x:1363.7,y:325},0).wait(1).to({scaleX:0.62,scaleY:0.84,x:1369.9,y:341.7},0).wait(1).to({scaleX:0.63,scaleY:0.85,x:1374.2,y:359.1},0).wait(1).to({scaleX:0.65,scaleY:0.86,x:1376,y:377},0).wait(1).to({scaleX:0.66,scaleY:0.86,x:1374.7,y:394.8},0).wait(1).to({scaleX:0.68,scaleY:0.87,x:1370,y:412.2},0).wait(1).to({scaleX:0.69,scaleY:0.87,x:1361.8,y:428.2},0).wait(1).to({scaleX:0.71,scaleY:0.88,x:1350.8,y:442.5},0).wait(1).to({scaleX:0.72,scaleY:0.89,x:1337.6,y:454.9},0).wait(1).to({scaleX:0.74,scaleY:0.89,x:1322.9,y:465.5},0).wait(1).to({scaleX:0.75,scaleY:0.9,x:1307.1,y:474.6},0).wait(1).to({scaleX:0.77,scaleY:0.91,x:1290.7,y:482.4},0).wait(1).to({scaleX:0.79,scaleY:0.91,x:1273.7,y:489.2},0).wait(1).to({scaleX:0.8,scaleY:0.92,x:1256.3,y:495},0).wait(1).to({scaleX:0.82,scaleY:0.93,x:1238.6,y:500},0).wait(1).to({scaleX:0.83,scaleY:0.93,x:1220.7,y:504.3},0).wait(1).to({scaleX:0.85,scaleY:0.94,x:1202.6,y:508},0).wait(1).to({scaleX:0.86,scaleY:0.95,x:1184.3,y:511.1},0).wait(1).to({scaleX:0.88,scaleY:0.95,x:1165.9,y:513.7},0).wait(1).to({scaleX:0.9,scaleY:0.96,x:1147.4,y:515.9},0).wait(1).to({scaleX:0.91,scaleY:0.96,x:1128.8,y:517.7},0).wait(1).to({scaleX:0.93,scaleY:0.97,x:1110.1,y:519},0).wait(1).to({scaleX:0.94,scaleY:0.98,x:1091.4,y:520},0).wait(1).to({scaleX:0.96,scaleY:0.98,x:1072.5,y:520.6},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:1053.6,y:520.9},0).wait(1).to({scaleX:0.99,scaleY:1,x:1034.6,y:520.8},0).wait(1).to({scaleX:0.2,scaleY:0.76,skewY:180,x:1001.6,y:517.6},0).wait(1).to({scaleX:0.86,scaleY:0.63,x:988.4,y:515.9},0).wait(2));

	// Layer 27
	this.instance_13 = new lib.Symbol2();
	this.instance_13.setTransform(764.4,715.8,0.326,0.326,0,0,0,15.2,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:11.5,regY:11.5,scaleX:0.34,scaleY:0.34,x:808.3,y:737.5},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:852.9,y:732.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:896.9,y:725},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:940.2,y:716.1},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:982.4,y:705},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:1023.8,y:691.1},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:1063,y:673.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:1099.9,y:652.4},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:1132.7,y:626},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:1159.4,y:594.1},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:1177.6,y:557.3},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:1186.3,y:517.4},0).wait(1).to({scaleX:0.46,scaleY:0.46,y:476.9},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:1179.3,y:437.4},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:1167.2,y:399.2},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:1151.7,y:362.8},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:1133.4,y:327.7},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:1115.3,y:351.9},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:1096.7,y:376.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:1077.6,y:400.1},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:1058.1,y:423.2},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:1038.2,y:445.5},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:1017.9,y:467.1},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:997,y:487.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:975.7,y:507.6},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:953.8,y:526.4},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:931.4,y:543.9},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:908.2,y:560.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:884.3,y:574.6},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:859.7,y:587},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:834.2,y:596.8},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:808,y:603.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:781.7,y:606},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:755.7,y:604},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:730.9,y:597.2},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:707.9,y:585.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:687.7,y:570.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:670.2,y:553.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:655,y:535},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:641.8,y:515.1},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:630.4,y:494.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:621.4,y:476.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:612.4,y:444.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:623.2,y:410.7},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:638.6,y:381.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:649.7,y:351.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:642.5,y:321},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:624.3,y:295.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:606.4,y:269.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:596.2,y:241.4},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:593.9,y:215.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:597.9,y:179.9},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:602.6,y:156.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:613.2,y:125.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:633.8,y:111.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:665.8,y:111.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:695.3,y:115.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:724.3,y:119.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:744.3,y:120.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:777.9,y:121},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:805.9,y:120.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:833,y:120.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:860.2,y:119.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:890.7,y:117.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:908.1,y:111.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:927.8,y:93.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:947.9,y:85.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:969.4,y:96.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:985.4,y:114.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1004.1,y:134.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1020.5,y:152.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1041.6,y:174.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1051.8,y:180.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1069.2,y:165.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1084.2,y:182.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1093.8,y:182.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1077.2,y:193.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1056.4,y:208},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1038.3,y:220.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1021.6,y:232.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1004.9,y:243.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:988.3,y:255.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:972.4,y:266.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:956.6,y:277.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:941.2,y:288.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:926,y:298.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:911.1,y:309.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:896.6,y:319.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:882.4,y:329.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:868.4,y:339.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:855,y:348.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:841.5,y:358.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:828.5,y:367.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:815.7,y:376.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:803.4,y:384.8},0).wait(1).to({scaleX:1,scaleY:1,x:791.1,y:393.5},0).wait(1).to({scaleX:1,scaleY:1,x:779.3,y:401.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:767.8,y:408},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:756.9,y:408.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:746.3,y:408.8},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:735.5,y:409.6},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:726.1},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:711.8,y:413.1},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:701.4,y:414.1},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:698.1,y:410.4},0).wait(1));

	// Layer 26
	this.instance_14 = new lib.Symbol2();
	this.instance_14.setTransform(1352.5,466.5,0.391,0.391,0,0,0,-6.9,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:11.5,regY:11.5,scaleX:0.4,scaleY:0.4,x:1336.3,y:470.7},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:1312.8,y:473},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:1289.1,y:475.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:1265.3,y:477.6},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:1241.2,y:479.7},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:1216.9,y:481.8},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:1192.5,y:483.8},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:1168,y:485.8},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:1143.1,y:487.6},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:1118.2,y:489.3},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:1093.1,y:490.9},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:1067.8,y:492.4},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:1042.2,y:493.8},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:1016.6,y:495},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:990.7,y:496.1},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:964.7,y:496.9},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:938.6,y:497.5},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:912,y:497.9},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:885.4,y:498},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:858.6,y:497.7},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:831.7,y:497.1},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:804.8,y:496.2},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:777.6,y:494.6},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:750.2,y:492.4},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:722.5,y:489.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:694.9,y:485.6},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:667.4,y:480.4},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:640.1,y:473.6},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:613.5,y:464.3},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:588.7,y:451.3},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:567.4,y:431.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:557.5,y:405.6},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:561.6,y:377.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:574.7,y:351.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:592.4,y:327.9},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:612.6,y:306},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:634.5,y:285.5},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:657.4,y:265.9},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:681.1,y:247.1},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:705.5,y:228.9},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:730.5,y:211.3},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:756,y:194},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:783.6,y:182.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:811.7,y:156.5},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:832.8,y:127.7},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:849.5,y:96.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:871.3,y:71.9},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:908.5,y:68.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:945.6,y:72.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:982.1,y:79.9},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:1018.3,y:88.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:1055.1,y:97.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:1080.8,y:114.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:1111,y:142.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:1138.8,y:169.2},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:1169.3,y:199.9},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:1185.4,y:219.3},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:1188.3,y:257.7},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:1175.4,y:299.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:1161.8,y:335.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:1148,y:371.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:1134,y:408.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:1119.8,y:444.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:1105.4,y:481.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:1090.8,y:518.8},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:1074.4,y:559.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:1057.7,y:585.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1014.6,y:589.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:971.5,y:590.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:928.3,y:590.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:885,y:589.7},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:841.4,y:587.3},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:797.9,y:583.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:754.2,y:578.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:710.4,y:572.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:666.9,y:563.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:623.7,y:552.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:581.2,y:538.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:540.7,y:519.5},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:506.8,y:490.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:489.4,y:449.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:486.7,y:403.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:491.6,y:358},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:499.8,y:312.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:508,y:266.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:513.8,y:220.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:513.5,y:173.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:502.4,y:128.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:480.6,y:93.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:474.3,y:86.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:467,y:78.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:470.2,y:82.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:476.9,y:90.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:483.1,y:98.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:489.4,y:106.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:495.7,y:113.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:501.9,y:121.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:508.4,y:129.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:514.4,y:137.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:508,y:130.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:501.1,y:123},0).wait(1).to({scaleX:1,scaleY:1,x:494.7,y:115.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:487.2,y:108},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:694.7,y:196.5},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:1224.7,y:320.3},0).wait(1));

	// Layer 25
	this.instance_15 = new lib.Symbol2();
	this.instance_15.setTransform(847.8,-52.1,0.598,0.598,0,0,0,15.1,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:11.5,regY:11.5,scaleX:0.6,scaleY:0.6,x:793.7,y:-18.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:742.8,y:7},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:692.7,y:33.4},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:643.7,y:61.4},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:596.4,y:90.8},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:550.6,y:122.8},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:507.5,y:157.7},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:468.8,y:196.3},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:436.8,y:241},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:418.7,y:291.9},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:423.2,y:344.8},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:449,y:391.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:486.8,y:428.6},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:530.5,y:459.3},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:576.6,y:485.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:623.9,y:507.3},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:672.3,y:527},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:721.2,y:544.7},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:770.1,y:560.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:819.2,y:575.3},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:852.3,y:568.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:902.9,y:565.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:945.7,y:553.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:987.3,y:531.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:1019.6,y:515.8},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:1063.2,y:500.4},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:1102.3,y:481.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:1137.7,y:456.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:1164.9,y:424.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:1170.1,y:385.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1151.8,y:347.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1129.7,y:311.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1105.8,y:277.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:1080.3,y:245.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:1053.3,y:214.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:1024.7,y:186},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:994.3,y:159.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:965.2,y:130.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:966.9,y:95.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1000.2,y:74.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1037.8,y:64.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1076.6,y:58.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:1116.3,y:57.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:1144.8,y:60.6},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:1143.9,y:60.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:1143},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:1142.1,y:60.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:1141.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:1140.3,y:60.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1139.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1138.5,y:60.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1137.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1136.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1136},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1135.1,y:60.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1134.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1133.4,y:60.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1132.7,y:60.8},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1132.9,y:61.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1133.6,y:61.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1134.3,y:62.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1135.1,y:62.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1135.8,y:63},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1136.5,y:63.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1137.2,y:63.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1137.9,y:63.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1138.6,y:64.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1139.3,y:64.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1140,y:64.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1140.7,y:65.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1141.3,y:65.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1142,y:65.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1142.7,y:66},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1143.3,y:66.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1144,y:66.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1144.7,y:66.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1145.3,y:67},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1145.9,y:67.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1146.4,y:67.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1147.1,y:67.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1147.8,y:67.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1148.5,y:68.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1149.2,y:68.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1149.8,y:68.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1150.4,y:68.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1151,y:69.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1151.6,y:69.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1152.1,y:69.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1152.7,y:69.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1153.3,y:70},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1153.8,y:70.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1154.4,y:70.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1155,y:70.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1155.5,y:70.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1155.9,y:71},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1156.4,y:71.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1156.6,y:71.2},0).wait(1).to({scaleX:1,scaleY:1,x:1157,y:71.4},0).wait(1).to({scaleX:1,scaleY:1,x:1157.3,y:71.5},0).wait(1).to({scaleX:1,scaleY:1,x:1157.8,y:71.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:1158.1,y:73.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:1154.1,y:73},0).wait(1).to({scaleX:1,scaleY:1,x:1138.9,y:68},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1133,y:65.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1154.8,y:70.2},0).wait(1));

	// Layer 24
	this.instance_16 = new lib.Symbol2();
	this.instance_16.setTransform(431.3,751.9,0.598,0.598,0,0,0,15.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:11.5,regY:11.5,scaleX:0.6,scaleY:0.6,x:430.5,y:729.4},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:432.8,y:700},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:435.9,y:670.6},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:439.8,y:641},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:444.9,y:611.2},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:451,y:581.6},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:458.2,y:552.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:466.9,y:522.4},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:477,y:493.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:488.5,y:464.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:501.7,y:435.9},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:516.8,y:408},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:533.7,y:381.1},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:552.5,y:355.2},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:573.3,y:330.7},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:596.1,y:307.5},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:620.8,y:286.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:647.3,y:266.6},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:675.4,y:249.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:705.1,y:234},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:736,y:220.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:767.9,y:210},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:800.8,y:201.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:834.3,y:194.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:868.4,y:190.3},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:903.1,y:187.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:938,y:187.3},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:973.2,y:188.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:1008.4,y:191.9},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:1043.4,y:196.9},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:1078.4,y:204.1},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:1113.4,y:214},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:1147.3,y:228.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:1177.5,y:248.8},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:1198.6,y:277.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:1204.4,y:313},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:1197.6,y:343.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:1184,y:381},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:1170,y:419.1},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:1154.5,y:461.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:1145.5,y:484.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:1126.6,y:522},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:1104.5,y:564.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:1090.1,y:591},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:1073.5,y:627.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:1059,y:664.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1047.1,y:701.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1022.4,y:725.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:982.5,y:731.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:942.6,y:726.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:904.2,y:713.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:867.7,y:696.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:832.9,y:675.1},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:799.8,y:651},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:768.4,y:624.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:739.3,y:595.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:713.6,y:563.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:690.8,y:528.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:670.7,y:491.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:653.3,y:453.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:638.3,y:414.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:625.8,y:373.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:615.9,y:332.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:609.1,y:289.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:605.8,y:246.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:607,y:203.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:614.4,y:160.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:630.5,y:120.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:658.4,y:87.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:697.6,y:69.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:742.2,y:68.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:785.7,y:78},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:827.3,y:94.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:866.9,y:116.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:904.9,y:141.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:941.2,y:168.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:976.2,y:198},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1010,y:229.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1042.6,y:261.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1074.2,y:295.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1104.7,y:331.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1133.8,y:368.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1161.4,y:407.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1185.9,y:450.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1182.5,y:486.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1143,y:517.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1097.3,y:533.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1049.4,y:539.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1001,y:537.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:954.2,y:532.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:903.6,y:527.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:853.6,y:522.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:806,y:520.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:769.3,y:518.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:709.8,y:510.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:664.3,y:499.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:628.9,y:459.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:601.2,y:417},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:577.2,y:372.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:556.2,y:326.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:538.5,y:278.3},0).wait(1).to({scaleX:1,scaleY:1,x:525.4,y:228.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:520.4,y:176.4},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:531.8,y:123.5},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:571.5,y:89.2},0).wait(1));

	// dot bun
	this.instance_17 = new lib.Symbol2();
	this.instance_17.setTransform(1262,383.8,1,1,0,0,0,8.8,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:11.5,regY:11.5,scaleX:1,scaleY:1,x:1210,y:390.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1155.3,y:395.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1100.3,y:401},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1045.3,y:405.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:990.2,y:410.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:935,y:414.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:879.8,y:417.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:824.4,y:421},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:769,y:423.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:713.4,y:424.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:657.8,y:425.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:602,y:424.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:546.1,y:421.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:490.2,y:415.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:434.3,y:404.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:386.3,y:378.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:387,y:332.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:426.9,y:290.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:473.1,y:258.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:521.5,y:229.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:571.1,y:202.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:621.4,y:177.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:672.3,y:153.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:723.7,y:130.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:775.3,y:108.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:827.3,y:86.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:879.6,y:65.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:932,y:44.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:964.9,y:34.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:998.3,y:32.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1030.3,y:41.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1058.1,y:59.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1080.7,y:83.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1098.7,y:112.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1113.3,y:142.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1125.3,y:174.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1135.4,y:206.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1144,y:239.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1151.6,y:272.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1158.6,y:305.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:1165.7,y:338.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:1174.8,y:370.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:1183.1,y:402.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:1185.1,y:436.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:1182.4,y:470.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:1175.2,y:504.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:1162.5,y:536},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1142.8,y:563.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:1115.2,y:582.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:1081.2,y:587.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:1047.2,y:588.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:1012.9,y:592.1},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:978.9,y:598},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:945.1,y:606.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:910,y:619.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:886.4,y:634.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:853,y:647.4},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:819,y:646.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:790.9,y:628.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:775,y:598},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:768.4,y:565.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:750,y:534.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:727.1,y:508.4},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:702.7,y:483.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:677.9,y:459.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:652.8,y:435},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:628.1,y:410.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:604,y:385.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:581.7,y:357.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:569,y:326.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:580.7,y:295.9},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:608.6,y:275},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:640.7,y:261.1},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:674.1,y:250.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:708.2,y:242.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:742.6,y:236.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:777.3,y:231.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:812.1,y:226.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:847,y:223.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:882,y:220.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:917,y:217.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:952.1,y:215.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:987.4,y:213.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:1022.6,y:212.2},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:1058,y:211.1},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:1093.4,y:210.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:1129,y:209.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:1152.9,y:209},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:1143.8,y:208.9},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:1135.8},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:1127.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:1120},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:1112,y:208.8},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:1104},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:1096,y:208.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:1087.5,y:208.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1084.9,y:208.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1095.1,y:207.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1103.4,y:207.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1111.6,y:207.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1119.8,y:207},0).wait(1).to({scaleX:1,scaleY:1,x:1127.9,y:206.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1135.5,y:206.6},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:1142.6,y:206.3},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:1151.1,y:205.9},0).wait(1));

	// creier
	this.instance_18 = new lib.Tween5("synched",0);
	this.instance_18.setTransform(947.8,325.2,0.027,0.027,0,180,0);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween6("synched",0);
	this.instance_19.setTransform(918,281,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},4).to({state:[{t:this.instance_19}]},52).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(4).to({_off:false},0).to({_off:true,scaleX:0.84,scaleY:0.84,skewX:0,x:918,y:281,alpha:1},52,cjs.Ease.get(-0.61)).wait(50));

	// Titlu
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#236F81").s().p("AimDfIAAm9IFNAAIAABnIjHAAIAABBIChAAIAABhIihAAIAABJIDHAAIAABrg");
	this.shape.setTransform(1639.9,174.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#236F81").s().p("AhDDfIAAm9ICHAAIAAG9g");
	this.shape_1.setTransform(1608.4,174.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#236F81").s().p("AiSCpQg3g8AAhnQAAhiA2hEQA1hFBpAAQBQAAAwApQAxAoAOBLIiEANQgKhGg0AAQhBAAAACBQAABLAWAZQAVAZAdAAQAZAAARgPQASgPAAgbIhKAAIAAhdIDJAAIAAD5IhDAAQgIgcgKgTQgpA2hQAAQhWAAg4g9g");
	this.shape_2.setTransform(1574,174.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#236F81").s().p("AiYCnQg7g+AAhpQAAhiA5hBQA4hCBjAAQBeAAA6A+QA7A9AABnQAABog8BAQg6BBheAAQhdAAg7g/gAg/AEQgBB8BAAAQAiAAAQgeQAOgeAAhPQAAh0g+AAQhBAAAACDg");
	this.shape_3.setTransform(1528.8,174.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#236F81").s().p("AibDfIAAm9ICJAAIAAFPICuAAIAABug");
	this.shape_4.setTransform(1489.7,174.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#236F81").s().p("AiYCnQg7g+AAhpQAAhiA5hBQA4hCBkAAQBcAAA7A+QA7A9AABnQAABog8BAQg6BBheAAQhcAAg8g/gAhAAEQAAB8BAAAQAiAAAQgeQAPgeAAhPQAAh0g/AAQhCAAAACDg");
	this.shape_5.setTransform(1447.1,174.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#236F81").s().p("AAuDfIg/irIgrAAIAACrIiJAAIAAm9IDnAAQBNAAArAlQArAjAAA8QAAAmgQAeQgQAcgwAWIBRDDgAg8gqIA6AAQAYAAAQgKQAQgLAAgVQAAgrg1AAIg9AAg");
	this.shape_6.setTransform(1401.9,174.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#236F81").s().p("AiDC/QgzgkAAhPIAAktICLAAIAAEdQAAAgAOAOQAOAPAbAAQAZAAAQgKQAQgLADgOQADgNAAgnIAAkDIBsAAIAAElQAABVgyAkQgyAlhQAAQhTAAgzgjg");
	this.shape_7.setTransform(1356.4,175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#236F81").s().p("AinDfIAAm9IFPAAIAABnIjIAAIAABBIChAAIAABhIihAAIAABJIDIAAIAABrg");
	this.shape_8.setTransform(1316.4,174.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#236F81").s().p("ABPDfIh4jGQgYgjgYg3QALArAAAdIAADYIhvAAIAAm9ICBAAIBmCkQAfAxAQAiQgKg3AAg8IAAiEIBvAAIAAG9g");
	this.shape_9.setTransform(1272.7,174.6);

	this.text = new cjs.Text("NEUROLOGIE", "67px 'Franklin Gothic Heavy'", "#66D0ED");
	this.text.textAlign = "center";
	this.text.lineHeight = 89;
	this.text.lineWidth = 450;
	this.text.setTransform(1453.9,135.6);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.text}]},17).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(17).to({_off:false},0).wait(1).to({x:1419.7,y:128.3},0).wait(1).to({x:1385.3,y:121.2},0).wait(1).to({x:1351.3,y:114.4},0).wait(1).to({x:1317.5,y:107.7},0).wait(1).to({x:1283.9,y:101.2},0).wait(1).to({x:1250.6,y:94.9},0).wait(1).to({x:1217.4,y:88.7},0).wait(1).to({x:1184.5,y:82.6},0).wait(1).to({x:1151.9,y:76.7},0).wait(1).to({x:1119.4,y:70.9},0).wait(1).to({x:1087.2,y:65.3},0).wait(1).to({x:1055.2,y:59.7},0).wait(1).to({x:1023.4,y:54.3},0).wait(1).to({x:991.9,y:49},0).wait(1).to({x:960.6,y:43.8},0).wait(1).to({x:929.6,y:38.8},0).wait(1).to({x:898.8,y:33.9},0).wait(1).to({x:868.2,y:29.1},0).wait(1).to({x:837.8,y:24.4},0).wait(1).to({x:807.7,y:19.8},0).wait(1).to({x:777.8,y:15.4},0).wait(1).to({x:748.1,y:11.2},0).wait(1).to({x:718.7,y:7},0).wait(1).to({x:689.5,y:3.1},0).wait(1).to({x:660.5,y:-0.7},0).wait(1).to({x:631.8,y:-4.4},0).wait(1).to({x:603.3,y:-7.8},0).wait(1).to({x:574.9,y:-11.1},0).wait(1).to({x:546.8,y:-14.2},0).wait(1).to({x:519,y:-17},0).wait(1).to({x:491.4,y:-19.6},0).wait(1).to({x:464,y:-21.8},0).wait(1).to({x:436.9,y:-23.7},0).wait(1).to({x:410,y:-25.2},0).wait(1).to({x:383.2,y:-26.1},0).wait(1).to({x:356.6,y:-26.3},0).wait(1).to({x:330.4,y:-25.3},0).wait(1).to({x:304.4,y:-23},0).wait(1).to({x:278.9,y:-19.1},0).wait(1).to({x:254,y:-12.9},0).wait(1).to({x:230.9,y:-2.6},0).wait(1).to({x:213.5,y:14.2},0).wait(1).to({x:208.6,y:37.5},0).wait(1).to({x:215.6,y:60.9},0).wait(1).to({x:228,y:81.9},0).wait(1).to({x:242.7,y:100.9},0).wait(1).to({x:258.5,y:118.6},0).wait(1).to({x:274.9,y:135.4},0).wait(1).to({x:291.7,y:151.4},0).wait(1).to({x:295.9,y:155.3},0).wait(39));

	// subtitlu
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#297688").s().p("AgNBmIAAjLIAbAAIAADLg");
	this.shape_10.setTransform(1526.4,307.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#297688").s().p("Ag/BSQgHgGgFgJQgFgHgEgMQgCgLAAgaIAAhxIAdAAIAAByQAAAdAHALQAGALANAIQAOAGARAAQAaAAAPgNQAKgIADgKQAEgKAAgYIAAhyIAdAAIAAByQABAXgEAMQgEANgEAHQgFAJgIAGQgYAVgnAAQgmAAgZgVg");
	this.shape_11.setTransform(1512.1,307.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#297688").s().p("Ag7BmIAAjLIAdAAIAACwIBaAAIAAAbg");
	this.shape_12.setTransform(1495,307.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#297688").s().p("Ag/BSQgHgGgFgJQgFgHgDgMQgEgLAAgaIAAhxIAeAAIAAByQAAAdAGALQAHALAOAIQANAGARAAQAZAAARgNQAIgIAEgKQAEgKAAgYIAAhyIAeAAIAAByQgBAXgDAMQgDANgGAHQgFAJgHAGQgYAVgnAAQgmAAgZgVg");
	this.shape_13.setTransform(1476.1,307.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#297688").s().p("ABCBmIAAidIg/BNIgEAAIg/hNIAACdIgeAAIAAjLIAcAAIBCBUIBEhUIAbAAIAADLg");
	this.shape_14.setTransform(1453.8,307.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#297688").s().p("AhOBLQgegeAAgtQAAgrAegeQAggeAugBQAvABAfAeQAgAdgBAsQAAAtgfAeQggAdguABQgvgBgfgdgAg3g2QgXAWAAAgQAAAiAXAVQAWAXAhAAQAigBAWgWQAXgXABggQgBgfgXgXQgWgWgiABQghAAgWAVg");
	this.shape_15.setTransform(1429.8,307.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#297688").s().p("Ag7BmIAAjLIAdAAIAACwIBaAAIAAAbg");
	this.shape_16.setTransform(1639.1,266.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#297688").s().p("ABFBnIgbg9IhVAAIgZA9IgfAAIBYjMIATAAIBbDMgAgfAQIA+AAIgghIg");
	this.shape_17.setTransform(1620.8,266.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#297688").s().p("AgOBmIAAixIhGAAIAAgaICpAAIAAAaIhHAAIAACxg");
	this.shape_18.setTransform(1596.4,266.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#297688").s().p("Ag+BSQgIgGgFgIQgFgJgEgLQgDgMAAgYIAAhyIAeAAIAAByQAAAdAGALQAHAMANAGQAOAHARAAQAZAAARgNQAIgIAEgKQAEgKAAgYIAAhyIAeAAIAAByQAAAYgEAMQgEALgFAJQgEAIgIAGQgYAVgnAAQgmAAgYgVg");
	this.shape_19.setTransform(1576.7,266.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#297688").s().p("AhbBmICBixIh5AAIAAgaICvAAIiBCxICBAAIAAAag");
	this.shape_20.setTransform(1556.3,266.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#297688").s().p("ABGBnIgbg9IhWAAIgaA9IgdAAIBXjMIATAAIBcDMgAggAQIA+AAIgehIg");
	this.shape_21.setTransform(1536.7,266.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#297688").s().p("AgBBmIhYjLIAdAAIA8CNIA9iNIAdAAIhWDLg");
	this.shape_22.setTransform(1520,266.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#297688").s().p("Ag6BlIAAjKIByAAIAAAaIhVAAIAAA/IBSAAIAAAYIhSAAIAAA/IBYAAIAAAag");
	this.shape_23.setTransform(1504.2,266.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#297688").s().p("ABFBmIiHicIAACcIgbAAIAAjLIAXAAICICdIAAidIAcAAIAADLg");
	this.shape_24.setTransform(1484.4,266.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#297688").s().p("Ag7BmIAAjLIAdAAIAACwIBaAAIAAAbg");
	this.shape_25.setTransform(1457.9,266.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#297688").s().p("Ag/BSQgHgGgFgIQgFgJgDgLQgDgMAAgYIAAhyIAdAAIAAByQAAAdAHALQAGAMAOAGQANAHARAAQAaAAAQgNQAJgIADgKQAEgKAAgYIAAhyIAdAAIAAByQAAAYgDAMQgEALgEAJQgGAIgHAGQgYAVgnAAQgnAAgYgVg");
	this.shape_26.setTransform(1439,266.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#297688").s().p("AgNBmIAAixIhHAAIAAgaICpAAIAAAaIhHAAIAACxg");
	this.shape_27.setTransform(1419.3,266.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#297688").s().p("ABFBmIiHicIAACcIgbAAIAAjLIAXAAICICdIAAidIAcAAIAADLg");
	this.shape_28.setTransform(1398.7,266.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#297688").s().p("AgNBmIAAjLIAbAAIAADLg");
	this.shape_29.setTransform(1383.1,266.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#297688").s().p("AAsBmIgJgOIgCgCIgGgIIgJgPIgKgQQgIgNgGgHQgIgIgGgDQgGgDgOAAIgIAAIAABZIgdAAIAAjLIAzAAQAdAAASAPQASAQAAAaQAAASgIANQgJANgRAEQAKAHAJALQAJALARAcIASAaIAKAPgAgwgLIALAAQAWAAAJgEQAGgEAFgIQAEgHAAgKQAAgKgFgIQgEgIgIgDQgKgDgVAAIgJAAg");
	this.shape_30.setTransform(1371.5,266.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#297688").s().p("AgNBmIAAjLIAbAAIAADLg");
	this.shape_31.setTransform(1357.5,266.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#297688").s().p("AhEBmIAAjLIA1AAQAXAAAOAHQAPAHAIAMQAHAMAAAPQAAAeggANQAXAFANAMQANAOAAAUQAAAQgHAMQgJAMgPAIQgPAIgXAAgAgnBMIAcAAQAWAAAJgEQAJgEAFgIQAFgIAAgJQAAgJgFgIQgFgIgLgDQgKgEgUAAIgbAAgAgngNIATAAQAWAAAJgJQALgJgBgOQAAgegjAAIgZAAg");
	this.shape_32.setTransform(1346.1,266.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#297688").s().p("ABFBnIgag9IhWAAIgaA9IgdAAIBXjMIATAAIBcDMgAggAQIA+AAIgehIg");
	this.shape_33.setTransform(1326.9,266.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#297688").s().p("Ag7BmIAAjLIAdAAIAACwIBaAAIAAAbg");
	this.shape_34.setTransform(1310.5,266.7);

	this.text_1 = new cjs.Text("LABIRINTUL NEVAZUT AL OMULUI", "30px 'Gill Sans MT'", "#66D0ED");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 41;
	this.text_1.lineWidth = 386;
	this.text_1.setTransform(1473.8,249);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.text_1}]},24).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(24).to({_off:false},0).wait(1).to({x:1464,y:205.9},0).wait(1).to({x:1439.6,y:167.8},0).wait(1).to({x:1408.1,y:135.3},0).wait(1).to({x:1372.5,y:108.9},0).wait(1).to({x:1334,y:87.7},0).wait(1).to({x:1293.2,y:71.3},0).wait(1).to({x:1251.3,y:59.5},0).wait(1).to({x:1213.9,y:53.6},0).wait(1).to({x:1166.8,y:56.9},0).wait(1).to({x:1124,y:62.7},0).wait(1).to({x:1082.7,y:70.5},0).wait(1).to({x:1042.1,y:80.6},0).wait(1).to({x:1006.5,y:96.6},0).wait(1).to({x:972.6,y:123},0).wait(1).to({x:942.7,y:150.5},0).wait(1).to({x:914.7,y:179.8},0).wait(1).to({x:888.8,y:210.6},0).wait(1).to({x:865.1,y:242.5},0).wait(1).to({x:843.7,y:275.6},0).wait(1).to({x:825,y:309.8},0).wait(1).to({x:807.6,y:343.4},0).wait(1).to({x:785.9,y:375.8},0).wait(1).to({x:761.9,y:405.7},0).wait(1).to({x:736.3,y:433.4},0).wait(1).to({x:709.1,y:459},0).wait(1).to({x:680.1,y:482.1},0).wait(1).to({x:649.4,y:502.2},0).wait(1).to({x:616.8,y:518.3},0).wait(1).to({x:582.4,y:528.9},0).wait(1).to({x:551.9,y:531.8},0).wait(1).to({x:512.8,y:529.1},0).wait(1).to({x:477.4,y:525.2},0).wait(1).to({x:442.9,y:520.3},0).wait(1).to({x:409.1,y:514.3},0).wait(1).to({x:375.9,y:507.1},0).wait(1).to({x:346.3,y:499.2},0).wait(1).to({x:310.7,y:488.9},0).wait(1).to({x:285.9,y:478.2},0).wait(1).to({x:280.6,y:442.5},0).wait(1).to({y:409.7},0).wait(1).to({x:282.1,y:377.6},0).wait(1).to({x:284.3,y:346.1},0).wait(1).to({x:287.2,y:314.8},0).wait(1).to({x:290.6,y:283.5},0).wait(1).to({x:295,y:250.6},0).wait(1).to({x:296.7,y:241.3},0).wait(36));

	// background
	this.text_2 = new cjs.Text("", "17px 'FranklinGothic-Heavy'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 33;
	this.text_2.lineWidth = 340;
	this.text_2.setTransform(273.7,244.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#024160","#000000"],[0.004,1],-227.1,-46.4,0,-227.1,-46.4,830.2).s().p("EhfkA2zMAAAhtlMC/JAAAMAAABtlg");
	this.shape_35.setTransform(634,3.8,1.04,0.865,0,0,0,-1.9,-346.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.text_2}]}).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(529.9,212.6,1786.3,931.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;