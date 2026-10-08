export type ScriptLine =
  | { kind: "stage"; text: string }
  | { kind: "line"; speaker: string; voice: "reddy" | "ben" | "birds" | "radio" | "cow" | "stage"; text: string };

export type HolidayScene = {
  scene: string;
  title: string;
  audios: string[];
  lines: ScriptLine[];
};

export const HOLIDAY_SCENES: HolidayScene[] = [
  {
    "scene": "ONE",
    "title": "INTRODUCTION",
    "audios": [
      "IntroPart1.mp3"
    ],
    "lines": [
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Stop fussing Ben, this won't\nhurt a bit. You can't go walking around the Fair looking like\nthat!"
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Reddy! Please!"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Don't be stubborn, Ben."
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "But I can't wear this."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Careful! You'll break it.\nNow quick. The curtain's opening!"
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Wait! Don't leave me! Oh my goodness. Isn't\nthis silly? Me, Ben Franklin, the man who flew a kite in a thunderstorm\nand proved that lightening was electricity, dressed like this.\nAnd all I wanted to do was go to the Fair and have a holiday.\nOh my goodness. Isn't\nthis silly? Me, Ben Franklin, the man who flew a kite in a thunderstorm\nand proved that lightening was electricity, dressed like this.\nAnd all I wanted to do was go to the Fair and have a holiday.\nOh my goodness. Isn't\nthis silly? Me, Ben Franklin, the man who flew a kite in a thunderstorm\nand proved that lightening was electricity, dressed like this.\nAnd all I wanted to do was go to the Fair and have a holiday."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "But you're going to have a\nholiday Ben. In fact, seven of them."
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Seven holidays?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Sure! And while we're at\nit you're going to see some startling changes in electricity\nsince you flew that kite in 1752.\nWell, for instance: each\nnight you can see our Xenon Searchlights which produce over twelve\nbillion candlepower. That's three times brighter than the surface\nof the sun!"
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Are you sure of that figure?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Sure I'm sure. Why I know\nall about electricity. I'm Reddy Kilowatt."
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Any relation to James Watt?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "A distant Uncle. But now, let's all hold\non to our hats and let go of our imagination. Your Investor Owned\nElectric Companies who serve 80% of America's people, invite\nyou all to come along with Ben Franklin and me on a \"Holiday\nwith Light!\"\nBut now, let's all hold\non to our hats and let go of our imagination. Your Investor Owned\nElectric Companies who serve 80% of America's people, invite\nyou all to come along with Ben Franklin and me on a \"Holiday\nwith Light!\"\nBut now, let's all hold\non to our hats and let go of our imagination. Your Investor Owned\nElectric Companies who serve 80% of America's people, invite\nyou all to come along with Ben Franklin and me on a \"Holiday\nwith Light!\""
      },
      {
        "kind": "stage",
        "text": "\"Holiday with Light!\" theme music plays as the audience \"rotates\" into the next chamber:"
      }
    ]
  },
  {
    "scene": "TWO",
    "title": "PRELUDE",
    "audios": [
      "IntroPart2.mp3"
    ],
    "lines": [
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Without light there is\nnothing. Without power there is no movement. And without movement\nwe stand still.\nBut with light! With power!\nThere is movement! There is light! And you are on a holiday!"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Holiday. We're on a Happy Holiday. Light and Power all the\nway, you've got to shout hurray!\nWe're on a Happy Holiday. Light and Power all the\nway, you've got to shout hurray!\nLight and Power all the\nway, you've got to shout hurray!"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Hurray!"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Today. Tonight. We're on a Holiday with\nLight. Light. Light. Light. Lights will twinkle. They will sprinkle happiness\ntoday.\nWe're on a Holiday with\nLight. Light. Light. Light. Lights will twinkle. They will sprinkle happiness\ntoday.\nLight. Light. Light. Lights will twinkle. They will sprinkle happiness\ntoday.\nLight. Light. Lights will twinkle. They will sprinkle happiness\ntoday.\nLight. Lights will twinkle. They will sprinkle happiness\ntoday.\nLights will twinkle. They will sprinkle happiness\ntoday.\nThey will sprinkle happiness\ntoday."
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "We're on a holiday."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Cares will lighten. Smiles will brighten all\nalong the way.\nSmiles will brighten all\nalong the way."
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "We're on a holiday . Holiday.\nHoliday."
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "You'll see Thanksgiving. Christmas. The Fourth of July! Labor Day. Mother's Day and A Happy New Year!\nChristmas. The Fourth of July! Labor Day. Mother's Day and A Happy New Year!\nThe Fourth of July! Labor Day. Mother's Day and A Happy New Year!\nLabor Day. Mother's Day and A Happy New Year!\nMother's Day and A Happy New Year!\nA Happy New Year!"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Hey! Wait a minute. What\nabout Father's Day?"
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Why? Is that a holiday?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Aw! Come on!"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Father's Day."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Well, that's more like\nit!"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Holiday. We're on a Happy Holiday. Light and Power all the\nway, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nWe're on a Happy Holiday. Light and Power all the\nway, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nLight and Power all the\nway, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nHurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nToday. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nWe're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nA happy holiday. We're on a Holiday with\nLight!\nWe're on a Holiday with\nLight!"
      },
      {
        "kind": "stage",
        "text": "\"Holiday with Light!\" theme music plays as the audience \"rotates\" into the next chamber:"
      }
    ]
  },
  {
    "scene": "THREE",
    "title": "A HAPPY NEW YEAR!",
    "audios": [
      "NewYears.mp3",
      "tol01.mp3"
    ],
    "lines": [
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Well thank goodness I had\na strong tail-wind. Otherwise I would have been late for Reddy\nKilowatts big New Year's party. But where is Reddy?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Here I am Ben. And holiday\nor not the Electric Companies have to keep these transmission\nlines in tip-top shape so people can get power and light when\nand where they need it. In other words Ben ..."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Look around. There's power\neverywhere. Whether you're at home\nor at the Fair. Companies are inter-connected. Adding power to be directed. So's towns and cities\ngrow, more electricity will\nflow! And you'll have light\nand power to spare. Whether you're at home\nor at the Fair. Look around. There's power\neverywhere.\nWhether you're at home\nor at the Fair. Companies are inter-connected. Adding power to be directed. So's towns and cities\ngrow, more electricity will\nflow! And you'll have light\nand power to spare. Whether you're at home\nor at the Fair. Look around. There's power\neverywhere.\nCompanies are inter-connected. Adding power to be directed. So's towns and cities\ngrow, more electricity will\nflow! And you'll have light\nand power to spare. Whether you're at home\nor at the Fair. Look around. There's power\neverywhere.\nAdding power to be directed. So's towns and cities\ngrow, more electricity will\nflow! And you'll have light\nand power to spare. Whether you're at home\nor at the Fair. Look around. There's power\neverywhere.\nSo's towns and cities\ngrow, more electricity will\nflow! And you'll have light\nand power to spare. Whether you're at home\nor at the Fair. Look around. There's power\neverywhere.\nmore electricity will\nflow! And you'll have light\nand power to spare. Whether you're at home\nor at the Fair. Look around. There's power\neverywhere.\nAnd you'll have light\nand power to spare. Whether you're at home\nor at the Fair. Look around. There's power\neverywhere.\nWhether you're at home\nor at the Fair. Look around. There's power\neverywhere.\nLook around. There's power\neverywhere."
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Yeah. Yeah. Yeah."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Yeah. Yeah. Yeah. That's right! And another\nthing that's right is that power means progress. Why we have\nan abundance of power. In fact, one-third of the world's power\nsupply. And I could tell you even more, but I promised Ben I'd\ntake him to a New Year's party. And you're invited too so come\non along!\nThat's right! And another\nthing that's right is that power means progress. Why we have\nan abundance of power. In fact, one-third of the world's power\nsupply. And I could tell you even more, but I promised Ben I'd\ntake him to a New Year's party. And you're invited too so come\non along!\nThat's right! And another\nthing that's right is that power means progress. Why we have\nan abundance of power. In fact, one-third of the world's power\nsupply. And I could tell you even more, but I promised Ben I'd\ntake him to a New Year's party. And you're invited too so come\non along!"
      },
      {
        "kind": "stage",
        "text": "Scene shifts to opposite side of the chamber."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Tell me Ben: What's the only\nthing in the world that's manufactured the moment you use it?"
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "A smile?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Guess again."
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "A kiss?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Nope. It's electricity!"
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Oh come on Reddy. Let's not\nmix business with pleasure! Where's the party?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Party? Why we're at a party.\nAnd having a wonderful time!"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "We're generating power every single hour to meet your every power\nneed. Sending currents straight\nand true through the lines direct\nto you. So while you're celebrating we'll keep generating power-plus right here!\nevery single hour to meet your every power\nneed. Sending currents straight\nand true through the lines direct\nto you. So while you're celebrating we'll keep generating power-plus right here!\nto meet your every power\nneed. Sending currents straight\nand true through the lines direct\nto you. So while you're celebrating we'll keep generating power-plus right here!\nSending currents straight\nand true through the lines direct\nto you. So while you're celebrating we'll keep generating power-plus right here!\nthrough the lines direct\nto you. So while you're celebrating we'll keep generating power-plus right here!\nSo while you're celebrating we'll keep generating power-plus right here!\nwe'll keep generating power-plus right here!\npower-plus right here!"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "To light your way and\nmake everyday a happy and bright New\nYear!\na happy and bright New\nYear!"
      },
      {
        "kind": "stage",
        "text": "The Kilowatt Birds sing the \"Holiday with Light!\" theme song as the audience \"rotates\" into the next chamber:"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Holiday. We're on a Happy Holiday. Light and Power all the\nway, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nWe're on a Happy Holiday. Light and Power all the\nway, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nLight and Power all the\nway, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nHurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nToday. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nWe're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nA happy holiday. We're on a Holiday with\nLight!\nWe're on a Holiday with\nLight!"
      }
    ]
  },
  {
    "scene": "FOUR",
    "title": "LABOR DAY",
    "audios": [
      "LaborDay.mp3"
    ],
    "lines": [
      {
        "kind": "line",
        "speaker": "Radio Announcer",
        "voice": "radio",
        "text": "... and that's the news except\nto say it's Labor Day again. So drive carefully and have a Happy\nLabor Day."
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Say Reddy, what's that \"Labor\nDay\" the man spoke about?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Well, it's a holiday. Everything\nshuts down and most people take off. Except for those who have\nto work like the Electric Companies; the trains and planes ..."
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Planes?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Yes. Planes. They're machines\nthat fly through the air."
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Wait until I tell the people\nin Philadelphia that one!"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Ben, we've got other things\nyou couldn't even begin to imagine: If you look around the\nnation we've atomic generation. We're as fast as super-sonics with our work in heat\npneumonics. We have multiple activities in Super Conductivity. We're deep in the miasma\nof Cesium and plasma; Investigating phases of fuel cells and lasers. We're working in ceramics,\nand, get this:\nIf you look around the\nnation we've atomic generation. We're as fast as super-sonics with our work in heat\npneumonics. We have multiple activities in Super Conductivity. We're deep in the miasma\nof Cesium and plasma; Investigating phases of fuel cells and lasers. We're working in ceramics,\nand, get this:\nIf you look around the\nnation we've atomic generation. We're as fast as super-sonics with our work in heat\npneumonics. We have multiple activities in Super Conductivity. We're deep in the miasma\nof Cesium and plasma; Investigating phases of fuel cells and lasers. We're working in ceramics,\nand, get this:\nwe've atomic generation. We're as fast as super-sonics with our work in heat\npneumonics. We have multiple activities in Super Conductivity. We're deep in the miasma\nof Cesium and plasma; Investigating phases of fuel cells and lasers. We're working in ceramics,\nand, get this:\nWe're as fast as super-sonics with our work in heat\npneumonics. We have multiple activities in Super Conductivity. We're deep in the miasma\nof Cesium and plasma; Investigating phases of fuel cells and lasers. We're working in ceramics,\nand, get this:\nwith our work in heat\npneumonics. We have multiple activities in Super Conductivity. We're deep in the miasma\nof Cesium and plasma; Investigating phases of fuel cells and lasers. We're working in ceramics,\nand, get this:\nWe have multiple activities in Super Conductivity. We're deep in the miasma\nof Cesium and plasma; Investigating phases of fuel cells and lasers. We're working in ceramics,\nand, get this:\nin Super Conductivity. We're deep in the miasma\nof Cesium and plasma; Investigating phases of fuel cells and lasers. We're working in ceramics,\nand, get this:\nWe're deep in the miasma\nof Cesium and plasma; Investigating phases of fuel cells and lasers. We're working in ceramics,\nand, get this:\nCesium and plasma; Investigating phases of fuel cells and lasers. We're working in ceramics,\nand, get this:\nInvestigating phases of fuel cells and lasers. We're working in ceramics,\nand, get this:\nof fuel cells and lasers. We're working in ceramics,\nand, get this:\nWe're working in ceramics,\nand, get this:\nget this:"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Magneto - hydro - dynamics!"
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "My goodness! You told me about\nfuel cells, planes and atomic power. But now! Magneto-hydro-dynamics?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Sure. Electricity from a jet\nof very hot gasses. But look at what electric energy does: Over\nthere:"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "What turns the wheels\nand cooks our meals and heats our schools and makes the tools for industry? Electricity.\ncooks our meals and heats our schools and makes the tools for industry? Electricity.\nheats our schools and makes the tools for industry? Electricity.\nmakes the tools for industry? Electricity.\nElectricity."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Say it again!"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Electricity. What's everywhere? It's at the Fair and even more in every store\nand factory? Electricity.\nWhat's everywhere? It's at the Fair and even more in every store\nand factory? Electricity.\nWhat's everywhere? It's at the Fair and even more in every store\nand factory? Electricity.\nIt's at the Fair and even more in every store\nand factory? Electricity.\neven more in every store\nand factory? Electricity.\nfactory? Electricity.\nElectricity."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "I love that word!"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Electricity. What's helps us thrive\nand gives us drive and puts the zing in everything with energy?\nWhat's helps us thrive\nand gives us drive and puts the zing in everything with energy?\nWhat's helps us thrive\nand gives us drive and puts the zing in everything with energy?\ngives us drive and puts the zing in everything with energy?\nputs the zing in everything with energy?\neverything with energy?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Aw, come on. Say it again!"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "E - lec..."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Louder!"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Electricity!"
      },
      {
        "kind": "stage",
        "text": "\"Holiday with Light!\" theme music plays as the audience \"rotates\" into the next chamber:"
      }
    ]
  },
  {
    "scene": "FIVE",
    "title": "THANKSGIVING & MOTHER'S DAY",
    "audios": [
      "Thanksgiving.mp3",
      "tol01.mp3"
    ],
    "lines": [
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Thanksgiving dinner down on\nthe farm. I haven't seen farmer Smith yet. I suppose he's in\nthe barn milking the cows. Hope he's got good candle light to\nwork by."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Good old Ben Franklin. He\nsometimes thinks we're still living back in the 1700's. But for\nyears now the farmer's life, the farmer's load, have been made\nlighter and brighter with electricity. What Ben doesn't know\nis this:"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Everybody's livin' electrically..."
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "...down on the farm."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Life is really changin'\nspectacularly..."
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "...down on the farm."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "They're milkin' the cows\nnow electrically."
      },
      {
        "kind": "line",
        "speaker": "Madame Cow",
        "voice": "cow",
        "text": "I'm never touched by human\nhands!"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Their feed's never off. They feed from a trough electrically.\nThey feed from a trough electrically.\nelectrically."
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Electrically."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "And eggs are incubated \"one - two - three\" electrically!\n\"one - two - three\" electrically!\nelectrically!"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Soooo. Down on the farm. Down on the farm. Down on the wonderful\nfarm.\nDown on the farm. Down on the farm. Down on the wonderful\nfarm.\nDown on the farm. Down on the wonderful\nfarm.\nDown on the wonderful\nfarm."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "You know we've really got\na wonderful turkey this year. Best one we've ever had. Fresh\nfrom the freezer!"
      },
      {
        "kind": "stage",
        "text": "Scene shifts to opposite side of the chamber for \"Mother's Day\" scene."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "There's a new look to\nthis old house and it's not just a \"painted\"\nlook. For someone livin' in\nthis old house went and threw away the\nbook!\nand it's not just a \"painted\"\nlook. For someone livin' in\nthis old house went and threw away the\nbook!\nFor someone livin' in\nthis old house went and threw away the\nbook!\nwent and threw away the\nbook!"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Mother. Mother. She has ceilings that\nlight electrically. Heating and cooking that's\nall flame-free. Snow removers and color\nTV. Working by electricity. And Mother just loves\nto live this way. Her electrical servants\nare here to stay. And each little whim they\nlove to obey! To make every day a Mother's\nDay.\nMother. She has ceilings that\nlight electrically. Heating and cooking that's\nall flame-free. Snow removers and color\nTV. Working by electricity. And Mother just loves\nto live this way. Her electrical servants\nare here to stay. And each little whim they\nlove to obey! To make every day a Mother's\nDay.\nShe has ceilings that\nlight electrically. Heating and cooking that's\nall flame-free. Snow removers and color\nTV. Working by electricity. And Mother just loves\nto live this way. Her electrical servants\nare here to stay. And each little whim they\nlove to obey! To make every day a Mother's\nDay.\nShe has ceilings that\nlight electrically. Heating and cooking that's\nall flame-free. Snow removers and color\nTV. Working by electricity. And Mother just loves\nto live this way. Her electrical servants\nare here to stay. And each little whim they\nlove to obey! To make every day a Mother's\nDay.\nHeating and cooking that's\nall flame-free. Snow removers and color\nTV. Working by electricity. And Mother just loves\nto live this way. Her electrical servants\nare here to stay. And each little whim they\nlove to obey! To make every day a Mother's\nDay.\nSnow removers and color\nTV. Working by electricity. And Mother just loves\nto live this way. Her electrical servants\nare here to stay. And each little whim they\nlove to obey! To make every day a Mother's\nDay.\nWorking by electricity. And Mother just loves\nto live this way. Her electrical servants\nare here to stay. And each little whim they\nlove to obey! To make every day a Mother's\nDay.\nAnd Mother just loves\nto live this way. Her electrical servants\nare here to stay. And each little whim they\nlove to obey! To make every day a Mother's\nDay.\nHer electrical servants\nare here to stay. And each little whim they\nlove to obey! To make every day a Mother's\nDay.\nAnd each little whim they\nlove to obey! To make every day a Mother's\nDay.\nTo make every day a Mother's\nDay."
      },
      {
        "kind": "stage",
        "text": "The Kilowatt Birds sing the \"Holiday with Light!\" theme song as the audience \"rotates\" into the next chamber:"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Holiday. We're on a Happy Holiday. Light and Power all the\nway, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nWe're on a Happy Holiday. Light and Power all the\nway, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nLight and Power all the\nway, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nHurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nToday. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nWe're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nA happy holiday. We're on a Holiday with\nLight!\nWe're on a Holiday with\nLight!"
      }
    ]
  },
  {
    "scene": "SIX",
    "title": "FATHER'S DAY & \"HAPPY BIRTHDAY\"",
    "audios": [
      "FathersDay.mp3"
    ],
    "lines": [
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "What has Father's Day got\nto do with electricity?"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Just look at it this way:"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Meats cost more and drinks cost more and prices go up in the\nlocal store. But \"Total Electric\nLiving\" keeps the cost of living\ndown. \"Total Electric Living\" is the biggest bargain\nin town. But on Father's Day poor dad is glum for what he gets from\nSis and Mum are all of the bills from\nthe other days. Oh. It's always Father\nwho pays.\nand drinks cost more and prices go up in the\nlocal store. But \"Total Electric\nLiving\" keeps the cost of living\ndown. \"Total Electric Living\" is the biggest bargain\nin town. But on Father's Day poor dad is glum for what he gets from\nSis and Mum are all of the bills from\nthe other days. Oh. It's always Father\nwho pays.\nand prices go up in the\nlocal store. But \"Total Electric\nLiving\" keeps the cost of living\ndown. \"Total Electric Living\" is the biggest bargain\nin town. But on Father's Day poor dad is glum for what he gets from\nSis and Mum are all of the bills from\nthe other days. Oh. It's always Father\nwho pays.\nBut \"Total Electric\nLiving\" keeps the cost of living\ndown. \"Total Electric Living\" is the biggest bargain\nin town. But on Father's Day poor dad is glum for what he gets from\nSis and Mum are all of the bills from\nthe other days. Oh. It's always Father\nwho pays.\nkeeps the cost of living\ndown. \"Total Electric Living\" is the biggest bargain\nin town. But on Father's Day poor dad is glum for what he gets from\nSis and Mum are all of the bills from\nthe other days. Oh. It's always Father\nwho pays.\n\"Total Electric Living\" is the biggest bargain\nin town. But on Father's Day poor dad is glum for what he gets from\nSis and Mum are all of the bills from\nthe other days. Oh. It's always Father\nwho pays.\nis the biggest bargain\nin town. But on Father's Day poor dad is glum for what he gets from\nSis and Mum are all of the bills from\nthe other days. Oh. It's always Father\nwho pays.\nBut on Father's Day poor dad is glum for what he gets from\nSis and Mum are all of the bills from\nthe other days. Oh. It's always Father\nwho pays.\npoor dad is glum for what he gets from\nSis and Mum are all of the bills from\nthe other days. Oh. It's always Father\nwho pays.\nfor what he gets from\nSis and Mum are all of the bills from\nthe other days. Oh. It's always Father\nwho pays.\nare all of the bills from\nthe other days. Oh. It's always Father\nwho pays.\nOh. It's always Father\nwho pays."
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Hmmm. Except for the bargain\nhe gets in electricity."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "He gets better light that's nice and bright ensuring daddy better\nsight. To see all the bills from\nthe other days! Oh. It's always Father\nwho pays!\nthat's nice and bright ensuring daddy better\nsight. To see all the bills from\nthe other days! Oh. It's always Father\nwho pays!\nensuring daddy better\nsight. To see all the bills from\nthe other days! Oh. It's always Father\nwho pays!\nTo see all the bills from\nthe other days! Oh. It's always Father\nwho pays!\nOh. It's always Father\nwho pays!"
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Why that's enough to make\npoor dad blow a fuse!"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Shhhh! We never say that around\nhere."
      },
      {
        "kind": "stage",
        "text": "Scene shifts to opposite side of the chamber for the \"Happy Birthday\" scene."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Now there's an extra special\nholiday we'd like to celebrate with you. The \"Kilowatt Birds\"\nand I would like you to remember:"
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Happy Birthday this year and all the years to come! Happy Birthday from us\nto you!\nand all the years to come! Happy Birthday from us\nto you!\nHappy Birthday from us\nto you!"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "To Johnny and Mable, Billy and Gertrude, each and every boy and\ngirl. To Huey and Peter : May the cake be sweater on your Birthday this\nyear. Eddie and Annie, Louise and Fanny. Michael and Pat. Catherine and Matt. Wherever you're at from Power and Light: May your Birthday be bright this year!\nBilly and Gertrude, each and every boy and\ngirl. To Huey and Peter : May the cake be sweater on your Birthday this\nyear. Eddie and Annie, Louise and Fanny. Michael and Pat. Catherine and Matt. Wherever you're at from Power and Light: May your Birthday be bright this year!\neach and every boy and\ngirl. To Huey and Peter : May the cake be sweater on your Birthday this\nyear. Eddie and Annie, Louise and Fanny. Michael and Pat. Catherine and Matt. Wherever you're at from Power and Light: May your Birthday be bright this year!\nTo Huey and Peter : May the cake be sweater on your Birthday this\nyear. Eddie and Annie, Louise and Fanny. Michael and Pat. Catherine and Matt. Wherever you're at from Power and Light: May your Birthday be bright this year!\nMay the cake be sweater on your Birthday this\nyear. Eddie and Annie, Louise and Fanny. Michael and Pat. Catherine and Matt. Wherever you're at from Power and Light: May your Birthday be bright this year!\non your Birthday this\nyear. Eddie and Annie, Louise and Fanny. Michael and Pat. Catherine and Matt. Wherever you're at from Power and Light: May your Birthday be bright this year!\nEddie and Annie, Louise and Fanny. Michael and Pat. Catherine and Matt. Wherever you're at from Power and Light: May your Birthday be bright this year!\nLouise and Fanny. Michael and Pat. Catherine and Matt. Wherever you're at from Power and Light: May your Birthday be bright this year!\nMichael and Pat. Catherine and Matt. Wherever you're at from Power and Light: May your Birthday be bright this year!\nCatherine and Matt. Wherever you're at from Power and Light: May your Birthday be bright this year!\nWherever you're at from Power and Light: May your Birthday be bright this year!\nfrom Power and Light: May your Birthday be bright this year!\nMay your Birthday be bright this year!\nthis year!"
      },
      {
        "kind": "stage",
        "text": "\"Holiday with Light!\" theme music plays as the audience \"rotates\" into the next chamber:"
      }
    ]
  },
  {
    "scene": "SEVEN",
    "title": "FOURTH OF JULY",
    "audios": [
      "FourthOfJuly.mp3",
      "tol01.mp3"
    ],
    "lines": [
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Thank you very much, Your\nHonor. Your short talk on motherhood, brotherhood and the neighborhood\nwill long be remembered. Not so much for what you said but that\nit took you only four hours to say it. But now it is my pleasure\nand privilege to introduce to you a man we all love and look\nup to. A man who, to a great degree, made the Fourth of July\nwhat it is: Ben Franklin!\nBut now it is my pleasure\nand privilege to introduce to you a man we all love and look\nup to. A man who, to a great degree, made the Fourth of July\nwhat it is: Ben Franklin!\nBut now it is my pleasure\nand privilege to introduce to you a man we all love and look\nup to. A man who, to a great degree, made the Fourth of July\nwhat it is: Ben Franklin!"
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "What can you say about\nthe Fourth of July that hasn't been said before? Leave it this\nway: It's a solemn day and a happy day. It's America's Birthday\nand a second Birthday for each of us. A great American spoke\nfor all of us when he, George M. Cohen, wrote about this day: \"I'm a Yankee Doodle\nDandy, Yankee Doodle Do-or-die. A real live nephew of\nmy Uncle Sam born on the Fourth of\nJuly\" And so \"Happy Birthday\"\nUSA! And many, many more!\nA great American spoke\nfor all of us when he, George M. Cohen, wrote about this day: \"I'm a Yankee Doodle\nDandy, Yankee Doodle Do-or-die. A real live nephew of\nmy Uncle Sam born on the Fourth of\nJuly\" And so \"Happy Birthday\"\nUSA! And many, many more!\nA great American spoke\nfor all of us when he, George M. Cohen, wrote about this day: \"I'm a Yankee Doodle\nDandy, Yankee Doodle Do-or-die. A real live nephew of\nmy Uncle Sam born on the Fourth of\nJuly\" And so \"Happy Birthday\"\nUSA! And many, many more!\n\"I'm a Yankee Doodle\nDandy, Yankee Doodle Do-or-die. A real live nephew of\nmy Uncle Sam born on the Fourth of\nJuly\"\nYankee Doodle Do-or-die. A real live nephew of\nmy Uncle Sam born on the Fourth of\nJuly\"\nA real live nephew of\nmy Uncle Sam born on the Fourth of\nJuly\"\nborn on the Fourth of\nJuly\"\nAnd so \"Happy Birthday\"\nUSA! And many, many more!"
      },
      {
        "kind": "stage",
        "text": "The chamber explodes in a \"fireworks display\" that lasts for several minutes before The Kilowatt Birds sing the \"Holiday with Light!\" theme song as the audience \"rotates\" into the next chamber:"
      },
      {
        "kind": "line",
        "speaker": "Kilowatt Birds",
        "voice": "birds",
        "text": "Holiday. We're on a Happy Holiday. Light and Power all the\nway, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nWe're on a Happy Holiday. Light and Power all the\nway, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nLight and Power all the\nway, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nHurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nToday. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nWe're on a holiday. A happy holiday. We're on a Holiday with\nLight!\nA happy holiday. We're on a Holiday with\nLight!\nWe're on a Holiday with\nLight!"
      }
    ]
  },
  {
    "scene": "EIGHT",
    "title": "CHRISTMAS & FINALE",
    "audios": [
      "XmasAndFinale.mp3"
    ],
    "lines": [
      {
        "kind": "stage",
        "text": "\"Holiday with Light!\" theme song from the previous chamber fades into a chimes version of \"Deck the Halls\" which plays under this scene until the finale."
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "I've enjoyed this \"Holiday\nwith Light\" so much I think I'll take another swing around\nthe building."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "Well, watch out for the kids\nin that Santa Claus outfit."
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "Don't worry, and thanks\nfor inviting me, Reddy."
      },
      {
        "kind": "line",
        "speaker": "Reddy",
        "voice": "reddy",
        "text": "My pleasure, Ben. And it's been a particular\npleasure to have everyone here because the Investor Owned Electric\nCompanies feel you are neighbors and friends. We promise to keep on\nproviding an abundance of electric energy to serve you in this\ncountry.\nAnd it's been a particular\npleasure to have everyone here because the Investor Owned Electric\nCompanies feel you are neighbors and friends. We promise to keep on\nproviding an abundance of electric energy to serve you in this\ncountry.\nAnd it's been a particular\npleasure to have everyone here because the Investor Owned Electric\nCompanies feel you are neighbors and friends. We promise to keep on\nproviding an abundance of electric energy to serve you in this\ncountry.\nWe promise to keep on\nproviding an abundance of electric energy to serve you in this\ncountry.\nWe promise to keep on\nproviding an abundance of electric energy to serve you in this\ncountry."
      },
      {
        "kind": "line",
        "speaker": "Ben",
        "voice": "ben",
        "text": "I know! In every one of the\nthirteen states!"
      },
      {
        "kind": "stage",
        "text": "Holiday. We're on a Happy Holiday. A celebration bright and gay, you've got to shout hurray! Hurray! Today. Tonight. We're on a Holiday with Light. Light. Light. Light. Lights will twinkle. They will sprinkle happiness today. We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "We're on a Happy Holiday. A celebration bright and gay, you've got to shout hurray! Hurray! Today. Tonight. We're on a Holiday with Light. Light. Light. Light. Lights will twinkle. They will sprinkle happiness today. We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "A celebration bright and gay, you've got to shout hurray! Hurray! Today. Tonight. We're on a Holiday with Light. Light. Light. Light. Lights will twinkle. They will sprinkle happiness today. We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "you've got to shout hurray! Hurray! Today. Tonight. We're on a Holiday with Light. Light. Light. Light. Lights will twinkle. They will sprinkle happiness today. We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "Hurray! Today. Tonight. We're on a Holiday with Light. Light. Light. Light. Lights will twinkle. They will sprinkle happiness today. We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "Today. Tonight. We're on a Holiday with Light. Light. Light. Light. Lights will twinkle. They will sprinkle happiness today. We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "We're on a Holiday with Light. Light. Light. Light. Lights will twinkle. They will sprinkle happiness today. We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "Light. Light. Light. Lights will twinkle. They will sprinkle happiness today. We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "Light. Light. Lights will twinkle. They will sprinkle happiness today. We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "Light. Lights will twinkle. They will sprinkle happiness today. We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "Lights will twinkle. They will sprinkle happiness today. We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "They will sprinkle happiness today. We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "We're on a holiday! Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "Cares will lighten, smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "smiles will brighten all along the way. We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "We're on a holiday! Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "Holiday. We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "We're on a Happy Holiday. Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "Light and Power all the way, you've got to shout hurray! Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "Hurray! Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "Today. Tonight. We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "We're on a holiday. A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "A happy holiday. We're on a Holiday with Light!"
      },
      {
        "kind": "stage",
        "text": "We're on a Holiday with Light!"
      }
    ]
  }
];
