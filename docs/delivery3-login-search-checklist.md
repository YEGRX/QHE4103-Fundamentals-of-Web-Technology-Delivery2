# Delivery 3 Login + Search Integration Checklist

This note is for the final Delivery 3 walkthrough focused on `liboyiboop` and
`tonghaoge`.

## Branch and PR evidence

- `#12` shows `liboyi0601-boop` as the login backend author.
- `#14` shows `tonghaoge` as the search backend author.
- The integration branch combines both without replacing the individual PRs.

## Local MAMP setup

1. Start `MAMP`.
2. Enable `Apache` and `MySQL`.
3. Point the web root to the integration worktree.
4. Import `database/schema.sql`.
5. Import `database/seed.sql`.
6. Update `config/database.php` if the local MySQL username or password differs.

Recommended access URL:

- `http://localhost:8888/login.html`
- `http://localhost:8888/search.html`

## Login walkthrough for liboyiboop

Demo credentials:

- Username: `surpass01`
- Password: `drive2026`

Expected checks:

1. Open `login.html`.
2. Submit the demo credentials.
3. Confirm the header changes from guest mode to signed-in mode.
4. Open `api/session.php` and confirm `authenticated` is `true`.
5. Click `Log out`.
6. Re-open `api/session.php` and confirm `authenticated` is `false`.
7. Open `add-car.html` while signed out and confirm the seller gate still appears.

## Search walkthrough for tonghaoge

Expected checks:

1. Open `search.html`.
2. Search `Roma`.
3. Search `Porsche`.
4. Search `2022` and `2024`.
5. Change `brand`, `bodyStyle`, `fuel`, and `sort`.
6. Open a car card and confirm the detail page still renders the selected vehicle.

## Fallback behavior

- If PHP or MySQL is unavailable, `search.html` should fall back to the local
  preview inventory instead of breaking completely.
- `login.html` requires the PHP backend to demonstrate the real session flow.

## Suggested video evidence

- Show the login request and resulting signed-in state.
- Show `api/session.php` before and after logout.
- Show database-backed search results for at least two queries.
- Show the transition from a search result into `car-detail.html`.
