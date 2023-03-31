class Matrix { //matrix class with its properties
    numberRows: number
    numberColumns: number
    elements: number[][]

    constructor(numberRows: number, numberColumns:number){ //constructor asking for number of rows and columns
        this.numberRows = numberRows
        this.numberColumns = numberColumns
        this.elements = new Array(numberRows).fill(0).map(()=> new Array(numberColumns).fill(0)) //matrix initialized as zero matrix

    }

    //getter for rows and columns
    getRows():number{
        return this.numberRows
    }

    getColumns():number{
        return this.numberColumns
    }

    //method to give each element a value
    setElement(row:number,column:number,value:number):void{
        if (row<=this.numberRows && column<=this.numberColumns){
        this.elements[row][column] = value}
    }

    //add function receiving a matrix which will be summed to the matrix for which the method was called
    add(matrix: Matrix): Matrix | null{
        if (matrix.getRows()!==this.numberRows || matrix.getColumns()!==this.numberColumns){ //If the matrices aren the same size...
            console.log('NOOP')
            return null
        }

        const result = new Matrix(this.numberRows,this.numberColumns) //variable to contain the summed matrix

        for (let i =0;i<this.numberRows;i++){
            for(let j=0;j<this.numberColumns;j++){
                result.setElement(i,j,matrix.elements[i][j]+this.elements[i][j]) //we add every corresponding element in each matrix
            }
        }
        return result
    }

    //multiply function receiving a matrix which will be summed to the matrix for which the method was called
    mult(matrix:Matrix):Matrix | null{
        if (matrix.getRows()!==this.numberColumns){ //if left matrix has different column number than right matrixs row number
            console.log('NOOP')
            return null
        }

        const result = new Matrix(this.numberRows,this.numberColumns)// variable to contain the multiplied matrix

        for (let i=0;i<this.numberRows;i++){
            for (let j=0;j<matrix.getColumns();j++){
                let sum=0
                for (let n=0;n<this.numberColumns;n++){
                    sum+=this.elements[i][n]*matrix.elements[n][j] //formula for each element of a matrix multiplication
                }
                result.setElement(i,j,sum)
            } 
        }
        return result
    }

}