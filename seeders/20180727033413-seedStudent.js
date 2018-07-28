'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Students', [{"firstName":"Franklyn","lastName":"Lippi","gender":"Male","birtday":"12/27/1997","email":"flippi0@phoca.cz","phone":229347359},
   {"firstName":"Hendrik","lastName":"Gregoletti","gender":"Male","birtday":"10/8/2007","email":"hgregoletti1@skyrock.com","phone":207952372},
   {"firstName":"Gwendolyn","lastName":"Kenealy","gender":"Female","birtday":"1/23/2005","email":"gkenealy2@imgur.com","phone":689364180},
   {"firstName":"Maddie","lastName":"Sharrock","gender":"Male","birtday":"1/4/2012","email":"msharrock3@nature.com","phone":65407723},
   {"firstName":"Farly","lastName":"Mix","gender":"Male","birtday":"10/6/2014","email":"fmix4@illinois.edu","phone":365133054},
   {"firstName":"Nikolaus","lastName":"Temple","gender":"Male","birtday":"4/26/2013","email":"ntemple5@baidu.com","phone":781376339},
   {"firstName":"Zorina","lastName":"Klimentov","gender":"Female","birtday":"8/2/2012","email":"zklimentov6@wikipedia.org","phone":589717106},
   {"firstName":"Benedetto","lastName":"Tewkesberrie","gender":"Male","birtday":"5/16/2013","email":"btewkesberrie7@wikimedia.org","phone":794050998},
   {"firstName":"Doreen","lastName":"Derr","gender":"Female","birtday":"5/20/2000","email":"dderr8@nydailynews.com","phone":387011809},
   {"firstName":"Cirillo","lastName":"McClintock","gender":"Male","birtday":"10/11/1997","email":"cmcclintock9@hud.gov","phone":794717064},
   {"firstName":"Benedikt","lastName":"Callery","gender":"Male","birtday":"1/10/1999","email":"bcallerya@nymag.com","phone":119963296},
   {"firstName":"Sullivan","lastName":"Abbots","gender":"Male","birtday":"10/27/1992","email":"sabbotsb@4shared.com","phone":578569603},
   {"firstName":"Ardath","lastName":"Clifft","gender":"Female","birtday":"2/14/2007","email":"aclifftc@gizmodo.com","phone":854002159},
   {"firstName":"Hugues","lastName":"Lyte","gender":"Male","birtday":"10/1/2010","email":"hlyted@wikimedia.org","phone":190668506},
   {"firstName":"Saidee","lastName":"McBeth","gender":"Female","birtday":"8/4/1991","email":"smcbethe@pinterest.com","phone":478520960},
   {"firstName":"Binky","lastName":"Gooders","gender":"Male","birtday":"10/25/2002","email":"bgoodersf@edublogs.org","phone":747706901},
   {"firstName":"Angelina","lastName":"Keaton","gender":"Female","birtday":"9/20/2016","email":"akeatong@dailymotion.com","phone":792554825},
   {"firstName":"Paul","lastName":"Arnholz","gender":"Male","birtday":"7/4/2002","email":"parnholzh@adobe.com","phone":313148056},
   {"firstName":"Patricio","lastName":"Conneau","gender":"Male","birtday":"12/13/2016","email":"pconneaui@meetup.com","phone":532141949},
   {"firstName":"Lilllie","lastName":"Rousby","gender":"Female","birtday":"3/6/2018","email":"lrousbyj@sina.com.cn","phone":781990828},
   {"firstName":"Anjela","lastName":"Dix","gender":"Female","birtday":"8/11/1996","email":"adixk@cmu.edu","phone":363622467},
   {"firstName":"Viviyan","lastName":"Escoffier","gender":"Female","birtday":"9/21/1995","email":"vescoffierl@mit.edu","phone":977845987},
   {"firstName":"Isahella","lastName":"Gowland","gender":"Female","birtday":"8/11/2010","email":"igowlandm@google.fr","phone":421797248},
   {"firstName":"Meredithe","lastName":"Lowndesbrough","gender":"Female","birtday":"11/11/2009","email":"mlowndesbroughn@gov.uk","phone":248437971},
   {"firstName":"Clifford","lastName":"Peyto","gender":"Male","birtday":"1/30/2014","email":"cpeytoo@google.co.uk","phone":107832341},
   {"firstName":"Lizzy","lastName":"Loffel","gender":"Female","birtday":"9/28/1995","email":"lloffelp@diigo.com","phone":845233007},
   {"firstName":"Mace","lastName":"Britnell","gender":"Male","birtday":"6/28/2014","email":"mbritnellq@mysql.com","phone":247212962},
   {"firstName":"Husain","lastName":"McRorie","gender":"Male","birtday":"12/25/2002","email":"hmcrorier@craigslist.org","phone":570591227},
   {"firstName":"Goldia","lastName":"McGaraghan","gender":"Female","birtday":"5/23/2015","email":"gmcgaraghans@yale.edu","phone":237489433},
   {"firstName":"Ruth","lastName":"Meiklam","gender":"Female","birtday":"10/5/1997","email":"rmeiklamt@vk.com","phone":256720901},
   {"firstName":"Sarene","lastName":"Kenworthey","gender":"Female","birtday":"3/29/1997","email":"skenwortheyu@nymag.com","phone":524687330},
   {"firstName":"Moyna","lastName":"Sivorn","gender":"Female","birtday":"2/22/2018","email":"msivornv@reverbnation.com","phone":248402490},
   {"firstName":"Jeanette","lastName":"Rawcliffe","gender":"Female","birtday":"8/5/2005","email":"jrawcliffew@feedburner.com","phone":959500580},
   {"firstName":"Leonanie","lastName":"Itzkovich","gender":"Female","birtday":"12/26/2009","email":"litzkovichx@thetimes.co.uk","phone":779553322},
   {"firstName":"Berrie","lastName":"Caser","gender":"Female","birtday":"7/4/2017","email":"bcasery@walmart.com","phone":111863223},
   {"firstName":"Orly","lastName":"Castilla","gender":"Female","birtday":"1/23/2008","email":"ocastillaz@shinystat.com","phone":210611846},
   {"firstName":"Dud","lastName":"Biagioni","gender":"Male","birtday":"12/30/2011","email":"dbiagioni10@opera.com","phone":118182705},
   {"firstName":"Evangelia","lastName":"Tocque","gender":"Female","birtday":"7/17/2012","email":"etocque11@gizmodo.com","phone":621189537},
   {"firstName":"Stacy","lastName":"Dhenin","gender":"Male","birtday":"5/3/2011","email":"sdhenin12@washingtonpost.com","phone":760414107},
   {"firstName":"Ciel","lastName":"Busain","gender":"Female","birtday":"4/1/2018","email":"cbusain13@forbes.com","phone":471506054},
   {"firstName":"Tiler","lastName":"Jancic","gender":"Male","birtday":"7/9/1998","email":"tjancic14@omniture.com","phone":717754395},
   {"firstName":"Sela","lastName":"Acome","gender":"Female","birtday":"3/5/2017","email":"sacome15@forbes.com","phone":680453488},
   {"firstName":"Ode","lastName":"Blackway","gender":"Male","birtday":"5/30/2002","email":"oblackway16@facebook.com","phone":64339446},
   {"firstName":"Alyce","lastName":"Forlonge","gender":"Female","birtday":"11/7/1991","email":"aforlonge17@youtube.com","phone":868052570},
   {"firstName":"Phylis","lastName":"Tancock","gender":"Female","birtday":"11/9/1993","email":"ptancock18@discuz.net","phone":376823971},
   {"firstName":"Shaylynn","lastName":"Gason","gender":"Female","birtday":"4/19/2008","email":"sgason19@cloudflare.com","phone":22390256},
   {"firstName":"Ethelred","lastName":"Dwire","gender":"Male","birtday":"9/14/2002","email":"edwire1a@springer.com","phone":248116541},
   {"firstName":"Jan","lastName":"Vines","gender":"Male","birtday":"12/3/2000","email":"jvines1b@xinhuanet.com","phone":152003692},
   {"firstName":"Edeline","lastName":"Janaway","gender":"Female","birtday":"1/31/2017","email":"ejanaway1c@chronoengine.com","phone":526830150},
   {"firstName":"Lodovico","lastName":"Pagel","gender":"Male","birtday":"1/14/2007","email":"lpagel1d@washington.edu","phone":99065841},
   {"firstName":"Antin","lastName":"Twitching","gender":"Male","birtday":"2/25/2012","email":"atwitching1e@storify.com","phone":436379025},
   {"firstName":"Derk","lastName":"Blair","gender":"Male","birtday":"6/21/1998","email":"dblair1f@bravesites.com","phone":682682357},
   {"firstName":"Gregoor","lastName":"Wathall","gender":"Male","birtday":"4/24/2012","email":"gwathall1g@google.de","phone":622143234},
   {"firstName":"Hal","lastName":"Bailles","gender":"Male","birtday":"1/7/2016","email":"hbailles1h@jigsy.com","phone":525013021},
   {"firstName":"Engracia","lastName":"Wimp","gender":"Female","birtday":"2/1/1998","email":"ewimp1i@google.it","phone":897916212},
   {"firstName":"Chery","lastName":"Barnewall","gender":"Female","birtday":"7/16/2009","email":"cbarnewall1j@bloomberg.com","phone":410166738},
   {"firstName":"Parnell","lastName":"Apfler","gender":"Male","birtday":"11/6/2001","email":"papfler1k@intel.com","phone":239705201},
   {"firstName":"Constantino","lastName":"O'Noulane","gender":"Male","birtday":"11/12/2014","email":"conoulane1l@theguardian.com","phone":128638984},
   {"firstName":"Kacey","lastName":"Patching","gender":"Female","birtday":"1/3/2018","email":"kpatching1m@miibeian.gov.cn","phone":826524793},
   {"firstName":"Sander","lastName":"Padillo","gender":"Male","birtday":"7/23/2007","email":"spadillo1n@newyorker.com","phone":887403957},
   {"firstName":"Joanie","lastName":"Brabban","gender":"Female","birtday":"4/28/2010","email":"jbrabban1o@simplemachines.org","phone":26723754},
   {"firstName":"Pearla","lastName":"Savin","gender":"Female","birtday":"3/8/2015","email":"psavin1p@slideshare.net","phone":648529761},
   {"firstName":"Waly","lastName":"Zoppo","gender":"Female","birtday":"4/21/1994","email":"wzoppo1q@yellowbook.com","phone":850608353},
   {"firstName":"Porty","lastName":"Braben","gender":"Male","birtday":"3/22/2015","email":"pbraben1r@sbwire.com","phone":117008349},
   {"firstName":"Georges","lastName":"Brockie","gender":"Male","birtday":"5/29/1993","email":"gbrockie1s@answers.com","phone":318746299},
   {"firstName":"Blanche","lastName":"Planks","gender":"Female","birtday":"4/15/2004","email":"bplanks1t@mapy.cz","phone":121839863},
   {"firstName":"Belicia","lastName":"Stait","gender":"Female","birtday":"5/31/1999","email":"bstait1u@simplemachines.org","phone":554354564},
   {"firstName":"Woodie","lastName":"McAvaddy","gender":"Male","birtday":"8/27/1993","email":"wmcavaddy1v@friendfeed.com","phone":321092166},
   {"firstName":"Judon","lastName":"Lawrie","gender":"Male","birtday":"11/15/2013","email":"jlawrie1w@multiply.com","phone":343181582},
   {"firstName":"Elroy","lastName":"Gierth","gender":"Male","birtday":"10/15/1997","email":"egierth1x@who.int","phone":444851664},
   {"firstName":"Andra","lastName":"Bromfield","gender":"Female","birtday":"10/19/2017","email":"abromfield1y@businessweek.com","phone":125829964},
   {"firstName":"Brendon","lastName":"Sellstrom","gender":"Male","birtday":"10/8/2001","email":"bsellstrom1z@addthis.com","phone":620946827},
   {"firstName":"Sholom","lastName":"Huckle","gender":"Male","birtday":"10/6/1995","email":"shuckle20@cargocollective.com","phone":189876434},
   {"firstName":"Russ","lastName":"Hallgath","gender":"Male","birtday":"7/23/1992","email":"rhallgath21@people.com.cn","phone":81742608},
   {"firstName":"Gene","lastName":"Ivanikov","gender":"Female","birtday":"4/9/2016","email":"givanikov22@constantcontact.com","phone":184887449},
   {"firstName":"Reg","lastName":"Purbrick","gender":"Male","birtday":"9/23/2003","email":"rpurbrick23@themeforest.net","phone":461909261},
   {"firstName":"Evie","lastName":"Emms","gender":"Female","birtday":"7/24/1992","email":"eemms24@ezinearticles.com","phone":675431743},
   {"firstName":"Carlyn","lastName":"Henzley","gender":"Female","birtday":"10/23/2013","email":"chenzley25@simplemachines.org","phone":437404353},
   {"firstName":"Kayne","lastName":"Ramme","gender":"Male","birtday":"5/11/2003","email":"kramme26@blogs.com","phone":467334881},
   {"firstName":"Stanley","lastName":"Beaford","gender":"Male","birtday":"12/2/1990","email":"sbeaford27@nytimes.com","phone":396188691},
   {"firstName":"Galina","lastName":"Ahern","gender":"Female","birtday":"3/29/2006","email":"gahern28@fastcompany.com","phone":826421049},
   {"firstName":"Roley","lastName":"Postians","gender":"Male","birtday":"4/23/1994","email":"rpostians29@princeton.edu","phone":769733289},
   {"firstName":"Tanitansy","lastName":"Tinklin","gender":"Female","birtday":"3/16/2003","email":"ttinklin2a@va.gov","phone":29857888},
   {"firstName":"Ossie","lastName":"Denisovich","gender":"Male","birtday":"9/26/2017","email":"odenisovich2b@miitbeian.gov.cn","phone":823570284},
   {"firstName":"Randolf","lastName":"Deeble","gender":"Male","birtday":"6/26/2010","email":"rdeeble2c@artisteer.com","phone":246207425},
   {"firstName":"Fanchette","lastName":"Knellen","gender":"Female","birtday":"4/2/1997","email":"fknellen2d@nsw.gov.au","phone":468837069},
   {"firstName":"Nealy","lastName":"Cuesta","gender":"Male","birtday":"10/24/1994","email":"ncuesta2e@sphinn.com","phone":384455923},
   {"firstName":"Lani","lastName":"Sneyd","gender":"Female","birtday":"10/6/2007","email":"lsneyd2f@ted.com","phone":154386303},
   {"firstName":"Katherine","lastName":"Kelby","gender":"Female","birtday":"3/1/1992","email":"kkelby2g@usa.gov","phone":127559441},
   {"firstName":"Claudine","lastName":"Bleakley","gender":"Female","birtday":"8/27/1992","email":"cbleakley2h@wikimedia.org","phone":929615035},
   {"firstName":"Xena","lastName":"Morphet","gender":"Female","birtday":"8/21/2007","email":"xmorphet2i@scientificamerican.com","phone":543298419},
   {"firstName":"Coleman","lastName":"Allain","gender":"Male","birtday":"2/19/2014","email":"callain2j@army.mil","phone":425093721},
   {"firstName":"Matty","lastName":"Guthrie","gender":"Female","birtday":"7/25/1994","email":"mguthrie2k@live.com","phone":430460311},
   {"firstName":"Giorgi","lastName":"Veschambes","gender":"Male","birtday":"5/26/2003","email":"gveschambes2l@yale.edu","phone":132911240},
   {"firstName":"Flore","lastName":"Monroe","gender":"Female","birtday":"9/18/1994","email":"fmonroe2m@photobucket.com","phone":36969895},
   {"firstName":"Tyson","lastName":"Parncutt","gender":"Male","birtday":"10/25/1995","email":"tparncutt2n@va.gov","phone":905625970},
   {"firstName":"D'arcy","lastName":"Klinck","gender":"Male","birtday":"2/21/1995","email":"dklinck2o@fastcompany.com","phone":413748359},
   {"firstName":"Cam","lastName":"Siss","gender":"Male","birtday":"9/3/2000","email":"csiss2p@dailymotion.com","phone":254612216},
   {"firstName":"Augusta","lastName":"Dioniso","gender":"Female","birtday":"1/7/2009","email":"adioniso2q@cbslocal.com","phone":139413477},
   {"firstName":"Tome","lastName":"Medwell","gender":"Male","birtday":"9/29/1998","email":"tmedwell2r@zimbio.com","phone":108902593}], {});
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Person', null, {});
  }
};
