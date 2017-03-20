/*jslint plusplus: true */
/*globals $: false, api: false, console: false, autoCorrect: false, getCode: false */

// JavaScript Document
// This document is for evaluating the SCORM+ API data for autograding interactive assignments in BrainHoney (worksheets, forms, custom interactice assignments)

// This code creates the Header section of the HTML with evaluation tools abd buttons
function createEvalDashboard() {
    "use strict";
    var evalHTML = "<header><div id='evalNav'><div id='reportScore'></div><button type='button' id='updateScoreButton' class='evalReport'>RECORD</button></div></header>";
    $("main").before(evalHTML);
}


// This code searches for the ID "grade" on the webpage (up 6 levels) and gets the score
function getScoreInputBox() {
    "use strict";
    var score = 0;
    if (parent.document.getElementById('grade')) {
        score = parent.document.getElementById('grade').value;
    } else if (parent.parent.document.getElementById('grade')) {
        score = parent.parent.document.getElementById('grade').value;
    } else if (parent.parent.parent.document.getElementById('grade')) {
        score = parent.parent.parent.document.getElementById('grade').value;
    } else if (parent.parent.parent.parent.document.getElementById('grade')) {
        score = parent.parent.parent.parent.document.getElementById('grade').value;
    } else if (parent.parent.parent.parent.parent.document.getElementById('grade')) {
        score = parent.parent.parent.parent.parent.document.getElementById('grade').value;
    } else if (parent.parent.parent.parent.parent.parent.document.getElementById('grade')) {
        score = parent.parent.parent.parent.parent.parent.document.getElementById('grade').value;
    }
    return score;
}


// This code creates an onscreen report of the student's score
function evaluationReport() {
    "use strict";
    var i,
        filteredDataIIDArray = [],
        n,
        earned = 0,
        totalPointsPossible,
        score = "",
        reportTable,
        code = getCode()[0];



   $('.score').each(function(){
	  earned=earned*1+1*$(this).val();
   });
    totalPointsPossible = $('.rubric_question').length*4;
    score = Math.round(earned / totalPointsPossible * 100);
    $("#reportScore").html("<table style='text-align: center;' width='100%'><tr>" +
                           "<th>Points Earned</th><th>Total Points</th><th>Score</th></tr>" +
                           "<tr><td><span id='earnedPoints'>" + earned + "</span></td><td>" + totalPointsPossible + "</td><td>" +
                           "<span id='scoreByPercent'>" + score + "</span>%</td></tr>" +
                           "</table>");
    return totalPointsPossible;
}


// This code searches for the ID "grade" on the webpage (up 6 levels) and updates the score
function updateScoreInputBox(newScore) {
    "use strict";
    if (parent.document.getElementById('grade')) {
        parent.document.getElementById('grade').value = newScore;
    } else if (parent.parent.document.getElementById('grade')) {
        parent.parent.document.getElementById('grade').value = newScore;
    } else if (parent.parent.parent.document.getElementById('grade')) {
        parent.parent.parent.document.getElementById('grade').value = newScore;
    } else if (parent.parent.parent.parent.document.getElementById('grade')) {
        parent.parent.parent.parent.document.getElementById('grade').value = newScore;
    } else if (parent.parent.parent.parent.parent.document.getElementById('grade')) {
        parent.parent.parent.parent.parent.document.getElementById('grade').value = newScore;
    } else if (parent.parent.parent.parent.parent.parent.document.getElementById('grade')) {
        parent.parent.parent.parent.parent.parent.document.getElementById('grade').value = newScore;
    }
}

// This code searches for the first button with text "Add Notes" on the webpage (up 10 levels),triggers a click, and then records the rubric values
function rubrics_to_note() {
    "use strict";
	 var note_btn='';
	var main_grade='';
	 note_btn=$('#edit_notes_btn',window.parent.document).first();
    if (note_btn.length==1) {
		main_grade=note_btn.parents('.gradetable').first();
       	note_btn.trigger('click');
    } else {
		note_btn=$('#edit_notes_btn',window.parent.parent.document).first();
		if (note_btn.length==1) {
			main_grade=note_btn.parents('.gradetable').first();
       		note_btn.trigger('click');
    	} else {
			note_btn=$('#edit_notes_btn',window.parent.parent.parent.document).first();
			if (note_btn.length==1) {
				main_grade=note_btn.parents('.gradetable').first();
       			note_btn.trigger('click');
    		} else {
				note_btn=$('#edit_notes_btn',window.parent.parent.parent.parent.document).first();
				if (note_btn.length==1) {
					main_grade=note_btn.parents('.gradetable').first();
       				note_btn.trigger('click');
    			} else {
					note_btn=$('#edit_notes_btn',window.parent.parent.parent.parent.parent.document).first();
					if (note_btn.length==1) {
						main_grade=note_btn.parents('.gradetable').first();
       					note_btn.trigger('click');
    				} else {
						alert("There was a problem writing a student note.  You may need to do it by hand.");
					}
				}
			}
		}
	}
	main_grade.find('iframe').each(function(){
		console.log($(this));
	});

}


$(document).ready(function (e) {
    "use strict";
    var mode = api.GetValue("cmi.mode"),
        earnedPoints,
        totalPointsPossible,
        newScore,
        modifiedScore = getScoreInputBox(),
        modifiedPoints;

    if (mode !== "normal") {
        document.getElementById("lockMode").style.height = "0%";
        document.getElementById("lockMode").style.width = "0%";
        $("#overlay-content").empty();
        $(".submitSCORM").hide();
        createEvalDashboard();
        totalPointsPossible = evaluationReport();
        modifiedPoints = Math.round(totalPointsPossible * modifiedScore / 100);
        $("#modifiedPointsEarned").val(modifiedPoints);
        $("#updateScoreButton").click(function () {
            updateScoreInputBox($("#scoreByPercent").html()*1);
			rubrics_to_note();
        });
    }
});
