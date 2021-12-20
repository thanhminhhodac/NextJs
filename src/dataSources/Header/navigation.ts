export interface navigationItem {
  path: string;
  label: string;
}

export const navigationList: navigationItem[] = [
  { path: '/', label: 'Home' },
  { path: '/blog', label: 'Blog' },
  { path: '/project', label: 'Project' },
  { path: '/about', label: 'About me' },
];

export default navigationList;
