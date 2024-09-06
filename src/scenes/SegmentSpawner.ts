
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
// @ts-ignore
const segmentsContext = require.context("../segments", true, /\.ts$/);
const importedModules: { [key: string]: any } = {};

segmentsContext.keys().forEach((key: string) => {
	const moduleName = key.replace('./', '').replace('.ts', '');
	importedModules[moduleName] = segmentsContext(key).default;
});

// Print all module names
console.log(importedModules);
/* END-USER-IMPORTS */

export default class SegmentSpawner extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		// this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.runSpawner, this);
		/* END-USER-CTR-CODE */
	}

	public segmentContainer!: Phaser.GameObjects.Container;
	public groundList!: Phaser.GameObjects.GameObject[];
	public stairList!: Phaser.GameObjects.GameObject[];
	public collectiblesList!: Phaser.GameObjects.GameObject[];
	public collectedKeys!: string[];

	/* START-USER-CODE */

	private counter: number = 0;
	private spawnRate: number = 10;

	pickRandomSegment(): typeof Phaser.GameObjects.Container {
		// get all the types from the imported modules
		const segments = Object.values(importedModules);
		// pick only from filler segments and key segments 


		const randomIndex = Math.floor(Math.random() * segments.length);
		const segmentType = segments[randomIndex];
		return segmentType as typeof Phaser.GameObjects.Container;
	}


	createNextSegment(scene: Phaser.Scene, x: number, y: number): Phaser.GameObjects.Container {
		const segmentType = this.pickRandomSegment();
		return new segmentType(scene, x, y);
	}

	private lastX: number = 0;
	unpackSegment(segment: Phaser.GameObjects.Container): void {
		this.lastX += segment.getBounds().width;
		this.segmentContainer.add(segment);

		this.scene.events.emit("spawn_segment", segment);
		// add all platforms in the segment to the grount list
		if ('platforms' in segment) {
			const platforms = segment.platforms as any[];
			this.groundList.push(...platforms);
		}
		if ('stairs' in segment) {
			const stairs = segment.stairs as any[];
			this.stairList.push(...stairs);
			this.groundList.push(...stairs);
		}
		// find all collectibles in the segment and add them to the collectibles list
		//where a collectible is a prefab of collectible.ts
		segment.list.forEach((child) => {
			//match on classname
			if ('Collect' !== child.constructor.name) {
				return;
			}
			const collectible = child as any;

			// if the collectible has a key, check if it has been collected
			if ('key' in collectible) {
				const key = collectible.key as string;
				if (this.collectedKeys.includes(key)) {
					collectible.destroy();
					return
				}
				// this.segmentContainer.add(collectible.particles);
				// collectible.particles.startFollow(collectible);
			}
			this.collectiblesList.push(collectible);
		});
	}

	loadSegments(segmentPaths: string[]): void {
		// get all the types from the imported modules
		segmentPaths.forEach((segmentPath) => {
			const segmentType = importedModules[segmentPath] as typeof Phaser.GameObjects.Container;
			const spawner = this.gameObject as Phaser.GameObjects.Rectangle;
			const segment = new segmentType(this.scene, this.lastX, spawner.y);
			this.unpackSegment(segment);
		});
	}

	spawnSegment(): void {
		const scene = this.scene as Phaser.Scene;
		// get the spawner position
		const spawner = this.gameObject as Phaser.GameObjects.Rectangle;

		// get the number of objects in the segment container
		let segX = spawner.x;
		let segY = spawner.y;

		const rect = this.segmentContainer.getBounds();
		console.log(rect.left, rect.right);
		console.log(this.segmentContainer.x, this.segmentContainer.y, this.segmentContainer.width, this.segmentContainer.height);
		console.log(this.segmentContainer.list);
		//draw debug square around container in the con
		// const graphics = scene.add.graphics();
		// graphics.lineStyle(1, 0xff0000);
		// graphics.strokeRect(rect.x, rect.y, rect.width, rect.height);
		// graphics.visible = false;
		// this.segmentContainer.add(graphics);

		const segment = this.createNextSegment(scene, this.lastX, segY);
		console.log("new segment", segment.getBounds());
		this.unpackSegment(segment);

	}

	shouldAttempt(): boolean {
		//only do this math if the fame count is a multiple of the spawn rate
		if (this.counter != 0)
			return false;
		if (!this.segmentContainer)
			return false;
		const rect = this.segmentContainer.getBounds();
		return rect.right < 1000;
	}

	// Write your code here.
	runSpawner(): void {
		this.counter++;
		this.counter %= this.spawnRate;
		while (this.shouldAttempt()) {
			this.spawnSegment();
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
