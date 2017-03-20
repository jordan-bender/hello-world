$(document).ready(function(){


  $("#page-header").each(function(){
    var title = $(this).data('title');
    var subtitle = $(this).data('subtitle');
    var image = $(this).data('image');
    if(subtitle == undefined){
      subtitle = ""
    }
    if(image == "critical thinking"){
      var image = 'images/critical_thinking_image.png';
    }
    if(image == "google slides"){
      var image = 'images/pencil_image.png';
    }
    if(image == "other"){
      var image = 'images/critical_thinking_image.png';
    }
      var html = '<div class="lesson-title"><span id="lessonTitle">'+title+'</span><br/><span id="lessonSubtitle">'+subtitle+'</span><br/><span id=lessonImage"><img class="lessonImage" src="'+image+'"/></div><br/>';
    $(this).prepend(html);

  })


  $('#rubric').each(function(){
  html='<p>Instructions:<br/>Using the rubric below as your guide, please answer the following critical thinking questions. <br/>Make sure that you have the following in your responses:</p><span>Standard critical thinking rubric</span><ul><li>complete paragraph (5-7 sentences)</li><li>use lesson content where necessary</li><li>completely answer questions</li><li>correct spelling and grammar are used</li></ul><div><table class="rubric"><tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr class="top"><td>Does not complete assignment</td><td><ul><li>Paragraph is 1 sentence</li><li>Question is not answered correctly</li><li>No use of lesson content</li><li>4 or more grammar and spelling errors</li></ul></td><td><ul><li>Paragraph is 2-3 sentences</li><li>Question is partially answered</li><li>Minimal use of lesson content</li><li>3 or less grammar and spelling errors</li></ul></td><td><ul><li>Paragraph is 3-5 sentences</li><li>Question is mostly answered</li><li>Use of lesson content</li><li>2 or less grammar and spelling errors</li></ul></td><td><ul><li>Paragraph is 5-7 sentences</li><li>Question is completely answered</li><li>Adequate use of lesson content</li><li>Correct grammar and spelling</li></ul></td></tr></table><br/></div>'
  $(this).html(html);

  html2='<div><table class="rubric2"><tr><th>Rubric</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr class="top r_length"><td class="rubric_cat">LENGTH</td><td rowspan="4" class="no_answer">No Answer</td><td>1 sentence</td><td>2-3 sentences</td><td>4-5 sentences</td><td>6+ sentences</td></tr><tr class="r_completion"><td class="rubric_cat">COMPLETION</td><td>incorrect answer</td><td>partially answered</td><td>mostly answered</td><td>completely answered</td></tr><tr class="r_content"><td class="rubric_cat">CONTENT</td><td>no use of lesson content</td><td>minimal use of lesson content</td><td>some lesson content</td><td>adequate lesson content</td></tr><tr class="r_spelling"><td class="rubric_cat">GRAMMAR & SPELLING</td><td>4 mistakes or more</td><td>3 mistakes</td><td>2 mistakes</td><td>1 mistake or less</td></tr></tr></table><br/></div>'
  $(this).html(html2);

  });




	$('.rubric_question').each(function(){
	var textarea_id=$(this).attr('id');
	var html="<br/><table class='grading_table'><tr><td>Sentences = <input type='text' class='sentence_count' id='count_"+textarea_id+"'/></td><td class='a_right'><img class='icon_rubric' id='icon_"+textarea_id+"' src='images/icon_rubric.png'/>&nbsp;&nbsp;Score = <input type='text' class='score' id='score_"+textarea_id+"'/></td></tr></table><div><table class='active_rubric rubric2' id='rubric_"+textarea_id+"'><tr><th>Rubric</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr class='top r_length'><td class='rubric_cat'>LENGTH</td><td rowspan='4' data-points='0' class='no_answer'>No Answer</td><td data-points='1'>1<br/>sentence</td><td data-points='2'>2-3<br/>sentences</td><td data-points='3'>4-5<br/>sentences</td><td data-points='4'>6+<br/>sentences</td></tr><tr class='r_completion'><td class='rubric_cat'>COMPLETION</td><td data-points='1'>incorrect answer</td><td data-points='2'>partially answered</td><td data-points='3'>mostly answered</td><td data-points='4'>completely answered</td></tr><tr class='r_content'><td class='rubric_cat'>CONTENT</td><td data-points='1'>no use of lesson content</td><td data-points='2'>minimal use of lesson content</td><td data-points='3'>some use of lesson content</td><td data-points='4'>adequate lesson content</td></tr><tr class='r_spelling'><td class='rubric_cat'>GRAMMAR & SPELLING</td><td data-points='1'>4 mistakes or more</td><td data-points='2'>3 mistakes</td><td data-points='3'>2 mistakes</td><td data-points='4'>1 mistake or less</td></tr></tr></table><br/></div>";
	$(this).after(html);
});

$('.icon_rubric').click(function(){
	var root_id=$(this).attr('id').replace('icon_','');
	var student_answer=$('#'+root_id).val();
	var sentence_count=count_sentences(student_answer);
	var word_count=count_words(student_answer);
	//Count the sentences and assign points
	var points=0;
	if(word_count!=0){
		if(sentence_count==1||sentence_count==0){
			points=1;
		}
		if(sentence_count==2||sentence_count==3){
			points=2;
		}
		if(sentence_count==4||sentence_count==5){
			points=3;
		}
		if(sentence_count>5){
			points=4;
		}
	}
	//Figure out which rubric cell is currently selected
	var rubric_now=$('#rubric_'+root_id).find('.r_length').find('.r_selected').data('points');
	//Only auto-score it the first time it opens
	if(rubric_now==0&&points>0){
		$('#rubric_'+root_id).find('.r_length').find('td').each(function(){
			$(this).removeClass('r_selected');
			if($(this).attr('data-points')==points){
				$(this).addClass('r_selected');
			}
		})
	}
	//Count the mistakes and assign points.
	var ginger_wrapper_number=$(this).attr('id').replace('icon_q','')*2-1;
	var ginger_wrapper=$('#GRwrapper'+ginger_wrapper_number);
	var mistake_count=ginger_wrapper.find('.GRcorrect').length;
	var points=0;
	if(word_count!=0){
		if(mistake_count>3){
			points=1;
		}
		if(mistake_count==3){
			points=2;
		}
		if(mistake_count==2){
			points=3;
		}
		if(mistake_count<2){
			points=4;
		}
	}
	//Figure out which rubric cell is currently selected
	rubric_now=$('#rubric_'+root_id).find('.r_spelling').find('.r_selected').length;
	//Only auto-grade the first time it opens
	if(rubric_now==0){
		$('#rubric_'+root_id).find('.r_spelling').find('td').each(function(){
			$(this).removeClass('r_selected');
			if($(this).attr('data-points')==points){
				$(this).addClass('r_selected');
			}
		})
	}
	var active_rubric=$('#'+$(this).attr('id').replace('icon_','rubric_'));
	update_rubric_score($('#rubric_'+root_id));
	if(active_rubric.is(":visible")){
	   active_rubric.hide();
	   }
	else{active_rubric.show();}
})

function count_sentences(string){
	var count='';
	if(string==''){
		count=0;
	}
	else{
	string=string+' A';
	string=string.replace(/Mr\./g,'Mr').replace(/Mrs\./g,'Mrs').replace(/Ms\./g,'Ms').replace(/Dr\./g,'Dr').replace(/Rev\./g,'Rev').replace(/Sr\./g,'Sr').replace(/Jr\./g,'Jr').replace(/Mon\./g,'Mon').replace(/Tue\./g,'Tue').replace(/Wed\./g,'Wed').replace(/Thu\./g,'Thu').replace(/Fri\./g,'Fri').replace(/Sat\./g,'Sat').replace(/Sun\./g,'Sun').replace(/Jan\./g,'Jan').replace(/Feb\./g,'Feb').replace(/Apr\./g,'Apr').replace(/Aug\./g,'Aug').replace(/Sep\./g,'Sep').replace(/Oct\./g,'Oct').replace(/Nov\./g,'Nov').replace(/Dec\./g,'Dec');
	string=string.replace(/[A-Z][A-Z\.]+/g,'Abbrev');
	count=string.match(/[\.|\?|\!][\sA-Z]/g);
	if(count==null){
		count=0
	}
	else{
		count=count.length
	}
	}
	return count;


}

function count_words(string){
	var word_count='';
	if(string==''){
		word_count=0;
	}
	else{
		word_count=string.match(/\b[a-zA-Z]+\b/g).length;
	}
	return word_count;
}

$('.rubric_question').keyup(function(){
	var count_box=$('#count_'+$(this).attr('id'));
	var student_answer=$(this).val();
	count_box.val(count_sentences($(this).val()));
})

$('.rubric_question').each(function(){
	var root_id=$(this).attr('id');
	word_count=count_words($(this).val());
	if(word_count==0){
		$('#rubric_'+root_id).find('.r_length').find('td').each(function(){
			if($(this).attr('data-points')=='0'){
				$(this).addClass('r_selected');
				$('#score_'+root_id).val('0');
			}
		})
	}
})

$('body').on('click','.rubric2 td',function(){
	if($(this).hasClass('no_answer')){
		$(this).parents('table').first().find('td').each(function(){$(this).removeClass('r_selected')});
		$(this).addClass('r_selected');
	}
	else{
		$(this).parents('table').first().find('.no_answer').removeClass('r_selected');
		$(this).parents('tr').first().find('td').each(function(){$(this).removeClass('r_selected');});
		$(this).addClass('r_selected');
	}
	update_rubric_score($(this).parents('table').first());
});

function update_rubric_score(rubric){
	var score_box=$('#score_'+rubric.attr('id').replace('rubric_',''));
	var current_score=0;
	rubric.find('td').each(function(){
		if($(this).hasClass('r_selected')){
			current_score=current_score+$(this).data('points')*1;
		}
	});
	current_score=current_score/4;
	score_box.val(current_score);
}



});

