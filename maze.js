const Cell = require('./cell.js');

module.exports = class Maze {
	constructor(height, width) {
		this.height = height,
		this.width = width

		this.grid = new Array(width);
		for (var x = 0; x < width; x++) {
			this.grid[x] = new Array(this.height);
		}
		for (var x = 0; x < width; x++) {
			for (var y = 0; y < this.height; y++) {
				this.grid[x][y] = new Cell(true, true, true, true);
			}
		}
	}

	print() {
		for (var y = 0; y < this.height; y++) {
			var row;
			if (y == 0) {
				// Generate top-border
				row = ",";
				for (var x = 0; x < this.width; x++) {
					if (!this.grid[x][y].canMoveUp()) {
						row += "--";
					} else {
						row += "  ";
					}
					// Add the spacer between each cell
					row += ",";
				}
				console.log(row);
			}

			row = "";
			for (var x = 0; x < this.width; x++) {
				// Left wall
				if (!this.grid[x][y].canMoveLeft()) {
					row += "|";
				} else {
					row += " ";
				}
				// Cell's "center"
				row += "  ";
			}

			if (!this.grid[this.width - 1][y].canMoveRight()) {
				row += "|";
			} else {
				row += " ";
			}
			console.log(row);

			// TODO figure out how to draw a wall preventing a move up and down

			if (y == this.height - 1) {
				// Generate bottom-border
				row = ",";
				for (var x = 0; x < this.width; x++) {
					if (!this.grid[x][y].canMoveDown()) {
						row += "--";
					} else {
						row += "  ";
					}
					// Add the spacer between each cell
					row += ",";
				}
				console.log(row);
			}
		}
	}
};
