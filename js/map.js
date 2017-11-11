function kwasAzotowy() {
    var image = document.getElementById("mapowanko");
    image.src = "logo1.jpg";
}

function amoniak() {
    var image = document.getElementById("mapowanko");
    image.src = "logo.jpg";
}

//wybieramy instalacje
function selectNawozy() {
    hideEveryone();
    var nawozyButton = document.getElementById("instalNawozy1");
    nawozyButton.classList.remove("nawozyInvisible");
}

function selectTworzywa() {
    hideEveryone();
    var tworzywaButton = document.getElementById("instalTworzywa1");
    tworzywaButton.classList.remove("tworzywaInvisible");
}

function selectLogistyka() {
    hideEveryone();
    var logistykaButton = document.getElementById("instalLogistyka1");
    logistykaButton.classList.remove("logistykaInvisible");
}

function selectKatalizatory() {
    hideEveryone();
    var katalizatoryButton = document.getElementById("instalKatalizatory1");
    katalizatoryButton.classList.remove("katalizatoryInvisible");
}

//wybieramy scenariusze
//nawozy
function instAmon1() {
    selectNawozy();
    var iAmon1Button = document.getElementById("scenAmon11");
    iAmon1Button.classList.remove("scenAmon1Invisible");
}

function instAmon2() {
    selectNawozy();
    var iAmon2Button = document.getElementById("scenAmon21");
    iAmon2Button.classList.remove("scenAmon2Invisible");
}

function stoAmon() {
    selectNawozy();
    var iStoAmonButton = document.getElementById("scenStoAmon1");
    iStoAmonButton.classList.remove("scenStoAmonInvisible");
}

function instKas() {
    selectNawozy();
    var iInstKasButton = document.getElementById("scenInstKas1");
    iInstKasButton.classList.remove("scenInstKasInvisible");
}

function stoKas() {
    selectNawozy();
    var iStoKasButton = document.getElementById("scenStoKas1");
    iStoKasButton.classList.remove("scenStoKasInvisible");
}

function instNit() {
    selectNawozy();
    var iInstNitButton = document.getElementById("scenInstNit1");
    iInstNitButton.classList.remove("scenInstNitInvisible");
}

function instNaw() {
    selectNawozy();
    var iInstNawButton = document.getElementById("scenInstNaw1");
    iInstNawButton.classList.remove("scenInstNawInvisible");
}

//tworzywa
function instAzot() {
    selectTworzywa();
    var iInstAzotButton = document.getElementById("scenInstAzot1");
    iInstAzotButton.classList.remove("scenInstAzotInvisible");
}

function instSha() {
    selectTworzywa();
    var iInstShaButton = document.getElementById("scenInstSha1");
    iInstShaButton.classList.remove("scenInstShaInvisible");
}

function stoOleumA() {
    selectTworzywa();
    var iStoOleumAButton = document.getElementById("scenStoOleumA1");
    iStoOleumAButton.classList.remove("scenStoOleumAInvisible");
}

function stoFen() {
    selectTworzywa();
    var iStoFenButton = document.getElementById("scenStoFen1");
    iStoFenButton.classList.remove("scenStoFenInvisible");
}

function stoOleumK() {
    selectTworzywa();
    var iStoOleumKButton = document.getElementById("scenStoOleumK1");
    iStoOleumKButton.classList.remove("scenStoOleumKInvisible");
}

function stoK50() {
    selectTworzywa();
    var iStoK50Button = document.getElementById("scenStoK501");
    iStoK50Button.classList.remove("scenStoK50Invisible");
}

function stoUtl() {
    selectTworzywa();
    var iStoUtlButton = document.getElementById("scenStoUtl1");
    iStoUtlButton.classList.remove("scenStoUtlInvisible");
}

function cenCh() {
    selectTworzywa();
    var iCenChButton = document.getElementById("scenCenCh1");
    iCenChButton.classList.remove("scenCenChInvisible");
}

function stoFor() {
    selectTworzywa();
    var iStoForButton = document.getElementById("scenStoFor1");
    iStoForButton.classList.remove("scenStoForInvisible");
}

function stoMet() {
    selectTworzywa();
    var iStoMetButton = document.getElementById("scenStoMet1");
    iStoMetButton.classList.remove("scenStoMetInvisible");
}

function instFor() {
    selectTworzywa();
    var iInstForButton = document.getElementById("scenInstFor1");
    iInstForButton.classList.remove("scenInstForInvisible");
}

