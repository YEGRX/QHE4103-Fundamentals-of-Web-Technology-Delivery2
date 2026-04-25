"use strict";

const BRAND_IDENTITY = {
    name: "SURPASS",
    caption: "Official experience",
    introLogo: "assets/media/logo-intro.png",
    markLogo: "assets/media/logo-mark.png",
    heroVideo: "assets/media/hero-video.mp4"
};

const STORAGE_KEYS = {
    users: "ocs_users",
    session: "ocs_session",
    cars: "ocs_cars"
};

const DEMO_USER = {
    name: "SURPASS Demo Seller",
    address: "88 Bund Financial Plaza",
    phone: "13800138000",
    email: "demo@surpass.com",
    username: "surpass01",
    password: "drive2026"
};

const HOME_EXPERIENCE = {
    sessionKey: "aurelia_intro_seen",
    intro: {
        brand: BRAND_IDENTITY.name,
        title: "",
        subtitle: "",
        action: "",
        logoMarkup: `<img src="${BRAND_IDENTITY.introLogo}" alt="SURPASS logo">`
    },
    media: {
        poster: "",
        mp4: BRAND_IDENTITY.heroVideo,
        webm: ""
    },
    editorial: [
        {
            eyebrow: "Launch language",
            title: "Sharper typography, heavier contrast, cleaner black space.",
            copy: "The homepage now behaves like a brand-led automotive landing experience while still routing straight into the inventory and seller destinations."
        },
        {
            eyebrow: "Motion discipline",
            title: "Theatre on the homepage. Restraint on the form pages.",
            copy: "Registration, login, add-car and search keep their usability while the homepage carries the biggest emotional load."
        },
        {
            eyebrow: "Future media slot",
            title: "Ready for real video or animated background assets later.",
            copy: "This build already uses your real homepage video, and the media slot can still be swapped again later for new clips or richer background scenes."
        }
    ]
};

const CAR_SEED = [
    {
        id: "car-porsche-911-carrera-s",
        brand: "Porsche",
        model: "911 Carrera S",
        year: 2024,
        color: "Gentian Blue Metallic",
        location: "Shanghai",
        price: 1640000,
        bodyStyle: "Sports Coupe",
        mileage: 2100,
        fuel: "Petrol",
        transmission: "8-speed PDK",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=82",
        description: "Compact, precise and deeply polished, this 911 brings everyday usability to a cabin and chassis that still feel built around the driver.",
        featured: true
    },
    {
        id: "car-porsche-taycan-turbo",
        brand: "Porsche",
        model: "Taycan Turbo",
        year: 2024,
        color: "Frozen Berry",
        location: "Hangzhou",
        price: 1388000,
        bodyStyle: "Electric Sport Sedan",
        mileage: 4200,
        fuel: "Electric",
        transmission: "Two-speed Automatic",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=82",
        description: "A near-silent grand tourer with instant torque, clean cabin architecture and the balanced body control expected from a Porsche EV.",
        featured: true
    },
    {
        id: "car-porsche-panamera-e-hybrid",
        brand: "Porsche",
        model: "Panamera 4 E-Hybrid",
        year: 2023,
        color: "Volcano Grey",
        location: "Guangzhou",
        price: 1168000,
        bodyStyle: "Executive Fastback",
        mileage: 7700,
        fuel: "Hybrid",
        transmission: "8-speed PDK",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=82",
        description: "An executive fastback with long-distance comfort, electric running in town and enough chassis focus to keep the drive engaging.",
        featured: false
    },
    {
        id: "car-ferrari-roma",
        brand: "Ferrari",
        model: "Roma",
        year: 2022,
        color: "Rosso Corsa",
        location: "Shenzhen",
        price: 2580000,
        bodyStyle: "Grand Touring Coupe",
        mileage: 5200,
        fuel: "Petrol",
        transmission: "8-speed Dual-clutch",
        image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=82",
        description: "A front-mid-engine coupe with elegant proportions, fast steering and a cabin that blends daily refinement with theatrical performance.",
        featured: true
    },
    {
        id: "car-ferrari-f8-tributo",
        brand: "Ferrari",
        model: "F8 Tributo",
        year: 2021,
        color: "Argento Nurburgring",
        location: "Beijing",
        price: 3380000,
        bodyStyle: "Mid-engine Supercar",
        mileage: 6400,
        fuel: "Petrol",
        transmission: "7-speed Dual-clutch",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=82",
        description: "Light, sharp and intensely responsive, the F8 delivers modern supercar speed with a surprisingly approachable driving position.",
        featured: true
    },
    {
        id: "car-lamborghini-huracan-evo",
        brand: "Lamborghini",
        model: "Huracan EVO",
        year: 2022,
        color: "Verde Mantis",
        location: "Xiamen",
        price: 2980000,
        bodyStyle: "V10 Supercar",
        mileage: 8100,
        fuel: "Petrol",
        transmission: "7-speed LDF",
        image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=82",
        description: "A naturally aspirated V10, low seating position and dramatic geometry make this Huracan feel like an event before the engine even starts.",
        featured: true
    },
    {
        id: "car-lamborghini-urus",
        brand: "Lamborghini",
        model: "Urus Performante",
        year: 2024,
        color: "Nero Noctis",
        location: "Chengdu",
        price: 3180000,
        bodyStyle: "Performance SUV",
        mileage: 3900,
        fuel: "Petrol",
        transmission: "8-speed Automatic",
        image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1400&q=82",
        description: "A high-riding performance machine with huge road presence, fast responses and a cabin that feels more cockpit than family SUV.",
        featured: false
    },
    {
        id: "car-mclaren-720s",
        brand: "McLaren",
        model: "720S Performance",
        year: 2020,
        color: "Papaya Spark",
        location: "Hong Kong",
        price: 3280000,
        bodyStyle: "Carbon Supercar",
        mileage: 9800,
        fuel: "Petrol",
        transmission: "7-speed SSG",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1400&q=82",
        description: "Carbon structure, hydraulic steering feel and explosive mid-range pace make the 720S one of the most focused cars in the collection.",
        featured: true
    },
    {
        id: "car-mclaren-gt",
        brand: "McLaren",
        model: "GT",
        year: 2022,
        color: "Pacific Blue",
        location: "Suzhou",
        price: 1980000,
        bodyStyle: "Grand Tourer",
        mileage: 7400,
        fuel: "Petrol",
        transmission: "7-speed SSG",
        image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1400&q=82",
        description: "A lighter take on the grand tourer idea, with supercar bones, useful luggage space and a more relaxed ride than its track-led siblings.",
        featured: false
    },
    {
        id: "car-mercedes-s580",
        brand: "Mercedes-Benz",
        model: "S 580 4MATIC",
        year: 2023,
        color: "Obsidian Black",
        location: "Beijing",
        price: 1498000,
        bodyStyle: "Executive Sedan",
        mileage: 9800,
        fuel: "Petrol",
        transmission: "9G-TRONIC",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=82",
        description: "A flagship lounge on wheels with exceptional rear comfort, hushed ride quality and the authority of a proper chauffeur sedan.",
        featured: true
    },
    {
        id: "car-mercedes-amg-gt",
        brand: "Mercedes-AMG",
        model: "GT 63 S 4MATIC+",
        year: 2022,
        color: "Designo Graphite Grey",
        location: "Nanjing",
        price: 1880000,
        bodyStyle: "Performance Coupe",
        mileage: 12600,
        fuel: "Petrol",
        transmission: "AMG SPEEDSHIFT MCT",
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1400&q=82",
        description: "AMG drama in a long, planted body, pairing four-door practicality with the soundtrack and torque of a proper performance flagship.",
        featured: false
    },
    {
        id: "car-mercedes-g63",
        brand: "Mercedes-AMG",
        model: "G 63",
        year: 2021,
        color: "Polar White",
        location: "Wuhan",
        price: 2380000,
        bodyStyle: "Performance SUV",
        mileage: 21400,
        fuel: "Petrol",
        transmission: "AMG SPEEDSHIFT",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=82",
        description: "Boxy presence, unmistakable sound and commanding road posture make the G 63 an icon that still feels irresistible.",
        featured: false
    },
    {
        id: "car-bmw-m8-competition",
        brand: "BMW",
        model: "M8 Competition Gran Coupe",
        year: 2022,
        color: "Dravit Grey",
        location: "Hangzhou",
        price: 1220000,
        bodyStyle: "Gran Coupe",
        mileage: 14200,
        fuel: "Petrol",
        transmission: "8-speed M Steptronic",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=82",
        description: "A long, low V8 grand coupe with rich cabin materials, confident high-speed manners and enough aggression for weekend drives.",
        featured: false
    },
    {
        id: "car-bmw-ix-m60",
        brand: "BMW",
        model: "iX M60",
        year: 2024,
        color: "Storm Bay",
        location: "Suzhou",
        price: 888000,
        bodyStyle: "Electric SUV",
        mileage: 3200,
        fuel: "Electric",
        transmission: "Automatic",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=82",
        description: "A bold electric SUV with lounge-grade materials, immediate acceleration and a digital cabin tuned for quiet long-distance travel.",
        featured: false
    },
    {
        id: "car-audi-rs-etron-gt",
        brand: "Audi",
        model: "RS e-tron GT",
        year: 2024,
        color: "Daytona Grey",
        location: "Shenzhen",
        price: 1128000,
        bodyStyle: "Electric Gran Turismo",
        mileage: 5300,
        fuel: "Electric",
        transmission: "Automatic",
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1400&q=82",
        description: "Sculpted, quiet and unapologetically fast, this GT blends electric performance with a cabin designed like a private concept lounge.",
        featured: true
    },
    {
        id: "car-audi-r8-v10",
        brand: "Audi",
        model: "R8 V10 Performance",
        year: 2022,
        color: "Kemora Grey",
        location: "Qingdao",
        price: 1860000,
        bodyStyle: "Mid-engine Coupe",
        mileage: 8800,
        fuel: "Petrol",
        transmission: "7-speed S tronic",
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=82",
        description: "A clean, usable mid-engine coupe with naturally aspirated character, precise controls and a cabin that stays beautifully restrained.",
        featured: false
    },
    {
        id: "car-range-rover-autobiography",
        brand: "Range Rover",
        model: "Autobiography LWB",
        year: 2024,
        color: "Sunset Gold",
        location: "Chengdu",
        price: 1988000,
        bodyStyle: "Luxury SUV",
        mileage: 4600,
        fuel: "Hybrid",
        transmission: "8-speed Automatic",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=82",
        description: "A serene luxury SUV with a calm architectural cabin, excellent second-row comfort and effortless road presence.",
        featured: true
    },
    {
        id: "car-rolls-royce-ghost",
        brand: "Rolls-Royce",
        model: "Ghost Black Badge",
        year: 2023,
        color: "Black Diamond",
        location: "Shanghai",
        price: 4680000,
        bodyStyle: "Ultra-luxury Sedan",
        mileage: 5100,
        fuel: "Petrol",
        transmission: "Satellite-aided Automatic",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=82",
        description: "Quiet authority, deep-pile comfort and a darker specification give this Ghost a more contemporary private-client character.",
        featured: true
    },
    {
        id: "car-rolls-royce-cullinan",
        brand: "Rolls-Royce",
        model: "Cullinan",
        year: 2022,
        color: "Arctic White",
        location: "Beijing",
        price: 5280000,
        bodyStyle: "Ultra-luxury SUV",
        mileage: 11200,
        fuel: "Petrol",
        transmission: "8-speed Automatic",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1400&q=82",
        description: "A high-riding private suite with remarkable isolation, expansive rear seating and the softest sense of arrival in the inventory.",
        featured: false
    },
    {
        id: "car-bentley-continental-gt",
        brand: "Bentley",
        model: "Continental GT Speed",
        year: 2023,
        color: "Sequin Blue",
        location: "Guangzhou",
        price: 3080000,
        bodyStyle: "Luxury GT Coupe",
        mileage: 6900,
        fuel: "Petrol",
        transmission: "8-speed Dual-clutch",
        image: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1400&q=82",
        description: "A hand-finished grand tourer with huge torque, polished ride comfort and the kind of cabin detail that rewards close inspection.",
        featured: false
    },
    {
        id: "car-bentley-bentayga",
        brand: "Bentley",
        model: "Bentayga V8",
        year: 2022,
        color: "British Racing Green",
        location: "Hong Kong",
        price: 2680000,
        bodyStyle: "Luxury SUV",
        mileage: 15200,
        fuel: "Petrol",
        transmission: "8-speed Automatic",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1400&q=82",
        description: "A refined luxury SUV with strong V8 performance, soft leather detailing and the composure expected from a long-distance Bentley.",
        featured: false
    },
    {
        id: "car-aston-martin-db12",
        brand: "Aston Martin",
        model: "DB12",
        year: 2024,
        color: "Magnetic Silver",
        location: "Xiamen",
        price: 2480000,
        bodyStyle: "Super GT",
        mileage: 1800,
        fuel: "Petrol",
        transmission: "8-speed Automatic",
        image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1400&q=82",
        description: "A sharp new-generation GT with elegant proportions, muscular V8 response and a cabin that finally feels fully modern.",
        featured: true
    },
    {
        id: "car-aston-martin-vantage",
        brand: "Aston Martin",
        model: "Vantage F1 Edition",
        year: 2022,
        color: "Racing Green",
        location: "Nanjing",
        price: 1860000,
        bodyStyle: "Sports Coupe",
        mileage: 9600,
        fuel: "Petrol",
        transmission: "8-speed Automatic",
        image: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&w=1400&q=82",
        description: "Compact, muscular and more focused than the standard car, this Vantage brings track-influenced tuning into a beautifully usable coupe.",
        featured: false
    },
    {
        id: "car-maserati-mc20",
        brand: "Maserati",
        model: "MC20",
        year: 2023,
        color: "Bianco Audace",
        location: "Macau",
        price: 2280000,
        bodyStyle: "Mid-engine Supercar",
        mileage: 3600,
        fuel: "Petrol",
        transmission: "8-speed Dual-clutch",
        image: "https://images.unsplash.com/photo-1549925862-990f51d3c401?auto=format&fit=crop&w=1400&q=82",
        description: "A carbon-bodied Italian supercar with butterfly doors, clean surfacing and a surprisingly refined cabin for long weekend use.",
        featured: false
    }
];

