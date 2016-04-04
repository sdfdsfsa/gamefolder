//creates a GameScreen object
var RulesScreen = {
    
    //the preload method runs first
    //it is where we load our assets
    preload : function () {
     
    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
        game.add.sprite(200, 100,'green');

    },
    
    //function that is called 60 times per second
    //where we put the logic of the game
    update: function() {
    
    }

//    this.tween = game.add.tween(aliens).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
};
    

//game.add.text