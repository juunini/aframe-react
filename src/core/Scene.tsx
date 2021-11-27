import React from 'react';

import type {
  FogProps,
  InspectorProps,
  BackgroundProps,
  VrModeUIProps,
  Stats,
  ScreenshotProps,
  PoolProps,
  KeyboardShortcutsProps,
  Embedded,
} from '../components/scene';
import {
  Fog,
  Inspector,
  Background,
  VrModeUI,
  DefaultStats,
  Screenshot,
  Pool,
  KeyboardShortcuts,
  DefaultEmbedded,
} from '../components/scene';

interface Props {
  fog?: FogProps;
  inspector?: InspectorProps;
  background?: BackgroundProps;
  vrModeUI?: VrModeUIProps;
  stats?: Stats;
  screenshot?: ScreenshotProps;
  pool?: PoolProps;
  keyboardShortcuts?: KeyboardShortcutsProps;
  embedded?: Embedded;
  children?: React.ReactNode;
  registeredComponents: {
    [key: string]: string | number | boolean;
  };
}

export default function Scene({
  fog = {},
  inspector = {},
  background = {},
  vrModeUI = {},
  stats = DefaultStats,
  screenshot = {},
  pool = {},
  keyboardShortcuts = {},
  embedded = DefaultEmbedded,
  children,
  registeredComponents,
}: Props): JSX.Element {
  return (
    <a-scene
      fog={new Fog(fog).toString()}
      inspector={new Inspector(inspector).toString()}
      background={new Background(background).toString()}
      vr-mode-ui={new VrModeUI(vrModeUI).toString()}
      stats={String(stats)}
      screenshot={new Screenshot(screenshot).toString()}
      pool={new Pool(pool).toString()}
      keyboard-shortcuts={new KeyboardShortcuts(keyboardShortcuts).toString()}
      Embedded={String(embedded)}
      {...registeredComponents}
    >
      {children}
    </a-scene>
  );
}
