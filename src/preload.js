var preload = function(game)
{
	this.ready = false;
}
 
preload.prototype = {
	preload: function()
	{
		console.log("%cPreloading...", "color:white; background:blue");
		
		// for adding a graphical loading bar: (preloaded in 'boot.js')
		//var lb = this.game.add.sprite(left,top,"loading");
		//lb.anchor.setTo(0.5,0.5);
		
		/* preload our in-game assets */
		this.game.load.spritesheet("numbers","assets/numbers.png",100,100);
		
		this.game.load.spritesheet("playbutton","assets/buttons/lethal-lands-play-button.png",240,54);
		
		this.game.load.spritesheet("replaybutton","assets/buttons/lethal-lands-replay-button.png",240,54);

		this.game.load.spritesheet("playcampaignbutton","assets/buttons/lethal-lands-play-campaign-button.png",240,54);
		
		this.game.load.spritesheet("playonlinebutton","assets/buttons/lethal-lands-play-online-button.png",240,54);

		this.game.load.spritesheet("achievementsbutton","assets/buttons/lethal-lands-achievements-button.png",240,54);


		this.game.load.image("ludust","assets/ludust-com-logo.png");
		this.game.load.image("gametitle","assets/lethal-lands-com-logo.png");
		
		this.game.load.image("play","assets/play.png");
		this.game.load.image("higher","assets/higher.png");
		this.game.load.image("lower","assets/lower.png");
		this.game.load.image("gameover","assets/gameover.png");
	},
	
	create: function(){
		this.game.stage.backgroundColor = global._bgColor;
		
		var lbl = 100;// load bar length
		var left = this.game.world.centerX - lbl/2;
		var top = this.game.world.centerY;
		/* draw a preloader line */
		var bar = 1;
		var graphics = this.game.add.graphics(left,top);
		graphics.lineStyle(5, global._barColor, 1);
		graphics.lineTo(bar,0);

		// text and format
		var style = { font: "1.2em "+global._fontFamily, fill: global._fontColor, align: "center" };
		var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY+15, "Loading. .", style);
    	text.anchor.set(0.5);

		//create a progress display text
		var progressDisplay = 0;
		text.text = 'Loading. . '+(progressDisplay)+'%';
		var timerEvt = this.game.time.events.loop(20, function ()
		{
			if(progressDisplay < 100)
			{
				progressDisplay++;
				text.text = 'Loading. . '+(progressDisplay)+'%';
				graphics.lineTo(progressDisplay,0);
			}else{
				text.text = 'Game is ready!';
				this.game.time.events.remove(timerEvt);
				this.onLoadComplete();
			}
		}, this);
		
		/* to add a next button
		var nextButton = this.game.add.button(160,320,"play",this.playTitle,this);
		nextButton.anchor.setTo(0.5,0.5);*/
		
		/* this will run upon full load of this class
		this.game.load.onLoadComplete.add(this.onLoadComplete, this);
		this.game.load.start();*/
	},

	onLoadComplete: function()
	{
		this.ready = true;
		this.game.state.start("GameTitle");
	},

	// button action
	playTitle: function()
	{
		this.game.state.start("GameTitle");
	},
	
	// our onEnterFrame event:
	update: function()
	{
		
	}
}