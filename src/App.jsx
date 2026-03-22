import React, { useState, useMemo } from 'react';
import { Home, BarChart2, PlusCircle, User, DollarSign, BarChart, TrendingUp, PieChart, Calendar, MoreVertical, ChevronDown, ChevronRight, Settings, Bell, CreditCard, Folder, Share2, Edit3, Trash2, Copy, Save, X, Eye, FileText, Download, Building, Percent, Landmark, Clock, ArrowRight, Layers, Columns, List, Plus, Search } from 'lucide-react';

// --- Mock Data ---
const mockProperties = [
    { id: 1, name: 'Maple Creek Residence', strategy: 'Long-term Rent', financing: 'Mortgage (75%)', cashFlow: 1200, invested: 150000, purchasePrice: 600000, roi: 9.6, equity: 250000, payback: 8.2, breakeven: 78, currency: 'USD', expenses: { mortgage: 2200, insurance: 150, taxes: 350 }, income: { rent: 4000 } },
    { id: 2, name: 'Oceanview Villa', strategy: 'Short-term (MIS)', financing: 'Cash', cashFlow: 3500, invested: 800000, purchasePrice: 800000, roi: 5.25, equity: 800000, payback: 19.0, breakeven: 65, currency: 'USD', expenses: { cleaning: 500, utilities: 400, management: 600 }, income: { rent: 5000 } },
    { id: 3, name: 'Downtown Loft', strategy: 'Capitalization', financing: 'Mortgage (60%)', cashFlow: 800, invested: 90000, purchasePrice: 225000, roi: 10.7, equity: 180000, payback: 9.4, breakeven: 70, currency: 'EUR', expenses: { mortgage: 1500, insurance: 100, taxes: 250 }, income: { rent: 2650 } },
    { id: 4, name: 'Suburban Family Home', strategy: 'Long-term Rent', financing: 'Installment', cashFlow: 950, invested: 120000, purchasePrice: 400000, roi: 9.5, equity: 210000, payback: 10.5, breakeven: 75, currency: 'USD', expenses: { installment: 1800, insurance: 120, taxes: 300 }, income: { rent: 3170 } },
];

const mockEvents = [
    { date: '2025-07-01', description: 'Mortgage Payment Due - Maple Creek', recurring: true },
    { date: '2025-07-15', description: 'Insurance Renewal - Oceanview Villa', recurring: false },
    { date: '2025-07-20', description: 'Tax Deadline - All Properties', recurring: true },
    { date: '2025-08-01', description: 'Custom Reminder: Check plumbing at Loft', recurring: false },
];

const blankProperty = {
    id: `new-${Date.now()}`,
    name: 'New Property Calculation',
    strategy: 'Long-term Rent',
    financing: 'Mortgage',
    cashFlow: 0,
    invested: 0,
    purchasePrice: 0,
    roi: 0,
    equity: 0,
    payback: 0,
    breakeven: 0,
    currency: 'USD',
    expenses: {},
    income: {},
    isNew: true
};


// --- Main App Component ---
const App = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [pageState, setPageState] = useState(null);
    const [userRole] = useState('broker'); // 'user' or 'broker'
    const [theme, setTheme] = useState('light');

    const navigateTo = (page, state = null) => {
        setCurrentPage(page);
        setPageState(state);
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const mainContainerClass = theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800';

    const renderPage = () => {
        switch (currentPage) {
            case 'propertyDetail':
                return <PropertyDetailPage property={pageState} onNavigate={navigateTo} />;
            case 'addProperty':
                return <PropertyDetailPage property={blankProperty} onNavigate={navigateTo} isNew={true} />;
            case 'estimate':
                return <EstimatePage onNavigate={navigateTo} />;
            case 'profile':
                return <ProfilePage userRole={userRole} theme={theme} onToggleTheme={toggleTheme} />;
            case 'dashboard':
            default:
                return <Dashboard onNavigate={navigateTo} />;
        }
    };

    return (
        <div className={`min-h-screen font-sans transition-colors duration-300 ${mainContainerClass}`}>
            <Header onNavigate={navigateTo} userRole={userRole} />
            <main className="p-4 sm:p-6 lg:p-8">{renderPage()}</main>
        </div>
    );
};

