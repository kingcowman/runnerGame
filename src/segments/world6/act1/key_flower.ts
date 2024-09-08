
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Collect from "../../../prefabs/Collect";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class key_flower extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// collect
		const collect = new Collect(scene, 652, -158, "flowers");
		this.add(collect);

		// nineslice_1
		const nineslice_1 = scene.add.nineslice(380, 18, "stone1", undefined, 1000, 16, 4, 4, 4, 4) as Phaser.GameObjects.NineSlice & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(nineslice_1, false);
		nineslice_1.body.pushable = false;
		nineslice_1.body.immovable = true;
		nineslice_1.body.setSize(3200, 16, false);
		this.add(nineslice_1);

		// nineslice_2
		const nineslice_2 = scene.add.nineslice(652, -94, "stone1", undefined, 100, 16, 4, 4, 4, 4) as Phaser.GameObjects.NineSlice & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(nineslice_2, false);
		nineslice_2.body.mass = 3;
		nineslice_2.body.pushable = false;
		nineslice_2.body.immovable = true;
		nineslice_2.body.setSize(100, 16, false);
		this.add(nineslice_2);

		// nineslice
		const nineslice = scene.add.nineslice(348, -94, "stone1", undefined, 500, 16, 4, 4, 4, 4) as Phaser.GameObjects.NineSlice & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(nineslice, false);
		nineslice.body.mass = 2;
		nineslice.body.setSize(500, 16, false);
		this.add(nineslice);

		// lists
		const platforms = [nineslice_1, nineslice_2, nineslice];

		// collect (prefab fields)
		collect.key = "flower";

		this.platforms = platforms;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public platforms: Phaser.GameObjects.NineSlice[];

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
