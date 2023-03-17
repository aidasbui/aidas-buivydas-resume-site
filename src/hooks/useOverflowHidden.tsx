import { DependencyList, EffectCallback, useEffect } from 'react';

export const useOverflowHidden = () => {
  const disableScrollEffect: EffectCallback = () => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  };

  const dependencies: DependencyList = [];

  return useEffect(disableScrollEffect, dependencies);
};
