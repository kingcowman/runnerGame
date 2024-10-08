
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Collect from "../../../prefabs/Collect";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class key_ring1 extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(-116, 26, 1000, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 320, 16), Phaser.Geom.Rectangle.Contains);
		rectangle_1.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_1, false);
		rectangle_1.body.allowGravity = false;
		rectangle_1.body.checkCollision.down = false;
		rectangle_1.body.checkCollision.left = false;
		rectangle_1.body.checkCollision.right = false;
		rectangle_1.body.pushable = false;
		rectangle_1.body.immovable = true;
		rectangle_1.body.setSize(1000, 16, false);
		rectangle_1.isFilled = true;
		rectangle_1.strokeColor = 15664389;
		this.add(rectangle_1);

		// collect
		const collect = new Collect(scene, 684, -94, "ring1");
		this.add(collect);

		// nineslice_1
		const nineslice_1 = scene.add.nineslice(380, 18, "stone1", undefined, 1000, 16, 4, 4, 4, 4) as Phaser.GameObjects.NineSlice & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(nineslice_1, false);
		nineslice_1.body.pushable = false;
		nineslice_1.body.immovable = true;
		nineslice_1.body.setSize(1000, 16, false);
		this.add(nineslice_1);

		// nineslice
		const nineslice = scene.add.nineslice(460, -62, "stone1", undefined, 500, 16, 4, 4, 4, 4) as Phaser.GameObjects.NineSlice & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(nineslice, false);
		nineslice.body.mass = 10;
		nineslice.body.checkCollision.down = false;
		nineslice.body.pushable = false;
		nineslice.body.immovable = true;
		nineslice.body.setSize(500, 16, false);
		this.add(nineslice);

		// lists
		const platforms = [rectangle_1, nineslice_1, nineslice];

		// collect (prefab fields)
		collect.key = "ring1";

		this.platforms = platforms;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public platforms: Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.NineSlice>;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
