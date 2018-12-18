/// <reference path="./steps.d.ts" />

Feature('URLs');

Scenario('Favicon Loop', (I) => {
    I.amOnPage('/');
    I.seeElementInDOM('//div/div/ul/li[position()=1]/a');
    var URLs =
    ['https://twitter.com/earthxorg',
    'https://www.facebook.com/earthxorg/',
    'https://www.instagram.com/earthxorg/',
    'https://www.youtube.com/channel/UC79bJXPacuiS262Q5SB84Tg',
    'https://www.linkedin.com/company/earthx.org/'];
    var numofLinks = 5;
    for (var x = 1; x < numofLinks; x++){
        var linkNumber = x;
        var curLink =  '//div/div/ul/li[position()='+ linkNumber +']/a';
        I.click(curLink);
        I.grabCurrentUrl(URLs[x]);
    }
})

// Scenario('Twitter Favicon', (I) => {
//     I.amOnPage('/');
//     I.click('//div/div/ul/li[position()=1]/a');
//     I.seeInCurrentUrl('https://twitter.com/earthxorg');
//     I.amOnPage('https://earthx.org');
// });

// Scenario('Facebook Favicon', (I) => {
//     I.amOnPage('/');
//     I.click('//div/div/ul/li[position()=2]/a');
//     I.seeInCurrentUrl('https://www.facebook.com/earthxorg/');
//     I.amOnPage('https://earthx.org');
// });

// Scenario('Instagram Favicon', (I) => {
//     I.amOnPage('/');
//     I.click('//div/div/ul/li[position()=3]/a');
//     I.seeInCurrentUrl('https://www.instagram.com/earthxorg/');
//     I.amOnPage('https://earthx.org');
// });

// Scenario('Youtube Favicon', (I) => {
//     I.amOnPage('/');
//     I.click('//div/div/ul/li[position()=4]/a');
//     I.seeInCurrentUrl('https://www.youtube.com/channel/UC79bJXPacuiS262Q5SB84Tg');
//     I.amOnPage('https://earthx.org');
// });

// Scenario('Linkedin Favicon', (I) => {
//     I.amOnPage('/');
//     I.click('//div/div/ul/li[position()=5]/a');
//     I.seeInCurrentUrl('https://www.linkedin.com/company/earthx.org/');
//     I.amOnPage('https://earthx.org');
// });

Scenario('Header and Desktop Nav Bar', (I) => {
    I.amOnPage('/');
    I.click('a', 'headerLogo');
    I.click('ABOUT US');
    I.seeInCurrentUrl('/about-us');
    I.amOnPage('/');
    I.click('FIND YOUR FOCUS');
    I.click('Home, Health & Active Lifestyle');
    I.seeInCurrentUrl('/home-health-lifestyle');
    I.amOnPage('/');
    I.click('Academic, Culture & Community');
    I.seeInCurrentUrl('/academic-culture-community');
    I.amOnPage('/');
    I.click('Technology & Innovation');
    I.seeInCurrentUrl('/technology-innovation');
    I.amOnPage('/');
    I.click('Natural Resources & Conservation');
    I.seeInCurrentUrl('/natural-resources');
    I.amOnPage('/');
    I.click('Policy & Industry');
    I.seeInCurrentUrl('/policy-industry');
    I.amOnPage('/');
    I.click('Children & Family');
    I.seeInCurrentUrl('/children-family');
    I.amOnPage('/');
    I.click('EARTHX2018');
    I.click('EarthxFilm');
    I.seeInCurrentUrl('https://www.earthxfilm.org/');
    I.amOnPage('/');
    I.click('Conferences');
    I.click('Ecapital 2018');
    I.seeInCurrentUrl('/ecapital');
    I.amOnPage('/');
    I.click('EarthxSolar');
    I.seeInCurrentUrl('/solar');
    I.amOnPage('/');
    I.click('EarthxOcean');
    I.seeInCurrentUrl('/ocean');
    I.amOnPage('/');
    I.click('Oil And Gas');
    I.seeInCurrentUrl('/oil-and-gas');
    I.amOnPage('/');
    I.click('Energy Done Right');
    I.seeInCurrentUrl('https://energydoneright.net/');
    I.amOnPage('/');
    I.click('Texan communities');
    I.seeInCurrentUrl('https://climateofficers.org/texas');
    I.amOnPage('/');
    I.click('EarthxMexico');
    I.seeInCurrentUrl('https://www.earthxmexico.org');
    I.amOnPage('/');
    I.click('EarthxEdu');
    I.seeInCurrentUrl('/edu');
    I.amOnPage('/');
    I.click('Event Guide');
    I.seeInCurrentUrl('/eventguide');
    I.amOnPage('/');
    I.click('EARTHX 2019');
    I.amOnPage('/');
    I.click('Attend');
    I.seeInCurrentUrl('/attend');
    I.amOnPage('/');
    I.click('Exhibit');
    I.seeInCurrentUrl('/exhibit');
    I.amOnPage('/');
    I.click('Sponsor');
    I.seeInCurrentUrl('/sponsor');
    I.amOnPage('/');
    I.click('Sustainability');
    I.seeInCurrentUrl('/sustainability');
    I.amOnPage('/');
    I.click('Volunteer');
    I.seeInCurrentUrl('/volunteer');
    I.amOnPage('/');
    I.click('FAQ');
    I.seeInCurrentUrl('/faq');
    I.amOnPage('/');
    I.click('Donate');
    I.seeInCurrentUrl('/give/191908/#!/donation/checkout');
    I.amOnPage('/');
    I.click('Calendar');
    I.seeInCurrentUrl('/event-schedule-2018/');
    I.amOnPage('/');
    I.click('EARTHX IMPACT');
    I.seeInCurrentUrl('https://simpletruths.earthx.org');
    I.amOnPage('/');
})