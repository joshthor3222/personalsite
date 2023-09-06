//on page load, check .post-list - make an array of all li elements
$(document).ready(function() {
    console.log("hit");
    var listItems = $('.post-list li');
    var finalList = [];

    var shorts = 0;
    for(var i = 0; i < listItems.length; i++) {
        //check if the current li is short
        $(listItems[i]).hasClass('small') ? shorts++ : shorts = 0;
        console.log(shorts);

        //if shorts is an odd number, check if the next one is short
        if(shorts % 2 == 1 && i < listItems.length - 1) {
            if($(listItems[i+1]).hasClass('small')) {
                //if it is, add the next one to the array and increment i
                finalList.push(listItems[i]);
            }
            //if it isn't, add the current one to the array
            else {
                //we need to
                finalList.push(listItems[i + 1]);
                finalList.push(listItems[i]);
                i++;
                shorts = 1;
            }
        }
        else {
            finalList.push(listItems[i]);
        }
    }

    //reorder $('.post-list') with the new array
    $('.post-list').html(finalList);
    console.log(finalList);

});