//logistyka
function magNaw() {
    selectLogistyka();
    var iMagNawButton = document.getElementById("scenMagNaw1");
    iMagNawButton.classList.remove("scenMagNawInvisible");
}

function instKatalizatory() {
    selectKatalizatory();
    var iInstKatalizatoryButton = document.getElementById("scenInstKatalizatory1");
    iInstKatalizatoryButton.classList.remove("scenInstKatalizatoryInvisible");
}

//chowamy wszystko (scenariusze)
function hideEveryone() {
    //tu dodamy chowanie wszystkich list rozwijanych
    //trzeba to wywołać przed w każdej funkcji select...
    var nawozyButton = document.getElementById("instalNawozy1");
    nawozyButton.classList.add("nawozyInvisible");

    var tworzywaButton = document.getElementById("instalTworzywa1");
    tworzywaButton.classList.add("tworzywaInvisible");

    var logistykaButton = document.getElementById("instalLogistyka1");
    logistykaButton.classList.add("logistykaInvisible");

    var katalizatoryButton = document.getElementById("instalKatalizatory1");
    katalizatoryButton.classList.add("katalizatoryInvisible");

    var iAmon1Button = document.getElementById("scenAmon11");
    iAmon1Button.classList.add("scenAmon1Invisible");

    var iAmon2Button = document.getElementById("scenAmon21");
    iAmon2Button.classList.add("scenAmon2Invisible");

    var iStoAmonButton = document.getElementById("scenStoAmon1");
    iStoAmonButton.classList.add("scenStoAmonInvisible");

    var iInstKasButton = document.getElementById("scenInstKas1");
    iInstKasButton.classList.add("scenInstKasInvisible");

    var iStoKasButton = document.getElementById("scenStoKas1");
    iStoKasButton.classList.add("scenStoKasInvisible");

    var iInstNitButton = document.getElementById("scenInstNit1");
    iInstNitButton.classList.add("scenInstNitInvisible");

    var iInstNawButton = document.getElementById("scenInstNaw1");
    iInstNawButton.classList.add("scenInstNawInvisible");

    var iInstAzotButton = document.getElementById("scenInstAzot1");
    iInstAzotButton.classList.add("scenInstAzotInvisible");

    var iInstShaButton = document.getElementById("scenInstSha1");
    iInstShaButton.classList.add("scenInstShaInvisible");

    var iStoOleumAButton = document.getElementById("scenStoOleumA1");
    iStoOleumAButton.classList.add("scenStoOleumAInvisible");

    var iStoFenButton = document.getElementById("scenStoFen1");
    iStoFenButton.classList.add("scenStoFenInvisible");

    var iStoOleumKButton = document.getElementById("scenStoOleumK1");
    iStoOleumKButton.classList.add("scenStoOleumKInvisible");

    var iStoK50Button = document.getElementById("scenStoK501");
    iStoK50Button.classList.add("scenStoK50Invisible");

    var iStoUtlButton = document.getElementById("scenStoUtl1");
    iStoUtlButton.classList.add("scenStoUtlInvisible");

    var iCenChButton = document.getElementById("scenCenCh1");
    iCenChButton.classList.add("scenCenChInvisible");

    var iStoForButton = document.getElementById("scenStoFor1");
    iStoForButton.classList.add("scenStoForInvisible");

    var iStoMetButton = document.getElementById("scenStoMet1");
    iStoMetButton.classList.add("scenStoMetInvisible");

    var iInstForButton = document.getElementById("scenInstFor1");
    iInstForButton.classList.add("scenInstForInvisible");

    var iMagNawButton = document.getElementById("scenMagNaw1");
    iMagNawButton.classList.add("scenMagNawInvisible");

    var iInstKatalizatoryButton = document.getElementById("scenInstKatalizatory1");
    iInstKatalizatoryButton.classList.add("scenInstKatalizatoryInvisible");
}

