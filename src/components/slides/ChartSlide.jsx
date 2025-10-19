import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useState, useEffect } from 'react';

const ChartSlide = ({ slide }) => {
  const [animatedData, setAnimatedData] = useState([]);
  const chartData = slide.chartData.data;

  useEffect(() => {
    chartData.forEach((item, index) => {
      setTimeout(() => {
        setAnimatedData(prev => [...prev, item]);
      }, index * 40);
    });
  }, []);

  const getBarColor = (value) => {
    if (value >= 70) return '#1976d2';
    if (value >= 50) return '#42a5f5';
    if (value >= 40) return '#90caf9';
    return '#ef5350';
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: 'white',
          padding: '1rem 1.5rem',
          border: '3px solid #1976d2',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
        }}>
          <p style={{
            fontWeight: '700',
            color: '#0d47a1',
            marginBottom: '0.5rem',
            fontSize: '1.1rem'
          }}>
            {payload[0].payload.department}
          </p>
          <p style={{
            color: getBarColor(payload[0].value),
            fontSize: '1.3rem',
            fontWeight: '700'
          }}>
            {payload[0].value}% Compliance
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-slide">
      <div className="slide-content">
        <motion.div
          className="chart-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{slide.title}</h2>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={animatedData}
                margin={{ top: 10, right: 30, left: 30, bottom: 120 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" strokeWidth={1.5} />
                <XAxis
                  dataKey="department"
                  angle={-45}
                  textAnchor="end"
                  height={140}
                  interval={0}
                  tick={{ fontSize: 12, fontWeight: '500', fill: '#37474f' }}
                />
                <YAxis
                  label={{
                    value: 'Compliance Rate (%)',
                    angle: -90,
                    position: 'insideLeft',
                    style: { fontSize: '15px', fontWeight: '700', fill: '#0d47a1' }
                  }}
                  domain={[0, 100]}
                  tick={{ fontSize: 13, fontWeight: '500', fill: '#37474f' }}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(25, 118, 210, 0.1)' }} />
                <Legend
                  wrapperStyle={{ fontSize: '15px', fontWeight: '600', paddingTop: '10px' }}
                  iconSize={18}
                />
                <Bar
                  dataKey="compliance"
                  name="Compliance Rate %"
                  animationDuration={1500}
                  animationBegin={0}
                  radius={[10, 10, 0, 0]}
                >
                  {animatedData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getBarColor(entry.compliance)}
                      stroke="#0d47a1"
                      strokeWidth={2}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <motion.div
            className="chart-legend"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="legend-item">
              <div className="legend-color" style={{ background: '#1976d2' }}></div>
              <span className="legend-label">≥70% (Excellent)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ background: '#42a5f5' }}></div>
              <span className="legend-label">50-69% (Good)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ background: '#90caf9' }}></div>
              <span className="legend-label">40-49% (Needs Improvement)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ background: '#ef5350' }}></div>
              <span className="legend-label">&lt;40% (Critical)</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChartSlide;
