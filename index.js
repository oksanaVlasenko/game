
var states = {}, score = 0;

WebFontConfig = {
   
    google: {
      families: ['Marck Script']
    }

};

function createText(text, size) {
        text.font = 'Marck Script';
        text.fontSize = size;
        text.stroke = 'black';
        text.fill = '#ffffff';
        text.strokeThickness = 3;
}

 /**START SCREEN */

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
        this.scoreText;
        this.bestScore;
        this.hitPlatform;
        this.enemies;
        this.enem;
        this.wrenches;
        this.wrench;
        this.mainWrench;
        this.dynamites;
        this.dynamite;
        this.eat;
        this.sandwich;
        this.obtacles;
        this.obtacle;
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
        }, 

        create: function() {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.tileSprite(0, 0, 720, 1280, 'BACK');
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.world.setBounds(0, 0, 720, 1280);  
            this.platforms = this.game.add.group();
            this.platforms.enableBody = true;

            this.ledge = this.platforms.create(170, 100, 'ground');
            this.ledge.body.immovable = true;

            this.ledge = this.platforms.create(-370, 310, 'ground');
            this.ledge.body.immovable = true;
            
            this.ledge = this.platforms.create(480, 310, 'ground');
            this.ledge.body.immovable = true;
            
            this.ledge = this.platforms.create(530, 530, 'ground');
            this.ledge.body.immovable = true; 

            this.ledge = this.platforms.create(-140, 530, 'ground');
            this.ledge.body.immovable = true;

            this.ledge = this.platforms.create(230, 750, 'ground');
            this.ledge.body.immovable = true;
            
            this.ledge = this.platforms.create(-290, 970, 'ground');
            this.ledge.body.immovable = true;

            this.ledge = this.platforms.create(530, 970, 'ground');
            this.ledge.body.immovable = true;

            this.ledge = this.platforms.create(150, 1180, 'ground');
            this.ledge.body.immovable = true;

            this.add.sprite(250, 35, 'boxtools');

            this.enemies = this.game.add.group();
            this.enemies.enableBody = true;

            this.enem = this.enemies.create(120, 410, 'enemies');
            this.enem.body.immovable = true;


            this.enem = this.enemies.create(550, 850, 'enemies');
            this.enem.body.immovable = true;


            this.wrenches = this.game.add.group();
            this.wrenches.enableBody = true;

            this.wrench = this.wrenches.create(360,680, 'wrench');
            this.wrench.body.immovable = true;

            this.mainWrench = this.wrenches.create(630,5, 'wrench');
            this.mainWrench.body.immovable = true;
            this.mainWrench.rotation = 0.4;
           

            this.dynamites = this.game.add.group();
            this.dynamites.enableBody = true;


            this.dynamite = this.dynamites.create(600, 440, 'dynamite');
            this.dynamite.body.immovable = true;

            this.eat = this.game.add.group();
            this.eat.enableBody = true;

            this.sandwich =  this.eat.create(400, 1110, 'sandwich');
            this.sandwich.body.immovable = true;

            this.obtacles = this.game.add.group();
            this.obtacles.enableBody = true;
           
            this.obtacle = this.obtacles.create(250, 1110, 'obtacles');
            this.obtacle.body.immovable = true;
            
            this.add.sprite(20, 1100, 'arrowLeft');
            this.add.sprite(550, 1100, 'arrowRight');

            this.player = this.game.add.sprite(500, this.game.world.height - 1250,  'dude');

            
            this.game.physics.arcade.enable(this.player);
           
            this.player.body.bounce.y = 0.2;
            this.player.body.gravity.y = 200;
            this.player.body.collideWorldBounds = true;
            this.physics.arcade.checkCollision.left   = false;
            this.physics.arcade.checkCollision.right  = false;
            this.physics.arcade.checkCollision.top    = true;
            this.physics.arcade.checkCollision.bottom = true;

            this.scoreText = this.game.add.text(525, 0, '0');
            createText(this.scoreText, 105);
            this.bestScore = this.game.add.text(20, 0, '50');
            createText(this.bestScore, 105);
            this.cursors = this.game.input.keyboard.createCursorKeys();
        }, 

        update: function() {
            this.hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);
            this.physics.arcade.collide(this.player, this.mainWrench);
            this.physics.arcade.collide(this.player, this.obtacle);
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
            }
            else if (this.cursors.right.isDown)
            {
                this.player.body.velocity.x += 550;
                this.player.animations.play('right');
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

            this.physics.arcade.overlap(this.player, this.wrenches, this.collectWrench, null, this);
            this.physics.arcade.overlap(this.player, this.enemies, this.killEnem, null, this);
            this.physics.arcade.overlap(this.player, this.dynamites, this.gameOver, null, this);
            this.physics.arcade.overlap(this.player, this.eat, this.eatSandwich, null, this);
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
        
        }, 
        collectWrench: function(player, wrench) {
            wrench.kill();

            score += 10;
        
            this.scoreText.text =+ score;
        },
        eatSandwich: function(player, sandwich){
            sandwich.kill();

            score += 5;

            this.scoreText.text =+ score;
        },
        killEnem: function(player, enem){
            if (player.body.velocity.y > 0) { 
                enem.kill();
                score += 5;
                this.physics.arcade.collide(this.player, this.mainWrench);
                this.scoreText.text =+ score;
            }
            else if (this.physics.arcade.collide(this.player, this.enemies)) { 
                player.kill();
                this.goToStateMain();
            } 
            
        },
        gameOver: function(player, dynamite) {
            player.kill(); 
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
    this.bestScore;
    this.wrench;
}

states.restartScreen.prototype = {
    preload: function() {
        this.load.image('BACK', 'assets/demo/EXAMPLE/GAME.png');
        this.load.image('btnGround', 'assets/demo/UI/RESTART.png');
        this.load.image('btnPlay', 'assets/demo/UI/RESTARTBUTTOM.png');
        this.load.image('wrench', 'assets/demo/GAME/wrench.png');
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
        this.text = this.game.add.text(game.world.width-500, game.world.height-710, '50');
        this.text.anchor.set(0.5);
        createText(this.text, 90);
        this.bestScore = this.add.text(470, 580, '50');
        createText(this.bestScore, 90);
        this.wrench = this.add.sprite(game.world.width-260, game.world.height-770, 'wrench');
        this.wrench.rotation = 0.6;
        this.wrench.scale.setTo(0.8,0.8);
        this.scoreText = this.game.add.text(370, 510, score);
        createText(this.scoreText, 90);
        
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
    
    
 