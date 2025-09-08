# The Smith - Metallurgical Guide & Resources

A comprehensive Electron application that teaches metallurgy and bladesmithing from the ground up. From finding ore in the mountains to forging Damascus steel, The Smith provides both primitive techniques for rebuilding society and modern resources for today's craftspeople.

## Features

### 📚 Complete Metallurgical Guide
Eight detailed chapters covering everything from basic ore identification to advanced metalworking:
- **Finding Ore** - Geological indicators, mountain formations, and ore identification
- **Building Kilns** - Clay kilns, stone furnaces, and temperature management
- **Smelting Basics** - Ore processing, flux materials, and metal extraction
- **Forging Fundamentals** - Hammer techniques, anvil setup, and heat treating
- **Blade Making** - Steel selection, grinding, tempering, and handle construction
- **Tool Creation** - Making your own hammers, tongs, and essential tools
- **Advanced Techniques** - Damascus steel, pattern welding, and Japanese techniques
- **Safety & First Aid** - Workshop safety, burn treatment, and emergency procedures

### 🔧 Modern Resources Directory
Curated collection of contemporary resources:
- Material and tool suppliers
- Educational institutions and workshops
- Essential books and reading materials
- Online communities and forums
- Equipment manufacturers
- Professional workshops and schools
- Safety equipment and information

### 💻 Application Features
- Clean, dark-themed interface
- Sidebar navigation with chapter icons
- Full-text search across all content
- Bookmark system for saving important sections
- Keyboard shortcuts for efficient navigation
- Print and PDF export capabilities
- Cross-platform support (Windows, macOS, Linux)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- ImageMagick (for icon generation)

### Setup
```bash
# Clone the repository
git clone https://github.com/GuildMasterDev/Smith.git
cd Smith

# Install dependencies
npm install

# Generate icons (requires ImageMagick)
./scripts/generate-icons.sh

# Start the application
npm start
```

## Development

### Project Structure
```
Smith/
├── src/
│   ├── main/           # Electron main process
│   ├── renderer/       # Frontend HTML/CSS/JS
│   └── data/          # Guide content and resources
├── scripts/           # Build and utility scripts
├── build/            # Generated icons and build artifacts
└── forge.config.js   # Electron Forge configuration
```

### Available Scripts
- `npm start` - Start the application in development mode
- `npm run package` - Package the application for the current platform
- `npm run make` - Create distributable packages for all platforms

### Building for Distribution

#### Windows
```bash
npm run make -- --platform=win32
```

#### macOS
```bash
npm run make -- --platform=darwin
```

#### Linux
```bash
npm run make -- --platform=linux
```

## Technologies Used
- **Electron** - Cross-platform desktop application framework
- **Vanilla JavaScript** - No framework dependencies for simplicity
- **Electron Forge** - Build and packaging toolchain
- **ImageMagick** - Programmatic icon generation

## Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues for:
- Additional guide content
- New resource recommendations
- UI/UX improvements
- Bug fixes

## License
MIT License - See LICENSE file for details

## Acknowledgments
This application was created as a comprehensive resource for those interested in metallurgy and bladesmithing, whether for practical skills, historical interest, or emergency preparedness. The content combines traditional techniques passed down through generations with modern best practices and safety standards.

## Support
For issues, questions, or suggestions, please open an issue on GitHub.

---
*Built with the vision of preserving ancient crafts for future generations.*