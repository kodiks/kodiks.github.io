function closeIsbank(){localStorage.setItem("isbankKapat",!0),$("#isBankButon").css("display","none"),$("#isBankButon2").css("display","none"),$("#isBankKampanya").css("visibility","hidden")}!function(e){"use strict";function a(a,n){let i=`grant_type=password&password=${a}&username=${n}`;e.ajax({url:"https://adisyo.com/token",type:"post",dataType:"json",data:i,success:function(a){toggleModal(),showAlert("Yönlendirme","Uygulamaya yönlendiriliyorsunuz lüften bekleyiniz...","success",5e3),setTimeout(()=>{e.cookie("user",JSON.stringify(a),{expires:1}),e("#goToApp").css("display","inline"),e("#loginModal").css("display","none");var n;n="False"===a.isUsingNewVersion?`https://adisyo.com/app/#!/login?token=${a.access_token}&pin=${a.pin}`:`http://pos.adisyo.com/#/login/?token=${a.access_token}&pin=${a.pin}&isHasMultipleRestaurants=${a.isHasMultipleRestaurants}`,window.open(n,"_blank")},2e3)},error:function(e){showAlert("Hata",e.responseJSON.error_description,"error",8e3)}})}jQuery.validator.addMethod("answercheck",function(e,a){return this.optional(a)||/^\bcat\b$/.test(e)},"type the correct answer -_-"),e(function(){e("#contactFormLogin").validate({rules:{name:{required:!0,minlength:2},surname:{required:!0,minlength:2},email:{required:!0,email:!0},phone:{required:!0},password:{required:!0,minlength:6},agree:{required:!0}},messages:{name:{required:"Lütfen adınızı giriniz",minlength:"En az 2(iki) karakter olmalıdır"},surname:{required:"Lütfen soyadınızı giriniz",minlength:"En az 2 karakter olmalıdır"},email:{required:"Lütfen e-posta adresinizi giriniz"},phone:{required:"Lütfen telefon numaranızı giriniz"},password:{required:"Lütfen şifrenizi giriniz",minlength:"Şifreniz en az 6 karakter olmalıdır"}},submitHandler:function(n){var i=e(n).serializeArray(),r={name:i[0].value,surname:i[1].value,email:i[2].value,phoneNumber:i[3].value,password:i[4].value,isReadContract:"on"==i[5].value};e.ajax({url:"https://adisyo.com/api/security/signup",type:"post",dataType:"json",data:r,success:function(e){showAlert("Kayıt","Kullanıcı kaydınız başarıyla yapılmıştır. Teşekkürler.","success",5e3),a(r.password,r.email)},error:function(e){showAlert("Hata",e.responseText,"error",8e3)}})}})}),e(function(){e("#contactFormForgot").validate({rules:{email:{required:!0,email:!0},password:{required:!0,minlength:8}},messages:{email:{required:"Lütfen e-posta adresinizi giriniz"},password:{required:"Lütfen şifrenizi giriniz",minlength:"thats all? really?"}},submitHandler:function(a){var n=`email=${e(a).serializeArray()[0].value}`;e.ajax({url:"https://adisyo.com/api/security/forgot",type:"post",dataType:"json",data:n,success:function(e){showAlert("Şifre Yenileme","Şifre yenileme linkiniz e-posta adresinize gönderilmiştir. Lütfen e-posta adresinizi kontrol ediniz.","success",5e3)},error:function(e){console.log(e)}})}})}),e(function(){e("#contactFormSignup").validate({rules:{email:{required:!0,email:!0},password:{required:!0,minlength:6}},messages:{email:{required:"Lütfen e-posta adresinizi giriniz"},password:{required:"Lütfen şifrenizi giriniz",minlength:"En az 6 karakter olmalı"}},submitHandler:function(n){const i=e(n).serializeArray();a(i[1].value,i[0].value)}})}),e(function(){e("#contactFormCall").validate({rules:{nameCall:{required:!0},emailCall:{required:!0},telephoneCall:{required:!0,minlength:11}},messages:{nameCall:{required:"* Lütfen Adınızı Soyadınızı giriniz"},emailCall:{required:"* Lütfen e-posta adresinizi giriniz"},telephoneCall:{required:"* Lütfen telefon numaranızı giriniz",minlength:"* Telefon numaranız 11 haneli olmalıdır."}},submitHandler:function(a){var n=e(a).serializeArray(),i={fullName:n[0].value,phone:n[2].value,from:n[1].value};e.ajax({url:"https://api.adisyo.com/api/general/SendUnauthorizedFeedback",type:"post",dataType:"json",data:i,success:function(e){toggleModal(),showAlert("Sizi Arayalım","Kaydınız alışmıştır. En kısa sürede tarafınıza geri dönüş yapılacaktır. Teşekkürler.","success",6e3)},error:function(e){showAlert("Hata",e.responseText,"error",8e3)}})}})}),e(function(){e("#contactFormBank").validate({rules:{nameBank:{required:!0},telBank:{required:!0,minlength:11},tcBank:{required:!0,minlength:10},mailBank:{required:!0}},messages:{nameBank:{required:"* Lütfen adınızı soyadınızı giriniz"},mailBank:{required:"* Lütfen mail adresinizi giriniz"},telBank:{required:"* Lütfen telefon numaranızı giriniz",minlength:"* Telefon numaranız 11 haneli olmalıdır."},tcBank:{required:"* T.C kimlik/Vergi numaranızı yazınız",minlength:"* En az 10 karakter girilmelidir."}},submitHandler:function(a){var n=e(a).serializeArray(),i={FullName:n[0].value.toString(),Phone:n[2].value.toString(),Identity:n[3].value.toString(),From:n[1].value.toString(),restaurantId:null};e.ajax({url:"https://adisyo.com/api/general/SubmitIsBankCampaignRequest",type:"post",dataType:"json",data:i,success:function(e){toggleModal(),showAlert("İŞ Bankası Kampanya","Kaydınız alınmıştır. En kısa sürede değerlendirilip tarafınıza geri dönüş yapılacaktır. Teşekkürler.","success",6e3)},error:function(e){showAlert("Hata",e.responseText,"error",8e3)}})}})})}(jQuery);