const LEGACY_SEED_IDS = new Set([
    "car-taycan-4s",
    "car-rs-etron-gt",
    "car-range-rover",
    "car-carrera",
    "car-s580",
    "car-ix-m60",
    "car-panamera",
    "car-eqs",
    "car-m850i",
    "car-a8l",
    "car-r8-v10",
    "car-g63"
]);

const VEHICLE_DETAIL_PRESETS = {
    "car-porsche-911-carrera-s": {
        power: "443 hp",
        torque: "530 Nm",
        acceleration: "3.5 s 0-100 km/h",
        topSpeed: "308 km/h",
        drivetrain: "Rear-wheel drive",
        seats: "2+2",
        condition: "Certified pre-owned",
        sellerType: "SURPASS partner dealer",
        marketNote: "Positioned around current low-mileage Carrera S listings with desirable metallic paint and PDK specification."
    },
    "car-porsche-taycan-turbo": {
        power: "671 hp overboost",
        torque: "850 Nm",
        acceleration: "3.2 s 0-100 km/h",
        topSpeed: "260 km/h",
        drivetrain: "Dual-motor all-wheel drive",
        seats: "4",
        condition: "Manufacturer warranty active",
        sellerType: "Private collection",
        marketNote: "Priced against recent high-spec Taycan Turbo examples with low mileage and battery warranty coverage."
    },
    "car-porsche-panamera-e-hybrid": {
        power: "462 hp combined",
        torque: "700 Nm",
        acceleration: "4.4 s 0-100 km/h",
        topSpeed: "280 km/h",
        drivetrain: "All-wheel drive",
        seats: "4",
        condition: "Dealer maintained",
        sellerType: "SURPASS partner dealer",
        marketNote: "Balanced for an executive hybrid fastback with moderate mileage and desirable grey exterior specification."
    },
    "car-ferrari-roma": {
        power: "612 hp",
        torque: "760 Nm",
        acceleration: "3.4 s 0-100 km/h",
        topSpeed: "320 km/h",
        drivetrain: "Rear-wheel drive",
        seats: "2+2",
        condition: "Collector-grade",
        sellerType: "Private collection",
        marketNote: "Aligned with low-mileage Roma coupe demand, Rosso Corsa paint and current grand touring Ferrari market values."
    },
    "car-ferrari-f8-tributo": {
        power: "710 hp",
        torque: "770 Nm",
        acceleration: "2.9 s 0-100 km/h",
        topSpeed: "340 km/h",
        drivetrain: "Rear-wheel drive",
        seats: "2",
        condition: "Collector-grade",
        sellerType: "Specialist performance dealer",
        marketNote: "Reflects the premium for a mid-engine V8 Ferrari with restrained mileage and high collector desirability."
    },
    "car-lamborghini-huracan-evo": {
        power: "631 hp",
        torque: "600 Nm",
        acceleration: "2.9 s 0-100 km/h",
        topSpeed: "325 km/h",
        drivetrain: "All-wheel drive",
        seats: "2",
        condition: "Performance inspected",
        sellerType: "Specialist performance dealer",
        marketNote: "Set for a V10 supercar with strong color specification and service history appropriate to the mileage."
    },
    "car-lamborghini-urus": {
        power: "657 hp",
        torque: "850 Nm",
        acceleration: "3.3 s 0-100 km/h",
        topSpeed: "306 km/h",
        drivetrain: "All-wheel drive",
        seats: "5",
        condition: "Manufacturer warranty active",
        sellerType: "SURPASS partner dealer",
        marketNote: "Priced to match current high-performance SUV demand for late-model Urus Performante inventory."
    },
    "car-mclaren-720s": {
        power: "710 hp",
        torque: "770 Nm",
        acceleration: "2.9 s 0-100 km/h",
        topSpeed: "341 km/h",
        drivetrain: "Rear-wheel drive",
        seats: "2",
        condition: "Carbon chassis inspected",
        sellerType: "Specialist performance dealer",
        marketNote: "Reflects the premium for a carbon-tub supercar with vivid Papaya specification and documented maintenance."
    },
    "car-mclaren-gt": {
        power: "612 hp",
        torque: "630 Nm",
        acceleration: "3.2 s 0-100 km/h",
        topSpeed: "326 km/h",
        drivetrain: "Rear-wheel drive",
        seats: "2",
        condition: "Touring specification",
        sellerType: "Private collection",
        marketNote: "Positioned for a lower-mileage McLaren GT where long-distance usability softens pure supercar pricing."
    },
    "car-mercedes-s580": {
        power: "496 hp",
        torque: "700 Nm",
        acceleration: "4.4 s 0-100 km/h",
        topSpeed: "250 km/h",
        drivetrain: "4MATIC all-wheel drive",
        seats: "5",
        condition: "Executive maintained",
        sellerType: "SURPASS partner dealer",
        marketNote: "Benchmark price for a recent S-Class flagship with chauffeur-grade comfort and moderate mileage."
    },
    "car-mercedes-amg-gt": {
        power: "630 hp",
        torque: "900 Nm",
        acceleration: "3.2 s 0-100 km/h",
        topSpeed: "315 km/h",
        drivetrain: "4MATIC+ all-wheel drive",
        seats: "4",
        condition: "AMG service record",
        sellerType: "Specialist performance dealer",
        marketNote: "Adjusted for GT 63 S performance credentials, mileage, and four-door grand touring usability."
    },
    "car-mercedes-g63": {
        power: "577 hp",
        torque: "850 Nm",
        acceleration: "4.5 s 0-100 km/h",
        topSpeed: "220 km/h",
        drivetrain: "All-wheel drive",
        seats: "5",
        condition: "Icon specification",
        sellerType: "Private collection",
        marketNote: "G 63 pricing remains resilient due to limited supply, strong road presence and enduring collector appeal."
    },
    "car-bmw-m8-competition": {
        power: "617 hp",
        torque: "750 Nm",
        acceleration: "3.2 s 0-100 km/h",
        topSpeed: "305 km/h",
        drivetrain: "M xDrive",
        seats: "4",
        condition: "Dealer maintained",
        sellerType: "SURPASS partner dealer",
        marketNote: "Marketed below two-door exotics while retaining flagship M performance and long-distance comfort."
    },
    "car-bmw-ix-m60": {
        power: "610 hp",
        torque: "1,100 Nm",
        acceleration: "3.8 s 0-100 km/h",
        topSpeed: "250 km/h",
        drivetrain: "Dual-motor all-wheel drive",
        seats: "5",
        condition: "Battery warranty active",
        sellerType: "SURPASS partner dealer",
        marketNote: "Priced for a late-model electric luxury SUV where specification and warranty status drive buyer confidence."
    },
    "car-audi-rs-etron-gt": {
        power: "637 hp overboost",
        torque: "830 Nm",
        acceleration: "3.3 s 0-100 km/h",
        topSpeed: "250 km/h",
        drivetrain: "Dual-motor quattro",
        seats: "4",
        condition: "Battery warranty active",
        sellerType: "Private collection",
        marketNote: "Reflects current electric GT values, favoring clean mileage and desirable Daytona Grey finish."
    },
    "car-audi-r8-v10": {
        power: "602 hp",
        torque: "560 Nm",
        acceleration: "3.2 s 0-100 km/h",
        topSpeed: "330 km/h",
        drivetrain: "quattro all-wheel drive",
        seats: "2",
        condition: "Performance inspected",
        sellerType: "Specialist performance dealer",
        marketNote: "R8 pricing benefits from naturally aspirated V10 scarcity and mature usability compared with more extreme supercars."
    },
    "car-range-rover-autobiography": {
        power: "510 hp combined",
        torque: "700 Nm",
        acceleration: "5.5 s 0-100 km/h",
        topSpeed: "242 km/h",
        drivetrain: "All-wheel drive",
        seats: "5",
        condition: "Executive maintained",
        sellerType: "SURPASS partner dealer",
        marketNote: "Set for a long-wheelbase luxury SUV with high rear-seat comfort and strong executive-market demand."
    },
    "car-rolls-royce-ghost": {
        power: "591 hp",
        torque: "900 Nm",
        acceleration: "4.8 s 0-100 km/h",
        topSpeed: "250 km/h",
        drivetrain: "All-wheel drive",
        seats: "5",
        condition: "Collector-grade",
        sellerType: "Private collection",
        marketNote: "Black Badge specification and low mileage support a premium over standard Ghost market positioning."
    },
    "car-rolls-royce-cullinan": {
        power: "563 hp",
        torque: "850 Nm",
        acceleration: "5.2 s 0-100 km/h",
        topSpeed: "250 km/h",
        drivetrain: "All-wheel drive",
        seats: "5",
        condition: "Private-client specification",
        sellerType: "Private collection",
        marketNote: "Cullinan values remain elevated for well-kept examples with strong color contrast and rear-seat presence."
    },
    "car-bentley-continental-gt": {
        power: "650 hp",
        torque: "900 Nm",
        acceleration: "3.6 s 0-100 km/h",
        topSpeed: "335 km/h",
        drivetrain: "All-wheel drive",
        seats: "4",
        condition: "Grand touring specification",
        sellerType: "SURPASS partner dealer",
        marketNote: "Priced for a hand-finished GT coupe where specification, mileage and color depth define desirability."
    },
    "car-bentley-bentayga": {
        power: "542 hp",
        torque: "770 Nm",
        acceleration: "4.5 s 0-100 km/h",
        topSpeed: "290 km/h",
        drivetrain: "All-wheel drive",
        seats: "5",
        condition: "Dealer maintained",
        sellerType: "SURPASS partner dealer",
        marketNote: "Balanced for a V8 luxury SUV with higher mileage but strong cabin finish and daily usability."
    },
    "car-aston-martin-db12": {
        power: "671 hp",
        torque: "800 Nm",
        acceleration: "3.6 s 0-100 km/h",
        topSpeed: "325 km/h",
        drivetrain: "Rear-wheel drive",
        seats: "2+2",
        condition: "Near-new",
        sellerType: "Private collection",
        marketNote: "Near-new DB12 availability is limited, so the price reflects low mileage and latest-generation interior quality."
    },
    "car-aston-martin-vantage": {
        power: "527 hp",
        torque: "685 Nm",
        acceleration: "3.6 s 0-100 km/h",
        topSpeed: "314 km/h",
        drivetrain: "Rear-wheel drive",
        seats: "2",
        condition: "Performance inspected",
        sellerType: "Specialist performance dealer",
        marketNote: "F1 Edition specification supports a premium while staying below newer DB12 and flagship supercar pricing."
    },
    "car-maserati-mc20": {
        power: "621 hp",
        torque: "730 Nm",
        acceleration: "2.9 s 0-100 km/h",
        topSpeed: "325 km/h",
        drivetrain: "Rear-wheel drive",
        seats: "2",
        condition: "Carbon chassis inspected",
        sellerType: "Specialist performance dealer",
        marketNote: "Positioned for an Italian carbon supercar with low mileage and strong visual theatre, below the highest-volume exotic premiums."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    seedStorage();
    applyInterfaceMode();
    renderShell();
    bindHeaderEvents();
    hydrateCommonViews();
    routePage();
    markCursorTargets();
    initCustomCursor();
});

