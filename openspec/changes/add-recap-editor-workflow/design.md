# Design: Recap interactive editor

## Reference behavior

The source Recap App stores blur rectangles as normalized frame coordinates `{x,y,w,h}`. The preview supports drawing a rectangle by pointer drag, moving a selected rectangle, resizing it from its bottom-right handle, selecting multiple rectangles, and deleting the selected rectangle. Blur strength is a separate setting.

Subtitle position is stored as normalized coordinates and can be dragged directly on the preview. Subtitle appearance includes font, size, bold, text color, outline color/width, shadow, background color/opacity, and width.

## SmartSub integration

- Keep the existing TaskWizard and pipeline submission path.
- Add optional Recap editor data to the task-local compose configuration; do not mutate global subtitle preferences.
- Use the existing SubtitleCanvas/VideoPreview interaction model for subtitle positioning and style.
- Add a Recap editor preview layer for blur rectangles. Store coordinates normalized to the displayed video frame so resizing the preview does not change placement.
- Apply blur filters to the source video before the subtitle burn-in filter. Preserve the current encoder and audio selection behavior.
- Recap output keeps the MP4 container for both hard and soft subtitle modes. Soft subtitles are muxed as an MP4 text track when no blur regions are active; selecting blur regions forces hard subtitles because the video must be re-encoded.
- Store the selected output directory in the task snapshot. If blank, save beside the source video; retain collision-safe naming.
- Serialize editor data in the task payload so queued/resumed tasks use the same geometry and style.

## Safety and compatibility

- Validate all normalized coordinates and clamp rectangles to the video frame.
- Ignore zero-area rectangles and reject non-finite values.
- Do not change output paths or overwrite behavior for ordinary tasks.
- Do not add unsupported opacity controls to blur; the source app uses blur strength and geometry.
- Do not claim the feature is complete until preview interactions, task persistence, FFmpeg output, and tests are all implemented.
