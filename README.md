**React Piano**  

## 🔗 Live Demo [React Piano on Netlify](https://livepianochrisalym.netlify.app/)

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

This project represents a funny interactive Piano based in React and JavaScript.

**Futures:**
1) Playable white notes with keyboard keys (Z. X, C, V, B, N, M)
2) Playable black flat notes with keyboard keys (S, F, G, J, K)
3) Adjustable custom volume slider.
4) Interactive UI with styled header, keys, and instructions.
5) Audio files stored in `public/noteAudio/` representing the real-world piano notes C D E F G A B. 

<img width="770" height="770" alt="image" src="https://github.com/user-attachments/assets/2887b4e1-72b8-4742-9af0-2cc2f2f0cde4" />

**Short Descreption:**
The project is built step by step defining individual keys with their note mappings. Then all keys are combined into a Piano component that renders all keys in a row.
Later on audio files are connected so each key triggers the correct sound. Final step includes adding the header, volume, and instructions so as to make the Piano interactive and visual appealing. 


### Installation
```bash
# Clone the repository
git clone https://github.com/ChrisAlymaras/React-Piano.git

# Navigate into the project folder
cd React-Piano

# Install dependencies
npm install

# Start the development server
npm start