//podmieniamy scenariusze
//nawozy
function NA6A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na6a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Pęknięcie rurociągu lub <u>spawu</u>, <u>nieszczelność na uszczelce</u> w węźle syntezy amoniaku i wypływ mieszanki wodorowej <span class=\"magnify\">całą średnicą rurociągu</span>.</p><p>Nastąpi prawdopodobnie wybuch, zapłon i spalenie całej zawartości węzła syntezy amoniaku</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA6B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na6b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Pęknięcie rurociągu lub <u>spawu</u>, <u>nieszczelność na uszczelce</u> w węźle syntezy amoniaku i mały wypływ mieszanki wodorowej.</p><p>Nastąpi prawdopodobnie wybuch, zapłon i spalenie całej zawartości węzła syntezy amoniaku</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA6C() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na6c.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Awaria połączenia kołnierzowego, króćca lub uszczelki na aparacie z ciekłym amoniakiem w węźle syntezy amoniaku i wypływ amoniaku ciekłego. Wypływ medium nieszczelnością wynoszącą 10% powierzchni króćca";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA6D() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na6d.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Awaria połączenia kołnierzowego, króćca lub uszczelki na aparacie z ciekłym amoniakiem w węźle rozprężania amoniaku i wypływ amoniaku ciekłego. Wypływ medium nieszczelnością wynoszącą 10% powierzchni króćca.";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA6E() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na6e.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Awaria połączenia kołnierzowego, króćca lub uszczelki na aparacie z ciekłym amoniakiem w węźle układu chłodniczego i wypływ amoniaku ciekłego. Wypływ medium nieszczelnością wynoszącą 10% powierzchni króćca.";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA6Aprim() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na6aprim.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Pęknięcie rurociągu lub <u>spawu</u>, <u>nieszczelność na uszczelce</u> w węźle syntezy amoniaku i wypływ mieszanki wodorowej <span class=\"magnify\">całą średnicą rurociągu</span>.</p><p>Nastąpi prawdopodobnie wybuch, zapłon i spalenie całej zawartości węzła syntezy amoniaku</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA6Bprim() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na6bprim.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Pęknięcie rurociągu lub <u>spawu</u>, <u>nieszczelność na uszczelce</u> w węźle syntezy amoniaku i mały wypływ mieszanki wodorowej.</p><p>Nastąpi prawdopodobnie wybuch, zapłon i spalenie całej zawartości węzła syntezy amoniaku</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA6Cprim() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na6cprim.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Awaria połączenia kołnierzowego, króćca lub uszczelki na aparacie z ciekłym amoniakiem w węźle syntezy amoniaku i wypływ amoniaku ciekłego. Wypływ medium nieszczelnością wynoszącą 10% powierzchni króćca";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA6Dprim() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na6dprim.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Awaria połączenia kołnierzowego, króćca lub uszczelki na aparacie z ciekłym amoniakiem w węźle rozprężania amoniaku i wypływ amoniaku ciekłego. Wypływ medium nieszczelnością wynoszącą 10% powierzchni króćca.";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA4A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na4a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Uszkodzenie zbiornika i wypływ <u>całej</u> zawartości</p><p><span class=\"magnify\">Wypadek najgorszy</span>.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA4B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na4b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ amoniaku ciekłego z połączenia kołnierzowego, króćca lub uszczelki na rurociągu lub na zbiorniku.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA4C() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na4c.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ amoniaku gazowego z połączenia kołnierzowego, króćca lub uszczelki na rurociągu lub na zbiorniku.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA4D() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na4d.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wyciek amoniaku podczas załadunku lub rozładunku cysterny.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA2A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na2a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ kwasu azotowego z uszkodzonego urządzenia szklanego lub z powodu rozszczelnienia połączenia kołnierzowego - <span class=\"magnify\">Wypadek najgorszy</span>.</p><p>Utworzenie się rozlewiska, skażenie atmosfery, możliowść poparzenia, zatrucia, awarii ściekowej.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p></p>";
}

function NA2B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na2b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ kwasu azotowego z powodu rozszczelnienia połączenia kołnierzowego - <span class=\"magnify\">Wypadek najbardziej prawdopodobny</span>.</p><p>Utworzenie się rozlewiska, skażenie atmosfery, możliwość poparzenia, zatrucia.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p></p>";
}

function NA3A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na3a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ całej zawartości kwasu azotowego stężonego ze zbiornika. Utworzenie się rozlewiska, skażenie atmosfery, możliwość poparzenia, zatrucia, awarii ściekowej.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Masa uwolnionego kwasu azotowego: 30000 kg.</p><p>Powierzchnia rozlewiska: 107 m<sup>2</sup></p><p>Średnia szybkość parowania NO<sub>2</sub> z nad rozlewiska: 0,046 kg/s</p><p>Maksymalne wymiary chmury NO<sub>2</sub> o stężeniu PAC-2: 59 x 966 m</p>";
}