function renderShell() {
    const page = document.body.dataset.page || "home";
    const headerTarget = document.querySelector("[data-site-header]");
    const footerTarget = document.querySelector("[data-site-footer]");
    const navItems = [
        { key: "home", href: "index.html", label: "Home" },
        { key: "seller", href: "seller.html", label: "Seller Hub" },
        { key: "register", href: "registration.html", label: "Register" },
        { key: "login", href: "login.html", label: "Login" },
        { key: "add-car", href: "add-car.html", label: "Add Car" },
        { key: "search", href: "search.html", label: "Search" }
    ];
    const session = getSession();
    const sessionMarkup = session
        ? `Signed in as <strong>${escapeHtml(session.username)}</strong>`
        : "Guest mode active";

    if (headerTarget) {
        headerTarget.innerHTML = `
            <header class="site-header">
                <div class="header-inner">
                    <a class="brand-lockup" href="index.html" aria-label="${BRAND_IDENTITY.name} home" data-cursor-hover>
                        <span class="brand-mark" aria-hidden="true">
                            <img src="${BRAND_IDENTITY.markLogo}" alt="">
                        </span>
                        <span class="brand-lockup__copy">
                            <h1 class="brand-title">${BRAND_IDENTITY.name}</h1>
                        </span>
                    </a>
                    <nav class="top-nav" aria-label="Primary navigation">
                        ${navItems.map((item) => `
                            <a class="${item.key === page ? "active" : ""}" href="${item.href}" data-cursor-hover>
                                ${item.label}
                            </a>
                        `).join("")}
                    </nav>
                    <div class="header-status">
                        <div class="session-pill" data-session-pill>${sessionMarkup}</div>
                        ${session
                            ? '<button class="header-logout" type="button" data-logout-button data-cursor-hover>Log out</button>'
                            : '<a class="ghost-button" href="login.html" data-cursor-hover>Seller access</a>'}
                    </div>
                    <button class="menu-toggle" type="button" aria-expanded="false" data-menu-toggle data-cursor-hover>Menu</button>
                </div>
            </header>
        `;
    }

    if (footerTarget) {
        footerTarget.innerHTML = `
            <footer class="site-footer">
                <div class="site-footer__inner">
                    <div class="footer-top">
                        <div>
                            <h2 class="brand-title" style="margin:0;">${BRAND_IDENTITY.name}</h2>
                            <p class="brand-caption">Private performance marketplace</p>
                        </div>
                        <div class="footer-links">
                            <a href="index.html" data-cursor-hover>Home</a>
                            <a href="seller.html" data-cursor-hover>Seller Hub</a>
                            <a href="registration.html" data-cursor-hover>Register</a>
                            <a href="login.html" data-cursor-hover>Login</a>
                            <a href="add-car.html" data-cursor-hover>Add Car</a>
                            <a href="search.html" data-cursor-hover>Search</a>
                        </div>
                    </div>
                    <p class="footer-note">
                        Curated performance cars, private seller access and editorial inventory presentation for discerning drivers.
                    </p>
                    <p class="footer-note">© <span data-current-year></span> ${BRAND_IDENTITY.name}. Privacy • Terms • Concierge support.</p>
                </div>
            </footer>
        `;
    }
}

function applyInterfaceMode() {
    document.body.classList.toggle("reduced-motion", prefersReducedMotion());
}

