import { Calculator } from "./Calculator";

class DecCalculator extends Calculator {
    constructor(settings) {
        super(settings);
        console.log(this.getName());
    }

    add(numberX, numberY) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            let carryBit = numberX[i] + numberY[i] + result[i];
            if (carryBit > 9) {
                result[i-1] += 1;
                result[i] = carryBit - 10;
            }else{
                result[i] = carryBit;
            }
        }
        return result;
    };

    changeNumber(root) {
        let activeElement = root.find('.active');
        activeElement.attr('contenteditable', true);
    }

    updateResult() {
        let root =  this.$calculatorDOMElement;
        let $resultNumber = root.children(".group-number").children(".result-bit");
        for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
            let valueResult = parseInt( $resultNumber.eq(j).find(".active").text() );
            if( this.resultNumberArray[i] != valueResult ) {
                let activeElement = $resultNumber.eq(j).find(".active");
                activeElement.text(this.resultNumberArray[i]);
            }
        }
    }
}



export { DecCalculator };
