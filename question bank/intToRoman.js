
// 暴力解法
(function () {
    var intToRoman = function (num) {
        const string = num.toString();
        const length = string.length;
        let results = ""
        let index = 0;
        for (let char of string) {
            const value = Number(char);
            const digit = length - index - 1;
            results += getCharRoman(value, digit)
            index++;
        }
        return results
    };


    function getCharRoman(number, digit) {
        const base = 10 ** Number(digit);
        let result = '';
        if (number < 4) {
            result += getRoman(base).repeat(number)
        }
        else if (number === 4) {
            result += getRoman(base)
            result += getRoman(base * 5)
        } else if (number < 9 && number > 4) {
            result += getRoman(base * 5)
            result += getRoman(base).repeat(number - 5)
        } else if (number === 9) {
            result += getRoman(base)
            result += getRoman(base * 10)
        }
        return result;
    }

    function getRoman(number) {
        let romanChar;
        switch (number) {
            case 1:
                romanChar = "I";
                break;
            case 5: romanChar = "V";
                break;
            case 10: romanChar = "X";
                break;
            case 50: romanChar = "L"
                break;
            case 100: romanChar = "C"
                break;
            case 500: romanChar = "D"
                break;
            case 1000: romanChar = "M"
                break;
            default: romanChar = ""
                break;
        }
        return romanChar
    }

    // console.log(intToRoman(4))
})();
// 贪心算法

(function () {

    function intToRoman(num) {
        const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        let results = '', index = 0
        while (num > 0) {
            if (num >= nums[index]) {
                num = num - nums[index];
                results+= romans[index]
            } else {
                index++;
            }
        }
        return results
    }
    console.log(intToRoman(1994))
})()