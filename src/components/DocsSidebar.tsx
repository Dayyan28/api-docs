import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { getNavigationByType } from '@/config/navigation';

export interface DocsSidebarProps {
  docType: string;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

interface NavItem {
  id: string;
  title: string;
  children?: NavItem[];
}

export const DocsSidebar = ({ docType, activeSection, onSectionClick }: DocsSidebarProps) => {
  const [expanded, setExpanded] = useState<string[]>(['overview']);
  const navigation = getNavigationByType(docType);

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

  const renderNavItems = (items: NavItem[], level = 0) => {
    return items.map(item => (
      <div key={item.id} className="mb-1">
        {item.children ? (
          <div>
            <button
              onClick={() => toggleSection(item.id)}
              className={`flex items-center w-full text-left px-4 py-2 text-sm transition-colors ${
                expanded.includes(item.id)
                  ? 'text-primary-dark-teal font-medium'
                  : 'text-gray-600 hover:text-primary-dark-teal'
              }`}
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
            className={`w-full text-left px-4 py-2 text-sm transition-colors rounded-md ${
              activeSection === item.id 
                ? 'text-primary-orange bg-secondary-cream font-medium'
                : 'text-gray-600 hover:text-primary-dark-teal'
            }`}
          >
            {item.title}
          </button>
        )}
      </div>
    ));
  };

  return (
    <nav className="w-64 h-screen overflow-y-auto px-4 py-6 border-r border-gray-200 bg-white">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-primary-dark-teal mb-1">
          {docType.toUpperCase()} Documentation
        </h1>
        <p className="text-sm text-gray-600">v1.0.0</p>
      </div>
      {renderNavItems(navigation)}
    </nav>
  );
};