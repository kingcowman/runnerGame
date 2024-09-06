
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Collect {

	body: Phaser.Physics.Arcade.Body;
}

export default class Collect extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 63, y ?? 66, texture || "pizzabox", frame);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1024, 1024), Phaser.Geom.Rectangle.Contains);
		this.scaleX = 0.05;
		this.scaleY = 0.05;
		scene.physics.add.existing(this, false);
		this.body.friction.x = 0;
		this.body.angularVelocity = 2;
		this.body.moves = false;
		this.body.allowGravity = false;
		this.body.allowDrag = false;
		this.body.pushable = false;
		this.body.setSize(1024, 1024, false);

		/* START-USER-CTR-CODE */
		// Write your code here.

		// Write your code here.

		this.particles = scene.add.particles(0, 0, 'yellow', {
			blendMode: 'ADD',
			scale: { start: 0.2, end: 0 },
			angle: { min: 0, max: 360 },
			speed: { min: 0, max: 50 },
			alpha: { start: 1, end: 0 },
			rotate: { min: -180, max: 180 },
			quantity: 20,
			frequency: 100,
			lifespan: 1000,
		});
		this.particles.setDepth(0.5);
		// Set the position of the emitter relative to the container
		// particles.setPosition(0, 0);
		// Add the particle emitter to the container
		// this.add(particles);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		// Create an image to follow

		// remove and re add the collectible to the scene
		this.scene.add.existing(this);
		this.particles.startFollow(this);

		/* END-USER-CTR-CODE */
	}

	public key: string = "";

	/* START-USER-CODE */

	// Write your code here.

	private hasFlipped = false;

	public particles: Phaser.GameObjects.Particles.ParticleEmitter;

	collect(): void {
		if (!this.active) {
			return;
		}
		this.scene.sound.play("pick_egg");
		//destroy in 2 seconds
		this.flipX = true;
		this.setInteractive(false);
		this.body.enable = false;
		//detach from parent
		// add the collectible to a fixed location on the screen
		const curBounds = this.getBounds();

		this.scene.add.existing(this.particles);
		this.scene.add.existing(this);
		this.depth = 1;
		this.setPosition(curBounds.centerX, curBounds.centerY);
		// this.scene.add.existing(this.particles);

		//make the collectible tween flip along the y axis 3 times per second
		this.scene.tweens.add({
			targets: this,
			flipX: true,
			scaleX: -this.scaleX,
			duration: 125,
			repeat: 3,
			yoyo: true,
		});
		// make the collectible rise up to a height of 50 pixels
		this.scene.tweens.add({
			targets: this,
			y: 50,
			duration: 1000,
			ease: "Linear",
		});

		this.scene.time.delayedCall(2000, () => {
			this.destroy();
		});
	}

	destroy(fromScene?: boolean): void {
		this.particles.destroy();
		super.destroy(fromScene);
	}


	update(...args: any[]): void {
		if (!this.hasFlipped && this.active) {
			this.hasFlipped = true;
			const pc = this.parentContainer;
			pc.remove(this);
			pc.add(this.particles);
			pc.add(this);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
