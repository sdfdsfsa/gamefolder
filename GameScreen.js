var arraymap;
var dice = function () {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
};

var imagesize = 200;

//creates a GameScreen object
var GameScreen = {
    
    //the preload method runs first
    //it is where we load our assets
    preload : function () {
        game.load.image('yellow', 'assets/images/Normal.png');
        game.load.image('green', 'assets/images/Buff.png');
        game.load.image('red', 'assets/images/Cripple.png');
        game.load.image('blue', 'assets/images/Teleport.png');
        game.load.image('purple', 'assets/images/Debuff.png');
        game.load.image('logo', '/assets/images/mission_bit_logo.png');
    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
        this.arraymap = [
            ['normal', 'normal', 'cripple'],
            ['debuff', 'teleport', 'buff']
        ];
        
        console.log(this.arraymap[0][0]);
        for (var row = 0; row<2; row++) {
            for (var column = 0; column < 3; column ++) {
                debugger;
                if (this.arraymap[row][column] === 'normal') 
                {
                    this.temp = game.add.sprite(column*200, row*imagesize,'yellow');
                }
                if (this.arraymap[row][column] ==='buff')
                    {
                    this.temp = game.add.sprite(column*200, row*imagesize,'green');
                    }
                if (this.arraymap[row][column] ==='debuff') {
                    this.temp = game.add.sprite(column*200, row*imagesize,'purple');
                }
                if (this.arraymap[row][column] ==='teleport'){
                    this.temp = game.add.sprite(column*200, row*imagesize,'blue');
                }
                if (this.arraymap[row][column] ==='cripple'){
                    this.temp = game.add.sprite(column*200, row*10,'red');
                }
                this.temp.scale.x = 0.1;
                this.temp.scale.y = 0.1;
        }
         
    }

        
        //starts the physics system for the game
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //creates a variable that handles the arrow keys
        this.cursor = game.input.keyboard.createCursorKeys();
        
        //creates a sprite with the 'logo' image at (200, 400) and assigns it to a variable
        this.mc = game.add.sprite(200, 400, 'logo');
        
        //enables the physics system for the mc
        game.physics.arcade.enable(this.mc);
        
        //makes sure the mc can't be moved by other sprites
        this.mc.body.immovable = true;
        
        //make it so the mc can't leave the screen
        this.mc.body.collideWorldBounds = true;

    },
    
    //function that is called 60 times per second
    //where we put the logic of the game
    update: function() {
    
        //if the right arrow is pressed, move to the right
        if (this.cursor.right.isDown) {
            this.mc.body.velocity.x = 350;
        } else if (this.cursor.left.isDown) { //if the left arrow is pressed, move to the left
            this.mc.body.velocity.x = -350;
        } else if (this.cursor.up.isDown){ //if the up arrow is pressed, move upwards
            this.mc.body.velocity.y = -350;
        } else if (this.cursor.down.isDown) { //if the down arrow is pressed, move downwards
            this.mc.body.velocity.y = 350;
        } else { //if no arrow keys are being pressed, stop moving
            this.mc.body.velocity.x = 0;
            this.mc.body.velocity.y = 0;
        }
    
    }

//    this.tween = game.add.tween(aliens).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
};
    