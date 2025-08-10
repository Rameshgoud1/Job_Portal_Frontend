import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('JobFinder Portal Error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '300' }}>
            Oops! Something went wrong
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            We're sorry for the inconvenience. Please refresh the page to try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '1rem 2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: '2px solid white',
              borderRadius: '30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#667eea';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.color = 'white';
            }}
          >
            Refresh Page
          </button>
          
          {/* Development error details */}
          {process.env.NODE_ENV === 'development' && (
            <details style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '600px' }}>
              <summary style={{ cursor: 'pointer', marginBottom: '1rem' }}>
                Error Details (Development)
              </summary>
              <pre style={{ 
                background: 'rgba(0, 0, 0, 0.2)', 
                padding: '1rem', 
                borderRadius: '8px',
                fontSize: '0.8rem',
                overflow: 'auto'
              }}>
                {this.state.error && this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

// Get the root element
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Render the app with error boundary
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

