
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class filler_jumps1 extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(-116, 26, 480, 16) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
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
		const cave_platform = scene.add.image(-20, -30, "cave_platform") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		cave_platform.scaleX = 0.4;
		cave_platform.scaleY = 0.4;
		scene.physics.add.existing(cave_platform, false);
		cave_platform.body.pushable = false;
		cave_platform.body.immovable = true;
		cave_platform.body.setOffset(18, 66);
		cave_platform.body.setSize(208, 48, false);
		this.add(cave_platform);

		// cave_platform_1
		const cave_platform_1 = scene.add.tileSprite(76, -30, 246, 100, "cave_platform") as Phaser.GameObjects.TileSprite & { body: Phaser.Physics.Arcade.Body };
		cave_platform_1.scaleX = 0.4;
		cave_platform_1.scaleY = 0.4;
		cave_platform_1.setOrigin(0, 1);
		scene.physics.add.existing(cave_platform_1, false);
		cave_platform_1.body.setOffset(18, 61);
		cave_platform_1.body.setSize(208, 48, false);
		this.add(cave_platform_1);

		// cave_platform_2
		const cave_platform_2 = scene.add.image(268, -30, "cave_platform") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		cave_platform_2.scaleX = 0.4;
		cave_platform_2.scaleY = 0.4;
		scene.physics.add.existing(cave_platform_2, false);
		cave_platform_2.body.pushable = false;
		cave_platform_2.body.immovable = true;
		cave_platform_2.body.setOffset(18, 60);
		cave_platform_2.body.setSize(208, 48, false);
		this.add(cave_platform_2);

		// lists
		const platforms = [rectangle_1, cave_platform, cave_platform_2, cave_platform_1];

		this.platforms = platforms;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public platforms: Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.Image|Phaser.GameObjects.TileSprite>;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
