import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Here you would integrate with error logging service like Sentry
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div 
          className="min-h-screen bg-background flex items-center justify-center p-5"
          role="alert"
          aria-live="assertive"
        >
          <div className="max-w-md w-full bg-card rounded-lg shadow-lg p-8 text-center border border-border">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" aria-hidden="true" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Something went wrong
            </h1>
            <p className="text-muted-foreground mb-6">
              We apologize for the inconvenience. The application encountered an unexpected error.
            </p>
            {this.state.error && (
              <details className="text-left mb-6 p-3 bg-muted rounded text-xs">
                <summary className="cursor-pointer font-semibold mb-2">Error details</summary>
                <pre className="overflow-auto">{this.state.error.toString()}</pre>
              </details>
            )}
            <Button onClick={this.handleReset} className="w-full">
              Reload Application
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
