import path from 'path';
import autoprefixer from 'autoprefixer';  // Asegúrate de importar autoprefixer

export default {
  root: path.resolve(__dirname, 'src'),
  css: {
    postcss: {
      plugins: [autoprefixer],  // Agrega autoprefixer a la lista de plugins
    },
  },
};
