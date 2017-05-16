(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 960,
	height: 560,
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



(lib.Tween116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6EBEB").s().p("APwUPQgZAAgjgFIg5gIQkzgnixjsQhGhcglhtQgihfAAhQIAAsTQAAibhthMQhLg0hxgKQh1AKhLA0QhtBMAACbIAAMTQAABcgcBkQgjB6hEBgQi3D+lpAAI6JAAQgYAAgkgFIhAgKQkFgli4iRQjkizAAkVIAC0gQAAhdAwhqQAyhvBXhcQDRjeEiAAMArnAAxMArpgAxQEiAADQDeQBYBcAxBvQAwBqAABdIACUlQAAE8kiC4QhzBJiRAnQiBAkh2AAgAgQqtQDpASCMCRQCLCPABDfIAAMTQAAAsAaA/QAeBNA3A/QB/CVDrAMQAHABAMgDQANgCAGAAIaJAAQBXAABbgWQBzgbBYg3QBdg6Amg9QAvhJAAhhIgC0gQAAgpgbg9QgghKg8hAQg7g9hFglQhcgwhoAAMgrtAAwMgrngAwQhoAAhdAwQhGAlg5A9Qg9BAggBKQgcA9AAApIgBUfQAABgAvBKQArBEBYA3QAdASA9AaQBJAfBVAOQBDAMBCAAIaJAAQB8AABXgjQBagkA2hLQAtg9AYhLQAVhCAAg4IAAsTQABjfCKiPQCLiRDsgSIAPgCg");
	this.shape.setTransform(72.9,33.2,0.028,0.028);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8E0E2").s().p("AmqQZMALOggvICGgCMgLOAgxg");
	this.shape_1.setTransform(78.8,33.2,0.028,0.028);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8E0E2").s().p("AmjQXMALMggrIB7gCMgLNAgtg");
	this.shape_2.setTransform(78.2,33.2,0.028,0.028);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D8E0E2").s().p("AoVQUMALIggiIFjgGMgLLAgpg");
	this.shape_3.setTransform(77.2,33.2,0.028,0.028);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArQQXMALQggtIEUABQBoABBcAwQBGAlA6A9QA8A/AhBLQAbA8AAAqIABUeQAABgguBJQgqBChaA4QhXA3h0AbQhbAVhWABg");
	this.shape_4.setTransform(80,33.1,0.028,0.028);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AIcNuQg2hAgfhOQgahBAAgrIAAsUQgBjeiLiQQiLiQjpgTIgPgCIgSACQjrATiMCQQiKCQgBDeIAAMUQAAA4gVBBQgYBMgtA9Qg2BLhaAkQhXAjh8AAIodAAMAMyggNILhASIaOgeMgLNAgjQjmgNiCiXg");
	this.shape_5.setTransform(73.1,33.2,0.028,0.028);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmgQVMALLggkIB2gFMgLMAgpg");
	this.shape_6.setTransform(77.8,33.1,0.028,0.028);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmZQXMALNggoIBmgFMgLOAgtg");
	this.shape_7.setTransform(78.5,33.1,0.028,0.028);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8E0E2").s().p("AosQMMAMxggXIEoAFMgMvAgSg");
	this.shape_8.setTransform(69.2,33.2,0.028,0.028);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8E0E2").s().p("ApdQWQg9AAhIgOQhTgRhKggIMj/sIPcARMgM0Agag");
	this.shape_9.setTransform(67,33.2,0.028,0.028);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AnkQLMAMyggVICXAAMgMxAgVg");
	this.shape_10.setTransform(68.6,33.2,0.028,0.028);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlkPOQhXg2gshHQgvhKAAhgIAB0gQAAgpAcg9QAghKA9hAQA5g9BGglQBdgwBoAAIJvALIshfsQgwgUgqgag");
	this.shape_11.setTransform(65.2,33.1,0.028,0.028);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C6277").s().p("ABqJUQiJgfidioQhwh4huiwIhXiXIBjooIC3BdQDXB2CdB9QH8GOj4FEQhxCTiJAAQgeAAgfgHg");
	this.shape_12.setTransform(83.8,35.5,0.028,0.028);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C6277").s().p("AmhHIQiIiyBgjOQBOijDeivQCdh9DXh2IC3hdIBjIoIhXCXQhuCwhwB4QidCoiJAfQgfAHgdAAQiKAAhxiTg");
	this.shape_13.setTransform(62.5,35.5,0.028,0.028);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BEE4EB").s().p("AkgM9IAA55IJBAAIAAZ5g");
	this.shape_14.setTransform(0.4,31.6,0.049,0.049);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#91D0D6").s().p("Ak/M9QixAAh/h+Qh+h+AAiyIAAzLIXaAAIAAZ5g");
	this.shape_15.setTransform(-4.7,31.6,0.049,0.049);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#91D0D6").s().p("AkOM9IAA55IITAAQAKAtAAAqIAAWEQAAApgKAqQgIAlgTAmg");
	this.shape_16.setTransform(3.1,31.6,0.049,0.049);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BEE4EB").s().p("AwyOhQiUgBhphoQhphpAAiUIAA2EQAAgtALgqIEPAAIAATLQAACyB+B+QB+B+CyAAMAhpAAAQgtBahUA2QhYA3hoABg");
	this.shape_17.setTransform(-2.7,32.1,0.049,0.049);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E6EBEB").s().p("APADzI7zAAQg8AAgsgmQgugoAAg6IAAlGQAAgFADgIIADgNIb5AAQA7AAAsAqQAtAqAAA7IAAFGQAAAJgGANg");
	this.shape_18.setTransform(-2.8,23.5,0.049,0.049);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D8E0E2").s().p("AN9EYIAAlGQAAg7gqgpQgqgqg7AAI70AAQAJgyAnghQAogiA0AAIbyAAQA7AAAqAqQAqApgBA7IAAFGQABA7gqApQgoAqg6ABQACgOAAgMg");
	this.shape_19.setTransform(-2.4,23.2,0.049,0.049);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6EBEB").s().p("AkgDOIAAmbIJBAAIAAGbg");
	this.shape_20.setTransform(0.4,26.5,0.049,0.049);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8E0E2").s().p("ArtDOIAAmbIXaAAIAAGbg");
	this.shape_21.setTransform(-4.7,26.5,0.049,0.049);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D8E0E2").s().p("ADZQLQASglAJgmQAKgpAAgqIAA2EQAAgqgLgsIoTAAIAAmdICUAAQCwAAB+B+QB+B+AACyIAAZng");
	this.shape_22.setTransform(3.2,30.6,0.049,0.049);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6EBEB").s().p("AT5RaIAA5nQAAiyh+h+Qh+h+izAAMgiwAAAIAAg7QAAgzAMgwMAkTAAAQCyAAB+B+QB+B+AACyIAAahQAAA0gMAwg");
	this.shape_23.setTransform(-1.6,30.2,0.049,0.049);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E6EBEB").s().p("AyHT/QiyABh+h/Qh+h+AAiyIAA6hQAAizB+h+QB+h9CygBIAJAAQgNAxAAAzIAAHXIkPAAQgLAqAAAtIAAWEQAACUBqBpQBoBoCUABMAiLAAAQBogBBXg3QBVg2AshaICqAAQgiCPhzBdQh2BeiXAAg");
	this.shape_24.setTransform(-2.7,31,0.049,0.049);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCC8C6").s().p("AhpAyQgVAAgPgPQgPgPAAgUQAAgUAPgOQAPgPAVAAIEGAAIAABjg");
	this.shape_25.setTransform(-64.5,31.9,0.028,0.028);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCC8C6").s().p("AhpAyQgVAAgPgPQgPgPAAgUQAAgUAPgOQAPgPAVAAIEGAAIAABjg");
	this.shape_26.setTransform(-64.5,30,0.028,0.028);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCC8C6").s().p("AhpAyQgVAAgPgPQgPgPAAgUQAAgUAPgOQAPgPAVAAIEGAAIAABjg");
	this.shape_27.setTransform(-64.5,28,0.028,0.028);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCC8C6").s().p("AhpAyQgVAAgPgPQgPgPAAgUQAAgUAPgOQAPgPAVAAIEGAAIAABjg");
	this.shape_28.setTransform(-64.5,26,0.028,0.028);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCC8C6").s().p("AguAyQgVAAgPgPQgPgPAAgUQAAgUAPgOQAPgPAVAAICQAAIAABjg");
	this.shape_29.setTransform(-64.7,24,0.028,0.028);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIB0AAIAABjg");
	this.shape_30.setTransform(-64.3,24,0.028,0.028);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DAD7D5").s().p("AguAyQgVAAgPgOQgPgQAAgUQAAgUAPgOQAPgPAVgBICQAAIAABkg");
	this.shape_31.setTransform(-64.7,22.1,0.028,0.028);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCC8C6").s().p("Ag5AyIAAhkIB0AAIAABkg");
	this.shape_32.setTransform(-64.3,22.1,0.028,0.028);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DAD7D5").s().p("AguAyQgVABgPgQQgPgPAAgUQAAgTAPgQQAPgPAVABICQAAIAABjg");
	this.shape_33.setTransform(-64.7,20.1,0.028,0.028);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIB0AAIAABjg");
	this.shape_34.setTransform(-64.3,20.1,0.028,0.028);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DAD7D5").s().p("AguAzQgVgBgPgPQgPgOAAgVQAAgTAPgQQAPgOAVAAICQAAIAABkg");
	this.shape_35.setTransform(-64.7,18.1,0.028,0.028);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCC8C6").s().p("Ag5AzIAAhkIB0AAIAABkg");
	this.shape_36.setTransform(-64.3,18.1,0.028,0.028);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DAD7D5").s().p("AifAyQgVAAgPgOQgOgQAAgUQAAgUAOgOQAPgPAVgBIFyAAIAABkg");
	this.shape_37.setTransform(-65,23,0.028,0.028);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CCC8C6").s().p("Ag5AyIAAhkIB0AAIAABkg");
	this.shape_38.setTransform(-64.3,23,0.028,0.028);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCC8C6").s().p("AifAyQgVAAgPgPQgOgPAAgUQAAgUAOgOQAPgPAVAAIFyAAIAABjg");
	this.shape_39.setTransform(-65,25,0.028,0.028);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIB0AAIAABjg");
	this.shape_40.setTransform(-64.3,25,0.028,0.028);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DAD7D5").s().p("AifAyQgVABgPgPQgOgQAAgUQAAgTAOgPQAPgQAVABIFyAAIAABjg");
	this.shape_41.setTransform(-65,21.1,0.028,0.028);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIB0AAIAABjg");
	this.shape_42.setTransform(-64.3,21.1,0.028,0.028);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DAD7D5").s().p("AifAzQgVgBgPgPQgOgOAAgVQAAgUAOgPQAPgOAVAAIFyAAIAABkg");
	this.shape_43.setTransform(-65,19.1,0.028,0.028);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CCC8C6").s().p("Ag5AzIAAhkIB0AAIAABkg");
	this.shape_44.setTransform(-64.3,19.1,0.028,0.028);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DAD7D5").s().p("AifAyQgVAAgPgOQgOgPAAgVQAAgTAOgPQAPgPAVAAIFyAAIAABjg");
	this.shape_45.setTransform(-65,17.1,0.028,0.028);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIB0AAIAABjg");
	this.shape_46.setTransform(-64.3,17.1,0.028,0.028);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BEE4EB").s().p("EgE9ggNIJ7AAIAABiIiSAAQgVgBgOAPQgPAPAAAVQAAAVAPAPQAOAPAVAAICSAAIAAD2IlxAAQgVAAgPAPQgPAPAAAUQAAAWAPAPQAPAOAVABIFxAAMAAAAsoQAAFjk+DaQieBsifAmg");
	this.shape_47.setTransform(-65.3,29.5,0.028,0.028);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E6EBEB").s().p("Ak9UDMAAAgoGIJ7AAIAADoIlxAAQgVAAgPAPQgPAQAAAUQAAAWAPAOQAPAPAVAAIFxAAIAAD2IiSAAQgVAAgOAPQgPAPAAAVQAAAVAPAPQAOAPAVAAICSAAIAAD2IlxAAQgVAAgPAOQgPAPAAAVQAAAWAPAOQAPAPAVABIFxAAIAAD1IiSAAQgVAAgOANQgPAPAAAVQAAAVAPAPQAOAPAVAAICSAAIAAD2IlxAAQgVgBgPAQQgPAPAAAUQAAAVAPAQQAPAPAVgBIFxAAIAAD2IiSAAQgVAAgOAPQgPAPAAAVQAAAVAPAPQAOAPAVAAICSAAIAAD1IlxAAQgVABgPAPQgPAOAAAWQAAAUAPAQQAPAOAVAAIFxAAIAACVg");
	this.shape_48.setTransform(-65.3,20,0.028,0.028);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#91D0D6").s().p("Aktf1QiMg6hrhsQhshsg7iLQg9iRAAieMAAAg1bIMdAAMAAABAaQCggmCfhsQE/jaAAljMAAAgsoIB2AAMAAAAs4QAACeg9CRQg7CLhsBsQhrBsiMA6QiQA9ieAAQidAAiQg9g");
	this.shape_49.setTransform(-66.3,29.6,0.028,0.028);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#91D0D6").s().p("Ag5AwIAAhfIB0AAIAABfg");
	this.shape_50.setTransform(-64.3,23.8,0.028,0.028);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#91D0D6").s().p("Ag5B7IAAj0IB0AAIAAD0g");
	this.shape_51.setTransform(-64.3,24.5,0.028,0.028);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CCC8C6").s().p("AjaAyQgVAAgPgPQgOgPAAgUQAAgUAOgOQAPgPAVAAIHoAAIAABjg");
	this.shape_52.setTransform(-64.9,32.9,0.028,0.028);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CCC8C6").s().p("AjaAyQgVAAgPgPQgOgPAAgUQAAgUAOgOQAPgPAVAAIHoAAIAABjg");
	this.shape_53.setTransform(-64.9,31,0.028,0.028);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CCC8C6").s().p("AjaAyQgVAAgPgPQgOgPAAgUQAAgUAOgOQAPgPAVAAIHoAAIAABjg");
	this.shape_54.setTransform(-64.9,29,0.028,0.028);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CCC8C6").s().p("AjaAyQgVAAgPgPQgOgPAAgUQAAgUAOgOQAPgPAVAAIHoAAIAABjg");
	this.shape_55.setTransform(-64.9,27,0.028,0.028);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DAD7D5").s().p("Ak9ArIAAhVIJ7AAIAABVg");
	this.shape_56.setTransform(-65.3,16.2,0.028,0.028);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E6EBEB").s().p("AmZCHIAAkNILDAAIARADQAVAFASAJQA4AdAAA8QAAA5gzAbQgZANgZACIgWAAIg8ALIAAA1g");
	this.shape_57.setTransform(-65.1,15.7,0.028,0.028);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CCC8C6").s().p("Ag5AtIAAhWIBTAAQASAAAPgDIAABZg");
	this.shape_58.setTransform(-64.3,16.2,0.028,0.028);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CCC8C6").s().p("AmOAtIAAhZQAPADASAAIL8AAIAABWg");
	this.shape_59.setTransform(-67.4,16.2,0.028,0.028);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D8E0E2").s().p("AsIVPMAAAgqdIYRAAMAAAAqdg");
	this.shape_60.setTransform(-66.3,20.2,0.028,0.028);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D8E0E2").s().p("ArnCrQgSgBgPgDQg0gLgjgrQgigqAAg3IAAgfQAAhAAtgtQAtgtBAAAIXPAAQBAAAAtAtQAtAtAABAIAAAfQAAA3giAqQgjArg0ALQgPADgSABg");
	this.shape_61.setTransform(-66.3,15.6,0.028,0.028);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#41485F").s().p("AkhKwQiGg5hnhnQhohog5iGQg6iKAAiYQAAiWA6iLQA5iGBohnQBnhoCGg5QCLg6CWAAQCYAACKA6QCGA5BnBoQBoBnA4CGQA7CLAACWQAACYg7CKQg4CGhoBoQhnBniGA5QiKA6iYAAQiWAAiLg6g");
	this.shape_62.setTransform(36.9,16.2,0.029,0.029);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#808288").s().p("AnVRaQjZhcininQioiohcjZQhfjgAAj2QAAj0BfjhQBcjZCoinQCnioDZhcQDhhfD0AAQD2AADgBfQDZBcCoCoQCnCnBcDZQBfDhAAD0QAAD2hfDgQhcDZinCoQioCnjZBcQjgBfj2AAQj0AAjhhfg");
	this.shape_63.setTransform(36.9,16.2,0.029,0.029);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#41485F").s().p("AkhKwQiGg5hnhoQhohng5iGQg6iLAAiXQAAiXA6iKQA5iGBohnQBnhoCGg5QCLg6CWAAQCYAACKA6QCGA5BnBoQBoBnA4CGQA7CKAACXQAACXg7CLQg4CGhoBnQhnBoiGA5QiKA6iYAAQiWAAiLg6g");
	this.shape_64.setTransform(36.9,-7.4,0.029,0.029);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#808288").s().p("AnVRaQjZhcininQioiohcjZQhfjhAAj1QAAj1BfjgQBcjZCoioQCninDZhcQDhhfD0AAQD2AADgBfQDZBcCoCnQCnCoBcDZQBfDgAAD1QAAD1hfDhQhcDZinCoQioCnjZBcQjgBfj2AAQj0AAjhhfg");
	this.shape_65.setTransform(36.9,-7.4,0.029,0.029);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#41485F").s().p("AlbFcQiRiQABjMQgBjLCRiQQCQiQDLAAQDLAACRCQQCRCQAADLQAADMiRCQQiRCQjLAAQjLAAiQiQg");
	this.shape_66.setTransform(36.9,-24.9,0.029,0.029);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#808288").s().p("AoaT7Qj4hpjAi/Qi/jAhpj5QhtkBAAkZQAAkZBtkAQBpj5C/jAQDAi/D4hpQEChtEYAAQEZAAEBBtQD5BpDAC/QC/DABpD5QBtEAAAEZQAAEZhtEBQhpD5i/DAQjAC/j5BpQkBBtkZAAQkYAAkChtg");
	this.shape_67.setTransform(36.9,-24.9,0.029,0.029);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#808288").s().p("EguAAHBQADi0BHikQBIijCCh9QCBh+CphFQCthHC9AAMA+/AAAQC9AACrBHQCmBFB/B+QB/B9BFCjQBGCjADC1g");
	this.shape_68.setTransform(30.1,31.6,0.028,0.028);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#41485F").s().p("AgLEnIAApNIAXAAIAAJNg");
	this.shape_69.setTransform(36.9,6.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#41485F").s().p("EhSkAHRQAAi9BJiuQBHikCAiBQCAiBCnhHQCthJC9AAMCH8AAAQC9AACuBJQCpBHCCCBQCDCBBICkQBLCuAAC9g");
	this.shape_70.setTransform(26.4,34.2,0.028,0.028);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#41485F").s().p("ArRHHQi5gBiDiDQiEiEAAi5IAAgMQAAi5CEiEQCDiCC5AAIWiAAQC5AACECCQCDCEAAC5IAAAMQAAC5iDCEQiECDi5ABg");
	this.shape_71.setTransform(12.4,-7.1,0.029,0.029);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EF6077").s().p("AkNEOQhwhwAAieQAAidBwhwQBwhwCdAAQCeAABwBwQBwBwAACdQAACehwBwQhwBwieAAQidAAhwhwgAizizQhLBLAABoQAABpBLBLQBLBLBoAAQBpAABLhLQBLhLAAhpQAAhohLhLQhKhLhqAAQhoAAhLBLg");
	this.shape_72.setTransform(12.4,-0.4,0.028,0.028);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EF6077").s().p("AkOEOQhwhwAAieQAAidBwhwQBxhwCdAAQCeAABxBwQBvBwAACdQAACehvBwQhxBwieAAQidAAhxhwgAizizQhLBLAABoQAABpBLBLQBLBLBoAAQBqAABKhLQBLhLAAhpQAAhohLhLQhKhLhqAAQhoAAhLBLg");
	this.shape_73.setTransform(5.3,-2.5,0.028,0.028);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E52D42").s().p("AjzEAQjSjdAAkxQAAg5AJg+QBHgzBTgaQBWgcBaAAQDrAACmCnQCnCnAADqQAAB7gyBvQgwBrhYBQQktgSjSjdg");
	this.shape_74.setTransform(9.8,-2.8,0.028,0.028);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EF6077").s().p("Ak1FeQimimAAjrQAAiOBBh8QA/h4BvhPQgJA+AAA5QAAEzDTDbQDPDdEwASQhOBGhhAnQhlAohtAAQjpAAioing");
	this.shape_75.setTransform(9.2,-2.4,0.028,0.028);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E52D42").s().p("AiqCNQiNimAAjaIAAgZQBohKB/AAQChgBBzB0QB0BzAAChQAABWgkBOQgiBMg/A2QjRgmiMikg");
	this.shape_76.setTransform(9.2,-12.6,0.028,0.028);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EF6077").s().p("AjSDxQh0h0AAihQAAhgAthWQArhSBLg3IAAAZQAADaCNCmQCJCkDUAmQg1AwhCAZQhEAahKAAQihAAhzhyg");
	this.shape_77.setTransform(8.8,-12.3,0.028,0.028);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFF7F5").s().p("AkgEhQh4h4AAipQAAioB4h4QB4h4CoAAQCpAAB4B4QB4B4AACoQAACph4B4Qh4B4ipAAQioAAh4h4gAi+i+QhQBQAABuQAABwBQBPQBPBQBvAAQBvAABQhQQBPhPAAhwQAAhuhPhQQhQhPhvAAQhvAAhPBPg");
	this.shape_78.setTransform(4.5,5.4,0.028,0.028);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFF7F5").s().p("Ak1E2QiBiBAAi1QAAi1CBiAQCBiBC0AAQC1AACBCBQCBCAAAC1QAAC2iBCAQiBCBi1AAQi0AAiBiBg");
	this.shape_79.setTransform(8.5,8.7,0.028,0.028);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EF6077").s().p("AOmbiQqkiroTksQq9mKmIpHQncrCAAu/IAAgBQAAhzAJh6QDLi6EXhPQGNhxHqB+QguDxgBD4IAAALQABKZFMJ7QENIDHhHeQFkFiG5ExQEBCxDZB0IhXAEQmOgnmohrg");
	this.shape_80.setTransform(5.1,6.2,0.028,0.028);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#91D0D6").s().p("AEyXyQqBjinhmoQnqmwkHpJQkUpnAArUIACgcQABg/ADhLQApgxA3gzQgKB6AAB0IAAAAQAAO/HcLCQGIJHK9GKQIUEsKjCrQGoBrGPAnIibAEQrhAAqIjlg");
	this.shape_81.setTransform(4.8,6.6,0.028,0.028);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E52D42").s().p("AvRYsQm6kxlkliQngnekPoDQlNp7AAqZIAAgLQAAj4AujxQA5AOAnAMQECBNETCBQDfBnEMCaQB2BEFjDWQEZCrClBXQHsEGFhAQQHJAVIeiAQJQiLHPkMQgoOxksKEQjWHLlAEHQhjBGheA3IhJAqIBMgkQBeg0BghPQIomAFxoGQIrsKAAuYIAAgPQgBhegGhNQA/hGA6hTQAQChABCjIACAdQAAK1kIJUQj7I2nVGuQnJGjplDzQpmDzq4AlQjYh0kBixg");
	this.shape_82.setTransform(11.8,6.3,0.028,0.028);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E6EBEB").s().p("Ag2gBIBVgEIAYALQgogChFgFg");
	this.shape_83.setTransform(10.3,11.6,0.028,0.028);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E6EAE9").s().p("Ag7ApQBcg1BkhGQhgBPhdAyIhMAkg");
	this.shape_84.setTransform(15,10,0.028,0.028);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E6EBEB").s().p("AzxaEQFzn4JjmBQGzkUIAi8QEBhfCpgnMAAAgqZQidAGidgXQk7gsAAiKQgHhWAThXQAnitCKAAIR3AAMAAAA0jQh3A0i3BpQltDSlBEHQnBFxkqGoQlyIShvJLQnqh+mNBxQkXBPjLC6QA+sMHRp2g");
	this.shape_85.setTransform(5,-7.1,0.028,0.028);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D8E0E2").s().p("EAMWA5RQlkgRnqkFQikhYkaiqQljjWh2hEQkMiajehoQkUiAkBhNQgogMg4gPQBvpKF0oSQEpmoHClxQFBkIFtjPQC1hpB2g0MAAAg0lIx0AAQiKAAgnCtQgUBWAIBXQAACJE7AtQCdAWCdgFMAAAAqbQipAnkBBeQoAC7m1ETQpjGCl0H3QnQJ2g+MMQg3AzgoAxQAbpSDgoAQDVnqF+mIQFxl6H3kHQHtkBJMiBMAAAgpzIjqAAQiNAAhlhlQhkhkAAiOQAAiOBkhkQBkhlCOAAIfQAAQCOAABkBlQBkBkAACOQAACOhkBkQhkBliOAAIjpAAMAAAApzQI0B8HeDyQHnD3FtFjQF4FvDhHLQDqHeA4IsQg6BTg+BHQgupjlaopQklnVnkmKQmUlJnOjdQmQi9j/gdIBaAfQBzArB6A5QGIC9FIEZQHKGIEHIGQFJKHADMoIAAAPQAACVgGCMQnPELpPCMQnUBumTAAQhBAAg/gDg");
	this.shape_86.setTransform(9.7,-5.8,0.028,0.028);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E6EBEB").s().p("ALzVCIAAgOQgDsplJqFQkHoGnJmIQlHkYmIi9Qh7g7hygrIhaggQD+AeGQC/QHODdGSFJQHlGJElHWQFZInAuJjQhMBXheBUQi5CkjwCMQAGiMAAiWg");
	this.shape_87.setTransform(15.7,-1.5,0.028,0.028);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EF6077").s().p("AjLKfQEqqGAouuQDwiMC5ikQBehUBNhXQAFBMACBfIAAAOQgBOYoqMKQlwIGonGAQE/kHDWnLg");
	this.shape_88.setTransform(17.5,5.8,0.028,0.028);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B2B5BB").s().p("AgPGsQhqgPhBhWIkcl8IH2l5IG4JKIkpDeQhHA1hTAAQgTAAgRgDg");
	this.shape_89.setTransform(-18,12.5,0.028,0.028);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#959BA9").s().p("AlxBiQhAhVAPhoQAQhqBWhAIEpjeIG5JPIn2F4g");
	this.shape_90.setTransform(-19.1,11,0.028,0.028);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B2B5BB").s().p("AizF4IkljjIHBpDIHwGBIkjF3QhBBVhqAOQgQACgRAAQhWAAhHg3g");
	this.shape_91.setTransform(-35.1,12.6,0.028,0.028);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#959BA9").s().p("AmmBkIHCpIIEmDjQBVBCAOBpQAOBohCBWIkmF9g");
	this.shape_92.setTransform(-34,11.1,0.028,0.028);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B2B5BB").s().p("AifHpQilAAh4h1Qh4h2AAilIAApCIRpAAIAAPSg");
	this.shape_93.setTransform(-28.5,6.3,0.028,0.028);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#959BA9").s().p("ApHHpIAAvSISQAAIAAJCQgBCkh8B3Qh7B1imAAg");
	this.shape_94.setTransform(-25.2,6.3,0.028,0.028);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#91D0D6").s().p("AlHFJQiJiJAAjAQAAi/CJiIQCIiJC/AAQDAAACJCJQCICIAAC/QAADBiICIQiICIjBAAQi/AAiIiIgAjajaQhbBbAAB/QAACABbBbQBbBbB/AAQCAAABbhbQBbhbAAiAQAAh/hbhbQhbhbiAAAQh/AAhbBbg");
	this.shape_95.setTransform(-23.3,21.8,0.028,0.028);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#91D0D6").s().p("AlHFIQiJiIAAjAQAAi/CJiJQCIiIC/AAQDAAACICIQCJCJAAC/QAADAiJCIQiICJjAAAQi/AAiIiJgAjajaQhbBbAAB/QAACABbBbQBbBbB/AAQCAAABbhbQBbhbAAiAQAAh/hbhbQhbhbiAAAQh/AAhbBbg");
	this.shape_96.setTransform(-31.9,19.2,0.028,0.028);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#91D0D6").s().p("AgQICQifhKh4iAQh6iAhBiiQhFinAAi3QAAhMALhFQBXg9BkghQBogiBuAAQEdAADLDLQDLDLAAEdQAACVg9CHQg6CDhrBhQi1gLihhNg");
	this.shape_97.setTransform(-26.5,18.9,0.028,0.028);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A5DADD").s().p("Al3GpQjLjLgBkdQAAirBQiXQBOiSCHhhQgMBGAABMQAAC3BFCoQBCCgB6CAQB2CACfBLQCjBNC0ALQheBWh1AuQh7AxiFAAQkcgBjLjLg");
	this.shape_98.setTransform(-27.2,19.3,0.028,0.028);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFF7F5").s().p("AleFgQiTiSAAjOQAAjNCTiSQCRiSDNAAQDNAACTCSQCSCSgBDNQABDOiSCSQiTCRjNABQjNgBiRiRgAjnjnQhhBgAACHQAACHBhBhQBhBhCGAAQCHAABihhQBghhAAiHQAAiHhghgQhihhiHAAQiGAAhhBhg");
	this.shape_99.setTransform(-32.9,28.9,0.028,0.028);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFF7F5").s().p("Al4F5QidicAAjdQAAjcCdicQCcidDcAAQDdAACcCdQCdCcAADcQAADdidCcQicCdjdAAQjcAAicidg");
	this.shape_100.setTransform(-28,32.9,0.028,0.028);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BEE4EB").s().p("EARvAheQs0jQqHlsQtUnfncrFQpDtbAAyNIAAgBQAAiXALiJQD3jiFThgQHiiKJUCZQg4EqgBEpIAAANQAAMoGUMEQFIJzJIJEQGxGvIZFyQE3DXEICOIhpAFQnlgwoDiCg");
	this.shape_101.setTransform(-32.2,29.8,0.028,0.028);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#91D0D6").s().p("AF0c7QsMkTpIoEQpToNlBrJQlPrqAAtwQADgXAAgMQAChVADhSQAzg+BBg7QgLCJAACXIAAABQAASNJDNbQHcLFNUHfQKGFsM1DQQIDCCHlAwQhKAChIABIgrABQt/AAsUkVg");
	this.shape_102.setTransform(-32.5,30.3,0.028,0.028);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#91D0D6").s().p("AykeAQoZlzmxmuQpIpFlJpyQmVsEAAsoIABgNQAAkpA4kqQAxAMBEAUQE5BfFPCbQEPB/FFC6QCPBSGwEFQFWDPDIBqQEgCaDoBQQEOBdDtALQIsAZKTibQLPipIzlFQgxR7lsMPQkEIumFFAQh5BVhxBDQg5AiggARQAigMA5gfQBzg/B1hhQKfnSHBp3QKiuyAAxcIAAgTQAAhigIhtQBPhbBChgQAUDGACDEIABASIACAQQAANLlBLUQkyKxo6ILQorH9rpEoQrrEotOAsQkIiOk3jXg");
	this.shape_103.setTransform(-24,29.9,0.028,0.028);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E6EBEB").s().p("AhCgCIBngEIAeANQgxgChUgHg");
	this.shape_104.setTransform(-25.9,36.4,0.028,0.028);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E6EAE9").s().p("AhHAyQBvhBB5hVQh1BhhxA8Qg5AggiAMQAggRA5gig");
	this.shape_105.setTransform(-20.2,34.4,0.028,0.028);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#BEE4EB").s().p("Aj3MvQFrsRAwx5QEkiqDhjIQBwhkBfhrQAIBtAABiIAAATQABRcqjOyQm/J3qfHSQGGlAEDoug");
	this.shape_106.setTransform(-17.1,29.3,0.028,0.028);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E6EBEB").s().p("AlD2tQi/AGi/gbQl+g2AAinQgKhpAYhpQAwjTCnAAIedAAMAAAA/4I2GCRg");
	this.shape_107.setTransform(-29.2,9,0.028,0.028);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E6EBEB").s().p("A4DAuQHEpiLnnVQIRlOJvjmQE4hyDNgwINWCAIhkAvQiABAiKBPQm8D/mGFAQojHBlpIBQnCKEiHLJQpUiZniCKQlTBgj3DiQBLu0I0r+g");
	this.shape_108.setTransform(-32.3,19.3,0.028,0.028);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D8E0E2").s().p("EAH1AkgQjvgLkMhdQjohQkgiaQjIhqlWjPQmwkFiPhSQlFi7kPh+QlPick5heQhEgUgxgMQCHrJHEqCQFqoEIinAQGGlAG8j/QCLhQCAg/IBjgwIL6BKIBtAmQCLA0CVBIQHdDmGOFVQItHdE/J1QGQMRAEPWIAAASQAACvgHCwQozFGrPCpQo4CFnqAAQhQAAhNgDg");
	this.shape_109.setTransform(-25.2,21.3,0.028,0.028);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D8E0E2").s().p("AgjgkIBGATIAAA2g");
	this.shape_110.setTransform(-23.1,14.4,0.028,0.028);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D8E0E2").s().p("AiaBOIAdjhQBXATB5AgIBIBLIAAAVIgLCTQiug3h8gOg");
	this.shape_111.setTransform(-23.5,14.6,0.028,0.028);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E6EBEB").s().p("AAGCaQiLg6h+gnIAKiSIAAhPQD/BGD/BhIjdCqg");
	this.shape_112.setTransform(-22.3,14.9,0.028,0.028);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D8E0E2").s().p("AOhIWQj8nsmsm0Qlwl7nWk1QmWkLmaitIDdisQRGGkKeMgQLHNNBzRxQhCBghPBbQgupbkeoug");
	this.shape_113.setTransform(-18.2,19.7,0.028,0.028);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D8E0E2").s().p("ABhEGIkJkVIFRkJIAAIxg");
	this.shape_114.setTransform(-23.5,13.6,0.028,0.028);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D8E0E2").s().p("AEYd9MAAAg/3I+dAAQingBgwDTQgYBpAKBpQAACnF+A2QC/AbC/gGMAAAAn8IjbiqMAAAgk7IkcAAQisAAh6h6Qh6h6AAisQAAiuB6h5QB6h6CsAAMAzLAAAQCsAAB6B6QB6B5AACuQAACsh6B6Qh6B6isAAIkbAAMAAAArEIlUEJIEMEXQh8gghWgTIgdDjQB7AOCxA3IgTEDg");
	this.shape_115.setTransform(-26.9,9.2,0.028,0.028);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E6EBEB").s().p("AgQgKIAhAMIgMAJg");
	this.shape_116.setTransform(-22.3,15.3,0.028,0.028);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E6EBEB").s().p("AyAQQIAAozIWVxYQhNhcg8hqQh5jSBThBIAggaQAngeAngSQB6g5BBBTILxPHI8AV0Qj/hhkBhGg");
	this.shape_117.setTransform(-19.8,11.4,0.028,0.028);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D8E0E2").s().p("AhsACIAAitIDZCqIAACtg");
	this.shape_118.setTransform(-30.4,12.1,0.028,0.028);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D8E0E2").s().p("AmUBnQFCi2FniLICABjQlfCYk2C6g");
	this.shape_119.setTransform(-32.2,15.5,0.028,0.028);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D8E0E2").s().p("AnRkeQHtsCNdnwICUBzQsTHUngJvQpkMUhOPeQhBA8gzA9QAwwEILsrg");
	this.shape_120.setTransform(-35.9,20.2,0.028,0.028);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D8E0E2").s().p("Ar3HrIhuCMQhDBVhrAOQhsANhVhCQhWhDgNhsQgNhrBChWITx5WQBBhVBrgOQBsgNBVBDQBWBCANBsQAOBshDBVIhuCNIQeM0IAACtIx+t+QBNhcA9hpQB5jThThAQgxgtg9gdQh7g6hABTIrwPIIcBVzQlpCLlCC5g");
	this.shape_121.setTransform(-34.6,11.7,0.028,0.028);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D8E0E2").s().p("AjXgjIAAivIGvFPIhyBWg");
	this.shape_122.setTransform(-29.5,12.7,0.028,0.028);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D8E0E2").s().p("AggDqIlekOQE4i6FdiaIBoBSIjMKfg");
	this.shape_123.setTransform(-31.8,16.2,0.028,0.028);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E6EBEB").s().p("AOVZlIAAgTQgEvWmPsQQlAp2orncQmOlVndjmQiUhIiMg0IhtgmQE1AkHmDoQIyENHoGPQJNHfFlI6QGkKfA4LmQhfBshwBjQjhDIkkCqQAHiwAAivg");
	this.shape_124.setTransform(-19.3,20.5,0.028,0.028);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E6EBEB").s().p("A0pkXILxvIQBBhTB6A6QA+AdAwAtQBTBAh5DTQg8BphNBcIboVhIpqKGg");
	this.shape_125.setTransform(-32.7,11.7,0.028,0.028);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D8E0E2").s().p("Av2PvIfp4oIrxvIQhBhTh6A6QgnASglAeIggAaQhTBAB4DTQA7BpBNBcI6VUgIhyhVIan0uIhriNQhDhVANhsQAOhsBVhCQBUhDBrANQBsAOBDBVITwZWQBDBWgNBrQgOBshVBDQhWBChrgNQhsgOhDhVIhtiMI6TUgIjVCOg");
	this.shape_126.setTransform(-19.3,12.5,0.028,0.028);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4F576C").s().p("AifVKQilAAh4h1Qh4h2AAilIAA9oQAAimB4h6QB4h7ClgBILUAAMAAAAqUg");
	this.shape_127.setTransform(-28.5,3.8,0.028,0.028);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#41485F").s().p("ApHVKMAAAgqUILyAAQClABB8B7QB8B7ABClIAAdoQgBCkh8B3Qh7B1imAAg");
	this.shape_128.setTransform(-25.2,3.8,0.028,0.028);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4F576C").s().p("ADQLMIvJrsQhVhCgNhpQgNhpBBhVIEjl5IViQnIkjF5QhBBVhqAOQgSACgRAAQhWAAhHg3g");
	this.shape_129.setTransform(-36.3,11.6,0.028,0.028);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#41485F").s().p("AtfkiIEnl9QBChVBpgOQBpgOBVBBIPKLtQBVBBANBqQAOBqhBBVIknF+g");
	this.shape_130.setTransform(-35.3,10.3,0.028,0.028);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4F576C").s().p("AmaL5QhqgPhAhWIkdl9IVywSIEdF9QBBBWgPBpQgPBphWBAIvVLeQhHA0hTAAQgSAAgUgDg");
	this.shape_131.setTransform(-16.8,11.6,0.028,0.028);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#41485F").s().p("AsvF9QhAhWAPhpQAQhrBWg/IPVreQBWhABpAPQBpAPBABXIEhGCI1yQSg");
	this.shape_132.setTransform(-17.8,10.2,0.028,0.028);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#4F576C").s().p("Eg/HADhIAAnBMB+OAAAIAAHBg");
	this.shape_133.setTransform(25.7,-7.2,0.029,0.029);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D8E0E2").s().p("EhmEBSZMAAAh+IQAAq8CZnUQBSj4B/jCQB+jDCxiVQE/kNH1h8QH0h9L4gBMCKxAAAQGbAAEWBlQEVBkCpDTQCeDEBJE0QBKEzgBHUMAAAA7nIi7AAMAAAg7nQAAmog7kSQg/kiiMiuQiPiyjyhSQjuhRlvAAMiKxAAAQrAAAnOBqQnwByktD+Qk3EEiSG5QiSG4AAKeMAAAB+Ig");
	this.shape_134.setTransform(-8.8,-14,0.028,0.028);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E6EBEB").s().p("EhjNBQ7MAAAh+IQAAqeCSm4QCSm5E3kEQEtj+HwhyQHOhqLBAAMCKwAAAQFvAADuBRQDyBSCPCyQCMCuA/EjQA7ERAAGoMAAAA7nIi0AAMAAAg7nQAAmQg2j8Qg1j9h1iQQhyiOjMhCQjMhClGAAMiKwAAAQqzAAm8BoQm8BokJDgQkSDniDGZQiCGYAAJxMAAAB+Ig");
	this.shape_135.setTransform(-8.8,-13.7,0.028,0.028);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E6EBEB").s().p("EhRlAvLMAAAhFHQAAogAukYQA2lECNinQCQipEdhFQEDg9HogBMAvSAAAQHLAAFWAsQFlAuEcBiQEdBjD6CkQDwCeDxDyQHpG4U1UnQMLMDOtOzIh4B2QqhqusAr+Q363+oonwIgGgCQjljljmiXQjtibkQhbQkQhdlUgqQlIgpm7AAMgvSAAAQnVAAjwA2Qj0A3hxCFQh7CQgvEzQgpEHAAHzMAAABFHg");
	this.shape_136.setTransform(-51.8,5.5,0.028,0.028);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D8E0E2").s().p("EhTjAwTMAAAhFGQgBo6A1koQA/ldCljDQCvjOFQhPQEThAH8AAMAvSAAAQHkAAFiAuQFqAuEkBlQEpBnECCnQEBCnECEBQItH2X+X/QMBMAKhKuIhfBeQuPuWspsfQ000nnqm5QjxjyjwieQj6ikkdhiQkchjllgtQlWgsnLAAMgvSAAAQnoAAkDA+QkdBDiQCqQiOCng2FEQguEYAAIgMAAABFGg");
	this.shape_137.setTransform(-51.8,5.3,0.028,0.028);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#41485F").s().p("ArRHGQi5AAiDiDQiEiEAAi5IAAgMQAAi5CEiEQCDiDC5AAIWiAAQC5AACECDQCECEAAC5IAAAMQAAC5iECEQiECDi5AAg");
	this.shape_138.setTransform(56.4,16.3,0.029,0.029);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4F576C").s().p("EgxWADgIAAnAMBitAAAIAAHAg");
	this.shape_139.setTransform(46,16.2,0.029,0.029);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#CCC8C6").s().p("AhpAyQgUAAgPgPQgPgPAAgUQAAgTAPgPQAPgPAUAAIEFAAIAABjg");
	this.shape_140.setTransform(54.5,20,0.028,0.028);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#CCC8C6").s().p("AhpAyQgUAAgPgPQgPgOAAgVQAAgUAPgOQAPgPAUAAIEFAAIAABjg");
	this.shape_141.setTransform(54.5,18,0.028,0.028);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CCC8C6").s().p("AhpAyQgUAAgPgOQgPgQAAgUQAAgUAPgOQAPgPAUAAIEFAAIAABjg");
	this.shape_142.setTransform(54.5,16,0.028,0.028);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#CCC8C6").s().p("AhpAyQgUAAgPgPQgPgOAAgVQAAgUAPgOQAPgPAUAAIEFAAIAABjg");
	this.shape_143.setTransform(54.5,14.1,0.028,0.028);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CCC8C6").s().p("AguAyQgUAAgQgOQgOgQgBgUQABgTAOgPQAQgPAUAAICPAAIAABjg");
	this.shape_144.setTransform(54.4,12.1,0.028,0.028);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_145.setTransform(54.8,12.1,0.028,0.028);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#DAD7D5").s().p("AguAyQgUAAgQgPQgOgPgBgUQABgUAOgOQAQgPAUAAICPAAIAABjg");
	this.shape_146.setTransform(54.4,10.1,0.028,0.028);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_147.setTransform(54.8,10.1,0.028,0.028);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#DAD7D5").s().p("AguAyQgUAAgQgOQgOgPgBgVQABgTAOgPQAQgPAUAAICPAAIAABjg");
	this.shape_148.setTransform(54.4,8.2,0.028,0.028);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_149.setTransform(54.8,8.2,0.028,0.028);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#DAD7D5").s().p("AguAyQgUAAgQgPQgOgPgBgUQABgTAOgPQAQgPAUAAICPAAIAABjg");
	this.shape_150.setTransform(54.4,6.2,0.028,0.028);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_151.setTransform(54.8,6.2,0.028,0.028);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#DAD7D5").s().p("AieAyQgVAAgPgPQgPgPAAgUQAAgTAPgPQAPgPAVAAIFvAAIAABjg");
	this.shape_152.setTransform(54,11.1,0.028,0.028);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_153.setTransform(54.8,11.1,0.028,0.028);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CCC8C6").s().p("AieAyQgVAAgPgPQgPgPAAgUQAAgTAPgPQAPgPAVAAIFvAAIAABjg");
	this.shape_154.setTransform(54,13.1,0.028,0.028);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_155.setTransform(54.8,13.1,0.028,0.028);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DAD7D5").s().p("AieAyQgVAAgPgOQgPgQAAgUQAAgUAPgOQAPgPAVAAIFvAAIAABjg");
	this.shape_156.setTransform(54,9.2,0.028,0.028);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_157.setTransform(54.8,9.2,0.028,0.028);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#DAD7D5").s().p("AieAyQgVAAgPgPQgPgOAAgVQAAgTAPgPQAPgPAVAAIFvAAIAABjg");
	this.shape_158.setTransform(54,7.2,0.028,0.028);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_159.setTransform(54.8,7.2,0.028,0.028);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#DAD7D5").s().p("AieAyQgVAAgPgOQgPgQAAgUQAAgUAPgOQAPgPAVAAIFvAAIAABjg");
	this.shape_160.setTransform(54,5.2,0.028,0.028);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_161.setTransform(54.8,5.2,0.028,0.028);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F7C384").s().p("EgE8ggCIJ5AAIAABgIiSAAQgUAAgPAPQgPAPAAAVQAAAVAPAPQAPAPAUAAICSAAIAAD0IlwAAQgVAAgOAPQgPAPAAAVQAAAUAPAPQAOAPAVAAIFwAAMAAAAsaQAAFhk9DYQhiBEh3AvIhjAgg");
	this.shape_162.setTransform(53.7,17.5,0.028,0.028);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E6EBEB").s().p("Ak8T9MAAAgn5IJ5AAIAADnIlwAAQgVAAgOAPQgPAPAAAVQAAAVAPAPQAOAOAVAAIFwAAIAAD1IiSAAQgUAAgPAPQgPAPAAAUQAAAVAPAPQAPAPAUAAICSAAIAAD1IlwAAQgVAAgOAPQgPAOAAAVQAAAVAPAPQAOAPAVAAIFwAAIAAD0IiSAAQgUAAgPANQgPAPAAAVQAAAVAPAPQAPAOAUAAICSAAIAAD1IlwAAQgVAAgOAPQgPAPAAAVQAAAVAPAPQAOAOAVAAIFwAAIAAD1IiSAAQgUAAgPAPQgPAOAAAVQAAAVAPAPQAPAPAUAAICSAAIAAD1IlwAAQgVAAgOAPQgPAOAAAVQAAAVAPAPQAOAPAVAAIFwAAIAACUg");
	this.shape_163.setTransform(53.7,8.1,0.028,0.028);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F0A940").s().p("AkrfrQiLg7hrhrQhrhrg7iLQg9iPAAieMAAAg1JIMZAAMAAABAFIBjggQB3guBkhEQE9jZAAlgMAAAgsaIB1AAMAAAAspQAACeg9CPQg7CLhrBrQhrBriKA7QiQA9idAAQicAAiPg9g");
	this.shape_164.setTransform(52.8,17.6,0.028,0.028);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F0A940").s().p("Ag5AwIAAhfIBzAAIAABfg");
	this.shape_165.setTransform(54.8,11.8,0.028,0.028);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F0A940").s().p("Ag5B6IAAjzIBzAAIAADzg");
	this.shape_166.setTransform(54.8,12.6,0.028,0.028);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CCC8C6").s().p("AjYAyQgVAAgPgPQgPgPAAgUQAAgUAPgOQAPgPAVAAIHkAAIAABjg");
	this.shape_167.setTransform(54.2,21,0.028,0.028);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CCC8C6").s().p("AjYAyQgVAAgPgPQgPgPAAgUQAAgTAPgPQAPgPAVAAIHkAAIAABjg");
	this.shape_168.setTransform(54.2,19,0.028,0.028);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#CCC8C6").s().p("AjYAyQgVAAgPgPQgPgPAAgUQAAgTAPgPQAPgPAVAAIHkAAIAABjg");
	this.shape_169.setTransform(54.2,17,0.028,0.028);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#CCC8C6").s().p("AjYAyQgVAAgPgPQgPgPAAgUQAAgTAPgPQAPgPAVAAIHkAAIAABjg");
	this.shape_170.setTransform(54.2,15.1,0.028,0.028);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#DAD7D5").s().p("Ak8ArIAAhVIJ5AAIAABVg");
	this.shape_171.setTransform(53.7,4.3,0.028,0.028);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E6EBEB").s().p("AmXCHIAAkNILAAAIARADQAVAGARAJQA4AdAAA7QgBA6gyAaQgPAIgTAEIgQACIgVAAIg8ALIAAA2g");
	this.shape_172.setTransform(54,3.8,0.028,0.028);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#CCC8C6").s().p("Ag5AtIAAhVIBSAAQAOAAATgEIAABZg");
	this.shape_173.setTransform(54.8,4.3,0.028,0.028);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#CCC8C6").s().p("AmMAtIAAhZQATADAOAAIL4AAIAABWg");
	this.shape_174.setTransform(51.7,4.3,0.028,0.028);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#D8E0E2").s().p("AsEVHMAAAgqOIYJAAMAAAAqOg");
	this.shape_175.setTransform(52.8,8.3,0.028,0.028);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D8E0E2").s().p("ArjCqQgOAAgTgEQg0gLgigqQgjgqAAg4IAAgeQAAg/AtguQAugsA/AAIXHAAQBAAAAtAsQAtAuAAA/IAAAeQAAA4gjAqQgiAqg0ALQgTAEgOAAg");
	this.shape_176.setTransform(52.8,3.7,0.028,0.028);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#D8E0E2").s().p("EBzHBw2MAAAi6tQAAr7hrmvQh0nTkXj4QkWj4oEhkQnUhbtGAAMildAAAQmXAAkaBEQkkBIi4CYQi7CbhaD4QhZD5AAFoMAAABidIicAAMAAAhidQAAmIBpkYQBpkWDViwQDKimE1hPQE0hOG9gBMCldAAAQG5AAFBAWQFIAWD1AwQEdA3DSBdQDRBdCeCNQFBEdB+IWQBnGzAAL+MAAAC6tg");
	this.shape_177.setTransform(31.7,-16.7,0.028,0.028);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E6EBEB").s().p("EBwbBvoMAAAi6mQgBrzhlmZQhnmbjzjYQjyjYnKhZQnGhZtJAAMildAAAQmHAAkDA7QkIA+ieCCQihCEhMDYQhODZABFFMAAABiYIiNAAMAAAhiYQAAlpBZj3QBZj5C6iaQC4iXEjhHQEZhFGXABMCldAAAQNGgBHWBcQIGBjEXD3QEaD4B1HSQBsGwAAL6MAAAC6mg");
	this.shape_178.setTransform(31.7,-16.5,0.028,0.028);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#41485F").s().p("Eg2DAC+QhOgBg4g4Qg4g3ABhOIAAAAQgBhOA4g3QA4g4BOAAMBsHAAAQBOAAA4A4QA4A3AABOIAAAAQAABOg4A3Qg4A4hOABg");
	this.shape_179.setTransform(-87.9,35.5,0.047,0.047);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#41485F").s().p("EgyNABuQgsgBgegfQgggfAAgsIAAgGQAAgsAggeQAegfAsgBMBkaAAAQAsABAgAfQAeAeAAAsIAAAGQAAAsgeAfQggAfgsABg");
	this.shape_180.setTransform(-87.9,14.5,0.047,0.047);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#808288").s().p("EgB8AkpMAAAhJQID4AAMAAABJQg");
	this.shape_181.setTransform(-73.8,23.9,0.047,0.047);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#808288").s().p("EgB8AkpMAAAhJQID5AAMAAABJQg");
	this.shape_182.setTransform(-102.1,23.9,0.047,0.047);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#CCC8C6").s().p("AhCAfQgNAAgKgJQgJgJAAgNQAAgMAJgJQAKgJANAAICmAAIAAA9g");
	this.shape_183.setTransform(-92.5,30,0.047,0.047);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CCC8C6").s().p("AhCAgQgNgBgKgJQgJgJAAgNQAAgMAJgJQAKgJANAAICmAAIAAA+g");
	this.shape_184.setTransform(-92.5,27.9,0.047,0.047);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#CCC8C6").s().p("AhCAfQgNABgKgKQgJgJAAgNQAAgLAJgKQAKgKANAAICmAAIAAA+g");
	this.shape_185.setTransform(-92.5,25.9,0.047,0.047);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CCC8C6").s().p("AhCAgQgNAAgKgKQgJgKAAgMQAAgMAJgJQAKgKANABICmAAIAAA+g");
	this.shape_186.setTransform(-92.5,23.8,0.047,0.047);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#CCC8C6").s().p("AgcAfQgOABgKgKQgJgJAAgNQAAgMAJgJQAKgKAOAAIBaAAIAAA+g");
	this.shape_187.setTransform(-92.6,21.8,0.047,0.047);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CCC8C6").s().p("AgkAfIAAg+IBJAAIAAA+g");
	this.shape_188.setTransform(-92.2,21.8,0.047,0.047);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#DAD7D5").s().p("AgcAfQgOAAgKgJQgJgJAAgNQAAgMAJgJQAKgJAOAAIBaAAIAAA9g");
	this.shape_189.setTransform(-92.6,19.8,0.047,0.047);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#CCC8C6").s().p("AgkAfIAAg9IBJAAIAAA9g");
	this.shape_190.setTransform(-92.2,19.8,0.047,0.047);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#DAD7D5").s().p("AgcAgQgOAAgKgKQgJgKAAgMQAAgMAJgJQAKgKAOAAIBaAAIAAA/g");
	this.shape_191.setTransform(-92.6,17.7,0.047,0.047);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_192.setTransform(-92.2,17.7,0.047,0.047);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#DAD7D5").s().p("AgcAfQgOAAgKgJQgJgKAAgMQAAgMAJgJQAKgJAOAAIBaAAIAAA9g");
	this.shape_193.setTransform(-92.6,15.7,0.047,0.047);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#CCC8C6").s().p("AgkAfIAAg9IBJAAIAAA9g");
	this.shape_194.setTransform(-92.2,15.7,0.047,0.047);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#DAD7D5").s().p("AhlAfQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAIDrAAIAAA9g");
	this.shape_195.setTransform(-93,20.8,0.047,0.047);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#CCC8C6").s().p("AgkAfIAAg9IBJAAIAAA9g");
	this.shape_196.setTransform(-92.2,20.8,0.047,0.047);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#CCC8C6").s().p("AhlAgQgNgBgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAIDrAAIAAA+g");
	this.shape_197.setTransform(-93,22.8,0.047,0.047);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CCC8C6").s().p("AgkAgIAAg+IBJAAIAAA+g");
	this.shape_198.setTransform(-92.2,22.8,0.047,0.047);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#DAD7D5").s().p("AhlAfQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAIDrAAIAAA9g");
	this.shape_199.setTransform(-93,18.7,0.047,0.047);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#CCC8C6").s().p("AgkAfIAAg9IBJAAIAAA9g");
	this.shape_200.setTransform(-92.2,18.7,0.047,0.047);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#DAD7D5").s().p("AhlAfQgNABgJgKQgJgJAAgNQAAgMAJgJQAJgJANAAIDrAAIAAA9g");
	this.shape_201.setTransform(-93,16.7,0.047,0.047);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#CCC8C6").s().p("AgkAfIAAg9IBJAAIAAA9g");
	this.shape_202.setTransform(-92.2,16.7,0.047,0.047);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#DAD7D5").s().p("AhlAfQgNAAgJgJQgJgKAAgMQAAgMAJgJQAJgKANAAIDrAAIAAA+g");
	this.shape_203.setTransform(-93,14.6,0.047,0.047);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#CCC8C6").s().p("AgkAfIAAg+IBJAAIAAA+g");
	this.shape_204.setTransform(-92.2,14.6,0.047,0.047);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EF6077").s().p("AjJ0PIGTAAIAAA9IhcAAQgOAAgKAJQgJAKAAANQAAANAJAKQAKAJAOAAIBcAAIAACaIjqAAQgOAAgJAKQgJAJAAANQAAANAJAKQAJAJAOAAIDqAAIAAcDQAADfjKCJQhkBFhlAYg");
	this.shape_205.setTransform(-93.3,27.4,0.047,0.047);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E6EBEB").s().p("AjJMnIAA5NIGTAAIAACSIjqAAQgOAAgJAKQgJAJAAANQAAANAJAKQAJAJAOAAIDqAAIAACbIhcAAQgOAAgKAJQgJAKAAANQAAANAJAJQAKAKAOAAIBcAAIAACaIjqAAQgOAAgJAKQgJAJAAANQAAANAJAKQAJAJAOAAIDqAAIAACbIhcAAQgOAAgKAHQgJAJAAAOQAAANAJAJQAKAKAOAAIBcAAIAACaIjqAAQgOAAgJAKQgJAJAAANQAAANAJAKQAJAJAOAAIDqAAIAACbIhcAAQgOAAgKAJQgJAJAAANQAAAOAJAJQAKAJAOAAIBcAAIAACbIjqAAQgOAAgJAJQgJAKAAANQAAANAJAKQAJAJAOAAIDqAAIAABeg");
	this.shape_206.setTransform(-93.3,17.6,0.047,0.047);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#E52D42").s().p("AlcSYQiRiPAAjLMAAAghkIH7AAMAAAAofQBlgYBlhFQDLiJAAjfIAA8DIBLAAIAAcNQAADLiRCPQiRCPjMAAQjLAAiRiPg");
	this.shape_207.setTransform(-94.3,27.5,0.047,0.047);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#E52D42").s().p("AgkAeIAAg7IBJAAIAAA7g");
	this.shape_208.setTransform(-92.2,21.5,0.047,0.047);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#E52D42").s().p("AgkBNIAAiZIBJAAIAACZg");
	this.shape_209.setTransform(-92.2,22.3,0.047,0.047);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#CCC8C6").s().p("AiKAfQgOAAgJgJQgJgJAAgNQAAgMAJgJQAJgJAOAAIE1AAIAAA9g");
	this.shape_210.setTransform(-92.8,31,0.047,0.047);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#CCC8C6").s().p("AiKAfQgOAAgJgJQgJgJAAgNQAAgMAJgJQAJgJAOAAIE1AAIAAA9g");
	this.shape_211.setTransform(-92.8,28.9,0.047,0.047);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#CCC8C6").s().p("AiKAfQgOAAgJgJQgJgKAAgMQAAgMAJgJQAJgJAOAAIE1AAIAAA9g");
	this.shape_212.setTransform(-92.8,26.9,0.047,0.047);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#CCC8C6").s().p("AiKAfQgOAAgJgJQgJgKAAgMQAAgLAJgKQAJgKAOAAIE1AAIAAA+g");
	this.shape_213.setTransform(-92.8,24.9,0.047,0.047);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#DAD7D5").s().p("AjJAbIAAg1IGTAAIAAA1g");
	this.shape_214.setTransform(-93.3,13.7,0.047,0.047);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E6EBEB").s().p("AkDBVIAAipIHAAAIAjALQAkASAAAmQAAAkggAQQgQAIgQABIgOAAIgmAHIAAAig");
	this.shape_215.setTransform(-93,13.2,0.047,0.047);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#CCC8C6").s().p("AgkAcIAAg1IA0AAQAJAAAMgCIAAA3g");
	this.shape_216.setTransform(-92.2,13.7,0.047,0.047);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#CCC8C6").s().p("Aj9AcIAAg3QAMACAKAAIHlAAIAAA1g");
	this.shape_217.setTransform(-95.4,13.7,0.047,0.047);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#D8E0E2").s().p("AntNWIAA6rIPbAAIAAarg");
	this.shape_218.setTransform(-94.3,17.8,0.047,0.047);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#D8E0E2").s().p("AnXBrQgKAAgLgDQgigHgWgaQgWgbAAgiIAAgTQAAgoAdgdQAdgcApAAIOwAAQApAAAcAcQAdAdAAAoIAAATQAAAigWAbQgWAaghAHQgMADgJAAg");
	this.shape_219.setTransform(-94.3,13.1,0.047,0.047);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#CCC8C6").s().p("AhCAgQgNAAgKgKQgKgJABgNQgBgMAKgJQAKgKANAAICmAAIAAA/g");
	this.shape_220.setTransform(-79.7,29.9,0.047,0.047);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#CCC8C6").s().p("AhCAgQgNAAgKgKQgKgJABgNQgBgMAKgJQAKgKANAAICmAAIAAA/g");
	this.shape_221.setTransform(-79.7,27.9,0.047,0.047);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#CCC8C6").s().p("AhCAgQgNAAgKgKQgKgJABgNQgBgMAKgJQAKgKANAAICmAAIAAA/g");
	this.shape_222.setTransform(-79.7,25.8,0.047,0.047);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#CCC8C6").s().p("AhCAgQgNAAgKgKQgKgJABgNQgBgMAKgJQAKgKANAAICmAAIAAA/g");
	this.shape_223.setTransform(-79.7,23.7,0.047,0.047);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#CCC8C6").s().p("AgcAgQgOAAgKgKQgJgJAAgNQAAgMAJgJQAKgKAOAAIBaAAIAAA/g");
	this.shape_224.setTransform(-79.9,21.7,0.047,0.047);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_225.setTransform(-79.4,21.7,0.047,0.047);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#DAD7D5").s().p("AgcAgQgOAAgKgKQgJgJAAgNQAAgMAJgJQAKgKAOAAIBaAAIAAA/g");
	this.shape_226.setTransform(-79.9,19.6,0.047,0.047);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_227.setTransform(-79.4,19.6,0.047,0.047);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#DAD7D5").s().p("AgcAgQgOAAgKgKQgJgJAAgNQAAgMAJgJQAKgKAOAAIBaAAIAAA/g");
	this.shape_228.setTransform(-79.9,17.5,0.047,0.047);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_229.setTransform(-79.4,17.5,0.047,0.047);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#DAD7D5").s().p("AgcAgQgOAAgKgKQgJgJAAgNQAAgMAJgJQAKgKAOAAIBaAAIAAA/g");
	this.shape_230.setTransform(-79.9,15.5,0.047,0.047);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_231.setTransform(-79.4,15.5,0.047,0.047);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#DAD7D5").s().p("AhlAgQgNAAgJgKQgKgJABgNQgBgMAKgJQAJgKANAAIDqAAIAAA/g");
	this.shape_232.setTransform(-80.2,20.6,0.047,0.047);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_233.setTransform(-79.4,20.6,0.047,0.047);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#CCC8C6").s().p("AhlAgQgNAAgJgKQgKgJABgNQgBgMAKgJQAJgKANAAIDqAAIAAA/g");
	this.shape_234.setTransform(-80.2,22.7,0.047,0.047);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_235.setTransform(-79.4,22.7,0.047,0.047);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#DAD7D5").s().p("AhlAgQgNAAgJgKQgKgJABgNQgBgMAKgJQAJgKANAAIDqAAIAAA/g");
	this.shape_236.setTransform(-80.2,18.6,0.047,0.047);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_237.setTransform(-79.4,18.6,0.047,0.047);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#DAD7D5").s().p("AhlAgQgNAAgJgJQgKgKABgNQgBgMAKgJQAJgKANAAIDqAAIAAA/g");
	this.shape_238.setTransform(-80.2,16.5,0.047,0.047);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_239.setTransform(-79.4,16.5,0.047,0.047);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#DAD7D5").s().p("AhlAgQgNAAgJgKQgKgJABgNQgBgMAKgJQAJgKANAAIDqAAIAAA/g");
	this.shape_240.setTransform(-80.2,14.4,0.047,0.047);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_241.setTransform(-79.4,14.4,0.047,0.047);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#BEE4EB").s().p("AjJ0dIGTAAIAAA9IhcAAQgOAAgKAKQgJAJAAAOQAAANAJAJQAKAKAOAAIBcAAIAACdIjqAAQgNAAgKAJQgJAJAAAOQAAANAJAJQAKAKANAAIDqAAIAAcXQAADhjKCKQhjBGhmAYg");
	this.shape_242.setTransform(-80.5,27.4,0.047,0.047);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#E6EBEB").s().p("AjJMvIAA5dIGTAAIAACTIjqAAQgNAAgKAJQgJAKAAAOQAAAMAJAKQAKAJANAAIDqAAIAACdIhcAAQgOAAgKAKQgJAJAAANQAAAOAJAJQAKAKAOAAIBcAAIAACbIjqAAQgNAAgKAKQgJAJAAAOQAAANAJAKQAKAJANAAIDqAAIAACdIhcAAQgOAAgKAHQgJAKAAANQAAANAJAKQAKAJAOAAIBcAAIAACcIjqAAQgNAAgKAKQgJAJAAAOQAAANAJAJQAKAKANAAIDqAAIAACdIhcAAQgOAAgKAJQgJAJAAANQAAAOAJAKQAKAJAOAAIBcAAIAACcIjqAAQgNAAgKAKQgJAJAAANQAAAOAJAJQAKAKANAAIDqAAIAABeg");
	this.shape_243.setTransform(-80.5,17.4,0.047,0.047);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#91D0D6").s().p("AlcSlQiRiRAAjMMAAAgh9IH6AAMAAAAo7QBmgXBlhGQDKiLAAjhIAA8WIBMAAIAAchQgBDMiQCRQiRCQjMABQjLAAiRiRg");
	this.shape_244.setTransform(-81.5,27.5,0.047,0.047);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#91D0D6").s().p("AgkAeIAAg7IBJAAIAAA7g");
	this.shape_245.setTransform(-79.4,21.4,0.047,0.047);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#91D0D6").s().p("AgkBOIAAibIBJAAIAACbg");
	this.shape_246.setTransform(-79.4,22.2,0.047,0.047);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#CCC8C6").s().p("AiKAgQgNAAgKgKQgJgJAAgNQAAgMAJgJQAKgKANAAIE1AAIAAA/g");
	this.shape_247.setTransform(-80,31,0.047,0.047);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#CCC8C6").s().p("AiKAgQgNAAgKgJQgJgKAAgNQAAgMAJgJQAKgKANAAIE1AAIAAA/g");
	this.shape_248.setTransform(-80,28.9,0.047,0.047);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#CCC8C6").s().p("AiKAgQgNAAgKgKQgJgJAAgNQAAgMAJgJQAKgKANAAIE1AAIAAA/g");
	this.shape_249.setTransform(-80,26.8,0.047,0.047);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#CCC8C6").s().p("AiKAgQgNAAgKgKQgJgJAAgNQAAgMAJgKQAKgJANAAIE1AAIAAA/g");
	this.shape_250.setTransform(-80,24.8,0.047,0.047);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#DAD7D5").s().p("AjJAcIAAg3IGTAAIAAA3g");
	this.shape_251.setTransform(-80.5,13.5,0.047,0.047);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E6EBEB").s().p("AkDBWIAAirIHAAAIAkALQAjATAAAmQAAAkggAQQgQAJgQABIgOAAIgmAHIAAAig");
	this.shape_252.setTransform(-80.2,12.9,0.047,0.047);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#CCC8C6").s().p("AgkAdIAAg3IA0AAIAVgCIAAA5g");
	this.shape_253.setTransform(-79.4,13.5,0.047,0.047);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#CCC8C6").s().p("Aj9AdIAAg5QAOACAHAAIHlAAIAAA3g");
	this.shape_254.setTransform(-82.7,13.5,0.047,0.047);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#D8E0E2").s().p("AntNfIAA69IPbAAIAAa9g");
	this.shape_255.setTransform(-81.5,17.6,0.047,0.047);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#D8E0E2").s().p("AnXBsQgIAAgNgCQgigHgWgbQgWgbAAgjIAAgTQAAgpAdgcQAdgdApAAIOwAAQApAAAcAdQAdAcAAApIAAATQAAAjgWAbQgWAbghAHIgVACg");
	this.shape_256.setTransform(-81.5,12.8,0.047,0.047);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#CCC8C6").s().p("AhIAjQgPAAgLgLQgKgKAAgOQAAgNAKgLQALgKAPAAIC1AAIAABFg");
	this.shape_257.setTransform(-85.6,29.6,0.047,0.047);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#CCC8C6").s().p("AhIAjQgPAAgLgLQgKgKAAgOQAAgNAKgLQALgKAPAAIC1AAIAABFg");
	this.shape_258.setTransform(-85.6,27.3,0.047,0.047);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#CCC8C6").s().p("AhIAjQgPAAgLgKQgKgLAAgOQAAgNAKgLQALgKAPAAIC1AAIAABFg");
	this.shape_259.setTransform(-85.6,25,0.047,0.047);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#CCC8C6").s().p("AhIAjQgPAAgLgKQgKgLAAgOQAAgNAKgKQALgLAPAAIC1AAIAABFg");
	this.shape_260.setTransform(-85.6,22.8,0.047,0.047);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#CCC8C6").s().p("AgfAjQgPAAgLgLQgKgKAAgOQAAgNAKgKQALgLAPAAIBjAAIAABFg");
	this.shape_261.setTransform(-85.8,20.5,0.047,0.047);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_262.setTransform(-85.3,20.5,0.047,0.047);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#DAD7D5").s().p("AgfAjQgPAAgLgKQgKgLAAgOQAAgNAKgLQALgKAPAAIBjAAIAABFg");
	this.shape_263.setTransform(-85.8,18.2,0.047,0.047);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_264.setTransform(-85.3,18.2,0.047,0.047);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#DAD7D5").s().p("AgfAjQgPAAgLgLQgKgKAAgOQAAgNAKgLQALgKAPAAIBjAAIAABFg");
	this.shape_265.setTransform(-85.8,16,0.047,0.047);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_266.setTransform(-85.3,16,0.047,0.047);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#DAD7D5").s().p("AgfAjQgPAAgLgKQgKgLAAgOQAAgNAKgKQALgLAPAAIBjAAIAABFg");
	this.shape_267.setTransform(-85.8,13.7,0.047,0.047);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_268.setTransform(-85.3,13.7,0.047,0.047);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#DAD7D5").s().p("AhuAjQgPAAgLgKQgKgLAAgOQAAgNAKgKQALgLAPAAIEBAAIAABFg");
	this.shape_269.setTransform(-86.2,19.4,0.047,0.047);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_270.setTransform(-85.3,19.4,0.047,0.047);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#CCC8C6").s().p("AhuAjQgPAAgLgLQgKgKAAgOQAAgNAKgKQALgLAPAAIEBAAIAABFg");
	this.shape_271.setTransform(-86.2,21.6,0.047,0.047);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_272.setTransform(-85.3,21.6,0.047,0.047);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#DAD7D5").s().p("AhuAjQgPAAgLgLQgKgKAAgOQAAgNAKgLQALgKAPAAIEBAAIAABFg");
	this.shape_273.setTransform(-86.2,17.1,0.047,0.047);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_274.setTransform(-85.3,17.1,0.047,0.047);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#DAD7D5").s().p("AhuAjQgPAAgLgKQgKgLAAgOQAAgNAKgLQALgKAPAAIEBAAIAABFg");
	this.shape_275.setTransform(-86.2,14.8,0.047,0.047);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_276.setTransform(-85.3,14.8,0.047,0.047);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#DAD7D5").s().p("AhuAjQgPAAgLgLQgKgKAAgOQAAgNAKgKQALgLAPAAIEBAAIAABFg");
	this.shape_277.setTransform(-86.2,12.6,0.047,0.047);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_278.setTransform(-85.3,12.6,0.047,0.047);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F7C384").s().p("Ajd2bIG7AAIAABDIhmAAQgPAAgKALQgKAKAAAOQAAAPAKAKQAKALAPAAIBmAAIAACrIkBAAQgPAAgKALQgKAKAAAOQAAAPAKAKQAKALAPAAIEBAAIAAfHQAAD2jeCYQhuBMhvAag");
	this.shape_279.setTransform(-86.5,26.7,0.047,0.047);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#E6EBEB").s().p("AjdN+IAA77IG7AAIAAChIkBAAQgPAAgKALQgKAKAAAPQAAAOAKALQAKAKAPAAIEBAAIAACsIhmAAQgPAAgKAKQgKAKAAAPQAAAPAKAKQAKAKAPAAIBmAAIAACsIkBAAQgPAAgKAKQgKALAAAOQAAAPAKAKQAKALAPAAIEBAAIAACrIhmAAQgPAAgKAIQgKALAAAOQAAAPAKAKQAKALAPAAIBmAAIAACrIkBAAQgPAAgKALQgKAKAAAPQAAAOAKALQAKAKAPAAIEBAAIAACrIhmAAQgPAAgKALQgKAKAAAPQAAAOAKALQAKAKAPAAIBmAAIAACsIkBAAQgPAAgKAKQgKAKAAAPQAAAPAKAKQAKAKAPAAIEBAAIAABog");
	this.shape_280.setTransform(-86.5,15.8,0.047,0.047);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#F0A940").s().p("Al+UYQieifAAjgMAAAglOIIrAAMAAAAs4QBvgbBvhMQDeiXAAj3IAA/HIBSAAIAAfSQAADgieCfQifCejgAAQjfAAifieg");
	this.shape_281.setTransform(-87.6,26.9,0.047,0.047);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#F0A940").s().p("AgnAhIAAhBIBQAAIAABBg");
	this.shape_282.setTransform(-85.3,20.2,0.047,0.047);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#F0A940").s().p("AgnBVIAAipIBQAAIAACpg");
	this.shape_283.setTransform(-85.3,21.1,0.047,0.047);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#CCC8C6").s().p("AiXAjQgPAAgLgKQgKgLAAgOQAAgNAKgKQALgLAPAAIFTAAIAABFg");
	this.shape_284.setTransform(-86,28.4,0.047,0.047);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#CCC8C6").s().p("AiXAjQgPAAgLgKQgKgLAAgOQAAgNAKgLQALgKAPAAIFTAAIAABFg");
	this.shape_285.setTransform(-86,26.2,0.047,0.047);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#CCC8C6").s().p("AiXAjQgPAAgLgLQgKgKAAgOQAAgNAKgLQALgKAPAAIFTAAIAABFg");
	this.shape_286.setTransform(-86,23.9,0.047,0.047);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#DAD7D5").s().p("AjdAeIAAg7IG7AAIAAA7g");
	this.shape_287.setTransform(-86.5,11.5,0.047,0.047);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#E6EBEB").s().p("AkcBeIAAi7IHsAAIAnAMQAmAVAAApQAAAogjASQgRAJgSABIgPAAIgqAIIAAAlg");
	this.shape_288.setTransform(-86.2,10.9,0.047,0.047);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#CCC8C6").s().p("AgnAgIAAg8IA4AAQALAAANgDIAAA/g");
	this.shape_289.setTransform(-85.3,11.5,0.047,0.047);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#CCC8C6").s().p("AkVAgIAAg/QANADAKAAIIUAAIAAA8g");
	this.shape_290.setTransform(-88.9,11.5,0.047,0.047);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#D8E0E2").s().p("AocOzIAA9lIQ5AAIAAdlg");
	this.shape_291.setTransform(-87.6,16.1,0.047,0.047);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#D8E0E2").s().p("AoGB2QgKABgMgDQglgIgYgdQgYgeAAgmIAAgVQAAgtAfgfQAgggAsABIQMAAQAsgBAgAgQAgAfAAAtIAAAVQAAAmgZAeQgXAdglAIQgMADgLgBg");
	this.shape_292.setTransform(-87.6,10.8,0.047,0.047);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#CCC8C6").s().p("AiXAjQgPAAgKgLQgLgKAAgOQAAgNALgLQAKgKAPAAIFTAAIAABFg");
	this.shape_293.setTransform(-86.4,30.7,0.047,0.047);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#CCC8C6").s().p("AhbArQgTAAgMgNQgNgMAAgSQAAgRANgMQAMgNATAAIDjAAIAABVg");
	this.shape_294.setTransform(103.7,33.7,0.028,0.028);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#CCC8C6").s().p("AhbArQgTAAgMgMQgNgNAAgSQAAgRANgMQAMgNATAAIDjAAIAABVg");
	this.shape_295.setTransform(103.7,32,0.028,0.028);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#CCC8C6").s().p("AhbArQgTAAgMgMQgNgNAAgSQAAgQANgNQAMgNATAAIDjAAIAABVg");
	this.shape_296.setTransform(103.7,30.3,0.028,0.028);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#CCC8C6").s().p("AhbArQgTAAgMgNQgNgNAAgRQAAgQANgNQAMgNATAAIDjAAIAABVg");
	this.shape_297.setTransform(103.7,28.6,0.028,0.028);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#CCC8C6").s().p("AgoArQgTAAgMgNQgNgNAAgRQAAgRANgMQAMgNATAAIB9AAIAABVg");
	this.shape_298.setTransform(103.5,26.9,0.028,0.028);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_299.setTransform(103.9,26.9,0.028,0.028);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#DAD7D5").s().p("AgoArQgTAAgMgNQgNgNAAgRQAAgQANgNQAMgNATAAIB9AAIAABVg");
	this.shape_300.setTransform(103.5,25.2,0.028,0.028);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_301.setTransform(103.9,25.2,0.028,0.028);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#DAD7D5").s().p("AgoArQgTAAgMgNQgNgMAAgSQAAgRANgMQAMgNATAAIB9AAIAABVg");
	this.shape_302.setTransform(103.5,23.5,0.028,0.028);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_303.setTransform(103.9,23.5,0.028,0.028);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#DAD7D5").s().p("AgoArQgTAAgMgNQgNgMAAgSQAAgRANgMQAMgNATAAIB9AAIAABVg");
	this.shape_304.setTransform(103.5,21.8,0.028,0.028);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_305.setTransform(103.9,21.8,0.028,0.028);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#DAD7D5").s().p("AiKArQgSAAgNgMQgNgOAAgRQAAgQANgNQANgNASAAIFBAAIAABVg");
	this.shape_306.setTransform(103.3,26,0.028,0.028);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_307.setTransform(103.9,26,0.028,0.028);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#CCC8C6").s().p("AiKArQgSAAgNgNQgNgMAAgSQAAgRANgMQANgNASAAIFBAAIAABVg");
	this.shape_308.setTransform(103.3,27.7,0.028,0.028);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_309.setTransform(103.9,27.7,0.028,0.028);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#DAD7D5").s().p("AiKArQgSAAgNgNQgNgNAAgRQAAgRANgMQANgNASAAIFBAAIAABVg");
	this.shape_310.setTransform(103.3,24.3,0.028,0.028);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_311.setTransform(103.9,24.3,0.028,0.028);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#DAD7D5").s().p("AiKArQgSAAgNgNQgNgMAAgSQAAgRANgMQANgNASAAIFBAAIAABVg");
	this.shape_312.setTransform(103.3,22.6,0.028,0.028);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_313.setTransform(103.9,22.6,0.028,0.028);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#DAD7D5").s().p("AiKArQgSAAgNgMQgNgNAAgSQAAgRANgMQANgNASAAIFBAAIAABVg");
	this.shape_314.setTransform(103.3,20.9,0.028,0.028);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_315.setTransform(103.9,20.9,0.028,0.028);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#EF6077").s().p("Ai9btIhXgHMAAAg3UIIpAAIAABUIiAAAQgSAAgMANQgNAMAAASQAAASANANQAMANASAAICAAAIAADTIlBAAQgTAAgMANQgNANAAASQAAASANANQAMAMATAAIFBAAMAAAAtfQAACLkVAZQg1AFg8AAQglAAgngCg");
	this.shape_316.setTransform(103,31.5,0.028,0.028);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#E6EBEB").s().p("AkUROMAAAgibIIpAAIAADHIlBAAQgTAAgMANQgNAMAAATQAAASANANQAMAMATAAIFBAAIAADUIiAAAQgSgBgMAOQgNAMAAASQAAASANANQAMANASAAICAAAIAADTIlBAAQgTAAgMANQgNAMAAATQAAASANAMQAMAOATgBIFBAAIAADUIiAAAQgSAAgMALQgNAMAAASQAAASANANQAMANASAAICAAAIAADTIlBAAQgTAAgMANQgNAMAAASQAAATANANQAMANATAAIFBAAIAADSIiAAAQgSABgMAMQgNANAAASQAAASANANQAMAMASAAICAAAIAADUIlBAAQgTAAgMANQgNANAAARQAAASANAOQAMAMATAAIFBAAIAACAg");
	this.shape_317.setTransform(103,23.4,0.028,0.028);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#E52D42").s().p("AnbbkQjHgsABhaMAAAg1nIKzAAMAAAA3UIBXgcQBogoBWg7QEWi7gBkwMAAAgmVIBmAAMAAAAurQAABKjFAmQiyAjkrAAQkwAAirgmg");
	this.shape_318.setTransform(102.1,31.6,0.028,0.028);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#E52D42").s().p("AgyApIAAhRIBkAAIAABRg");
	this.shape_319.setTransform(103.9,26.6,0.028,0.028);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#E52D42").s().p("AgyBpIAAjRIBkAAIAADRg");
	this.shape_320.setTransform(103.9,27.3,0.028,0.028);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#CCC8C6").s().p("Ai9ArQgSAAgNgNQgNgNAAgRQAAgRANgMQANgNASAAIGnAAIAABVg");
	this.shape_321.setTransform(103.4,34.5,0.028,0.028);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#CCC8C6").s().p("Ai9ArQgSAAgNgMQgNgNAAgSQAAgRANgMQANgNASAAIGnAAIAABVg");
	this.shape_322.setTransform(103.4,32.8,0.028,0.028);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#CCC8C6").s().p("Ai9ArQgSAAgNgMQgNgNAAgSQAAgRANgMQANgNASAAIGnAAIAABVg");
	this.shape_323.setTransform(103.4,31.1,0.028,0.028);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#CCC8C6").s().p("Ai9ArQgSAAgNgNQgNgMAAgSQAAgQANgNQANgNASAAIGnAAIAABVg");
	this.shape_324.setTransform(103.4,29.4,0.028,0.028);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#DAD7D5").s().p("AkUAlIAAhKIIpAAIAABKg");
	this.shape_325.setTransform(103,20.1,0.028,0.028);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#E6EBEB").s().p("AljB0IAAjnIJmAAIAwAPQAxAZAAAzQAAAxgsAXIgsAMIgTAAIg0AKIAAAug");
	this.shape_326.setTransform(103.2,19.7,0.028,0.028);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#CCC8C6").s().p("AgyAnIAAhKIBIAAQAPAAANgDIAABNg");
	this.shape_327.setTransform(103.9,20.1,0.028,0.028);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#CCC8C6").s().p("AlZAnIAAhNQAOADAPAAIKXAAIAABKg");
	this.shape_328.setTransform(101.2,20.1,0.028,0.028);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#D8E0E2").s().p("AqhSPMAAAgkcIVDAAMAAAAkcg");
	this.shape_329.setTransform(102.1,23.5,0.028,0.028);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#D8E0E2").s().p("AshCSQgPAAgOgDQgugKgdgkQgegkAAgvIAAgaQAAg3AngnQAngnA4AAIZDAAQA4AAAnAnQAnAnAAA3IAAAaQAAAvgeAkQgdAkguAKQgOADgPAAg");
	this.shape_330.setTransform(101.7,19.6,0.028,0.028);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#CCC8C6").s().p("ApsCVQg+ABgrgsQgsgsABg9IAAgBQgBg+AsgrQArgrA+gBITZAAQA9ABAsArQArArAAA+IAAABQAAA9grAsQgsAsg9gBg");
	this.shape_331.setTransform(102.2,36.6,0.028,0.028);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#DAD7D5").s().p("AsiC9QhPABg4g4Qg4g4AAhOQAAhOA4g4QA4g2BPAAICyAAQg7ABgsArQguAtAAA8IAAADQAAA7AuArQAtAsA+gBITZAAQA9ABApgsQAqgqAAg8IAAgDQAAg9gqgsQgogrg6gBICyAAQBQAAA3A2QA4A4AABOQAABOg4A4Qg3A4hQgBg");
	this.shape_332.setTransform(102.2,36.7,0.028,0.028);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#5AA4A4").s().p("A0mE8QkCg+iOhRQiShTAAhaQAAhaCShTQCOhQECg+QIjiDMDAAQMEAAIjCDQECA+COBQQCSBTAABaQAABaiSBTQiOBRkCA+QojCDsEAAQsDAAojiDg");
	this.shape_333.setTransform(24.9,33.2,0.029,0.029);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.9,-37.2,210,74.5);


(lib.Tween115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6EBEB").s().p("APwUPQgZAAgjgFIg5gIQkzgnixjsQhGhcglhtQgihfAAhQIAAsTQAAibhthMQhLg0hxgKQh1AKhLA0QhtBMAACbIAAMTQAABcgcBkQgjB6hEBgQi3D+lpAAI6JAAQgYAAgkgFIhAgKQkFgli4iRQjkizAAkVIAC0gQAAhdAwhqQAyhvBXhcQDRjeEiAAMArnAAxMArpgAxQEiAADQDeQBYBcAxBvQAwBqAABdIACUlQAAE8kiC4QhzBJiRAnQiBAkh2AAgAgQqtQDpASCMCRQCLCPABDfIAAMTQAAAsAaA/QAeBNA3A/QB/CVDrAMQAHABAMgDQANgCAGAAIaJAAQBXAABbgWQBzgbBYg3QBdg6Amg9QAvhJAAhhIgC0gQAAgpgbg9QgghKg8hAQg7g9hFglQhcgwhoAAMgrtAAwMgrngAwQhoAAhdAwQhGAlg5A9Qg9BAggBKQgcA9AAApIgBUfQAABgAvBKQArBEBYA3QAdASA9AaQBJAfBVAOQBDAMBCAAIaJAAQB8AABXgjQBagkA2hLQAtg9AYhLQAVhCAAg4IAAsTQABjfCKiPQCLiRDsgSIAPgCg");
	this.shape.setTransform(72.9,33.2,0.028,0.028);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8E0E2").s().p("AmqQZMALOggvICGgCMgLOAgxg");
	this.shape_1.setTransform(78.8,33.2,0.028,0.028);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8E0E2").s().p("AmjQXMALMggrIB7gCMgLNAgtg");
	this.shape_2.setTransform(78.2,33.2,0.028,0.028);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D8E0E2").s().p("AoVQUMALIggiIFjgGMgLLAgpg");
	this.shape_3.setTransform(77.2,33.2,0.028,0.028);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArQQXMALQggtIEUABQBoABBcAwQBGAlA6A9QA8A/AhBLQAbA8AAAqIABUeQAABgguBJQgqBChaA4QhXA3h0AbQhbAVhWABg");
	this.shape_4.setTransform(80,33.1,0.028,0.028);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AIcNuQg2hAgfhOQgahBAAgrIAAsUQgBjeiLiQQiLiQjpgTIgPgCIgSACQjrATiMCQQiKCQgBDeIAAMUQAAA4gVBBQgYBMgtA9Qg2BLhaAkQhXAjh8AAIodAAMAMyggNILhASIaOgeMgLNAgjQjmgNiCiXg");
	this.shape_5.setTransform(73.1,33.2,0.028,0.028);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmgQVMALLggkIB2gFMgLMAgpg");
	this.shape_6.setTransform(77.8,33.1,0.028,0.028);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmZQXMALNggoIBmgFMgLOAgtg");
	this.shape_7.setTransform(78.5,33.1,0.028,0.028);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8E0E2").s().p("AosQMMAMxggXIEoAFMgMvAgSg");
	this.shape_8.setTransform(69.2,33.2,0.028,0.028);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8E0E2").s().p("ApdQWQg9AAhIgOQhTgRhKggIMj/sIPcARMgM0Agag");
	this.shape_9.setTransform(67,33.2,0.028,0.028);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AnkQLMAMyggVICXAAMgMxAgVg");
	this.shape_10.setTransform(68.6,33.2,0.028,0.028);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlkPOQhXg2gshHQgvhKAAhgIAB0gQAAgpAcg9QAghKA9hAQA5g9BGglQBdgwBoAAIJvALIshfsQgwgUgqgag");
	this.shape_11.setTransform(65.2,33.1,0.028,0.028);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C6277").s().p("ABqJUQiJgfidioQhwh4huiwIhXiXIBjooIC3BdQDXB2CdB9QH8GOj4FEQhxCTiJAAQgeAAgfgHg");
	this.shape_12.setTransform(83.8,35.5,0.028,0.028);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C6277").s().p("AmhHIQiIiyBgjOQBOijDeivQCdh9DXh2IC3hdIBjIoIhXCXQhuCwhwB4QidCoiJAfQgfAHgdAAQiKAAhxiTg");
	this.shape_13.setTransform(62.5,35.5,0.028,0.028);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BEE4EB").s().p("AkgM9IAA55IJBAAIAAZ5g");
	this.shape_14.setTransform(0.4,31.6,0.049,0.049);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#91D0D6").s().p("Ak/M9QixAAh/h+Qh+h+AAiyIAAzLIXaAAIAAZ5g");
	this.shape_15.setTransform(-4.7,31.6,0.049,0.049);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#91D0D6").s().p("AkOM9IAA55IITAAQAKAtAAAqIAAWEQAAApgKAqQgIAlgTAmg");
	this.shape_16.setTransform(3.1,31.6,0.049,0.049);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BEE4EB").s().p("AwyOhQiUgBhphoQhphpAAiUIAA2EQAAgtALgqIEPAAIAATLQAACyB+B+QB+B+CyAAMAhpAAAQgtBahUA2QhYA3hoABg");
	this.shape_17.setTransform(-2.7,32.1,0.049,0.049);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E6EBEB").s().p("APADzI7zAAQg8AAgsgmQgugoAAg6IAAlGQAAgFADgIIADgNIb5AAQA7AAAsAqQAtAqAAA7IAAFGQAAAJgGANg");
	this.shape_18.setTransform(-2.8,23.5,0.049,0.049);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D8E0E2").s().p("AN9EYIAAlGQAAg7gqgpQgqgqg7AAI70AAQAJgyAnghQAogiA0AAIbyAAQA7AAAqAqQAqApgBA7IAAFGQABA7gqApQgoAqg6ABQACgOAAgMg");
	this.shape_19.setTransform(-2.4,23.2,0.049,0.049);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6EBEB").s().p("AkgDOIAAmbIJBAAIAAGbg");
	this.shape_20.setTransform(0.4,26.5,0.049,0.049);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8E0E2").s().p("ArtDOIAAmbIXaAAIAAGbg");
	this.shape_21.setTransform(-4.7,26.5,0.049,0.049);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D8E0E2").s().p("ADZQLQASglAJgmQAKgpAAgqIAA2EQAAgqgLgsIoTAAIAAmdICUAAQCwAAB+B+QB+B+AACyIAAZng");
	this.shape_22.setTransform(3.2,30.6,0.049,0.049);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6EBEB").s().p("AT5RaIAA5nQAAiyh+h+Qh+h+izAAMgiwAAAIAAg7QAAgzAMgwMAkTAAAQCyAAB+B+QB+B+AACyIAAahQAAA0gMAwg");
	this.shape_23.setTransform(-1.6,30.2,0.049,0.049);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E6EBEB").s().p("AyHT/QiyABh+h/Qh+h+AAiyIAA6hQAAizB+h+QB+h9CygBIAJAAQgNAxAAAzIAAHXIkPAAQgLAqAAAtIAAWEQAACUBqBpQBoBoCUABMAiLAAAQBogBBXg3QBVg2AshaICqAAQgiCPhzBdQh2BeiXAAg");
	this.shape_24.setTransform(-2.7,31,0.049,0.049);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCC8C6").s().p("AhpAyQgVAAgPgPQgPgPAAgUQAAgUAPgOQAPgPAVAAIEGAAIAABjg");
	this.shape_25.setTransform(-64.5,31.9,0.028,0.028);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCC8C6").s().p("AhpAyQgVAAgPgPQgPgPAAgUQAAgUAPgOQAPgPAVAAIEGAAIAABjg");
	this.shape_26.setTransform(-64.5,30,0.028,0.028);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCC8C6").s().p("AhpAyQgVAAgPgPQgPgPAAgUQAAgUAPgOQAPgPAVAAIEGAAIAABjg");
	this.shape_27.setTransform(-64.5,28,0.028,0.028);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCC8C6").s().p("AhpAyQgVAAgPgPQgPgPAAgUQAAgUAPgOQAPgPAVAAIEGAAIAABjg");
	this.shape_28.setTransform(-64.5,26,0.028,0.028);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCC8C6").s().p("AguAyQgVAAgPgPQgPgPAAgUQAAgUAPgOQAPgPAVAAICQAAIAABjg");
	this.shape_29.setTransform(-64.7,24,0.028,0.028);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIB0AAIAABjg");
	this.shape_30.setTransform(-64.3,24,0.028,0.028);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DAD7D5").s().p("AguAyQgVAAgPgOQgPgQAAgUQAAgUAPgOQAPgPAVgBICQAAIAABkg");
	this.shape_31.setTransform(-64.7,22.1,0.028,0.028);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCC8C6").s().p("Ag5AyIAAhkIB0AAIAABkg");
	this.shape_32.setTransform(-64.3,22.1,0.028,0.028);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DAD7D5").s().p("AguAyQgVABgPgQQgPgPAAgUQAAgTAPgQQAPgPAVABICQAAIAABjg");
	this.shape_33.setTransform(-64.7,20.1,0.028,0.028);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIB0AAIAABjg");
	this.shape_34.setTransform(-64.3,20.1,0.028,0.028);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DAD7D5").s().p("AguAzQgVgBgPgPQgPgOAAgVQAAgTAPgQQAPgOAVAAICQAAIAABkg");
	this.shape_35.setTransform(-64.7,18.1,0.028,0.028);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCC8C6").s().p("Ag5AzIAAhkIB0AAIAABkg");
	this.shape_36.setTransform(-64.3,18.1,0.028,0.028);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DAD7D5").s().p("AifAyQgVAAgPgOQgOgQAAgUQAAgUAOgOQAPgPAVgBIFyAAIAABkg");
	this.shape_37.setTransform(-65,23,0.028,0.028);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CCC8C6").s().p("Ag5AyIAAhkIB0AAIAABkg");
	this.shape_38.setTransform(-64.3,23,0.028,0.028);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCC8C6").s().p("AifAyQgVAAgPgPQgOgPAAgUQAAgUAOgOQAPgPAVAAIFyAAIAABjg");
	this.shape_39.setTransform(-65,25,0.028,0.028);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIB0AAIAABjg");
	this.shape_40.setTransform(-64.3,25,0.028,0.028);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DAD7D5").s().p("AifAyQgVABgPgPQgOgQAAgUQAAgTAOgPQAPgQAVABIFyAAIAABjg");
	this.shape_41.setTransform(-65,21.1,0.028,0.028);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIB0AAIAABjg");
	this.shape_42.setTransform(-64.3,21.1,0.028,0.028);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DAD7D5").s().p("AifAzQgVgBgPgPQgOgOAAgVQAAgUAOgPQAPgOAVAAIFyAAIAABkg");
	this.shape_43.setTransform(-65,19.1,0.028,0.028);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CCC8C6").s().p("Ag5AzIAAhkIB0AAIAABkg");
	this.shape_44.setTransform(-64.3,19.1,0.028,0.028);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DAD7D5").s().p("AifAyQgVAAgPgOQgOgPAAgVQAAgTAOgPQAPgPAVAAIFyAAIAABjg");
	this.shape_45.setTransform(-65,17.1,0.028,0.028);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIB0AAIAABjg");
	this.shape_46.setTransform(-64.3,17.1,0.028,0.028);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BEE4EB").s().p("EgE9ggNIJ7AAIAABiIiSAAQgVgBgOAPQgPAPAAAVQAAAVAPAPQAOAPAVAAICSAAIAAD2IlxAAQgVAAgPAPQgPAPAAAUQAAAWAPAPQAPAOAVABIFxAAMAAAAsoQAAFjk+DaQieBsifAmg");
	this.shape_47.setTransform(-65.3,29.5,0.028,0.028);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E6EBEB").s().p("Ak9UDMAAAgoGIJ7AAIAADoIlxAAQgVAAgPAPQgPAQAAAUQAAAWAPAOQAPAPAVAAIFxAAIAAD2IiSAAQgVAAgOAPQgPAPAAAVQAAAVAPAPQAOAPAVAAICSAAIAAD2IlxAAQgVAAgPAOQgPAPAAAVQAAAWAPAOQAPAPAVABIFxAAIAAD1IiSAAQgVAAgOANQgPAPAAAVQAAAVAPAPQAOAPAVAAICSAAIAAD2IlxAAQgVgBgPAQQgPAPAAAUQAAAVAPAQQAPAPAVgBIFxAAIAAD2IiSAAQgVAAgOAPQgPAPAAAVQAAAVAPAPQAOAPAVAAICSAAIAAD1IlxAAQgVABgPAPQgPAOAAAWQAAAUAPAQQAPAOAVAAIFxAAIAACVg");
	this.shape_48.setTransform(-65.3,20,0.028,0.028);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#91D0D6").s().p("Aktf1QiMg6hrhsQhshsg7iLQg9iRAAieMAAAg1bIMdAAMAAABAaQCggmCfhsQE/jaAAljMAAAgsoIB2AAMAAAAs4QAACeg9CRQg7CLhsBsQhrBsiMA6QiQA9ieAAQidAAiQg9g");
	this.shape_49.setTransform(-66.3,29.6,0.028,0.028);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#91D0D6").s().p("Ag5AwIAAhfIB0AAIAABfg");
	this.shape_50.setTransform(-64.3,23.8,0.028,0.028);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#91D0D6").s().p("Ag5B7IAAj0IB0AAIAAD0g");
	this.shape_51.setTransform(-64.3,24.5,0.028,0.028);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CCC8C6").s().p("AjaAyQgVAAgPgPQgOgPAAgUQAAgUAOgOQAPgPAVAAIHoAAIAABjg");
	this.shape_52.setTransform(-64.9,32.9,0.028,0.028);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CCC8C6").s().p("AjaAyQgVAAgPgPQgOgPAAgUQAAgUAOgOQAPgPAVAAIHoAAIAABjg");
	this.shape_53.setTransform(-64.9,31,0.028,0.028);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CCC8C6").s().p("AjaAyQgVAAgPgPQgOgPAAgUQAAgUAOgOQAPgPAVAAIHoAAIAABjg");
	this.shape_54.setTransform(-64.9,29,0.028,0.028);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CCC8C6").s().p("AjaAyQgVAAgPgPQgOgPAAgUQAAgUAOgOQAPgPAVAAIHoAAIAABjg");
	this.shape_55.setTransform(-64.9,27,0.028,0.028);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DAD7D5").s().p("Ak9ArIAAhVIJ7AAIAABVg");
	this.shape_56.setTransform(-65.3,16.2,0.028,0.028);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E6EBEB").s().p("AmZCHIAAkNILDAAIARADQAVAFASAJQA4AdAAA8QAAA5gzAbQgZANgZACIgWAAIg8ALIAAA1g");
	this.shape_57.setTransform(-65.1,15.7,0.028,0.028);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CCC8C6").s().p("Ag5AtIAAhWIBTAAQASAAAPgDIAABZg");
	this.shape_58.setTransform(-64.3,16.2,0.028,0.028);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CCC8C6").s().p("AmOAtIAAhZQAPADASAAIL8AAIAABWg");
	this.shape_59.setTransform(-67.4,16.2,0.028,0.028);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D8E0E2").s().p("AsIVPMAAAgqdIYRAAMAAAAqdg");
	this.shape_60.setTransform(-66.3,20.2,0.028,0.028);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D8E0E2").s().p("ArnCrQgSgBgPgDQg0gLgjgrQgigqAAg3IAAgfQAAhAAtgtQAtgtBAAAIXPAAQBAAAAtAtQAtAtAABAIAAAfQAAA3giAqQgjArg0ALQgPADgSABg");
	this.shape_61.setTransform(-66.3,15.6,0.028,0.028);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#41485F").s().p("AkhKwQiGg5hnhnQhohog5iGQg6iKAAiYQAAiWA6iLQA5iGBohnQBnhoCGg5QCLg6CWAAQCYAACKA6QCGA5BnBoQBoBnA4CGQA7CLAACWQAACYg7CKQg4CGhoBoQhnBniGA5QiKA6iYAAQiWAAiLg6g");
	this.shape_62.setTransform(36.9,16.2,0.029,0.029);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#808288").s().p("AnVRaQjZhcininQioiohcjZQhfjgAAj2QAAj0BfjhQBcjZCoinQCnioDZhcQDhhfD0AAQD2AADgBfQDZBcCoCoQCnCnBcDZQBfDhAAD0QAAD2hfDgQhcDZinCoQioCnjZBcQjgBfj2AAQj0AAjhhfg");
	this.shape_63.setTransform(36.9,16.2,0.029,0.029);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#41485F").s().p("AkhKwQiGg5hnhoQhohng5iGQg6iLAAiXQAAiXA6iKQA5iGBohnQBnhoCGg5QCLg6CWAAQCYAACKA6QCGA5BnBoQBoBnA4CGQA7CKAACXQAACXg7CLQg4CGhoBnQhnBoiGA5QiKA6iYAAQiWAAiLg6g");
	this.shape_64.setTransform(36.9,-7.4,0.029,0.029);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#808288").s().p("AnVRaQjZhcininQioiohcjZQhfjhAAj1QAAj1BfjgQBcjZCoioQCninDZhcQDhhfD0AAQD2AADgBfQDZBcCoCnQCnCoBcDZQBfDgAAD1QAAD1hfDhQhcDZinCoQioCnjZBcQjgBfj2AAQj0AAjhhfg");
	this.shape_65.setTransform(36.9,-7.4,0.029,0.029);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#41485F").s().p("AlbFcQiRiQABjMQgBjLCRiQQCQiQDLAAQDLAACRCQQCRCQAADLQAADMiRCQQiRCQjLAAQjLAAiQiQg");
	this.shape_66.setTransform(36.9,-24.9,0.029,0.029);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#808288").s().p("AoaT7Qj4hpjAi/Qi/jAhpj5QhtkBAAkZQAAkZBtkAQBpj5C/jAQDAi/D4hpQEChtEYAAQEZAAEBBtQD5BpDAC/QC/DABpD5QBtEAAAEZQAAEZhtEBQhpD5i/DAQjAC/j5BpQkBBtkZAAQkYAAkChtg");
	this.shape_67.setTransform(36.9,-24.9,0.029,0.029);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#808288").s().p("EguAAHBQADi0BHikQBIijCCh9QCBh+CphFQCthHC9AAMA+/AAAQC9AACrBHQCmBFB/B+QB/B9BFCjQBGCjADC1g");
	this.shape_68.setTransform(30.1,31.6,0.028,0.028);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#41485F").s().p("AgLEnIAApNIAXAAIAAJNg");
	this.shape_69.setTransform(36.9,6.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#41485F").s().p("EhSkAHRQAAi9BJiuQBHikCAiBQCAiBCnhHQCthJC9AAMCH8AAAQC9AACuBJQCpBHCCCBQCDCBBICkQBLCuAAC9g");
	this.shape_70.setTransform(26.4,34.2,0.028,0.028);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#41485F").s().p("ArRHHQi5gBiDiDQiEiEAAi5IAAgMQAAi5CEiEQCDiCC5AAIWiAAQC5AACECCQCDCEAAC5IAAAMQAAC5iDCEQiECDi5ABg");
	this.shape_71.setTransform(12.4,-7.1,0.029,0.029);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EF6077").s().p("AkNEOQhwhwAAieQAAidBwhwQBwhwCdAAQCeAABwBwQBwBwAACdQAACehwBwQhwBwieAAQidAAhwhwgAizizQhLBLAABoQAABpBLBLQBLBLBoAAQBpAABLhLQBLhLAAhpQAAhohLhLQhKhLhqAAQhoAAhLBLg");
	this.shape_72.setTransform(12.4,-0.4,0.028,0.028);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EF6077").s().p("AkOEOQhwhwAAieQAAidBwhwQBxhwCdAAQCeAABxBwQBvBwAACdQAACehvBwQhxBwieAAQidAAhxhwgAizizQhLBLAABoQAABpBLBLQBLBLBoAAQBqAABKhLQBLhLAAhpQAAhohLhLQhKhLhqAAQhoAAhLBLg");
	this.shape_73.setTransform(5.3,-2.5,0.028,0.028);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E52D42").s().p("AjzEAQjSjdAAkxQAAg5AJg+QBHgzBTgaQBWgcBaAAQDrAACmCnQCnCnAADqQAAB7gyBvQgwBrhYBQQktgSjSjdg");
	this.shape_74.setTransform(9.8,-2.8,0.028,0.028);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EF6077").s().p("Ak1FeQimimAAjrQAAiOBBh8QA/h4BvhPQgJA+AAA5QAAEzDTDbQDPDdEwASQhOBGhhAnQhlAohtAAQjpAAioing");
	this.shape_75.setTransform(9.2,-2.4,0.028,0.028);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E52D42").s().p("AiqCNQiNimAAjaIAAgZQBohKB/AAQChgBBzB0QB0BzAAChQAABWgkBOQgiBMg/A2QjRgmiMikg");
	this.shape_76.setTransform(9.2,-12.6,0.028,0.028);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EF6077").s().p("AjSDxQh0h0AAihQAAhgAthWQArhSBLg3IAAAZQAADaCNCmQCJCkDUAmQg1AwhCAZQhEAahKAAQihAAhzhyg");
	this.shape_77.setTransform(8.8,-12.3,0.028,0.028);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFF7F5").s().p("AkgEhQh4h4AAipQAAioB4h4QB4h4CoAAQCpAAB4B4QB4B4AACoQAACph4B4Qh4B4ipAAQioAAh4h4gAi+i+QhQBQAABuQAABwBQBPQBPBQBvAAQBvAABQhQQBPhPAAhwQAAhuhPhQQhQhPhvAAQhvAAhPBPg");
	this.shape_78.setTransform(4.5,5.4,0.028,0.028);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFF7F5").s().p("Ak1E2QiBiBAAi1QAAi1CBiAQCBiBC0AAQC1AACBCBQCBCAAAC1QAAC2iBCAQiBCBi1AAQi0AAiBiBg");
	this.shape_79.setTransform(8.5,8.7,0.028,0.028);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EF6077").s().p("AOmbiQqkiroTksQq9mKmIpHQncrCAAu/IAAgBQAAhzAJh6QDLi6EXhPQGNhxHqB+QguDxgBD4IAAALQABKZFMJ7QENIDHhHeQFkFiG5ExQEBCxDZB0IhXAEQmOgnmohrg");
	this.shape_80.setTransform(5.1,6.2,0.028,0.028);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#91D0D6").s().p("AEyXyQqBjinhmoQnqmwkHpJQkUpnAArUIACgcQABg/ADhLQApgxA3gzQgKB6AAB0IAAAAQAAO/HcLCQGIJHK9GKQIUEsKjCrQGoBrGPAnIibAEQrhAAqIjlg");
	this.shape_81.setTransform(4.8,6.6,0.028,0.028);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E52D42").s().p("AvRYsQm6kxlkliQngnekPoDQlNp7AAqZIAAgLQAAj4AujxQA5AOAnAMQECBNETCBQDfBnEMCaQB2BEFjDWQEZCrClBXQHsEGFhAQQHJAVIeiAQJQiLHPkMQgoOxksKEQjWHLlAEHQhjBGheA3IhJAqIBMgkQBeg0BghPQIomAFxoGQIrsKAAuYIAAgPQgBhegGhNQA/hGA6hTQAQChABCjIACAdQAAK1kIJUQj7I2nVGuQnJGjplDzQpmDzq4AlQjYh0kBixg");
	this.shape_82.setTransform(11.8,6.3,0.028,0.028);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E6EBEB").s().p("Ag2gBIBVgEIAYALQgogChFgFg");
	this.shape_83.setTransform(10.3,11.6,0.028,0.028);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E6EAE9").s().p("Ag7ApQBcg1BkhGQhgBPhdAyIhMAkg");
	this.shape_84.setTransform(15,10,0.028,0.028);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E6EBEB").s().p("AzxaEQFzn4JjmBQGzkUIAi8QEBhfCpgnMAAAgqZQidAGidgXQk7gsAAiKQgHhWAThXQAnitCKAAIR3AAMAAAA0jQh3A0i3BpQltDSlBEHQnBFxkqGoQlyIShvJLQnqh+mNBxQkXBPjLC6QA+sMHRp2g");
	this.shape_85.setTransform(5,-7.1,0.028,0.028);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D8E0E2").s().p("EAMWA5RQlkgRnqkFQikhYkaiqQljjWh2hEQkMiajehoQkUiAkBhNQgogMg4gPQBvpKF0oSQEpmoHClxQFBkIFtjPQC1hpB2g0MAAAg0lIx0AAQiKAAgnCtQgUBWAIBXQAACJE7AtQCdAWCdgFMAAAAqbQipAnkBBeQoAC7m1ETQpjGCl0H3QnQJ2g+MMQg3AzgoAxQAbpSDgoAQDVnqF+mIQFxl6H3kHQHtkBJMiBMAAAgpzIjqAAQiNAAhlhlQhkhkAAiOQAAiOBkhkQBkhlCOAAIfQAAQCOAABkBlQBkBkAACOQAACOhkBkQhkBliOAAIjpAAMAAAApzQI0B8HeDyQHnD3FtFjQF4FvDhHLQDqHeA4IsQg6BTg+BHQgupjlaopQklnVnkmKQmUlJnOjdQmQi9j/gdIBaAfQBzArB6A5QGIC9FIEZQHKGIEHIGQFJKHADMoIAAAPQAACVgGCMQnPELpPCMQnUBumTAAQhBAAg/gDg");
	this.shape_86.setTransform(9.7,-5.8,0.028,0.028);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E6EBEB").s().p("ALzVCIAAgOQgDsplJqFQkHoGnJmIQlHkYmIi9Qh7g7hygrIhaggQD+AeGQC/QHODdGSFJQHlGJElHWQFZInAuJjQhMBXheBUQi5CkjwCMQAGiMAAiWg");
	this.shape_87.setTransform(15.7,-1.5,0.028,0.028);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EF6077").s().p("AjLKfQEqqGAouuQDwiMC5ikQBehUBNhXQAFBMACBfIAAAOQgBOYoqMKQlwIGonGAQE/kHDWnLg");
	this.shape_88.setTransform(17.5,5.8,0.028,0.028);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B2B5BB").s().p("AgPGsQhqgPhBhWIkcl8IH2l5IG4JKIkpDeQhHA1hTAAQgTAAgRgDg");
	this.shape_89.setTransform(-18,12.5,0.028,0.028);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#959BA9").s().p("AlxBiQhAhVAPhoQAQhqBWhAIEpjeIG5JPIn2F4g");
	this.shape_90.setTransform(-19.1,11,0.028,0.028);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B2B5BB").s().p("AizF4IkljjIHBpDIHwGBIkjF3QhBBVhqAOQgQACgRAAQhWAAhHg3g");
	this.shape_91.setTransform(-35.1,12.6,0.028,0.028);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#959BA9").s().p("AmmBkIHCpIIEmDjQBVBCAOBpQAOBohCBWIkmF9g");
	this.shape_92.setTransform(-34,11.1,0.028,0.028);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B2B5BB").s().p("AifHpQilAAh4h1Qh4h2AAilIAApCIRpAAIAAPSg");
	this.shape_93.setTransform(-28.5,6.3,0.028,0.028);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#959BA9").s().p("ApHHpIAAvSISQAAIAAJCQgBCkh8B3Qh7B1imAAg");
	this.shape_94.setTransform(-25.2,6.3,0.028,0.028);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#91D0D6").s().p("AlHFJQiJiJAAjAQAAi/CJiIQCIiJC/AAQDAAACJCJQCICIAAC/QAADBiICIQiICIjBAAQi/AAiIiIgAjajaQhbBbAAB/QAACABbBbQBbBbB/AAQCAAABbhbQBbhbAAiAQAAh/hbhbQhbhbiAAAQh/AAhbBbg");
	this.shape_95.setTransform(-23.3,21.8,0.028,0.028);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#91D0D6").s().p("AlHFIQiJiIAAjAQAAi/CJiJQCIiIC/AAQDAAACICIQCJCJAAC/QAADAiJCIQiICJjAAAQi/AAiIiJgAjajaQhbBbAAB/QAACABbBbQBbBbB/AAQCAAABbhbQBbhbAAiAQAAh/hbhbQhbhbiAAAQh/AAhbBbg");
	this.shape_96.setTransform(-31.9,19.2,0.028,0.028);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#91D0D6").s().p("AgQICQifhKh4iAQh6iAhBiiQhFinAAi3QAAhMALhFQBXg9BkghQBogiBuAAQEdAADLDLQDLDLAAEdQAACVg9CHQg6CDhrBhQi1gLihhNg");
	this.shape_97.setTransform(-26.5,18.9,0.028,0.028);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A5DADD").s().p("Al3GpQjLjLgBkdQAAirBQiXQBOiSCHhhQgMBGAABMQAAC3BFCoQBCCgB6CAQB2CACfBLQCjBNC0ALQheBWh1AuQh7AxiFAAQkcgBjLjLg");
	this.shape_98.setTransform(-27.2,19.3,0.028,0.028);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFF7F5").s().p("AleFgQiTiSAAjOQAAjNCTiSQCRiSDNAAQDNAACTCSQCSCSgBDNQABDOiSCSQiTCRjNABQjNgBiRiRgAjnjnQhhBgAACHQAACHBhBhQBhBhCGAAQCHAABihhQBghhAAiHQAAiHhghgQhihhiHAAQiGAAhhBhg");
	this.shape_99.setTransform(-32.9,28.9,0.028,0.028);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFF7F5").s().p("Al4F5QidicAAjdQAAjcCdicQCcidDcAAQDdAACcCdQCdCcAADcQAADdidCcQicCdjdAAQjcAAicidg");
	this.shape_100.setTransform(-28,32.9,0.028,0.028);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BEE4EB").s().p("EARvAheQs0jQqHlsQtUnfncrFQpDtbAAyNIAAgBQAAiXALiJQD3jiFThgQHiiKJUCZQg4EqgBEpIAAANQAAMoGUMEQFIJzJIJEQGxGvIZFyQE3DXEICOIhpAFQnlgwoDiCg");
	this.shape_101.setTransform(-32.2,29.8,0.028,0.028);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#91D0D6").s().p("AF0c7QsMkTpIoEQpToNlBrJQlPrqAAtwQADgXAAgMQAChVADhSQAzg+BBg7QgLCJAACXIAAABQAASNJDNbQHcLFNUHfQKGFsM1DQQIDCCHlAwQhKAChIABIgrABQt/AAsUkVg");
	this.shape_102.setTransform(-32.5,30.3,0.028,0.028);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#91D0D6").s().p("AykeAQoZlzmxmuQpIpFlJpyQmVsEAAsoIABgNQAAkpA4kqQAxAMBEAUQE5BfFPCbQEPB/FFC6QCPBSGwEFQFWDPDIBqQEgCaDoBQQEOBdDtALQIsAZKTibQLPipIzlFQgxR7lsMPQkEIumFFAQh5BVhxBDQg5AiggARQAigMA5gfQBzg/B1hhQKfnSHBp3QKiuyAAxcIAAgTQAAhigIhtQBPhbBChgQAUDGACDEIABASIACAQQAANLlBLUQkyKxo6ILQorH9rpEoQrrEotOAsQkIiOk3jXg");
	this.shape_103.setTransform(-24,29.9,0.028,0.028);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E6EBEB").s().p("AhCgCIBngEIAeANQgxgChUgHg");
	this.shape_104.setTransform(-25.9,36.4,0.028,0.028);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E6EAE9").s().p("AhHAyQBvhBB5hVQh1BhhxA8Qg5AggiAMQAggRA5gig");
	this.shape_105.setTransform(-20.2,34.4,0.028,0.028);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#BEE4EB").s().p("Aj3MvQFrsRAwx5QEkiqDhjIQBwhkBfhrQAIBtAABiIAAATQABRcqjOyQm/J3qfHSQGGlAEDoug");
	this.shape_106.setTransform(-17.1,29.3,0.028,0.028);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E6EBEB").s().p("AlD2tQi/AGi/gbQl+g2AAinQgKhpAYhpQAwjTCnAAIedAAMAAAA/4I2GCRg");
	this.shape_107.setTransform(-29.2,9,0.028,0.028);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E6EBEB").s().p("A4DAuQHEpiLnnVQIRlOJvjmQE4hyDNgwINWCAIhkAvQiABAiKBPQm8D/mGFAQojHBlpIBQnCKEiHLJQpUiZniCKQlTBgj3DiQBLu0I0r+g");
	this.shape_108.setTransform(-32.3,19.3,0.028,0.028);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D8E0E2").s().p("EAH1AkgQjvgLkMhdQjohQkgiaQjIhqlWjPQmwkFiPhSQlFi7kPh+QlPick5heQhEgUgxgMQCHrJHEqCQFqoEIinAQGGlAG8j/QCLhQCAg/IBjgwIL6BKIBtAmQCLA0CVBIQHdDmGOFVQItHdE/J1QGQMRAEPWIAAASQAACvgHCwQozFGrPCpQo4CFnqAAQhQAAhNgDg");
	this.shape_109.setTransform(-25.2,21.3,0.028,0.028);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D8E0E2").s().p("AgjgkIBGATIAAA2g");
	this.shape_110.setTransform(-23.1,14.4,0.028,0.028);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D8E0E2").s().p("AiaBOIAdjhQBXATB5AgIBIBLIAAAVIgLCTQiug3h8gOg");
	this.shape_111.setTransform(-23.5,14.6,0.028,0.028);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E6EBEB").s().p("AAGCaQiLg6h+gnIAKiSIAAhPQD/BGD/BhIjdCqg");
	this.shape_112.setTransform(-22.3,14.9,0.028,0.028);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D8E0E2").s().p("AOhIWQj8nsmsm0Qlwl7nWk1QmWkLmaitIDdisQRGGkKeMgQLHNNBzRxQhCBghPBbQgupbkeoug");
	this.shape_113.setTransform(-18.2,19.7,0.028,0.028);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D8E0E2").s().p("ABhEGIkJkVIFRkJIAAIxg");
	this.shape_114.setTransform(-23.5,13.6,0.028,0.028);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D8E0E2").s().p("AEYd9MAAAg/3I+dAAQingBgwDTQgYBpAKBpQAACnF+A2QC/AbC/gGMAAAAn8IjbiqMAAAgk7IkcAAQisAAh6h6Qh6h6AAisQAAiuB6h5QB6h6CsAAMAzLAAAQCsAAB6B6QB6B5AACuQAACsh6B6Qh6B6isAAIkbAAMAAAArEIlUEJIEMEXQh8gghWgTIgdDjQB7AOCxA3IgTEDg");
	this.shape_115.setTransform(-26.9,9.2,0.028,0.028);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E6EBEB").s().p("AgQgKIAhAMIgMAJg");
	this.shape_116.setTransform(-22.3,15.3,0.028,0.028);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E6EBEB").s().p("AyAQQIAAozIWVxYQhNhcg8hqQh5jSBThBIAggaQAngeAngSQB6g5BBBTILxPHI8AV0Qj/hhkBhGg");
	this.shape_117.setTransform(-19.8,11.4,0.028,0.028);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D8E0E2").s().p("AhsACIAAitIDZCqIAACtg");
	this.shape_118.setTransform(-30.4,12.1,0.028,0.028);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D8E0E2").s().p("AmUBnQFCi2FniLICABjQlfCYk2C6g");
	this.shape_119.setTransform(-32.2,15.5,0.028,0.028);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D8E0E2").s().p("AnRkeQHtsCNdnwICUBzQsTHUngJvQpkMUhOPeQhBA8gzA9QAwwEILsrg");
	this.shape_120.setTransform(-35.9,20.2,0.028,0.028);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D8E0E2").s().p("Ar3HrIhuCMQhDBVhrAOQhsANhVhCQhWhDgNhsQgNhrBChWITx5WQBBhVBrgOQBsgNBVBDQBWBCANBsQAOBshDBVIhuCNIQeM0IAACtIx+t+QBNhcA9hpQB5jThThAQgxgtg9gdQh7g6hABTIrwPIIcBVzQlpCLlCC5g");
	this.shape_121.setTransform(-34.6,11.7,0.028,0.028);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D8E0E2").s().p("AjXgjIAAivIGvFPIhyBWg");
	this.shape_122.setTransform(-29.5,12.7,0.028,0.028);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D8E0E2").s().p("AggDqIlekOQE4i6FdiaIBoBSIjMKfg");
	this.shape_123.setTransform(-31.8,16.2,0.028,0.028);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E6EBEB").s().p("AOVZlIAAgTQgEvWmPsQQlAp2orncQmOlVndjmQiUhIiMg0IhtgmQE1AkHmDoQIyENHoGPQJNHfFlI6QGkKfA4LmQhfBshwBjQjhDIkkCqQAHiwAAivg");
	this.shape_124.setTransform(-19.3,20.5,0.028,0.028);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E6EBEB").s().p("A0pkXILxvIQBBhTB6A6QA+AdAwAtQBTBAh5DTQg8BphNBcIboVhIpqKGg");
	this.shape_125.setTransform(-32.7,11.7,0.028,0.028);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D8E0E2").s().p("Av2PvIfp4oIrxvIQhBhTh6A6QgnASglAeIggAaQhTBAB4DTQA7BpBNBcI6VUgIhyhVIan0uIhriNQhDhVANhsQAOhsBVhCQBUhDBrANQBsAOBDBVITwZWQBDBWgNBrQgOBshVBDQhWBChrgNQhsgOhDhVIhtiMI6TUgIjVCOg");
	this.shape_126.setTransform(-19.3,12.5,0.028,0.028);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4F576C").s().p("AifVKQilAAh4h1Qh4h2AAilIAA9oQAAimB4h6QB4h7ClgBILUAAMAAAAqUg");
	this.shape_127.setTransform(-28.5,3.8,0.028,0.028);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#41485F").s().p("ApHVKMAAAgqUILyAAQClABB8B7QB8B7ABClIAAdoQgBCkh8B3Qh7B1imAAg");
	this.shape_128.setTransform(-25.2,3.8,0.028,0.028);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4F576C").s().p("ADQLMIvJrsQhVhCgNhpQgNhpBBhVIEjl5IViQnIkjF5QhBBVhqAOQgSACgRAAQhWAAhHg3g");
	this.shape_129.setTransform(-36.3,11.6,0.028,0.028);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#41485F").s().p("AtfkiIEnl9QBChVBpgOQBpgOBVBBIPKLtQBVBBANBqQAOBqhBBVIknF+g");
	this.shape_130.setTransform(-35.3,10.3,0.028,0.028);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4F576C").s().p("AmaL5QhqgPhAhWIkdl9IVywSIEdF9QBBBWgPBpQgPBphWBAIvVLeQhHA0hTAAQgSAAgUgDg");
	this.shape_131.setTransform(-16.8,11.6,0.028,0.028);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#41485F").s().p("AsvF9QhAhWAPhpQAQhrBWg/IPVreQBWhABpAPQBpAPBABXIEhGCI1yQSg");
	this.shape_132.setTransform(-17.8,10.2,0.028,0.028);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#4F576C").s().p("Eg/HADhIAAnBMB+OAAAIAAHBg");
	this.shape_133.setTransform(25.7,-7.2,0.029,0.029);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D8E0E2").s().p("EhmEBSZMAAAh+IQAAq8CZnUQBSj4B/jCQB+jDCxiVQE/kNH1h8QH0h9L4gBMCKxAAAQGbAAEWBlQEVBkCpDTQCeDEBJE0QBKEzgBHUMAAAA7nIi7AAMAAAg7nQAAmog7kSQg/kiiMiuQiPiyjyhSQjuhRlvAAMiKxAAAQrAAAnOBqQnwByktD+Qk3EEiSG5QiSG4AAKeMAAAB+Ig");
	this.shape_134.setTransform(-8.8,-14,0.028,0.028);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E6EBEB").s().p("EhjNBQ7MAAAh+IQAAqeCSm4QCSm5E3kEQEtj+HwhyQHOhqLBAAMCKwAAAQFvAADuBRQDyBSCPCyQCMCuA/EjQA7ERAAGoMAAAA7nIi0AAMAAAg7nQAAmQg2j8Qg1j9h1iQQhyiOjMhCQjMhClGAAMiKwAAAQqzAAm8BoQm8BokJDgQkSDniDGZQiCGYAAJxMAAAB+Ig");
	this.shape_135.setTransform(-8.8,-13.7,0.028,0.028);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E6EBEB").s().p("EhRlAvLMAAAhFHQAAogAukYQA2lECNinQCQipEdhFQEDg9HogBMAvSAAAQHLAAFWAsQFlAuEcBiQEdBjD6CkQDwCeDxDyQHpG4U1UnQMLMDOtOzIh4B2QqhqusAr+Q363+oonwIgGgCQjljljmiXQjtibkQhbQkQhdlUgqQlIgpm7AAMgvSAAAQnVAAjwA2Qj0A3hxCFQh7CQgvEzQgpEHAAHzMAAABFHg");
	this.shape_136.setTransform(-51.8,5.5,0.028,0.028);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D8E0E2").s().p("EhTjAwTMAAAhFGQgBo6A1koQA/ldCljDQCvjOFQhPQEThAH8AAMAvSAAAQHkAAFiAuQFqAuEkBlQEpBnECCnQEBCnECEBQItH2X+X/QMBMAKhKuIhfBeQuPuWspsfQ000nnqm5QjxjyjwieQj6ikkdhiQkchjllgtQlWgsnLAAMgvSAAAQnoAAkDA+QkdBDiQCqQiOCng2FEQguEYAAIgMAAABFGg");
	this.shape_137.setTransform(-51.8,5.3,0.028,0.028);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#41485F").s().p("ArRHGQi5AAiDiDQiEiEAAi5IAAgMQAAi5CEiEQCDiDC5AAIWiAAQC5AACECDQCECEAAC5IAAAMQAAC5iECEQiECDi5AAg");
	this.shape_138.setTransform(56.4,16.3,0.029,0.029);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4F576C").s().p("EgxWADgIAAnAMBitAAAIAAHAg");
	this.shape_139.setTransform(46,16.2,0.029,0.029);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#CCC8C6").s().p("AhpAyQgUAAgPgPQgPgPAAgUQAAgTAPgPQAPgPAUAAIEFAAIAABjg");
	this.shape_140.setTransform(54.5,20,0.028,0.028);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#CCC8C6").s().p("AhpAyQgUAAgPgPQgPgOAAgVQAAgUAPgOQAPgPAUAAIEFAAIAABjg");
	this.shape_141.setTransform(54.5,18,0.028,0.028);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CCC8C6").s().p("AhpAyQgUAAgPgOQgPgQAAgUQAAgUAPgOQAPgPAUAAIEFAAIAABjg");
	this.shape_142.setTransform(54.5,16,0.028,0.028);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#CCC8C6").s().p("AhpAyQgUAAgPgPQgPgOAAgVQAAgUAPgOQAPgPAUAAIEFAAIAABjg");
	this.shape_143.setTransform(54.5,14.1,0.028,0.028);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CCC8C6").s().p("AguAyQgUAAgQgOQgOgQgBgUQABgTAOgPQAQgPAUAAICPAAIAABjg");
	this.shape_144.setTransform(54.4,12.1,0.028,0.028);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_145.setTransform(54.8,12.1,0.028,0.028);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#DAD7D5").s().p("AguAyQgUAAgQgPQgOgPgBgUQABgUAOgOQAQgPAUAAICPAAIAABjg");
	this.shape_146.setTransform(54.4,10.1,0.028,0.028);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_147.setTransform(54.8,10.1,0.028,0.028);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#DAD7D5").s().p("AguAyQgUAAgQgOQgOgPgBgVQABgTAOgPQAQgPAUAAICPAAIAABjg");
	this.shape_148.setTransform(54.4,8.2,0.028,0.028);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_149.setTransform(54.8,8.2,0.028,0.028);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#DAD7D5").s().p("AguAyQgUAAgQgPQgOgPgBgUQABgTAOgPQAQgPAUAAICPAAIAABjg");
	this.shape_150.setTransform(54.4,6.2,0.028,0.028);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_151.setTransform(54.8,6.2,0.028,0.028);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#DAD7D5").s().p("AieAyQgVAAgPgPQgPgPAAgUQAAgTAPgPQAPgPAVAAIFvAAIAABjg");
	this.shape_152.setTransform(54,11.1,0.028,0.028);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_153.setTransform(54.8,11.1,0.028,0.028);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CCC8C6").s().p("AieAyQgVAAgPgPQgPgPAAgUQAAgTAPgPQAPgPAVAAIFvAAIAABjg");
	this.shape_154.setTransform(54,13.1,0.028,0.028);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_155.setTransform(54.8,13.1,0.028,0.028);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DAD7D5").s().p("AieAyQgVAAgPgOQgPgQAAgUQAAgUAPgOQAPgPAVAAIFvAAIAABjg");
	this.shape_156.setTransform(54,9.2,0.028,0.028);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_157.setTransform(54.8,9.2,0.028,0.028);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#DAD7D5").s().p("AieAyQgVAAgPgPQgPgOAAgVQAAgTAPgPQAPgPAVAAIFvAAIAABjg");
	this.shape_158.setTransform(54,7.2,0.028,0.028);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_159.setTransform(54.8,7.2,0.028,0.028);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#DAD7D5").s().p("AieAyQgVAAgPgOQgPgQAAgUQAAgUAPgOQAPgPAVAAIFvAAIAABjg");
	this.shape_160.setTransform(54,5.2,0.028,0.028);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CCC8C6").s().p("Ag5AyIAAhjIBzAAIAABjg");
	this.shape_161.setTransform(54.8,5.2,0.028,0.028);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F7C384").s().p("EgE8ggCIJ5AAIAABgIiSAAQgUAAgPAPQgPAPAAAVQAAAVAPAPQAPAPAUAAICSAAIAAD0IlwAAQgVAAgOAPQgPAPAAAVQAAAUAPAPQAOAPAVAAIFwAAMAAAAsaQAAFhk9DYQhiBEh3AvIhjAgg");
	this.shape_162.setTransform(53.7,17.5,0.028,0.028);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E6EBEB").s().p("Ak8T9MAAAgn5IJ5AAIAADnIlwAAQgVAAgOAPQgPAPAAAVQAAAVAPAPQAOAOAVAAIFwAAIAAD1IiSAAQgUAAgPAPQgPAPAAAUQAAAVAPAPQAPAPAUAAICSAAIAAD1IlwAAQgVAAgOAPQgPAOAAAVQAAAVAPAPQAOAPAVAAIFwAAIAAD0IiSAAQgUAAgPANQgPAPAAAVQAAAVAPAPQAPAOAUAAICSAAIAAD1IlwAAQgVAAgOAPQgPAPAAAVQAAAVAPAPQAOAOAVAAIFwAAIAAD1IiSAAQgUAAgPAPQgPAOAAAVQAAAVAPAPQAPAPAUAAICSAAIAAD1IlwAAQgVAAgOAPQgPAOAAAVQAAAVAPAPQAOAPAVAAIFwAAIAACUg");
	this.shape_163.setTransform(53.7,8.1,0.028,0.028);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F0A940").s().p("AkrfrQiLg7hrhrQhrhrg7iLQg9iPAAieMAAAg1JIMZAAMAAABAFIBjggQB3guBkhEQE9jZAAlgMAAAgsaIB1AAMAAAAspQAACeg9CPQg7CLhrBrQhrBriKA7QiQA9idAAQicAAiPg9g");
	this.shape_164.setTransform(52.8,17.6,0.028,0.028);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F0A940").s().p("Ag5AwIAAhfIBzAAIAABfg");
	this.shape_165.setTransform(54.8,11.8,0.028,0.028);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F0A940").s().p("Ag5B6IAAjzIBzAAIAADzg");
	this.shape_166.setTransform(54.8,12.6,0.028,0.028);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CCC8C6").s().p("AjYAyQgVAAgPgPQgPgPAAgUQAAgUAPgOQAPgPAVAAIHkAAIAABjg");
	this.shape_167.setTransform(54.2,21,0.028,0.028);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CCC8C6").s().p("AjYAyQgVAAgPgPQgPgPAAgUQAAgTAPgPQAPgPAVAAIHkAAIAABjg");
	this.shape_168.setTransform(54.2,19,0.028,0.028);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#CCC8C6").s().p("AjYAyQgVAAgPgPQgPgPAAgUQAAgTAPgPQAPgPAVAAIHkAAIAABjg");
	this.shape_169.setTransform(54.2,17,0.028,0.028);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#CCC8C6").s().p("AjYAyQgVAAgPgPQgPgPAAgUQAAgTAPgPQAPgPAVAAIHkAAIAABjg");
	this.shape_170.setTransform(54.2,15.1,0.028,0.028);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#DAD7D5").s().p("Ak8ArIAAhVIJ5AAIAABVg");
	this.shape_171.setTransform(53.7,4.3,0.028,0.028);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E6EBEB").s().p("AmXCHIAAkNILAAAIARADQAVAGARAJQA4AdAAA7QgBA6gyAaQgPAIgTAEIgQACIgVAAIg8ALIAAA2g");
	this.shape_172.setTransform(54,3.8,0.028,0.028);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#CCC8C6").s().p("Ag5AtIAAhVIBSAAQAOAAATgEIAABZg");
	this.shape_173.setTransform(54.8,4.3,0.028,0.028);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#CCC8C6").s().p("AmMAtIAAhZQATADAOAAIL4AAIAABWg");
	this.shape_174.setTransform(51.7,4.3,0.028,0.028);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#D8E0E2").s().p("AsEVHMAAAgqOIYJAAMAAAAqOg");
	this.shape_175.setTransform(52.8,8.3,0.028,0.028);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D8E0E2").s().p("ArjCqQgOAAgTgEQg0gLgigqQgjgqAAg4IAAgeQAAg/AtguQAugsA/AAIXHAAQBAAAAtAsQAtAuAAA/IAAAeQAAA4gjAqQgiAqg0ALQgTAEgOAAg");
	this.shape_176.setTransform(52.8,3.7,0.028,0.028);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#D8E0E2").s().p("EBzHBw2MAAAi6tQAAr7hrmvQh0nTkXj4QkWj4oEhkQnUhbtGAAMildAAAQmXAAkaBEQkkBIi4CYQi7CbhaD4QhZD5AAFoMAAABidIicAAMAAAhidQAAmIBpkYQBpkWDViwQDKimE1hPQE0hOG9gBMCldAAAQG5AAFBAWQFIAWD1AwQEdA3DSBdQDRBdCeCNQFBEdB+IWQBnGzAAL+MAAAC6tg");
	this.shape_177.setTransform(31.7,-16.7,0.028,0.028);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E6EBEB").s().p("EBwbBvoMAAAi6mQgBrzhlmZQhnmbjzjYQjyjYnKhZQnGhZtJAAMildAAAQmHAAkDA7QkIA+ieCCQihCEhMDYQhODZABFFMAAABiYIiNAAMAAAhiYQAAlpBZj3QBZj5C6iaQC4iXEjhHQEZhFGXABMCldAAAQNGgBHWBcQIGBjEXD3QEaD4B1HSQBsGwAAL6MAAAC6mg");
	this.shape_178.setTransform(31.7,-16.5,0.028,0.028);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#41485F").s().p("Eg2DAC+QhOgBg4g4Qg4g3ABhOIAAAAQgBhOA4g3QA4g4BOAAMBsHAAAQBOAAA4A4QA4A3AABOIAAAAQAABOg4A3Qg4A4hOABg");
	this.shape_179.setTransform(-87.9,35.5,0.047,0.047);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#41485F").s().p("EgyNABuQgsgBgegfQgggfAAgsIAAgGQAAgsAggeQAegfAsgBMBkaAAAQAsABAgAfQAeAeAAAsIAAAGQAAAsgeAfQggAfgsABg");
	this.shape_180.setTransform(-87.9,14.5,0.047,0.047);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#808288").s().p("EgB8AkpMAAAhJQID4AAMAAABJQg");
	this.shape_181.setTransform(-73.8,23.9,0.047,0.047);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#808288").s().p("EgB8AkpMAAAhJQID5AAMAAABJQg");
	this.shape_182.setTransform(-102.1,23.9,0.047,0.047);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#CCC8C6").s().p("AhCAfQgNAAgKgJQgJgJAAgNQAAgMAJgJQAKgJANAAICmAAIAAA9g");
	this.shape_183.setTransform(-92.5,30,0.047,0.047);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CCC8C6").s().p("AhCAgQgNgBgKgJQgJgJAAgNQAAgMAJgJQAKgJANAAICmAAIAAA+g");
	this.shape_184.setTransform(-92.5,27.9,0.047,0.047);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#CCC8C6").s().p("AhCAfQgNABgKgKQgJgJAAgNQAAgLAJgKQAKgKANAAICmAAIAAA+g");
	this.shape_185.setTransform(-92.5,25.9,0.047,0.047);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CCC8C6").s().p("AhCAgQgNAAgKgKQgJgKAAgMQAAgMAJgJQAKgKANABICmAAIAAA+g");
	this.shape_186.setTransform(-92.5,23.8,0.047,0.047);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#CCC8C6").s().p("AgcAfQgOABgKgKQgJgJAAgNQAAgMAJgJQAKgKAOAAIBaAAIAAA+g");
	this.shape_187.setTransform(-92.6,21.8,0.047,0.047);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CCC8C6").s().p("AgkAfIAAg+IBJAAIAAA+g");
	this.shape_188.setTransform(-92.2,21.8,0.047,0.047);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#DAD7D5").s().p("AgcAfQgOAAgKgJQgJgJAAgNQAAgMAJgJQAKgJAOAAIBaAAIAAA9g");
	this.shape_189.setTransform(-92.6,19.8,0.047,0.047);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#CCC8C6").s().p("AgkAfIAAg9IBJAAIAAA9g");
	this.shape_190.setTransform(-92.2,19.8,0.047,0.047);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#DAD7D5").s().p("AgcAgQgOAAgKgKQgJgKAAgMQAAgMAJgJQAKgKAOAAIBaAAIAAA/g");
	this.shape_191.setTransform(-92.6,17.7,0.047,0.047);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_192.setTransform(-92.2,17.7,0.047,0.047);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#DAD7D5").s().p("AgcAfQgOAAgKgJQgJgKAAgMQAAgMAJgJQAKgJAOAAIBaAAIAAA9g");
	this.shape_193.setTransform(-92.6,15.7,0.047,0.047);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#CCC8C6").s().p("AgkAfIAAg9IBJAAIAAA9g");
	this.shape_194.setTransform(-92.2,15.7,0.047,0.047);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#DAD7D5").s().p("AhlAfQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAIDrAAIAAA9g");
	this.shape_195.setTransform(-93,20.8,0.047,0.047);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#CCC8C6").s().p("AgkAfIAAg9IBJAAIAAA9g");
	this.shape_196.setTransform(-92.2,20.8,0.047,0.047);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#CCC8C6").s().p("AhlAgQgNgBgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAIDrAAIAAA+g");
	this.shape_197.setTransform(-93,22.8,0.047,0.047);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CCC8C6").s().p("AgkAgIAAg+IBJAAIAAA+g");
	this.shape_198.setTransform(-92.2,22.8,0.047,0.047);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#DAD7D5").s().p("AhlAfQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAIDrAAIAAA9g");
	this.shape_199.setTransform(-93,18.7,0.047,0.047);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#CCC8C6").s().p("AgkAfIAAg9IBJAAIAAA9g");
	this.shape_200.setTransform(-92.2,18.7,0.047,0.047);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#DAD7D5").s().p("AhlAfQgNABgJgKQgJgJAAgNQAAgMAJgJQAJgJANAAIDrAAIAAA9g");
	this.shape_201.setTransform(-93,16.7,0.047,0.047);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#CCC8C6").s().p("AgkAfIAAg9IBJAAIAAA9g");
	this.shape_202.setTransform(-92.2,16.7,0.047,0.047);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#DAD7D5").s().p("AhlAfQgNAAgJgJQgJgKAAgMQAAgMAJgJQAJgKANAAIDrAAIAAA+g");
	this.shape_203.setTransform(-93,14.6,0.047,0.047);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#CCC8C6").s().p("AgkAfIAAg+IBJAAIAAA+g");
	this.shape_204.setTransform(-92.2,14.6,0.047,0.047);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EF6077").s().p("AjJ0PIGTAAIAAA9IhcAAQgOAAgKAJQgJAKAAANQAAANAJAKQAKAJAOAAIBcAAIAACaIjqAAQgOAAgJAKQgJAJAAANQAAANAJAKQAJAJAOAAIDqAAIAAcDQAADfjKCJQhkBFhlAYg");
	this.shape_205.setTransform(-93.3,27.4,0.047,0.047);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E6EBEB").s().p("AjJMnIAA5NIGTAAIAACSIjqAAQgOAAgJAKQgJAJAAANQAAANAJAKQAJAJAOAAIDqAAIAACbIhcAAQgOAAgKAJQgJAKAAANQAAANAJAJQAKAKAOAAIBcAAIAACaIjqAAQgOAAgJAKQgJAJAAANQAAANAJAKQAJAJAOAAIDqAAIAACbIhcAAQgOAAgKAHQgJAJAAAOQAAANAJAJQAKAKAOAAIBcAAIAACaIjqAAQgOAAgJAKQgJAJAAANQAAANAJAKQAJAJAOAAIDqAAIAACbIhcAAQgOAAgKAJQgJAJAAANQAAAOAJAJQAKAJAOAAIBcAAIAACbIjqAAQgOAAgJAJQgJAKAAANQAAANAJAKQAJAJAOAAIDqAAIAABeg");
	this.shape_206.setTransform(-93.3,17.6,0.047,0.047);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#E52D42").s().p("AlcSYQiRiPAAjLMAAAghkIH7AAMAAAAofQBlgYBlhFQDLiJAAjfIAA8DIBLAAIAAcNQAADLiRCPQiRCPjMAAQjLAAiRiPg");
	this.shape_207.setTransform(-94.3,27.5,0.047,0.047);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#E52D42").s().p("AgkAeIAAg7IBJAAIAAA7g");
	this.shape_208.setTransform(-92.2,21.5,0.047,0.047);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#E52D42").s().p("AgkBNIAAiZIBJAAIAACZg");
	this.shape_209.setTransform(-92.2,22.3,0.047,0.047);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#CCC8C6").s().p("AiKAfQgOAAgJgJQgJgJAAgNQAAgMAJgJQAJgJAOAAIE1AAIAAA9g");
	this.shape_210.setTransform(-92.8,31,0.047,0.047);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#CCC8C6").s().p("AiKAfQgOAAgJgJQgJgJAAgNQAAgMAJgJQAJgJAOAAIE1AAIAAA9g");
	this.shape_211.setTransform(-92.8,28.9,0.047,0.047);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#CCC8C6").s().p("AiKAfQgOAAgJgJQgJgKAAgMQAAgMAJgJQAJgJAOAAIE1AAIAAA9g");
	this.shape_212.setTransform(-92.8,26.9,0.047,0.047);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#CCC8C6").s().p("AiKAfQgOAAgJgJQgJgKAAgMQAAgLAJgKQAJgKAOAAIE1AAIAAA+g");
	this.shape_213.setTransform(-92.8,24.9,0.047,0.047);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#DAD7D5").s().p("AjJAbIAAg1IGTAAIAAA1g");
	this.shape_214.setTransform(-93.3,13.7,0.047,0.047);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E6EBEB").s().p("AkDBVIAAipIHAAAIAjALQAkASAAAmQAAAkggAQQgQAIgQABIgOAAIgmAHIAAAig");
	this.shape_215.setTransform(-93,13.2,0.047,0.047);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#CCC8C6").s().p("AgkAcIAAg1IA0AAQAJAAAMgCIAAA3g");
	this.shape_216.setTransform(-92.2,13.7,0.047,0.047);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#CCC8C6").s().p("Aj9AcIAAg3QAMACAKAAIHlAAIAAA1g");
	this.shape_217.setTransform(-95.4,13.7,0.047,0.047);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#D8E0E2").s().p("AntNWIAA6rIPbAAIAAarg");
	this.shape_218.setTransform(-94.3,17.8,0.047,0.047);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#D8E0E2").s().p("AnXBrQgKAAgLgDQgigHgWgaQgWgbAAgiIAAgTQAAgoAdgdQAdgcApAAIOwAAQApAAAcAcQAdAdAAAoIAAATQAAAigWAbQgWAaghAHQgMADgJAAg");
	this.shape_219.setTransform(-94.3,13.1,0.047,0.047);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#CCC8C6").s().p("AhCAgQgNAAgKgKQgKgJABgNQgBgMAKgJQAKgKANAAICmAAIAAA/g");
	this.shape_220.setTransform(-79.7,29.9,0.047,0.047);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#CCC8C6").s().p("AhCAgQgNAAgKgKQgKgJABgNQgBgMAKgJQAKgKANAAICmAAIAAA/g");
	this.shape_221.setTransform(-79.7,27.9,0.047,0.047);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#CCC8C6").s().p("AhCAgQgNAAgKgKQgKgJABgNQgBgMAKgJQAKgKANAAICmAAIAAA/g");
	this.shape_222.setTransform(-79.7,25.8,0.047,0.047);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#CCC8C6").s().p("AhCAgQgNAAgKgKQgKgJABgNQgBgMAKgJQAKgKANAAICmAAIAAA/g");
	this.shape_223.setTransform(-79.7,23.7,0.047,0.047);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#CCC8C6").s().p("AgcAgQgOAAgKgKQgJgJAAgNQAAgMAJgJQAKgKAOAAIBaAAIAAA/g");
	this.shape_224.setTransform(-79.9,21.7,0.047,0.047);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_225.setTransform(-79.4,21.7,0.047,0.047);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#DAD7D5").s().p("AgcAgQgOAAgKgKQgJgJAAgNQAAgMAJgJQAKgKAOAAIBaAAIAAA/g");
	this.shape_226.setTransform(-79.9,19.6,0.047,0.047);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_227.setTransform(-79.4,19.6,0.047,0.047);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#DAD7D5").s().p("AgcAgQgOAAgKgKQgJgJAAgNQAAgMAJgJQAKgKAOAAIBaAAIAAA/g");
	this.shape_228.setTransform(-79.9,17.5,0.047,0.047);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_229.setTransform(-79.4,17.5,0.047,0.047);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#DAD7D5").s().p("AgcAgQgOAAgKgKQgJgJAAgNQAAgMAJgJQAKgKAOAAIBaAAIAAA/g");
	this.shape_230.setTransform(-79.9,15.5,0.047,0.047);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_231.setTransform(-79.4,15.5,0.047,0.047);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#DAD7D5").s().p("AhlAgQgNAAgJgKQgKgJABgNQgBgMAKgJQAJgKANAAIDqAAIAAA/g");
	this.shape_232.setTransform(-80.2,20.6,0.047,0.047);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_233.setTransform(-79.4,20.6,0.047,0.047);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#CCC8C6").s().p("AhlAgQgNAAgJgKQgKgJABgNQgBgMAKgJQAJgKANAAIDqAAIAAA/g");
	this.shape_234.setTransform(-80.2,22.7,0.047,0.047);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_235.setTransform(-79.4,22.7,0.047,0.047);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#DAD7D5").s().p("AhlAgQgNAAgJgKQgKgJABgNQgBgMAKgJQAJgKANAAIDqAAIAAA/g");
	this.shape_236.setTransform(-80.2,18.6,0.047,0.047);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_237.setTransform(-79.4,18.6,0.047,0.047);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#DAD7D5").s().p("AhlAgQgNAAgJgJQgKgKABgNQgBgMAKgJQAJgKANAAIDqAAIAAA/g");
	this.shape_238.setTransform(-80.2,16.5,0.047,0.047);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_239.setTransform(-79.4,16.5,0.047,0.047);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#DAD7D5").s().p("AhlAgQgNAAgJgKQgKgJABgNQgBgMAKgJQAJgKANAAIDqAAIAAA/g");
	this.shape_240.setTransform(-80.2,14.4,0.047,0.047);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#CCC8C6").s().p("AgkAgIAAg/IBJAAIAAA/g");
	this.shape_241.setTransform(-79.4,14.4,0.047,0.047);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#BEE4EB").s().p("AjJ0dIGTAAIAAA9IhcAAQgOAAgKAKQgJAJAAAOQAAANAJAJQAKAKAOAAIBcAAIAACdIjqAAQgNAAgKAJQgJAJAAAOQAAANAJAJQAKAKANAAIDqAAIAAcXQAADhjKCKQhjBGhmAYg");
	this.shape_242.setTransform(-80.5,27.4,0.047,0.047);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#E6EBEB").s().p("AjJMvIAA5dIGTAAIAACTIjqAAQgNAAgKAJQgJAKAAAOQAAAMAJAKQAKAJANAAIDqAAIAACdIhcAAQgOAAgKAKQgJAJAAANQAAAOAJAJQAKAKAOAAIBcAAIAACbIjqAAQgNAAgKAKQgJAJAAAOQAAANAJAKQAKAJANAAIDqAAIAACdIhcAAQgOAAgKAHQgJAKAAANQAAANAJAKQAKAJAOAAIBcAAIAACcIjqAAQgNAAgKAKQgJAJAAAOQAAANAJAJQAKAKANAAIDqAAIAACdIhcAAQgOAAgKAJQgJAJAAANQAAAOAJAKQAKAJAOAAIBcAAIAACcIjqAAQgNAAgKAKQgJAJAAANQAAAOAJAJQAKAKANAAIDqAAIAABeg");
	this.shape_243.setTransform(-80.5,17.4,0.047,0.047);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#91D0D6").s().p("AlcSlQiRiRAAjMMAAAgh9IH6AAMAAAAo7QBmgXBlhGQDKiLAAjhIAA8WIBMAAIAAchQgBDMiQCRQiRCQjMABQjLAAiRiRg");
	this.shape_244.setTransform(-81.5,27.5,0.047,0.047);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#91D0D6").s().p("AgkAeIAAg7IBJAAIAAA7g");
	this.shape_245.setTransform(-79.4,21.4,0.047,0.047);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#91D0D6").s().p("AgkBOIAAibIBJAAIAACbg");
	this.shape_246.setTransform(-79.4,22.2,0.047,0.047);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#CCC8C6").s().p("AiKAgQgNAAgKgKQgJgJAAgNQAAgMAJgJQAKgKANAAIE1AAIAAA/g");
	this.shape_247.setTransform(-80,31,0.047,0.047);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#CCC8C6").s().p("AiKAgQgNAAgKgJQgJgKAAgNQAAgMAJgJQAKgKANAAIE1AAIAAA/g");
	this.shape_248.setTransform(-80,28.9,0.047,0.047);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#CCC8C6").s().p("AiKAgQgNAAgKgKQgJgJAAgNQAAgMAJgJQAKgKANAAIE1AAIAAA/g");
	this.shape_249.setTransform(-80,26.8,0.047,0.047);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#CCC8C6").s().p("AiKAgQgNAAgKgKQgJgJAAgNQAAgMAJgKQAKgJANAAIE1AAIAAA/g");
	this.shape_250.setTransform(-80,24.8,0.047,0.047);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#DAD7D5").s().p("AjJAcIAAg3IGTAAIAAA3g");
	this.shape_251.setTransform(-80.5,13.5,0.047,0.047);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E6EBEB").s().p("AkDBWIAAirIHAAAIAkALQAjATAAAmQAAAkggAQQgQAJgQABIgOAAIgmAHIAAAig");
	this.shape_252.setTransform(-80.2,12.9,0.047,0.047);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#CCC8C6").s().p("AgkAdIAAg3IA0AAIAVgCIAAA5g");
	this.shape_253.setTransform(-79.4,13.5,0.047,0.047);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#CCC8C6").s().p("Aj9AdIAAg5QAOACAHAAIHlAAIAAA3g");
	this.shape_254.setTransform(-82.7,13.5,0.047,0.047);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#D8E0E2").s().p("AntNfIAA69IPbAAIAAa9g");
	this.shape_255.setTransform(-81.5,17.6,0.047,0.047);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#D8E0E2").s().p("AnXBsQgIAAgNgCQgigHgWgbQgWgbAAgjIAAgTQAAgpAdgcQAdgdApAAIOwAAQApAAAcAdQAdAcAAApIAAATQAAAjgWAbQgWAbghAHIgVACg");
	this.shape_256.setTransform(-81.5,12.8,0.047,0.047);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#CCC8C6").s().p("AhIAjQgPAAgLgLQgKgKAAgOQAAgNAKgLQALgKAPAAIC1AAIAABFg");
	this.shape_257.setTransform(-85.6,29.6,0.047,0.047);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#CCC8C6").s().p("AhIAjQgPAAgLgLQgKgKAAgOQAAgNAKgLQALgKAPAAIC1AAIAABFg");
	this.shape_258.setTransform(-85.6,27.3,0.047,0.047);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#CCC8C6").s().p("AhIAjQgPAAgLgKQgKgLAAgOQAAgNAKgLQALgKAPAAIC1AAIAABFg");
	this.shape_259.setTransform(-85.6,25,0.047,0.047);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#CCC8C6").s().p("AhIAjQgPAAgLgKQgKgLAAgOQAAgNAKgKQALgLAPAAIC1AAIAABFg");
	this.shape_260.setTransform(-85.6,22.8,0.047,0.047);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#CCC8C6").s().p("AgfAjQgPAAgLgLQgKgKAAgOQAAgNAKgKQALgLAPAAIBjAAIAABFg");
	this.shape_261.setTransform(-85.8,20.5,0.047,0.047);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_262.setTransform(-85.3,20.5,0.047,0.047);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#DAD7D5").s().p("AgfAjQgPAAgLgKQgKgLAAgOQAAgNAKgLQALgKAPAAIBjAAIAABFg");
	this.shape_263.setTransform(-85.8,18.2,0.047,0.047);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_264.setTransform(-85.3,18.2,0.047,0.047);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#DAD7D5").s().p("AgfAjQgPAAgLgLQgKgKAAgOQAAgNAKgLQALgKAPAAIBjAAIAABFg");
	this.shape_265.setTransform(-85.8,16,0.047,0.047);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_266.setTransform(-85.3,16,0.047,0.047);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#DAD7D5").s().p("AgfAjQgPAAgLgKQgKgLAAgOQAAgNAKgKQALgLAPAAIBjAAIAABFg");
	this.shape_267.setTransform(-85.8,13.7,0.047,0.047);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_268.setTransform(-85.3,13.7,0.047,0.047);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#DAD7D5").s().p("AhuAjQgPAAgLgKQgKgLAAgOQAAgNAKgKQALgLAPAAIEBAAIAABFg");
	this.shape_269.setTransform(-86.2,19.4,0.047,0.047);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_270.setTransform(-85.3,19.4,0.047,0.047);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#CCC8C6").s().p("AhuAjQgPAAgLgLQgKgKAAgOQAAgNAKgKQALgLAPAAIEBAAIAABFg");
	this.shape_271.setTransform(-86.2,21.6,0.047,0.047);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_272.setTransform(-85.3,21.6,0.047,0.047);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#DAD7D5").s().p("AhuAjQgPAAgLgLQgKgKAAgOQAAgNAKgLQALgKAPAAIEBAAIAABFg");
	this.shape_273.setTransform(-86.2,17.1,0.047,0.047);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_274.setTransform(-85.3,17.1,0.047,0.047);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#DAD7D5").s().p("AhuAjQgPAAgLgKQgKgLAAgOQAAgNAKgLQALgKAPAAIEBAAIAABFg");
	this.shape_275.setTransform(-86.2,14.8,0.047,0.047);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_276.setTransform(-85.3,14.8,0.047,0.047);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#DAD7D5").s().p("AhuAjQgPAAgLgLQgKgKAAgOQAAgNAKgKQALgLAPAAIEBAAIAABFg");
	this.shape_277.setTransform(-86.2,12.6,0.047,0.047);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#CCC8C6").s().p("AgnAjIAAhFIBQAAIAABFg");
	this.shape_278.setTransform(-85.3,12.6,0.047,0.047);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F7C384").s().p("Ajd2bIG7AAIAABDIhmAAQgPAAgKALQgKAKAAAOQAAAPAKAKQAKALAPAAIBmAAIAACrIkBAAQgPAAgKALQgKAKAAAOQAAAPAKAKQAKALAPAAIEBAAIAAfHQAAD2jeCYQhuBMhvAag");
	this.shape_279.setTransform(-86.5,26.7,0.047,0.047);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#E6EBEB").s().p("AjdN+IAA77IG7AAIAAChIkBAAQgPAAgKALQgKAKAAAPQAAAOAKALQAKAKAPAAIEBAAIAACsIhmAAQgPAAgKAKQgKAKAAAPQAAAPAKAKQAKAKAPAAIBmAAIAACsIkBAAQgPAAgKAKQgKALAAAOQAAAPAKAKQAKALAPAAIEBAAIAACrIhmAAQgPAAgKAIQgKALAAAOQAAAPAKAKQAKALAPAAIBmAAIAACrIkBAAQgPAAgKALQgKAKAAAPQAAAOAKALQAKAKAPAAIEBAAIAACrIhmAAQgPAAgKALQgKAKAAAPQAAAOAKALQAKAKAPAAIBmAAIAACsIkBAAQgPAAgKAKQgKAKAAAPQAAAPAKAKQAKAKAPAAIEBAAIAABog");
	this.shape_280.setTransform(-86.5,15.8,0.047,0.047);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#F0A940").s().p("Al+UYQieifAAjgMAAAglOIIrAAMAAAAs4QBvgbBvhMQDeiXAAj3IAA/HIBSAAIAAfSQAADgieCfQifCejgAAQjfAAifieg");
	this.shape_281.setTransform(-87.6,26.9,0.047,0.047);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#F0A940").s().p("AgnAhIAAhBIBQAAIAABBg");
	this.shape_282.setTransform(-85.3,20.2,0.047,0.047);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#F0A940").s().p("AgnBVIAAipIBQAAIAACpg");
	this.shape_283.setTransform(-85.3,21.1,0.047,0.047);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#CCC8C6").s().p("AiXAjQgPAAgLgKQgKgLAAgOQAAgNAKgKQALgLAPAAIFTAAIAABFg");
	this.shape_284.setTransform(-86,28.4,0.047,0.047);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#CCC8C6").s().p("AiXAjQgPAAgLgKQgKgLAAgOQAAgNAKgLQALgKAPAAIFTAAIAABFg");
	this.shape_285.setTransform(-86,26.2,0.047,0.047);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#CCC8C6").s().p("AiXAjQgPAAgLgLQgKgKAAgOQAAgNAKgLQALgKAPAAIFTAAIAABFg");
	this.shape_286.setTransform(-86,23.9,0.047,0.047);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#DAD7D5").s().p("AjdAeIAAg7IG7AAIAAA7g");
	this.shape_287.setTransform(-86.5,11.5,0.047,0.047);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#E6EBEB").s().p("AkcBeIAAi7IHsAAIAnAMQAmAVAAApQAAAogjASQgRAJgSABIgPAAIgqAIIAAAlg");
	this.shape_288.setTransform(-86.2,10.9,0.047,0.047);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#CCC8C6").s().p("AgnAgIAAg8IA4AAQALAAANgDIAAA/g");
	this.shape_289.setTransform(-85.3,11.5,0.047,0.047);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#CCC8C6").s().p("AkVAgIAAg/QANADAKAAIIUAAIAAA8g");
	this.shape_290.setTransform(-88.9,11.5,0.047,0.047);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#D8E0E2").s().p("AocOzIAA9lIQ5AAIAAdlg");
	this.shape_291.setTransform(-87.6,16.1,0.047,0.047);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#D8E0E2").s().p("AoGB2QgKABgMgDQglgIgYgdQgYgeAAgmIAAgVQAAgtAfgfQAgggAsABIQMAAQAsgBAgAgQAgAfAAAtIAAAVQAAAmgZAeQgXAdglAIQgMADgLgBg");
	this.shape_292.setTransform(-87.6,10.8,0.047,0.047);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#CCC8C6").s().p("AiXAjQgPAAgKgLQgLgKAAgOQAAgNALgLQAKgKAPAAIFTAAIAABFg");
	this.shape_293.setTransform(-86.4,30.7,0.047,0.047);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#CCC8C6").s().p("AhbArQgTAAgMgNQgNgMAAgSQAAgRANgMQAMgNATAAIDjAAIAABVg");
	this.shape_294.setTransform(103.7,33.7,0.028,0.028);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#CCC8C6").s().p("AhbArQgTAAgMgMQgNgNAAgSQAAgRANgMQAMgNATAAIDjAAIAABVg");
	this.shape_295.setTransform(103.7,32,0.028,0.028);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#CCC8C6").s().p("AhbArQgTAAgMgMQgNgNAAgSQAAgQANgNQAMgNATAAIDjAAIAABVg");
	this.shape_296.setTransform(103.7,30.3,0.028,0.028);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#CCC8C6").s().p("AhbArQgTAAgMgNQgNgNAAgRQAAgQANgNQAMgNATAAIDjAAIAABVg");
	this.shape_297.setTransform(103.7,28.6,0.028,0.028);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#CCC8C6").s().p("AgoArQgTAAgMgNQgNgNAAgRQAAgRANgMQAMgNATAAIB9AAIAABVg");
	this.shape_298.setTransform(103.5,26.9,0.028,0.028);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_299.setTransform(103.9,26.9,0.028,0.028);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#DAD7D5").s().p("AgoArQgTAAgMgNQgNgNAAgRQAAgQANgNQAMgNATAAIB9AAIAABVg");
	this.shape_300.setTransform(103.5,25.2,0.028,0.028);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_301.setTransform(103.9,25.2,0.028,0.028);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#DAD7D5").s().p("AgoArQgTAAgMgNQgNgMAAgSQAAgRANgMQAMgNATAAIB9AAIAABVg");
	this.shape_302.setTransform(103.5,23.5,0.028,0.028);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_303.setTransform(103.9,23.5,0.028,0.028);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#DAD7D5").s().p("AgoArQgTAAgMgNQgNgMAAgSQAAgRANgMQAMgNATAAIB9AAIAABVg");
	this.shape_304.setTransform(103.5,21.8,0.028,0.028);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_305.setTransform(103.9,21.8,0.028,0.028);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#DAD7D5").s().p("AiKArQgSAAgNgMQgNgOAAgRQAAgQANgNQANgNASAAIFBAAIAABVg");
	this.shape_306.setTransform(103.3,26,0.028,0.028);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_307.setTransform(103.9,26,0.028,0.028);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#CCC8C6").s().p("AiKArQgSAAgNgNQgNgMAAgSQAAgRANgMQANgNASAAIFBAAIAABVg");
	this.shape_308.setTransform(103.3,27.7,0.028,0.028);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_309.setTransform(103.9,27.7,0.028,0.028);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#DAD7D5").s().p("AiKArQgSAAgNgNQgNgNAAgRQAAgRANgMQANgNASAAIFBAAIAABVg");
	this.shape_310.setTransform(103.3,24.3,0.028,0.028);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_311.setTransform(103.9,24.3,0.028,0.028);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#DAD7D5").s().p("AiKArQgSAAgNgNQgNgMAAgSQAAgRANgMQANgNASAAIFBAAIAABVg");
	this.shape_312.setTransform(103.3,22.6,0.028,0.028);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_313.setTransform(103.9,22.6,0.028,0.028);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#DAD7D5").s().p("AiKArQgSAAgNgMQgNgNAAgSQAAgRANgMQANgNASAAIFBAAIAABVg");
	this.shape_314.setTransform(103.3,20.9,0.028,0.028);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#CCC8C6").s().p("AgyArIAAhVIBkAAIAABVg");
	this.shape_315.setTransform(103.9,20.9,0.028,0.028);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#EF6077").s().p("Ai9btIhXgHMAAAg3UIIpAAIAABUIiAAAQgSAAgMANQgNAMAAASQAAASANANQAMANASAAICAAAIAADTIlBAAQgTAAgMANQgNANAAASQAAASANANQAMAMATAAIFBAAMAAAAtfQAACLkVAZQg1AFg8AAQglAAgngCg");
	this.shape_316.setTransform(103,31.5,0.028,0.028);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#E6EBEB").s().p("AkUROMAAAgibIIpAAIAADHIlBAAQgTAAgMANQgNAMAAATQAAASANANQAMAMATAAIFBAAIAADUIiAAAQgSgBgMAOQgNAMAAASQAAASANANQAMANASAAICAAAIAADTIlBAAQgTAAgMANQgNAMAAATQAAASANAMQAMAOATgBIFBAAIAADUIiAAAQgSAAgMALQgNAMAAASQAAASANANQAMANASAAICAAAIAADTIlBAAQgTAAgMANQgNAMAAASQAAATANANQAMANATAAIFBAAIAADSIiAAAQgSABgMAMQgNANAAASQAAASANANQAMAMASAAICAAAIAADUIlBAAQgTAAgMANQgNANAAARQAAASANAOQAMAMATAAIFBAAIAACAg");
	this.shape_317.setTransform(103,23.4,0.028,0.028);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#E52D42").s().p("AnbbkQjHgsABhaMAAAg1nIKzAAMAAAA3UIBXgcQBogoBWg7QEWi7gBkwMAAAgmVIBmAAMAAAAurQAABKjFAmQiyAjkrAAQkwAAirgmg");
	this.shape_318.setTransform(102.1,31.6,0.028,0.028);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#E52D42").s().p("AgyApIAAhRIBkAAIAABRg");
	this.shape_319.setTransform(103.9,26.6,0.028,0.028);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#E52D42").s().p("AgyBpIAAjRIBkAAIAADRg");
	this.shape_320.setTransform(103.9,27.3,0.028,0.028);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#CCC8C6").s().p("Ai9ArQgSAAgNgNQgNgNAAgRQAAgRANgMQANgNASAAIGnAAIAABVg");
	this.shape_321.setTransform(103.4,34.5,0.028,0.028);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#CCC8C6").s().p("Ai9ArQgSAAgNgMQgNgNAAgSQAAgRANgMQANgNASAAIGnAAIAABVg");
	this.shape_322.setTransform(103.4,32.8,0.028,0.028);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#CCC8C6").s().p("Ai9ArQgSAAgNgMQgNgNAAgSQAAgRANgMQANgNASAAIGnAAIAABVg");
	this.shape_323.setTransform(103.4,31.1,0.028,0.028);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#CCC8C6").s().p("Ai9ArQgSAAgNgNQgNgMAAgSQAAgQANgNQANgNASAAIGnAAIAABVg");
	this.shape_324.setTransform(103.4,29.4,0.028,0.028);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#DAD7D5").s().p("AkUAlIAAhKIIpAAIAABKg");
	this.shape_325.setTransform(103,20.1,0.028,0.028);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#E6EBEB").s().p("AljB0IAAjnIJmAAIAwAPQAxAZAAAzQAAAxgsAXIgsAMIgTAAIg0AKIAAAug");
	this.shape_326.setTransform(103.2,19.7,0.028,0.028);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#CCC8C6").s().p("AgyAnIAAhKIBIAAQAPAAANgDIAABNg");
	this.shape_327.setTransform(103.9,20.1,0.028,0.028);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#CCC8C6").s().p("AlZAnIAAhNQAOADAPAAIKXAAIAABKg");
	this.shape_328.setTransform(101.2,20.1,0.028,0.028);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#D8E0E2").s().p("AqhSPMAAAgkcIVDAAMAAAAkcg");
	this.shape_329.setTransform(102.1,23.5,0.028,0.028);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#D8E0E2").s().p("AshCSQgPAAgOgDQgugKgdgkQgegkAAgvIAAgaQAAg3AngnQAngnA4AAIZDAAQA4AAAnAnQAnAnAAA3IAAAaQAAAvgeAkQgdAkguAKQgOADgPAAg");
	this.shape_330.setTransform(101.7,19.6,0.028,0.028);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#CCC8C6").s().p("ApsCVQg+ABgrgsQgsgsABg9IAAgBQgBg+AsgrQArgrA+gBITZAAQA9ABAsArQArArAAA+IAAABQAAA9grAsQgsAsg9gBg");
	this.shape_331.setTransform(102.2,36.6,0.028,0.028);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#DAD7D5").s().p("AsiC9QhPABg4g4Qg4g4AAhOQAAhOA4g4QA4g2BPAAICyAAQg7ABgsArQguAtAAA8IAAADQAAA7AuArQAtAsA+gBITZAAQA9ABApgsQAqgqAAg8IAAgDQAAg9gqgsQgogrg6gBICyAAQBQAAA3A2QA4A4AABOQAABOg4A4Qg3A4hQgBg");
	this.shape_332.setTransform(102.2,36.7,0.028,0.028);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#5AA4A4").s().p("A0mE8QkCg+iOhRQiShTAAhaQAAhaCShTQCOhQECg+QIjiDMDAAQMEAAIjCDQECA+COBQQCSBTAABaQAABaiSBTQiOBRkCA+QojCDsEAAQsDAAojiDg");
	this.shape_333.setTransform(24.9,33.2,0.029,0.029);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.9,-37.2,210,74.5);


(lib.Tween113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414849").s().p("Al0sPQAag0A8gzQB5hlCmAFQCOAFB2CdQA8BOAfBNIK2RaMggrAIWgAhptNQgyAXgTA0QgTA1AXAyQAYAyA0AUQA0ATAxgYQAygXATg1QATg0gXgyQgYgzgygTQgXgIgXAAQgdAAgcANg");
	this.shape.setTransform(12.9,20.3,0.082,0.082,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414849").s().p("A25DNIgBgSQABijBihxQBjh0CMAAMAjQAAAQCMAABjB0QBjBxAACjIAAASg");
	this.shape_1.setTransform(-10,23.8,0.082,0.082,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414849").s().p("AkyC1QgoAAgcgcQgdgcAAgoIAAkJIMnAAIAAEJQAAAogdAcQgcAcgoAAg");
	this.shape_2.setTransform(23.4,32.1,0.082,0.082,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414849").s().p("AkyC1QgoAAgcgcQgcgcAAgoIAAkKIMlAAIAAEKQAAAogcAcQgcAcgoAAg");
	this.shape_3.setTransform(-23.4,32.1,0.082,0.082,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414849").s().p("EgzHAHLIgBgpQAAiyA8ikQA5icBoh5QBph6CHhDQCMhFCaAAMBOrAAAQCaAACMBFQCHBDBpB6QBoB5A6CcQA7CkAACyIgBApg");
	this.shape_4.setTransform(0,26.9,0.082,0.082,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7CECD").s().p("AwkDvQhkAAhGhGQhGhHAAhiQAAhiBGhGQBGhGBkAAMAhJAAAQBkAABGBGQBGBGAABiQAABihGBHQhGBGhkAAg");
	this.shape_5.setTransform(-9.8,20.1,0.082,0.082,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFB").s().p("AgkDkQhfgQg4hNQg4hPAQhcQAPhfBOg3QBOg4BdAPQBfAQA3BOQA4BNgPBdQgPBehPA4Qg9AshHAAQgSAAgUgDg");
	this.shape_6.setTransform(0.7,-10.8,0.082,0.082,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414849").s().p("AhwKxQiMgXh3hLQh0hJhQhuQipjsAvkcQAXiMBMh3QBIh0BwhQQDripEcAvQCMAYB3BLQBzBJBQBuQCpDsgvEbQgvEejrCqQi4CEjXAAQg5AAg/gLg");
	this.shape_7.setTransform(0.7,-10.8,0.082,0.082,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8E0E2").s().p("AtV3OIREjTMAJnAxwIxEDTg");
	this.shape_8.setTransform(-4.4,-11.8,0.082,0.082,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8E0E2").s().p("EgYGAiZQgGhmABirQAElYAmlhQB8xpGusgQGvsgOdocQEhipExh7QCYg8BfgcIEuKfQg6gNhiAFQjFAJjMBYQqMEZnVO/QkDINgoIzQghHDBsHFQBNFECLElQBGCTA2BRg");
	this.shape_9.setTransform(5.8,5.2,0.082,0.082,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AoFB3QgXgzgPg+IgMgzIRfjYIAJA1QAJBAgCA3QgGCvhuAVIsVCYQgNADgNAAQhcAAg+iPg");
	this.shape_10.setTransform(-7.4,4.7,0.082,0.082,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ApGCQQgNgLgDgSQgEgSAIgPQAIgOAOgDIRojYQAOgCANAKQANALADARQAEASgIAPQgIAPgOADIxoDYIgGAAQgLAAgKgIg");
	this.shape_11.setTransform(-1.4,-27.3,0.082,0.082,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ArPCqQgPgKgDgSQgEgSALgPQAKgPASgEIVtkKQARgDAQAKQAPAKADASQAEASgLAPQgKAPgSADI1tELIgJABQgNAAgLgIg");
	this.shape_12.setTransform(-0.4,-32.1,0.082,0.082,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#414849").s().p("Aq7iUIV3kOIgUJrIxpDag");
	this.shape_13.setTransform(-0.5,-29.5,0.082,0.082,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#414849").s().p("AqBDeQgvgfgLg4QgLg4AgguQAgguA4gLIRqjaQA4gLAvAgQAuAfALA4QALA4ggAvQggAtg3ALIxqDaQgPADgNAAQgoAAgjgYg");
	this.shape_14.setTransform(-1.7,-25.9,0.082,0.082,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#414849").s().p("AqBDeQgvgggLg3QgLg4AggvQAggtA3gLIRrjaQA3gLAvAgQAvAgALA3QALA4ggAvQggAtg4ALIxqDaQgOADgNAAQgoAAgjgYg");
	this.shape_15.setTransform(-7.1,2.3,0.082,0.082,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-33.6,53.4,67.2);


(lib.Tween112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414849").s().p("Al0sPQAag0A8gzQB5hlCmAFQCOAFB2CdQA8BOAfBNIK2RaMggrAIWgAhptNQgyAXgTA0QgTA1AXAyQAYAyA0AUQA0ATAxgYQAygXATg1QATg0gXgyQgYgzgygTQgXgIgXAAQgdAAgcANg");
	this.shape.setTransform(12.9,20.3,0.082,0.082,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414849").s().p("A25DNIgBgSQABijBihxQBjh0CMAAMAjQAAAQCMAABjB0QBjBxAACjIAAASg");
	this.shape_1.setTransform(-10,23.8,0.082,0.082,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414849").s().p("AkyC1QgoAAgcgcQgdgcAAgoIAAkJIMnAAIAAEJQAAAogdAcQgcAcgoAAg");
	this.shape_2.setTransform(23.4,32.1,0.082,0.082,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414849").s().p("AkyC1QgoAAgcgcQgcgcAAgoIAAkKIMlAAIAAEKQAAAogcAcQgcAcgoAAg");
	this.shape_3.setTransform(-23.4,32.1,0.082,0.082,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414849").s().p("EgzHAHLIgBgpQAAiyA8ikQA5icBoh5QBph6CHhDQCMhFCaAAMBOrAAAQCaAACMBFQCHBDBpB6QBoB5A6CcQA7CkAACyIgBApg");
	this.shape_4.setTransform(0,26.9,0.082,0.082,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7CECD").s().p("AwkDvQhkAAhGhGQhGhHAAhiQAAhiBGhGQBGhGBkAAMAhJAAAQBkAABGBGQBGBGAABiQAABihGBHQhGBGhkAAg");
	this.shape_5.setTransform(-9.8,20.1,0.082,0.082,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFB").s().p("AgkDkQhfgQg4hNQg4hPAQhcQAPhfBOg3QBOg4BdAPQBfAQA3BOQA4BNgPBdQgPBehPA4Qg9AshHAAQgSAAgUgDg");
	this.shape_6.setTransform(0.7,-10.8,0.082,0.082,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414849").s().p("AhwKxQiMgXh3hLQh0hJhQhuQipjsAvkcQAXiMBMh3QBIh0BwhQQDripEcAvQCMAYB3BLQBzBJBQBuQCpDsgvEbQgvEejrCqQi4CEjXAAQg5AAg/gLg");
	this.shape_7.setTransform(0.7,-10.8,0.082,0.082,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8E0E2").s().p("AtV3OIREjTMAJnAxwIxEDTg");
	this.shape_8.setTransform(-4.4,-11.8,0.082,0.082,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8E0E2").s().p("EgYGAiZQgGhmABirQAElYAmlhQB8xpGusgQGvsgOdocQEhipExh7QCYg8BfgcIEuKfQg6gNhiAFQjFAJjMBYQqMEZnVO/QkDINgoIzQghHDBsHFQBNFECLElQBGCTA2BRg");
	this.shape_9.setTransform(5.8,5.2,0.082,0.082,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AoFB3QgXgzgPg+IgMgzIRfjYIAJA1QAJBAgCA3QgGCvhuAVIsVCYQgNADgNAAQhcAAg+iPg");
	this.shape_10.setTransform(-7.4,4.7,0.082,0.082,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ApGCQQgNgLgDgSQgEgSAIgPQAIgOAOgDIRojYQAOgCANAKQANALADARQAEASgIAPQgIAPgOADIxoDYIgGAAQgLAAgKgIg");
	this.shape_11.setTransform(-1.4,-27.3,0.082,0.082,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ArPCqQgPgKgDgSQgEgSALgPQAKgPASgEIVtkKQARgDAQAKQAPAKADASQAEASgLAPQgKAPgSADI1tELIgJABQgNAAgLgIg");
	this.shape_12.setTransform(-0.4,-32.1,0.082,0.082,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#414849").s().p("Aq7iUIV3kOIgUJrIxpDag");
	this.shape_13.setTransform(-0.5,-29.5,0.082,0.082,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#414849").s().p("AqBDeQgvgfgLg4QgLg4AgguQAgguA4gLIRqjaQA4gLAvAgQAuAfALA4QALA4ggAvQggAtg3ALIxqDaQgPADgNAAQgoAAgjgYg");
	this.shape_14.setTransform(-1.7,-25.9,0.082,0.082,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#414849").s().p("AqBDeQgvgggLg3QgLg4AggvQAggtA3gLIRrjaQA3gLAvAgQAvAgALA3QALA4ggAvQggAtg4ALIxqDaQgOADgNAAQgoAAgjgYg");
	this.shape_15.setTransform(-7.1,2.3,0.082,0.082,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-33.6,53.4,67.2);


(lib.Tween111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414849").s().p("Al0sPQAag0A8gzQB5hlCmAFQCOAFB2CdQA8BOAfBNIK2RaMggrAIWgAhptNQgyAXgTA0QgTA1AXAyQAYAyA0AUQA0ATAxgYQAygXATg1QATg0gXgyQgYgzgygTQgXgIgXAAQgdAAgcANg");
	this.shape.setTransform(-12.9,20.3,0.082,0.082);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414849").s().p("A25DNIgBgSQABijBihxQBjh0CMAAMAjQAAAQCMAABjB0QBjBxAACjIAAASg");
	this.shape_1.setTransform(10,23.8,0.082,0.082);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414849").s().p("AkyC1QgoAAgcgcQgdgcAAgoIAAkJIMnAAIAAEJQAAAogdAcQgcAcgoAAg");
	this.shape_2.setTransform(-23.4,32.1,0.082,0.082);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414849").s().p("AkyC1QgoAAgcgcQgcgcAAgoIAAkKIMlAAIAAEKQAAAogcAcQgcAcgoAAg");
	this.shape_3.setTransform(23.4,32.1,0.082,0.082);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414849").s().p("EgzHAHLIgBgpQAAiyA8ikQA5icBoh5QBph6CHhDQCMhFCaAAMBOrAAAQCaAACMBFQCHBDBpB6QBoB5A6CcQA7CkAACyIgBApg");
	this.shape_4.setTransform(0,26.9,0.082,0.082);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7CECD").s().p("AwkDvQhkAAhGhGQhGhHAAhiQAAhiBGhGQBGhGBkAAMAhJAAAQBkAABGBGQBGBGAABiQAABihGBHQhGBGhkAAg");
	this.shape_5.setTransform(9.8,20.1,0.082,0.082);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFB").s().p("AgkDkQhfgQg4hNQg4hPAQhcQAPhfBOg3QBOg4BdAPQBfAQA3BOQA4BNgPBdQgPBehPA4Qg9AshHAAQgSAAgUgDg");
	this.shape_6.setTransform(-0.7,-10.8,0.082,0.082);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414849").s().p("AhwKxQiMgXh3hLQh0hJhQhuQipjsAvkcQAXiMBMh3QBIh0BwhQQDripEcAvQCMAYB3BLQBzBJBQBuQCpDsgvEbQgvEejrCqQi4CEjXAAQg5AAg/gLg");
	this.shape_7.setTransform(-0.7,-10.8,0.082,0.082);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8E0E2").s().p("AtV3OIREjTMAJnAxwIxEDTg");
	this.shape_8.setTransform(4.4,-11.8,0.082,0.082);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8E0E2").s().p("EgYGAiZQgGhmABirQAElYAmlhQB8xpGusgQGvsgOdocQEhipExh7QCYg8BfgcIEuKfQg6gNhiAFQjFAJjMBYQqMEZnVO/QkDINgoIzQghHDBsHFQBNFECLElQBGCTA2BRg");
	this.shape_9.setTransform(-5.8,5.2,0.082,0.082);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AoFB3QgXgzgPg+IgMgzIRfjYIAJA1QAJBAgCA3QgGCvhuAVIsVCYQgNADgNAAQhcAAg+iPg");
	this.shape_10.setTransform(7.4,4.7,0.082,0.082);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ApGCQQgNgLgDgSQgEgSAIgPQAIgOAOgDIRojYQAOgCANAKQANALADARQAEASgIAPQgIAPgOADIxoDYIgGAAQgLAAgKgIg");
	this.shape_11.setTransform(1.4,-27.3,0.082,0.082);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ArPCqQgPgKgDgSQgEgSALgPQAKgPASgEIVtkKQARgDAQAKQAPAKADASQAEASgLAPQgKAPgSADI1tELIgJABQgNAAgLgIg");
	this.shape_12.setTransform(0.4,-32.1,0.082,0.082);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#414849").s().p("Aq7iUIV3kOIgUJrIxpDag");
	this.shape_13.setTransform(0.5,-29.5,0.082,0.082);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#414849").s().p("AqBDeQgvgfgLg4QgLg4AgguQAgguA4gLIRqjaQA4gLAvAgQAuAfALA4QALA4ggAvQggAtg3ALIxqDaQgPADgNAAQgoAAgjgYg");
	this.shape_14.setTransform(1.7,-25.9,0.082,0.082);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#414849").s().p("AqBDeQgvgggLg3QgLg4AggvQAggtA3gLIRrjaQA3gLAvAgQAvAgALA3QALA4ggAvQggAtg4ALIxqDaQgOADgNAAQgoAAgjgYg");
	this.shape_15.setTransform(7.1,2.3,0.082,0.082);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-33.6,53.4,67.2);


(lib.Tween110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414849").s().p("Al0sPQAag0A8gzQB5hlCmAFQCOAFB2CdQA8BOAfBNIK2RaMggrAIWgAhptNQgyAXgTA0QgTA1AXAyQAYAyA0AUQA0ATAxgYQAygXATg1QATg0gXgyQgYgzgygTQgXgIgXAAQgdAAgcANg");
	this.shape.setTransform(-12.9,20.3,0.082,0.082);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414849").s().p("A25DNIgBgSQABijBihxQBjh0CMAAMAjQAAAQCMAABjB0QBjBxAACjIAAASg");
	this.shape_1.setTransform(10,23.8,0.082,0.082);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414849").s().p("AkyC1QgoAAgcgcQgdgcAAgoIAAkJIMnAAIAAEJQAAAogdAcQgcAcgoAAg");
	this.shape_2.setTransform(-23.4,32.1,0.082,0.082);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414849").s().p("AkyC1QgoAAgcgcQgcgcAAgoIAAkKIMlAAIAAEKQAAAogcAcQgcAcgoAAg");
	this.shape_3.setTransform(23.4,32.1,0.082,0.082);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414849").s().p("EgzHAHLIgBgpQAAiyA8ikQA5icBoh5QBph6CHhDQCMhFCaAAMBOrAAAQCaAACMBFQCHBDBpB6QBoB5A6CcQA7CkAACyIgBApg");
	this.shape_4.setTransform(0,26.9,0.082,0.082);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7CECD").s().p("AwkDvQhkAAhGhGQhGhHAAhiQAAhiBGhGQBGhGBkAAMAhJAAAQBkAABGBGQBGBGAABiQAABihGBHQhGBGhkAAg");
	this.shape_5.setTransform(9.8,20.1,0.082,0.082);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFB").s().p("AgkDkQhfgQg4hNQg4hPAQhcQAPhfBOg3QBOg4BdAPQBfAQA3BOQA4BNgPBdQgPBehPA4Qg9AshHAAQgSAAgUgDg");
	this.shape_6.setTransform(-0.7,-10.8,0.082,0.082);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414849").s().p("AhwKxQiMgXh3hLQh0hJhQhuQipjsAvkcQAXiMBMh3QBIh0BwhQQDripEcAvQCMAYB3BLQBzBJBQBuQCpDsgvEbQgvEejrCqQi4CEjXAAQg5AAg/gLg");
	this.shape_7.setTransform(-0.7,-10.8,0.082,0.082);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8E0E2").s().p("AtV3OIREjTMAJnAxwIxEDTg");
	this.shape_8.setTransform(4.4,-11.8,0.082,0.082);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8E0E2").s().p("EgYGAiZQgGhmABirQAElYAmlhQB8xpGusgQGvsgOdocQEhipExh7QCYg8BfgcIEuKfQg6gNhiAFQjFAJjMBYQqMEZnVO/QkDINgoIzQghHDBsHFQBNFECLElQBGCTA2BRg");
	this.shape_9.setTransform(-5.8,5.2,0.082,0.082);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AoFB3QgXgzgPg+IgMgzIRfjYIAJA1QAJBAgCA3QgGCvhuAVIsVCYQgNADgNAAQhcAAg+iPg");
	this.shape_10.setTransform(7.4,4.7,0.082,0.082);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ApGCQQgNgLgDgSQgEgSAIgPQAIgOAOgDIRojYQAOgCANAKQANALADARQAEASgIAPQgIAPgOADIxoDYIgGAAQgLAAgKgIg");
	this.shape_11.setTransform(1.4,-27.3,0.082,0.082);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ArPCqQgPgKgDgSQgEgSALgPQAKgPASgEIVtkKQARgDAQAKQAPAKADASQAEASgLAPQgKAPgSADI1tELIgJABQgNAAgLgIg");
	this.shape_12.setTransform(0.4,-32.1,0.082,0.082);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#414849").s().p("Aq7iUIV3kOIgUJrIxpDag");
	this.shape_13.setTransform(0.5,-29.5,0.082,0.082);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#414849").s().p("AqBDeQgvgfgLg4QgLg4AgguQAgguA4gLIRqjaQA4gLAvAgQAuAfALA4QALA4ggAvQggAtg3ALIxqDaQgPADgNAAQgoAAgjgYg");
	this.shape_14.setTransform(1.7,-25.9,0.082,0.082);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#414849").s().p("AqBDeQgvgggLg3QgLg4AggvQAggtA3gLIRrjaQA3gLAvAgQAvAgALA3QALA4ggAvQggAtg4ALIxqDaQgOADgNAAQgoAAgjgYg");
	this.shape_15.setTransform(7.1,2.3,0.082,0.082);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-33.6,53.4,67.2);


(lib.Tween107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C87945").s().p("AhTCMQhZhagZg5QgdhGAEg8QAEg9AkgPQAkgPAvAnQAuAnAeBGQAOAhAJAKQAKgKAOghQAehGAugnQAvgnAkAPQAkAPAEA9QAEA8gdBGQgZA5hZBaQgtAtgnAhQgmghgtgtg");
	this.shape.setTransform(-1.5,20.5,0.212,0.212);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD8C0").s().p("AoGB3IghjtIRPAAIgiDtg");
	this.shape_1.setTransform(-1.5,9.1,0.212,0.212);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEB483").s().p("AmFGuIhztbIPxAAIhzNbg");
	this.shape_2.setTransform(-1.5,20.8,0.212,0.212);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0B050").s().p("ABiB2QAIgmgPgyQgPgwgegkQghgogkgHQgrgIgoAlQgLAKgNgIQgOgHANgMQAwgsA3AEQAvAEArAoQApAmAVA1QAVA6gKA0QgDAMgSACIgFAAQgNAAACgMg");
	this.shape_3.setTransform(-4,0.2,0.212,0.212);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A0B050").s().p("AB7C9QADhFgFgkQgIg5gdglQglgxhIgvQgSgLhwg8QgKgGAPgIQAQgIAIAFQBzA+ATANQBOAyAlA1QAcAmAHA5QAEAigDBHQAAAJgSADIgIABQgKAAAAgIg");
	this.shape_4.setTransform(-3.5,-7.4,0.212,0.212);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A0B050").s().p("AiwClQAZhdBthdQAlggA6gsIBdhDQAGgFAQAAQAQgBgKAIIhbBCQg7AqghAfQhrBagZBcQgCAIgRACIgJABQgJAAACgFg");
	this.shape_5.setTransform(1.9,-1,0.212,0.212);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A0B050").s().p("AjYBPQgQgDALgKQBLhDCBglQBYgZCMgPQASgCgDALQgEAMgPACQiDAOhOAWQh6AfhDA+QgGAGgLAAIgIgBg");
	this.shape_6.setTransform(3,0.4,0.212,0.212);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A0B050").s().p("AhbHpQAKgrAqipQAgiCANhTQAtj9gdkgQgCgUAdgJQAegJACAXQAdEcgsD8QgPBXghCGIgzDcQgFAUgdAEIgHAAQgVAAAEgUg");
	this.shape_7.setTransform(-1.8,-1,0.212,0.212);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7DA422").s().p("ABWEKQASg2gMgbQgPgghDghQhDgjgng8Qgng6gEhOQgNhiABgdQAAgsAyAdQBhA4AvAsQBYBPAOBXQAOBYgMA5QgGAagXAvQgMAYgMAIQgEADgDAAIgBAAg");
	this.shape_8.setTransform(-3.5,-13.4,0.212,0.212);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5B7B1B").s().p("AAsCVQhZgRg6hAQgeghhGhzQgagsgEgPQgDgQASAAQAKAAArAJQAyAKAlAEQBpAMAyAmQA5ArBkCdQgNAOgfALQgjANgrAAQggAAgkgHg");
	this.shape_9.setTransform(-7.9,-17.4,0.212,0.212);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9FC068").s().p("ABeCCQgUgcgSgWQgkgrg0gVQhFgZgTgUQgWgXAZgfQA2hGBTAcQBTAcATBUQARBIgOAtQgJAegNAAQgEAAgFgEg");
	this.shape_10.setTransform(2.5,-7.1,0.212,0.212);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D751F").s().p("AiUB5QgPgCgOgKIgKgIQgDhlA2g6QAyg3BYgHQBHgGBBAzQAgAZATAbQgtgBg2ALQhoAUgrA9QgmA2gpAAIgMgBg");
	this.shape_11.setTransform(3.5,-9.6,0.212,0.212);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#789E3C").s().p("AiPB9QhsgwhBgwIgsgmQB6iFB3gWQBvgTBzBMQBRA0A+BMQAyA9AeAHQAyAMggAYQggAYg+ADQhhAOhEACIgWABQhvAAhjgsg");
	this.shape_12.setTransform(10.3,-9.3,0.212,0.212);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7EA11A").s().p("AhhB1IgsgHQAIhQAwgvQAtgvBZgcQBUgbAGACQAFACgCAMIgGAhQgGAsgmAvQgoAyg0AaQgmAVgwAAIgLgBg");
	this.shape_13.setTransform(3.9,-3.5,0.212,0.212);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#779222").s().p("AiABnQgUg3AFhAQAFhRBWghQBWghBTA1IAJALQALANAEAPQAPAuguAmQguAohZAxQguAZglARQgLgOgJgbg");
	this.shape_14.setTransform(-6.5,-0.4,0.212,0.212);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#779222").s().p("AjaBqIgvgaQA5ghA0gqQAygpAXgSQBJg5BygEQBhgDA7gNQAJABgFANIgUA0QgcBThFA0QhQA8hyABIgIABQhiAAhBgag");
	this.shape_15.setTransform(8.1,-2,0.212,0.212);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B8B1A").s().p("AkoB2QBLiYA9hYQBVh8CpgHQBSgECUAiQA/AOgyBoQgdA7hSB4QgoBCjUAwQj4AshUAXQAZg8AlhNg");
	this.shape_16.setTransform(5.3,-13.4,0.212,0.212);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#506E13").s().p("AgpDxQhvgDhJiwQg0h5gMiBQgFhBByARQBBAJCLAnQBNASBCBlQAnA8BUCRQgoAcg+AaQh1AzhkAAIgMAAg");
	this.shape_17.setTransform(-10.7,-5.4,0.212,0.212);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#698E22").s().p("AFNCTQgygch5AUQh/AUhrgqQhtgrhQhhQgagig1g3QgugygNgTQgWgeAKgQQALgRA2gFQC4gRBqALQDAAUBnBoQBnBpAmBVQASApAOBUQAHAsgHAVQgEAKgFACQgbhZgrgZg");
	this.shape_18.setTransform(-9.2,-10.6,0.212,0.212);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#21400A").s().p("AAyDSQiWggh2huQhfhXgnhjIgbhBQgKgaAJgKQAQgTCjATQCpATB/BMQBwBDCQCUQApArgIAhQgIAegwAQQgxAQhBAAQhIAAhcgTg");
	this.shape_19.setTransform(-9.5,-13.7,0.212,0.212);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3B5506").s().p("AjRCwQgegKAFgSQACgyAMgwQAXhcBMhEQBLhFCAgDQBDgCBKALQAXAAgTAuQgNAfgyBkQgoBZhJAqQhLAtiFADIgGAAQgYAAgWgHg");
	this.shape_20.setTransform(3.5,-16.1,0.212,0.212);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#476810").s().p("ABLGOQhCgfg3gsQhuhUgwiLQgwiKBGisQAVg0Akg/IAlhCQAMgfAyA0QAgAjBqB8QBfBoAOB2QAQCBhICxQgPAlgZAbQgUAWgPAAQgIAAgHgFg");
	this.shape_21.setTransform(-4,-21.3,0.212,0.212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-29.8,36,59.8);


(lib.Tween106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C87945").s().p("AhTCMQhZhagZg5QgdhGAEg8QAEg9AkgPQAkgPAvAnQAuAnAeBGQAOAhAJAKQAKgKAOghQAehGAugnQAvgnAkAPQAkAPAEA9QAEA8gdBGQgZA5hZBaQgtAtgnAhQgmghgtgtg");
	this.shape.setTransform(-1.5,20.4,0.212,0.212);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD8C0").s().p("AoGB3IghjtIRPAAIgiDtg");
	this.shape_1.setTransform(-1.5,9.1,0.212,0.212);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEB483").s().p("AmFGuIhztbIPxAAIhzNbg");
	this.shape_2.setTransform(-1.5,20.8,0.212,0.212);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0B050").s().p("ABiB2QAIgmgPgyQgPgwgegkQghgogkgHQgrgIgoAlQgLAKgNgIQgOgHANgMQAwgsA3AEQAvAEArAoQApAmAVA1QAVA6gKA0QgDAMgSACIgFAAQgNAAACgMg");
	this.shape_3.setTransform(-4,0.2,0.212,0.212);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A0B050").s().p("AB7C9QADhFgFgkQgIg5gdglQglgxhIgvQgSgLhwg8QgKgGAPgIQAQgIAIAFQBzA+ATANQBOAyAlA1QAcAmAHA5QAEAigDBHQAAAJgSADIgIABQgKAAAAgIg");
	this.shape_4.setTransform(-3.5,-7.4,0.212,0.212);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A0B050").s().p("AiwClQAZhdBthdQAlggA6gsIBdhDQAGgFAQAAQAQgBgKAIIhbBCQg7AqghAfQhrBagZBcQgCAIgRACIgJABQgJAAACgFg");
	this.shape_5.setTransform(1.9,-1,0.212,0.212);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A0B050").s().p("AjYBPQgQgDALgKQBLhDCBglQBYgZCMgPQASgCgDALQgEAMgPACQiDAOhOAWQh6AfhDA+QgGAGgLAAIgIgBg");
	this.shape_6.setTransform(3,0.4,0.212,0.212);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A0B050").s().p("AhbHpQAKgrAqipQAgiCANhTQAtj9gdkgQgCgUAdgJQAegJACAXQAdEcgsD8QgPBXghCGIgzDcQgFAUgdAEIgHAAQgVAAAEgUg");
	this.shape_7.setTransform(-1.8,-1.1,0.212,0.212);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7DA422").s().p("ABWEKQASg2gMgbQgPgghDghQhDgjgng8Qgng6gEhOQgNhiABgdQAAgsAyAdQBhA4AvAsQBYBPAOBXQAOBYgMA5QgGAagXAvQgMAYgMAIQgEADgDAAIgBAAg");
	this.shape_8.setTransform(-3.5,-13.5,0.212,0.212);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5B7B1B").s().p("AAsCVQhZgRg6hAQgeghhGhzQgagsgEgPQgDgQASAAQAKAAArAJQAyAKAlAEQBpAMAyAmQA5ArBkCdQgNAOgfALQgjANgrAAQggAAgkgHg");
	this.shape_9.setTransform(-7.9,-17.5,0.212,0.212);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9FC068").s().p("ABeCCQgUgcgSgWQgkgrg0gVQhFgZgTgUQgWgXAZgfQA2hGBTAcQBTAcATBUQARBIgOAtQgJAegNAAQgEAAgFgEg");
	this.shape_10.setTransform(2.5,-7.1,0.212,0.212);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D751F").s().p("AiUB5QgPgCgOgKIgKgIQgDhlA2g6QAyg3BYgHQBHgGBBAzQAgAZATAbQgtgBg2ALQhoAUgrA9QgmA2gpAAIgMgBg");
	this.shape_11.setTransform(3.5,-9.7,0.212,0.212);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#789E3C").s().p("AiPB9QhsgwhBgwIgsgmQB6iFB3gWQBvgTBzBMQBRA0A+BMQAyA9AeAHQAyAMggAYQggAYg+ADQhhAOhEACIgWABQhvAAhjgsg");
	this.shape_12.setTransform(10.3,-9.3,0.212,0.212);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7EA11A").s().p("AhhB1IgsgHQAIhQAwgvQAtgvBZgcQBUgbAGACQAFACgCAMIgGAhQgGAsgmAvQgoAyg0AaQgmAVgwAAIgLgBg");
	this.shape_13.setTransform(3.9,-3.6,0.212,0.212);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#779222").s().p("AiABnQgUg3AFhAQAFhRBWghQBWghBTA1IAJALQALANAEAPQAPAuguAmQguAohZAxQguAZglARQgLgOgJgbg");
	this.shape_14.setTransform(-6.5,-0.4,0.212,0.212);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#779222").s().p("AjaBqIgvgaQA5ghA0gqQAygpAXgSQBJg5BygEQBhgDA7gNQAJABgFANIgUA0QgcBThFA0QhQA8hyABIgIABQhiAAhBgag");
	this.shape_15.setTransform(8.1,-2.1,0.212,0.212);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B8B1A").s().p("AkoB2QBLiYA9hYQBVh8CpgHQBSgECUAiQA/AOgyBoQgdA7hSB4QgoBCjUAwQj4AshUAXQAZg8AlhNg");
	this.shape_16.setTransform(5.3,-13.5,0.212,0.212);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#506E13").s().p("AgpDxQhvgDhJiwQg0h5gMiBQgFhBByARQBBAJCLAnQBNASBCBlQAnA8BUCRQgoAcg+AaQh1AzhkAAIgMAAg");
	this.shape_17.setTransform(-10.7,-5.5,0.212,0.212);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#698E22").s().p("AFNCTQgygch5AUQh/AUhrgqQhtgrhQhhQgagig1g3QgugygNgTQgWgeAKgQQALgRA2gFQC4gRBqALQDAAUBnBoQBnBpAmBVQASApAOBUQAHAsgHAVQgEAKgFACQgbhZgrgZg");
	this.shape_18.setTransform(-9.2,-10.6,0.212,0.212);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#21400A").s().p("AAyDSQiWggh2huQhfhXgnhjIgbhBQgKgaAJgKQAQgTCjATQCpATB/BMQBwBDCQCUQApArgIAhQgIAegwAQQgxAQhBAAQhIAAhcgTg");
	this.shape_19.setTransform(-9.5,-13.8,0.212,0.212);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3B5506").s().p("AjRCwQgegKAFgSQACgyAMgwQAXhcBMhEQBLhFCAgDQBDgCBKALQAXAAgTAuQgNAfgyBkQgoBZhJAqQhLAtiFADIgGAAQgYAAgWgHg");
	this.shape_20.setTransform(3.5,-16.2,0.212,0.212);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#476810").s().p("ABLGOQhCgfg3gsQhuhUgwiLQgwiKBGisQAVg0Akg/IAlhCQAMgfAyA0QAgAjBqB8QBfBoAOB2QAQCBhICxQgPAlgZAbQgUAWgPAAQgIAAgHgFg");
	this.shape_21.setTransform(-4,-21.3,0.212,0.212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-29.9,36,59.8);


(lib.Tween105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B45F56").s().p("Ai+A2QgWAAgQgPQgPgQAAgWIAAgBQAAgWAPgQQAQgQAWAAIF9AAQAWAAAQAQQAPAQAAAWIAAABQAAAWgPAQQgQAPgWAAg");
	this.shape.setTransform(1.7,23,0.208,0.208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34100B").s().p("AjIEZQAAgPAOAAIA6ABQAjgBAXgHQApgLAZgwQANgbAUg0QAghUAph1IBGjMQAEgNAOAEQAOAEgEANIhZEAIgkBlQgVA7gTAqQgOAfgLASQgOAZgVAOQgdAUgxAEQgLABhIAAQgOAAAAgOg");
	this.shape_1.setTransform(9.2,17.1,0.208,0.208);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#34100B").s().p("ABeElQg2gHgdgcQgZgagXgzQgFgLgbhMQgbhKhnkoQgEgNAOgEQANgEAFANIBFDMQAqB3AgBSQASAxAOAeQAZAwApALQAYAHAiABIA7gBQAOAAAAAPQAAAOgOAAQhLAAgSgCg");
	this.shape_2.setTransform(-5.6,17.1,0.208,0.208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB3924").s().p("AosANQgFAAgEgEQgEgEAAgFIAAAAQAAgEAEgEQAEgEAFAAIRZAAQAFAAAEAEQAEAEAAAEIAAAAQAAAFgEAEQgEAEgFAAg");
	this.shape_3.setTransform(1.8,9.5,0.208,0.208);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#811704").s().p("AmJF/Ihmr9IPeAAIhlL9g");
	this.shape_4.setTransform(1.8,24.9,0.208,0.208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#811704").s().p("An0CWIgokrIQ5AAIgoErg");
	this.shape_5.setTransform(1.8,12.9,0.208,0.208);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB3924").s().p("AnvAVIgFgpIPpAAIgGApg");
	this.shape_6.setTransform(1.8,16.4,0.208,0.208);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#886352").s().p("AESCfQhLgFhGgsQhAgogwhBQg5hOg9gkQhJgshYALQgHABgJgHQgKgHAKgBQBKgJBCAWQBCAXA1A1QASARASAaIAiArQApA0A4AiQA7AkA/AEQAKABADAHQADAGgJAAIgDAAg");
	this.shape_7.setTransform(-5.4,-3.2,0.208,0.208);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7EB913").s().p("AgIBCQACgOAAgGQgBgHgKgNQgggrAfghQASgTAJgBQAKAAAHAQQAVApgfAdQgQAQgCAVQgCALABAHg");
	this.shape_8.setTransform(-0.5,-1.6,0.208,0.208);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7EB913").s().p("AgMBgQADgVgBgIQgBgLgOgTQgTgbgDgXQgEghAYgaQAagcANgBQAPAAALAXQAcA8grAqQgXAWgDAfQgDAPABAKg");
	this.shape_9.setTransform(-7.2,-7.7,0.208,0.208);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#528D10").s().p("AAzBZQgKgTgFgFQgHgJgXgHQgdgKgRgSQgXgWAEgkQAFgmALgJQALgKAXANQA5AfgKA7QgEAgANAbQAHAOAHAIg");
	this.shape_10.setTransform(-11.1,-8.3,0.208,0.208);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#528D10").s().p("AgbAzQghgGgSgeQgTgfADgPQADgOAZgEQBCgLAcA3QAQAaAbANQAOAHAKACIgIAFQgTgJgIgBQgKgCgXAIQgWAIgSAAIgOgBg");
	this.shape_11.setTransform(-12.7,-7.3,0.208,0.208);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7EB913").s().p("AgMBfQADgUgBgIQgBgLgOgTQgTgbgDgXQgEghAYgaQAagcANgBQAPgBALAXQAcA9grAqQgXAWgDAfQgDAPABAKg");
	this.shape_12.setTransform(-2.6,-3.2,0.208,0.208);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7EB913").s().p("AhmA3QACgMAWg4QAPgnAbgPQAYgOAlADQAhADAbAHQAZAHgIABQgjAEgOASQgHAJgGAcQgDAQgqAdQgrAdggAGIgIAAQgTAAAFgYg");
	this.shape_13.setTransform(-9.2,-4.2,0.208,0.208);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D7308").s().p("AgEBwQgFgGgCgRQgCgMgMgLQgOgMgHgWQgNggABgUQADgbAagnQAcgoAZATQAZASAIA1QAKA+g+AkQgIAGgBAIQgBAIAFAaQAAABAAABQAAABAAAAQAAABAAAAQAAAAAAAAIgEgCg");
	this.shape_14.setTransform(-4.7,-5.4,0.208,0.208);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D7308").s().p("AgrA3QgWgGAJggQAIgdAOgNQAJgKAYgIQAMgFANACQAKABAHgEQAKgGAGAAQAGAAgFACQgQAJgEAEQgEAEACAIQACATgCAKQgGAagYAOQgXAPgRAAIgJgBg");
	this.shape_15.setTransform(-11.7,-5.3,0.208,0.208);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D7308").s().p("AhjAsQgZgWAhgiQAggjAagJQASgGAjAFQAWACAQALQANAJAMgBQARgBAHADQAHAEgIABQgaABgHACQgIADgEAMQgWBCg+AFIgQAAQgoAAgUgQg");
	this.shape_16.setTransform(-7,-2.3,0.208,0.208);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D7308").s().p("AAEBsQgFgIgGgRQgFgNgJgMQgNgRgKgTQgPgaANgdQAKgYAigfQAcgbAMAFQALAFAEAnQADAigSAhQgPAagUARQgMALADAOIAPAnQAAABAAABQAAABABAAQAAABgBAAQAAAAAAAAIgFgEg");
	this.shape_17.setTransform(-9,-8.6,0.208,0.208);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D7308").s().p("AhZBCQgKgJAKgnQANgqAQgUQAUgZAgABQATABAWADQAOADAOgCQASgDALAEQAKADgIAAQghABgKACQgNAEgEARQgGAagRAXQgUAhggAMQgYAKgMAAQgHAAgDgDg");
	this.shape_18.setTransform(-4.6,0.2,0.208,0.208);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D7308").s().p("AgjApQgdg3AfgZQAQgNARgCIAdgDQAQgDAEABQADABgFACQgaAHgDACQgGAEADALQAFAQgDARQgEAZgQAQQgUASgBAAQgBAAgKgTg");
	this.shape_19.setTransform(-1.8,1,0.208,0.208);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#886352").s().p("AibD4QgDgIAFgDQAngaAegrQAcgnAQgxQAIgYAGgoQAHgxADgNQAQhJAng0QArg2BDgbQAFgCADAIQACAJgGACQiLA3gYCwQgIAvgEASQgHAkgNAbQgnBWhBAqIgDABQgDAAgDgFg");
	this.shape_20.setTransform(4,2.9,0.208,0.208);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7EB913").s().p("AAfApQgNgPgSgGQgmgLgCgpQgBgRAIgEQAJgEAXAIQAlANgFAwQgCAPADAHQACAEAIALIgCAGQgDgGgGgIg");
	this.shape_21.setTransform(0.6,6.4,0.208,0.208);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7EB913").s().p("AAsA7QgSgWgagIQg4gQgDg8QgBgXAMgGQAMgGAiALQAdAKAMAcQAIAWgDAcQgDAWAEAJQADAHAMAPIgDAJQgEgJgJgLg");
	this.shape_22.setTransform(3.3,-1.5,0.208,0.208);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#528D10").s().p("AgGBHQgCgcgSgYQgjgsAigzQANgUAMACQAMADAVAcQATAbgIAeQgFAVgVAWQgPAQgBAKQgBAHABATIgIAGQADgKgBgOg");
	this.shape_23.setTransform(6.3,-3.6,0.208,0.208);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#528D10").s().p("Ag/BLIAQgRQAPgYAAgdQAAg4A4gVQAWgHAJAJQAKALgBAjQgCA5hGAMQgVAEgIAGIgRAVg");
	this.shape_24.setTransform(8.2,-3.6,0.208,0.208);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7EB913").s().p("AAtA7QgSgWgbgIQg3gQgEg7QgBgYAMgGQANgGAhALQAeAKALAdQAJAWgEAcQgCAVAEAKQADAGALAQIgDAIQgDgJgJgLg");
	this.shape_25.setTransform(1.6,4.2,0.208,0.208);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7EB913").s().p("AAYA0QgvgEgLgNQgRgUgKgEQgTgJgfANQgHADASgRQATgRAZgQQAegUAaAAQAaAAAdAZQAuAkAGAIQARAVgYAIQgVAHgfAAIgYgBg");
	this.shape_26.setTransform(6.6,0.1,0.208,0.208);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D7308").s().p("AA7BZQgHgYgEgGQgFgGgLAAQhAgCgVg2QgRgtAMgbQAOgcAoAUQAlAUAOAVQAKAPAFAgQAEAUgGARQgFANAEALQAGAPgBAHQgBABAAABQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_27.setTransform(2.2,1.5,0.208,0.208);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4D7308").s().p("AAQAlQgmgBgQgoQgCgIgFgBQgFgCgRAAQgFAAAFgCQAEgDALABQAIAAAIgGQAJgHAOgCQAVgEAMADQAQAFAVAVQAWAUgPAOQgNAMgeAAIgFAAg");
	this.shape_28.setTransform(8.1,-1.6,0.208,0.208);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4D7308").s().p("Ag1AZQgIgIgIACQgHABgWALQgHADAFgHQAEgGAOgGQAKgFAHgLQAIgQAQgMQAcgUAPgDQAZgFAqAOQArAOgLAdQgKAZgsAUQgUAJgSAAQggAAgegdg");
	this.shape_29.setTransform(5.7,2.8,0.208,0.208);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4D7308").s().p("AA8BTQgCgfgDgIQgEgNgQgDQgYgEgVgPQgfgSgNgdQgOgiAHgJQAHgJAkAJQAnAKAUAPQAXARABAeQAAASgDATQgCAOACANQADAQgCAKIgDAGIAAgEg");
	this.shape_30.setTransform(4.1,-2.9,0.208,0.208);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4D7308").s().p("AAAAkQgYgNgQgSQgLgKgNADIgkAOQgHAEAIgIQAHgHAPgEQANgEAKgJQAQgNARgKQAXgPAbALQAXAJAdAeQAbAZgFALQgEALgkAFIgMAAQgaAAgZgMg");
	this.shape_31.setTransform(4.9,5.6,0.208,0.208);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4D7308").s().p("AAgAmQgWgFgNgTQgLgOgDgNQgCgKgGAAQgEgBgZAGQgFACADgDQACgDAPgEQALgEAPgIQANgGATADQAkAHACA5QABATgBABIAAAAIgZgFg");
	this.shape_32.setTransform(2.8,7.9,0.208,0.208);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#886352").s().p("AguHGQg4jjAYjsQAaj/Bti8QAFgIAOAAQAOAAgFAKQhtC6gZD9QgXDpA3DhQADAIgPAEIgHACQgIAAgCgHg");
	this.shape_33.setTransform(1.8,0.6,0.208,0.208);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#886352").s().p("AkaCZQADgHAKgBQA+gFA8gjQA4giAog0IAjgsQASgaARgRQA1g0BCgXQBCgWBLAJQAKABgKAHQgJAHgHgBQhYgLhKAsQg8Akg6BOQgvBBhAAoQhGArhLAGIgDABQgJAAADgHg");
	this.shape_34.setTransform(8.8,-11.8,0.208,0.208);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7EB913").s().p("AADA1QgDgVgPgPQgegdAUgqQAIgQAJAAQAJABASAUQAfAgggArQgKANgBAIQAAAFACAPIgFAEQABgHgCgLg");
	this.shape_35.setTransform(3.9,-10.2,0.208,0.208);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7EB913").s().p("AAFBMQgFgegWgWQgrgqAdg9QALgXAOABQANABAaAcQArAvgtA+QgOATgBALQgBAHADAVIgHAHQABgLgCgPg");
	this.shape_36.setTransform(10.6,-16.3,0.208,0.208);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#528D10").s().p("AguBEQANgbgEggQgKg7A5ggQAXgMALAJQAMAKAEAmQAEAjgWAWQgSATgdAKQgXAHgHAIIgPAZIgKABQAHgIAHgOg");
	this.shape_37.setTransform(14.4,-16.9,0.208,0.208);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#528D10").s().p("AgaAsQgXgIgKACIgbAKIgJgFIAZgIQAbgOAPgaQAcg3BCALQAZAFAEANQADAPgTAfQgTAeggAGIgOABQgSAAgWgIg");
	this.shape_38.setTransform(16.1,-15.9,0.208,0.208);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7EB913").s().p("AAFBNQgFgegWgXQgsgqAeg8QALgXAOAAQANABAaAcQArAvgtA+QgOATgBALQgBAIADAVIgHAGQABgKgCgPg");
	this.shape_39.setTransform(6,-11.8,0.208,0.208);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7EB913").s().p("ABRBPQgggGgrgdQgqgdgDgQQgGgcgHgJQgNgSgkgFQgIgBAZgGQAcgHAggDQAlgDAYAOQAbAPAPAmQAWA5ACAMQAFAYgTAAIgIAAg");
	this.shape_40.setTransform(12.6,-12.7,0.208,0.208);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4D7308").s().p("AAABuQAGgagBgIQgBgIgJgGQgXgOgMgPQgXgeAHgoQAIg0AZgSQAZgUAbApQAbAnACAbQACATgNAhQgIAVgOANQgLAKgCAMQgCARgGAGIgDADQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_41.setTransform(8.1,-14,0.208,0.208);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4D7308").s().p("AgFApQgkgWAGgvQACgHgEgFQgEgDgQgJQgFgDAGAAQAGAAAKAGQAHAEALgBQAMgCAMAFQAYAJAJAJQAOANAJAdQAJAggXAGIgJABQgRAAgXgPg");
	this.shape_42.setTransform(15.1,-13.8,0.208,0.208);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4D7308").s().p("AAYA7QgogDgXgdQgMgPgJgYQgDgLgIgDQgHgDgbgBQgJAAAIgEQAIgEAQACQANABANgJQAPgLAWgCQAjgFASAGQAaAIAgAjQAhAigZAWQgUARgoAAIgQgBg");
	this.shape_43.setTransform(10.4,-10.9,0.208,0.208);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4D7308").s().p("AgHBsQAMgeACgJQADgOgMgLQgUgRgOgbQgTghADgiQAEgnALgFQAMgFAcAcQAiAfAKAYQANAdgPAaQgKASgNARQgJAMgFAOQgGARgFAIIgFAEQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBABgBg");
	this.shape_44.setTransform(12.4,-17.2,0.208,0.208);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4D7308").s().p("AAsA7QgggMgUghQgRgXgGgZQgEgSgNgDIgrgEQgIAAALgDQAKgDASACQAOACAPgDQAUgDAUgBQAgAAAUAYQAQAVANAqQALAngKAIQgEADgGAAQgMAAgZgKg");
	this.shape_45.setTransform(8,-8.4,0.208,0.208);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D7308").s().p("AAEAqQgQgQgEgZQgDgRAFgQQADgLgFgEQgDgCgbgHQgGgCAEgBQAEgBAQADQANADAQAAQARACAQANQAgAageA2QgJATgCAAIgVgSg");
	this.shape_46.setTransform(5.1,-7.6,0.208,0.208);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#886352").s().p("AgRHEQgMgBAFgIQAfg6ALhKQAKhDgIhJQgFgpgQg3QgWg9gKgeQgmh3AQhqQARhyBLhbQAGgGALACQAMACgIAJQiYC1BkEWQAqBwABBmQABB2gyBdQgEAHgLAAIgCAAg");
	this.shape_47.setTransform(3.4,-17.9,0.208,0.208);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7EB913").s().p("ABlBAQgpgRgtAKQhVARgxhPQgTggAMgQQANgSA2gJQAygJAiAfQAbAYARAqQAMAfANAKQAIAHAcAMIACAPQgLgKgUgJg");
	this.shape_48.setTransform(-0.3,-23.8,0.208,0.208);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#528D10").s().p("AA5BjQgWgmgogTQhQgkAIheQADgkAUgGQAUgHAvAYQAuAXALAuQAIAjgMAsQgJAhAEAPQADAKAPAbIgHANQgDgPgMgTg");
	this.shape_49.setTransform(1.8,-28.4,0.208,0.208);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#528D10").s().p("AgjBtQAFgsgWgoQgqhNBBhGQAZgbARAHQAUAIAYAxQAXAtgTAqQgPAhgmAcQgZAVgFAOQgFAKgEAeIgNAGQAGgNADgWg");
	this.shape_50.setTransform(5,-29.8,0.208,0.208);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7EB913").s().p("AibBBQANgmAXgnQAbgxAjgTQAngUA4ANQBYATAPAGQAnARgcAcQggAghEAdQhCAegagKQgkgPgRABQghACghAoIgDABQgDAAAKgcg");
	this.shape_51.setTransform(5.7,-23.5,0.208,0.208);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4D7308").s().p("ACJBdQgbgbgKgEQgKgGgQAIQhaAthEg+Qg4gwgCgtQgDgwBGgBQBEgBAgASQAZAOAfAqQATAYAEAaQAEAWANAMQASAQAEALQABAHgCAAQgBAAgEgDg");
	this.shape_52.setTransform(0.5,-18.9,0.208,0.208);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4D7308").s().p("Ag4AcQgJgIgIABQgHABgXAMQgHAEAEgHQAEgHAPgHQALgFAHgMQAIgQARgNQAdgWAQgEQAagFAsANQAuAOgLAfQgKAbguAWQgVAKgUAAQghAAgggdg");
	this.shape_53.setTransform(6.1,-27.3,0.208,0.208);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4D7308").s().p("AiABtQACgMAPgTQAKgOAAgWQgBgbAOgbQAXgvAWgSQAfgYBAgLQBFgMAHAwQAGArguA6Qg5BKhggcQgQgFgKAHQgJAHgWAfQgDAEgBAAQgCAAAAgGg");
	this.shape_54.setTransform(6.2,-19.3,0.208,0.208);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4D7308").s().p("ACNBYQgZgogJgKQgOgPgZAIQgjALgqgDQg4gFgngfQgrghADgRQADgTA4gOQA/gQAkAGQAsAIAWAnQAOAbALAbQAHAUANAQQAPAVAEAPQACAJgBAAQgBAAgDgEg");
	this.shape_55.setTransform(-0.2,-26.3,0.208,0.208);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#886352").s().p("AFuDvQgng9hDgvQg9gqhLgZQglgNg9gIQhOgMgUgEQhxgZhQg9QhUhCgphoQgEgJANgEQANgDAEAJQBVDXERAnQBGALAeAHQA3AMArATQCGA9BABkQAFAIgMAGQgEACgEAAQgGAAgDgFg");
	this.shape_56.setTransform(-4.8,-13.6,0.208,0.208);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7EB913").s().p("AhSA1QgGgOALgkQALgfAfgNQAXgJAfAEQAXACAKgEQAHgDARgNIAJADQgKAEgLAKQgYAUgJAcQgRA7hAAEIgGABQgUAAgGgMg");
	this.shape_57.setTransform(0.5,-8.4,0.208,0.208);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7EB913").s().p("Ah2BNQgKgUARg0QAQguAsgSQAigNAtAFQAhAEAOgGQAKgFAYgSIAOAFQgOAFgRAOQgiAcgMAqQgZBWheAFIgIAAQgdAAgIgQg");
	this.shape_58.setTransform(-11.7,-12.4,0.208,0.208);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#528D10").s().p("Ah3AsQgegTADgVQAEgTAtggQApgeAuAMQAhAJAiAgQAZAXAPACQALACAegBIAJAMQgPgEgWABQgsADgkAcQgiAbgmAAQglAAgogZg");
	this.shape_59.setTransform(-15,-17.1,0.208,0.208);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#528D10").s().p("ABaBLQglgZgtABQhXAAgghYQgNgiAPgOQARgPA2ACQAxABAdAlQAXAdAIAtQAFAhAKAMQAHAIAZASIgBAOQgJgMgSgMg");
	this.shape_60.setTransform(-15,-20,0.208,0.208);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7EB913").s().p("Ah2BNQgKgUARg0QAQguAsgSQAigOAsAGQAiAEAOgGQAKgFAYgSIAOAEQgPAGgQAOQgiAcgNAqQgYBVheAGIgIAAQgdAAgIgQg");
	this.shape_61.setTransform(-2.9,-9.8,0.208,0.208);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7EB913").s().p("AACCdQgbgdgZgnQgfgvAAgoQAAgqAmgtQA5hGAMgJQAhgcAMAmQAPAtgGBJQgFBJgVASQgeAagHAPQgNAdATAwQABABAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgDAAgSgUg");
	this.shape_62.setTransform(-9.3,-17.7,0.208,0.208);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4D7308").s().p("Ah0BbQgsgUAfg/QAfg6AhgWQAXgQAygIQAfgFAaAJQAVAHAQgGQAXgJALADQAMACgLAEQgkAMgJAGQgJAHgBARQgCBlhVAfQgqAQgeAAQgWAAgRgIg");
	this.shape_63.setTransform(-7.1,-10.8,0.208,0.208);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4D7308").s().p("AgcBqQgEgHABgRQABgMgJgMQgMgPgDgVQgGgiAFgSQAHgZAhghQAggiAWAYQAVAWgCA0QgCA8hAAYQgLAEgCAIQgDAHAAAaQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAIgDgDg");
	this.shape_64.setTransform(-11.9,-19.9,0.208,0.208);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4D7308").s().p("AArCdQgKgGgKgWQgHgQgSgKQgYgMgTgaQgfgrgFgZQgIgmAVhBQAWhCAtARQAoAPAgBEQAmBShGBLQgMAMACAMQABAKASAiQADAHgCAAIgGgDg");
	this.shape_65.setTransform(-5.1,-16.2,0.208,0.208);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4D7308").s().p("Ah9BhQgPgLAOg5QAPg9AXgeQAbglAtAAQAdAAAeAEQAVADAUgEQAagEAPAEQAQAEgNABQgvADgNAEQgUAFgEAZQgGAlgYAjQgdAvgtAUQgjAPgRAAQgJAAgEgDg");
	this.shape_66.setTransform(-13.8,-13.8,0.208,0.208);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4D7308").s().p("AANCcQgLgLgHgYQgIgTgNgRQgTgXgQgbQgXglARgqQAOgjAuguQAngpASAHQARAGAHA4QAGAxgZAwQgTAogcAYQgRARAFATIAXA4QADAFgCAAQgBAAgGgFg");
	this.shape_67.setTransform(-0.7,-14.9,0.208,0.208);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4D7308").s().p("AgeBZQgFgEgGgXIgTgpQgJgVAFgcQALg5BYgDQAfgBABABQABACgJAmQgHAhgdAVQgWARgVAFQgRADAAAKQAAAFAJAnQABAFgBAAIgCgBg");
	this.shape_68.setTransform(2.8,-11.6,0.208,0.208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-32.8,36.1,65.6);


(lib.Tween104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B45F56").s().p("Ai+A2QgWAAgQgPQgPgQAAgWIAAgBQAAgWAPgQQAQgQAWAAIF9AAQAWAAAQAQQAPAQAAAWIAAABQAAAWgPAQQgQAPgWAAg");
	this.shape.setTransform(1.7,23,0.208,0.208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34100B").s().p("AjIEZQAAgPAOAAIA6ABQAjgBAXgHQApgLAZgwQANgbAUg0QAghUAph1IBGjMQAEgNAOAEQAOAEgEANIhZEAIgkBlQgVA7gTAqQgOAfgLASQgOAZgVAOQgdAUgxAEQgLABhIAAQgOAAAAgOg");
	this.shape_1.setTransform(9.2,17.1,0.208,0.208);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#34100B").s().p("ABeElQg2gHgdgcQgZgagXgzQgFgLgbhMQgbhKhnkoQgEgNAOgEQANgEAFANIBFDMQAqB3AgBSQASAxAOAeQAZAwApALQAYAHAiABIA7gBQAOAAAAAPQAAAOgOAAQhLAAgSgCg");
	this.shape_2.setTransform(-5.6,17.1,0.208,0.208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB3924").s().p("AosANQgFAAgEgEQgEgEAAgFIAAAAQAAgEAEgEQAEgEAFAAIRZAAQAFAAAEAEQAEAEAAAEIAAAAQAAAFgEAEQgEAEgFAAg");
	this.shape_3.setTransform(1.8,9.5,0.208,0.208);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#811704").s().p("AmJF/Ihmr9IPeAAIhlL9g");
	this.shape_4.setTransform(1.8,24.9,0.208,0.208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#811704").s().p("An0CWIgokrIQ5AAIgoErg");
	this.shape_5.setTransform(1.8,12.9,0.208,0.208);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB3924").s().p("AnvAVIgFgpIPpAAIgGApg");
	this.shape_6.setTransform(1.8,16.4,0.208,0.208);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#886352").s().p("AESCfQhLgFhGgsQhAgogwhBQg5hOg9gkQhJgshYALQgHABgJgHQgKgHAKgBQBKgJBCAWQBCAXA1A1QASARASAaIAiArQApA0A4AiQA7AkA/AEQAKABADAHQADAGgJAAIgDAAg");
	this.shape_7.setTransform(-5.5,-3.2,0.208,0.208);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7EB913").s().p("AgIBCQACgOAAgGQgBgHgKgNQgggrAfghQASgTAJgBQAKAAAHAQQAVApgfAdQgQAQgCAVQgCALABAHg");
	this.shape_8.setTransform(-0.5,-1.6,0.208,0.208);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7EB913").s().p("AgMBgQADgVgBgIQgBgLgOgTQgTgbgDgXQgEghAYgaQAagcANgBQAPAAALAXQAcA8grAqQgXAWgDAfQgDAPABAKg");
	this.shape_9.setTransform(-7.2,-7.7,0.208,0.208);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#528D10").s().p("AAzBZQgKgTgFgFQgHgJgXgHQgdgKgRgSQgXgWAEgkQAFgmALgJQALgKAXANQA5AfgKA7QgEAgANAbQAHAOAHAIg");
	this.shape_10.setTransform(-11.1,-8.3,0.208,0.208);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#528D10").s().p("AgbAzQghgGgSgeQgTgfADgPQADgOAZgEQBCgLAcA3QAQAaAbANQAOAHAKACIgIAFQgTgJgIgBQgKgCgXAIQgWAIgSAAIgOgBg");
	this.shape_11.setTransform(-12.7,-7.3,0.208,0.208);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7EB913").s().p("AgMBfQADgUgBgIQgBgLgOgTQgTgbgDgXQgEghAYgaQAagcANgBQAPgBALAXQAcA9grAqQgXAWgDAfQgDAPABAKg");
	this.shape_12.setTransform(-2.6,-3.2,0.208,0.208);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7EB913").s().p("AhmA3QACgMAWg4QAPgnAbgPQAYgOAlADQAhADAbAHQAZAHgIABQgjAEgOASQgHAJgGAcQgDAQgqAdQgrAdggAGIgIAAQgTAAAFgYg");
	this.shape_13.setTransform(-9.2,-4.2,0.208,0.208);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D7308").s().p("AgEBwQgFgGgCgRQgCgMgMgLQgOgMgHgWQgNggABgUQADgbAagnQAcgoAZATQAZASAIA1QAKA+g+AkQgIAGgBAIQgBAIAFAaQAAABAAABQAAABAAAAQAAABAAAAQAAAAAAAAIgEgCg");
	this.shape_14.setTransform(-4.7,-5.4,0.208,0.208);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D7308").s().p("AgrA3QgWgGAJggQAIgdAOgNQAJgKAYgIQAMgFANACQAKABAHgEQAKgGAGAAQAGAAgFACQgQAJgEAEQgEAEACAIQACATgCAKQgGAagYAOQgXAPgRAAIgJgBg");
	this.shape_15.setTransform(-11.8,-5.3,0.208,0.208);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D7308").s().p("AhjAsQgZgWAhgiQAggjAagJQASgGAjAFQAWACAQALQANAJAMgBQARgBAHADQAHAEgIABQgaABgHACQgIADgEAMQgWBCg+AFIgQAAQgoAAgUgQg");
	this.shape_16.setTransform(-7.1,-2.3,0.208,0.208);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D7308").s().p("AAEBsQgFgIgGgRQgFgNgJgMQgNgRgKgTQgPgaANgdQAKgYAigfQAcgbAMAFQALAFAEAnQADAigSAhQgPAagUARQgMALADAOIAPAnQAAABAAABQAAABABAAQAAABgBAAQAAAAAAAAIgFgEg");
	this.shape_17.setTransform(-9.1,-8.6,0.208,0.208);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D7308").s().p("AhZBCQgKgJAKgnQANgqAQgUQAUgZAgABQATABAWADQAOADAOgCQASgDALAEQAKADgIAAQghABgKACQgNAEgEARQgGAagRAXQgUAhggAMQgYAKgMAAQgHAAgDgDg");
	this.shape_18.setTransform(-4.7,0.2,0.208,0.208);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D7308").s().p("AgjApQgdg3AfgZQAQgNARgCIAdgDQAQgDAEABQADABgFACQgaAHgDACQgGAEADALQAFAQgDARQgEAZgQAQQgUASgBAAQgBAAgKgTg");
	this.shape_19.setTransform(-1.8,1,0.208,0.208);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#886352").s().p("AibD4QgDgIAFgDQAngaAegrQAcgnAQgxQAIgYAGgoQAHgxADgNQAQhJAng0QArg2BDgbQAFgCADAIQACAJgGACQiLA3gYCwQgIAvgEASQgHAkgNAbQgnBWhBAqIgDABQgDAAgDgFg");
	this.shape_20.setTransform(3.9,2.9,0.208,0.208);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7EB913").s().p("AAfApQgNgPgSgGQgmgLgCgpQgBgRAIgEQAJgEAXAIQAlANgFAwQgCAPADAHQACAEAIALIgCAGQgDgGgGgIg");
	this.shape_21.setTransform(0.6,6.4,0.208,0.208);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7EB913").s().p("AAsA7QgSgWgagIQg4gQgDg8QgBgXAMgGQAMgGAiALQAdAKAMAcQAIAWgDAcQgDAWAEAJQADAHAMAPIgDAJQgEgJgJgLg");
	this.shape_22.setTransform(3.2,-1.5,0.208,0.208);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#528D10").s().p("AgGBHQgCgcgSgYQgjgsAigzQANgUAMACQAMADAVAcQATAbgIAeQgFAVgVAWQgPAQgBAKQgBAHABATIgIAGQADgKgBgOg");
	this.shape_23.setTransform(6.2,-3.6,0.208,0.208);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#528D10").s().p("Ag/BLIAQgRQAPgYAAgdQAAg4A4gVQAWgHAJAJQAKALgBAjQgCA5hGAMQgVAEgIAGIgRAVg");
	this.shape_24.setTransform(8.1,-3.6,0.208,0.208);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7EB913").s().p("AAtA7QgSgWgbgIQg3gQgEg7QgBgYAMgGQANgGAhALQAeAKALAdQAJAWgEAcQgCAVAEAKQADAGALAQIgDAIQgDgJgJgLg");
	this.shape_25.setTransform(1.5,4.2,0.208,0.208);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7EB913").s().p("AAYA0QgvgEgLgNQgRgUgKgEQgTgJgfANQgHADASgRQATgRAZgQQAegUAaAAQAaAAAdAZQAuAkAGAIQARAVgYAIQgVAHgfAAIgYgBg");
	this.shape_26.setTransform(6.6,0.1,0.208,0.208);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D7308").s().p("AA7BZQgHgYgEgGQgFgGgLAAQhAgCgVg2QgRgtAMgbQAOgcAoAUQAlAUAOAVQAKAPAFAgQAEAUgGARQgFANAEALQAGAPgBAHQgBABAAABQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_27.setTransform(2.2,1.5,0.208,0.208);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4D7308").s().p("AAQAlQgmgBgQgoQgCgIgFgBQgFgCgRAAQgFAAAFgCQAEgDALABQAIAAAIgGQAJgHAOgCQAVgEAMADQAQAFAVAVQAWAUgPAOQgNAMgeAAIgFAAg");
	this.shape_28.setTransform(8.1,-1.6,0.208,0.208);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4D7308").s().p("Ag1AZQgIgIgIACQgHABgWALQgHADAFgHQAEgGAOgGQAKgFAHgLQAIgQAQgMQAcgUAPgDQAZgFAqAOQArAOgLAdQgKAZgsAUQgUAJgSAAQggAAgegdg");
	this.shape_29.setTransform(5.7,2.8,0.208,0.208);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4D7308").s().p("AA8BTQgCgfgDgIQgEgNgQgDQgYgEgVgPQgfgSgNgdQgOgiAHgJQAHgJAkAJQAnAKAUAPQAXARABAeQAAASgDATQgCAOACANQADAQgCAKIgDAGIAAgEg");
	this.shape_30.setTransform(4.1,-2.9,0.208,0.208);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4D7308").s().p("AAAAkQgYgNgQgSQgLgKgNADIgkAOQgHAEAIgIQAHgHAPgEQANgEAKgJQAQgNARgKQAXgPAbALQAXAJAdAeQAbAZgFALQgEALgkAFIgMAAQgaAAgZgMg");
	this.shape_31.setTransform(4.8,5.6,0.208,0.208);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4D7308").s().p("AAgAmQgWgFgNgTQgLgOgDgNQgCgKgGAAQgEgBgZAGQgFACADgDQACgDAPgEQALgEAPgIQANgGATADQAkAHACA5QABATgBABIAAAAIgZgFg");
	this.shape_32.setTransform(2.7,7.9,0.208,0.208);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#886352").s().p("AguHGQg4jjAYjsQAaj/Bti8QAFgIAOAAQAOAAgFAKQhtC6gZD9QgXDpA3DhQADAIgPAEIgHACQgIAAgCgHg");
	this.shape_33.setTransform(1.7,0.6,0.208,0.208);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#886352").s().p("AkaCZQADgHAKgBQA+gFA8gjQA4giAog0IAjgsQASgaARgRQA1g0BCgXQBCgWBLAJQAKABgKAHQgJAHgHgBQhYgLhKAsQg8Akg6BOQgvBBhAAoQhGArhLAGIgDABQgJAAADgHg");
	this.shape_34.setTransform(8.8,-11.8,0.208,0.208);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7EB913").s().p("AADA1QgDgVgPgPQgegdAUgqQAIgQAJAAQAJABASAUQAfAgggArQgKANgBAIQAAAFACAPIgFAEQABgHgCgLg");
	this.shape_35.setTransform(3.8,-10.2,0.208,0.208);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7EB913").s().p("AAFBMQgFgegWgWQgrgqAdg9QALgXAOABQANABAaAcQArAvgtA+QgOATgBALQgBAHADAVIgHAHQABgLgCgPg");
	this.shape_36.setTransform(10.5,-16.3,0.208,0.208);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#528D10").s().p("AguBEQANgbgEggQgKg7A5ggQAXgMALAJQAMAKAEAmQAEAjgWAWQgSATgdAKQgXAHgHAIIgPAZIgKABQAHgIAHgOg");
	this.shape_37.setTransform(14.4,-16.9,0.208,0.208);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#528D10").s().p("AgaAsQgXgIgKACIgbAKIgJgFIAZgIQAbgOAPgaQAcg3BCALQAZAFAEANQADAPgTAfQgTAeggAGIgOABQgSAAgWgIg");
	this.shape_38.setTransform(16,-15.9,0.208,0.208);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7EB913").s().p("AAFBNQgFgegWgXQgsgqAeg8QALgXAOAAQANABAaAcQArAvgtA+QgOATgBALQgBAIADAVIgHAGQABgKgCgPg");
	this.shape_39.setTransform(5.9,-11.8,0.208,0.208);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7EB913").s().p("ABRBPQgggGgrgdQgqgdgDgQQgGgcgHgJQgNgSgkgFQgIgBAZgGQAcgHAggDQAlgDAYAOQAbAPAPAmQAWA5ACAMQAFAYgTAAIgIAAg");
	this.shape_40.setTransform(12.5,-12.7,0.208,0.208);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4D7308").s().p("AAABuQAGgagBgIQgBgIgJgGQgXgOgMgPQgXgeAHgoQAIg0AZgSQAZgUAbApQAbAnACAbQACATgNAhQgIAVgOANQgLAKgCAMQgCARgGAGIgDADQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_41.setTransform(8,-14,0.208,0.208);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4D7308").s().p("AgFApQgkgWAGgvQACgHgEgFQgEgDgQgJQgFgDAGAAQAGAAAKAGQAHAEALgBQAMgCAMAFQAYAJAJAJQAOANAJAdQAJAggXAGIgJABQgRAAgXgPg");
	this.shape_42.setTransform(15.1,-13.8,0.208,0.208);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4D7308").s().p("AAYA7QgogDgXgdQgMgPgJgYQgDgLgIgDQgHgDgbgBQgJAAAIgEQAIgEAQACQANABANgJQAPgLAWgCQAjgFASAGQAaAIAgAjQAhAigZAWQgUARgoAAIgQgBg");
	this.shape_43.setTransform(10.4,-10.9,0.208,0.208);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4D7308").s().p("AgHBsQAMgeACgJQADgOgMgLQgUgRgOgbQgTghADgiQAEgnALgFQAMgFAcAcQAiAfAKAYQANAdgPAaQgKASgNARQgJAMgFAOQgGARgFAIIgFAEQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBABgBg");
	this.shape_44.setTransform(12.4,-17.2,0.208,0.208);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4D7308").s().p("AAsA7QgggMgUghQgRgXgGgZQgEgSgNgDIgrgEQgIAAALgDQAKgDASACQAOACAPgDQAUgDAUgBQAgAAAUAYQAQAVANAqQALAngKAIQgEADgGAAQgMAAgZgKg");
	this.shape_45.setTransform(8,-8.4,0.208,0.208);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D7308").s().p("AAEAqQgQgQgEgZQgDgRAFgQQADgLgFgEQgDgCgbgHQgGgCAEgBQAEgBAQADQANADAQAAQARACAQANQAgAageA2QgJATgCAAIgVgSg");
	this.shape_46.setTransform(5.1,-7.6,0.208,0.208);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#886352").s().p("AgRHEQgMgBAFgIQAfg6ALhKQAKhDgIhJQgFgpgQg3QgWg9gKgeQgmh3AQhqQARhyBLhbQAGgGALACQAMACgIAJQiYC1BkEWQAqBwABBmQABB2gyBdQgEAHgLAAIgCAAg");
	this.shape_47.setTransform(3.3,-17.9,0.208,0.208);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7EB913").s().p("ABlBAQgpgRgtAKQhVARgxhPQgTggAMgQQANgSA2gJQAygJAiAfQAbAYARAqQAMAfANAKQAIAHAcAMIACAPQgLgKgUgJg");
	this.shape_48.setTransform(-0.4,-23.8,0.208,0.208);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#528D10").s().p("AA5BjQgWgmgogTQhQgkAIheQADgkAUgGQAUgHAvAYQAuAXALAuQAIAjgMAsQgJAhAEAPQADAKAPAbIgHANQgDgPgMgTg");
	this.shape_49.setTransform(1.8,-28.4,0.208,0.208);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#528D10").s().p("AgjBtQAFgsgWgoQgqhNBBhGQAZgbARAHQAUAIAYAxQAXAtgTAqQgPAhgmAcQgZAVgFAOQgFAKgEAeIgNAGQAGgNADgWg");
	this.shape_50.setTransform(4.9,-29.8,0.208,0.208);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7EB913").s().p("AibBBQANgmAXgnQAbgxAjgTQAngUA4ANQBYATAPAGQAnARgcAcQggAghEAdQhCAegagKQgkgPgRABQghACghAoIgDABQgDAAAKgcg");
	this.shape_51.setTransform(5.6,-23.5,0.208,0.208);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4D7308").s().p("ACJBdQgbgbgKgEQgKgGgQAIQhaAthEg+Qg4gwgCgtQgDgwBGgBQBEgBAgASQAZAOAfAqQATAYAEAaQAEAWANAMQASAQAEALQABAHgCAAQgBAAgEgDg");
	this.shape_52.setTransform(0.4,-18.9,0.208,0.208);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4D7308").s().p("Ag4AcQgJgIgIABQgHABgXAMQgHAEAEgHQAEgHAPgHQALgFAHgMQAIgQARgNQAdgWAQgEQAagFAsANQAuAOgLAfQgKAbguAWQgVAKgUAAQghAAgggdg");
	this.shape_53.setTransform(6.1,-27.3,0.208,0.208);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4D7308").s().p("AiABtQACgMAPgTQAKgOAAgWQgBgbAOgbQAXgvAWgSQAfgYBAgLQBFgMAHAwQAGArguA6Qg5BKhggcQgQgFgKAHQgJAHgWAfQgDAEgBAAQgCAAAAgGg");
	this.shape_54.setTransform(6.1,-19.3,0.208,0.208);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4D7308").s().p("ACNBYQgZgogJgKQgOgPgZAIQgjALgqgDQg4gFgngfQgrghADgRQADgTA4gOQA/gQAkAGQAsAIAWAnQAOAbALAbQAHAUANAQQAPAVAEAPQACAJgBAAQgBAAgDgEg");
	this.shape_55.setTransform(-0.3,-26.3,0.208,0.208);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#886352").s().p("AFuDvQgng9hDgvQg9gqhLgZQglgNg9gIQhOgMgUgEQhxgZhQg9QhUhCgphoQgEgJANgEQANgDAEAJQBVDXERAnQBGALAeAHQA3AMArATQCGA9BABkQAFAIgMAGQgEACgEAAQgGAAgDgFg");
	this.shape_56.setTransform(-4.9,-13.6,0.208,0.208);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7EB913").s().p("AhSA1QgGgOALgkQALgfAfgNQAXgJAfAEQAXACAKgEQAHgDARgNIAJADQgKAEgLAKQgYAUgJAcQgRA7hAAEIgGABQgUAAgGgMg");
	this.shape_57.setTransform(0.5,-8.4,0.208,0.208);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7EB913").s().p("Ah2BNQgKgUARg0QAQguAsgSQAigNAtAFQAhAEAOgGQAKgFAYgSIAOAFQgOAFgRAOQgiAcgMAqQgZBWheAFIgIAAQgdAAgIgQg");
	this.shape_58.setTransform(-11.7,-12.4,0.208,0.208);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#528D10").s().p("Ah3AsQgegTADgVQAEgTAtggQApgeAuAMQAhAJAiAgQAZAXAPACQALACAegBIAJAMQgPgEgWABQgsADgkAcQgiAbgmAAQglAAgogZg");
	this.shape_59.setTransform(-15,-17.1,0.208,0.208);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#528D10").s().p("ABaBLQglgZgtABQhXAAgghYQgNgiAPgOQARgPA2ACQAxABAdAlQAXAdAIAtQAFAhAKAMQAHAIAZASIgBAOQgJgMgSgMg");
	this.shape_60.setTransform(-15,-20,0.208,0.208);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7EB913").s().p("Ah2BNQgKgUARg0QAQguAsgSQAigOAsAGQAiAEAOgGQAKgFAYgSIAOAEQgPAGgQAOQgiAcgNAqQgYBVheAGIgIAAQgdAAgIgQg");
	this.shape_61.setTransform(-2.9,-9.8,0.208,0.208);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7EB913").s().p("AACCdQgbgdgZgnQgfgvAAgoQAAgqAmgtQA5hGAMgJQAhgcAMAmQAPAtgGBJQgFBJgVASQgeAagHAPQgNAdATAwQABABAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgDAAgSgUg");
	this.shape_62.setTransform(-9.3,-17.7,0.208,0.208);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4D7308").s().p("Ah0BbQgsgUAfg/QAfg6AhgWQAXgQAygIQAfgFAaAJQAVAHAQgGQAXgJALADQAMACgLAEQgkAMgJAGQgJAHgBARQgCBlhVAfQgqAQgeAAQgWAAgRgIg");
	this.shape_63.setTransform(-7.1,-10.8,0.208,0.208);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4D7308").s().p("AgcBqQgEgHABgRQABgMgJgMQgMgPgDgVQgGgiAFgSQAHgZAhghQAggiAWAYQAVAWgCA0QgCA8hAAYQgLAEgCAIQgDAHAAAaQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAIgDgDg");
	this.shape_64.setTransform(-11.9,-19.9,0.208,0.208);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4D7308").s().p("AArCdQgKgGgKgWQgHgQgSgKQgYgMgTgaQgfgrgFgZQgIgmAVhBQAWhCAtARQAoAPAgBEQAmBShGBLQgMAMACAMQABAKASAiQADAHgCAAIgGgDg");
	this.shape_65.setTransform(-5.2,-16.2,0.208,0.208);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4D7308").s().p("Ah9BhQgPgLAOg5QAPg9AXgeQAbglAtAAQAdAAAeAEQAVADAUgEQAagEAPAEQAQAEgNABQgvADgNAEQgUAFgEAZQgGAlgYAjQgdAvgtAUQgjAPgRAAQgJAAgEgDg");
	this.shape_66.setTransform(-13.9,-13.8,0.208,0.208);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4D7308").s().p("AANCcQgLgLgHgYQgIgTgNgRQgTgXgQgbQgXglARgqQAOgjAuguQAngpASAHQARAGAHA4QAGAxgZAwQgTAogcAYQgRARAFATIAXA4QADAFgCAAQgBAAgGgFg");
	this.shape_67.setTransform(-0.8,-14.9,0.208,0.208);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4D7308").s().p("AgeBZQgFgEgGgXIgTgpQgJgVAFgcQALg5BYgDQAfgBABABQABACgJAmQgHAhgdAVQgWARgVAFQgRADAAAKQAAAFAJAnQABAFgBAAIgCgBg");
	this.shape_68.setTransform(2.7,-11.6,0.208,0.208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-32.8,36.1,65.6);


(lib.Tween103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEF7DC","#FEF4D8","#FEEBCE","#FDDBBC","#FCC5A4","#FBA984","#F9865D","#F75E30","#F64817"],[0,0.169,0.314,0.447,0.576,0.702,0.824,0.941,1],0.3,-5,0,7.6).s().p("AhYAoIAlhPIBpAAIAjBPg");
	this.shape.setTransform(0.1,7.3,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgaAAIA1AA");
	this.shape_1.setTransform(0.1,-9.2,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,12.3).s().p("AhjCOIBKidIABhtIgKAAIAAgRIBKAAIAAARIgMABIABBtIBHCcg");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-10.8,15.4,21.8);


(lib.Tween102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEF7DC","#FEF4D8","#FEEBCE","#FDDBBC","#FCC5A4","#FBA984","#F9865D","#F75E30","#F64817"],[0,0.169,0.314,0.447,0.576,0.702,0.824,0.941,1],0.3,-5,0,7.6).s().p("AhYAoIAlhPIBpAAIAjBPg");
	this.shape.setTransform(0.1,7.2,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgaAAIA1AA");
	this.shape_1.setTransform(0.1,-9.3,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,12.3).s().p("AhjCOIBKidIABhtIgKAAIAAgRIBKAAIAAARIgMABIABBtIBHCcg");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-10.9,15.4,21.8);


(lib.Tween101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#10F6CF","#13F3CF","#1AE8D1","#24D7D4","#31BED8","#419FDD","#5578E4","#6B4CEC","#841DF5"],[0,0.161,0.298,0.424,0.545,0.667,0.78,0.89,1],0.3,-6.6,-0.1,10.1).s().p("Ah0A1IAwhpICLAAIAuBpg");
	this.shape.setTransform(0.2,9.6,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgjAAIBHAA");
	this.shape_1.setTransform(0.2,-12.3,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,16.3).s().p("AiDC7IBijQIABiQIgOAAIAAgVIBjAAIAAAVIgPABIABCRIBdDOg");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-14.3,20.4,28.8);


(lib.Tween100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#10F6CF","#13F3CF","#1AE8D1","#24D7D4","#31BED8","#419FDD","#5578E4","#6B4CEC","#841DF5"],[0,0.161,0.298,0.424,0.545,0.667,0.78,0.89,1],0.3,-6.6,-0.1,10.1).s().p("Ah0A1IAwhpICLAAIAuBpg");
	this.shape.setTransform(0.2,9.6,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgjAAIBHAA");
	this.shape_1.setTransform(0.2,-12.3,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,16.3).s().p("AiDC7IBijQIABiQIgOAAIAAgVIBjAAIAAAVIgPABIABCRIBdDOg");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-14.4,20.4,28.8);


(lib.Tween99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape.setTransform(-0.1,6.2,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape_1.setTransform(0.1,-6.1,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_2.setTransform(15.2,0.2,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_3.setTransform(-15.1,0.2,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-7.1,34.8,14.3);


(lib.Tween98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape.setTransform(-0.1,6.1,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape_1.setTransform(0.1,-6.2,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_2.setTransform(15.2,0.1,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_3.setTransform(-15.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-7.1,34.8,14.3);


(lib.Tween97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A455E8").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A455E8").s().p("AAABRQgEgBgFgDQgDgEAAgFIAAiHQAAgFADgEQAFgEAEABIAAAAQAFgBAEAEQAEAEAAAFIAACHQAAAFgEAEQgEADgFABg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AghAAIBCAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.3,20);


(lib.Tween96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A455E8").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A455E8").s().p("AAABRQgEgBgFgDQgDgEAAgFIAAiHQAAgFADgEQAFgEAEABIAAAAQAFgBAEAEQAEAEAAAFIAACHQAAAFgEAEQgEADgFABg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AghAAIBCAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.3,20);


(lib.Tween95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8BA37").s().p("AgMBQIAAigIAZAAIAACgg");
	this.shape.setTransform(0,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8BA37").s().p("AAABQQgFAAgDgDQgEgDAAgGIAAiHQAAgFAEgEQADgDAFgBIABAAQAEABAEADQAEAEAAAFIAACHQAAAFgEAEQgEADgEAAg");
	this.shape_1.setTransform(0,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(0,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB5QgHAAgEgEQgFgFAAgHIAAjRQAAgGAFgFQAFgGAGAAIABAAQAHAAAEAGQAFAFAAAGIAADRQAAAHgFAFQgEAEgHAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.3,20);


(lib.Tween94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8BA37").s().p("AgMBQIAAigIAZAAIAACgg");
	this.shape.setTransform(0,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8BA37").s().p("AAABQQgFAAgDgDQgEgDAAgGIAAiHQAAgFAEgEQADgDAFgBIABAAQAEABAEADQAEAEAAAFIAACHQAAAFgEAEQgEADgEAAg");
	this.shape_1.setTransform(0,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(0,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB5QgHAAgEgEQgFgFAAgHIAAjRQAAgGAFgFQAFgGAGAAIABAAQAHAAAEAGQAFAFAAAGIAADRQAAAHgFAFQgEAEgHAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.3,20);


(lib.Tween93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C5FE").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4C5FE").s().p("AAABRQgFgBgDgDQgEgEAAgFIAAiHQAAgFAEgEQADgEAFABIABAAQAFgBAEAEQADAEAAAFIAACHQAAAFgDAEQgEADgFABg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(0,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-10.5,7.2,20);


(lib.Tween92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C5FE").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4C5FE").s().p("AAABRQgFgBgDgDQgEgEAAgFIAAiHQAAgFAEgEQADgEAFABIABAAQAFgBAEAEQADAEAAAFIAACHQAAAFgDAEQgEADgFABg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(0,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-10.5,7.2,20);


(lib.Tween91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34DCE9").s().p("AgMBQIAAigIAZAAIAACgg");
	this.shape.setTransform(0,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34DCE9").s().p("AAABQQgEAAgEgDQgEgDAAgGIAAiHQAAgFAEgEQAEgDAEgBIAAAAQAGABADADQAEAEAAAFIAACHQAAAGgEADQgDADgGAAg");
	this.shape_1.setTransform(0,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(0,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB5QgHAAgEgEQgFgFAAgHIAAjRQAAgGAFgFQAFgGAGAAIABAAQAHAAAEAGQAFAFAAAGIAADRQAAAHgFAFQgEAEgHAAg");
	this.shape_4.setTransform(0,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-10.5,7.2,20);


(lib.Tween90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34DCE9").s().p("AgMBQIAAigIAZAAIAACgg");
	this.shape.setTransform(0,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34DCE9").s().p("AAABQQgEAAgEgDQgEgDAAgGIAAiHQAAgFAEgEQAEgDAEgBIAAAAQAGABADADQAEAEAAAFIAACHQAAAGgEADQgDADgGAAg");
	this.shape_1.setTransform(0,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(0,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB5QgHAAgEgEQgFgFAAgHIAAjRQAAgGAFgFQAFgGAGAAIABAAQAHAAAEAGQAFAFAAAGIAADRQAAAHgFAFQgEAEgHAAg");
	this.shape_4.setTransform(0,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-10.5,7.2,20);


(lib.Tween89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B574F8","#0DB89B"],[0,1],0.1,-6.3,-0.1,11.6).s().p("AhVBHQgMgQgLgaQgVgyAKgxIDsAAIAGAoQAAAwgiA1g");
	this.shape.setTransform(0,10.3,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgpAAIBTAA");
	this.shape_1.setTransform(-0.2,-13,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,17.7).s().p("AhbDUQgcgogIgzQgPhlBigzIAAiTIgNgGIAAgbIBwAAIgBAZIgPAKIgBCQIAYAPQAbASARAaQA2BShEBng");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-16.3,20,32.7);


(lib.Tween88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B574F8","#0DB89B"],[0,1],0.1,-6.3,-0.1,11.6).s().p("AhVBHQgMgQgLgaQgVgyAKgxIDsAAIAGAoQAAAwgiA1g");
	this.shape.setTransform(0,10.3,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgpAAIBTAA");
	this.shape_1.setTransform(-0.2,-13.1,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,17.7).s().p("AhbDUQgcgogIgzQgPhlBigzIAAiTIgNgGIAAgbIBwAAIgBAZIgPAKIgBCQIAYAPQAbASARAaQA2BShEBng");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-16.3,20,32.7);


(lib.Tween87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F18799","#AF2A40"],[0,1],0,-4.8,-0.1,8.9).s().p("AhAA2QgKgMgIgUQgQglAHgmIC0AAIAFAfQgBAjgaApg");
	this.shape.setTransform(0,7.9,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgeAAIA9AA");
	this.shape_1.setTransform(-0.2,-9.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,13.4).s().p("AhFChQgVgegGgmQgMhOBLgmIAAhwIgKgEIAAgWIBUAAIAAAUIgMAHIAABuIASAMQAUANANAUQAqA9g0BPg");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-12.4,15.2,24.8);


(lib.Tween86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F18799","#AF2A40"],[0,1],0,-4.8,-0.1,8.9).s().p("AhAA2QgKgMgIgUQgQglAHgmIC0AAIAFAfQgBAjgaApg");
	this.shape.setTransform(0,7.9,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgeAAIA9AA");
	this.shape_1.setTransform(-0.2,-9.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,13.4).s().p("AhFChQgVgegGgmQgMhOBLgmIAAhwIgKgEIAAgWIBUAAIAAAUIgMAHIAABuIASAMQAUANANAUQAqA9g0BPg");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-12.4,15.2,24.8);


(lib.Tween85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E9DF2B","#E5DD2B","#DBD929","#C9D125","#B1C620","#91B81A","#6AA813","#519D0E"],[0,0.192,0.353,0.506,0.651,0.792,0.925,1],0.1,-3.5,0,6.5).s().p("AguAnQgHgJgGgOQgMgbAFgbICDAAIADAWQAAAagTAdg");
	this.shape.setTransform(-0.1,5.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgWAAIAtAA");
	this.shape_1.setTransform(-0.1,-7.2,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,9.8).s().p("AgyB2QgQgWgEgdQgJg4A3gbIAAhSIgHgEIAAgPIA9AAIAAAOIgJAGIAABQIANAIQAPAKAKAOQAeAtgmA6g");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-9,11.1,18.2);


(lib.Tween84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E9DF2B","#E5DD2B","#DBD929","#C9D125","#B1C620","#91B81A","#6AA813","#519D0E"],[0,0.192,0.353,0.506,0.651,0.792,0.925,1],0.1,-3.5,0,6.5).s().p("AguAnQgHgJgGgOQgMgbAFgbICDAAIADAWQAAAagTAdg");
	this.shape.setTransform(-0.1,5.7,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgWAAIAtAA");
	this.shape_1.setTransform(-0.1,-7.3,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,9.8).s().p("AgyB2QgQgWgEgdQgJg4A3gbIAAhSIgHgEIAAgPIA9AAIAAAOIgJAGIAABQIANAIQAPAKAKAOQAeAtgmA6g");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-9.1,11.1,18.2);


(lib.Tween83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DCEBCC","#D4E8C8","#BEDEBE","#9ACEAE","#68B997","#289D7A","#279D7A","#2B9F7C","#36A483","#49AC8F","#53B095"],[0,0.106,0.271,0.475,0.71,0.965,0.969,0.98,0.988,0.996,1],0.1,-4.1,0,6.6).s().p("AgmAZQgSgfADgTIBrAAIAAANQgCAOgMAXg");
	this.shape.setTransform(0,5.2,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgRAAIAjAA");
	this.shape_1.setTransform(-0.1,-5.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8).s().p("AgpBgQgMgSgEgXQgHguAtgWIAAhDIgHgCIABgNIAxAAIAAAMIgHAEIgBBCIALAGQANAHAHAMQAZAlgfAvg");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-7.4,9.1,14.8);


(lib.Tween82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DCEBCC","#D4E8C8","#BEDEBE","#9ACEAE","#68B997","#289D7A","#279D7A","#2B9F7C","#36A483","#49AC8F","#53B095"],[0,0.106,0.271,0.475,0.71,0.965,0.969,0.98,0.988,0.996,1],0.1,-4.1,0,6.6).s().p("AgmAZQgSgfADgTIBrAAIAAANQgCAOgMAXg");
	this.shape.setTransform(0,5.2,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgRAAIAjAA");
	this.shape_1.setTransform(-0.1,-5.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8).s().p("AgpBgQgMgSgEgXQgHguAtgWIAAhDIgHgCIABgNIAxAAIAAAMIgHAEIgBBCIALAGQANAHAHAMQAZAlgfAvg");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-7.4,9.1,14.8);


(lib.Tween81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E6D0FC","#E6CEF8","#E6C7EE","#E8BDDC","#E9AEC4","#EC9CA4","#EF847D","#F2694F","#F64A1C","#F64817"],[0,0.161,0.294,0.42,0.541,0.659,0.773,0.882,0.992,1],0.1,-5.5,-0.1,8.6).s().p("AgyAiQgGgLgGgPQgLgaACgPICOAAIABARQgDAUgQAeg");
	this.shape.setTransform(0,6.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgYAAIAxAA");
	this.shape_1.setTransform(-0.1,-7.7,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,10.5).s().p("Ag2B+QgQgYgFgeQgJg8A7geIAAhXIgJgEIABgQIBBAAIAAAPIgJAGIgBBWIAOAJQARAKAKAPQAgAwgoA+g");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-9.7,11.9,19.5);


(lib.Tween80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E6D0FC","#E6CEF8","#E6C7EE","#E8BDDC","#E9AEC4","#EC9CA4","#EF847D","#F2694F","#F64A1C","#F64817"],[0,0.161,0.294,0.42,0.541,0.659,0.773,0.882,0.992,1],0.1,-5.5,-0.1,8.6).s().p("AgyAiQgGgLgGgPQgLgaACgPICOAAIABARQgDAUgQAeg");
	this.shape.setTransform(0,6.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgYAAIAxAA");
	this.shape_1.setTransform(-0.1,-7.8,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,10.5).s().p("Ag2B+QgQgYgFgeQgJg8A7geIAAhXIgJgEIABgQIBBAAIAAAPIgJAGIgBBWIAOAJQARAKAKAPQAgAwgoA+g");
	this.shape_2.setTransform(0,0,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-9.7,11.9,19.5);


(lib.Tween79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape.setTransform(-0.1,6.2,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape_1.setTransform(0.1,-6.1,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_2.setTransform(15.2,0.2,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_3.setTransform(-15.1,0.2,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-7.1,34.8,14.3);


(lib.Tween78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape.setTransform(-0.1,6.2,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape_1.setTransform(0.1,-6.1,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_2.setTransform(15.2,0.2,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_3.setTransform(-15.1,0.2,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-7.1,34.8,14.3);


(lib.Tween77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9DF2B").s().p("AgMBQIAAifIAZAAIAACfg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9DF2B").s().p("AAABRQgEAAgFgEQgDgEAAgFIAAiHQAAgFADgEQAFgEAEAAIAAAAQAFAAAEAEQAEAEAAAFIAACHQAAAFgEAEQgEAEgFAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AghAAIBCAA");
	this.shape_2.setTransform(0,-9.4,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIAAAAQAIAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgIAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.4,7.2,20);


(lib.Tween76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9DF2B").s().p("AgMBQIAAifIAZAAIAACfg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9DF2B").s().p("AAABRQgEAAgFgEQgDgEAAgFIAAiHQAAgFADgEQAFgEAEAAIAAAAQAFAAAEAEQAEAEAAAFIAACHQAAAFgEAEQgEAEgFAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AghAAIBCAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIAAAAQAIAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgIAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.2,20);


(lib.Tween75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#60D223").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60D223").s().p("AAABQQgFAAgDgDQgEgEAAgFIAAiHQAAgFAEgEQADgEAFAAIABAAQAEAAAEAEQAEAEAAAFIAACHQAAAFgEAEQgEADgEAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.2,20);


(lib.Tween74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#60D223").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60D223").s().p("AAABQQgFAAgDgDQgEgEAAgFIAAiHQAAgFAEgEQADgEAFAAIABAAQAEAAAEAEQAEAEAAAFIAACHQAAAFgEAEQgEADgEAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.2,20);


(lib.Tween73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FEF7").s().p("AgMBQIAAifIAZAAIAACfg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FEF7").s().p("AAABRQgFAAgDgEQgEgEAAgFIAAiHQAAgFAEgEQADgEAFAAIABAAQAFAAAEAEQADAEAAAFIAACHQAAAFgDAEQgFAEgEAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.4,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(0,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-10.4,7.2,20);


(lib.Tween72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FEF7").s().p("AgMBQIAAifIAZAAIAACfg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FEF7").s().p("AAABRQgFAAgDgEQgEgEAAgFIAAiHQAAgFAEgEQADgEAFAAIABAAQAFAAAEAEQADAEAAAFIAACHQAAAFgDAEQgFAEgEAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(0,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-10.5,7.2,20);


(lib.Tween71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E73663").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E73663").s().p("AAABQQgEAAgEgDQgEgEAAgFIAAiHQAAgFAEgEQAEgEAEAAIAAAAQAGAAADAEQAEAEAAAFIAACHQAAAFgEAEQgDADgGAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.2,20);


(lib.Tween70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E73663").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E73663").s().p("AAABQQgEAAgEgDQgEgEAAgFIAAiHQAAgFAEgEQAEgEAEAAIAAAAQAGAAADAEQAEAEAAAFIAACHQAAAFgEAEQgDADgGAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.2,20);


(lib.Tween69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34DCE9").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34DCE9").s().p("AAABQQgFAAgDgDQgEgEAAgFIAAiHQAAgFAEgEQADgDAFgBIABAAQAFABAEADQADAEAAAFIAACHQAAAGgDADQgEADgFAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(0,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-10.5,7.2,20);


(lib.Tween68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34DCE9").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34DCE9").s().p("AAABQQgFAAgDgDQgEgEAAgFIAAiHQAAgFAEgEQADgDAFgBIABAAQAFABAEADQADAEAAAFIAACHQAAAGgDADQgEADgFAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(0,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-10.5,7.2,20);


(lib.Tween67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C5FE").s().p("AgMBRIAAigIAZAAIAACgg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4C5FE").s().p("AAABRQgEAAgFgEQgDgEAAgFIAAiHQAAgFADgEQAFgEAEAAIABAAQAFAAADAEQAEAEAAAFIAACHQAAAFgEAEQgDAEgFAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AghAAIBCAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgHAAgFgFQgEgFAAgHIAAjRQAAgHAEgFQAFgFAHAAIABAAQAGAAAFAFQAFAFAAAHIAADRQAAAHgFAFQgFAFgGAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.2,20);


(lib.Tween66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C5FE").s().p("AgMBRIAAigIAZAAIAACgg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4C5FE").s().p("AAABRQgEAAgFgEQgDgEAAgFIAAiHQAAgFADgEQAFgEAEAAIABAAQAFAAADAEQAEAEAAAFIAACHQAAAFgEAEQgDAEgFAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AghAAIBCAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgHAAgFgFQgEgFAAgHIAAjRQAAgHAEgFQAFgFAHAAIABAAQAGAAAFAFQAFAFAAAHIAADRQAAAHgFAFQgFAFgGAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.2,20);


(lib.Tween65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8BA37").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8BA37").s().p("AAABQQgEAAgEgDQgEgDAAgGIAAiHQAAgFAEgEQAEgDAEgBIAAAAQAGABADADQAEAEAAAFIAACHQAAAGgEADQgDADgGAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.2,20);


(lib.Tween64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8BA37").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8BA37").s().p("AAABQQgEAAgEgDQgEgDAAgGIAAiHQAAgFAEgEQAEgDAEgBIAAAAQAGABADADQAEAEAAAFIAACHQAAAGgEADQgDADgGAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.2,20);


(lib.Tween63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A455E8").s().p("AgMBRIAAigIAZAAIAACgg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A455E8").s().p("AAABRQgEAAgEgEQgEgEAAgFIAAiHQAAgFAEgEQAEgEAEAAIAAAAQAGAAADAEQAEAEAAAFIAACHQAAAFgEAEQgEAEgFAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.2,20);


(lib.Tween62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A455E8").s().p("AgMBRIAAigIAZAAIAACgg");
	this.shape.setTransform(-0.1,1.8,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A455E8").s().p("AAABRQgEAAgEgEQgEgEAAgFIAAiHQAAgFAEgEQAEgEAEAAIAAAAQAGAAADAEQAEAEAAAFIAACHQAAAFgEAEQgEAEgFAAg");
	this.shape_1.setTransform(-0.1,2.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_2.setTransform(0,-9.5,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(-0.1,-8.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_4.setTransform(-0.1,0.1,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-10.5,7.2,20);


(lib.Tween61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape.setTransform(-0.1,6.2,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape_1.setTransform(0.1,-6.1,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_2.setTransform(15.2,0.2,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_3.setTransform(-15.1,0.2,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-7.1,34.8,14.3);


(lib.Tween60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape.setTransform(-0.1,6.1,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape_1.setTransform(0.1,-6.2,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_2.setTransform(15.2,0.2,0.766,0.766);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_3.setTransform(-15.1,0.2,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-7.1,34.8,14.3);


(lib.Tween59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59956C").ss(0.2).p("AADAAQgDACgBgDQgDgDAEACQADACAAAAgAADAJIAAgJ");
	this.shape.setTransform(-0.2,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7DCD2C").s().p("AgBAAQgDgDAEACQADABAAABIAAABIgCAAQgBAAgBgCg");
	this.shape_1.setTransform(-0.2,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59956C").ss(0.2).p("AgCAAIACABQABgBACgBQACgDgFACQgCACAAAAgAgCAJIAAgJ");
	this.shape_2.setTransform(0.5,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DCD2C").s().p("AgCACIAAgBQAAgBACgBQAFgCgCADQgCACgBAAg");
	this.shape_3.setTransform(0.5,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#59956C").ss(0.2).p("AAEAAQgEADgCgFQgDgEAFACQAEADAAABgAAEALIAAgL");
	this.shape_4.setTransform(-0.3,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7DCD2C").s().p("AgCAAQgDgEAFADQAEABAAACIAAABIgCAAQgCAAgCgDg");
	this.shape_5.setTransform(-0.3,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#59956C").ss(0.2).p("AgDAAIADABQABgBACgCQADgEgFACQgEADAAABgAgDALIAAgL");
	this.shape_6.setTransform(0.6,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7DCD2C").s().p("AgDADIAAgBQAAgCAEgBQAFgDgDAEQgCADgBAAg");
	this.shape_7.setTransform(0.6,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#59956C").ss(0.2).p("AAHAAQgBAAgDAAQgDAAgEgFQgFgHAJAEQAHAEAAAEgAAHAQIAAgQ");
	this.shape_8.setTransform(-0.6,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7DCD2C").s().p("AgEAAQgFgHAJAEQAHADAAADIAAABIgEABQgDAAgEgFg");
	this.shape_9.setTransform(-0.6,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#59956C").ss(0.2).p("AgGAAIAEAAQADAAAEgFQAFgHgJAEQgHAEAAAEgAgGAQIAAgQ");
	this.shape_10.setTransform(0.9,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7DCD2C").s().p("AgGAEIAAgBQAAgDAHgDQAJgEgFAHQgEAFgDAAg");
	this.shape_11.setTransform(0.9,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#59956C").ss(0.2).p("AAJAAQgCAAgDAAQgEAAgGgHQgGgJAMAFQAJAFAAAGgAAJATIAAgT");
	this.shape_12.setTransform(-0.8,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7DCD2C").s().p("AAEAHQgEgBgGgGQgGgJAMAFQAJAEAAAEIAAACIgEABIgBAAg");
	this.shape_13.setTransform(-0.8,1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#59956C").ss(0.2).p("AgIAAIAFAAQAEAAAGgHQAGgJgMAFQgJAFAAAGgAgIATIAAgT");
	this.shape_14.setTransform(1.1,2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7DCD2C").s().p("AgIAGIAAgCQAAgEAJgEQAMgFgGAJQgGAGgEABg");
	this.shape_15.setTransform(1.1,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#59956C").ss(0.2).p("AALgBQgCABgEAAQgGgBgGgJQgIgLAOAGQAMAHAAAHgAALAXIAAgY");
	this.shape_16.setTransform(-1,3.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7DCD2C").s().p("AAFAIQgGgBgGgHQgIgLAOAGQAMAFAAAGIAAABIgFABIgBAAg");
	this.shape_17.setTransform(-1,2.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#59956C").ss(0.2).p("AgKgBIAGABQAGgBAGgJQAIgLgOAGQgMAHAAAHgAgKAXIAAgY");
	this.shape_18.setTransform(1.3,3.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7DCD2C").s().p("AgKAHIAAgBQAAgGAMgFQAOgGgIALQgGAHgGABg");
	this.shape_19.setTransform(1.3,2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#59956C").ss(0.2).p("AANgBQgDABgFAAQgHgBgHgLQgJgNAQAHQAPAIAAAJgAANAbIAAgc");
	this.shape_20.setTransform(-1.2,4.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7DCD2C").s().p("AAFAKQgHgBgHgKQgJgNAQAIQAPAGAAAHIAAABQgCACgEAAIgCAAg");
	this.shape_21.setTransform(-1.2,3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#59956C").ss(0.2).p("AgMgBIAIABQAHgBAHgLQAJgNgQAHQgPAIAAAJgAgMAbIAAgc");
	this.shape_22.setTransform(1.5,4.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7DCD2C").s().p("AgMAIIAAgBQAAgHAPgGQAQgIgJANQgHAKgHABg");
	this.shape_23.setTransform(1.5,3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#59956C").ss(0.2).p("AAPgCQgEACgFgBQgIgBgIgNQgKgOASAIQARAJAAAKgAAPAeIAAgg");
	this.shape_24.setTransform(-1.4,5.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7DCD2C").s().p("AAGALQgIgBgIgLQgKgOASAIQARAHAAAIIAAACQgDABgEAAIgCAAg");
	this.shape_25.setTransform(-1.4,3.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#59956C").ss(0.2).p("AgOgCIAJABQAIgBAIgNQAKgOgSAIQgRAJAAAKgAgOAeIAAgg");
	this.shape_26.setTransform(1.7,5.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7DCD2C").s().p("AgOAKIAAgCQAAgIARgHQASgIgKAOQgIALgIABg");
	this.shape_27.setTransform(1.7,3.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#59956C").ss(0.2).p("AAPgCQgEACgFgBQgIgBgIgNQgKgOASAIQARAJAAAKgAAPAeIAAgg");
	this.shape_28.setTransform(-1.4,6.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7DCD2C").s().p("AAGALQgIgBgIgLQgKgOASAIQARAHAAAIIAAACQgDABgEAAIgCAAg");
	this.shape_29.setTransform(-1.4,5.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#59956C").ss(0.2).p("AgOgCIAJABQAIgBAIgNQAKgOgSAIQgRAJAAAKgAgOAeIAAgg");
	this.shape_30.setTransform(1.7,6.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7DCD2C").s().p("AgOAKIAAgCQAAgIARgHQASgIgKAOQgIALgIABg");
	this.shape_31.setTransform(1.7,5.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#59956C").ss(0.2).p("AARAiIAAglQgEADgFgBQgKgCgKgOQgLgRAVAKQATAKAAAJ");
	this.shape_32.setTransform(-1.6,7.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7DCD2C").s().p("AAIANQgKgCgKgMQgLgRAVAKQATAIAAAJIAAACQgDACgDAAIgDAAg");
	this.shape_33.setTransform(-1.6,6.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#59956C").ss(0.2).p("AgQAiIAAglIAJACQAKgCAKgOQALgRgVAKQgTAKAAAJ");
	this.shape_34.setTransform(1.9,7.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7DCD2C").s().p("AgQALIAAgCQAAgJATgIQAVgKgLARQgKAMgKACg");
	this.shape_35.setTransform(1.9,6.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#59956C").ss(0.2).p("AATAlIAAgpQgEADgHgBQgLgBgKgQQgMgSAWAKQAWALAAAK");
	this.shape_36.setTransform(-1.8,9.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7DCD2C").s().p("AAIAOQgLgCgKgOQgMgSAWALQAWAJAAAJIAAADQgEACgFAAIgCAAg");
	this.shape_37.setTransform(-1.8,7.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#59956C").ss(0.2).p("AgSAlIAAgpIALACQALgBAKgQQAMgSgWAKQgWALAAAK");
	this.shape_38.setTransform(2.1,9.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7DCD2C").s().p("AgSAMIAAgDQAAgJAWgJQAWgLgMASQgKAOgLACg");
	this.shape_39.setTransform(2.1,7.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#ADB8BC").p("AgZAAIAyAA");
	this.shape_40.setTransform(0.2,-11.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.8).s().p("AhfCHIBHiVIABhpIgKAAIAAgPIBHAAIAAAPIgLABIABBpIBECUg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-13.5,19.2,27.5);


(lib.Tween58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59956C").ss(0.2).p("AADAJIAAgJQgDACgBgDQgDgDAEACQADACAAAA");
	this.shape.setTransform(-0.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7DCD2C").s().p("AgBAAQgDgDAEACQADABAAABIAAABIgCAAQgBAAgBgCg");
	this.shape_1.setTransform(-0.2,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59956C").ss(0.2).p("AgCAJIAAgJIACABQABgBACgBQACgDgFACQgCACAAAA");
	this.shape_2.setTransform(0.5,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DCD2C").s().p("AgCACIAAgBQAAgBACgBQAFgCgCADQgCACgBAAg");
	this.shape_3.setTransform(0.5,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#59956C").ss(0.2).p("AAEALIAAgLQgEADgCgFQgDgEAFACQAEADAAAB");
	this.shape_4.setTransform(-0.3,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7DCD2C").s().p("AgCAAQgDgEAFADQAEABAAACIAAABIgCAAQgCAAgCgDg");
	this.shape_5.setTransform(-0.3,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#59956C").ss(0.2).p("AgDALIAAgLIADABQABgBACgCQADgEgFACQgEADAAAB");
	this.shape_6.setTransform(0.6,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7DCD2C").s().p("AgDADIAAgBQAAgCAEgBQAFgDgDAEQgCADgBAAg");
	this.shape_7.setTransform(0.6,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#59956C").ss(0.2).p("AAHAQIAAgQQgBAAgDAAQgDAAgEgFQgFgHAJAEQAHAEAAAE");
	this.shape_8.setTransform(-0.6,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7DCD2C").s().p("AgEAAQgFgHAJAEQAHADAAADIAAABIgEABQgDAAgEgFg");
	this.shape_9.setTransform(-0.6,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#59956C").ss(0.2).p("AgGAQIAAgQIAEAAQADAAAEgFQAFgHgJAEQgHAEAAAE");
	this.shape_10.setTransform(0.9,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7DCD2C").s().p("AgGAEIAAgBQAAgDAHgDQAJgEgFAHQgEAFgDAAg");
	this.shape_11.setTransform(0.9,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#59956C").ss(0.2).p("AAJATIAAgTQgCAAgDAAQgEAAgGgHQgGgJAMAFQAJAFAAAG");
	this.shape_12.setTransform(-0.8,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7DCD2C").s().p("AAEAHQgEgBgGgGQgGgJAMAFQAJAEAAAEIAAACIgEABIgBAAg");
	this.shape_13.setTransform(-0.8,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#59956C").ss(0.2).p("AgIATIAAgTIAFAAQAEAAAGgHQAGgJgMAFQgJAFAAAG");
	this.shape_14.setTransform(1.1,2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7DCD2C").s().p("AgIAGIAAgCQAAgEAJgEQAMgFgGAJQgGAGgEABg");
	this.shape_15.setTransform(1.1,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#59956C").ss(0.2).p("AALAXIAAgYQgCABgEAAQgGgBgGgJQgIgLAOAGQAMAHAAAH");
	this.shape_16.setTransform(-1,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7DCD2C").s().p("AAFAIQgGgBgGgHQgIgLAOAGQAMAFAAAGIAAABIgFABIgBAAg");
	this.shape_17.setTransform(-1,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#59956C").ss(0.2).p("AgKAXIAAgYIAGABQAGgBAGgJQAIgLgOAGQgMAHAAAH");
	this.shape_18.setTransform(1.3,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7DCD2C").s().p("AgKAHIAAgBQAAgGAMgFQAOgGgIALQgGAHgGABg");
	this.shape_19.setTransform(1.3,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#59956C").ss(0.2).p("AANAbIAAgcQgDABgFAAQgHgBgHgLQgJgNAQAHQAPAIAAAJ");
	this.shape_20.setTransform(-1.2,4.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7DCD2C").s().p("AAFAKQgHgBgHgKQgJgNAQAIQAPAGAAAHIAAABQgCACgEAAIgCAAg");
	this.shape_21.setTransform(-1.2,3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#59956C").ss(0.2).p("AgMAbIAAgcIAIABQAHgBAHgLQAJgNgQAHQgPAIAAAJ");
	this.shape_22.setTransform(1.5,4.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7DCD2C").s().p("AgMAIIAAgBQAAgHAPgGQAQgIgJANQgHAKgHABg");
	this.shape_23.setTransform(1.5,3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#59956C").ss(0.2).p("AAPAeIAAggQgEACgFgBQgIgBgIgNQgKgOASAIQARAJAAAK");
	this.shape_24.setTransform(-1.4,5.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7DCD2C").s().p("AAGALQgIgBgIgLQgKgOASAIQARAHAAAIIAAACQgDABgEAAIgCAAg");
	this.shape_25.setTransform(-1.4,3.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#59956C").ss(0.2).p("AgOAeIAAggIAJABQAIgBAIgNQAKgOgSAIQgRAJAAAK");
	this.shape_26.setTransform(1.7,5.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7DCD2C").s().p("AgOAKIAAgCQAAgIARgHQASgIgKAOQgIALgIABg");
	this.shape_27.setTransform(1.7,3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#59956C").ss(0.2).p("AAPAeIAAggQgEACgFgBQgIgBgIgNQgKgOASAIQARAJAAAK");
	this.shape_28.setTransform(-1.4,6.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7DCD2C").s().p("AAGALQgIgBgIgLQgKgOASAIQARAHAAAIIAAACQgDABgEAAIgCAAg");
	this.shape_29.setTransform(-1.4,5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#59956C").ss(0.2).p("AgOAeIAAggIAJABQAIgBAIgNQAKgOgSAIQgRAJAAAK");
	this.shape_30.setTransform(1.7,6.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7DCD2C").s().p("AgOAKIAAgCQAAgIARgHQASgIgKAOQgIALgIABg");
	this.shape_31.setTransform(1.7,5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#59956C").ss(0.2).p("AARAiIAAglQgEADgFgBQgKgCgKgOQgLgRAVAKQATAKAAAJ");
	this.shape_32.setTransform(-1.6,7.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7DCD2C").s().p("AAIANQgKgCgKgMQgLgRAVAKQATAIAAAJIAAACQgDACgDAAIgDAAg");
	this.shape_33.setTransform(-1.6,6.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#59956C").ss(0.2).p("AgQAiIAAglIAJACQAKgCAKgOQALgRgVAKQgTAKAAAJ");
	this.shape_34.setTransform(1.9,7.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7DCD2C").s().p("AgQALIAAgCQAAgJATgIQAVgKgLARQgKAMgKACg");
	this.shape_35.setTransform(1.9,6.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#59956C").ss(0.2).p("AATAlIAAgpQgEADgHgBQgLgBgKgQQgMgSAWAKQAWALAAAK");
	this.shape_36.setTransform(-1.8,9.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7DCD2C").s().p("AAIAOQgLgCgKgOQgMgSAWALQAWAJAAAJIAAADQgEACgFAAIgCAAg");
	this.shape_37.setTransform(-1.8,7.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#59956C").ss(0.2).p("AgSAlIAAgpIALACQALgBAKgQQAMgSgWAKQgWALAAAK");
	this.shape_38.setTransform(2.1,9.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7DCD2C").s().p("AgSAMIAAgDQAAgJAWgJQAWgLgMASQgKAOgLACg");
	this.shape_39.setTransform(2.1,7.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#ADB8BC").p("AgZAAIAyAA");
	this.shape_40.setTransform(0.2,-11.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.8).s().p("AhfCHIBHiVIABhpIgKAAIAAgPIBHAAIAAAPIgLABIABBpIBECUg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-13.6,19.2,27.5);


(lib.Tween57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59956C").ss(0.2).p("AAUAoIAAgsQgEADgHgBQgMgCgMgRQgNgUAZALQAXAMAAAL");
	this.shape.setTransform(-1.9,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7DCD2C").s().p("AAJAPQgMgBgMgQQgNgUAZAMQAXAKAAAKIAAADQgDACgFAAIgDAAg");
	this.shape_1.setTransform(-1.9,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59956C").ss(0.2).p("AgTAoIAAgsIALACQAMgCAMgRQANgUgZALQgXAMAAAL");
	this.shape_2.setTransform(2.3,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DCD2C").s().p("AgTANIAAgDQAAgKAXgKQAZgMgNAUQgMAQgMABg");
	this.shape_3.setTransform(2.3,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#ADB8BC").p("AgeAAIA9AA");
	this.shape_4.setTransform(0.2,-13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,14.1).s().p("AhyCiIBWi0IAAh9IgMAAIAAgSIBWAAIAAASIgOABIACB+IBRCyg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-16.2,23.1,32.6);


(lib.Tween56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59956C").ss(0.2).p("AAUAoIAAgsQgEADgHgBQgMgCgMgRQgNgUAZALQAXAMAAAL");
	this.shape.setTransform(-1.9,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7DCD2C").s().p("AAJAPQgMgBgMgQQgNgUAZAMQAXAKAAAKIAAADQgDACgFAAIgDAAg");
	this.shape_1.setTransform(-1.9,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59956C").ss(0.2).p("AgTAoIAAgsIALACQAMgCAMgRQANgUgZALQgXAMAAAL");
	this.shape_2.setTransform(2.3,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DCD2C").s().p("AgTANIAAgDQAAgKAXgKQAZgMgNAUQgMAQgMABg");
	this.shape_3.setTransform(2.3,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#ADB8BC").p("AgeAAIA9AA");
	this.shape_4.setTransform(0.2,-13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,14.1).s().p("AhyCiIBWi0IAAh9IgMAAIAAgSIBWAAIAAASIgOABIACB+IBRCyg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-16.3,23.1,32.6);


(lib.Tween55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C9242").s().p("AgQAlQgDgCACgMQACgMAHgOQAHgPAGgKQAHgKAEACQAEACgCAMQgDAMgHAOQgGAPgGAKQgHAIgDAAIgCAAg");
	this.shape.setTransform(1,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#68903C").s().p("AAEAdQgGgJgHgPQgIgNgCgNQgCgMAFgCQAEgCAIAJQAHAJAHAPQAIANACANQACAMgEACIgDABQgEAAgHgIg");
	this.shape_1.setTransform(-2.7,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#87BE58").s().p("AgLAqQgEgBACgOQABgNAGgPQAFgRAEgMQAGgMADABQADABgBAOQgCAMgFAQQgFARgEAMQgGALgDAAIAAAAg");
	this.shape_2.setTransform(0.8,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#87BE58").s().p("AAEAfQgGgLgGgRQgHgPgCgNQgCgNAEgBQAEgCAHALQAGALAHARQAGAPADANQACANgEABIgBAAQgEAAgHgJg");
	this.shape_3.setTransform(-2.7,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#87BE58").s().p("AgVAlQgEgCAEgNQAFgNAJgNQAIgPAJgKQAJgJAEACQADACgEANQgEAMgKAOQgIAPgIAKQgIAIgEAAIgBgBg");
	this.shape_4.setTransform(1.3,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E602F").s().p("AgBAhQgDgPABgSQgBgRADgPIABgPIADAPQACAMAAAUQAAAVgCAMIgDAQg");
	this.shape_5.setTransform(-0.9,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#72A23D").s().p("AAAAdQgEgKgFgRQgEgOAAgNQAAgMAEgBQAEgBAFALQAFALAEAQQAEAOABANQAAAMgEABIgBAAQgEAAgFgKg");
	this.shape_6.setTransform(-1.7,7.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#87BE58").s().p("AAAAfQgDgNgDgRQgEgQAAgNQgBgNAEgBQADAAAEAMQAEALAEASQADARAAAMQABAOgEAAIAAABQgEAAgEgMg");
	this.shape_7.setTransform(-1.4,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7AB146").s().p("AgBAoQgEAAgDgMQgCgMABgQQACgQADgMQAEgLACAAQAEAAADAMQACAMgBAPQgCARgDAMQgEALgCAAIAAAAg");
	this.shape_8.setTransform(-0.3,4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#ADB8BC").p("AgtAAIBbAA");
	this.shape_9.setTransform(-0.3,-18.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,19.4).s().p("AhkDpQgegsgJg3QgRhwBsg4IAAihIgPgHIAAgeIB7AAIgBAcIgRALIAACeIAaARQAeAUASAcQA8BahLBxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-23.3,28.7,46.7);


(lib.Tween54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C9242").s().p("AgQAlQgDgCACgMQACgMAHgOQAHgPAGgKQAHgKAEACQAEACgCAMQgDAMgHAOQgGAPgGAKQgHAIgDAAIgCAAg");
	this.shape.setTransform(1,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#68903C").s().p("AAEAdQgGgJgHgPQgIgNgCgNQgCgMAFgCQAEgCAIAJQAHAJAHAPQAIANACANQACAMgEACIgDABQgEAAgHgIg");
	this.shape_1.setTransform(-2.7,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#87BE58").s().p("AgLAqQgEgBACgOQABgNAGgPQAFgRAEgMQAGgMADABQADABgBAOQgCAMgFAQQgFARgEAMQgGALgDAAIAAAAg");
	this.shape_2.setTransform(0.8,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#87BE58").s().p("AAEAfQgGgLgGgRQgHgPgCgNQgCgNAEgBQAEgCAHALQAGALAHARQAGAPADANQACANgEABIgBAAQgEAAgHgJg");
	this.shape_3.setTransform(-2.7,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#87BE58").s().p("AgVAlQgEgCAEgNQAFgNAJgNQAIgPAJgKQAJgJAEACQADACgEANQgEAMgKAOQgIAPgIAKQgIAIgEAAIgBgBg");
	this.shape_4.setTransform(1.3,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E602F").s().p("AgBAhQgDgPABgSQgBgRADgPIABgPIADAPQACAMAAAUQAAAVgCAMIgDAQg");
	this.shape_5.setTransform(-0.9,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#72A23D").s().p("AAAAdQgEgKgFgRQgEgOAAgNQAAgMAEgBQAEgBAFALQAFALAEAQQAEAOABANQAAAMgEABIgBAAQgEAAgFgKg");
	this.shape_6.setTransform(-1.7,7.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#87BE58").s().p("AAAAfQgDgNgDgRQgEgQAAgNQgBgNAEgBQADAAAEAMQAEALAEASQADARAAAMQABAOgEAAIAAABQgEAAgEgMg");
	this.shape_7.setTransform(-1.4,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7AB146").s().p("AgBAoQgEAAgDgMQgCgMABgQQACgQADgMQAEgLACAAQAEAAADAMQACAMgBAPQgCARgDAMQgEALgCAAIAAAAg");
	this.shape_8.setTransform(-0.3,4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#ADB8BC").p("AgtAAIBbAA");
	this.shape_9.setTransform(-0.3,-18.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,19.4).s().p("AhkDpQgegsgJg3QgRhwBsg4IAAihIgPgHIAAgeIB7AAIgBAcIgRALIAACeIAaARQAeAUASAcQA8BahLBxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-23.3,28.7,46.7);


(lib.Tween53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7AB146").s().p("AADARQgEgFgFgJQgFgHgCgIQgBgHADgBQACgCAGAFQAEAGAFAJQAMAUgHAEIgBAAQgDAAgEgFg");
	this.shape.setTransform(-5.9,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87BE58").s().p("AgFAaQgDgBAAgIQgBgIADgJQADgLADgHQADgHADAAQAEABAAAIQAAAIgDAJQgCALgFAHQgCAHgCAAIgBAAg");
	this.shape_1.setTransform(-4.3,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#647454").s().p("AgBARQgDgIABgJQgBgIADgJIABgIIADAIQACAHAAAKQAAALgCAGIgDAJg");
	this.shape_2.setTransform(-4.7,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7AB146").s().p("AgLAWQgDgCABgHQACgIAFgHQAFgJAEgFQAGgGACABQAHAEgMAUQgIATgHAAIgCAAg");
	this.shape_3.setTransform(6.7,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#87BE58").s().p("AAAATQgEgHgCgLQgDgJAAgIQAAgIAEgBQADAAACAHQAEAHADALQADAJAAAIQgBAIgDABIAAAAQgDAAgDgHg");
	this.shape_4.setTransform(5,7.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#647454").s().p("AgCASQgCgLAAgHQAAgKACgGIACgIIADAIQABAJAAAHQABAJgDAJIgCAIQgBgDgBgFg");
	this.shape_5.setTransform(5.4,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#ADB8BC").p("AgdAAIA7AA");
	this.shape_6.setTransform(-0.2,-11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,12.8).s().p("AhBCQQgUgbgGgjQgMhFBIghIAAhlIgKgEIAAgSIBRAAIgBARIgLAHIAABhIARALQAUALAMASQAnA3gxBHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-14.4,18.9,28.9);


(lib.Tween52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7AB146").s().p("AADARQgEgFgFgJQgFgHgCgIQgBgHADgBQACgCAGAFQAEAGAFAJQAMAUgHAEIgBAAQgDAAgEgFg");
	this.shape.setTransform(-5.9,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87BE58").s().p("AgFAaQgDgBAAgIQgBgIADgJQADgLADgHQADgHADAAQAEABAAAIQAAAIgDAJQgCALgFAHQgCAHgCAAIgBAAg");
	this.shape_1.setTransform(-4.3,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#647454").s().p("AgBARQgDgIABgJQgBgIADgJIABgIIADAIQACAHAAAKQAAALgCAGIgDAJg");
	this.shape_2.setTransform(-4.7,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7AB146").s().p("AgLAWQgDgCABgHQACgIAFgHQAFgJAEgFQAGgGACABQAHAEgMAUQgIATgHAAIgCAAg");
	this.shape_3.setTransform(6.7,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#87BE58").s().p("AAAATQgEgHgCgLQgDgJAAgIQAAgIAEgBQADAAACAHQAEAHADALQADAJAAAIQgBAIgDABIAAAAQgDAAgDgHg");
	this.shape_4.setTransform(5,7.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#647454").s().p("AgCASQgCgLAAgHQAAgKACgGIACgIIADAIQABAJAAAHQABAJgDAJIgCAIQgBgDgBgFg");
	this.shape_5.setTransform(5.4,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#ADB8BC").p("AgdAAIA7AA");
	this.shape_6.setTransform(-0.2,-11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,12.8).s().p("AhBCQQgUgbgGgjQgMhFBIghIAAhlIgKgEIAAgSIBRAAIgBARIgLAHIAABhIARALQAUALAMASQAnA3gxBHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-14.4,18.9,28.9);


(lib.Tween51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7AB146").s().p("AgEACQgDgEgCgGQgBgGACgBQAGgCAHAQIAFAKQABAGgDABIgBAAQgFAAgGgOg");
	this.shape.setTransform(-0.9,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87BE58").s().p("AgKAQQgCgBACgGQACgFAEgFQAEgHADgEQAFgEACABQAFACgLAPQgEAHgDAEQgEADgCAAIgBAAg");
	this.shape_1.setTransform(1,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#647454").s().p("AgBASQgCgJAAgJQAAgGACgKIABgIIACAIQADAGAAAKQAAAHgDALQgBAEgBAEIgBgIg");
	this.shape_2.setTransform(0,7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(0.1,-8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.7).s().p("AhGBkIA1huIAAhNIgHgBIAAgLIA0AAIAAAMIgIAAIAABNIAyBug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-10,14.2,20.2);


(lib.Tween50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7AB146").s().p("AgEACQgDgEgCgGQgBgGACgBQAGgCAHAQIAFAKQABAGgDABIgBAAQgFAAgGgOg");
	this.shape.setTransform(-0.9,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87BE58").s().p("AgKAQQgCgBACgGQACgFAEgFQAEgHADgEQAFgEACABQAFACgLAPQgEAHgDAEQgEADgCAAIgBAAg");
	this.shape_1.setTransform(1,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#647454").s().p("AgBASQgCgJAAgJQAAgGACgKIABgIIACAIQADAGAAAKQAAAHgDALQgBAEgBAEIgBgIg");
	this.shape_2.setTransform(0,7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_3.setTransform(0.1,-8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.7).s().p("AhGBkIA1huIAAhNIgHgBIAAgLIA0AAIAAAMIgIAAIAABNIAyBug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-10.1,14.2,20.2);


(lib.Tween49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7AB146").s().p("AACAOQgCgFgEgHIgFgLQgBgGACgBQADgBAEAEQACAFADAHQAJAPgFADIgBAAQgCAAgDgDg");
	this.shape.setTransform(-0.5,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87BE58").s().p("AgKARQgCAAACgHQACgGAFgGQAIgRAGACQACACgCAGQgCAGgFAGQgHAPgFAAIgCgBg");
	this.shape_1.setTransform(1.3,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#647454").s().p("AgCATQgCgLAAgIQAAgIACgKIACgIIADAIQABAKAAAIQAAAIgBALIgDAIg");
	this.shape_2.setTransform(0.4,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7AB146").s().p("AADATQgDgGgGgKQgEgHgCgJQgBgIACgBQADgCAGAGQADAGAGAKQAEAHACAJQABAIgCABIgBABQgDAAgFgFg");
	this.shape_3.setTransform(-5.9,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#87BE58").s().p("AgFAbQgDAAgBgJQAAgJADgJQAGgdAGADQADABABAIQAAAJgDAJQgCAMgFAHQgBAHgDAAIgBAAg");
	this.shape_4.setTransform(-4.3,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#647454").s().p("AgBATQgDgLAAgIQAAgHADgLIABgIIACAIQACALAAAHQAAAIgCALIgCAIg");
	this.shape_5.setTransform(-4.7,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7AB146").s().p("AgLAXQgDgBACgIQABgIAFgIQAGgKADgGQAGgGADACQADABgCAIQgBAJgGAHQgFAKgDAGQgFAFgCAAIgCgBg");
	this.shape_6.setTransform(6.6,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#87BE58").s().p("AAAAUQgEgHgCgMQgDgJABgJQAAgIADgBQADgBACAIQAFAHACAMQADAJAAAJQgBAJgDAAIgBAAQgCAAgDgHg");
	this.shape_7.setTransform(5,7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#647454").s().p("AgBATQgBgGgCgNQACgNABgFIABgIIADAIQABAIAAAKQAAAMgBAHQgBAFgCAEIgBgJg");
	this.shape_8.setTransform(5.4,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#ADB8BC").p("AgdAAIA7AA");
	this.shape_9.setTransform(-0.2,-12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,12.8).s().p("AhCCaQgUgdgFglQgMhKBIgkIAAhrIgKgEIAAgUIBQAAIAAATIgLAHIgBBoIASALQATANANASQAnA7gxBMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-15.4,18.9,30.9);


(lib.Tween48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7AB146").s().p("AACAOQgCgFgEgHIgFgLQgBgGACgBQADgBAEAEQACAFADAHQAJAPgFADIgBAAQgCAAgDgDg");
	this.shape.setTransform(-0.5,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87BE58").s().p("AgKARQgCAAACgHQACgGAFgGQAIgRAGACQACACgCAGQgCAGgFAGQgHAPgFAAIgCgBg");
	this.shape_1.setTransform(1.3,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#647454").s().p("AgCATQgCgLAAgIQAAgIACgKIACgIIADAIQABAKAAAIQAAAIgBALIgDAIg");
	this.shape_2.setTransform(0.4,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7AB146").s().p("AADATQgDgGgGgKQgEgHgCgJQgBgIACgBQADgCAGAGQADAGAGAKQAEAHACAJQABAIgCABIgBABQgDAAgFgFg");
	this.shape_3.setTransform(-5.9,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#87BE58").s().p("AgFAbQgDAAgBgJQAAgJADgJQAGgdAGADQADABABAIQAAAJgDAJQgCAMgFAHQgBAHgDAAIgBAAg");
	this.shape_4.setTransform(-4.3,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#647454").s().p("AgBATQgDgLAAgIQAAgHADgLIABgIIACAIQACALAAAHQAAAIgCALIgCAIg");
	this.shape_5.setTransform(-4.7,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7AB146").s().p("AgLAXQgDgBACgIQABgIAFgIQAGgKADgGQAGgGADACQADABgCAIQgBAJgGAHQgFAKgDAGQgFAFgCAAIgCgBg");
	this.shape_6.setTransform(6.6,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#87BE58").s().p("AAAAUQgEgHgCgMQgDgJABgJQAAgIADgBQADgBACAIQAFAHACAMQADAJAAAJQgBAJgDAAIgBAAQgCAAgDgHg");
	this.shape_7.setTransform(5,7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#647454").s().p("AgBATQgBgGgCgNQACgNABgFIABgIIADAIQABAIAAAKQAAAMgBAHQgBAFgCAEIgBgJg");
	this.shape_8.setTransform(5.4,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#ADB8BC").p("AgdAAIA7AA");
	this.shape_9.setTransform(-0.2,-12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,12.8).s().p("AhCCaQgUgdgFglQgMhKBIgkIAAhrIgKgEIAAgUIBQAAIAAATIgLAHIgBBoIASALQATANANASQAnA7gxBMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-15.4,18.9,30.9);


(lib.Tween47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#87BE58").s().p("AgBABQgHgGADgCQACgCAEAJQAIAHgDABIgBAAQgCAAgEgHg");
	this.shape.setTransform(-3.1,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87BE58").s().p("AgBAAQABgMABABQADAAgCALQgBAMgBAAQgDAAACgMg");
	this.shape_1.setTransform(-2.4,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#87BE58").s().p("AgFAIQgCgCAGgGQAFgIACABQACACgGAGQgDAHgDAAIgBAAg");
	this.shape_2.setTransform(2.6,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#87BE58").s().p("AgBAAQgBgLACAAQAAAAACALQABALgCABQgBAAgBgMg");
	this.shape_3.setTransform(1.9,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_4.setTransform(-0.2,-8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.3).s().p("AgqBkQgNgUgEgXQgHgwAugXIAAhFIgGgDIAAgMIAzAAIAAALIgHAFIAABEIALAHQANAHAIAMQAZAnggAxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-10,12.3,20);


(lib.Tween46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#87BE58").s().p("AgBABQgHgGADgCQACgCAEAJQAIAHgDABIgBAAQgCAAgEgHg");
	this.shape.setTransform(-3.1,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87BE58").s().p("AgBAAQABgMABABQADAAgCALQgBAMgBAAQgDAAACgMg");
	this.shape_1.setTransform(-2.4,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#87BE58").s().p("AgFAIQgCgCAGgGQAFgIACABQACACgGAGQgDAHgDAAIgBAAg");
	this.shape_2.setTransform(2.6,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#87BE58").s().p("AgBAAQgBgLACAAQAAAAACALQABALgCABQgBAAgBgMg");
	this.shape_3.setTransform(1.9,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_4.setTransform(-0.2,-8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.3).s().p("AgqBkQgNgUgEgXQgHgwAugXIAAhFIgGgDIAAgMIAzAAIAAALIgHAFIAABEIALAHQANAHAIAMQAZAnggAxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-10,12.3,20);


(lib.Tween45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9F6FD").ss(2).p("AjwAAIHhAA");
	this.shape.setTransform(-0.1,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E9F6FD").ss(2).p("AjxAAIHjAA");
	this.shape_1.setTransform(0.2,-9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhXIAACv");
	this.shape_2.setTransform(22.6,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhXIAACv");
	this.shape_3.setTransform(-22.4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-10.1,50.8,20.3);


(lib.Tween44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9F6FD").ss(2).p("AjwAAIHhAA");
	this.shape.setTransform(-0.1,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E9F6FD").ss(2).p("AjxAAIHjAA");
	this.shape_1.setTransform(0.2,-9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhXIAACv");
	this.shape_2.setTransform(22.6,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhXIAACv");
	this.shape_3.setTransform(-22.4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-10.1,50.8,20.3);


(lib.Tween43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC381").s().p("AgPBjIAAjFIAfAAIAADFg");
	this.shape.setTransform(-0.1,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC381").s().p("AgDBkQgFgBgEgDQgDgEAAgFIAAitQAAgFADgEQAEgDAFAAIAHAAQAFAAAEADQADAFAAAEIAACtQAAAFgDAEQgEADgFABg");
	this.shape_1.setTransform(-0.1,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,3.2).ss(2).p("AgpAAIBTAA");
	this.shape_2.setTransform(0,-15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgXAAIAvAA");
	this.shape_3.setTransform(-0.1,-13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.1).s().p("AgBCWQgIAAgGgGQgGgGAAgIIAAkCQAAgJAGgGQAGgGAIAAIADAAQAIAAAGAGQAGAGAAAJIAAECQAAAIgGAGQgGAGgIAAg");
	this.shape_4.setTransform(-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-16.2,10.6,31.5);


(lib.Tween42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC381").s().p("AgPBjIAAjFIAfAAIAADFg");
	this.shape.setTransform(-0.1,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC381").s().p("AgDBkQgFgBgEgDQgDgEAAgFIAAitQAAgFADgEQAEgDAFAAIAHAAQAFAAAEADQADAFAAAEIAACtQAAAFgDAEQgEADgFABg");
	this.shape_1.setTransform(-0.1,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,3.2).ss(2).p("AgpAAIBTAA");
	this.shape_2.setTransform(0,-15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgXAAIAvAA");
	this.shape_3.setTransform(-0.1,-13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.1).s().p("AgBCWQgIAAgGgGQgGgGAAgIIAAkCQAAgJAGgGQAGgGAIAAIADAAQAIAAAGAGQAGAGAAAJIAAECQAAAIgGAGQgGAGgIAAg");
	this.shape_4.setTransform(-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-16.2,10.6,31.5);


(lib.Tween41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5D99F").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape.setTransform(-0.1,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5D99F").s().p("AgDBkQgFgBgEgDQgEgEAAgFIAAitQAAgEAEgFQAEgDAFAAIAHAAQAFAAAEADQAEAFAAAEIAACtQAAAFgEAEQgEADgFABg");
	this.shape_1.setTransform(-0.1,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,3.2).ss(2).p("AgqAAIBVAA");
	this.shape_2.setTransform(0,-15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgXAAIAvAA");
	this.shape_3.setTransform(-0.1,-13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.1).s().p("AAACWQgJAAgGgGQgGgGAAgIIAAkCQAAgJAGgGQAGgGAJAAIACAAQAIAAAGAGQAGAGAAAJIAAECQAAAIgGAGQgGAGgIAAg");
	this.shape_4.setTransform(-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-16.2,10.6,31.5);


(lib.Tween40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5D99F").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape.setTransform(-0.1,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5D99F").s().p("AgDBkQgFgBgEgDQgEgEAAgFIAAitQAAgEAEgFQAEgDAFAAIAHAAQAFAAAEADQAEAFAAAEIAACtQAAAFgEAEQgEADgFABg");
	this.shape_1.setTransform(-0.1,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,3.2).ss(2).p("AgqAAIBVAA");
	this.shape_2.setTransform(0,-15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgXAAIAvAA");
	this.shape_3.setTransform(-0.1,-13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.1).s().p("AAACWQgJAAgGgGQgGgGAAgIIAAkCQAAgJAGgGQAGgGAJAAIACAAQAIAAAGAGQAGAGAAAJIAAECQAAAIgGAGQgGAGgIAAg");
	this.shape_4.setTransform(-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-16.2,10.6,31.5);


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E55061").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape.setTransform(-0.1,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E55061").s().p("AgDBkQgFAAgEgFQgEgDAAgGIAAisQAAgEAEgFQAEgDAFAAIAHAAQAFAAAEADQAEAFAAAEIAACsQAAAGgEADQgEAFgFAAg");
	this.shape_1.setTransform(-0.1,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,3.2).ss(2).p("AgqAAIBVAA");
	this.shape_2.setTransform(0,-15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgXAAIAvAA");
	this.shape_3.setTransform(-0.1,-13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.1).s().p("AgBCWQgIAAgGgGQgGgGAAgIIAAkCQAAgJAGgGQAGgGAIAAIACAAQAJAAAGAGQAGAGAAAJIAAECQAAAIgGAGQgGAGgJAAg");
	this.shape_4.setTransform(-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-16.2,10.6,31.5);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E55061").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape.setTransform(-0.1,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E55061").s().p("AgDBkQgFAAgEgFQgEgDAAgGIAAisQAAgEAEgFQAEgDAFAAIAHAAQAFAAAEADQAEAFAAAEIAACsQAAAGgEADQgEAFgFAAg");
	this.shape_1.setTransform(-0.1,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,3.2).ss(2).p("AgqAAIBVAA");
	this.shape_2.setTransform(0,-15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgXAAIAvAA");
	this.shape_3.setTransform(-0.1,-13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.1).s().p("AgBCWQgIAAgGgGQgGgGAAgIIAAkCQAAgJAGgGQAGgGAIAAIACAAQAJAAAGAGQAGAGAAAJIAAECQAAAIgGAGQgGAGgJAAg");
	this.shape_4.setTransform(-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-16.2,10.6,31.5);


(lib.Tween37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54B3EC").s().p("AgPBjIAAjFIAfAAIAADFg");
	this.shape.setTransform(-0.1,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#54B3EC").s().p("AgCBkQgFAAgEgFQgEgDAAgGIAAisQAAgEAEgFQAEgDAFAAIAGAAQAEAAAFADQADAEAAAFIAACsQAAAGgDADQgFAFgEAAg");
	this.shape_1.setTransform(-0.1,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,3.1).ss(2).p("AgoAAIBRAA");
	this.shape_2.setTransform(0,-15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgXAAIAuAA");
	this.shape_3.setTransform(-0.1,-13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,10.8).s().p("AAACWQgIAAgGgGQgGgGAAgIIAAkCQAAgJAGgGQAGgGAIAAIABAAQAIAAAGAGQAGAGAAAJIAAECQAAAIgGAGQgGAGgIAAg");
	this.shape_4.setTransform(-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-16.2,10.4,31.5);


(lib.Tween36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54B3EC").s().p("AgPBjIAAjFIAfAAIAADFg");
	this.shape.setTransform(-0.1,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#54B3EC").s().p("AgCBkQgFAAgEgFQgEgDAAgGIAAisQAAgEAEgFQAEgDAFAAIAGAAQAEAAAFADQADAEAAAFIAACsQAAAGgDADQgFAFgEAAg");
	this.shape_1.setTransform(-0.1,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,3.1).ss(2).p("AgoAAIBRAA");
	this.shape_2.setTransform(0,-15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ADB8BC").p("AgXAAIAuAA");
	this.shape_3.setTransform(-0.1,-13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,10.8).s().p("AAACWQgIAAgGgGQgGgGAAgIIAAkCQAAgJAGgGQAGgGAIAAIABAAQAIAAAGAGQAGAGAAAJIAAECQAAAIgGAGQgGAGgIAAg");
	this.shape_4.setTransform(-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-16.2,10.4,31.5);


(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F4E4FE","#C8BAD0"],[0,1],0.1,-6,0,10.8).s().p("AhPBCQgMgPgKgYQgTguAJguIDcAAIAGAlQAAAtggAxg");
	this.shape.setTransform(0,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgmAAIBNAA");
	this.shape_1.setTransform(-0.2,-15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,16.5).s().p("AhVDGQgaglgHgwQgPheBcgwIAAiJIgNgGIABgZIBoAAIAAAXIgPAKIgBCGIAWAOQAaARAQAYQAzBMhABhg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-19.8,24.4,39.8);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F4E4FE","#C8BAD0"],[0,1],0.1,-6,0,10.8).s().p("AhPBCQgMgPgKgYQgTguAJguIDcAAIAGAlQAAAtggAxg");
	this.shape.setTransform(0,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgmAAIBNAA");
	this.shape_1.setTransform(-0.2,-15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,16.5).s().p("AhVDGQgaglgHgwQgPheBcgwIAAiJIgNgGIABgZIBoAAIAAAXIgPAKIgBCGIAWAOQAaARAQAYQAzBMhABhg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-19.9,24.4,39.8);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEF7DC","#FBF4D9","#F0EAD1","#DFD9C3","#C6C2B0","#B4B0A1"],[0,0.263,0.482,0.686,0.886,1],0.2,-5,-0.1,7.6).s().p("AhXAoIAkhPIBpAAIAjBPg");
	this.shape.setTransform(0.2,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgaAAIA1AA");
	this.shape_1.setTransform(0.2,-12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,12.3).s().p("AhjCNIBKicIABhtIgLAAIAAgQIBLAAIAAAQIgMABIABBtIBHCbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-14.1,20.1,28.4);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEF7DC","#FBF4D9","#F0EAD1","#DFD9C3","#C6C2B0","#B4B0A1"],[0,0.263,0.482,0.686,0.886,1],0.2,-5,-0.1,7.6).s().p("AhXAoIAkhPIBpAAIAjBPg");
	this.shape.setTransform(0.2,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgaAAIA1AA");
	this.shape_1.setTransform(0.2,-12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,12.3).s().p("AhjCNIBKicIABhtIgLAAIAAgQIBLAAIAAAQIgMABIABBtIBHCbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-14.2,20.1,28.4);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D9E2FE","#D6E0FE","#CCD8FE","#BACAFE","#A3B8FD"],[0,0.298,0.549,0.78,1],0.1,-6.1,-0.1,9.6).s().p("Ag4AmIgNgdQgMgdACgRICeAAIABASQgDAXgSAig");
	this.shape.setTransform(0,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgbAAIA2AA");
	this.shape_1.setTransform(-0.2,-11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.7).s().p("Ag8CNQgTgbgFghQgKhEBBghIAAhiIgJgEIAAgSIBKAAIAAARIgLAHIAABfIAQAKQASAMALARQAkA2gtBFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-14.1,17.3,28.3);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D9E2FE","#D6E0FE","#CCD8FE","#BACAFE","#A3B8FD"],[0,0.298,0.549,0.78,1],0.1,-6.1,-0.1,9.6).s().p("Ag4AmIgNgdQgMgdACgRICeAAIABASQgDAXgSAig");
	this.shape.setTransform(0,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgbAAIA2AA");
	this.shape_1.setTransform(-0.2,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.7).s().p("Ag8CNQgTgbgFghQgKhEBBghIAAhiIgJgEIAAgSIBKAAIAAARIgLAHIAABfIAQAKQASAMALARQAkA2gtBFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-14.1,17.3,28.3);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD5C5","#FBD3C3","#F0CDBE","#DFC2B6","#C6B2AA","#C0AEA7"],[0,0.282,0.522,0.741,0.957,1],0,-8,0,8.2).s().p("AhtAyIAuhjICCAAIArBjg");
	this.shape.setTransform(-0.1,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AghAAIBDAA");
	this.shape_1.setTransform(0.2,-15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,15.5).s().p("Ah9CzIBejGIAAiKIgNgBIAAgUIBeAAIAAAVIgOABIABCKIBZDFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-17.9,25.3,35.8);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD5C5","#FBD3C3","#F0CDBE","#DFC2B6","#C6B2AA","#C0AEA7"],[0,0.282,0.522,0.741,0.957,1],0,-8,0,8.2).s().p("AhtAyIAuhjICCAAIArBjg");
	this.shape.setTransform(-0.1,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AghAAIBDAA");
	this.shape_1.setTransform(0.2,-15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,15.5).s().p("Ah9CzIBejGIAAiKIgNgBIAAgUIBeAAIAAAVIgOABIABCKIBZDFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-17.9,25.3,35.8);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape.setTransform(29.1,-4.2,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape_1.setTransform(-28,-4.2,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6F7278").s().p("AltAXIAAgtILbAAIAAAtg");
	this.shape_2.setTransform(0,1.1,0.863,0.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9C947").s().p("AksAcQgMAAgIgIQgIgJAAgLQAAgLAIgIQAIgIAMAAIJZAAQALAAAJAIQAIAIAAALQAAALgIAJQgJAIgLAAg");
	this.shape_3.setTransform(0,4.9,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-8.4,63.2,15.8);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape.setTransform(29.1,-4.2,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape_1.setTransform(-28,-4.2,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6F7278").s().p("AltAXIAAgtILbAAIAAAtg");
	this.shape_2.setTransform(0,1.1,0.863,0.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9C947").s().p("AksAcQgMAAgIgIQgIgJAAgLQAAgLAIgIQAIgIAMAAIJZAAQALAAAJAIQAIAIAAALQAAALgIAJQgJAIgLAAg");
	this.shape_3.setTransform(0,4.9,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-8.4,63.2,15.8);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape.setTransform(29.1,-4.2,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape_1.setTransform(-28,-4.2,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6F7278").s().p("AltAXIAAgtILbAAIAAAtg");
	this.shape_2.setTransform(0,1.1,0.863,0.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9C947").s().p("AksAcQgMAAgIgIQgIgJgBgLQABgLAIgIQAIgIAMAAIJYAAQAMAAAJAIQAIAIAAALQAAALgIAJQgJAIgMAAg");
	this.shape_3.setTransform(0,4.9,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-8.4,63.2,15.8);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape.setTransform(29.1,-4.2,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape_1.setTransform(-28,-4.2,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6F7278").s().p("AltAXIAAgtILbAAIAAAtg");
	this.shape_2.setTransform(0,1.1,0.863,0.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9C947").s().p("AksAcQgMAAgIgIQgIgJgBgLQABgLAIgIQAIgIAMAAIJYAAQAMAAAJAIQAIAIAAALQAAALgIAJQgJAIgMAAg");
	this.shape_3.setTransform(0,4.9,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-8.4,63.2,15.8);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape.setTransform(29.1,-4.1,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape_1.setTransform(-28.1,-4.1,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6F7278").s().p("AltAXIAAgtILbAAIAAAtg");
	this.shape_2.setTransform(0,1.1,0.863,0.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9C947").s().p("AkrAcQgMAAgJgIQgJgJABgLQgBgLAJgIQAJgIAMAAIJYAAQAMAAAIAIQAJAIAAALQAAALgJAJQgIAIgMAAg");
	this.shape_3.setTransform(0,4.9,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-8.4,63.2,15.8);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape.setTransform(29.1,-4.1,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape_1.setTransform(-28.1,-4.1,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6F7278").s().p("AltAXIAAgtILbAAIAAAtg");
	this.shape_2.setTransform(0,1.1,0.863,0.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9C947").s().p("AkrAcQgMAAgJgIQgJgJABgLQgBgLAJgIQAJgIAMAAIJYAAQAMAAAIAIQAJAIAAALQAAALgJAJQgIAIgMAAg");
	this.shape_3.setTransform(0,4.9,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-8.4,63.2,15.8);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape.setTransform(74.1,0.8,0.989,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_1.setTransform(-73.7,0.8,0.989,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#44738A").ss(3).p("AsvgBIZfAD");
	this.shape_2.setTransform(0.5,-3.8,0.989,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-5.5,164.5,11.5);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape.setTransform(64.3,0.5,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_1.setTransform(-64.8,0.5,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#44738A").ss(3).p("AsvgBIZfAD");
	this.shape_2.setTransform(0,-4,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-5.7,144,11.5);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape.setTransform(64.3,0.5,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_1.setTransform(-64.8,0.5,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#44738A").ss(3).p("AsvgBIZfAD");
	this.shape_2.setTransform(0,-4,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-5.7,143.9,11.5);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape.setTransform(64.3,0.5,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_1.setTransform(-64.8,0.5,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#44738A").ss(3).p("AsvgBIZfAD");
	this.shape_2.setTransform(0,-4,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-5.7,143.9,11.5);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape.setTransform(64.3,0.5,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_1.setTransform(-64.8,0.5,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#44738A").ss(3).p("AsvgBIZfAD");
	this.shape_2.setTransform(0,-4,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-5.7,144,11.5);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape.setTransform(64.3,0.5,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_1.setTransform(-64.8,0.5,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#44738A").ss(3).p("AsvgBIZfAD");
	this.shape_2.setTransform(0,-4,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-5.7,144,11.5);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape.setTransform(64.3,0.6,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_1.setTransform(-64.8,0.6,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#44738A").ss(3).p("AsvgBIZfAD");
	this.shape_2.setTransform(0,-4,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-5.7,143.9,11.5);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape.setTransform(64.3,0.5,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_1.setTransform(-64.8,0.5,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#44738A").ss(3).p("AsvgBIZfAD");
	this.shape_2.setTransform(0,-4,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-5.7,143.9,11.5);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333452").s().p("Ax9AXIAAgtMAj6AAAIAAAtg");
	this.shape.setTransform(0,51.9,0.868,0.878);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#44738A").ss(3).p("ARAIYMgh/AAAIAAwvMAh/AAAg");
	this.shape_1.setTransform(0,-2.1,0.868,0.878);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8FFFF").s().p("Ax9JPIAAydMAj6AAAIAASdg");
	this.shape_2.setTransform(0,-2.1,0.868,0.878);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.8,-54,199.7,108);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333452").s().p("Ax9AXIAAgtMAj6AAAIAAAtg");
	this.shape.setTransform(0,51.9,0.868,0.878);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#44738A").ss(3).p("ARAIYMgh/AAAIAAwvMAh/AAAg");
	this.shape_1.setTransform(0,-2.1,0.868,0.878);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8FFFF").s().p("Ax9JPIAAydMAj6AAAIAASdg");
	this.shape_2.setTransform(0,-2.1,0.868,0.878);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.8,-54,199.7,108);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D1C18").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape.setTransform(23.9,26.5,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C554F").s().p("AAmAUIgHgNQgFgGgIgCQgIgDgKAAIgJAAIgIACIgGADIgOAUIgEAEIAAgGIACgPQABgFACgEQAEgIAFgEQAEgDAKgDIAHgBIAGAAQAPAAAMAIQALAIADALQACAIgCAIIgBAGg");
	this.shape_1.setTransform(23.9,23.8,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6F2B23").s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPABQAQgBAMAMQALAMAAAPQAAARgLALQgMAMgQAAQgPAAgMgMg");
	this.shape_2.setTransform(23.9,26.4,0.863,0.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D1C18").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_3.setTransform(-0.1,26.5,0.863,0.873);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C554F").s().p("AAlAUQgBgFgFgIQgFgGgIgCQgIgDgKAAIgKAAIgHACIgGADIgOAUIgEAEIAAgGIACgPIADgJQAFgJAEgDQAEgDAKgDIAHgBIAGAAQAPAAAMAIQALAIADALQACAIgCAIIgBAGg");
	this.shape_4.setTransform(0,23.8,0.863,0.873);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6F2B23").s().p("AgbAcQgLgLAAgRQAAgPALgMQAMgMAPABQAQgBAMAMQALAMAAAPQAAARgLALQgMAMgQAAQgPAAgMgMg");
	this.shape_5.setTransform(-0.1,26.4,0.863,0.873);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D1C18").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_6.setTransform(-23.9,26.2,0.863,0.873);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8C554F").s().p("AAmAUQgEgJgDgDQgFgIgIgBQgHgDgLAAIgBAAIgDAAIgFAAIgIACQgDACgCABIgPAUIgEAEIACgVIADgIQADgHAGgFQAFgFAJgCIALgBIACAAQAQAAALAIQALAIADALQACAHgBAKIgCAFg");
	this.shape_7.setTransform(-23.9,23.5,0.863,0.873);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6F2B23").s().p("AgaAcQgMgMgBgQQABgPAMgLQALgMAPAAQAQAAAMAMQALALAAAPQAAAQgLAMQgMAMgQgBQgPAAgLgLg");
	this.shape_8.setTransform(-24,26.2,0.863,0.873);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#733825").ss(2).p("AB5gjQgygBhCAHQiEAOAHA8");
	this.shape_9.setTransform(-13.5,17.6,0.863,0.873);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#733825").ss(2).p("Ah9gjIAdgBQAwgBAoAFQCEAPgIA/");
	this.shape_10.setTransform(13.6,17.9,0.863,0.873);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#733825").ss(2).p("Ah9gjIAngBQAwgBAmAFQB8APgIA/");
	this.shape_11.setTransform(13.6,17.8,0.863,0.873);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#733825").s().p("AgjBUQgfgrAuiMIAoAAIAKAgQAMAnAEAeQAPBmg6gGQgFACgFAAQgRAAgLgQg");
	this.shape_12.setTransform(0,7.5,0.863,0.873);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#733825").s().p("AgLApIAAhRIAXAAIAABRg");
	this.shape_13.setTransform(-0.2,18.2,0.863,0.873);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#733825").s().p("AgUBdIAAi5IApAAIAAC5g");
	this.shape_14.setTransform(0,-9.3,0.863,0.873);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8F6FB").s().p("Ak4AlQgOAAgJgJQgKgKAAgOIAAgIQAAgNAKgJQAJgKAOAAIJyAAQANAAAKAKQAJAJAAANIAAAIQAAAOgJAKQgKAJgNAAg");
	this.shape_15.setTransform(0,-26.7,0.863,0.873);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8F6FB").s().p("AlZAlIAAhJIKzAAIAABJg");
	this.shape_16.setTransform(0,-22.7,0.863,0.873);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6F2D23").s().p("AlFAaQgIAAgGgHQgGgFAAgJIAAgJQAAgJAGgFQAGgHAIAAIKLAAQAIAAAGAHQAGAFAAAJIAAAJQAAAJgGAFQgFAHgJAAg");
	this.shape_17.setTransform(0,-19.7,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,59.8,59.9);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D1C18").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape.setTransform(23.9,26.5,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C554F").s().p("AAmAUIgHgNQgFgGgIgCQgIgDgKAAIgJAAIgIACIgGADIgOAUIgEAEIAAgGIACgPQABgFACgEQAEgIAFgEQAEgDAKgDIAHgBIAGAAQAPAAAMAIQALAIADALQACAIgCAIIgBAGg");
	this.shape_1.setTransform(23.9,23.8,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6F2B23").s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPABQAQgBAMAMQALAMAAAPQAAARgLALQgMAMgQAAQgPAAgMgMg");
	this.shape_2.setTransform(23.9,26.4,0.863,0.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D1C18").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_3.setTransform(-0.1,26.5,0.863,0.873);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C554F").s().p("AAlAUQgBgFgFgIQgFgGgIgCQgIgDgKAAIgEAAIgGAAIgHACIgGADIgOAUIgEAEIAAgGIACgPIADgJQAFgJAEgDQAEgDAKgDIAHgBIAGAAQAPAAAMAIQALAIADALQACAIgCAIIgBAGg");
	this.shape_4.setTransform(0,23.8,0.863,0.873);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6F2B23").s().p("AgbAcQgLgLAAgRQAAgPALgMQAMgMAPABQAQgBAMAMQALAMAAAPQAAARgLALQgMAMgQAAQgPAAgMgMg");
	this.shape_5.setTransform(-0.1,26.4,0.863,0.873);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D1C18").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_6.setTransform(-23.9,26.2,0.863,0.873);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8C554F").s().p("AAmAUQgEgJgDgDQgFgIgIgBQgHgDgLAAIgBAAIgDAAIgFAAIgIACQgDACgCABIgPAUIgEAEIACgVIADgIQADgHAGgFQAFgFAJgCIALgBIACAAQAQAAALAIQALAIADALQACAHgBAKIgCAFg");
	this.shape_7.setTransform(-23.9,23.5,0.863,0.873);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6F2B23").s().p("AgaAcQgMgMgBgQQABgPAMgLQALgMAPAAQAQAAAMAMQALALAAAPQAAAQgLAMQgMAMgQgBQgPAAgLgLg");
	this.shape_8.setTransform(-24,26.2,0.863,0.873);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#733825").ss(2).p("AB5gjQgygBhCAHQiEAOAHA8");
	this.shape_9.setTransform(-13.5,17.6,0.863,0.873);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#733825").ss(2).p("Ah9gjIAdgBQAwgBAoAFQCEAPgIA/");
	this.shape_10.setTransform(13.6,17.9,0.863,0.873);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#733825").ss(2).p("Ah9gjIAngBQAwgBAmAFQB8APgIA/");
	this.shape_11.setTransform(13.6,17.8,0.863,0.873);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#733825").s().p("AgjBUQgfgrAuiMIAoAAIAKAgQAMAnAEAeQAPBmg6gGQgFACgFAAQgRAAgLgQg");
	this.shape_12.setTransform(0,7.5,0.863,0.873);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#733825").s().p("AgLApIAAhRIAXAAIAABRg");
	this.shape_13.setTransform(-0.2,18.2,0.863,0.873);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#733825").s().p("AgUBdIAAi5IApAAIAAC5g");
	this.shape_14.setTransform(0,-9.3,0.863,0.873);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8F6FB").s().p("Ak4AlQgOAAgJgJQgKgKAAgOIAAgIQAAgNAKgJQAJgKAOAAIJyAAQANAAAKAKQAJAJAAANIAAAIQAAAOgJAKQgKAJgNAAg");
	this.shape_15.setTransform(0,-26.7,0.863,0.873);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8F6FB").s().p("AlZAlIAAhJIKzAAIAABJg");
	this.shape_16.setTransform(0,-22.7,0.863,0.873);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6F2D23").s().p("AlFAaQgIAAgGgHQgGgFAAgJIAAgJQAAgJAGgFQAGgHAIAAIKLAAQAIAAAGAHQAGAFAAAJIAAAJQAAAJgGAFQgFAHgJAAg");
	this.shape_17.setTransform(0,-19.7,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,59.8,59.9);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DBDBDB").p("AAAn2IAAPt");
	this.shape.setTransform(58.8,4.6,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DBDBDB").p("AAAn2IAAPt");
	this.shape_1.setTransform(-60.1,4.6,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfH3IAAvtIA/AAIAAPtg");
	this.shape_2.setTransform(61.7,4.6,0.863,0.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfH3IAAvtIA/AAIAAPtg");
	this.shape_3.setTransform(-63.7,4.6,0.863,0.873);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#954226").s().p("AtHAaIAAgzIaPAAIAAAzg");
	this.shape_4.setTransform(0,-46.2,0.863,0.873);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000800").s().p("AtHAXIAAgtIaPAAIAAAtg");
	this.shape_5.setTransform(0,-41.9,0.863,0.873);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F74").s().p("AhOASIAAgjICdAAIAAAjg");
	this.shape_6.setTransform(28.7,-30.5,0.863,0.873);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F74").s().p("AhOASIAAgjICdAAIAAAjg");
	this.shape_7.setTransform(-27.7,-30.5,0.863,0.873);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AqqB9IAAj5IVWAAIAAD5g");
	this.shape_8.setTransform(-0.3,-28.4,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-48.5,145.1,98.2);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DBDBDB").p("AAAn2IAAPt");
	this.shape.setTransform(58.8,4.6,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DBDBDB").p("AAAn2IAAPt");
	this.shape_1.setTransform(-60.1,4.6,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfH3IAAvtIA/AAIAAPtg");
	this.shape_2.setTransform(61.7,4.6,0.863,0.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfH3IAAvtIA/AAIAAPtg");
	this.shape_3.setTransform(-63.7,4.6,0.863,0.873);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#954226").s().p("AtHAaIAAgzIaPAAIAAAzg");
	this.shape_4.setTransform(0,-46.2,0.863,0.873);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000800").s().p("AtHAXIAAgtIaPAAIAAAtg");
	this.shape_5.setTransform(0,-41.9,0.863,0.873);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F74").s().p("AhOASIAAgjICdAAIAAAjg");
	this.shape_6.setTransform(28.7,-30.5,0.863,0.873);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F74").s().p("AhOASIAAgjICdAAIAAAjg");
	this.shape_7.setTransform(-27.7,-30.5,0.863,0.873);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AqqB9IAAj5IVWAAIAAD5g");
	this.shape_8.setTransform(-0.3,-28.4,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-48.5,145.1,98.2);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#120B0D").s().p("EglLAAbIAAg1MBKWAAAIAAA1g");
	this.shape.setTransform(0,-46.5,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#95421A").s().p("EglLAAZIAAgxMBKWAAAIAAAxg");
	this.shape_1.setTransform(0,-51.1,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_2.setTransform(162,-27.4,0.863,0.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_3.setTransform(162,-4.7,0.863,0.873);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_4.setTransform(162,17.8,0.863,0.873);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_5.setTransform(-77.2,-29.4,0.863,0.873);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D6C72").s().p("AhYAUIAAgnICxAAIAAAng");
	this.shape_6.setTransform(2.3,-29.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_7.setTransform(84.4,-29.4,0.863,0.873);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_8.setTransform(162,40.7,0.863,0.873);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_9.setTransform(-164.8,38.7,0.863,0.873);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_10.setTransform(-164.8,15.8,0.863,0.873);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_11.setTransform(-164.8,-6.7,0.863,0.873);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_12.setTransform(-164.8,-27.4,0.863,0.873);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#DBDBDB").ss(2).p("AVuAAMgrcAAA");
	this.shape_13.setTransform(-0.6,-16.7,0.863,0.873);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#DBDBDB").ss(2).p("AAAosIAARZ");
	this.shape_14.setTransform(120.7,4.6,0.863,0.873);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#DBDBDB").ss(2).p("AAAotIAARb");
	this.shape_15.setTransform(40.4,4.7,0.863,0.873);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#DBDBDB").ss(2).p("AAAosIAARZ");
	this.shape_16.setTransform(-39.8,4.6,0.863,0.873);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#DBDBDB").ss(2).p("AAAotIAARb");
	this.shape_17.setTransform(-120.7,4.7,0.863,0.873);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EggEAHmIAAvLMBAJAAAIAAPLg");
	this.shape_18.setTransform(0,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.3,-53.3,410.8,107.8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#120B0D").s().p("EglLAAbIAAg1MBKWAAAIAAA1g");
	this.shape.setTransform(0,-46.5,0.863,0.873);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#95421A").s().p("EglLAAZIAAgxMBKWAAAIAAAxg");
	this.shape_1.setTransform(0,-51.1,0.863,0.873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_2.setTransform(162,-27.4,0.863,0.873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_3.setTransform(162,-4.7,0.863,0.873);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_4.setTransform(162,17.8,0.863,0.873);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_5.setTransform(-84.1,-27.4,0.863,0.873);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_6.setTransform(-4.6,-27.4,0.863,0.873);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_7.setTransform(77.5,-27.4,0.863,0.873);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_8.setTransform(162,40.7,0.863,0.873);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_9.setTransform(-164.8,38.7,0.863,0.873);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_10.setTransform(-164.8,15.8,0.863,0.873);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_11.setTransform(-164.8,-6.7,0.863,0.873);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D6C72").s().p("AhmAXIAAgtIDNAAIAAAtg");
	this.shape_12.setTransform(-164.8,-27.4,0.863,0.873);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#DBDBDB").ss(2).p("AVuAAMgrcAAA");
	this.shape_13.setTransform(-0.6,-16.7,0.863,0.873);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#DBDBDB").ss(2).p("AAAosIAARZ");
	this.shape_14.setTransform(120.7,4.6,0.863,0.873);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#DBDBDB").ss(2).p("AAAotIAARb");
	this.shape_15.setTransform(40.4,4.7,0.863,0.873);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#DBDBDB").ss(2).p("AAAosIAARZ");
	this.shape_16.setTransform(-39.8,4.6,0.863,0.873);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#DBDBDB").ss(2).p("AAAotIAARb");
	this.shape_17.setTransform(-120.7,4.7,0.863,0.873);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EglLAItIAAxZMBKWAAAIAARZg");
	this.shape_18.setTransform(0,4.6,0.863,0.873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.3,-53.3,410.8,107.8);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgjeAUfIgDgdMAAAgndQAChGA1giQAbgQAagDMBELgABQAcAAAaAPQAOAHAIAIMhGfAqRQgYgYgJghg");
	this.shape.setTransform(227.5,136.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,454.9,273.7);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323232").s().p("AoXlXIQjh+IAvIVIx1GVg");
	this.shape.setTransform(57.2,47);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.4,94);


(lib.Tween109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.setTransform(5.3,-7.4,0.162,0.162,0,0,0,262.4,154.2);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag4AJQgHAAAAgEIAAgFQgBgBADgEQACgDADAAIBwAAQADAAADADQACAEAAABIAAAFQAAAEgIAAg");
	this.shape.setTransform(32.5,15.2,0.162,0.162);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Egh+AVoQgyAAgigiQgkgkABgyMAAAgngQgBgyAkgiQAigjAyAAMBD8AAAQAyAAAkAjQAiAiABAyMAAAAngQgBAygiAkQgkAigyAAg");
	this.shape_1.setTransform(-0.1,-8.1,0.162,0.162);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBCBCB").s().p("EgjnAXcQgygBgigiQgjgkAAgyMAAAgrFQAAgyAjgkQAigiAygBMBHPAAAQAxABAjAiQAkAkAAAyMAAAArFQAAAygkAkQgjAigxABg");
	this.shape_2.setTransform(0,-8,0.162,0.162);

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(6,16.3,0.162,0.162,0,0,0,85.3,66.2);
	this.instance_1.alpha = 0.5;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBCBCB").s().p("AoMLKIA72UIOiAAIA8WUg");
	this.shape_3.setTransform(0.1,18.5,0.162,0.162);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CBCBCB").s().p("AoWLKIA92UIOzAAIA8WUg");
	this.shape_4.setTransform(-0.1,18.5,0.162,0.162);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("An8BVQjTgkABgxQgBgxDTgiQDTgkEpABQEqgBDSAkQDUAjAAAwQAAAxjUAkQjSAikqABQkogBjUgig");
	this.shape_5.setTransform(0,29.8,0.162,0.162);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBCBCB").s().p("AocBNQi0gkAAgpQAAgwDUgkQDTgjEpAAQErAADTAjQDTAkAAAwQAAAxjTAkQjUAikqABQlKAAjSgrg");
	this.shape_6.setTransform(0,30.2,0.162,0.162);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4C").s().p("An8BUQjTgjABgxQgBgwDTgkQDTgiEpgBQEqABDSAiQDUAkAAAwQAAAxjUAjQjSAkkqgBQkoABjUgkg");
	this.shape_7.setTransform(0,30.5,0.162,0.162);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4C").s().p("AgMAJIgHgLIAIgSIAagGIAEAPQADASgGAUQgRgFgLgNg");
	this.shape_8.setTransform(11.4,30.1,0.162,0.162);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4C").s().p("AgSgLIAEgPIAaAGIAIASQgBAEgGAHQgLANgSAFQgFgUADgSg");
	this.shape_9.setTransform(8.5,30.3,0.162,0.162);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-32.3,77.7,64.8);


(lib.Tween108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.setTransform(5.3,-7.4,0.162,0.162,0,0,0,262.4,154.2);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag4AJQgHAAAAgEIAAgFQgBgBADgEQACgDADAAIBwAAQADAAADADQACAEAAABIAAAFQAAAEgIAAg");
	this.shape.setTransform(32.5,15.2,0.162,0.162);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Egh+AVoQgyAAgigiQgkgkABgyMAAAgngQgBgyAkgiQAigjAyAAMBD8AAAQAyAAAkAjQAiAiABAyMAAAAngQgBAygiAkQgkAigyAAg");
	this.shape_1.setTransform(-0.1,-8.1,0.162,0.162);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBCBCB").s().p("EgjnAXcQgygBgigiQgjgkAAgyMAAAgrFQAAgyAjgkQAigiAygBMBHPAAAQAxABAjAiQAkAkAAAyMAAAArFQAAAygkAkQgjAigxABg");
	this.shape_2.setTransform(0,-8,0.162,0.162);

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(6,16.3,0.162,0.162,0,0,0,85.3,66.2);
	this.instance_1.alpha = 0.5;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBCBCB").s().p("AoMLKIA72UIOiAAIA8WUg");
	this.shape_3.setTransform(0.1,18.5,0.162,0.162);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CBCBCB").s().p("AoWLKIA92UIOzAAIA8WUg");
	this.shape_4.setTransform(-0.1,18.5,0.162,0.162);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("An8BVQjTgkABgxQgBgxDTgiQDTgkEpABQEqgBDSAkQDUAjAAAwQAAAxjUAkQjSAikqABQkogBjUgig");
	this.shape_5.setTransform(0,29.8,0.162,0.162);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBCBCB").s().p("AocBNQi0gkAAgpQAAgwDUgkQDTgjEpAAQErAADTAjQDTAkAAAwQAAAxjTAkQjUAikqABQlKAAjSgrg");
	this.shape_6.setTransform(0,30.2,0.162,0.162);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4C").s().p("An8BUQjTgjABgxQgBgwDTgkQDTgiEpgBQEqABDSAiQDUAkAAAwQAAAxjUAjQjSAkkqgBQkoABjUgkg");
	this.shape_7.setTransform(0,30.5,0.162,0.162);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4C").s().p("AgMAJIgHgLIAIgSIAagGIAEAPQADASgGAUQgRgFgLgNg");
	this.shape_8.setTransform(11.4,30.1,0.162,0.162);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4C").s().p("AgSgLIAEgPIAaAGIAIASQgBAEgGAHQgLANgSAFQgFgUADgSg");
	this.shape_9.setTransform(8.5,30.3,0.162,0.162);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-32.3,77.7,64.8);


// stage content:
(lib.endocrino = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_92 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(92).call(this.frame_92).wait(60));

	// epubreta 3 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEF7DC","#FEF4D8","#FEEBCE","#FDDBBC","#FCC5A4","#FBA984","#F9865D","#F75E30","#F64817"],[0,0.169,0.314,0.447,0.576,0.702,0.824,0.941,1],0.3,-5,0,7.6).s().p("AhYAoIAlhPIBpAAIAjBPg");
	this.shape.setTransform(654.4,-74.4,0.766,0.766);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ADB8BC").p("AgaAAIA1AA");
	this.shape_1.setTransform(654.4,-90.9,0.766,0.766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,12.3).s().p("AhjCOIBKidIABhtIgKAAIAAgRIBKAAIAAARIgMABIABBtIBHCcg");
	this.shape_2.setTransform(654.3,-81.7,0.766,0.766);

	this.instance = new lib.Tween102("synched",0);
	this.instance.setTransform(561,-76.1);
	this.instance._off = true;

	this.instance_1 = new lib.Tween103("synched",0);
	this.instance_1.setTransform(708.9,219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},52).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},13).to({state:[]},34).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({_off:true,x:708.9,y:219},13).wait(85));

	// epubreta 3 copy 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#10F6CF","#13F3CF","#1AE8D1","#24D7D4","#31BED8","#419FDD","#5578E4","#6B4CEC","#841DF5"],[0,0.161,0.298,0.424,0.545,0.667,0.78,0.89,1],0.3,-6.6,-0.1,10.1).s().p("Ah0A1IAwhpICLAAIAuBpg");
	this.shape_3.setTransform(628.3,-75.6,0.766,0.766);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#ADB8BC").p("AgjAAIBHAA");
	this.shape_4.setTransform(628.3,-97.5,0.766,0.766);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,16.3).s().p("AiDC7IBijQIABiQIgOAAIAAgVIBjAAIAAAVIgPABIABCRIBdDOg");
	this.shape_5.setTransform(628.1,-85.2,0.766,0.766);

	this.instance_2 = new lib.Tween100("synched",0);
	this.instance_2.setTransform(571.4,-85.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween101("synched",0);
	this.instance_3.setTransform(686.8,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},52).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},13).to({state:[]},33).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({_off:false},0).to({_off:true,x:686.8,y:215.5},13).wait(84));

	// suport ep 2 copy 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape_6.setTransform(589.3,-72,0.766,0.766);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape_7.setTransform(589.6,-84.3,0.766,0.766);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_8.setTransform(604.6,-78,0.766,0.766);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_9.setTransform(574.3,-78,0.766,0.766);

	this.instance_4 = new lib.Tween98("synched",0);
	this.instance_4.setTransform(529.9,-77.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween99("synched",0);
	this.instance_5.setTransform(643.5,221.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},52).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},13).to({state:[]},28).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(57).to({_off:false},0).to({_off:true,x:643.5,y:221.3},13).wait(82));

	// eprb 14 copy 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A455E8").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape_10.setTransform(600.7,-80,0.766,0.766);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A455E8").s().p("AAABRQgEgBgFgDQgDgEAAgFIAAiHQAAgFADgEQAFgEAEABIAAAAQAFgBAEAEQAEAEAAAFIAACHQAAAFgEAEQgEADgFABg");
	this.shape_11.setTransform(600.7,-78.9,0.766,0.766);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AghAAIBCAA");
	this.shape_12.setTransform(600.8,-91.3,0.766,0.766);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_13.setTransform(600.7,-90.4,0.766,0.766);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_14.setTransform(600.7,-81.7,0.766,0.766);

	this.instance_6 = new lib.Tween96("synched",0);
	this.instance_6.setTransform(532.8,-80.8);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween97("synched",0);
	this.instance_7.setTransform(651.2,217.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},52).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_7}]},13).to({state:[]},32).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).to({_off:true,x:651.2,y:217.7},13).wait(80));

	// eprb 13 copy 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8BA37").s().p("AgMBQIAAigIAZAAIAACgg");
	this.shape_15.setTransform(593.2,-80.2,0.766,0.766);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8BA37").s().p("AAABQQgFAAgDgDQgEgDAAgGIAAiHQAAgFAEgEQADgDAFgBIABAAQAEABAEADQAEAEAAAFIAACHQAAAFgEAEQgEADgEAAg");
	this.shape_16.setTransform(593.2,-79,0.766,0.766);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_17.setTransform(593.2,-91.4,0.766,0.766);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_18.setTransform(593.2,-90.6,0.766,0.766);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB5QgHAAgEgEQgFgFAAgHIAAjRQAAgGAFgFQAFgGAGAAIABAAQAHAAAEAGQAFAFAAAGIAADRQAAAHgFAFQgEAEgHAAg");
	this.shape_19.setTransform(593.1,-81.8,0.766,0.766);

	this.instance_8 = new lib.Tween94("synched",0);
	this.instance_8.setTransform(543.6,-77.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween95("synched",0);
	this.instance_9.setTransform(645.9,218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},52).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_9}]},13).to({state:[]},31).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(61).to({_off:false},0).to({_off:true,x:645.9,y:218},13).wait(78));

	// eprb 12 copy 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4C5FE").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape_20.setTransform(585.8,-80,0.766,0.766);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4C5FE").s().p("AAABRQgFgBgDgDQgEgEAAgFIAAiHQAAgFAEgEQADgEAFABIABAAQAFgBAEAEQADAEAAAFIAACHQAAAFgDAEQgEADgFABg");
	this.shape_21.setTransform(585.8,-78.9,0.766,0.766);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_22.setTransform(585.9,-91.3,0.766,0.766);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_23.setTransform(585.8,-90.4,0.766,0.766);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_24.setTransform(585.9,-81.7,0.766,0.766);

	this.instance_10 = new lib.Tween92("synched",0);
	this.instance_10.setTransform(533.9,-77.5);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween93("synched",0);
	this.instance_11.setTransform(640.7,217.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},52).to({state:[{t:this.instance_10}]},11).to({state:[{t:this.instance_11}]},13).to({state:[]},30).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(63).to({_off:false},0).to({_off:true,x:640.7,y:217.7},13).wait(76));

	// eprubeta 11 copy 2
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#34DCE9").s().p("AgMBQIAAigIAZAAIAACgg");
	this.shape_25.setTransform(579,-80.2,0.766,0.766);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#34DCE9").s().p("AAABQQgEAAgEgDQgEgDAAgGIAAiHQAAgFAEgEQAEgDAEgBIAAAAQAGABADADQAEAEAAAFIAACHQAAAGgEADQgDADgGAAg");
	this.shape_26.setTransform(579,-79,0.766,0.766);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_27.setTransform(579,-91.4,0.766,0.766);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_28.setTransform(579,-90.6,0.766,0.766);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB5QgHAAgEgEQgFgFAAgHIAAjRQAAgGAFgFQAFgGAGAAIABAAQAHAAAEAGQAFAFAAAGIAADRQAAAHgFAFQgEAEgHAAg");
	this.shape_29.setTransform(579,-81.8,0.766,0.766);

	this.instance_12 = new lib.Tween90("synched",0);
	this.instance_12.setTransform(504,-80.3);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween91("synched",0);
	this.instance_13.setTransform(635.4,217.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},52).to({state:[{t:this.instance_12}]},13).to({state:[{t:this.instance_13}]},13).to({state:[]},29).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(65).to({_off:false},0).to({_off:true,x:635.4,y:217.7},13).wait(74));

	// eprubeta 4 copy 3
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#B574F8","#0DB89B"],[0,1],0.1,-6.3,-0.1,11.6).s().p("AhVBHQgMgQgLgaQgVgyAKgxIDsAAIAGAoQAAAwgiA1g");
	this.shape_30.setTransform(556.2,-77.3,0.766,0.766);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#ADB8BC").p("AgpAAIBTAA");
	this.shape_31.setTransform(556,-100.7,0.766,0.766);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,17.7).s().p("AhbDUQgcgogIgzQgPhlBigzIAAiTIgNgGIAAgbIBwAAIgBAZIgPAKIgBCQIAYAPQAbASARAaQA2BShEBng");
	this.shape_32.setTransform(556.2,-87.6,0.766,0.766);

	this.instance_14 = new lib.Tween88("synched",0);
	this.instance_14.setTransform(466.2,-88.3);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween89("synched",0);
	this.instance_15.setTransform(605.3,213.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},52).to({state:[{t:this.instance_14}]},16).to({state:[{t:this.instance_15}]},13).to({state:[]},27).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(68).to({_off:false},0).to({_off:true,x:605.3,y:213.6},13).wait(71));

	// eprubeta 10
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#59956C").ss(0.2).p("AADAAQgDACgBgDQgDgDAEACQADACAAAAgAADAJIAAgJ");
	this.shape_33.setTransform(688.6,-25.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7DCD2C").s().p("AgBAAQgDgDAEACQADABAAABIAAABIgCAAQgBAAgBgCg");
	this.shape_34.setTransform(688.6,-25.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#59956C").ss(0.2).p("AgCAAIACABQABgBACgBQACgDgFACQgCACAAAAgAgCAJIAAgJ");
	this.shape_35.setTransform(689.4,-25.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7DCD2C").s().p("AgCACIAAgBQAAgBACgBQAFgCgCADQgCACgBAAg");
	this.shape_36.setTransform(689.4,-25.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#59956C").ss(0.2).p("AAEAAQgEADgCgFQgDgEAFACQAEADAAABgAAEALIAAgL");
	this.shape_37.setTransform(688.5,-25.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7DCD2C").s().p("AgCAAQgDgEAFADQAEABAAACIAAABIgCAAQgCAAgCgDg");
	this.shape_38.setTransform(688.5,-25.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#59956C").ss(0.2).p("AgDAAIADABQABgBACgCQADgEgFACQgEADAAABgAgDALIAAgL");
	this.shape_39.setTransform(689.5,-25.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7DCD2C").s().p("AgDADIAAgBQAAgCAEgBQAFgDgDAEQgCADgBAAg");
	this.shape_40.setTransform(689.5,-25.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#59956C").ss(0.2).p("AAHAAQgBAAgDAAQgDAAgEgFQgFgHAJAEQAHAEAAAEgAAHAQIAAgQ");
	this.shape_41.setTransform(688.2,-24.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7DCD2C").s().p("AgEAAQgFgHAJAEQAHADAAADIAAABIgEABQgDAAgEgFg");
	this.shape_42.setTransform(688.2,-25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#59956C").ss(0.2).p("AgGAAIAEAAQADAAAEgFQAFgHgJAEQgHAEAAAEgAgGAQIAAgQ");
	this.shape_43.setTransform(689.8,-24.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7DCD2C").s().p("AgGAEIAAgBQAAgDAHgDQAJgEgFAHQgEAFgDAAg");
	this.shape_44.setTransform(689.8,-25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#59956C").ss(0.2).p("AAJAAQgCAAgDAAQgEAAgGgHQgGgJAMAFQAJAFAAAGgAAJATIAAgT");
	this.shape_45.setTransform(688,-23.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7DCD2C").s().p("AAEAHQgEgBgGgGQgGgJAMAFQAJAEAAAEIAAACIgEABIgBAAg");
	this.shape_46.setTransform(688,-24.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#59956C").ss(0.2).p("AgIAAIAFAAQAEAAAGgHQAGgJgMAFQgJAFAAAGgAgIATIAAgT");
	this.shape_47.setTransform(690,-23.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7DCD2C").s().p("AgIAGIAAgCQAAgEAJgEQAMgFgGAJQgGAGgEABg");
	this.shape_48.setTransform(690,-24.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#59956C").ss(0.2).p("AALgBQgCABgEAAQgGgBgGgJQgIgLAOAGQAMAHAAAHgAALAXIAAgY");
	this.shape_49.setTransform(687.8,-22.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7DCD2C").s().p("AAFAIQgGgBgGgHQgIgLAOAGQAMAFAAAGIAAABIgFABIgBAAg");
	this.shape_50.setTransform(687.8,-23.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#59956C").ss(0.2).p("AgKgBIAGABQAGgBAGgJQAIgLgOAGQgMAHAAAHgAgKAXIAAgY");
	this.shape_51.setTransform(690.2,-22.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7DCD2C").s().p("AgKAHIAAgBQAAgGAMgFQAOgGgIALQgGAHgGABg");
	this.shape_52.setTransform(690.2,-23.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#59956C").ss(0.2).p("AANgBQgDABgFAAQgHgBgHgLQgJgNAQAHQAPAIAAAJgAANAbIAAgc");
	this.shape_53.setTransform(687.7,-21.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7DCD2C").s().p("AAFAKQgHgBgHgKQgJgNAQAIQAPAGAAAHIAAABQgCACgEAAIgCAAg");
	this.shape_54.setTransform(687.7,-22.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#59956C").ss(0.2).p("AgMgBIAIABQAHgBAHgLQAJgNgQAHQgPAIAAAJgAgMAbIAAgc");
	this.shape_55.setTransform(690.3,-21.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7DCD2C").s().p("AgMAIIAAgBQAAgHAPgGQAQgIgJANQgHAKgHABg");
	this.shape_56.setTransform(690.3,-22.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#59956C").ss(0.2).p("AAPgCQgEACgFgBQgIgBgIgNQgKgOASAIQARAJAAAKgAAPAeIAAgg");
	this.shape_57.setTransform(687.5,-20.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7DCD2C").s().p("AAGALQgIgBgIgLQgKgOASAIQARAHAAAIIAAACQgDABgEAAIgCAAg");
	this.shape_58.setTransform(687.5,-22.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#59956C").ss(0.2).p("AgOgCIAJABQAIgBAIgNQAKgOgSAIQgRAJAAAKgAgOAeIAAgg");
	this.shape_59.setTransform(690.5,-20.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7DCD2C").s().p("AgOAKIAAgCQAAgIARgHQASgIgKAOQgIALgIABg");
	this.shape_60.setTransform(690.5,-22.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#59956C").ss(0.2).p("AAPgCQgEACgFgBQgIgBgIgNQgKgOASAIQARAJAAAKgAAPAeIAAgg");
	this.shape_61.setTransform(687.5,-19.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7DCD2C").s().p("AAGALQgIgBgIgLQgKgOASAIQARAHAAAIIAAACQgDABgEAAIgCAAg");
	this.shape_62.setTransform(687.5,-20.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#59956C").ss(0.2).p("AgOgCIAJABQAIgBAIgNQAKgOgSAIQgRAJAAAKgAgOAeIAAgg");
	this.shape_63.setTransform(690.5,-19.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7DCD2C").s().p("AgOAKIAAgCQAAgIARgHQASgIgKAOQgIALgIABg");
	this.shape_64.setTransform(690.5,-20.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#59956C").ss(0.2).p("AARAiIAAglQgEADgFgBQgKgCgKgOQgLgRAVAKQATAKAAAJ");
	this.shape_65.setTransform(687.2,-18.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#7DCD2C").s().p("AAIANQgKgCgKgMQgLgRAVAKQATAIAAAJIAAACQgDACgDAAIgDAAg");
	this.shape_66.setTransform(687.2,-19.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#59956C").ss(0.2).p("AgQAiIAAglIAJACQAKgCAKgOQALgRgVAKQgTAKAAAJ");
	this.shape_67.setTransform(690.8,-18.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#7DCD2C").s().p("AgQALIAAgCQAAgJATgIQAVgKgLARQgKAMgKACg");
	this.shape_68.setTransform(690.8,-19.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#59956C").ss(0.2).p("AATAlIAAgpQgEADgHgBQgLgBgKgQQgMgSAWAKQAWALAAAK");
	this.shape_69.setTransform(687.1,-16.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7DCD2C").s().p("AAIAOQgLgCgKgOQgMgSAWALQAWAJAAAJIAAADQgEACgFAAIgCAAg");
	this.shape_70.setTransform(687.1,-18.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#59956C").ss(0.2).p("AgSAlIAAgpIALACQALgBAKgQQAMgSgWAKQgWALAAAK");
	this.shape_71.setTransform(690.9,-16.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#7DCD2C").s().p("AgSAMIAAgDQAAgJAWgJQAWgLgMASQgKAOgLACg");
	this.shape_72.setTransform(690.9,-18.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#ADB8BC").p("AgZAAIAyAA");
	this.shape_73.setTransform(689,-37.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.8).s().p("AhfCHIBHiVIABhpIgKAAIAAgPIBHAAIAAAPIgLABIABBpIBECUg");
	this.shape_74.setTransform(688.9,-25.9);

	this.instance_16 = new lib.Tween58("synched",0);
	this.instance_16.setTransform(688.9,-25.9);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween59("synched",0);
	this.instance_17.setTransform(726.2,170.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},43).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},12).to({state:[]},48).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(45).to({_off:false},0).to({_off:true,x:726.2,y:170.4},12).wait(95));

	// eprubeta 9
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#59956C").ss(0.2).p("AAUAoIAAgsQgEADgHgBQgMgCgMgRQgNgUAZALQAXAMAAAL");
	this.shape_75.setTransform(661.5,-18.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#7DCD2C").s().p("AAJAPQgMgBgMgQQgNgUAZAMQAXAKAAAKIAAADQgDACgFAAIgDAAg");
	this.shape_76.setTransform(661.5,-20.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#59956C").ss(0.2).p("AgTAoIAAgsIALACQAMgCAMgRQANgUgZALQgXAMAAAL");
	this.shape_77.setTransform(665.6,-18.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#7DCD2C").s().p("AgTANIAAgDQAAgKAXgKQAZgMgNAUQgMAQgMABg");
	this.shape_78.setTransform(665.6,-20.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#ADB8BC").p("AgeAAIA9AA");
	this.shape_79.setTransform(663.6,-43.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,14.1).s().p("AhyCiIBWi0IAAh9IgMAAIAAgSIBWAAIAAASIgOABIACB+IBRCyg");
	this.shape_80.setTransform(663.4,-29.6);

	this.instance_18 = new lib.Tween56("synched",0);
	this.instance_18.setTransform(663.4,-29.6);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween57("synched",0);
	this.instance_19.setTransform(697.9,167.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},43).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},12).to({state:[]},47).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(46).to({_off:false},0).to({_off:true,x:697.9,y:167.7},12).wait(94));

	// eprubeta 7
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6C9242").s().p("AgQAlQgDgCACgMQACgMAHgOQAHgPAGgKQAHgKAEACQAEACgCAMQgDAMgHAOQgGAPgGAKQgHAIgDAAIgCAAg");
	this.shape_81.setTransform(640.2,-27.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#68903C").s().p("AAEAdQgGgJgHgPQgIgNgCgNQgCgMAFgCQAEgCAIAJQAHAJAHAPQAIANACANQACAMgEACIgDABQgEAAgHgIg");
	this.shape_82.setTransform(636.5,-25.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#87BE58").s().p("AgLAqQgEgBACgOQABgNAGgPQAFgRAEgMQAGgMADABQADABgBAOQgCAMgFAQQgFARgEAMQgGALgDAAIAAAAg");
	this.shape_83.setTransform(640,-29.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#87BE58").s().p("AAEAfQgGgLgGgRQgHgPgCgNQgCgNAEgBQAEgCAHALQAGALAHARQAGAPADANQACANgEABIgBAAQgEAAgHgJg");
	this.shape_84.setTransform(636.5,-27.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#87BE58").s().p("AgVAlQgEgCAEgNQAFgNAJgNQAIgPAJgKQAJgJAEACQADACgEANQgEAMgKAOQgIAPgIAKQgIAIgEAAIgBgBg");
	this.shape_85.setTransform(640.5,-25.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8E602F").s().p("AgBAhQgDgPABgSQgBgRADgPIABgPIADAPQACAMAAAUQAAAVgCAMIgDAQg");
	this.shape_86.setTransform(638.2,-19.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#72A23D").s().p("AAAAdQgEgKgFgRQgEgOAAgNQAAgMAEgBQAEgBAFALQAFALAEAQQAEAOABANQAAAMgEABIgBAAQgEAAgFgKg");
	this.shape_87.setTransform(637.4,-27.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#87BE58").s().p("AAAAfQgDgNgDgRQgEgQAAgNQgBgNAEgBQADAAAEAMQAEALAEASQADARAAAMQABAOgEAAIAAABQgEAAgEgMg");
	this.shape_88.setTransform(637.8,-29.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7AB146").s().p("AgBAoQgEAAgDgMQgCgMABgQQACgQADgMQAEgLACAAQAEAAADAMQACAMgBAPQgCARgDAMQgEALgCAAIAAAAg");
	this.shape_89.setTransform(638.8,-31.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#ADB8BC").p("AgtAAIBbAA");
	this.shape_90.setTransform(638.8,-54.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,19.4).s().p("AhkDpQgegsgJg3QgRhwBsg4IAAihIgPgHIAAgeIB7AAIgBAcIgRALIAACeIAaARQAeAUASAcQA8BahLBxg");
	this.shape_91.setTransform(639.2,-35.5);

	this.instance_20 = new lib.Tween54("synched",0);
	this.instance_20.setTransform(639.2,-35.5);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween55("synched",0);
	this.instance_21.setTransform(668.1,160.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},43).to({state:[{t:this.instance_20}]},4).to({state:[{t:this.instance_21}]},12).to({state:[]},46).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(47).to({_off:false},0).to({_off:true,x:668.1,y:160.7},12).wait(93));

	// eprubeta 6.5
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7AB146").s().p("AADARQgEgFgFgJQgFgHgCgIQgBgHADgBQACgCAGAFQAEAGAFAJQAMAUgHAEIgBAAQgDAAgEgFg");
	this.shape_92.setTransform(605.9,-17.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#87BE58").s().p("AgFAaQgDgBAAgIQgBgIADgJQADgLADgHQADgHADAAQAEABAAAIQAAAIgDAJQgCALgFAHQgCAHgCAAIgBAAg");
	this.shape_93.setTransform(607.5,-17.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#647454").s().p("AgBARQgDgIABgJQgBgIADgJIABgIIADAIQACAHAAAKQAAALgCAGIgDAJg");
	this.shape_94.setTransform(607.1,-14);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7AB146").s().p("AgLAWQgDgCABgHQACgIAFgHQAFgJAEgFQAGgGACABQAHAEgMAUQgIATgHAAIgCAAg");
	this.shape_95.setTransform(618.5,-17.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#87BE58").s().p("AAAATQgEgHgCgLQgDgJAAgIQAAgIAEgBQADAAACAHQAEAHADALQADAJAAAIQgBAIgDABIAAAAQgDAAgDgHg");
	this.shape_96.setTransform(616.8,-17.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#647454").s().p("AgCASQgCgLAAgHQAAgKACgGIACgIIADAIQABAJAAAHQABAJgDAJIgCAIQgBgDgBgFg");
	this.shape_97.setTransform(617.2,-13.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#ADB8BC").p("AgdAAIA7AA");
	this.shape_98.setTransform(611.6,-36.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,12.8).s().p("AhBCQQgUgbgGgjQgMhFBIghIAAhlIgKgEIAAgSIBRAAIgBARIgLAHIAABhIARALQAUALAMASQAnA3gxBHg");
	this.shape_99.setTransform(611.8,-24.8);

	this.instance_22 = new lib.Tween52("synched",0);
	this.instance_22.setTransform(611.8,-24.8);
	this.instance_22._off = true;

	this.instance_23 = new lib.Tween53("synched",0);
	this.instance_23.setTransform(644.4,169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},43).to({state:[{t:this.instance_22}]},5).to({state:[{t:this.instance_23}]},12).to({state:[]},45).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(48).to({_off:false},0).to({_off:true,x:644.4,y:169.6},12).wait(92));

	// eprubeta 8
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7AB146").s().p("AgEACQgDgEgCgGQgBgGACgBQAGgCAHAQIAFAKQABAGgDABIgBAAQgFAAgGgOg");
	this.shape_100.setTransform(594.4,-18.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#87BE58").s().p("AgKAQQgCgBACgGQACgFAEgFQAEgHADgEQAFgEACABQAFACgLAPQgEAHgDAEQgEADgCAAIgBAAg");
	this.shape_101.setTransform(596.2,-18.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#647454").s().p("AgBASQgCgJAAgJQAAgGACgKIABgIIACAIQADAGAAAKQAAAHgDALQgBAEgBAEIgBgIg");
	this.shape_102.setTransform(595.3,-15);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_103.setTransform(595.4,-30.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.7).s().p("AhGBkIA1huIAAhNIgHgBIAAgLIA0AAIAAAMIgIAAIAABNIAyBug");
	this.shape_104.setTransform(595.3,-22.2);

	this.instance_24 = new lib.Tween50("synched",0);
	this.instance_24.setTransform(595.3,-22.2);
	this.instance_24._off = true;

	this.instance_25 = new lib.Tween51("synched",0);
	this.instance_25.setTransform(625.8,173.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},43).to({state:[{t:this.instance_24}]},6).to({state:[{t:this.instance_25}]},12).to({state:[]},44).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(49).to({_off:false},0).to({_off:true,x:625.8,y:173.5},12).wait(91));

	// eprubeta 6
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#7AB146").s().p("AACAOQgCgFgEgHIgFgLQgBgGACgBQADgBAEAEQACAFADAHQAJAPgFADIgBAAQgCAAgDgDg");
	this.shape_105.setTransform(574.6,-17.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#87BE58").s().p("AgKARQgCAAACgHQACgGAFgGQAIgRAGACQACACgCAGQgCAGgFAGQgHAPgFAAIgCgBg");
	this.shape_106.setTransform(576.4,-17.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#647454").s().p("AgCATQgCgLAAgIQAAgIACgKIACgIIADAIQABAKAAAIQAAAIgBALIgDAIg");
	this.shape_107.setTransform(575.5,-13.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#7AB146").s().p("AADATQgDgGgGgKQgEgHgCgJQgBgIACgBQADgCAGAGQADAGAGAKQAEAHACAJQABAIgCABIgBABQgDAAgFgFg");
	this.shape_108.setTransform(569.2,-18);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#87BE58").s().p("AgFAbQgDAAgBgJQAAgJADgJQAGgdAGADQADABABAIQAAAJgDAJQgCAMgFAHQgBAHgDAAIgBAAg");
	this.shape_109.setTransform(570.8,-18.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#647454").s().p("AgBATQgDgLAAgIQAAgHADgLIABgIIACAIQACALAAAHQAAAIgCALIgCAIg");
	this.shape_110.setTransform(570.4,-14.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#7AB146").s().p("AgLAXQgDgBACgIQABgIAFgIQAGgKADgGQAGgGADACQADABgCAIQgBAJgGAHQgFAKgDAGQgFAFgCAAIgCgBg");
	this.shape_111.setTransform(581.7,-17.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#87BE58").s().p("AAAAUQgEgHgCgMQgDgJABgJQAAgIADgBQADgBACAIQAFAHACAMQADAJAAAJQgBAJgDAAIgBAAQgCAAgDgHg");
	this.shape_112.setTransform(580.1,-18.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#647454").s().p("AgBATQgBgGgCgNQACgNABgFIABgIIADAIQABAIAAAKQAAAMgBAHQgBAFgCAEIgBgJg");
	this.shape_113.setTransform(580.5,-13.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#ADB8BC").p("AgdAAIA7AA");
	this.shape_114.setTransform(574.9,-38.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,12.8).s().p("AhCCaQgUgdgFglQgMhKBIgkIAAhrIgKgEIAAgUIBQAAIAAATIgLAHIgBBoIASALQATANANASQAnA7gxBMg");
	this.shape_115.setTransform(575.1,-25.8);

	this.instance_26 = new lib.Tween48("synched",0);
	this.instance_26.setTransform(575.1,-25.8);
	this.instance_26._off = true;

	this.instance_27 = new lib.Tween49("synched",0);
	this.instance_27.setTransform(604.8,168.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]},43).to({state:[{t:this.instance_26}]},7).to({state:[{t:this.instance_27}]},12).to({state:[]},43).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(50).to({_off:false},0).to({_off:true,x:604.8,y:168.6},12).wait(90));

	// eprubeta 5
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#87BE58").s().p("AgBABQgHgGADgCQACgCAEAJQAIAHgDABIgBAAQgCAAgEgHg");
	this.shape_116.setTransform(556.4,-14.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#87BE58").s().p("AgBAAQABgMABABQADAAgCALQgBAMgBAAQgDAAACgMg");
	this.shape_117.setTransform(557.1,-15);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#87BE58").s().p("AgFAIQgCgCAGgGQAFgIACABQACACgGAGQgDAHgDAAIgBAAg");
	this.shape_118.setTransform(562.1,-14.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#87BE58").s().p("AgBAAQgBgLACAAQAAAAACALQABALgCABQgBAAgBgMg");
	this.shape_119.setTransform(561.4,-14.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_120.setTransform(559.3,-30.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.3).s().p("AgqBkQgNgUgEgXQgHgwAugXIAAhFIgGgDIAAgMIAzAAIAAALIgHAFIAABEIALAHQANAHAIAMQAZAnggAxg");
	this.shape_121.setTransform(559.5,-22.6);

	this.instance_28 = new lib.Tween46("synched",0);
	this.instance_28.setTransform(559.5,-22.6);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween47("synched",0);
	this.instance_29.setTransform(580.7,172.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]},43).to({state:[{t:this.instance_28}]},8).to({state:[{t:this.instance_29}]},12).to({state:[]},42).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(51).to({_off:false},0).to({_off:true,x:580.7,y:172.9},12).wait(89));

	// eprubeta 4 copy
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#F18799","#AF2A40"],[0,1],0,-4.8,-0.1,8.9).s().p("AhAA2QgKgMgIgUQgQglAHgmIC0AAIAFAfQgBAjgaApg");
	this.shape_122.setTransform(426.9,-76.5,0.766,0.766);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#ADB8BC").p("AgeAAIA9AA");
	this.shape_123.setTransform(426.8,-94.3,0.766,0.766);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,13.4).s().p("AhFChQgVgegGgmQgMhOBLgmIAAhwIgKgEIAAgWIBUAAIAAAUIgMAHIAABuIASAMQAUANANAUQAqA9g0BPg");
	this.shape_124.setTransform(426.9,-84.4,0.766,0.766);

	this.instance_30 = new lib.Tween86("synched",0);
	this.instance_30.setTransform(408.6,-71.8);
	this.instance_30._off = true;

	this.instance_31 = new lib.Tween87("synched",0);
	this.instance_31.setTransform(313.9,215.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},52).to({state:[{t:this.instance_30}]},17).to({state:[{t:this.instance_31}]},12).to({state:[]},38).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(69).to({_off:false},0).to({_off:true,x:313.9,y:215.5},12).wait(71));

	// eprubeta 4 copy 2
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#E9DF2B","#E5DD2B","#DBD929","#C9D125","#B1C620","#91B81A","#6AA813","#519D0E"],[0,0.192,0.353,0.506,0.651,0.792,0.925,1],0.1,-3.5,0,6.5).s().p("AguAnQgHgJgGgOQgMgbAFgbICDAAIADAWQAAAagTAdg");
	this.shape_125.setTransform(412.5,-75.7,0.766,0.766);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#ADB8BC").p("AgWAAIAtAA");
	this.shape_126.setTransform(412.5,-88.7,0.766,0.766);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,9.8).s().p("AgyB2QgQgWgEgdQgJg4A3gbIAAhSIgHgEIAAgPIA9AAIAAAOIgJAGIAABQIANAIQAPAKAKAOQAeAtgmA6g");
	this.shape_127.setTransform(412.6,-81.4,0.766,0.766);

	this.instance_32 = new lib.Tween84("synched",0);
	this.instance_32.setTransform(407,-79.8);
	this.instance_32._off = true;

	this.instance_33 = new lib.Tween85("synched",0);
	this.instance_33.setTransform(297.7,218.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_127},{t:this.shape_126},{t:this.shape_125}]},52).to({state:[{t:this.instance_32}]},15).to({state:[{t:this.instance_33}]},12).to({state:[]},37).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(67).to({_off:false},0).to({_off:true,x:297.7,y:218.8},12).wait(73));

	// eprubeta2 copy 2
	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#DCEBCC","#D4E8C8","#BEDEBE","#9ACEAE","#68B997","#289D7A","#279D7A","#2B9F7C","#36A483","#49AC8F","#53B095"],[0,0.106,0.271,0.475,0.71,0.965,0.969,0.98,0.988,0.996,1],0.1,-4.1,0,6.6).s().p("AgmAZQgSgfADgTIBrAAIAAANQgCAOgMAXg");
	this.shape_128.setTransform(402,-74.5,0.766,0.766);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#ADB8BC").p("AgRAAIAjAA");
	this.shape_129.setTransform(401.9,-85.6,0.766,0.766);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8).s().p("AgpBgQgMgSgEgXQgHguAtgWIAAhDIgHgCIABgNIAxAAIAAAMIgHAEIgBBCIALAGQANAHAHAMQAZAlgfAvg");
	this.shape_130.setTransform(402,-79.7,0.766,0.766);

	this.instance_34 = new lib.Tween82("synched",0);
	this.instance_34.setTransform(397.2,-76.8);
	this.instance_34._off = true;

	this.instance_35 = new lib.Tween83("synched",0);
	this.instance_35.setTransform(285.3,222.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128}]},52).to({state:[{t:this.instance_34}]},14).to({state:[{t:this.instance_35}]},12).to({state:[]},39).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(66).to({_off:false},0).to({_off:true,x:285.3,y:222.5},12).wait(74));

	// eprubeta2 copy
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#E6D0FC","#E6CEF8","#E6C7EE","#E8BDDC","#E9AEC4","#EC9CA4","#EF847D","#F2694F","#F64A1C","#F64817"],[0,0.161,0.294,0.42,0.541,0.659,0.773,0.882,0.992,1],0.1,-5.5,-0.1,8.6).s().p("AgyAiQgGgLgGgPQgLgaACgPICOAAIABARQgDAUgQAeg");
	this.shape_131.setTransform(390.1,-75.2,0.766,0.766);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#ADB8BC").p("AgYAAIAxAA");
	this.shape_132.setTransform(390,-89.7,0.766,0.766);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,10.5).s().p("Ag2B+QgQgYgFgeQgJg8A7geIAAhXIgJgEIABgQIBBAAIAAAPIgJAGIgBBWIAOAJQARAKAKAPQAgAwgoA+g");
	this.shape_133.setTransform(390.1,-82,0.766,0.766);

	this.instance_36 = new lib.Tween80("synched",0);
	this.instance_36.setTransform(391.5,-80.5);
	this.instance_36._off = true;

	this.instance_37 = new lib.Tween81("synched",0);
	this.instance_37.setTransform(272.1,218.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},52).to({state:[{t:this.instance_36}]},13).to({state:[{t:this.instance_37}]},12).to({state:[]},40).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(65).to({_off:false},0).to({_off:true,x:272.1,y:218.2},12).wait(75));

	// suport ep 2 copy
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape_134.setTransform(362.7,-73.1,0.766,0.766);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape_135.setTransform(363,-85.4,0.766,0.766);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_136.setTransform(378,-79.1,0.766,0.766);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_137.setTransform(347.7,-79.1,0.766,0.766);

	this.instance_38 = new lib.Tween78("synched",0);
	this.instance_38.setTransform(360.4,-80.9);
	this.instance_38._off = true;

	this.instance_39 = new lib.Tween79("synched",0);
	this.instance_39.setTransform(245.3,221.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},52).to({state:[{t:this.instance_38}]},7).to({state:[{t:this.instance_39}]},13).to({state:[]},45).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(59).to({_off:false},0).to({_off:true,x:245.3,y:221.3},13).wait(80));

	// eprb 14 copy
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E9DF2B").s().p("AgMBQIAAifIAZAAIAACfg");
	this.shape_138.setTransform(374.1,-81.2,0.766,0.766);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E9DF2B").s().p("AAABRQgEAAgFgEQgDgEAAgFIAAiHQAAgFADgEQAFgEAEAAIAAAAQAFAAAEAEQAEAEAAAFIAACHQAAAFgEAEQgEAEgFAAg");
	this.shape_139.setTransform(374.1,-80.1,0.766,0.766);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AghAAIBCAA");
	this.shape_140.setTransform(374.2,-92.4,0.766,0.766);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_141.setTransform(374.1,-91.6,0.766,0.766);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIAAAAQAIAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgIAAg");
	this.shape_142.setTransform(374.1,-82.9,0.766,0.766);

	this.instance_40 = new lib.Tween76("synched",0);
	this.instance_40.setTransform(377.4,-83);
	this.instance_40._off = true;

	this.instance_41 = new lib.Tween77("synched",0);
	this.instance_41.setTransform(256.5,217.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},52).to({state:[{t:this.instance_40}]},12).to({state:[{t:this.instance_41}]},12).to({state:[]},41).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(64).to({_off:false},0).to({_off:true,x:256.5,y:217.9},12).wait(76));

	// eprb 13 copy
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#60D223").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape_143.setTransform(366.6,-81.3,0.766,0.766);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#60D223").s().p("AAABQQgFAAgDgDQgEgEAAgFIAAiHQAAgFAEgEQADgEAFAAIABAAQAEAAAEAEQAEAEAAAFIAACHQAAAFgEAEQgEADgEAAg");
	this.shape_144.setTransform(366.6,-80.2,0.766,0.766);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_145.setTransform(366.6,-92.6,0.766,0.766);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_146.setTransform(366.6,-91.7,0.766,0.766);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_147.setTransform(366.5,-83,0.766,0.766);

	this.instance_42 = new lib.Tween74("synched",0);
	this.instance_42.setTransform(363.5,-83);
	this.instance_42._off = true;

	this.instance_43 = new lib.Tween75("synched",0);
	this.instance_43.setTransform(248.1,217.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143}]},52).to({state:[{t:this.instance_42}]},11).to({state:[{t:this.instance_43}]},12).to({state:[]},42).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(63).to({_off:false},0).to({_off:true,x:248.1,y:217.9},12).wait(77));

	// eprb 12 copy
	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00FEF7").s().p("AgMBQIAAifIAZAAIAACfg");
	this.shape_148.setTransform(359.2,-81.2,0.766,0.766);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00FEF7").s().p("AAABRQgFAAgDgEQgEgEAAgFIAAiHQAAgFAEgEQADgEAFAAIABAAQAFAAAEAEQADAEAAAFIAACHQAAAFgDAEQgFAEgEAAg");
	this.shape_149.setTransform(359.2,-80.1,0.766,0.766);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_150.setTransform(359.3,-92.4,0.766,0.766);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_151.setTransform(359.2,-91.6,0.766,0.766);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_152.setTransform(359.3,-82.9,0.766,0.766);

	this.instance_44 = new lib.Tween72("synched",0);
	this.instance_44.setTransform(356.2,-82.9);
	this.instance_44._off = true;

	this.instance_45 = new lib.Tween73("synched",0);
	this.instance_45.setTransform(240.5,217.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148}]},52).to({state:[{t:this.instance_44}]},10).to({state:[{t:this.instance_45}]},12).to({state:[]},43).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(62).to({_off:false},0).to({_off:true,x:240.5,y:217.9},12).wait(78));

	// eprubeta 11 copy
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E73663").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape_153.setTransform(352.4,-81.3,0.766,0.766);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#E73663").s().p("AAABQQgEAAgEgDQgEgEAAgFIAAiHQAAgFAEgEQAEgEAEAAIAAAAQAGAAADAEQAEAEAAAFIAACHQAAAFgEAEQgDADgGAAg");
	this.shape_154.setTransform(352.4,-80.2,0.766,0.766);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_155.setTransform(352.4,-92.6,0.766,0.766);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_156.setTransform(352.4,-91.7,0.766,0.766);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_157.setTransform(352.4,-83,0.766,0.766);

	this.instance_46 = new lib.Tween70("synched",0);
	this.instance_46.setTransform(351.1,-82.9);
	this.instance_46._off = true;

	this.instance_47 = new lib.Tween71("synched",0);
	this.instance_47.setTransform(233.2,217.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]},52).to({state:[{t:this.instance_46}]},9).to({state:[{t:this.instance_47}]},12).to({state:[]},44).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(61).to({_off:false},0).to({_off:true,x:233.2,y:217.9},12).wait(79));

	// suport ep 2
	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape_158.setTransform(197.2,-72,0.766,0.766);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#E9F6FD").ss(2).p("AjTAAIGnAA");
	this.shape_159.setTransform(197.4,-84.3,0.766,0.766);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_160.setTransform(212.5,-77.9,0.766,0.766);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhMIAACZ");
	this.shape_161.setTransform(182.2,-77.9,0.766,0.766);

	this.instance_48 = new lib.Tween60("synched",0);
	this.instance_48.setTransform(328.7,-79.1);
	this.instance_48._off = true;

	this.instance_49 = new lib.Tween61("synched",0);
	this.instance_49.setTransform(209.1,221.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158}]},52).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},13).to({state:[]},50).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(53).to({_off:false},0).to({_off:true,x:209.1,y:221.3},13).wait(86));

	// eprb 14
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#A455E8").s().p("AgMBRIAAigIAZAAIAACgg");
	this.shape_162.setTransform(339.9,-81.1,0.766,0.766);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#A455E8").s().p("AAABRQgEAAgEgEQgEgEAAgFIAAiHQAAgFAEgEQAEgEAEAAIAAAAQAGAAADAEQAEAEAAAFIAACHQAAAFgEAEQgEAEgFAAg");
	this.shape_163.setTransform(339.9,-79.9,0.766,0.766);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_164.setTransform(340,-92.3,0.766,0.766);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_165.setTransform(339.9,-91.5,0.766,0.766);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_166.setTransform(339.9,-82.7,0.766,0.766);

	this.instance_50 = new lib.Tween62("synched",0);
	this.instance_50.setTransform(339.8,-82.6);
	this.instance_50._off = true;

	this.instance_51 = new lib.Tween63("synched",0);
	this.instance_51.setTransform(217.8,217.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},52).to({state:[{t:this.instance_50}]},6).to({state:[{t:this.instance_51}]},12).to({state:[]},45).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(58).to({_off:false},0).to({_off:true,x:217.8,y:217.9},12).wait(82));

	// eprb 13
	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F8BA37").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape_167.setTransform(332.3,-81.2,0.766,0.766);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F8BA37").s().p("AAABQQgEAAgEgDQgEgDAAgGIAAiHQAAgFAEgEQAEgDAEgBIAAAAQAGABADADQAEAEAAAFIAACHQAAAGgEADQgDADgGAAg");
	this.shape_168.setTransform(332.3,-80.1,0.766,0.766);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_169.setTransform(332.4,-92.5,0.766,0.766);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_170.setTransform(332.3,-91.6,0.766,0.766);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_171.setTransform(332.3,-82.9,0.766,0.766);

	this.instance_52 = new lib.Tween64("synched",0);
	this.instance_52.setTransform(329.1,-83.1);
	this.instance_52._off = true;

	this.instance_53 = new lib.Tween65("synched",0);
	this.instance_53.setTransform(210.7,217.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167}]},52).to({state:[{t:this.instance_52}]},5).to({state:[{t:this.instance_53}]},12).to({state:[]},46).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(57).to({_off:false},0).to({_off:true,x:210.7,y:217.9},12).wait(83));

	// eprb 12
	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F4C5FE").s().p("AgMBRIAAigIAZAAIAACgg");
	this.shape_172.setTransform(325,-81.1,0.766,0.766);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F4C5FE").s().p("AAABRQgEAAgFgEQgDgEAAgFIAAiHQAAgFADgEQAFgEAEAAIABAAQAFAAADAEQAEAEAAAFIAACHQAAAFgEAEQgDAEgFAAg");
	this.shape_173.setTransform(325,-79.9,0.766,0.766);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AghAAIBCAA");
	this.shape_174.setTransform(325.1,-92.3,0.766,0.766);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_175.setTransform(325,-91.5,0.766,0.766);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgHAAgFgFQgEgFAAgHIAAjRQAAgHAEgFQAFgFAHAAIABAAQAGAAAFAFQAFAFAAAHIAADRQAAAHgFAFQgFAFgGAAg");
	this.shape_176.setTransform(325,-82.7,0.766,0.766);

	this.instance_54 = new lib.Tween66("synched",0);
	this.instance_54.setTransform(322.2,-83.1);
	this.instance_54._off = true;

	this.instance_55 = new lib.Tween67("synched",0);
	this.instance_55.setTransform(203.5,217.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172}]},52).to({state:[{t:this.instance_54}]},4).to({state:[{t:this.instance_55}]},12).to({state:[]},47).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(56).to({_off:false},0).to({_off:true,x:203.5,y:217.9},12).wait(84));

	// eprubeta 11
	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#34DCE9").s().p("AgMBRIAAihIAZAAIAAChg");
	this.shape_177.setTransform(318.1,-81.2,0.766,0.766);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#34DCE9").s().p("AAABQQgFAAgDgDQgEgEAAgFIAAiHQAAgFAEgEQADgDAFgBIABAAQAFABAEADQADAEAAAFIAACHQAAAGgDADQgEADgFAAg");
	this.shape_178.setTransform(318.1,-80.1,0.766,0.766);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,2.5).ss(2).p("AggAAIBBAA");
	this.shape_179.setTransform(318.2,-92.5,0.766,0.766);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#ADB8BC").p("AgSAAIAlAA");
	this.shape_180.setTransform(318.1,-91.6,0.766,0.766);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,8.8).s().p("AAAB6QgGAAgFgFQgFgFAAgHIAAjRQAAgHAFgFQAFgFAGAAIABAAQAHAAAEAFQAFAFAAAHIAADRQAAAHgFAFQgEAFgHAAg");
	this.shape_181.setTransform(318.2,-82.9,0.766,0.766);

	this.instance_56 = new lib.Tween68("synched",0);
	this.instance_56.setTransform(315.8,-83.1);
	this.instance_56._off = true;

	this.instance_57 = new lib.Tween69("synched",0);
	this.instance_57.setTransform(197.5,217.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177}]},52).to({state:[{t:this.instance_56}]},3).to({state:[{t:this.instance_57}]},12).to({state:[]},48).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(55).to({_off:false},0).to({_off:true,x:197.5,y:217.9},12).wait(85));

	// suport epbrete
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#E9F6FD").ss(2).p("AjwAAIHhAA");
	this.shape_182.setTransform(344,-8.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#E9F6FD").ss(2).p("AjxAAIHjAA");
	this.shape_183.setTransform(344.3,-26.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhXIAACv");
	this.shape_184.setTransform(366.7,-17.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#DBE4E9").ss(1.5).p("AAAhXIAACv");
	this.shape_185.setTransform(321.7,-17.3);

	this.instance_58 = new lib.Tween44("synched",0);
	this.instance_58.setTransform(344.1,-17.6);
	this.instance_58._off = true;

	this.instance_59 = new lib.Tween45("synched",0);
	this.instance_59.setTransform(307.3,171.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182}]},43).to({state:[{t:this.instance_58}]},6).to({state:[{t:this.instance_59}]},13).to({state:[]},43).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(49).to({_off:false},0).to({_off:true,x:307.3,y:171.4},13).wait(90));

	// sp ep 4
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FEC381").s().p("AgPBjIAAjFIAfAAIAADFg");
	this.shape_186.setTransform(359.5,-22.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FEC381").s().p("AgDBkQgFgBgEgDQgDgEAAgFIAAitQAAgFADgEQAEgDAFAAIAHAAQAFAAAEADQADAFAAAEIAACtQAAAFgDAEQgEADgFABg");
	this.shape_187.setTransform(359.5,-20.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,3.2).ss(2).p("AgpAAIBTAA");
	this.shape_188.setTransform(359.6,-40.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#ADB8BC").p("AgXAAIAvAA");
	this.shape_189.setTransform(359.5,-39.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.1).s().p("AgBCWQgIAAgGgGQgGgGAAgIIAAkCQAAgJAGgGQAGgGAIAAIADAAQAIAAAGAGQAGAGAAAJIAAECQAAAIgGAGQgGAGgIAAg");
	this.shape_190.setTransform(359.5,-25.2);

	this.instance_60 = new lib.Tween42("synched",0);
	this.instance_60.setTransform(359.6,-25.4);
	this.instance_60._off = true;

	this.instance_61 = new lib.Tween43("synched",0);
	this.instance_61.setTransform(326.1,167.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186}]},43).to({state:[{t:this.instance_60}]},11).to({state:[{t:this.instance_61}]},12).to({state:[]},39).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(54).to({_off:false},0).to({_off:true,x:326.1,y:167.2},12).wait(86));

	// sp ep 3
	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#B5D99F").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape_191.setTransform(348.4,-22.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#B5D99F").s().p("AgDBkQgFgBgEgDQgEgEAAgFIAAitQAAgEAEgFQAEgDAFAAIAHAAQAFAAAEADQAEAFAAAEIAACtQAAAFgEAEQgEADgFABg");
	this.shape_192.setTransform(348.4,-20.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,3.2).ss(2).p("AgqAAIBVAA");
	this.shape_193.setTransform(348.6,-40.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#ADB8BC").p("AgXAAIAvAA");
	this.shape_194.setTransform(348.4,-39.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.1).s().p("AAACWQgJAAgGgGQgGgGAAgIIAAkCQAAgJAGgGQAGgGAJAAIACAAQAIAAAGAGQAGAGAAAJIAAECQAAAIgGAGQgGAGgIAAg");
	this.shape_195.setTransform(348.4,-25.2);

	this.instance_62 = new lib.Tween40("synched",0);
	this.instance_62.setTransform(348.6,-25.4);
	this.instance_62._off = true;

	this.instance_63 = new lib.Tween41("synched",0);
	this.instance_63.setTransform(315.3,167.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]},43).to({state:[{t:this.instance_62}]},10).to({state:[{t:this.instance_63}]},12).to({state:[]},40).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(53).to({_off:false},0).to({_off:true,x:315.3,y:167.3},12).wait(87));

	// sp ep 2
	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#E55061").s().p("AgQBjIAAjFIAhAAIAADFg");
	this.shape_196.setTransform(337.3,-22.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#E55061").s().p("AgDBkQgFAAgEgFQgEgDAAgGIAAisQAAgEAEgFQAEgDAFAAIAHAAQAFAAAEADQAEAFAAAEIAACsQAAAGgEADQgEAFgFAAg");
	this.shape_197.setTransform(337.3,-20.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,3.2).ss(2).p("AgqAAIBVAA");
	this.shape_198.setTransform(337.5,-40.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#ADB8BC").p("AgXAAIAvAA");
	this.shape_199.setTransform(337.3,-39.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.1).s().p("AgBCWQgIAAgGgGQgGgGAAgIIAAkCQAAgJAGgGQAGgGAIAAIACAAQAJAAAGAGQAGAGAAAJIAAECQAAAIgGAGQgGAGgJAAg");
	this.shape_200.setTransform(337.3,-25.4);

	this.instance_64 = new lib.Tween38("synched",0);
	this.instance_64.setTransform(337.5,-25.6);
	this.instance_64._off = true;

	this.instance_65 = new lib.Tween39("synched",0);
	this.instance_65.setTransform(303.3,167.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},43).to({state:[{t:this.instance_64}]},9).to({state:[{t:this.instance_65}]},12).to({state:[]},41).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(52).to({_off:false},0).to({_off:true,x:303.3,y:167.2},12).wait(88));

	// sp ep 1
	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#54B3EC").s().p("AgPBjIAAjFIAfAAIAADFg");
	this.shape_201.setTransform(326.5,-22.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#54B3EC").s().p("AgCBkQgFAAgEgFQgEgDAAgGIAAisQAAgEAEgFQAEgDAFAAIAGAAQAEAAAFADQADAEAAAFIAACsQAAAGgDADQgFAFgEAAg");
	this.shape_202.setTransform(326.5,-20.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().rs(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,3.1).ss(2).p("AgoAAIBRAA");
	this.shape_203.setTransform(326.6,-40.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#ADB8BC").p("AgXAAIAuAA");
	this.shape_204.setTransform(326.5,-39.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,10.8).s().p("AAACWQgIAAgGgGQgGgGAAgIIAAkCQAAgJAGgGQAGgGAIAAIABAAQAIAAAGAGQAGAGAAAJIAAECQAAAIgGAGQgGAGgIAAg");
	this.shape_205.setTransform(326.5,-25.4);

	this.instance_66 = new lib.Tween36("synched",0);
	this.instance_66.setTransform(326.6,-25.6);
	this.instance_66._off = true;

	this.instance_67 = new lib.Tween37("synched",0);
	this.instance_67.setTransform(291.7,167.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201}]},43).to({state:[{t:this.instance_66}]},8).to({state:[{t:this.instance_67}]},12).to({state:[]},42).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(51).to({_off:false},0).to({_off:true,x:291.7,y:167.3},12).wait(89));

	// eprubeta 4
	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#F4E4FE","#C8BAD0"],[0,1],0.1,-6,0,10.8).s().p("AhPBCQgMgPgKgYQgTguAJguIDcAAIAGAlQAAAtggAxg");
	this.shape_206.setTransform(299.9,-15.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#ADB8BC").p("AgmAAIBNAA");
	this.shape_207.setTransform(299.7,-43.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,16.5).s().p("AhVDGQgaglgHgwQgPheBcgwIAAiJIgNgGIABgZIBoAAIAAAXIgPAKIgBCGIAWAOQAaARAQAYQAzBMhABhg");
	this.shape_208.setTransform(300,-27.7);

	this.instance_68 = new lib.Tween34("synched",0);
	this.instance_68.setTransform(300,-27.7);
	this.instance_68._off = true;

	this.instance_69 = new lib.Tween35("synched",0);
	this.instance_69.setTransform(268.6,163.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_208},{t:this.shape_207},{t:this.shape_206}]},43).to({state:[{t:this.instance_68}]},5).to({state:[{t:this.instance_69}]},12).to({state:[]},45).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(48).to({_off:false},0).to({_off:true,x:268.6,y:163.7},12).wait(92));

	// epubreta 3
	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#FEF7DC","#FBF4D9","#F0EAD1","#DFD9C3","#C6C2B0","#B4B0A1"],[0,0.263,0.482,0.686,0.886,1],0.2,-5,-0.1,7.6).s().p("AhXAoIAkhPIBpAAIAjBPg");
	this.shape_209.setTransform(276.1,-12.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#ADB8BC").p("AgaAAIA1AA");
	this.shape_210.setTransform(276.1,-34.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,12.3).s().p("AhjCNIBKicIABhtIgLAAIAAgQIBLAAIAAAQIgMABIABBtIBHCbg");
	this.shape_211.setTransform(276,-22);

	this.instance_70 = new lib.Tween32("synched",0);
	this.instance_70.setTransform(276,-22);
	this.instance_70._off = true;

	this.instance_71 = new lib.Tween33("synched",0);
	this.instance_71.setTransform(243.9,168.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209}]},43).to({state:[{t:this.instance_70}]},4).to({state:[{t:this.instance_71}]},12).to({state:[]},46).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(47).to({_off:false},0).to({_off:true,x:243.9,y:168.3},12).wait(93));

	// eprubeta2
	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#D9E2FE","#D6E0FE","#CCD8FE","#BACAFE","#A3B8FD"],[0,0.298,0.549,0.78,1],0.1,-6.1,-0.1,9.6).s().p("Ag4AmIgNgdQgMgdACgRICeAAIABASQgDAXgSAig");
	this.shape_212.setTransform(252.3,-11.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#ADB8BC").p("AgbAAIA2AA");
	this.shape_213.setTransform(252.1,-33.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,11.7).s().p("Ag8CNQgTgbgFghQgKhEBBghIAAhiIgJgEIAAgSIBKAAIAAARIgLAHIAABfIAQAKQASAMALARQAkA2gtBFg");
	this.shape_214.setTransform(252.3,-21.8);

	this.instance_72 = new lib.Tween30("synched",0);
	this.instance_72.setTransform(252.3,-21.8);
	this.instance_72._off = true;

	this.instance_73 = new lib.Tween31("synched",0);
	this.instance_73.setTransform(222,168.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},43).to({state:[{t:this.instance_72}]},3).to({state:[{t:this.instance_73}]},12).to({state:[]},47).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(46).to({_off:false},0).to({_off:true,x:222,y:168.3},12).wait(94));

	// eprubeta1
	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#FFD5C5","#FBD3C3","#F0CDBE","#DFC2B6","#C6B2AA","#C0AEA7"],[0,0.282,0.522,0.741,0.957,1],0,-8,0,8.2).s().p("AhtAyIAuhjICCAAIArBjg");
	this.shape_215.setTransform(228.5,-14.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#ADB8BC").p("AghAAIBDAA");
	this.shape_216.setTransform(228.9,-41.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.rf(["#F9FFFF","#E4FFFF"],[0,1],0,0,0,0,0,15.5).s().p("Ah9CzIBejGIAAiKIgNgBIAAgUIBeAAIAAAVIgOABIABCKIBZDFg");
	this.shape_217.setTransform(228.7,-26.1);

	this.instance_74 = new lib.Tween28("synched",0);
	this.instance_74.setTransform(228.7,-26.1);
	this.instance_74._off = true;

	this.instance_75 = new lib.Tween29("synched",0);
	this.instance_75.setTransform(197.4,164.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_215}]},43).to({state:[{t:this.instance_74}]},2).to({state:[{t:this.instance_75}]},12).to({state:[]},48).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(45).to({_off:false},0).to({_off:true,x:197.4,y:164.5},12).wait(95));

	// miccroscop dr
	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#414849").s().p("Al0sPQAag0A8gzQB5hlCmAFQCOAFB2CdQA8BOAfBNIK2RaMggrAIWgAhptNQgyAXgTA0QgTA1AXAyQAYAyA0AUQA0ATAxgYQAygXATg1QATg0gXgyQgYgzgygTQgXgIgXAAQgdAAgcANg");
	this.shape_218.setTransform(1048.8,113.4,0.082,0.082,0,0,180);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#414849").s().p("A25DNIgBgSQABijBihxQBjh0CMAAMAjQAAAQCMAABjB0QBjBxAACjIAAASg");
	this.shape_219.setTransform(1025.9,117,0.082,0.082,0,0,180);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#414849").s().p("AkyC1QgoAAgcgcQgdgcAAgoIAAkJIMnAAIAAEJQAAAogdAcQgcAcgoAAg");
	this.shape_220.setTransform(1059.3,125.2,0.082,0.082,0,0,180);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#414849").s().p("AkyC1QgoAAgcgcQgcgcAAgoIAAkKIMlAAIAAEKQAAAogcAcQgcAcgoAAg");
	this.shape_221.setTransform(1012.5,125.2,0.082,0.082,0,0,180);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#414849").s().p("EgzHAHLIgBgpQAAiyA8ikQA5icBoh5QBph6CHhDQCMhFCaAAMBOrAAAQCaAACMBFQCHBDBpB6QBoB5A6CcQA7CkAACyIgBApg");
	this.shape_222.setTransform(1035.9,120,0.082,0.082,0,0,180);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#D7CECD").s().p("AwkDvQhkAAhGhGQhGhHAAhiQAAhiBGhGQBGhGBkAAMAhJAAAQBkAABGBGQBGBGAABiQAABihGBHQhGBGhkAAg");
	this.shape_223.setTransform(1026.1,113.3,0.082,0.082,0,0,180);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFB").s().p("AgkDkQhfgQg4hNQg4hPAQhcQAPhfBOg3QBOg4BdAPQBfAQA3BOQA4BNgPBdQgPBehPA4Qg9AshHAAQgSAAgUgDg");
	this.shape_224.setTransform(1036.6,82.4,0.082,0.082,0,0,180);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#414849").s().p("AhwKxQiMgXh3hLQh0hJhQhuQipjsAvkcQAXiMBMh3QBIh0BwhQQDripEcAvQCMAYB3BLQBzBJBQBuQCpDsgvEbQgvEejrCqQi4CEjXAAQg5AAg/gLg");
	this.shape_225.setTransform(1036.6,82.4,0.082,0.082,0,0,180);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#D8E0E2").s().p("AtV3OIREjTMAJnAxwIxEDTg");
	this.shape_226.setTransform(1031.5,81.4,0.082,0.082,0,0,180);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#D8E0E2").s().p("EgYGAiZQgGhmABirQAElYAmlhQB8xpGusgQGvsgOdocQEhipExh7QCYg8BfgcIEuKfQg6gNhiAFQjFAJjMBYQqMEZnVO/QkDINgoIzQghHDBsHFQBNFECLElQBGCTA2BRg");
	this.shape_227.setTransform(1041.7,98.4,0.082,0.082,0,0,180);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AoFB3QgXgzgPg+IgMgzIRfjYIAJA1QAJBAgCA3QgGCvhuAVIsVCYQgNADgNAAQhcAAg+iPg");
	this.shape_228.setTransform(1028.5,97.8,0.082,0.082,0,0,180);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("ApGCQQgNgLgDgSQgEgSAIgPQAIgOAOgDIRojYQAOgCANAKQANALADARQAEASgIAPQgIAPgOADIxoDYIgGAAQgLAAgKgIg");
	this.shape_229.setTransform(1034.5,65.8,0.082,0.082,0,0,180);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("ArPCqQgPgKgDgSQgEgSALgPQAKgPASgEIVtkKQARgDAQAKQAPAKADASQAEASgLAPQgKAPgSADI1tELIgJABQgNAAgLgIg");
	this.shape_230.setTransform(1035.5,61,0.082,0.082,0,0,180);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#414849").s().p("Aq7iUIV3kOIgUJrIxpDag");
	this.shape_231.setTransform(1035.4,63.7,0.082,0.082,0,0,180);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#414849").s().p("AqBDeQgvgfgLg4QgLg4AgguQAgguA4gLIRqjaQA4gLAvAgQAuAfALA4QALA4ggAvQggAtg3ALIxqDaQgPADgNAAQgoAAgjgYg");
	this.shape_232.setTransform(1034.2,67.3,0.082,0.082,0,0,180);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#414849").s().p("AqBDeQgvgggLg3QgLg4AggvQAggtA3gLIRrjaQA3gLAvAgQAvAgALA3QALA4ggAvQggAtg4ALIxqDaQgOADgNAAQgoAAgjgYg");
	this.shape_233.setTransform(1028.8,95.5,0.082,0.082,0,0,180);

	this.instance_76 = new lib.Tween112("synched",0);
	this.instance_76.setTransform(1010.4,73.1);
	this.instance_76._off = true;

	this.instance_77 = new lib.Tween113("synched",0);
	this.instance_77.setTransform(621.3,340.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218}]},42).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},23).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(43).to({_off:false},0).to({_off:true,x:621.3,y:340.7},23).wait(86));

	// microscop st
	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#414849").s().p("Al0sPQAag0A8gzQB5hlCmAFQCOAFB2CdQA8BOAfBNIK2RaMggrAIWgAhptNQgyAXgTA0QgTA1AXAyQAYAyA0AUQA0ATAxgYQAygXATg1QATg0gXgyQgYgzgygTQgXgIgXAAQgdAAgcANg");
	this.shape_234.setTransform(-64.6,110.5,0.082,0.082);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#414849").s().p("A25DNIgBgSQABijBihxQBjh0CMAAMAjQAAAQCMAABjB0QBjBxAACjIAAASg");
	this.shape_235.setTransform(-41.7,114.1,0.082,0.082);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#414849").s().p("AkyC1QgoAAgcgcQgdgcAAgoIAAkJIMnAAIAAEJQAAAogdAcQgcAcgoAAg");
	this.shape_236.setTransform(-75,122.3,0.082,0.082);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#414849").s().p("AkyC1QgoAAgcgcQgcgcAAgoIAAkKIMlAAIAAEKQAAAogcAcQgcAcgoAAg");
	this.shape_237.setTransform(-28.3,122.3,0.082,0.082);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#414849").s().p("EgzHAHLIgBgpQAAiyA8ikQA5icBoh5QBph6CHhDQCMhFCaAAMBOrAAAQCaAACMBFQCHBDBpB6QBoB5A6CcQA7CkAACyIgBApg");
	this.shape_238.setTransform(-51.7,117.1,0.082,0.082);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#D7CECD").s().p("AwkDvQhkAAhGhGQhGhHAAhiQAAhiBGhGQBGhGBkAAMAhJAAAQBkAABGBGQBGBGAABiQAABihGBHQhGBGhkAAg");
	this.shape_239.setTransform(-41.8,110.4,0.082,0.082);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFB").s().p("AgkDkQhfgQg4hNQg4hPAQhcQAPhfBOg3QBOg4BdAPQBfAQA3BOQA4BNgPBdQgPBehPA4Qg9AshHAAQgSAAgUgDg");
	this.shape_240.setTransform(-52.4,79.5,0.082,0.082);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#414849").s().p("AhwKxQiMgXh3hLQh0hJhQhuQipjsAvkcQAXiMBMh3QBIh0BwhQQDripEcAvQCMAYB3BLQBzBJBQBuQCpDsgvEbQgvEejrCqQi4CEjXAAQg5AAg/gLg");
	this.shape_241.setTransform(-52.4,79.5,0.082,0.082);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#D8E0E2").s().p("AtV3OIREjTMAJnAxwIxEDTg");
	this.shape_242.setTransform(-47.2,78.5,0.082,0.082);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#D8E0E2").s().p("EgYGAiZQgGhmABirQAElYAmlhQB8xpGusgQGvsgOdocQEhipExh7QCYg8BfgcIEuKfQg6gNhiAFQjFAJjMBYQqMEZnVO/QkDINgoIzQghHDBsHFQBNFECLElQBGCTA2BRg");
	this.shape_243.setTransform(-57.4,95.5,0.082,0.082);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AoFB3QgXgzgPg+IgMgzIRfjYIAJA1QAJBAgCA3QgGCvhuAVIsVCYQgNADgNAAQhcAAg+iPg");
	this.shape_244.setTransform(-44.2,94.9,0.082,0.082);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("ApGCQQgNgLgDgSQgEgSAIgPQAIgOAOgDIRojYQAOgCANAKQANALADARQAEASgIAPQgIAPgOADIxoDYIgGAAQgLAAgKgIg");
	this.shape_245.setTransform(-50.2,62.9,0.082,0.082);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("ArPCqQgPgKgDgSQgEgSALgPQAKgPASgEIVtkKQARgDAQAKQAPAKADASQAEASgLAPQgKAPgSADI1tELIgJABQgNAAgLgIg");
	this.shape_246.setTransform(-51.3,58.1,0.082,0.082);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#414849").s().p("Aq7iUIV3kOIgUJrIxpDag");
	this.shape_247.setTransform(-51.1,60.8,0.082,0.082);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#414849").s().p("AqBDeQgvgfgLg4QgLg4AgguQAgguA4gLIRqjaQA4gLAvAgQAuAfALA4QALA4ggAvQggAtg3ALIxqDaQgPADgNAAQgoAAgjgYg");
	this.shape_248.setTransform(-50,64.4,0.082,0.082);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#414849").s().p("AqBDeQgvgggLg3QgLg4AggvQAggtA3gLIRrjaQA3gLAvAgQAvAgALA3QALA4ggAvQggAtg4ALIxqDaQgOADgNAAQgoAAgjgYg");
	this.shape_249.setTransform(-44.5,92.6,0.082,0.082);

	this.instance_78 = new lib.Tween110("synched",0);
	this.instance_78.setTransform(-52.9,62.1);
	this.instance_78._off = true;

	this.instance_79 = new lib.Tween111("synched",0);
	this.instance_79.setTransform(279.9,340.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234}]},42).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},23).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(43).to({_off:false},0).to({_off:true,x:279.9,y:340.8},23).wait(86));

	// Layer 1
	this.instance_80 = new lib.Tween116("synched",0);
	this.instance_80.setTransform(469,-93.3);
	this.instance_80._off = true;

	this.instance_81 = new lib.Tween115("synched",0);
	this.instance_81.setTransform(454.8,339.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_80}]},46).to({state:[{t:this.instance_81}]},26).to({state:[]},44).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(46).to({_off:false},0).to({_off:true,x:454.8,y:339.9},26).wait(80));

	// planta 2
	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#C87945").s().p("AhTCMQhZhagZg5QgdhGAEg8QAEg9AkgPQAkgPAvAnQAuAnAeBGQAOAhAJAKQAKgKAOghQAehGAugnQAvgnAkAPQAkAPAEA9QAEA8gdBGQgZA5hZBaQgtAtgnAhQgmghgtgtg");
	this.shape_250.setTransform(965,5.7,0.212,0.212);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFD8C0").s().p("AoGB3IghjtIRPAAIgiDtg");
	this.shape_251.setTransform(965,-5.7,0.212,0.212);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FEB483").s().p("AmFGuIhztbIPxAAIhzNbg");
	this.shape_252.setTransform(965,6,0.212,0.212);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#A0B050").s().p("ABiB2QAIgmgPgyQgPgwgegkQghgogkgHQgrgIgoAlQgLAKgNgIQgOgHANgMQAwgsA3AEQAvAEArAoQApAmAVA1QAVA6gKA0QgDAMgSACIgFAAQgNAAACgMg");
	this.shape_253.setTransform(962.5,-14.6,0.212,0.212);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#A0B050").s().p("AB7C9QADhFgFgkQgIg5gdglQglgxhIgvQgSgLhwg8QgKgGAPgIQAQgIAIAFQBzA+ATANQBOAyAlA1QAcAmAHA5QAEAigDBHQAAAJgSADIgIABQgKAAAAgIg");
	this.shape_254.setTransform(963,-22.2,0.212,0.212);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#A0B050").s().p("AiwClQAZhdBthdQAlggA6gsIBdhDQAGgFAQAAQAQgBgKAIIhbBCQg7AqghAfQhrBagZBcQgCAIgRACIgJABQgJAAACgFg");
	this.shape_255.setTransform(968.4,-15.8,0.212,0.212);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#A0B050").s().p("AjYBPQgQgDALgKQBLhDCBglQBYgZCMgPQASgCgDALQgEAMgPACQiDAOhOAWQh6AfhDA+QgGAGgLAAIgIgBg");
	this.shape_256.setTransform(969.5,-14.4,0.212,0.212);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#A0B050").s().p("AhbHpQAKgrAqipQAgiCANhTQAtj9gdkgQgCgUAdgJQAegJACAXQAdEcgsD8QgPBXghCGIgzDcQgFAUgdAEIgHAAQgVAAAEgUg");
	this.shape_257.setTransform(964.7,-15.8,0.212,0.212);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#7DA422").s().p("ABWEKQASg2gMgbQgPgghDghQhDgjgng8Qgng6gEhOQgNhiABgdQAAgsAyAdQBhA4AvAsQBYBPAOBXQAOBYgMA5QgGAagXAvQgMAYgMAIQgEADgDAAIgBAAg");
	this.shape_258.setTransform(963,-28.2,0.212,0.212);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#5B7B1B").s().p("AAsCVQhZgRg6hAQgeghhGhzQgagsgEgPQgDgQASAAQAKAAArAJQAyAKAlAEQBpAMAyAmQA5ArBkCdQgNAOgfALQgjANgrAAQggAAgkgHg");
	this.shape_259.setTransform(958.6,-32.2,0.212,0.212);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#9FC068").s().p("ABeCCQgUgcgSgWQgkgrg0gVQhFgZgTgUQgWgXAZgfQA2hGBTAcQBTAcATBUQARBIgOAtQgJAegNAAQgEAAgFgEg");
	this.shape_260.setTransform(969,-21.9,0.212,0.212);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#4D751F").s().p("AiUB5QgPgCgOgKIgKgIQgDhlA2g6QAyg3BYgHQBHgGBBAzQAgAZATAbQgtgBg2ALQhoAUgrA9QgmA2gpAAIgMgBg");
	this.shape_261.setTransform(970,-24.4,0.212,0.212);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#789E3C").s().p("AiPB9QhsgwhBgwIgsgmQB6iFB3gWQBvgTBzBMQBRA0A+BMQAyA9AeAHQAyAMggAYQggAYg+ADQhhAOhEACIgWABQhvAAhjgsg");
	this.shape_262.setTransform(976.8,-24.1,0.212,0.212);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#7EA11A").s().p("AhhB1IgsgHQAIhQAwgvQAtgvBZgcQBUgbAGACQAFACgCAMIgGAhQgGAsgmAvQgoAyg0AaQgmAVgwAAIgLgBg");
	this.shape_263.setTransform(970.4,-18.3,0.212,0.212);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#779222").s().p("AiABnQgUg3AFhAQAFhRBWghQBWghBTA1IAJALQALANAEAPQAPAuguAmQguAohZAxQguAZglARQgLgOgJgbg");
	this.shape_264.setTransform(960,-15.2,0.212,0.212);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#779222").s().p("AjaBqIgvgaQA5ghA0gqQAygpAXgSQBJg5BygEQBhgDA7gNQAJABgFANIgUA0QgcBThFA0QhQA8hyABIgIABQhiAAhBgag");
	this.shape_265.setTransform(974.6,-16.8,0.212,0.212);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#6B8B1A").s().p("AkoB2QBLiYA9hYQBVh8CpgHQBSgECUAiQA/AOgyBoQgdA7hSB4QgoBCjUAwQj4AshUAXQAZg8AlhNg");
	this.shape_266.setTransform(971.8,-28.2,0.212,0.212);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#506E13").s().p("AgpDxQhvgDhJiwQg0h5gMiBQgFhBByARQBBAJCLAnQBNASBCBlQAnA8BUCRQgoAcg+AaQh1AzhkAAIgMAAg");
	this.shape_267.setTransform(955.8,-20.2,0.212,0.212);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#698E22").s().p("AFNCTQgygch5AUQh/AUhrgqQhtgrhQhhQgagig1g3QgugygNgTQgWgeAKgQQALgRA2gFQC4gRBqALQDAAUBnBoQBnBpAmBVQASApAOBUQAHAsgHAVQgEAKgFACQgbhZgrgZg");
	this.shape_268.setTransform(957.3,-25.4,0.212,0.212);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#21400A").s().p("AAyDSQiWggh2huQhfhXgnhjIgbhBQgKgaAJgKQAQgTCjATQCpATB/BMQBwBDCQCUQApArgIAhQgIAegwAQQgxAQhBAAQhIAAhcgTg");
	this.shape_269.setTransform(957,-28.5,0.212,0.212);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#3B5506").s().p("AjRCwQgegKAFgSQACgyAMgwQAXhcBMhEQBLhFCAgDQBDgCBKALQAXAAgTAuQgNAfgyBkQgoBZhJAqQhLAtiFADIgGAAQgYAAgWgHg");
	this.shape_270.setTransform(970,-30.9,0.212,0.212);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#476810").s().p("ABLGOQhCgfg3gsQhuhUgwiLQgwiKBGisQAVg0Akg/IAlhCQAMgfAyA0QAgAjBqB8QBfBoAOB2QAQCBhICxQgPAlgZAbQgUAWgPAAQgIAAgHgFg");
	this.shape_271.setTransform(962.5,-36.1,0.212,0.212);

	this.instance_82 = new lib.Tween106("synched",0);
	this.instance_82.setTransform(993.3,-32.1);
	this.instance_82._off = true;

	this.instance_83 = new lib.Tween107("synched",0);
	this.instance_83.setTransform(571.4,347.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250}]},32).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},23).to({state:[]},86).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(33).to({_off:false},0).to({_off:true,x:571.4,y:347.3},23).wait(96));

	// planta 1
	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#B45F56").s().p("Ai+A2QgWAAgQgPQgPgQAAgWIAAgBQAAgWAPgQQAQgQAWAAIF9AAQAWAAAQAQQAPAQAAAWIAAABQAAAWgPAQQgQAPgWAAg");
	this.shape_272.setTransform(-34.5,-20.1,0.208,0.208);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#34100B").s().p("AjIEZQAAgPAOAAIA6ABQAjgBAXgHQApgLAZgwQANgbAUg0QAghUAph1IBGjMQAEgNAOAEQAOAEgEANIhZEAIgkBlQgVA7gTAqQgOAfgLASQgOAZgVAOQgdAUgxAEQgLABhIAAQgOAAAAgOg");
	this.shape_273.setTransform(-27,-26,0.208,0.208);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#34100B").s().p("ABeElQg2gHgdgcQgZgagXgzQgFgLgbhMQgbhKhnkoQgEgNAOgEQANgEAFANIBFDMQAqB3AgBSQASAxAOAeQAZAwApALQAYAHAiABIA7gBQAOAAAAAPQAAAOgOAAQhLAAgSgCg");
	this.shape_274.setTransform(-41.8,-26,0.208,0.208);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#BB3924").s().p("AosANQgFAAgEgEQgEgEAAgFIAAAAQAAgEAEgEQAEgEAFAAIRZAAQAFAAAEAEQAEAEAAAEIAAAAQAAAFgEAEQgEAEgFAAg");
	this.shape_275.setTransform(-34.4,-33.6,0.208,0.208);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#811704").s().p("AmJF/Ihmr9IPeAAIhlL9g");
	this.shape_276.setTransform(-34.4,-18.2,0.208,0.208);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#811704").s().p("An0CWIgokrIQ5AAIgoErg");
	this.shape_277.setTransform(-34.4,-30.2,0.208,0.208);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#BB3924").s().p("AnvAVIgFgpIPpAAIgGApg");
	this.shape_278.setTransform(-34.4,-26.7,0.208,0.208);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#886352").s().p("AESCfQhLgFhGgsQhAgogwhBQg5hOg9gkQhJgshYALQgHABgJgHQgKgHAKgBQBKgJBCAWQBCAXA1A1QASARASAaIAiArQApA0A4AiQA7AkA/AEQAKABADAHQADAGgJAAIgDAAg");
	this.shape_279.setTransform(-41.6,-46.3,0.208,0.208);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#7EB913").s().p("AgIBCQACgOAAgGQgBgHgKgNQgggrAfghQASgTAJgBQAKAAAHAQQAVApgfAdQgQAQgCAVQgCALABAHg");
	this.shape_280.setTransform(-36.7,-44.7,0.208,0.208);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#7EB913").s().p("AgMBgQADgVgBgIQgBgLgOgTQgTgbgDgXQgEghAYgaQAagcANgBQAPAAALAXQAcA8grAqQgXAWgDAfQgDAPABAKg");
	this.shape_281.setTransform(-43.4,-50.8,0.208,0.208);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#528D10").s().p("AAzBZQgKgTgFgFQgHgJgXgHQgdgKgRgSQgXgWAEgkQAFgmALgJQALgKAXANQA5AfgKA7QgEAgANAbQAHAOAHAIg");
	this.shape_282.setTransform(-47.3,-51.4,0.208,0.208);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#528D10").s().p("AgbAzQghgGgSgeQgTgfADgPQADgOAZgEQBCgLAcA3QAQAaAbANQAOAHAKACIgIAFQgTgJgIgBQgKgCgXAIQgWAIgSAAIgOgBg");
	this.shape_283.setTransform(-48.9,-50.4,0.208,0.208);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#7EB913").s().p("AgMBfQADgUgBgIQgBgLgOgTQgTgbgDgXQgEghAYgaQAagcANgBQAPgBALAXQAcA9grAqQgXAWgDAfQgDAPABAKg");
	this.shape_284.setTransform(-38.8,-46.3,0.208,0.208);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#7EB913").s().p("AhmA3QACgMAWg4QAPgnAbgPQAYgOAlADQAhADAbAHQAZAHgIABQgjAEgOASQgHAJgGAcQgDAQgqAdQgrAdggAGIgIAAQgTAAAFgYg");
	this.shape_285.setTransform(-45.4,-47.3,0.208,0.208);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#4D7308").s().p("AgEBwQgFgGgCgRQgCgMgMgLQgOgMgHgWQgNggABgUQADgbAagnQAcgoAZATQAZASAIA1QAKA+g+AkQgIAGgBAIQgBAIAFAaQAAABAAABQAAABAAAAQAAABAAAAQAAAAAAAAIgEgCg");
	this.shape_286.setTransform(-40.9,-48.5,0.208,0.208);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#4D7308").s().p("AgrA3QgWgGAJggQAIgdAOgNQAJgKAYgIQAMgFANACQAKABAHgEQAKgGAGAAQAGAAgFACQgQAJgEAEQgEAEACAIQACATgCAKQgGAagYAOQgXAPgRAAIgJgBg");
	this.shape_287.setTransform(-47.9,-48.4,0.208,0.208);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#4D7308").s().p("AhjAsQgZgWAhgiQAggjAagJQASgGAjAFQAWACAQALQANAJAMgBQARgBAHADQAHAEgIABQgaABgHACQgIADgEAMQgWBCg+AFIgQAAQgoAAgUgQg");
	this.shape_288.setTransform(-43.2,-45.4,0.208,0.208);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#4D7308").s().p("AAEBsQgFgIgGgRQgFgNgJgMQgNgRgKgTQgPgaANgdQAKgYAigfQAcgbAMAFQALAFAEAnQADAigSAhQgPAagUARQgMALADAOIAPAnQAAABAAABQAAABABAAQAAABgBAAQAAAAAAAAIgFgEg");
	this.shape_289.setTransform(-45.2,-51.7,0.208,0.208);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#4D7308").s().p("AhZBCQgKgJAKgnQANgqAQgUQAUgZAgABQATABAWADQAOADAOgCQASgDALAEQAKADgIAAQghABgKACQgNAEgEARQgGAagRAXQgUAhggAMQgYAKgMAAQgHAAgDgDg");
	this.shape_290.setTransform(-40.8,-42.9,0.208,0.208);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#4D7308").s().p("AgjApQgdg3AfgZQAQgNARgCIAdgDQAQgDAEABQADABgFACQgaAHgDACQgGAEADALQAFAQgDARQgEAZgQAQQgUASgBAAQgBAAgKgTg");
	this.shape_291.setTransform(-38,-42.1,0.208,0.208);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#886352").s().p("AibD4QgDgIAFgDQAngaAegrQAcgnAQgxQAIgYAGgoQAHgxADgNQAQhJAng0QArg2BDgbQAFgCADAIQACAJgGACQiLA3gYCwQgIAvgEASQgHAkgNAbQgnBWhBAqIgDABQgDAAgDgFg");
	this.shape_292.setTransform(-32.2,-40.2,0.208,0.208);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#7EB913").s().p("AAfApQgNgPgSgGQgmgLgCgpQgBgRAIgEQAJgEAXAIQAlANgFAwQgCAPADAHQACAEAIALIgCAGQgDgGgGgIg");
	this.shape_293.setTransform(-35.6,-36.7,0.208,0.208);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#7EB913").s().p("AAsA7QgSgWgagIQg4gQgDg8QgBgXAMgGQAMgGAiALQAdAKAMAcQAIAWgDAcQgDAWAEAJQADAHAMAPIgDAJQgEgJgJgLg");
	this.shape_294.setTransform(-32.9,-44.6,0.208,0.208);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#528D10").s().p("AgGBHQgCgcgSgYQgjgsAigzQANgUAMACQAMADAVAcQATAbgIAeQgFAVgVAWQgPAQgBAKQgBAHABATIgIAGQADgKgBgOg");
	this.shape_295.setTransform(-29.9,-46.7,0.208,0.208);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#528D10").s().p("Ag/BLIAQgRQAPgYAAgdQAAg4A4gVQAWgHAJAJQAKALgBAjQgCA5hGAMQgVAEgIAGIgRAVg");
	this.shape_296.setTransform(-28,-46.7,0.208,0.208);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#7EB913").s().p("AAtA7QgSgWgbgIQg3gQgEg7QgBgYAMgGQANgGAhALQAeAKALAdQAJAWgEAcQgCAVAEAKQADAGALAQIgDAIQgDgJgJgLg");
	this.shape_297.setTransform(-34.6,-38.9,0.208,0.208);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#7EB913").s().p("AAYA0QgvgEgLgNQgRgUgKgEQgTgJgfANQgHADASgRQATgRAZgQQAegUAaAAQAaAAAdAZQAuAkAGAIQARAVgYAIQgVAHgfAAIgYgBg");
	this.shape_298.setTransform(-29.6,-43,0.208,0.208);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#4D7308").s().p("AA7BZQgHgYgEgGQgFgGgLAAQhAgCgVg2QgRgtAMgbQAOgcAoAUQAlAUAOAVQAKAPAFAgQAEAUgGARQgFANAEALQAGAPgBAHQgBABAAABQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_299.setTransform(-34,-41.6,0.208,0.208);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#4D7308").s().p("AAQAlQgmgBgQgoQgCgIgFgBQgFgCgRAAQgFAAAFgCQAEgDALABQAIAAAIgGQAJgHAOgCQAVgEAMADQAQAFAVAVQAWAUgPAOQgNAMgeAAIgFAAg");
	this.shape_300.setTransform(-28.1,-44.7,0.208,0.208);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#4D7308").s().p("Ag1AZQgIgIgIACQgHABgWALQgHADAFgHQAEgGAOgGQAKgFAHgLQAIgQAQgMQAcgUAPgDQAZgFAqAOQArAOgLAdQgKAZgsAUQgUAJgSAAQggAAgegdg");
	this.shape_301.setTransform(-30.5,-40.3,0.208,0.208);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#4D7308").s().p("AA8BTQgCgfgDgIQgEgNgQgDQgYgEgVgPQgfgSgNgdQgOgiAHgJQAHgJAkAJQAnAKAUAPQAXARABAeQAAASgDATQgCAOACANQADAQgCAKIgDAGIAAgEg");
	this.shape_302.setTransform(-32.1,-46,0.208,0.208);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#4D7308").s().p("AAAAkQgYgNgQgSQgLgKgNADIgkAOQgHAEAIgIQAHgHAPgEQANgEAKgJQAQgNARgKQAXgPAbALQAXAJAdAeQAbAZgFALQgEALgkAFIgMAAQgaAAgZgMg");
	this.shape_303.setTransform(-31.3,-37.5,0.208,0.208);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#4D7308").s().p("AAgAmQgWgFgNgTQgLgOgDgNQgCgKgGAAQgEgBgZAGQgFACADgDQACgDAPgEQALgEAPgIQANgGATADQAkAHACA5QABATgBABIAAAAIgZgFg");
	this.shape_304.setTransform(-33.4,-35.2,0.208,0.208);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#886352").s().p("AguHGQg4jjAYjsQAaj/Bti8QAFgIAOAAQAOAAgFAKQhtC6gZD9QgXDpA3DhQADAIgPAEIgHACQgIAAgCgHg");
	this.shape_305.setTransform(-34.4,-42.5,0.208,0.208);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#886352").s().p("AkaCZQADgHAKgBQA+gFA8gjQA4giAog0IAjgsQASgaARgRQA1g0BCgXQBCgWBLAJQAKABgKAHQgJAHgHgBQhYgLhKAsQg8Akg6BOQgvBBhAAoQhGArhLAGIgDABQgJAAADgHg");
	this.shape_306.setTransform(-27.4,-54.9,0.208,0.208);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#7EB913").s().p("AADA1QgDgVgPgPQgegdAUgqQAIgQAJAAQAJABASAUQAfAgggArQgKANgBAIQAAAFACAPIgFAEQABgHgCgLg");
	this.shape_307.setTransform(-32.3,-53.3,0.208,0.208);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#7EB913").s().p("AAFBMQgFgegWgWQgrgqAdg9QALgXAOABQANABAaAcQArAvgtA+QgOATgBALQgBAHADAVIgHAHQABgLgCgPg");
	this.shape_308.setTransform(-25.6,-59.4,0.208,0.208);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#528D10").s().p("AguBEQANgbgEggQgKg7A5ggQAXgMALAJQAMAKAEAmQAEAjgWAWQgSATgdAKQgXAHgHAIIgPAZIgKABQAHgIAHgOg");
	this.shape_309.setTransform(-21.8,-60,0.208,0.208);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#528D10").s().p("AgaAsQgXgIgKACIgbAKIgJgFIAZgIQAbgOAPgaQAcg3BCALQAZAFAEANQADAPgTAfQgTAeggAGIgOABQgSAAgWgIg");
	this.shape_310.setTransform(-20.1,-59,0.208,0.208);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#7EB913").s().p("AAFBNQgFgegWgXQgsgqAeg8QALgXAOAAQANABAaAcQArAvgtA+QgOATgBALQgBAIADAVIgHAGQABgKgCgPg");
	this.shape_311.setTransform(-30.2,-54.9,0.208,0.208);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#7EB913").s().p("ABRBPQgggGgrgdQgqgdgDgQQgGgcgHgJQgNgSgkgFQgIgBAZgGQAcgHAggDQAlgDAYAOQAbAPAPAmQAWA5ACAMQAFAYgTAAIgIAAg");
	this.shape_312.setTransform(-23.6,-55.8,0.208,0.208);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#4D7308").s().p("AAABuQAGgagBgIQgBgIgJgGQgXgOgMgPQgXgeAHgoQAIg0AZgSQAZgUAbApQAbAnACAbQACATgNAhQgIAVgOANQgLAKgCAMQgCARgGAGIgDADQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_313.setTransform(-28.1,-57.1,0.208,0.208);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#4D7308").s().p("AgFApQgkgWAGgvQACgHgEgFQgEgDgQgJQgFgDAGAAQAGAAAKAGQAHAEALgBQAMgCAMAFQAYAJAJAJQAOANAJAdQAJAggXAGIgJABQgRAAgXgPg");
	this.shape_314.setTransform(-21.1,-56.9,0.208,0.208);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#4D7308").s().p("AAYA7QgogDgXgdQgMgPgJgYQgDgLgIgDQgHgDgbgBQgJAAAIgEQAIgEAQACQANABANgJQAPgLAWgCQAjgFASAGQAaAIAgAjQAhAigZAWQgUARgoAAIgQgBg");
	this.shape_315.setTransform(-25.8,-54,0.208,0.208);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#4D7308").s().p("AgHBsQAMgeACgJQADgOgMgLQgUgRgOgbQgTghADgiQAEgnALgFQAMgFAcAcQAiAfAKAYQANAdgPAaQgKASgNARQgJAMgFAOQgGARgFAIIgFAEQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBABgBg");
	this.shape_316.setTransform(-23.8,-60.3,0.208,0.208);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#4D7308").s().p("AAsA7QgggMgUghQgRgXgGgZQgEgSgNgDIgrgEQgIAAALgDQAKgDASACQAOACAPgDQAUgDAUgBQAgAAAUAYQAQAVANAqQALAngKAIQgEADgGAAQgMAAgZgKg");
	this.shape_317.setTransform(-28.2,-51.5,0.208,0.208);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#4D7308").s().p("AAEAqQgQgQgEgZQgDgRAFgQQADgLgFgEQgDgCgbgHQgGgCAEgBQAEgBAQADQANADAQAAQARACAQANQAgAageA2QgJATgCAAIgVgSg");
	this.shape_318.setTransform(-31.1,-50.7,0.208,0.208);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#886352").s().p("AgRHEQgMgBAFgIQAfg6ALhKQAKhDgIhJQgFgpgQg3QgWg9gKgeQgmh3AQhqQARhyBLhbQAGgGALACQAMACgIAJQiYC1BkEWQAqBwABBmQABB2gyBdQgEAHgLAAIgCAAg");
	this.shape_319.setTransform(-32.8,-61,0.208,0.208);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#7EB913").s().p("ABlBAQgpgRgtAKQhVARgxhPQgTggAMgQQANgSA2gJQAygJAiAfQAbAYARAqQAMAfANAKQAIAHAcAMIACAPQgLgKgUgJg");
	this.shape_320.setTransform(-36.5,-66.9,0.208,0.208);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#528D10").s().p("AA5BjQgWgmgogTQhQgkAIheQADgkAUgGQAUgHAvAYQAuAXALAuQAIAjgMAsQgJAhAEAPQADAKAPAbIgHANQgDgPgMgTg");
	this.shape_321.setTransform(-34.4,-71.5,0.208,0.208);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#528D10").s().p("AgjBtQAFgsgWgoQgqhNBBhGQAZgbARAHQAUAIAYAxQAXAtgTAqQgPAhgmAcQgZAVgFAOQgFAKgEAeIgNAGQAGgNADgWg");
	this.shape_322.setTransform(-31.2,-72.9,0.208,0.208);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#7EB913").s().p("AibBBQANgmAXgnQAbgxAjgTQAngUA4ANQBYATAPAGQAnARgcAcQggAghEAdQhCAegagKQgkgPgRABQghACghAoIgDABQgDAAAKgcg");
	this.shape_323.setTransform(-30.5,-66.6,0.208,0.208);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#4D7308").s().p("ACJBdQgbgbgKgEQgKgGgQAIQhaAthEg+Qg4gwgCgtQgDgwBGgBQBEgBAgASQAZAOAfAqQATAYAEAaQAEAWANAMQASAQAEALQABAHgCAAQgBAAgEgDg");
	this.shape_324.setTransform(-35.7,-62,0.208,0.208);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#4D7308").s().p("Ag4AcQgJgIgIABQgHABgXAMQgHAEAEgHQAEgHAPgHQALgFAHgMQAIgQARgNQAdgWAQgEQAagFAsANQAuAOgLAfQgKAbguAWQgVAKgUAAQghAAgggdg");
	this.shape_325.setTransform(-30.1,-70.4,0.208,0.208);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#4D7308").s().p("AiABtQACgMAPgTQAKgOAAgWQgBgbAOgbQAXgvAWgSQAfgYBAgLQBFgMAHAwQAGArguA6Qg5BKhggcQgQgFgKAHQgJAHgWAfQgDAEgBAAQgCAAAAgGg");
	this.shape_326.setTransform(-30,-62.4,0.208,0.208);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#4D7308").s().p("ACNBYQgZgogJgKQgOgPgZAIQgjALgqgDQg4gFgngfQgrghADgRQADgTA4gOQA/gQAkAGQAsAIAWAnQAOAbALAbQAHAUANAQQAPAVAEAPQACAJgBAAQgBAAgDgEg");
	this.shape_327.setTransform(-36.4,-69.4,0.208,0.208);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#886352").s().p("AFuDvQgng9hDgvQg9gqhLgZQglgNg9gIQhOgMgUgEQhxgZhQg9QhUhCgphoQgEgJANgEQANgDAEAJQBVDXERAnQBGALAeAHQA3AMArATQCGA9BABkQAFAIgMAGQgEACgEAAQgGAAgDgFg");
	this.shape_328.setTransform(-41,-56.7,0.208,0.208);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#7EB913").s().p("AhSA1QgGgOALgkQALgfAfgNQAXgJAfAEQAXACAKgEQAHgDARgNIAJADQgKAEgLAKQgYAUgJAcQgRA7hAAEIgGABQgUAAgGgMg");
	this.shape_329.setTransform(-35.7,-51.5,0.208,0.208);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#7EB913").s().p("Ah2BNQgKgUARg0QAQguAsgSQAigNAtAFQAhAEAOgGQAKgFAYgSIAOAFQgOAFgRAOQgiAcgMAqQgZBWheAFIgIAAQgdAAgIgQg");
	this.shape_330.setTransform(-47.9,-55.5,0.208,0.208);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#528D10").s().p("Ah3AsQgegTADgVQAEgTAtggQApgeAuAMQAhAJAiAgQAZAXAPACQALACAegBIAJAMQgPgEgWABQgsADgkAcQgiAbgmAAQglAAgogZg");
	this.shape_331.setTransform(-51.2,-60.2,0.208,0.208);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#528D10").s().p("ABaBLQglgZgtABQhXAAgghYQgNgiAPgOQARgPA2ACQAxABAdAlQAXAdAIAtQAFAhAKAMQAHAIAZASIgBAOQgJgMgSgMg");
	this.shape_332.setTransform(-51.2,-63.1,0.208,0.208);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#7EB913").s().p("Ah2BNQgKgUARg0QAQguAsgSQAigOAsAGQAiAEAOgGQAKgFAYgSIAOAEQgPAGgQAOQgiAcgNAqQgYBVheAGIgIAAQgdAAgIgQg");
	this.shape_333.setTransform(-39.1,-52.9,0.208,0.208);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#7EB913").s().p("AACCdQgbgdgZgnQgfgvAAgoQAAgqAmgtQA5hGAMgJQAhgcAMAmQAPAtgGBJQgFBJgVASQgeAagHAPQgNAdATAwQABABAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgDAAgSgUg");
	this.shape_334.setTransform(-45.5,-60.8,0.208,0.208);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#4D7308").s().p("Ah0BbQgsgUAfg/QAfg6AhgWQAXgQAygIQAfgFAaAJQAVAHAQgGQAXgJALADQAMACgLAEQgkAMgJAGQgJAHgBARQgCBlhVAfQgqAQgeAAQgWAAgRgIg");
	this.shape_335.setTransform(-43.3,-53.9,0.208,0.208);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#4D7308").s().p("AgcBqQgEgHABgRQABgMgJgMQgMgPgDgVQgGgiAFgSQAHgZAhghQAggiAWAYQAVAWgCA0QgCA8hAAYQgLAEgCAIQgDAHAAAaQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAIgDgDg");
	this.shape_336.setTransform(-48.1,-63,0.208,0.208);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#4D7308").s().p("AArCdQgKgGgKgWQgHgQgSgKQgYgMgTgaQgfgrgFgZQgIgmAVhBQAWhCAtARQAoAPAgBEQAmBShGBLQgMAMACAMQABAKASAiQADAHgCAAIgGgDg");
	this.shape_337.setTransform(-41.3,-59.3,0.208,0.208);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#4D7308").s().p("Ah9BhQgPgLAOg5QAPg9AXgeQAbglAtAAQAdAAAeAEQAVADAUgEQAagEAPAEQAQAEgNABQgvADgNAEQgUAFgEAZQgGAlgYAjQgdAvgtAUQgjAPgRAAQgJAAgEgDg");
	this.shape_338.setTransform(-50,-56.9,0.208,0.208);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#4D7308").s().p("AANCcQgLgLgHgYQgIgTgNgRQgTgXgQgbQgXglARgqQAOgjAuguQAngpASAHQARAGAHA4QAGAxgZAwQgTAogcAYQgRARAFATIAXA4QADAFgCAAQgBAAgGgFg");
	this.shape_339.setTransform(-36.9,-58,0.208,0.208);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#4D7308").s().p("AgeBZQgFgEgGgXIgTgpQgJgVAFgcQALg5BYgDQAfgBABABQABACgJAmQgHAhgdAVQgWARgVAFQgRADAAAKQAAAFAJAnQABAFgBAAIgCgBg");
	this.shape_340.setTransform(-33.4,-54.7,0.208,0.208);

	this.instance_84 = new lib.Tween104("synched",0);
	this.instance_84.setTransform(-36.1,-43.1);
	this.instance_84._off = true;

	this.instance_85 = new lib.Tween105("synched",0);
	this.instance_85.setTransform(335.6,343.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272}]},32).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},23).to({state:[]},86).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(33).to({_off:false},0).to({_off:true,x:335.6,y:343.2},23).wait(96));

	// Layer 2
	this.instance_86 = new lib.Path_0();
	this.instance_86.setTransform(1023.4,250.2,0.162,0.162,0,0,0,262.4,154.2);
	this.instance_86.alpha = 0.102;

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("Ag4AJQgHAAAAgEIAAgFQgBgBADgEQACgDADAAIBwAAQADAAADADQACAEAAABIAAAFQAAAEgIAAg");
	this.shape_341.setTransform(1050.6,272.7,0.162,0.162);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("Egh+AVoQgyAAgigiQgkgkABgyMAAAgngQgBgyAkgiQAigjAyAAMBD8AAAQAyAAAkAjQAiAiABAyMAAAAngQgBAygiAkQgkAigyAAg");
	this.shape_342.setTransform(1018,249.5,0.162,0.162);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#CBCBCB").s().p("EgjnAXcQgygBgigiQgjgkAAgyMAAAgrFQAAgyAjgkQAigiAygBMBHPAAAQAxABAjAiQAkAkAAAyMAAAArFQAAAygkAkQgjAigxABg");
	this.shape_343.setTransform(1018.1,249.6,0.162,0.162);

	this.instance_87 = new lib.Path();
	this.instance_87.setTransform(1024.1,273.9,0.162,0.162,0,0,0,85.3,66.2);
	this.instance_87.alpha = 0.5;

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#CBCBCB").s().p("AoMLKIA72UIOiAAIA8WUg");
	this.shape_344.setTransform(1018.2,276,0.162,0.162);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#CBCBCB").s().p("AoWLKIA92UIOzAAIA8WUg");
	this.shape_345.setTransform(1018,276,0.162,0.162);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#4C4C4C").s().p("An8BVQjTgkABgxQgBgxDTgiQDTgkEpABQEqgBDSAkQDUAjAAAwQAAAxjUAkQjSAikqABQkogBjUgig");
	this.shape_346.setTransform(1018.1,287.4,0.162,0.162);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#CBCBCB").s().p("AocBNQi0gkAAgpQAAgwDUgkQDTgjEpAAQErAADTAjQDTAkAAAwQAAAxjTAkQjUAikqABQlKAAjSgrg");
	this.shape_347.setTransform(1018.1,287.7,0.162,0.162);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#4C4C4C").s().p("An8BUQjTgjABgxQgBgwDTgkQDTgiEpgBQEqABDSAiQDUAkAAAwQAAAxjUAjQjSAkkqgBQkoABjUgkg");
	this.shape_348.setTransform(1018.1,288,0.162,0.162);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#4C4C4C").s().p("AgMAJIgHgLIAIgSIAagGIAEAPQADASgGAUQgRgFgLgNg");
	this.shape_349.setTransform(1029.5,287.7,0.162,0.162);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#4C4C4C").s().p("AgSgLIAEgPIAaAGIAIASQgBAEgGAHQgLANgSAFQgFgUADgSg");
	this.shape_350.setTransform(1026.6,287.8,0.162,0.162);

	this.instance_88 = new lib.Tween108("synched",0);
	this.instance_88.setTransform(1024.4,252.8);
	this.instance_88._off = true;

	this.instance_89 = new lib.Tween109("synched",0);
	this.instance_89.setTransform(822.7,353.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.instance_87},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.instance_86}]},41).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},12).to({state:[]},80).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(42).to({_off:false},0).to({_off:true,x:822.7,y:353.2},12).wait(98));

	// bec1
	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape_351.setTransform(-61.6,-226.3,0.863,0.873);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape_352.setTransform(-118.8,-226.3,0.863,0.873);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#6F7278").s().p("AltAXIAAgtILbAAIAAAtg");
	this.shape_353.setTransform(-90.7,-221.1,0.863,0.873);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#F9C947").s().p("AkrAcQgMAAgJgIQgJgJABgLQgBgLAJgIQAJgIAMAAIJYAAQAMAAAIAIQAJAIAAALQAAALgJAJQgIAIgMAAg");
	this.shape_354.setTransform(-90.7,-217.3,0.863,0.873);

	this.instance_90 = new lib.Tween22("synched",0);
	this.instance_90.setTransform(-90.7,-222.2);
	this.instance_90._off = true;

	this.instance_91 = new lib.Tween23("synched",0);
	this.instance_91.setTransform(274.7,99.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351}]}).to({state:[{t:this.instance_90}]},17).to({state:[{t:this.instance_91}]},30).to({state:[]},55).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(17).to({_off:false},0).to({_off:true,x:274.7,y:99.3},30).wait(105));

	// bec 2
	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape_355.setTransform(526.1,-241.2,0.863,0.873);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape_356.setTransform(469,-241.2,0.863,0.873);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#6F7278").s().p("AltAXIAAgtILbAAIAAAtg");
	this.shape_357.setTransform(497,-235.9,0.863,0.873);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#F9C947").s().p("AksAcQgMAAgIgIQgIgJgBgLQABgLAIgIQAIgIAMAAIJYAAQAMAAAJAIQAIAIAAALQAAALgIAJQgJAIgMAAg");
	this.shape_358.setTransform(497,-232.1,0.863,0.873);

	this.instance_92 = new lib.Tween24("synched",0);
	this.instance_92.setTransform(446.2,-222.2);
	this.instance_92._off = true;

	this.instance_93 = new lib.Tween25("synched",0);
	this.instance_93.setTransform(456.1,99.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355}]}).to({state:[{t:this.instance_92}]},17).to({state:[{t:this.instance_93}]},30).to({state:[]},55).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_92).wait(17).to({_off:false},0).to({_off:true,x:456.1,y:99.3},30).wait(105));

	// bec3
	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape_359.setTransform(1108.8,-241.2,0.863,0.873);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#ADB8BC").ss(2).p("AAAgkIAABJ");
	this.shape_360.setTransform(1051.7,-241.2,0.863,0.873);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#6F7278").s().p("AltAXIAAgtILbAAIAAAtg");
	this.shape_361.setTransform(1079.7,-235.9,0.863,0.873);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#F9C947").s().p("AksAcQgMAAgIgIQgIgJAAgLQAAgLAIgIQAIgIAMAAIJZAAQALAAAJAIQAIAIAAALQAAALgIAJQgJAIgLAAg");
	this.shape_362.setTransform(1079.7,-232.1,0.863,0.873);

	this.instance_94 = new lib.Tween26("synched",0);
	this.instance_94.setTransform(1138.4,-222.2);
	this.instance_94._off = true;

	this.instance_95 = new lib.Tween27("synched",0);
	this.instance_95.setTransform(637.6,99.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359}]}).to({state:[{t:this.instance_94}]},17).to({state:[{t:this.instance_95}]},30).to({state:[]},55).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_94).wait(17).to({_off:false},0).to({_off:true,x:637.6,y:99.3},30).wait(105));

	// tabla
	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#333452").s().p("Ax9AXIAAgtMAj6AAAIAAAtg");
	this.shape_363.setTransform(514.4,-56.7,0.868,0.878);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#44738A").ss(3).p("ARAIYMgh/AAAIAAwvMAh/AAAg");
	this.shape_364.setTransform(514.5,-110.7,0.868,0.878);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#F8FFFF").s().p("Ax9JPIAAydMAj6AAAIAASdg");
	this.shape_365.setTransform(514.4,-110.7,0.868,0.878);

	this.instance_96 = new lib.Tween10("synched",0);
	this.instance_96.setTransform(514.5,-108.6);
	this.instance_96._off = true;

	this.instance_97 = new lib.Tween11("synched",0);
	this.instance_97.setTransform(453.5,224.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_365},{t:this.shape_364},{t:this.shape_363}]},15).to({state:[{t:this.instance_96}]},2).to({state:[{t:this.instance_97}]},25).to({state:[]},86).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_96).wait(17).to({_off:false},0).to({_off:true,x:453.5,y:224.4},25).wait(110));

	// raft4
	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_366.setTransform(786.8,-94.3,0.863,0.873);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_367.setTransform(657.7,-94.3,0.863,0.873);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#44738A").ss(3).p("AsvgBIZfAD");
	this.shape_368.setTransform(722.5,-98.8,0.863,0.873);

	this.instance_98 = new lib.Tween12("synched",0);
	this.instance_98.setTransform(999.3,-94.8);
	this.instance_98._off = true;

	this.instance_99 = new lib.Tween13("synched",0);
	this.instance_99.setTransform(652.2,234.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_368},{t:this.shape_367},{t:this.shape_366}]},15).to({state:[{t:this.instance_98}]},9).to({state:[{t:this.instance_99}]},23).to({state:[]},81).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_98).wait(24).to({_off:false},0).to({_off:true,x:652.2,y:234.2},23).wait(105));

	// raft3
	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_369.setTransform(134.7,-85.8,0.863,0.873);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_370.setTransform(5.6,-85.8,0.863,0.873);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#44738A").ss(3).p("AsvgBIZfAD");
	this.shape_371.setTransform(70.5,-90.4,0.863,0.873);

	this.instance_100 = new lib.Tween14("synched",0);
	this.instance_100.setTransform(70.5,-86.3);
	this.instance_100._off = true;

	this.instance_101 = new lib.Tween15("synched",0);
	this.instance_101.setTransform(261.2,234.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_371},{t:this.shape_370},{t:this.shape_369}]},15).to({state:[{t:this.instance_100}]},9).to({state:[{t:this.instance_101}]},23).to({state:[]},80).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_100).wait(24).to({_off:false},0).to({_off:true,x:261.2,y:234.2},23).wait(105));

	// raft2
	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_372.setTransform(786.8,-138.9,0.863,0.873);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_373.setTransform(657.7,-138.9,0.863,0.873);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#44738A").ss(3).p("AsvgBIZfAD");
	this.shape_374.setTransform(722.5,-143.5,0.863,0.873);

	this.instance_102 = new lib.Tween16("synched",0);
	this.instance_102.setTransform(1094.6,-147.1);
	this.instance_102._off = true;

	this.instance_103 = new lib.Tween17("synched",0);
	this.instance_103.setTransform(652.2,189.9,1.248,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_374},{t:this.shape_373},{t:this.shape_372}]},15).to({state:[{t:this.instance_102}]},9).to({state:[{t:this.instance_103}]},23).to({state:[]},80).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_102).wait(24).to({_off:false},0).to({_off:true,scaleX:1.25,x:652.2,y:189.9},23).wait(105));

	// raft1
	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_375.setTransform(65.5,-155.1,0.863,0.873);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#736E61").ss(3).p("AAAAqIAAhT");
	this.shape_376.setTransform(-63.6,-155.1,0.863,0.873);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#44738A").ss(3).p("AsvgBIZfAD");
	this.shape_377.setTransform(1.3,-159.6,0.863,0.873);

	this.instance_104 = new lib.Tween18("synched",0);
	this.instance_104.setTransform(1.3,-155.6);
	this.instance_104._off = true;

	this.instance_105 = new lib.Tween19("synched",0);
	this.instance_105.setTransform(261.2,189.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_377},{t:this.shape_376},{t:this.shape_375}]},15).to({state:[{t:this.instance_104}]},9).to({state:[{t:this.instance_105}]},23).to({state:[]},80).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_104).wait(24).to({_off:false},0).to({_off:true,x:261.2,y:189.9},23).wait(105));

	// scaun masa mica
	this.instance_106 = new lib.Tween8("synched",0);
	this.instance_106.setTransform(1521.3,476.2);
	this.instance_106._off = true;

	this.instance_107 = new lib.Tween9("synched",0);
	this.instance_107.setTransform(823.4,452.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_106}]},12).to({state:[{t:this.instance_107}]},35).to({state:[]},81).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_106).wait(12).to({_off:false},0).to({_off:true,x:823.4,y:452.8},35).wait(105));

	// masa mica
	this.instance_108 = new lib.Tween6("synched",0);
	this.instance_108.setTransform(1526.2,433.7);

	this.instance_109 = new lib.Tween7("synched",0);
	this.instance_109.setTransform(820,434.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_108}]}).to({state:[{t:this.instance_109}]},35).to({state:[]},92).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_108).to({_off:true,x:820,y:434.2},35).wait(117));

	// masa centrala
	this.instance_110 = new lib.Tween1("synched",0);
	this.instance_110.setTransform(1218.9,429.4);

	this.instance_111 = new lib.Tween2("synched",0);
	this.instance_111.setTransform(448.4,429.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_110}]}).to({state:[{t:this.instance_111}]},23).to({state:[]},104).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_110).to({_off:true,x:448.4},23).wait(129));

	// Background
	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_378.setTransform(951.9,161.3,0.859,0.87);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_379.setTransform(882.1,161.3,0.859,0.87);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_380.setTransform(899.9,161.3,0.859,0.87);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_381.setTransform(935.5,161.3,0.859,0.87);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_382.setTransform(917.7,161.3,0.859,0.87);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#3681A1").s().p("AghAOIAAgaIBDAAIAAAag");
	this.shape_383.setTransform(51.4,357.3,0.859,0.87);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#3681A1").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_384.setTransform(47.3,357.3,0.859,0.87);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#083143").s().p("AgtAuQgTgUAAgaQAAgZATgUQATgSAagBQAaABAUASQASAUABAZQgBAagSAUQgUATgaAAQgaAAgTgTg");
	this.shape_385.setTransform(49.5,357.3,0.859,0.87);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#083043").s().p("AgQA6IAAhzIAhAAIAABzg");
	this.shape_386.setTransform(46.3,343.3,0.859,0.87);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#083043").s().p("AiBAfIAAg9IECAAIAAA9g");
	this.shape_387.setTransform(57.4,343.3,0.859,0.87);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#78B9BE").ss(2).p("AqEEMIUJAAIAAoXI0JAAg");
	this.shape_388.setTransform(92.3,343.9,0.859,0.87);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#78B9BE").ss(2).p("AqEHlIUJAAIAAvJI0JAAg");
	this.shape_389.setTransform(92.3,269.1,0.859,0.87);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#78B9BE").ss(2).p("AqEIoIUJAAIAAxPI0JAAg");
	this.shape_390.setTransform(92.3,425,0.859,0.87);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#CBEAF4").s().p("ArjX3MAAAgvtIXHAAMAAAAvtg");
	this.shape_391.setTransform(92.3,351.7,0.859,0.87);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#99D0CD").s().p("As9YqMAAAgxTIZ7AAMAAAAxTg");
	this.shape_392.setTransform(92.3,346.8,0.859,0.87);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#A4D1D2").ss(8).p("EhPHAAAMCePAAA");
	this.shape_393.setTransform(-2.7,331.5,0.948,0.87,0,0,0,-509.8,2.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_394.setTransform(759.8,163.7,0.859,0.87);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_395.setTransform(777.6,163.7,0.859,0.87);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_396.setTransform(795.3,163.8,0.859,0.87);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_397.setTransform(813.1,163.8,0.859,0.87);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_398.setTransform(830.9,163.8,0.859,0.87);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_399.setTransform(865.5,166.3,0.859,0.87);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_400.setTransform(848.7,163.8,0.859,0.87);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_401.setTransform(653.1,163.7,0.859,0.87);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_402.setTransform(670.9,163.7,0.859,0.87);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_403.setTransform(688.7,163.8,0.859,0.87);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_404.setTransform(706.4,163.8,0.859,0.87);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_405.setTransform(724.2,163.8,0.859,0.87);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_406.setTransform(742,163.8,0.859,0.87);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_407.setTransform(546.4,163.7,0.859,0.87);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_408.setTransform(564.2,163.7,0.859,0.87);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_409.setTransform(582,163.8,0.859,0.87);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_410.setTransform(599.8,163.8,0.859,0.87);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_411.setTransform(617.5,163.8,0.859,0.87);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_412.setTransform(635.3,163.8,0.859,0.87);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_413.setTransform(439.7,163.7,0.859,0.87);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_414.setTransform(457.5,163.7,0.859,0.87);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_415.setTransform(475.3,163.8,0.859,0.87);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_416.setTransform(493.1,163.8,0.859,0.87);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_417.setTransform(510.8,163.8,0.859,0.87);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_418.setTransform(528.6,163.8,0.859,0.87);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_419.setTransform(333,163.7,0.859,0.87);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_420.setTransform(350.8,163.7,0.859,0.87);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_421.setTransform(368.6,163.8,0.859,0.87);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_422.setTransform(386.4,163.8,0.859,0.87);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_423.setTransform(404.2,163.8,0.859,0.87);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_424.setTransform(421.9,163.8,0.859,0.87);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_425.setTransform(226.3,163.7,0.859,0.87);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_426.setTransform(244.1,163.7,0.859,0.87);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_427.setTransform(261.9,163.8,0.859,0.87);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_428.setTransform(279.7,163.8,0.859,0.87);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_429.setTransform(297.5,163.8,0.859,0.87);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_430.setTransform(315.2,163.8,0.859,0.87);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_431.setTransform(119.6,163.7,0.859,0.87);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_432.setTransform(137.4,163.7,0.859,0.87);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_433.setTransform(155.2,163.8,0.859,0.87);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_434.setTransform(173,163.8,0.859,0.87);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_435.setTransform(190.8,163.8,0.859,0.87);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_436.setTransform(208.6,163.8,0.859,0.87);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_437.setTransform(13,163.7,0.859,0.87);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#A3D9D5").s().p("AgudMMAAAg6XIBdAAMAAAA6Xg");
	this.shape_438.setTransform(30.7,163.7,0.859,0.87);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_439.setTransform(48.5,163.8,0.859,0.87);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_440.setTransform(66.3,163.8,0.859,0.87);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_441.setTransform(84.1,163.8,0.859,0.87);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#A3D9D5").s().p("AgudYMAAAg6vIBdAAMAAAA6vg");
	this.shape_442.setTransform(101.9,163.8,0.859,0.87);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#87BEBB").s().p("EhK/AF7IAAr1MCV/AAAIAAL1g");
	this.shape_443.setTransform(480.1,522.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#BAE2E1").s().p("EhK/AMGIAA4KMCV/AAAIAAYKg");
	this.shape_444.setTransform(480.1,407.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#ABDEDB").s().p("EhR/AZvMAAAgzdMCj/AAAMAAAAzdg");
	this.shape_445.setTransform(957.3,167,0.915,1,0,0,0,522,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378}]}).to({state:[]},127).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(357.7,34.6,1721.1,805.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;