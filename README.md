# Wishlist App
Wishlist Web App
is interactive wishlist application built with HTML, CSS, and JavaScript. Users can add new items, mark them as completed, and remove them from the list.
A dynamic wishlist application built with HTML, CSS, and JavaScript that allows users to create, manage and track their wishlist items.
Live Demo: https://whishlist-drab.vercel.app/

## Features

- Add new items to your wishlist
- Mark items as completed
- Remove items from the list 
- Persistent storage using localStorage
- Unique IDs for each wishlist item using UUID
- Responsive design with clean UI

## Technical Details

- Written in vanilla JavaScript
- Uses the following key components:
  - UUID generation for unique item IDs
  - LocalStorage for data persistence
  - Event delegation for handling item interactions
  - CSS Flexbox for responsive layout

## Project Structure

```
├── index.html              # Main HTML file
├── ch-1-wishList.css      # Styles
├── ch-1-wishList.js       # JavaScript logic
└── images/                # Image assets
```

## Usage

1. Enter your wishlist item in the input field
2. Click "Add" or press Enter to add the item
3. Check the checkbox to mark items as completed
4. Click the "Remove" button to delete items

## Implementation

The app uses:
- Event listeners for form submission and item interactions
- UUID generation for unique item identification
- LocalStorage API for data persistence
- DOM manipulation