function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hasFinePointer() {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function bindHeaderEvents() {
    const toggle = document.querySelector("[data-menu-toggle]");
    if (toggle) {
        toggle.addEventListener("click", () => {
            const expanded = document.body.classList.toggle("nav-open");
            toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
        });
    }

    document.querySelectorAll("[data-logout-button]").forEach((button) => {
        button.addEventListener("click", () => {
            localStorage.removeItem(STORAGE_KEYS.session);
            window.location.href = "index.html";
        });
    });
}

function hydrateCommonViews() {
    const session = getSession();
    document.querySelectorAll("[data-session-pill]").forEach((node) => {
        node.innerHTML = session
            ? `Signed in as <strong>${escapeHtml(session.username)}</strong>`
            : "Guest mode active";
    });
    document.querySelectorAll("[data-current-year]").forEach((node) => {
        node.textContent = new Date().getFullYear();
    });
}

function routePage() {
    const page = document.body.dataset.page;
    if (page === "home") initHomePage();
    if (page === "seller") initSellerPage();
    if (page === "register") initRegistrationPage();
    if (page === "login") initLoginPage();
    if (page === "add-car") initAddCarPage();
    if (page === "search") initSearchPage();
    if (page === "detail") initDetailPage();
}

function initHomePage() {
    const heroImage = document.querySelector("#home-hero-art");
    const heroVideo = document.querySelector("#home-hero-video");
    const featuredGrid = document.querySelector("#featured-grid");
    const editorialList = document.querySelector("#home-editorial-list");
    const totalCars = document.querySelector("#metric-total-cars");
    const featuredCount = document.querySelector("#metric-featured-cars");
    const activeCities = document.querySelector("#metric-active-cities");
    const cars = getCars();
    const featuredCars = cars.filter((car) => car.featured).slice(0, 3);

    hydrateHomeIntro();
    initBrandIntro();
    updateHomeSnapState();

    if (heroImage) {
        heroImage.src = HOME_EXPERIENCE.media.poster || buildHeroArt();
        heroImage.alt = "Cinematic performance car poster";
    }

    configureHomeMedia(heroVideo, heroImage);

    if (featuredGrid) {
        featuredGrid.innerHTML = featuredCars.map(renderShowcaseCard).join("");
        attachVehicleImageFallbacks(featuredGrid);
    }

    if (editorialList) {
        editorialList.innerHTML = HOME_EXPERIENCE.editorial.map(renderEditorialCard).join("");
    }

    if (totalCars) totalCars.textContent = `${cars.length}+`;
    if (featuredCount) featuredCount.textContent = `${cars.filter((car) => car.featured).length}`;
    if (activeCities) {
        const cities = new Set(cars.map((car) => car.location));
        activeCities.textContent = `${cities.size}`;
    }

    initSceneNavigation();
}

function hydrateHomeIntro() {
    const logo = document.querySelector("#intro-logo");
    const brand = document.querySelector("#intro-brand");
    const title = document.querySelector("#intro-title");
    const text = document.querySelector("#intro-text");
    const enterButton = document.querySelector("#intro-enter-button");

    if (logo) logo.innerHTML = HOME_EXPERIENCE.intro.logoMarkup;
    if (brand) brand.textContent = HOME_EXPERIENCE.intro.brand;
    if (title) title.textContent = HOME_EXPERIENCE.intro.title;
    if (text) text.textContent = HOME_EXPERIENCE.intro.subtitle;
    if (enterButton) enterButton.textContent = HOME_EXPERIENCE.intro.action;
}

function initBrandIntro() {
    const intro = document.querySelector("#brand-intro");
    if (!intro) return;

    const alreadySeen = sessionStorage.getItem(HOME_EXPERIENCE.sessionKey) === "1";
    if (alreadySeen) {
        intro.classList.add("is-hidden");
        document.body.classList.remove("home-locked");
        return;
    }

    document.body.classList.add("home-locked");
    intro.focus();
    const dismissIntro = (event) => {
        if (event.type === "keydown" && !["Enter", " "].includes(event.key)) {
            return;
        }

        if (event.cancelable) {
            event.preventDefault();
        }

        sessionStorage.setItem(HOME_EXPERIENCE.sessionKey, "1");
        intro.classList.add("is-hidden");
        document.body.classList.remove("home-locked");
        window.setTimeout(() => {
            document.querySelector("[data-home-primary]")?.focus();
        }, 420);
        intro.removeEventListener("click", dismissIntro);
        intro.removeEventListener("keydown", dismissIntro);
    };

    intro.addEventListener("click", dismissIntro);
    intro.addEventListener("keydown", dismissIntro);
}

function configureHomeMedia(video, poster) {
    if (!video || !poster) return;

    const posterSource = HOME_EXPERIENCE.media.poster || poster.src || buildHeroArt();
    poster.src = posterSource;
    poster.hidden = false;

    const sources = [
        HOME_EXPERIENCE.media.webm ? `<source src="${HOME_EXPERIENCE.media.webm}" type="video/webm">` : "",
        HOME_EXPERIENCE.media.mp4 ? `<source src="${HOME_EXPERIENCE.media.mp4}" type="video/mp4">` : ""
    ].join("");

    if (!sources) {
        video.hidden = true;
        video.innerHTML = "";
        return;
    }

    video.poster = posterSource;
    video.innerHTML = sources;
    video.hidden = false;
    video.addEventListener("error", () => {
        video.hidden = true;
    }, { once: true });
    video.load();
    const playResult = video.play();
    if (playResult && typeof playResult.catch === "function") {
        playResult.catch(() => {
            video.hidden = true;
        });
    }
}

function updateHomeSnapState() {
    if (document.body.dataset.page !== "home") return;
    const enableSnap = !prefersReducedMotion() && window.innerWidth >= 860;
    document.body.classList.toggle("snap-enabled", enableSnap);
}

function initSceneNavigation() {
    const scenes = Array.from(document.querySelectorAll(".scene-panel[data-scene]"));
    const progressButtons = Array.from(document.querySelectorAll("[data-scene-target]"));
    if (!scenes.length || !progressButtons.length) return;

    progressButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = document.getElementById(button.dataset.sceneTarget);
            if (!target) return;
            target.scrollIntoView({
                behavior: prefersReducedMotion() ? "auto" : "smooth",
                block: "start"
            });
        });
    });

    const setActiveScene = (id) => {
        scenes.forEach((scene) => scene.classList.toggle("is-active", scene.id === id));
        progressButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.sceneTarget === id));
    };

    setActiveScene(scenes[0].id);

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            const activeEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (activeEntry) {
                setActiveScene(activeEntry.target.id);
            }
        }, {
            threshold: [0.35, 0.55, 0.75]
        });

        scenes.forEach((scene) => observer.observe(scene));
    }

    window.addEventListener("resize", updateHomeSnapState, { passive: true });
}

function renderEditorialCard(item) {
    return `
        <article class="editorial-card fade-up" data-cursor-hover="true">
            <span class="editorial-card__meta">${escapeHtml(item.eyebrow)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.copy)}</p>
        </article>
    `;
}

function initSellerPage() {
    const sessionPanel = document.querySelector("#seller-session-panel");
    if (!sessionPanel) return;

    const session = getSession();
    if (session) {
        sessionPanel.innerHTML = `
            <div class="status-banner fade-up">
                <div>
                    <div class="eyebrow">Seller access live</div>
                    <h2 class="section-title" style="margin-top:16px;">Welcome back, ${escapeHtml(session.name || session.username)}</h2>
                    <p class="body-copy">Your session is active. You can list a new vehicle immediately, explore the search gallery or revisit your registration details.</p>
                </div>
                <div class="stack-actions">
                    <a class="primary-button" href="add-car.html">List a vehicle</a>
                    <a class="secondary-button" href="search.html">Browse inventory</a>
                </div>
            </div>
        `;
        return;
    }

    sessionPanel.innerHTML = `
        <div class="status-banner fade-up">
            <div>
                <div class="eyebrow">Seller pathway</div>
                <h2 class="section-title" style="margin-top:16px;">Create your showroom workflow</h2>
                <p class="body-copy">Register first, then sign in to unlock listing tools and add your own vehicle directly into the search collection.</p>
            </div>
            <div class="stack-actions">
                <a class="primary-button" href="registration.html">Register now</a>
                <a class="secondary-button" href="login.html">Open seller access</a>
            </div>
        </div>
    `;
}

function initRegistrationPage() {
    const form = document.querySelector("#registration-form");
    const message = document.querySelector("#registration-message");
    if (!form || !message) return;

    const fields = ["name", "address", "phone", "email", "username", "password"];
    fields.forEach((field) => {
        const input = form.elements[field];
        if (!input) return;
        input.addEventListener("blur", () => validateRegistrationField(field, input.value));
        input.addEventListener("input", () => clearFieldError(field));
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let valid = true;

        fields.forEach((field) => {
            const input = form.elements[field];
            if (!validateRegistrationField(field, input.value)) {
                valid = false;
            }
        });

        const username = form.elements.username.value.trim();
        const users = getUsers();
        if (users.some((user) => user.username.toLowerCase() === username.toLowerCase())) {
            setFieldError("username", "This username is already taken. Choose another one.");
            valid = false;
        }

        if (!valid) {
            showMessage(message, "error", "Registration needs attention", "Please correct the highlighted fields and try again.");
            return;
        }

        const newUser = {
            name: form.elements.name.value.trim(),
            address: form.elements.address.value.trim(),
            phone: form.elements.phone.value.trim(),
            email: form.elements.email.value.trim(),
            username,
            password: form.elements.password.value.trim()
        };

        users.push(newUser);
        saveUsers(users);
        form.reset();
        fields.forEach(clearFieldError);
        showMessage(
            message,
            "success",
            "Registration completed",
            "Your seller profile is ready. Use the login page to activate your seller session."
        );
    });
}

