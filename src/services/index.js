import http from '@/utils/request';

export default function logins(data) {
  return http('post', '', data);
}
