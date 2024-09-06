
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnPointerDownScript } from "@phaserjs/editor-scripts-core";
import { SetVelocityYActionScript } from "@phaserjs/editor-scripts-arcade";
/* START-USER-IMPORTS */
import FoodItem from "./FoodItem";
/* END-USER-IMPORTS */

export default interface Player {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Player extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 599, y ?? 348, texture || "player_run", frame ?? 0);

		this.setOrigin(0.5, 0.8096661022845779);
		scene.physics.add.existing(this, false);
		this.body.gravity.y = 1400;
		this.body.allowDrag = false;
		this.body.collideWorldBounds = true;
		this.body.setSize(63, 60, false);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// setVelocityYActionScript
		const setVelocityYActionScript = new SetVelocityYActionScript(onPointerDownScript);

		// setVelocityYActionScript (prefab fields)
		setVelocityYActionScript.velocityY = -400;

		// platformsCollider
		const platformsCollider = scene.physics.add.collider(this, []);

		// foodsCollider
		const foodsCollider = scene.physics.add.overlap(this, [], this.playerVsFood, undefined, this);

		this.platformsCollider = platformsCollider;
		this.foodsCollider = foodsCollider;

		/* START-USER-CTR-CODE */

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.updatePlayer, this);

		/* END-USER-CTR-CODE */
	}

	private platformsCollider: Phaser.Physics.Arcade.Collider;
	private foodsCollider: Phaser.Physics.Arcade.Collider;
	public platforms: Phaser.GameObjects.GameObject[] = [];
	public foodItems: FoodItem[] = [];

	/* START-USER-CODE */

	private leftDown = false;
	private rightDown = false;
	private upDown = false;
	private jumpsCount = 0;
	private lastWalkTime = 0;

	start() {

		// physics

		this.platformsCollider.object2 = this.platforms;
		this.foodsCollider.object2 = this.foodItems;

		// animation

		this.play("seamus_run");

		// controller

		this.jumpsCount = 0;

		this.lastWalkTime = 0;

		// sound
	}

	private playerVsFood(player: any, foodItem: any): void {

		(foodItem as FoodItem).taken();
	}

	private isKeyDown(key?: Phaser.Input.Keyboard.Key) {

		if (key) {

			return key.isDown;
		}

		return false;
	}

	updatePlayer(time: number, delta: number) {

		this.leftDown = false;
		this.rightDown = false;
		this.upDown = false;

		const body = this.body;

		const xVelocity = 300;
		const yVelocity = -820;

		const touchingDown = body.touching.down;

		if (touchingDown) {

			this.jumpsCount = 0;

			// if (time - this.lastWalkTime > 400) {

			// 	body.velocity.x = 0;
			// }
		}

		if (body.touching.down) {

			if (body.velocity.x === 0) {

				//this.play("seamus_run", true);

			} else {

				//this.play("seamus_run", true);
			}
		} else {

			const current = this.anims.currentAnim;

			// if (current) {

			// 	if (current.key === "player-Jump Start") {

			// 		if (!this.anims.isPlaying) {

			// 			this.play("player-Jump Loop", true);
			// 		}
			// 	} else {

			// 		if (current.key !== "player-Jump Loop") {

			// 			this.play("player-Jump Start", true);
			// 		}
			// 	}
			// }
		}

		this.leftDown = this.rightDown = this.upDown = false;

		// check bounds

		const bounds = this.scene.cameras.main.getBounds();

		if (this.x < bounds.x) {

			this.x = 0;
		}

		if (this.x > bounds.x + bounds.width) {

			this.x = bounds.x + bounds.width;
		}

		if (this.y < bounds.y) {

			this.y = bounds.y;
		}

		if (this.y > bounds.y + bounds.height + 200) {

			this.setPosition(130, 360);
		}
	}

	// pressButton(direction: "left" | "right" | "up") {

	// 	switch (direction) {
	// 		case "left":
	// 			this.leftDown = true;
	// 			break;

	// 		case "right":
	// 			this.rightDown = true;
	// 			break;

	// 		case "up":
	// 			this.upDown = true;
	// 			break;
	// 	}
	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