function initLoginPage() {
    const form = document.querySelector("#login-form");
    const message = document.querySelector("#login-message");
    const redirect = getSafeRedirect();
    if (!form || !message) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = form.elements.username.value.trim();
        const password = form.elements.password.value.trim();

        if (!username || !password) {
            showMessage(message, "error", "Missing credentials", "Enter both username and password before attempting to sign in.");
            return;
        }

        const matchedUser = getUsers().find((user) => user.username === username && user.password === password);
        if (!matchedUser) {
            showMessage(message, "error", "Unable to sign in", "The credentials do not match our seller records. Try the concierge account or your registered details.");
            return;
        }

        saveSession({
            username: matchedUser.username,
            name: matchedUser.name,
            email: matchedUser.email
        });

        showMessage(message, "success", "Seller session activated", `You are now signed in. Redirecting you to ${redirect === "add-car.html" ? "the listing desk" : "the seller hub"}...`);
        window.setTimeout(() => {
            window.location.href = redirect;
        }, 850);
    });
}

function initAddCarPage() {
    const gate = document.querySelector("#add-car-gate");
    const shell = document.querySelector("#add-car-shell");
    const form = document.querySelector("#add-car-form");
    const status = document.querySelector("#add-car-status");
    const message = document.querySelector("#add-car-message");
    const preview = document.querySelector("#car-preview");
    if (!gate || !shell || !form || !status || !message || !preview) return;

    const session = getSession();
    if (!session) {
        gate.style.display = "block";
        shell.style.display = "none";
        status.innerHTML = `
            <div>
                <div class="eyebrow">Seller sign-in required</div>
                <h2 class="section-title" style="margin-top:16px;">Unlock the listing desk</h2>
                <p class="body-copy">This page publishes new cars into the collection, so a seller session is required before we can publish a listing.</p>
            </div>
            <div class="stack-actions">
                <a class="primary-button" href="login.html?redirect=add-car.html">Go to login</a>
                <a class="secondary-button" href="registration.html">Create a seller account</a>
            </div>
        `;
        return;
    }

    gate.style.display = "none";
    shell.style.display = "block";
    status.innerHTML = `
        <div>
            <div class="eyebrow">Seller session confirmed</div>
            <h2 class="section-title" style="margin-top:16px;">Hello, ${escapeHtml(session.name || session.username)}</h2>
            <p class="body-copy">Fill in the details below and the new vehicle will appear immediately inside the search gallery.</p>
        </div>
        <div class="stack-actions">
            <a class="secondary-button" href="search.html">View current inventory</a>
        </div>
    `;

    syncGeneratedPreview(form, preview);

    ["brand", "model", "color"].forEach((name) => {
        const input = form.elements[name];
        if (!input) return;
        input.addEventListener("input", () => syncGeneratedPreview(form, preview));
    });

    form.elements.imageFile.addEventListener("change", async () => {
        const file = form.elements.imageFile.files[0];
        if (!file) {
            preview.dataset.imageData = "";
            syncGeneratedPreview(form, preview);
            return;
        }

        const dataUrl = await fileToDataUrl(file);
        preview.src = dataUrl;
        preview.dataset.imageData = dataUrl;
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const validation = validateCarForm(form);
        if (!validation.valid) {
            showMessage(message, "error", "Listing form incomplete", validation.message);
            return;
        }

        const storedImage = preview.dataset.imageData || buildVehicleArt({
            brand: form.elements.brand.value.trim(),
            model: form.elements.model.value.trim(),
            color: form.elements.color.value.trim()
        });

        const newCar = normalizeCar({
            id: `car-${Date.now()}`,
            brand: form.elements.brand.value.trim(),
            model: form.elements.model.value.trim(),
            year: Number(form.elements.year.value.trim()),
            color: form.elements.color.value.trim(),
            location: form.elements.location.value.trim(),
            price: Number(form.elements.price.value.trim()),
            bodyStyle: form.elements.bodyStyle.value.trim(),
            mileage: Number(form.elements.mileage.value.trim()),
            fuel: form.elements.fuel.value,
            transmission: form.elements.transmission.value,
            description: form.elements.description.value.trim() || "A newly listed luxury vehicle added by the active seller session.",
            image: storedImage,
            featured: false
        });

        const cars = getCars();
        cars.unshift(newCar);
        saveCars(cars);
        form.reset();
        preview.dataset.imageData = "";
        syncGeneratedPreview(form, preview);
        showMessage(
            message,
            "success",
            "Vehicle added to inventory",
            `The listing for ${newCar.brand} ${newCar.model} is now available in the search gallery.`
        );
    });
}

function initSearchPage() {
    const form = document.querySelector("#search-form");
    const results = document.querySelector("#search-results");
    const count = document.querySelector("#search-result-count");
    const empty = document.querySelector("#search-empty");
    if (!form || !results || !count || !empty) return;

    populateSearchFilters(form);
    hydrateSearchForm(form);
    performSearch();

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        performSearch();
    });

    form.addEventListener("reset", () => {
        window.setTimeout(() => {
            const url = new URL(window.location.href);
            url.search = "";
            window.history.replaceState({}, "", url.toString());
            performSearch();
        }, 0);
    });

    ["sort", "brand", "bodyStyle", "fuel"].forEach((name) => {
        form.elements[name]?.addEventListener("change", () => performSearch());
    });

    function performSearch() {
        const model = form.elements.model.value.trim().toLowerCase();
        const year = form.elements.year.value.trim();
        const brand = form.elements.brand?.value || "";
        const bodyStyle = form.elements.bodyStyle?.value || "";
        const fuel = form.elements.fuel?.value || "";
        const sort = form.elements.sort.value;
        let cars = getCars();

        cars = cars.filter((car) => {
            const matchesModel = !model || `${car.brand} ${car.model}`.toLowerCase().includes(model);
            const matchesYear = !year || String(car.year) === year;
            const matchesBrand = !brand || car.brand === brand;
            const matchesBody = !bodyStyle || car.bodyStyle === bodyStyle;
            const matchesFuel = !fuel || car.fuel === fuel;
            return matchesModel && matchesYear && matchesBrand && matchesBody && matchesFuel;
        });

        cars = sortCars(cars, sort);
        updateSearchUrl({ model, year, brand, bodyStyle, fuel, sort });

        count.textContent = cars.length === 1 ? "1 vehicle available" : `${cars.length} vehicles available`;
        empty.style.display = cars.length ? "none" : "block";

        results.innerHTML = cars.map(renderVehicleCard).join("");
        attachVehicleImageFallbacks(results);
    }
}

function initDetailPage() {
    const shell = document.querySelector("#detail-shell");
    if (!shell) return;

    const id = new URLSearchParams(window.location.search).get("id");
    const car = getCars().find((item) => item.id === id);

    if (!car) {
        shell.innerHTML = `
            <div class="detail-card fade-up">
                <div class="eyebrow">Vehicle not found</div>
                <h2 class="section-title" style="margin-top:16px;">This listing is no longer in the gallery</h2>
                <p class="body-copy">The detail link may be outdated, or the inventory was reset. Return to the search page to explore the current collection.</p>
                <div class="stack-actions">
                    <a class="primary-button" href="search.html">Back to search</a>
                    <a class="secondary-button" href="index.html">Return home</a>
                </div>
            </div>
        `;
        return;
    }

    shell.innerHTML = `
        <div class="detail-grid fade-up">
            <div class="detail-card">
                <img class="detail-image" src="${escapeHtml(car.image)}" data-fallback="${escapeHtml(buildVehicleArt(car))}" alt="${escapeHtml(car.brand)} ${escapeHtml(car.model)}">
            </div>
            <div class="detail-card">
                <div class="eyebrow">${escapeHtml(car.brand)} curated listing</div>
                <h1 class="detail-title" style="font-size:3.4rem; margin:18px 0 10px;">
                    ${escapeHtml(car.model)}
                </h1>
                <p class="body-copy">${escapeHtml(car.year)} • ${escapeHtml(car.bodyStyle)} • ${escapeHtml(car.location)}</p>
                <p class="detail-price">${formatCurrency(car.price)}</p>
                <p class="detail-copy">${escapeHtml(car.description)}</p>
                <div class="detail-price-note">
                    <span>Market positioning</span>
                    <p>${escapeHtml(car.marketNote)}</p>
                </div>
                <div class="detail-specs">
                    ${renderDetailSpec("Colour", car.color)}
                    ${renderDetailSpec("Mileage", formatMileage(car.mileage))}
                    ${renderDetailSpec("Fuel", car.fuel)}
                    ${renderDetailSpec("Transmission", car.transmission)}
                    ${renderDetailSpec("Location", car.location)}
                    ${renderDetailSpec("Year", car.year)}
                </div>
                <div class="detail-performance-grid">
                    ${renderDetailSpec("Power", car.power)}
                    ${renderDetailSpec("Torque", car.torque)}
                    ${renderDetailSpec("0-100 km/h", car.acceleration)}
                    ${renderDetailSpec("Top speed", car.topSpeed)}
                    ${renderDetailSpec("Drivetrain", car.drivetrain)}
                    ${renderDetailSpec("Seats", car.seats)}
                    ${renderDetailSpec("Condition", car.condition)}
                    ${renderDetailSpec("Seller", car.sellerType)}
                </div>
                <div class="vehicle-three-view" aria-label="${escapeHtml(car.brand)} ${escapeHtml(car.model)} technical three-view illustration">
                    <div class="vehicle-three-view__heading">
                        <span>Technical three-view</span>
                        <strong>${escapeHtml(car.brand)} ${escapeHtml(car.model)}</strong>
                    </div>
                    <div class="vehicle-three-view__grid">
                        ${renderVehicleView("Front", car)}
                        ${renderVehicleView("Side", car)}
                        ${renderVehicleView("Rear", car)}
                    </div>
                </div>
                <div class="detail-cta" style="margin-top:24px;">
                    <a class="primary-button" href="search.html">Back to search</a>
                    <a class="secondary-button" href="add-car.html">List your own car</a>
                </div>
            </div>
        </div>
    `;
    attachVehicleImageFallbacks(shell);
}

