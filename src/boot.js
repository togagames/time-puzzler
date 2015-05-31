var global = 
{
	_name: "Card Match RPG",
	_version: "1.0",
	_bgColor: '#939D68',//'#E8DD9C'
	_barColor: 0x252525,
	_fontColor: '#252525',
	_fontFamily: 'Arial'
};

var boot = function(game){};
	
boot.prototype = {
	
	preload: function()
	{
		console.log("%cBooting...", "color:white; background:red");
		//this.game.load.image("loading","assets/loading.png");
	},

	create: function()
	{
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.game.state.start("Preload");
	}
}