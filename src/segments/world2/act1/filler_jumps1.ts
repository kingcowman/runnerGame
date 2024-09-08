
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class filler_jumps1 extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(-116, 26, 320, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 320, 16), Phaser.Geom.Rectangle.Contains);
		rectangle_1.scaleX = 1.6;
		rectangle_1.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_1, false);
		rectangle_1.body.allowGravity = false;
		rectangle_1.body.checkCollision.down = false;
		rectangle_1.body.checkCollision.left = false;
		rectangle_1.body.checkCollision.right = false;
		rectangle_1.body.pushable = false;
		rectangle_1.body.immovable = true;
		rectangle_1.body.setSize(320, 16, false);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 15059871;
		rectangle_1.strokeColor = 15664389;
		this.add(rectangle_1);

		// rectangle_2
		const rectangle_2 = scene.add.rectangle(108, -158, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_2.scaleX = 2.5;
		rectangle_2.scaleY = 0.07;
		scene.physics.add.existing(rectangle_2, false);
		rectangle_2.body.pushable = false;
		rectangle_2.body.immovable = true;
		rectangle_2.body.setSize(128, 128, false);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 7028761;
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 65793;
		this.add(rectangle_2);

		// crate
		const crate = scene.add.image(-68, -24, "crate") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		crate.scaleX = 0.25;
		crate.scaleY = 0.25;
		scene.physics.add.existing(crate, false);
		crate.body.pushable = false;
		crate.body.immovable = true;
		crate.body.setSize(270, 270, false);
		this.add(crate);

		// crate_1
		const crate_1 = scene.add.image(92, -24, "crate") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		crate_1.scaleX = 0.25;
		crate_1.scaleY = 0.25;
		scene.physics.add.existing(crate_1, false);
		crate_1.body.pushable = false;
		crate_1.body.immovable = true;
		crate_1.body.setSize(270, 270, false);
		this.add(crate_1);

		// crate_3
		const crate_3 = scene.add.image(252, -24, "crate") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		crate_3.scaleX = 0.25;
		crate_3.scaleY = 0.25;
		scene.physics.add.existing(crate_3, false);
		crate_3.body.pushable = false;
		crate_3.body.immovable = true;
		crate_3.body.setSize(270, 270, false);
		this.add(crate_3);

		// lists
		const platforms = [rectangle_1, rectangle_2, crate, crate_3, crate_1];

		this.platforms = platforms;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public platforms: Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.Image>;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
