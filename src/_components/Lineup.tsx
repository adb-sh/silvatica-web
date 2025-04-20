export default () => {

  const lineup = [
    {
      name: '0xADB',
      src: 'https://cdn.pixabay.com/photo/2024/02/05/16/11/ai-generated-8554860_1280.jpg',
      text: '0xADB ist ein aufstrebender Techno-DJ und Produzent, der sich durch seinen dunklen, treibenden Sound und seine geheimnisvolle digitale Ästhetik einen Namen gemacht hat. Mit einem Künstlernamen, der an Programmiersprache und Cyberkultur erinnert, kombiniert er harte Industrial-Beats mit hypnotischen Rhythmen und futuristischen Klanglandschaften. Seine Sets sind energiegeladen, präzise und oft von einer düsteren Atmosphäre durchzogen – perfekt für Nächte in dunklen Clubs oder auf Underground-Raves. 0xADB steht für Techno am Puls der Zeit: roh, kompromisslos und voll elektronischer Intensität.',
      links: [
        { icon: 'instagram-logo', href: 'https://www.instagram.com/albans.world/' },
        { icon: 'soundcloud-logo', href: 'https://soundcloud.com/0xadb' },
        { icon: 'youtube-logo', href: 'https://soundcloud.com/0xadb' },
        { icon: 'spotify-logo', href: 'https://soundcloud.com/0xadb' },
        { icon: 'equalizer', href: 'https://www.mixcloud.com/0xADB/' },
      ],
    },
    {
      name: '0xADB',
      src: 'https://cdn.pixabay.com/photo/2023/12/23/00/13/dj-8464660_1280.jpg',
      text: '0xADB ist ein aufstrebender Techno-DJ und Produzent, der sich durch seinen dunklen, treibenden Sound und seine geheimnisvolle digitale Ästhetik einen Namen gemacht hat. Mit einem Künstlernamen, der an Programmiersprache und Cyberkultur erinnert, kombiniert er harte Industrial-Beats mit hypnotischen Rhythmen und futuristischen Klanglandschaften. Seine Sets sind energiegeladen, präzise und oft von einer düsteren Atmosphäre durchzogen – perfekt für Nächte in dunklen Clubs oder auf Underground-Raves. 0xADB steht für Techno am Puls der Zeit: roh, kompromisslos und voll elektronischer Intensität.',
    },
    {
      name: '0xADB',
      src: 'https://cdn.pixabay.com/photo/2023/06/08/12/02/dj-8049453_1280.jpg',
      text: '0xADB ist ein aufstrebender Techno-DJ und Produzent, der sich durch seinen dunklen, treibenden Sound und seine geheimnisvolle digitale Ästhetik einen Namen gemacht hat. Mit einem Künstlernamen, der an Programmiersprache und Cyberkultur erinnert, kombiniert er harte Industrial-Beats mit hypnotischen Rhythmen und futuristischen Klanglandschaften. Seine Sets sind energiegeladen, präzise und oft von einer düsteren Atmosphäre durchzogen – perfekt für Nächte in dunklen Clubs oder auf Underground-Raves. 0xADB steht für Techno am Puls der Zeit: roh, kompromisslos und voll elektronischer Intensität.',
    },
    {
      name: '0xADB',
      src: 'https://cdn.pixabay.com/photo/2024/01/31/12/08/dj-8543998_1280.png',
      text: '0xADB ist ein aufstrebender Techno-DJ und Produzent, der sich durch seinen dunklen, treibenden Sound und seine geheimnisvolle digitale Ästhetik einen Namen gemacht hat. Mit einem Künstlernamen, der an Programmiersprache und Cyberkultur erinnert, kombiniert er harte Industrial-Beats mit hypnotischen Rhythmen und futuristischen Klanglandschaften. Seine Sets sind energiegeladen, präzise und oft von einer düsteren Atmosphäre durchzogen – perfekt für Nächte in dunklen Clubs oder auf Underground-Raves. 0xADB steht für Techno am Puls der Zeit: roh, kompromisslos und voll elektronischer Intensität.',
    },
    {
      name: '0xADB',
      src: 'https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg',
      text: '0xADB ist ein aufstrebender Techno-DJ und Produzent, der sich durch seinen dunklen, treibenden Sound und seine geheimnisvolle digitale Ästhetik einen Namen gemacht hat. Mit einem Künstlernamen, der an Programmiersprache und Cyberkultur erinnert, kombiniert er harte Industrial-Beats mit hypnotischen Rhythmen und futuristischen Klanglandschaften. Seine Sets sind energiegeladen, präzise und oft von einer düsteren Atmosphäre durchzogen – perfekt für Nächte in dunklen Clubs oder auf Underground-Raves. 0xADB steht für Techno am Puls der Zeit: roh, kompromisslos und voll elektronischer Intensität.',
    },
    {
      name: '0xADB',
      src: 'https://cdn.pixabay.com/photo/2021/11/09/21/29/sculpture-6782451_1280.jpg',
      text: '0xADB ist ein aufstrebender Techno-DJ und Produzent, der sich durch seinen dunklen, treibenden Sound und seine geheimnisvolle digitale Ästhetik einen Namen gemacht hat. Mit einem Künstlernamen, der an Programmiersprache und Cyberkultur erinnert, kombiniert er harte Industrial-Beats mit hypnotischen Rhythmen und futuristischen Klanglandschaften. Seine Sets sind energiegeladen, präzise und oft von einer düsteren Atmosphäre durchzogen – perfekt für Nächte in dunklen Clubs oder auf Underground-Raves. 0xADB steht für Techno am Puls der Zeit: roh, kompromisslos und voll elektronischer Intensität.',
    },
    {
      name: '0xADB',
      src: 'https://cdn.pixabay.com/photo/2021/11/09/21/30/background-6782457_1280.jpg',
      text: '0xADB ist ein aufstrebender Techno-DJ und Produzent, der sich durch seinen dunklen, treibenden Sound und seine geheimnisvolle digitale Ästhetik einen Namen gemacht hat. Mit einem Künstlernamen, der an Programmiersprache und Cyberkultur erinnert, kombiniert er harte Industrial-Beats mit hypnotischen Rhythmen und futuristischen Klanglandschaften. Seine Sets sind energiegeladen, präzise und oft von einer düsteren Atmosphäre durchzogen – perfekt für Nächte in dunklen Clubs oder auf Underground-Raves. 0xADB steht für Techno am Puls der Zeit: roh, kompromisslos und voll elektronischer Intensität.',
    },
  ]

  const pointsXScale = 0.8
  const pointsYScale = 0.9

  const unitPoints = [
    [40,276],
    [364,0],
    [0,522],
    [640,0],
    [0,813],
    [874,0],
    [0,1149],
    [1000,210],
    [60,1500],
    [1000,525],
    [400,1500],
    [1000,900],
    [760,1500],
    [1000,1275],
  ]
  const points = (unitPoints.map(point => {
    const cx = 1000/2
    const cy = 1500/2
    return [
      cx + (point[0] - cx) * pointsXScale,
      cy + (point[1] - cy) * pointsYScale,
    ]
  }).map(item => {
    return `${item[0].toFixed()},${item[1].toFixed()}`
  }).join('\n'))

  return (
    <>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-16">
        {lineup.map((item, index) => (
          <>
            <div class="col-span-1 md:col-span-2 grid grid-cols-subgrid">
              <div class="order-2 md:order-1">
                <h2 class="text-xl font-bold">{item.name}</h2>
                <div class="flex gap-3 md:justify-start justify-around">
                  {item.links?.map((link) => (
                    <a
                      class="socialLink"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class={`ph-light ph-${link.icon} text-2xl`} />
                    </a>
                  ))}
                </div>
                <p>{item.text}</p>
              </div>

              <svg viewBox="0 0 1000 1500" xmlns="http://www.w3.org/2000/svg" class="reveal-svg order-1 md:order-2 aspect-ratio-2/3 height-[40rem] max-w-full max-h-full">
                <defs>
                  <mask id={`mask-lineup-${index}`}>
                    <polyline
                      points={points}
                      stroke-width="200"
                      fill="none"
                      stroke="#ffffff"
                      stroke-dasharray="20000"
                      stroke-dashoffset="20000"
                    />
                  </mask>
                </defs>
                <image
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  style={`mask: url(#mask-lineup-${index});`}
                  href={item.src}
                />
              </svg>
            </div>
          </>
        ))}
      </div>
      <script src="/reveal.js" />
    </>
  );
};
