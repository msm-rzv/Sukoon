const ayahs = [
    {
      arabic: "الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
      translation: "Who, when disaster strikes them, say, 'Indeed we belong to Allah, and indeed to Him we will return.' (2:156)",
       tafsir: "This verse emphasizes the believer's trust and submission to Allah during times of hardship."   
    },
    {
      arabic: "فَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ",
      translation: "So do not weaken and do not grieve, and you will be superior if you are [true] believers. (3:139)",
       tafsir: "This verse emphasizes the believer's trust and submission to Allah during times of hardship."
    },
    {
      arabic: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
      translation: "Unquestionably, [for] the allies of Allah there will be no fear concerning them, nor will they grieve. (10:62)"
    },
    {
      arabic: "إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ وَأَعْلَمُ مِنَ اللَّهِ مَا لَا تَعْلَمُونَ",
      translation: "[Jacob] said, 'I only complain of my suffering and my grief to Allah, and I know from Allah that which you do not know.' (12:86)"
    },
    {
      arabic: "إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
      translation: "Indeed, those who have said, 'Our Lord is Allah' and then remained on a right course - there will be no fear concerning them, nor will they grieve. (46:13)"
    },
    {
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنَّا الْحَزَنَ إِنَّ رَبَّنَا لَغَفُورٌ شَكُورٌ",
      translation: "Praise to Allah, who has removed from us [all] sorrow. Indeed, our Lord is Forgiving and Appreciative. (35:34)"
    },
    {
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ",
      translation: "O you who have believed, persevere and endure and remain stationed and fear Allah that you may be successful. (3:200)"
    },
    {
      arabic: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
      translation: "Say, 'Never will we be struck except by what Allah has decreed for us; He is our protector.' And upon Allah let the believers rely. (9:51)"
    },
    {
      arabic: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ",
      translation: "And those who strive for Us - We will surely guide them to Our ways. And indeed, Allah is with the doers of good. (29:69)"
    },
    {
      arabic: "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً فَادْخُلِي فِي عِبَادِي وَادْخُلِي جَنَّتِي",
      translation: "[To the righteous it will be said], 'O reassured soul, return to your Lord, well-pleased and pleasing [to Him], and enter among My [righteous] servants and enter My Paradise.' (89:27–30)"
    }
  ];
  
  let currentAyah = null;

  function loadRandomAyah() {
    currentAyah = ayahs[Math.floor(Math.random() * ayahs.length)];
    document.getElementById('arabic').innerText = currentAyah.arabic;
    document.getElementById('translation').innerText = currentAyah.translation;
  }
  
  function openTafsir() {
    if (currentAyah && currentAyah.tafsir) {
      document.getElementById('tafsir-text').innerText = currentAyah.tafsir;
      document.getElementById('tafsir-modal').style.display = 'block';
    }
  }
  
  function closeTafsir() {
    document.getElementById('tafsir-modal').style.display = 'none';
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById('tafsir-modal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  