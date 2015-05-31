var achievements = function(game){}

achievements.prototype = {
	create: function()
	{
		console.log("%cGame Title...", "color:white; background:red");	
		
		// 240 x 194
		var gameTitle = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY-55,"gametitle");
		gameTitle.anchor.setTo(0.5,0.5);
		
		// 124 [6] x 136
		var ludustLogo = this.game.add.button(this.game.width - (124/2) -5, 136/2 +5,"ludust",this.visitLudust,this);
		ludustLogo.anchor.setTo(0.5,0.5);
		//ludustLogo.inputEnabled = true;// needed if sprite
		ludustLogo.input.useHandCursor = true;
		
		//var playButton = this.game.add.button(this.game.world.centerX,this.game.height - 50,"play",this.playCampaign,this);
		//playButton.anchor.setTo(0.5,0.5);
		/*
		var playButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY+70, 'playbutton', null, this, 2, 1, 0);
		playButton.onInputOver.add(this.over, this);
		playButton.onInputOut.add(this.out, this);
		playButton.onInputUp.add(this.up, this);
		playButton.anchor.setTo(0.5,0.5);
		playButton.input.useHandCursor = true;	
		*/
		
		// play: campaign
		var playCampaignButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY+70, 'playcampaignbutton', this.playCampaign, this, 2, 1, 0);
		//playCampaignButton.onInputOver.add(this.over, this);
		//playCampaignButton.onInputOut.add(this.out, this);
		//playCampaignButton.onInputUp.add(this.up, this);
		playCampaignButton.anchor.setTo(0.5,0.5);
		playCampaignButton.input.useHandCursor = true;	
		
		// play: online (multiplayer)
		var playOnlineButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY+127, 'playonlinebutton', this.playOnline, this, 2, 1, 0);
		//playOnlineButton.onInputOver.add(this.over, this);
		//playOnlineButton.onInputOut.add(this.out, this);
		//playOnlineButton.onInputUp.add(this.up, this);
		playOnlineButton.anchor.setTo(0.5,0.5);
		playOnlineButton.input.useHandCursor = true;	

		// achievements (multiplayer)
		var achievementsButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY+184, 'achievementsbutton', this.viewAchievements, this, 2, 1, 0);
		//achievementsButton.onInputOver.add(this.over, this);
		//achievementsButton.onInputOut.add(this.out, this);
		//achievementsButton.onInputUp.add(this.up, this);
		achievementsButton.anchor.setTo(0.5,0.5);
		achievementsButton.input.useHandCursor = true;	



		// version text and format
		var style = { font: "1.2em "+global._fontFamily, fill: this.fontColor, align: "center" };
		var version = this.game.add.text(this.game.width-5, this.game.height, global._name+" "+global._version, style);
    	version.anchor.set(1,1);
	},
	
	up: function()
	{
    	console.log('button up', arguments);
		this.playCampaign();
	},
	
	over: function()
	{
    	console.log('button over');
	},
	
	out: function()
	{
    	console.log('button out');
	},
	
	playCampaign: function()
	{
		this.game.state.start("Campaign");
	},
	
	playOnline: function()
	{
		this.game.state.start("Online");
	},

	viewAchievements: function()
	{
		this.game.state.start("Achievements");
	},



	visitLudust: function()
	{
		var win = window.open('http://ludust.com/', '_blank');
		win.focus();
	}
}