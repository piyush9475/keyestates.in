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

// ✅ GLOBAL FUNCTION (IMPORTANT)
function sendToWhatsApp(event) {
    event.preventDefault();

    let fullName = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (fullName === "" || phone === "") {
        alert("Name and Phone are required!");
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Enter valid 10-digit phone number");
        return;
    }

    let whatsappNumber = "919875329416";

    let message =
        "🏠 New Inquiry:%0a%0a" +
        "👤 Name: " + fullName + "%0a" +
        "📧 Email: " + email + "%0a" +
        "📱 Phone: " + phone + "%0a" +
        "📍 Project: Keyestates Horizon";

    let url = "https://wa.me/" + whatsappNumber + "?text=" + message;

    // ✅ safer than window.open
    window.location.href = url;
}


// OPTIONAL (keep your other code)
$(document).ready(function() {

    // Only numbers input (optional)
    $("input.numeric").on("keypress", function(e) {
        if (e.which < 48 || e.which > 57) return false;
    });

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
