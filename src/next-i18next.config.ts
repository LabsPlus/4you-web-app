import path from 'path';

const nextI18NextConfig = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
    localePath: path.resolve('./public/locales')
  }
};

export default nextI18NextConfig;
