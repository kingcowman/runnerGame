
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class test_2 extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 116, y ?? 174);

		// staircase2
		const staircase2 = scene.add.container(92, -146);
		staircase2.scaleX = -1;
		this.add(staircase2);

		// rectangle_33
		const rectangle_33 = scene.add.rectangle(-116, 124, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_33.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_33.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_33, false);
		rectangle_33.body.allowGravity = false;
		rectangle_33.body.checkCollision.down = false;
		rectangle_33.body.checkCollision.left = false;
		rectangle_33.body.checkCollision.right = false;
		rectangle_33.body.pushable = false;
		rectangle_33.body.immovable = true;
		rectangle_33.body.setOffset(0, 8);
		rectangle_33.body.setSize(-100, 8, false);
		rectangle_33.isFilled = true;
		rectangle_33.strokeColor = 15664389;
		staircase2.add(rectangle_33);

		// rectangle_34
		const rectangle_34 = scene.add.rectangle(-112, 120, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_34.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_34.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_34, false);
		rectangle_34.body.allowGravity = false;
		rectangle_34.body.checkCollision.down = false;
		rectangle_34.body.checkCollision.left = false;
		rectangle_34.body.checkCollision.right = false;
		rectangle_34.body.pushable = false;
		rectangle_34.body.immovable = true;
		rectangle_34.body.setOffset(0, 8);
		rectangle_34.body.setSize(-100, 8, false);
		rectangle_34.isFilled = true;
		rectangle_34.strokeColor = 15664389;
		staircase2.add(rectangle_34);

		// rectangle_35
		const rectangle_35 = scene.add.rectangle(-108, 116, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_35.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_35.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_35, false);
		rectangle_35.body.allowGravity = false;
		rectangle_35.body.checkCollision.down = false;
		rectangle_35.body.checkCollision.left = false;
		rectangle_35.body.checkCollision.right = false;
		rectangle_35.body.pushable = false;
		rectangle_35.body.immovable = true;
		rectangle_35.body.setOffset(0, 8);
		rectangle_35.body.setSize(-100, 8, false);
		rectangle_35.isFilled = true;
		rectangle_35.strokeColor = 15664389;
		staircase2.add(rectangle_35);

		// rectangle_36
		const rectangle_36 = scene.add.rectangle(-104, 112, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_36.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_36.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_36, false);
		rectangle_36.body.allowGravity = false;
		rectangle_36.body.checkCollision.down = false;
		rectangle_36.body.checkCollision.left = false;
		rectangle_36.body.checkCollision.right = false;
		rectangle_36.body.pushable = false;
		rectangle_36.body.immovable = true;
		rectangle_36.body.setOffset(0, 8);
		rectangle_36.body.setSize(-100, 8, false);
		rectangle_36.isFilled = true;
		rectangle_36.strokeColor = 15664389;
		staircase2.add(rectangle_36);

		// rectangle_37
		const rectangle_37 = scene.add.rectangle(-100, 108, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_37.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_37.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_37, false);
		rectangle_37.body.allowGravity = false;
		rectangle_37.body.checkCollision.down = false;
		rectangle_37.body.checkCollision.left = false;
		rectangle_37.body.checkCollision.right = false;
		rectangle_37.body.pushable = false;
		rectangle_37.body.immovable = true;
		rectangle_37.body.setOffset(0, 8);
		rectangle_37.body.setSize(-100, 8, false);
		rectangle_37.isFilled = true;
		rectangle_37.strokeColor = 15664389;
		staircase2.add(rectangle_37);

		// rectangle_38
		const rectangle_38 = scene.add.rectangle(-96, 104, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_38.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_38.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_38, false);
		rectangle_38.body.allowGravity = false;
		rectangle_38.body.checkCollision.down = false;
		rectangle_38.body.checkCollision.left = false;
		rectangle_38.body.checkCollision.right = false;
		rectangle_38.body.pushable = false;
		rectangle_38.body.immovable = true;
		rectangle_38.body.setOffset(0, 8);
		rectangle_38.body.setSize(-100, 8, false);
		rectangle_38.isFilled = true;
		rectangle_38.strokeColor = 15664389;
		staircase2.add(rectangle_38);

		// rectangle_39
		const rectangle_39 = scene.add.rectangle(-92, 100, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_39.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_39.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_39, false);
		rectangle_39.body.allowGravity = false;
		rectangle_39.body.checkCollision.down = false;
		rectangle_39.body.checkCollision.left = false;
		rectangle_39.body.checkCollision.right = false;
		rectangle_39.body.pushable = false;
		rectangle_39.body.immovable = true;
		rectangle_39.body.setOffset(0, 8);
		rectangle_39.body.setSize(-100, 8, false);
		rectangle_39.isFilled = true;
		rectangle_39.strokeColor = 15664389;
		staircase2.add(rectangle_39);

		// rectangle_40
		const rectangle_40 = scene.add.rectangle(-88, 96, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_40.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_40.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_40, false);
		rectangle_40.body.allowGravity = false;
		rectangle_40.body.checkCollision.down = false;
		rectangle_40.body.checkCollision.left = false;
		rectangle_40.body.checkCollision.right = false;
		rectangle_40.body.pushable = false;
		rectangle_40.body.immovable = true;
		rectangle_40.body.setOffset(0, 8);
		rectangle_40.body.setSize(-100, 8, false);
		rectangle_40.isFilled = true;
		rectangle_40.strokeColor = 15664389;
		staircase2.add(rectangle_40);

		// rectangle_41
		const rectangle_41 = scene.add.rectangle(-84, 92, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_41.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_41.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_41, false);
		rectangle_41.body.allowGravity = false;
		rectangle_41.body.checkCollision.down = false;
		rectangle_41.body.checkCollision.left = false;
		rectangle_41.body.checkCollision.right = false;
		rectangle_41.body.pushable = false;
		rectangle_41.body.immovable = true;
		rectangle_41.body.setOffset(0, 8);
		rectangle_41.body.setSize(-100, 8, false);
		rectangle_41.isFilled = true;
		rectangle_41.strokeColor = 15664389;
		staircase2.add(rectangle_41);

		// rectangle_42
		const rectangle_42 = scene.add.rectangle(-80, 88, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_42.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_42.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_42, false);
		rectangle_42.body.allowGravity = false;
		rectangle_42.body.checkCollision.down = false;
		rectangle_42.body.checkCollision.left = false;
		rectangle_42.body.checkCollision.right = false;
		rectangle_42.body.pushable = false;
		rectangle_42.body.immovable = true;
		rectangle_42.body.setOffset(0, 8);
		rectangle_42.body.setSize(-100, 8, false);
		rectangle_42.isFilled = true;
		rectangle_42.strokeColor = 15664389;
		staircase2.add(rectangle_42);

		// rectangle_43
		const rectangle_43 = scene.add.rectangle(-76, 84, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_43.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_43.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_43, false);
		rectangle_43.body.allowGravity = false;
		rectangle_43.body.checkCollision.down = false;
		rectangle_43.body.checkCollision.left = false;
		rectangle_43.body.checkCollision.right = false;
		rectangle_43.body.pushable = false;
		rectangle_43.body.immovable = true;
		rectangle_43.body.setOffset(0, 8);
		rectangle_43.body.setSize(-100, 8, false);
		rectangle_43.isFilled = true;
		rectangle_43.strokeColor = 15664389;
		staircase2.add(rectangle_43);

		// rectangle_44
		const rectangle_44 = scene.add.rectangle(-72, 80, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_44.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_44.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_44, false);
		rectangle_44.body.allowGravity = false;
		rectangle_44.body.checkCollision.down = false;
		rectangle_44.body.checkCollision.left = false;
		rectangle_44.body.checkCollision.right = false;
		rectangle_44.body.pushable = false;
		rectangle_44.body.immovable = true;
		rectangle_44.body.setOffset(0, 8);
		rectangle_44.body.setSize(-100, 8, false);
		rectangle_44.isFilled = true;
		rectangle_44.strokeColor = 15664389;
		staircase2.add(rectangle_44);

		// rectangle_45
		const rectangle_45 = scene.add.rectangle(-68, 76, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_45.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_45.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_45, false);
		rectangle_45.body.allowGravity = false;
		rectangle_45.body.checkCollision.down = false;
		rectangle_45.body.checkCollision.left = false;
		rectangle_45.body.checkCollision.right = false;
		rectangle_45.body.pushable = false;
		rectangle_45.body.immovable = true;
		rectangle_45.body.setOffset(0, 8);
		rectangle_45.body.setSize(-100, 8, false);
		rectangle_45.isFilled = true;
		rectangle_45.strokeColor = 15664389;
		staircase2.add(rectangle_45);

		// rectangle_46
		const rectangle_46 = scene.add.rectangle(-64, 72, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_46.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_46.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_46, false);
		rectangle_46.body.allowGravity = false;
		rectangle_46.body.checkCollision.down = false;
		rectangle_46.body.checkCollision.left = false;
		rectangle_46.body.checkCollision.right = false;
		rectangle_46.body.pushable = false;
		rectangle_46.body.immovable = true;
		rectangle_46.body.setOffset(0, 8);
		rectangle_46.body.setSize(-100, 8, false);
		rectangle_46.isFilled = true;
		rectangle_46.strokeColor = 15664389;
		staircase2.add(rectangle_46);

		// rectangle_47
		const rectangle_47 = scene.add.rectangle(-60, 68, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_47.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_47.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_47, false);
		rectangle_47.body.allowGravity = false;
		rectangle_47.body.checkCollision.down = false;
		rectangle_47.body.checkCollision.left = false;
		rectangle_47.body.checkCollision.right = false;
		rectangle_47.body.pushable = false;
		rectangle_47.body.immovable = true;
		rectangle_47.body.setOffset(0, 8);
		rectangle_47.body.setSize(-100, 8, false);
		rectangle_47.isFilled = true;
		rectangle_47.strokeColor = 15664389;
		staircase2.add(rectangle_47);

		// rectangle_25
		const rectangle_25 = scene.add.rectangle(-148, 156, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_25.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_25.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_25, false);
		rectangle_25.body.allowGravity = false;
		rectangle_25.body.checkCollision.down = false;
		rectangle_25.body.checkCollision.left = false;
		rectangle_25.body.checkCollision.right = false;
		rectangle_25.body.pushable = false;
		rectangle_25.body.immovable = true;
		rectangle_25.body.setOffset(0, 8);
		rectangle_25.body.setSize(-100, 8, false);
		rectangle_25.isFilled = true;
		rectangle_25.strokeColor = 15664389;
		staircase2.add(rectangle_25);

		// rectangle_26
		const rectangle_26 = scene.add.rectangle(-144, 152, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_26.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_26.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_26, false);
		rectangle_26.body.allowGravity = false;
		rectangle_26.body.checkCollision.down = false;
		rectangle_26.body.checkCollision.left = false;
		rectangle_26.body.checkCollision.right = false;
		rectangle_26.body.pushable = false;
		rectangle_26.body.immovable = true;
		rectangle_26.body.setOffset(0, 8);
		rectangle_26.body.setSize(-100, 8, false);
		rectangle_26.isFilled = true;
		rectangle_26.strokeColor = 15664389;
		staircase2.add(rectangle_26);

		// rectangle_27
		const rectangle_27 = scene.add.rectangle(-140, 148, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_27.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_27.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_27, false);
		rectangle_27.body.allowGravity = false;
		rectangle_27.body.checkCollision.down = false;
		rectangle_27.body.checkCollision.left = false;
		rectangle_27.body.checkCollision.right = false;
		rectangle_27.body.pushable = false;
		rectangle_27.body.immovable = true;
		rectangle_27.body.setOffset(0, 8);
		rectangle_27.body.setSize(-100, 8, false);
		rectangle_27.isFilled = true;
		rectangle_27.strokeColor = 15664389;
		staircase2.add(rectangle_27);

		// rectangle_28
		const rectangle_28 = scene.add.rectangle(-136, 144, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_28.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_28.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_28, false);
		rectangle_28.body.allowGravity = false;
		rectangle_28.body.checkCollision.down = false;
		rectangle_28.body.checkCollision.left = false;
		rectangle_28.body.checkCollision.right = false;
		rectangle_28.body.pushable = false;
		rectangle_28.body.immovable = true;
		rectangle_28.body.setOffset(0, 8);
		rectangle_28.body.setSize(-100, 8, false);
		rectangle_28.isFilled = true;
		rectangle_28.strokeColor = 15664389;
		staircase2.add(rectangle_28);

		// rectangle_29
		const rectangle_29 = scene.add.rectangle(-132, 140, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_29.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_29.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_29, false);
		rectangle_29.body.allowGravity = false;
		rectangle_29.body.checkCollision.down = false;
		rectangle_29.body.checkCollision.left = false;
		rectangle_29.body.checkCollision.right = false;
		rectangle_29.body.pushable = false;
		rectangle_29.body.immovable = true;
		rectangle_29.body.setOffset(0, 8);
		rectangle_29.body.setSize(-100, 8, false);
		rectangle_29.isFilled = true;
		rectangle_29.strokeColor = 15664389;
		staircase2.add(rectangle_29);

		// rectangle_30
		const rectangle_30 = scene.add.rectangle(-128, 136, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_30.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_30.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_30, false);
		rectangle_30.body.allowGravity = false;
		rectangle_30.body.checkCollision.down = false;
		rectangle_30.body.checkCollision.left = false;
		rectangle_30.body.checkCollision.right = false;
		rectangle_30.body.pushable = false;
		rectangle_30.body.immovable = true;
		rectangle_30.body.setOffset(0, 8);
		rectangle_30.body.setSize(-100, 8, false);
		rectangle_30.isFilled = true;
		rectangle_30.strokeColor = 15664389;
		staircase2.add(rectangle_30);

		// rectangle_31
		const rectangle_31 = scene.add.rectangle(-124, 132, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_31.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_31.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_31, false);
		rectangle_31.body.allowGravity = false;
		rectangle_31.body.checkCollision.down = false;
		rectangle_31.body.checkCollision.left = false;
		rectangle_31.body.checkCollision.right = false;
		rectangle_31.body.pushable = false;
		rectangle_31.body.immovable = true;
		rectangle_31.body.setOffset(0, 8);
		rectangle_31.body.setSize(-100, 8, false);
		rectangle_31.isFilled = true;
		rectangle_31.strokeColor = 15664389;
		staircase2.add(rectangle_31);

		// rectangle_32
		const rectangle_32 = scene.add.rectangle(-120, 128, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_32.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_32.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_32, false);
		rectangle_32.body.allowGravity = false;
		rectangle_32.body.checkCollision.down = false;
		rectangle_32.body.checkCollision.left = false;
		rectangle_32.body.checkCollision.right = false;
		rectangle_32.body.pushable = false;
		rectangle_32.body.immovable = true;
		rectangle_32.body.setOffset(0, 8);
		rectangle_32.body.setSize(-100, 8, false);
		rectangle_32.isFilled = true;
		rectangle_32.strokeColor = 15664389;
		staircase2.add(rectangle_32);

		// staircase
		const staircase = scene.add.container(-116, -78);
		this.add(staircase);

		// rectangle
		const rectangle = scene.add.rectangle(48, 92, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle.setOrigin(0, 1);
		scene.physics.add.existing(rectangle, false);
		rectangle.body.allowGravity = false;
		rectangle.body.checkCollision.down = false;
		rectangle.body.checkCollision.left = false;
		rectangle.body.checkCollision.right = false;
		rectangle.body.pushable = false;
		rectangle.body.immovable = true;
		rectangle.body.setSize(100, 8, false);
		rectangle.isFilled = true;
		rectangle.strokeColor = 15664389;
		staircase.add(rectangle);

		// rectangle_2
		const rectangle_2 = scene.add.rectangle(52, 88, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_2.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_2, false);
		rectangle_2.body.allowGravity = false;
		rectangle_2.body.checkCollision.down = false;
		rectangle_2.body.checkCollision.left = false;
		rectangle_2.body.checkCollision.right = false;
		rectangle_2.body.pushable = false;
		rectangle_2.body.immovable = true;
		rectangle_2.body.setSize(100, 8, false);
		rectangle_2.isFilled = true;
		rectangle_2.strokeColor = 15664389;
		staircase.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = scene.add.rectangle(56, 84, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_3.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_3, false);
		rectangle_3.body.allowGravity = false;
		rectangle_3.body.checkCollision.down = false;
		rectangle_3.body.checkCollision.left = false;
		rectangle_3.body.checkCollision.right = false;
		rectangle_3.body.pushable = false;
		rectangle_3.body.immovable = true;
		rectangle_3.body.setSize(100, 8, false);
		rectangle_3.isFilled = true;
		rectangle_3.strokeColor = 15664389;
		staircase.add(rectangle_3);

		// rectangle_4
		const rectangle_4 = scene.add.rectangle(60, 80, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_4.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_4, false);
		rectangle_4.body.allowGravity = false;
		rectangle_4.body.checkCollision.down = false;
		rectangle_4.body.checkCollision.left = false;
		rectangle_4.body.checkCollision.right = false;
		rectangle_4.body.pushable = false;
		rectangle_4.body.immovable = true;
		rectangle_4.body.setSize(100, 8, false);
		rectangle_4.isFilled = true;
		rectangle_4.strokeColor = 15664389;
		staircase.add(rectangle_4);

		// rectangle_5
		const rectangle_5 = scene.add.rectangle(64, 76, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_5.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_5.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_5, false);
		rectangle_5.body.allowGravity = false;
		rectangle_5.body.checkCollision.down = false;
		rectangle_5.body.checkCollision.left = false;
		rectangle_5.body.checkCollision.right = false;
		rectangle_5.body.pushable = false;
		rectangle_5.body.immovable = true;
		rectangle_5.body.setSize(100, 8, false);
		rectangle_5.isFilled = true;
		rectangle_5.strokeColor = 15664389;
		staircase.add(rectangle_5);

		// rectangle_6
		const rectangle_6 = scene.add.rectangle(68, 72, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_6.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_6.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_6, false);
		rectangle_6.body.allowGravity = false;
		rectangle_6.body.checkCollision.down = false;
		rectangle_6.body.checkCollision.left = false;
		rectangle_6.body.checkCollision.right = false;
		rectangle_6.body.pushable = false;
		rectangle_6.body.immovable = true;
		rectangle_6.body.setSize(100, 8, false);
		rectangle_6.isFilled = true;
		rectangle_6.strokeColor = 15664389;
		staircase.add(rectangle_6);

		// rectangle_7
		const rectangle_7 = scene.add.rectangle(72, 68, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_7.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_7.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_7, false);
		rectangle_7.body.allowGravity = false;
		rectangle_7.body.checkCollision.down = false;
		rectangle_7.body.checkCollision.left = false;
		rectangle_7.body.checkCollision.right = false;
		rectangle_7.body.pushable = false;
		rectangle_7.body.immovable = true;
		rectangle_7.body.setSize(100, 8, false);
		rectangle_7.isFilled = true;
		rectangle_7.strokeColor = 15664389;
		staircase.add(rectangle_7);

		// rectangle_8
		const rectangle_8 = scene.add.rectangle(76, 64, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_8.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_8.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_8, false);
		rectangle_8.body.allowGravity = false;
		rectangle_8.body.checkCollision.down = false;
		rectangle_8.body.checkCollision.left = false;
		rectangle_8.body.checkCollision.right = false;
		rectangle_8.body.pushable = false;
		rectangle_8.body.immovable = true;
		rectangle_8.body.setSize(100, 8, false);
		rectangle_8.isFilled = true;
		rectangle_8.strokeColor = 15664389;
		staircase.add(rectangle_8);

		// rectangle_9
		const rectangle_9 = scene.add.rectangle(80, 60, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_9.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_9.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_9, false);
		rectangle_9.body.allowGravity = false;
		rectangle_9.body.checkCollision.down = false;
		rectangle_9.body.checkCollision.left = false;
		rectangle_9.body.checkCollision.right = false;
		rectangle_9.body.pushable = false;
		rectangle_9.body.immovable = true;
		rectangle_9.body.setSize(100, 8, false);
		rectangle_9.isFilled = true;
		rectangle_9.strokeColor = 15664389;
		staircase.add(rectangle_9);

		// rectangle_10
		const rectangle_10 = scene.add.rectangle(84, 56, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_10.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_10.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_10, false);
		rectangle_10.body.allowGravity = false;
		rectangle_10.body.checkCollision.down = false;
		rectangle_10.body.checkCollision.left = false;
		rectangle_10.body.checkCollision.right = false;
		rectangle_10.body.pushable = false;
		rectangle_10.body.immovable = true;
		rectangle_10.body.setSize(100, 8, false);
		rectangle_10.isFilled = true;
		rectangle_10.strokeColor = 15664389;
		staircase.add(rectangle_10);

		// rectangle_11
		const rectangle_11 = scene.add.rectangle(88, 52, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_11.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_11.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_11, false);
		rectangle_11.body.allowGravity = false;
		rectangle_11.body.checkCollision.down = false;
		rectangle_11.body.checkCollision.left = false;
		rectangle_11.body.checkCollision.right = false;
		rectangle_11.body.pushable = false;
		rectangle_11.body.immovable = true;
		rectangle_11.body.setSize(100, 8, false);
		rectangle_11.isFilled = true;
		rectangle_11.strokeColor = 15664389;
		staircase.add(rectangle_11);

		// rectangle_12
		const rectangle_12 = scene.add.rectangle(92, 48, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_12.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_12.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_12, false);
		rectangle_12.body.allowGravity = false;
		rectangle_12.body.checkCollision.down = false;
		rectangle_12.body.checkCollision.left = false;
		rectangle_12.body.checkCollision.right = false;
		rectangle_12.body.pushable = false;
		rectangle_12.body.immovable = true;
		rectangle_12.body.setSize(100, 8, false);
		rectangle_12.isFilled = true;
		rectangle_12.strokeColor = 15664389;
		staircase.add(rectangle_12);

		// rectangle_13
		const rectangle_13 = scene.add.rectangle(96, 44, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_13.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_13.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_13, false);
		rectangle_13.body.allowGravity = false;
		rectangle_13.body.checkCollision.down = false;
		rectangle_13.body.checkCollision.left = false;
		rectangle_13.body.checkCollision.right = false;
		rectangle_13.body.pushable = false;
		rectangle_13.body.immovable = true;
		rectangle_13.body.setSize(100, 8, false);
		rectangle_13.isFilled = true;
		rectangle_13.strokeColor = 15664389;
		staircase.add(rectangle_13);

		// rectangle_14
		const rectangle_14 = scene.add.rectangle(100, 40, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_14.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_14.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_14, false);
		rectangle_14.body.allowGravity = false;
		rectangle_14.body.checkCollision.down = false;
		rectangle_14.body.checkCollision.left = false;
		rectangle_14.body.checkCollision.right = false;
		rectangle_14.body.pushable = false;
		rectangle_14.body.immovable = true;
		rectangle_14.body.setSize(100, 8, false);
		rectangle_14.isFilled = true;
		rectangle_14.strokeColor = 15664389;
		staircase.add(rectangle_14);

		// rectangle_15
		const rectangle_15 = scene.add.rectangle(104, 36, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_15.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_15.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_15, false);
		rectangle_15.body.allowGravity = false;
		rectangle_15.body.checkCollision.down = false;
		rectangle_15.body.checkCollision.left = false;
		rectangle_15.body.checkCollision.right = false;
		rectangle_15.body.pushable = false;
		rectangle_15.body.immovable = true;
		rectangle_15.body.setSize(100, 8, false);
		rectangle_15.isFilled = true;
		rectangle_15.strokeColor = 15664389;
		staircase.add(rectangle_15);

		// rectangle_16
		const rectangle_16 = scene.add.rectangle(108, 32, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_16.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_16.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_16, false);
		rectangle_16.body.allowGravity = false;
		rectangle_16.body.checkCollision.down = false;
		rectangle_16.body.checkCollision.left = false;
		rectangle_16.body.checkCollision.right = false;
		rectangle_16.body.pushable = false;
		rectangle_16.body.immovable = true;
		rectangle_16.body.setSize(100, 8, false);
		rectangle_16.isFilled = true;
		rectangle_16.strokeColor = 15664389;
		staircase.add(rectangle_16);

		// rectangle_17
		const rectangle_17 = scene.add.rectangle(112, 28, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_17.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_17.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_17, false);
		rectangle_17.body.allowGravity = false;
		rectangle_17.body.checkCollision.down = false;
		rectangle_17.body.checkCollision.left = false;
		rectangle_17.body.checkCollision.right = false;
		rectangle_17.body.pushable = false;
		rectangle_17.body.immovable = true;
		rectangle_17.body.setSize(100, 8, false);
		rectangle_17.isFilled = true;
		rectangle_17.strokeColor = 15664389;
		staircase.add(rectangle_17);

		// rectangle_18
		const rectangle_18 = scene.add.rectangle(116, 24, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_18.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_18.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_18, false);
		rectangle_18.body.allowGravity = false;
		rectangle_18.body.checkCollision.down = false;
		rectangle_18.body.checkCollision.left = false;
		rectangle_18.body.checkCollision.right = false;
		rectangle_18.body.pushable = false;
		rectangle_18.body.immovable = true;
		rectangle_18.body.setSize(100, 8, false);
		rectangle_18.isFilled = true;
		rectangle_18.strokeColor = 15664389;
		staircase.add(rectangle_18);

		// rectangle_19
		const rectangle_19 = scene.add.rectangle(120, 20, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_19.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_19.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_19, false);
		rectangle_19.body.allowGravity = false;
		rectangle_19.body.checkCollision.down = false;
		rectangle_19.body.checkCollision.left = false;
		rectangle_19.body.checkCollision.right = false;
		rectangle_19.body.pushable = false;
		rectangle_19.body.immovable = true;
		rectangle_19.body.setSize(100, 8, false);
		rectangle_19.isFilled = true;
		rectangle_19.strokeColor = 15664389;
		staircase.add(rectangle_19);

		// rectangle_20
		const rectangle_20 = scene.add.rectangle(124, 16, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_20.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_20.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_20, false);
		rectangle_20.body.allowGravity = false;
		rectangle_20.body.checkCollision.down = false;
		rectangle_20.body.checkCollision.left = false;
		rectangle_20.body.checkCollision.right = false;
		rectangle_20.body.pushable = false;
		rectangle_20.body.immovable = true;
		rectangle_20.body.setSize(100, 8, false);
		rectangle_20.isFilled = true;
		rectangle_20.strokeColor = 15664389;
		staircase.add(rectangle_20);

		// rectangle_21
		const rectangle_21 = scene.add.rectangle(128, 12, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_21.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_21.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_21, false);
		rectangle_21.body.allowGravity = false;
		rectangle_21.body.checkCollision.down = false;
		rectangle_21.body.checkCollision.left = false;
		rectangle_21.body.checkCollision.right = false;
		rectangle_21.body.pushable = false;
		rectangle_21.body.immovable = true;
		rectangle_21.body.setSize(100, 8, false);
		rectangle_21.isFilled = true;
		rectangle_21.strokeColor = 15664389;
		staircase.add(rectangle_21);

		// rectangle_22
		const rectangle_22 = scene.add.rectangle(132, 8, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_22.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_22.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_22, false);
		rectangle_22.body.allowGravity = false;
		rectangle_22.body.checkCollision.down = false;
		rectangle_22.body.checkCollision.left = false;
		rectangle_22.body.checkCollision.right = false;
		rectangle_22.body.pushable = false;
		rectangle_22.body.immovable = true;
		rectangle_22.body.setSize(100, 8, false);
		rectangle_22.isFilled = true;
		rectangle_22.strokeColor = 15664389;
		staircase.add(rectangle_22);

		// rectangle_23
		const rectangle_23 = scene.add.rectangle(136, 4, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_23.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_23.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_23, false);
		rectangle_23.body.allowGravity = false;
		rectangle_23.body.checkCollision.down = false;
		rectangle_23.body.checkCollision.left = false;
		rectangle_23.body.checkCollision.right = false;
		rectangle_23.body.pushable = false;
		rectangle_23.body.immovable = true;
		rectangle_23.body.setSize(100, 8, false);
		rectangle_23.isFilled = true;
		rectangle_23.strokeColor = 15664389;
		staircase.add(rectangle_23);

		// rectangle_24
		const rectangle_24 = scene.add.rectangle(140, 0, 100, 8) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_24.setInteractive(new Phaser.Geom.Rectangle(0, 0, 100, 8), Phaser.Geom.Rectangle.Contains);
		rectangle_24.setOrigin(0, 1);
		scene.physics.add.existing(rectangle_24, false);
		rectangle_24.body.allowGravity = false;
		rectangle_24.body.checkCollision.down = false;
		rectangle_24.body.checkCollision.left = false;
		rectangle_24.body.checkCollision.right = false;
		rectangle_24.body.pushable = false;
		rectangle_24.body.immovable = true;
		rectangle_24.body.setSize(100, 8, false);
		rectangle_24.isFilled = true;
		rectangle_24.strokeColor = 15664389;
		staircase.add(rectangle_24);

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

		// lists
		const platforms = [floor];
		const stairs = [rectangle_24, rectangle_23, rectangle_22, rectangle_21, rectangle_20, rectangle_19, rectangle_18, rectangle_17, rectangle_16, rectangle_15, rectangle_14, rectangle_13, rectangle_12, rectangle_11, rectangle_10, rectangle_9, rectangle_8, rectangle_7, rectangle_6, rectangle_5, rectangle_4, rectangle_3, rectangle_2, rectangle];

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
