function convertToRoman(num) {
    
    let Thousands, Hundreds, Tens, roman = ''
    //check if greater than 1000
    if (num>=1000) {
        Thousands = num / 1000;
        // console.log(Thousands)
        for (let i = 0; i < parseInt(Thousands); i++) {
            roman = roman + 'M'
        }
        num = num % 1000;
        // console.log("num after 1000", num)
        // console.log("roman so far ", roman)
    }
    //checking for 900
    if (num >900 && num <1000) {
        roman = roman + 'CM'
        num = num % 900
        // console.log("num after 900", num)
        // console.log("roman so far ", roman)
    }


//checking for 5 hundreds here
if (num >=500 && num<1000) {
    roman = roman + 'D'
    num = num % 500;
    // console.log("num after 500", num)
    //     console.log("roman so far ", roman)
}

//checking for 400
if (num >=400 && num <500) {
    roman = roman + 'CD'
    num = num % 400;
    // console.log("num after 400", num)
    //     console.log("roman so far ", roman)
}

//checking for 100s
if (num  < 400 && num > 100) {
    Hundreds = num / 100;
    for (let i = 0; i < parseInt(Hundreds); i++) {
        roman = roman + 'C'
    }
    num = num % 100;
    // console.log("num after 100", num)
    // console.log("roman so far ", roman)
}

if (num >=90 && num <100) {
    roman = roman + 'XC'
    num = num % 90;
    // console.log("num after 90", num)
    // console.log("roman so far ", roman)
}

if (num >=50 && num < 90) {
    roman = roman + 'L'
    num = num % 50;
    // console.log("num after 50", num)
    // console.log("roman so far ", roman)
}
if (num >=40 && num <50) {
    roman = roman + 'XL'
    num = num % 40;
    // console.log("num after 40", num)
    // console.log("roman so far ", roman)
}

if (num >=10 && num <40) {
    Tens = num/10
    for (let i = 0; i < parseInt(Tens); i++) {
        roman = roman + 'X'
    }
   
    num = num % 10;
    // console.log("num less than 40", num)
    // console.log("roman so far ", roman)
}

if (num < 10) {
    switch (num) {
        case 1:
            roman = roman + 'I'
            // console.log("roman number is  ", roman)
            break;
        case 2:
            roman = roman + 'II'
            // console.log("roman number is  ", roman)
            break;
        case 3:
            roman = roman + 'III'
            // console.log("roman number is  ", roman)
            break;
        case 4:
            roman = roman + 'IV'
            // console.log("roman number is  ", roman)
            break;
        case 5:
            roman = roman + 'V'
            // console.log("roman number is  ", roman)
            break;
        case 6:
            roman = roman + 'VI'
            // console.log("roman number is  ", roman)
            break;
        case 7:
            roman = roman + 'VII'
            // console.log("roman number is  ", roman)
            break;
        case 8:
            roman = roman + 'VIII'
            // console.log("roman number is  ", roman)
            break;
        case 9:
            roman = roman + 'IX'
            // console.log("roman number is  ", roman)
            break;
    }
}

    return roman;
}

   convertToRoman(400);

// answer should be MMMCMXCIX