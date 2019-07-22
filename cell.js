module.exports = class Cell {
	constructor(left, right, up, down) {
		this.left = left;
		this.right = right;
		this.up = up;
		this.down = down;
	}

	canMoveLeft() {
		return !this.left;
	}
	canMoveRight() {
		return !this.right;
	}
	canMoveUp() {
		return !this.up;
	}
	canMoveDown() {
		return !this.down;
	}
};
