import { themeNameList } from '@common/constant';

export const getThemeName = () => {
  const themeName = localStorage.getItem('curTheme') || themeNameList.light.name;
  return themeName;
};
