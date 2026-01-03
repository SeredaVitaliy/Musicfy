// import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
// import './ui/tracks.css';
// import './ui/track-detail.css';
import { MainPage } from './ui/MainPage.tsx';

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl!);
reactRoot.render(<MainPage />);
