
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class wedding extends Phaser.Scene {

	constructor() {
		super("wedding");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	editorCreate(): void {

		// wedding2
		const wedding2 = this.add.image(204, 114, "wedding2");
		wedding2.scaleX = 0.25;
		wedding2.scaleY = 0.25;
		wedding2.flipX = true;

		// wedding
		const wedding = this.add.image(-137, 114, "wedding2");
		wedding.scaleX = 0.3;
		wedding.scaleY = 0.25;
		wedding.flipX = true;

		// wedding_panel
		const wedding_panel = this.add.image(40, 114, "wedding_panel");
		wedding_panel.scaleY = 0.25;

		// wedding_panel_1
		const wedding_panel_1 = this.add.image(353, 114, "wedding_panel");
		wedding_panel_1.scaleY = 0.25;

		// background
		const background = this.add.layer();

		// seamus
		const seamus = this.add.sprite(-10, 239, "player_jump", 1);
		seamus.scaleX = 1.5;
		seamus.scaleY = 1.5;
		seamus.setOrigin(1, 1);
		background.add(seamus);

		// tint
		const tint = this.add.layer();
		tint.visible = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(123, 122, 128, 128);
		rectangle_1.scaleX = 4.900328274163321;
		rectangle_1.scaleY = 2.6822518365499013;
		rectangle_1.alpha = 0.7;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 8026746;
		tint.add(rectangle_1);

		// foreground
		const foreground = this.add.layer();

		// collectibles
		const collectibles = this.add.container(0, 0);
		collectibles.visible = false;
		foreground.add(collectibles);

		// gold
		const gold = this.add.image(341, 58, "gold");
		gold.scaleX = 0.04389677725832965;
		gold.scaleY = 0.04591606076086535;
		collectibles.add(gold);

		// cowboy_hat
		const cowboy_hat = this.add.image(239, 63, "cowboyhat2");
		cowboy_hat.scaleX = 0.04389677725832965;
		cowboy_hat.scaleY = 0.04591606076086535;
		collectibles.add(cowboy_hat);

		// cotton_candy
		const cotton_candy = this.add.image(140, 193, "cotton_candy");
		cotton_candy.scaleX = 0.04389677725832958;
		cotton_candy.scaleY = 0.04591606076086535;
		collectibles.add(cotton_candy);

		// burger
		const burger = this.add.image(73, 63, "burger");
		burger.scaleX = 0.04389677725832965;
		burger.scaleY = 0.04591606076086535;
		collectibles.add(burger);

		// tux
		const tux = this.add.image(225, 190, "tuxedo");
		tux.scaleX = 0.04389677725832965;
		tux.scaleY = 0.04591606076086535;
		collectibles.add(tux);

		// elk
		const elk = this.add.image(137, 121, "elk");
		elk.scaleX = 0.04389677725832958;
		elk.scaleY = 0.04591606076086535;
		collectibles.add(elk);

		// ring2
		const ring2 = this.add.image(253, 187, "ring2");
		ring2.scaleX = 0.04389677725832965;
		ring2.scaleY = 0.04591606076086535;
		collectibles.add(ring2);

		// ring1
		const ring1 = this.add.image(282, 189, "ring1");
		ring1.scaleX = 0.04389677725832965;
		ring1.scaleY = 0.04591606076086535;
		collectibles.add(ring1);

		// sandwich
		const sandwich = this.add.image(116, 66, "sandwich");
		sandwich.scaleX = 0.04389677725832958;
		sandwich.scaleY = 0.04591606076086535;
		collectibles.add(sandwich);

		// hottub
		const hottub = this.add.image(172, 126, "hottub");
		hottub.scaleX = 0.04389677725832965;
		hottub.scaleY = 0.04591606076086535;
		collectibles.add(hottub);

		// lilith
		const lilith = this.add.image(160, 61, "lilith");
		lilith.scaleX = 0.04389677725832965;
		lilith.scaleY = 0.04591606076086535;
		collectibles.add(lilith);

		// money
		const money = this.add.image(31, 63, "money");
		money.scaleX = 0.04389677725832965;
		money.scaleY = 0.04591606076086535;
		collectibles.add(money);

		// waffle_house
		const waffle_house = this.add.image(292, 61, "wafflehouse");
		waffle_house.scaleX = 0.18556651250006828;
		waffle_house.scaleY = 0.1850644507825933;
		collectibles.add(waffle_house);

		// flowers
		const flowers = this.add.image(320, 185, "flowers");
		flowers.scaleX = 0.04389677725832965;
		flowers.scaleY = 0.04591606076086535;
		collectibles.add(flowers);

		// horseshoe
		const horseshoe = this.add.image(171, 191, "horseshoe");
		horseshoe.scaleX = 0.04389677725832965;
		horseshoe.scaleY = 0.04591606076086535;
		collectibles.add(horseshoe);

		// william_cow
		const william_cow = this.add.image(67, 183, "williamcow");
		william_cow.scaleX = 0.022395958296887317;
		william_cow.scaleY = 0.022386278886953825;
		collectibles.add(william_cow);

		// neil_cow
		const neil_cow = this.add.image(109, 179, "neilcow");
		neil_cow.scaleX = 0.03694838851548343;
		neil_cow.scaleY = 0.03693405136608226;
		collectibles.add(neil_cow);

		// pizza
		const pizza = this.add.image(234, 127, "pizzabox");
		pizza.scaleX = 0.04389677725832965;
		pizza.scaleY = 0.04591606076086535;
		collectibles.add(pizza);

		// sweatshirt
		const sweatshirt = this.add.image(283, 125, "sweatshirt");
		sweatshirt.scaleX = 0.04389677725832965;
		sweatshirt.scaleY = 0.04591606076086535;
		collectibles.add(sweatshirt);

		// message
		const message = this.add.container(0, 0);
		message.visible = false;
		foreground.add(message);

		// text_1
		const text_1 = this.add.text(17, 45, "", {});
		text_1.text = "W";
		text_1.setStyle({ "fontSize": "48px" });
		message.add(text_1);

		// text
		const text = this.add.text(58, 46, "", {});
		text.text = "i";
		text.setStyle({ "fontSize": "48px" });
		message.add(text);

		// text_2
		const text_2 = this.add.text(101, 45, "", {});
		text_2.text = "l";
		text_2.setStyle({ "fontSize": "48px" });
		message.add(text_2);

		// text_3
		const text_3 = this.add.text(144, 45, "", {});
		text_3.text = "l";
		text_3.setStyle({ "fontSize": "48px" });
		message.add(text_3);

		// text_4
		const text_4 = this.add.text(224, 41, "", {});
		text_4.text = "y";
		text_4.setStyle({ "fontSize": "48px" });
		message.add(text_4);

		// text_5
		const text_5 = this.add.text(277, 38, "", {});
		text_5.text = "o";
		text_5.setStyle({ "fontSize": "48px" });
		message.add(text_5);

		// text_6
		const text_6 = this.add.text(326, 37, "", {});
		text_6.text = "u";
		text_6.setStyle({ "fontSize": "48px" });
		message.add(text_6);

		// text_7
		const text_7 = this.add.text(123, 102, "", {});
		text_7.text = "b";
		text_7.setStyle({ "fontSize": "48px" });
		message.add(text_7);

		// text_8
		const text_8 = this.add.text(158, 102, "", {});
		text_8.text = "e";
		text_8.setStyle({ "fontSize": "48px" });
		message.add(text_8);

		// text_9
		const text_9 = this.add.text(220, 99, "", {});
		text_9.text = "m";
		text_9.setStyle({ "fontSize": "48px" });
		message.add(text_9);

		// text_10
		const text_10 = this.add.text(268, 99, "", {});
		text_10.text = "y";
		text_10.setStyle({ "fontSize": "48px" });
		message.add(text_10);

		// text_11
		const text_11 = this.add.text(51, 161, "", {});
		text_11.text = "b";
		text_11.setStyle({ "fontSize": "48px" });
		message.add(text_11);

		// text_12
		const text_12 = this.add.text(90, 162, "", {});
		text_12.text = "e";
		text_12.setStyle({ "fontSize": "48px" });
		message.add(text_12);

		// text_13
		const text_13 = this.add.text(125, 164, "", {});
		text_13.text = "s";
		text_13.setStyle({ "fontSize": "48px" });
		message.add(text_13);

		// text_14
		const text_14 = this.add.text(153, 163, "", {});
		text_14.text = "t";
		text_14.setStyle({ "fontSize": "48px" });
		message.add(text_14);

		// text_15
		const text_15 = this.add.text(211, 164, "", {});
		text_15.text = "m";
		text_15.setStyle({ "fontSize": "48px" });
		message.add(text_15);

		// text_16
		const text_16 = this.add.text(239, 165, "", {});
		text_16.text = "a";
		text_16.setStyle({ "fontSize": "48px" });
		message.add(text_16);

		// text_17
		const text_17 = this.add.text(268, 163, "", {});
		text_17.text = "n";
		text_17.setStyle({ "fontSize": "48px" });
		message.add(text_17);

		// text_18
		const text_18 = this.add.text(304, 163, "", {});
		text_18.text = "?";
		text_18.setStyle({ "fontSize": "48px" });
		message.add(text_18);

		// fade_in
		const fade_in = this.add.rectangle(177, 128, 128, 128);
		fade_in.scaleX = 10;
		fade_in.scaleY = 10;
		fade_in.isFilled = true;
		fade_in.fillColor = 0;

		this.seamus = seamus;
		this.tint = tint;
		this.gold = gold;
		this.cowboy_hat = cowboy_hat;
		this.cotton_candy = cotton_candy;
		this.burger = burger;
		this.tux = tux;
		this.elk = elk;
		this.ring2 = ring2;
		this.ring1 = ring1;
		this.sandwich = sandwich;
		this.hottub = hottub;
		this.lilith = lilith;
		this.money = money;
		this.waffle_house = waffle_house;
		this.flowers = flowers;
		this.horseshoe = horseshoe;
		this.william_cow = william_cow;
		this.neil_cow = neil_cow;
		this.pizza = pizza;
		this.sweatshirt = sweatshirt;
		this.collectibles = collectibles;
		this.text_1 = text_1;
		this.text = text;
		this.text_2 = text_2;
		this.text_3 = text_3;
		this.text_4 = text_4;
		this.text_5 = text_5;
		this.text_6 = text_6;
		this.text_7 = text_7;
		this.text_8 = text_8;
		this.text_9 = text_9;
		this.text_10 = text_10;
		this.text_11 = text_11;
		this.text_12 = text_12;
		this.text_13 = text_13;
		this.text_14 = text_14;
		this.text_15 = text_15;
		this.text_16 = text_16;
		this.text_17 = text_17;
		this.text_18 = text_18;
		this.message = message;
		this.fade_in = fade_in;

		this.events.emit("scene-awake");
	}

	private seamus!: Phaser.GameObjects.Sprite;
	private tint!: Phaser.GameObjects.Layer;
	private gold!: Phaser.GameObjects.Image;
	private cowboy_hat!: Phaser.GameObjects.Image;
	private cotton_candy!: Phaser.GameObjects.Image;
	private burger!: Phaser.GameObjects.Image;
	private tux!: Phaser.GameObjects.Image;
	private elk!: Phaser.GameObjects.Image;
	private ring2!: Phaser.GameObjects.Image;
	private ring1!: Phaser.GameObjects.Image;
	private sandwich!: Phaser.GameObjects.Image;
	private hottub!: Phaser.GameObjects.Image;
	private lilith!: Phaser.GameObjects.Image;
	private money!: Phaser.GameObjects.Image;
	private waffle_house!: Phaser.GameObjects.Image;
	private flowers!: Phaser.GameObjects.Image;
	private horseshoe!: Phaser.GameObjects.Image;
	private william_cow!: Phaser.GameObjects.Image;
	private neil_cow!: Phaser.GameObjects.Image;
	private pizza!: Phaser.GameObjects.Image;
	private sweatshirt!: Phaser.GameObjects.Image;
	private collectibles!: Phaser.GameObjects.Container;
	private text_1!: Phaser.GameObjects.Text;
	private text!: Phaser.GameObjects.Text;
	private text_2!: Phaser.GameObjects.Text;
	private text_3!: Phaser.GameObjects.Text;
	private text_4!: Phaser.GameObjects.Text;
	private text_5!: Phaser.GameObjects.Text;
	private text_6!: Phaser.GameObjects.Text;
	private text_7!: Phaser.GameObjects.Text;
	private text_8!: Phaser.GameObjects.Text;
	private text_9!: Phaser.GameObjects.Text;
	private text_10!: Phaser.GameObjects.Text;
	private text_11!: Phaser.GameObjects.Text;
	private text_12!: Phaser.GameObjects.Text;
	private text_13!: Phaser.GameObjects.Text;
	private text_14!: Phaser.GameObjects.Text;
	private text_15!: Phaser.GameObjects.Text;
	private text_16!: Phaser.GameObjects.Text;
	private text_17!: Phaser.GameObjects.Text;
	private text_18!: Phaser.GameObjects.Text;
	private message!: Phaser.GameObjects.Container;
	private fade_in!: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.sound.play("book_of_love_mix", { name: "pickup", start: 43.5 });
		// list of all collectibles
		const collectibleList = [
			this.money,
			this.burger,
			this.sandwich,
			this.lilith,
			this.cowboy_hat,
			this.waffle_house,
			this.gold,
			this.elk,
			this.hottub,
			this.pizza,
			this.sweatshirt,
			this.william_cow,
			this.neil_cow,
			this.cotton_candy,
			this.horseshoe,
			this.tux,
			this.ring1,
			this.ring2,
			this.flowers,
		];
		const collectibleText = [
			this.text_1,
			this.text,
			this.text_2,
			this.text_3,
			this.text_4,
			this.text_5,
			this.text_6,
			this.text_7,
			this.text_8,
			this.text_9,
			this.text_10,
			this.text_11,
			this.text_12,
			this.text_13,
			this.text_14,
			this.text_15,
			this.text_16,
			this.text_17,
			this.text_18
		];

		// make all collectibles invisible
		collectibleList.forEach(collectible => {
			collectible.visible = false;
		});
		collectibleText.forEach(text => {
			text.visible = false;
		});

		// fade the fade in over 4 seconds to make the scene visible

		const fadeInDuration = 8000;
		const walkDuration = 9000;
		const animationDuration = 10000;
		const tintInDuration = 2000;

		this.tweens.add({
			targets: this.fade_in,
			alpha: 0,
			duration: fadeInDuration,
			onComplete: () => {
				this.fade_in.destroy();
				this.seamus.anims.play({
					key: "seamus_run",
					frameRate: 5,
					duration: walkDuration,
				});

				this.tweens.add({
					targets: this.seamus,
					x: 150,
					duration: walkDuration,
					ease: 'Linear',
					onComplete: () => {
						this.seamus.anims.destroy();
						// set the seamus sprite frame to its default
						this.seamus.texture = this.textures.get("player_jump");
						this.seamus.setFrame(1);
					}
				});


				this.time.delayedCall(animationDuration, () => {
					this.tint.visible = true;
					this.tint.alpha = 0;
					this.tweens.add({
						targets: this.tint,
						alpha: 1,
						duration: tintInDuration,
					});
				});
			}
		});

		// wait 4 seconds before showing the collectibles and tint
		this.time.delayedCall(fadeInDuration + animationDuration + tintInDuration, () => {
			this.collectibles.visible = true;
			this.message.visible = true;

			//tween collectible in from a point and then make it shake left and right for 5 seconds, then tween it up while spinning and emitting green particles

			const animateCollectible = (collectible: Phaser.GameObjects.Image, text: Phaser.GameObjects.Text, delayMs: number) => {
				const targetScaleX = collectible.scaleX;
				const targetScaleY = collectible.scaleY;
				collectible.scaleX = 0;
				collectible.scaleY = 0;
				collectible.visible = true;
				this.time.delayedCall(delayMs, () => {
					this.tweens.add({
						targets: collectible,
						scaleX: targetScaleX,
						scaleY: targetScaleY,
						duration: 2500,
						yoyo: false,
						repeat: 0,
						ease: 'Cubic.easeInOut'
					});

					let jiggleTween!: Phaser.Tweens.Tween;
					this.tweens.add({
						targets: collectible,
						angle: 30,
						duration: 500,
						repeat: 0,
						onComplete: () => {
							collectible.angle = 30;
							jiggleTween = this.tweens.add({
								targets: collectible,
								angle: -30,
								duration: 1000,
								yoyo: true,
								repeat: -1
							});
						}
					});


					this.time.delayedCall(10000, () => {
						this.tweens.remove(jiggleTween);
						collectible.angle = 0;

						const emitter = this.add.particles(0, 0, 'yellow', {
							scale: { start: 0.2, end: 0 },
							angle: { min: 0, max: 360 },
							speed: { min: 0, max: 50 },
							alpha: { start: 1, end: 0 },
							rotate: { min: -180, max: 180 },
							quantity: 10,
							frequency: 100,
							lifespan: 1000,
							blendMode: 'ADD',
						});

						emitter.startFollow(collectible);
						this.add.existing(collectible);
						collectible.setDepth(1);
						text.visible = true;

						this.tweens.add({
							targets: collectible,
							flipX: true,
							scaleX: -collectible.scaleX,
							duration: 125,
							repeat: -1,
							yoyo: true,
						});

						this.tweens.add({
							targets: collectible,
							y: collectible.y - 300,
							duration: 750,
							ease: 'Back.easeIn',
							repeat: 0
						});
					});
				});
			}

			// Usage:
			for (let i = 0; i < collectibleList.length; i++) {
				const delay = (i + 1) * 100;
				const collectible = collectibleList[i];
				const text = collectibleText[i];
				animateCollectible(collectible, text, delay);
			}

			// animateCollectible(testCollectible, testText, 100);

		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
