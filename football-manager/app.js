const teams = [
  {
    id: "galatasaray",
    name: "Galatasaray",
    shortName: "GS",
    city: "İstanbul",
    stadium: "Rams Park",
    capacity: 52650,
    manager: "Okan Buruk",
    formation: "4-2-3-1",
    colors: { primary: "#fcb040", secondary: "#a90808" },
    morale: "Çok Yüksek",
    form: ["G", "G", "B", "G", "G"],
    attack: 88,
    midfield: 85,
    defense: 83,
    overall: 86,
    keyPlayers: ["Mauro Icardi", "Dries Mertens", "Lucas Torreira"],
    players: [
      { name: "Fernando Muslera", position: "GK", age: 37, overall: 85, attributes: { refleks: 87, liderlik: 88, ayak: 80 } },
      { name: "Sacha Boey", position: "RB", age: 23, overall: 82, attributes: { hiz: 90, dayaniklilik: 86, topKontrol: 78 } },
      { name: "Victor Nelsson", position: "CB", age: 25, overall: 81, attributes: { markaj: 85, hava: 82, pozisyon: 83 } },
      { name: "Abdülkerim Bardakcı", position: "CB", age: 29, overall: 80, attributes: { markaj: 83, pas: 78, fizik: 81 } },
      { name: "Angeliño", position: "LB", age: 26, overall: 82, attributes: { orta: 86, hiz: 84, dayaniklilik: 82 } },
      { name: "Lucas Torreira", position: "DM", age: 27, overall: 84, attributes: { topKazanma: 88, agresiflik: 85, pas: 80 } },
      { name: "Kerem Demirbay", position: "CM", age: 30, overall: 82, attributes: { pas: 86, sut: 78, oyunKurma: 84 } },
      { name: "Hakim Ziyech", position: "RW", age: 30, overall: 84, attributes: { sut: 83, pas: 86, yaraticilik: 88 } },
      { name: "Dries Mertens", position: "CAM", age: 36, overall: 84, attributes: { vizyon: 88, bitiricilik: 82, pas: 85 } },
      { name: "Kerem Aktürkoğlu", position: "LW", age: 24, overall: 83, attributes: { hiz: 90, dripling: 85, bitiricilik: 80 } },
      { name: "Mauro Icardi", position: "ST", age: 30, overall: 89, attributes: { bitiricilik: 92, pozisyon: 88, hava: 84 } },
      { name: "Kaan Ayhan", position: "CB", age: 28, overall: 78, attributes: { markaj: 80, pas: 76, cokYonluluk: 82 } },
      { name: "Sergio Oliveira", position: "CM", age: 31, overall: 79, attributes: { sut: 82, pas: 81, duranTop: 84 } },
      { name: "Barış Alper Yılmaz", position: "RW", age: 23, overall: 77, attributes: { hiz: 88, pres: 82, dayaniklilik: 85 } },
      { name: "Tete", position: "RW", age: 23, overall: 79, attributes: { dripling: 84, hiz: 86, sut: 78 } },
      { name: "Wilfried Zaha", position: "LW", age: 31, overall: 83, attributes: { dripling: 88, sut: 80, mucadele: 82 } },
      { name: "Halil Dervişoğlu", position: "ST", age: 23, overall: 75, attributes: { bitiricilik: 77, hareket: 78, pas: 72 } }
    ]
  },
  {
    id: "fenerbahce",
    name: "Fenerbahçe",
    shortName: "FB",
    city: "İstanbul",
    stadium: "Ülker Stadyumu",
    capacity: 47500,
    manager: "İsmail Kartal",
    formation: "4-3-3",
    colors: { primary: "#f7e300", secondary: "#002d62" },
    morale: "Yüksek",
    form: ["G", "G", "G", "M", "G"],
    attack: 87,
    midfield: 84,
    defense: 82,
    overall: 85,
    keyPlayers: ["Edin Džeko", "Dusan Tadić", "Fred"],
    players: [
      { name: "Dominik Livakovic", position: "GK", age: 28, overall: 84, attributes: { refleks: 86, oyunKurma: 80, konsantrasyon: 82 } },
      { name: "Bright Osayi-Samuel", position: "RB", age: 25, overall: 79, attributes: { hiz: 92, guc: 82, pres: 80 } },
      { name: "Rodrigo Becão", position: "CB", age: 27, overall: 81, attributes: { markaj: 84, hava: 85, agresiflik: 83 } },
      { name: "Alexander Djiku", position: "CB", age: 28, overall: 80, attributes: { markaj: 83, pas: 77, pozisyon: 82 } },
      { name: "Ferdi Kadıoğlu", position: "LB", age: 24, overall: 82, attributes: { cokYonluluk: 88, hiz: 86, pas: 82 } },
      { name: "Sebastian Szymański", position: "CM", age: 24, overall: 83, attributes: { pas: 86, sut: 82, yaraticilik: 84 } },
      { name: "Fred", position: "CM", age: 30, overall: 84, attributes: { pres: 88, pas: 82, topKazanma: 85 } },
      { name: "İrfan Can Kahveci", position: "RW", age: 28, overall: 81, attributes: { sut: 82, duranTop: 84, oyunKurma: 83 } },
      { name: "Dusan Tadić", position: "LW", age: 34, overall: 85, attributes: { vizyon: 90, pas: 88, penalti: 86 } },
      { name: "Cengiz Ünder", position: "RW", age: 26, overall: 82, attributes: { sut: 84, hiz: 87, dripling: 86 } },
      { name: "Edin Džeko", position: "ST", age: 37, overall: 86, attributes: { bitiricilik: 89, hava: 86, vizyon: 81 } },
      { name: "Michy Batshuayi", position: "ST", age: 29, overall: 82, attributes: { bitiricilik: 84, guc: 82, hareket: 83 } },
      { name: "Joshua King", position: "FW", age: 31, overall: 78, attributes: { hiz: 85, fizik: 82, pres: 80 } },
      { name: "Mert Hakan Yandaş", position: "CM", age: 28, overall: 77, attributes: { pas: 78, sut: 76, mucadele: 80 } },
      { name: "İsmail Yüksek", position: "DM", age: 24, overall: 80, attributes: { topKazanma: 84, enerji: 86, pas: 78 } },
      { name: "Jayden Oosterwolde", position: "LB", age: 22, overall: 78, attributes: { hiz: 88, fizik: 84, topKontrol: 76 } },
      { name: "Miguel Crespo", position: "CM", age: 27, overall: 79, attributes: { pres: 82, pas: 78, topSurme: 80 } }
    ]
  },
  {
    id: "besiktas",
    name: "Beşiktaş",
    shortName: "BJK",
    city: "İstanbul",
    stadium: "Tüpraş Stadyumu",
    capacity: 42000,
    manager: "Rıza Çalımbay",
    formation: "4-2-3-1",
    colors: { primary: "#ffffff", secondary: "#000000" },
    morale: "Orta",
    form: ["M", "B", "G", "M", "G"],
    attack: 82,
    midfield: 80,
    defense: 79,
    overall: 81,
    keyPlayers: ["Cenk Tosun", "Rachid Ghezzal", "Alex Oxlade-Chamberlain"],
    players: [
      { name: "Mert Günok", position: "GK", age: 34, overall: 79, attributes: { refleks: 81, uzunTop: 76, liderlik: 80 } },
      { name: "Onur Bulut", position: "RB", age: 29, overall: 77, attributes: { dayaniklilik: 84, orta: 78, pres: 80 } },
      { name: "Omar Colley", position: "CB", age: 30, overall: 80, attributes: { markaj: 84, guc: 86, hava: 82 } },
      { name: "Daniel Amartey", position: "CB", age: 28, overall: 78, attributes: { fizik: 82, pas: 75, pozisyon: 79 } },
      { name: "Arthur Masuaku", position: "LB", age: 29, overall: 78, attributes: { dripling: 80, hiz: 82, orta: 79 } },
      { name: "Salih Uçan", position: "CM", age: 29, overall: 80, attributes: { pas: 83, vizyon: 82, topKazanma: 77 } },
      { name: "Gedson Fernandes", position: "CM", age: 24, overall: 81, attributes: { pres: 86, dripling: 82, topSurme: 81 } },
      { name: "Rachid Ghezzal", position: "RW", age: 31, overall: 82, attributes: { pas: 85, duranTop: 86, vizyon: 84 } },
      { name: "Alex Oxlade-Chamberlain", position: "CAM", age: 30, overall: 80, attributes: { hiz: 82, sut: 80, dripling: 81 } },
      { name: "Milot Rashica", position: "LW", age: 27, overall: 80, attributes: { hiz: 88, sut: 79, dripling: 83 } },
      { name: "Cenk Tosun", position: "ST", age: 32, overall: 81, attributes: { bitiricilik: 84, hava: 81, oyunKurma: 77 } },
      { name: "Vincent Aboubakar", position: "ST", age: 31, overall: 83, attributes: { bitiricilik: 86, fizik: 85, dripling: 78 } },
      { name: "Jackson Muleka", position: "FW", age: 23, overall: 75, attributes: { hiz: 86, hareket: 80, pres: 79 } },
      { name: "Jean Onana", position: "DM", age: 23, overall: 76, attributes: { fizik: 84, topKazanma: 82, pas: 70 } },
      { name: "Amir Hadžiahmetović", position: "DM", age: 26, overall: 78, attributes: { pas: 80, pozisyon: 79, disiplin: 82 } },
      { name: "Necip Uysal", position: "CB", age: 32, overall: 74, attributes: { liderlik: 82, markaj: 76, dayaniklilik: 81 } },
      { name: "Umut Meraş", position: "LB", age: 27, overall: 74, attributes: { hiz: 80, orta: 76, caliskanlik: 78 } }
    ]
  },
  {
    id: "trabzonspor",
    name: "Trabzonspor",
    shortName: "TS",
    city: "Trabzon",
    stadium: "Papara Park",
    capacity: 40461,
    manager: "Abdullah Avcı",
    formation: "4-2-3-1",
    colors: { primary: "#7b0d1e", secondary: "#3c6aa6" },
    morale: "Yüksek",
    form: ["G", "G", "G", "B", "G"],
    attack: 83,
    midfield: 81,
    defense: 80,
    overall: 82,
    keyPlayers: ["Edin Višca", "Trezeguet", "Paul Onuachu"],
    players: [
      { name: "Uğurcan Çakır", position: "GK", age: 27, overall: 84, attributes: { refleks: 87, liderlik: 85, ayak: 78 } },
      { name: "Jens Stryger Larsen", position: "RB", age: 32, overall: 77, attributes: { dayaniklilik: 83, orta: 79, disiplin: 80 } },
      { name: "Stefano Denswil", position: "CB", age: 30, overall: 78, attributes: { pas: 80, markaj: 81, oyunKurma: 79 } },
      { name: "Joaquín Fernández", position: "CB", age: 27, overall: 77, attributes: { markaj: 82, hava: 80, pozisyon: 80 } },
      { name: "Eren Elmalı", position: "LB", age: 22, overall: 76, attributes: { hiz: 82, topKontrol: 78, caliskanlik: 82 } },
      { name: "Batista Mendy", position: "DM", age: 23, overall: 79, attributes: { topKazanma: 84, fizik: 82, pas: 76 } },
      { name: "Anastasios Bakasetas", position: "CAM", age: 30, overall: 82, attributes: { sut: 84, duranTop: 87, vizyon: 82 } },
      { name: "Edin Višca", position: "RW", age: 33, overall: 83, attributes: { hiz: 86, asist: 86, dripling: 80 } },
      { name: "Trezeguet", position: "LW", age: 28, overall: 82, attributes: { sut: 82, hiz: 85, dripling: 84 } },
      { name: "Paul Onuachu", position: "ST", age: 29, overall: 81, attributes: { hava: 92, bitiricilik: 82, fizik: 86 } },
      { name: "Enis Destan", position: "ST", age: 21, overall: 77, attributes: { bitiricilik: 79, hava: 82, hareket: 78 } },
      { name: "Djaniny", position: "FW", age: 32, overall: 78, attributes: { hiz: 83, cokYonluluk: 80, dripling: 79 } },
      { name: "Manolis Siopis", position: "DM", age: 29, overall: 77, attributes: { pres: 88, pas: 75, dayaniklilik: 87 } },
      { name: "Enis Bardhi", position: "AM", age: 27, overall: 79, attributes: { sut: 82, pas: 80, yaraticilik: 81 } },
      { name: "Mehmet Can Aydın", position: "RB", age: 21, overall: 73, attributes: { hiz: 84, caliskanlik: 78, topKontrol: 74 } },
      { name: "Hüseyin Türkmen", position: "CB", age: 25, overall: 74, attributes: { markaj: 76, hava: 78, dayaniklilik: 79 } }
    ]
  },
  {
    id: "basaksehir",
    name: "Başakşehir FK",
    shortName: "IBFK",
    city: "İstanbul",
    stadium: "Fatih Terim Stadı",
    capacity: 17600,
    manager: "Çağdaş Atan",
    formation: "3-4-2-1",
    colors: { primary: "#ff5f2e", secondary: "#09203f" },
    morale: "Orta",
    form: ["B", "G", "M", "G", "G"],
    attack: 79,
    midfield: 78,
    defense: 77,
    overall: 78,
    keyPlayers: ["Danijel Aleksić", "Serdar Gürler", "Joao Figueiredo"],
    players: [
      { name: "Volkan Babacan", position: "GK", age: 35, overall: 77, attributes: { refleks: 80, liderlik: 82, hava: 76 } },
      { name: "Leo Dubois", position: "RWB", age: 29, overall: 79, attributes: { orta: 82, hiz: 82, disiplin: 80 } },
      { name: "Youssouf Ndayishimiye", position: "CB", age: 24, overall: 80, attributes: { fizik: 85, pas: 78, markaj: 82 } },
      { name: "Ahmed Touba", position: "CB", age: 25, overall: 76, attributes: { hava: 80, markaj: 78, pas: 72 } },
      { name: "Lucas Lima", position: "LWB", age: 31, overall: 78, attributes: { orta: 82, hiz: 80, duranTop: 80 } },
      { name: "Berkay Özcan", position: "CM", age: 25, overall: 77, attributes: { pas: 80, mucadele: 78, disiplin: 79 } },
      { name: "Mahmut Tekdemir", position: "DM", age: 35, overall: 75, attributes: { disiplin: 86, topKazanma: 80, pas: 76 } },
      { name: "Danijel Aleksić", position: "CAM", age: 32, overall: 80, attributes: { duranTop: 85, sut: 82, pas: 81 } },
      { name: "Serdar Gürler", position: "RW", age: 31, overall: 77, attributes: { hiz: 84, sut: 79, caliskanlik: 82 } },
      { name: "Joao Figueiredo", position: "ST", age: 26, overall: 78, attributes: { bitiricilik: 80, fizik: 82, hareket: 79 } },
      { name: "Philippe Keny", position: "FW", age: 24, overall: 77, attributes: { hiz: 86, dripling: 80, pres: 78 } },
      { name: "Patryk Szysz", position: "FW", age: 25, overall: 75, attributes: { hiz: 83, dripling: 78, sut: 76 } },
      { name: "Deniz Türüç", position: "LW", age: 30, overall: 79, attributes: { duranTop: 84, sut: 80, orta: 82 } },
      { name: "Stefano Okaka", position: "ST", age: 34, overall: 78, attributes: { fizik: 88, bitiricilik: 80, pres: 78 } },
      { name: "Mehmet Topal", position: "DM", age: 37, overall: 72, attributes: { deneyim: 86, pas: 74, liderlik: 84 } }
    ]
  },
  {
    id: "adanademir",
    name: "Adana Demirspor",
    shortName: "ADS",
    city: "Adana",
    stadium: "Yeni Adana Stadyumu",
    capacity: 33243,
    manager: "Patrick Kluivert",
    formation: "4-2-3-1",
    colors: { primary: "#1b98e0", secondary: "#09203f" },
    morale: "Yüksek",
    form: ["G", "G", "G", "M", "G"],
    attack: 82,
    midfield: 78,
    defense: 76,
    overall: 80,
    keyPlayers: ["Younès Belhanda", "Mario Balotelli", "Yusuf Sarı"],
    players: [
      { name: "Ertuğrul Çetin", position: "GK", age: 23, overall: 73, attributes: { refleks: 76, ayak: 72, potansiyel: 80 } },
      { name: "Jonas Svensson", position: "RB", age: 30, overall: 77, attributes: { dayaniklilik: 83, orta: 79, disiplin: 80 } },
      { name: "Semih Güler", position: "CB", age: 28, overall: 76, attributes: { markaj: 79, hava: 78, liderlik: 78 } },
      { name: "Jose Rodriguez", position: "CB", age: 29, overall: 75, attributes: { fizik: 80, pas: 76, pozisyon: 77 } },
      { name: "Kevin Rodrigues", position: "LB", age: 29, overall: 78, attributes: { hiz: 84, orta: 81, dayaniklilik: 83 } },
      { name: "Badou Ndiaye", position: "DM", age: 32, overall: 77, attributes: { pres: 82, topKazanma: 80, pas: 75 } },
      { name: "Benjamin Stambouli", position: "DM", age: 32, overall: 76, attributes: { disiplin: 84, topKazanma: 80, pas: 76 } },
      { name: "Younès Belhanda", position: "CAM", age: 33, overall: 82, attributes: { vizyon: 85, sut: 82, liderlik: 84 } },
      { name: "Emre Akbaba", position: "AM", age: 30, overall: 79, attributes: { sut: 80, pas: 79, kosu: 78 } },
      { name: "Yusuf Sarı", position: "RW", age: 25, overall: 77, attributes: { hiz: 90, dripling: 84, orta: 78 } },
      { name: "Nani", position: "LW", age: 36, overall: 78, attributes: { dripling: 84, pas: 80, yaraticilik: 82 } },
      { name: "Mario Balotelli", position: "ST", age: 33, overall: 82, attributes: { bitiricilik: 85, guc: 86, duranTop: 83 } },
      { name: "Mbaye Niang", position: "FW", age: 29, overall: 79, attributes: { hiz: 84, sut: 80, hareket: 79 } },
      { name: "Cherif Ndiaye", position: "ST", age: 28, overall: 77, attributes: { fizik: 82, bitiricilik: 78, pres: 78 } },
      { name: "Henry Onyekuru", position: "LW", age: 26, overall: 78, attributes: { hiz: 93, dripling: 86, sut: 76 } }
    ]
  },
  {
    id: "kasimpasa",
    name: "Kasımpaşa",
    shortName: "KAS",
    city: "İstanbul",
    stadium: "Recep Tayyip Erdoğan Stadı",
    capacity: 14534,
    manager: "Kemal Özdeş",
    formation: "4-2-3-1",
    colors: { primary: "#0050aa", secondary: "#ffffff" },
    morale: "Orta",
    form: ["G", "M", "B", "G", "B"],
    attack: 75,
    midfield: 74,
    defense: 72,
    overall: 74,
    keyPlayers: ["Aytaç Kara", "Haris Hajradinovic", "Mamadou Fall"],
    players: [
      { name: "Andreas Gianniotis", position: "GK", age: 30, overall: 74, attributes: { refleks: 78, oyunKurma: 72, liderlik: 75 } },
      { name: "Florent Hadergjonaj", position: "RB", age: 29, overall: 75, attributes: { dayaniklilik: 82, orta: 78, dripling: 74 } },
      { name: "Ryan Donk", position: "CB", age: 36, overall: 73, attributes: { liderlik: 84, markaj: 76, hava: 78 } },
      { name: "Tarkan Serbest", position: "CB", age: 29, overall: 72, attributes: { pas: 74, disiplin: 78, markaj: 74 } },
      { name: "Mortadha Ben Ouanes", position: "LB", age: 29, overall: 74, attributes: { orta: 80, caliskanlik: 82, hiz: 78 } },
      { name: "Aytaç Kara", position: "CM", age: 30, overall: 76, attributes: { sut: 80, liderlik: 82, pas: 79 } },
      { name: "Haris Hajradinovic", position: "CAM", age: 29, overall: 76, attributes: { pas: 82, duranTop: 80, yaraticilik: 81 } },
      { name: "Mamadou Fall", position: "RW", age: 21, overall: 75, attributes: { hiz: 90, dripling: 83, sut: 74 } },
      { name: "Samuel Bastien", position: "CM", age: 26, overall: 74, attributes: { dayaniklilik: 82, pas: 76, dripling: 75 } },
      { name: "Stephane Bahoken", position: "ST", age: 31, overall: 75, attributes: { guc: 82, bitiricilik: 77, hava: 78 } },
      { name: "Mounir Chouiar", position: "LW", age: 24, overall: 74, attributes: { dripling: 82, hiz: 84, sut: 73 } },
      { name: "Gökhan Gül", position: "DM", age: 24, overall: 72, attributes: { topKazanma: 76, pas: 73, pres: 76 } },
      { name: "Ahmet Engin", position: "LW", age: 26, overall: 73, attributes: { hiz: 86, dripling: 80, sut: 72 } },
      { name: "Yasin Özcan", position: "LB", age: 18, overall: 70, attributes: { hiz: 84, potansiyel: 86, dripling: 72 } }
    ]
  },
  {
    id: "sivasspor",
    name: "Sivasspor",
    shortName: "SIV",
    city: "Sivas",
    stadium: "Sivas 4 Eylül Stadyumu",
    capacity: 27532,
    manager: "Bülent Uygun",
    formation: "4-1-4-1",
    colors: { primary: "#d62828", secondary: "#ffffff" },
    morale: "Orta",
    form: ["B", "G", "M", "B", "G"],
    attack: 74,
    midfield: 74,
    defense: 73,
    overall: 74,
    keyPlayers: ["Max Gradel", "Aaron Appindangoye", "Clinton N'Jie"],
    players: [
      { name: "Ali Şaşal Vural", position: "GK", age: 32, overall: 73, attributes: { refleks: 76, liderlik: 78, cizgi: 74 } },
      { name: "Uğur Çiftçi", position: "LB", age: 31, overall: 74, attributes: { hiz: 80, orta: 78, dayaniklilik: 82 } },
      { name: "Caner Osmanpaşa", position: "CB", age: 35, overall: 73, attributes: { markaj: 76, liderlik: 82, hava: 74 } },
      { name: "Aaron Appindangoye", position: "CB", age: 31, overall: 74, attributes: { fizik: 82, hava: 80, pozisyon: 76 } },
      { name: "Barış Yardımcı", position: "RB", age: 31, overall: 72, attributes: { dayaniklilik: 82, orta: 76, disiplin: 78 } },
      { name: "Isaac Cofie", position: "DM", age: 31, overall: 73, attributes: { topKazanma: 78, pres: 79, pas: 72 } },
      { name: "Hakan Arslan", position: "CM", age: 35, overall: 75, attributes: { liderlik: 84, pas: 76, sut: 75 } },
      { name: "Max Gradel", position: "LW", age: 35, overall: 77, attributes: { dripling: 84, sut: 78, duranTop: 80 } },
      { name: "Clinton N'Jie", position: "RW", age: 30, overall: 75, attributes: { hiz: 92, dripling: 82, sut: 74 } },
      { name: "Karol Angielski", position: "ST", age: 27, overall: 74, attributes: { bitiricilik: 77, hava: 76, hareket: 74 } },
      { name: "Emrah Başsan", position: "AM", age: 31, overall: 74, attributes: { pas: 77, sut: 75, vizyon: 76 } },
      { name: "Fayçal Fajr", position: "CM", age: 34, overall: 76, attributes: { duranTop: 84, pas: 80, liderlik: 82 } },
      { name: "Kerem Atakan Kesgin", position: "CM", age: 21, overall: 71, attributes: { potansiyel: 84, pas: 74, vizyon: 73 } },
      { name: "Rey Manaj", position: "ST", age: 26, overall: 75, attributes: { fizik: 82, sut: 78, pres: 80 } }
    ]
  },
  {
    id: "antalyaspor",
    name: "Fraport TAV Antalyaspor",
    shortName: "ANT",
    city: "Antalya",
    stadium: "Corendon Airlines Park",
    capacity: 32000,
    manager: "Nuri Şahin",
    formation: "4-2-3-1",
    colors: { primary: "#e63946", secondary: "#ffffff" },
    morale: "Yüksek",
    form: ["G", "G", "B", "G", "G"],
    attack: 78,
    midfield: 77,
    defense: 76,
    overall: 77,
    keyPlayers: ["Adam Buksa", "Fernando", "Haji Wright"],
    players: [
      { name: "Helton Leite", position: "GK", age: 32, overall: 75, attributes: { refleks: 78, oyunKurma: 76, liderlik: 77 } },
      { name: "Bünyamin Balcı", position: "RB", age: 23, overall: 74, attributes: { hiz: 84, dayaniklilik: 82, pres: 76 } },
      { name: "Veysel Sarı", position: "CB", age: 34, overall: 74, attributes: { liderlik: 84, markaj: 76, hava: 78 } },
      { name: "Bahi", position: "CB", age: 26, overall: 73, attributes: { hiz: 78, markaj: 76, pas: 70 } },
      { name: "Güray Vural", position: "LB", age: 35, overall: 74, attributes: { orta: 80, hiz: 80, deneyim: 84 } },
      { name: "Fernando", position: "DM", age: 36, overall: 77, attributes: { liderlik: 86, pas: 78, topKazanma: 79 } },
      { name: "Ufuk Akyol", position: "CM", age: 25, overall: 73, attributes: { topKazanma: 76, pres: 78, pas: 72 } },
      { name: "Doğukan Sinik", position: "LW", age: 24, overall: 76, attributes: { hiz: 86, dripling: 82, sut: 74 } },
      { name: "Alassane Ndao", position: "RW", age: 26, overall: 77, attributes: { hiz: 92, dripling: 84, asist: 78 } },
      { name: "Haji Wright", position: "ST", age: 25, overall: 78, attributes: { bitiricilik: 80, fizik: 82, hiz: 84 } },
      { name: "Adam Buksa", position: "ST", age: 27, overall: 79, attributes: { hava: 88, bitiricilik: 82, guc: 84 } },
      { name: "Admir Mehmedi", position: "AM", age: 32, overall: 75, attributes: { vizyon: 80, pas: 78, sut: 76 } },
      { name: "Bahadır Öztürk", position: "CB", age: 27, overall: 72, attributes: { markaj: 75, hava: 76, dayaniklilik: 78 } },
      { name: "Shoya Nakajima", position: "LW", age: 28, overall: 76, attributes: { yaraticilik: 84, dripling: 86, sut: 74 } }
    ]
  },
  {
    id: "alanyaspor",
    name: "Corendon Alanyaspor",
    shortName: "ALA",
    city: "Alanya",
    stadium: "Bahçeşehir Okulları Stadı",
    capacity: 10842,
    manager: "Fatih Tekke",
    formation: "4-2-3-1",
    colors: { primary: "#ff8c42", secondary: "#0b8457" },
    morale: "Orta",
    form: ["M", "B", "G", "M", "G"],
    attack: 75,
    midfield: 74,
    defense: 73,
    overall: 74,
    keyPlayers: ["Efkan Bekiroğlu", "Koka", "Fidan Aliti"],
    players: [
      { name: "Runar Alex Rúnarsson", position: "GK", age: 28, overall: 74, attributes: { refleks: 78, oyunKurma: 76, liderlik: 75 } },
      { name: "Fidan Aliti", position: "CB", age: 30, overall: 75, attributes: { markaj: 78, solAyak: 80, hava: 76 } },
      { name: "Furkan Bayır", position: "CB", age: 23, overall: 72, attributes: { potansiyel: 82, markaj: 74, hiz: 75 } },
      { name: "Yusuf Özdemir", position: "LB", age: 24, overall: 71, attributes: { hiz: 82, orta: 74, dayaniklilik: 78 } },
      { name: "Loide Augusto", position: "RB", age: 24, overall: 72, attributes: { hiz: 84, dripling: 77, pres: 76 } },
      { name: "Joao Novais", position: "CM", age: 28, overall: 75, attributes: { pas: 82, sut: 78, duranTop: 80 } },
      { name: "Efkan Bekiroğlu", position: "CAM", age: 27, overall: 76, attributes: { vizyon: 82, pas: 80, sut: 78 } },
      { name: "Oussama Rashid", position: "CM", age: 31, overall: 74, attributes: { sut: 76, pas: 79, liderlik: 78 } },
      { name: "Koka", position: "ST", age: 30, overall: 76, attributes: { bitiricilik: 80, hava: 82, fizik: 80 } },
      { name: "Carlos Eduardo", position: "LW", age: 27, overall: 75, attributes: { dripling: 80, sut: 77, hiz: 82 } },
      { name: "Oguz Aydın", position: "RW", age: 23, overall: 73, attributes: { hiz: 90, dripling: 85, asist: 74 } },
      { name: "Jure Balkovec", position: "LB", age: 28, overall: 73, attributes: { duranTop: 80, orta: 78, disiplin: 76 } },
      { name: "Yusuf Karagöz", position: "CM", age: 22, overall: 70, attributes: { potansiyel: 82, pas: 74, vizyon: 72 } },
      { name: "Daniel Candeias", position: "RW", age: 35, overall: 72, attributes: { deneyim: 82, vizyon: 76, liderlik: 78 } }
    ]
  },
  {
    id: "kayserispor",
    name: "Yukatel Kayserispor",
    shortName: "KYS",
    city: "Kayseri",
    stadium: "RHG Enertürk Enerji Stadı",
    capacity: 32464,
    manager: "Recep Uçar",
    formation: "4-4-2",
    colors: { primary: "#ffd166", secondary: "#ef476f" },
    morale: "Orta",
    form: ["B", "G", "G", "M", "B"],
    attack: 76,
    midfield: 75,
    defense: 74,
    overall: 75,
    keyPlayers: ["Mame Thiam", "Miguel Cardoso", "Ali Karimi"],
    players: [
      { name: "Bilal Bayazit", position: "GK", age: 23, overall: 74, attributes: { refleks: 78, potansiyel: 84, oyunKurma: 74 } },
      { name: "Lionel Carole", position: "LB", age: 32, overall: 74, attributes: { orta: 78, hiz: 80, disiplin: 80 } },
      { name: "Joseph Attamah", position: "CB", age: 29, overall: 74, attributes: { fizik: 82, markaj: 76, pas: 72 } },
      { name: "Dimitrios Kolovetsios", position: "CB", age: 31, overall: 73, attributes: { hava: 78, liderlik: 82, pozisyon: 75 } },
      { name: "Ramazan Civelek", position: "RB", age: 27, overall: 72, attributes: { hiz: 83, orta: 75, caliskanlik: 78 } },
      { name: "Ali Karimi", position: "DM", age: 28, overall: 76, attributes: { pas: 80, topKazanma: 82, disiplin: 82 } },
      { name: "Miguel Cardoso", position: "LW", age: 29, overall: 76, attributes: { dripling: 82, sut: 78, duranTop: 80 } },
      { name: "Gökhan Sazdağı", position: "CM", age: 29, overall: 74, attributes: { sut: 76, pas: 75, pres: 78 } },
      { name: "Bernard Mensah", position: "CAM", age: 28, overall: 78, attributes: { vizyon: 82, pas: 81, sut: 79 } },
      { name: "Mame Thiam", position: "ST", age: 30, overall: 78, attributes: { bitiricilik: 80, fizik: 82, liderlik: 78 } },
      { name: "Aylton Boa Morte", position: "RW", age: 28, overall: 75, attributes: { hiz: 88, dripling: 82, sut: 76 } },
      { name: "Andrea Bertolacci", position: "CM", age: 31, overall: 75, attributes: { pas: 80, sut: 78, deneyim: 82 } },
      { name: "Majid Hosseini", position: "CB", age: 27, overall: 73, attributes: { markaj: 75, hiz: 74, dayaniklilik: 78 } },
      { name: "Carlos Mane", position: "FW", age: 29, overall: 74, attributes: { hiz: 86, dripling: 82, sut: 75 } }
    ]
  },
  {
    id: "rizespor",
    name: "Çaykur Rizespor",
    shortName: "RIZ",
    city: "Rize",
    stadium: "Çaykur Didi Stadı",
    capacity: 15332,
    manager: "İlhan Palut",
    formation: "4-3-3",
    colors: { primary: "#1b9aaa", secondary: "#0b3c5d" },
    morale: "Orta",
    form: ["G", "B", "M", "G", "B"],
    attack: 73,
    midfield: 73,
    defense: 72,
    overall: 73,
    keyPlayers: ["Benhur Keser", "İbrahim Olawoyin", "Altin Zeqiri"],
    players: [
      { name: "Gökhan Akkan", position: "GK", age: 28, overall: 74, attributes: { refleks: 78, liderlik: 78, ayak: 74 } },
      { name: "Tunay Torun", position: "RB", age: 32, overall: 71, attributes: { deneyim: 80, orta: 74, pres: 74 } },
      { name: "Attila Mocsi", position: "CB", age: 23, overall: 72, attributes: { markaj: 75, hava: 74, dayaniklilik: 78 } },
      { name: "Montassar Talbi", position: "CB", age: 25, overall: 74, attributes: { markaj: 78, pas: 72, fizik: 78 } },
      { name: "İsmail Köybaşı", position: "LB", age: 34, overall: 72, attributes: { deneyim: 82, orta: 78, duranTop: 80 } },
      { name: "Jonjo Shelvey", position: "CM", age: 31, overall: 75, attributes: { pas: 82, sut: 78, liderlik: 80 } },
      { name: "Lebogang Phiri", position: "DM", age: 28, overall: 73, attributes: { topKazanma: 78, pas: 75, pres: 77 } },
      { name: "Benhur Keser", position: "RW", age: 25, overall: 74, attributes: { hiz: 88, dripling: 82, sut: 75 } },
      { name: "İbrahim Olawoyin", position: "LW", age: 25, overall: 75, attributes: { dripling: 84, sut: 76, hareket: 78 } },
      { name: "Altin Zeqiri", position: "ST", age: 24, overall: 74, attributes: { bitiricilik: 78, hiz: 82, vizyon: 74 } },
      { name: "Joel Pohjanpalo", position: "ST", age: 28, overall: 76, attributes: { bitiricilik: 80, hava: 78, liderlik: 76 } },
      { name: "Emirhan Topçu", position: "CB", age: 22, overall: 72, attributes: { potansiyel: 82, markaj: 74, dayaniklilik: 80 } },
      { name: "Alberk Koç", position: "LB", age: 26, overall: 71, attributes: { hiz: 82, orta: 75, pres: 76 } },
      { name: "Bolasie", position: "RW", age: 34, overall: 73, attributes: { deneyim: 84, dripling: 82, sut: 74 } }
    ]
  },
  {
    id: "istanbulspor",
    name: "İstanbulspor",
    shortName: "IST",
    city: "İstanbul",
    stadium: "Esenyurt Necmi Kadıoğlu Stadı",
    capacity: 4800,
    manager: "Fatih Tekke",
    formation: "4-1-4-1",
    colors: { primary: "#ffd166", secondary: "#000000" },
    morale: "Düşük",
    form: ["M", "M", "B", "M", "G"],
    attack: 69,
    midfield: 70,
    defense: 68,
    overall: 69,
    keyPlayers: ["Valon Ethemi", "Emeka Eze", "David Jensen"],
    players: [
      { name: "David Jensen", position: "GK", age: 31, overall: 71, attributes: { refleks: 74, liderlik: 72, oyunKurma: 70 } },
      { name: "Mehmet Yeşil", position: "CB", age: 25, overall: 70, attributes: { markaj: 74, pas: 70, dayaniklilik: 74 } },
      { name: "Duhan Aksu", position: "RB", age: 24, overall: 69, attributes: { hiz: 80, orta: 72, pres: 74 } },
      { name: "Simon Deli", position: "CB", age: 31, overall: 71, attributes: { fizik: 82, markaj: 76, hava: 78 } },
      { name: "Okan Erdoğan", position: "LB", age: 26, overall: 69, attributes: { disiplin: 78, orta: 72, dayaniklilik: 76 } },
      { name: "Muammer Sarıkaya", position: "CM", age: 25, overall: 70, attributes: { pas: 74, disiplin: 76, pres: 75 } },
      { name: "Olivier Thill", position: "CM", age: 27, overall: 72, attributes: { pas: 78, duranTop: 76, vizyon: 74 } },
      { name: "Valon Ethemi", position: "RW", age: 25, overall: 73, attributes: { dripling: 82, sut: 74, yaraticilik: 76 } },
      { name: "Yusuf Erdoğan", position: "LW", age: 31, overall: 72, attributes: { hiz: 86, sut: 74, dripling: 78 } },
      { name: "Eduart Rroca", position: "CAM", age: 28, overall: 71, attributes: { pas: 75, sut: 72, vizyon: 74 } },
      { name: "Emeka Eze", position: "ST", age: 25, overall: 71, attributes: { fizik: 80, bitiricilik: 73, hiz: 78 } },
      { name: "Topalli", position: "FW", age: 26, overall: 70, attributes: { hareket: 76, sut: 72, pres: 74 } },
      { name: "Demeaco Duhaney", position: "RB", age: 24, overall: 69, attributes: { hiz: 82, pas: 72, pres: 74 } },
      { name: "Ademi", position: "ST", age: 29, overall: 71, attributes: { hava: 78, bitiricilik: 74, fizik: 80 } }
    ]
  },
  {
    id: "hatayspor",
    name: "Atakaş Hatayspor",
    shortName: "HAT",
    city: "Mersin",
    stadium: "Mersin Stadyumu",
    capacity: 25000,
    manager: "Volkan Demirel",
    formation: "4-2-3-1",
    colors: { primary: "#7b0d1e", secondary: "#ffffff" },
    morale: "Orta",
    form: ["B", "M", "G", "B", "M"],
    attack: 74,
    midfield: 73,
    defense: 72,
    overall: 73,
    keyPlayers: ["Fisayo Dele-Bashiru", "Bertuğ Yıldırım", "Kerim Alıcı"],
    players: [
      { name: "Erce Kardeşler", position: "GK", age: 29, overall: 72, attributes: { refleks: 75, liderlik: 76, oyunKurma: 70 } },
      { name: "Burak Bekaroğlu", position: "CB", age: 24, overall: 71, attributes: { markaj: 74, hava: 72, potansiyel: 78 } },
      { name: "Kerim Alıcı", position: "RB", age: 26, overall: 72, attributes: { dayaniklilik: 82, pres: 78, orta: 74 } },
      { name: "Kaan Kanak", position: "LB", age: 33, overall: 72, attributes: { duranTop: 80, orta: 76, deneyim: 80 } },
      { name: "Rúben Ribeiro", position: "LW", age: 36, overall: 73, attributes: { vizyon: 80, dripling: 78, pas: 76 } },
      { name: "Rayane Aabid", position: "DM", age: 31, overall: 73, attributes: { pas: 76, topKazanma: 74, disiplin: 78 } },
      { name: "Fisayo Dele-Bashiru", position: "CAM", age: 22, overall: 76, attributes: { dripling: 84, sut: 78, fiziksellik: 80 } },
      { name: "Rivas", position: "RW", age: 28, overall: 74, attributes: { hiz: 86, asist: 78, dripling: 80 } },
      { name: "Bertuğ Yıldırım", position: "ST", age: 21, overall: 74, attributes: { bitiricilik: 76, hava: 78, potansiyel: 84 } },
      { name: "Carlos Strandberg", position: "ST", age: 27, overall: 74, attributes: { guc: 84, bitiricilik: 76, hiz: 78 } },
      { name: "Lobjanidze", position: "RW", age: 28, overall: 75, attributes: { hiz: 86, asist: 78, dripling: 80 } },
      { name: "Mehmet Gürcan", position: "CB", age: 23, overall: 70, attributes: { potansiyel: 82, markaj: 72, fizik: 74 } },
      { name: "Selim Ilgaz", position: "RM", age: 32, overall: 72, attributes: { hiz: 82, pas: 74, disiplin: 76 } }
    ]
  },
  {
    id: "konyaspor",
    name: "Tümosan Konyaspor",
    shortName: "KON",
    city: "Konya",
    stadium: "MEDAŞ Konya Büyükşehir",
    capacity: 42160,
    manager: "Aleksandar Stanojevic",
    formation: "4-2-3-1",
    colors: { primary: "#006d77", secondary: "#ffffff" },
    morale: "Orta",
    form: ["B", "M", "B", "G", "B"],
    attack: 75,
    midfield: 76,
    defense: 75,
    overall: 75,
    keyPlayers: ["Mame Diouf", "Amir Hadziahmetovic", "Endri Çekiçi"],
    players: [
      { name: "İbrahim Sehic", position: "GK", age: 33, overall: 75, attributes: { refleks: 78, liderlik: 80, oyunKurma: 74 } },
      { name: "Nejc Skubic", position: "RB", age: 33, overall: 74, attributes: { hiz: 78, orta: 77, deneyim: 82 } },
      { name: "Adil Demirbağ", position: "CB", age: 26, overall: 73, attributes: { markaj: 76, hava: 74, fizik: 76 } },
      { name: "Francisco Calvo", position: "CB", age: 30, overall: 75, attributes: { liderlik: 82, markaj: 77, pas: 74 } },
      { name: "Guilherme", position: "LB", age: 32, overall: 75, attributes: { orta: 80, duranTop: 78, vizyon: 76 } },
      { name: "Amir Hadziahmetovic", position: "DM", age: 26, overall: 77, attributes: { pas: 80, topKazanma: 82, disiplin: 82 } },
      { name: "Endri Çekiçi", position: "CAM", age: 27, overall: 76, attributes: { sut: 80, pas: 79, duranTop: 82 } },
      { name: "Soner Dikmen", position: "CM", age: 29, overall: 74, attributes: { pas: 76, pres: 78, disiplin: 78 } },
      { name: "Mame Biram Diouf", position: "ST", age: 35, overall: 76, attributes: { liderlik: 82, bitiricilik: 78, hava: 80 } },
      { name: "Sokol Cikalleshi", position: "ST", age: 33, overall: 75, attributes: { fizik: 82, bitiricilik: 77, penalti: 80 } },
      { name: "Oğulcan Ülgün", position: "DM", age: 24, overall: 72, attributes: { potansiyel: 82, topKazanma: 76, pas: 73 } },
      { name: "Murat Sapan", position: "LW", age: 23, overall: 70, attributes: { hiz: 84, dripling: 78, potansiyel: 82 } },
      { name: "Bytyqi", position: "LW", age: 25, overall: 74, attributes: { hiz: 86, dripling: 82, sut: 75 } },
      { name: "Paul-José Mpoku", position: "AM", age: 31, overall: 74, attributes: { vizyon: 80, pas: 78, sut: 76 } }
    ]
  },
  {
    id: "gaziantep",
    name: "Gaziantep FK",
    shortName: "GFK",
    city: "Gaziantep",
    stadium: "Kalyon Stadyumu",
    capacity: 35574,
    manager: "Marius Sumudica",
    formation: "4-2-3-1",
    colors: { primary: "#c1121f", secondary: "#0b090a" },
    morale: "Düşük",
    form: ["M", "M", "G", "B", "M"],
    attack: 73,
    midfield: 72,
    defense: 72,
    overall: 72,
    keyPlayers: ["Alexandru Maxim", "Marko Jevtovic", "Eriksen"],
    players: [
      { name: "Günay Güvenç", position: "GK", age: 32, overall: 74, attributes: { refleks: 77, liderlik: 78, oyunKurma: 72 } },
      { name: "Papy Djilobodji", position: "CB", age: 34, overall: 75, attributes: { fizik: 84, markaj: 77, hava: 80 } },
      { name: "Arda Kızıldağ", position: "CB", age: 24, overall: 72, attributes: { potansiyel: 82, markaj: 74, hiz: 76 } },
      { name: "Halil Pehlivan", position: "LB", age: 30, overall: 72, attributes: { hiz: 80, orta: 74, dayanıklılık: 78 } },
      { name: "Ogün Özçiçek", position: "RB", age: 22, overall: 71, attributes: { potansiyel: 82, hiz: 82, pres: 75 } },
      { name: "Marko Jevtovic", position: "DM", age: 29, overall: 74, attributes: { topKazanma: 80, pres: 78, pas: 73 } },
      { name: "Furkan Soyalp", position: "CM", age: 27, overall: 72, attributes: { sut: 74, pas: 75, vizyon: 74 } },
      { name: "Alexandru Maxim", position: "CAM", age: 33, overall: 77, attributes: { duranTop: 84, sut: 80, vizyon: 82 } },
      { name: "Eriksen", position: "RW", age: 28, overall: 73, attributes: { hiz: 82, dripling: 80, sut: 74 } },
      { name: "Max Gradel", position: "LW", age: 35, overall: 77, attributes: { dripling: 84, sut: 78, duranTop: 80 } },
      { name: "Denis Dragus", position: "ST", age: 23, overall: 74, attributes: { hiz: 84, bitiricilik: 76, hareket: 78 } },
      { name: "Valmir Veliu", position: "LW", age: 23, overall: 72, attributes: { hiz: 88, dripling: 82, potansiyel: 82 } },
      { name: "Angelo Sagal", position: "FW", age: 29, overall: 73, attributes: { cokYonluluk: 80, pas: 75, sut: 74 } },
      { name: "Muhammet Demir", position: "ST", age: 31, overall: 72, attributes: { bitiricilik: 76, hiz: 74, pres: 75 } }
    ]
  },
  {
    id: "ankaragucu",
    name: "MKE Ankaragücü",
    shortName: "ANK",
    city: "Ankara",
    stadium: "Eryaman Stadyumu",
    capacity: 20560,
    manager: "Emre Belözoğlu",
    formation: "4-2-3-1",
    colors: { primary: "#f8cc1b", secondary: "#0c2340" },
    morale: "Orta",
    form: ["B", "G", "M", "B", "G"],
    attack: 74,
    midfield: 75,
    defense: 73,
    overall: 74,
    keyPlayers: ["Ali Sowe", "Milson", "Tolga Ciğerci"],
    players: [
      { name: "Bahadır Han Güngördü", position: "GK", age: 27, overall: 72, attributes: { refleks: 75, liderlik: 76, oyunKurma: 70 } },
      { name: "Uros Radakovic", position: "CB", age: 29, overall: 73, attributes: { markaj: 77, hava: 76, fizik: 78 } },
      { name: "Atakan Çankaya", position: "CB", age: 25, overall: 72, attributes: { potansiyel: 80, markaj: 74, pas: 72 } },
      { name: "James Tiago Pinto", position: "LB", age: 34, overall: 73, attributes: { deneyim: 84, orta: 76, duranTop: 78 } },
      { name: "Stelios Kitsiou", position: "RB", age: 30, overall: 74, attributes: { hiz: 82, dayanıklılık: 82, orta: 75 } },
      { name: "Tolga Ciğerci", position: "CM", age: 31, overall: 75, attributes: { pas: 80, sut: 76, liderlik: 78 } },
      { name: "Pedrinho", position: "AM", age: 30, overall: 74, attributes: { vizyon: 78, pas: 77, dripling: 76 } },
      { name: "Milson", position: "LW", age: 28, overall: 76, attributes: { hiz: 88, dripling: 82, sut: 75 } },
      { name: "Ali Sowe", position: "ST", age: 28, overall: 75, attributes: { bitiricilik: 78, guc: 82, hiz: 80 } },
      { name: "Renaldo Cephas", position: "RW", age: 25, overall: 74, attributes: { hiz: 90, dripling: 84, pres: 78 } },
      { name: "Lamine Diack", position: "DM", age: 22, overall: 73, attributes: { potansiyel: 84, topKazanma: 78, pas: 74 } },
      { name: "Ender Aygören", position: "CM", age: 23, overall: 70, attributes: { vizyon: 74, pas: 73, potansiyel: 82 } },
      { name: "Gökhan Töre", position: "RW", age: 31, overall: 72, attributes: { deneyim: 82, dripling: 78, sut: 74 } },
      { name: "Federico Macheda", position: "ST", age: 32, overall: 73, attributes: { hava: 78, bitiricilik: 76, fizik: 76 } }
    ]
  },
  {
    id: "samsunspor",
    name: "Yılport Samsunspor",
    shortName: "SAM",
    city: "Samsun",
    stadium: "Samsun 19 Mayıs Stadyumu",
    capacity: 33919,
    manager: "Markus Gisdol",
    formation: "4-2-3-1",
    colors: { primary: "#d90429", secondary: "#ffffff" },
    morale: "Orta",
    form: ["M", "G", "B", "M", "G"],
    attack: 73,
    midfield: 74,
    defense: 72,
    overall: 73,
    keyPlayers: ["Oliver Ntcham", "Marius Mouandilmadji", "Carlo Holse"],
    players: [
      { name: "Okan Kocuk", position: "GK", age: 27, overall: 73, attributes: { refleks: 76, oyunKurma: 74, liderlik: 75 } },
      { name: "Alim Öztürk", position: "CB", age: 30, overall: 73, attributes: { fizik: 82, markaj: 76, liderlik: 78 } },
      { name: "Lubomir Satka", position: "CB", age: 27, overall: 74, attributes: { markaj: 77, hava: 78, pas: 73 } },
      { name: "Zeki Yavru", position: "RB", age: 31, overall: 72, attributes: { hiz: 80, orta: 76, duranTop: 78 } },
      { name: "Ali Ülgen", position: "LB", age: 24, overall: 72, attributes: { potansiyel: 82, hiz: 82, pres: 76 } },
      { name: "Taylan Antalyalı", position: "CM", age: 28, overall: 74, attributes: { pas: 78, topKazanma: 74, disiplin: 78 } },
      { name: "Oliver Ntcham", position: "CAM", age: 27, overall: 75, attributes: { sut: 80, pas: 79, vizyon: 80 } },
      { name: "Carlo Holse", position: "RW", age: 24, overall: 74, attributes: { hiz: 86, dripling: 82, sut: 74 } },
      { name: "Emre Kılınç", position: "LW", age: 29, overall: 75, attributes: { hiz: 84, pas: 78, yaraticilik: 80 } },
      { name: "Marius Mouandilmadji", position: "ST", age: 25, overall: 75, attributes: { fizik: 84, bitiricilik: 78, hiz: 80 } },
      { name: "Douglas Tanque", position: "ST", age: 29, overall: 73, attributes: { güç: 82, bitiricilik: 76, pres: 76 } },
      { name: "Gerald Asamoah Jr.", position: "FW", age: 21, overall: 70, attributes: { potansiyel: 84, hiz: 84, dripling: 75 } },
      { name: "Mohamed Ali Ben Romdhane", position: "CM", age: 24, overall: 73, attributes: { pas: 76, sut: 74, pres: 76 } }
    ]
  },
  {
    id: "pendikspor",
    name: "Siltaş Yapı Pendikspor",
    shortName: "PEN",
    city: "İstanbul",
    stadium: "Pendik Stadı",
    capacity: 21000,
    manager: "Ivo Vieira",
    formation: "4-3-3",
    colors: { primary: "#f72585", secondary: "#4cc9f0" },
    morale: "Orta",
    form: ["B", "M", "G", "B", "G"],
    attack: 72,
    midfield: 71,
    defense: 70,
    overall: 71,
    keyPlayers: ["Umut Nayir", "Guilherme", "Oscar Romero"],
    players: [
      { name: "Erhan Erentürk", position: "GK", age: 28, overall: 72, attributes: { refleks: 76, liderlik: 74, oyunKurma: 72 } },
      { name: "Welinton", position: "CB", age: 34, overall: 72, attributes: { deneyim: 84, markaj: 75, hava: 78 } },
      { name: "Nuno Sequeira", position: "LB", age: 32, overall: 73, attributes: { orta: 78, hiz: 78, duranTop: 76 } },
      { name: "Murat Akça", position: "CB", age: 33, overall: 71, attributes: { liderlik: 80, markaj: 73, pas: 70 } },
      { name: "Thibault Moulin", position: "CM", age: 33, overall: 72, attributes: { pas: 78, vizyon: 76, deneyim: 80 } },
      { name: "Guilherme", position: "RW", age: 32, overall: 74, attributes: { yaraticilik: 82, pas: 78, sut: 75 } },
      { name: "Oscar Romero", position: "CAM", age: 31, overall: 74, attributes: { vizyon: 82, duranTop: 80, pas: 80 } },
      { name: "Fredy Ribeiro", position: "CM", age: 32, overall: 72, attributes: { pas: 76, sut: 74, disiplin: 76 } },
      { name: "Leandro Kappel", position: "RW", age: 33, overall: 73, attributes: { hiz: 88, dripling: 84, sut: 74 } },
      { name: "Umut Nayir", position: "ST", age: 30, overall: 74, attributes: { bitiricilik: 78, hava: 82, fizik: 80 } },
      { name: "Arnaud Lusamba", position: "CM", age: 27, overall: 73, attributes: { pas: 78, dripling: 76, pres: 75 } },
      { name: "Endri Fırat", position: "LB", age: 23, overall: 69, attributes: { potansiyel: 82, hiz: 82, orta: 74 } },
      { name: "Ahmed Hassan", position: "ST", age: 30, overall: 73, attributes: { güç: 82, bitiricilik: 77, hava: 80 } }
    ]
  },
  {
    id: "karagumruk",
    name: "VavaCars Fatih Karagümrük",
    shortName: "FKS",
    city: "İstanbul",
    stadium: "Atatürk Olimpiyat Stadı",
    capacity: 74753,
    manager: "Alparslan Erdem",
    formation: "4-3-3",
    colors: { primary: "#d00000", secondary: "#000000" },
    morale: "Orta",
    form: ["B", "G", "M", "B", "G"],
    attack: 76,
    midfield: 75,
    defense: 74,
    overall: 75,
    keyPlayers: ["Fabio Borini", "Mbaye Diagne", "Matteo Ricci"],
    players: [
      { name: "Emiliano Viviano", position: "GK", age: 37, overall: 75, attributes: { refleks: 78, liderlik: 82, oyunKurma: 74 } },
      { name: "Davide Biraschi", position: "CB", age: 28, overall: 75, attributes: { markaj: 78, hiz: 78, disiplin: 80 } },
      { name: "Adnan Ugur", position: "RB", age: 21, overall: 71, attributes: { potansiyel: 84, hiz: 82, pres: 76 } },
      { name: "Levent Mercan", position: "LB", age: 23, overall: 72, attributes: { hiz: 82, orta: 76, dayanıklılık: 80 } },
      { name: "Matteo Ricci", position: "CM", age: 29, overall: 76, attributes: { pas: 82, vizyon: 78, disiplin: 78 } },
      { name: "Rayyan Baniya", position: "CB", age: 24, overall: 74, attributes: { fizik: 82, markaj: 76, hava: 78 } },
      { name: "Fabio Borini", position: "LW", age: 32, overall: 78, attributes: { sut: 82, vizyon: 80, liderlik: 78 } },
      { name: "Ryan Mendes", position: "RW", age: 33, overall: 76, attributes: { hiz: 90, dripling: 84, sut: 76 } },
      { name: "Magomed Ozdoev", position: "DM", age: 30, overall: 75, attributes: { topKazanma: 80, pas: 78, pres: 78 } },
      { name: "Mbaye Diagne", position: "ST", age: 31, overall: 77, attributes: { bitiricilik: 80, fizik: 84, hava: 82 } },
      { name: "Birikey Samed", position: "RW", age: 22, overall: 70, attributes: { potansiyel: 84, hiz: 86, dripling: 78 } },
      { name: "Matija Nastasic", position: "CB", age: 30, overall: 75, attributes: { markaj: 78, liderlik: 80, hava: 80 } },
      { name: "Ebrima Colley", position: "FW", age: 23, overall: 73, attributes: { hiz: 88, dripling: 82, sut: 74 } }
    ]
  }
];

