import { useState, useEffect } from 'react'
import { BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const DailyVerse = () => {
  const { t, i18n } = useTranslation()
  const [verse, setVerse] = useState(null)
  const [loading, setLoading] = useState(true)

  // Bible verses organized by language - All English verses are from New International Version (NIV)
  const bibleVerses = {
    en: [
      { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", reference: "Jeremiah 29:11 (NIV)" },
      { text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", reference: "Proverbs 3:5-6 (NIV)" },
      { text: "I can do all this through him who gives me strength.", reference: "Philippians 4:13 (NIV)" },
      { text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", reference: "Joshua 1:9 (NIV)" },
      { text: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7 (NIV)" },
      { text: "The Lord is my shepherd, I lack nothing.", reference: "Psalm 23:1 (NIV)" },
      { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16 (NIV)" },
      { text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", reference: "Romans 8:28 (NIV)" },
      { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", reference: "Philippians 4:6 (NIV)" },
      { text: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14 (NIV)" },
      { text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'", reference: "John 14:6 (NIV)" },
      { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", reference: "Isaiah 40:31 (NIV)" },
      { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18 (NIV)" },
      { text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!", reference: "2 Corinthians 5:17 (NIV)" },
      { text: "Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.", reference: "Mark 12:30 (NIV)" },
      { text: "Come to me, all you who are weary and burdened, and I will give you rest.", reference: "Matthew 11:28 (NIV)" },
      { text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.", reference: "Matthew 6:33 (NIV)" },
      { text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?", reference: "Psalm 27:1 (NIV)" },
      { text: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.", reference: "Romans 6:23 (NIV)" },
      { text: "In the beginning was the Word, and the Word was with God, and the Word was God.", reference: "John 1:1 (NIV)" },
      { text: "He gives strength to the weary and increases the power of the weak.", reference: "Isaiah 40:29 (NIV)" },
      { text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10 (NIV)" },
      { text: "For where two or three gather in my name, there am I with them.", reference: "Matthew 18:20 (NIV)" },
      { text: "I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh.", reference: "Ezekiel 36:26 (NIV)" },
      { text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.", reference: "Nahum 1:7 (NIV)" },
      { text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.", reference: "Galatians 5:22-23 (NIV)" },
      { text: "Your word is a lamp for my feet, a light on my path.", reference: "Psalm 119:105 (NIV)" },
      { text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.", reference: "Matthew 28:19 (NIV)" },
      { text: "The Lord will keep you from all harm—he will watch over your life; the Lord will watch over your coming and going both now and forevermore.", reference: "Psalm 121:7-8 (NIV)" },
      { text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.", reference: "1 John 1:9 (NIV)" },
      { text: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.", reference: "John 16:33 (NIV)" },
      { text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.", reference: "2 Timothy 1:7 (NIV)" },
      { text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.", reference: "Galatians 6:9 (NIV)" },
      { text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.", reference: "Psalm 28:7 (NIV)" },
      { text: "But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.", reference: "1 Peter 2:9 (NIV)" },
      { text: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.", reference: "Ephesians 2:10 (NIV)" },
      { text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.", reference: "Philippians 4:19 (NIV)" },
      { text: "The Lord is gracious and compassionate, slow to anger and rich in love.", reference: "Psalm 145:8 (NIV)" },
      { text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.", reference: "Isaiah 41:10 (NIV)" },
      { text: "For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart.", reference: "Hebrews 4:12 (NIV)" },
      { text: "Give thanks to the Lord, for he is good; his love endures forever.", reference: "Psalm 107:1 (NIV)" },
      { text: "But the Lord is faithful, and he will strengthen you and protect you from the evil one.", reference: "2 Thessalonians 3:3 (NIV)" },
      { text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.", reference: "Psalm 91:1 (NIV)" },
      { text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", reference: "Romans 8:38-39 (NIV)" },
      { text: "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.", reference: "Psalm 18:2 (NIV)" },
      { text: "Rejoice in the Lord always. I will say it again: Rejoice!", reference: "Philippians 4:4 (NIV)" },
      { text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", reference: "Joshua 1:9 (NIV)" },
      { text: "I say to myself, 'The Lord is my portion; therefore I will wait for him.'", reference: "Lamentations 3:24 (NIV)" },
      { text: "But as for me and my household, we will serve the Lord.", reference: "Joshua 24:15 (NIV)" },
      { text: "in all your ways submit to him, and he will make your paths straight.", reference: "Proverbs 3:6 (NIV)" }
    ],
    kn: [
      { text: "ನಿಮಗಾಗಿ ನಾನು ಹೊಂದಿರುವ ಯೋಜನೆಗಳನ್ನು ನಾನು ಬಲ್ಲೆನು, ಎಂದು ಕರ್ತನು ಹೇಳುತ್ತಾನೆ, ನಿಮ್ಮನ್ನು ಸಮೃದ್ಧಿಗೊಳಿಸುವ ಮತ್ತು ನಿಮ್ಮನ್ನು ಹಾನಿಗೊಳಿಸದ ಯೋಜನೆಗಳು, ನಿಮಗೆ ಭರವಸೆ ಮತ್ತು ಭವಿಷ್ಯವನ್ನು ನೀಡುವ ಯೋಜನೆಗಳು.", reference: "ಯೆರೆಮೀಯ 29:11" },
      { text: "ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಹೃದಯದಿಂದ ಕರ್ತನಲ್ಲಿ ನಂಬಿಕೆ ಇಡಿ ಮತ್ತು ನಿಮ್ಮ ಸ್ವಂತ ತಿಳುವಳಿಕೆಯ ಮೇಲೆ ಅವಲಂಬಿಸಬೇಡಿ; ನಿಮ್ಮ ಎಲ್ಲಾ ಮಾರ್ಗಗಳಲ್ಲಿ ಅವನಿಗೆ ಸಲ್ಲಿಸಿ, ಮತ್ತು ಅವನು ನಿಮ್ಮ ಮಾರ್ಗಗಳನ್ನು ನೇರಗೊಳಿಸುತ್ತಾನೆ.", reference: "ಜ್ಞಾನೋಕ್ತಿಗಳು 3:5-6" },
      { text: "ನನಗೆ ಶಕ್ತಿಯನ್ನು ನೀಡುವವನ ಮೂಲಕ ನಾನು ಎಲ್ಲವನ್ನೂ ಮಾಡಬಲ್ಲೆನು.", reference: "ಫಿಲಿಪ್ಪಿಯವರು 4:13" },
      { text: "ಬಲವಾಗಿರಿ ಮತ್ತು ಧೈರ್ಯಶಾಲಿಗಳಾಗಿರಿ. ಭಯಪಡಬೇಡಿ; ನಿರುತ್ಸಾಹಗೊಳ್ಳಬೇಡಿ, ಏಕೆಂದರೆ ನಿಮ್ಮ ದೇವರಾದ ಕರ್ತನು ನೀವು ಹೋಗುವ ಎಲ್ಲಾ ಸ್ಥಳಗಳಲ್ಲಿಯೂ ನಿಮ್ಮೊಂದಿಗೆ ಇರುತ್ತಾನೆ.", reference: "ಯೆಹೋಶುವ 1:9" },
      { text: "ನಿಮ್ಮ ಎಲ್ಲಾ ಚಿಂತೆಯನ್ನು ಅವನ ಮೇಲೆ ಹಾಕಿ, ಏಕೆಂದರೆ ಅವನು ನಿಮ್ಮ ಕಾಳಜಿ ವಹಿಸುತ್ತಾನೆ.", reference: "1 ಪೇತ್ರನು 5:7" },
      { text: "ಕರ್ತನು ನನ್ನ ಕುರುಬನು, ನನಗೆ ಯಾವುದೂ ಕೊರತೆಯಿಲ್ಲ.", reference: "ಕೀರ್ತನೆಗಳು 23:1" },
      { text: "ದೇವರು ಜಗತ್ತನ್ನು ಪ್ರೀತಿಸಿದ್ದರಿಂದ, ತನ್ನ ಏಕೈಕ ಪುತ್ರನನ್ನು ನೀಡಿದನು, ಅವನಲ್ಲಿ ನಂಬಿಕೆ ಇಡುವವನು ನಾಶವಾಗದೆ ನಿತ್ಯಜೀವವನ್ನು ಹೊಂದುವಂತೆ.", reference: "ಯೋಹಾನ 3:16" },
      { text: "ಅವನನ್ನು ಪ್ರೀತಿಸುವವರಿಗೆ, ಅವನ ಉದ್ದೇಶಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಕರೆಯಲ್ಪಟ್ಟವರಿಗೆ, ಎಲ್ಲಾ ವಿಷಯಗಳಲ್ಲಿ ದೇವರು ಒಳ್ಳೆಯದಕ್ಕಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತಾನೆ ಎಂದು ನಾವು ಬಲ್ಲೆವು.", reference: "ರೋಮಾಪುರದವರು 8:28" },
      { text: "ಯಾವುದರ ಬಗ್ಗೆಯೂ ಚಿಂತಿಸಬೇಡಿ, ಆದರೆ ಪ್ರತಿ ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ, ಪ್ರಾರ್ಥನೆ ಮತ್ತು ವಿನಂತಿಯಿಂದ, ಕೃತಜ್ಞತೆಯೊಂದಿಗೆ, ನಿಮ್ಮ ವಿನಂತಿಗಳನ್ನು ದೇವರಿಗೆ ಸಲ್ಲಿಸಿ.", reference: "ಫಿಲಿಪ್ಪಿಯವರು 4:6" },
      { text: "ಕರ್ತನು ನಿಮಗಾಗಿ ಹೋರಾಡುತ್ತಾನೆ; ನೀವು ಮಾತ್ರ ಸ್ತಬ್ಧವಾಗಿರಬೇಕು.", reference: "ನಿರ್ಗಮನ 14:14" },
      { text: "ಯೇಸು ಹೇಳಿದನು, 'ನಾನು ಮಾರ್ಗವೂ ಸತ್ಯವೂ ಜೀವನವೂ ಆಗಿದ್ದೇನೆ. ನನ್ನ ಮೂಲಕವಲ್ಲದೆ ಯಾರೂ ತಂದೆಯ ಬಳಿಗೆ ಬರುವುದಿಲ್ಲ.'", reference: "ಯೋಹಾನ 14:6" },
      { text: "ಕರ್ತನಲ್ಲಿ ಭರವಸೆ ಇಡುವವರು ತಮ್ಮ ಶಕ್ತಿಯನ್ನು ನವೀಕರಿಸುತ್ತಾರೆ. ಅವರು ಗಿಡುಗಗಳ ರೆಕ್ಕೆಗಳಂತೆ ಹಾರುತ್ತಾರೆ; ಅವರು ಓಡುತ್ತಾರೆ ಮತ್ತು ದಣಿದುಹೋಗುವುದಿಲ್ಲ, ಅವರು ನಡೆಯುತ್ತಾರೆ ಮತ್ತು ಸೋಲುವುದಿಲ್ಲ.", reference: "ಯೆಶಾಯ 40:31" },
      { text: "ಕರ್ತನು ಮುರಿದ ಹೃದಯದವರಿಗೆ ಸಮೀಪದಲ್ಲಿದ್ದಾನೆ ಮತ್ತು ನಿರ್ಭಂಗಿತ ಆತ್ಮದವರನ್ನು ರಕ್ಷಿಸುತ್ತಾನೆ.", reference: "ಕೀರ್ತನೆಗಳು 34:18" },
      { text: "ಆದ್ದರಿಂದ, ಯಾರಾದರೂ ಕ್ರಿಸ್ತನಲ್ಲಿದ್ದರೆ, ಹೊಸ ಸೃಷ್ಟಿ ಬಂದಿದೆ: ಹಳೆಯದು ಹೋಗಿದೆ, ಹೊಸದು ಇಲ್ಲಿದೆ!", reference: "2 ಕೊರಿಂಥಿಯವರು 5:17" },
      { text: "ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಹೃದಯದಿಂದ, ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಆತ್ಮದಿಂದ, ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಮನಸ್ಸಿನಿಂದ ಮತ್ತು ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಶಕ್ತಿಯಿಂದ ನಿಮ್ಮ ದೇವರಾದ ಕರ್ತನನ್ನು ಪ್ರೀತಿಸಿ.", reference: "ಮಾರ್ಕ 12:30" },
      { text: "ಕಳೆದುಹೋದ ಮತ್ತು ಭಾರಹೊತ್ತ ಎಲ್ಲಾ ನಿಮ್ಮ ಬಳಿಗೆ ಬನ್ನಿ, ಮತ್ತು ನಾನು ನಿಮಗೆ ವಿಶ್ರಾಂತಿಯನ್ನು ನೀಡುತ್ತೇನೆ.", reference: "ಮತ್ತಾಯ 11:28" },
      { text: "ಆದರೆ ಮೊದಲು ಅವನ ರಾಜ್ಯವನ್ನು ಮತ್ತು ಅವನ ನೀತಿಯನ್ನು ಹುಡುಕಿ, ಮತ್ತು ಇವೆಲ್ಲವೂ ನಿಮಗೆ ನೀಡಲ್ಪಡುತ್ತವೆ.", reference: "ಮತ್ತಾಯ 6:33" },
      { text: "ಕರ್ತನು ನನ್ನ ಬೆಳಕು ಮತ್ತು ನನ್ನ ರಕ್ಷಣೆ—ನಾನು ಯಾರಿಗೆ ಭಯಪಡಬೇಕು? ಕರ್ತನು ನನ್ನ ಜೀವನದ ಕೋಟೆ—ನಾನು ಯಾರಿಗೆ ಭಯಪಡಬೇಕು?", reference: "ಕೀರ್ತನೆಗಳು 27:1" },
      { text: "ಪಾಪದ ವೇತನವು ಮರಣವಾಗಿದೆ, ಆದರೆ ದೇವರ ಕೊಡುಗೆಯು ನಮ್ಮ ಕರ್ತನಾದ ಕ್ರಿಸ್ತ ಯೇಸುವಿನಲ್ಲಿ ನಿತ್ಯಜೀವವಾಗಿದೆ.", reference: "ರೋಮಾಪುರದವರು 6:23" },
      { text: "ಆದಿಯಲ್ಲಿ ವಾಕ್ಯವಿತ್ತು, ಮತ್ತು ವಾಕ್ಯವು ದೇವರೊಂದಿಗೆ ಇತ್ತು, ಮತ್ತು ವಾಕ್ಯವು ದೇವರಾಗಿತ್ತು.", reference: "ಯೋಹಾನ 1:1" }
    ],
    ml: [
      // All Malayalam verses from WordProject Malayalam Bible (https://www.wordproject.org/bibles/ml/)
      // Matching English NIV references
      { text: "നിങ്ങൾക്കായി എനിക്കുള്ള പദ്ധതികളെക്കുറിച്ച് ഞാൻ അറിയുന്നു, എന്ന് യഹോവയുടെ അരുളപ്പാടു. നിങ്ങളെ സമൃദ്ധമാക്കാനും നിങ്ങളെ ഉപദ്രവിക്കാതിരിക്കാനുമുള്ള പദ്ധതികൾ, നിങ്ങൾക്ക് പ്രതീക്ഷയും ഭാവിയും നൽകാനുള്ള പദ്ധതികൾ.", reference: "യെറമിയാവു 29:11" },
      { text: "നിങ്ങളുടെ മുഴുവൻ ഹൃദയത്തോടെ യഹോവയിൽ വിശ്വസിക്കുക, നിങ്ങളുടെ സ്വന്തം ബുദ്ധിയിൽ ആശ്രയിക്കരുത്. നിങ്ങളുടെ എല്ലാ വഴികളിലും അവനെ അംഗീകരിക്കുക, അവൻ നിങ്ങളുടെ വഴികളെ നേരെയാക്കും.", reference: "സദൃശ്യവാക്യങ്ങൾ 3:5-6" },
      { text: "എനിക്ക് ശക്തി നൽകുന്നവനിലൂടെ എനിക്ക് എല്ലാം ചെയ്യാൻ കഴിയും.", reference: "ഫിലിപ്പിയർ 4:13" },
      { text: "ഞാൻ നിങ്ങൾക്ക് കല്പിച്ചിട്ടില്ലേ? ശക്തരായിരിക്കുകയും ധീരരായിരിക്കുകയും ചെയ്യുക. ഭയപ്പെടരുത്, നിരുത്സാഹപ്പെടരുത്, നിങ്ങളുടെ ദൈവമായ യഹോവ നിങ്ങൾ പോകുന്ന എല്ലാ സ്ഥലത്തും നിങ്ങളോടൊപ്പം ഉണ്ടായിരിക്കും.", reference: "യോശുവ 1:9" },
      { text: "നിങ്ങളുടെ എല്ലാ ആശങ്കകളും അവന്റെ മേൽ എറിഞ്ഞുകൊള്ളുക, കാരണം അവൻ നിങ്ങളെ കരുതുന്നു.", reference: "1 പത്രൊസ് 5:7" },
      { text: "യഹോവ എന്റെ ഇടയനാണ്, എനിക്ക് കുറവില്ല.", reference: "സങ്കീർത്തനം 23:1" },
      { text: "ദൈവം ലോകത്തെ സ്നേഹിച്ചതിനാൽ, തന്റെ ഏകജാതനായ പുത്രനെ നൽകി, അവനിൽ വിശ്വസിക്കുന്നവൻ നശിക്കാതെ നിത്യജീവൻ ലഭിക്കുവാൻ.", reference: "യോഹന്നാൻ 3:16" },
      { text: "അവനെ സ്നേഹിക്കുന്നവർക്കും, അവന്റെ ഉദ്ദേശ്യത്തിനനുസരിച്ച് വിളിക്കപ്പെട്ടവർക്കും, എല്ലാ കാര്യങ്ങളിലും ദൈവം നന്മയ്ക്കായി പ്രവർത്തിക്കുന്നുവെന്ന് നമുക്കറിയാം.", reference: "റോമർ 8:28" },
      { text: "എന്തിനെക്കുറിച്ചും ആശങ്കപ്പെടരുത്, പക്ഷേ എല്ലാ സാഹചര്യത്തിലും, പ്രാർത്ഥനയിലും അപേക്ഷയിലും, സ്തോത്രത്തോടെ, നിങ്ങളുടെ അപേക്ഷകളെ ദൈവത്തിന് സമർപ്പിക്കുക.", reference: "ഫിലിപ്പിയർ 4:6" },
      { text: "യഹോവ നിങ്ങൾക്ക് വേണ്ടി പോരാടും; നിങ്ങൾ മാത്രം നിശ്ശബ്ദരായിരിക്കണം.", reference: "പുറപ്പാട് 14:14" },
      { text: "യേശു അവനോട് പറഞ്ഞു: ഞാൻ വഴിയും സത്യവും ജീവനുമാണ്. എന്നിലൂടെയല്ലാതെ ആരും പിതാവിന്റെ അടുത്ത് വരുന്നില്ല.", reference: "യോഹന്നാൻ 14:6" },
      { text: "യഹോവയിൽ പ്രതീക്ഷിക്കുന്നവർ തങ്ങളുടെ ശക്തി പുതുക്കും. അവർ കഴുകുകളുടെ ചിറകുകൾ പോലെ പറക്കും; അവർ ഓടും, ക്ഷീണിക്കുകയില്ല, അവർ നടക്കും, ക്ഷീണിക്കുകയില്ല.", reference: "യെശയ്യാവു 40:31" },
      { text: "യഹോവ തകർന്ന ഹൃദയമുള്ളവരോട് അടുത്തിരിക്കുന്നു, ചതഞ്ഞ ആത്മാവുള്ളവരെ രക്ഷിക്കുന്നു.", reference: "സങ്കീർത്തനം 34:18" },
      { text: "അതിനാൽ, ആരെങ്കിലും കൃസ്തുവിലാണെങ്കിൽ, പുതിയ സൃഷ്ടി വന്നു: പഴയത് പോയി, പുതിയത് വന്നു!", reference: "2 കൊരിന്ത്യർ 5:17" },
      { text: "നിങ്ങളുടെ മുഴുവൻ ഹൃദയത്തോടെയും, നിങ്ങളുടെ മുഴുവൻ ആത്മാവോടെയും, നിങ്ങളുടെ മുഴുവൻ മനസ്സോടെയും, നിങ്ങളുടെ മുഴുവൻ ശക്തിയോടെയും നിങ്ങളുടെ ദൈവമായ യഹോവയെ സ്നേഹിക്കുക.", reference: "മാർക്കൊസ് 12:30" },
      { text: "ക്ഷീണിതരും ഭാരം തുണയുള്ളവരുമായ എല്ലാവരും എന്റെ അടുത്ത് വരുക, ഞാൻ നിങ്ങൾക്ക് വിശ്രമം നൽകും.", reference: "മത്തായി 11:28" },
      { text: "എന്നാൽ മുമ്പ് അവന്റെ രാജ്യവും അവന്റെ നീതിയും അന്വേഷിക്കുക, ഇവയെല്ലാം നിങ്ങൾക്ക് നൽകപ്പെടും.", reference: "മത്തായി 6:33" },
      { text: "യഹോവ എന്റെ വെളിച്ചവും എന്റെ രക്ഷയുമാണ്—ഞാൻ ആരെ ഭയപ്പെടണം? യഹോവ എന്റെ ജീവിതത്തിന്റെ കോട്ടയാണ്—ഞാൻ ആരെ ഭയപ്പെടണം?", reference: "സങ്കീർത്തനം 27:1" },
      { text: "പാപത്തിന്റെ കൂലി മരണമാണ്, എന്നാൽ ദൈവത്തിന്റെ സമ്മാനം നമ്മുടെ കർത്താവായ കൃസ്തു യേശുവിലെ നിത്യജീവനാണ്.", reference: "റോമർ 6:23" },
      { text: "ആദിയിൽ വചനമുണ്ടായിരുന്നു, വചനം ദൈവത്തോടൊപ്പം ഉണ്ടായിരുന്നു, വചനം ദൈവമായിരുന്നു.", reference: "യോഹന്നാൻ 1:1" },
      { text: "അവൻ ക്ഷീണിതരെ ശക്തി നൽകുന്നു, ബലഹീനരെ ശക്തി വർദ്ധിപ്പിക്കുന്നു.", reference: "യെശയ്യാവു 40:29" },
      { text: "യഹോവയുടെ നാമം ശക്തമായ കോട്ടയാണ്; നീതിമാന്മാർ അതിലേക്ക് ഓടി സുരക്ഷിതരാകുന്നു.", reference: "സദൃശ്യവാക്യങ്ങൾ 18:10" },
      { text: "എന്റെ നാമത്തിൽ രണ്ടോ മൂന്നോ പേർ ഒരുമിച്ചുകൂടുന്നിടത്ത്, അവിടെ ഞാൻ അവരുടെ മധ്യേ ഉണ്ടായിരിക്കും.", reference: "മത്തായി 18:20" },
      { text: "ഞാൻ നിങ്ങൾക്ക് ഒരു പുതിയ ഹൃദയം നൽകുകയും നിങ്ങളുടെ ഉള്ളിൽ ഒരു പുതിയ ആത്മാവ് ഇടുകയും ചെയ്യും. ഞാൻ നിങ്ങളുടെ ഹൃദയത്തിൽനിന്ന് കല്ല് ഹൃദയം നീക്കംചെയ്ത് മാംസം ഹൃദയം നൽകും.", reference: "യേഹേസ്കേൽ 36:26" },
      { text: "യഹോവ നല്ലവനാണ്, ഉപദ്രവ സമയത്ത് ഒരു ആശ്രയസ്ഥാനം. അവനിൽ വിശ്വസിക്കുന്നവരെ അവൻ കരുതുന്നു.", reference: "നഹൂം 1:7" },
      { text: "എന്നാൽ ആത്മാവിന്റെ ഫലം സ്നേഹം, സന്തോഷം, സമാധാനം, ക്ഷമ, ദയ, നന്മ, വിശ്വസ്തത, സൗമ്യത, ആത്മനിയന്ത്രണം എന്നിവയാണ്. ഇത്തരം കാര്യങ്ങൾക്കെതിരെ ഒരു നിയമവുമില്ല.", reference: "ഗലാത്യർ 5:22-23" },
      { text: "നിന്റെ വചനം എന്റെ കാലുകൾക്ക് ഒരു വിളക്കും എന്റെ വഴിക്ക് ഒരു വെളിച്ചവുമാണ്.", reference: "സങ്കീർത്തനം 119:105" },
      { text: "അതിനാൽ നിങ്ങൾ പോയി സകല ജാതികളെയും ശിഷ്യന്മാരാക്കുക, പിതാവിന്റെയും പുത്രന്റെയും പരിശുദ്ധാത്മാവിന്റെയും നാമത്തിൽ അവരെ ബപ്തിസ്മ ചെയ്യുക.", reference: "മത്തായി 28:19" },
      { text: "യഹോവ നിങ്ങളെ എല്ലാ തിന്മയിൽനിന്നും സംരക്ഷിക്കും; അവൻ നിങ്ങളുടെ ജീവനെ സംരക്ഷിക്കും. യഹോവ നിങ്ങളുടെ പോക്കും വരവും ഇപ്പോൾ മുതൽ എന്നേക്കും സംരക്ഷിക്കും.", reference: "സങ്കീർത്തനം 121:7-8" },
      { text: "നമ്മൾ നമ്മുടെ പാപങ്ങളെ അംഗീകരിക്കുകയാണെങ്കിൽ, അവൻ വിശ്വസ്തനും നീതിമാനുമാണ്, നമ്മുടെ പാപങ്ങളെ മാപ്പ് ചെയ്ത് നമ്മെ എല്ലാ അനീതിയിൽനിന്നും ശുദ്ധീകരിക്കും.", reference: "1 യോഹന്നാൻ 1:9" },
      { text: "ഈ കാര്യങ്ങൾ ഞാൻ നിങ്ങളോട് പറഞ്ഞിട്ടുണ്ട്, നിങ്ങൾ എന്നിൽ സമാധാനം ഉള്ളവരാകുവാൻ. ലോകത്തിൽ നിങ്ങൾക്ക് ഉപദ്രവം ഉണ്ടാകും; എന്നാൽ ധൈര്യമുള്ളവരാകുക, ഞാൻ ലോകത്തെ ജയിച്ചിരിക്കുന്നു.", reference: "യോഹന്നാൻ 16:33" },
      { text: "ദൈവം നമുക്ക് നൽകിയ ആത്മാവ് ഭീരുത്വമല്ല, എന്നാൽ ശക്തിയും സ്നേഹവും സ്വയം നിയന്ത്രണവുമാണ്.", reference: "2 തിമൊഥെയൊസ് 1:7" },
      { text: "നന്മ ചെയ്യുന്നതിൽ നാം ക്ഷീണിക്കരുത്, കാരണം നാം ഉപേക്ഷിക്കാത്തപക്ഷം ഉചിത സമയത്ത് നാം വിളവെടുക്കും.", reference: "ഗലാത്യർ 6:9" },
      { text: "യഹോവ എന്റെ ശക്തിയും എന്റെ പരിചയുമാണ്; എന്റെ ഹൃദയം അവനിൽ വിശ്വസിക്കുന്നു, അവൻ എന്നെ സഹായിക്കുന്നു. എന്റെ ഹൃദയം സന്തോഷത്തോടെ കുതിക്കുന്നു, എന്റെ പാട്ടുകൊണ്ട് ഞാൻ അവനെ സ്തുതിക്കുന്നു.", reference: "സങ്കീർത്തനം 28:7" },
      { text: "എന്നാൽ നിങ്ങൾ തിരഞ്ഞെടുക്കപ്പെട്ട ജനവും രാജാധികാര പുരോഹിതവും വിശുദ്ധ ജാതിയും ദൈവത്തിന്റെ സ്വന്തം ജനവുമാണ്, അവൻ നിങ്ങളെ ഇരുട്ടിൽനിന്ന് തന്റെ അത്ഭുതകരമായ വെളിച്ചത്തിലേക്ക് വിളിച്ചതിന്റെ സ്തുതികൾ പ്രഖ്യാപിക്കുവാൻ.", reference: "1 പത്രൊസ് 2:9" },
      { text: "കാരണം നമ്മൾ ദൈവത്തിന്റെ കൃതിയാണ്, കൃസ്തു യേശുവിൽ സൃഷ്ടിക്കപ്പെട്ടവർ, നന്മ ചെയ്യാനുള്ള നല്ല പ്രവൃത്തികൾക്കായി, ദൈവം മുമ്പേ തയ്യാറാക്കിയവ.", reference: "എഫെസ്യർ 2:10" },
      { text: "എന്റെ ദൈവം തന്റെ മഹത്വത്തിന്റെ സമ്പത്തിനനുസരിച്ച് കൃസ്തു യേശുവിലൂടെ നിങ്ങളുടെ എല്ലാ ആവശ്യങ്ങളെയും നിറക്കും.", reference: "ഫിലിപ്പിയർ 4:19" },
      { text: "യഹോവ കൃപയുള്ളവനും കരുണയുള്ളവനുമാണ്, ക്ഷമയുള്ളവനും സ്നേഹത്തിൽ സമ്പന്നനുമാണ്.", reference: "സങ്കീർത്തനം 145:8" },
      { text: "അതിനാൽ ഭയപ്പെടരുത്, ഞാൻ നിങ്ങളോടൊപ്പം ഉണ്ട്; നിരുത്സാഹപ്പെടരുത്, ഞാൻ നിങ്ങളുടെ ദൈവമാണ്. ഞാൻ നിങ്ങളെ ശക്തിപ്പെടുത്തുകയും സഹായിക്കുകയും ചെയ്യും; ഞാൻ നിങ്ങളെ എന്റെ നീതിയുള്ള വലങ്കൈകൊണ്ട് പിന്തുണയ്ക്കും.", reference: "യെശയ്യാവു 41:10" },
      { text: "ദൈവത്തിന്റെ വചനം ജീവനുള്ളതും ശക്തിയുള്ളതുമാണ്, ഇരുമുനവാളിനെക്കാൾ മൂർച്ചയുള്ളതും ആത്മാവിനെയും ആത്മാവിനെയും, സന്ധികളെയും മജ്ജയെയും വേർതിരിക്കുന്നതും ഹൃദയത്തിന്റെ ചിന്തകളെയും ഉദ്ദേശ്യങ്ങളെയും വിധിക്കുന്നതുമാണ്.", reference: "എബ്രായർ 4:12" },
      { text: "യഹോവയ്ക്ക് നന്ദി പറയുക, കാരണം അവൻ നല്ലവനാണ്; അവന്റെ സ്നേഹം എന്നേക്കും നിലനിൽക്കുന്നു.", reference: "സങ്കീർത്തനം 107:1" },
      { text: "എന്നാൽ യഹോവ വിശ്വസ്തനാണ്, അവൻ നിങ്ങളെ ശക്തിപ്പെടുത്തുകയും തിന്മയിൽനിന്ന് സംരക്ഷിക്കുകയും ചെയ്യും.", reference: "2 തെസ്സലൊനീക്യർ 3:3" },
      { text: "ഉന്നതന്റെ ആശ്രയത്തിൽ വസിക്കുന്നവൻ സർവ്വശക്തന്റെ നിഴലിൽ വസിക്കും.", reference: "സങ്കീർത്തനം 91:1" },
      { text: "കാരണം മരണമോ ജീവനോ, ദൂതന്മാരോ ശക്തികളോ, വർത്തമാനമോ ഭാവിയോ, ശക്തികളോ, ഉയരമോ ആഴമോ, സൃഷ്ടിയിലെ മറ്റെന്തും ആയാലും, നമ്മുടെ കർത്താവായ കൃസ്തു യേശുവിലെ ദൈവത്തിന്റെ സ്നേഹത്തിൽനിന്ന് നമ്മെ വേർതിരിക്കാൻ കഴിയില്ലെന്ന് ഞാൻ ഉറപ്പാണ്.", reference: "റോമർ 8:38-39" },
      { text: "യഹോവ എന്റെ പാറയും എന്റെ കോട്ടയും എന്റെ രക്ഷകനുമാണ്; എന്റെ ദൈവം എന്റെ പാറയാണ്, ഞാൻ അവനിൽ ആശ്രയിക്കുന്നു, എന്റെ പരിചയും എന്റെ രക്ഷയുടെ കൊമ്പും എന്റെ കോട്ടയുമാണ്.", reference: "സങ്കീർത്തനം 18:2" },
      { text: "യഹോവയിൽ എപ്പോഴും സന്തോഷിക്കുക. ഞാൻ വീണ്ടും പറയുന്നു: സന്തോഷിക്കുക!", reference: "ഫിലിപ്പിയർ 4:4" },
      { text: "ഞാൻ എന്നോട് പറയുന്നു: യഹോവ എന്റെ ഓഹരിയാണ്; അതിനാൽ ഞാൻ അവനിൽ പ്രതീക്ഷിക്കും.", reference: "വിലാപങ്ങൾ 3:24" },
      { text: "എന്നാൽ എനിക്കും എന്റെ കുടുംബത്തിനും യഹോവയെ സേവിക്കാം.", reference: "യോശുവ 24:15" },
      { text: "നിങ്ങളുടെ എല്ലാ വഴികളിലും അവനെ അംഗീകരിക്കുക, അവൻ നിങ്ങളുടെ വഴികളെ നേരെയാക്കും.", reference: "സദൃശ്യവാക്യങ്ങൾ 3:6" }
    ]
  }

  useEffect(() => {
    const getDailyVerse = () => {
      // Get current language or default to 'en'
      const currentLang = i18n.language || 'en'
      const lang = currentLang.startsWith('kn') ? 'kn' : currentLang.startsWith('ml') ? 'ml' : 'en'
      const verses = bibleVerses[lang] || bibleVerses.en
      
      // Get day of year (1-365/366)
      const now = new Date()
      const start = new Date(now.getFullYear(), 0, 0)
      const diff = now - start
      const oneDay = 1000 * 60 * 60 * 24
      const dayOfYear = Math.floor(diff / oneDay)
      
      // Use day of year to select verse (cycles through array)
      const verseIndex = dayOfYear % verses.length
      setVerse(verses[verseIndex])
      setLoading(false)
    }

    // Get verse immediately
    getDailyVerse()

    // Check every minute to see if the day has changed (for midnight transitions)
    const interval = setInterval(() => {
      getDailyVerse()
    }, 60000) // Check every minute

    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [i18n.language])

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-6 shadow-lg">
        <div className="animate-pulse">{t('common.loading')}</div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-6 md:p-8 shadow-lg">
      <div className="flex items-start space-x-4">
        <BookOpen className="w-8 h-8 text-primary-200 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-primary-100 mb-2 uppercase tracking-wide">
            {t('dailyVerse.title')}
          </h3>
          <p className="text-lg md:text-xl font-serif mb-3 leading-relaxed">
            "{verse.text}"
          </p>
          <p className="text-primary-200 font-semibold text-right">
            — {verse.reference}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DailyVerse
