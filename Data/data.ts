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
        feature: [
            {
                title: '24/7',
                description: 'Całodobowy dostęp dla zarejestrowanych klientów',
                icon: IconCalaDoba
            },

            {
                title: 'od 1989',
                description: 'wieloletnie doświadczenie',
                icon: IconShield
            },
            {
                title: 'Sprzęt',
                description: 'Posiadamy 153 maszyny do ćwiczeń najlepszych marek',
                icon: IconMashine
            },
            {
                title: '1000 m2',
                description: 'Obiekt składa się z sześciu sal o łącznej powierzchni 1000 m2',
                icon: IconArea
            },
            {
                title: 'Klimatyzacja',
                description: 'Wszystkie pomieszczenia są klimatyzowane',
                icon: IconAirconditioner
            },
            {
                title: 'Partnerzy',
                description: 'Akceptujemy płatość w MultiSport, Medicover, FitProfit',
                imgSrc: 'partnerzy.png',
            }
        ]
    },
    Uslugi: {
        background: 'SilowniaBackground.png',
        title: 'Usługi',
        zawartosc: {
            uslugi: [
                {
                    title: 'Siłownia',
                    description: 'Siłownia składa się z czterech stref treningowych: wolne ciężary, maszyny ze stosem, cardio, strefa do treningów funkcjonalnych.',
                    videoSrc: 'SilowniaFilmy/Silownia.mp4',
                    cennik: [
                        {
                            nazwa: 'SIŁOWNIA miesięczny', cena: '140', wlasciwosci: [
                                { icon: IconVerifed, text: 'ważny 1 miesiąc' },
                                { icon: IconVerifed, text: 'nieograniczona ilość wejść' },
                                { icon: IconVerifed, text: 'całodobowy dostęp' },
                            ]
                        },
                        {
                            nazwa: ' SIŁOWNIA 2 tygodnie', cena: '100', wlasciwosci: [
                                { icon: IconVerifed, text: 'ważny 2 tygodnie' },
                                { icon: IconVerifed, text: 'nieograniczona ilość wejść' },
                                { icon: IconVerifed, text: 'całodobowy dostęp' },
                            ]
                        },
                        {
                            nazwa: 'SIŁOWNIA 10 wejść', cena: '120', wlasciwosci: [
                                { icon: IconVerifed, text: 'ważny 2 miesiące' },
                                { icon: IconVerifed, text: '10 wejść' },
                                { icon: IconVerifed, text: 'całodobowy dostęp' },

                            ]
                        },
                        {
                            nazwa: 'SIŁOWNIA 8 wejść', cena: '100', wlasciwosci: [
                                { icon: IconVerifed, text: 'ważny 2 miesiące' },
                                { icon: IconVerifed, text: '8 wejść' },
                                { icon: IconVerifed, text: 'całodobowy dostęp' },
                            ]
                        },
                        {
                            nazwa: 'SIŁOWNIA jednorazowy', cena: '25', wlasciwosci: [
                                { icon: IconVerifed, text: 'jednorazowa wizyta' },
                            ]
                        },
                        {
                            imgSrc: 'multisport.png', nazwa: '', cena: '', wlasciwosci: [
                                { icon: IconVerifed, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                            ]
                        },
                        {
                            imgSrc: 'medicover.png', nazwa: '', cena: '', wlasciwosci: [
                                { icon: IconVerifed, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                            ]
                        },
                        {
                            imgSrc: 'fitProfit.png', nazwa: '', cena: '', wlasciwosci: [
                                { icon: IconVerifed, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                            ]
                        },

                    ]
                },
                {
                    title: 'Badminton',
                    description: 'Pełnowymiarowy kort do gry w badmintona ',
                    videoSrc: 'crossfit.mp4',
                    cennik: [
                        { nazwa: 'BADMINTON godzina', cena: '60', wlasciwosci: [{ icon: IconVerifed, text: '1 godzina gry' }] },
                    ]
                },
                {
                    title: 'Sala CROSS',
                    description: 'Duża, bogato wyposażona sala, która umożliwia wykonanie specjalistycznych treningów: sztuki walki, kalistenika, gimnastyka, trening funkcjonalny. Sala może być rezerwowana, dlatego przed planowany treningiem należy sprawdzić jej dostępność w kalendarzu.',
                    videoSrc: 'crossfit.mp4',
                    cennik: [
                        {
                            nazwa: 'CROSS jednorazowy', cena: '35', wlasciwosci: [
                                { icon: IconVerifed, text: 'jednorazowa wizyta' },
                                { icon: IconVerifed, text: 'dostęp do siłowni' },
                                { icon: IconVerifed, text: 'dostęp do sali cross' },
                            ],
                        },
                        {
                            nazwa: 'CROSS miesięczny', cena: '180', wlasciwosci: [
                                { icon: IconVerifed, text: 'ważny 1 miesiąc' },
                                { icon: IconVerifed, text: 'nieograniczona ilość wejść' },
                                { icon: IconVerifed, text: 'całodobowy dostęp' },
                                { icon: IconVerifed, text: 'dostęp do siłowni' },
                                { icon: IconVerifed, text: 'dostęp do sali cross' },
                            ],
                        },
                        {
                            nazwa: 'CROSS 10 wejść', cena: '160', wlasciwosci: [
                                { icon: IconVerifed, text: 'ważny 2 miesiąc' },
                                { icon: IconVerifed, text: '10 wejść' },
                                { icon: IconVerifed, text: 'całodobowy dostęp' },
                                { icon: IconVerifed, text: 'dostęp do siłowni' },
                                { icon: IconVerifed, text: 'dostęp do sali cross' },
                            ],
                        },
                        {
                            imgSrc: 'multisport.png', nazwa: '', cena: 'dopłata 10', wlasciwosci: [
                                { icon: IconVerifed, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                                { icon: IconVerifed, text: 'dostęp do siłowni' },
                                { icon: IconVerifed, text: 'dostęp do sali cross' },
                            ]
                        },
                        {
                            imgSrc: 'medicover.png', nazwa: '', cena: 'dopłata 10', wlasciwosci: [
                                { icon: IconVerifed, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                                { icon: IconVerifed, text: 'dostęp do siłowni' },
                                { icon: IconVerifed, text: 'dostęp do sali cross' },
                            ]
                        },
                        {
                            imgSrc: 'fitProfit.png', nazwa: '', cena: 'dopłata 10', wlasciwosci: [
                                { icon: IconVerifed, text: 'całodobowy dostęp dla zarejestrowanych klientów' },
                                { icon: IconVerifed, text: 'dostęp do siłowni' },
                                { icon: IconVerifed, text: 'dostęp do sali cross' },
                            ]
                        },

                    ]
                },
                {
                    title: 'Sauna',
                    description: 'Sauna sucha z leżakownią i prysznicem do 6 osób. Cena za wynajęcia całego pomieszczenia. Prosimy o rezerwacja przynajmniej 1 godzinę przed planowaną wizytą.',
                    videoSrc: 'sauna.mp4',
                    cennik: [
                        {
                            nazwa: 'SAUNA godzina', cena: '60', wlasciwosci: [{ icon: IconVerifed, text: 'wynajęcie na 1 godzinę' },
                            { icon: IconVerifed, text: 'maksymalnie 6 osób' }
                            ]
                        },
                    ]
                },
                {
                    title: 'Masaż',
                    description: 'Różne rodzaje masaży: klasyczny, sportowy, próżniowy, relaksacyjny. Zapraszamy do zapisów w recepcji, lub telefonicznie.',
                    videoSrc: 'masaz.mp4',
                    cennik: [
                        { nazwa: 'Masaż', cena: 'od 120', wlasciwosci: [{ icon: IconVerifed, text: '' }] },
                    ]
                },
                {
                    title: 'Bufet i sklep z odżywkami',
                    description: 'W sklepie znajdziesz, napoje, odżywki, suplementy diety, odzież sportową, akcesoria treningowe, natomiast bufet serwuje koktajle proteinowe i kawę.',
                    videoSrc: 'bufet.mp4',
                    cennik: []
                }

            ]
        },
    },
    zajeciaIndywidualne: {
        background: 'badmintonBlur.png',
        title: 'Trener osobisty',
        zawartosc: {
            description: 'Trener osobisty to osoba zajmująca się układaniem indywidualnego zestawu ćwiczeń oraz uczeniem ich prawidłowego wykonywania. Jego rolą jest również motywacja klienta i monitorowanie jego wyników. Współpracując z trenerem personalnym można znacząco skrócić czas niezbędny do uzyskania określonego celu sylwetkowego, sportowego, lub zdrowotnego. Zapraszamy do zapisów w recepcji, lub telefonicznie.',
            cennik: [
                {
                    nazwa: 'Trening personalny', cena: '110', wlasciwosci: [
                        { icon: IconVerifed, text: 'godzinny trening osobisty' },
                        { icon: IconVerifed, text: 'podstawowy plan treningowy' },
                    ]
                },
                {
                    nazwa: 'konsulatacja', cena: '110', wlasciwosci: [
                        { icon: IconVerifed, text: 'pomiar parametrów' },
                        { icon: IconVerifed, text: '' },
                    ]
                }
            ],
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
        background: 'goraBlur.png',
        title: 'Zajęcia grupowe',
        zawartosc: {
            description: 'Zajęcia grupowe prowadzone przez trenera. Aby brać w nich udział wymagany jest dostęp do sali CROSS.',
            zajecia: [
                {
                    title: 'Crossfit',
                    description: 'Trening, który charakteryzuje się wszechstronnością ćwiczeń z różnych dyscyplin sportowych takich jak: gimnastyka, podnoszenie ciężarów, boks, lekkoatletka. Na treningu kształtujemy wszystkie cechy motoryczne, poprawiamy wzorce ruchowe, mobilizujemy, aktywizujemy mięśnie, oraz poprawiamy wydolność sercowo naczyniową organizmu. Treningi prowadzone są w małych grupach, co pozwala na indywidualne podejście do każdego uczestnika.',
                    imgSrc: 'crossfit.png',
                },
                // {
                //     title: 'Fitness',
                //     description: 'Zajęcia Fitness dla kobiet i nie tylko',
                //     imgSrc: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png',
                // },
            ]
        }
    },
    kontakt: {
        godzinyOtwarcia: [
            'pon - piąt: 8:00 - 22:00',
            'sob: 9:00- 16:00',
            'niedz: 9:00 - 11:00'
        ],
        nrTelefonu: '77 433 63 01',
        adress: 'Poniatowskiego 3 Nysa'
    },
}