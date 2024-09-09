
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Collect from "../../../prefabs/Collect";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class filler_jumps3 extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(-116, 26, 960, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 640, 16), Phaser.Geom.Rectangle.Contains);
		rectangle_1.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_1, false);
		rectangle_1.body.allowGravity = false;
		rectangle_1.body.checkCollision.down = false;
		rectangle_1.body.checkCollision.left = false;
		rectangle_1.body.checkCollision.right = false;
		rectangle_1.body.pushable = false;
		rectangle_1.body.immovable = true;
		rectangle_1.body.setSize(960, 16, false);
		rectangle_1.isFilled = true;
		rectangle_1.strokeColor = 15664389;
		this.add(rectangle_1);

		// soda_pallette
		const soda_pallette = scene.add.image(-4, -14, "soda_pallette") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		soda_pallette.scaleX = 0.2;
		soda_pallette.scaleY = 0.2;
		scene.physics.add.existing(soda_pallette, false);
		soda_pallette.body.checkCollision.down = false;
		soda_pallette.body.checkCollision.left = false;
		soda_pallette.body.checkCollision.right = false;
		soda_pallette.body.pushable = false;
		soda_pallette.body.immovable = true;
		soda_pallette.body.setOffset(226, 411);
		soda_pallette.body.setSize(544, 192, false);
		this.add(soda_pallette);

		// rotissrie
		const rotissrie = scene.add.image(604, -62, "rotissrie") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		rotissrie.scaleX = 0.2;
		rotissrie.scaleY = 0.2;
		scene.physics.add.existing(rotissrie, false);
		rotissrie.body.pushable = false;
		rotissrie.body.immovable = true;
		rotissrie.body.setSize(1024, 1024, false);
		this.add(rotissrie);

		// soda_pallette_1
		const soda_pallette_1 = scene.add.image(300, -14, "soda_pallette") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		soda_pallette_1.scaleX = 0.2;
		soda_pallette_1.scaleY = 0.2;
		scene.physics.add.existing(soda_pallette_1, false);
		soda_pallette_1.body.checkCollision.down = false;
		soda_pallette_1.body.checkCollision.left = false;
		soda_pallette_1.body.checkCollision.right = false;
		soda_pallette_1.body.pushable = false;
		soda_pallette_1.body.immovable = true;
		soda_pallette_1.body.setOffset(227, 501);
		soda_pallette_1.body.setSize(544, 192, false);
		this.add(soda_pallette_1);

		// soda_pallette_2
		const soda_pallette_2 = scene.add.image(300, -62, "soda_pallette") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		soda_pallette_2.scaleX = 0.2;
		soda_pallette_2.scaleY = 0.2;
		scene.physics.add.existing(soda_pallette_2, false);
		soda_pallette_2.body.checkCollision.down = false;
		soda_pallette_2.body.checkCollision.left = false;
		soda_pallette_2.body.checkCollision.right = false;
		soda_pallette_2.body.pushable = false;
		soda_pallette_2.body.immovable = true;
		soda_pallette_2.body.setOffset(248, 429);
		soda_pallette_2.body.setSize(544, 192, false);
		this.add(soda_pallette_2);

		// collect
		const collect = new Collect(scene, 604, -206, "atlas", "egg1.png");
		collect.scaleX = 0.8;
		collect.scaleY = 0.8;
		collect.body.setOffset(24, 24);
		collect.body.setSize(-16, -16, false);
		this.add(collect);

		// lists
		const platforms = [rectangle_1, soda_pallette_2, soda_pallette_1, rotissrie, soda_pallette];

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
