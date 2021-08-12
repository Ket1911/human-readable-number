module.exports = function toReadable (number) {
  
    const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arr2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let word = '';
    let char = 0;
    let char2 = 0;
    let char3 = 0;


    if (number === 0) {
        word = 'zero';
    
        console.log(word);
        return word.trim();
        
    } else if (number < 20) {
        word = arr[number];
    
        console.log(word);
        return word.trim();
        
    } else if (number >= 20 && number < 100) {
        char = number % 10;
        char2 = (number - char) / 10;
        word = `${arr2[char2]} ${arr[char]}`;
        
        console.log(word);
        return word.trim();

    } else if (number >= 100 && number < 1000) {
        
        if (number % 100 < 20) {
            char = number % 100;
            char3 = (number - char)/100;
            
            word = `${arr[char3]} hundred ${arr[char]}`;

            console.log(word);
            return word.trim();

        } else {
            char = number % 10;
            char2 = ((number - char) % 100) / 10;
            char3 = (number - char - char2 * 10) / 100;

            word = `${arr[char3]} hundred ${arr2[char2]} ${arr[char]}`;
            
            console.log(word);
            return word.trim();
        }


    } else {
        return 'try another number';
    }

    

}



