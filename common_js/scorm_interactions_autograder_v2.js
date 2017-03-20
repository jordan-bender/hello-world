/*jslint plusplus: true */
/*globals $: false, api: false, console: false, confirm: false, alert: false, top: false */

// JavaScript Document
// This document contains the SCORM+ API info for autograding interactions in BrainHoney for interactive assignments (worksheets, forms, custom interactice assignments)
console.log(api);
if(api){
// This code creates the Header section of the HTML with evaluation tools and buttons
function createEvalHead() {
    "use strict";
    var evalHTML = "<head><script type='text/javascript' src='common_js/scorm_evaluationReports_v3.js'></script></head>";
    $("main").before(evalHTML);
}


/* ANSWERS INPUT GUIDE FOR SCORM
fill-in: a string less than 250 characters (multiple patterns allowed)
long-fill-in: a string less than 4000 characters (multiple patterns allowed)
numeric: a number range (even if the answer is a single number). The format is "lower number" than "higher number" separated by [:] (only one pattern allowed)
*/
function setCorrectResponsePattern() {
    "use strict";
    $(".save").each(function () {
        var n = $(this).attr("data-iid"),
            type = $(this).attr("type"),
            foundInBH = false,
            cRPCount = api.GetValue("cmi.interactions." + n + ".correct_responses._count"),
            cRPSCORM = "",
            cRP = "",
            m = "";

        if (type === "text" || type === "num" || type === "numrange" || type === "textarea" || type === "checkbox") {
            cRP = $(this).attr("data-ans");
        } else if (type === "radio") {
            if ($(this).attr("data-ans") === "true") {
                cRP = $(this).attr("id");
            }
        }
        for (m = 0; m < cRPCount; m++) {
            // Check if the correct response pattern for the interaction has been recorded in BrainHoney
            cRPSCORM = api.GetValue("cmi.interactions." + n + ".correct_responses." + m + ".pattern");
            if (cRP === cRPSCORM) {
                foundInBH = true;
                break;
            }
        }
        if (!foundInBH && cRP !== "") {
            // Create the index for a new correct response pattern for the interaction in BrainHoney
            m = cRPCount;
            api.SetValue("cmi.interactions." + n + ".correct_responses." + m + ".pattern", cRP);
            api.Commit("");
        }
        $(this).removeAttr("data-ans");
    });
}


// This code checks if a student has answered a section of checkboxes (at least one checkbox needs to have "true" as the correct answer)
function verifyCheckbox(elementID) {
    "use strict";
    var type = $(elementID).attr("type"),
        nameGroup,
        checked;

    if (type === "checkbox") {
        nameGroup = $(elementID).attr("name");
        checked = false;
        $("[name='" + nameGroup + "']").each(function () {
            if ($(this).prop("checked") === true) {
                checked = true;
                return false;
            }
        });
        return checked;
    }
}


// This code auto corrects each interaction based on the currently stored learned response
function autoCorrect() {
    "use strict";
    $('.incorrect').remove();
    $('.correct').remove();
    $('.chooseAnAnswer').remove();
    $("[data-iid]").each(function (index, elementID) {
        var n = $(this).attr("data-iid"),
            m = 0,
            type = $(this).attr("type"),
            learnerResponse = api.GetValue("cmi.interactions." + n + ".learner_response"),
            correctResponseCount = api.GetValue("cmi.interactions." + n + ".correct_responses._count"),
            correctResponse = [],
            possiblePatterns = "",
            minMax = "",
            min = "",
            max = "",
            foundChecked,
            iGrade;

        iGrade = 0;
        for (m = 0; m < correctResponseCount; m++) {
            correctResponse.push(api.GetValue("cmi.interactions." + n + ".correct_responses." + m + ".pattern"));
        }
        switch (type) {
        case "text":
        case "textarea":
            possiblePatterns = correctResponse[0].split("|");
            for (m = 0; m < possiblePatterns.length; m++) {
                if (learnerResponse.toString().toLowerCase().match(possiblePatterns[m])) {
                    iGrade = 1;
                    break;
                }
            }
            break;
        case "checkbox":
            foundChecked = verifyCheckbox(elementID);
            if (foundChecked) {
                possiblePatterns = correctResponse[0].split("|");
                for (m = 0; m < possiblePatterns.length; m++) {
                    if (learnerResponse.toString().toLowerCase().match(possiblePatterns[m])) {
                        iGrade = 1;
                        break;
                    }
                }
            } else {
                if (type === "checkbox") {
                    $("#" + $(this).attr("id")).after("<span class='chooseAnAnswer'></span>");
                }
                iGrade = 0;
            }
            break;
        case "radio":
            for (m = 0; m < correctResponseCount; m++) {
                if (learnerResponse.match(correctResponse[m])) {
                    iGrade = 1;
                    break;
                }
            }
            if (!$("#" + learnerResponse).prop("checked")) {
                $("#" + $(this).attr("id")).after("<span class='chooseAnAnswer'></span>");
            }
            break;
        case "num":
        case "numrange":
            minMax = correctResponse[0].split("[:]");
            min = parseFloat(minMax[0]);
            if (isNaN(min)) {
                min = learnerResponse;
            }
            max = parseFloat(minMax[1]);
            if (isNaN(max)) {
                max = learnerResponse;
            }
            learnerResponse = parseFloat(learnerResponse);
            if (min <= learnerResponse && learnerResponse <= max) {
                iGrade = 1;
            }
            break;
        }
        api.SetValue("cmi.interactions." + n + ".result", iGrade);
        api.Commit("");

        if (type === "text" || type === "num" || type === "numrange" || type === "textarea" || type === "checkbox") {
            if (iGrade === 0) {
                $("#" + $(this).attr("id")).after("<span class='incorrect'></span>");
            } else if (iGrade === 1) {
                $("#" + $(this).attr("id")).after("<span class='correct'></span>");
            }
        } else if (type === "radio" && $(this).attr("id") === learnerResponse) {
            if (iGrade === 0) {
                $("#" + $(this).attr("id")).after("<span class='incorrect'></span>");
            } else if (iGrade === 1) {
                $("#" + $(this).attr("id")).after("<span class='correct'></span>");
            }
        }
    });
}


// This function creates and sets the code in SCORM
function setCode() {
    "use strict";
    var chars = "0123456789abcdef",
        newCode = "",
        i,
        n = 0,
        foundInBH = false,
        iID = "";

    // this generates the new code
    for (i = 6; i > 0; --i) {
        newCode += chars[Math.floor(Math.random() * chars.length)];
    }
    // this sets the new code in BrainHoney
    for (n = 0; n < api.GetValue("cmi.interactions._count"); n++) {
        iID = api.GetValue("cmi.interactions." + n + ".id");
        if (iID === "retryCode") {
            api.SetValue("cmi.interactions." + n + ".correct_responses.0.pattern", newCode);
            foundInBH = true;
            break;
        }
    }
    if (!foundInBH) {
        n = api.GetValue("cmi.interactions._count");
        api.SetValue("cmi.interactions." + n + ".id", "retryCode");
        api.SetValue("cmi.interactions." + n + ".type", "fill-in");
        api.SetValue("cmi.interactions." + n + ".description", "current retry code");
        api.SetValue("cmi.interactions." + n + ".correct_responses.0.pattern", newCode);
    }
    api.Commit("");
    return newCode;
}


function alertRecordingScore(commitStatus) {
    "use strict";

    $("#overlay-content").html('<p>Please wait.</p><p><img src="Images/squares.svg"></p><p>Your assignmentis being submitted to the teacher.</p>');

    if (commitStatus === "true") {
        setCode();
        window.setTimeout(function () {
            if (api.Terminate("") === "true") {
                $("#overlay-content").html('<p>Your assinment has been submitted to the teacher. Please allow up to 24 hours for your assignment to be graded.</p>');
            } else {alert("FAILURE TO CLOSE THE ASSIGNMENT:  Something went wrong.  If your score does not show up after you refresh the page please contact the East Shore Help Desk.");
                   }
        }, 5000);


    } else {
        alert("Something went wrong.  If your score does not show up after you refresh the page please contact the East Shore Help Desk.");
    }
}


// This is the new code that gets the grade for each interaction and calculates the score
function newGradeCalculator() {
    "use strict";

    var i,
        filteredDataIIDArray = [],
        n,
        pointsEarned = 0,
        totalPointsPossible,
        scaledScore = "",
        score = "",
        previousScore,
        record = false,
        recordedScore,
        commitSCORM;

    autoCorrect();
    $("[data-iid]").each(function () {
        var iID = $(this).attr("data-iid"),
            foundDuplicate;

        foundDuplicate = false;
        for (i = 0; i < filteredDataIIDArray.length; i++) {
            if (filteredDataIIDArray[i] === iID) {
                foundDuplicate = true;
                break;
            }
        }
        if (!foundDuplicate) {
            filteredDataIIDArray.push(iID);
        }
    });
    filteredDataIIDArray.forEach(function (item, index) {
        n = item;
        pointsEarned = pointsEarned + api.GetValue("cmi.interactions." + n + ".result");
    });
    totalPointsPossible = filteredDataIIDArray.length;
    score = Math.round(pointsEarned / totalPointsPossible * 100);
    scaledScore = score / 100;
    previousScore = 1 * api.GetValue("cmi.score.scaled");
	record = false;
	if (scaledScore >= previousScore) {
		record = true;
	} else {
		record = confirm("The score you are trying to submit is LOWER than the score you currently have saved in the Brainhoney Gradebook.  Are you sure you want to overwrite your previous score?");
	}
	if (record) {
        if (score >= 0 && score <= 100) {
            score= 110;
            scaledScore=2;
            api.SetValue("cmi.score.raw", score);
            api.SetValue("cmi.score.max", totalPointsPossible);
            api.SetValue("cmi.score.scaled", scaledScore);
            api.SetValue("cmi.completion_status", "completed");
            commitSCORM = api.Commit("");
        } /*else if (score > 100) {
            score = 100;
            scaledScore = 1;
            api.SetValue("cmi.score.raw", score);
            api.SetValue("cmi.score.max", totalPointsPossible);
            api.SetValue("cmi.score.scaled", scaledScore);
            api.SetValue("cmi.completion_status", "completed");
            commitSCORM = api.Commit("");
        }*/
        //This checks to make sure the score has really been recorded.  If not it alerts the student.
        recordedScore = api.GetValue("cmi.score.scaled");
        if (Math.abs(scaledScore - recordedScore >= 0)) {
            alertRecordingScore(commitSCORM);
        } else {
            alert("There was no change to your score in the gradebook.  If this is a mistake you may need to submit again.");
        }
    }
}

//Jumps to the top of the screen after pushing the sumbit button
$("a[href='#top']").click(function() {
     $("window").scrollTop(0);
  });


// ********************  LOCK/UNLOCK Assignment *******************  //

// This function get both the current correct code as well as the last code entered by the student from SCORM

function getCode() {
    "use strict";
    var currentCode = "",
        lastUsedCode = "",
        n = 0,
        iID = "",
        results = [];

    for (n = 0; n < api.GetValue("cmi.interactions._count"); n++) {
        iID = api.GetValue("cmi.interactions." + n + ".id");
        if (iID === "retryCode") {
            currentCode = api.GetValue("cmi.interactions." + n + ".correct_responses.0.pattern");
            lastUsedCode = api.GetValue("cmi.interactions." + n + ".learner_response");
            break;
        }
    }
    return [currentCode, lastUsedCode, n];
}


function lockAssignment() {
    "use strict";

    $(".save, .submitSCORM").attr("tabindex", "-1");
    document.getElementById("lockMode").style.height = "100%";
    document.getElementById("lockMode").style.width = "100%";
    document.getElementById("lockMode").style.backgroundColor = "rgba(10,10,10, 0.99)";
    $("#exitReview").empty();
    $("#redoLogIn").empty();
    $("#overlay-content").html('<a href="javascript:void(0)" onclick="reviewAssignment()">Review My Answers</a><br/><a href="javascript:void(0)" onclick="showRedoLogIn()">Redo Part of the Assignment</a>');
}


// This function creates a full screen overlay for locking the assignment
function overlayFunction() {
    "use strict";
    var codeResults = getCode(),
        code = codeResults[0],
        lastUsedCode = codeResults[1],
        n = codeResults[2];

    $("main").prepend('<div id="lockMode" class="overlay"><div id="exitReview" class="content-exit"></div><div id="overlay-content" class="overlay-content"></div><div id="redoLogIn" class="overlay-content"></div></div>');
    document.getElementById("lockMode").style.height = "0%";
    document.getElementById("lockMode").style.width = "0%";
    if (code !== lastUsedCode) {
        lockAssignment();
    }
}


function submitAssignment() {
    "use strict";

    newGradeCalculator();
}


function cancelSubmit() {
    "use strict";

    document.getElementById("lockMode").style.height = "0%";
    document.getElementById("lockMode").style.width = "0%";
    $("#overlay-content").empty();
}


function confirmSubmitAssignment() {
    "use strict";

    document.getElementById("lockMode").style.height = "100%";
    document.getElementById("lockMode").style.width = "100%";
    document.getElementById("lockMode").style.backgroundColor = "rgba(256,256,256, 1)";

    $("#exitReview").empty();
    $("#redoLogIn").empty();
    $("#overlay-content").html('<p>You are about to submit this assignment to be graded!</p><p>Are You Sure?</p><button type="button" class="unlock" onclick="cancelSubmit()"><span style="font-size: x-small;">&#x274C;</span>&nbsp;&nbsp;cancel</button><button type="button" class="unlock" onclick="submitAssignment()"><span style="color: limegreen;">&#x2713;</span>&nbsp;submit</button>');
}

/*
function reviewAssignment() {
    "use strict";
    autoCorrect();
    document.getElementById("lockMode").style.backgroundColor = "rgba(0,0,0, 0.10)";
    $("#exitReview").html('<a href="javascript:void(0)" style="background-color: rgba(0,0,0, 0.75)" onclick="lockAssignment()">- exit review mode -</a>');
    $("#exitReview").css("margin-top", "0px");
    $("#overlay-content").empty();
    $("#redoLogIn").empty();
}


function showRedoLogIn() {
    "use strict";

    $("#overlay-content").html('<a href="javascript:void(0)" onclick="reviewAssignment()">Review My Answers</a>');
    $("#redoLogIn").html('<p style="color:white">Enter the unique retry code you received from the teacher.</p><input type="text" id="codeInputField" value="">&nbsp;<button type="button" class="unlock" onclick="unlockCode()">unlock</button>');
}


// This code gets the code from SCORM and uses it to verify the users code entry is correct to unlock the assignment
function unlockCode() {
    "use strict";
    var code = getCode()[0],
        lastUsedCode = getCode()[1],
        n = getCode()[2],
        studentResponse = "";

    studentResponse = $("#codeInputField").val();
    if (code === studentResponse) {
        api.SetValue("cmi.interactions." + n + ".learner_response", studentResponse);
        api.Commit("");
        document.getElementById("lockMode").style.height = "0%";
        document.getElementById("lockMode").style.width = "0%";
        $("#overlay-content").empty();
        $(".save, .submitSCORM").removeAttr("tabindex");

    } else {
        $("#redoLogIn").html('<p style="color:white">Aw Snap! That code did not work.  You can use a code only once.<br/>If you do not have the correct retry code, email the teacher and request the correct code to unlock the assignment.</p><input type="text" id="codeInputField" value="">&nbsp;<button type="button" class="unlock" onclick="unlockCode()">unlock</button>');
    }
}
*/

$(document).ready(function (e) {
    "use strict";

    createEvalHead();
    setCorrectResponsePattern();
    overlayFunction();
    $('.submitSCORM').click(confirmSubmitAssignment);
});

}
