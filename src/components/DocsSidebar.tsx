
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Search, Menu, X } from 'lucide-react';
import { getNavigationByType } from '@/config/navigation';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export interface DocsSidebarProps {
  docType: string;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isSidebarOpen?: boolean;
  toggleSidebar?: () => void;
}

interface NavItem {
  id: string;
  title: string;
  children?: NavItem[];
}

export const DocsSidebar = ({ 
  docType, 
  activeSection, 
  onSectionClick,
  isSidebarOpen = true,
  toggleSidebar
}: DocsSidebarProps) => {
  const [expanded, setExpanded] = useState<string[]>(['overview']);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = getNavigationByType(docType);
  const isMobile = useIsMobile();

  useEffect(() => {
    const activeParent = navigation.find(section => 
      section.children?.some(child => child.id === activeSection)
    );
    if (activeParent && !expanded.includes(activeParent.id)) {
      setExpanded(prev => [...prev, activeParent.id]);
    }
  }, [activeSection, navigation]);

  const toggleSection = (sectionId: string) => {
    setExpanded(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filterItems = (items: NavItem[]): NavItem[] => {
    if (!searchQuery) return items;

    return items.reduce<NavItem[]>((acc, item) => {
      if (item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        acc.push(item);
      } else if (item.children) {
        const filteredChildren = filterItems(item.children);
        if (filteredChildren.length > 0) {
          acc.push({ ...item, children: filteredChildren });
        }
      }
      return acc;
    }, []);
  };

  const renderNavItems = (items: NavItem[], level = 0) => {
    const filteredItems = filterItems(items);

    return filteredItems.map(item => (
      <div key={item.id} className="mb-1">
        {item.children ? (
          <div>
            <button
              onClick={() => toggleSection(item.id)}
              className={cn(
                "flex items-center w-full text-left px-4 py-2 text-sm transition-colors rounded-md",
                expanded.includes(item.id)
                  ? "text-primary-dark-teal bg-gray-100 font-medium"
                  : "text-gray-600 hover:text-primary-dark-teal hover:bg-gray-50"
              )}
            >
              {expanded.includes(item.id) ? (
                <ChevronDown className="w-4 h-4 mr-2" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2" />
              )}
              <span className="font-medium">{item.title}</span>
            </button>
            {expanded.includes(item.id) && (
              <div className="ml-4">
                {renderNavItems(item.children, level + 1)}
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => onSectionClick(item.id)}
            className={cn(
              "w-full text-left px-4 py-2 text-sm transition-colors rounded-md",
              activeSection === item.id 
                ? "bg-primary-orange/10 text-primary-orange font-medium"
                : "text-gray-600 hover:text-primary-orange hover:bg-primary-orange/5"
            )}
          >
            {item.title}
          </button>
        )}
      </div>
    ));
  };

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed bottom-4 right-4 z-50 p-4 bg-primary-dark-teal text-white rounded-full shadow-lg"
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      )}
      
      <aside className={cn(
        "docs-sidebar transition-all duration-300 ease-in-out",
        isMobile && !isSidebarOpen ? "-translate-x-full fixed" : "translate-x-0",
        isMobile ? "fixed left-0 top-0 z-40" : ""
      )}>
        <div className="px-4 py-6">
          <div className="mb-8">
            <h1 className="text-xl font-bold text-primary-dark-teal mb-1">
              {docType.toUpperCase()} Documentation
            </h1>
            <p className="text-sm text-gray-600">v1.0.0</p>
          </div>

          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-gray-50"
              />
            </div>
          </div>

          <div className="overflow-y-auto">
            {renderNavItems(navigation)}
          </div>
        </div>
      </aside>
    </>
  );
};
