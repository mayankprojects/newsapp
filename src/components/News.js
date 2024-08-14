import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "the-hill",
        "name": "The Hill"
      },
      "author": "Ian Swanson",
      "title": "Jack Smith faces a crossroads in Trump prosecution",
      "description": "Special counsel Jack Smith finds himself at more than one prosecutorial crossroads as he weighs how to move forward on former President Trump’s Jan. 6 case in the wake of the Supreme Court’s immunity decision. Smith last week asked to extend deadlines in the …",
      "url": "https://thehill.com/regulation/court-battles/4824801-jack-smith-trump-jan-6-case/",
      "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/08/Smith_081324_Photo_AP.png?w=1280",
      "publishedAt": "2024-08-13T10:00:00Z",
      "content": "Skip to content\r\nSpecial counsel Jack Smith finds himself at more than one prosecutorial crossroads as he weighs how to move forward on former President Trump’s Jan. 6 case in the wake of the Supreme… [+7373 chars]"
    },
    {
      "source": {
        "id": "the-hill",
        "name": "The Hill"
      },
      "author": "Alexander Bolton",
      "title": "Republicans split on tackling deficit, including Medicare, Social Security reforms",
      "description": "Republicans are divided over how aggressively to tackle the deficit, including reforms to Medicare and Social Security, if they regain control of Washington next year, when the federal debt is projected to hit $36 trillion. Former President Trump is calling f…",
      "url": "https://thehill.com/homenews/senate/4824725-republicans-divided-debt-cuts/",
      "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/08/GOP-agenda_081324_Photos_APJasonGoode.png?w=1280",
      "publishedAt": "2024-08-13T10:00:00Z",
      "content": "Republicans are divided over how aggressively to tackle the deficit, including reforms to Medicare and Social Security, if they regain control of Washington next year, when the federal debt is projec… [+6805 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Michelle Hackman",
      "title": "Tim Walz’s Immigration Record Mirrors Democratic Push to Embrace Migrants",
      "description": "Trump campaign attacks Kamala Harris’s running mate as too lax on immigration",
      "url": "https://www.wsj.com/politics/elections/tim-walz-immigration-record-490752b0?mod=hp_lead_pos9",
      "urlToImage": "https://images.wsj.net/im-990536/social",
      "publishedAt": "2024-08-13T09:00:00Z",
      "content": "As the Democratic governor of Minnesota, Tim Walz signed into law initiatives allowing immigrants in the country illegally to apply for drivers licenses, qualify for free tuition at state universitie… [+531 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Landon Mion",
      "title": "Kamala Harris' campaign criticizes Trump for serving 'self-obsessed rich guys' after interview with Elon Musk",
      "description": "Kamala Harris' campaign slammed Trump's interview with Elon Musk, saying Trump's campaign is in the service of \"self-obsessed rich guys who will sell out the middle class.\"",
      "url": "https://www.foxnews.com/politics/kamala-harris-campaign-criticizes-trump-serving-self-obsessed-rich-guys-after-interview-elon-musk",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/07/Harris-Trump.jpg",
      "publishedAt": "2024-08-13T07:41:06Z",
      "content": "Vice President Kamala Harris' presidential campaign is blasting former President Trump's interview with billionaire Elon Musk, saying Trump's campaign is in service of \"self-obsessed rich guys who wi… [+4336 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "DEE-ANN DURBIN",
      "title": "Why Trump's and Harris' proposals to end federal taxes on tips would be difficult to enact",
      "description": "Former President Donald Trump and Vice President Kamala Harris agree on one thing, at least: Both say they want to eliminate federal taxes on workers’ tips.But experts say there’s a reason Congress hasn’t made such a change already.",
      "url": "https://apnews.com/9ed6e049a53b1943471ce2b6479b9ffb",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/a4392dea4d3c4543acde0492dc0d3642/3000.jpeg",
      "publishedAt": "2024-08-13T07:00:24Z",
      "content": "Former President Donald Trump and Vice President Kamala Harris agree on one thing, at least: Both say they want to eliminate federal taxes on workers’ tips.But experts say there’s a reason Congress h… [+4637 chars]"
    },
    {
      "source": {
        "id": "la-repubblica",
        "name": "La Repubblica"
      },
      "author": "La Repubblica",
      "title": "Trump, intervistato da Musk, annuncia: \"A ottobre tornerò a Butler\"",
      "description": null,
      "url": "https://www.repubblica.it/esteri/elezioni-usa/2024/08/13/video/trump_musk_intervista_x_butler-423444875/",
      "urlToImage": "https://www.repstatic.it/content/nazionale/img/2024/08/13/085211572-65395a48-17dc-4514-8ff4-9499425fdfff.jpg",
      "publishedAt": "2024-08-13T06:52:13Z",
      "content": null
    },
    {
      "source": {
        "id": "cnn-es",
        "name": "CNN Spanish"
      },
      "author": "Julia Hernández",
      "title": "ANÁLISIS | Musk intenta ayudar a Trump a frenar la subida de Harris",
      "description": "El titán de la tecnología Elon Musk abrió de par en par su plataforma X este lunes por la noche, y le ofreció a Donald Trump una vía libre de comprobaciones de hechos para sus falsedades, teorías conspirativas y extremismo mientras intenta frenar el ascenso d…",
      "url": "https://cnnespanol.cnn.com/2024/08/13/musk-ayuda-trump-harris-x-analisis-trax/",
      "urlToImage": "https://cnnespanol.cnn.com/wp-content/uploads/2024/08/Trump-2-e1723528336708.jpg?quality=100&strip=info",
      "publishedAt": "2024-08-13T06:34:12Z",
      "content": "Video relacionado: ¿Debería Elon Musk bajar el tono de sus comentarios hacia los demócratas y Biden? 1:21\r\n(CNN) -- El hombre más rico del mundo y el otrora y posiblemente futuro hombre más poderoso … [+9288 chars]"
    },
    {
      "source": {
        "id": "les-echos",
        "name": "Les Echos"
      },
      "author": "Solveig GODELUCK",
      "title": "Présidentielle américaine 2024 : comment Elon Musk s'est transformé en propagandiste d'extrême-droite",
      "description": "Le propriétaire du réseau social X a fini par apporter publiquement son soutien à Donald Trump, candidat républicain à l'élection présidentielle. Il relayait déjà depuis des mois la vulgate populiste. Il s'en prend aussi au Premier ministre britannique, un tr…",
      "url": "https://www.lesechos.fr/monde/etats-unis/presidentielle-americaine-2024-comment-elon-musk-sest-transforme-en-propagandiste-dextreme-droite-2113450",
      "urlToImage": "https://media.lesechos.com/api/v1/images/view/66bafe276655c47a0453e45b/1280x720/0120262485931-web-tete.jpg",
      "publishedAt": "2024-08-13T06:33:07Z",
      "content": "A descendre le fil des messages sur X d'Elon Musk, on croirait qu'ils sont écrits par un agitateur d'extrême-droite. L'entrepreneur à succès poste frénétiquement sur le réseau social qu'il s'est offe… [+649 chars]"
    },
    {
      "source": {
        "id": "google-news-it",
        "name": "Google News (Italy)"
      },
      "author": "Sky Tg24 ",
      "title": "Intervista di Musk a Trump su X. Il tycoon: \"L'Ue si approfitta di noi\" - Sky Tg24 ",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE5fTVdWODBRX0ZLQzhIekYzMURlRWhyYjBWakgwQ0FnNGUxaUkzUndud1JoQ196SkZSSzZKRl9vanBJc3ZNdS1ROTd0Um44Yk9WWVhWWG4yUVRua2hqb0Eyd045SHc3X04tXy1rRU84dHVpdHhOY0ZJNWdR0gF_QVVfeXFMUGxydmpIQlREaXdJclAwQ0loR0QtRW0zdTJGNXF1UGtkelprTnJIcjI2R2p0cngtNGc1Snk4dE1uMldRQnJOeXRLanJseVJBYnRUUkRIS3ZtaG1FZHdIY3VJbUVtRkdFZHFudm4wUHA1S2hnT2lEVG1OeE44Q3lqQQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-13T05:40:19+00:00",
      "content": null
    },
    {
      "source": {
        "id": "les-echos",
        "name": "Les Echos"
      },
      "author": "Solveig GODELUCK",
      "title": "Présidentielle américaine 2024 : Trump et Musk affichent leurs projets politiques pour l'Amérique",
      "description": "Le candidat républicain à la présidentielle a été interviewé sur X par le patron de Tesla, qui le soutient pour l'élection. Elon Musk veut jouer un rôle dans la réduction des dépenses publiques si Donald Trump est élu. Sur le réchauffement climatique, ils ont…",
      "url": "https://www.lesechos.fr/monde/etats-unis/presidentielle-americaine-2024-trump-et-musk-affichent-leurs-projets-politiques-pour-lamerique-2113433",
      "urlToImage": "https://media.lesechos.com/api/v1/images/view/66baecd8994c1765490bc385/1280x720/0120282153203-web-tete.jpg",
      "publishedAt": "2024-08-13T05:19:15Z",
      "content": "Deux heures de conversation amicale, comme s'ils étaient au coin du feu. C'est le spectacle qu'ont donné Elon Musk et Donald Trump aux internautes lundi soir, à l'occasion d'une interview en direct d… [+4135 chars]"
    },
    {
      "source": {
        "id": "entertainment-weekly",
        "name": "Entertainment Weekly"
      },
      "author": "https://www.facebook.com/entertainmentweekly",
      "title": "Jon Stewart 'is risen from Covid,' feeling Trump's pain on 'The Daily Show'",
      "description": "COVID first-timer Jon Stewart 'is risen' and feeling Donald Trump's pain on 'The Daily Show.'",
      "url": "https://ew.com/covid-first-timer-jon-stewart-feels-donald-trumps-pain-on-the-daily-show-8694209",
      "urlToImage": "https://ew.com/thmb/kFT0GuUOmCEmsyAksKLJh0Yg6YI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/The-Daily-Show-022024-e52b854261494fc2a07850ffa35f5d78.jpg",
      "publishedAt": "2024-08-13T05:07:13.6174928Z",
      "content": "Jon Stewart was back at the news desk on Monday's The Daily Show after canceling his appearance last week for health reasons.\r\n\"My name is Jon Stewart, and I am risen from COVID hell,\" he said in the… [+2177 chars]"
    },
    {
      "source": {
        "id": "google-news-uk",
        "name": "Google News (UK)"
      },
      "author": "POLITICO Europe",
      "title": "Trump lauds ‘honorable’ Zelenskyy, slaps ‘bad’ EU in freewheeling Musk interview - POLITICO Europe",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxORF9TOXhuSGczUE5qZHlXX1YxN1ZoTW5NTklSdFdzeTdMX0g1a1BMYjFPNzk4V0V3VXI0TnpKS1ROcUtTU3p3NDdYNDN4RWkxck1NNFg4M2ZfRTdkQTctYzZBbTRSV0NYVFpzbDFVLWdiWXdPM1RadUVCaXpVV2VjQ0JZbElZQQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-13T05:06:00+00:00",
      "content": null
    },
    {
      "source": {
        "id": "cnn-es",
        "name": "CNN Spanish"
      },
      "author": "Julia Hernández",
      "title": "Sospechosos hackers iraníes violaron el correo electrónico personal de Roger Stone como parte de un esfuerzo para atacar la campaña de Trump, según fuentes",
      "description": "El FBI y otros investigadores que sondean el aparente hackeo y filtración de documentos de la campaña, que Donald Trump atribuyó a Irán, sospechan que los hackers pudieron comprometer la cuenta de correo electrónico personal del republicano de larga data, Rog…",
      "url": "https://cnnespanol.cnn.com/2024/08/13/hackers-iranies-ataque-campana-trump-trax/",
      "urlToImage": "https://cnnespanol.cnn.com/wp-content/uploads/2024/08/Trump-1-e1723521400984.jpg?quality=100&strip=info",
      "publishedAt": "2024-08-13T04:56:17Z",
      "content": "Aseguran que la campaña de Donald Trump fue hackeada 0:25\r\n(CNN) -- El FBI y otros investigadores que sondean el aparente hackeo y filtración de documentos de la campaña, que Donald Trump atribuyó a … [+3557 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CNN",
      "title": "Trump and Musk host friendly conversation on X after delay from technical difficulties - CNN",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQM25VbzdOcmFhRUJuT01HT2F3YzBsTFE2Qkxod29GZS1tV2MwVEIydWZONjVBTm1fY1VqeUNZT2xmV2xBNmEyeDd3c3lReDM2dlhtSUxLSkJmWER0eEduR1ViYzBlZGFXSVZDdXA5MWxwdHdyLTE2eFlxSE9MekxpdjBqdDhhV3Nk0gF_QVVfeXFMT0pHSmlIcW9aaXVLVkxxbnBXcjRLcWNSenZrTXZiUGNzSlkxV1d4b0JLOVZVT3Nsak9ZeFROYzJHN1NOY0g1VUNlb0dsN2tvcVd0dk13VTFhSTVBc3MzekxuYU84M3pBSnVzYTBPSlNwVWx5SVRneW9Rdm1KblhkWQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-13T04:40:00+00:00",
      "content": null
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "DAVID BAUDER",
      "title": "News outlets were leaked insider material from the Trump campaign. They chose not to print it",
      "description": "At least three news outlets were leaked confidential material from inside the Donald Trump campaign, including its report vetting JD Vance as a vice presidential candidate. So far, each has refused to reveal any details about what they received.",
      "url": "https://apnews.com/e30bdccbdd4abc9506735408cdc9bf7b",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/24cea06d6f9f4ad1aead3f916e2e4668/3000.jpeg",
      "publishedAt": "2024-08-13T04:11:48Z",
      "content": "At least three news outlets were leaked confidential material from inside the Donald Trump campaign, including its report vetting JD Vance as a vice presidential candidate. So far, each has refused t… [+5219 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "ZEKE MILLER",
      "title": "Harris cautiously rolls out policy, aiming to outmaneuver Trump and address 2020 liabilities",
      "description": "WASHINGTON (AP) — Vice President Kamala Harris is trying to outmaneuver former President Donald Trump and address old vulnerabilities on her policy positions as she starts to fill in how she would govern if elected in November.",
      "url": "https://apnews.com/e606b41cce817e69a38663cc68ce7ad6",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/a1905480e4784449a5079c1e4319ae6d/3000.jpeg",
      "publishedAt": "2024-08-13T04:10:04Z",
      "content": "WASHINGTON (AP) — Vice President Kamala Harris is trying to outmaneuver former President Donald Trump and address old vulnerabilities on her policy positions as she starts to fill in how she would go… [+5908 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Tech problems mar launch of Trump-Musk interview",
      "description": "X owner Elon Musk blames an alleged cyber attack on the early interview tech glitches.",
      "url": "https://www.bbc.co.uk/news/articles/c1k3mwy1ww3o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3282/live/17485c00-5918-11ef-98c0-d5e65d1f3e79.jpg",
      "publishedAt": "2024-08-13T03:52:12.6958044Z",
      "content": "The relationship between the two men has shifted over the years and they have traded online barbs in the past. \r\nBut Monday's conversation between the two was chummy and never adversarial.\r\nTrump, wh… [+2355 chars]"
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": "Bloomberg",
      "title": "Musk Cozies Up to Trump in Glitchy Conversation on X Platform",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOcTAtZFN0Mm5UNWJKOWFHVGFnV0RBdVlLUVp2amVyY3dNaXVPVjZTT2tVQWk0SlJkUFA5eHBXYUI5RzJCWGRBNDlSYkZCTkVncUsxVXk5YWVsZ2NON3JkOGtsY1RaY05Cd3A1bXlpZUN1NXplRFZFVHZ3RGIxcWRCZF9fVlc2TjlzczNhamhUMnNHa09pNzQxMVJLcldFQ0w4S0ZmbzM0c3Fja25JQlVyalh1ZThuQQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-13T03:23:00+00:00",
      "content": null
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera Staff",
      "title": "Trump returns to X with two-hour Elon Musk chat hit by technical glitch",
      "description": "Trump had not posted on the platform since 2023, when he shared a mugshot taken after his surrender to a Georgia jail.",
      "url": "https://www.aljazeera.com/news/2024/8/13/trump-returns-to-x-with-two-hour-elon-musk-chat-hit-by-technical-glitch",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/08/2024-08-13T024857Z_1310885104_RC2QE9AS4BJ9_RTRMADP_3_USA-ELECTION-TRUMP-MUSK-1723518782.jpg?resize=1200%2C675",
      "publishedAt": "2024-08-13T03:15:51Z",
      "content": "United States Republican presidential nominee and former President Donald Trump has returned to the social media platform X as he attempts to recover from a rocky couple of weeks on the campaign trai… [+7708 chars]"
    }
  ]
  constructor()
  {
    super();
    this.state = {
      articles : this.articles, 
      loading : false
    }
  }
  render() {
    return (
      <div>
        <>
          <div className="container my-3">
            <h2 className="my-4">These are the top headlines</h2>
            <div className="row">
              <div className="col-md-4">
                <Newsitem title="My Title" description="My Description" imageUrl = "https://thehill.com/wp-content/uploads/sites/2/2024/08/GOP-agenda_081324_Photos_APJasonGoode.png?w=1280"/>
              </div>
              <div className="col-md-4">
                <Newsitem title="My Title" description="My Description" />
              </div>
              <div className="col-md-4">
                <Newsitem title="My Title" description="My Description" />
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default News;
