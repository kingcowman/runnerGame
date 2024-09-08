
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Collect from "../../../prefabs/Collect";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class key_william_cow extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// collect
		const collect = new Collect(scene, 236, -158, "williamcow");
		this.add(collect);

		// background_cow_4
		const background_cow_4 = scene.add.image(236, -30, "background_cow_4");
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
		const background_cow_5 = scene.add.image(76, -110, "background_cow_5");
		background_cow_5.scaleX = 0.04;
		background_cow_5.scaleY = 0.04;
		this.add(background_cow_5);

		// tilesprite_2
		const tilesprite_2 = scene.add.tileSprite(28, -62, 96, 32, "grass") as Phaser.GameObjects.TileSprite & { body: Phaser.Physics.Arcade.Body };
		tilesprite_2.setOrigin(0, 1);
		scene.physics.add.existing(tilesprite_2, false);
		tilesprite_2.body.setOffset(0, 16);
		tilesprite_2.body.setSize(96, 16, false);
		this.add(tilesprite_2);

		// tilesprite_3
		const tilesprite_3 = scene.add.tileSprite(-116, 32, 760, 48, "grass") as Phaser.GameObjects.TileSprite & { body: Phaser.Physics.Arcade.Body };
		tilesprite_3.setOrigin(0, 1);
		scene.physics.add.existing(tilesprite_3, false);
		tilesprite_3.body.pushable = false;
		tilesprite_3.body.immovable = true;
		tilesprite_3.body.setOffset(0, 16);
		tilesprite_3.body.setSize(640, 16, false);
		this.add(tilesprite_3);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(-100, 2, 16, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_1.visible = false;
		scene.physics.add.existing(rectangle_1, false);
		rectangle_1.body.pushable = false;
		rectangle_1.body.setSize(16, 16, false);
		rectangle_1.isFilled = true;
		this.add(rectangle_1);

		// lists
		const platforms = [tilesprite_2, tilesprite_3];
		const stairs = [rectangle_1];

		// collect (prefab fields)
		collect.key = "william_cow";

		this.platforms = platforms;
		this.stairs = stairs;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public platforms: Phaser.GameObjects.TileSprite[];
	private stairs: Phaser.GameObjects.Rectangle[];

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
