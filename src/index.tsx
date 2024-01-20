import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(<App />);
} else {
    document.body.innerHTML = 'Failed to load root element'
}
