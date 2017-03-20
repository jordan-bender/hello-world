
$(function() {

  var $editor = $('.textEditor').prop('contenteditable', true);
  var $btn = $('span[data-cmd]');
  var tag2cmd = {"B":'bold', "I":'italic'};

  // HIGHLIGHT BUTTONS on content selection
  function findParentNode(el) {

	$btn.removeClass('selected');

	var tagsArr = [];
	var testObj = el.parentNode || '';
	if(!testObj){return;}

	var c = 1;
	tagsArr.push(el.nodeName);
	if(el.tagName!='DIV'){
		while(testObj.tagName != 'DIV') {
			c++;
			tagsArr.push(testObj.nodeName);
			testObj = testObj.parentNode;
		}
		for(i=0;i<c;i++){
			$('[data-cmd="'+ tag2cmd[tagsArr[i]] +'"]').addClass('selected');
		}
      console.log( tagsArr );
	}

  }
  // EXECUTE COMMAND
  function execCmd(cmd, arg){
    document.execCommand(cmd,false,arg);
  }

  $btn.mousedown(function(e) {
    e.preventDefault();
    $(this).toggleClass("selected");
    execCmd(this.dataset.cmd);
  });

  $("#fonts").change(function() {
    execCmd("FontName", this.value);
    console.log(this.value);
  });


  // Having a button click toggleClass is not enough cause you'd also want
  // to change button state when the user clicks on different
  // elements tag inside the editor.

  var $lastSelected;
  $editor.on('mouseup', function( e ){
	e.stopPropagation();
	$lastSelected = e.target;
	findParentNode($lastSelected); // auto highlight select buttons


  });

});



$(".textEditor").click(function(){

  console.log($(this).html());


})
