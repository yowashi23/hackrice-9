var d = new Date(),
    h = d.getHours(),
    i;

if (h < 6) i = "night.jpg";
else if (h < 9) i = "day.jpg";
else if (h < 15) i = "day.jpg";
else if (h < 21) i = "day.jpg";
else i = "night.jpg";