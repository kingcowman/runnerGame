
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class filler_jumps2 extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// floor
		const floor = scene.add.rectangle(-116, 26, 250, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		floor.setInteractive(new Phaser.Geom.Rectangle(0, 0, 320, 16), Phaser.Geom.Rectangle.Contains);
		floor.setOrigin(0, 1);
		scene.physics.add.existing(floor, false);
		floor.body.allowGravity = false;
		floor.body.checkCollision.down = false;
		floor.body.checkCollision.left = false;
		floor.body.checkCollision.right = false;
		floor.body.pushable = false;
		floor.body.immovable = true;
		floor.body.setSize(320, 16, false);
		floor.isFilled = true;
		floor.strokeColor = 15664389;
		this.add(floor);

		// llama4
		const llama4 = scene.add.image(64, -46, "llama1") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		llama4.scaleX = 0.15;
		llama4.scaleY = 0.15;
		scene.physics.add.existing(llama4, false);
		llama4.body.checkCollision.down = false;
		llama4.body.checkCollision.left = false;
		llama4.body.checkCollision.right = false;
		llama4.body.setOffset(139, 119);
		llama4.body.setSize(300, 220, false);
		this.add(llama4);

		// rectangle_2
		const rectangle_2 = scene.add.rectangle(64, -46, 64, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_2.visible = false;
		scene.physics.add.existing(rectangle_2, false);
		rectangle_2.body.pushable = false;
		rectangle_2.body.immovable = true;
		rectangle_2.body.setSize(48, 16, false);
		rectangle_2.isFilled = true;
		this.add(rectangle_2);

		// lists
		const platforms = [floor, llama4, rectangle_2];
		const stairs: Array<any> = [];

		this.platforms = platforms;
		this.stairs = stairs;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public platforms: Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.Image>;
	private stairs: Array<any>;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
