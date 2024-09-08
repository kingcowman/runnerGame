
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class filler_jumps4 extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(-116, 26, 320, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 320, 16), Phaser.Geom.Rectangle.Contains);
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
		rectangle_1.strokeColor = 15664389;
		this.add(rectangle_1);

		// rectangle_2
		const rectangle_2 = scene.add.rectangle(76, -110, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_2.scaleX = 0.7677231108949287;
		rectangle_2.scaleY = 0.14621492510814693;
		scene.physics.add.existing(rectangle_2, false);
		rectangle_2.body.setSize(128, 128, false);
		rectangle_2.isFilled = true;
		this.add(rectangle_2);

		// llama4
		const llama4 = scene.add.image(-20, -46, "llama4") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		llama4.scaleX = 0.15;
		llama4.scaleY = 0.15;
		scene.physics.add.existing(llama4, false);
		llama4.body.checkCollision.down = false;
		llama4.body.checkCollision.left = false;
		llama4.body.checkCollision.right = false;
		llama4.body.setOffset(565, 122);
		llama4.body.setSize(300, 240, false);
		this.add(llama4);

		// rectangle_3
		const rectangle_3 = scene.add.rectangle(-20, -46, 64, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_3.visible = false;
		scene.physics.add.existing(rectangle_3, false);
		rectangle_3.body.pushable = false;
		rectangle_3.body.immovable = true;
		rectangle_3.body.setSize(48, 16, false);
		rectangle_3.isFilled = true;
		this.add(rectangle_3);

		// lists
		const platforms = [rectangle_1, rectangle_2, llama4, rectangle_3];

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
