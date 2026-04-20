# Change Log  

Use inverse order

## 2026-04-20 Kale Mekbeb
Added collapsible Importance card with 1-5 sliders for Cost, Time, and Enjoyment weights
Slider panel is hidden by default and toggles open with a ▼/▲ arrow indicator
Number badge next to each slider updates live as the user drags
calculate() now reads weights dynamically, falling back to hardcoded defaults when the panel is hidden

## 2026-03-26 Luke Sewell
Added cards to UI
Added background gradient to UI
Now the program ignores empty inputs 
Set best score default to -infinity so that it supports negative scores 
Added labels above each input column 
Buttons and cards now move slightly when hovered and buttons change colors when hovered

## 2026-03-25 Luke Sewell
Added a bar graph visual to show the score distribution.
Bar graph uses the displayGraph() function and will update each time the user calculates.
Centered the ui.

## 2026-03-25 Kale Mekbeb
Removed repeated answers when you click 'Make Decision' button. 
If the options are changed the new best decision will now overwrite the old one.
Added some CSS to the decision output to make it cleaner.

## 2026-03-24 Luke Sewell
Added basic option calculation and labels to input boxes

## 2026-03-24 Luke Sewell
Added addOption button for multiple options and included places to put values. Added basic css skeleton.
