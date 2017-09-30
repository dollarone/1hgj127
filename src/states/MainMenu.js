class MainMenu extends Phaser.State {

	create() {

		this.introLabel = this.add.text(this.game.world.width/2 - 360, 10, '', { fontSize: '20px', fill: '#000'})
		this.introLabel.text = "You are the head of a game studio.\nYou are also incredibly busy.\n\nYou need to make some decisions on your upcoming game," +
		"\nand you've (again) left these decisions to the last minute." +
		"\n\nIt will be a miracle if the game is ready on time. There will be no time for QA" +
		"\nor optimisation, but if you can just choose a player sprite RIGHT NOW,"+ 
		"\nit might just make the deadline:"


		this.playerSpriteLabel = this.add.text(this.game.world.width/2 - 360, 300, 'Player sprite:', { fontSize: '20px', fill: '#000'})

        this.startX = 200
        this.startY = 300
        this.inc = 50

		this.playerSprite1 = this.game.add.button(this.startX + this.inc, this.startY, 'chars2', this.playerSpriteSelect1, this, 0, 0, 0)
		this.playerSprite2 = this.game.add.button(this.startX + this.inc*2, this.startY, 'bitslap', this.playerSpriteSelect2, this, 0, 0, 0)
		this.playerSprite2.scale.setTo(2)
		this.playerSprite3 = this.game.add.button(this.startX + this.inc*3, this.startY, 'caveman', this.playerSpriteSelect3, this, 0, 0, 0)
		this.playerSprite4 = this.game.add.button(this.startX + this.inc*4, this.startY, 'bigeyes', this.playerSpriteSelect4, this, 0, 0, 0)
		this.playerSprite4.scale.setTo(0.2)
		
		this.playerSprite1.input.useHandCursor = true
		this.playerSprite2.input.useHandCursor = true
		this.playerSprite3.input.useHandCursor = true
		this.playerSprite4.input.useHandCursor = true

		this.startY = 400
		/*

		this.tilesSprite1 = this.game.add.button(this.startX + this.inc, this.startY, 'chars2', this.tilesSpriteSelect1, this, 0, 0, 0)
		this.tilesSprite2 = this.game.add.button(this.startX + this.inc*2, this.startY, 'bitslap', this.tilesSpriteSelect2, this, 0, 0, 0)
		this.tilesSprite2.scale.setTo(2)
		this.tilesSprite3 = this.game.add.button(this.startX + this.inc*3, this.startY, 'caveman', this.tilesSpriteSelect3, this, 0, 0, 0)
		
		this.tilesSprite1.input.useHandCursor = true
		this.tilesSprite2.input.useHandCursor = true
		this.tilesSprite3.input.useHandCursor = true

/*		this.tileSpritesLabel = this.add.text(this.game.world.width/2 - 360, 350, 'Environment tiles:', { fontSize: '20px', fill: '#000'})
		this.tileSprites1 = this.game.add.sprite(250, 350, 'chars')
		this.tileSprites1.frame = 2
		this.tileSprites2 = this.game.add.sprite(300, 350, 'chars')

		this.monsterSpriteLabel = this.add.text(this.game.world.width/2 - 360, 400, 'Monster sprite:', { fontSize: '20px', fill: '#000'})
		this.monsterSprite1 = this.game.add.sprite(250, 400, 'chars')
		this.monsterSprite1.frame = 2
		this.monsterSprite2 = this.game.add.sprite(300, 400, 'chars')

		this.objectiveSpriteLabel = this.add.text(this.game.world.width/2 - 360, 450, 'Objective sprite:', { fontSize: '20px', fill: '#000'})
		this.objectiveSprite1 = this.game.add.sprite(250, 450, 'chars')
		this.objectiveSprite1.frame = 2
		this.objectiveSprite2 = this.game.add.sprite(300, 450, 'chars')

		this.specialLabel = this.add.text(this.game.world.width/2 - 360, 500, 'Special feature:', { fontSize: '20px', fill: '#000'})
		this.special1 = this.game.add.sprite(250, 500, 'chars')
		this.special1.frame = 2
		this.special2 = this.game.add.sprite(300, 500, 'chars')
		*/
		this.startButton = this.game.add.button(this.game.world.width/2 , 500, 'button', this.startGame, this, 0, 2, 1, 0)

        this.playerSelectGraphics = this.game.add.graphics(0, 0)//this.game.height - 300)
        this.playerSelectGraphics.lineStyle(2, 0x323c39, 1)
        //this.graphics.beginFill(0x4b692f, 1)
        this.playerSelectGraphics.drawRect(this.playerSprite1.x-4, this.playerSprite1.y-4, 40, 40)
/*
        this.tilesSelectGraphics = this.game.add.graphics(0, 0)//this.game.height - 300)
        this.tilesSelectGraphics.lineStyle(2, 0x323c39, 1)
        //this.graphics.beginFill(0x4b692f, 1)
        this.tilesSelectGraphics.drawRect(this.tilesSprite1.x-4, this.tilesSprite1.y-4, 40, 40)
*/
        this.playerSprite = "chars2"
        this.tilesSprite = 1
        this.notStarted = true

	}
	tilesSpriteSelect1() {	
		this.tilesSprite = 1
		this.tilesSpriteSelect(this.tilesSprite1.x)
	} 
	tilesSpriteSelect2() {	
		this.tilesSprite = 2
		this.tilesSpriteSelect(this.tilesSprite2.x)
	}
	tilesSpriteSelect3() {	
		this.tilesSprite = 3
		this.tilesSpriteSelect(this.tilesSprite3.x)
	}
	tilesSpriteSelect(x) {
		this.tilesSelectGraphics.x = x  - this.startX - 50 - 4
 
	}
	playerSpriteSelect1() {	
		this.playerSprite = "chars2"
		this.playerSpriteSelect(this.playerSprite1.x)
	} 
	playerSpriteSelect2() {	
		this.playerSprite = "bitslap"
		this.playerSpriteSelect(this.playerSprite2.x)
	}
	playerSpriteSelect3() {	
		this.playerSprite = "caveman"
		this.playerSpriteSelect(this.playerSprite3.x)
	}
	playerSpriteSelect4() {	
		this.playerSprite = "bigeyes"
		this.playerSpriteSelect(this.playerSprite4.x)
	}
	playerSpriteSelect(x) {
		this.playerSelectGraphics.x = x  - this.startX - 50 - 4
 
	}

	startGame() {
		if( this.notStarted) {
			this.notStarted = false
			this.game.state.start("Main", true, false, this.playerSprite)
		}
	}

}

export default MainMenu
