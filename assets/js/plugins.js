!function(a){"use strict";a.ajaxChimp={responses:{"You are sent to a welcome message and will be being sent our latest newsletters time to time":0,"Please enter a value":1,"An email address must contain a single @":2,"The domain portion of the email address is invalid (the portion after the @: )":3,"The username portion of the email address is invalid (the portion before the @: )":4,"This email address looks fake or invalid. Please enter a real email address":5},translations:{en:null},init:function(e,s){a(e).ajaxChimp(s)}},a.fn.ajaxChimp=function(e){return a(this).each(function(s,t){var n=a(t),i=n.find("input[type=email]"),r=n.find("label[for="+i.attr("id")+"]"),l=a.extend({url:n.attr("action"),language:"en"},e),o=l.url.replace("/post?","/post-json?").concat("&c=?");n.attr("novalidate","true"),i.attr("name","EMAIL"),n.submit(function(){var e,s={},t=n.serializeArray();a.each(t,function(a,e){s[e.name]=e.value}),a.ajax({url:o,data:s,success:function(s){if("success"===s.result)e="You are sent to a welcome message and will be being sent our latest newsletters time to time.",r.removeClass("error").addClass("valid"),i.removeClass("error").addClass("valid");else{i.removeClass("valid").addClass("error"),r.removeClass("valid").addClass("error");try{var t=s.msg.split(" - ",2);void 0===t[1]?e=s.msg:parseInt(t[0],10).toString()===t[0]?(t[0],e=t[1]):e=s.msg}catch(a){e=s.msg}}"en"!==l.language&&void 0!==a.ajaxChimp.responses[e]&&a.ajaxChimp.translations&&a.ajaxChimp.translations[l.language]&&a.ajaxChimp.translations[l.language][a.ajaxChimp.responses[e]]&&(e=a.ajaxChimp.translations[l.language][a.ajaxChimp.responses[e]]),r.html(e),r.show(2e3),l.callback&&l.callback(s)},dataType:"jsonp",error:function(a,e){console.log("mailchimp ajax submit error: "+e)}});var m="Submitting...";return"en"!==l.language&&a.ajaxChimp.translations&&a.ajaxChimp.translations[l.language]&&a.ajaxChimp.translations[l.language].submit&&(m=a.ajaxChimp.translations[l.language].submit),r.html(m).show(2e3),!1})}),this}}(jQuery);