function NA3B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na3b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ kwasu azotowego stężonego z jednego ze zbiorników na skutek rozszcelnienia. Utworzenie rozlewiska w obrębie tacy, skaenie atmosfery, możliwość poparzenia, zatrucia i awarii ściekowej.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Masa uwolnionego kwasu azotowego: 1425 kg.</p><p>Powierzchnia rozlewiska: 13 m<sup>2</sup></p><p>Średnia szybkość parowania NO<sub>2</sub> z nad rozlewiska: 0,006 kg/s</p><p>Maksymalne wymiary chmury NO<sub>2</sub> o stężeniu PAC-2: 13 x 241 m</p>";
}

function NA3C() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na3c.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ kwasu azotowego podczas załadunku do cysterny kolejowej. Utworzenie rozlewiska, skażenie atmosfery, gruntu i wód gruntowych, możliwość poparzenia, zatrucia oraz ryzyko zapłonu w przypadku kontaktu z materiałami pochodzenia organicznego, możliwość awarii ściekowej.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Masa uwolnionego kwasu azotowego: 1338 kg.</p><p>Powierzchnia rozlewiska: 90 m<sup>2</sup></p><p>Średnia szybkość parowania NO<sub>2</sub> z nad rozlewiska: 0,039 kg/s</p><p>Maksymalne wymiary chmury NO<sub>2</sub> o stężeniu PAC-2: 42 x 529 m</p>";
}

function NA1A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na1a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ całej zawartości nitrozy ze zbiornika Z-8 w krótkim czasie. Utworzenie się rozlewiska, skażenie atmosfery, gruntu i wód gruntowych, możliwość poparzenia, zatrucia.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Masa uwolnionej nitrozy: 128 000 kg.</p><p>Powierzchnia rozlewiska: 175,2 m<sup>2</sup></p><p>Średnia szybkość parowania HNO<sub>3</sub> z nad rozlewiska 0,063 kg/s</p><p>Maksymalne wymiary chmury NO<sub>2</sub> o stężeniu PAC-2: 71 x 1191 m</p>";
}

function NA1B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na1b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ oleum ze zbiornika Z-7d na skutek przelania się lub rozszczelnienia. Możliwość przedostania się oleum do instalacji odgazów, utworzenie się rozlewiska w obrębie tacy, skażenia lokalnego atmosfery, poparzenia i zatrucia, awaria ściekowa.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Masa uwolnionego oleum: 716 kg.</p><p>Powierzchnia rozlewiska: 43,4 m<sup>2</sup></p><p>Średnia szybkość parowania SO<sub>3</sub> z nad rozlewiska: 0,48 kg/s</p><p>Maksymalne wymiary chmury SO<sub>3</sub> o stężeniu PAC-2: 259 x 2148 m</p>";
}

function NA1C() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na1c.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ nitrozy ze zbiornika magazynowego Z-8 na skutek rozszczelnienia. Utworzenie rozlewiska w obrębie tacy, skażenie atmosfery, możliwość poparzenia, zatrucia, awarii ściekowej.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Masa uwolnionej nitrozy: 928 kg.</p><p>Powierzchnia rozlewiska: 58,4 m<sup>2</sup></p><p>Średnia szybkość parowania HNO<sub>3</sub> z nad rozlewiska: 0,026 kg/s</p><p>Maksymalne wymiary chmury NO<sub>2</sub> o stężeniu PAC-2: 29 x 480 m</p>";
}

function NA1D() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na1d.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wyciek nitrozy podczas załadunku do utocystern. Utworzenie rozlewiska, skażenie atmosfery, gruntu i wód gruntowych, możliwość poparzenia, zatrucia oraz ryzyko zapłonu w przypadku kontaktu z materiałami pochodzenia organicznego.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Masa uwolnionej nitrozy: 1446 kg.</p><p>Powierzchnia rozlewiska: 90 m<sup>2</sup></p><p>Średnia szybkość parowania HNO<sub>3</sub> z nad rozlewiska: 0,039 kg/s</p><p>Maksymalne wymiary chmury NO<sub>2</sub> o stężeniu PAC-2: 35 x 580 m</p>";
}

function NA1E() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na1e.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ całej zawartości nitrozy ze zbiornika Z-11 lub Z-12 w krótkim czasie. Utworzenie się rozlewiska, skażenie atmosfery, gruntu i wód gruntowych, możliwość poparzenia, zatrucia.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Masa uwolnionej nitrozy: 49920 kg.</p><p>Powierzchnia rozlewiska: 3120 m<sup>2</sup></p><p>Średnia szybkość parowania HNO<sub>3</sub> z nad rozlewiska: 1,036 kg/s</p><p>Maksymalne wymiary chmury NO<sub>2</sub> o stężeniu PAC-2: 339 x 4053 m</p>";
}

