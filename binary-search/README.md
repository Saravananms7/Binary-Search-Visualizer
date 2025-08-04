# Binary Search Visualizer

A beautiful and interactive web application that visualizes the binary search algorithm step-by-step. Built with React and modern CSS, this tool helps students and developers understand how binary search works through real-time visualization.

![Binary Search Visualizer](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.12-purple?style=for-the-badge&logo=vite)
![CSS](https://img.shields.io/badge/CSS-Custom-green?style=for-the-badge&logo=css3)

## 🚀 Features

- **Interactive Visualization**: Watch the binary search algorithm in action with color-coded elements
- **Step-by-Step Control**: Navigate through each step of the search process
- **Real-time Status**: See current pointers (low, mid, high) and search status
- **Dynamic Arrays**: Generate new random arrays for different test cases
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Educational**: Includes algorithm explanation and time complexity information
- **Modern UI**: Clean, gradient-based design with smooth animations

## 🎯 How It Works

The visualizer demonstrates the binary search algorithm by:

1. **Color Coding Elements**:
   - 🟡 **Yellow**: Current mid element being compared
   - 🔵 **Blue**: Low pointer
   - 🔴 **Red**: High pointer
   - 🟢 **Green**: Found element
   - ⚪ **Gray**: Current search range

2. **Step-by-Step Process**:
   - Calculate mid = (low + high) / 2
   - Compare target with array[mid]
   - Update low/high pointers based on comparison
   - Repeat until element is found or search space is exhausted

## 🛠️ Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/binary-search-visualizer.git
   cd binary-search-visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📖 Usage

### Basic Usage

1. **Enter a target value** in the input field
2. **Click "Start Search"** to begin the visualization
3. **Use step controls** to navigate through the search process:
   - **Previous**: Go back one step
   - **Next**: Advance one step
   - **Step counter**: Shows current progress

### Advanced Features

- **Generate New Array**: Click "New Array" to create a new random sorted array
- **Reset Search**: Click "Reset" to clear the current search and start over
- **Real-time Status**: Monitor the current state of pointers and search status

### Understanding the Visualization

- **Array Display**: The main array shows all elements with their indices
- **Color Legend**: Reference guide for understanding the color coding
- **Status Panel**: Shows current pointers and search status
- **Algorithm Info**: Educational section explaining the algorithm

## 🎨 Features in Detail

### Interactive Controls
- Target input with validation
- Start/Stop search functionality
- Step-by-step navigation
- Array generation and reset options

### Visual Elements
- **Array Cells**: Each number is displayed in a styled container
- **Pointer Indicators**: Clear visual representation of low, mid, and high pointers
- **Search Range**: Highlighted area showing the current search space
- **Found Element**: Special highlighting when target is located

### Educational Content
- **Algorithm Steps**: Detailed explanation of the binary search process
- **Time Complexity**: Information about best, average, and worst case scenarios
- **Color Legend**: Clear explanation of what each color represents

## 🏗️ Project Structure

```
binary-search-visualizer/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx              # Main app component
│   ├── binaryserach.jsx     # Binary search visualizer component
│   ├── index.css            # Custom CSS styles
│   └── main.jsx             # React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Algorithm Details

### Binary Search Algorithm
Binary search is an efficient algorithm for finding a target element in a sorted array. It works by repeatedly dividing the search interval in half.

**Time Complexity**:
- **Best Case**: O(1) - Element found at the middle
- **Average Case**: O(log n) - Element found after several comparisons
- **Worst Case**: O(log n) - Element not found or found at the end

**Space Complexity**: O(1) - Uses constant extra space

### Key Steps
1. Start with low = 0, high = array.length - 1
2. Calculate mid = (low + high) / 2
3. Compare target with array[mid]
4. If equal, element found!
5. If target < array[mid], search left half (high = mid - 1)
6. If target > array[mid], search right half (low = mid + 1)
7. Repeat until low > high

## 🎨 Customization

The project uses custom CSS without any external styling frameworks. You can easily customize:

- **Colors**: Modify the CSS variables in `src/index.css`
- **Layout**: Adjust container sizes and spacing
- **Animations**: Customize transition effects and hover states
- **Typography**: Change fonts and text styling

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Add this to your `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/binary-search-visualizer",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with custom CSS
- Bundled with [Vite](https://vitejs.dev/)
- Icons and visual elements created for educational purposes

## 📞 Contact

If you have any questions or suggestions, please feel free to reach out:

- **GitHub Issues**: [Create an issue](https://github.com/yourusername/binary-search-visualizer/issues)
- **Email**: saravanansworkspace@gmail.com

---

⭐ **Star this repository if you found it helpful!**
