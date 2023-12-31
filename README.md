## Deploy link
https://frolicking-creponne-0be325.netlify.app/
## Main Feature
The SQL Runner Application is made in such a way that it allows you to execute SQL queries and render large table entries without experiencing performance bottlenecks. With this application, you can efficiently work with databases containing up to 1 million table entries,the application can show 1 million table rows for any individual table without losing the performance

## Performance
Optimized Performance using better useCallback and useMemo memo wherever possible.
Optimized large Table rendering using a virtualized rendering library, so as to stop rendering all the content at one time, and only render rows that are visible to the user while scrolling

Page load in 100millisec, no performance of UI blocking even if the table size in of more than 1000 lines, no JS blocking, proper garbage collection.Used network and performance tab to monitor these infos.
<img width="1437" alt="image" src="https://github.com/mrakm/onlineSQLrunner/assets/32322434/079b1baa-28e6-4977-90fc-0a2959b1ff02">
<img width="1424" alt="image" src="https://github.com/mrakm/onlineSQLrunner/assets/32322434/92129acd-aefc-4b1b-8f00-bd7e9b3cdf05">
<img width="493" alt="image" src="https://github.com/mrakm/onlineSQLrunner/assets/32322434/e899994b-1028-4432-9d44-b01109655307">




## TODO
Created rough system architecture design, need to properly document it.

## ScreenShot
![image](https://github.com/mrakm/onlineSQLrunner/assets/32322434/5c3c7e86-36a0-4504-abe7-5ec1ea2535f9)
![image](https://github.com/mrakm/onlineSQLrunner/assets/32322434/f506cf43-ce6e-4acc-8464-c80a0e7f4fb2)



## Library Used
| Library | Version | Purpose |
|---------------------------|-----------|-------------------------------------------------------------------------|
| @reduxjs/toolkit | ^1.9.5 | Redux state management toolkit |
| @types/node | 20.6.3 | TypeScript type definitions for Node.js |
| @types/react | 18.2.22 | TypeScript type definitions for React |
| @types/react-dom | 18.2.7 | TypeScript type definitions for React DOM |
| clsx | ^2.0.0 | Utility for constructing CSS class names dynamically |
| csv-parser | ^3.0.0 | Library for parsing CSV files |
| eslint | 8.49.0 | JavaScript and TypeScript linter |
| eslint-config-next | 13.5.2 | ESLint configuration for Next.js projects |
| fs | ^0.0.1-security | File system access in Node.js |
| next | 13.5.2 | Framework for building server-rendered React applications |
| prismjs | ^1.29.0 | Syntax highlighter for code snippets |
| react | 18.2.0 | JavaScript library for building user interfaces |
| react-dom | 18.2.0 | Library for rendering React components to the DOM |
| react-redux | ^8.1.2 | React bindings for Redux |
| react-simple-code-editor | ^0.13.1 | Lightweight code editor component for React |
| react-virtuoso | ^4.6.0 | Virtualized list component for React |
| typescript | 5.2.2 | Superset of JavaScript with static typing |
| @types/prismjs | ^1.26.1 | TypeScript type definitions for Prism.js |
| @types/react-virtualized-auto-sizer | ^1.0.1 | TypeScript type definitions for React Virtualized AutoSizer |
| @types/react-window | ^1.8.5 | TypeScript type definitions for React Window |
| autoprefixer | ^10.4.16 | CSS vendor prefixing tool |
| postcss | ^8.4.30 | CSS post-processor |
| tailwindcss | ^3.3.3 | Utility-first CSS framework |

---

