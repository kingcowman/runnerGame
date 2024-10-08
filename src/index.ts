// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import Phaser from "phaser";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";
import Level2 from "./scenes/Level";
import Wedding from "./scenes/wedding";

class Boot extends Phaser.Scene {

	constructor() {
		super("Boot");
	}

	preload() {
		this.load.pack("pack", preloadAssetPackUrl);
	}

	create() {
		this.scene.start("Preload");
	}
}

window.addEventListener('load', function () {
	const game = new Phaser.Game({
		width: 360,
		height: 240,
		backgroundColor: "#2f2f2f",
		render: {
			pixelArt: true
		},
		physics: {
			default: "arcade"
		},
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		scene: [Boot, Preload, Level2, Wedding]
	});
	game.scene.start("Boot");
});