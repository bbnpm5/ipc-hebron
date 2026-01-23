import { useState, useEffect } from 'react'
import { BookOpen } from 'lucide-react'

const DailyVerse = () => {
  const [verse, setVerse] = useState(null)
  const [loading, setLoading] = useState(true)

  // Bible verses array - rotates based on day of year
  const bibleVerses = [
    {
      text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      reference: "Jeremiah 29:11"
    },
    {
      text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      reference: "Proverbs 3:5-6"
    },
    {
      text: "I can do all this through him who gives me strength.",
      reference: "Philippians 4:13"
    },
    {
      text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
      reference: "Joshua 1:9"
    },
    {
      text: "Cast all your anxiety on him because he cares for you.",
      reference: "1 Peter 5:7"
    },
    {
      text: "The Lord is my shepherd, I lack nothing.",
      reference: "Psalm 23:1"
    },
    {
      text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      reference: "John 3:16"
    },
    {
      text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      reference: "Romans 8:28"
    },
    {
      text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      reference: "Philippians 4:6"
    },
    {
      text: "The Lord will fight for you; you need only to be still.",
      reference: "Exodus 14:14"
    },
    {
      text: "Jesus said, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
      reference: "John 14:6"
    },
    {
      text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      reference: "Isaiah 40:31"
    },
    {
      text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
      reference: "Psalm 34:18"
    },
    {
      text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
      reference: "2 Corinthians 5:17"
    },
    {
      text: "Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.",
      reference: "Mark 12:30"
    },
    {
      text: "Come to me, all you who are weary and burdened, and I will give you rest.",
      reference: "Matthew 11:28"
    },
    {
      text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
      reference: "Matthew 6:33"
    },
    {
      text: "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.",
      reference: "Galatians 2:20"
    },
    {
      text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
      reference: "Psalm 27:1"
    },
    {
      text: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
      reference: "Romans 6:23"
    },
    {
      text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
      reference: "John 1:1"
    },
    {
      text: "He gives strength to the weary and increases the power of the weak.",
      reference: "Isaiah 40:29"
    },
    {
      text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
      reference: "Proverbs 18:10"
    },
    {
      text: "For where two or three gather in my name, there am I with them.",
      reference: "Matthew 18:20"
    },
    {
      text: "I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh.",
      reference: "Ezekiel 36:26"
    },
    {
      text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.",
      reference: "Nahum 1:7"
    },
    {
      text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
      reference: "Galatians 5:22-23"
    },
    {
      text: "Your word is a lamp for my feet, a light on my path.",
      reference: "Psalm 119:105"
    },
    {
      text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
      reference: "Matthew 28:19"
    },
    {
      text: "The Lord will keep you from all harm—he will watch over your life; the Lord will watch over your coming and going both now and forevermore.",
      reference: "Psalm 121:7-8"
    },
    {
      text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
      reference: "1 John 1:9"
    },
    {
      text: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
      reference: "John 16:33"
    },
    {
      text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      reference: "2 Timothy 1:7"
    },
    {
      text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
      reference: "Galatians 6:9"
    },
    {
      text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.",
      reference: "Psalm 28:7"
    },
    {
      text: "But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
      reference: "1 Peter 2:9"
    },
    {
      text: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      reference: "Ephesians 2:10"
    },
    {
      text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
      reference: "Philippians 4:19"
    },
    {
      text: "The Lord is gracious and compassionate, slow to anger and rich in love.",
      reference: "Psalm 145:8"
    },
    {
      text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
      reference: "Isaiah 41:10"
    },
    {
      text: "For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart.",
      reference: "Hebrews 4:12"
    },
    {
      text: "Give thanks to the Lord, for he is good; his love endures forever.",
      reference: "Psalm 107:1"
    },
    {
      text: "But the Lord is faithful, and he will strengthen you and protect you from the evil one.",
      reference: "2 Thessalonians 3:3"
    },
    {
      text: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.",
      reference: "Psalm 91:1"
    },
    {
      text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
      reference: "Romans 8:38-39"
    },
    {
      text: "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
      reference: "Psalm 18:2"
    },
    {
      text: "Rejoice in the Lord always. I will say it again: Rejoice!",
      reference: "Philippians 4:4"
    },
    {
      text: "For the Lord your God is with you wherever you go.",
      reference: "Joshua 1:9"
    },
    {
      text: "The Lord is my portion; therefore I will wait for him.",
      reference: "Lamentations 3:24"
    },
    {
      text: "But as for me and my household, we will serve the Lord.",
      reference: "Joshua 24:15"
    },
    {
      text: "In all your ways acknowledge him, and he will make your paths straight.",
      reference: "Proverbs 3:6"
    }
  ]

  useEffect(() => {
    const getDailyVerse = () => {
      // Get day of year (1-365/366)
      const now = new Date()
      const start = new Date(now.getFullYear(), 0, 0)
      const diff = now - start
      const oneDay = 1000 * 60 * 60 * 24
      const dayOfYear = Math.floor(diff / oneDay)
      
      // Use day of year to select verse (cycles through array)
      const verseIndex = dayOfYear % bibleVerses.length
      setVerse(bibleVerses[verseIndex])
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
  }, [])

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-6 shadow-lg">
        <div className="animate-pulse">Loading verse...</div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-6 md:p-8 shadow-lg">
      <div className="flex items-start space-x-4">
        <BookOpen className="w-8 h-8 text-primary-200 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-primary-100 mb-2 uppercase tracking-wide">
            Daily Bible Verse
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
