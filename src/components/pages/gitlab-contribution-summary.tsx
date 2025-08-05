import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';

const ProjectContributionsTreemap = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Replace with actual API call in production
    const fetchData = async () => {
      try {
        // const response = await fetch('/api/gitlab/users/username/contributions/summary');
        // const result = await response.json();
        
        // Sample data
        const sampleData = {
          projects: {
            "123": {
              name: "Project A",
              contributions: 45,
              lastUpdated: "2025-03-15T14:30:00Z"
            },
            "456": {
              name: "Project B",
              contributions: 78,
              lastUpdated: "2025-03-24T09:45:00Z"
            },
            "789": {
              name: "Project C",
              contributions: 12,
              lastUpdated: "2025-03-01T10:20:00Z"
            },
            "101": {
              name: "Project D",
              contributions: 34,
              lastUpdated: "2025-03-20T16:15:00Z"
            },
            "112": {
              name: "Project E",
              contributions: 56,
              lastUpdated: "2025-03-22T11:30:00Z"
            }
          }
        };
        
        // Process the data for the treemap
        const processedData = {
          name: 'Projects',
          children: Object.entries(sampleData.projects).map(([id, project]) => {
            const lastUpdatedDate = new Date(project.lastUpdated);
            const now = new Date();
            const daysSinceUpdate = Math.floor((now - lastUpdatedDate) / (1000 * 60 * 60 * 24));
            
            // Freshness score (0-100): 100 means updated today, 0 means 30+ days ago
            const freshness = Math.max(0, 100 - (daysSinceUpdate * 3.33));
            
            return {
              id,
              name: project.name,
              size: project.contributions,
              freshness: freshness,
              lastUpdated: project.lastUpdated
            };
          })
        };
        
        setData(processedData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load contribution data');
        setLoading(false);
        console.error(err)
      }
    };

    fetchData();
  }, []);

  // Color generator based on freshness (0-100)
  const getColor = (freshness) => {
    const intensity = Math.min(255, Math.floor(freshness * 2.55));
    return `rgb(0, ${intensity}, 255)`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const project = payload[0].payload;
      return (
        <div className="bg-white p-4 border rounded shadow">
          <p className="font-bold">{project.name}</p>
          <p>Contributions: {project.size}</p>
          <p>Last Updated: {formatDate(project.lastUpdated)}</p>
        </div>
      );
    }
    return null;
  };

  const CustomTreemapContent = ({ root, depth, x, y, width, height, index, payload, colors, rank, name, freshness }) => {
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: getColor(freshness),
            stroke: '#fff',
            strokeWidth: 2,
            strokeOpacity: 1,
          }}
        />
        {width > 40 && height > 40 ? (
          <text
            x={x + width / 2}
            y={y + height / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fff"
            className="font-medium"
          >
            {name}
          </text>
        ) : null}
      </g>
    );
  };

  if (loading) return (
    <Card className="w-full">
      <CardContent className="flex justify-center items-center h-64">
        <p>Loading...</p>
      </CardContent>
    </Card>
  );

  if (error) return (
    <Card className="w-full">
      <CardContent>
        <p className="text-red-500">{error}</p>
      </CardContent>
    </Card>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Project Contributions Treemap</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              data={data.children}
              dataKey="size"
              aspectRatio={4/3}
              stroke="#fff"
              fill="#8884d8"
              content={<CustomTreemapContent />}
            >
              <Tooltip content={<CustomTooltip />} />
            </Treemap>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectContributionsTreemap;