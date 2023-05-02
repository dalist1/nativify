import Buttons from "./components/Buttons";

export default function HomePage() {
  const alphabet = [
    'A', 'B', 'C', 'Ç', 'D', 'DH', 'E', 'Ë', 'F', 'G', 'GJ', 'H', 'I', 'J', 'K', 'L', 'LL', 'M', 'N', 'NJ', 'O', 'P', 'Q', 'R', 'RR', 'S', 'SH', 'T', 'TH', 'U', 'V', 'X', 'XH', 'Y', 'Z', 'ZH']

    const words = [  { letter: 'A', items: ['Automjet', 'Avion', 'Agim'] },
    { letter: 'B', items: ['Baltë', 'Bukur', 'Behar'] },
    { letter: 'C', items: ['Çikë', 'Çelës', 'Çati'] },
    { letter: 'Ç', items: ['Çelës', 'Çati', 'Çarçaf'] },
    { letter: 'D', items: ['Djalë', 'Dhomë', 'Dridh'] },
    { letter: 'DH', items: ['Dhuratë', 'Dhembi', 'Dhëmb'] },
    { letter: 'E', items: ['Emër', 'Euro', 'E bardhë'] },
    { letter: 'Ë', items: ['Ëmbël', 'Ëndërr', 'Ëmbëlsirë'] },
    { letter: 'F', items: ['Fjalë', 'Flamur', 'Fshesë'] },
    { letter: 'G', items: ['Gjysmë', 'Gjelbër', 'Gjë'] },
    { letter: 'GJ', items: ['Gjumë', 'Gjëndje', 'Gjëra'] },
    { letter: 'H', items: ['Hënë', 'Humb', 'Hark'] },
    { letter: 'I', items: ['Ishull', 'Ikonë', 'Ide'] },
    { letter: 'J', items: ['Jastëk', 'Jehonë', 'Jetë'] },
    { letter: 'K', items: ['Kafshë', 'Kamera', 'Kopsht'] },
    { letter: 'L', items: ['Lule', 'Libër', 'Lumë'] },
    { letter: 'LL', items: ['Llomotit', 'Llaf', 'Llak'] },
    { letter: 'M', items: ['Mëngjes', 'Mrekulli', 'Mik'] },
    { letter: 'N', items: ['Natë', 'Ngjyrë', 'Ndërtesë'] },
    { letter: 'NJ', items: ['Njëzet', 'Njëkohësisht', 'Njësoj'] },
    { letter: 'O', items: ['Orë', 'Ose', 'Opak'] },
    { letter: 'P', items: ['Pëllëmbë', 'Peshk', 'Pasdite'] },
    { letter: 'Q', items: ['Qeveri', 'Qytet', 'Qenie'] },
    { letter: 'R', items: ['Rrugë', 'Rroba', 'Rreth'] },
    { letter: 'RR', items: ['Rrufe', 'Rrush', 'Rrumbullakë'] },
    { letter: 'S', items: ['Shëndoshë', 'Shkollë', 'Shtëpi'] },
    { letter: 'SH', items: ['Shpirt', 'Shenjë', 'Shenjtëror'] },
    { letter: 'T', items: ['Treg', 'Tavolinë', 'Trup'] },
    { letter: 'TH', items: ['Thyer', 'Tharës', 'Thirrje'] },
    { letter: 'U', items: ['Ushqim', 'Ujë', 'Udhetim'] },
    { letter: 'V', items: ['Vajzë', 'Vera', 'Vesh'] },
    { letter: 'X', items: ['Xixa', 'Xhaketë', 'Xheloz'] },
    { letter: 'XH', items: ['Xhami', 'Xhep', 'Xhan'] },
    { letter: 'Y', items: ['Yndyrë', 'Ylber', 'Yzberisht'] },
    { letter: 'Z', items: ['Zjarr', 'Zgjat', 'Zonjë'] },
    { letter: 'ZH', items: ['Zhurmë', 'Zhvillim', 'Zhdukje'] }
    ];
      
  
  return (
    <div className="flex flex-col justify-center items-center overflow-auto">
     <span className="font-extrabold text-transparent text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-10">Albanian Alphabet</span>
    <Buttons alphabet={alphabet} words={words} />
    <div className="fixed font-medium text-sm bottom-4 p-3 bg-[#0c2d6b]/40 backdrop-blur-sm rounded-full">
      Powered 🚀 by{" "}
      <a
        href="https://dalist1.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        Dalist
      </a>{" "}
      - With ❤️ for WWSB
    </div>

    </div>

  )
}