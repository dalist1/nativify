import Buttons from "./components/Buttons";

export default function HomePage() {
  const alphabet = [
    'A', 'B', 'C', 'Ç', 'D', 'DH', 'E', 'Ë', 'F', 'G', 'GJ', 'H', 'I', 'J', 'K', 'L', 'LL', 'M', 'N', 'NJ', 'O', 'P', 'Q', 'R', 'RR', 'S', 'SH', 'T', 'TH', 'U', 'V', 'X', 'XH', 'Y', 'Z', 'ZH']

    const words = [
        { letter: 'A', items: ['automjet', 'avion', 'agim', 'anije'] },
        { letter: 'B', items: ['baltë', 'bukur', 'behar', 'breshkë'] },
        { letter: 'C', items: ['çikë', 'çelës', 'çati', 'çarçaf'] },
        { letter: 'Ç', items: ['çelës', 'çati', 'çarçaf', 'çadër'] },
        { letter: 'D', items: ['djalë', 'dhomë', 'dridh', 'dasma'] },
        { letter: 'DH', items: ['dhuratë', 'dhembi', 'dhëmb', 'dhemshëm'] },
        { letter: 'E', items: ['eagle', 'euro', 'e bardhë', 'e bukur'] },
        { letter: 'Ë', items: ['ëmbël', 'ëndërr', 'ëmbëlsirë', 'ëndërruar'] },
        { letter: 'F', items: ['fjalë', 'flamur', 'fshesë', 'fëmijë'] },
        { letter: 'G', items: ['gjysmë', 'gjelbër', 'gjë', 'gjuhë'] },
        { letter: 'GJ', items: ['gjumë', 'gjëndje', 'gjëra', 'gjëmë'] },
        { letter: 'H', items: ['hënë', 'humb', 'hark', 'humbje'] },
        { letter: 'I', items: ['ishull', 'ikonë', 'ide', 'i zi'] },
        { letter: 'J', items: ['jastëk', 'jehonë', 'jetë', 'jetim'] },
        { letter: 'K', items: ['kafshë', 'kamera', 'kopsht', 'kryq'] },
        { letter: 'L', items: ['lule', 'libër', 'lumë', 'le të jetë'] },
        { letter: 'LL', items: ['llomotit', 'llaf', 'llak', 'llapë'] },
        { letter: 'M', items: ['mëngjes', 'mrekulli', 'mik', 'mollë'] },
        { letter: 'N', items: ['natë', 'ngjyrë', 'ndërtesë', 'një'] },
        { letter: 'NJ', items: ['njëzet', 'njëkohësisht', 'njësoj', 'njëmijë'] },
        { letter: 'O', items: ['orë', 'ose', 'opak', 'osht'] },
        { letter: 'P', items: ['pëllëmbë', 'peshk', 'pasdite', 'për'] },
        { letter: 'Q', items: ['qeveri', 'qytet', 'qenie', 'qark'] },
        { letter: 'R', items: ['rrugë', 'rroba', 'rreth', 'rrotull'] },
        { letter: 'RR', items: ['rrufe', 'rrush', 'rrumbullakë', 'rrëshqitje'] },
        { letter: 'S', items: ['shëndoshë', 'shkollë', 'shtëpi', 'shtatë'] },
        { letter: 'SH', items: ['shpirt', 'shenjë', 'shenjtëror', 'shkëlqim'] },
        { letter: 'T', items: ['treg', 'tavolinë', 'trup', 'të'] },
        { letter: 'TH', items: ['thyer', 'tharës', 'tharë', 'thërrmuar'] },
        { letter: 'U', items: ['ulët', 'unazë', 'unë', 'ujë'] },
        { letter: 'V', items: ['vjeshtë', 'vajzë', 'vend', 'vrap'] },
        {
          letter: "XH",
          items: ["Xhami", "Xhaketa", "Xhepi"]
        },
        {
          letter: "Y",
          items: ["Yndyrë", "Ymer", "Ylber"]
        },
        {
          letter: "Z",
          items: ["Zjarr", "Zog", "Zbritje"]
        },
        { letter: 'X', items: ['xhep', 'xhastik', 'xhinxhir', 'xheloz'] },
        { letter: 'ZH', items: ['zhurmë', 'zhvillim', 'zhavorr', 'zhdukje'] } ]
      
  
  return (
    <div className="flex flex-col justify-center items-center">
     <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-10">Albanian Alphabet</span>
    <Buttons alphabet={alphabet} words={words}/>
    <span className="fixed font-medium text-base bottom-4">Powered 🚀 by Dalist (Frensi Qatipi) - With ❤️ for WWSB</span>
    </div>

  )
}