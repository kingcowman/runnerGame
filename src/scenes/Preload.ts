
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PreloadBarUpdaterScript from "../script-nodes/PreloadBarUpdaterScript";
/* START-USER-IMPORTS */
import assetPackUrl from "../../static/assets/asset-pack.json";
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		console.log("loading");
		/* END-USER-CTR-CODE */
	}

	editorPreload(): void {

		this.load.pack("preload-asset-pack", "assets/preload-asset-pack.json");
	}

	editorCreate(): void {

		// guapen
		const guapen = this.add.image(180, 120, "kingcowman");
		guapen.scaleX = -0.2;
		guapen.scaleY = 0.2;

		// progressBar
		const progressBar = this.add.rectangle(180, 211, 256, 20);
		progressBar.scaleX = 1.3;
		progressBar.scaleY = 0.8506112939408523;
		progressBar.isFilled = true;
		progressBar.fillColor = 14737632;

		// preloadUpdater
		new PreloadBarUpdaterScript(progressBar);

		// progressBarBg
		const progressBarBg = this.add.rectangle(180, 211, 256, 20);
		progressBarBg.scaleX = 1.3;
		progressBarBg.scaleY = 0.8506112939408523;
		progressBarBg.fillColor = 14737632;
		progressBarBg.isStroked = true;

		// loadingText
		const loadingText = this.add.text(33, 175, "", {});
		loadingText.setOrigin(0.12, 0);
		loadingText.text = "Loading...";
		loadingText.setStyle({ "color": "#e0e0e0", "fontFamily": "arial", "fontSize": "20px" });

		this.loadingText = loadingText;

		this.events.emit("scene-awake");
	}

	private loadingText!: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.load.pack("asset-pack", assetPackUrl);
	}

	create() {
		this.loadingText.setText("Click to start");
		console.log("loaded");
		this.input.on("pointerdown", () => {
			if (process.env.NODE_ENV === "development") {

				const start = new URLSearchParams(location.search).get("start");

				if (start) {

					console.log(`Development: jump to ${start}`);
					this.scene.start(start);

					return;
				}
			}
			this.scene.start("Level2");
			// this.scene.start("wedding");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
