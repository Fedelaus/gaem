import { LandEnemy } from "./land-enemy";
import { PathNode } from "../../world/pathNode";
import { Level } from "../../world/level";

export class NormalLandEnemy extends LandEnemy{

	constructor(scene: Phaser.Scene, startNode: PathNode, image: string, sheet: string, level: Level){
		super(scene, startNode, image, sheet, level);
	}

	async preUpdate(time: number, deltaTime: number){
		await this._preUpdate(time, deltaTime);
	}
}