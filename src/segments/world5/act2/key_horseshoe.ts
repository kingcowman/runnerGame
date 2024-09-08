
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Collect from "../../../prefabs/Collect";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class key_horseshoe extends Phaser.GameObjects.Container {

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
		const collect = new Collect(scene, 444, -174, "horseshoe");
		this.add(collect);

		// carnival_stripe
		const carnival_stripe = scene.add.tileSprite(-116, 2, 1000, 32, "carnival_stripe");
		carnival_stripe.setOrigin(0, 0);
		carnival_stripe.tileScaleX = 3;
		this.add(carnival_stripe);

		// carnival_slide
		const carnival_slide = scene.add.image(380, -62, "carnival_slide");
		carnival_slide.scaleX = 0.2;
		carnival_slide.scaleY = 0.2;
		this.add(carnival_slide);

		// rectangle_2
		const rectangle_2 = scene.add.rectangle(332, 2, 32, 32) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_2.visible = false;
		scene.physics.add.existing(rectangle_2, false);
		rectangle_2.body.pushable = false;
		rectangle_2.body.immovable = true;
		rectangle_2.body.setSize(32, 32, false);
		rectangle_2.isFilled = true;
		this.add(rectangle_2);

		// rectangle
		const rectangle = scene.add.rectangle(348, -14, 32, 32) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle.visible = false;
		scene.physics.add.existing(rectangle, false);
		rectangle.body.pushable = false;
		rectangle.body.immovable = true;
		rectangle.body.setSize(32, 32, false);
		rectangle.isFilled = true;
		this.add(rectangle);

		// rectangle_3
		const rectangle_3 = scene.add.rectangle(380, -30, 32, 32) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_3.visible = false;
		scene.physics.add.existing(rectangle_3, false);
		rectangle_3.body.pushable = false;
		rectangle_3.body.immovable = true;
		rectangle_3.body.setSize(32, 32, false);
		rectangle_3.isFilled = true;
		this.add(rectangle_3);

		// rectangle_4
		const rectangle_4 = scene.add.rectangle(396, -46, 32, 32) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_4.visible = false;
		scene.physics.add.existing(rectangle_4, false);
		rectangle_4.body.pushable = false;
		rectangle_4.body.immovable = true;
		rectangle_4.body.setSize(32, 32, false);
		rectangle_4.isFilled = true;
		this.add(rectangle_4);

		// rectangle_5
		const rectangle_5 = scene.add.rectangle(412, -62, 32, 32) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_5.visible = false;
		scene.physics.add.existing(rectangle_5, false);
		rectangle_5.body.pushable = false;
		rectangle_5.body.immovable = true;
		rectangle_5.body.setSize(32, 32, false);
		rectangle_5.isFilled = true;
		this.add(rectangle_5);

		// rectangle_6
		const rectangle_6 = scene.add.rectangle(428, -94, 32, 32) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_6.visible = false;
		scene.physics.add.existing(rectangle_6, false);
		rectangle_6.body.pushable = false;
		rectangle_6.body.immovable = true;
		rectangle_6.body.setSize(32, 32, false);
		rectangle_6.isFilled = true;
		this.add(rectangle_6);

		// rectangle_7
		const rectangle_7 = scene.add.rectangle(428, -94, 32, 32) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_7.visible = false;
		scene.physics.add.existing(rectangle_7, false);
		rectangle_7.body.pushable = false;
		rectangle_7.body.immovable = true;
		rectangle_7.body.setSize(32, 32, false);
		rectangle_7.isFilled = true;
		this.add(rectangle_7);

		// rectangle_8
		const rectangle_8 = scene.add.rectangle(444, -126, 32, 32) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_8.visible = false;
		scene.physics.add.existing(rectangle_8, false);
		rectangle_8.body.pushable = false;
		rectangle_8.body.immovable = true;
		rectangle_8.body.setSize(32, 32, false);
		rectangle_8.isFilled = true;
		this.add(rectangle_8);

		// lists
		const platforms = [rectangle_1];
		const stairs = [rectangle_2, rectangle_7, rectangle_6, rectangle_5, rectangle_4, rectangle_3, rectangle, rectangle_8];

		// collect (prefab fields)
		collect.key = "horseshoe";

		this.platforms = platforms;
		this.stairs = stairs;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public platforms: Phaser.GameObjects.Rectangle[];
	private stairs: Phaser.GameObjects.Rectangle[];

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