function NA1F() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na1f.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ nitrozy ze zbiornika Z-11 lub Z-12 na skutek rozszczelnienia. Utworzenie rozlewiska w obrębie tacy, skażenie atmosfery, możliwość poparzenia, zatrucia, awarii ściekowej.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Masa uwolnionej nitrozy: 624 kg.</p><p>Powierzchnia rozlewiska: 39 m<sup>2</sup></p><p>Średnia szybkość parowania HNO<sub>3</sub> z nad rozlewiska: 0,0018 kg/s</p><p>Maksymalne wymiary chmury NO<sub>2</sub> o stężeniu PAC-2: 37 x 387 m</p>";
}

function NA5A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na5a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Przegrzanie zawartości zbiornika magazynowego stopu azotanu amonu. Pod wpływem wysokiej temperatury następuje rozkład medium i emisja tlenków azotu (N<sub>2</sub>O i NO<sub>2</sub>). Skażenie atmosfery.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA5B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na5b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Przegrzanie mieszaniny reakcyjnej w reaktorze mieszalniku R-201. Emisja amoniaku z aparatu <span class=\"magnify\">(groźba eksplozji)</span>. Wykipienie mieszaniny reakcyjnej. Rozkład medium.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA5C() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na5c.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Niedogrzanie mieszaniny reakcyjnej. Zaczopowanie wypływu z reaktora. Zatrzymanie procesu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NA5D() {
    var image = document.getElementById("scenMap");
    image.src = "scen/na5d.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span>. Eksplozja składowanych nawozów. Straty w ludziach w sprzęcie.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

