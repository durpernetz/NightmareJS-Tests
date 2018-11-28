/// <reference path="./steps.d.ts" />

Feature('URLs');

Scenario('Homepage Content', (I) => {
    // I.amOnPage('/');
    // I.seeElement('//section/div/a/i');
    // I.click('//section/div/a/i');
    // I.seeInCurrentUrl('/facts');
    I.amOnPage('/');
    I.click('ATTEND');
    I.seeInCurrentUrl('/attend');
    I.amOnPage('/');
    I.click('VOLUNTEER');
    I.seeInCurrentUrl('/volunteer');
    I.amOnPage('/');
    I.click('CONFERENCES');
    I.click('E-Capital Summit', '.modal-dialog')
});
