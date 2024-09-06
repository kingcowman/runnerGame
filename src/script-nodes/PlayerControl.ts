
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-core";
import Phaser from "phaser";
import { OnPointerDownScript } from "@phaserjs/editor-scripts-core";
import { SetVelocityYActionScript } from "@phaserjs/editor-scripts-arcade";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerControl extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// setVelocityYActionScript
		const setVelocityYActionScript = new SetVelocityYActionScript(onPointerDownScript);

		// setVelocityYActionScript (prefab fields)
		setVelocityYActionScript.velocityY = -150;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