//tworzywa
function NK9A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk9a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> – wypływ całej zawartości azotynu amonu ze zbiornika LZ 007. Utworzenie rozlewiska na gruncie, skażenie gruntu i atmosfery. Możliwość zatrucia ludzi desorbującym amoniakiem, wystąpienia awarii ściekowej. </p><p>Nie istnieje niebezpieczeństwo wybuchowego rozkładu azotynu amonu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK9B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk9b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – mały wyciek azotynu amonu ze zbiornika LZ007. Utworzenie rozlewiska na tacy, skażenie atmosfery, możliwość zatrucia ludzi desorbującym amoniakiem. </p><p>Nie istnieje niebezpieczeństwo wybuchowego rozkładu azotynu amonu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK9C() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk9c.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – wypływ amoniaku gazowego  na dopływie do podgrzewacza nr 1. Skażenie atmosfery, możliwość zatrucia ludzi</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK9D() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk9d.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – Mały wypływ gazów nitrozowych po kondensatorze 14/1. Skażenie atmosfery, możliwość zatrucia ludzi.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK9E() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk9e.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – wybuchowy rozkład azotynu amonu w wieżach absorpcyjnych jedn. 1,2 lub 3. <p><span=\"magnify\">Wybuch, zniszczenie instalacji</span>.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK9F() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk9f.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> – wypływ całej zawartości wody amoniakalnej ze zbiornika Z-112a. Utworzenie rozlewiska na gruncie, skażenie gruntu i atmosfery. Możliwość zatrucia ludzi desorbującym amoniakiem, wystąpienia awarii ściekowej. </p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK9G() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk9g.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – mały wyciek wody amoniakalnej ze zbiornika Z-112a. Utworzenie rozlewiska na tacy, skażenie atmosfery, możliwość zatrucia ludzi desorbującym amoniakiem. </p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK9H() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk9h.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – mały wyciek amoniaku gazowego z chłodnicy amoniakalnej W-111. Skażenie atmosfery, możliwość zatrucia ludzi.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK9I() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk9i.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – mały wypływ dwutlenku siarki z chłodnicy W-220. Skażenie atmosfery dwutlenkiem siarki.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK9J() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk9j.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – mały wyciek siarczanu hydroksyloaminy ze zbiornika Z-217a. Skażenie atmosfery tlenkami azotu oraz tlenkami siarki. </p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK5A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk5a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> – wypływ całej zawartości zbiornika oleum w krótkim czasie. Utworzenie rozlewiska na tacy, skażenie atmosfery, możliwość zatrucia ludzi, wystąpienia awarii ściekowej, skażenia gruntu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK5B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk5a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wyciek oleum podczas operacji załadunku cysterny. Utworzenie rozlewiska na tacy podtorowej, skażenie atmosfery możliwość poparzenia, zatrucia, awarii ściekowej, skażenia gruntu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK5C() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk5c.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najbardziej prawdopodobny</span> – mały wyciek oleum podczas rozładunku lub z powodu uszkodzenia uszczelnienia, zaworu, rurociągu lub króćca na zbiorniku. Utworzenie rozlewiska, skażenie atmosfery, możliwość poparzenia, zatrucia, awarii ściekowej, skażenia gleby. </p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK5D() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk5d.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Przelanie zbiornika pośredniego). Utworzenie rozlewiska, skażenie atmosfery możliwość poparzenia, zatrucia, awarii ściekowej.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK5E() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk5e.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najbardziej prawdopodobny</span> – wypływ zawartości rurociągu oleum w krótkim czasie. Utworzenie rozlewiska na ziemi, skażenie gleby i atmosfery, możliwość wystąpienia awarii ściekowej, zatrucia i poparzenia ludzi.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK5F() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk5f.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najbardziej prawdopodobny</span> – mały wyciek oleum podczas przesyłu oleum, awaria uszczelnienia, korozja materiału wewnętrzna lub zewnętrzna. Utworzenie rozlewiska, skażenie atmosfery, możliwość poparzenia ludzi, zatrucia, awarii ściekowej, skażenia gleby.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK3A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk3a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> – wypływ całej zawartości zbiornika fenolu w stokażu K-35, w krótkim czasie. Utworzenie rozlewiska na tacy, skażenie atmosfery, możliwość zatrucia i wystąpienia awarii ściekowej, pożaru.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK3B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk3b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wyciek fenolu z całej autocysterny podczas rozładunku całym przekrojem rurociągu (przewodu elastycznego). Utworzenie rozlewiska, skażenie atmosfery możliwość poparzenia, zatrucia, awarii ściekowej, skażenia gruntu, pożar powierzchniowy.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK3C() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk3c.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najbardziej prawdopodobny</span> – Mały wyciek fenolu podczas rozładunku lub z powodu uszkodzenia uszczelnienia, zaworu, rurociągu (przewodu elastycznego) lub króćca na zbiorniku. Utworzenie rozlewiska, skażenie atmosfery możliwość poparzenia, zatrucia, awarii ściekowej, pożar powierzchniowy.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK4A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk4a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> – wypływ zawartości zbiornika oleum w krótkim czasie. Utworzenie rozlewiska na tacy, skażenie atmosfery, możliwość zatrucia i poparzenia ludzi, wystąpienia awarii ściekowej.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK4B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk4b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najbardziej prawdopodobny</span> – mały wyciek oleum z powodu uszkodzenia uszczelnienia, zaworu, rurociągu lub króćca na zbiorniku. Utworzenie rozlewiska na tacy, skażenie atmosfery, możliwość poparzenia, zatrucia, awarii ściekowej.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK1A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk1a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> – Wypływ 50% zawartości benzenu ze zbiornika. Zniszczenie zbiornika spowodowane awarią spawu. Utworzenie rozlewiska na gruncie, skażenie gruntu i atmosfery. Możliwość zatrucia ludzi, wystąpienia awarii ściekowej, pożaru wewnętrznego i pożaru powierzchniowego oraz wybuchu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK1B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk1b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – Mały wyciek benzenu z powodu uszkodzenia uszczelnienia, zaworu, rurociągu lub króćca na zbiorniku. Utworzenie rozlewiska na gruncie, skażenie gruntu i skażenie atmosfery. Możliwość pożaru powierzchniowego, awarii ściekowej oraz wybuchu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK1C() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk1c.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – Mały wyciek benzenu z powodu uszkodzenia rurociągu tłoczącego pomp Utworzenie rozlewiska skażenie atmosfery. Możliwość pożaru powierzchniowego, awarii ściekowej oraz wybuchu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK1D() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk1d.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – Uszkodzenie bądź zerwanie połączenia elastycznego podczas rozładunku cysterny z benzenem. Wyciek częścią przekroju rurociągu spustowego. Utworzenie rozlewiska, skażenie atmosfery skażenie gruntu. Możliwość pożaru powierzchniowego.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK1E() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk1e.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Uszkodzenie bądź zniszczenie cysterny spowodowane wzrostem /spadkiem ciśnienia, duży wyciek benzenu, pożar powierzchniowy oraz całej zawartości cysterny. Utworzenie rozlewiska, skażenie atmosfery skażenie gruntu. Możliwość pożaru powierzchniowego.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK1F() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk1f.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> – Wypływ 50% zawartości cykloheksanu ze zbiornika. Zniszczenie zbiornika spowodowane awarią spawu. Utworzenie rozlewiska na gruncie, skażenie gruntu i atmosfery. Możliwość zatrucia ludzi, wystąpienia awarii ściekowej, pożaru wewnętrznego i pożaru powierzchniowego oraz wybuchu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK1G() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk1g.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – Mały wyciek cykloheksanu z powodu korozji, uszkodzenia uszczelnienia, zaworu, lub króćca na zbiorniku. Utworzenie rozlewiska na gruncie, skażenie gruntu i skażenie atmosfery. Możliwość pożaru powierzchniowego, awarii ściekowej oraz wybuchu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK1H() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk1h.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – Mały wyciek cykloheksanu z powodu uszkodzenia rurociągu tłoczącego pomp. Utworzenie rozlewiska skażenie atmosfery. Możliwość pożaru powierzchniowego, awarii ściekowej oraz wybuchu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK1I() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk1i.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> – Wypływ 50% zawartości cykloheksanonu ze zbiornika. Zniszczenie zbiornika spowodowane awarią spawu. Utworzenie rozlewiska na gruncie, skażenie gruntu i atmosfery. Możliwość zatrucia ludzi, wystąpienia awarii ściekowej, pożaru wewnętrznego i pożaru powierzchniowego oraz wybuchu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK1J() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk1j.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – Mały wyciek cykloheksanonu z powodu uszkodzenia uszczelnienia, zaworu, rurociągu lub króćca na zbiorniku. Utworzenie rozlewiska na gruncie, skażenie gruntu i skażenie atmosfery. Możliwość pożaru powierzchniowego, awarii ściekowej oraz wybuchu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK1K() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk1k.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek prawdopodobny</span> – Mały wyciek cykloheksanonu z powodu uszkodzenia rurociągu tłoczącego pomp. Utworzenie rozlewiska skażenie atmosfery. Możliwość pożaru powierzchniowego, awarii ściekowej oraz wybuchu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK2A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk2a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> – Wypływ przegrzanego cykloheksanu z pękniętego spawu na aparacie lub rurociągu w węźle reaktora utleniania cykloheksanu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK2B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk2b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najbardziej prawdopodobny</span> – Mały wypływ przegrzanego cykloheksanu z uszkodzonego zaworu lub połączenia kołnierzowego na aparacie lub rurociągu w węźle reaktora utleniania cykloheksanu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK2C() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk2c.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Mały wypływ ciekłego cykloheksanu z nieszczelności na połączeniu kołnierzowym rurociągu na kolumnie destylacyjnej.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK2D() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk2d.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Mały wypływ gazowego cykloheksanu z nieszczelności na połączeniu kołnierzowym w węźle kolumny destylacyjnej.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK2E() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk2e.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Mały wypływ ciekłego cykloheksanu z nieszczelności na połączeniu kołnierzowym lub z uszkodzonego zaworu na reaktorze rozkładu nadtlenków.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK6A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk6a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> - Uszkodzenie zbiornika amoniaku ciekłego i wypływ całej zawartości.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK6B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk6b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najbardziej prawdopodobny</span> - Wypływ amoniaku ciekłego z połączenia kołnierzowego, króćca lub uszczelki na rurociągu lub na zbiorniku.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK7A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk7a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ całej zawartości formaliny ze zbiornika. Utworzenie się rozlewiska w obrębie tacy, skażenie atmosfery, możliwość zatrucia.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK7B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk7b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Wypływ formaliny ze zbiornika na skutek rozszczelnienia. Utworzenie rozlewiska w obrębie tacy, skażenie atmosfery, możliwość zatrucia.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK8A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk8a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> - Katastroficzny wypływ metanolu z pękniętego zbiornika poz.17 w obiekcie E-65a o pojemności 300 m<sup>3</sup>.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK8B() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk8b.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najbardziej prawdopodobny</span> - Mały wypływ metanolu z uszkodzonego zaworu lub połączenia kołnierzowego na zbiorniku poz. 17 w obiekcie E-65a o pojemności 300 m3 lub rurociągu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK8C() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk8c.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Mały wypływ metanolu z uszkodzonego zaworu lub połączenia kołnierzowego podczas rozładunku cysterny kolejowej obiekt E-67.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK8D() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk8d.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Mały wypływ formaliny z uszkodzonego zaworu lub połączenia kołnierzowego na zbiorniku poz. 29 w obiekcie E-86 o pojemności 40 m<sup>3</sup> lub rurociągu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK8E() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk8e.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Mały wypływ trioksanu z uszkodzonego zaworu lub połączenia kołnierzowego na zbiorniku poz. 154 w obiekcie E-86 o pojemności 36 m<sup>3</sup> lub rurociągu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK8F() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk8f.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Mały wypływ ścieków do spalania z uszkodzonego zaworu lub połączenia kołnierzowego na zbiorniku poz. 135 w obiekcie E-86 o pojemności 50 m<sup>3</sup> lub rurociągu.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK8G() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk8g.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Eksplozja w reaktorze syntezy poz. 1106 lub 1206 w obiekcie F-81.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NK8H() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nk8h.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p>Mały wypływ mieszaniny reakcyjnej z reaktora trioksanu poz. 101 w obiekcie E-86.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