function markCursorTargets() {
    const targets = document.querySelectorAll([
        "a",
        "button",
        ".showcase-card",
        ".showcase-image",
        ".vehicle-card",
        ".vehicle-image",
        ".detail-image",
        ".quick-link-card",
        ".journey-card",
        ".summary-card",
        ".info-card",
        ".editorial-card",
        ".brand-tile",
        ".home-progress button"
    ].join(", "));

    targets.forEach((target) => {
        if (!target.matches("input, textarea, select, option, label")) {
            target.setAttribute("data-cursor-hover", "true");
            if ((target.matches(".vehicle-card, .showcase-card, .vehicle-image, .showcase-image, .detail-image")) && !target.dataset.cursorLabel) {
                target.setAttribute("data-cursor-label", "View");
            }
        }
    });
}

function initCustomCursor() {
    if (!hasFinePointer() || prefersReducedMotion()) return;
    if (document.querySelector(".site-cursor")) return;

    document.body.classList.add("cursor-enhanced");
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    const label = document.createElement("div");
    dot.className = "site-cursor";
    ring.className = "site-cursor-ring";
    label.className = "site-cursor-label";
    document.body.append(dot, ring, label);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let labelX = mouseX;
    let labelY = mouseY;
    let hoveredElement = null;
    let overForm = false;

    const activateHover = (element) => {
        hoveredElement = element;
        dot.classList.add("is-hover");
        ring.classList.add("is-hover");
        const cursorLabel = element.dataset.cursorLabel || "";
        label.textContent = cursorLabel;
        label.classList.toggle("is-visible", Boolean(cursorLabel));
    };

    const clearHover = () => {
        hoveredElement = null;
        dot.classList.remove("is-hover");
        ring.classList.remove("is-hover");
        label.classList.remove("is-visible");
    };

    document.addEventListener("mouseover", (event) => {
        const formTarget = event.target.closest("input, textarea, select, option, label");
        if (formTarget) {
            overForm = true;
            document.body.classList.add("cursor-over-form");
            clearHover();
            return;
        }

        overForm = false;
        document.body.classList.remove("cursor-over-form");

        const interactive = event.target.closest("[data-cursor-hover]");
        if (interactive) {
            activateHover(interactive);
        }
    });

    document.addEventListener("mouseout", (event) => {
        const leavingInteractive = event.target.closest("[data-cursor-hover]");
        if (leavingInteractive && (!event.relatedTarget || !event.relatedTarget.closest("[data-cursor-hover]"))) {
            clearHover();
        }

        const leavingForm = event.target.closest("input, textarea, select, option, label");
        if (leavingForm && (!event.relatedTarget || !event.relatedTarget.closest("input, textarea, select, option, label"))) {
            overForm = false;
            document.body.classList.remove("cursor-over-form");
        }
    });

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        dot.classList.add("is-visible");
        ring.classList.add("is-visible");
        if (!overForm && label.textContent) {
            label.classList.add("is-visible");
        }
    });

    document.addEventListener("mouseleave", () => {
        dot.classList.remove("is-visible");
        ring.classList.remove("is-visible");
        label.classList.remove("is-visible");
    });

    const tick = () => {
        let targetX = mouseX;
        let targetY = mouseY;

        if (hoveredElement && !overForm) {
            const rect = hoveredElement.getBoundingClientRect();
            targetX += (rect.left + rect.width / 2 - mouseX) * 0.2;
            targetY += (rect.top + rect.height / 2 - mouseY) * 0.2;
        }

        ringX += (targetX - ringX) * 0.12;
        ringY += (targetY - ringY) * 0.12;
        labelX += (mouseX + 34 - labelX) * 0.18;
        labelY += (mouseY - 18 - labelY) * 0.18;

        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        label.style.transform = `translate3d(${labelX}px, ${labelY}px, 0)`;
        window.requestAnimationFrame(tick);
    };

    tick();
}

function seedStorage() {
    const storedUsers = readJson(STORAGE_KEYS.users);
    if (!Array.isArray(storedUsers) || storedUsers.length === 0) {
        saveUsers([DEMO_USER]);
    } else if (!storedUsers.some((user) => user.username === DEMO_USER.username)) {
        storedUsers.unshift(DEMO_USER);
        saveUsers(storedUsers);
    }

    const storedCars = readJson(STORAGE_KEYS.cars);
    if (!Array.isArray(storedCars) || storedCars.length === 0) {
        saveCars(mergeSeedCars([]));
    } else {
        saveCars(mergeSeedCars(storedCars));
    }
}

function mergeSeedCars(storedCars) {
    const seedIds = new Set(CAR_SEED.map((car) => car.id));
    const normalizedSeeds = CAR_SEED.map(normalizeCar);
    const userCars = storedCars
        .map(normalizeCar)
        .filter((car) => !seedIds.has(car.id) && !LEGACY_SEED_IDS.has(car.id));

    return [...normalizedSeeds, ...userCars];
}

function getUsers() {
    const users = readJson(STORAGE_KEYS.users);
    return Array.isArray(users) ? users : [];
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

function getSession() {
    const session = readJson(STORAGE_KEYS.session);
    return session && typeof session === "object" ? session : null;
}

function saveSession(session) {
    localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
}

function getCars() {
    const cars = readJson(STORAGE_KEYS.cars);
    return Array.isArray(cars) ? cars.map(normalizeCar) : [];
}

function saveCars(cars) {
    localStorage.setItem(STORAGE_KEYS.cars, JSON.stringify(cars.map(normalizeCar)));
}

function readJson(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        return null;
    }
}

function validateRegistrationField(field, rawValue) {
    const value = rawValue.trim();
    let error = "";

    if (!value) {
        error = "This field is required.";
    } else if (field === "name" && !/^[A-Za-z ]+$/.test(value)) {
        error = "Use letters and spaces only.";
    } else if (field === "address" && !/^[A-Za-z0-9 ]+$/.test(value)) {
        error = "Use letters, numbers and spaces only.";
    } else if (field === "phone" && !/^1\d{10}$/.test(value)) {
        error = "Enter a valid China mainland mobile number.";
    } else if (field === "email" && !/^[^\s@]+@[^\s@]+\.(cn|com)$/.test(value)) {
        error = "Use a valid email ending in .cn or .com.";
    } else if ((field === "username" || field === "password") && !/^[A-Za-z0-9]{6,}$/.test(value)) {
        error = "Use at least 6 letters or numbers.";
    }

    setFieldError(field, error);
    return !error;
}

function clearFieldError(field) {
    setFieldError(field, "");
}

function setFieldError(field, message) {
    const errorNode = document.querySelector(`[data-error-for="${field}"]`);
    if (errorNode) {
        errorNode.textContent = message;
    }
}

function validateCarForm(form) {
    const values = {
        brand: form.elements.brand.value.trim(),
        model: form.elements.model.value.trim(),
        year: form.elements.year.value.trim(),
        color: form.elements.color.value.trim(),
        location: form.elements.location.value.trim(),
        price: form.elements.price.value.trim(),
        bodyStyle: form.elements.bodyStyle.value.trim(),
        mileage: form.elements.mileage.value.trim(),
        fuel: form.elements.fuel.value.trim(),
        transmission: form.elements.transmission.value.trim()
    };

    if (Object.values(values).some((value) => !value)) {
        return { valid: false, message: "Complete every required field before publishing the listing." };
    }

    const year = Number(values.year);
    if (!/^\d{4}$/.test(values.year) || year < 1990 || year > new Date().getFullYear() + 1) {
        return { valid: false, message: "Enter a valid 4-digit model year." };
    }

    if (!/^\d+(\.\d+)?$/.test(values.price)) {
        return { valid: false, message: "Price should contain numbers only." };
    }

    if (!/^\d+$/.test(values.mileage)) {
        return { valid: false, message: "Mileage should be a whole number." };
    }

    return { valid: true };
}

function sortCars(cars, sort) {
    const sorted = [...cars];
    if (sort === "price-asc") return sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return sorted.sort((a, b) => b.price - a.price);
    if (sort === "year-desc") return sorted.sort((a, b) => b.year - a.year);
    if (sort === "year-asc") return sorted.sort((a, b) => a.year - b.year);
    return sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || b.year - a.year);
}

function populateSearchFilters(form) {
    const cars = getCars();
    populateSelect(form.elements.brand, uniqueSorted(cars.map((car) => car.brand)), "All brands");
    populateSelect(form.elements.bodyStyle, uniqueSorted(cars.map((car) => car.bodyStyle)), "All body styles");
    populateSelect(form.elements.fuel, uniqueSorted(cars.map((car) => car.fuel)), "All fuel types");
}

function populateSelect(select, values, fallbackLabel) {
    if (!select) return;
    select.innerHTML = [
        `<option value="">${escapeHtml(fallbackLabel)}</option>`,
        ...values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
    ].join("");
}