//Rubric Cell Prototype
function Rubric_cell(criteria,index,text){
	this.criteria=criteria;
	this.index=index;
	this.text=text;
}

//Rubric Prototype
function Rubric(type,title,scores,criteria,cell_array,zero){
	this.type=type;
	this.title=title;
	this.scores=scores;
	this.criteria=criteria;
	this.cell_array=cell_array;
	this.zero=zero;
	this.points_earned= function(){

	}
	this.points_possible= function(){

	}
	this.html= function(){
		return generate_dynamic_rubric(this);
	}
}
//All the data for the cells in the google slide rubric
var gs_cell_array = [
	new Rubric_cell('Length','1',"Slides are missing most requires items.  Slide show contains 1-2 slides."),
	new Rubric_cell('Length','2',"Only 1/4 info on slides.  Or slide show contains only 1/4 required slides."),
	new Rubric_cell('Length','3',"A"),
	new Rubric_cell('Length','4',"A"),
	new Rubric_cell('Length','5',"A"),
	new Rubric_cell('Mechanics','1',"A"),
	new Rubric_cell('Mechanics','2',"A"),
	new Rubric_cell('Mechanics','3',"A"),
	new Rubric_cell('Mechanics','4',"A"),
	new Rubric_cell('Mechanics','5',"A"),
	new Rubric_cell('Graphics','1',"A"),
	new Rubric_cell('Graphics','2',"A"),
	new Rubric_cell('Graphics','3',"A"),
	new Rubric_cell('Graphics','4',"A"),
	new Rubric_cell('Graphics','5',"A"),
	new Rubric_cell('Language','1',"A"),
	new Rubric_cell('Language','2',"A"),
	new Rubric_cell('Language','3',"A"),
	new Rubric_cell('Language','4',"A"),
	new Rubric_cell('Language','5',"A"),
	new Rubric_cell('Presentation','1',"A"),
	new Rubric_cell('Presentation','2',"A"),
	new Rubric_cell('Presentation','3',"A"),
	new Rubric_cell('Presentation','4',"A"),
	new Rubric_cell('Presentation','5',"A"),
	new Rubric_cell('Sources','1',"A"),
	new Rubric_cell('Sources','2',"A"),
	new Rubric_cell('Sources','3',"A"),
	new Rubric_cell('Sources','4',"A"),
	new Rubric_cell('Sources','5',"A")
]
//Create a google slide rubric
var gs_rubric = new Rubric(
	"gs_rubric",
	"Google Slide Presentation General Rubric",
	[0,1,2,3,4,5],
	["Mechanics","Graphics","Language","Length","Presentation","Sources"],
	gs_cell_array,
	"Does not complete assignment."
);