const fixtures = [
  { week: 1, date: "18 Ağustos", home: "Galatasaray", away: "Fenerbahçe" },
  { week: 1, date: "19 Ağustos", home: "Beşiktaş", away: "Trabzonspor" },
  { week: 1, date: "19 Ağustos", home: "Adana Demirspor", away: "Başakşehir FK" },
  { week: 1, date: "20 Ağustos", home: "Konyaspor", away: "Hatayspor" },
  { week: 1, date: "20 Ağustos", home: "Samsunspor", away: "Gaziantep FK" },
  { week: 1, date: "21 Ağustos", home: "Pendikspor", away: "Karagümrük" }
];

const teamLookup = new Map(teams.map((team) => [team.id, team]));
const attackPositions = ["ST", "CF", "FW", "LW", "RW", "CAM", "AM", "SS"];

const homeTeamSelect = document.getElementById("home-team-select");
const awayTeamSelect = document.getElementById("away-team-select");
const homeMeta = document.getElementById("home-team-meta");
const awayMeta = document.getElementById("away-team-meta");
const homeAttributes = document.getElementById("home-team-attributes");
const awayAttributes = document.getElementById("away-team-attributes");
const homeSquad = document.getElementById("home-team-squad");
const awaySquad = document.getElementById("away-team-squad");
const powerRankingBody = document.getElementById("power-ranking");
const fixturesContainer = document.getElementById("fixtures");
const spotlightContainer = document.getElementById("team-spotlight");
const startMatchButton = document.getElementById("start-match");
const matchLog = document.getElementById("match-log");
const matchStatsGrid = document.getElementById("match-stats");
const matchClock = document.getElementById("match-clock");
const scoreboardHomeName = document.getElementById("scoreboard-home-name");
const scoreboardAwayName = document.getElementById("scoreboard-away-name");
const scoreHome = document.getElementById("score-home");
const scoreAway = document.getElementById("score-away");
const possessionHomeEl = document.getElementById("possession-home");
const possessionAwayEl = document.getElementById("possession-away");

