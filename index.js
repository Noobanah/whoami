function RandomMember(name, text, image) {
    this.name = name;
    this.text = text;
    this.image = image;
}

var memberMap = {
    tenchan: new RandomMember("tenchan", "Yamazaki Ten", "./images/tenchan.png"),
    rena: new RandomMember("rena", "Moriya Rena", "./images/rena.png"),
    hikaru: new RandomMember("hikaru", "Morita Hikaru", "./images/hikaru.png"),
    karin: new RandomMember("karin", "Fujiyoshi Karin", "./images/karin.png"),
    hono: new RandomMember("hono", "Tamura Hono", "./images/hono.png")
};

var answer;

$(document).ready(function () {
    var memberKeys = Object.keys(memberMap);
    answer = memberKeys[Math.floor(Math.random() * memberKeys.length)];
    
    if ($(".profile-img").length) {
        $(".profile-img").attr("src", memberMap[answer].image);
    }

    document.getElementById("member-name").addEventListener("input", function () {
        var user = this.value;
        if (user.toLowerCase() === memberMap[answer].text.toLowerCase()) {
            $(".answer").text(user + " ถูกต้อง!");
        } else {
            $(".answer").text("ยังไม่ถูกต้อง");
        }
    });

    var itemList = [
        "one", "two", "three", "four", "five", "six", "seven", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", 
        "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", 
        "twenty-four", "twenty-five"
    ];

    var previousItem = [];

    $(".btn").click(function () {
        if (previousItem.length === itemList.length) {
            previousItem = []; // Reset the list if all items have been used
        }

        var randomItem;
        do {
            randomItem = itemList[Math.floor(Math.random() * itemList.length)];
        } while (previousItem.includes(randomItem) && previousItem.length < itemList.length);

        $("." + randomItem).addClass("hide");

        previousItem.push(randomItem); // Store the current selection
    });
});
