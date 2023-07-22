import { IconVerifed } from "@/Icons/IconVerified";
import { Site } from "./Interface";
import { IconInfinity } from "@/Icons/IconInfinity";
import { IconAirconditioner } from "@/Icons/IconAirconditioner";
import { IconShield } from "@/Icons/IconShield";
import { IconMashine } from "@/Icons/IconMashine";
import { IconArea } from "@/Icons/IconArea";
import { IconCalaDoba } from "@/Icons/IconCalaDoba";

export const data: Site = {
    header: {
        motto: 'Nie pozwól aby przypadek uformował Twoje ciało',
        fitures: [
            {
                title: '24/7',
                description: 'Całodobowy dostęp dla zarejestrowanych klientów',
                icon: IconCalaDoba
            },

            {
                title: 'od 1989',
                description: 'jesteśmy z wami od 1989 roku',
                icon: IconShield
            },
            {
                title: 'Sprzęt',
                description: 'Posiadamy 153 maszyny do ćwiczeń najlepszych marek',
                icon: IconMashine
            },
            {
                title: '1000 m2',
                description: 'Obiekt składa się z 5 sal o łącznej powierzchni 1000 m2',
                icon: IconArea
            },
            {
                title: 'Klimatyzacja',
                description: 'Wszystkie pomieszczenia są klimatyzowane',
                icon: IconAirconditioner
            },
        ]
    },
    Uslugi: {
        background: 'gymBlur.jpg',
        title: 'Uslugi',
        zawartosc: {
            uslugi: [
                {
                    title: 'Siłownia',
                    description: '5 stref do ćwiczeń: CARDIO-> bieżnie, orbitreki, stepy, wioślarze, narciarz, rowerki poziome i pionowe; SIŁOWA , WOLNE CIĘŻARY , CROSSFIT , STRECHING',
                    videoSrc: 'Silownia.mp4',
                    cennik: [
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                    ]
                },
                {
                    title: 'Badminton',
                    description: ' Sala do gry w badmintona',
                    videoSrc: 'SilowniaLowRes.mp4',
                    cennik: [
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                    ]
                },
                {
                    title: 'Sala do walki',
                    description: ' Sala do gry w badmintona',
                    videoSrc: '/SilowniaLowRes.mp4',
                    cennik: [
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                    ]
                },
                {
                    title: 'Sauna',
                    description: 'Sauna sucha',
                    videoSrc: '/SilowniaLowRes.mp4',
                    cennik: [
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                    ]
                },
                {
                    title: 'Masaż',
                    description: 'Posiadamy bogatą ofertę masaży',
                    videoSrc: '/SilowniaLowRes.mp4',
                    cennik: [
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                    ]
                },
                {
                    title: 'Bufet i sklep z odżywkami',
                    description: ' Sala do gry w badmintona',
                    videoSrc: '/SilowniaLowRes.mp4',
                    cennik: [
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                        { nazwa: ' miesięczny', cena: '100zł', wlasciwosci: [{ icon: IconVerifed, text: 'Dostęp do siłowni' }] },
                    ]
                }

            ]
        },
    },
    zajeciaIndywidualne: {
        background: 'https://images.unsplash.com/photo-1611095772763-4b0b2b1b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwY2FyZSUyMGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        title: 'Zajęcia indywidualne',
        zawartosc: {
            description: 'Zajęcia indywidualne pod okiem specjalisty to najszybszy sposób na osiągnięcie ustalonego celu. Niezależnie czy zależy Ci na poprawie kondycji, sylwetki czy zdrowia, nasi Ci to znacznie ułatwią. Zajęcia trwają godzinę i wymagają wcześniejszej rezerwacji.',
            trenerzy: [
                {
                    name: 'Krzysztof',
                    description: 'Trener personalny, właściciel',
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
                },
                {
                    name: 'Łukasz',
                    description: 'Trener personalny',
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
                },
                {
                    name: 'Robert',
                    description: 'Trener personalny, masażysta',
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
                },
                {
                    name: 'Rafał',
                    description: 'Trener personalny',
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
                },
                {
                    name: 'Adam',
                    description: 'Trener personalny',
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'
                },
            ]
        },

    },
    zajeciaGrupowe: {
        background: '/gymBlur.jpg',
        title: 'Zajęcia grupowe',
        zawartosc: {
            description: 'Treningi grupowe pod okiem specjalisty',
            zajecia: [
                {
                    title: 'Crossfit',
                    description: 'Zajęcia z wolnymi ciazarami oraz własnym ciężarem ciała. Jest to świetne rozwiązanie dla osób, które chcą poprawić swoją kondycję oraz wygląd. Zajęcia z wolnymi ciazarami oraz własnym ciężarem ciała. Jest to świetne rozwiązanie dla osób, które chcą poprawić swoją kondycję oraz wygląd. Zajęcia z wolnymi ciazarami oraz własnym ciężarem ciała. Jest to świetne rozwiązanie dla osób, które chcą poprawić swoją kondycję oraz wygląd.',
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png',
                },
                {
                    title: 'Fitness',
                    description: 'Zajęcia Fitness dla kobiet i nie tylko',
                    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png',
                },
            ]
        }
    },
    kontakt: {
        godzinyOtwarcia: [
            'pon - piąt: 8:00 - 22:00',
            'sob: 9:00- 16:00',
            'niedz: 9:00 - 14:00'
        ],
        nrTelefonu: '77 433 63 01',
        adress: 'Poniatowskiego 3 Nysa'
    },
}