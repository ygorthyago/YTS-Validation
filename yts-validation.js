$(document).ready(function(){
  $.fn.ytsValidation = function(){
    this.submit(function(){
      var inputN = 0;

      var rnText = 0;
      var returnedText = 1;
      $(this).find('input[data-yts-val=true]').each(function(){
        numberText = rnText;
        thisName = $(this).attr("data-yts-name");

        if (thisName) {
          thisName = thisName;
        } else {
          placeholder = $(this).attr("placeholder");
          thisName = placeholder.replace(":", "");
        }

        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var textEmail = $(this).attr('id');
          emailOK = 1;

        if (textEmail == 'email') {
          if (testEmail.test(this.value)) {
            emailOK = 1;
          } else {
            emailOK = 0;
          }
        }

        var thisInput = $(this);
        if ( $(this).val() == '') {
          $(this).prev('.error').remove();
          $(thisInput).css({'background' : '#ffd6d6'});
          var nome = $(thisInput);
          $("<span class='error'>Preenchimento do campo " + thisName + " Obrigatório!</span>").insertBefore(nome);
          $(thisInput).css({'opacity': '1', 'transition' : 'all .5s linear'});
          var ret = 0;
        } else if (emailOK == 0 && $(this).val() != '') {
          $(this).prev('.error').remove();
          $(thisInput).css({'background' : '#ffd6d6'});
          var nome = $(thisInput);
          $("<span class='error'>Insira um Email válido no campo " + thisName + "!</span>").insertBefore(nome);
          $(thisInput).css({'opacity': '1', 'transition' : 'all .5s linear'});
          var ret = 0;
        } else {
          $(this).css({'background' : '#fff'});
          $(this).prev('.error').remove();
          ret = 1;
          numberText++;
        }
        rnText = numberText;
        returnedText = ret;
        inputN++;

        return inputN;
        return rnText;
        return returnedText;
      });

      var rnAll = rnText;

      if (rnAll != inputN) {
        return false;
      }else if (returnedText == 0) {
        return false;
      } else {
        return true;
      }
    })
  }

  $("form").ytsValidation();
});
