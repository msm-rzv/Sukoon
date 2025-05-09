const ayahs = [
    {
      arabic: "وَقَالُوا ٱلْحَمْدُ لِلَّهِ ٱلَّذِىٓ أَذْهَبَ عَنَّا ٱلْحَزَنَ ۖ إِنَّ رَبَّنَا لَغَفُورٌۭ شَكُورٌ ۝",
      translation: "And they will say, 'Praise be to Allah, Who has kept away from us all ˹causes of˺ sorrow. Our Lord is indeed All-Forgiving, Most Appreciative.’ (35:34)",
      tafsir: "Some exegesis say that the sadness refers to the grief that shadows people due to the trials of life, and that it is removed when they enter heaven; thus, they are praising God for the removal of that grief. There is also a view that sadness refers to a sadness that befalls them after they pass away. It is also said that they are still troubled by the touch of their misdeeds when they enter the eternal garden [and then it is removed]. However, this would be for the person who 'wrongs his own soul' or the 'one who takes a middle course'; those who are foremost in good deeds do not have evils in their book of deeds to suffer for. This view most closely matches what they say: 'Our Lord is forgiving, gracious.'"
    },
    {
      arabic: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا ٱصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَٱتَّقُوا ٱللَّهَ لَعَلَّكُمْ تُفْلِحُونَ ۝",
      translation: "O you who believe! Be patient and help each other in patience and remain lined up; and fear (the wrath) of Allah that you may be successful. (3:200)",
      tafsir: "The order is unrestricted. The clause, ‘be patient’, covers every type of patience: Patience in hardships, patience in the obedience of God, and patience against the disobedience of God. However, it refers to an individual's patience, as the next clause shows. al-Muṣābarah translated here as helping each other in patience, literally means vying with one another in being patient. It implies collective patience when individuals bear a common hardship together and each one's patience is augmented by others' steadfastness. In this way, their strength is enhanced, their patience redoubled and its effect multiplied. This phenomenon may easily be experienced, if we first look at an individual as a single person, and then look at his behavior in a group when he becomes a part of a collective whole, each one acting on and reacting towards the others. ... and remain lined up; and fear (the wrath of) Allah, that you may be successful: al-murābaṭah is more comprehensive than al-muṣābarah because al-murābaṭah implies people's linking up with one another in their powers, faculties, and activities in all affairs of their religious life — in time of ease as well as in difficulties. As the main aim of these orders is to let the believers attain the reality of happiness of this world and the next — otherwise only partial worldly happiness can be achieved, which obviously is not the real happiness — these orders have been followed by the words, ‘and fear (the wrath of) God, that you may be successful’, that is, you may achieve total and real happiness and success."
    },
    {
      arabic: "قُل لَّن يُصِيبَنَآ إِلَّا مَا كَتَبَ ٱللَّهُ لَنَا هُوَ مَوْلَىٰنَا ۚ وَعَلَى ٱللَّهِ فَلْيَتَوَكَّلِ ٱلْمُؤْمِنُونَ ۝",
      translation: "Say, 'Never will we be struck except by what Allah has decreed for us; He is our protector.' And upon Allah let the believers rely. (9:51)",
      tafsir: "In short, it is God alone who looks after our affairs—as shown by the statement, He is our patron, which is phrased in such a way as to indicate exclusivity—and we have no say in the matter, nor any control over these apparent causes. On the contrary, the truth is that the affair rests entirely with God and He has foreordained whatever good or evil and benefit or harm will reach us. This being the case, we should only focus on obeying His commands and striving to uphold His cause. It is God's will that determines whatever good or bad will befall us—God's servants must turn over their affairs to Him, and this is the meaning of trusting in God (tawakkul)."
    },
    {
      arabic: "وَٱلَّذِينَ جَـٰهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ ٱللَّهَ لَمَعَ ٱلْمُحْسِنِينَ ۝",
      translation: "And those who strive for Us—We will surely guide them to Our ways. And indeed, Allah is with the doers of good. (29:69)",
      tafsir: "‘We shall surely guide them in Our ways...’: God affirms the existence of ways (subul) for Himself and whatever these may be, they all lead to Him, as a way (sabil) is nothing other than a means of reaching that to which it belongs, meaning its destination. Therefore, God's ways are those which bring people closer to Him and guide them towards Him. And insofar as the act of striving is itself a form of guidance, this means that guidance to God's ways is a kind of guidance upon guidance, as God alludes to in the verse: As for those who are guided, He enhances their guidance (47:17). Based on the above, we can see that there is no need to interpret 'in Us' as belonging to an implicit possessive construct to the effect of 'for Our sake'... and Allah is indeed with the virtuous: Some have said God's being with them means in the sense of His assistance and support and this is supported by the fact this phrase appears alongside mention of striving. This is a plausible..."
    }

  ];

  let currentAyah = null;

  window.onload = function () {
    loadRandomAyah();
  };

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
  
  