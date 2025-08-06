import { publish } from 'gh-pages';

publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/aryand028/aryan-desai-cybersec-portfolio.git',
  dotfiles: false
}, (err) => {
  if (err) {
    console.error('Deploy failed:', err);
  } else {
    console.log('Deploy successful!');
  }
});
