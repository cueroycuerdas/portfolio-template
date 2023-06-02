import { DefaultImages } from '../components/DefaultImages';
import { AppConfig } from './AppData.interface';

// json-like object for app configuration
export const appConfig: AppConfig = {
  title: "Igmar's Portfolio",
  avatarImage: DefaultImages.Avatar,
  social: {
    linkedin: 'https://www.linkedin.com/in/igmar-melis-447b22269'
  },
  sections: [
    {
      id: 'about',
      title: 'About me',
      backgroundImage: DefaultImages.Universe,
      portfolioPageItems: [
        {
          contents: [
            "I am a skilled musician with expertise in live performances on multiple instruments and computer-assisted music composition. I bring a unique blend of traditional and digital approaches to my craft. My primary skills are in audio recording and editing, using digital applications like Cool Edit/Audition, Cubase, Logic Audio Platinum, and Protools. This proficiency allows me to bring your musical ideas to life with exceptional clarity and production quality.",
            "As a mixing and mastering specialist for the Issogno Music project, I have honed my skills in music production, arranging, and engineering.",
            "I have worked as a freelance composer, creating soundtracks for various media projects, including animation cartoons, short films, TV series, and documentaries. My compositions capture the essence of visual storytelling and add a captivating dimension to the viewer's experience. I founded and directed the music band 'Cuero y Cuerdas' and contributed to the soundtrack of the film 'Una noche.'",
            "Throughout my career, I have collaborated with recording studios, participated in music video production, and provided musical accompaniment for diverse projects. With a solid educational background in music and high school education, this training has equipped me with a deep understanding of music theory, technique, and interpretation, enhancing my abilities as a musician and composer. I bring a combination of creativity, technical expertise, and professionalism to every project I undertake.",
            "In summary, I am a versatile musician with a passion for creating impactful and emotionally resonant music that leaves a lasting impression on listeners."
          ],
          image: DefaultImages.Avatar
        }
      ]
    },
    {
      id: 'skills',
      title: 'Skills',
      backgroundImage: DefaultImages.BeachDark,
      portfolioPageItems: [
        {
          contents: [
            '- Live performance of musical instruments such as:',
            ['\u2022 Bass', '\u2022 Guitar'],
            ['\u2022 Piano', '\u2022 Congas'],
            ['\u2022 Timbales', '\u2022 Drums'],
            ['\u2022 Trumpet', '\u2022 other handheld and miscellaneous instruments'],
            '- Computer-assisted music composition.',
            '- Audio recording and editing using digital audio applications such as:',
            ['\u2022 Cool Edit/Audition', '\u2022 Cubase'],
            ['\u2022 Nuendo', '\u2022 Logic Audio Platinum'],
            ['\u2022 Reason', '\u2022 Fruity Loops'],
            ['\u2022 Harmony Assistent', '\u2022 Protools'],
            ['\u2022 Reaper']
          ],
          image: DefaultImages.Instruments
        }
      ]
    },
    {
      id: 'experience',
      title: 'Professional Experience',
      backgroundImage: DefaultImages.SignalsDark,
      portfolioPageItems: [
        {
          subTitle1: '2010 - Current',
          title: 'Mixing and mastering specialist',
          link: 'https://www.facebook.com/issogno',
          subTitle2: 'Issogno Music project',
          contents: [
            'Mixing and mastering engineer, music producer and arranger for the Issogno Music project.',
            "Issogno is an online audio-production company made up Composers, Musicians, Arrangers and Sound Engineers of different nationalities, dedicated to exercising each of these disciplines to take the final product to the next level. Compositions tailored to the client's needs, musical arrangements that meet their demands, as well as recording, editing, post-production, mixing and mastering."
          ],
          image: DefaultImages.Issogno
        },
        {
          subTitle1: '2019 - 2020',
          title: 'Freelance composer',
          contents: [
            'Freelance songwriter for multiple soundtracks, for example:',
            'Soundtrack for the animation cartoon "Las Brujas" by ICRT Animation Studios (Cuban Institute of Radio and Television).',
            'Sound effects and soundtrack for the short film "Miedo" (independent cinema).',
            'Soundtrack for the animation cartoon "Los Ninjas" by ICRT Animation Studios.',
            'Soundtrack for the TV series "Tras la Huella", episodes "Combustión." and "Obsesión."',
            'Music composer for the National Gymnastics School.'
          ],
          image: DefaultImages.Music
        },
        {
          subTitle1: '2009 - 2012',
          title: 'Band director, composer',
          link: 'https://www.facebook.com/CueroyCuerdas',
          contents: [
            '- Founded the music band Cuero y Cuerdas.',
            '\u2022 Presentations of The Band "Cuero y Cuerdas"',
            '\u2022 Performance of Cuero y Cuerdas at Meliá Hotels in Varadero.',
            '\u2022 Release of the music video "Mucho mas" on Educational Channel in Cuban state television.',
            '\u2022 Radio and television appearances for Cuero y Cuerdas.',
            '\u2022 Soundtrack for the film "Una noche," a co-production of ICAIC and Lucy Mulloy.'
          ],
          image: DefaultImages.CueroCuerdas
        },
        {
          subTitle1: '2007 - 2009',
          title: 'Producer / Music Composer / Interpreter',          
          contents: [
            'Accompanying instrumentalist (Piano) at Jojazz 2008.',
            'Technical Services for Recording Studios at the Cuban Institute of Radio and Television (Servers, and Recording Workstations).',
            'Soundtrack for the short film "La Madre".',
            '"Eighth New Filmmakers Showcase" ICAIC (Cuban Institute of Cinematographic Arts and Industry) 2009.',
            'HPH-Records Studio and Ávaco Studio.',
            'WEVA (Wedding and Events Video-Cameraman Association).',
            'Recordings for small-format groups.',
            'Production of Music Video Clips (Audio and Video Editing).',
            'Voice recording and Music composition for documentaries.',
            'Musical accompaniment. Electric double bass (Baby bass).',
            'Recording of an album for soloist Osdalgia.',
            'Bassist for the band La Novena de Dantes.',
            'Bassist for the band "D\'Caridad".'
          ],
          image: DefaultImages.Estudio
        },
        {
          subTitle1: '2004 - 2007',
          title: 'Music composition, Editing, and Software Development Collaboration.',     
          subTitle2: 'Cuban Institute of Radio and Television (ICRT)',     
          contents: [
            'Accompanying instrumentalist (Piano) at Jojazz 2008.',
            'Technical Services for Recording Studios at the Cuban Institute of Radio and Television (Servers, and Recording Workstations).',
            'Soundtrack for the short film "La Madre".',
            '"Eighth New Filmmakers Showcase" ICAIC (Cuban Institute of Cinematographic Arts and Industry) 2009.',
            'HPH-Records Studio and Ávaco Studio.',
            'WEVA (Wedding and Events Video-Cameraman Association).',
            'Recordings for small-format groups.',
            'Production of Music Video Clips (Audio and Video Editing).',
            'Voice recording and Music composition for documentaries.',
            'Musical accompaniment. Electric double bass (Baby bass).',
            'Recording of an album for soloist Osdalgia.',
            'Bassist for the band La Novena de Dantes.',
            'Bassist for the band "D\'Caridad".'
          ],
          image: DefaultImages.Networks
        },
        {
          subTitle1: '2002 - 2004',
          title: 'Guitarist and Vocalist, Trio "Los Prados"',     
          subTitle2: 'Producer: CPMT "Ignacio Piñeiro" (Artists Company)',     
          contents: [],
          image: DefaultImages.Trio
        }
      ]
    },
    {
      id: 'education',
      title: 'Education',
      backgroundImage: DefaultImages.MusicDarkBlue,
      portfolioPageItems: [
        {
          subTitle1: '2006 - 2008',
          title: 'High-school degree',
          subTitle2: 'Faculty for workers “Capitán San Luis”. Havana, Cuba',
          contents: '',
          image: DefaultImages.Education
        },
        {
          subTitle1: '1999 - 2004',
          title: 'Guitar, Elementary Level',
          subTitle2: 'Fernando Carnicer National Art Center, Havana, Cuba',
          contents: '',
          image: DefaultImages.MeltingGuitar
        }
      ]
    }
  ]
};