// --- Header Component ---
const Header = ({ onNavigate }) => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <Landmark className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-xl font-bold text-gray-800 dark:text-white">PropFolio</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        <button onClick={() => onNavigate('dashboard')} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Home className="h-5 w-5" />
                            <span>Dashboard</span>
                        </button>
                        <button onClick={() => onNavigate('estimate')} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Layers className="h-5 w-5" />
                            <span>Estimate</span>
                        </button>
                        <button onClick={() => onNavigate('addProperty')} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <PlusCircle className="h-5 w-5" />
                            <span>Add Property</span>
                        </button>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <div className="relative group">
                            <img className="h-10 w-10 rounded-full object-cover cursor-pointer" src="https://placehold.co/100x100/6366f1/white?text=U" alt="User Avatar" />
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <button onClick={() => onNavigate('profile')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Profile</button>
                                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

// --- Page Components ---

// 1. Dashboard Page (No significant changes)
const Dashboard = ({ onNavigate }) => {
    const [expandedRow, setExpandedRow] = useState(null);

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <MetricCard title="Total Capital" value="$1,540,000" icon={DollarSign} />
                <MetricCard title="Equity" value="$1,440,000" icon={Landmark} />
                <MetricCard title="Monthly Cash Flow" value="$6,450" icon={TrendingUp} />
                <MetricCard title="Passive Income" value="$5,200" icon={Home} />
                <MetricCard title="Avg. ROI" value="8.9%" icon={Percent} />
                <MetricCard title="Next Upcoming Event" value="July 1st" icon={Calendar} subtitle="Mortgage Payment" />
            </section>
            <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h2 className="text-xl font-semibold">Portfolio Overview</h2>
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder="Filter..." className="p-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 text-sm w-48" />
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors text-sm flex items-center gap-2"><Download size={16} /> Export</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b dark:border-gray-700">
                        <tr>
                            <th className="p-3"></th>
                            <th className="p-3 text-sm font-semibold tracking-wide">Property Name</th>
                            <th className="p-3 text-sm font-semibold tracking-wide">Strategy</th>
                            <th className="p-3 text-sm font-semibold tracking-wide">Financing</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-right">Cash Flow</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-right">ROI</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-right">Equity</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mockProperties.map(prop => (
                            <React.Fragment key={prop.id}>
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                    <td className="p-3">
                                        <button onClick={() => toggleRow(prop.id)} className="text-indigo-500">{expandedRow === prop.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}</button>
                                    </td>
                                    <td className="p-3">
                                        <button onClick={() => onNavigate('propertyDetail', prop)} className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">{prop.name}</button>
                                    </td>
                                    <td className="p-3">{prop.strategy}</td>
                                    <td className="p-3">{prop.financing}</td>
                                    <td className="p-3 text-right text-green-600 dark:text-green-400 font-semibold">${prop.cashFlow.toLocaleString()}/mo</td>
                                    <td className="p-3 text-right">{prop.roi}%</td>
                                    <td className="p-3 text-right">${prop.equity.toLocaleString()}</td>
                                </tr>
                                {expandedRow === prop.id && (
                                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                                        <td colSpan="7" className="p-4 text-sm">
                                            Details for {prop.name}...
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

// 2. Detailed Property Page (now with view toggle)
const PropertyDetailPage = ({ property, onNavigate, isNew = false }) => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [viewMode, setViewMode] = useState('tabs'); // 'tabs' or 'onepage'
    const tabs = ['Overview', 'Expenses', 'Income', 'Financing Plan', 'Timeline', 'Sets'];

    const propertyContent = (
        <div className="pt-6">
            {viewMode === 'tabs' ? (
                <>
                    {activeTab === 'Overview' && <PropertyOverviewTab property={property} />}
                    {activeTab === 'Expenses' && <PropertyExpensesTab />}
                    {activeTab === 'Income' && <PropertyIncomeTab />}
                    {activeTab === 'Financing Plan' && <PropertyFinancingTab />}
                    {activeTab === 'Timeline' && <PropertyTimelineTab />}
                    {activeTab === 'Sets' && <PropertySetsTab />}
                </>
            ) : (
                <div className="space-y-10">
                    <PropertyOverviewTab property={property} />
                    <PropertyExpensesTab />
                    <PropertyIncomeTab />
                    <PropertyFinancingTab />
                    <PropertyTimelineTab />
                    <PropertySetsTab />
                </div>
            )}
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    <button onClick={() => onNavigate('dashboard')} className="hover:underline">Dashboard</button>
                    <span className="mx-2">&gt;</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{property.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                    {isNew ? (
                        <button className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center gap-2"><Save size={16} /> Save Property</button>
                    ) : (
                        <>
                            <button className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center gap-2"><Save size={16} /> Save</button>
                            <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"><Copy size={16} /> Clone</button>
                            <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center gap-2"><Trash2 size={16} /> Delete</button>
                        </>
                    )}
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                    <nav className="-mb-px flex space-x-6 overflow-x-auto">
                        {viewMode === 'tabs' && tabs.map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)}
                                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300'}`}>
                                {tab}
                            </button>
                        ))}
                        {viewMode === 'onepage' && <h2 className="text-xl font-semibold py-3">Property Details</h2>}
                    </nav>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">View:</span>
                        <button onClick={() => setViewMode('tabs')} className={`p-2 rounded-md ${viewMode==='tabs' ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}><Columns size={16}/></button>
                        <button onClick={() => setViewMode('onepage')} className={`p-2 rounded-md ${viewMode==='onepage' ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}><List size={16}/></button>
                    </div>
                </div>
                {propertyContent}
            </div>

            <ComparisonTool currentProperty={property} allProperties={mockProperties} />
        </div>
    );
};

// 3. Estimate Page
const EstimatePage = ({ onNavigate }) => {
    const [property, setProperty] = useState(blankProperty);

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">New Estimate & Comparison</h1>
                <button className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center gap-2">
                    <Save size={16} /> Save as New Property
                </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4 border-b dark:border-gray-700 pb-4">Calculation Details</h2>
                <div className="space-y-10 pt-4">
                    <PropertyOverviewTab property={property} />
                    <PropertyExpensesTab />
                    <PropertyIncomeTab />
                    <PropertyFinancingTab />
                </div>
            </div>

            <ComparisonTool currentProperty={property} allProperties={mockProperties} />
        </div>
    );
};

