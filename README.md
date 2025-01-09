# Get Year

Insert current year into any HTML element by CDN script

---
## Features

- Works instantly via CDN <script> tag
- Config through `data-get-year` attribute
- Supports default `.current-year` class

---

## Usage

```html
<span class="current-year"></span>
<script src="https://cdn.jsdelivr.net/npm/get-year"></script>
```

## Extended Configuration

```html
<div data-get-year=".footer-year"></div>
```

**Parameters:**

`data-get-year="[selector]"`

- Optional parameter: CSS selector to target other elements
- If empty, updates the element itself

---

### Example Implementation

```html

<!DOCTYPE html>
<html>
<head>
    <title>Get Year Example</title>
    <script src="https://cdn.jsdelivr.net/npm/get-year"></script>
</head>
<body>
    <!-- Basic usage -->
    Copyright © <span class="current-year"></span>
</body>
</html>

```

---

## License

MIT License

---

## Contributing

Contributions welcome! Feel free to:

- Fork the repository
- Submit pull requests
- File issues
- Suggest improvements

