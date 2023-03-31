var Matrix = /** @class */ (function () {
    function Matrix(numberRows, numberColumns) {
        this.numberRows = numberRows;
        this.numberColumns = numberColumns;
        this.elements = new Array(numberRows).fill(0).map(function () { return new Array(numberColumns).fill(0); }); //matrix initialized as zero matrix
    }
    //getter for rows and columns
    Matrix.prototype.getRows = function () {
        return this.numberRows;
    };
    Matrix.prototype.getColumns = function () {
        return this.numberColumns;
    };
    //method to give each element a value
    Matrix.prototype.setElement = function (row, column, value) {
        if (row <= this.numberRows && column <= this.numberColumns) {
            this.elements[row][column] = value;
        }
    };
    //add function receiving a matrix which will be summed to the matrix for which the method was called
    Matrix.prototype.add = function (matrix) {
        if (matrix.getRows() !== this.numberRows || matrix.getColumns() !== this.numberColumns) { //If the matrices aren the same size...
            console.log('NOOP');
            return null;
        }
        var result = new Matrix(this.numberRows, this.numberColumns); //variable to contain the summed matrix
        for (var i = 0; i < this.numberRows; i++) {
            for (var j = 0; j < this.numberColumns; j++) {
                result.setElement(i, j, matrix.elements[i][j] + this.elements[i][j]); //we add every corresponding element in each matrix
            }
        }
        return result;
    };
    //multiply function receiving a matrix which will be summed to the matrix for which the method was called
    Matrix.prototype.mult = function (matrix) {
        if (matrix.getRows() !== this.numberColumns) { //if left matrix has different column number than right matrixs row number
            console.log('NOOP');
            return null;
        }
        var result = new Matrix(this.numberRows, this.numberColumns); // variable to contain the multiplied matrix
        for (var i = 0; i < this.numberRows; i++) {
            for (var j = 0; j < matrix.getColumns(); j++) {
                var sum = 0;
                for (var n = 0; n < this.numberColumns; n++) {
                    sum += this.elements[i][n] * matrix.elements[n][j]; //formula for each element of a matrix multiplication
                }
                result.setElement(i, j, sum);
            }
        }
        return result;
    };
    return Matrix;
}());
