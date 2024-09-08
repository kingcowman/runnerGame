
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Collect from "../../../prefabs/Collect";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class key_neil_cow extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// collect
		const collect = new Collect(scene, 252, -30, "neilcow");
		collect.scaleX = 0.05;
		collect.scaleY = 0.05;
		this.add(collect);

		// background_cow_9
		const background_cow_9 = scene.add.image(252, -142, "background_cow_9");
		background_cow_9.scaleX = 0.03;
		background_cow_9.scaleY = 0.03;
		this.add(background_cow_9);

		// tilesprite
		const tilesprite = scene.add.tileSprite(204, -94, 96, 32, "grass") as Phaser.GameObjects.TileSprite & { body: Phaser.Physics.Arcade.Body };
		tilesprite.setOrigin(0, 1);
		scene.physics.add.existing(tilesprite, false);
		tilesprite.body.pushable = false;
		tilesprite.body.immovable = true;
		tilesprite.body.setOffset(0, 16);
		tilesprite.body.setSize(96, 16, false);
		this.add(tilesprite);

		// tilesprite_2
		const tilesprite_2 = scene.add.tileSprite(-116, 32, 760, 48, "grass") as Phaser.GameObjects.TileSprite & { body: Phaser.Physics.Arcade.Body };
		tilesprite_2.setOrigin(0, 1);
		scene.physics.add.existing(tilesprite_2, false);
		tilesprite_2.body.pushable = false;
		tilesprite_2.body.immovable = true;
		tilesprite_2.body.setOffset(0, 16);
		tilesprite_2.body.setSize(640, 16, false);
		this.add(tilesprite_2);

		// lists
		const platforms = [tilesprite, tilesprite_2];

		// collect (prefab fields)
		collect.key = "neil_cow";

		this.platforms = platforms;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public platforms: Phaser.GameObjects.TileSprite[];

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
