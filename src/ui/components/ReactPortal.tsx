/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactDOM from 'react-dom';

export function ReactPortal(
  { containerId, children }: { containerId: string, children: React.ReactNode },
) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return (
    ReactDOM.createPortal(children, container)
  );
}
