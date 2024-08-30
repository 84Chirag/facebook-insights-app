// src/components/PageInsights.js

import React, { useState } from 'react';
import axios from 'axios';

function PageInsights({ accessToken, pageId }) {
  const [insights, setInsights] = useState(null);

  const fetchInsights = () => {
    axios.post('/api/page-insights', {
      accessToken,
      pageId,
    })
    .then(res => {
      setInsights(res.data);
    })
    .catch(err => {
      console.error('Error fetching page insights:', err);
    });
  };

  return (
    <div className="page-insights">
      <button onClick={fetchInsights} className="fetch-insights-button">
        Fetch Page Insights
      </button>
      {insights && (
        <div className="insights-data">
          <h3>Page Insights</h3>
          <ul>
            {insights.data.map((insight, index) => (
              <li key={index}>
                <strong>{insight.title}:</strong> {insight.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PageInsights;
