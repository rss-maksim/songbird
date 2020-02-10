import { champions, another, radio, rhapsody, show, stop } from '../static/assets/audio';
import { championsImage, anotherImage, radioImage, rhapsodyImage, showImage, stopImage } from '../static/assets/images';
import { ITrack } from '../models';

export const tracks: ITrack[] = [
    {
        id: 1,
        band: 'Queen',
        name: 'We Are The Champions',
        description: 'We Are the Champions was first released on their 1977 album News of the World. Written by lead singer Freddie Mercury, it is considered one of rock\'s most recognisable anthems. The song was a worldwide success, reaching number two in the UK Singles Chart and number four on the Billboard Hot 100 in the United States.In 2009, We Are the Champions was inducted into the Grammy Hall of Fame and was voted the world\'s favourite song in a 2005 Sony Ericsson world music poll.[6] In 2011, a team of scientific researchers concluded that the song was the catchiest in the history of popular music',
        image: championsImage,
        audio: champions
    },
    {
        id: 2,
        band: 'Queen',
        name: 'Another One Bites The Dust',
        description: 'Another One Bites the Dust was written by bass guitarist John Deacon, the song featured on the group\'s eighth studio album The Game (1980). The song was a worldwide hit, charting number one on the US Billboard Hot 100 for three weeks, from 4 October to 18 October (their second number-one single in the country). The song spent 15 weeks in the Billboard top 10 (the longest running top ten song of 1980), including 13 weeks in the top five, and 31 weeks total on the chart (more than any other song in 1980).',
        image: anotherImage,
        audio: another
    },
    {
        id: 3,
        band: 'Queen',
        name: 'Bohemian Rhapsody',
        description: 'Bohemian Rhapsody was written by Freddie Mercury for the band\'s 1975 album A Night at the Opera. It is a six-minute suite, consisting of several sections without a chorus: an intro, a ballad segment, an operatic passage, a hard rock part and a reflective coda. The song is a more accessible take on the 1970s progressive rock genre.',
        image: rhapsodyImage,
        audio: rhapsody
    },
    {
        id: 4,
        band: 'Queen',
        name: 'Dont stop me now',
        description: 'Don\'t Stop Me Now is a song from their 1978 album Jazz and released as a single in 1979. Written by lead singer Freddie Mercury, it was recorded in August 1978 at Super Bear Studios in Berre-les-Alpes (Alpes-Maritimes), France, and is the twelfth track on the album.',
        image: stopImage,
        audio: stop
    },
    {
        id: 5,
        band: 'Queen',
        name: 'Radio Gaga',
        description: 'Radio Ga Ga is a 1984 song performed and recorded by rock band Queen, written by their drummer Roger Taylor. It was released as a single with "I Go Crazy" by Brian May as the B-side. It was included on the album The Works. The song is also featured on the band\'s compilation albums Greatest Hits II and Classic Queen.',
        image: radioImage,
        audio: radio
    },
    {
        id: 6,
        band: 'Queen',
        name: 'Show must go on',
        description: 'The Show Must Go On was featured as the twelfth and final track on their 1991 album Innuendo. It is credited to Queen, but written mainly by Brian May. The song chronicles the effort of Freddie Mercury continuing to perform despite approaching the end of his life, although his diagnosis with HIV/AIDS had not yet been made public in spite of ongoing media speculation claiming that he was seriously ill. Mercury was so ill when the band recorded the song in 1990 that May had concerns as to whether he was physically capable of singing it.',
        image: showImage,
        audio: show
    },
];