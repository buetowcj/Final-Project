$(document).ready(
    function () {
        function placeOrder(event)
        {
            // stop the flashing form!
            event.preventDefault();

            var firstName = $("#first-name").val();
            var lastName = $("#last-name").val();
            var earnedPoints = $("#points-earned").val();
            var possiblePoints = $("#points-possible").val();

            var finalGrade = earnedPoints / possiblePoints;

            $("#firstNameOutput").text(firstName);
            $("#lastNameOutput").text(lastName);
            $("#gradeOutput").text(finalGrade * 100 + "%");

            var games = ["Mario 64", "Super Mario World", "Super Mario Bros"];
            var a = fruits.indexOf("Mario 64");
        }
    }
)