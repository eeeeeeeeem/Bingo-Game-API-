# Bingo Card App

This is a Bingo Card App built using **React**, **Vite**, and **Axios**. The app allows players to join a Bingo game, fetch new Bingo cards from a game server, and check if any of their cards are winners.

## Installation

1. **Clone the Repository**:
   - Use the following command to clone this repository to your local machine:
     ```bash
     git clone https://github.com/your-username/bingo-card-app.git
     ```
   - Navigate to the project folder:
     ```bash
     cd C:\Users\Admin\Documents\ReactJS\bingo-game
     ```

2. **Install Dependencies**:
   - Make sure you have `npm` installed, then run:
     ```bash
     npm install
     ```

3. **Run the App**:
   - Start the Vite development server:
     ```bash
     npm run dev
     ```
   - Open your browser and navigate to the local server, typically at `http://localhost:5173/`.

## How to Use

### 1. **App.jsx** (Main Component)

- The main file for the Bingo Card app.
- This component:
  - Manages the state of the game, including fetching Bingo cards and storing them.
  - Allows the user to input a **Game Code** (default code: `HEelhJos`).
  - Provides a button to fetch new Bingo cards using the game code.
  - Displays errors if the game code is invalid or the card cannot be fetched.

### 2. **GameBoard.jsx** (Game Board Component)

- This component:
  - Displays multiple Bingo cards on the game board.
  - Dynamically updates the game board as more cards are fetched.
  - Arranges the cards in a flexible grid format using CSS.

### 3. **BingoCard.jsx** (Individual Bingo Card Component)

- This component:
  - Renders an individual Bingo card.
  - Shows card data returned from the server.
  - Provides a "Check Win" button to verify if the card is a winner.
  - Sends a request to the API with the card’s `playcard_token` to check if the card won.
  - Displays whether the card is a winner or not.

### How to Fetch and Check Bingo Cards

1. **Fetching Bingo Cards**:
   - Enter the game code into the input field (the default game code is `HEelhJos`).
   - Click "Get New Card" to fetch a new card from the server.
   - The Bingo card will appear on the screen.

2. **Checking for Wins**:
   - After fetching a card, each card will have a "Check Win" button.
   - Click the "Check Win" button to check if that particular card is a winner.
   - The result (winner or not) will be displayed below the card.

### API Information

The app uses two main API endpoints:

1. **Get New Card**:
   - URL: `http://www.hyeumine.com/getcard.php`
   - Parameter: `bcode` (the Bingo Game Code)
   - Response: JSON object with the card data or `0` if the game code is invalid.

2. **Check if Card is a Winner**:
   - URL: `http://www.hyeumine.com/checkwin.php`
   - Parameter: `playcard_token` (unique token for each Bingo card)
   - Response: `1` if the card is a winner, `0` otherwise.

### File Structure

```bash
├── src
│   ├── App.jsx        # Main component, handles the game logic
│   ├── components
│   │   ├── GameBoard.jsx  # Displays all Bingo cards
│   │   ├── BingoCard.jsx  # Displays an individual Bingo card
├── public             # Public assets (if any)
├── index.html         # Entry HTML file
├── package.json       # Project configuration and dependencies
