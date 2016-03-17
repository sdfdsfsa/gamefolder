//creates a Titlescreen object

var TitleScreen = {

    //the preload method runs first 
    //it is where we load our assets
    preload: function () {
    game.load.image('logo', 'logo.jpg');
},
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, what it looks like when we start the game 
    create: function(){
        //add the image named 'logo' to location (290, 100)
        this.add.image(290, 100, 'logo');
    }

};