const canvas = document.getElementById("match-canvas");
const ctx = canvas.getContext("2d");
const pitchWidth = canvas.width;
const pitchHeight = canvas.height;

const matchState = {
  running: false,
  lastTimestamp: null,
  time: 0,
  nextEvent: 0,
  scoreboard: { home: 0, away: 0 },
  stats: {
    home: { shots: 0, onTarget: 0, passes: 0, fouls: 0 },
    away: { shots: 0, onTarget: 0, passes: 0, fouls: 0 }
  },
  possession: { home: 50, away: 50 },
  possessionTarget: { home: 50, away: 50 },
  currentPossession: "home",
  homeTeam: null,
  awayTeam: null,
  homePlayers: [],
  awayPlayers: [],
  ball: { x: pitchWidth / 2, y: pitchHeight / 2 },
  ballHolder: null,
  lineups: { home: [], away: [] },
  events: []
};

const basePositions = [
  { x: 70, y: pitchHeight / 2 },
  { x: 170, y: 90 },
  { x: 170, y: pitchHeight / 2 - 80 },
  { x: 170, y: pitchHeight / 2 + 80 },
  { x: 170, y: pitchHeight - 90 },
  { x: 280, y: pitchHeight / 2 - 130 },
  { x: 320, y: pitchHeight / 2 },
  { x: 280, y: pitchHeight / 2 + 130 },
  { x: 430, y: 140 },
  { x: 540, y: pitchHeight / 2 },
  { x: 430, y: pitchHeight - 140 }
];

