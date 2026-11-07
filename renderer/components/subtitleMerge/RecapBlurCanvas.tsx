import React, { useRef, useState } from 'react';

export interface RecapBlurBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Props {
  boxes: RecapBlurBox[];
  width: number;
  height: number;
  blurStrength: number;
  drawMode: boolean;
  selectedIndex: number | null;
  onSelect: (index: number | null) => void;
  onChange: (boxes: RecapBlurBox[]) => void;
}

/** Normalized multi-region blur editor. Geometry is independent of preview size. */
export default function RecapBlurCanvas({
  boxes,
  width,
  height,
  blurStrength,
  drawMode,
  selectedIndex,
  onSelect,
  onChange,
}: Props) {
  const root = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    original: RecapBlurBox;
    index: number;
    mode: 'move' | 'resize';
  } | null>(null);
  const drawing = useRef<{ pointerId: number; x: number; y: number } | null>(null);
  const [draft, setDraft] = useState<RecapBlurBox | null>(null);

  const point = (event: React.PointerEvent) => {
    const rect = root.current?.getBoundingClientRect();
    if (!rect || rect.width <= 0 || rect.height <= 0) return null;
    return {
      x: Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)),
      y: Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height)),
    };
  };
  const clamp = (box: RecapBlurBox): RecapBlurBox => {
    const w = Math.max(0.015, Math.min(1, box.w));
    const h = Math.max(0.015, Math.min(1, box.h));
    return {
      x: Math.max(0, Math.min(1 - w, box.x)),
      y: Math.max(0, Math.min(1 - h, box.y)),
      w,
      h,
    };
  };

  return (
    <div
      ref={root}
      className={`pointer-events-none absolute inset-0 z-[9] ${drawMode ? 'cursor-crosshair' : ''}`}
      data-recap-blur-canvas
      data-testid="recap-blur-canvas"
    >
      {boxes.map((box, index) => (
        <div
          key={index}
          role="button"
          tabIndex={0}
          aria-label={`Blur region ${index + 1}`}
          className={`pointer-events-auto absolute touch-none border-2 ${selectedIndex === index ? 'border-amber-300 bg-sky-300/15' : 'border-sky-300/80 bg-sky-300/10'} ${drawMode ? 'pointer-events-none' : 'cursor-move'}`}
          style={{
            left: `${box.x * 100}%`,
            top: `${box.y * 100}%`,
            width: `${box.w * 100}%`,
            height: `${box.h * 100}%`,
            backdropFilter: `blur(${Math.max(1, Math.min(50, blurStrength))}px)`,
            WebkitBackdropFilter: `blur(${Math.max(1, Math.min(50, blurStrength))}px)`,
          }}
          onPointerDown={(event) => {
            if (drawMode || event.button !== 0) return;
            event.preventDefault();
            event.stopPropagation();
            onSelect(index);
            event.currentTarget.setPointerCapture(event.pointerId);
            const p = point(event);
            if (!p) return;
            const target = event.target as HTMLElement;
            const mode = target.dataset.resizeHandle === 'true' ? 'resize' : 'move';
            drag.current = {
              pointerId: event.pointerId,
              startX: p.x,
              startY: p.y,
              original: box,
              index,
              mode,
            };
          }}
          onPointerMove={(event) => {
            const active = drag.current;
            if (!active || active.pointerId !== event.pointerId) return;
            const p = point(event);
            if (!p) return;
            const dx = p.x - active.startX;
            const dy = p.y - active.startY;
            const next = [...boxes];
            next[active.index] =
              active.mode === 'move'
                ? clamp({
                    ...active.original,
                    x: active.original.x + dx,
                    y: active.original.y + dy,
                  })
                : clamp({
                    ...active.original,
                    w: active.original.w + dx,
                    h: active.original.h + dy,
                  });
            onChange(next);
          }}
          onPointerUp={(event) => {
            if (drag.current?.pointerId !== event.pointerId) return;
            drag.current = null;
            event.currentTarget.releasePointerCapture(event.pointerId);
          }}
          onPointerCancel={() => {
            drag.current = null;
          }}
          onKeyDown={(event) => {
            if (event.key === 'Delete' || event.key === 'Backspace') {
              event.preventDefault();
              onChange(boxes.filter((_, i) => i !== index));
              onSelect(null);
            }
          }}
        >
          <span className="absolute left-1 top-1 rounded bg-black/70 px-1 text-[10px] text-white">
            Blur {index + 1}
          </span>
          <span
            data-resize-handle="true"
            className="pointer-events-auto absolute -bottom-1.5 -right-1.5 h-3 w-3 cursor-nwse-resize rounded-sm border border-white bg-sky-500"
            onPointerDown={(event) => {
              if (drawMode || event.button !== 0) return;
              event.preventDefault();
              event.stopPropagation();
              onSelect(index);
              event.currentTarget.parentElement?.setPointerCapture(event.pointerId);
              const p = point(event);
              if (!p) return;
              drag.current = {
                pointerId: event.pointerId,
                startX: p.x,
                startY: p.y,
                original: box,
                index,
                mode: 'resize',
              };
            }}
          />
        </div>
      ))}
      {drawMode && (
        <div
          className="pointer-events-auto absolute inset-0 cursor-crosshair"
          data-testid="recap-blur-draw-surface"
          onPointerDown={(event) => {
            if (event.button !== 0) return;
            const p = point(event);
            if (!p) return;
            event.currentTarget.setPointerCapture(event.pointerId);
            drawing.current = { pointerId: event.pointerId, ...p };
            setDraft({ x: p.x, y: p.y, w: 0, h: 0 });
            onSelect(null);
          }}
          onPointerMove={(event) => {
            const active = drawing.current;
            if (!active || active.pointerId !== event.pointerId) return;
            const p = point(event);
            if (!p) return;
            setDraft({
              x: Math.min(active.x, p.x),
              y: Math.min(active.y, p.y),
              w: Math.abs(p.x - active.x),
              h: Math.abs(p.y - active.y),
            });
          }}
          onPointerUp={(event) => {
            const active = drawing.current;
            if (!active || active.pointerId !== event.pointerId) return;
            const p = point(event);
            if (
              p &&
              Math.abs(p.x - active.x) >= 0.015 &&
              Math.abs(p.y - active.y) >= 0.015
            ) {
              const box = clamp({
                x: Math.min(active.x, p.x),
                y: Math.min(active.y, p.y),
                w: Math.abs(p.x - active.x),
                h: Math.abs(p.y - active.y),
              });
              onChange([...boxes, box]);
              onSelect(boxes.length);
            }
            drawing.current = null;
            setDraft(null);
          }}
          onPointerCancel={() => {
            drawing.current = null;
            setDraft(null);
          }}
        />
      )}
      {draft && (
        <div
          className="pointer-events-none absolute border-2 border-dashed border-amber-300 bg-amber-300/15"
          style={{
            left: `${draft.x * 100}%`,
            top: `${draft.y * 100}%`,
            width: `${draft.w * 100}%`,
            height: `${draft.h * 100}%`,
          }}
        />
      )}
      <span className="sr-only">{Math.round(width)} × {Math.round(height)}</span>
    </div>
  );
}
