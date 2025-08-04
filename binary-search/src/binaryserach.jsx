import React, { useState, useEffect } from "react";

const Binaryvisual = () => {
    const [array, setArray] = useState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]);
    const [target, setTarget] = useState('');
    const [mid, setMid] = useState(null);
    const [low, setLow] = useState(null);
    const [high, setHigh] = useState(null);
    const [status, setStatus] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [foundIndex, setFoundIndex] = useState(null);
    const [searchComplete, setSearchComplete] = useState(false);

    const resetSearch = () => {
        setMid(null);
        setLow(null);
        setHigh(null);
        setStatus('');
        setIsSearching(false);
        setSearchHistory([]);
        setCurrentStep(0);
        setFoundIndex(null);
        setSearchComplete(false);
    };

    const generateNewArray = () => {
        const newArray = [];
        for (let i = 0; i < 16; i++) {
            newArray.push(Math.floor(Math.random() * 50) * 2 + 1); // Odd numbers only
        }
        newArray.sort((a, b) => a - b);
        setArray(newArray);
        resetSearch();
    };

    const binarySearch = async () => {
        if (!target || isSearching) return;
        
        resetSearch();
        setIsSearching(true);
        setStatus('Searching...');
        
        const targetNum = parseInt(target);
        let l = 0;
        let h = array.length - 1;
        const history = [];

        while (l <= h) {
            const m = Math.floor((l + h) / 2);
            
            history.push({
                low: l,
                high: h,
                mid: m,
                midValue: array[m],
                comparison: array[m] === targetNum ? 'equal' : array[m] < targetNum ? 'less' : 'greater'
            });

            if (array[m] === targetNum) {
                setFoundIndex(m);
                setStatus(` Found ${targetNum} at index ${m}!`);
                setSearchComplete(true);
                break;
            } else if (array[m] < targetNum) {
                l = m + 1;
            } else {
                h = m - 1;
            }
        }

        if (l > h) {
            setStatus(` ${targetNum} not found in the array`);
            setSearchComplete(true);
        }

        setSearchHistory(history);
        setIsSearching(false);
    };

    const nextStep = () => {
        if (currentStep < searchHistory.length) {
            const step = searchHistory[currentStep];
            setLow(step.low);
            setHigh(step.high);
            setMid(step.mid);
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            const step = searchHistory[currentStep - 2];
            if (step) {
                setLow(step.low);
                setHigh(step.high);
                setMid(step.mid);
            } else {
                setLow(null);
                setHigh(null);
                setMid(null);
            }
            setCurrentStep(currentStep - 1);
        }
    };

    const getCellStyle = (index) => {
        let baseClasses = "array-cell";
        
        if (index === foundIndex) {
            return `${baseClasses} found`;
        }
        if (index === mid) {
            return `${baseClasses} mid`;
        }
        if (index === low) {
            return `${baseClasses} low`;
        }
        if (index === high) {
            return `${baseClasses} high`;
        }
        if (low !== null && high !== null && index >= low && index <= high) {
            return `${baseClasses} range`;
        }
        
        return `${baseClasses} default`;
    };

    const getComparisonText = () => {
        if (currentStep > 0 && currentStep <= searchHistory.length) {
            const step = searchHistory[currentStep - 1];
            if (step.comparison === 'equal') {
                return `Target ${target} equals ${step.midValue} at index ${step.mid}`;
            } else if (step.comparison === 'less') {
                return `Target ${target} is less than ${step.midValue} at index ${step.mid}`;
            } else {
                return `Target ${target} is greater than ${step.midValue} at index ${step.mid}`;
            }
        }
        return '';
    };

    return (
        <div className="main-container">
            {/* Header */}
            <div className="header">
                <h1>Binary Search Visualizer</h1>
                <p>Step-by-step visualization of binary search algorithm</p>
            </div>

            {/* Controls */}
            <div className="controls">
                <div className="controls-content">
                    <div className="input-group">
                        <label>Target:</label>
                        <input
                            type="number"
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            placeholder="Enter target value"
                            disabled={isSearching}
                        />
                    </div>
                    
                    <button
                        onClick={binarySearch}
                        disabled={!target || isSearching}
                        className="btn btn-primary"
                    >
                        {isSearching ? 'Searching...' : 'Start Search'}
                    </button>
                    
                    <button
                        onClick={generateNewArray}
                        className="btn btn-success"
                    >
                        New Array
                    </button>
                    
                    <button
                        onClick={resetSearch}
                        className="btn btn-secondary"
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Array Visualization */}
            <div className="array-section">
                <h2>Array</h2>
                <div className="array-container">
                    {array.map((num, index) => (
                        <div key={index} className={getCellStyle(index)}>
                            {num}
                        </div>
                    ))}
                </div>
                
                {/* Index labels */}
                <div className="index-labels">
                    {array.map((_, index) => (
                        <div key={index} className="index-label">
                            {index}
                        </div>
                    ))}
                </div>
            </div>

            {/* Step Controls */}
            {searchHistory.length > 0 && (
                <div className="step-controls">
                    <h3>Step-by-Step Control</h3>
                    <div className="step-buttons">
                        <button
                            onClick={prevStep}
                            disabled={currentStep <= 0}
                            className="btn btn-secondary"
                        >
                            ← Previous
                        </button>
                        
                        <span className="step-info">
                            Step {currentStep} of {searchHistory.length}
                        </span>
                        
                        <button
                            onClick={nextStep}
                            disabled={currentStep >= searchHistory.length}
                            className="btn btn-secondary"
                        >
                            Next →
                        </button>
                    </div>
                    
                    {getComparisonText() && (
                        <div className="comparison-text">
                            <p>{getComparisonText()}</p>
                        </div>
                    )}
                </div>
            )}

            {/* Status and Information */}
            <div className="info-grid">
                {/* Current Status */}
                <div className="status-card">
                    <h3>Current Status</h3>
                    <div className="status-item">
                        <span className="status-label">Status:</span>
                        <span className={`status-value ${searchComplete ? (foundIndex !== null ? 'success' : 'error') : 'info'}`}>
                            {status || 'Ready to search'}
                        </span>
                    </div>
                    {low !== null && (
                        <div className="status-item">
                            <span className="status-label">Low pointer:</span>
                            <span className="status-badge blue">{low}</span>
                        </div>
                    )}
                    {high !== null && (
                        <div className="status-item">
                            <span className="status-label">High pointer:</span>
                            <span className="status-badge red">{high}</span>
                        </div>
                    )}
                    {mid !== null && (
                        <div className="status-item">
                            <span className="status-label">Mid pointer:</span>
                            <span className="status-badge yellow">{mid}</span>
                        </div>
                    )}
                </div>

                {/* Legend */}
                <div className="legend-card">
                    <h3>Color Legend</h3>
                    <div className="legend-item">
                        <div className="legend-color yellow"></div>
                        <span className="legend-text">Current mid element</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color blue"></div>
                        <span className="legend-text">Low pointer</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color red"></div>
                        <span className="legend-text">High pointer</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color green"></div>
                        <span className="legend-text">Found element</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color gray"></div>
                        <span className="legend-text">Search range</span>
                    </div>
                </div>
            </div>

            {/* Algorithm Info */}
            <div className="algorithm-info">
                <h3>How Binary Search Works</h3>
                <div className="algorithm-grid">
                    <div className="algorithm-section">
                        <h4>Algorithm Steps:</h4>
                        <ol>
                            <li>Start with low = 0, high = array.length - 1</li>
                            <li>Calculate mid = (low + high) / 2</li>
                            <li>Compare target with array[mid]</li>
                            <li>If equal, element found!</li>
                            <li>If target &lt; array[mid], search left half</li>
                            <li>If target &gt; array[mid], search right half</li>
                            <li>Repeat until low &gt; high</li>
                        </ol>
                    </div>
                    <div className="algorithm-section">
                        <h4>Time Complexity:</h4>
                        <ul>
                            <li>Best Case: O(1)</li>
                            <li>Average Case: O(log n)</li>
                            <li>Worst Case: O(log n)</li>
                            <li>Space Complexity: O(1)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Binaryvisual;