const routers = [
  { name: '首页', id: '0', path: '/home' },
  {
    name: '系统设置',
    path: '/systemSettings/menuSet',
    children: [
      { name: '菜单管理', path: '/systemSettings/menuSet' },
      { name: '角色管理', path: '/systemSettings/roleManagement' },
    ],
    id: '1',
  },
  { name: '电子证照系统', id: '2' },
  { name: '入户联系函', id: '3' },
  { name: '大走访系统', id: '4' },
  { name: '预约咨询系统', id: '5' },
  { name: '信息发布系统', id: '6' },
];

export default routers;
