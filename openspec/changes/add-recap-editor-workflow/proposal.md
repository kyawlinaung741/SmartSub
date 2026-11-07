# Add Recap video editor workflow

## Why

The Recap workflow must preserve the interactive editing behavior of the existing Recap App rather than replacing it with fixed blur coordinates or a simplified subtitle form.

## What Changes

- Add a Recap-specific mode to the existing TaskWizard, reusing its task submission and pipeline.
- Add a preview editor that supports drawing multiple normalized blur rectangles, selecting, dragging, resizing, and deleting each rectangle.
- Reuse SmartSub's subtitle preview/style system and expose direct preview dragging plus subtitle appearance controls in Recap mode.
- Persist editor geometry and subtitle style in the task snapshot and apply the blur filter before burning the translated subtitle.
- Keep all existing non-Recap wizard behavior unchanged.

## Compatibility

The Recap editor is opt-in. Existing task recipes and existing compose jobs without editor settings retain their current behavior.
