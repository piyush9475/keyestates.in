$(document).ready(function() {
    
    // --- Utility: Allow Only Numbers in Phone/OTP inputs ---
    var specialKeys = new Array();
    specialKeys.push(8); // Backspace

    $("input.numeric").bind({
        keydown: function(e) {
            if (e.shiftKey === true ) {
                if (e.which == 9) return true;
                return false;
            }
            if (e.which > 57 || e.which == 32) return false;
            return true;
        }
    });

    // --- Basic OTP Simulation Logic ---
    // Note: In a real environment, you will hook this up to your backend.
    $("input.phone").on("keyup", function() {
        var phoneValue = $(this).val();		
        var otpWrapper = $(this).closest('form').find('.otp-wrapper');
        
        // Show OTP field if phone number looks complete (e.g., 10 digits)
        if(phoneValue.length >= 10) {
            otpWrapper.slideDown();
            $(this).closest('form').find('input.otp').attr('required', true);
        } else {				
            otpWrapper.slideUp();
            $(this).closest('form').find('input.otp').attr('required', false).val('');
        }
    });

    // --- Image Gallery Popup (Magnific Popup) ---
    if($.fn.magnificPopup) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] 
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>Keyestates</small>';
                }
            }
        });
    }

});
document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    // ✅ Validation: At least one field required
    if (name === "" && email === "" && mobile === "") {
        alert("Please enter at least Name, Email, or Mobile Number");
        return;
    }

    // ✅ WhatsApp message
    let message = `New Callback Request%0A
Project: Keyestates Horizon%0A
Name: ${name}%0A
Email: ${email}%0A
Mobile: ${mobile}`;

    // ✅ WhatsApp link
    let whatsappURL = `https://wa.me/919475588248?text=${message}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
});
