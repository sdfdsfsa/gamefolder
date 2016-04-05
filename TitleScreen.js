//creates a TitleScreen object
var TitleScreen = {
    
    //the preload method runs first
    //it is where we load our assets
    preload : function() {
        //loads an image named 'logo'
        game.load.image('logo', '/assets/images/mission_bit_logo.png');
        //loads an image named 'start'
        game.load.image('images', '/assets/images/images.png');
        game.load.image('bg', '/assets/images/bg.jpg');

    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
        this.bg = game.add.image(0,0, 'bg');
        this.bg.width = 700;
        this.bg.width = 1000;
        //adds an image with image 'logo' at (475,162.5)
        this.add.image(475, 162.5, 'logo');
        //adds a button with image 'start' at location (375,262.5) that calls the method startGame when it is clicked on
        this.add.button(375, 262.5, 'images', this.startGame, this);
        //makes the background color of the whole screen periwinkle
        game.stage.backgroundColor = '#CCCFFF';
    },

    //this is a method we created and named ourselves
    //it will only run when it is told to by some other method
    startGame: function() {
        //start the state 'GameScreen', as defined in the directory
        this.state.start('GameScreen');
    }
    
};

/*

Board game; moving steps forward in order to get to the end of the game-each number on the board is a step forward that comes with new situations/possibilities(for example certain number spots will send you back or forward steps). The objective is to get to the end of the game as quickly as possible while encountering obstacles (like monopoly or risk). 

*/