var gameOver = function(game){}

gameOver.prototype = {
	init: function(score)
	{
		alert("You scored: "+score);
		console.log("%cGame Over...", "color:white; background:red");
	},
	
  	create: function()
	{
  		var gameOverTitle = this.game.add.sprite(this.game.world.centerX,160,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		
		var replayButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY+70, 'replaybutton', null, this, 2, 1, 0);
		
		replayButton.onInputOver.add(this.over, this);
		replayButton.onInputOut.add(this.out, this);
		replayButton.onInputUp.add(this.up, this);
		
		replayButton.anchor.setTo(0.5,0.5);
		replayButton.input.useHandCursor = true;	

		// version text and format
		var style = { font: "1.2em "+global._fontFamily, fill: this.fontColor, align: "center" };
		var version = this.game.add.text(this.game.width-5, this.game.height, global._name+" "+global._version, style);
    	version.anchor.set(1,1);
	},
	
	up: function()
	{
    	console.log('button up', arguments);
		this.backToStart();
	},
	
	over: function()
	{
    	console.log('button over');
	},
	
	out: function()
	{
    	console.log('button out');
	},
	
	backToStart: function()
	{
		this.game.state.start("GameTitle");
	}
}