function uniqueSorted(values) {
    return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function hydrateSearchForm(form) {
    const params = new URLSearchParams(window.location.search);
    form.elements.model.value = params.get("model") || "";
    form.elements.year.value = params.get("year") || "";
    if (form.elements.brand) form.elements.brand.value = params.get("brand") || "";
    if (form.elements.bodyStyle) form.elements.bodyStyle.value = params.get("body") || "";
    if (form.elements.fuel) form.elements.fuel.value = params.get("fuel") || "";
    form.elements.sort.value = params.get("sort") || "featured";
}

function updateSearchUrl({ model, year, brand, bodyStyle, fuel, sort }) {
    const url = new URL(window.location.href);
    const params = new URLSearchParams();
    if (model) params.set("model", model);
    if (year) params.set("year", year);
    if (brand) params.set("brand", brand);
    if (bodyStyle) params.set("body", bodyStyle);
    if (fuel) params.set("fuel", fuel);
    if (sort && sort !== "featured") params.set("sort", sort);
    url.search = params.toString();
    window.history.replaceState({}, "", url.toString());
}

function renderShowcaseCard(car) {
    return `
        <article class="showcase-card fade-up" data-cursor-hover="true">
            <img class="showcase-image" src="${escapeHtml(car.image)}" data-fallback="${escapeHtml(buildVehicleArt(car))}" alt="${escapeHtml(car.brand)} ${escapeHtml(car.model)}">
            <div class="tag-row" style="margin-top:16px;">
                <span class="chip">${escapeHtml(car.brand)}</span>
                <span class="chip">${escapeHtml(car.year)}</span>
                <span class="chip">${escapeHtml(car.location)}</span>
            </div>
            <h3 class="card-title">${escapeHtml(car.model)}</h3>
            <p>${escapeHtml(car.description)}</p>
            <p class="price-line">${formatCurrency(car.price)}</p>
            <div class="inline-actions">
                <a class="primary-button" href="car-detail.html?id=${encodeURIComponent(car.id)}" data-cursor-hover="true">View detail</a>
                <a class="secondary-button" href="search.html?model=${encodeURIComponent(car.model.toLowerCase())}" data-cursor-hover="true">Search similar</a>
            </div>
        </article>
    `;
}

function renderVehicleCard(car) {
    return `
        <article class="vehicle-card fade-up" data-cursor-hover="true">
            <img class="vehicle-image" src="${escapeHtml(car.image)}" data-fallback="${escapeHtml(buildVehicleArt(car))}" alt="${escapeHtml(car.brand)} ${escapeHtml(car.model)}">
            <div class="tag-row">
                <span class="chip">${escapeHtml(car.brand)}</span>
                <span class="chip">${escapeHtml(car.bodyStyle)}</span>
                <span class="chip">${escapeHtml(car.year)}</span>
            </div>
            <div>
                <h3 class="card-title" style="margin-bottom:6px;">${escapeHtml(car.model)}</h3>
                <p class="meta-text">${escapeHtml(car.location)} • ${formatMileage(car.mileage)} • ${escapeHtml(car.color)}</p>
            </div>
            <div class="spec-row vehicle-card__specs">
                <span class="spec-pill">${escapeHtml(car.power)}</span>
                <span class="spec-pill">${escapeHtml(car.acceleration)}</span>
                <span class="spec-pill">${escapeHtml(car.drivetrain)}</span>
            </div>
            <p>${escapeHtml(car.description)}</p>
            <div class="vehicle-card__footer">
                <span class="detail-price" style="font-size:1.2rem; margin:0;">${formatCurrency(car.price)}</span>
                <a class="primary-button" href="car-detail.html?id=${encodeURIComponent(car.id)}" data-cursor-hover="true">View detail</a>
            </div>
        </article>
    `;
}

function attachVehicleImageFallbacks(scope = document) {
    scope.querySelectorAll(".showcase-image, .vehicle-image, .detail-image").forEach((image) => {
        if (image.dataset.fallbackReady === "true") return;
        image.dataset.fallbackReady = "true";
        image.addEventListener("error", () => {
            const fallback = image.dataset.fallback;
            if (!fallback || image.src === fallback) return;
            image.src = fallback;
        });
    });
}

function renderDetailSpec(label, value) {
    return `
        <div class="detail-spec">
            <span>${escapeHtml(String(label))}</span>
            <strong>${escapeHtml(String(value))}</strong>
        </div>
    `;
}

function renderVehicleView(label, car) {
    return `
        <figure class="vehicle-view">
            <img src="${escapeHtml(buildVehicleViewArt(label, car))}" alt="${escapeHtml(label)} view of ${escapeHtml(car.brand)} ${escapeHtml(car.model)}">
            <figcaption>${escapeHtml(label)} view</figcaption>
        </figure>
    `;
}

function inferVehicleDetails(car) {
    const brand = String(car.brand || "").toLowerCase();
    const bodyStyle = String(car.bodyStyle || "").toLowerCase();
    const fuel = String(car.fuel || "").toLowerCase();

    if (fuel.includes("electric")) {
        return {
            power: "520 hp",
            torque: "760 Nm",
            acceleration: "4.1 s 0-100 km/h",
            topSpeed: "250 km/h",
            drivetrain: "Dual-motor all-wheel drive",
            seats: bodyStyle.includes("coupe") ? "4" : "5",
            condition: "Battery warranty active",
            sellerType: "SURPASS partner dealer",
            marketNote: "Price is estimated from current premium electric vehicle listings with mileage, specification and warranty status considered."
        };
    }

    if (brand.includes("rolls") || brand.includes("bentley") || bodyStyle.includes("luxury")) {
        return {
            power: "540 hp",
            torque: "780 Nm",
            acceleration: "4.8 s 0-100 km/h",
            topSpeed: "250 km/h",
            drivetrain: "All-wheel drive",
            seats: "5",
            condition: "Executive maintained",
            sellerType: "Private collection",
            marketNote: "Price is positioned around comparable luxury-market examples with mileage, cabin specification and ownership profile considered."
        };
    }

    return {
        power: "500 hp",
        torque: "650 Nm",
        acceleration: "4.0 s 0-100 km/h",
        topSpeed: "290 km/h",
        drivetrain: bodyStyle.includes("suv") ? "All-wheel drive" : "Rear-wheel drive",
        seats: bodyStyle.includes("suv") ? "5" : "2",
        condition: "Performance inspected",
        sellerType: "SURPASS partner dealer",
        marketNote: "Price is estimated from comparable premium listings with mileage, model year, body style and specification considered."
    };
}

function normalizeCar(car) {
    const detailPreset = VEHICLE_DETAIL_PRESETS[car.id] || inferVehicleDetails(car);
    const normalized = {
        id: car.id || `car-${Date.now()}`,
        brand: car.brand || BRAND_IDENTITY.name,
        model: car.model || "Concept Touring",
        year: Number(car.year) || new Date().getFullYear(),
        color: car.color || "Graphite",
        location: car.location || "Shanghai",
        price: Number(car.price) || 0,
        bodyStyle: car.bodyStyle || "Luxury Coupe",
        mileage: Number(car.mileage) || 0,
        fuel: car.fuel || "Petrol",
        transmission: car.transmission || "Automatic",
        description: car.description || `${BRAND_IDENTITY.name} curated listing.`,
        featured: Boolean(car.featured),
        power: car.power || detailPreset.power,
        torque: car.torque || detailPreset.torque,
        acceleration: car.acceleration || detailPreset.acceleration,
        topSpeed: car.topSpeed || detailPreset.topSpeed,
        drivetrain: car.drivetrain || detailPreset.drivetrain,
        seats: car.seats || detailPreset.seats,
        condition: car.condition || detailPreset.condition,
        sellerType: car.sellerType || detailPreset.sellerType,
        marketNote: car.marketNote || detailPreset.marketNote
    };

    normalized.image = car.image || buildVehicleArt(normalized);
    return normalized;
}

function showMessage(target, type, title, body) {
    target.className = `message-strip ${type}`;
    target.innerHTML = `
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(body)}</span>
    `;
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "CNY",
        maximumFractionDigits: 0
    }).format(Number(value) || 0);
}

function formatMileage(value) {
    return `${new Intl.NumberFormat("en-US").format(Number(value) || 0)} km`;
}

function getSafeRedirect() {
    const redirect = new URLSearchParams(window.location.search).get("redirect");
    const allowed = ["seller.html", "add-car.html", "search.html"];
    return allowed.includes(redirect) ? redirect : "seller.html";
}

function syncGeneratedPreview(form, preview) {
    if (preview.dataset.imageData) return;
    preview.src = buildVehicleArt({
        brand: form.elements.brand?.value.trim() || BRAND_IDENTITY.name,
        model: form.elements.model?.value.trim() || "Signature Touring",
        color: form.elements.color?.value.trim() || "Graphite"
    });
}

function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("Unable to read file"));
        reader.readAsDataURL(file);
    });
}

