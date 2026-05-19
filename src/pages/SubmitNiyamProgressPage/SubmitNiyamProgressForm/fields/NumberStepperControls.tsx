import React from 'react';
import { Box, IconButton } from '@mui/material';

interface NumberStepperControlsProps {
  decreaseLabel: string;
  increaseLabel: string;
  min?: number;
  onChange: (value: number) => void;
  value: number;
}

const repeatDelayMs = 350;
const repeatIntervalMs = 90;

const stepperButtonSx = {
  'width': 40,
  'height': 40,
  'border': '1px solid rgba(174, 52, 8, 0.24)',
  'backgroundColor': 'rgba(255, 231, 162, 0.45)',
  'color': '#7B2E0D',
  'fontSize': '1.35rem',
  'fontWeight': 900,
  '&:hover': { backgroundColor: 'rgba(255, 231, 162, 0.75)' },
};

function NumberStepperControls({
  decreaseLabel,
  increaseLabel,
  min = 1,
  onChange,
  value,
}: NumberStepperControlsProps): JSX.Element {
  const valueRef = React.useRef(value);
  const onChangeRef = React.useRef(onChange);
  const delayRef = React.useRef<number>();
  const intervalRef = React.useRef<number>();

  React.useEffect(() => {
    valueRef.current = value;
  }, [value]);

  React.useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const stopRepeating = React.useCallback(() => {
    if (delayRef.current !== undefined) {
      window.clearTimeout(delayRef.current);
      delayRef.current = undefined;
    }

    if (intervalRef.current !== undefined) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }, []);

  React.useEffect(() => stopRepeating, [stopRepeating]);

  const changeBy = React.useCallback(
    (delta: number) => {
      const nextValue = Math.max(min, valueRef.current + delta);

      if (nextValue === valueRef.current && delta < 0) {
        return false;
      }

      valueRef.current = nextValue;
      onChangeRef.current(nextValue);
      return true;
    },
    [min],
  );

  const startRepeating = React.useCallback(
    (delta: number) => (event: React.PointerEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (!changeBy(delta)) {
        return;
      }

      stopRepeating();
      delayRef.current = window.setTimeout(() => {
        intervalRef.current = window.setInterval(() => {
          if (!changeBy(delta)) {
            stopRepeating();
          }
        }, repeatIntervalMs);
      }, repeatDelayMs);
    },
    [changeBy, stopRepeating],
  );

  const handleKeyboardStep = React.useCallback(
    (delta: number) => (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      event.preventDefault();
      changeBy(delta);
    },
    [changeBy],
  );

  return (
    <Box sx={{ display: 'flex', gap: 0.6 }}>
      <IconButton
        aria-label={decreaseLabel}
        disabled={value <= min}
        onBlur={stopRepeating}
        onContextMenu={(event) => event.preventDefault()}
        onKeyDown={handleKeyboardStep(-1)}
        onPointerCancel={stopRepeating}
        onPointerDown={startRepeating(-1)}
        onPointerLeave={stopRepeating}
        onPointerUp={stopRepeating}
        size='large'
        sx={stepperButtonSx}
        type='button'
      >
        -
      </IconButton>
      <IconButton
        aria-label={increaseLabel}
        onBlur={stopRepeating}
        onContextMenu={(event) => event.preventDefault()}
        onKeyDown={handleKeyboardStep(1)}
        onPointerCancel={stopRepeating}
        onPointerDown={startRepeating(1)}
        onPointerLeave={stopRepeating}
        onPointerUp={stopRepeating}
        size='large'
        sx={stepperButtonSx}
        type='button'
      >
        +
      </IconButton>
    </Box>
  );
}

export default NumberStepperControls;
