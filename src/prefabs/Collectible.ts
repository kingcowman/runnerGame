
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Collectible extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 46);

		this.setInteractive(new Phaser.Geom.Rectangle(-8, -8, 16, 16), Phaser.Geom.Rectangle.Contains);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(0, 0, 16, 16);
		rectangle_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 16, 16), Phaser.Geom.Rectangle.Contains);
		rectangle_1.isFilled = true;
		this.add(rectangle_1);

		// image_1
		const image_1 = scene.add.image(0, 0, "atlas", "egg1.png");
		this.add(image_1);

		/* START-USER-CTR-CODE */
		// Write your code here.
		const particles = scene.add.particles(0, 0, 'yellow', {
			blendMode: 'ADD',
			scale: { start: 0.2, end: 0 },
			angle: { min: 0, max: 360 },
			speed: { min: 0, max: 50 },
			alpha: { start: 1, end: 0 },
			rotate: { min: -180, max: 180 },
			quantity: 5,
			frequency: 100,
			lifespan: 1000,
		});
		particles.setDepth(0.5);
		// Set the position of the emitter relative to the container
		particles.setPosition(0, 0);

		// Add the particle emitter to the container
		this.add(particles);
		// Create an image to follow
		const image_2 = scene.add.image(this.x, this.y, this.image);
		this.add(image_2);
		image_2.setDepth(1);
		particles.startFollow(rectangle_1);

		/* END-USER-CTR-CODE */
	}

	public key: string = "";
	public image: string = "green";

	/* START-USER-CODE */
	// Create a particle emitter

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
