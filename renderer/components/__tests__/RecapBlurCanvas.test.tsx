import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import RecapBlurCanvas, {
  type RecapBlurBox,
} from '../subtitleMerge/RecapBlurCanvas';

beforeEach(() => {
  HTMLElement.prototype.setPointerCapture = jest.fn();
  HTMLElement.prototype.releasePointerCapture = jest.fn();
});
afterEach(() => jest.restoreAllMocks());

const box: RecapBlurBox = { x: 0.1, y: 0.1, w: 0.2, h: 0.2 };

function setup(overrides: Partial<React.ComponentProps<typeof RecapBlurCanvas>> = {}) {
  const onChange = jest.fn();
  const onSelect = jest.fn();
  const props = {
    boxes: [],
    width: 100,
    height: 100,
    blurStrength: 18,
    drawMode: false,
    selectedIndex: null,
    onSelect,
    onChange,
    ...overrides,
  };
  const view = render(<RecapBlurCanvas {...props} />);
  const root = view.getByTestId('recap-blur-canvas');
  jest.spyOn(root, 'getBoundingClientRect').mockReturnValue({
    x: 0, y: 0, left: 0, top: 0, right: 100, bottom: 100,
    width: 100, height: 100, toJSON: () => ({}),
  } as DOMRect);
  return { ...view, onChange, onSelect, root };
}

it('draws a normalized rectangle on the preview', () => {
  const view = setup({ drawMode: true });
  const surface = view.getByTestId('recap-blur-draw-surface');
  fireEvent.pointerDown(surface, { pointerId: 1, button: 0, clientX: 10, clientY: 20 });
  fireEvent.pointerMove(surface, { pointerId: 1, clientX: 50, clientY: 60 });
  fireEvent.pointerUp(surface, { pointerId: 1, clientX: 50, clientY: 60 });
  expect(view.onChange).toHaveBeenLastCalledWith([
    { x: 0.1, y: 0.2, w: 0.4, h: 0.4 },
  ]);
  expect(view.onSelect).toHaveBeenLastCalledWith(0);
});

it('moves a selected rectangle and clamps it inside the video frame', () => {
  const view = setup({ boxes: [box], selectedIndex: 0 });
  const region = view.getByRole('button', { name: 'Blur region 1' });
  fireEvent.pointerDown(region, { pointerId: 2, button: 0, clientX: 20, clientY: 20 });
  fireEvent.pointerMove(region, { pointerId: 2, clientX: 100, clientY: 100 });
  expect(view.onChange).toHaveBeenLastCalledWith([
    { x: 0.8, y: 0.8, w: 0.2, h: 0.2 },
  ]);
  fireEvent.pointerUp(region, { pointerId: 2, clientX: 100, clientY: 100 });
});

it('resizes a rectangle from its corner handle', () => {
  const view = setup({ boxes: [box], selectedIndex: 0 });
  const handle = view.container.querySelector('[data-resize-handle="true"]');
  expect(handle).not.toBeNull();
  fireEvent.pointerDown(handle!, { pointerId: 3, button: 0, clientX: 30, clientY: 30 });
  fireEvent.pointerMove(view.getByRole('button', { name: 'Blur region 1' }), {
    pointerId: 3, clientX: 50, clientY: 55,
  });
  expect(view.onChange).toHaveBeenLastCalledWith([
    { x: 0.1, y: 0.1, w: 0.4, h: 0.45 },
  ]);
});

it('deletes the selected rectangle with the keyboard', () => {
  const view = setup({ boxes: [box], selectedIndex: 0 });
  fireEvent.keyDown(view.getByRole('button', { name: 'Blur region 1' }), {
    key: 'Delete',
  });
  expect(view.onChange).toHaveBeenLastCalledWith([]);
  expect(view.onSelect).toHaveBeenLastCalledWith(null);
});
