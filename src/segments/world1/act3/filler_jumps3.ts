
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class filler_jumps3 extends Phaser.GameObjects.Container {

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

		// llama4
		const llama4 = scene.add.image(76, -46, "llama5") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		llama4.scaleX = 0.15;
		llama4.scaleY = 0.15;
		scene.physics.add.existing(llama4, false);
		llama4.body.checkCollision.down = false;
		llama4.body.checkCollision.left = false;
		llama4.body.checkCollision.right = false;
		llama4.body.setOffset(604, 115);
		llama4.body.setSize(352, 208, false);
		this.add(llama4);

		// rectangle_2
		const rectangle_2 = scene.add.rectangle(-20, -46, 64, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_2.visible = false;
		scene.physics.add.existing(rectangle_2, false);
		rectangle_2.body.pushable = false;
		rectangle_2.body.immovable = true;
		rectangle_2.body.setSize(48, 16, false);
		rectangle_2.isFilled = true;
		this.add(rectangle_2);

		// llama
		const llama = scene.add.image(-36, -46, "llama3") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		llama.scaleX = 0.15;
		llama.scaleY = 0.15;
		scene.physics.add.existing(llama, false);
		llama.body.checkCollision.down = false;
		llama.body.checkCollision.left = false;
		llama.body.checkCollision.right = false;
		llama.body.setOffset(182, 123);
		llama.body.setSize(336, 224, false);
		this.add(llama);

		// rectangle
		const rectangle = scene.add.rectangle(60, -46, 64, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle.visible = false;
		scene.physics.add.existing(rectangle, false);
		rectangle.body.pushable = false;
		rectangle.body.immovable = true;
		rectangle.body.setSize(48, 16, false);
		rectangle.isFilled = true;
		this.add(rectangle);

		// lists
		const platforms = [rectangle_1, rectangle, llama, rectangle_2, llama4];

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