function init() {
  populateTeamSelects();
  renderPowerRanking();
  renderFixtures();
  renderSpotlight();
  updateScoreboardTeamNames();
  updateMatchStatsUI();
  drawScene();
}

function populateTeamSelects() {
  teams.forEach((team) => {
    const homeOption = document.createElement("option");
    homeOption.value = team.id;
    homeOption.textContent = team.name;
    homeTeamSelect.appendChild(homeOption);

    const awayOption = document.createElement("option");
    awayOption.value = team.id;
    awayOption.textContent = team.name;
    awayTeamSelect.appendChild(awayOption);
  });

  homeTeamSelect.value = "galatasaray";
  awayTeamSelect.value = "fenerbahce";
  updateTeamPanel("home");
  updateTeamPanel("away");
}

function updateTeamPanel(side) {
  const select = side === "home" ? homeTeamSelect : awayTeamSelect;
  const metaEl = side === "home" ? homeMeta : awayMeta;
  const attrEl = side === "home" ? homeAttributes : awayAttributes;
  const squadEl = side === "home" ? homeSquad : awaySquad;
  const team = teamLookup.get(select.value);
  if (!team) return;

  metaEl.innerHTML = `
    <div><strong>Şehir:</strong> ${team.city}</div>
    <div><strong>Stadyum:</strong> ${team.stadium} (${team.capacity.toLocaleString("tr-TR")})</div>
    <div><strong>Teknik Direktör:</strong> ${team.manager}</div>
    <div><strong>Formasyon:</strong> ${team.formation}</div>
    <div><strong>Moral:</strong> ${team.morale}</div>
    <div><strong>Form:</strong> ${renderFormChips(team.form)}</div>
    <div><strong>Öne Çıkanlar:</strong> ${team.keyPlayers.join(", ")}</div>
  `;

  attrEl.innerHTML = [
    renderAttributeBar("Genel Güç", team.overall),
    renderAttributeBar("Hücum", team.attack),
    renderAttributeBar("Orta Saha", team.midfield),
    renderAttributeBar("Defans", team.defense)
  ].join("");

  renderSquadTable(squadEl, team);
}

