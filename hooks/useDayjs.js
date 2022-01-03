import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.locale('ko');
dayjs.extend(relativeTime);

const useDayjs = (date) => {
  return dayjs(date).fromNow();
};

export const useToday = () => {
  return dayjs();
}

export default useDayjs;