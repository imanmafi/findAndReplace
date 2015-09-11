function FindAndReplace(input_sentence, target_word, replacement_word) {
  var input_new = input_sentence.replace(/\W+/g, ' ').toLowerCase().split(" ");
  var target_word =target_word.toLowerCase();
  var replacement_word = replacement_word.toLowerCase();

  input_new.forEach(function(word){
      if (word === target_word ){
        input_new[input_new.indexOf(word)] = replacement_word;
      }
  });

  return input_new.join(" ").trim();

}


$(document).ready(function()  {
  $("form#find_and_replace").submit(function(event) {
    var input_sentence = ($("input#input_sentence").val());
    var target_word = ($("input#target_word").val());
    var replacement_word = ($("input#replacement_word").val());

    var result = FindAndReplace(input_sentence, target_word, replacement_word);

    $(".find_and_replace").text(result);

    $("#result").show();
    event.preventDefault();

  });

});
