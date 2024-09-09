
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class filler_decoration extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(-116, 26, 1280, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 320, 16), Phaser.Geom.Rectangle.Contains);
		rectangle_1.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_1, false);
		rectangle_1.body.allowGravity = false;
		rectangle_1.body.checkCollision.down = false;
		rectangle_1.body.checkCollision.left = false;
		rectangle_1.body.checkCollision.right = false;
		rectangle_1.body.pushable = false;
		rectangle_1.body.immovable = true;
		rectangle_1.body.setSize(480, 16, false);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 6579300;
		rectangle_1.strokeColor = 15664389;
		this.add(rectangle_1);

		// cave_platform
		const cave_platform = scene.add.image(316, -30, "cave_platform") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		cave_platform.scaleX = 0.4;
		cave_platform.scaleY = 0.4;
		scene.physics.add.existing(cave_platform, false);
		cave_platform.body.pushable = false;
		cave_platform.body.immovable = true;
		cave_platform.body.setOffset(18, 66);
		cave_platform.body.setSize(208, 48, false);
		this.add(cave_platform);

		// cave_platform_2
		const cave_platform_2 = scene.add.image(236, -30, "cave_platform") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		cave_platform_2.scaleX = 0.4;
		cave_platform_2.scaleY = 0.4;
		scene.physics.add.existing(cave_platform_2, false);
		cave_platform_2.body.pushable = false;
		cave_platform_2.body.immovable = true;
		cave_platform_2.body.setOffset(18, 66);
		cave_platform_2.body.setSize(208, 48, false);
		this.add(cave_platform_2);

		// cave_platform_3
		const cave_platform_3 = scene.add.image(476, -30, "cave_platform") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		cave_platform_3.scaleX = 0.4;
		cave_platform_3.scaleY = 0.4;
		scene.physics.add.existing(cave_platform_3, false);
		cave_platform_3.body.pushable = false;
		cave_platform_3.body.immovable = true;
		cave_platform_3.body.setOffset(18, 66);
		cave_platform_3.body.setSize(208, 48, false);
		this.add(cave_platform_3);

		// cave_platform_4
		const cave_platform_4 = scene.add.image(396, -30, "cave_platform") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		cave_platform_4.scaleX = 0.4;
		cave_platform_4.scaleY = 0.4;
		scene.physics.add.existing(cave_platform_4, false);
		cave_platform_4.body.pushable = false;
		cave_platform_4.body.immovable = true;
		cave_platform_4.body.setOffset(18, 66);
		cave_platform_4.body.setSize(208, 48, false);
		this.add(cave_platform_4);

		// cave_platform_5
		const cave_platform_5 = scene.add.image(636, -30, "cave_platform") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		cave_platform_5.scaleX = 0.4;
		cave_platform_5.scaleY = 0.4;
		scene.physics.add.existing(cave_platform_5, false);
		cave_platform_5.body.pushable = false;
		cave_platform_5.body.immovable = true;
		cave_platform_5.body.setOffset(18, 66);
		cave_platform_5.body.setSize(208, 48, false);
		this.add(cave_platform_5);

		// cave_platform_6
		const cave_platform_6 = scene.add.image(556, -30, "cave_platform") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		cave_platform_6.scaleX = 0.4;
		cave_platform_6.scaleY = 0.4;
		scene.physics.add.existing(cave_platform_6, false);
		cave_platform_6.body.pushable = false;
		cave_platform_6.body.immovable = true;
		cave_platform_6.body.setOffset(18, 66);
		cave_platform_6.body.setSize(208, 48, false);
		this.add(cave_platform_6);

		// cave_platform_7
		const cave_platform_7 = scene.add.image(796, -30, "cave_platform") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		cave_platform_7.scaleX = 0.4;
		cave_platform_7.scaleY = 0.4;
		scene.physics.add.existing(cave_platform_7, false);
		cave_platform_7.body.pushable = false;
		cave_platform_7.body.immovable = true;
		cave_platform_7.body.setOffset(18, 66);
		cave_platform_7.body.setSize(208, 48, false);
		this.add(cave_platform_7);

		// cave_platform_8
		const cave_platform_8 = scene.add.image(716, -30, "cave_platform") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		cave_platform_8.scaleX = 0.4;
		cave_platform_8.scaleY = 0.4;
		scene.physics.add.existing(cave_platform_8, false);
		cave_platform_8.body.pushable = false;
		cave_platform_8.body.immovable = true;
		cave_platform_8.body.setOffset(18, 66);
		cave_platform_8.body.setSize(208, 48, false);
		this.add(cave_platform_8);

		// cave_platform_9
		const cave_platform_9 = scene.add.image(956, -30, "cave_platform") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		cave_platform_9.scaleX = 0.4;
		cave_platform_9.scaleY = 0.4;
		scene.physics.add.existing(cave_platform_9, false);
		cave_platform_9.body.pushable = false;
		cave_platform_9.body.immovable = true;
		cave_platform_9.body.setOffset(18, 66);
		cave_platform_9.body.setSize(208, 48, false);
		this.add(cave_platform_9);

		// cave_platform_10
		const cave_platform_10 = scene.add.image(876, -30, "cave_platform") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		cave_platform_10.scaleX = 0.4;
		cave_platform_10.scaleY = 0.4;
		scene.physics.add.existing(cave_platform_10, false);
		cave_platform_10.body.pushable = false;
		cave_platform_10.body.immovable = true;
		cave_platform_10.body.setOffset(18, 66);
		cave_platform_10.body.setSize(208, 48, false);
		this.add(cave_platform_10);

		// lists
		const platforms = [rectangle_1, cave_platform, cave_platform_10, cave_platform_9, cave_platform_8, cave_platform_7, cave_platform_6, cave_platform_5, cave_platform_4, cave_platform_3, cave_platform_2];

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