console.log(gs_rubric);

var rubric_array=[gs_rubric];

$(document).ready(function(){
	$('.rubric_placeholder').each(function(){
		var desired_rubric=$(this).data('type');
		for(a=0; a<rubric_array.length; a++){
			if(desired_rubric==rubric_array[a].type){
				$(this).html(rubric_array[a].html());
				return;
			}
		}
	})
})

function generate_dynamic_rubric(rubric){
	var html='';
	var col_count=rubric.scores.length+1;
	var colspan=col_count-1;
	var row_count=rubric.criteria.length+3;
	var rowspan=row_count-3;
	var text='';
	var criteria='';
	var a=0;

	for(a=0; a<row_count; a++){
		//First row is just for the rubric title
		if(a==0){
			html="<table class='"+rubric.type+"'><tr class='title_row'><td colspan='"+col_count+"'>"+rubric.title+"</td></tr>"
		}
		//Second row is for the point categories
		if(a==1){
			html=html+"<tr class='score_row'>";
			for(b=0; b<col_count; b++){
				if(b==0){
					html=html+"<td class='points_label'>Points</td>";
				}
				else{
					html=html+"<td>"+rubric.scores[b-1]+"</td>";
				}
				if(b==col_count){
					html=html+"</tr>"
				}
			}
		}
		//Third row gets the zero cell
		if(a==2){
			criteria=rubric.criteria[a-2];
			html=html+"<tr class='criteria_row'>";
			for(b=0; b<col_count; b++){
				if(b==0){
					html=html+"<td class='criteria_label'>"+criteria+"</td>"
				}
				if(b==1){
					text=rubric.zero;
					html=html+"<td rowspan='"+rowspan+"'>"+text+"</td>";
				}
				if(b>1){
					text=get_cell_text(rubric,criteria,b-1);
					html=html+"<td>"+text+"</td>"
				}
				if(b==col_count){
					html=html+"</tr>";
				}
			}
		}
		//Rest of the rows just get criteria descriptions
		if(a>2&&a<row_count-1){
			criteria=rubric.criteria[a-2];
			html=html+"<tr class='criteria_row'>";
			for(b=0; b<col_count-1; b++){
				if(b==0){
					html=html+"<td class='criteria_label'>"+criteria+"</td>"
				}
				else{
					text=get_cell_text(rubric,criteria,b);
					html=html+"<td>"+text+"</td>"
				}
				if(b==col_count){
					html=html+"</tr>";
				}
			}
		}
		//Last row gets teh point total
		if(a==row_count-1){
			html=html+"<tr class='final_row'><td colspan='"+colspan+"'>POINT TOTAL</td><td><input type='text' class='rubric_total'/></td></tr>"
		}
	}
	html=html+"</table>";
	return html;
}

function get_cell_text(rubric,criteria,index){
	var a=0;
	for(a=0; a<rubric.cell_array.length; a++){
		if(rubric.cell_array[a].criteria==criteria&&rubric.cell_array[a].index==index){
			return rubric.cell_array[a].text;
		}
	}
}

$('.gs_rubric').find('td').each(function(){
	$(this).css('border','solid black 1px');
})


// Removed Credentials - DRT

//Jordan was here

//I am typing stuff

