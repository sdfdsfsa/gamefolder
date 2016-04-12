//var arraymap;
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
        game.load.image('blue0', 'assets/images/Teleport1.png');
        game.load.image('purple', 'assets/images/Debuff.png');
        game.load.image('blue1', '/assets/images/Teleport2.png');
        game.load.image('blue2', '/assets/images/Teleport3.png');
        game.load.image('blue3', '/assets/images/Teleport0.png');
    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
        this.arraymap = [
            ['normal', 'debuff', 'normal', 'normal', 'debuff', 'normal', 'normal', 'debuff', 'normal', 'teleport4'],
            ['normal', 'normal', 'cripple', 'normal', 'normal', 'buff', 'normal', 'normal', 'normal', 'normal'],
            ['buff', 'normal', 'normal', 'teleport4', 'cripple', 'normal', 'normal', 'debuff', 'normal', 'buff'],
            ['normal', 'normal', 'teleport3', 'debuff', 'normal', 'normal', 'cripple', 'normal', 'normal', 'debuff'],
            ['normal', 'debuff', 'normal', 'normal', 'normal', 'teleport2', 'debuff', 'normal', 'normal', 'normal'],
            ['normal', 'normal', 'normal', 'cripple', 'normal', 'normal', 'normal', 'teleport3', 'normal', 'normal'],
            ['teleport1', 'normal', 'debuff', 'normal', 'normal', 'buff', 'normal', 'normal', 'cripple', 'normal'],
            ['normal', 'buff', 'normal', 'normal', 'debuff', 'normal', 'teleport2', 'normal', 'normal', 'normal'],
            ['debuff', 'normal', 'normal', 'normal', 'cripple', 'normal', 'normal', 'debuff', 'normal', 'normal'],
            ['buff', 'normal', 'normal', 'teleport1', 'normal', 'normal', 'debuff', 'normal', 'normal', 'buff']
        ];
        
        console.log(this.arraymap[0][0]);
        for (var row = 0; row<10; row++) {
            for (var column = 0; column < 10; column ++) {
                debugger;
                if (this.arraymap[row][column] === 'normal') 
                {
                    this.temp = game.add.sprite(column*100, row*100,'yellow');
                }
                if (this.arraymap[row][column] ==='buff')
                    {
                    this.temp = game.add.sprite(column*100, row*100,'green');
                    }
                if (this.arraymap[row][column] ==='debuff') {
                    this.temp = game.add.sprite(column*100, row*100,'purple');
                }
                if (this.arraymap[row][column] ==='teleport4'){
                    this.temp = game.add.sprite(column*100, row*100,'blue2');
                }
                if (this.arraymap[row][column] ==='teleport1'){
                    this.temp = game.add.sprite(column*100, row*100,'blue0');
                }
                if (this.arraymap[row][column] ==='teleport2'){
                    this.temp = game.add.sprite(column*100, row*100,'blue1');
                }
                if (this.arraymap[row][column] ==='teleport3'){
                    this.temp = game.add.sprite(column*100, row*100,'blue3');
                }
                if (this.arraymap[row][column] ==='cripple'){
                    this.temp = game.add.sprite(column*100, row*100,'red');
                }
                this.temp.scale.x = .1;
                this.temp.scale.y = .1;
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

//    this.tween = game.add.tween(aliens).to( { y: 300}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
};
    