function renderFormChips(form) {
  return `<div class="team-form">${form
    .map((item) => `<span class="form-chip form-chip--${item}">${item}</span>`)
    .join("")}</div>`;
}

function renderAttributeBar(label, value) {
  return `
    <div class="attribute-bar">
      <label>${label}<span>${value}</span></label>
      <div class="attribute-bar__track">
        <div class="attribute-bar__fill" style="width: ${value}%"></div>
      </div>
    </div>
  `;
}

function renderSquadTable(container, team) {
  const rows = team.players
    .map((player) => {
      const attributes = Object.entries(player.attributes)
        .map(([key, val]) => `${formatAttributeKey(key)}: ${val}`)
        .slice(0, 3)
        .join(", ");
      return `
        <tr>
          <td>${player.position}</td>
          <td>${player.name}</td>
          <td>${player.age}</td>
          <td>${player.overall}</td>
          <td>${attributes}</td>
        </tr>
      `;
    })
    .join("");

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Poz</th>
          <th>Oyuncu</th>
          <th>Yaş</th>
          <th>OVR</th>
          <th>Öne Çıkan Özellikler</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function formatAttributeKey(key) {
  const spaced = key
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .trim();
  return spaced.charAt(0).toLocaleUpperCase("tr-TR") + spaced.slice(1);
}

function renderPowerRanking() {
  const sorted = [...teams].sort((a, b) => b.overall - a.overall);
  powerRankingBody.innerHTML = sorted
    .map((team, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${team.name}</td>
        <td>${team.overall}</td>
        <td>${team.attack}</td>
        <td>${team.midfield}</td>
        <td>${team.defense}</td>
      </tr>
    `)
    .join("");
}

function renderFixtures() {
  fixturesContainer.innerHTML = `
    <h3>Haftanın Maçları</h3>
    ${fixtures
      .map(
        (fixture) => `
          <div class="fixture-card">
            <div>
              <div class="date">${fixture.date}</div>
              <strong>${fixture.week}. Hafta</strong>
            </div>
            <div>${fixture.home}</div>
            <div>${fixture.away}</div>
          </div>
        `
      )
      .join("")}
  `;
}

function renderSpotlight() {
  const featureTeam = teams.reduce((prev, curr) => (curr.overall > prev.overall ? curr : prev));
  spotlightContainer.innerHTML = `
    <h3>Spotlight: ${featureTeam.name}</h3>
    <p>${featureTeam.stadium} atmosferinde ${featureTeam.formation} dizilişiyle yüksek tempolu bir oyun ortaya koyuyorlar.</p>
    <p><strong>Güçlü Yanlar:</strong> Hücum ${featureTeam.attack}, orta saha ${featureTeam.midfield}, defans ${featureTeam.defense}</p>
    <p><strong>Kilit Oyuncular:</strong> ${featureTeam.keyPlayers.join(", ")}</p>
  `;
}

function updateScoreboardTeamNames() {
  const homeTeam = teamLookup.get(homeTeamSelect.value);
  const awayTeam = teamLookup.get(awayTeamSelect.value);
  if (homeTeam) scoreboardHomeName.textContent = homeTeam.name;
  if (awayTeam) scoreboardAwayName.textContent = awayTeam.name;
}

function startMatch() {
  const homeTeam = teamLookup.get(homeTeamSelect.value);
  const awayTeam = teamLookup.get(awayTeamSelect.value);
  if (!homeTeam || !awayTeam) return;

  resetMatchState();

  matchState.homeTeam = homeTeam;
  matchState.awayTeam = awayTeam;
  matchState.lineups.home = getStartingLineup(homeTeam);
  matchState.lineups.away = getStartingLineup(awayTeam);
  matchState.homePlayers = createMatchPlayers(matchState.lineups.home, homeTeam, "home");
  matchState.awayPlayers = createMatchPlayers(matchState.lineups.away, awayTeam, "away");
  matchState.currentPossession = Math.random() > 0.5 ? "home" : "away";
  matchState.ballHolder = pickRandomPlayer(matchState.currentPossession);
  matchState.possessionTarget = { home: 52, away: 48 };
  matchState.nextEvent = 2 + Math.random() * 3;
  matchState.running = true;

  matchLog.innerHTML = "";
  addLogEntry(0, `${homeTeam.name} - ${awayTeam.name} maçı başladı.`);
  startMatchButton.disabled = true;
  startMatchButton.textContent = "Maç Devam Ediyor";
  updateScoreboard(0, 0);
  updateMatchStatsUI();
  requestAnimationFrame(stepMatch);
}

function resetMatchState() {
  matchState.running = false;
  matchState.time = 0;
  matchState.lastTimestamp = null;
  matchState.scoreboard = { home: 0, away: 0 };
  matchState.stats = {
    home: { shots: 0, onTarget: 0, passes: 0, fouls: 0 },
    away: { shots: 0, onTarget: 0, passes: 0, fouls: 0 }
  };
  matchState.possession = { home: 50, away: 50 };
  matchState.possessionTarget = { home: 50, away: 50 };
  matchState.ball = { x: pitchWidth / 2, y: pitchHeight / 2 };
  matchState.ballHolder = null;
}

function getStartingLineup(team) {
  return [...team.players].sort((a, b) => b.overall - a.overall).slice(0, 11);
}

function createMatchPlayers(lineup, team, side) {
  return lineup.map((player, index) => {
    const base = basePositions[index] || basePositions[basePositions.length - 1];
    const mirroredX = pitchWidth - base.x;
    const x = side === "home" ? base.x : mirroredX;
    return {
      data: player,
      team,
      side,
      baseX: x,
      baseY: base.y,
      x,
      y: base.y,
      radius: 12,
      drift: 10 + Math.random() * 6,
      phase: Math.random() * Math.PI * 2,
      speed: 0.6 + player.overall / 120,
      color: team.colors.primary,
      secondary: team.colors.secondary
    };
  });
}

function stepMatch(timestamp) {
  if (!matchState.running) return;
  if (!matchState.lastTimestamp) matchState.lastTimestamp = timestamp;
  const delta = (timestamp - matchState.lastTimestamp) / 1000;
  matchState.lastTimestamp = timestamp;

  const minuteGain = delta * 6;
  matchState.time += minuteGain;
  if (matchState.time >= 90) {
    matchState.time = 90;
    drawScene();
    updateMatchClock();
    finishMatch();
    return;
  }

  if (matchState.time >= matchState.nextEvent) {
    triggerMatchEvent();
  }

  updatePlayers(minuteGain);
  updatePossession(minuteGain);
  updateMatchClock();
  updateMatchStatsUI();
  drawScene();

  if (matchState.running) {
    requestAnimationFrame(stepMatch);
  }
}

function updatePlayers(minuteGain) {
  const allPlayers = [...matchState.homePlayers, ...matchState.awayPlayers];
  allPlayers.forEach((player) => {
    const targetX = player.baseX + Math.sin((matchState.time + player.phase) * 0.3) * player.drift;
    const targetY = player.baseY + Math.cos((matchState.time + player.phase) * 0.35) * player.drift;
    player.x += (targetX - player.x) * 0.08;
    player.y += (targetY - player.y) * 0.08;
  });

  if (!matchState.ballHolder || Math.random() < 0.015) {
    matchState.ballHolder = pickRandomPlayer(matchState.currentPossession);
  } else if (Math.random() < 0.03) {
    matchState.ballHolder = pickRandomPlayer(matchState.currentPossession);
    matchState.stats[matchState.currentPossession].passes += 1;
  }

  if (matchState.ballHolder) {
    matchState.ball.x += (matchState.ballHolder.x - matchState.ball.x) * 0.25;
    matchState.ball.y += (matchState.ballHolder.y - matchState.ball.y) * 0.25;
  } else {
    matchState.ball.x += (pitchWidth / 2 - matchState.ball.x) * 0.05;
    matchState.ball.y += (pitchHeight / 2 - matchState.ball.y) * 0.05;
  }
}

function updatePossession() {
  matchState.possession.home += (matchState.possessionTarget.home - matchState.possession.home) * 0.02;
  matchState.possession.home = clamp(matchState.possession.home, 35, 65);
  matchState.possession.away = 100 - matchState.possession.home;
}

function triggerMatchEvent() {
  const homeMomentum = matchState.homeTeam.attack + Math.random() * 18 + (matchState.currentPossession === "home" ? 6 : 0);
  const awayMomentum = matchState.awayTeam.attack + Math.random() * 18 + (matchState.currentPossession === "away" ? 6 : 0);
  const attackingSide = homeMomentum >= awayMomentum ? "home" : "away";
  const defendingSide = attackingSide === "home" ? "away" : "home";
  const attackTeam = attackingSide === "home" ? matchState.homeTeam : matchState.awayTeam;
  const defendTeam = defendingSide === "home" ? matchState.homeTeam : matchState.awayTeam;

  matchState.currentPossession = attackingSide;
  matchState.ballHolder = pickRandomPlayer(attackingSide);

  const attackRating = attackTeam.attack;
  const defenseRating = defendTeam.defense;
  const minute = Math.floor(matchState.time);

  if (Math.random() < 0.2) {
    matchState.stats[defendingSide].fouls += 1;
    addLogEntry(minute, `${defendTeam.name} faul yaptı, ${attackTeam.name} tehlikeli noktadan serbest vuruş kullanacak.`);
    matchState.possessionTarget[attackingSide] = clamp(matchState.possessionTarget[attackingSide] + 4, 40, 70);
  } else {
    const shooter = pickLineupPlayer(attackingSide, attackPositions);
    matchState.stats[attackingSide].shots += 1;
    const onTarget = Math.random() < 0.6;
    if (onTarget) matchState.stats[attackingSide].onTarget += 1;

    const goalChance = 0.28 + (attackRating - defenseRating) / 180;
    if (Math.random() < goalChance) {
      matchState.scoreboard[attackingSide] += 1;
      addLogEntry(minute, `${attackTeam.name} golü buldu! ${shooter.name} fileleri havalandırdı.`);
      updateScoreboard(matchState.scoreboard.home, matchState.scoreboard.away);
      matchState.ballHolder = pickRandomPlayer(defendingSide);
      matchState.currentPossession = defendingSide;
      matchState.possessionTarget = { home: 50, away: 50 };
    } else if (onTarget) {
      addLogEntry(minute, `${defendTeam.name} kalecisi müthiş bir kurtarış yaptı.`);
      matchState.possessionTarget[defendingSide] = clamp(matchState.possessionTarget[defendingSide] + 3, 40, 65);
    } else {
      addLogEntry(minute, `${shooter.name} fırsatı değerlendiremedi.`);
    }
  }

  matchState.nextEvent = Math.min(90, matchState.time + 3 + Math.random() * 4);
}

function updateMatchClock() {
  const minute = Math.floor(matchState.time);
  const seconds = Math.floor((matchState.time % 1) * 60);
  matchClock.textContent = `${String(minute).padStart(2, "0")}' ${String(seconds).padStart(2, "0")}`;
}

function updateMatchStatsUI() {
  const stats = matchState.stats;
  const possessionHome = Math.round(matchState.possession.home);
  const possessionAway = 100 - possessionHome;
  possessionHomeEl.style.width = `${possessionHome}%`;
  possessionAwayEl.style.width = `${possessionAway}%`;
  possessionHomeEl.textContent = `${possessionHome}%`;
  possessionAwayEl.textContent = `${possessionAway}%`;

  const statRows = [
    { label: "Şutlar", home: stats.home.shots, away: stats.away.shots },
    { label: "İsabetli Şut", home: stats.home.onTarget, away: stats.away.onTarget },
    { label: "Pas", home: stats.home.passes, away: stats.away.passes },
    { label: "Faul", home: stats.home.fouls, away: stats.away.fouls }
  ];

  matchStatsGrid.innerHTML = statRows
    .map(
      (row) => `
        <div class="stat-card">
          <span class="label">${row.label}</span>
          <span class="value">${row.home} - ${row.away}</span>
        </div>
      `
    )
    .join("");
}

function drawScene() {
  ctx.fillStyle = "#11522d";
  ctx.fillRect(0, 0, pitchWidth, pitchHeight);

  ctx.fillStyle = "#144f2a";
  for (let i = 0; i < 6; i++) {
    ctx.fillRect((pitchWidth / 6) * i, 0, pitchWidth / 12, pitchHeight);
  }

  ctx.strokeStyle = "rgba(255,255,255,0.6)";
  ctx.lineWidth = 2;
  ctx.strokeRect(20, 20, pitchWidth - 40, pitchHeight - 40);
  ctx.beginPath();
  ctx.moveTo(pitchWidth / 2, 20);
  ctx.lineTo(pitchWidth / 2, pitchHeight - 20);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(pitchWidth / 2, pitchHeight / 2, 60, 0, Math.PI * 2);
  ctx.stroke();

  drawPenaltyBox(20);
  drawPenaltyBox(pitchWidth - 20, true);

  drawPlayers(matchState.homePlayers);
  drawPlayers(matchState.awayPlayers);
  drawBall();
}

function drawPenaltyBox(offsetX, reverse = false) {
  const width = 110;
  const sixY = 120;
  const lineX = reverse ? offsetX - width : offsetX;
  const boxWidth = reverse ? width : width;
  const orientation = reverse ? -1 : 1;

  ctx.beginPath();
  ctx.rect(lineX, (pitchHeight - sixY * 2) / 2, boxWidth, sixY * 2);
  ctx.rect(lineX, (pitchHeight - sixY) / 2, boxWidth / 2, sixY);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(lineX + orientation * 30, pitchHeight / 2, 40, reverse ? Math.PI * 0.35 : Math.PI * 1.35, reverse ? Math.PI * 1.65 : Math.PI * 0.65, reverse);
  ctx.stroke();
}

function drawPlayers(players) {
  players.forEach((player) => {
    ctx.beginPath();
    ctx.fillStyle = player.color;
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = player.side === matchState.currentPossession ? 3 : 1.5;
    ctx.strokeStyle = player.side === matchState.currentPossession ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.5)";
    ctx.stroke();

    ctx.fillStyle = "rgba(0,0,0,0.6)";
    ctx.font = "10px Roboto";
    ctx.textAlign = "center";
    ctx.fillText(player.data.position, player.x, player.y + 22);
  });
}

function drawBall() {
  ctx.beginPath();
  ctx.fillStyle = "#f8f9fa";
  ctx.arc(matchState.ball.x, matchState.ball.y, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#1a1a1a";
  ctx.stroke();
}

function pickRandomPlayer(side) {
  const group = side === "home" ? matchState.homePlayers : matchState.awayPlayers;
  if (!group.length) return null;
  return group[Math.floor(Math.random() * group.length)];
}

function pickLineupPlayer(side, positions) {
  const lineup = matchState.lineups[side] || [];
  const candidates = lineup.filter((player) => positions.some((pos) => player.position.includes(pos)));
  const pool = candidates.length ? candidates : lineup;
  if (!pool.length) return { name: "Genç Oyuncu" };
  return pool[Math.floor(Math.random() * pool.length)];
}

function updateScoreboard(home, away) {
  scoreHome.textContent = home;
  scoreAway.textContent = away;
}

function addLogEntry(minute, text) {
  const li = document.createElement("li");
  li.innerHTML = `<span>${String(minute).padStart(2, "0")}'</span><span>${text}</span>`;
  matchLog.prepend(li);
  while (matchLog.children.length > 24) {
    matchLog.removeChild(matchLog.lastChild);
  }
}

function finishMatch() {
  if (!matchState.running) return;
  matchState.running = false;
  addLogEntry(90, "Maç sona erdi.");
  startMatchButton.disabled = false;
  startMatchButton.textContent = "Maçı Başlat";
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

homeTeamSelect.addEventListener("change", () => {
  updateTeamPanel("home");
  updateScoreboardTeamNames();
});

awayTeamSelect.addEventListener("change", () => {
  updateTeamPanel("away");
  updateScoreboardTeamNames();
});

startMatchButton.addEventListener("click", () => {
  if (matchState.running) return;
  startMatch();
});

init();
