# JokesViewer

JokesViewer is a small React app that pulls in a batch of science-themed jokes and lays them out as a cheerful little gallery.

Open the page, wait a moment for the cards to load, and scroll through the jokes. Each card shows the joke content, its categories, and a quick copy button if you want to steal one for a group chat.

## What it does

- Fetches 10 random science jokes from the FreeAPI public jokes endpoint
- Shows loading skeletons while the request is in flight
- Handles failed requests with a retry state
- Displays jokes in a clean card layout with category tags
- Lets you copy individual jokes to the clipboard

## Built with

- React
- Vite
- Tailwind CSS

## Project structure

`src/App.jsx` handles fetching, loading, and error states.

`src/components/Header.jsx` renders the sticky top bar.

`src/components/JokeCard.jsx` renders each joke card and the copy interaction.

`src/components/SkeletonCard.jsx` handles the loading placeholders.

## Notes

This project uses a public jokes API, so the exact content can change between refreshes.
