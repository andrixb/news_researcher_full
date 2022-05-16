import Article from '../../Domain/Entities/Article';
import { apiInstance } from '../Api/apiClient';
import { INewsEverythingRequestPayloadResponse } from '../Interfaces/INewsEverythingRequestPayloadResponse';

interface NewsEverythingRequest {
    keyword: string;
}

export const listNewsEverything = async ({ keyword }: NewsEverythingRequest): Promise<Article[]> => {
    const { data } = await apiInstance.get<INewsEverythingRequestPayloadResponse>(
        `${process.env.BASE_API_URL}/${process.env.API_URL_EVERYTHING}?q=${keyword}&apiKey=${process.env.API_KEY}`,
        {}
    );

    console.log(data)
    return [];
};


const newsEverythingJSON = [{
    "status": "ok",
    "totalResults": 477,
    "articles": [{
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Saudi shares extend rebound on budget surplus; Qatar dips - Reuters.com",
        "description": "Saudi Arabia's stock index rose in early trade on Monday, on track to extend a rebound from the previous session, while the Qatari index continued to fall.",
        "url": "https://www.reuters.com/markets/stocks/saudi-shares-extend-rebound-budget-surplus-qatar-dips-2022-05-16/",
        "urlToImage": "https://www.reuters.com/resizer/TQW22iHIi8ahnoaItQVNk1T2cdw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Y2GD4WH2AFN3JPAQLNOAUI25VE.jpg",
        "publishedAt": "2022-05-16T08:15:00Z",
        "content": "May 16 (Reuters) - Saudi Arabia's stock index rose in early trade on Monday, on track to extend a rebound from the previous session, while the Qatari index continued to fall.\r\nThe benchmark index (.T… [+1395 chars]"
    }, {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "U.S. Treasury's Yellen to push Poland on global minimum tax implementation - Reuters.com",
        "description": "U.S. Treasury Secretary Janet Yellen will thank Poland for hosting millions of Ukrainian war refugees on Monday, but she has another goal for meetings in Warsaw: persuading Polish leaders to back plans to implement a 15% global corporate minimum tax.",
        "url": "https://www.reuters.com/world/europe/us-treasurys-yellen-push-poland-global-minimum-tax-implementation-2022-05-16/",
        "urlToImage": "https://www.reuters.com/resizer/_6RSuYNOv22tyW9eytpBJ6nO3Ww=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/75UO2DCDN5JH5FPG274GR6T5MI.jpg",
        "publishedAt": "2022-05-16T06:20:00Z",
        "content": "WARSAW, May 16 (Reuters) - U.S. Treasury Secretary Janet Yellen will thank Poland for hosting millions of Ukrainian war refugees on Monday, but she has another goal for meetings in Warsaw: persuading… [+4721 chars]"
    }, {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Samuel Gibbs Consumer technology editor",
        "title": "Sennheiser Momentum True Wireless 3 review: great noise-cancelling earbuds",
        "description": "Top sound in a new, more comfortable design, with good battery life, controls and wingsThe latest wireless earbuds from Sennheiser are smaller, longer lasting and have better sound and noise cancelling than their predecessors, making them some of the best on …",
        "url": "https://amp.theguardian.com/technology/2022/may/16/sennheiser-momentum-true-wireless-3-review-great-noise-cancelling-earbuds",
        "urlToImage": "https://i.guim.co.uk/img/media/2f025b23f1bcdfc89c03e097a19ad6404661f5eb/661_794_3624_2174/master/3624.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTQucG5n&enable=upscale&s=6055a40400a33247f86f972acd473ffb",
        "publishedAt": "2022-05-16T06:00:52Z",
        "content": "The latest wireless earbuds from Sennheiser are smaller, longer lasting and have better sound and noise cancelling than their predecessors, making them some of the best on the market.\r\nPriced at £219… [+6480 chars]"
    }, {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Xan Brooks",
        "title": "Political, provocative and preposterous: why Cannes is a ‘cathedral of cinema’",
        "description": "The French cultural institution, which turns 75 this year, has always been a battle between radicalism and elitism – but that’s what makes it so essentialThe Truman Show is a 1990s Hollywood movie about a man who lives in a bubble, cut off from the world. As …",
        "url": "https://amp.theguardian.com/film/2022/may/16/cannes-film-festival-2022-top-gun-elvis-triangle-sadness",
        "urlToImage": "https://i.guim.co.uk/img/media/fe1ace50d865ddbc1f91a6a29cd436b87cd47f98/0_73_5108_3064/master/5108.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7d119ff15b6724feb60bfb74e24c6c01",
        "publishedAt": "2022-05-16T08:00:01Z",
        "content": "The Truman Show is a 1990s Hollywood movie about a man who lives in a bubble, cut off from the world. As played by Jim Carrey, Truman Burbank surrounded by actors, his every move dogged by cameras st… [+9265 chars]"
    }, {
        "source": {
            "id": null,
            "name": "MacRumors"
        },
        "author": "Tim Hardwick",
        "title": "Apple Testing New 'Tap to Pay' iPhone Feature At Apple Park Visitor Center",
        "description": "Apple in February announced a new \"Tap to Pay on iPhone\" feature that will allow compatible iPhones to accept contactless payments with no additional hardware required, and it turns out Apple is already trialing the feature at its Apple Park Visitor Center in…",
        "url": "https://www.macrumors.com/2022/05/16/apple-tests-iphone-tap-to-pay-apple-park/",
        "urlToImage": "https://images.macrumors.com/t/hLJ1O9ZdmeliSzpSGbwxwv6ItJU=/1600x/article-new/2022/02/Apple-Tap-to-Pay-iPhone.jpeg",
        "publishedAt": "2022-05-16T09:04:11Z",
        "content": "Apple in February announced a new \"Tap to Pay on iPhone\" feature that will allow compatible iPhones to accept contactless payments with no additional hardware required, and it turns out Apple is alre… [+1792 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Hipertextual"
        },
        "author": "Rubén Chicharro",
        "title": "Apple también planea llevar el puerto USB-C a los AirPods y otros accesorios",
        "description": "Apple planea dar el salto al puerto USB-C en los iPhone 15. Al menos así lo sugieren los últimos rumores, así como el periodista Mark Gurman (Bloomberg) quien reveló hace unos días que la firma de Cupertino ya se encuentra trabajando en el diseño de un iPhone…",
        "url": "https://hipertextual.com/2022/05/apple-airpods-accesorios-usb-c",
        "urlToImage": "https://hipertextual.com/wp-content/uploads/2021/10/AirPods-3-2-scaled.jpg",
        "publishedAt": "2022-05-16T09:08:32Z",
        "content": "Apple planea dar el salto al puerto USB-C en los iPhone 15. Al menos así lo sugieren los últimos rumores, así como el periodista Mark Gurman (Bloomberg) quien reveló hace unos días que la firma de Cu… [+2587 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Xataka.com"
        },
        "author": "Ricardo Aguilar",
        "title": "La cara B de comprar un Android caro: pierden hasta el 50% de su valor en pocos meses",
        "description": "Si quieres sacarle unos cuantos euros a tu teléfono a la hora de venderlo para comprarte otro, quizás la mejor opción sea un iPhone. Hace cinco años hablábamos sobre el ritmo al que bajan de precio los móviles, con una tendencia que se ha mantenido durante el…",
        "url": "https://www.xataka.com/moviles/cara-b-comprar-android-caro-pierden-50-su-valor-pocos-meses",
        "urlToImage": "https://i.blogs.es/558b39/1366_2000/840_560.jpeg",
        "publishedAt": "2022-05-16T08:01:02Z",
        "content": "Si quieres sacarle unos cuantos euros a tu teléfono a la hora de venderlo para comprarte otro, quizás la mejor opción sea un iPhone. Hace cinco años hablábamos sobre el ritmo al que bajan de precio l… [+1612 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Xataka.com"
        },
        "author": "Eva Rodríguez de Luis",
        "title": "Las 11 mejores ofertas en tecnología de los dos Días sin IVA de MediaMarkt que todavía puedes comprar",
        "description": "Vuelve a MediaMarkt MediaMarkt una de sus promociones más atractivas: los Días Sin IVA. Los días 16 y 17 de mayo podrás comprar tanto en la tienda como en la web (de hecho, en la web la campaña comenzó ayer por la noche y termina el 18 a las 9h) tecnología al…",
        "url": "https://www.xataka.com/seleccion/11-mejores-ofertas-tecnologia-dos-dias-iva-mediamarkt-que-todavia-puedes-comprar",
        "urlToImage": "https://i.blogs.es/31878b/dias-sin-iva/840_560.jpg",
        "publishedAt": "2022-05-16T06:03:45Z",
        "content": "Vuelve a MediaMarkt MediaMarkt una de sus promociones más atractivas: los Días Sin IVA. Los días 16 y 17 de mayo podrás comprar tanto en la tienda como en la web (de hecho, en la web la campaña comen… [+5134 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Gigazine.net"
        },
        "author": "@GIGAZINE",
        "title": "Macの位置情報サービスのせいで60秒ごとにWi-Fiに遅延が発生するという指摘",
        "description": "フランスのモバイル決済サービス・Wave SénégalのCTO(最高技術責任者)を務めるBen Kuhn氏が、Macの位置情報サービスによってMacのWi-Fi通信が60秒ごとに遅くなると指摘しています。続きを読む...",
        "url": "https://gigazine.net/news/20220516-apple-map-location-scan-latency/",
        "urlToImage": "https://i.gzn.jp/img/2022/05/16/apple-map-location-scan-latency/00_m.png",
        "publishedAt": "2022-05-16T07:00:00Z",
        "content": "Wave SénégalCTO()Ben KuhnMacMacWi-Fi60\r\nFUN FACT: I just did another round of \"what's making my Zoom calls stutter every 60s\" and this time the culprit was... APPLE #!*$ING MAPS. That's right, Macs n… [+1536 chars]"
    }, {
        "source": {
            "id": null,
            "name": "9to5Mac"
        },
        "author": "Benjamin Mayo",
        "title": "New iPhone Tap to Pay feature already in use at Apple Park Visitor Center",
        "description": "In February, Apple announced a new system called to Tap to Pay on iPhone which allows an individual to take a contactless payment, only using their iPhone as the payment terminal. With the feature active, a customer simply has to tap their NFC iPhone or bank …",
        "url": "https://9to5mac.com/2022/05/16/new-iphone-tap-to-pay-feature-already-in-use-at-apple-park-visitor-center/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/02/apple-pay-tap-iphone-9to5mac.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2022-05-16T08:19:57Z",
        "content": "In February, Apple announced a new system called to Tap to Pay on iPhone which allows an individual to take a contactless payment, only using their iPhone as the payment terminal. With the feature ac… [+2014 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Genbeta.com"
        },
        "author": "Antonio Vallejo",
        "title": "Han recreado más de 500 iconos de Windows XP en HD y podemos descargarlos gratis: un homenaje al S.O más añorado de Microsoft",
        "description": "**\nWindows XP es uno de los sistemas operativos más queridos por la comunidad. Hace más de 20 años Microsoft ideó un diseño que será recordado para la historia, y todavía hay algunos que vuelven a él de vez en cuando. Un artista gráfico ha querido darle un ho…",
        "url": "https://www.genbeta.com/windows/han-recreado-500-iconos-windows-xp-hd-podemos-descargarlos-gratis-homenaje-al-s-anorado-microsoft",
        "urlToImage": "https://i.blogs.es/75efc3/1366_2000/840_560.jpg",
        "publishedAt": "2022-05-16T08:37:55Z",
        "content": "**\r\nWindows XP es uno de los sistemas operativos más queridos por la comunidad. Hace más de 20 años Microsoft ideó un diseño que será recordado para la historia, y todavía hay algunos que vuelven a é… [+1671 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Applesfera.com"
        },
        "author": "David Bernal Raspall",
        "title": "Ya se ha visto el iPhone como TPV en acción. Y sorprende su facilidad de uso",
        "description": "En febrero, Apple anunció un nuevo sistema para facilitar que los comercios puedan aceptar pagos con tarjeta de crédito. Con el nombre de Tap to Pay, el sistema convierte a cualquier iPhone en uno capaz de aceptar un pago contactless, ya sea mediante una tarj…",
        "url": "https://www.applesfera.com/servicios-apple/se-ha-visto-iphone-como-tpv-accion-sorprende-su-facilidad-uso",
        "urlToImage": "https://i.blogs.es/689bf5/1366_2000/840_560.jpeg",
        "publishedAt": "2022-05-16T08:46:02Z",
        "content": "En febrero, Apple anunció un nuevo sistema para facilitar que los comercios puedan aceptar pagos con tarjeta de crédito. Con el nombre de Tap to Pay, el sistema convierte a cualquier iPhone en uno ca… [+1778 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Applesfera.com"
        },
        "author": "Jesús Quesada",
        "title": "Los AirPods Max bajan casi 180 euros con su último ofertón: espectacular diseño y sonido",
        "description": "Los AirPods Max son los primeros auriculares Bluetooth de diadema de Apple (sin contar los comercializados bajo la marca de Beats by Dr. Dre) y están repletos de funciones, además de tener una calidad de sonido espectacular. Están de oferta en Amazon a su seg…",
        "url": "https://www.applesfera.com/seleccion/airpods-max-bajan-casi-180-euros-su-ultimo-oferton-espectacular-diseno-sonido",
        "urlToImage": "https://i.blogs.es/afe01e/airpods-max-01/840_560.jpg",
        "publishedAt": "2022-05-16T05:45:58Z",
        "content": "Los AirPods Max son los primeros auriculares Bluetooth de diadema de Apple (sin contar los comercializados bajo la marca de Beats by Dr. Dre) y están repletos de funciones, además de tener una calida… [+2291 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Applesfera.com"
        },
        "author": "Jesús Quesada",
        "title": "Desplome del iPhone 12 de 256 GB con esta rebaja: nunca había estado tan barato",
        "description": "El iPhone 12 es muy similar al iPhone 13, diferenciándose en poco más que el procesador. La versión de 256 GB se puede encontrar con un gran descuentazo en Amazon que lo deja a su precio mínimo histórico: 716 euros. \n\n\n\n \n \n \n \r\n\n \n Nuevo Apple iPhone 12 (256…",
        "url": "https://www.applesfera.com/seleccion/desplome-iphone-12-256-gb-esta-rebaja-nunca-habia-estado-barato",
        "urlToImage": "https://i.blogs.es/2e7dbb/iphone-12/840_560.jpg",
        "publishedAt": "2022-05-16T07:51:38Z",
        "content": "El iPhone 12 es muy similar al iPhone 13, diferenciándose en poco más que el procesador. La versión de 256 GB se puede encontrar con un gran descuentazo en Amazon que lo deja a su precio mínimo histó… [+1937 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Applesfera.com"
        },
        "author": "Miguel López",
        "title": "Una auténtica nueva generación para el iPhone: iOS 16 interactuará con nosotros de forma nunca vista, según Mark Gurman",
        "description": "Seguimos recibiendo detalles de iOS 16 con cuentagotas a escasas semanas de su presentación oficial en la WWDC 2022. Mark Gurman ha explicado en su boletín semanal que el sistema operativo de los iPhone tendrá \"nuevas formas de interacción\", dejando entrever …",
        "url": "https://www.applesfera.com/ios/autentica-nueva-generacion-para-iphone-ios-16-interactuara-nosotros-forma-nunca-vista-mark-gurman",
        "urlToImage": "https://i.blogs.es/e0470b/captura-de-pantalla-2022-05-16-a-las-9.01.55/840_560.jpeg",
        "publishedAt": "2022-05-16T07:06:05Z",
        "content": "Seguimos recibiendo detalles de iOS 16 con cuentagotas a escasas semanas de su presentación oficial en la WWDC 2022. Mark Gurman ha explicado en su boletín semanal que el sistema operativo de los iPh… [+1374 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Applesfera.com"
        },
        "author": "Eduardo Archanco",
        "title": "Qué es el código PIN de la SIM del iPhone y en qué se diferencia del código de desbloqueo",
        "description": "En el iPhone hay una serie de códigos y contraseñas que el usuario debe recordar. Además del Apple ID para controlar iCloud y la App Store, hay otros que son igual o más importantes. Entre ellos están el código PIN de la SIM del iPhone y su diferencia del cód…",
        "url": "https://www.applesfera.com/nuevo/que-codigo-pin-sim-iphone-que-se-diferencia-codigo-desbloqueo",
        "urlToImage": "https://i.blogs.es/7194c8/portada/840_560.jpeg",
        "publishedAt": "2022-05-16T07:01:02Z",
        "content": "En el iPhone hay una serie de códigos y contraseñas que el usuario debe recordar. Además del Apple ID para controlar iCloud y la App Store, hay otros que son igual o más importantes. Entre ellos está… [+2730 chars]"
    }, {
        "source": {
            "id": null,
            "name": "XDA Developers"
        },
        "author": "Pranob Mehrotra",
        "title": "Rumored Galaxy Watch 5 Pro might feature sapphire glass and a titanium case",
        "description": "Recent reports suggest that Samsung might launch three new Wear OS smartwatches as part of its Galaxy Watch 5 lineup this year. The standard Galaxy Watch 5 and the Galaxy Watch 5 Classic could be accompanied by a Galaxy Watch 5 Pro variant this time around, w…",
        "url": "https://www.xda-developers.com/galaxy-watch-5-pro-sapphire-glass-titanium-case/",
        "urlToImage": "https://www.xda-developers.com/files/2021/08/Samsung-Galaxy-Watch-4-Classic-Unboxing-5.jpg",
        "publishedAt": "2022-05-16T08:20:56Z",
        "content": "Recent reports suggest that Samsung might launch three new Wear OS smartwatches as part of its Galaxy Watch 5 lineup this year. The standard Galaxy Watch 5 and the Galaxy Watch 5 Classic could be acc… [+1640 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Presse-citron"
        },
        "author": "Setra",
        "title": "Apple : l’USB-C sur d’autres produits que l’iPhone ?",
        "description": "Afin de se préparer à la future législation européenne sur le chargeur commun, Apple testerait déjà des iPhone avec port USB-C à la place du Lightning. D’autre part, la firme prévoirait de faire passer d’autres produits à l’USB-C, alors que la transition a dé…",
        "url": "https://www.presse-citron.net/apple-lusb-c-sur-dautres-produits-que-liphone/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2021/11/USB-C-Chargeur-charge-rapide-recharge-cable.jpg",
        "publishedAt": "2022-05-16T07:14:29Z",
        "content": "Alors que quasiment tous ses concurrents ont déjà adopté lUSB-C, Apple continue dutiliser son port propriétaire Lightning sur liPhone. Et bien entendu, si cela ne tenait quà la firme de Cupertino, ce… [+3721 chars]"
    }, {
        "source": {
            "id": null,
            "name": "HYPEBEAST"
        },
        "author": "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
        "title": "Kendrick Lamar’s 'Mr. Morale & the Big Steppers' Breaks Apple Music Record",
        "description": "Kendrick Lamar's latest studio album, Mr. Morale & the Big Steppers, has set a new Apple Music record.Apple Music took to Twitter to confirm that upon its release, the album broke the streaming service's worldwide record for the highest first-day streams for …",
        "url": "https://hypebeast.com/2022/5/kendrick-lamar-mr-morale-and-the-big-steppers-sets-new-apple-music-record-highest-first-day-streams-2022-album",
        "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Fkendrick-lamar-mr-morale-and-the-big-steppers-sets-new-apple-music-record-highest-first-day-streams-2022-album-tw.jpg?w=960&cbr=1&q=90&fit=max",
        "publishedAt": "2022-05-16T04:22:21Z",
        "content": "Kendrick Lamar‘s latest studio album, Mr. Morale &amp; the Big Steppers, has set a new Apple Music record.\r\nApple Music took to Twitter to confirm that upon its release, the album broke the streaming… [+946 chars]"
    }, {
        "source": {
            "id": null,
            "name": "HYPEBEAST"
        },
        "author": "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
        "title": "Elon Musk Says Twitter's Legal Team Told Him He Violated an NDA",
        "description": "Elon Musk's Twitter acquisition continues to be the topic of conversation amongst the tech world. The deal was first announced in late April and has since sent the platform's users into polarized viewpoints.However, over the weekend, the developments of the d…",
        "url": "https://hypebeast.com/2022/5/elon-musk-twitter-legal-team-violated-nda-news",
        "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Felon-musk-twitter-legal-team-violated-nda-news-tw.jpg?w=960&cbr=1&q=90&fit=max",
        "publishedAt": "2022-05-16T08:30:08Z",
        "content": "Elon Musk‘s Twitter acquisition continues to be the topic of conversation amongst the tech world. The deal was first announced in late April and has since sent the platform’s users into polarized vie… [+2750 chars]"
    }]
}]