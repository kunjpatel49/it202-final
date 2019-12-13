var mylat;
var mylng;
if (navigator.geolocation) {
        var x = navigator.geolocation;
        x.getCurrentPosition(success);

        function success(position) {
            mylat = position.coords.latitude;
            mylng = position.coords.longitude;
        }
            } else {
                alert("Geolocation is not supported by your browser");
            }

