var arraymap;
<<<<<<< HEAD

=======
var dice = function () {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
};
>>>>>>> master

var imagesize = 200;

//creates a GameScreen object
var GameScreen = {
    
    //the preload method runs first
    //it is where we load our assets
    preload : function () {
<<<<<<< HEAD
        game.load.image('normal', 'assets/images/Normal.jpg');
        game.load.image('buff', 'assets/images/Buff.jpg');
        game.load.image('cripple', 'assets/images/Cripple.jpg');
        game.load.image('teleport', 'assets/images/Teleport.jpg');
        game.load.image('debuff', 'assets/images/Debuff.jpg');
=======
        game.load.image('yellow', 'assets/images/Normal.jpg');
        game.load.image('green', 'assets/images/Buff.jpg');
        game.load.image('red', 'assets/images/Cripple.jpg');
        game.load.image('blue', 'assets/images/Teleport.jpg');
        game.load.image('purple', 'assets/images/Debuff.jpg');
>>>>>>> master
        game.load.image('logo', '/assets/images/mission_bit_logo.png');
    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
        this.arraymap = [
<<<<<<< HEAD
            ['normal', 'debuff' 'normal', 'normal', 'debuff', 'normal', 'normal', 'debuff', 'normal', 'teleport4'],
            ['normal', 'normal', 'cripple', 'normal', 'normal', 'buff', 'normal', 'normal', 'normal', 'normal'],
            ['buff', 'normal', 'normal', 'teleport4', 'cripple', 'normal', 'normal', 'debuff', 'normal', 'buff'],
            ['normal', 'normal', 'teleport3', 'debuff', 'normal', 'normal', 'cripple', 'normal', 'normal', 'debuff'],
            ['normal', 'debuff', 'normal', 'normal', 'normal', 'teleport2', 'debuff', 'normal', 'normal', 'normal'],
            ['normal', 'normal', 'normal', 'cripple', 'normal', 'normal', 'normal', 'teleport3', 'normal', 'normal'],
            ['teleport1', 'normal', 'debuff', 'normal', 'normal', 'buff', 'normal', 'normal', 'cripple', 'normal'],
            ['normal', 'buff', 'normal', 'normal', 'debuff', 'normal', 'teleport2', 'normal', 'normal', 'normal'],
            ['debuff', 'normal', 'normal', 'normal', 'cripple', 'normal', 'normal', 'debuff', 'normal', 'normal'],
            ['buff', 'normal', 'normal', 'teleport1', 'normal', 'normal', 'debuff', 'normal', 'normal', 'buff']
=======
            ['normal', 'normal', 'cripple'],
            ['debuff', 'teleport', 'buff']
>>>>>>> master
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
<<<<<<< HEAD
        }   
    }
=======
        }
    
    }

//    this.tween = game.add.tween(aliens).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
>>>>>>> master
};
    