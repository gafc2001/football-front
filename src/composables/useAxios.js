import { getCurrentInstance } from 'vue';

export default function useAxios() {
  const { proxy } = getCurrentInstance();
  return proxy.$axios;
}