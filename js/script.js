'use strict';
// 1) Создать массив week и записать в него дни недели в виде строк
// ·        Вывести на экран все дни недели
// ·        Каждый из них с новой строчки
// ·        Выходные дни - жирным шрифтом
// ·        Текущий день - курсивом (пока можно задать текущий день вручную, без работы с объектом даты)

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    today = week[4];

for (let i = 0; i < week.length; i++) {
    // 1 способ
    switch (week[i]) {
        case 'Saturday':
            document.write("<b>" + week[i] + "</b><br>");
            break;
        case 'Sunday':
            document.write("<b>" + week[i] + "</b><br>");
            break;
        case today:
            document.write("<i>" + week[i] + "</i><br>");
            break;
        default:
            document.write(week[i] + "<br>");
    }

    // 2 способ
    // if (week[i] == 'Saturday' || week[i] == 'Sunday') {
    //     document.write("<b>" + week[i] + "</b><br>");
    // } else if (week[i] == today) {
    //     document.write("<i>" + week[i] + "</i><br>");
    // } else {
    //     document.write(week[i] + "<br>");
    // }
}

// 2) Создать массив arr = []
// ·        Записать в него 7 любых многозначных чисел в виде строк
// ·        Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)

let arr = ['34567','3454546','5567','1111111','2323232','77676','9696'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 3 || arr[i][0] == 7) {
        console.log(arr[i]);
    }
}



