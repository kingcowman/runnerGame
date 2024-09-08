
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Collect from "../../../prefabs/Collect";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class key_cotton_candy extends Phaser.GameObjects.Container {

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
		const collect = new Collect(scene, 428, -46, "cotton_candy");
		this.add(collect);

		// carnival_stripe
		const carnival_stripe = scene.add.tileSprite(-116, 2, 1000, 32, "carnival_stripe");
		carnival_stripe.setOrigin(0, 0);
		carnival_stripe.tileScaleX = 3;
		this.add(carnival_stripe);

		// carnival_stripe_1
		const carnival_stripe_1 = scene.add.tileSprite(-116, -126, 1000, 32, "carnival_stripe") as Phaser.GameObjects.TileSprite & { body: Phaser.Physics.Arcade.Body };
		carnival_stripe_1.setOrigin(0, 0);
		scene.physics.add.existing(carnival_stripe_1, false);
		carnival_stripe_1.body.checkCollision.down = false;
		carnival_stripe_1.body.pushable = false;
		carnival_stripe_1.body.immovable = true;
		carnival_stripe_1.body.setSize(1000, 32, false);
		carnival_stripe_1.tileScaleX = 3;
		this.add(carnival_stripe_1);

		// lists
		const platforms = [rectangle_1, carnival_stripe_1];

		// collect (prefab fields)
		collect.key = "cotton_candy";

		this.platforms = platforms;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public platforms: Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.TileSprite>;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
