
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnWorldBoundsCollideEventScript } from "@phaserjs/editor-scripts-arcade";
import { SetVelocityYActionScript } from "@phaserjs/editor-scripts-arcade";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Seamus {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Seamus extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 715, y ?? 315, texture || "player_run", frame ?? 0);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 3000;
		this.body.collideWorldBounds = true;
		this.body.setSize(50, 59, false);
		this.play("seamus_run");

		// onWorldBoundsCollideEventScript
		const onWorldBoundsCollideEventScript = new OnWorldBoundsCollideEventScript(this);

		// setVelocityYActionScript
		const setVelocityYActionScript = new SetVelocityYActionScript(onWorldBoundsCollideEventScript);

		// setVelocityYActionScript (prefab fields)
		setVelocityYActionScript.velocityY = -300;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.updatePlayer, this);
		this.scene.input.on("pointerdown", this.onPointerDown, this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	start() {

		// physics
	}

	// control double jump feature
	private maxJumps = 2;
	private jumpsCount = 0;
	onPointerDown() {
		const isValidJump = this.jumpsCount < this.maxJumps;
		if (!isValidJump) {
			return;
		}
		this.jumpsCount++;
		this.body.velocity.y = -700;
		this.play("seamus_fallplayer_falling", true);
	}

	updatePlayer() {
		const body = this.body as Phaser.Physics.Arcade.Body;
		if (body.touching.down) {
			this.jumpsCount = 0;
			// console.log("TOUCH DOWN");
			this.play("seamus_run", true);
		} else {
			// const current = this.anims.currentAnim;

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
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
