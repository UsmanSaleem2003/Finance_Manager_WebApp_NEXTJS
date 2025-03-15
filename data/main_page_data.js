import {
    BarChart3,
    Receipt,
    PieChart,
    CreditCard,
    Globe,
    Zap,
    ShieldCheck,
    Bell,
    Users
} from "lucide-react";

export const platformData = [
    {
        value: "Finance Management",
        label: "Industry",
    },
    {
        value: "Saas - Web App",
        label: "App Type",
    },
    {
        value: "Up-to-date Alerts",
        label: "Services",
    },
];

export const statsData = [
    {
        value: "5K+",
        label: "Active Users",
    },
    {
        value: "$2M+",
        label: "Transactions Tracked",
    },
    {
        value: "95.9%",
        label: "Uptime",
    },
    {
        value: "4.7/5",
        label: "User Rating",
    },
];

export const featuresData = [
    {
        icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
        title: "In-Depth Analytics",
        description:
            "Gain AI-driven insights into your financial habits and spending trends.",
    },
    {
        icon: <Receipt className="h-8 w-8 text-blue-600" />,
        title: "AI-Powered Receipt Scanner",
        description:
            "Automatically extract and organize receipt data with cutting-edge AI.",
    },
    {
        icon: <PieChart className="h-8 w-8 text-blue-600" />,
        title: "Smart Budgeting",
        description: "Plan and manage budgets efficiently with intelligent suggestions.",
    },
    {
        icon: <CreditCard className="h-8 w-8 text-blue-600" />,
        title: "Unified Account Management",
        description: "Handle multiple accounts and credit cards seamlessly in one place.",
    },
    {
        icon: <Globe className="h-8 w-8 text-blue-600" />,
        title: "Real-Time Currency Conversion",
        description: "Support multiple currencies with instant exchange rate updates.",
    },
    {
        icon: <Zap className="h-8 w-8 text-blue-600" />,
        title: "AI-Driven Insights",
        description: "Receive automated financial tips and intelligent recommendations.",
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
        title: "Enhanced Security",
        description: "Protect transactions with advanced encryption and safety measures.",
    },
    {
        icon: <Bell className="h-8 w-8 text-blue-600" />,
        title: "Personalized Notifications",
        description: "Set up custom alerts for budget thresholds and financial activity.",
    },
    {
        icon: <Users className="h-8 w-8 text-blue-600" />,
        title: "Collaborative Budgeting",
        description: "Share and manage budgets with family or team members effortlessly.",
    },
];

export const howItWorksData = [
    {
        icon: <CreditCard className="h-8 w-8 text-blue-600" />,
        title: "1. Sign Up Effortlessly",
        description: "Register securely and set up your account in just a few minutes.",
    },
    {
        icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
        title: "2. Track Your Expenses",
        description: "Keep an eye on your spending with real-time transaction tracking.",
    },
    {
        icon: <PieChart className="h-8 w-8 text-blue-600" />,
        title: "3. Gain Financial Insights",
        description: "Use AI-powered analytics to understand and improve your financial habits.",
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
        title: "4. Secure & Optimize",
        description: "Ensure safe transactions while optimizing your budget with smart recommendations.",
    },
];

export const testimonialsData = [
    {
        name: "Sophia Martinez",
        role: "Independent Consultant",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        quote:
            "FINMAN has completely changed the way I handle my business finances. The AI-powered insights have uncovered cost-saving strategies I never considered before.",
    },
    {
        name: "Daniel Wong",
        role: "Entrepreneur",
        image: "https://randomuser.me/api/portraits/men/61.jpg",
        quote:
            "The smart receipt scanner has been a game-changer. I no longer waste time on manual expense tracking and can focus more on growing my business.",
    },
    {
        name: "Olivia Carter",
        role: "Wealth Management Specialist",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
        quote:
            "I always recommend FINMAN to my clients. Its multi-currency support and advanced analytics make it an essential tool for global investors.",
    },
];