//logistyka
function NV1A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nv1a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> - Eksplozja składowanych nawozów. Straty w ludziach i sprzęcie.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

//katalizatory
function NWK1A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nwk1a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> - Produkcja katalizatora żelazowo-chromowego.  Przedostanie się związków szkodliwych dla środowiska wodnego w postaci stałej lub w roztworze do ścieków. Dotyczyć może dichromianu sodu oraz siarczanu miedzi(+2). Możliwość wystąpienia awarii ściekowej.</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}

function NWK1A() {
    var image = document.getElementById("scenMap");
    image.src = "scen/nwk1a.jpg";
    var text = document.getElementById("scenMapHeader");
    text.innerHTML = "<p><span class=\"magnify\">Wypadek najgorszy</span> - Produkcja katalizatora miedziowego. Przedostanie się roztworu azotanu miedzi do gleby w przypadku przepełnienia tacy podzbiornikowej. (Taca jest bezodpływowa).</p>";
    var text1 = document.getElementById("scenMapFooter");
    text1.innerHTML = "<p>Tu będą podawane wyniki liczbowe pod mapką.</p>";
}


//chowamy wszystko (mapy)

//chowamy wszystko (scenariusze)
function hideEveryMap() {
    //tu dodamy chowanie wszystkich list rozwijanych
    //trzeba to wywołać przed w każdej funkcji select...

    var nawozy = document.getElementById("mapInstalNawozy1");
    nawozy.classList.add("mInvisible");

    var tworzywa = document.getElementById("mapInstalTworzywa1");
    tworzywa.classList.add("mInvisible");

    var energetyka = document.getElementById("mapInstalEnergetyka1");
    energetyka.classList.add("mInvisible");

    var infrastruktura = document.getElementById("mapInstalInfrastruktura1");
    infrastruktura.classList.add("mInvisible");

    var katalizatory = document.getElementById("mapInstalKatalizatory1");
    katalizatory.classList.add("mInvisible");
}

