import ItemTooltip from "./itemtooltip";

export default class Item extends Phaser.GameObjects.Sprite {
	constructor(config) {
		super(config.scene, config.x, config.y, config.image, config.frame);
		this.setDisplaySize(48, 48);
		this.scene = config.scene;
		this.scene.add.existing(this);
		this.name = config.frame;
		this.type = config.type;
		this.setInteractive({
			draggable: true,
			enabled: true
		});
		this.tooltip = new ItemTooltip({
			scene: this.scene,
			item: this
		});
	}
}
