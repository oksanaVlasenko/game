
    /**START SCREEN */

var states = {}, score = 0;

//WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    //active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

//     //  The Google Fonts we want to load (specify as many as you like in the array)
//     google: {
//       families: ['Fontdiner Swanky']
//     }

// };
// var text = null;
// function createText() {
//     text = game.add.text(game.world.centerX, game.world.centerY, "- phaser -\nrocking with\ngoogle web fonts");
//         text.anchor.setTo(0.5);

//         text.font = 'Fontdiner Swanky';
//         text.fontSize = 60;

//         //  If we don't set the padding the font gets cut off
//         //  Comment out the line below to see the effect
//         text.padding.set(10, 16);

//         // this.grd = this.text.context.createLinearGradient(0, 0, 0, this.text.canvas.height);
//         // this.grd.addColorStop(0, '#8ED6FF');   
//         // this.grd.addColorStop(1, '#004CB3');
//         // this.text.fill = grd;

//         text.align = 'center';
//         text.stroke = '#000000';
//         text.strokeThickness = 2;
//         text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
// }

states.startScreen = function(game) {
    this.btn;
    this.play;
    this.text = null;
    this.grd;
}

states.startScreen.prototype = {
    preload: function() {
        this.load.image('BACK', 'assets/demo/GAME/BACK.png');
        this.load.image('btnGround', 'assets/demo/UI/BACKPLAY.png');
        this.load.image('btnPlay', 'assets/demo/UI/PLAYBUTTOM.png');
        this.load.image('background', 'assets/demo/GAME/BACK.png');
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    },

    create: function(){
        this.add.sprite(0, 0, 'BACK');
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.btn = this.add.button(game.world.width*0.5, game.world.height*0.5, 'btnGround', this.goToStateMain, this);
        this.btn.anchor.set(0.5);
        this.play = this.add.sprite(game.world.width*0.5, game.world.height*0.5, 'btnPlay');
        this.play.anchor.set(0.5);

        
    },
    goToStateMain: function(){
        this.state.start('howToUse');
    }
}

/**HOW TO USE SCREEN */

states.howToUseScreen = function(game) {
    this.btn;
    this.ok;
}

