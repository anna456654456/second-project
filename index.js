const accordionHeaders = document.querySelectorAll('.activity-description-header'); //объявляю переменную элементов header
const accordionContents = document.querySelectorAll('.activity-description-photo-content'); //объявляю переменную элементов description
const chevrons = document.querySelectorAll('.activity-description-chevron'); //объявляю переменную элементов chevron

 //перебираю массив header, accordionHeader - элемент в массиве, index - порядковый номер элемента в массиве
accordionHeaders.forEach((accordionHeader, index) => {
     //добавляю каждому элементу(accordionHeader) событие click
    accordionHeader.onclick = (event) => {
        //если произошло событие click по текущему элементу И у элемента контента(accordionContents) с таким же порядковым номером(индексом) ЕСТЬ класс active
       if (event.target && accordionContents[index].classList.contains('active')) { 
           //тогда выходим из функции
           return;
           //если произошло событие click по текущему элементу И у элемента контента(accordionContents) с таким же порядковым номером(индексом) НЕТ класса active
       } else if (event.target && !(accordionContents[index].classList.contains('active'))) {
           //тогда перебираем массив контента, accordionContent - элемент в массиве
            accordionContents.forEach((accordionContent) => {
                //у каждого элемента в массиве удаляем класс active
                accordionContent.classList.remove('active');
            });
            //перебираем массив шевронов, chevron - элемент в массиве
            chevrons.forEach((chevron) => {
                //у каждого элемента в массиве добавляем класс chevron-bottom
                chevron.classList.add('chevron-bottom');
            })
            //элементу контента(accordionContents) с таким же порядковым номером(индексом) что и у элемента на который кликнули добавляем класс active
            accordionContents[index].classList.add('active'); 
            //элементу шеврона(chevrons) с таким же порядковым номером(индексом) что и у элемента на который кликнули добавляем класс chevron-bottom
            chevrons[index].classList.remove('chevron-bottom');
       }
    }
})

