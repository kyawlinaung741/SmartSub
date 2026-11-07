import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import VideoPreview from '../../subtitleMerge/VideoPreview';
import type { RecapBlurBox } from '../../subtitleMerge/RecapBlurCanvas';
import type { SubtitleStyle } from '../../../../types/subtitleMerge';

interface Props {
  videoPath: string | null;
  style: SubtitleStyle;
  blurBoxes: RecapBlurBox[];
  blurStrength: number;
  outputDirectory?: string;
  disabled?: boolean;
  softMux?: boolean;
  onStyleChange: (patch: Partial<SubtitleStyle>) => void;
  onBlurBoxesChange: (boxes: RecapBlurBox[]) => void;
  onBlurStrengthChange: (value: number) => void;
  onOutputDirectoryChange: (value: string) => void;
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex min-w-0 flex-col gap-1 text-xs text-muted-foreground">
      <span>{label}</span>
      {children}
    </label>
  );
}

/** Recap-only editor: existing SmartSub subtitle canvas + multi-region blur controls. */
export default function RecapEditorPanel({
  videoPath,
  style,
  blurBoxes,
  blurStrength,
  outputDirectory = '',
  disabled = false,
  softMux = false,
  onStyleChange,
  onBlurBoxesChange,
  onBlurStrengthChange,
  onOutputDirectoryChange,
}: Props) {
  const { t } = useTranslation('tasks');
  const [drawMode, setDrawMode] = useState(false);
  const [selectedBlur, setSelectedBlur] = useState<number | null>(null);
  const patch = (value: Partial<SubtitleStyle>) => {
    if (!disabled && !softMux) onStyleChange(value);
  };
  const removeSelected = () => {
    if (selectedBlur === null) return;
    onBlurBoxesChange(blurBoxes.filter((_, index) => index !== selectedBlur));
    setSelectedBlur(null);
  };

  return (
    <section className="space-y-3 rounded-lg border border-border p-3" data-recap-editor>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold">{t('recapEditor.title')}</h3>
          <p className="text-xs text-muted-foreground">
            {t('recapEditor.description')}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className={`rounded-md border px-3 py-1.5 text-xs ${drawMode ? 'border-primary bg-primary/10 text-primary' : 'border-border'}`}
            disabled={disabled || !videoPath}
            onClick={() => setDrawMode((value) => !value)}
          >
            {drawMode ? t('recapEditor.finishDrawing') : `+ ${t('recapEditor.draw')}`}
          </button>
          <button
            type="button"
            className="rounded-md border border-border px-3 py-1.5 text-xs"
            disabled={disabled || selectedBlur === null}
            onClick={removeSelected}
          >
            {t('recapEditor.deleteSelected')}
          </button>
        </div>
      </div>

      <div className="h-[340px] min-h-[240px] overflow-hidden rounded-md bg-black">
        <VideoPreview
          videoPath={videoPath}
          videoInfo={null}
          style={style}
          softMux={softMux}
          sampleText="မြန်မာဘာသာ စာတန်းထိုးနမူနာ"
          onUpdateStyle={patch}
          recapBlurBoxes={blurBoxes}
          recapBlurStrength={blurStrength}
          recapBlurDrawMode={drawMode}
          recapBlurSelectedIndex={selectedBlur}
          onRecapBlurSelect={setSelectedBlur}
          onRecapBlurChange={onBlurBoxesChange}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Field label={t('recapEditor.fontFamily')}>
          <input
            className="h-8 min-w-0 rounded-md border border-input bg-background px-2 text-sm text-foreground"
            value={style.fontName}
            disabled={disabled || softMux}
            onChange={(event) => patch({ fontName: event.target.value })}
          />
        </Field>
        <Field label={t('recapEditor.fontSize', { value: style.fontSize })}>
          <input type="range" min="10" max="72" value={style.fontSize}
            disabled={disabled || softMux} onChange={(event) => patch({ fontSize: Number(event.target.value) })} />
        </Field>
        <Field label={t('recapEditor.textColor')}>
          <input type="color" value={style.primaryColor} disabled={disabled || softMux}
            onChange={(event) => patch({ primaryColor: event.target.value })} />
        </Field>
        <Field label={t('recapEditor.outlineColor')}>
          <input type="color" value={style.outlineColor} disabled={disabled || softMux}
            onChange={(event) => patch({ outlineColor: event.target.value })} />
        </Field>
        <Field label={t('recapEditor.outlineWidth', { value: style.outline })}>
          <input type="range" min="0" max="10" step="0.5" value={style.outline}
            disabled={disabled || softMux} onChange={(event) => patch({ outline: Number(event.target.value) })} />
        </Field>
        <Field label={t('recapEditor.shadow', { value: style.shadow })}>
          <input type="range" min="0" max="10" step="0.5" value={style.shadow}
            disabled={disabled || softMux} onChange={(event) => patch({ shadow: Number(event.target.value) })} />
        </Field>
        <Field label={t('recapEditor.backgroundColor')}>
          <input type="color" value={style.backColor} disabled={disabled || softMux}
            onChange={(event) => patch({ backColor: event.target.value })} />
        </Field>
        <Field label={t('recapEditor.backgroundOpacity', { value: style.backOpacity ?? 50 })}>
          <input type="range" min="0" max="100" value={style.backOpacity ?? 50}
            disabled={disabled || softMux} onChange={(event) => patch({ backOpacity: Number(event.target.value) })} />
        </Field>
        <Field label={t('recapEditor.leftMargin')}>
          <input type="range" min="0" max="120" value={style.marginL}
            disabled={disabled || softMux} onChange={(event) => patch({ marginL: Number(event.target.value) })} />
        </Field>
        <Field label={t('recapEditor.rightMargin')}>
          <input type="range" min="0" max="120" value={style.marginR}
            disabled={disabled || softMux} onChange={(event) => patch({ marginR: Number(event.target.value) })} />
        </Field>
        <label className="flex items-center gap-2 text-xs text-foreground">
          <input type="checkbox" checked={style.bold} disabled={disabled || softMux}
            onChange={(event) => patch({ bold: event.target.checked })} />
          {t('recapEditor.bold')}
        </label>
        <label className="flex items-center gap-2 text-xs text-foreground">
          <input type="checkbox" checked={style.borderStyle === 3} disabled={disabled || softMux}
            onChange={(event) => patch({ borderStyle: event.target.checked ? 3 : 1 })} />
          {t('recapEditor.backgroundBox')}
        </label>
        <Field label={t('recapEditor.blurStrength', { value: blurStrength })}>
          <input type="range" min="1" max="50" value={blurStrength}
            disabled={disabled} onChange={(event) => onBlurStrengthChange(Number(event.target.value))} />
        </Field>
      </div>

      <Field label={t('recapEditor.outputFolder')}>
        <div className="flex min-w-0 gap-2">
          <input
            className="h-9 min-w-0 flex-1 rounded-md border border-input bg-background px-3 text-sm text-foreground"
            value={outputDirectory}
            disabled={disabled}
            placeholder="Choose a destination folder"
            onChange={(event) => onOutputDirectoryChange(event.target.value)}
          />
          <button
            type="button"
            className="h-9 shrink-0 rounded-md border border-border px-3 text-xs"
            disabled={disabled}
            onClick={async () => {
              const selected = await window?.ipc?.invoke('selectOutputDirectory');
              if (typeof selected === 'string' && selected.trim()) {
                onOutputDirectoryChange(selected);
              }
            }}
          >
            {t('recapEditor.browse')}
          </button>
        </div>
      </Field>
      {softMux && (
        <p className="text-xs text-muted-foreground">
          {t('recapEditor.softHint')}
        </p>
      )}
      <p className="text-xs text-muted-foreground">
        {softMux ? t('recapEditor.softFooter', { count: blurBoxes.length }) : t('recapEditor.hardFooter', { count: blurBoxes.length })}
      </p>
    </section>
  );
}
