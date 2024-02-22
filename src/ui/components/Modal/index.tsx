/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/prefer-default-export */
import { X } from 'lucide-react';
import React from 'react';

import { cn } from '@app/utils/cn';

import { ReactPortal } from '../ReactPortal';

import { useModal } from './useModal';

interface IModalProps {
  open: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
  title: string;
  rightAction?: boolean;
}

export function Modal({
  open,
  handleCloseModal,
  children,
  title,
  rightAction,
}: IModalProps) {
  const { shoulderRender, handleOutsideClickModal } = useModal(open, handleCloseModal);

  if (!shoulderRender) {
    return null;
  }

  return (
    <ReactPortal
      containerId="portal-root"
    >
      <div
        onClick={handleCloseModal}
        className={cn(
          'fixed top-0 bottom-0 left-0 right-0 z-[1000] bg-zinc-900/50 backdrop-blur-[1px] animate-overlay-in-modal',
          !open && 'animate-overlay-out-modal',
        )}
      >
        <div
          onClick={handleOutsideClickModal}
          className={cn(
            'bg-zinc-800 p-[24px] rounded-md fixed w-full max-w-[400px] max-h-[500px] overflow-y-auto h top-[50%] left-[50%] z-[10001] space-y-10 animate-scale-in-modal',
            !open && 'animate-scale-out-modal',
          )}
        >
          <header className={cn(
            'flex items-center justify-between w-full max-w-[240px]',
            rightAction && 'max-w-[180px]',
          )}
          >
            <button type="button" onClick={handleCloseModal}>
              <X color="#fff" />
            </button>

            <span
              className="text-zinc-100 text-[18px] leading-3 font-medium"
            >
              {title}
            </span>
          </header>

          <div>
            {children}
          </div>
        </div>
      </div>
    </ReactPortal>
  );
}
