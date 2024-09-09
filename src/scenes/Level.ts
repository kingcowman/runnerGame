
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import SegmentSpawner from "./SegmentSpawner";
import Seamus from "../prefabs/Seamus";
import { OnEventScript } from "@phaserjs/editor-scripts-core";
import { OnWorldBoundsCollideEventScript } from "@phaserjs/editor-scripts-arcade";
import { GetGameObjectFromBodyActionScript } from "@phaserjs/editor-scripts-arcade";
import { SetVelocityYActionScript } from "@phaserjs/editor-scripts-arcade";
import { ActionTargetComp } from "@phaserjs/editor-scripts-core";
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

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		// subscribe to general event

		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// bg_png
		const bg_png = this.add.tileSprite(-118, 0, 600, 240, "atlas", "bg.png");
		bg_png.setOrigin(0, 0);
		bg_png.tintTopRight = 16777215;
		bg_png.tintBottomLeft = 16777215;
		bg_png.tintBottomRight = 16777215;

		// blurFx
		bg_png.postFX!.addBlur(0, 0, 0, 1, 16777215, 2);

		// bombs
		const bombs = this.add.container(-211, -209);

		// eggs
		const eggs = this.add.container(-211, -209);

		// chicks
		const chicks = this.add.container(-211, -209);

		// segments
		const segments = this.add.container(0, 0) as Phaser.GameObjects.Container & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(segments, false);
		segments.body.velocity.x = -500;
		segments.body.allowGravity = false;
		segments.body.checkCollision.up = false;
		segments.body.checkCollision.down = false;
		segments.body.checkCollision.left = false;
		segments.body.checkCollision.right = false;
		segments.body.pushable = false;
		segments.body.immovable = true;
		segments.body.setSize(64, 64, false);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(-177, 226, 128, 128);
		rectangle_2.scaleX = 0.2;
		rectangle_2.scaleY = 0.2;
		rectangle_2.isFilled = true;
		segments.add(rectangle_2);

		// segmentSpawner
		const segmentSpawner = new SegmentSpawner(rectangle_2);

		// tint
		const tint = this.add.rectangle(181, 124, 400, 300);
		tint.alpha = 0.4;
		tint.isFilled = true;

		// seamus
		const seamus = new Seamus(this, 116, 143);
		this.add.existing(seamus);

		// snow
		const snow = this.add.container(0, -94);

		// snow2
		const snow2 = this.add.tileSprite(181, 217, 1000, 1000, "snow2");
		snow2.alpha = 0.75;
		snow2.alphaTopLeft = 0.75;
		snow2.alphaTopRight = 0.75;
		snow2.alphaBottomLeft = 0.75;
		snow2.alphaBottomRight = 0.75;
		snow.add(snow2);

		// blurFx_1
		snow2.preFX!.addBlur(0, 1, 1, 1, 16777215, 2);

		// snow1
		const snow1 = this.add.tileSprite(181, 214, 1000, 1000, "snow1");
		snow1.alpha = 0.6;
		snow1.alphaTopLeft = 0.6;
		snow1.alphaTopRight = 0.6;
		snow1.alphaBottomLeft = 0.6;
		snow1.alphaBottomRight = 0.6;
		snow.add(snow1);

		// blurFx_2
		snow1.preFX!.addBlur(0, 3, 3, 1, 16777215, 1);

		// onEventScript_5
		const onEventScript_5 = new OnEventScript(this);

		// onWorldBoundsCollideEventScript_1
		const onWorldBoundsCollideEventScript_1 = new OnWorldBoundsCollideEventScript(this);

		// getGameObjectFromBodyActionScript
		const getGameObjectFromBodyActionScript = new GetGameObjectFromBodyActionScript(onWorldBoundsCollideEventScript_1);

		// setVelocityYActionScript_3
		const setVelocityYActionScript_3 = new SetVelocityYActionScript(getGameObjectFromBodyActionScript);

		// lists
		const ground: Array<any> = [];
		const stairs: Array<any> = [];
		const collectibles: Array<any> = [];
		const collectedKeys: Array<any> = [];

		// platformCollider
		const platformCollider = this.physics.add.collider(seamus, ground);

		// stairCollider
		const stairCollider = this.physics.add.collider(seamus, stairs, this.onStairCollision);

		// collectibleCollider
		const collectibleCollider = this.physics.add.overlap(seamus, collectibles, this.onCollectible, undefined, this);

		// segmentSpawner (prefab fields)
		segmentSpawner.segmentContainer = segments;
		segmentSpawner.groundList = ground;
		segmentSpawner.stairList = stairs;
		segmentSpawner.collectiblesList = collectibles;
		segmentSpawner.collectedKeys = collectedKeys;

		// onEventScript_5 (prefab fields)
		onEventScript_5.eventName = "spawn_ground";
		onEventScript_5.eventEmitter = "scene.events";

		// onWorldBoundsCollideEventScript_1 (prefab fields)
		onWorldBoundsCollideEventScript_1.up = false;
		onWorldBoundsCollideEventScript_1.down = true;
		onWorldBoundsCollideEventScript_1.left = false;
		onWorldBoundsCollideEventScript_1.right = false;

		// setVelocityYActionScript_3 (prefab fields)
		setVelocityYActionScript_3.velocityY = -80;

		// setVelocityYActionScript_3 (components)
		const setVelocityYActionScript_3ActionTargetComp = new ActionTargetComp(setVelocityYActionScript_3);
		setVelocityYActionScript_3ActionTargetComp.target = "ARG_1";

		this.bg_png = bg_png;
		this.segmentSpawner = segmentSpawner;
		this.segments = segments;
		this.seamus = seamus;
		this.snow2 = snow2;
		this.snow1 = snow1;
		this.snow = snow;
		this.platformCollider = platformCollider;
		this.stairCollider = stairCollider;
		this.collectibleCollider = collectibleCollider;
		this.ground = ground;
		this.stairs = stairs;
		this.collectibles = collectibles;
		this.collectedKeys = collectedKeys;

		this.events.emit("scene-awake");
	}

	private bg_png!: Phaser.GameObjects.TileSprite;
	private segmentSpawner!: SegmentSpawner;
	private segments!: Phaser.GameObjects.Container & { body: Phaser.Physics.Arcade.Body };
	private seamus!: Seamus;
	private snow2!: Phaser.GameObjects.TileSprite;
	private snow1!: Phaser.GameObjects.TileSprite;
	private snow!: Phaser.GameObjects.Container;
	private platformCollider!: Phaser.Physics.Arcade.Collider;
	private stairCollider!: Phaser.Physics.Arcade.Collider;
	private collectibleCollider!: Phaser.Physics.Arcade.Collider;
	private ground!: Array<any>;
	private stairs!: Array<any>;
	private collectibles!: Array<any>;
	public collectedKeys!: Array<any>;

	/* START-USER-CODE */



	// Write your code here

	onStairCollision(player: any, stair: any) {
		player.y -= stair.height;
	}

	private worldConfigs: {
		[key: number]: {
			[key: number]: {
				keys: string[];
				music: string;
				continueMusic?: boolean,
				soundConfig?: Phaser.Types.Sound.SoundMarker,
				initialSegments?: string[],
				fillerPath?: string,
				background?: string,
				backgroundScale?: number,
				secondsTillKeys?: integer
			}
		}
	} = {
			1: { // NYC letters: (W I L L)
				1: { // forest fakeout level 
					keys: ["money"],
					music: "jordan_belfort", // jordan belfort?
					soundConfig: {
						duration: 85,
						name: "skip_intro",
						start: 30,
						config: {
							loop: true,
						},
					},
					initialSegments: ["testWorld/test_3", "testWorld/test_3", "testWorld/filler/test2", "testWorld/filler/test_1"],
					fillerPath: "testWorld/filler/",
					secondsTillKeys: 30,
					// background: "goldman",
				},
				2: { // WEST SIDE HIGHWAY done
					keys: ["sandwich", "burger"],
					music: "jordan_belfort",
					continueMusic: true,
					initialSegments: ["testWorld/test_3", "testWorld/test_3", "testWorld/filler/test_2", "testWorld/filler/test_2"],
					fillerPath: "testWorld/filler/",
					background: "westsidehighway",
					secondsTillKeys: 20,
				},
				3: { // JERSEY done
					keys: ["lilith"],
					music: "llama_in_my_living_room",
					soundConfig: {
						duration: 158,
						name: "skip_intro",
						start: 71,
						config: {
							loop: true,
						},
					},
					// initialSegments: ["testWorld/test_3", "testWorld/test_3", "testWorld/filler/test2", "testWorld/filler/test_1"],
					fillerPath: "world1/act3/filler",
					background: "jersey3",
					backgroundScale: 0.25,
					secondsTillKeys: 60,
				},
			},
			2: { // TENNESSEE letters: (Y O U)
				1: { // Nashville DONE
					keys: ["cowboy_hat", "waffle_house"],
					music: "constant_sorrow", // CONSTANT SORROW 
					// no configs
					background: "nasvhille", // NASHVILLE??
					backgroundScale: 0.5,
					fillerPath: "world2/act1/filler",
					secondsTillKeys: 30,
				},
				2: { // Mammoth
					keys: ["gold"], // REVISIT
					music: "the_cave", // the cave
					soundConfig: {
						start: 109,
						duration: 130,
						name: "skip_2nd_verse",
						config: {
							loop: true,
						},
					},
					background: "caves", // CAVES!!!
					backgroundScale: 0.49,
					fillerPath: "world2/act2/filler",
					secondsTillKeys: 50,
				},
			},
			3: { // DESERT + SKI letters: (B E)
				1: { // desert done
					keys: ["elk"],
					music: "midnight", // midnight 
					// no configs
					// initialSegments: ["testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3", "testWorld/test_3",],
					fillerPath: "world3/act1/filler",
					background: "night_desert1", // AT NIGHT?!?!?
					backgroundScale: 0.4,
					secondsTillKeys: 90, //desert bus joke
				},
				2: { // ski done
					keys: ["hot_tub"],
					music: "gangnam_style", // gangnam style
					soundConfig: {
						name: "start",
						start: 47,
					},
					background: "treeline",
					backgroundScale: 0.5,
					secondsTillKeys: 30,
				}
			},
			4: { // Costco + Board Games: (M Y)
				1: { // COSTCO
					keys: ["pizza", "sweater"],
					music: "turn_it_up", // turn it up
					background: "costco_aisle",
					backgroundScale: 0.15,
					secondsTillKeys: 45,
				}
			},
			5: { // Hamptons: (BEST ) 
				1: { // cow parade done
					keys: ["william_cow", "neil_cow"],
					music: "rasputin", // rasputin
					background: "fields",
					backgroundScale: 0.235,
					fillerPath: "world5/act1/filler",
					// no configs
					secondsTillKeys: 30,
				},
				2: { // neil patrick harris carnival? done
					keys: ["cotton_candy", "horseshoe"],
					music: "rasputin",
					background: "carnival_day",
					backgroundScale: 0.095,
					fillerPath: "world5/act2/filler",
					// no configs
					secondsTillKeys: 30,
					continueMusic: true,
				}
			},
			6: { // DC + Wedding: (MAN?)
				1: { // done
					keys: ["ring1", "ring2", "tux", "flower"],
					music: "cotton_eyed_joe",
					background: "monuments2",
					secondsTillKeys: 10,
					fillerPath: "world6/act1/filler",
				},
				2: { // WEDDING // SEPARATE CUTSCENE KEEPING THIS HERE FOR THE TRIGGER
					keys: ["endless"], // no keys, static
					music: "book_of_love_mix",
					soundConfig: {
						name: "start",
						config: { loop: false },
					}
				}
			},
		};
	private currentWorld: integer = 1;
	private currentAct: integer = 1;

	private currentMusic: () => string = () => this.worldConfigs[this.currentWorld][this.currentAct].music;
	private currentConfig: () => any = () => this.worldConfigs[this.currentWorld][this.currentAct];

	// SEGMENT SPAWNING START
	private counter: number = 0;
	private spawnRate: number = 10; // frames
	private canSpawnKey: boolean = false;
	private keyPeriod: number = 10; // seconds

	pickRandomSegment(): typeof Phaser.GameObjects.Container {
		// get all the types from the imported modules
		const segmentPaths = Object.keys(importedModules);
		// filter segments to just those in the current world that contain the word "key"
		const currentWorldPrefix = "world" + this.currentWorld + "/act" + this.currentAct;
		const currentWorldKeySegments = segmentPaths.filter((path) => path.includes(currentWorldPrefix) && path.includes("key_"));
		// filter segments to just the filler segments
		const fillerSegments = segmentPaths.filter((path) => {
			if (this.currentConfig().fillerPath) {
				return path.includes(this.currentConfig().fillerPath);
			} else {
				return path.includes("testWorld");
			}
		});
		// combine the two lists
		let finalSegments: string[] = [];
		if (this.canSpawnKey) {
			finalSegments = currentWorldKeySegments;
		} else {
			finalSegments = fillerSegments;
		}
		// console.log(finalSegments);
		// pick a random segment from the final list
		const randomIndex = Math.floor(Math.random() * finalSegments.length);
		const segmentType = importedModules[finalSegments[randomIndex]];

		// if key was spawned, reset key timer by period, but if the world or act changes do nothing
		if (finalSegments[randomIndex].includes("key_")) {
			const curWorld = this.currentWorld;
			const curAct = this.currentAct;
			this.canSpawnKey = false;
			setTimeout(() => {
				if (curWorld === this.currentWorld && curAct === this.currentAct)
					this.canSpawnKey = true;
			}, this.keyPeriod * 1000);
		}

		return segmentType as typeof Phaser.GameObjects.Container;
	}


	createNextSegment(scene: Phaser.Scene, x: number, y: number): Phaser.GameObjects.Container {
		const segmentType = this.pickRandomSegment();
		return new segmentType(scene, x, y);
	}

	private lastX: number = 0;
	unpackSegment(segment: Phaser.GameObjects.Container): void {
		this.lastX += segment.getBounds().width;
		this.segments.add(segment);

		this.events.emit("spawn_segment", segment);
		// add all platforms in the segment to the grount list
		if ('platforms' in segment) {
			const platforms = segment.platforms as any[];
			this.ground.push(...platforms);
		}
		if ('stairs' in segment) {
			const stairs = segment.stairs as any[];
			this.stairs.push(...stairs);
			this.ground.push(...stairs);
		}
		// find all collectibles in the segment and add them to the collectibles list
		//where a collectible is a prefab of collectible.ts
		segment.list.forEach((child) => {
			//only if the child has a particles field
			if (!('particles' in child)) {
				return;
			}

			const collectible = child as any;

			// if the collectible has a key, check if it has been collected
			if ('key' in collectible) {
				const key = collectible.key as string;
				if (this.collectedKeys.includes(key)) {
					collectible.destroy();
					this.canSpawnKey = true;
					return
				}
			}
			this.collectibles.push(collectible);
		});
	}

	loadSegments(segmentPaths: string[]): void {
		// get all the types from the imported modules
		segmentPaths.forEach((segmentPath) => {
			const segmentType = importedModules[segmentPath] as typeof Phaser.GameObjects.Container;
			const spawner = this.segmentSpawner.gameObject as Phaser.GameObjects.Rectangle;
			const segment = new segmentType(this, this.lastX, spawner.y);
			this.unpackSegment(segment);
		});
	}

	spawnSegment(): void {
		const scene = this as Phaser.Scene;
		// get the spawner position
		const spawner = this.segmentSpawner.gameObject as Phaser.GameObjects.Rectangle;

		// get the number of objects in the segment container
		let segX = spawner.x;
		let segY = spawner.y;

		//draw debug square around container in the con
		// const graphics = scene.add.graphics();
		// graphics.lineStyle(1, 0xff0000);
		// graphics.strokeRect(rect.x, rect.y, rect.width, rect.height);
		// graphics.visible = false;
		// this.segmentContainer.add(graphics);

		const segment = this.createNextSegment(scene, this.lastX, segY);
		this.unpackSegment(segment);

	}

	shouldAttempt(): boolean {
		//only do this math if the fame count is a multiple of the spawn rate
		if (this.counter != 0)
			return false;
		if (!this.segments)
			return false;
		const rect = this.segments.getBounds();
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

	// SEGMENT SPAWNING END



	loadAct(world: number, act: number) {
		//stop the current music
		const config = this.worldConfigs[world][act];
		// play the new music
		if (!config.continueMusic) {
			this.sound.stopByKey(this.currentMusic());
			if (world === 6 && act === 2) {
				this.scene.start("wedding");
				return;
			}
			this.sound.play(config.music, config.soundConfig ?? { loop: true });
		}
		// set timeout till keys can spawn
		if (config.secondsTillKeys) {
			this.canSpawnKey = false;
			setTimeout(() => {
				this.canSpawnKey = true;
			}, config.secondsTillKeys * 1000);
		}


		// clear ground, stairs, and collectibles
		this.collectibles.forEach((collectible) => collectible.destroy());
		this.collectibles.splice(0, this.collectibles.length);

		// spawn the new act
		this.currentAct = act;
		this.currentWorld = world;

		this.loadSegments(config.initialSegments || []);
		if (config.background) {
			this.bg_png.setTexture(config.background);
			this.bg_png.setTileScale(config.backgroundScale || 1, config.backgroundScale || 1);
		}
	}

	nextAct() {
		if (this.currentAct + 1 in this.worldConfigs[this.currentWorld]) {
			this.loadAct(this.currentWorld, this.currentAct + 1);
			console.log("Next act");
		} else {
			this.loadAct(this.currentWorld + 1, 1);
			console.log("Next world");
		}
	}

	onCollectible(player: any, collectible: any) {
		if (collectible.key && !this.collectedKeys.includes(collectible.key)) {
			console.log("collected", collectible.key);
			this.collectedKeys.push(collectible.key);
			console.log(this.collectedKeys);

		}
		this.events.emit("collectibleDestroyed", collectible);
		collectible.collect();
		const index = this.collectibles.indexOf(collectible);
		this.collectibles.splice(index, 1);
		if (this.worldConfigs[this.currentWorld][this.currentAct].keys.every((key: string) => this.collectedKeys.includes(key))) {
			// if all acts are done, move to the next world
			this.nextAct();
		}
		// if all of this worlds keys are in the list, move to the next world
	}

	create() {
		this.editorCreate();

		if (process.env.NODE_ENV === "development") {
			const params = new URLSearchParams(location.search);

			this.currentWorld = parseInt(params.get("world") ?? "1");
			this.currentAct = parseInt(params.get("act") ?? "1");
		}

		this.loadAct(this.currentWorld, this.currentAct);
		this.sound.volume = 0.5;
		// this.bg_png.setTexture("desert");

	}

	pruneList(list: any[]) {
		for (let i = 0; i < list.length; i++) {
			// console.log(list[i]);
			if (list[i].getBounds().right < -100) {
				list[i].destroy();
				list.splice(i, 1);
			}
		}
	}

	update(time: number, delta: number): void {
		// move the background by a scale of the segment velocity with a consistent timestep
		this.bg_png.tilePositionX -= this.segments.body.velocity.x * delta / 3000;
		// check overlap between seamus and collectibles

		// check ground, stairs, and collectibles for being off the screen
		// this.ground.forEach((ground) => {
		// 	if (ground.getBounds().right < -100) {
		// 		ground.destroy();
		// 		this.ground = this.ground.filter((g) => g !== ground);
		// 	}
		// });
		// this.stairs.forEach((stair) => {
		// 	if (stair.getBounds().right < -100) {
		// 		stair.destroy();
		// 		this.stairs = this.stairs.filter((g) => g !== stair);
		// 	}
		// });

		this.pruneList(this.ground);
		this.pruneList(this.stairs);
		this.pruneList(this.collectibles);
		// this.pruneList(this.segments.list);
		this.segments.list.forEach((segment) => {
			// if empty, remove
			if (segment instanceof Phaser.GameObjects.Container) {
				// console.log(segment.list);
				if (segment.list.length === 0) {
					segment.destroy();
					console.log("destroyed");
					this.segments.remove(segment);
				}
			}
		});

		// in world 3 act 2 it snows
		if (this.currentWorld === 3 && this.currentAct === 2) {
			this.snow.visible = true;
			this.snow1.tilePositionY += 0.5;
			this.snow2.tilePositionY -= 1;
			this.snow2.tilePositionX -= 0.5;
			this.snow1.tilePositionX -= 5;
		} else {
			this.snow.visible = false;
		}

		this.runSpawner();

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
