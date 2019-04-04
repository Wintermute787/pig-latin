$(function () {
    $("#latin-form").submit(function (event) {
        event.preventDefault();
        var sentence = $('input#sentence').val();

        function translatePigLatin(str) {
            //setup an array of vowels//
            var vowels = ['a', 'e', 'i', 'o', 'u'],
                //setup resut to split the argument into an array of letters with split//
                result = str.split('');

            //does the vowels array INCLUDE the first character of the string (returns true or false)//
            if (vowels.includes(str.charAt(0))) {
                //if a vowel is found as the first letter, place 'way' at the end//
                return str += 'way';
            } else {
                //checking to see if the string includes a constonate.// 
                for (var i = 0; i < str.length; i++) {
                    //if str does NOT include a vowel//
                    if (!vowels.includes(str[i])) {
                        // push into result. shift will take first letter and move it to the back//
                        result.push(result.shift());
                    } else {
                        result.push('ay');
                        return result.join('');
                    };
                };
            };
        };

        $(".latin").text(translatePigLatin(sentence));
    });

});