states.howToUseScreen.prototype = {
    preload: function() {
        this.load.image('BACK', 'assets/demo/EXAMPLE/GAME.png');
        this.load.image('btnGround', 'assets/demo/UI/HOWTOUSE.png');
        this.load.image('btnPlay', 'assets/demo/UI/OKAYBUTTOM.png');
        //this.load.image('background', 'assets/demo/GAME/BACK.png');
    },

    create: function(){
        this.add.sprite(0, 0, 'BACK');
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.btn = this.add.button(game.world.width*0.5, game.world.height*0.5, 'btnGround', this.goToStateMain, this);
        this.btn.anchor.set(0.5);
        this.ok = this.add.sprite(game.world.width*0.5, game.world.height-500, 'btnPlay');
        this.ok.anchor.set(0.5);
    },
    goToStateMain: function(){
        this.state.start('mainScreen');
    }
}


       

    /**MAIN SCREEM */

    states.mainScreen = function(game){
        this.background;
        this.player;
        this.platforms;
        this.ledge;
        this.cursors;
       // this.score = 0;
        this.scoreText;
        this.bestScore;
        this.hitPlatform;
        this.enemies;
        this.enem;
        this.wrenches;
        this.wrench;
        this.dynamites;
        this.dynamite;
        this.style;
    }

    states.mainScreen.prototype = {
        preload: function(){
            this.load.image('BACK', 'assets/demo/GAME/BACK.png');
            this.load.image('ground', 'assets/demo/GAME/Platform.png');
            this.load.spritesheet('dude', 'assets/demo/GAME/HERO.png', 106, 124);
            this.load.image('boxtools', 'assets/demo/GAME/BOXTOOLS.png');
            this.load.image('dynamite', 'assets/demo/GAME/DYNAMITE.png');
            this.load.image('enemies', 'assets/demo/GAME/ENEMIES.png');
            this.load.image('wrench', 'assets/demo/GAME/wrench.png');
            this.load.image('sandwich', 'assets/demo/GAME/sandwich.png');
            this.load.image('obtacles', 'assets/demo/GAME/obtacles.png');
            this.load.image('arrowLeft', 'assets/demo/UI/ARROWLEFT.png');
            this.load.image('arrowRight', 'assets/demo/UI/ARROWRIGHT.png');
            //this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
        }, 

        create: function() {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.tileSprite(0, 0, 720, 1280, 'BACK');
            // this.background.immovable = true
            // this.background.moves = false
            //this.physics.add.existing(this.background);
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.world.setBounds(0, 0, 720, 1280);  
            this.platforms = this.game.add.group();
            this.platforms.enableBody = true;
            this.ledge = this.platforms.create(170, 120, 'ground');
            this.ledge.body.immovable = true;
            this.ledge.scale.setTo(1, 0.8);

            this.ledge = this.platforms.create(-370, 330, 'ground');
            this.ledge.body.immovable = true;
            this.ledge.scale.setTo(1, 0.8);
            
            this.ledge = this.platforms.create(480, 330, 'ground');
            this.ledge.body.immovable = true;
            this.ledge.scale.setTo(1, 0.8);
            
            this.ledge = this.platforms.create(530, 560, 'ground');
            this.ledge.body.immovable = true;
            this.ledge.scale.setTo(1, 0.8);

            this.ledge = this.platforms.create(-140, 560, 'ground');
            this.ledge.body.immovable = true;
            this.ledge.scale.setTo(1, 0.8);

            this.ledge = this.platforms.create(230, 780, 'ground');
            this.ledge.body.immovable = true;
            this.ledge.scale.setTo(1, 0.8);
            
            this.ledge = this.platforms.create(-290, 1020, 'ground');
            this.ledge.body.immovable = true;
            this.ledge.scale.setTo(1, 0.8);

            this.ledge = this.platforms.create(530, 1020, 'ground');
            this.ledge.body.immovable = true;
            this.ledge.scale.setTo(1, 0.8);

            this.ledge = this.platforms.create(150, 1230, 'ground');
            this.ledge.body.immovable = true;
            this.ledge.scale.setTo(1, 0.9);

            this.add.sprite(250, 55, 'boxtools');

            this.enemies = this.game.add.group();
            this.enemies.enableBody = true;

            this.enem = this.enemies.create(120, 460, 'enemies');
            this.enem.body.immovable = true;
            this.enem.scale.setTo(0.8,0.8);

            this.enem = this.enemies.create(550, 920, 'enemies');
            this.enem.body.immovable = true;
            this.enem.scale.setTo(0.8,0.8);

            this.wrenches = this.game.add.group();
            this.wrenches.enableBody = true;

            this.wrench = this.wrenches.create(360,700, 'wrench');
            this.wrench.body.immovable = true;

            this.wrench = this.wrenches.create(600,20, 'wrench');
            this.wrench.body.immovable = true;

            this.dynamites = this.game.add.group();
            this.dynamites.enableBody = true;


            this.dynamite = this.dynamites.create(600, 460, 'dynamite');
            this.dynamite.body.immovable = true;
           
            this.add.sprite(250, 1160, 'obtacles');
            this.add.sprite(400, 1160, 'sandwich');
            this.add.sprite(20, 1100, 'arrowLeft');
            this.add.sprite(550, 1100, 'arrowRight');

            this.player = this.game.add.sprite(500, this.game.world.height - 1250,  'dude');
            this.player.scale.setTo(0.8, 0.8);
            
            this.game.physics.arcade.enable(this.player);
           
            this.player.body.bounce.y = 0.2;
            this.player.body.gravity.y = 200;

            //createText();
            this.style = { fontSize: "65px", fill: "#ff0044", align: "center" };
            this.scoreText = this.game.add.text(500, 0, '0', this.style);
            this.bestScore = this.game.add.text(20, 0, '50', this.style);
            this.cursors = this.game.input.keyboard.createCursorKeys();
        }, 

        update: function() {
            this.hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);
           //this. this.game.physics.arcade.collide(stars, platforms);
        //    game.physics.arcade.overlap(player, stars, collectStar, null, this);
            this.player.body.velocity.x = 0;
            if (this.cursors.up.isDown)
            {
                this.camera.y -= 4;
                this.physics.arcade.accelerationFromRotation(this.player.rotation, 200, this.player.body.acceleration);
            }
            else 
            {
                this.player.body.acceleration.set(0);
            }
            if (this.cursors.down.isDown)
            {
                this.camera.y += 4;
            }
            if (this.cursors.left.isDown)
            {
                this.player.body.velocity.x += -550;
                this.player.animations.play('left');
               // this.player.body.angularVelocity = -300;
            }
            else if (this.cursors.right.isDown)
            {
                this.player.body.velocity.x += 550;
                this.player.animations.play('right');
                //this.player.body.angularVelocity = 300;
            }
            else
            {
                this.player.animations.stop();
                this.player.frame = 4;
                this.player.body.angularVelocity = 0;
               
            }
            if (this.cursors.up.isDown && this.player.body.touching.down && this.hitPlatform)
            {
                this.player.body.velocity.y = -800;
            }
            //this.physics.arcade.collide(this.player, this.wrenches);
            this.physics.arcade.overlap(this.player, this.wrenches, this.collectWrench, null, this);
            this.physics.arcade.overlap(this.player, this.enemies, this.killEnem, null, this);
            //this.physics.arcade.collide(this.player, this.dynamites);
            this.physics.arcade.overlap(this.player, this.dynamites, this.gameOver, null, this);
            this.screenWrap(this.player)
            this.background.tilePositionY += 10;
        },
        screenWrap: function  (sprite) {

            if (sprite.x < 0)
            {
                sprite.x = game.width;
            }
            else if (sprite.x > game.width)
            {
                sprite.x = 0;
            }
        
            if (sprite.y < 0)
            {
                sprite.y = game.height;
            }
            else if (sprite.y > game.height)
            {
                sprite.y = 0;
            }
        
        }, 
        collectWrench: function(player, wrench) {
            wrench.kill();

            score += 20;
        
            this.scoreText.text =+ score;
        },
        killEnem: function(player, enem){
            if (player.body.velocity.y > 0) { // kill enemies when hero is falling
                enem.kill();
                score += 10;
        
                this.scoreText.text =+ score;
                //this.sfx.stomp.play();
            }
            else { // game over -> restart the game
                //this.game.state.restart();
                // if(this.physics.arcade.collide(this.player, this.enemies)){
                //     (this.player.body.blocked);
                // }
                player.kill();
                //this.score -= 30; 
               // this.game.state.restart(true,false, this.goToStateMain);
                this.goToStateMain();
            }
        },
        gameOver: function(player, dynamite) {
            player.kill();
            this.score -= 30; 
           // this.game.state.restart(true,false, this.goToStateMain);
            this.goToStateMain();
        },
        goToStateMain: function(){
            this.state.start('restartScreen');
        }
    
    }


    /**RESTART SCREEN */

