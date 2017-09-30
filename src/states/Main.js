import Map from 'objects/Map'
import Particle from 'objects/Particle'
import Player from 'objects/Player'

class Main extends Phaser.State {

	init(playerSprite = 'chars', timeout = 3.5) {
		this.playerSprite = playerSprite
		this.timeout = timeout
	}
	create() {

		this.game.physics.startSystem(Phaser.Physics.ARCADE)

		this.game.stage.backgroundColor = '#68f'

		this.step = -1

		this.statusLabel = this.add.text(this.game.world.width/2 - 360, 10, '',{ fontSize: '80px', fill: '#000'})
		this.statusLabel.visible = false
		this.timeLabel = this.add.text(700, 10, '')
		this.speed = 0

        this.gameover = false

        this.rKey = this.game.input.keyboard.addKey(Phaser.Keyboard.R)
    	this.rKey.onDown.add(this.restart, this)
    	this.map = new Map(this.game)

    	this.player = new Player(this.game, 50, 200, this.playerSprite)
    	this.cursors = this.game.input.keyboard.createCursorKeys()
    	this.game.camera.follow(this.player.sprite)

		this.exit = this.game.add.sprite(3100, this.player.sprite.y+168, "house")
		this.game.physics.enable(this.exit, Phaser.Physics.ARCADE)


	}

	restart() {
		this.game.state.restart()
	}

	endgame() {
		this.gameover = true
		this.statusLabel.text = "Yay! You win!"
		this.statusLabel.x = this.player.sprite.x - 500
		this.statusLabel.visible = true
		this.player.sprite.body.velocity.x = 0
		this.player.sprite.body.velocity.y = 0
		this.player.sprite.frame = this.player.standFrame
	}
	killparticle(part, wall) {
		part.kill()
	}
	update() {
		this.step += 1

		this.hitPlatform = this.game.physics.arcade.collide(this.player.sprite, this.map.blockedLayer)
		this.hitPlatform2 = this.game.physics.arcade.overlap(this.player.sprite, this.exit, this.endgame, null, this)
//		this.game.physics.arcade.collide(this.particles, this.bucket.walls, this.killparticle, null, this);
		if (this.gameover) {
			return
		}

		this.player.update(this.cursors, this.hitPlatform)
		
//		this.timeUsed.setTime(this.game.time.totalElapsedSeconds());
		//this.timeLabel.text = "Time spent: " + (this.game.time.events.duration/ 1000).toFixed(1) + "s"


		
	}

	
	render() {
	}
}

export default Main