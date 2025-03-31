import { useState } from 'react';

export default function TeenSection() {
  const [activeTab, setActiveTab] = useState('health');

  return (
    <div id="teen-section" className="teen-section">
      <div className="teen-badge">For Young Mothers</div>
      <h2>Special Support for Moms Under 20</h2>
      <p>Your body and circumstances are unique. These resources are tailored just for you.</p>
      
      <div className="teen-tabs">
        <button 
          className={`teen-tab ${activeTab === 'health' ? 'active' : ''}`}
          onClick={() => setActiveTab('health')}
        >
          Health
        </button>
        <button 
          className={`teen-tab ${activeTab === 'school' ? 'active' : ''}`}
          onClick={() => setActiveTab('school')}
        >
          School/Work
        </button>
        <button 
          className={`teen-tab ${activeTab === 'rights' ? 'active' : ''}`}
          onClick={() => setActiveTab('rights')}
        >
          Your Rights
        </button>
        <button 
          className={`teen-tab ${activeTab === 'stories' ? 'active' : ''}`}
          onClick={() => setActiveTab('stories')}
        >
          Real Stories
        </button>
      </div>
      
      {activeTab === 'health' && (
        <div className="tab-content active">
          <h3>Your Changing Body</h3>
          <p>Teen bodies often heal differently after pregnancy. Here's what to expect:</p>
          <ul>
            <li><strong>Healing timeline:</strong> You might bleed longer than adult moms</li>
            <li><strong>Nutrition needs:</strong> Extra calories for your growing body</li>
            <li><strong>Birth control:</strong> Safe options that won't affect breastfeeding</li>
          </ul>
          <button className="btn btn-primary" style={{ marginTop: '20px' }}>Find a Teen-Friendly Clinic</button>
        </div>
      )}
      
      {activeTab === 'school' && (
        <div className="tab-content active">
          <h3>Staying in School</h3>
          <p>You have the right to continue your education:</p>
          <ul>
            <li>Title IX protects pregnant students in the US</li>
            <li>Online school options with flexible schedules</li>
            <li>Childcare resources for student parents</li>
          </ul>
        </div>
      )}
      
      {activeTab === 'rights' && (
        <div className="tab-content active">
          <h3>Know Your Rights</h3>
          <ul>
            <li>You can't be kicked out of school for being pregnant</li>
            <li>Confidential medical care in all 50 states</li>
            <li>Government assistance programs you qualify for</li>
          </ul>
        </div>
      )}
      
      {activeTab === 'stories' && (
        <div className="tab-content active">
          <h3>You're Not Alone</h3>
          <p>"I had my daughter at 16 and still graduated top of my class. It was hard, but possible." - Jamila, 19</p>
          <p>"The nurse at my school clinic helped me find free prenatal care." - Sofia, 17</p>
        </div>
      )}
    </div>
  );
}