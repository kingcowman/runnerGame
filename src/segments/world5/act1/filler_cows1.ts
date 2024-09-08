
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class filler_cows1 extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// tilesprite_1
		const tilesprite_1 = scene.add.tileSprite(-116, 32, 760, 48, "grass") as Phaser.GameObjects.TileSprite & { body: Phaser.Physics.Arcade.Body };
		tilesprite_1.setOrigin(0, 1);
		scene.physics.add.existing(tilesprite_1, false);
		tilesprite_1.body.pushable = false;
		tilesprite_1.body.immovable = true;
		tilesprite_1.body.setOffset(0, 16);
		tilesprite_1.body.setSize(760, 32, false);
		this.add(tilesprite_1);

		// background_cow_4
		const background_cow_4 = scene.add.image(236, -158, "background_cow_6");
		background_cow_4.scaleX = 0.04;
		background_cow_4.scaleY = 0.04;
		this.add(background_cow_4);

		// tilesprite
		const tilesprite = scene.add.tileSprite(188, -110, 96, 32, "grass") as Phaser.GameObjects.TileSprite & { body: Phaser.Physics.Arcade.Body };
		tilesprite.setOrigin(0, 1);
		scene.physics.add.existing(tilesprite, false);
		tilesprite.body.pushable = false;
		tilesprite.body.immovable = true;
		tilesprite.body.setOffset(0, 16);
		tilesprite.body.setSize(96, 16, false);
		this.add(tilesprite);

		// background_cow_5
		const background_cow_5 = scene.add.image(76, -110, "background_cow_8");
		background_cow_5.scaleX = 0.04;
		background_cow_5.scaleY = 0.04;
		this.add(background_cow_5);

		// tilesprite_2
		const tilesprite_2 = scene.add.tileSprite(28, -62, 96, 32, "grass") as Phaser.GameObjects.TileSprite & { body: Phaser.Physics.Arcade.Body };
		tilesprite_2.setOrigin(0, 1);
		scene.physics.add.existing(tilesprite_2, false);
		tilesprite_2.body.pushable = false;
		tilesprite_2.body.immovable = true;
		tilesprite_2.body.setOffset(0, 16);
		tilesprite_2.body.setSize(96, 16, false);
		this.add(tilesprite_2);

		// background_cow
		const background_cow = scene.add.image(396, -110, "background_cow_7");
		background_cow.scaleX = 0.04;
		background_cow.scaleY = 0.04;
		this.add(background_cow);

		// tilesprite_3
		const tilesprite_3 = scene.add.tileSprite(348, -62, 96, 32, "grass") as Phaser.GameObjects.TileSprite & { body: Phaser.Physics.Arcade.Body };
		tilesprite_3.setOrigin(0, 1);
		scene.physics.add.existing(tilesprite_3, false);
		tilesprite_3.body.pushable = false;
		tilesprite_3.body.immovable = true;
		tilesprite_3.body.setOffset(0, 16);
		tilesprite_3.body.setSize(96, 16, false);
		this.add(tilesprite_3);

		// lists
		const platforms = [tilesprite_1, tilesprite_2, tilesprite, tilesprite_3];

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
