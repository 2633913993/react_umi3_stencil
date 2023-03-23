import http from '@/utils/request';

export async function logins(data) {
  return http('post', '/ymf-auth/baseUser/login', data);
}
