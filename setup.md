## How to setup Tailwind CSS

Step 1: Run following commands:
```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Updagte tailwind.config.js file to include this line:
```
content: ["*.html"]
```

Step 3: Create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include src/output.css to your html

Step 5: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```