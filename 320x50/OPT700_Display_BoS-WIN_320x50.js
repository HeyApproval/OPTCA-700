(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.SUB = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F2677").s().p("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");
	this.shape.setTransform(89.675,24.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SUB, new cjs.Rectangle(30.7,6.8,117.99999999999999,35.400000000000006), null);


(lib.Optum_2022_RGBai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Optum_2022_RGB.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF512E").s().p("AixBmIAAilIAlAAIABAOQAQgQAWAAQAYAAARASQARASAAAaQAAAZgRASQgRASgYAAQgWAAgPgPIAAA7gAiCgYQgIAJAAAMQAAAMAIAJQAIAIAMAAQALAAAJgIQAIgJAAgMQAAgMgIgJQgJgJgLAAQgMAAgIAJgAA/AuQgQgNAAgXIAAhJIAnAAIAABIQAAAIAFAFQAEAEAIAAQAHAAAFgEQAFgFAAgIIAAhIIAnAAIAABJQAAAXgQANQgQANgYAAQgYAAgQgNgAgVAvQgMgMAAgWIAAhqIAlAAIAAAeIAgAAIAAAfIggAAIAAAqQAAAQASAAQAFAAAJgDIAAAfQgKAEgOAAQgVAAgMgLgAlJAiQgXgXAAggQAAgiAXgXQAYgXAiAAQAjAAAYAXQAXAXAAAiQAAAggXAXQgYAYgjAAQgiAAgYgYgAkrg0QgMAMAAATQAAASAMALQALANARAAQARAAAMgNQAMgLAAgSQAAgSgMgNQgMgMgRAAQgRAAgLAMgAE6A4IAAhGQAAgJgEgFQgFgFgHAAQgHAAgEAFQgFAFAAAJIAABGIgnAAIAAhGQAAgJgFgFQgEgFgHAAQgHAAgFAFQgFAFAAAJIAABGIgmAAIAAh3IAmAAIAAAOQALgQAVAAQAYAAAKAUQAMgUAZAAQATAAALANQAKANAAATIAABMg");
	this.shape.setTransform(35.325,10.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.7,20.5);


(lib.HEAD = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F2677").s().p("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");
	this.shape.setTransform(85.85,29.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD, new cjs.Rectangle(4.3,11.2,163.2,36.900000000000006), null);


(lib.OPT_2022_logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Optum_2022_RGBai("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,35.3,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OPT_2022_logo, new cjs.Rectangle(-35.3,-10.2,70.69999999999999,20.5), null);


// stage content:
(lib.OPT700_Display_BoSWIN_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [22,154];
	// timeline functions:
	this.frame_22 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==3){
		this.stop();
		}
		}
	}
	this.frame_154 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(132).call(this.frame_154).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(155));

	// logo
	this.instance = new lib.OPT_2022_logo();
	this.instance.setTransform(262.4,27,1.3179,1.3179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155));

	// bkgd-FOOTER
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApDD6IAAnzISHAAIAAHzg");
	this.shape_1.setTransform(262,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(155));

	// HEAD
	this.instance_1 = new lib.HEAD();
	this.instance_1.setTransform(-211,34,1,1,0,0,0,0,38);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:6},12,cjs.Ease.quadOut).to({_off:true},58).wait(84));

	// SUB
	this.instance_2 = new lib.SUB();
	this.instance_2.setTransform(-46.5,15.6,1,1,0,0,0,144.5,13.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},0).to({x:129.5},12,cjs.Ease.quadOut).wait(72));

	// bkgd blue
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9F6FA").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_2.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(155));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-46.7,24.5,367.2,26);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 320,
	height: 50,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [],
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
an.compositions['0957C5EC3B874C629166840920B09671'] = {
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