//wybieramy instalacje do map

function mapSelectNawozy() {
    hideEveryMap();
    var nawozyButton = document.getElementById("mapInstalNawozy1");
    nawozyButton.classList.remove("mInvisible");
}

function mapSelectTworzywa() {
    hideEveryMap();
    var nawozyButton = document.getElementById("mapInstalTworzywa1");
    nawozyButton.classList.remove("mInvisible");
}

function mapSelectEnergetyka() {
    hideEveryMap();
    var nawozyButton = document.getElementById("mapInstalEnergetyka1");
    nawozyButton.classList.remove("mInvisible");
}

function mapSelectInfrastruktura() {
    hideEveryMap();
    var nawozyButton = document.getElementById("mapInstalInfrastruktura1");
    nawozyButton.classList.remove("mInvisible");
}

function mapSelectKatalizatory() {
    hideEveryMap();
    var nawozyButton = document.getElementById("mapInstalKatalizatory1");
    nawozyButton.classList.remove("mInvisible");
}

//wybieramy scenariusze do map
//nawozy
function mapInstGazSyntezowy() {
    mapSelectNawozy();
    var mButton = document.getElementById("mapInstalNawozy");
    mButton.classList.remove("mInvisible");
}

function mapInstWodor() {
    mapSelectNawozy();
    var mButton = document.getElementById("mapInstalNawozy");
    mButton.classList.remove("mInvisible");
}
