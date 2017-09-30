class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
		this.game.load.spritesheet('logo-tiles', 'assets/gfx/logo-tiles.png', 17, 16)
		this.game.load.spritesheet('chars', 'assets/gfx/chars.png', 32, 32)
		this.game.load.spritesheet('chars2', 'assets/gfx/chars2.png', 32, 32)
		this.game.load.spritesheet('button', 'assets/gfx/buttons.png', 64, 32)
		this.game.load.spritesheet('caveman', 'assets/gfx/spritesheet_caveman2.png', 32, 32)
		this.game.load.spritesheet('bitslap', 'assets/gfx/bitslap-minild62.png', 16, 16)
		this.game.load.spritesheet('bigeyes', 'assets/gfx/bigeyes.png', 100, 160)
		this.game.load.spritesheet('tiles', 'assets/gfx/tiles.png', 16, 16)
		this.game.load.audio('dollarone', 'assets/sfx/dollarone.ogg')
		this.game.load.image('house', 'assets/gfx/house.png')
		this.game.load.image('onehourgamejamlogo', 'assets/gfx/onehourgamejamlogo.png')
		this.game.load.audio('onehourgamejamsplash', 'assets/sfx/onehourgamejamsplash.ogg')
		//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json')
		this.game.load.tilemap('level', 'assets/tilemaps/level.json', null, Phaser.Tilemap.TILED_JSON)
	}

	create() {
		//this.game.state.start("Logo")
		this.game.state.start("Logo", true, false, "#98FB98")
	}

}

export default Preload
