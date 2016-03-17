//Initialize phaser game with screen size 640 x 480 in the gameDiv tag
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

//adds the Titlescreen as a phaser state to the game 
game.state.add('TitleScreen', TitleScreen);

//begins the game at the TitleScreen state 
game.state.start('TitleScreen');