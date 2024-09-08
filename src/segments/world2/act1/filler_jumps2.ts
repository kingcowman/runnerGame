
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class filler_jumps2 extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// rectangle_3
		const rectangle_3 = scene.add.rectangle(-116, 26, 320, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 320, 16), Phaser.Geom.Rectangle.Contains);
		rectangle_3.scaleX = 1.6;
		rectangle_3.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_3, false);
		rectangle_3.body.allowGravity = false;
		rectangle_3.body.checkCollision.down = false;
		rectangle_3.body.checkCollision.left = false;
		rectangle_3.body.checkCollision.right = false;
		rectangle_3.body.pushable = false;
		rectangle_3.body.immovable = true;
		rectangle_3.body.setSize(320, 16, false);
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 15059871;
		rectangle_3.strokeColor = 15664389;
		this.add(rectangle_3);

		// rectangle_4
		const rectangle_4 = scene.add.rectangle(-36, -70, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_4.scaleY = 0.07;
		scene.physics.add.existing(rectangle_4, false);
		rectangle_4.body.pushable = false;
		rectangle_4.body.immovable = true;
		rectangle_4.body.setSize(128, 128, false);
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 7028761;
		rectangle_4.isStroked = true;
		rectangle_4.strokeColor = 65793;
		this.add(rectangle_4);

		// crate_3
		const crate_3 = scene.add.image(252, -24, "crate") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		crate_3.scaleX = 0.25;
		crate_3.scaleY = 0.25;
		scene.physics.add.existing(crate_3, false);
		crate_3.body.pushable = false;
		crate_3.body.immovable = true;
		crate_3.body.setSize(270, 270, false);
		this.add(crate_3);

		// rectangle_5
		const rectangle_5 = scene.add.rectangle(124, -22, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_5.scaleY = 0.07;
		scene.physics.add.existing(rectangle_5, false);
		rectangle_5.body.setSize(128, 128, false);
		rectangle_5.isFilled = true;
		rectangle_5.fillColor = 7028761;
		rectangle_5.isStroked = true;
		rectangle_5.strokeColor = 65793;
		this.add(rectangle_5);

		// rectangle
		const rectangle = scene.add.rectangle(124, -118, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle.scaleY = 0.07;
		scene.physics.add.existing(rectangle, false);
		rectangle.body.setSize(128, 128, false);
		rectangle.isFilled = true;
		rectangle.fillColor = 7028761;
		rectangle.isStroked = true;
		rectangle.strokeColor = 65793;
		this.add(rectangle);

		// rectangle_2
		const rectangle_2 = scene.add.rectangle(284, -102, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_2.scaleY = 0.07;
		scene.physics.add.existing(rectangle_2, false);
		rectangle_2.body.setSize(128, 128, false);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 7028761;
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 65793;
		this.add(rectangle_2);

		// lists
		const platforms = [rectangle_2, rectangle, rectangle_5, crate_3, rectangle_4, rectangle_3];

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
