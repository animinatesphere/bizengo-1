import React from 'react';
import Icon, { type LucideIconName } from '@/components/AppIcon';

// --- START OF TYPESCRIPT CONVERSION ---

// Define the allowed IDs for tabs
type TabId = 'products' | 'about' | 'reviews' | 'contact' | string;

interface Tab {
    id: TabId;
    label: string;
    count?: number;
}

interface TabNavigationProps {
    activeTab: TabId;
    onTabChange: (tabId: TabId) => void;
    tabs: Tab[];
}

// --- END OF TYPESCRIPT CONVERSION ---

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange, tabs }) => {
    // Map Tab IDs to Lucide Icon names for type safety
    const tabIcons: Record<TabId, LucideIconName> = {
        products: 'Package',
        about: 'Info',
        reviews: 'Star',
        contact: 'MessageCircle'
    };

    return (
        <div className="sticky top-0 bg-white border-b border-border z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex space-x-8 overflow-x-auto scrollbar-hide">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`
                flex items-center space-x-2 py-4 px-2 border-b-2 whitespace-nowrap
                transition-colors duration-150 ease-out
                ${activeTab === tab.id
                                    ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border'
                                }
              `}
                        >
                            <Icon
                                name={tabIcons[tab.id]}
                                size={18}
                                className={activeTab === tab.id ? 'text-primary' : 'text-text-secondary'}
                            />
                            <span className="font-medium">{tab.label}</span>
                            {tab.count !== undefined && (
                                <span className={`
                  px-2 py-0.5 rounded-full text-xs font-medium
                  ${activeTab === tab.id
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-muted text-text-secondary'
                                    }
                `}>
                                    {tab.count}
                                </span>
                            )}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default TabNavigation;