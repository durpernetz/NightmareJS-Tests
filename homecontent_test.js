/// <reference path="./steps.d.ts" />

Feature('URLs');

Scenario('Homepage Content', (I) => {
    // I.amOnPage('/');
    // I.seeElement('//section/div/a/i');
    // I.click('//section/div/a/i');
    // I.seeInCurrentUrl('/facts');
    // I.amOnPage('/');
    // I.click('ATTEND');
    // I.seeInCurrentUrl('/attend');
    // I.amOnPage('/');
    // I.click('VOLUNTEER');
    // // I.seeInCurrentUrl('/volunteer');
    // I.amOnPage('/');
    // I.click({css: 'div.eg-box'});
    
    // Scenario('Conferenes Modal URLs', (I) => {
    //     var parent = document.getElementById('myModalparticipate');
    //     var links = parent.getElementsByTagName('a');

    //     function myfunction(a){
    //         var attr = a.getAttribute('href');
    //     }
    //     for (var x = 0; x < links.length; x++){
    //         myfunction(links[x]);
                I.click('') 
    //     }
        I.amOnPage('/');
        I.seeElementInDOM({id: 'myModalparticipate'});
        I.click('#myModalparticipate a');
        I.seeInCurrentUrl('/ecapital');
        
    // });

    
});
