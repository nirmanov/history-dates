# Only Test Task - Interactive Historical Timeline

An elegant and interactive web application that showcases historical events through a unique circular interface and responsive slider. Built with modern web technologies and a focus on smooth animations and responsive design.

## 🌟 Key Features

### 1. Interactive Circle Navigation

- Custom-built circular navigation interface with smooth rotation
- Interactive event tags that rotate and scale on hover
- Responsive design with mobile-optimized controls
- Smooth GSAP animations for all transitions

### 2. Dynamic Timeline Slider

- Horizontal slider showcasing historical events
- Smooth animations when switching between time periods
- Mobile-optimized layout with period tags
- Responsive card layout with year and description
- Auto-resetting position when switching periods

### 3. Adaptive Design

- Fully responsive layout from mobile (320px) to wide screens (1920px)
- Dynamic scaling using the `dynit` utility
- Intelligent breakpoint handling
- Beautiful gradient decorations and transitions
- Mobile-first approach with optimized interactions

## 🛠 Technologies Used

- **React**: Core framework for UI development
- **TypeScript**: Type-safe development
- **Styled Components**: CSS-in-JS styling
- **GSAP**: Advanced animations
- **Swiper**: Touch slider implementation
- **dynit**: Dynamic viewport calculations

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd only-test-task
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run start
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

## 📱 Responsive Breakpoints

The application is designed to be responsive across different screen sizes:

- Mobile: 320px
- Mobile XL: 480px
- Tablet: 768px
- Laptop: 1200px
- Desktop: 1440px
- Wide: 1920px

## 🎨 Design Features

- **Smooth Animations**: Carefully crafted GSAP animations for transitions
- **Responsive Layout**: Adapts seamlessly to different screen sizes
- **Color Scheme**: Consistent color palette using CSS variables
- **Typography**: Custom font implementation with PT Sans and Bebas Neue
- **Interactive Elements**: Hover effects and click animations

## 🔧 Project Structure

```
src/
  ├── components/
  │   ├── Circle/        # Interactive circle navigation
  │   ├── CircleTag/     # Individual circle tags
  │   ├── Slider/        # Historical events slider
  │   ├── YearsRange/    # Year range display
  │   └── Title/         # Section title component
  ├── styles/
  │   └── GlobalStyles   # Global styling and variables
  └── mock/
      └── data/          # Mock data for historical events
```

## 📦 Dependencies

- React 18.3
- TypeScript
- styled-components 6.1
- GSAP with React plugin
- Swiper 11.1
- dynit 1.0

## 👨‍💻 Author

Vladislav Nirmanov

## 📝 License

This project is licensed under the ISC License.
