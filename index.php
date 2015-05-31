<!doctype html> 
<html lang="en"> 
<head> 
	<meta charset="UTF-8" />
    <title>Card Match RPG - Lethal Lands</title>
    <script src="http://lethallands.com/assets/js/jquery-1.11.2.min.js"></script>    
    <script src="http://lethallands.com/assets/js/phaser-2.3.0/build/phaser.min.js"></script>
    
    <script src="src/boot.js"></script>
    <script src="src/preload.js"></script>
    <script src="src/gametitle.js"></script>
    <script src="src/campaign.js"></script>
    <script src="src/online.js"></script>
    <script src="src/achievements.js"></script>
    <script src="src/gameover.js"></script>	
    
<style type="text/css">
body {margin:0 0 20px 0;background-color:#d2d2d2;font-family:sans-serif;color:#666;}
#display{position:absolute;width:640px;height:480px;}
.displayBorder{position:relative;margin:0 auto;width:640px;height:480px;border:solid 2px #252525;}
.linkBar{position:relative;margin:0 auto;width:630px;height:20px;background-color:#252525;border:solid 2px #252525;padding:5px;}
.linkBar a,.linkBar a:active{color:#999;text-decoration:none;}
.linkBar a:hover{color:#fff;text-decoration:underline;}
</style>
	<script>
        (function() {
			// 800, 600
			// 640, 480 - most common
			// 320, 480
            var game = new Phaser.Game(640, 480, Phaser.CANVAS, "display");
            game.state.add("Boot",boot);
            game.state.add("Preload",preload);
            game.state.add("GameTitle",gameTitle);
            game.state.add("Campaign",campaign);
            game.state.add("Online",online);
            game.state.add("Achievements",achievements);
            game.state.add("GameOver",gameOver);
            game.state.start("Boot");
        })();    
    </script>    
    
</head>
<body>

<div class="linkBar">
	<a href="http://as3codes.com/play">Main Menu</a>
</div><!--.linkBar-->




<div class="displayBorder">
	<div id="display"></div>
</div>

</body>
</html>