import UtilityIcon from "./utilityicon";
// https://www.gamedevmarket.net/asset/gui-icons-8656/
export default class UtilityBar {
	constructor(config) {
		this.scene = config.scene;
		this.x = config.x;
		this.y = config.y;
		this.width = config.width;
		this.height = config.height;
		this.player = config.player;

		this.iconNames = [
			"inventory",
			"abilities",
			"skills",
			"equipment",
			"5",
			"6",
			"7"
		];

		this.create();
	}

	create() {
		for (let index = 0; index < this.iconNames.length; index++) {
			new UtilityIcon({
				scene: this.scene,
				x: this.x + index * 64,
				y: this.y,
				width: 64,
				height: 64,
				name: this.iconNames[index],
				player: this.player
			});
		}
	}

	closeOtherInterfaces(currentInterface) {
		this.iconNames.forEach(i => {
			if (
				this.player[i] != undefined &&
				i != currentInterface &&
				this.player[i].visible == true
			) {
				console.log(i);
				this.player[i].show();
			}
		});
	}
}