states.restartScreen = function(game) {
    this.btn;
    this.ok;
    this.text;
    this.scoreText;
    this.score;
}

states.restartScreen.prototype = {
    preload: function() {
        this.load.image('BACK', 'assets/demo/EXAMPLE/GAME.png');
        this.load.image('btnGround', 'assets/demo/UI/RESTART.png');
        this.load.image('btnPlay', 'assets/demo/UI/RESTARTBUTTOM.png');
        this.load.image('wrench', 'assets/demo/GAME/wrench.png');
        //this.load.image('background', 'assets/demo/GAME/BACK.png');
    },

    create: function(){
        this.add.sprite(0, 0, 'BACK');
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.btn = this.add.button(game.world.width*0.5, game.world.height*0.5, 'btnGround', this.goToStateMain, this);
        this.btn.anchor.set(0.5);
        this.ok = this.add.sprite(game.world.width*0.5, game.world.height-530, 'btnPlay');
        this.ok.anchor.set(0.5);
        this.text = this.game.add.text(game.world.width-500, game.world.height-710, '50', {  fontSize: '70px', fill: '#000' });
        this.text.anchor.set(0.5);
        this.add.text(470, 600, '50', {  fontSize: '70px', fill: '#000' });
        this.add.sprite(game.world.width-280, game.world.height-750, 'wrench');
        this.scoreText = this.game.add.text(360, 525, score, {  fontSize: '70px', fill: '#000' })
        
    },
    goToStateMain: function(){
        this.state.start('mainScreen');
    }
}
    var game = new Phaser.Game(720, 1280, Phaser.AUTO, '');
    game.state.add('startScreen', states.startScreen);
    game.state.add('mainScreen', states.mainScreen);
    game.state.add('howToUse', states.howToUseScreen);
    game.state.add('restartScreen', states.restartScreen);
    game.state.start('startScreen');
    
    
    
//     var player;
//     var platforms;
//     var cursors;
//     var stars;
//     var score = 0;
//     var scoreText;
//     var bgTimer;

// function create() { 

  

//     //  We will enable physics for any object that is created in this group
    

//     // Here we create the ground.
   

//     //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
//     //ground.scale.setTo(0.5, 0.5);

//     //  This stops it from falling away when you jump on it
//    // ground.body.immovable = true;

//     //  Now let's create two ledges
    
//     // The player and its settings
    

//     //  Our two animations, walking left and right.
//    // player.animations.add('left',  10, true);
//     //player.animations.add('right', 10, true);

//     stars = game.add.group();

//     //  We will enable physics for any star that is created in this group
//     stars.enableBody = true;

//     //  Here we'll create 12 of them evenly spaced apart
//     for (var i = 0; i < 12; i++)
//     {
//         //  Create a star inside of the 'stars' group
//         var star = stars.create(i * 70, 0, 'star');

//         //  Let gravity do its thing
//         star.body.gravity.y = 300;

//         //  This just gives each star a slightly random bounce value
//         star.body.bounce.y = 0.7 + Math.random() * 0.2;
//     }

 
    
// }

// function update() {

//     //  Collide the player and the stars with the platforms
    

// }



// function render() {

//     game.debug.cameraInfo(game.camera, 32, 32);

// }
    
//};