function buildHeroArt() {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="Cinematic Italian-inspired performance car poster">
            <defs>
                <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stop-color="#050505" />
                    <stop offset="55%" stop-color="#12090a" />
                    <stop offset="100%" stop-color="#050505" />
                </linearGradient>
                <linearGradient id="car" x1="0" x2="1">
                    <stop offset="0%" stop-color="#ff4545" />
                    <stop offset="48%" stop-color="#c91824" />
                    <stop offset="100%" stop-color="#ff8a3d" />
                </linearGradient>
                <linearGradient id="beam" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.78)" />
                    <stop offset="100%" stop-color="rgba(255,255,255,0)" />
                </linearGradient>
                <filter id="blur">
                    <feGaussianBlur stdDeviation="34" />
                </filter>
            </defs>
            <rect width="1200" height="900" fill="url(#bg)" />
            <g opacity="0.34" filter="url(#blur)">
                <circle cx="280" cy="160" r="220" fill="#d71f29" />
                <circle cx="980" cy="210" r="160" fill="#f0c518" />
            </g>
            <g opacity="0.55">
                <path d="M220 0 L450 900" stroke="url(#beam)" stroke-width="26" />
                <path d="M840 0 L1040 900" stroke="url(#beam)" stroke-width="18" />
            </g>
            <g stroke="rgba(255,255,255,0.11)" stroke-width="1">
                <path d="M140 760 H1080" />
                <path d="M170 724 H1050" />
            </g>
            <ellipse cx="620" cy="662" rx="348" ry="62" fill="rgba(0,0,0,0.5)" />
            <path d="M230 600 C315 570, 382 496, 468 446 C564 388, 754 390, 854 454 C918 494, 968 542, 1014 594 L988 622 C908 610, 830 606, 744 606 H338 C300 606, 265 610, 222 622 Z" fill="url(#car)" />
            <path d="M392 458 C472 406, 707 406, 810 466 L874 548 H346 Z" fill="rgba(8,8,8,0.76)" stroke="rgba(255,255,255,0.13)" stroke-width="4" />
            <path d="M356 548 H868" stroke="rgba(255,255,255,0.85)" stroke-width="7" stroke-linecap="round" />
            <path d="M222 606 L158 626" stroke="rgba(255,228,203,0.92)" stroke-width="10" stroke-linecap="round" />
            <path d="M900 564 L1012 590" stroke="rgba(255,228,203,0.9)" stroke-width="10" stroke-linecap="round" />
            <circle cx="394" cy="638" r="72" fill="#090909" stroke="#8d8d8d" stroke-width="9" />
            <circle cx="850" cy="638" r="72" fill="#090909" stroke="#8d8d8d" stroke-width="9" />
            <circle cx="394" cy="638" r="24" fill="#d5d5d5" />
            <circle cx="850" cy="638" r="24" fill="#d5d5d5" />
            <text x="112" y="178" fill="rgba(255,255,255,0.82)" font-family="Arial" font-size="102" font-weight="700" letter-spacing="4">SURPASS</text>
            <text x="116" y="238" fill="rgba(255,255,255,0.46)" font-family="Arial" font-size="30" letter-spacing="12">OFFICIAL EXPERIENCE</text>
        </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function buildVehicleArt({ brand, model, color }) {
    const palette = getPalette(color);
    const safeBrand = escapeHtml(brand || BRAND_IDENTITY.name);
    const safeModel = escapeHtml(model || "Signature");
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 780" role="img" aria-label="${safeBrand} ${safeModel}">
            <defs>
                <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stop-color="${palette.bgStart}" />
                    <stop offset="100%" stop-color="${palette.bgEnd}" />
                </linearGradient>
                <linearGradient id="car" x1="0" x2="1">
                    <stop offset="0%" stop-color="${palette.carStart}" />
                    <stop offset="55%" stop-color="${palette.carMid}" />
                    <stop offset="100%" stop-color="${palette.carEnd}" />
                </linearGradient>
            </defs>
            <rect width="1200" height="780" fill="url(#bg)" />
            <g opacity="0.26">
                <circle cx="250" cy="160" r="150" fill="${palette.glowA}" />
                <circle cx="970" cy="180" r="130" fill="${palette.glowB}" />
            </g>
            <path d="M110 620 H1090" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
            <ellipse cx="610" cy="585" rx="300" ry="48" fill="rgba(0,0,0,0.34)" />
            <path d="M245 520 C316 500, 386 432, 456 398 C554 350, 720 350, 834 404 C893 432, 945 476, 985 520 L960 548 C909 540, 836 536, 752 536 H334 C295 536, 264 540, 228 548 Z" fill="url(#car)" />
            <path d="M382 410 C462 365, 683 365, 792 418 L852 490 H350 Z" fill="rgba(9,12,16,0.7)" stroke="rgba(255,255,255,0.14)" stroke-width="4" />
            <path d="M354 490 H854" stroke="rgba(255,255,255,0.86)" stroke-width="6" stroke-linecap="round" />
            <path d="M228 542 L166 558" stroke="rgba(255,212,196,0.88)" stroke-width="10" stroke-linecap="round" />
            <path d="M894 512 L988 536" stroke="rgba(255,208,196,0.88)" stroke-width="10" stroke-linecap="round" />
            <circle cx="390" cy="562" r="60" fill="#0d1116" stroke="${palette.rim}" stroke-width="10" />
            <circle cx="848" cy="562" r="60" fill="#0d1116" stroke="${palette.rim}" stroke-width="10" />
            <circle cx="390" cy="562" r="20" fill="${palette.hub}" />
            <circle cx="848" cy="562" r="20" fill="${palette.hub}" />
            <text x="72" y="120" fill="rgba(255,255,255,0.72)" font-family="Georgia" font-size="34" letter-spacing="8">${safeBrand.toUpperCase()}</text>
            <text x="72" y="168" fill="rgba(255,255,255,0.92)" font-family="Georgia" font-size="78">${safeModel}</text>
            <text x="74" y="214" fill="rgba(255,255,255,0.48)" font-family="Arial" font-size="22" letter-spacing="4">${escapeHtml(color || "Graphite")} CURATED LISTING</text>
        </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function buildVehicleViewArt(view, car) {
    const palette = getPalette(car.color);
    const viewKey = String(view || "Side").toLowerCase();
    const isFront = viewKey.includes("front");
    const isRear = viewKey.includes("rear");
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 380" role="img" aria-label="${escapeHtml(view)} technical view">
            <defs>
                <linearGradient id="line" x1="0" x2="1">
                    <stop offset="0%" stop-color="${palette.carStart}" stop-opacity="0.45" />
                    <stop offset="52%" stop-color="#d9b15f" stop-opacity="0.95" />
                    <stop offset="100%" stop-color="${palette.carEnd}" stop-opacity="0.48" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <rect width="720" height="380" rx="28" fill="#070707" />
            <path d="M70 298 H650" stroke="rgba(255,255,255,0.09)" />
            <path d="M92 96 C205 45, 510 42, 632 96" stroke="rgba(217,177,95,0.18)" fill="none" />
            ${isFront || isRear ? `
                <g fill="none" stroke="url(#line)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)">
                    <path d="M220 240 C232 164, 275 118, 360 114 C445 118, 488 164, 500 240" />
                    <path d="M196 238 C230 276, 490 276, 524 238" />
                    <path d="M248 186 H472" />
                    <path d="M252 228 C292 210, 428 210, 468 228" />
                    <path d="M218 244 L154 260" />
                    <path d="M502 244 L566 260" />
                    <circle cx="250" cy="262" r="28" />
                    <circle cx="470" cy="262" r="28" />
                </g>
                <g stroke="${isRear ? "rgba(215,31,41,0.82)" : "rgba(255,239,190,0.88)"}" stroke-width="8" stroke-linecap="round">
                    <path d="M166 256 H220" />
                    <path d="M500 256 H554" />
                </g>
            ` : `
                <g fill="none" stroke="url(#line)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)">
                    <path d="M92 238 C148 222, 190 170, 250 142 C326 106, 458 108, 542 150 C590 174, 624 207, 652 238" />
                    <path d="M164 236 H590" />
                    <path d="M250 150 C318 122, 440 124, 512 156 L556 218 H206 Z" />
                    <path d="M210 218 H558" />
                    <circle cx="234" cy="254" r="44" />
                    <circle cx="540" cy="254" r="44" />
                    <circle cx="234" cy="254" r="14" />
                    <circle cx="540" cy="254" r="14" />
                </g>
                <g stroke="rgba(255,239,190,0.9)" stroke-width="8" stroke-linecap="round">
                    <path d="M112 240 L158 228" />
                    <path d="M606 226 L650 238" />
                </g>
            `}
        </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getPalette(color) {
    const value = String(color || "").toLowerCase();
    if (value.includes("silver") || value.includes("grey") || value.includes("gray")) {
        return {
            bgStart: "#1b2630",
            bgEnd: "#0d1116",
            carStart: "#dbe2e9",
            carMid: "#8c98a7",
            carEnd: "#eef3f7",
            glowA: "#73859b",
            glowB: "#c8d0d8",
            rim: "#8d99a8",
            hub: "#dce3ea"
        };
    }
    if (value.includes("white")) {
        return {
            bgStart: "#1f2631",
            bgEnd: "#111821",
            carStart: "#fbfcfc",
            carMid: "#d7dde4",
            carEnd: "#f4f8fb",
            glowA: "#b7c1ce",
            glowB: "#d7dee5",
            rim: "#9fa8b4",
            hub: "#edf2f6"
        };
    }
    if (value.includes("blue")) {
        return {
            bgStart: "#132138",
            bgEnd: "#0d141f",
            carStart: "#9cbce0",
            carMid: "#41658b",
            carEnd: "#c5d9ee",
            glowA: "#2c4f77",
            glowB: "#5a7ea8",
            rim: "#7c9ac0",
            hub: "#d4e1ed"
        };
    }
    if (value.includes("green")) {
        return {
            bgStart: "#15231f",
            bgEnd: "#0c1412",
            carStart: "#95bea8",
            carMid: "#4a715d",
            carEnd: "#cce1d5",
            glowA: "#3f5f4d",
            glowB: "#728f7f",
            rim: "#8aa496",
            hub: "#d7e7df"
        };
    }
    if (value.includes("gold") || value.includes("champagne")) {
        return {
            bgStart: "#241b14",
            bgEnd: "#0d1015",
            carStart: "#e6d2ac",
            carMid: "#9d7d4f",
            carEnd: "#f3e8d4",
            glowA: "#876742",
            glowB: "#c2a16b",
            rim: "#ae8e61",
            hub: "#f0e1c3"
        };
    }
    if (value.includes("black")) {
        return {
            bgStart: "#1b1f27",
            bgEnd: "#090b0f",
            carStart: "#515862",
            carMid: "#1b2029",
            carEnd: "#808996",
            glowA: "#3a414d",
            glowB: "#5c6470",
            rim: "#78808a",
            hub: "#c7d0d8"
        };
    }
    return {
        bgStart: "#1d2330",
        bgEnd: "#0c1118",
        carStart: "#d9ddd7",
        carMid: "#8f948c",
        carEnd: "#eceeea",
        glowA: "#637285",
        glowB: "#97845d",
        rim: "#9199a4",
        hub: "#dce1e6"
    };
}
