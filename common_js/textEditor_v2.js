
$(document).ready(function(){

  var $editor = $('.textEditor').prop('contenteditable', true);
  var $btn = $('span[data-cmd]');
  var tag2cmd = {"B":'bold', "I":'italic'};

  // HIGHLIGHT BUTTONS on content selection
  function findParentNode(el,editor) {

	$btn.removeClass('selected');

	var tagsArr = [];
	var testObj = el.parentNode || '';
	if(!testObj){return;}

	mode="first";
	if(editor.children('span').length>0){
		mode="second";
	}

	var c = 1;
	tagsArr.push(el.nodeName);

	if(el.tagName!='DIV'&&mode=="first"){
		testObj=el;
		while(testObj.tagName != 'DIV') {
			c++;
			tagsArr.push(testObj.tagName);
			testObj = testObj.parentNode;
		}
		for(i=0;i<c;i++){
			$('[data-cmd="'+ tag2cmd[tagsArr[i]] +'"]').addClass('selected');
		}
	}

	if(el.tagName!='SPAN'&&mode=='second'){
		testObj=el;
		while(testObj.tagName!='DIV'&&testObj.tagName!='SPAN') {
			c++;
			tagsArr.push(testObj.nodeName);
			testObj = testObj.parentNode;
		}
		for(i=0;i<c;i++){
			$('[data-cmd="'+ tag2cmd[tagsArr[i]] +'"]').addClass('selected');
		}
	}

	if(el.tagName=='DIV'&&mode=="second"){
		testObj=el;
		text=editor.html().replace(/<\/span>/g,'').replace(/<\/div>/g,'');
		end=text.substr(length-1);
		if(end==">"){
			end=text.substr(length-8);
			console.log(end);
			if(end.indexOf('/b')>=0&&end.indexOf('/i')>=0){
				$('#bold').toggleClass("selected");
				$('#italic').toggleClass("selected");
			}
			else{
			end=text.substr(length-4);
				if(end=='</b>'){
					$('#bold').toggleClass("selected");
				}
				if(end=='</i>'){
					$('#italic').toggleClass("selected");
				}
			}
		}
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
	findParentNode($lastSelected,$(this)); // auto highlight select buttons


  });


});

$(document).ready(function(){
	$('.textEditor').each(function(){
		$(this).blur(function(){
			currentText=$(this).html();
			if(currentText.indexOf('<span>')>=0){
				currentText=currentText.replace('<span>','').replace('</span>','');
			}
			$(this).html('<span>'+currentText+'</span>');
		});
	});

});




