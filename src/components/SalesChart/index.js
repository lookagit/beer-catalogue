import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// store
import useProductsStore from '../../store';

// style
import './SalesChart.css';

const SalesChart = () => {
    const chartRef = useRef(null);
    const salesByBrand = useProductsStore(state => state.salesByBrand);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();  // Destroy the existing chart before creating a new one
        }

        const sortedBrands = Object.entries(salesByBrand)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([brand, totalSales]) => ({ brand, totalSales }));

        const chartData = {
            labels: sortedBrands.map(item => item.brand),
            datasets: [{
                label: 'Sales by brand',
                data: sortedBrands.map(item => item.totalSales),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        };

        const chartOptions = {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        };

        const ctx = document.getElementById('myChart').getContext('2d');
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: chartOptions
        });

        return () => {
            chartRef.current.destroy();
        };
    }, []);

    return (
      <div className="chart-container">
        <canvas id="myChart"></canvas>
      </div>
    );
};

export default SalesChart;
