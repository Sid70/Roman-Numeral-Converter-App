function convertToRoman() {


    let num = document.getElementById('Word').value;
    const arabic_num = new Array(1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000); //Arabic numerals
    const roman_numerals = new Array('I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M');
    let count = 0;
    let str = "";

    for (let i = 0; i < arabic_num.length; i++) {
        if (num >= arabic_num[i]) {
            count++;
        }
        else {
            break;
        }
    }

    let j = count - 1;
    let r;

    for (let i = j; i >= 0; i--) {
        r = parseInt(num / arabic_num[i]);

        for (let k = 0; k < r; k++) {
            str += roman_numerals[i];
        }

        num %= arabic_num[i];

        if (num == 0) {
            break;
        }
    }

    document.getElementById('Throw').innerHTML = str;
}
