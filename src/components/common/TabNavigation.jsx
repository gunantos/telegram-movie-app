import React from 'react'

const TabNavigation = ({ tabs = [], activeTab, onTabChange }) => {
  return (
    <nav className="tab-navigation" role="tablist" aria-label="Video categories">
      {tabs.map(tab => (
        <button
          key={tab.key}
          role="tab"
          aria-selected={activeTab === tab.key}
          className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
          onClick={() => onTabChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}

export default TabNavigation
