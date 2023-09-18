import ResumeItem from "./resumeItem"
import ResumeChip from './resumeChips'
import { Box, Divider } from '@mui/material';

const ResumeList = () => {

    const BoxStyle = {
        backgroundColor: '#fafafa',
        minHeight: '500px',
        textJustify: 'auto',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        padding: '2% 0'
    }

    const eduList = [
        {
            type: 'Education',
            title: 'The City University of Hong Kong',
            subtitle: 'BSc Computer Science',
            range: 'Sep 2017 - Jun 2020',
            descriptions: []
        }
    ]

    const workList = [
        {
            type: 'Work',
            title: 'Rich Fame International Limited',
            subtitle: 'Web developer, Asia',
            range: 'Aug 2022 - Feb 2023',
            descriptions: [
                'Spearheaded the development of the Product Management System, contributing to improved productivity and workflow efficiency.',
                'Successfully maintained and optimized WordPress websites, ensuring seamless functionality and engaging user experiences.',
                'Developed a Cargo Registration Service using React, delivering a user-centric and responsive platform.'
            ]
        },
        {
            type: '',
            title: 'Flexsystem',
            subtitle: 'Full Stack Programmer, Asia',
            range: 'May 2021 - Aug 2022',
            descriptions: [
                'Collaborated within agile scrum teams to design, develop, and implement accessible and responsive user interfaces for a Human Resource Management System.',
                'Led the successful revamp of Employee Self-Service from Angular 1.5 to Angular 11, enhancing overall system performance.',
                'Contributed to large-scale projects for esteemed clients, including the Agricultural Bank of China, HKEAA, Great Eagle, and R&D initiatives.',
                'Developed the HR Management System and Project Management System using C#, .NET Core, MySQL, and ISAM database, streamlining operations and data management.​'
            ]
        },
        {
            type: '',
            title: 'AAS Education Consultancy',
            subtitle: 'Technical IT supporting, Asia',
            range: 'Sep 2019 - Apr 2021',
            descriptions: [
                'Delivered comprehensive reports to various departments, providing data-driven insights for informed decision-making.',
                'Managed and optimized the ZohoCRM system, enhancing organization and utilization of customer information.',
                'Utilized Power BI and Google Data Studio to create informative graphs and charts based on data from ZohoCRM.',
                'Created user interfaces by applying standard HTML/CSS practices for an enhanced website experience.​'
            ]
        },
        {
            type: '',
            title: 'Boxland Hong Kong Limited',
            subtitle: 'Internship Programmer, Asia',
            range: 'Sep 2018 - Jun 2019',
            descriptions: [
                'Supported the maintenance and development of a Hybrid application using Angular and Ionic, ensuring seamless functionality and user satisfaction.',
                'Assisted in connecting web sockets from hardware devices to display data within the application, optimizing data presentation.',
                'Developed an iOS application for bulk RFID tag scanning, providing an efficient solution for mobile data access.'
            ]
        },
        {
            type: '',
            title: 'MAD Mobile Application Development Limited',
            subtitle: 'Internship Programmer, Asia',
            range: 'Sep 2018 - Jun 2019',
            descriptions: [
                'Demonstrated exceptional coordination and planning skills, achieving results according to set schedules.',
                'Designed and built a booking searching Android application, ensuring a user-friendly experience.',
                'Integrated Android applications with MAD glass, showcasing a commitment to innovative technologies.'
            ]
        },
    ]

    const skillsList =
    {
        type: 'Skills',
        skills: [
            'Python',
            'TypeScript',
            'C#',
            'HTML5',
            'CSS',
            'JavaScript',
            'jQuery',
            'Angular',
            'React.js',
            'Ionic',
            'Tailwind',
            'Bootstrap',
            'Material Design',
            'ASP.NET MVC',
            'Node.js',
            'Express',
            'RESTful',
            'MongoDB',
            'MySQL',
            'MS Office',
            'WordPress',
            'Power BI',
            'Socket.io',
            'AWS EC2',
            'AWS S3',
            'AWS Route 53',
            'AWS CloudFront',
            'Git',
            'BitBucket'
        ]
    }

    return (
        <Box sx={BoxStyle} id='resume'>
            {
                eduList.map((edu, idx) => {
                    return <ResumeItem {...edu} key={idx}></ResumeItem>
                })
            }
            <Divider light={true} sx={{ mb: 2 }} />
            {
                workList.map((work, idx) => {
                    return <ResumeItem {...work} key={idx} />
                })
            }
            <Divider light={true} sx={{ mb: 2 }} />
            <ResumeChip key={0} {...skillsList}></ResumeChip>
        </Box>
    )
}

export default ResumeList