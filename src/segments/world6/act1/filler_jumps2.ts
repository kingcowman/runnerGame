
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class filler_jumps2 extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 484, y ?? 176);

		// floor
		const floor = scene.add.rectangle(-116, 26, 320, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
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

		// nineslice_1
		const nineslice_1 = scene.add.nineslice(512, 18, "stone1", undefined, 2000, 16, 4, 4, 4, 4) as Phaser.GameObjects.NineSlice & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(nineslice_1, false);
		nineslice_1.body.pushable = false;
		nineslice_1.body.immovable = true;
		nineslice_1.body.setSize(3200, 16, false);
		this.add(nineslice_1);

		// nineslice
		const nineslice = scene.add.nineslice(128, -84, "stone1", undefined, 100, 16, 4, 4, 4, 4) as Phaser.GameObjects.NineSlice & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(nineslice, false);
		nineslice.body.bounce.y = 0.1;
		nineslice.body.mass = 3;
		nineslice.body.setSize(100, 16, false);
		this.add(nineslice);

		// nineslice_2
		const nineslice_2 = scene.add.nineslice(428, -84, "stone1", undefined, 100, 16, 4, 4, 4, 4) as Phaser.GameObjects.NineSlice & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(nineslice_2, false);
		nineslice_2.body.mass = 3;
		nineslice_2.body.setSize(100, 16, false);
		this.add(nineslice_2);

		// nineslice_3
		const nineslice_3 = scene.add.nineslice(-172, -84, "stone1", undefined, 100, 16, 4, 4, 4, 4) as Phaser.GameObjects.NineSlice & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(nineslice_3, false);
		nineslice_3.body.bounce.y = 0.1;
		nineslice_3.body.mass = 3;
		nineslice_3.body.setSize(100, 16, false);
		this.add(nineslice_3);

		// nineslice_4
		const nineslice_4 = scene.add.nineslice(280, -84, "stone1", undefined, 100, 16, 4, 4, 4, 4) as Phaser.GameObjects.NineSlice & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(nineslice_4, false);
		nineslice_4.body.bounce.y = 0.1;
		nineslice_4.body.mass = 3;
		nineslice_4.body.setSize(100, 16, false);
		this.add(nineslice_4);

		// nineslice_5
		const nineslice_5 = scene.add.nineslice(580, -84, "stone1", undefined, 100, 16, 4, 4, 4, 4) as Phaser.GameObjects.NineSlice & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(nineslice_5, false);
		nineslice_5.body.mass = 3;
		nineslice_5.body.setSize(100, 16, false);
		this.add(nineslice_5);

		// nineslice_6
		const nineslice_6 = scene.add.nineslice(-20, -84, "stone1", undefined, 100, 16, 4, 4, 4, 4) as Phaser.GameObjects.NineSlice & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(nineslice_6, false);
		nineslice_6.body.bounce.y = 0.1;
		nineslice_6.body.mass = 3;
		nineslice_6.body.setSize(100, 16, false);
		this.add(nineslice_6);

		// lists
		const platforms = [floor, nineslice_1, nineslice_6, nineslice_5, nineslice_4, nineslice_3, nineslice_2, nineslice];
		const stairs: Array<any> = [];

		this.platforms = platforms;
		this.stairs = stairs;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public platforms: Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.NineSlice>;
	private stairs: Array<any>;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
