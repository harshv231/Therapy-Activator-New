import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import HEader from './HEader.jpeg'
import logo1 from './logo1.png'
import psy1 from './psy1.jpg'

import clinical_psycho from './clinical_psycho.png'
import counselling_psycho from './counselling_psycho.png'
import child_psycho from './child_psycho.png'
import neuro_psycho from './neuro_psycho.png'
import health_psycho from './health_psycho.png'
import forensic_psycho from './forensic_psycho.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    HEader,
    logo1
}

export const specialityData = [
    {
        speciality: 'Clinical Psychologist',
        image: clinical_psycho
    },
    {
        speciality: 'Counselling Psychologist',
        image: counselling_psycho
    },
    {
        speciality: 'Child Psychologist',
        image: child_psycho
    },
    {
        speciality: 'Neuro Psychologist',
        image: neuro_psycho
    },
    {
        speciality: 'Health Psychologist',
        image: health_psycho
    },
    {
        speciality: 'Forensic Psychologist',
        image: forensic_psycho
    },
]

export const psychologist = [
    {
        _id: 'psy1',
        name: 'Dr. Sigmund Freud',
        image: psy1,
        speciality: 'Clinical Psychologist',
        degree: 'MD',
        experience: '50 Years',
        about: 'Sigmund Freud, the father of psychoanalysis, is widely recognized for his work on the unconscious mind, the development of the human psyche, and his theories of dream analysis.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'psy2',
        name: 'Dr. Carl Jung',
        speciality: 'Clinical Psychologist',
        degree: 'phD',
        experience: '3 Years',
        about: 'Jung founded analytical psychology, focusing on concepts such as the collective unconscious, archetypes, and individuation.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. B.F. Skinner',
        speciality: 'Health Psychologist',
        degree: 'phD',
        experience: '50 Years',
        about: 'B.F. Skinner was a leading figure in the development of behaviourism and is known for his work on operant conditioning and reinforcement.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Abraham Maslow',
        speciality: 'Counselling Psychologist',
        degree: 'PhD',
        experience: '40 Years',
        about: 'Maslow is best known for creating the hierarchy of needs theory and his work on human motivation and self-actualization.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. John Bowlby',
        speciality: 'Child Psychologist',
        degree: 'MD MSC',
        experience: '30 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Erik Erikson',
        speciality: 'Child Psychologist',
        degree: 'PhD',
        experience: '50 Years',
        about: 'Erikson is known for his psychosocial development theory, including the concept of identity crisis during adolescence.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Carl Rogers',
        speciality: 'Counselling Psychologist',
        degree: 'PhD',
        experience: '40 Years',
        about: 'Rogers was a founder of humanistic psychology and developed the person-centered therapy approach, focusing on empathy and self-actualization.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Albert Bandura',
        speciality: 'Forensic Psychologist',
        degree: 'PhD',
        experience: '60 Years',
        about: 'Bandura is best known for his social learning theory and his work on the concept of self-efficacy in learning and development.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Jean Piaget',
        speciality: 'Neuro Psychologist',
        degree: 'PhD',
        experience: '40 Years',
        about: 'Piaget was a pioneer in the field of developmental psychology, best known for his theory of cognitive stages in children.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Lev Vygotsky',
        speciality: 'Child Psychologist',
        degree: 'PhD',
        experience: '2 Years',
        about: 'Vygotsky is renowned for his work on social development theory and the concept of the Zone of Proximal Development.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Melanie Klein',
        speciality: 'Clinical Psychologist',
        degree: 'MD',
        experience: '40 Years',
        about: 'Klein was a psychoanalyst known for her pioneering work in child analysis and object relations theory.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Daniel Goleman',
        speciality: 'Counselling Psychologist',
        degree: 'PhD',
        experience: '30 Years',
        about: 'Goleman is known for his work on emotional intelligence and its impact on personal and professional success.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Aaron T. Beck',
        speciality: 'Clinical Psychologist',
        degree: 'MD',
        experience: '50 Years',
        about: 'Beck is the founder of cognitive therapy and is known for his work on depression, anxiety, and cognitive distortions.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Philip Zimbardo',
       
        speciality: 'Forensic Psychologist',
        degree: 'MBBS',
        experience: '50 Years',
        about: 'Zimbardo is known for the Stanford prison experiment and his work on the psychology of social behavior and authority.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Elizabeth Kübler-Ross',
        
        speciality: 'Forensic Psychologist',
        degree: 'MD',
        experience: '30 Years',
        about: 'Kübler-Ross is best known for her groundbreaking work on the five stages of grief and death and dying.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]