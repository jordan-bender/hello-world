/*jslint plusplus: true */
/*globals $: false, api: false, console: false */

// JavaScript Document
// This document contains the SCORM+ API info for interacting with BrainHoney for interactive assignments (worksheets, forms, custom interactice assignments)

// This section tags each potential interaction with the "Save" class.
function addSaveClass() {
    "use strict";
    $(".rubric_question").each(function () {
        $(this).addClass("save");
    });
}


/* ***** This section verifies each interaction on the page has a match in BrainHoney: *****
    For each .save class this function looks to see if the id or name is found in BrainHoney
    If YES: then it gets the Interaction Index Number (n) and writes it to the element as the data-iid
    If NO: it creates a new interaction (with it's id and type) using the next unused Interaction Index Number
    and writes it to the element as the data-iid */
function iIDGenerateAndInteractionCreate() {
    "use strict";
    $(".save").each(function () {
        var n = 0,
            id = $(this).attr("id"),
            name = $(this).attr("name"),
            type = $(this).attr("type"),
            desc = $(this).attr("data-desc"),
            foundInBH = false,
            iID = "",
            iType = "";

        for (n = 0; n < api.GetValue("cmi.interactions._count"); n++) {
            iID = api.GetValue("cmi.interactions." + n + ".id");
            // Verify the element has an interaction partner in BrainHoney and set the data-iid for the element
            if (iID === id || iID === name) {
                $(this).attr('data-iid', n);
                foundInBH = true;
                break;
            }
        }
        if (!foundInBH) {
            // Create a new interaction and set the data-iid for the element
            n = api.GetValue("cmi.interactions._count");
            iID = id;
            if (type === "text" || type === "checkbox" || type === "radio") {
                iType = "fill-in";
                if (type === "radio") {
                    iID = name;
                }
            } else if (type === "num" || type === "numrange") {
                iType = "numeric";
            } else if (type === "textarea") {
                iType = "long-fill-in";
            }
            api.SetValue("cmi.interactions." + n + ".id", iID);
            api.SetValue("cmi.interactions." + n + ".type", iType);
            api.SetValue("cmi.interactions." + n + ".description", desc);
            api.Commit("");
            $(this).attr('data-iid', n);
        }
    });
}


// This section gets the stored Learner Response for each Interaction Element and populates them on the page.
function getInteractions() {
    "use strict";
    $(".save").each(function () {
        var n = $(this).attr("data-iid"),
            type = $(this).attr("type"),
            learnRes = "";

        learnRes = api.GetValue("cmi.interactions." + n + ".learner_response");
        if (type === "text" || type === "num" || type === "numrange" || type === "textarea") {
            $(this).val(learnRes);
        } else if (type === "checkbox") {
            if (learnRes === "true") {
                $(this).prop("checked", true);
            } else {
                $(this).prop("checked", "");
            }
        } else if (type === "radio") {
            $("#" + learnRes).prop("checked", true);
        }
    });
}


// This section sets each Learner Response Interaction in SCORM (BrainHoney) on blur.
function setInteractions() {
    "use strict";
    $(".save").blur(function () {
        var n = $(this).attr("data-iid"),
            type = $(this).attr("type"),
            learnRes = "";

        if (type === "text" || type === "num" || type === "numrange" || type === "textarea") {
            learnRes = $(this).val();
        } else if (type === "checkbox") {
            if ($(this).prop("checked") === true) {
                learnRes = "true";
            } else {
                learnRes = "";
            }
        } else if (type === "radio") {
            if ($(this).prop("checked") === true) {
                learnRes = $(this).attr("id").toString();
            } else {
                learnRes = "";
            }
        }
      console.log(learnRes);
        api.SetValue("cmi.interactions." + n + ".learner_response", learnRes);
        api.Commit("");
    });
}


$(document).ready(function (e) {
    "use strict";
	if(api){
    addSaveClass();
    iIDGenerateAndInteractionCreate();
    getInteractions();
    setInteractions();
    if(typeof after_scorm==="function"){
      after_scorm();
    }
	}
});

