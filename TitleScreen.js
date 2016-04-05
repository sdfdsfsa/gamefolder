//creates a TitleScreen object
var TitleScreen = {
    
    //the preload method runs first
    //it is where we load our assets
    preload : function () {
        //loads an image named 'logo'
        game.load.image('logo', '/assets/images/mission_bit_logo.png');
        //loads an image named 'start'
        game.load.image('start', '/assets/images/start.png');
        game.load.image('bg', '/assets/images/Color Karma.jpg');

    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
        //adds an image with image 'logo' at (475,162.5)
        this.add.image(475, 162.5, 'logo');
        //adds a button with image 'start' at location (375,262.5) that calls the method startGame when it is clicked on
        this.add.button(375, 262.5, 'start', this.startGame, this);
		
		this.add.button(500, 262.5, 'start', this.rules, this);
        //makes the background color of the whole screen periwinkle
        game.stage.backgroundColor = '#CCCFFF';
    },

    //this is a method we created and named ourselves
    //it will only run when it is told to by some other method
    startGame: function () {
        //start the state 'GameScreen', as defined in the directory
        this.state.start('GameScreen');
    },
	
	rules: function() {
		//this.state.start('RulesScreen');
        window.location.href = "rules.html";
	}
    
};