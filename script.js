window.onload = load();

function load() {
    $(".input").each(function() {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        (this).val(value);
    });
};

var currentDay = moment().format("MM-DD-YYYY");
var currentTime = moment().format("HH");
var crntTime = +currentTime;

$("#9am-save").click(function () {
    $("task9am").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
        console.log(id, value)
    });
});

$("#10am-save").click(function () {
    $("task10am").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
        console.log(id, value)
    });
});

$$("#11am-save").click(function () {
    $("task11am").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
        console.log(id, value)
    });
});

$("#12pm-save").click(function () {
    $("task12pm").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
        console.log(id, value)
    });
});

$("#1pm-save").click(function () {
    $("task1pm").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
        console.log(id, value)
    });
});

$("#2pm-save").click(function () {
    $("task2pm").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
        console.log(id, value)
    });
});

$("#3pm-save").click(function () {
    $("task3pm").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
        console.log(id, value)
    });
});

$("#4pm-save").click(function () {
    $("task4pm").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
        console.log(id, value)
    });
});

$("#5pm-save").click(function () {
    $("task5pm").each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
        console.log(id, value)
    });
});

function dayPush() {
    $("#date").text(currentDay)
}

dayPush()

function checkTime() {
    $(".input-group-text").each(function () {
        var value = parseInt(Object.values($(this).data()));
        if (value > crntTime) {
            $(this).css("background-color", "#d3d3d3")
        } else if (value < crntTime) {
            $(this).css("background-color", "#ff6961")
        } else if (value === crntTime) {
            $(this).css("background-color", "#77dd77")
        }
    });
};

checkTime()

function load() {
    $(".input").each(function () {
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    });
};