// 4. General Profile Page (No changes)
const ProfilePage = ({ userRole, theme, onToggleTheme }) => {
    const [activeTab, setActiveTab] = useState('Account Info');
    const tabs = ['Account Info', 'Preferences', 'Subscriptions', 'Saved Calculations'];
    if (userRole === 'broker') tabs.push('Portfolios');

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <nav className="-mb-px flex space-x-6 overflow-x-auto">
                        {tabs.map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>{tab}</button>
                        ))}
                    </nav>
                </div>
                <div className="pt-6">
                    {activeTab === 'Account Info' && <ProfileAccountInfoTab />}
                    {activeTab === 'Preferences' && <ProfilePreferencesTab theme={theme} onToggleTheme={onToggleTheme} />}
                    {activeTab === 'Subscriptions' && <ProfileSubscriptionsTab />}
                    {activeTab === 'Saved Calculations' && <ProfileSavedCalculationsTab />}
                    {activeTab === 'Portfolios' && userRole === 'broker' && <ProfilePortfoliosTab />}
                </div>
            </div>
        </div>
    );
};

// --- Comparison Tool Component ---
const ComparisonTool = ({ currentProperty, allProperties }) => {
    const [comparedItems, setComparedItems] = useState([mockProperties[0], mockProperties[1]]);
    const [showAddModal, setShowAddModal] = useState(false);

    const addItem = (item) => {
        if (comparedItems.length < 5 && !comparedItems.find(i => i.id === item.id)) {
            setComparedItems([...comparedItems, item]);
        }
        setShowAddModal(false);
    };

    const removeItem = (id) => {
        setComparedItems(comparedItems.filter(item => item.id !== id));
    };

    const metrics = [
        { key: 'strategy', label: 'Strategy' },
        { key: 'purchasePrice', label: 'Purchase Price', format: 'currency' },
        { key: 'financing', label: 'Financing' },
        { key: 'cashFlow', label: 'Monthly Cash Flow', format: 'currency' },
        { key: 'roi', label: 'ROI', format: 'percent', highlight: 'max' },
        { key: 'equity', label: 'Equity', format: 'currency', highlight: 'max' },
        { key: 'payback', label: 'Payback Period', format: 'years', highlight: 'min' },
        { key: 'breakeven', label: 'Break-even Point', format: 'percent' },
    ];

    const highlightedValues = useMemo(() => {
        const highlights = {};
        metrics.forEach(metric => {
            if (metric.highlight) {
                const values = comparedItems.map(item => item[metric.key]).filter(v => typeof v === 'number');
                if (values.length > 1) {
                    if (metric.highlight === 'max') highlights[metric.key] = Math.max(...values);
                    if (metric.highlight === 'min') highlights[metric.key] = Math.min(...values);
                }
            }
        });
        return highlights;
    }, [comparedItems, metrics]);

    const formatValue = (value, format) => {
        if (format === 'currency') return `$${value.toLocaleString()}`;
        if (format === 'percent') return `${value}%`;
        if (format === 'years') return `${value} years`;
        return value;
    };

    return (
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-xl font-semibold">Comparison Tool</h2>
            {/* --- Comparison Selector --- */}
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex flex-wrap items-center gap-2">
                <button onClick={() => addItem(currentProperty)} className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Plus size={14} /> Add "{currentProperty.name}"
                </button>
                {comparedItems.map(item => (
                    <div key={item.id} className="bg-white dark:bg-gray-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm">
                        <span>{item.name}</span>
                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"><X size={14} /></button>
                    </div>
                ))}
                {comparedItems.length < 5 && (
                    <button onClick={() => setShowAddModal(true)} className="border border-dashed border-gray-400 dark:border-gray-500 text-gray-500 dark:text-gray-400 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Plus size={16} />
                    </button>
                )}
            </div>

            {/* --- Side-by-Side Table --- */}
            {comparedItems.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                        <tr className="border-b dark:border-gray-700">
                            <th className="p-3 text-sm font-semibold tracking-wide w-1/4">Metric</th>
                            {comparedItems.map(item => (
                                <th key={item.id} className="p-3 text-sm font-semibold tracking-wide">
                                    {item.name}
                                    <input type="text" placeholder="Add note..." className="mt-1 w-full text-xs p-1 rounded bg-gray-100 dark:bg-gray-700 border-none"/>
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {metrics.map(metric => (
                            <tr key={metric.key} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="p-3 font-medium text-sm">{metric.label}</td>
                                {comparedItems.map(item => (
                                    <td key={item.id} className={`p-3 text-sm ${highlightedValues[metric.key] === item[metric.key] ? 'bg-green-100 dark:bg-green-900/30 font-bold text-green-700 dark:text-green-300' : ''}`}>
                                        {formatValue(item[metric.key], metric.format)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                    <p>Add properties to the comparison to see a side-by-side analysis.</p>
                </div>
            )}

            {/* --- Visuals & Actions --- */}
            {comparedItems.length > 0 && (
                <div className="pt-4 space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        <ChartCard title="ROI Comparison" type="Bar" />
                        <ChartCard title="Cash Flow Trends" type="Line" />
                        <ChartCard title="Expense Composition" type="Stacked Bar" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm">Save Comparison</button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 text-sm flex items-center gap-2"><Download size={16}/>Download PDF/Excel</button>
                        <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 text-sm flex items-center gap-2"><Share2 size={16}/>Share Link</button>
                    </div>
                </div>
            )}

            {/* --- Add Item Modal --- */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg">
                        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Add to Comparison</h3>
                            <button onClick={() => setShowAddModal(false)}><X size={20} /></button>
                        </div>
                        <div className="p-4">
                            <div className="relative mb-4">
                                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input type="text" placeholder="Search properties or scenarios..." className="w-full p-2 pl-10 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600" />
                            </div>
                            <div className="max-h-64 overflow-y-auto space-y-2">
                                {allProperties.map(prop => (
                                    <button key={prop.id} onClick={() => addItem(prop)} className="w-full text-left p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between items-center" disabled={comparedItems.find(i=>i.id===prop.id)}>
                                        <span>{prop.name} <span className="text-xs text-gray-500">({prop.strategy})</span></span>
                                        {comparedItems.find(i=>i.id===prop.id) && <span className="text-xs font-semibold text-indigo-500">ADDED</span>}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};


// --- Helper, Sub, and Unchanged Components ---

const MetricCard = ({ title, value, icon: Icon, subtitle }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start justify-between">
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {subtitle && <p className="text-xs text-gray-400 dark:text-gray-500">{subtitle}</p>}
        </div>
        <div className="p-2 rounded-full bg-indigo-100 dark:bg-gray-700">
            <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        </div>
    </div>
);

const ChartCard = ({ title, type }) => (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <h3 className="font-semibold text-center mb-2">{title}</h3>
        <div className="bg-gray-100 dark:bg-gray-700 rounded h-40 flex items-center justify-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">{type} Chart</p>
        </div>
    </div>
);

const PropertyOverviewTab = ({ property }) => (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
        <div>
            <h3 className="text-lg font-semibold mb-4">Property Details</h3>
            <div className="space-y-4">
                <InputField label="Property Name" defaultValue={property.name} />
                <SelectField label="Strategy" options={['Long-term Rent', 'Short-term (MIS)', 'Capitalization']} defaultValue={property.strategy} />
                <InputField label="Purchase Price" defaultValue={property.purchasePrice?.toLocaleString()} addon="$" />
                <InputField label="Purchase Date" type="date" defaultValue="2022-01-15" />
                <SelectField label="Financing Type" options={['Cash', 'Mortgage', 'Installment Plan']} defaultValue={property.financing.split(' ')[0]} />
            </div>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-4">Auto-Calculated Metrics</h3>
            <div className="space-y-3">
                <MetricDisplay label="Monthly Cash Flow" value={`$${property.cashFlow.toLocaleString()}`} />
                <MetricDisplay label="ROI" value={`${property.roi}%`} />
                <MetricDisplay label="Current Equity" value={`$${property.equity.toLocaleString()}`} />
                <MetricDisplay label="Payback Period" value={`${property.payback} years`} />
            </div>
        </div>
    </div>
);

const PropertyExpensesTab = () => (<div><h3 className="text-lg font-semibold mb-4">Expense Tracking</h3>...</div>);
const PropertyIncomeTab = () => (<div><h3 className="text-lg font-semibold mb-4">Income & Projections</h3>...</div>);
const PropertyFinancingTab = () => (<div><h3 className="text-lg font-semibold mb-4">Financing Details</h3>...</div>);
const PropertyTimelineTab = () => (<div><h3 className="text-lg font-semibold mb-4">Property-Specific Events</h3>...</div>);
const PropertySetsTab = () => (<div><h3 className="text-lg font-semibold mb-4">Assign to Sets</h3>...</div>);
const MetricDisplay = ({ label, value }) => (<div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md"><p className="text-sm font-medium">{label}</p><p className="text-sm font-semibold">{value}</p></div>);
const ProfileAccountInfoTab = () => (<div>Account Info...</div>);
const ProfilePreferencesTab = ({theme, onToggleTheme}) => (<div>Preferences...Theme Toggle...</div>);
const ProfileSubscriptionsTab = () => (<div>Subscriptions...</div>);
const ProfileSavedCalculationsTab = () => (<div>Saved Calculations...</div>);
const ProfilePortfoliosTab = () => (<div>Portfolios for Brokers...</div>);
const InputField = ({ label, type = 'text', defaultValue, placeholder, addon }) => (<div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label><div className="flex"><input type={type} defaultValue={defaultValue} className="flex-1 block w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md" /></div></div>);
const SelectField = ({ label, options, defaultValue }) => (<div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label><select defaultValue={defaultValue} className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 dark:border-gray-600 dark:bg-gray-900 rounded-md">{options.map(opt => <option key={opt}>{opt}</option>)}</select></div>);

export default App;


