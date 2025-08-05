'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function GitContributions() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    // Generate sample contribution data
    const generateData = () => {
      const data = [];
      const now = new Date();
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(now.getFullYear() - 1);
      
      const currentDate = new Date(oneYearAgo);
      
      while (currentDate <= now) {
        // Generate random count with higher probability on weekdays
        // and occasional spikes for realistic patterns
        const dayOfWeek = currentDate.getDay();
        let count = 0;
        
        // Weekend has less activity
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          count = Math.random() > 0.7 ? Math.floor(Math.random() * 3) : 0;
        } else {
          // Weekday has more activity
          const rand = Math.random();
          if (rand > 0.9) {
            count = Math.floor(Math.random() * 10) + 5; // Spike
          } else if (rand > 0.4) {
            count = Math.floor(Math.random() * 5) + 1; // Normal activity
          }
        }
        
        // Add the day
        data.push({
          date: currentDate.toISOString().split('T')[0],
          count,
          dayOfWeek: currentDate.getDay()
        });
        
        // Go to next day
        currentDate.setDate(currentDate.getDate() + 1);
      }
      
      return data;
    };
    
    setContributions(generateData());
  }, []);

  // Group contributions by week
  function getContributionMatrix() {
    const weeks: any[][] = [];
    let currentWeek: never[] = [];
    
    contributions.forEach((day, index) => {
      if (day.dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      
      currentWeek.push(day);
      
      // Last day
      if (index === contributions.length - 1) {
        weeks.push(currentWeek);
      }
    });
    
    return weeks;
  }
  
  function getColorClass(count: number) {
    if (count === 0) return 'bg-gray-100';
    if (count < 3) return 'bg-green-200';
    if (count < 6) return 'bg-green-400';
    if (count < 10) return 'bg-green-600';
    return 'bg-green-800';
  }
  
  const contributionWeeks = contributions.length > 0 ? getContributionMatrix() : [];
  
  // Get month labels for the visualization
  function getMonthLabels() {
    const months: { name: string; index: number; year: number; position: string; }[] = [];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    if (contributionWeeks.length > 0) {
      const flatMatrix = contributionWeeks.flat();
      flatMatrix.forEach((day) => {
        const date = new Date(day.date);
        const monthIndex = date.getMonth();
        const monthName = monthNames[monthIndex];
        
        if (!months.find(m => m.name === monthName && m.year === date.getFullYear())) {
          months.push({ 
            name: monthName, 
            index: monthIndex,
            year: date.getFullYear(),
            position: date.getDate() <= 7 ? 'start' : 'middle'
          });
        }
      });
    }
    
    // Filter to only show some month labels to avoid overcrowding
    return months.filter(month => month.position === 'start');
  }
  
  const monthLabels = getMonthLabels();
  
  // Get total contributions
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);
  
  // Get contribution stats
  const getContributionStats = () => {
    if (contributions.length === 0) return {};
    
    // Get longest streak
    let currentStreak = 0;
    let longestStreak = 0;
    let streakDates: any[] = [];
    let longestStreakDates: any[] = [];
    
    contributions.forEach((day) => {
      if (day.count > 0) {
        currentStreak++;
        streakDates.push(day.date);
      } else {
        if (currentStreak > longestStreak) {
          longestStreak = currentStreak;
          longestStreakDates = [...streakDates];
        }
        currentStreak = 0;
        streakDates = [];
      }
    });
    
    // Check if the current streak is the longest
    if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
      longestStreakDates = [...streakDates];
    }
    
    // Get highest contribution day
    const highestDay = contributions.reduce((max, day) => 
      day.count > max.count ? day : max, { count: 0 });
    
    return {
      longestStreak,
      highestDay,
      longestStreakDates
    };
  };
  
  const stats = getContributionStats();
  
  // Format date for display
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>GitLab Contributions</title>
        <meta name="description" content="View your GitLab contributions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">GitLab Contributions</h1>
        
        {contributions.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-700">Total Contributions</h3>
                <p className="text-3xl font-bold text-indigo-600">{totalContributions}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-700">Longest Streak</h3>
                <p className="text-3xl font-bold text-indigo-600">{stats.longestStreak} days</p>
                {stats.longestStreakDates?.length > 0 && (
                  <p className="text-sm text-gray-500 mt-1">
                    {formatDate(stats.longestStreakDates[0])} - {formatDate(stats.longestStreakDates[stats.longestStreakDates.length - 1])}
                  </p>
                )}
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-700">Most Active Day</h3>
                <p className="text-3xl font-bold text-indigo-600">{stats.highestDay?.count || 0} contributions</p>
                {stats.highestDay?.date && (
                  <p className="text-sm text-gray-500 mt-1">{formatDate(stats.highestDay.date)}</p>
                )}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Annual Activity</h2>
              
              <div className="flex mb-2 text-sm text-gray-500">
                <div className="w-10"></div>
                <div className="flex-1 flex justify-between">
                  {monthLabels.map((month, i) => (
                    <div key={i} className="px-2">{month.name}</div>
                  ))}
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col mr-2 text-xs text-gray-500 justify-between py-1">
                  <div className="h-3">Mon</div>
                  <div className="h-3">Wed</div>
                  <div className="h-3">Fri</div>
                </div>
                
                <div className="flex">
                  {contributionWeeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col mr-1">
                      {[0, 1, 2, 3, 4, 5, 6].map(dayOfWeek => {
                        const day = week.find((d: { dayOfWeek: number; }) => d.dayOfWeek === dayOfWeek);
                        return (
                          <div
                            key={dayOfWeek}
                            className={`w-3 h-3 m-0.5 rounded-sm ${day ? getColorClass(day.count) : 'bg-gray-100'}`}
                            title={day ? `${day.date}: ${day.count} contributions` : "No data"}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center mt-4 text-xs text-gray-600">
                <span className="mr-2">Less</span>
                <div className="w-3 h-3 bg-gray-100 rounded-sm mx-0.5"></div>
                <div className="w-3 h-3 bg-green-200 rounded-sm mx-0.5"></div>
                <div className="w-3 h-3 bg-green-400 rounded-sm mx-0.5"></div>
                <div className="w-3 h-3 bg-green-600 rounded-sm mx-0.5"></div>
                <div className="w-3 h-3 bg-green-800 rounded-sm mx-0.5"></div>
                <span className="ml-2">More</span>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}