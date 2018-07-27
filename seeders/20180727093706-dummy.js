'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{"first_name":"Burlie","last_name":"Suckling","gender":"Male","birthday":"2001-11-11 12:46:19","email":"bsuckling0@ft.com","phone":"9751597536"},
    {"first_name":"Odie","last_name":"Remmers","gender":"Male","birthday":"2002-12-31 08:11:28","email":"oremmers1@yellowbook.com","phone":"2514943322"},
    {"first_name":"Tammy","last_name":"Georgeou","gender":"Male","birthday":"2004-09-07 04:28:31","email":"tgeorgeou2@etsy.com","phone":"1809002844"},
    {"first_name":"Francyne","last_name":"Paolucci","gender":"Female","birthday":"1999-02-16 20:04:17","email":"fpaolucci3@timesonline.co.uk","phone":"1828260445"},
    {"first_name":"Lyn","last_name":"Sabates","gender":"Female","birthday":"1991-09-03 12:46:30","email":"lsabates4@vistaprint.com","phone":"7979101574"},
    {"first_name":"Winfred","last_name":"Bolduc","gender":"Male","birthday":"2002-08-14 22:43:33","email":"wbolduc5@unesco.org","phone":"8818714039"},
    {"first_name":"Elsie","last_name":"Oki","gender":"Female","birthday":"1984-04-06 19:37:59","email":"eoki6@reuters.com","phone":"6894813122"},
    {"first_name":"Hagen","last_name":"Wipper","gender":"Male","birthday":"2007-08-12 07:37:29","email":"hwipper7@house.gov","phone":"1942544406"},
    {"first_name":"Rebeca","last_name":"Kidston","gender":"Female","birthday":"2008-04-03 04:39:56","email":"rkidston8@irs.gov","phone":"2455340297"},
    {"first_name":"Chryste","last_name":"Diament","gender":"Female","birthday":"1987-04-04 21:14:34","email":"cdiament9@acquirethisname.com","phone":"9674154449"},
    {"first_name":"Brantley","last_name":"Lushey","gender":"Male","birthday":"2007-05-27 21:16:01","email":"blusheya@photobucket.com","phone":"2934571794"},
    {"first_name":"Karlik","last_name":"Simes","gender":"Male","birthday":"1993-01-23 11:26:35","email":"ksimesb@scribd.com","phone":"2648428165"},
    {"first_name":"Artur","last_name":"Enden","gender":"Male","birthday":"1992-08-28 16:55:18","email":"aendenc@arizona.edu","phone":"2737597700"},
    {"first_name":"Bartholemy","last_name":"Soughton","gender":"Male","birthday":"1996-07-05 14:21:19","email":"bsoughtond@sakura.ne.jp","phone":"6326841504"},
    {"first_name":"Arte","last_name":"Manktelow","gender":"Male","birthday":"2010-05-28 06:10:42","email":"amanktelowe@github.io","phone":"9005431912"},
    {"first_name":"Blondell","last_name":"Joder","gender":"Female","birthday":"1992-06-09 23:24:11","email":"bjoderf@weebly.com","phone":"5159920885"},
    {"first_name":"Torrence","last_name":"Humphris","gender":"Male","birthday":"1983-11-04 06:03:33","email":"thumphrisg@archive.org","phone":"2191751878"},
    {"first_name":"Tarrance","last_name":"Surr","gender":"Male","birthday":"1991-07-16 12:31:31","email":"tsurrh@shutterfly.com","phone":"3734794945"},
    {"first_name":"Silvan","last_name":"Tomanek","gender":"Male","birthday":"1984-01-31 19:04:24","email":"stomaneki@wix.com","phone":"2668357748"},
    {"first_name":"Evelyn","last_name":"Wychard","gender":"Male","birthday":"2007-03-20 22:11:44","email":"ewychardj@vimeo.com","phone":"5037257555"},
    {"first_name":"Zea","last_name":"Toffanini","gender":"Female","birthday":"2009-09-22 23:20:30","email":"ztoffaninik@woothemes.com","phone":"8803610611"},
    {"first_name":"Imelda","last_name":"MacCallam","gender":"Female","birthday":"1986-01-25 21:56:36","email":"imaccallaml@meetup.com","phone":"6051032651"},
    {"first_name":"Lorenzo","last_name":"Gheerhaert","gender":"Male","birthday":"1990-03-07 02:59:26","email":"lgheerhaertm@altervista.org","phone":"2761906831"},
    {"first_name":"Demetra","last_name":"Cudmore","gender":"Female","birthday":"1996-09-15 14:12:39","email":"dcudmoren@prnewswire.com","phone":"8862905387"},
    {"first_name":"Lenora","last_name":"Gillicuddy","gender":"Female","birthday":"2008-11-26 03:09:23","email":"lgillicuddyo@bravesites.com","phone":"1338310506"},
    {"first_name":"Cathrine","last_name":"Fontaine","gender":"Female","birthday":"1986-12-30 18:30:40","email":"cfontainep@mashable.com","phone":"6961143384"},
    {"first_name":"Amerigo","last_name":"Stilldale","gender":"Male","birthday":"2009-10-02 08:56:36","email":"astilldaleq@nih.gov","phone":"4599979367"},
    {"first_name":"Reena","last_name":"Rivenzon","gender":"Female","birthday":"1988-03-10 19:35:15","email":"rrivenzonr@blogspot.com","phone":"5826757142"},
    {"first_name":"Kris","last_name":"Crosskell","gender":"Female","birthday":"1995-09-08 18:37:05","email":"kcrosskells@mapy.cz","phone":"4795209792"},
    {"first_name":"Gabe","last_name":"Ganiford","gender":"Male","birthday":"1999-02-24 03:06:48","email":"gganifordt@zimbio.com","phone":"8045816174"},
    {"first_name":"Kris","last_name":"Miguet","gender":"Female","birthday":"1989-03-02 03:03:24","email":"kmiguetu@samsung.com","phone":"6128309860"},
    {"first_name":"Fredra","last_name":"Organ","gender":"Female","birthday":"1992-09-06 08:44:12","email":"forganv@bloglines.com","phone":"5519688023"},
    {"first_name":"Winnie","last_name":"Puckrin","gender":"Female","birthday":"2008-02-07 09:20:33","email":"wpuckrinw@google.ca","phone":"2833615557"},
    {"first_name":"Brennen","last_name":"Smallman","gender":"Male","birthday":"1991-01-12 03:43:37","email":"bsmallmanx@amazonaws.com","phone":"5532354408"},
    {"first_name":"Ricky","last_name":"Pester","gender":"Male","birthday":"1988-10-13 06:31:33","email":"rpestery@hatena.ne.jp","phone":"7805130065"},
    {"first_name":"Marla","last_name":"Pallesen","gender":"Female","birthday":"2000-02-24 03:38:34","email":"mpallesenz@dell.com","phone":"6923805192"},
    {"first_name":"Gerry","last_name":"Wressell","gender":"Male","birthday":"1999-04-24 08:56:26","email":"gwressell10@studiopress.com","phone":"8416618641"},
    {"first_name":"Georas","last_name":"Maddock","gender":"Male","birthday":"2010-02-03 10:52:47","email":"gmaddock11@whitehouse.gov","phone":"3394017787"},
    {"first_name":"Fredelia","last_name":"Sweedy","gender":"Female","birthday":"2001-12-12 10:44:29","email":"fsweedy12@soup.io","phone":"2311343884"},
    {"first_name":"Audrie","last_name":"Vials","gender":"Female","birthday":"1994-03-22 17:28:45","email":"avials13@japanpost.jp","phone":"9855843965"},
    {"first_name":"Kaleb","last_name":"Plain","gender":"Male","birthday":"1984-03-26 08:23:40","email":"kplain14@bloglovin.com","phone":"1785153053"},
    {"first_name":"Sergio","last_name":"Gooms","gender":"Male","birthday":"1998-12-10 07:43:21","email":"sgooms15@163.com","phone":"2191132367"},
    {"first_name":"Ree","last_name":"Adin","gender":"Female","birthday":"1990-09-21 06:09:13","email":"radin16@miitbeian.gov.cn","phone":"5636548189"},
    {"first_name":"Kippie","last_name":"Olding","gender":"Female","birthday":"1995-05-17 20:37:06","email":"kolding17@jalbum.net","phone":"8652133102"},
    {"first_name":"Jerad","last_name":"Garnar","gender":"Male","birthday":"1984-10-09 16:13:36","email":"jgarnar18@ucoz.ru","phone":"2662936959"},
    {"first_name":"Ofilia","last_name":"Greenham","gender":"Female","birthday":"1997-10-15 17:57:56","email":"ogreenham19@rambler.ru","phone":"2021070842"},
    {"first_name":"George","last_name":"Konzelmann","gender":"Female","birthday":"2005-06-26 22:28:42","email":"gkonzelmann1a@usa.gov","phone":"3885261580"},
    {"first_name":"Sarena","last_name":"Fillon","gender":"Female","birthday":"2001-04-23 12:18:06","email":"sfillon1b@gravatar.com","phone":"9873775626"},
    {"first_name":"Davie","last_name":"Hillen","gender":"Male","birthday":"2008-06-10 21:55:03","email":"dhillen1c@angelfire.com","phone":"6637735640"},
    {"first_name":"Jemimah","last_name":"Swyn","gender":"Female","birthday":"2004-06-14 02:36:11","email":"jswyn1d@alexa.com","phone":"2202850866"}], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
