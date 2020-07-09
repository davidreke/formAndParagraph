console.log('app.js is linked')

function createParagraph () {
    console.log('create Paragraph has been called');
    var wordOne = document.getElementById('textOne').value;
    var wordTwo = document.getElementById('textTwo').value;
    console.log(    wordOne   ,     wordTwo    );

    var paragraph = '<p> My first word is :' + wordOne + '. My Second word is :' + wordTwo + '.</p>';
   
    console.log(paragraph);

    document.getElementById('answer').innerHTML = paragraph;
}
