import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface ErrorHandlerProps {
  fallbackRenderFunction({ error }: { error: Error }): React.ReactNode;
  children: React.ReactNode;
}

const ErrorHandler = ({
  fallbackRenderFunction,
  children,
}: ErrorHandlerProps) => {
  return (
    <ErrorBoundary fallbackRender={fallbackRenderFunction}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorHandler;
