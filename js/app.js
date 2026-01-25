var app = angular.module('portfolioApp', []);

app.controller('MainController', function ($scope, $window) {
    $scope.developer = {
        name: "Vishnu Dev Aakash R",
        title: "Full Stack & Blockchain Developer",
        shortBio: "Building the web applications with full-stack solutions. Passionate about scalability, security, and user experience.",
        location: "Madurai, Tamil Nadu",
        email: "aakashrvda@gmail.com",
        phone: "6383272404",
        summary: "Full Stack & Blockchain Developer with strong expertise in building scalable web applications and decentralized solutions. Skilled in frontend and backend development, API architecture, database design, and blockchain technologies including Ethereum, Polygon, smart contracts, and Web3 integrations. Experienced in developing NFT platforms, token systems, and high-performance Node.js APIs. Passionate about creating secure, efficient, and user-friendly applications that bridge traditional systems with decentralized technologies.",
        linkedin: "vishnu-dev-aakash",
        github: "https://github.com/AAKASHRV"
    };

    $scope.menuItems = [
        { name: 'About', section: 'summary' },
        { name: 'Skills', section: 'skills' },
        { name: 'Experience', section: 'experience' },
        { name: 'Projects', section: 'projects' },
        { name: 'Education', section: 'education' }
    ];
    $scope.isMenuOpen = false;
    $scope.toggleMenu = function () {
        $scope.isMenuOpen = !$scope.isMenuOpen;
    };

    $scope.isScrolled = false;
    angular.element($window).bind("scroll", function () {
        $scope.isScrolled = $window.pageYOffset > 50;
        $scope.$apply();
    });

    $scope.skills = [
        {
            category: "Backend",
            icon: "fas fa-server",
            items: ["Node.js", "Express.js", "REST APIs", "Microservices"]
        },
        
        {
            category: "Databases",
            icon: "fas fa-database",
            items: ["MongoDB", "MySQL", "Redis"]
        },
        {
            category: "Frontend",
            icon: "fas fa-code",
            items: ["React.js", "Angular", "HTML5", "CSS3/SASS", "Bootstrap", "TypeScript"]
        },
        {
            category: "Blockchain",
            icon: "fab fa-ethereum",
            items: ["Solidity", "Web3.js", "Smart Contracts", "ERC Standards", "Polygon", "NFTs"]
        },
        {
            category: "DevOps & Cloud",
            icon: "fas fa-cloud-upload-alt",
            items: ["AWS (EC2, S3)", "CI/CD", "Linux Administration", "Git"]
        },
        {
            category: "Tools & APIs",
            icon: "fas fa-tools",
            items: ["Postman", "Razorpay", "Binance API", "Figma"]
        }
    ];
    $scope.experience = [
        {
            id: 1,
            role: "Full Stack Developer",
            company: "Kairaa Tech Serve",
            period: "May 2024 – Present",
            description: "Leading the development of scalable full-stack applications and integrating blockchain solutions for enterprise clients.",
            achievements: [
                "Architected a microservices-based backend reducing latency by 30%.",
                "Integrated secure wallet connections and smart contract interactions for a DeFi platform.",
                "Mentored junior developers on best practices in React and Node.js.",
                "Implemented real-time trading engine for 'Koinnation' crypto exchange using WebSockets."
            ]
        },
        {
            id: 2,
            role: "Programmer",
            company: "Osiz Technologies",
            period: "Sep 2021 – Apr 2024",
            description: "Developed and maintained diverse software projects ranging from crypto exchanges to utility platforms.",
            achievements: [
                "Designed and developed scalable, high-performance web applications using the MEAN stack (MongoDB, Express.js,Angular, Node.js), with a strong focus on reliability, efficiency, and maintainability.",
                "Actively participated in Agile development processes, including sprint planning, daily stand-ups, and improving project delivery timelines.",
                "Optimized database queries for high-volume transaction history data."
            ]
        }
    ];

    $scope.projects = [
        {
            title: "Vpay",
            description: "A comprehensive utility payment platform integrating Razorpay. Allows users to pay electricity, water, and internet bills seamlessy with transaction tracking.",
            tags: ["Nodejs", "Razorpay", "MySql"],
            link: "https://vairaape.com/"
        },
        {
            title: "SolarNFT",
            description: "An innovative Green-Tech NFT marketplace on Polygon. Users can buy digital ownership of solar panels and virtual land plots, earning Power generated credits.",
            tags: ["Nodejs", "Solidity", "Polygon", "Web3.js", "Mongodb"],
            link: "https://mysolarnft.com/"
        },
        {
            title: "Koinnation",
            description: "A centralized cryptocurrency exchange (CEX) featuring a high-performance matching engine, spot trading, and integration with Binance liquidity APIs.",
            tags: ["Node.js", "MongoDB", "AngularJS", "Sockets"],
            link: "https://www.koinnation.com/"
        },
        {
            title: "CryptoSEP",
            description: "A Stacking platform to stake holding currencies and earn rewards",
            tags: ["Node.js", "MongoDB", "ReactJS", "Sockets"],
            link: "https://www.mycryptosep.com/"
        },
        {
            title: "Kairaa Exchange",
            description: "A centralized cryptocurrency exchange (CEX) featuring a high-performance matching engine, spot trading, and integration with Binance liquidity APIs.",
            tags: ["Node.js", "MongoDB", "AngularJs", "Sockets"],
            link: "https://www.kairaaexchange.com/"
        }
    ];

    $scope.education = [
        {
            degree: "Bachelor of Computer Science",
            institution: "The Madura College",
            location: "Madurai, Tamil Nadu"
        }
    ];

    $scope.scrollTo = function (sectionId) {
        var element = document.getElementById(sectionId);
        if (element) {
            var headerOffset = 80;
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            $scope.isMenuOpen = false;
        }
    };
});
