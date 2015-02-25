module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': posts
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({      
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);

  var posts = [
    {
      "domain":"i.imgur.com",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":null,
      "selftext":"",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Humor",
      "id":"2x3qqx",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"bootycat_at",
      "num_comments":20,
      "score":48,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"http://b.thumbs.redditmedia.com/NetGwBuSE2iJknT4n7MT0CN4TBc0BzIuwU6I8Sdpytg.jpg",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"entertainment",
      "author_flair_css_class":"niederoesterreich",
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":false,
      "permalink":"/r/Austria/comments/2x3qqx/unsere_hausordnug_sprache_lernern/",
      "name":"t3_2x3qqx",
      "created":1424894227.0,
      "url":"http://i.imgur.com/okHDHCn.jpg",
      "author_flair_text":"",
      "title":"Unsere Hausordnug: Sprache lernern",
      "created_utc":1424865427.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":48
    },
    {
      "domain":"i.imgur.com",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":null,
      "selftext":"",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":null,
      "id":"2x3uf4",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"BoboMcGlatt",
      "num_comments":3,
      "score":3,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"http://b.thumbs.redditmedia.com/L3Y318h5Co0edDs0IQGT0d8XfGyHdF4OgpGkErG4_tc.jpg",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":null,
      "author_flair_css_class":"wien",
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":false,
      "permalink":"/r/Austria/comments/2x3uf4/ich_sehe_da_schon_gewisse_\u00e4hnlichkeiten/",
      "name":"t3_2x3uf4",
      "created":1424897334.0,
      "url":"https://i.imgur.com/Ssz5U9m.jpg",
      "author_flair_text":"",
      "title":"Ich sehe da schon gewisse \u00c4hnlichkeiten.",
      "created_utc":1424868534.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":3
    },
    {
      "domain":"diepresse.com",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":null,
      "selftext":"",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"DiePresse",
      "id":"2x43tt",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"cwebb1977",
      "num_comments":0,
      "score":2,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"http://a.thumbs.redditmedia.com/SX80Cy17M8UPm0pfLh448o190JTV223vLgvN123E7U4.jpg",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"news",
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":false,
      "permalink":"/r/Austria/comments/2x43tt/finanzgericht_h\u00e4lt_sektsteuer_f\u00fcr/",
      "name":"t3_2x43tt",
      "created":1424903373.0,
      "url":"http://diepresse.com/home/wirtschaft/economist/4671429/Finanzgericht-haelt-Sektsteuer-fur-verfassungswidrig?_vl_backlink=/home/index.do",
      "author_flair_text":null,
      "title":"Finanzgericht h\u00e4lt Sektsteuer f\u00fcr verfassungswidrig",
      "created_utc":1424874573.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":2
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Servus,\nentschuldigt den Jahresunwortkandidaten im Titel, aber anders konnte ich es nicht beschreiben, als eben mit &amp;quot;netzwerkverdrossen&amp;quot;.&lt;/p&gt;\n\n&lt;p&gt;Im Vergleich zu anderen L\u00e4ndern, ist mir aufgefallen, dass die \u00d6sterreicher in bestimmten Bereichen etwas muffelig sind. Schaut mal allein hier auf Reddit. Reddit-Treffen beschr\u00e4nken sich auf Wien, der Gro\u00dfteil der Posts sind entweder Nachrichten-Posts oder Fragen von Reisenden/Touristen...&lt;/p&gt;\n\n&lt;p&gt;Aktivit\u00e4ten/Teffen/Stammtische im au\u00dferst\u00e4dtischen Gebiet? Fehlanzeige. &lt;/p&gt;\n\n&lt;p&gt;Die Bev\u00f6lkerungszahl spielt dabei nicht unbedingt eine Rolle, sondern auch die Mentalit\u00e4t. Schaut mal die Aktivit\u00e4t z.B. im Island-Reddit an, &lt;a href=\"http://www.reddit.com/r/iceland\"&gt;r/iceland&lt;/a&gt;, nur ein Bruchteil der \u00f6sterreichischen Bev\u00f6lkerung und wesentlich aktiver.\nIn den USA haben zum Teil sogar Universit\u00e4ten ihr eigenes Reddit.&lt;/p&gt;\n\n&lt;p&gt;Soviel zu Reddit, das geht eh noch...Aber es f\u00e4llt mir auch in anderen Bereichen auf. Z.B. Mitfahrgelegenheit und Autostoppen.\nAls ich noch autolos war, habe ich so oft vergeblich Fahrten in und um Tirol gesucht - vergeblich. Wenn es dann Fahrten gab (z.B. Kitzb\u00fchel-Salzburg), dann waren das fast immer Fahrer aus Deutschland, obwohl es genug Pendler auf dieser Strecke gibt.&lt;/p&gt;\n\n&lt;p&gt;Inzwischen habe ich ein Auto und stelle wie der letzte Depp jede meiner Fahrten (KB-Sbg, KB-Ibk, KB-MUC...) auf Mitfahrgelegenheit und in \u00e4quivalente Facebook-Gruppen. Gut funktioniert die Strecke Salzburg-Wien, auch Innsbruck-Salzburg. Aber such dir einen anderen Start- oder Zielort als eine gr\u00f6\u00dfere Stadt wie IBK oder SBG und du wirst kaum Mitfahrer finden. \nSoweit ich wei\u00df, hat MFG inzwischen TV-Spots in Deutschland geschalten. MFG hat aber auch lange davor hervorragend funktioniert und war sehr popul\u00e4r.&lt;/p&gt;\n\n&lt;p&gt;Autostoppen im l\u00e4ndlichen Gebiet? No. fucking. way. Solange man nicht offensiv Rastst\u00e4tten oder \u00e4hnliche Nadel\u00f6hre aufsucht, hat man keine Chance. Zumindest nicht bei uns in Tirol.&lt;/p&gt;\n\n&lt;p&gt;Weiter geht es mit allen m\u00f6glichen weiteren Netzwerk-Geschichten, wie Carsharing (was inzwischen popul\u00e4rer wird), Interessensforen (selbst Bergsteigerforen wie gipfeltreff sind von Deutschen -ohne wertung- dominiert) oder auch Single- oder Kennenlernb\u00f6rsen.&lt;/p&gt;\n\n&lt;p&gt;Die Bilanz die ich inzwischen gezogen habe, ist, dass sich die \u00f6sterreichische Internetpr\u00e4senz, von Facebook nat\u00fcrlich abgesehen, weitgehend auf Wien beschr\u00e4nkt. Eventuell noch Graz und minimal auch Salzburg, aber danach gleich Null.&lt;/p&gt;\n\n&lt;p&gt;Ist das allgemein die \u00f6sterreichische Sozialmuffel-Mentalit\u00e4t (&amp;#39;der \u00d6sterreicher geht nicht aus seinem Bekanntenkreis und seiner Komfortzone heraus&amp;#39;) oder kommt mir das alles nur so vor?\nInteressant ist es n\u00e4mlich, wenn man die Sozialdynamik in Lokalen von \u00d6sterreich mit der z.B. von Frankreich vergleicht. Hier liegt die Tendenz stark darin, auch in Discos, stets in Gruppen zusammenzubleiben, so gut wie niemand geht alleine aus, das ist fast schon verp\u00f6nt. In Frankreich habe ich es oft erlebt, dass jeder mit jedem spricht, lacht und sozialisiert. V\u00f6llig ungezwungen wird man von Fremden einfach gefragt wie es einem geht, und mit einem Schulterklopfen begr\u00fc\u00dft. Aber vielleicht war ich jeweils nur zur falschen bzw. richtigen Zeit am falschen bzw. richtigen Ort...&lt;/p&gt;\n\n&lt;p&gt;Und damit beende ich diese lange ur\u00f6sterreichische Suderei und stelle die Diskussion in den Raum :)&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"Servus,\nentschuldigt den Jahresunwortkandidaten im Titel, aber anders konnte ich es nicht beschreiben, als eben mit \"netzwerkverdrossen\".\n\nIm Vergleich zu anderen L\u00e4ndern, ist mir aufgefallen, dass die \u00d6sterreicher in bestimmten Bereichen etwas muffelig sind. Schaut mal allein hier auf Reddit. Reddit-Treffen beschr\u00e4nken sich auf Wien, der Gro\u00dfteil der Posts sind entweder Nachrichten-Posts oder Fragen von Reisenden/Touristen...\n\nAktivit\u00e4ten/Teffen/Stammtische im au\u00dferst\u00e4dtischen Gebiet? Fehlanzeige. \n\nDie Bev\u00f6lkerungszahl spielt dabei nicht unbedingt eine Rolle, sondern auch die Mentalit\u00e4t. Schaut mal die Aktivit\u00e4t z.B. im Island-Reddit an, [r/iceland](http://www.reddit.com/r/iceland), nur ein Bruchteil der \u00f6sterreichischen Bev\u00f6lkerung und wesentlich aktiver.\nIn den USA haben zum Teil sogar Universit\u00e4ten ihr eigenes Reddit.\n\n\nSoviel zu Reddit, das geht eh noch...Aber es f\u00e4llt mir auch in anderen Bereichen auf. Z.B. Mitfahrgelegenheit und Autostoppen.\nAls ich noch autolos war, habe ich so oft vergeblich Fahrten in und um Tirol gesucht - vergeblich. Wenn es dann Fahrten gab (z.B. Kitzb\u00fchel-Salzburg), dann waren das fast immer Fahrer aus Deutschland, obwohl es genug Pendler auf dieser Strecke gibt.\n\nInzwischen habe ich ein Auto und stelle wie der letzte Depp jede meiner Fahrten (KB-Sbg, KB-Ibk, KB-MUC...) auf Mitfahrgelegenheit und in \u00e4quivalente Facebook-Gruppen. Gut funktioniert die Strecke Salzburg-Wien, auch Innsbruck-Salzburg. Aber such dir einen anderen Start- oder Zielort als eine gr\u00f6\u00dfere Stadt wie IBK oder SBG und du wirst kaum Mitfahrer finden. \nSoweit ich wei\u00df, hat MFG inzwischen TV-Spots in Deutschland geschalten. MFG hat aber auch lange davor hervorragend funktioniert und war sehr popul\u00e4r.\n\nAutostoppen im l\u00e4ndlichen Gebiet? No. fucking. way. Solange man nicht offensiv Rastst\u00e4tten oder \u00e4hnliche Nadel\u00f6hre aufsucht, hat man keine Chance. Zumindest nicht bei uns in Tirol.\n\n\nWeiter geht es mit allen m\u00f6glichen weiteren Netzwerk-Geschichten, wie Carsharing (was inzwischen popul\u00e4rer wird), Interessensforen (selbst Bergsteigerforen wie gipfeltreff sind von Deutschen -ohne wertung- dominiert) oder auch Single- oder Kennenlernb\u00f6rsen.\n\n\nDie Bilanz die ich inzwischen gezogen habe, ist, dass sich die \u00f6sterreichische Internetpr\u00e4senz, von Facebook nat\u00fcrlich abgesehen, weitgehend auf Wien beschr\u00e4nkt. Eventuell noch Graz und minimal auch Salzburg, aber danach gleich Null.\n\n\nIst das allgemein die \u00f6sterreichische Sozialmuffel-Mentalit\u00e4t ('der \u00d6sterreicher geht nicht aus seinem Bekanntenkreis und seiner Komfortzone heraus') oder kommt mir das alles nur so vor?\nInteressant ist es n\u00e4mlich, wenn man die Sozialdynamik in Lokalen von \u00d6sterreich mit der z.B. von Frankreich vergleicht. Hier liegt die Tendenz stark darin, auch in Discos, stets in Gruppen zusammenzubleiben, so gut wie niemand geht alleine aus, das ist fast schon verp\u00f6nt. In Frankreich habe ich es oft erlebt, dass jeder mit jedem spricht, lacht und sozialisiert. V\u00f6llig ungezwungen wird man von Fremden einfach gefragt wie es einem geht, und mit einem Schulterklopfen begr\u00fc\u00dft. Aber vielleicht war ich jeweils nur zur falschen bzw. richtigen Zeit am falschen bzw. richtigen Ort...\n\n\nUnd damit beende ich diese lange ur\u00f6sterreichische Suderei und stelle die Diskussion in den Raum :)",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Diskussion",
      "id":"2x0uzw",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"reloriT",
      "num_comments":39,
      "score":27,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":1424807565.0,
      "link_flair_css_class":"discussion",
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2x0uzw/warum_ist_\u00f6sterreich_zum_teil_so/",
      "name":"t3_2x0uzw",
      "created":1424836006.0,
      "url":"http://www.reddit.com/r/Austria/comments/2x0uzw/warum_ist_\u00f6sterreich_zum_teil_so/",
      "author_flair_text":null,
      "title":"Warum ist \u00d6sterreich zum Teil so \"netzwerkverdrossen\"? (Reddit, Mitfahrgelegenheit...usw.)",
      "created_utc":1424807206.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":27
    },
    {
      "domain":"destinationnotyetfound.weebly.com",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":null,
      "selftext":"",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":null,
      "id":"2x20uf",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"MrMcMuffins4",
      "num_comments":0,
      "score":6,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"http://b.thumbs.redditmedia.com/zdEoPUqSCllcQVqFDSqA2Q1NSHpV90I7tFvARPxvGeE.jpg",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":null,
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":false,
      "permalink":"/r/Austria/comments/2x20uf/meine_reisen_in_\u00f6sterreich_my_travels_in_austria/",
      "name":"t3_2x20uf",
      "created":1424853697.0,
      "url":"http://destinationnotyetfound.weebly.com/",
      "author_flair_text":null,
      "title":"Meine reisen in \u00d6sterreich (My travels in Austria)",
      "created_utc":1424824897.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":6
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;My fiance and I are planning on spending a few days in Austria on our honeymoon. We are Americans and want to see the natural beauty of Austria while also experiencing the culture. I am currently looking at Salzburg because I&amp;#39;ve heard great things. I would also like to see Hohe Tauern Park but wouldn&amp;#39;t know what city to stay in. What other cities should we consider? We want to be able to bike, hike and explore the Alps during our stay. Thanks a lot!&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"My fiance and I are planning on spending a few days in Austria on our honeymoon. We are Americans and want to see the natural beauty of Austria while also experiencing the culture. I am currently looking at Salzburg because I've heard great things. I would also like to see Hohe Tauern Park but wouldn't know what city to stay in. What other cities should we consider? We want to be able to bike, hike and explore the Alps during our stay. Thanks a lot!",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Tourismus",
      "id":"2x07br",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"hoodjigga",
      "num_comments":37,
      "score":21,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"tourism",
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2x07br/wheres_the_best_place_for_an_american_couple_to/",
      "name":"t3_2x07br",
      "created":1424825744.0,
      "url":"http://www.reddit.com/r/Austria/comments/2x07br/wheres_the_best_place_for_an_american_couple_to/",
      "author_flair_text":null,
      "title":"Where's the best place for an American couple to honeymoon in Austria?",
      "created_utc":1424796944.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":21
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Hi!&lt;/p&gt;\n\n&lt;p&gt;Helfe grad wen, der f\u00fcr seine Pr\u00fcfung lernt und bin grad wegen Pflichthaftgesetz ein bisserl geschmissen (liegt vielleicht ein bisserl and Unterlagen die von anderen StudentInnen geschrieben worden sind).&lt;/p&gt;\n\n&lt;p&gt;PHG: &lt;/p&gt;\n\n&lt;blockquote&gt;\n&lt;p&gt;Der Schaden durch die Besch\u00e4digung einer Sache ist nur zu ersetzen,&lt;/p&gt;\n\n&lt;ol&gt;\n&lt;li&gt;&lt;p&gt;blabla bla, und&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;\u00fcberdies nur mit dem 500 Euro \u00fcbersteigenden Teil. &lt;/p&gt;&lt;/li&gt;\n&lt;/ol&gt;\n&lt;/blockquote&gt;\n\n&lt;p&gt;Au\u00dferdem:&lt;/p&gt;\n\n&lt;blockquote&gt;\n&lt;p&gt;[...] das PHG kennt einen Selbstbehalt des Gesch\u00e4digten f\u00fcr Sachsch\u00e4den bis zu einer Schadensh\u00f6he von \u20ac500.&lt;/p&gt;\n&lt;/blockquote&gt;\n\n&lt;p&gt;Konkret geht es hier um diese \u20ac500. Wos soi des denn? Angenommen, Anton Arschberg AG importiert Lampen. Bertha Busengsicht kauft vom Kaufhaus Casper Cocksucker eine solche Lampe.&lt;/p&gt;\n\n&lt;p&gt;Leide fackelt Bertha Busengsicht aber wegen eines elektronischen Mangels die Lampe ab, samt ihrer \u20ac900-teuren Plastikpenissammlung. Die Dame ist dem Casper Cocksucker ziemlich b\u00f6se, aber er ist Zahlungsunf\u00e4hig und au\u00dferdem haftet normalerweise der Import\u00f6r, Anton Arschberg AG.&lt;/p&gt;\n\n&lt;p&gt;So, in unseren Unterlagen steht dass Anton Arschberg AG der Bertha Busengsicht \u20ac900 schuldet (kein Kaufvertrag mit Bertha Busengsicht, keine Gew\u00e4hrliestung).&lt;/p&gt;\n\n&lt;p&gt;Warum? Hat sie denn nicht \u20ac500 Selbstbehalt? Schuldent dann Anton Arschberg AG nicht nur \u20ac400?&lt;/p&gt;\n\n&lt;p&gt;Was w\u00e4re wenn die Penissammlung nur \u20ac300 wert w\u00e4re? Bekommt dann Bertha Busengsicht gar nichts? Ist doch nicht ihre Schuld, dass die Lampe so gschissen war?! Doch voll ungerecht oder habe ich etwas \u00fcbersehen?&lt;/p&gt;\n\n&lt;p&gt;Wenn da wer Einblick hat w\u00e4re das super, bin grad ziemlich verwirrt.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"Hi!\n\nHelfe grad wen, der f\u00fcr seine Pr\u00fcfung lernt und bin grad wegen Pflichthaftgesetz ein bisserl geschmissen (liegt vielleicht ein bisserl and Unterlagen die von anderen StudentInnen geschrieben worden sind).\n\nPHG: \n\n&gt;\tDer Schaden durch die Besch\u00e4digung einer Sache ist nur zu ersetzen,\n\n   &gt; 1. blabla bla, und\n\n   &gt; 2. \u00fcberdies nur mit dem 500 Euro \u00fcbersteigenden Teil. \n\nAu\u00dferdem:\n\n&gt;[...] das PHG kennt einen Selbstbehalt des Gesch\u00e4digten f\u00fcr Sachsch\u00e4den bis zu einer Schadensh\u00f6he von \u20ac500.\n\nKonkret geht es hier um diese \u20ac500. Wos soi des denn? Angenommen, Anton Arschberg AG importiert Lampen. Bertha Busengsicht kauft vom Kaufhaus Casper Cocksucker eine solche Lampe.\n\nLeide fackelt Bertha Busengsicht aber wegen eines elektronischen Mangels die Lampe ab, samt ihrer \u20ac900-teuren Plastikpenissammlung. Die Dame ist dem Casper Cocksucker ziemlich b\u00f6se, aber er ist Zahlungsunf\u00e4hig und au\u00dferdem haftet normalerweise der Import\u00f6r, Anton Arschberg AG.\n\nSo, in unseren Unterlagen steht dass Anton Arschberg AG der Bertha Busengsicht \u20ac900 schuldet (kein Kaufvertrag mit Bertha Busengsicht, keine Gew\u00e4hrliestung).\n\nWarum? Hat sie denn nicht \u20ac500 Selbstbehalt? Schuldent dann Anton Arschberg AG nicht nur \u20ac400?\n\nWas w\u00e4re wenn die Penissammlung nur \u20ac300 wert w\u00e4re? Bekommt dann Bertha Busengsicht gar nichts? Ist doch nicht ihre Schuld, dass die Lampe so gschissen war?! Doch voll ungerecht oder habe ich etwas \u00fcbersehen?\n\nWenn da wer Einblick hat w\u00e4re das super, bin grad ziemlich verwirrt.\n",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Diskussion",
      "id":"2x1a1c",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"walaska",
      "num_comments":3,
      "score":6,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":1424813778.0,
      "link_flair_css_class":"discussion",
      "author_flair_css_class":"wien",
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2x1a1c/rechtsfrage_2_z_2_produkthaftgesetz_und/",
      "name":"t3_2x1a1c",
      "created":1424842380.0,
      "url":"http://www.reddit.com/r/Austria/comments/2x1a1c/rechtsfrage_2_z_2_produkthaftgesetz_und/",
      "author_flair_text":"Wien",
      "title":"Rechtsfrage: \u00a72 z 2 Produkthaftgesetz und Penissammlungen",
      "created_utc":1424813580.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":6
    },
    {
      "domain":"diepresse.com",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":null,
      "selftext":"",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"DiePresse",
      "id":"2wzvtw",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"me_tis",
      "num_comments":2,
      "score":12,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"http://b.thumbs.redditmedia.com/cUkvbzhEEfKgvOV9zbrIaBoa2p-mMwyzrmjmLgOtNow.jpg",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"news",
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":false,
      "permalink":"/r/Austria/comments/2wzvtw/ich_wusste_gar_nicht_das_es_in_\u00f6sterreich_sowas/",
      "name":"t3_2wzvtw",
      "created":1424820425.0,
      "url":"http://diepresse.com/home/panorama/wien/4670734/Autokino-Wien_Konkursverfahren-eroffnet-?parentid=0&amp;act=2&amp;isanonym=null#kommentar0",
      "author_flair_text":null,
      "title":"ich wusste gar nicht das es in \u00f6sterreich sowas gab.. schade :(",
      "created_utc":1424791625.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":12
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Wir leben seit September &amp;quot;autofrei&amp;quot; in Wien weil ich wollte nicht mehr \u20ac80/Monat f\u00fcr Versicherung (\u20ac40 aus der Bonusstufe, \u20ac40 kommt aus dem Auto - alter Mondeo) + andere Kosten zahlen wenn ich 1-2 mal pro Monat das Auto benutze. Sagen wir mal so, &lt;strong&gt;30 Tage pro Jahr.&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;Autofrei leben geht, geht aber nicht gut. Schwere Sache zu kaufen ist immer schwierig. Urlaubs sind schwierig, der RailJet f\u00e4hrt in der H\u00fctten gar nicht :) Und wir haben ein Kind und wer Kind hat, soll er nicht auch ein Auto haben?&lt;/p&gt;\n\n&lt;p&gt;Was mache ich denn? Car2Go is keine L\u00f6sung f\u00fcr gr\u00f6ssere Eink\u00e4ufe oder Urlaub in Italien oder wer auch immer. Mieten f\u00fcr 30 Tage w\u00e4re zumindest \u20ac1500 pro Jahr.&lt;/p&gt;\n\n&lt;p&gt;Wie kann ich die Versicherung optimieren? Alt? Neu? Hybrid? F\u00fcr den Winter stillegen und abmelden, wenn ja, dann wo, Garage habe ich nicht und auf der Strasse darf ich nicht, gibt&amp;#39;s in Wien Gratis-Winterparkpl\u00e4tze darauf ohne Kennzeichen stehen darf?&lt;/p&gt;\n\n&lt;p&gt;Pickerl war mir mit dem alten Mondeo \u20ac200 pro Jahr, Sie haben immer was gefunden. &lt;/p&gt;\n\n&lt;p&gt;Ich w\u00e4re so gerne eine Wochenende-Fahrer (jeder 2.-3. Wochenende-Fahrer), 20 Jahre alt Mercedes billig kaufen, sorf\u00e4ltig waschen, 1-2 mal pro Monat die Familie reinsetzen und Ausflug machen, das w\u00fcrde mir gefallen, als eine Hobbie. Aber nur wenn es unter \u20ac1000 pro Jahr ginge...&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"Wir leben seit September \"autofrei\" in Wien weil ich wollte nicht mehr \u20ac80/Monat f\u00fcr Versicherung (\u20ac40 aus der Bonusstufe, \u20ac40 kommt aus dem Auto - alter Mondeo) + andere Kosten zahlen wenn ich 1-2 mal pro Monat das Auto benutze. Sagen wir mal so, **30 Tage pro Jahr.**\n\nAutofrei leben geht, geht aber nicht gut. Schwere Sache zu kaufen ist immer schwierig. Urlaubs sind schwierig, der RailJet f\u00e4hrt in der H\u00fctten gar nicht :) Und wir haben ein Kind und wer Kind hat, soll er nicht auch ein Auto haben?\n\nWas mache ich denn? Car2Go is keine L\u00f6sung f\u00fcr gr\u00f6ssere Eink\u00e4ufe oder Urlaub in Italien oder wer auch immer. Mieten f\u00fcr 30 Tage w\u00e4re zumindest \u20ac1500 pro Jahr.\n\nWie kann ich die Versicherung optimieren? Alt? Neu? Hybrid? F\u00fcr den Winter stillegen und abmelden, wenn ja, dann wo, Garage habe ich nicht und auf der Strasse darf ich nicht, gibt's in Wien Gratis-Winterparkpl\u00e4tze darauf ohne Kennzeichen stehen darf?\n\nPickerl war mir mit dem alten Mondeo \u20ac200 pro Jahr, Sie haben immer was gefunden. \n\nIch w\u00e4re so gerne eine Wochenende-Fahrer (jeder 2.-3. Wochenende-Fahrer), 20 Jahre alt Mercedes billig kaufen, sorf\u00e4ltig waschen, 1-2 mal pro Monat die Familie reinsetzen und Ausflug machen, das w\u00fcrde mir gefallen, als eine Hobbie. Aber nur wenn es unter \u20ac1000 pro Jahr ginge...",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":null,
      "id":"2wzltt",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"WCaesar",
      "num_comments":13,
      "score":11,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":null,
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2wzltt/wie_besitzt_man_ein_nur_gelegentlich_benutzes/",
      "name":"t3_2wzltt",
      "created":1424815014.0,
      "url":"http://www.reddit.com/r/Austria/comments/2wzltt/wie_besitzt_man_ein_nur_gelegentlich_benutzes/",
      "author_flair_text":null,
      "title":"Wie besitzt man ein nur gelegentlich benutzes Auto in \u00d6. kosteng\u00fcnstig?",
      "created_utc":1424786214.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":11
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;I am starting to work in Austria soon and I need to open a bank account. What would you recommend in terms of affordability and service?&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"I am starting to work in Austria soon and I need to open a bank account. What would you recommend in terms of affordability and service?\n\n",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"English",
      "id":"2wznxv",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"cheesetotal",
      "num_comments":34,
      "score":5,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"discussion",
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2wznxv/bank_account_in_austria/",
      "name":"t3_2wznxv",
      "created":1424816261.0,
      "url":"http://www.reddit.com/r/Austria/comments/2wznxv/bank_account_in_austria/",
      "author_flair_text":null,
      "title":"Bank Account in Austria",
      "created_utc":1424787461.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":5
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;War heute bei der Stellung und bin untauglich weil ich als ich 10 war 2 Jahre in psychologischer Behandlung wegen einer Angst vom alleine sein und keinen Kontakt zu leuten haben untauglich geschrieben. Diese Phobie ist bei mir nicht mehr vorhanden. &lt;/p&gt;\n\n&lt;p&gt;Ich hab der Heerespsychologin auch gesagt dass ich eigentlich gerne untauglich sein m\u00f6chte und ich denke sie hat mich einfach sympathisch gefunden und hat mich untauglich geschrieben weil sowas oages ist das ja nicht vor allem wenn die Angst nicht mehr da ist.&lt;/p&gt;\n\n&lt;p&gt;Und meine Frage ist, ob das in irgendeiner Akte vermerkt wird, wo die Arbeitgeber sehen k\u00f6nnen, dass ich untauglich aus psychologischen Gr\u00fcnden bin? Und ob die mich ablehnen k\u00f6nnen aufgrunddessen und ob da dann nur steht &amp;quot;psychologisch Untauglich&amp;quot; oder der genaue Grund. Danke f\u00fcr jede Antwort!&lt;/p&gt;\n\n&lt;p&gt;Achja und p.s.: Ich will Journalist werden und etwas im \u00f6ffentlichen Bereich machen falls das manche Jobs machen und andere Jobs nicht.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"War heute bei der Stellung und bin untauglich weil ich als ich 10 war 2 Jahre in psychologischer Behandlung wegen einer Angst vom alleine sein und keinen Kontakt zu leuten haben untauglich geschrieben. Diese Phobie ist bei mir nicht mehr vorhanden. \n\nIch hab der Heerespsychologin auch gesagt dass ich eigentlich gerne untauglich sein m\u00f6chte und ich denke sie hat mich einfach sympathisch gefunden und hat mich untauglich geschrieben weil sowas oages ist das ja nicht vor allem wenn die Angst nicht mehr da ist.\n\nUnd meine Frage ist, ob das in irgendeiner Akte vermerkt wird, wo die Arbeitgeber sehen k\u00f6nnen, dass ich untauglich aus psychologischen Gr\u00fcnden bin? Und ob die mich ablehnen k\u00f6nnen aufgrunddessen und ob da dann nur steht \"psychologisch Untauglich\" oder der genaue Grund. Danke f\u00fcr jede Antwort!\n\nAchja und p.s.: Ich will Journalist werden und etwas im \u00f6ffentlichen Bereich machen falls das manche Jobs machen und andere Jobs nicht.",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":null,
      "id":"2wzcjo",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"fuckshitstackerinos",
      "num_comments":14,
      "score":8,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":null,
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2wzcjo/beeintr\u00e4chtigt_meine_psychologische/",
      "name":"t3_2wzcjo",
      "created":1424808301.0,
      "url":"http://www.reddit.com/r/Austria/comments/2wzcjo/beeintr\u00e4chtigt_meine_psychologische/",
      "author_flair_text":null,
      "title":"Beeintr\u00e4chtigt meine psychologische Untauglichkeit bei der Stellung mein sp\u00e4teres Berufsleben?",
      "created_utc":1424779501.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":8
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;hi,&lt;/p&gt;\n\n&lt;p&gt;Ich war in prag und hab da ein paar neue leute kennen gelernt. leider war ich ziemlich fett und stoned, allerdings haben die erz\u00e4hlt, dass die irgendwann zu einem gro\u00dfen music preview oder so nach wien fahren. war ein datum zwischen 19.3 - 25.3.15. f\u00e4llt euch da was ein?&lt;/p&gt;\n\n&lt;p&gt;w\u00fcrd mich freuen&lt;/p&gt;\n\n&lt;p&gt;greets&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"hi,\n\nIch war in prag und hab da ein paar neue leute kennen gelernt. leider war ich ziemlich fett und stoned, allerdings haben die erz\u00e4hlt, dass die irgendwann zu einem gro\u00dfen music preview oder so nach wien fahren. war ein datum zwischen 19.3 - 25.3.15. f\u00e4llt euch da was ein?\n\nw\u00fcrd mich freuen\n\ngreets\n\n",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"English",
      "id":"2wz2lc",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"filipopasto",
      "num_comments":5,
      "score":5,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"tourism",
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2wz2lc/partys_in_wien_193253/",
      "name":"t3_2wz2lc",
      "created":1424798780.0,
      "url":"http://www.reddit.com/r/Austria/comments/2wz2lc/partys_in_wien_193253/",
      "author_flair_text":null,
      "title":"partys in wien 19.3-25.3?",
      "created_utc":1424769980.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":5
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;hallo, kennt sich wer bei der mindestsicherung aus? ich verdiene (unter freien dienstvertrag) ~400 bis 500 euro im monat, und momentan wird es knapp dass ich die miete zahlen kann. essen tu ich schon seit mehreren monaten um 10 euro die woche -.- &lt;/p&gt;\n\n&lt;p&gt;hab mich auch schon nach arbeit umgesehen, aber da ich keinen eigenen pkw habe, und auch keinen f\u00fchrerschein, fallen viele m\u00f6gliche stellen flach, und ich weiss zZ nicht so recht was ich machen kann.\nvorallem da ich vorhabe im herbst eine schule f\u00fcr sozialp\u00e4dagogik zu besuchen, lehnen viele arbeitsgeber ab, weil sie halt niemanden f\u00fcr so kurze zeit einstellen wollen.&lt;/p&gt;\n\n&lt;p&gt;hab ich anspruch? hat jeder anspruch? f\u00fcr infos w\u00e4r ich dankbar\nlg&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"hallo, kennt sich wer bei der mindestsicherung aus? ich verdiene (unter freien dienstvertrag) ~400 bis 500 euro im monat, und momentan wird es knapp dass ich die miete zahlen kann. essen tu ich schon seit mehreren monaten um 10 euro die woche -.- \n\nhab mich auch schon nach arbeit umgesehen, aber da ich keinen eigenen pkw habe, und auch keinen f\u00fchrerschein, fallen viele m\u00f6gliche stellen flach, und ich weiss zZ nicht so recht was ich machen kann.\nvorallem da ich vorhabe im herbst eine schule f\u00fcr sozialp\u00e4dagogik zu besuchen, lehnen viele arbeitsgeber ab, weil sie halt niemanden f\u00fcr so kurze zeit einstellen wollen.\n\nhab ich anspruch? hat jeder anspruch? f\u00fcr infos w\u00e4r ich dankbar\nlg",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Diskussion",
      "id":"2wxgfp",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"hans_peter",
      "num_comments":7,
      "score":13,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"discussion",
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2wxgfp/mindestsicherung/",
      "name":"t3_2wxgfp",
      "created":1424763959.0,
      "url":"http://www.reddit.com/r/Austria/comments/2wxgfp/mindestsicherung/",
      "author_flair_text":null,
      "title":"mindestsicherung",
      "created_utc":1424735159.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":13
    },
    {
      "domain":"dietagespresse.com",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":null,
      "selftext":"",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Humor",
      "id":"2wz3ph",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"DonManuel",
      "num_comments":0,
      "score":1,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"http://b.thumbs.redditmedia.com/ES50IPYZriasBQuHWn0lWzGYSaOsqECSS-HBA_PbhEc.jpg",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"entertainment",
      "author_flair_css_class":"burgenland",
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":false,
      "permalink":"/r/Austria/comments/2wz3ph/fu\u00dfballwm_in_nieder\u00f6sterreich_fifa_bewirbt_sich/",
      "name":"t3_2wz3ph",
      "created":1424799812.0,
      "url":"http://dietagespresse.com/fussball-wm-in-niederoesterreich-fifa-bewirbt-sich-bei-erwin-proell/",
      "author_flair_text":"Burgenland",
      "title":"Fu\u00dfball-WM in Nieder\u00f6sterreich? FIFA bewirbt sich bei Erwin Pr\u00f6ll",
      "created_utc":1424771012.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":1
    },
    {
      "domain":"imgur.com",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":null,
      "selftext":"",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Bilder",
      "id":"2wv6qv",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"the_alp",
      "num_comments":6,
      "score":28,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"http://b.thumbs.redditmedia.com/IAVM_wCCeDkzfEafXnsiCGwV3AQXsFH4M-hFu6rteKg.jpg",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"entertainment",
      "author_flair_css_class":"oberoesterreich",
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":false,
      "permalink":"/r/Austria/comments/2wv6qv/view_from_the_zw\u00f6lferhorn_this_afternoon/",
      "name":"t3_2wv6qv",
      "created":1424724333.0,
      "url":"http://imgur.com/Bpa3sNT",
      "author_flair_text":"Ober\u00f6sterreich",
      "title":"View from the Zw\u00f6lferhorn this afternoon",
      "created_utc":1424695533.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":28
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;[was instructed at &lt;a href=\"/r/wien\"&gt;/r/wien&lt;/a&gt; to post this here]&lt;/p&gt;\n\n&lt;p&gt;Hi,&lt;/p&gt;\n\n&lt;p&gt;Does anyone have experience in camping while doing bicycle tours in Austria? I hear that camps are quite good. Do you perhaps know what are the usual prices for bike &amp;amp; tent?&lt;/p&gt;\n\n&lt;p&gt;Thanks&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"[was instructed at /r/wien to post this here]\n\nHi,\n\nDoes anyone have experience in camping while doing bicycle tours in Austria? I hear that camps are quite good. Do you perhaps know what are the usual prices for bike &amp; tent?\n\nThanks\n",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":null,
      "id":"2wvbn4",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"wienwein",
      "num_comments":0,
      "score":8,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":null,
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2wvbn4/cycling_camping_xpost_from_rwien/",
      "name":"t3_2wvbn4",
      "created":1424728048.0,
      "url":"http://www.reddit.com/r/Austria/comments/2wvbn4/cycling_camping_xpost_from_rwien/",
      "author_flair_text":null,
      "title":"Cycling &amp; Camping [xpost from /r/wien]",
      "created_utc":1424699248.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":8
    },
    {
      "domain":"kleinezeitung.at",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":null,
      "selftext":"",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Nachrichten",
      "id":"2wunvd",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"Obraka",
      "num_comments":1,
      "score":25,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"http://b.thumbs.redditmedia.com/2mXJTRUgyRRVCRREzX7031xzQDaTjtsQWFtGaF699Iw.jpg",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"news",
      "author_flair_css_class":"steiermark",
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":false,
      "permalink":"/r/Austria/comments/2wunvd/br\u00fcckeneinsturz_in_frohnleiten_bahnverkehr_steht/",
      "name":"t3_2wunvd",
      "created":1424706024.0,
      "url":"http://www.kleinezeitung.at/s/steiermark/chronik/4668945/Nach-Bruckeneinsturz_Bahnverkehr-steht-fur-mindestens-zwei-Wochen?direct=4669063&amp;_vl_backlink=/s/steiermark/4669063/index.do&amp;selChannel=",
      "author_flair_text":"Den Hoog",
      "title":"Br\u00fcckeneinsturz in Frohnleiten - Bahnverkehr steht f\u00fcr mindestens zwei Wochen",
      "created_utc":1424677224.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":25
    },
    {
      "domain":"dietagespresse.com",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":null,
      "selftext":"",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Humor",
      "id":"2wqyvn",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"JW0lF",
      "num_comments":1,
      "score":69,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"http://a.thumbs.redditmedia.com/zjL8F1AmXGi-ZJVjXBJGIevTLZF80LeRpcbZ6oKB9a0.jpg",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"entertainment",
      "author_flair_css_class":"steiermark",
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":false,
      "permalink":"/r/Austria/comments/2wqyvn/\u00f6sterreichs_politiker_haben_sich_als_werbestars/",
      "name":"t3_2wqyvn",
      "created":1424627593.0,
      "url":"http://dietagespresse.com/galerie-oesterreichs-politiker-als-werbestars/",
      "author_flair_text":"Steiermark",
      "title":"\u00d6sterreichs Politiker haben sich als Werbestars verkauft",
      "created_utc":1424598793.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":69
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Wie schon im Titel gesagt, suchen wir noch ein paar Leute die ab und zu mit uns Tabletop Simulator spielen wollen. Wir haben bis jetzt Munchkin gespielt und das war doch schon sehr spa\u00dfig.\nHier ist das Spiel: &lt;a href=\"http://store.steampowered.com/app/286160/\"&gt;http://store.steampowered.com/app/286160/&lt;/a&gt;&lt;/p&gt;\n\n&lt;p&gt;und hier ist ein Link zu der Diskussion in der RedditAT Gruppe.\n&lt;a href=\"http://steamcommunity.com/groups/redditAT/discussions/0/617328415068866913/\"&gt;http://steamcommunity.com/groups/redditAT/discussions/0/617328415068866913/&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"Wie schon im Titel gesagt, suchen wir noch ein paar Leute die ab und zu mit uns Tabletop Simulator spielen wollen. Wir haben bis jetzt Munchkin gespielt und das war doch schon sehr spa\u00dfig.\nHier ist das Spiel: http://store.steampowered.com/app/286160/\n\nund hier ist ein Link zu der Diskussion in der RedditAT Gruppe.\nhttp://steamcommunity.com/groups/redditAT/discussions/0/617328415068866913/",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Ank\u00fcndigung",
      "id":"2wrxe9",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"Lordy1",
      "num_comments":8,
      "score":6,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"discussion",
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2wrxe9/suchen_noch_leute_zum_tabletop_simulator_spielen/",
      "name":"t3_2wrxe9",
      "created":1424654853.0,
      "url":"http://www.reddit.com/r/Austria/comments/2wrxe9/suchen_noch_leute_zum_tabletop_simulator_spielen/",
      "author_flair_text":null,
      "title":"Suchen noch Leute zum Tabletop Simulator spielen.",
      "created_utc":1424626053.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":6
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Ich bin grad auf der Suche nach irgendwelche \u00f6sterreichische Blogs die interessant sind, leider sind all die die ich bis jetzt gefunden haben viel zu seltsam updatiert oder sie sind viel zu voll mit Werbung. Kennt jemand irgendwelche interessant \u00f6sterreichische blogs?&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"Ich bin grad auf der Suche nach irgendwelche \u00f6sterreichische Blogs die interessant sind, leider sind all die die ich bis jetzt gefunden haben viel zu seltsam updatiert oder sie sind viel zu voll mit Werbung. Kennt jemand irgendwelche interessant \u00f6sterreichische blogs?",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Diskussion",
      "id":"2wsj1n",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"cristigolo",
      "num_comments":5,
      "score":3,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"discussion",
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2wsj1n/\u00f6sterreichische_blogs/",
      "name":"t3_2wsj1n",
      "created":1424665099.0,
      "url":"http://www.reddit.com/r/Austria/comments/2wsj1n/\u00f6sterreichische_blogs/",
      "author_flair_text":null,
      "title":"\u00d6sterreichische Blogs",
      "created_utc":1424636299.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":3
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Wie ist das Angebot von Netflix in 4K Qualit\u00e4t? Hat es wer von euch und ist zufrieden? Ich  \u00fcberlege mir einen 4K Fernseher zu kaufen und w\u00fcrde dann gerne auch entsprechendes Material zum Betrachten ben\u00f6tigen.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"Wie ist das Angebot von Netflix in 4K Qualit\u00e4t? Hat es wer von euch und ist zufrieden? Ich  \u00fcberlege mir einen 4K Fernseher zu kaufen und w\u00fcrde dann gerne auch entsprechendes Material zum Betrachten ben\u00f6tigen.",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Diskussion",
      "id":"2wrd2u",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"dave-the-brave",
      "num_comments":2,
      "score":5,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"discussion",
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2wrd2u/netflixangebot_in_4k/",
      "name":"t3_2wrd2u",
      "created":1424642593.0,
      "url":"http://www.reddit.com/r/Austria/comments/2wrd2u/netflixangebot_in_4k/",
      "author_flair_text":null,
      "title":"Netflixangebot in 4K",
      "created_utc":1424613793.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":5
    },
    {
      "domain":"zeit.de",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":null,
      "selftext":"",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"Nachrichten",
      "id":"2woh93",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"viermalvier",
      "num_comments":17,
      "score":16,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"http://b.thumbs.redditmedia.com/eT0eNvkYXYdN1N748XjMUj7rF5U4jh_p8wQFjP3bEcA.jpg",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"news",
      "author_flair_css_class":"niederoesterreich",
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":false,
      "permalink":"/r/Austria/comments/2woh93/waffenbesitz_f\u00fcr_jedermann/",
      "name":"t3_2woh93",
      "created":1424573891.0,
      "url":"http://www.zeit.de/2015/07/verein-waffenrecht-oesterreich",
      "author_flair_text":"Nieder\u00f6sterreich",
      "title":"Waffenbesitz f\u00fcr Jedermann?",
      "created_utc":1424545091.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":16
    },
    {
      "domain":"derstandard.at",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":null,
      "selftext":"",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":"DerStandard",
      "id":"2wpf1g",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"viermalvier",
      "num_comments":5,
      "score":2,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"http://b.thumbs.redditmedia.com/GQlXnDuFeZtwC-NqQg4jrVFfCeIks7NS6vrrJ7IGftc.jpg",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":"news",
      "author_flair_css_class":"niederoesterreich",
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":false,
      "permalink":"/r/Austria/comments/2wpf1g/\u00f6bb_lassen_br\u00fccke_auf_s\u00fcdbahn_st\u00fcrzen/",
      "name":"t3_2wpf1g",
      "created":1424590057.0,
      "url":"http://derstandard.at/2000011999297/Bruecke-in-Graz-Umgebung-eingestuerzt-S35-und-Bahnstrecke-gesperrt",
      "author_flair_text":"Nieder\u00f6sterreich",
      "title":"\u00d6BB lassen Br\u00fccke auf S\u00fcdbahn st\u00fcrzen!",
      "created_utc":1424561257.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":2
    },
    {
      "domain":"self.Austria",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Hi, &lt;/p&gt;\n\n&lt;p&gt;I&amp;#39;m interested in applying for a MSc  programme in the Upper Austria University. &lt;/p&gt;\n\n&lt;p&gt;Anyone enrolled there? How is the education quality in general? &lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "selftext":"Hi, \n\nI'm interested in applying for a MSc  programme in the Upper Austria University. \n\nAnyone enrolled there? How is the education quality in general? ",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":null,
      "id":"2wo82y",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"MightyMustard",
      "num_comments":20,
      "score":6,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"self",
      "subreddit_id":"t5_2qo9i",
      "edited":1424550193.0,
      "link_flair_css_class":null,
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":true,
      "permalink":"/r/Austria/comments/2wo82y/anyone_in_applied_science_university_of_upper/",
      "name":"t3_2wo82y",
      "created":1424569318.0,
      "url":"http://www.reddit.com/r/Austria/comments/2wo82y/anyone_in_applied_science_university_of_upper/",
      "author_flair_text":null,
      "title":"Anyone in Applied Science University of Upper Austria?",
      "created_utc":1424540518.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":6
    },
    {
      "domain":"imgur.com",
      "banned_by":null,
      "media_embed":{

      },
      "subreddit":"Austria",
      "selftext_html":null,
      "selftext":"",
      "likes":null,
      "user_reports":[

      ],
      "secure_media":null,
      "link_flair_text":null,
      "id":"2wma0s",
      "gilded":0,
      "archived":false,
      "clicked":false,
      "report_reasons":null,
      "author":"wetskinnybikedreams",
      "num_comments":4,
      "score":102,
      "approved_by":null,
      "over_18":false,
      "hidden":false,
      "thumbnail":"http://b.thumbs.redditmedia.com/xackNjEcsLtO5nzWcgfrxRK6riHLkh3x_EZBmFYTlzw.jpg",
      "subreddit_id":"t5_2qo9i",
      "edited":false,
      "link_flair_css_class":null,
      "author_flair_css_class":null,
      "downs":0,
      "secure_media_embed":{

      },
      "saved":false,
      "stickied":false,
      "is_self":false,
      "permalink":"/r/Austria/comments/2wma0s/ntv_gibt_tagespresse_als_quelle_an_glaubt/",
      "name":"t3_2wma0s",
      "created":1424515748.0,
      "url":"http://imgur.com/DX0pGYI",
      "author_flair_text":null,
      "title":"n-tv gibt tagespresse als quelle an /glaubt taagespresse hoax",
      "created_utc":1424486948.0,
      "distinguished":null,
      "media":null,
      "mod_reports":[

      ],
      "visited":false,
      "num_reports":null,
      "ups":102
    }
  ];
};
