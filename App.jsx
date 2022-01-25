
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Lermontov from "./components/Lermontov";
import Index from "./components/Index";
import LandingDuel from "./components/LandingDuel";
import Pushkin from "./components/Pushkin";
import LandingPaint from "./components/LandingPaint";
import LandingCaucasus from "./components/LandingCaucasus";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/lermontov">
            <Lermontov {...lermontovData} />
          </Route>
          <Route path="/:path(|index)">
            <Index {...indexData} />
          </Route>
          <Route path="/landing-duel">
            <LandingDuel {...landingDuelData} />
          </Route>
          <Route path="/pushkin">
            <Pushkin {...pushkinData} />
          </Route>
          <Route path="/landing-paint">
            <LandingPaint {...landingPaintData} />
          </Route>
          <Route path="/landing-caucasus">
            <LandingCaucasus {...landingCaucasusData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const frame1431Data = {
    text1: "Михаил Юрьевич",
    text2: "Лермонтов",
};

const frame522Data = {
    className: "frame-53-1",
};

const frame523Data = {
    className: "frame-54",
};

const frame531Data = {
    frame521Props: frame522Data,
    frame522Props: frame523Data,
};

const lermontovData = {
    close: "/img/close@2x.png",
    frame33: "/img/frame-33@2x.png",
    phone: "1814–1841",
    text3: "Загадочный и меланхоличный искатель приключений. Купающийся во внимании, но одинокий. Ещё одно предложение. И ещё одно. И ещё одно. И ещё",
    image31: "/img/image-31@2x.png",
    text4: "Собраться на дуэль",
    image29: "/img/image-29@2x.png",
    text5: "Изучить рисунки",
    image27: "/img/image-27@2x.png",
    text6: "Отправиться на Кавказ",
    frame148: "/img/frame-148@2x.png",
    frame143Props: frame1431Data,
    frame53Props: frame531Data,
};

const x600Data = {
    children: "На сайт музея",
};

const activeData = {
    photo_20210627_231123RemovebgPrevie: "/img/photo-2021-06-27-23-11-23-removebg-preview-2@2x.png",
    spanText1: "Александр",
    spanText2: " ",
    spanText3: "Пушкин",
};

const active2Data = {
    overlapGroup: "/img/vector-1@2x.png",
    photo_20210627_231128RemovebgPrevie: "/img/photo-2021-06-27-23-11-28-removebg-preview-2@2x.png",
    spanText1: "Михаил",
    spanText2: " ",
    spanText3: "Лермонтов",
};

const inactiveData = {
    photo_20210627_231132RemovebgPrevie: "/img/photo-2021-06-27-23-11-32-removebg-preview-2@2x.png",
    spanText1: "Александр",
    spanText2: " ",
    spanText3: "Грибоедов",
};

const inactive2Data = {
    frame128: "/img/vector-3@2x.png",
    photo_20210627_231139RemovebgPrevie: "/img/photo-2021-06-27-23-11-39-removebg-preview-1@2x.png",
    spanText1: "Лев",
    spanText2: " ",
    spanText3: "Толстой",
};

const x6002Data = {
    children: "Скоро можно будет посмотреть остальных",
};

const indexData = {
    arrow2: "/img/arrow-2@2x.png",
    maskGroup: "/img/mask-group@2x.png",
    digital: "Digital-писатели",
    text7: " гид по экспозиции музея ИРЛИ РАН",
    arrow6: "/img/arrow-6@2x.png",
    text8: "Персоны музея",
    text9: "В музее можно найти портреты и предметы быта многих писателей. Судьбы этих людей переплетались не раз, поэтому в одиночку восстановить картину их жизни может быть сложно. Пройтись по жизненной истории каждого из писателей помогут их профили:",
    x600Props: x600Data,
    activeProps: activeData,
    active2Props: active2Data,
    inactiveProps: inactiveData,
    inactive2Props: inactive2Data,
    x6002Props: x6002Data,
};

const x60031Data = {
    text_Label: "На дуэль пока нельзя",
};

const landingDuelData = {
    close: "/img/close-1@2x.png",
    text14: "Дуэль с Мартыновым",
    image30: "/img/image-30@1x.png",
    spanText1: "М.Ю. Лермонтов «Вид Пятигорска», 1837—38. ",
    spanText2: "Картон, масло.",
    frame110: "/img/frame-110@1x.png",
    frame111: "/img/frame-111@2x.png",
    image1: "/img/------1@2x.png",
    x24: "/img/------2-4@2x.png",
    frame108: "/img/frame-108@1x.png",
    frame109: "/img/frame-109@1x.png",
    image2: "/img/-----@1x.png",
    frame112: "/img/frame-112@1x.png",
    frame113: "/img/frame-113@2x.png",
    frame1561: "/img/frame-156-1@2x.png",
    x6003Props: x60031Data,
};

const frame1432Data = {
    text1: "Александр Сергеевич",
    text2: "Пушкин",
};

const frame525Data = {
    className: "frame-53-2",
};

const frame526Data = {
    className: "frame-54-1",
};

const frame532Data = {
    frame521Props: frame525Data,
    frame522Props: frame526Data,
};

const x2001Data = {
    children: "Сыграть, но потом",
};

const x2002Data = {
    children: "Скоро появится",
    className: "view-16",
};

const pushkinData = {
    close: "/img/close@2x.png",
    maskGroup: "/img/mask-group-2@2x.png",
    text19: "1799–1837",
    text20: "Писатель, чьё имя стало нарицательным. Автор, о котором существует множество мифов и легенд. Ещё предложение. И ещё одно.  И ещё одно.",
    text21: "«Правда или вымысел?»",
    text22: "Попробуйте отличить вымышленный факт от правдивых и познакомьтесь с Пушкиным поближе",
    text23: "Литературный нетворкинг",
    text24: "Изучите карту социальных связей Пушкина, но сначала спросите себя: там есть только лицеисты?",
    frame143Props: frame1432Data,
    frame53Props: frame532Data,
    x2001Props: x2001Data,
    x2002Props: x2002Data,
};

const x6HkuEU2Data = {
    className: "view-9",
};

const x60032Data = {
    text_Label: "Изучить живопись пока нельзя",
    className: "view-12",
};

const landingPaintData = {
    close: "/img/close-1@2x.png",
    text25: "Свои рисунки и живопись",
    frame521: "/img/frame-52@2x.png",
    image37: "/img/image-37@1x.png",
    spanText1: <>Автопортрет М.Ю. Лермонтова, 1837—38. <br /></>,
    spanText2: "Бумага, акварель.",
    image38: "/img/image-38@1x.png",
    spanText3: "М.Ю. Лермонтов «Воспоминание о Кавказе», 1838. ",
    spanText4: "Картон, масло.",
    frame50: "/img/frame-50@2x.png",
    frame522: "/img/frame-52-2@1x.png",
    frame523: "/img/frame-52-1@1x.png",
    image1: "/img/-------1@2x.png",
    spanText5: "М.Ю. Лермонтов «Черкес», 1838. ",
    spanText6: "Картон, масло.",
    frame524: "/img/frame-52-3@2x.png",
    image2: "/img/------------------@1x.png",
    spanText7: "М.Ю. Лермонтов «Атака лейб-гвардии гусар под Варшавой 21 авг. 1831», 1837. ",
    spanText8: "Картон, масло.",
    image42: "/img/image-42@1x.png",
    spanText9: "М.Ю. Лермонтов «Черкес с лошадью», 1835—37. ",
    spanText10: "Бумага, итальянский карандаш.",
    frame525: "/img/frame-52-4@2x.png",
    overlapGroup1: "/img/rectangle-9@2x.png",
    spanText11: "В ",
    spanText12: "экспозиции музея",
    spanText13: " есть рисунок «Черкес с лошадью», выполненный в карандаше. Рядом с ним — QR-код, по которому можно изучить живопись Лермонтова.",
    x6HkuEUProps: x6HkuEU2Data,
    x6003Props: x60032Data,
};

const x6HkuEU3Data = {
    className: "view-10",
};

const x60033Data = {
    text_Label: "Отправиться на Кавказ пока нельзя",
    className: "view-13",
};

const landingCaucasusData = {
    close: "/img/close-1@2x.png",
    text35: "Жизнь на Кавказе",
    frame521: "/img/frame-52-6@1x.png",
    image45: "/img/image-45@1x.png",
    spanText1: "М.Ю. Лермонтов «Вид горы Крестовой», 1837—38. ",
    spanText2: "Картон, масло.",
    image1: "/img/--------------@1x.png",
    spanText3: "М.Ю. Лермонтов «Кавказский вид возле селения Сиони», 1837—38. ",
    spanText4: "Холст, масло.",
    frame522: "/img/frame-52-5@1x.png",
    frame523: "/img/frame-52-7@1x.png",
    frame524: "/img/frame-52-8@1x.png",
    image46: "/img/image-46@1x.png",
    spanText5: "М.Ю. Лермонтов «Сцена из кавказской жизни», 1838. ",
    spanText6: "Дерево, масло.",
    frame525: "/img/frame-52-9@1x.png",
    frame54: "/img/frame-54@1x.png",
    frame551: "/img/frame-55-1@1x.png",
    image2: "/img/---------------@1x.png",
    spanText7: "М. Ю. Лермонтов, Г. Г. Гагарин «Эпизод из сражения при Валерике», 1840. ",
    spanText8: "Бумага, акварель.",
    frame56: "/img/frame-56@1x.png",
    frame552: "/img/frame-55@1x.png",
    image3: "/img/----------------1@1x.png",
    spanText9: "М. Ю. Лермонтов «При Валерике. Похороны убитых 12 июля 1840 г.», 1840—1841. ",
    spanText10: "Бумага, акварель.",
    x6HkuEUProps: x6HkuEU3Data,
    x6003Props: x60033Data,
};

